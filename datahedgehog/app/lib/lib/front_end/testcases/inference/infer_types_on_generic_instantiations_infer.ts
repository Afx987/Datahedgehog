/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_types_on_generic_instantiations_infer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var foo : () => any = () =>  {
    let y : string = new B().x;
    let z : number = new B().x;
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
        this.x = null;
    }
}

export namespace B {
    export type Constructors = 'B';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
@Implements(A)
export class B implements A.Interface<number> {
    get x() : any {
        return 3;
    }
    constructor() {
    }
    @defaultConstructor
    B() {
    }
}

export class properties {
}
