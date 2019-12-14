/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/task/dart_work_manager.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace DartWorkManager {
    export type Constructors = 'DartWorkManager';
    export type Interface = Omit<DartWorkManager, Constructors>;
}
@DartClass
@Implements(any)
export class DartWorkManager implements any.Interface {
    private static __$_SOURCE_ERRORS : core.DartList<any>;
    static get _SOURCE_ERRORS() : core.DartList<any> { 
        if (this.__$_SOURCE_ERRORS===undefined) {
            this.__$_SOURCE_ERRORS = new core.DartList.literal<any>(BUILD_DIRECTIVES_ERRORS,BUILD_LIBRARY_ERRORS,PARSE_ERRORS,SCAN_ERRORS);
        }
        return this.__$_SOURCE_ERRORS;
    }
    static set _SOURCE_ERRORS(__$value : core.DartList<any>)  { 
        this.__$_SOURCE_ERRORS = __$value;
    }

    private static __$_UNIT_ERRORS : core.DartList<any>;
    static get _UNIT_ERRORS() : core.DartList<any> { 
        if (this.__$_UNIT_ERRORS===undefined) {
            this.__$_UNIT_ERRORS = new core.DartList.literal<any>(HINTS,LINTS,LIBRARY_UNIT_ERRORS,RESOLVE_DIRECTIVES_ERRORS,RESOLVE_TYPE_NAMES_ERRORS,RESOLVE_TYPE_BOUNDS_ERRORS,RESOLVE_UNIT_ERRORS,STRONG_MODE_ERRORS,VARIABLE_REFERENCE_ERRORS,VERIFY_ERRORS);
        }
        return this.__$_UNIT_ERRORS;
    }
    static set _UNIT_ERRORS(__$value : core.DartList<any>)  { 
        this.__$_UNIT_ERRORS = __$value;
    }

    context : any;

    priorityResultQueue : core.DartLinkedHashSet<any>;

    unknownSourceQueue : core.DartLinkedHashSet<any>;

    librarySourceQueue : core.DartLinkedHashSet<any>;

    libraryPartsMap : core.DartHashMap<any,core.DartList<any>>;

    partLibrariesMap : core.DartHashMap<any,core.DartList<any>>;

    constructor(context : any) {
    }
    @defaultConstructor
    DartWorkManager(context : any) {
        this.priorityResultQueue = new core.DartLinkedHashSet<any>();
        this.unknownSourceQueue = new core.DartLinkedHashSet<any>();
        this.librarySourceQueue = new core.DartLinkedHashSet<any>();
        this.libraryPartsMap = new core.DartHashMap<any,core.DartList<any>>();
        this.partLibrariesMap = new core.DartHashMap<any,core.DartList<any>>();
        this.context = context;
        this.context.onResultInvalidated.listen((event : any) =>  {
            if (op(Op.EQUALS,event.descriptor,LIBRARY_ERRORS_READY)) {
                let entry : any = event.entry;
                if (entry.explicitlyAdded && op(Op.EQUALS,entry.getValue(SOURCE_KIND),SourceKind.LIBRARY)) {
                    this.librarySourceQueue.add(entry.target);
                }
            }
        });
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
        addedSources = addedSources.where(DartWorkManager._isDartSource.bind(this)).toList();
        changedSources = changedSources.where(DartWorkManager._isDartSource.bind(this)).where((source : any) =>  {
            return this._needsComputing(source,SOURCE_KIND);
        }).toList();
        removedSources = removedSources.where(DartWorkManager._isDartSource.bind(this)).toList();
        this.unknownSourceQueue.addAll(addedSources);
        this.unknownSourceQueue.addAll(changedSources);
        this.unknownSourceQueue.removeAll(removedSources);
        this.librarySourceQueue.removeAll(changedSources);
        this.librarySourceQueue.removeAll(removedSources);
        for(let changedSource of changedSources) {
            this._onLibrarySourceChangedOrRemoved(changedSource);
        }
        for(let removedSource of removedSources) {
            this.partLibrariesMap.remove(removedSource);
            this._onLibrarySourceChangedOrRemoved(removedSource);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyPriorityTargets(targets : core.DartList<any>) : void {
        let resultsToUnschedule : core.DartList<any> = new core.DartList.literal<any>();
        for(let result of this.priorityResultQueue) {
            if (op(Op.EQUALS,result.result,LIBRARY_ERRORS_READY)) {
                resultsToUnschedule.add(result);
            }
        }
        this.priorityResultQueue.removeAll(resultsToUnschedule);
        for(let target of targets) {
            if (DartWorkManager._isDartSource(target)) {
                let sourceKind : any = this.analysisCache.getValue(target,SOURCE_KIND);
                if (op(Op.EQUALS,sourceKind,SourceKind.UNKNOWN)) {
                    this.addPriorityResult(target,SOURCE_KIND);
                }else if (op(Op.EQUALS,sourceKind,SourceKind.LIBRARY)) {
                    this._schedulePriorityLibrarySourceAnalysis(target);
                }else if (op(Op.EQUALS,sourceKind,SourceKind.PART)) {
                    let libraries : core.DartList<any> = this.context.getLibrariesContaining(target);
                    for(let library of libraries) {
                        this.addPriorityResult(library,LIBRARY_ERRORS_READY);
                    }
                }
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getErrors(source : any) : core.DartList<any> {
        if (!DartWorkManager._isDartSource(source) && isNot(source, any)) {
            return AnalysisError.NO_ERRORS;
        }
        if (op(Op.EQUALS,this.analysisCache.getState(source,DART_ERRORS),CacheState.VALID)) {
            return this.analysisCache.getValue(source,DART_ERRORS);
        }
        let errors : core.DartList<any> = new core.DartList.literal<any>();
        for(let descriptor of DartWorkManager._SOURCE_ERRORS) {
            errors.addAll(this.analysisCache.getValue(source,descriptor));
        }
        for(let library of this.context.getLibrariesContaining(source)) {
            let unit : any = new bare.createInstance(any,null,library,source);
            for(let descriptor of DartWorkManager._UNIT_ERRORS) {
                errors.addAll(this.analysisCache.getValue(unit,descriptor));
            }
        }
        return errors;
    }
    getLibrariesContainingPart(part : any) : core.DartList<any> {
        if (part.isInSystemLibrary) {
            let sdkDartWorkManager : DartWorkManager = this._getSdkDartWorkManager();
            if (sdkDartWorkManager != this) {
                return sdkDartWorkManager.getLibrariesContainingPart(part);
            }
        }
        let libraries : core.DartList<any> = op(Op.INDEX,this.partLibrariesMap,part);
        libraries = ( libraries ) || ( this._getLibrariesContainingPartFromResultProvider(part) );
        return (((_503_)=>(!!_503_)?_503_.toList():null)(libraries) || Source.EMPTY_LIST);
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
        while (this.librarySourceQueue.isNotEmpty){
            let librarySource : any = this.librarySourceQueue.first;
            if (!this._needsComputing(librarySource,LIBRARY_ERRORS_READY)) {
                this.librarySourceQueue.remove(librarySource);
                continue;
            }
            return new bare.createInstance(any,null,librarySource,LIBRARY_ERRORS_READY);
        }
        while (this.unknownSourceQueue.isNotEmpty){
            let source : any = this.unknownSourceQueue.first;
            if (!this._needsComputing(source,SOURCE_KIND)) {
                this.unknownSourceQueue.remove(source);
                continue;
            }
            return new bare.createInstance(any,null,source,SOURCE_KIND);
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
        if (this.unknownSourceQueue.isNotEmpty || this.librarySourceQueue.isNotEmpty) {
            return WorkOrderPriority.NORMAL;
        }
        return WorkOrderPriority.NONE;
    }
    onAnalysisOptionsChanged() : void {
        this._invalidateAllLocalResolutionInformation(false);
    }
    onSourceFactoryChanged() : void {
        this._invalidateAllLocalResolutionInformation(true);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resultsComputed(target : any,outputs : core.DartMap<any,any>) : void {
        let isDartSource : boolean = DartWorkManager._isDartSource(target);
        if (isDartSource && target.source.isInSystemLibrary) {
            let sdkWorkManager : DartWorkManager = this._getSdkDartWorkManager();
            if (sdkWorkManager != this) {
                sdkWorkManager.resultsComputed(target,outputs);
                return;
            }
        }
        let isDartLibrarySource : boolean = false;
        if (isDartSource) {
            let source : any = target;
            let kind : any = outputs.get(SOURCE_KIND);
            if (kind != null) {
                this.unknownSourceQueue.remove(source);
                if (op(Op.EQUALS,kind,SourceKind.LIBRARY)) {
                    isDartLibrarySource = true;
                    if (this.context.prioritySources.contains(source)) {
                        this._schedulePriorityLibrarySourceAnalysis(source);
                    }else {
                        let needErrors : boolean = this._shouldErrorsBeComputed(source);
                        if (needErrors) {
                            this.librarySourceQueue.add(target);
                        }
                    }
                }
            }
        }
        if (isDartLibrarySource) {
            let library : any = target;
            let includedParts : core.DartList<any> = outputs.get(INCLUDED_PARTS) as core.DartList<any>;
            if (includedParts != null) {
                op(Op.INDEX_ASSIGN,this.libraryPartsMap,library,includedParts);
                for(let part of includedParts) {
                    let libraries : core.DartList<any> = this.partLibrariesMap.putIfAbsent(part,() =>  {
                        return new core.DartList.literal<any>();
                    });
                    if (!libraries.contains(library)) {
                        libraries.add(library);
                        this._invalidateContainingLibraries(part);
                    }
                }
            }
        }
        if (isDartSource) {
            let shouldSetErrors : boolean = false;
            outputs.forEach((descriptor : any,value : any) =>  {
                if (op(Op.EQUALS,descriptor,PARSED_UNIT) && value != null) {
                    this.context.getNotice(target).parsedDartUnit = value;
                    shouldSetErrors = true;
                }
                if (op(Op.EQUALS,descriptor,DART_ERRORS)) {
                    shouldSetErrors = true;
                }
            });
            if (shouldSetErrors) {
                let info : any = this.context.getErrors(target);
                this.context.getNotice(target).setErrors(info.errors,info.lineInfo);
            }
        }
        if (is(target, any)) {
            let source : any = target.source;
            let shouldSetErrors : boolean = false;
            outputs.forEach((descriptor : any,value : any) =>  {
                if (op(Op.EQUALS,descriptor,RESOLVED_UNIT) && value != null) {
                    this.context.getNotice(source).resolvedDartUnit = value;
                    shouldSetErrors = true;
                }
            });
            if (shouldSetErrors) {
                let info : any = this.context.getErrors(source);
                this.context.getNotice(source).setErrors(info.errors,info.lineInfo);
            }
        }
    }
    unitIncrementallyResolved(librarySource : any,unitSource : any) : void {
        this.librarySourceQueue.add(librarySource);
    }
    _getLibrariesContainingPartFromResultProvider(part : any) : core.DartList<any> {
        let cacheEntry : any = this.context.getCacheEntry(part);
        let knows : boolean = this.context.aboutToComputeResult(cacheEntry,CONTAINING_LIBRARIES);
        if (knows) {
            return cacheEntry.getValue(CONTAINING_LIBRARIES);
        }
        return null;
    }
    _getSdkDartWorkManager() : DartWorkManager {
        let sourceFactory : any = this.context.sourceFactory;
        let sdkContext : any = sourceFactory.dartSdk.context;
        if (sdkContext != this.context) {
            for(let workManager of sdkContext.workManagers) {
                if (is(workManager, DartWorkManager)) {
                    return workManager;
                }
            }
        }
        return this;
    }
    _invalidateAllLocalResolutionInformation(invalidateUris : boolean) : void {
        let partition : any = this.privateAnalysisCachePartition;
        let dartSources : core.DartList<any> = new core.DartList.literal<any>();
        let unitTargets : core.DartList<any> = new core.DartList.literal<any>();
        let iterator : any = partition.iterator();
        while (iterator.moveNext()){
            let target : any = iterator.key;
            if (invalidateUris && DartWorkManager._isDartSource(target)) {
                dartSources.add(target);
            }
            if (is(target, any)) {
                unitTargets.add(target);
                let library : any = target.library;
                if (this.context.exists(library)) {
                    let entry : any = iterator.value;
                    if (entry.explicitlyAdded) {
                        this.librarySourceQueue.add(library);
                    }
                }
            }
        }
        unitTargets.forEach(partition.remove);
        for(let dartSource of dartSources) {
            let entry : any = partition.get(dartSource);
            if (entry != null) {
                entry.setState(PARSED_UNIT,CacheState.INVALID);
                entry.setState(IMPORTED_LIBRARIES,CacheState.INVALID);
                entry.setState(EXPLICITLY_IMPORTED_LIBRARIES,CacheState.INVALID);
                entry.setState(EXPORTED_LIBRARIES,CacheState.INVALID);
                entry.setState(INCLUDED_PARTS,CacheState.INVALID);
                entry.setState(LIBRARY_SPECIFIC_UNITS,CacheState.INVALID);
                entry.setState(UNITS,CacheState.INVALID);
            }
        }
    }
    _invalidateContainingLibraries(source : any) : void {
        let entry : any = this.analysisCache.get(source);
        if (entry != null) {
            entry.setState(CONTAINING_LIBRARIES,CacheState.INVALID);
        }
    }
    _needsComputing(target : any,result : any) : boolean {
        let state : any = this.analysisCache.getState(target,result);
        return state != CacheState.VALID && state != CacheState.ERROR;
    }
    _onLibrarySourceChangedOrRemoved(library : any) : void {
        let parts : core.DartList<any> = this.libraryPartsMap.remove(library);
        if (parts != null) {
            for(let part of parts) {
                let libraries : core.DartList<any> = op(Op.INDEX,this.partLibrariesMap,part);
                if (libraries != null) {
                    libraries.remove(library);
                    this._invalidateContainingLibraries(part);
                }
            }
        }
        this._invalidateContainingLibraries(library);
    }
    _schedulePriorityLibrarySourceAnalysis(librarySource : any) : void {
        let needErrors : boolean = this._shouldErrorsBeComputed(librarySource);
        if (needErrors) {
            this.addPriorityResult(librarySource,LIBRARY_ERRORS_READY);
        }else {
            let target = new bare.createInstance(any,null,librarySource,librarySource);
            this.addPriorityResult(target,RESOLVED_UNIT);
        }
    }
    _shouldErrorsBeComputed(source : any) : boolean {
        return this.context.shouldErrorsBeAnalyzed(source);
    }
    static _isDartSource(target : any) : boolean {
        return is(target, any) && AnalysisEngine.isDartFileName(target.fullName);
    }
}

export class properties {
}
