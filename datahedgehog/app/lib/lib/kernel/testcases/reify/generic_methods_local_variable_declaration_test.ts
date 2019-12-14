/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/generic_methods_local_variable_declaration_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var fun : <T extends Generator<T>>(t : T) => string = <T extends Generator<T>>(t : T) : string =>  {
    let another : T = t.generate();
    let anotherName : string = `${another}`;
    lib3.expectTrue(is(another, T));
    lib3.expectTrue(is(another, Generator<T>));
    return anotherName;
};
export var main : () => any = () =>  {
    let a : A = new A();
    let b : B = new B();
    lib3.expectTrue(fun(a) == "instance of A");
    lib3.expectTrue(fun(b) == "instance of B");
};
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

export namespace Generator {
    export type Constructors = 'Generator';
    export type Interface<T> = Omit<Generator<T>, Constructors>;
}
@DartClass
export class Generator<T> {
    @Abstract
    generate() : T{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Generator() {
    }
}

export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
@Implements(Generator)
export class A implements Generator.Interface<A> {
    generate() {
        return new A();
    }
    toString() : string {
        return "instance of A";
    }
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
@Implements(Generator)
export class B implements Generator.Interface<B> {
    generate() {
        return new B();
    }
    toString() : string {
        return "instance of B";
    }
    constructor() {
    }
    @defaultConstructor
    B() {
    }
}

export class properties {
}
