/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_statics_transitively3.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./infer_statics_transitively3_a";

export var foo : () => any = () =>  {
    let i : number;
    i = properties.t1;
    i = properties.t2;
    i = properties.t3;
    i = properties.t4;
};
export class properties {
    private static __$t1;
    static get t1() { 
        if (this.__$t1===undefined) {
            this.__$t1 = 1;
        }
        return this.__$t1;
    }
    static set t1(__$value : any)  { 
        this.__$t1 = __$value;
    }

    private static __$t2;
    static get t2() { 
        if (this.__$t2===undefined) {
            this.__$t2 = properties.t1;
        }
        return this.__$t2;
    }
    static set t2(__$value : any)  { 
        this.__$t2 = __$value;
    }

    private static __$t3;
    static get t3() { 
        if (this.__$t3===undefined) {
            this.__$t3 = lib3.properties.a1;
        }
        return this.__$t3;
    }
    static set t3(__$value : any)  { 
        this.__$t3 = __$value;
    }

    private static __$t4;
    static get t4() { 
        if (this.__$t4===undefined) {
            this.__$t4 = lib3.properties.a2;
        }
        return this.__$t4;
    }
    static set t4(__$value : any)  { 
        this.__$t4 = __$value;
    }

    private static __$t5;
    static get t5() { 
        if (this.__$t5===undefined) {
            this.__$t5 = lib3.A.a3;
        }
        return this.__$t5;
    }
    static set t5(__$value : any)  { 
        this.__$t5 = __$value;
    }

    private static __$t6;
    static get t6() { 
        if (this.__$t6===undefined) {
            this.__$t6 = lib3.A.a3;
        }
        return this.__$t6;
    }
    static set t6(__$value : any)  { 
        this.__$t6 = __$value;
    }

}
