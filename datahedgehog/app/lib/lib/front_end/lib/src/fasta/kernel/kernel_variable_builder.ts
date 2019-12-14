/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/kernel/kernel_variable_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../builder/builder";
import * as lib4 from "@dart2ts/dart/uri";

export namespace KernelVariableBuilder {
    export type Constructors = lib3.Builder.Constructors | 'KernelVariableBuilder';
    export type Interface = Omit<KernelVariableBuilder, Constructors>;
}
@DartClass
export class KernelVariableBuilder extends lib3.Builder {
    variable : any;

    constructor(variable : any,parent : lib3.Builder,fileUri : lib4.Uri) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelVariableBuilder(variable : any,parent : lib3.Builder,fileUri : lib4.Uri) {
        this.variable = variable;
        super.Builder(parent,variable.fileOffset,fileUri);
    }
    get isLocal() : boolean {
        return true;
    }
    get isConst() : boolean {
        return this.variable.isConst;
    }
    get isFinal() : boolean {
        return this.variable.isFinal;
    }
    get target() : any {
        return this.variable;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fullNameForErrors() : string {
        return (this.variable.name || "<unnamed>");
    }
}

export class properties {
}
