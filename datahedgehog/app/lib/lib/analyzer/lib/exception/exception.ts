/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/exception/exception.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace AnalysisException {
    export type Constructors = 'AnalysisException';
    export type Interface = Omit<AnalysisException, Constructors>;
}
@DartClass
@Implements(core.Exception)
export class AnalysisException implements core.Exception.Interface {
    message : string;

    cause : CaughtException;

    constructor(message? : string,cause? : CaughtException) {
    }
    @defaultConstructor
    AnalysisException(message? : string,cause? : CaughtException) {
        message = message || 'Exception';
        cause = cause || null;
        this.message = message;
        this.cause = cause;
    }
    toString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.write("AnalysisException: ");
        buffer.writeln(this.message);
        if (this.cause != null) {
            buffer.write('Caused by ');
            this.cause._writeOn(buffer);
        }
        return buffer.toString();
    }
}

export namespace CaughtException {
    export type Constructors = 'CaughtException';
    export type Interface = Omit<CaughtException, Constructors>;
}
@DartClass
@Implements(core.Exception)
export class CaughtException implements core.Exception.Interface {
    exception : core.DartObject;

    stackTrace : core.DartStackTrace;

    constructor(exception : core.DartObject,stackTrace : any) {
    }
    @defaultConstructor
    CaughtException(exception : core.DartObject,stackTrace : any) {
        this.exception = exception;
        if (op(Op.EQUALS,stackTrace,null)) {
            try {
                throw this;
            } catch (__error__) {

                {
                    let st : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let _ = __error__;
                    stackTrace = st;
                }
            }
        }
        this.stackTrace = stackTrace;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        this._writeOn(buffer);
        return buffer.toString();
    }
    _writeOn(buffer : core.DartStringBuffer) : void {
        if (is(this.exception, AnalysisException)) {
            let analysisException : AnalysisException = this.exception;
            buffer.writeln(analysisException.message);
            if (this.stackTrace != null) {
                buffer.writeln(this.stackTrace.toString());
            }
            let cause : CaughtException = analysisException.cause;
            if (cause != null) {
                buffer.write('Caused by ');
                cause._writeOn(buffer);
            }
        }else {
            buffer.writeln(this.exception.toString());
            if (this.stackTrace != null) {
                buffer.writeln(this.stackTrace.toString());
            }
        }
    }
}

export class properties {
}
