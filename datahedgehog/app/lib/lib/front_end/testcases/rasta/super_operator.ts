/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/super_operator.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    [OperatorMethods.PLUS](s : string) {
        return null;
    }
    [OperatorMethods.INDEX](i : any) {
        return null;
    }
    [OperatorMethods.INDEX_EQ](i : any,val : any) {
    }
    constructor() {
    }
    @defaultConstructor
    A() {
    }
}

export namespace Autobianchi {
    export type Constructors = 'Autobianchi';
    export type Interface = Omit<Autobianchi, Constructors>;
}
@DartClass
export class Autobianchi {
    g() {
        return op(Op.INDEX,super,0);
    }
    constructor() {
    }
    @defaultConstructor
    Autobianchi() {
    }
}

export namespace B {
    export type Constructors = A.Constructors | 'B';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
export class B extends A {
    [OperatorMethods.PLUS](s : string) {
        return op(Op.PLUS,super,(`${s}${s}`));
    }
    [OperatorMethods.INDEX](i : any) {
        return op(Op.INDEX,super,i);
    }
    [OperatorMethods.INDEX_EQ](i : any,val : any) {
        return op(Op.INDEX_ASSIGN,super,i++,val);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    B() {
    }
}

export class properties {
}
