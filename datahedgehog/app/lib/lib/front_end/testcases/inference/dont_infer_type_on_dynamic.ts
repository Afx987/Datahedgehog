/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/dont_infer_type_on_dynamic.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var test : () => any = () =>  {
    let x : any = 3;
    x = "hi";
};
export var main : () => any = () =>  {
    test();
};
export class properties {
}
