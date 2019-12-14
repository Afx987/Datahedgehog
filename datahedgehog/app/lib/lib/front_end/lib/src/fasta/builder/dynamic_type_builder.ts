/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/builder/dynamic_type_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./builtin_type_builder";
import * as lib4 from "./type_builder";
import * as lib5 from "./library_builder";

export namespace DynamicTypeBuilder {
    export type Constructors = lib3.BuiltinTypeBuilder.Constructors | 'DynamicTypeBuilder';
    export type Interface<T extends lib4.TypeBuilder,R> = Omit<DynamicTypeBuilder<T extends lib4.TypeBuilder,R>, Constructors>;
}
@DartClass
export class DynamicTypeBuilder<T extends lib4.TypeBuilder,R> extends lib3.BuiltinTypeBuilder<T,R> {
    constructor(type : R,compilationUnit : lib5.LibraryBuilder<any,any>,charOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DynamicTypeBuilder(type : R,compilationUnit : lib5.LibraryBuilder<any,any>,charOffset : number) {
        super.BuiltinTypeBuilder("dynamic",type,compilationUnit,charOffset);
    }
}

export class properties {
}
