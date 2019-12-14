/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/base/api_signature.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as convert from "@dart2ts/dart/convert";

export namespace ApiSignature {
    export type Constructors = 'ApiSignature' | 'unversioned';
    export type Interface = Omit<ApiSignature, Constructors>;
}
@DartClass
export class ApiSignature {
    private static __$_VERSION : number;
    static get _VERSION() : number { 
        if (this.__$_VERSION===undefined) {
            this.__$_VERSION = 0;
        }
        return this.__$_VERSION;
    }

    _data : typed_data.ByteData;

    _offset : number;

    constructor() {
    }
    @defaultConstructor
    ApiSignature() {
        this._data = new typed_data.ByteData(4096);
        this._offset = 0;
        this.addInt(ApiSignature._VERSION);
    }
    @namedConstructor
    unversioned() {
        this._data = new typed_data.ByteData(4096);
        this._offset = 0;
    }
    static unversioned : new() => ApiSignature;

    addBool(b : boolean) : void {
        this._makeRoom(1);
        this._data.setUint8(this._offset,b ? 1 : 0);
        this._offset++;
    }
    addBytes(bytes : core.DartList<number>) : void {
        let length : number = bytes.length;
        this._makeRoom(length);
        for(let i : number = 0; i < length; i++){
            this._data.setUint8(this._offset + i,bytes[i]);
        }
        this._offset += length;
    }
    addDouble(d : double) : void {
        this._makeRoom(8);
        this._data.setFloat64(this._offset,d,typed_data.Endianness.LITTLE_ENDIAN);
        this._offset += 8;
    }
    addInt(i : number) : void {
        this._makeRoom(4);
        this._data.setUint32(this._offset,i,typed_data.Endianness.LITTLE_ENDIAN);
        this._offset += 4;
    }
    addString(s : string) : void {
        let bytes : core.DartList<number> = convert.properties.UTF8.encode(s);
        this.addInt(bytes.length);
        this.addBytes(bytes);
    }
    addUint32List(data : typed_data.Uint32List) : void {
        this.addBytes(data.buffer.asUint8List());
    }
    getBytes_forDebug() : core.DartList<number> {
        return new typed_data.Uint8List.view(this._data.buffer,0,this._offset).toList();
    }
    toByteList() : core.DartList<number> {
        return md5.convert(new typed_data.Uint8List.view(this._data.buffer,0,this._offset)).bytes;
    }
    toHex() : string {
        return hex.encode(this.toByteList());
    }
    _makeRoom(spaceNeeded : number) : void {
        let oldLength : number = this._data.lengthInBytes;
        if (this._offset + spaceNeeded > oldLength) {
            let newLength : number = 2 * (this._offset + spaceNeeded);
            let newData : typed_data.ByteData = new typed_data.ByteData(newLength);
            new typed_data.Uint8List.view(newData.buffer).setRange(0,oldLength,new typed_data.Uint8List.view(this._data.buffer));
            this._data = newData;
        }
    }
}

export class properties {
}
