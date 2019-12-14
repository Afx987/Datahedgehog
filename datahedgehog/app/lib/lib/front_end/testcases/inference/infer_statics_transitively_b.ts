/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_statics_transitively_b.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    properties.b1;
};
export class properties {
    private static __$b1;
    static get b1() { 
        if (this.__$b1===undefined) {
            this.__$b1 = 2;
        }
        return this.__$b1;
    }
    static set b1(__$value : any)  { 
        this.__$b1 = __$value;
    }

}
