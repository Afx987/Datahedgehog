/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/list_literal_typed.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let a = new core.DartList.literal<number>();
    let b = new core.DartList.literal<double>(1.0,2.0,3.0);
    let c = new core.DartList.literal<core.DartList<number>>();
    let d = new core.DartList.literal<any>(1,2.0,false);
};
export class properties {
    private static __$a;
    static get a() { 
        if (this.__$a===undefined) {
            this.__$a = new core.DartList.literal<number>();
        }
        return this.__$a;
    }
    static set a(__$value : any)  { 
        this.__$a = __$value;
    }

    private static __$b;
    static get b() { 
        if (this.__$b===undefined) {
            this.__$b = new core.DartList.literal<double>(1.0,2.0,3.0);
        }
        return this.__$b;
    }
    static set b(__$value : any)  { 
        this.__$b = __$value;
    }

    private static __$c;
    static get c() { 
        if (this.__$c===undefined) {
            this.__$c = new core.DartList.literal<core.DartList<number>>();
        }
        return this.__$c;
    }
    static set c(__$value : any)  { 
        this.__$c = __$value;
    }

    private static __$d;
    static get d() { 
        if (this.__$d===undefined) {
            this.__$d = new core.DartList.literal<any>(1,2.0,false);
        }
        return this.__$d;
    }
    static set d(__$value : any)  { 
        this.__$d = __$value;
    }

}
