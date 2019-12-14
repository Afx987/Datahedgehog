/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/method_call_with_type_arguments_top_level_function.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var f : <T>() => D<T> = <T>() : D<T> =>  {
    return null;
};
export var main : () => any = () =>  {
    properties.g;
};
export namespace D {
    export type Constructors = 'D';
    export type Interface<T> = Omit<D<T>, Constructors>;
}
@DartClass
export class D<T> {
    constructor() {
    }
    @defaultConstructor
    D() {
    }
}

export class properties {
    private static __$g;
    static get g() { 
        if (this.__$g===undefined) {
            this.__$g = f();
        }
        return this.__$g;
    }
    static set g(__$value : any)  { 
        this.__$g = __$value;
    }

}
