/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/lambda_return_type.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let i : number = 1;
    let o : core.DartObject = 1;
    let a : () => number = () =>  {
        return i;
    };
    let b : () => number = () =>  {
        return o;
    };
    let c : () => number = () =>  {
        return i;
    };
    let d : () => number = () =>  {
        return o;
    };
};
export class properties {
}
