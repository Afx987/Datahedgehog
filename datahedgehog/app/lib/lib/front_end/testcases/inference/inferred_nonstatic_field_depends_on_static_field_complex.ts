/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/inferred_nonstatic_field_depends_on_static_field_complex.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace C {
    export type Constructors = 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C {
    private static __$x;
    static get x() { 
        if (this.__$x===undefined) {
            this.__$x = 'x';
        }
        return this.__$x;
    }
    static set x(__$value : any)  { 
        this.__$x = __$value;
    }

    y;

    constructor() {
    }
    @defaultConstructor
    C() {
        this.y = new core.DartMap.literal([
            ['a',new core.DartMap.literal([
                ['b','c']])],
            ['d',new core.DartMap.literal([
                ['e',C.x]])]]);
    }
}

export class properties {
}
