/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/field_initializer_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var p : (x : any) => any = (x : any) =>  {
    lib3.write(x);
    return x;
};
export var main : () => any = () =>  {
    let b = new B<any>();
    lib3.expectOutput("b1\nb2\nb3\nb4\na1\na2\nA\nB");
};
export namespace A {
    export type Constructors = 'A';
    export type Interface<T> = Omit<A<T>, Constructors>;
}
@DartClass
export class A<T> {
    a1;

    a2;

    constructor() {
    }
    @defaultConstructor
    A() {
        this.a1 = p("a1");
        this.a2 = p("a2");
        p("A");
    }
}

export namespace B {
    export type Constructors = A.Constructors | 'B';
    export type Interface<T> = Omit<B<T>, Constructors>;
}
@DartClass
export class B<T> extends A<T> {
    b1;

    b2;

    b3;

    b4;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    B() {
        this.b1 = p("b1");
        this.b2 = p("b2");
        this.b3 = p("b3");
        this.b4 = p("b4");
        super.A();
        p("B");
    }
}

export class properties {
}
