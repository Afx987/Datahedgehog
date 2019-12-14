/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/closures/static_tear_off.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var f_1_1_no_default : (a : any,b? : any) => any = (a : any,b? : any) =>  {
    return op(Op.PLUS,a,b);
};
export var f_1_1_default : (a : any,b? : any) => any = (a : any,b? : any) =>  {
    b = b || 2;
    return op(Op.PLUS,a,b);
};
export var f_1_b_no_default : (a : any,_namedArguments? : {b? : any}) => any = (a : any,_namedArguments? : {b? : any}) =>  {
    let {b} = Object.assign({
    }, _namedArguments );
    return op(Op.PLUS,a,b);
};
export var f_1_b_default : (a : any,_namedArguments? : {b? : any}) => any = (a : any,_namedArguments? : {b? : any}) =>  {
    let {b} = Object.assign({
        "b" : 2}, _namedArguments );
    return op(Op.PLUS,a,b);
};
export var test_1_1 : (f : Function,hasDefault : boolean) => any = (f : Function,hasDefault : boolean) =>  {
    let result = f(40,2);
    if (42 != result) throw `Unexpected result: ${result}`;
    test_1(f,hasDefault);
};
export var test_1_b : (f : Function,hasDefault : boolean) => any = (f : Function,hasDefault : boolean) =>  {
    let result = f(40,{
        b : 2});
    if (42 != result) throw `Unexpected result: ${result}`;
    test_1(f,hasDefault);
};
export var test_1 : (f : Function,hasDefault : boolean) => any = (f : Function,hasDefault : boolean) =>  {
    let result = 0;
    let threw : boolean = true;
    try {
        result = f(40);
        threw = false;
    } catch (__error__) {

        {
            let _ = __error__;
        }
    }
    if (hasDefault) {
        if (threw) throw "Unexpected exception.";
        if (42 != result) throw `Unexpected result: ${result}.`;
    }else {
        if (!threw) throw "Expected exception missing.";
        if (0 != result) throw `Unexpected result: ${result}.`;
    }
};
export var main : (arguments : any) => any = (arguments : any) =>  {
    test_1_1(f_1_1_no_default,false);
    test_1_1(f_1_1_default,true);
    test_1_b(f_1_b_no_default,false);
    test_1_b(f_1_b_default,true);
};
export class properties {
}
