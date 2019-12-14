/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_conditional.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    properties.a;
    properties.b;
};
export class properties {
    private static __$a;
    static get a() { 
        if (this.__$a===undefined) {
            this.__$a = 1 == 2 ? 1 : 2.0;
        }
        return this.__$a;
    }
    static set a(__$value : any)  { 
        this.__$a = __$value;
    }

    private static __$b;
    static get b() { 
        if (this.__$b===undefined) {
            this.__$b = 1 == 2 ? 1.0 : 2;
        }
        return this.__$b;
    }
    static set b(__$value : any)  { 
        this.__$b = __$value;
    }

}
