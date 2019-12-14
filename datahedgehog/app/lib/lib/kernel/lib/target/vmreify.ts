/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/target/vmreify.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./vmcc";
import * as lib4 from "./targets";
import * as lib5 from "./../ast";
import * as lib6 from "./../transformations/generic_types_reification";

export namespace VmGenericTypesReifiedTarget {
    export type Constructors = lib3.VmClosureConvertedTarget.Constructors | 'VmGenericTypesReifiedTarget';
    export type Interface = Omit<VmGenericTypesReifiedTarget, Constructors>;
}
@DartClass
export class VmGenericTypesReifiedTarget extends lib3.VmClosureConvertedTarget {
    constructor(flags : lib4.TargetFlags) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VmGenericTypesReifiedTarget(flags : lib4.TargetFlags) {
        super.VmClosureConvertedTarget(flags);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get name() : string {
        return "vmreify";
    }
    get extraRequiredLibraries() : core.DartList<string> {
        return ((_) : core.DartList<string> =>  {
            {
                _.add(`${this.flags.kernelRuntime.resolve('reify/types.dart')}`);
                _.add(`${this.flags.kernelRuntime.resolve('reify/declarations.dart')}`);
                _.add(`${this.flags.kernelRuntime.resolve('reify/interceptors.dart')}`);
                return _;
            }
        })(new core.DartList.from(super.extraRequiredLibraries));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performGlobalTransformations(program : lib5.Program) : void {
        super.performGlobalTransformations(program);
        lib6.transformProgram(program);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performTreeShaking(program : lib5.Program) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performErasure(program : lib5.Program) : void {
    }
}

export class properties {
}
