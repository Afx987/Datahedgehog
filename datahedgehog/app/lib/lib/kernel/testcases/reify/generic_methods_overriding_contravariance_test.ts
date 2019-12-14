/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/generic_methods_overriding_contravariance_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var main : () => any = () =>  {
    let y : Y = new Y();
    let c : C = new C();
    let e : E = new E();
    lib3.expectTrue(c.fun(y) == "C");
    lib3.expectTrue(e.fun(y) == "E");
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

export namespace C {
    export type Constructors = 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C {
    fun<T extends Y>(t : T) : string {
        return "C";
    }
    constructor() {
    }
    @defaultConstructor
    C() {
    }
}

export namespace Y {
    export type Constructors = X.Constructors | 'Y';
    export type Interface = Omit<Y, Constructors>;
}
@DartClass
export class Y extends X {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Y() {
    }
}

export namespace E {
    export type Constructors = C.Constructors | 'E';
    export type Interface = Omit<E, Constructors>;
}
@DartClass
export class E extends C {
    fun<T extends Y>(y : Y) : string {
        return "E";
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    E() {
    }
}

export namespace Z {
    export type Constructors = Y.Constructors | 'Z';
    export type Interface = Omit<Z, Constructors>;
}
@DartClass
export class Z extends Y {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Z() {
    }
}

export class properties {
}
