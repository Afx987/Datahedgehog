/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_from_variables_in_cycle_libs_when_flag_is_on.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./infer_from_variables_in_cycle_libs_when_flag_is_on_a";

export var test1 : () => any = () =>  {
    let t : number = 3;
    t = lib3.properties.x;
    t = properties.y;
};
export class properties {
    private static __$y;
    static get y() { 
        if (this.__$y===undefined) {
            this.__$y = lib3.properties.x;
        }
        return this.__$y;
    }
    static set y(__$value : any)  { 
        this.__$y = __$value;
    }

}
