/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/interpreter/object_super_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => void = () : void =>  {
    let a = new A.withArgs(0);
    core.print(a.foo);
    let b1 = new B.withSuper();
    core.print(b1.foo);
    core.print(b1.bar);
    let b2 = new B();
    core.print(b2.foo);
    core.print(b2.bar);
};
export var fieldInitializer : (f : number,s : string) => string = (f : number,s : string) : string =>  {
    core.print(`${s}: ${f}`);
    return `${s}: ${f}`;
};
export namespace A {
    export type Constructors = 'A' | 'withArgs';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    foo : string;

    constructor() {
    }
    @defaultConstructor
    A() {
        this.withArgs(0);
    }
    @namedConstructor
    withArgs(i : number) {
        this.foo = fieldInitializer(i,'A.foo');
    }
    static withArgs : new(i : number) => A;

}

export namespace B {
    export type Constructors = A.Constructors | 'B' | 'withSuper';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
export class B extends A {
    bar : string;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    B() {
    }
    @namedConstructor
    withSuper() {
        this.bar = fieldInitializer(0,'B.bar');
        super.withArgs(1);
    }
    static withSuper : new() => B;

}

export class properties {
}
