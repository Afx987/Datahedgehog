/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/inferred_type_custom_index_op.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let c : C = new C();
    let x = op(Op.INDEX,c,0);
};
export namespace C {
    export type Constructors = 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C {
    [OperatorMethods.INDEX](index : number) : boolean {
        return true;
    }
    constructor() {
    }
    @defaultConstructor
    C() {
    }
}

export class properties {
}
