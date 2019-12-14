/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_type_on_var_from_top_level.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var test1 : () => any = () =>  {
    let a = properties.x;
    a = "hi";
    a = 3;
    let b = properties.y;
    b = "hi";
    b = 4;
    let c = properties.z;
    c = "hi";
    c = 4;
};
export var main : () => any = () =>  {
    test1();
};
export class properties {
    private static __$x : number;
    static get x() : number { 
        if (this.__$x===undefined) {
            this.__$x = 0;
        }
        return this.__$x;
    }
    static set x(__$value : number)  { 
        this.__$x = __$value;
    }

    private static __$y : number;
    static get y() : number { 
        if (this.__$y===undefined) {
            this.__$y = 0;
        }
        return this.__$y;
    }
    static set y(__$value : number)  { 
        this.__$y = __$value;
    }

    private static __$z;
    static get z() { 
        if (this.__$z===undefined) {
            this.__$z = 42;
        }
        return this.__$z;
    }
    static set z(__$value : any)  { 
        this.__$z = __$value;
    }

}
