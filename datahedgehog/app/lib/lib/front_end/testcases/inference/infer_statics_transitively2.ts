/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_statics_transitively2.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var foo : () => any = () =>  {
    let i : number;
    i = properties.y1;
    i = properties.y2;
};
export var main : () => any = () =>  {
    foo();
};
export class properties {
    private static __$x1;
    static get x1() { 
        if (this.__$x1===undefined) {
            this.__$x1 = 1;
        }
        return this.__$x1;
    }
    static set x1(__$value : any)  { 
        this.__$x1 = __$value;
    }

    private static __$x2;
    static get x2() { 
        if (this.__$x2===undefined) {
            this.__$x2 = 1;
        }
        return this.__$x2;
    }
    static set x2(__$value : any)  { 
        this.__$x2 = __$value;
    }

    private static __$y1;
    static get y1() { 
        if (this.__$y1===undefined) {
            this.__$y1 = properties.x1;
        }
        return this.__$y1;
    }
    static set y1(__$value : any)  { 
        this.__$y1 = __$value;
    }

    private static __$y2;
    static get y2() { 
        if (this.__$y2===undefined) {
            this.__$y2 = properties.x2;
        }
        return this.__$y2;
    }
    static set y2(__$value : any)  { 
        this.__$y2 = __$value;
    }

}
