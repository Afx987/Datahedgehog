/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/target_implementation.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./target";
import * as lib4 from "./translate_uri";
import * as lib5 from "./builder/builder";
import * as lib6 from "./ticker";
import * as lib7 from "@dart2ts/dart/uri";
import * as lib8 from "./builder/library_builder";
import * as lib9 from "./builder/class_builder";
import * as lib10 from "./loader";
import * as lib11 from "./../scanner/token";
import * as lib12 from "./parser/dart_vm_native";
import * as lib13 from "./quote";

export namespace TargetImplementation {
    export type Constructors = lib3.Target.Constructors | 'TargetImplementation';
    export type Interface = Omit<TargetImplementation, Constructors>;
}
@DartClass
export class TargetImplementation extends lib3.Target {
    uriTranslator : lib4.TranslateUri;

    backendTarget : any;

    cachedCompileTimeError : lib5.Builder;

    cachedAbstractClassInstantiationError : lib5.Builder;

    cachedNativeAnnotation : lib5.Builder;

    constructor(ticker : lib6.Ticker,uriTranslator : lib4.TranslateUri,backendTarget : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TargetImplementation(ticker : lib6.Ticker,uriTranslator : lib4.TranslateUri,backendTarget : any) {
        super.Target(ticker);
        this.uriTranslator = uriTranslator;
        this.backendTarget = backendTarget;
    }
    @Abstract
    createLibraryBuilder(uri : lib7.Uri,fileUri : lib7.Uri) : lib8.LibraryBuilder<any,any>{ throw 'abstract'}
    @Abstract
    addDirectSupertype(cls : lib9.ClassBuilder<any,any>,set : core.DartSet<lib9.ClassBuilder<any,any>>) : void{ throw 'abstract'}
    @Abstract
    collectAllClasses() : core.DartList<lib9.ClassBuilder<any,any>>{ throw 'abstract'}
    @Abstract
    breakCycle(cls : lib9.ClassBuilder<any,any>) : void{ throw 'abstract'}
    translateUri(uri : lib7.Uri) : lib7.Uri {
        return this.uriTranslator.translate(uri);
    }
    getCompileTimeError(loader : lib10.Loader<any>) : lib5.Builder {
        if (this.cachedCompileTimeError != null) return this.cachedCompileTimeError;
        return this.cachedCompileTimeError = loader.coreLibrary.getConstructor("_CompileTimeError",{
            isPrivate : true});
    }
    getAbstractClassInstantiationError(loader : lib10.Loader<any>) : lib5.Builder {
        if (this.cachedAbstractClassInstantiationError != null) {
            return this.cachedAbstractClassInstantiationError;
        }
        return this.cachedAbstractClassInstantiationError = loader.coreLibrary.getConstructor("AbstractClassInstantiationError");
    }
    getNativeAnnotation(loader : lib10.Loader<any>) : lib5.Builder {
        if (this.cachedNativeAnnotation != null) return this.cachedNativeAnnotation;
        let internal : lib8.LibraryBuilder<any,any> = loader.read(lib7.Uri.parse("dart:_internal"));
        return this.cachedNativeAnnotation = internal.getConstructor("ExternalName");
    }
    loadExtraRequiredLibraries(loader : lib10.Loader<any>) : void {
        for(let uri of this.backendTarget.extraRequiredLibraries) {
            loader.read(lib7.Uri.parse(uri));
        }
    }
    skipNativeClause(token : lib11.Token) : lib11.Token {
        return lib12.skipNativeClause(token);
    }
    extractNativeMethodName(token : lib11.Token) : string {
        return lib13.unescapeString(token.next.lexeme);
    }
    @Abstract
    addSourceInformation(uri : lib7.Uri,lineStarts : core.DartList<number>,sourceCode : core.DartList<number>) : void{ throw 'abstract'}
}

export class properties {
}
