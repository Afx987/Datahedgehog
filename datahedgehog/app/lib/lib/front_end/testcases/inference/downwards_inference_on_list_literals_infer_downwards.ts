/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/downwards_inference_on_list_literals_infer_downwards.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var foo : (list1? : core.DartList<string>,list2? : core.DartList<string>) => void = (list1? : core.DartList<string>,list2? : core.DartList<string>) : void =>  {
    list1 = list1 || new core.DartList.literal();
    list2 = list2 || new core.DartList.literal(42);
};
export var main : () => void = () : void =>  {
    {
        let l0 : core.DartList<number> = new core.DartList.literal();
        let l1 : core.DartList<number> = new core.DartList.literal(3);
        let l2 : core.DartList<number> = new core.DartList.literal("hello");
        let l3 : core.DartList<number> = new core.DartList.literal("hello",3);
    }
    {
        let l0 : core.DartList<any> = new core.DartList.literal();
        let l1 : core.DartList<any> = new core.DartList.literal(3);
        let l2 : core.DartList<any> = new core.DartList.literal("hello");
        let l3 : core.DartList<any> = new core.DartList.literal("hello",3);
    }
    {
        let l0 : core.DartList<number> = new core.DartList.literal<number>();
        let l1 : core.DartList<number> = new core.DartList.literal<number>(3);
        let l2 : core.DartList<number> = new core.DartList.literal<number>("hello");
        let l3 : core.DartList<number> = new core.DartList.literal<number>("hello",3);
    }
    {
        let i0 : core.DartIterable<number> = new core.DartList.literal();
        let i1 : core.DartIterable<number> = new core.DartList.literal(3);
        let i2 : core.DartIterable<number> = new core.DartList.literal("hello");
        let i3 : core.DartIterable<number> = new core.DartList.literal("hello",3);
    }
    {
        let c0 : core.DartList<number> = new core.DartList.literal();
        let c1 : core.DartList<number> = new core.DartList.literal(3);
        let c2 : core.DartList<number> = new core.DartList.literal("hello");
        let c3 : core.DartList<number> = new core.DartList.literal("hello",3);
    }
};
export class properties {
}
