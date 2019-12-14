/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/generic_methods_recursive_bound_error_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var foo : <T extends I<T>>(a : core.DartList<T>) => void = <T extends I<T>>(a : core.DartList<T>) : void =>  {
    if (a.length > 1) {
        a[0].fun(a[1]);
    }
};
export var main : () => any = () =>  {
    let bar : any = foo;
    let list : core.DartList<number> = new core.DartList.literal<number>(4,2);
    lib3.expectThrows(() =>  {
        return bar(list);
    },(e : any) =>  {
        return is(e, core.TypeError);
    });
};
export namespace I {
    export type Constructors = 'I';
    export type Interface<T> = Omit<I<T>, Constructors>;
}
@DartClass
export class I<T> {
    @Abstract
    fun(x : T) : boolean{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    I() {
    }
}

export namespace C {
    export type Constructors = 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
@Implements(I)
export class C implements I.Interface<C> {
    fun(c : C) : boolean {
        return true;
    }
    constructor() {
    }
    @defaultConstructor
    C() {
    }
}

export class properties {
}
