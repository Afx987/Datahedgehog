/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/context/context.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace AnalysisContextImpl {
    export type Constructors = 'AnalysisContextImpl';
    export type Interface = Omit<AnalysisContextImpl, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisContextImpl implements any.Interface {
    _isActive : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    name : string;

    _options : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    _embedderYamlLocator : any;

    _disposed : boolean;

    _contentCache : any;

    _sourceFactory : any;

    _declaredVariables : any;

    _privatePartition : any;

    _cache : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onResultInvalidated : any;

    onResultInvalidatedSubscription : any;

    _configurationData : core.DartHashMap<any,core.DartObject>;

    _taskManager : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    workManagers : core.DartList<any>;

    dartWorkManager : any;

    driver : any;

    _priorityOrder : core.DartList<any>;

    _cacheConsistencyValidator : CacheConsistencyValidatorImpl;

    _pendingFutureTargets : core.DartHashMap<any,core.DartList<PendingFuture<any>>>;

    _pendingNotices : core.DartHashMap<any,any>;

    _typeProvider : any;

    _typeSystem : any;

    _onSourcesChangedController : async.DartStreamController<any>;

    _implicitAnalysisEventsController : async.DartStreamController<any>;

    _listeners : core.DartList<any>;

    useSdkCachePartition : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resultProvider : ResultProvider;

    _resultChangedControllers : core.DartMap<any,async.DartStreamController<any>>;

    incrementalResolutionValidation_lastUnitSource : any;

    incrementalResolutionValidation_lastLibrarySource : any;

    incrementalResolutionValidation_lastUnit : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    fileResolverProvider : any;

    constructor() {
    }
    @defaultConstructor
    AnalysisContextImpl() {
        this._isActive = false;
        this._options = new bare.createInstance(any,null);
        this._embedderYamlLocator = new bare.createInstance(any,null,null);
        this._disposed = false;
        this._contentCache = new bare.createInstance(any,null);
        this._declaredVariables = new bare.createInstance(any,null);
        this.onResultInvalidated = new bare.createInstance(any,null);
        this.onResultInvalidatedSubscription = null;
        this._configurationData = new core.DartHashMap<any,core.DartObject>();
        this.workManagers = new core.DartList.literal<any>();
        this._priorityOrder = new core.DartList.literal<any>();
        this._pendingFutureTargets = new core.DartHashMap<any,core.DartList<PendingFuture<any>>>();
        this._pendingNotices = new core.DartHashMap<any,any>();
        this._listeners = new core.DartList<any>();
        this.useSdkCachePartition = true;
        this._resultChangedControllers = new core.DartMap.literal([
        ]);
        AnalysisEngine.instance.processRequiredPlugins();
        this._privatePartition = new bare.createInstance(any,null,this);
        this._cache = this.createCacheFromSourceFactory(null);
        this._taskManager = AnalysisEngine.instance.taskManager;
        for(let factory of AnalysisEngine.instance.enginePlugin.workManagerFactories) {
            let workManager : any = factory(this);
            if (workManager != null) {
                this.workManagers.add(workManager);
                if (is(workManager, any)) {
                    this.dartWorkManager = workManager;
                }
            }
        }
        this.driver = new bare.createInstance(any,null,this._taskManager,this.workManagers,this);
        this._onSourcesChangedController = new async.DartStreamController.broadcast();
        this._implicitAnalysisEventsController = new async.DartStreamController.broadcast();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get analysisCache() : any {
        return this._cache;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get analysisOptions() : any {
        return this._options;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set analysisOptions(options : any) {
        let needsRecompute : boolean = this._options.analyzeFunctionBodiesPredicate != options.analyzeFunctionBodiesPredicate || this._options.generateImplicitErrors != options.generateImplicitErrors || this._options.generateSdkErrors != options.generateSdkErrors || this._options.dart2jsHint != options.dart2jsHint || this._notEqual(this._options.errorProcessors,options.errorProcessors) || this._notEqual(this._options.excludePatterns,options.excludePatterns) || (this._options.hint && !options.hint) || (this._options.lint && !options.lint) || this._notEqual(this._options.lintRules,options.lintRules) || this._options.preserveComments != options.preserveComments || this._options.strongMode != options.strongMode || this._options.enableAssertInitializer != options.enableAssertInitializer || this._options.enableLazyAssignmentOperators != options.enableLazyAssignmentOperators || ((is(options, any)) ? this._options.strongModeHints != options.strongModeHints : false) || ((is(options, any)) ? this._options.implicitCasts != options.implicitCasts : false) || ((is(options, any)) ? this._options.nonnullableTypes != options.nonnullableTypes : false) || ((is(options, any)) ? this._options.implicitDynamic != options.implicitDynamic : false) || this._options.enableStrictCallChecks != options.enableStrictCallChecks || this._options.enableSuperMixins != options.enableSuperMixins || !AnalysisContextImpl._samePatchPaths(this._options.patchPaths,options.patchPaths);
        this._options.analyzeFunctionBodiesPredicate = options.analyzeFunctionBodiesPredicate;
        this._options.generateImplicitErrors = options.generateImplicitErrors;
        this._options.generateSdkErrors = options.generateSdkErrors;
        this._options.dart2jsHint = options.dart2jsHint;
        this._options.enableAssertInitializer = options.enableAssertInitializer;
        this._options.enableStrictCallChecks = options.enableStrictCallChecks;
        this._options.enableLazyAssignmentOperators = options.enableLazyAssignmentOperators;
        this._options.enableSuperMixins = options.enableSuperMixins;
        this._options.enableTiming = options.enableTiming;
        this._options.errorProcessors = options.errorProcessors;
        this._options.excludePatterns = options.excludePatterns;
        this._options.hint = options.hint;
        this._options.incremental = options.incremental;
        this._options.incrementalApi = options.incrementalApi;
        this._options.incrementalValidation = options.incrementalValidation;
        this._options.lint = options.lint;
        this._options.lintRules = options.lintRules;
        this._options.preserveComments = options.preserveComments;
        if (this._options.strongMode != options.strongMode) {
            this._typeSystem = null;
        }
        this._options.strongMode = options.strongMode;
        this._options.trackCacheDependencies = options.trackCacheDependencies;
        this._options.disableCacheFlushing = options.disableCacheFlushing;
        this._options.patchPaths = options.patchPaths;
        if (is(options, any)) {
            this._options.strongModeHints = options.strongModeHints;
            this._options.implicitCasts = options.implicitCasts;
            this._options.nonnullableTypes = options.nonnullableTypes;
            this._options.implicitDynamic = options.implicitDynamic;
        }
        if (needsRecompute) {
            for(let workManager of this.workManagers) {
                workManager.onAnalysisOptionsChanged();
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set analysisPriorityOrder(sources : core.DartList<any>) {
        if (sources == null || sources.isEmpty) {
            this._priorityOrder = Source.EMPTY_LIST;
        }else {
            while (sources.remove(null)){
            }
            if (sources.isEmpty) {
                this._priorityOrder = Source.EMPTY_LIST;
            }else {
                this._priorityOrder = sources;
            }
        }
        for(let workManager of this.workManagers) {
            workManager.applyPriorityTargets(this._priorityOrder);
        }
        this.driver.reset();
    }
    get cacheConsistencyValidator() : any {
        return this._cacheConsistencyValidator = ( this._cacheConsistencyValidator ) || ( new CacheConsistencyValidatorImpl(this) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set contentCache(value : any) {
        this._contentCache = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get declaredVariables() : any {
        return this._declaredVariables;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get embedderYamlLocator() : any {
        return this._embedderYamlLocator;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get explicitTargets() : core.DartList<any> {
        let targets : core.DartList<any> = new core.DartList.literal<any>();
        let iterator : any = this._cache.iterator();
        while (iterator.moveNext()){
            if (iterator.value.explicitlyAdded) {
                targets.add(iterator.key);
            }
        }
        return targets;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get htmlSources() : core.DartList<any> {
        return this._getSources(SourceKind.HTML);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get implicitAnalysisEvents() : async.DartStream<any> {
        return this._implicitAnalysisEventsController.stream;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isActive() : boolean {
        return this._isActive;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set isActive(active : boolean) {
        if (active != this._isActive) {
            this._isActive = active;
            this._privatePartition.isActive = active;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDisposed() : boolean {
        return this._disposed;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get launchableClientLibrarySources() : core.DartList<any> {
        let sources : core.DartList<any> = new core.DartList.literal<any>();
        for(let source of this._cache.sources) {
            let entry : any = this._cache.get(source);
            if (op(Op.EQUALS,entry.getValue(SOURCE_KIND),SourceKind.LIBRARY) && !source.isInSystemLibrary && this.isClientLibrary(source)) {
                sources.add(source);
            }
        }
        return sources;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get launchableServerLibrarySources() : core.DartList<any> {
        let sources : core.DartList<any> = new core.DartList.literal<any>();
        for(let source of this._cache.sources) {
            let entry : any = this._cache.get(source);
            if (op(Op.EQUALS,entry.getValue(SOURCE_KIND),SourceKind.LIBRARY) && !source.isInSystemLibrary && this.isServerLibrary(source)) {
                sources.add(source);
            }
        }
        return sources;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get librarySources() : core.DartList<any> {
        return this._getSources(SourceKind.LIBRARY);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get onSourcesChanged() : async.DartStream<any> {
        return this._onSourcesChangedController.stream;
    }
    get pendingFutureSources_forTesting() : core.DartHashMap<any,core.DartList<PendingFuture<any>>> {
        return this._pendingFutureTargets;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get prioritySources() : core.DartList<any> {
        return this._priorityOrder;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get priorityTargets() : core.DartList<any> {
        return this.prioritySources;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get privateAnalysisCachePartition() : any {
        return this._privatePartition;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sourceFactory() : any {
        return this._sourceFactory;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set sourceFactory(factory : any) {
        if (core.identical(this._sourceFactory,factory)) {
            return;
        }else if (factory.context != null) {
            throw new core.StateError("Source factories cannot be shared between contexts");
        }
        if (this._sourceFactory != null) {
            this._sourceFactory.context = null;
        }
        factory.context = this;
        this._sourceFactory = factory;
        ((_53_)=>(!!_53_)?_53_.dispose():null)(this._cache);
        this._cache = this.createCacheFromSourceFactory(factory);
        for(let workManager of this.workManagers) {
            workManager.onSourceFactoryChanged();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sources() : core.DartList<any> {
        return this._cache.sources.toList();
    }
    get sourcesNeedingProcessing() : core.DartList<any> {
        let sources : core.DartHashSet<any> = new core.DartHashSet<any>();
        let hintsEnabled : boolean = this._options.hint;
        let lintsEnabled : boolean = this._options.lint;
        let iterator : any = this._privatePartition.iterator();
        while (iterator.moveNext()){
            let target : any = iterator.key;
            if (is(target, any)) {
                this._getSourcesNeedingProcessing(target,iterator.value,false,hintsEnabled,lintsEnabled,sources);
            }
        }
        return new core.DartList.from(sources);
    }
    get test_priorityOrder() : core.DartList<any> {
        return this._priorityOrder;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeProvider() : any {
        this._typeProvider = ( this._typeProvider ) || ( this.getResult(AnalysisContextTarget.request,TYPE_PROVIDER) );
        if (this._typeProvider != null) {
            return this._typeProvider;
        }
        /* TODO (AssertStatementImpl) : assert (!driver.isTaskRunning); */;
        let coreSource : any = this.sourceFactory.forUri(DartSdk.DART_CORE);
        if (op(Op.EQUALS,coreSource,null)) {
            throw new bare.createInstance(any,null,"Could not create a source for dart:core");
        }
        let coreElement : any = this.computeLibraryElement(coreSource);
        if (op(Op.EQUALS,coreElement,null)) {
            throw new bare.createInstance(any,null,"Could not create an element for dart:core");
        }
        let asyncSource : any = this.sourceFactory.forUri(DartSdk.DART_ASYNC);
        if (op(Op.EQUALS,asyncSource,null)) {
            throw new bare.createInstance(any,null,"Could not create a source for dart:async");
        }
        let asyncElement : any = this.computeLibraryElement(asyncSource);
        if (op(Op.EQUALS,asyncElement,null)) {
            throw new bare.createInstance(any,null,"Could not create an element for dart:async");
        }
        this._typeProvider = new bare.createInstance(any,null,coreElement,asyncElement);
        return this._typeProvider;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set typeProvider(typeProvider : any) {
        this._typeProvider = typeProvider;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get typeSystem() : any {
        if (op(Op.EQUALS,this._typeSystem,null)) {
            this._typeSystem = TypeSystem.create(this);
        }
        return this._typeSystem;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    aboutToComputeResult(entry : any,result : any) : boolean {
        return PerformanceStatistics.summary.makeCurrentWhile(() =>  {
            if (this.resultProvider != null && this.resultProvider.compute(entry,result)) {
                return true;
            }
            let dartSdk : any = this.sourceFactory.dartSdk;
            if (dartSdk != null) {
                let sdkContext : any = dartSdk.context;
                if (!core.identical(sdkContext,this) && is(sdkContext, any)) {
                    return sdkContext.aboutToComputeResult(entry,result);
                }
            }
            return false;
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addListener(listener : any) : void {
        if (!this._listeners.contains(listener)) {
            this._listeners.add(listener);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyAnalysisDelta(delta : any) : void {
        let changeSet : any = new bare.createInstance(any,null);
        delta.analysisLevels.forEach((source : any,level : any) =>  {
            if (op(Op.EQUALS,level,AnalysisLevel.NONE)) {
                changeSet.removedSource(source);
            }else {
                changeSet.addedSource(source);
            }
        });
        this.applyChanges(changeSet);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyChanges(changeSet : any) : void {
        if (changeSet.isEmpty) {
            return;
        }
        let removedSources : core.DartList<any> = changeSet.removedSources.toList();
        for(let container of changeSet.removedContainers) {
            this._addSourcesInContainer(removedSources,container);
        }
        for(let source of changeSet.addedSources) {
            this._sourceAvailable(source);
        }
        let changedSources : core.DartList<any> = changeSet.changedSources.where((s : any) =>  {
            return op(Op.EQUALS,this._contentCache.getContents(s),null);
        }).toList();
        for(let source of changedSources) {
            this._sourceChanged(source);
        }
        changeSet.changedContents.forEach((key : any,value : string) =>  {
            this._contentsChanged(key,value,false);
        });
        changeSet.changedRanges.forEach((source : any,change : any) =>  {
            this._contentRangeChanged(source,change.contents,change.offset,change.oldLength,change.newLength);
        });
        for(let source of removedSources) {
            this._sourceRemoved(source);
        }
        for(let workManager of this.workManagers) {
            workManager.applyChange(changeSet.addedSources,changedSources,removedSources);
        }
        this._onSourcesChangedController.add(new bare.createInstance(any,null,changeSet));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeDocumentationComment(element : any) : string {
        return ((t)=>(!!t)?t.documentationComment:null)(element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeErrors(source : any) : core.DartList<any> {
        let name : string = source.shortName;
        if (AnalysisEngine.isHtmlFileName(name)) {
            return this.computeResult(source,HTML_ERRORS);
        }
        return this.computeResult(source,DART_ERRORS);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeExportedLibraries(source : any) : core.DartList<any> {
        return this.computeResult(source,EXPORTED_LIBRARIES);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeImportedLibraries(source : any) : core.DartList<any> {
        return this.computeResult(source,EXPLICITLY_IMPORTED_LIBRARIES);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeKindOf(source : any) : any {
        let name : string = source.shortName;
        if (AnalysisEngine.isDartFileName(name)) {
            return this.computeResult(source,SOURCE_KIND);
        }else if (AnalysisEngine.isHtmlFileName(name)) {
            return SourceKind.HTML;
        }
        return SourceKind.UNKNOWN;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeLibraryElement(source : any) : any {
        return this.computeResult(source,LIBRARY_ELEMENT);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeLineInfo(source : any) : any {
        return this.computeResult(source,LINE_INFO);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeResolvedCompilationUnitAsync(unitSource : any,librarySource : any) : any {
        if (!AnalysisEngine.isDartFileName(unitSource.shortName) || !AnalysisEngine.isDartFileName(librarySource.shortName)) {
            return new bare.createInstance(any,null,new bare.createInstance(any,null));
        }
        return new AnalysisFutureHelper<any>(this,new bare.createInstance(any,null,librarySource,unitSource),RESOLVED_UNIT).computeAsync();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeResult(target : any,descriptor : any) : core.DartObject {
        /* TODO (AssertStatementImpl) : assert (!driver.isTaskRunning); */;
        let entry : any = this.getCacheEntry(target);
        let state : any = entry.getState(descriptor);
        if (op(Op.EQUALS,state,CacheState.FLUSHED) || op(Op.EQUALS,state,CacheState.INVALID)) {
            let success : boolean = this.aboutToComputeResult(entry,descriptor);
            if (success) {
                return entry.getValue(descriptor);
            }
            this.driver.computeResult(target,descriptor);
            entry = this.getCacheEntry(target);
        }
        state = entry.getState(descriptor);
        if (op(Op.EQUALS,state,CacheState.ERROR)) {
            throw new bare.createInstance(any,null,`Cannot compute ${descriptor} for ${target}`,entry.exception);
        }
        return entry.getValue(descriptor);
    }
    createCacheFromSourceFactory(factory : any) : any {
        var createCache : () => any = () : any =>  {
            if (op(Op.EQUALS,factory,null)) {
                return new bare.createInstance(any,null,new core.DartList.literal<any>(this._privatePartition));
            }
            if (!this.useSdkCachePartition) {
                return new bare.createInstance(any,null,new core.DartList.literal<any>(this._privatePartition));
            }
            let sdk : any = factory.dartSdk;
            if (op(Op.EQUALS,sdk,null)) {
                return new bare.createInstance(any,null,new core.DartList.literal<any>(this._privatePartition));
            }
            return new bare.createInstance(any,null,new core.DartList.literal<any>(AnalysisEngine.instance.partitionManager.forSdk(sdk),this._privatePartition));
        };
        let cache : any = createCache();
        ((_54_)=>(!!_54_)?_54_.cancel():null)(this.onResultInvalidatedSubscription);
        this.onResultInvalidatedSubscription = cache.onResultInvalidated.listen((event : any) =>  {
            this.onResultInvalidated.add(event);
            let controller : async.DartStreamController<any> = this._resultChangedControllers.get(event.descriptor);
            if (controller != null) {
                controller.add(new bare.createInstance(any,null,this,event.entry.target,event.descriptor,event.value,false));
            }
        });
        return cache;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : void {
        this._disposed = true;
        for(let pendingFutures of this._pendingFutureTargets.values) {
            for(let pendingFuture of pendingFutures) {
                pendingFuture.forciblyComplete();
            }
        }
        this._pendingFutureTargets.clear();
        this._privatePartition.dispose();
        this._cache.dispose();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    ensureResolvedDartUnits(unitSource : any) : core.DartList<any> {
        let units : core.DartList<any> = new core.DartList.literal<any>();
        let containingLibraries : core.DartList<any> = this.getLibrariesContaining(unitSource);
        for(let librarySource of containingLibraries) {
            let target : any = new bare.createInstance(any,null,librarySource,unitSource);
            let unit : any = this.getResult(target,RESOLVED_UNIT);
            if (op(Op.EQUALS,unit,null)) {
                units = null;
                break;
            }
            units.add(unit);
        }
        if (units != null) {
            return units;
        }
        for(let librarySource of containingLibraries) {
            let target : any = new bare.createInstance(any,null,librarySource,unitSource);
            this.dartWorkManager.addPriorityResult(target,RESOLVED_UNIT);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    exists(source : any) : boolean {
        if (op(Op.EQUALS,source,null)) {
            return false;
        }
        let overriddenExists : boolean = this._contentCache.getExists(source);
        if (overriddenExists != null) {
            return overriddenExists;
        }
        return source.exists();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getCacheEntry(target : any) : any {
        let entry : any = this._cache.get(target);
        if (op(Op.EQUALS,entry,null)) {
            entry = new bare.createInstance(any,null,target);
            let event : any = null;
            if (is(target, any)) {
                entry.modificationTime = this.getModificationStamp(target);
                event = new bare.createInstance(any,null,target,true);
            }
            this._cache.put(entry);
            if (event != null) {
                this._implicitAnalysisEventsController.add(event);
            }
        }
        return entry;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getCompilationUnitElement(unitSource : any,librarySource : any) : any {
        let target : any = new bare.createInstance(any,null,librarySource,unitSource);
        return this.getResult(target,COMPILATION_UNIT_ELEMENT);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getConfigurationData(key : any) : core.DartObject {
        return ((op(Op.INDEX,this._configurationData,key) || ((t)=>(!!t)?t.defaultValue:null)(key))) as core.DartObject;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getContents(source : any) : any {
        let contents : string = this._contentCache.getContents(source);
        if (contents != null) {
            return new bare.createInstance(any,null,this._contentCache.getModificationStamp(source),contents);
        }
        return source.contents;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getContextFor(source : any) : any {
        return (this._cache.getContextFor(source) || this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getElement(location : any) : any {
        try {
            let components : core.DartList<string> = location.components;
            let source : any = this._computeSourceFromEncoding(components[0]);
            let sourceName : string = source.shortName;
            if (AnalysisEngine.isDartFileName(sourceName)) {
                let element : any = this.computeLibraryElement(source) as any;
                for(let i : number = 1; i < components.length; i++){
                    if (op(Op.EQUALS,element,null)) {
                        return null;
                    }
                    element = element.getChild(components[i]);
                }
                return element;
            }
        } catch (__error__) {

            {
                let exception = __error__;
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getErrors(source : any) : any {
        let allErrors : core.DartList<any> = new core.DartList.literal<any>();
        for(let workManager of this.workManagers) {
            let errors : core.DartList<any> = workManager.getErrors(source);
            allErrors.addAll(errors);
        }
        let lineInfo : any = this.getLineInfo(source);
        return new bare.createInstance(any,null,allErrors,lineInfo);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getHtmlFilesReferencing(source : any) : core.DartList<any> {
        if (!AnalysisEngine.isDartFileName(source.shortName)) {
            return Source.EMPTY_LIST;
        }
        let htmlSources : core.DartList<any> = new core.DartList.literal<any>();
        let librarySources : core.DartList<any> = this.getLibrariesContaining(source);
        for(let source of this._cache.sources) {
            if (AnalysisEngine.isHtmlFileName(source.shortName)) {
                let referencedLibraries : core.DartList<any> = this.getResult(source,REFERENCED_LIBRARIES);
                if (this._containsAny(referencedLibraries,librarySources)) {
                    htmlSources.add(source);
                }
            }
        }
        if (htmlSources.isEmpty) {
            return Source.EMPTY_LIST;
        }
        return htmlSources;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getKindOf(source : any) : any {
        let name : string = source.shortName;
        if (AnalysisEngine.isDartFileName(name)) {
            return this.getResult(source,SOURCE_KIND);
        }else if (AnalysisEngine.isHtmlFileName(name)) {
            return SourceKind.HTML;
        }
        return SourceKind.UNKNOWN;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLibrariesContaining(source : any) : core.DartList<any> {
        let kind : any = this.getKindOf(source);
        if (op(Op.EQUALS,kind,SourceKind.LIBRARY)) {
            return new core.DartList.literal<any>(source);
        }
        return this.dartWorkManager.getLibrariesContainingPart(source);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLibrariesDependingOn(librarySource : any) : core.DartList<any> {
        let dependentLibraries : core.DartList<any> = new core.DartList.literal<any>();
        for(let source of this._cache.sources) {
            let entry : any = this._cache.get(source);
            if (op(Op.EQUALS,entry.getValue(SOURCE_KIND),SourceKind.LIBRARY)) {
                if (this._contains(entry.getValue(EXPORTED_LIBRARIES),librarySource)) {
                    dependentLibraries.add(source);
                }
                if (this._contains(entry.getValue(IMPORTED_LIBRARIES),librarySource)) {
                    dependentLibraries.add(source);
                }
            }
        }
        if (dependentLibraries.isEmpty) {
            return Source.EMPTY_LIST;
        }
        return dependentLibraries;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLibrariesReferencedFromHtml(htmlSource : any) : core.DartList<any> {
        let entry : any = this._cache.get(htmlSource);
        if (entry != null) {
            return entry.getValue(REFERENCED_LIBRARIES);
        }
        return Source.EMPTY_LIST;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLibraryElement(source : any) : any {
        return this.getResult(source,LIBRARY_ELEMENT);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLineInfo(source : any) : any {
        return this.getResult(source,LINE_INFO);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getModificationStamp(source : any) : number {
        let stamp : number = this._contentCache.getModificationStamp(source);
        if (stamp != null) {
            return stamp;
        }
        return source.modificationStamp;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getNotice(source : any) : any {
        let notice : any = op(Op.INDEX,this._pendingNotices,source);
        if (op(Op.EQUALS,notice,null)) {
            notice = new bare.createInstance(any,null,source);
            op(Op.INDEX_ASSIGN,this._pendingNotices,source,notice);
        }
        return notice;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getPublicNamespace(library : any) : any {
        let builder : any = new bare.createInstance(any,null);
        return builder.createPublicNamespaceForLibrary(library);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getResolvedCompilationUnit(unitSource : any,library : any) : any {
        if (op(Op.EQUALS,library,null) || !AnalysisEngine.isDartFileName(unitSource.shortName)) {
            return null;
        }
        return this.getResolvedCompilationUnit2(unitSource,library.source);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getResolvedCompilationUnit2(unitSource : any,librarySource : any) : any {
        if (!AnalysisEngine.isDartFileName(unitSource.shortName) || !AnalysisEngine.isDartFileName(librarySource.shortName)) {
            return null;
        }
        return this.getResult(new bare.createInstance(any,null,librarySource,unitSource),RESOLVED_UNIT);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getResult(target : any,result : any) : core.DartObject {
        return this._cache.getValue(target,result);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getSourcesWithFullName(path : string) : core.DartList<any> {
        return this.analysisCache.getSourcesWithFullName(path);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleContentsChanged(source : any,originalContents : string,newContents : string,notify : boolean) : boolean {
        let entry : any = this._cache.get(source);
        if (op(Op.EQUALS,entry,null)) {
            return false;
        }
        if (originalContents == null) {
            try {
                let fileContents : any = source.contents;
                if (op(Op.EQUALS,fileContents.modificationTime,entry.modificationTime)) {
                    originalContents = fileContents.data;
                }
            } catch (__error__) {

                {
                    let e = __error__;
                }
            }
        }
        let changed : boolean = newContents != originalContents;
        if (newContents != null) {
            if (changed) {
                entry.modificationTime = this._contentCache.getModificationStamp(source);
                this._sourceChanged(source,{
                    compareWithOld : false});
                entry.setValue(CONTENT,newContents,TargetedResult.EMPTY_LIST);
            }else {
                entry.modificationTime = this._contentCache.getModificationStamp(source);
            }
        }else if (originalContents != null) {
            try {
                let fileContents : any = this.getContents(source);
                newContents = fileContents.data;
                entry.modificationTime = fileContents.modificationTime;
                if (newContents == originalContents) {
                    entry.setValue(CONTENT,newContents,TargetedResult.EMPTY_LIST);
                    changed = false;
                }
            } catch (__error__) {

                {
                    let e = __error__;
                }
            }
            if (changed) {
                if (newContents == null) {
                    this._sourceChanged(source);
                }
            }
        }
        if (notify && changed) {
            this._onSourcesChangedController.add(new bare.createInstance(any,null,source,newContents));
        }
        return changed;
    }
    invalidateCachedResults() : void {
        ((_55_)=>(!!_55_)?_55_.dispose():null)(this._cache);
        this._cache = this.createCacheFromSourceFactory(this._sourceFactory);
        for(let workManager of this.workManagers) {
            workManager.onAnalysisOptionsChanged();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    invalidateLibraryHints(librarySource : any) : void {
        let sources : core.DartList<any> = this.getResult(librarySource,UNITS);
        if (sources != null) {
            for(let source of sources) {
                this.getCacheEntry(source).setState(HINTS,CacheState.INVALID);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isClientLibrary(librarySource : any) : boolean {
        let entry : any = this._cache.get(librarySource);
        return entry != null && this._referencesDartHtml(librarySource) && entry.getValue(IS_LAUNCHABLE);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isServerLibrary(librarySource : any) : boolean {
        let entry : any = this._cache.get(librarySource);
        return entry != null && !this._referencesDartHtml(librarySource) && entry.getValue(IS_LAUNCHABLE);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onResultChanged(descriptor : any) : async.DartStream<any> {
        this.driver.onResultComputed(descriptor).listen((event : any) =>  {
            ((_56_)=>(!!_56_)?_56_.add(event):null)(this._resultChangedControllers.get(descriptor));
        });
        return this._resultChangedControllers.putIfAbsent(descriptor,() =>  {
            return new async.DartStreamController.broadcast({
                sync : true});
        }).stream;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    onResultComputed(descriptor : any) : async.DartStream<any> {
        return this.onResultChanged(descriptor).where((event : any) =>  {
            return event.wasComputed;
        }).map((event : any) =>  {
            return new bare.createInstance(any,null,event.context,event.descriptor,event.target,event.value);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseCompilationUnit(source : any) : any {
        if (!AnalysisEngine.isDartFileName(source.shortName)) {
            return null;
        }
        try {
            this.getContents(source);
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                throw new bare.createInstance(any,null,`Could not get contents of ${source}`,new bare.createInstance(any,null,exception,stackTrace));
            }
        }
        return this.computeResult(source,PARSED_UNIT);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseHtmlDocument(source : any) : any {
        if (!AnalysisEngine.isHtmlFileName(source.shortName)) {
            return null;
        }
        return this.computeResult(source,HTML_DOCUMENT);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performAnalysisTask() : any {
        return PerformanceStatistics.performAnalysis.makeCurrentWhile(() =>  {
            this._evaluatePendingFutures();
            let done : boolean = !this.driver.performAnalysisTask();
            let notices : core.DartList<any> = this._getChangeNotices(done);
            if (notices != null) {
                let noticeCount : number = notices.length;
                for(let i : number = 0; i < noticeCount; i++){
                    let notice : any = notices[i];
                    this._notifyErrors(notice.source,notice.errors,notice.lineInfo);
                }
            }
            return new bare.createInstance(any,null,notices,-1,'',-1);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    recordLibraryElements(elementMap : core.DartMap<any,any>) : void {
        elementMap.forEach((librarySource : any,library : any) =>  {
            let entry : any = this.getCacheEntry(librarySource);
            var setValue : (result : any,value : any) => any = (result : any,value : any) =>  {
                entry.setValue(result,value,TargetedResult.EMPTY_LIST);
            };
            setValue(BUILD_DIRECTIVES_ERRORS,AnalysisError.NO_ERRORS);
            setValue(BUILD_LIBRARY_ERRORS,AnalysisError.NO_ERRORS);
            setValue(COMPILATION_UNIT_ELEMENT,library.definingCompilationUnit);
            entry.setState(CONTENT,CacheState.FLUSHED);
            setValue(EXPORTED_LIBRARIES,Source.EMPTY_LIST);
            setValue(IMPORTED_LIBRARIES,Source.EMPTY_LIST);
            setValue(INCLUDED_PARTS,Source.EMPTY_LIST);
            setValue(IS_LAUNCHABLE,false);
            setValue(LIBRARY_ELEMENT,library);
            setValue(LIBRARY_ELEMENT1,library);
            setValue(LIBRARY_ELEMENT2,library);
            setValue(LIBRARY_ELEMENT3,library);
            setValue(LIBRARY_ELEMENT4,library);
            setValue(LIBRARY_ELEMENT5,library);
            setValue(LIBRARY_ELEMENT6,library);
            setValue(LIBRARY_ELEMENT7,library);
            setValue(LIBRARY_ELEMENT8,library);
            setValue(LIBRARY_ELEMENT9,library);
            setValue(LINE_INFO,new bare.createInstance(any,null,new core.DartList.literal<number>(0)));
            setValue(PARSE_ERRORS,AnalysisError.NO_ERRORS);
            entry.setState(PARSED_UNIT,CacheState.FLUSHED);
            entry.setState(RESOLVE_TYPE_NAMES_ERRORS,CacheState.FLUSHED);
            entry.setState(RESOLVE_TYPE_BOUNDS_ERRORS,CacheState.FLUSHED);
            setValue(SCAN_ERRORS,AnalysisError.NO_ERRORS);
            setValue(SOURCE_KIND,SourceKind.LIBRARY);
            entry.setState(TOKEN_STREAM,CacheState.FLUSHED);
            setValue(UNITS,new core.DartList.literal<any>(librarySource));
            let unit : any = new bare.createInstance(any,null,librarySource,librarySource);
            entry = this.getCacheEntry(unit);
            setValue(HINTS,AnalysisError.NO_ERRORS);
            setValue(LINTS,AnalysisError.NO_ERRORS);
            setValue(LIBRARY_UNIT_ERRORS,AnalysisError.NO_ERRORS);
            setValue(RESOLVE_DIRECTIVES_ERRORS,AnalysisError.NO_ERRORS);
            setValue(RESOLVE_TYPE_NAMES_ERRORS,AnalysisError.NO_ERRORS);
            setValue(RESOLVE_UNIT_ERRORS,AnalysisError.NO_ERRORS);
            entry.setState(RESOLVED_UNIT,CacheState.FLUSHED);
            entry.setState(RESOLVED_UNIT1,CacheState.FLUSHED);
            entry.setState(RESOLVED_UNIT2,CacheState.FLUSHED);
            entry.setState(RESOLVED_UNIT3,CacheState.FLUSHED);
            entry.setState(RESOLVED_UNIT4,CacheState.FLUSHED);
            entry.setState(RESOLVED_UNIT5,CacheState.FLUSHED);
            entry.setState(RESOLVED_UNIT6,CacheState.FLUSHED);
            entry.setState(RESOLVED_UNIT7,CacheState.FLUSHED);
            entry.setState(RESOLVED_UNIT8,CacheState.FLUSHED);
            entry.setState(RESOLVED_UNIT9,CacheState.FLUSHED);
            entry.setState(RESOLVED_UNIT10,CacheState.FLUSHED);
            entry.setState(RESOLVED_UNIT11,CacheState.FLUSHED);
            entry.setState(RESOLVED_UNIT12,CacheState.FLUSHED);
            setValue(STRONG_MODE_ERRORS,AnalysisError.NO_ERRORS);
            setValue(VARIABLE_REFERENCE_ERRORS,AnalysisError.NO_ERRORS);
            setValue(VERIFY_ERRORS,AnalysisError.NO_ERRORS);
        });
        let entry : any = this.getCacheEntry(AnalysisContextTarget.request);
        entry.setValue(TYPE_PROVIDER,this.typeProvider,TargetedResult.EMPTY_LIST);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeListener(listener : any) : void {
        this._listeners.remove(listener);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveCompilationUnit(unitSource : any,library : any) : any {
        if (op(Op.EQUALS,library,null)) {
            return null;
        }
        return this.resolveCompilationUnit2(unitSource,library.source);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveCompilationUnit2(unitSource : any,librarySource : any) : any {
        return this.computeResult(new bare.createInstance(any,null,librarySource,unitSource),RESOLVED_UNIT);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setChangedContents(source : any,contents : string,offset : number,oldLength : number,newLength : number) : void {
        if (this._contentRangeChanged(source,contents,offset,oldLength,newLength)) {
            this._onSourcesChangedController.add(new bare.createInstance(any,null,source,contents,offset,oldLength,newLength));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setConfigurationData(key : any,data : core.DartObject) : void {
        op(Op.INDEX_ASSIGN,this._configurationData,key,data);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setContents(source : any,contents : string) : void {
        this._contentsChanged(source,contents,true);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldErrorsBeAnalyzed(source : any) : boolean {
        let entry : any = this.analysisCache.get(source);
        if (source.isInSystemLibrary) {
            return this._options.generateSdkErrors;
        }else if (!entry.explicitlyAdded) {
            return this._options.generateImplicitErrors;
        }else {
            return true;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_flushAstStructures(source : any) : void {
        let entry : any = this.getCacheEntry(source);
        entry.setState(PARSED_UNIT,CacheState.FLUSHED);
        entry.setState(RESOLVED_UNIT1,CacheState.FLUSHED);
        entry.setState(RESOLVED_UNIT2,CacheState.FLUSHED);
        entry.setState(RESOLVED_UNIT3,CacheState.FLUSHED);
        entry.setState(RESOLVED_UNIT4,CacheState.FLUSHED);
        entry.setState(RESOLVED_UNIT5,CacheState.FLUSHED);
        entry.setState(RESOLVED_UNIT6,CacheState.FLUSHED);
        entry.setState(RESOLVED_UNIT7,CacheState.FLUSHED);
        entry.setState(RESOLVED_UNIT8,CacheState.FLUSHED);
        entry.setState(RESOLVED_UNIT9,CacheState.FLUSHED);
        entry.setState(RESOLVED_UNIT10,CacheState.FLUSHED);
        entry.setState(RESOLVED_UNIT11,CacheState.FLUSHED);
        entry.setState(RESOLVED_UNIT12,CacheState.FLUSHED);
        entry.setState(RESOLVED_UNIT,CacheState.FLUSHED);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitContentCache(visitor : any) : void {
        this._contentCache.accept(visitor);
    }
    _addSourcesInContainer(sources : core.DartList<any>,container : any) : void {
        for(let source of this._cache.sources) {
            if (container.contains(source)) {
                sources.add(source);
            }
        }
    }
    _cancelFuture(pendingFuture : PendingFuture<any>) : void {
        let pendingFutures : core.DartList<PendingFuture<any>> = op(Op.INDEX,this._pendingFutureTargets,pendingFuture.target);
        if (pendingFutures != null) {
            pendingFutures.remove(pendingFuture);
            if (pendingFutures.isEmpty) {
                this._pendingFutureTargets.remove(pendingFuture.target);
            }
        }
    }
    _computeSourceFromEncoding(encoding : string) : any {
        return this._sourceFactory.fromEncoding(encoding);
    }
    _contains(sources : core.DartList<any>,targetSource : any) : boolean {
        for(let source of sources) {
            if (op(Op.EQUALS,source,targetSource)) {
                return true;
            }
        }
        return false;
    }
    _containsAny(sources : core.DartList<any>,targetSources : core.DartList<any>) : boolean {
        for(let targetSource of targetSources) {
            if (this._contains(sources,targetSource)) {
                return true;
            }
        }
        return false;
    }
    _contentRangeChanged(source : any,contents : string,offset : number,oldLength : number,newLength : number) : boolean {
        let changed : boolean = false;
        let originalContents : string = this._contentCache.setContents(source,contents);
        if (contents != null) {
            if (contents != originalContents) {
                this._sourceChanged(source);
                changed = true;
                let entry : any = this._cache.get(source);
                if (entry != null) {
                    entry.modificationTime = this._contentCache.getModificationStamp(source);
                    entry.setValue(CONTENT,contents,TargetedResult.EMPTY_LIST);
                }
            }
        }else if (originalContents != null) {
            this._sourceChanged(source);
            changed = true;
        }
        return changed;
    }
    _contentsChanged(source : any,contents : string,notify : boolean) : void {
        let originalContents : string = this._contentCache.setContents(source,contents);
        this.handleContentsChanged(source,originalContents,contents,notify);
    }
    _createCacheEntry(source : any,explicitlyAdded : boolean) : any {
        let entry : any = new bare.createInstance(any,null,source);
        entry.modificationTime = this.getModificationStamp(source);
        entry.explicitlyAdded = explicitlyAdded;
        this._cache.put(entry);
        if (!explicitlyAdded) {
            this._implicitAnalysisEventsController.add(new bare.createInstance(any,null,source,true));
        }
        return entry;
    }
    _entriesFor(source : any) : core.DartList<any> {
        let entries : core.DartList<any> = new core.DartList.literal<any>();
        let iterator : any = this._cache.iterator();
        while (iterator.moveNext()){
            if (op(Op.EQUALS,iterator.key.source,source)) {
                entries.add(iterator.value);
            }
        }
        return entries;
    }
    _evaluatePendingFutures() : void {
        for(let target of this._pendingFutureTargets.keys) {
            let cacheEntry : any = this._cache.get(target);
            let pendingFutures : core.DartList<PendingFuture<any>> = op(Op.INDEX,this._pendingFutureTargets,target);
            for(let i : number = 0; i < pendingFutures.length; ){
                if (op(Op.EQUALS,cacheEntry,null)) {
                    pendingFutures[i].forciblyComplete();
                    pendingFutures.removeAt(i);
                }else if (pendingFutures[i].evaluate(cacheEntry)) {
                    pendingFutures.removeAt(i);
                }else {
                    i++;
                }
            }
        }
    }
    _getChangeNotices(nullIfEmpty : boolean) : core.DartList<any> {
        if (this._pendingNotices.isEmpty) {
            if (nullIfEmpty) {
                return null;
            }
            return ChangeNoticeImpl.EMPTY_LIST;
        }
        let notices : core.DartList<any> = new core.DartList.from(this._pendingNotices.values);
        this._pendingNotices.clear();
        return notices;
    }
    _getSources(kind : any) : core.DartList<any> {
        let sources : core.DartList<any> = new core.DartList.literal<any>();
        if (op(Op.EQUALS,kind,SourceKind.LIBRARY) || op(Op.EQUALS,kind,SourceKind.PART)) {
            for(let source of this._cache.sources) {
                let entry : any = this._cache.get(source);
                if (op(Op.EQUALS,entry.getValue(SOURCE_KIND),kind)) {
                    sources.add(source);
                }
            }
        }else if (op(Op.EQUALS,kind,SourceKind.HTML)) {
            for(let source of this._cache.sources) {
                if (AnalysisEngine.isHtmlFileName(source.shortName)) {
                    sources.add(source);
                }
            }
        }
        if (sources.isEmpty) {
            return Source.EMPTY_LIST;
        }
        return sources;
    }
    _getSourcesNeedingProcessing(source : any,entry : any,isPriority : boolean,hintsEnabled : boolean,lintsEnabled : boolean,sources : core.DartHashSet<any>) : void {
        let state : any = entry.getState(CONTENT);
        if (op(Op.EQUALS,state,CacheState.INVALID) || (isPriority && op(Op.EQUALS,state,CacheState.FLUSHED))) {
            sources.add(source);
            return;
        }else if (op(Op.EQUALS,state,CacheState.ERROR)) {
            return;
        }
        state = entry.getState(SOURCE_KIND);
        if (op(Op.EQUALS,state,CacheState.INVALID) || (isPriority && op(Op.EQUALS,state,CacheState.FLUSHED))) {
            sources.add(source);
            return;
        }else if (op(Op.EQUALS,state,CacheState.ERROR)) {
            return;
        }
        let kind : any = entry.getValue(SOURCE_KIND);
        if (op(Op.EQUALS,kind,SourceKind.LIBRARY) || op(Op.EQUALS,kind,SourceKind.PART)) {
            state = entry.getState(SCAN_ERRORS);
            if (op(Op.EQUALS,state,CacheState.INVALID) || (isPriority && op(Op.EQUALS,state,CacheState.FLUSHED))) {
                sources.add(source);
                return;
            }else if (op(Op.EQUALS,state,CacheState.ERROR)) {
                return;
            }
            state = entry.getState(PARSE_ERRORS);
            if (op(Op.EQUALS,state,CacheState.INVALID) || (isPriority && op(Op.EQUALS,state,CacheState.FLUSHED))) {
                sources.add(source);
                return;
            }else if (op(Op.EQUALS,state,CacheState.ERROR)) {
                return;
            }
            for(let librarySource of this.getLibrariesContaining(source)) {
                let libraryEntry : any = this._cache.get(librarySource);
                state = libraryEntry.getState(LIBRARY_ELEMENT);
                if (op(Op.EQUALS,state,CacheState.INVALID) || (isPriority && op(Op.EQUALS,state,CacheState.FLUSHED))) {
                    sources.add(source);
                    return;
                }else if (op(Op.EQUALS,state,CacheState.ERROR)) {
                    return;
                }
                let unitEntry : any = this._cache.get(new bare.createInstance(any,null,librarySource,source));
                state = unitEntry.getState(RESOLVED_UNIT);
                if (op(Op.EQUALS,state,CacheState.INVALID) || (isPriority && op(Op.EQUALS,state,CacheState.FLUSHED))) {
                    sources.add(source);
                    return;
                }else if (op(Op.EQUALS,state,CacheState.ERROR)) {
                    return;
                }
                if (this.shouldErrorsBeAnalyzed(source)) {
                    state = unitEntry.getState(VERIFY_ERRORS);
                    if (op(Op.EQUALS,state,CacheState.INVALID) || (isPriority && op(Op.EQUALS,state,CacheState.FLUSHED))) {
                        sources.add(source);
                        return;
                    }else if (op(Op.EQUALS,state,CacheState.ERROR)) {
                        return;
                    }
                    if (hintsEnabled) {
                        state = unitEntry.getState(HINTS);
                        if (op(Op.EQUALS,state,CacheState.INVALID) || (isPriority && op(Op.EQUALS,state,CacheState.FLUSHED))) {
                            sources.add(source);
                            return;
                        }else if (op(Op.EQUALS,state,CacheState.ERROR)) {
                            return;
                        }
                    }
                    if (lintsEnabled) {
                        state = unitEntry.getState(LINTS);
                        if (op(Op.EQUALS,state,CacheState.INVALID) || (isPriority && op(Op.EQUALS,state,CacheState.FLUSHED))) {
                            sources.add(source);
                            return;
                        }else if (op(Op.EQUALS,state,CacheState.ERROR)) {
                            return;
                        }
                    }
                }
            }
        }
    }
    _logInformation(message : string) : void {
        AnalysisEngine.instance.logger.logInformation(message);
    }
    _notEqual(first : core.DartList<any>,second : core.DartList<any>) : boolean {
        let length : number = first.length;
        if (length != second.length) {
            return true;
        }
        for(let i : number = 0; i < length; i++){
            if (first[i] != second[i]) {
                return true;
            }
        }
        return false;
    }
    _notifyErrors(source : any,errors : core.DartList<any>,lineInfo : any) : void {
        let count : number = this._listeners.length;
        for(let i : number = 0; i < count; i++){
            this._listeners[i].computedErrors(this,source,errors,lineInfo);
        }
    }
    _referencesDartHtml(librarySource : any) : boolean {
        let htmlSource : any = this.sourceFactory.forUri(DartSdk.DART_HTML);
        let checkedSources : core.DartSet<any> = new core.DartSet<any>();
        var _refHtml : (source : any) => boolean = (source : any) : boolean =>  {
            if (!checkedSources.add(source)) {
                return false;
            }
            if (op(Op.EQUALS,source,htmlSource)) {
                return true;
            }
            let library : any = this._cache.getValue(source,LIBRARY_ELEMENT);
            if (library != null) {
                return library.importedLibraries.any((x : any) =>  {
                    return _refHtml(x.source);
                }) || library.exportedLibraries.any((x : any) =>  {
                    return _refHtml(x.source);
                });
            }
            return false;
        };
        return _refHtml(librarySource);
    }
    _removeFromCache(source : any) : void {
        let entry : any = this._cache.remove(source);
        if (entry != null && !entry.explicitlyAdded) {
            this._implicitAnalysisEventsController.add(new bare.createInstance(any,null,source,false));
        }
    }
    _removeFromPriorityOrder(source : any) : void {
        let count : number = this._priorityOrder.length;
        let newOrder : core.DartList<any> = new core.DartList.literal<any>();
        for(let i : number = 0; i < count; i++){
            if (this._priorityOrder[i] != source) {
                newOrder.add(this._priorityOrder[i]);
            }
        }
        if (newOrder.length < count) {
            this.analysisPriorityOrder = newOrder;
        }
    }
    _sourceAvailable(source : any) : void {
        this.driver.reset();
        let entry : any = this._cache.get(source);
        if (op(Op.EQUALS,entry,null)) {
            this._createCacheEntry(source,true);
        }else {
            entry.explicitlyAdded = true;
            entry.modificationTime = this.getModificationStamp(source);
            entry.setState(CONTENT,CacheState.INVALID);
            entry.setState(MODIFICATION_TIME,CacheState.INVALID);
        }
    }
    _sourceChanged(source : any,_namedArguments? : {compareWithOld? : boolean}) : void {
        let {compareWithOld} = Object.assign({
            "compareWithOld" : true}, _namedArguments );
        let entry : any = this._cache.get(source);
        if (op(Op.EQUALS,entry,null)) {
            return;
        }
        let oldContents : string = compareWithOld ? entry.getValue(CONTENT) : null;
        entry.setState(CONTENT,CacheState.FLUSHED);
        let fileContents : any;
        try {
            fileContents = this.getContents(source);
        } catch (__error__) {

            {
                let e = __error__;
            }
        }
        {
            let time : number = (((t)=>(!!t)?t.modificationTime:null)(fileContents) || -1);
            for(let entry of this._entriesFor(source)) {
                entry.modificationTime = time;
            }
        }
        if (oldContents != null && op(Op.EQUALS,((t)=>(!!t)?t.data:null)(fileContents),oldContents)) {
            return;
        }
        this.driver.reset();
        {
            entry.setState(CONTENT,CacheState.INVALID);
            entry.setState(MODIFICATION_TIME,CacheState.INVALID);
            entry.setState(SOURCE_KIND,CacheState.INVALID);
        }
        for(let workManager of this.workManagers) {
            workManager.applyChange(Source.EMPTY_LIST,new core.DartList.literal<any>(source),Source.EMPTY_LIST);
        }
    }
    _sourceRemoved(source : any) : void {
        this.driver.reset();
        this._removeFromCache(source);
        this._removeFromPriorityOrder(source);
    }
    static _samePatchPaths(a : core.DartMap<string,core.DartList<string>>,b : core.DartMap<string,core.DartList<string>>) : boolean {
        if (a.length != b.length) return false;
        for(let key of a.keys) {
            if (!b.containsKey(key)) return false;
            let aValue = a.get(key);
            let bValue = b.get(key);
            if (aValue.length != bValue.length) return false;
            for(let i = 0; i < aValue.length; i++){
                if (aValue[i] != bValue[i]) return false;
            }
        }
        return true;
    }
}

export namespace AnalysisFutureHelper {
    export type Constructors = 'AnalysisFutureHelper';
    export type Interface<T> = Omit<AnalysisFutureHelper<T>, Constructors>;
}
@DartClass
export class AnalysisFutureHelper<T> {
    _context : AnalysisContextImpl;

    _target : any;

    _descriptor : any;

    constructor(_context : AnalysisContextImpl,_target : any,_descriptor : any) {
    }
    @defaultConstructor
    AnalysisFutureHelper(_context : AnalysisContextImpl,_target : any,_descriptor : any) {
        this._context = _context;
        this._target = _target;
        this._descriptor = _descriptor;
    }
    computeAsync() : any {
        if (this._context.isDisposed) {
            return new bare.createInstance(any,null,new bare.createInstance(any,null));
        }
        let entry : any = this._context.getCacheEntry(this._target);
        let pendingFuture : PendingFuture<T> = new PendingFuture<T>(this._context,this._target,(entry : any) =>  {
            let state : any = entry.getState(this._descriptor);
            if (op(Op.EQUALS,state,CacheState.ERROR)) {
                throw entry.exception;
            }else if (op(Op.EQUALS,state,CacheState.INVALID)) {
                return null;
            }
            return entry.getValue(this._descriptor);
        });
        if (!pendingFuture.evaluate(entry)) {
            this._context._pendingFutureTargets.putIfAbsent(this._target,() =>  {
                return new core.DartList.literal<PendingFuture<any>>();
            }).add(pendingFuture);
            this._context.dartWorkManager.addPriorityResult(this._target,this._descriptor);
        }
        return pendingFuture.future;
    }
}

export namespace CacheConsistencyValidatorImpl {
    export type Constructors = 'CacheConsistencyValidatorImpl';
    export type Interface = Omit<CacheConsistencyValidatorImpl, Constructors>;
}
@DartClass
@Implements(any)
export class CacheConsistencyValidatorImpl implements any.Interface {
    context : AnalysisContextImpl;

    constructor(context : AnalysisContextImpl) {
    }
    @defaultConstructor
    CacheConsistencyValidatorImpl(context : AnalysisContextImpl) {
        this.context = context;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getSourcesToComputeModificationTimes() : core.DartList<any> {
        return this.context._privatePartition.sources.toList();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    sourceModificationTimesComputed(sources : core.DartList<any>,times : core.DartList<number>) : boolean {
        let timer : core.DartStopwatch = ((_) : core.DartStopwatch =>  {
            {
                _.start();
                return _;
            }
        })(new core.DartStopwatch());
        let changedSources : core.DartHashSet<any> = new core.DartHashSet<any>();
        let removedSources : core.DartHashSet<any> = new core.DartHashSet<any>();
        for(let i : number = 0; i < sources.length; i++){
            let source : any = sources[i];
            if (this.context._contentCache.getModificationStamp(source) != null) {
                continue;
            }
            let sourceTime : number = times[i];
            if (sourceTime == null) {
                continue;
            }
            let entry : any = this.context._privatePartition.get(source);
            if (entry != null) {
                if (entry.modificationTime != sourceTime) {
                    if (sourceTime == -1) {
                        removedSources.add(source);
                        PerformanceStatistics.cacheConsistencyValidationStatistics.numOfRemoved++;
                    }else {
                        changedSources.add(source);
                        PerformanceStatistics.cacheConsistencyValidationStatistics.numOfChanged++;
                    }
                }
            }
        }
        for(let source of changedSources) {
            this.context._sourceChanged(source);
        }
        for(let source of removedSources) {
            this.context._sourceRemoved(source);
        }
        if (changedSources.length > 0 || removedSources.length > 0) {
            let buffer : core.DartStringBuffer = new core.DartStringBuffer();
            buffer.write("Consistency check took ");
            buffer.write(timer.elapsedMilliseconds);
            buffer.writeln(" ms and found");
            buffer.write("  ");
            buffer.write(changedSources.length);
            buffer.writeln(" changed sources");
            buffer.write("  ");
            buffer.write(removedSources.length);
            buffer.write(" removed sources.");
            this.context._logInformation(buffer.toString());
        }
        return changedSources.isNotEmpty || removedSources.isNotEmpty;
    }
}

export namespace PartitionManager {
    export type Constructors = 'PartitionManager';
    export type Interface = Omit<PartitionManager, Constructors>;
}
@DartClass
export class PartitionManager {
    _sdkPartitions : core.DartHashMap<any,any>;

    clearCache() : void {
        this._sdkPartitions.clear();
    }
    forSdk(sdk : any) : any {
        let sdkContext : any = sdk.context;
        let partition : any = op(Op.INDEX,this._sdkPartitions,sdk);
        if (op(Op.EQUALS,partition,null)) {
            partition = new bare.createInstance(any,null,sdkContext);
            op(Op.INDEX_ASSIGN,this._sdkPartitions,sdk,partition);
        }
        return partition;
    }
    constructor() {
    }
    @defaultConstructor
    PartitionManager() {
        this._sdkPartitions = new core.DartHashMap<any,any>();
    }
}

export namespace PendingFuture {
    export type Constructors = 'PendingFuture';
    export type Interface<T> = Omit<PendingFuture<T>, Constructors>;
}
@DartClass
export class PendingFuture<T> {
    _context : AnalysisContextImpl;

    target : any;

    _computeValue : <T>(entry : any) => T;

    _completer : any;

    constructor(_context : AnalysisContextImpl,target : any,_computeValue : <T>(entry : any) => T) {
    }
    @defaultConstructor
    PendingFuture(_context : AnalysisContextImpl,target : any,_computeValue : <T>(entry : any) => T) {
        this._context = _context;
        this.target = target;
        this._computeValue = _computeValue;
        this._completer = new bare.createInstance(any,null,this._onCancel.bind(this));
    }
    get future() : any {
        return this._completer.future;
    }
    evaluate(entry : any) : boolean {
        /* TODO (AssertStatementImpl) : assert (!_completer.isCompleted); */;
        try {
            let result : T = this._computeValue(entry);
            if (op(Op.EQUALS,result,null)) {
                return false;
            }else {
                this._completer.complete(result);
                return true;
            }
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                this._completer.completeError(exception,stackTrace);
                return true;
            }
        }
    }
    forciblyComplete() : void {
        try {
            throw new bare.createInstance(any,null);
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                this._completer.completeError(exception,stackTrace);
            }
        }
    }
    _onCancel() : void {
        this._context._cancelFuture(this);
    }
}

export namespace ResultProvider {
    export type Constructors = 'ResultProvider';
    export type Interface = Omit<ResultProvider, Constructors>;
}
@DartClass
export class ResultProvider {
    @Abstract
    compute(entry : any,result : any) : boolean{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ResultProvider() {
    }
}

export namespace SdkAnalysisContext {
    export type Constructors = AnalysisContextImpl.Constructors | 'SdkAnalysisContext';
    export type Interface = Omit<SdkAnalysisContext, Constructors>;
}
@DartClass
export class SdkAnalysisContext extends AnalysisContextImpl {
    constructor(options : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SdkAnalysisContext(options : any) {
        if (options != null) {
            super.analysisOptions = options;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set analysisOptions(options : any) {
        throw new core.StateError('AnalysisOptions of SDK context cannot be changed.');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createCacheFromSourceFactory(factory : any) : any {
        if (op(Op.EQUALS,factory,null)) {
            return super.createCacheFromSourceFactory(factory);
        }
        let sdk : any = factory.dartSdk;
        if (op(Op.EQUALS,sdk,null)) {
            throw new core.ArgumentError("The source factory for an SDK analysis context must have a DartUriResolver");
        }
        return new bare.createInstance(any,null,new core.DartList.literal<any>(AnalysisEngine.instance.partitionManager.forSdk(sdk)));
    }
}

export class properties {
}
