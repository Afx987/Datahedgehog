/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/base/errors.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace ErrorCode {
    export type Constructors = 'ErrorCode';
    export type Interface = Omit<ErrorCode, Constructors>;
}
@DartClass
export class ErrorCode {
    name : string;

    message : string;

    correction : string;

    constructor(name : string,message : string,correction? : string) {
    }
    @defaultConstructor
    ErrorCode(name : string,message : string,correction? : string) {
        this.name = name;
        this.message = message;
        this.correction = correction;
    }
    @AbstractProperty
    get errorSeverity() : ErrorSeverity{ throw 'abstract'}
    @AbstractProperty
    get type() : ErrorType{ throw 'abstract'}
    get uniqueName() : string {
        return `${this.runtimeType}.${this.name}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.uniqueName;
    }
}

export namespace ErrorSeverity {
    export type Constructors = 'ErrorSeverity';
    export type Interface = Omit<ErrorSeverity, Constructors>;
}
@DartClass
@Implements(core.DartComparable)
export class ErrorSeverity implements core.DartComparable.Interface<ErrorSeverity> {
    private static __$NONE : ErrorSeverity;
    static get NONE() : ErrorSeverity { 
        if (this.__$NONE===undefined) {
            this.__$NONE = new ErrorSeverity('NONE',0," ","none");
        }
        return this.__$NONE;
    }

    private static __$INFO : ErrorSeverity;
    static get INFO() : ErrorSeverity { 
        if (this.__$INFO===undefined) {
            this.__$INFO = new ErrorSeverity('INFO',1,"I","info");
        }
        return this.__$INFO;
    }

    private static __$WARNING : ErrorSeverity;
    static get WARNING() : ErrorSeverity { 
        if (this.__$WARNING===undefined) {
            this.__$WARNING = new ErrorSeverity('WARNING',2,"W","warning");
        }
        return this.__$WARNING;
    }

    private static __$ERROR : ErrorSeverity;
    static get ERROR() : ErrorSeverity { 
        if (this.__$ERROR===undefined) {
            this.__$ERROR = new ErrorSeverity('ERROR',3,"E","error");
        }
        return this.__$ERROR;
    }

    private static __$values : core.DartList<ErrorSeverity>;
    static get values() : core.DartList<ErrorSeverity> { 
        if (this.__$values===undefined) {
            this.__$values = new core.DartList.literal(ErrorSeverity.NONE,ErrorSeverity.INFO,ErrorSeverity.WARNING,ErrorSeverity.ERROR);
        }
        return this.__$values;
    }

    name : string;

    ordinal : number;

    machineCode : string;

    displayName : string;

    constructor(name : string,ordinal : number,machineCode : string,displayName : string) {
    }
    @defaultConstructor
    ErrorSeverity(name : string,ordinal : number,machineCode : string,displayName : string) {
        this.name = name;
        this.ordinal = ordinal;
        this.machineCode = machineCode;
        this.displayName = displayName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.ordinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    compareTo(other : ErrorSeverity) : number {
        return this.ordinal - other.ordinal;
    }
    max(severity : ErrorSeverity) : ErrorSeverity {
        return this.ordinal >= severity.ordinal ? this : severity;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.name;
    }
}

export namespace ErrorType {
    export type Constructors = 'ErrorType';
    export type Interface = Omit<ErrorType, Constructors>;
}
@DartClass
@Implements(core.DartComparable)
export class ErrorType implements core.DartComparable.Interface<ErrorType> {
    private static __$TODO : ErrorType;
    static get TODO() : ErrorType { 
        if (this.__$TODO===undefined) {
            this.__$TODO = new ErrorType('TODO',0,ErrorSeverity.INFO);
        }
        return this.__$TODO;
    }

    private static __$HINT : ErrorType;
    static get HINT() : ErrorType { 
        if (this.__$HINT===undefined) {
            this.__$HINT = new ErrorType('HINT',1,ErrorSeverity.INFO);
        }
        return this.__$HINT;
    }

    private static __$COMPILE_TIME_ERROR : ErrorType;
    static get COMPILE_TIME_ERROR() : ErrorType { 
        if (this.__$COMPILE_TIME_ERROR===undefined) {
            this.__$COMPILE_TIME_ERROR = new ErrorType('COMPILE_TIME_ERROR',2,ErrorSeverity.ERROR);
        }
        return this.__$COMPILE_TIME_ERROR;
    }

    private static __$CHECKED_MODE_COMPILE_TIME_ERROR : ErrorType;
    static get CHECKED_MODE_COMPILE_TIME_ERROR() : ErrorType { 
        if (this.__$CHECKED_MODE_COMPILE_TIME_ERROR===undefined) {
            this.__$CHECKED_MODE_COMPILE_TIME_ERROR = new ErrorType('CHECKED_MODE_COMPILE_TIME_ERROR',3,ErrorSeverity.ERROR);
        }
        return this.__$CHECKED_MODE_COMPILE_TIME_ERROR;
    }

    private static __$STATIC_WARNING : ErrorType;
    static get STATIC_WARNING() : ErrorType { 
        if (this.__$STATIC_WARNING===undefined) {
            this.__$STATIC_WARNING = new ErrorType('STATIC_WARNING',4,ErrorSeverity.WARNING);
        }
        return this.__$STATIC_WARNING;
    }

    private static __$STATIC_TYPE_WARNING : ErrorType;
    static get STATIC_TYPE_WARNING() : ErrorType { 
        if (this.__$STATIC_TYPE_WARNING===undefined) {
            this.__$STATIC_TYPE_WARNING = new ErrorType('STATIC_TYPE_WARNING',5,ErrorSeverity.WARNING);
        }
        return this.__$STATIC_TYPE_WARNING;
    }

    private static __$SYNTACTIC_ERROR : ErrorType;
    static get SYNTACTIC_ERROR() : ErrorType { 
        if (this.__$SYNTACTIC_ERROR===undefined) {
            this.__$SYNTACTIC_ERROR = new ErrorType('SYNTACTIC_ERROR',6,ErrorSeverity.ERROR);
        }
        return this.__$SYNTACTIC_ERROR;
    }

    private static __$LINT : ErrorType;
    static get LINT() : ErrorType { 
        if (this.__$LINT===undefined) {
            this.__$LINT = new ErrorType('LINT',7,ErrorSeverity.INFO);
        }
        return this.__$LINT;
    }

    private static __$values : core.DartList<ErrorType>;
    static get values() : core.DartList<ErrorType> { 
        if (this.__$values===undefined) {
            this.__$values = new core.DartList.literal(ErrorType.TODO,ErrorType.HINT,ErrorType.COMPILE_TIME_ERROR,ErrorType.CHECKED_MODE_COMPILE_TIME_ERROR,ErrorType.STATIC_WARNING,ErrorType.STATIC_TYPE_WARNING,ErrorType.SYNTACTIC_ERROR,ErrorType.LINT);
        }
        return this.__$values;
    }

    name : string;

    ordinal : number;

    severity : ErrorSeverity;

    constructor(name : string,ordinal : number,severity : ErrorSeverity) {
    }
    @defaultConstructor
    ErrorType(name : string,ordinal : number,severity : ErrorSeverity) {
        this.name = name;
        this.ordinal = ordinal;
        this.severity = severity;
    }
    get displayName() : string {
        return new core.DartString(new core.DartString(this.name).toLowerCase()).replaceAll('_',' ');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.ordinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    compareTo(other : ErrorType) : number {
        return this.ordinal - other.ordinal;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.name;
    }
}

export class properties {
}
