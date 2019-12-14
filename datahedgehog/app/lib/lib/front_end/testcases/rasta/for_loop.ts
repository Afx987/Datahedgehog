/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/for_loop.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let c : number = new core.DartDateTime.now().millisecondsSinceEpoch;
    for(let i : number = 0; i < 100; i++){
        core.print(i++);
    }
    for(let i : number = 0; i < 100; c < 42 ? throw "fisk" : i++){
        core.print(i++);
    }
};
export class properties {
}
