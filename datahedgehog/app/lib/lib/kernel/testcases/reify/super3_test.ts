/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/super3_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    new B().foo;
    new B.redirect();
};
export namespace A {
    export type Constructors = 'A';
    export type Interface<T> = Omit<A<T>, Constructors>;
}
@DartClass
export class A<T> {
    get foo() {
        return T;
    }
    constructor() {
    }
    @defaultConstructor
    A() {
    }
}

export namespace B {
    export type Constructors = A.Constructors | 'B' | 'redirect';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
export class B extends A<A<any>> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    B() {
    }
    @namedConstructor
    redirect() {
        this.B();
    }
    static redirect : new() => B;

}

export class properties {
}
