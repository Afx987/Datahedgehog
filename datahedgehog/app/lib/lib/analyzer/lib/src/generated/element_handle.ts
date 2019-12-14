/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/element_handle.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace WeakReference {
    export type Constructors = 'WeakReference';
    export type Interface<T> = Omit<WeakReference<T>, Constructors>;
}
@DartClass
export class WeakReference<T> {
    value : T;

    constructor(value : T) {
    }
    @defaultConstructor
    WeakReference(value : T) {
        this.value = value;
    }
    get() : T {
        return this.value;
    }
}

export class properties {
}
