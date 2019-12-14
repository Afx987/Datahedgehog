/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/downwards_inference_on_instance_creations_infer_downwards.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => void = () : void =>  {
    {
        let a0 : A<number,string> = new A<any,any>(3,"hello");
        let a1 : A<number,string> = new A.named(3,"hello");
        let a2 : A<number,string> = new A<number,string>(3,"hello");
        let a3 : A<number,string> = new A.named(3,"hello");
        let a4 : A<number,string> = new A<number,any>(3,"hello");
        let a5 : A<number,string> = new A.named(3,"hello");
    }
    {
        let a0 : A<number,string> = new A<any,any>("hello",3);
        let a1 : A<number,string> = new A.named("hello",3);
    }
    {
        let a0 : A<number,string> = new B<any,any>("hello",3);
        let a1 : A<number,string> = new B.named("hello",3);
        let a2 : A<number,string> = new B<string,number>("hello",3);
        let a3 : A<number,string> = new B.named("hello",3);
        let a4 : A<number,string> = new B<string,any>("hello",3);
        let a5 : A<number,string> = new B.named("hello",3);
    }
    {
        let a0 : A<number,string> = new B<any,any>(3,"hello");
        let a1 : A<number,string> = new B.named(3,"hello");
    }
    {
        let a0 : A<number,number> = new C<any>(3);
        let a1 : A<number,number> = new C.named(3);
        let a2 : A<number,number> = new C<number>(3);
        let a3 : A<number,number> = new C.named(3);
        let a4 : A<number,number> = new C<any>(3);
        let a5 : A<number,number> = new C.named(3);
    }
    {
        let a0 : A<number,number> = new C<any>("hello");
        let a1 : A<number,number> = new C.named("hello");
    }
    {
        let a0 : A<number,string> = new D<any,any>("hello");
        let a1 : A<number,string> = new D.named("hello");
        let a2 : A<number,string> = new D<number,string>("hello");
        let a3 : A<number,string> = new D.named("hello");
        let a4 : A<number,string> = new D<number,any>("hello");
        let a5 : A<number,string> = new D.named("hello");
    }
    {
        let a0 : A<number,string> = new D<any,any>(3);
        let a1 : A<number,string> = new D.named(3);
    }
    {
        let a0 : A<C<number>,string> = new E<any,any>("hello");
    }
    {
        let a0 : A<number,string> = new F<any,any>(3,"hello",{
            a : new core.DartList.literal(3),b : new core.DartList.literal("hello")});
        let a1 : A<number,string> = new F<any,any>(3,"hello",{
            a : new core.DartList.literal("hello"),b : new core.DartList.literal(3)});
        let a2 : A<number,string> = new F.named(3,"hello",3,"hello");
        let a3 : A<number,string> = new F.named(3,"hello");
        let a4 : A<number,string> = new F.named(3,"hello","hello",3);
        let a5 : A<number,string> = new F.named(3,"hello","hello");
    }
};
export namespace A {
    export type Constructors = 'A' | 'named';
    export type Interface<S,T> = Omit<A<S,T>, Constructors>;
}
@DartClass
export class A<S,T> {
    x : S;

    y : T;

    constructor(x : S,y : T) {
    }
    @defaultConstructor
    A(x : S,y : T) {
        this.x = x;
        this.y = y;
    }
    @namedConstructor
    named(x : S,y : T) {
        this.x = x;
        this.y = y;
    }
    static named : new<S,T>(x : S,y : T) => A<S,T>;

}

export namespace B {
    export type Constructors = A.Constructors | 'B' | 'named';
    export type Interface<S,T> = Omit<B<S,T>, Constructors>;
}
@DartClass
export class B<S,T> extends A<T,S> {
    constructor(y : S,x : T) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    B(y : S,x : T) {
        super.A(x,y);
    }
    @namedConstructor
    named(y : S,x : T) {
        super.named(x,y);
    }
    static named : new<S,T>(y : S,x : T) => B<S,T>;

}

export namespace E {
    export type Constructors = A.Constructors | 'E';
    export type Interface<S,T> = Omit<E<S,T>, Constructors>;
}
@DartClass
export class E<S,T> extends A<C<S>,T> {
    constructor(a : T) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    E(a : T) {
        super.A(null,a);
    }
}

export namespace F {
    export type Constructors = A.Constructors | 'F' | 'named';
    export type Interface<S,T> = Omit<F<S,T>, Constructors>;
}
@DartClass
export class F<S,T> extends A<S,T> {
    constructor(x : S,y : T,_namedArguments? : {a? : core.DartList<S>,b? : core.DartList<T>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    F(x : S,y : T,_namedArguments? : {a? : core.DartList<S>,b? : core.DartList<T>}) {
        let {a,b} = Object.assign({
        }, _namedArguments );
        super.A(x,y);
    }
    @namedConstructor
    named(x : S,y : T,a? : S,b? : T) {
        super.A(a,b);
    }
    static named : new<S,T>(x : S,y : T,a : S,b : T) => F<S,T>;

}

export namespace C {
    export type Constructors = B.Constructors | 'C' | 'named';
    export type Interface<S> = Omit<C<S>, Constructors>;
}
@DartClass
export class C<S> extends B<S,S> {
    constructor(a : S) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    C(a : S) {
        super.B(a,a);
    }
    @namedConstructor
    named(a : S) {
        super.named(a,a);
    }
    static named : new<S>(a : S) => C<S>;

}

export namespace D {
    export type Constructors = B.Constructors | 'D' | 'named';
    export type Interface<S,T> = Omit<D<S,T>, Constructors>;
}
@DartClass
export class D<S,T> extends B<T,number> {
    constructor(a : T) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    D(a : T) {
        super.B(a,3);
    }
    @namedConstructor
    named(a : T) {
        super.named(a,3);
    }
    static named : new<S,T>(a : T) => D<S,T>;

}

export class properties {
}
