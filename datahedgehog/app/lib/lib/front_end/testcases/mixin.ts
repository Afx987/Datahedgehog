/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/mixin.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    new B(null).m();
    new C(null).m();
    new D<any>().m();
    new D<number>().m();
    new D<core.DartList<number>>().m();
};
export namespace B {
    export type Constructors = 'B';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
@With(M1,M2)
export class B extends core.DartObject implements M1.Interface,M2.Interface {
    @Abstract
    m() : any {
        throw 'from mixin';
    }
    @Abstract
    m() : any {
        throw 'from mixin';
    }
    constructor(value : any) {
    }
    @defaultConstructor
    B(value : any) {
    }
}

export namespace M1 {
    export type Constructors = 'M1';
    export type Interface = Omit<M1, Constructors>;
}
@DartClass
export class M1 {
    m() {
        return core.print("M1");
    }
    constructor() {
    }
    @defaultConstructor
    M1() {
    }
}

export namespace M2 {
    export type Constructors = 'M2';
    export type Interface = Omit<M2, Constructors>;
}
@DartClass
export class M2 {
    m() {
        return core.print("M2");
    }
    constructor() {
    }
    @defaultConstructor
    M2() {
    }
}

export namespace C {
    export type Constructors = 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
@With(M1,M2)
export class C extends core.DartObject implements M1.Interface,M2.Interface {
    @Abstract
    m() : any {
        throw 'from mixin';
    }
    @Abstract
    m() : any {
        throw 'from mixin';
    }
    constructor(value : any) {
    }
    @defaultConstructor
    C(value : any) {
    }
}

export namespace G1 {
    export type Constructors = 'G1';
    export type Interface<T> = Omit<G1<T>, Constructors>;
}
@DartClass
export class G1<T> {
    m() {
        return core.print(T);
    }
    constructor() {
    }
    @defaultConstructor
    G1() {
    }
}

export namespace D {
    export type Constructors = 'D';
    export type Interface<S> = Omit<D<S>, Constructors>;
}
@DartClass
@With(G1)
export class D<S> extends core.DartObject implements G1.Interface<S> {
    @Abstract
    m() : any {
        throw 'from mixin';
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    D() {
    }
}

export class properties {
}
