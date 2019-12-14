/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/duplicated_mixin.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Mixin {
    export type Constructors = 'Mixin';
    export type Interface = Omit<Mixin, Constructors>;
}
@DartClass
export class Mixin {
    field;

    constructor() {
    }
    @defaultConstructor
    Mixin() {
    }
}

export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
@With(Mixin,Mixin)
export class A extends core.DartObject implements Mixin.Interface,Mixin.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    A() {
    }
}

export class properties {
}
