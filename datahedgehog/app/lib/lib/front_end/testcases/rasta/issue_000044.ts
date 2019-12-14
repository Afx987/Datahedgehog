/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/issue_000044.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var b : (c : any) => any = (c : any) : any =>  {
};
export var main : () => any = () =>  {
    let c : C = null;
    core.print(new C.constant());
    core.print(new C.missingFactoryKeyword());
    core.print(new C.good());
    core.print(new C.constant().notEvenAConstructor(null));
};
export namespace C {
    export type Constructors = 'constant' | 'missingFactoryKeyword';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C {
    @namedConstructor
    constant() {
    }
    static constant : new() => C;

    @namedConstructor
    missingFactoryKeyword() {
    }
    static missingFactoryKeyword : new() => C;

    @namedFactory
    static $good() : C {
        return new C.constant();
    }
    static good : new() => C;

    notEvenAConstructor(a : any) : C {
    }
    h;

}

export class properties {
    private static __$d;
    static get d() { 
        return this.__$d;
    }
    static set d(__$value : any)  { 
        this.__$d = __$value;
    }

}
