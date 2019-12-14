/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/builder/builtin_type_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./type_declaration_builder";
import * as lib4 from "./type_builder";
import * as lib5 from "./library_builder";

export namespace BuiltinTypeBuilder {
    export type Constructors = lib3.TypeDeclarationBuilder.Constructors | 'BuiltinTypeBuilder';
    export type Interface<T extends lib4.TypeBuilder,R> = Omit<BuiltinTypeBuilder<T extends lib4.TypeBuilder,R>, Constructors>;
}
@DartClass
export class BuiltinTypeBuilder<T extends lib4.TypeBuilder,R> extends lib3.TypeDeclarationBuilder<T,R> {
    type : R;

    constructor(name : string,type : R,compilationUnit : lib5.LibraryBuilder<any,any>,charOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BuiltinTypeBuilder(name : string,type : R,compilationUnit : lib5.LibraryBuilder<any,any>,charOffset : number) {
        super.TypeDeclarationBuilder(null,0,name,compilationUnit,charOffset);
        this.type = type;
    }
    buildType(library : lib5.LibraryBuilder<any,any>,arguments : core.DartList<T>) : R {
        return this.type;
    }
    buildTypesWithBuiltArguments(library : lib5.LibraryBuilder<any,any>,arguments : core.DartList<R>) : R {
        return this.type;
    }
}

export class properties {
}
