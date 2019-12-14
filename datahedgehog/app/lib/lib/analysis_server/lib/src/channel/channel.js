"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@dart2ts/dart/utils");
var convert = require("@dart2ts/dart/convert");
var ChannelChunkSink = /** @class */ (function (_super) {
    __extends(ChannelChunkSink, _super);
    function ChannelChunkSink(converter, sink) {
        // @ts-ignore
        return _super.call(this) || this;
    }
    ChannelChunkSink.prototype.ChannelChunkSink = function (converter, sink) {
        this.closed = false;
        this.converter = converter;
        this.sink = sink;
    };
    ChannelChunkSink.prototype.add = function (chunk) {
        if (!this.closed) {
            var convertedChunk = this.converter.convert(chunk);
            if (convertedChunk != null) {
                this.sink.add(convertedChunk);
            }
        }
    };
    ChannelChunkSink.prototype.close = function () {
        this.closed = true;
        this.sink.close();
    };
    __decorate([
        utils_1.defaultConstructor
    ], ChannelChunkSink.prototype, "ChannelChunkSink", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ChannelChunkSink.prototype, "add", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ChannelChunkSink.prototype, "close", null);
    ChannelChunkSink = __decorate([
        utils_1.DartClass
    ], ChannelChunkSink);
    return ChannelChunkSink;
}(convert.ChunkedConversionSink));
exports.ChannelChunkSink = ChannelChunkSink;
var ClientCommunicationChannel = /** @class */ (function () {
    function ClientCommunicationChannel() {
    }
    ClientCommunicationChannel.prototype.close = function () { throw 'abstract'; };
    ClientCommunicationChannel.prototype.sendRequest = function (request) { throw 'abstract'; };
    ClientCommunicationChannel.prototype.ClientCommunicationChannel = function () {
    };
    __decorate([
        utils_1.Abstract
    ], ClientCommunicationChannel.prototype, "close", null);
    __decorate([
        utils_1.Abstract
    ], ClientCommunicationChannel.prototype, "sendRequest", null);
    __decorate([
        utils_1.defaultConstructor
    ], ClientCommunicationChannel.prototype, "ClientCommunicationChannel", null);
    ClientCommunicationChannel = __decorate([
        utils_1.DartClass
    ], ClientCommunicationChannel);
    return ClientCommunicationChannel;
}());
exports.ClientCommunicationChannel = ClientCommunicationChannel;
var JsonStreamDecoder = /** @class */ (function (_super) {
    __extends(JsonStreamDecoder, _super);
    function JsonStreamDecoder() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    JsonStreamDecoder.prototype.convert = function (text) {
        return convert.properties.JSON.decode(text);
    };
    JsonStreamDecoder.prototype.startChunkedConversion = function (sink) {
        return new ChannelChunkSink(this, sink);
    };
    JsonStreamDecoder.prototype.JsonStreamDecoder = function () {
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], JsonStreamDecoder.prototype, "convert", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], JsonStreamDecoder.prototype, "startChunkedConversion", null);
    __decorate([
        utils_1.defaultConstructor
    ], JsonStreamDecoder.prototype, "JsonStreamDecoder", null);
    JsonStreamDecoder = __decorate([
        utils_1.DartClass
    ], JsonStreamDecoder);
    return JsonStreamDecoder;
}(convert.Converter));
exports.JsonStreamDecoder = JsonStreamDecoder;
var NotificationConverter = /** @class */ (function (_super) {
    __extends(NotificationConverter, _super);
    function NotificationConverter() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    NotificationConverter.prototype.convert = function (json) {
        return new bare.createInstance(any, null, json);
    };
    NotificationConverter.prototype.startChunkedConversion = function (sink) {
        return new ChannelChunkSink(this, sink);
    };
    NotificationConverter.prototype.NotificationConverter = function () {
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], NotificationConverter.prototype, "convert", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], NotificationConverter.prototype, "startChunkedConversion", null);
    __decorate([
        utils_1.defaultConstructor
    ], NotificationConverter.prototype, "NotificationConverter", null);
    NotificationConverter = __decorate([
        utils_1.DartClass
    ], NotificationConverter);
    return NotificationConverter;
}(convert.Converter));
exports.NotificationConverter = NotificationConverter;
var ResponseConverter = /** @class */ (function (_super) {
    __extends(ResponseConverter, _super);
    function ResponseConverter() {
        // @ts-ignore
        return _super.call(this) || this;
    }
    ResponseConverter.prototype.convert = function (json) {
        return new bare.createInstance(any, null, json);
    };
    ResponseConverter.prototype.startChunkedConversion = function (sink) {
        return new ChannelChunkSink(this, sink);
    };
    ResponseConverter.prototype.ResponseConverter = function () {
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ResponseConverter.prototype, "convert", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ResponseConverter.prototype, "startChunkedConversion", null);
    __decorate([
        utils_1.defaultConstructor
    ], ResponseConverter.prototype, "ResponseConverter", null);
    ResponseConverter = __decorate([
        utils_1.DartClass
    ], ResponseConverter);
    return ResponseConverter;
}(convert.Converter));
exports.ResponseConverter = ResponseConverter;
var ServerCommunicationChannel = /** @class */ (function () {
    function ServerCommunicationChannel() {
    }
    ServerCommunicationChannel.prototype.close = function () { throw 'abstract'; };
    ServerCommunicationChannel.prototype.listen = function (onRequest, _namedArguments) { throw 'abstract'; };
    ServerCommunicationChannel.prototype.sendNotification = function (notification) { throw 'abstract'; };
    ServerCommunicationChannel.prototype.sendResponse = function (response) { throw 'abstract'; };
    ServerCommunicationChannel.prototype.ServerCommunicationChannel = function () {
    };
    __decorate([
        utils_1.Abstract
    ], ServerCommunicationChannel.prototype, "close", null);
    __decorate([
        utils_1.Abstract
    ], ServerCommunicationChannel.prototype, "listen", null);
    __decorate([
        utils_1.Abstract
    ], ServerCommunicationChannel.prototype, "sendNotification", null);
    __decorate([
        utils_1.Abstract
    ], ServerCommunicationChannel.prototype, "sendResponse", null);
    __decorate([
        utils_1.defaultConstructor
    ], ServerCommunicationChannel.prototype, "ServerCommunicationChannel", null);
    ServerCommunicationChannel = __decorate([
        utils_1.DartClass
    ], ServerCommunicationChannel);
    return ServerCommunicationChannel;
}());
exports.ServerCommunicationChannel = ServerCommunicationChannel;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=channel.js.map