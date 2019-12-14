/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/future_union_downwards_generic_method_with_generic_return.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var id : <T>(x : T) => T = <T>(x : T) : T =>  {
    return x;
};
export var main : () => any = () => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let f : async.Future<string>;
    let s : string = await id(f);
})());
export class properties {
}
