/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/compile_time_error_code_driver_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./compile_time_error_code_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(CompileTimeErrorCodeTest_Driver);
    });
};
export namespace CompileTimeErrorCodeTest_Driver {
    export type Constructors = lib3.CompileTimeErrorCodeTest.Constructors | 'CompileTimeErrorCodeTest_Driver';
    export type Interface = Omit<CompileTimeErrorCodeTest_Driver, Constructors>;
}
@DartClass
export class CompileTimeErrorCodeTest_Driver extends lib3.CompileTimeErrorCodeTest {
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
    CompileTimeErrorCodeTest_Driver() {
    }
}

export class properties {
}
