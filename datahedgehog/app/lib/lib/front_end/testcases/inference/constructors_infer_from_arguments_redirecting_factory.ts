/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/constructors_infer_from_arguments_redirecting_factory.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let x = new C<any>(42);
};
export namespace C {
    export type Constructors = never;
    export type Interface<T> = Omit<C<T>, Constructors>;
}
@DartClass
export class C<T> {
    @AbstractProperty
    get t() : T{ throw 'abstract'}
    set t(x : T){ throw 'abstract'}
    constructor(t : T) {
    }
    @defaultFactory
    static $C<T>(t : T) : C<T> {
        return new CImpl<T>(t);
    }
}

export namespace CImpl {
    export type Constructors = 'CImpl';
    export type Interface<T> = Omit<CImpl<T>, Constructors>;
}
@DartClass
@Implements(C)
export class CImpl<T> implements C.Interface<T> {
    t : T;

    constructor(t : T) {
    }
    @defaultConstructor
    CImpl(t : T) {
        this.t = t;
    }
}

export class properties {
}
