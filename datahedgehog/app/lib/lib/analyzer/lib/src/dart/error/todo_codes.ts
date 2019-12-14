/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/error/todo_codes.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace TodoCode {
    export type Constructors = 'TodoCode';
    export type Interface = Omit<TodoCode, Constructors>;
}
@DartClass
export class TodoCode extends any {
    private static __$TODO : TodoCode;
    static get TODO() : TodoCode { 
        if (this.__$TODO===undefined) {
            this.__$TODO = new TodoCode('TODO');
        }
        return this.__$TODO;
    }

    private static __$TODO_REGEX : core.DartRegExp;
    static get TODO_REGEX() : core.DartRegExp { 
        if (this.__$TODO_REGEX===undefined) {
            this.__$TODO_REGEX = new core.DartRegExp("([\s/\*])((TODO[^\w\d][^\r\n]*)|(TODO:?$))");
        }
        return this.__$TODO_REGEX;
    }
    static set TODO_REGEX(__$value : core.DartRegExp)  { 
        this.__$TODO_REGEX = __$value;
    }

    constructor(name : string) {
    }
    @defaultConstructor
    TodoCode(name : string) {
        super.DartObject(name,"{0}");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get errorSeverity() : any {
        return ErrorSeverity.INFO;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : any {
        return ErrorType.TODO;
    }
}

export class properties {
}
