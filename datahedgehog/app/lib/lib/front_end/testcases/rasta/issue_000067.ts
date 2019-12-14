/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/issue_000067.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let a : A = new A.foo();
    Expect.equals(2,a.m());
};
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
    @namedFactory
    static $foo() : A {
        return new C.bar();
    }
    static foo : new() => A;

    m() : number {
    }
}

export namespace C {
    export type Constructors = A.Constructors | 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C extends A {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    C() {
    }
    @namedFactory
    static $bar() : C {
        return new D();
    }
    static bar : new() => C;

    m() : number {
        return 1;
    }
}

export namespace D {
    export type Constructors = C.Constructors | 'D';
    export type Interface = Omit<D, Constructors>;
}
@DartClass
export class D extends C {
    m() : number {
        return 2;
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
