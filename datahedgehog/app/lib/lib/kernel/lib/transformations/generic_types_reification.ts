/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/generic_types_reification.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../ast";
import * as lib4 from "./reify/reify_transformer";

export var transformProgram : (program : lib3.Program) => lib3.Program = (program : lib3.Program) : lib3.Program =>  {
    return lib4.transformProgram(program);
};
export class properties {
}
