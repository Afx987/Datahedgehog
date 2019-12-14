/** Library asset:datahedgehog_monitor/lib/lib/_common/lib/hashid.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace HashIds {
    export type Constructors = 'HashIds';
    export type Interface = Omit<HashIds, Constructors>;
}
@DartClass
export class HashIds {
    constructor(_namedArguments? : {salt? : string,minHashLength? : number,alphabet? : string}) {
    }
    @defaultConstructor
    HashIds(_namedArguments? : {salt? : string,minHashLength? : number,alphabet? : string}) {
        let {salt,minHashLength,alphabet} = Object.assign({
            "salt" : HashIds.DEFAULT_SALT,
            "minHashLength" : HashIds.DEFAULT_MIN_HASH_LENGTH,
            "alphabet" : HashIds.DEFAULT_ALPHABET}, _namedArguments );
        this.salt = salt != null ? salt : HashIds.DEFAULT_SALT;
        this.minHashLength = minHashLength > 0 ? minHashLength : HashIds.DEFAULT_MIN_HASH_LENGTH;
        let uniqueAlphabet = '';
        for(let i : number = 0; i < new core.DartString(alphabet).length; i++){
            if (!new core.DartString(uniqueAlphabet).contains(alphabet[i])) {
                uniqueAlphabet += alphabet[i];
            }
        }
        alphabet = new core.DartString(uniqueAlphabet).toString();
        if (new core.DartString(alphabet).length < HashIds.MIN_ALPHABET_LENGTH) {
            throw `alphabet must contain at least ${HashIds.MIN_ALPHABET_LENGTH} unique characters`;
        }
        if (new core.DartString(alphabet).contains(' ')) {
            throw 'alphabet cannot contains spaces';
        }
        let seps : string = HashIds.DEFAULT_SEPS;
        for(let i : number = 0; i < new core.DartString(seps).length; i++){
            let j : number = new core.DartString(alphabet).indexOf(seps[i]);
            if (j == -1) {
                seps = new core.DartString(seps).substring(0,i) + ' ' + new core.DartString(seps).substring(i + 1);
            }else {
                alphabet = new core.DartString(alphabet).substring(0,j) + ' ' + new core.DartString(alphabet).substring(j + 1);
            }
        }
        alphabet = new core.DartString(alphabet).replaceAll(core.DartRegExp('\s+|\s'),'');
        seps = new core.DartString(seps).replaceAll(' ','');
        seps = HashIds._consistentShuffle(seps,this.salt);
        if ((new core.DartString(seps).isEmpty) || ((new core.DartString(alphabet).length / new core.DartString(seps).length) > HashIds.SEP_DIV)) {
            let sepsLen : number = new core.DartDouble((new core.DartString(alphabet).length / HashIds.SEP_DIV)).ceil();
            if (sepsLen == 1) {
                sepsLen++;
            }
            if (sepsLen > new core.DartString(seps).length) {
                let diff : number = sepsLen - new core.DartString(seps).length;
                seps += new core.DartString(alphabet).substring(0,diff);
                alphabet = new core.DartString(alphabet).substring(diff);
            }else {
                seps = new core.DartString(seps).substring(0,sepsLen);
            }
        }
        alphabet = HashIds._consistentShuffle(alphabet,this.salt);
        let guardCount : number = new core.DartDouble((new core.DartString(alphabet).length / HashIds.GUARD_DIV)).ceil();
        let guards : string;
        if (new core.DartString(alphabet).length < 3) {
            guards = new core.DartString(seps).substring(0,guardCount);
            seps = new core.DartString(seps).substring(guardCount);
        }else {
            guards = new core.DartString(alphabet).substring(0,guardCount);
            alphabet = new core.DartString(alphabet).substring(guardCount);
        }
        this.guards = guards;
        this.alphabet = alphabet;
        this.seps = seps;
    }
    private static __$MAX_NUMBER;
    static get MAX_NUMBER() { 
        if (this.__$MAX_NUMBER===undefined) {
            this.__$MAX_NUMBER = 9007199254740992;
        }
        return this.__$MAX_NUMBER;
    }

    private static __$DEFAULT_ALPHABET;
    static get DEFAULT_ALPHABET() { 
        if (this.__$DEFAULT_ALPHABET===undefined) {
            this.__$DEFAULT_ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        }
        return this.__$DEFAULT_ALPHABET;
    }

    private static __$DEFAULT_SEPS;
    static get DEFAULT_SEPS() { 
        if (this.__$DEFAULT_SEPS===undefined) {
            this.__$DEFAULT_SEPS = 'cfhistuCFHISTU';
        }
        return this.__$DEFAULT_SEPS;
    }

    private static __$DEFAULT_SALT;
    static get DEFAULT_SALT() { 
        if (this.__$DEFAULT_SALT===undefined) {
            this.__$DEFAULT_SALT = '';
        }
        return this.__$DEFAULT_SALT;
    }

    private static __$DEFAULT_MIN_HASH_LENGTH : number;
    static get DEFAULT_MIN_HASH_LENGTH() : number { 
        if (this.__$DEFAULT_MIN_HASH_LENGTH===undefined) {
            this.__$DEFAULT_MIN_HASH_LENGTH = 0;
        }
        return this.__$DEFAULT_MIN_HASH_LENGTH;
    }

    private static __$MIN_ALPHABET_LENGTH : number;
    static get MIN_ALPHABET_LENGTH() : number { 
        if (this.__$MIN_ALPHABET_LENGTH===undefined) {
            this.__$MIN_ALPHABET_LENGTH = 16;
        }
        return this.__$MIN_ALPHABET_LENGTH;
    }

    private static __$SEP_DIV : double;
    static get SEP_DIV() : double { 
        if (this.__$SEP_DIV===undefined) {
            this.__$SEP_DIV = 3.5;
        }
        return this.__$SEP_DIV;
    }

    private static __$GUARD_DIV : number;
    static get GUARD_DIV() : number { 
        if (this.__$GUARD_DIV===undefined) {
            this.__$GUARD_DIV = 12;
        }
        return this.__$GUARD_DIV;
    }

    salt : string;

    minHashLength : number;

    alphabet : string;

    seps : string;

    guards : string;

    encode(number : any) : string {
        if (is(number, "number")) {
            return this.encodeInt(number);
        }
        if (is(number, "string")) {
            return this.encodeString(number);
        }
        if (is(number, core.DartList<number>)) {
            return this.encodeList(number);
        }
        return '';
    }
    encodeInt(number : number) : string {
        return this.encodeList(new core.DartList.literal(number));
    }
    encodeString(number : string) : string {
        let parsed = (new core.DartInt(number).tryParse(number) || -1);
        return this.encodeList(new core.DartList.literal(parsed));
    }
    encodeList(numbers : core.DartList<number>) : string {
        if ((((t)=>(!!t)?t.isEmpty:null)(numbers) || true)) {
            return '';
        }
        for(let number of numbers) {
            if (number < 0) {
                return '';
            }
            if (number > HashIds.MAX_NUMBER) {
                throw core.ArgumentError(`number can not be greater than ${HashIds.MAX_NUMBER}`);
            }
        }
        return this._encode(numbers);
    }
    decode(hash : string) : core.DartList<number> {
        if (new core.DartString(hash).isEmpty) {
            return new core.DartList.literal();
        }
        let validChars = this.alphabet + this.guards + this.seps;
        for(let i : number = 0; i < new core.DartString(hash).length; i++){
            if (!new core.DartString(validChars).contains(hash[i])) {
                return new core.DartList.literal();
            }
        }
        return this._decode(hash,this.alphabet);
    }
    encodeHex(hex : string) : string {
        let result : core.DartList<number> = new core.DartList.literal();
        if (!core.DartRegExp('^[0-9a-fA-F]+$').hasMatch(hex)) {
            return '';
        }
        let numbers = core.DartRegExp('[\w\W]{1,12}',{
            multiLine : true,caseSensitive : false}).allMatches(hex);
        for(let match of numbers) {
            result.add(core.DartInt.parse('1' + match.group(0),{
                radix : 16}));
        }
        return this.encode(result);
    }
    decodeHex(hash : string) : string {
        let result = '';
        let numbers : core.DartList<number> = this.decode(hash);
        for(let number of numbers) {
            result += new core.DartString(new core.DartInt(number).toRadixString(16)).substring(1);
        }
        return new core.DartString(result).toString();
    }
    _encode(numbers : core.DartList<number>) : string {
        let numberHashInt = 0;
        for(let i : number = 0; i < numbers.length; i++){
            numberHashInt += numbers[i] % (i + 100);
        }
        let alphabet : string = this.alphabet;
        let ret = alphabet[numberHashInt % new core.DartString(alphabet).length];
        let num : number;
        let sepsIndex : number, guardIndex : number;
        let buffer : string;
        let retStrB = '';
        retStrB += ret;
        let guard : string;
        for(let i : number = 0; i < numbers.length; i++){
            num = numbers[i];
            buffer = ret + this.salt + alphabet;
            alphabet = HashIds._consistentShuffle(alphabet,new core.DartString(buffer).substring(0,new core.DartString(alphabet).length));
            let last : string = HashIds._hash(num,alphabet);
            retStrB += last;
            if (i + 1 < numbers.length) {
                if (new core.DartString(last).isNotEmpty) {
                    num %= new core.DartString(last).codeUnitAt(0) + i;
                    sepsIndex = num % new core.DartString(this.seps).length;
                }else {
                    sepsIndex = 0;
                }
                retStrB += this.seps[sepsIndex];
            }
        }
        let retStr : string = new core.DartString(retStrB).toString();
        if (new core.DartString(retStr).length < this.minHashLength) {
            guardIndex = (numberHashInt + new core.DartString(retStr).codeUnitAt(0)) % new core.DartString(this.guards).length;
            guard = this.guards[guardIndex];
            retStr = guard + retStr;
            if (new core.DartString(retStr).length < this.minHashLength) {
                guardIndex = (numberHashInt + new core.DartString(retStr).codeUnitAt(2)) % new core.DartString(this.guards).length;
                guard = this.guards[guardIndex];
                retStr += guard;
            }
        }
        let halfLen : number = op(Op.QUOTIENT,new core.DartString(alphabet).length,2);
        while (new core.DartString(retStr).length < this.minHashLength){
            alphabet = HashIds._consistentShuffle(alphabet,alphabet);
            retStr = new core.DartString(alphabet).substring(halfLen) + retStr + new core.DartString(alphabet).substring(0,halfLen);
            let excess : number = new core.DartString(retStr).length - this.minHashLength;
            if (excess > 0) {
                let startPos : number = op(Op.QUOTIENT,excess,2);
                retStr = new core.DartString(retStr).substring(startPos,startPos + this.minHashLength);
            }
        }
        return retStr;
    }
    _decode(hash : string,alphabet : string) : core.DartList<number> {
        let ret : core.DartList<number> = new core.DartList.literal<number>();
        let i : number = 0;
        let hashBreakdown : string = hash;
        for(let j = 0; j < new core.DartString(this.guards).length; j++){
            hashBreakdown = new core.DartString(hashBreakdown).replaceAll(this.guards[j],' ');
        }
        let hashArray : core.DartList<string> = new core.DartString(hashBreakdown).split(' ');
        if (hashArray.length == 3 || hashArray.length == 2) {
            i = 1;
        }
        if (hashArray.isNotEmpty) {
            hashBreakdown = hashArray[i];
            if (new core.DartString(hashBreakdown).isNotEmpty) {
                let lottery = hashBreakdown[0];
                hashBreakdown = new core.DartString(hashBreakdown).substring(1);
                for(let j = 0; j < new core.DartString(this.seps).length; j++){
                    hashBreakdown = new core.DartString(hashBreakdown).replaceAll(this.seps[j],' ');
                }
                hashArray = new core.DartString(hashBreakdown).split(' ');
                let subHash : string, buffer : string;
                for(let aHashArray of hashArray) {
                    subHash = aHashArray;
                    buffer = lottery + this.salt + alphabet;
                    alphabet = HashIds._consistentShuffle(alphabet,new core.DartString(buffer).substring(0,new core.DartString(alphabet).length));
                    ret.add(this._unhash(subHash,alphabet));
                }
            }
        }
        if (this.encode(ret) != hash) {
            ret = new core.DartList.literal();
        }
        return ret;
    }
    static _consistentShuffle(alphabet : string,salt : string) : string {
        let integer : number;
        if (new core.DartString(salt).isEmpty) {
            return alphabet;
        }
        let tmpAlphabet = new core.DartString(alphabet).split('');
        for(let i = tmpAlphabet.length - 1, v = 0, p = 0, j = 0; i > 0; i--,v++){
            v %= new core.DartString(salt).length;
            p += integer = new core.DartString(salt).codeUnitAt(v);
            j = (integer + v + p) % i;
            let tmp = tmpAlphabet[j];
            tmpAlphabet[j] = tmpAlphabet[i];
            tmpAlphabet[i] = tmp;
        }
        return tmpAlphabet.join('');
    }
    static _hash(input : number,alphabet : string) : string {
        let hash : string = '';
        let alphabetLen : number = new core.DartString(alphabet).length;
        do{
            let index : number = input % alphabetLen;
            if (index >= 0 && index < new core.DartString(alphabet).length) {
                hash = alphabet[index] + hash;
            }
            input = op(Op.QUOTIENT,input,alphabetLen);
        } while (input > 0);
        return hash;
    }
    _unhash(input : string,alphabet : string) : number {
        let number : number = 0, pos : number;
        for(let i : number = 0; i < new core.DartString(input).length; i++){
            pos = new core.DartString(alphabet).indexOf(input[i]);
            number = number * new core.DartString(alphabet).length + pos;
        }
        return number;
    }
}

export class properties {
}
