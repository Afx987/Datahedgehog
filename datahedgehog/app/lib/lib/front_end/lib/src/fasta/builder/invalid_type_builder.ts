/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/builder/invalid_type_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./type_declaration_builder";
import * as lib4 from "./type_builder";
import * as lib5 from "@dart2ts/dart/uri";

export namespace InvalidTypeBuilder {
    export type Constructors = lib3.TypeDeclarationBuilder.Constructors | 'InvalidTypeBuilder';
    export type Interface<T extends lib4.TypeBuilder,R> = Omit<InvalidTypeBuilder<T extends lib4.TypeBuilder,R>, Constructors>;
}
@DartClass
export class InvalidTypeBuilder<T extends lib4.TypeBuilder,R> extends lib3.TypeDeclarationBuilder<T,R> {
    constructor(name : string,charOffset : number,fileUri? : lib5.Uri) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InvalidTypeBuilder(name : string,charOffset : number,fileUri? : lib5.Uri) {
        super.TypeDeclarationBuilder(null,0,name,null,charOffset,fileUri);
    }
}

export class properties {
}
