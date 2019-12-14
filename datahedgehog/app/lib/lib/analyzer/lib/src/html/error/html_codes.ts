/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/html/error/html_codes.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace HtmlErrorCode {
    export type Constructors = 'HtmlErrorCode';
    export type Interface = Omit<HtmlErrorCode, Constructors>;
}
@DartClass
export class HtmlErrorCode extends any {
    private static __$PARSE_ERROR : HtmlErrorCode;
    static get PARSE_ERROR() : HtmlErrorCode { 
        if (this.__$PARSE_ERROR===undefined) {
            this.__$PARSE_ERROR = new HtmlErrorCode('PARSE_ERROR','{0}');
        }
        return this.__$PARSE_ERROR;
    }

    constructor(name : string,message : string,correction? : string) {
    }
    @defaultConstructor
    HtmlErrorCode(name : string,message : string,correction? : string) {
        super.DartObject(name,message,correction);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get errorSeverity() : any {
        return ErrorSeverity.ERROR;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return ErrorType.COMPILE_TIME_ERROR;
    }
}

export namespace HtmlWarningCode {
    export type Constructors = 'HtmlWarningCode';
    export type Interface = Omit<HtmlWarningCode, Constructors>;
}
@DartClass
export class HtmlWarningCode extends any {
    private static __$INVALID_URI : HtmlWarningCode;
    static get INVALID_URI() : HtmlWarningCode { 
        if (this.__$INVALID_URI===undefined) {
            this.__$INVALID_URI = new HtmlWarningCode('INVALID_URI',"Invalid URI syntax: '{0}'.");
        }
        return this.__$INVALID_URI;
    }

    private static __$URI_DOES_NOT_EXIST : HtmlWarningCode;
    static get URI_DOES_NOT_EXIST() : HtmlWarningCode { 
        if (this.__$URI_DOES_NOT_EXIST===undefined) {
            this.__$URI_DOES_NOT_EXIST = new HtmlWarningCode('URI_DOES_NOT_EXIST',"Target of URI doesn't exist: '{0}'.");
        }
        return this.__$URI_DOES_NOT_EXIST;
    }

    constructor(name : string,message : string,correction? : string) {
    }
    @defaultConstructor
    HtmlWarningCode(name : string,message : string,correction? : string) {
        super.DartObject(name,message,correction);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get errorSeverity() : any {
        return ErrorSeverity.WARNING;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return ErrorType.STATIC_WARNING;
    }
}

export class properties {
}
