/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/closures/capture_this.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let c : C = new C();
    c.x = 41;
    (c.m())(42);
    if (42 != c.x) throw `Unexpected value in c.x: ${c.x}`;
    let result = ((c.f())())();
    if (42 != result) throw `Unexpected value from c.f()()(): ${result}`;
};
export namespace C {
    export type Constructors = 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C {
    x;

    m() {
        return (v : any) =>  {
            return this.x = v;
        };
    }
    f() {
        return () =>  {
            return () =>  {
                return this.x;
            };
        };
    }
    constructor() {
    }
    @defaultConstructor
    C() {
    }
}

export class properties {
}
