/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/type_promotion_stopped_by_access_in_a_closure.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let n : number = null;
    if (is(n, "number")) {
        let i = n;
        () =>  {
            n;
        }
    }
    n = null;
};
export class properties {
}
