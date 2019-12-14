/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/function_type_is_check.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var test : (f : any) => any = (f : any) =>  {
    if (is(f, ( : core.DartStackTrace) => void)) return 1;
    if (is(f, ( : core.DartObject) => void)) return 10;
    if (is(f, () => void)) return 100;
};
export var main : () => any = () =>  {
    Expect.equals(111,op(Op.PLUS,op(Op.PLUS,test(() =>  {
        return null;
    }),test((o : core.DartObject) =>  {
        return null;
    })),test((o : core.DartObject,t : core.DartStackTrace) =>  {
        return null;
    })));
};
export class properties {
}
