/** Library asset:datahedgehog_monitor/lib/lib/convert/convert.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as _internal from "@dart2ts/dart/_internal";

export var _combineSurrogatePair : (lead : number,tail : number) => number = (lead : number,tail : number) : number =>  {
    return 65536 + ((lead & properties._SURROGATE_VALUE_MASK) << 10) | (tail & properties._SURROGATE_VALUE_MASK);
};
export var _isTailSurrogate : (codeUnit : number) => boolean = (codeUnit : number) : boolean =>  {
    return (codeUnit & properties._SURROGATE_TAG_MASK) == properties._TAIL_SURROGATE_MIN;
};
export var _isLeadSurrogate : (codeUnit : number) => boolean = (codeUnit : number) : boolean =>  {
    return (codeUnit & properties._SURROGATE_TAG_MASK) == properties._LEAD_SURROGATE_MIN;
};
export var _defaultToEncodable : (object : any) => any = (object : any) : any =>  {
    return object.toJson();
};
export var _parseJson : (source : string,reviver : (key : any,value : any) => any) => any = (source : string,reviver : (key : any,value : any) => any) =>  {
};
export namespace _ClosableStringSink {
    export type Constructors = '_ClosableStringSink';
    export type Interface = Omit<_ClosableStringSink, Constructors>;
}
@DartClass
@Implements(ClosableStringSink)
export class _ClosableStringSink implements ClosableStringSink.Interface {
    _callback : () => void;

    _sink : core.DartStringSink;

    constructor(_sink : core.DartStringSink,_callback : () => void) {
    }
    @defaultConstructor
    _ClosableStringSink(_sink : core.DartStringSink,_callback : () => void) {
        this._sink = _sink;
        this._callback = _callback;
    }
    close() : void {
        this._callback();
    }
    writeCharCode(charCode : number) : void {
        this._sink.writeCharCode(charCode);
    }
    write(o : core.DartObject) : void {
        this._sink.write(o);
    }
    writeln(o? : core.DartObject) : void {
        o = o || "";
        this._sink.writeln(o);
    }
    writeAll(objects : core.DartIterable<any>,separator? : string) : void {
        separator = separator || "";
        this._sink.writeAll(objects,separator);
    }
}

export namespace HtmlEscapeMode {
    export type Constructors = '_' | 'HtmlEscapeMode';
    export type Interface = Omit<HtmlEscapeMode, Constructors>;
}
@DartClass
export class HtmlEscapeMode {
    _name : string;

    escapeLtGt : boolean;

    escapeQuot : boolean;

    escapeApos : boolean;

    escapeSlash : boolean;

    private static __$UNKNOWN : HtmlEscapeMode;
    static get UNKNOWN() : HtmlEscapeMode { 
        if (this.__$UNKNOWN===undefined) {
            this.__$UNKNOWN = new HtmlEscapeMode._('unknown',true,true,true,true);
        }
        return this.__$UNKNOWN;
    }

    private static __$ATTRIBUTE : HtmlEscapeMode;
    static get ATTRIBUTE() : HtmlEscapeMode { 
        if (this.__$ATTRIBUTE===undefined) {
            this.__$ATTRIBUTE = new HtmlEscapeMode._('attribute',true,true,false,false);
        }
        return this.__$ATTRIBUTE;
    }

    private static __$SQ_ATTRIBUTE : HtmlEscapeMode;
    static get SQ_ATTRIBUTE() : HtmlEscapeMode { 
        if (this.__$SQ_ATTRIBUTE===undefined) {
            this.__$SQ_ATTRIBUTE = new HtmlEscapeMode._('attribute',true,false,true,false);
        }
        return this.__$SQ_ATTRIBUTE;
    }

    private static __$ELEMENT : HtmlEscapeMode;
    static get ELEMENT() : HtmlEscapeMode { 
        if (this.__$ELEMENT===undefined) {
            this.__$ELEMENT = new HtmlEscapeMode._('element',true,false,false,false);
        }
        return this.__$ELEMENT;
    }

    @namedConstructor
    _(_name : string,escapeLtGt : boolean,escapeQuot : boolean,escapeApos : boolean,escapeSlash : boolean) {
        this._name = _name;
        this.escapeLtGt = escapeLtGt;
        this.escapeQuot = escapeQuot;
        this.escapeApos = escapeApos;
        this.escapeSlash = escapeSlash;
    }
    static _ : new(_name : string,escapeLtGt : boolean,escapeQuot : boolean,escapeApos : boolean,escapeSlash : boolean) => HtmlEscapeMode;

    constructor(_namedArguments? : {name? : string,escapeLtGt? : boolean,escapeQuot? : boolean,escapeApos? : boolean,escapeSlash? : boolean}) {
    }
    @defaultConstructor
    HtmlEscapeMode(_namedArguments? : {name? : string,escapeLtGt? : boolean,escapeQuot? : boolean,escapeApos? : boolean,escapeSlash? : boolean}) {
        let {name,escapeLtGt,escapeQuot,escapeApos,escapeSlash} = Object.assign({
            "name" : "custom",
            "escapeLtGt" : false,
            "escapeQuot" : false,
            "escapeApos" : false,
            "escapeSlash" : false}, _namedArguments );
        this._name = name;
        this.escapeLtGt = escapeLtGt;
        this.escapeQuot = escapeQuot;
        this.escapeApos = escapeApos;
        this.escapeSlash = escapeSlash;
    }
    toString() : string {
        return this._name;
    }
}

export namespace _JsonStringifier {
    export type Constructors = '_JsonStringifier';
    export type Interface = Omit<_JsonStringifier, Constructors>;
}
@DartClass
export class _JsonStringifier {
    private static __$BACKSPACE : number;
    static get BACKSPACE() : number { 
        if (this.__$BACKSPACE===undefined) {
            this.__$BACKSPACE = 8;
        }
        return this.__$BACKSPACE;
    }

    private static __$TAB : number;
    static get TAB() : number { 
        if (this.__$TAB===undefined) {
            this.__$TAB = 9;
        }
        return this.__$TAB;
    }

    private static __$NEWLINE : number;
    static get NEWLINE() : number { 
        if (this.__$NEWLINE===undefined) {
            this.__$NEWLINE = 10;
        }
        return this.__$NEWLINE;
    }

    private static __$CARRIAGE_RETURN : number;
    static get CARRIAGE_RETURN() : number { 
        if (this.__$CARRIAGE_RETURN===undefined) {
            this.__$CARRIAGE_RETURN = 13;
        }
        return this.__$CARRIAGE_RETURN;
    }

    private static __$FORM_FEED : number;
    static get FORM_FEED() : number { 
        if (this.__$FORM_FEED===undefined) {
            this.__$FORM_FEED = 12;
        }
        return this.__$FORM_FEED;
    }

    private static __$QUOTE : number;
    static get QUOTE() : number { 
        if (this.__$QUOTE===undefined) {
            this.__$QUOTE = 34;
        }
        return this.__$QUOTE;
    }

    private static __$CHAR_0 : number;
    static get CHAR_0() : number { 
        if (this.__$CHAR_0===undefined) {
            this.__$CHAR_0 = 48;
        }
        return this.__$CHAR_0;
    }

    private static __$BACKSLASH : number;
    static get BACKSLASH() : number { 
        if (this.__$BACKSLASH===undefined) {
            this.__$BACKSLASH = 92;
        }
        return this.__$BACKSLASH;
    }

    private static __$CHAR_b : number;
    static get CHAR_b() : number { 
        if (this.__$CHAR_b===undefined) {
            this.__$CHAR_b = 98;
        }
        return this.__$CHAR_b;
    }

    private static __$CHAR_f : number;
    static get CHAR_f() : number { 
        if (this.__$CHAR_f===undefined) {
            this.__$CHAR_f = 102;
        }
        return this.__$CHAR_f;
    }

    private static __$CHAR_n : number;
    static get CHAR_n() : number { 
        if (this.__$CHAR_n===undefined) {
            this.__$CHAR_n = 110;
        }
        return this.__$CHAR_n;
    }

    private static __$CHAR_r : number;
    static get CHAR_r() : number { 
        if (this.__$CHAR_r===undefined) {
            this.__$CHAR_r = 114;
        }
        return this.__$CHAR_r;
    }

    private static __$CHAR_t : number;
    static get CHAR_t() : number { 
        if (this.__$CHAR_t===undefined) {
            this.__$CHAR_t = 116;
        }
        return this.__$CHAR_t;
    }

    private static __$CHAR_u : number;
    static get CHAR_u() : number { 
        if (this.__$CHAR_u===undefined) {
            this.__$CHAR_u = 117;
        }
        return this.__$CHAR_u;
    }

    _seen : core.DartList<any>;

    _toEncodable : (o : any) => any;

    constructor(toEncodable : (o : any) => any) {
    }
    @defaultConstructor
    _JsonStringifier(toEncodable : (o : any) => any) {
        this._seen = new core.DartList<any>();
        this._toEncodable = (toEncodable || _defaultToEncodable);
    }
    @Abstract
    writeString(characters : string) : void{ throw 'abstract'}
    @Abstract
    writeStringSlice(characters : string,start : number,end : number) : void{ throw 'abstract'}
    @Abstract
    writeCharCode(charCode : number) : void{ throw 'abstract'}
    @Abstract
    writeNumber(number : number) : void{ throw 'abstract'}
    static hexDigit(x : number) : number {
        return x < 10 ? 48 + x : 87 + x;
    }
    writeStringContent(s : string) : void {
        let offset : number = 0;
        let length : number = new core.DartString(s).length;
        for(let i : number = 0; i < length; i++){
            let charCode : number = new core.DartString(s).codeUnitAt(i);
            if (charCode > _JsonStringifier.BACKSLASH) continue;
            if (charCode < 32) {
                if (i > offset) this.writeStringSlice(s,offset,i);
                offset = i + 1;
                this.writeCharCode(_JsonStringifier.BACKSLASH);
                switch (charCode) {
                    case _JsonStringifier.BACKSPACE:
                        this.writeCharCode(_JsonStringifier.CHAR_b);
                        break;
                    case _JsonStringifier.TAB:
                        this.writeCharCode(_JsonStringifier.CHAR_t);
                        break;
                    case _JsonStringifier.NEWLINE:
                        this.writeCharCode(_JsonStringifier.CHAR_n);
                        break;
                    case _JsonStringifier.FORM_FEED:
                        this.writeCharCode(_JsonStringifier.CHAR_f);
                        break;
                    case _JsonStringifier.CARRIAGE_RETURN:
                        this.writeCharCode(_JsonStringifier.CHAR_r);
                        break;
                    default:
                        this.writeCharCode(_JsonStringifier.CHAR_u);
                        this.writeCharCode(_JsonStringifier.CHAR_0);
                        this.writeCharCode(_JsonStringifier.CHAR_0);
                        this.writeCharCode(_JsonStringifier.hexDigit((charCode >> 4) & 15));
                        this.writeCharCode(_JsonStringifier.hexDigit(charCode & 15));
                        break;
                }
            }else if (charCode == _JsonStringifier.QUOTE || charCode == _JsonStringifier.BACKSLASH) {
                if (i > offset) this.writeStringSlice(s,offset,i);
                offset = i + 1;
                this.writeCharCode(_JsonStringifier.BACKSLASH);
                this.writeCharCode(charCode);
            }
        }
        if (offset == 0) {
            this.writeString(s);
        }else if (offset < length) {
            this.writeStringSlice(s,offset,length);
        }
    }
    _checkCycle(object : any) : void {
        for(let i : number = 0; i < this._seen.length; i++){
            if (core.identical(object,this._seen[i])) {
                throw new JsonCyclicError(object);
            }
        }
        this._seen.add(object);
    }
    _removeSeen(object : any) : void {
        /* TODO (AssertStatementImpl) : assert (!_seen.isEmpty); */;
        /* TODO (AssertStatementImpl) : assert (identical(_seen.last, object)); */;
        this._seen.removeLast();
    }
    writeObject(object : any) : void {
        if (this.writeJsonValue(object)) return;
        this._checkCycle(object);
        try {
            let customJson = this._toEncodable(object);
            if (!this.writeJsonValue(customJson)) {
                throw new JsonUnsupportedObjectError(object);
            }
            this._removeSeen(object);
        } catch (__error__) {

            {
                let e = __error__;
                throw new JsonUnsupportedObjectError(object,{
                    cause : e});
            }
        }
    }
    writeJsonValue(object : any) : boolean {
        if (is(object, "number")) {
            if (!new core.DartNumber(object).isFinite) return false;
            this.writeNumber(object);
            return true;
        }else if (core.identical(object,true)) {
            this.writeString('true');
            return true;
        }else if (core.identical(object,false)) {
            this.writeString('false');
            return true;
        }else if (op(Op.EQUALS,object,null)) {
            this.writeString('null');
            return true;
        }else if (is(object, "string")) {
            this.writeString('"');
            this.writeStringContent(object);
            this.writeString('"');
            return true;
        }else if (is(object, core.DartList<any>)) {
            this._checkCycle(object);
            this.writeList(object);
            this._removeSeen(object);
            return true;
        }else if (is(object, core.DartMap<any,any>)) {
            this._checkCycle(object);
            let success = this.writeMap(object);
            this._removeSeen(object);
            return success;
        }else {
            return false;
        }
    }
    writeList(list : core.DartList<any>) : void {
        this.writeString('[');
        if (list.length > 0) {
            this.writeObject(list[0]);
            for(let i : number = 1; i < list.length; i++){
                this.writeString(',');
                this.writeObject(list[i]);
            }
        }
        this.writeString(']');
    }
    writeMap(map : core.DartMap<any,any>) : boolean {
        if (map.isEmpty) {
            this.writeString("{}");
            return true;
        }
        let keyValueList : core.DartList<any> = new core.DartList<any>(map.length * 2);
        let i : number = 0;
        let allStringKeys : boolean = true;
        map.forEach((key : any,value : any) =>  {
            if (isNot(key, "string")) {
                allStringKeys = false;
            }
            keyValueList[i++] = key;
            keyValueList[i++] = value;
        });
        if (!allStringKeys) return false;
        this.writeString('{');
        let separator : string = '"';
        for(let i : number = 0; i < keyValueList.length; i += 2){
            this.writeString(separator);
            separator = ',"';
            this.writeStringContent(keyValueList[i]);
            this.writeString('":');
            this.writeObject(keyValueList[i + 1]);
        }
        this.writeString('}');
        return true;
    }
}

export namespace _JsonPrettyPrintMixin {
    export type Constructors = '_JsonPrettyPrintMixin';
    export type Interface = Omit<_JsonPrettyPrintMixin, Constructors>;
}
@DartClass
@Implements(_JsonStringifier)
export class _JsonPrettyPrintMixin implements _JsonStringifier.Interface {
    _indentLevel : number;

    @Abstract
    writeIndentation(indentLevel : number) : void{ throw 'abstract'}
    writeList(list : core.DartList<any>) : void {
        if (list.isEmpty) {
            this.writeString('[]');
        }else {
            this.writeString('[\n');
            this._indentLevel++;
            this.writeIndentation(this._indentLevel);
            this.writeObject(list[0]);
            for(let i : number = 1; i < list.length; i++){
                this.writeString(',\n');
                this.writeIndentation(this._indentLevel);
                this.writeObject(list[i]);
            }
            this.writeString('\n');
            this._indentLevel--;
            this.writeIndentation(this._indentLevel);
            this.writeString(']');
        }
    }
    writeMap(map : core.DartMap<any,any>) : boolean {
        if (map.isEmpty) {
            this.writeString("{}");
            return true;
        }
        let keyValueList : core.DartList<any> = new core.DartList<any>(map.length * 2);
        let i : number = 0;
        let allStringKeys : boolean = true;
        map.forEach((key : any,value : any) =>  {
            if (isNot(key, "string")) {
                allStringKeys = false;
            }
            keyValueList[i++] = key;
            keyValueList[i++] = value;
        });
        if (!allStringKeys) return false;
        this.writeString('{\n');
        this._indentLevel++;
        let separator : string = "";
        for(let i : number = 0; i < keyValueList.length; i += 2){
            this.writeString(separator);
            separator = ",\n";
            this.writeIndentation(this._indentLevel);
            this.writeString('"');
            this.writeStringContent(keyValueList[i]);
            this.writeString('": ');
            this.writeObject(keyValueList[i + 1]);
        }
        this.writeString('\n');
        this._indentLevel--;
        this.writeIndentation(this._indentLevel);
        this.writeString('}');
        return true;
    }
    constructor() {
    }
    @defaultConstructor
    _JsonPrettyPrintMixin() {
        this._indentLevel = 0;
    }
}

export namespace _Utf8Encoder {
    export type Constructors = '_Utf8Encoder' | 'withBufferSize';
    export type Interface = Omit<_Utf8Encoder, Constructors>;
}
@DartClass
export class _Utf8Encoder {
    _carry : number;

    _bufferIndex : number;

    _buffer : core.DartList<number>;

    private static __$_DEFAULT_BYTE_BUFFER_SIZE;
    static get _DEFAULT_BYTE_BUFFER_SIZE() { 
        if (this.__$_DEFAULT_BYTE_BUFFER_SIZE===undefined) {
            this.__$_DEFAULT_BYTE_BUFFER_SIZE = 1024;
        }
        return this.__$_DEFAULT_BYTE_BUFFER_SIZE;
    }

    constructor() {
    }
    @defaultConstructor
    _Utf8Encoder() {
        this._carry = 0;
        this._bufferIndex = 0;
        this.withBufferSize(_Utf8Encoder._DEFAULT_BYTE_BUFFER_SIZE);
    }
    @namedConstructor
    withBufferSize(bufferSize : number) {
        this._carry = 0;
        this._bufferIndex = 0;
        this._buffer = _Utf8Encoder._createBuffer(bufferSize);
    }
    static withBufferSize : new(bufferSize : number) => _Utf8Encoder;

    static _createBuffer(size : number) : core.DartList<number> {
        return new typed_data.Uint8List(size);
    }
    _writeSurrogate(leadingSurrogate : number,nextCodeUnit : number) : boolean {
        if (_isTailSurrogate(nextCodeUnit)) {
            let rune : number = _combineSurrogatePair(leadingSurrogate,nextCodeUnit);
            /* TODO (AssertStatementImpl) : assert (rune > _THREE_BYTE_LIMIT); */;
            /* TODO (AssertStatementImpl) : assert (rune <= _FOUR_BYTE_LIMIT); */;
            this._buffer[this._bufferIndex++] = 240 | (rune >> 18);
            this._buffer[this._bufferIndex++] = 128 | ((rune >> 12) & 63);
            this._buffer[this._bufferIndex++] = 128 | ((rune >> 6) & 63);
            this._buffer[this._bufferIndex++] = 128 | (rune & 63);
            return true;
        }else {
            this._buffer[this._bufferIndex++] = 224 | (leadingSurrogate >> 12);
            this._buffer[this._bufferIndex++] = 128 | ((leadingSurrogate >> 6) & 63);
            this._buffer[this._bufferIndex++] = 128 | (leadingSurrogate & 63);
            return false;
        }
    }
    _fillBuffer(str : string,start : number,end : number) : number {
        if (start != end && _isLeadSurrogate(new core.DartString(str).codeUnitAt(end - 1))) {
            end--;
        }
        let stringIndex : number;
        for(stringIndex = start; stringIndex < end; stringIndex++){
            let codeUnit : number = new core.DartString(str).codeUnitAt(stringIndex);
            if (codeUnit <= properties._ONE_BYTE_LIMIT) {
                if (this._bufferIndex >= this._buffer.length) break;
                this._buffer[this._bufferIndex++] = codeUnit;
            }else if (_isLeadSurrogate(codeUnit)) {
                if (this._bufferIndex + 3 >= this._buffer.length) break;
                let nextCodeUnit : number = new core.DartString(str).codeUnitAt(stringIndex + 1);
                let wasCombined : boolean = this._writeSurrogate(codeUnit,nextCodeUnit);
                if (wasCombined) stringIndex++;
            }else {
                let rune : number = codeUnit;
                if (rune <= properties._TWO_BYTE_LIMIT) {
                    if (this._bufferIndex + 1 >= this._buffer.length) break;
                    this._buffer[this._bufferIndex++] = 192 | (rune >> 6);
                    this._buffer[this._bufferIndex++] = 128 | (rune & 63);
                }else {
                    /* TODO (AssertStatementImpl) : assert (rune <= _THREE_BYTE_LIMIT); */;
                    if (this._bufferIndex + 2 >= this._buffer.length) break;
                    this._buffer[this._bufferIndex++] = 224 | (rune >> 12);
                    this._buffer[this._bufferIndex++] = 128 | ((rune >> 6) & 63);
                    this._buffer[this._bufferIndex++] = 128 | (rune & 63);
                }
            }
        }
        return stringIndex;
    }
}

export namespace Converter {
    export type Constructors = 'Converter';
    export type Interface<S,T> = Omit<Converter<S,T>, Constructors>;
}
@DartClass
@Implements(async.DartStreamTransformer)
export class Converter<S,T> implements async.DartStreamTransformer.Interface<S,T> {
    constructor() {
    }
    @defaultConstructor
    Converter() {
    }
    @Abstract
    convert(input : S) : T{ throw 'abstract'}
    fuse<TT>(other : Converter<T,TT>) : Converter<S,TT> {
        return new _FusedConverter<S,T,TT>(this,other);
    }
    startChunkedConversion(sink : core.DartSink<any>) : core.DartSink<any> {
        throw new core.UnsupportedError(`This converter does not support chunked conversions: ${this}`);
    }
    bind(stream : async.DartStream<S>) : async.DartStream<T> {
        return new async.DartStream.eventTransformed(stream,(sink : async.DartEventSink<any>) =>  {
            return new _ConverterStreamEventSink<any,any>(this,sink);
        });
    }
}

export namespace Codec {
    export type Constructors = 'Codec';
    export type Interface<S,T> = Omit<Codec<S,T>, Constructors>;
}
@DartClass
export class Codec<S,T> {
    constructor() {
    }
    @defaultConstructor
    Codec() {
    }
    encode(input : S) : T {
        return this.encoder.convert(input);
    }
    decode(encoded : T) : S {
        return this.decoder.convert(encoded);
    }
    @AbstractProperty
    get encoder() : Converter<S,T>{ throw 'abstract'}
    @AbstractProperty
    get decoder() : Converter<T,S>{ throw 'abstract'}
    fuse<R>(other : Codec<T,R>) : Codec<S,R> {
        return new _FusedCodec<S,T,R>(this,other);
    }
    get inverted() : Codec<T,S> {
        return new _InvertedCodec<T,S>(this);
    }
}

export namespace ChunkedConversionSink {
    export type Constructors = 'ChunkedConversionSink';
    export type Interface<T> = Omit<ChunkedConversionSink<T>, Constructors>;
}
@DartClass
@Implements(core.DartSink)
export class ChunkedConversionSink<T> implements core.DartSink.Interface<T> {
    constructor() {
    }
    @defaultConstructor
    ChunkedConversionSink() {
    }
    @namedFactory
    static $withCallback<T>(callback : <T>(accumulated : core.DartList<T>) => void) : ChunkedConversionSink<T> {
        return new _SimpleCallbackSink<T>(callback);
    }
    static withCallback : new<T>(callback : <T>(accumulated : core.DartList<T>) => void) => ChunkedConversionSink<T>;

    @Abstract
    add(chunk : T) : void{ throw 'abstract'}
    @Abstract
    close() : void{ throw 'abstract'}
}

export namespace _ConverterStreamEventSink {
    export type Constructors = '_ConverterStreamEventSink';
    export type Interface<S,T> = Omit<_ConverterStreamEventSink<S,T>, Constructors>;
}
@DartClass
@Implements(async.DartEventSink)
export class _ConverterStreamEventSink<S,T> implements async.DartEventSink.Interface<S> {
    _eventSink : async.DartEventSink<T>;

    _chunkedSink : core.DartSink<S>;

    constructor(converter : Converter<S,T>,sink : async.DartEventSink<T>) {
    }
    @defaultConstructor
    _ConverterStreamEventSink(converter : Converter<S,T>,sink : async.DartEventSink<T>) {
        this._eventSink = sink;
        this._chunkedSink = converter.startChunkedConversion(sink);
    }
    add(o : S) : void {
        this._chunkedSink.add(o);
    }
    addError(error : core.DartObject,stackTrace? : core.DartStackTrace) : void {
        this._eventSink.addError(error,stackTrace);
    }
    close() : void {
        this._chunkedSink.close();
    }
}

export namespace _Base64Decoder {
    export type Constructors = '_Base64Decoder';
    export type Interface = Omit<_Base64Decoder, Constructors>;
}
@DartClass
export class _Base64Decoder {
    private static __$_valueShift : number;
    static get _valueShift() : number { 
        if (this.__$_valueShift===undefined) {
            this.__$_valueShift = 2;
        }
        return this.__$_valueShift;
    }

    private static __$_countMask : number;
    static get _countMask() : number { 
        if (this.__$_countMask===undefined) {
            this.__$_countMask = 3;
        }
        return this.__$_countMask;
    }

    private static __$_invalid : number;
    static get _invalid() : number { 
        if (this.__$_invalid===undefined) {
            this.__$_invalid = -2;
        }
        return this.__$_invalid;
    }

    private static __$_padding : number;
    static get _padding() : number { 
        if (this.__$_padding===undefined) {
            this.__$_padding = -1;
        }
        return this.__$_padding;
    }

    private static __$__ : number;
    static get __() : number { 
        if (this.__$__===undefined) {
            this.__$__ = _Base64Decoder._invalid;
        }
        return this.__$__;
    }

    private static __$_p : number;
    static get _p() : number { 
        if (this.__$_p===undefined) {
            this.__$_p = _Base64Decoder._padding;
        }
        return this.__$_p;
    }

    private static __$_inverseAlphabet : core.DartList<number>;
    static get _inverseAlphabet() : core.DartList<number> { 
        if (this.__$_inverseAlphabet===undefined) {
            this.__$_inverseAlphabet = new typed_data.Int8List.fromList(new core.DartList.literal(_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder._p,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,62,_Base64Decoder.__,62,_Base64Decoder.__,63,52,53,54,55,56,57,58,59,60,61,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder._p,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,63,_Base64Decoder.__,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__,_Base64Decoder.__));
        }
        return this.__$_inverseAlphabet;
    }
    static set _inverseAlphabet(__$value : core.DartList<number>)  { 
        this.__$_inverseAlphabet = __$value;
    }

    private static __$_char_percent : number;
    static get _char_percent() : number { 
        if (this.__$_char_percent===undefined) {
            this.__$_char_percent = 37;
        }
        return this.__$_char_percent;
    }

    private static __$_char_3 : number;
    static get _char_3() : number { 
        if (this.__$_char_3===undefined) {
            this.__$_char_3 = 51;
        }
        return this.__$_char_3;
    }

    private static __$_char_d : number;
    static get _char_d() : number { 
        if (this.__$_char_d===undefined) {
            this.__$_char_d = 100;
        }
        return this.__$_char_d;
    }

    _state : number;

    static _encodeCharacterState(count : number,bits : number) : number {
        /* TODO (AssertStatementImpl) : assert (count == (count & _countMask)); */;
        return (bits << _Base64Decoder._valueShift | count);
    }
    static _stateCount(state : number) : number {
        /* TODO (AssertStatementImpl) : assert (state >= 0); */;
        return state & _Base64Decoder._countMask;
    }
    static _stateBits(state : number) : number {
        /* TODO (AssertStatementImpl) : assert (state >= 0); */;
        return state >> _Base64Decoder._valueShift;
    }
    static _encodePaddingState(expectedPadding : number) : number {
        /* TODO (AssertStatementImpl) : assert (expectedPadding >= 0); */;
        /* TODO (AssertStatementImpl) : assert (expectedPadding <= 5); */;
        return -expectedPadding - 1;
    }
    static _statePadding(state : number) : number {
        /* TODO (AssertStatementImpl) : assert (state < 0); */;
        return -state - 1;
    }
    static _hasSeenPadding(state : number) : boolean {
        return state < 0;
    }
    decode(input : string,start : number,end : number) : typed_data.Uint8List {
        /* TODO (AssertStatementImpl) : assert (0 <= start); */;
        /* TODO (AssertStatementImpl) : assert (start <= end); */;
        /* TODO (AssertStatementImpl) : assert (end <= input.length); */;
        if (_Base64Decoder._hasSeenPadding(this._state)) {
            this._state = _Base64Decoder._checkPadding(input,start,end,this._state);
            return null;
        }
        if (start == end) return new typed_data.Uint8List(0);
        let buffer : typed_data.Uint8List = _Base64Decoder._allocateBuffer(input,start,end,this._state);
        this._state = _Base64Decoder.decodeChunk(input,start,end,buffer,0,this._state);
        return buffer;
    }
    close(input : string,end : number) : void {
        if (this._state < _Base64Decoder._encodePaddingState(0)) {
            throw new core.FormatException("Missing padding character",input,end);
        }
        if (this._state > 0) {
            throw new core.FormatException("Invalid length, must be multiple of four",input,end);
        }
        this._state = _Base64Decoder._encodePaddingState(0);
    }
    static decodeChunk(input : string,start : number,end : number,output : typed_data.Uint8List,outIndex : number,state : number) : number {
        /* TODO (AssertStatementImpl) : assert (!_hasSeenPadding(state)); */;
        let asciiMask : number = 127;
        let asciiMax : number = 127;
        let eightBitMask : number = 255;
        let bitsPerCharacter : number = 6;
        let bits : number = _Base64Decoder._stateBits(state);
        let count : number = _Base64Decoder._stateCount(state);
        let charOr : number = 0;
        for(let i : number = start; i < end; i++){
            let char = new core.DartString(input).codeUnitAt(i);
            charOr |= char;
            let code : number = _Base64Decoder._inverseAlphabet[char & asciiMask];
            if (code >= 0) {
                bits = ((bits << bitsPerCharacter) | code) & 16777215;
                count = (count + 1) & 3;
                if (count == 0) {
                    /* TODO (AssertStatementImpl) : assert (outIndex + 3 <= output.length); */;
                    op(Op.INDEX_ASSIGN,output,outIndex++,(bits >> 16) & eightBitMask);
                    op(Op.INDEX_ASSIGN,output,outIndex++,(bits >> 8) & eightBitMask);
                    op(Op.INDEX_ASSIGN,output,outIndex++,bits & eightBitMask);
                    bits = 0;
                }
                continue;
            }else if (code == _Base64Decoder._padding && count > 1) {
                if (charOr < 0 || charOr > asciiMax) break;
                if (count == 3) {
                    if ((bits & 3) != 0) {
                        throw new core.FormatException("Invalid encoding before padding",input,i);
                    }
                    op(Op.INDEX_ASSIGN,output,outIndex++,bits >> 10);
                    op(Op.INDEX_ASSIGN,output,outIndex++,bits >> 2);
                }else {
                    if ((bits & 15) != 0) {
                        throw new core.FormatException("Invalid encoding before padding",input,i);
                    }
                    op(Op.INDEX_ASSIGN,output,outIndex++,bits >> 4);
                }
                let expectedPadding : number = (3 - count) * 3;
                if (char == _Base64Decoder._char_percent) expectedPadding += 2;
                state = _Base64Decoder._encodePaddingState(expectedPadding);
                return _Base64Decoder._checkPadding(input,i + 1,end,state);
            }
            throw new core.FormatException("Invalid character",input,i);
        }
        if (charOr >= 0 && charOr <= asciiMax) {
            return _Base64Decoder._encodeCharacterState(count,bits);
        }
        let i : number;
        for(i = start; i < end; i++){
            let char : number = new core.DartString(input).codeUnitAt(i);
            if (char < 0 || char > asciiMax) break;
        }
        throw new core.FormatException("Invalid character",input,i);
    }
    static _allocateBuffer(input : string,start : number,end : number,state : number) : typed_data.Uint8List {
        /* TODO (AssertStatementImpl) : assert (state >= 0); */;
        let paddingStart : number = _Base64Decoder._trimPaddingChars(input,start,end);
        let length : number = _Base64Decoder._stateCount(state) + (paddingStart - start);
        let bufferLength : number = (length >> 2) * 3;
        let remainderLength : number = length & 3;
        if (remainderLength != 0 && paddingStart < end) {
            bufferLength += remainderLength - 1;
        }
        if (bufferLength > 0) return new typed_data.Uint8List(bufferLength);
        return null;
    }
    static _trimPaddingChars(input : string,start : number,end : number) : number {
        let padding : number = 0;
        let index : number = end;
        let newEnd : number = end;
        while (index > start && padding < 2){
            index--;
            let char : number = new core.DartString(input).codeUnitAt(index);
            if (char == properties._paddingChar) {
                padding++;
                newEnd = index;
                continue;
            }
            if ((char | 32) == _Base64Decoder._char_d) {
                if (index == start) break;
                index--;
                char = new core.DartString(input).codeUnitAt(index);
            }
            if (char == _Base64Decoder._char_3) {
                if (index == start) break;
                index--;
                char = new core.DartString(input).codeUnitAt(index);
            }
            if (char == _Base64Decoder._char_percent) {
                padding++;
                newEnd = index;
                continue;
            }
            break;
        }
        return newEnd;
    }
    static _checkPadding(input : string,start : number,end : number,state : number) : number {
        /* TODO (AssertStatementImpl) : assert (_hasSeenPadding(state)); */;
        if (start == end) return state;
        let expectedPadding : number = _Base64Decoder._statePadding(state);
        /* TODO (AssertStatementImpl) : assert (expectedPadding >= 0); */;
        /* TODO (AssertStatementImpl) : assert (expectedPadding < 6); */;
        while (expectedPadding > 0){
            let char : number = new core.DartString(input).codeUnitAt(start);
            if (expectedPadding == 3) {
                if (char == properties._paddingChar) {
                    expectedPadding -= 3;
                    start++;
                    break;
                }
                if (char == _Base64Decoder._char_percent) {
                    expectedPadding--;
                    start++;
                    if (start == end) break;
                    char = new core.DartString(input).codeUnitAt(start);
                }else {
                    break;
                }
            }
            let expectedPartialPadding : number = expectedPadding;
            if (expectedPartialPadding > 3) expectedPartialPadding -= 3;
            if (expectedPartialPadding == 2) {
                if (char != _Base64Decoder._char_3) break;
                start++;
                expectedPadding--;
                if (start == end) break;
                char = new core.DartString(input).codeUnitAt(start);
            }
            if ((char | 32) != _Base64Decoder._char_d) break;
            start++;
            expectedPadding--;
            if (start == end) break;
        }
        if (start != end) {
            throw new core.FormatException("Invalid padding character",input,start);
        }
        return _Base64Decoder._encodePaddingState(expectedPadding);
    }
    constructor() {
    }
    @defaultConstructor
    _Base64Decoder() {
        this._state = 0;
    }
}

export namespace StringConversionSinkMixin {
    export type Constructors = 'StringConversionSinkMixin';
    export type Interface = Omit<StringConversionSinkMixin, Constructors>;
}
@DartClass
@Implements(StringConversionSink)
export class StringConversionSinkMixin implements StringConversionSink.Interface {
    @Abstract
    addSlice(str : string,start : number,end : number,isLast : boolean) : void{ throw 'abstract'}
    @Abstract
    close() : void{ throw 'abstract'}
    add(str : string) : void {
        this.addSlice(str,0,new core.DartString(str).length,false);
    }
    asUtf8Sink(allowMalformed : boolean) : ByteConversionSink {
        return new _Utf8ConversionSink(this,allowMalformed);
    }
    asStringSink() : ClosableStringSink {
        return new _StringConversionSinkAsStringSinkAdapter(this);
    }
    constructor() {
    }
    @defaultConstructor
    StringConversionSinkMixin() {
    }
}

export namespace ClosableStringSink {
    export type Constructors = core.DartStringSink.Constructors | never;
    export type Interface = Omit<ClosableStringSink, Constructors>;
}
@DartClass
export class ClosableStringSink extends core.DartStringSink {
    @namedFactory
    static $fromStringSink(sink : core.DartStringSink,onClose : () => void) : ClosableStringSink {
        return new _ClosableStringSink(sink,onClose);
    }
    static fromStringSink : new(sink : core.DartStringSink,onClose : () => void) => ClosableStringSink;

    @Abstract
    close() : void{ throw 'abstract'}
}

export namespace _Base64Encoder {
    export type Constructors = '_Base64Encoder';
    export type Interface = Omit<_Base64Encoder, Constructors>;
}
@DartClass
export class _Base64Encoder {
    private static __$_base64Alphabet : string;
    static get _base64Alphabet() : string { 
        if (this.__$_base64Alphabet===undefined) {
            this.__$_base64Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        }
        return this.__$_base64Alphabet;
    }

    private static __$_base64urlAlphabet : string;
    static get _base64urlAlphabet() : string { 
        if (this.__$_base64urlAlphabet===undefined) {
            this.__$_base64urlAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
        }
        return this.__$_base64urlAlphabet;
    }

    private static __$_valueShift : number;
    static get _valueShift() : number { 
        if (this.__$_valueShift===undefined) {
            this.__$_valueShift = 2;
        }
        return this.__$_valueShift;
    }

    private static __$_countMask : number;
    static get _countMask() : number { 
        if (this.__$_countMask===undefined) {
            this.__$_countMask = 3;
        }
        return this.__$_countMask;
    }

    private static __$_sixBitMask : number;
    static get _sixBitMask() : number { 
        if (this.__$_sixBitMask===undefined) {
            this.__$_sixBitMask = 63;
        }
        return this.__$_sixBitMask;
    }

    _state : number;

    _alphabet : string;

    constructor(urlSafe : boolean) {
    }
    @defaultConstructor
    _Base64Encoder(urlSafe : boolean) {
        this._state = 0;
        this._alphabet = urlSafe ? _Base64Encoder._base64urlAlphabet : _Base64Encoder._base64Alphabet;
    }
    static _encodeState(count : number,bits : number) : number {
        /* TODO (AssertStatementImpl) : assert (count <= _countMask); */;
        return bits << _Base64Encoder._valueShift | count;
    }
    static _stateBits(state : number) : number {
        return state >> _Base64Encoder._valueShift;
    }
    static _stateCount(state : number) : number {
        return state & _Base64Encoder._countMask;
    }
    createBuffer(bufferLength : number) : typed_data.Uint8List {
        return new typed_data.Uint8List(bufferLength);
    }
    encode(bytes : core.DartList<number>,start : number,end : number,isLast : boolean) : typed_data.Uint8List {
        /* TODO (AssertStatementImpl) : assert (0 <= start); */;
        /* TODO (AssertStatementImpl) : assert (start <= end); */;
        /* TODO (AssertStatementImpl) : assert (bytes == null || end <= bytes.length); */;
        let length : number = end - start;
        let count : number = _Base64Encoder._stateCount(this._state);
        let byteCount : number = (count + length);
        let fullChunks : number = op(Op.QUOTIENT,byteCount,3);
        let partialChunkLength : number = byteCount - fullChunks * 3;
        let bufferLength : number = fullChunks * 4;
        if (isLast && partialChunkLength > 0) {
            bufferLength += 4;
        }
        let output = this.createBuffer(bufferLength);
        this._state = _Base64Encoder.encodeChunk(this._alphabet,bytes,start,end,isLast,output,0,this._state);
        if (bufferLength > 0) return output;
        return null;
    }
    static encodeChunk(alphabet : string,bytes : core.DartList<number>,start : number,end : number,isLast : boolean,output : typed_data.Uint8List,outputIndex : number,state : number) : number {
        let bits : number = _Base64Encoder._stateBits(state);
        let expectedChars : number = 3 - _Base64Encoder._stateCount(state);
        let byteOr : number = 0;
        for(let i : number = start; i < end; i++){
            let byte : number = bytes[i];
            byteOr |= byte;
            bits = ((bits << 8) | byte) & 16777215;
            expectedChars--;
            if (expectedChars == 0) {
                op(Op.INDEX_ASSIGN,output,outputIndex++,new core.DartString(alphabet).codeUnitAt((bits >> 18) & _Base64Encoder._sixBitMask));
                op(Op.INDEX_ASSIGN,output,outputIndex++,new core.DartString(alphabet).codeUnitAt((bits >> 12) & _Base64Encoder._sixBitMask));
                op(Op.INDEX_ASSIGN,output,outputIndex++,new core.DartString(alphabet).codeUnitAt((bits >> 6) & _Base64Encoder._sixBitMask));
                op(Op.INDEX_ASSIGN,output,outputIndex++,new core.DartString(alphabet).codeUnitAt(bits & _Base64Encoder._sixBitMask));
                expectedChars = 3;
                bits = 0;
            }
        }
        if (byteOr >= 0 && byteOr <= 255) {
            if (isLast && expectedChars < 3) {
                _Base64Encoder.writeFinalChunk(alphabet,output,outputIndex,3 - expectedChars,bits);
                return 0;
            }
            return _Base64Encoder._encodeState(3 - expectedChars,bits);
        }
        let i : number = start;
        while (i < end){
            let byte : number = bytes[i];
            if (byte < 0 || byte > 255) break;
            i++;
        }
        throw new core.ArgumentError.value(bytes,`Not a byte value at index ${i}: 0x${new core.DartInt(bytes[i]).toRadixString(16)}`);
    }
    static writeFinalChunk(alphabet : string,output : typed_data.Uint8List,outputIndex : number,count : number,bits : number) : void {
        /* TODO (AssertStatementImpl) : assert (count > 0); */;
        if (count == 1) {
            op(Op.INDEX_ASSIGN,output,outputIndex++,new core.DartString(alphabet).codeUnitAt((bits >> 2) & _Base64Encoder._sixBitMask));
            op(Op.INDEX_ASSIGN,output,outputIndex++,new core.DartString(alphabet).codeUnitAt((bits << 4) & _Base64Encoder._sixBitMask));
            op(Op.INDEX_ASSIGN,output,outputIndex++,properties._paddingChar);
            op(Op.INDEX_ASSIGN,output,outputIndex++,properties._paddingChar);
        }else {
            /* TODO (AssertStatementImpl) : assert (count == 2); */;
            op(Op.INDEX_ASSIGN,output,outputIndex++,new core.DartString(alphabet).codeUnitAt((bits >> 10) & _Base64Encoder._sixBitMask));
            op(Op.INDEX_ASSIGN,output,outputIndex++,new core.DartString(alphabet).codeUnitAt((bits >> 4) & _Base64Encoder._sixBitMask));
            op(Op.INDEX_ASSIGN,output,outputIndex++,new core.DartString(alphabet).codeUnitAt((bits << 2) & _Base64Encoder._sixBitMask));
            op(Op.INDEX_ASSIGN,output,outputIndex++,properties._paddingChar);
        }
    }
}

export namespace _Utf8Decoder {
    export type Constructors = '_Utf8Decoder';
    export type Interface = Omit<_Utf8Decoder, Constructors>;
}
@DartClass
export class _Utf8Decoder {
    _allowMalformed : boolean;

    _stringSink : core.DartStringSink;

    _isFirstCharacter : boolean;

    _value : number;

    _expectedUnits : number;

    _extraUnits : number;

    constructor(_stringSink : core.DartStringSink,_allowMalformed : boolean) {
    }
    @defaultConstructor
    _Utf8Decoder(_stringSink : core.DartStringSink,_allowMalformed : boolean) {
        this._isFirstCharacter = true;
        this._value = 0;
        this._expectedUnits = 0;
        this._extraUnits = 0;
        this._stringSink = _stringSink;
        this._allowMalformed = _allowMalformed;
    }
    get hasPartialInput() : boolean {
        return this._expectedUnits > 0;
    }
    private static __$_LIMITS : core.DartList<number>;
    static get _LIMITS() : core.DartList<number> { 
        if (this.__$_LIMITS===undefined) {
            this.__$_LIMITS = new core.DartList.literal<number>(properties._ONE_BYTE_LIMIT,properties._TWO_BYTE_LIMIT,properties._THREE_BYTE_LIMIT,properties._FOUR_BYTE_LIMIT);
        }
        return this.__$_LIMITS;
    }

    close() : void {
        this.flush();
    }
    flush(source? : core.DartList<number>,offset? : number) : void {
        if (this.hasPartialInput) {
            if (!this._allowMalformed) {
                throw new core.FormatException("Unfinished UTF-8 octet sequence",source,offset);
            }
            this._stringSink.writeCharCode(properties.UNICODE_REPLACEMENT_CHARACTER_RUNE);
            this._value = 0;
            this._expectedUnits = 0;
            this._extraUnits = 0;
        }
    }
    convert(codeUnits : core.DartList<number>,startIndex : number,endIndex : number) : void {
        let value : number = this._value;
        let expectedUnits : number = this._expectedUnits;
        let extraUnits : number = this._extraUnits;
        this._value = 0;
        this._expectedUnits = 0;
        this._extraUnits = 0;
        var scanOneByteCharacters : (units : any,from : number) => number = (units : any,from : number) : number =>  {
            let to = endIndex;
            let mask = properties._ONE_BYTE_LIMIT;
            for(let i = from; i < to; i++){
                let unit = op(Op.INDEX,units,i);
                if ((op(Op.BITAND,unit,mask)) != unit) return i - from;
            }
            return to - from;
        };
        var addSingleBytes : (from : number,to : number) => void = (from : number,to : number) : void =>  {
            /* TODO (AssertStatementImpl) : assert (from >= startIndex && from <= endIndex); */;
            /* TODO (AssertStatementImpl) : assert (to >= startIndex && to <= endIndex); */;
            this._stringSink.write(new core.DartString.fromCharCodes(codeUnits,from,to).valueOf());
        };
        let i : number = startIndex;
        loop:
            while (true){
                multibyte:
                    if (expectedUnits > 0) {
                        do{
                            if (i == endIndex) {
                                break;
                            }
                            let unit : number = codeUnits[i];
                            if ((unit & 192) != 128) {
                                expectedUnits = 0;
                                if (!this._allowMalformed) {
                                    throw new core.FormatException(`Bad UTF-8 encoding 0x${new core.DartInt(unit).toRadixString(16)}`,codeUnits,i);
                                }
                                this._isFirstCharacter = false;
                                this._stringSink.writeCharCode(properties.UNICODE_REPLACEMENT_CHARACTER_RUNE);
                                break;
                            }else {
                                value = (value << 6) | (unit & 63);
                                expectedUnits--;
                                i++;
                            }
                        } while (expectedUnits > 0);
                        if (value <= _Utf8Decoder._LIMITS[extraUnits - 1]) {
                            if (!this._allowMalformed) {
                                throw new core.FormatException(`Overlong encoding of 0x${new core.DartInt(value).toRadixString(16)}`,codeUnits,i - extraUnits - 1);
                            }
                            expectedUnits = extraUnits = 0;
                            value = properties.UNICODE_REPLACEMENT_CHARACTER_RUNE;
                        }
                        if (value > properties._FOUR_BYTE_LIMIT) {
                            if (!this._allowMalformed) {
                                throw new core.FormatException("Character outside valid Unicode range: " + `0x${new core.DartInt(value).toRadixString(16)}`,codeUnits,i - extraUnits - 1);
                            }
                            value = properties.UNICODE_REPLACEMENT_CHARACTER_RUNE;
                        }
                        if (!this._isFirstCharacter || value != properties.UNICODE_BOM_CHARACTER_RUNE) {
                            this._stringSink.writeCharCode(value);
                        }
                        this._isFirstCharacter = false;
                    };
                while (i < endIndex){
                    let oneBytes : number = scanOneByteCharacters(codeUnits,i);
                    if (oneBytes > 0) {
                        this._isFirstCharacter = false;
                        addSingleBytes(i,i + oneBytes);
                        i += oneBytes;
                        if (i == endIndex) break;
                    }
                    let unit : number = codeUnits[i++];
                    if (unit < 0) {
                        if (!this._allowMalformed) {
                            throw new core.FormatException(`Negative UTF-8 code unit: -0x${new core.DartInt((-unit)).toRadixString(16)}`,codeUnits,i - 1);
                        }
                        this._stringSink.writeCharCode(properties.UNICODE_REPLACEMENT_CHARACTER_RUNE);
                    }else {
                        /* TODO (AssertStatementImpl) : assert (unit > _ONE_BYTE_LIMIT); */;
                        if ((unit & 224) == 192) {
                            value = unit & 31;
                            expectedUnits = extraUnits = 1;
                            continue;
                        }
                        if ((unit & 240) == 224) {
                            value = unit & 15;
                            expectedUnits = extraUnits = 2;
                            continue;
                        }
                        if ((unit & 248) == 240 && unit < 245) {
                            value = unit & 7;
                            expectedUnits = extraUnits = 3;
                            continue;
                        }
                        if (!this._allowMalformed) {
                            throw new core.FormatException(`Bad UTF-8 encoding 0x${new core.DartInt(unit).toRadixString(16)}`,codeUnits,i - 1);
                        }
                        value = properties.UNICODE_REPLACEMENT_CHARACTER_RUNE;
                        expectedUnits = extraUnits = 0;
                        this._isFirstCharacter = false;
                        this._stringSink.writeCharCode(value);
                    }
                }
                break;
            };
        if (expectedUnits > 0) {
            this._value = value;
            this._expectedUnits = expectedUnits;
            this._extraUnits = extraUnits;
        }
    }
}

export namespace _StringConversionSinkAsStringSinkAdapter {
    export type Constructors = '_StringConversionSinkAsStringSinkAdapter';
    export type Interface = Omit<_StringConversionSinkAsStringSinkAdapter, Constructors>;
}
@DartClass
@Implements(ClosableStringSink)
export class _StringConversionSinkAsStringSinkAdapter implements ClosableStringSink.Interface {
    private static __$_MIN_STRING_SIZE;
    static get _MIN_STRING_SIZE() { 
        if (this.__$_MIN_STRING_SIZE===undefined) {
            this.__$_MIN_STRING_SIZE = 16;
        }
        return this.__$_MIN_STRING_SIZE;
    }

    _buffer : core.DartStringBuffer;

    _chunkedSink : StringConversionSink;

    constructor(_chunkedSink : StringConversionSink) {
    }
    @defaultConstructor
    _StringConversionSinkAsStringSinkAdapter(_chunkedSink : StringConversionSink) {
        this._buffer = new core.DartStringBuffer();
        this._chunkedSink = _chunkedSink;
    }
    close() : void {
        if (this._buffer.isNotEmpty) this._flush();
        this._chunkedSink.close();
    }
    writeCharCode(charCode : number) : void {
        this._buffer.writeCharCode(charCode);
        if (this._buffer.length > _StringConversionSinkAsStringSinkAdapter._MIN_STRING_SIZE) this._flush();
    }
    write(o : core.DartObject) : void {
        if (this._buffer.isNotEmpty) this._flush();
        this._chunkedSink.add(o.toString());
    }
    writeln(o? : core.DartObject) : void {
        o = o || "";
        this._buffer.writeln(o);
        if (this._buffer.length > _StringConversionSinkAsStringSinkAdapter._MIN_STRING_SIZE) this._flush();
    }
    writeAll(objects : core.DartIterable<any>,separator? : string) : void {
        separator = separator || "";
        if (this._buffer.isNotEmpty) this._flush();
        let iterator : core.DartIterator<any> = objects.iterator;
        if (!iterator.moveNext()) return;
        if (new core.DartString(separator).isEmpty) {
            do{
                this._chunkedSink.add(iterator.current.toString());
            } while (iterator.moveNext());
        }else {
            this._chunkedSink.add(iterator.current.toString());
            while (iterator.moveNext()){
                this.write(separator);
                this._chunkedSink.add(iterator.current.toString());
            }
        }
    }
    _flush() : void {
        let accumulated : string = this._buffer.toString();
        this._buffer.clear();
        this._chunkedSink.add(accumulated);
    }
}

export namespace JsonUnsupportedObjectError {
    export type Constructors = core.DartError.Constructors | 'JsonUnsupportedObjectError';
    export type Interface = Omit<JsonUnsupportedObjectError, Constructors>;
}
@DartClass
export class JsonUnsupportedObjectError extends core.DartError {
    unsupportedObject;

    cause;

    constructor(unsupportedObject : any,_namedArguments? : {cause? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    JsonUnsupportedObjectError(unsupportedObject : any,_namedArguments? : {cause? : any}) {
        let {cause} = Object.assign({
        }, _namedArguments );
        this.unsupportedObject = unsupportedObject;
        this.cause = cause;
    }
    toString() : string {
        if (this.cause != null) {
            return "Converting object to an encodable object failed.";
        }else {
            return "Converting object did not return an encodable object.";
        }
    }
}

export namespace _FusedConverter {
    export type Constructors = Converter.Constructors | '_FusedConverter';
    export type Interface<S,M,T> = Omit<_FusedConverter<S,M,T>, Constructors>;
}
@DartClass
export class _FusedConverter<S,M,T> extends Converter<S,T> {
    _first : Converter<S,M>;

    _second : Converter<M,T>;

    constructor(_first : Converter<S,M>,_second : Converter<M,T>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _FusedConverter(_first : Converter<S,M>,_second : Converter<M,T>) {
        this._first = _first;
        this._second = _second;
    }
    convert(input : S) : T {
        return this._second.convert(this._first.convert(input));
    }
    startChunkedConversion(sink : core.DartSink<any>) : core.DartSink<any> {
        return this._first.startChunkedConversion(this._second.startChunkedConversion(sink));
    }
}

export namespace JsonUtf8Encoder {
    export type Constructors = Converter.Constructors | 'JsonUtf8Encoder';
    export type Interface = Omit<JsonUtf8Encoder, Constructors>;
}
@DartClass
export class JsonUtf8Encoder extends Converter<core.DartObject,core.DartList<number>> {
    private static __$DEFAULT_BUFFER_SIZE : number;
    static get DEFAULT_BUFFER_SIZE() : number { 
        if (this.__$DEFAULT_BUFFER_SIZE===undefined) {
            this.__$DEFAULT_BUFFER_SIZE = 256;
        }
        return this.__$DEFAULT_BUFFER_SIZE;
    }

    _indent : core.DartList<number>;

    _toEncodable : (o : any) => any;

    _bufferSize : number;

    constructor(indent? : string,toEncodable? : (object : any) => any,bufferSize? : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    JsonUtf8Encoder(indent? : string,toEncodable? : (object : any) => any,bufferSize? : number) {
        bufferSize = bufferSize || JsonUtf8Encoder.DEFAULT_BUFFER_SIZE;
        this._indent = JsonUtf8Encoder._utf8Encode(indent);
        this._toEncodable = toEncodable;
        this._bufferSize = bufferSize;
    }
    static _utf8Encode(string : string) : core.DartList<number> {
        if (string == null) return null;
        if (new core.DartString(string).isEmpty) return new typed_data.Uint8List(0);
        checkAscii:
            {
                for(let i : number = 0; i < new core.DartString(string).length; i++){
                    if (new core.DartString(string).codeUnitAt(i) >= 128) break;
                }
                return new core.DartString(string).codeUnits;
            };
        return properties.UTF8.encode(string);
    }
    convert(object : core.DartObject) : core.DartList<number> {
        let bytes : core.DartList<core.DartList<number>> = new core.DartList.literal();
        var addChunk : (chunk : typed_data.Uint8List,start : number,end : number) => void = (chunk : typed_data.Uint8List,start : number,end : number) : void =>  {
            if (start > 0 || end < chunk.length) {
                let length : number = end - start;
                chunk = new typed_data.Uint8List.view(chunk.buffer,chunk.offsetInBytes + start,length);
            }
            bytes.add(chunk);
        };
        _JsonUtf8Stringifier.stringify(object,this._indent,this._toEncodable,this._bufferSize,addChunk);
        if (bytes.length == 1) return bytes[0];
        let length : number = 0;
        for(let i : number = 0; i < bytes.length; i++){
            length += bytes[i].length;
        }
        let result : typed_data.Uint8List = new typed_data.Uint8List(length);
        for(let i : number = 0, offset : number = 0; i < bytes.length; i++){
            let byteList = bytes[i];
            let end : number = offset + byteList.length;
            result.setRange(offset,end,byteList);
            offset = end;
        }
        return result;
    }
    startChunkedConversion(sink : core.DartSink<core.DartList<number>>) : ChunkedConversionSink<core.DartObject> {
        let byteSink : ByteConversionSink;
        if (is(sink, ByteConversionSink)) {
            byteSink = sink;
        }else {
            byteSink = new ByteConversionSink.from(sink);
        }
        return new _JsonUtf8EncoderSink(byteSink,this._toEncodable,this._indent,this._bufferSize);
    }
    bind(stream : async.DartStream<core.DartObject>) : async.DartStream<core.DartList<number>> {
        return super.bind(stream);
    }
}

export namespace _JsonEncoderSink {
    export type Constructors = ChunkedConversionSink.Constructors | '_JsonEncoderSink';
    export type Interface = Omit<_JsonEncoderSink, Constructors>;
}
@DartClass
export class _JsonEncoderSink extends ChunkedConversionSink<core.DartObject> {
    _indent : string;

    _toEncodable : (o : any) => any;

    _sink : StringConversionSink;

    _isDone : boolean;

    constructor(_sink : StringConversionSink,_toEncodable : (o : any) => any,_indent : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _JsonEncoderSink(_sink : StringConversionSink,_toEncodable : (o : any) => any,_indent : string) {
        this._isDone = false;
        this._sink = _sink;
        this._toEncodable = _toEncodable;
        this._indent = _indent;
    }
    add(o : core.DartObject) : void {
        if (this._isDone) {
            throw new core.StateError("Only one call to add allowed");
        }
        this._isDone = true;
        let stringSink : ClosableStringSink = this._sink.asStringSink();
        _JsonStringStringifier.printOn(o,stringSink,this._toEncodable,this._indent);
        stringSink.close();
    }
    close() : void {
    }
}

export namespace _JsonUtf8EncoderSink {
    export type Constructors = ChunkedConversionSink.Constructors | '_JsonUtf8EncoderSink';
    export type Interface = Omit<_JsonUtf8EncoderSink, Constructors>;
}
@DartClass
export class _JsonUtf8EncoderSink extends ChunkedConversionSink<core.DartObject> {
    _sink : ByteConversionSink;

    _indent : core.DartList<number>;

    _toEncodable : (o : any) => any;

    _bufferSize : number;

    _isDone : boolean;

    constructor(_sink : ByteConversionSink,_toEncodable : (o : any) => any,_indent : core.DartList<number>,_bufferSize : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _JsonUtf8EncoderSink(_sink : ByteConversionSink,_toEncodable : (o : any) => any,_indent : core.DartList<number>,_bufferSize : number) {
        this._isDone = false;
        this._sink = _sink;
        this._toEncodable = _toEncodable;
        this._indent = _indent;
        this._bufferSize = _bufferSize;
    }
    _addChunk(chunk : typed_data.Uint8List,start : number,end : number) : void {
        this._sink.addSlice(chunk,start,end,false);
    }
    add(object : core.DartObject) : void {
        if (this._isDone) {
            throw new core.StateError("Only one call to add allowed");
        }
        this._isDone = true;
        _JsonUtf8Stringifier.stringify(object,this._indent,this._toEncodable,this._bufferSize,this._addChunk.bind(this));
        this._sink.close();
    }
    close() : void {
        if (!this._isDone) {
            this._isDone = true;
            this._sink.close();
        }
    }
}

export namespace JsonDecoder {
    export type Constructors = Converter.Constructors | 'JsonDecoder';
    export type Interface = Omit<JsonDecoder, Constructors>;
}
@DartClass
export class JsonDecoder extends Converter<string,core.DartObject> {
    _reviver : (key : any,value : any) => any;

    constructor(reviver? : (key : any,value : any) => any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    JsonDecoder(reviver? : (key : any,value : any) => any) {
        this._reviver = reviver;
    }
    convert(input : string) : any {
        return _parseJson(input,this._reviver);
    }
    startChunkedConversion(sink : core.DartSink<core.DartObject>) : StringConversionSink {
    }
    bind(stream : async.DartStream<string>) : async.DartStream<core.DartObject> {
        return super.bind(stream);
    }
}

export namespace _UnicodeSubsetDecoder {
    export type Constructors = Converter.Constructors | '_UnicodeSubsetDecoder';
    export type Interface = Omit<_UnicodeSubsetDecoder, Constructors>;
}
@DartClass
export class _UnicodeSubsetDecoder extends Converter<core.DartList<number>,string> {
    _allowInvalid : boolean;

    _subsetMask : number;

    constructor(_allowInvalid : boolean,_subsetMask : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _UnicodeSubsetDecoder(_allowInvalid : boolean,_subsetMask : number) {
        this._allowInvalid = _allowInvalid;
        this._subsetMask = _subsetMask;
    }
    convert(bytes : core.DartList<number>,start? : number,end? : number) : string {
        start = start || 0;
        let byteCount : number = bytes.length;
        core.RangeError.checkValidRange(start,end,byteCount);
        if (end == null) end = byteCount;
        for(let i : number = start; i < end; i++){
            let byte : number = bytes[i];
            if ((byte & ~this._subsetMask) != 0) {
                if (!this._allowInvalid) {
                    throw new core.FormatException(`Invalid value in input: ${byte}`);
                }
                return this._convertInvalid(bytes,start,end);
            }
        }
        return new core.DartString.fromCharCodes(bytes,start,end).valueOf();
    }
    _convertInvalid(bytes : core.DartList<number>,start : number,end : number) : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        for(let i : number = start; i < end; i++){
            let value : number = bytes[i];
            if ((value & ~this._subsetMask) != 0) value = 65533;
            buffer.writeCharCode(value);
        }
        return buffer.toString();
    }
    @Abstract
    startChunkedConversion(sink : core.DartSink<string>) : ByteConversionSink{ throw 'abstract'}
    bind(stream : async.DartStream<core.DartList<number>>) : async.DartStream<string> {
        return super.bind(stream);
    }
}

export namespace _BufferCachingBase64Encoder {
    export type Constructors = _Base64Encoder.Constructors | '_BufferCachingBase64Encoder';
    export type Interface = Omit<_BufferCachingBase64Encoder, Constructors>;
}
@DartClass
export class _BufferCachingBase64Encoder extends _Base64Encoder {
    bufferCache : typed_data.Uint8List;

    constructor(urlSafe : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _BufferCachingBase64Encoder(urlSafe : boolean) {
        super._Base64Encoder(urlSafe);
    }
    createBuffer(bufferLength : number) : typed_data.Uint8List {
        if (op(Op.EQUALS,this.bufferCache,null) || this.bufferCache.length < bufferLength) {
            this.bufferCache = new typed_data.Uint8List(bufferLength);
        }
        return new typed_data.Uint8List.view(this.bufferCache.buffer,0,bufferLength);
    }
}

export namespace Base64Codec {
    export type Constructors = Codec.Constructors | 'Base64Codec' | 'urlSafe';
    export type Interface = Omit<Base64Codec, Constructors>;
}
@DartClass
export class Base64Codec extends Codec<core.DartList<number>,string> {
    _encoder : Base64Encoder;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Base64Codec() {
        this._encoder = new Base64Encoder();
    }
    @namedConstructor
    urlSafe() {
        this._encoder = new Base64Encoder.urlSafe();
    }
    static urlSafe : new() => Base64Codec;

    get encoder() : Base64Encoder {
        return this._encoder;
    }
    get decoder() : Base64Decoder {
        return new Base64Decoder();
    }
    normalize(source : string,start? : number,end? : number) : string {
        start = start || 0;
        end = core.RangeError.checkValidRange(start,end,new core.DartString(source).length);
        let percent : number = 37;
        let equals : number = 61;
        let buffer : core.DartStringBuffer = null;
        let sliceStart : number = start;
        let alphabet = _Base64Encoder._base64Alphabet;
        let inverseAlphabet = _Base64Decoder._inverseAlphabet;
        let firstPadding : number = -1;
        let firstPaddingSourceIndex : number = -1;
        let paddingCount : number = 0;
        for(let i : number = start; i < end; ){
            let sliceEnd : number = i;
            let char : number = new core.DartString(source).codeUnitAt(i++);
            let originalChar : number = char;
            if (char == percent) {
                if (i + 2 <= end) {
                    char = _internal.parseHexByte(source,i);
                    i += 2;
                    if (char == percent) char = -1;
                }else {
                    char = -1;
                }
            }
            if (0 <= char && char <= 127) {
                let value : number = inverseAlphabet[char];
                if (value >= 0) {
                    char = new core.DartString(alphabet).codeUnitAt(value);
                    if (char == originalChar) continue;
                }else if (value == _Base64Decoder._padding) {
                    if (firstPadding < 0) {
                        firstPadding = ((((t)=>(!!t)?t.length:null)(buffer) || 0)) + (sliceEnd - sliceStart);
                        firstPaddingSourceIndex = sliceEnd;
                    }
                    paddingCount++;
                    if (originalChar == equals) continue;
                }
                if (value != _Base64Decoder._invalid) {
                    buffer = ( buffer ) || ( new core.DartStringBuffer() );
                    buffer.write(new core.DartString(source).substring(sliceStart,sliceEnd));
                    buffer.writeCharCode(char);
                    sliceStart = i;
                    continue;
                }
            }
            throw new core.FormatException("Invalid base64 data",source,sliceEnd);
        }
        if (buffer != null) {
            buffer.write(new core.DartString(source).substring(sliceStart,end));
            if (firstPadding >= 0) {
                Base64Codec._checkPadding(source,firstPaddingSourceIndex,end,firstPadding,paddingCount,buffer.length);
            }else {
                let endLength : number = ((buffer.length - 1) % 4) + 1;
                if (endLength == 1) {
                    throw new core.FormatException("Invalid base64 encoding length ",source,end);
                }
                while (endLength < 4){
                    buffer.write("=");
                    endLength++;
                }
            }
            return new core.DartString(source).replaceRange(start,end,buffer.toString());
        }
        let length : number = end - start;
        if (firstPadding >= 0) {
            Base64Codec._checkPadding(source,firstPaddingSourceIndex,end,firstPadding,paddingCount,length);
        }else {
            let endLength : number = length % 4;
            if (endLength == 1) {
                throw new core.FormatException("Invalid base64 encoding length ",source,end);
            }
            if (endLength > 1) {
                source = new core.DartString(source).replaceRange(end,end,(endLength == 2) ? "==" : "=");
            }
        }
        return source;
    }
    static _checkPadding(source : string,sourceIndex : number,sourceEnd : number,firstPadding : number,paddingCount : number,length : number) : number {
        if (length % 4 != 0) {
            throw new core.FormatException("Invalid base64 padding, padded length must be multiple of four, " + `is ${length}`,source,sourceEnd);
        }
        if (firstPadding + paddingCount != length) {
            throw new core.FormatException("Invalid base64 padding, '=' not at the end",source,sourceIndex);
        }
        if (paddingCount > 2) {
            throw new core.FormatException("Invalid base64 padding, more than two '=' characters",source,sourceIndex);
        }
    }
}

export namespace _FusedCodec {
    export type Constructors = Codec.Constructors | '_FusedCodec';
    export type Interface<S,M,T> = Omit<_FusedCodec<S,M,T>, Constructors>;
}
@DartClass
export class _FusedCodec<S,M,T> extends Codec<S,T> {
    _first : Codec<S,M>;

    _second : Codec<M,T>;

    get encoder() : Converter<S,T> {
        return this._first.encoder.fuse(this._second.encoder);
    }
    get decoder() : Converter<T,S> {
        return this._second.decoder.fuse(this._first.decoder);
    }
    constructor(_first : Codec<S,M>,_second : Codec<M,T>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _FusedCodec(_first : Codec<S,M>,_second : Codec<M,T>) {
        this._first = _first;
        this._second = _second;
    }
}

export namespace _JsonStringStringifier {
    export type Constructors = _JsonStringifier.Constructors | '_JsonStringStringifier';
    export type Interface = Omit<_JsonStringStringifier, Constructors>;
}
@DartClass
export class _JsonStringStringifier extends _JsonStringifier {
    _sink : core.DartStringSink;

    constructor(_sink : core.DartStringSink,_toEncodable : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _JsonStringStringifier(_sink : core.DartStringSink,_toEncodable : any) {
        super._JsonStringifier(_toEncodable);
        this._sink = _sink;
    }
    static stringify(object : any,toEncodable : (o : any) => any,indent : string) : string {
        let output : core.DartStringBuffer = new core.DartStringBuffer();
        _JsonStringStringifier.printOn(object,output,toEncodable,indent);
        return output.toString();
    }
    static printOn(object : any,output : core.DartStringSink,toEncodable : (o : any) => any,indent : string) : void {
        let stringifier;
        if (indent == null) {
            stringifier = new _JsonStringStringifier(output,toEncodable);
        }else {
            stringifier = new _JsonStringStringifierPretty(output,toEncodable,indent);
        }
        stringifier.writeObject(object);
    }
    writeNumber(number : number) : void {
        this._sink.write(new core.DartNumber(number).toString());
    }
    writeString(string : string) : void {
        this._sink.write(string);
    }
    writeStringSlice(string : string,start : number,end : number) : void {
        this._sink.write(new core.DartString(string).substring(start,end));
    }
    writeCharCode(charCode : number) : void {
        this._sink.writeCharCode(charCode);
    }
}

export namespace _InvertedCodec {
    export type Constructors = Codec.Constructors | '_InvertedCodec';
    export type Interface<T,S> = Omit<_InvertedCodec<T,S>, Constructors>;
}
@DartClass
export class _InvertedCodec<T,S> extends Codec<T,S> {
    _codec : Codec<S,T>;

    constructor(codec : Codec<S,T>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _InvertedCodec(codec : Codec<S,T>) {
        this._codec = codec;
    }
    get encoder() : Converter<T,S> {
        return this._codec.decoder;
    }
    get decoder() : Converter<S,T> {
        return this._codec.encoder;
    }
    get inverted() : Codec<S,T> {
        return this._codec;
    }
}

export namespace _JsonUtf8Stringifier {
    export type Constructors = _JsonStringifier.Constructors | '_JsonUtf8Stringifier';
    export type Interface = Omit<_JsonUtf8Stringifier, Constructors>;
}
@DartClass
export class _JsonUtf8Stringifier extends _JsonStringifier {
    bufferSize : number;

    addChunk : (list : typed_data.Uint8List,start : number,end : number) => void;

    buffer : typed_data.Uint8List;

    index : number;

    constructor(toEncodable : (o : any) => any,bufferSize : number,addChunk : (list : typed_data.Uint8List,start : number,end : number) => void) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _JsonUtf8Stringifier(toEncodable : (o : any) => any,bufferSize : number,addChunk : (list : typed_data.Uint8List,start : number,end : number) => void) {
        this.index = 0;
        this.bufferSize = bufferSize;
        this.buffer = new typed_data.Uint8List(bufferSize);
        super._JsonStringifier(toEncodable);
        this.addChunk = addChunk;
    }
    static stringify(object : core.DartObject,indent : core.DartList<number>,toEncodable : (o : any) => any,bufferSize : number,addChunk : (chunk : typed_data.Uint8List,start : number,end : number) => void) : void {
        let stringifier : _JsonUtf8Stringifier;
        if (indent != null) {
            stringifier = new _JsonUtf8StringifierPretty(toEncodable,indent,bufferSize,addChunk);
        }else {
            stringifier = new _JsonUtf8Stringifier(toEncodable,bufferSize,addChunk);
        }
        stringifier.writeObject(object);
        stringifier.flush();
    }
    flush() : void {
        if (this.index > 0) {
            this.addChunk(this.buffer,0,this.index);
        }
        this.buffer = null;
        this.index = 0;
    }
    writeNumber(number : number) : void {
        this.writeAsciiString(new core.DartNumber(number).toString());
    }
    writeAsciiString(string : string) : void {
        for(let i : number = 0; i < new core.DartString(string).length; i++){
            let char : number = new core.DartString(string).codeUnitAt(i);
            /* TODO (AssertStatementImpl) : assert (char <= 0x7f); */;
            this.writeByte(char);
        }
    }
    writeString(string : string) : void {
        this.writeStringSlice(string,0,new core.DartString(string).length);
    }
    writeStringSlice(string : string,start : number,end : number) : void {
        for(let i : number = start; i < end; i++){
            let char : number = new core.DartString(string).codeUnitAt(i);
            if (char <= 127) {
                this.writeByte(char);
            }else {
                if ((char & 64512) == 55296 && i + 1 < end) {
                    let nextChar : number = new core.DartString(string).codeUnitAt(i + 1);
                    if ((nextChar & 64512) == 56320) {
                        char = 65536 + ((char & 1023) << 10) + (nextChar & 1023);
                        this.writeFourByteCharCode(char);
                        i++;
                        continue;
                    }
                }
                this.writeMultiByteCharCode(char);
            }
        }
    }
    writeCharCode(charCode : number) : void {
        if (charCode <= 127) {
            this.writeByte(charCode);
            return;
        }
        this.writeMultiByteCharCode(charCode);
    }
    writeMultiByteCharCode(charCode : number) : void {
        if (charCode <= 2047) {
            this.writeByte(192 | (charCode >> 6));
            this.writeByte(128 | (charCode & 63));
            return;
        }
        if (charCode <= 65535) {
            this.writeByte(224 | (charCode >> 12));
            this.writeByte(128 | ((charCode >> 6) & 63));
            this.writeByte(128 | (charCode & 63));
            return;
        }
        this.writeFourByteCharCode(charCode);
    }
    writeFourByteCharCode(charCode : number) : void {
        /* TODO (AssertStatementImpl) : assert (charCode <= 0x10ffff); */;
        this.writeByte(240 | (charCode >> 18));
        this.writeByte(128 | ((charCode >> 12) & 63));
        this.writeByte(128 | ((charCode >> 6) & 63));
        this.writeByte(128 | (charCode & 63));
    }
    writeByte(byte : number) : void {
        /* TODO (AssertStatementImpl) : assert (byte <= 0xff); */;
        if (this.index == this.buffer.length) {
            this.addChunk(this.buffer,0,this.index);
            this.buffer = new typed_data.Uint8List(this.bufferSize);
            this.index = 0;
        }
        op(Op.INDEX_ASSIGN,this.buffer,this.index++,byte);
    }
}

export namespace Utf8Encoder {
    export type Constructors = Converter.Constructors | 'Utf8Encoder';
    export type Interface = Omit<Utf8Encoder, Constructors>;
}
@DartClass
export class Utf8Encoder extends Converter<string,core.DartList<number>> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Utf8Encoder() {
    }
    convert(string : string,start? : number,end? : number) : core.DartList<number> {
        start = start || 0;
        let stringLength : number = new core.DartString(string).length;
        core.RangeError.checkValidRange(start,end,stringLength);
        if (end == null) end = stringLength;
        let length : number = end - start;
        if (length == 0) return new typed_data.Uint8List(0);
        let encoder : _Utf8Encoder = new _Utf8Encoder.withBufferSize(length * 3);
        let endPosition : number = encoder._fillBuffer(string,start,end);
        /* TODO (AssertStatementImpl) : assert (endPosition >= end - 1); */;
        if (endPosition != end) {
            let lastCodeUnit : number = new core.DartString(string).codeUnitAt(end - 1);
            /* TODO (AssertStatementImpl) : assert (_isLeadSurrogate(lastCodeUnit)); */;
            let wasCombined : boolean = encoder._writeSurrogate(lastCodeUnit,0);
            /* TODO (AssertStatementImpl) : assert (!wasCombined); */;
        }
        return encoder._buffer.sublist(0,encoder._bufferIndex);
    }
    startChunkedConversion(sink : core.DartSink<core.DartList<number>>) : StringConversionSink {
        if (isNot(sink, ByteConversionSink)) {
            sink = new ByteConversionSink.from(sink);
        }
        return new _Utf8EncoderSink(sink);
    }
    bind(stream : async.DartStream<string>) : async.DartStream<core.DartList<number>> {
        return super.bind(stream);
    }
}

export namespace ByteConversionSink {
    export type Constructors = ChunkedConversionSink.Constructors | 'ByteConversionSink';
    export type Interface = Omit<ByteConversionSink, Constructors>;
}
@DartClass
export class ByteConversionSink extends ChunkedConversionSink<core.DartList<number>> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ByteConversionSink() {
    }
    @namedFactory
    static $withCallback(callback : (accumulated : core.DartList<number>) => void) : ByteConversionSink {
        return new _ByteCallbackSink(callback);
    }
    static withCallback : new(callback : (accumulated : core.DartList<number>) => void) => ByteConversionSink;

    @namedFactory
    static $from(sink : core.DartSink<core.DartList<number>>) : ByteConversionSink {
        return new _ByteAdapterSink(sink);
    }
    static from : new(sink : core.DartSink<core.DartList<number>>) => ByteConversionSink;

    @Abstract
    addSlice(chunk : core.DartList<number>,start : number,end : number,isLast : boolean) : void{ throw 'abstract'}
}

export namespace Base64Encoder {
    export type Constructors = Converter.Constructors | 'Base64Encoder' | 'urlSafe';
    export type Interface = Omit<Base64Encoder, Constructors>;
}
@DartClass
export class Base64Encoder extends Converter<core.DartList<number>,string> {
    _urlSafe : boolean;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Base64Encoder() {
        this._urlSafe = false;
    }
    @namedConstructor
    urlSafe() {
        this._urlSafe = true;
    }
    static urlSafe : new() => Base64Encoder;

    convert(input : core.DartList<number>) : string {
        if (input.isEmpty) return "";
        let encoder = new _Base64Encoder(this._urlSafe);
        let buffer : typed_data.Uint8List = encoder.encode(input,0,input.length,true);
        return new core.DartString.fromCharCodes(buffer).valueOf();
    }
    startChunkedConversion(sink : core.DartSink<string>) : ByteConversionSink {
        if (is(sink, StringConversionSink)) {
            return new _Utf8Base64EncoderSink(sink.asUtf8Sink(false),this._urlSafe);
        }
        return new _AsciiBase64EncoderSink(sink,this._urlSafe);
    }
}

export namespace Encoding {
    export type Constructors = Codec.Constructors | 'Encoding';
    export type Interface = Omit<Encoding, Constructors>;
}
@DartClass
export class Encoding extends Codec<string,core.DartList<number>> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Encoding() {
    }
    @AbstractProperty
    get encoder() : Converter<string,core.DartList<number>>{ throw 'abstract'}
    @AbstractProperty
    get decoder() : Converter<core.DartList<number>,string>{ throw 'abstract'}
    decodeStream(byteStream : async.DartStream<core.DartList<number>>) : async.Future<string> {
        return byteStream.transform(this.decoder).fold(new core.DartStringBuffer(),(buffer : any,string : any) =>  {
            return ((_) : any =>  {
                {
                    write(string);
                    return _;
                }
            })(buffer);
        }).then((buffer : any) =>  {
            return buffer.toString();
        });
    }
    @AbstractProperty
    get name() : string{ throw 'abstract'}
    private static __$_nameToEncoding : core.DartMap<string,Encoding>;
    static get _nameToEncoding() : core.DartMap<string,Encoding> { 
        if (this.__$_nameToEncoding===undefined) {
            this.__$_nameToEncoding = new core.DartMap.literal([
                ["iso_8859-1:1987",properties.LATIN1],
                ["iso-ir-100",properties.LATIN1],
                ["iso_8859-1",properties.LATIN1],
                ["iso-8859-1",properties.LATIN1],
                ["latin1",properties.LATIN1],
                ["l1",properties.LATIN1],
                ["ibm819",properties.LATIN1],
                ["cp819",properties.LATIN1],
                ["csisolatin1",properties.LATIN1],
                ["iso-ir-6",properties.ASCII],
                ["ansi_x3.4-1968",properties.ASCII],
                ["ansi_x3.4-1986",properties.ASCII],
                ["iso_646.irv:1991",properties.ASCII],
                ["iso646-us",properties.ASCII],
                ["us-ascii",properties.ASCII],
                ["us",properties.ASCII],
                ["ibm367",properties.ASCII],
                ["cp367",properties.ASCII],
                ["csascii",properties.ASCII],
                ["ascii",properties.ASCII],
                ["csutf8",properties.UTF8],
                ["utf-8",properties.UTF8]]);
        }
        return this.__$_nameToEncoding;
    }
    static set _nameToEncoding(__$value : core.DartMap<string,Encoding>)  { 
        this.__$_nameToEncoding = __$value;
    }

    static getByName(name : string) : Encoding {
        if (name == null) return null;
        name = new core.DartString(name).toLowerCase();
        return Encoding._nameToEncoding.get(name);
    }
}

export namespace _UnicodeSubsetEncoder {
    export type Constructors = Converter.Constructors | '_UnicodeSubsetEncoder';
    export type Interface = Omit<_UnicodeSubsetEncoder, Constructors>;
}
@DartClass
export class _UnicodeSubsetEncoder extends Converter<string,core.DartList<number>> {
    _subsetMask : number;

    constructor(_subsetMask : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _UnicodeSubsetEncoder(_subsetMask : number) {
        this._subsetMask = _subsetMask;
    }
    convert(string : string,start? : number,end? : number) : core.DartList<number> {
        start = start || 0;
        let stringLength : number = new core.DartString(string).length;
        core.RangeError.checkValidRange(start,end,stringLength);
        if (end == null) end = stringLength;
        let length : number = end - start;
        let result : core.DartList<number> = new typed_data.Uint8List(length);
        for(let i : number = 0; i < length; i++){
            let codeUnit = new core.DartString(string).codeUnitAt(start + i);
            if ((codeUnit & ~this._subsetMask) != 0) {
                throw new core.ArgumentError("String contains invalid characters.");
            }
            op(Op.INDEX_ASSIGN,result,i,codeUnit);
        }
        return result;
    }
    startChunkedConversion(sink : core.DartSink<core.DartList<number>>) : StringConversionSink {
        if (isNot(sink, ByteConversionSink)) {
            sink = new ByteConversionSink.from(sink);
        }
        return new _UnicodeSubsetEncoderSink(this._subsetMask,sink);
    }
    bind(stream : async.DartStream<string>) : async.DartStream<core.DartList<number>> {
        return super.bind(stream);
    }
}

export namespace Utf8Decoder {
    export type Constructors = Converter.Constructors | 'Utf8Decoder';
    export type Interface = Omit<Utf8Decoder, Constructors>;
}
@DartClass
export class Utf8Decoder extends Converter<core.DartList<number>,string> {
    _allowMalformed : boolean;

    constructor(_namedArguments? : {allowMalformed? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Utf8Decoder(_namedArguments? : {allowMalformed? : boolean}) {
        let {allowMalformed} = Object.assign({
            "allowMalformed" : false}, _namedArguments );
        this._allowMalformed = allowMalformed;
    }
    convert(codeUnits : core.DartList<number>,start? : number,end? : number) : string {
        start = start || 0;
        let result : string = Utf8Decoder._convertIntercepted(this._allowMalformed,codeUnits,start,end);
        if (result != null) {
            return result;
        }
        let length : number = codeUnits.length;
        core.RangeError.checkValidRange(start,end,length);
        if (end == null) end = length;
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        let decoder : _Utf8Decoder = new _Utf8Decoder(buffer,this._allowMalformed);
        decoder.convert(codeUnits,start,end);
        decoder.flush(codeUnits,end);
        return buffer.toString();
    }
    startChunkedConversion(sink : core.DartSink<string>) : ByteConversionSink {
        let stringSink : StringConversionSink;
        if (is(sink, StringConversionSink)) {
            stringSink = sink;
        }else {
            stringSink = new StringConversionSink.from(sink);
        }
        return stringSink.asUtf8Sink(this._allowMalformed);
    }
    bind(stream : async.DartStream<core.DartList<number>>) : async.DartStream<string> {
        return super.bind(stream);
    }
    fuse<T>(next : Converter<string,T>) : Converter<core.DartList<number>,T> {
    }
    static _convertIntercepted(allowMalformed : boolean,codeUnits : core.DartList<number>,start : number,end : number) : string {
    }
}

export namespace HtmlEscape {
    export type Constructors = Converter.Constructors | 'HtmlEscape';
    export type Interface = Omit<HtmlEscape, Constructors>;
}
@DartClass
export class HtmlEscape extends Converter<string,string> {
    mode : HtmlEscapeMode;

    constructor(mode? : HtmlEscapeMode) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    HtmlEscape(mode? : HtmlEscapeMode) {
        mode = mode || HtmlEscapeMode.UNKNOWN;
        this.mode = mode;
    }
    convert(text : string) : string {
        let val = this._convert(text,0,new core.DartString(text).length);
        return val == null ? text : val;
    }
    _convert(text : string,start : number,end : number) : string {
        let result : core.DartStringBuffer = null;
        for(let i : number = start; i < end; i++){
            let ch = text[i];
            let replacement : string = null;
            switch (ch) {
                case '&':
                    replacement = '&amp;';
                    break;
                case '"':
                    if (this.mode.escapeQuot) replacement = '&quot;';
                    break;
                case "'":
                    if (this.mode.escapeApos) replacement = '&#39;';
                    break;
                case '<':
                    if (this.mode.escapeLtGt) replacement = '&lt;';
                    break;
                case '>':
                    if (this.mode.escapeLtGt) replacement = '&gt;';
                    break;
                case '/':
                    if (this.mode.escapeSlash) replacement = '&#47;';
                    break;
            }
            if (replacement != null) {
                if (op(Op.EQUALS,result,null)) result = new core.DartStringBuffer();
                if (i > start) result.write(new core.DartString(text).substring(start,i));
                result.write(replacement);
                start = i + 1;
            }
        }
        if (op(Op.EQUALS,result,null)) return null;
        if (end > start) result.write(new core.DartString(text).substring(start,end));
        return result.toString();
    }
    startChunkedConversion(sink : core.DartSink<string>) : StringConversionSink {
        if (isNot(sink, StringConversionSink)) {
            sink = new StringConversionSink.from(sink);
        }
        return new _HtmlEscapeSink(this,sink);
    }
}

export namespace StringConversionSinkBase {
    export type Constructors = StringConversionSinkMixin.Constructors | 'StringConversionSinkBase';
    export type Interface = Omit<StringConversionSinkBase, Constructors>;
}
@DartClass
export class StringConversionSinkBase extends StringConversionSinkMixin {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StringConversionSinkBase() {
    }
}

export namespace _Utf8EncoderSink {
    export type Constructors = _Utf8Encoder.Constructors | '_Utf8EncoderSink';
    export type Interface = Omit<_Utf8EncoderSink, Constructors>;
}
@DartClass
@With(StringConversionSinkMixin)
export class _Utf8EncoderSink extends _Utf8Encoder implements StringConversionSinkMixin.Interface {
    @Abstract
    add(str : string) : void {
        throw 'from mixin';
    }
    @Abstract
    asUtf8Sink(allowMalformed : boolean) : ByteConversionSink {
        throw 'from mixin';
    }
    @Abstract
    asStringSink() : ClosableStringSink {
        throw 'from mixin';
    }
    _sink : ByteConversionSink;

    constructor(_sink : ByteConversionSink) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _Utf8EncoderSink(_sink : ByteConversionSink) {
        this._sink = _sink;
    }
    close() : void {
        if (this._carry != 0) {
            this.addSlice("",0,0,true);
            return;
        }
        this._sink.close();
    }
    addSlice(str : string,start : number,end : number,isLast : boolean) : void {
        this._bufferIndex = 0;
        if (start == end && !isLast) {
            return;
        }
        if (this._carry != 0) {
            let nextCodeUnit : number = 0;
            if (start != end) {
                nextCodeUnit = new core.DartString(str).codeUnitAt(start);
            }else {
                /* TODO (AssertStatementImpl) : assert (isLast); */;
            }
            let wasCombined : boolean = this._writeSurrogate(this._carry,nextCodeUnit);
            /* TODO (AssertStatementImpl) : assert (!wasCombined || start != end); */;
            if (wasCombined) start++;
            this._carry = 0;
        }
        do{
            start = this._fillBuffer(str,start,end);
            let isLastSlice : boolean = isLast && (start == end);
            if (start == end - 1 && _isLeadSurrogate(new core.DartString(str).codeUnitAt(start))) {
                if (isLast && this._bufferIndex < this._buffer.length - 3) {
                    let hasBeenCombined : boolean = this._writeSurrogate(new core.DartString(str).codeUnitAt(start),0);
                    /* TODO (AssertStatementImpl) : assert (!hasBeenCombined); */;
                }else {
                    this._carry = new core.DartString(str).codeUnitAt(start);
                }
                start++;
            }
            this._sink.addSlice(this._buffer,0,this._bufferIndex,isLastSlice);
            this._bufferIndex = 0;
        } while (start < end);
        if (isLast) this.close();
    }
}

export namespace Base64Decoder {
    export type Constructors = Converter.Constructors | 'Base64Decoder';
    export type Interface = Omit<Base64Decoder, Constructors>;
}
@DartClass
export class Base64Decoder extends Converter<string,core.DartList<number>> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Base64Decoder() {
    }
    convert(input : string,start? : number,end? : number) : core.DartList<number> {
        start = start || 0;
        end = core.RangeError.checkValidRange(start,end,new core.DartString(input).length);
        if (start == end) return new typed_data.Uint8List(0);
        let decoder = new _Base64Decoder();
        let buffer : typed_data.Uint8List = decoder.decode(input,start,end);
        decoder.close(input,end);
        return buffer;
    }
    startChunkedConversion(sink : core.DartSink<core.DartList<number>>) : StringConversionSink {
        return new _Base64DecoderSink(sink);
    }
}

export namespace JsonCyclicError {
    export type Constructors = JsonUnsupportedObjectError.Constructors | 'JsonCyclicError';
    export type Interface = Omit<JsonCyclicError, Constructors>;
}
@DartClass
export class JsonCyclicError extends JsonUnsupportedObjectError {
    constructor(object : core.DartObject) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    JsonCyclicError(object : core.DartObject) {
        super.JsonUnsupportedObjectError(object);
    }
    toString() : string {
        return "Cyclic error in JSON stringify";
    }
}

export namespace _SimpleCallbackSink {
    export type Constructors = ChunkedConversionSink.Constructors | '_SimpleCallbackSink';
    export type Interface<T> = Omit<_SimpleCallbackSink<T>, Constructors>;
}
@DartClass
export class _SimpleCallbackSink<T> extends ChunkedConversionSink<T> {
    _callback : <T>(accumulated : core.DartList<T>) => void;

    _accumulated : core.DartList<T>;

    constructor(_callback : <T>(accumulated : core.DartList<T>) => void) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SimpleCallbackSink(_callback : <T>(accumulated : core.DartList<T>) => void) {
        this._accumulated = new core.DartList.literal<T>();
        this._callback = _callback;
    }
    add(chunk : T) : void {
        this._accumulated.add(chunk);
    }
    close() : void {
        this._callback(this._accumulated);
    }
}

export namespace JsonCodec {
    export type Constructors = Codec.Constructors | 'JsonCodec' | 'withReviver';
    export type Interface = Omit<JsonCodec, Constructors>;
}
@DartClass
export class JsonCodec extends Codec<core.DartObject,string> {
    _reviver : (key : any,value : any) => any;

    _toEncodable : (o : any) => any;

    constructor(_namedArguments? : {reviver? : (key : any,value : any) => any,toEncodable? : (object : any) => any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    JsonCodec(_namedArguments? : {reviver? : (key : any,value : any) => any,toEncodable? : (object : any) => any}) {
        let {reviver,toEncodable} = Object.assign({
        }, _namedArguments );
        this._reviver = reviver;
        this._toEncodable = toEncodable;
    }
    @namedConstructor
    withReviver(reviver : (key : any,value : any) => any) {
        this.JsonCodec({
            reviver : reviver});
    }
    static withReviver : new(reviver : (key : any,value : any) => any) => JsonCodec;

    decode(source : string,_namedArguments? : {reviver? : (key : any,value : any) => any}) : any {
        let {reviver} = Object.assign({
        }, _namedArguments );
        if (op(Op.EQUALS,reviver,null)) reviver = this._reviver;
        if (op(Op.EQUALS,reviver,null)) return this.decoder.convert(source);
        return new JsonDecoder(reviver).convert(source);
    }
    encode(value : core.DartObject,_namedArguments? : {toEncodable? : (object : any) => any}) : string {
        let {toEncodable} = Object.assign({
        }, _namedArguments );
        if (op(Op.EQUALS,toEncodable,null)) toEncodable = this._toEncodable;
        if (op(Op.EQUALS,toEncodable,null)) return this.encoder.convert(value);
        return new JsonEncoder(toEncodable).convert(value);
    }
    get encoder() : JsonEncoder {
        if (op(Op.EQUALS,this._toEncodable,null)) return new JsonEncoder();
        return new JsonEncoder(this._toEncodable);
    }
    get decoder() : JsonDecoder {
        if (op(Op.EQUALS,this._reviver,null)) return new JsonDecoder();
        return new JsonDecoder(this._reviver);
    }
}

export namespace StringConversionSink {
    export type Constructors = ChunkedConversionSink.Constructors | 'StringConversionSink';
    export type Interface = Omit<StringConversionSink, Constructors>;
}
@DartClass
export class StringConversionSink extends ChunkedConversionSink<string> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StringConversionSink() {
    }
    @namedFactory
    static $withCallback(callback : (accumulated : string) => void) : StringConversionSink {
        return new _StringCallbackSink(callback);
    }
    static withCallback : new(callback : (accumulated : string) => void) => StringConversionSink;

    @namedFactory
    static $from(sink : core.DartSink<string>) : StringConversionSink {
        return new _StringAdapterSink(sink);
    }
    static from : new(sink : core.DartSink<string>) => StringConversionSink;

    @namedFactory
    static $fromStringSink(sink : core.DartStringSink) : StringConversionSink {
        return new _StringSinkConversionSink(sink);
    }
    static fromStringSink : new(sink : core.DartStringSink) => StringConversionSink;

    @Abstract
    addSlice(chunk : string,start : number,end : number,isLast : boolean) : void{ throw 'abstract'}
    @Abstract
    asUtf8Sink(allowMalformed : boolean) : ByteConversionSink{ throw 'abstract'}
    @Abstract
    asStringSink() : ClosableStringSink{ throw 'abstract'}
}

export namespace JsonEncoder {
    export type Constructors = Converter.Constructors | 'JsonEncoder' | 'withIndent';
    export type Interface = Omit<JsonEncoder, Constructors>;
}
@DartClass
export class JsonEncoder extends Converter<core.DartObject,string> {
    indent : string;

    _toEncodable : (o : any) => any;

    constructor(toEncodable? : (object : any) => any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    JsonEncoder(toEncodable? : (object : any) => any) {
        this.indent = null;
        this._toEncodable = toEncodable;
    }
    @namedConstructor
    withIndent(indent : string,toEncodable? : (object : any) => any) {
        this._toEncodable = toEncodable;
        this.indent = indent;
    }
    static withIndent : new(indent : string,toEncodable : (object : any) => any) => JsonEncoder;

    convert(object : core.DartObject) : string {
        return _JsonStringStringifier.stringify(object,this._toEncodable,this.indent);
    }
    startChunkedConversion(sink : core.DartSink<string>) : ChunkedConversionSink<core.DartObject> {
        if (isNot(sink, StringConversionSink)) {
            sink = new StringConversionSink.from(sink);
        }else if (is(sink, _Utf8EncoderSink)) {
            return new _JsonUtf8EncoderSink(sink._sink,this._toEncodable,JsonUtf8Encoder._utf8Encode(this.indent),JsonUtf8Encoder.DEFAULT_BUFFER_SIZE);
        }
        return new _JsonEncoderSink(sink,this._toEncodable,this.indent);
    }
    bind(stream : async.DartStream<core.DartObject>) : async.DartStream<string> {
        return super.bind(stream);
    }
    fuse<T>(other : Converter<string,T>) : Converter<core.DartObject,T> {
        if (is(other, Utf8Encoder)) {
            return new JsonUtf8Encoder(this.indent,this._toEncodable) as any;
        }
        return super.fuse(other);
    }
}

export namespace LineSplitter {
    export type Constructors = Converter.Constructors | 'LineSplitter';
    export type Interface = Omit<LineSplitter, Constructors>;
}
@DartClass
@Implements(core.DartObject)
export class LineSplitter extends Converter<string,core.DartList<string>> implements core.DartObject.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LineSplitter() {
    }
    static split(lines : string,start? : number,end? : number) : core.DartIterable<string> { 
        return core.iter<string>(()=>(function*()  {
            start = start || 0;
            end = core.RangeError.checkValidRange(start,end,new core.DartString(lines).length);
            let sliceStart : number = start;
            let char : number = 0;
            for(let i : number = start; i < end; i++){
                let previousChar : number = char;
                char = new core.DartString(lines).codeUnitAt(i);
                if (char != properties._CR) {
                    if (char != properties._LF) continue;
                    if (previousChar == properties._CR) {
                        sliceStart = i + 1;
                        continue;
                    }
                }
                yield new core.DartString(lines).substring(sliceStart,i);
                sliceStart = i + 1;
            }
            if (sliceStart < end) {
                yield new core.DartString(lines).substring(sliceStart,end);
            }
        }).call(this));
    }

    convert(data : string) : core.DartList<string> {
        let lines : core.DartList<string> = new core.DartList.literal<string>();
        let end : number = new core.DartString(data).length;
        let sliceStart : number = 0;
        let char : number = 0;
        for(let i : number = 0; i < end; i++){
            let previousChar : number = char;
            char = new core.DartString(data).codeUnitAt(i);
            if (char != properties._CR) {
                if (char != properties._LF) continue;
                if (previousChar == properties._CR) {
                    sliceStart = i + 1;
                    continue;
                }
            }
            lines.add(new core.DartString(data).substring(sliceStart,i));
            sliceStart = i + 1;
        }
        if (sliceStart < end) {
            lines.add(new core.DartString(data).substring(sliceStart,end));
        }
        return lines;
    }
    startChunkedConversion(sink : core.DartSink<string>) : StringConversionSink {
        if (isNot(sink, StringConversionSink)) {
            sink = new StringConversionSink.from(sink);
        }
        return new _LineSplitterSink(sink);
    }
    bind(stream : async.DartStream<string>) : async.DartStream<any> {
        return new async.DartStream.eventTransformed(stream,(sink : async.DartEventSink<string>) =>  {
            return new _LineSplitterEventSink(sink);
        });
    }
}

export namespace _LineSplitterSink {
    export type Constructors = StringConversionSinkBase.Constructors | '_LineSplitterSink';
    export type Interface = Omit<_LineSplitterSink, Constructors>;
}
@DartClass
export class _LineSplitterSink extends StringConversionSinkBase {
    _sink : StringConversionSink;

    _carry : string;

    _skipLeadingLF : boolean;

    constructor(_sink : StringConversionSink) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _LineSplitterSink(_sink : StringConversionSink) {
        this._skipLeadingLF = false;
        this._sink = _sink;
    }
    addSlice(chunk : string,start : number,end : number,isLast : boolean) : void {
        end = core.RangeError.checkValidRange(start,end,new core.DartString(chunk).length);
        if (start >= end) {
            if (isLast) this.close();
            return;
        }
        if (this._carry != null) {
            /* TODO (AssertStatementImpl) : assert (!_skipLeadingLF); */;
            chunk = this._carry + new core.DartString(chunk).substring(start,end);
            start = 0;
            end = new core.DartString(chunk).length;
            this._carry = null;
        }else if (this._skipLeadingLF) {
            if (new core.DartString(chunk).codeUnitAt(start) == properties._LF) {
                start += 1;
            }
            this._skipLeadingLF = false;
        }
        this._addLines(chunk,start,end);
        if (isLast) this.close();
    }
    close() : void {
        if (this._carry != null) {
            this._sink.add(this._carry);
            this._carry = null;
        }
        this._sink.close();
    }
    _addLines(lines : string,start : number,end : number) : void {
        let sliceStart : number = start;
        let char : number = 0;
        for(let i : number = start; i < end; i++){
            let previousChar : number = char;
            char = new core.DartString(lines).codeUnitAt(i);
            if (char != properties._CR) {
                if (char != properties._LF) continue;
                if (previousChar == properties._CR) {
                    sliceStart = i + 1;
                    continue;
                }
            }
            this._sink.add(new core.DartString(lines).substring(sliceStart,i));
            sliceStart = i + 1;
        }
        if (sliceStart < end) {
            this._carry = new core.DartString(lines).substring(sliceStart,end);
        }else {
            this._skipLeadingLF = (char == properties._CR);
        }
    }
}

export namespace _StringSinkConversionSink {
    export type Constructors = StringConversionSinkBase.Constructors | '_StringSinkConversionSink';
    export type Interface = Omit<_StringSinkConversionSink, Constructors>;
}
@DartClass
export class _StringSinkConversionSink extends StringConversionSinkBase {
    _stringSink : core.DartStringSink;

    constructor(_stringSink : core.DartStringSink) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _StringSinkConversionSink(_stringSink : core.DartStringSink) {
        this._stringSink = _stringSink;
    }
    close() : void {
    }
    addSlice(str : string,start : number,end : number,isLast : boolean) : void {
        if (start != 0 || end != new core.DartString(str).length) {
            for(let i : number = start; i < end; i++){
                this._stringSink.writeCharCode(new core.DartString(str).codeUnitAt(i));
            }
        }else {
            this._stringSink.write(str);
        }
        if (isLast) this.close();
    }
    add(str : string) : void {
        this._stringSink.write(str);
    }
    asUtf8Sink(allowMalformed : boolean) : ByteConversionSink {
        return new _Utf8StringSinkAdapter(this,this._stringSink,allowMalformed);
    }
    asStringSink() : ClosableStringSink {
        return new ClosableStringSink.fromStringSink(this._stringSink,this.close.bind(this));
    }
}

export namespace _StringAdapterSink {
    export type Constructors = StringConversionSinkBase.Constructors | '_StringAdapterSink';
    export type Interface = Omit<_StringAdapterSink, Constructors>;
}
@DartClass
export class _StringAdapterSink extends StringConversionSinkBase {
    _sink : core.DartSink<string>;

    constructor(_sink : core.DartSink<string>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _StringAdapterSink(_sink : core.DartSink<string>) {
        this._sink = _sink;
    }
    add(str : string) : void {
        this._sink.add(str);
    }
    addSlice(str : string,start : number,end : number,isLast : boolean) : void {
        if (start == 0 && end == new core.DartString(str).length) {
            this.add(str);
        }else {
            this.add(new core.DartString(str).substring(start,end));
        }
        if (isLast) this.close();
    }
    close() : void {
        this._sink.close();
    }
}

export namespace _Utf8StringSinkAdapter {
    export type Constructors = ByteConversionSink.Constructors | '_Utf8StringSinkAdapter';
    export type Interface = Omit<_Utf8StringSinkAdapter, Constructors>;
}
@DartClass
export class _Utf8StringSinkAdapter extends ByteConversionSink {
    _decoder : _Utf8Decoder;

    _sink : core.DartSink<any>;

    constructor(_sink : core.DartSink<any>,stringSink : core.DartStringSink,allowMalformed : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _Utf8StringSinkAdapter(_sink : core.DartSink<any>,stringSink : core.DartStringSink,allowMalformed : boolean) {
        this._decoder = new _Utf8Decoder(stringSink,allowMalformed);
        this._sink = _sink;
    }
    close() : void {
        this._decoder.close();
        if (this._sink != null) this._sink.close();
    }
    add(chunk : core.DartList<number>) : void {
        this.addSlice(chunk,0,chunk.length,false);
    }
    addSlice(codeUnits : core.DartList<number>,startIndex : number,endIndex : number,isLast : boolean) : void {
        this._decoder.convert(codeUnits,startIndex,endIndex);
        if (isLast) this.close();
    }
}

export namespace _Utf8ConversionSink {
    export type Constructors = ByteConversionSink.Constructors | '_Utf8ConversionSink' | '_';
    export type Interface = Omit<_Utf8ConversionSink, Constructors>;
}
@DartClass
export class _Utf8ConversionSink extends ByteConversionSink {
    _decoder : _Utf8Decoder;

    _chunkedSink : StringConversionSink;

    _buffer : core.DartStringBuffer;

    constructor(sink : StringConversionSink,allowMalformed : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _Utf8ConversionSink(sink : StringConversionSink,allowMalformed : boolean) {
        this._(sink,new core.DartStringBuffer(),allowMalformed);
    }
    @namedConstructor
    _(_chunkedSink : StringConversionSink,stringBuffer : core.DartStringBuffer,allowMalformed : boolean) {
        this._decoder = new _Utf8Decoder(stringBuffer,allowMalformed);
        this._buffer = stringBuffer;
        this._chunkedSink = _chunkedSink;
    }
    static _ : new(_chunkedSink : StringConversionSink,stringBuffer : core.DartStringBuffer,allowMalformed : boolean) => _Utf8ConversionSink;

    close() : void {
        this._decoder.close();
        if (this._buffer.isNotEmpty) {
            let accumulated : string = this._buffer.toString();
            this._buffer.clear();
            this._chunkedSink.addSlice(accumulated,0,new core.DartString(accumulated).length,true);
        }else {
            this._chunkedSink.close();
        }
    }
    add(chunk : core.DartList<number>) : void {
        this.addSlice(chunk,0,chunk.length,false);
    }
    addSlice(chunk : core.DartList<number>,startIndex : number,endIndex : number,isLast : boolean) : void {
        this._decoder.convert(chunk,startIndex,endIndex);
        if (this._buffer.isNotEmpty) {
            let accumulated : string = this._buffer.toString();
            this._chunkedSink.addSlice(accumulated,0,new core.DartString(accumulated).length,isLast);
            this._buffer.clear();
            return;
        }
        if (isLast) this.close();
    }
}

export namespace Latin1Decoder {
    export type Constructors = _UnicodeSubsetDecoder.Constructors | 'Latin1Decoder';
    export type Interface = Omit<Latin1Decoder, Constructors>;
}
@DartClass
export class Latin1Decoder extends _UnicodeSubsetDecoder {
    constructor(_namedArguments? : {allowInvalid? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Latin1Decoder(_namedArguments? : {allowInvalid? : boolean}) {
        let {allowInvalid} = Object.assign({
            "allowInvalid" : false}, _namedArguments );
        super._UnicodeSubsetDecoder(allowInvalid,properties._LATIN1_MASK);
    }
    startChunkedConversion(sink : core.DartSink<string>) : ByteConversionSink {
        let stringSink : StringConversionSink;
        if (is(sink, StringConversionSink)) {
            stringSink = sink;
        }else {
            stringSink = new StringConversionSink.from(sink);
        }
        if (!this._allowInvalid) return new _Latin1DecoderSink(stringSink);
        return new _Latin1AllowInvalidDecoderSink(stringSink);
    }
}

export namespace Latin1Encoder {
    export type Constructors = _UnicodeSubsetEncoder.Constructors | 'Latin1Encoder';
    export type Interface = Omit<Latin1Encoder, Constructors>;
}
@DartClass
export class Latin1Encoder extends _UnicodeSubsetEncoder {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Latin1Encoder() {
        super._UnicodeSubsetEncoder(properties._LATIN1_MASK);
    }
}

export namespace Latin1Codec {
    export type Constructors = Encoding.Constructors | 'Latin1Codec';
    export type Interface = Omit<Latin1Codec, Constructors>;
}
@DartClass
export class Latin1Codec extends Encoding {
    _allowInvalid : boolean;

    constructor(_namedArguments? : {allowInvalid? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Latin1Codec(_namedArguments? : {allowInvalid? : boolean}) {
        let {allowInvalid} = Object.assign({
            "allowInvalid" : false}, _namedArguments );
        this._allowInvalid = allowInvalid;
    }
    get name() : string {
        return "iso-8859-1";
    }
    decode(bytes : core.DartList<number>,_namedArguments? : {allowInvalid? : boolean}) : string {
        let {allowInvalid} = Object.assign({
        }, _namedArguments );
        if (allowInvalid == null) allowInvalid = this._allowInvalid;
        if (allowInvalid) {
            return new Latin1Decoder({
                allowInvalid : true}).convert(bytes);
        }else {
            return new Latin1Decoder({
                allowInvalid : false}).convert(bytes);
        }
    }
    get encoder() : Latin1Encoder {
        return new Latin1Encoder();
    }
    get decoder() : Latin1Decoder {
        return this._allowInvalid ? new Latin1Decoder({
            allowInvalid : true}) : new Latin1Decoder({
            allowInvalid : false});
    }
}

export namespace Utf8Codec {
    export type Constructors = Encoding.Constructors | 'Utf8Codec';
    export type Interface = Omit<Utf8Codec, Constructors>;
}
@DartClass
export class Utf8Codec extends Encoding {
    _allowMalformed : boolean;

    constructor(_namedArguments? : {allowMalformed? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Utf8Codec(_namedArguments? : {allowMalformed? : boolean}) {
        let {allowMalformed} = Object.assign({
            "allowMalformed" : false}, _namedArguments );
        this._allowMalformed = allowMalformed;
    }
    get name() : string {
        return "utf-8";
    }
    decode(codeUnits : core.DartList<number>,_namedArguments? : {allowMalformed? : boolean}) : string {
        let {allowMalformed} = Object.assign({
        }, _namedArguments );
        if (allowMalformed == null) allowMalformed = this._allowMalformed;
        return new Utf8Decoder({
            allowMalformed : allowMalformed}).convert(codeUnits);
    }
    get encoder() : Utf8Encoder {
        return new Utf8Encoder();
    }
    get decoder() : Utf8Decoder {
        return new Utf8Decoder({
            allowMalformed : this._allowMalformed});
    }
}

export namespace _JsonUtf8StringifierPretty {
    export type Constructors = _JsonUtf8Stringifier.Constructors | '_JsonUtf8StringifierPretty';
    export type Interface = Omit<_JsonUtf8StringifierPretty, Constructors>;
}
@DartClass
@With(_JsonPrettyPrintMixin)
export class _JsonUtf8StringifierPretty extends _JsonUtf8Stringifier implements _JsonPrettyPrintMixin.Interface {
    @Abstract
    writeList(list : core.DartList<any>) : void {
        throw 'from mixin';
    }
    @Abstract
    writeMap(map : core.DartMap<any,any>) : boolean {
        throw 'from mixin';
    }
    indent : core.DartList<number>;

    constructor(toEncodable : (o : any) => any,indent : core.DartList<number>,bufferSize : any,addChunk : (buffer : typed_data.Uint8List,start : number,end : number) => void) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _JsonUtf8StringifierPretty(toEncodable : (o : any) => any,indent : core.DartList<number>,bufferSize : any,addChunk : (buffer : typed_data.Uint8List,start : number,end : number) => void) {
        super._JsonUtf8Stringifier(toEncodable,bufferSize,addChunk);
        this.indent = indent;
    }
    writeIndentation(count : number) : void {
        let indent : core.DartList<number> = this.indent;
        let indentLength : number = indent.length;
        if (indentLength == 1) {
            let char : number = indent[0];
            while (count > 0){
                this.writeByte(char);
                count -= 1;
            }
            return;
        }
        while (count > 0){
            count--;
            let end : number = this.index + indentLength;
            if (end <= this.buffer.length) {
                this.buffer.setRange(this.index,end,indent);
                this.index = end;
            }else {
                for(let i : number = 0; i < indentLength; i++){
                    this.writeByte(indent[i]);
                }
            }
        }
    }
}

export namespace _JsonStringStringifierPretty {
    export type Constructors = _JsonStringStringifier.Constructors | '_JsonStringStringifierPretty';
    export type Interface = Omit<_JsonStringStringifierPretty, Constructors>;
}
@DartClass
@With(_JsonPrettyPrintMixin)
export class _JsonStringStringifierPretty extends _JsonStringStringifier implements _JsonPrettyPrintMixin.Interface {
    @Abstract
    writeList(list : core.DartList<any>) : void {
        throw 'from mixin';
    }
    @Abstract
    writeMap(map : core.DartMap<any,any>) : boolean {
        throw 'from mixin';
    }
    _indent : string;

    constructor(sink : core.DartStringSink,toEncodable : (o : any) => any,_indent : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _JsonStringStringifierPretty(sink : core.DartStringSink,toEncodable : (o : any) => any,_indent : string) {
        super._JsonStringStringifier(sink,toEncodable);
        this._indent = _indent;
    }
    writeIndentation(count : number) : void {
        for(let i : number = 0; i < count; i++)this.writeString(this._indent);
    }
}

export namespace _HtmlEscapeSink {
    export type Constructors = StringConversionSinkBase.Constructors | '_HtmlEscapeSink';
    export type Interface = Omit<_HtmlEscapeSink, Constructors>;
}
@DartClass
export class _HtmlEscapeSink extends StringConversionSinkBase {
    _escape : HtmlEscape;

    _sink : StringConversionSink;

    constructor(_escape : HtmlEscape,_sink : StringConversionSink) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _HtmlEscapeSink(_escape : HtmlEscape,_sink : StringConversionSink) {
        this._escape = _escape;
        this._sink = _sink;
    }
    addSlice(chunk : string,start : number,end : number,isLast : boolean) : void {
        let val = this._escape._convert(chunk,start,end);
        if (val == null) {
            this._sink.addSlice(chunk,start,end,isLast);
        }else {
            this._sink.add(val);
            if (isLast) this._sink.close();
        }
    }
    close() : void {
        this._sink.close();
    }
}

export namespace ByteConversionSinkBase {
    export type Constructors = ByteConversionSink.Constructors | 'ByteConversionSinkBase';
    export type Interface = Omit<ByteConversionSinkBase, Constructors>;
}
@DartClass
export class ByteConversionSinkBase extends ByteConversionSink {
    @Abstract
    add(chunk : core.DartList<number>) : void{ throw 'abstract'}
    @Abstract
    close() : void{ throw 'abstract'}
    addSlice(chunk : core.DartList<number>,start : number,end : number,isLast : boolean) : void {
        this.add(chunk.sublist(start,end));
        if (isLast) this.close();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ByteConversionSinkBase() {
    }
}

export namespace _Base64DecoderSink {
    export type Constructors = StringConversionSinkBase.Constructors | '_Base64DecoderSink';
    export type Interface = Omit<_Base64DecoderSink, Constructors>;
}
@DartClass
export class _Base64DecoderSink extends StringConversionSinkBase {
    _sink : core.DartSink<core.DartList<number>>;

    _decoder : _Base64Decoder;

    constructor(_sink : core.DartSink<core.DartList<number>>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _Base64DecoderSink(_sink : core.DartSink<core.DartList<number>>) {
        this._decoder = new _Base64Decoder();
        this._sink = _sink;
    }
    add(string : string) : void {
        if (new core.DartString(string).isEmpty) return;
        let buffer : typed_data.Uint8List = this._decoder.decode(string,0,new core.DartString(string).length);
        if (buffer != null) this._sink.add(buffer);
    }
    close() : void {
        this._decoder.close(null,null);
        this._sink.close();
    }
    addSlice(string : string,start : number,end : number,isLast : boolean) : void {
        end = core.RangeError.checkValidRange(start,end,new core.DartString(string).length);
        if (start == end) return;
        let buffer : typed_data.Uint8List = this._decoder.decode(string,start,end);
        if (buffer != null) this._sink.add(buffer);
        if (isLast) {
            this._decoder.close(string,end);
            this._sink.close();
        }
    }
}

export namespace AsciiDecoder {
    export type Constructors = _UnicodeSubsetDecoder.Constructors | 'AsciiDecoder';
    export type Interface = Omit<AsciiDecoder, Constructors>;
}
@DartClass
export class AsciiDecoder extends _UnicodeSubsetDecoder {
    constructor(_namedArguments? : {allowInvalid? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AsciiDecoder(_namedArguments? : {allowInvalid? : boolean}) {
        let {allowInvalid} = Object.assign({
            "allowInvalid" : false}, _namedArguments );
        super._UnicodeSubsetDecoder(allowInvalid,properties._ASCII_MASK);
    }
    startChunkedConversion(sink : core.DartSink<string>) : ByteConversionSink {
        let stringSink : StringConversionSink;
        if (is(sink, StringConversionSink)) {
            stringSink = sink;
        }else {
            stringSink = new StringConversionSink.from(sink);
        }
        if (this._allowInvalid) {
            return new _ErrorHandlingAsciiDecoderSink(stringSink.asUtf8Sink(false));
        }else {
            return new _SimpleAsciiDecoderSink(stringSink);
        }
    }
}

export namespace _UnicodeSubsetEncoderSink {
    export type Constructors = StringConversionSinkBase.Constructors | '_UnicodeSubsetEncoderSink';
    export type Interface = Omit<_UnicodeSubsetEncoderSink, Constructors>;
}
@DartClass
export class _UnicodeSubsetEncoderSink extends StringConversionSinkBase {
    _sink : ByteConversionSink;

    _subsetMask : number;

    constructor(_subsetMask : number,_sink : ByteConversionSink) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _UnicodeSubsetEncoderSink(_subsetMask : number,_sink : ByteConversionSink) {
        this._subsetMask = _subsetMask;
        this._sink = _sink;
    }
    close() : void {
        this._sink.close();
    }
    addSlice(source : string,start : number,end : number,isLast : boolean) : void {
        core.RangeError.checkValidRange(start,end,new core.DartString(source).length);
        for(let i : number = start; i < end; i++){
            let codeUnit : number = new core.DartString(source).codeUnitAt(i);
            if ((codeUnit & ~this._subsetMask) != 0) {
                throw new core.ArgumentError(`Source contains invalid character with code point: ${codeUnit}.`);
            }
        }
        this._sink.add(new core.DartString(source).codeUnits.sublist(start,end));
        if (isLast) {
            this.close();
        }
    }
}

export namespace AsciiEncoder {
    export type Constructors = _UnicodeSubsetEncoder.Constructors | 'AsciiEncoder';
    export type Interface = Omit<AsciiEncoder, Constructors>;
}
@DartClass
export class AsciiEncoder extends _UnicodeSubsetEncoder {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AsciiEncoder() {
        super._UnicodeSubsetEncoder(properties._ASCII_MASK);
    }
}

export namespace AsciiCodec {
    export type Constructors = Encoding.Constructors | 'AsciiCodec';
    export type Interface = Omit<AsciiCodec, Constructors>;
}
@DartClass
export class AsciiCodec extends Encoding {
    _allowInvalid : boolean;

    constructor(_namedArguments? : {allowInvalid? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AsciiCodec(_namedArguments? : {allowInvalid? : boolean}) {
        let {allowInvalid} = Object.assign({
            "allowInvalid" : false}, _namedArguments );
        this._allowInvalid = allowInvalid;
    }
    get name() : string {
        return "us-ascii";
    }
    decode(bytes : core.DartList<number>,_namedArguments? : {allowInvalid? : boolean}) : string {
        let {allowInvalid} = Object.assign({
        }, _namedArguments );
        if (allowInvalid == null) allowInvalid = this._allowInvalid;
        if (allowInvalid) {
            return new AsciiDecoder({
                allowInvalid : true}).convert(bytes);
        }else {
            return new AsciiDecoder({
                allowInvalid : false}).convert(bytes);
        }
    }
    get encoder() : AsciiEncoder {
        return new AsciiEncoder();
    }
    get decoder() : AsciiDecoder {
        return this._allowInvalid ? new AsciiDecoder({
            allowInvalid : true}) : new AsciiDecoder({
            allowInvalid : false});
    }
}

export namespace _Latin1DecoderSink {
    export type Constructors = ByteConversionSinkBase.Constructors | '_Latin1DecoderSink';
    export type Interface = Omit<_Latin1DecoderSink, Constructors>;
}
@DartClass
export class _Latin1DecoderSink extends ByteConversionSinkBase {
    _sink : StringConversionSink;

    constructor(_sink : StringConversionSink) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _Latin1DecoderSink(_sink : StringConversionSink) {
        this._sink = _sink;
    }
    close() : void {
        this._sink.close();
        this._sink = null;
    }
    add(source : core.DartList<number>) : void {
        this.addSlice(source,0,source.length,false);
    }
    _addSliceToSink(source : core.DartList<number>,start : number,end : number,isLast : boolean) : void {
        this._sink.add(new core.DartString.fromCharCodes(source,start,end).valueOf());
        if (isLast) this.close();
    }
    addSlice(source : core.DartList<number>,start : number,end : number,isLast : boolean) : void {
        end = core.RangeError.checkValidRange(start,end,source.length);
        if (start == end) return;
        if (isNot(source, typed_data.Uint8List)) {
            _Latin1DecoderSink._checkValidLatin1(source,start,end);
        }
        this._addSliceToSink(source,start,end,isLast);
    }
    static _checkValidLatin1(source : core.DartList<number>,start : number,end : number) : void {
        let mask : number = 0;
        for(let i : number = start; i < end; i++){
            mask |= source[i];
        }
        if (mask >= 0 && mask <= properties._LATIN1_MASK) {
            return;
        }
        _Latin1DecoderSink._reportInvalidLatin1(source,start,end);
    }
    static _reportInvalidLatin1(source : core.DartList<number>,start : number,end : number) : void {
        for(let i : number = start; i < end; i++){
            let char : number = source[i];
            if (char < 0 || char > properties._LATIN1_MASK) {
                throw new core.FormatException("Source contains non-Latin-1 characters.",source,i);
            }
        }
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
}

export namespace _StringCallbackSink {
    export type Constructors = _StringSinkConversionSink.Constructors | '_StringCallbackSink';
    export type Interface = Omit<_StringCallbackSink, Constructors>;
}
@DartClass
export class _StringCallbackSink extends _StringSinkConversionSink {
    _callback : <T>(accumulated : string) => void;

    constructor(_callback : <T>(accumulated : string) => void) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _StringCallbackSink(_callback : <T>(accumulated : string) => void) {
        super._StringSinkConversionSink(new core.DartStringBuffer());
        this._callback = _callback;
    }
    close() : void {
        let buffer : core.DartStringBuffer = this._stringSink;
        let accumulated : string = buffer.toString();
        buffer.clear();
        this._callback(accumulated);
    }
    asUtf8Sink(allowMalformed : boolean) : ByteConversionSink {
        return new _Utf8StringSinkAdapter(this,this._stringSink,allowMalformed);
    }
}

export namespace _ByteCallbackSink {
    export type Constructors = ByteConversionSinkBase.Constructors | '_ByteCallbackSink';
    export type Interface = Omit<_ByteCallbackSink, Constructors>;
}
@DartClass
export class _ByteCallbackSink extends ByteConversionSinkBase {
    private static __$_INITIAL_BUFFER_SIZE;
    static get _INITIAL_BUFFER_SIZE() { 
        if (this.__$_INITIAL_BUFFER_SIZE===undefined) {
            this.__$_INITIAL_BUFFER_SIZE = 1024;
        }
        return this.__$_INITIAL_BUFFER_SIZE;
    }

    _callback : <T>(accumulated : core.DartList<number>) => void;

    _buffer : core.DartList<number>;

    _bufferIndex : number;

    constructor(callback : (accumulated : core.DartList<number>) => void) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ByteCallbackSink(callback : (accumulated : core.DartList<number>) => void) {
        this._buffer = new typed_data.Uint8List(_ByteCallbackSink._INITIAL_BUFFER_SIZE);
        this._bufferIndex = 0;
        this._callback = callback;
    }
    add(chunk : core.DartIterable<number>) : void {
        let freeCount : number = this._buffer.length - this._bufferIndex;
        if (chunk.length > freeCount) {
            let oldLength : number = this._buffer.length;
            let newLength : number = _ByteCallbackSink._roundToPowerOf2(chunk.length + oldLength) * 2;
            let grown : core.DartList<number> = new typed_data.Uint8List(newLength);
            grown.setRange(0,this._buffer.length,this._buffer);
            this._buffer = grown;
        }
        this._buffer.setRange(this._bufferIndex,this._bufferIndex + chunk.length,chunk);
        this._bufferIndex += chunk.length;
    }
    static _roundToPowerOf2(v : number) : number {
        /* TODO (AssertStatementImpl) : assert (v > 0); */;
        v--;
        v |= v >> 1;
        v |= v >> 2;
        v |= v >> 4;
        v |= v >> 8;
        v |= v >> 16;
        v++;
        return v;
    }
    close() : void {
        this._callback(this._buffer.sublist(0,this._bufferIndex));
    }
}

export namespace _ByteAdapterSink {
    export type Constructors = ByteConversionSinkBase.Constructors | '_ByteAdapterSink';
    export type Interface = Omit<_ByteAdapterSink, Constructors>;
}
@DartClass
export class _ByteAdapterSink extends ByteConversionSinkBase {
    _sink : core.DartSink<core.DartList<number>>;

    constructor(_sink : core.DartSink<core.DartList<number>>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ByteAdapterSink(_sink : core.DartSink<core.DartList<number>>) {
        this._sink = _sink;
    }
    add(chunk : core.DartList<number>) : void {
        this._sink.add(chunk);
    }
    close() : void {
        this._sink.close();
    }
}

export namespace _Base64EncoderSink {
    export type Constructors = ByteConversionSinkBase.Constructors | '_Base64EncoderSink';
    export type Interface = Omit<_Base64EncoderSink, Constructors>;
}
@DartClass
export class _Base64EncoderSink extends ByteConversionSinkBase {
    add(source : core.DartList<number>) : void {
        this._add(source,0,source.length,false);
    }
    close() : void {
        this._add(null,0,0,true);
    }
    addSlice(source : core.DartList<number>,start : number,end : number,isLast : boolean) : void {
        if (end == null) throw new core.ArgumentError.notNull("end");
        core.RangeError.checkValidRange(start,end,source.length);
        this._add(source,start,end,isLast);
    }
    @Abstract
    _add(source : core.DartList<number>,start : number,end : number,isLast : boolean) : void{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _Base64EncoderSink() {
    }
}

export namespace _SimpleAsciiDecoderSink {
    export type Constructors = ByteConversionSinkBase.Constructors | '_SimpleAsciiDecoderSink';
    export type Interface = Omit<_SimpleAsciiDecoderSink, Constructors>;
}
@DartClass
export class _SimpleAsciiDecoderSink extends ByteConversionSinkBase {
    _sink : core.DartSink<any>;

    constructor(_sink : core.DartSink<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SimpleAsciiDecoderSink(_sink : core.DartSink<any>) {
        this._sink = _sink;
    }
    close() : void {
        this._sink.close();
    }
    add(source : core.DartList<number>) : void {
        for(let i : number = 0; i < source.length; i++){
            if ((source[i] & ~properties._ASCII_MASK) != 0) {
                throw new core.FormatException("Source contains non-ASCII bytes.");
            }
        }
        this._sink.add(new core.DartString.fromCharCodes(source).valueOf());
    }
    addSlice(source : core.DartList<number>,start : number,end : number,isLast : boolean) : void {
        let length : number = source.length;
        core.RangeError.checkValidRange(start,end,length);
        if (start < end) {
            if (start != 0 || end != length) {
                source = source.sublist(start,end);
            }
            this.add(source);
        }
        if (isLast) this.close();
    }
}

export namespace _ErrorHandlingAsciiDecoderSink {
    export type Constructors = ByteConversionSinkBase.Constructors | '_ErrorHandlingAsciiDecoderSink';
    export type Interface = Omit<_ErrorHandlingAsciiDecoderSink, Constructors>;
}
@DartClass
export class _ErrorHandlingAsciiDecoderSink extends ByteConversionSinkBase {
    _utf8Sink : ByteConversionSink;

    constructor(_utf8Sink : ByteConversionSink) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ErrorHandlingAsciiDecoderSink(_utf8Sink : ByteConversionSink) {
        this._utf8Sink = _utf8Sink;
    }
    close() : void {
        this._utf8Sink.close();
    }
    add(source : core.DartList<number>) : void {
        this.addSlice(source,0,source.length,false);
    }
    addSlice(source : core.DartList<number>,start : number,end : number,isLast : boolean) : void {
        core.RangeError.checkValidRange(start,end,source.length);
        for(let i : number = start; i < end; i++){
            if ((source[i] & ~properties._ASCII_MASK) != 0) {
                if (i > start) this._utf8Sink.addSlice(source,start,i,false);
                this._utf8Sink.add(new core.DartList.literal<number>(239,191,189));
                start = i + 1;
            }
        }
        if (start < end) {
            this._utf8Sink.addSlice(source,start,end,isLast);
        }else if (isLast) {
            this.close();
        }
    }
}

export namespace _LineSplitterEventSink {
    export type Constructors = _LineSplitterSink.Constructors | '_LineSplitterEventSink';
    export type Interface = Omit<_LineSplitterEventSink, Constructors>;
}
@DartClass
@Implements(async.DartEventSink)
export class _LineSplitterEventSink extends _LineSplitterSink implements async.DartEventSink.Interface<string> {
    _eventSink : async.DartEventSink<string>;

    constructor(eventSink : async.DartEventSink<string>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _LineSplitterEventSink(eventSink : async.DartEventSink<string>) {
        this._eventSink = eventSink;
        super._LineSplitterSink(new StringConversionSink.from(eventSink));
    }
    addError(o : core.DartObject,stackTrace? : core.DartStackTrace) : void {
        this._eventSink.addError(o,stackTrace);
    }
}

export namespace _Latin1AllowInvalidDecoderSink {
    export type Constructors = _Latin1DecoderSink.Constructors | '_Latin1AllowInvalidDecoderSink';
    export type Interface = Omit<_Latin1AllowInvalidDecoderSink, Constructors>;
}
@DartClass
export class _Latin1AllowInvalidDecoderSink extends _Latin1DecoderSink {
    constructor(sink : StringConversionSink) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _Latin1AllowInvalidDecoderSink(sink : StringConversionSink) {
        super._Latin1DecoderSink(sink);
    }
    addSlice(source : core.DartList<number>,start : number,end : number,isLast : boolean) : void {
        core.RangeError.checkValidRange(start,end,source.length);
        for(let i : number = start; i < end; i++){
            let char : number = source[i];
            if (char > properties._LATIN1_MASK || char < 0) {
                if (i > start) this._addSliceToSink(source,start,i,false);
                this._addSliceToSink(new core.DartList.literal(65533),0,1,false);
                start = i + 1;
            }
        }
        if (start < end) {
            this._addSliceToSink(source,start,end,isLast);
        }
        if (isLast) {
            this.close();
        }
    }
}

export namespace _Utf8Base64EncoderSink {
    export type Constructors = _Base64EncoderSink.Constructors | '_Utf8Base64EncoderSink';
    export type Interface = Omit<_Utf8Base64EncoderSink, Constructors>;
}
@DartClass
export class _Utf8Base64EncoderSink extends _Base64EncoderSink {
    _sink : ByteConversionSink;

    _encoder : _Base64Encoder;

    constructor(_sink : ByteConversionSink,urlSafe : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _Utf8Base64EncoderSink(_sink : ByteConversionSink,urlSafe : boolean) {
        this._encoder = new _Base64Encoder(urlSafe);
        this._sink = _sink;
    }
    _add(source : core.DartList<number>,start : number,end : number,isLast : boolean) : void {
        let buffer : typed_data.Uint8List = this._encoder.encode(source,start,end,isLast);
        if (buffer != null) {
            this._sink.addSlice(buffer,0,buffer.length,isLast);
        }
    }
}

export namespace _AsciiBase64EncoderSink {
    export type Constructors = _Base64EncoderSink.Constructors | '_AsciiBase64EncoderSink';
    export type Interface = Omit<_AsciiBase64EncoderSink, Constructors>;
}
@DartClass
export class _AsciiBase64EncoderSink extends _Base64EncoderSink {
    _sink : core.DartSink<string>;

    _encoder : _Base64Encoder;

    constructor(_sink : core.DartSink<string>,urlSafe : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AsciiBase64EncoderSink(_sink : core.DartSink<string>,urlSafe : boolean) {
        this._encoder = new _BufferCachingBase64Encoder(urlSafe);
        this._sink = _sink;
    }
    _add(source : core.DartList<number>,start : number,end : number,isLast : boolean) : void {
        let buffer : typed_data.Uint8List = this._encoder.encode(source,start,end,isLast);
        if (buffer != null) {
            let string : string = new core.DartString.fromCharCodes(buffer).valueOf();
            this._sink.add(string);
        }
        if (isLast) {
            this._sink.close();
        }
    }
}

export class properties {
    private static __$_SURROGATE_MASK : number;
    static get _SURROGATE_MASK() : number { 
        if (this.__$_SURROGATE_MASK===undefined) {
            this.__$_SURROGATE_MASK = 63488;
        }
        return this.__$_SURROGATE_MASK;
    }
    static set _SURROGATE_MASK(__$value : number)  { 
        this.__$_SURROGATE_MASK = __$value;
    }

    private static __$_ASCII_MASK : number;
    static get _ASCII_MASK() : number { 
        if (this.__$_ASCII_MASK===undefined) {
            this.__$_ASCII_MASK = 127;
        }
        return this.__$_ASCII_MASK;
    }
    static set _ASCII_MASK(__$value : number)  { 
        this.__$_ASCII_MASK = __$value;
    }

    private static __$_TAIL_SURROGATE_MIN : number;
    static get _TAIL_SURROGATE_MIN() : number { 
        if (this.__$_TAIL_SURROGATE_MIN===undefined) {
            this.__$_TAIL_SURROGATE_MIN = 56320;
        }
        return this.__$_TAIL_SURROGATE_MIN;
    }
    static set _TAIL_SURROGATE_MIN(__$value : number)  { 
        this.__$_TAIL_SURROGATE_MIN = __$value;
    }

    private static __$_LEAD_SURROGATE_MIN : number;
    static get _LEAD_SURROGATE_MIN() : number { 
        if (this.__$_LEAD_SURROGATE_MIN===undefined) {
            this.__$_LEAD_SURROGATE_MIN = 55296;
        }
        return this.__$_LEAD_SURROGATE_MIN;
    }
    static set _LEAD_SURROGATE_MIN(__$value : number)  { 
        this.__$_LEAD_SURROGATE_MIN = __$value;
    }

    private static __$_SURROGATE_VALUE_MASK : number;
    static get _SURROGATE_VALUE_MASK() : number { 
        if (this.__$_SURROGATE_VALUE_MASK===undefined) {
            this.__$_SURROGATE_VALUE_MASK = 1023;
        }
        return this.__$_SURROGATE_VALUE_MASK;
    }
    static set _SURROGATE_VALUE_MASK(__$value : number)  { 
        this.__$_SURROGATE_VALUE_MASK = __$value;
    }

    private static __$BASE64 : Base64Codec;
    static get BASE64() : Base64Codec { 
        if (this.__$BASE64===undefined) {
            this.__$BASE64 = new Base64Codec();
        }
        return this.__$BASE64;
    }
    static set BASE64(__$value : Base64Codec)  { 
        this.__$BASE64 = __$value;
    }

    private static __$BASE64URL : Base64Codec;
    static get BASE64URL() : Base64Codec { 
        if (this.__$BASE64URL===undefined) {
            this.__$BASE64URL = new Base64Codec.urlSafe();
        }
        return this.__$BASE64URL;
    }
    static set BASE64URL(__$value : Base64Codec)  { 
        this.__$BASE64URL = __$value;
    }

    private static __$_paddingChar : number;
    static get _paddingChar() : number { 
        if (this.__$_paddingChar===undefined) {
            this.__$_paddingChar = 61;
        }
        return this.__$_paddingChar;
    }
    static set _paddingChar(__$value : number)  { 
        this.__$_paddingChar = __$value;
    }

    private static __$_CR : number;
    static get _CR() : number { 
        if (this.__$_CR===undefined) {
            this.__$_CR = 13;
        }
        return this.__$_CR;
    }
    static set _CR(__$value : number)  { 
        this.__$_CR = __$value;
    }

    private static __$_SURROGATE_TAG_MASK : number;
    static get _SURROGATE_TAG_MASK() : number { 
        if (this.__$_SURROGATE_TAG_MASK===undefined) {
            this.__$_SURROGATE_TAG_MASK = 64512;
        }
        return this.__$_SURROGATE_TAG_MASK;
    }
    static set _SURROGATE_TAG_MASK(__$value : number)  { 
        this.__$_SURROGATE_TAG_MASK = __$value;
    }

    private static __$_LF : number;
    static get _LF() : number { 
        if (this.__$_LF===undefined) {
            this.__$_LF = 10;
        }
        return this.__$_LF;
    }
    static set _LF(__$value : number)  { 
        this.__$_LF = __$value;
    }

    private static __$_FOUR_BYTE_LIMIT : number;
    static get _FOUR_BYTE_LIMIT() : number { 
        if (this.__$_FOUR_BYTE_LIMIT===undefined) {
            this.__$_FOUR_BYTE_LIMIT = 1114111;
        }
        return this.__$_FOUR_BYTE_LIMIT;
    }
    static set _FOUR_BYTE_LIMIT(__$value : number)  { 
        this.__$_FOUR_BYTE_LIMIT = __$value;
    }

    private static __$UNICODE_REPLACEMENT_CHARACTER_RUNE : number;
    static get UNICODE_REPLACEMENT_CHARACTER_RUNE() : number { 
        if (this.__$UNICODE_REPLACEMENT_CHARACTER_RUNE===undefined) {
            this.__$UNICODE_REPLACEMENT_CHARACTER_RUNE = 65533;
        }
        return this.__$UNICODE_REPLACEMENT_CHARACTER_RUNE;
    }
    static set UNICODE_REPLACEMENT_CHARACTER_RUNE(__$value : number)  { 
        this.__$UNICODE_REPLACEMENT_CHARACTER_RUNE = __$value;
    }

    private static __$_THREE_BYTE_LIMIT : number;
    static get _THREE_BYTE_LIMIT() : number { 
        if (this.__$_THREE_BYTE_LIMIT===undefined) {
            this.__$_THREE_BYTE_LIMIT = 65535;
        }
        return this.__$_THREE_BYTE_LIMIT;
    }
    static set _THREE_BYTE_LIMIT(__$value : number)  { 
        this.__$_THREE_BYTE_LIMIT = __$value;
    }

    private static __$_TWO_BYTE_LIMIT : number;
    static get _TWO_BYTE_LIMIT() : number { 
        if (this.__$_TWO_BYTE_LIMIT===undefined) {
            this.__$_TWO_BYTE_LIMIT = 2047;
        }
        return this.__$_TWO_BYTE_LIMIT;
    }
    static set _TWO_BYTE_LIMIT(__$value : number)  { 
        this.__$_TWO_BYTE_LIMIT = __$value;
    }

    private static __$_ONE_BYTE_LIMIT : number;
    static get _ONE_BYTE_LIMIT() : number { 
        if (this.__$_ONE_BYTE_LIMIT===undefined) {
            this.__$_ONE_BYTE_LIMIT = 127;
        }
        return this.__$_ONE_BYTE_LIMIT;
    }
    static set _ONE_BYTE_LIMIT(__$value : number)  { 
        this.__$_ONE_BYTE_LIMIT = __$value;
    }

    private static __$UTF8 : Utf8Codec;
    static get UTF8() : Utf8Codec { 
        if (this.__$UTF8===undefined) {
            this.__$UTF8 = new Utf8Codec();
        }
        return this.__$UTF8;
    }
    static set UTF8(__$value : Utf8Codec)  { 
        this.__$UTF8 = __$value;
    }

    private static __$JSON : JsonCodec;
    static get JSON() : JsonCodec { 
        if (this.__$JSON===undefined) {
            this.__$JSON = new JsonCodec();
        }
        return this.__$JSON;
    }
    static set JSON(__$value : JsonCodec)  { 
        this.__$JSON = __$value;
    }

    private static __$_LATIN1_MASK : number;
    static get _LATIN1_MASK() : number { 
        if (this.__$_LATIN1_MASK===undefined) {
            this.__$_LATIN1_MASK = 255;
        }
        return this.__$_LATIN1_MASK;
    }
    static set _LATIN1_MASK(__$value : number)  { 
        this.__$_LATIN1_MASK = __$value;
    }

    private static __$LATIN1 : Latin1Codec;
    static get LATIN1() : Latin1Codec { 
        if (this.__$LATIN1===undefined) {
            this.__$LATIN1 = new Latin1Codec();
        }
        return this.__$LATIN1;
    }
    static set LATIN1(__$value : Latin1Codec)  { 
        this.__$LATIN1 = __$value;
    }

    private static __$ASCII : AsciiCodec;
    static get ASCII() : AsciiCodec { 
        if (this.__$ASCII===undefined) {
            this.__$ASCII = new AsciiCodec();
        }
        return this.__$ASCII;
    }
    static set ASCII(__$value : AsciiCodec)  { 
        this.__$ASCII = __$value;
    }

    private static __$HTML_ESCAPE : HtmlEscape;
    static get HTML_ESCAPE() : HtmlEscape { 
        if (this.__$HTML_ESCAPE===undefined) {
            this.__$HTML_ESCAPE = new HtmlEscape();
        }
        return this.__$HTML_ESCAPE;
    }
    static set HTML_ESCAPE(__$value : HtmlEscape)  { 
        this.__$HTML_ESCAPE = __$value;
    }

    private static __$UNICODE_BOM_CHARACTER_RUNE : number;
    static get UNICODE_BOM_CHARACTER_RUNE() : number { 
        if (this.__$UNICODE_BOM_CHARACTER_RUNE===undefined) {
            this.__$UNICODE_BOM_CHARACTER_RUNE = 65279;
        }
        return this.__$UNICODE_BOM_CHARACTER_RUNE;
    }
    static set UNICODE_BOM_CHARACTER_RUNE(__$value : number)  { 
        this.__$UNICODE_BOM_CHARACTER_RUNE = __$value;
    }

}
