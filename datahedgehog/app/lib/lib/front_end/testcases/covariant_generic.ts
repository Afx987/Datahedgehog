/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/covariant_generic.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let fooInt : Foo<number> = new Foo<number>(1,(x : number) =>  {
    });
    fooInt.method(3);
    fooInt.setter = 3;
    fooInt.withCallback((x : number) =>  {
    });
    fooInt.withCallback((x : number) =>  {
    });
    fooInt.mutableField = 3;
    fooInt.mutableCallbackField = (x : number) =>  {
    };
    let fooNum : Foo<number> = fooInt;
    fooNum.method(3);
    fooNum.method(2.5);
    fooNum.setter = 3;
    fooNum.setter = 2.5;
    fooNum.withCallback((x : number) =>  {
    });
    fooNum.mutableField = 3;
    fooNum.mutableField = 2.5;
    fooNum.mutableCallbackField(3);
    fooNum.mutableCallbackField(2.5);
    fooNum.mutableCallbackField = (x : number) =>  {
    };
};
export namespace Foo {
    export type Constructors = 'Foo';
    export type Interface<T> = Omit<Foo<T>, Constructors>;
}
@DartClass
export class Foo<T> {
    finalField : T;

    callbackField : <T>(x : T) => void;

    mutableField : T;

    mutableCallbackField : <T>(x : T) => void;

    constructor(finalField : T,callbackField : <T>(x : T) => void) {
    }
    @defaultConstructor
    Foo(finalField : T,callbackField : <T>(x : T) => void) {
        this.finalField = finalField;
        this.callbackField = callbackField;
    }
    method(x : T) : void {
    }
    set setter(x : T) {
    }
    withCallback(callback : <T>(x : T) => void) : void {
        callback(this.finalField);
    }
}

export class properties {
}
