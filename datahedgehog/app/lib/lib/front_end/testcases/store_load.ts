/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/store_load.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let foo = new Foo();
    foo._field = new FooValue();
    let fooValue = foo._field;
    core.print(fooValue);
    let bar = new Bar();
    bar._field = new BarValue();
    let barValue = bar._field;
    core.print(barValue);
};
export namespace Foo {
    export type Constructors = 'Foo';
    export type Interface = Omit<Foo, Constructors>;
}
@DartClass
export class Foo {
    _field;

    constructor() {
    }
    @defaultConstructor
    Foo() {
    }
}

export namespace FooValue {
    export type Constructors = 'FooValue';
    export type Interface = Omit<FooValue, Constructors>;
}
@DartClass
export class FooValue {
    constructor() {
    }
    @defaultConstructor
    FooValue() {
    }
}

export namespace Bar {
    export type Constructors = 'Bar';
    export type Interface = Omit<Bar, Constructors>;
}
@DartClass
export class Bar {
    _field;

    constructor() {
    }
    @defaultConstructor
    Bar() {
    }
}

export namespace BarValue {
    export type Constructors = 'BarValue';
    export type Interface = Omit<BarValue, Constructors>;
}
@DartClass
export class BarValue {
    constructor() {
    }
    @defaultConstructor
    BarValue() {
    }
}

export class properties {
}
