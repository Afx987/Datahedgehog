/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/future_or_subtyping.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var add : (x : number) => void = (x : number) : void =>  {
};
export var add2 : (y : number) => any = (y : number) =>  {
};
export var main : () => any = () =>  {
    let f : async.Future<number>;
    let a = f.then(add);
    let b = f.then(add2);
};
export class properties {
}
