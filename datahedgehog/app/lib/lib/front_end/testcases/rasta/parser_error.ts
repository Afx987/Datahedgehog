/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/parser_error.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var test : (a : any,_namedArguments? : {b? : any,c? : any}) => number = (a : any,_namedArguments? : {b? : any,c? : any}) : number =>  {
    let {b,c} = Object.assign({
    }, _namedArguments );
    if (b) return b;
    return op(Op.PLUS,op(Op.PLUS,a,b),c);
};
export var main : () => any = () =>  {
    Expect.equals(6,test(1,{
        b : 2,c : 3}));
};
export class properties {
}
