/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/closures/field.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    if (!new C<string>().v("")) throw "C<String>.v false on String";
    if (new C<string>().v(0)) throw "C<String>.v true on int";
    if (new C<string>().v(null)) throw "C<String>.v true on null";
    if (new C<number>().v("")) throw "C<int>.v true on String";
    if (!new C<number>().v(0)) throw "C<int>.v false on int";
    if (new C<number>().v(null)) throw "C<int>.v true on null";
    if ("x" != properties.x()) throw "x";
    if ("y" != new C<string>().y()) throw "y";
    if ("z" != C.z()) throw "z";
};
export namespace C {
    export type Constructors = 'C';
    export type Interface<T> = Omit<C<T>, Constructors>;
}
@DartClass
export class C<T> {
    v;

    y;

    private static __$z;
    static get z() { 
        if (this.__$z===undefined) {
            this.__$z = () =>  {
                return "z";
            };
        }
        return this.__$z;
    }
    static set z(__$value : any)  { 
        this.__$z = __$value;
    }

    constructor() {
    }
    @defaultConstructor
    C() {
        this.v = (x : any) =>  {
            return is(x, T);
        };
        this.y = () =>  {
            return "y";
        };
    }
}

export class properties {
    private static __$x;
    static get x() { 
        if (this.__$x===undefined) {
            this.__$x = () =>  {
                return "x";
            };
        }
        return this.__$x;
    }
    static set x(__$value : any)  { 
        this.__$x = __$value;
    }

}
