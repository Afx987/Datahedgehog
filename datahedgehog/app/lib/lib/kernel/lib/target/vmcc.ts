/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/target/vmcc.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./vm";
import * as lib4 from "./targets";
import * as lib5 from "./../ast";
import * as lib6 from "./../transformations/closure_conversion";

export namespace VmClosureConvertedTarget {
    export type Constructors = lib3.VmTarget.Constructors | 'VmClosureConvertedTarget';
    export type Interface = Omit<VmClosureConvertedTarget, Constructors>;
}
@DartClass
export class VmClosureConvertedTarget extends lib3.VmTarget {
    constructor(flags : lib4.TargetFlags) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VmClosureConvertedTarget(flags : lib4.TargetFlags) {
        super.VmTarget(flags);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return "vmcc";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performGlobalTransformations(program : lib5.Program) : void {
        super.performGlobalTransformations(program);
        lib6.transformProgram(program);
    }
}

export class properties {
}
