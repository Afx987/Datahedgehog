/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/closures/closures.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var foo : () => any = () =>  {
    core.print(properties.f(0));
};
export var main : (arguments : any) => any = (arguments : any) =>  {
    properties.f = (x : any) =>  {
        return op(Op.INDEX,arguments,x);
    };
    foo();
};
export class properties {
    private static __$f;
    static get f() { 
        return this.__$f;
    }
    static set f(__$value : any)  { 
        this.__$f = __$value;
    }

}
