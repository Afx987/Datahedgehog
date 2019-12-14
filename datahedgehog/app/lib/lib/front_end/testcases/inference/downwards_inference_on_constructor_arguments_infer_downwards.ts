/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/downwards_inference_on_constructor_arguments_infer_downwards.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => void = () : void =>  {
    new F0(new core.DartList.literal());
    new F0(new core.DartList.literal(3));
    new F0(new core.DartList.literal("hello"));
    new F0(new core.DartList.literal("hello",3));
    new F1({
        a : new core.DartList.literal()});
    new F1({
        a : new core.DartList.literal(3)});
    new F1({
        a : new core.DartList.literal("hello")});
    new F1({
        a : new core.DartList.literal("hello",3)});
    new F2(new core.DartList.literal());
    new F2(new core.DartList.literal(3));
    new F2(new core.DartList.literal("hello"));
    new F2(new core.DartList.literal("hello",3));
    new F3(new core.DartList.literal());
    new F3(new core.DartList.literal(new core.DartList.literal(3)));
    new F3(new core.DartList.literal(new core.DartList.literal("hello")));
    new F3(new core.DartList.literal(new core.DartList.literal("hello"),new core.DartList.literal(3)));
    new F4({
        a : new core.DartList.literal()});
    new F4({
        a : new core.DartList.literal(new core.DartList.literal(3))});
    new F4({
        a : new core.DartList.literal(new core.DartList.literal("hello"))});
    new F4({
        a : new core.DartList.literal(new core.DartList.literal("hello"),new core.DartList.literal(3))});
};
export namespace F0 {
    export type Constructors = 'F0';
    export type Interface = Omit<F0, Constructors>;
}
@DartClass
export class F0 {
    constructor(a : core.DartList<number>) {
    }
    @defaultConstructor
    F0(a : core.DartList<number>) {
    }
}

export namespace F1 {
    export type Constructors = 'F1';
    export type Interface = Omit<F1, Constructors>;
}
@DartClass
export class F1 {
    constructor(_namedArguments? : {a? : core.DartList<number>}) {
    }
    @defaultConstructor
    F1(_namedArguments? : {a? : core.DartList<number>}) {
        let {a} = Object.assign({
        }, _namedArguments );
    }
}

export namespace F2 {
    export type Constructors = 'F2';
    export type Interface = Omit<F2, Constructors>;
}
@DartClass
export class F2 {
    constructor(a : core.DartIterable<number>) {
    }
    @defaultConstructor
    F2(a : core.DartIterable<number>) {
    }
}

export namespace F3 {
    export type Constructors = 'F3';
    export type Interface = Omit<F3, Constructors>;
}
@DartClass
export class F3 {
    constructor(a : core.DartIterable<core.DartIterable<number>>) {
    }
    @defaultConstructor
    F3(a : core.DartIterable<core.DartIterable<number>>) {
    }
}

export namespace F4 {
    export type Constructors = 'F4';
    export type Interface = Omit<F4, Constructors>;
}
@DartClass
export class F4 {
    constructor(_namedArguments? : {a? : core.DartIterable<core.DartIterable<number>>}) {
    }
    @defaultConstructor
    F4(_namedArguments? : {a? : core.DartIterable<core.DartIterable<number>>}) {
        let {a} = Object.assign({
        }, _namedArguments );
    }
}

export class properties {
}
