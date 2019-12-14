/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/domain_analysis.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/analyzer/lib/error/error";

export namespace AnalysisDomainHandler {
    export type Constructors = 'AnalysisDomainHandler';
    export type Interface = Omit<AnalysisDomainHandler, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisDomainHandler implements any.Interface {
    server : any;

    constructor(server : any) {
    }
    @defaultConstructor
    AnalysisDomainHandler(server : any) {
        this.server = server;
        this._callAnalysisDomainReceivers();
    }
    getErrors(request : any) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let file : string = new bare.createInstance(any,null,request).file;
            var send : (analysisOptions : any,lineInfo : any,errors : core.DartList<any>) => void = (analysisOptions : any,lineInfo : any,errors : core.DartList<any>) : void =>  {
                if (op(Op.EQUALS,lineInfo,null)) {
                    this.server.sendResponse(new bare.createInstance(any,null,request));
                }else {
                    let protocolErrors : core.DartList<any> = doAnalysisError_listFromEngine(analysisOptions,lineInfo,errors);
                    this.server.sendResponse(new bare.createInstance(any,null,protocolErrors).toResponse(request.id));
                }
            };
            if (this.server.options.enableNewAnalysisDriver) {
                let result = await this.server.getAnalysisResult(file);
                if (this.server.onResultErrorSupplementor != null) {
                    if (result != null) {
                        await this.server.onResultErrorSupplementor(file,result.errors);
                    }else {
                        this.server.onNoAnalysisResult(file,send);
                        return;
                    }
                }
                send(((t)=>(!!t)?t.analysisOptions:null)(((t)=>(!!t)?t.driver:null)(result)),((t)=>(!!t)?t.lineInfo:null)(result),((t)=>(!!t)?t.errors:null)(result));
                return;
            }
            let completionFuture : async.Future<any> = this.server.onFileAnalysisComplete(file);
            if (op(Op.EQUALS,completionFuture,null)) {
                this.server.sendResponse(new bare.createInstance(any,null,request));
            }
            completionFuture.then((reason : any) => new async.Future.fromPromise(( async () : Promise<any> =>  {
                switch (reason) {
                    case AnalysisDoneReason.COMPLETE:
                        let errorInfo : any = this.server.getErrors(file);
                        if (op(Op.EQUALS,errorInfo,null)) {
                            this.server.sendResponse(new bare.createInstance(any,null,request));
                        }else {
                            let context : any = this.server.getAnalysisContext(file);
                            send(context.analysisOptions,errorInfo.lineInfo,errorInfo.errors);
                        }
                        break;
                    case AnalysisDoneReason.CONTEXT_REMOVED:
                        await this.getErrors(request);
                        break;
                }
            })()));
        } )());
    }

    getHover(request : any) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,request);
            let unit : any;
            if (this.server.options.enableNewAnalysisDriver) {
                let result : any = await this.server.getAnalysisResult(params.file);
                unit = ((t)=>(!!t)?t.unit:null)(result);
            }else {
                unit = await this.server.getResolvedCompilationUnit(params.file);
            }
            let hovers : core.DartList<any> = new core.DartList.literal<any>();
            if (unit != null) {
                let hoverInformation : any = new bare.createInstance(any,null,unit,params.offset).compute();
                if (hoverInformation != null) {
                    hovers.add(hoverInformation);
                }
            }
            this.server.sendResponse(new bare.createInstance(any,null,hovers).toResponse(request.id));
        } )());
    }

    getLibraryDependencies(request : any) : any {
        this.server.onAnalysisComplete.then((_ : any) =>  {
            let collector : any = new bare.createInstance(any,null,this.server.analysisContexts);
            let libraries : core.DartSet<string> = collector.collectLibraryDependencies();
            let packageMap : core.DartMap<string,core.DartMap<string,core.DartList<string>>> = collector.calculatePackageMap(this.server.folderMap);
            this.server.sendResponse(new bare.createInstance(any,null,libraries.toList({
                growable : false}),packageMap).toResponse(request.id));
        }).catchError((error : any,st : any) =>  {
            this.server.sendResponse(new bare.createInstance(any,null,request,error,st));
        });
        return Response.DELAYED_RESPONSE;
    }
    getNavigation(request : any) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,request);
            let file : string = params.file;
            if (this.server.options.enableNewAnalysisDriver) {
                let driver : any = this.server.getAnalysisDriver(file);
                if (op(Op.EQUALS,driver,null)) {
                    this.server.sendResponse(new bare.createInstance(any,null,request));
                }else {
                    let result : any = await this.server.getAnalysisResult(file);
                    let unit : any = ((t)=>(!!t)?t.unit:null)(result);
                    if (op(Op.EQUALS,unit,null) || !result.exists) {
                        this.server.sendResponse(new bare.createInstance(any,null,request));
                    }else {
                        let collector : any = new bare.createInstance(any,null);
                        computeDartNavigation(collector,unit,params.offset,params.length);
                        collector.createRegions();
                        this.server.sendResponse(new bare.createInstance(any,null,collector.files,collector.targets,collector.regions).toResponse(request.id));
                    }
                }
                return;
            }
            let analysisFuture : async.Future<any> = this.server.onFileAnalysisComplete(file);
            if (op(Op.EQUALS,analysisFuture,null)) {
                this.server.sendResponse(new bare.createInstance(any,null,request));
                return;
            }
            analysisFuture.then((reason : any) => new async.Future.fromPromise(( async () : Promise<any> =>  {
                switch (reason) {
                    case AnalysisDoneReason.COMPLETE:
                        let unit : any = await this.server.getResolvedCompilationUnit(file);
                        if (op(Op.EQUALS,unit,null)) {
                            this.server.sendResponse(new bare.createInstance(any,null,request));
                        }else {
                            let unitElement : any = unit.element;
                            let collector : any = computeNavigation(this.server,unitElement.context,unitElement.source,params.offset,params.length);
                            this.server.sendResponse(new bare.createInstance(any,null,collector.files,collector.targets,collector.regions).toResponse(request.id));
                        }
                        break;
                    case AnalysisDoneReason.CONTEXT_REMOVED:
                        await this.getNavigation(request);
                        break;
                }
            })()));
        } )());
    }

    getReachableSources(request : any) : any {
        let params : any = new bare.createInstance(any,null,request);
        let pair : any = this.server.getContextSourcePair(params.file);
        if (op(Op.EQUALS,pair.context,null) || op(Op.EQUALS,pair.source,null)) {
            return new bare.createInstance(any,null,request);
        }
        let sources : core.DartMap<string,core.DartList<string>> = new bare.createInstance(any,null,pair.source,pair.context).collectSources();
        return new bare.createInstance(any,null,sources).toResponse(request.id);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleRequest(request : any) : any {
        try {
            let requestName : string = request.method;
            if (requestName == ANALYSIS_GET_ERRORS) {
                this.getErrors(request);
                return Response.DELAYED_RESPONSE;
            }else if (requestName == ANALYSIS_GET_HOVER) {
                this.getHover(request);
                return Response.DELAYED_RESPONSE;
            }else if (requestName == ANALYSIS_GET_LIBRARY_DEPENDENCIES) {
                return this.getLibraryDependencies(request);
            }else if (requestName == ANALYSIS_GET_NAVIGATION) {
                this.getNavigation(request);
                return Response.DELAYED_RESPONSE;
            }else if (requestName == ANALYSIS_GET_REACHABLE_SOURCES) {
                return this.getReachableSources(request);
            }else if (requestName == ANALYSIS_REANALYZE) {
                return this.reanalyze(request);
            }else if (requestName == ANALYSIS_SET_ANALYSIS_ROOTS) {
                return this.setAnalysisRoots(request);
            }else if (requestName == ANALYSIS_SET_GENERAL_SUBSCRIPTIONS) {
                return this.setGeneralSubscriptions(request);
            }else if (requestName == ANALYSIS_SET_PRIORITY_FILES) {
                return this.setPriorityFiles(request);
            }else if (requestName == ANALYSIS_SET_SUBSCRIPTIONS) {
                return this.setSubscriptions(request);
            }else if (requestName == ANALYSIS_UPDATE_CONTENT) {
                return this.updateContent(request);
            }else if (requestName == ANALYSIS_UPDATE_OPTIONS) {
                return this.updateOptions(request);
            }
        } catch (__error__) {

            if (is(__error__,any)){
                let exception : any = __error__;
                return exception.response;
            }
        }
        return null;
    }
    reanalyze(request : any) : any {
        let params : any = new bare.createInstance(any,null,request);
        let roots : core.DartList<string> = params.roots;
        if (roots == null || roots.isNotEmpty) {
            let includedPaths : core.DartList<string> = this.server.contextManager.includedPaths;
            let rootResources : core.DartList<any> = null;
            if (roots != null) {
                rootResources = new core.DartList.literal<any>();
                for(let rootPath of roots) {
                    if (!includedPaths.contains(rootPath)) {
                        return new bare.createInstance(any,null,request,rootPath);
                    }
                    rootResources.add(this.server.resourceProvider.getResource(rootPath));
                }
            }
            this.server.reanalyze(rootResources);
        }
        let converter : any = new bare.createInstance(any,null);
        this.server.pluginManager.broadcastRequest(converter.convertAnalysisReanalyzeParams(params));
        return new bare.createInstance(any,null).toResponse(request.id);
    }
    setAnalysisRoots(request : any) : any {
        let params = new bare.createInstance(any,null,request);
        let includedPathList : core.DartList<string> = params.included;
        let excludedPathList : core.DartList<string> = params.excluded;
        for(let path of includedPathList) {
            if (!this.server.isValidFilePath(path)) {
                return new bare.createInstance(any,null,request,path);
            }
        }
        for(let path of excludedPathList) {
            if (!this.server.isValidFilePath(path)) {
                return new bare.createInstance(any,null,request,path);
            }
        }
        this.server.setAnalysisRoots(request.id,includedPathList,excludedPathList,(params.packageRoots || new core.DartMap.literal([
        ])));
        return new bare.createInstance(any,null).toResponse(request.id);
    }
    setGeneralSubscriptions(request : any) : any {
        let params : any = new bare.createInstance(any,null,request);
        this.server.setGeneralAnalysisSubscriptions(params.subscriptions);
        return new bare.createInstance(any,null).toResponse(request.id);
    }
    setPriorityFiles(request : any) : any {
        let params = new bare.createInstance(any,null,request);
        this.server.setPriorityFiles(request.id,params.files);
        let converter : any = new bare.createInstance(any,null);
        this.server.pluginManager.setAnalysisSetPriorityFilesParams(converter.convertAnalysisSetPriorityFilesParams(params));
        return new bare.createInstance(any,null).toResponse(request.id);
    }
    setSubscriptions(request : any) : any {
        let params = new bare.createInstance(any,null,request);
        let subMap : core.DartMap<any,core.DartSet<string>> = mapMap(params.subscriptions,{
            valueCallback : (subscriptions : core.DartList<string>) =>  {
                return subscriptions.toSet();
            }});
        this.server.setAnalysisSubscriptions(subMap);
        let converter : any = new bare.createInstance(any,null);
        this.server.pluginManager.setAnalysisSetSubscriptionsParams(converter.convertAnalysisSetSubscriptionsParams(params));
        return new bare.createInstance(any,null).toResponse(request.id);
    }
    updateContent(request : any) : any {
        let params = new bare.createInstance(any,null,request);
        this.server.updateContent(request.id,params.files);
        let converter : any = new bare.createInstance(any,null);
        this.server.pluginManager.setAnalysisUpdateContentParams(converter.convertAnalysisUpdateContentParams(params));
        return new bare.createInstance(any,null).toResponse(request.id);
    }
    updateOptions(request : any) : any {
        let params = new bare.createInstance(any,null,request);
        let newOptions : any = params.options;
        let updaters : core.DartList<any> = new core.DartList<any>();
        if (newOptions.generateDart2jsHints != null) {
            updaters.add((options : any) =>  {
                options.dart2jsHint = newOptions.generateDart2jsHints;
            });
        }
        if (newOptions.generateHints != null) {
            updaters.add((options : any) =>  {
                options.hint = newOptions.generateHints;
            });
        }
        if (newOptions.generateLints != null) {
            updaters.add((options : any) =>  {
                options.lint = newOptions.generateLints;
            });
        }
        if (newOptions.enableSuperMixins != null) {
            updaters.add((options : any) =>  {
                options.enableSuperMixins = newOptions.enableSuperMixins;
            });
        }
        this.server.updateOptions(updaters);
        return new bare.createInstance(any,null).toResponse(request.id);
    }
    _callAnalysisDomainReceivers() : void {
        let analysisDomain : any = new AnalysisDomainImpl(this.server);
        for(let function of this.server.serverPlugin.setAnalysisDomainFunctions) {
            try {
                function(analysisDomain);
            } catch (__error__) {

                {
                    let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let exception = __error__;
                    lib3.AnalysisEngine.instance.logger.logError(`Exception from analysis domain receiver: ${function.runtimeType}`,new bare.createInstance(any,null,exception,stackTrace));
                }
            }
        }
    }
}

export namespace AnalysisDomainImpl {
    export type Constructors = 'AnalysisDomainImpl';
    export type Interface = Omit<AnalysisDomainImpl, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisDomainImpl implements any.Interface {
    server : any;

    controllers : core.DartMap<any,async.DartStreamController<any>>;

    constructor(server : any) {
    }
    @defaultConstructor
    AnalysisDomainImpl(server : any) {
        this.controllers = new core.DartMap.literal([
        ]);
        this.server = server;
        this.server.onContextsChanged.listen((event : any) =>  {
            event.added.forEach(this._subscribeForContext.bind(this));
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onResultChanged(descriptor : any) : async.DartStream<any> {
        let stream : async.DartStream<any> = this.controllers.putIfAbsent(descriptor,() =>  {
            return new async.DartStreamController.broadcast();
        }).stream;
        this.server.analysisContexts.forEach(this._subscribeForContext.bind(this));
        return stream;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scheduleNotification(context : any,source : any,service : any) : void {
        let file : string = source.fullName;
        if (this.server.hasAnalysisSubscription(service,file)) {
            if (op(Op.EQUALS,service,AnalysisService.NAVIGATION)) {
                this.server.scheduleOperation(new bare.createInstance(any,null,context,source));
            }
            if (op(Op.EQUALS,service,AnalysisService.OCCURRENCES)) {
                this.server.scheduleOperation(new bare.createInstance(any,null,context,source));
            }
        }
    }
    _subscribeForContext(context : any) : void {
        for(let descriptor of this.controllers.keys) {
            context.onResultChanged(descriptor).listen((result : any) =>  {
                let controller : async.DartStreamController<any> = this.controllers.get(result.descriptor);
                if (controller != null) {
                    controller.add(result);
                }
            });
        }
    }
}

export class properties {
}
