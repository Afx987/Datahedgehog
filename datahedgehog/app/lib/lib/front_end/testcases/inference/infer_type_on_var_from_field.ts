/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_type_on_var_from_field.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    x : number;

    test1() {
        let a = this.x;
        a = "hi";
        a = 3;
        let b = this.y;
        b = "hi";
        b = 4;
        let c = this.z;
        c = "hi";
        c = 4;
    }
    y : number;

    z;

    constructor() {
    }
    @defaultConstructor
    A() {
        this.x = 0;
        this.z = 42;
    }
}

export class properties {
}
