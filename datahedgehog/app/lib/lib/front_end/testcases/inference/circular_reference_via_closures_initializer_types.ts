/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/circular_reference_via_closures_initializer_types.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
};
export class properties {
    private static __$x;
    static get x() { 
        if (this.__$x===undefined) {
            this.__$x = () =>  {
                return properties.y;
            };
        }
        return this.__$x;
    }
    static set x(__$value : any)  { 
        this.__$x = __$value;
    }

    private static __$y;
    static get y() { 
        if (this.__$y===undefined) {
            this.__$y = () =>  {
                return properties.x;
            };
        }
        return this.__$y;
    }
    static set y(__$value : any)  { 
        this.__$y = __$value;
    }

}
