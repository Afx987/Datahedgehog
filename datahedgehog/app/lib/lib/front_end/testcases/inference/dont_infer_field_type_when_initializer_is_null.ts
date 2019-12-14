/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/dont_infer_field_type_when_initializer_is_null.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    properties.x;
    properties.y;
};
export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    private static __$x;
    static get x() { 
        if (this.__$x===undefined) {
            this.__$x = null;
        }
        return this.__$x;
    }
    static set x(__$value : any)  { 
        this.__$x = __$value;
    }

    private static __$y;
    static get y() { 
        if (this.__$y===undefined) {
            this.__$y = 3;
        }
        return this.__$y;
    }
    static set y(__$value : any)  { 
        this.__$y = __$value;
    }

    x2;

    y2;

    constructor() {
    }
    @defaultConstructor
    A() {
        this.x2 = null;
        this.y2 = 3;
    }
}

export class properties {
    private static __$x;
    static get x() { 
        if (this.__$x===undefined) {
            this.__$x = null;
        }
        return this.__$x;
    }
    static set x(__$value : any)  { 
        this.__$x = __$value;
    }

    private static __$y;
    static get y() { 
        if (this.__$y===undefined) {
            this.__$y = 3;
        }
        return this.__$y;
    }
    static set y(__$value : any)  { 
        this.__$y = __$value;
    }

}
