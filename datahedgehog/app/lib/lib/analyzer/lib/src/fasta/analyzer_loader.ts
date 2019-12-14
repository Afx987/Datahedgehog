/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/fasta/analyzer_loader.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./analyzer_diet_listener";

export namespace AnalyzerLoader {
    export type Constructors = 'AnalyzerLoader';
    export type Interface<L> = Omit<AnalyzerLoader<L>, Constructors>;
}
@DartClass
export class AnalyzerLoader<L> extends any {
    elementStore : any;

    constructor(target : any) {
    }
    @defaultConstructor
    AnalyzerLoader(target : any) {
        super.DartObject(PhysicalFileSystem.instance,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeHierarchy(program : any) : void {
        this.elementStore = new bare.createInstance(any,null,coreLibrary,builders);
        ticker.logMs("Built analyzer element model.");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createDietListener(library : any) : lib3.AnalyzerDietListener {
        return new lib3.AnalyzerDietListener(library,this.elementStore);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkOverrides(sourceClasses : core.DartList<any>) : void {
    }
}

export class properties {
}
