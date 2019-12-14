/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/builder/type_declaration_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./modifier_builder";
import * as lib4 from "./type_builder";
import * as lib5 from "./metadata_builder";
import * as lib6 from "./builder";
import * as lib7 from "@dart2ts/dart/uri";
import * as lib8 from "./../util/relativize";
import * as lib9 from "./library_builder";

export namespace TypeDeclarationBuilder {
    export type Constructors = lib3.ModifierBuilder.Constructors | 'TypeDeclarationBuilder';
    export type Interface<T extends lib4.TypeBuilder,R> = Omit<TypeDeclarationBuilder<T extends lib4.TypeBuilder,R>, Constructors>;
}
@DartClass
export class TypeDeclarationBuilder<T extends lib4.TypeBuilder,R> extends lib3.ModifierBuilder {
    metadata : core.DartList<lib5.MetadataBuilder<any>>;

    modifiers : number;

    name : string;

    parent : lib6.Builder;

    fileUri : lib7.Uri;

    relativeFileUri : string;

    constructor(metadata : core.DartList<lib5.MetadataBuilder<any>>,modifiers : number,name : string,parent : lib6.Builder,charOffset : number,fileUri? : lib7.Uri) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeDeclarationBuilder(metadata : core.DartList<lib5.MetadataBuilder<any>>,modifiers : number,name : string,parent : lib6.Builder,charOffset : number,fileUri? : lib7.Uri) {
        this.fileUri = (fileUri || ((t)=>(!!t)?t.fileUri:null)(parent));
        this.relativeFileUri = fileUri != null ? lib8.relativizeUri(fileUri) : ((t)=>(!!t)?t.relativeFileUri:null)(parent);
        super.ModifierBuilder(parent,charOffset,(fileUri || ((t)=>(!!t)?t.fileUri:null)(parent)));
        this.metadata = metadata;
        this.modifiers = modifiers;
        this.name = name;
        this.parent = parent;
    }
    get isTypeDeclaration() : boolean {
        return true;
    }
    get isMixinApplication() : boolean {
        return false;
    }
    @Abstract
    buildType(library : lib9.LibraryBuilder<any,any>,arguments : core.DartList<T>) : R{ throw 'abstract'}
    @Abstract
    buildTypesWithBuiltArguments(library : lib9.LibraryBuilder<any,any>,arguments : core.DartList<R>) : R{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fullNameForErrors() : string {
        return this.name;
    }
}

export class properties {
}
