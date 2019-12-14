/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_types_on_generic_instantiations_in_library_cycle.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./infer_types_on_generic_instantiations_in_library_cycle_a";

export var foo : () => any = () =>  {
    let y : number = new B<string>().m(null,null).value;
    let z : string = new B<string>().m(null,null).value;
};
export var main : () => any = () =>  {
};
export namespace A {
    export type Constructors = 'A';
    export type Interface<E> = Omit<A<E>, Constructors>;
}
@DartClass
@Implements(lib3.I)
export class A<E> implements lib3.I.Interface<E> {
    constructor() {
    }
    @defaultConstructor
    A() {
        this.value = null;
    }
    value : E;

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
    m(a : any,f : <E>(v : any,e : number) => any) {
    }
}

export class properties {
}
