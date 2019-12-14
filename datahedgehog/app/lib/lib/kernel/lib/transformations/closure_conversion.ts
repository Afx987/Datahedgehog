/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/closure_conversion.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../ast";
import * as lib4 from "./closure/info";
import * as lib5 from "./../core_types";
import * as lib6 from "./closure/mock";
import * as lib7 from "./closure/converter";
import * as lib8 from "./closure/invalidate_closures";

export var transformProgram : (program : lib3.Program) => lib3.Program = (program : lib3.Program) : lib3.Program =>  {
    let info = new lib4.ClosureInfo();
    info.visitProgram(program);
    let coreTypes : lib5.CoreTypes = new lib5.CoreTypes(program);
    let contextClass : lib3.Class = lib6.mockUpContext(coreTypes,program);
    let convert = new lib7.ClosureConverter(coreTypes,info,contextClass);
    program = convert.visitProgram(program);
    return new lib8.InvalidateClosures().visitProgram(program);
};
export class properties {
}
