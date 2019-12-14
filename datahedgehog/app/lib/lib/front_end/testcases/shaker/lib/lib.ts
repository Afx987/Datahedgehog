/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/shaker/lib/lib.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var toplevel : () => any = () =>  {
    return null;
};
export namespace _A {
    export type Constructors = '_A';
    export type Interface = Omit<_A, Constructors>;
}
@DartClass
export class _A {
    constructor() {
    }
    @defaultConstructor
    _A() {
    }
}

export namespace K {
    export type Constructors = 'K';
    export type Interface = Omit<K, Constructors>;
}
@DartClass
export class K {
    constructor() {
    }
    @defaultConstructor
    K() {
    }
}

export namespace M2 {
    export type Constructors = 'M2';
    export type Interface = Omit<M2, Constructors>;
}
@DartClass
export class M2 {
    constructor() {
    }
    @defaultConstructor
    M2() {
    }
}

export namespace M3 {
    export type Constructors = 'M3';
    export type Interface = Omit<M3, Constructors>;
}
@DartClass
export class M3 {
    constructor() {
    }
    @defaultConstructor
    M3() {
    }
}

export namespace M1 {
    export type Constructors = 'M1';
    export type Interface = Omit<M1, Constructors>;
}
@DartClass
@Implements(M3)
@With(M2)
export class M1 extends core.DartObject implements M3.Interface,M2.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    M1() {
    }
}

export namespace Bound {
    export type Constructors = 'Bound';
    export type Interface = Omit<Bound, Constructors>;
}
@DartClass
export class Bound {
    constructor() {
    }
    @defaultConstructor
    Bound() {
    }
}

export namespace Base {
    export type Constructors = 'Base';
    export type Interface<T extends Bound> = Omit<Base<T extends Bound>, Constructors>;
}
@DartClass
export class Base<T extends Bound> {
    constructor() {
    }
    @defaultConstructor
    Base() {
    }
}

export namespace F {
    export type Constructors = 'F';
    export type Interface = Omit<F, Constructors>;
}
@DartClass
export class F {
    field : K;

    constructor() {
    }
    @defaultConstructor
    F() {
    }
}

export namespace B {
    export type Constructors = _A.Constructors | 'B';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
export class B extends _A {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    B() {
    }
}

export namespace C {
    export type Constructors = _A.Constructors | 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C extends _A {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    C() {
    }
}

export class properties {
}
