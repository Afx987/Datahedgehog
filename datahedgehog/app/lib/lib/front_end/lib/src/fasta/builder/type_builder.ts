/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/builder/type_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./builder";
import * as lib4 from "@dart2ts/dart/uri";
import * as lib5 from "./../scope";
import * as lib6 from "./type_declaration_builder";
import * as lib7 from "./type_variable_builder";
import * as lib8 from "./library_builder";

export namespace TypeBuilder {
    export type Constructors = lib3.Builder.Constructors | 'TypeBuilder';
    export type Interface = Omit<TypeBuilder, Constructors>;
}
@DartClass
export class TypeBuilder extends lib3.Builder {
    constructor(charOffset : number,fileUri : lib4.Uri) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeBuilder(charOffset : number,fileUri : lib4.Uri) {
        super.Builder(null,charOffset,fileUri);
    }
    @Abstract
    resolveIn(scope : lib5.Scope) : void{ throw 'abstract'}
    @Abstract
    bind(builder : lib6.TypeDeclarationBuilder<any,any>) : void{ throw 'abstract'}
    @AbstractProperty
    get name() : string{ throw 'abstract'}
    @AbstractProperty
    get debugName() : string{ throw 'abstract'}
    @Abstract
    printOn(buffer : core.DartStringBuffer) : core.DartStringBuffer{ throw 'abstract'}
    toString() : string {
        return `${this.debugName}(${this.printOn(new core.DartStringBuffer())})`;
    }
    subst(substitution : core.DartMap<lib7.TypeVariableBuilder<any,any>,TypeBuilder>) : TypeBuilder {
        return this;
    }
    @Abstract
    build(library : lib8.LibraryBuilder<any,any>){ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fullNameForErrors() : string {
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        this.printOn(sb);
        return `${sb}`;
    }
}

export class properties {
}
