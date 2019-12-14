/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/generic_functions_return_typedef.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    var f : <T>(x : T) => <T>(value : T) => void = <T>(x : T) : <T>(value : T) => void =>  {
        return null;
    };
    let x = f(42);
    let y = f(42);
    let takesInt : <T>(value : number) => void = x;
    takesInt = y;
};
export class properties {
}
