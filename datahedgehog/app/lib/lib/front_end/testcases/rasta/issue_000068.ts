/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/issue_000068.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    Expect.isFalse(is(new G<B>(), G<C>));
    Expect.isFalse(is(new G<A>(), G<B>));
    Expect.isFalse(is(new G<A>(), G<C>));
    Expect.isFalse(is(new G<core.DartObject>(), G<B>));
    Expect.isFalse(is(new G<number>(), G<B>));
    Expect.isFalse(is(new G<number>(), G<double>));
    Expect.isFalse(is(new G<number>(), G<string>));
};
export namespace G {
    export type Constructors = 'G';
    export type Interface<T> = Omit<G<T>, Constructors>;
}
@DartClass
export class G<T> {
    constructor() {
    }
    @defaultConstructor
    G() {
    }
}

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
    export type Constructors = A.Constructors | 'B';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
export class B extends A {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    B() {
    }
}

export namespace C {
    export type Constructors = B.Constructors | 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C extends B {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    C() {
    }
}

export class properties {
}
