/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/hint_code_driver_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./hint_code_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(HintCodeTest_Driver);
    });
};
export namespace HintCodeTest_Driver {
    export type Constructors = lib3.HintCodeTest.Constructors | 'HintCodeTest_Driver';
    export type Interface = Omit<HintCodeTest_Driver, Constructors>;
}
@DartClass
export class HintCodeTest_Driver extends lib3.HintCodeTest {
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
    HintCodeTest_Driver() {
    }
}

export class properties {
}
