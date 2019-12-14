/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/unsafe_block_closure_inference_constructor_call_explicit_dynamic_param.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    properties.v;
};
export namespace C {
    export type Constructors = 'C';
    export type Interface<T> = Omit<C<T>, Constructors>;
}
@DartClass
export class C<T> {
    constructor(x : <T>() => T) {
    }
    @defaultConstructor
    C(x : <T>() => T) {
    }
}

export class properties {
    private static __$v;
    static get v() { 
        if (this.__$v===undefined) {
            this.__$v = new C<any>(() =>  {
                return 1;
            });
        }
        return this.__$v;
    }
    static set v(__$value : any)  { 
        this.__$v = __$value;
    }

}
