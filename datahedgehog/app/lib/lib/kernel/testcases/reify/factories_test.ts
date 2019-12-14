/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/factories_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var main : () => any = () =>  {
    lib3.expectTrue(is(new A.named(), A<X>));
    lib3.expectTrue(isNot(new A.named(), A<Y>));
    lib3.expectTrue(is(new A.forward(), A<X>));
    lib3.expectTrue(isNot(new A.forward(), A<Y>));
    lib3.expectTrue(is(new A<X>(), B<X>));
    lib3.expectTrue(isNot(new A<X>(), B<Y>));
    lib3.expectTrue(isNot(new A.named(), B<X>));
    lib3.expectTrue(isNot(new A.forward(), B<X>));
};
export namespace A {
    export type Constructors = 'internal';
    export type Interface<T> = Omit<A<T>, Constructors>;
}
@DartClass
export class A<T> {
    constructor() {
    }
    @defaultFactory
    static $A<T>() : A<T> {
        return new B<T>();
    }
    @namedFactory
    static $named<T>() : A<T> {
        return new A.internal();
    }
    static named : new<T>() => A<T>;

    @namedFactory
    static $forward<T>() : A<T> {
        return new A.internal();
    }
    static forward : new<T>() => A<T>;

    @namedConstructor
    internal() {
    }
    static internal : new<T>() => A<T>;

}

export namespace X {
    export type Constructors = 'X';
    export type Interface = Omit<X, Constructors>;
}
@DartClass
export class X {
    constructor() {
    }
    @defaultConstructor
    X() {
    }
}

export namespace Y {
    export type Constructors = 'Y';
    export type Interface = Omit<Y, Constructors>;
}
@DartClass
export class Y {
    constructor() {
    }
    @defaultConstructor
    Y() {
    }
}

export namespace B {
    export type Constructors = A.Constructors | 'B';
    export type Interface<T> = Omit<B<T>, Constructors>;
}
@DartClass
export class B<T> extends A<T> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    B() {
        super.internal();
    }
}

export class properties {
}
