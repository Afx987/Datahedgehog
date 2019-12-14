/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/inferred_type_cascade.dart */
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
    a : number;

    b : core.DartList<number>;

    m() : void {
    }
    constructor() {
    }
    @defaultConstructor
    A() {
    }
}

export class properties {
    private static __$v;
    static get v() { 
        if (this.__$v===undefined) {
            this.__$v = ((_) : A =>  {
                {
                    _.a = 1;
                    _.b.add(2);
                    _.m();
                    return _;
                }
            })(new A());
        }
        return this.__$v;
    }
    static set v(__$value : any)  { 
        this.__$v = __$value;
    }

}
