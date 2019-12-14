/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/generic_methods_overriding_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var main : () => any = () =>  {
    let y : Y = new Y();
    let c : C = new C();
    let d : D = new D();
    lib3.expectTrue(c.fun(y) == "C");
    lib3.expectTrue(d.fun(y) == "D");
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

export namespace D {
    export type Constructors = C.Constructors | 'D';
    export type Interface = Omit<D, Constructors>;
}
@DartClass
export class D extends C {
    fun<T extends Y>(t : T) : string {
        return "D";
    }
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
