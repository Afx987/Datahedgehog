/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/function_in_field.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    core.print(properties.x());
};
export class properties {
    private static __$x;
    static get x() { 
        if (this.__$x===undefined) {
            this.__$x = () =>  {
                let y = 42;
                return y;
            };
        }
        return this.__$x;
    }
    static set x(__$value : any)  { 
        this.__$x = __$value;
    }

}
