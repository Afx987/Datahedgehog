/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/reuse_type_variables_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var main : () => any = () =>  {
    let c = new C<X,Y,Z>();
    let d = c.foo();
    lib3.expectTrue(is(d, D<X,Y,Z>));
    d = c.hest();
    lib3.expectTrue(isNot(d, D<X,Y,Z>));
    lib3.expectTrue(is(d, D<X,Z,Y>));
    c = d.baz();
    lib3.expectTrue(is(c, C<X,Z,Y>));
    let e = c.bar();
    lib3.expectTrue(is(e, E<X,Z>));
    c = e.qux();
    lib3.expectTrue(is(c, C<X,Z,Z>));
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

export namespace Z {
    export type Constructors = 'Z';
    export type Interface = Omit<Z, Constructors>;
}
@DartClass
export class Z {
    constructor() {
    }
    @defaultConstructor
    Z() {
    }
}

export namespace C {
    export type Constructors = 'C';
    export type Interface<T,U,V> = Omit<C<T,U,V>, Constructors>;
}
@DartClass
export class C<T,U,V> {
    foo() {
        return new D<T,U,V>();
    }
    bar() {
        return new E<T,U>();
    }
    hest() {
        return new D<T,V,U>();
    }
    constructor() {
    }
    @defaultConstructor
    C() {
    }
}

export namespace D {
    export type Constructors = 'D';
    export type Interface<T,U,V> = Omit<D<T,U,V>, Constructors>;
}
@DartClass
export class D<T,U,V> {
    baz() {
        return new C<T,U,V>();
    }
    constructor() {
    }
    @defaultConstructor
    D() {
    }
}

export namespace E {
    export type Constructors = 'E';
    export type Interface<T,U> = Omit<E<T,U>, Constructors>;
}
@DartClass
export class E<T,U> {
    qux() {
        return new C<T,U,U>();
    }
    constructor() {
    }
    @defaultConstructor
    E() {
    }
}

export class properties {
}
