/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/future_then_upwards_from_block.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let base : async.Future<number>;
    let f = base.then((x : any) =>  {
        return x == 0;
    });
    let g = base.then((x : any) =>  {
        return x == 0;
    });
    let b : async.Future<boolean> = f;
    b = g;
};
export class properties {
}
