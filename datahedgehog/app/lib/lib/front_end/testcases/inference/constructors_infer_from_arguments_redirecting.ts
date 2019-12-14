/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/constructors_infer_from_arguments_redirecting.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let x = new C.named(new core.DartList.literal<number>(42));
};
export namespace C {
    export type Constructors = 'C' | 'named';
    export type Interface<T> = Omit<C<T>, Constructors>;
}
@DartClass
export class C<T> {
    t : T;

    constructor(t : T) {
    }
    @defaultConstructor
    C(t : T) {
        this.t = t;
    }
    @namedConstructor
    named(t : core.DartList<T>) {
        this.C(t[0]);
    }
    static named : new<T>(t : core.DartList<T>) => C<T>;

}

export class properties {
}
