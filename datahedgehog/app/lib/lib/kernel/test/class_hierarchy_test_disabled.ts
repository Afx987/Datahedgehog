/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/class_hierarchy_test_disabled.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./class_hierarchy_self_check";

export var main : () => any = () =>  {
    test('All-pairs class hierarchy tests on dart2js',() =>  {
        lib3.testClassHierarchyOnProgram(loadProgramFromBinary('test/data/dart2js.dill'));
    });
};
export class properties {
}
