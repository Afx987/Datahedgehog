/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/kernel/kernel_type_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../builder/type_builder";
import * as lib4 from "@dart2ts/dart/uri";
import * as lib5 from "./../builder/library_builder";

export namespace KernelTypeBuilder {
    export type Constructors = lib3.TypeBuilder.Constructors | 'KernelTypeBuilder';
    export type Interface = Omit<KernelTypeBuilder, Constructors>;
}
@DartClass
export class KernelTypeBuilder extends lib3.TypeBuilder {
    constructor(charOffset : number,fileUri : lib4.Uri) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelTypeBuilder(charOffset : number,fileUri : lib4.Uri) {
        super.TypeBuilder(charOffset,fileUri);
    }
    @Abstract
    build(library : lib5.LibraryBuilder<any,any>) : any{ throw 'abstract'}
    @Abstract
    buildSupertype(library : lib5.LibraryBuilder<any,any>) : any{ throw 'abstract'}
}

export class properties {
}
