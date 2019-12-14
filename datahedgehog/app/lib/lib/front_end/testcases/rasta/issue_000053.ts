/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/issue_000053.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    new C().test();
};
export namespace C {
    export type Constructors = 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C {
    [OperatorMethods.EQUALS](other : any) {
        return throw 'x';
    }
    test() {
        op(Op.EQUALS,super,null);
    }
    constructor() {
    }
    @defaultConstructor
    C() {
    }
}

export class properties {
}
