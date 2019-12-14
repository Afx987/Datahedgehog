/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/generic_methods_dynamic_dependent_type_error_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var main : () => any = () =>  {
    let c : C = new C();
    let obj : any = c;
    lib3.expectThrows(() =>  {
        return obj.bar(new core.DartList.literal<B>(new B()));
    },(e : any) =>  {
        return is(e, core.TypeError);
    });
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

export namespace B {
    export type Constructors = 'B';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
export class B {
    constructor() {
    }
    @defaultConstructor
    B() {
    }
}

export namespace C {
    export type Constructors = 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C {
    bar<T>(t : core.DartIterable<T>) : core.DartList<T> {
        return new core.DartList.literal<T>(t.first);
    }
    constructor() {
    }
    @defaultConstructor
    C() {
    }
}

export class properties {
}
