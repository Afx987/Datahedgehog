/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_statics_transitively_2_a.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./infer_statics_transitively";
import * as lib4 from "./infer_statics_transitively_b";

export var main : () => any = () =>  {
    properties.a1;
};
export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    private static __$a2;
    static get a2() { 
        if (this.__$a2===undefined) {
            this.__$a2 = lib4.properties.b1;
        }
        return this.__$a2;
    }
    static set a2(__$value : any)  { 
        this.__$a2 = __$value;
    }

    constructor() {
    }
    @defaultConstructor
    A() {
    }
}

export class properties {
    private static __$a1;
    static get a1() { 
        if (this.__$a1===undefined) {
            this.__$a1 = lib3.properties.m2;
        }
        return this.__$a1;
    }
    static set a1(__$value : any)  { 
        this.__$a1 = __$value;
    }

}
