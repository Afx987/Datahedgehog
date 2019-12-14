/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/future_then_explicit_future.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var m1 : () => any = () =>  {
    let f : async.Future<number>;
    let x = f.then((x : any) =>  {
        return new core.DartList.literal();
    });
    let y : async.Future<core.DartList<number>> = x;
};
export var m2 : () => any = () =>  {
    let f : async.Future<number>;
    let x = f.then((x : any) =>  {
        return new core.DartList.literal();
    });
    let y : async.Future<core.DartList<number>> = x;
};
export class properties {
}
