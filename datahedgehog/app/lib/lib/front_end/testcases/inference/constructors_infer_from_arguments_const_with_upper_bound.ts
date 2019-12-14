/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/constructors_infer_from_arguments_const_with_upper_bound.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var f : () => void = () : void =>  {
    let c = new C<any>(0);
    let c2 : C<number> = c;
    let d : D<number> = new D<any>();
};
export namespace C {
    export type Constructors = 'C';
    export type Interface<T extends number> = Omit<C<T extends number>, Constructors>;
}
@DartClass
export class C<T extends number> {
    x : T;

    constructor(x : T) {
    }
    @defaultConstructor
    C(x : T) {
        this.x = x;
    }
}

export namespace D {
    export type Constructors = 'D';
    export type Interface<T extends number> = Omit<D<T extends number>, Constructors>;
}
@DartClass
export class D<T extends number> {
    constructor() {
    }
    @defaultConstructor
    D() {
    }
}

export class properties {
}
