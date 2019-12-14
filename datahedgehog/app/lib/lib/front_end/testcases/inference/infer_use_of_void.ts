/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_use_of_void.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    properties.x;
};
export namespace B {
    export type Constructors = 'B';
    export type Interface = Omit<B, Constructors>;
}
@DartClass
export class B {
    f() : void {
    }
    constructor() {
    }
    @defaultConstructor
    B() {
    }
}

export namespace C {
    export type Constructors = B.Constructors | 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C extends B {
    f() {
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    C() {
    }
}

export class properties {
    private static __$x;
    static get x() { 
        if (this.__$x===undefined) {
            this.__$x = new C().f();
        }
        return this.__$x;
    }
    static set x(__$value : any)  { 
        this.__$x = __$value;
    }

}
