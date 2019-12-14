/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/typevariable3_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let c : C<any> = new C<C<any>>().foo(new C<any>());
};
export namespace C {
    export type Constructors = 'C';
    export type Interface<T> = Omit<C<T>, Constructors>;
}
@DartClass
export class C<T> {
    foo(t : T) : T {
        let temp : T = t;
        return temp;
    }
    constructor() {
    }
    @defaultConstructor
    C() {
    }
}

export class properties {
}
