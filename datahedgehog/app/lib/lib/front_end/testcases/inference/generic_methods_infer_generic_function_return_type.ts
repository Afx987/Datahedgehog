/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/generic_methods_infer_generic_function_return_type.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
};
export namespace D {
    export type Constructors = 'D';
    export type Interface<T> = Omit<D<T>, Constructors>;
}
@DartClass
export class D<T> {
    f<U>(u : U) : <V>() => U {
        return null;
    }
    constructor() {
    }
    @defaultConstructor
    D() {
    }
}

export namespace C {
    export type Constructors = D.Constructors | 'C';
    export type Interface<T> = Omit<C<T>, Constructors>;
}
@DartClass
export class C<T> extends D<T> {
    f<U>(x : any) {
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    C() {
    }
}

export class properties {
}
