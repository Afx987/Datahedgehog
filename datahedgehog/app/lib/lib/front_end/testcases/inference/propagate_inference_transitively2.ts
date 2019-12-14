/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/propagate_inference_transitively2.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => void = () : void =>  {
    let d1 = new D();
    core.print(d1.c.b.a.x);
    let d2 : D = new D();
    core.print(d2.c.b.a.x);
};
export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    x : number;

    constructor() {
    }
    @defaultConstructor
    A() {
        this.x = 42;
    }
}

export namespace B {
    export type Constructors = 'B';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
export class B {
    a : A;

    constructor() {
    }
    @defaultConstructor
    B() {
        this.a = new A();
    }
}

export namespace C {
    export type Constructors = 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C {
    b : B;

    constructor() {
    }
    @defaultConstructor
    C() {
        this.b = new B();
    }
}

export namespace D {
    export type Constructors = 'D';
    export type Interface = Omit<D, Constructors>;
}
@DartClass
export class D {
    c : C;

    constructor() {
    }
    @defaultConstructor
    D() {
        this.c = new C();
    }
}

export class properties {
}
