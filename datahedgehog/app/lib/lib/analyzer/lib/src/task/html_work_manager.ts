/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/task/html_work_manager.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace HtmlWorkManager {
    export type Constructors = 'HtmlWorkManager';
    export type Interface = Omit<HtmlWorkManager, Constructors>;
}
@DartClass
@Implements(any)
export class HtmlWorkManager implements any.Interface {
    context : any;

    priorityResultQueue : core.DartLinkedHashSet<any>;

    sourceQueue : core.DartLinkedHashSet<any>;

    constructor(context : any) {
    }
    @defaultConstructor
    HtmlWorkManager(context : any) {
        this.priorityResultQueue = new core.DartLinkedHashSet<any>();
        this.sourceQueue = new core.DartLinkedHashSet<any>();
        this.context = context;
        this.context.onResultInvalidated.listen(this.onResultInvalidated.bind(this));
    }
    get analysisCache() : any {
        return this.context.analysisCache;
    }
    get privateAnalysisCachePartition() : any {
        return this.context.privateAnalysisCachePartition;
    }
    addPriorityResult(target : any,result : any) : void {
        this.priorityResultQueue.add(new bare.createInstance(any,null,target,result));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyChange(addedSources : core.DartList<any>,changedSources : core.DartList<any>,removedSources : core.DartList<any>) : void {
        addedSources = addedSources.where(HtmlWorkManager._isHtmlSource.bind(this)).toList();
        changedSources = changedSources.where(HtmlWorkManager._isHtmlSource.bind(this)).toList();
        removedSources = removedSources.where(HtmlWorkManager._isHtmlSource.bind(this)).toList();
        this.sourceQueue.addAll(addedSources);
        this.sourceQueue.addAll(changedSources);
        this.sourceQueue.removeAll(removedSources);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyPriorityTargets(targets : core.DartList<any>) : void {
        let resultsToUnschedule : core.DartList<any> = new core.DartList.literal<any>();
        for(let result of this.priorityResultQueue) {
            if (op(Op.EQUALS,result.result,HTML_ERRORS)) {
                resultsToUnschedule.add(result);
            }
        }
        this.priorityResultQueue.removeAll(resultsToUnschedule);
        for(let target of targets) {
            if (HtmlWorkManager._isHtmlSource(target)) {
                this.addPriorityResult(target,HTML_ERRORS);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getErrors(source : any) : core.DartList<any> {
        if (!HtmlWorkManager._isHtmlSource(source)) {
            return AnalysisError.NO_ERRORS;
        }
        if (op(Op.EQUALS,this.analysisCache.getState(source,HTML_ERRORS),CacheState.VALID)) {
            return this.analysisCache.getValue(source,HTML_ERRORS);
        }
        let errors : core.DartList<any> = new core.DartList.literal<any>();
        errors.addAll(this.analysisCache.getValue(source,HTML_DOCUMENT_ERRORS));
        let scripts : core.DartList<any> = this.analysisCache.getValue(source,DART_SCRIPTS);
        for(let script of scripts) {
            errors.addAll(this.context.getErrors(script).errors);
        }
        return errors;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getNextResult() : any {
        while (this.priorityResultQueue.isNotEmpty){
            let result : any = this.priorityResultQueue.first;
            if (!this._needsComputing(result.target,result.result)) {
                this.priorityResultQueue.remove(result);
                continue;
            }
            return result;
        }
        while (this.sourceQueue.isNotEmpty){
            let htmlSource : any = this.sourceQueue.first;
            if (!this._needsComputing(htmlSource,HTML_ERRORS)) {
                this.sourceQueue.remove(htmlSource);
                continue;
            }
            return new bare.createInstance(any,null,htmlSource,HTML_ERRORS);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getNextResultPriority() : any {
        if (this.priorityResultQueue.isNotEmpty) {
            return WorkOrderPriority.PRIORITY;
        }
        if (this.sourceQueue.isNotEmpty) {
            return WorkOrderPriority.NORMAL;
        }
        return WorkOrderPriority.NONE;
    }
    onAnalysisOptionsChanged() : void {
        this._invalidateAllLocalResolutionInformation(false);
    }
    onResultInvalidated(event : any) {
        let descriptor : any = event.descriptor;
        if (op(Op.EQUALS,descriptor,HTML_ERRORS)) {
            this.sourceQueue.add(event.entry.target);
        }else if (op(Op.EQUALS,descriptor,DART_SCRIPTS)) {
        }
    }
    onSourceFactoryChanged() : void {
        this._invalidateAllLocalResolutionInformation(true);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resultsComputed(target : any,outputs : core.DartMap<any,any>) : void {
        if (HtmlWorkManager._isHtmlSource(target)) {
            let shouldSetErrors : boolean = false;
            outputs.forEach((descriptor : any,value : any) =>  {
                if (op(Op.EQUALS,descriptor,HTML_ERRORS)) {
                    shouldSetErrors = true;
                }else if (op(Op.EQUALS,descriptor,DART_SCRIPTS)) {
                    if (this.priorityResultQueue.contains(target)) {
                    }else {
                    }
                }
            });
            if (shouldSetErrors) {
                let info : any = this.context.getErrors(target);
                this.context.getNotice(target).setErrors(info.errors,info.lineInfo);
            }
        }
    }
    _invalidateAllLocalResolutionInformation(invalidateUris : boolean) : void {
        let partition : any = this.privateAnalysisCachePartition;
        let htmlSources : core.DartList<any> = new core.DartList.literal<any>();
        let scriptTargets : core.DartList<any> = new core.DartList.literal<any>();
        let iterator : any = partition.iterator();
        while (iterator.moveNext()){
            let target : any = iterator.key;
            if (HtmlWorkManager._isHtmlSource(target)) {
                htmlSources.add(target);
            }
            if (is(target, any)) {
                scriptTargets.add(target);
            }
        }
        scriptTargets.forEach(partition.remove);
        for(let htmlSource of htmlSources) {
            let entry : any = partition.get(htmlSource);
            if (entry != null) {
                entry.setState(HTML_ERRORS,CacheState.INVALID);
                if (invalidateUris) {
                    entry.setState(REFERENCED_LIBRARIES,CacheState.INVALID);
                }
            }
        }
    }
    _needsComputing(target : any,result : any) : boolean {
        let state : any = this.analysisCache.getState(target,result);
        return state != CacheState.VALID && state != CacheState.ERROR;
    }
    static _isHtmlSource(target : any) : boolean {
        return is(target, any) && AnalysisEngine.isHtmlFileName(target.fullName);
    }
}

export class properties {
}
