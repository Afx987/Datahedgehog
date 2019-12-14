/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/issue_000026.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    new C();
    new D();
};
export namespace C {
    export type Constructors = 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C {
    a;

    b;

    c;

    constructor() {
    }
    @defaultConstructor
    C() {
        this.b = 0;
        this.c = 1 + 2;
    }
}

export namespace D {
    export type Constructors = 'D';
    export type Interface = Omit<D, Constructors>;
}
@DartClass
export class D {
    a;

    b;

    c;

    constructor() {
    }
    @defaultConstructor
    D() {
        this.b = 1;
        this.c = 2 - 3;
    }
}

export class properties {
}
