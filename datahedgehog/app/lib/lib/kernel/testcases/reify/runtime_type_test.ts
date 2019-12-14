/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/runtime_type_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var eqt : (a : any,b : any) => boolean = (a : any,b : any) : boolean =>  {
    return op(Op.EQUALS,a.runtimeType,b.runtimeType);
};
export var main : () => any = () =>  {
    lib3.expectTrue(eqt(new A<any>(),new A<any>()));
    lib3.expectTrue(eqt(new A<X>(),new A<X>()));
    lib3.expectFalse(eqt(new A<X>(),new A<any>()));
    lib3.expectFalse(eqt(new A<X>(),new A<Y>()));
};
export namespace A {
    export type Constructors = 'A';
    export type Interface<T> = Omit<A<T>, Constructors>;
}
@DartClass
export class A<T> {
    constructor() {
    }
    @defaultConstructor
    A() {
    }
}

export namespace X {
    export type Constructors = 'X';
    export type Interface = Omit<X, Constructors>;
}
@DartClass
export class X {
    constructor() {
    }
    @defaultConstructor
    X() {
    }
}

export namespace Y {
    export type Constructors = 'Y';
    export type Interface = Omit<Y, Constructors>;
}
@DartClass
export class Y {
    constructor() {
    }
    @defaultConstructor
    Y() {
    }
}

export class properties {
}
