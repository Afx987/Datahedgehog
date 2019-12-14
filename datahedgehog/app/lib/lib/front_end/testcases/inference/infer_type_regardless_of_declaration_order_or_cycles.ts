/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_type_regardless_of_declaration_order_or_cycles.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./infer_type_regardless_of_declaration_order_or_cycles_b";

export var foo : () => any = () =>  {
    let y : number = new C().x;
    let z : string = new C().x;
};
export var main : () => any = () =>  {
    foo();
};
export namespace C {
    export type Constructors = lib3.B.Constructors | 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C extends lib3.B {
    get x() {
        return null;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    C() {
    }
}

export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    get x() : number {
        return 0;
    }
    constructor() {
    }
    @defaultConstructor
    A() {
    }
}

export class properties {
}
