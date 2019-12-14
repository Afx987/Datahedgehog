/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/unsafe_block_closure_inference_function_call_implicit_type_param_via_expr.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let v = ((f))(() =>  {
        return 1;
    });
};
export var f : <T>(g : <T>() => T) => core.DartList<T> = <T>(g : <T>() => T) : core.DartList<T> =>  {
    return new core.DartList.literal<T>(g());
};
export class properties {
}
