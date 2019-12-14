/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/channel/web_socket_channel_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../mocks";

export var main : () => any = () =>  {
    group('WebSocketChannel',() =>  {
        setUp(WebSocketChannelTest.setUp.bind(WebSocketChannelTest));
        test('close',WebSocketChannelTest.close.bind(WebSocketChannelTest));
        test('invalidJsonToClient',WebSocketChannelTest.invalidJsonToClient.bind(WebSocketChannelTest));
        test('invalidJsonToServer',WebSocketChannelTest.invalidJsonToServer.bind(WebSocketChannelTest));
        test('notification',WebSocketChannelTest.notification.bind(WebSocketChannelTest));
        test('notificationAndResponse',WebSocketChannelTest.notificationAndResponse.bind(WebSocketChannelTest));
        test('request',WebSocketChannelTest.request.bind(WebSocketChannelTest));
        test('requestResponse',WebSocketChannelTest.requestResponse.bind(WebSocketChannelTest));
        test('response',WebSocketChannelTest.response.bind(WebSocketChannelTest));
    });
};
export namespace WebSocketChannelTest {
    export type Constructors = 'WebSocketChannelTest';
    export type Interface = Omit<WebSocketChannelTest, Constructors>;
}
@DartClass
export class WebSocketChannelTest {
    private static __$socket : lib3.MockSocket<any>;
    static get socket() : lib3.MockSocket<any> { 
        return this.__$socket;
    }
    static set socket(__$value : lib3.MockSocket<any>)  { 
        this.__$socket = __$value;
    }

    private static __$client : any;
    static get client() : any { 
        return this.__$client;
    }
    static set client(__$value : any)  { 
        this.__$client = __$value;
    }

    private static __$server : any;
    static get server() : any { 
        return this.__$server;
    }
    static set server(__$value : any)  { 
        this.__$server = __$value;
    }

    private static __$requestsReceived : core.DartList<any>;
    static get requestsReceived() : core.DartList<any> { 
        return this.__$requestsReceived;
    }
    static set requestsReceived(__$value : core.DartList<any>)  { 
        this.__$requestsReceived = __$value;
    }

    private static __$responsesReceived : core.DartList<any>;
    static get responsesReceived() : core.DartList<any> { 
        return this.__$responsesReceived;
    }
    static set responsesReceived(__$value : core.DartList<any>)  { 
        this.__$responsesReceived = __$value;
    }

    private static __$notificationsReceived : core.DartList<any>;
    static get notificationsReceived() : core.DartList<any> { 
        return this.__$notificationsReceived;
    }
    static set notificationsReceived(__$value : core.DartList<any>)  { 
        this.__$notificationsReceived = __$value;
    }

    static close() : async.Future<any> {
        let timeout = new core.DartDuration({
            seconds : 1});
        let future = WebSocketChannelTest.client.responseStream.drain().timeout(timeout);
        WebSocketChannelTest.client.close();
        return future;
    }
    static expectMsgCount(_namedArguments? : {requestCount? : any,responseCount? : any,notificationCount? : any}) : void {
        let {requestCount,responseCount,notificationCount} = Object.assign({
            "requestCount" : 0,
            "responseCount" : 0,
            "notificationCount" : 0}, _namedArguments );
        expect(WebSocketChannelTest.requestsReceived,hasLength(requestCount));
        expect(WebSocketChannelTest.responsesReceived,hasLength(responseCount));
        expect(WebSocketChannelTest.notificationsReceived,hasLength(notificationCount));
    }
    static invalidJsonToClient() : async.Future<any> {
        let result = WebSocketChannelTest.client.responseStream.first.timeout(new core.DartDuration({
            seconds : 1})).then((response : any) =>  {
            expect(response.id,equals('myId'));
            WebSocketChannelTest.expectMsgCount({
                responseCount : 1});
        });
        WebSocketChannelTest.socket.twin.add('{"foo":"bar"}');
        WebSocketChannelTest.server.sendResponse(new bare.createInstance(any,null,'myId'));
        return result;
    }
    static invalidJsonToServer() : async.Future<any> {
        let result = WebSocketChannelTest.client.responseStream.first.timeout(new core.DartDuration({
            seconds : 1})).then((response : any) =>  {
            expect(response.id,equals(''));
            expect(response.error,isNotNull);
            WebSocketChannelTest.expectMsgCount({
                responseCount : 1});
        });
        WebSocketChannelTest.socket.add('"blat"');
        return result;
    }
    static notification() : async.Future<any> {
        let result = WebSocketChannelTest.client.notificationStream.first.timeout(new core.DartDuration({
            seconds : 1})).then((notification : any) =>  {
            expect(notification.event,equals('myEvent'));
            WebSocketChannelTest.expectMsgCount({
                notificationCount : 1});
            expect(WebSocketChannelTest.notificationsReceived.first,equals(notification));
        });
        WebSocketChannelTest.server.sendNotification(new bare.createInstance(any,null,'myEvent'));
        return result;
    }
    static notificationAndResponse() : async.Future<any> {
        let result = async.Future.wait(new core.DartList.literal(WebSocketChannelTest.client.notificationStream.first,WebSocketChannelTest.client.responseStream.first)).timeout(new core.DartDuration({
            seconds : 1})).then((_ : any) =>  {
            return WebSocketChannelTest.expectMsgCount({
                responseCount : 1,notificationCount : 1});
        });
        ((_) : any =>  {
            {
                sendNotification(new bare.createInstance(any,null,'myEvent'));
                sendResponse(new bare.createInstance(any,null,'myId'));
                return _;
            }
        })(WebSocketChannelTest.server);
        return result;
    }
    static request() : void {
        WebSocketChannelTest.client.sendRequest(new bare.createInstance(any,null,'myId','myMth'));
        WebSocketChannelTest.server.listen((request : any) =>  {
            expect(request.id,equals('myId'));
            expect(request.method,equals('myMth'));
            WebSocketChannelTest.expectMsgCount({
                requestCount : 1});
        });
    }
    static requestResponse() : async.Future<any> {
        WebSocketChannelTest.server.listen((request : any) =>  {
            return WebSocketChannelTest.server.sendResponse(new bare.createInstance(any,null,request.id));
        });
        return WebSocketChannelTest.client.sendRequest(new bare.createInstance(any,null,'myId','myMth')).timeout(new core.DartDuration({
            seconds : 1})).then((response : any) =>  {
            expect(response.id,equals('myId'));
            WebSocketChannelTest.expectMsgCount({
                requestCount : 1,responseCount : 1});
            expect(is(WebSocketChannelTest.requestsReceived.first, any),isTrue);
            let request : any = WebSocketChannelTest.requestsReceived.first;
            expect(request.id,equals('myId'));
            expect(request.method,equals('myMth'));
            expect(WebSocketChannelTest.responsesReceived.first,equals(response));
        });
    }
    static response() : async.Future<any> {
        WebSocketChannelTest.server.sendResponse(new bare.createInstance(any,null,'myId'));
        return WebSocketChannelTest.client.responseStream.first.timeout(new core.DartDuration({
            seconds : 1})).then((response : any) =>  {
            expect(response.id,equals('myId'));
            WebSocketChannelTest.expectMsgCount({
                responseCount : 1});
        });
    }
    static setUp() : void {
        WebSocketChannelTest.socket = new lib3.MockSocket.pair();
        WebSocketChannelTest.client = new bare.createInstance(any,null,WebSocketChannelTest.socket);
        WebSocketChannelTest.server = new bare.createInstance(any,null,WebSocketChannelTest.socket.twin,InstrumentationService.NULL_SERVICE);
        WebSocketChannelTest.requestsReceived = new core.DartList.literal<any>();
        WebSocketChannelTest.responsesReceived = new core.DartList.literal<any>();
        WebSocketChannelTest.notificationsReceived = new core.DartList.literal<any>();
        WebSocketChannelTest.socket.twin.allowMultipleListeners();
        WebSocketChannelTest.server.listen(WebSocketChannelTest.requestsReceived.add.bind(WebSocketChannelTest.requestsReceived));
        WebSocketChannelTest.client.responseStream.listen(WebSocketChannelTest.responsesReceived.add.bind(WebSocketChannelTest.responsesReceived));
        WebSocketChannelTest.client.notificationStream.listen(WebSocketChannelTest.notificationsReceived.add.bind(WebSocketChannelTest.notificationsReceived));
    }
    constructor() {
    }
    @defaultConstructor
    WebSocketChannelTest() {
    }
}

export class properties {
}
