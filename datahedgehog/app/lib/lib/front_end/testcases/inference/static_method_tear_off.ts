/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/static_method_tear_off.dart */
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
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C {
    static f(s : string) : number {
        return null;
    }
    constructor() {
    }
    @defaultConstructor
    C() {
    }
}

export class properties {
    private static __$v;
    static get v() { 
        if (this.__$v===undefined) {
            this.__$v = C.f.bind(C);
        }
        return this.__$v;
    }
    static set v(__$value : any)  { 
        this.__$v = __$value;
    }

}
