/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/downwards_inference_on_function_arguments_infer_downwards.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var f0 : (a : core.DartList<number>) => void = (a : core.DartList<number>) : void =>  {
};
export var f1 : (_namedArguments? : {a? : core.DartList<number>}) => void = (_namedArguments? : {a? : core.DartList<number>}) : void =>  {
    let {a} = Object.assign({
    }, _namedArguments );
};
export var f2 : (a : core.DartIterable<number>) => void = (a : core.DartIterable<number>) : void =>  {
};
export var f3 : (a : core.DartIterable<core.DartIterable<number>>) => void = (a : core.DartIterable<core.DartIterable<number>>) : void =>  {
};
export var f4 : (_namedArguments? : {a? : core.DartIterable<core.DartIterable<number>>}) => void = (_namedArguments? : {a? : core.DartIterable<core.DartIterable<number>>}) : void =>  {
    let {a} = Object.assign({
    }, _namedArguments );
};
export var main : () => void = () : void =>  {
    f0(new core.DartList.literal());
    f0(new core.DartList.literal(3));
    f0(new core.DartList.literal("hello"));
    f0(new core.DartList.literal("hello",3));
    f1({
        a : new core.DartList.literal()});
    f1({
        a : new core.DartList.literal(3)});
    f1({
        a : new core.DartList.literal("hello")});
    f1({
        a : new core.DartList.literal("hello",3)});
    f2(new core.DartList.literal());
    f2(new core.DartList.literal(3));
    f2(new core.DartList.literal("hello"));
    f2(new core.DartList.literal("hello",3));
    f3(new core.DartList.literal());
    f3(new core.DartList.literal(new core.DartList.literal(3)));
    f3(new core.DartList.literal(new core.DartList.literal("hello")));
    f3(new core.DartList.literal(new core.DartList.literal("hello"),new core.DartList.literal(3)));
    f4({
        a : new core.DartList.literal()});
    f4({
        a : new core.DartList.literal(new core.DartList.literal(3))});
    f4({
        a : new core.DartList.literal(new core.DartList.literal("hello"))});
    f4({
        a : new core.DartList.literal(new core.DartList.literal("hello"),new core.DartList.literal(3))});
};
export class properties {
}
