/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/subclass_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var main : () => any = () =>  {
    lib3.expectTrue(is(new A<X>().foo(), R<X>));
    lib3.expectTrue(is(new B<X>().foo(), R<X>));
    lib3.expectTrue(is(new C<X>().foo(), R<Y>));
    lib3.expectTrue(is(new D<X>().foo(), R<R<X>>));
    lib3.expectTrue(isNot(new A<X>().foo(), R<Y>));
    lib3.expectTrue(isNot(new B<X>().foo(), R<Y>));
    lib3.expectTrue(isNot(new C<X>().foo(), R<X>));
    lib3.expectTrue(isNot(new D<X>().foo(), R<R<Y>>));
};
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

export namespace R {
    export type Constructors = 'R';
    export type Interface<T> = Omit<R<T>, Constructors>;
}
@DartClass
export class R<T> {
    constructor() {
    }
    @defaultConstructor
    R() {
    }
}

export namespace A {
    export type Constructors = 'A';
    export type Interface<T> = Omit<A<T>, Constructors>;
}
@DartClass
export class A<T> {
    foo() {
        return new R<T>();
    }
    constructor() {
    }
    @defaultConstructor
    A() {
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
    }
}

export namespace C {
    export type Constructors = A.Constructors | 'C';
    export type Interface<T> = Omit<C<T>, Constructors>;
}
@DartClass
export class C<T> extends A<Y> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    C() {
    }
}

export namespace D {
    export type Constructors = B.Constructors | 'D';
    export type Interface<T> = Omit<D<T>, Constructors>;
}
@DartClass
export class D<T> extends B<R<T>> {
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
