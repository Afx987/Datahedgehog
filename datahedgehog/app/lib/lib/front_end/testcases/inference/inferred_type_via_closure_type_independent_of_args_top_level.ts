/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/inferred_type_via_closure_type_independent_of_args_top_level.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    properties.f;
};
export class properties {
    private static __$f;
    static get f() { 
        if (this.__$f===undefined) {
            this.__$f = (b : boolean) =>  {
                return 1;
            };
        }
        return this.__$f;
    }
    static set f(__$value : any)  { 
        this.__$f = __$value;
    }

}
