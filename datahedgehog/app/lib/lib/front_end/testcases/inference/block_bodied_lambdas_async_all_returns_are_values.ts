/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/block_bodied_lambdas_async_all_returns_are_values.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";

export var main : () => any = () =>  {
    let f = () => new async.Future.fromPromise(( async () : Promise<any> =>  {
        if (new math.Random().nextBool()) {
            return 1;
        }else {
            return 2.0;
        }
    })());
    let g : async.Future<number> = f();
    let h : async.Future<number> = f();
};
export class properties {
}
