/** Library asset:datahedgehog_monitor/lib/lib/developer/developer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as convert from "@dart2ts/dart/convert";
import * as lib4 from "@dart2ts/dart/uri";
import * as isolate from "@dart2ts/dart/isolate";

export var _getTraceClock : () => number = () : number =>  {
};
export var inspect : (object : core.DartObject) => core.DartObject = (object : core.DartObject) : core.DartObject =>  {
};
export var log : (message : string,_namedArguments? : {time? : core.DartDateTime,sequenceNumber? : number,level? : number,name? : string,zone? : async.DartZone,error? : core.DartObject,stackTrace? : core.DartStackTrace}) => void = (message : string,_namedArguments? : {time? : core.DartDateTime,sequenceNumber? : number,level? : number,name? : string,zone? : async.DartZone,error? : core.DartObject,stackTrace? : core.DartStackTrace}) : void =>  {
    let {time,sequenceNumber,level,name,zone,error,stackTrace} = Object.assign({
        "level" : 0,
        "name" : ''}, _namedArguments );
};
export var registerExtension : (method : string,handler : (method : string,parameters : core.DartMap<string,string>) => async.Future<ServiceExtensionResponse>) => void = (method : string,handler : (method : string,parameters : core.DartMap<string,string>) => async.Future<ServiceExtensionResponse>) : void =>  {
    if (isNot(method, "string")) {
        throw new core.ArgumentError.value(method,'method','Must be a String');
    }
    if (!new core.DartString(method).startsWith('ext.')) {
        throw new core.ArgumentError.value(method,'method','Must begin with ext.');
    }
    if (_lookupExtension(method) != null) {
        throw new core.ArgumentError(`Extension already registered: ${method}`);
    }
    if (isNot(handler, (method : string,parameters : core.DartMap<string,string>) => async.Future<ServiceExtensionResponse>)) {
        throw new core.ArgumentError.value(handler,'handler','Must be a ServiceExtensionHandler');
    }
    _registerExtension(method,handler);
};
export var postEvent : (eventKind : string,eventData : core.DartMap<any,any>) => void = (eventKind : string,eventData : core.DartMap<any,any>) : void =>  {
    if (isNot(eventKind, "string")) {
        throw new core.ArgumentError.value(eventKind,'eventKind','Must be a String');
    }
    if (isNot(eventData, core.DartMap<any,any>)) {
        throw new core.ArgumentError.value(eventData,'eventData','Must be a Map');
    }
    let eventDataAsString : string = convert.properties.JSON.encode(eventData);
    _postEvent(eventKind,eventDataAsString);
};
export var _postEvent : (eventKind : string,eventData : string) => void = (eventKind : string,eventData : string) : void =>  {
};
export var _lookupExtension : (method : string) => (method : string,parameters : core.DartMap<string,string>) => async.Future<ServiceExtensionResponse> = (method : string) : (method : string,parameters : core.DartMap<string,string>) => async.Future<ServiceExtensionResponse> =>  {
};
export var _registerExtension : (method : string,handler : (method : string,parameters : core.DartMap<string,string>) => async.Future<ServiceExtensionResponse>) => any = (method : string,handler : (method : string,parameters : core.DartMap<string,string>) => async.Future<ServiceExtensionResponse>) =>  {
};
export var getCurrentTag : () => UserTag = () : UserTag =>  {
};
export var debugger : (_namedArguments? : {when? : boolean,message? : string}) => boolean = (_namedArguments? : {when? : boolean,message? : string}) : boolean =>  {
    let {when,message} = Object.assign({
        "when" : true}, _namedArguments );
};
export var _getServiceMinorVersion : () => number = () : number =>  {
};
export var _argumentsAsJson : (arguments : core.DartMap<any,any>) => string = (arguments : core.DartMap<any,any>) : string =>  {
    if ((arguments == null) || (arguments.length == 0)) {
        if (properties._fastPathArguments == null) {
            properties._fastPathArguments = `{"isolateNumber":"${Timeline._isolateId}"}`;
        }
        return properties._fastPathArguments;
    }
    arguments.set('isolateNumber',Timeline._isolateIdString);
    return convert.properties.JSON.encode(arguments);
};
export var _isDartStreamEnabled : () => boolean = () : boolean =>  {
};
export var _getNextAsyncId : () => number = () : number =>  {
};
export var _getIsolateIDFromSendPort : (sendPort : isolate.SendPort) => string = (sendPort : isolate.SendPort) : string =>  {
};
export var _reportTaskEvent : (start : number,taskId : number,phase : string,category : string,name : string,argumentsAsJson : string) => void = (start : number,taskId : number,phase : string,category : string,name : string,argumentsAsJson : string) : void =>  {
};
export var _getIsolateNum : () => number = () : number =>  {
};
export var _getThreadCpuClock : () => number = () : number =>  {
};
export var _getServerInfo : (sendPort : isolate.SendPort) => void = (sendPort : isolate.SendPort) : void =>  {
};
export var _webServerControl : (sendPort : isolate.SendPort,enable : boolean) => void = (sendPort : isolate.SendPort,enable : boolean) : void =>  {
};
export var _reportInstantEvent : (start : number,category : string,name : string,argumentsAsJson : string) => void = (start : number,category : string,name : string,argumentsAsJson : string) : void =>  {
};
export var _getServiceMajorVersion : () => number = () : number =>  {
};
export var _reportCompleteEvent : (start : number,startCpu : number,category : string,name : string,argumentsAsJson : string) => void = (start : number,startCpu : number,category : string,name : string,argumentsAsJson : string) : void =>  {
};
export namespace _SyncBlock {
    export type Constructors = '_';
    export type Interface = Omit<_SyncBlock, Constructors>;
}
@DartClass
export class _SyncBlock {
    category : string;

    name : string;

    _arguments : core.DartMap<any,any>;

    _start : number;

    _startCpu : number;

    @namedConstructor
    _(name : string,_start : number,_startCpu : number) {
        this.category = 'Dart';
        this.name = name;
        this._start = _start;
        this._startCpu = _startCpu;
    }
    static _ : new(name : string,_start : number,_startCpu : number) => _SyncBlock;

    finish() : void {
        _reportCompleteEvent(this._start,this._startCpu,this.category,this.name,_argumentsAsJson(this._arguments));
    }
    _appendArguments(arguments : core.DartMap<any,any>) : void {
        if (arguments == null) {
            return;
        }
        if (this._arguments == null) {
            this._arguments = new core.DartMap.literal([
            ]);
        }
        this._arguments.addAll(arguments);
    }
}

export namespace _AsyncBlock {
    export type Constructors = '_';
    export type Interface = Omit<_AsyncBlock, Constructors>;
}
@DartClass
export class _AsyncBlock {
    category : string;

    name : string;

    _taskId : number;

    _arguments : core.DartMap<any,any>;

    @namedConstructor
    _(name : string,_taskId : number) {
        this.category = 'Dart';
        this.name = name;
        this._taskId = _taskId;
    }
    static _ : new(name : string,_taskId : number) => _AsyncBlock;

    _start() : void {
        _reportTaskEvent(_getTraceClock(),this._taskId,'b',this.category,this.name,_argumentsAsJson(this._arguments));
    }
    _finish() : void {
        _reportTaskEvent(_getTraceClock(),this._taskId,'e',this.category,this.name,_argumentsAsJson(null));
    }
    _appendArguments(arguments : core.DartMap<any,any>) : void {
        if (this._arguments == null) {
            this._arguments = new core.DartMap.literal([
            ]);
        }
        this._arguments.addAll(arguments);
    }
}

export namespace TimelineTask {
    export type Constructors = 'TimelineTask' | 'withTaskId';
    export type Interface = Omit<TimelineTask, Constructors>;
}
@DartClass
export class TimelineTask {
    constructor() {
    }
    @defaultConstructor
    TimelineTask() {
        this._stack = new core.DartList.literal();
        this._taskId = _getNextAsyncId();
    }
    @namedConstructor
    withTaskId(taskId : number) {
        this._stack = new core.DartList.literal();
        this._taskId = taskId;
        if (isNot(taskId, "number")) {
            throw new core.ArgumentError.value(taskId,'taskId','Must be an int');
        }
    }
    static withTaskId : new(taskId : number) => TimelineTask;

    start(name : string,_namedArguments? : {arguments? : core.DartMap<any,any>}) : void {
        let {arguments} = Object.assign({
        }, _namedArguments );
        if (properties._isProduct) {
            return;
        }
        if (isNot(name, "string")) {
            throw new core.ArgumentError.value(name,'name','Must be a String');
        }
        let block = new _AsyncBlock._(name,this._taskId);
        if (is(arguments, core.DartMap<any,any>)) {
            block._appendArguments(arguments);
        }
        this._stack.add(block);
        block._start();
    }
    instant(name : string,_namedArguments? : {arguments? : core.DartMap<any,any>}) : void {
        let {arguments} = Object.assign({
        }, _namedArguments );
        if (properties._isProduct) {
            return;
        }
        if (isNot(name, "string")) {
            throw new core.ArgumentError.value(name,'name','Must be a String');
        }
        let instantArguments : core.DartMap<any,any>;
        if (is(arguments, core.DartMap<any,any>)) {
            instantArguments = new core.DartMap.from(arguments);
        }
        _reportTaskEvent(_getTraceClock(),this._taskId,'n','Dart',name,_argumentsAsJson(instantArguments));
    }
    finish() : void {
        if (properties._isProduct) {
            return;
        }
        if (this._stack.length == 0) {
            throw new core.StateError('Uneven calls to start and finish');
        }
        let block = this._stack.removeLast();
        block._finish();
    }
    pass() : number {
        if (this._stack.length > 0) {
            throw new core.StateError('You cannot pass a TimelineTask without finishing all started ' + 'operations');
        }
        let r : number = this._taskId;
        return r;
    }
    _taskId : number;

    _stack : core.DartList<_AsyncBlock>;

}

export namespace Timeline {
    export type Constructors = 'Timeline';
    export type Interface = Omit<Timeline, Constructors>;
}
@DartClass
export class Timeline {
    static startSync(name : string,_namedArguments? : {arguments? : core.DartMap<any,any>}) : void {
        let {arguments} = Object.assign({
        }, _namedArguments );
        if (properties._isProduct) {
            return;
        }
        if (isNot(name, "string")) {
            throw new core.ArgumentError.value(name,'name','Must be a String');
        }
        if (!_isDartStreamEnabled()) {
            Timeline._stack.add(null);
            return;
        }
        let block = new _SyncBlock._(name,_getTraceClock(),_getThreadCpuClock());
        if (is(arguments, core.DartMap<any,any>)) {
            block._appendArguments(arguments);
        }
        Timeline._stack.add(block);
    }
    static finishSync() : void {
        if (properties._isProduct) {
            return;
        }
        if (Timeline._stack.length == 0) {
            throw new core.StateError('Uneven calls to startSync and finishSync');
        }
        let block = Timeline._stack.removeLast();
        if (op(Op.EQUALS,block,null)) {
            return;
        }
        block.finish();
    }
    static instantSync(name : string,_namedArguments? : {arguments? : core.DartMap<any,any>}) : void {
        let {arguments} = Object.assign({
        }, _namedArguments );
        if (properties._isProduct) {
            return;
        }
        if (isNot(name, "string")) {
            throw new core.ArgumentError.value(name,'name','Must be a String');
        }
        if (!_isDartStreamEnabled()) {
            return;
        }
        let instantArguments : core.DartMap<any,any>;
        if (is(arguments, core.DartMap<any,any>)) {
            instantArguments = new core.DartMap.from(arguments);
        }
        _reportInstantEvent(_getTraceClock(),'Dart',name,_argumentsAsJson(instantArguments));
    }
    static timeSync(name : string,function : () => any,_namedArguments? : {arguments? : core.DartMap<any,any>}) : any {
        let {arguments} = Object.assign({
        }, _namedArguments );
        Timeline.startSync(name,{
            arguments : arguments});
        try {
            return function();
        } finally {
            Timeline.finishSync();
        }
    }
    static get now() : number {
        return _getTraceClock();
    }
    private static __$_stack : core.DartList<_SyncBlock>;
    static get _stack() : core.DartList<_SyncBlock> { 
        if (this.__$_stack===undefined) {
            this.__$_stack = new core.DartList<_SyncBlock>();
        }
        return this.__$_stack;
    }
    static set _stack(__$value : core.DartList<_SyncBlock>)  { 
        this.__$_stack = __$value;
    }

    private static __$_isolateId : number;
    static get _isolateId() : number { 
        if (this.__$_isolateId===undefined) {
            this.__$_isolateId = _getIsolateNum();
        }
        return this.__$_isolateId;
    }
    static set _isolateId(__$value : number)  { 
        this.__$_isolateId = __$value;
    }

    private static __$_isolateIdString : string;
    static get _isolateIdString() : string { 
        if (this.__$_isolateIdString===undefined) {
            this.__$_isolateIdString = new core.DartInt(Timeline._isolateId).toString();
        }
        return this.__$_isolateIdString;
    }
    static set _isolateIdString(__$value : string)  { 
        this.__$_isolateIdString = __$value;
    }

    constructor() {
    }
    @defaultConstructor
    Timeline() {
    }
}

export namespace Metrics {
    export type Constructors = 'Metrics';
    export type Interface = Omit<Metrics, Constructors>;
}
@DartClass
export class Metrics {
    private static __$_metrics : core.DartMap<string,Metric>;
    static get _metrics() : core.DartMap<string,Metric> { 
        if (this.__$_metrics===undefined) {
            this.__$_metrics = new core.DartMap<string,Metric>();
        }
        return this.__$_metrics;
    }
    static set _metrics(__$value : core.DartMap<string,Metric>)  { 
        this.__$_metrics = __$value;
    }

    static register(metric : Metric) : void {
        if (isNot(metric, Metric)) {
            throw new core.ArgumentError('metric must be a Metric');
        }
        if (Metrics._metrics.get(metric.name) != null) {
            throw new core.ArgumentError('Registered metrics have unique names');
        }
        Metrics._metrics.set(metric.name,metric);
    }
    static deregister(metric : Metric) : void {
        if (isNot(metric, Metric)) {
            throw new core.ArgumentError('metric must be a Metric');
        }
        Metrics._metrics.remove(metric.name);
    }
    static _printMetric(id : string) : string {
        let metric = Metrics._metrics.get(id);
        if (op(Op.EQUALS,metric,null)) {
            return null;
        }
        return convert.properties.JSON.encode(metric._toJSON());
    }
    static _printMetrics() : string {
        let metrics = new core.DartList.literal();
        for(let metric of Metrics._metrics.values) {
            metrics.add(metric._toJSON());
        }
        let map = new core.DartMap.literal([
            ['type','MetricList'],
            ['metrics',metrics]]);
        return convert.properties.JSON.encode(map);
    }
    constructor() {
    }
    @defaultConstructor
    Metrics() {
    }
}

export namespace Metric {
    export type Constructors = 'Metric';
    export type Interface = Omit<Metric, Constructors>;
}
@DartClass
export class Metric {
    name : string;

    description : string;

    constructor(name : string,description : string) {
    }
    @defaultConstructor
    Metric(name : string,description : string) {
        this.name = name;
        this.description = description;
        if ((this.name == 'vm') || new core.DartString(this.name).contains('/')) {
            throw new core.ArgumentError('Invalid Metric name.');
        }
    }
    @Abstract
    _toJSON() : core.DartMap<any,any>{ throw 'abstract'}
}

export namespace Service {
    export type Constructors = 'Service';
    export type Interface = Omit<Service, Constructors>;
}
@DartClass
export class Service {
    static getInfo() : async.Future<ServiceProtocolInfo> { 
        return new async.Future.fromPromise(( async () =>  {
            let receivePort : isolate.RawReceivePort = new isolate.RawReceivePort();
            let uriCompleter : async.DartCompleter<lib4.Uri> = new async.DartCompleter<lib4.Uri>();
            receivePort.handler = (uri : lib4.Uri) =>  {
                return uriCompleter.complete(uri);
            };
            _getServerInfo(receivePort.sendPort);
            let uri : lib4.Uri = await uriCompleter.future;
            receivePort.close();
            return new ServiceProtocolInfo(uri);
        } )());
    }

    static controlWebServer(_namedArguments? : {enable? : boolean}) : async.Future<ServiceProtocolInfo> { 
        return new async.Future.fromPromise(( async () =>  {
            let {enable} = Object.assign({
                "enable" : false}, _namedArguments );
            if (isNot(enable, "boolean")) {
                throw new core.ArgumentError.value(enable,'enable','Must be a bool');
            }
            let receivePort : isolate.RawReceivePort = new isolate.RawReceivePort();
            let uriCompleter : async.DartCompleter<lib4.Uri> = new async.DartCompleter<lib4.Uri>();
            receivePort.handler = (uri : lib4.Uri) =>  {
                return uriCompleter.complete(uri);
            };
            _webServerControl(receivePort.sendPort,enable);
            let uri : lib4.Uri = await uriCompleter.future;
            receivePort.close();
            return new ServiceProtocolInfo(uri);
        } )());
    }

    static getIsolateID(isolate : isolate.Isolate) : string {
        if (isNot(isolate, isolate.Isolate)) {
            throw new core.ArgumentError.value(isolate,'isolate','Must be an Isolate');
        }
        return _getIsolateIDFromSendPort(isolate.controlPort);
    }
    constructor() {
    }
    @defaultConstructor
    Service() {
    }
}

export namespace UserTag {
    export type Constructors = never;
    export type Interface = Omit<UserTag, Constructors>;
}
@DartClass
export class UserTag {
    private static __$MAX_USER_TAGS;
    static get MAX_USER_TAGS() { 
        if (this.__$MAX_USER_TAGS===undefined) {
            this.__$MAX_USER_TAGS = 64;
        }
        return this.__$MAX_USER_TAGS;
    }

    constructor(label : string) {
    }
    @defaultFactory
    static $UserTag(label : string) : UserTag {
    }
    @AbstractProperty
    get label() : string{ throw 'abstract'}
    @Abstract
    makeCurrent() : UserTag{ throw 'abstract'}
    static get defaultTag() : UserTag {
    }
}

export namespace ServiceExtensionResponse {
    export type Constructors = 'result' | 'error';
    export type Interface = Omit<ServiceExtensionResponse, Constructors>;
}
@DartClass
export class ServiceExtensionResponse {
    _result : string;

    _errorCode : number;

    _errorDetail : string;

    @namedConstructor
    result(result : string) {
        this._result = result;
        this._errorCode = null;
        this._errorDetail = null;
        if (isNot(this._result, "string")) {
            throw new core.ArgumentError.value(this._result,"result","Must be a String");
        }
    }
    static result : new(result : string) => ServiceExtensionResponse;

    @namedConstructor
    error(errorCode : number,errorDetail : string) {
        this._result = null;
        this._errorCode = errorCode;
        this._errorDetail = errorDetail;
        ServiceExtensionResponse._validateErrorCode(this._errorCode);
        if (isNot(this._errorDetail, "string")) {
            throw new core.ArgumentError.value(this._errorDetail,"errorDetail","Must be a String");
        }
    }
    static error : new(errorCode : number,errorDetail : string) => ServiceExtensionResponse;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    private static __$kInvalidParams;
    static get kInvalidParams() { 
        if (this.__$kInvalidParams===undefined) {
            this.__$kInvalidParams = ServiceExtensionResponse.invalidParams;
        }
        return this.__$kInvalidParams;
    }

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    private static __$kExtensionError;
    static get kExtensionError() { 
        if (this.__$kExtensionError===undefined) {
            this.__$kExtensionError = ServiceExtensionResponse.extensionError;
        }
        return this.__$kExtensionError;
    }

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    private static __$kExtensionErrorMax;
    static get kExtensionErrorMax() { 
        if (this.__$kExtensionErrorMax===undefined) {
            this.__$kExtensionErrorMax = ServiceExtensionResponse.extensionErrorMax;
        }
        return this.__$kExtensionErrorMax;
    }

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    private static __$kExtensionErrorMin;
    static get kExtensionErrorMin() { 
        if (this.__$kExtensionErrorMin===undefined) {
            this.__$kExtensionErrorMin = ServiceExtensionResponse.extensionErrorMin;
        }
        return this.__$kExtensionErrorMin;
    }

    private static __$invalidParams;
    static get invalidParams() { 
        if (this.__$invalidParams===undefined) {
            this.__$invalidParams = -32602;
        }
        return this.__$invalidParams;
    }

    private static __$extensionError;
    static get extensionError() { 
        if (this.__$extensionError===undefined) {
            this.__$extensionError = -32000;
        }
        return this.__$extensionError;
    }

    private static __$extensionErrorMax;
    static get extensionErrorMax() { 
        if (this.__$extensionErrorMax===undefined) {
            this.__$extensionErrorMax = -32000;
        }
        return this.__$extensionErrorMax;
    }

    private static __$extensionErrorMin;
    static get extensionErrorMin() { 
        if (this.__$extensionErrorMin===undefined) {
            this.__$extensionErrorMin = -32016;
        }
        return this.__$extensionErrorMin;
    }

    static _errorCodeMessage(errorCode : number) : string {
        ServiceExtensionResponse._validateErrorCode(errorCode);
        if (errorCode == ServiceExtensionResponse.kInvalidParams) {
            return "Invalid params";
        }
        return "Server error";
    }
    static _validateErrorCode(errorCode : number) {
        if (isNot(errorCode, "number")) {
            throw new core.ArgumentError.value(errorCode,"errorCode","Must be an int");
        }
        if (errorCode == ServiceExtensionResponse.invalidParams) {
            return;
        }
        if ((errorCode >= ServiceExtensionResponse.extensionErrorMin) && (errorCode <= ServiceExtensionResponse.extensionErrorMax)) {
            return;
        }
        throw new core.ArgumentError.value(errorCode,"errorCode","Out of range");
    }
    _isError() : boolean {
        return (this._errorCode != null) && (this._errorDetail != null);
    }
    _toString() : string {
        if (this._result != null) {
            return this._result;
        }else {
            /* TODO (AssertStatementImpl) : assert (_errorCode != null); */;
            /* TODO (AssertStatementImpl) : assert (_errorDetail != null); */;
            return convert.properties.JSON.encode(new core.DartMap.literal([
                ['code',this._errorCode],
                ['message',ServiceExtensionResponse._errorCodeMessage(this._errorCode)],
                ['data',new core.DartMap.literal([
                    ['details',this._errorDetail]])]]));
        }
    }
}

export namespace ServiceProtocolInfo {
    export type Constructors = 'ServiceProtocolInfo';
    export type Interface = Omit<ServiceProtocolInfo, Constructors>;
}
@DartClass
export class ServiceProtocolInfo {
    majorVersion : number;

    minorVersion : number;

    serverUri : lib4.Uri;

    constructor(serverUri : lib4.Uri) {
    }
    @defaultConstructor
    ServiceProtocolInfo(serverUri : lib4.Uri) {
        this.majorVersion = _getServiceMajorVersion();
        this.minorVersion = _getServiceMinorVersion();
        this.serverUri = serverUri;
    }
    toString() : string {
        if (this.serverUri != null) {
            return `Dart VM Service Protocol v${this.majorVersion}.${this.minorVersion} ` + `listening on ${this.serverUri}`;
        }else {
            return `Dart VM Service Protocol v${this.majorVersion}.${this.minorVersion}`;
        }
    }
}

export namespace Counter {
    export type Constructors = Metric.Constructors | 'Counter';
    export type Interface = Omit<Counter, Constructors>;
}
@DartClass
export class Counter extends Metric {
    constructor(name : string,description : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Counter(name : string,description : string) {
        this._value = 0.0;
        super.Metric(name,description);
    }
    _value : double;

    get value() : double {
        return this._value;
    }
    set value(v : double) {
        this._value = v;
    }
    _toJSON() : core.DartMap<any,any> {
        let map = new core.DartMap.literal([
            ['type','Counter'],
            ['id',`metrics/${this.name}`],
            ['name',this.name],
            ['description',this.description],
            ['value',this.value]]);
        return map;
    }
}

export namespace Gauge {
    export type Constructors = Metric.Constructors | 'Gauge';
    export type Interface = Omit<Gauge, Constructors>;
}
@DartClass
export class Gauge extends Metric {
    min : double;

    max : double;

    _value : double;

    get value() : double {
        return this._value;
    }
    set value(v : double) {
        if (v < this.min) {
            v = this.min;
        }else if (v > this.max) {
            v = this.max;
        }
        this._value = v;
    }
    constructor(name : string,description : string,min : double,max : double) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Gauge(name : string,description : string,min : double,max : double) {
        super.Metric(name,description);
        this.min = min;
        this.max = max;
        if (isNot(this.min, "double")) {
            throw new core.ArgumentError('min must be a double');
        }
        if (isNot(this.max, "double")) {
            throw new core.ArgumentError('max must be a double');
        }
        if (!(this.min < this.max)) {
            throw new core.ArgumentError('min must be less than max');
        }
        this._value = this.min;
    }
    _toJSON() : core.DartMap<any,any> {
        let map = new core.DartMap.literal([
            ['type','Gauge'],
            ['id',`metrics/${this.name}`],
            ['name',this.name],
            ['description',this.description],
            ['value',this.value],
            ['min',this.min],
            ['max',this.max]]);
        return map;
    }
}

export class properties {
    private static __$_isProduct : boolean;
    static get _isProduct() : boolean { 
        if (this.__$_isProduct===undefined) {
            this.__$_isProduct = new boolean.fromEnvironment("dart.vm.product");
        }
        return this.__$_isProduct;
    }
    static set _isProduct(__$value : boolean)  { 
        this.__$_isProduct = __$value;
    }

    private static __$_fastPathArguments : string;
    static get _fastPathArguments() : string { 
        return this.__$_fastPathArguments;
    }
    static set _fastPathArguments(__$value : string)  { 
        this.__$_fastPathArguments = __$value;
    }

}
