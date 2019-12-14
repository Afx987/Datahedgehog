/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/instrumentation/instrumentation.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as convert from "@dart2ts/dart/convert";

export namespace AnalysisPerformanceKind {
    export type Constructors = 'AnalysisPerformanceKind';
    export type Interface = Omit<AnalysisPerformanceKind, Constructors>;
}
@DartClass
export class AnalysisPerformanceKind {
    private static __$FULL : string;
    static get FULL() : string { 
        if (this.__$FULL===undefined) {
            this.__$FULL = 'analysis_full';
        }
        return this.__$FULL;
    }

    private static __$INCREMENTAL : string;
    static get INCREMENTAL() : string { 
        if (this.__$INCREMENTAL===undefined) {
            this.__$INCREMENTAL = 'analysis_incremental';
        }
        return this.__$INCREMENTAL;
    }

    constructor() {
    }
    @defaultConstructor
    AnalysisPerformanceKind() {
    }
}

export namespace InstrumentationServer {
    export type Constructors = 'InstrumentationServer';
    export type Interface = Omit<InstrumentationServer, Constructors>;
}
@DartClass
export class InstrumentationServer {
    @AbstractProperty
    get describe() : string{ throw 'abstract'}
    @AbstractProperty
    get sessionId() : string{ throw 'abstract'}
    @Abstract
    log(message : string) : void{ throw 'abstract'}
    @Abstract
    logWithPriority(message : string) : void{ throw 'abstract'}
    @Abstract
    shutdown() : async.Future<any>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    InstrumentationServer() {
    }
}

export namespace InstrumentationService {
    export type Constructors = 'InstrumentationService';
    export type Interface = Omit<InstrumentationService, Constructors>;
}
@DartClass
export class InstrumentationService {
    private static __$NULL_SERVICE : InstrumentationService;
    static get NULL_SERVICE() : InstrumentationService { 
        if (this.__$NULL_SERVICE===undefined) {
            this.__$NULL_SERVICE = new InstrumentationService(null);
        }
        return this.__$NULL_SERVICE;
    }
    static set NULL_SERVICE(__$value : InstrumentationService)  { 
        this.__$NULL_SERVICE = __$value;
    }

    private static __$TAG_ANALYSIS_TASK : string;
    static get TAG_ANALYSIS_TASK() : string { 
        if (this.__$TAG_ANALYSIS_TASK===undefined) {
            this.__$TAG_ANALYSIS_TASK = 'Task';
        }
        return this.__$TAG_ANALYSIS_TASK;
    }

    private static __$TAG_ERROR : string;
    static get TAG_ERROR() : string { 
        if (this.__$TAG_ERROR===undefined) {
            this.__$TAG_ERROR = 'Err';
        }
        return this.__$TAG_ERROR;
    }

    private static __$TAG_EXCEPTION : string;
    static get TAG_EXCEPTION() : string { 
        if (this.__$TAG_EXCEPTION===undefined) {
            this.__$TAG_EXCEPTION = 'Ex';
        }
        return this.__$TAG_EXCEPTION;
    }

    private static __$TAG_FILE_READ : string;
    static get TAG_FILE_READ() : string { 
        if (this.__$TAG_FILE_READ===undefined) {
            this.__$TAG_FILE_READ = 'Read';
        }
        return this.__$TAG_FILE_READ;
    }

    private static __$TAG_LOG_ENTRY : string;
    static get TAG_LOG_ENTRY() : string { 
        if (this.__$TAG_LOG_ENTRY===undefined) {
            this.__$TAG_LOG_ENTRY = 'Log';
        }
        return this.__$TAG_LOG_ENTRY;
    }

    private static __$TAG_NOTIFICATION : string;
    static get TAG_NOTIFICATION() : string { 
        if (this.__$TAG_NOTIFICATION===undefined) {
            this.__$TAG_NOTIFICATION = 'Noti';
        }
        return this.__$TAG_NOTIFICATION;
    }

    private static __$TAG_PERFORMANCE : string;
    static get TAG_PERFORMANCE() : string { 
        if (this.__$TAG_PERFORMANCE===undefined) {
            this.__$TAG_PERFORMANCE = 'Perf';
        }
        return this.__$TAG_PERFORMANCE;
    }

    private static __$TAG_PLUGIN_ERROR : string;
    static get TAG_PLUGIN_ERROR() : string { 
        if (this.__$TAG_PLUGIN_ERROR===undefined) {
            this.__$TAG_PLUGIN_ERROR = 'PluginErr';
        }
        return this.__$TAG_PLUGIN_ERROR;
    }

    private static __$TAG_PLUGIN_EXCEPTION : string;
    static get TAG_PLUGIN_EXCEPTION() : string { 
        if (this.__$TAG_PLUGIN_EXCEPTION===undefined) {
            this.__$TAG_PLUGIN_EXCEPTION = 'PluginEx';
        }
        return this.__$TAG_PLUGIN_EXCEPTION;
    }

    private static __$TAG_PLUGIN_NOTIFICATION : string;
    static get TAG_PLUGIN_NOTIFICATION() : string { 
        if (this.__$TAG_PLUGIN_NOTIFICATION===undefined) {
            this.__$TAG_PLUGIN_NOTIFICATION = 'PluginNoti';
        }
        return this.__$TAG_PLUGIN_NOTIFICATION;
    }

    private static __$TAG_PLUGIN_REQUEST : string;
    static get TAG_PLUGIN_REQUEST() : string { 
        if (this.__$TAG_PLUGIN_REQUEST===undefined) {
            this.__$TAG_PLUGIN_REQUEST = 'PluginReq';
        }
        return this.__$TAG_PLUGIN_REQUEST;
    }

    private static __$TAG_PLUGIN_RESPONSE : string;
    static get TAG_PLUGIN_RESPONSE() : string { 
        if (this.__$TAG_PLUGIN_RESPONSE===undefined) {
            this.__$TAG_PLUGIN_RESPONSE = 'PluginRes';
        }
        return this.__$TAG_PLUGIN_RESPONSE;
    }

    private static __$TAG_PLUGIN_TIMEOUT : string;
    static get TAG_PLUGIN_TIMEOUT() : string { 
        if (this.__$TAG_PLUGIN_TIMEOUT===undefined) {
            this.__$TAG_PLUGIN_TIMEOUT = 'PluginTo';
        }
        return this.__$TAG_PLUGIN_TIMEOUT;
    }

    private static __$TAG_REQUEST : string;
    static get TAG_REQUEST() : string { 
        if (this.__$TAG_REQUEST===undefined) {
            this.__$TAG_REQUEST = 'Req';
        }
        return this.__$TAG_REQUEST;
    }

    private static __$TAG_RESPONSE : string;
    static get TAG_RESPONSE() : string { 
        if (this.__$TAG_RESPONSE===undefined) {
            this.__$TAG_RESPONSE = 'Res';
        }
        return this.__$TAG_RESPONSE;
    }

    private static __$TAG_SUBPROCESS_START : string;
    static get TAG_SUBPROCESS_START() : string { 
        if (this.__$TAG_SUBPROCESS_START===undefined) {
            this.__$TAG_SUBPROCESS_START = 'SPStart';
        }
        return this.__$TAG_SUBPROCESS_START;
    }

    private static __$TAG_SUBPROCESS_RESULT : string;
    static get TAG_SUBPROCESS_RESULT() : string { 
        if (this.__$TAG_SUBPROCESS_RESULT===undefined) {
            this.__$TAG_SUBPROCESS_RESULT = 'SPResult';
        }
        return this.__$TAG_SUBPROCESS_RESULT;
    }

    private static __$TAG_VERSION : string;
    static get TAG_VERSION() : string { 
        if (this.__$TAG_VERSION===undefined) {
            this.__$TAG_VERSION = 'Ver';
        }
        return this.__$TAG_VERSION;
    }

    private static __$TAG_WATCH_EVENT : string;
    static get TAG_WATCH_EVENT() : string { 
        if (this.__$TAG_WATCH_EVENT===undefined) {
            this.__$TAG_WATCH_EVENT = 'Watch';
        }
        return this.__$TAG_WATCH_EVENT;
    }

    _instrumentationServer : InstrumentationServer;

    _subprocessCounter : number;

    constructor(_instrumentationServer : InstrumentationServer) {
    }
    @defaultConstructor
    InstrumentationService(_instrumentationServer : InstrumentationServer) {
        this._subprocessCounter = 0;
        this._instrumentationServer = _instrumentationServer;
    }
    get instrumentationServer() : InstrumentationServer {
        return this._instrumentationServer;
    }
    get isActive() : boolean {
        return this._instrumentationServer != null;
    }
    get sessionId() : string {
        return (((t)=>(!!t)?t.sessionId:null)(this._instrumentationServer) || '');
    }
    get _timestamp() : string {
        return new core.DartInt(new core.DartDateTime.now().millisecondsSinceEpoch).toString();
    }
    logAnalysisTask(context : string,task : any) : void {
        if (this._instrumentationServer != null) {
            this._instrumentationServer.log(this._join(new core.DartList.literal(InstrumentationService.TAG_ANALYSIS_TASK,context,task.description)));
        }
    }
    logError(message : string) : void {
        this._log(InstrumentationService.TAG_ERROR,message);
    }
    logException(exception : any,stackTrace : core.DartStackTrace) : void {
        if (this._instrumentationServer != null) {
            let message : string = this._toString(exception);
            let trace : string = this._toString(stackTrace);
            this._instrumentationServer.log(this._join(new core.DartList.literal(InstrumentationService.TAG_EXCEPTION,message,trace)));
        }
    }
    logFileRead(path : string,modificationTime : number,content : string) : void {
        if (this._instrumentationServer != null) {
            let timeStamp : string = this._toString(modificationTime);
            this._instrumentationServer.log(this._join(new core.DartList.literal(InstrumentationService.TAG_FILE_READ,path,timeStamp,content)));
        }
    }
    logLogEntry(level : string,time : core.DartDateTime,message : string,exception : core.DartObject,stackTrace : core.DartStackTrace) : void {
        if (this._instrumentationServer != null) {
            let timeStamp : string = op(Op.EQUALS,time,null) ? 'null' : new core.DartInt(time.millisecondsSinceEpoch).toString();
            let exceptionText : string = exception.toString();
            let stackTraceText : string = stackTrace.toString();
            this._instrumentationServer.log(this._join(new core.DartList.literal(InstrumentationService.TAG_LOG_ENTRY,level,timeStamp,message,exceptionText,stackTraceText)));
        }
    }
    logNotification(notification : string) : void {
        this._log(InstrumentationService.TAG_NOTIFICATION,notification);
    }
    logPerformance(kind : string,sw : core.DartStopwatch,message : string) : void {
        sw.stop();
        let elapsed : string = new core.DartInt(sw.elapsedMilliseconds).toString();
        if (this._instrumentationServer != null) {
            this._instrumentationServer.log(this._join(new core.DartList.literal(InstrumentationService.TAG_PERFORMANCE,kind,elapsed,message)));
        }
    }
    logPluginError(plugin : PluginData,code : string,message : string,stackTrace : string) : void {
        let fields : core.DartList<string> = new core.DartList.literal<string>(InstrumentationService.TAG_PLUGIN_ERROR,code,message,stackTrace);
        plugin.addToFields(fields);
        this._instrumentationServer.log(this._join(fields));
    }
    logPluginException(plugin : PluginData,exception : any,stackTrace : core.DartStackTrace) : void {
        if (this._instrumentationServer != null) {
            let fields : core.DartList<string> = new core.DartList.literal<string>(InstrumentationService.TAG_PLUGIN_EXCEPTION,this._toString(exception),this._toString(stackTrace));
            plugin.addToFields(fields);
            this._instrumentationServer.log(this._join(fields));
        }
    }
    logPluginNotification(pluginId : string,notification : string) : void {
        if (this._instrumentationServer != null) {
            this._instrumentationServer.log(this._join(new core.DartList.literal(InstrumentationService.TAG_PLUGIN_NOTIFICATION,notification,pluginId,'','')));
        }
    }
    logPluginRequest(pluginId : string,request : string) : void {
        if (this._instrumentationServer != null) {
            this._instrumentationServer.log(this._join(new core.DartList.literal(InstrumentationService.TAG_PLUGIN_REQUEST,request,pluginId,'','')));
        }
    }
    logPluginResponse(pluginId : string,response : string) : void {
        if (this._instrumentationServer != null) {
            this._instrumentationServer.log(this._join(new core.DartList.literal(InstrumentationService.TAG_PLUGIN_RESPONSE,response,pluginId,'','')));
        }
    }
    logPluginTimeout(plugin : PluginData,request : string) : void {
        if (this._instrumentationServer != null) {
            let fields : core.DartList<string> = new core.DartList.literal<string>(InstrumentationService.TAG_PLUGIN_TIMEOUT,request);
            plugin.addToFields(fields);
            this._instrumentationServer.log(this._join(fields));
        }
    }
    logPriorityException(exception : any,stackTrace : core.DartStackTrace) : void {
        if (this._instrumentationServer != null) {
            let message : string = this._toString(exception);
            let trace : string = this._toString(stackTrace);
            this._instrumentationServer.logWithPriority(this._join(new core.DartList.literal(InstrumentationService.TAG_EXCEPTION,message,trace)));
        }
    }
    logRequest(request : string) : void {
        this._log(InstrumentationService.TAG_REQUEST,request);
    }
    logResponse(response : string) : void {
        this._log(InstrumentationService.TAG_RESPONSE,response);
    }
    logSubprocessResult(subprocessId : number,exitCode : number,stdout : string,stderr : string) : void {
        if (this._instrumentationServer != null) {
            this._instrumentationServer.log(this._join(new core.DartList.literal(InstrumentationService.TAG_SUBPROCESS_RESULT,new core.DartInt(subprocessId).toString(),new core.DartInt(exitCode).toString(),convert.properties.JSON.encode(stdout),convert.properties.JSON.encode(stderr))));
        }
    }
    logSubprocessStart(executablePath : string,arguments : core.DartList<string>,workingDirectory : string) : number {
        let subprocessId : number = this._subprocessCounter++;
        if (this._instrumentationServer != null) {
            this._instrumentationServer.log(this._join(new core.DartList.literal(InstrumentationService.TAG_SUBPROCESS_START,new core.DartInt(subprocessId).toString(),executablePath,workingDirectory,convert.properties.JSON.encode(arguments))));
        }
        return subprocessId;
    }
    logVersion(uuid : string,clientId : string,clientVersion : string,serverVersion : string,sdkVersion : string) : void {
        var normalize : (value : string) => string = (value : string) : string =>  {
            return value != null && new core.DartString(value).length > 0 ? value : 'unknown';
        };
        if (this._instrumentationServer != null) {
            this._instrumentationServer.logWithPriority(this._join(new core.DartList.literal(InstrumentationService.TAG_VERSION,uuid,normalize(clientId),normalize(clientVersion),serverVersion,sdkVersion)));
        }
    }
    logWatchEvent(folderPath : string,filePath : string,changeType : string) : void {
        if (this._instrumentationServer != null) {
            this._instrumentationServer.log(this._join(new core.DartList.literal(InstrumentationService.TAG_WATCH_EVENT,folderPath,filePath,changeType)));
        }
    }
    shutdown() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this._instrumentationServer != null) {
                await this._instrumentationServer.shutdown();
                this._instrumentationServer = null;
            }
        } )());
    }

    _escape(buffer : core.DartStringBuffer,field : string) : void {
        let index : number = new core.DartString(field).indexOf(':');
        if (index < 0) {
            buffer.write(field);
            return;
        }
        let start : number = 0;
        while (index >= 0){
            buffer.write(new core.DartString(field).substring(start,index));
            buffer.write('::');
            start = index + 1;
            index = new core.DartString(field).indexOf(':',start);
        }
        buffer.write(new core.DartString(field).substring(start));
    }
    _join(fields : core.DartList<string>) : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.write(this._timestamp);
        let length : number = fields.length;
        for(let i : number = 0; i < length; i++){
            buffer.write(':');
            this._escape(buffer,(fields[i] || 'null'));
        }
        return buffer.toString();
    }
    _log(tag : string,message : string) : void {
        if (this._instrumentationServer != null) {
            this._instrumentationServer.log(this._join(new core.DartList.literal(tag,message)));
        }
    }
    _toString(object : core.DartObject) : string {
        if (op(Op.EQUALS,object,null)) {
            return 'null';
        }
        return object.toString();
    }
}

export namespace MulticastInstrumentationServer {
    export type Constructors = 'MulticastInstrumentationServer';
    export type Interface = Omit<MulticastInstrumentationServer, Constructors>;
}
@DartClass
@Implements(InstrumentationServer)
export class MulticastInstrumentationServer implements InstrumentationServer.Interface {
    _servers : core.DartList<InstrumentationServer>;

    constructor(_servers : core.DartList<InstrumentationServer>) {
    }
    @defaultConstructor
    MulticastInstrumentationServer(_servers : core.DartList<InstrumentationServer>) {
        this._servers = _servers;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get describe() : string {
        return this._servers.map((server : InstrumentationServer) =>  {
            return server.describe;
        }).join("\n");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sessionId() : string {
        return this._servers[0].sessionId;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    log(message : string) : void {
        for(let server of this._servers) {
            server.log(message);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logWithPriority(message : string) : void {
        for(let server of this._servers) {
            server.logWithPriority(message);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shutdown() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            for(let server of this._servers) {
                await server.shutdown();
            }
        } )());
    }

}

export namespace PluginData {
    export type Constructors = 'PluginData';
    export type Interface = Omit<PluginData, Constructors>;
}
@DartClass
export class PluginData {
    pluginId : string;

    name : string;

    version : string;

    constructor(pluginId : string,name : string,version : string) {
    }
    @defaultConstructor
    PluginData(pluginId : string,name : string,version : string) {
        this.pluginId = pluginId;
        this.name = name;
        this.version = version;
    }
    addToFields(fields : core.DartList<string>) : void {
        fields.add(this.pluginId);
        fields.add((this.name || ''));
        fields.add((this.version || ''));
    }
}

export class properties {
}
