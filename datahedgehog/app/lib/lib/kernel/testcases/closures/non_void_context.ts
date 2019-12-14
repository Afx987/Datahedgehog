/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/closures/non_void_context.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : (arguments : any) => any = (arguments : any) =>  {
    let w;
    (((x : any) =>  {
        return properties.v = w = x;
    }))(87);
    if (properties.v != 87) {
        throw `Unexpected value in v: ${properties.v}`;
    }
    if (w != 87) {
        throw `Unexpected value in w: ${w}`;
    }
    properties.v = true;
    ((() =>  {
        for(; w = properties.v; ){
            properties.v = false;
        }
    }))();
    if (properties.v != false) {
        throw `Unexpected value in v: ${properties.v}`;
    }
    if (w != false) {
        throw `Unexpected value in w: ${w}`;
    }
};
export class properties {
    private static __$v;
    static get v() { 
        return this.__$v;
    }
    static set v(__$value : any)  { 
        this.__$v = __$value;
    }

}
