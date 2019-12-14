/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/scanner/utf8_bytes_scanner.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./array_based_scanner";
import * as lib4 from "./../scanner";
import * as convert from "@dart2ts/dart/convert";
import * as lib6 from "./../../scanner/token";
import * as lib7 from "./token";

export namespace Utf8BytesScanner {
    export type Constructors = lib3.ArrayBasedScanner.Constructors | 'Utf8BytesScanner';
    export type Interface = Omit<Utf8BytesScanner, Constructors>;
}
@DartClass
export class Utf8BytesScanner extends lib3.ArrayBasedScanner {
    bytes : core.DartList<number>;

    byteOffset : number;

    scanSlack : number;

    scanSlackOffset : number;

    get scanOffset() : number {
        if (this.byteOffset == this.scanSlackOffset) {
            return this.byteOffset - this.scanSlack;
        }else {
            return this.byteOffset;
        }
    }
    utf8Slack : number;

    constructor(bytes : core.DartList<number>,_namedArguments? : {includeComments? : boolean,scanGenericMethodComments? : boolean,scanLazyAssignmentOperators? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Utf8BytesScanner(bytes : core.DartList<number>,_namedArguments? : {includeComments? : boolean,scanGenericMethodComments? : boolean,scanLazyAssignmentOperators? : boolean}) {
        let {includeComments,scanGenericMethodComments,scanLazyAssignmentOperators} = Object.assign({
            "includeComments" : false,
            "scanGenericMethodComments" : false,
            "scanLazyAssignmentOperators" : false}, _namedArguments );
        this.byteOffset = -1;
        this.scanSlack = 0;
        this.scanSlackOffset = -1;
        this.utf8Slack = 0;
        this.lastUnicodeOffset = -1;
        this.stringOffsetSlackOffset = -1;
        super.ArrayBasedScanner(includeComments,scanGenericMethodComments,scanLazyAssignmentOperators,{
            numberOfBytesHint : bytes.length});
        this.bytes = bytes;
        /* TODO (AssertStatementImpl) : assert (bytes.last == 0); */;
        if (this.containsBomAt(0)) this.byteOffset += 3;
    }
    containsBomAt(offset : number) : boolean {
        let BOM_UTF8 = new core.DartList.literal(239,187,191);
        return offset + 3 < this.bytes.length && this.bytes[offset] == BOM_UTF8[0] && this.bytes[offset + 1] == BOM_UTF8[1] && this.bytes[offset + 2] == BOM_UTF8[2];
    }
    advance() : number {
        return this.bytes[++this.byteOffset];
    }
    peek() : number {
        return this.bytes[this.byteOffset + 1];
    }
    nextCodePoint(startOffset : number,nextByte : number) : number {
        let expectedHighBytes : number;
        if (nextByte < 194) {
            expectedHighBytes = 1;
        }else if (nextByte < 224) {
            expectedHighBytes = 2;
        }else if (nextByte < 240) {
            expectedHighBytes = 3;
        }else if (nextByte < 245) {
            expectedHighBytes = 4;
        }else {
            expectedHighBytes = 1;
        }
        let numBytes : number = 0;
        for(let i : number = 0; i < expectedHighBytes; i++){
            if (this.bytes[this.byteOffset + i] < 128) {
                break;
            }
            numBytes++;
        }
        let end : number = startOffset + numBytes;
        this.byteOffset = end - 1;
        if (expectedHighBytes == 1 || numBytes != expectedHighBytes) {
            return lib4.properties.unicodeReplacementCharacter;
        }
        let codePoint : string = convert.properties.UTF8.decode(this.bytes.sublist(startOffset,end),{
            allowMalformed : true});
        if (new core.DartString(codePoint).length == 0) {
            /* TODO (AssertStatementImpl) : assert (containsBomAt(startOffset)); */;
            codePoint = new core.DartString.fromCharCode(convert.properties.UNICODE_BOM_CHARACTER_RUNE).valueOf();
        }
        if (new core.DartString(codePoint).length == 1) {
            this.utf8Slack += (numBytes - 1);
            this.scanSlack = numBytes - 1;
            this.scanSlackOffset = this.byteOffset;
            return new core.DartString(codePoint).codeUnitAt(0);
        }else if (new core.DartString(codePoint).length == 2) {
            this.utf8Slack += (numBytes - 2);
            this.scanSlack = numBytes - 1;
            this.scanSlackOffset = this.byteOffset;
            this.stringOffsetSlackOffset = this.byteOffset;
            return new core.DartString(codePoint).runes.single;
        }else {
            return lib4.properties.unicodeReplacementCharacter;
        }
    }
    lastUnicodeOffset : number;

    currentAsUnicode(next : number) : number {
        if (next < 128) return next;
        if (this.byteOffset == this.lastUnicodeOffset) return next;
        let res : number = this.nextCodePoint(this.byteOffset,next);
        this.lastUnicodeOffset = this.byteOffset;
        return res;
    }
    handleUnicode(startScanOffset : number) : void {
        let end : number = this.byteOffset;
        let s : string = convert.properties.UTF8.decode(this.bytes.sublist(startScanOffset,end),{
            allowMalformed : true});
        this.utf8Slack += (end - startScanOffset) - new core.DartString(s).length;
    }
    stringOffsetSlackOffset : number;

    get stringOffset() : number {
        if (this.stringOffsetSlackOffset == this.byteOffset) {
            return this.byteOffset - this.utf8Slack - 1;
        }else {
            return this.byteOffset - this.utf8Slack;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createSubstringToken(type : lib6.TokenType,start : number,asciiOnly : boolean,extraOffset? : number) : lib7.StringToken {
        extraOffset = extraOffset || 0;
        return new lib7.StringToken.fromUtf8Bytes(type,this.bytes,start,this.byteOffset + extraOffset,asciiOnly,this.tokenStart,{
            precedingComments : this.comments});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createCommentToken(type : lib6.TokenType,start : number,asciiOnly : boolean,extraOffset? : number) : lib7.CommentToken {
        extraOffset = extraOffset || 0;
        return new lib7.CommentToken.fromUtf8Bytes(type,this.bytes,start,this.byteOffset + extraOffset,asciiOnly,this.tokenStart);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createDartDocToken(type : lib6.TokenType,start : number,asciiOnly : boolean,extraOffset? : number) : lib7.DartDocToken {
        extraOffset = extraOffset || 0;
        return new lib7.DartDocToken.fromUtf8Bytes(type,this.bytes,start,this.byteOffset + extraOffset,asciiOnly,this.tokenStart);
    }
    atEndOfFile() : boolean {
        return this.byteOffset >= this.bytes.length - 1;
    }
}

export class properties {
}
