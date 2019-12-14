/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/conflicts_can_happen2.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
};
export namespace I1 {
    export type Constructors = 'I1';
    export type Interface = Omit<I1, Constructors>;
}
@DartClass
export class I1 {
    x : number;

    constructor() {
    }
    @defaultConstructor
    I1() {
    }
}

export namespace I2 {
    export type Constructors = 'I2';
    export type Interface = Omit<I2, Constructors>;
}
@DartClass
export class I2 {
    y : number;

    constructor() {
    }
    @defaultConstructor
    I2() {
    }
}

export namespace I3 {
    export type Constructors = 'I3';
    export type Interface = Omit<I3, Constructors>;
}
@DartClass
@Implements(I1,I2)
export class I3 implements I1.Interface,I2.Interface {
    x : number;

    y : number;

    constructor() {
    }
    @defaultConstructor
    I3() {
    }
}

export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    a : I1;

    constructor() {
    }
    @defaultConstructor
    A() {
        this.a = null;
    }
}

export namespace B {
    export type Constructors = 'B';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
export class B {
    a : I2;

    constructor() {
    }
    @defaultConstructor
    B() {
        this.a = null;
    }
}

export namespace C1 {
    export type Constructors = 'C1';
    export type Interface = Omit<C1, Constructors>;
}
@DartClass
@Implements(A,B)
export class C1 implements A.Interface,B.Interface {
    get a() : I3 {
        return null;
    }
    constructor() {
    }
    @defaultConstructor
    C1() {
    }
}

export namespace C2 {
    export type Constructors = 'C2';
    export type Interface = Omit<C2, Constructors>;
}
@DartClass
@Implements(A,B)
export class C2 implements A.Interface,B.Interface {
    get a() {
        return null;
    }
    constructor() {
    }
    @defaultConstructor
    C2() {
    }
}

export class properties {
}
