import 'dart:core';

/// A Dart class to generate YouTube-like hashes from one or many numbers.
/// {@tool sample}
/// https://github.com/olexale/hashids/blob/master/lib/hashids2.dart
/// The simplest use case:
///
/// ```dart
/// final hashids = HashIds();
/// final fromNumber = hashids.encode(42);
/// final number = hashids.decode(fromNumber); // [42]
/// ```
/// {@end-tool}
class HashIds {
  HashIds(
      {String salt = DEFAULT_SALT,
      int minHashLength = DEFAULT_MIN_HASH_LENGTH,
      String alphabet = DEFAULT_ALPHABET}) {
    this.salt = salt != null ? salt : DEFAULT_SALT;
    this.minHashLength =
        minHashLength > 0 ? minHashLength : DEFAULT_MIN_HASH_LENGTH;

    var uniqueAlphabet = '';
    for (int i = 0; i < alphabet.length; i++) {
      if (!uniqueAlphabet.contains(alphabet[i])) {
        uniqueAlphabet += alphabet[i];
      }
    }

    alphabet = uniqueAlphabet.toString();

    if (alphabet.length < MIN_ALPHABET_LENGTH) {
      throw 'alphabet must contain at least $MIN_ALPHABET_LENGTH unique characters';
    }

    if (alphabet.contains(' ')) {
      throw 'alphabet cannot contains spaces';
    }

    // seps should contain only characters present in alphabet;
    // alphabet should not contains seps
    String seps = DEFAULT_SEPS;
    for (int i = 0; i < seps.length; i++) {
      final int j = alphabet.indexOf(seps[i]);
      if (j == -1) {
        seps = seps.substring(0, i) + ' ' + seps.substring(i + 1);
      } else {
        alphabet = alphabet.substring(0, j) + ' ' + alphabet.substring(j + 1);
      }
    }

    alphabet = alphabet.replaceAll(RegExp(r'\s+|\s'), '');
    seps = seps.replaceAll(' ', '');
    seps = _consistentShuffle(seps, this.salt);

    if ((seps.isEmpty) || ((alphabet.length / seps.length) > SEP_DIV)) {
      int sepsLen = (alphabet.length / SEP_DIV).ceil();

      if (sepsLen == 1) {
        sepsLen++;
      }

      if (sepsLen > seps.length) {
        final int diff = sepsLen - seps.length;
        seps += alphabet.substring(0, diff);
        alphabet = alphabet.substring(diff);
      } else {
        seps = seps.substring(0, sepsLen);
      }
    }

    alphabet = _consistentShuffle(alphabet, this.salt);
    // use double to round up
    final int guardCount = (alphabet.length / GUARD_DIV).ceil();

    String guards;
    if (alphabet.length < 3) {
      guards = seps.substring(0, guardCount);
      seps = seps.substring(guardCount);
    } else {
      guards = alphabet.substring(0, guardCount);
      alphabet = alphabet.substring(guardCount);
    }
    this.guards = guards;
    this.alphabet = alphabet;
    this.seps = seps;
  }

  ///  Max number that can be encoded with Hashids.
  static const MAX_NUMBER = 9007199254740992;

  static const DEFAULT_ALPHABET =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  static const DEFAULT_SEPS = 'cfhistuCFHISTU';
  static const DEFAULT_SALT = '';

  static const int DEFAULT_MIN_HASH_LENGTH = 0;
  static const int MIN_ALPHABET_LENGTH = 16;
  static const double SEP_DIV = 3.5;
  static const int GUARD_DIV = 12;

  String salt;
  int minHashLength;
  String alphabet;
  String seps;
  String guards;

  /// Encodes int, String (with int), or list of ints
  String encode(dynamic number) {
    if (number is int) {
      return encodeInt(number);
    }
    if (number is String) {
      return encodeString(number);
    }
    if (number is List<int>) {
      return encodeList(number);
    }
    return '';
  }

  ///
  /// Encode single int
  ///
  String encodeInt(int number) {
    return encodeList([number]);
  }

  ///
  /// Encode string with number
  ///
  String encodeString(String number) {
    final parsed = int.tryParse(number) ?? -1;
    return encodeList([parsed]);
  }

  ///
  /// Encode list of numbers
  ///
  String encodeList(List<int> numbers) {
    if (numbers?.isEmpty ?? true) {
      return '';
    }

    for (final number in numbers) {
      if (number < 0) {
        return '';
      }
      if (number > MAX_NUMBER) {
        throw ArgumentError('number can not be greater than $MAX_NUMBER');
      }
    }
    return _encode(numbers);
  }

  /// Decodes hasn into list of ints
  List<int> decode(String hash) {
    if (hash.isEmpty) {
      return [];
    }

    final validChars = alphabet + guards + seps;
    for (int i = 0; i < hash.length; i++) {
      if (!validChars.contains(hash[i])) {
        return [];
      }
    }

    return _decode(hash, alphabet);
  }

  ///
  /// Encode hex to string
  ///
  String encodeHex(String hex) {
    final List<int> result = [];
    if (!RegExp(r'^[0-9a-fA-F]+$').hasMatch(hex)) {
      return '';
    }

    final numbers =
        RegExp(r'[\w\W]{1,12}', multiLine: true, caseSensitive: false)
            .allMatches(hex);

    for (var match in numbers) {
      result.add(int.parse('1' + match.group(0), radix: 16));
    }

    return encode(result);
  }

  ///
  /// Decode string to numbers
  ///
  String decodeHex(String hash) {
    var result = '';
    final List<int> numbers = decode(hash);

    for (final number in numbers) {
      result += number.toRadixString(16).substring(1);
    }

    return result.toString();
  }

  /* Private methods */

  String _encode(List<int> numbers) {
    var numberHashInt = 0;
    for (int i = 0; i < numbers.length; i++) {
      numberHashInt += numbers[i] % (i + 100);
    }
    String alphabet = this.alphabet;
    final ret = alphabet[numberHashInt % alphabet.length];

    int num;
    int sepsIndex, guardIndex;
    String buffer;
    var retStrB = '';
    retStrB += ret;
    String guard;

    for (int i = 0; i < numbers.length; i++) {
      num = numbers[i];
      buffer = ret + salt + alphabet;

      alphabet =
          _consistentShuffle(alphabet, buffer.substring(0, alphabet.length));
      final String last = _hash(num, alphabet);

      retStrB += last;

      if (i + 1 < numbers.length) {
        if (last.isNotEmpty) {
          num %= last.codeUnitAt(0) + i;
          sepsIndex = num % seps.length;
        } else {
          sepsIndex = 0;
        }
        retStrB += seps[sepsIndex];
      }
    }

    String retStr = retStrB.toString();
    if (retStr.length < minHashLength) {
      guardIndex = (numberHashInt + retStr.codeUnitAt(0)) % guards.length;
      guard = guards[guardIndex];

      retStr = guard + retStr;

      if (retStr.length < minHashLength) {
        guardIndex = (numberHashInt + retStr.codeUnitAt(2)) % guards.length;
        guard = guards[guardIndex];

        retStr += guard;
      }
    }

    final int halfLen = alphabet.length ~/ 2;
    while (retStr.length < minHashLength) {
      alphabet = _consistentShuffle(alphabet, alphabet);
      retStr =
          alphabet.substring(halfLen) + retStr + alphabet.substring(0, halfLen);
      final int excess = retStr.length - minHashLength;
      if (excess > 0) {
        final int startPos = excess ~/ 2;
        retStr = retStr.substring(startPos, startPos + minHashLength);
      }
    }

    return retStr;
  }

  List<int> _decode(String hash, String alphabet) {
    List<int> ret = <int>[];

    int i = 0;

    String hashBreakdown = hash;
    for (var j = 0; j < guards.length; j++) {
      hashBreakdown = hashBreakdown.replaceAll(guards[j], ' ');
    }
    List<String> hashArray = hashBreakdown.split(' ');

    if (hashArray.length == 3 || hashArray.length == 2) {
      i = 1;
    }

    if (hashArray.isNotEmpty) {
      hashBreakdown = hashArray[i];
      if (hashBreakdown.isNotEmpty) {
        final lottery = hashBreakdown[0];

        hashBreakdown = hashBreakdown.substring(1);
        for (var j = 0; j < seps.length; j++) {
          hashBreakdown = hashBreakdown.replaceAll(seps[j], ' ');
        }
        hashArray = hashBreakdown.split(' ');

        String subHash, buffer;
        for (final String aHashArray in hashArray) {
          subHash = aHashArray;
          buffer = lottery + salt + alphabet;
          alphabet = _consistentShuffle(
              alphabet, buffer.substring(0, alphabet.length));
          ret.add(_unhash(subHash, alphabet));
        }
      }
    }

    // transform from List<Long> to long[]

    if (encode(ret) != hash) {
      ret = [];
    }
    return ret;
  }

  static String _consistentShuffle(String alphabet, String salt) {
    int integer;

    if (salt.isEmpty) {
      return alphabet;
    }

    final tmpAlphabet = alphabet.split('');

    for (var i = tmpAlphabet.length - 1, v = 0, p = 0, j = 0; i > 0; i--, v++) {
      v %= salt.length;
      p += integer = salt.codeUnitAt(v);
      j = (integer + v + p) % i;

      final tmp = tmpAlphabet[j];
      tmpAlphabet[j] = tmpAlphabet[i];
      tmpAlphabet[i] = tmp;
    }
    return tmpAlphabet.join('');
  }

  static String _hash(int input, String alphabet) {
    String hash = '';
    final int alphabetLen = alphabet.length;

    do {
      final int index = input % alphabetLen;
      if (index >= 0 && index < alphabet.length) {
        hash = alphabet[index] + hash;
      }
      input = input ~/ alphabetLen;
    } while (input > 0);

    return hash;
  }

  int _unhash(String input, String alphabet) {
    int number = 0, pos;

    for (int i = 0; i < input.length; i++) {
      pos = alphabet.indexOf(input[i]);
      number = number * alphabet.length + pos;
    }

    return number;
  }
}