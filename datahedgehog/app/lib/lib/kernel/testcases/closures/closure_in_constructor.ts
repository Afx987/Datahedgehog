/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/closures/closure_in_constructor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    new C1('hest').x();
    new C2('naebdyr').x();
};
export namespace C1 {
    export type Constructors = 'C1';
    export type Interface = Omit<C1, Constructors>;
}
@DartClass
export class C1 {
    x;

    constructor(y : any) {
    }
    @defaultConstructor
    C1(y : any) {
        this.x = (() =>  {
            return core.print(`Hello ${y}`);
        });
    }
}

export namespace C2 {
    export type Constructors = 'C2';
    export type Interface = Omit<C2, Constructors>;
}
@DartClass
export class C2 {
    x;

    constructor(y : any) {
    }
    @defaultConstructor
    C2(y : any) {
        this.x = () =>  {
            return core.print(`Hello ${y}`);
        };
    }
}

export class properties {
}
