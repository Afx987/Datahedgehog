/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/static_type_warning_code_driver_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./static_type_warning_code_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(StaticTypeWarningCodeTest_Driver);
        defineReflectiveTests(StrongModeStaticTypeWarningCodeTest_Driver);
    });
};
export namespace StaticTypeWarningCodeTest_Driver {
    export type Constructors = lib3.StaticTypeWarningCodeTest.Constructors | 'StaticTypeWarningCodeTest_Driver';
    export type Interface = Omit<StaticTypeWarningCodeTest_Driver, Constructors>;
}
@DartClass
export class StaticTypeWarningCodeTest_Driver extends lib3.StaticTypeWarningCodeTest {
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
    StaticTypeWarningCodeTest_Driver() {
    }
}

export namespace StrongModeStaticTypeWarningCodeTest_Driver {
    export type Constructors = lib3.StrongModeStaticTypeWarningCodeTest.Constructors | 'StrongModeStaticTypeWarningCodeTest_Driver';
    export type Interface = Omit<StrongModeStaticTypeWarningCodeTest_Driver, Constructors>;
}
@DartClass
export class StrongModeStaticTypeWarningCodeTest_Driver extends lib3.StrongModeStaticTypeWarningCodeTest {
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
    StrongModeStaticTypeWarningCodeTest_Driver() {
    }
}

export class properties {
}
