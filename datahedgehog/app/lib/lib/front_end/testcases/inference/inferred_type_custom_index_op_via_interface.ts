/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/inferred_type_custom_index_op_via_interface.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var f : () => any = () =>  {
    let c : C;
    let x = op(Op.INDEX,c,0);
};
export var main : () => any = () =>  {
};
export namespace I {
    export type Constructors = 'I';
    export type Interface = Omit<I, Constructors>;
}
@DartClass
export class I {
    [OperatorMethods.INDEX](index : number) : boolean {
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
}
