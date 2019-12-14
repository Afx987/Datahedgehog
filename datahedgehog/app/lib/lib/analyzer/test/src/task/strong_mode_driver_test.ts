/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/task/strong_mode_driver_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./strong_mode_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(InstanceMemberInferrerTest_Driver);
    });
};
export namespace InstanceMemberInferrerTest_Driver {
    export type Constructors = lib3.InstanceMemberInferrerTest.Constructors | 'InstanceMemberInferrerTest_Driver';
    export type Interface = Omit<InstanceMemberInferrerTest_Driver, Constructors>;
}
@DartClass
export class InstanceMemberInferrerTest_Driver extends lib3.InstanceMemberInferrerTest {
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
    InstanceMemberInferrerTest_Driver() {
    }
}

export class properties {
}
