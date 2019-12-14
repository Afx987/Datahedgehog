/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/strong_mode_driver_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./strong_mode_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(StrongModeLocalInferenceTest_Driver);
        defineReflectiveTests(StrongModeStaticTypeAnalyzer2Test_Driver);
        defineReflectiveTests(StrongModeTypePropagationTest_Driver);
    });
};
export namespace StrongModeLocalInferenceTest_Driver {
    export type Constructors = lib3.StrongModeLocalInferenceTest.Constructors | 'StrongModeLocalInferenceTest_Driver';
    export type Interface = Omit<StrongModeLocalInferenceTest_Driver, Constructors>;
}
@DartClass
export class StrongModeLocalInferenceTest_Driver extends lib3.StrongModeLocalInferenceTest {
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
    StrongModeLocalInferenceTest_Driver() {
    }
}

export namespace StrongModeStaticTypeAnalyzer2Test_Driver {
    export type Constructors = lib3.StrongModeStaticTypeAnalyzer2Test.Constructors | 'StrongModeStaticTypeAnalyzer2Test_Driver';
    export type Interface = Omit<StrongModeStaticTypeAnalyzer2Test_Driver, Constructors>;
}
@DartClass
export class StrongModeStaticTypeAnalyzer2Test_Driver extends lib3.StrongModeStaticTypeAnalyzer2Test {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_genericFunction_parameter() {
        return super.test_genericFunction_parameter();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_genericMethod_functionExpressionInvocation_explicit() {
        return super.test_genericMethod_functionExpressionInvocation_explicit();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_genericMethod_functionExpressionInvocation_inferred() {
        return super.test_genericMethod_functionExpressionInvocation_inferred();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_genericMethod_functionInvocation_explicit() {
        return super.test_genericMethod_functionInvocation_explicit();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_genericMethod_functionInvocation_inferred() {
        return super.test_genericMethod_functionInvocation_inferred();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_genericMethod_tearoff() {
        return super.test_genericMethod_tearoff();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StrongModeStaticTypeAnalyzer2Test_Driver() {
    }
}

export namespace StrongModeTypePropagationTest_Driver {
    export type Constructors = lib3.StrongModeTypePropagationTest.Constructors | 'StrongModeTypePropagationTest_Driver';
    export type Interface = Omit<StrongModeTypePropagationTest_Driver, Constructors>;
}
@DartClass
export class StrongModeTypePropagationTest_Driver extends lib3.StrongModeTypePropagationTest {
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
    StrongModeTypePropagationTest_Driver() {
    }
}

export class properties {
}
