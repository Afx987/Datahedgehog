/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/cycles.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    core.print(new A());
    core.print(new B());
    core.print(new C());
    core.print(new D());
};
export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
@Implements(C)
export class A implements C.Interface {
    constructor() {
    }
    @defaultConstructor
    A() {
    }
}

export namespace D {
    export type Constructors = 'D';
    export type Interface = Omit<D, Constructors>;
}
@DartClass
export class D {
    constructor() {
    }
    @defaultConstructor
    D() {
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
@Implements(D)
export class C extends B implements D.Interface {
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
