/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/typevariable2_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
};
export namespace C {
    export type Constructors = 'C';
    export type Interface<T> = Omit<C<T>, Constructors>;
}
@DartClass
export class C<T> {
    test(o : any) : boolean {
        return is(o, T);
    }
    get t() : core.Type {
        return T;
    }
    constructor() {
    }
    @defaultConstructor
    C() {
    }
}

export class properties {
}
