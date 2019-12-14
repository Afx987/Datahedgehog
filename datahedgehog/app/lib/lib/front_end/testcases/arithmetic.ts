/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/arithmetic.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var foo : (x : number,y : number) => number = (x : number,y : number) : number =>  {
    let z = x + y;
    return z << 4;
};
export var loop : (xs : core.DartList<any>) => void = (xs : core.DartList<any>) : void =>  {
    let _ : number = xs.length;
    for(let i : number = 0; i < xs.length; i++){
    }
};
export var main : () => any = () =>  {
    foo(4,5);
    foo(6,7);
    loop(new core.DartList.literal('dfg'));
};
export class properties {
}
