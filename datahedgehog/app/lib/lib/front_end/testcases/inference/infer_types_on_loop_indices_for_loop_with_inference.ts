/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_types_on_loop_indices_for_loop_with_inference.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var test : () => any = () =>  {
    for(let i = 0; i < 10; i++){
        let j : number = i + 1;
    }
};
export class properties {
}
