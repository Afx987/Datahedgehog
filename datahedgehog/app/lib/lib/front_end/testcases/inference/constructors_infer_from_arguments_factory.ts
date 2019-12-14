/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/constructors_infer_from_arguments_factory.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let x = new C<any>(42);
    x.t = 'hello';
};
export namespace C {
    export type Constructors = '_';
    export type Interface<T> = Omit<C<T>, Constructors>;
}
@DartClass
export class C<T> {
    t : T;

    @namedConstructor
    _() {
    }
    static _ : new<T>() => C<T>;

    constructor(t : T) {
    }
    @defaultFactory
    static $C<T>(t : T) : C<T> {
        let x = new C._();
        x.t = t;
        return x;
    }
}

export class properties {
}
