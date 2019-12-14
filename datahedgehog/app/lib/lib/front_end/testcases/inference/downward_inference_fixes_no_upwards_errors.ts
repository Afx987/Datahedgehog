/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/downward_inference_fixes_no_upwards_errors.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";

export var main : () => any = () =>  {
    let x : number;
    let y : any;
    let a : number = math.max(x,y);
    let b : core.DartObject = math.max(x,y);
    let c : any = math.max(x,y);
    let d = math.max(x,y);
};
export class properties {
}
