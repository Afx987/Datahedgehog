/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/typevariable1_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let one = new Z().succ;
    let two = one.succ;
};
export namespace Z {
    export type Constructors = 'Z';
    export type Interface = Omit<Z, Constructors>;
}
@DartClass
export class Z {
    get succ() {
        return new N<Z>();
    }
    constructor() {
    }
    @defaultConstructor
    Z() {
    }
}

export namespace N {
    export type Constructors = 'N';
    export type Interface<T> = Omit<N<T>, Constructors>;
}
@DartClass
export class N<T> {
    get succ() {
        return new N<N<T>>();
    }
    get pred() {
        return T;
    }
    constructor() {
    }
    @defaultConstructor
    N() {
    }
}

export class properties {
}
