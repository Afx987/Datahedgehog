/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/type_promotion_ignores_local_functions.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    var f : () => number = () : number =>  {
        return 0;
    };
    if (is(f, () => number)) {
        f;
    }
};
export class properties {
}
