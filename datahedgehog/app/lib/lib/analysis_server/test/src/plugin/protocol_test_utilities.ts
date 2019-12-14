/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/src/plugin/protocol_test_utilities.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace ProtocolTestUtilities {
    export type Constructors = 'ProtocolTestUtilities';
    export type Interface = Omit<ProtocolTestUtilities, Constructors>;
}
@DartClass
export class ProtocolTestUtilities {
    private static __$strings : core.DartList<string>;
    static get strings() : core.DartList<string> { 
        if (this.__$strings===undefined) {
            this.__$strings = new core.DartList.literal<string>('aa','ab','ac','ad','ae','af','ag','ah','ai','aj','ak','al','am','an','ao','ap','aq','ar','as','at','au','av','aw','ax','ay','az','ba','bb','bc','bd','be','bf','bg','bh','bi','bj','bk','bl','bm','bn','bo','bp','bq','br','bs','bt','bu','bv','bw','bx','by','bz');
        }
        return this.__$strings;
    }

    analysisError(stringIndex : number,intIndex : number,_namedArguments? : {file? : string}) : any {
        let {file} = Object.assign({
        }, _namedArguments );
        return new bare.createInstance(any,null,AnalysisErrorSeverity.ERROR,AnalysisErrorType.COMPILE_TIME_ERROR,this.location(stringIndex,intIndex,{
            file : file}),ProtocolTestUtilities.strings[stringIndex++],ProtocolTestUtilities.strings[stringIndex++],{
            correction : ProtocolTestUtilities.strings[stringIndex++],hasFix : true});
    }
    element(stringIndex : number,intIndex : number,_namedArguments? : {kind? : any}) : any {
        let {kind} = Object.assign({
        }, _namedArguments );
        return new bare.createInstance(any,null,(kind || ElementKind.CLASS),ProtocolTestUtilities.strings[stringIndex++],intIndex++,{
            location : new bare.createInstance(any,null,this.fileName(stringIndex++),intIndex++,intIndex++,intIndex++,intIndex++),parameters : ProtocolTestUtilities.strings[stringIndex++],returnType : ProtocolTestUtilities.strings[stringIndex++],typeParameters : ProtocolTestUtilities.strings[stringIndex++]});
    }
    fileName(stringIndex : number) : string {
        return `${ProtocolTestUtilities.strings[stringIndex]}.dart`;
    }
    foldingRegion(offset : number,length : number) : any {
        return new bare.createInstance(any,null,FoldingKind.COMMENT,offset,length);
    }
    highlightRegion(offset : number,length : number) : any {
        return new bare.createInstance(any,null,HighlightRegionType.FIELD,offset,length);
    }
    location(stringIndex : number,intIndex : number,_namedArguments? : {file? : string}) : any {
        let {file} = Object.assign({
        }, _namedArguments );
        return new bare.createInstance(any,null,(file || this.fileName(stringIndex)),intIndex++,intIndex++,intIndex++,intIndex++);
    }
    occurrences(stringIndex : number,intIndex : number) : any {
        let referencedElement : any = this.element(stringIndex,intIndex);
        return new bare.createInstance(any,null,referencedElement,new core.DartList.literal<number>(intIndex + 5,intIndex + 6),referencedElement.name.length);
    }
    outline(stringIndex : number,intIndex : number) : any {
        return new bare.createInstance(any,null,this.element(stringIndex,intIndex),intIndex + 5,intIndex + 6,{
            children : new core.DartList.literal<any>(new bare.createInstance(any,null,this.element(stringIndex + 5,intIndex + 7,{
                kind : ElementKind.METHOD}),intIndex + 12,intIndex + 13))});
    }
    pluginNavigationParams(stringIndex : number,intIndex : number,_namedArguments? : {file? : string}) : any {
        let {file} = Object.assign({
        }, _namedArguments );
        return new bare.createInstance(any,null,(file || this.fileName(stringIndex++)),new core.DartList.literal<any>(new bare.createInstance(any,null,intIndex++,2,new core.DartList.literal<number>(0))),new core.DartList.literal<any>(new bare.createInstance(any,null,ElementKind.FIELD,0,intIndex++,2,intIndex++,intIndex++)),new core.DartList.literal<string>(ProtocolTestUtilities.strings[stringIndex++],ProtocolTestUtilities.strings[stringIndex++]));
    }
    refactoringProblem(stringIndex : number,intIndex : number) : any {
        return new bare.createInstance(any,null,RefactoringProblemSeverity.FATAL,ProtocolTestUtilities.strings[stringIndex++],{
            location : this.location(stringIndex,intIndex)});
    }
    serverNavigationParams(stringIndex : number,intIndex : number,_namedArguments? : {file? : string}) : any {
        let {file} = Object.assign({
        }, _namedArguments );
        return new bare.createInstance(any,null,(file || this.fileName(stringIndex++)),new core.DartList.literal<any>(new bare.createInstance(any,null,intIndex++,2,new core.DartList.literal<number>(0))),new core.DartList.literal<any>(new bare.createInstance(any,null,ElementKind.FIELD,0,intIndex++,2,intIndex++,intIndex++)),new core.DartList.literal<string>(ProtocolTestUtilities.strings[stringIndex++],ProtocolTestUtilities.strings[stringIndex++]));
    }
    sourceChange(stringIndex : number,intIndex : number) : any {
        return new bare.createInstance(any,null,ProtocolTestUtilities.strings[stringIndex++],{
            edits : new core.DartList.literal<any>(new bare.createInstance(any,null,this.fileName(stringIndex),intIndex++,{
                edits : new core.DartList.literal<any>(new bare.createInstance(any,null,intIndex++,intIndex++,ProtocolTestUtilities.strings[stringIndex++]))})),linkedEditGroups : new core.DartList.literal<any>(new bare.createInstance(any,null,new core.DartList.literal<any>(new bare.createInstance(any,null,this.fileName(stringIndex),intIndex++)),intIndex++,new core.DartList.literal<any>(new bare.createInstance(any,null,ProtocolTestUtilities.strings[stringIndex++],LinkedEditSuggestionKind.METHOD)))),selection : new bare.createInstance(any,null,this.fileName(stringIndex),intIndex++)});
    }
    constructor() {
    }
    @defaultConstructor
    ProtocolTestUtilities() {
    }
}

export class properties {
}
