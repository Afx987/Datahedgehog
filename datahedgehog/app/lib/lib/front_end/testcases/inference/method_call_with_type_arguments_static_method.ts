/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/method_call_with_type_arguments_static_method.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace C {
    export type Constructors = 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C {
    static f<T>() : D<T> {
        return null;
    }
    constructor() {
    }
    @defaultConstructor
    C() {
    }
}

export namespace D {
    export type Constructors = 'D';
    export type Interface<T> = Omit<D<T>, Constructors>;
}
@DartClass
export class D<T> {
    constructor() {
    }
    @defaultConstructor
    D() {
    }
}

export class properties {
    private static __$f;
    static get f() { 
        if (this.__$f===undefined) {
            this.__$f = C.f();
        }
        return this.__$f;
    }
    static set f(__$value : any)  { 
        this.__$f = __$value;
    }

}
