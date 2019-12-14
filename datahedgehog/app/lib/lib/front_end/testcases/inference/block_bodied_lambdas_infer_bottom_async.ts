/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/block_bodied_lambdas_infer_bottom_async.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let f = () => new async.Future.fromPromise(( async () : Promise<any> =>  {
        return null;
    })());
    let y : async.Future<any> = f();
    let z : async.Future<string> = f();
    let s : string = await f();
})());
export class properties {
}
