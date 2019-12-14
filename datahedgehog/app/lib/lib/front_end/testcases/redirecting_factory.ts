/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/redirecting_factory.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    core.print(new FooBase<double>(4).x);
    new SimpleCase<number,double>();
    new Mix<double>();
};
export namespace FooBase {
    export type Constructors = never;
    export type Interface<Tf> = Omit<FooBase<Tf>, Constructors>;
}
@DartClass
export class FooBase<Tf> {
    @AbstractProperty
    get x() : number{ throw 'abstract'}
    constructor(x : number) {
    }
    @defaultFactory
    static $FooBase<Tf>(x : number) : FooBase<Tf> {
        return new Foo.$create(x);
    }
}

export namespace Foo {
    export type Constructors = never;
    export type Interface<T> = Omit<Foo<T>, Constructors>;
}
@DartClass
@Implements(FooBase)
export class Foo<T> implements FooBase.Interface<any> {
    constructor(x : number) {
    }
    @defaultFactory
    static $Foo<T>(x : number) : Foo<T> {
        return new Bar<string,T>(x);
    }
}

export namespace Bar {
    export type Constructors = 'Bar';
    export type Interface<Sb,Tb> = Omit<Bar<Sb,Tb>, Constructors>;
}
@DartClass
@Implements(Foo)
export class Bar<Sb,Tb> implements Foo.Interface<Tb> {
    x : number;

    constructor(x : number) {
    }
    @defaultConstructor
    Bar(x : number) {
        this.x = x;
        core.print(`Bar<${Sb},${Tb}>`);
    }
}

export namespace Builder {
    export type Constructors = 'Builder';
    export type Interface<X> = Omit<Builder<X>, Constructors>;
}
@DartClass
export class Builder<X> {
    method() {
        return new FooBase<X>(4);
    }
    constructor() {
    }
    @defaultConstructor
    Builder() {
    }
}

export namespace SimpleCase {
    export type Constructors = never;
    export type Interface<A,B> = Omit<SimpleCase<A,B>, Constructors>;
}
@DartClass
export class SimpleCase<A,B> {
    constructor() {
    }
    @defaultFactory
    static $SimpleCase<A,B>() : SimpleCase<A,B> {
        return new SimpleCaseImpl.$create();
    }
}

export namespace SimpleCaseImpl {
    export type Constructors = never;
    export type Interface<Ai,Bi> = Omit<SimpleCaseImpl<Ai,Bi>, Constructors>;
}
@DartClass
@Implements(SimpleCase)
export class SimpleCaseImpl<Ai,Bi> implements SimpleCase.Interface<Ai,Bi> {
    constructor() {
    }
    @defaultFactory
    static $SimpleCaseImpl<Ai,Bi>() : SimpleCaseImpl<Ai,Bi> {
        return new SimpleCaseImpl2<Ai,Bi>();
    }
}

export namespace SimpleCaseImpl2 {
    export type Constructors = 'SimpleCaseImpl2';
    export type Interface<Ai2,Bi2> = Omit<SimpleCaseImpl2<Ai2,Bi2>, Constructors>;
}
@DartClass
@Implements(SimpleCaseImpl)
export class SimpleCaseImpl2<Ai2,Bi2> implements SimpleCaseImpl.Interface<Ai2,Bi2> {
    constructor() {
    }
    @defaultConstructor
    SimpleCaseImpl2() {
    }
}

export namespace Base {
    export type Constructors = 'Base';
    export type Interface<M> = Omit<Base<M>, Constructors>;
}
@DartClass
export class Base<M> {
    constructor() {
    }
    @defaultConstructor
    Base() {
    }
}

export namespace Mixin {
    export type Constructors = 'Mixin';
    export type Interface<M> = Omit<Mixin<M>, Constructors>;
}
@DartClass
export class Mixin<M> {
    constructor() {
    }
    @defaultConstructor
    Mixin() {
    }
}

export class properties {
}
