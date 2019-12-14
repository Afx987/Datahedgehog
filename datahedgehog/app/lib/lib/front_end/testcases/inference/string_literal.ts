/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/string_literal.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let x = 1;
    let a = 'aaa';
    let b = `b ${x} bb`;
    let c = `c ${x} cc` + 'ccc';
};
export class properties {
    private static __$x;
    static get x() { 
        if (this.__$x===undefined) {
            this.__$x = 1;
        }
        return this.__$x;
    }
    static set x(__$value : any)  { 
        this.__$x = __$value;
    }

    private static __$a;
    static get a() { 
        if (this.__$a===undefined) {
            this.__$a = 'aaa';
        }
        return this.__$a;
    }
    static set a(__$value : any)  { 
        this.__$a = __$value;
    }

    private static __$b;
    static get b() { 
        if (this.__$b===undefined) {
            this.__$b = `b ${properties.x} bb`;
        }
        return this.__$b;
    }
    static set b(__$value : any)  { 
        this.__$b = __$value;
    }

    private static __$c;
    static get c() { 
        if (this.__$c===undefined) {
            this.__$c = `c ${properties.x} cc` + 'ccc';
        }
        return this.__$c;
    }
    static set c(__$value : any)  { 
        this.__$c = __$value;
    }

}
