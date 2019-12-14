/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/interpreter/static_invocation_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => void = () : void =>  {
    a();
    b(1,9);
    core.print(b(1,9));
    let retD = d();
    core.print(c(37));
    core.print(retD);
};
export var a : () => void = () : void =>  {
};
export var b : (n : number,m : number) => void = (n : number,m : number) : void =>  {
    core.print(n);
    core.print(m);
    core.print(n + m);
};
export var c : (n : number) => string = (n : number) : string =>  {
    core.print(`c:${n}`);
    return `d:${d()}`;
};
export var d : () => number = () : number =>  {
    a();
    return 37;
};
export class properties {
}
