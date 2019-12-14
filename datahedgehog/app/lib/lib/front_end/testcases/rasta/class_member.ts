/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/class_member.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Foo {
    export type Constructors = 'constructor1' | 'constructor2' | 'constructor3';
    export type Interface = Omit<Foo, Constructors>;
}
@DartClass
export class Foo {
    a() {
    }
    b() {
    }
    c() {
    }
    field1;

    field2;

    field3;

    @namedConstructor
    constructor1() {
    }
    static constructor1 : new() => Foo;

    @namedConstructor
    constructor2() {
    }
    static constructor2 : new() => Foo;

    @namedConstructor
    constructor3() {
    }
    static constructor3 : new() => Foo;

}

export class properties {
}
