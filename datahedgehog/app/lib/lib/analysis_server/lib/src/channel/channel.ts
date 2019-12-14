/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/channel/channel.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as convert from "@dart2ts/dart/convert";

export namespace ChannelChunkSink {
    export type Constructors = convert.ChunkedConversionSink.Constructors | 'ChannelChunkSink';
    export type Interface<S,T> = Omit<ChannelChunkSink<S,T>, Constructors>;
}
@DartClass
export class ChannelChunkSink<S,T> extends convert.ChunkedConversionSink<S> {
    converter : convert.Converter<S,T>;

    sink : core.DartSink<any>;

    closed : boolean;

    constructor(converter : convert.Converter<S,T>,sink : core.DartSink<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ChannelChunkSink(converter : convert.Converter<S,T>,sink : core.DartSink<any>) {
        this.closed = false;
        this.converter = converter;
        this.sink = sink;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    add(chunk : S) : void {
        if (!this.closed) {
            let convertedChunk : T = this.converter.convert(chunk);
            if (convertedChunk != null) {
                this.sink.add(convertedChunk);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    close() : void {
        this.closed = true;
        this.sink.close();
    }
}

export namespace ClientCommunicationChannel {
    export type Constructors = 'ClientCommunicationChannel';
    export type Interface = Omit<ClientCommunicationChannel, Constructors>;
}
@DartClass
export class ClientCommunicationChannel {
    notificationStream : async.DartStream<any>;

    responseStream : async.DartStream<any>;

    @Abstract
    close() : async.Future<any>{ throw 'abstract'}
    @Abstract
    sendRequest(request : any) : async.Future<any>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ClientCommunicationChannel() {
    }
}

export namespace JsonStreamDecoder {
    export type Constructors = convert.Converter.Constructors | 'JsonStreamDecoder';
    export type Interface = Omit<JsonStreamDecoder, Constructors>;
}
@DartClass
export class JsonStreamDecoder extends convert.Converter<string,core.DartMap<any,any>> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    convert(text : string) : core.DartMap<any,any> {
        return convert.properties.JSON.decode(text);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    startChunkedConversion(sink : core.DartSink<core.DartMap<any,any>>) : convert.ChunkedConversionSink<string> {
        return new ChannelChunkSink<string,core.DartMap<any,any>>(this,sink);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    JsonStreamDecoder() {
    }
}

export namespace NotificationConverter {
    export type Constructors = convert.Converter.Constructors | 'NotificationConverter';
    export type Interface = Omit<NotificationConverter, Constructors>;
}
@DartClass
export class NotificationConverter extends convert.Converter<core.DartMap<any,any>,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    convert(json : core.DartMap<any,any>) : any {
        return new bare.createInstance(any,null,json);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    startChunkedConversion(sink : core.DartSink<any>) : convert.ChunkedConversionSink<core.DartMap<any,any>> {
        return new ChannelChunkSink<core.DartMap<any,any>,any>(this,sink);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NotificationConverter() {
    }
}

export namespace ResponseConverter {
    export type Constructors = convert.Converter.Constructors | 'ResponseConverter';
    export type Interface = Omit<ResponseConverter, Constructors>;
}
@DartClass
export class ResponseConverter extends convert.Converter<core.DartMap<any,any>,any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    convert(json : core.DartMap<any,any>) : any {
        return new bare.createInstance(any,null,json);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    startChunkedConversion(sink : core.DartSink<any>) : convert.ChunkedConversionSink<core.DartMap<any,any>> {
        return new ChannelChunkSink<core.DartMap<any,any>,any>(this,sink);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ResponseConverter() {
    }
}

export namespace ServerCommunicationChannel {
    export type Constructors = 'ServerCommunicationChannel';
    export type Interface = Omit<ServerCommunicationChannel, Constructors>;
}
@DartClass
export class ServerCommunicationChannel {
    @Abstract
    close() : void{ throw 'abstract'}
    @Abstract
    listen(onRequest : (request : any) => void,_namedArguments? : {onError? : Function,onDone? : () => void}) : void{ throw 'abstract'}
    @Abstract
    sendNotification(notification : any) : void{ throw 'abstract'}
    @Abstract
    sendResponse(response : any) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ServerCommunicationChannel() {
    }
}

export class properties {
}
