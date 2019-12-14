/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/literals_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var main : () => any = () =>  {
    lib3.expectTrue(is(new core.DartList.literal<A>(), core.DartList<A>));
    lib3.expectTrue(isNot(new core.DartList.literal<A>(), core.DartList<B>));
    lib3.expectTrue(is(new core.DartMap.literal([
    ]), core.DartMap<A,B>));
    lib3.expectTrue(isNot(new core.DartMap.literal([
    ]), core.DartMap<A,A>));
    lib3.expectTrue(isNot(new core.DartMap.literal([
    ]), core.DartMap<B,B>));
};
export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    constructor() {
    }
    @defaultConstructor
    A() {
    }
}

export namespace B {
    export type Constructors = 'B';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
export class B {
    constructor() {
    }
    @defaultConstructor
    B() {
    }
}

export class properties {
}
