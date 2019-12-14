/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_assign_to_property.dart */
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
    f : number;

    constructor() {
    }
    @defaultConstructor
    A() {
    }
}

export class properties {
    private static __$v_assign;
    static get v_assign() { 
        if (this.__$v_assign===undefined) {
            this.__$v_assign = (new A().f = 1);
        }
        return this.__$v_assign;
    }
    static set v_assign(__$value : any)  { 
        this.__$v_assign = __$value;
    }

    private static __$v_plus;
    static get v_plus() { 
        if (this.__$v_plus===undefined) {
            this.__$v_plus = (new A().f += 1);
        }
        return this.__$v_plus;
    }
    static set v_plus(__$value : any)  { 
        this.__$v_plus = __$value;
    }

    private static __$v_minus;
    static get v_minus() { 
        if (this.__$v_minus===undefined) {
            this.__$v_minus = (new A().f -= 1);
        }
        return this.__$v_minus;
    }
    static set v_minus(__$value : any)  { 
        this.__$v_minus = __$value;
    }

    private static __$v_multiply;
    static get v_multiply() { 
        if (this.__$v_multiply===undefined) {
            this.__$v_multiply = (new A().f *= 1);
        }
        return this.__$v_multiply;
    }
    static set v_multiply(__$value : any)  { 
        this.__$v_multiply = __$value;
    }

    private static __$v_prefix_pp;
    static get v_prefix_pp() { 
        if (this.__$v_prefix_pp===undefined) {
            this.__$v_prefix_pp = (++new A().f);
        }
        return this.__$v_prefix_pp;
    }
    static set v_prefix_pp(__$value : any)  { 
        this.__$v_prefix_pp = __$value;
    }

    private static __$v_prefix_mm;
    static get v_prefix_mm() { 
        if (this.__$v_prefix_mm===undefined) {
            this.__$v_prefix_mm = (--new A().f);
        }
        return this.__$v_prefix_mm;
    }
    static set v_prefix_mm(__$value : any)  { 
        this.__$v_prefix_mm = __$value;
    }

    private static __$v_postfix_pp;
    static get v_postfix_pp() { 
        if (this.__$v_postfix_pp===undefined) {
            this.__$v_postfix_pp = (new A().f++);
        }
        return this.__$v_postfix_pp;
    }
    static set v_postfix_pp(__$value : any)  { 
        this.__$v_postfix_pp = __$value;
    }

    private static __$v_postfix_mm;
    static get v_postfix_mm() { 
        if (this.__$v_postfix_mm===undefined) {
            this.__$v_postfix_mm = (new A().f--);
        }
        return this.__$v_postfix_mm;
    }
    static set v_postfix_mm(__$value : any)  { 
        this.__$v_postfix_mm = __$value;
    }

}
