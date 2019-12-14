/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/async_closure_return_type_future_or.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    properties.f;
    properties.g;
};
export class properties {
    private static __$futureOrInt : any;
    static get futureOrInt() : any { 
        if (this.__$futureOrInt===undefined) {
            this.__$futureOrInt = null;
        }
        return this.__$futureOrInt;
    }
    static set futureOrInt(__$value : any)  { 
        this.__$futureOrInt = __$value;
    }

    private static __$f;
    static get f() { 
        if (this.__$f===undefined) {
            this.__$f = () =>  {
                return properties.futureOrInt;
            };
        }
        return this.__$f;
    }
    static set f(__$value : any)  { 
        this.__$f = __$value;
    }

    private static __$g;
    static get g() { 
        if (this.__$g===undefined) {
            this.__$g = () => new async.Future.fromPromise(( async () : Promise<any> =>  {
                return properties.futureOrInt;
            })());
        }
        return this.__$g;
    }
    static set g(__$value : any)  { 
        this.__$g = __$value;
    }

}
