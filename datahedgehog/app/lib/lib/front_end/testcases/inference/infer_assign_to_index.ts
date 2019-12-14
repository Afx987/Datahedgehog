/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_assign_to_index.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
};
export class properties {
    private static __$a : core.DartList<double>;
    static get a() : core.DartList<double> { 
        if (this.__$a===undefined) {
            this.__$a = new core.DartList.literal<double>();
        }
        return this.__$a;
    }
    static set a(__$value : core.DartList<double>)  { 
        this.__$a = __$value;
    }

    private static __$b;
    static get b() { 
        if (this.__$b===undefined) {
            this.__$b = (properties.a[0] = 1.0);
        }
        return this.__$b;
    }
    static set b(__$value : any)  { 
        this.__$b = __$value;
    }

}
