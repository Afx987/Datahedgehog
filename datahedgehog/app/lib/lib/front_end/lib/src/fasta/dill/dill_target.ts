/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/dill/dill_target.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../target_implementation";
import * as lib4 from "./dill_loader";
import * as lib5 from "./../ticker";
import * as lib6 from "./../translate_uri";
import * as lib7 from "@dart2ts/dart/uri";
import * as lib8 from "./../errors";
import * as lib9 from "./dill_library_builder";
import * as lib10 from "./../builder/class_builder";

export namespace DillTarget {
    export type Constructors = lib3.TargetImplementation.Constructors | 'DillTarget';
    export type Interface = Omit<DillTarget, Constructors>;
}
@DartClass
export class DillTarget extends lib3.TargetImplementation {
    isLoaded : boolean;

    loader : lib4.DillLoader;

    constructor(ticker : lib5.Ticker,uriTranslator : lib6.TranslateUri,backendTargetName : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DillTarget(ticker : lib5.Ticker,uriTranslator : lib6.TranslateUri,backendTargetName : string) {
        this.isLoaded = false;
        super.TargetImplementation(ticker,uriTranslator,getTarget(backendTargetName,null));
        this.loader = new lib4.DillLoader(this);
    }
    addSourceInformation(uri : lib7.Uri,lineStarts : core.DartList<number>,sourceCode : core.DartList<number>) : void {
        lib8.internalError("Unsupported operation.");
    }
    read(uri : lib7.Uri) : void {
        lib8.internalError("Unsupported operation.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildProgram() : async.Future<core.Null> {
        return lib8.internalError("not implemented.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    buildOutlines() : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this.loader.libraries.isNotEmpty) {
                await this.loader.buildOutlines();
            }
            this.isLoaded = true;
        } )());
    }

    createLibraryBuilder(uri : lib7.Uri,fileUri : lib7.Uri) : lib9.DillLibraryBuilder {
        return new lib9.DillLibraryBuilder(uri,this.loader);
    }
    addDirectSupertype(cls : lib10.ClassBuilder<any,any>,set : core.DartSet<lib10.ClassBuilder<any,any>>) : void {
    }
    collectAllClasses() : core.DartList<lib10.ClassBuilder<any,any>> {
        return null;
    }
    breakCycle(cls : lib10.ClassBuilder<any,any>) : void {
    }
    get objectClass() : any {
        return op(Op.INDEX,this.loader.coreLibrary,"Object").target;
    }
}

export class properties {
}
