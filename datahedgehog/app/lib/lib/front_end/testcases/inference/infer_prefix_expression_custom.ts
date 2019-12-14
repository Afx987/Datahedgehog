/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_prefix_expression_custom.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    properties.a;
    properties.v_complement;
    properties.v_negate;
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
    [OperatorMethods.COMPLEMENT]() : number {
        return 1;
    }
    [OperatorMethods.NEGATE]() : double {
        return 2.0;
    }
}

export class properties {
    private static __$a;
    static get a() { 
        if (this.__$a===undefined) {
            this.__$a = new A();
        }
        return this.__$a;
    }
    static set a(__$value : any)  { 
        this.__$a = __$value;
    }

    private static __$v_complement;
    static get v_complement() { 
        if (this.__$v_complement===undefined) {
            this.__$v_complement = op(Op.BITNEG,properties.a);
        }
        return this.__$v_complement;
    }
    static set v_complement(__$value : any)  { 
        this.__$v_complement = __$value;
    }

    private static __$v_negate;
    static get v_negate() { 
        if (this.__$v_negate===undefined) {
            this.__$v_negate = op(Op.NEG,properties.a);
        }
        return this.__$v_negate;
    }
    static set v_negate(__$value : any)  { 
        this.__$v_negate = __$value;
    }

}
