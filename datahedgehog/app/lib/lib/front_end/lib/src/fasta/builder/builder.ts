/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/builder/builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "./library_builder";
import * as lib5 from "./../errors";

export namespace Builder {
    export type Constructors = 'Builder';
    export type Interface = Omit<Builder, Constructors>;
}
@DartClass
export class Builder {
    next : Builder;

    constructor(parent : Builder,charOffset : number,fileUri : lib3.Uri) {
    }
    @defaultConstructor
    Builder(parent : Builder,charOffset : number,fileUri : lib3.Uri) {
    }
    get charOffset() : number {
        return -1;
    }
    get fileUri() : lib3.Uri {
        return null;
    }
    get relativeFileUri() : string {
        throw "The relativeFileUri method should be only called on subclasses " + "which have an efficient implementation of `relativeFileUri`!";
    }
    resolveTypes(parent : Builder) : number {
        return 0;
    }
    resolveConstructors(parent : lib4.LibraryBuilder<any,any>) : number {
        return 0;
    }
    get parent() : Builder {
        return null;
    }
    get isFinal() : boolean {
        return false;
    }
    get isField() : boolean {
        return false;
    }
    get isRegularMethod() : boolean {
        return false;
    }
    get isGetter() : boolean {
        return false;
    }
    get isSetter() : boolean {
        return false;
    }
    get isInstanceMember() : boolean {
        return false;
    }
    get isStatic() : boolean {
        return false;
    }
    get isTopLevel() : boolean {
        return false;
    }
    get isTypeDeclaration() : boolean {
        return false;
    }
    get isTypeVariable() : boolean {
        return false;
    }
    get isConstructor() : boolean {
        return false;
    }
    get isFactory() : boolean {
        return false;
    }
    get isLocal() : boolean {
        return false;
    }
    get isConst() : boolean {
        return false;
    }
    get isSynthetic() : boolean {
        return false;
    }
    get target() {
        return lib5.internalError(`Unsupported operation ${this.runtimeType}.`);
    }
    get hasProblem() : boolean {
        return false;
    }
    @AbstractProperty
    get fullNameForErrors() : string{ throw 'abstract'}
    computeLibraryUri() : lib3.Uri {
        let builder : Builder = this;
        do{
            if (is(builder, lib4.LibraryBuilder<any,any>)) return builder.uri;
            builder = builder.parent;
        } while (builder != null);
        return lib5.internalError("No library parent.");
    }
    prepareInitializerInference(library : any,currentClass : any) : void {
    }
}

export class properties {
}
