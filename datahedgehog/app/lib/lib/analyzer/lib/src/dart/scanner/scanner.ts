/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/scanner/scanner.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/front_end/lib/src/scanner/scanner";

export namespace Scanner {
    export type Constructors = '_';
    export type Interface = Omit<Scanner, Constructors>;
}
@DartClass
export class Scanner extends any {
    source : any;

    _errorListener : any;

    constructor(source : any,reader : any,errorListener : any) {
    }
    @defaultFactory
    static $Scanner(source : any,reader : any,errorListener : any) : Scanner {
        return lib3.Scanner.useFasta ? new _Scanner2(source,reader.getContents(),errorListener) : new Scanner._(source,reader,errorListener);
    }
    @namedConstructor
    _(source : any,reader : any,_errorListener : any) {
        super.create(reader);
        this.source = source;
        this._errorListener = _errorListener;
    }
    static _ : new(source : any,reader : any,_errorListener : any) => Scanner;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    reportError(errorCode : any,offset : number,arguments : core.DartList<core.DartObject>) : void {
        this._errorListener.onError(new bare.createInstance(any,null,this.source,offset,1,errorCode,arguments));
    }
}

export namespace _Scanner2 {
    export type Constructors = '_Scanner2';
    export type Interface = Omit<_Scanner2, Constructors>;
}
@DartClass
@Implements(Scanner)
export class _Scanner2 implements Scanner.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    source : any;

    _contents : string;

    _errorListener : any;

    _preserveComments : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lineStarts : core.DartList<number>;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    firstToken : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scanGenericMethodComments : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scanLazyAssignmentOperators : boolean;

    constructor(source : any,_contents : string,_errorListener : any) {
    }
    @defaultConstructor
    _Scanner2(source : any,_contents : string,_errorListener : any) {
        this._preserveComments = true;
        this.lineStarts = new core.DartList.literal<number>();
        this.scanGenericMethodComments = false;
        this.scanLazyAssignmentOperators = false;
        this.source = source;
        this._contents = _contents;
        this._errorListener = _errorListener;
        this.lineStarts.add(0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    appendToken(token : any) : void {
        throw 'unsupported operation';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    bigSwitch(next : number) : number {
        throw 'unsupported operation';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasUnmatchedGroups() : boolean {
        throw 'unsupported operation';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    recordStartOfLine() : void {
        throw 'unsupported operation';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    reportError(errorCode : any,offset : number,arguments : core.DartList<core.DartObject>) : void {
        this._errorListener.onError(new bare.createInstance(any,null,this.source,offset,1,errorCode,arguments));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setSourceStart(line : number,column : number) : void {
        throw 'unsupported operation';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get tail() : any {
        throw 'unsupported operation';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    tokenize() : any {
        if (this.scanGenericMethodComments) {
            throw 'No generic method comment support in Fasta';
        }
        let result : any = null /*topLevl*/.scanString(this._contents,{
            includeComments : this._preserveComments,scanLazyAssignmentOperators : this.scanLazyAssignmentOperators});
        this.lineStarts.addAll(result.lineStarts.sublist(1,op(Op.MINUS,result.lineStarts.length,1)));
        let token : any = result.tokens;
        while (op(Op.EQUALS,token.type,TokenType.BAD_INPUT)){
            translateErrorToken(token,this.reportError.bind(this));
            token = token.next;
        }
        this.firstToken = token;
        return this.firstToken;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set preserveComments(preserveComments : boolean) {
        this._preserveComments = preserveComments;
    }
}

export class properties {
}
