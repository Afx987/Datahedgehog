/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/async_closure_return_type_future.dart */
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
            this.__$f = () => new async.Future.fromPromise(( async () : Promise<any> =>  {
                return 0;
            })());
        }
        return this.__$f;
    }
    static set f(__$value : any)  { 
        this.__$f = __$value;
    }

}
