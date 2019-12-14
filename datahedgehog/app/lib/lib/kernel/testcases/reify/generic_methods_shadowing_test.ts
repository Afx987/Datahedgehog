/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/generic_methods_shadowing_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var foo : <T,S>(t : T,s : S) => boolean = <T,S>(t : T,s : S) : boolean =>  {
    var bar : <T>(t : T) => boolean = <T>(t : T) : boolean =>  {
        return is(t, T) && is(t, S);
    };
    return bar(s);
};
export var main : () => any = () =>  {
    lib3.expectTrue(foo(new X(),new Y()));
};
export namespace X {
    export type Constructors = 'X';
    export type Interface = Omit<X, Constructors>;
}
@DartClass
export class X {
    constructor() {
    }
    @defaultConstructor
    X() {
    }
}

export namespace Y {
    export type Constructors = 'Y';
    export type Interface = Omit<Y, Constructors>;
}
@DartClass
export class Y {
    constructor() {
    }
    @defaultConstructor
    Y() {
    }
}

export class properties {
}
