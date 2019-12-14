/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_correctly_on_multiple_variables_declared_together.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var foo : () => any = () =>  {
    let s : string;
    let i : number;
    s = new B().x;
    s = new B().y;
    s = new B().z;
    s = new B().w;
    i = new B().x;
    i = new B().y;
    i = new B().z;
    i = new B().w;
};
export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    x;
    y;
    z;

    constructor() {
    }
    @defaultConstructor
    A() {
        this.y = 2;
        this.z = "hi";
    }
}

export namespace B {
    export type Constructors = 'B';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
@Implements(A)
export class B implements A.Interface {
    x;
    y;
    z;
    w;

    constructor() {
    }
    @defaultConstructor
    B() {
        this.x = 2;
        this.y = 3;
        this.w = 2;
    }
}

export class properties {
}
