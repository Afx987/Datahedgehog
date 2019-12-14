/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/error/lint_codes.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace LintCode {
    export type Constructors = 'LintCode';
    export type Interface = Omit<LintCode, Constructors>;
}
@DartClass
export class LintCode extends any {
    constructor(name : string,message : string,correction? : string) {
    }
    @defaultConstructor
    LintCode(name : string,message : string,correction? : string) {
        super.DartObject(name,message,correction);
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
        return ErrorType.LINT;
    }
    get uniqueName() : string {
        return `LintCode.${name}`;
    }
}

export class properties {
}
