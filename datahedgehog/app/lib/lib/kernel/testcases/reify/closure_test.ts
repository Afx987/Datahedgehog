/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/closure_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var bar : (a : A) => any = (a : A) =>  {
    return null;
};
export var baz : (a : any) => B = (a : any) : B =>  {
    return null;
};
export var main : () => any = () =>  {
    var foo : (a : A) => B = (a : A) : B =>  {
        return null;
    };
    var qux : (b : B) => A = (b : B) : A =>  {
        return null;
    };
    lib3.expectTrue(is(foo, (a : A) => B));
    lib3.expectTrue(isNot(qux, (a : A) => B));
    lib3.expectTrue(isNot(foo, (b : B) => A));
    lib3.expectTrue(is(qux, (b : B) => A));
    lib3.expectTrue(is(bar, (a : A) => B));
    lib3.expectTrue(isNot(bar, (b : B) => A));
    lib3.expectTrue(is(baz, (a : A) => B));
    lib3.expectTrue(isNot(baz, (b : B) => A));
    let rab = bar;
    let zab = baz;
    lib3.expectTrue(is(rab, (a : A) => B));
    lib3.expectTrue(isNot(rab, (b : B) => A));
    lib3.expectTrue(is(zab, (a : A) => B));
    lib3.expectTrue(isNot(zab, (b : B) => A));
};
export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    constructor() {
    }
    @defaultConstructor
    A() {
    }
}

export namespace B {
    export type Constructors = 'B';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
export class B {
    constructor() {
    }
    @defaultConstructor
    B() {
    }
}

export class properties {
}
