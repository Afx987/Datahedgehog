/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/conditional_lub.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let z = properties.b ? properties.x : properties.y;
};
export class properties {
    private static __$b : boolean;
    static get b() : boolean { 
        if (this.__$b===undefined) {
            this.__$b = true;
        }
        return this.__$b;
    }
    static set b(__$value : boolean)  { 
        this.__$b = __$value;
    }

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

    private static __$y : double;
    static get y() : double { 
        if (this.__$y===undefined) {
            this.__$y = 0.0;
        }
        return this.__$y;
    }
    static set y(__$value : double)  { 
        this.__$y = __$value;
    }

    private static __$z;
    static get z() { 
        if (this.__$z===undefined) {
            this.__$z = properties.b ? properties.x : properties.y;
        }
        return this.__$z;
    }
    static set z(__$value : any)  { 
        this.__$z = __$value;
    }

}
