/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/block_bodied_lambdas_downwards_incompatible_with_upwards_inference_top_level.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var f : () => string = () : string =>  {
    return null;
};
export var main : () => any = () =>  {
    f;
};
export class properties {
    private static __$g;
    static get g() { 
        if (this.__$g===undefined) {
            this.__$g = f;
        }
        return this.__$g;
    }
    static set g(__$value : any)  { 
        this.__$g = __$value;
    }

}
