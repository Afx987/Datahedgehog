/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/closures_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    test("closures",() =>  {
        return run(new core.DartList.literal(),new core.DartList.literal("closures"),"pkg/kernel/test/closures/testing.json");
    },{
        timeout : new bare.createInstance(any,null,new core.DartDuration({
            minutes : 5}))});
};
export class properties {
}
