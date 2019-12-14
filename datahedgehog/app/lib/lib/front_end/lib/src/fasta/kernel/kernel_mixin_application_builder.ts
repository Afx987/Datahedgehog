/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/kernel/kernel_mixin_application_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../builder/mixin_application_builder";
import * as lib4 from "./kernel_type_builder";
import * as lib5 from "./kernel_library_builder";
import * as lib6 from "./../builder/type_variable_builder";
import * as lib7 from "@dart2ts/dart/uri";
import * as lib8 from "./../util/relativize";
import * as lib9 from "./../builder/library_builder";
import * as lib10 from "./../errors";

export namespace KernelMixinApplicationBuilder {
    export type Constructors = lib3.MixinApplicationBuilder.Constructors | 'KernelMixinApplicationBuilder';
    export type Interface = Omit<KernelMixinApplicationBuilder, Constructors>;
}
@DartClass
@Implements(lib4.KernelTypeBuilder)
export class KernelMixinApplicationBuilder extends lib3.MixinApplicationBuilder<lib4.KernelTypeBuilder> implements lib4.KernelTypeBuilder.Interface {
    charOffset : number;

    relativeFileUri : string;

    library : lib5.KernelLibraryBuilder;

    builtType : any;

    typeVariables : core.DartList<lib6.TypeVariableBuilder<any,any>>;

    subclassName : string;

    constructor(supertype : lib4.KernelTypeBuilder,mixins : core.DartList<lib4.KernelTypeBuilder>,library : lib5.KernelLibraryBuilder,charOffset : number,fileUri : lib7.Uri) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KernelMixinApplicationBuilder(supertype : lib4.KernelTypeBuilder,mixins : core.DartList<lib4.KernelTypeBuilder>,library : lib5.KernelLibraryBuilder,charOffset : number,fileUri : lib7.Uri) {
        this.charOffset = charOffset;
        this.relativeFileUri = lib8.relativizeUri(fileUri);
        super.MixinApplicationBuilder(supertype,mixins,charOffset,fileUri);
        this.library = library;
    }
    build(library : lib9.LibraryBuilder<any,any>) : any {
        return lib10.internalError("Unsupported operation.");
    }
    buildSupertype(library : lib9.LibraryBuilder<any,any>) : any {
        return lib10.internalError("Unsupported operation.");
    }
}

export class properties {
}
