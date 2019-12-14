/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/refine_binary_expression_type_type_parameter_t_double.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
};
export namespace C {
    export type Constructors = 'C';
    export type Interface<T extends number> = Omit<C<T extends number>, Constructors>;
}
@DartClass
export class C<T extends number> {
    a : T;

    op(b : double) : void {
        let r1 : double = op(Op.PLUS,this.a,b);
        let r2 : double = op(Op.MINUS,this.a,b);
        let r3 : double = op(Op.TIMES,this.a,b);
        let r4 : double = op(Op.DIVIDE,this.a,b);
    }
    constructor() {
    }
    @defaultConstructor
    C() {
    }
}

export class properties {
}
