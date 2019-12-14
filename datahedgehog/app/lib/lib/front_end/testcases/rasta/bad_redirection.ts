/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/bad_redirection.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    new Foo();
};
export namespace Foo {
    export type Constructors = 'Foo';
    export type Interface = Omit<Foo, Constructors>;
}
@DartClass
export class Foo {
    constructor() {
    }
    @defaultConstructor
    Foo() {
    }
}

export namespace Bar {
    export type Constructors = Foo.Constructors | never;
    export type Interface = Omit<Bar, Constructors>;
}
@DartClass
export class Bar extends Foo {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultFactory
    static $Bar() : Bar {
        return null;
    }
}

export class properties {
}
