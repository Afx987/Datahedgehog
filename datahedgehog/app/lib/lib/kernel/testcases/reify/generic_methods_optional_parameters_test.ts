/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/generic_methods_optional_parameters_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var funObjObj : <T>(x : core.DartObject,y? : core.DartObject) => core.DartObject = <T>(x : core.DartObject,y? : core.DartObject) : core.DartObject =>  {
    return x;
};
export var funTypObj : <T>(x : T,y? : core.DartObject) => core.DartObject = <T>(x : T,y? : core.DartObject) : core.DartObject =>  {
    return y;
};
export var funObjTyp : <T>(x : core.DartObject,y? : T) => core.DartObject = <T>(x : core.DartObject,y? : T) : core.DartObject =>  {
    return x;
};
export var funTypTyp : <T>(x : T,y? : T) => core.DartObject = <T>(x : T,y? : T) : core.DartObject =>  {
    return null;
};
export var main : () => any = () =>  {
    lib3.expectTrue(is(funObjObj, ( : core.DartObject?) => core.DartObject));
    lib3.expectTrue(is(funObjObj, ( : core.DartObject?) => core.DartObject));
    lib3.expectTrue(is(funObjObj, ( : T?) => core.DartObject));
    lib3.expectTrue(is(funObjObj, ( : T?) => core.DartObject));
    lib3.expectTrue(isNot(funTypObj, ( : core.DartObject?) => core.DartObject));
    lib3.expectTrue(is(funTypObj, ( : core.DartObject?) => core.DartObject));
    lib3.expectTrue(isNot(funTypObj, ( : T?) => core.DartObject));
    lib3.expectTrue(is(funTypObj, ( : T?) => core.DartObject));
    lib3.expectTrue(isNot(funObjTyp, ( : core.DartObject?) => core.DartObject));
    lib3.expectTrue(isNot(funObjTyp, ( : core.DartObject?) => core.DartObject));
    lib3.expectTrue(is(funObjTyp, ( : T?) => core.DartObject));
    lib3.expectTrue(is(funObjTyp, ( : T?) => core.DartObject));
    lib3.expectTrue(isNot(funTypTyp, ( : core.DartObject?) => core.DartObject));
    lib3.expectTrue(isNot(funTypTyp, ( : core.DartObject?) => core.DartObject));
    lib3.expectTrue(isNot(funTypTyp, ( : T?) => core.DartObject));
    lib3.expectTrue(is(funTypTyp, ( : T?) => core.DartObject));
};
export class properties {
}
