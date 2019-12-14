/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/generic_methods_infer_generic_function_parameter_type2.dart */
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
    @Abstract
    f<U>(g : <V>() => core.DartList<U>) : void{ throw 'abstract'}
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
    f<U>(g : any) {
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

export class properties {
}
