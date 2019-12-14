/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/instance_creation_downwards.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let x = new A<any>(new B<any>());
};
export namespace A {
    export type Constructors = 'A';
    export type Interface<T> = Omit<A<T>, Constructors>;
}
@DartClass
export class A<T> {
    constructor(b : B<core.DartList<T>>) {
    }
    @defaultConstructor
    A(b : B<core.DartList<T>>) {
    }
}

export namespace B {
    export type Constructors = 'B';
    export type Interface<T> = Omit<B<T>, Constructors>;
}
@DartClass
export class B<T> {
    constructor() {
    }
    @defaultConstructor
    B() {
    }
}

export class properties {
}
