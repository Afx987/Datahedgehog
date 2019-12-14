/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/downwards_inference_on_generic_constructor_arguments_empty_list.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => void = () : void =>  {
    new F3<any>(new core.DartList.literal());
    new F4<any>({
        a : new core.DartList.literal()});
};
export namespace F3 {
    export type Constructors = 'F3';
    export type Interface<T> = Omit<F3<T>, Constructors>;
}
@DartClass
export class F3<T> {
    constructor(a : core.DartIterable<core.DartIterable<T>>) {
    }
    @defaultConstructor
    F3(a : core.DartIterable<core.DartIterable<T>>) {
    }
}

export namespace F4 {
    export type Constructors = 'F4';
    export type Interface<T> = Omit<F4<T>, Constructors>;
}
@DartClass
export class F4<T> {
    constructor(_namedArguments? : {a? : core.DartIterable<core.DartIterable<T>>}) {
    }
    @defaultConstructor
    F4(_namedArguments? : {a? : core.DartIterable<core.DartIterable<T>>}) {
        let {a} = Object.assign({
        }, _namedArguments );
    }
}

export class properties {
}
