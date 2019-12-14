/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/constructors_downwards_with_constraint.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => void = () : void =>  {
    let foo : Foo<B> = new Foo<any>();
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
}

export namespace Foo {
    export type Constructors = 'Foo';
    export type Interface<T extends A> = Omit<Foo<T extends A>, Constructors>;
}
@DartClass
export class Foo<T extends A> {
    constructor() {
    }
    @defaultConstructor
    Foo() {
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

export class properties {
}
