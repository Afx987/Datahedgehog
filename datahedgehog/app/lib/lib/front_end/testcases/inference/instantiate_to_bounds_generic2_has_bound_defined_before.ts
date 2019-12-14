/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/instantiate_to_bounds_generic2_has_bound_defined_before.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    properties.v;
};
export namespace A {
    export type Constructors = 'A';
    export type Interface<T extends number> = Omit<A<T extends number>, Constructors>;
}
@DartClass
export class A<T extends number> {
    constructor() {
    }
    @defaultConstructor
    A() {
    }
}

export namespace B {
    export type Constructors = 'B';
    export type Interface<T extends A<any>> = Omit<B<T extends A<any>>, Constructors>;
}
@DartClass
export class B<T extends A<any>> {
    constructor() {
    }
    @defaultConstructor
    B() {
    }
}

export class properties {
    private static __$v : B<any>;
    static get v() : B<any> { 
        if (this.__$v===undefined) {
            this.__$v = null;
        }
        return this.__$v;
    }
    static set v(__$value : B<any>)  { 
        this.__$v = __$value;
    }

}
