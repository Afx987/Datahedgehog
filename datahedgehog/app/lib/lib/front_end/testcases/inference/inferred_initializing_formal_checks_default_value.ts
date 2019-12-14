/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/inferred_initializing_formal_checks_default_value.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
};
export namespace Foo {
    export type Constructors = 'Foo';
    export type Interface = Omit<Foo, Constructors>;
}
@DartClass
export class Foo {
    x;

    constructor(x? : any) {
    }
    @defaultConstructor
    Foo(x? : any) {
        x = x || "1";
        this.x = 1;
        this.x = x;
    }
}

export class properties {
}
