/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/protocol/protocol.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as convert from "@dart2ts/dart/convert";

export namespace DomainHandler {
    export type Constructors = 'DomainHandler';
    export type Interface = Omit<DomainHandler, Constructors>;
}
@DartClass
@Implements(RequestHandler)
export class DomainHandler implements RequestHandler.Interface {
    shutdown() : void {
    }
    startup() : void {
    }
    constructor() {
    }
    @defaultConstructor
    DomainHandler() {
    }
}

export namespace Notification {
    export type Constructors = 'Notification';
    export type Interface = Omit<Notification, Constructors>;
}
@DartClass
export class Notification {
    private static __$EVENT : string;
    static get EVENT() : string { 
        if (this.__$EVENT===undefined) {
            this.__$EVENT = 'event';
        }
        return this.__$EVENT;
    }

    private static __$PARAMS : string;
    static get PARAMS() : string { 
        if (this.__$PARAMS===undefined) {
            this.__$PARAMS = 'params';
        }
        return this.__$PARAMS;
    }

    event : string;

    params : core.DartMap<string,core.DartObject>;

    constructor(event : string,params? : core.DartMap<string,core.DartObject>) {
    }
    @defaultConstructor
    Notification(event : string,params? : core.DartMap<string,core.DartObject>) {
        this.event = event;
        this.params = params;
    }
    @namedFactory
    static $fromJson(json : core.DartMap<any,any>) : Notification {
        return new Notification(json.get(Notification.EVENT),json.get(Notification.PARAMS) as core.DartMap<string,core.DartObject>);
    }
    static fromJson : new(json : core.DartMap<any,any>) => Notification;

    toJson() : core.DartMap<string,core.DartObject> {
        let jsonObject : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        jsonObject.set(Notification.EVENT,this.event);
        if (this.params != null) {
            jsonObject.set(Notification.PARAMS,this.params);
        }
        return jsonObject;
    }
}

export namespace Request {
    export type Constructors = 'Request';
    export type Interface = Omit<Request, Constructors>;
}
@DartClass
export class Request {
    private static __$ID : string;
    static get ID() : string { 
        if (this.__$ID===undefined) {
            this.__$ID = 'id';
        }
        return this.__$ID;
    }

    private static __$METHOD : string;
    static get METHOD() : string { 
        if (this.__$METHOD===undefined) {
            this.__$METHOD = 'method';
        }
        return this.__$METHOD;
    }

    private static __$PARAMS : string;
    static get PARAMS() : string { 
        if (this.__$PARAMS===undefined) {
            this.__$PARAMS = 'params';
        }
        return this.__$PARAMS;
    }

    private static __$CLIENT_REQUEST_TIME : string;
    static get CLIENT_REQUEST_TIME() : string { 
        if (this.__$CLIENT_REQUEST_TIME===undefined) {
            this.__$CLIENT_REQUEST_TIME = 'clientRequestTime';
        }
        return this.__$CLIENT_REQUEST_TIME;
    }

    id : string;

    method : string;

    params : core.DartMap<string,core.DartObject>;

    clientRequestTime : number;

    constructor(id : string,method : string,params? : core.DartMap<string,core.DartObject>,clientRequestTime? : number) {
    }
    @defaultConstructor
    Request(id : string,method : string,params? : core.DartMap<string,core.DartObject>,clientRequestTime? : number) {
        this.params = (params || new core.DartMap.literal([
        ]));
        this.id = id;
        this.method = method;
        this.clientRequestTime = clientRequestTime;
    }
    @namedFactory
    static $fromJson(result : core.DartMap<string,core.DartObject>) : Request {
        let id = result.get(Request.ID);
        let method = result.get(Request.METHOD);
        if (isNot(id, "string") || isNot(method, "string")) {
            return null;
        }
        let time = result.get(Request.CLIENT_REQUEST_TIME);
        if (time != null && isNot(time, "number")) {
            return null;
        }
        let params = result.get(Request.PARAMS);
        if (is(params, core.DartMap<any,any>) || op(Op.EQUALS,params,null)) {
            return new Request(id,method,params as core.DartMap<string,core.DartObject>,time);
        }else {
            return null;
        }
    }
    static fromJson : new(result : core.DartMap<string,core.DartObject>) => Request;

    @namedFactory
    static $fromString(data : string) : Request {
        try {
            let result = convert.properties.JSON.decode(data);
            if (is(result, core.DartMap<any,any>)) {
                return new Request.fromJson(result as core.DartMap<string,any>);
            }
            return null;
        } catch (__error__) {

            {
                let exception = __error__;
                return null;
            }
        }
    }
    static fromString : new(data : string) => Request;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return new core.DartString(this.id).hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        return is(other, Request) && this.id == other.id && this.method == other.method && this.clientRequestTime == other.clientRequestTime && this._equalMaps(this.params,other.params);
    }
    toJson() : core.DartMap<string,core.DartObject> {
        let jsonObject : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        jsonObject.set(Request.ID,this.id);
        jsonObject.set(Request.METHOD,this.method);
        if (this.params.isNotEmpty) {
            jsonObject.set(Request.PARAMS,this.params);
        }
        if (this.clientRequestTime != null) {
            jsonObject.set(Request.CLIENT_REQUEST_TIME,this.clientRequestTime);
        }
        return jsonObject;
    }
    _equalLists(first : core.DartList<any>,second : core.DartList<any>) : boolean {
        if (first == null) {
            return second == null;
        }
        if (second == null) {
            return false;
        }
        let length : number = first.length;
        if (length != second.length) {
            return false;
        }
        for(let i : number = 0; i < length; i++){
            if (!this._equalObjects(first[i],second[i])) {
                return false;
            }
        }
        return true;
    }
    _equalMaps(first : core.DartMap<any,any>,second : core.DartMap<any,any>) : boolean {
        if (first == null) {
            return second == null;
        }
        if (second == null) {
            return false;
        }
        if (first.length != second.length) {
            return false;
        }
        for(let key of first.keys) {
            if (!second.containsKey(key)) {
                return false;
            }
            if (!this._equalObjects(first.get(key),second.get(key))) {
                return false;
            }
        }
        return true;
    }
    _equalObjects(first : core.DartObject,second : core.DartObject) : boolean {
        if (op(Op.EQUALS,first,null)) {
            return op(Op.EQUALS,second,null);
        }
        if (op(Op.EQUALS,second,null)) {
            return false;
        }
        if (is(first, core.DartMap<any,any>)) {
            if (is(second, core.DartMap<any,any>)) {
                return this._equalMaps(first,second);
            }
            return false;
        }
        if (is(first, core.DartList<any>)) {
            if (is(second, core.DartList<any>)) {
                return this._equalLists(first,second);
            }
            return false;
        }
        return op(Op.EQUALS,first,second);
    }
}

export namespace RequestFailure {
    export type Constructors = 'RequestFailure';
    export type Interface = Omit<RequestFailure, Constructors>;
}
@DartClass
@Implements(core.Exception)
export class RequestFailure implements core.Exception.Interface {
    response : Response;

    constructor(response : Response) {
    }
    @defaultConstructor
    RequestFailure(response : Response) {
        this.response = response;
    }
}

export namespace RequestHandler {
    export type Constructors = 'RequestHandler';
    export type Interface = Omit<RequestHandler, Constructors>;
}
@DartClass
export class RequestHandler {
    @Abstract
    handleRequest(request : Request) : Response{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    RequestHandler() {
    }
}

export namespace Response {
    export type Constructors = 'Response' | 'debugPortCouldNotBeOpened' | 'fileNotAnalyzed' | 'formatInvalidFile' | 'formatWithErrors' | 'getErrorsInvalidFile' | 'getNavigationInvalidFile' | 'getReachableSourcesInvalidFile' | 'invalidAnalysisRoot' | 'invalidExecutionContext' | 'invalidFilePathFormat' | 'invalidParameter' | 'invalidRequestFormat' | 'organizeDirectivesError' | 'refactoringRequestCancelled' | 'sortMembersInvalidFile' | 'sortMembersParseErrors' | 'unanalyzedPriorityFiles' | 'unknownRequest' | 'unknownSource' | 'unsupportedFeature';
    export type Interface = Omit<Response, Constructors>;
}
@DartClass
export class Response {
    private static __$DELAYED_RESPONSE : Response;
    static get DELAYED_RESPONSE() : Response { 
        if (this.__$DELAYED_RESPONSE===undefined) {
            this.__$DELAYED_RESPONSE = new Response('DELAYED_RESPONSE');
        }
        return this.__$DELAYED_RESPONSE;
    }
    static set DELAYED_RESPONSE(__$value : Response)  { 
        this.__$DELAYED_RESPONSE = __$value;
    }

    private static __$ID : string;
    static get ID() : string { 
        if (this.__$ID===undefined) {
            this.__$ID = 'id';
        }
        return this.__$ID;
    }

    private static __$ERROR : string;
    static get ERROR() : string { 
        if (this.__$ERROR===undefined) {
            this.__$ERROR = 'error';
        }
        return this.__$ERROR;
    }

    private static __$RESULT : string;
    static get RESULT() : string { 
        if (this.__$RESULT===undefined) {
            this.__$RESULT = 'result';
        }
        return this.__$RESULT;
    }

    id : string;

    error : any;

    result : core.DartMap<string,core.DartObject>;

    constructor(id : string,_namedArguments? : {result? : core.DartMap<string,core.DartObject>,error? : any}) {
    }
    @defaultConstructor
    Response(id : string,_namedArguments? : {result? : core.DartMap<string,core.DartObject>,error? : any}) {
        let {result,error} = Object.assign({
        }, _namedArguments );
        this.result = result;
        this.id = id;
        this.error = error;
    }
    @namedConstructor
    debugPortCouldNotBeOpened(request : Request,error : any) {
        this.Response(request.id,{
            error : new bare.createInstance(any,null,RequestErrorCode.DEBUG_PORT_COULD_NOT_BE_OPENED,`${error}`)});
    }
    static debugPortCouldNotBeOpened : new(request : Request,error : any) => Response;

    @namedConstructor
    fileNotAnalyzed(request : Request,file : string) {
        this.Response(request.id,{
            error : new bare.createInstance(any,null,RequestErrorCode.FILE_NOT_ANALYZED,`File is not analyzed: ${file}.`)});
    }
    static fileNotAnalyzed : new(request : Request,file : string) => Response;

    @namedConstructor
    formatInvalidFile(request : Request) {
        this.Response(request.id,{
            error : new bare.createInstance(any,null,RequestErrorCode.FORMAT_INVALID_FILE,'Error during `edit.format`: invalid file.')});
    }
    static formatInvalidFile : new(request : Request) => Response;

    @namedConstructor
    formatWithErrors(request : Request) {
        this.Response(request.id,{
            error : new bare.createInstance(any,null,RequestErrorCode.FORMAT_WITH_ERRORS,'Error during `edit.format`: source contains syntax errors.')});
    }
    static formatWithErrors : new(request : Request) => Response;

    @namedFactory
    static $fromJson(json : core.DartMap<any,any>) : Response {
        try {
            let id : core.DartObject = json.get(Response.ID);
            if (isNot(id, "string")) {
                return null;
            }
            let error : core.DartObject = json.get(Response.ERROR);
            let decodedError : any;
            if (is(error, core.DartMap<any,any>)) {
                decodedError = new bare.createInstance(any,null,new bare.createInstance(any,null,null),'.error',error);
            }
            let result : core.DartObject = json.get(Response.RESULT);
            let decodedResult : core.DartMap<string,core.DartObject>;
            if (is(result, core.DartMap<any,any>)) {
                decodedResult = result as core.DartMap<string,core.DartObject>;
            }
            return new Response(id,{
                error : decodedError,result : decodedResult});
        } catch (__error__) {

            {
                let exception = __error__;
                return null;
            }
        }
    }
    static fromJson : new(json : core.DartMap<any,any>) => Response;

    @namedConstructor
    getErrorsInvalidFile(request : Request) {
        this.Response(request.id,{
            error : new bare.createInstance(any,null,RequestErrorCode.GET_ERRORS_INVALID_FILE,'Error during `analysis.getErrors`: invalid file.')});
    }
    static getErrorsInvalidFile : new(request : Request) => Response;

    @namedConstructor
    getNavigationInvalidFile(request : Request) {
        this.Response(request.id,{
            error : new bare.createInstance(any,null,RequestErrorCode.GET_NAVIGATION_INVALID_FILE,'Error during `analysis.getNavigation`: invalid file.')});
    }
    static getNavigationInvalidFile : new(request : Request) => Response;

    @namedConstructor
    getReachableSourcesInvalidFile(request : Request) {
        this.Response(request.id,{
            error : new bare.createInstance(any,null,RequestErrorCode.GET_REACHABLE_SOURCES_INVALID_FILE,'Error during `analysis.getReachableSources`: invalid file.')});
    }
    static getReachableSourcesInvalidFile : new(request : Request) => Response;

    @namedConstructor
    invalidAnalysisRoot(request : Request,rootPath : string) {
        this.Response(request.id,{
            error : new bare.createInstance(any,null,RequestErrorCode.INVALID_ANALYSIS_ROOT,`Invalid analysis root: ${rootPath}`)});
    }
    static invalidAnalysisRoot : new(request : Request,rootPath : string) => Response;

    @namedConstructor
    invalidExecutionContext(request : Request,contextId : string) {
        this.Response(request.id,{
            error : new bare.createInstance(any,null,RequestErrorCode.INVALID_EXECUTION_CONTEXT,`Invalid execution context: ${contextId}`)});
    }
    static invalidExecutionContext : new(request : Request,contextId : string) => Response;

    @namedConstructor
    invalidFilePathFormat(request : Request,path : any) {
        this.Response(request.id,{
            error : new bare.createInstance(any,null,RequestErrorCode.INVALID_FILE_PATH_FORMAT,`Invalid file path format: ${path}`)});
    }
    static invalidFilePathFormat : new(request : Request,path : any) => Response;

    @namedConstructor
    invalidParameter(request : Request,path : string,expectation : string) {
        this.Response(request.id,{
            error : new bare.createInstance(any,null,RequestErrorCode.INVALID_PARAMETER,`Invalid parameter '${path}'. ${expectation}.`)});
    }
    static invalidParameter : new(request : Request,path : string,expectation : string) => Response;

    @namedConstructor
    invalidRequestFormat() {
        this.Response('',{
            error : new bare.createInstance(any,null,RequestErrorCode.INVALID_REQUEST,'Invalid request')});
    }
    static invalidRequestFormat : new() => Response;

    @namedConstructor
    organizeDirectivesError(request : Request,message : string) {
        this.Response(request.id,{
            error : new bare.createInstance(any,null,RequestErrorCode.ORGANIZE_DIRECTIVES_ERROR,message)});
    }
    static organizeDirectivesError : new(request : Request,message : string) => Response;

    @namedConstructor
    refactoringRequestCancelled(request : Request) {
        this.Response(request.id,{
            error : new bare.createInstance(any,null,RequestErrorCode.REFACTORING_REQUEST_CANCELLED,'The `edit.getRefactoring` request was cancelled.')});
    }
    static refactoringRequestCancelled : new(request : Request) => Response;

    @namedFactory
    static $serverError(request : Request,exception : any,stackTrace : any) : Response {
        let error : any = new bare.createInstance(any,null,RequestErrorCode.SERVER_ERROR,exception.toString());
        if (stackTrace != null) {
            error.stackTrace = stackTrace.toString();
        }
        return new Response(request.id,{
            error : error});
    }
    static serverError : new(request : Request,exception : any,stackTrace : any) => Response;

    @namedConstructor
    sortMembersInvalidFile(request : Request) {
        this.Response(request.id,{
            error : new bare.createInstance(any,null,RequestErrorCode.SORT_MEMBERS_INVALID_FILE,'Error during `edit.sortMembers`: invalid file.')});
    }
    static sortMembersInvalidFile : new(request : Request) => Response;

    @namedConstructor
    sortMembersParseErrors(request : Request,numErrors : number) {
        this.Response(request.id,{
            error : new bare.createInstance(any,null,RequestErrorCode.SORT_MEMBERS_PARSE_ERRORS,`Error during `edit.sortMembers`: file has ${numErrors} scan/parse errors.`)});
    }
    static sortMembersParseErrors : new(request : Request,numErrors : number) => Response;

    @namedConstructor
    unanalyzedPriorityFiles(requestId : string,fileNames : string) {
        this.Response(requestId,{
            error : new bare.createInstance(any,null,RequestErrorCode.UNANALYZED_PRIORITY_FILES,`Unanalyzed files cannot be a priority: '${fileNames}'`)});
    }
    static unanalyzedPriorityFiles : new(requestId : string,fileNames : string) => Response;

    @namedConstructor
    unknownRequest(request : Request) {
        this.Response(request.id,{
            error : new bare.createInstance(any,null,RequestErrorCode.UNKNOWN_REQUEST,'Unknown request')});
    }
    static unknownRequest : new(request : Request) => Response;

    @namedConstructor
    unknownSource(request : Request) {
        this.Response(request.id,{
            error : new bare.createInstance(any,null,RequestErrorCode.UNKNOWN_SOURCE,'Unknown source')});
    }
    static unknownSource : new(request : Request) => Response;

    @namedConstructor
    unsupportedFeature(requestId : string,message : string) {
        this.Response(requestId,{
            error : new bare.createInstance(any,null,RequestErrorCode.UNSUPPORTED_FEATURE,message)});
    }
    static unsupportedFeature : new(requestId : string,message : string) => Response;

    toJson() : core.DartMap<string,core.DartObject> {
        let jsonObject : core.DartMap<string,core.DartObject> = new core.DartMap.literal([
        ]);
        jsonObject.set(Response.ID,this.id);
        if (this.error != null) {
            jsonObject.set(Response.ERROR,this.error.toJson());
        }
        if (this.result != null) {
            jsonObject.set(Response.RESULT,this.result);
        }
        return jsonObject;
    }
}

export class properties {
}
