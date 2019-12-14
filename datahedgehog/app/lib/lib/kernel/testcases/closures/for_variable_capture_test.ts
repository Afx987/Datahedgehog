/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/closures/for_variable_capture_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let closure;
    for(let i = 0, fn = () =>  {
        return i;
    }; i < 3; i++){
        i += 1;
        closure = fn;
    }
    let x = closure();
    if (x != 1) {
        throw `Expected 1, but got ${x}.`;
    }
};
export class properties {
}
