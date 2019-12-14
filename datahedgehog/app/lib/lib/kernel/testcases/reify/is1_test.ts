/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/is1_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var main : () => any = () =>  {
    let x = new A<I>();
    lib3.expectTrue(is(x, A<N>));
    lib3.expectTrue(is(x, A<I>));
    lib3.expectFalse(is(x, A<D>));
    let y = new A<any>();
    lib3.expectTrue(is(y, A<N>));
    lib3.expectTrue(is(y, A<I>));
    lib3.expectTrue(is(y, A<D>));
};
export namespace N {
    export type Constructors = 'N';
    export type Interface = Omit<N, Constructors>;
}
@DartClass
export class N {
    constructor() {
    }
    @defaultConstructor
    N() {
    }
}

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

export namespace I {
    export type Constructors = N.Constructors | 'I';
    export type Interface = Omit<I, Constructors>;
}
@DartClass
export class I extends N {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    I() {
    }
}

export namespace D {
    export type Constructors = N.Constructors | 'D';
    export type Interface = Omit<D, Constructors>;
}
@DartClass
export class D extends N {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    D() {
    }
}

export class properties {
}
