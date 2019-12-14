/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/interpreter/constructor_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => void = () : void =>  {
    let a = new A();
    core.print(a.foo);
    core.print('******************');
    let b = new B();
    core.print(b.foo);
    core.print(b.bar);
};
export var fieldInitializer : (f : number,s : string) => string = (f : number,s : string) : string =>  {
    core.print(`${s}: ${f}`);
    return `${s}: ${f}`;
};
export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    foo : string;

    constructor() {
    }
    @defaultConstructor
    A() {
        this.foo = fieldInitializer(0,'A.foo');
        this.foo = fieldInitializer(1,'A.foo');
        this.foo = fieldInitializer(2,'A.foo');
    }
}

export namespace B {
    export type Constructors = A.Constructors | 'B';
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
        this.bar = fieldInitializer(0,'B.bar');
        this.bar = fieldInitializer(1,'B.bar');
        this.bar = fieldInitializer(2,'B.bar');
    }
}

export class properties {
}
