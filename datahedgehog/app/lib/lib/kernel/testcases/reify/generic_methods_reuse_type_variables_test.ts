/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/generic_methods_reuse_type_variables_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var fun : <T extends string>(t : T) => number = <T extends string>(t : T) : number =>  {
    let list : core.DartList<T> = new core.DartList.literal<T>(t,t,t);
    lib3.expectTrue(is(list, core.DartList<string>));
    lib3.expectTrue(isNot(list, core.DartList<number>));
    return list.length;
};
export var main : () => any = () =>  {
    lib3.expectTrue(fun("foo") == 3);
};
export class properties {
}
