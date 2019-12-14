/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/downwards_inference_on_map_literals.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var foo : (m1? : core.DartMap<number,string>,m2? : core.DartMap<number,string>) => void = (m1? : core.DartMap<number,string>,m2? : core.DartMap<number,string>) : void =>  {
    m1 = m1 || new core.DartMap.literal([
        [1,"hello"]]);
    m2 = m2 || new core.DartMap.literal([
        ["hello","world"]]);
};
export var main : () => void = () : void =>  {
    {
        let l0 : core.DartMap<number,string> = new core.DartMap.literal([
        ]);
        let l1 : core.DartMap<number,string> = new core.DartMap.literal([
            [3,"hello"]]);
        let l2 : core.DartMap<number,string> = new core.DartMap.literal([
            ["hello","hello"]]);
        let l3 : core.DartMap<number,string> = new core.DartMap.literal([
            [3,3]]);
        let l4 : core.DartMap<number,string> = new core.DartMap.literal([
            [3,"hello"],
            ["hello",3]]);
    }
    {
        let l0 : core.DartMap<any,any> = new core.DartMap.literal([
        ]);
        let l1 : core.DartMap<any,any> = new core.DartMap.literal([
            [3,"hello"]]);
        let l2 : core.DartMap<any,any> = new core.DartMap.literal([
            ["hello","hello"]]);
        let l3 : core.DartMap<any,any> = new core.DartMap.literal([
            [3,3]]);
        let l4 : core.DartMap<any,any> = new core.DartMap.literal([
            [3,"hello"],
            ["hello",3]]);
    }
    {
        let l0 : core.DartMap<any,string> = new core.DartMap.literal([
        ]);
        let l1 : core.DartMap<any,string> = new core.DartMap.literal([
            [3,"hello"]]);
        let l2 : core.DartMap<any,string> = new core.DartMap.literal([
            ["hello","hello"]]);
        let l3 : core.DartMap<any,string> = new core.DartMap.literal([
            [3,3]]);
        let l4 : core.DartMap<any,string> = new core.DartMap.literal([
            [3,"hello"],
            ["hello",3]]);
    }
    {
        let l0 : core.DartMap<number,any> = new core.DartMap.literal([
        ]);
        let l1 : core.DartMap<number,any> = new core.DartMap.literal([
            [3,"hello"]]);
        let l2 : core.DartMap<number,any> = new core.DartMap.literal([
            ["hello","hello"]]);
        let l3 : core.DartMap<number,any> = new core.DartMap.literal([
            [3,3]]);
        let l4 : core.DartMap<number,any> = new core.DartMap.literal([
            [3,"hello"],
            ["hello",3]]);
    }
    {
        let l0 : core.DartMap<number,string> = new core.DartMap.literal([
        ]);
        let l1 : core.DartMap<number,string> = new core.DartMap.literal([
            [3,"hello"]]);
        let l3 : core.DartMap<number,string> = new core.DartMap.literal([
            [3,3]]);
    }
    {
        let l0 : core.DartMap<number,string> = new core.DartMap.literal([
        ]);
        let l1 : core.DartMap<number,string> = new core.DartMap.literal([
            [3,"hello"]]);
        let l2 : core.DartMap<number,string> = new core.DartMap.literal([
            ["hello","hello"]]);
        let l3 : core.DartMap<number,string> = new core.DartMap.literal([
            [3,3]]);
        let l4 : core.DartMap<number,string> = new core.DartMap.literal([
            [3,"hello"],
            ["hello",3]]);
    }
};
export class properties {
}
