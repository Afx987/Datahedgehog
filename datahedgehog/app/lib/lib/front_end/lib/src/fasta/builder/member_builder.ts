/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/builder/member_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./modifier_builder";
import * as lib4 from "./builder";
import * as lib5 from "./class_builder";

export namespace MemberBuilder {
    export type Constructors = lib3.ModifierBuilder.Constructors | 'MemberBuilder';
    export type Interface = Omit<MemberBuilder, Constructors>;
}
@DartClass
export class MemberBuilder extends lib3.ModifierBuilder {
    parent : lib4.Builder;

    @AbstractProperty
    get name() : string{ throw 'abstract'}
    constructor(parent : lib4.Builder,charOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MemberBuilder(parent : lib4.Builder,charOffset : number) {
        this.parent = parent;
        super.ModifierBuilder(parent,charOffset);
    }
    get isInstanceMember() : boolean {
        return this.isClassMember && !this.isStatic;
    }
    get isClassMember() : boolean {
        return is(this.parent, lib5.ClassBuilder<any,any>);
    }
    get isTopLevel() : boolean {
        return !this.isClassMember;
    }
    get isNative() : boolean {
        return false;
    }
    get isRedirectingGenerativeConstructor() : boolean {
        return false;
    }
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
