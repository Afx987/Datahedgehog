/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/operators.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : (arguments : any) => any = (arguments : any) =>  {
    let a = new Operators();
    let b = new Operators();
    op(Op.PLUS,a,b);
    op(Op.BITAND,a,b);
    op(Op.BITNEG,a);
    op(Op.BITOR,a,b);
    op(Op.XOR,a,b);
    op(Op.DIVIDE,a,b);
    op(Op.EQUALS,a,b);
    op(Op.GT,a,b);
    op(Op.GEQ,a,b);
    op(Op.INDEX,a,0);
    op(Op.INDEX_ASSIGN,a,0,b);
    op(Op.SHIFTLEFT,a,b);
    op(Op.LT,a,b);
    op(Op.LEQ,a,b);
    op(Op.TIMES,a,b);
    op(Op.MODULE,a,b);
    op(Op.SHIFTRIGHT,a,b);
    op(Op.MINUS,a,b);
    op(Op.QUOTIENT,a,b);
    op(Op.NEG,a);
};
export namespace Operators {
    export type Constructors = 'Operators';
    export type Interface = Omit<Operators, Constructors>;
}
@DartClass
export class Operators {
    [OperatorMethods.PLUS](other : any) {
        return null;
    }
    [OperatorMethods.BINARY_AND](other : any) {
        return null;
    }
    [OperatorMethods.COMPLEMENT]() {
        return null;
    }
    [OperatorMethods.BINARY_OR](other : any) {
        return null;
    }
    [OperatorMethods.XOR](other : any) {
        return null;
    }
    [OperatorMethods.DIVIDE](other : any) {
        return null;
    }
    [OperatorMethods.EQUALS](other : any) {
        return null;
    }
    [OperatorMethods.GT](other : any) {
        return null;
    }
    [OperatorMethods.GEQ](other : any) {
        return null;
    }
    [OperatorMethods.INDEX](index : any) {
        return null;
    }
    [OperatorMethods.INDEX_EQ](index : any,value : any) : void {
    }
    [OperatorMethods.SHIFTLEFT](other : any) {
        return null;
    }
    [OperatorMethods.LT](other : any) {
        return null;
    }
    [OperatorMethods.LEQ](other : any) {
        return null;
    }
    [OperatorMethods.MULTIPLY](other : any) {
        return null;
    }
    [OperatorMethods.MODULE](other : any) {
        return null;
    }
    [OperatorMethods.SHIFTRIGHT](other : any) {
        return null;
    }
    [OperatorMethods.MINUS](other : any) {
        return null;
    }
    [OperatorMethods.QUOTIENT](other : any) {
        return null;
    }
    [OperatorMethods.NEGATE]() {
        return null;
    }
    constructor() {
    }
    @defaultConstructor
    Operators() {
    }
}

export class properties {
}
