/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/non_error_resolver_driver_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./non_error_resolver_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(NonErrorResolverTest_Driver);
    });
};
export namespace NonErrorResolverTest_Driver {
    export type Constructors = lib3.NonErrorResolverTest.Constructors | 'NonErrorResolverTest_Driver';
    export type Interface = Omit<NonErrorResolverTest_Driver, Constructors>;
}
@DartClass
export class NonErrorResolverTest_Driver extends lib3.NonErrorResolverTest {
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
    NonErrorResolverTest_Driver() {
    }
}

export class properties {
}
