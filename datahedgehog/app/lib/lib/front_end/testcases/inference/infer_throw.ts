/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_throw.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
};
export class properties {
    private static __$t;
    static get t() { 
        if (this.__$t===undefined) {
            this.__$t = true;
        }
        return this.__$t;
    }
    static set t(__$value : any)  { 
        this.__$t = __$value;
    }

    private static __$a;
    static get a() { 
        if (this.__$a===undefined) {
            this.__$a = (throw 0);
        }
        return this.__$a;
    }
    static set a(__$value : any)  { 
        this.__$a = __$value;
    }

    private static __$b;
    static get b() { 
        if (this.__$b===undefined) {
            this.__$b = (throw 0) ? 1 : 2;
        }
        return this.__$b;
    }
    static set b(__$value : any)  { 
        this.__$b = __$value;
    }

    private static __$c;
    static get c() { 
        if (this.__$c===undefined) {
            this.__$c = properties.t ? (throw 1) : 2;
        }
        return this.__$c;
    }
    static set c(__$value : any)  { 
        this.__$c = __$value;
    }

    private static __$d;
    static get d() { 
        if (this.__$d===undefined) {
            this.__$d = properties.t ? 1 : (throw 2);
        }
        return this.__$d;
    }
    static set d(__$value : any)  { 
        this.__$d = __$value;
    }

}
