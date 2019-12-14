/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/scanner/error_token.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../scanner";
import * as lib4 from "./../../scanner/token";
import * as lib5 from "./../fasta_codes";
import * as lib6 from "./token";

export var buildUnexpectedCharacterToken : (character : number,charOffset : number) => ErrorToken = (character : number,charOffset : number) : ErrorToken =>  {
    if (character < 31) {
        return new AsciiControlCharacterToken(character,charOffset);
    }
    switch (character) {
        case lib3.properties.unicodeReplacementCharacter:
            return new EncodingErrorToken(charOffset);
        case 160:
        case 5760:
        case 6158:
        case 8192:
        case 8193:
        case 8194:
        case 8195:
        case 8196:
        case 8197:
        case 8198:
        case 8199:
        case 8200:
        case 8201:
        case 8202:
        case 8203:
        case 8232:
        case 8233:
        case 8239:
        case 8287:
        case 12288:
        case 65279:
            return new NonAsciiWhitespaceToken(character,charOffset);
        default:
            return new NonAsciiIdentifierToken(character,charOffset);
    }
};
export namespace ErrorToken {
    export type Constructors = lib4.TokenWithComment.Constructors | 'ErrorToken';
    export type Interface = Omit<ErrorToken, Constructors>;
}
@DartClass
export class ErrorToken extends lib4.TokenWithComment {
    constructor(offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ErrorToken(offset : number) {
        super.TokenWithComment(lib4.TokenType.BAD_INPUT,offset,null);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get length() : number {
        return 1;
    }
    get lexeme() : string {
        return throw this.assertionMessage;
    }
    @AbstractProperty
    get assertionMessage() : string{ throw 'abstract'}
    @AbstractProperty
    get errorCode() : lib5.FastaCode<any>{ throw 'abstract'}
    get character() : number {
        return null;
    }
    get start() : string {
        return null;
    }
    get endOffset() : number {
        return null;
    }
    get begin() : lib6.BeginGroupToken {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copy() : lib4.Token {
        throw 'unsupported operation';
    }
}

export namespace EncodingErrorToken {
    export type Constructors = ErrorToken.Constructors | 'EncodingErrorToken';
    export type Interface = Omit<EncodingErrorToken, Constructors>;
}
@DartClass
export class EncodingErrorToken extends ErrorToken {
    constructor(charOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EncodingErrorToken(charOffset : number) {
        super.ErrorToken(charOffset);
    }
    toString() : string {
        return "EncodingErrorToken()";
    }
    get assertionMessage() : string {
        return "Unable to decode bytes as UTF-8.";
    }
    get errorCode() : lib5.FastaCode<any> {
        return lib5.properties.codeEncoding;
    }
}

export namespace NonAsciiIdentifierToken {
    export type Constructors = ErrorToken.Constructors | 'NonAsciiIdentifierToken';
    export type Interface = Omit<NonAsciiIdentifierToken, Constructors>;
}
@DartClass
export class NonAsciiIdentifierToken extends ErrorToken {
    character : number;

    constructor(character : number,charOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NonAsciiIdentifierToken(character : number,charOffset : number) {
        super.ErrorToken(charOffset);
        this.character = character;
    }
    toString() : string {
        return `NonAsciiIdentifierToken(${this.character})`;
    }
    get assertionMessage() : string {
        let c : string = new core.DartString.fromCharCodes(new core.DartList.literal(this.character)).valueOf();
        let hex : string = new core.DartInt(this.character).toRadixString(16);
        let padding : string = new core.DartString("0000").substring(new core.DartString(hex).length);
        hex = `${padding}${hex}`;
        return `The non-ASCII character '${c}' (U+${hex}) can't be used in identifiers,` + " only in strings and comments.\n" + "Try using an US-ASCII letter, a digit, '_' (an underscore)," + " or '$' (a dollar sign).";
    }
    get errorCode() : lib5.FastaCode<any> {
        return lib5.properties.codeNonAsciiIdentifier;
    }
}

export namespace NonAsciiWhitespaceToken {
    export type Constructors = ErrorToken.Constructors | 'NonAsciiWhitespaceToken';
    export type Interface = Omit<NonAsciiWhitespaceToken, Constructors>;
}
@DartClass
export class NonAsciiWhitespaceToken extends ErrorToken {
    character : number;

    constructor(character : number,charOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NonAsciiWhitespaceToken(character : number,charOffset : number) {
        super.ErrorToken(charOffset);
        this.character = character;
    }
    toString() : string {
        return `NonAsciiWhitespaceToken(${this.character})`;
    }
    get assertionMessage() : string {
        let hex : string = new core.DartInt(this.character).toRadixString(16);
        return `The non-ASCII space character U+${hex} can only be used in strings ` + "and comments.";
    }
    get errorCode() : lib5.FastaCode<any> {
        return lib5.properties.codeNonAsciiWhitespace;
    }
}

export namespace AsciiControlCharacterToken {
    export type Constructors = ErrorToken.Constructors | 'AsciiControlCharacterToken';
    export type Interface = Omit<AsciiControlCharacterToken, Constructors>;
}
@DartClass
export class AsciiControlCharacterToken extends ErrorToken {
    character : number;

    constructor(character : number,charOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AsciiControlCharacterToken(character : number,charOffset : number) {
        super.ErrorToken(charOffset);
        this.character = character;
    }
    toString() : string {
        return `AsciiControlCharacterToken(${this.character})`;
    }
    get assertionMessage() : string {
        let hex : string = new core.DartInt(this.character).toRadixString(16);
        return `The control character U+${hex} can only be used in strings and ` + "comments.";
    }
    get errorCode() : lib5.FastaCode<any> {
        return lib5.properties.codeAsciiControlCharacter;
    }
}

export namespace UnterminatedToken {
    export type Constructors = ErrorToken.Constructors | 'UnterminatedToken';
    export type Interface = Omit<UnterminatedToken, Constructors>;
}
@DartClass
export class UnterminatedToken extends ErrorToken {
    start : string;

    endOffset : number;

    constructor(start : string,charOffset : number,endOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UnterminatedToken(start : string,charOffset : number,endOffset : number) {
        super.ErrorToken(charOffset);
        this.start = start;
        this.endOffset = endOffset;
    }
    toString() : string {
        return `UnterminatedToken(${this.start})`;
    }
    get assertionMessage() : string {
        return `'${this.start}' isn't terminated.`;
    }
    get charCount() : number {
        return this.endOffset - this.charOffset;
    }
    get errorCode() : lib5.FastaCode<any> {
        switch (this.start) {
            case '1e':
                return lib5.properties.codeMissingExponent;
            case '"':
            case "'":
            case '"""':
            case "'''":
            case 'r"':
            case "r'":
            case 'r"""':
            case "r'''":
                return lib5.properties.codeUnterminatedString;
            case '0x':
                return lib5.properties.codeExpectedHexDigit;
            case '$':
                return lib5.properties.codeUnexpectedDollarInString;
            case '/*':
                return lib5.properties.codeUnterminatedComment;
            default:
                return lib5.properties.codeUnterminatedToken;
        }
    }
}

export namespace UnmatchedToken {
    export type Constructors = ErrorToken.Constructors | 'UnmatchedToken';
    export type Interface = Omit<UnmatchedToken, Constructors>;
}
@DartClass
export class UnmatchedToken extends ErrorToken {
    begin : lib6.BeginGroupToken;

    constructor(begin : lib6.BeginGroupToken) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UnmatchedToken(begin : lib6.BeginGroupToken) {
        this.begin = begin;
        super.ErrorToken(begin.charOffset);
    }
    toString() : string {
        return `UnmatchedToken(${this.begin.lexeme})`;
    }
    get assertionMessage() : string {
        return `'${this.begin}' isn't closed.`;
    }
    get errorCode() : lib5.FastaCode<any> {
        return lib5.properties.codeUnmatchedToken;
    }
}

export class properties {
}
