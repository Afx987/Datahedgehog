/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/domain_execution.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace ExecutionDomainHandler {
    export type Constructors = 'ExecutionDomainHandler';
    export type Interface = Omit<ExecutionDomainHandler, Constructors>;
}
@DartClass
@Implements(any)
export class ExecutionDomainHandler implements any.Interface {
    server : any;

    nextContextId : number;

    contextMap : core.DartMap<string,string>;

    onFileAnalyzed : async.DartStreamSubscription<any>;

    constructor(server : any) {
    }
    @defaultConstructor
    ExecutionDomainHandler(server : any) {
        this.nextContextId = 0;
        this.contextMap = new core.DartHashMap<string,string>();
        this.server = server;
    }
    createContext(request : any) : any {
        let file : string = new bare.createInstance(any,null,request).contextRoot;
        let contextId : string = new core.DartInt((this.nextContextId++)).toString();
        this.contextMap.set(contextId,file);
        return new bare.createInstance(any,null,contextId).toResponse(request.id);
    }
    deleteContext(request : any) : any {
        let contextId : string = new bare.createInstance(any,null,request).id;
        this.contextMap.remove(contextId);
        return new bare.createInstance(any,null).toResponse(request.id);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleRequest(request : any) : any {
        try {
            let requestName : string = request.method;
            if (requestName == EXECUTION_CREATE_CONTEXT) {
                return this.createContext(request);
            }else if (requestName == EXECUTION_DELETE_CONTEXT) {
                return this.deleteContext(request);
            }else if (requestName == EXECUTION_MAP_URI) {
                return this.mapUri(request);
            }else if (requestName == EXECUTION_SET_SUBSCRIPTIONS) {
                return this.setSubscriptions(request);
            }
        } catch (__error__) {

            if (is(__error__,any)){
                let exception : any = __error__;
                return exception.response;
            }
        }
        return null;
    }
    mapUri(request : any) : any {
        let params : any = new bare.createInstance(any,null,request);
        let contextId : string = params.id;
        let path : string = this.contextMap.get(contextId);
        if (path == null) {
            return new bare.createInstance(any,null,request,'id',`There is no execution context with an id of ${contextId}`);
        }
        let sourceFactory : any;
        let driver : any;
        if (this.server.options.enableNewAnalysisDriver) {
            driver = this.server.getAnalysisDriver(path);
            if (op(Op.EQUALS,driver,null)) {
                return new bare.createInstance(any,null,request,contextId);
            }
            sourceFactory = driver.sourceFactory;
        }else {
            let context : any = this.server.getContainingContext(path);
            if (op(Op.EQUALS,context,null)) {
                return new bare.createInstance(any,null,request,contextId);
            }
            sourceFactory = context.sourceFactory;
        }
        let file : string = params.file;
        let uri : string = params.uri;
        if (file != null) {
            if (uri != null) {
                return new bare.createInstance(any,null,request,'file','Either file or uri must be provided, but not both');
            }
            let resource : any = this.server.resourceProvider.getResource(file);
            if (!resource.exists) {
                return new bare.createInstance(any,null,request,'file','Must exist');
            }else if (isNot(resource, any)) {
                return new bare.createInstance(any,null,request,'file','Must not refer to a directory');
            }
            let source : any;
            if (this.server.options.enableNewAnalysisDriver) {
                source = driver.fsState.getFileForPath(file).source;
            }else {
                let contextSource : any = this.server.getContextSourcePair(file);
                source = contextSource.source;
            }
            if (source.uriKind != UriKind.FILE_URI) {
                uri = source.uri.toString();
            }else {
                uri = sourceFactory.restoreUri(source).toString();
            }
            return new bare.createInstance(any,null,{
                uri : uri}).toResponse(request.id);
        }else if (uri != null) {
            let source : any = sourceFactory.forUri(uri);
            if (op(Op.EQUALS,source,null)) {
                return new bare.createInstance(any,null,request,'uri','Invalid URI');
            }
            file = source.fullName;
            return new bare.createInstance(any,null,{
                file : file}).toResponse(request.id);
        }
        return new bare.createInstance(any,null,request,'file','Either file or uri must be provided');
    }
    setSubscriptions(request : any) : any {
        if (this.server.options.enableNewAnalysisDriver) {
            return new bare.createInstance(any,null).toResponse(request.id);
        }else {
            let subscriptions : core.DartList<any> = new bare.createInstance(any,null,request).subscriptions;
            if (subscriptions.contains(ExecutionService.LAUNCH_DATA)) {
                if (op(Op.EQUALS,this.onFileAnalyzed,null)) {
                    this.onFileAnalyzed = this.server.onFileAnalyzed.listen(this._fileAnalyzed.bind(this));
                    this._reportCurrentFileStatus();
                }
            }else {
                if (this.onFileAnalyzed != null) {
                    this.onFileAnalyzed.cancel();
                    this.onFileAnalyzed = null;
                }
            }
            return new bare.createInstance(any,null).toResponse(request.id);
        }
    }
    _fileAnalyzed(notice : any) : void {
        ServerPerformanceStatistics.executionNotifications.makeCurrentWhile(() =>  {
            let source : any = notice.source;
            let filePath : string = source.fullName;
            let isDartFile : boolean = notice.resolvedDartUnit != null;
            if (!isDartFile) {
                return;
            }
            let context : any = this.server.getContainingContext(filePath);
            if (op(Op.EQUALS,context,null)) {
                return;
            }
            if (isDartFile) {
                let kind : any = ExecutableKind.NOT_EXECUTABLE;
                if (context.isClientLibrary(source)) {
                    kind = ExecutableKind.CLIENT;
                    if (context.isServerLibrary(source)) {
                        kind = ExecutableKind.EITHER;
                    }
                }else if (context.isServerLibrary(source)) {
                    kind = ExecutableKind.SERVER;
                }
                this.server.sendNotification(new bare.createInstance(any,null,filePath,{
                    kind : kind}).toNotification());
            }
        });
    }
    _isInAnalysisRoot(filePath : string) : boolean {
        return this.server.contextManager.isInAnalysisRoot(filePath);
    }
    _reportCurrentFileStatus() : void {
        for(let context of this.server.analysisContexts) {
            let librarySources : core.DartList<any> = context.librarySources;
            let clientSources : core.DartList<any> = context.launchableClientLibrarySources;
            let serverSources : core.DartList<any> = context.launchableServerLibrarySources;
            for(let source of clientSources) {
                if (serverSources.remove(source)) {
                    this._sendKindNotification(source.fullName,ExecutableKind.EITHER);
                }else {
                    this._sendKindNotification(source.fullName,ExecutableKind.CLIENT);
                }
                librarySources.remove(source);
            }
            for(let source of serverSources) {
                this._sendKindNotification(source.fullName,ExecutableKind.SERVER);
                librarySources.remove(source);
            }
            for(let source of librarySources) {
                this._sendKindNotification(source.fullName,ExecutableKind.NOT_EXECUTABLE);
            }
            for(let source of context.htmlSources) {
                let filePath : string = source.fullName;
                if (this._isInAnalysisRoot(filePath)) {
                    let libraries : core.DartList<any> = context.getLibrariesReferencedFromHtml(source);
                    this.server.sendNotification(new bare.createInstance(any,null,filePath,{
                        referencedFiles : ExecutionDomainHandler._getFullNames(libraries)}).toNotification());
                }
            }
        }
    }
    _sendKindNotification(filePath : string,kind : any) : void {
        if (this._isInAnalysisRoot(filePath)) {
            this.server.sendNotification(new bare.createInstance(any,null,filePath,{
                kind : kind}).toNotification());
        }
    }
    static _getFullNames(sources : core.DartList<any>) : core.DartList<string> {
        return sources.map((source : any) =>  {
            return source.fullName;
        }).toList();
    }
}

export class properties {
}
