/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_parameter_type_setter_from_field.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
};
export namespace D {
    export type Constructors = 'D';
    export type Interface = Omit<D, Constructors>;
}
@DartClass
export class D {
    foo : number;

    constructor() {
    }
    @defaultConstructor
    D() {
    }
}

export namespace C {
    export type Constructors = D.Constructors | 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C extends D {
    set foo(x : any) {
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
}
