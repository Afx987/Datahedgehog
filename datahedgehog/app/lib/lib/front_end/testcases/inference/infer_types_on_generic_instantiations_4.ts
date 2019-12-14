/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_types_on_generic_instantiations_4.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var foo : () => any = () =>  {
    let y : number = new B<string>().x;
    let z : string = new B<string>().x;
};
export var main : () => any = () =>  {
    foo();
};
export namespace A {
    export type Constructors = 'A';
    export type Interface<T> = Omit<A<T>, Constructors>;
}
@DartClass
export class A<T> {
    x : T;

    constructor() {
    }
    @defaultConstructor
    A() {
    }
}

export namespace B {
    export type Constructors = A.Constructors | 'B';
    export type Interface<E> = Omit<B<E>, Constructors>;
}
@DartClass
export class B<E> extends A<E> {
    y : E;

    get x() {
        return this.y;
    }
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
