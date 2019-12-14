/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/target/targets.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../transformations/treeshaker";
import * as lib4 from "@dart2ts/dart/uri";
import * as lib5 from "./vm";
import * as lib6 from "./vmcc";
import * as lib7 from "./vmreify";
import * as lib8 from "./flutter";
import * as lib9 from "./../core_types";
import * as lib10 from "./../ast";

export var getTarget : (name : string,flags : TargetFlags) => Target = (name : string,flags : TargetFlags) : Target =>  {
    let builder = properties.targets.get(name);
    if (op(Op.EQUALS,builder,null)) return null;
    return builder(flags);
};
export namespace TargetFlags {
    export type Constructors = 'TargetFlags';
    export type Interface = Omit<TargetFlags, Constructors>;
}
@DartClass
export class TargetFlags {
    strongMode : boolean;

    treeShake : boolean;

    programRoots : core.DartList<lib3.ProgramRoot>;

    kernelRuntime : lib4.Uri;

    constructor(_namedArguments? : {strongMode? : boolean,treeShake? : boolean,programRoots? : core.DartList<lib3.ProgramRoot>,kernelRuntime? : lib4.Uri}) {
    }
    @defaultConstructor
    TargetFlags(_namedArguments? : {strongMode? : boolean,treeShake? : boolean,programRoots? : core.DartList<lib3.ProgramRoot>,kernelRuntime? : lib4.Uri}) {
        let {strongMode,treeShake,programRoots,kernelRuntime} = Object.assign({
            "strongMode" : false,
            "treeShake" : false,
            "programRoots" : new core.DartList.literal<lib3.ProgramRoot>()}, _namedArguments );
        this.strongMode = strongMode;
        this.treeShake = treeShake;
        this.programRoots = programRoots;
        this.kernelRuntime = kernelRuntime;
    }
}

export namespace Target {
    export type Constructors = 'Target';
    export type Interface = Omit<Target, Constructors>;
}
@DartClass
export class Target {
    @AbstractProperty
    get name() : string{ throw 'abstract'}
    get extraRequiredLibraries() : core.DartList<string> {
        return new core.DartList.literal<string>();
    }
    get extraDeclaredVariables() : core.DartMap<string,string> {
        return new core.DartMap.literal([
        ]);
    }
    get requiredSdkClasses() : core.DartMap<string,core.DartList<string>> {
        return lib9.CoreTypes.requiredClasses;
    }
    @AbstractProperty
    get strongMode() : boolean{ throw 'abstract'}
    get strongModeSdk() : boolean {
        return this.strongMode;
    }
    @Abstract
    performModularTransformations(program : lib10.Program) : void{ throw 'abstract'}
    @Abstract
    performGlobalTransformations(program : lib10.Program) : void{ throw 'abstract'}
    @Abstract
    instantiateInvocation(target : lib10.Member,receiver : lib10.Expression,name : string,arguments : lib10.Arguments,offset : number,isSuper : boolean) : lib10.Expression{ throw 'abstract'}
    toString() : string {
        return `Target(${this.name})`;
    }
    constructor() {
    }
    @defaultConstructor
    Target() {
    }
}

export namespace NoneTarget {
    export type Constructors = Target.Constructors | 'NoneTarget';
    export type Interface = Omit<NoneTarget, Constructors>;
}
@DartClass
export class NoneTarget extends Target {
    flags : TargetFlags;

    constructor(flags : TargetFlags) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NoneTarget(flags : TargetFlags) {
        this.flags = flags;
    }
    get strongMode() : boolean {
        return this.flags.strongMode;
    }
    get name() : string {
        return 'none';
    }
    get extraRequiredLibraries() : core.DartList<string> {
        return new core.DartList.literal<string>();
    }
    performModularTransformations(program : lib10.Program) : void {
    }
    performGlobalTransformations(program : lib10.Program) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    instantiateInvocation(target : lib10.Member,receiver : lib10.Expression,name : string,arguments : lib10.Arguments,offset : number,isSuper : boolean) : lib10.Expression {
        return new lib10.InvalidExpression();
    }
}

export class properties {
    private static __$targetNames : core.DartList<string>;
    static get targetNames() : core.DartList<string> { 
        if (this.__$targetNames===undefined) {
            this.__$targetNames = properties.targets.keys.toList();
        }
        return this.__$targetNames;
    }
    static set targetNames(__$value : core.DartList<string>)  { 
        this.__$targetNames = __$value;
    }

    private static __$targets : core.DartMap<string,(flags : TargetFlags) => Target>;
    static get targets() : core.DartMap<string,(flags : TargetFlags) => Target> { 
        if (this.__$targets===undefined) {
            this.__$targets = new core.DartMap.literal([
                ['none',(flags : TargetFlags) =>  {
                    return new NoneTarget(flags);
                }],
                ['vm',(flags : TargetFlags) =>  {
                    return new lib5.VmTarget(flags);
                }],
                ['vmcc',(flags : TargetFlags) =>  {
                    return new lib6.VmClosureConvertedTarget(flags);
                }],
                ['vmreify',(flags : TargetFlags) =>  {
                    return new lib7.VmGenericTypesReifiedTarget(flags);
                }],
                ['flutter',(flags : TargetFlags) =>  {
                    return new lib8.FlutterTarget(flags);
                }]]);
        }
        return this.__$targets;
    }
    static set targets(__$value : core.DartMap<string,(flags : TargetFlags) => Target>)  { 
        this.__$targets = __$value;
    }

}
