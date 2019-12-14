/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/generic_methods_simple_as_expression_error_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var cast : <T>(obj : any) => T = <T>(obj : any) : T =>  {
    return obj as T;
};
export var main : () => any = () =>  {
    lib3.expectThrows(() =>  {
        return cast(42);
    },(e : any) =>  {
        return is(e, core.CastError);
    });
};
export class properties {
}
