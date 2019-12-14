/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/async_closure_return_type_flatten.dart */
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
    private static __$futureInt : async.Future<number>;
    static get futureInt() : async.Future<number> { 
        if (this.__$futureInt===undefined) {
            this.__$futureInt = null;
        }
        return this.__$futureInt;
    }
    static set futureInt(__$value : async.Future<number>)  { 
        this.__$futureInt = __$value;
    }

    private static __$f;
    static get f() { 
        if (this.__$f===undefined) {
            this.__$f = () =>  {
                return properties.futureInt;
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
                return properties.futureInt;
            })());
        }
        return this.__$g;
    }
    static set g(__$value : any)  { 
        this.__$g = __$value;
    }

}
