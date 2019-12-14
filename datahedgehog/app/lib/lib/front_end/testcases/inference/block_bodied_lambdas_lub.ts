/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/block_bodied_lambdas_lub.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";

export var test2 : () => any = () =>  {
    let o : core.DartList<number>;
    let y = o.map((x : any) =>  {
        if (new math.Random().nextBool()) {
            return new core.DartNumber(x).toInt() + 1;
        }else {
            return new core.DartNumber(x).toDouble();
        }
    });
    let w : core.DartIterable<number> = y;
    let z : core.DartIterable<number> = y;
};
export var main : () => any = () =>  {
};
export class properties {
}
