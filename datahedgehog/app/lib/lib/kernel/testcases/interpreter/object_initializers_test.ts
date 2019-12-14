/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/interpreter/object_initializers_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => void = () : void =>  {
    let a = new A('foo1','foo2');
    core.print(a.foo1);
    core.print(a.foo2);
    let b = new B(fieldInitializer(0,'foo1'),fieldInitializer(0,'foo2'));
    core.print(b.foo1);
    core.print(b.foo2);
    core.print(b.foo3);
};
export var fieldInitializer : (f : number,s : string) => string = (f : number,s : string) : string =>  {
    core.print(`${s}: ${f}`);
    return `${s}: ${f}`;
};
export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    foo1 : string;

    foo2 : string;

    constructor(foo1 : string,foo2 : string) {
    }
    @defaultConstructor
    A(foo1 : string,foo2 : string) {
        this.foo1 = foo1;
        this.foo2 = foo2;
    }
}

export namespace B {
    export type Constructors = 'B';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
export class B {
    foo1 : string;

    foo2 : string;

    foo3 : string;

    constructor(foo1 : string,foo2 : string) {
    }
    @defaultConstructor
    B(foo1 : string,foo2 : string) {
        this.foo1 = fieldInitializer(1,'foo1');
        this.foo2 = fieldInitializer(1,'foo2');
        this.foo3 = fieldInitializer(1,'foo3');
        this.foo3 = foo2;
        this.foo1 = foo1;
        this.foo2 = foo2;
    }
}

export class properties {
}
