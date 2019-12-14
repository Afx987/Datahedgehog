/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/static_type_analyzer_driver_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./static_type_analyzer_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(StaticTypeAnalyzer2Test_Driver);
    });
};
export namespace StaticTypeAnalyzer2Test_Driver {
    export type Constructors = lib3.StaticTypeAnalyzer2Test.Constructors | 'StaticTypeAnalyzer2Test_Driver';
    export type Interface = Omit<StaticTypeAnalyzer2Test_Driver, Constructors>;
}
@DartClass
export class StaticTypeAnalyzer2Test_Driver extends lib3.StaticTypeAnalyzer2Test {
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
    StaticTypeAnalyzer2Test_Driver() {
    }
}

export class properties {
}
