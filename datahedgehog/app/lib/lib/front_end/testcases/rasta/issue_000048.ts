/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/issue_000048.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let c : C = new C(true,2);
};
export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    v1 : boolean;

    v2 : number;

    constructor(v1 : boolean,v2 : number) {
    }
    @defaultConstructor
    A(v1 : boolean,v2 : number) {
        this.v1 = v1;
        this.v2 = v2;
    }
}

export namespace M1 {
    export type Constructors = 'M1';
    export type Interface = Omit<M1, Constructors>;
}
@DartClass
export class M1 {
    v2 : number;

    constructor() {
    }
    @defaultConstructor
    M1() {
        this.v2 = 0;
    }
}

export class properties {
}
