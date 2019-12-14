/** Library asset:datahedgehog_monitor/lib/lib/foundation/serialization.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/typed_data/lib/typed_buffers";
import * as typed_data from "@dart2ts/dart/typed_data";

export namespace WriteBuffer {
    export type Constructors = 'WriteBuffer';
    export type Interface = Omit<WriteBuffer, Constructors>;
}
@DartClass
export class WriteBuffer {
    constructor() {
    }
    @defaultConstructor
    WriteBuffer() {
        this._buffer = lib3.Uint8Buffer();
        this._eightBytes = typed_data.ByteData(8);
        this._eightBytesAsList = this._eightBytes.buffer.asUint8List();
    }
    _buffer : lib3.Uint8Buffer;

    _eightBytes : typed_data.ByteData;

    _eightBytesAsList : typed_data.Uint8List;

    putUint8(byte : number) : void {
        this._buffer.add(byte);
    }
    putUint16(value : number) : void {
        this._eightBytes.setUint16(0,value,Endian.host);
        this._buffer.addAll(this._eightBytesAsList,0,2);
    }
    putUint32(value : number) : void {
        this._eightBytes.setUint32(0,value,Endian.host);
        this._buffer.addAll(this._eightBytesAsList,0,4);
    }
    putInt32(value : number) : void {
        this._eightBytes.setInt32(0,value,Endian.host);
        this._buffer.addAll(this._eightBytesAsList,0,4);
    }
    putInt64(value : number) : void {
        this._eightBytes.setInt64(0,value,Endian.host);
        this._buffer.addAll(this._eightBytesAsList,0,8);
    }
    putFloat64(value : double) : void {
        this._alignTo(8);
        this._eightBytes.setFloat64(0,value,Endian.host);
        this._buffer.addAll(this._eightBytesAsList);
    }
    putUint8List(list : typed_data.Uint8List) : void {
        this._buffer.addAll(list);
    }
    putInt32List(list : typed_data.Int32List) : void {
        this._alignTo(4);
        this._buffer.addAll(list.buffer.asUint8List(list.offsetInBytes,4 * list.length));
    }
    putInt64List(list : typed_data.Int64List) : void {
        this._alignTo(8);
        this._buffer.addAll(list.buffer.asUint8List(list.offsetInBytes,8 * list.length));
    }
    putFloat64List(list : typed_data.Float64List) : void {
        this._alignTo(8);
        this._buffer.addAll(list.buffer.asUint8List(list.offsetInBytes,8 * list.length));
    }
    _alignTo(alignment : number) : void {
        let mod : number = this._buffer.length % alignment;
        if (mod != 0) {
            for(let i : number = 0; i < alignment - mod; i++)this._buffer.add(0);
        }
    }
    done() : typed_data.ByteData {
        let result : typed_data.ByteData = this._buffer.buffer.asByteData(0,this._buffer.lengthInBytes);
        this._buffer = null;
        return result;
    }
}

export namespace ReadBuffer {
    export type Constructors = 'ReadBuffer';
    export type Interface = Omit<ReadBuffer, Constructors>;
}
@DartClass
export class ReadBuffer {
    constructor(data : typed_data.ByteData) {
    }
    @defaultConstructor
    ReadBuffer(data : typed_data.ByteData) {
        this._position = 0;
        this.assert = assert;
        this.data = data;
    }
     : any;

    data : typed_data.ByteData;

    _position : number;

    get hasRemaining() : boolean {
        return this._position < this.data.lengthInBytes;
    }
    getUint8() : number {
        return this.data.getUint8(this._position++);
    }
    getUint16() : number {
        let value : number = this.data.getUint16(this._position,Endian.host);
        this._position += 2;
        return value;
    }
    getUint32() : number {
        let value : number = this.data.getUint32(this._position,Endian.host);
        this._position += 4;
        return value;
    }
    getInt32() : number {
        let value : number = this.data.getInt32(this._position,Endian.host);
        this._position += 4;
        return value;
    }
    getInt64() : number {
        let value : number = this.data.getInt64(this._position,Endian.host);
        this._position += 8;
        return value;
    }
    getFloat64() : double {
        this._alignTo(8);
        let value : double = this.data.getFloat64(this._position,Endian.host);
        this._position += 8;
        return value;
    }
    getUint8List(length : number) : typed_data.Uint8List {
        let list : typed_data.Uint8List = this.data.buffer.asUint8List(this.data.offsetInBytes + this._position,length);
        this._position += length;
        return list;
    }
    getInt32List(length : number) : typed_data.Int32List {
        this._alignTo(4);
        let list : typed_data.Int32List = this.data.buffer.asInt32List(this.data.offsetInBytes + this._position,length);
        this._position += 4 * length;
        return list;
    }
    getInt64List(length : number) : typed_data.Int64List {
        this._alignTo(8);
        let list : typed_data.Int64List = this.data.buffer.asInt64List(this.data.offsetInBytes + this._position,length);
        this._position += 8 * length;
        return list;
    }
    getFloat64List(length : number) : typed_data.Float64List {
        this._alignTo(8);
        let list : typed_data.Float64List = this.data.buffer.asFloat64List(this.data.offsetInBytes + this._position,length);
        this._position += 8 * length;
        return list;
    }
    _alignTo(alignment : number) : void {
        let mod : number = this._position % alignment;
        if (mod != 0) this._position += alignment - mod;
    }
}

export class properties {
}
