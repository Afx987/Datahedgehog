/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/generic_methods_tearoff_specialization_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var main : () => any = () =>  {
    let a : A = new A();
    let f : ( : number) => number = a.fun.bind(a);
    let g : ( : string) => string = a.fun.bind(a);
    let h : ( : core.DartObject) => core.DartObject = a.fun.bind(a);
    let generic = a.fun.bind(a);
    lib3.expectTrue(is(f, ( : number) => number));
    lib3.expectTrue(isNot(f, ( : string) => string));
    lib3.expectTrue(isNot(f, ( : core.DartObject) => core.DartObject));
    lib3.expectTrue(isNot(f, ( : T) => T));
    lib3.expectTrue(isNot(g, ( : number) => number));
    lib3.expectTrue(is(g, ( : string) => string));
    lib3.expectTrue(isNot(g, ( : core.DartObject) => core.DartObject));
    lib3.expectTrue(isNot(g, ( : T) => T));
    lib3.expectTrue(isNot(h, ( : number) => number));
    lib3.expectTrue(isNot(h, ( : string) => string));
    lib3.expectTrue(is(h, ( : core.DartObject) => core.DartObject));
    lib3.expectTrue(isNot(g, ( : T) => T));
    lib3.expectTrue(isNot(generic, ( : number) => number));
    lib3.expectTrue(isNot(generic, ( : string) => string));
    lib3.expectTrue(isNot(generic, ( : core.DartObject) => core.DartObject));
    lib3.expectTrue(is(generic, ( : T) => T));
};
export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    fun<T>(t : T) : T {
        return t;
    }
    constructor() {
    }
    @defaultConstructor
    A() {
    }
}

export class properties {
}
