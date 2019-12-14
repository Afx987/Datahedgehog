/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/base/flat_buffers.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as math from "@dart2ts/dart/math";
import * as convert from "@dart2ts/dart/convert";
import * as collection from "@dart2ts/dart/core";

export namespace BufferContext {
    export type Constructors = '_';
    export type Interface = Omit<BufferContext, Constructors>;
}
@DartClass
export class BufferContext {
    _buffer : typed_data.ByteData;

    @namedFactory
    static $fromBytes(byteList : core.DartList<number>) : BufferContext {
        let uint8List : typed_data.Uint8List = BufferContext._asUint8List(byteList);
        let buf : typed_data.ByteData = new typed_data.ByteData.view(uint8List.buffer,uint8List.offsetInBytes);
        return new BufferContext._(buf);
    }
    static fromBytes : new(byteList : core.DartList<number>) => BufferContext;

    @namedConstructor
    _(_buffer : typed_data.ByteData) {
        this._buffer = _buffer;
    }
    static _ : new(_buffer : typed_data.ByteData) => BufferContext;

    derefObject(offset : number) : number {
        return offset + this._getUint32(offset);
    }
    _asUint8LIst(offset : number,length : number) : typed_data.Uint8List {
        return this._buffer.buffer.asUint8List(this._buffer.offsetInBytes + offset,length);
    }
    _getFloat64(offset : number) : double {
        return this._buffer.getFloat64(offset,typed_data.Endianness.LITTLE_ENDIAN);
    }
    _getInt32(offset : number) : number {
        return this._buffer.getInt32(offset,typed_data.Endianness.LITTLE_ENDIAN);
    }
    _getInt8(offset : number) : number {
        return this._buffer.getInt8(offset);
    }
    _getUint16(offset : number) : number {
        return this._buffer.getUint16(offset,typed_data.Endianness.LITTLE_ENDIAN);
    }
    _getUint32(offset : number) : number {
        return this._buffer.getUint32(offset,typed_data.Endianness.LITTLE_ENDIAN);
    }
    _getUint8(offset : number) : number {
        return this._buffer.getUint8(offset);
    }
    static _asUint8List(byteList : core.DartList<number>) : typed_data.Uint8List {
        if (is(byteList, typed_data.Uint8List)) {
            return byteList;
        }else {
            return new typed_data.Uint8List.fromList(byteList);
        }
    }
}

export namespace Builder {
    export type Constructors = 'Builder';
    export type Interface = Omit<Builder, Constructors>;
}
@DartClass
export class Builder {
    initialSize : number;

    _vTables : core.DartList<_VTable>;

    _buf : typed_data.ByteData;

    _maxAlign : number;

    _tail : number;

    _currentTableEndTail : number;

    _currentVTable : _VTable;

    _strings : core.DartMap<string,Offset<string>>;

    constructor(_namedArguments? : {initialSize? : number}) {
    }
    @defaultConstructor
    Builder(_namedArguments? : {initialSize? : number}) {
        let {initialSize} = Object.assign({
            "initialSize" : 1024}, _namedArguments );
        this._vTables = new core.DartList.literal<_VTable>();
        this._strings = new core.DartMap.literal([
        ]);
        this.initialSize = initialSize;
        this.reset();
    }
    addBool(field : number,value : boolean,def? : boolean) : void {
        this._ensureCurrentVTable();
        if (value != null && value != def) {
            let size : number = 1;
            this._prepare(size,1);
            this._trackField(field);
            this._buf.setInt8(this._buf.lengthInBytes - this._tail,value ? 1 : 0);
        }
    }
    addInt32(field : number,value : number,def? : number) : void {
        this._ensureCurrentVTable();
        if (value != null && value != def) {
            let size : number = 4;
            this._prepare(size,1);
            this._trackField(field);
            Builder._setInt32AtTail(this._buf,this._tail,value);
        }
    }
    addInt8(field : number,value : number,def? : number) : void {
        this._ensureCurrentVTable();
        if (value != null && value != def) {
            let size : number = 1;
            this._prepare(size,1);
            this._trackField(field);
            this._buf.setInt8(this._buf.lengthInBytes - this._tail,value);
        }
    }
    addOffset(field : number,offset : Offset<any>) : void {
        this._ensureCurrentVTable();
        if (offset != null) {
            this._prepare(4,1);
            this._trackField(field);
            Builder._setUint32AtTail(this._buf,this._tail,this._tail - offset._tail);
        }
    }
    addUint32(field : number,value : number,def? : number) : void {
        this._ensureCurrentVTable();
        if (value != null && value != def) {
            let size : number = 4;
            this._prepare(size,1);
            this._trackField(field);
            Builder._setUint32AtTail(this._buf,this._tail,value);
        }
    }
    addUint8(field : number,value : number,def? : number) : void {
        this._ensureCurrentVTable();
        if (value != null && value != def) {
            let size : number = 1;
            this._prepare(size,1);
            this._trackField(field);
            Builder._setUint8AtTail(this._buf,this._tail,value);
        }
    }
    endTable() : Offset<any> {
        if (op(Op.EQUALS,this._currentVTable,null)) {
            throw new core.StateError('Start a table before ending it.');
        }
        this._prepare(4,1);
        let tableTail : number = this._tail;
        this._currentVTable.tableSize = tableTail - this._currentTableEndTail;
        let vTableTail : number;
        {
            this._currentVTable.computeFieldOffsets(tableTail);
            for(let i : number = 0; i < this._vTables.length; i++){
                let vTable : _VTable = this._vTables[i];
                if (this._currentVTable.canUseExistingVTable(vTable)) {
                    vTableTail = vTable.tail;
                    break;
                }
            }
            if (vTableTail == null) {
                this._prepare(2,this._currentVTable.numOfUint16);
                vTableTail = this._tail;
                this._currentVTable.tail = vTableTail;
                this._currentVTable.output(this._buf,this._buf.lengthInBytes - this._tail);
                this._vTables.add(this._currentVTable);
            }
        }
        Builder._setInt32AtTail(this._buf,tableTail,vTableTail - tableTail);
        this._currentVTable = null;
        return new Offset<any>(tableTail);
    }
    finish(offset : Offset<any>,fileIdentifier? : string) : typed_data.Uint8List {
        this._prepare(math.max(4,this._maxAlign),fileIdentifier == null ? 1 : 2);
        let alignedTail : number = this._tail + ((-this._tail) % this._maxAlign);
        Builder._setUint32AtTail(this._buf,alignedTail,alignedTail - offset._tail);
        if (fileIdentifier != null) {
            for(let i : number = 0; i < 4; i++){
                Builder._setUint8AtTail(this._buf,alignedTail - 4 - i,new core.DartString(fileIdentifier).codeUnitAt(i));
            }
        }
        return this._buf.buffer.asUint8List(this._buf.lengthInBytes - alignedTail);
    }
    lowFinish() : typed_data.Uint8List {
        let alignedTail : number = this._tail + ((-this._tail) % this._maxAlign);
        return this._buf.buffer.asUint8List(this._buf.lengthInBytes - alignedTail);
    }
    lowReset() : void {
        this._buf = new typed_data.ByteData(this.initialSize);
        this._maxAlign = 1;
        this._tail = 0;
    }
    lowWriteUint32(value : number) : void {
        this._prepare(4,1);
        Builder._setUint32AtTail(this._buf,this._tail,value);
    }
    lowWriteUint8(value : number) : void {
        this._prepare(1,1);
        this._buf.setUint8(this._buf.lengthInBytes - this._tail,value);
    }
    reset() : void {
        this._buf = new typed_data.ByteData(this.initialSize);
        this._maxAlign = 1;
        this._tail = 0;
        this._currentVTable = null;
    }
    startTable() : void {
        if (this._currentVTable != null) {
            throw new core.StateError('Inline tables are not supported.');
        }
        this._currentVTable = new _VTable();
        this._currentTableEndTail = this._tail;
    }
    writeList(values : core.DartList<Offset<any>>) : Offset<any> {
        this._ensureNoVTable();
        this._prepare(4,1 + values.length);
        let result : Offset<any> = new Offset<any>(this._tail);
        let tail : number = this._tail;
        Builder._setUint32AtTail(this._buf,tail,values.length);
        tail -= 4;
        for(let value of values) {
            Builder._setUint32AtTail(this._buf,tail,tail - value._tail);
            tail -= 4;
        }
        return result;
    }
    writeListBool(values : core.DartList<boolean>) : Offset<any> {
        let bitLength : number = values.length;
        let padding : number = (-bitLength) % 8;
        let byteLength : number = op(Op.QUOTIENT,(bitLength + padding),8);
        let bytes : typed_data.Uint8List = new typed_data.Uint8List(byteLength + 1);
        let byteIndex : number = 0;
        let byte : number = 0;
        let mask : number = 1;
        for(let bitIndex : number = 0; bitIndex < bitLength; bitIndex++){
            if (bitIndex != 0 && (bitIndex % 8 == 0)) {
                op(Op.INDEX_ASSIGN,bytes,byteIndex++,byte);
                byte = 0;
                mask = 1;
            }
            if (values[bitIndex]) {
                byte |= mask;
            }
            mask <<= 1;
        }
        op(Op.INDEX_ASSIGN,bytes,byteIndex,byte);
        op(Op.INDEX_ASSIGN,bytes,byteLength,padding);
        return this.writeListUint8(bytes);
    }
    writeListFloat64(values : core.DartList<double>) : Offset<any> {
        this._ensureNoVTable();
        this._prepare(8,1 + values.length);
        let result : Offset<any> = new Offset<any>(this._tail);
        let tail : number = this._tail;
        Builder._setUint32AtTail(this._buf,tail,values.length);
        tail -= 8;
        for(let value of values) {
            Builder._setFloat64AtTail(this._buf,tail,value);
            tail -= 8;
        }
        return result;
    }
    writeListInt32(values : core.DartList<number>) : Offset<any> {
        this._ensureNoVTable();
        this._prepare(4,1 + values.length);
        let result : Offset<any> = new Offset<any>(this._tail);
        let tail : number = this._tail;
        Builder._setUint32AtTail(this._buf,tail,values.length);
        tail -= 4;
        for(let value of values) {
            Builder._setInt32AtTail(this._buf,tail,value);
            tail -= 4;
        }
        return result;
    }
    writeListUint32(values : core.DartList<number>) : Offset<any> {
        this._ensureNoVTable();
        this._prepare(4,1 + values.length);
        let result : Offset<any> = new Offset<any>(this._tail);
        let tail : number = this._tail;
        Builder._setUint32AtTail(this._buf,tail,values.length);
        tail -= 4;
        for(let value of values) {
            Builder._setUint32AtTail(this._buf,tail,value);
            tail -= 4;
        }
        return result;
    }
    writeListUint8(values : core.DartList<number>) : Offset<any> {
        this._ensureNoVTable();
        this._prepare(4,1,{
            additionalBytes : values.length});
        let result : Offset<any> = new Offset<any>(this._tail);
        let tail : number = this._tail;
        Builder._setUint32AtTail(this._buf,tail,values.length);
        tail -= 4;
        for(let value of values) {
            Builder._setUint8AtTail(this._buf,tail,value);
            tail -= 1;
        }
        return result;
    }
    writeString(value : string,def? : string) : Offset<string> {
        this._ensureNoVTable();
        if (value != def) {
            return this._strings.putIfAbsent(value,() =>  {
                let bytes : core.DartList<number> = convert.properties.UTF8.encode(value);
                let length : number = bytes.length;
                this._prepare(4,1,{
                    additionalBytes : length});
                let result : Offset<string> = new Offset<any>(this._tail);
                Builder._setUint32AtTail(this._buf,this._tail,length);
                let offset : number = this._buf.lengthInBytes - this._tail + 4;
                for(let i : number = 0; i < length; i++){
                    this._buf.setUint8(offset++,bytes[i]);
                }
                return result;
            });
        }
        return null;
    }
    _ensureCurrentVTable() : void {
        if (op(Op.EQUALS,this._currentVTable,null)) {
            throw new core.StateError('Start a table before adding values.');
        }
    }
    _ensureNoVTable() : void {
        if (this._currentVTable != null) {
            throw new core.StateError('Cannot write a non-scalar value while writing a table.');
        }
    }
    _prepare(size : number,count : number,_namedArguments? : {additionalBytes? : number}) : void {
        let {additionalBytes} = Object.assign({
            "additionalBytes" : 0}, _namedArguments );
        if (this._maxAlign < size) {
            this._maxAlign = size;
        }
        let dataSize : number = size * count + additionalBytes;
        let alignDelta : number = (-(this._tail + dataSize)) % size;
        let bufSize : number = alignDelta + dataSize;
        {
            let oldCapacity : number = this._buf.lengthInBytes;
            if (this._tail + bufSize > oldCapacity) {
                let desiredNewCapacity : number = (oldCapacity + bufSize) * 2;
                let deltaCapacity : number = desiredNewCapacity - oldCapacity;
                deltaCapacity += (-deltaCapacity) % this._maxAlign;
                let newCapacity : number = oldCapacity + deltaCapacity;
                let newBuf : typed_data.ByteData = new typed_data.ByteData(newCapacity);
                newBuf.buffer.asUint8List().setAll(deltaCapacity,this._buf.buffer.asUint8List());
                this._buf = newBuf;
            }
        }
        this._tail += bufSize;
    }
    _trackField(field : number) : void {
        this._currentVTable.addField(field,this._tail);
    }
    static _setFloat64AtTail(_buf : typed_data.ByteData,tail : number,x : double) : void {
        _buf.setFloat64(_buf.lengthInBytes - tail,x,typed_data.Endianness.LITTLE_ENDIAN);
    }
    static _setInt32AtTail(_buf : typed_data.ByteData,tail : number,x : number) : void {
        _buf.setInt32(_buf.lengthInBytes - tail,x,typed_data.Endianness.LITTLE_ENDIAN);
    }
    static _setUint32AtTail(_buf : typed_data.ByteData,tail : number,x : number) : void {
        _buf.setUint32(_buf.lengthInBytes - tail,x,typed_data.Endianness.LITTLE_ENDIAN);
    }
    static _setUint8AtTail(_buf : typed_data.ByteData,tail : number,x : number) : void {
        _buf.setUint8(_buf.lengthInBytes - tail,x);
    }
}

export namespace Offset {
    export type Constructors = 'Offset';
    export type Interface<T> = Omit<Offset<T>, Constructors>;
}
@DartClass
export class Offset<T> {
    _tail : number;

    constructor(_tail : number) {
    }
    @defaultConstructor
    Offset(_tail : number) {
        this._tail = _tail;
    }
}

export namespace Reader {
    export type Constructors = 'Reader';
    export type Interface<T> = Omit<Reader<T>, Constructors>;
}
@DartClass
export class Reader<T> {
    constructor() {
    }
    @defaultConstructor
    Reader() {
    }
    @AbstractProperty
    get size() : number{ throw 'abstract'}
    @Abstract
    read(bc : BufferContext,offset : number) : T{ throw 'abstract'}
    vTableGet(object : BufferContext,offset : number,field : number,defaultValue? : T) : T {
        let vTableSOffset : number = object._getInt32(offset);
        let vTableOffset : number = offset - vTableSOffset;
        let vTableSize : number = object._getUint16(vTableOffset);
        let vTableFieldOffset : number = (1 + 1 + field) * 2;
        if (vTableFieldOffset < vTableSize) {
            let fieldOffsetInObject : number = object._getUint16(vTableOffset + vTableFieldOffset);
            if (fieldOffsetInObject != 0) {
                return this.read(object,offset + fieldOffsetInObject);
            }
        }
        return defaultValue;
    }
}

export namespace _FbBoolList {
    export type Constructors = '_FbBoolList';
    export type Interface = Omit<_FbBoolList, Constructors>;
}
@DartClass
@Implements(core.DartList)
@With(core.DartListMixin)
export class _FbBoolList extends core.DartObject implements core.DartList.Interface<boolean>,core.DartListMixin.Interface<boolean> {
    @Abstract
    elementAt(index : number) : boolean {
        throw 'from mixin';
    }
    @Abstract
    forEach(action : <E>(element : E) => void) : void {
        throw 'from mixin';
    }
    @Abstract
    contains(element : core.DartObject) : boolean {
        throw 'from mixin';
    }
    @Abstract
    every(test : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    any(test : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    firstWhere(test : <E>(element : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : boolean {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    lastWhere(test : <E>(element : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : boolean {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    singleWhere(test : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    join(separator? : string) : string {
        separator = separator || "";
        throw 'from mixin';
    }
    @Abstract
    where(test : <E>(element : E) => boolean) : core.DartIterable<boolean> {
        throw 'from mixin';
    }
    @Abstract
    map(f : <T,E>(element : E) => T) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    expand(f : <T,E>(element : E) => core.DartIterable<T>) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    reduce(combine : <E>(previousValue : E,element : E) => E) : boolean {
        throw 'from mixin';
    }
    @Abstract
    fold(initialValue : T,combine : <T,E>(previousValue : T,element : E) => T) : T {
        throw 'from mixin';
    }
    @Abstract
    skip(count : number) : core.DartIterable<boolean> {
        throw 'from mixin';
    }
    @Abstract
    skipWhile(test : <E>(element : E) => boolean) : core.DartIterable<boolean> {
        throw 'from mixin';
    }
    @Abstract
    take(count : number) : core.DartIterable<boolean> {
        throw 'from mixin';
    }
    @Abstract
    takeWhile(test : <E>(element : E) => boolean) : core.DartIterable<boolean> {
        throw 'from mixin';
    }
    @Abstract
    toList(_namedArguments? : {growable? : boolean}) : core.DartList<boolean> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    toSet() : core.DartSet<boolean> {
        throw 'from mixin';
    }
    @Abstract
    add(element : E) : void {
        throw 'from mixin';
    }
    @Abstract
    addAll(iterable : core.DartIterable<E>) : void {
        throw 'from mixin';
    }
    @Abstract
    remove(element : core.DartObject) : boolean {
        throw 'from mixin';
    }
    @Abstract
    removeWhere(test : <E>(element : E) => boolean) : void {
        throw 'from mixin';
    }
    @Abstract
    retainWhere(test : <E>(element : E) => boolean) : void {
        throw 'from mixin';
    }
    @Abstract
    _filter(test : <E>(element : any) => boolean,retainMatching : boolean) : void {
        throw 'from mixin';
    }
    @Abstract
    clear() : void {
        throw 'from mixin';
    }
    @Abstract
    removeLast() : boolean {
        throw 'from mixin';
    }
    @Abstract
    sort(compare? : <E>(a : E,b : E) => number) : void {
        throw 'from mixin';
    }
    @Abstract
    _compareAny(a : any,b : any) : number {
        throw 'from mixin';
    }
    @Abstract
    shuffle(random? : math.Random) : void {
        throw 'from mixin';
    }
    @Abstract
    asMap() : core.DartMap<number,boolean> {
        throw 'from mixin';
    }
    @Abstract
    sublist(start : number,end? : number) : core.DartList<boolean> {
        throw 'from mixin';
    }
    @Abstract
    getRange(start : number,end : number) : core.DartIterable<boolean> {
        throw 'from mixin';
    }
    @Abstract
    removeRange(start : number,end : number) : void {
        throw 'from mixin';
    }
    @Abstract
    fillRange(start : number,end : number,fill? : E) : void {
        throw 'from mixin';
    }
    @Abstract
    setRange(start : number,end : number,iterable : core.DartIterable<E>,skipCount? : number) : void {
        skipCount = skipCount || 0;
        throw 'from mixin';
    }
    @Abstract
    replaceRange(start : number,end : number,newContents : core.DartIterable<E>) : void {
        throw 'from mixin';
    }
    @Abstract
    indexOf(element : core.DartObject,startIndex? : number) : number {
        startIndex = startIndex || 0;
        throw 'from mixin';
    }
    @Abstract
    lastIndexOf(element : core.DartObject,startIndex? : number) : number {
        throw 'from mixin';
    }
    @Abstract
    insert(index : number,element : E) : void {
        throw 'from mixin';
    }
    @Abstract
    removeAt(index : number) : boolean {
        throw 'from mixin';
    }
    @Abstract
    insertAll(index : number,iterable : core.DartIterable<E>) : void {
        throw 'from mixin';
    }
    @Abstract
    setAll(index : number,iterable : core.DartIterable<E>) : void {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    bc : BufferContext;

    offset : number;

    _length : number;

    constructor(bc : BufferContext,offset : number) {
    }
    @defaultConstructor
    _FbBoolList(bc : BufferContext,offset : number) {
        this.bc = bc;
        this.offset = offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get length() : number {
        if (this._length == null) {
            let byteLength : number = this.bc._getUint32(this.offset);
            this._length = (byteLength - 1) * 8 - this._getByte(byteLength - 1);
        }
        return this._length;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set length(i : number) {
        throw new core.StateError('Attempt to modify immutable list');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.INDEX](i : number) : boolean {
        let index : number = op(Op.QUOTIENT,i,8);
        let mask : number = 1 << i % 8;
        return this._getByte(index) & mask != 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.INDEX_EQ](i : number,e : boolean) : void {
        return throw new core.StateError('Attempt to modify immutable list');
    }
    _getByte(index : number) : number {
        return this.bc._getUint8(this.offset + 4 + index);
    }
}

export namespace _FbList {
    export type Constructors = '_FbList';
    export type Interface<E> = Omit<_FbList<E>, Constructors>;
}
@DartClass
@Implements(core.DartList)
@With(core.DartListMixin)
export class _FbList<E> extends core.DartObject implements core.DartList.Interface<E>,core.DartListMixin.Interface<E> {
    @Abstract
    elementAt(index : number) : E {
        throw 'from mixin';
    }
    @Abstract
    forEach(action : <E>(element : E) => void) : void {
        throw 'from mixin';
    }
    @Abstract
    contains(element : core.DartObject) : boolean {
        throw 'from mixin';
    }
    @Abstract
    every(test : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    any(test : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    firstWhere(test : <E>(element : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : E {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    lastWhere(test : <E>(element : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : E {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    singleWhere(test : <E>(element : E) => boolean) : E {
        throw 'from mixin';
    }
    @Abstract
    join(separator? : string) : string {
        separator = separator || "";
        throw 'from mixin';
    }
    @Abstract
    where(test : <E>(element : E) => boolean) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    map(f : <T,E>(element : E) => T) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    expand(f : <T,E>(element : E) => core.DartIterable<T>) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    reduce(combine : <E>(previousValue : E,element : E) => E) : E {
        throw 'from mixin';
    }
    @Abstract
    fold(initialValue : T,combine : <T,E>(previousValue : T,element : E) => T) : T {
        throw 'from mixin';
    }
    @Abstract
    skip(count : number) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    skipWhile(test : <E>(element : E) => boolean) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    take(count : number) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    takeWhile(test : <E>(element : E) => boolean) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    toList(_namedArguments? : {growable? : boolean}) : core.DartList<E> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    toSet() : core.DartSet<E> {
        throw 'from mixin';
    }
    @Abstract
    add(element : E) : void {
        throw 'from mixin';
    }
    @Abstract
    addAll(iterable : core.DartIterable<E>) : void {
        throw 'from mixin';
    }
    @Abstract
    remove(element : core.DartObject) : boolean {
        throw 'from mixin';
    }
    @Abstract
    removeWhere(test : <E>(element : E) => boolean) : void {
        throw 'from mixin';
    }
    @Abstract
    retainWhere(test : <E>(element : E) => boolean) : void {
        throw 'from mixin';
    }
    @Abstract
    _filter(test : <E>(element : any) => boolean,retainMatching : boolean) : void {
        throw 'from mixin';
    }
    @Abstract
    clear() : void {
        throw 'from mixin';
    }
    @Abstract
    removeLast() : E {
        throw 'from mixin';
    }
    @Abstract
    sort(compare? : <E>(a : E,b : E) => number) : void {
        throw 'from mixin';
    }
    @Abstract
    _compareAny(a : any,b : any) : number {
        throw 'from mixin';
    }
    @Abstract
    shuffle(random? : math.Random) : void {
        throw 'from mixin';
    }
    @Abstract
    asMap() : core.DartMap<number,E> {
        throw 'from mixin';
    }
    @Abstract
    sublist(start : number,end? : number) : core.DartList<E> {
        throw 'from mixin';
    }
    @Abstract
    getRange(start : number,end : number) : core.DartIterable<E> {
        throw 'from mixin';
    }
    @Abstract
    removeRange(start : number,end : number) : void {
        throw 'from mixin';
    }
    @Abstract
    fillRange(start : number,end : number,fill? : E) : void {
        throw 'from mixin';
    }
    @Abstract
    setRange(start : number,end : number,iterable : core.DartIterable<E>,skipCount? : number) : void {
        skipCount = skipCount || 0;
        throw 'from mixin';
    }
    @Abstract
    replaceRange(start : number,end : number,newContents : core.DartIterable<E>) : void {
        throw 'from mixin';
    }
    @Abstract
    indexOf(element : core.DartObject,startIndex? : number) : number {
        startIndex = startIndex || 0;
        throw 'from mixin';
    }
    @Abstract
    lastIndexOf(element : core.DartObject,startIndex? : number) : number {
        throw 'from mixin';
    }
    @Abstract
    insert(index : number,element : E) : void {
        throw 'from mixin';
    }
    @Abstract
    removeAt(index : number) : E {
        throw 'from mixin';
    }
    @Abstract
    insertAll(index : number,iterable : core.DartIterable<E>) : void {
        throw 'from mixin';
    }
    @Abstract
    setAll(index : number,iterable : core.DartIterable<E>) : void {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    bc : BufferContext;

    offset : number;

    _length : number;

    constructor(bc : BufferContext,offset : number) {
    }
    @defaultConstructor
    _FbList(bc : BufferContext,offset : number) {
        this.bc = bc;
        this.offset = offset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get length() : number {
        this._length = ( this._length ) || ( this.bc._getUint32(this.offset) );
        return this._length;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set length(i : number) {
        throw new core.StateError('Attempt to modify immutable list');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.INDEX_EQ](i : number,e : E) : void {
        return throw new core.StateError('Attempt to modify immutable list');
    }
}

export namespace _VTable {
    export type Constructors = '_VTable';
    export type Interface = Omit<_VTable, Constructors>;
}
@DartClass
export class _VTable {
    fieldTails : core.DartList<number>;

    fieldOffsets : core.DartList<number>;

    tableSize : number;

    tail : number;

    get numOfUint16() : number {
        return 1 + 1 + this.fieldTails.length;
    }
    addField(field : number,offset : number) : void {
        while (this.fieldTails.length <= field){
            this.fieldTails.add(null);
        }
        this.fieldTails[field] = offset;
    }
    canUseExistingVTable(existing : _VTable) : boolean {
        /* TODO (AssertStatementImpl) : assert (tail == null); */;
        /* TODO (AssertStatementImpl) : assert (existing.tail != null); */;
        if (this.tableSize == existing.tableSize && this.fieldOffsets.length == existing.fieldOffsets.length) {
            for(let i : number = 0; i < this.fieldOffsets.length; i++){
                if (this.fieldOffsets[i] != existing.fieldOffsets[i]) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
    computeFieldOffsets(tableTail : number) : void {
        /* TODO (AssertStatementImpl) : assert (fieldOffsets.isEmpty); */;
        for(let fieldTail of this.fieldTails) {
            let fieldOffset : number = fieldTail == null ? 0 : tableTail - fieldTail;
            this.fieldOffsets.add(fieldOffset);
        }
    }
    output(buf : typed_data.ByteData,bufOffset : number) : void {
        buf.setUint16(bufOffset,this.numOfUint16 * 2,typed_data.Endianness.LITTLE_ENDIAN);
        bufOffset += 2;
        buf.setUint16(bufOffset,this.tableSize,typed_data.Endianness.LITTLE_ENDIAN);
        bufOffset += 2;
        for(let fieldOffset of this.fieldOffsets) {
            buf.setUint16(bufOffset,fieldOffset,typed_data.Endianness.LITTLE_ENDIAN);
            bufOffset += 2;
        }
    }
    constructor() {
    }
    @defaultConstructor
    _VTable() {
        this.fieldTails = new core.DartList.literal<number>();
        this.fieldOffsets = new core.DartList.literal<number>();
    }
}

export namespace BoolListReader {
    export type Constructors = Reader.Constructors | 'BoolListReader';
    export type Interface = Omit<BoolListReader, Constructors>;
}
@DartClass
export class BoolListReader extends Reader<core.DartList<boolean>> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BoolListReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get size() : number {
        return 4;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    read(bc : BufferContext,offset : number) : core.DartList<boolean> {
        return new _FbBoolList(bc,bc.derefObject(offset));
    }
}

export namespace BoolReader {
    export type Constructors = Reader.Constructors | 'BoolReader';
    export type Interface = Omit<BoolReader, Constructors>;
}
@DartClass
export class BoolReader extends Reader<boolean> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BoolReader() {
        super.Reader();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get size() : number {
        return 1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    read(bc : BufferContext,offset : number) : boolean {
        return bc._getInt8(offset) != 0;
    }
}

export namespace Float64ListReader {
    export type Constructors = Reader.Constructors | 'Float64ListReader';
    export type Interface = Omit<Float64ListReader, Constructors>;
}
@DartClass
export class Float64ListReader extends Reader<core.DartList<double>> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Float64ListReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get size() : number {
        return 4;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    read(bc : BufferContext,offset : number) : core.DartList<double> {
        return new _FbFloat64List(bc,bc.derefObject(offset));
    }
}

export namespace Int32Reader {
    export type Constructors = Reader.Constructors | 'Int32Reader';
    export type Interface = Omit<Int32Reader, Constructors>;
}
@DartClass
export class Int32Reader extends Reader<number> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Int32Reader() {
        super.Reader();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get size() : number {
        return 4;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    read(bc : BufferContext,offset : number) : number {
        return bc._getInt32(offset);
    }
}

export namespace Int8Reader {
    export type Constructors = Reader.Constructors | 'Int8Reader';
    export type Interface = Omit<Int8Reader, Constructors>;
}
@DartClass
export class Int8Reader extends Reader<number> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Int8Reader() {
        super.Reader();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get size() : number {
        return 1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    read(bc : BufferContext,offset : number) : number {
        return bc._getInt8(offset);
    }
}

export namespace ListReader {
    export type Constructors = Reader.Constructors | 'ListReader';
    export type Interface<E> = Omit<ListReader<E>, Constructors>;
}
@DartClass
export class ListReader<E> extends Reader<core.DartList<E>> {
    _elementReader : Reader<E>;

    constructor(_elementReader : Reader<E>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListReader(_elementReader : Reader<E>) {
        this._elementReader = _elementReader;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get size() : number {
        return 4;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    read(bc : BufferContext,offset : number) : core.DartList<E> {
        return new _FbGenericList<E>(this._elementReader,bc,bc.derefObject(offset));
    }
}

export namespace StringReader {
    export type Constructors = Reader.Constructors | 'StringReader';
    export type Interface = Omit<StringReader, Constructors>;
}
@DartClass
export class StringReader extends Reader<string> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StringReader() {
        super.Reader();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get size() : number {
        return 4;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    read(bc : BufferContext,offset : number) : string {
        let strOffset : number = bc.derefObject(offset);
        let length : number = bc._getUint32(strOffset);
        let bytes : typed_data.Uint8List = bc._asUint8LIst(strOffset + 4,length);
        if (StringReader._isLatin(bytes)) {
            return new core.DartString.fromCharCodes(bytes).valueOf();
        }
        return convert.properties.UTF8.decode(bytes);
    }
    static _isLatin(bytes : typed_data.Uint8List) : boolean {
        let length : number = bytes.length;
        for(let i : number = 0; i < length; i++){
            if (op(Op.INDEX,bytes,i) > 127) {
                return false;
            }
        }
        return true;
    }
}

export namespace TableReader {
    export type Constructors = Reader.Constructors | 'TableReader';
    export type Interface<T> = Omit<TableReader<T>, Constructors>;
}
@DartClass
export class TableReader<T> extends Reader<T> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TableReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get size() : number {
        return 4;
    }
    @Abstract
    createObject(bc : BufferContext,offset : number) : T{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    read(bp : BufferContext,offset : number) : T {
        let objectOffset : number = bp.derefObject(offset);
        return this.createObject(bp,objectOffset);
    }
}

export namespace Uint32ListReader {
    export type Constructors = Reader.Constructors | 'Uint32ListReader';
    export type Interface = Omit<Uint32ListReader, Constructors>;
}
@DartClass
export class Uint32ListReader extends Reader<core.DartList<number>> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Uint32ListReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get size() : number {
        return 4;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    read(bc : BufferContext,offset : number) : core.DartList<number> {
        return new _FbUint32List(bc,bc.derefObject(offset));
    }
}

export namespace Uint32Reader {
    export type Constructors = Reader.Constructors | 'Uint32Reader';
    export type Interface = Omit<Uint32Reader, Constructors>;
}
@DartClass
export class Uint32Reader extends Reader<number> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Uint32Reader() {
        super.Reader();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get size() : number {
        return 4;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    read(bc : BufferContext,offset : number) : number {
        return bc._getUint32(offset);
    }
}

export namespace Uint8ListReader {
    export type Constructors = Reader.Constructors | 'Uint8ListReader';
    export type Interface = Omit<Uint8ListReader, Constructors>;
}
@DartClass
export class Uint8ListReader extends Reader<core.DartList<number>> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Uint8ListReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get size() : number {
        return 4;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    read(bc : BufferContext,offset : number) : core.DartList<number> {
        return new _FbUint8List(bc,bc.derefObject(offset));
    }
}

export namespace Uint8Reader {
    export type Constructors = Reader.Constructors | 'Uint8Reader';
    export type Interface = Omit<Uint8Reader, Constructors>;
}
@DartClass
export class Uint8Reader extends Reader<number> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Uint8Reader() {
        super.Reader();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get size() : number {
        return 1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    read(bc : BufferContext,offset : number) : number {
        return bc._getUint8(offset);
    }
}

export namespace _FbFloat64List {
    export type Constructors = _FbList.Constructors | '_FbFloat64List';
    export type Interface = Omit<_FbFloat64List, Constructors>;
}
@DartClass
export class _FbFloat64List extends _FbList<double> {
    constructor(bc : BufferContext,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _FbFloat64List(bc : BufferContext,offset : number) {
        super._FbList(bc,offset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.INDEX](i : number) : double {
        return this.bc._getFloat64(this.offset + 8 + 8 * i);
    }
}

export namespace _FbGenericList {
    export type Constructors = _FbList.Constructors | '_FbGenericList';
    export type Interface<E> = Omit<_FbGenericList<E>, Constructors>;
}
@DartClass
export class _FbGenericList<E> extends _FbList<E> {
    elementReader : Reader<E>;

    _items : core.DartList<E>;

    constructor(elementReader : Reader<E>,bp : BufferContext,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _FbGenericList(elementReader : Reader<E>,bp : BufferContext,offset : number) {
        super._FbList(bp,offset);
        this.elementReader = elementReader;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.INDEX](i : number) : E {
        this._items = ( this._items ) || ( new core.DartList<E>(this.length) );
        let item : E = this._items[i];
        if (op(Op.EQUALS,item,null)) {
            item = this.elementReader.read(this.bc,this.offset + 4 + this.elementReader.size * i);
            this._items[i] = item;
        }
        return item;
    }
}

export namespace _FbUint32List {
    export type Constructors = _FbList.Constructors | '_FbUint32List';
    export type Interface = Omit<_FbUint32List, Constructors>;
}
@DartClass
export class _FbUint32List extends _FbList<number> {
    constructor(bc : BufferContext,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _FbUint32List(bc : BufferContext,offset : number) {
        super._FbList(bc,offset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.INDEX](i : number) : number {
        return this.bc._getUint32(this.offset + 4 + 4 * i);
    }
}

export namespace _FbUint8List {
    export type Constructors = _FbList.Constructors | '_FbUint8List';
    export type Interface = Omit<_FbUint8List, Constructors>;
}
@DartClass
export class _FbUint8List extends _FbList<number> {
    constructor(bc : BufferContext,offset : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _FbUint8List(bc : BufferContext,offset : number) {
        super._FbList(bc,offset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.INDEX](i : number) : number {
        return this.bc._getUint8(this.offset + 4 + i);
    }
}

export class properties {
}
