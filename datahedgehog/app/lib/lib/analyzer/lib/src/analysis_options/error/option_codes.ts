/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/analysis_options/error/option_codes.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace AnalysisOptionsErrorCode {
    export type Constructors = 'AnalysisOptionsErrorCode';
    export type Interface = Omit<AnalysisOptionsErrorCode, Constructors>;
}
@DartClass
export class AnalysisOptionsErrorCode extends any {
    private static __$PARSE_ERROR : AnalysisOptionsErrorCode;
    static get PARSE_ERROR() : AnalysisOptionsErrorCode { 
        if (this.__$PARSE_ERROR===undefined) {
            this.__$PARSE_ERROR = new AnalysisOptionsErrorCode('PARSE_ERROR','{0}');
        }
        return this.__$PARSE_ERROR;
    }

    private static __$INCLUDED_FILE_PARSE_ERROR;
    static get INCLUDED_FILE_PARSE_ERROR() { 
        if (this.__$INCLUDED_FILE_PARSE_ERROR===undefined) {
            this.__$INCLUDED_FILE_PARSE_ERROR = new AnalysisOptionsErrorCode('INCLUDED_FILE_PARSE_ERROR','{3} in {0}({1}..{2})');
        }
        return this.__$INCLUDED_FILE_PARSE_ERROR;
    }

    constructor(name : string,message : string,correction? : string) {
    }
    @defaultConstructor
    AnalysisOptionsErrorCode(name : string,message : string,correction? : string) {
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

export namespace AnalysisOptionsWarningCode {
    export type Constructors = 'AnalysisOptionsWarningCode';
    export type Interface = Omit<AnalysisOptionsWarningCode, Constructors>;
}
@DartClass
export class AnalysisOptionsWarningCode extends any {
    private static __$INCLUDE_FILE_NOT_FOUND : AnalysisOptionsWarningCode;
    static get INCLUDE_FILE_NOT_FOUND() : AnalysisOptionsWarningCode { 
        if (this.__$INCLUDE_FILE_NOT_FOUND===undefined) {
            this.__$INCLUDE_FILE_NOT_FOUND = new AnalysisOptionsWarningCode('INCLUDE_FILE_NOT_FOUND',"The include file {0} in {1} cannot be found.");
        }
        return this.__$INCLUDE_FILE_NOT_FOUND;
    }

    private static __$INCLUDED_FILE_WARNING : AnalysisOptionsWarningCode;
    static get INCLUDED_FILE_WARNING() : AnalysisOptionsWarningCode { 
        if (this.__$INCLUDED_FILE_WARNING===undefined) {
            this.__$INCLUDED_FILE_WARNING = new AnalysisOptionsWarningCode('INCLUDED_FILE_WARNING',"Warning in the included options file {0}({1}..{2}): {3}");
        }
        return this.__$INCLUDED_FILE_WARNING;
    }

    private static __$UNSUPPORTED_OPTION_WITH_LEGAL_VALUES : AnalysisOptionsWarningCode;
    static get UNSUPPORTED_OPTION_WITH_LEGAL_VALUES() : AnalysisOptionsWarningCode { 
        if (this.__$UNSUPPORTED_OPTION_WITH_LEGAL_VALUES===undefined) {
            this.__$UNSUPPORTED_OPTION_WITH_LEGAL_VALUES = new AnalysisOptionsWarningCode('UNSUPPORTED_OPTION_WITH_LEGAL_VALUES',"The option '{1}' isn't supported by '{0}'.","Try using one of the supported options: {2}.");
        }
        return this.__$UNSUPPORTED_OPTION_WITH_LEGAL_VALUES;
    }

    private static __$UNSUPPORTED_OPTION_WITH_LEGAL_VALUE : AnalysisOptionsWarningCode;
    static get UNSUPPORTED_OPTION_WITH_LEGAL_VALUE() : AnalysisOptionsWarningCode { 
        if (this.__$UNSUPPORTED_OPTION_WITH_LEGAL_VALUE===undefined) {
            this.__$UNSUPPORTED_OPTION_WITH_LEGAL_VALUE = new AnalysisOptionsWarningCode('UNSUPPORTED_OPTION_WITH_LEGAL_VALUE',"The option '{1}' isn't supported by '{0}'." + "Try using the only supported option: '{2}'.");
        }
        return this.__$UNSUPPORTED_OPTION_WITH_LEGAL_VALUE;
    }

    private static __$UNSUPPORTED_VALUE : AnalysisOptionsWarningCode;
    static get UNSUPPORTED_VALUE() : AnalysisOptionsWarningCode { 
        if (this.__$UNSUPPORTED_VALUE===undefined) {
            this.__$UNSUPPORTED_VALUE = new AnalysisOptionsWarningCode('UNSUPPORTED_VALUE',"The value '{1}' isn't supported by '{0}'.","Try using one of the supported options: {2}.");
        }
        return this.__$UNSUPPORTED_VALUE;
    }

    private static __$UNRECOGNIZED_ERROR_CODE : AnalysisOptionsWarningCode;
    static get UNRECOGNIZED_ERROR_CODE() : AnalysisOptionsWarningCode { 
        if (this.__$UNRECOGNIZED_ERROR_CODE===undefined) {
            this.__$UNRECOGNIZED_ERROR_CODE = new AnalysisOptionsWarningCode('UNRECOGNIZED_ERROR_CODE',"'{0}' isn't a recognized error code.");
        }
        return this.__$UNRECOGNIZED_ERROR_CODE;
    }

    constructor(name : string,message : string,correction? : string) {
    }
    @defaultConstructor
    AnalysisOptionsWarningCode(name : string,message : string,correction? : string) {
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
