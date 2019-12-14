/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/constructors_infer_from_arguments_downwards_from_constructor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let x = new C<any>(new core.DartList.literal(123));
    let y : C<number> = x;
    let a = new C<any>(new core.DartList.literal(123));
    let b = new C<core.DartObject>(new core.DartList.literal(123));
};
export namespace C {
    export type Constructors = 'C';
    export type Interface<T> = Omit<C<T>, Constructors>;
}
@DartClass
export class C<T> {
    constructor(list : core.DartList<T>) {
    }
    @defaultConstructor
    C(list : core.DartList<T>) {
    }
}

export class properties {
}
