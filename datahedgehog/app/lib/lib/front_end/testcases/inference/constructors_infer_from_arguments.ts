/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/constructors_infer_from_arguments.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let x = new C<any>(42);
    let y : number;
    let c_int : C<number> = new C<any>(y);
    let c_num : C<number> = new C<any>(123);
    let c_num2 : C<number> = ((_) : C<any> =>  {
        {
            _.t = 1.0;
            return _;
        }
    })((new C<any>(456)));
    let c_dynamic = new C<any>(42);
    x.t = 'hello';
};
export namespace C {
    export type Constructors = 'C';
    export type Interface<T> = Omit<C<T>, Constructors>;
}
@DartClass
export class C<T> {
    t : T;

    constructor(t : T) {
    }
    @defaultConstructor
    C(t : T) {
        this.t = t;
    }
}

export class properties {
}
