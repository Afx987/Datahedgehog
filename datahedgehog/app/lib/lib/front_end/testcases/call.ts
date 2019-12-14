/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/call.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let closure = (x : any) =>  {
        return x;
    };
    let int1 = closure(1);
    let int2 = closure.call(1);
    let int3 = closure.call.call(1);
    let int4 = closure.call.call.call(1);
    let callable = new Callable();
    let string1 = callable(1);
    let string2 = callable.call(1);
    let string3 = callable.call.bind(callable).call(1);
    let string4 = callable.call.bind(callable).call.call(1);
    let callableGetter = new CallableGetter();
    let string5 = callableGetter(1);
    let string6 = callableGetter.call(1);
    let string7 = callableGetter.call.call(1);
    let string8 = callableGetter.call.call.call(1);
    let nothing1 = closure();
    let nothing2 = closure.call();
    let nothing3 = closure.call.call();
    let nothing4 = closure.call.call.call();
    let nothing5 = callable();
    let nothing6 = callable.call();
    let nothing7 = callable.call.bind(callable).call();
    let nothing8 = callable.call.bind(callable).call.call();
    let nothing9 = callableGetter();
    let nothing10 = callableGetter.call();
    let nothing11 = callableGetter.call.call();
    let nothing12 = callableGetter.call.call.call();
};
export namespace Callable {
    export type Constructors = 'Callable';
    export type Interface = Omit<Callable, Constructors>;
}
@DartClass
export class Callable {
    call(x : any) {
        return "string";
    }
    constructor() {
    }
    @defaultConstructor
    Callable() {
    }
}

export namespace CallableGetter {
    export type Constructors = 'CallableGetter';
    export type Interface = Omit<CallableGetter, Constructors>;
}
@DartClass
export class CallableGetter {
    get call() {
        return new Callable();
    }
    constructor() {
    }
    @defaultConstructor
    CallableGetter() {
    }
}

export class properties {
}
