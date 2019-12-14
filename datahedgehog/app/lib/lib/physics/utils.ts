/** Library asset:datahedgehog_monitor/lib/lib/physics/utils.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var nearEqual : (a : double,b : double,epsilon : double) => boolean = (a : double,b : double,epsilon : double) : boolean =>  {
    /* TODO (AssertStatementImpl) : assert (epsilon != null); */;
    /* TODO (AssertStatementImpl) : assert (epsilon >= 0.0); */;
    if (a == null || b == null) return a == b;
    return (a > (b - epsilon)) && (a < (b + epsilon)) || a == b;
};
export var nearZero : (a : double,epsilon : double) => boolean = (a : double,epsilon : double) : boolean =>  {
    return nearEqual(a,0.0,epsilon);
};
export class properties {
}
