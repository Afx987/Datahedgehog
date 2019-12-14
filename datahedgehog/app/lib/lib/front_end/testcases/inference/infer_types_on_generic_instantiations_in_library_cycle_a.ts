/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_types_on_generic_instantiations_in_library_cycle_a.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./infer_types_on_generic_instantiations_in_library_cycle";

export var main : () => any = () =>  {
};
export namespace I {
    export type Constructors = 'I';
    export type Interface<E> = Omit<I<E>, Constructors>;
}
@DartClass
export class I<E> {
    @Abstract
    m(a : any,f : <E>(v : any,e : number) => string) : lib3.A<E>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    I() {
    }
}

export class properties {
}
