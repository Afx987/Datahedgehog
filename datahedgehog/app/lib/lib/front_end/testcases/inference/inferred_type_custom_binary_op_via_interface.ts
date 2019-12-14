/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/inferred_type_custom_binary_op_via_interface.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    properties.c;
};
export namespace I {
    export type Constructors = 'I';
    export type Interface = Omit<I, Constructors>;
}
@DartClass
export class I {
    [OperatorMethods.MULTIPLY](other : C) : boolean {
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
    private static __$c : C;
    static get c() : C { 
        return this.__$c;
    }
    static set c(__$value : C)  { 
        this.__$c = __$value;
    }

    private static __$x;
    static get x() { 
        if (this.__$x===undefined) {
            this.__$x = op(Op.TIMES,properties.c,properties.c);
        }
        return this.__$x;
    }
    static set x(__$value : any)  { 
        this.__$x = __$value;
    }

}
