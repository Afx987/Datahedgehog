/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/generic_methods_simple_is_expression_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var fun : <T>(n : number) => boolean = <T>(n : number) : boolean =>  {
    return is(n, T);
};
export var main : () => any = () =>  {
    lib3.expectTrue(fun(42));
    lib3.expectFalse(fun(42));
};
export class properties {
}
