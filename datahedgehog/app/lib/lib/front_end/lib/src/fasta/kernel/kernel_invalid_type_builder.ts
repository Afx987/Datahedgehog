/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/kernel/kernel_invalid_type_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../builder/invalid_type_builder";
import * as lib4 from "@dart2ts/dart/uri";
import * as lib5 from "./../builder/library_builder";
import * as lib6 from "./kernel_type_builder";
import * as lib7 from "./../messages";

export namespace KernelInvalidTypeBuilder {
    export type Constructors = lib3.InvalidTypeBuilder.Constructors | 'KernelInvalidTypeBuilder';
    export type Interface = Omit<KernelInvalidTypeBuilder, Constructors>;
}
@DartClass
export class KernelInvalidTypeBuilder extends lib3.InvalidTypeBuilder<lib6.KernelTypeBuilder,any> {
    constructor(name : string,charOffset : number,fileUri : lib4.Uri) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelInvalidTypeBuilder(name : string,charOffset : number,fileUri : lib4.Uri) {
        super.InvalidTypeBuilder(name,charOffset,fileUri);
    }
    buildType(library : lib5.LibraryBuilder<any,any>,arguments : core.DartList<lib6.KernelTypeBuilder>) : any {
        lib7.warning(this.fileUri,this.charOffset,`No type for: '${this.name}'.`);
        return new bare.createInstance(any,null);
    }
    buildTypesWithBuiltArguments(library : lib5.LibraryBuilder<any,any>,arguments : core.DartList<any>) : any {
        lib7.warning(this.fileUri,this.charOffset,`No type for: '${this.name}'.`);
        return new bare.createInstance(any,null);
    }
}

export class properties {
}
