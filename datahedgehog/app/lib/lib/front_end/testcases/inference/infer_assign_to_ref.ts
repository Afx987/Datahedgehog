/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_assign_to_ref.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    properties.a;
    properties.b;
    properties.c;
    properties.d;
};
export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    f : number;

    constructor() {
    }
    @defaultConstructor
    A() {
    }
}

export class properties {
    private static __$a : A;
    static get a() : A { 
        if (this.__$a===undefined) {
            this.__$a = new A();
        }
        return this.__$a;
    }
    static set a(__$value : A)  { 
        this.__$a = __$value;
    }

    private static __$b;
    static get b() { 
        if (this.__$b===undefined) {
            this.__$b = (properties.a.f = 1);
        }
        return this.__$b;
    }
    static set b(__$value : any)  { 
        this.__$b = __$value;
    }

    private static __$c;
    static get c() { 
        if (this.__$c===undefined) {
            this.__$c = 0;
        }
        return this.__$c;
    }
    static set c(__$value : any)  { 
        this.__$c = __$value;
    }

    private static __$d;
    static get d() { 
        if (this.__$d===undefined) {
            this.__$d = (properties.c = 1);
        }
        return this.__$d;
    }
    static set d(__$value : any)  { 
        this.__$d = __$value;
    }

}
