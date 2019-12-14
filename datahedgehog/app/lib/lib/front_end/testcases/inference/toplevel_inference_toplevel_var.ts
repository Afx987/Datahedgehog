/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/toplevel_inference_toplevel_var.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let j = properties.i;
};
export class properties {
    private static __$i;
    static get i() { 
        if (this.__$i===undefined) {
            this.__$i = 0;
        }
        return this.__$i;
    }
    static set i(__$value : any)  { 
        this.__$i = __$value;
    }

}
