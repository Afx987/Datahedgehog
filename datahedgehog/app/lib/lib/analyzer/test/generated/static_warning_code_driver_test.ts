/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/static_warning_code_driver_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./static_warning_code_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(StaticWarningCodeTest_Driver);
    });
};
export namespace StaticWarningCodeTest_Driver {
    export type Constructors = lib3.StaticWarningCodeTest.Constructors | 'StaticWarningCodeTest_Driver';
    export type Interface = Omit<StaticWarningCodeTest_Driver, Constructors>;
}
@DartClass
export class StaticWarningCodeTest_Driver extends lib3.StaticWarningCodeTest {
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
    StaticWarningCodeTest_Driver() {
    }
}

export class properties {
}
