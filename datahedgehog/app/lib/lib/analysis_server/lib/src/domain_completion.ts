/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/domain_completion.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace CompletionDomainHandler {
    export type Constructors = 'CompletionDomainHandler';
    export type Interface = Omit<CompletionDomainHandler, Constructors>;
}
@DartClass
export class CompletionDomainHandler extends any {
    private static __$performanceListMaxLength : number;
    static get performanceListMaxLength() : number { 
        if (this.__$performanceListMaxLength===undefined) {
            this.__$performanceListMaxLength = 50;
        }
        return this.__$performanceListMaxLength;
    }

    _nextCompletionId : number;

    performance : any;

    performanceList : core.DartList<any>;

    computeCachePerformance : any;

    _currentRequest : any;

    constructor(server : any) {
    }
    @defaultConstructor
    CompletionDomainHandler(server : any) {
        this._nextCompletionId = 0;
        this.performanceList = new core.DartList<any>();
        super.DartObject(server);
    }
    computeSuggestions(request : any,params : any) : async.Future<CompletionResult> { 
        return new async.Future.fromPromise(( async () =>  {
            let pluginFutures : core.DartMap<any,async.Future<any>>;
            let requestParams : any;
            let file : string = params.file;
            let offset : number = params.offset;
            let driver : any = server.getAnalysisDriver(file);
            if (driver != null) {
                requestParams = new bare.createInstance(any,null,file,offset);
                pluginFutures = server.pluginManager.broadcastRequest(requestParams,{
                    contextRoot : driver.contextRoot});
            }
            let newContributors : core.DartIterable<any> = server.serverPlugin.completionContributors;
            let suggestions : core.DartList<any> = new core.DartList.literal<any>();
            let COMPUTE_SUGGESTIONS_TAG = 'computeSuggestions';
            this.performance.logStartTime(COMPUTE_SUGGESTIONS_TAG);
            for(let contributor of newContributors) {
                let contributorTag : string = `computeSuggestions - ${contributor.runtimeType}`;
                this.performance.logStartTime(contributorTag);
                try {
                    suggestions.addAll(await contributor.computeSuggestions(request));
                } catch (__error__) {

                    if (is(__error__,any)){
                        suggestions.clear();
                        break;
                    }
                }
                this.performance.logElapseTime(contributorTag);
            }
            this.performance.logElapseTime(COMPUTE_SUGGESTIONS_TAG);
            if (pluginFutures != null) {
                let responses : core.DartList<any> = await waitForResponses(pluginFutures,{
                    requestParameters : requestParams});
                for(let response of responses) {
                    let result : any = new bare.createInstance(any,"fromResponse",response);
                    suggestions.addAll(result.results);
                }
            }
            return new CompletionResult(request.replacementOffset,request.replacementLength,suggestions);
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleRequest(request : any) : any {
        return async.runZoned(() =>  {
            let requestName : string = request.method;
            if (requestName == COMPLETION_GET_SUGGESTIONS) {
                this.processRequest(request);
                return Response.DELAYED_RESPONSE;
            }
            return null;
        },{
            onError : (exception : any,stackTrace : any) =>  {
                server.sendServerErrorNotification(`Failed to handle completion domain request: ${request.toJson()}`,exception,stackTrace);
            }});
    }
    ifMatchesRequestClear(completionRequest : any) : void {
        if (op(Op.EQUALS,this._currentRequest,completionRequest)) {
            this._currentRequest = null;
        }
    }
    processRequest(request : any) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            this.performance = new bare.createInstance(any,null);
            let params : any = new bare.createInstance(any,null,request);
            let result : any = await server.getAnalysisResult(params.file);
            if (op(Op.EQUALS,result,null) || !result.exists) {
                if (server.onNoAnalysisCompletion != null) {
                    let completionId : string = new core.DartInt((this._nextCompletionId++)).toString();
                    await server.onNoAnalysisCompletion(request,this,params,this.performance,completionId);
                    return;
                }else {
                    server.sendResponse(new bare.createInstance(any,null,request));
                    return;
                }
            }
            if (op(Op.LT,params.offset,0) || op(Op.GT,params.offset,result.content.length)) {
                server.sendResponse(new bare.createInstance(any,null,request,'params.offset','Expected offset between 0 and source length inclusive,' + ` but found ${params.offset}`));
                return;
            }
            let source : any = server.resourceProvider.getFile(result.path).createSource(result.uri);
            this.recordRequest(this.performance,source,result.content,params.offset);
            let completionRequest : any = new bare.createInstance(any,null,result,server.resourceProvider,source,params.offset,this.performance,server.ideOptions);
            let completionId : string = new core.DartInt((this._nextCompletionId++)).toString();
            this.setNewRequest(completionRequest);
            server.sendResponse(new bare.createInstance(any,null,completionId).toResponse(request.id));
            this.computeSuggestions(completionRequest,params).then((result : CompletionResult) =>  {
                let SEND_NOTIFICATION_TAG = 'send notification';
                this.performance.logStartTime(SEND_NOTIFICATION_TAG);
                this.sendCompletionNotification(completionId,result.replacementOffset,result.replacementLength,result.suggestions);
                this.performance.logElapseTime(SEND_NOTIFICATION_TAG);
                this.performance.notificationCount = 1;
                this.performance.logFirstNotificationComplete('notification 1 complete');
                this.performance.suggestionCountFirst = result.suggestions.length;
                this.performance.suggestionCountLast = result.suggestions.length;
                this.performance.complete();
            }).whenComplete(() =>  {
                this.ifMatchesRequestClear(completionRequest);
            });
        } )());
    }

    recordRequest(performance : any,source : any,content : string,offset : number) : void {
        performance.source = source;
        if (CompletionDomainHandler.performanceListMaxLength == 0 || op(Op.EQUALS,source,null)) {
            return;
        }
        performance.setContentsAndOffset(content,offset);
        while (this.performanceList.length >= CompletionDomainHandler.performanceListMaxLength){
            this.performanceList.removeAt(0);
        }
        this.performanceList.add(performance);
    }
    sendCompletionNotification(completionId : string,replacementOffset : number,replacementLength : number,results : core.DartIterable<any>) : void {
        server.sendNotification(new bare.createInstance(any,null,completionId,replacementOffset,replacementLength,results,true).toNotification());
    }
    setNewRequest(completionRequest : any) : void {
        this._abortCurrentRequest();
        this._currentRequest = completionRequest;
    }
    _abortCurrentRequest() : void {
        if (this._currentRequest != null) {
            this._currentRequest.abort();
            this._currentRequest = null;
        }
    }
}

export namespace CompletionResult {
    export type Constructors = 'CompletionResult';
    export type Interface = Omit<CompletionResult, Constructors>;
}
@DartClass
export class CompletionResult {
    replacementLength : number;

    replacementOffset : number;

    suggestions : core.DartList<any>;

    constructor(replacementOffset : number,replacementLength : number,suggestions : core.DartList<any>) {
    }
    @defaultConstructor
    CompletionResult(replacementOffset : number,replacementLength : number,suggestions : core.DartList<any>) {
        this.replacementOffset = replacementOffset;
        this.replacementLength = replacementLength;
        this.suggestions = suggestions;
    }
}

export class properties {
}
