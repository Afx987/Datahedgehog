/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/fibonacci.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var fibonacci : (n : number) => number = (n : number) : number =>  {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};
export var main : () => any = () =>  {
    for(let i : number = 0; i < 20; i++){
        core.print(fibonacci(i));
    }
};
export class properties {
}
