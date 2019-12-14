/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/shaker/implicit_constructors.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./lib/lib";

export namespace D {
    export type Constructors = lib3.F.Constructors | 'x';
    export type Interface = Omit<D, Constructors>;
}
@DartClass
export class D extends lib3.F {
    @namedConstructor
    x() {
    }
    static x : new() => D;

}

export class properties {
}
