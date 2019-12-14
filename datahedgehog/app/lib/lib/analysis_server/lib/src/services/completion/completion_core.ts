/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/completion_core.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace CompletionRequestImpl {
    export type Constructors = 'CompletionRequestImpl';
    export type Interface = Omit<CompletionRequestImpl, Constructors>;
}
@DartClass
@Implements(any)
export class CompletionRequestImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    result : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    source : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    offset : number;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    ideOptions : any;

    replacementOffset : number;

    replacementLength : number;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resourceProvider : any;

    _aborted : boolean;

    performance : any;

    constructor(result : any,resourceProvider : any,source : any,offset : number,performance : any,ideOptions : any) {
    }
    @defaultConstructor
    CompletionRequestImpl(result : any,resourceProvider : any,source : any,offset : number,performance : any,ideOptions : any) {
        this._aborted = false;
        this.source = source;
        this.offset = offset;
        this.replacementOffset = offset;
        this.replacementLength = 0;
        this.result = result;
        this.resourceProvider = resourceProvider;
        this.performance = performance;
        this.ideOptions = ideOptions;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sourceContents() : string {
        return this.result.content;
    }
    abort() : void {
        this._aborted = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkAborted() : void {
        if (this._aborted) {
            throw new bare.createInstance(any,null);
        }
    }
}

export class properties {
}
