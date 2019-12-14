/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/propagate_inference_transitively.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var test5 : () => any = () =>  {
    let a1 = new A();
    a1.x = "hi";
    let a2 : A = new A();
    a2.x = "hi";
};
export var main : () => any = () =>  {
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
        this.x = 2;
    }
}

export class properties {
}
