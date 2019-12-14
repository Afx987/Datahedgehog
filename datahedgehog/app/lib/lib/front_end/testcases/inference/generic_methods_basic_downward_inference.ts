/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/generic_methods_basic_downward_inference.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var f : <S,T>(s : S) => T = <S,T>(s : S) : T =>  {
    return null;
};
export var main : () => any = () =>  {
    let x : string = f(42);
    let y : string = ((f))(42);
};
export class properties {
}
