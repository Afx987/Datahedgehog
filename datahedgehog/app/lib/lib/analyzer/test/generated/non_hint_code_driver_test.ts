/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/non_hint_code_driver_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./non_hint_code_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(NonHintCodeTest_Driver);
    });
};
export namespace NonHintCodeTest_Driver {
    export type Constructors = lib3.NonHintCodeTest.Constructors | 'NonHintCodeTest_Driver';
    export type Interface = Omit<NonHintCodeTest_Driver, Constructors>;
}
@DartClass
export class NonHintCodeTest_Driver extends lib3.NonHintCodeTest {
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
    NonHintCodeTest_Driver() {
    }
}

export class properties {
}
