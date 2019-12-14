/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/future_then_downwards_method_target.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let f : async.Future<number>;
    let b : async.Future<core.DartList<number>> = f.then((x : any) =>  {
        return new core.DartList.literal();
    }).whenComplete(() =>  {
    });
    b = f.then((x : any) =>  {
        return new core.DartList.literal();
    });
};
export class properties {
}
