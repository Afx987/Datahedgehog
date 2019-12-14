/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/target/vm.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./targets";
import * as lib4 from "./../class_hierarchy";
import * as lib5 from "./../ast";
import * as lib6 from "./../transformations/mixin_full_resolution";
import * as lib7 from "./../core_types";
import * as lib8 from "./../transformations/insert_type_checks";
import * as lib9 from "./../transformations/insert_covariance_checks";
import * as lib10 from "./../transformations/continuation";
import * as lib11 from "./../transformations/sanitize_for_vm";
import * as lib12 from "./../transformations/treeshaker";
import * as lib13 from "./../transformations/erasure";

export namespace VmTarget {
    export type Constructors = lib3.Target.Constructors | 'VmTarget';
    export type Interface = Omit<VmTarget, Constructors>;
}
@DartClass
export class VmTarget extends lib3.Target {
    flags : lib3.TargetFlags;

    constructor(flags : lib3.TargetFlags) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VmTarget(flags : lib3.TargetFlags) {
        this.flags = flags;
    }
    get strongMode() : boolean {
        return this.flags.strongMode;
    }
    get strongModeSdk() : boolean {
        return false;
    }
    get name() : string {
        return 'vm';
    }
    get extraRequiredLibraries() : core.DartList<string> {
        return new core.DartList.literal<string>('dart:async','dart:collection','dart:convert','dart:developer','dart:_internal','dart:isolate','dart:math','dart:mirrors','dart:profiler','dart:typed_data','dart:vmservice_io','dart:_vmservice','dart:_builtin','dart:nativewrappers','dart:io');
    }
    _hierarchy : lib4.ClassHierarchy;

    performModularTransformations(program : lib5.Program) : void {
        let mixins = ((_) : lib6.MixinFullResolution =>  {
            {
                _.transform(program);
                return _;
            }
        })(new lib6.MixinFullResolution(this));
        this._hierarchy = mixins.hierarchy;
    }
    performGlobalTransformations(program : lib5.Program) : void {
        let coreTypes = new lib7.CoreTypes(program);
        if (this.strongMode) {
            new lib8.InsertTypeChecks({
                hierarchy : this._hierarchy,coreTypes : coreTypes}).transformProgram(program);
            new lib9.InsertCovarianceChecks({
                hierarchy : this._hierarchy,coreTypes : coreTypes}).transformProgram(program);
        }
        if (this.flags.treeShake) {
            this.performTreeShaking(program);
        }
        lib10.transformProgram(program);
        if (this.strongMode) {
            this.performErasure(program);
        }
        new lib11.SanitizeForVM().transform(program);
    }
    performTreeShaking(program : lib5.Program) : void {
        let coreTypes = new lib7.CoreTypes(program);
        new lib12.TreeShaker(program,{
            hierarchy : this._hierarchy,coreTypes : coreTypes,strongMode : this.strongMode,programRoots : this.flags.programRoots}).transform(program);
        this._hierarchy = null;
    }
    performErasure(program : lib5.Program) : void {
        new lib13.Erasure().transform(program);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    instantiateInvocation(target : lib5.Member,receiver : lib5.Expression,name : string,arguments : lib5.Arguments,offset : number,isSuper : boolean) : lib5.Expression {
        let typeArgsLen : number = 0;
        let numPositionalArguments : number = arguments.positional.length;
        numPositionalArguments++;
        let numArguments : number = numPositionalArguments + arguments.named.length;
        let argumentsDescriptor : core.DartList<lib5.Expression> = new core.DartList.literal(((_) : lib5.IntLiteral =>  {
            {
                _.fileOffset = offset;
                return _;
            }
        })(new lib5.IntLiteral(typeArgsLen)),((_) : lib5.IntLiteral =>  {
            {
                _.fileOffset = offset;
                return _;
            }
        })(new lib5.IntLiteral(numArguments)),((_) : lib5.IntLiteral =>  {
            {
                _.fileOffset = offset;
                return _;
            }
        })(new lib5.IntLiteral(numPositionalArguments)));
        let argumentsList : core.DartList<lib5.Expression> = new core.DartList.literal<lib5.Expression>(receiver);
        argumentsList.addAll(arguments.positional);
        for(let argument of arguments.named) {
            argumentsDescriptor.add(((_) : lib5.StringLiteral =>  {
                {
                    _.fileOffset = argument.fileOffset;
                    return _;
                }
            })(new lib5.StringLiteral(argument.name)));
            argumentsDescriptor.add(((_) : lib5.IntLiteral =>  {
                {
                    _.fileOffset = argument.fileOffset;
                    return _;
                }
            })(new lib5.IntLiteral(argumentsList.length)));
            argumentsList.add(argument.value);
        }
        let constructorArguments : lib5.Arguments = new lib5.Arguments(new core.DartList.literal(((_) : lib5.StringLiteral =>  {
            {
                _.fileOffset = offset;
                return _;
            }
        })(new lib5.StringLiteral(name)),this._fixedLengthList(argumentsDescriptor,arguments.fileOffset),this._fixedLengthList(argumentsList,arguments.fileOffset),((_) : lib5.BoolLiteral =>  {
            {
                _.fileOffset = arguments.fileOffset;
                return _;
            }
        })(new lib5.BoolLiteral(isSuper))));
        return ((_) : lib5.InvocationExpression =>  {
            {
                _.fileOffset = offset;
                return _;
            }
        })((is(target, lib5.Constructor) ? new lib5.ConstructorInvocation(target,constructorArguments) : new lib5.StaticInvocation(target,constructorArguments)));
    }
    _fixedLengthList(elements : core.DartList<lib5.Expression>,charOffset : number) : lib5.Expression {
        return new lib5.MethodInvocation(((_) : lib5.ListLiteral =>  {
            {
                _.fileOffset = charOffset;
                return _;
            }
        })(new lib5.ListLiteral(elements)),new lib5.Name("toList"),new lib5.Arguments(new core.DartList.literal<lib5.Expression>(),{
            named : new core.DartList.literal<lib5.NamedExpression>(new lib5.NamedExpression("growable",new lib5.BoolLiteral(false)))}));
    }
}

export class properties {
}
