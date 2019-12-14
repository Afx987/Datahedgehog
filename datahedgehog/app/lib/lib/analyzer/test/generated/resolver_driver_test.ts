/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/resolver_driver_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./resolver_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(StrictModeTest_Driver);
        defineReflectiveTests(TypePropagationTest_Driver);
    });
};
export namespace StrictModeTest_Driver {
    export type Constructors = lib3.StrictModeTest.Constructors | 'StrictModeTest_Driver';
    export type Interface = Omit<StrictModeTest_Driver, Constructors>;
}
@DartClass
export class StrictModeTest_Driver extends lib3.StrictModeTest {
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
    StrictModeTest_Driver() {
    }
}

export namespace TypePropagationTest_Driver {
    export type Constructors = lib3.TypePropagationTest.Constructors | 'TypePropagationTest_Driver';
    export type Interface = Omit<TypePropagationTest_Driver, Constructors>;
}
@DartClass
export class TypePropagationTest_Driver extends lib3.TypePropagationTest {
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
    TypePropagationTest_Driver() {
    }
}

export class properties {
}
