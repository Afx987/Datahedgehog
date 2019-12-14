/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/channel/web_socket_channel.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as convert from "@dart2ts/dart/convert";

export namespace WebSocketClientChannel {
    export type Constructors = 'WebSocketClientChannel';
    export type Interface = Omit<WebSocketClientChannel, Constructors>;
}
@DartClass
@Implements(any)
export class WebSocketClientChannel implements any.Interface {
    socket : io.WebSocket;

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

    constructor(socket : io.WebSocket) {
    }
    @defaultConstructor
    WebSocketClientChannel(socket : io.WebSocket) {
        this.socket = socket;
        let jsonStream : async.DartStream<any> = this.socket.where((data : any) =>  {
            return is(data, "string");
        }).transform(new bare.createInstance(any,null)).where((json : any) =>  {
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
        return this.socket.close();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    sendRequest(request : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let id : string = request.id;
            this.socket.add(convert.properties.JSON.encode(request.toJson()));
            return await this.responseStream.firstWhere((response : any) =>  {
                return op(Op.EQUALS,response.id,id);
            });
        } )());
    }

}

export namespace WebSocketServerChannel {
    export type Constructors = 'WebSocketServerChannel';
    export type Interface = Omit<WebSocketServerChannel, Constructors>;
}
@DartClass
@Implements(any)
export class WebSocketServerChannel implements any.Interface {
    socket : io.WebSocket;

    instrumentationService : any;

    constructor(socket : io.WebSocket,instrumentationService : any) {
    }
    @defaultConstructor
    WebSocketServerChannel(socket : io.WebSocket,instrumentationService : any) {
        this.socket = socket;
        this.instrumentationService = instrumentationService;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    close() : void {
        this.socket.close(io.WebSocketStatus.NORMAL_CLOSURE);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    listen(onRequest : (request : any) => void,_namedArguments? : {onError? : Function,onDone? : () => void}) : void {
        let {onError,onDone} = Object.assign({
        }, _namedArguments );
        this.socket.listen((data : any) =>  {
            return this.readRequest(data,onRequest);
        },{
            onError : onError,onDone : onDone});
    }
    readRequest(data : core.DartObject,onRequest : (request : any) => void) : void {
        if (is(data, "string")) {
            this.instrumentationService.logRequest(data);
            ServerPerformanceStatistics.serverChannel.makeCurrentWhile(() =>  {
                let request : any = new bare.createInstance(any,null,data);
                if (op(Op.EQUALS,request,null)) {
                    this.sendResponse(new bare.createInstance(any,null));
                    return;
                }
                onRequest(request);
            });
        }else if (is(data, core.DartList<number>)) {
            this.sendResponse(new bare.createInstance(any,null));
        }else {
            this.sendResponse(new bare.createInstance(any,null));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    sendNotification(notification : any) : void {
        ServerPerformanceStatistics.serverChannel.makeCurrentWhile(() =>  {
            let jsonEncoding : string = convert.properties.JSON.encode(notification.toJson());
            this.socket.add(jsonEncoding);
            this.instrumentationService.logNotification(jsonEncoding);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    sendResponse(response : any) : void {
        ServerPerformanceStatistics.serverChannel.makeCurrentWhile(() =>  {
            let jsonEncoding : string = convert.properties.JSON.encode(response.toJson());
            this.socket.add(jsonEncoding);
            this.instrumentationService.logResponse(jsonEncoding);
        });
    }
}

export class properties {
}
