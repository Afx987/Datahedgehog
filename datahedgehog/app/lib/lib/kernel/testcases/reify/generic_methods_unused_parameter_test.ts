/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/reify/generic_methods_unused_parameter_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_base";

export var fun : () => number = () : number =>  {
};
export var funReq : (x : number) => number = (x : number) : number =>  {
    return x;
};
export var funOpt : (y? : number) => number = (y? : number) : number =>  {
    return (y || 42);
};
export var funReqOpt : (x : number,y? : number) => number = (x : number,y? : number) : number =>  {
    return x;
};
export var funNam : (_namedArguments? : {p? : number}) => number = (_namedArguments? : {p? : number}) : number =>  {
    let {p} = Object.assign({
    }, _namedArguments );
    return (p || 42);
};
export var funReqNam : (x : number,_namedArguments? : {p? : number}) => number = (x : number,_namedArguments? : {p? : number}) : number =>  {
    let {p} = Object.assign({
    }, _namedArguments );
    return x;
};
export var funTyp : <T>() => number = <T>() : number =>  {
};
export var funTypReq : <T>(x : number) => number = <T>(x : number) : number =>  {
    return x;
};
export var funTypOpt : <T>(y? : number) => number = <T>(y? : number) : number =>  {
    return (y || 42);
};
export var funTypReqOpt : <T>(x : number,y? : number) => number = <T>(x : number,y? : number) : number =>  {
    return x;
};
export var funTypNam : <T>(_namedArguments? : {p? : number}) => number = <T>(_namedArguments? : {p? : number}) : number =>  {
    let {p} = Object.assign({
    }, _namedArguments );
    return (p || 42);
};
export var funTypReqNam : <T>(x : number,_namedArguments? : {p? : number}) => number = <T>(x : number,_namedArguments? : {p? : number}) : number =>  {
    let {p} = Object.assign({
    }, _namedArguments );
    return x;
};
export var main : () => any = () =>  {
    let varFun : () => number = funTyp;
    let varFunReq : ( : number) => number = funTypReq;
    let varFunOpt : ( : number?) => number = funTypOpt;
    let varFunReqOpt : ( : number?) => number = funTypReqOpt;
    let varFunNam : (_namedArguments : {p? : number?}) => number = funTypNam;
    let varFunReqNam : ( : number,_namedArguments : {p? : number?}) => number = funTypReqNam;
    lib3.expectTrue(is(fun, () => number));
    lib3.expectTrue(isNot(fun, () => number));
    lib3.expectTrue(isNot(funTyp, () => number));
    lib3.expectTrue(is(funTyp, () => number));
    lib3.expectTrue(is(varFun, () => number));
    lib3.expectTrue(isNot(varFun, () => number));
    lib3.expectTrue(is(funReq, ( : number) => number));
    lib3.expectTrue(isNot(funReq, ( : number) => number));
    lib3.expectTrue(isNot(funTypReq, ( : number) => number));
    lib3.expectTrue(is(funTypReq, ( : number) => number));
    lib3.expectTrue(is(varFunReq, ( : number) => number));
    lib3.expectTrue(isNot(varFunReq, ( : number) => number));
    lib3.expectTrue(is(funOpt, ( : number?) => number));
    lib3.expectTrue(isNot(funOpt, ( : number?) => number));
    lib3.expectTrue(isNot(funTypOpt, ( : number?) => number));
    lib3.expectTrue(is(funTypOpt, ( : number?) => number));
    lib3.expectTrue(is(varFunOpt, ( : number?) => number));
    lib3.expectTrue(isNot(varFunOpt, ( : number?) => number));
    lib3.expectTrue(is(funReqOpt, ( : number?) => number));
    lib3.expectTrue(isNot(funReqOpt, ( : number?) => number));
    lib3.expectTrue(isNot(funTypReqOpt, ( : number?) => number));
    lib3.expectTrue(is(funTypReqOpt, ( : number?) => number));
    lib3.expectTrue(is(varFunReqOpt, ( : number?) => number));
    lib3.expectTrue(isNot(varFunReqOpt, ( : number?) => number));
    lib3.expectTrue(is(funNam, (_namedArguments : {p? : number?}) => number));
    lib3.expectTrue(isNot(funNam, (_namedArguments : {p? : number?}) => number));
    lib3.expectTrue(isNot(funTypNam, (_namedArguments : {p? : number?}) => number));
    lib3.expectTrue(is(funTypNam, (_namedArguments : {p? : number?}) => number));
    lib3.expectTrue(is(varFunNam, (_namedArguments : {p? : number?}) => number));
    lib3.expectTrue(isNot(varFunNam, (_namedArguments : {p? : number?}) => number));
    lib3.expectTrue(is(funReqNam, ( : number,_namedArguments : {p? : number?}) => number));
    lib3.expectTrue(isNot(funReqNam, ( : number,_namedArguments : {p? : number?}) => number));
    lib3.expectTrue(isNot(funTypReqNam, ( : number,_namedArguments : {p? : number?}) => number));
    lib3.expectTrue(is(funTypReqNam, ( : number,_namedArguments : {p? : number?}) => number));
    lib3.expectTrue(is(varFunReqNam, ( : number,_namedArguments : {p? : number?}) => number));
    lib3.expectTrue(isNot(varFunReqNam, ( : number,_namedArguments : {p? : number?}) => number));
};
export class properties {
}
