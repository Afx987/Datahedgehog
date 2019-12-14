/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/error_suppression_driver_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./error_suppression_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ErrorSuppressionTest_Driver);
    });
};
export namespace ErrorSuppressionTest_Driver {
    export type Constructors = lib3.ErrorSuppressionTest.Constructors | 'ErrorSuppressionTest_Driver';
    export type Interface = Omit<ErrorSuppressionTest_Driver, Constructors>;
}
@DartClass
export class ErrorSuppressionTest_Driver extends lib3.ErrorSuppressionTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return true;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ErrorSuppressionTest_Driver() {
    }
}

export class properties {
}
