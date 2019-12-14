/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_types_on_generic_instantiations_5.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var foo : () => any = () =>  {
    let y : number = new B<any>().m(null,null);
    let z : string = new B<any>().m(null,null);
};
export var main : () => any = () =>  {
};
export namespace I {
    export type Constructors = 'I';
    export type Interface<E> = Omit<I<E>, Constructors>;
}
@DartClass
export class I<E> {
    @Abstract
    m(a : any,f : <E>(v : any,e : E) => string) : string{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    I() {
    }
}

export namespace A {
    export type Constructors = 'A';
    export type Interface<E> = Omit<A<E>, Constructors>;
}
@DartClass
@Implements(I)
export class A<E> implements I.Interface<E> {
    constructor() {
    }
    @defaultConstructor
    A() {
    }
    @Abstract
    m(a : any,f : <E>(v : any,e : E) => string) : string{ throw 'abstract'}
}

export namespace M {
    export type Constructors = 'M';
    export type Interface = Omit<M, Constructors>;
}
@DartClass
export class M {
    y : number;

    constructor() {
    }
    @defaultConstructor
    M() {
        this.y = 0;
    }
}

export namespace B {
    export type Constructors = A.Constructors | 'B';
    export type Interface<E> = Omit<B<E>, Constructors>;
}
@DartClass
@Implements(M)
export class B<E> extends A<E> implements M.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    B() {
    }
    get y() : number {
        return 0;
    }
    m(a : any,f : <E>(v : any,e : E) => any) {
    }
}

export class properties {
}
