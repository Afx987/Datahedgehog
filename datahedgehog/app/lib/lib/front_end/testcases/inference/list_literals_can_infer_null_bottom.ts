/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/list_literals_can_infer_null_bottom.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var test1 : () => any = () =>  {
    let x = new core.DartList.literal(null);
    x.add(42);
};
export var main : () => any = () =>  {
    test1();
};
export class properties {
}
