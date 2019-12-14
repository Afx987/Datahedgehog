/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/generic_methods_dart_math_min_max.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";

export var printInt : (x : number) => void = (x : number) : void =>  {
    return core.print(x);
};
export var printDouble : (x : double) => void = (x : double) : void =>  {
    return core.print(x);
};
export var myMax : (x : number,y : number) => number = (x : number,y : number) : number =>  {
    return math.max(x,y);
};
export var f : () => any = () =>  {
    printInt(math.max(1,2));
    printInt(math.min(1,2));
    printDouble(math.max(1.0,2.0));
    printDouble(math.min(1.0,2.0));
    printInt(myMax(1,2));
    printInt(myMax(1,2) as number);
    printInt(math.max(1,2.0));
    printInt(math.min(1,2.0));
    printDouble(math.max(1,2.0));
    printDouble(math.min(1,2.0));
    printInt(math.min("hi","there"));
};
export var main : () => any = () =>  {
};
export class properties {
}
