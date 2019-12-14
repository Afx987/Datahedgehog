/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/propagate_inference_to_field_in_class.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var test : () => any = () =>  {
    let a = new A();
    let b : A = a;
    core.print(a.x);
    core.print(a.x + 2);
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
