/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/builder/field_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./member_builder";
import * as lib4 from "./library_builder";

export namespace FieldBuilder {
    export type Constructors = lib3.MemberBuilder.Constructors | 'FieldBuilder';
    export type Interface<T> = Omit<FieldBuilder<T>, Constructors>;
}
@DartClass
export class FieldBuilder<T> extends lib3.MemberBuilder {
    name : string;

    modifiers : number;

    constructor(name : string,modifiers : number,compilationUnit : lib4.LibraryBuilder<any,any>,charOffset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FieldBuilder(name : string,modifiers : number,compilationUnit : lib4.LibraryBuilder<any,any>,charOffset : number) {
        super.MemberBuilder(compilationUnit,charOffset);
        this.name = name;
        this.modifiers = modifiers;
    }
    set initializer(value : T){ throw 'abstract'}
    get isField() : boolean {
        return true;
    }
}

export class properties {
}
