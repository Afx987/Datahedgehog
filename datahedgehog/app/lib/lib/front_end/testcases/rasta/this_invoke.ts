/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/this_invoke.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    core.print(new C().m(42));
};
export namespace C {
    export type Constructors = 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C {
    m(x : any) {
        return (this)(x);
    }
    call(x : any) {
        return 42;
    }
    constructor() {
    }
    @defaultConstructor
    C() {
    }
}

export class properties {
}
