/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/downwards_inference_initializing_formal_default_formal.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var f : (l? : core.DartList<number>) => void = (l? : core.DartList<number>) : void =>  {
    l = l || new core.DartList.literal(1);
};
export namespace Foo {
    export type Constructors = 'Foo' | 'named';
    export type Interface = Omit<Foo, Constructors>;
}
@DartClass
export class Foo {
    x : core.DartList<number>;

    constructor(x? : core.DartList<number>) {
    }
    @defaultConstructor
    Foo(x? : core.DartList<number>) {
        x = x || new core.DartList.literal(1);
        this.x = x;
    }
    @namedConstructor
    named(x? : core.DartList<number>) {
        x = x || new core.DartList.literal(1);
    }
    static named : new(x : core.DartList<number>) => Foo;

}

export class properties {
    private static __$g : <S,T>(x : core.DartList<number>?) => string;
    static get g() : <S,T>(x : core.DartList<number>?) => string { 
        if (this.__$g===undefined) {
            this.__$g = (llll? : any) =>  {
                llll = llll || new core.DartList.literal(1);
                return "hello";
            };
        }
        return this.__$g;
    }
    static set g(__$value : <S,T>(x : core.DartList<number>?) => string)  { 
        this.__$g = __$value;
    }

}
