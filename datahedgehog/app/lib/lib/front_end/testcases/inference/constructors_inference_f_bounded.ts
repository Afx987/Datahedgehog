/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/constructors_inference_f_bounded.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let x = new Pair._();
};
export namespace Clonable {
    export type Constructors = 'Clonable';
    export type Interface<T> = Omit<Clonable<T>, Constructors>;
}
@DartClass
export class Clonable<T> {
    constructor() {
    }
    @defaultConstructor
    Clonable() {
    }
}

export namespace Pair {
    export type Constructors = 'Pair' | '_';
    export type Interface<T extends Clonable<T>,U extends Clonable<U>> = Omit<Pair<T extends Clonable<T>,U extends Clonable<U>>, Constructors>;
}
@DartClass
export class Pair<T extends Clonable<T>,U extends Clonable<U>> {
    t : T;

    u : U;

    constructor(t : T,u : U) {
    }
    @defaultConstructor
    Pair(t : T,u : U) {
        this.t = t;
        this.u = u;
    }
    @namedConstructor
    _() {
    }
    static _ : new<T extends Clonable<T>,U extends Clonable<U>>() => Pair<T,U>;

    get reversed() : Pair<U,T> {
        return new Pair<any,any>(this.u,this.t);
    }
}

export class properties {
}
