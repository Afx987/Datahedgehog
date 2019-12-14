/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/coerce_bottom_and_null_types.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var f : () => any = () =>  {
    let a = 0;
    let b = null;
    let c = throw 'foo';
    let d = () =>  {
        return 0;
    };
    let e = () =>  {
        return null;
    };
    let f = () =>  {
        return throw 'foo';
    };
    let g = () =>  {
        return 0;
    };
    let h = () =>  {
        return null;
    };
    let i = () =>  {
        return (throw 'foo');
    };
};
export var main : () => any = () =>  {
};
export class properties {
}
