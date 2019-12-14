/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/field_refers_to_static_getter.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
};
export namespace C {
    export type Constructors = 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C {
    x;

    static get _x() : number {
        return null;
    }
    constructor() {
    }
    @defaultConstructor
    C() {
        this.x = C._x;
    }
}

export class properties {
}
