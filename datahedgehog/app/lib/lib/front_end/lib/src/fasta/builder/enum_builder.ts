/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/builder/enum_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./class_builder";
import * as lib4 from "./type_builder";

export namespace EnumBuilder {
    export type Constructors = 'EnumBuilder';
    export type Interface<T extends lib4.TypeBuilder,R> = Omit<EnumBuilder<T extends lib4.TypeBuilder,R>, Constructors>;
}
@DartClass
@Implements(lib3.ClassBuilder)
export class EnumBuilder<T extends lib4.TypeBuilder,R> implements lib3.ClassBuilder.Interface<T,R> {
    @AbstractProperty
    get constantNamesAndOffsets() : core.DartList<core.DartObject>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    EnumBuilder() {
    }
}

export class properties {
}
