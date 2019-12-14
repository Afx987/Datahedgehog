/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/issue_000080.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let f = new Foo();
    f.field = 42;
    core.print(f.bar());
};
export namespace Mixin {
    export type Constructors = 'Mixin';
    export type Interface = Omit<Mixin, Constructors>;
}
@DartClass
export class Mixin {
    field;

    foo() {
        return 87;
    }
    constructor() {
    }
    @defaultConstructor
    Mixin() {
    }
}

export namespace Foo {
    export type Constructors = 'Foo';
    export type Interface = Omit<Foo, Constructors>;
}
@DartClass
@With(Mixin)
export class Foo extends core.DartObject implements Mixin.Interface {
    foo() {
        return super.foo();
    }
    bar() {
        return super.field;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Foo() {
    }
}

export class properties {
}
