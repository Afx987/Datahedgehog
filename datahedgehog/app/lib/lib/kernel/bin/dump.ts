/** Library asset:datahedgehog_monitor/lib/lib/kernel/bin/dump.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : (args : any) => any = (args : any) =>  {
    let binary = loadProgramFromBinary(op(Op.INDEX,args,0));
    writeProgramToText(binary,{
        path : op(Op.INDEX,args,1)});
};
export class properties {
}
