/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/generic_methods_downwards_inference_affects_arguments.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var f : <T>(s : core.DartList<T>) => T = <T>(s : core.DartList<T>) : T =>  {
    return null;
};
export var main : () => any = () =>  {
    let x : string = f(new core.DartList.literal('hi'));
    let y : string = f(new core.DartList.literal(42));
};
export class properties {
}
