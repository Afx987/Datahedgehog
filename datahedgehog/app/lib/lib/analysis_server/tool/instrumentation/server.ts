/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/tool/instrumentation/server.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "./log/log";
import * as collection from "@dart2ts/dart/core";
import * as lib6 from "./page/log_page";
import * as lib7 from "./page/stats_page";
import * as lib8 from "./page/task_page";

export namespace UnknownRequest {
    export type Constructors = 'UnknownRequest';
    export type Interface = Omit<UnknownRequest, Constructors>;
}
@DartClass
@Implements(core.Exception)
export class UnknownRequest implements core.Exception.Interface {
    constructor() {
    }
    @defaultConstructor
    UnknownRequest() {
    }
}

export namespace WebServer {
    export type Constructors = 'WebServer';
    export type Interface = Omit<WebServer, Constructors>;
}
@DartClass
export class WebServer {
    private static __$logPath : string;
    static get logPath() : string { 
        if (this.__$logPath===undefined) {
            this.__$logPath = '/log';
        }
        return this.__$logPath;
    }
    static set logPath(__$value : string)  { 
        this.__$logPath = __$value;
    }

    private static __$statsPath : string;
    static get statsPath() : string { 
        if (this.__$statsPath===undefined) {
            this.__$statsPath = '/stats';
        }
        return this.__$statsPath;
    }
    static set statsPath(__$value : string)  { 
        this.__$statsPath = __$value;
    }

    private static __$taskPath : string;
    static get taskPath() : string { 
        if (this.__$taskPath===undefined) {
            this.__$taskPath = '/task';
        }
        return this.__$taskPath;
    }
    static set taskPath(__$value : string)  { 
        this.__$taskPath = __$value;
    }

    private static __$_htmlContent : io.ContentType;
    static get _htmlContent() : io.ContentType { 
        if (this.__$_htmlContent===undefined) {
            this.__$_htmlContent = new io.ContentType("text","html",{
                charset : "utf-8"});
        }
        return this.__$_htmlContent;
    }
    static set _htmlContent(__$value : io.ContentType)  { 
        this.__$_htmlContent = __$value;
    }

    log : lib4.InstrumentationLog;

    _server : async.Future<io.HttpServer>;

    constructor(log : lib4.InstrumentationLog) {
    }
    @defaultConstructor
    WebServer(log : lib4.InstrumentationLog) {
        this.log = log;
    }
    getParameterMap(request : io.HttpRequest) : core.DartMap<string,string> {
        let parameterMap : core.DartMap<string,string> = new core.DartHashMap<string,string>();
        let query : string = request.uri.query;
        if (query != null && new core.DartString(query).isNotEmpty) {
            let pairs : core.DartList<string> = new core.DartString(query).split('&');
            for(let pair of pairs) {
                let parts : core.DartList<string> = new core.DartString(pair).split('=');
                let value : string = new core.DartString(parts[1]).trim();
                value = new core.DartString(value).replaceAll('+',' ');
                op(Op.INDEX_ASSIGN,parameterMap,new core.DartString(parts[0]).trim(),value);
            }
        }
        return parameterMap;
    }
    getValueMap(request : io.HttpRequest) : async.Future<core.DartMap<string,string>> { 
        return new async.Future.fromPromise(( async () =>  {
            let buffer : core.DartStringBuffer = new core.DartStringBuffer();
            await request.forEach((element : core.DartList<number>) =>  {
                for(let code of element) {
                    buffer.writeCharCode(code);
                }
            });
            let valueMap : core.DartMap<string,string> = new core.DartHashMap<string,string>();
            let parameters : string = buffer.toString();
            if (new core.DartString(parameters).isNotEmpty) {
                let pairs : core.DartList<string> = new core.DartString(parameters).split('&');
                for(let pair of pairs) {
                    let parts : core.DartList<string> = new core.DartString(pair).split('=');
                    let value : string = new core.DartString(parts[1]).trim();
                    value = new core.DartString(value).replaceAll('+',' ');
                    op(Op.INDEX_ASSIGN,valueMap,new core.DartString(parts[0]).trim(),value);
                }
            }
            return valueMap;
        } )());
    }

    serveHttp(port : number) : void {
        this._server = io.HttpServer.bind(io.InternetAddress.LOOPBACK_IP_V4,port);
        this._server.then(this._handleServer.bind(this)).catchError((_ : any) =>  {
        });
    }
    _handleGetRequest(request : io.HttpRequest) : void {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        try {
            let path : string = request.uri.path;
            if (path == WebServer.logPath) {
                this._writeLogPage(request,buffer);
            }else if (path == WebServer.statsPath) {
                this._writeStatsPage(request,buffer);
            }else if (path == WebServer.taskPath) {
                this._writeTaskPage(request,buffer);
            }else {
                this._returnUnknownRequest(request);
                return;
            }
        } catch (__error__) {

            if (is(__error__,UnknownRequest)){
                this._returnUnknownRequest(request);
                return;
            }


            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                let response : io.HttpResponse = request.response;
                response.statusCode = io.HttpStatus.OK;
                response.headers.contentType = WebServer._htmlContent;
                let buffer : core.DartStringBuffer = new core.DartStringBuffer();
                buffer.write('<p><b>Exception while composing page:</b></p>');
                buffer.write(`<p>${exception}</p>`);
                buffer.write('<p>');
                this._writeStackTrace(buffer,stackTrace);
                buffer.write('</p>');
                response.write(buffer.toString());
                response.close();
                return;
            }
        }
        let response : io.HttpResponse = request.response;
        response.statusCode = io.HttpStatus.OK;
        response.headers.contentType = WebServer._htmlContent;
        response.write(buffer.toString());
        response.close();
    }
    _handlePostRequest(request : io.HttpRequest) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            this._returnUnknownRequest(request);
        } )());
    }

    _handleServer(httpServer : io.HttpServer) : void {
        httpServer.listen((request : io.HttpRequest) =>  {
            let method : string = request.method;
            if (method == 'GET') {
                this._handleGetRequest(request);
            }else if (method == 'POST') {
                this._handlePostRequest(request);
            }else {
                this._returnUnknownRequest(request);
            }
        });
    }
    _returnUnknownRequest(request : io.HttpRequest) : void {
        let response : io.HttpResponse = request.response;
        response.statusCode = io.HttpStatus.NOT_FOUND;
        response.headers.contentType = new io.ContentType("text","html",{
            charset : "utf-8"});
        response.write(`<html><head></head><body><h3>Page not found: "${request.uri.path}".</h3></body></html>`);
        response.close();
    }
    _writeLogPage(request : io.HttpRequest,buffer : core.DartStringBuffer) : void {
        let parameterMap : core.DartMap<string,string> = this.getParameterMap(request);
        let groupId : string = parameterMap.get('group');
        let startIndex : string = parameterMap.get('start');
        let page : lib6.LogPage = new lib6.LogPage(this.log);
        page.selectedGroup = lib4.EntryGroup.withId((groupId || 'nonTask'));
        if (startIndex != null) {
            page.pageStart = core.DartInt.parse(startIndex);
        }else {
            page.pageStart = 0;
        }
        page.pageLength = 25;
        page.writePage(buffer);
    }
    _writeStackTrace(sink : core.DartStringSink,stackTrace : core.DartStackTrace) : void {
        if (stackTrace != null) {
            let trace : string = new core.DartString(stackTrace.toString()).replaceAll('#','<br>#');
            if (new core.DartString(trace).startsWith('<br>#')) {
                trace = new core.DartString(trace).substring(4);
            }
            sink.write('<p>');
            sink.write(trace);
            sink.write('</p>');
        }
    }
    _writeStatsPage(request : io.HttpRequest,buffer : core.DartStringBuffer) : void {
        new lib7.StatsPage(this.log).writePage(buffer);
    }
    _writeTaskPage(request : io.HttpRequest,buffer : core.DartStringBuffer) : void {
        let parameterMap : core.DartMap<string,string> = this.getParameterMap(request);
        let analysisStart : string = parameterMap.get('analysisStart');
        let start : string = parameterMap.get('start');
        let page : lib8.TaskPage = new lib8.TaskPage(this.log);
        if (analysisStart == null) {
            throw new UnknownRequest();
        }
        page.analysisStart = core.DartInt.parse(analysisStart);
        if (start != null) {
            page.pageStart = core.DartInt.parse(start);
        }else {
            page.pageStart = 0;
        }
        page.pageLength = 25;
        page.writePage(buffer);
    }
}

export class properties {
}
