/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_consts_transitively_2.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./infer_consts_transitively_2_a";

export var foo : () => any = () =>  {
    let i : number;
    i = properties.m1;
};
export class properties {
    private static __$m1;
    static get m1() { 
        if (this.__$m1===undefined) {
            this.__$m1 = lib3.properties.a1;
        }
        return this.__$m1;
    }
    static set m1(__$value : any)  { 
        this.__$m1 = __$value;
    }

    private static __$m2;
    static get m2() { 
        if (this.__$m2===undefined) {
            this.__$m2 = lib3.properties.a2;
        }
        return this.__$m2;
    }
    static set m2(__$value : any)  { 
        this.__$m2 = __$value;
    }

}
