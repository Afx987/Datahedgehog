/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/analysis_server.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as io from "@dart2ts/dart/io";
import * as lib5 from "@dart2ts/dart/uri";
import * as lib6 from "@dart2ts.packages/analysis_server/lib/src/protocol_server";
import * as math from "@dart2ts/dart/math";

export namespace AnalysisDoneReason {
    export type Constructors = '_';
    export type Interface = Omit<AnalysisDoneReason, Constructors>;
}
@DartClass
export class AnalysisDoneReason {
    private static __$COMPLETE : AnalysisDoneReason;
    static get COMPLETE() : AnalysisDoneReason { 
        if (this.__$COMPLETE===undefined) {
            this.__$COMPLETE = new AnalysisDoneReason._('COMPLETE');
        }
        return this.__$COMPLETE;
    }

    private static __$CONTEXT_REMOVED : AnalysisDoneReason;
    static get CONTEXT_REMOVED() : AnalysisDoneReason { 
        if (this.__$CONTEXT_REMOVED===undefined) {
            this.__$CONTEXT_REMOVED = new AnalysisDoneReason._('CONTEXT_REMOVED');
        }
        return this.__$CONTEXT_REMOVED;
    }

    text : string;

    @namedConstructor
    _(text : string) {
        this.text = text;
    }
    static _ : new(text : string) => AnalysisDoneReason;

}

export namespace AnalysisServer {
    export type Constructors = 'AnalysisServer';
    export type Interface = Omit<AnalysisServer, Constructors>;
}
@DartClass
export class AnalysisServer {
    private static __$VERSION : string;
    static get VERSION() : string { 
        if (this.__$VERSION===undefined) {
            this.__$VERSION = '1.18.0';
        }
        return this.__$VERSION;
    }
    static set VERSION(__$value : string)  { 
        this.__$VERSION = __$value;
    }

    private static __$performOperationDelayFrequency : number;
    static get performOperationDelayFrequency() : number { 
        if (this.__$performOperationDelayFrequency===undefined) {
            this.__$performOperationDelayFrequency = 25;
        }
        return this.__$performOperationDelayFrequency;
    }
    static set performOperationDelayFrequency(__$value : number)  { 
        this.__$performOperationDelayFrequency = __$value;
    }

    ideOptions : any;

    options : AnalysisServerOptions;

    channel : any;

    notificationManager : any;

    pluginManager : any;

    resourceProvider : any;

    index : any;

    searchEngine : any;

    serverPlugin : any;

    _analyzedFilesGlobs : core.DartList<any>;

    contextManager : any;

    running : boolean;

    statusAnalyzing : boolean;

    handlers : core.DartList<any>;

    sdkManager : any;

    instrumentationService : any;

    operationQueue : any;

    performOperationPending : boolean;

    serverServices : core.DartSet<any>;

    generalAnalysisServices : core.DartSet<any>;

    analysisServices : core.DartMap<any,core.DartSet<string>>;

    contextAnalysisDoneCompleters : core.DartMap<any,async.DartCompleter<AnalysisDoneReason>>;

    performanceDuringStartup : ServerPerformance;

    performanceAfterStartup : ServerPerformance;

    _performance : ServerPerformance;

    _onAnalysisCompleteCompleter : async.DartCompleter<any>;

    _test_onOperationPerformedCompleter : async.DartCompleter<any>;

    _onAnalysisStartedController : async.DartStreamController<boolean>;

    _onFileAnalyzedController : async.DartStreamController<any>;

    _onPriorityChangeController : async.DartStreamController<PriorityChangeEvent>;

    rethrowExceptions : boolean;

    _nextPerformOperationDelayTime : number;

    fileContentOverlay : any;

    overlayState : any;

    userDefinedPlugins : core.DartList<any>;

    prevAnalyzedFiles : core.DartSet<string>;

    defaultContextOptions : any;

    _onContextsChangedController : async.DartStreamController<any>;

    fileResolverProvider : any;

    packageResolverProvider : any;

    _analysisPerformanceLogger : any;

    byteStore : any;

    analysisDriverScheduler : any;

    _onFileAddedController : async.DartStreamController<string>;

    _onFileChangedController : async.DartStreamController<string>;

    onResultErrorSupplementor : Function;

    onNoAnalysisResult : Function;

    onNoAnalysisCompletion : Function;

    priorityFiles : core.DartSet<string>;

    diagnosticServer : any;

    constructor(channel : any,resourceProvider : any,packageMapProvider : any,index : any,serverPlugin : any,options : AnalysisServerOptions,sdkManager : any,instrumentationService : any,_namedArguments? : {diagnosticServer? : any,fileResolverProvider? : any,packageResolverProvider? : any,useSingleContextManager? : boolean,rethrowExceptions? : boolean}) {
    }
    @defaultConstructor
    AnalysisServer(channel : any,resourceProvider : any,packageMapProvider : any,index : any,serverPlugin : any,options : AnalysisServerOptions,sdkManager : any,instrumentationService : any,_namedArguments? : {diagnosticServer? : any,fileResolverProvider? : any,packageResolverProvider? : any,useSingleContextManager? : boolean,rethrowExceptions? : boolean}) {
        let {diagnosticServer,fileResolverProvider,packageResolverProvider,useSingleContextManager,rethrowExceptions} = Object.assign({
            "fileResolverProvider" : null,
            "packageResolverProvider" : null,
            "useSingleContextManager" : false,
            "rethrowExceptions" : true}, _namedArguments );
        this._analyzedFilesGlobs = null;
        this.statusAnalyzing = false;
        this.performOperationPending = false;
        this.serverServices = new core.DartHashSet<any>();
        this.generalAnalysisServices = new core.DartHashSet<any>();
        this.analysisServices = new core.DartHashMap<any,core.DartSet<string>>();
        this.contextAnalysisDoneCompleters = new core.DartHashMap<any,async.DartCompleter<AnalysisDoneReason>>();
        this.performanceDuringStartup = new ServerPerformance();
        this._nextPerformOperationDelayTime = new core.DartDateTime.now().millisecondsSinceEpoch + 1000;
        this.fileContentOverlay = new bare.createInstance(any,null);
        this.overlayState = new bare.createInstance(any,null);
        this.defaultContextOptions = new bare.createInstance(any,null);
        this._onContextsChangedController = new async.DartStreamController.broadcast();
        this.priorityFiles = new core.DartSet<string>();
        this.notificationManager = new bare.createInstance(any,null,channel,resourceProvider);
        this.channel = channel;
        this.resourceProvider = resourceProvider;
        this.index = index;
        this.serverPlugin = serverPlugin;
        this.options = options;
        this.sdkManager = sdkManager;
        this.instrumentationService = instrumentationService;
        this.diagnosticServer = diagnosticServer;
        this.rethrowExceptions = rethrowExceptions;
        this._performance = this.performanceDuringStartup;
        this.pluginManager = new bare.createInstance(any,null,this.resourceProvider,this._getByteStorePath(),this.sdkManager.defaultSdkDirectory,this.notificationManager,this.instrumentationService);
        let pluginWatcher : any = new bare.createInstance(any,null,this.resourceProvider,this.pluginManager);
        this.defaultContextOptions.incremental = true;
        this.defaultContextOptions.incrementalApi = this.options.enableIncrementalResolutionApi;
        this.defaultContextOptions.incrementalValidation = this.options.enableIncrementalResolutionValidation;
        this.defaultContextOptions.generateImplicitErrors = false;
        this.operationQueue = new bare.createInstance(any,null);
        {
            let name : string = this.options.newAnalysisDriverLog;
            let sink : core.DartStringSink = new bare.createInstance(any,null);
            if (name != null) {
                if (name == 'stdout') {
                    sink = io.properties.stdout;
                }else if (new core.DartString(name).startsWith('file:')) {
                    let path : string = new core.DartString(name).substring(new core.DartString('file:').length);
                    sink = new io.File(path).openWrite({
                        mode : io.FileMode.APPEND});
                }
            }
            this._analysisPerformanceLogger = new bare.createInstance(any,null,sink);
        }
        this.byteStore = this._createByteStore();
        this.analysisDriverScheduler = new bare.createInstance(any,null,this._analysisPerformanceLogger,{
            driverWatcher : pluginWatcher});
        this.analysisDriverScheduler.status.listen(this.sendStatusNotificationNew.bind(this));
        this.analysisDriverScheduler.start();
        if (useSingleContextManager) {
            this.contextManager = new bare.createInstance(any,null,this.resourceProvider,this.sdkManager,packageResolverProvider,this.analyzedFilesGlobs,this.defaultContextOptions);
        }else {
            this.contextManager = new bare.createInstance(any,null,this.resourceProvider,this.sdkManager,packageResolverProvider,packageMapProvider,this.analyzedFilesGlobs,this.instrumentationService,this.defaultContextOptions,this.options.enableNewAnalysisDriver);
        }
        this.fileResolverProvider = fileResolverProvider;
        this.packageResolverProvider = packageResolverProvider;
        let contextManagerCallbacks : ServerContextManagerCallbacks = new ServerContextManagerCallbacks(this,this.resourceProvider);
        this.contextManager.callbacks = contextManagerCallbacks;
        AnalysisEngine.instance.logger = new bare.createInstance(any,null,this);
        this._onAnalysisStartedController = new async.DartStreamController.broadcast();
        this._onFileAnalyzedController = new async.DartStreamController.broadcast();
        this._onFileAddedController = new async.DartStreamController.broadcast();
        this._onFileChangedController = new async.DartStreamController.broadcast();
        this._onPriorityChangeController = new async.DartStreamController.broadcast();
        this.running = true;
        this.onAnalysisStarted.first.then((_ : any) =>  {
            this.onAnalysisComplete.then((_ : any) =>  {
                this.performanceAfterStartup = new ServerPerformance();
                this._performance = this.performanceAfterStartup;
            });
        });
        this._setupIndexInvalidation();
        if (this.options.enableNewAnalysisDriver) {
            this.searchEngine = new bare.createInstance(any,null,this.driverMap.values);
        }else if (this.index != null) {
            this.searchEngine = new bare.createInstance(any,null,this.index,this.getAstProvider.bind(this));
        }
        let notification : any = new bare.createInstance(any,null,AnalysisServer.VERSION,io.properties.pid,{
            sessionId : this.instrumentationService.sessionId}).toNotification();
        this.channel.sendNotification(notification);
        this.channel.listen(this.handleRequest.bind(this),{
            onDone : this.done.bind(this),onError : this.error.bind(this)});
        this.handlers = this.serverPlugin.createDomains(this);
        this.ideOptions = new bare.createInstance(any,null,this.options);
    }
    get analysisContexts() : core.DartIterable<any> {
        return this.contextManager.analysisContexts;
    }
    get analyzedFilesGlobs() : core.DartList<any> {
        if (this._analyzedFilesGlobs == null) {
            this._analyzedFilesGlobs = new core.DartList.literal<any>();
            let patterns : core.DartList<string> = this.serverPlugin.analyzedFilePatterns;
            for(let pattern of patterns) {
                try {
                    this._analyzedFilesGlobs.add(new bare.createInstance(any,null,this.resourceProvider.pathContext.separator,pattern));
                } catch (__error__) {

                    {
                        let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let exception = __error__;
                        AnalysisEngine.instance.logger.logError(`Invalid glob pattern: "${pattern}"`,new bare.createInstance(any,null,exception,stackTrace));
                    }
                }
            }
        }
        return this._analyzedFilesGlobs;
    }
    get driverMap() : core.DartMap<any,any> {
        return this.contextManager.driverMap;
    }
    get folderMap() : core.DartMap<any,any> {
        return this.contextManager.folderMap;
    }
    get onAnalysisComplete() : async.Future<any> {
        if (this.isAnalysisComplete()) {
            return new async.Future.value();
        }
        if (op(Op.EQUALS,this._onAnalysisCompleteCompleter,null)) {
            this._onAnalysisCompleteCompleter = new async.DartCompleter<any>();
        }
        return this._onAnalysisCompleteCompleter.future;
    }
    get onAnalysisStarted() : async.DartStream<boolean> {
        return this._onAnalysisStartedController.stream;
    }
    get onContextsChanged() : async.DartStream<any> {
        return this._onContextsChangedController.stream;
    }
    get onFileAdded() : async.DartStream<any> {
        return this._onFileAddedController.stream;
    }
    get onFileAnalyzed() : async.DartStream<any> {
        return this._onFileAnalyzedController.stream;
    }
    get onFileChanged() : async.DartStream<any> {
        return this._onFileChangedController.stream;
    }
    get onPriorityChange() : async.DartStream<PriorityChangeEvent> {
        return this._onPriorityChangeController.stream;
    }
    get test_onOperationPerformed() : async.Future<any> {
        if (op(Op.EQUALS,this._test_onOperationPerformedCompleter,null)) {
            this._test_onOperationPerformedCompleter = new async.DartCompleter<any>();
        }
        return this._test_onOperationPerformedCompleter.future;
    }
    addOperation(operation : any) : void {
        this.operationQueue.add(operation);
    }
    done() : void {
        ((_1_)=>(!!_1_)?_1_.stop():null)(this.index);
        this.running = false;
    }
    error(argument : any) : void {
        this.running = false;
    }
    fileAnalyzed(notice : any) : void {
        if (this.contextManager.isInAnalysisRoot(notice.source.fullName)) {
            this._onFileAnalyzedController.add(notice);
        }
    }
    findSdk() : any {
        let sdk : any = this.sdkManager.anySdk;
        if (sdk != null) {
            return sdk;
        }
        return null;
    }
    getAnalysisContext(path : string) : any {
        return this.getContextSourcePair(path).context;
    }
    getAnalysisContextForSource(source : any) : any {
        for(let context of this.analysisContexts) {
            let kind : any = context.getKindOf(source);
            if (kind != SourceKind.UNKNOWN) {
                return context;
            }
        }
        return null;
    }
    getAnalysisDriver(path : string) : any {
        let drivers : core.DartIterable<any> = this.driverMap.values;
        if (drivers.isNotEmpty) {
            let driver : any = drivers.firstWhere((driver : any) =>  {
                return driver.contextRoot.containsFile(path);
            },{
                orElse : () =>  {
                    return null;
                }});
            driver = ( driver ) || ( drivers.firstWhere((driver : any) =>  {
                return driver.knownFiles.contains(path);
            },{
                orElse : () =>  {
                    return null;
                }}) );
            driver = ( driver ) || ( drivers.first );
            return driver;
        }
        return null;
    }
    getAnalysisResult(path : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!AnalysisEngine.isDartFileName(path)) {
                return null;
            }
            try {
                let driver : any = this.getAnalysisDriver(path);
                return await ((_2_)=>(!!_2_)?_2_.getResult(path):null)(driver);
            } catch (__error__) {

                {
                    let e = __error__;
                    return null;
                }
            }
        } )());
    }

    getAstProvider(path : string) : any {
        if (this.options.enableNewAnalysisDriver) {
            let analysisDriver = this.getAnalysisDriver(path);
            return new bare.createInstance(any,null,analysisDriver);
        }else {
            let analysisContext = this.getAnalysisContext(path);
            return new bare.createInstance(any,null,analysisContext);
        }
    }
    getCompilationUnitElement(file : string) : any {
        let pair : ContextSourcePair = this.getContextSourcePair(file);
        if (op(Op.EQUALS,pair,null)) {
            return null;
        }
        let context : any = pair.context;
        let unitSource : any = pair.source;
        if (op(Op.EQUALS,context,null) || op(Op.EQUALS,unitSource,null)) {
            return null;
        }
        let librarySources : core.DartList<any> = context.getLibrariesContaining(unitSource);
        if (!librarySources.isNotEmpty) {
            return null;
        }
        let librarySource : any = librarySources.first;
        return context.getCompilationUnitElement(unitSource,librarySource);
    }
    getContainingContext(path : string) : any {
        return this.contextManager.getContextFor(path);
    }
    getContainingDriver(path : string) : any {
        return this.contextManager.getDriverFor(path);
    }
    getContextSourcePair(path : string) : ContextSourcePair {
        {
            let sdk : any = this.findSdk();
            if (sdk != null) {
                let uri : lib5.Uri = this.resourceProvider.pathContext.toUri(path);
                let sdkSource : any = sdk.fromFileUri(uri);
                if (sdkSource != null) {
                    return new ContextSourcePair(sdk.context,sdkSource);
                }
            }
        }
        let resource : any = this.resourceProvider.getResource(path);
        if (isNot(resource, any)) {
            return new ContextSourcePair(null,null);
        }
        let file : any = resource;
        {
            let containingContext : any = this.getContainingContext(path);
            if (containingContext != null) {
                let source : any = ContextManagerImpl.createSourceInContext(containingContext,file);
                return new ContextSourcePair(containingContext,source);
            }
        }
        for(let context of this.analysisContexts) {
            let source : any = ContextManagerImpl.createSourceInContext(context,file);
            let kind : any = context.getKindOf(source);
            if (kind != SourceKind.UNKNOWN) {
                return new ContextSourcePair(context,source);
            }
        }
        for(let context of this.analysisContexts) {
            let sources : core.DartList<any> = context.getSourcesWithFullName(path);
            if (sources.isNotEmpty) {
                let source : any = sources.first;
                return new ContextSourcePair(context,source);
            }
        }
        let fileSource : any = file.createSource();
        return new ContextSourcePair(null,fileSource);
    }
    getElementAtOffset(file : string,offset : number) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let node : any = await this.getNodeAtOffset(file,offset);
            return this.getElementOfNode(node);
        } )());
    }

    getElementOfNode(node : any) : any {
        if (op(Op.EQUALS,node,null)) {
            return null;
        }
        if (is(node, any) && is(node.parent, any)) {
            node = node.parent;
        }
        if (is(node, any)) {
            node = node.parent;
        }
        if (is(node, any) && is(node.parent, any)) {
            return null;
        }
        let element : any = ElementLocator.locate(node);
        if (is(node, any) && is(element, any)) {
            element = getImportElement(node);
        }
        return element;
    }
    getErrors(file : string) : any {
        let contextSource : ContextSourcePair = this.getContextSourcePair(file);
        let context : any = contextSource.context;
        let source : any = contextSource.source;
        if (op(Op.EQUALS,context,null)) {
            return null;
        }
        if (!context.exists(source)) {
            return null;
        }
        return context.getErrors(source);
    }
    getNodeAtOffset(file : string,offset : number) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit : any;
            if (this.options.enableNewAnalysisDriver) {
                let result : any = await this.getAnalysisResult(file);
                unit = ((t)=>(!!t)?t.unit:null)(result);
            }else {
                unit = await this.getResolvedCompilationUnit(file);
            }
            if (unit != null) {
                return new bare.createInstance(any,null,offset).searchWithin(unit);
            }
            return null;
        } )());
    }

    getResolvedCompilationUnit(path : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this.options.enableNewAnalysisDriver) {
                let result : any = await this.getAnalysisResult(path);
                return ((t)=>(!!t)?t.unit:null)(result);
            }
            let contextSource : ContextSourcePair = this.getContextSourcePair(path);
            let context : any = contextSource.context;
            if (op(Op.EQUALS,context,null)) {
                return null;
            }
            return runWithActiveContext(context,() =>  {
                let unitSource : any = contextSource.source;
                let librarySources : core.DartList<any> = context.getLibrariesContaining(unitSource);
                for(let librarySource of librarySources) {
                    return context.resolveCompilationUnit2(unitSource,librarySource);
                }
                return null;
            });
        } )());
    }

    handleRequest(request : any) : void {
        this._performance.logRequest(request);
        async.runZoned(() =>  {
            ServerPerformanceStatistics.serverRequests.makeCurrentWhile(() =>  {
                let count : number = this.handlers.length;
                for(let i : number = 0; i < count; i++){
                    try {
                        let response : any = this.handlers[i].handleRequest(request);
                        if (op(Op.EQUALS,response,Response.DELAYED_RESPONSE)) {
                            return;
                        }
                        if (response != null) {
                            this.channel.sendResponse(response);
                            return;
                        }
                    } catch (__error__) {

                        if (is(__error__,any)){
                            let exception : any = __error__;
                            this.channel.sendResponse(exception.response);
                            return;
                        }


                        {
                            let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                            let exception = __error__;
                            let error : any = new bare.createInstance(any,null,RequestErrorCode.SERVER_ERROR,exception.toString());
                            if (stackTrace != null) {
                                error.stackTrace = stackTrace.toString();
                            }
                            let response : any = new bare.createInstance(any,null,request.id,{
                                error : error});
                            this.channel.sendResponse(response);
                            return;
                        }
                    }
                }
                this.channel.sendResponse(new bare.createInstance(any,null,request));
            });
        },{
            onError : (exception : any,stackTrace : any) =>  {
                this.sendServerErrorNotification(`Failed to handle request: ${request.toJson()}`,exception,stackTrace,{
                    fatal : true});
            }});
    }
    hasAnalysisSubscription(service : any,file : string) : boolean {
        let files : core.DartSet<string> = this.analysisServices.get(service);
        return files != null && files.contains(file);
    }
    isAnalysisComplete() : boolean {
        return this.operationQueue.isEmpty && !this.analysisDriverScheduler.isAnalyzing;
    }
    isValidFilePath(path : string) : boolean {
        return this.resourceProvider.absolutePathContext.isValid(path);
    }
    onFileAnalysisComplete(file : string) : async.Future<AnalysisDoneReason> {
        let context : any = this.getAnalysisContext(file);
        if (op(Op.EQUALS,context,null)) {
            return null;
        }
        if (this.isAnalysisComplete()) {
            return new async.Future.value(AnalysisDoneReason.COMPLETE);
        }
        this.schedulePerformAnalysisOperation(context);
        let completer : async.DartCompleter<AnalysisDoneReason> = this.contextAnalysisDoneCompleters.get(context);
        if (op(Op.EQUALS,completer,null)) {
            completer = new async.DartCompleter<AnalysisDoneReason>();
            this.contextAnalysisDoneCompleters.set(context,completer);
        }
        return completer.future;
    }
    performOperation() : void {
        /* TODO (AssertStatementImpl) : assert (performOperationPending); */;
        PerformanceTag.UNKNOWN.makeCurrent();
        this.performOperationPending = false;
        if (!this.running) {
            this.operationQueue.clear();
            return;
        }
        let operation : any = this.operationQueue.take();
        if (op(Op.EQUALS,operation,null)) {
            ServerPerformanceStatistics.idle.makeCurrent();
            return;
        }
        this.sendStatusNotification(operation);
        try {
            operation.perform(this);
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                this.sendServerErrorNotification(`Failed to perform operation: ${operation}`,exception,stackTrace,{
                    fatal : true});
                if (this.rethrowExceptions) {
                    throw new bare.createInstance(any,null,'Unexpected exception during analysis',new bare.createInstance(any,null,exception,stackTrace));
                }
                this.shutdown();
            }
        } finally {
            if (this._test_onOperationPerformedCompleter != null) {
                this._test_onOperationPerformedCompleter.complete(operation);
                this._test_onOperationPerformedCompleter = null;
            }
            if (!this.operationQueue.isEmpty) {
                ServerPerformanceStatistics.intertask.makeCurrent();
                this._schedulePerformOperation();
            }else {
                if (this.generalAnalysisServices.contains(GeneralAnalysisService.ANALYZED_FILES)) {
                    sendAnalysisNotificationAnalyzedFiles(this);
                }
                this.sendStatusNotification(null);
                this._scheduleAnalysisImplementedNotification();
                if (this._onAnalysisCompleteCompleter != null) {
                    this._onAnalysisCompleteCompleter.complete();
                    this._onAnalysisCompleteCompleter = null;
                }
                ServerPerformanceStatistics.idle.makeCurrent();
            }
        }
    }
    reanalyze(roots : core.DartList<any>) : void {
        if (roots == null) {
            this.operationQueue.clear();
        }else {
            for(let context of this._getContexts(roots)) {
                this.operationQueue.contextRemoved(context);
            }
        }
        this.contextManager.refresh(roots);
    }
    scheduleCacheConsistencyValidation(context : any) : void {
        if (is(context, any)) {
            let validator : any = context.cacheConsistencyValidator;
            let sources : core.DartList<any> = validator.getSourcesToComputeModificationTimes();
            new async.Future<any>(() => new async.Future.fromPromise(( async () : Promise<any> =>  {
                try {
                    let modificationTimes : core.DartList<number> = await this.resourceProvider.getModificationTimes(sources);
                    let cacheInconsistencyFixed : boolean = validator.sourceModificationTimesComputed(sources,modificationTimes);
                    if (cacheInconsistencyFixed) {
                        this.scheduleOperation(new bare.createInstance(any,null,context,false));
                    }
                } catch (__error__) {

                    {
                        let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let exception = __error__;
                        this.sendServerErrorNotification('Failed to check cache consistency',exception,stackTrace);
                    }
                }
            })()));
        }
    }
    scheduleOperation(operation : any) : void {
        this.addOperation(operation);
        this._schedulePerformOperation();
    }
    schedulePerformAnalysisOperation(context : any) : void {
        this._onAnalysisStartedController.add(true);
        this.scheduleOperation(new bare.createInstance(any,null,context,false));
    }
    sendContextAnalysisDoneNotifications(context : any,reason : AnalysisDoneReason) : void {
        let completer : async.DartCompleter<AnalysisDoneReason> = this.contextAnalysisDoneCompleters.remove(context);
        if (completer != null) {
            completer.complete(reason);
        }
    }
    sendNotification(notification : any) : void {
        this.channel.sendNotification(notification);
    }
    sendResponse(response : any) : void {
        this.channel.sendResponse(response);
    }
    sendServerErrorNotification(message : string,exception : any,stackTrace : any,_namedArguments? : {fatal? : boolean}) : void {
        let {fatal} = Object.assign({
            "fatal" : false}, _namedArguments );
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        if (exception != null) {
            buffer.write(exception);
        }else {
            buffer.write('null exception');
        }
        if (stackTrace != null) {
            buffer.writeln();
            buffer.write(stackTrace);
        }else if (isNot(exception, any)) {
            try {
                throw 'ignored';
            } catch (__error__) {

                {
                    let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let ignored = __error__;
                    buffer.writeln();
                    buffer.write(stackTrace);
                }
            }
        }
        this.channel.sendNotification(new bare.createInstance(any,null,fatal,message,buffer.toString()).toNotification());
    }
    sendStatusNotification(operation : any) : void {
        if (!this.serverServices.contains(ServerService.STATUS)) {
            return;
        }
        let isAnalyzing : boolean = operation != null;
        if (this.statusAnalyzing == isAnalyzing) {
            return;
        }
        this.statusAnalyzing = isAnalyzing;
        let analysis : any = new bare.createInstance(any,null,isAnalyzing);
        this.channel.sendNotification(new bare.createInstance(any,null,{
            analysis : analysis}).toNotification());
    }
    sendStatusNotificationNew(status : any) : void {
        if (status.isAnalyzing) {
            this._onAnalysisStartedController.add(true);
        }
        if (this._onAnalysisCompleteCompleter != null && !status.isAnalyzing) {
            this._onAnalysisCompleteCompleter.complete();
            this._onAnalysisCompleteCompleter = null;
        }
        if (!status.isAnalyzing) {
            if (this.generalAnalysisServices.contains(GeneralAnalysisService.ANALYZED_FILES)) {
                sendAnalysisNotificationAnalyzedFiles(this);
            }
        }
        if (!this.serverServices.contains(ServerService.STATUS)) {
            return;
        }
        if (this.statusAnalyzing == status.isAnalyzing) {
            return;
        }
        this.statusAnalyzing = status.isAnalyzing;
        let analysis : any = new bare.createInstance(any,null,status.isAnalyzing);
        this.channel.sendNotification(new bare.createInstance(any,null,{
            analysis : analysis}).toNotification());
    }
    setAnalysisRoots(requestId : string,includedPaths : core.DartList<string>,excludedPaths : core.DartList<string>,packageRoots : core.DartMap<string,string>) : void {
        if (this.notificationManager != null) {
            this.notificationManager.setAnalysisRoots(includedPaths,excludedPaths);
        }
        try {
            this.contextManager.setRoots(includedPaths,excludedPaths,packageRoots);
        } catch (__error__) {

            if (is(__error__,core.UnimplementedError)){
                let e : core.UnimplementedError = __error__;
                throw new bare.createInstance(any,null,new bare.createInstance(any,null,requestId,e.message));
            }
        }
    }
    setAnalysisSubscriptions(subscriptions : core.DartMap<any,core.DartSet<string>>) : void {
        if (this.notificationManager != null) {
            this.notificationManager.setSubscriptions(subscriptions);
        }
        if (this.options.enableNewAnalysisDriver) {
            this.analysisServices = subscriptions;
            let allNewFiles : core.DartSet<string> = subscriptions.values.expand((files : any) =>  {
                return files;
            }).toSet();
            for(let file of allNewFiles) {
                if (AnalysisEngine.isDartFileName(file)) {
                    this.getAnalysisResult(file);
                }
            }
            return;
        }
        subscriptions.forEach((service : any,newFiles : core.DartSet<string>) =>  {
            let oldFiles : core.DartSet<string> = this.analysisServices.get(service);
            let todoFiles : core.DartSet<string> = oldFiles != null ? newFiles.difference(oldFiles) : newFiles;
            for(let file of todoFiles) {
                if (this.contextManager.isIgnored(file)) {
                    continue;
                }
                let contextSource : ContextSourcePair = this.getContextSourcePair(file);
                let context : any = contextSource.context;
                if (op(Op.EQUALS,context,null)) {
                    continue;
                }
                let source : any = contextSource.source;
                if (AnalysisEngine.isDartFileName(file)) {
                    (context as any).ensureResolvedDartUnits(source);
                }
                switch (service) {
                    case AnalysisService.NAVIGATION:
                        sendAnalysisNotificationNavigation(this,context,source);
                        continue;
                    case AnalysisService.OCCURRENCES:
                        sendAnalysisNotificationOccurrences(this,context,source);
                        continue;
                }
                if (AnalysisEngine.isDartFileName(file)) {
                    let dartUnit : any = this._getResolvedCompilationUnitToResendNotification(context,source);
                    if (dartUnit != null) {
                        switch (service) {
                            case AnalysisService.HIGHLIGHTS:
                                sendAnalysisNotificationHighlights(this,file,dartUnit);
                                break;
                            case AnalysisService.OUTLINE:
                                let context : any = resolutionMap.elementDeclaredByCompilationUnit(dartUnit).context;
                                let lineInfo : any = context.getLineInfo(source);
                                let kind : any = context.getKindOf(source);
                                sendAnalysisNotificationOutline(this,file,lineInfo,kind,dartUnit);
                                break;
                            case AnalysisService.OVERRIDES:
                                sendAnalysisNotificationOverrides(this,file,dartUnit);
                                break;
                        }
                    }
                }
            }
        });
        this.analysisServices = subscriptions;
        if (this.analysisServices.containsKey(AnalysisService.IMPLEMENTED) && this.isAnalysisComplete()) {
            this._scheduleAnalysisImplementedNotification();
        }
    }
    setGeneralAnalysisSubscriptions(subscriptions : core.DartList<any>) : void {
        let newServices : core.DartSet<any> = subscriptions.toSet();
        if (newServices.contains(GeneralAnalysisService.ANALYZED_FILES) && !this.generalAnalysisServices.contains(GeneralAnalysisService.ANALYZED_FILES) && this.isAnalysisComplete()) {
            sendAnalysisNotificationAnalyzedFiles(this);
        }else if (!newServices.contains(GeneralAnalysisService.ANALYZED_FILES) && this.generalAnalysisServices.contains(GeneralAnalysisService.ANALYZED_FILES)) {
            this.prevAnalyzedFiles = null;
        }
        this.generalAnalysisServices = newServices;
    }
    setPriorityFiles(requestId : string,files : core.DartList<string>) : void {
        if (this.options.enableNewAnalysisDriver) {
            this.priorityFiles.clear();
            this.priorityFiles.addAll(files);
            this.driverMap.values.forEach((driver : any) =>  {
                driver.priorityFiles = files;
            });
            return;
        }
        let sourceMap : core.DartMap<any,core.DartList<any>> = new core.DartHashMap<any,core.DartList<any>>();
        let unanalyzed : core.DartList<string> = new core.DartList<string>();
        let firstSource : any = null;
        files.forEach((file : string) =>  {
            if (this.contextManager.isIgnored(file)) {
                unanalyzed.add(file);
                return;
            }
            let contextSource : ContextSourcePair = this.getContextSourcePair(file);
            let preferredContext : any = contextSource.context;
            let source : any = contextSource.source;
            if (op(Op.EQUALS,preferredContext,null)) {
                let resource : any = this.resourceProvider.getResource(file);
                if (is(resource, any) && resource.exists) {
                    for(let context of this.analysisContexts) {
                        let uri : lib5.Uri = context.sourceFactory.restoreUri(source);
                        if (uri.scheme != 'file') {
                            preferredContext = context;
                            source = ContextManagerImpl.createSourceInContext(context,resource);
                            break;
                        }
                    }
                }
            }
            let contextFound : boolean = false;
            if (preferredContext != null) {
                sourceMap.putIfAbsent(preferredContext,() =>  {
                    return new core.DartList.literal<any>();
                }).add(source);
                contextFound = true;
            }
            for(let context of this.analysisContexts) {
                if (context != preferredContext && context.getKindOf(source) != SourceKind.UNKNOWN) {
                    sourceMap.putIfAbsent(context,() =>  {
                        return new core.DartList.literal<any>();
                    }).add(source);
                    contextFound = true;
                }
            }
            if (op(Op.EQUALS,firstSource,null)) {
                firstSource = source;
            }
            if (!contextFound) {
                unanalyzed.add(file);
            }
        });
        if (unanalyzed.isNotEmpty) {
            let buffer : core.DartStringBuffer = new core.DartStringBuffer();
            buffer.writeAll(unanalyzed,', ');
            throw new bare.createInstance(any,null,new bare.createInstance(any,null,requestId,buffer.toString()));
        }
        sourceMap.forEach((context : any,sourceList : core.DartList<any>) =>  {
            context.analysisPriorityOrder = sourceList;
            this.schedulePerformAnalysisOperation(context);
        });
        this.operationQueue.reschedule();
        this._onPriorityChangeController.add(new PriorityChangeEvent(firstSource));
    }
    shouldSendErrorsNotificationFor(file : string) : boolean {
        return this.contextManager.isInAnalysisRoot(file);
    }
    shutdown() : void {
        this.running = false;
        if (this.index != null) {
            this.index.stop();
        }
        new async.Future<any>(() =>  {
            this.instrumentationService.shutdown();
            this.channel.close();
        });
    }
    test_flushAstStructures(file : string) : void {
        if (AnalysisEngine.isDartFileName(file)) {
            let contextSource : ContextSourcePair = this.getContextSourcePair(file);
            let context : any = contextSource.context;
            let source : any = contextSource.source;
            context.test_flushAstStructures(source);
        }
    }
    test_performAllAnalysisOperations() : void {
        while (true){
            let operation : any = this.operationQueue.takeIf((operation : any) =>  {
                return is(operation, any);
            });
            if (op(Op.EQUALS,operation,null)) {
                break;
            }
            operation.perform(this);
        }
    }
    updateContent(id : string,changes : core.DartMap<string,any>) : void {
        if (this.options.enableNewAnalysisDriver) {
            changes.forEach((file : any,change : any) =>  {
                let oldContents : string = op(Op.INDEX,this.fileContentOverlay,file);
                let newContents : string;
                if (is(change, any)) {
                    newContents = change.content;
                }else if (is(change, any)) {
                    if (oldContents == null) {
                        throw new bare.createInstance(any,null,new bare.createInstance(any,null,id,{
                            error : new bare.createInstance(any,null,RequestErrorCode.INVALID_OVERLAY_CHANGE,'Invalid overlay change')}));
                    }
                    try {
                        newContents = SourceEdit.applySequence(oldContents,change.edits);
                    } catch (__error__) {

                        if (is(__error__,core.RangeError)){
                            throw new bare.createInstance(any,null,new bare.createInstance(any,null,id,{
                                error : new bare.createInstance(any,null,RequestErrorCode.INVALID_OVERLAY_CHANGE,'Invalid overlay change')}));
                        }
                    }
                }else if (is(change, any)) {
                    newContents = null;
                }else {
                    throw new bare.createInstance(any,null,'Illegal change type');
                }
                op(Op.INDEX_ASSIGN,this.fileContentOverlay,file,newContents);
                this.driverMap.values.forEach((driver : any) =>  {
                    driver.changeFile(file);
                });
                this._onFileChangedController.add(file);
                ((_3_)=>(!!_3_)?_3_.addFile(file):null)(this.contextManager.getDriverFor(file));
            });
            return;
        }
        changes.forEach((file : any,change : any) =>  {
            let contextSource : ContextSourcePair = this.getContextSourcePair(file);
            let source : any = contextSource.source;
            this.operationQueue.sourceAboutToChange(source);
            let oldContents : string = this.overlayState.getContents(source);
            let newContents : string;
            if (is(change, any)) {
                newContents = change.content;
            }else if (is(change, any)) {
                if (oldContents == null) {
                    throw new bare.createInstance(any,null,new bare.createInstance(any,null,id,{
                        error : new bare.createInstance(any,null,RequestErrorCode.INVALID_OVERLAY_CHANGE,'Invalid overlay change')}));
                }
                try {
                    newContents = SourceEdit.applySequence(oldContents,change.edits);
                } catch (__error__) {

                    if (is(__error__,core.RangeError)){
                        throw new bare.createInstance(any,null,new bare.createInstance(any,null,id,{
                            error : new bare.createInstance(any,null,RequestErrorCode.INVALID_OVERLAY_CHANGE,'Invalid overlay change')}));
                    }
                }
            }else if (is(change, any)) {
                newContents = null;
            }else {
                throw new bare.createInstance(any,null,'Illegal change type');
            }
            let containingContext : any = this.getContainingContext(file);
            let wasMissing : boolean = op(Op.EQUALS,((_4_)=>(!!_4_)?_4_.getModificationStamp(source):null)(containingContext),-1);
            this.overlayState.setContents(source,newContents);
            if (newContents == null && !source.exists()) {
                for(let context of this.analysisContexts) {
                    let sources : core.DartList<any> = context.getSourcesWithFullName(file);
                    let changeSet : any = new bare.createInstance(any,null);
                    sources.forEach(changeSet.removedSource);
                    context.applyChanges(changeSet);
                    this.schedulePerformAnalysisOperation(context);
                }
                return;
            }
            let anyContextUpdated : boolean = false;
            for(let context of this.analysisContexts) {
                let sources : core.DartList<any> = context.getSourcesWithFullName(file);
                sources.forEach((source : any) =>  {
                    anyContextUpdated = true;
                    if (op(Op.EQUALS,context,containingContext) && wasMissing) {
                        context.applyChanges(((_) : any =>  {
                            {
                                addedSource(source);
                                return _;
                            }
                        })(new bare.createInstance(any,null)));
                        this.schedulePerformAnalysisOperation(context);
                    }
                    if (context.handleContentsChanged(source,oldContents,newContents,true)) {
                        this.schedulePerformAnalysisOperation(context);
                    }else {
                        if (AnalysisEngine.isDartFileName(file)) {
                            let dartUnits : core.DartList<any> = context.ensureResolvedDartUnits(source);
                            if (dartUnits != null) {
                                let errorInfo : any = context.getErrors(source);
                                for(let dartUnit of dartUnits) {
                                    scheduleNotificationOperations(this,source,file,errorInfo.lineInfo,context,null,dartUnit,errorInfo.errors);
                                    scheduleIndexOperation(this,file,dartUnit);
                                }
                            }else {
                                this.schedulePerformAnalysisOperation(context);
                            }
                        }
                    }
                });
            }
            if (!anyContextUpdated) {
                let context : any = contextSource.context;
                if (context != null && source != null) {
                    let changeSet : any = new bare.createInstance(any,null);
                    changeSet.addedSource(source);
                    context.applyChanges(changeSet);
                    this.schedulePerformAnalysisOperation(context);
                }
            }
        });
    }
    updateOptions(optionUpdaters : core.DartList<(options : any) => void>) : void {
        if (this.options.enableNewAnalysisDriver) {
            return;
        }
        for(let context of this.analysisContexts) {
            let options : any = new bare.createInstance(any,null,context.analysisOptions);
            optionUpdaters.forEach((optionUpdater : (options : any) => void) =>  {
                optionUpdater(options);
            });
            context.analysisOptions = options;
        }
        optionUpdaters.forEach((optionUpdater : (options : any) => void) =>  {
            optionUpdater(this.defaultContextOptions);
        });
    }
    _computingPackageMap(computing : boolean) : void {
        if (this.serverServices.contains(ServerService.STATUS)) {
            let pubStatus : any = new bare.createInstance(any,null,computing);
            let params : any = new bare.createInstance(any,null,{
                pub : pubStatus});
            this.sendNotification(params.toNotification());
        }
    }
    _createByteStore() : any {
        let M : number = 1024 * 1024;
        let G : number = 1024 * 1024 * 1024;
        if (is(this.resourceProvider, any)) {
            let stateLocation : any = this.resourceProvider.getStateLocation('.analysis-driver');
            if (stateLocation != null) {
                return new bare.createInstance(any,null,new bare.createInstance(any,null,stateLocation.path,G),64 * M);
            }
        }
        return new bare.createInstance(any,null,new bare.createInstance(any,null),64 * M);
    }
    _getByteStorePath() : string {
        if (is(this.resourceProvider, any)) {
            let stateLocation : any = this.resourceProvider.getStateLocation('.analysis-driver');
            if (stateLocation != null) {
                return stateLocation.path;
            }
        }
        return null;
    }
    _getContexts(resources : core.DartList<any>) : core.DartSet<any> {
        let contexts : core.DartSet<any> = new core.DartHashSet<any>();
        resources.forEach((resource : any) =>  {
            if (is(resource, any)) {
                contexts.addAll(this.contextManager.contextsInAnalysisRoot(resource));
            }
        });
        return contexts;
    }
    _getResolvedCompilationUnitToResendNotification(context : any,source : any) : any {
        let librarySources : core.DartList<any> = context.getLibrariesContaining(source);
        if (librarySources.isEmpty) {
            return null;
        }
        let librarySource : any = librarySources[0];
        if (op(Op.EQUALS,context.getResult(librarySource,LIBRARY_ELEMENT6),null)) {
            return null;
        }
        return runWithActiveContext(context,() =>  {
            return context.resolveCompilationUnit2(source,librarySource);
        });
    }
    _hasAnalysisServiceSubscription(service : any,file : string) : boolean {
        return (((_5_)=>(!!_5_)?_5_.contains(file):null)(this.analysisServices.get(service)) || false);
    }
    _scheduleAnalysisImplementedNotification() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let files : core.DartSet<string> = this.analysisServices.get(AnalysisService.IMPLEMENTED);
            if (files != null) {
                scheduleImplementedNotification(this,files);
            }
        } )());
    }

    _schedulePerformOperation() : void {
        if (this.performOperationPending) {
            return;
        }
        let now : number = new core.DartDateTime.now().millisecondsSinceEpoch;
        if (now > this._nextPerformOperationDelayTime && AnalysisServer.performOperationDelayFrequency > 0) {
            this._nextPerformOperationDelayTime = now + AnalysisServer.performOperationDelayFrequency;
            new async.Future.delayed(new core.DartDuration({
                milliseconds : 1}),this.performOperation.bind(this));
        }else {
            new async.Future<any>(this.performOperation.bind(this));
        }
        this.performOperationPending = true;
    }
    _setupIndexInvalidation() : void {
        if (op(Op.EQUALS,this.index,null)) {
            return;
        }
        this.onContextsChanged.listen((event : any) =>  {
            for(let context of event.added) {
                context.onResultChanged(RESOLVED_UNIT3).listen((event : any) =>  {
                    if (event.wasComputed) {
                        let value : core.DartObject = event.value;
                        if (is(value, any)) {
                            this.index.indexDeclarations(value);
                        }
                    }
                });
                context.onResultChanged(RESOLVED_UNIT).listen((event : any) =>  {
                    if (event.wasInvalidated) {
                        let target : any = event.target;
                        this.index.removeUnit(event.context,target.library,target.unit);
                    }
                });
            }
            for(let context of event.removed) {
                this.index.removeContext(context);
            }
        });
    }
}

export namespace AnalysisServerOptions {
    export type Constructors = 'AnalysisServerOptions';
    export type Interface = Omit<AnalysisServerOptions, Constructors>;
}
@DartClass
export class AnalysisServerOptions {
    enableIncrementalResolutionApi : boolean;

    enableIncrementalResolutionValidation : boolean;

    enableNewAnalysisDriver : boolean;

    useAnalysisHighlight2 : boolean;

    fileReadMode : string;

    newAnalysisDriverLog : string;

    enableVerboseFlutterCompletions : boolean;

    constructor() {
    }
    @defaultConstructor
    AnalysisServerOptions() {
        this.enableIncrementalResolutionApi = false;
        this.enableIncrementalResolutionValidation = false;
        this.enableNewAnalysisDriver = false;
        this.useAnalysisHighlight2 = false;
        this.fileReadMode = 'as-is';
        this.enableVerboseFlutterCompletions = false;
    }
}

export namespace ContextSourcePair {
    export type Constructors = 'ContextSourcePair';
    export type Interface = Omit<ContextSourcePair, Constructors>;
}
@DartClass
export class ContextSourcePair {
    context : any;

    source : any;

    constructor(context : any,source : any) {
    }
    @defaultConstructor
    ContextSourcePair(context : any,source : any) {
        this.context = context;
        this.source = source;
    }
}

export namespace PriorityChangeEvent {
    export type Constructors = 'PriorityChangeEvent';
    export type Interface = Omit<PriorityChangeEvent, Constructors>;
}
@DartClass
export class PriorityChangeEvent {
    firstSource : any;

    constructor(firstSource : any) {
    }
    @defaultConstructor
    PriorityChangeEvent(firstSource : any) {
        this.firstSource = firstSource;
    }
}

export namespace ServerContextManagerCallbacks {
    export type Constructors = 'ServerContextManagerCallbacks';
    export type Interface = Omit<ServerContextManagerCallbacks, Constructors>;
}
@DartClass
export class ServerContextManagerCallbacks extends any {
    analysisServer : AnalysisServer;

    resourceProvider : any;

    constructor(analysisServer : AnalysisServer,resourceProvider : any) {
    }
    @defaultConstructor
    ServerContextManagerCallbacks(analysisServer : AnalysisServer,resourceProvider : any) {
        this.analysisServer = analysisServer;
        this.resourceProvider = resourceProvider;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addAnalysisDriver(folder : any,contextRoot : any,options : any) : any {
        let builder : any = this.createContextBuilder(folder,options);
        let analysisDriver : any = builder.buildDriver(contextRoot);
        analysisDriver.results.listen((result : any) =>  {
            let notificationManager : any = this.analysisServer.notificationManager;
            let path : string = result.path;
            if (this.analysisServer.shouldSendErrorsNotificationFor(path)) {
                if (notificationManager != null) {
                    notificationManager.recordAnalysisErrors(NotificationManager.serverId,path,null /*topLevl*/.doAnalysisError_listFromEngine(result.driver.analysisOptions,result.lineInfo,result.errors));
                }else {
                    new_sendErrorNotification(this.analysisServer,result);
                }
            }
            let unit : any = result.unit;
            if (unit != null) {
                if (notificationManager != null) {
                    if (this.analysisServer._hasAnalysisServiceSubscription(AnalysisService.HIGHLIGHTS,path)) {
                        this._runDelayed(() =>  {
                            notificationManager.recordHighlightRegions(NotificationManager.serverId,path,this._computeHighlightRegions(unit));
                        });
                    }
                    if (this.analysisServer._hasAnalysisServiceSubscription(AnalysisService.NAVIGATION,path)) {
                        this._runDelayed(() =>  {
                            notificationManager.recordNavigationParams(NotificationManager.serverId,path,this._computeNavigationParams(path,unit));
                        });
                    }
                    if (this.analysisServer._hasAnalysisServiceSubscription(AnalysisService.OCCURRENCES,path)) {
                        this._runDelayed(() =>  {
                            notificationManager.recordOccurrences(NotificationManager.serverId,path,this._computeOccurrences(unit));
                        });
                    }
                }else {
                    if (this.analysisServer._hasAnalysisServiceSubscription(AnalysisService.HIGHLIGHTS,path)) {
                        this._runDelayed(() =>  {
                            sendAnalysisNotificationHighlights(this.analysisServer,path,unit);
                        });
                    }
                    if (this.analysisServer._hasAnalysisServiceSubscription(AnalysisService.NAVIGATION,path)) {
                        this._runDelayed(() =>  {
                            new_sendDartNotificationNavigation(this.analysisServer,result);
                        });
                    }
                    if (this.analysisServer._hasAnalysisServiceSubscription(AnalysisService.OCCURRENCES,path)) {
                        this._runDelayed(() =>  {
                            new_sendDartNotificationOccurrences(this.analysisServer,result);
                        });
                    }
                }
                if (this.analysisServer._hasAnalysisServiceSubscription(AnalysisService.OUTLINE,path)) {
                    this._runDelayed(() =>  {
                        let sourceKind : any = unit.directives.any((d : any) =>  {
                            return is(d, any);
                        }) ? SourceKind.PART : SourceKind.LIBRARY;
                        sendAnalysisNotificationOutline(this.analysisServer,path,result.lineInfo,sourceKind,unit);
                    });
                }
                if (this.analysisServer._hasAnalysisServiceSubscription(AnalysisService.OVERRIDES,path)) {
                    this._runDelayed(() =>  {
                        sendAnalysisNotificationOverrides(this.analysisServer,path,unit);
                    });
                }
            }
        });
        analysisDriver.exceptions.listen((result : any) =>  {
            let message : string = `Analysis failed: ${result.path}`;
            if (result.contextKey != null) {
                message += ` context: ${result.contextKey}`;
            }
            AnalysisEngine.instance.logger.logError(message,result.exception);
        });
        this.analysisServer.driverMap.set(folder,analysisDriver);
        return analysisDriver;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addContext(folder : any,options : any) : any {
        let builder : any = this.createContextBuilder(folder,options);
        let context : any = builder.buildContext(folder.path);
        this.analysisServer.folderMap.set(folder,context);
        this.analysisServer._onContextsChangedController.add(new bare.createInstance(any,null,{
            added : new core.DartList.literal(context)}));
        this.analysisServer.schedulePerformAnalysisOperation(context);
        return context;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyChangesToContext(contextFolder : any,changeSet : any) : void {
        if (this.analysisServer.options.enableNewAnalysisDriver) {
            let analysisDriver : any = this.analysisServer.driverMap.get(contextFolder);
            if (analysisDriver != null) {
                changeSet.addedSources.forEach((source : any) =>  {
                    analysisDriver.addFile(source.fullName);
                    this.analysisServer._onFileAddedController.add(source.fullName);
                });
                changeSet.changedSources.forEach((source : any) =>  {
                    analysisDriver.changeFile(source.fullName);
                    this.analysisServer._onFileChangedController.add(source.fullName);
                });
                changeSet.removedSources.forEach((source : any) =>  {
                    analysisDriver.removeFile(source.fullName);
                });
            }
        }else {
            let context : any = this.analysisServer.folderMap.get(contextFolder);
            if (context != null) {
                context.applyChanges(changeSet);
                this.analysisServer.schedulePerformAnalysisOperation(context);
                let flushedFiles : core.DartList<string> = new core.DartList<string>();
                for(let source of changeSet.removedSources) {
                    flushedFiles.add(source.fullName);
                }
                sendAnalysisNotificationFlushResults(this.analysisServer,flushedFiles);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyFileRemoved(driver : any,file : string) : void {
        driver.removeFile(file);
        sendAnalysisNotificationFlushResults(this.analysisServer,new core.DartList.literal(file));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    broadcastWatchEvent(event : any) : void {
        this.analysisServer.pluginManager.broadcastWatchEvent(event);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computingPackageMap(computing : boolean) : void {
        return this.analysisServer._computingPackageMap(computing);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createContextBuilder(folder : any,options : any) : any {
        let defaultPackageFilePath : string = null;
        let defaultPackagesDirectoryPath : string = null;
        let path : string = op(Op.INDEX,(this.analysisServer.contextManager as any).normalizedPackageRoots,folder.path);
        if (path != null) {
            let resource : any = this.resourceProvider.getResource(path);
            if (resource.exists) {
                if (is(resource, any)) {
                    defaultPackageFilePath = path;
                }else {
                    defaultPackagesDirectoryPath = path;
                }
            }
        }
        let builderOptions : any = new bare.createInstance(any,null);
        builderOptions.defaultOptions = options;
        builderOptions.defaultPackageFilePath = defaultPackageFilePath;
        builderOptions.defaultPackagesDirectoryPath = defaultPackagesDirectoryPath;
        let builder : any = new bare.createInstance(any,null,this.resourceProvider,this.analysisServer.sdkManager,this.analysisServer.overlayState,{
            options : builderOptions});
        builder.fileResolverProvider = this.analysisServer.fileResolverProvider;
        builder.packageResolverProvider = this.analysisServer.packageResolverProvider;
        builder.analysisDriverScheduler = this.analysisServer.analysisDriverScheduler;
        builder.performanceLog = this.analysisServer._analysisPerformanceLogger;
        builder.byteStore = this.analysisServer.byteStore;
        builder.fileContentOverlay = this.analysisServer.fileContentOverlay;
        return builder;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    moveContext(from : any,to : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeContext(folder : any,flushedFiles : core.DartList<string>) : void {
        if (this.analysisServer.options.enableNewAnalysisDriver) {
            sendAnalysisNotificationFlushResults(this.analysisServer,flushedFiles);
            let driver : any = this.analysisServer.driverMap.remove(folder);
            driver.dispose();
        }else {
            let context : any = this.analysisServer.folderMap.remove(folder);
            sendAnalysisNotificationFlushResults(this.analysisServer,flushedFiles);
            this.analysisServer.operationQueue.contextRemoved(context);
            this.analysisServer._onContextsChangedController.add(new bare.createInstance(any,null,{
                removed : new core.DartList.literal(context)}));
            this.analysisServer.sendContextAnalysisDoneNotifications(context,AnalysisDoneReason.CONTEXT_REMOVED);
            context.dispose();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateContextPackageUriResolver(context : any) : void {
        this.analysisServer._onContextsChangedController.add(new bare.createInstance(any,null,{
            changed : new core.DartList.literal(context)}));
        this.analysisServer.schedulePerformAnalysisOperation(context);
    }
    _computeHighlightRegions(unit : any) : core.DartList<any> {
        if (this.analysisServer.options.useAnalysisHighlight2) {
            return new bare.createInstance(any,null,unit).compute();
        }else {
            return new bare.createInstance(any,null,unit).compute();
        }
    }
    _computeLibraryName(unit : any) : string {
        for(let directive of unit.directives) {
            if (is(directive, any) && directive.name != null) {
                return directive.name.name;
            }
        }
        for(let directive of unit.directives) {
            if (is(directive, any) && directive.libraryName != null) {
                return directive.libraryName.name;
            }
        }
        return null;
    }
    _computeNavigationParams(path : string,unit : any) : any {
        let collector : any = new bare.createInstance(any,null);
        computeDartNavigation(collector,unit,null,null);
        collector.createRegions();
        return new bare.createInstance(any,null,path,collector.regions,collector.targets,collector.files);
    }
    _computeOccurrences(unit : any) : core.DartList<any> {
        let collector : any = new bare.createInstance(any,null);
        addDartOccurrences(collector,unit);
        return collector.allOccurrences;
    }
    _computeOutlineParams(path : string,unit : any,lineInfo : any) : any {
        let sourceKind : any = unit.directives.any((d : any) =>  {
            return is(d, any);
        }) ? SourceKind.PART : SourceKind.LIBRARY;
        let fileKind : any = lib6.FileKind.LIBRARY;
        if (op(Op.EQUALS,sourceKind,SourceKind.LIBRARY)) {
            fileKind = lib6.FileKind.LIBRARY;
        }else if (op(Op.EQUALS,sourceKind,SourceKind.PART)) {
            fileKind = lib6.FileKind.PART;
        }
        let libraryName : string = this._computeLibraryName(unit);
        let computer : any = new bare.createInstance(any,null,path,lineInfo,unit);
        let outline : any = computer.compute();
        return new bare.createInstance(any,null,path,fileKind,outline,{
            libraryName : libraryName});
    }
    _runDelayed(f : () => any) : void {
        new async.Future<any>(f);
    }
}

export namespace ServerPerformance {
    export type Constructors = 'ServerPerformance';
    export type Interface = Omit<ServerPerformance, Constructors>;
}
@DartClass
export class ServerPerformance {
    startTime : number;

    requestCount : number;

    requestLatency : number;

    maxLatency : number;

    slowRequestCount : number;

    logRequest(request : any) : void {
        ++this.requestCount;
        if (request.clientRequestTime != null) {
            let latency : number = new core.DartDateTime.now().millisecondsSinceEpoch - request.clientRequestTime;
            this.requestLatency += latency;
            this.maxLatency = math.max(this.maxLatency,latency);
            if (latency > 150) {
                ++this.slowRequestCount;
            }
        }
    }
    constructor() {
    }
    @defaultConstructor
    ServerPerformance() {
        this.startTime = new core.DartDateTime.now().millisecondsSinceEpoch;
        this.requestCount = 0;
        this.requestLatency = 0;
        this.maxLatency = 0;
        this.slowRequestCount = 0;
    }
}

export namespace ServerPerformanceStatistics {
    export type Constructors = 'ServerPerformanceStatistics';
    export type Interface = Omit<ServerPerformanceStatistics, Constructors>;
}
@DartClass
export class ServerPerformanceStatistics {
    private static __$executionNotifications : any;
    static get executionNotifications() : any { 
        if (this.__$executionNotifications===undefined) {
            this.__$executionNotifications = new bare.createInstance(any,null,'executionNotifications');
        }
        return this.__$executionNotifications;
    }
    static set executionNotifications(__$value : any)  { 
        this.__$executionNotifications = __$value;
    }

    private static __$indexOperation : any;
    static get indexOperation() : any { 
        if (this.__$indexOperation===undefined) {
            this.__$indexOperation = new bare.createInstance(any,null,'indexOperation');
        }
        return this.__$indexOperation;
    }
    static set indexOperation(__$value : any)  { 
        this.__$indexOperation = __$value;
    }

    private static __$intertask : any;
    static get intertask() : any { 
        if (this.__$intertask===undefined) {
            this.__$intertask = new bare.createInstance(any,null,'intertask');
        }
        return this.__$intertask;
    }
    static set intertask(__$value : any)  { 
        this.__$intertask = __$value;
    }

    private static __$idle : any;
    static get idle() : any { 
        if (this.__$idle===undefined) {
            this.__$idle = new bare.createInstance(any,null,'idle');
        }
        return this.__$idle;
    }
    static set idle(__$value : any)  { 
        this.__$idle = __$value;
    }

    private static __$notices : any;
    static get notices() : any { 
        if (this.__$notices===undefined) {
            this.__$notices = new bare.createInstance(any,null,'notices');
        }
        return this.__$notices;
    }
    static set notices(__$value : any)  { 
        this.__$notices = __$value;
    }

    private static __$pub : any;
    static get pub() : any { 
        if (this.__$pub===undefined) {
            this.__$pub = new bare.createInstance(any,null,'pub');
        }
        return this.__$pub;
    }
    static set pub(__$value : any)  { 
        this.__$pub = __$value;
    }

    private static __$serverChannel : any;
    static get serverChannel() : any { 
        if (this.__$serverChannel===undefined) {
            this.__$serverChannel = new bare.createInstance(any,null,'serverChannel');
        }
        return this.__$serverChannel;
    }
    static set serverChannel(__$value : any)  { 
        this.__$serverChannel = __$value;
    }

    private static __$serverRequests : any;
    static get serverRequests() : any { 
        if (this.__$serverRequests===undefined) {
            this.__$serverRequests = new bare.createInstance(any,null,'serverRequests');
        }
        return this.__$serverRequests;
    }
    static set serverRequests(__$value : any)  { 
        this.__$serverRequests = __$value;
    }

    private static __$splitStore : any;
    static get splitStore() : any { 
        if (this.__$splitStore===undefined) {
            this.__$splitStore = new bare.createInstance(any,null,'splitStore');
        }
        return this.__$splitStore;
    }
    static set splitStore(__$value : any)  { 
        this.__$splitStore = __$value;
    }

    constructor() {
    }
    @defaultConstructor
    ServerPerformanceStatistics() {
    }
}

export class properties {
}
