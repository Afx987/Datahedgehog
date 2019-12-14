/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/argument.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var foo : (x : any) => void = (x : any) : void =>  {
};
export var bar : (x : any) => void = (x : any) : void =>  {
};
export var foo_escaped : (x : any) => void = (x : any) : void =>  {
};
export var bar_escaped : (x : any) => void = (x : any) : void =>  {
};
export var escape : (fn : any) => void = (fn : any) : void =>  {
    fn(new Baz());
};
export var main : () => any = () =>  {
    foo(new Foo());
    bar(new Bar());
    escape(foo_escaped);
    escape(bar_escaped);
};
export namespace Base {
    export type Constructors = 'Base';
    export type Interface = Omit<Base, Constructors>;
}
@DartClass
export class Base {
    constructor() {
    }
    @defaultConstructor
    Base() {
    }
}

export namespace Foo {
    export type Constructors = Base.Constructors | 'Foo';
    export type Interface = Omit<Foo, Constructors>;
}
@DartClass
export class Foo extends Base {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Foo() {
    }
}

export namespace Bar {
    export type Constructors = Base.Constructors | 'Bar';
    export type Interface = Omit<Bar, Constructors>;
}
@DartClass
export class Bar extends Base {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Bar() {
    }
}

export namespace Baz {
    export type Constructors = Base.Constructors | 'Baz';
    export type Interface = Omit<Baz, Constructors>;
}
@DartClass
export class Baz extends Base {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Baz() {
    }
}

export class properties {
}
