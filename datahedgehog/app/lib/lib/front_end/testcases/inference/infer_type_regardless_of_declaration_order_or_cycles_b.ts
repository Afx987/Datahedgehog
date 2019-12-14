/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_type_regardless_of_declaration_order_or_cycles_b.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./infer_type_regardless_of_declaration_order_or_cycles";

export var main : () => any = () =>  {
};
export namespace B {
    export type Constructors = lib3.A.Constructors | 'B';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
export class B extends lib3.A {
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
