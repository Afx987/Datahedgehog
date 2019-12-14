/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/downwards_inference_on_generic_constructor_arguments_infer_downwards.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => void = () : void =>  {
    new F0<number>(new core.DartList.literal());
    new F0<number>(new core.DartList.literal(3));
    new F0<number>(new core.DartList.literal("hello"));
    new F0<number>(new core.DartList.literal("hello",3));
    new F1<number>({
        a : new core.DartList.literal()});
    new F1<number>({
        a : new core.DartList.literal(3)});
    new F1<number>({
        a : new core.DartList.literal("hello")});
    new F1<number>({
        a : new core.DartList.literal("hello",3)});
    new F2<number>(new core.DartList.literal());
    new F2<number>(new core.DartList.literal(3));
    new F2<number>(new core.DartList.literal("hello"));
    new F2<number>(new core.DartList.literal("hello",3));
    new F3<number>(new core.DartList.literal());
    new F3<number>(new core.DartList.literal(new core.DartList.literal(3)));
    new F3<number>(new core.DartList.literal(new core.DartList.literal("hello")));
    new F3<number>(new core.DartList.literal(new core.DartList.literal("hello"),new core.DartList.literal(3)));
    new F4<number>({
        a : new core.DartList.literal()});
    new F4<number>({
        a : new core.DartList.literal(new core.DartList.literal(3))});
    new F4<number>({
        a : new core.DartList.literal(new core.DartList.literal("hello"))});
    new F4<number>({
        a : new core.DartList.literal(new core.DartList.literal("hello"),new core.DartList.literal(3))});
    new F3<any>(new core.DartList.literal());
    let f31 = new F3<any>(new core.DartList.literal(new core.DartList.literal(3)));
    let f32 = new F3<any>(new core.DartList.literal(new core.DartList.literal("hello")));
    let f33 = new F3<any>(new core.DartList.literal(new core.DartList.literal("hello"),new core.DartList.literal(3)));
    new F4<any>({
        a : new core.DartList.literal()});
    new F4<any>({
        a : new core.DartList.literal(new core.DartList.literal(3))});
    new F4<any>({
        a : new core.DartList.literal(new core.DartList.literal("hello"))});
    new F4<any>({
        a : new core.DartList.literal(new core.DartList.literal("hello"),new core.DartList.literal(3))});
};
export namespace F0 {
    export type Constructors = 'F0';
    export type Interface<T> = Omit<F0<T>, Constructors>;
}
@DartClass
export class F0<T> {
    constructor(a : core.DartList<T>) {
    }
    @defaultConstructor
    F0(a : core.DartList<T>) {
    }
}

export namespace F1 {
    export type Constructors = 'F1';
    export type Interface<T> = Omit<F1<T>, Constructors>;
}
@DartClass
export class F1<T> {
    constructor(_namedArguments? : {a? : core.DartList<T>}) {
    }
    @defaultConstructor
    F1(_namedArguments? : {a? : core.DartList<T>}) {
        let {a} = Object.assign({
        }, _namedArguments );
    }
}

export namespace F2 {
    export type Constructors = 'F2';
    export type Interface<T> = Omit<F2<T>, Constructors>;
}
@DartClass
export class F2<T> {
    constructor(a : core.DartIterable<T>) {
    }
    @defaultConstructor
    F2(a : core.DartIterable<T>) {
    }
}

export namespace F3 {
    export type Constructors = 'F3';
    export type Interface<T> = Omit<F3<T>, Constructors>;
}
@DartClass
export class F3<T> {
    constructor(a : core.DartIterable<core.DartIterable<T>>) {
    }
    @defaultConstructor
    F3(a : core.DartIterable<core.DartIterable<T>>) {
    }
}

export namespace F4 {
    export type Constructors = 'F4';
    export type Interface<T> = Omit<F4<T>, Constructors>;
}
@DartClass
export class F4<T> {
    constructor(_namedArguments? : {a? : core.DartIterable<core.DartIterable<T>>}) {
    }
    @defaultConstructor
    F4(_namedArguments? : {a? : core.DartIterable<core.DartIterable<T>>}) {
        let {a} = Object.assign({
        }, _namedArguments );
    }
}

export class properties {
}
