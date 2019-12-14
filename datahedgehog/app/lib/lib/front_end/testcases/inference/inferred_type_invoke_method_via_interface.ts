/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/inferred_type_invoke_method_via_interface.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var f : () => C = () : C =>  {
    return null;
};
export var main : () => any = () =>  {
};
export namespace I {
    export type Constructors = 'I';
    export type Interface = Omit<I, Constructors>;
}
@DartClass
export class I {
    g() : boolean {
        return true;
    }
    constructor() {
    }
    @defaultConstructor
    I() {
    }
}

export namespace C {
    export type Constructors = 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
@Implements(I)
export class C implements I.Interface {
    constructor() {
    }
    @defaultConstructor
    C() {
    }
}

export class properties {
    private static __$x;
    static get x() { 
        if (this.__$x===undefined) {
            this.__$x = f().g();
        }
        return this.__$x;
    }
    static set x(__$value : any)  { 
        this.__$x = __$value;
    }

}
