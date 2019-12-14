/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/downwards_inference_inside_top_level.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace A {
    export type Constructors = 'A';
    export type Interface = Omit<A, Constructors>;
}
@DartClass
export class A {
    b : B<number>;

    constructor() {
    }
    @defaultConstructor
    A() {
    }
}

export namespace B {
    export type Constructors = 'B';
    export type Interface<T> = Omit<B<T>, Constructors>;
}
@DartClass
export class B<T> {
    constructor(x : T) {
    }
    @defaultConstructor
    B(x : T) {
    }
}

export class properties {
    private static __$t1;
    static get t1() { 
        if (this.__$t1===undefined) {
            this.__$t1 = ((_) : A =>  {
                {
                    _.b = new B<any>(1);
                    return _;
                }
            })(new A());
        }
        return this.__$t1;
    }
    static set t1(__$value : any)  { 
        this.__$t1 = __$value;
    }

    private static __$t2;
    static get t2() { 
        if (this.__$t2===undefined) {
            this.__$t2 = new core.DartList.literal<B<number>>(new B<any>(2));
        }
        return this.__$t2;
    }
    static set t2(__$value : any)  { 
        this.__$t2 = __$value;
    }

    private static __$t3;
    static get t3() { 
        if (this.__$t3===undefined) {
            this.__$t3 = new core.DartList.literal(new B<any>(3));
        }
        return this.__$t3;
    }
    static set t3(__$value : any)  { 
        this.__$t3 = __$value;
    }

}
