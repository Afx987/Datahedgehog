/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/scanner/string_scanner.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./array_based_scanner";
import * as lib4 from "./../../scanner/token";
import * as lib5 from "./token";

export namespace StringScanner {
    export type Constructors = lib3.ArrayBasedScanner.Constructors | 'StringScanner';
    export type Interface = Omit<StringScanner, Constructors>;
}
@DartClass
export class StringScanner extends lib3.ArrayBasedScanner {
    string : string;

    scanOffset : number;

    constructor(string : string,_namedArguments? : {includeComments? : boolean,scanGenericMethodComments? : boolean,scanLazyAssignmentOperators? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StringScanner(string : string,_namedArguments? : {includeComments? : boolean,scanGenericMethodComments? : boolean,scanLazyAssignmentOperators? : boolean}) {
        let {includeComments,scanGenericMethodComments,scanLazyAssignmentOperators} = Object.assign({
            "includeComments" : false,
            "scanGenericMethodComments" : false,
            "scanLazyAssignmentOperators" : false}, _namedArguments );
        this.scanOffset = -1;
        this.string = StringScanner.ensureZeroTermination(string);
        super.ArrayBasedScanner(includeComments,scanGenericMethodComments,scanLazyAssignmentOperators);
    }
    static ensureZeroTermination(string : string) : string {
        return (new core.DartString(string).isEmpty || new core.DartString(string).codeUnitAt(new core.DartString(string).length - 1) != 0) ? string + ' ' : string;
    }
    advance() : number {
        return new core.DartString(this.string).codeUnitAt(++this.scanOffset);
    }
    peek() : number {
        return new core.DartString(this.string).codeUnitAt(this.scanOffset + 1);
    }
    get stringOffset() : number {
        return this.scanOffset;
    }
    currentAsUnicode(next : number) : number {
        return next;
    }
    handleUnicode(startScanOffset : number) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createSubstringToken(type : lib4.TokenType,start : number,asciiOnly : boolean,extraOffset? : number) : lib5.StringToken {
        extraOffset = extraOffset || 0;
        return new lib5.StringToken.fromSubstring(type,this.string,start,this.scanOffset + extraOffset,this.tokenStart,{
            canonicalize : true,precedingComments : this.comments});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createCommentToken(type : lib4.TokenType,start : number,asciiOnly : boolean,extraOffset? : number) : lib5.CommentToken {
        extraOffset = extraOffset || 0;
        return new lib5.CommentToken.fromSubstring(type,this.string,start,this.scanOffset + extraOffset,this.tokenStart,{
            canonicalize : true});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createDartDocToken(type : lib4.TokenType,start : number,asciiOnly : boolean,extraOffset? : number) : lib5.DartDocToken {
        extraOffset = extraOffset || 0;
        return new lib5.DartDocToken.fromSubstring(type,this.string,start,this.scanOffset + extraOffset,this.tokenStart,{
            canonicalize : true});
    }
    atEndOfFile() : boolean {
        return this.scanOffset >= new core.DartString(this.string).length - 1;
    }
}

export namespace SubStringScanner {
    export type Constructors = StringScanner.Constructors | 'SubStringScanner';
    export type Interface = Omit<SubStringScanner, Constructors>;
}
@DartClass
export class SubStringScanner extends StringScanner {
    baseOffset : number;

    constructor(baseOffset : number,string : string,_namedArguments? : {includeComments? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SubStringScanner(baseOffset : number,string : string,_namedArguments? : {includeComments? : boolean}) {
        let {includeComments} = Object.assign({
            "includeComments" : false}, _namedArguments );
        super.StringScanner(string,{
            includeComments : includeComments});
        this.baseOffset = baseOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beginToken() : void {
        this.tokenStart = this.baseOffset + this.stringOffset;
    }
}

export class properties {
}
