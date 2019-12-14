/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/simple_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var testIs : (o : any) => any = (o : any) =>  {
    lib3.write(is(o, A));
    lib3.write(is(o, B));
    lib3.write(is(o, C));
    lib3.write(is(o, D));
};
export var testIsNot : (o : any) => any = (o : any) =>  {
    lib3.write(isNot(o, A));
    lib3.write(isNot(o, B));
    lib3.write(isNot(o, C));
    lib3.write(isNot(o, D));
};
export var main : () => any = () =>  {
    let objects = new core.DartList.literal(new A(),new B(),new C(),new D());
    objects.forEach(testIs);
    objects.forEach(testIsNot);
    lib3.expectOutput("true\nfalse\ntrue\nfalse\nfalse\ntrue\ntrue\nfalse\nfalse\nfalse\ntrue\nfalse\nfalse\ntrue\ntrue\ntrue\nfalse\ntrue\nfalse\ntrue\ntrue\nfalse\nfalse\ntrue\ntrue\ntrue\nfalse\ntrue\ntrue\nfalse\nfalse\nfalse");
};
export namespace C {
    export type Constructors = 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C {
    constructor() {
    }
    @defaultConstructor
    C() {
    }
}

export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
@Implements(C)
export class A implements C.Interface {
    constructor() {
    }
    @defaultConstructor
    A() {
    }
}

export namespace B {
    export type Constructors = C.Constructors | 'B';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
export class B extends C {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    B() {
    }
}

export namespace D {
    export type Constructors = B.Constructors | 'D';
    export type Interface = Omit<D, Constructors>;
}
@DartClass
export class D extends B {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    D() {
    }
}

export class properties {
}
