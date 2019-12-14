/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/fasta/analyzer_target.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./analyzer_loader";

export namespace AnalyzerTarget {
    export type Constructors = 'AnalyzerTarget';
    export type Interface = Omit<AnalyzerTarget, Constructors>;
}
@DartClass
export class AnalyzerTarget extends any {
    constructor(dillTarget : any,uriTranslator : any,strongMode : boolean,uriToSource? : core.DartMap<string,any>) {
    }
    @defaultConstructor
    AnalyzerTarget(dillTarget : any,uriTranslator : any,strongMode : boolean,uriToSource? : core.DartMap<string,any>) {
        super.DartObject(PhysicalFileSystem.instance,dillTarget,uriTranslator,strongMode,uriToSource);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createLoader() : lib3.AnalyzerLoader<any> {
        return new lib3.AnalyzerLoader<any>(this);
    }
}

export class properties {
}
