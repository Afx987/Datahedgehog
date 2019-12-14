/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/infer_statics_with_method_invocations.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./infer_statics_with_method_invocations_a";

export var main : () => any = () =>  {
};
export namespace T {
    export type Constructors = 'T';
    export type Interface = Omit<T, Constructors>;
}
@DartClass
export class T {
    private static __$foo : T;
    static get foo() : T { 
        if (this.__$foo===undefined) {
            this.__$foo = T.m1(T.m2(lib3.m3('','')));
        }
        return this.__$foo;
    }
    static set foo(__$value : T)  { 
        this.__$foo = __$value;
    }

    static m1(m : string) : T {
        return null;
    }
    static m2(e : any) : string {
        return '';
    }
    constructor() {
    }
    @defaultConstructor
    T() {
    }
}

export class properties {
}
