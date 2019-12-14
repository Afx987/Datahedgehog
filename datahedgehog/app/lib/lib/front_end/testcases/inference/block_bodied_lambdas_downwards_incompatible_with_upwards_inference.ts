/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/block_bodied_lambdas_downwards_incompatible_with_upwards_inference.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    var f : () => string = () : string =>  {
        return null;
    };
    let g = f;
    g = () =>  {
        return 1;
    };
};
export class properties {
}
