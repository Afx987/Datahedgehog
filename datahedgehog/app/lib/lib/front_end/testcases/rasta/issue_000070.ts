/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/issue_000070.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    new A<number,double,core.DartList<any>>(1,2.0);
    let a : A<any,any,any> = new A.f(1);
    new A.c(new core.DartList.literal(),1);
    let z = a.getter;
    a.setter = 1;
};
export namespace A {
    export type Constructors = 'A' | 'empty' | 'c';
    export type Interface<N,S,U> = Omit<A<N,S,U>, Constructors>;
}
@DartClass
export class A<N,S,U> {
    field : core.DartList<U>;

    constructor(n : N,s : S) {
    }
    @defaultConstructor
    A(n : N,s : S) {
        this.field = new core.DartList<U>();
        Expect.isTrue(is(n, N));
        Expect.isTrue(is(s, S));
    }
    @namedConstructor
    empty() {
        this.field = null;
    }
    static empty : new<N,S,U>() => A<N,S,U>;

    @namedFactory
    static $f<N,S,U>(s : S) : A<N,S,U> {
        Expect.isTrue(is(s, S));
        return new A.empty();
    }
    static f : new<N,S,U>(s : S) => A<N,S,U>;

    @namedConstructor
    c(u : U,s : S) {
        this.field = new core.DartList.literal(null);
    }
    static c : new<N,S,U>(u : U,s : S) => A<N,S,U>;

    get getter() : core.DartList<U> {
        return this.field;
    }
    set setter(s : S) {
    }
}

export namespace J {
    export type Constructors = 'J';
    export type Interface<Aa,B> = Omit<J<Aa,B>, Constructors>;
}
@DartClass
export class J<Aa,B> {
    constructor() {
    }
    @defaultConstructor
    J() {
    }
}

export namespace I {
    export type Constructors = J.Constructors | 'I';
    export type Interface<H,C,K> = Omit<I<H,C,K>, Constructors>;
}
@DartClass
export class I<H,C,K> extends J<C,K> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    I() {
    }
}

export class properties {
}
