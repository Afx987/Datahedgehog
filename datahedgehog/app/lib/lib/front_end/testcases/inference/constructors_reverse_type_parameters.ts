/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/constructors_reverse_type_parameters.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Pair {
    export type Constructors = 'Pair';
    export type Interface<T,U> = Omit<Pair<T,U>, Constructors>;
}
@DartClass
export class Pair<T,U> {
    t : T;

    u : U;

    constructor(t : T,u : U) {
    }
    @defaultConstructor
    Pair(t : T,u : U) {
        this.t = t;
        this.u = u;
    }
    get reversed() : Pair<U,T> {
        return new Pair<any,any>(this.u,this.t);
    }
}

export class properties {
}
