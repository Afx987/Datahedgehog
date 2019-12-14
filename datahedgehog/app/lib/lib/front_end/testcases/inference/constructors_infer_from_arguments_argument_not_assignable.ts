/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/constructors_infer_from_arguments_argument_not_assignable.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var myF : () => NotA = () : NotA =>  {
    return null;
};
export var main : () => any = () =>  {
    let x = new C<any>(myF);
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

export namespace C {
    export type Constructors = 'C';
    export type Interface<T extends A> = Omit<C<T extends A>, Constructors>;
}
@DartClass
export class C<T extends A> {
    constructor(f : <T>() => T) {
    }
    @defaultConstructor
    C(f : <T>() => T) {
    }
}

export namespace NotA {
    export type Constructors = 'NotA';
    export type Interface = Omit<NotA, Constructors>;
}
@DartClass
export class NotA {
    constructor() {
    }
    @defaultConstructor
    NotA() {
    }
}

export class properties {
}
