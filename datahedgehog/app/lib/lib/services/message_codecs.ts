/** Library asset:datahedgehog_monitor/lib/lib/services/message_codecs.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./message_codec";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/serialization";

export namespace BinaryCodec {
    export type Constructors = 'BinaryCodec';
    export type Interface = Omit<BinaryCodec, Constructors>;
}
@DartClass
@Implements(lib3.MessageCodec)
export class BinaryCodec implements lib3.MessageCodec.Interface<typed_data.ByteData> {
    constructor() {
    }
    @defaultConstructor
    BinaryCodec() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    decodeMessage(message : typed_data.ByteData) : typed_data.ByteData {
        return message;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    encodeMessage(message : typed_data.ByteData) : typed_data.ByteData {
        return message;
    }
}

export namespace StringCodec {
    export type Constructors = 'StringCodec';
    export type Interface = Omit<StringCodec, Constructors>;
}
@DartClass
@Implements(lib3.MessageCodec)
export class StringCodec implements lib3.MessageCodec.Interface<string> {
    constructor() {
    }
    @defaultConstructor
    StringCodec() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    decodeMessage(message : typed_data.ByteData) : string {
        if (op(Op.EQUALS,message,null)) return null;
        return utf8.decoder.convert(message.buffer.asUint8List(message.offsetInBytes,message.lengthInBytes));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    encodeMessage(message : string) : typed_data.ByteData {
        if (message == null) return null;
        let encoded : typed_data.Uint8List = utf8.encoder.convert(message);
        return encoded.buffer.asByteData();
    }
}

export namespace JSONMessageCodec {
    export type Constructors = 'JSONMessageCodec';
    export type Interface = Omit<JSONMessageCodec, Constructors>;
}
@DartClass
@Implements(lib3.MessageCodec)
export class JSONMessageCodec implements lib3.MessageCodec.Interface<any> {
    constructor() {
    }
    @defaultConstructor
    JSONMessageCodec() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    encodeMessage(message : any) : typed_data.ByteData {
        if (op(Op.EQUALS,message,null)) return null;
        return new StringCodec().encodeMessage(json.encode(message));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    decodeMessage(message : typed_data.ByteData) : any {
        if (op(Op.EQUALS,message,null)) return message;
        return json.decode(new StringCodec().decodeMessage(message));
    }
}

export namespace JSONMethodCodec {
    export type Constructors = 'JSONMethodCodec';
    export type Interface = Omit<JSONMethodCodec, Constructors>;
}
@DartClass
@Implements(lib3.MethodCodec)
export class JSONMethodCodec implements lib3.MethodCodec.Interface {
    constructor() {
    }
    @defaultConstructor
    JSONMethodCodec() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    encodeMethodCall(call : lib3.MethodCall) : typed_data.ByteData {
        return new JSONMessageCodec().encodeMessage(new core.DartMap.literal([
            ['method',call.method],
            ['args',call.arguments]]));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    decodeMethodCall(methodCall : typed_data.ByteData) : lib3.MethodCall {
        let decoded : any = new JSONMessageCodec().decodeMessage(methodCall);
        if (isNot(decoded, core.DartMap<any,any>)) throw core.FormatException(`Expected method call Map, got ${decoded}`);
        let method : any = decoded.get('method');
        let arguments : any = decoded.get('args');
        if (is(method, "string")) return lib3.MethodCall(method,arguments);
        throw core.FormatException(`Invalid method call: ${decoded}`);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    decodeEnvelope(envelope : typed_data.ByteData) : any {
        let decoded : any = new JSONMessageCodec().decodeMessage(envelope);
        if (isNot(decoded, core.DartList<any>)) throw core.FormatException(`Expected envelope List, got ${decoded}`);
        if (decoded.length == 1) return decoded[0];
        if (decoded.length == 3 && is(decoded[0], "string") && (op(Op.EQUALS,decoded[1],null) || is(decoded[1], "string"))) throw lib3.PlatformException({
            code : decoded[0],message : decoded[1],details : decoded[2]});
        throw core.FormatException(`Invalid envelope: ${decoded}`);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    encodeSuccessEnvelope(result : any) : typed_data.ByteData {
        return new JSONMessageCodec().encodeMessage(new core.DartList.literal<any>(result));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    encodeErrorEnvelope(_namedArguments? : {code? : string,message? : string,details? : any}) : typed_data.ByteData {
        let {code,message,details} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (code != null); */;
        return new JSONMessageCodec().encodeMessage(new core.DartList.literal<any>(code,message,details));
    }
}

export namespace StandardMessageCodec {
    export type Constructors = 'StandardMessageCodec';
    export type Interface = Omit<StandardMessageCodec, Constructors>;
}
@DartClass
@Implements(lib3.MessageCodec)
export class StandardMessageCodec implements lib3.MessageCodec.Interface<any> {
    constructor() {
    }
    @defaultConstructor
    StandardMessageCodec() {
    }
    private static __$_valueNull : number;
    static get _valueNull() : number { 
        if (this.__$_valueNull===undefined) {
            this.__$_valueNull = 0;
        }
        return this.__$_valueNull;
    }

    private static __$_valueTrue : number;
    static get _valueTrue() : number { 
        if (this.__$_valueTrue===undefined) {
            this.__$_valueTrue = 1;
        }
        return this.__$_valueTrue;
    }

    private static __$_valueFalse : number;
    static get _valueFalse() : number { 
        if (this.__$_valueFalse===undefined) {
            this.__$_valueFalse = 2;
        }
        return this.__$_valueFalse;
    }

    private static __$_valueInt32 : number;
    static get _valueInt32() : number { 
        if (this.__$_valueInt32===undefined) {
            this.__$_valueInt32 = 3;
        }
        return this.__$_valueInt32;
    }

    private static __$_valueInt64 : number;
    static get _valueInt64() : number { 
        if (this.__$_valueInt64===undefined) {
            this.__$_valueInt64 = 4;
        }
        return this.__$_valueInt64;
    }

    private static __$_valueLargeInt : number;
    static get _valueLargeInt() : number { 
        if (this.__$_valueLargeInt===undefined) {
            this.__$_valueLargeInt = 5;
        }
        return this.__$_valueLargeInt;
    }

    private static __$_valueFloat64 : number;
    static get _valueFloat64() : number { 
        if (this.__$_valueFloat64===undefined) {
            this.__$_valueFloat64 = 6;
        }
        return this.__$_valueFloat64;
    }

    private static __$_valueString : number;
    static get _valueString() : number { 
        if (this.__$_valueString===undefined) {
            this.__$_valueString = 7;
        }
        return this.__$_valueString;
    }

    private static __$_valueUint8List : number;
    static get _valueUint8List() : number { 
        if (this.__$_valueUint8List===undefined) {
            this.__$_valueUint8List = 8;
        }
        return this.__$_valueUint8List;
    }

    private static __$_valueInt32List : number;
    static get _valueInt32List() : number { 
        if (this.__$_valueInt32List===undefined) {
            this.__$_valueInt32List = 9;
        }
        return this.__$_valueInt32List;
    }

    private static __$_valueInt64List : number;
    static get _valueInt64List() : number { 
        if (this.__$_valueInt64List===undefined) {
            this.__$_valueInt64List = 10;
        }
        return this.__$_valueInt64List;
    }

    private static __$_valueFloat64List : number;
    static get _valueFloat64List() : number { 
        if (this.__$_valueFloat64List===undefined) {
            this.__$_valueFloat64List = 11;
        }
        return this.__$_valueFloat64List;
    }

    private static __$_valueList : number;
    static get _valueList() : number { 
        if (this.__$_valueList===undefined) {
            this.__$_valueList = 12;
        }
        return this.__$_valueList;
    }

    private static __$_valueMap : number;
    static get _valueMap() : number { 
        if (this.__$_valueMap===undefined) {
            this.__$_valueMap = 13;
        }
        return this.__$_valueMap;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    encodeMessage(message : any) : typed_data.ByteData {
        if (op(Op.EQUALS,message,null)) return null;
        let buffer : lib5.WriteBuffer = lib5.WriteBuffer();
        this.writeValue(buffer,message);
        return buffer.done();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    decodeMessage(message : typed_data.ByteData) : any {
        if (op(Op.EQUALS,message,null)) return null;
        let buffer : lib5.ReadBuffer = lib5.ReadBuffer(message);
        let result : any = this.readValue(buffer);
        if (buffer.hasRemaining) throw new core.FormatException('Message corrupted');
        return result;
    }
    writeValue(buffer : lib5.WriteBuffer,value : any) : void {
        if (op(Op.EQUALS,value,null)) {
            buffer.putUint8(StandardMessageCodec._valueNull);
        }else if (is(value, "boolean")) {
            buffer.putUint8(value ? StandardMessageCodec._valueTrue : StandardMessageCodec._valueFalse);
        }else if (is(value, "number")) {
            if (-2147483647 - 1 <= value && value <= 2147483647) {
                buffer.putUint8(StandardMessageCodec._valueInt32);
                buffer.putInt32(value);
            }else {
                buffer.putUint8(StandardMessageCodec._valueInt64);
                buffer.putInt64(value);
            }
        }else if (is(value, "double")) {
            buffer.putUint8(StandardMessageCodec._valueFloat64);
            buffer.putFloat64(value);
        }else if (is(value, "string")) {
            buffer.putUint8(StandardMessageCodec._valueString);
            let bytes : core.DartList<number> = utf8.encoder.convert(value);
            this.writeSize(buffer,bytes.length);
            buffer.putUint8List(bytes);
        }else if (is(value, typed_data.Uint8List)) {
            buffer.putUint8(StandardMessageCodec._valueUint8List);
            this.writeSize(buffer,value.length);
            buffer.putUint8List(value);
        }else if (is(value, typed_data.Int32List)) {
            buffer.putUint8(StandardMessageCodec._valueInt32List);
            this.writeSize(buffer,value.length);
            buffer.putInt32List(value);
        }else if (is(value, typed_data.Int64List)) {
            buffer.putUint8(StandardMessageCodec._valueInt64List);
            this.writeSize(buffer,value.length);
            buffer.putInt64List(value);
        }else if (is(value, typed_data.Float64List)) {
            buffer.putUint8(StandardMessageCodec._valueFloat64List);
            this.writeSize(buffer,value.length);
            buffer.putFloat64List(value);
        }else if (is(value, core.DartList<any>)) {
            buffer.putUint8(StandardMessageCodec._valueList);
            this.writeSize(buffer,value.length);
            for(let item of value) {
                this.writeValue(buffer,item);
            }
        }else if (is(value, core.DartMap<any,any>)) {
            buffer.putUint8(StandardMessageCodec._valueMap);
            this.writeSize(buffer,value.length);
            value.forEach((key : any,value : any) =>  {
                this.writeValue(buffer,key);
                this.writeValue(buffer,value);
            });
        }else {
            throw core.ArgumentError.value(value);
        }
    }
    readValue(buffer : lib5.ReadBuffer) : any {
        if (!buffer.hasRemaining) throw new core.FormatException('Message corrupted');
        let type : number = buffer.getUint8();
        return this.readValueOfType(type,buffer);
    }
    readValueOfType(type : number,buffer : lib5.ReadBuffer) : any {
        switch (type) {
            case StandardMessageCodec._valueNull:
                return null;
            case StandardMessageCodec._valueTrue:
                return true;
            case StandardMessageCodec._valueFalse:
                return false;
            case StandardMessageCodec._valueInt32:
                return buffer.getInt32();
            case StandardMessageCodec._valueInt64:
                return buffer.getInt64();
            case StandardMessageCodec._valueFloat64:
                return buffer.getFloat64();
            case StandardMessageCodec._valueLargeInt:
            case StandardMessageCodec._valueString:
                let length : number = this.readSize(buffer);
                return utf8.decoder.convert(buffer.getUint8List(length));
            case StandardMessageCodec._valueUint8List:
                let length : number = this.readSize(buffer);
                return buffer.getUint8List(length);
            case StandardMessageCodec._valueInt32List:
                let length : number = this.readSize(buffer);
                return buffer.getInt32List(length);
            case StandardMessageCodec._valueInt64List:
                let length : number = this.readSize(buffer);
                return buffer.getInt64List(length);
            case StandardMessageCodec._valueFloat64List:
                let length : number = this.readSize(buffer);
                return buffer.getFloat64List(length);
            case StandardMessageCodec._valueList:
                let length : number = this.readSize(buffer);
                let result : any = core.DartList(length);
                for(let i : number = 0; i < length; i++)op(Op.INDEX_ASSIGN,result,i,this.readValue(buffer));
                return result;
            case StandardMessageCodec._valueMap:
                let length : number = this.readSize(buffer);
                let result : any = new core.DartMap.literal([
                ]);
                for(let i : number = 0; i < length; i++)result.set(this.readValue(buffer),this.readValue(buffer));
                return result;
            default:
                throw new core.FormatException('Message corrupted');
        }
    }
    writeSize(buffer : lib5.WriteBuffer,value : number) : void {
        /* TODO (AssertStatementImpl) : assert (0 <= value && value <= 0xffffffff); */;
        if (value < 254) {
            buffer.putUint8(value);
        }else if (value <= 65535) {
            buffer.putUint8(254);
            buffer.putUint16(value);
        }else {
            buffer.putUint8(255);
            buffer.putUint32(value);
        }
    }
    readSize(buffer : lib5.ReadBuffer) : number {
        let value : number = buffer.getUint8();
        switch (value) {
            case 254:
                return buffer.getUint16();
            case 255:
                return buffer.getUint32();
            default:
                return value;
        }
    }
}

export namespace StandardMethodCodec {
    export type Constructors = 'StandardMethodCodec';
    export type Interface = Omit<StandardMethodCodec, Constructors>;
}
@DartClass
@Implements(lib3.MethodCodec)
export class StandardMethodCodec implements lib3.MethodCodec.Interface {
    constructor(messageCodec? : StandardMessageCodec) {
    }
    @defaultConstructor
    StandardMethodCodec(messageCodec? : StandardMessageCodec) {
        messageCodec = messageCodec || new StandardMessageCodec();
        this.messageCodec = messageCodec;
    }
    messageCodec : StandardMessageCodec;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    encodeMethodCall(call : lib3.MethodCall) : typed_data.ByteData {
        let buffer : lib5.WriteBuffer = lib5.WriteBuffer();
        this.messageCodec.writeValue(buffer,call.method);
        this.messageCodec.writeValue(buffer,call.arguments);
        return buffer.done();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    decodeMethodCall(methodCall : typed_data.ByteData) : lib3.MethodCall {
        let buffer : lib5.ReadBuffer = lib5.ReadBuffer(methodCall);
        let method : any = this.messageCodec.readValue(buffer);
        let arguments : any = this.messageCodec.readValue(buffer);
        if (is(method, "string") && !buffer.hasRemaining) return lib3.MethodCall(method,arguments);else throw new core.FormatException('Invalid method call');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    encodeSuccessEnvelope(result : any) : typed_data.ByteData {
        let buffer : lib5.WriteBuffer = lib5.WriteBuffer();
        buffer.putUint8(0);
        this.messageCodec.writeValue(buffer,result);
        return buffer.done();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    encodeErrorEnvelope(_namedArguments? : {code? : string,message? : string,details? : any}) : typed_data.ByteData {
        let {code,message,details} = Object.assign({
        }, _namedArguments );
        let buffer : lib5.WriteBuffer = lib5.WriteBuffer();
        buffer.putUint8(1);
        this.messageCodec.writeValue(buffer,code);
        this.messageCodec.writeValue(buffer,message);
        this.messageCodec.writeValue(buffer,details);
        return buffer.done();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    decodeEnvelope(envelope : typed_data.ByteData) : any {
        if (envelope.lengthInBytes == 0) throw new core.FormatException('Expected envelope, got nothing');
        let buffer : lib5.ReadBuffer = lib5.ReadBuffer(envelope);
        if (buffer.getUint8() == 0) return this.messageCodec.readValue(buffer);
        let errorCode : any = this.messageCodec.readValue(buffer);
        let errorMessage : any = this.messageCodec.readValue(buffer);
        let errorDetails : any = this.messageCodec.readValue(buffer);
        if (is(errorCode, "string") && (op(Op.EQUALS,errorMessage,null) || is(errorMessage, "string")) && !buffer.hasRemaining) throw lib3.PlatformException({
            code : errorCode,message : errorMessage,details : errorDetails});else throw new core.FormatException('Invalid envelope');
    }
}

export class properties {
}
