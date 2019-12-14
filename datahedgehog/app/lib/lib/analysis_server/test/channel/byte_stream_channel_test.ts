/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/channel/byte_stream_channel_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "./../mocks";
import * as convert from "@dart2ts/dart/convert";

export var main : () => any = () =>  {
    group('ByteStreamClientChannel',() =>  {
        setUp(ByteStreamClientChannelTest.setUp.bind(ByteStreamClientChannelTest));
        test('close',ByteStreamClientChannelTest.close.bind(ByteStreamClientChannelTest));
        test('listen_notification',ByteStreamClientChannelTest.listen_notification.bind(ByteStreamClientChannelTest));
        test('listen_response',ByteStreamClientChannelTest.listen_response.bind(ByteStreamClientChannelTest));
        test('sendRequest',ByteStreamClientChannelTest.sendRequest.bind(ByteStreamClientChannelTest));
    });
    group('ByteStreamServerChannel',() =>  {
        setUp(ByteStreamServerChannelTest.setUp.bind(ByteStreamServerChannelTest));
        test('closed',ByteStreamServerChannelTest.closed.bind(ByteStreamServerChannelTest));
        test('listen_wellFormedRequest',ByteStreamServerChannelTest.listen_wellFormedRequest.bind(ByteStreamServerChannelTest));
        test('listen_invalidRequest',ByteStreamServerChannelTest.listen_invalidRequest.bind(ByteStreamServerChannelTest));
        test('listen_invalidJson',ByteStreamServerChannelTest.listen_invalidJson.bind(ByteStreamServerChannelTest));
        test('listen_streamError',ByteStreamServerChannelTest.listen_streamError.bind(ByteStreamServerChannelTest));
        test('listen_streamDone',ByteStreamServerChannelTest.listen_streamDone.bind(ByteStreamServerChannelTest));
        test('sendNotification',ByteStreamServerChannelTest.sendNotification.bind(ByteStreamServerChannelTest));
        test('sendResponse',ByteStreamServerChannelTest.sendResponse.bind(ByteStreamServerChannelTest));
    });
};
export namespace ByteStreamClientChannelTest {
    export type Constructors = 'ByteStreamClientChannelTest';
    export type Interface = Omit<ByteStreamClientChannelTest, Constructors>;
}
@DartClass
export class ByteStreamClientChannelTest {
    private static __$channel : any;
    static get channel() : any { 
        return this.__$channel;
    }
    static set channel(__$value : any)  { 
        this.__$channel = __$value;
    }

    private static __$inputSink : io.IOSink;
    static get inputSink() : io.IOSink { 
        return this.__$inputSink;
    }
    static set inputSink(__$value : io.IOSink)  { 
        this.__$inputSink = __$value;
    }

    private static __$outputSink : io.IOSink;
    static get outputSink() : io.IOSink { 
        return this.__$outputSink;
    }
    static set outputSink(__$value : io.IOSink)  { 
        this.__$outputSink = __$value;
    }

    private static __$outputLineStream : async.DartStream<string>;
    static get outputLineStream() : async.DartStream<string> { 
        return this.__$outputLineStream;
    }
    static set outputLineStream(__$value : async.DartStream<string>)  { 
        this.__$outputLineStream = __$value;
    }

    static close() : async.Future<any> {
        let doneCalled : boolean = false;
        let closeCalled : boolean = false;
        ByteStreamClientChannelTest.outputLineStream.listen((_ : any) =>  {
        });
        ByteStreamClientChannelTest.outputSink.done.then((_ : any) =>  {
            doneCalled = true;
        });
        ByteStreamClientChannelTest.channel.close().then((_ : any) =>  {
            closeCalled = true;
        });
        return lib4.pumpEventQueue().then((_ : any) =>  {
            expect(doneCalled,isTrue);
            expect(closeCalled,isTrue);
        });
    }
    static listen_notification() : async.Future<any> {
        let notifications : core.DartList<any> = new core.DartList.literal();
        ByteStreamClientChannelTest.channel.notificationStream.forEach((n : any) =>  {
            return notifications.add(n);
        });
        ByteStreamClientChannelTest.inputSink.writeln('{"event":"server.connected"}');
        return lib4.pumpEventQueue().then((_ : any) =>  {
            expect(notifications.length,equals(1));
            expect(notifications[0].event,equals('server.connected'));
        });
    }
    static listen_response() : async.Future<any> {
        let responses : core.DartList<any> = new core.DartList.literal();
        ByteStreamClientChannelTest.channel.responseStream.forEach((n : any) =>  {
            return responses.add(n);
        });
        ByteStreamClientChannelTest.inputSink.writeln('{"id":"72"}');
        return lib4.pumpEventQueue().then((_ : any) =>  {
            expect(responses.length,equals(1));
            expect(responses[0].id,equals('72'));
        });
    }
    static sendRequest() : async.Future<any> {
        let assertCount : number = 0;
        let request : any = new bare.createInstance(any,null,'72','foo.bar');
        ByteStreamClientChannelTest.outputLineStream.first.then((line : any) =>  {
            return convert.properties.JSON.decode(line);
        }).then((json : any) =>  {
            expect(op(Op.INDEX,json,Request.ID),equals('72'));
            expect(op(Op.INDEX,json,Request.METHOD),equals('foo.bar'));
            ByteStreamClientChannelTest.inputSink.writeln('{"id":"73"}');
            ByteStreamClientChannelTest.inputSink.writeln('{"id":"72"}');
            assertCount++;
        });
        ByteStreamClientChannelTest.channel.sendRequest(request).then((response : any) =>  {
            expect(response.id,equals('72'));
            assertCount++;
        });
        return lib4.pumpEventQueue().then((_ : any) =>  {
            return expect(assertCount,equals(2));
        });
    }
    static setUp() : void {
        let inputStream = new async.DartStreamController<core.DartList<number>>();
        ByteStreamClientChannelTest.inputSink = new io.IOSink(inputStream);
        let outputStream = new async.DartStreamController<core.DartList<number>>();
        ByteStreamClientChannelTest.outputLineStream = outputStream.stream.transform((new convert.Utf8Codec()).decoder).transform(new convert.LineSplitter());
        ByteStreamClientChannelTest.outputSink = new io.IOSink(outputStream);
        ByteStreamClientChannelTest.channel = new bare.createInstance(any,null,inputStream.stream,ByteStreamClientChannelTest.outputSink);
    }
    constructor() {
    }
    @defaultConstructor
    ByteStreamClientChannelTest() {
    }
}

export namespace ByteStreamServerChannelTest {
    export type Constructors = 'ByteStreamServerChannelTest';
    export type Interface = Omit<ByteStreamServerChannelTest, Constructors>;
}
@DartClass
export class ByteStreamServerChannelTest {
    private static __$channel : any;
    static get channel() : any { 
        return this.__$channel;
    }
    static set channel(__$value : any)  { 
        this.__$channel = __$value;
    }

    private static __$inputSink : io.IOSink;
    static get inputSink() : io.IOSink { 
        return this.__$inputSink;
    }
    static set inputSink(__$value : io.IOSink)  { 
        this.__$inputSink = __$value;
    }

    private static __$outputLineStream : async.DartStream<string>;
    static get outputLineStream() : async.DartStream<string> { 
        return this.__$outputLineStream;
    }
    static set outputLineStream(__$value : async.DartStream<string>)  { 
        this.__$outputLineStream = __$value;
    }

    private static __$requestStream : async.DartStream<any>;
    static get requestStream() : async.DartStream<any> { 
        return this.__$requestStream;
    }
    static set requestStream(__$value : async.DartStream<any>)  { 
        this.__$requestStream = __$value;
    }

    private static __$errorStream : async.DartStream<any>;
    static get errorStream() : async.DartStream<any> { 
        return this.__$errorStream;
    }
    static set errorStream(__$value : async.DartStream<any>)  { 
        this.__$errorStream = __$value;
    }

    private static __$doneFuture : async.Future<any>;
    static get doneFuture() : async.Future<any> { 
        return this.__$doneFuture;
    }
    static set doneFuture(__$value : async.Future<any>)  { 
        this.__$doneFuture = __$value;
    }

    static closed() : async.Future<any> {
        return ByteStreamServerChannelTest.inputSink.close().then((_ : any) =>  {
            return ByteStreamServerChannelTest.channel.closed.timeout(new core.DartDuration({
                seconds : 1}));
        });
    }
    static listen_invalidJson() : async.Future<any> {
        ByteStreamServerChannelTest.inputSink.writeln('{"id":');
        return ByteStreamServerChannelTest.inputSink.flush().then((_ : any) =>  {
            return ByteStreamServerChannelTest.outputLineStream.first.timeout(new core.DartDuration({
                seconds : 1}));
        }).then((response : string) =>  {
            let jsonResponse = new convert.JsonCodec().decode(response);
            expect(jsonResponse,isMap);
            expect(jsonResponse,contains('error'));
            expect(op(Op.INDEX,jsonResponse,'error'),isNotNull);
        });
    }
    static listen_invalidRequest() : async.Future<any> {
        ByteStreamServerChannelTest.inputSink.writeln('{"id":"0"}');
        return ByteStreamServerChannelTest.inputSink.flush().then((_ : any) =>  {
            return ByteStreamServerChannelTest.outputLineStream.first.timeout(new core.DartDuration({
                seconds : 1}));
        }).then((response : string) =>  {
            let jsonResponse = new convert.JsonCodec().decode(response);
            expect(jsonResponse,isMap);
            expect(jsonResponse,contains('error'));
            expect(op(Op.INDEX,jsonResponse,'error'),isNotNull);
        });
    }
    static listen_streamDone() : async.Future<any> {
        return ByteStreamServerChannelTest.inputSink.close().then((_ : any) =>  {
            return ByteStreamServerChannelTest.doneFuture.timeout(new core.DartDuration({
                seconds : 1}));
        });
    }
    static listen_streamError() : async.Future<any> {
        let error = new core.DartError();
        ByteStreamServerChannelTest.inputSink.addError(error);
        return ByteStreamServerChannelTest.inputSink.flush().then((_ : any) =>  {
            return ByteStreamServerChannelTest.errorStream.first.timeout(new core.DartDuration({
                seconds : 1}));
        }).then((receivedError : any) =>  {
            expect(receivedError,same(error));
        });
    }
    static listen_wellFormedRequest() : async.Future<any> {
        ByteStreamServerChannelTest.inputSink.writeln('{"id":"0","method":"server.version"}');
        return ByteStreamServerChannelTest.inputSink.flush().then((_ : any) =>  {
            return ByteStreamServerChannelTest.requestStream.first.timeout(new core.DartDuration({
                seconds : 1}));
        }).then((request : any) =>  {
            expect(request.id,equals("0"));
            expect(request.method,equals("server.version"));
        });
    }
    static sendNotification() : async.Future<any> {
        ByteStreamServerChannelTest.channel.sendNotification(new bare.createInstance(any,null,'foo'));
        return ByteStreamServerChannelTest.outputLineStream.first.timeout(new core.DartDuration({
            seconds : 1})).then((notification : string) =>  {
            let jsonNotification = new convert.JsonCodec().decode(notification);
            expect(jsonNotification,isMap);
            expect(jsonNotification,contains('event'));
            expect(op(Op.INDEX,jsonNotification,'event'),equals('foo'));
        });
    }
    static sendResponse() : async.Future<any> {
        ByteStreamServerChannelTest.channel.sendResponse(new bare.createInstance(any,null,'foo'));
        return ByteStreamServerChannelTest.outputLineStream.first.timeout(new core.DartDuration({
            seconds : 1})).then((response : string) =>  {
            let jsonResponse = new convert.JsonCodec().decode(response);
            expect(jsonResponse,isMap);
            expect(jsonResponse,contains('id'));
            expect(op(Op.INDEX,jsonResponse,'id'),equals('foo'));
        });
    }
    static setUp() : void {
        let inputStream : async.DartStreamController<core.DartList<number>> = new async.DartStreamController<core.DartList<number>>();
        ByteStreamServerChannelTest.inputSink = new io.IOSink(inputStream);
        let outputStream : async.DartStreamController<core.DartList<number>> = new async.DartStreamController<core.DartList<number>>();
        ByteStreamServerChannelTest.outputLineStream = outputStream.stream.transform((new convert.Utf8Codec()).decoder).transform(new convert.LineSplitter());
        let outputSink : io.IOSink = new io.IOSink(outputStream);
        ByteStreamServerChannelTest.channel = new bare.createInstance(any,null,inputStream.stream,outputSink,InstrumentationService.NULL_SERVICE);
        let requestStreamController : async.DartStreamController<any> = new async.DartStreamController<any>();
        ByteStreamServerChannelTest.requestStream = requestStreamController.stream;
        let errorStreamController : async.DartStreamController<any> = new async.DartStreamController<any>();
        ByteStreamServerChannelTest.errorStream = errorStreamController.stream;
        let doneCompleter : async.DartCompleter<any> = new async.DartCompleter<any>();
        ByteStreamServerChannelTest.doneFuture = doneCompleter.future;
        ByteStreamServerChannelTest.channel.listen((request : any) =>  {
            requestStreamController.add(request);
        },{
            onError : (error : any) =>  {
                errorStreamController.add(error);
            },onDone : () =>  {
                doneCompleter.complete();
            }});
    }
    constructor() {
    }
    @defaultConstructor
    ByteStreamServerChannelTest() {
    }
}

export class properties {
}
