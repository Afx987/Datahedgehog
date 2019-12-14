/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/inferred_type_uses_synthetic_function_type_required_param.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var f : (x : number) => number = (x : number) : number =>  {
    return null;
};
export var g : (x : number) => string = (x : number) : string =>  {
    return null;
};
export var main : () => any = () =>  {
    properties.v;
};
export class properties {
    private static __$v;
    static get v() { 
        if (this.__$v===undefined) {
            this.__$v = new core.DartList.literal(f,g);
        }
        return this.__$v;
    }
    static set v(__$value : any)  { 
        this.__$v = __$value;
    }

}
