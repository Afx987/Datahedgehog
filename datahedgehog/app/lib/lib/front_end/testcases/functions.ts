/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/functions.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    var local : (f : (_namedArguments : {a? : any?}) => void) => void = (f : (_namedArguments : {a? : any?}) => void) : void =>  {
        f({
            a : "Hello, World"});
        f();
    };
    local((_namedArguments? : {a? : any}) =>  {
        let {a} = Object.assign({
            "a" : "Default greeting!"}, _namedArguments );
        core.print(a);
    });
};
export class properties {
}
