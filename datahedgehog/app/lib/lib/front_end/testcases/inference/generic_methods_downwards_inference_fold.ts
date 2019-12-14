/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/generic_methods_downwards_inference_fold.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => void = () : void =>  {
    let o : core.DartList<number>;
    let y : number = o.fold(0,(x : any,y : any) =>  {
        return op(Op.PLUS,x,y);
    });
    let z = o.fold(0,(x : any,y : any) =>  {
        return op(Op.PLUS,x,y);
    });
    y = z;
};
export var functionExpressionInvocation : () => void = () : void =>  {
    let o : core.DartList<number>;
    let y : number = ((o.fold.bind(o)))(0,(x : any,y : any) =>  {
        return op(Op.PLUS,x,y);
    });
    let z = ((o.fold.bind(o)))(0,(x : any,y : any) =>  {
        return op(Op.PLUS,x,y);
    });
    y = z;
};
export class properties {
}
