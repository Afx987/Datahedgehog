/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/field_initializer2_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var main : () => any = () =>  {
    let b = new B<A<any>>();
    lib3.expectTrue(is(b.x, A<A<any>>));
    lib3.expectTrue(is(b.y, A<A<any>>));
    lib3.expectFalse(is(b.x, A<B<any>>));
    lib3.expectFalse(is(b.y, A<B<any>>));
};
export namespace A {
    export type Constructors = 'A';
    export type Interface<T> = Omit<A<T>, Constructors>;
}
@DartClass
export class A<T> {
    constructor() {
    }
    @defaultConstructor
    A() {
    }
}

export namespace B {
    export type Constructors = 'B';
    export type Interface<T> = Omit<B<T>, Constructors>;
}
@DartClass
export class B<T> {
    x;

    y;

    constructor() {
    }
    @defaultConstructor
    B() {
        this.x = new A<T>();
        this.y = new A<T>();
    }
}

export class properties {
}
