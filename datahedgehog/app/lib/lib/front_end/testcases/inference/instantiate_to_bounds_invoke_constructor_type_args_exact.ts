/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/instantiate_to_bounds_invoke_constructor_type_args_exact.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    properties.x;
};
export namespace C {
    export type Constructors = 'C';
    export type Interface<T extends number> = Omit<C<T extends number>, Constructors>;
}
@DartClass
export class C<T extends number> {
    constructor() {
    }
    @defaultConstructor
    C() {
    }
}

export class properties {
    private static __$x;
    static get x() { 
        if (this.__$x===undefined) {
            this.__$x = new C<number>();
        }
        return this.__$x;
    }
    static set x(__$value : any)  { 
        this.__$x = __$value;
    }

}
