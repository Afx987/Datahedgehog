/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_binary_custom.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    properties.v_add;
    properties.v_minus;
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

export class properties {
    private static __$v_add;
    static get v_add() { 
        if (this.__$v_add===undefined) {
            this.__$v_add = op(Op.PLUS,new A(),'foo');
        }
        return this.__$v_add;
    }
    static set v_add(__$value : any)  { 
        this.__$v_add = __$value;
    }

    private static __$v_minus;
    static get v_minus() { 
        if (this.__$v_minus===undefined) {
            this.__$v_minus = op(Op.MINUS,new A(),'bar');
        }
        return this.__$v_minus;
    }
    static set v_minus(__$value : any)  { 
        this.__$v_minus = __$value;
    }

}
