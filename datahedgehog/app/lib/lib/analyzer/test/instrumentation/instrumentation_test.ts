/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/instrumentation/instrumentation_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveTests(InstrumentationServiceTest);
    defineReflectiveTests(MulticastInstrumentationServerTest);
};
export namespace InstrumentationServiceTest {
    export type Constructors = 'InstrumentationServiceTest';
    export type Interface = Omit<InstrumentationServiceTest, Constructors>;
}
@DartClass
export class InstrumentationServiceTest {
    assertNormal(server : TestInstrumentationServer,tag : string,message : string) : void {
        let sent : string = server.normalChannel.toString();
        if (!new core.DartString(sent).endsWith(`:${tag}:${message}\n`)) {
            fail(`Expected "...:${tag}:${message}", found "${sent}"`);
        }
    }
    test_logError_withColon() : void {
        let server : TestInstrumentationServer = new TestInstrumentationServer();
        let service : any = new bare.createInstance(any,null,server);
        service.logError('Error:message');
        this.assertNormal(server,InstrumentationService.TAG_ERROR,'Error::message');
    }
    test_logError_withLeadingColon() : void {
        let server : TestInstrumentationServer = new TestInstrumentationServer();
        let service : any = new bare.createInstance(any,null,server);
        service.logError(':a:bb');
        this.assertNormal(server,InstrumentationService.TAG_ERROR,'::a::bb');
    }
    test_logError_withoutColon() : void {
        let server : TestInstrumentationServer = new TestInstrumentationServer();
        let service : any = new bare.createInstance(any,null,server);
        let message : string = 'Error message';
        service.logError(message);
        this.assertNormal(server,InstrumentationService.TAG_ERROR,message);
    }
    test_logException_noTrace() : void {
        let server : TestInstrumentationServer = new TestInstrumentationServer();
        let service : any = new bare.createInstance(any,null,server);
        let message : string = 'exceptionMessage';
        service.logException(message,null);
        this.assertNormal(server,InstrumentationService.TAG_EXCEPTION,`${message}:null`);
    }
    test_logFileRead() : void {
        let server : TestInstrumentationServer = new TestInstrumentationServer();
        let service : any = new bare.createInstance(any,null,server);
        let path : string = '/file/path';
        let time : number = 978336000000;
        let content : string = 'class C {\n}\n';
        service.logFileRead(path,time,content);
        this.assertNormal(server,InstrumentationService.TAG_FILE_READ,`${path}:${time}:${content}`);
    }
    test_logLogEntry() : void {
        let server : TestInstrumentationServer = new TestInstrumentationServer();
        let service : any = new bare.createInstance(any,null,server);
        let level : string = 'level';
        let time : core.DartDateTime = new core.DartDateTime(2001);
        let message : string = 'message';
        let exception : string = 'exception';
        let stackTraceText : string = 'stackTrace';
        let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromString(stackTraceText);
        service.logLogEntry(level,time,message,exception,stackTrace);
        this.assertNormal(server,InstrumentationService.TAG_LOG_ENTRY,`${level}:${time.millisecondsSinceEpoch}:${message}:${exception}:${stackTraceText}`);
    }
    test_logNotification() : void {
        let server : TestInstrumentationServer = new TestInstrumentationServer();
        let service : any = new bare.createInstance(any,null,server);
        let message : string = 'notificationText';
        service.logNotification(message);
        this.assertNormal(server,InstrumentationService.TAG_NOTIFICATION,message);
    }
    test_logPluginError() : void {
        let server : TestInstrumentationServer = new TestInstrumentationServer();
        let service : any = new bare.createInstance(any,null,server);
        let plugin : any = new bare.createInstance(any,null,'path','name','version');
        let code : string = 'code';
        let message : string = 'exceptionMessage';
        let stackTraceText : string = 'stackTrace';
        service.logPluginError(plugin,code,message,stackTraceText);
        this.assertNormal(server,InstrumentationService.TAG_PLUGIN_ERROR,`${code}:${message}:${stackTraceText}:path:name:version`);
    }
    test_logPluginException_noTrace() : void {
        let server : TestInstrumentationServer = new TestInstrumentationServer();
        let service : any = new bare.createInstance(any,null,server);
        let plugin : any = new bare.createInstance(any,null,'path','name','version');
        let message : string = 'exceptionMessage';
        service.logPluginException(plugin,message,null);
        this.assertNormal(server,InstrumentationService.TAG_PLUGIN_EXCEPTION,`${message}:null:path:name:version`);
    }
    test_logPluginException_withTrace() : void {
        let server : TestInstrumentationServer = new TestInstrumentationServer();
        let service : any = new bare.createInstance(any,null,server);
        let plugin : any = new bare.createInstance(any,null,'path','name','version');
        let message : string = 'exceptionMessage';
        let stackTraceText : string = 'stackTrace';
        let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromString(stackTraceText);
        service.logPluginException(plugin,message,stackTrace);
        this.assertNormal(server,InstrumentationService.TAG_PLUGIN_EXCEPTION,`${message}:${stackTraceText}:path:name:version`);
    }
    test_logPluginNotification() : void {
        let server : TestInstrumentationServer = new TestInstrumentationServer();
        let service : any = new bare.createInstance(any,null,server);
        let notification : string = 'notification';
        service.logPluginNotification('path',notification);
        this.assertNormal(server,InstrumentationService.TAG_PLUGIN_NOTIFICATION,`${notification}:path::`);
    }
    test_logPluginRequest() : void {
        let server : TestInstrumentationServer = new TestInstrumentationServer();
        let service : any = new bare.createInstance(any,null,server);
        let request : string = 'request';
        service.logPluginRequest('path',request);
        this.assertNormal(server,InstrumentationService.TAG_PLUGIN_REQUEST,`${request}:path::`);
    }
    test_logPluginResponse() : void {
        let server : TestInstrumentationServer = new TestInstrumentationServer();
        let service : any = new bare.createInstance(any,null,server);
        let response : string = 'response';
        service.logPluginResponse('path',response);
        this.assertNormal(server,InstrumentationService.TAG_PLUGIN_RESPONSE,`${response}:path::`);
    }
    test_logPluginTimeout() : void {
        let server : TestInstrumentationServer = new TestInstrumentationServer();
        let service : any = new bare.createInstance(any,null,server);
        let plugin : any = new bare.createInstance(any,null,'path','name','version');
        let request : string = 'request';
        service.logPluginTimeout(plugin,request);
        this.assertNormal(server,InstrumentationService.TAG_PLUGIN_TIMEOUT,`${request}:path:name:version`);
    }
    test_logRequest() : void {
        let server : TestInstrumentationServer = new TestInstrumentationServer();
        let service : any = new bare.createInstance(any,null,server);
        let message : string = 'requestText';
        service.logRequest(message);
        this.assertNormal(server,InstrumentationService.TAG_REQUEST,message);
    }
    test_logResponse() : void {
        let server : TestInstrumentationServer = new TestInstrumentationServer();
        let service : any = new bare.createInstance(any,null,server);
        let message : string = 'responseText';
        service.logResponse(message);
        this.assertNormal(server,InstrumentationService.TAG_RESPONSE,message);
    }
    test_logVersion() : void {
        let server : TestInstrumentationServer = new TestInstrumentationServer();
        let service : any = new bare.createInstance(any,null,server);
        service.logVersion('myUuid','someClientId','someClientVersion','aServerVersion','anSdkVersion');
        expect(server.normalChannel.toString(),'');
        expect(server.priorityChannel.toString(),endsWith(':myUuid:someClientId:someClientVersion:aServerVersion:anSdkVersion\n'));
    }
    constructor() {
    }
    @defaultConstructor
    InstrumentationServiceTest() {
    }
}

export namespace MulticastInstrumentationServerTest {
    export type Constructors = 'MulticastInstrumentationServerTest';
    export type Interface = Omit<MulticastInstrumentationServerTest, Constructors>;
}
@DartClass
export class MulticastInstrumentationServerTest {
    serverA : TestInstrumentationServer;

    serverB : TestInstrumentationServer;

    server : any;

    setUp() : void {
        this.server = new bare.createInstance(any,null,new core.DartList.literal(this.serverA,this.serverB));
    }
    test_log() : void {
        this.server.log('foo bar');
        this._assertNormal(this.serverA,'foo bar');
        this._assertNormal(this.serverB,'foo bar');
    }
    test_logWithPriority() : void {
        this.server.logWithPriority('foo bar');
        this._assertPriority(this.serverA,'foo bar');
        this._assertPriority(this.serverB,'foo bar');
    }
    test_shutdown() : void {
        this.server.shutdown();
    }
    _assertNormal(server : TestInstrumentationServer,message : string) : void {
        let sent : string = server.normalChannel.toString();
        if (!new core.DartString(sent).endsWith(`${message}\n`)) {
            fail(`Expected "...${message}", found "${sent}"`);
        }
    }
    _assertPriority(server : TestInstrumentationServer,message : string) : void {
        let sent : string = server.priorityChannel.toString();
        if (!new core.DartString(sent).endsWith(`${message}\n`)) {
            fail(`Expected "...${message}", found "${sent}"`);
        }
    }
    constructor() {
    }
    @defaultConstructor
    MulticastInstrumentationServerTest() {
        this.serverA = new TestInstrumentationServer();
        this.serverB = new TestInstrumentationServer();
    }
}

export namespace TestInstrumentationServer {
    export type Constructors = 'TestInstrumentationServer';
    export type Interface = Omit<TestInstrumentationServer, Constructors>;
}
@DartClass
@Implements(any)
export class TestInstrumentationServer implements any.Interface {
    normalChannel : core.DartStringBuffer;

    priorityChannel : core.DartStringBuffer;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get describe() : string {
        return 'test instrumentation';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sessionId() : string {
        return '';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    log(message : string) : void {
        this.normalChannel.writeln(message);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logWithPriority(message : string) : void {
        this.priorityChannel.writeln(message);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shutdown() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
        } )());
    }

    constructor() {
    }
    @defaultConstructor
    TestInstrumentationServer() {
        this.normalChannel = new core.DartStringBuffer();
        this.priorityChannel = new core.DartStringBuffer();
    }
}

export class properties {
}
