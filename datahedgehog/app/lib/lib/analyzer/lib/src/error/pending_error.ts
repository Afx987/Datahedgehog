/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/error/pending_error.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace PendingError {
    export type Constructors = 'PendingError';
    export type Interface = Omit<PendingError, Constructors>;
}
@DartClass
export class PendingError {
    @Abstract
    toAnalysisError() : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    PendingError() {
    }
}

export namespace PendingMissingRequiredParameterError {
    export type Constructors = 'PendingMissingRequiredParameterError';
    export type Interface = Omit<PendingMissingRequiredParameterError, Constructors>;
}
@DartClass
@Implements(PendingError)
export class PendingMissingRequiredParameterError implements PendingError.Interface {
    source : any;

    parameterName : string;

    offset : number;

    length : number;

    annotation : any;

    constructor(source : any,parameterName : string,node : any,annotation : any) {
    }
    @defaultConstructor
    PendingMissingRequiredParameterError(source : any,parameterName : string,node : any,annotation : any) {
        this.offset = node.offset;
        this.length = node.length;
        this.source = source;
        this.parameterName = parameterName;
        this.annotation = annotation;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toAnalysisError() : any {
        let errorCode : any;
        let arguments : core.DartList<string>;
        let constantValue : any = this.annotation.constantValue;
        let reason : string = ((_251_)=>(!!_251_)?_251_.toStringValue():null)(((_252_)=>(!!_252_)?_252_.getField('reason'):null)(constantValue));
        if (reason != null) {
            errorCode = HintCode.MISSING_REQUIRED_PARAM_WITH_DETAILS;
            arguments = new core.DartList.literal(this.parameterName,reason);
        }else {
            errorCode = HintCode.MISSING_REQUIRED_PARAM;
            arguments = new core.DartList.literal(this.parameterName);
        }
        return new bare.createInstance(any,null,this.source,this.offset,this.length,errorCode,arguments);
    }
}

export class properties {
}
