/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/socket_server_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./mocks";

export var main : () => any = () =>  {
    group('SocketServer',() =>  {
        test('createAnalysisServer_successful',SocketServerTest.createAnalysisServer_successful.bind(SocketServerTest));
        test('createAnalysisServer_alreadyStarted',SocketServerTest.createAnalysisServer_alreadyStarted.bind(SocketServerTest));
        test('requestHandler_exception',SocketServerTest.requestHandler_exception.bind(SocketServerTest));
        test('requestHandler_futureException',SocketServerTest.requestHandler_futureException.bind(SocketServerTest));
    });
};
export namespace SocketServerTest {
    export type Constructors = 'SocketServerTest';
    export type Interface = Omit<SocketServerTest, Constructors>;
}
@DartClass
export class SocketServerTest {
    static createAnalysisServer_alreadyStarted() : void {
        let server : any = SocketServerTest._createSocketServer();
        let channel1 : lib3.MockServerChannel = new lib3.MockServerChannel();
        let channel2 : lib3.MockServerChannel = new lib3.MockServerChannel();
        server.createAnalysisServer(channel1);
        expect(channel1.notificationsReceived[0].event,SERVER_CONNECTED);
        server.createAnalysisServer(channel2);
        channel1.expectMsgCount({
            notificationCount : 1});
        channel2.expectMsgCount({
            responseCount : 1});
        expect(channel2.responsesReceived[0].id,equals(''));
        expect(channel2.responsesReceived[0].error,isNotNull);
        expect(channel2.responsesReceived[0].error.code,equals(RequestErrorCode.SERVER_ALREADY_STARTED));
        channel2.sendRequest(new bare.createInstance(any,null).toRequest('0')).then((response : any) =>  {
            expect(response.id,equals('0'));
            expect(response.error,isNotNull);
            expect(response.error.code,equals(RequestErrorCode.SERVER_ALREADY_STARTED));
            channel2.expectMsgCount({
                responseCount : 2});
        });
    }
    static createAnalysisServer_successful() : async.Future<any> {
        let server : any = SocketServerTest._createSocketServer();
        let channel : lib3.MockServerChannel = new lib3.MockServerChannel();
        server.createAnalysisServer(channel);
        channel.expectMsgCount({
            notificationCount : 1});
        expect(channel.notificationsReceived[0].event,SERVER_CONNECTED);
        return channel.sendRequest(new bare.createInstance(any,null).toRequest('0')).then((response : any) =>  {
            expect(response.id,equals('0'));
            expect(response.error,isNull);
            channel.expectMsgCount({
                responseCount : 1,notificationCount : 1});
        });
    }
    static requestHandler_exception() : async.Future<any> {
        let server : any = SocketServerTest._createSocketServer();
        let channel : lib3.MockServerChannel = new lib3.MockServerChannel();
        server.createAnalysisServer(channel);
        channel.expectMsgCount({
            notificationCount : 1});
        expect(channel.notificationsReceived[0].event,SERVER_CONNECTED);
        let handler : _MockRequestHandler = new _MockRequestHandler(false);
        server.analysisServer.handlers = new core.DartList.literal(handler);
        let request = new bare.createInstance(any,null).toRequest('0');
        return channel.sendRequest(request).then((response : any) =>  {
            expect(response.id,equals('0'));
            expect(response.error,isNotNull);
            expect(response.error.code,equals(RequestErrorCode.SERVER_ERROR));
            expect(response.error.message,equals('mock request exception'));
            expect(response.error.stackTrace,isNotNull);
            expect(response.error.stackTrace,isNotEmpty);
            channel.expectMsgCount({
                responseCount : 1,notificationCount : 1});
        });
    }
    static requestHandler_futureException() : async.Future<any> {
        let server : any = SocketServerTest._createSocketServer();
        let channel : lib3.MockServerChannel = new lib3.MockServerChannel();
        server.createAnalysisServer(channel);
        let handler : _MockRequestHandler = new _MockRequestHandler(true);
        server.analysisServer.handlers = new core.DartList.literal(handler);
        let request = new bare.createInstance(any,null).toRequest('0');
        return channel.sendRequest(request).then((response : any) =>  {
            expect(response.id,equals('0'));
            expect(response.error,isNull);
            channel.expectMsgCount({
                responseCount : 1,notificationCount : 2});
            expect(channel.notificationsReceived[1].event,SERVER_ERROR);
        });
    }
    static _createSocketServer() : any {
        let resourceProvider : any = PhysicalResourceProvider.INSTANCE;
        let serverPlugin : any = new bare.createInstance(any,null);
        let manager : any = new bare.createInstance(any,null);
        manager.processPlugins(new core.DartList.literal(serverPlugin));
        return new bare.createInstance(any,null,new bare.createInstance(any,null),new bare.createInstance(any,null,'',false),new bare.createInstance(any,null,resourceProvider,FolderBasedDartSdk.defaultSdkDirectory(resourceProvider)),InstrumentationService.NULL_SERVICE,null,serverPlugin,null,null,false);
    }
    constructor() {
    }
    @defaultConstructor
    SocketServerTest() {
    }
}

export namespace _MockRequestHandler {
    export type Constructors = '_MockRequestHandler';
    export type Interface = Omit<_MockRequestHandler, Constructors>;
}
@DartClass
@Implements(any)
export class _MockRequestHandler implements any.Interface {
    futureException : boolean;

    constructor(futureException : boolean) {
    }
    @defaultConstructor
    _MockRequestHandler(futureException : boolean) {
        this.futureException = futureException;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleRequest(request : any) : any {
        if (this.futureException) {
            new async.Future<any>(this.throwException.bind(this));
            return new bare.createInstance(any,null,request.id);
        }
        throw 'mock request exception';
    }
    throwException() : void {
        throw 'mock future exception';
    }
}

export class properties {
}
