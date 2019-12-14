/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/cascades.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let a = new A();
    var f : (x : any) => any = (x : any) =>  {
        return x;
    };
    ((_) : A =>  {
        {
            (_.add(f))('WHAT');
            return _;
        }
    })(a);
};
export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    add(x : any) {
        return x;
    }
    constructor() {
    }
    @defaultConstructor
    A() {
    }
}

export class properties {
}
