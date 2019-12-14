/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/generic_methods_closure_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var fun : <T>(list : core.DartList<T>) => void = <T>(list : core.DartList<T>) : void =>  {
    let helper1 = <S>(list : core.DartList<S>) =>  {
        if (list.length > 0) {
            lib3.expectTrue(is(list[0], S));
        }
        lib3.expectTrue(is(list, core.DartList<S>));
        lib3.expectTrue(is(list, core.DartList<T>));
    };
    var helper2 : <S>(list : core.DartList<S>) => void = <S>(list : core.DartList<S>) : void =>  {
        if (list.length > 0) {
            lib3.expectTrue(is(list[0], S));
        }
        lib3.expectTrue(is(list, core.DartList<S>));
        lib3.expectTrue(is(list, core.DartList<T>));
    };
    helper1(list);
    helper2(list);
};
export var main : () => any = () =>  {
    let list : core.DartList<B> = new core.DartList.literal<B>(new B());
    fun(list);
};
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

export namespace I {
    export type Constructors = 'I';
    export type Interface<T> = Omit<I<T>, Constructors>;
}
@DartClass
export class I<T> {
    constructor() {
    }
    @defaultConstructor
    I() {
    }
}

export namespace B {
    export type Constructors = I.Constructors | 'B';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
export class B extends I<B> {
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
