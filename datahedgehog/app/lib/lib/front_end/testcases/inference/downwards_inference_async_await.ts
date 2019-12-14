/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/downwards_inference_async_await.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var test : () => async.Future<any> = () => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let d : any;
    let l0 : core.DartList<number> = await new core.DartList.literal(d);
    let l1 : core.DartList<number> = await new async.Future.value(new core.DartList.literal(d));
})());
export class properties {
}
