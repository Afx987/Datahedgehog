/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/generic_methods_do_not_infer_invalid_override_of_generic_method.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let y : number = new D().m(42);
    core.print(y);
};
export namespace C {
    export type Constructors = 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C {
    m<T>(x : T) : T {
        return x;
    }
    constructor() {
    }
    @defaultConstructor
    C() {
    }
}

export namespace D {
    export type Constructors = C.Constructors | 'D';
    export type Interface = Omit<D, Constructors>;
}
@DartClass
export class D extends C {
    m(x : any) {
        return x;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    D() {
    }
}

export class properties {
}
