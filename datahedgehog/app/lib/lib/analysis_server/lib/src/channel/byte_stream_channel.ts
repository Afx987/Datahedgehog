/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/channel/byte_stream_channel.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as convert from "@dart2ts/dart/convert";

export namespace ByteStreamClientChannel {
    export type Constructors = 'ByteStreamClientChannel';
    export type Interface = Omit<ByteStreamClientChannel, Constructors>;
}
@DartClass
@Implements(any)
export class ByteStreamClientChannel implements any.Interface {
    input : async.DartStream<any>;

    output : io.IOSink;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    responseStream : async.DartStream<any>;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    notificationStream : async.DartStream<any>;

    constructor(input : async.DartStream<any>,output : io.IOSink) {
    }
    @defaultConstructor
    ByteStreamClientChannel(input : async.DartStream<any>,output : io.IOSink) {
        this.input = input;
        this.output = output;
        let jsonStream : async.DartStream<any> = this.input.transform(new convert.Utf8Decoder()).transform(new convert.LineSplitter()).transform(new bare.createInstance(any,null)).where((json : any) =>  {
            return is(json, core.DartMap<any,any>);
        }).asBroadcastStream();
        this.responseStream = jsonStream.where((json : any) =>  {
            return op(Op.EQUALS,op(Op.INDEX,json,Notification.EVENT),null);
        }).transform(new bare.createInstance(any,null)).asBroadcastStream();
        this.notificationStream = jsonStream.where((json : any) =>  {
            return op(Op.INDEX,json,Notification.EVENT) != null;
        }).transform(new bare.createInstance(any,null)).asBroadcastStream();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    close() : async.Future<any> {
        return this.output.close();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    sendRequest(request : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : string = request.id;
            this.output.write(convert.properties.JSON.encode(request.toJson()) + '\n');
            return await this.responseStream.firstWhere((response : any) =>  {
                return op(Op.EQUALS,response.id,id);
            });
        } )());
    }

}

export namespace ByteStreamServerChannel {
    export type Constructors = 'ByteStreamServerChannel';
    export type Interface = Omit<ByteStreamServerChannel, Constructors>;
}
@DartClass
@Implements(any)
export class ByteStreamServerChannel implements any.Interface {
    _input : async.DartStream<any>;

    _output : io.IOSink;

    _instrumentationService : any;

    _closed : async.DartCompleter<any>;

    _closeRequested : boolean;

    constructor(_input : async.DartStream<any>,_output : io.IOSink,_instrumentationService : any) {
    }
    @defaultConstructor
    ByteStreamServerChannel(_input : async.DartStream<any>,_output : io.IOSink,_instrumentationService : any) {
        this._closed = new async.DartCompleter<any>();
        this._closeRequested = false;
        this._input = _input;
        this._output = _output;
        this._instrumentationService = _instrumentationService;
    }
    get closed() : async.Future<any> {
        return this._closed.future;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    close() : void {
        if (!this._closeRequested) {
            this._closeRequested = true;
            /* TODO (AssertStatementImpl) : assert (!_closed.isCompleted); */;
            this._closed.complete();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    listen(onRequest : (request : any) => void,_namedArguments? : {onError? : Function,onDone? : () => void}) : void {
        let {onError,onDone} = Object.assign({
        }, _namedArguments );
        this._input.transform(new convert.Utf8Decoder()).transform(new convert.LineSplitter()).listen((data : string) =>  {
            return this._readRequest(data,onRequest);
        },{
            onError : onError,onDone : () =>  {
                this.close();
                onDone();
            }});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    sendNotification(notification : any) : void {
        if (this._closeRequested) {
            return;
        }
        ServerPerformanceStatistics.serverChannel.makeCurrentWhile(() =>  {
            let jsonEncoding : string = convert.properties.JSON.encode(notification.toJson());
            this._outputLine(jsonEncoding);
            this._instrumentationService.logNotification(jsonEncoding);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    sendResponse(response : any) : void {
        if (this._closeRequested) {
            return;
        }
        ServerPerformanceStatistics.serverChannel.makeCurrentWhile(() =>  {
            let jsonEncoding : string = convert.properties.JSON.encode(response.toJson());
            this._outputLine(jsonEncoding);
            this._instrumentationService.logResponse(jsonEncoding);
        });
    }
    _outputLine(s : string) : void {
        this._output.writeln(s);
    }
    _readRequest(data : core.DartObject,onRequest : (request : any) => void) : void {
        if (this._closed.isCompleted) {
            return;
        }
        ServerPerformanceStatistics.serverChannel.makeCurrentWhile(() =>  {
            this._instrumentationService.logRequest(data);
            let request : any = new bare.createInstance(any,null,data);
            if (op(Op.EQUALS,request,null)) {
                this.sendResponse(new bare.createInstance(any,null));
                return;
            }
            onRequest(request);
        });
    }
}

export class properties {
}
