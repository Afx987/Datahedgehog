/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/classes.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let a : A = new A(87);
    let b : B = new B(117);
    a.method();
    b.method();
};
export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    x : number;

    y : number;

    constructor(y : number) {
    }
    @defaultConstructor
    A(y : number) {
        this.x = 42;
        this.y = y;
    }
    method() {
        core.print(`A.method x: ${this.x} y: ${this.y}`);
        core.print(this);
        core.print(this.runtimeType);
    }
}

export namespace B {
    export type Constructors = A.Constructors | 'B';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
export class B extends A {
    constructor(x : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    B(x : any) {
        super.A(x);
    }
    method() {
        core.print(`B.method x: ${this.x} y: ${this.y}`);
        super.method();
    }
}

export class properties {
}
