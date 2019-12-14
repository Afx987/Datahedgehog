/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/generic_methods_generic_class_tearoff_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var main : () => any = () =>  {
    let x : A<number> = new A<number>();
    let f = x.fun.bind(x);
    let y : A<string> = new A<string>();
    let g = y.fun.bind(y);
    let z : A<any> = new A<any>();
    let h = z.fun.bind(z);
    lib3.expectTrue(is(f, ( : number) => number));
    lib3.expectTrue(isNot(f, ( : string) => string));
    lib3.expectTrue(is(f, ( : core.DartObject) => core.DartObject));
    lib3.expectTrue(isNot(f, ( : T) => T));
    lib3.expectTrue(isNot(g, ( : number) => number));
    lib3.expectTrue(is(g, ( : string) => string));
    lib3.expectTrue(is(g, ( : core.DartObject) => core.DartObject));
    lib3.expectTrue(isNot(g, ( : T) => T));
    lib3.expectTrue(isNot(h, ( : number) => number));
    lib3.expectTrue(isNot(h, ( : string) => string));
    lib3.expectTrue(is(h, ( : core.DartObject) => core.DartObject));
    lib3.expectTrue(isNot(h, ( : T) => T));
};
export namespace A {
    export type Constructors = 'A';
    export type Interface<T> = Omit<A<T>, Constructors>;
}
@DartClass
export class A<T> {
    fun(t : T) : T {
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
