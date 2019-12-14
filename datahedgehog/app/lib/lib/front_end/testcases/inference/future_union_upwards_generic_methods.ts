/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/future_union_upwards_generic_methods.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let b = new async.Future.value(new B());
    let c = new async.Future.value(new C());
    let lll = new core.DartList.literal(b,c);
    let result = await async.Future.wait(lll);
    let result2 = await async.Future.wait(new core.DartList.literal(b,c));
    let list : core.DartList<A> = result;
    list = result2;
})());
export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    constructor() {
    }
    @defaultConstructor
    A() {
    }
}

export namespace B {
    export type Constructors = A.Constructors | 'B';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
export class B extends A {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    B() {
    }
}

export namespace C {
    export type Constructors = A.Constructors | 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C extends A {
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
