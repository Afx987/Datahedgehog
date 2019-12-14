/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/override.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) =>  {
    let object = args.length == 0 ? new Base() : new Sub();
    let a = object.method();
    core.print(a);
};
export namespace Foo {
    export type Constructors = 'Foo';
    export type Interface = Omit<Foo, Constructors>;
}
@DartClass
export class Foo {
    constructor() {
    }
    @defaultConstructor
    Foo() {
    }
}

export namespace Base {
    export type Constructors = 'Base';
    export type Interface = Omit<Base, Constructors>;
}
@DartClass
export class Base {
    method() : Foo {
        return new Foo();
    }
    constructor() {
    }
    @defaultConstructor
    Base() {
    }
}

export namespace Bar {
    export type Constructors = Foo.Constructors | 'Bar';
    export type Interface = Omit<Bar, Constructors>;
}
@DartClass
export class Bar extends Foo {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Bar() {
    }
}

export namespace Sub {
    export type Constructors = Base.Constructors | 'Sub';
    export type Interface = Omit<Sub, Constructors>;
}
@DartClass
export class Sub extends Base {
    method() : Foo {
        return new Bar();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Sub() {
    }
}

export class properties {
}
