/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_assign_to_property_custom.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
};
export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    [OperatorMethods.PLUS](other : any) : number {
        return 1;
    }
    [OperatorMethods.MINUS](other : any) : double {
        return 2.0;
    }
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
    a : A;

    constructor() {
    }
    @defaultConstructor
    B() {
    }
}

export class properties {
    private static __$v_prefix_pp;
    static get v_prefix_pp() { 
        if (this.__$v_prefix_pp===undefined) {
            this.__$v_prefix_pp = (++new B().a);
        }
        return this.__$v_prefix_pp;
    }
    static set v_prefix_pp(__$value : any)  { 
        this.__$v_prefix_pp = __$value;
    }

    private static __$v_prefix_mm;
    static get v_prefix_mm() { 
        if (this.__$v_prefix_mm===undefined) {
            this.__$v_prefix_mm = (--new B().a);
        }
        return this.__$v_prefix_mm;
    }
    static set v_prefix_mm(__$value : any)  { 
        this.__$v_prefix_mm = __$value;
    }

    private static __$v_postfix_pp;
    static get v_postfix_pp() { 
        if (this.__$v_postfix_pp===undefined) {
            this.__$v_postfix_pp = (new B().a++);
        }
        return this.__$v_postfix_pp;
    }
    static set v_postfix_pp(__$value : any)  { 
        this.__$v_postfix_pp = __$value;
    }

    private static __$v_postfix_mm;
    static get v_postfix_mm() { 
        if (this.__$v_postfix_mm===undefined) {
            this.__$v_postfix_mm = (new B().a--);
        }
        return this.__$v_postfix_mm;
    }
    static set v_postfix_mm(__$value : any)  { 
        this.__$v_postfix_mm = __$value;
    }

}
