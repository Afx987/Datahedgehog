/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/target/flutter.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./targets";
import * as lib4 from "./../ast";
import * as lib5 from "./../transformations/mixin_full_resolution";
import * as lib6 from "./../transformations/continuation";
import * as lib7 from "./../transformations/setup_builtin_library";
import * as lib8 from "./../transformations/erasure";
import * as lib9 from "./../transformations/sanitize_for_vm";

export namespace FlutterTarget {
    export type Constructors = lib3.Target.Constructors | 'FlutterTarget';
    export type Interface = Omit<FlutterTarget, Constructors>;
}
@DartClass
export class FlutterTarget extends lib3.Target {
    flags : lib3.TargetFlags;

    constructor(flags : lib3.TargetFlags) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FlutterTarget(flags : lib3.TargetFlags) {
        this.flags = flags;
    }
    get strongMode() : boolean {
        return this.flags.strongMode;
    }
    get strongModeSdk() : boolean {
        return false;
    }
    get name() : string {
        return 'flutter';
    }
    get extraRequiredLibraries() : core.DartList<string> {
        return new core.DartList.literal<string>('dart:async','dart:collection','dart:convert','dart:developer','dart:_internal','dart:isolate','dart:math','dart:mirrors','dart:profiler','dart:typed_data','dart:_vmservice','dart:_builtin','dart:nativewrappers','dart:io','dart:ui','dart:vmservice_sky');
    }
    performModularTransformations(program : lib4.Program) : void {
        new lib5.MixinFullResolution(this).transform(program);
    }
    performGlobalTransformations(program : lib4.Program) : void {
        lib6.transformProgram(program);
        lib7.transformProgram(program);
        lib7.transformProgram(program,{
            libraryUri : 'dart:ui'});
        if (this.strongMode) {
            new lib8.Erasure().transform(program);
        }
        new lib9.SanitizeForVM().transform(program);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    instantiateInvocation(target : lib4.Member,receiver : lib4.Expression,name : string,arguments : lib4.Arguments,offset : number,isSuper : boolean) : lib4.Expression {
        return new lib4.InvalidExpression();
    }
}

export class properties {
}
