/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/default_values.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var topLevel : (a? : any) => any = (a? : any) =>  {
    a = a || 42;
    return a;
};
export var main : () => any = () =>  {
    core.print(topLevel());
};
export class properties {
}
