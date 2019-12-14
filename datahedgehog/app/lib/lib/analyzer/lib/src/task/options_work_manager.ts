/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/task/options_work_manager.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace OptionsWorkManager {
    export type Constructors = 'OptionsWorkManager';
    export type Interface = Omit<OptionsWorkManager, Constructors>;
}
@DartClass
@Implements(any)
export class OptionsWorkManager implements any.Interface {
    context : any;

    sourceQueue : core.DartLinkedHashSet<any>;

    priorityResultQueue : core.DartLinkedHashSet<any>;

    constructor(context : any) {
    }
    @defaultConstructor
    OptionsWorkManager(context : any) {
        this.sourceQueue = new core.DartLinkedHashSet<any>();
        this.priorityResultQueue = new core.DartLinkedHashSet<any>();
        this.context = context;
        this.analysisCache.onResultInvalidated.listen(this.onResultInvalidated.bind(this));
    }
    get analysisCache() : any {
        return this.context.analysisCache;
    }
    addPriorityResult(target : any,result : any) : void {
        this.priorityResultQueue.add(new bare.createInstance(any,null,target,result));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyChange(addedSources : core.DartList<any>,changedSources : core.DartList<any>,removedSources : core.DartList<any>) : void {
        addedSources = addedSources.where(OptionsWorkManager._isOptionsSource.bind(this)).toList();
        changedSources = changedSources.where(OptionsWorkManager._isOptionsSource.bind(this)).toList();
        removedSources = removedSources.where(OptionsWorkManager._isOptionsSource.bind(this)).toList();
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
            if (op(Op.EQUALS,result.result,ANALYSIS_OPTIONS_ERRORS)) {
                resultsToUnschedule.add(result);
            }
        }
        this.priorityResultQueue.removeAll(resultsToUnschedule);
        for(let target of targets) {
            if (OptionsWorkManager._isOptionsSource(target)) {
                this.addPriorityResult(target,ANALYSIS_OPTIONS_ERRORS);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getErrors(source : any) : core.DartList<any> {
        if (!OptionsWorkManager._isOptionsSource(source)) {
            return AnalysisError.NO_ERRORS;
        }
        if (op(Op.EQUALS,this.analysisCache.getState(source,ANALYSIS_OPTIONS_ERRORS),CacheState.VALID)) {
            return this.analysisCache.getValue(source,ANALYSIS_OPTIONS_ERRORS);
        }
        return AnalysisError.NO_ERRORS;
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
            let optionsSource : any = this.sourceQueue.first;
            if (!this._needsComputing(optionsSource,ANALYSIS_OPTIONS_ERRORS)) {
                this.sourceQueue.remove(optionsSource);
                continue;
            }
            return new bare.createInstance(any,null,optionsSource,ANALYSIS_OPTIONS_ERRORS);
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
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onAnalysisOptionsChanged() : void {
    }
    onResultInvalidated(event : any) : void {
        let descriptor : any = event.descriptor;
        if (op(Op.EQUALS,descriptor,ANALYSIS_OPTIONS_ERRORS)) {
            this.sourceQueue.add(event.entry.target);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onSourceFactoryChanged() : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resultsComputed(target : any,outputs : core.DartMap<any,any>) : void {
        if (OptionsWorkManager._isOptionsSource(target)) {
            let shouldSetErrors : boolean = false;
            outputs.forEach((descriptor : any,value : any) =>  {
                if (op(Op.EQUALS,descriptor,ANALYSIS_OPTIONS_ERRORS)) {
                    shouldSetErrors = true;
                }
            });
            if (shouldSetErrors) {
                let info : any = this.context.getErrors(target);
                this.context.getNotice(target).setErrors(info.errors,info.lineInfo);
            }
        }
    }
    _needsComputing(target : any,result : any) : boolean {
        let state : any = this.analysisCache.getState(target,result);
        return state != CacheState.VALID && state != CacheState.ERROR;
    }
    static _isOptionsSource(target : any) : boolean {
        return is(target, any) && AnalysisEngine.isAnalysisOptionsFileName(target.fullName);
    }
}

export class properties {
}
