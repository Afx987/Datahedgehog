/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/generic_methods_correctly_recognize_generic_upper_bound.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    new Foo<string>().method(42);
};
export namespace Foo {
    export type Constructors = 'Foo';
    export type Interface<T extends core.DartPattern> = Omit<Foo<T extends core.DartPattern>, Constructors>;
}
@DartClass
export class Foo<T extends core.DartPattern> {
    method<U extends T>(u : U) : U {
        return u;
    }
    constructor() {
    }
    @defaultConstructor
    Foo() {
    }
}

export class properties {
}
