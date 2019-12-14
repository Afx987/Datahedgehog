/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/generic_methods_named_parameters_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var funObjObj : <T>(x : core.DartObject,_namedArguments? : {y? : core.DartObject}) => core.DartObject = <T>(x : core.DartObject,_namedArguments? : {y? : core.DartObject}) : core.DartObject =>  {
    let {y} = Object.assign({
    }, _namedArguments );
    return x;
};
export var funTypObj : <T>(x : T,_namedArguments? : {y? : core.DartObject}) => core.DartObject = <T>(x : T,_namedArguments? : {y? : core.DartObject}) : core.DartObject =>  {
    let {y} = Object.assign({
    }, _namedArguments );
    return y;
};
export var funObjTyp : <T>(x : core.DartObject,_namedArguments? : {y? : T}) => core.DartObject = <T>(x : core.DartObject,_namedArguments? : {y? : T}) : core.DartObject =>  {
    let {y} = Object.assign({
    }, _namedArguments );
    return x;
};
export var funTypTyp : <T>(x : T,_namedArguments? : {y? : T}) => core.DartObject = <T>(x : T,_namedArguments? : {y? : T}) : core.DartObject =>  {
    let {y} = Object.assign({
    }, _namedArguments );
    return null;
};
export var main : () => any = () =>  {
    lib3.expectTrue(is(funObjObj, ( : core.DartObject,_namedArguments : {y? : core.DartObject?}) => core.DartObject));
    lib3.expectTrue(is(funObjObj, ( : T,_namedArguments : {y? : core.DartObject?}) => core.DartObject));
    lib3.expectTrue(is(funObjObj, ( : core.DartObject,_namedArguments : {y? : T?}) => core.DartObject));
    lib3.expectTrue(is(funObjObj, ( : T,_namedArguments : {y? : T?}) => core.DartObject));
    lib3.expectTrue(isNot(funTypObj, ( : core.DartObject,_namedArguments : {y? : core.DartObject?}) => core.DartObject));
    lib3.expectTrue(is(funTypObj, ( : T,_namedArguments : {y? : core.DartObject?}) => core.DartObject));
    lib3.expectTrue(isNot(funTypObj, ( : core.DartObject,_namedArguments : {y? : T?}) => core.DartObject));
    lib3.expectTrue(is(funTypObj, ( : T,_namedArguments : {y? : T?}) => core.DartObject));
    lib3.expectTrue(isNot(funObjTyp, ( : core.DartObject,_namedArguments : {y? : core.DartObject?}) => core.DartObject));
    lib3.expectTrue(isNot(funObjTyp, ( : T,_namedArguments : {y? : core.DartObject?}) => core.DartObject));
    lib3.expectTrue(is(funObjTyp, ( : core.DartObject,_namedArguments : {y? : T?}) => core.DartObject));
    lib3.expectTrue(is(funObjTyp, ( : T,_namedArguments : {y? : T?}) => core.DartObject));
    lib3.expectTrue(isNot(funTypTyp, ( : core.DartObject,_namedArguments : {y? : core.DartObject?}) => core.DartObject));
    lib3.expectTrue(isNot(funTypTyp, ( : T,_namedArguments : {y? : core.DartObject?}) => core.DartObject));
    lib3.expectTrue(isNot(funTypTyp, ( : core.DartObject,_namedArguments : {y? : T?}) => core.DartObject));
    lib3.expectTrue(is(funTypTyp, ( : T,_namedArguments : {y? : T?}) => core.DartObject));
};
export class properties {
}
