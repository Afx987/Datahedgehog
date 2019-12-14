/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/interpreter/object_fields_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => void = () : void =>  {
    let a = new A();
    core.print(a.f1);
    core.print(a.f2);
    new B(0);
    new B.redirecting1(0);
    new B.redirecting2(0);
    let c = new C.redirecting1(0);
    core.print(c.f1);
    core.print(c.f2);
};
export var redirecting : (i : number,s : string) => number = (i : number,s : string) : number =>  {
    core.print(`${s}: ${i}`);
    return i + 1;
};
export var fieldInitializer : (f : number,s : string) => number = (f : number,s : string) : number =>  {
    core.print(`${s}: ${f}`);
    return f;
};
export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    f1 : number;

    f2 : string;

    constructor() {
    }
    @defaultConstructor
    A() {
        this.f1 = 37;
        this.f2 = 'hello world';
    }
}

export namespace B {
    export type Constructors = 'B' | 'redirecting1' | 'redirecting2';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
export class B {
    constructor(i : number) {
    }
    @defaultConstructor
    B(i : number) {
    }
    @namedConstructor
    redirecting1(i : number) {
        this.B(redirecting(i,'B.redirecting1'));
    }
    static redirecting1 : new(i : number) => B;

    @namedConstructor
    redirecting2(i : number) {
        this.redirecting1(redirecting(i,'B.redirecting2'));
    }
    static redirecting2 : new(i : number) => B;

}

export namespace C {
    export type Constructors = 'C' | 'redirecting1';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C {
    f1 : number;

    f2 : number;

    constructor(i : number) {
    }
    @defaultConstructor
    C(i : number) {
        this.f1 = fieldInitializer(0,'C.f1');
        this.f2 = fieldInitializer(1,'C.f2');
    }
    @namedConstructor
    redirecting1(i : number) {
        this.f1 = fieldInitializer(0,'C.f1');
        this.f2 = fieldInitializer(1,'C.f2');
        this.C(redirecting(i,'C.redirecting1'));
    }
    static redirecting1 : new(i : number) => C;

}

export class properties {
}
