/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/constant_get_and_invoke.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    properties.c;
    properties.c();
};
export class properties {
    private static __$c;
    static get c() { 
        if (this.__$c===undefined) {
            this.__$c = 1;
        }
        return this.__$c;
    }
    static set c(__$value : any)  { 
        this.__$c = __$value;
    }

}
