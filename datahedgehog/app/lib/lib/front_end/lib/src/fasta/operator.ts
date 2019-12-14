/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/operator.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var operatorFromString : (string : string) => Operator = (string : string) : Operator =>  {
    if (core.identical("+",string)) return Operator.add;
    if (core.identical("&",string)) return Operator.bitwiseAnd;
    if (core.identical("~",string)) return Operator.bitwiseNot;
    if (core.identical("|",string)) return Operator.bitwiseOr;
    if (core.identical("^",string)) return Operator.bitwiseXor;
    if (core.identical("/",string)) return Operator.divide;
    if (core.identical("==",string)) return Operator.equals;
    if (core.identical(">",string)) return Operator.greaterThan;
    if (core.identical(">=",string)) return Operator.greaterThanEquals;
    if (core.identical("[]",string)) return Operator.indexGet;
    if (core.identical("[]=",string)) return Operator.indexSet;
    if (core.identical("<<",string)) return Operator.leftShift;
    if (core.identical("<",string)) return Operator.lessThan;
    if (core.identical("<=",string)) return Operator.lessThanEquals;
    if (core.identical("%",string)) return Operator.modulo;
    if (core.identical("*",string)) return Operator.multiply;
    if (core.identical(">>",string)) return Operator.rightShift;
    if (core.identical("-",string)) return Operator.subtract;
    if (core.identical("~/",string)) return Operator.truncatingDivide;
    if (core.identical("unary-",string)) return Operator.unaryMinus;
    return null;
};
export var operatorToString : (operator : Operator) => string = (operator : Operator) : string =>  {
    switch (operator) {
        case Operator.add:
            return "+";
        case Operator.bitwiseAnd:
            return "&";
        case Operator.bitwiseNot:
            return "~";
        case Operator.bitwiseOr:
            return "|";
        case Operator.bitwiseXor:
            return "^";
        case Operator.divide:
            return "/";
        case Operator.equals:
            return "==";
        case Operator.greaterThan:
            return ">";
        case Operator.greaterThanEquals:
            return ">=";
        case Operator.indexGet:
            return "[]";
        case Operator.indexSet:
            return "[]=";
        case Operator.leftShift:
            return "<<";
        case Operator.lessThan:
            return "<";
        case Operator.lessThanEquals:
            return "<=";
        case Operator.modulo:
            return "%";
        case Operator.multiply:
            return "*";
        case Operator.rightShift:
            return ">>";
        case Operator.subtract:
            return "-";
        case Operator.truncatingDivide:
            return "~/";
        case Operator.unaryMinus:
            return "unary-";
    }
    return null;
};
export var operatorRequiredArgumentCount : (operator : Operator) => number = (operator : Operator) : number =>  {
    switch (operator) {
        case Operator.bitwiseNot:
        case Operator.unaryMinus:
            return 0;
        case Operator.add:
        case Operator.bitwiseAnd:
        case Operator.bitwiseOr:
        case Operator.bitwiseXor:
        case Operator.divide:
        case Operator.equals:
        case Operator.greaterThan:
        case Operator.greaterThanEquals:
        case Operator.indexGet:
        case Operator.leftShift:
        case Operator.lessThan:
        case Operator.lessThanEquals:
        case Operator.modulo:
        case Operator.multiply:
        case Operator.rightShift:
        case Operator.subtract:
        case Operator.truncatingDivide:
            return 1;
        case Operator.indexSet:
            return 2;
    }
    return -1;
};
export enum Operator {
    add,
    bitwiseAnd,
    bitwiseNot,
    bitwiseOr,
    bitwiseXor,
    divide,
    equals,
    greaterThan,
    greaterThanEquals,
    indexGet,
    indexSet,
    leftShift,
    lessThan,
    lessThanEquals,
    modulo,
    multiply,
    rightShift,
    subtract,
    truncatingDivide,
    unaryMinus
}

export class properties {
}
