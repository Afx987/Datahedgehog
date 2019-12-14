/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/inferred_type_custom_unary_op.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    properties.c;
    properties.x;
};
export namespace C {
    export type Constructors = 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C {
    [OperatorMethods.NEGATE]() : boolean {
        return true;
    }
    constructor() {
    }
    @defaultConstructor
    C() {
    }
}

export class properties {
    private static __$c : C;
    static get c() : C { 
        if (this.__$c===undefined) {
            this.__$c = new C();
        }
        return this.__$c;
    }
    static set c(__$value : C)  { 
        this.__$c = __$value;
    }

    private static __$x;
    static get x() { 
        if (this.__$x===undefined) {
            this.__$x = op(Op.NEG,properties.c);
        }
        return this.__$x;
    }
    static set x(__$value : any)  { 
        this.__$x = __$value;
    }

}
