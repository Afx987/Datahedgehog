/** Library asset:datahedgehog_monitor/lib/lib/io/io.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as convert from "@dart2ts/dart/convert";
import * as lib5 from "@dart2ts/dart/uri";
import * as isolate from "@dart2ts/dart/isolate";
import * as math from "@dart2ts/dart/math";
import * as developer from "@dart2ts/dart/developer";
import * as collection from "@dart2ts/dart/core";

export var _isErrorResponse : (response : any) => boolean = (response : any) : boolean =>  {
    return is(response, core.DartList<any>) && response[0] != properties._SUCCESS_RESPONSE;
};
export var _exceptionFromResponse : (response : any,message : string,path : string) => any = (response : any,message : string,path : string) =>  {
    /* TODO (AssertStatementImpl) : assert (_isErrorResponse(response)); */;
    switch (op(Op.INDEX,response,properties._ERROR_RESPONSE_ERROR_TYPE)) {
        case properties._ILLEGAL_ARGUMENT_RESPONSE:
            return new core.ArgumentError(`${message}: ${path}`);
        case properties._OSERROR_RESPONSE:
            let err = new OSError(op(Op.INDEX,response,properties._OSERROR_RESPONSE_MESSAGE),op(Op.INDEX,response,properties._OSERROR_RESPONSE_ERROR_CODE));
            return new FileSystemException(message,path,err);
        case properties._FILE_CLOSED_RESPONSE:
            return new FileSystemException("File closed",path);
        default:
            return new core.Exception("Unknown error");
    }
};
export var _ensureFastAndSerializableByteData : (buffer : core.DartList<number>,start : number,end : number) => _BufferAndStart = (buffer : core.DartList<number>,start : number,end : number) : _BufferAndStart =>  {
    if (is(buffer, typed_data.Uint8List) || is(buffer, typed_data.Int8List)) {
        return new _BufferAndStart(buffer,start);
    }
    let length : number = end - start;
    let newBuffer = new typed_data.Uint8List(length);
    let j : number = start;
    for(let i : number = 0; i < length; i++){
        let value : number = buffer[j];
        if (isNot(value, "number")) {
            throw new core.ArgumentError(`List element is not an integer at index ${j}`);
        }
        op(Op.INDEX_ASSIGN,newBuffer,i,value);
        j++;
    }
    return new _BufferAndStart(newBuffer,0);
};
export var _validateZLibWindowBits : (windowBits : number) => void = (windowBits : number) : void =>  {
    if (ZLibOption.MIN_WINDOW_BITS > windowBits || ZLibOption.MAX_WINDOW_BITS < windowBits) {
        throw new core.RangeError.range(windowBits,ZLibOption.MIN_WINDOW_BITS,ZLibOption.MAX_WINDOW_BITS);
    }
};
export var _validateZLibeLevel : (level : number) => void = (level : number) : void =>  {
    if (ZLibOption.MIN_LEVEL > level || ZLibOption.MAX_LEVEL < level) {
        throw new core.RangeError.range(level,ZLibOption.MIN_LEVEL,ZLibOption.MAX_LEVEL);
    }
};
export var _validateZLibMemLevel : (memLevel : number) => void = (memLevel : number) : void =>  {
    if (ZLibOption.MIN_MEM_LEVEL > memLevel || ZLibOption.MAX_MEM_LEVEL < memLevel) {
        throw new core.RangeError.range(memLevel,ZLibOption.MIN_MEM_LEVEL,ZLibOption.MAX_MEM_LEVEL);
    }
};
export var _validateZLibStrategy : (strategy : number) => void = (strategy : number) : void =>  {
    let strategies = new core.DartList.literal<number>(ZLibOption.STRATEGY_FILTERED,ZLibOption.STRATEGY_HUFFMAN_ONLY,ZLibOption.STRATEGY_RLE,ZLibOption.STRATEGY_FIXED,ZLibOption.STRATEGY_DEFAULT);
    if (strategies.indexOf(strategy) == -1) {
        throw new core.ArgumentError("Unsupported 'strategy'");
    }
};
export var sleep : (duration : core.DartDuration) => void = (duration : core.DartDuration) : void =>  {
    let milliseconds : number = duration.inMilliseconds;
    if (milliseconds < 0) {
        throw new core.ArgumentError("sleep: duration cannot be negative");
    }
    _ProcessUtils._sleep(milliseconds);
};
export var exit : (code : number) => void = (code : number) : void =>  {
    if (isNot(code, "number")) {
        throw new core.ArgumentError("Integer value for exit code expected");
    }
    _ProcessUtils._exit(code);
};
export var stdioType : (object : any) => StdioType = (object : any) : StdioType =>  {
    if (is(object, _StdStream)) {
        object = object._stream;
    }else if (op(Op.EQUALS,object,properties.stdout) || op(Op.EQUALS,object,properties.stderr)) {
        switch (_StdIOUtils._getStdioHandleType(op(Op.EQUALS,object,properties.stdout) ? 1 : 2)) {
            case properties._STDIO_HANDLE_TYPE_TERMINAL:
                return StdioType.TERMINAL;
            case properties._STDIO_HANDLE_TYPE_PIPE:
                return StdioType.PIPE;
            case properties._STDIO_HANDLE_TYPE_FILE:
                return StdioType.FILE;
        }
    }
    if (is(object, _FileStream)) {
        return StdioType.FILE;
    }
    if (is(object, Socket)) {
        let socketType : number = _StdIOUtils._socketType(object);
        if (socketType == null) return StdioType.OTHER;
        switch (socketType) {
            case properties._STDIO_HANDLE_TYPE_TERMINAL:
                return StdioType.TERMINAL;
            case properties._STDIO_HANDLE_TYPE_PIPE:
                return StdioType.PIPE;
            case properties._STDIO_HANDLE_TYPE_FILE:
                return StdioType.FILE;
        }
    }
    if (is(object, _IOSinkImpl)) {
        try {
            if (is(object._target, _FileStreamConsumer)) {
                return StdioType.FILE;
            }
        } catch (__error__) {

            {
                let e = __error__;
            }
        }
    }
    return StdioType.OTHER;
};
export var _getHttpVersion : () => string = () : string =>  {
    let version = Platform.version;
    let index : number = new core.DartString(version).indexOf('.',new core.DartString(version).indexOf('.') + 1);
    version = new core.DartString(version).substring(0,index);
    return `Dart/${version} (dart:io)`;
};
export namespace _Cookie {
    export type Constructors = '_Cookie' | 'fromSetCookieValue';
    export type Interface = Omit<_Cookie, Constructors>;
}
@DartClass
@Implements(Cookie)
export class _Cookie implements Cookie.Interface {
    name : string;

    value : string;

    expires : core.DartDateTime;

    maxAge : number;

    domain : string;

    path : string;

    httpOnly : boolean;

    secure : boolean;

    constructor(name? : string,value? : string) {
    }
    @defaultConstructor
    _Cookie(name? : string,value? : string) {
        this.httpOnly = false;
        this.secure = false;
        this.name = name;
        this.value = value;
        this.httpOnly = true;
        this._validate();
    }
    @namedConstructor
    fromSetCookieValue(value : string) {
        this.httpOnly = false;
        this.secure = false;
        this._parseSetCookieValue(value);
    }
    static fromSetCookieValue : new(value : string) => _Cookie;

    _parseSetCookieValue(s : string) : void {
        let index : number = 0;
        var done : () => boolean = () : boolean =>  {
            return index == new core.DartString(s).length;
        };
        var parseName : () => string = () : string =>  {
            let start : number = index;
            while (!done()){
                if (s[index] == "=") break;
                index++;
            }
            return new core.DartString(new core.DartString(s).substring(start,index)).trim();
        };
        var parseValue : () => string = () : string =>  {
            let start : number = index;
            while (!done()){
                if (s[index] == ";") break;
                index++;
            }
            return new core.DartString(new core.DartString(s).substring(start,index)).trim();
        };
        var expect : (expected : string) => void = (expected : string) : void =>  {
            if (done()) throw new HttpException(`Failed to parse header value [${s}]`);
            if (s[index] != expected) {
                throw new HttpException(`Failed to parse header value [${s}]`);
            }
            index++;
        };
        var parseAttributes : () => void = () : void =>  {
            var parseAttributeName : () => string = () : string =>  {
                let start : number = index;
                while (!done()){
                    if (s[index] == "=" || s[index] == ";") break;
                    index++;
                }
                return new core.DartString(new core.DartString(new core.DartString(s).substring(start,index)).trim()).toLowerCase();
            };
            var parseAttributeValue : () => string = () : string =>  {
                let start : number = index;
                while (!done()){
                    if (s[index] == ";") break;
                    index++;
                }
                return new core.DartString(new core.DartString(new core.DartString(s).substring(start,index)).trim()).toLowerCase();
            };
            while (!done()){
                let name : string = parseAttributeName();
                let value : string = "";
                if (!done() && s[index] == "=") {
                    index++;
                    value = parseAttributeValue();
                }
                if (name == "expires") {
                    this.expires = HttpDate._parseCookieDate(value);
                }else if (name == "max-age") {
                    this.maxAge = core.DartInt.parse(value);
                }else if (name == "domain") {
                    this.domain = value;
                }else if (name == "path") {
                    this.path = value;
                }else if (name == "httponly") {
                    this.httpOnly = true;
                }else if (name == "secure") {
                    this.secure = true;
                }
                if (!done()) index++;
            }
        };
        this.name = parseName();
        if (done() || new core.DartString(this.name).length == 0) {
            throw new HttpException(`Failed to parse header value [${s}]`);
        }
        index++;
        this.value = parseValue();
        this._validate();
        if (done()) return;
        index++;
        parseAttributes();
    }
    toString() : string {
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        ((_) : core.DartStringBuffer =>  {
            {
                _.write(this.name);
                _.write("=");
                _.write(this.value);
                return _;
            }
        })(sb);
        if (this.expires != null) {
            ((_) : core.DartStringBuffer =>  {
                {
                    _.write("; Expires=");
                    _.write(HttpDate.format(this.expires));
                    return _;
                }
            })(sb);
        }
        if (this.maxAge != null) {
            ((_) : core.DartStringBuffer =>  {
                {
                    _.write("; Max-Age=");
                    _.write(this.maxAge);
                    return _;
                }
            })(sb);
        }
        if (this.domain != null) {
            ((_) : core.DartStringBuffer =>  {
                {
                    _.write("; Domain=");
                    _.write(this.domain);
                    return _;
                }
            })(sb);
        }
        if (this.path != null) {
            ((_) : core.DartStringBuffer =>  {
                {
                    _.write("; Path=");
                    _.write(this.path);
                    return _;
                }
            })(sb);
        }
        if (this.secure) sb.write("; Secure");
        if (this.httpOnly) sb.write("; HttpOnly");
        return sb.toString();
    }
    _validate() : void {
        let SEPERATORS = new core.DartList.literal("(",")","<",">","@",",",";",":","\",'"',"/","[","]","?","=","{","}");
        for(let i : number = 0; i < new core.DartString(this.name).length; i++){
            let codeUnit : number = new core.DartString(this.name).codeUnits[i];
            if (codeUnit <= 32 || codeUnit >= 127 || SEPERATORS.indexOf(this.name[i]) >= 0) {
                throw new core.FormatException(`Invalid character in cookie name, code unit: '${codeUnit}'`);
            }
        }
        for(let i : number = 0; i < new core.DartString(this.value).length; i++){
            let codeUnit : number = new core.DartString(this.value).codeUnits[i];
            if (!(codeUnit == 33 || (codeUnit >= 35 && codeUnit <= 43) || (codeUnit >= 45 && codeUnit <= 58) || (codeUnit >= 60 && codeUnit <= 91) || (codeUnit >= 93 && codeUnit <= 126))) {
                throw new core.FormatException(`Invalid character in cookie value, code unit: '${codeUnit}'`);
            }
        }
    }
}

export namespace BytesBuilder {
    export type Constructors = never;
    export type Interface = Omit<BytesBuilder, Constructors>;
}
@DartClass
export class BytesBuilder {
    constructor(_namedArguments? : {copy? : boolean}) {
    }
    @defaultFactory
    static $BytesBuilder(_namedArguments? : {copy? : boolean}) : BytesBuilder {
        let {copy} = Object.assign({
            "copy" : true}, _namedArguments );
        if (copy) {
            return new _CopyingBytesBuilder();
        }else {
            return new _BytesBuilder();
        }
    }
    @Abstract
    add(bytes : core.DartList<number>) : void{ throw 'abstract'}
    @Abstract
    addByte(byte : number) : void{ throw 'abstract'}
    @Abstract
    takeBytes() : core.DartList<number>{ throw 'abstract'}
    @Abstract
    toBytes() : core.DartList<number>{ throw 'abstract'}
    @AbstractProperty
    get length() : number{ throw 'abstract'}
    @AbstractProperty
    get isEmpty() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isNotEmpty() : boolean{ throw 'abstract'}
    @Abstract
    clear() : void{ throw 'abstract'}
}

export namespace _HttpIncoming {
    export type Constructors = async.DartStream.Constructors | '_HttpIncoming';
    export type Interface = Omit<_HttpIncoming, Constructors>;
}
@DartClass
export class _HttpIncoming extends async.DartStream<core.DartList<number>> {
    _transferLength : number;

    _dataCompleter : async.DartCompleter<any>;

    _stream : async.DartStream<core.DartList<number>>;

    fullBodyRead : boolean;

    headers : _HttpHeaders;

    upgraded : boolean;

    statusCode : number;

    reasonPhrase : string;

    method : string;

    uri : lib5.Uri;

    hasSubscriber : boolean;

    get transferLength() : number {
        return this._transferLength;
    }
    constructor(headers : _HttpHeaders,_transferLength : number,_stream : async.DartStream<core.DartList<number>>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _HttpIncoming(headers : _HttpHeaders,_transferLength : number,_stream : async.DartStream<core.DartList<number>>) {
        this._dataCompleter = new async.DartCompleter<any>();
        this.fullBodyRead = false;
        this.upgraded = false;
        this.hasSubscriber = false;
        this.headers = headers;
        this._transferLength = _transferLength;
        this._stream = _stream;
    }
    listen(onData : (event : core.DartList<number>) => void,_namedArguments? : {onError? : Function,onDone? : () => void,cancelOnError? : boolean}) : async.DartStreamSubscription<core.DartList<number>> {
        let {onError,onDone,cancelOnError} = Object.assign({
        }, _namedArguments );
        this.hasSubscriber = true;
        return this._stream.handleError((error : any) =>  {
            throw new HttpException(error.message,{
                uri : this.uri});
        }).listen(onData,{
            onError : onError,onDone : onDone,cancelOnError : cancelOnError});
    }
    get dataDone() : async.Future<any> {
        return this._dataCompleter.future;
    }
    close(closing : boolean) : void {
        this.fullBodyRead = true;
        this.hasSubscriber = true;
        this._dataCompleter.complete(closing);
    }
}

export namespace _HttpInboundMessage {
    export type Constructors = async.DartStream.Constructors | '_HttpInboundMessage';
    export type Interface = Omit<_HttpInboundMessage, Constructors>;
}
@DartClass
export class _HttpInboundMessage extends async.DartStream<core.DartList<number>> {
    _incoming : _HttpIncoming;

    _cookies : core.DartList<Cookie>;

    constructor(_incoming : _HttpIncoming) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _HttpInboundMessage(_incoming : _HttpIncoming) {
        this._incoming = _incoming;
    }
    get cookies() : core.DartList<Cookie> {
        if (this._cookies != null) return this._cookies;
        return this._cookies = this.headers._parseCookies();
    }
    get headers() : _HttpHeaders {
        return this._incoming.headers;
    }
    get protocolVersion() : string {
        return this.headers.protocolVersion;
    }
    get contentLength() : number {
        return this.headers.contentLength;
    }
    get persistentConnection() : boolean {
        return this.headers.persistentConnection;
    }
}

export namespace _HeaderValue {
    export type Constructors = '_HeaderValue';
    export type Interface = Omit<_HeaderValue, Constructors>;
}
@DartClass
@Implements(HeaderValue)
export class _HeaderValue implements HeaderValue.Interface {
    _value : string;

    _parameters : core.DartMap<string,string>;

    _unmodifiableParameters : core.DartMap<string,string>;

    constructor(_value? : string,parameters? : core.DartMap<string,string>) {
    }
    @defaultConstructor
    _HeaderValue(_value? : string,parameters? : core.DartMap<string,string>) {
        _value = _value || "";
        this._value = _value;
        if (parameters != null) {
            this._parameters = new core.DartHashMap.from(parameters);
        }
    }
    static parse(value : string,_namedArguments? : {parameterSeparator? : any,valueSeparator? : any,preserveBackslash? : any}) : _HeaderValue {
        let {parameterSeparator,valueSeparator,preserveBackslash} = Object.assign({
            "parameterSeparator" : ";",
            "valueSeparator" : null,
            "preserveBackslash" : false}, _namedArguments );
        let result = new _HeaderValue();
        result._parse(value,parameterSeparator,valueSeparator,preserveBackslash);
        return result;
    }
    get value() : string {
        return this._value;
    }
    _ensureParameters() : void {
        if (this._parameters == null) {
            this._parameters = new core.DartHashMap<string,string>();
        }
    }
    get parameters() : core.DartMap<string,string> {
        this._ensureParameters();
        if (this._unmodifiableParameters == null) {
            this._unmodifiableParameters = new core.DartUnmodifiableMapView<any,any>(this._parameters);
        }
        return this._unmodifiableParameters;
    }
    toString() : string {
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        sb.write(this._value);
        if (this.parameters != null && this.parameters.length > 0) {
            this._parameters.forEach((name : string,value : string) =>  {
                ((_) : core.DartStringBuffer =>  {
                    {
                        _.write("; ");
                        _.write(name);
                        _.write("=");
                        _.write(value);
                        return _;
                    }
                })(sb);
            });
        }
        return sb.toString();
    }
    _parse(s : string,parameterSeparator : string,valueSeparator : string,preserveBackslash : boolean) : void {
        let index : number = 0;
        var done : () => boolean = () : boolean =>  {
            return index == new core.DartString(s).length;
        };
        var skipWS : () => void = () : void =>  {
            while (!done()){
                if (s[index] != " " && s[index] != "	") return;
                index++;
            }
        };
        var parseValue : () => string = () : string =>  {
            let start : number = index;
            while (!done()){
                if (s[index] == " " || s[index] == "	" || s[index] == valueSeparator || s[index] == parameterSeparator) break;
                index++;
            }
            return new core.DartString(s).substring(start,index);
        };
        var expect : (expected : string) => void = (expected : string) : void =>  {
            if (done() || s[index] != expected) {
                throw new HttpException("Failed to parse header value");
            }
            index++;
        };
        var maybeExpect : (expected : string) => void = (expected : string) : void =>  {
            if (s[index] == expected) index++;
        };
        var parseParameters : () => void = () : void =>  {
            let parameters = new core.DartHashMap<string,string>();
            this._parameters = new core.DartUnmodifiableMapView<any,any>(parameters);
            var parseParameterName : () => string = () : string =>  {
                let start : number = index;
                while (!done()){
                    if (s[index] == " " || s[index] == "	" || s[index] == "=" || s[index] == parameterSeparator || s[index] == valueSeparator) break;
                    index++;
                }
                return new core.DartString(new core.DartString(s).substring(start,index)).toLowerCase();
            };
            var parseParameterValue : () => string = () : string =>  {
                if (!done() && s[index] == "\"") {
                    let sb : core.DartStringBuffer = new core.DartStringBuffer();
                    index++;
                    while (!done()){
                        if (s[index] == "\") {
                            if (index + 1 == new core.DartString(s).length) {
                                throw new HttpException("Failed to parse header value");
                            }
                            if (preserveBackslash && s[index + 1] != "\"") {
                                sb.write(s[index]);
                            }
                            index++;
                        }else if (s[index] == "\"") {
                            index++;
                            break;
                        }
                        sb.write(s[index]);
                        index++;
                    }
                    return sb.toString();
                }else {
                    let val = parseValue();
                    return val == "" ? null : val;
                }
            };
            while (!done()){
                skipWS();
                if (done()) return;
                let name : string = parseParameterName();
                skipWS();
                if (done()) {
                    op(Op.INDEX_ASSIGN,parameters,name,null);
                    return;
                }
                maybeExpect("=");
                skipWS();
                if (done()) {
                    op(Op.INDEX_ASSIGN,parameters,name,null);
                    return;
                }
                let value : string = parseParameterValue();
                if (name == 'charset' && is(this, _ContentType) && value != null) {
                    value = new core.DartString(value).toLowerCase();
                }
                op(Op.INDEX_ASSIGN,parameters,name,value);
                skipWS();
                if (done()) return;
                if (s[index] == valueSeparator) return;
                expect(parameterSeparator);
            }
        };
        skipWS();
        this._value = parseValue();
        skipWS();
        if (done()) return;
        maybeExpect(parameterSeparator);
        parseParameters();
    }
}

export namespace _HttpHeaders {
    export type Constructors = '_HttpHeaders';
    export type Interface = Omit<_HttpHeaders, Constructors>;
}
@DartClass
@Implements(HttpHeaders)
export class _HttpHeaders implements HttpHeaders.Interface {
    _headers : core.DartMap<string,core.DartList<string>>;

    protocolVersion : string;

    _mutable : boolean;

    _noFoldingHeaders : core.DartList<string>;

    _contentLength : number;

    _persistentConnection : boolean;

    _chunkedTransferEncoding : boolean;

    _host : string;

    _port : number;

    _defaultPortForScheme : number;

    constructor(protocolVersion : string,_namedArguments? : {defaultPortForScheme? : number,initialHeaders? : _HttpHeaders}) {
    }
    @defaultConstructor
    _HttpHeaders(protocolVersion : string,_namedArguments? : {defaultPortForScheme? : number,initialHeaders? : _HttpHeaders}) {
        let {defaultPortForScheme,initialHeaders} = Object.assign({
            "defaultPortForScheme" : HttpClient.DEFAULT_HTTP_PORT}, _namedArguments );
        this._mutable = true;
        this._contentLength = -1;
        this._persistentConnection = true;
        this._chunkedTransferEncoding = false;
        this._headers = new core.DartHashMap<string,core.DartList<string>>();
        this._defaultPortForScheme = defaultPortForScheme;
        this.protocolVersion = protocolVersion;
        if (initialHeaders != null) {
            initialHeaders._headers.forEach((name : any,value : any) =>  {
                return this._headers.set(name,value);
            });
            this._contentLength = initialHeaders._contentLength;
            this._persistentConnection = initialHeaders._persistentConnection;
            this._chunkedTransferEncoding = initialHeaders._chunkedTransferEncoding;
            this._host = initialHeaders._host;
            this._port = initialHeaders._port;
        }
        if (this.protocolVersion == "1.0") {
            this._persistentConnection = false;
            this._chunkedTransferEncoding = false;
        }
    }
    [OperatorMethods.INDEX](name : string) : core.DartList<string> {
        return this._headers.get(new core.DartString(name).toLowerCase());
    }
    value(name : string) : string {
        name = new core.DartString(name).toLowerCase();
        let values : core.DartList<string> = this._headers.get(name);
        if (values == null) return null;
        if (values.length > 1) {
            throw new HttpException(`More than one value for header ${name}`);
        }
        return values[0];
    }
    add(name : string,value : any) : void {
        this._checkMutable();
        this._addAll(_HttpHeaders._validateField(name),value);
    }
    _addAll(name : string,value : any) : void {
        /* TODO (AssertStatementImpl) : assert (name == _validateField(name)); */;
        if (is(value, core.DartIterable<any>)) {
            for(let v of value) {
                this._add(name,_HttpHeaders._validateValue(v));
            }
        }else {
            this._add(name,_HttpHeaders._validateValue(value));
        }
    }
    set(name : string,value : core.DartObject) : void {
        this._checkMutable();
        name = _HttpHeaders._validateField(name);
        this._headers.remove(name);
        if (name == HttpHeaders.TRANSFER_ENCODING) {
            this._chunkedTransferEncoding = false;
        }
        this._addAll(name,value);
    }
    remove(name : string,value : core.DartObject) : void {
        this._checkMutable();
        name = _HttpHeaders._validateField(name);
        value = _HttpHeaders._validateValue(value);
        let values : core.DartList<string> = this._headers.get(name);
        if (values != null) {
            let index : number = values.indexOf(value);
            if (index != -1) {
                values.removeRange(index,index + 1);
            }
            if (values.length == 0) this._headers.remove(name);
        }
        if (name == HttpHeaders.TRANSFER_ENCODING && op(Op.EQUALS,value,"chunked")) {
            this._chunkedTransferEncoding = false;
        }
    }
    removeAll(name : string) : void {
        this._checkMutable();
        name = _HttpHeaders._validateField(name);
        this._headers.remove(name);
    }
    forEach(f : (name : string,values : core.DartList<string>) => void) : void {
        this._headers.forEach(f);
    }
    noFolding(name : string) : void {
        if (this._noFoldingHeaders == null) this._noFoldingHeaders = new core.DartList<string>();
        this._noFoldingHeaders.add(name);
    }
    get persistentConnection() : boolean {
        return this._persistentConnection;
    }
    set persistentConnection(persistentConnection : boolean) {
        this._checkMutable();
        if (persistentConnection == this._persistentConnection) return;
        if (persistentConnection) {
            if (this.protocolVersion == "1.1") {
                this.remove(HttpHeaders.CONNECTION,"close");
            }else {
                if (this._contentLength == -1) {
                    throw new HttpException("Trying to set 'Connection: Keep-Alive' on HTTP 1.0 headers with " + "no ContentLength");
                }
                this.add(HttpHeaders.CONNECTION,"keep-alive");
            }
        }else {
            if (this.protocolVersion == "1.1") {
                this.add(HttpHeaders.CONNECTION,"close");
            }else {
                this.remove(HttpHeaders.CONNECTION,"keep-alive");
            }
        }
        this._persistentConnection = persistentConnection;
    }
    get contentLength() : number {
        return this._contentLength;
    }
    set contentLength(contentLength : number) {
        this._checkMutable();
        if (this.protocolVersion == "1.0" && this.persistentConnection && contentLength == -1) {
            throw new HttpException("Trying to clear ContentLength on HTTP 1.0 headers with " + "'Connection: Keep-Alive' set");
        }
        if (this._contentLength == contentLength) return;
        this._contentLength = contentLength;
        if (this._contentLength >= 0) {
            if (this.chunkedTransferEncoding) this.chunkedTransferEncoding = false;
            this._set(HttpHeaders.CONTENT_LENGTH,new core.DartInt(contentLength).toString());
        }else {
            this.removeAll(HttpHeaders.CONTENT_LENGTH);
            if (this.protocolVersion == "1.1") {
                this.chunkedTransferEncoding = true;
            }
        }
    }
    get chunkedTransferEncoding() : boolean {
        return this._chunkedTransferEncoding;
    }
    set chunkedTransferEncoding(chunkedTransferEncoding : boolean) {
        this._checkMutable();
        if (chunkedTransferEncoding && this.protocolVersion == "1.0") {
            throw new HttpException("Trying to set 'Transfer-Encoding: Chunked' on HTTP 1.0 headers");
        }
        if (chunkedTransferEncoding == this._chunkedTransferEncoding) return;
        if (chunkedTransferEncoding) {
            let values : core.DartList<string> = this._headers.get(HttpHeaders.TRANSFER_ENCODING);
            if ((values == null || values.last != "chunked")) {
                this._addValue(HttpHeaders.TRANSFER_ENCODING,"chunked");
            }
            this.contentLength = -1;
        }else {
            this.remove(HttpHeaders.TRANSFER_ENCODING,"chunked");
        }
        this._chunkedTransferEncoding = chunkedTransferEncoding;
    }
    get host() : string {
        return this._host;
    }
    set host(host : string) {
        this._checkMutable();
        this._host = host;
        this._updateHostHeader();
    }
    get port() : number {
        return this._port;
    }
    set port(port : number) {
        this._checkMutable();
        this._port = port;
        this._updateHostHeader();
    }
    get ifModifiedSince() : core.DartDateTime {
        let values : core.DartList<string> = this._headers.get(HttpHeaders.IF_MODIFIED_SINCE);
        if (values != null) {
            try {
                return HttpDate.parse(values[0]);
            } catch (__error__) {

                if (is(__error__,core.Exception)){
                    let e : core.Exception = __error__;
                    return null;
                }
            }
        }
        return null;
    }
    set ifModifiedSince(ifModifiedSince : core.DartDateTime) {
        this._checkMutable();
        let formatted : string = HttpDate.format(ifModifiedSince.toUtc());
        this._set(HttpHeaders.IF_MODIFIED_SINCE,formatted);
    }
    get date() : core.DartDateTime {
        let values : core.DartList<string> = this._headers.get(HttpHeaders.DATE);
        if (values != null) {
            try {
                return HttpDate.parse(values[0]);
            } catch (__error__) {

                if (is(__error__,core.Exception)){
                    let e : core.Exception = __error__;
                    return null;
                }
            }
        }
        return null;
    }
    set date(date : core.DartDateTime) {
        this._checkMutable();
        let formatted : string = HttpDate.format(date.toUtc());
        this._set("date",formatted);
    }
    get expires() : core.DartDateTime {
        let values : core.DartList<string> = this._headers.get(HttpHeaders.EXPIRES);
        if (values != null) {
            try {
                return HttpDate.parse(values[0]);
            } catch (__error__) {

                if (is(__error__,core.Exception)){
                    let e : core.Exception = __error__;
                    return null;
                }
            }
        }
        return null;
    }
    set expires(expires : core.DartDateTime) {
        this._checkMutable();
        let formatted : string = HttpDate.format(expires.toUtc());
        this._set(HttpHeaders.EXPIRES,formatted);
    }
    get contentType() : ContentType {
        let values = this._headers.get("content-type");
        if (values != null) {
            return ContentType.parse(values[0]);
        }else {
            return null;
        }
    }
    set contentType(contentType : ContentType) {
        this._checkMutable();
        this._set(HttpHeaders.CONTENT_TYPE,contentType.toString());
    }
    clear() : void {
        this._checkMutable();
        this._headers.clear();
        this._contentLength = -1;
        this._persistentConnection = true;
        this._chunkedTransferEncoding = false;
        this._host = null;
        this._port = null;
    }
    _add(name : string,value : any) : void {
        /* TODO (AssertStatementImpl) : assert (name == _validateField(name)); */;
        switch (new core.DartString(name).length) {
            case 4:
                if (op(Op.EQUALS,HttpHeaders.DATE,name)) {
                    this._addDate(name,value);
                    return;
                }
                if (op(Op.EQUALS,HttpHeaders.HOST,name)) {
                    this._addHost(name,value);
                    return;
                }
                break;
            case 7:
                if (op(Op.EQUALS,HttpHeaders.EXPIRES,name)) {
                    this._addExpires(name,value);
                    return;
                }
                break;
            case 10:
                if (op(Op.EQUALS,HttpHeaders.CONNECTION,name)) {
                    this._addConnection(name,value);
                    return;
                }
                break;
            case 12:
                if (op(Op.EQUALS,HttpHeaders.CONTENT_TYPE,name)) {
                    this._addContentType(name,value);
                    return;
                }
                break;
            case 14:
                if (op(Op.EQUALS,HttpHeaders.CONTENT_LENGTH,name)) {
                    this._addContentLength(name,value);
                    return;
                }
                break;
            case 17:
                if (op(Op.EQUALS,HttpHeaders.TRANSFER_ENCODING,name)) {
                    this._addTransferEncoding(name,value);
                    return;
                }
                if (op(Op.EQUALS,HttpHeaders.IF_MODIFIED_SINCE,name)) {
                    this._addIfModifiedSince(name,value);
                    return;
                }
        }
        this._addValue(name,value);
    }
    _addContentLength(name : string,value : any) : void {
        if (is(value, "number")) {
            this.contentLength = value;
        }else if (is(value, "string")) {
            this.contentLength = core.DartInt.parse(value);
        }else {
            throw new HttpException(`Unexpected type for header named ${name}`);
        }
    }
    _addTransferEncoding(name : string,value : any) : void {
        if (op(Op.EQUALS,value,"chunked")) {
            this.chunkedTransferEncoding = true;
        }else {
            this._addValue(HttpHeaders.TRANSFER_ENCODING,value);
        }
    }
    _addDate(name : string,value : any) : void {
        if (is(value, core.DartDateTime)) {
            this.date = value;
        }else if (is(value, "string")) {
            this._set(HttpHeaders.DATE,value);
        }else {
            throw new HttpException(`Unexpected type for header named ${name}`);
        }
    }
    _addExpires(name : string,value : any) : void {
        if (is(value, core.DartDateTime)) {
            this.expires = value;
        }else if (is(value, "string")) {
            this._set(HttpHeaders.EXPIRES,value);
        }else {
            throw new HttpException(`Unexpected type for header named ${name}`);
        }
    }
    _addIfModifiedSince(name : string,value : any) : void {
        if (is(value, core.DartDateTime)) {
            this.ifModifiedSince = value;
        }else if (is(value, "string")) {
            this._set(HttpHeaders.IF_MODIFIED_SINCE,value);
        }else {
            throw new HttpException(`Unexpected type for header named ${name}`);
        }
    }
    _addHost(name : string,value : any) : void {
        if (is(value, "string")) {
            let pos : number = new core.DartString(value).indexOf(":");
            if (pos == -1) {
                this._host = value;
                this._port = HttpClient.DEFAULT_HTTP_PORT;
            }else {
                if (pos > 0) {
                    this._host = new core.DartString(value).substring(0,pos);
                }else {
                    this._host = null;
                }
                if (pos + 1 == new core.DartString(value).length) {
                    this._port = HttpClient.DEFAULT_HTTP_PORT;
                }else {
                    try {
                        this._port = core.DartInt.parse(new core.DartString(value).substring(pos + 1));
                    } catch (__error__) {

                        if (is(__error__,core.FormatException)){
                            let e : core.FormatException = __error__;
                            this._port = null;
                        }
                    }
                }
            }
            this._set(HttpHeaders.HOST,value);
        }else {
            throw new HttpException(`Unexpected type for header named ${name}`);
        }
    }
    _addConnection(name : string,value : any) : void {
        let lowerCaseValue = value.toLowerCase();
        if (op(Op.EQUALS,lowerCaseValue,'close')) {
            this._persistentConnection = false;
        }else if (op(Op.EQUALS,lowerCaseValue,'keep-alive')) {
            this._persistentConnection = true;
        }
        this._addValue(name,value);
    }
    _addContentType(name : string,value : any) : void {
        this._set(HttpHeaders.CONTENT_TYPE,value);
    }
    _addValue(name : string,value : core.DartObject) : void {
        let values : core.DartList<string> = this._headers.get(name);
        if (values == null) {
            values = new core.DartList<string>();
            this._headers.set(name,values);
        }
        if (is(value, core.DartDateTime)) {
            values.add(HttpDate.format(value));
        }else if (is(value, "string")) {
            values.add(value);
        }else {
            values.add(_HttpHeaders._validateValue(value.toString()));
        }
    }
    _set(name : string,value : string) : void {
        /* TODO (AssertStatementImpl) : assert (name == _validateField(name)); */;
        let values : core.DartList<string> = new core.DartList<string>();
        this._headers.set(name,values);
        values.add(value);
    }
    _checkMutable() {
        if (!this._mutable) throw new HttpException("HTTP headers are not mutable");
    }
    _updateHostHeader() {
        let defaultPort : boolean = this._port == null || this._port == this._defaultPortForScheme;
        this._set("host",defaultPort ? this.host : `${this.host}:${this._port}`);
    }
    _foldHeader(name : string) {
        if (name == HttpHeaders.SET_COOKIE || (this._noFoldingHeaders != null && this._noFoldingHeaders.indexOf(name) != -1)) {
            return false;
        }
        return true;
    }
    _finalize() : void {
        this._mutable = false;
    }
    _build(builder : BytesBuilder) : void {
        for(let name of this._headers.keys) {
            let values : core.DartList<string> = this._headers.get(name);
            let fold : boolean = this._foldHeader(name);
            let nameData = new core.DartString(name).codeUnits;
            builder.add(nameData);
            builder.addByte(_CharCode.COLON);
            builder.addByte(_CharCode.SP);
            for(let i : number = 0; i < values.length; i++){
                if (i > 0) {
                    if (fold) {
                        builder.addByte(_CharCode.COMMA);
                        builder.addByte(_CharCode.SP);
                    }else {
                        builder.addByte(_CharCode.CR);
                        builder.addByte(_CharCode.LF);
                        builder.add(nameData);
                        builder.addByte(_CharCode.COLON);
                        builder.addByte(_CharCode.SP);
                    }
                }
                builder.add(new core.DartString(values[i]).codeUnits);
            }
            builder.addByte(_CharCode.CR);
            builder.addByte(_CharCode.LF);
        }
    }
    toString() : string {
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        this._headers.forEach((name : string,values : core.DartList<string>) =>  {
            ((_) : core.DartStringBuffer =>  {
                {
                    _.write(name);
                    _.write(": ");
                    return _;
                }
            })(sb);
            let fold : boolean = this._foldHeader(name);
            for(let i : number = 0; i < values.length; i++){
                if (i > 0) {
                    if (fold) {
                        sb.write(", ");
                    }else {
                        ((_) : core.DartStringBuffer =>  {
                            {
                                _.write("\n");
                                _.write(name);
                                _.write(": ");
                                return _;
                            }
                        })(sb);
                    }
                }
                sb.write(values[i]);
            }
            sb.write("\n");
        });
        return sb.toString();
    }
    _parseCookies() : core.DartList<Cookie> {
        let cookies = new core.DartList<Cookie>();
        var parseCookieString : (s : string) => void = (s : string) : void =>  {
            let index : number = 0;
            var done : () => boolean = () : boolean =>  {
                return index == -1 || index == new core.DartString(s).length;
            };
            var skipWS : () => void = () : void =>  {
                while (!done()){
                    if (s[index] != " " && s[index] != "	") return;
                    index++;
                }
            };
            var parseName : () => string = () : string =>  {
                let start : number = index;
                while (!done()){
                    if (s[index] == " " || s[index] == "	" || s[index] == "=") break;
                    index++;
                }
                return new core.DartString(s).substring(start,index);
            };
            var parseValue : () => string = () : string =>  {
                let start : number = index;
                while (!done()){
                    if (s[index] == " " || s[index] == "	" || s[index] == ";") break;
                    index++;
                }
                return new core.DartString(s).substring(start,index);
            };
            var expect : (expected : string) => boolean = (expected : string) : boolean =>  {
                if (done()) return false;
                if (s[index] != expected) return false;
                index++;
                return true;
            };
            while (!done()){
                skipWS();
                if (done()) return;
                let name : string = parseName();
                skipWS();
                if (!expect("=")) {
                    index = new core.DartString(s).indexOf(';',index);
                    continue;
                }
                skipWS();
                let value : string = parseValue();
                try {
                    cookies.add(new _Cookie(name,value));
                } catch (__error__) {

                    {
                        let _ = __error__;
                    }
                }
                skipWS();
                if (done()) return;
                if (!expect(";")) {
                    index = new core.DartString(s).indexOf(';',index);
                    continue;
                }
            }
        };
        let values : core.DartList<string> = this._headers.get(HttpHeaders.COOKIE);
        if (values != null) {
            values.forEach((headerValue : any) =>  {
                return parseCookieString(headerValue);
            });
        }
        return cookies;
    }
    static _validateField(field : string) : string {
        for(let i = 0; i < new core.DartString(field).length; i++){
            if (!_HttpParser._isTokenChar(new core.DartString(field).codeUnitAt(i))) {
                throw new core.FormatException(`Invalid HTTP header field name: ${convert.properties.JSON.encode(field)}`);
            }
        }
        return new core.DartString(field).toLowerCase();
    }
    static _validateValue(value : any) {
        if (isNot(value, "string")) return value;
        for(let i = 0; i < new core.DartString(value).length; i++){
            if (!_HttpParser._isValueChar(new core.DartString(value).codeUnitAt(i))) {
                throw new core.FormatException(`Invalid HTTP header field value: ${convert.properties.JSON.encode(value)}`);
            }
        }
        return value;
    }
}

export namespace HttpDate {
    export type Constructors = 'HttpDate';
    export type Interface = Omit<HttpDate, Constructors>;
}
@DartClass
export class HttpDate {
    static format(date : core.DartDateTime) : string {
        let wkday : core.DartList<any> = new core.DartList.literal("Mon","Tue","Wed","Thu","Fri","Sat","Sun");
        let month : core.DartList<any> = new core.DartList.literal("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
        let d : core.DartDateTime = date.toUtc();
        let sb : core.DartStringBuffer = ((_) : core.DartStringBuffer =>  {
            {
                _.write(wkday[d.weekday - 1]);
                _.write(", ");
                _.write(d.day <= 9 ? "0" : "");
                _.write(new core.DartInt(d.day).toString());
                _.write(" ");
                _.write(month[d.month - 1]);
                _.write(" ");
                _.write(new core.DartInt(d.year).toString());
                _.write(d.hour <= 9 ? " 0" : " ");
                _.write(new core.DartInt(d.hour).toString());
                _.write(d.minute <= 9 ? ":0" : ":");
                _.write(new core.DartInt(d.minute).toString());
                _.write(d.second <= 9 ? ":0" : ":");
                _.write(new core.DartInt(d.second).toString());
                _.write(" GMT");
                return _;
            }
        })(new core.DartStringBuffer());
        return sb.toString();
    }
    static parse(date : string) : core.DartDateTime {
        let SP : number = 32;
        let wkdays : core.DartList<any> = new core.DartList.literal("Mon","Tue","Wed","Thu","Fri","Sat","Sun");
        let weekdays : core.DartList<any> = new core.DartList.literal("Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday");
        let months : core.DartList<any> = new core.DartList.literal("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
        let wkdaysLowerCase : core.DartList<any> = new core.DartList.literal("mon","tue","wed","thu","fri","sat","sun");
        let weekdaysLowerCase : core.DartList<any> = new core.DartList.literal("monday","tuesday","wednesday","thursday","friday","saturday","sunday");
        let monthsLowerCase : core.DartList<any> = new core.DartList.literal("jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec");
        let formatRfc1123 : number = 0;
        let formatRfc850 : number = 1;
        let formatAsctime : number = 2;
        let index : number = 0;
        let tmp : string;
        let format : number;
        var expect : (s : string) => void = (s : string) : void =>  {
            if (new core.DartString(date).length - index < new core.DartString(s).length) {
                throw new HttpException(`Invalid HTTP date ${date}`);
            }
            let tmp : string = new core.DartString(date).substring(index,index + new core.DartString(s).length);
            if (tmp != s) {
                throw new HttpException(`Invalid HTTP date ${date}`);
            }
            index += new core.DartString(s).length;
        };
        var expectWeekday : () => number = () : number =>  {
            let weekday : number;
            let pos : number = new core.DartString(date).indexOf(",",index);
            if (pos == -1) {
                let pos : number = new core.DartString(date).indexOf(" ",index);
                if (pos == -1) throw new HttpException(`Invalid HTTP date ${date}`);
                tmp = new core.DartString(date).substring(index,pos);
                index = pos + 1;
                weekday = wkdays.indexOf(tmp);
                if (weekday != -1) {
                    format = formatAsctime;
                    return weekday;
                }
            }else {
                tmp = new core.DartString(date).substring(index,pos);
                index = pos + 1;
                weekday = wkdays.indexOf(tmp);
                if (weekday != -1) {
                    format = formatRfc1123;
                    return weekday;
                }
                weekday = weekdays.indexOf(tmp);
                if (weekday != -1) {
                    format = formatRfc850;
                    return weekday;
                }
            }
            throw new HttpException(`Invalid HTTP date ${date}`);
        };
        var expectMonth : (separator : string) => number = (separator : string) : number =>  {
            let pos : number = new core.DartString(date).indexOf(separator,index);
            if (pos - index != 3) throw new HttpException(`Invalid HTTP date ${date}`);
            tmp = new core.DartString(date).substring(index,pos);
            index = pos + 1;
            let month : number = months.indexOf(tmp);
            if (month != -1) return month;
            throw new HttpException(`Invalid HTTP date ${date}`);
        };
        var expectNum : (separator : string) => number = (separator : string) : number =>  {
            let pos : number;
            if (new core.DartString(separator).length > 0) {
                pos = new core.DartString(date).indexOf(separator,index);
            }else {
                pos = new core.DartString(date).length;
            }
            let tmp : string = new core.DartString(date).substring(index,pos);
            index = pos + new core.DartString(separator).length;
            try {
                let value : number = core.DartInt.parse(tmp);
                return value;
            } catch (__error__) {

                if (is(__error__,core.FormatException)){
                    let e : core.FormatException = __error__;
                    throw new HttpException(`Invalid HTTP date ${date}`);
                }
            }
        };
        var expectEnd : () => void = () : void =>  {
            if (index != new core.DartString(date).length) {
                throw new HttpException(`Invalid HTTP date ${date}`);
            }
        };
        let weekday : number = expectWeekday();
        let day : number;
        let month : number;
        let year : number;
        let hours : number;
        let minutes : number;
        let seconds : number;
        if (format == formatAsctime) {
            month = expectMonth(" ");
            if (new core.DartString(date).codeUnitAt(index) == SP) index++;
            day = expectNum(" ");
            hours = expectNum(":");
            minutes = expectNum(":");
            seconds = expectNum(" ");
            year = expectNum("");
        }else {
            expect(" ");
            day = expectNum(format == formatRfc1123 ? " " : "-");
            month = expectMonth(format == formatRfc1123 ? " " : "-");
            year = expectNum(" ");
            hours = expectNum(":");
            minutes = expectNum(":");
            seconds = expectNum(" ");
            expect("GMT");
        }
        expectEnd();
        return new core.DartDateTime.utc(year,month + 1,day,hours,minutes,seconds,0);
    }
    static _parseCookieDate(date : string) : core.DartDateTime {
        let monthsLowerCase : core.DartList<any> = new core.DartList.literal("jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec");
        let position : number = 0;
        var error : () => void = () : void =>  {
            throw new HttpException(`Invalid cookie date ${date}`);
        };
        var isEnd : () => boolean = () : boolean =>  {
            return position == new core.DartString(date).length;
        };
        var isDelimiter : (s : string) => boolean = (s : string) : boolean =>  {
            let char : number = new core.DartString(s).codeUnitAt(0);
            if (char == 9) return true;
            if (char >= 32 && char <= 47) return true;
            if (char >= 59 && char <= 64) return true;
            if (char >= 91 && char <= 96) return true;
            if (char >= 123 && char <= 126) return true;
            return false;
        };
        var isNonDelimiter : (s : string) => boolean = (s : string) : boolean =>  {
            let char : number = new core.DartString(s).codeUnitAt(0);
            if (char >= 0 && char <= 8) return true;
            if (char >= 10 && char <= 31) return true;
            if (char >= 48 && char <= 57) return true;
            if (char == 58) return true;
            if (char >= 65 && char <= 90) return true;
            if (char >= 97 && char <= 122) return true;
            if (char >= 127 && char <= 255) return true;
            return false;
        };
        var isDigit : (s : string) => boolean = (s : string) : boolean =>  {
            let char : number = new core.DartString(s).codeUnitAt(0);
            if (char > 47 && char < 58) return true;
            return false;
        };
        var getMonth : (month : string) => number = (month : string) : number =>  {
            if (new core.DartString(month).length < 3) return -1;
            return monthsLowerCase.indexOf(new core.DartString(month).substring(0,3));
        };
        var toInt : (s : string) => number = (s : string) : number =>  {
            let index : number = 0;
            for(; index < new core.DartString(s).length && isDigit(s[index]); index++)/* TODO (EmptyStatementImpl) : ; */;
            return core.DartInt.parse(new core.DartString(s).substring(0,index));
        };
        let tokens = new core.DartList.literal();
        while (!isEnd()){
            while (!isEnd() && isDelimiter(date[position]))position++;
            let start : number = position;
            while (!isEnd() && isNonDelimiter(date[position]))position++;
            tokens.add(new core.DartString(new core.DartString(date).substring(start,position)).toLowerCase());
            while (!isEnd() && isDelimiter(date[position]))position++;
        }
        let timeStr : string;
        let dayOfMonthStr : string;
        let monthStr : string;
        let yearStr : string;
        for(let token of tokens) {
            if (op(Op.LT,token.length,1)) continue;
            if (timeStr == null && op(Op.GEQ,token.length,5) && isDigit(op(Op.INDEX,token,0)) && (op(Op.EQUALS,op(Op.INDEX,token,1),":") || (isDigit(op(Op.INDEX,token,1)) && op(Op.EQUALS,op(Op.INDEX,token,2),":")))) {
                timeStr = token;
            }else if (dayOfMonthStr == null && isDigit(op(Op.INDEX,token,0))) {
                dayOfMonthStr = token;
            }else if (monthStr == null && getMonth(token) >= 0) {
                monthStr = token;
            }else if (yearStr == null && op(Op.GEQ,token.length,2) && isDigit(op(Op.INDEX,token,0)) && isDigit(op(Op.INDEX,token,1))) {
                yearStr = token;
            }
        }
        if (timeStr == null || dayOfMonthStr == null || monthStr == null || yearStr == null) {
            error();
        }
        let year : number = toInt(yearStr);
        if (year >= 70 && year <= 99) year += 1900;else if (year >= 0 && year <= 69) year += 2000;
        if (year < 1601) error();
        let dayOfMonth : number = toInt(dayOfMonthStr);
        if (dayOfMonth < 1 || dayOfMonth > 31) error();
        let month : number = getMonth(monthStr) + 1;
        let timeList = new core.DartString(timeStr).split(":");
        if (timeList.length != 3) error();
        let hour : number = toInt(timeList[0]);
        let minute : number = toInt(timeList[1]);
        let second : number = toInt(timeList[2]);
        if (hour > 23) error();
        if (minute > 59) error();
        if (second > 59) error();
        return new core.DartDateTime.utc(year,month,dayOfMonth,hour,minute,second,0);
    }
    constructor() {
    }
    @defaultConstructor
    HttpDate() {
    }
}

export namespace RedirectException {
    export type Constructors = 'RedirectException';
    export type Interface = Omit<RedirectException, Constructors>;
}
@DartClass
@Implements(HttpException)
export class RedirectException implements HttpException.Interface {
    message : string;

    redirects : core.DartList<RedirectInfo>;

    constructor(message : string,redirects : core.DartList<RedirectInfo>) {
    }
    @defaultConstructor
    RedirectException(message : string,redirects : core.DartList<RedirectInfo>) {
        this.message = message;
        this.redirects = redirects;
    }
    toString() : string {
        return `RedirectException: ${this.message}`;
    }
    get uri() : lib5.Uri {
        return this.redirects.last.location;
    }
}

export namespace WebSocketException {
    export type Constructors = 'WebSocketException';
    export type Interface = Omit<WebSocketException, Constructors>;
}
@DartClass
@Implements(IOException)
export class WebSocketException implements IOException.Interface {
    message : string;

    constructor(message? : string) {
    }
    @defaultConstructor
    WebSocketException(message? : string) {
        message = message || "";
        this.message = message;
    }
    toString() : string {
        return `WebSocketException: ${this.message}`;
    }
}

export namespace _HttpGZipSink {
    export type Constructors = convert.ByteConversionSink.Constructors | '_HttpGZipSink';
    export type Interface = Omit<_HttpGZipSink, Constructors>;
}
@DartClass
export class _HttpGZipSink extends convert.ByteConversionSink {
    _consume : (bytes : core.DartList<number>) => void;

    constructor(_consume : (bytes : core.DartList<number>) => void) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _HttpGZipSink(_consume : (bytes : core.DartList<number>) => void) {
        this._consume = _consume;
    }
    add(chunk : core.DartList<number>) : void {
        this._consume(chunk);
    }
    addSlice(chunk : core.DartList<number>,start : number,end : number,isLast : boolean) : void {
        if (is(chunk, typed_data.Uint8List)) {
            this._consume(new typed_data.Uint8List.view(chunk.buffer,start,end - start));
        }else {
            this._consume(chunk.sublist(start,end - start));
        }
    }
    close() : void {
    }
}

export namespace _HttpOutgoing {
    export type Constructors = '_HttpOutgoing';
    export type Interface = Omit<_HttpOutgoing, Constructors>;
}
@DartClass
@Implements(async.StreamConsumer)
export class _HttpOutgoing implements async.StreamConsumer.Interface<core.DartList<number>> {
    private static __$_footerAndChunk0Length : core.DartList<number>;
    static get _footerAndChunk0Length() : core.DartList<number> { 
        if (this.__$_footerAndChunk0Length===undefined) {
            this.__$_footerAndChunk0Length = new core.DartList.literal(_CharCode.CR,_CharCode.LF,48,_CharCode.CR,_CharCode.LF,_CharCode.CR,_CharCode.LF);
        }
        return this.__$_footerAndChunk0Length;
    }

    private static __$_chunk0Length : core.DartList<number>;
    static get _chunk0Length() : core.DartList<number> { 
        if (this.__$_chunk0Length===undefined) {
            this.__$_chunk0Length = new core.DartList.literal(48,_CharCode.CR,_CharCode.LF,_CharCode.CR,_CharCode.LF);
        }
        return this.__$_chunk0Length;
    }

    _doneCompleter : async.DartCompleter<Socket>;

    socket : Socket;

    ignoreBody : boolean;

    headersWritten : boolean;

    _buffer : typed_data.Uint8List;

    _length : number;

    _closeFuture : async.Future<any>;

    chunked : boolean;

    _pendingChunkedFooter : number;

    contentLength : number;

    _bytesWritten : number;

    _gzip : boolean;

    _gzipSink : convert.ByteConversionSink;

    _gzipAdd : (bytes : core.DartList<number>) => void;

    _gzipBuffer : typed_data.Uint8List;

    _gzipBufferLength : number;

    _socketError : boolean;

    outbound : _HttpOutboundMessage<any>;

    constructor(socket : Socket) {
    }
    @defaultConstructor
    _HttpOutgoing(socket : Socket) {
        this._doneCompleter = new async.DartCompleter<Socket>();
        this.ignoreBody = false;
        this.headersWritten = false;
        this._length = 0;
        this.chunked = false;
        this._pendingChunkedFooter = 0;
        this._bytesWritten = 0;
        this._gzip = false;
        this._gzipBufferLength = 0;
        this._socketError = false;
        this.socket = socket;
    }
    writeHeaders(_namedArguments? : {drainRequest? : boolean,setOutgoing? : boolean}) : async.Future<any> {
        let {drainRequest,setOutgoing} = Object.assign({
            "drainRequest" : true,
            "setOutgoing" : true}, _namedArguments );
        if (this.headersWritten) return null;
        this.headersWritten = true;
        let drainFuture : async.Future<any>;
        let gzip : boolean = false;
        if (is(this.outbound, _HttpResponse)) {
            let response : _HttpResponse = this.outbound;
            if (response._httpRequest._httpServer.autoCompress && this.outbound.bufferOutput && this.outbound.headers.chunkedTransferEncoding) {
                let acceptEncodings : core.DartList<any> = op(Op.INDEX,response._httpRequest.headers,HttpHeaders.ACCEPT_ENCODING);
                let contentEncoding : core.DartList<any> = op(Op.INDEX,this.outbound.headers,HttpHeaders.CONTENT_ENCODING);
                if (acceptEncodings != null && acceptEncodings.expand((list : any) =>  {
                    return new core.DartString(list).split(",");
                }).any((encoding : any) =>  {
                    return op(Op.EQUALS,encoding.trim().toLowerCase(),"gzip");
                }) && contentEncoding == null) {
                    this.outbound.headers.set(HttpHeaders.CONTENT_ENCODING,"gzip");
                    gzip = true;
                }
            }
            if (drainRequest && !response._httpRequest._incoming.hasSubscriber) {
                drainFuture = response._httpRequest.drain().catchError((_ : any) =>  {
                });
            }
        }else {
            drainRequest = false;
        }
        if (!this.ignoreBody) {
            if (setOutgoing) {
                let contentLength : number = this.outbound.headers.contentLength;
                if (this.outbound.headers.chunkedTransferEncoding) {
                    this.chunked = true;
                    if (gzip) this.gzip = true;
                }else if (contentLength >= 0) {
                    this.contentLength = contentLength;
                }
            }
            if (drainFuture != null) {
                return drainFuture.then((_ : any) =>  {
                    return this.outbound._writeHeader();
                });
            }
        }
        this.outbound._writeHeader();
        return null;
    }
    addStream(stream : async.DartStream<core.DartList<number>>) : async.Future<any> {
        if (this._socketError) {
            stream.listen(null).cancel();
            return new async.Future.value(this.outbound);
        }
        if (this.ignoreBody) {
            stream.drain().catchError((_ : any) =>  {
            });
            let future = this.writeHeaders();
            if (future != null) {
                return future.then((_ : any) =>  {
                    return this.close();
                });
            }
            return this.close();
        }
        let sub : async.DartStreamSubscription<core.DartList<number>>;
        let controller = new async.DartStreamController<core.DartList<number>>({
            onPause : () =>  {
                return sub.pause();
            },onResume : () =>  {
                return sub.resume();
            },sync : true});
        var onData : (data : core.DartList<number>) => void = (data : core.DartList<number>) : void =>  {
            if (this._socketError) return;
            if (data.length == 0) return;
            if (this.chunked) {
                if (this._gzip) {
                    this._gzipAdd = controller.add.bind(controller);
                    this._addGZipChunk(data,this._gzipSink.add.bind(this._gzipSink));
                    this._gzipAdd = null;
                    return;
                }
                this._addChunk(this._chunkHeader(data.length),controller.add.bind(controller));
                this._pendingChunkedFooter = 2;
            }else {
                if (this.contentLength != null) {
                    this._bytesWritten += data.length;
                    if (this._bytesWritten > this.contentLength) {
                        controller.addError(new HttpException("Content size exceeds specified contentLength. " + `${this._bytesWritten} bytes written while expected ` + `${this.contentLength}. ` + `[${new core.DartString.fromCharCodes(data).valueOf()}]`));
                        return;
                    }
                }
            }
            this._addChunk(data,controller.add.bind(controller));
        };
        sub = stream.listen(onData,{
            onError : controller.addError.bind(controller),onDone : controller.close.bind(controller),cancelOnError : true});
        if (!this.headersWritten) {
            let future = this.writeHeaders();
            if (future != null) {
                sub.pause(future);
            }
        }
        return this.socket.addStream(controller.stream).then((_ : any) =>  {
            return this.outbound;
        },{
            onError : (error : any,stackTrace : any) =>  {
                if (this._gzip) this._gzipSink.close();
                this._socketError = true;
                this._doneCompleter.completeError(error,stackTrace);
                if (this._ignoreError(error)) {
                    return this.outbound;
                }else {
                    throw error;
                }
            }});
    }
    close() : async.Future<any> {
        if (this._closeFuture != null) return this._closeFuture;
        if (this._socketError) return new async.Future.value(this.outbound);
        if (this.outbound._isConnectionClosed) return new async.Future.value(this.outbound);
        if (!this.headersWritten && !this.ignoreBody) {
            if (this.outbound.headers.contentLength == -1) {
                this.outbound.headers.chunkedTransferEncoding = false;
                this.outbound.headers.contentLength = 0;
            }else if (this.outbound.headers.contentLength > 0) {
                let error = new HttpException("No content even though contentLength was specified to be " + `greater than 0: ${this.outbound.headers.contentLength}.`,{
                    uri : this.outbound._uri});
                this._doneCompleter.completeError(error);
                return this._closeFuture = new async.Future.error(error);
            }
        }
        if (this.contentLength != null) {
            if (this._bytesWritten < this.contentLength) {
                let error = new HttpException("Content size below specified contentLength. " + ` ${this._bytesWritten} bytes written but expected ` + `${this.contentLength}.`,{
                    uri : this.outbound._uri});
                this._doneCompleter.completeError(error);
                return this._closeFuture = new async.Future.error(error);
            }
        }
        var finalize : () => async.Future<any> = () : async.Future<any> =>  {
            if (this.chunked) {
                if (this._gzip) {
                    this._gzipAdd = this.socket.add.bind(this.socket);
                    if (this._gzipBufferLength > 0) {
                        this._gzipSink.add(new typed_data.Uint8List.view(this._gzipBuffer.buffer,0,this._gzipBufferLength));
                    }
                    this._gzipBuffer = null;
                    this._gzipSink.close();
                    this._gzipAdd = null;
                }
                this._addChunk(this._chunkHeader(0),this.socket.add.bind(this.socket));
            }
            if (this._length > 0) {
                this.socket.add(new typed_data.Uint8List.view(this._buffer.buffer,0,this._length));
            }
            this._buffer = null;
            return this.socket.flush().then((_ : any) =>  {
                this._doneCompleter.complete(this.socket);
                return this.outbound;
            },{
                onError : (error : any,stackTrace : any) =>  {
                    this._doneCompleter.completeError(error,stackTrace);
                    if (this._ignoreError(error)) {
                        return this.outbound;
                    }else {
                        throw error;
                    }
                }});
        };
        let future = this.writeHeaders();
        if (future != null) {
            return this._closeFuture = future.whenComplete(finalize);
        }
        return this._closeFuture = finalize();
    }
    get done() : async.Future<Socket> {
        return this._doneCompleter.future;
    }
    setHeader(data : core.DartList<number>,length : number) : void {
        /* TODO (AssertStatementImpl) : assert (_length == 0); */;
        this._buffer = data;
        this._length = length;
    }
    set gzip(value : boolean) {
        this._gzip = value;
        if (this._gzip) {
            this._gzipBuffer = new typed_data.Uint8List(properties._OUTGOING_BUFFER_SIZE);
            /* TODO (AssertStatementImpl) : assert (_gzipSink == null); */;
            this._gzipSink = new ZLibEncoder({
                gzip : true}).startChunkedConversion(new _HttpGZipSink((data : any) =>  {
                if (op(Op.EQUALS,this._gzipAdd,null)) return;
                this._addChunk(this._chunkHeader(data.length),this._gzipAdd);
                this._pendingChunkedFooter = 2;
                this._addChunk(data,this._gzipAdd);
            }));
        }
    }
    _ignoreError(error : any) : boolean {
        return (is(error, SocketException) || is(error, TlsException)) && is(this.outbound, HttpResponse);
    }
    _addGZipChunk(chunk : core.DartList<number>,add : (data : core.DartList<number>) => void) : void {
        if (!this.outbound.bufferOutput) {
            add(chunk);
            return;
        }
        if (chunk.length > this._gzipBuffer.length - this._gzipBufferLength) {
            add(new typed_data.Uint8List.view(this._gzipBuffer.buffer,0,this._gzipBufferLength));
            this._gzipBuffer = new typed_data.Uint8List(properties._OUTGOING_BUFFER_SIZE);
            this._gzipBufferLength = 0;
        }
        if (chunk.length > properties._OUTGOING_BUFFER_SIZE) {
            add(chunk);
        }else {
            this._gzipBuffer.setRange(this._gzipBufferLength,this._gzipBufferLength + chunk.length,chunk);
            this._gzipBufferLength += chunk.length;
        }
    }
    _addChunk(chunk : core.DartList<number>,add : (data : core.DartList<number>) => void) : void {
        if (!this.outbound.bufferOutput) {
            if (this._buffer != null) {
                add(new typed_data.Uint8List.view(this._buffer.buffer,0,this._length));
                this._buffer = null;
                this._length = 0;
            }
            add(chunk);
            return;
        }
        if (chunk.length > this._buffer.length - this._length) {
            add(new typed_data.Uint8List.view(this._buffer.buffer,0,this._length));
            this._buffer = new typed_data.Uint8List(properties._OUTGOING_BUFFER_SIZE);
            this._length = 0;
        }
        if (chunk.length > properties._OUTGOING_BUFFER_SIZE) {
            add(chunk);
        }else {
            this._buffer.setRange(this._length,this._length + chunk.length,chunk);
            this._length += chunk.length;
        }
    }
    _chunkHeader(length : number) : core.DartList<number> {
        let hexDigits = new core.DartList.literal(48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70);
        if (length == 0) {
            if (this._pendingChunkedFooter == 2) return _HttpOutgoing._footerAndChunk0Length;
            return _HttpOutgoing._chunk0Length;
        }
        let size : number = this._pendingChunkedFooter;
        let len : number = length;
        while (len > 0){
            size++;
            len >>= 4;
        }
        let footerAndHeader = new typed_data.Uint8List(size + 2);
        if (this._pendingChunkedFooter == 2) {
            op(Op.INDEX_ASSIGN,footerAndHeader,0,_CharCode.CR);
            op(Op.INDEX_ASSIGN,footerAndHeader,1,_CharCode.LF);
        }
        let index : number = size;
        while (index > this._pendingChunkedFooter){
            op(Op.INDEX_ASSIGN,footerAndHeader,--index,hexDigits[length & 15]);
            length = length >> 4;
        }
        op(Op.INDEX_ASSIGN,footerAndHeader,size + 0,_CharCode.CR);
        op(Op.INDEX_ASSIGN,footerAndHeader,size + 1,_CharCode.LF);
        return footerAndHeader;
    }
}

export namespace _HttpClientConnection {
    export type Constructors = '_HttpClientConnection';
    export type Interface = Omit<_HttpClientConnection, Constructors>;
}
@DartClass
export class _HttpClientConnection {
    key : string;

    _socket : Socket;

    _proxyTunnel : boolean;

    _context : SecurityContext;

    _httpParser : _HttpParser;

    _subscription : async.DartStreamSubscription<any>;

    _httpClient : _HttpClient;

    _dispose : boolean;

    _idleTimer : async.DartTimer;

    closed : boolean;

    _currentUri : lib5.Uri;

    _nextResponseCompleter : async.DartCompleter<_HttpIncoming>;

    _streamFuture : async.Future<Socket>;

    constructor(key : string,_socket : Socket,_httpClient : _HttpClient,_proxyTunnel? : boolean,_context? : SecurityContext) {
    }
    @defaultConstructor
    _HttpClientConnection(key : string,_socket : Socket,_httpClient : _HttpClient,_proxyTunnel? : boolean,_context? : SecurityContext) {
        _proxyTunnel = _proxyTunnel || false;
        this._dispose = false;
        this.closed = false;
        this._httpParser = new _HttpParser.responseParser();
        this.key = key;
        this._socket = _socket;
        this._httpClient = _httpClient;
        this._proxyTunnel = _proxyTunnel;
        this._context = _context;
        this._httpParser.listenToStream(this._socket);
        this._subscription = this._httpParser.listen((incoming : any) =>  {
            this._subscription.pause();
            if (op(Op.EQUALS,this._nextResponseCompleter,null)) {
                throw new HttpException("Unexpected response (unsolicited response without request).",{
                    uri : this._currentUri});
            }
            if (incoming.statusCode == 100) {
                incoming.drain().then((_ : any) =>  {
                    this._subscription.resume();
                }).catchError((error : any,stackTrace? : core.DartStackTrace) =>  {
                    this._nextResponseCompleter.completeError(new HttpException(error.message,{
                        uri : this._currentUri}),stackTrace);
                    this._nextResponseCompleter = null;
                });
            }else {
                this._nextResponseCompleter.complete(incoming);
                this._nextResponseCompleter = null;
            }
        },{
            onError : (error : any,stackTrace? : core.DartStackTrace) =>  {
                if (this._nextResponseCompleter != null) {
                    this._nextResponseCompleter.completeError(new HttpException(error.message,{
                        uri : this._currentUri}),stackTrace);
                    this._nextResponseCompleter = null;
                }
            },onDone : () =>  {
                if (this._nextResponseCompleter != null) {
                    this._nextResponseCompleter.completeError(new HttpException("Connection closed before response was received",{
                        uri : this._currentUri}));
                    this._nextResponseCompleter = null;
                }
                this.close();
            }});
    }
    send(uri : lib5.Uri,port : number,method : string,proxy : _Proxy) : _HttpClientRequest {
        if (this.closed) {
            throw new HttpException("Socket closed before request was sent",{
                uri : uri});
        }
        this._currentUri = uri;
        this._subscription.pause();
        let proxyCreds : _ProxyCredentials;
        let creds : _SiteCredentials;
        let outgoing = new _HttpOutgoing(this._socket);
        let request = new _HttpClientRequest(outgoing,uri,method,proxy,this._httpClient,this);
        let host = uri.host;
        if (new core.DartString(host).contains(':')) host = `[${host}]`;
        ((_) : _HttpHeaders =>  {
            {
                _.host = host;
                _.port = port;
                _._add(HttpHeaders.ACCEPT_ENCODING,"gzip");
                return _;
            }
        })(request.headers);
        if (this._httpClient.userAgent != null) {
            request.headers._add('user-agent',this._httpClient.userAgent);
        }
        if (proxy.isAuthenticated) {
            let auth : string = _CryptoUtils.bytesToBase64(convert.properties.UTF8.encode(`${proxy.username}:${proxy.password}`));
            request.headers.set(HttpHeaders.PROXY_AUTHORIZATION,`Basic ${auth}`);
        }else if (!proxy.isDirect && this._httpClient._proxyCredentials.length > 0) {
            proxyCreds = this._httpClient._findProxyCredentials(proxy);
            if (proxyCreds != null) {
                proxyCreds.authorize(request);
            }
        }
        if (uri.userInfo != null && !new core.DartString(uri.userInfo).isEmpty) {
            let auth : string = _CryptoUtils.bytesToBase64(convert.properties.UTF8.encode(uri.userInfo));
            request.headers.set(HttpHeaders.AUTHORIZATION,`Basic ${auth}`);
        }else {
            creds = this._httpClient._findCredentials(uri);
            if (creds != null) {
                creds.authorize(request);
            }
        }
        this._httpParser.isHead = method == "HEAD";
        this._streamFuture = outgoing.done.then((s : Socket) =>  {
            this._nextResponseCompleter = new async.DartCompleter<any>();
            this._nextResponseCompleter.future.then((incoming : any) =>  {
                this._currentUri = null;
                incoming.dataDone.then((closing : any) =>  {
                    if (incoming.upgraded) {
                        this._httpClient._connectionClosed(this);
                        this.startTimer();
                        return;
                    }
                    if (this.closed) return;
                    if (!closing && !this._dispose && incoming.headers.persistentConnection && request.persistentConnection) {
                        this._httpClient._returnConnection(this);
                        this._subscription.resume();
                    }else {
                        this.destroy();
                    }
                });
                if (proxyCreds != null && op(Op.EQUALS,proxyCreds.scheme,_AuthenticationScheme.DIGEST)) {
                    let authInfo = op(Op.INDEX,incoming.headers,"proxy-authentication-info");
                    if (authInfo != null && authInfo.length == 1) {
                        let header = _HeaderValue.parse(authInfo[0],{
                            parameterSeparator : ','});
                        let nextnonce = header.parameters.get("nextnonce");
                        if (nextnonce != null) proxyCreds.nonce = nextnonce;
                    }
                }
                if (creds != null && op(Op.EQUALS,creds.scheme,_AuthenticationScheme.DIGEST)) {
                    let authInfo = op(Op.INDEX,incoming.headers,"authentication-info");
                    if (authInfo != null && authInfo.length == 1) {
                        let header = _HeaderValue.parse(authInfo[0],{
                            parameterSeparator : ','});
                        let nextnonce = header.parameters.get("nextnonce");
                        if (nextnonce != null) creds.nonce = nextnonce;
                    }
                }
                request._onIncoming(incoming);
            }).catchError((error : any) =>  {
                throw new HttpException("Connection closed before data was received",{
                    uri : uri});
            },{
                test : (error : any) =>  {
                    return is(error, core.StateError);
                }}).catchError((error : any,stackTrace : any) =>  {
                this.destroy();
                request._onError(error,stackTrace);
            });
            this._subscription.resume();
            return s;
        },{
            onError : (e : any) =>  {
                this.destroy();
            }});
        return request;
    }
    detachSocket() : async.Future<Socket> {
        return this._streamFuture.then((_ : any) =>  {
            return new _DetachedSocket(this._socket,this._httpParser.detachIncoming());
        });
    }
    destroy() : void {
        this.closed = true;
        this._httpClient._connectionClosed(this);
        this._socket.destroy();
    }
    close() : void {
        this.closed = true;
        this._httpClient._connectionClosed(this);
        this._streamFuture.then((_ : any) =>  {
            return this._socket.destroy();
        });
    }
    createProxyTunnel(host : string,port : number,proxy : _Proxy,callback : (certificate : X509Certificate) => boolean) : async.Future<_HttpClientConnection> {
        let request : _HttpClientRequest = this.send(new lib5.Uri({
            host : host,port : port}),port,"CONNECT",proxy);
        if (proxy.isAuthenticated) {
            let auth : string = _CryptoUtils.bytesToBase64(convert.properties.UTF8.encode(`${proxy.username}:${proxy.password}`));
            request.headers.set(HttpHeaders.PROXY_AUTHORIZATION,`Basic ${auth}`);
        }
        return request.close().then((response : any) =>  {
            if (response.statusCode != HttpStatus.OK) {
                throw "Proxy failed to establish tunnel " + `(${response.statusCode} ${response.reasonPhrase})`;
            }
            let socket = (response as _HttpClientResponse)._httpRequest._httpClientConnection._socket;
            return SecureSocket.secure(socket,{
                host : host,context : this._context,onBadCertificate : callback});
        }).then((secureSocket : any) =>  {
            let key : string = _HttpClientConnection.makeKey(true,host,port);
            return new _HttpClientConnection(key,secureSocket,request._httpClient,true);
        });
    }
    get connectionInfo() : HttpConnectionInfo {
        return _HttpConnectionInfo.create(this._socket);
    }
    static makeKey(isSecure : boolean,host : string,port : number) {
        return isSecure ? `ssh:${host}:${port}` : `${host}:${port}`;
    }
    stopTimer() : void {
        if (this._idleTimer != null) {
            this._idleTimer.cancel();
            this._idleTimer = null;
        }
    }
    startTimer() : void {
        /* TODO (AssertStatementImpl) : assert (_idleTimer == null); */;
        this._idleTimer = new async.DartTimer(this._httpClient.idleTimeout,() =>  {
            this._idleTimer = null;
            this.close();
        });
    }
}

export namespace _ConnectionInfo {
    export type Constructors = '_ConnectionInfo';
    export type Interface = Omit<_ConnectionInfo, Constructors>;
}
@DartClass
export class _ConnectionInfo {
    connection : _HttpClientConnection;

    proxy : _Proxy;

    constructor(connection : _HttpClientConnection,proxy : _Proxy) {
    }
    @defaultConstructor
    _ConnectionInfo(connection : _HttpClientConnection,proxy : _Proxy) {
        this.connection = connection;
        this.proxy = proxy;
    }
}

export namespace _ConnectionTarget {
    export type Constructors = '_ConnectionTarget';
    export type Interface = Omit<_ConnectionTarget, Constructors>;
}
@DartClass
export class _ConnectionTarget {
    key : string;

    host : string;

    port : number;

    isSecure : boolean;

    context : SecurityContext;

    _idle : core.DartSet<_HttpClientConnection>;

    _active : core.DartSet<_HttpClientConnection>;

    _pending : collection.Queue<any>;

    _connecting : number;

    constructor(key : string,host : string,port : number,isSecure : boolean,context : SecurityContext) {
    }
    @defaultConstructor
    _ConnectionTarget(key : string,host : string,port : number,isSecure : boolean,context : SecurityContext) {
        this._idle = new core.DartHashSet<any>();
        this._active = new core.DartHashSet<any>();
        this._pending = new collection.ListQueue<any>();
        this._connecting = 0;
        this.key = key;
        this.host = host;
        this.port = port;
        this.isSecure = isSecure;
        this.context = context;
    }
    get isEmpty() : boolean {
        return this._idle.isEmpty && this._active.isEmpty && this._connecting == 0;
    }
    get hasIdle() : boolean {
        return this._idle.isNotEmpty;
    }
    get hasActive() : boolean {
        return this._active.isNotEmpty || this._connecting > 0;
    }
    takeIdle() : _HttpClientConnection {
        /* TODO (AssertStatementImpl) : assert (hasIdle); */;
        let connection : _HttpClientConnection = this._idle.first;
        this._idle.remove(connection);
        connection.stopTimer();
        this._active.add(connection);
        return connection;
    }
    _checkPending() {
        if (this._pending.isNotEmpty) {
            (this._pending.removeFirst())();
        }
    }
    addNewActive(connection : _HttpClientConnection) : void {
        this._active.add(connection);
    }
    returnConnection(connection : _HttpClientConnection) : void {
        /* TODO (AssertStatementImpl) : assert (_active.contains(connection)); */;
        this._active.remove(connection);
        this._idle.add(connection);
        connection.startTimer();
        this._checkPending();
    }
    connectionClosed(connection : _HttpClientConnection) : void {
        /* TODO (AssertStatementImpl) : assert (!_active.contains(connection) || !_idle.contains(connection)); */;
        this._active.remove(connection);
        this._idle.remove(connection);
        this._checkPending();
    }
    close(force : boolean) : void {
        for(let c of this._idle.toList()) {
            c.close();
        }
        if (force) {
            for(let c of this._active.toList()) {
                c.destroy();
            }
        }
    }
    connect(uriHost : string,uriPort : number,proxy : _Proxy,client : _HttpClient) : async.Future<_ConnectionInfo> {
        if (this.hasIdle) {
            let connection = this.takeIdle();
            client._connectionsChanged();
            return new async.Future.value(new _ConnectionInfo(connection,proxy));
        }
        if (client.maxConnectionsPerHost != null && this._active.length + this._connecting >= client.maxConnectionsPerHost) {
            let completer = new async.DartCompleter<_ConnectionInfo>();
            this._pending.add(() =>  {
                completer.complete(this.connect(uriHost,uriPort,proxy,client));
            });
            return completer.future;
        }
        let currentBadCertificateCallback = client._badCertificateCallback;
        var callback : (certificate : X509Certificate) => boolean = (certificate : X509Certificate) : boolean =>  {
            if (op(Op.EQUALS,currentBadCertificateCallback,null)) return false;
            return currentBadCertificateCallback(certificate,uriHost,uriPort);
        };
        let socketFuture : async.Future<any> = (this.isSecure && proxy.isDirect ? SecureSocket.connect(this.host,this.port,{
            context : this.context,onBadCertificate : callback}) : Socket.connect(this.host,this.port));
        this._connecting++;
        return socketFuture.then((socket : any) =>  {
            this._connecting--;
            socket.setOption(SocketOption.TCP_NODELAY,true);
            let connection = new _HttpClientConnection(this.key,socket,client,false,this.context);
            if (this.isSecure && !proxy.isDirect) {
                connection._dispose = true;
                return connection.createProxyTunnel(uriHost,uriPort,proxy,callback).then((tunnel : any) =>  {
                    client._getConnectionTarget(uriHost,uriPort,true).addNewActive(tunnel);
                    return new _ConnectionInfo(tunnel,proxy);
                });
            }else {
                this.addNewActive(connection);
                return new _ConnectionInfo(connection,proxy);
            }
        },{
            onError : (error : any) =>  {
                this._connecting--;
                this._checkPending();
                throw error;
            }});
    }
}

export namespace _HttpClient {
    export type Constructors = '_HttpClient';
    export type Interface = Omit<_HttpClient, Constructors>;
}
@DartClass
@Implements(HttpClient)
export class _HttpClient implements HttpClient.Interface {
    _closing : boolean;

    _closingForcefully : boolean;

    _connectionTargets : core.DartMap<string,_ConnectionTarget>;

    _credentials : core.DartList<_Credentials>;

    _proxyCredentials : core.DartList<_ProxyCredentials>;

    _context : SecurityContext;

    _authenticate : Function;

    _authenticateProxy : Function;

    _findProxy : Function;

    _idleTimeout : core.DartDuration;

    _badCertificateCallback : (cr : X509Certificate,host : string,port : number) => boolean;

    get idleTimeout() : core.DartDuration {
        return this._idleTimeout;
    }
    maxConnectionsPerHost : number;

    autoUncompress : boolean;

    userAgent : string;

    constructor(_context : SecurityContext) {
    }
    @defaultConstructor
    _HttpClient(_context : SecurityContext) {
        this._closing = false;
        this._closingForcefully = false;
        this._connectionTargets = new core.DartHashMap<string,_ConnectionTarget>();
        this._credentials = new core.DartList.literal();
        this._proxyCredentials = new core.DartList.literal();
        this._findProxy = HttpClient.findProxyFromEnvironment.bind(HttpClient);
        this._idleTimeout = new core.DartDuration({
            seconds : 15});
        this.autoUncompress = true;
        this.userAgent = _getHttpVersion();
        this._context = _context;
    }
    set idleTimeout(timeout : core.DartDuration) {
        this._idleTimeout = timeout;
        for(let c of this._connectionTargets.values) {
            for(let idle of c._idle) {
                idle.stopTimer();
                idle.startTimer();
            }
        }
    }
    set badCertificateCallback(callback : (cert : X509Certificate,host : string,port : number) => boolean) {
        this._badCertificateCallback = callback;
    }
    open(method : string,host : string,port : number,path : string) : async.Future<HttpClientRequest> {
        let hashMark : number = 35;
        let questionMark : number = 63;
        let fragmentStart : number = new core.DartString(path).length;
        let queryStart : number = new core.DartString(path).length;
        for(let i : number = new core.DartString(path).length - 1; i >= 0; i--){
            let char = new core.DartString(path).codeUnitAt(i);
            if (char == hashMark) {
                fragmentStart = i;
                queryStart = i;
            }else if (char == questionMark) {
                queryStart = i;
            }
        }
        let query : string = null;
        if (queryStart < fragmentStart) {
            query = new core.DartString(path).substring(queryStart + 1,fragmentStart);
            path = new core.DartString(path).substring(0,queryStart);
        }
        let uri : lib5.Uri = new lib5.Uri({
            scheme : "http",host : host,port : port,path : path,query : query});
        return this._openUrl(method,uri);
    }
    openUrl(method : string,url : lib5.Uri) : async.Future<HttpClientRequest> {
        return this._openUrl(method,url);
    }
    get(host : string,port : number,path : string) : async.Future<HttpClientRequest> {
        return this.open("get",host,port,path);
    }
    getUrl(url : lib5.Uri) : async.Future<HttpClientRequest> {
        return this._openUrl("get",url);
    }
    post(host : string,port : number,path : string) : async.Future<HttpClientRequest> {
        return this.open("post",host,port,path);
    }
    postUrl(url : lib5.Uri) : async.Future<HttpClientRequest> {
        return this._openUrl("post",url);
    }
    put(host : string,port : number,path : string) : async.Future<HttpClientRequest> {
        return this.open("put",host,port,path);
    }
    putUrl(url : lib5.Uri) : async.Future<HttpClientRequest> {
        return this._openUrl("put",url);
    }
    delete(host : string,port : number,path : string) : async.Future<HttpClientRequest> {
        return this.open("delete",host,port,path);
    }
    deleteUrl(url : lib5.Uri) : async.Future<HttpClientRequest> {
        return this._openUrl("delete",url);
    }
    head(host : string,port : number,path : string) : async.Future<HttpClientRequest> {
        return this.open("head",host,port,path);
    }
    headUrl(url : lib5.Uri) : async.Future<HttpClientRequest> {
        return this._openUrl("head",url);
    }
    patch(host : string,port : number,path : string) : async.Future<HttpClientRequest> {
        return this.open("patch",host,port,path);
    }
    patchUrl(url : lib5.Uri) : async.Future<HttpClientRequest> {
        return this._openUrl("patch",url);
    }
    close(_namedArguments? : {force? : boolean}) : void {
        let {force} = Object.assign({
            "force" : false}, _namedArguments );
        this._closing = true;
        this._closingForcefully = force;
        this._closeConnections(this._closingForcefully);
        /* TODO (AssertStatementImpl) : assert (!_connectionTargets.values.any((s) => s.hasIdle)); */;
        /* TODO (AssertStatementImpl) : assert (!force || !_connectionTargets.values.any((s) => s._active.isNotEmpty)); */;
    }
    set authenticate(f : (url : lib5.Uri,scheme : string,realm : string) => async.Future<boolean>) {
        this._authenticate = f;
    }
    addCredentials(url : lib5.Uri,realm : string,cr : HttpClientCredentials) : void {
        this._credentials.add(new _SiteCredentials(url,realm,cr));
    }
    set authenticateProxy(f : (host : string,port : number,scheme : string,realm : string) => async.Future<boolean>) {
        this._authenticateProxy = f;
    }
    addProxyCredentials(host : string,port : number,realm : string,cr : HttpClientCredentials) : void {
        this._proxyCredentials.add(new _ProxyCredentials(host,port,realm,cr));
    }
    set findProxy(f : (uri : lib5.Uri) => string) {
        this._findProxy = f;
    }
    _openUrl(method : string,uri : lib5.Uri) : async.Future<_HttpClientRequest> {
        uri = uri.removeFragment();
        if (method == null) {
            throw new core.ArgumentError(method);
        }
        if (method != "CONNECT") {
            if (new core.DartString(uri.host).isEmpty) {
                throw new core.ArgumentError(`No host specified in URI ${uri}`);
            }else if (uri.scheme != "http" && uri.scheme != "https") {
                throw new core.ArgumentError(`Unsupported scheme '${uri.scheme}' in URI ${uri}`);
            }
        }
        let isSecure : boolean = (uri.scheme == "https");
        let port : number = uri.port;
        if (port == 0) {
            port = isSecure ? HttpClient.DEFAULT_HTTPS_PORT : HttpClient.DEFAULT_HTTP_PORT;
        }
        let proxyConf = new _ProxyConfiguration.direct();
        if (this._findProxy != null) {
            try {
                proxyConf = new _ProxyConfiguration(this._findProxy(uri));
            } catch (__error__) {

                {
                    let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let error = __error__;
                    return new async.Future.error(error,stackTrace);
                }
            }
        }
        return this._getConnection(uri.host,port,proxyConf,isSecure).then((info : _ConnectionInfo) =>  {
            var send : (info : _ConnectionInfo) => _HttpClientRequest = (info : _ConnectionInfo) : _HttpClientRequest =>  {
                return info.connection.send(uri,port,new core.DartString(method).toUpperCase(),info.proxy);
            };
            if (info.connection.closed) {
                return this._getConnection(uri.host,port,proxyConf,isSecure).then(send);
            }
            return send(info);
        });
    }
    _openUrlFromRequest(method : string,uri : lib5.Uri,previous : _HttpClientRequest) : async.Future<_HttpClientRequest> {
        let resolved : lib5.Uri = previous.uri.resolveUri(uri);
        return this._openUrl(method,resolved).then((request : _HttpClientRequest) =>  {
            ((_) : _HttpClientRequest =>  {
                {
                    _.followRedirects = previous.followRedirects;
                    _.maxRedirects = previous.maxRedirects;
                    return _;
                }
            })(request);
            for(let header of previous.headers._headers.keys) {
                if (op(Op.INDEX,request.headers,header) == null) {
                    request.headers.set(header,op(Op.INDEX,previous.headers,header));
                }
            }
            return ((_) : _HttpClientRequest =>  {
                {
                    _.headers.chunkedTransferEncoding = false;
                    _.contentLength = 0;
                    return _;
                }
            })(request);
        });
    }
    _returnConnection(connection : _HttpClientConnection) : void {
        this._connectionTargets.get(connection.key).returnConnection(connection);
        this._connectionsChanged();
    }
    _connectionClosed(connection : _HttpClientConnection) : void {
        connection.stopTimer();
        let connectionTarget = this._connectionTargets.get(connection.key);
        if (connectionTarget != null) {
            connectionTarget.connectionClosed(connection);
            if (connectionTarget.isEmpty) {
                this._connectionTargets.remove(connection.key);
            }
            this._connectionsChanged();
        }
    }
    _connectionsChanged() : void {
        if (this._closing) {
            this._closeConnections(this._closingForcefully);
        }
    }
    _closeConnections(force : boolean) : void {
        for(let connectionTarget of this._connectionTargets.values.toList()) {
            connectionTarget.close(force);
        }
    }
    _getConnectionTarget(host : string,port : number,isSecure : boolean) : _ConnectionTarget {
        let key : string = _HttpClientConnection.makeKey(isSecure,host,port);
        return this._connectionTargets.putIfAbsent(key,() =>  {
            return new _ConnectionTarget(key,host,port,isSecure,this._context);
        });
    }
    _getConnection(uriHost : string,uriPort : number,proxyConf : _ProxyConfiguration,isSecure : boolean) : async.Future<_ConnectionInfo> {
        let proxies : core.DartIterator<_Proxy> = proxyConf.proxies.iterator;
        var connect : (error : any) => async.Future<_ConnectionInfo> = (error : any) : async.Future<_ConnectionInfo> =>  {
            if (!proxies.moveNext()) return new async.Future.error(error);
            let proxy : _Proxy = proxies.current;
            let host : string = proxy.isDirect ? uriHost : proxy.host;
            let port : number = proxy.isDirect ? uriPort : proxy.port;
            return this._getConnectionTarget(host,port,isSecure).connect(uriHost,uriPort,proxy,this).catchError(connect);
        };
        return new async.Future<_ConnectionInfo>(() =>  {
            return connect(new HttpException("No proxies given"));
        });
    }
    _findCredentials(url : lib5.Uri,scheme? : _AuthenticationScheme) : _SiteCredentials {
        let cr : _SiteCredentials = this._credentials.fold(null,(prev : _SiteCredentials,value : any) =>  {
            let siteCredentials = value as _SiteCredentials;
            if (siteCredentials.applies(url,scheme)) {
                if (op(Op.EQUALS,prev,null)) return value;
                return new core.DartString(siteCredentials.uri.path).length > new core.DartString(prev.uri.path).length ? siteCredentials : prev;
            }else {
                return prev;
            }
        });
        return cr;
    }
    _findProxyCredentials(proxy : _Proxy,scheme? : _AuthenticationScheme) : _ProxyCredentials {
        let it = this._proxyCredentials.iterator;
        while (it.moveNext()){
            if (it.current.applies(proxy,scheme)) {
                return it.current;
            }
        }
        return null;
    }
    _removeCredentials(cr : _Credentials) : void {
        let index : number = this._credentials.indexOf(cr);
        if (index != -1) {
            this._credentials.removeAt(index);
        }
    }
    _removeProxyCredentials(cr : _Credentials) : void {
        let index : number = this._proxyCredentials.indexOf(cr);
        if (index != -1) {
            this._proxyCredentials.removeAt(index);
        }
    }
    static _findProxyFromEnvironment(url : lib5.Uri,environment : core.DartMap<string,string>) : string {
        var checkNoProxy : (option : string) => any = (option : string) =>  {
            if (option == null) return null;
            let names : core.DartIterator<string> = new core.DartString(option).split(",").map((s : any) =>  {
                return new core.DartString(s).trim();
            }).iterator;
            while (names.moveNext()){
                let name = names.current;
                if ((new core.DartString(name).startsWith("[") && new core.DartString(name).endsWith("]") && `[${url.host}]` == name) || (new core.DartString(name).isNotEmpty && new core.DartString(url.host).endsWith(name))) {
                    return "DIRECT";
                }
            }
            return null;
        };
        var checkProxy : (option : string) => any = (option : string) =>  {
            if (option == null) return null;
            option = new core.DartString(option).trim();
            if (new core.DartString(option).isEmpty) return null;
            let pos : number = new core.DartString(option).indexOf("://");
            if (pos >= 0) {
                option = new core.DartString(option).substring(pos + 3);
            }
            pos = new core.DartString(option).indexOf("/");
            if (pos >= 0) {
                option = new core.DartString(option).substring(0,pos);
            }
            if (new core.DartString(option).indexOf("[") == 0) {
                let pos = new core.DartString(option).lastIndexOf(":");
                if (new core.DartString(option).indexOf("]") > pos) option = `${option}:1080`;
            }else {
                if (new core.DartString(option).indexOf(":") == -1) option = `${option}:1080`;
            }
            return `PROXY ${option}`;
        };
        if (environment == null) environment = _HttpClient._platformEnvironmentCache;
        let proxyCfg : string;
        let noProxy : string = environment.get("no_proxy");
        if (noProxy == null) noProxy = environment.get("NO_PROXY");
        if ((proxyCfg = checkNoProxy(noProxy)) != null) {
            return proxyCfg;
        }
        if (url.scheme == "http") {
            let proxy : string = environment.get("http_proxy");
            if (proxy == null) proxy = environment.get("HTTP_PROXY");
            if ((proxyCfg = checkProxy(proxy)) != null) {
                return proxyCfg;
            }
        }else if (url.scheme == "https") {
            let proxy : string = environment.get("https_proxy");
            if (proxy == null) proxy = environment.get("HTTPS_PROXY");
            if ((proxyCfg = checkProxy(proxy)) != null) {
                return proxyCfg;
            }
        }
        return "DIRECT";
    }
    private static __$_platformEnvironmentCache : core.DartMap<string,string>;
    static get _platformEnvironmentCache() : core.DartMap<string,string> { 
        if (this.__$_platformEnvironmentCache===undefined) {
            this.__$_platformEnvironmentCache = Platform.environment;
        }
        return this.__$_platformEnvironmentCache;
    }
    static set _platformEnvironmentCache(__$value : core.DartMap<string,string>)  { 
        this.__$_platformEnvironmentCache = __$value;
    }

}

export namespace _HttpConnection {
    export type Constructors = collection.LinkedListEntry.Constructors | '_HttpConnection';
    export type Interface = Omit<_HttpConnection, Constructors>;
}
@DartClass
@With(_ServiceObject)
export class _HttpConnection extends collection.LinkedListEntry<_HttpConnection> implements _ServiceObject.Interface {
    @Abstract
    _serviceType(ref : boolean) : string {
        throw 'from mixin';
    }
    private static __$_ACTIVE;
    static get _ACTIVE() { 
        if (this.__$_ACTIVE===undefined) {
            this.__$_ACTIVE = 0;
        }
        return this.__$_ACTIVE;
    }

    private static __$_IDLE;
    static get _IDLE() { 
        if (this.__$_IDLE===undefined) {
            this.__$_IDLE = 1;
        }
        return this.__$_IDLE;
    }

    private static __$_CLOSING;
    static get _CLOSING() { 
        if (this.__$_CLOSING===undefined) {
            this.__$_CLOSING = 2;
        }
        return this.__$_CLOSING;
    }

    private static __$_DETACHED;
    static get _DETACHED() { 
        if (this.__$_DETACHED===undefined) {
            this.__$_DETACHED = 3;
        }
        return this.__$_DETACHED;
    }

    private static __$_connections : core.DartMap<number,_HttpConnection>;
    static get _connections() : core.DartMap<number,_HttpConnection> { 
        if (this.__$_connections===undefined) {
            this.__$_connections = new core.DartHashMap<number,_HttpConnection>();
        }
        return this.__$_connections;
    }
    static set _connections(__$value : core.DartMap<number,_HttpConnection>)  { 
        this.__$_connections = __$value;
    }

    _socket;

    _httpServer : _HttpServer;

    _httpParser : _HttpParser;

    _state : number;

    _subscription : async.DartStreamSubscription<any>;

    _idleMark : boolean;

    _streamFuture : async.Future<any>;

    constructor(_socket : any,_httpServer : _HttpServer) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _HttpConnection(_socket : any,_httpServer : _HttpServer) {
        this._state = _HttpConnection._IDLE;
        this._idleMark = false;
        this._httpParser = new _HttpParser.requestParser();
        this._socket = _socket;
        this._httpServer = _httpServer;
        try {
            this._socket._owner = this;
        } catch (__error__) {

            {
                let _ = __error__;
                core.print(_);
            }
        }
        _HttpConnection._connections.set(this._serviceId,this);
        this._httpParser.listenToStream(this._socket as core.DartObject);
        this._subscription = this._httpParser.listen((incoming : any) =>  {
            this._httpServer._markActive(this);
            incoming.dataDone.then((closing : any) =>  {
                if (closing) this.destroy();
            });
            this._subscription.pause();
            this._state = _HttpConnection._ACTIVE;
            let outgoing = new _HttpOutgoing(this._socket);
            let response = new _HttpResponse(incoming.uri,incoming.headers.protocolVersion,outgoing,this._httpServer.defaultResponseHeaders,this._httpServer.serverHeader);
            let request = new _HttpRequest(response,incoming,this._httpServer,this);
            this._streamFuture = outgoing.done.then((_ : any) =>  {
                response.deadline = null;
                if (this._state == _HttpConnection._DETACHED) return;
                if (response.persistentConnection && request.persistentConnection && incoming.fullBodyRead && !this._httpParser.upgrade && !this._httpServer.closed) {
                    this._state = _HttpConnection._IDLE;
                    this._idleMark = false;
                    this._httpServer._markIdle(this);
                    this._subscription.resume();
                }else {
                    this.destroy();
                }
            },{
                onError : (_ : any) =>  {
                    this.destroy();
                }});
            outgoing.ignoreBody = request.method == "HEAD";
            response._httpRequest = request;
            this._httpServer._handleRequest(request);
        },{
            onDone : () =>  {
                this.destroy();
            },onError : (error : any) =>  {
                this.destroy();
            }});
    }
    markIdle() : void {
        this._idleMark = true;
    }
    get isMarkedIdle() : boolean {
        return this._idleMark;
    }
    destroy() : void {
        if (this._state == _HttpConnection._CLOSING || this._state == _HttpConnection._DETACHED) return;
        this._state = _HttpConnection._CLOSING;
        this._socket.destroy();
        this._httpServer._connectionClosed(this);
        _HttpConnection._connections.remove(this._serviceId);
    }
    detachSocket() : async.Future<Socket> {
        this._state = _HttpConnection._DETACHED;
        this._httpServer._connectionClosed(this);
        let detachedIncoming : _HttpDetachedIncoming = this._httpParser.detachIncoming();
        return this._streamFuture.then((_ : any) =>  {
            _HttpConnection._connections.remove(this._serviceId);
            return new _DetachedSocket(this._socket,detachedIncoming);
        });
    }
    get connectionInfo() : HttpConnectionInfo {
        return _HttpConnectionInfo.create(this._socket);
    }
    get _isActive() : boolean {
        return this._state == _HttpConnection._ACTIVE;
    }
    get _isIdle() : boolean {
        return this._state == _HttpConnection._IDLE;
    }
    get _isClosing() : boolean {
        return this._state == _HttpConnection._CLOSING;
    }
    get _isDetached() : boolean {
        return this._state == _HttpConnection._DETACHED;
    }
    get _serviceTypePath() : string {
        return 'io/http/serverconnections';
    }
    get _serviceTypeName() : string {
        return 'HttpServerConnection';
    }
    _toJSON(ref : boolean) : core.DartMap<any,any> {
        let name = `${this._socket.address.host}:${this._socket.port} <-> ` + `${this._socket.remoteAddress.host}:${this._socket.remotePort}`;
        let r = new core.DartMap.literal([
            ['id',this._servicePath],
            ['type',this._serviceType(ref)],
            ['name',name],
            ['user_name',name]]);
        if (ref) {
            return r;
        }
        r.set('server',this._httpServer._toJSON(true));
        try {
            r.set('socket',this._socket._toJSON(true));
        } catch (__error__) {

            {
                let _ = __error__;
                r.set('socket',new core.DartMap.literal([
                    ['id',this._servicePath],
                    ['type','@Socket'],
                    ['name','UserSocket'],
                    ['user_name','UserSocket']]));
            }
        }
        switch (this._state) {
            case _HttpConnection._ACTIVE:
                r.set('state',"Active");
                break;
            case _HttpConnection._IDLE:
                r.set('state',"Idle");
                break;
            case _HttpConnection._CLOSING:
                r.set('state',"Closing");
                break;
            case _HttpConnection._DETACHED:
                r.set('state',"Detached");
                break;
            default:
                r.set('state','Unknown');
                break;
        }
        return r;
    }
}

export namespace _HttpServer {
    export type Constructors = async.DartStream.Constructors | '_' | 'listenOn';
    export type Interface = Omit<_HttpServer, Constructors>;
}
@DartClass
@Implements(HttpServer)
@With(_ServiceObject)
export class _HttpServer extends async.DartStream<HttpRequest> implements HttpServer.Interface,_ServiceObject.Interface {
    @Abstract
    _serviceType(ref : boolean) : string {
        throw 'from mixin';
    }
    private static __$_servers : core.DartMap<number,_HttpServer>;
    static get _servers() : core.DartMap<number,_HttpServer> { 
        if (this.__$_servers===undefined) {
            this.__$_servers = new core.DartMap<number,_HttpServer>();
        }
        return this.__$_servers;
    }
    static set _servers(__$value : core.DartMap<number,_HttpServer>)  { 
        this.__$_servers = __$value;
    }

    serverHeader : string;

    defaultResponseHeaders : HttpHeaders;

    autoCompress : boolean;

    _idleTimeout : core.DartDuration;

    _idleTimer : async.DartTimer;

    static bind(address : any,port : number,backlog : number,v6Only : boolean,shared : boolean) : async.Future<HttpServer> {
        return ServerSocket.bind(address,port,{
            backlog : backlog,v6Only : v6Only,shared : shared}).then((socket : any) =>  {
            return new _HttpServer._(socket,true);
        });
    }
    static bindSecure(address : any,port : number,context : SecurityContext,backlog : number,v6Only : boolean,requestClientCertificate : boolean,shared : boolean) : async.Future<HttpServer> {
        return SecureServerSocket.bind(address,port,context,{
            backlog : backlog,v6Only : v6Only,requestClientCertificate : requestClientCertificate,shared : shared}).then((socket : any) =>  {
            return new _HttpServer._(socket,true);
        });
    }
    @namedConstructor
    _(_serverSocket : any,_closeServer : boolean) {
        this.defaultResponseHeaders = _HttpServer._initDefaultResponseHeaders();
        this.autoCompress = false;
        this.closed = false;
        this._activeConnections = new collection.LinkedList<_HttpConnection>();
        this._idleConnections = new collection.LinkedList<_HttpConnection>();
        this._serverSocket = _serverSocket;
        this._closeServer = _closeServer;
        this._controller = new async.DartStreamController<HttpRequest>({
            sync : true,onCancel : this.close.bind(this)});
        this.idleTimeout = new core.DartDuration({
            seconds : 120});
        _HttpServer._servers.set(this._serviceId,this);
        this._serverSocket._owner = this;
    }
    static _ : new(_serverSocket : any,_closeServer : boolean) => _HttpServer;

    @namedConstructor
    listenOn(_serverSocket : any) {
        this.defaultResponseHeaders = _HttpServer._initDefaultResponseHeaders();
        this.autoCompress = false;
        this.closed = false;
        this._activeConnections = new collection.LinkedList<_HttpConnection>();
        this._idleConnections = new collection.LinkedList<_HttpConnection>();
        this._closeServer = false;
        this._serverSocket = _serverSocket;
        this._controller = new async.DartStreamController<HttpRequest>({
            sync : true,onCancel : this.close.bind(this)});
        this.idleTimeout = new core.DartDuration({
            seconds : 120});
        _HttpServer._servers.set(this._serviceId,this);
        try {
            this._serverSocket._owner = this;
        } catch (__error__) {

            {
                let _ = __error__;
            }
        }
    }
    static listenOn : new(_serverSocket : any) => _HttpServer;

    static _initDefaultResponseHeaders() : HttpHeaders {
        let defaultResponseHeaders = new _HttpHeaders('1.1');
        defaultResponseHeaders.contentType = ContentType.TEXT;
        defaultResponseHeaders.set('X-Frame-Options','SAMEORIGIN');
        defaultResponseHeaders.set('X-Content-Type-Options','nosniff');
        defaultResponseHeaders.set('X-XSS-Protection','1; mode=block');
        return defaultResponseHeaders;
    }
    get idleTimeout() : core.DartDuration {
        return this._idleTimeout;
    }
    set idleTimeout(duration : core.DartDuration) {
        if (this._idleTimer != null) {
            this._idleTimer.cancel();
            this._idleTimer = null;
        }
        this._idleTimeout = duration;
        if (this._idleTimeout != null) {
            this._idleTimer = new async.DartTimer.periodic(this._idleTimeout,(_ : any) =>  {
                for(let idle of this._idleConnections.toList()) {
                    if (idle.isMarkedIdle) {
                        idle.destroy();
                    }else {
                        idle.markIdle();
                    }
                }
            });
        }
    }
    listen(onData : (event : HttpRequest) => void,_namedArguments? : {onError? : Function,onDone? : () => void,cancelOnError? : boolean}) : async.DartStreamSubscription<HttpRequest> {
        let {onError,onDone,cancelOnError} = Object.assign({
        }, _namedArguments );
        this._serverSocket.listen((socket : Socket) =>  {
            socket.setOption(SocketOption.TCP_NODELAY,true);
            let connection : _HttpConnection = new _HttpConnection(socket,this);
            this._idleConnections.add(connection);
        },{
            onError : (error : any,stackTrace : any) =>  {
                if (isNot(error, HandshakeException)) {
                    this._controller.addError(error,stackTrace);
                }
            },onDone : this._controller.close.bind(this._controller)});
        return this._controller.stream.listen(onData,{
            onError : onError,onDone : onDone,cancelOnError : cancelOnError});
    }
    close(_namedArguments? : {force? : boolean}) : async.Future<any> {
        let {force} = Object.assign({
            "force" : false}, _namedArguments );
        this.closed = true;
        let result : async.Future<any>;
        if (this._serverSocket != null && this._closeServer) {
            result = this._serverSocket.close();
        }else {
            result = new async.Future.value();
        }
        this.idleTimeout = null;
        if (force) {
            for(let c of this._activeConnections.toList()) {
                c.destroy();
            }
            /* TODO (AssertStatementImpl) : assert (_activeConnections.isEmpty); */;
        }
        for(let c of this._idleConnections.toList()) {
            c.destroy();
        }
        this._maybePerformCleanup();
        return result;
    }
    _maybePerformCleanup() : void {
        if (this.closed && this._idleConnections.isEmpty && this._activeConnections.isEmpty && this._sessionManagerInstance != null) {
            this._sessionManagerInstance.close();
            this._sessionManagerInstance = null;
            _HttpServer._servers.remove(this._serviceId);
        }
    }
    get port() : number {
        if (this.closed) throw new HttpException("HttpServer is not bound to a socket");
        return this._serverSocket.port;
    }
    get address() : InternetAddress {
        if (this.closed) throw new HttpException("HttpServer is not bound to a socket");
        return this._serverSocket.address;
    }
    set sessionTimeout(timeout : number) {
        this._sessionManager.sessionTimeout = timeout;
    }
    _handleRequest(request : _HttpRequest) : void {
        if (!this.closed) {
            this._controller.add(request);
        }else {
            request._httpConnection.destroy();
        }
    }
    _connectionClosed(connection : _HttpConnection) : void {
        connection.unlink();
        this._maybePerformCleanup();
    }
    _markIdle(connection : _HttpConnection) : void {
        this._activeConnections.remove(connection);
        this._idleConnections.add(connection);
    }
    _markActive(connection : _HttpConnection) : void {
        this._idleConnections.remove(connection);
        this._activeConnections.add(connection);
    }
    get _sessionManager() : _HttpSessionManager {
        if (op(Op.EQUALS,this._sessionManagerInstance,null)) {
            this._sessionManagerInstance = new _HttpSessionManager();
        }
        return this._sessionManagerInstance;
    }
    connectionsInfo() : HttpConnectionsInfo {
        let result : HttpConnectionsInfo = new HttpConnectionsInfo();
        result.total = this._activeConnections.length + this._idleConnections.length;
        this._activeConnections.forEach((conn : _HttpConnection) =>  {
            if (conn._isActive) {
                result.active++;
            }else {
                /* TODO (AssertStatementImpl) : assert (conn._isClosing); */;
                result.closing++;
            }
        });
        this._idleConnections.forEach((conn : _HttpConnection) =>  {
            result.idle++;
            /* TODO (AssertStatementImpl) : assert (conn._isIdle); */;
        });
        return result;
    }
    get _serviceTypePath() : string {
        return 'io/http/servers';
    }
    get _serviceTypeName() : string {
        return 'HttpServer';
    }
    _toJSON(ref : boolean) : core.DartMap<string,any> {
        let r = new core.DartMap.literal([
            ['id',this._servicePath],
            ['type',this._serviceType(ref)],
            ['name',`${this.address.host}:${this.port}`],
            ['user_name',`${this.address.host}:${this.port}`]]);
        if (ref) {
            return r;
        }
        try {
            r.set('socket',this._serverSocket._toJSON(true));
        } catch (__error__) {

            {
                let _ = __error__;
                r.set('socket',new core.DartMap.literal([
                    ['id',this._servicePath],
                    ['type','@Socket'],
                    ['name','UserSocket'],
                    ['user_name','UserSocket']]));
            }
        }
        r.set('port',this.port);
        r.set('address',this.address.host);
        r.set('active',this._activeConnections.map((c : any) =>  {
            return c._toJSON(true);
        }).toList());
        r.set('idle',this._idleConnections.map((c : any) =>  {
            return c._toJSON(true);
        }).toList());
        r.set('closed',this.closed);
        return r;
    }
    _sessionManagerInstance : _HttpSessionManager;

    closed : boolean;

    _serverSocket : any;

    _closeServer : boolean;

    _activeConnections : collection.LinkedList<_HttpConnection>;

    _idleConnections : collection.LinkedList<_HttpConnection>;

    _controller : async.DartStreamController<HttpRequest>;

}

export namespace _ProxyConfiguration {
    export type Constructors = '_ProxyConfiguration' | 'direct';
    export type Interface = Omit<_ProxyConfiguration, Constructors>;
}
@DartClass
export class _ProxyConfiguration {
    private static __$PROXY_PREFIX : string;
    static get PROXY_PREFIX() : string { 
        if (this.__$PROXY_PREFIX===undefined) {
            this.__$PROXY_PREFIX = "PROXY ";
        }
        return this.__$PROXY_PREFIX;
    }

    private static __$DIRECT_PREFIX : string;
    static get DIRECT_PREFIX() : string { 
        if (this.__$DIRECT_PREFIX===undefined) {
            this.__$DIRECT_PREFIX = "DIRECT";
        }
        return this.__$DIRECT_PREFIX;
    }

    constructor(configuration : string) {
    }
    @defaultConstructor
    _ProxyConfiguration(configuration : string) {
        this.proxies = new core.DartList<_Proxy>();
        if (configuration == null) {
            throw new HttpException(`Invalid proxy configuration ${configuration}`);
        }
        let list : core.DartList<string> = new core.DartString(configuration).split(";");
        list.forEach((proxy : string) =>  {
            proxy = new core.DartString(proxy).trim();
            if (!new core.DartString(proxy).isEmpty) {
                if (new core.DartString(proxy).startsWith(_ProxyConfiguration.PROXY_PREFIX)) {
                    let username : string;
                    let password : string;
                    proxy = new core.DartString(new core.DartString(proxy).substring(new core.DartString(_ProxyConfiguration.PROXY_PREFIX).length)).trim();
                    let at : number = new core.DartString(proxy).indexOf("@");
                    if (at != -1) {
                        let userinfo : string = new core.DartString(new core.DartString(proxy).substring(0,at)).trim();
                        proxy = new core.DartString(new core.DartString(proxy).substring(at + 1)).trim();
                        let colon : number = new core.DartString(userinfo).indexOf(":");
                        if (colon == -1 || colon == 0 || colon == new core.DartString(proxy).length - 1) {
                            throw new HttpException(`Invalid proxy configuration ${configuration}`);
                        }
                        username = new core.DartString(new core.DartString(userinfo).substring(0,colon)).trim();
                        password = new core.DartString(new core.DartString(userinfo).substring(colon + 1)).trim();
                    }
                    let colon : number = new core.DartString(proxy).lastIndexOf(":");
                    if (colon == -1 || colon == 0 || colon == new core.DartString(proxy).length - 1) {
                        throw new HttpException(`Invalid proxy configuration ${configuration}`);
                    }
                    let host : string = new core.DartString(new core.DartString(proxy).substring(0,colon)).trim();
                    if (new core.DartString(host).startsWith("[") && new core.DartString(host).endsWith("]")) {
                        host = new core.DartString(host).substring(1,new core.DartString(host).length - 1);
                    }
                    let portString : string = new core.DartString(new core.DartString(proxy).substring(colon + 1)).trim();
                    let port : number;
                    try {
                        port = core.DartInt.parse(portString);
                    } catch (__error__) {

                        if (is(__error__,core.FormatException)){
                            let e : core.FormatException = __error__;
                            throw new HttpException(`Invalid proxy configuration ${configuration}, ` + `invalid port '${portString}'`);
                        }
                    }
                    this.proxies.add(new _Proxy(host,port,username,password));
                }else if (new core.DartString(proxy).trim() == _ProxyConfiguration.DIRECT_PREFIX) {
                    this.proxies.add(new _Proxy.direct());
                }else {
                    throw new HttpException(`Invalid proxy configuration ${configuration}`);
                }
            }
        });
    }
    @namedConstructor
    direct() {
        this.proxies = new core.DartList.literal(new _Proxy.direct());
    }
    static direct : new() => _ProxyConfiguration;

    proxies : core.DartList<_Proxy>;

}

export namespace _Proxy {
    export type Constructors = '_Proxy' | 'direct';
    export type Interface = Omit<_Proxy, Constructors>;
}
@DartClass
export class _Proxy {
    host : string;

    port : number;

    username : string;

    password : string;

    isDirect : boolean;

    constructor(host : string,port : number,username : string,password : string) {
    }
    @defaultConstructor
    _Proxy(host : string,port : number,username : string,password : string) {
        this.isDirect = false;
        this.host = host;
        this.port = port;
        this.username = username;
        this.password = password;
    }
    @namedConstructor
    direct() {
        this.host = null;
        this.port = null;
        this.username = null;
        this.password = null;
        this.isDirect = true;
    }
    static direct : new() => _Proxy;

    get isAuthenticated() : boolean {
        return this.username != null;
    }
}

export namespace _HttpConnectionInfo {
    export type Constructors = '_HttpConnectionInfo';
    export type Interface = Omit<_HttpConnectionInfo, Constructors>;
}
@DartClass
@Implements(HttpConnectionInfo)
export class _HttpConnectionInfo implements HttpConnectionInfo.Interface {
    remoteAddress : InternetAddress;

    remotePort : number;

    localPort : number;

    static create(socket : Socket) : _HttpConnectionInfo {
        if (op(Op.EQUALS,socket,null)) return null;
        try {
            let info : _HttpConnectionInfo = new _HttpConnectionInfo();
            return ((_) : _HttpConnectionInfo =>  {
                {
                    _.remoteAddress = socket.remoteAddress;
                    _.remotePort = socket.remotePort;
                    _.localPort = socket.port;
                    return _;
                }
            })(info);
        } catch (__error__) {

            {
                let e = __error__;
            }
        }
        return null;
    }
    constructor() {
    }
    @defaultConstructor
    _HttpConnectionInfo() {
    }
}

export namespace _DetachedSocket {
    export type Constructors = async.DartStream.Constructors | '_DetachedSocket';
    export type Interface = Omit<_DetachedSocket, Constructors>;
}
@DartClass
@Implements(Socket)
export class _DetachedSocket extends async.DartStream<core.DartList<number>> implements Socket.Interface {
    _incoming : async.DartStream<core.DartList<number>>;

    _socket : Socket;

    constructor(_socket : Socket,_incoming : async.DartStream<core.DartList<number>>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DetachedSocket(_socket : Socket,_incoming : async.DartStream<core.DartList<number>>) {
        this._socket = _socket;
        this._incoming = _incoming;
    }
    listen(onData : (event : core.DartList<number>) => void,_namedArguments? : {onError? : Function,onDone? : () => void,cancelOnError? : boolean}) : async.DartStreamSubscription<core.DartList<number>> {
        let {onError,onDone,cancelOnError} = Object.assign({
        }, _namedArguments );
        return this._incoming.listen(onData,{
            onError : onError,onDone : onDone,cancelOnError : cancelOnError});
    }
    get encoding() : convert.Encoding {
        return this._socket.encoding;
    }
    set encoding(value : convert.Encoding) {
        this._socket.encoding = value;
    }
    write(obj : core.DartObject) : void {
        this._socket.write(obj);
    }
    writeln(obj? : core.DartObject) : void {
        obj = obj || "";
        this._socket.writeln(obj);
    }
    writeCharCode(charCode : number) : void {
        this._socket.writeCharCode(charCode);
    }
    writeAll(objects : core.DartIterable<any>,separator? : string) : void {
        separator = separator || "";
        this._socket.writeAll(objects,separator);
    }
    add(bytes : core.DartList<number>) : void {
        this._socket.add(bytes);
    }
    addError(error : any,stackTrace? : core.DartStackTrace) : void {
        return this._socket.addError(error,stackTrace);
    }
    addStream(stream : async.DartStream<core.DartList<number>>) : async.Future<any> {
        return this._socket.addStream(stream);
    }
    destroy() : void {
        this._socket.destroy();
    }
    flush() : async.Future<any> {
        return this._socket.flush();
    }
    close() : async.Future<Socket> {
        return this._socket.close();
    }
    get done() : async.Future<Socket> {
        return this._socket.done;
    }
    get port() : number {
        return this._socket.port;
    }
    get address() : InternetAddress {
        return this._socket.address;
    }
    get remoteAddress() : InternetAddress {
        return this._socket.remoteAddress;
    }
    get remotePort() : number {
        return this._socket.remotePort;
    }
    setOption(option : SocketOption,enabled : boolean) : boolean {
        return this._socket.setOption(option,enabled);
    }
    _toJSON(ref : boolean) : core.DartMap<any,any> {
        return (this._socket as any)._toJSON(ref);
    }
    set _owner(owner : any) {
        (this._socket as any)._owner = owner;
    }
}

export namespace _AuthenticationScheme {
    export type Constructors = '_AuthenticationScheme';
    export type Interface = Omit<_AuthenticationScheme, Constructors>;
}
@DartClass
export class _AuthenticationScheme {
    _scheme : number;

    private static __$UNKNOWN;
    static get UNKNOWN() { 
        if (this.__$UNKNOWN===undefined) {
            this.__$UNKNOWN = new _AuthenticationScheme(-1);
        }
        return this.__$UNKNOWN;
    }

    private static __$BASIC;
    static get BASIC() { 
        if (this.__$BASIC===undefined) {
            this.__$BASIC = new _AuthenticationScheme(0);
        }
        return this.__$BASIC;
    }

    private static __$DIGEST;
    static get DIGEST() { 
        if (this.__$DIGEST===undefined) {
            this.__$DIGEST = new _AuthenticationScheme(1);
        }
        return this.__$DIGEST;
    }

    constructor(_scheme : number) {
    }
    @defaultConstructor
    _AuthenticationScheme(_scheme : number) {
        this._scheme = _scheme;
    }
    @namedFactory
    static $fromString(scheme : string) : _AuthenticationScheme {
        if (new core.DartString(scheme).toLowerCase() == "basic") return _AuthenticationScheme.BASIC;
        if (new core.DartString(scheme).toLowerCase() == "digest") return _AuthenticationScheme.DIGEST;
        return _AuthenticationScheme.UNKNOWN;
    }
    static fromString : new(scheme : string) => _AuthenticationScheme;

    toString() : string {
        if (op(Op.EQUALS,this,_AuthenticationScheme.BASIC)) return "Basic";
        if (op(Op.EQUALS,this,_AuthenticationScheme.DIGEST)) return "Digest";
        return "Unknown";
    }
}

export namespace _Credentials {
    export type Constructors = '_Credentials';
    export type Interface = Omit<_Credentials, Constructors>;
}
@DartClass
export class _Credentials {
    credentials : _HttpClientCredentials;

    realm : string;

    used : boolean;

    ha1 : string;

    nonce : string;

    algorithm : string;

    qop : string;

    nonceCount : number;

    constructor(credentials : _HttpClientCredentials,realm : string) {
    }
    @defaultConstructor
    _Credentials(credentials : _HttpClientCredentials,realm : string) {
        this.used = false;
        this.credentials = credentials;
        this.realm = realm;
        if (op(Op.EQUALS,this.credentials.scheme,_AuthenticationScheme.DIGEST)) {
            let creds : _HttpClientDigestCredentials = this.credentials;
            let hasher = ((_) : _MD5 =>  {
                {
                    _.add(convert.properties.UTF8.encode(creds.username));
                    _.add(new core.DartList.literal(_CharCode.COLON));
                    _.add(new core.DartString(this.realm).codeUnits);
                    _.add(new core.DartList.literal(_CharCode.COLON));
                    _.add(convert.properties.UTF8.encode(creds.password));
                    return _;
                }
            })(new _MD5());
            this.ha1 = _CryptoUtils.bytesToHex(hasher.close());
        }
    }
    get scheme() : _AuthenticationScheme {
        return this.credentials.scheme;
    }
    @Abstract
    authorize(request : HttpClientRequest) : void{ throw 'abstract'}
}

export namespace WebSocket {
    export type Constructors = 'WebSocket';
    export type Interface = Omit<WebSocket, Constructors>;
}
@DartClass
@Implements(async.DartStream,async.DartStreamSink)
export class WebSocket implements async.DartStream.Interface<any>,async.DartStreamSink.Interface<any> {
    private static __$CONNECTING : number;
    static get CONNECTING() : number { 
        if (this.__$CONNECTING===undefined) {
            this.__$CONNECTING = 0;
        }
        return this.__$CONNECTING;
    }

    private static __$OPEN : number;
    static get OPEN() : number { 
        if (this.__$OPEN===undefined) {
            this.__$OPEN = 1;
        }
        return this.__$OPEN;
    }

    private static __$CLOSING : number;
    static get CLOSING() : number { 
        if (this.__$CLOSING===undefined) {
            this.__$CLOSING = 2;
        }
        return this.__$CLOSING;
    }

    private static __$CLOSED : number;
    static get CLOSED() : number { 
        if (this.__$CLOSED===undefined) {
            this.__$CLOSED = 3;
        }
        return this.__$CLOSED;
    }

    pingInterval : core.DartDuration;

    static connect(url : string,_namedArguments? : {protocols? : core.DartIterable<string>,headers? : core.DartMap<string,any>,compression? : CompressionOptions}) : async.Future<WebSocket> {
        let {protocols,headers,compression} = Object.assign({
            "compression" : CompressionOptions.DEFAULT}, _namedArguments );
        return _WebSocketImpl.connect(url,protocols,headers,{
            compression : compression});
    }
    constructor() {
    }
    @defaultConstructor
    WebSocket() {
    }
    @namedFactory
    static $fromUpgradedSocket(socket : Socket,_namedArguments? : {protocol? : string,serverSide? : boolean,compression? : CompressionOptions}) : WebSocket {
        let {protocol,serverSide,compression} = Object.assign({
            "compression" : CompressionOptions.DEFAULT}, _namedArguments );
        if (serverSide == null) {
            throw new core.ArgumentError("The serverSide argument must be passed " + "explicitly to WebSocket.fromUpgradedSocket.");
        }
        return new _WebSocketImpl._fromSocket(socket,protocol,compression,serverSide);
    }
    static fromUpgradedSocket : new(socket : Socket,_namedArguments? : {protocol? : string,serverSide? : boolean,compression? : CompressionOptions}) => WebSocket;

    @AbstractProperty
    get readyState() : number{ throw 'abstract'}
    @AbstractProperty
    get extensions() : string{ throw 'abstract'}
    @AbstractProperty
    get protocol() : string{ throw 'abstract'}
    @AbstractProperty
    get closeCode() : number{ throw 'abstract'}
    @AbstractProperty
    get closeReason() : string{ throw 'abstract'}
    @Abstract
    close(code? : number,reason? : string) : async.Future<any>{ throw 'abstract'}
    @Abstract
    add(data : any) : void{ throw 'abstract'}
    @Abstract
    addStream(stream : async.DartStream<any>) : async.Future<any>{ throw 'abstract'}
    @Abstract
    addUtf8Text(bytes : core.DartList<number>) : void{ throw 'abstract'}
}

export namespace WebSocketTransformer {
    export type Constructors = never;
    export type Interface = Omit<WebSocketTransformer, Constructors>;
}
@DartClass
@Implements(async.DartStreamTransformer)
export class WebSocketTransformer implements async.DartStreamTransformer.Interface<HttpRequest,WebSocket> {
    constructor(_namedArguments? : {protocolSelector? : (protocols : core.DartList<string>) => any,compression? : CompressionOptions}) {
    }
    @defaultFactory
    static $WebSocketTransformer(_namedArguments? : {protocolSelector? : (protocols : core.DartList<string>) => any,compression? : CompressionOptions}) : WebSocketTransformer {
        let {protocolSelector,compression} = Object.assign({
            "compression" : CompressionOptions.DEFAULT}, _namedArguments );
        return new _WebSocketTransformerImpl(protocolSelector,compression);
    }
    static upgrade(request : HttpRequest,_namedArguments? : {protocolSelector? : (protocols : core.DartList<string>) => any,compression? : CompressionOptions}) : async.Future<WebSocket> {
        let {protocolSelector,compression} = Object.assign({
            "compression" : CompressionOptions.DEFAULT}, _namedArguments );
        return _WebSocketTransformerImpl._upgrade(request,protocolSelector,compression);
    }
    static isUpgradeRequest(request : HttpRequest) : boolean {
        return _WebSocketTransformerImpl._isUpgradeRequest(request);
    }
}

export namespace _HttpClientCredentials {
    export type Constructors = '_HttpClientCredentials';
    export type Interface = Omit<_HttpClientCredentials, Constructors>;
}
@DartClass
@Implements(HttpClientCredentials)
export class _HttpClientCredentials implements HttpClientCredentials.Interface {
    @AbstractProperty
    get scheme() : _AuthenticationScheme{ throw 'abstract'}
    @Abstract
    authorize(credentials : _Credentials,request : HttpClientRequest) : void{ throw 'abstract'}
    @Abstract
    authorizeProxy(credentials : _ProxyCredentials,request : HttpClientRequest) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    _HttpClientCredentials() {
    }
}

export namespace CompressionOptions {
    export type Constructors = 'CompressionOptions';
    export type Interface = Omit<CompressionOptions, Constructors>;
}
@DartClass
export class CompressionOptions {
    private static __$DEFAULT : CompressionOptions;
    static get DEFAULT() : CompressionOptions { 
        if (this.__$DEFAULT===undefined) {
            this.__$DEFAULT = new CompressionOptions();
        }
        return this.__$DEFAULT;
    }

    private static __$OFF : CompressionOptions;
    static get OFF() : CompressionOptions { 
        if (this.__$OFF===undefined) {
            this.__$OFF = new CompressionOptions({
                enabled : false});
        }
        return this.__$OFF;
    }

    clientNoContextTakeover : boolean;

    serverNoContextTakeover : boolean;

    clientMaxWindowBits : number;

    serverMaxWindowBits : number;

    enabled : boolean;

    constructor(_namedArguments? : {clientNoContextTakeover? : boolean,serverNoContextTakeover? : boolean,clientMaxWindowBits? : number,serverMaxWindowBits? : number,enabled? : boolean}) {
    }
    @defaultConstructor
    CompressionOptions(_namedArguments? : {clientNoContextTakeover? : boolean,serverNoContextTakeover? : boolean,clientMaxWindowBits? : number,serverMaxWindowBits? : number,enabled? : boolean}) {
        let {clientNoContextTakeover,serverNoContextTakeover,clientMaxWindowBits,serverMaxWindowBits,enabled} = Object.assign({
            "clientNoContextTakeover" : false,
            "serverNoContextTakeover" : false,
            "enabled" : true}, _namedArguments );
        this.clientNoContextTakeover = clientNoContextTakeover;
        this.serverNoContextTakeover = serverNoContextTakeover;
        this.clientMaxWindowBits = clientMaxWindowBits;
        this.serverMaxWindowBits = serverMaxWindowBits;
        this.enabled = enabled;
    }
    _createServerResponseHeader(requested : HeaderValue) : _CompressionMaxWindowBits {
        let info = new _CompressionMaxWindowBits();
        let mwb : number;
        let part : string;
        if (((t)=>(!!t)?t.parameters:null)(requested) != null) {
            part = requested.parameters.get(properties._serverMaxWindowBits);
        }
        if (part != null) {
            if (new core.DartString(part).length >= 2 && new core.DartString(part).startsWith('0')) {
                throw new core.ArgumentError("Illegal 0 padding on value.");
            }else {
                mwb = this.serverMaxWindowBits == null ? core.DartInt.parse(part,{
                    onError : (source : any) =>  {
                        return _WebSocketImpl.DEFAULT_WINDOW_BITS;
                    }}) : this.serverMaxWindowBits;
                info.headerValue = `; server_max_window_bits=${mwb}`;
                info.maxWindowBits = mwb;
            }
        }else {
            info.headerValue = "";
            info.maxWindowBits = _WebSocketImpl.DEFAULT_WINDOW_BITS;
        }
        return info;
    }
    _createClientRequestHeader(requested : HeaderValue,size : number) : string {
        let info = "";
        if (requested != null) {
            info = `; client_max_window_bits=${size}`;
        }else {
            if (this.clientMaxWindowBits == null) {
                info = "; client_max_window_bits";
            }else {
                info = `; client_max_window_bits=${this.clientMaxWindowBits}`;
            }
            if (this.serverMaxWindowBits != null) {
                info += `; server_max_window_bits=${this.serverMaxWindowBits}`;
            }
        }
        return info;
    }
    _createHeader(requested? : HeaderValue) : _CompressionMaxWindowBits {
        let info = new _CompressionMaxWindowBits("",0);
        if (!this.enabled) {
            return info;
        }
        info.headerValue = _WebSocketImpl.PER_MESSAGE_DEFLATE;
        if (this.clientNoContextTakeover && (op(Op.EQUALS,requested,null) || (requested != null && requested.parameters.containsKey(properties._clientNoContextTakeover)))) {
            info.headerValue += "; client_no_context_takeover";
        }
        if (this.serverNoContextTakeover && (op(Op.EQUALS,requested,null) || (requested != null && requested.parameters.containsKey(properties._serverNoContextTakeover)))) {
            info.headerValue += "; server_no_context_takeover";
        }
        let headerList = this._createServerResponseHeader(requested);
        info.headerValue += headerList.headerValue;
        info.maxWindowBits = headerList.maxWindowBits;
        info.headerValue += this._createClientRequestHeader(requested,info.maxWindowBits);
        return info;
    }
}

export namespace WebSocketStatus {
    export type Constructors = 'WebSocketStatus';
    export type Interface = Omit<WebSocketStatus, Constructors>;
}
@DartClass
export class WebSocketStatus {
    private static __$NORMAL_CLOSURE : number;
    static get NORMAL_CLOSURE() : number { 
        if (this.__$NORMAL_CLOSURE===undefined) {
            this.__$NORMAL_CLOSURE = 1000;
        }
        return this.__$NORMAL_CLOSURE;
    }

    private static __$GOING_AWAY : number;
    static get GOING_AWAY() : number { 
        if (this.__$GOING_AWAY===undefined) {
            this.__$GOING_AWAY = 1001;
        }
        return this.__$GOING_AWAY;
    }

    private static __$PROTOCOL_ERROR : number;
    static get PROTOCOL_ERROR() : number { 
        if (this.__$PROTOCOL_ERROR===undefined) {
            this.__$PROTOCOL_ERROR = 1002;
        }
        return this.__$PROTOCOL_ERROR;
    }

    private static __$UNSUPPORTED_DATA : number;
    static get UNSUPPORTED_DATA() : number { 
        if (this.__$UNSUPPORTED_DATA===undefined) {
            this.__$UNSUPPORTED_DATA = 1003;
        }
        return this.__$UNSUPPORTED_DATA;
    }

    private static __$RESERVED_1004 : number;
    static get RESERVED_1004() : number { 
        if (this.__$RESERVED_1004===undefined) {
            this.__$RESERVED_1004 = 1004;
        }
        return this.__$RESERVED_1004;
    }

    private static __$NO_STATUS_RECEIVED : number;
    static get NO_STATUS_RECEIVED() : number { 
        if (this.__$NO_STATUS_RECEIVED===undefined) {
            this.__$NO_STATUS_RECEIVED = 1005;
        }
        return this.__$NO_STATUS_RECEIVED;
    }

    private static __$ABNORMAL_CLOSURE : number;
    static get ABNORMAL_CLOSURE() : number { 
        if (this.__$ABNORMAL_CLOSURE===undefined) {
            this.__$ABNORMAL_CLOSURE = 1006;
        }
        return this.__$ABNORMAL_CLOSURE;
    }

    private static __$INVALID_FRAME_PAYLOAD_DATA : number;
    static get INVALID_FRAME_PAYLOAD_DATA() : number { 
        if (this.__$INVALID_FRAME_PAYLOAD_DATA===undefined) {
            this.__$INVALID_FRAME_PAYLOAD_DATA = 1007;
        }
        return this.__$INVALID_FRAME_PAYLOAD_DATA;
    }

    private static __$POLICY_VIOLATION : number;
    static get POLICY_VIOLATION() : number { 
        if (this.__$POLICY_VIOLATION===undefined) {
            this.__$POLICY_VIOLATION = 1008;
        }
        return this.__$POLICY_VIOLATION;
    }

    private static __$MESSAGE_TOO_BIG : number;
    static get MESSAGE_TOO_BIG() : number { 
        if (this.__$MESSAGE_TOO_BIG===undefined) {
            this.__$MESSAGE_TOO_BIG = 1009;
        }
        return this.__$MESSAGE_TOO_BIG;
    }

    private static __$MISSING_MANDATORY_EXTENSION : number;
    static get MISSING_MANDATORY_EXTENSION() : number { 
        if (this.__$MISSING_MANDATORY_EXTENSION===undefined) {
            this.__$MISSING_MANDATORY_EXTENSION = 1010;
        }
        return this.__$MISSING_MANDATORY_EXTENSION;
    }

    private static __$INTERNAL_SERVER_ERROR : number;
    static get INTERNAL_SERVER_ERROR() : number { 
        if (this.__$INTERNAL_SERVER_ERROR===undefined) {
            this.__$INTERNAL_SERVER_ERROR = 1011;
        }
        return this.__$INTERNAL_SERVER_ERROR;
    }

    private static __$RESERVED_1015 : number;
    static get RESERVED_1015() : number { 
        if (this.__$RESERVED_1015===undefined) {
            this.__$RESERVED_1015 = 1015;
        }
        return this.__$RESERVED_1015;
    }

    constructor() {
    }
    @defaultConstructor
    WebSocketStatus() {
    }
}

export namespace _RedirectInfo {
    export type Constructors = '_RedirectInfo';
    export type Interface = Omit<_RedirectInfo, Constructors>;
}
@DartClass
@Implements(RedirectInfo)
export class _RedirectInfo implements RedirectInfo.Interface {
    statusCode : number;

    method : string;

    location : lib5.Uri;

    constructor(statusCode : number,method : string,location : lib5.Uri) {
    }
    @defaultConstructor
    _RedirectInfo(statusCode : number,method : string,location : lib5.Uri) {
        this.statusCode = statusCode;
        this.method = method;
        this.location = location;
    }
}

export namespace HttpException {
    export type Constructors = 'HttpException';
    export type Interface = Omit<HttpException, Constructors>;
}
@DartClass
@Implements(IOException)
export class HttpException implements IOException.Interface {
    message : string;

    uri : lib5.Uri;

    constructor(message : string,_namedArguments? : {uri? : lib5.Uri}) {
    }
    @defaultConstructor
    HttpException(message : string,_namedArguments? : {uri? : lib5.Uri}) {
        let {uri} = Object.assign({
        }, _namedArguments );
        this.message = message;
        this.uri = uri;
    }
    toString() : string {
        let b = ((_) : core.DartStringBuffer =>  {
            {
                _.write('HttpException: ');
                _.write(this.message);
                return _;
            }
        })(new core.DartStringBuffer());
        if (this.uri != null) {
            b.write(`, uri = ${this.uri}`);
        }
        return b.toString();
    }
}

export namespace _Const {
    export type Constructors = '_Const';
    export type Interface = Omit<_Const, Constructors>;
}
@DartClass
export class _Const {
    private static __$HTTP;
    static get HTTP() { 
        if (this.__$HTTP===undefined) {
            this.__$HTTP = new core.DartList.literal(72,84,84,80);
        }
        return this.__$HTTP;
    }

    private static __$HTTP1DOT;
    static get HTTP1DOT() { 
        if (this.__$HTTP1DOT===undefined) {
            this.__$HTTP1DOT = new core.DartList.literal(72,84,84,80,47,49,46);
        }
        return this.__$HTTP1DOT;
    }

    private static __$HTTP10;
    static get HTTP10() { 
        if (this.__$HTTP10===undefined) {
            this.__$HTTP10 = new core.DartList.literal(72,84,84,80,47,49,46,48);
        }
        return this.__$HTTP10;
    }

    private static __$HTTP11;
    static get HTTP11() { 
        if (this.__$HTTP11===undefined) {
            this.__$HTTP11 = new core.DartList.literal(72,84,84,80,47,49,46,49);
        }
        return this.__$HTTP11;
    }

    private static __$T : boolean;
    static get T() : boolean { 
        if (this.__$T===undefined) {
            this.__$T = true;
        }
        return this.__$T;
    }

    private static __$F : boolean;
    static get F() : boolean { 
        if (this.__$F===undefined) {
            this.__$F = false;
        }
        return this.__$F;
    }

    private static __$SEPARATOR_MAP;
    static get SEPARATOR_MAP() { 
        if (this.__$SEPARATOR_MAP===undefined) {
            this.__$SEPARATOR_MAP = new core.DartList.literal(_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.T,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.T,_Const.F,_Const.T,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.T,_Const.T,_Const.F,_Const.F,_Const.T,_Const.F,_Const.F,_Const.T,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.T,_Const.T,_Const.T,_Const.T,_Const.T,_Const.T,_Const.T,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.T,_Const.T,_Const.T,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.T,_Const.F,_Const.T,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F,_Const.F);
        }
        return this.__$SEPARATOR_MAP;
    }

    constructor() {
    }
    @defaultConstructor
    _Const() {
    }
}

export namespace _CharCode {
    export type Constructors = '_CharCode';
    export type Interface = Omit<_CharCode, Constructors>;
}
@DartClass
export class _CharCode {
    private static __$HT : number;
    static get HT() : number { 
        if (this.__$HT===undefined) {
            this.__$HT = 9;
        }
        return this.__$HT;
    }

    private static __$LF : number;
    static get LF() : number { 
        if (this.__$LF===undefined) {
            this.__$LF = 10;
        }
        return this.__$LF;
    }

    private static __$CR : number;
    static get CR() : number { 
        if (this.__$CR===undefined) {
            this.__$CR = 13;
        }
        return this.__$CR;
    }

    private static __$SP : number;
    static get SP() : number { 
        if (this.__$SP===undefined) {
            this.__$SP = 32;
        }
        return this.__$SP;
    }

    private static __$AMPERSAND : number;
    static get AMPERSAND() : number { 
        if (this.__$AMPERSAND===undefined) {
            this.__$AMPERSAND = 38;
        }
        return this.__$AMPERSAND;
    }

    private static __$COMMA : number;
    static get COMMA() : number { 
        if (this.__$COMMA===undefined) {
            this.__$COMMA = 44;
        }
        return this.__$COMMA;
    }

    private static __$DASH : number;
    static get DASH() : number { 
        if (this.__$DASH===undefined) {
            this.__$DASH = 45;
        }
        return this.__$DASH;
    }

    private static __$SLASH : number;
    static get SLASH() : number { 
        if (this.__$SLASH===undefined) {
            this.__$SLASH = 47;
        }
        return this.__$SLASH;
    }

    private static __$ZERO : number;
    static get ZERO() : number { 
        if (this.__$ZERO===undefined) {
            this.__$ZERO = 48;
        }
        return this.__$ZERO;
    }

    private static __$ONE : number;
    static get ONE() : number { 
        if (this.__$ONE===undefined) {
            this.__$ONE = 49;
        }
        return this.__$ONE;
    }

    private static __$COLON : number;
    static get COLON() : number { 
        if (this.__$COLON===undefined) {
            this.__$COLON = 58;
        }
        return this.__$COLON;
    }

    private static __$SEMI_COLON : number;
    static get SEMI_COLON() : number { 
        if (this.__$SEMI_COLON===undefined) {
            this.__$SEMI_COLON = 59;
        }
        return this.__$SEMI_COLON;
    }

    private static __$EQUAL : number;
    static get EQUAL() : number { 
        if (this.__$EQUAL===undefined) {
            this.__$EQUAL = 61;
        }
        return this.__$EQUAL;
    }

    constructor() {
    }
    @defaultConstructor
    _CharCode() {
    }
}

export namespace _State {
    export type Constructors = '_State';
    export type Interface = Omit<_State, Constructors>;
}
@DartClass
export class _State {
    private static __$START : number;
    static get START() : number { 
        if (this.__$START===undefined) {
            this.__$START = 0;
        }
        return this.__$START;
    }

    private static __$METHOD_OR_RESPONSE_HTTP_VERSION : number;
    static get METHOD_OR_RESPONSE_HTTP_VERSION() : number { 
        if (this.__$METHOD_OR_RESPONSE_HTTP_VERSION===undefined) {
            this.__$METHOD_OR_RESPONSE_HTTP_VERSION = 1;
        }
        return this.__$METHOD_OR_RESPONSE_HTTP_VERSION;
    }

    private static __$RESPONSE_HTTP_VERSION : number;
    static get RESPONSE_HTTP_VERSION() : number { 
        if (this.__$RESPONSE_HTTP_VERSION===undefined) {
            this.__$RESPONSE_HTTP_VERSION = 2;
        }
        return this.__$RESPONSE_HTTP_VERSION;
    }

    private static __$REQUEST_LINE_METHOD : number;
    static get REQUEST_LINE_METHOD() : number { 
        if (this.__$REQUEST_LINE_METHOD===undefined) {
            this.__$REQUEST_LINE_METHOD = 3;
        }
        return this.__$REQUEST_LINE_METHOD;
    }

    private static __$REQUEST_LINE_URI : number;
    static get REQUEST_LINE_URI() : number { 
        if (this.__$REQUEST_LINE_URI===undefined) {
            this.__$REQUEST_LINE_URI = 4;
        }
        return this.__$REQUEST_LINE_URI;
    }

    private static __$REQUEST_LINE_HTTP_VERSION : number;
    static get REQUEST_LINE_HTTP_VERSION() : number { 
        if (this.__$REQUEST_LINE_HTTP_VERSION===undefined) {
            this.__$REQUEST_LINE_HTTP_VERSION = 5;
        }
        return this.__$REQUEST_LINE_HTTP_VERSION;
    }

    private static __$REQUEST_LINE_ENDING : number;
    static get REQUEST_LINE_ENDING() : number { 
        if (this.__$REQUEST_LINE_ENDING===undefined) {
            this.__$REQUEST_LINE_ENDING = 6;
        }
        return this.__$REQUEST_LINE_ENDING;
    }

    private static __$RESPONSE_LINE_STATUS_CODE : number;
    static get RESPONSE_LINE_STATUS_CODE() : number { 
        if (this.__$RESPONSE_LINE_STATUS_CODE===undefined) {
            this.__$RESPONSE_LINE_STATUS_CODE = 7;
        }
        return this.__$RESPONSE_LINE_STATUS_CODE;
    }

    private static __$RESPONSE_LINE_REASON_PHRASE : number;
    static get RESPONSE_LINE_REASON_PHRASE() : number { 
        if (this.__$RESPONSE_LINE_REASON_PHRASE===undefined) {
            this.__$RESPONSE_LINE_REASON_PHRASE = 8;
        }
        return this.__$RESPONSE_LINE_REASON_PHRASE;
    }

    private static __$RESPONSE_LINE_ENDING : number;
    static get RESPONSE_LINE_ENDING() : number { 
        if (this.__$RESPONSE_LINE_ENDING===undefined) {
            this.__$RESPONSE_LINE_ENDING = 9;
        }
        return this.__$RESPONSE_LINE_ENDING;
    }

    private static __$HEADER_START : number;
    static get HEADER_START() : number { 
        if (this.__$HEADER_START===undefined) {
            this.__$HEADER_START = 10;
        }
        return this.__$HEADER_START;
    }

    private static __$HEADER_FIELD : number;
    static get HEADER_FIELD() : number { 
        if (this.__$HEADER_FIELD===undefined) {
            this.__$HEADER_FIELD = 11;
        }
        return this.__$HEADER_FIELD;
    }

    private static __$HEADER_VALUE_START : number;
    static get HEADER_VALUE_START() : number { 
        if (this.__$HEADER_VALUE_START===undefined) {
            this.__$HEADER_VALUE_START = 12;
        }
        return this.__$HEADER_VALUE_START;
    }

    private static __$HEADER_VALUE : number;
    static get HEADER_VALUE() : number { 
        if (this.__$HEADER_VALUE===undefined) {
            this.__$HEADER_VALUE = 13;
        }
        return this.__$HEADER_VALUE;
    }

    private static __$HEADER_VALUE_FOLDING_OR_ENDING : number;
    static get HEADER_VALUE_FOLDING_OR_ENDING() : number { 
        if (this.__$HEADER_VALUE_FOLDING_OR_ENDING===undefined) {
            this.__$HEADER_VALUE_FOLDING_OR_ENDING = 14;
        }
        return this.__$HEADER_VALUE_FOLDING_OR_ENDING;
    }

    private static __$HEADER_VALUE_FOLD_OR_END : number;
    static get HEADER_VALUE_FOLD_OR_END() : number { 
        if (this.__$HEADER_VALUE_FOLD_OR_END===undefined) {
            this.__$HEADER_VALUE_FOLD_OR_END = 15;
        }
        return this.__$HEADER_VALUE_FOLD_OR_END;
    }

    private static __$HEADER_ENDING : number;
    static get HEADER_ENDING() : number { 
        if (this.__$HEADER_ENDING===undefined) {
            this.__$HEADER_ENDING = 16;
        }
        return this.__$HEADER_ENDING;
    }

    private static __$CHUNK_SIZE_STARTING_CR : number;
    static get CHUNK_SIZE_STARTING_CR() : number { 
        if (this.__$CHUNK_SIZE_STARTING_CR===undefined) {
            this.__$CHUNK_SIZE_STARTING_CR = 17;
        }
        return this.__$CHUNK_SIZE_STARTING_CR;
    }

    private static __$CHUNK_SIZE_STARTING_LF : number;
    static get CHUNK_SIZE_STARTING_LF() : number { 
        if (this.__$CHUNK_SIZE_STARTING_LF===undefined) {
            this.__$CHUNK_SIZE_STARTING_LF = 18;
        }
        return this.__$CHUNK_SIZE_STARTING_LF;
    }

    private static __$CHUNK_SIZE : number;
    static get CHUNK_SIZE() : number { 
        if (this.__$CHUNK_SIZE===undefined) {
            this.__$CHUNK_SIZE = 19;
        }
        return this.__$CHUNK_SIZE;
    }

    private static __$CHUNK_SIZE_EXTENSION : number;
    static get CHUNK_SIZE_EXTENSION() : number { 
        if (this.__$CHUNK_SIZE_EXTENSION===undefined) {
            this.__$CHUNK_SIZE_EXTENSION = 20;
        }
        return this.__$CHUNK_SIZE_EXTENSION;
    }

    private static __$CHUNK_SIZE_ENDING : number;
    static get CHUNK_SIZE_ENDING() : number { 
        if (this.__$CHUNK_SIZE_ENDING===undefined) {
            this.__$CHUNK_SIZE_ENDING = 21;
        }
        return this.__$CHUNK_SIZE_ENDING;
    }

    private static __$CHUNKED_BODY_DONE_CR : number;
    static get CHUNKED_BODY_DONE_CR() : number { 
        if (this.__$CHUNKED_BODY_DONE_CR===undefined) {
            this.__$CHUNKED_BODY_DONE_CR = 22;
        }
        return this.__$CHUNKED_BODY_DONE_CR;
    }

    private static __$CHUNKED_BODY_DONE_LF : number;
    static get CHUNKED_BODY_DONE_LF() : number { 
        if (this.__$CHUNKED_BODY_DONE_LF===undefined) {
            this.__$CHUNKED_BODY_DONE_LF = 23;
        }
        return this.__$CHUNKED_BODY_DONE_LF;
    }

    private static __$BODY : number;
    static get BODY() : number { 
        if (this.__$BODY===undefined) {
            this.__$BODY = 24;
        }
        return this.__$BODY;
    }

    private static __$CLOSED : number;
    static get CLOSED() : number { 
        if (this.__$CLOSED===undefined) {
            this.__$CLOSED = 25;
        }
        return this.__$CLOSED;
    }

    private static __$UPGRADED : number;
    static get UPGRADED() : number { 
        if (this.__$UPGRADED===undefined) {
            this.__$UPGRADED = 26;
        }
        return this.__$UPGRADED;
    }

    private static __$FAILURE : number;
    static get FAILURE() : number { 
        if (this.__$FAILURE===undefined) {
            this.__$FAILURE = 27;
        }
        return this.__$FAILURE;
    }

    private static __$FIRST_BODY_STATE : number;
    static get FIRST_BODY_STATE() : number { 
        if (this.__$FIRST_BODY_STATE===undefined) {
            this.__$FIRST_BODY_STATE = _State.CHUNK_SIZE_STARTING_CR;
        }
        return this.__$FIRST_BODY_STATE;
    }

    constructor() {
    }
    @defaultConstructor
    _State() {
    }
}

export namespace _HttpVersion {
    export type Constructors = '_HttpVersion';
    export type Interface = Omit<_HttpVersion, Constructors>;
}
@DartClass
export class _HttpVersion {
    private static __$UNDETERMINED : number;
    static get UNDETERMINED() : number { 
        if (this.__$UNDETERMINED===undefined) {
            this.__$UNDETERMINED = 0;
        }
        return this.__$UNDETERMINED;
    }

    private static __$HTTP10 : number;
    static get HTTP10() : number { 
        if (this.__$HTTP10===undefined) {
            this.__$HTTP10 = 1;
        }
        return this.__$HTTP10;
    }

    private static __$HTTP11 : number;
    static get HTTP11() : number { 
        if (this.__$HTTP11===undefined) {
            this.__$HTTP11 = 2;
        }
        return this.__$HTTP11;
    }

    constructor() {
    }
    @defaultConstructor
    _HttpVersion() {
    }
}

export namespace _MessageType {
    export type Constructors = '_MessageType';
    export type Interface = Omit<_MessageType, Constructors>;
}
@DartClass
export class _MessageType {
    private static __$UNDETERMINED : number;
    static get UNDETERMINED() : number { 
        if (this.__$UNDETERMINED===undefined) {
            this.__$UNDETERMINED = 0;
        }
        return this.__$UNDETERMINED;
    }

    private static __$REQUEST : number;
    static get REQUEST() : number { 
        if (this.__$REQUEST===undefined) {
            this.__$REQUEST = 1;
        }
        return this.__$REQUEST;
    }

    private static __$RESPONSE : number;
    static get RESPONSE() : number { 
        if (this.__$RESPONSE===undefined) {
            this.__$RESPONSE = 0;
        }
        return this.__$RESPONSE;
    }

    constructor() {
    }
    @defaultConstructor
    _MessageType() {
    }
}

export namespace _HttpDetachedStreamSubscription {
    export type Constructors = '_HttpDetachedStreamSubscription';
    export type Interface = Omit<_HttpDetachedStreamSubscription, Constructors>;
}
@DartClass
@Implements(async.DartStreamSubscription)
export class _HttpDetachedStreamSubscription implements async.DartStreamSubscription.Interface<core.DartList<number>> {
    _subscription : async.DartStreamSubscription<core.DartList<number>>;

    _injectData : core.DartList<number>;

    _isCanceled : boolean;

    _pauseCount : number;

    _userOnData : Function;

    _scheduled : boolean;

    constructor(_subscription : async.DartStreamSubscription<core.DartList<number>>,_injectData : core.DartList<number>,_userOnData : Function) {
    }
    @defaultConstructor
    _HttpDetachedStreamSubscription(_subscription : async.DartStreamSubscription<core.DartList<number>>,_injectData : core.DartList<number>,_userOnData : Function) {
        this._isCanceled = false;
        this._pauseCount = 1;
        this._scheduled = false;
        this._subscription = _subscription;
        this._injectData = _injectData;
        this._userOnData = _userOnData;
    }
    get isPaused() : boolean {
        return this._subscription.isPaused;
    }
    asFuture<T>(futureValue? : T) : async.Future<T> {
        return this._subscription.asFuture(futureValue);
    }
    cancel() : async.Future<any> {
        this._isCanceled = true;
        this._injectData = null;
        return this._subscription.cancel();
    }
    onData(handleData : (data : core.DartList<number>) => void) : void {
        this._userOnData = handleData;
        this._subscription.onData(handleData);
    }
    onDone(handleDone : () => void) : void {
        this._subscription.onDone(handleDone);
    }
    onError(handleError : Function) : void {
        this._subscription.onError(handleError);
    }
    pause(resumeSignal? : async.Future<any>) : void {
        if (this._injectData == null) {
            this._subscription.pause(resumeSignal);
        }else {
            this._pauseCount++;
            if (resumeSignal != null) {
                resumeSignal.whenComplete(this.resume.bind(this));
            }
        }
    }
    resume() : void {
        if (this._injectData == null) {
            this._subscription.resume();
        }else {
            this._pauseCount--;
            this._maybeScheduleData();
        }
    }
    _maybeScheduleData() : void {
        if (this._scheduled) return;
        if (this._pauseCount != 0) return;
        this._scheduled = true;
        async.scheduleMicrotask(() =>  {
            this._scheduled = false;
            if (this._pauseCount > 0 || this._isCanceled) return;
            let data = this._injectData;
            this._injectData = null;
            this._subscription.resume();
            if (this._userOnData != null) {
                this._userOnData(data);
            }
        });
    }
}

export namespace _HttpDetachedIncoming {
    export type Constructors = async.DartStream.Constructors | '_HttpDetachedIncoming';
    export type Interface = Omit<_HttpDetachedIncoming, Constructors>;
}
@DartClass
export class _HttpDetachedIncoming extends async.DartStream<core.DartList<number>> {
    subscription : async.DartStreamSubscription<core.DartList<number>>;

    bufferedData : core.DartList<number>;

    constructor(subscription : async.DartStreamSubscription<core.DartList<number>>,bufferedData : core.DartList<number>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _HttpDetachedIncoming(subscription : async.DartStreamSubscription<core.DartList<number>>,bufferedData : core.DartList<number>) {
        this.subscription = subscription;
        this.bufferedData = bufferedData;
    }
    listen(onData : (event : core.DartList<number>) => void,_namedArguments? : {onError? : Function,onDone? : () => void,cancelOnError? : boolean}) : async.DartStreamSubscription<core.DartList<number>> {
        let {onError,onDone,cancelOnError} = Object.assign({
        }, _namedArguments );
        if (this.subscription != null) {
            ((_) : async.DartStreamSubscription<core.DartList<number>> =>  {
                {
                    _.onData(onData);
                    _.onError(onError);
                    _.onDone(onDone);
                    return _;
                }
            })(this.subscription);
            if (this.bufferedData == null) {
                return ((_) : async.DartStreamSubscription<core.DartList<number>> =>  {
                    {
                        _.resume();
                        return _;
                    }
                })(this.subscription);
            }
            return ((_) : _HttpDetachedStreamSubscription =>  {
                {
                    _.resume();
                    return _;
                }
            })(new _HttpDetachedStreamSubscription(this.subscription,this.bufferedData,onData));
        }else {
            return new async.DartStream.fromIterable(new core.DartList.literal(this.bufferedData)).listen(onData,{
                onError : onError,onDone : onDone,cancelOnError : cancelOnError});
        }
    }
}

export namespace _HttpParser {
    export type Constructors = async.DartStream.Constructors | '_';
    export type Interface = Omit<_HttpParser, Constructors>;
}
@DartClass
export class _HttpParser extends async.DartStream<_HttpIncoming> {
    _parserCalled : boolean;

    _buffer : typed_data.Uint8List;

    _index : number;

    _requestParser : boolean;

    _state : number;

    _httpVersionIndex : number;

    _messageType : number;

    _statusCode : number;

    _statusCodeLength : number;

    _method : core.DartList<number>;

    _uri_or_reason_phrase : core.DartList<number>;

    _headerField : core.DartList<number>;

    _headerValue : core.DartList<number>;

    _httpVersion : number;

    _transferLength : number;

    _persistentConnection : boolean;

    _connectionUpgrade : boolean;

    _chunked : boolean;

    _noMessageBody : boolean;

    _remainingContent : number;

    _headers : _HttpHeaders;

    _incoming : _HttpIncoming;

    _socketSubscription : async.DartStreamSubscription<core.DartList<number>>;

    _paused : boolean;

    _bodyPaused : boolean;

    _controller : async.DartStreamController<_HttpIncoming>;

    _bodyController : async.DartStreamController<core.DartList<number>>;

    @namedFactory
    static $requestParser() : _HttpParser {
        return new _HttpParser._(true);
    }
    static requestParser : new() => _HttpParser;

    @namedFactory
    static $responseParser() : _HttpParser {
        return new _HttpParser._(false);
    }
    static responseParser : new() => _HttpParser;

    @namedConstructor
    _(_requestParser : boolean) {
        this._parserCalled = false;
        this._statusCode = 0;
        this._statusCodeLength = 0;
        this._method = new core.DartList.literal();
        this._uri_or_reason_phrase = new core.DartList.literal();
        this._headerField = new core.DartList.literal();
        this._headerValue = new core.DartList.literal();
        this._transferLength = -1;
        this._noMessageBody = false;
        this._remainingContent = -1;
        this._paused = true;
        this._bodyPaused = false;
        this._requestParser = _requestParser;
        this._controller = new async.DartStreamController<_HttpIncoming>({
            sync : true,onListen : () =>  {
                this._paused = false;
            },onPause : () =>  {
                this._paused = true;
                this._pauseStateChanged();
            },onResume : () =>  {
                this._paused = false;
                this._pauseStateChanged();
            },onCancel : () =>  {
                if (this._socketSubscription != null) {
                    this._socketSubscription.cancel();
                }
            }});
        this._reset();
    }
    static _ : new(_requestParser : boolean) => _HttpParser;

    listen(onData : (event : _HttpIncoming) => void,_namedArguments? : {onError? : Function,onDone? : () => void,cancelOnError? : boolean}) : async.DartStreamSubscription<_HttpIncoming> {
        let {onError,onDone,cancelOnError} = Object.assign({
        }, _namedArguments );
        return this._controller.stream.listen(onData,{
            onError : onError,onDone : onDone,cancelOnError : cancelOnError});
    }
    listenToStream(stream : async.DartStream<core.DartList<number>>) : void {
        this._socketSubscription = stream.listen(this._onData.bind(this),{
            onError : this._controller.addError.bind(this._controller),onDone : this._onDone.bind(this)});
    }
    _parse() : void {
        try {
            this._doParse();
        } catch (__error__) {

            {
                let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                this._state = _State.FAILURE;
                this._reportError(e,s);
            }
        }
    }
    _headersEnd() : boolean {
        this._headers._mutable = false;
        this._transferLength = this._headers.contentLength;
        if (this._chunked) this._transferLength = -1;
        if (this._messageType == _MessageType.REQUEST && this._transferLength < 0 && this._chunked == false) {
            this._transferLength = 0;
        }
        if (this._connectionUpgrade) {
            this._state = _State.UPGRADED;
            this._transferLength = 0;
        }
        this._createIncoming(this._transferLength);
        if (this._requestParser) {
            this._incoming.method = new core.DartString.fromCharCodes(this._method).valueOf();
            this._incoming.uri = lib5.Uri.parse(new core.DartString.fromCharCodes(this._uri_or_reason_phrase).valueOf());
        }else {
            this._incoming.statusCode = this._statusCode;
            this._incoming.reasonPhrase = new core.DartString.fromCharCodes(this._uri_or_reason_phrase).valueOf();
        }
        this._method.clear();
        this._uri_or_reason_phrase.clear();
        if (this._connectionUpgrade) {
            this._incoming.upgraded = true;
            this._parserCalled = false;
            let tmp = this._incoming;
            this._closeIncoming();
            this._controller.add(tmp);
            return true;
        }
        if (this._transferLength == 0 || (this._messageType == _MessageType.RESPONSE && this._noMessageBody)) {
            this._reset();
            let tmp = this._incoming;
            this._closeIncoming();
            this._controller.add(tmp);
            return false;
        }else if (this._chunked) {
            this._state = _State.CHUNK_SIZE;
            this._remainingContent = 0;
        }else if (this._transferLength > 0) {
            this._remainingContent = this._transferLength;
            this._state = _State.BODY;
        }else {
            this._state = _State.BODY;
        }
        this._parserCalled = false;
        this._controller.add(this._incoming);
        return true;
    }
    _doParse() : void {
        /* TODO (AssertStatementImpl) : assert (!_parserCalled); */;
        this._parserCalled = true;
        if (this._state == _State.CLOSED) {
            throw new HttpException("Data on closed connection");
        }
        if (this._state == _State.FAILURE) {
            throw new HttpException("Data on failed connection");
        }
        while (this._buffer != null && this._index < this._buffer.length && this._state != _State.FAILURE && this._state != _State.UPGRADED){
            if ((this._incoming != null && this._bodyPaused) || (op(Op.EQUALS,this._incoming,null) && this._paused)) {
                this._parserCalled = false;
                return;
            }
            let byte : number = op(Op.INDEX,this._buffer,this._index++);
            switch (this._state) {
                case _State.START:
                    if (byte == op(Op.INDEX,_Const.HTTP,0)) {
                        this._httpVersionIndex = 1;
                        this._state = _State.METHOD_OR_RESPONSE_HTTP_VERSION;
                    }else {
                        if (!_HttpParser._isTokenChar(byte)) {
                            throw new HttpException("Invalid request method");
                        }
                        this._method.add(byte);
                        if (!this._requestParser) {
                            throw new HttpException("Invalid response line");
                        }
                        this._state = _State.REQUEST_LINE_METHOD;
                    }
                    break;
                case _State.METHOD_OR_RESPONSE_HTTP_VERSION:
                    if (this._httpVersionIndex < _Const.HTTP.length && byte == op(Op.INDEX,_Const.HTTP,this._httpVersionIndex)) {
                        this._httpVersionIndex++;
                    }else if (this._httpVersionIndex == _Const.HTTP.length && byte == _CharCode.SLASH) {
                        this._httpVersionIndex++;
                        if (this._requestParser) {
                            throw new HttpException("Invalid request line");
                        }
                        this._state = _State.RESPONSE_HTTP_VERSION;
                    }else {
                        for(let i : number = 0; i < this._httpVersionIndex; i++){
                            this._method.add(op(Op.INDEX,_Const.HTTP,i));
                        }
                        if (byte == _CharCode.SP) {
                            this._state = _State.REQUEST_LINE_URI;
                        }else {
                            this._method.add(byte);
                            this._httpVersion = _HttpVersion.UNDETERMINED;
                            if (!this._requestParser) {
                                throw new HttpException("Invalid response line");
                            }
                            this._state = _State.REQUEST_LINE_METHOD;
                        }
                    }
                    break;
                case _State.RESPONSE_HTTP_VERSION:
                    if (this._httpVersionIndex < _Const.HTTP1DOT.length) {
                        this._expect(byte,op(Op.INDEX,_Const.HTTP1DOT,this._httpVersionIndex));
                        this._httpVersionIndex++;
                    }else if (this._httpVersionIndex == _Const.HTTP1DOT.length && byte == _CharCode.ONE) {
                        this._httpVersion = _HttpVersion.HTTP11;
                        this._persistentConnection = true;
                        this._httpVersionIndex++;
                    }else if (this._httpVersionIndex == _Const.HTTP1DOT.length && byte == _CharCode.ZERO) {
                        this._httpVersion = _HttpVersion.HTTP10;
                        this._persistentConnection = false;
                        this._httpVersionIndex++;
                    }else if (this._httpVersionIndex == op(Op.PLUS,_Const.HTTP1DOT.length,1)) {
                        this._expect(byte,_CharCode.SP);
                        this._state = _State.RESPONSE_LINE_STATUS_CODE;
                    }else {
                        throw new HttpException("Invalid response line");
                    }
                    break;
                case _State.REQUEST_LINE_METHOD:
                    if (byte == _CharCode.SP) {
                        this._state = _State.REQUEST_LINE_URI;
                    }else {
                        if (op(Op.INDEX,_Const.SEPARATOR_MAP,byte) || byte == _CharCode.CR || byte == _CharCode.LF) {
                            throw new HttpException("Invalid request method");
                        }
                        this._method.add(byte);
                    }
                    break;
                case _State.REQUEST_LINE_URI:
                    if (byte == _CharCode.SP) {
                        if (this._uri_or_reason_phrase.length == 0) {
                            throw new HttpException("Invalid request URI");
                        }
                        this._state = _State.REQUEST_LINE_HTTP_VERSION;
                        this._httpVersionIndex = 0;
                    }else {
                        if (byte == _CharCode.CR || byte == _CharCode.LF) {
                            throw new HttpException("Invalid request URI");
                        }
                        this._uri_or_reason_phrase.add(byte);
                    }
                    break;
                case _State.REQUEST_LINE_HTTP_VERSION:
                    if (this._httpVersionIndex < _Const.HTTP1DOT.length) {
                        this._expect(byte,op(Op.INDEX,_Const.HTTP11,this._httpVersionIndex));
                        this._httpVersionIndex++;
                    }else if (this._httpVersionIndex == _Const.HTTP1DOT.length) {
                        if (byte == _CharCode.ONE) {
                            this._httpVersion = _HttpVersion.HTTP11;
                            this._persistentConnection = true;
                            this._httpVersionIndex++;
                        }else if (byte == _CharCode.ZERO) {
                            this._httpVersion = _HttpVersion.HTTP10;
                            this._persistentConnection = false;
                            this._httpVersionIndex++;
                        }else {
                            throw new HttpException("Invalid response line");
                        }
                    }else {
                        if (byte == _CharCode.CR) {
                            this._state = _State.REQUEST_LINE_ENDING;
                        }else {
                            this._expect(byte,_CharCode.LF);
                            this._messageType = _MessageType.REQUEST;
                            this._state = _State.HEADER_START;
                        }
                    }
                    break;
                case _State.REQUEST_LINE_ENDING:
                    this._expect(byte,_CharCode.LF);
                    this._messageType = _MessageType.REQUEST;
                    this._state = _State.HEADER_START;
                    break;
                case _State.RESPONSE_LINE_STATUS_CODE:
                    if (byte == _CharCode.SP) {
                        this._state = _State.RESPONSE_LINE_REASON_PHRASE;
                    }else if (byte == _CharCode.CR) {
                        this._state = _State.RESPONSE_LINE_ENDING;
                    }else {
                        this._statusCodeLength++;
                        if ((byte < 48 && 57 < byte) || this._statusCodeLength > 3) {
                            throw new HttpException("Invalid response status code");
                        }else {
                            this._statusCode = this._statusCode * 10 + byte - 48;
                        }
                    }
                    break;
                case _State.RESPONSE_LINE_REASON_PHRASE:
                    if (byte == _CharCode.CR) {
                        this._state = _State.RESPONSE_LINE_ENDING;
                    }else {
                        if (byte == _CharCode.CR || byte == _CharCode.LF) {
                            throw new HttpException("Invalid response reason phrase");
                        }
                        this._uri_or_reason_phrase.add(byte);
                    }
                    break;
                case _State.RESPONSE_LINE_ENDING:
                    this._expect(byte,_CharCode.LF);
                    this._messageType == _MessageType.RESPONSE;
                    if (this._statusCode < 100 || this._statusCode > 599) {
                        throw new HttpException("Invalid response status code");
                    }else {
                        if (this._statusCode <= 199 || this._statusCode == 204 || this._statusCode == 304) {
                            this._noMessageBody = true;
                        }
                    }
                    this._state = _State.HEADER_START;
                    break;
                case _State.HEADER_START:
                    this._headers = new _HttpHeaders(this.version);
                    if (byte == _CharCode.CR) {
                        this._state = _State.HEADER_ENDING;
                    }else if (byte == _CharCode.LF) {
                        this._state = _State.HEADER_ENDING;
                        this._index--;
                    }else {
                        this._headerField.add(_HttpParser._toLowerCaseByte(byte));
                        this._state = _State.HEADER_FIELD;
                    }
                    break;
                case _State.HEADER_FIELD:
                    if (byte == _CharCode.COLON) {
                        this._state = _State.HEADER_VALUE_START;
                    }else {
                        if (!_HttpParser._isTokenChar(byte)) {
                            throw new HttpException("Invalid header field name");
                        }
                        this._headerField.add(_HttpParser._toLowerCaseByte(byte));
                    }
                    break;
                case _State.HEADER_VALUE_START:
                    if (byte == _CharCode.CR) {
                        this._state = _State.HEADER_VALUE_FOLDING_OR_ENDING;
                    }else if (byte == _CharCode.LF) {
                        this._state = _State.HEADER_VALUE_FOLD_OR_END;
                    }else if (byte != _CharCode.SP && byte != _CharCode.HT) {
                        this._headerValue.add(byte);
                        this._state = _State.HEADER_VALUE;
                    }
                    break;
                case _State.HEADER_VALUE:
                    if (byte == _CharCode.CR) {
                        this._state = _State.HEADER_VALUE_FOLDING_OR_ENDING;
                    }else if (byte == _CharCode.LF) {
                        this._state = _State.HEADER_VALUE_FOLD_OR_END;
                    }else {
                        this._headerValue.add(byte);
                    }
                    break;
                case _State.HEADER_VALUE_FOLDING_OR_ENDING:
                    this._expect(byte,_CharCode.LF);
                    this._state = _State.HEADER_VALUE_FOLD_OR_END;
                    break;
                case _State.HEADER_VALUE_FOLD_OR_END:
                    if (byte == _CharCode.SP || byte == _CharCode.HT) {
                        this._state = _State.HEADER_VALUE_START;
                    }else {
                        let headerField : string = new core.DartString.fromCharCodes(this._headerField).valueOf();
                        let headerValue : string = new core.DartString.fromCharCodes(this._headerValue).valueOf();
                        if (headerField == "transfer-encoding" && this._caseInsensitiveCompare(new core.DartString("chunked").codeUnits,this._headerValue)) {
                            this._chunked = true;
                        }
                        if (headerField == "connection") {
                            let tokens : core.DartList<string> = _HttpParser._tokenizeFieldValue(headerValue);
                            for(let i : number = 0; i < tokens.length; i++){
                                if (this._caseInsensitiveCompare(new core.DartString("upgrade").codeUnits,new core.DartString(tokens[i]).codeUnits)) {
                                    this._connectionUpgrade = true;
                                }
                                this._headers._add(headerField,tokens[i]);
                            }
                        }else {
                            this._headers._add(headerField,headerValue);
                        }
                        this._headerField.clear();
                        this._headerValue.clear();
                        if (byte == _CharCode.CR) {
                            this._state = _State.HEADER_ENDING;
                        }else if (byte == _CharCode.LF) {
                            this._state = _State.HEADER_ENDING;
                            this._index--;
                        }else {
                            this._headerField.add(_HttpParser._toLowerCaseByte(byte));
                            this._state = _State.HEADER_FIELD;
                        }
                    }
                    break;
                case _State.HEADER_ENDING:
                    this._expect(byte,_CharCode.LF);
                    if (this._headersEnd()) {
                        return;
                    }else {
                        break;
                    }
                    return;
                case _State.CHUNK_SIZE_STARTING_CR:
                    this._expect(byte,_CharCode.CR);
                    this._state = _State.CHUNK_SIZE_STARTING_LF;
                    break;
                case _State.CHUNK_SIZE_STARTING_LF:
                    this._expect(byte,_CharCode.LF);
                    this._state = _State.CHUNK_SIZE;
                    break;
                case _State.CHUNK_SIZE:
                    if (byte == _CharCode.CR) {
                        this._state = _State.CHUNK_SIZE_ENDING;
                    }else if (byte == _CharCode.SEMI_COLON) {
                        this._state = _State.CHUNK_SIZE_EXTENSION;
                    }else {
                        let value : number = this._expectHexDigit(byte);
                        this._remainingContent = this._remainingContent * 16 + value;
                    }
                    break;
                case _State.CHUNK_SIZE_EXTENSION:
                    if (byte == _CharCode.CR) {
                        this._state = _State.CHUNK_SIZE_ENDING;
                    }
                    break;
                case _State.CHUNK_SIZE_ENDING:
                    this._expect(byte,_CharCode.LF);
                    if (this._remainingContent > 0) {
                        this._state = _State.BODY;
                    }else {
                        this._state = _State.CHUNKED_BODY_DONE_CR;
                    }
                    break;
                case _State.CHUNKED_BODY_DONE_CR:
                    this._expect(byte,_CharCode.CR);
                    this._state = _State.CHUNKED_BODY_DONE_LF;
                    break;
                case _State.CHUNKED_BODY_DONE_LF:
                    this._expect(byte,_CharCode.LF);
                    this._reset();
                    this._closeIncoming();
                    break;
                case _State.BODY:
                    this._index--;
                    let dataAvailable : number = this._buffer.length - this._index;
                    if (this._remainingContent >= 0 && dataAvailable > this._remainingContent) {
                        dataAvailable = this._remainingContent;
                    }
                    let data : core.DartList<number> = new typed_data.Uint8List.view(this._buffer.buffer,this._buffer.offsetInBytes + this._index,dataAvailable);
                    this._bodyController.add(data);
                    if (this._remainingContent != -1) {
                        this._remainingContent -= data.length;
                    }
                    this._index += data.length;
                    if (this._remainingContent == 0) {
                        if (!this._chunked) {
                            this._reset();
                            this._closeIncoming();
                        }else {
                            this._state = _State.CHUNK_SIZE_STARTING_CR;
                        }
                    }
                    break;
                case _State.FAILURE:
                    /* TODO (AssertStatementImpl) : assert (false); */;
                    break;
                default:
                    /* TODO (AssertStatementImpl) : assert (false); */;
                    break;
            }
        }
        this._parserCalled = false;
        if (this._buffer != null && this._index == this._buffer.length) {
            this._releaseBuffer();
            if (this._state != _State.UPGRADED && this._state != _State.FAILURE) {
                this._socketSubscription.resume();
            }
        }
    }
    _onData(buffer : core.DartList<number>) : void {
        this._socketSubscription.pause();
        /* TODO (AssertStatementImpl) : assert (_buffer == null); */;
        this._buffer = buffer;
        this._index = 0;
        this._parse();
    }
    _onDone() : void {
        this._socketSubscription = null;
        if (this._state == _State.CLOSED || this._state == _State.FAILURE) return;
        if (this._incoming != null) {
            if (this._state != _State.UPGRADED && !(this._state == _State.START && !this._requestParser) && !(this._state == _State.BODY && !this._chunked && this._transferLength == -1)) {
                this._bodyController.addError(new HttpException("Connection closed while receiving data"));
            }
            this._closeIncoming(true);
            this._controller.close();
            return;
        }
        if (this._state == _State.START) {
            if (!this._requestParser) {
                this._reportError(new HttpException("Connection closed before full header was received"));
            }
            this._controller.close();
            return;
        }
        if (this._state == _State.UPGRADED) {
            this._controller.close();
            return;
        }
        if (this._state < _State.FIRST_BODY_STATE) {
            this._state = _State.FAILURE;
            this._reportError(new HttpException("Connection closed before full header was received"));
            this._controller.close();
            return;
        }
        if (!this._chunked && this._transferLength == -1) {
            this._state = _State.CLOSED;
        }else {
            this._state = _State.FAILURE;
            this._reportError(new HttpException("Connection closed before full body was received"));
        }
        this._controller.close();
    }
    get version() : string {
        switch (this._httpVersion) {
            case _HttpVersion.HTTP10:
                return "1.0";
            case _HttpVersion.HTTP11:
                return "1.1";
        }
        return null;
    }
    get messageType() : number {
        return this._messageType;
    }
    get transferLength() : number {
        return this._transferLength;
    }
    get upgrade() : boolean {
        return this._connectionUpgrade && this._state == _State.UPGRADED;
    }
    get persistentConnection() : boolean {
        return this._persistentConnection;
    }
    set isHead(value : boolean) {
        if (value) this._noMessageBody = true;
    }
    detachIncoming() : _HttpDetachedIncoming {
        this._state = _State.UPGRADED;
        return new _HttpDetachedIncoming(this._socketSubscription,this.readUnparsedData());
    }
    readUnparsedData() : core.DartList<number> {
        if (op(Op.EQUALS,this._buffer,null)) return null;
        if (this._index == this._buffer.length) return null;
        let result = this._buffer.sublist(this._index);
        this._releaseBuffer();
        return result;
    }
    _reset() : void {
        if (this._state == _State.UPGRADED) return;
        this._state = _State.START;
        this._messageType = _MessageType.UNDETERMINED;
        this._headerField.clear();
        this._headerValue.clear();
        this._method.clear();
        this._uri_or_reason_phrase.clear();
        this._statusCode = 0;
        this._statusCodeLength = 0;
        this._httpVersion = _HttpVersion.UNDETERMINED;
        this._transferLength = -1;
        this._persistentConnection = false;
        this._connectionUpgrade = false;
        this._chunked = false;
        this._noMessageBody = false;
        this._remainingContent = -1;
        this._headers = null;
    }
    _releaseBuffer() : void {
        this._buffer = null;
        this._index = null;
    }
    static _isTokenChar(byte : number) : boolean {
        return byte > 31 && byte < 128 && !op(Op.INDEX,_Const.SEPARATOR_MAP,byte);
    }
    static _isValueChar(byte : number) : boolean {
        return (byte > 31 && byte < 128) || (byte == _CharCode.SP) || (byte == _CharCode.HT);
    }
    static _tokenizeFieldValue(headerValue : string) : core.DartList<string> {
        let tokens : core.DartList<string> = new core.DartList<string>();
        let start : number = 0;
        let index : number = 0;
        while (index < new core.DartString(headerValue).length){
            if (headerValue[index] == ",") {
                tokens.add(new core.DartString(headerValue).substring(start,index));
                start = index + 1;
            }else if (headerValue[index] == " " || headerValue[index] == "	") {
                start++;
            }
            index++;
        }
        tokens.add(new core.DartString(headerValue).substring(start,index));
        return tokens;
    }
    static _toLowerCaseByte(x : number) : number {
        return (((x - 65) & 127) < 26) ? (x | 32) : x;
    }
    _caseInsensitiveCompare(expected : core.DartList<number>,value : core.DartList<number>) : boolean {
        if (expected.length != value.length) return false;
        for(let i : number = 0; i < expected.length; i++){
            if (expected[i] != _HttpParser._toLowerCaseByte(value[i])) return false;
        }
        return true;
    }
    _expect(val1 : number,val2 : number) : number {
        if (val1 != val2) {
            throw new HttpException("Failed to parse HTTP");
        }
    }
    _expectHexDigit(byte : number) : number {
        if (48 <= byte && byte <= 57) {
            return byte - 48;
        }else if (65 <= byte && byte <= 70) {
            return byte - 65 + 10;
        }else if (97 <= byte && byte <= 102) {
            return byte - 97 + 10;
        }else {
            throw new HttpException("Failed to parse HTTP");
        }
    }
    _createIncoming(transferLength : number) : void {
        /* TODO (AssertStatementImpl) : assert (_incoming == null); */;
        /* TODO (AssertStatementImpl) : assert (_bodyController == null); */;
        /* TODO (AssertStatementImpl) : assert (!_bodyPaused); */;
        let incoming;
        this._bodyController = new async.DartStreamController<core.DartList<number>>({
            sync : true,onListen : () =>  {
                if (incoming != this._incoming) return;
                /* TODO (AssertStatementImpl) : assert (_bodyPaused); */;
                this._bodyPaused = false;
                this._pauseStateChanged();
            },onPause : () =>  {
                if (incoming != this._incoming) return;
                /* TODO (AssertStatementImpl) : assert (!_bodyPaused); */;
                this._bodyPaused = true;
                this._pauseStateChanged();
            },onResume : () =>  {
                if (incoming != this._incoming) return;
                /* TODO (AssertStatementImpl) : assert (_bodyPaused); */;
                this._bodyPaused = false;
                this._pauseStateChanged();
            },onCancel : () =>  {
                if (incoming != this._incoming) return;
                if (this._socketSubscription != null) {
                    this._socketSubscription.cancel();
                }
                this._closeIncoming(true);
                this._controller.close();
            }});
        incoming = this._incoming = new _HttpIncoming(this._headers,transferLength,this._bodyController.stream);
        this._bodyPaused = true;
        this._pauseStateChanged();
    }
    _closeIncoming(closing? : boolean) : void {
        closing = closing || false;
        if (op(Op.EQUALS,this._incoming,null)) return;
        let tmp = this._incoming;
        tmp.close(closing);
        this._incoming = null;
        if (this._bodyController != null) {
            this._bodyController.close();
            this._bodyController = null;
        }
        this._bodyPaused = false;
        this._pauseStateChanged();
    }
    _pauseStateChanged() : void {
        if (this._incoming != null) {
            if (!this._bodyPaused && !this._parserCalled) {
                this._parse();
            }
        }else {
            if (!this._paused && !this._parserCalled) {
                this._parse();
            }
        }
    }
    _reportError(error : any,stackTrace? : any) : void {
        if (this._socketSubscription != null) this._socketSubscription.cancel();
        this._state = _State.FAILURE;
        this._controller.addError(error,stackTrace);
        this._controller.close();
    }
}

export namespace DetachedSocket {
    export type Constructors = 'DetachedSocket';
    export type Interface = Omit<DetachedSocket, Constructors>;
}
@DartClass
export class DetachedSocket {
    @AbstractProperty
    get socket() : Socket{ throw 'abstract'}
    @AbstractProperty
    get unparsedData() : core.DartList<number>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    DetachedSocket() {
    }
}

export namespace _HttpSession {
    export type Constructors = '_HttpSession';
    export type Interface = Omit<_HttpSession, Constructors>;
}
@DartClass
@Implements(HttpSession)
export class _HttpSession implements HttpSession.Interface {
    _destroyed : boolean;

    _isNew : boolean;

    _lastSeen : core.DartDateTime;

    _timeoutCallback : Function;

    _sessionManager : _HttpSessionManager;

    _prev : _HttpSession;

    _next : _HttpSession;

    id : string;

    _data : core.DartMap<any,any>;

    constructor(_sessionManager : _HttpSessionManager,id : string) {
    }
    @defaultConstructor
    _HttpSession(_sessionManager : _HttpSessionManager,id : string) {
        this._destroyed = false;
        this._isNew = true;
        this._data = new core.DartHashMap<any,any>();
        this._lastSeen = new core.DartDateTime.now();
        this._sessionManager = _sessionManager;
        this.id = id;
    }
    destroy() : void {
        this._destroyed = true;
        this._sessionManager._removeFromTimeoutQueue(this);
        this._sessionManager._sessions.remove(this.id);
    }
    _markSeen() : void {
        this._lastSeen = new core.DartDateTime.now();
        this._sessionManager._bumpToEnd(this);
    }
    get lastSeen() : core.DartDateTime {
        return this._lastSeen;
    }
    get isNew() : boolean {
        return this._isNew;
    }
    set onTimeout(callback : () => void) {
        this._timeoutCallback = callback;
    }
    containsValue(value : any) : boolean {
        return this._data.containsValue(value);
    }
    containsKey(key : any) : boolean {
        return this._data.containsKey(key);
    }
    [OperatorMethods.INDEX](key : any) {
        return this._data.get(key);
    }
    [OperatorMethods.INDEX_EQ](key : any,value : any) : void {
        this._data.set(key,value);
    }
    putIfAbsent(key : any,ifAbsent : any) {
        return this._data.putIfAbsent(key,ifAbsent);
    }
    addAll(other : core.DartMap<any,any>) {
        return this._data.addAll(other);
    }
    remove(key : any) {
        return this._data.remove(key);
    }
    clear() : void {
        this._data.clear();
    }
    forEach(f : (key : any,value : any) => void) : void {
        this._data.forEach(f);
    }
    get keys() : core.DartIterable<any> {
        return this._data.keys;
    }
    get values() : core.DartIterable<any> {
        return this._data.values;
    }
    get length() : number {
        return this._data.length;
    }
    get isEmpty() : boolean {
        return this._data.isEmpty;
    }
    get isNotEmpty() : boolean {
        return this._data.isNotEmpty;
    }
    toString() : string {
        return `HttpSession id:${this.id} ${this._data}`;
    }
}

export namespace _HttpSessionManager {
    export type Constructors = '_HttpSessionManager';
    export type Interface = Omit<_HttpSessionManager, Constructors>;
}
@DartClass
export class _HttpSessionManager {
    _sessions : core.DartMap<string,_HttpSession>;

    _sessionTimeout : number;

    _head : _HttpSession;

    _tail : _HttpSession;

    _timer : async.DartTimer;

    constructor() {
    }
    @defaultConstructor
    _HttpSessionManager() {
        this._sessionTimeout = 20 * 60;
        this._sessions = new core.DartMap.literal([
        ]);
    }
    createSessionId() : string {
        let _KEY_LENGTH : number = 16;
        let data = _IOCrypto.getRandomBytes(_KEY_LENGTH);
        return _CryptoUtils.bytesToHex(data);
    }
    getSession(id : string) : _HttpSession {
        return this._sessions.get(id);
    }
    createSession() : _HttpSession {
        let id = this.createSessionId();
        while (this._sessions.containsKey(id)){
            id = this.createSessionId();
        }
        let session = this._sessions.set(id,new _HttpSession(this,id));
        this._addToTimeoutQueue(session);
        return session;
    }
    set sessionTimeout(timeout : number) {
        this._sessionTimeout = timeout;
        this._stopTimer();
        this._startTimer();
    }
    close() : void {
        this._stopTimer();
    }
    _bumpToEnd(session : _HttpSession) : void {
        this._removeFromTimeoutQueue(session);
        this._addToTimeoutQueue(session);
    }
    _addToTimeoutQueue(session : _HttpSession) : void {
        if (op(Op.EQUALS,this._head,null)) {
            /* TODO (AssertStatementImpl) : assert (_tail == null); */;
            this._tail = this._head = session;
            this._startTimer();
        }else {
            /* TODO (AssertStatementImpl) : assert (_timer != null); */;
            /* TODO (AssertStatementImpl) : assert (_tail != null); */;
            this._tail._next = session;
            session._prev = this._tail;
            this._tail = session;
        }
    }
    _removeFromTimeoutQueue(session : _HttpSession) : void {
        if (session._next != null) {
            session._next._prev = session._prev;
        }
        if (session._prev != null) {
            session._prev._next = session._next;
        }
        if (op(Op.EQUALS,this._head,session)) {
            this._head = session._next;
            this._stopTimer();
            this._startTimer();
        }
        if (op(Op.EQUALS,this._tail,session)) {
            this._tail = session._prev;
        }
        session._next = session._prev = null;
    }
    _timerTimeout() : void {
        this._stopTimer();
        /* TODO (AssertStatementImpl) : assert (_head != null); */;
        let session = this._head;
        session.destroy();
        if (session._timeoutCallback != null) {
            session._timeoutCallback();
        }
    }
    _startTimer() : void {
        /* TODO (AssertStatementImpl) : assert (_timer == null); */;
        if (this._head != null) {
            let seconds : number = new core.DartDateTime.now().difference(this._head.lastSeen).inSeconds;
            this._timer = new async.DartTimer(new core.DartDuration({
                seconds : this._sessionTimeout - seconds}),this._timerTimeout.bind(this));
        }
    }
    _stopTimer() : void {
        if (this._timer != null) {
            this._timer.cancel();
            this._timer = null;
        }
    }
}

export namespace _IOResourceInfo {
    export type Constructors = '_IOResourceInfo';
    export type Interface = Omit<_IOResourceInfo, Constructors>;
}
@DartClass
export class _IOResourceInfo {
    type : string;

    id : number;

    @AbstractProperty
    get name() : string{ throw 'abstract'}
    private static __$_count : number;
    static get _count() : number { 
        if (this.__$_count===undefined) {
            this.__$_count = 0;
        }
        return this.__$_count;
    }
    static set _count(__$value : number)  { 
        this.__$_count = __$value;
    }

    private static __$_sw : core.DartStopwatch;
    static get _sw() : core.DartStopwatch { 
        if (this.__$_sw===undefined) {
            this.__$_sw = ((_) : core.DartStopwatch =>  {
                {
                    _.start();
                    return _;
                }
            })(new core.DartStopwatch());
        }
        return this.__$_sw;
    }
    static set _sw(__$value : core.DartStopwatch)  { 
        this.__$_sw = __$value;
    }

    private static __$_startTime;
    static get _startTime() { 
        if (this.__$_startTime===undefined) {
            this.__$_startTime = new core.DartDateTime.now().millisecondsSinceEpoch;
        }
        return this.__$_startTime;
    }
    static set _startTime(__$value : any)  { 
        this.__$_startTime = __$value;
    }

    static get timestamp() : double {
        return op(Op.PLUS,_IOResourceInfo._startTime,_IOResourceInfo._sw.elapsedMicroseconds / 1000);
    }
    constructor(type : string) {
    }
    @defaultConstructor
    _IOResourceInfo(type : string) {
        this.id = _IOResourceInfo.getNextID();
        this.type = type;
    }
    @AbstractProperty
    get fullValueMap() : core.DartMap<string,any>{ throw 'abstract'}
    get referenceValueMap() : core.DartMap<string,any> {
        return new core.DartMap.literal([
            ['type',`@${this.type}`],
            ['id',this.id],
            ['name',this.name]]);
    }
    static getNextID() : number {
        return _IOResourceInfo._count++;
    }
}

export namespace RawSynchronousSocket {
    export type Constructors = 'RawSynchronousSocket';
    export type Interface = Omit<RawSynchronousSocket, Constructors>;
}
@DartClass
export class RawSynchronousSocket {
    static connectSync(host : any,port : number) : RawSynchronousSocket {
    }
    @Abstract
    available() : number{ throw 'abstract'}
    @Abstract
    closeSync() : void{ throw 'abstract'}
    @Abstract
    readIntoSync(buffer : core.DartList<number>,start? : number,end? : number) : number{ throw 'abstract'}
    @Abstract
    readSync(bytes : number) : core.DartList<number>{ throw 'abstract'}
    @Abstract
    shutdown(direction : SocketDirection) : void{ throw 'abstract'}
    @Abstract
    writeFromSync(buffer : core.DartList<number>,start? : number,end? : number) : void{ throw 'abstract'}
    @AbstractProperty
    get port() : number{ throw 'abstract'}
    @AbstractProperty
    get remotePort() : number{ throw 'abstract'}
    @AbstractProperty
    get address() : InternetAddress{ throw 'abstract'}
    @AbstractProperty
    get remoteAddress() : InternetAddress{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    RawSynchronousSocket() {
    }
}

export namespace _WindowsCodePageDecoderSink {
    export type Constructors = convert.ByteConversionSinkBase.Constructors | '_WindowsCodePageDecoderSink';
    export type Interface = Omit<_WindowsCodePageDecoderSink, Constructors>;
}
@DartClass
export class _WindowsCodePageDecoderSink extends convert.ByteConversionSinkBase {
    _sink : core.DartSink<string>;

    constructor(_sink : core.DartSink<string>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _WindowsCodePageDecoderSink(_sink : core.DartSink<string>) {
        this._sink = _sink;
    }
    close() : void {
        this._sink.close();
    }
    add(bytes : core.DartList<number>) : void {
        this._sink.add(_WindowsCodePageDecoder._decodeBytes(bytes));
    }
}

export namespace _WindowsCodePageDecoder {
    export type Constructors = convert.Converter.Constructors | '_WindowsCodePageDecoder';
    export type Interface = Omit<_WindowsCodePageDecoder, Constructors>;
}
@DartClass
export class _WindowsCodePageDecoder extends convert.Converter<core.DartList<number>,string> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _WindowsCodePageDecoder() {
    }
    convert(input : core.DartList<number>) : string {
        return _WindowsCodePageDecoder._decodeBytes(input);
    }
    startChunkedConversion(sink : core.DartSink<string>) : convert.ByteConversionSink {
        return new _WindowsCodePageDecoderSink(sink);
    }
    static _decodeBytes(bytes : core.DartList<number>) : string {
    }
}

export namespace _WindowsCodePageEncoderSink {
    export type Constructors = convert.StringConversionSinkBase.Constructors | '_WindowsCodePageEncoderSink';
    export type Interface = Omit<_WindowsCodePageEncoderSink, Constructors>;
}
@DartClass
export class _WindowsCodePageEncoderSink extends convert.StringConversionSinkBase {
    _sink : core.DartSink<core.DartList<number>>;

    constructor(_sink : core.DartSink<core.DartList<number>>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _WindowsCodePageEncoderSink(_sink : core.DartSink<core.DartList<number>>) {
        this._sink = _sink;
    }
    close() : void {
        this._sink.close();
    }
    add(string : string) : void {
        let encoded : core.DartList<number> = _WindowsCodePageEncoder._encodeString(string);
        if (encoded == null) {
            throw new core.FormatException("Invalid character for encoding");
        }
        this._sink.add(encoded);
    }
    addSlice(source : string,start : number,end : number,isLast : boolean) : void {
        if (start != 0 || end != new core.DartString(source).length) {
            source = new core.DartString(source).substring(start,end);
        }
        this.add(source);
        if (isLast) this.close();
    }
}

export namespace IOSink {
    export type Constructors = never;
    export type Interface = Omit<IOSink, Constructors>;
}
@DartClass
@Implements(async.DartStreamSink,core.DartStringSink)
export class IOSink implements async.DartStreamSink.Interface<core.DartList<number>>,core.DartStringSink.Interface {
    constructor(target : async.StreamConsumer<core.DartList<number>>,_namedArguments? : {encoding? : convert.Encoding}) {
    }
    @defaultFactory
    static $IOSink(target : async.StreamConsumer<core.DartList<number>>,_namedArguments? : {encoding? : convert.Encoding}) : IOSink {
        let {encoding} = Object.assign({
            "encoding" : convert.properties.UTF8}, _namedArguments );
        return new _IOSinkImpl(target,encoding);
    }
    encoding : convert.Encoding;

    @Abstract
    add(data : core.DartList<number>) : void{ throw 'abstract'}
    @Abstract
    write(obj : core.DartObject) : void{ throw 'abstract'}
    @Abstract
    writeAll(objects : core.DartIterable<any>,separator? : string) : void{ throw 'abstract'}
    @Abstract
    writeln(obj? : core.DartObject) : void{ throw 'abstract'}
    @Abstract
    writeCharCode(charCode : number) : void{ throw 'abstract'}
    @Abstract
    addError(error : any,stackTrace? : core.DartStackTrace) : void{ throw 'abstract'}
    @Abstract
    addStream(stream : async.DartStream<core.DartList<number>>) : async.Future<any>{ throw 'abstract'}
    @Abstract
    flush() : async.Future<any>{ throw 'abstract'}
    @Abstract
    close() : async.Future<any>{ throw 'abstract'}
    @AbstractProperty
    get done() : async.Future<any>{ throw 'abstract'}
}

export namespace _StreamSinkImpl {
    export type Constructors = '_StreamSinkImpl';
    export type Interface<T> = Omit<_StreamSinkImpl<T>, Constructors>;
}
@DartClass
@Implements(async.DartStreamSink)
export class _StreamSinkImpl<T> implements async.DartStreamSink.Interface<T> {
    _target : async.StreamConsumer<T>;

    _doneCompleter : async.DartCompleter<any>;

    _controllerInstance : async.DartStreamController<T>;

    _controllerCompleter : async.DartCompleter<any>;

    _isClosed : boolean;

    _isBound : boolean;

    _hasError : boolean;

    constructor(_target : async.StreamConsumer<T>) {
    }
    @defaultConstructor
    _StreamSinkImpl(_target : async.StreamConsumer<T>) {
        this._doneCompleter = new async.DartCompleter<any>();
        this._isClosed = false;
        this._isBound = false;
        this._hasError = false;
        this._target = _target;
    }
    _reportClosedSink() : void {
        if (op(Op.EQUALS,this,properties.stderr._sink)) {
            throw new core.StateError("Stderr is closed.");
        }
        properties.stderr.writeln("StreamSink is closed and adding to it is an error.");
        properties.stderr.writeln("  See http://dartbug.com/29554.");
        properties.stderr.writeln(core.DartStackTrace.current);
    }
    add(data : T) : void {
        if (this._isClosed) {
            this._reportClosedSink();
            return;
        }
        this._controller.add(data);
    }
    addError(error : any,stackTrace? : core.DartStackTrace) : void {
        if (this._isClosed) {
            this._reportClosedSink();
            return;
        }
        this._controller.addError(error,stackTrace);
    }
    addStream(stream : async.DartStream<T>) : async.Future<any> {
        if (this._isBound) {
            throw new core.StateError("StreamSink is already bound to a stream");
        }
        this._isBound = true;
        if (this._hasError) return this.done;
        var targetAddStream : () => async.Future<any> = () : async.Future<any> =>  {
            return this._target.addStream(stream).whenComplete(() =>  {
                this._isBound = false;
            });
        };
        if (op(Op.EQUALS,this._controllerInstance,null)) return targetAddStream();
        let future = this._controllerCompleter.future;
        this._controllerInstance.close();
        return future.then((_ : any) =>  {
            return targetAddStream();
        });
    }
    flush() : async.Future<any> {
        if (this._isBound) {
            throw new core.StateError("StreamSink is bound to a stream");
        }
        if (op(Op.EQUALS,this._controllerInstance,null)) return new async.Future.value(this);
        this._isBound = true;
        let future = this._controllerCompleter.future;
        this._controllerInstance.close();
        return future.whenComplete(() =>  {
            this._isBound = false;
        });
    }
    close() : async.Future<any> {
        if (this._isBound) {
            throw new core.StateError("StreamSink is bound to a stream");
        }
        if (!this._isClosed) {
            this._isClosed = true;
            if (this._controllerInstance != null) {
                this._controllerInstance.close();
            }else {
                this._closeTarget();
            }
        }
        return this.done;
    }
    _closeTarget() : void {
        this._target.close().then(this._completeDoneValue.bind(this),{
            onError : this._completeDoneError.bind(this)});
    }
    get done() : async.Future<any> {
        return this._doneCompleter.future;
    }
    _completeDoneValue(value : any) : void {
        if (!this._doneCompleter.isCompleted) {
            this._doneCompleter.complete(value);
        }
    }
    _completeDoneError(error : any,stackTrace : core.DartStackTrace) : void {
        if (!this._doneCompleter.isCompleted) {
            this._hasError = true;
            this._doneCompleter.completeError(error,stackTrace);
        }
    }
    get _controller() : async.DartStreamController<T> {
        if (this._isBound) {
            throw new core.StateError("StreamSink is bound to a stream");
        }
        if (this._isClosed) {
            throw new core.StateError("StreamSink is closed");
        }
        if (op(Op.EQUALS,this._controllerInstance,null)) {
            this._controllerInstance = new async.DartStreamController<T>({
                sync : true});
            this._controllerCompleter = new async.DartCompleter<any>();
            this._target.addStream(this._controller.stream).then((_ : any) =>  {
                if (this._isBound) {
                    this._controllerCompleter.complete(this);
                    this._controllerCompleter = null;
                    this._controllerInstance = null;
                }else {
                    this._closeTarget();
                }
            },{
                onError : (error : any,stackTrace : any) =>  {
                    if (this._isBound) {
                        this._controllerCompleter.completeError(error,stackTrace);
                        this._controllerCompleter = null;
                        this._controllerInstance = null;
                    }else {
                        this._completeDoneError(error,stackTrace);
                    }
                }});
        }
        return this._controllerInstance;
    }
}

export namespace _WindowsCodePageEncoder {
    export type Constructors = convert.Converter.Constructors | '_WindowsCodePageEncoder';
    export type Interface = Omit<_WindowsCodePageEncoder, Constructors>;
}
@DartClass
export class _WindowsCodePageEncoder extends convert.Converter<string,core.DartList<number>> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _WindowsCodePageEncoder() {
    }
    convert(input : string) : core.DartList<number> {
        let encoded : core.DartList<number> = _WindowsCodePageEncoder._encodeString(input);
        if (encoded == null) {
            throw new core.FormatException("Invalid character for encoding");
        }
        return encoded;
    }
    startChunkedConversion(sink : core.DartSink<core.DartList<number>>) : convert.StringConversionSink {
        return new _WindowsCodePageEncoderSink(sink);
    }
    static _encodeString(string : string) : core.DartList<number> {
    }
}

export namespace RedirectInfo {
    export type Constructors = 'RedirectInfo';
    export type Interface = Omit<RedirectInfo, Constructors>;
}
@DartClass
export class RedirectInfo {
    @AbstractProperty
    get statusCode() : number{ throw 'abstract'}
    @AbstractProperty
    get method() : string{ throw 'abstract'}
    @AbstractProperty
    get location() : lib5.Uri{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    RedirectInfo() {
    }
}

export namespace HttpConnectionInfo {
    export type Constructors = 'HttpConnectionInfo';
    export type Interface = Omit<HttpConnectionInfo, Constructors>;
}
@DartClass
export class HttpConnectionInfo {
    @AbstractProperty
    get remoteAddress() : InternetAddress{ throw 'abstract'}
    @AbstractProperty
    get remotePort() : number{ throw 'abstract'}
    @AbstractProperty
    get localPort() : number{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    HttpConnectionInfo() {
    }
}

export namespace _WebSocketMessageType {
    export type Constructors = '_WebSocketMessageType';
    export type Interface = Omit<_WebSocketMessageType, Constructors>;
}
@DartClass
export class _WebSocketMessageType {
    private static __$NONE : number;
    static get NONE() : number { 
        if (this.__$NONE===undefined) {
            this.__$NONE = 0;
        }
        return this.__$NONE;
    }

    private static __$TEXT : number;
    static get TEXT() : number { 
        if (this.__$TEXT===undefined) {
            this.__$TEXT = 1;
        }
        return this.__$TEXT;
    }

    private static __$BINARY : number;
    static get BINARY() : number { 
        if (this.__$BINARY===undefined) {
            this.__$BINARY = 2;
        }
        return this.__$BINARY;
    }

    constructor() {
    }
    @defaultConstructor
    _WebSocketMessageType() {
    }
}

export namespace HttpClientCredentials {
    export type Constructors = 'HttpClientCredentials';
    export type Interface = Omit<HttpClientCredentials, Constructors>;
}
@DartClass
export class HttpClientCredentials {
    constructor() {
    }
    @defaultConstructor
    HttpClientCredentials() {
    }
}

export namespace HttpClientResponse {
    export type Constructors = 'HttpClientResponse';
    export type Interface = Omit<HttpClientResponse, Constructors>;
}
@DartClass
@Implements(async.DartStream)
export class HttpClientResponse implements async.DartStream.Interface<core.DartList<number>> {
    @AbstractProperty
    get statusCode() : number{ throw 'abstract'}
    @AbstractProperty
    get reasonPhrase() : string{ throw 'abstract'}
    @AbstractProperty
    get contentLength() : number{ throw 'abstract'}
    @AbstractProperty
    get persistentConnection() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isRedirect() : boolean{ throw 'abstract'}
    @AbstractProperty
    get redirects() : core.DartList<RedirectInfo>{ throw 'abstract'}
    @Abstract
    redirect(method? : string,url? : lib5.Uri,followLoops? : boolean) : async.Future<HttpClientResponse>{ throw 'abstract'}
    @AbstractProperty
    get headers() : HttpHeaders{ throw 'abstract'}
    @Abstract
    detachSocket() : async.Future<Socket>{ throw 'abstract'}
    @AbstractProperty
    get cookies() : core.DartList<Cookie>{ throw 'abstract'}
    @AbstractProperty
    get certificate() : X509Certificate{ throw 'abstract'}
    @AbstractProperty
    get connectionInfo() : HttpConnectionInfo{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    HttpClientResponse() {
    }
}

export namespace HttpClientRequest {
    export type Constructors = 'HttpClientRequest';
    export type Interface = Omit<HttpClientRequest, Constructors>;
}
@DartClass
@Implements(IOSink)
export class HttpClientRequest implements IOSink.Interface {
    persistentConnection : boolean;

    followRedirects : boolean;

    maxRedirects : number;

    @AbstractProperty
    get method() : string{ throw 'abstract'}
    @AbstractProperty
    get uri() : lib5.Uri{ throw 'abstract'}
    contentLength : number;

    bufferOutput : boolean;

    @AbstractProperty
    get headers() : HttpHeaders{ throw 'abstract'}
    @AbstractProperty
    get cookies() : core.DartList<Cookie>{ throw 'abstract'}
    @AbstractProperty
    get done() : async.Future<HttpClientResponse>{ throw 'abstract'}
    @Abstract
    close() : async.Future<HttpClientResponse>{ throw 'abstract'}
    @AbstractProperty
    get connectionInfo() : HttpConnectionInfo{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    HttpClientRequest() {
    }
}

export namespace HttpClient {
    export type Constructors = never;
    export type Interface = Omit<HttpClient, Constructors>;
}
@DartClass
export class HttpClient {
    private static __$DEFAULT_HTTP_PORT : number;
    static get DEFAULT_HTTP_PORT() : number { 
        if (this.__$DEFAULT_HTTP_PORT===undefined) {
            this.__$DEFAULT_HTTP_PORT = 80;
        }
        return this.__$DEFAULT_HTTP_PORT;
    }

    private static __$DEFAULT_HTTPS_PORT : number;
    static get DEFAULT_HTTPS_PORT() : number { 
        if (this.__$DEFAULT_HTTPS_PORT===undefined) {
            this.__$DEFAULT_HTTPS_PORT = 443;
        }
        return this.__$DEFAULT_HTTPS_PORT;
    }

    idleTimeout : core.DartDuration;

    maxConnectionsPerHost : number;

    autoUncompress : boolean;

    userAgent : string;

    constructor(_namedArguments? : {context? : SecurityContext}) {
    }
    @defaultFactory
    static $HttpClient(_namedArguments? : {context? : SecurityContext}) : HttpClient {
        let {context} = Object.assign({
        }, _namedArguments );
        return new _HttpClient(context);
    }
    @Abstract
    open(method : string,host : string,port : number,path : string) : async.Future<HttpClientRequest>{ throw 'abstract'}
    @Abstract
    openUrl(method : string,url : lib5.Uri) : async.Future<HttpClientRequest>{ throw 'abstract'}
    @Abstract
    get(host : string,port : number,path : string) : async.Future<HttpClientRequest>{ throw 'abstract'}
    @Abstract
    getUrl(url : lib5.Uri) : async.Future<HttpClientRequest>{ throw 'abstract'}
    @Abstract
    post(host : string,port : number,path : string) : async.Future<HttpClientRequest>{ throw 'abstract'}
    @Abstract
    postUrl(url : lib5.Uri) : async.Future<HttpClientRequest>{ throw 'abstract'}
    @Abstract
    put(host : string,port : number,path : string) : async.Future<HttpClientRequest>{ throw 'abstract'}
    @Abstract
    putUrl(url : lib5.Uri) : async.Future<HttpClientRequest>{ throw 'abstract'}
    @Abstract
    delete(host : string,port : number,path : string) : async.Future<HttpClientRequest>{ throw 'abstract'}
    @Abstract
    deleteUrl(url : lib5.Uri) : async.Future<HttpClientRequest>{ throw 'abstract'}
    @Abstract
    patch(host : string,port : number,path : string) : async.Future<HttpClientRequest>{ throw 'abstract'}
    @Abstract
    patchUrl(url : lib5.Uri) : async.Future<HttpClientRequest>{ throw 'abstract'}
    @Abstract
    head(host : string,port : number,path : string) : async.Future<HttpClientRequest>{ throw 'abstract'}
    @Abstract
    headUrl(url : lib5.Uri) : async.Future<HttpClientRequest>{ throw 'abstract'}
    set authenticate(f : (url : lib5.Uri,scheme : string,realm : string) => async.Future<boolean>){ throw 'abstract'}
    @Abstract
    addCredentials(url : lib5.Uri,realm : string,credentials : HttpClientCredentials) : void{ throw 'abstract'}
    set findProxy(f : (url : lib5.Uri) => string){ throw 'abstract'}
    static findProxyFromEnvironment(url : lib5.Uri,_namedArguments? : {environment? : core.DartMap<string,string>}) : string {
        let {environment} = Object.assign({
        }, _namedArguments );
        return _HttpClient._findProxyFromEnvironment(url,environment);
    }
    set authenticateProxy(f : (host : string,port : number,scheme : string,realm : string) => async.Future<boolean>){ throw 'abstract'}
    @Abstract
    addProxyCredentials(host : string,port : number,realm : string,credentials : HttpClientCredentials) : void{ throw 'abstract'}
    set badCertificateCallback(callback : (cert : X509Certificate,host : string,port : number) => boolean){ throw 'abstract'}
    @Abstract
    close(_namedArguments? : {force? : boolean}) : void{ throw 'abstract'}
}

export namespace HttpResponse {
    export type Constructors = 'HttpResponse';
    export type Interface = Omit<HttpResponse, Constructors>;
}
@DartClass
@Implements(IOSink)
export class HttpResponse implements IOSink.Interface {
    contentLength : number;

    statusCode : number;

    reasonPhrase : string;

    persistentConnection : boolean;

    deadline : core.DartDuration;

    bufferOutput : boolean;

    @AbstractProperty
    get headers() : HttpHeaders{ throw 'abstract'}
    @AbstractProperty
    get cookies() : core.DartList<Cookie>{ throw 'abstract'}
    @Abstract
    redirect(location : lib5.Uri,_namedArguments? : {status? : number}) : async.Future<any>{ throw 'abstract'}
    @Abstract
    detachSocket(_namedArguments? : {writeHeaders? : boolean}) : async.Future<Socket>{ throw 'abstract'}
    @AbstractProperty
    get connectionInfo() : HttpConnectionInfo{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    HttpResponse() {
    }
}

export namespace HttpRequest {
    export type Constructors = 'HttpRequest';
    export type Interface = Omit<HttpRequest, Constructors>;
}
@DartClass
@Implements(async.DartStream)
export class HttpRequest implements async.DartStream.Interface<core.DartList<number>> {
    @AbstractProperty
    get contentLength() : number{ throw 'abstract'}
    @AbstractProperty
    get method() : string{ throw 'abstract'}
    @AbstractProperty
    get uri() : lib5.Uri{ throw 'abstract'}
    @AbstractProperty
    get requestedUri() : lib5.Uri{ throw 'abstract'}
    @AbstractProperty
    get headers() : HttpHeaders{ throw 'abstract'}
    @AbstractProperty
    get cookies() : core.DartList<Cookie>{ throw 'abstract'}
    @AbstractProperty
    get persistentConnection() : boolean{ throw 'abstract'}
    @AbstractProperty
    get certificate() : X509Certificate{ throw 'abstract'}
    @AbstractProperty
    get session() : HttpSession{ throw 'abstract'}
    @AbstractProperty
    get protocolVersion() : string{ throw 'abstract'}
    @AbstractProperty
    get connectionInfo() : HttpConnectionInfo{ throw 'abstract'}
    @AbstractProperty
    get response() : HttpResponse{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    HttpRequest() {
    }
}

export namespace Cookie {
    export type Constructors = never;
    export type Interface = Omit<Cookie, Constructors>;
}
@DartClass
export class Cookie {
    name : string;

    value : string;

    expires : core.DartDateTime;

    maxAge : number;

    domain : string;

    path : string;

    secure : boolean;

    httpOnly : boolean;

    constructor(name? : string,value? : string) {
    }
    @defaultFactory
    static $Cookie(name? : string,value? : string) : Cookie {
        return new _Cookie(name,value);
    }
    @namedFactory
    static $fromSetCookieValue(value : string) : Cookie {
        return new _Cookie.fromSetCookieValue(value);
    }
    static fromSetCookieValue : new(value : string) => Cookie;

    @Abstract
    toString() : string{ throw 'abstract'}
}

export namespace ContentType {
    export type Constructors = never;
    export type Interface = Omit<ContentType, Constructors>;
}
@DartClass
@Implements(HeaderValue)
export class ContentType implements HeaderValue.Interface {
    private static __$TEXT;
    static get TEXT() { 
        if (this.__$TEXT===undefined) {
            this.__$TEXT = new ContentType("text","plain",{
                charset : "utf-8"});
        }
        return this.__$TEXT;
    }
    static set TEXT(__$value : any)  { 
        this.__$TEXT = __$value;
    }

    private static __$HTML;
    static get HTML() { 
        if (this.__$HTML===undefined) {
            this.__$HTML = new ContentType("text","html",{
                charset : "utf-8"});
        }
        return this.__$HTML;
    }
    static set HTML(__$value : any)  { 
        this.__$HTML = __$value;
    }

    private static __$JSON;
    static get JSON() { 
        if (this.__$JSON===undefined) {
            this.__$JSON = new ContentType("application","json",{
                charset : "utf-8"});
        }
        return this.__$JSON;
    }
    static set JSON(__$value : any)  { 
        this.__$JSON = __$value;
    }

    private static __$BINARY;
    static get BINARY() { 
        if (this.__$BINARY===undefined) {
            this.__$BINARY = new ContentType("application","octet-stream");
        }
        return this.__$BINARY;
    }
    static set BINARY(__$value : any)  { 
        this.__$BINARY = __$value;
    }

    constructor(primaryType : string,subType : string,_namedArguments? : {charset? : string,parameters? : core.DartMap<string,string>}) {
    }
    @defaultFactory
    static $ContentType(primaryType : string,subType : string,_namedArguments? : {charset? : string,parameters? : core.DartMap<string,string>}) : ContentType {
        let {charset,parameters} = Object.assign({
        }, _namedArguments );
        return new _ContentType(primaryType,subType,charset,parameters);
    }
    static parse(value : string) : ContentType {
        return _ContentType.parse(value);
    }
    @AbstractProperty
    get mimeType() : string{ throw 'abstract'}
    @AbstractProperty
    get primaryType() : string{ throw 'abstract'}
    @AbstractProperty
    get subType() : string{ throw 'abstract'}
    @AbstractProperty
    get charset() : string{ throw 'abstract'}
}

export namespace HttpSession {
    export type Constructors = 'HttpSession';
    export type Interface = Omit<HttpSession, Constructors>;
}
@DartClass
@Implements(core.DartMap)
export class HttpSession implements core.DartMap.Interface<any,any> {
    @AbstractProperty
    get id() : string{ throw 'abstract'}
    @Abstract
    destroy() : void{ throw 'abstract'}
    set onTimeout(callback : () => void){ throw 'abstract'}
    @AbstractProperty
    get isNew() : boolean{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    HttpSession() {
    }
}

export namespace HeaderValue {
    export type Constructors = never;
    export type Interface = Omit<HeaderValue, Constructors>;
}
@DartClass
export class HeaderValue {
    constructor(value? : string,parameters? : core.DartMap<string,string>) {
    }
    @defaultFactory
    static $HeaderValue(value? : string,parameters? : core.DartMap<string,string>) : HeaderValue {
        value = value || "";
        return new _HeaderValue(value,parameters);
    }
    static parse(value : string,_namedArguments? : {parameterSeparator? : string,valueSeparator? : string,preserveBackslash? : boolean}) : HeaderValue {
        let {parameterSeparator,valueSeparator,preserveBackslash} = Object.assign({
            "parameterSeparator" : ";",
            "valueSeparator" : null,
            "preserveBackslash" : false}, _namedArguments );
        return _HeaderValue.parse(value,{
            parameterSeparator : parameterSeparator,valueSeparator : valueSeparator,preserveBackslash : preserveBackslash});
    }
    @AbstractProperty
    get value() : string{ throw 'abstract'}
    @AbstractProperty
    get parameters() : core.DartMap<string,string>{ throw 'abstract'}
    @Abstract
    toString() : string{ throw 'abstract'}
}

export namespace HttpHeaders {
    export type Constructors = 'HttpHeaders';
    export type Interface = Omit<HttpHeaders, Constructors>;
}
@DartClass
export class HttpHeaders {
    private static __$ACCEPT;
    static get ACCEPT() { 
        if (this.__$ACCEPT===undefined) {
            this.__$ACCEPT = "accept";
        }
        return this.__$ACCEPT;
    }

    private static __$ACCEPT_CHARSET;
    static get ACCEPT_CHARSET() { 
        if (this.__$ACCEPT_CHARSET===undefined) {
            this.__$ACCEPT_CHARSET = "accept-charset";
        }
        return this.__$ACCEPT_CHARSET;
    }

    private static __$ACCEPT_ENCODING;
    static get ACCEPT_ENCODING() { 
        if (this.__$ACCEPT_ENCODING===undefined) {
            this.__$ACCEPT_ENCODING = "accept-encoding";
        }
        return this.__$ACCEPT_ENCODING;
    }

    private static __$ACCEPT_LANGUAGE;
    static get ACCEPT_LANGUAGE() { 
        if (this.__$ACCEPT_LANGUAGE===undefined) {
            this.__$ACCEPT_LANGUAGE = "accept-language";
        }
        return this.__$ACCEPT_LANGUAGE;
    }

    private static __$ACCEPT_RANGES;
    static get ACCEPT_RANGES() { 
        if (this.__$ACCEPT_RANGES===undefined) {
            this.__$ACCEPT_RANGES = "accept-ranges";
        }
        return this.__$ACCEPT_RANGES;
    }

    private static __$AGE;
    static get AGE() { 
        if (this.__$AGE===undefined) {
            this.__$AGE = "age";
        }
        return this.__$AGE;
    }

    private static __$ALLOW;
    static get ALLOW() { 
        if (this.__$ALLOW===undefined) {
            this.__$ALLOW = "allow";
        }
        return this.__$ALLOW;
    }

    private static __$AUTHORIZATION;
    static get AUTHORIZATION() { 
        if (this.__$AUTHORIZATION===undefined) {
            this.__$AUTHORIZATION = "authorization";
        }
        return this.__$AUTHORIZATION;
    }

    private static __$CACHE_CONTROL;
    static get CACHE_CONTROL() { 
        if (this.__$CACHE_CONTROL===undefined) {
            this.__$CACHE_CONTROL = "cache-control";
        }
        return this.__$CACHE_CONTROL;
    }

    private static __$CONNECTION;
    static get CONNECTION() { 
        if (this.__$CONNECTION===undefined) {
            this.__$CONNECTION = "connection";
        }
        return this.__$CONNECTION;
    }

    private static __$CONTENT_ENCODING;
    static get CONTENT_ENCODING() { 
        if (this.__$CONTENT_ENCODING===undefined) {
            this.__$CONTENT_ENCODING = "content-encoding";
        }
        return this.__$CONTENT_ENCODING;
    }

    private static __$CONTENT_LANGUAGE;
    static get CONTENT_LANGUAGE() { 
        if (this.__$CONTENT_LANGUAGE===undefined) {
            this.__$CONTENT_LANGUAGE = "content-language";
        }
        return this.__$CONTENT_LANGUAGE;
    }

    private static __$CONTENT_LENGTH;
    static get CONTENT_LENGTH() { 
        if (this.__$CONTENT_LENGTH===undefined) {
            this.__$CONTENT_LENGTH = "content-length";
        }
        return this.__$CONTENT_LENGTH;
    }

    private static __$CONTENT_LOCATION;
    static get CONTENT_LOCATION() { 
        if (this.__$CONTENT_LOCATION===undefined) {
            this.__$CONTENT_LOCATION = "content-location";
        }
        return this.__$CONTENT_LOCATION;
    }

    private static __$CONTENT_MD5;
    static get CONTENT_MD5() { 
        if (this.__$CONTENT_MD5===undefined) {
            this.__$CONTENT_MD5 = "content-md5";
        }
        return this.__$CONTENT_MD5;
    }

    private static __$CONTENT_RANGE;
    static get CONTENT_RANGE() { 
        if (this.__$CONTENT_RANGE===undefined) {
            this.__$CONTENT_RANGE = "content-range";
        }
        return this.__$CONTENT_RANGE;
    }

    private static __$CONTENT_TYPE;
    static get CONTENT_TYPE() { 
        if (this.__$CONTENT_TYPE===undefined) {
            this.__$CONTENT_TYPE = "content-type";
        }
        return this.__$CONTENT_TYPE;
    }

    private static __$DATE;
    static get DATE() { 
        if (this.__$DATE===undefined) {
            this.__$DATE = "date";
        }
        return this.__$DATE;
    }

    private static __$ETAG;
    static get ETAG() { 
        if (this.__$ETAG===undefined) {
            this.__$ETAG = "etag";
        }
        return this.__$ETAG;
    }

    private static __$EXPECT;
    static get EXPECT() { 
        if (this.__$EXPECT===undefined) {
            this.__$EXPECT = "expect";
        }
        return this.__$EXPECT;
    }

    private static __$EXPIRES;
    static get EXPIRES() { 
        if (this.__$EXPIRES===undefined) {
            this.__$EXPIRES = "expires";
        }
        return this.__$EXPIRES;
    }

    private static __$FROM;
    static get FROM() { 
        if (this.__$FROM===undefined) {
            this.__$FROM = "from";
        }
        return this.__$FROM;
    }

    private static __$HOST;
    static get HOST() { 
        if (this.__$HOST===undefined) {
            this.__$HOST = "host";
        }
        return this.__$HOST;
    }

    private static __$IF_MATCH;
    static get IF_MATCH() { 
        if (this.__$IF_MATCH===undefined) {
            this.__$IF_MATCH = "if-match";
        }
        return this.__$IF_MATCH;
    }

    private static __$IF_MODIFIED_SINCE;
    static get IF_MODIFIED_SINCE() { 
        if (this.__$IF_MODIFIED_SINCE===undefined) {
            this.__$IF_MODIFIED_SINCE = "if-modified-since";
        }
        return this.__$IF_MODIFIED_SINCE;
    }

    private static __$IF_NONE_MATCH;
    static get IF_NONE_MATCH() { 
        if (this.__$IF_NONE_MATCH===undefined) {
            this.__$IF_NONE_MATCH = "if-none-match";
        }
        return this.__$IF_NONE_MATCH;
    }

    private static __$IF_RANGE;
    static get IF_RANGE() { 
        if (this.__$IF_RANGE===undefined) {
            this.__$IF_RANGE = "if-range";
        }
        return this.__$IF_RANGE;
    }

    private static __$IF_UNMODIFIED_SINCE;
    static get IF_UNMODIFIED_SINCE() { 
        if (this.__$IF_UNMODIFIED_SINCE===undefined) {
            this.__$IF_UNMODIFIED_SINCE = "if-unmodified-since";
        }
        return this.__$IF_UNMODIFIED_SINCE;
    }

    private static __$LAST_MODIFIED;
    static get LAST_MODIFIED() { 
        if (this.__$LAST_MODIFIED===undefined) {
            this.__$LAST_MODIFIED = "last-modified";
        }
        return this.__$LAST_MODIFIED;
    }

    private static __$LOCATION;
    static get LOCATION() { 
        if (this.__$LOCATION===undefined) {
            this.__$LOCATION = "location";
        }
        return this.__$LOCATION;
    }

    private static __$MAX_FORWARDS;
    static get MAX_FORWARDS() { 
        if (this.__$MAX_FORWARDS===undefined) {
            this.__$MAX_FORWARDS = "max-forwards";
        }
        return this.__$MAX_FORWARDS;
    }

    private static __$PRAGMA;
    static get PRAGMA() { 
        if (this.__$PRAGMA===undefined) {
            this.__$PRAGMA = "pragma";
        }
        return this.__$PRAGMA;
    }

    private static __$PROXY_AUTHENTICATE;
    static get PROXY_AUTHENTICATE() { 
        if (this.__$PROXY_AUTHENTICATE===undefined) {
            this.__$PROXY_AUTHENTICATE = "proxy-authenticate";
        }
        return this.__$PROXY_AUTHENTICATE;
    }

    private static __$PROXY_AUTHORIZATION;
    static get PROXY_AUTHORIZATION() { 
        if (this.__$PROXY_AUTHORIZATION===undefined) {
            this.__$PROXY_AUTHORIZATION = "proxy-authorization";
        }
        return this.__$PROXY_AUTHORIZATION;
    }

    private static __$RANGE;
    static get RANGE() { 
        if (this.__$RANGE===undefined) {
            this.__$RANGE = "range";
        }
        return this.__$RANGE;
    }

    private static __$REFERER;
    static get REFERER() { 
        if (this.__$REFERER===undefined) {
            this.__$REFERER = "referer";
        }
        return this.__$REFERER;
    }

    private static __$RETRY_AFTER;
    static get RETRY_AFTER() { 
        if (this.__$RETRY_AFTER===undefined) {
            this.__$RETRY_AFTER = "retry-after";
        }
        return this.__$RETRY_AFTER;
    }

    private static __$SERVER;
    static get SERVER() { 
        if (this.__$SERVER===undefined) {
            this.__$SERVER = "server";
        }
        return this.__$SERVER;
    }

    private static __$TE;
    static get TE() { 
        if (this.__$TE===undefined) {
            this.__$TE = "te";
        }
        return this.__$TE;
    }

    private static __$TRAILER;
    static get TRAILER() { 
        if (this.__$TRAILER===undefined) {
            this.__$TRAILER = "trailer";
        }
        return this.__$TRAILER;
    }

    private static __$TRANSFER_ENCODING;
    static get TRANSFER_ENCODING() { 
        if (this.__$TRANSFER_ENCODING===undefined) {
            this.__$TRANSFER_ENCODING = "transfer-encoding";
        }
        return this.__$TRANSFER_ENCODING;
    }

    private static __$UPGRADE;
    static get UPGRADE() { 
        if (this.__$UPGRADE===undefined) {
            this.__$UPGRADE = "upgrade";
        }
        return this.__$UPGRADE;
    }

    private static __$USER_AGENT;
    static get USER_AGENT() { 
        if (this.__$USER_AGENT===undefined) {
            this.__$USER_AGENT = "user-agent";
        }
        return this.__$USER_AGENT;
    }

    private static __$VARY;
    static get VARY() { 
        if (this.__$VARY===undefined) {
            this.__$VARY = "vary";
        }
        return this.__$VARY;
    }

    private static __$VIA;
    static get VIA() { 
        if (this.__$VIA===undefined) {
            this.__$VIA = "via";
        }
        return this.__$VIA;
    }

    private static __$WARNING;
    static get WARNING() { 
        if (this.__$WARNING===undefined) {
            this.__$WARNING = "warning";
        }
        return this.__$WARNING;
    }

    private static __$WWW_AUTHENTICATE;
    static get WWW_AUTHENTICATE() { 
        if (this.__$WWW_AUTHENTICATE===undefined) {
            this.__$WWW_AUTHENTICATE = "www-authenticate";
        }
        return this.__$WWW_AUTHENTICATE;
    }

    private static __$COOKIE;
    static get COOKIE() { 
        if (this.__$COOKIE===undefined) {
            this.__$COOKIE = "cookie";
        }
        return this.__$COOKIE;
    }

    private static __$SET_COOKIE;
    static get SET_COOKIE() { 
        if (this.__$SET_COOKIE===undefined) {
            this.__$SET_COOKIE = "set-cookie";
        }
        return this.__$SET_COOKIE;
    }

    private static __$GENERAL_HEADERS;
    static get GENERAL_HEADERS() { 
        if (this.__$GENERAL_HEADERS===undefined) {
            this.__$GENERAL_HEADERS = new core.DartList.literal(HttpHeaders.CACHE_CONTROL,HttpHeaders.CONNECTION,HttpHeaders.DATE,HttpHeaders.PRAGMA,HttpHeaders.TRAILER,HttpHeaders.TRANSFER_ENCODING,HttpHeaders.UPGRADE,HttpHeaders.VIA,HttpHeaders.WARNING);
        }
        return this.__$GENERAL_HEADERS;
    }

    private static __$ENTITY_HEADERS;
    static get ENTITY_HEADERS() { 
        if (this.__$ENTITY_HEADERS===undefined) {
            this.__$ENTITY_HEADERS = new core.DartList.literal(HttpHeaders.ALLOW,HttpHeaders.CONTENT_ENCODING,HttpHeaders.CONTENT_LANGUAGE,HttpHeaders.CONTENT_LENGTH,HttpHeaders.CONTENT_LOCATION,HttpHeaders.CONTENT_MD5,HttpHeaders.CONTENT_RANGE,HttpHeaders.CONTENT_TYPE,HttpHeaders.EXPIRES,HttpHeaders.LAST_MODIFIED);
        }
        return this.__$ENTITY_HEADERS;
    }

    private static __$RESPONSE_HEADERS;
    static get RESPONSE_HEADERS() { 
        if (this.__$RESPONSE_HEADERS===undefined) {
            this.__$RESPONSE_HEADERS = new core.DartList.literal(HttpHeaders.ACCEPT_RANGES,HttpHeaders.AGE,HttpHeaders.ETAG,HttpHeaders.LOCATION,HttpHeaders.PROXY_AUTHENTICATE,HttpHeaders.RETRY_AFTER,HttpHeaders.SERVER,HttpHeaders.VARY,HttpHeaders.WWW_AUTHENTICATE);
        }
        return this.__$RESPONSE_HEADERS;
    }

    private static __$REQUEST_HEADERS;
    static get REQUEST_HEADERS() { 
        if (this.__$REQUEST_HEADERS===undefined) {
            this.__$REQUEST_HEADERS = new core.DartList.literal(HttpHeaders.ACCEPT,HttpHeaders.ACCEPT_CHARSET,HttpHeaders.ACCEPT_ENCODING,HttpHeaders.ACCEPT_LANGUAGE,HttpHeaders.AUTHORIZATION,HttpHeaders.EXPECT,HttpHeaders.FROM,HttpHeaders.HOST,HttpHeaders.IF_MATCH,HttpHeaders.IF_MODIFIED_SINCE,HttpHeaders.IF_NONE_MATCH,HttpHeaders.IF_RANGE,HttpHeaders.IF_UNMODIFIED_SINCE,HttpHeaders.MAX_FORWARDS,HttpHeaders.PROXY_AUTHORIZATION,HttpHeaders.RANGE,HttpHeaders.REFERER,HttpHeaders.TE,HttpHeaders.USER_AGENT);
        }
        return this.__$REQUEST_HEADERS;
    }

    date : core.DartDateTime;

    expires : core.DartDateTime;

    ifModifiedSince : core.DartDateTime;

    host : string;

    port : number;

    contentType : ContentType;

    contentLength : number;

    persistentConnection : boolean;

    chunkedTransferEncoding : boolean;

    @Abstract
    [OperatorMethods.INDEX](name : string) : core.DartList<string>{ throw 'abstract'}
    @Abstract
    value(name : string) : string{ throw 'abstract'}
    @Abstract
    add(name : string,value : core.DartObject) : void{ throw 'abstract'}
    @Abstract
    set(name : string,value : core.DartObject) : void{ throw 'abstract'}
    @Abstract
    remove(name : string,value : core.DartObject) : void{ throw 'abstract'}
    @Abstract
    removeAll(name : string) : void{ throw 'abstract'}
    @Abstract
    forEach(f : (name : string,values : core.DartList<string>) => void) : void{ throw 'abstract'}
    @Abstract
    noFolding(name : string) : void{ throw 'abstract'}
    @Abstract
    clear() : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    HttpHeaders() {
    }
}

export namespace HttpConnectionsInfo {
    export type Constructors = 'HttpConnectionsInfo';
    export type Interface = Omit<HttpConnectionsInfo, Constructors>;
}
@DartClass
export class HttpConnectionsInfo {
    total : number;

    active : number;

    idle : number;

    closing : number;

    constructor() {
    }
    @defaultConstructor
    HttpConnectionsInfo() {
        this.total = 0;
        this.active = 0;
        this.idle = 0;
        this.closing = 0;
    }
}

export namespace HttpServer {
    export type Constructors = never;
    export type Interface = Omit<HttpServer, Constructors>;
}
@DartClass
@Implements(async.DartStream)
export class HttpServer implements async.DartStream.Interface<HttpRequest> {
    serverHeader : string;

    @AbstractProperty
    get defaultResponseHeaders() : HttpHeaders{ throw 'abstract'}
    autoCompress : boolean;

    idleTimeout : core.DartDuration;

    static bind(address : any,port : number,_namedArguments? : {backlog? : number,v6Only? : boolean,shared? : boolean}) : async.Future<HttpServer> {
        let {backlog,v6Only,shared} = Object.assign({
            "backlog" : 0,
            "v6Only" : false,
            "shared" : false}, _namedArguments );
        return _HttpServer.bind(address,port,backlog,v6Only,shared);
    }
    static bindSecure(address : any,port : number,context : SecurityContext,_namedArguments? : {backlog? : number,v6Only? : boolean,requestClientCertificate? : boolean,shared? : boolean}) : async.Future<HttpServer> {
        let {backlog,v6Only,requestClientCertificate,shared} = Object.assign({
            "backlog" : 0,
            "v6Only" : false,
            "requestClientCertificate" : false,
            "shared" : false}, _namedArguments );
        return _HttpServer.bindSecure(address,port,context,backlog,v6Only,requestClientCertificate,shared);
    }
    @namedFactory
    static $listenOn(serverSocket : ServerSocket) : HttpServer {
        return new _HttpServer.listenOn(serverSocket);
    }
    static listenOn : new(serverSocket : ServerSocket) => HttpServer;

    @Abstract
    close(_namedArguments? : {force? : boolean}) : async.Future<any>{ throw 'abstract'}
    @AbstractProperty
    get port() : number{ throw 'abstract'}
    @AbstractProperty
    get address() : InternetAddress{ throw 'abstract'}
    set sessionTimeout(timeout : number){ throw 'abstract'}
    @Abstract
    connectionsInfo() : HttpConnectionsInfo{ throw 'abstract'}
}

export namespace HttpStatus {
    export type Constructors = 'HttpStatus';
    export type Interface = Omit<HttpStatus, Constructors>;
}
@DartClass
export class HttpStatus {
    private static __$CONTINUE : number;
    static get CONTINUE() : number { 
        if (this.__$CONTINUE===undefined) {
            this.__$CONTINUE = 100;
        }
        return this.__$CONTINUE;
    }

    private static __$SWITCHING_PROTOCOLS : number;
    static get SWITCHING_PROTOCOLS() : number { 
        if (this.__$SWITCHING_PROTOCOLS===undefined) {
            this.__$SWITCHING_PROTOCOLS = 101;
        }
        return this.__$SWITCHING_PROTOCOLS;
    }

    private static __$OK : number;
    static get OK() : number { 
        if (this.__$OK===undefined) {
            this.__$OK = 200;
        }
        return this.__$OK;
    }

    private static __$CREATED : number;
    static get CREATED() : number { 
        if (this.__$CREATED===undefined) {
            this.__$CREATED = 201;
        }
        return this.__$CREATED;
    }

    private static __$ACCEPTED : number;
    static get ACCEPTED() : number { 
        if (this.__$ACCEPTED===undefined) {
            this.__$ACCEPTED = 202;
        }
        return this.__$ACCEPTED;
    }

    private static __$NON_AUTHORITATIVE_INFORMATION : number;
    static get NON_AUTHORITATIVE_INFORMATION() : number { 
        if (this.__$NON_AUTHORITATIVE_INFORMATION===undefined) {
            this.__$NON_AUTHORITATIVE_INFORMATION = 203;
        }
        return this.__$NON_AUTHORITATIVE_INFORMATION;
    }

    private static __$NO_CONTENT : number;
    static get NO_CONTENT() : number { 
        if (this.__$NO_CONTENT===undefined) {
            this.__$NO_CONTENT = 204;
        }
        return this.__$NO_CONTENT;
    }

    private static __$RESET_CONTENT : number;
    static get RESET_CONTENT() : number { 
        if (this.__$RESET_CONTENT===undefined) {
            this.__$RESET_CONTENT = 205;
        }
        return this.__$RESET_CONTENT;
    }

    private static __$PARTIAL_CONTENT : number;
    static get PARTIAL_CONTENT() : number { 
        if (this.__$PARTIAL_CONTENT===undefined) {
            this.__$PARTIAL_CONTENT = 206;
        }
        return this.__$PARTIAL_CONTENT;
    }

    private static __$MULTIPLE_CHOICES : number;
    static get MULTIPLE_CHOICES() : number { 
        if (this.__$MULTIPLE_CHOICES===undefined) {
            this.__$MULTIPLE_CHOICES = 300;
        }
        return this.__$MULTIPLE_CHOICES;
    }

    private static __$MOVED_PERMANENTLY : number;
    static get MOVED_PERMANENTLY() : number { 
        if (this.__$MOVED_PERMANENTLY===undefined) {
            this.__$MOVED_PERMANENTLY = 301;
        }
        return this.__$MOVED_PERMANENTLY;
    }

    private static __$FOUND : number;
    static get FOUND() : number { 
        if (this.__$FOUND===undefined) {
            this.__$FOUND = 302;
        }
        return this.__$FOUND;
    }

    private static __$MOVED_TEMPORARILY : number;
    static get MOVED_TEMPORARILY() : number { 
        if (this.__$MOVED_TEMPORARILY===undefined) {
            this.__$MOVED_TEMPORARILY = 302;
        }
        return this.__$MOVED_TEMPORARILY;
    }

    private static __$SEE_OTHER : number;
    static get SEE_OTHER() : number { 
        if (this.__$SEE_OTHER===undefined) {
            this.__$SEE_OTHER = 303;
        }
        return this.__$SEE_OTHER;
    }

    private static __$NOT_MODIFIED : number;
    static get NOT_MODIFIED() : number { 
        if (this.__$NOT_MODIFIED===undefined) {
            this.__$NOT_MODIFIED = 304;
        }
        return this.__$NOT_MODIFIED;
    }

    private static __$USE_PROXY : number;
    static get USE_PROXY() : number { 
        if (this.__$USE_PROXY===undefined) {
            this.__$USE_PROXY = 305;
        }
        return this.__$USE_PROXY;
    }

    private static __$TEMPORARY_REDIRECT : number;
    static get TEMPORARY_REDIRECT() : number { 
        if (this.__$TEMPORARY_REDIRECT===undefined) {
            this.__$TEMPORARY_REDIRECT = 307;
        }
        return this.__$TEMPORARY_REDIRECT;
    }

    private static __$BAD_REQUEST : number;
    static get BAD_REQUEST() : number { 
        if (this.__$BAD_REQUEST===undefined) {
            this.__$BAD_REQUEST = 400;
        }
        return this.__$BAD_REQUEST;
    }

    private static __$UNAUTHORIZED : number;
    static get UNAUTHORIZED() : number { 
        if (this.__$UNAUTHORIZED===undefined) {
            this.__$UNAUTHORIZED = 401;
        }
        return this.__$UNAUTHORIZED;
    }

    private static __$PAYMENT_REQUIRED : number;
    static get PAYMENT_REQUIRED() : number { 
        if (this.__$PAYMENT_REQUIRED===undefined) {
            this.__$PAYMENT_REQUIRED = 402;
        }
        return this.__$PAYMENT_REQUIRED;
    }

    private static __$FORBIDDEN : number;
    static get FORBIDDEN() : number { 
        if (this.__$FORBIDDEN===undefined) {
            this.__$FORBIDDEN = 403;
        }
        return this.__$FORBIDDEN;
    }

    private static __$NOT_FOUND : number;
    static get NOT_FOUND() : number { 
        if (this.__$NOT_FOUND===undefined) {
            this.__$NOT_FOUND = 404;
        }
        return this.__$NOT_FOUND;
    }

    private static __$METHOD_NOT_ALLOWED : number;
    static get METHOD_NOT_ALLOWED() : number { 
        if (this.__$METHOD_NOT_ALLOWED===undefined) {
            this.__$METHOD_NOT_ALLOWED = 405;
        }
        return this.__$METHOD_NOT_ALLOWED;
    }

    private static __$NOT_ACCEPTABLE : number;
    static get NOT_ACCEPTABLE() : number { 
        if (this.__$NOT_ACCEPTABLE===undefined) {
            this.__$NOT_ACCEPTABLE = 406;
        }
        return this.__$NOT_ACCEPTABLE;
    }

    private static __$PROXY_AUTHENTICATION_REQUIRED : number;
    static get PROXY_AUTHENTICATION_REQUIRED() : number { 
        if (this.__$PROXY_AUTHENTICATION_REQUIRED===undefined) {
            this.__$PROXY_AUTHENTICATION_REQUIRED = 407;
        }
        return this.__$PROXY_AUTHENTICATION_REQUIRED;
    }

    private static __$REQUEST_TIMEOUT : number;
    static get REQUEST_TIMEOUT() : number { 
        if (this.__$REQUEST_TIMEOUT===undefined) {
            this.__$REQUEST_TIMEOUT = 408;
        }
        return this.__$REQUEST_TIMEOUT;
    }

    private static __$CONFLICT : number;
    static get CONFLICT() : number { 
        if (this.__$CONFLICT===undefined) {
            this.__$CONFLICT = 409;
        }
        return this.__$CONFLICT;
    }

    private static __$GONE : number;
    static get GONE() : number { 
        if (this.__$GONE===undefined) {
            this.__$GONE = 410;
        }
        return this.__$GONE;
    }

    private static __$LENGTH_REQUIRED : number;
    static get LENGTH_REQUIRED() : number { 
        if (this.__$LENGTH_REQUIRED===undefined) {
            this.__$LENGTH_REQUIRED = 411;
        }
        return this.__$LENGTH_REQUIRED;
    }

    private static __$PRECONDITION_FAILED : number;
    static get PRECONDITION_FAILED() : number { 
        if (this.__$PRECONDITION_FAILED===undefined) {
            this.__$PRECONDITION_FAILED = 412;
        }
        return this.__$PRECONDITION_FAILED;
    }

    private static __$REQUEST_ENTITY_TOO_LARGE : number;
    static get REQUEST_ENTITY_TOO_LARGE() : number { 
        if (this.__$REQUEST_ENTITY_TOO_LARGE===undefined) {
            this.__$REQUEST_ENTITY_TOO_LARGE = 413;
        }
        return this.__$REQUEST_ENTITY_TOO_LARGE;
    }

    private static __$REQUEST_URI_TOO_LONG : number;
    static get REQUEST_URI_TOO_LONG() : number { 
        if (this.__$REQUEST_URI_TOO_LONG===undefined) {
            this.__$REQUEST_URI_TOO_LONG = 414;
        }
        return this.__$REQUEST_URI_TOO_LONG;
    }

    private static __$UNSUPPORTED_MEDIA_TYPE : number;
    static get UNSUPPORTED_MEDIA_TYPE() : number { 
        if (this.__$UNSUPPORTED_MEDIA_TYPE===undefined) {
            this.__$UNSUPPORTED_MEDIA_TYPE = 415;
        }
        return this.__$UNSUPPORTED_MEDIA_TYPE;
    }

    private static __$REQUESTED_RANGE_NOT_SATISFIABLE : number;
    static get REQUESTED_RANGE_NOT_SATISFIABLE() : number { 
        if (this.__$REQUESTED_RANGE_NOT_SATISFIABLE===undefined) {
            this.__$REQUESTED_RANGE_NOT_SATISFIABLE = 416;
        }
        return this.__$REQUESTED_RANGE_NOT_SATISFIABLE;
    }

    private static __$EXPECTATION_FAILED : number;
    static get EXPECTATION_FAILED() : number { 
        if (this.__$EXPECTATION_FAILED===undefined) {
            this.__$EXPECTATION_FAILED = 417;
        }
        return this.__$EXPECTATION_FAILED;
    }

    private static __$INTERNAL_SERVER_ERROR : number;
    static get INTERNAL_SERVER_ERROR() : number { 
        if (this.__$INTERNAL_SERVER_ERROR===undefined) {
            this.__$INTERNAL_SERVER_ERROR = 500;
        }
        return this.__$INTERNAL_SERVER_ERROR;
    }

    private static __$NOT_IMPLEMENTED : number;
    static get NOT_IMPLEMENTED() : number { 
        if (this.__$NOT_IMPLEMENTED===undefined) {
            this.__$NOT_IMPLEMENTED = 501;
        }
        return this.__$NOT_IMPLEMENTED;
    }

    private static __$BAD_GATEWAY : number;
    static get BAD_GATEWAY() : number { 
        if (this.__$BAD_GATEWAY===undefined) {
            this.__$BAD_GATEWAY = 502;
        }
        return this.__$BAD_GATEWAY;
    }

    private static __$SERVICE_UNAVAILABLE : number;
    static get SERVICE_UNAVAILABLE() : number { 
        if (this.__$SERVICE_UNAVAILABLE===undefined) {
            this.__$SERVICE_UNAVAILABLE = 503;
        }
        return this.__$SERVICE_UNAVAILABLE;
    }

    private static __$GATEWAY_TIMEOUT : number;
    static get GATEWAY_TIMEOUT() : number { 
        if (this.__$GATEWAY_TIMEOUT===undefined) {
            this.__$GATEWAY_TIMEOUT = 504;
        }
        return this.__$GATEWAY_TIMEOUT;
    }

    private static __$HTTP_VERSION_NOT_SUPPORTED : number;
    static get HTTP_VERSION_NOT_SUPPORTED() : number { 
        if (this.__$HTTP_VERSION_NOT_SUPPORTED===undefined) {
            this.__$HTTP_VERSION_NOT_SUPPORTED = 505;
        }
        return this.__$HTTP_VERSION_NOT_SUPPORTED;
    }

    private static __$NETWORK_CONNECT_TIMEOUT_ERROR : number;
    static get NETWORK_CONNECT_TIMEOUT_ERROR() : number { 
        if (this.__$NETWORK_CONNECT_TIMEOUT_ERROR===undefined) {
            this.__$NETWORK_CONNECT_TIMEOUT_ERROR = 599;
        }
        return this.__$NETWORK_CONNECT_TIMEOUT_ERROR;
    }

    constructor() {
    }
    @defaultConstructor
    HttpStatus() {
    }
}

export namespace _FileSystemWatcher {
    export type Constructors = '_FileSystemWatcher';
    export type Interface = Omit<_FileSystemWatcher, Constructors>;
}
@DartClass
export class _FileSystemWatcher {
    static _watch(path : string,events : number,recursive : boolean) : async.DartStream<FileSystemEvent> {
    }
    static get isSupported() : boolean {
    }
    constructor() {
    }
    @defaultConstructor
    _FileSystemWatcher() {
    }
}

export namespace _WebSocketOpcode {
    export type Constructors = '_WebSocketOpcode';
    export type Interface = Omit<_WebSocketOpcode, Constructors>;
}
@DartClass
export class _WebSocketOpcode {
    private static __$CONTINUATION : number;
    static get CONTINUATION() : number { 
        if (this.__$CONTINUATION===undefined) {
            this.__$CONTINUATION = 0;
        }
        return this.__$CONTINUATION;
    }

    private static __$TEXT : number;
    static get TEXT() : number { 
        if (this.__$TEXT===undefined) {
            this.__$TEXT = 1;
        }
        return this.__$TEXT;
    }

    private static __$BINARY : number;
    static get BINARY() : number { 
        if (this.__$BINARY===undefined) {
            this.__$BINARY = 2;
        }
        return this.__$BINARY;
    }

    private static __$RESERVED_3 : number;
    static get RESERVED_3() : number { 
        if (this.__$RESERVED_3===undefined) {
            this.__$RESERVED_3 = 3;
        }
        return this.__$RESERVED_3;
    }

    private static __$RESERVED_4 : number;
    static get RESERVED_4() : number { 
        if (this.__$RESERVED_4===undefined) {
            this.__$RESERVED_4 = 4;
        }
        return this.__$RESERVED_4;
    }

    private static __$RESERVED_5 : number;
    static get RESERVED_5() : number { 
        if (this.__$RESERVED_5===undefined) {
            this.__$RESERVED_5 = 5;
        }
        return this.__$RESERVED_5;
    }

    private static __$RESERVED_6 : number;
    static get RESERVED_6() : number { 
        if (this.__$RESERVED_6===undefined) {
            this.__$RESERVED_6 = 6;
        }
        return this.__$RESERVED_6;
    }

    private static __$RESERVED_7 : number;
    static get RESERVED_7() : number { 
        if (this.__$RESERVED_7===undefined) {
            this.__$RESERVED_7 = 7;
        }
        return this.__$RESERVED_7;
    }

    private static __$CLOSE : number;
    static get CLOSE() : number { 
        if (this.__$CLOSE===undefined) {
            this.__$CLOSE = 8;
        }
        return this.__$CLOSE;
    }

    private static __$PING : number;
    static get PING() : number { 
        if (this.__$PING===undefined) {
            this.__$PING = 9;
        }
        return this.__$PING;
    }

    private static __$PONG : number;
    static get PONG() : number { 
        if (this.__$PONG===undefined) {
            this.__$PONG = 10;
        }
        return this.__$PONG;
    }

    private static __$RESERVED_B : number;
    static get RESERVED_B() : number { 
        if (this.__$RESERVED_B===undefined) {
            this.__$RESERVED_B = 11;
        }
        return this.__$RESERVED_B;
    }

    private static __$RESERVED_C : number;
    static get RESERVED_C() : number { 
        if (this.__$RESERVED_C===undefined) {
            this.__$RESERVED_C = 12;
        }
        return this.__$RESERVED_C;
    }

    private static __$RESERVED_D : number;
    static get RESERVED_D() : number { 
        if (this.__$RESERVED_D===undefined) {
            this.__$RESERVED_D = 13;
        }
        return this.__$RESERVED_D;
    }

    private static __$RESERVED_E : number;
    static get RESERVED_E() : number { 
        if (this.__$RESERVED_E===undefined) {
            this.__$RESERVED_E = 14;
        }
        return this.__$RESERVED_E;
    }

    private static __$RESERVED_F : number;
    static get RESERVED_F() : number { 
        if (this.__$RESERVED_F===undefined) {
            this.__$RESERVED_F = 15;
        }
        return this.__$RESERVED_F;
    }

    constructor() {
    }
    @defaultConstructor
    _WebSocketOpcode() {
    }
}

export namespace _EncodedString {
    export type Constructors = '_EncodedString';
    export type Interface = Omit<_EncodedString, Constructors>;
}
@DartClass
export class _EncodedString {
    bytes : core.DartList<number>;

    constructor(bytes : core.DartList<number>) {
    }
    @defaultConstructor
    _EncodedString(bytes : core.DartList<number>) {
        this.bytes = bytes;
    }
}

export namespace _CompressionMaxWindowBits {
    export type Constructors = '_CompressionMaxWindowBits';
    export type Interface = Omit<_CompressionMaxWindowBits, Constructors>;
}
@DartClass
export class _CompressionMaxWindowBits {
    headerValue : string;

    maxWindowBits : number;

    constructor(headerValue? : string,maxWindowBits? : number) {
    }
    @defaultConstructor
    _CompressionMaxWindowBits(headerValue? : string,maxWindowBits? : number) {
        this.headerValue = headerValue;
        this.maxWindowBits = maxWindowBits;
    }
    toString() : string {
        return this.headerValue;
    }
}

export namespace _WebSocketProtocolTransformer {
    export type Constructors = '_WebSocketProtocolTransformer';
    export type Interface = Omit<_WebSocketProtocolTransformer, Constructors>;
}
@DartClass
@Implements(async.DartEventSink,async.DartStreamTransformer)
export class _WebSocketProtocolTransformer implements async.DartEventSink.Interface<core.DartList<number>>,async.DartStreamTransformer.Interface<core.DartList<number>,any> {
    private static __$START : number;
    static get START() : number { 
        if (this.__$START===undefined) {
            this.__$START = 0;
        }
        return this.__$START;
    }

    private static __$LEN_FIRST : number;
    static get LEN_FIRST() : number { 
        if (this.__$LEN_FIRST===undefined) {
            this.__$LEN_FIRST = 1;
        }
        return this.__$LEN_FIRST;
    }

    private static __$LEN_REST : number;
    static get LEN_REST() : number { 
        if (this.__$LEN_REST===undefined) {
            this.__$LEN_REST = 2;
        }
        return this.__$LEN_REST;
    }

    private static __$MASK : number;
    static get MASK() : number { 
        if (this.__$MASK===undefined) {
            this.__$MASK = 3;
        }
        return this.__$MASK;
    }

    private static __$PAYLOAD : number;
    static get PAYLOAD() : number { 
        if (this.__$PAYLOAD===undefined) {
            this.__$PAYLOAD = 4;
        }
        return this.__$PAYLOAD;
    }

    private static __$CLOSED : number;
    static get CLOSED() : number { 
        if (this.__$CLOSED===undefined) {
            this.__$CLOSED = 5;
        }
        return this.__$CLOSED;
    }

    private static __$FAILURE : number;
    static get FAILURE() : number { 
        if (this.__$FAILURE===undefined) {
            this.__$FAILURE = 6;
        }
        return this.__$FAILURE;
    }

    private static __$FIN : number;
    static get FIN() : number { 
        if (this.__$FIN===undefined) {
            this.__$FIN = 128;
        }
        return this.__$FIN;
    }

    private static __$RSV1 : number;
    static get RSV1() : number { 
        if (this.__$RSV1===undefined) {
            this.__$RSV1 = 64;
        }
        return this.__$RSV1;
    }

    private static __$RSV2 : number;
    static get RSV2() : number { 
        if (this.__$RSV2===undefined) {
            this.__$RSV2 = 32;
        }
        return this.__$RSV2;
    }

    private static __$RSV3 : number;
    static get RSV3() : number { 
        if (this.__$RSV3===undefined) {
            this.__$RSV3 = 16;
        }
        return this.__$RSV3;
    }

    private static __$OPCODE : number;
    static get OPCODE() : number { 
        if (this.__$OPCODE===undefined) {
            this.__$OPCODE = 15;
        }
        return this.__$OPCODE;
    }

    _state : number;

    _fin : boolean;

    _compressed : boolean;

    _opcode : number;

    _len : number;

    _masked : boolean;

    _remainingLenBytes : number;

    _remainingMaskingKeyBytes : number;

    _remainingPayloadBytes : number;

    _unmaskingIndex : number;

    _currentMessageType : number;

    closeCode : number;

    closeReason : string;

    _eventSink : async.DartEventSink<any>;

    _serverSide : boolean;

    _maskingBytes : core.DartList<any>;

    _payload : BytesBuilder;

    _deflate : _WebSocketPerMessageDeflate;

    constructor(_serverSide? : boolean,_deflate? : _WebSocketPerMessageDeflate) {
    }
    @defaultConstructor
    _WebSocketProtocolTransformer(_serverSide? : boolean,_deflate? : _WebSocketPerMessageDeflate) {
        _serverSide = _serverSide || false;
        this._state = _WebSocketProtocolTransformer.START;
        this._fin = false;
        this._compressed = false;
        this._opcode = -1;
        this._len = -1;
        this._masked = false;
        this._remainingLenBytes = -1;
        this._remainingMaskingKeyBytes = 4;
        this._remainingPayloadBytes = -1;
        this._unmaskingIndex = 0;
        this._currentMessageType = _WebSocketMessageType.NONE;
        this.closeCode = WebSocketStatus.NO_STATUS_RECEIVED;
        this.closeReason = "";
        this._maskingBytes = new core.DartList<any>(4);
        this._payload = new BytesBuilder({
            copy : false});
        this._serverSide = _serverSide;
        this._deflate = _deflate;
    }
    bind(stream : async.DartStream<core.DartList<number>>) : async.DartStream<any> {
        return new async.DartStream.eventTransformed(stream,(eventSink : async.DartEventSink<any>) =>  {
            if (this._eventSink != null) {
                throw new core.StateError("WebSocket transformer already used.");
            }
            this._eventSink = eventSink;
            return this;
        });
    }
    addError(error : core.DartObject,stackTrace? : core.DartStackTrace) : void {
        this._eventSink.addError(error,stackTrace);
    }
    close() : void {
        this._eventSink.close();
    }
    add(bytes : core.DartList<number>) : void {
        let buffer = is(bytes, typed_data.Uint8List) ? bytes : new typed_data.Uint8List.fromList(bytes);
        let index : number = 0;
        let lastIndex : number = buffer.length;
        if (this._state == _WebSocketProtocolTransformer.CLOSED) {
            throw new WebSocketException("Data on closed connection");
        }
        if (this._state == _WebSocketProtocolTransformer.FAILURE) {
            throw new WebSocketException("Data on failed connection");
        }
        while ((index < lastIndex) && this._state != _WebSocketProtocolTransformer.CLOSED && this._state != _WebSocketProtocolTransformer.FAILURE){
            let byte : number = op(Op.INDEX,buffer,index);
            if (this._state <= _WebSocketProtocolTransformer.LEN_REST) {
                if (this._state == _WebSocketProtocolTransformer.START) {
                    this._fin = (byte & _WebSocketProtocolTransformer.FIN) != 0;
                    if ((byte & (_WebSocketProtocolTransformer.RSV2 | _WebSocketProtocolTransformer.RSV3)) != 0) {
                        throw new WebSocketException("Protocol error");
                    }
                    this._opcode = (byte & _WebSocketProtocolTransformer.OPCODE);
                    if (this._opcode != _WebSocketOpcode.CONTINUATION) {
                        if ((byte & _WebSocketProtocolTransformer.RSV1) != 0) {
                            this._compressed = true;
                        }else {
                            this._compressed = false;
                        }
                    }
                    if (this._opcode <= _WebSocketOpcode.BINARY) {
                        if (this._opcode == _WebSocketOpcode.CONTINUATION) {
                            if (this._currentMessageType == _WebSocketMessageType.NONE) {
                                throw new WebSocketException("Protocol error");
                            }
                        }else {
                            /* TODO (AssertStatementImpl) : assert (_opcode == _WebSocketOpcode.TEXT || _opcode == _WebSocketOpcode.BINARY); */;
                            if (this._currentMessageType != _WebSocketMessageType.NONE) {
                                throw new WebSocketException("Protocol error");
                            }
                            this._currentMessageType = this._opcode;
                        }
                    }else if (this._opcode >= _WebSocketOpcode.CLOSE && this._opcode <= _WebSocketOpcode.PONG) {
                        if (!this._fin) throw new WebSocketException("Protocol error");
                    }else {
                        throw new WebSocketException("Protocol error");
                    }
                    this._state = _WebSocketProtocolTransformer.LEN_FIRST;
                }else if (this._state == _WebSocketProtocolTransformer.LEN_FIRST) {
                    this._masked = (byte & 128) != 0;
                    this._len = byte & 127;
                    if (this._isControlFrame() && this._len > 125) {
                        throw new WebSocketException("Protocol error");
                    }
                    if (this._len == 126) {
                        this._len = 0;
                        this._remainingLenBytes = 2;
                        this._state = _WebSocketProtocolTransformer.LEN_REST;
                    }else if (this._len == 127) {
                        this._len = 0;
                        this._remainingLenBytes = 8;
                        this._state = _WebSocketProtocolTransformer.LEN_REST;
                    }else {
                        /* TODO (AssertStatementImpl) : assert (_len < 126); */;
                        this._lengthDone();
                    }
                }else {
                    /* TODO (AssertStatementImpl) : assert (_state == LEN_REST); */;
                    this._len = this._len << 8 | byte;
                    this._remainingLenBytes--;
                    if (this._remainingLenBytes == 0) {
                        this._lengthDone();
                    }
                }
            }else {
                if (this._state == _WebSocketProtocolTransformer.MASK) {
                    this._maskingBytes[4 - this._remainingMaskingKeyBytes--] = byte;
                    if (this._remainingMaskingKeyBytes == 0) {
                        this._maskDone();
                    }
                }else {
                    /* TODO (AssertStatementImpl) : assert (_state == PAYLOAD); */;
                    let payloadLength : number = math.min(lastIndex - index,this._remainingPayloadBytes);
                    this._remainingPayloadBytes -= payloadLength;
                    if (this._masked) {
                        this._unmask(index,payloadLength,buffer);
                    }
                    this._payload.add(new typed_data.Uint8List.view(buffer.buffer,index,payloadLength));
                    index += payloadLength;
                    if (this._isControlFrame()) {
                        if (this._remainingPayloadBytes == 0) this._controlFrameEnd();
                    }else {
                        if (this._currentMessageType != _WebSocketMessageType.TEXT && this._currentMessageType != _WebSocketMessageType.BINARY) {
                            throw new WebSocketException("Protocol error");
                        }
                        if (this._remainingPayloadBytes == 0) this._messageFrameEnd();
                    }
                    index--;
                }
            }
            index++;
        }
    }
    _unmask(index : number,length : number,buffer : typed_data.Uint8List) : void {
        let BLOCK_SIZE : number = 16;
        if (length >= BLOCK_SIZE) {
            let startOffset : number = BLOCK_SIZE - (index & 15);
            let end : number = index + startOffset;
            for(let i : number = index; i < end; i++){
                op(Op.INDEX_ASSIGN,buffer,i,this._maskingBytes[this._unmaskingIndex++ & 3]);
            }
            index += startOffset;
            length -= startOffset;
            let blockCount : number = op(Op.QUOTIENT,length,BLOCK_SIZE);
            if (blockCount > 0) {
                let mask : number = 0;
                for(let i : number = 3; i >= 0; i--){
                    mask = (mask << 8) | this._maskingBytes[(this._unmaskingIndex + i) & 3];
                }
                let blockMask : typed_data.Int32x4 = new typed_data.Int32x4(mask,mask,mask,mask);
                let blockBuffer : typed_data.Int32x4List = new typed_data.Int32x4List.view(buffer.buffer,index,blockCount);
                for(let i : number = 0; i < blockBuffer.length; i++){
                    op(Op.INDEX_ASSIGN,blockBuffer,i,blockMask);
                }
                let bytes : number = blockCount * BLOCK_SIZE;
                index += bytes;
                length -= bytes;
            }
        }
        let end : number = index + length;
        for(let i : number = index; i < end; i++){
            op(Op.INDEX_ASSIGN,buffer,i,this._maskingBytes[this._unmaskingIndex++ & 3]);
        }
    }
    _lengthDone() : void {
        if (this._masked) {
            if (!this._serverSide) {
                throw new WebSocketException("Received masked frame from server");
            }
            this._state = _WebSocketProtocolTransformer.MASK;
        }else {
            if (this._serverSide) {
                throw new WebSocketException("Received unmasked frame from client");
            }
            this._remainingPayloadBytes = this._len;
            this._startPayload();
        }
    }
    _maskDone() : void {
        this._remainingPayloadBytes = this._len;
        this._startPayload();
    }
    _startPayload() : void {
        if (this._remainingPayloadBytes == 0) {
            if (this._isControlFrame()) {
                switch (this._opcode) {
                    case _WebSocketOpcode.CLOSE:
                        this._state = _WebSocketProtocolTransformer.CLOSED;
                        this._eventSink.close();
                        break;
                    case _WebSocketOpcode.PING:
                        this._eventSink.add(new _WebSocketPing());
                        break;
                    case _WebSocketOpcode.PONG:
                        this._eventSink.add(new _WebSocketPong());
                        break;
                }
                this._prepareForNextFrame();
            }else {
                this._messageFrameEnd();
            }
        }else {
            this._state = _WebSocketProtocolTransformer.PAYLOAD;
        }
    }
    _messageFrameEnd() : void {
        if (this._fin) {
            let bytes = this._payload.takeBytes();
            if (this._deflate != null && this._compressed) {
                bytes = this._deflate.processIncomingMessage(bytes);
            }
            switch (this._currentMessageType) {
                case _WebSocketMessageType.TEXT:
                    this._eventSink.add(convert.properties.UTF8.decode(bytes));
                    break;
                case _WebSocketMessageType.BINARY:
                    this._eventSink.add(bytes);
                    break;
            }
            this._currentMessageType = _WebSocketMessageType.NONE;
        }
        this._prepareForNextFrame();
    }
    _controlFrameEnd() : void {
        switch (this._opcode) {
            case _WebSocketOpcode.CLOSE:
                this.closeCode = WebSocketStatus.NO_STATUS_RECEIVED;
                let payload = this._payload.takeBytes();
                if (payload.length > 0) {
                    if (payload.length == 1) {
                        throw new WebSocketException("Protocol error");
                    }
                    this.closeCode = payload[0] << 8 | payload[1];
                    if (this.closeCode == WebSocketStatus.NO_STATUS_RECEIVED) {
                        throw new WebSocketException("Protocol error");
                    }
                    if (payload.length > 2) {
                        this.closeReason = convert.properties.UTF8.decode(payload.sublist(2));
                    }
                }
                this._state = _WebSocketProtocolTransformer.CLOSED;
                this._eventSink.close();
                break;
            case _WebSocketOpcode.PING:
                this._eventSink.add(new _WebSocketPing(this._payload.takeBytes()));
                break;
            case _WebSocketOpcode.PONG:
                this._eventSink.add(new _WebSocketPong(this._payload.takeBytes()));
                break;
        }
        this._prepareForNextFrame();
    }
    _isControlFrame() : boolean {
        return this._opcode == _WebSocketOpcode.CLOSE || this._opcode == _WebSocketOpcode.PING || this._opcode == _WebSocketOpcode.PONG;
    }
    _prepareForNextFrame() : void {
        if (this._state != _WebSocketProtocolTransformer.CLOSED && this._state != _WebSocketProtocolTransformer.FAILURE) this._state = _WebSocketProtocolTransformer.START;
        this._fin = false;
        this._opcode = -1;
        this._len = -1;
        this._remainingLenBytes = -1;
        this._remainingMaskingKeyBytes = 4;
        this._remainingPayloadBytes = -1;
        this._unmaskingIndex = 0;
    }
}

export namespace FileSystemEvent {
    export type Constructors = '_';
    export type Interface = Omit<FileSystemEvent, Constructors>;
}
@DartClass
export class FileSystemEvent {
    private static __$CREATE : number;
    static get CREATE() : number { 
        if (this.__$CREATE===undefined) {
            this.__$CREATE = 1 << 0;
        }
        return this.__$CREATE;
    }

    private static __$MODIFY : number;
    static get MODIFY() : number { 
        if (this.__$MODIFY===undefined) {
            this.__$MODIFY = 1 << 1;
        }
        return this.__$MODIFY;
    }

    private static __$DELETE : number;
    static get DELETE() : number { 
        if (this.__$DELETE===undefined) {
            this.__$DELETE = 1 << 2;
        }
        return this.__$DELETE;
    }

    private static __$MOVE : number;
    static get MOVE() : number { 
        if (this.__$MOVE===undefined) {
            this.__$MOVE = 1 << 3;
        }
        return this.__$MOVE;
    }

    private static __$ALL : number;
    static get ALL() : number { 
        if (this.__$ALL===undefined) {
            this.__$ALL = FileSystemEvent.CREATE | FileSystemEvent.MODIFY | FileSystemEvent.DELETE | FileSystemEvent.MOVE;
        }
        return this.__$ALL;
    }

    private static __$_MODIFY_ATTRIBUTES : number;
    static get _MODIFY_ATTRIBUTES() : number { 
        if (this.__$_MODIFY_ATTRIBUTES===undefined) {
            this.__$_MODIFY_ATTRIBUTES = 1 << 4;
        }
        return this.__$_MODIFY_ATTRIBUTES;
    }

    private static __$_DELETE_SELF : number;
    static get _DELETE_SELF() : number { 
        if (this.__$_DELETE_SELF===undefined) {
            this.__$_DELETE_SELF = 1 << 5;
        }
        return this.__$_DELETE_SELF;
    }

    private static __$_IS_DIR : number;
    static get _IS_DIR() : number { 
        if (this.__$_IS_DIR===undefined) {
            this.__$_IS_DIR = 1 << 6;
        }
        return this.__$_IS_DIR;
    }

    type : number;

    path : string;

    isDirectory : boolean;

    @namedConstructor
    _(type : number,path : string,isDirectory : boolean) {
        this.type = type;
        this.path = path;
        this.isDirectory = isDirectory;
    }
    static _ : new(type : number,path : string,isDirectory : boolean) => FileSystemEvent;

}

export namespace FileSystemEntity {
    export type Constructors = 'FileSystemEntity';
    export type Interface = Omit<FileSystemEntity, Constructors>;
}
@DartClass
export class FileSystemEntity {
    @AbstractProperty
    get path() : string{ throw 'abstract'}
    get uri() : lib5.Uri {
        return new lib5.Uri.file(this.path);
    }
    @Abstract
    exists() : async.Future<boolean>{ throw 'abstract'}
    @Abstract
    existsSync() : boolean{ throw 'abstract'}
    @Abstract
    rename(newPath : string) : async.Future<FileSystemEntity>{ throw 'abstract'}
    @Abstract
    renameSync(newPath : string) : FileSystemEntity{ throw 'abstract'}
    resolveSymbolicLinks() : async.Future<string> {
        return _IOService._dispatch(properties._FILE_RESOLVE_SYMBOLIC_LINKS,new core.DartList.literal(this.path)).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,"Cannot resolve symbolic links",this.path);
            }
            return response;
        });
    }
    resolveSymbolicLinksSync() : string {
        let result = FileSystemEntity._resolveSymbolicLinks(this.path);
        FileSystemEntity._throwIfError(result,"Cannot resolve symbolic links",this.path);
        return result;
    }
    stat() : async.Future<FileStat> {
        return FileStat.stat(this.path);
    }
    statSync() : FileStat {
        return FileStat.statSync(this.path);
    }
    delete(_namedArguments? : {recursive? : boolean}) : async.Future<FileSystemEntity> {
        let {recursive} = Object.assign({
            "recursive" : false}, _namedArguments );
        return this._delete({
            recursive : recursive});
    }
    deleteSync(_namedArguments? : {recursive? : boolean}) : void {
        let {recursive} = Object.assign({
            "recursive" : false}, _namedArguments );
        return this._deleteSync({
            recursive : recursive});
    }
    watch(_namedArguments? : {events? : number,recursive? : boolean}) : async.DartStream<FileSystemEvent> {
        let {events,recursive} = Object.assign({
            "events" : FileSystemEvent.ALL,
            "recursive" : false}, _namedArguments );
        return _FileSystemWatcher._watch(FileSystemEntity._trimTrailingPathSeparators(this.path),events,recursive);
    }
    @Abstract
    _delete(_namedArguments? : {recursive? : boolean}) : async.Future<FileSystemEntity>{ throw 'abstract'}
    @Abstract
    _deleteSync(_namedArguments? : {recursive? : boolean}) : void{ throw 'abstract'}
    static identical(path1 : string,path2 : string) : async.Future<boolean> {
        return _IOService._dispatch(properties._FILE_IDENTICAL,new core.DartList.literal(path1,path2)).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,`Error in FileSystemEntity.identical(${path1}, ${path2})`,"");
            }
            return response;
        });
    }
    private static __$_absoluteWindowsPathPattern : core.DartRegExp;
    static get _absoluteWindowsPathPattern() : core.DartRegExp { 
        if (this.__$_absoluteWindowsPathPattern===undefined) {
            this.__$_absoluteWindowsPathPattern = new core.DartRegExp('^(\\\\|[a-zA-Z]:[/\\])');
        }
        return this.__$_absoluteWindowsPathPattern;
    }
    static set _absoluteWindowsPathPattern(__$value : core.DartRegExp)  { 
        this.__$_absoluteWindowsPathPattern = __$value;
    }

    get isAbsolute() : boolean {
        if (Platform.isWindows) {
            return new core.DartString(this.path).startsWith(FileSystemEntity._absoluteWindowsPathPattern);
        }else {
            return new core.DartString(this.path).startsWith('/');
        }
    }
    @AbstractProperty
    get absolute() : FileSystemEntity{ throw 'abstract'}
    get _absolutePath() : string {
        if (this.isAbsolute) return this.path;
        let current : string = Directory.current.path;
        if (new core.DartString(current).endsWith('/') || (Platform.isWindows && new core.DartString(current).endsWith('\'))) {
            return `${current}${this.path}`;
        }else {
            return `${current}${Platform.pathSeparator}${this.path}`;
        }
    }
    static identicalSync(path1 : string,path2 : string) : boolean {
        let result = FileSystemEntity._identical(path1,path2);
        FileSystemEntity._throwIfError(result,'Error in FileSystemEntity.identicalSync');
        return result;
    }
    static get isWatchSupported() : boolean {
        return _FileSystemWatcher.isSupported;
    }
    static type(path : string,_namedArguments? : {followLinks? : boolean}) : async.Future<FileSystemEntityType> {
        let {followLinks} = Object.assign({
            "followLinks" : true}, _namedArguments );
        return FileSystemEntity._getTypeAsync(path,followLinks).then(FileSystemEntityType._lookup.bind(FileSystemEntityType));
    }
    static typeSync(path : string,_namedArguments? : {followLinks? : boolean}) : FileSystemEntityType {
        let {followLinks} = Object.assign({
            "followLinks" : true}, _namedArguments );
        return FileSystemEntityType._lookup(FileSystemEntity._getTypeSync(path,followLinks));
    }
    static isLink(path : string) : async.Future<boolean> {
        return FileSystemEntity._getTypeAsync(path,false).then((type : any) =>  {
            return (type == FileSystemEntityType.LINK._type);
        });
    }
    static isFile(path : string) : async.Future<boolean> {
        return FileSystemEntity._getTypeAsync(path,true).then((type : any) =>  {
            return (type == FileSystemEntityType.FILE._type);
        });
    }
    static isDirectory(path : string) : async.Future<boolean> {
        return FileSystemEntity._getTypeAsync(path,true).then((type : any) =>  {
            return (type == FileSystemEntityType.DIRECTORY._type);
        });
    }
    static isLinkSync(path : string) : boolean {
        return (FileSystemEntity._getTypeSync(path,false) == FileSystemEntityType.LINK._type);
    }
    static isFileSync(path : string) : boolean {
        return (FileSystemEntity._getTypeSync(path,true) == FileSystemEntityType.FILE._type);
    }
    static isDirectorySync(path : string) : boolean {
        return (FileSystemEntity._getTypeSync(path,true) == FileSystemEntityType.DIRECTORY._type);
    }
    static _getType(path : string,followLinks : boolean) {
    }
    static _identical(path1 : string,path2 : string) {
    }
    static _resolveSymbolicLinks(path : string) {
    }
    private static __$_parentRegExp : core.DartRegExp;
    static get _parentRegExp() : core.DartRegExp { 
        if (this.__$_parentRegExp===undefined) {
            this.__$_parentRegExp = Platform.isWindows ? new core.DartRegExp('[^/\\][/\\]+[^/\\]') : new core.DartRegExp('[^/]/+[^/]');
        }
        return this.__$_parentRegExp;
    }
    static set _parentRegExp(__$value : core.DartRegExp)  { 
        this.__$_parentRegExp = __$value;
    }

    static parentOf(path : string) : string {
        let rootEnd : number = -1;
        if (Platform.isWindows) {
            if (new core.DartString(path).startsWith(FileSystemEntity._absoluteWindowsPathPattern)) {
                rootEnd = new core.DartString(path).indexOf(new core.DartRegExp('[/\\]'),2);
                if (rootEnd == -1) return path;
            }else if (new core.DartString(path).startsWith('\') || new core.DartString(path).startsWith('/')) {
                rootEnd = 0;
            }
        }else if (new core.DartString(path).startsWith('/')) {
            rootEnd = 0;
        }
        let pos : number = new core.DartString(path).lastIndexOf(FileSystemEntity._parentRegExp);
        if (pos > rootEnd) {
            return new core.DartString(path).substring(0,pos + 1);
        }else if (rootEnd > -1) {
            return new core.DartString(path).substring(0,rootEnd + 1);
        }else {
            return '.';
        }
    }
    get parent() : Directory {
        return new Directory(FileSystemEntity.parentOf(this.path));
    }
    static _getTypeSync(path : string,followLinks : boolean) : number {
        let result = FileSystemEntity._getType(path,followLinks);
        FileSystemEntity._throwIfError(result,'Error getting type of FileSystemEntity');
        return result;
    }
    static _getTypeAsync(path : string,followLinks : boolean) : async.Future<number> {
        return _IOService._dispatch(properties._FILE_TYPE,new core.DartList.literal(path,followLinks)).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,"Error getting type",path);
            }
            return response;
        });
    }
    static _throwIfError(result : core.DartObject,msg : string,path? : string) {
        if (is(result, OSError)) {
            throw new FileSystemException(msg,path,result);
        }else if (is(result, core.ArgumentError)) {
            throw result;
        }
    }
    static _trimTrailingPathSeparators(path : string) : string {
        if (isNot(path, "string")) return path;
        if (Platform.isWindows) {
            while (new core.DartString(path).length > 1 && (new core.DartString(path).endsWith(Platform.pathSeparator) || new core.DartString(path).endsWith('/'))){
                path = new core.DartString(path).substring(0,new core.DartString(path).length - 1);
            }
        }else {
            while (new core.DartString(path).length > 1 && new core.DartString(path).endsWith(Platform.pathSeparator)){
                path = new core.DartString(path).substring(0,new core.DartString(path).length - 1);
            }
        }
        return path;
    }
    static _ensureTrailingPathSeparators(path : string) : string {
        if (isNot(path, "string")) return path;
        if (new core.DartString(path).isEmpty) path = '.';
        if (Platform.isWindows) {
            while (!new core.DartString(path).endsWith(Platform.pathSeparator) && !new core.DartString(path).endsWith('/')){
                path = `${path}${Platform.pathSeparator}`;
            }
        }else {
            while (!new core.DartString(path).endsWith(Platform.pathSeparator)){
                path = `${path}${Platform.pathSeparator}`;
            }
        }
        return path;
    }
    constructor() {
    }
    @defaultConstructor
    FileSystemEntity() {
    }
}

export namespace FileStat {
    export type Constructors = '_internal' | '_internalNotFound';
    export type Interface = Omit<FileStat, Constructors>;
}
@DartClass
export class FileStat {
    private static __$_TYPE;
    static get _TYPE() { 
        if (this.__$_TYPE===undefined) {
            this.__$_TYPE = 0;
        }
        return this.__$_TYPE;
    }

    private static __$_CHANGED_TIME;
    static get _CHANGED_TIME() { 
        if (this.__$_CHANGED_TIME===undefined) {
            this.__$_CHANGED_TIME = 1;
        }
        return this.__$_CHANGED_TIME;
    }

    private static __$_MODIFIED_TIME;
    static get _MODIFIED_TIME() { 
        if (this.__$_MODIFIED_TIME===undefined) {
            this.__$_MODIFIED_TIME = 2;
        }
        return this.__$_MODIFIED_TIME;
    }

    private static __$_ACCESSED_TIME;
    static get _ACCESSED_TIME() { 
        if (this.__$_ACCESSED_TIME===undefined) {
            this.__$_ACCESSED_TIME = 3;
        }
        return this.__$_ACCESSED_TIME;
    }

    private static __$_MODE;
    static get _MODE() { 
        if (this.__$_MODE===undefined) {
            this.__$_MODE = 4;
        }
        return this.__$_MODE;
    }

    private static __$_SIZE;
    static get _SIZE() { 
        if (this.__$_SIZE===undefined) {
            this.__$_SIZE = 5;
        }
        return this.__$_SIZE;
    }

    private static __$_notFound;
    static get _notFound() { 
        if (this.__$_notFound===undefined) {
            this.__$_notFound = new FileStat._internalNotFound();
        }
        return this.__$_notFound;
    }

    changed : core.DartDateTime;

    modified : core.DartDateTime;

    accessed : core.DartDateTime;

    type : FileSystemEntityType;

    mode : number;

    size : number;

    @namedConstructor
    _internal(changed : core.DartDateTime,modified : core.DartDateTime,accessed : core.DartDateTime,type : FileSystemEntityType,mode : number,size : number) {
        this.changed = changed;
        this.modified = modified;
        this.accessed = accessed;
        this.type = type;
        this.mode = mode;
        this.size = size;
    }
    static _internal : new(changed : core.DartDateTime,modified : core.DartDateTime,accessed : core.DartDateTime,type : FileSystemEntityType,mode : number,size : number) => FileStat;

    @namedConstructor
    _internalNotFound() {
        this.changed = null;
        this.modified = null;
        this.accessed = null;
        this.type = FileSystemEntityType.NOT_FOUND;
        this.mode = 0;
        this.size = -1;
    }
    static _internalNotFound : new() => FileStat;

    static _statSync(path : string) {
    }
    static statSync(path : string) : FileStat {
        if (Platform.isWindows) {
            path = FileSystemEntity._trimTrailingPathSeparators(path);
        }
        let data = FileStat._statSync(path);
        if (is(data, OSError)) return FileStat._notFound;
        return new FileStat._internal(new core.DartDateTime.fromMillisecondsSinceEpoch(op(Op.INDEX,data,FileStat._CHANGED_TIME)),new core.DartDateTime.fromMillisecondsSinceEpoch(op(Op.INDEX,data,FileStat._MODIFIED_TIME)),new core.DartDateTime.fromMillisecondsSinceEpoch(op(Op.INDEX,data,FileStat._ACCESSED_TIME)),FileSystemEntityType._lookup(op(Op.INDEX,data,FileStat._TYPE)),op(Op.INDEX,data,FileStat._MODE),op(Op.INDEX,data,FileStat._SIZE));
    }
    static stat(path : string) : async.Future<FileStat> {
        if (Platform.isWindows) {
            path = FileSystemEntity._trimTrailingPathSeparators(path);
        }
        return _IOService._dispatch(properties._FILE_STAT,new core.DartList.literal(path)).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                return FileStat._notFound;
            }
            let data : core.DartList<any> = op(Op.INDEX,response,1);
            return new FileStat._internal(new core.DartDateTime.fromMillisecondsSinceEpoch(data[FileStat._CHANGED_TIME]),new core.DartDateTime.fromMillisecondsSinceEpoch(data[FileStat._MODIFIED_TIME]),new core.DartDateTime.fromMillisecondsSinceEpoch(data[FileStat._ACCESSED_TIME]),FileSystemEntityType._lookup(data[FileStat._TYPE]),data[FileStat._MODE],data[FileStat._SIZE]);
        });
    }
    toString() : string {
        return `FileStat: type ${this.type}\n          changed ${this.changed}\n          modified ${this.modified}\n          accessed ${this.accessed}\n          mode ${this.modeString()}\n          size ${this.size}`;
    }
    modeString() : string {
        let permissions = this.mode & 4095;
        let codes = new core.DartList.literal('---','--x','-w-','-wx','r--','r-x','rw-','rwx');
        let result = new core.DartList.literal();
        if ((permissions & 2048) != 0) result.add("(suid) ");
        if ((permissions & 1024) != 0) result.add("(guid) ");
        if ((permissions & 512) != 0) result.add("(sticky) ");
        ((_) : core.DartList<any> =>  {
            {
                _.add(codes[(permissions >> 6) & 7]);
                _.add(codes[(permissions >> 3) & 7]);
                _.add(codes[permissions & 7]);
                return _;
            }
        })(result);
        return result.join();
    }
}

export namespace FileSystemEntityType {
    export type Constructors = '_internal';
    export type Interface = Omit<FileSystemEntityType, Constructors>;
}
@DartClass
export class FileSystemEntityType {
    private static __$FILE;
    static get FILE() { 
        if (this.__$FILE===undefined) {
            this.__$FILE = new FileSystemEntityType._internal(0);
        }
        return this.__$FILE;
    }

    private static __$DIRECTORY;
    static get DIRECTORY() { 
        if (this.__$DIRECTORY===undefined) {
            this.__$DIRECTORY = new FileSystemEntityType._internal(1);
        }
        return this.__$DIRECTORY;
    }

    private static __$LINK;
    static get LINK() { 
        if (this.__$LINK===undefined) {
            this.__$LINK = new FileSystemEntityType._internal(2);
        }
        return this.__$LINK;
    }

    private static __$NOT_FOUND;
    static get NOT_FOUND() { 
        if (this.__$NOT_FOUND===undefined) {
            this.__$NOT_FOUND = new FileSystemEntityType._internal(3);
        }
        return this.__$NOT_FOUND;
    }

    private static __$_typeList;
    static get _typeList() { 
        if (this.__$_typeList===undefined) {
            this.__$_typeList = new core.DartList.literal(FileSystemEntityType.FILE,FileSystemEntityType.DIRECTORY,FileSystemEntityType.LINK,FileSystemEntityType.NOT_FOUND);
        }
        return this.__$_typeList;
    }

    _type : number;

    @namedConstructor
    _internal(_type : number) {
        this._type = _type;
    }
    static _internal : new(_type : number) => FileSystemEntityType;

    static _lookup(type : number) : FileSystemEntityType {
        return op(Op.INDEX,FileSystemEntityType._typeList,type);
    }
    toString() : string {
        return new core.DartList.literal('FILE','DIRECTORY','LINK','NOT_FOUND')[this._type];
    }
}

export namespace _RandomAccessFile {
    export type Constructors = '_RandomAccessFile';
    export type Interface = Omit<_RandomAccessFile, Constructors>;
}
@DartClass
@Implements(RandomAccessFile)
export class _RandomAccessFile implements RandomAccessFile.Interface {
    private static __$_connectedResourceHandler : boolean;
    static get _connectedResourceHandler() : boolean { 
        if (this.__$_connectedResourceHandler===undefined) {
            this.__$_connectedResourceHandler = false;
        }
        return this.__$_connectedResourceHandler;
    }
    static set _connectedResourceHandler(__$value : boolean)  { 
        this.__$_connectedResourceHandler = __$value;
    }

    path : string;

    _asyncDispatched : boolean;

    _fileService : isolate.SendPort;

    _resourceInfo : _FileResourceInfo;

    _ops : _RandomAccessFileOps;

    constructor(pointer : number,path : string) {
    }
    @defaultConstructor
    _RandomAccessFile(pointer : number,path : string) {
        this._asyncDispatched = false;
        this.closed = false;
        this.path = path;
        this._ops = new _RandomAccessFileOps(pointer);
        this._resourceInfo = new _FileResourceInfo(this);
        this._maybeConnectHandler();
    }
    _maybePerformCleanup() : void {
        if (this.closed) {
            _FileResourceInfo.FileClosed(this._resourceInfo);
        }
    }
    _maybeConnectHandler() {
        if (!_RandomAccessFile._connectedResourceHandler) {
            developer.registerExtension('ext.dart.io.getOpenFiles',_FileResourceInfo.getOpenFiles.bind(_FileResourceInfo));
            developer.registerExtension('ext.dart.io.getFileByID',_FileResourceInfo.getFileInfoMapByID.bind(_FileResourceInfo));
            _RandomAccessFile._connectedResourceHandler = true;
        }
    }
    close() : async.Future<RandomAccessFile> {
        return this._dispatch(properties._FILE_CLOSE,new core.DartList.literal(null),{
            markClosed : true}).then((result : any) =>  {
            if (result != -1) {
                this.closed = this.closed || (op(Op.EQUALS,result,0));
                this._maybePerformCleanup();
                return this;
            }else {
                throw new FileSystemException("Cannot close file",this.path);
            }
        });
    }
    closeSync() : void {
        this._checkAvailable();
        let id = this._ops.close();
        if (id == -1) {
            throw new FileSystemException("Cannot close file",this.path);
        }
        this.closed = this.closed || (id == 0);
        this._maybePerformCleanup();
    }
    readByte() : async.Future<number> {
        return this._dispatch(properties._FILE_READ_BYTE,new core.DartList.literal(null)).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,"readByte failed",this.path);
            }
            this._resourceInfo.addRead(1);
            return response;
        });
    }
    readByteSync() : number {
        this._checkAvailable();
        let result = this._ops.readByte();
        if (is(result, OSError)) {
            throw new FileSystemException("readByte failed",this.path,result);
        }
        this._resourceInfo.addRead(1);
        return result;
    }
    read(bytes : number) : async.Future<core.DartList<number>> {
        if (isNot(bytes, "number")) {
            throw new core.ArgumentError(bytes);
        }
        return this._dispatch(properties._FILE_READ,new core.DartList.literal(null,bytes)).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,"read failed",this.path);
            }
            this._resourceInfo.addRead(op(Op.INDEX,response,1).length);
            return op(Op.INDEX,response,1) as core.DartObject;
        });
    }
    readSync(bytes : number) : core.DartList<number> {
        this._checkAvailable();
        if (isNot(bytes, "number")) {
            throw new core.ArgumentError(bytes);
        }
        let result = this._ops.read(bytes);
        if (is(result, OSError)) {
            throw new FileSystemException("readSync failed",this.path,result);
        }
        this._resourceInfo.addRead(result.length);
        return result as core.DartObject;
    }
    readInto(buffer : core.DartList<number>,start? : number,end? : number) : async.Future<number> {
        start = start || 0;
        if ((isNot(buffer, core.DartList<any>)) || ((start != null) && (isNot(start, "number"))) || ((end != null) && (isNot(end, "number")))) {
            throw new core.ArgumentError();
        }
        end = core.RangeError.checkValidRange(start,end,buffer.length);
        if (end == start) {
            return new async.Future.value(0);
        }
        let length : number = end - start;
        return this._dispatch(properties._FILE_READ_INTO,new core.DartList.literal(null,length)).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,"readInto failed",this.path);
            }
            let read = op(Op.INDEX,response,1);
            let data = op(Op.INDEX,response,2) as core.DartObject;
            buffer.setRange(start,start + read,data);
            this._resourceInfo.addRead(read);
            return read;
        });
    }
    readIntoSync(buffer : core.DartList<number>,start? : number,end? : number) : number {
        start = start || 0;
        this._checkAvailable();
        if ((isNot(buffer, core.DartList<any>)) || ((start != null) && (isNot(start, "number"))) || ((end != null) && (isNot(end, "number")))) {
            throw new core.ArgumentError();
        }
        end = core.RangeError.checkValidRange(start,end,buffer.length);
        if (end == start) {
            return 0;
        }
        let result = this._ops.readInto(buffer,start,end);
        if (is(result, OSError)) {
            throw new FileSystemException("readInto failed",this.path,result);
        }
        this._resourceInfo.addRead(result);
        return result;
    }
    writeByte(value : number) : async.Future<RandomAccessFile> {
        if (isNot(value, "number")) {
            throw new core.ArgumentError(value);
        }
        return this._dispatch(properties._FILE_WRITE_BYTE,new core.DartList.literal(null,value)).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,"writeByte failed",this.path);
            }
            this._resourceInfo.addWrite(1);
            return this;
        });
    }
    writeByteSync(value : number) : number {
        this._checkAvailable();
        if (isNot(value, "number")) {
            throw new core.ArgumentError(value);
        }
        let result = this._ops.writeByte(value);
        if (is(result, OSError)) {
            throw new FileSystemException("writeByte failed",this.path,result);
        }
        this._resourceInfo.addWrite(1);
        return result;
    }
    writeFrom(buffer : core.DartList<number>,start? : number,end? : number) : async.Future<RandomAccessFile> {
        start = start || 0;
        if ((isNot(buffer, core.DartList<any>)) || ((start != null) && (isNot(start, "number"))) || ((end != null) && (isNot(end, "number")))) {
            throw new core.ArgumentError("Invalid arguments to writeFrom");
        }
        end = core.RangeError.checkValidRange(start,end,buffer.length);
        if (end == start) {
            return new async.Future.value(this);
        }
        let result : _BufferAndStart;
        try {
            result = _ensureFastAndSerializableByteData(buffer,start,end);
        } catch (__error__) {

            {
                let e = __error__;
                return new async.Future.error(e);
            }
        }
        let request : core.DartList<any> = new core.DartList<any>(4);
        request[0] = null;
        request[1] = result.buffer;
        request[2] = result.start;
        request[3] = end - (start - result.start);
        return this._dispatch(properties._FILE_WRITE_FROM,request).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,"writeFrom failed",this.path);
            }
            this._resourceInfo.addWrite(end - (start - result.start));
            return this;
        });
    }
    writeFromSync(buffer : core.DartList<number>,start? : number,end? : number) : void {
        start = start || 0;
        this._checkAvailable();
        if ((isNot(buffer, core.DartList<any>)) || ((start != null) && (isNot(start, "number"))) || ((end != null) && (isNot(end, "number")))) {
            throw new core.ArgumentError("Invalid arguments to writeFromSync");
        }
        end = core.RangeError.checkValidRange(start,end,buffer.length);
        if (end == start) {
            return;
        }
        let bufferAndStart : _BufferAndStart = _ensureFastAndSerializableByteData(buffer,start,end);
        let result = this._ops.writeFrom(bufferAndStart.buffer,bufferAndStart.start,end - (start - bufferAndStart.start));
        if (is(result, OSError)) {
            throw new FileSystemException("writeFrom failed",this.path,result);
        }
        this._resourceInfo.addWrite(end - (start - bufferAndStart.start));
    }
    writeString(string : string,_namedArguments? : {encoding? : convert.Encoding}) : async.Future<RandomAccessFile> {
        let {encoding} = Object.assign({
            "encoding" : convert.properties.UTF8}, _namedArguments );
        if (isNot(encoding, convert.Encoding)) {
            throw new core.ArgumentError(encoding);
        }
        let data = encoding.encode(string);
        return this.writeFrom(data,0,data.length);
    }
    writeStringSync(string : string,_namedArguments? : {encoding? : convert.Encoding}) : void {
        let {encoding} = Object.assign({
            "encoding" : convert.properties.UTF8}, _namedArguments );
        if (isNot(encoding, convert.Encoding)) {
            throw new core.ArgumentError(encoding);
        }
        let data = encoding.encode(string);
        this.writeFromSync(data,0,data.length);
    }
    position() : async.Future<number> {
        return this._dispatch(properties._FILE_POSITION,new core.DartList.literal(null)).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,"position failed",this.path);
            }
            return response;
        });
    }
    positionSync() : number {
        this._checkAvailable();
        let result = this._ops.position();
        if (is(result, OSError)) {
            throw new FileSystemException("position failed",this.path,result);
        }
        return result;
    }
    setPosition(position : number) : async.Future<RandomAccessFile> {
        return this._dispatch(properties._FILE_SET_POSITION,new core.DartList.literal(null,position)).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,"setPosition failed",this.path);
            }
            return this;
        });
    }
    setPositionSync(position : number) : void {
        this._checkAvailable();
        let result = this._ops.setPosition(position);
        if (is(result, OSError)) {
            throw new FileSystemException("setPosition failed",this.path,result);
        }
    }
    truncate(length : number) : async.Future<RandomAccessFile> {
        return this._dispatch(properties._FILE_TRUNCATE,new core.DartList.literal(null,length)).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,"truncate failed",this.path);
            }
            return this;
        });
    }
    truncateSync(length : number) : void {
        this._checkAvailable();
        let result = this._ops.truncate(length);
        if (is(result, OSError)) {
            throw new FileSystemException("truncate failed",this.path,result);
        }
    }
    length() : async.Future<number> {
        return this._dispatch(properties._FILE_LENGTH,new core.DartList.literal(null)).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,"length failed",this.path);
            }
            return response;
        });
    }
    lengthSync() : number {
        this._checkAvailable();
        let result = this._ops.length();
        if (is(result, OSError)) {
            throw new FileSystemException("length failed",this.path,result);
        }
        return result;
    }
    flush() : async.Future<RandomAccessFile> {
        return this._dispatch(properties._FILE_FLUSH,new core.DartList.literal(null)).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,"flush failed",this.path);
            }
            return this;
        });
    }
    flushSync() : void {
        this._checkAvailable();
        let result = this._ops.flush();
        if (is(result, OSError)) {
            throw new FileSystemException("flush failed",this.path,result);
        }
    }
    private static __$LOCK_UNLOCK : number;
    static get LOCK_UNLOCK() : number { 
        if (this.__$LOCK_UNLOCK===undefined) {
            this.__$LOCK_UNLOCK = 0;
        }
        return this.__$LOCK_UNLOCK;
    }
    static set LOCK_UNLOCK(__$value : number)  { 
        this.__$LOCK_UNLOCK = __$value;
    }

    private static __$LOCK_SHARED : number;
    static get LOCK_SHARED() : number { 
        if (this.__$LOCK_SHARED===undefined) {
            this.__$LOCK_SHARED = 1;
        }
        return this.__$LOCK_SHARED;
    }
    static set LOCK_SHARED(__$value : number)  { 
        this.__$LOCK_SHARED = __$value;
    }

    private static __$LOCK_EXCLUSIVE : number;
    static get LOCK_EXCLUSIVE() : number { 
        if (this.__$LOCK_EXCLUSIVE===undefined) {
            this.__$LOCK_EXCLUSIVE = 2;
        }
        return this.__$LOCK_EXCLUSIVE;
    }
    static set LOCK_EXCLUSIVE(__$value : number)  { 
        this.__$LOCK_EXCLUSIVE = __$value;
    }

    private static __$LOCK_BLOCKING_SHARED : number;
    static get LOCK_BLOCKING_SHARED() : number { 
        if (this.__$LOCK_BLOCKING_SHARED===undefined) {
            this.__$LOCK_BLOCKING_SHARED = 3;
        }
        return this.__$LOCK_BLOCKING_SHARED;
    }
    static set LOCK_BLOCKING_SHARED(__$value : number)  { 
        this.__$LOCK_BLOCKING_SHARED = __$value;
    }

    private static __$LOCK_BLOCKING_EXCLUSIVE : number;
    static get LOCK_BLOCKING_EXCLUSIVE() : number { 
        if (this.__$LOCK_BLOCKING_EXCLUSIVE===undefined) {
            this.__$LOCK_BLOCKING_EXCLUSIVE = 4;
        }
        return this.__$LOCK_BLOCKING_EXCLUSIVE;
    }
    static set LOCK_BLOCKING_EXCLUSIVE(__$value : number)  { 
        this.__$LOCK_BLOCKING_EXCLUSIVE = __$value;
    }

    _fileLockValue(fl : FileLock) : number {
        switch (fl) {
            case FileLock.SHARED:
                return _RandomAccessFile.LOCK_SHARED;
            case FileLock.EXCLUSIVE:
                return _RandomAccessFile.LOCK_EXCLUSIVE;
            case FileLock.BLOCKING_SHARED:
                return _RandomAccessFile.LOCK_BLOCKING_SHARED;
            case FileLock.BLOCKING_EXCLUSIVE:
                return _RandomAccessFile.LOCK_BLOCKING_EXCLUSIVE;
            default:
                return -1;
        }
    }
    lock(mode? : FileLock,start? : number,end? : number) : async.Future<RandomAccessFile> {
        mode = mode || FileLock.EXCLUSIVE;
        start = start || 0;
        end = end || -1;
        if ((isNot(mode, FileLock)) || (isNot(start, "number")) || (isNot(end, "number"))) {
            throw new core.ArgumentError();
        }
        if ((start < 0) || (end < -1) || ((end != -1) && (start >= end))) {
            throw new core.ArgumentError();
        }
        let lock : number = this._fileLockValue(mode);
        return this._dispatch(properties._FILE_LOCK,new core.DartList.literal(null,lock,start,end)).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,'lock failed',this.path);
            }
            return this;
        });
    }
    unlock(start? : number,end? : number) : async.Future<RandomAccessFile> {
        start = start || 0;
        end = end || -1;
        if ((isNot(start, "number")) || (isNot(end, "number"))) {
            throw new core.ArgumentError();
        }
        if (start == end) {
            throw new core.ArgumentError();
        }
        return this._dispatch(properties._FILE_LOCK,new core.DartList.literal(null,_RandomAccessFile.LOCK_UNLOCK,start,end)).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,'unlock failed',this.path);
            }
            return this;
        });
    }
    lockSync(mode? : FileLock,start? : number,end? : number) : void {
        mode = mode || FileLock.EXCLUSIVE;
        start = start || 0;
        end = end || -1;
        this._checkAvailable();
        if ((isNot(mode, FileLock)) || (isNot(start, "number")) || (isNot(end, "number"))) {
            throw new core.ArgumentError();
        }
        if ((start < 0) || (end < -1) || ((end != -1) && (start >= end))) {
            throw new core.ArgumentError();
        }
        let lock : number = this._fileLockValue(mode);
        let result = this._ops.lock(lock,start,end);
        if (is(result, OSError)) {
            throw new FileSystemException('lock failed',this.path,result);
        }
    }
    unlockSync(start? : number,end? : number) : void {
        start = start || 0;
        end = end || -1;
        this._checkAvailable();
        if ((isNot(start, "number")) || (isNot(end, "number"))) {
            throw new core.ArgumentError();
        }
        if (start == end) {
            throw new core.ArgumentError();
        }
        let result = this._ops.lock(_RandomAccessFile.LOCK_UNLOCK,start,end);
        if (is(result, OSError)) {
            throw new FileSystemException('unlock failed',this.path,result);
        }
    }
    closed : boolean;

    _pointer() : number {
        return this._ops.getPointer();
    }
    _dispatch(request : number,data : core.DartList<any>,_namedArguments? : {markClosed? : boolean}) : async.Future<any> {
        let {markClosed} = Object.assign({
            "markClosed" : false}, _namedArguments );
        if (this.closed) {
            return new async.Future.error(new FileSystemException("File closed",this.path));
        }
        if (this._asyncDispatched) {
            let msg = "An async operation is currently pending";
            return new async.Future.error(new FileSystemException(msg,this.path));
        }
        if (markClosed) {
            this.closed = true;
        }
        this._asyncDispatched = true;
        data[0] = this._pointer();
        return _IOService._dispatch(request,data).whenComplete(() =>  {
            this._asyncDispatched = false;
        });
    }
    _checkAvailable() : void {
        if (this._asyncDispatched) {
            throw new FileSystemException("An async operation is currently pending",this.path);
        }
        if (this.closed) {
            throw new FileSystemException("File closed",this.path);
        }
    }
}

export namespace _RandomAccessFileOps {
    export type Constructors = never;
    export type Interface = Omit<_RandomAccessFileOps, Constructors>;
}
@DartClass
export class _RandomAccessFileOps {
    constructor(pointer : number) {
    }
    @defaultFactory
    static $_RandomAccessFileOps(pointer : number) : _RandomAccessFileOps {
    }
    @Abstract
    getPointer() : number{ throw 'abstract'}
    @Abstract
    close() : number{ throw 'abstract'}
    @Abstract
    readByte(){ throw 'abstract'}
    @Abstract
    read(bytes : number){ throw 'abstract'}
    @Abstract
    readInto(buffer : core.DartList<number>,start : number,end : number){ throw 'abstract'}
    @Abstract
    writeByte(value : number){ throw 'abstract'}
    @Abstract
    writeFrom(buffer : core.DartList<number>,start : number,end : number){ throw 'abstract'}
    @Abstract
    position(){ throw 'abstract'}
    @Abstract
    setPosition(position : number){ throw 'abstract'}
    @Abstract
    truncate(length : number){ throw 'abstract'}
    @Abstract
    length(){ throw 'abstract'}
    @Abstract
    flush(){ throw 'abstract'}
    @Abstract
    lock(lock : number,start : number,end : number){ throw 'abstract'}
}

export namespace _WebSocketPing {
    export type Constructors = '_WebSocketPing';
    export type Interface = Omit<_WebSocketPing, Constructors>;
}
@DartClass
export class _WebSocketPing {
    payload : core.DartList<number>;

    constructor(payload? : core.DartList<number>) {
    }
    @defaultConstructor
    _WebSocketPing(payload? : core.DartList<number>) {
        payload = payload || null;
        this.payload = payload;
    }
}

export namespace _FileStreamConsumer {
    export type Constructors = async.StreamConsumer.Constructors | '_FileStreamConsumer' | 'fromStdio';
    export type Interface = Omit<_FileStreamConsumer, Constructors>;
}
@DartClass
export class _FileStreamConsumer extends async.StreamConsumer<core.DartList<number>> {
    _file : File;

    _openFuture : async.Future<RandomAccessFile>;

    constructor(_file : File,mode : FileMode) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _FileStreamConsumer(_file : File,mode : FileMode) {
        this._file = _file;
        this._openFuture = this._file.open({
            mode : mode});
    }
    @namedConstructor
    fromStdio(fd : number) {
        /* TODO (AssertStatementImpl) : assert (1 <= fd && fd <= 2); */;
        this._openFuture = new async.Future.value(_File._openStdioSync(fd));
    }
    static fromStdio : new(fd : number) => _FileStreamConsumer;

    addStream(stream : async.DartStream<core.DartList<number>>) : async.Future<File> {
        let completer : async.DartCompleter<File> = new async.DartCompleter.sync();
        this._openFuture.then((openedFile : any) =>  {
            let _subscription;
            var error : (e : any,stackTrace? : core.DartStackTrace) => void = (e : any,stackTrace? : core.DartStackTrace) : void =>  {
                _subscription.cancel();
                openedFile.close();
                completer.completeError(e,stackTrace);
            };
            _subscription = stream.listen((d : any) =>  {
                _subscription.pause();
                try {
                    openedFile.writeFrom(d,0,d.length).then((_ : any) =>  {
                        return _subscription.resume();
                    },{
                        onError : error});
                } catch (__error__) {

                    {
                        let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let e = __error__;
                        error(e,stackTrace);
                    }
                }
            },{
                onDone : () =>  {
                    completer.complete(this._file);
                },onError : error,cancelOnError : true});
        }).catchError(completer.completeError.bind(completer));
        return completer.future;
    }
    close() : async.Future<File> {
        return this._openFuture.then((openedFile : any) =>  {
            return openedFile.close();
        }).then((_ : any) =>  {
            return this._file;
        });
    }
}

export namespace _FileStream {
    export type Constructors = async.DartStream.Constructors | '_FileStream' | 'forStdin';
    export type Interface = Omit<_FileStream, Constructors>;
}
@DartClass
export class _FileStream extends async.DartStream<core.DartList<number>> {
    _controller : async.DartStreamController<core.DartList<number>>;

    _path : string;

    _openedFile : RandomAccessFile;

    _position : number;

    _end : number;

    _closeCompleter : async.DartCompleter<any>;

    _unsubscribed : boolean;

    _readInProgress : boolean;

    _closed : boolean;

    _atEnd : boolean;

    constructor(_path : string,_position : number,_end : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _FileStream(_path : string,_position : number,_end : number) {
        this._closeCompleter = new async.DartCompleter<any>();
        this._unsubscribed = false;
        this._readInProgress = true;
        this._closed = false;
        this._atEnd = false;
        this._path = _path;
        this._position = _position;
        this._end = _end;
        if (this._position == null) this._position = 0;
    }
    @namedConstructor
    forStdin() {
        this._closeCompleter = new async.DartCompleter<any>();
        this._unsubscribed = false;
        this._readInProgress = true;
        this._closed = false;
        this._atEnd = false;
        this._position = 0;
    }
    static forStdin : new() => _FileStream;

    listen(onData : (event : core.DartList<number>) => void,_namedArguments? : {onError? : Function,onDone? : () => void,cancelOnError? : boolean}) : async.DartStreamSubscription<core.DartList<number>> {
        let {onError,onDone,cancelOnError} = Object.assign({
        }, _namedArguments );
        this._setupController();
        return this._controller.stream.listen(onData,{
            onError : onError,onDone : onDone,cancelOnError : cancelOnError});
    }
    _setupController() : void {
        this._controller = new async.DartStreamController<core.DartList<number>>({
            sync : true,onListen : this._start.bind(this),onResume : this._readBlock.bind(this),onCancel : () =>  {
                this._unsubscribed = true;
                return this._closeFile();
            }});
    }
    _closeFile() : async.Future<any> {
        if (this._readInProgress || this._closed) {
            return this._closeCompleter.future;
        }
        this._closed = true;
        var done : () => void = () : void =>  {
            this._closeCompleter.complete();
            this._controller.close();
        };
        this._openedFile.close().catchError(this._controller.addError.bind(this._controller)).whenComplete(done);
        return this._closeCompleter.future;
    }
    _readBlock() : void {
        if (this._readInProgress) return;
        if (this._atEnd) {
            this._closeFile();
            return;
        }
        this._readInProgress = true;
        let readBytes : number = properties._BLOCK_SIZE;
        if (this._end != null) {
            readBytes = math.min(readBytes,this._end - this._position);
            if (readBytes < 0) {
                this._readInProgress = false;
                if (!this._unsubscribed) {
                    this._controller.addError(new core.RangeError(`Bad end position: ${this._end}`));
                    this._closeFile();
                    this._unsubscribed = true;
                }
                return;
            }
        }
        this._openedFile.read(readBytes).then((block : any) =>  {
            this._readInProgress = false;
            if (this._unsubscribed) {
                this._closeFile();
                return;
            }
            this._position += block.length;
            if (block.length < readBytes || (this._end != null && this._position == this._end)) {
                this._atEnd = true;
            }
            if (!this._atEnd && !this._controller.isPaused) {
                this._readBlock();
            }
            this._controller.add(block);
            if (this._atEnd) {
                this._closeFile();
            }
        }).catchError((e : any,s : any) =>  {
            if (!this._unsubscribed) {
                this._controller.addError(e,s);
                this._closeFile();
                this._unsubscribed = true;
            }
        });
    }
    _start() : void {
        if (this._position < 0) {
            this._controller.addError(new core.RangeError(`Bad start position: ${this._position}`));
            this._controller.close();
            this._closeCompleter.complete();
            return;
        }
        var onReady : (file : RandomAccessFile) => void = (file : RandomAccessFile) : void =>  {
            this._openedFile = file;
            this._readInProgress = false;
            this._readBlock();
        };
        var onOpenFile : (file : RandomAccessFile) => void = (file : RandomAccessFile) : void =>  {
            if (this._position > 0) {
                file.setPosition(this._position).then(onReady,{
                    onError : (e : any,s : any) =>  {
                        this._controller.addError(e,s);
                        this._readInProgress = false;
                        this._closeFile();
                    }});
            }else {
                onReady(file);
            }
        };
        var openFailed : (error : any,stackTrace : any) => void = (error : any,stackTrace : any) : void =>  {
            this._controller.addError(error,stackTrace);
            this._controller.close();
            this._closeCompleter.complete();
        };
        if (this._path != null) {
            new File(this._path).open({
                mode : FileMode.READ}).then(onOpenFile,{
                onError : openFailed});
        }else {
            try {
                onOpenFile(_File._openStdioSync(0));
            } catch (__error__) {

                {
                    let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let e = __error__;
                    openFailed(e,s);
                }
            }
        }
    }
}

export namespace FileSystemException {
    export type Constructors = 'FileSystemException';
    export type Interface = Omit<FileSystemException, Constructors>;
}
@DartClass
@Implements(IOException)
export class FileSystemException implements IOException.Interface {
    message : string;

    path : string;

    osError : OSError;

    constructor(message? : string,path? : string,osError? : OSError) {
    }
    @defaultConstructor
    FileSystemException(message? : string,path? : string,osError? : OSError) {
        message = message || "";
        path = path || "";
        this.message = message;
        this.path = path;
        this.osError = osError;
    }
    toString() : string {
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        sb.write("FileSystemException");
        if (!new core.DartString(this.message).isEmpty) {
            sb.write(`: ${this.message}`);
            if (this.path != null) {
                sb.write(`, path = '${this.path}'`);
            }
            if (this.osError != null) {
                sb.write(` (${this.osError})`);
            }
        }else if (this.osError != null) {
            sb.write(`: ${this.osError}`);
            if (this.path != null) {
                sb.write(`, path = '${this.path}'`);
            }
        }else if (this.path != null) {
            sb.write(`: ${this.path}`);
        }
        return sb.toString();
    }
}

export namespace RandomAccessFile {
    export type Constructors = 'RandomAccessFile';
    export type Interface = Omit<RandomAccessFile, Constructors>;
}
@DartClass
export class RandomAccessFile {
    @Abstract
    close() : async.Future<RandomAccessFile>{ throw 'abstract'}
    @Abstract
    closeSync() : void{ throw 'abstract'}
    @Abstract
    readByte() : async.Future<number>{ throw 'abstract'}
    @Abstract
    readByteSync() : number{ throw 'abstract'}
    @Abstract
    read(bytes : number) : async.Future<core.DartList<number>>{ throw 'abstract'}
    @Abstract
    readSync(bytes : number) : core.DartList<number>{ throw 'abstract'}
    @Abstract
    readInto(buffer : core.DartList<number>,start? : number,end? : number) : async.Future<number>{ throw 'abstract'}
    @Abstract
    readIntoSync(buffer : core.DartList<number>,start? : number,end? : number) : number{ throw 'abstract'}
    @Abstract
    writeByte(value : number) : async.Future<RandomAccessFile>{ throw 'abstract'}
    @Abstract
    writeByteSync(value : number) : number{ throw 'abstract'}
    @Abstract
    writeFrom(buffer : core.DartList<number>,start? : number,end? : number) : async.Future<RandomAccessFile>{ throw 'abstract'}
    @Abstract
    writeFromSync(buffer : core.DartList<number>,start? : number,end? : number) : void{ throw 'abstract'}
    @Abstract
    writeString(string : string,_namedArguments? : {encoding? : convert.Encoding}) : async.Future<RandomAccessFile>{ throw 'abstract'}
    @Abstract
    writeStringSync(string : string,_namedArguments? : {encoding? : convert.Encoding}) : void{ throw 'abstract'}
    @Abstract
    position() : async.Future<number>{ throw 'abstract'}
    @Abstract
    positionSync() : number{ throw 'abstract'}
    @Abstract
    setPosition(position : number) : async.Future<RandomAccessFile>{ throw 'abstract'}
    @Abstract
    setPositionSync(position : number) : void{ throw 'abstract'}
    @Abstract
    truncate(length : number) : async.Future<RandomAccessFile>{ throw 'abstract'}
    @Abstract
    truncateSync(length : number) : void{ throw 'abstract'}
    @Abstract
    length() : async.Future<number>{ throw 'abstract'}
    @Abstract
    lengthSync() : number{ throw 'abstract'}
    @Abstract
    flush() : async.Future<RandomAccessFile>{ throw 'abstract'}
    @Abstract
    flushSync() : void{ throw 'abstract'}
    @Abstract
    lock(mode? : FileLock,start? : number,end? : number) : async.Future<RandomAccessFile>{ throw 'abstract'}
    @Abstract
    lockSync(mode? : FileLock,start? : number,end? : number) : void{ throw 'abstract'}
    @Abstract
    unlock(start? : number,end? : number) : async.Future<RandomAccessFile>{ throw 'abstract'}
    @Abstract
    unlockSync(start? : number,end? : number) : void{ throw 'abstract'}
    @Abstract
    toString() : string{ throw 'abstract'}
    @AbstractProperty
    get path() : string{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    RandomAccessFile() {
    }
}

export namespace File {
    export type Constructors = never;
    export type Interface = Omit<File, Constructors>;
}
@DartClass
@Implements(FileSystemEntity)
export class File implements FileSystemEntity.Interface {
    constructor(path : string) {
    }
    @defaultFactory
    static $File(path : string) : File {
        return new _File(path);
    }
    @namedFactory
    static $fromUri(uri : lib5.Uri) : File {
        return new File(uri.toFilePath());
    }
    static fromUri : new(uri : lib5.Uri) => File;

    @Abstract
    create(_namedArguments? : {recursive? : boolean}) : async.Future<File>{ throw 'abstract'}
    @Abstract
    createSync(_namedArguments? : {recursive? : boolean}) : void{ throw 'abstract'}
    @Abstract
    rename(newPath : string) : async.Future<File>{ throw 'abstract'}
    @Abstract
    renameSync(newPath : string) : File{ throw 'abstract'}
    @Abstract
    copy(newPath : string) : async.Future<File>{ throw 'abstract'}
    @Abstract
    copySync(newPath : string) : File{ throw 'abstract'}
    @Abstract
    length() : async.Future<number>{ throw 'abstract'}
    @Abstract
    lengthSync() : number{ throw 'abstract'}
    @AbstractProperty
    get absolute() : File{ throw 'abstract'}
    @Abstract
    lastAccessed() : async.Future<core.DartDateTime>{ throw 'abstract'}
    @Abstract
    lastAccessedSync() : core.DartDateTime{ throw 'abstract'}
    @Abstract
    setLastAccessed(time : core.DartDateTime) : async.Future<any>{ throw 'abstract'}
    @Abstract
    setLastAccessedSync(time : core.DartDateTime) : void{ throw 'abstract'}
    @Abstract
    lastModified() : async.Future<core.DartDateTime>{ throw 'abstract'}
    @Abstract
    lastModifiedSync() : core.DartDateTime{ throw 'abstract'}
    @Abstract
    setLastModified(time : core.DartDateTime) : async.Future<any>{ throw 'abstract'}
    @Abstract
    setLastModifiedSync(time : core.DartDateTime) : void{ throw 'abstract'}
    @Abstract
    open(_namedArguments? : {mode? : FileMode}) : async.Future<RandomAccessFile>{ throw 'abstract'}
    @Abstract
    openSync(_namedArguments? : {mode? : FileMode}) : RandomAccessFile{ throw 'abstract'}
    @Abstract
    openRead(start? : number,end? : number) : async.DartStream<core.DartList<number>>{ throw 'abstract'}
    @Abstract
    openWrite(_namedArguments? : {mode? : FileMode,encoding? : convert.Encoding}) : IOSink{ throw 'abstract'}
    @Abstract
    readAsBytes() : async.Future<core.DartList<number>>{ throw 'abstract'}
    @Abstract
    readAsBytesSync() : core.DartList<number>{ throw 'abstract'}
    @Abstract
    readAsString(_namedArguments? : {encoding? : convert.Encoding}) : async.Future<string>{ throw 'abstract'}
    @Abstract
    readAsStringSync(_namedArguments? : {encoding? : convert.Encoding}) : string{ throw 'abstract'}
    @Abstract
    readAsLines(_namedArguments? : {encoding? : convert.Encoding}) : async.Future<core.DartList<string>>{ throw 'abstract'}
    @Abstract
    readAsLinesSync(_namedArguments? : {encoding? : convert.Encoding}) : core.DartList<string>{ throw 'abstract'}
    @Abstract
    writeAsBytes(bytes : core.DartList<number>,_namedArguments? : {mode? : FileMode,flush? : boolean}) : async.Future<File>{ throw 'abstract'}
    @Abstract
    writeAsBytesSync(bytes : core.DartList<number>,_namedArguments? : {mode? : FileMode,flush? : boolean}) : void{ throw 'abstract'}
    @Abstract
    writeAsString(contents : string,_namedArguments? : {mode? : FileMode,encoding? : convert.Encoding,flush? : boolean}) : async.Future<File>{ throw 'abstract'}
    @Abstract
    writeAsStringSync(contents : string,_namedArguments? : {mode? : FileMode,encoding? : convert.Encoding,flush? : boolean}) : void{ throw 'abstract'}
    @AbstractProperty
    get path() : string{ throw 'abstract'}
}

export enum FileLock {
    SHARED,
    EXCLUSIVE,
    BLOCKING_SHARED,
    BLOCKING_EXCLUSIVE
}

export namespace FileMode {
    export type Constructors = '_internal';
    export type Interface = Omit<FileMode, Constructors>;
}
@DartClass
export class FileMode {
    private static __$READ;
    static get READ() { 
        if (this.__$READ===undefined) {
            this.__$READ = new FileMode._internal(0);
        }
        return this.__$READ;
    }

    private static __$WRITE;
    static get WRITE() { 
        if (this.__$WRITE===undefined) {
            this.__$WRITE = new FileMode._internal(1);
        }
        return this.__$WRITE;
    }

    private static __$APPEND;
    static get APPEND() { 
        if (this.__$APPEND===undefined) {
            this.__$APPEND = new FileMode._internal(2);
        }
        return this.__$APPEND;
    }

    private static __$WRITE_ONLY;
    static get WRITE_ONLY() { 
        if (this.__$WRITE_ONLY===undefined) {
            this.__$WRITE_ONLY = new FileMode._internal(3);
        }
        return this.__$WRITE_ONLY;
    }

    private static __$WRITE_ONLY_APPEND;
    static get WRITE_ONLY_APPEND() { 
        if (this.__$WRITE_ONLY_APPEND===undefined) {
            this.__$WRITE_ONLY_APPEND = new FileMode._internal(4);
        }
        return this.__$WRITE_ONLY_APPEND;
    }

    _mode : number;

    @namedConstructor
    _internal(_mode : number) {
        this._mode = _mode;
    }
    static _internal : new(_mode : number) => FileMode;

}

export namespace _EventHandler {
    export type Constructors = '_EventHandler';
    export type Interface = Omit<_EventHandler, Constructors>;
}
@DartClass
export class _EventHandler {
    static _sendData(sender : core.DartObject,sendPort : isolate.SendPort,data : number) : void {
    }
    constructor() {
    }
    @defaultConstructor
    _EventHandler() {
    }
}

export namespace _AsyncDirectoryLister {
    export type Constructors = '_AsyncDirectoryLister';
    export type Interface = Omit<_AsyncDirectoryLister, Constructors>;
}
@DartClass
export class _AsyncDirectoryLister {
    private static __$LIST_FILE : number;
    static get LIST_FILE() : number { 
        if (this.__$LIST_FILE===undefined) {
            this.__$LIST_FILE = 0;
        }
        return this.__$LIST_FILE;
    }

    private static __$LIST_DIRECTORY : number;
    static get LIST_DIRECTORY() : number { 
        if (this.__$LIST_DIRECTORY===undefined) {
            this.__$LIST_DIRECTORY = 1;
        }
        return this.__$LIST_DIRECTORY;
    }

    private static __$LIST_LINK : number;
    static get LIST_LINK() : number { 
        if (this.__$LIST_LINK===undefined) {
            this.__$LIST_LINK = 2;
        }
        return this.__$LIST_LINK;
    }

    private static __$LIST_ERROR : number;
    static get LIST_ERROR() : number { 
        if (this.__$LIST_ERROR===undefined) {
            this.__$LIST_ERROR = 3;
        }
        return this.__$LIST_ERROR;
    }

    private static __$LIST_DONE : number;
    static get LIST_DONE() : number { 
        if (this.__$LIST_DONE===undefined) {
            this.__$LIST_DONE = 4;
        }
        return this.__$LIST_DONE;
    }

    private static __$RESPONSE_TYPE : number;
    static get RESPONSE_TYPE() : number { 
        if (this.__$RESPONSE_TYPE===undefined) {
            this.__$RESPONSE_TYPE = 0;
        }
        return this.__$RESPONSE_TYPE;
    }

    private static __$RESPONSE_PATH : number;
    static get RESPONSE_PATH() : number { 
        if (this.__$RESPONSE_PATH===undefined) {
            this.__$RESPONSE_PATH = 1;
        }
        return this.__$RESPONSE_PATH;
    }

    private static __$RESPONSE_COMPLETE : number;
    static get RESPONSE_COMPLETE() : number { 
        if (this.__$RESPONSE_COMPLETE===undefined) {
            this.__$RESPONSE_COMPLETE = 1;
        }
        return this.__$RESPONSE_COMPLETE;
    }

    private static __$RESPONSE_ERROR : number;
    static get RESPONSE_ERROR() : number { 
        if (this.__$RESPONSE_ERROR===undefined) {
            this.__$RESPONSE_ERROR = 2;
        }
        return this.__$RESPONSE_ERROR;
    }

    path : string;

    recursive : boolean;

    followLinks : boolean;

    controller : async.DartStreamController<FileSystemEntity>;

    canceled : boolean;

    nextRunning : boolean;

    closed : boolean;

    _ops : _AsyncDirectoryListerOps;

    closeCompleter : async.DartCompleter<any>;

    constructor(path : string,recursive : boolean,followLinks : boolean) {
    }
    @defaultConstructor
    _AsyncDirectoryLister(path : string,recursive : boolean,followLinks : boolean) {
        this.canceled = false;
        this.nextRunning = false;
        this.closed = false;
        this.closeCompleter = new async.DartCompleter<any>();
        this.path = path;
        this.recursive = recursive;
        this.followLinks = followLinks;
        this.controller = new async.DartStreamController<FileSystemEntity>({
            onListen : this.onListen.bind(this),onResume : this.onResume.bind(this),onCancel : this.onCancel.bind(this),sync : true});
    }
    _pointer() : number {
        return (op(Op.EQUALS,this._ops,null)) ? null : this._ops.getPointer();
    }
    get stream() : async.DartStream<FileSystemEntity> {
        return this.controller.stream;
    }
    onListen() : void {
        _IOService._dispatch(properties._DIRECTORY_LIST_START,new core.DartList.literal(this.path,this.recursive,this.followLinks)).then((response : any) =>  {
            if (is(response, "number")) {
                this._ops = new _AsyncDirectoryListerOps(response);
                this.next();
            }else if (is(response, core.DartError)) {
                this.controller.addError(response,response.stackTrace);
                this.close();
            }else {
                this.error(response);
                this.close();
            }
        });
    }
    onResume() : void {
        if (!this.nextRunning) {
            this.next();
        }
    }
    onCancel() : async.Future<any> {
        this.canceled = true;
        if (!this.nextRunning) {
            this.close();
        }
        return this.closeCompleter.future;
    }
    next() : void {
        if (this.canceled) {
            this.close();
            return;
        }
        if (this.controller.isPaused || this.nextRunning) {
            return;
        }
        let pointer = this._pointer();
        if (pointer == null) {
            return;
        }
        this.nextRunning = true;
        _IOService._dispatch(properties._DIRECTORY_LIST_NEXT,new core.DartList.literal(pointer)).then((result : any) =>  {
            this.nextRunning = false;
            if (is(result, core.DartList<any>)) {
                this.next();
                /* TODO (AssertStatementImpl) : assert (result.length % 2 == 0); */;
                for(let i : number = 0; i < result.length; i++){
                    /* TODO (AssertStatementImpl) : assert (i % 2 == 0); */;
                    switch (result[i++]) {
                        case _AsyncDirectoryLister.LIST_FILE:
                            this.controller.add(new File(result[i]));
                            break;
                        case _AsyncDirectoryLister.LIST_DIRECTORY:
                            this.controller.add(new Directory(result[i]));
                            break;
                        case _AsyncDirectoryLister.LIST_LINK:
                            this.controller.add(new Link(result[i]));
                            break;
                        case _AsyncDirectoryLister.LIST_ERROR:
                            this.error(result[i]);
                            break;
                        case _AsyncDirectoryLister.LIST_DONE:
                            this.canceled = true;
                            return;
                    }
                }
            }else {
                this.controller.addError(new FileSystemException("Internal error"));
            }
        });
    }
    _cleanup() : void {
        this.controller.close();
        this.closeCompleter.complete();
        this._ops = null;
    }
    close() : void {
        if (this.closed) {
            return;
        }
        if (this.nextRunning) {
            return;
        }
        this.closed = true;
        let pointer = this._pointer();
        if (pointer == null) {
            this._cleanup();
        }else {
            _IOService._dispatch(properties._DIRECTORY_LIST_STOP,new core.DartList.literal(pointer)).whenComplete(this._cleanup.bind(this));
        }
    }
    error(message : any) : void {
        let errorType = op(Op.INDEX,op(Op.INDEX,message,_AsyncDirectoryLister.RESPONSE_ERROR),properties._ERROR_RESPONSE_ERROR_TYPE);
        if (op(Op.EQUALS,errorType,properties._ILLEGAL_ARGUMENT_RESPONSE)) {
            this.controller.addError(new core.ArgumentError());
        }else if (op(Op.EQUALS,errorType,properties._OSERROR_RESPONSE)) {
            let responseError = op(Op.INDEX,message,_AsyncDirectoryLister.RESPONSE_ERROR);
            let err = new OSError(op(Op.INDEX,responseError,properties._OSERROR_RESPONSE_MESSAGE),op(Op.INDEX,responseError,properties._OSERROR_RESPONSE_ERROR_CODE));
            let errorPath = op(Op.INDEX,message,_AsyncDirectoryLister.RESPONSE_PATH);
            if (op(Op.EQUALS,errorPath,null)) errorPath = this.path;
            this.controller.addError(new FileSystemException("Directory listing failed",errorPath,err));
        }else {
            this.controller.addError(new FileSystemException("Internal error"));
        }
    }
}

export namespace _AsyncDirectoryListerOps {
    export type Constructors = never;
    export type Interface = Omit<_AsyncDirectoryListerOps, Constructors>;
}
@DartClass
export class _AsyncDirectoryListerOps {
    constructor(pointer : number) {
    }
    @defaultFactory
    static $_AsyncDirectoryListerOps(pointer : number) : _AsyncDirectoryListerOps {
    }
    @Abstract
    getPointer() : number{ throw 'abstract'}
}

export namespace _WebSocketPong {
    export type Constructors = '_WebSocketPong';
    export type Interface = Omit<_WebSocketPong, Constructors>;
}
@DartClass
export class _WebSocketPong {
    payload : core.DartList<number>;

    constructor(payload? : core.DartList<number>) {
    }
    @defaultConstructor
    _WebSocketPong(payload? : core.DartList<number>) {
        payload = payload || null;
        this.payload = payload;
    }
}

export namespace Directory {
    export type Constructors = never;
    export type Interface = Omit<Directory, Constructors>;
}
@DartClass
@Implements(FileSystemEntity)
export class Directory implements FileSystemEntity.Interface {
    path : string;

    constructor(path : string) {
    }
    @defaultFactory
    static $Directory(path : string) : Directory {
        return new _Directory(path);
    }
    @namedFactory
    static $fromUri(uri : lib5.Uri) : Directory {
        return new Directory(uri.toFilePath());
    }
    static fromUri : new(uri : lib5.Uri) => Directory;

    static get current() : Directory {
        return _Directory.current;
    }
    @AbstractProperty
    get uri() : lib5.Uri{ throw 'abstract'}
    static set current(path : any) {
        _Directory.current = path;
    }
    @Abstract
    create(_namedArguments? : {recursive? : boolean}) : async.Future<Directory>{ throw 'abstract'}
    @Abstract
    createSync(_namedArguments? : {recursive? : boolean}) : void{ throw 'abstract'}
    static get systemTemp() : Directory {
        return _Directory.systemTemp;
    }
    @Abstract
    createTemp(prefix? : string) : async.Future<Directory>{ throw 'abstract'}
    @Abstract
    createTempSync(prefix? : string) : Directory{ throw 'abstract'}
    @Abstract
    resolveSymbolicLinks() : async.Future<string>{ throw 'abstract'}
    @Abstract
    resolveSymbolicLinksSync() : string{ throw 'abstract'}
    @Abstract
    rename(newPath : string) : async.Future<Directory>{ throw 'abstract'}
    @Abstract
    renameSync(newPath : string) : Directory{ throw 'abstract'}
    @AbstractProperty
    get absolute() : Directory{ throw 'abstract'}
    @Abstract
    list(_namedArguments? : {recursive? : boolean,followLinks? : boolean}) : async.DartStream<FileSystemEntity>{ throw 'abstract'}
    @Abstract
    listSync(_namedArguments? : {recursive? : boolean,followLinks? : boolean}) : core.DartList<FileSystemEntity>{ throw 'abstract'}
    @Abstract
    toString() : string{ throw 'abstract'}
}

export namespace _Filter {
    export type Constructors = '_Filter';
    export type Interface = Omit<_Filter, Constructors>;
}
@DartClass
export class _Filter {
    @Abstract
    process(data : core.DartList<number>,start : number,end : number) : void{ throw 'abstract'}
    @Abstract
    processed(_namedArguments? : {flush? : boolean,end? : boolean}) : core.DartList<number>{ throw 'abstract'}
    static _newZLibDeflateFilter(gzip : boolean,level : number,windowBits : number,memLevel : number,strategy : number,dictionary : core.DartList<number>,raw : boolean) : _Filter {
    }
    static _newZLibInflateFilter(windowBits : number,dictionary : core.DartList<number>,raw : boolean) : _Filter {
    }
    constructor() {
    }
    @defaultConstructor
    _Filter() {
    }
}

export namespace _FilterSink {
    export type Constructors = convert.ByteConversionSink.Constructors | '_FilterSink';
    export type Interface = Omit<_FilterSink, Constructors>;
}
@DartClass
export class _FilterSink extends convert.ByteConversionSink {
    _filter : _Filter;

    _sink : convert.ByteConversionSink;

    _closed : boolean;

    _empty : boolean;

    constructor(_sink : convert.ByteConversionSink,_filter : _Filter) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _FilterSink(_sink : convert.ByteConversionSink,_filter : _Filter) {
        this._closed = false;
        this._empty = true;
        this._sink = _sink;
        this._filter = _filter;
    }
    add(data : core.DartList<number>) : void {
        this.addSlice(data,0,data.length,false);
    }
    addSlice(data : core.DartList<number>,start : number,end : number,isLast : boolean) : void {
        if (this._closed) return;
        if (end == null) throw new core.ArgumentError.notNull("end");
        core.RangeError.checkValidRange(start,end,data.length);
        try {
            this._empty = false;
            let bufferAndStart : _BufferAndStart = _ensureFastAndSerializableByteData(data,start,end);
            this._filter.process(bufferAndStart.buffer,bufferAndStart.start,end - (start - bufferAndStart.start));
            let out : core.DartList<number>;
            while ((out = this._filter.processed({
                flush : false})) != null){
                this._sink.add(out);
            }
        } catch (__error__) {

            {
                let e = __error__;
                this._closed = true;
                /* TODO (RethrowExpressionImpl): rethrow */;
            }
        }
        if (isLast) this.close();
    }
    close() : void {
        if (this._closed) return;
        if (this._empty) this._filter.process(new core.DartList.literal(),0,0);
        try {
            let out : core.DartList<number>;
            while ((out = this._filter.processed({
                end : true})) != null){
                this._sink.add(out);
            }
        } catch (__error__) {

            {
                let e = __error__;
                this._closed = true;
                throw e;
            }
        }
        this._closed = true;
        this._sink.close();
    }
}

export namespace _IOService {
    export type Constructors = '_IOService';
    export type Interface = Omit<_IOService, Constructors>;
}
@DartClass
export class _IOService {
    static _dispatch(request : number,data : core.DartList<any>) : async.Future<any> {
    }
    constructor() {
    }
    @defaultConstructor
    _IOService() {
    }
}

export namespace _WebSocketImpl {
    export type Constructors = async.DartStream.Constructors | '_fromSocket';
    export type Interface = Omit<_WebSocketImpl, Constructors>;
}
@DartClass
@Implements(WebSocket)
@With(_ServiceObject)
export class _WebSocketImpl extends async.DartStream<any> implements WebSocket.Interface,_ServiceObject.Interface {
    @Abstract
    _serviceType(ref : boolean) : string {
        throw 'from mixin';
    }
    private static __$_webSockets : core.DartMap<number,_WebSocketImpl>;
    static get _webSockets() : core.DartMap<number,_WebSocketImpl> { 
        if (this.__$_webSockets===undefined) {
            this.__$_webSockets = new core.DartMap<number,_WebSocketImpl>();
        }
        return this.__$_webSockets;
    }
    static set _webSockets(__$value : core.DartMap<number,_WebSocketImpl>)  { 
        this.__$_webSockets = __$value;
    }

    private static __$DEFAULT_WINDOW_BITS : number;
    static get DEFAULT_WINDOW_BITS() : number { 
        if (this.__$DEFAULT_WINDOW_BITS===undefined) {
            this.__$DEFAULT_WINDOW_BITS = 15;
        }
        return this.__$DEFAULT_WINDOW_BITS;
    }

    private static __$PER_MESSAGE_DEFLATE : string;
    static get PER_MESSAGE_DEFLATE() : string { 
        if (this.__$PER_MESSAGE_DEFLATE===undefined) {
            this.__$PER_MESSAGE_DEFLATE = "permessage-deflate";
        }
        return this.__$PER_MESSAGE_DEFLATE;
    }

    protocol : string;

    _controller : async.DartStreamController<any>;

    _subscription : async.DartStreamSubscription<any>;

    _sink : async.DartStreamSink<any>;

    _socket;

    _serverSide : boolean;

    _readyState : number;

    _writeClosed : boolean;

    _closeCode : number;

    _closeReason : string;

    _pingInterval : core.DartDuration;

    _pingTimer : async.DartTimer;

    _consumer : _WebSocketConsumer;

    _outCloseCode : number;

    _outCloseReason : string;

    _closeTimer : async.DartTimer;

    _deflate : _WebSocketPerMessageDeflate;

    private static __$_httpClient : HttpClient;
    static get _httpClient() : HttpClient { 
        if (this.__$_httpClient===undefined) {
            this.__$_httpClient = new HttpClient();
        }
        return this.__$_httpClient;
    }
    static set _httpClient(__$value : HttpClient)  { 
        this.__$_httpClient = __$value;
    }

    static connect(url : string,protocols : core.DartIterable<string>,headers : core.DartMap<string,any>,_namedArguments? : {compression? : CompressionOptions}) : async.Future<WebSocket> {
        let {compression} = Object.assign({
            "compression" : CompressionOptions.DEFAULT}, _namedArguments );
        let uri : lib5.Uri = lib5.Uri.parse(url);
        if (uri.scheme != "ws" && uri.scheme != "wss") {
            throw new WebSocketException(`Unsupported URL scheme '${uri.scheme}'`);
        }
        let random : math.Random = new math.Random();
        let nonceData : typed_data.Uint8List = new typed_data.Uint8List(16);
        for(let i : number = 0; i < 16; i++){
            op(Op.INDEX_ASSIGN,nonceData,i,random.nextInt(256));
        }
        let nonce : string = _CryptoUtils.bytesToBase64(nonceData);
        uri = new lib5.Uri({
            scheme : uri.scheme == "wss" ? "https" : "http",userInfo : uri.userInfo,host : uri.host,port : uri.port,path : uri.path,query : uri.query,fragment : uri.fragment});
        return _WebSocketImpl._httpClient.openUrl("GET",uri).then((request : any) =>  {
            if (uri.userInfo != null && !new core.DartString(uri.userInfo).isEmpty) {
                let auth : string = _CryptoUtils.bytesToBase64(convert.properties.UTF8.encode(uri.userInfo));
                request.headers.set(HttpHeaders.AUTHORIZATION,`Basic ${auth}`);
            }
            if (headers != null) {
                headers.forEach((field : any,value : any) =>  {
                    return request.headers.add(field,value);
                });
            }
            ((_) : HttpHeaders =>  {
                {
                    _.set(HttpHeaders.CONNECTION,"Upgrade");
                    _.set(HttpHeaders.UPGRADE,"websocket");
                    _.set("Sec-WebSocket-Key",nonce);
                    _.set("Cache-Control","no-cache");
                    _.set("Sec-WebSocket-Version","13");
                    return _;
                }
            })(request.headers);
            if (protocols != null) {
                request.headers.add("Sec-WebSocket-Protocol",protocols.toList());
            }
            if (compression.enabled) {
                request.headers.add("Sec-WebSocket-Extensions",compression._createHeader());
            }
            return request.close();
        }).then((response : any) =>  {
            var error : (message : string) => void = (message : string) : void =>  {
                response.detachSocket().then((socket : any) =>  {
                    socket.destroy();
                });
                throw new WebSocketException(message);
            };
            if (response.statusCode != HttpStatus.SWITCHING_PROTOCOLS || op(Op.INDEX,response.headers,HttpHeaders.CONNECTION) == null || !op(Op.INDEX,response.headers,HttpHeaders.CONNECTION).any((value : any) =>  {
                return new core.DartString(value).toLowerCase() == "upgrade";
            }) || new core.DartString(response.headers.value(HttpHeaders.UPGRADE)).toLowerCase() != "websocket") {
                error(`Connection to '${uri}' was not upgraded to websocket`);
            }
            let accept : string = response.headers.value("Sec-WebSocket-Accept");
            if (accept == null) {
                error("Response did not contain a 'Sec-WebSocket-Accept' header");
            }
            let sha1 : _SHA1 = new _SHA1();
            sha1.add(new core.DartString(`${nonce}${properties._webSocketGUID}`).codeUnits);
            let expectedAccept : core.DartList<number> = sha1.close();
            let receivedAccept : core.DartList<number> = _CryptoUtils.base64StringToBytes(accept);
            if (expectedAccept.length != receivedAccept.length) {
                error("Reasponse header 'Sec-WebSocket-Accept' is the wrong length");
            }
            for(let i : number = 0; i < expectedAccept.length; i++){
                if (expectedAccept[i] != receivedAccept[i]) {
                    error("Bad response 'Sec-WebSocket-Accept' header");
                }
            }
            let protocol = response.headers.value('Sec-WebSocket-Protocol');
            let deflate : _WebSocketPerMessageDeflate = _WebSocketImpl.negotiateClientCompression(response,compression);
            return response.detachSocket().then((socket : any) =>  {
                return new _WebSocketImpl._fromSocket(socket,protocol,compression,false,deflate);
            });
        });
    }
    static negotiateClientCompression(response : HttpClientResponse,compression : CompressionOptions) : _WebSocketPerMessageDeflate {
        let extensionHeader : string = response.headers.value('Sec-WebSocket-Extensions');
        if (extensionHeader == null) {
            extensionHeader = "";
        }
        let hv = HeaderValue.parse(extensionHeader,{
            valueSeparator : ','});
        if (compression.enabled && hv.value == _WebSocketImpl.PER_MESSAGE_DEFLATE) {
            let serverNoContextTakeover = hv.parameters.containsKey(properties._serverNoContextTakeover);
            let clientNoContextTakeover = hv.parameters.containsKey(properties._clientNoContextTakeover);
            var getWindowBits : (type : string) => number = (type : string) : number =>  {
                let o = hv.parameters.get(type);
                if (o == null) {
                    return _WebSocketImpl.DEFAULT_WINDOW_BITS;
                }
                return core.DartInt.parse(o,{
                    onError : (s : any) =>  {
                        return _WebSocketImpl.DEFAULT_WINDOW_BITS;
                    }});
            };
            return new _WebSocketPerMessageDeflate({
                clientMaxWindowBits : getWindowBits(properties._clientMaxWindowBits),serverMaxWindowBits : getWindowBits(properties._serverMaxWindowBits),clientNoContextTakeover : clientNoContextTakeover,serverNoContextTakeover : serverNoContextTakeover});
        }
        return null;
    }
    @namedConstructor
    _fromSocket(_socket : any,protocol : string,compression : CompressionOptions,_serverSide? : boolean,deflate? : _WebSocketPerMessageDeflate) {
        _serverSide = _serverSide || false;
        this._readyState = WebSocket.CONNECTING;
        this._writeClosed = false;
        this._socket = _socket;
        this.protocol = protocol;
        this._serverSide = _serverSide;
        this._consumer = new _WebSocketConsumer(this,this._socket);
        this._sink = new _StreamSinkImpl<any>(this._consumer);
        this._readyState = WebSocket.OPEN;
        this._deflate = deflate;
        let transformer = new _WebSocketProtocolTransformer(this._serverSide,this._deflate);
        this._subscription = this._socket.transform(transformer).listen((data : any) =>  {
            if (is(data, _WebSocketPing)) {
                if (!this._writeClosed) this._consumer.add(new _WebSocketPong(data.payload));
            }else if (is(data, _WebSocketPong)) {
                this.pingInterval = this._pingInterval;
            }else {
                this._controller.add(data);
            }
        },{
            onError : (error : any,stackTrace : any) =>  {
                if (this._closeTimer != null) this._closeTimer.cancel();
                if (is(error, core.FormatException)) {
                    this._close(WebSocketStatus.INVALID_FRAME_PAYLOAD_DATA);
                }else {
                    this._close(WebSocketStatus.PROTOCOL_ERROR);
                }
                this._closeCode = this._outCloseCode;
                this._closeReason = this._outCloseReason;
                this._controller.close();
            },onDone : () =>  {
                if (this._closeTimer != null) this._closeTimer.cancel();
                if (this._readyState == WebSocket.OPEN) {
                    this._readyState = WebSocket.CLOSING;
                    if (!_WebSocketImpl._isReservedStatusCode(transformer.closeCode)) {
                        this._close(transformer.closeCode,transformer.closeReason);
                    }else {
                        this._close();
                    }
                    this._readyState = WebSocket.CLOSED;
                }
                this._closeCode = transformer.closeCode;
                this._closeReason = transformer.closeReason;
                this._controller.close();
            },cancelOnError : true});
        this._subscription.pause();
        this._controller = new async.DartStreamController<any>({
            sync : true,onListen : this._subscription.resume.bind(this._subscription),onCancel : () =>  {
                this._subscription.cancel();
                this._subscription = null;
            },onPause : this._subscription.pause.bind(this._subscription),onResume : this._subscription.resume.bind(this._subscription)});
        _WebSocketImpl._webSockets.set(this._serviceId,this);
        try {
            this._socket._owner = this;
        } catch (__error__) {

            {
                let _ = __error__;
            }
        }
    }
    static _fromSocket : new(_socket : any,protocol : string,compression : CompressionOptions,_serverSide : boolean,deflate : _WebSocketPerMessageDeflate) => _WebSocketImpl;

    listen(onData : (message : any) => void,_namedArguments? : {onError? : Function,onDone? : () => void,cancelOnError? : boolean}) : async.DartStreamSubscription<any> {
        let {onError,onDone,cancelOnError} = Object.assign({
        }, _namedArguments );
        return this._controller.stream.listen(onData,{
            onError : onError,onDone : onDone,cancelOnError : cancelOnError});
    }
    get pingInterval() : core.DartDuration {
        return this._pingInterval;
    }
    set pingInterval(interval : core.DartDuration) {
        if (this._writeClosed) return;
        if (this._pingTimer != null) this._pingTimer.cancel();
        this._pingInterval = interval;
        if (op(Op.EQUALS,this._pingInterval,null)) return;
        this._pingTimer = new async.DartTimer(this._pingInterval,() =>  {
            if (this._writeClosed) return;
            this._consumer.add(new _WebSocketPing());
            this._pingTimer = new async.DartTimer(this._pingInterval,() =>  {
                this._close(WebSocketStatus.GOING_AWAY);
            });
        });
    }
    get readyState() : number {
        return this._readyState;
    }
    get extensions() : string {
        return null;
    }
    get closeCode() : number {
        return this._closeCode;
    }
    get closeReason() : string {
        return this._closeReason;
    }
    add(data : any) : void {
        this._sink.add(data);
    }
    addUtf8Text(bytes : core.DartList<number>) : void {
        if (isNot(bytes, core.DartList<number>)) {
            throw new core.ArgumentError.value(bytes,"bytes","Is not a list of bytes");
        }
        this._sink.add(new _EncodedString(bytes));
    }
    addError(error : any,stackTrace? : core.DartStackTrace) : void {
        this._sink.addError(error,stackTrace);
    }
    addStream(stream : async.DartStream<any>) : async.Future<any> {
        return this._sink.addStream(stream);
    }
    get done() : async.Future<any> {
        return this._sink.done;
    }
    close(code? : number,reason? : string) : async.Future<any> {
        if (_WebSocketImpl._isReservedStatusCode(code)) {
            throw new WebSocketException(`Reserved status code ${code}`);
        }
        if (this._outCloseCode == null) {
            this._outCloseCode = code;
            this._outCloseReason = reason;
        }
        if (!this._controller.isClosed) {
            if (!this._controller.hasListener && this._subscription != null) {
                this._controller.stream.drain().catchError((_ : any) =>  {
                    return new core.DartMap.literal([
                    ]);
                });
            }
            if (op(Op.EQUALS,this._closeTimer,null)) {
                this._closeTimer = new async.DartTimer(new core.DartDuration({
                    seconds : 5}),() =>  {
                    this._closeCode = this._outCloseCode;
                    this._closeReason = this._outCloseReason;
                    if (this._subscription != null) this._subscription.cancel();
                    this._controller.close();
                    _WebSocketImpl._webSockets.remove(this._serviceId);
                });
            }
        }
        return this._sink.close();
    }
    _close(code? : number,reason? : string) : void {
        if (this._writeClosed) return;
        if (this._outCloseCode == null) {
            this._outCloseCode = code;
            this._outCloseReason = reason;
        }
        this._writeClosed = true;
        this._consumer.closeSocket();
        _WebSocketImpl._webSockets.remove(this._serviceId);
    }
    get _serviceTypePath() : string {
        return 'io/websockets';
    }
    get _serviceTypeName() : string {
        return 'WebSocket';
    }
    _toJSON(ref : boolean) : core.DartMap<string,any> {
        let name = `${this._socket.address.host}:${this._socket.port}`;
        let r = new core.DartMap.literal([
            ['id',this._servicePath],
            ['type',this._serviceType(ref)],
            ['name',name],
            ['user_name',name]]);
        if (ref) {
            return r;
        }
        try {
            r.set('socket',this._socket._toJSON(true));
        } catch (__error__) {

            {
                let _ = __error__;
                r.set('socket',new core.DartMap.literal([
                    ['id',this._servicePath],
                    ['type','@Socket'],
                    ['name','UserSocket'],
                    ['user_name','UserSocket']]));
            }
        }
        return r;
    }
    static _isReservedStatusCode(code : number) : boolean {
        return code != null && (code < WebSocketStatus.NORMAL_CLOSURE || code == WebSocketStatus.RESERVED_1004 || code == WebSocketStatus.NO_STATUS_RECEIVED || code == WebSocketStatus.ABNORMAL_CLOSURE || (code > WebSocketStatus.INTERNAL_SERVER_ERROR && code < WebSocketStatus.RESERVED_1015) || (code >= WebSocketStatus.RESERVED_1015 && code < 3000));
    }
}

export namespace SystemEncoding {
    export type Constructors = convert.Encoding.Constructors | 'SystemEncoding';
    export type Interface = Omit<SystemEncoding, Constructors>;
}
@DartClass
export class SystemEncoding extends convert.Encoding {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SystemEncoding() {
    }
    get name() : string {
        return 'system';
    }
    encode(input : string) : core.DartList<number> {
        return this.encoder.convert(input);
    }
    decode(encoded : core.DartList<number>) : string {
        return this.decoder.convert(encoded);
    }
    get encoder() : convert.Converter<string,core.DartList<number>> {
        if (Platform.operatingSystem == "windows") {
            return new _WindowsCodePageEncoder();
        }else {
            return new convert.Utf8Encoder();
        }
    }
    get decoder() : convert.Converter<core.DartList<number>,string> {
        if (Platform.operatingSystem == "windows") {
            return new _WindowsCodePageDecoder();
        }else {
            return new convert.Utf8Decoder();
        }
    }
}

export namespace Platform {
    export type Constructors = 'Platform';
    export type Interface = Omit<Platform, Constructors>;
}
@DartClass
export class Platform {
    private static __$_numberOfProcessors;
    static get _numberOfProcessors() { 
        if (this.__$_numberOfProcessors===undefined) {
            this.__$_numberOfProcessors = _Platform.numberOfProcessors;
        }
        return this.__$_numberOfProcessors;
    }
    static set _numberOfProcessors(__$value : any)  { 
        this.__$_numberOfProcessors = __$value;
    }

    private static __$_pathSeparator;
    static get _pathSeparator() { 
        if (this.__$_pathSeparator===undefined) {
            this.__$_pathSeparator = _Platform.pathSeparator;
        }
        return this.__$_pathSeparator;
    }
    static set _pathSeparator(__$value : any)  { 
        this.__$_pathSeparator = __$value;
    }

    private static __$_operatingSystem;
    static get _operatingSystem() { 
        if (this.__$_operatingSystem===undefined) {
            this.__$_operatingSystem = _Platform.operatingSystem;
        }
        return this.__$_operatingSystem;
    }
    static set _operatingSystem(__$value : any)  { 
        this.__$_operatingSystem = __$value;
    }

    private static __$_localHostname;
    static get _localHostname() { 
        if (this.__$_localHostname===undefined) {
            this.__$_localHostname = _Platform.localHostname;
        }
        return this.__$_localHostname;
    }
    static set _localHostname(__$value : any)  { 
        this.__$_localHostname = __$value;
    }

    private static __$_version;
    static get _version() { 
        if (this.__$_version===undefined) {
            this.__$_version = _Platform.version;
        }
        return this.__$_version;
    }
    static set _version(__$value : any)  { 
        this.__$_version = __$value;
    }

    private static __$_localeName;
    static get _localeName() { 
        if (this.__$_localeName===undefined) {
            this.__$_localeName = _Platform.localeName;
        }
        return this.__$_localeName;
    }
    static set _localeName(__$value : any)  { 
        this.__$_localeName = __$value;
    }

    static get numberOfProcessors() : number {
        return Platform._numberOfProcessors;
    }
    static get pathSeparator() : string {
        return Platform._pathSeparator;
    }
    static get localeName() : string {
        return Platform._localeName;
    }
    static get operatingSystem() : string {
        return Platform._operatingSystem;
    }
    static get localHostname() : string {
        return Platform._localHostname;
    }
    private static __$isLinux : boolean;
    static get isLinux() : boolean { 
        if (this.__$isLinux===undefined) {
            this.__$isLinux = (op(Op.EQUALS,Platform._operatingSystem,"linux"));
        }
        return this.__$isLinux;
    }
    static set isLinux(__$value : boolean)  { 
        this.__$isLinux = __$value;
    }

    private static __$isMacOS : boolean;
    static get isMacOS() : boolean { 
        if (this.__$isMacOS===undefined) {
            this.__$isMacOS = (op(Op.EQUALS,Platform._operatingSystem,"macos"));
        }
        return this.__$isMacOS;
    }
    static set isMacOS(__$value : boolean)  { 
        this.__$isMacOS = __$value;
    }

    private static __$isWindows : boolean;
    static get isWindows() : boolean { 
        if (this.__$isWindows===undefined) {
            this.__$isWindows = (op(Op.EQUALS,Platform._operatingSystem,"windows"));
        }
        return this.__$isWindows;
    }
    static set isWindows(__$value : boolean)  { 
        this.__$isWindows = __$value;
    }

    private static __$isAndroid : boolean;
    static get isAndroid() : boolean { 
        if (this.__$isAndroid===undefined) {
            this.__$isAndroid = (op(Op.EQUALS,Platform._operatingSystem,"android"));
        }
        return this.__$isAndroid;
    }
    static set isAndroid(__$value : boolean)  { 
        this.__$isAndroid = __$value;
    }

    private static __$isIOS : boolean;
    static get isIOS() : boolean { 
        if (this.__$isIOS===undefined) {
            this.__$isIOS = (op(Op.EQUALS,Platform._operatingSystem,"ios"));
        }
        return this.__$isIOS;
    }
    static set isIOS(__$value : boolean)  { 
        this.__$isIOS = __$value;
    }

    private static __$isFuchsia : boolean;
    static get isFuchsia() : boolean { 
        if (this.__$isFuchsia===undefined) {
            this.__$isFuchsia = (op(Op.EQUALS,Platform._operatingSystem,"fuchsia"));
        }
        return this.__$isFuchsia;
    }
    static set isFuchsia(__$value : boolean)  { 
        this.__$isFuchsia = __$value;
    }

    static get environment() : core.DartMap<string,string> {
        return _Platform.environment;
    }
    static get executable() : string {
        return _Platform.executable;
    }
    static get resolvedExecutable() : string {
        return _Platform.resolvedExecutable;
    }
    static get script() : lib5.Uri {
        return _Platform.script;
    }
    static get executableArguments() : core.DartList<string> {
        return _Platform.executableArguments;
    }
    static get packageRoot() : string {
        return _Platform.packageRoot;
    }
    static get packageConfig() : string {
        return _Platform.packageConfig;
    }
    static get version() : string {
        return Platform._version;
    }
    constructor() {
    }
    @defaultConstructor
    Platform() {
    }
}

export namespace _Platform {
    export type Constructors = '_Platform';
    export type Interface = Omit<_Platform, Constructors>;
}
@DartClass
export class _Platform {
    static _numberOfProcessors() : number {
    }
    static _pathSeparator() : string {
    }
    static _operatingSystem() : string {
    }
    static _localHostname() {
    }
    static _executable() {
    }
    static _resolvedExecutable() {
    }
    static _environment() {
    }
    static _executableArguments() : core.DartList<string> {
    }
    static _packageRoot() : string {
    }
    static _packageConfig() : string {
    }
    static _version() : string {
    }
    static _localeName() : string {
    }
    private static __$executable : string;
    static get executable() : string { 
        if (this.__$executable===undefined) {
            this.__$executable = _Platform._executable();
        }
        return this.__$executable;
    }
    static set executable(__$value : string)  { 
        this.__$executable = __$value;
    }

    private static __$resolvedExecutable : string;
    static get resolvedExecutable() : string { 
        if (this.__$resolvedExecutable===undefined) {
            this.__$resolvedExecutable = _Platform._resolvedExecutable();
        }
        return this.__$resolvedExecutable;
    }
    static set resolvedExecutable(__$value : string)  { 
        this.__$resolvedExecutable = __$value;
    }

    private static __$packageRoot : string;
    static get packageRoot() : string { 
        if (this.__$packageRoot===undefined) {
            this.__$packageRoot = _Platform._packageRoot();
        }
        return this.__$packageRoot;
    }
    static set packageRoot(__$value : string)  { 
        this.__$packageRoot = __$value;
    }

    private static __$packageConfig : string;
    static get packageConfig() : string { 
        if (this.__$packageConfig===undefined) {
            this.__$packageConfig = _Platform._packageConfig();
        }
        return this.__$packageConfig;
    }
    static set packageConfig(__$value : string)  { 
        this.__$packageConfig = __$value;
    }

    private static __$_cachedLocaleName : string;
    static get _cachedLocaleName() : string { 
        return this.__$_cachedLocaleName;
    }
    static set _cachedLocaleName(__$value : string)  { 
        this.__$_cachedLocaleName = __$value;
    }

    static get localeName() : string {
        if (_Platform._cachedLocaleName == null) {
            let result = _Platform._localeName();
            if (is(result, OSError)) {
                throw result;
            }
            _Platform._cachedLocaleName = result;
        }
        return _Platform._cachedLocaleName;
    }
    private static __$_environmentCache;
    static get _environmentCache() { 
        return this.__$_environmentCache;
    }
    static set _environmentCache(__$value : any)  { 
        this.__$_environmentCache = __$value;
    }

    static get numberOfProcessors() : number {
        return _Platform._numberOfProcessors();
    }
    static get pathSeparator() : string {
        return _Platform._pathSeparator();
    }
    static get operatingSystem() : string {
        return _Platform._operatingSystem();
    }
    private static __$script : lib5.Uri;
    static get script() : lib5.Uri { 
        return this.__$script;
    }
    static set script(__$value : lib5.Uri)  { 
        this.__$script = __$value;
    }

    static get localHostname() : string {
        let result = _Platform._localHostname();
        if (is(result, OSError)) {
            throw result;
        }else {
            return result;
        }
    }
    static get executableArguments() : core.DartList<string> {
        return _Platform._executableArguments();
    }
    static get environment() : core.DartMap<string,string> {
        if (op(Op.EQUALS,_Platform._environmentCache,null)) {
            let env = _Platform._environment();
            if (isNot(env, OSError)) {
                let isWindows = _Platform.operatingSystem == 'windows';
                let result = isWindows ? new _CaseInsensitiveStringMap<string>() : new core.DartMap<string,string>();
                for(let str of env) {
                    if (op(Op.EQUALS,str,null)) {
                        continue;
                    }
                    let equalsIndex = str.indexOf('=');
                    if (op(Op.GT,equalsIndex,0)) {
                        result.set(str.substring(0,equalsIndex),str.substring(op(Op.PLUS,equalsIndex,1)));
                    }
                }
                _Platform._environmentCache = new core.DartUnmodifiableMapView<string,string>(result);
            }else {
                _Platform._environmentCache = env;
            }
        }
        if (is(_Platform._environmentCache, OSError)) {
            throw _Platform._environmentCache;
        }else {
            return _Platform._environmentCache as core.DartObject;
        }
    }
    static get version() : string {
        return _Platform._version();
    }
    constructor() {
    }
    @defaultConstructor
    _Platform() {
    }
}

export namespace _CaseInsensitiveStringMap {
    export type Constructors = '_CaseInsensitiveStringMap';
    export type Interface<V> = Omit<_CaseInsensitiveStringMap<V>, Constructors>;
}
@DartClass
@Implements(core.DartMap)
export class _CaseInsensitiveStringMap<V> implements core.DartMap.Interface<string,V> {
    _map : core.DartMap<string,V>;

    containsKey(key : core.DartObject) : boolean {
        return is(key, "string") && this._map.containsKey(new core.DartString(key).toUpperCase());
    }
    containsValue(value : core.DartObject) : boolean {
        return this._map.containsValue(value);
    }
    [OperatorMethods.INDEX](key : core.DartObject) : V {
        return is(key, "string") ? this._map.get(new core.DartString(key).toUpperCase()) : null;
    }
    [OperatorMethods.INDEX_EQ](key : string,value : V) : void {
        this._map.set(new core.DartString(key).toUpperCase(),value);
    }
    putIfAbsent(key : string,ifAbsent : <V>() => V) : V {
        return this._map.putIfAbsent(new core.DartString(key).toUpperCase(),ifAbsent);
    }
    addAll(other : core.DartMap<string,V>) : void {
        other.forEach((key : any,value : any) =>  {
            return op(Op.INDEX_ASSIGN,this,new core.DartString(key).toUpperCase(),value);
        });
    }
    remove(key : core.DartObject) : V {
        return is(key, "string") ? this._map.remove(new core.DartString(key).toUpperCase()) : null;
    }
    clear() : void {
        this._map.clear();
    }
    forEach(f : <V>(key : string,value : V) => void) : void {
        this._map.forEach(f);
    }
    get keys() : core.DartIterable<string> {
        return this._map.keys;
    }
    get values() : core.DartIterable<V> {
        return this._map.values;
    }
    get length() : number {
        return this._map.length;
    }
    get isEmpty() : boolean {
        return this._map.isEmpty;
    }
    get isNotEmpty() : boolean {
        return this._map.isNotEmpty;
    }
    toString() : string {
        return this._map.toString();
    }
    constructor() {
    }
    @defaultConstructor
    _CaseInsensitiveStringMap() {
        this._map = new core.DartMap<string,V>();
    }
}

export namespace _ProcessUtils {
    export type Constructors = '_ProcessUtils';
    export type Interface = Omit<_ProcessUtils, Constructors>;
}
@DartClass
export class _ProcessUtils {
    static _exit(status : number) : void {
    }
    static _setExitCode(status : number) : void {
    }
    static _getExitCode() : number {
    }
    static _sleep(millis : number) : void {
    }
    static _pid(process : Process) : number {
    }
    static _watchSignal(signal : ProcessSignal) : async.DartStream<ProcessSignal> {
    }
    constructor() {
    }
    @defaultConstructor
    _ProcessUtils() {
    }
}

export namespace _WebSocketTransformerImpl {
    export type Constructors = '_WebSocketTransformerImpl';
    export type Interface = Omit<_WebSocketTransformerImpl, Constructors>;
}
@DartClass
@Implements(WebSocketTransformer)
export class _WebSocketTransformerImpl implements WebSocketTransformer.Interface {
    _controller : async.DartStreamController<WebSocket>;

    _protocolSelector : (protocols : core.DartList<string>) => any;

    _compression : CompressionOptions;

    constructor(_protocolSelector : (protocols : core.DartList<string>) => any,_compression : CompressionOptions) {
    }
    @defaultConstructor
    _WebSocketTransformerImpl(_protocolSelector : (protocols : core.DartList<string>) => any,_compression : CompressionOptions) {
        this._controller = new async.DartStreamController<WebSocket>({
            sync : true});
        this._protocolSelector = _protocolSelector;
        this._compression = _compression;
    }
    bind(stream : async.DartStream<HttpRequest>) : async.DartStream<WebSocket> {
        stream.listen((request : any) =>  {
            _WebSocketTransformerImpl._upgrade(request,this._protocolSelector,this._compression).then((webSocket : WebSocket) =>  {
                return this._controller.add(webSocket);
            }).catchError(this._controller.addError.bind(this._controller));
        },{
            onDone : () =>  {
                this._controller.close();
            }});
        return this._controller.stream;
    }
    static _upgrade(request : HttpRequest,_protocolSelector : (protocols : core.DartList<string>) => any,compression : CompressionOptions) : async.Future<WebSocket> {
        let response = request.response;
        if (!_WebSocketTransformerImpl._isUpgradeRequest(request)) {
            ((_) : HttpResponse =>  {
                {
                    _.statusCode = HttpStatus.BAD_REQUEST;
                    _.close();
                    return _;
                }
            })(response);
            return new async.Future.error(new WebSocketException("Invalid WebSocket upgrade request"));
        }
        var upgrade : (protocol : string) => async.Future<WebSocket> = (protocol : string) : async.Future<WebSocket> =>  {
            ((_) : HttpResponse =>  {
                {
                    _.statusCode = HttpStatus.SWITCHING_PROTOCOLS;
                    _.headers.add(HttpHeaders.CONNECTION,"Upgrade");
                    _.headers.add(HttpHeaders.UPGRADE,"websocket");
                    return _;
                }
            })(response);
            let key : string = request.headers.value("Sec-WebSocket-Key");
            let sha1 : _SHA1 = new _SHA1();
            sha1.add(new core.DartString(`${key}${properties._webSocketGUID}`).codeUnits);
            let accept : string = _CryptoUtils.bytesToBase64(sha1.close());
            response.headers.add("Sec-WebSocket-Accept",accept);
            if (protocol != null) {
                response.headers.add("Sec-WebSocket-Protocol",protocol);
            }
            let deflate = _WebSocketTransformerImpl._negotiateCompression(request,response,compression);
            response.headers.contentLength = 0;
            return response.detachSocket().then((socket : any) =>  {
                return new _WebSocketImpl._fromSocket(socket,protocol,compression,true,deflate);
            });
        };
        let protocols = op(Op.INDEX,request.headers,'Sec-WebSocket-Protocol');
        if (protocols != null && _protocolSelector != null) {
            protocols = _HttpParser._tokenizeFieldValue(protocols.join(', '));
            return new async.Future<string>(() =>  {
                return _protocolSelector(protocols);
            }).then((protocol : any) =>  {
                if (protocols.indexOf(protocol) < 0) {
                    throw new WebSocketException("Selected protocol is not in the list of available protocols");
                }
                return protocol;
            }).catchError((error : any) =>  {
                ((_) : HttpResponse =>  {
                    {
                        _.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
                        _.close();
                        return _;
                    }
                })(response);
                throw error;
            }).then(upgrade);
        }else {
            return upgrade(null);
        }
    }
    static _negotiateCompression(request : HttpRequest,response : HttpResponse,compression : CompressionOptions) : _WebSocketPerMessageDeflate {
        let extensionHeader = request.headers.value("Sec-WebSocket-Extensions");
        extensionHeader = ( extensionHeader ) || ( "" );
        let hv = HeaderValue.parse(extensionHeader,{
            valueSeparator : ','});
        if (compression.enabled && hv.value == _WebSocketImpl.PER_MESSAGE_DEFLATE) {
            let info = compression._createHeader(hv);
            response.headers.add("Sec-WebSocket-Extensions",info.headerValue);
            let serverNoContextTakeover = (hv.parameters.containsKey(properties._serverNoContextTakeover) && compression.serverNoContextTakeover);
            let clientNoContextTakeover = (hv.parameters.containsKey(properties._clientNoContextTakeover) && compression.clientNoContextTakeover);
            let deflate = new _WebSocketPerMessageDeflate({
                serverNoContextTakeover : serverNoContextTakeover,clientNoContextTakeover : clientNoContextTakeover,serverMaxWindowBits : info.maxWindowBits,clientMaxWindowBits : info.maxWindowBits,serverSide : true});
            return deflate;
        }
        return null;
    }
    static _isUpgradeRequest(request : HttpRequest) : boolean {
        if (request.method != "GET") {
            return false;
        }
        if (op(Op.INDEX,request.headers,HttpHeaders.CONNECTION) == null) {
            return false;
        }
        let isUpgrade : boolean = false;
        op(Op.INDEX,request.headers,HttpHeaders.CONNECTION).forEach((value : string) =>  {
            if (new core.DartString(value).toLowerCase() == "upgrade") isUpgrade = true;
        });
        if (!isUpgrade) return false;
        let upgrade : string = request.headers.value(HttpHeaders.UPGRADE);
        if (upgrade == null || new core.DartString(upgrade).toLowerCase() != "websocket") {
            return false;
        }
        let version : string = request.headers.value("Sec-WebSocket-Version");
        if (version == null || version != "13") {
            return false;
        }
        let key : string = request.headers.value("Sec-WebSocket-Key");
        if (key == null) {
            return false;
        }
        return true;
    }
}

export namespace _WebSocketPerMessageDeflate {
    export type Constructors = '_WebSocketPerMessageDeflate';
    export type Interface = Omit<_WebSocketPerMessageDeflate, Constructors>;
}
@DartClass
export class _WebSocketPerMessageDeflate {
    serverNoContextTakeover : boolean;

    clientNoContextTakeover : boolean;

    clientMaxWindowBits : number;

    serverMaxWindowBits : number;

    serverSide : boolean;

    decoder : _Filter;

    encoder : _Filter;

    constructor(_namedArguments? : {clientMaxWindowBits? : number,serverMaxWindowBits? : number,serverNoContextTakeover? : boolean,clientNoContextTakeover? : boolean,serverSide? : boolean}) {
    }
    @defaultConstructor
    _WebSocketPerMessageDeflate(_namedArguments? : {clientMaxWindowBits? : number,serverMaxWindowBits? : number,serverNoContextTakeover? : boolean,clientNoContextTakeover? : boolean,serverSide? : boolean}) {
        let {clientMaxWindowBits,serverMaxWindowBits,serverNoContextTakeover,clientNoContextTakeover,serverSide} = Object.assign({
            "clientMaxWindowBits" : _WebSocketImpl.DEFAULT_WINDOW_BITS,
            "serverMaxWindowBits" : _WebSocketImpl.DEFAULT_WINDOW_BITS,
            "serverNoContextTakeover" : false,
            "clientNoContextTakeover" : false,
            "serverSide" : false}, _namedArguments );
        this.clientMaxWindowBits = clientMaxWindowBits;
        this.serverMaxWindowBits = serverMaxWindowBits;
        this.serverNoContextTakeover = serverNoContextTakeover;
        this.clientNoContextTakeover = clientNoContextTakeover;
        this.serverSide = serverSide;
    }
    _ensureDecoder() : void {
        if (op(Op.EQUALS,this.decoder,null)) {
            this.decoder = _Filter._newZLibInflateFilter(this.serverSide ? this.clientMaxWindowBits : this.serverMaxWindowBits,null,true);
        }
    }
    _ensureEncoder() : void {
        if (op(Op.EQUALS,this.encoder,null)) {
            this.encoder = _Filter._newZLibDeflateFilter(false,ZLibOption.DEFAULT_LEVEL,this.serverSide ? this.serverMaxWindowBits : this.clientMaxWindowBits,ZLibOption.DEFAULT_MEM_LEVEL,ZLibOption.STRATEGY_DEFAULT,null,true);
        }
    }
    processIncomingMessage(msg : core.DartList<number>) : typed_data.Uint8List {
        this._ensureDecoder();
        let data = new core.DartList.literal<number>();
        data.addAll(msg);
        data.addAll(new core.DartList.literal(0,0,255,255));
        this.decoder.process(data,0,data.length);
        let result = new core.DartList.literal<number>();
        let out : core.DartList<number>;
        while ((out = this.decoder.processed()) != null){
            result.addAll(out);
        }
        if ((this.serverSide && this.clientNoContextTakeover) || (!this.serverSide && this.serverNoContextTakeover)) {
            this.decoder = null;
        }
        return new typed_data.Uint8List.fromList(result);
    }
    processOutgoingMessage(msg : core.DartList<number>) : core.DartList<number> {
        this._ensureEncoder();
        let result = new core.DartList.literal<number>();
        let buffer : typed_data.Uint8List;
        if (isNot(msg, typed_data.Uint8List)) {
            for(let i = 0; i < msg.length; i++){
                if (msg[i] < 0 || 255 < msg[i]) {
                    throw new core.ArgumentError("List element is not a byte value " + `(value ${msg[i]} at index ${i})`);
                }
            }
            buffer = new typed_data.Uint8List.fromList(msg);
        }else {
            buffer = msg;
        }
        this.encoder.process(buffer,0,buffer.length);
        let out : core.DartList<number>;
        while ((out = this.encoder.processed()) != null){
            result.addAll(out);
        }
        if ((!this.serverSide && this.clientNoContextTakeover) || (this.serverSide && this.serverNoContextTakeover)) {
            this.encoder = null;
        }
        if (result.length > 4) {
            result = result.sublist(0,result.length - 4);
        }
        return result;
    }
}

export namespace _BufferSink {
    export type Constructors = convert.ByteConversionSink.Constructors | '_BufferSink';
    export type Interface = Omit<_BufferSink, Constructors>;
}
@DartClass
export class _BufferSink extends convert.ByteConversionSink {
    builder : BytesBuilder;

    add(chunk : core.DartList<number>) : void {
        this.builder.add(chunk);
    }
    addSlice(chunk : core.DartList<number>,start : number,end : number,isLast : boolean) : void {
        if (is(chunk, typed_data.Uint8List)) {
            let list : typed_data.Uint8List = chunk;
            this.builder.add(new typed_data.Uint8List.view(list.buffer,start,end - start));
        }else {
            this.builder.add(chunk.sublist(start,end));
        }
    }
    close() : void {
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _BufferSink() {
        this.builder = new BytesBuilder({
            copy : false});
    }
}

export namespace ZLibDecoder {
    export type Constructors = convert.Converter.Constructors | 'ZLibDecoder';
    export type Interface = Omit<ZLibDecoder, Constructors>;
}
@DartClass
export class ZLibDecoder extends convert.Converter<core.DartList<number>,core.DartList<number>> {
    windowBits : number;

    dictionary : core.DartList<number>;

    raw : boolean;

    constructor(_namedArguments? : {windowBits? : number,dictionary? : core.DartList<number>,raw? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ZLibDecoder(_namedArguments? : {windowBits? : number,dictionary? : core.DartList<number>,raw? : boolean}) {
        let {windowBits,dictionary,raw} = Object.assign({
            "windowBits" : ZLibOption.DEFAULT_WINDOW_BITS,
            "dictionary" : null,
            "raw" : false}, _namedArguments );
        this.windowBits = windowBits;
        this.dictionary = dictionary;
        this.raw = raw;
        _validateZLibWindowBits(this.windowBits);
    }
    convert(bytes : core.DartList<number>) : core.DartList<number> {
        let sink : _BufferSink = new _BufferSink();
        ((_) : convert.ByteConversionSink =>  {
            {
                _.add(bytes);
                _.close();
                return _;
            }
        })(this.startChunkedConversion(sink));
        return sink.builder.takeBytes();
    }
    startChunkedConversion(sink : core.DartSink<core.DartList<number>>) : convert.ByteConversionSink {
        if (isNot(sink, convert.ByteConversionSink)) {
            sink = new convert.ByteConversionSink.from(sink);
        }
        return new _ZLibDecoderSink(sink,this.windowBits,this.dictionary,this.raw);
    }
}

export namespace ZLibEncoder {
    export type Constructors = convert.Converter.Constructors | 'ZLibEncoder';
    export type Interface = Omit<ZLibEncoder, Constructors>;
}
@DartClass
export class ZLibEncoder extends convert.Converter<core.DartList<number>,core.DartList<number>> {
    gzip : boolean;

    level : number;

    memLevel : number;

    strategy : number;

    windowBits : number;

    dictionary : core.DartList<number>;

    raw : boolean;

    constructor(_namedArguments? : {gzip? : boolean,level? : number,windowBits? : number,memLevel? : number,strategy? : number,dictionary? : core.DartList<number>,raw? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ZLibEncoder(_namedArguments? : {gzip? : boolean,level? : number,windowBits? : number,memLevel? : number,strategy? : number,dictionary? : core.DartList<number>,raw? : boolean}) {
        let {gzip,level,windowBits,memLevel,strategy,dictionary,raw} = Object.assign({
            "gzip" : false,
            "level" : ZLibOption.DEFAULT_LEVEL,
            "windowBits" : ZLibOption.DEFAULT_WINDOW_BITS,
            "memLevel" : ZLibOption.DEFAULT_MEM_LEVEL,
            "strategy" : ZLibOption.STRATEGY_DEFAULT,
            "dictionary" : null,
            "raw" : false}, _namedArguments );
        this.gzip = gzip;
        this.level = level;
        this.windowBits = windowBits;
        this.memLevel = memLevel;
        this.strategy = strategy;
        this.dictionary = dictionary;
        this.raw = raw;
        _validateZLibeLevel(this.level);
        _validateZLibMemLevel(this.memLevel);
        _validateZLibStrategy(this.strategy);
        _validateZLibWindowBits(this.windowBits);
    }
    convert(bytes : core.DartList<number>) : core.DartList<number> {
        let sink : _BufferSink = new _BufferSink();
        ((_) : convert.ByteConversionSink =>  {
            {
                _.add(bytes);
                _.close();
                return _;
            }
        })(this.startChunkedConversion(sink));
        return sink.builder.takeBytes();
    }
    startChunkedConversion(sink : core.DartSink<core.DartList<number>>) : convert.ByteConversionSink {
        if (isNot(sink, convert.ByteConversionSink)) {
            sink = new convert.ByteConversionSink.from(sink);
        }
        return new _ZLibEncoderSink(sink,this.gzip,this.level,this.windowBits,this.memLevel,this.strategy,this.dictionary,this.raw);
    }
}

export namespace ProcessInfo {
    export type Constructors = 'ProcessInfo';
    export type Interface = Omit<ProcessInfo, Constructors>;
}
@DartClass
export class ProcessInfo {
    static get currentRss() : number {
    }
    static get maxRss() : number {
    }
    constructor() {
    }
    @defaultConstructor
    ProcessInfo() {
    }
}

export enum ProcessStartMode {
    NORMAL,
    DETACHED,
    DETACHED_WITH_STDIO
}

export namespace Process {
    export type Constructors = 'Process';
    export type Interface = Omit<Process, Constructors>;
}
@DartClass
export class Process {
    @AbstractProperty
    get exitCode() : async.Future<number>{ throw 'abstract'}
    static start(executable : string,arguments : core.DartList<string>,_namedArguments? : {workingDirectory? : string,environment? : core.DartMap<string,string>,includeParentEnvironment? : boolean,runInShell? : boolean,mode? : ProcessStartMode}) : async.Future<Process> {
        let {workingDirectory,environment,includeParentEnvironment,runInShell,mode} = Object.assign({
            "includeParentEnvironment" : true,
            "runInShell" : false,
            "mode" : ProcessStartMode.NORMAL}, _namedArguments );
    }
    static run(executable : string,arguments : core.DartList<string>,_namedArguments? : {workingDirectory? : string,environment? : core.DartMap<string,string>,includeParentEnvironment? : boolean,runInShell? : boolean,stdoutEncoding? : convert.Encoding,stderrEncoding? : convert.Encoding}) : async.Future<ProcessResult> {
        let {workingDirectory,environment,includeParentEnvironment,runInShell,stdoutEncoding,stderrEncoding} = Object.assign({
            "includeParentEnvironment" : true,
            "runInShell" : false,
            "stdoutEncoding" : properties.SYSTEM_ENCODING,
            "stderrEncoding" : properties.SYSTEM_ENCODING}, _namedArguments );
    }
    static runSync(executable : string,arguments : core.DartList<string>,_namedArguments? : {workingDirectory? : string,environment? : core.DartMap<string,string>,includeParentEnvironment? : boolean,runInShell? : boolean,stdoutEncoding? : convert.Encoding,stderrEncoding? : convert.Encoding}) : ProcessResult {
        let {workingDirectory,environment,includeParentEnvironment,runInShell,stdoutEncoding,stderrEncoding} = Object.assign({
            "includeParentEnvironment" : true,
            "runInShell" : false,
            "stdoutEncoding" : properties.SYSTEM_ENCODING,
            "stderrEncoding" : properties.SYSTEM_ENCODING}, _namedArguments );
    }
    static killPid(pid : number,signal? : ProcessSignal) : boolean {
        signal = signal || ProcessSignal.SIGTERM;
    }
    @AbstractProperty
    get stdout() : async.DartStream<core.DartList<number>>{ throw 'abstract'}
    @AbstractProperty
    get stderr() : async.DartStream<core.DartList<number>>{ throw 'abstract'}
    @AbstractProperty
    get stdin() : IOSink{ throw 'abstract'}
    @AbstractProperty
    get pid() : number{ throw 'abstract'}
    @Abstract
    kill(signal? : ProcessSignal) : boolean{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Process() {
    }
}

export namespace ProcessResult {
    export type Constructors = 'ProcessResult';
    export type Interface = Omit<ProcessResult, Constructors>;
}
@DartClass
export class ProcessResult {
    exitCode : number;

    stdout;

    stderr;

    pid : number;

    constructor(pid : number,exitCode : number,stdout : any,stderr : any) {
    }
    @defaultConstructor
    ProcessResult(pid : number,exitCode : number,stdout : any,stderr : any) {
        this.pid = pid;
        this.exitCode = exitCode;
        this.stdout = stdout;
        this.stderr = stderr;
    }
}

export namespace ProcessSignal {
    export type Constructors = '_';
    export type Interface = Omit<ProcessSignal, Constructors>;
}
@DartClass
export class ProcessSignal {
    private static __$SIGHUP : ProcessSignal;
    static get SIGHUP() : ProcessSignal { 
        if (this.__$SIGHUP===undefined) {
            this.__$SIGHUP = new ProcessSignal._(1,"SIGHUP");
        }
        return this.__$SIGHUP;
    }

    private static __$SIGINT : ProcessSignal;
    static get SIGINT() : ProcessSignal { 
        if (this.__$SIGINT===undefined) {
            this.__$SIGINT = new ProcessSignal._(2,"SIGINT");
        }
        return this.__$SIGINT;
    }

    private static __$SIGQUIT : ProcessSignal;
    static get SIGQUIT() : ProcessSignal { 
        if (this.__$SIGQUIT===undefined) {
            this.__$SIGQUIT = new ProcessSignal._(3,"SIGQUIT");
        }
        return this.__$SIGQUIT;
    }

    private static __$SIGILL : ProcessSignal;
    static get SIGILL() : ProcessSignal { 
        if (this.__$SIGILL===undefined) {
            this.__$SIGILL = new ProcessSignal._(4,"SIGILL");
        }
        return this.__$SIGILL;
    }

    private static __$SIGTRAP : ProcessSignal;
    static get SIGTRAP() : ProcessSignal { 
        if (this.__$SIGTRAP===undefined) {
            this.__$SIGTRAP = new ProcessSignal._(5,"SIGTRAP");
        }
        return this.__$SIGTRAP;
    }

    private static __$SIGABRT : ProcessSignal;
    static get SIGABRT() : ProcessSignal { 
        if (this.__$SIGABRT===undefined) {
            this.__$SIGABRT = new ProcessSignal._(6,"SIGABRT");
        }
        return this.__$SIGABRT;
    }

    private static __$SIGBUS : ProcessSignal;
    static get SIGBUS() : ProcessSignal { 
        if (this.__$SIGBUS===undefined) {
            this.__$SIGBUS = new ProcessSignal._(7,"SIGBUS");
        }
        return this.__$SIGBUS;
    }

    private static __$SIGFPE : ProcessSignal;
    static get SIGFPE() : ProcessSignal { 
        if (this.__$SIGFPE===undefined) {
            this.__$SIGFPE = new ProcessSignal._(8,"SIGFPE");
        }
        return this.__$SIGFPE;
    }

    private static __$SIGKILL : ProcessSignal;
    static get SIGKILL() : ProcessSignal { 
        if (this.__$SIGKILL===undefined) {
            this.__$SIGKILL = new ProcessSignal._(9,"SIGKILL");
        }
        return this.__$SIGKILL;
    }

    private static __$SIGUSR1 : ProcessSignal;
    static get SIGUSR1() : ProcessSignal { 
        if (this.__$SIGUSR1===undefined) {
            this.__$SIGUSR1 = new ProcessSignal._(10,"SIGUSR1");
        }
        return this.__$SIGUSR1;
    }

    private static __$SIGSEGV : ProcessSignal;
    static get SIGSEGV() : ProcessSignal { 
        if (this.__$SIGSEGV===undefined) {
            this.__$SIGSEGV = new ProcessSignal._(11,"SIGSEGV");
        }
        return this.__$SIGSEGV;
    }

    private static __$SIGUSR2 : ProcessSignal;
    static get SIGUSR2() : ProcessSignal { 
        if (this.__$SIGUSR2===undefined) {
            this.__$SIGUSR2 = new ProcessSignal._(12,"SIGUSR2");
        }
        return this.__$SIGUSR2;
    }

    private static __$SIGPIPE : ProcessSignal;
    static get SIGPIPE() : ProcessSignal { 
        if (this.__$SIGPIPE===undefined) {
            this.__$SIGPIPE = new ProcessSignal._(13,"SIGPIPE");
        }
        return this.__$SIGPIPE;
    }

    private static __$SIGALRM : ProcessSignal;
    static get SIGALRM() : ProcessSignal { 
        if (this.__$SIGALRM===undefined) {
            this.__$SIGALRM = new ProcessSignal._(14,"SIGALRM");
        }
        return this.__$SIGALRM;
    }

    private static __$SIGTERM : ProcessSignal;
    static get SIGTERM() : ProcessSignal { 
        if (this.__$SIGTERM===undefined) {
            this.__$SIGTERM = new ProcessSignal._(15,"SIGTERM");
        }
        return this.__$SIGTERM;
    }

    private static __$SIGCHLD : ProcessSignal;
    static get SIGCHLD() : ProcessSignal { 
        if (this.__$SIGCHLD===undefined) {
            this.__$SIGCHLD = new ProcessSignal._(17,"SIGCHLD");
        }
        return this.__$SIGCHLD;
    }

    private static __$SIGCONT : ProcessSignal;
    static get SIGCONT() : ProcessSignal { 
        if (this.__$SIGCONT===undefined) {
            this.__$SIGCONT = new ProcessSignal._(18,"SIGCONT");
        }
        return this.__$SIGCONT;
    }

    private static __$SIGSTOP : ProcessSignal;
    static get SIGSTOP() : ProcessSignal { 
        if (this.__$SIGSTOP===undefined) {
            this.__$SIGSTOP = new ProcessSignal._(19,"SIGSTOP");
        }
        return this.__$SIGSTOP;
    }

    private static __$SIGTSTP : ProcessSignal;
    static get SIGTSTP() : ProcessSignal { 
        if (this.__$SIGTSTP===undefined) {
            this.__$SIGTSTP = new ProcessSignal._(20,"SIGTSTP");
        }
        return this.__$SIGTSTP;
    }

    private static __$SIGTTIN : ProcessSignal;
    static get SIGTTIN() : ProcessSignal { 
        if (this.__$SIGTTIN===undefined) {
            this.__$SIGTTIN = new ProcessSignal._(21,"SIGTTIN");
        }
        return this.__$SIGTTIN;
    }

    private static __$SIGTTOU : ProcessSignal;
    static get SIGTTOU() : ProcessSignal { 
        if (this.__$SIGTTOU===undefined) {
            this.__$SIGTTOU = new ProcessSignal._(22,"SIGTTOU");
        }
        return this.__$SIGTTOU;
    }

    private static __$SIGURG : ProcessSignal;
    static get SIGURG() : ProcessSignal { 
        if (this.__$SIGURG===undefined) {
            this.__$SIGURG = new ProcessSignal._(23,"SIGURG");
        }
        return this.__$SIGURG;
    }

    private static __$SIGXCPU : ProcessSignal;
    static get SIGXCPU() : ProcessSignal { 
        if (this.__$SIGXCPU===undefined) {
            this.__$SIGXCPU = new ProcessSignal._(24,"SIGXCPU");
        }
        return this.__$SIGXCPU;
    }

    private static __$SIGXFSZ : ProcessSignal;
    static get SIGXFSZ() : ProcessSignal { 
        if (this.__$SIGXFSZ===undefined) {
            this.__$SIGXFSZ = new ProcessSignal._(25,"SIGXFSZ");
        }
        return this.__$SIGXFSZ;
    }

    private static __$SIGVTALRM : ProcessSignal;
    static get SIGVTALRM() : ProcessSignal { 
        if (this.__$SIGVTALRM===undefined) {
            this.__$SIGVTALRM = new ProcessSignal._(26,"SIGVTALRM");
        }
        return this.__$SIGVTALRM;
    }

    private static __$SIGPROF : ProcessSignal;
    static get SIGPROF() : ProcessSignal { 
        if (this.__$SIGPROF===undefined) {
            this.__$SIGPROF = new ProcessSignal._(27,"SIGPROF");
        }
        return this.__$SIGPROF;
    }

    private static __$SIGWINCH : ProcessSignal;
    static get SIGWINCH() : ProcessSignal { 
        if (this.__$SIGWINCH===undefined) {
            this.__$SIGWINCH = new ProcessSignal._(28,"SIGWINCH");
        }
        return this.__$SIGWINCH;
    }

    private static __$SIGPOLL : ProcessSignal;
    static get SIGPOLL() : ProcessSignal { 
        if (this.__$SIGPOLL===undefined) {
            this.__$SIGPOLL = new ProcessSignal._(29,"SIGPOLL");
        }
        return this.__$SIGPOLL;
    }

    private static __$SIGSYS : ProcessSignal;
    static get SIGSYS() : ProcessSignal { 
        if (this.__$SIGSYS===undefined) {
            this.__$SIGSYS = new ProcessSignal._(31,"SIGSYS");
        }
        return this.__$SIGSYS;
    }

    _signalNumber : number;

    _name : string;

    @namedConstructor
    _(_signalNumber : number,_name : string) {
        this._signalNumber = _signalNumber;
        this._name = _name;
    }
    static _ : new(_signalNumber : number,_name : string) => ProcessSignal;

    toString() : string {
        return this._name;
    }
    watch() : async.DartStream<ProcessSignal> {
        return _ProcessUtils._watchSignal(this);
    }
}

export namespace SignalException {
    export type Constructors = 'SignalException';
    export type Interface = Omit<SignalException, Constructors>;
}
@DartClass
@Implements(IOException)
export class SignalException implements IOException.Interface {
    message : string;

    osError;

    constructor(message : string,osError? : any) {
    }
    @defaultConstructor
    SignalException(message : string,osError? : any) {
        osError = osError || null;
        this.message = message;
        this.osError = osError;
    }
    toString() : string {
        let msg = "";
        if (this.osError != null) {
            msg = `, osError: ${this.osError}`;
        }
        return `SignalException: ${this.message}${msg}`;
    }
}

export namespace ProcessException {
    export type Constructors = 'ProcessException';
    export type Interface = Omit<ProcessException, Constructors>;
}
@DartClass
@Implements(IOException)
export class ProcessException implements IOException.Interface {
    executable : string;

    arguments : core.DartList<string>;

    message : string;

    errorCode : number;

    constructor(executable : string,arguments : core.DartList<string>,message? : string,errorCode? : number) {
    }
    @defaultConstructor
    ProcessException(executable : string,arguments : core.DartList<string>,message? : string,errorCode? : number) {
        message = message || "";
        errorCode = errorCode || 0;
        this.executable = executable;
        this.arguments = arguments;
        this.message = message;
        this.errorCode = errorCode;
    }
    toString() : string {
        let msg = (this.message == null) ? `OS error code: ${this.errorCode}` : this.message;
        let args = this.arguments.join(' ');
        return `ProcessException: ${msg}\n  Command: ${this.executable} ${args}`;
    }
}

export namespace SecureServerSocket {
    export type Constructors = async.DartStream.Constructors | '_';
    export type Interface = Omit<SecureServerSocket, Constructors>;
}
@DartClass
export class SecureServerSocket extends async.DartStream<SecureSocket> {
    _socket : RawSecureServerSocket;

    @namedConstructor
    _(_socket : RawSecureServerSocket) {
        this._socket = _socket;
    }
    static _ : new(_socket : RawSecureServerSocket) => SecureServerSocket;

    static bind(address : any,port : number,context : SecurityContext,_namedArguments? : {backlog? : number,v6Only? : boolean,requestClientCertificate? : boolean,requireClientCertificate? : boolean,supportedProtocols? : core.DartList<string>,shared? : boolean}) : async.Future<SecureServerSocket> {
        let {backlog,v6Only,requestClientCertificate,requireClientCertificate,supportedProtocols,shared} = Object.assign({
            "backlog" : 0,
            "v6Only" : false,
            "requestClientCertificate" : false,
            "requireClientCertificate" : false,
            "shared" : false}, _namedArguments );
        return RawSecureServerSocket.bind(address,port,context,{
            backlog : backlog,v6Only : v6Only,requestClientCertificate : requestClientCertificate,requireClientCertificate : requireClientCertificate,supportedProtocols : supportedProtocols,shared : shared}).then((serverSocket : any) =>  {
            return new SecureServerSocket._(serverSocket);
        });
    }
    listen(onData : (socket : SecureSocket) => void,_namedArguments? : {onError? : Function,onDone? : () => void,cancelOnError? : boolean}) : async.DartStreamSubscription<SecureSocket> {
        let {onError,onDone,cancelOnError} = Object.assign({
        }, _namedArguments );
        return this._socket.map((rawSocket : any) =>  {
            return new SecureSocket._(rawSocket);
        }).listen(onData,{
            onError : onError,onDone : onDone,cancelOnError : cancelOnError});
    }
    get port() : number {
        return this._socket.port;
    }
    get address() : InternetAddress {
        return this._socket.address;
    }
    close() : async.Future<SecureServerSocket> {
        return this._socket.close().then((_ : any) =>  {
            return this;
        });
    }
    set _owner(owner : any) {
        this._socket._owner = owner;
    }
}

export namespace RawSecureServerSocket {
    export type Constructors = async.DartStream.Constructors | '_';
    export type Interface = Omit<RawSecureServerSocket, Constructors>;
}
@DartClass
export class RawSecureServerSocket extends async.DartStream<RawSecureSocket> {
    _socket : RawServerSocket;

    _controller : async.DartStreamController<RawSecureSocket>;

    _subscription : async.DartStreamSubscription<RawSocket>;

    _context : SecurityContext;

    requestClientCertificate : boolean;

    requireClientCertificate : boolean;

    supportedProtocols : core.DartList<string>;

    _closed : boolean;

    @namedConstructor
    _(_socket : RawServerSocket,_context : SecurityContext,requestClientCertificate : boolean,requireClientCertificate : boolean,supportedProtocols : core.DartList<string>) {
        this._closed = false;
        this._socket = _socket;
        this._context = _context;
        this.requestClientCertificate = requestClientCertificate;
        this.requireClientCertificate = requireClientCertificate;
        this.supportedProtocols = supportedProtocols;
        this._controller = new async.DartStreamController<RawSecureSocket>({
            sync : true,onListen : this._onSubscriptionStateChange.bind(this),onPause : this._onPauseStateChange.bind(this),onResume : this._onPauseStateChange.bind(this),onCancel : this._onSubscriptionStateChange.bind(this)});
    }
    static _ : new(_socket : RawServerSocket,_context : SecurityContext,requestClientCertificate : boolean,requireClientCertificate : boolean,supportedProtocols : core.DartList<string>) => RawSecureServerSocket;

    static bind(address : any,port : number,context : SecurityContext,_namedArguments? : {backlog? : number,v6Only? : boolean,requestClientCertificate? : boolean,requireClientCertificate? : boolean,supportedProtocols? : core.DartList<string>,shared? : boolean}) : async.Future<RawSecureServerSocket> {
        let {backlog,v6Only,requestClientCertificate,requireClientCertificate,supportedProtocols,shared} = Object.assign({
            "backlog" : 0,
            "v6Only" : false,
            "requestClientCertificate" : false,
            "requireClientCertificate" : false,
            "shared" : false}, _namedArguments );
        return RawServerSocket.bind(address,port,{
            backlog : backlog,v6Only : v6Only,shared : shared}).then((serverSocket : any) =>  {
            return new RawSecureServerSocket._(serverSocket,context,requestClientCertificate,requireClientCertificate,supportedProtocols);
        });
    }
    listen(onData : (s : RawSecureSocket) => void,_namedArguments? : {onError? : Function,onDone? : () => void,cancelOnError? : boolean}) : async.DartStreamSubscription<RawSecureSocket> {
        let {onError,onDone,cancelOnError} = Object.assign({
        }, _namedArguments );
        return this._controller.stream.listen(onData,{
            onError : onError,onDone : onDone,cancelOnError : cancelOnError});
    }
    get port() : number {
        return this._socket.port;
    }
    get address() : InternetAddress {
        return this._socket.address;
    }
    close() : async.Future<RawSecureServerSocket> {
        this._closed = true;
        return this._socket.close().then((_ : any) =>  {
            return this;
        });
    }
    _onData(connection : RawSocket) : void {
        let remotePort;
        try {
            remotePort = connection.remotePort;
        } catch (__error__) {

            {
                let e = __error__;
                return;
            }
        }
        _RawSecureSocket.connect(connection.address,remotePort,{
            context : this._context,is_server : true,socket : connection,requestClientCertificate : this.requestClientCertificate,requireClientCertificate : this.requireClientCertificate,supportedProtocols : this.supportedProtocols}).then((secureConnection : RawSecureSocket) =>  {
            if (this._closed) {
                secureConnection.close();
            }else {
                this._controller.add(secureConnection);
            }
        }).catchError((e : any,s : any) =>  {
            if (!this._closed) {
                this._controller.addError(e,s);
            }
        });
    }
    _onPauseStateChange() : void {
        if (this._controller.isPaused) {
            this._subscription.pause();
        }else {
            this._subscription.resume();
        }
    }
    _onSubscriptionStateChange() : void {
        if (this._controller.hasListener) {
            this._subscription = this._socket.listen(this._onData.bind(this),{
                onError : this._controller.addError.bind(this._controller),onDone : this._controller.close.bind(this._controller)});
        }else {
            this.close();
        }
    }
    set _owner(owner : any) {
        (this._socket as any)._owner = owner;
    }
}

export namespace SecureSocket {
    export type Constructors = never;
    export type Interface = Omit<SecureSocket, Constructors>;
}
@DartClass
@Implements(Socket)
export class SecureSocket implements Socket.Interface {
    @namedFactory
    static $_(rawSocket : RawSecureSocket) : SecureSocket {
    }
    static _ : new(rawSocket : RawSecureSocket) => SecureSocket;

    static connect(host : any,port : number,_namedArguments? : {context? : SecurityContext,onBadCertificate? : (certificate : X509Certificate) => boolean,supportedProtocols? : core.DartList<string>}) : async.Future<SecureSocket> {
        let {context,onBadCertificate,supportedProtocols} = Object.assign({
        }, _namedArguments );
        return RawSecureSocket.connect(host,port,{
            context : context,onBadCertificate : onBadCertificate,supportedProtocols : supportedProtocols}).then((rawSocket : any) =>  {
            return new SecureSocket._(rawSocket);
        });
    }
    static secure(socket : Socket,_namedArguments? : {host? : any,context? : SecurityContext,onBadCertificate? : (certificate : X509Certificate) => boolean}) : async.Future<SecureSocket> {
        let {host,context,onBadCertificate} = Object.assign({
        }, _namedArguments );
        return ((socket as any)._detachRaw() as async.Future<any>).then((detachedRaw : any) =>  {
            return RawSecureSocket.secure(op(Op.INDEX,detachedRaw,0) as RawSocket,{
                subscription : op(Op.INDEX,detachedRaw,1) as async.DartStreamSubscription<RawSocketEvent>,host : host,context : context,onBadCertificate : onBadCertificate});
        }).then((raw : any) =>  {
            return new SecureSocket._(raw);
        });
    }
    static secureServer(socket : Socket,context : SecurityContext,_namedArguments? : {bufferedData? : core.DartList<number>,requestClientCertificate? : boolean,requireClientCertificate? : boolean,supportedProtocols? : core.DartList<string>}) : async.Future<SecureSocket> {
        let {bufferedData,requestClientCertificate,requireClientCertificate,supportedProtocols} = Object.assign({
            "requestClientCertificate" : false,
            "requireClientCertificate" : false}, _namedArguments );
        return ((socket as any)._detachRaw() as async.Future<any>).then((detachedRaw : any) =>  {
            return RawSecureSocket.secureServer(op(Op.INDEX,detachedRaw,0) as RawSocket,context,{
                subscription : op(Op.INDEX,detachedRaw,1) as async.DartStreamSubscription<RawSocketEvent>,bufferedData : bufferedData,requestClientCertificate : requestClientCertificate,requireClientCertificate : requireClientCertificate,supportedProtocols : supportedProtocols});
        }).then((raw : any) =>  {
            return new SecureSocket._(raw);
        });
    }
    @AbstractProperty
    get peerCertificate() : X509Certificate{ throw 'abstract'}
    @AbstractProperty
    get selectedProtocol() : string{ throw 'abstract'}
    @Abstract
    renegotiate(_namedArguments? : {useSessionCache? : boolean,requestClientCertificate? : boolean,requireClientCertificate? : boolean}) : void{ throw 'abstract'}
}

export namespace RawSecureSocket {
    export type Constructors = 'RawSecureSocket';
    export type Interface = Omit<RawSecureSocket, Constructors>;
}
@DartClass
@Implements(RawSocket)
export class RawSecureSocket implements RawSocket.Interface {
    static connect(host : any,port : number,_namedArguments? : {context? : SecurityContext,onBadCertificate? : (certificate : X509Certificate) => boolean,supportedProtocols? : core.DartList<string>}) : async.Future<RawSecureSocket> {
        let {context,onBadCertificate,supportedProtocols} = Object.assign({
        }, _namedArguments );
        _RawSecureSocket._verifyFields(host,port,false,false,false,onBadCertificate);
        return RawSocket.connect(host,port).then((socket : any) =>  {
            return RawSecureSocket.secure(socket,{
                context : context,onBadCertificate : onBadCertificate,supportedProtocols : supportedProtocols});
        });
    }
    static secure(socket : RawSocket,_namedArguments? : {subscription? : async.DartStreamSubscription<RawSocketEvent>,host? : any,context? : SecurityContext,onBadCertificate? : (certificate : X509Certificate) => boolean,supportedProtocols? : core.DartList<string>}) : async.Future<RawSecureSocket> {
        let {subscription,host,context,onBadCertificate,supportedProtocols} = Object.assign({
        }, _namedArguments );
        socket.readEventsEnabled = false;
        socket.writeEventsEnabled = false;
        return _RawSecureSocket.connect(host != null ? host : socket.address.host,socket.port,{
            is_server : false,socket : socket,subscription : subscription,context : context,onBadCertificate : onBadCertificate,supportedProtocols : supportedProtocols});
    }
    static secureServer(socket : RawSocket,context : SecurityContext,_namedArguments? : {subscription? : async.DartStreamSubscription<RawSocketEvent>,bufferedData? : core.DartList<number>,requestClientCertificate? : boolean,requireClientCertificate? : boolean,supportedProtocols? : core.DartList<string>}) : async.Future<RawSecureSocket> {
        let {subscription,bufferedData,requestClientCertificate,requireClientCertificate,supportedProtocols} = Object.assign({
            "requestClientCertificate" : false,
            "requireClientCertificate" : false}, _namedArguments );
        socket.readEventsEnabled = false;
        socket.writeEventsEnabled = false;
        return _RawSecureSocket.connect(socket.address,socket.remotePort,{
            context : context,is_server : true,socket : socket,subscription : subscription,bufferedData : bufferedData,requestClientCertificate : requestClientCertificate,requireClientCertificate : requireClientCertificate,supportedProtocols : supportedProtocols});
    }
    @Abstract
    renegotiate(_namedArguments? : {useSessionCache? : boolean,requestClientCertificate? : boolean,requireClientCertificate? : boolean}) : void{ throw 'abstract'}
    @AbstractProperty
    get peerCertificate() : X509Certificate{ throw 'abstract'}
    @AbstractProperty
    get selectedProtocol() : string{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    RawSecureSocket() {
    }
}

export namespace X509Certificate {
    export type Constructors = never;
    export type Interface = Omit<X509Certificate, Constructors>;
}
@DartClass
export class X509Certificate {
    @namedFactory
    static $_() : X509Certificate {
    }
    static _ : new() => X509Certificate;

    @AbstractProperty
    get subject() : string{ throw 'abstract'}
    @AbstractProperty
    get issuer() : string{ throw 'abstract'}
    @AbstractProperty
    get startValidity() : core.DartDateTime{ throw 'abstract'}
    @AbstractProperty
    get endValidity() : core.DartDateTime{ throw 'abstract'}
}

export namespace _FilterStatus {
    export type Constructors = '_FilterStatus';
    export type Interface = Omit<_FilterStatus, Constructors>;
}
@DartClass
export class _FilterStatus {
    progress : boolean;

    readEmpty : boolean;

    writeEmpty : boolean;

    readPlaintextNoLongerEmpty : boolean;

    writePlaintextNoLongerFull : boolean;

    readEncryptedNoLongerFull : boolean;

    writeEncryptedNoLongerEmpty : boolean;

    constructor() {
    }
    @defaultConstructor
    _FilterStatus() {
        this.progress = false;
        this.readEmpty = true;
        this.writeEmpty = true;
        this.readPlaintextNoLongerEmpty = false;
        this.writePlaintextNoLongerFull = false;
        this.readEncryptedNoLongerFull = false;
        this.writeEncryptedNoLongerEmpty = false;
    }
}

export namespace _RawSecureSocket {
    export type Constructors = async.DartStream.Constructors | '_RawSecureSocket';
    export type Interface = Omit<_RawSecureSocket, Constructors>;
}
@DartClass
@Implements(RawSecureSocket)
export class _RawSecureSocket extends async.DartStream<RawSocketEvent> implements RawSecureSocket.Interface {
    private static __$HANDSHAKE : number;
    static get HANDSHAKE() : number { 
        if (this.__$HANDSHAKE===undefined) {
            this.__$HANDSHAKE = 201;
        }
        return this.__$HANDSHAKE;
    }
    static set HANDSHAKE(__$value : number)  { 
        this.__$HANDSHAKE = __$value;
    }

    private static __$CONNECTED : number;
    static get CONNECTED() : number { 
        if (this.__$CONNECTED===undefined) {
            this.__$CONNECTED = 202;
        }
        return this.__$CONNECTED;
    }
    static set CONNECTED(__$value : number)  { 
        this.__$CONNECTED = __$value;
    }

    private static __$CLOSED : number;
    static get CLOSED() : number { 
        if (this.__$CLOSED===undefined) {
            this.__$CLOSED = 203;
        }
        return this.__$CLOSED;
    }
    static set CLOSED(__$value : number)  { 
        this.__$CLOSED = __$value;
    }

    private static __$READ_PLAINTEXT : number;
    static get READ_PLAINTEXT() : number { 
        if (this.__$READ_PLAINTEXT===undefined) {
            this.__$READ_PLAINTEXT = 0;
        }
        return this.__$READ_PLAINTEXT;
    }
    static set READ_PLAINTEXT(__$value : number)  { 
        this.__$READ_PLAINTEXT = __$value;
    }

    private static __$WRITE_PLAINTEXT : number;
    static get WRITE_PLAINTEXT() : number { 
        if (this.__$WRITE_PLAINTEXT===undefined) {
            this.__$WRITE_PLAINTEXT = 1;
        }
        return this.__$WRITE_PLAINTEXT;
    }
    static set WRITE_PLAINTEXT(__$value : number)  { 
        this.__$WRITE_PLAINTEXT = __$value;
    }

    private static __$READ_ENCRYPTED : number;
    static get READ_ENCRYPTED() : number { 
        if (this.__$READ_ENCRYPTED===undefined) {
            this.__$READ_ENCRYPTED = 2;
        }
        return this.__$READ_ENCRYPTED;
    }
    static set READ_ENCRYPTED(__$value : number)  { 
        this.__$READ_ENCRYPTED = __$value;
    }

    private static __$WRITE_ENCRYPTED : number;
    static get WRITE_ENCRYPTED() : number { 
        if (this.__$WRITE_ENCRYPTED===undefined) {
            this.__$WRITE_ENCRYPTED = 3;
        }
        return this.__$WRITE_ENCRYPTED;
    }
    static set WRITE_ENCRYPTED(__$value : number)  { 
        this.__$WRITE_ENCRYPTED = __$value;
    }

    private static __$NUM_BUFFERS : number;
    static get NUM_BUFFERS() : number { 
        if (this.__$NUM_BUFFERS===undefined) {
            this.__$NUM_BUFFERS = 4;
        }
        return this.__$NUM_BUFFERS;
    }
    static set NUM_BUFFERS(__$value : number)  { 
        this.__$NUM_BUFFERS = __$value;
    }

    static _isBufferEncrypted(identifier : number) : boolean {
        return identifier >= _RawSecureSocket.READ_ENCRYPTED;
    }
    _socket : RawSocket;

    _handshakeComplete : async.DartCompleter<_RawSecureSocket>;

    _controller : async.DartStreamController<RawSocketEvent>;

    _stream : async.DartStream<RawSocketEvent>;

    _socketSubscription : async.DartStreamSubscription<RawSocketEvent>;

    _bufferedData : core.DartList<number>;

    _bufferedDataIndex : number;

    address : InternetAddress;

    is_server : boolean;

    context : SecurityContext;

    requestClientCertificate : boolean;

    requireClientCertificate : boolean;

    onBadCertificate : Function;

    _status;

    _writeEventsEnabled : boolean;

    _readEventsEnabled : boolean;

    _pauseCount : number;

    _pendingReadEvent : boolean;

    _socketClosedRead : boolean;

    _socketClosedWrite : boolean;

    _closedRead : boolean;

    _closedWrite : boolean;

    _closeCompleter : async.DartCompleter<RawSecureSocket>;

    _filterStatus : _FilterStatus;

    _connectPending : boolean;

    _filterPending : boolean;

    _filterActive : boolean;

    _secureFilter : _SecureFilter;

    _selectedProtocol : string;

    static connect(host : any,requestedPort : number,_namedArguments? : {is_server? : boolean,context? : SecurityContext,socket? : RawSocket,subscription? : async.DartStreamSubscription<RawSocketEvent>,bufferedData? : core.DartList<number>,requestClientCertificate? : boolean,requireClientCertificate? : boolean,onBadCertificate? : (certificate : X509Certificate) => boolean,supportedProtocols? : core.DartList<string>}) : async.Future<_RawSecureSocket> {
        let {is_server,context,socket,subscription,bufferedData,requestClientCertificate,requireClientCertificate,onBadCertificate,supportedProtocols} = Object.assign({
            "requestClientCertificate" : false,
            "requireClientCertificate" : false}, _namedArguments );
        _RawSecureSocket._verifyFields(host,requestedPort,is_server,requestClientCertificate,requireClientCertificate,onBadCertificate);
        if (is(host, InternetAddress)) host = host.host;
        let address : InternetAddress = socket.address;
        if (host != null) {
            address = InternetAddress._cloneWithNewHost(address,host);
        }
        return new _RawSecureSocket(address,requestedPort,is_server,context,socket,subscription,bufferedData,requestClientCertificate,requireClientCertificate,onBadCertificate,supportedProtocols)._handshakeComplete.future;
    }
    constructor(address : InternetAddress,requestedPort : number,is_server : boolean,context : SecurityContext,_socket : RawSocket,_socketSubscription : async.DartStreamSubscription<RawSocketEvent>,_bufferedData : core.DartList<number>,requestClientCertificate : boolean,requireClientCertificate : boolean,onBadCertificate : Function,supportedProtocols : core.DartList<string>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RawSecureSocket(address : InternetAddress,requestedPort : number,is_server : boolean,context : SecurityContext,_socket : RawSocket,_socketSubscription : async.DartStreamSubscription<RawSocketEvent>,_bufferedData : core.DartList<number>,requestClientCertificate : boolean,requireClientCertificate : boolean,onBadCertificate : Function,supportedProtocols : core.DartList<string>) {
        this._handshakeComplete = new async.DartCompleter<_RawSecureSocket>();
        this._bufferedDataIndex = 0;
        this._status = _RawSecureSocket.HANDSHAKE;
        this._writeEventsEnabled = true;
        this._readEventsEnabled = true;
        this._pauseCount = 0;
        this._pendingReadEvent = false;
        this._socketClosedRead = false;
        this._socketClosedWrite = false;
        this._closedRead = false;
        this._closedWrite = false;
        this._closeCompleter = new async.DartCompleter<RawSecureSocket>();
        this._filterStatus = new _FilterStatus();
        this._connectPending = true;
        this._filterPending = false;
        this._filterActive = false;
        this._secureFilter = new _SecureFilter();
        this.address = address;
        this.is_server = is_server;
        this.context = context;
        this._socket = _socket;
        this._socketSubscription = _socketSubscription;
        this._bufferedData = _bufferedData;
        this.requestClientCertificate = requestClientCertificate;
        this.requireClientCertificate = requireClientCertificate;
        this.onBadCertificate = onBadCertificate;
        if (op(Op.EQUALS,this.context,null)) {
            this.context = SecurityContext.defaultContext;
        }
        this._controller = new async.DartStreamController<RawSocketEvent>({
            sync : true,onListen : this._onSubscriptionStateChange.bind(this),onPause : this._onPauseStateChange.bind(this),onResume : this._onPauseStateChange.bind(this),onCancel : this._onSubscriptionStateChange.bind(this)});
        this._stream = this._controller.stream;
        this._secureFilter.init();
        this._secureFilter.registerHandshakeCompleteCallback(this._secureHandshakeCompleteHandler.bind(this));
        if (this.onBadCertificate != null) {
            this._secureFilter.registerBadCertificateCallback(this._onBadCertificateWrapper.bind(this));
        }
        this._socket.readEventsEnabled = true;
        this._socket.writeEventsEnabled = false;
        if (op(Op.EQUALS,this._socketSubscription,null)) {
            this._socketSubscription = this._socket.listen(this._eventDispatcher.bind(this),{
                onError : this._reportError.bind(this),onDone : this._doneHandler.bind(this)});
        }else {
            if (this._socketSubscription.isPaused) {
                this._socket.close();
                throw new core.ArgumentError("Subscription passed to TLS upgrade is paused");
            }
            let s : any = this._socket;
            if (s._socket.closedReadEventSent) {
                this._eventDispatcher(RawSocketEvent.READ_CLOSED);
            }
            ((_) : async.DartStreamSubscription<RawSocketEvent> =>  {
                {
                    _.onData(this._eventDispatcher.bind(this));
                    _.onError(this._reportError.bind(this));
                    _.onDone(this._doneHandler.bind(this));
                    return _;
                }
            })(this._socketSubscription);
        }
        try {
            let encodedProtocols = SecurityContext._protocolsToLengthEncoding(supportedProtocols);
            this._secureFilter.connect(this.address.host,this.context,this.is_server,this.requestClientCertificate || this.requireClientCertificate,this.requireClientCertificate,encodedProtocols);
            this._secureHandshake();
        } catch (__error__) {

            {
                let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                this._reportError(e,s);
            }
        }
    }
    listen(onData : (data : RawSocketEvent) => void,_namedArguments? : {onError? : Function,onDone? : () => void,cancelOnError? : boolean}) : async.DartStreamSubscription<RawSocketEvent> {
        let {onError,onDone,cancelOnError} = Object.assign({
        }, _namedArguments );
        this._sendWriteEvent();
        return this._stream.listen(onData,{
            onError : onError,onDone : onDone,cancelOnError : cancelOnError});
    }
    static _verifyFields(host : any,requestedPort : number,is_server : boolean,requestClientCertificate : boolean,requireClientCertificate : boolean,onBadCertificate : Function) : void {
        if (isNot(host, "string") && isNot(host, InternetAddress)) {
            throw new core.ArgumentError("host is not a String or an InternetAddress");
        }
        if (isNot(requestedPort, "number")) {
            throw new core.ArgumentError("requestedPort is not an int");
        }
        if (requestedPort < 0 || requestedPort > 65535) {
            throw new core.ArgumentError("requestedPort is not in the range 0..65535");
        }
        if (isNot(requestClientCertificate, "boolean")) {
            throw new core.ArgumentError("requestClientCertificate is not a bool");
        }
        if (isNot(requireClientCertificate, "boolean")) {
            throw new core.ArgumentError("requireClientCertificate is not a bool");
        }
        if (onBadCertificate != null && isNot(onBadCertificate, "Function")) {
            throw new core.ArgumentError("onBadCertificate is not null or a Function");
        }
    }
    get port() : number {
        return this._socket.port;
    }
    get remoteAddress() : InternetAddress {
        return this._socket.remoteAddress;
    }
    get remotePort() : number {
        return this._socket.remotePort;
    }
    set _owner(owner : any) {
        (this._socket as any)._owner = owner;
    }
    available() : number {
        return this._status != _RawSecureSocket.CONNECTED ? 0 : this._secureFilter.buffers[_RawSecureSocket.READ_PLAINTEXT].length;
    }
    close() : async.Future<RawSecureSocket> {
        this.shutdown(SocketDirection.BOTH);
        return this._closeCompleter.future;
    }
    _completeCloseCompleter(dummy? : RawSocket) : void {
        if (!this._closeCompleter.isCompleted) this._closeCompleter.complete(this);
    }
    _close() : void {
        this._closedWrite = true;
        this._closedRead = true;
        if (this._socket != null) {
            this._socket.close().then(this._completeCloseCompleter.bind(this));
        }else {
            this._completeCloseCompleter();
        }
        this._socketClosedWrite = true;
        this._socketClosedRead = true;
        if (!this._filterActive && this._secureFilter != null) {
            this._secureFilter.destroy();
            this._secureFilter = null;
        }
        if (this._socketSubscription != null) {
            this._socketSubscription.cancel();
        }
        this._controller.close();
        this._status = _RawSecureSocket.CLOSED;
    }
    shutdown(direction : SocketDirection) : void {
        if (op(Op.EQUALS,direction,SocketDirection.SEND) || op(Op.EQUALS,direction,SocketDirection.BOTH)) {
            this._closedWrite = true;
            if (this._filterStatus.writeEmpty) {
                this._socket.shutdown(SocketDirection.SEND);
                this._socketClosedWrite = true;
                if (this._closedRead) {
                    this._close();
                }
            }
        }
        if (op(Op.EQUALS,direction,SocketDirection.RECEIVE) || op(Op.EQUALS,direction,SocketDirection.BOTH)) {
            this._closedRead = true;
            this._socketClosedRead = true;
            this._socket.shutdown(SocketDirection.RECEIVE);
            if (this._socketClosedWrite) {
                this._close();
            }
        }
    }
    get writeEventsEnabled() : boolean {
        return this._writeEventsEnabled;
    }
    set writeEventsEnabled(value : boolean) {
        this._writeEventsEnabled = value;
        if (value) {
            async.DartTimer.run(() =>  {
                return this._sendWriteEvent();
            });
        }
    }
    get readEventsEnabled() : boolean {
        return this._readEventsEnabled;
    }
    set readEventsEnabled(value : boolean) {
        this._readEventsEnabled = value;
        this._scheduleReadEvent();
    }
    read(length? : number) : core.DartList<number> {
        if (length != null && (isNot(length, "number") || length < 0)) {
            throw new core.ArgumentError(`Invalid length parameter in SecureSocket.read (length: ${length})`);
        }
        if (this._closedRead) {
            throw new SocketException("Reading from a closed socket");
        }
        if (this._status != _RawSecureSocket.CONNECTED) {
            return null;
        }
        let result = this._secureFilter.buffers[_RawSecureSocket.READ_PLAINTEXT].read(length);
        this._scheduleFilter();
        return result;
    }
    write(data : core.DartList<number>,offset? : number,bytes? : number) : number {
        if (bytes != null && (isNot(bytes, "number") || bytes < 0)) {
            throw new core.ArgumentError(`Invalid bytes parameter in SecureSocket.read (bytes: ${bytes})`);
        }
        if (offset != null && (isNot(offset, "number") || offset < 0)) {
            throw new core.ArgumentError(`Invalid offset parameter in SecureSocket.read (offset: ${offset})`);
        }
        if (this._closedWrite) {
            this._controller.addError(new SocketException("Writing to a closed socket"));
            return 0;
        }
        if (this._status != _RawSecureSocket.CONNECTED) return 0;
        if (offset == null) offset = 0;
        if (bytes == null) bytes = data.length - offset;
        let written : number = this._secureFilter.buffers[_RawSecureSocket.WRITE_PLAINTEXT].write(data,offset,bytes);
        if (written > 0) {
            this._filterStatus.writeEmpty = false;
        }
        this._scheduleFilter();
        return written;
    }
    get peerCertificate() : X509Certificate {
        return this._secureFilter.peerCertificate;
    }
    get selectedProtocol() : string {
        return this._selectedProtocol;
    }
    _onBadCertificateWrapper(certificate : X509Certificate) : boolean {
        if (this.onBadCertificate == null) return false;
        let result = this.onBadCertificate(certificate);
        if (is(result, "boolean")) return result;
        throw new HandshakeException(`onBadCertificate callback returned non-boolean ${result}`);
    }
    setOption(option : SocketOption,enabled : boolean) : boolean {
        if (op(Op.EQUALS,this._socket,null)) return false;
        return this._socket.setOption(option,enabled);
    }
    _eventDispatcher(event : RawSocketEvent) : void {
        try {
            if (op(Op.EQUALS,event,RawSocketEvent.READ)) {
                this._readHandler();
            }else if (op(Op.EQUALS,event,RawSocketEvent.WRITE)) {
                this._writeHandler();
            }else if (op(Op.EQUALS,event,RawSocketEvent.READ_CLOSED)) {
                this._closeHandler();
            }
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                this._reportError(e,stackTrace);
            }
        }
    }
    _readHandler() : void {
        this._readSocket();
        this._scheduleFilter();
    }
    _writeHandler() : void {
        this._writeSocket();
        this._scheduleFilter();
    }
    _doneHandler() : void {
        if (this._filterStatus.readEmpty) {
            this._close();
        }
    }
    _reportError(e : any,stackTrace? : core.DartStackTrace) : void {
        if (op(Op.EQUALS,this._status,_RawSecureSocket.CLOSED)) {
            return;
        }else if (this._connectPending) {
            this._handshakeComplete.completeError(e,stackTrace);
        }else {
            this._controller.addError(e,stackTrace);
        }
        this._close();
    }
    _closeHandler() : void {
        if (op(Op.EQUALS,this._status,_RawSecureSocket.CONNECTED)) {
            if (this._closedRead) return;
            this._socketClosedRead = true;
            if (this._filterStatus.readEmpty) {
                this._closedRead = true;
                this._controller.add(RawSocketEvent.READ_CLOSED);
                if (this._socketClosedWrite) {
                    this._close();
                }
            }else {
                this._scheduleFilter();
            }
        }else if (op(Op.EQUALS,this._status,_RawSecureSocket.HANDSHAKE)) {
            this._socketClosedRead = true;
            if (this._filterStatus.readEmpty) {
                this._reportError(new HandshakeException('Connection terminated during handshake'),null);
            }else {
                this._secureHandshake();
            }
        }
    }
    _secureHandshake() : void {
        try {
            this._secureFilter.handshake();
            this._filterStatus.writeEmpty = false;
            this._readSocket();
            this._writeSocket();
            this._scheduleFilter();
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                this._reportError(e,stackTrace);
            }
        }
    }
    renegotiate(_namedArguments? : {useSessionCache? : boolean,requestClientCertificate? : boolean,requireClientCertificate? : boolean}) : void {
        let {useSessionCache,requestClientCertificate,requireClientCertificate} = Object.assign({
            "useSessionCache" : true,
            "requestClientCertificate" : false,
            "requireClientCertificate" : false}, _namedArguments );
        if (this._status != _RawSecureSocket.CONNECTED) {
            throw new HandshakeException("Called renegotiate on a non-connected socket");
        }
        this._secureFilter.renegotiate(useSessionCache,requestClientCertificate,requireClientCertificate);
        this._status = _RawSecureSocket.HANDSHAKE;
        this._filterStatus.writeEmpty = false;
        this._scheduleFilter();
    }
    _secureHandshakeCompleteHandler() : void {
        this._status = _RawSecureSocket.CONNECTED;
        if (this._connectPending) {
            this._connectPending = false;
            try {
                this._selectedProtocol = this._secureFilter.selectedProtocol();
                async.DartTimer.run(() =>  {
                    return this._handshakeComplete.complete(this);
                });
            } catch (__error__) {

                {
                    let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let error = __error__;
                    this._handshakeComplete.completeError(error,stack);
                }
            }
        }
    }
    _onPauseStateChange() : void {
        if (this._controller.isPaused) {
            this._pauseCount++;
        }else {
            this._pauseCount--;
            if (this._pauseCount == 0) {
                this._scheduleReadEvent();
                this._sendWriteEvent();
            }
        }
        if (!this._socketClosedRead || !this._socketClosedWrite) {
            if (this._controller.isPaused) {
                this._socketSubscription.pause();
            }else {
                this._socketSubscription.resume();
            }
        }
    }
    _onSubscriptionStateChange() : void {
        if (this._controller.hasListener) {
        }
    }
    _scheduleFilter() : void {
        this._filterPending = true;
        this._tryFilter();
    }
    _tryFilter() : void {
        if (op(Op.EQUALS,this._status,_RawSecureSocket.CLOSED)) {
            return;
        }
        if (this._filterPending && !this._filterActive) {
            this._filterActive = true;
            this._filterPending = false;
            this._pushAllFilterStages().then((status : any) =>  {
                this._filterStatus = status;
                this._filterActive = false;
                if (op(Op.EQUALS,this._status,_RawSecureSocket.CLOSED)) {
                    this._secureFilter.destroy();
                    this._secureFilter = null;
                    return;
                }
                this._socket.readEventsEnabled = true;
                if (this._filterStatus.writeEmpty && this._closedWrite && !this._socketClosedWrite) {
                    this.shutdown(SocketDirection.SEND);
                    if (op(Op.EQUALS,this._status,_RawSecureSocket.CLOSED)) {
                        return;
                    }
                }
                if (this._filterStatus.readEmpty && this._socketClosedRead && !this._closedRead) {
                    if (op(Op.EQUALS,this._status,_RawSecureSocket.HANDSHAKE)) {
                        this._secureFilter.handshake();
                        if (op(Op.EQUALS,this._status,_RawSecureSocket.HANDSHAKE)) {
                            throw new HandshakeException('Connection terminated during handshake');
                        }
                    }
                    this._closeHandler();
                }
                if (op(Op.EQUALS,this._status,_RawSecureSocket.CLOSED)) {
                    return;
                }
                if (this._filterStatus.progress) {
                    this._filterPending = true;
                    if (this._filterStatus.writeEncryptedNoLongerEmpty) {
                        this._writeSocket();
                    }
                    if (this._filterStatus.writePlaintextNoLongerFull) {
                        this._sendWriteEvent();
                    }
                    if (this._filterStatus.readEncryptedNoLongerFull) {
                        this._readSocket();
                    }
                    if (this._filterStatus.readPlaintextNoLongerEmpty) {
                        this._scheduleReadEvent();
                    }
                    if (op(Op.EQUALS,this._status,_RawSecureSocket.HANDSHAKE)) {
                        this._secureHandshake();
                    }
                }
                this._tryFilter();
            }).catchError(this._reportError.bind(this));
        }
    }
    _readSocketOrBufferedData(bytes : number) : core.DartList<number> {
        if (this._bufferedData != null) {
            if (bytes > this._bufferedData.length - this._bufferedDataIndex) {
                bytes = this._bufferedData.length - this._bufferedDataIndex;
            }
            let result = this._bufferedData.sublist(this._bufferedDataIndex,this._bufferedDataIndex + bytes);
            this._bufferedDataIndex += bytes;
            if (this._bufferedData.length == this._bufferedDataIndex) {
                this._bufferedData = null;
            }
            return result;
        }else if (!this._socketClosedRead) {
            return this._socket.read(bytes);
        }else {
            return null;
        }
    }
    _readSocket() : void {
        if (op(Op.EQUALS,this._status,_RawSecureSocket.CLOSED)) return;
        let buffer = this._secureFilter.buffers[_RawSecureSocket.READ_ENCRYPTED];
        if (buffer.writeFromSource(this._readSocketOrBufferedData.bind(this)) > 0) {
            this._filterStatus.readEmpty = false;
        }else {
            this._socket.readEventsEnabled = false;
        }
    }
    _writeSocket() : void {
        if (this._socketClosedWrite) return;
        let buffer = this._secureFilter.buffers[_RawSecureSocket.WRITE_ENCRYPTED];
        if (buffer.readToSocket(this._socket)) {
            this._socket.writeEventsEnabled = true;
        }
    }
    _scheduleReadEvent() {
        if (!this._pendingReadEvent && this._readEventsEnabled && this._pauseCount == 0 && this._secureFilter != null && !this._secureFilter.buffers[_RawSecureSocket.READ_PLAINTEXT].isEmpty) {
            this._pendingReadEvent = true;
            async.DartTimer.run(this._sendReadEvent.bind(this));
        }
    }
    _sendReadEvent() {
        this._pendingReadEvent = false;
        if (this._status != _RawSecureSocket.CLOSED && this._readEventsEnabled && this._pauseCount == 0 && this._secureFilter != null && !this._secureFilter.buffers[_RawSecureSocket.READ_PLAINTEXT].isEmpty) {
            this._controller.add(RawSocketEvent.READ);
            this._scheduleReadEvent();
        }
    }
    _sendWriteEvent() {
        if (!this._closedWrite && this._writeEventsEnabled && this._pauseCount == 0 && this._secureFilter != null && this._secureFilter.buffers[_RawSecureSocket.WRITE_PLAINTEXT].free > 0) {
            this._writeEventsEnabled = false;
            this._controller.add(RawSocketEvent.WRITE);
        }
    }
    _pushAllFilterStages() : async.Future<_FilterStatus> {
        let wasInHandshake : boolean = this._status != _RawSecureSocket.CONNECTED;
        let args : core.DartList<any> = new core.DartList<any>(2 + _RawSecureSocket.NUM_BUFFERS * 2);
        args[0] = this._secureFilter._pointer();
        args[1] = wasInHandshake;
        let bufs = this._secureFilter.buffers;
        for(let i = 0; i < _RawSecureSocket.NUM_BUFFERS; ++i){
            args[2 * i + 2] = bufs[i].start;
            args[2 * i + 3] = bufs[i].end;
        }
        return _IOService._dispatch(properties._SSL_PROCESS_FILTER,args).then((response : any) =>  {
            if (op(Op.EQUALS,response.length,2)) {
                if (wasInHandshake) {
                    this._reportError(new HandshakeException(`${op(Op.INDEX,response,1)} error ${op(Op.INDEX,response,0)}`),null);
                }else {
                    this._reportError(new TlsException(`${op(Op.INDEX,response,1)} error ${op(Op.INDEX,response,0)}`),null);
                }
            }
            var start : (index : number) => number = (index : number) : number =>  {
                return op(Op.INDEX,response,2 * index);
            };
            var end : (index : number) => number = (index : number) : number =>  {
                return op(Op.INDEX,response,2 * index + 1);
            };
            let status : _FilterStatus = new _FilterStatus();
            status.writeEmpty = bufs[_RawSecureSocket.WRITE_PLAINTEXT].isEmpty && start(_RawSecureSocket.WRITE_ENCRYPTED) == end(_RawSecureSocket.WRITE_ENCRYPTED);
            if (wasInHandshake) status.writeEmpty = false;
            status.readEmpty = bufs[_RawSecureSocket.READ_ENCRYPTED].isEmpty && start(_RawSecureSocket.READ_PLAINTEXT) == end(_RawSecureSocket.READ_PLAINTEXT);
            let buffer : _ExternalBuffer = bufs[_RawSecureSocket.WRITE_PLAINTEXT];
            let new_start : number = start(_RawSecureSocket.WRITE_PLAINTEXT);
            if (new_start != buffer.start) {
                status.progress = true;
                if (buffer.free == 0) {
                    status.writePlaintextNoLongerFull = true;
                }
                buffer.start = new_start;
            }
            buffer = bufs[_RawSecureSocket.READ_ENCRYPTED];
            new_start = start(_RawSecureSocket.READ_ENCRYPTED);
            if (new_start != buffer.start) {
                status.progress = true;
                if (buffer.free == 0) {
                    status.readEncryptedNoLongerFull = true;
                }
                buffer.start = new_start;
            }
            buffer = bufs[_RawSecureSocket.WRITE_ENCRYPTED];
            let new_end : number = end(_RawSecureSocket.WRITE_ENCRYPTED);
            if (new_end != buffer.end) {
                status.progress = true;
                if (buffer.length == 0) {
                    status.writeEncryptedNoLongerEmpty = true;
                }
                buffer.end = new_end;
            }
            buffer = bufs[_RawSecureSocket.READ_PLAINTEXT];
            new_end = end(_RawSecureSocket.READ_PLAINTEXT);
            if (new_end != buffer.end) {
                status.progress = true;
                if (buffer.length == 0) {
                    status.readPlaintextNoLongerEmpty = true;
                }
                buffer.end = new_end;
            }
            return status;
        });
    }
}

export namespace _ExternalBuffer {
    export type Constructors = '_ExternalBuffer';
    export type Interface = Omit<_ExternalBuffer, Constructors>;
}
@DartClass
export class _ExternalBuffer {
    data : core.DartList<number>;

    start : number;

    end : number;

    size;

    constructor(size : any) {
    }
    @defaultConstructor
    _ExternalBuffer(size : any) {
        this.size = size;
        this.start = this.end = op(Op.QUOTIENT,this.size,2);
    }
    advanceStart(bytes : number) : void {
        /* TODO (AssertStatementImpl) : assert (start > end || start + bytes <= end); */;
        this.start += bytes;
        if (this.start >= this.size) {
            this.start -= this.size;
            /* TODO (AssertStatementImpl) : assert (start <= end); */;
            /* TODO (AssertStatementImpl) : assert (start < size); */;
        }
    }
    advanceEnd(bytes : number) : void {
        /* TODO (AssertStatementImpl) : assert (start <= end || start > end + bytes); */;
        this.end += bytes;
        if (this.end >= this.size) {
            this.end -= this.size;
            /* TODO (AssertStatementImpl) : assert (end < start); */;
            /* TODO (AssertStatementImpl) : assert (end < size); */;
        }
    }
    get isEmpty() : boolean {
        return this.end == this.start;
    }
    get length() : number {
        return this.start > this.end ? op(Op.MINUS,op(Op.PLUS,this.size,this.end),this.start) : this.end - this.start;
    }
    get linearLength() : number {
        return this.start > this.end ? op(Op.MINUS,this.size,this.start) : this.end - this.start;
    }
    get free() : number {
        return this.start > this.end ? this.start - this.end - 1 : op(Op.MINUS,op(Op.MINUS,op(Op.PLUS,this.size,this.start),this.end),1);
    }
    get linearFree() : number {
        if (this.start > this.end) return this.start - this.end - 1;
        if (this.start == 0) return op(Op.MINUS,op(Op.MINUS,this.size,this.end),1);
        return op(Op.MINUS,this.size,this.end);
    }
    read(bytes : number) : core.DartList<number> {
        if (bytes == null) {
            bytes = this.length;
        }else {
            bytes = math.min(bytes,this.length);
        }
        if (bytes == 0) return null;
        let result : core.DartList<number> = new typed_data.Uint8List(bytes);
        let bytesRead : number = 0;
        while (bytesRead < bytes){
            let toRead : number = math.min(bytes - bytesRead,this.linearLength);
            result.setRange(bytesRead,bytesRead + toRead,this.data,this.start);
            this.advanceStart(toRead);
            bytesRead += toRead;
        }
        return result;
    }
    write(inputData : core.DartList<number>,offset : number,bytes : number) : number {
        if (bytes > this.free) {
            bytes = this.free;
        }
        let written : number = 0;
        let toWrite : number = math.min(bytes,this.linearFree);
        while (toWrite > 0){
            this.data.setRange(this.end,this.end + toWrite,inputData,offset);
            this.advanceEnd(toWrite);
            offset += toWrite;
            written += toWrite;
            toWrite = math.min(bytes - written,this.linearFree);
        }
        return written;
    }
    writeFromSource(getData : (requested : number) => core.DartList<number>) : number {
        let written : number = 0;
        let toWrite : number = this.linearFree;
        while (toWrite > 0){
            let inputData = getData(toWrite);
            if (inputData == null || inputData.length == 0) break;
            let len = inputData.length;
            this.data.setRange(this.end,this.end + len,inputData);
            this.advanceEnd(len);
            written += len;
            toWrite = this.linearFree;
        }
        return written;
    }
    readToSocket(socket : RawSocket) : boolean {
        while (true){
            let toWrite = this.linearLength;
            if (toWrite == 0) return false;
            let bytes : number = socket.write(this.data,this.start,toWrite);
            this.advanceStart(bytes);
            if (bytes < toWrite) {
                return true;
            }
        }
    }
}

export namespace _SecureFilter {
    export type Constructors = never;
    export type Interface = Omit<_SecureFilter, Constructors>;
}
@DartClass
export class _SecureFilter {
    constructor() {
    }
    @defaultFactory
    static $_SecureFilter() : _SecureFilter {
    }
    @Abstract
    connect(hostName : string,context : SecurityContext,is_server : boolean,requestClientCertificate : boolean,requireClientCertificate : boolean,protocols : typed_data.Uint8List) : void{ throw 'abstract'}
    @Abstract
    destroy() : void{ throw 'abstract'}
    @Abstract
    handshake() : void{ throw 'abstract'}
    @Abstract
    selectedProtocol() : string{ throw 'abstract'}
    @Abstract
    rehandshake() : void{ throw 'abstract'}
    @Abstract
    renegotiate(useSessionCache : boolean,requestClientCertificate : boolean,requireClientCertificate : boolean) : void{ throw 'abstract'}
    @Abstract
    init() : void{ throw 'abstract'}
    @AbstractProperty
    get peerCertificate() : X509Certificate{ throw 'abstract'}
    @Abstract
    processBuffer(bufferIndex : number) : number{ throw 'abstract'}
    @Abstract
    registerBadCertificateCallback(callback : Function) : void{ throw 'abstract'}
    @Abstract
    registerHandshakeCompleteCallback(handshakeCompleteHandler : Function) : void{ throw 'abstract'}
    @Abstract
    _pointer() : number{ throw 'abstract'}
    @AbstractProperty
    get buffers() : core.DartList<_ExternalBuffer>{ throw 'abstract'}
}

export namespace TlsException {
    export type Constructors = 'TlsException' | '_';
    export type Interface = Omit<TlsException, Constructors>;
}
@DartClass
@Implements(IOException)
export class TlsException implements IOException.Interface {
    type : string;

    message : string;

    osError : OSError;

    constructor(message? : string,osError? : OSError) {
    }
    @defaultConstructor
    TlsException(message? : string,osError? : OSError) {
        message = message || "";
        osError = osError || null;
        this._("TlsException",message,osError);
    }
    @namedConstructor
    _(type : string,message : string,osError : OSError) {
        this.type = type;
        this.message = message;
        this.osError = osError;
    }
    static _ : new(type : string,message : string,osError : OSError) => TlsException;

    toString() : string {
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        sb.write(this.type);
        if (!new core.DartString(this.message).isEmpty) {
            sb.write(`: ${this.message}`);
            if (this.osError != null) {
                sb.write(` (${this.osError})`);
            }
        }else if (this.osError != null) {
            sb.write(`: ${this.osError}`);
        }
        return sb.toString();
    }
}

export namespace GZipCodec {
    export type Constructors = convert.Codec.Constructors | 'GZipCodec' | '_default';
    export type Interface = Omit<GZipCodec, Constructors>;
}
@DartClass
export class GZipCodec extends convert.Codec<core.DartList<number>,core.DartList<number>> {
    gzip : boolean;

    level : number;

    memLevel : number;

    strategy : number;

    windowBits : number;

    dictionary : core.DartList<number>;

    raw : boolean;

    constructor(_namedArguments? : {level? : number,windowBits? : number,memLevel? : number,strategy? : number,dictionary? : core.DartList<number>,raw? : boolean,gzip? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GZipCodec(_namedArguments? : {level? : number,windowBits? : number,memLevel? : number,strategy? : number,dictionary? : core.DartList<number>,raw? : boolean,gzip? : boolean}) {
        let {level,windowBits,memLevel,strategy,dictionary,raw,gzip} = Object.assign({
            "level" : ZLibOption.DEFAULT_LEVEL,
            "windowBits" : ZLibOption.DEFAULT_WINDOW_BITS,
            "memLevel" : ZLibOption.DEFAULT_MEM_LEVEL,
            "strategy" : ZLibOption.STRATEGY_DEFAULT,
            "dictionary" : null,
            "raw" : false,
            "gzip" : true}, _namedArguments );
        this.level = level;
        this.windowBits = windowBits;
        this.memLevel = memLevel;
        this.strategy = strategy;
        this.dictionary = dictionary;
        this.raw = raw;
        this.gzip = gzip;
        _validateZLibeLevel(this.level);
        _validateZLibMemLevel(this.memLevel);
        _validateZLibStrategy(this.strategy);
        _validateZLibWindowBits(this.windowBits);
    }
    @namedConstructor
    _default() {
        this.level = ZLibOption.DEFAULT_LEVEL;
        this.windowBits = ZLibOption.DEFAULT_WINDOW_BITS;
        this.memLevel = ZLibOption.DEFAULT_MEM_LEVEL;
        this.strategy = ZLibOption.STRATEGY_DEFAULT;
        this.raw = false;
        this.gzip = true;
        this.dictionary = null;
    }
    static _default : new() => GZipCodec;

    get encoder() : ZLibEncoder {
        return new ZLibEncoder({
            gzip : true,level : this.level,windowBits : this.windowBits,memLevel : this.memLevel,strategy : this.strategy,dictionary : this.dictionary,raw : this.raw});
    }
    get decoder() : ZLibDecoder {
        return new ZLibDecoder({
            windowBits : this.windowBits,dictionary : this.dictionary,raw : this.raw});
    }
}

export namespace _StdIOUtils {
    export type Constructors = '_StdIOUtils';
    export type Interface = Omit<_StdIOUtils, Constructors>;
}
@DartClass
export class _StdIOUtils {
    static _getStdioOutputStream(fd : number) {
    }
    static _getStdioInputStream() : Stdin {
    }
    static _socketType(socket : Socket) : number {
    }
    static _getStdioHandleType(fd : number) {
    }
    constructor() {
    }
    @defaultConstructor
    _StdIOUtils() {
    }
}

export namespace SecurityContext {
    export type Constructors = never;
    export type Interface = Omit<SecurityContext, Constructors>;
}
@DartClass
export class SecurityContext {
    constructor(_namedArguments? : {withTrustedRoots? : boolean}) {
    }
    @defaultFactory
    static $SecurityContext(_namedArguments? : {withTrustedRoots? : boolean}) : SecurityContext {
        let {withTrustedRoots} = Object.assign({
            "withTrustedRoots" : false}, _namedArguments );
    }
    static get defaultContext() : SecurityContext {
    }
    @Abstract
    usePrivateKey(file : string,_namedArguments? : {password? : string}) : void{ throw 'abstract'}
    @Abstract
    usePrivateKeyBytes(keyBytes : core.DartList<number>,_namedArguments? : {password? : string}) : void{ throw 'abstract'}
    @Abstract
    setTrustedCertificates(file : string,_namedArguments? : {password? : string}) : void{ throw 'abstract'}
    @Abstract
    setTrustedCertificatesBytes(certBytes : core.DartList<number>,_namedArguments? : {password? : string}) : void{ throw 'abstract'}
    @Abstract
    useCertificateChain(file : string,_namedArguments? : {password? : string}) : void{ throw 'abstract'}
    @Abstract
    useCertificateChainBytes(chainBytes : core.DartList<number>,_namedArguments? : {password? : string}) : void{ throw 'abstract'}
    @Abstract
    setClientAuthorities(file : string,_namedArguments? : {password? : string}) : void{ throw 'abstract'}
    @Abstract
    setClientAuthoritiesBytes(authCertBytes : core.DartList<number>,_namedArguments? : {password? : string}) : void{ throw 'abstract'}
    static get alpnSupported() : boolean {
    }
    @Abstract
    setAlpnProtocols(protocols : core.DartList<string>,isServer : boolean) : void{ throw 'abstract'}
    static _protocolsToLengthEncoding(protocols : core.DartList<string>) : typed_data.Uint8List {
        if (protocols == null || protocols.length == 0) {
            return new typed_data.Uint8List(0);
        }
        let protocolsLength : number = protocols.length;
        let expectedLength : number = protocolsLength;
        for(let i : number = 0; i < protocolsLength; i++){
            let length : number = new core.DartString(protocols[i]).length;
            if (length > 0 && length <= 255) {
                expectedLength += length;
            }else {
                throw new core.ArgumentError(`Length of protocol must be between 1 and 255 (was: ${length}).`);
            }
        }
        if (expectedLength >= (1 << 13)) {
            throw new core.ArgumentError('The maximum message length supported is 2^13-1.');
        }
        let bytes = new typed_data.Uint8List(expectedLength);
        let bytesOffset : number = 0;
        for(let i : number = 0; i < protocolsLength; i++){
            let proto : string = protocols[i];
            op(Op.INDEX_ASSIGN,bytes,bytesOffset++,new core.DartString(proto).length);
            let bits : number = 0;
            for(let j : number = 0; j < new core.DartString(proto).length; j++){
                let char = new core.DartString(proto).codeUnitAt(j);
                bits |= char;
                op(Op.INDEX_ASSIGN,bytes,bytesOffset++,char & 255);
            }
            if (bits > 127) {
                return SecurityContext._protocolsToLengthEncodingNonAsciiBailout(protocols);
            }
        }
        return bytes;
    }
    static _protocolsToLengthEncodingNonAsciiBailout(protocols : core.DartList<string>) : typed_data.Uint8List {
        var addProtocol : (outBytes : core.DartList<number>,protocol : string) => void = (outBytes : core.DartList<number>,protocol : string) : void =>  {
            let protocolBytes = convert.properties.UTF8.encode(protocol);
            let len = protocolBytes.length;
            if (len > 255) {
                throw new core.ArgumentError(`Length of protocol must be between 1 and 255 (was: ${len})`);
            }
            outBytes.add(len);
            outBytes.addAll(protocolBytes);
        };
        let bytes : core.DartList<number> = new core.DartList.literal();
        for(let i = 0; i < protocols.length; i++){
            addProtocol(bytes,protocols[i]);
        }
        if (bytes.length >= (1 << 13)) {
            throw new core.ArgumentError('The maximum message length supported is 2^13-1.');
        }
        return new typed_data.Uint8List.fromList(bytes);
    }
}

export namespace ZLibCodec {
    export type Constructors = convert.Codec.Constructors | 'ZLibCodec' | '_default';
    export type Interface = Omit<ZLibCodec, Constructors>;
}
@DartClass
export class ZLibCodec extends convert.Codec<core.DartList<number>,core.DartList<number>> {
    gzip : boolean;

    level : number;

    memLevel : number;

    strategy : number;

    windowBits : number;

    raw : boolean;

    dictionary : core.DartList<number>;

    constructor(_namedArguments? : {level? : number,windowBits? : number,memLevel? : number,strategy? : number,dictionary? : core.DartList<number>,raw? : boolean,gzip? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ZLibCodec(_namedArguments? : {level? : number,windowBits? : number,memLevel? : number,strategy? : number,dictionary? : core.DartList<number>,raw? : boolean,gzip? : boolean}) {
        let {level,windowBits,memLevel,strategy,dictionary,raw,gzip} = Object.assign({
            "level" : ZLibOption.DEFAULT_LEVEL,
            "windowBits" : ZLibOption.DEFAULT_WINDOW_BITS,
            "memLevel" : ZLibOption.DEFAULT_MEM_LEVEL,
            "strategy" : ZLibOption.STRATEGY_DEFAULT,
            "dictionary" : null,
            "raw" : false,
            "gzip" : false}, _namedArguments );
        this.level = level;
        this.windowBits = windowBits;
        this.memLevel = memLevel;
        this.strategy = strategy;
        this.dictionary = dictionary;
        this.raw = raw;
        this.gzip = gzip;
        _validateZLibeLevel(this.level);
        _validateZLibMemLevel(this.memLevel);
        _validateZLibStrategy(this.strategy);
        _validateZLibWindowBits(this.windowBits);
    }
    @namedConstructor
    _default() {
        this.level = ZLibOption.DEFAULT_LEVEL;
        this.windowBits = ZLibOption.DEFAULT_WINDOW_BITS;
        this.memLevel = ZLibOption.DEFAULT_MEM_LEVEL;
        this.strategy = ZLibOption.STRATEGY_DEFAULT;
        this.raw = false;
        this.gzip = false;
        this.dictionary = null;
    }
    static _default : new() => ZLibCodec;

    get encoder() : ZLibEncoder {
        return new ZLibEncoder({
            gzip : false,level : this.level,windowBits : this.windowBits,memLevel : this.memLevel,strategy : this.strategy,dictionary : this.dictionary,raw : this.raw});
    }
    get decoder() : ZLibDecoder {
        return new ZLibDecoder({
            windowBits : this.windowBits,dictionary : this.dictionary,raw : this.raw});
    }
}

export namespace _ServiceObject {
    export type Constructors = '_ServiceObject';
    export type Interface = Omit<_ServiceObject, Constructors>;
}
@DartClass
export class _ServiceObject {
    __serviceId : number;

    get _serviceId() : number {
        if (this.__serviceId == 0) this.__serviceId = properties._nextServiceId++;
        return this.__serviceId;
    }
    @Abstract
    _toJSON(ref : boolean) : core.DartMap<any,any>{ throw 'abstract'}
    get _servicePath() : string {
        return `${this._serviceTypePath}/${this._serviceId}`;
    }
    @AbstractProperty
    get _serviceTypePath() : string{ throw 'abstract'}
    @AbstractProperty
    get _serviceTypeName() : string{ throw 'abstract'}
    _serviceType(ref : boolean) : string {
        if (ref) return `@${this._serviceTypeName}`;
        return this._serviceTypeName;
    }
    constructor() {
    }
    @defaultConstructor
    _ServiceObject() {
        this.__serviceId = 0;
    }
}

export namespace InternetAddressType {
    export type Constructors = '_';
    export type Interface = Omit<InternetAddressType, Constructors>;
}
@DartClass
export class InternetAddressType {
    private static __$IP_V4 : InternetAddressType;
    static get IP_V4() : InternetAddressType { 
        if (this.__$IP_V4===undefined) {
            this.__$IP_V4 = new InternetAddressType._(0);
        }
        return this.__$IP_V4;
    }

    private static __$IP_V6 : InternetAddressType;
    static get IP_V6() : InternetAddressType { 
        if (this.__$IP_V6===undefined) {
            this.__$IP_V6 = new InternetAddressType._(1);
        }
        return this.__$IP_V6;
    }

    private static __$ANY : InternetAddressType;
    static get ANY() : InternetAddressType { 
        if (this.__$ANY===undefined) {
            this.__$ANY = new InternetAddressType._(-1);
        }
        return this.__$ANY;
    }

    _value : number;

    @namedConstructor
    _(_value : number) {
        this._value = _value;
    }
    static _ : new(_value : number) => InternetAddressType;

    @namedFactory
    static $_from(value : number) : InternetAddressType {
        if (value == 0) return InternetAddressType.IP_V4;
        if (value == 1) return InternetAddressType.IP_V6;
        throw new core.ArgumentError(`Invalid type: ${value}`);
    }
    static _from : new(value : number) => InternetAddressType;

    get name() : string {
        switch (this._value) {
            case -1:
                return "ANY";
            case 0:
                return "IP_V4";
            case 1:
                return "IP_V6";
            default:
                throw new core.ArgumentError("Invalid InternetAddress");
        }
    }
    toString() : string {
        return `InternetAddressType: ${this.name}`;
    }
}

export namespace InternetAddress {
    export type Constructors = never;
    export type Interface = Omit<InternetAddress, Constructors>;
}
@DartClass
export class InternetAddress {
    static get LOOPBACK_IP_V4() : InternetAddress {
    }
    static get LOOPBACK_IP_V6() : InternetAddress {
    }
    static get ANY_IP_V4() : InternetAddress {
    }
    static get ANY_IP_V6() : InternetAddress {
    }
    type : InternetAddressType;

    @AbstractProperty
    get address() : string{ throw 'abstract'}
    @AbstractProperty
    get host() : string{ throw 'abstract'}
    @AbstractProperty
    get rawAddress() : core.DartList<number>{ throw 'abstract'}
    @AbstractProperty
    get isLoopback() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isLinkLocal() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isMulticast() : boolean{ throw 'abstract'}
    constructor(address : string) {
    }
    @defaultFactory
    static $InternetAddress(address : string) : InternetAddress {
    }
    @Abstract
    reverse() : async.Future<InternetAddress>{ throw 'abstract'}
    static lookup(host : string,_namedArguments? : {type? : InternetAddressType}) : async.Future<core.DartList<InternetAddress>> {
        let {type} = Object.assign({
            "type" : InternetAddressType.ANY}, _namedArguments );
    }
    static _cloneWithNewHost(address : InternetAddress,host : string) : InternetAddress {
    }
}

export namespace NetworkInterface {
    export type Constructors = 'NetworkInterface';
    export type Interface = Omit<NetworkInterface, Constructors>;
}
@DartClass
export class NetworkInterface {
    @AbstractProperty
    get name() : string{ throw 'abstract'}
    @AbstractProperty
    get index() : string{ throw 'abstract'}
    @AbstractProperty
    get addresses() : core.DartList<InternetAddress>{ throw 'abstract'}
    static get listSupported() : boolean {
    }
    static list(_namedArguments? : {includeLoopback? : boolean,includeLinkLocal? : boolean,type? : InternetAddressType}) : async.Future<core.DartList<NetworkInterface>> {
        let {includeLoopback,includeLinkLocal,type} = Object.assign({
            "includeLoopback" : false,
            "includeLinkLocal" : false,
            "type" : InternetAddressType.ANY}, _namedArguments );
    }
    constructor() {
    }
    @defaultConstructor
    NetworkInterface() {
    }
}

export namespace RawServerSocket {
    export type Constructors = 'RawServerSocket';
    export type Interface = Omit<RawServerSocket, Constructors>;
}
@DartClass
@Implements(async.DartStream)
export class RawServerSocket implements async.DartStream.Interface<RawSocket> {
    static bind(address : any,port : number,_namedArguments? : {backlog? : number,v6Only? : boolean,shared? : boolean}) : async.Future<RawServerSocket> {
        let {backlog,v6Only,shared} = Object.assign({
            "backlog" : 0,
            "v6Only" : false,
            "shared" : false}, _namedArguments );
    }
    @AbstractProperty
    get port() : number{ throw 'abstract'}
    @AbstractProperty
    get address() : InternetAddress{ throw 'abstract'}
    @Abstract
    close() : async.Future<RawServerSocket>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    RawServerSocket() {
    }
}

export namespace ServerSocket {
    export type Constructors = 'ServerSocket';
    export type Interface = Omit<ServerSocket, Constructors>;
}
@DartClass
@Implements(async.DartStream)
export class ServerSocket implements async.DartStream.Interface<Socket> {
    static bind(address : any,port : number,_namedArguments? : {backlog? : number,v6Only? : boolean,shared? : boolean}) : async.Future<ServerSocket> {
        let {backlog,v6Only,shared} = Object.assign({
            "backlog" : 0,
            "v6Only" : false,
            "shared" : false}, _namedArguments );
    }
    @AbstractProperty
    get port() : number{ throw 'abstract'}
    @AbstractProperty
    get address() : InternetAddress{ throw 'abstract'}
    @Abstract
    close() : async.Future<ServerSocket>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ServerSocket() {
    }
}

export namespace SocketDirection {
    export type Constructors = '_';
    export type Interface = Omit<SocketDirection, Constructors>;
}
@DartClass
export class SocketDirection {
    private static __$RECEIVE : SocketDirection;
    static get RECEIVE() : SocketDirection { 
        if (this.__$RECEIVE===undefined) {
            this.__$RECEIVE = new SocketDirection._(0);
        }
        return this.__$RECEIVE;
    }

    private static __$SEND : SocketDirection;
    static get SEND() : SocketDirection { 
        if (this.__$SEND===undefined) {
            this.__$SEND = new SocketDirection._(1);
        }
        return this.__$SEND;
    }

    private static __$BOTH : SocketDirection;
    static get BOTH() : SocketDirection { 
        if (this.__$BOTH===undefined) {
            this.__$BOTH = new SocketDirection._(2);
        }
        return this.__$BOTH;
    }

    _value;

    @namedConstructor
    _(_value : any) {
        this._value = _value;
    }
    static _ : new(_value : any) => SocketDirection;

}

export namespace SocketOption {
    export type Constructors = '_';
    export type Interface = Omit<SocketOption, Constructors>;
}
@DartClass
export class SocketOption {
    private static __$TCP_NODELAY : SocketOption;
    static get TCP_NODELAY() : SocketOption { 
        if (this.__$TCP_NODELAY===undefined) {
            this.__$TCP_NODELAY = new SocketOption._(0);
        }
        return this.__$TCP_NODELAY;
    }

    private static __$_IP_MULTICAST_LOOP : SocketOption;
    static get _IP_MULTICAST_LOOP() : SocketOption { 
        if (this.__$_IP_MULTICAST_LOOP===undefined) {
            this.__$_IP_MULTICAST_LOOP = new SocketOption._(1);
        }
        return this.__$_IP_MULTICAST_LOOP;
    }

    private static __$_IP_MULTICAST_HOPS : SocketOption;
    static get _IP_MULTICAST_HOPS() : SocketOption { 
        if (this.__$_IP_MULTICAST_HOPS===undefined) {
            this.__$_IP_MULTICAST_HOPS = new SocketOption._(2);
        }
        return this.__$_IP_MULTICAST_HOPS;
    }

    private static __$_IP_MULTICAST_IF : SocketOption;
    static get _IP_MULTICAST_IF() : SocketOption { 
        if (this.__$_IP_MULTICAST_IF===undefined) {
            this.__$_IP_MULTICAST_IF = new SocketOption._(3);
        }
        return this.__$_IP_MULTICAST_IF;
    }

    private static __$_IP_BROADCAST : SocketOption;
    static get _IP_BROADCAST() : SocketOption { 
        if (this.__$_IP_BROADCAST===undefined) {
            this.__$_IP_BROADCAST = new SocketOption._(4);
        }
        return this.__$_IP_BROADCAST;
    }

    _value;

    @namedConstructor
    _(_value : any) {
        this._value = _value;
    }
    static _ : new(_value : any) => SocketOption;

}

export namespace RawSocketEvent {
    export type Constructors = '_';
    export type Interface = Omit<RawSocketEvent, Constructors>;
}
@DartClass
export class RawSocketEvent {
    private static __$READ : RawSocketEvent;
    static get READ() : RawSocketEvent { 
        if (this.__$READ===undefined) {
            this.__$READ = new RawSocketEvent._(0);
        }
        return this.__$READ;
    }

    private static __$WRITE : RawSocketEvent;
    static get WRITE() : RawSocketEvent { 
        if (this.__$WRITE===undefined) {
            this.__$WRITE = new RawSocketEvent._(1);
        }
        return this.__$WRITE;
    }

    private static __$READ_CLOSED : RawSocketEvent;
    static get READ_CLOSED() : RawSocketEvent { 
        if (this.__$READ_CLOSED===undefined) {
            this.__$READ_CLOSED = new RawSocketEvent._(2);
        }
        return this.__$READ_CLOSED;
    }

    private static __$CLOSED : RawSocketEvent;
    static get CLOSED() : RawSocketEvent { 
        if (this.__$CLOSED===undefined) {
            this.__$CLOSED = new RawSocketEvent._(3);
        }
        return this.__$CLOSED;
    }

    _value : number;

    @namedConstructor
    _(_value : number) {
        this._value = _value;
    }
    static _ : new(_value : number) => RawSocketEvent;

    toString() : string {
        return new core.DartList.literal('RawSocketEvent:READ','RawSocketEvent:WRITE','RawSocketEvent:READ_CLOSED','RawSocketEvent:CLOSED')[this._value];
    }
}

export namespace RawSocket {
    export type Constructors = 'RawSocket';
    export type Interface = Omit<RawSocket, Constructors>;
}
@DartClass
@Implements(async.DartStream)
export class RawSocket implements async.DartStream.Interface<RawSocketEvent> {
    readEventsEnabled : boolean;

    writeEventsEnabled : boolean;

    static connect(host : any,port : number,_namedArguments? : {sourceAddress? : any}) : async.Future<RawSocket> {
        let {sourceAddress} = Object.assign({
        }, _namedArguments );
    }
    @Abstract
    available() : number{ throw 'abstract'}
    @Abstract
    read(len? : number) : core.DartList<number>{ throw 'abstract'}
    @Abstract
    write(buffer : core.DartList<number>,offset? : number,count? : number) : number{ throw 'abstract'}
    @AbstractProperty
    get port() : number{ throw 'abstract'}
    @AbstractProperty
    get remotePort() : number{ throw 'abstract'}
    @AbstractProperty
    get address() : InternetAddress{ throw 'abstract'}
    @AbstractProperty
    get remoteAddress() : InternetAddress{ throw 'abstract'}
    @Abstract
    close() : async.Future<RawSocket>{ throw 'abstract'}
    @Abstract
    shutdown(direction : SocketDirection) : void{ throw 'abstract'}
    @Abstract
    setOption(option : SocketOption,enabled : boolean) : boolean{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    RawSocket() {
    }
}

export namespace Socket {
    export type Constructors = 'Socket';
    export type Interface = Omit<Socket, Constructors>;
}
@DartClass
@Implements(async.DartStream,IOSink)
export class Socket implements async.DartStream.Interface<core.DartList<number>>,IOSink.Interface {
    static connect(host : any,port : number,_namedArguments? : {sourceAddress? : any}) : async.Future<Socket> {
        let {sourceAddress} = Object.assign({
        }, _namedArguments );
    }
    @Abstract
    destroy() : void{ throw 'abstract'}
    @Abstract
    setOption(option : SocketOption,enabled : boolean) : boolean{ throw 'abstract'}
    @AbstractProperty
    get port() : number{ throw 'abstract'}
    @AbstractProperty
    get remotePort() : number{ throw 'abstract'}
    @AbstractProperty
    get address() : InternetAddress{ throw 'abstract'}
    @AbstractProperty
    get remoteAddress() : InternetAddress{ throw 'abstract'}
    @Abstract
    close() : async.Future<Socket>{ throw 'abstract'}
    @AbstractProperty
    get done() : async.Future<Socket>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Socket() {
    }
}

export namespace Datagram {
    export type Constructors = 'Datagram';
    export type Interface = Omit<Datagram, Constructors>;
}
@DartClass
export class Datagram {
    data : core.DartList<number>;

    address : InternetAddress;

    port : number;

    constructor(data : core.DartList<number>,address : InternetAddress,port : number) {
    }
    @defaultConstructor
    Datagram(data : core.DartList<number>,address : InternetAddress,port : number) {
        this.data = data;
        this.address = address;
        this.port = port;
    }
}

export namespace RawDatagramSocket {
    export type Constructors = async.DartStream.Constructors | 'RawDatagramSocket';
    export type Interface = Omit<RawDatagramSocket, Constructors>;
}
@DartClass
export class RawDatagramSocket extends async.DartStream<RawSocketEvent> {
    readEventsEnabled : boolean;

    writeEventsEnabled : boolean;

    multicastLoopback : boolean;

    multicastHops : number;

    multicastInterface : NetworkInterface;

    broadcastEnabled : boolean;

    static bind(host : any,port : number,_namedArguments? : {reuseAddress? : boolean}) : async.Future<RawDatagramSocket> {
        let {reuseAddress} = Object.assign({
            "reuseAddress" : true}, _namedArguments );
    }
    @AbstractProperty
    get port() : number{ throw 'abstract'}
    @AbstractProperty
    get address() : InternetAddress{ throw 'abstract'}
    @Abstract
    close() : void{ throw 'abstract'}
    @Abstract
    send(buffer : core.DartList<number>,address : InternetAddress,port : number) : number{ throw 'abstract'}
    @Abstract
    receive() : Datagram{ throw 'abstract'}
    @Abstract
    joinMulticast(group : InternetAddress,interface? : NetworkInterface) : void{ throw 'abstract'}
    @Abstract
    leaveMulticast(group : InternetAddress,interface? : NetworkInterface) : void{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RawDatagramSocket() {
    }
}

export namespace SocketException {
    export type Constructors = 'SocketException' | 'closed';
    export type Interface = Omit<SocketException, Constructors>;
}
@DartClass
@Implements(IOException)
export class SocketException implements IOException.Interface {
    message : string;

    osError : OSError;

    address : InternetAddress;

    port : number;

    constructor(message : string,_namedArguments? : {osError? : OSError,address? : InternetAddress,port? : number}) {
    }
    @defaultConstructor
    SocketException(message : string,_namedArguments? : {osError? : OSError,address? : InternetAddress,port? : number}) {
        let {osError,address,port} = Object.assign({
        }, _namedArguments );
        this.message = message;
        this.osError = osError;
        this.address = address;
        this.port = port;
    }
    @namedConstructor
    closed() {
        this.message = 'Socket has been closed';
        this.osError = null;
        this.address = null;
        this.port = null;
    }
    static closed : new() => SocketException;

    toString() : string {
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        sb.write("SocketException");
        if (!new core.DartString(this.message).isEmpty) {
            sb.write(`: ${this.message}`);
            if (this.osError != null) {
                sb.write(` (${this.osError})`);
            }
        }else if (this.osError != null) {
            sb.write(`: ${this.osError}`);
        }
        if (this.address != null) {
            sb.write(`, address = ${this.address.host}`);
        }
        if (this.port != null) {
            sb.write(`, port = ${this.port}`);
        }
        return sb.toString();
    }
}

export namespace ZLibOption {
    export type Constructors = 'ZLibOption';
    export type Interface = Omit<ZLibOption, Constructors>;
}
@DartClass
export class ZLibOption {
    private static __$MIN_WINDOW_BITS : number;
    static get MIN_WINDOW_BITS() : number { 
        if (this.__$MIN_WINDOW_BITS===undefined) {
            this.__$MIN_WINDOW_BITS = 8;
        }
        return this.__$MIN_WINDOW_BITS;
    }

    private static __$MAX_WINDOW_BITS : number;
    static get MAX_WINDOW_BITS() : number { 
        if (this.__$MAX_WINDOW_BITS===undefined) {
            this.__$MAX_WINDOW_BITS = 15;
        }
        return this.__$MAX_WINDOW_BITS;
    }

    private static __$DEFAULT_WINDOW_BITS : number;
    static get DEFAULT_WINDOW_BITS() : number { 
        if (this.__$DEFAULT_WINDOW_BITS===undefined) {
            this.__$DEFAULT_WINDOW_BITS = 15;
        }
        return this.__$DEFAULT_WINDOW_BITS;
    }

    private static __$MIN_LEVEL : number;
    static get MIN_LEVEL() : number { 
        if (this.__$MIN_LEVEL===undefined) {
            this.__$MIN_LEVEL = -1;
        }
        return this.__$MIN_LEVEL;
    }

    private static __$MAX_LEVEL : number;
    static get MAX_LEVEL() : number { 
        if (this.__$MAX_LEVEL===undefined) {
            this.__$MAX_LEVEL = 9;
        }
        return this.__$MAX_LEVEL;
    }

    private static __$DEFAULT_LEVEL : number;
    static get DEFAULT_LEVEL() : number { 
        if (this.__$DEFAULT_LEVEL===undefined) {
            this.__$DEFAULT_LEVEL = 6;
        }
        return this.__$DEFAULT_LEVEL;
    }

    private static __$MIN_MEM_LEVEL : number;
    static get MIN_MEM_LEVEL() : number { 
        if (this.__$MIN_MEM_LEVEL===undefined) {
            this.__$MIN_MEM_LEVEL = 1;
        }
        return this.__$MIN_MEM_LEVEL;
    }

    private static __$MAX_MEM_LEVEL : number;
    static get MAX_MEM_LEVEL() : number { 
        if (this.__$MAX_MEM_LEVEL===undefined) {
            this.__$MAX_MEM_LEVEL = 9;
        }
        return this.__$MAX_MEM_LEVEL;
    }

    private static __$DEFAULT_MEM_LEVEL : number;
    static get DEFAULT_MEM_LEVEL() : number { 
        if (this.__$DEFAULT_MEM_LEVEL===undefined) {
            this.__$DEFAULT_MEM_LEVEL = 8;
        }
        return this.__$DEFAULT_MEM_LEVEL;
    }

    private static __$STRATEGY_FILTERED : number;
    static get STRATEGY_FILTERED() : number { 
        if (this.__$STRATEGY_FILTERED===undefined) {
            this.__$STRATEGY_FILTERED = 1;
        }
        return this.__$STRATEGY_FILTERED;
    }

    private static __$STRATEGY_HUFFMAN_ONLY : number;
    static get STRATEGY_HUFFMAN_ONLY() : number { 
        if (this.__$STRATEGY_HUFFMAN_ONLY===undefined) {
            this.__$STRATEGY_HUFFMAN_ONLY = 2;
        }
        return this.__$STRATEGY_HUFFMAN_ONLY;
    }

    private static __$STRATEGY_RLE : number;
    static get STRATEGY_RLE() : number { 
        if (this.__$STRATEGY_RLE===undefined) {
            this.__$STRATEGY_RLE = 3;
        }
        return this.__$STRATEGY_RLE;
    }

    private static __$STRATEGY_FIXED : number;
    static get STRATEGY_FIXED() : number { 
        if (this.__$STRATEGY_FIXED===undefined) {
            this.__$STRATEGY_FIXED = 4;
        }
        return this.__$STRATEGY_FIXED;
    }

    private static __$STRATEGY_DEFAULT : number;
    static get STRATEGY_DEFAULT() : number { 
        if (this.__$STRATEGY_DEFAULT===undefined) {
            this.__$STRATEGY_DEFAULT = 0;
        }
        return this.__$STRATEGY_DEFAULT;
    }

    constructor() {
    }
    @defaultConstructor
    ZLibOption() {
    }
}

export namespace _WebSocketOutgoingTransformer {
    export type Constructors = '_WebSocketOutgoingTransformer';
    export type Interface = Omit<_WebSocketOutgoingTransformer, Constructors>;
}
@DartClass
@Implements(async.DartStreamTransformer,async.DartEventSink)
export class _WebSocketOutgoingTransformer implements async.DartStreamTransformer.Interface<any,core.DartList<number>>,async.DartEventSink.Interface<any> {
    webSocket : _WebSocketImpl;

    _eventSink : async.DartEventSink<core.DartList<number>>;

    _deflateHelper : _WebSocketPerMessageDeflate;

    constructor(webSocket : _WebSocketImpl) {
    }
    @defaultConstructor
    _WebSocketOutgoingTransformer(webSocket : _WebSocketImpl) {
        this.webSocket = webSocket;
        this._deflateHelper = this.webSocket._deflate;
    }
    bind(stream : async.DartStream<any>) : async.DartStream<core.DartList<number>> {
        return new async.DartStream.eventTransformed(stream,(eventSink : async.DartEventSink<core.DartList<number>>) =>  {
            if (this._eventSink != null) {
                throw new core.StateError("WebSocket transformer already used");
            }
            this._eventSink = eventSink;
            return this;
        });
    }
    add(message : any) : void {
        if (is(message, _WebSocketPong)) {
            this.addFrame(_WebSocketOpcode.PONG,message.payload);
            return;
        }
        if (is(message, _WebSocketPing)) {
            this.addFrame(_WebSocketOpcode.PING,message.payload);
            return;
        }
        let data : core.DartList<number>;
        let opcode : number;
        if (message != null) {
            if (is(message, "string")) {
                opcode = _WebSocketOpcode.TEXT;
                data = convert.properties.UTF8.encode(message);
            }else if (is(message, core.DartList<number>)) {
                opcode = _WebSocketOpcode.BINARY;
                data = message;
            }else if (is(message, _EncodedString)) {
                opcode = _WebSocketOpcode.TEXT;
                data = message.bytes;
            }else {
                throw new core.ArgumentError(message);
            }
            if (this._deflateHelper != null) {
                data = this._deflateHelper.processOutgoingMessage(data);
            }
        }else {
            opcode = _WebSocketOpcode.TEXT;
        }
        this.addFrame(opcode,data);
    }
    addError(error : core.DartObject,stackTrace? : core.DartStackTrace) : void {
        this._eventSink.addError(error,stackTrace);
    }
    close() : void {
        let code : number = this.webSocket._outCloseCode;
        let reason : string = this.webSocket._outCloseReason;
        let data : core.DartList<number>;
        if (code != null) {
            data = new core.DartList<number>();
            data.add((code >> 8) & 255);
            data.add(code & 255);
            if (reason != null) {
                data.addAll(convert.properties.UTF8.encode(reason));
            }
        }
        this.addFrame(_WebSocketOpcode.CLOSE,data);
        this._eventSink.close();
    }
    addFrame(opcode : number,data : core.DartList<number>) : void {
        _WebSocketOutgoingTransformer.createFrame(opcode,data,this.webSocket._serverSide,this._deflateHelper != null && (opcode == _WebSocketOpcode.TEXT || opcode == _WebSocketOpcode.BINARY)).forEach((e : any) =>  {
            this._eventSink.add(e);
        });
    }
    static createFrame(opcode : number,data : core.DartList<number>,serverSide : boolean,compressed : boolean) : core.DartIterable<core.DartList<number>> {
        let mask : boolean = !serverSide;
        let dataLength : number = data == null ? 0 : data.length;
        let headerSize : number = (mask) ? 6 : 2;
        if (dataLength > 65535) {
            headerSize += 8;
        }else if (dataLength > 125) {
            headerSize += 2;
        }
        let header : typed_data.Uint8List = new typed_data.Uint8List(headerSize);
        let index : number = 0;
        let hoc = _WebSocketProtocolTransformer.FIN | (compressed ? _WebSocketProtocolTransformer.RSV1 : 0) | (opcode & _WebSocketProtocolTransformer.OPCODE);
        op(Op.INDEX_ASSIGN,header,index++,hoc);
        let lengthBytes : number = 1;
        if (dataLength > 65535) {
            op(Op.INDEX_ASSIGN,header,index++,127);
            lengthBytes = 8;
        }else if (dataLength > 125) {
            op(Op.INDEX_ASSIGN,header,index++,126);
            lengthBytes = 2;
        }
        for(let i : number = 0; i < lengthBytes; i++){
            op(Op.INDEX_ASSIGN,header,index++,dataLength >> (((lengthBytes - 1) - i) * 8) & 255);
        }
        if (mask) {
            op(Op.INDEX_ASSIGN,header,1,1 << 7);
            let maskBytes = _IOCrypto.getRandomBytes(4);
            header.setRange(index,index + 4,maskBytes);
            index += 4;
            if (data != null) {
                let list : typed_data.Uint8List;
                if (opcode == _WebSocketOpcode.TEXT && is(data, typed_data.Uint8List)) {
                    list = data;
                }else {
                    if (is(data, typed_data.Uint8List)) {
                        list = new typed_data.Uint8List.fromList(data);
                    }else {
                        list = new typed_data.Uint8List(data.length);
                        for(let i : number = 0; i < data.length; i++){
                            if (data[i] < 0 || 255 < data[i]) {
                                throw new core.ArgumentError("List element is not a byte value " + `(value ${data[i]} at index ${i})`);
                            }
                            op(Op.INDEX_ASSIGN,list,i,data[i]);
                        }
                    }
                }
                let BLOCK_SIZE : number = 16;
                let blockCount : number = op(Op.QUOTIENT,list.length,BLOCK_SIZE);
                if (blockCount > 0) {
                    let mask : number = 0;
                    for(let i : number = 3; i >= 0; i--){
                        mask = (mask << 8) | op(Op.INDEX,maskBytes,i);
                    }
                    let blockMask : typed_data.Int32x4 = new typed_data.Int32x4(mask,mask,mask,mask);
                    let blockBuffer : typed_data.Int32x4List = new typed_data.Int32x4List.view(list.buffer,0,blockCount);
                    for(let i : number = 0; i < blockBuffer.length; i++){
                        op(Op.INDEX_ASSIGN,blockBuffer,i,blockMask);
                    }
                }
                for(let i : number = blockCount * BLOCK_SIZE; i < list.length; i++){
                    op(Op.INDEX_ASSIGN,list,i,op(Op.INDEX,maskBytes,i & 3));
                }
                data = list;
            }
        }
        /* TODO (AssertStatementImpl) : assert (index == headerSize); */;
        if (data == null) {
            return new core.DartList.literal(header);
        }else {
            return new core.DartList.literal(header,data);
        }
    }
}

export namespace _WebSocketConsumer {
    export type Constructors = '_WebSocketConsumer';
    export type Interface = Omit<_WebSocketConsumer, Constructors>;
}
@DartClass
@Implements(async.StreamConsumer)
export class _WebSocketConsumer implements async.StreamConsumer.Interface<any> {
    webSocket : _WebSocketImpl;

    socket : Socket;

    _controller : async.DartStreamController<any>;

    _subscription : async.DartStreamSubscription<any>;

    _issuedPause : boolean;

    _closed : boolean;

    _closeCompleter : async.DartCompleter<any>;

    _completer : async.DartCompleter<any>;

    constructor(webSocket : _WebSocketImpl,socket : Socket) {
    }
    @defaultConstructor
    _WebSocketConsumer(webSocket : _WebSocketImpl,socket : Socket) {
        this._issuedPause = false;
        this._closed = false;
        this._closeCompleter = new async.DartCompleter<any>();
        this.webSocket = webSocket;
        this.socket = socket;
    }
    _onListen() : void {
        if (this._subscription != null) {
            this._subscription.cancel();
        }
    }
    _onPause() : void {
        if (this._subscription != null) {
            this._subscription.pause();
        }else {
            this._issuedPause = true;
        }
    }
    _onResume() : void {
        if (this._subscription != null) {
            this._subscription.resume();
        }else {
            this._issuedPause = false;
        }
    }
    _cancel() : void {
        if (this._subscription != null) {
            let subscription = this._subscription;
            this._subscription = null;
            subscription.cancel();
        }
    }
    _ensureController() {
        if (this._controller != null) return;
        this._controller = new async.DartStreamController<any>({
            sync : true,onPause : this._onPause.bind(this),onResume : this._onResume.bind(this),onCancel : this._onListen.bind(this)});
        let stream = this._controller.stream.transform(new _WebSocketOutgoingTransformer(this.webSocket));
        this.socket.addStream(stream).then((_ : any) =>  {
            this._done();
            this._closeCompleter.complete(this.webSocket);
        },{
            onError : (error : any,stackTrace : core.DartStackTrace) =>  {
                this._closed = true;
                this._cancel();
                if (is(error, core.ArgumentError)) {
                    if (!this._done(error,stackTrace)) {
                        this._closeCompleter.completeError(error,stackTrace);
                    }
                }else {
                    this._done();
                    this._closeCompleter.complete(this.webSocket);
                }
            }});
    }
    _done(error? : any,stackTrace? : core.DartStackTrace) : boolean {
        if (op(Op.EQUALS,this._completer,null)) return false;
        if (error != null) {
            this._completer.completeError(error,stackTrace);
        }else {
            this._completer.complete(this.webSocket);
        }
        this._completer = null;
        return true;
    }
    addStream(stream : any) : async.Future<any> {
        if (this._closed) {
            stream.listen(null).cancel();
            return new async.Future.value(this.webSocket);
        }
        this._ensureController();
        this._completer = new async.DartCompleter<any>();
        this._subscription = stream.listen((data : any) =>  {
            this._controller.add(data);
        },{
            onDone : this._done.bind(this),onError : this._done.bind(this),cancelOnError : true});
        if (this._issuedPause) {
            this._subscription.pause();
            this._issuedPause = false;
        }
        return this._completer.future;
    }
    close() : async.Future<any> {
        this._ensureController();
        var closeSocket : () => async.Future<any> = () : async.Future<any> =>  {
            return this.socket.close().catchError((_ : any) =>  {
            }).then((_ : any) =>  {
                return this.webSocket;
            });
        };
        this._controller.close();
        return this._closeCompleter.future.then((_ : any) =>  {
            return closeSocket();
        });
    }
    add(data : any) : void {
        if (this._closed) return;
        this._ensureController();
        this._controller.add(data);
    }
    closeSocket() : void {
        this._closed = true;
        this._cancel();
        this.close();
    }
}

export namespace _HashBase {
    export type Constructors = '_HashBase';
    export type Interface = Omit<_HashBase, Constructors>;
}
@DartClass
export class _HashBase {
    _chunkSizeInWords : number;

    _digestSizeInWords : number;

    _bigEndianWords : boolean;

    _lengthInBytes : number;

    _pendingData : core.DartList<number>;

    _currentChunk : core.DartList<number>;

    _h : core.DartList<number>;

    _digestCalled : boolean;

    constructor(_chunkSizeInWords : number,_digestSizeInWords : number,_bigEndianWords : boolean) {
    }
    @defaultConstructor
    _HashBase(_chunkSizeInWords : number,_digestSizeInWords : number,_bigEndianWords : boolean) {
        this._lengthInBytes = 0;
        this._digestCalled = false;
        this._pendingData = new core.DartList.literal();
        this._chunkSizeInWords = _chunkSizeInWords;
        this._digestSizeInWords = _digestSizeInWords;
        this._bigEndianWords = _bigEndianWords;
        this._currentChunk = new core.DartList<any>(this._chunkSizeInWords);
        this._h = new core.DartList<any>(this._digestSizeInWords);
    }
    add(data : core.DartList<number>) {
        if (this._digestCalled) {
            throw new core.StateError('Hash update method called after digest was retrieved');
        }
        this._lengthInBytes += data.length;
        this._pendingData.addAll(data);
        this._iterate();
    }
    close() : core.DartList<number> {
        if (this._digestCalled) {
            return this._resultAsBytes();
        }
        this._digestCalled = true;
        this._finalizeData();
        this._iterate();
        /* TODO (AssertStatementImpl) : assert (_pendingData.length == 0); */;
        return this._resultAsBytes();
    }
    get blockSize() : number {
        return this._chunkSizeInWords * properties._BYTES_PER_WORD;
    }
    @Abstract
    newInstance(){ throw 'abstract'}
    @Abstract
    _updateHash(m : core.DartList<number>){ throw 'abstract'}
    _add32(x : any,y : any) {
        return op(Op.BITAND,(op(Op.PLUS,x,y)),properties._MASK_32);
    }
    _roundUp(val : any,n : any) {
        return op(Op.BITAND,(op(Op.MINUS,op(Op.PLUS,val,n),1)),op(Op.NEG,n));
    }
    _rotl32(val : number,shift : number) : number {
        let mod_shift = shift & 31;
        return ((val << mod_shift) & properties._MASK_32) | ((val & properties._MASK_32) >> (32 - mod_shift));
    }
    _resultAsBytes() : core.DartList<number> {
        let result = new core.DartList.literal<number>();
        for(let i = 0; i < this._h.length; i++){
            result.addAll(this._wordToBytes(this._h[i]));
        }
        return result;
    }
    _bytesToChunk(data : core.DartList<number>,dataIndex : number) {
        /* TODO (AssertStatementImpl) : assert ((data.length - dataIndex) >= (_chunkSizeInWords * _BYTES_PER_WORD)); */;
        for(let wordIndex = 0; wordIndex < this._chunkSizeInWords; wordIndex++){
            let w3 = this._bigEndianWords ? data[dataIndex] : data[dataIndex + 3];
            let w2 = this._bigEndianWords ? data[dataIndex + 1] : data[dataIndex + 2];
            let w1 = this._bigEndianWords ? data[dataIndex + 2] : data[dataIndex + 1];
            let w0 = this._bigEndianWords ? data[dataIndex + 3] : data[dataIndex];
            dataIndex += 4;
            let word = (w3 & 255) << 24;
            word |= (w2 & properties._MASK_8) << 16;
            word |= (w1 & properties._MASK_8) << 8;
            word |= (w0 & properties._MASK_8);
            this._currentChunk[wordIndex] = word;
        }
    }
    _wordToBytes(word : number) : core.DartList<number> {
        let bytes : core.DartList<number> = new core.DartList<any>(properties._BYTES_PER_WORD);
        bytes[0] = (word >> (this._bigEndianWords ? 24 : 0)) & properties._MASK_8;
        bytes[1] = (word >> (this._bigEndianWords ? 16 : 8)) & properties._MASK_8;
        bytes[2] = (word >> (this._bigEndianWords ? 8 : 16)) & properties._MASK_8;
        bytes[3] = (word >> (this._bigEndianWords ? 0 : 24)) & properties._MASK_8;
        return bytes;
    }
    _iterate() {
        let len = this._pendingData.length;
        let chunkSizeInBytes = this._chunkSizeInWords * properties._BYTES_PER_WORD;
        if (len >= chunkSizeInBytes) {
            let index = 0;
            for(; (len - index) >= chunkSizeInBytes; index += chunkSizeInBytes){
                this._bytesToChunk(this._pendingData,index);
                this._updateHash(this._currentChunk);
            }
            this._pendingData = this._pendingData.sublist(index,len);
        }
    }
    _finalizeData() {
        this._pendingData.add(128);
        let contentsLength = this._lengthInBytes + 9;
        let chunkSizeInBytes = this._chunkSizeInWords * properties._BYTES_PER_WORD;
        let finalizedLength = this._roundUp(contentsLength,chunkSizeInBytes);
        let zeroPadding = op(Op.MINUS,finalizedLength,contentsLength);
        for(let i = 0; i < zeroPadding; i++){
            this._pendingData.add(0);
        }
        let lengthInBits = this._lengthInBytes * properties._BITS_PER_BYTE;
        /* TODO (AssertStatementImpl) : assert (lengthInBits < pow(2, 32)); */;
        if (this._bigEndianWords) {
            this._pendingData.addAll(this._wordToBytes(0));
            this._pendingData.addAll(this._wordToBytes(lengthInBits & properties._MASK_32));
        }else {
            this._pendingData.addAll(this._wordToBytes(lengthInBits & properties._MASK_32));
            this._pendingData.addAll(this._wordToBytes(0));
        }
    }
}

export namespace _CryptoUtils {
    export type Constructors = '_CryptoUtils';
    export type Interface = Omit<_CryptoUtils, Constructors>;
}
@DartClass
export class _CryptoUtils {
    private static __$PAD : number;
    static get PAD() : number { 
        if (this.__$PAD===undefined) {
            this.__$PAD = 61;
        }
        return this.__$PAD;
    }

    private static __$CR : number;
    static get CR() : number { 
        if (this.__$CR===undefined) {
            this.__$CR = 13;
        }
        return this.__$CR;
    }

    private static __$LF : number;
    static get LF() : number { 
        if (this.__$LF===undefined) {
            this.__$LF = 10;
        }
        return this.__$LF;
    }

    private static __$LINE_LENGTH : number;
    static get LINE_LENGTH() : number { 
        if (this.__$LINE_LENGTH===undefined) {
            this.__$LINE_LENGTH = 76;
        }
        return this.__$LINE_LENGTH;
    }

    private static __$_encodeTable : string;
    static get _encodeTable() : string { 
        if (this.__$_encodeTable===undefined) {
            this.__$_encodeTable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        }
        return this.__$_encodeTable;
    }

    private static __$_encodeTableUrlSafe : string;
    static get _encodeTableUrlSafe() : string { 
        if (this.__$_encodeTableUrlSafe===undefined) {
            this.__$_encodeTableUrlSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
        }
        return this.__$_encodeTableUrlSafe;
    }

    private static __$_decodeTable : core.DartList<number>;
    static get _decodeTable() : core.DartList<number> { 
        if (this.__$_decodeTable===undefined) {
            this.__$_decodeTable = new core.DartList.literal(-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-1,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,0,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2);
        }
        return this.__$_decodeTable;
    }

    static bytesToHex(bytes : core.DartList<number>) : string {
        let result = new core.DartStringBuffer();
        for(let part of bytes) {
            result.write(`${part < 16 ? '0' : ''}${new core.DartInt(part).toRadixString(16)}`);
        }
        return result.toString();
    }
    static bytesToBase64(bytes : core.DartList<number>,urlSafe? : boolean,addLineSeparator? : boolean) : string {
        urlSafe = urlSafe || false;
        addLineSeparator = addLineSeparator || false;
        let len : number = bytes.length;
        if (len == 0) {
            return "";
        }
        let lookup : string = urlSafe ? _CryptoUtils._encodeTableUrlSafe : _CryptoUtils._encodeTable;
        let remainderLength : number = new core.DartInt(len).remainder(3);
        let chunkLength : number = len - remainderLength;
        let outputLen : number = ((op(Op.QUOTIENT,len,3)) * 4) + ((remainderLength > 0) ? 4 : 0);
        if (addLineSeparator) {
            outputLen += (op(Op.QUOTIENT,(outputLen - 1),_CryptoUtils.LINE_LENGTH)) << 1;
        }
        let out : core.DartList<number> = new core.DartList<number>(outputLen);
        let j : number = 0, i : number = 0, c : number = 0;
        while (i < chunkLength){
            let x : number = ((bytes[i++] << 16) & 16777215) | ((bytes[i++] << 8) & 16777215) | bytes[i++];
            out[j++] = new core.DartString(lookup).codeUnitAt(x >> 18);
            out[j++] = new core.DartString(lookup).codeUnitAt((x >> 12) & 63);
            out[j++] = new core.DartString(lookup).codeUnitAt((x >> 6) & 63);
            out[j++] = new core.DartString(lookup).codeUnitAt(x & 63);
            if (addLineSeparator && ++c == 19 && j < outputLen - 2) {
                out[j++] = _CryptoUtils.CR;
                out[j++] = _CryptoUtils.LF;
                c = 0;
            }
        }
        if (remainderLength == 1) {
            let x : number = bytes[i];
            out[j++] = new core.DartString(lookup).codeUnitAt(x >> 2);
            out[j++] = new core.DartString(lookup).codeUnitAt((x << 4) & 63);
            out[j++] = _CryptoUtils.PAD;
            out[j++] = _CryptoUtils.PAD;
        }else if (remainderLength == 2) {
            let x : number = bytes[i];
            let y : number = bytes[i + 1];
            out[j++] = new core.DartString(lookup).codeUnitAt(x >> 2);
            out[j++] = new core.DartString(lookup).codeUnitAt(((x << 4) | (y >> 4)) & 63);
            out[j++] = new core.DartString(lookup).codeUnitAt((y << 2) & 63);
            out[j++] = _CryptoUtils.PAD;
        }
        return new core.DartString.fromCharCodes(out).valueOf();
    }
    static base64StringToBytes(input : string,ignoreInvalidCharacters? : boolean) : core.DartList<number> {
        ignoreInvalidCharacters = ignoreInvalidCharacters || true;
        let len : number = new core.DartString(input).length;
        if (len == 0) {
            return new core.DartList<number>(0);
        }
        let extrasLen : number = 0;
        for(let i : number = 0; i < len; i++){
            let c : number = _CryptoUtils._decodeTable[new core.DartString(input).codeUnitAt(i)];
            if (c < 0) {
                extrasLen++;
                if (c == -2 && !ignoreInvalidCharacters) {
                    throw new core.FormatException(`Invalid character: ${input[i]}`);
                }
            }
        }
        if ((len - extrasLen) % 4 != 0) {
            throw new core.FormatException(`Size of Base 64 characters in Input\n          must be a multiple of 4. Input: ${input}`);
        }
        let padLength : number = 0;
        for(let i : number = len - 1; i >= 0; i--){
            let currentCodeUnit : number = new core.DartString(input).codeUnitAt(i);
            if (_CryptoUtils._decodeTable[currentCodeUnit] > 0) break;
            if (currentCodeUnit == _CryptoUtils.PAD) padLength++;
        }
        let outputLen : number = (((len - extrasLen) * 6) >> 3) - padLength;
        let out : core.DartList<number> = new core.DartList<number>(outputLen);
        for(let i : number = 0, o : number = 0; o < outputLen; ){
            let x : number = 0;
            for(let j : number = 4; j > 0; ){
                let c : number = _CryptoUtils._decodeTable[new core.DartString(input).codeUnitAt(i++)];
                if (c >= 0) {
                    x = ((x << 6) & 16777215) | c;
                    j--;
                }
            }
            out[o++] = x >> 16;
            if (o < outputLen) {
                out[o++] = (x >> 8) & 255;
                if (o < outputLen) out[o++] = x & 255;
            }
        }
        return out;
    }
    constructor() {
    }
    @defaultConstructor
    _CryptoUtils() {
    }
}

export namespace _StdStream {
    export type Constructors = async.DartStream.Constructors | '_StdStream';
    export type Interface = Omit<_StdStream, Constructors>;
}
@DartClass
export class _StdStream extends async.DartStream<core.DartList<number>> {
    _stream : async.DartStream<core.DartList<number>>;

    constructor(_stream : async.DartStream<core.DartList<number>>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _StdStream(_stream : async.DartStream<core.DartList<number>>) {
        this._stream = _stream;
    }
    listen(onData : (event : core.DartList<number>) => void,_namedArguments? : {onError? : Function,onDone? : () => void,cancelOnError? : boolean}) : async.DartStreamSubscription<core.DartList<number>> {
        let {onError,onDone,cancelOnError} = Object.assign({
        }, _namedArguments );
        return this._stream.listen(onData,{
            onError : onError,onDone : onDone,cancelOnError : cancelOnError});
    }
}

export namespace _IOCrypto {
    export type Constructors = '_IOCrypto';
    export type Interface = Omit<_IOCrypto, Constructors>;
}
@DartClass
export class _IOCrypto {
    static getRandomBytes(count : number) : typed_data.Uint8List {
    }
    constructor() {
    }
    @defaultConstructor
    _IOCrypto() {
    }
}

export namespace _BufferAndStart {
    export type Constructors = '_BufferAndStart';
    export type Interface = Omit<_BufferAndStart, Constructors>;
}
@DartClass
export class _BufferAndStart {
    buffer : core.DartList<number>;

    start : number;

    constructor(buffer : core.DartList<number>,start : number) {
    }
    @defaultConstructor
    _BufferAndStart(buffer : core.DartList<number>,start : number) {
        this.buffer = buffer;
        this.start = start;
    }
}

export namespace StdoutException {
    export type Constructors = 'StdoutException';
    export type Interface = Omit<StdoutException, Constructors>;
}
@DartClass
@Implements(IOException)
export class StdoutException implements IOException.Interface {
    message : string;

    osError : OSError;

    constructor(message : string,osError? : OSError) {
    }
    @defaultConstructor
    StdoutException(message : string,osError? : OSError) {
        this.message = message;
        this.osError = osError;
    }
    toString() : string {
        return `StdoutException: ${this.message}${op(Op.EQUALS,this.osError,null) ? "" : `, ${this.osError}`}`;
    }
}

export namespace StdinException {
    export type Constructors = 'StdinException';
    export type Interface = Omit<StdinException, Constructors>;
}
@DartClass
@Implements(IOException)
export class StdinException implements IOException.Interface {
    message : string;

    osError : OSError;

    constructor(message : string,osError? : OSError) {
    }
    @defaultConstructor
    StdinException(message : string,osError? : OSError) {
        this.message = message;
        this.osError = osError;
    }
    toString() : string {
        return `StdinException: ${this.message}${op(Op.EQUALS,this.osError,null) ? "" : `, ${this.osError}`}`;
    }
}

export namespace _StdConsumer {
    export type Constructors = '_StdConsumer';
    export type Interface = Omit<_StdConsumer, Constructors>;
}
@DartClass
@Implements(async.StreamConsumer)
export class _StdConsumer implements async.StreamConsumer.Interface<core.DartList<number>> {
    _file;

    constructor(fd : number) {
    }
    @defaultConstructor
    _StdConsumer(fd : number) {
        this._file = _File._openStdioSync(fd);
    }
    addStream(stream : async.DartStream<core.DartList<number>>) : async.Future<any> {
        let completer = new async.DartCompleter<any>();
        let sub;
        sub = stream.listen((data : any) =>  {
            try {
                this._file.writeFromSync(data);
            } catch (__error__) {

                {
                    let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let e = __error__;
                    sub.cancel();
                    completer.completeError(e,s);
                }
            }
        },{
            onError : completer.completeError.bind(completer),onDone : completer.complete.bind(completer),cancelOnError : true});
        return completer.future;
    }
    close() : async.Future<any> {
        this._file.closeSync();
        return new async.Future.value();
    }
}

export namespace _StdSink {
    export type Constructors = '_StdSink';
    export type Interface = Omit<_StdSink, Constructors>;
}
@DartClass
@Implements(IOSink)
export class _StdSink implements IOSink.Interface {
    _sink : IOSink;

    constructor(_sink : IOSink) {
    }
    @defaultConstructor
    _StdSink(_sink : IOSink) {
        this._sink = _sink;
    }
    get encoding() : convert.Encoding {
        return this._sink.encoding;
    }
    set encoding(encoding : convert.Encoding) {
        this._sink.encoding = encoding;
    }
    write(object : any) : void {
        this._sink.write(object);
    }
    writeln(object? : any) : void {
        object = object || "";
        this._sink.writeln(object);
    }
    writeAll(objects : any,sep? : any) : void {
        sep = sep || "";
        this._sink.writeAll(objects,sep);
    }
    add(data : core.DartList<number>) : void {
        this._sink.add(data);
    }
    addError(error : any,stackTrace? : core.DartStackTrace) : void {
        this._sink.addError(error,stackTrace);
    }
    writeCharCode(charCode : number) : void {
        this._sink.writeCharCode(charCode);
    }
    addStream(stream : async.DartStream<core.DartList<number>>) : async.Future<any> {
        return this._sink.addStream(stream);
    }
    flush() : async.Future<any> {
        return this._sink.flush();
    }
    close() : async.Future<any> {
        return this._sink.close();
    }
    get done() : async.Future<any> {
        return this._sink.done;
    }
}

export namespace StdioType {
    export type Constructors = '_';
    export type Interface = Omit<StdioType, Constructors>;
}
@DartClass
export class StdioType {
    private static __$TERMINAL : StdioType;
    static get TERMINAL() : StdioType { 
        if (this.__$TERMINAL===undefined) {
            this.__$TERMINAL = new StdioType._("terminal");
        }
        return this.__$TERMINAL;
    }

    private static __$PIPE : StdioType;
    static get PIPE() : StdioType { 
        if (this.__$PIPE===undefined) {
            this.__$PIPE = new StdioType._("pipe");
        }
        return this.__$PIPE;
    }

    private static __$FILE : StdioType;
    static get FILE() : StdioType { 
        if (this.__$FILE===undefined) {
            this.__$FILE = new StdioType._("file");
        }
        return this.__$FILE;
    }

    private static __$OTHER : StdioType;
    static get OTHER() : StdioType { 
        if (this.__$OTHER===undefined) {
            this.__$OTHER = new StdioType._("other");
        }
        return this.__$OTHER;
    }

    name : string;

    @namedConstructor
    _(name : string) {
        this.name = name;
    }
    static _ : new(name : string) => StdioType;

    toString() : string {
        return `StdioType: ${this.name}`;
    }
}

export namespace OSError {
    export type Constructors = 'OSError';
    export type Interface = Omit<OSError, Constructors>;
}
@DartClass
export class OSError {
    private static __$noErrorCode : number;
    static get noErrorCode() : number { 
        if (this.__$noErrorCode===undefined) {
            this.__$noErrorCode = -1;
        }
        return this.__$noErrorCode;
    }

    message : string;

    errorCode : number;

    constructor(message? : string,errorCode? : number) {
    }
    @defaultConstructor
    OSError(message? : string,errorCode? : number) {
        message = message || "";
        errorCode = errorCode || OSError.noErrorCode;
        this.message = message;
        this.errorCode = errorCode;
    }
    toString() : string {
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        sb.write("OS Error");
        if (!new core.DartString(this.message).isEmpty) {
            ((_) : core.DartStringBuffer =>  {
                {
                    _.write(": ");
                    _.write(this.message);
                    return _;
                }
            })(sb);
            if (this.errorCode != OSError.noErrorCode) {
                ((_) : core.DartStringBuffer =>  {
                    {
                        _.write(", errno = ");
                        _.write(new core.DartInt(this.errorCode).toString());
                        return _;
                    }
                })(sb);
            }
        }else if (this.errorCode != OSError.noErrorCode) {
            ((_) : core.DartStringBuffer =>  {
                {
                    _.write(": errno = ");
                    _.write(new core.DartInt(this.errorCode).toString());
                    return _;
                }
            })(sb);
        }
        return sb.toString();
    }
}

export namespace IOException {
    export type Constructors = 'IOException';
    export type Interface = Omit<IOException, Constructors>;
}
@DartClass
@Implements(core.Exception)
export class IOException implements core.Exception.Interface {
    toString() : string {
        return "IOException";
    }
    constructor() {
    }
    @defaultConstructor
    IOException() {
    }
}

export namespace _BytesBuilder {
    export type Constructors = '_BytesBuilder';
    export type Interface = Omit<_BytesBuilder, Constructors>;
}
@DartClass
@Implements(BytesBuilder)
export class _BytesBuilder implements BytesBuilder.Interface {
    _length : number;

    _chunks : core.DartList<typed_data.Uint8List>;

    add(bytes : core.DartList<number>) : void {
        let typedBytes : typed_data.Uint8List;
        if (is(bytes, typed_data.Uint8List)) {
            typedBytes = bytes;
        }else {
            typedBytes = new typed_data.Uint8List.fromList(bytes);
        }
        this._chunks.add(typedBytes);
        this._length += typedBytes.length;
    }
    addByte(byte : number) : void {
        this._chunks.add(((_) : typed_data.Uint8List =>  {
            {
                op(Op.INDEX_ASSIGN,_,0,byte);
                return _;
            }
        })(new typed_data.Uint8List(1)));
        this._length++;
    }
    takeBytes() : core.DartList<number> {
        if (this._length == 0) return _CopyingBytesBuilder._emptyList;
        if (this._chunks.length == 1) {
            let buffer = this._chunks[0];
            this.clear();
            return buffer;
        }
        let buffer = new typed_data.Uint8List(this._length);
        let offset : number = 0;
        for(let chunk of this._chunks) {
            buffer.setRange(offset,offset + chunk.length,chunk);
            offset += chunk.length;
        }
        this.clear();
        return buffer;
    }
    toBytes() : core.DartList<number> {
        if (this._length == 0) return _CopyingBytesBuilder._emptyList;
        let buffer = new typed_data.Uint8List(this._length);
        let offset : number = 0;
        for(let chunk of this._chunks) {
            buffer.setRange(offset,offset + chunk.length,chunk);
            offset += chunk.length;
        }
        return buffer;
    }
    get length() : number {
        return this._length;
    }
    get isEmpty() : boolean {
        return this._length == 0;
    }
    get isNotEmpty() : boolean {
        return this._length != 0;
    }
    clear() : void {
        this._length = 0;
        this._chunks.clear();
    }
    constructor() {
    }
    @defaultConstructor
    _BytesBuilder() {
        this._length = 0;
        this._chunks = new core.DartList.literal();
    }
}

export namespace _CopyingBytesBuilder {
    export type Constructors = '_CopyingBytesBuilder';
    export type Interface = Omit<_CopyingBytesBuilder, Constructors>;
}
@DartClass
@Implements(BytesBuilder)
export class _CopyingBytesBuilder implements BytesBuilder.Interface {
    private static __$_INIT_SIZE : number;
    static get _INIT_SIZE() : number { 
        if (this.__$_INIT_SIZE===undefined) {
            this.__$_INIT_SIZE = 1024;
        }
        return this.__$_INIT_SIZE;
    }

    private static __$_emptyList;
    static get _emptyList() { 
        if (this.__$_emptyList===undefined) {
            this.__$_emptyList = new typed_data.Uint8List(0);
        }
        return this.__$_emptyList;
    }
    static set _emptyList(__$value : any)  { 
        this.__$_emptyList = __$value;
    }

    _length : number;

    _buffer : typed_data.Uint8List;

    constructor(initialCapacity? : number) {
    }
    @defaultConstructor
    _CopyingBytesBuilder(initialCapacity? : number) {
        initialCapacity = initialCapacity || 0;
        this._length = 0;
        this._buffer = (initialCapacity <= 0) ? _CopyingBytesBuilder._emptyList : new typed_data.Uint8List(_CopyingBytesBuilder._pow2roundup(initialCapacity));
    }
    add(bytes : core.DartList<number>) : void {
        let bytesLength : number = bytes.length;
        if (bytesLength == 0) return;
        let required : number = this._length + bytesLength;
        if (this._buffer.length < required) {
            this._grow(required);
        }
        /* TODO (AssertStatementImpl) : assert (_buffer.length >= required); */;
        if (is(bytes, typed_data.Uint8List)) {
            this._buffer.setRange(this._length,required,bytes);
        }else {
            for(let i : number = 0; i < bytesLength; i++){
                op(Op.INDEX_ASSIGN,this._buffer,this._length + i,bytes[i]);
            }
        }
        this._length = required;
    }
    addByte(byte : number) : void {
        if (this._buffer.length == this._length) {
            this._grow(this._length);
        }
        /* TODO (AssertStatementImpl) : assert (_buffer.length > _length); */;
        op(Op.INDEX_ASSIGN,this._buffer,this._length,byte);
        this._length++;
    }
    _grow(required : number) : void {
        let newSize : number = required * 2;
        if (newSize < _CopyingBytesBuilder._INIT_SIZE) {
            newSize = _CopyingBytesBuilder._INIT_SIZE;
        }else {
            newSize = _CopyingBytesBuilder._pow2roundup(newSize);
        }
        let newBuffer = new typed_data.Uint8List(newSize);
        newBuffer.setRange(0,this._buffer.length,this._buffer);
        this._buffer = newBuffer;
    }
    takeBytes() : core.DartList<number> {
        if (this._length == 0) return _CopyingBytesBuilder._emptyList;
        let buffer = new typed_data.Uint8List.view(this._buffer.buffer,0,this._length);
        this.clear();
        return buffer;
    }
    toBytes() : core.DartList<number> {
        if (this._length == 0) return _CopyingBytesBuilder._emptyList;
        return new typed_data.Uint8List.fromList(new typed_data.Uint8List.view(this._buffer.buffer,0,this._length));
    }
    get length() : number {
        return this._length;
    }
    get isEmpty() : boolean {
        return this._length == 0;
    }
    get isNotEmpty() : boolean {
        return this._length != 0;
    }
    clear() : void {
        this._length = 0;
        this._buffer = _CopyingBytesBuilder._emptyList;
    }
    static _pow2roundup(x : number) : number {
        /* TODO (AssertStatementImpl) : assert (x > 0); */;
        --x;
        x |= x >> 1;
        x |= x >> 2;
        x |= x >> 4;
        x |= x >> 8;
        x |= x >> 16;
        return x + 1;
    }
}

export namespace Link {
    export type Constructors = never;
    export type Interface = Omit<Link, Constructors>;
}
@DartClass
@Implements(FileSystemEntity)
export class Link implements FileSystemEntity.Interface {
    constructor(path : string) {
    }
    @defaultFactory
    static $Link(path : string) : Link {
        return new _Link(path);
    }
    @namedFactory
    static $fromUri(uri : lib5.Uri) : Link {
        return new Link(uri.toFilePath());
    }
    static fromUri : new(uri : lib5.Uri) => Link;

    @Abstract
    create(target : string,_namedArguments? : {recursive? : boolean}) : async.Future<Link>{ throw 'abstract'}
    @Abstract
    createSync(target : string,_namedArguments? : {recursive? : boolean}) : void{ throw 'abstract'}
    @Abstract
    updateSync(target : string) : void{ throw 'abstract'}
    @Abstract
    update(target : string) : async.Future<Link>{ throw 'abstract'}
    @Abstract
    resolveSymbolicLinks() : async.Future<string>{ throw 'abstract'}
    @Abstract
    resolveSymbolicLinksSync() : string{ throw 'abstract'}
    @Abstract
    rename(newPath : string) : async.Future<Link>{ throw 'abstract'}
    @Abstract
    renameSync(newPath : string) : Link{ throw 'abstract'}
    @AbstractProperty
    get absolute() : Link{ throw 'abstract'}
    @Abstract
    target() : async.Future<string>{ throw 'abstract'}
    @Abstract
    targetSync() : string{ throw 'abstract'}
}

export namespace Stdin {
    export type Constructors = _StdStream.Constructors | '_';
    export type Interface = Omit<Stdin, Constructors>;
}
@DartClass
@Implements(async.DartStream)
export class Stdin extends _StdStream implements async.DartStream.Interface<core.DartList<number>> {
    @namedConstructor
    _(stream : async.DartStream<core.DartList<number>>) {
        super._StdStream(stream);
    }
    static _ : new(stream : async.DartStream<core.DartList<number>>) => Stdin;

    readLineSync(_namedArguments? : {encoding? : convert.Encoding,retainNewlines? : boolean}) : string {
        let {encoding,retainNewlines} = Object.assign({
            "encoding" : properties.SYSTEM_ENCODING,
            "retainNewlines" : false}, _namedArguments );
        let CR = 13;
        let LF = 10;
        let line : core.DartList<number> = new core.DartList.literal<number>();
        let crIsNewline : boolean = Platform.isWindows && (op(Op.EQUALS,stdioType(properties.stdin),StdioType.TERMINAL)) && !this.lineMode;
        if (retainNewlines) {
            let byte : number;
            do{
                byte = this.readByteSync();
                if (byte < 0) {
                    break;
                }
                line.add(byte);
            } while (byte != LF && !(byte == CR && crIsNewline));
            if (line.isEmpty) {
                return null;
            }
        }else if (crIsNewline) {
            while (true){
                let byte : number = this.readByteSync();
                if (byte < 0) {
                    if (line.isEmpty) return null;
                    break;
                }
                if (byte == LF || byte == CR) break;
                line.add(byte);
            }
        }else {
            outer:
                while (true){
                    let byte : number = this.readByteSync();
                    if (byte == LF) break;
                    if (byte == CR) {
                        do{
                            byte = this.readByteSync();
                            if (byte == LF) break;
                            line.add(CR);
                        } while (byte == CR);
                    }
                    if (byte < 0) {
                        if (line.isEmpty) return null;
                        break;
                    }
                    line.add(byte);
                };
        }
        return encoding.decode(line);
    }
    get echoMode() : boolean {
    }
    set echoMode(enabled : boolean) {
    }
    get lineMode() : boolean {
    }
    set lineMode(enabled : boolean) {
    }
    get supportsAnsiEscapes() : boolean {
    }
    readByteSync() : number {
    }
}

export namespace _ContentType {
    export type Constructors = _HeaderValue.Constructors | '_ContentType' | '_';
    export type Interface = Omit<_ContentType, Constructors>;
}
@DartClass
@Implements(ContentType)
export class _ContentType extends _HeaderValue implements ContentType.Interface {
    _primaryType : string;

    _subType : string;

    constructor(primaryType : string,subType : string,charset : string,parameters : core.DartMap<string,string>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ContentType(primaryType : string,subType : string,charset : string,parameters : core.DartMap<string,string>) {
        this._primaryType = "";
        this._subType = "";
        this._primaryType = primaryType;
        this._subType = subType;
        super._HeaderValue("");
        if (this._primaryType == null) this._primaryType = "";
        if (this._subType == null) this._subType = "";
        this._value = `${this._primaryType}/${this._subType}`;
        if (parameters != null) {
            this._ensureParameters();
            parameters.forEach((key : string,value : string) =>  {
                let lowerCaseKey : string = new core.DartString(key).toLowerCase();
                if (lowerCaseKey == "charset") {
                    value = new core.DartString(value).toLowerCase();
                }
                this._parameters.set(lowerCaseKey,value);
            });
        }
        if (charset != null) {
            this._ensureParameters();
            this._parameters.set("charset",new core.DartString(charset).toLowerCase());
        }
    }
    @namedConstructor
    _() {
        this._primaryType = "";
        this._subType = "";
    }
    static _ : new() => _ContentType;

    static parse(value : string) : _ContentType {
        let result = new _ContentType._();
        result._parse(value,";",null,false);
        let index : number = new core.DartString(result._value).indexOf("/");
        if (index == -1 || index == (new core.DartString(result._value).length - 1)) {
            result._primaryType = new core.DartString(new core.DartString(result._value).trim()).toLowerCase();
            result._subType = "";
        }else {
            result._primaryType = new core.DartString(new core.DartString(new core.DartString(result._value).substring(0,index)).trim()).toLowerCase();
            result._subType = new core.DartString(new core.DartString(new core.DartString(result._value).substring(index + 1)).trim()).toLowerCase();
        }
        return result;
    }
    get mimeType() : string {
        return `${this.primaryType}/${this.subType}`;
    }
    get primaryType() : string {
        return this._primaryType;
    }
    get subType() : string {
        return this._subType;
    }
    get charset() : string {
        return this.parameters.get("charset");
    }
}

export namespace CertificateException {
    export type Constructors = TlsException.Constructors | 'CertificateException';
    export type Interface = Omit<CertificateException, Constructors>;
}
@DartClass
export class CertificateException extends TlsException {
    constructor(message? : string,osError? : OSError) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CertificateException(message? : string,osError? : OSError) {
        message = message || "";
        osError = osError || null;
        super._("CertificateException",message,osError);
    }
}

export namespace HandshakeException {
    export type Constructors = TlsException.Constructors | 'HandshakeException';
    export type Interface = Omit<HandshakeException, Constructors>;
}
@DartClass
export class HandshakeException extends TlsException {
    constructor(message? : string,osError? : OSError) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    HandshakeException(message? : string,osError? : OSError) {
        message = message || "";
        osError = osError || null;
        super._("HandshakeException",message,osError);
    }
}

export namespace _Link {
    export type Constructors = FileSystemEntity.Constructors | '_Link';
    export type Interface = Omit<_Link, Constructors>;
}
@DartClass
@Implements(Link)
export class _Link extends FileSystemEntity implements Link.Interface {
    path : string;

    constructor(path : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _Link(path : string) {
        this.path = path;
        if (isNot(this.path, "string")) {
            throw new core.ArgumentError(`${core.DartError.safeToString(this.path)} ` + 'is not a String');
        }
    }
    toString() : string {
        return `Link: '${this.path}'`;
    }
    exists() : async.Future<boolean> {
        return FileSystemEntity.isLink(this.path);
    }
    existsSync() : boolean {
        return FileSystemEntity.isLinkSync(this.path);
    }
    get absolute() : Link {
        return new Link(this._absolutePath);
    }
    create(target : string,_namedArguments? : {recursive? : boolean}) : async.Future<Link> {
        let {recursive} = Object.assign({
            "recursive" : false}, _namedArguments );
        if (Platform.isWindows) {
            target = this._makeWindowsLinkTarget(target);
        }
        let result = recursive ? this.parent.create({
            recursive : true}) : new async.Future.value(null);
        return result.then((_ : any) =>  {
            return _IOService._dispatch(properties._FILE_CREATE_LINK,new core.DartList.literal(this.path,target));
        }).then((response : any) =>  {
            if (this._isErrorResponse(response)) {
                throw this._exceptionFromResponse(response,`Cannot create link to target '${target}'`,this.path);
            }
            return this;
        });
    }
    createSync(target : string,_namedArguments? : {recursive? : boolean}) : void {
        let {recursive} = Object.assign({
            "recursive" : false}, _namedArguments );
        if (recursive) {
            this.parent.createSync({
                recursive : true});
        }
        if (Platform.isWindows) {
            target = this._makeWindowsLinkTarget(target);
        }
        let result = _File._createLink(this.path,target);
        _Link.throwIfError(result,"Cannot create link",this.path);
    }
    _makeWindowsLinkTarget(target : string) : string {
        let base : lib5.Uri = new lib5.Uri.file(`${Directory.current.path}\`);
        let link : lib5.Uri = new lib5.Uri.file(this.path);
        let destination : lib5.Uri = new lib5.Uri.file(target);
        let result : string = base.resolveUri(link).resolveUri(destination).toFilePath();
        if (new core.DartString(result).length > 3 && result[1] == ':' && result[2] == '\') {
            return `\??\${result}`;
        }else {
            throw new FileSystemException(`Target ${result} of Link.create on Windows cannot be converted` + ' to start with a drive letter.  Unexpected error.');
        }
    }
    updateSync(target : string) : void {
        this.deleteSync();
        this.createSync(target);
    }
    update(target : string) : async.Future<Link> {
        return this.delete().then((_ : any) =>  {
            return this.create(target);
        });
    }
    _delete(_namedArguments? : {recursive? : boolean}) : async.Future<Link> {
        let {recursive} = Object.assign({
            "recursive" : false}, _namedArguments );
        if (recursive) {
            return new Directory(this.path).delete({
                recursive : true}).then((_ : any) =>  {
                return this;
            });
        }
        return _IOService._dispatch(properties._FILE_DELETE_LINK,new core.DartList.literal(this.path)).then((response : any) =>  {
            if (this._isErrorResponse(response)) {
                throw this._exceptionFromResponse(response,"Cannot delete link",this.path);
            }
            return this;
        });
    }
    _deleteSync(_namedArguments? : {recursive? : boolean}) : void {
        let {recursive} = Object.assign({
            "recursive" : false}, _namedArguments );
        if (recursive) {
            return new Directory(this.path).deleteSync({
                recursive : true});
        }
        let result = _File._deleteLinkNative(this.path);
        _Link.throwIfError(result,"Cannot delete link",this.path);
    }
    rename(newPath : string) : async.Future<Link> {
        return _IOService._dispatch(properties._FILE_RENAME_LINK,new core.DartList.literal(this.path,newPath)).then((response : any) =>  {
            if (this._isErrorResponse(response)) {
                throw this._exceptionFromResponse(response,`Cannot rename link to '${newPath}'`,this.path);
            }
            return new Link(newPath);
        });
    }
    renameSync(newPath : string) : Link {
        let result = _File._renameLink(this.path,newPath);
        _Link.throwIfError(result,`Cannot rename link '${this.path}' to '${newPath}'`);
        return new Link(newPath);
    }
    target() : async.Future<string> {
        return _IOService._dispatch(properties._FILE_LINK_TARGET,new core.DartList.literal(this.path)).then((response : any) =>  {
            if (this._isErrorResponse(response)) {
                throw this._exceptionFromResponse(response,"Cannot get target of link",this.path);
            }
            return response;
        });
    }
    targetSync() : string {
        let result = _File._linkTarget(this.path);
        _Link.throwIfError(result,"Cannot read link",this.path);
        return result;
    }
    static throwIfError(result : core.DartObject,msg : string,path? : string) {
        path = path || "";
        if (is(result, OSError)) {
            throw new FileSystemException(msg,path,result);
        }
    }
    _isErrorResponse(response : any) : boolean {
        return is(response, core.DartList<any>) && response[0] != properties._SUCCESS_RESPONSE;
    }
    _exceptionFromResponse(response : any,message : string,path : string) {
        /* TODO (AssertStatementImpl) : assert (_isErrorResponse(response)); */;
        switch (op(Op.INDEX,response,properties._ERROR_RESPONSE_ERROR_TYPE)) {
            case properties._ILLEGAL_ARGUMENT_RESPONSE:
                return new core.ArgumentError();
            case properties._OSERROR_RESPONSE:
                let err = new OSError(op(Op.INDEX,response,properties._OSERROR_RESPONSE_MESSAGE),op(Op.INDEX,response,properties._OSERROR_RESPONSE_ERROR_CODE));
                return new FileSystemException(message,path,err);
            default:
                return new core.Exception("Unknown error");
        }
    }
}

export namespace _IOSinkImpl {
    export type Constructors = _StreamSinkImpl.Constructors | '_IOSinkImpl';
    export type Interface = Omit<_IOSinkImpl, Constructors>;
}
@DartClass
@Implements(IOSink)
export class _IOSinkImpl extends _StreamSinkImpl<core.DartList<number>> implements IOSink.Interface {
    _encoding : convert.Encoding;

    _encodingMutable : boolean;

    constructor(target : async.StreamConsumer<core.DartList<number>>,_encoding : convert.Encoding) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _IOSinkImpl(target : async.StreamConsumer<core.DartList<number>>,_encoding : convert.Encoding) {
        this._encodingMutable = true;
        super._StreamSinkImpl(target);
        this._encoding = _encoding;
    }
    get encoding() : convert.Encoding {
        return this._encoding;
    }
    set encoding(value : convert.Encoding) {
        if (!this._encodingMutable) {
            throw new core.StateError("IOSink encoding is not mutable");
        }
        this._encoding = value;
    }
    write(obj : core.DartObject) : void {
        let string : string = `${obj}`;
        if (new core.DartString(string).isEmpty) return;
        this.add(this._encoding.encode(string));
    }
    writeAll(objects : core.DartIterable<any>,separator? : string) : void {
        separator = separator || "";
        let iterator : core.DartIterator<any> = objects.iterator;
        if (!iterator.moveNext()) return;
        if (new core.DartString(separator).isEmpty) {
            do{
                this.write(iterator.current);
            } while (iterator.moveNext());
        }else {
            this.write(iterator.current);
            while (iterator.moveNext()){
                this.write(separator);
                this.write(iterator.current);
            }
        }
    }
    writeln(object? : core.DartObject) : void {
        object = object || "";
        this.write(object);
        this.write("\n");
    }
    writeCharCode(charCode : number) : void {
        this.write(new core.DartString.fromCharCode(charCode).valueOf());
    }
}

export namespace _ProcessResourceInfo {
    export type Constructors = _IOResourceInfo.Constructors | '_ProcessResourceInfo';
    export type Interface = Omit<_ProcessResourceInfo, Constructors>;
}
@DartClass
export class _ProcessResourceInfo extends _IOResourceInfo {
    private static __$TYPE : string;
    static get TYPE() : string { 
        if (this.__$TYPE===undefined) {
            this.__$TYPE = '_process';
        }
        return this.__$TYPE;
    }

    process;

    startedAt : double;

    private static __$startedProcesses : core.DartMap<number,_ProcessResourceInfo>;
    static get startedProcesses() : core.DartMap<number,_ProcessResourceInfo> { 
        if (this.__$startedProcesses===undefined) {
            this.__$startedProcesses = new core.DartMap<number,_ProcessResourceInfo>();
        }
        return this.__$startedProcesses;
    }
    static set startedProcesses(__$value : core.DartMap<number,_ProcessResourceInfo>)  { 
        this.__$startedProcesses = __$value;
    }

    constructor(process : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ProcessResourceInfo(process : any) {
        this.startedAt = _IOResourceInfo.timestamp;
        super._IOResourceInfo(_ProcessResourceInfo.TYPE);
        this.process = process;
        _ProcessResourceInfo.ProcessStarted(this);
    }
    get name() : string {
        return this.process._path;
    }
    stopped() : void {
        _ProcessResourceInfo.ProcessStopped(this);
    }
    get fullValueMap() : core.DartMap<string,any> {
        return new core.DartMap.literal([
            ['type',this.type],
            ['id',this.id],
            ['name',this.name],
            ['pid',this.process.pid],
            ['startedAt',this.startedAt],
            ['arguments',this.process._arguments],
            ['workingDirectory',op(Op.EQUALS,this.process._workingDirectory,null) ? '.' : this.process._workingDirectory]]);
    }
    static ProcessStarted(info : _ProcessResourceInfo) {
        /* TODO (AssertStatementImpl) : assert (!startedProcesses.containsKey(info.id)); */;
        _ProcessResourceInfo.startedProcesses.set(info.id,info);
    }
    static ProcessStopped(info : _ProcessResourceInfo) {
        /* TODO (AssertStatementImpl) : assert (startedProcesses.containsKey(info.id)); */;
        _ProcessResourceInfo.startedProcesses.remove(info.id);
    }
    static getStartedProcessesList() : core.DartIterable<core.DartMap<string,string>> {
        return new core.DartList.from(_ProcessResourceInfo.startedProcesses.values.map((e : any) =>  {
            return e.referenceValueMap;
        }));
    }
    static getStartedProcesses(function : string,params : core.DartMap<string,string>) : async.Future<developer.ServiceExtensionResponse> {
        /* TODO (AssertStatementImpl) : assert (function == 'ext.dart.io.getProcesses'); */;
        let data = new core.DartMap.literal([
            ['type','_startedprocesses'],
            ['data',_ProcessResourceInfo.getStartedProcessesList()]]);
        let json = convert.properties.JSON.encode(data);
        return new async.Future.value(new developer.ServiceExtensionResponse.result(json));
    }
    static getProcessInfoMapById(function : string,params : core.DartMap<string,string>) : async.Future<developer.ServiceExtensionResponse> {
        let id = core.DartInt.parse(params.get('id'));
        let result = _ProcessResourceInfo.startedProcesses.containsKey(id) ? _ProcessResourceInfo.startedProcesses.get(id).fullValueMap : new core.DartMap.literal([
        ]);
        let json = convert.properties.JSON.encode(result);
        return new async.Future.value(new developer.ServiceExtensionResponse.result(json));
    }
}

export namespace _ReadWriteResourceInfo {
    export type Constructors = _IOResourceInfo.Constructors | '_ReadWriteResourceInfo';
    export type Interface = Omit<_ReadWriteResourceInfo, Constructors>;
}
@DartClass
export class _ReadWriteResourceInfo extends _IOResourceInfo {
    totalRead : number;

    totalWritten : number;

    readCount : number;

    writeCount : number;

    lastRead : double;

    lastWrite : double;

    addRead(bytes : number) : void {
        this.totalRead += bytes;
        this.readCount++;
        this.lastRead = _IOResourceInfo.timestamp;
    }
    didRead() : void {
        this.addRead(0);
    }
    addWrite(bytes : number) : void {
        this.totalWritten += bytes;
        this.writeCount++;
        this.lastWrite = _IOResourceInfo.timestamp;
    }
    constructor(type : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ReadWriteResourceInfo(type : string) {
        this.totalRead = 0;
        this.totalWritten = 0;
        this.readCount = 0;
        this.writeCount = 0;
        this.lastRead = 0.0;
        this.lastWrite = 0.0;
        super._IOResourceInfo(type);
    }
    get fullValueMap() : core.DartMap<string,any> {
        return new core.DartMap.literal([
            ['type',this.type],
            ['id',this.id],
            ['name',this.name],
            ['totalRead',this.totalRead],
            ['totalWritten',this.totalWritten],
            ['readCount',this.readCount],
            ['writeCount',this.writeCount],
            ['lastRead',this.lastRead],
            ['lastWrite',this.lastWrite]]);
    }
}

export namespace _HttpClientDigestCredentials {
    export type Constructors = _HttpClientCredentials.Constructors | '_HttpClientDigestCredentials';
    export type Interface = Omit<_HttpClientDigestCredentials, Constructors>;
}
@DartClass
@Implements(HttpClientDigestCredentials)
export class _HttpClientDigestCredentials extends _HttpClientCredentials implements HttpClientDigestCredentials.Interface {
    username : string;

    password : string;

    constructor(username : string,password : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _HttpClientDigestCredentials(username : string,password : string) {
        this.username = username;
        this.password = password;
    }
    get scheme() : _AuthenticationScheme {
        return _AuthenticationScheme.DIGEST;
    }
    authorization(credentials : _Credentials,request : _HttpClientRequest) : string {
        let requestUri : string = request._requestUri();
        let hasher : _MD5 = ((_) : _MD5 =>  {
            {
                _.add(new core.DartString(request.method).codeUnits);
                _.add(new core.DartList.literal(_CharCode.COLON));
                _.add(new core.DartString(requestUri).codeUnits);
                return _;
            }
        })(new _MD5());
        let ha2 = _CryptoUtils.bytesToHex(hasher.close());
        let qop : string;
        let cnonce : string;
        let nc : string;
        let x;
        hasher = ((_) : _MD5 =>  {
            {
                _.add(new core.DartString(credentials.ha1).codeUnits);
                _.add(new core.DartList.literal(_CharCode.COLON));
                return _;
            }
        })(new _MD5());
        if (credentials.qop == "auth") {
            qop = credentials.qop;
            cnonce = _CryptoUtils.bytesToHex(_IOCrypto.getRandomBytes(4));
            ++credentials.nonceCount;
            nc = new core.DartInt(credentials.nonceCount).toRadixString(16);
            nc = new core.DartString("00000000").substring(0,8 - new core.DartString(nc).length + 1) + nc;
            ((_) : _MD5 =>  {
                {
                    _.add(new core.DartString(credentials.nonce).codeUnits);
                    _.add(new core.DartList.literal(_CharCode.COLON));
                    _.add(new core.DartString(nc).codeUnits);
                    _.add(new core.DartList.literal(_CharCode.COLON));
                    _.add(new core.DartString(cnonce).codeUnits);
                    _.add(new core.DartList.literal(_CharCode.COLON));
                    _.add(new core.DartString(credentials.qop).codeUnits);
                    _.add(new core.DartList.literal(_CharCode.COLON));
                    _.add(new core.DartString(ha2).codeUnits);
                    return _;
                }
            })(hasher);
        }else {
            ((_) : _MD5 =>  {
                {
                    _.add(new core.DartString(credentials.nonce).codeUnits);
                    _.add(new core.DartList.literal(_CharCode.COLON));
                    _.add(new core.DartString(ha2).codeUnits);
                    return _;
                }
            })(hasher);
        }
        let response = _CryptoUtils.bytesToHex(hasher.close());
        let buffer : core.DartStringBuffer = ((_) : core.DartStringBuffer =>  {
            {
                _.write('Digest ');
                _.write(`username="${this.username}"`);
                _.write(`, realm="${credentials.realm}"`);
                _.write(`, nonce="${credentials.nonce}"`);
                _.write(`, uri="${requestUri}"`);
                _.write(`, algorithm="${credentials.algorithm}"`);
                return _;
            }
        })(new core.DartStringBuffer());
        if (qop == "auth") {
            ((_) : core.DartStringBuffer =>  {
                {
                    _.write(`, qop="${qop}"`);
                    _.write(`, cnonce="${cnonce}"`);
                    _.write(`, nc="${nc}"`);
                    return _;
                }
            })(buffer);
        }
        buffer.write(`, response="${response}"`);
        return buffer.toString();
    }
    authorize(credentials : _Credentials,request : HttpClientRequest) : void {
        request.headers.set(HttpHeaders.AUTHORIZATION,this.authorization(credentials,request));
    }
    authorizeProxy(credentials : _ProxyCredentials,request : HttpClientRequest) : void {
        request.headers.set(HttpHeaders.PROXY_AUTHORIZATION,this.authorization(credentials,request));
    }
}

export namespace _HttpClientBasicCredentials {
    export type Constructors = _HttpClientCredentials.Constructors | '_HttpClientBasicCredentials';
    export type Interface = Omit<_HttpClientBasicCredentials, Constructors>;
}
@DartClass
@Implements(HttpClientBasicCredentials)
export class _HttpClientBasicCredentials extends _HttpClientCredentials implements HttpClientBasicCredentials.Interface {
    username : string;

    password : string;

    constructor(username : string,password : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _HttpClientBasicCredentials(username : string,password : string) {
        this.username = username;
        this.password = password;
    }
    get scheme() : _AuthenticationScheme {
        return _AuthenticationScheme.BASIC;
    }
    authorization() : string {
        let auth : string = _CryptoUtils.bytesToBase64(convert.properties.UTF8.encode(`${this.username}:${this.password}`));
        return `Basic ${auth}`;
    }
    authorize(_ : _Credentials,request : HttpClientRequest) : void {
        request.headers.set(HttpHeaders.AUTHORIZATION,this.authorization());
    }
    authorizeProxy(_ : _ProxyCredentials,request : HttpClientRequest) : void {
        request.headers.set(HttpHeaders.PROXY_AUTHORIZATION,this.authorization());
    }
}

export namespace _ProxyCredentials {
    export type Constructors = _Credentials.Constructors | '_ProxyCredentials';
    export type Interface = Omit<_ProxyCredentials, Constructors>;
}
@DartClass
export class _ProxyCredentials extends _Credentials {
    host : string;

    port : number;

    constructor(host : string,port : number,realm : any,creds : _HttpClientCredentials) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ProxyCredentials(host : string,port : number,realm : any,creds : _HttpClientCredentials) {
        super._Credentials(creds,realm);
        this.host = host;
        this.port = port;
    }
    applies(proxy : _Proxy,scheme : _AuthenticationScheme) : boolean {
        if (scheme != null && this.credentials.scheme != scheme) return false;
        return proxy.host == this.host && proxy.port == this.port;
    }
    authorize(request : HttpClientRequest) : void {
        if (op(Op.EQUALS,this.credentials.scheme,_AuthenticationScheme.DIGEST) && this.nonce == null) {
            return;
        }
        this.credentials.authorizeProxy(this,request);
    }
}

export namespace _SiteCredentials {
    export type Constructors = _Credentials.Constructors | '_SiteCredentials';
    export type Interface = Omit<_SiteCredentials, Constructors>;
}
@DartClass
export class _SiteCredentials extends _Credentials {
    uri : lib5.Uri;

    constructor(uri : lib5.Uri,realm : any,creds : _HttpClientCredentials) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SiteCredentials(uri : lib5.Uri,realm : any,creds : _HttpClientCredentials) {
        super._Credentials(creds,realm);
        this.uri = uri;
    }
    applies(uri : lib5.Uri,scheme : _AuthenticationScheme) : boolean {
        if (scheme != null && this.credentials.scheme != scheme) return false;
        if (uri.host != this.uri.host) return false;
        let thisPort : number = this.uri.port == 0 ? HttpClient.DEFAULT_HTTP_PORT : this.uri.port;
        let otherPort : number = uri.port == 0 ? HttpClient.DEFAULT_HTTP_PORT : uri.port;
        if (otherPort != thisPort) return false;
        return new core.DartString(uri.path).startsWith(this.uri.path);
    }
    authorize(request : HttpClientRequest) : void {
        if (op(Op.EQUALS,this.credentials.scheme,_AuthenticationScheme.DIGEST) && this.nonce == null) {
            return;
        }
        this.credentials.authorize(this,request);
        this.used = true;
    }
}

export namespace _HttpClientResponse {
    export type Constructors = _HttpInboundMessage.Constructors | '_HttpClientResponse';
    export type Interface = Omit<_HttpClientResponse, Constructors>;
}
@DartClass
@Implements(HttpClientResponse)
export class _HttpClientResponse extends _HttpInboundMessage implements HttpClientResponse.Interface {
    get redirects() : core.DartList<RedirectInfo> {
        return this._httpRequest._responseRedirects;
    }
    _httpClient : _HttpClient;

    _httpRequest : _HttpClientRequest;

    constructor(_incoming : _HttpIncoming,_httpRequest : _HttpClientRequest,_httpClient : _HttpClient) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _HttpClientResponse(_incoming : _HttpIncoming,_httpRequest : _HttpClientRequest,_httpClient : _HttpClient) {
        super._HttpInboundMessage(_incoming);
        this._httpRequest = _httpRequest;
        this._httpClient = _httpClient;
        _incoming.uri = this._httpRequest.uri;
    }
    get statusCode() : number {
        return this._incoming.statusCode;
    }
    get reasonPhrase() : string {
        return this._incoming.reasonPhrase;
    }
    get certificate() : X509Certificate {
        let socket = this._httpRequest._httpClientConnection._socket;
        if (is(socket, SecureSocket)) return socket.peerCertificate;
        throw new core.UnsupportedError("Socket is not a SecureSocket");
    }
    get cookies() : core.DartList<Cookie> {
        if (this._cookies != null) return this._cookies;
        this._cookies = new core.DartList<Cookie>();
        let values : core.DartList<string> = op(Op.INDEX,this.headers,HttpHeaders.SET_COOKIE);
        if (values != null) {
            values.forEach((value : any) =>  {
                this._cookies.add(new Cookie.fromSetCookieValue(value));
            });
        }
        return this._cookies;
    }
    get isRedirect() : boolean {
        if (this._httpRequest.method == "GET" || this._httpRequest.method == "HEAD") {
            return this.statusCode == HttpStatus.MOVED_PERMANENTLY || this.statusCode == HttpStatus.FOUND || this.statusCode == HttpStatus.SEE_OTHER || this.statusCode == HttpStatus.TEMPORARY_REDIRECT;
        }else if (this._httpRequest.method == "POST") {
            return this.statusCode == HttpStatus.SEE_OTHER;
        }
        return false;
    }
    redirect(method? : string,url? : lib5.Uri,followLoops? : boolean) : async.Future<HttpClientResponse> {
        if (method == null) {
            if (this.statusCode == HttpStatus.SEE_OTHER && this._httpRequest.method == "POST") {
                method = "GET";
            }else {
                method = this._httpRequest.method;
            }
        }
        if (op(Op.EQUALS,url,null)) {
            let location : string = this.headers.value(HttpHeaders.LOCATION);
            if (location == null) {
                throw new core.StateError("Response has no Location header for redirect");
            }
            url = lib5.Uri.parse(location);
        }
        if (followLoops != true) {
            for(let redirect of this.redirects) {
                if (op(Op.EQUALS,redirect.location,url)) {
                    return new async.Future.error(new RedirectException("Redirect loop detected",this.redirects));
                }
            }
        }
        return this._httpClient._openUrlFromRequest(method,url,this._httpRequest).then((request : any) =>  {
            ((_) : core.DartList<RedirectInfo> =>  {
                {
                    _.addAll(this.redirects);
                    _.add(new _RedirectInfo(this.statusCode,method,url));
                    return _;
                }
            })(request._responseRedirects);
            return request.close();
        });
    }
    listen(onData : (event : core.DartList<number>) => void,_namedArguments? : {onError? : Function,onDone? : () => void,cancelOnError? : boolean}) : async.DartStreamSubscription<core.DartList<number>> {
        let {onError,onDone,cancelOnError} = Object.assign({
        }, _namedArguments );
        if (this._incoming.upgraded) {
            this._httpRequest._httpClientConnection.destroy();
            return new async.DartStream.empty().listen(null,{
                onDone : onDone});
        }
        let stream = this._incoming;
        if (this._httpClient.autoUncompress && this.headers.value(HttpHeaders.CONTENT_ENCODING) == "gzip") {
            stream = stream.transform(properties.GZIP.decoder);
        }
        return stream.listen(onData,{
            onError : onError,onDone : onDone,cancelOnError : cancelOnError});
    }
    detachSocket() : async.Future<Socket> {
        this._httpClient._connectionClosed(this._httpRequest._httpClientConnection);
        return this._httpRequest._httpClientConnection.detachSocket();
    }
    get connectionInfo() : HttpConnectionInfo {
        return this._httpRequest.connectionInfo;
    }
    get _shouldAuthenticateProxy() : boolean {
        let challenge : core.DartList<string> = op(Op.INDEX,this.headers,HttpHeaders.PROXY_AUTHENTICATE);
        return this.statusCode == HttpStatus.PROXY_AUTHENTICATION_REQUIRED && challenge != null && challenge.length == 1;
    }
    get _shouldAuthenticate() : boolean {
        let challenge : core.DartList<string> = op(Op.INDEX,this.headers,HttpHeaders.WWW_AUTHENTICATE);
        return this.statusCode == HttpStatus.UNAUTHORIZED && challenge != null && challenge.length == 1;
    }
    _authenticate(proxyAuth : boolean) : async.Future<HttpClientResponse> {
        var retry : () => async.Future<HttpClientResponse> = () : async.Future<HttpClientResponse> =>  {
            return this.drain().then((_ : any) =>  {
                return this._httpClient._openUrlFromRequest(this._httpRequest.method,this._httpRequest.uri,this._httpRequest).then((request : any) =>  {
                    return request.close();
                });
            });
        };
        var authChallenge : () => core.DartList<string> = () : core.DartList<string> =>  {
            return proxyAuth ? op(Op.INDEX,this.headers,HttpHeaders.PROXY_AUTHENTICATE) : op(Op.INDEX,this.headers,HttpHeaders.WWW_AUTHENTICATE);
        };
        var findCredentials : (scheme : _AuthenticationScheme) => _Credentials = (scheme : _AuthenticationScheme) : _Credentials =>  {
            return proxyAuth ? this._httpClient._findProxyCredentials(this._httpRequest._proxy,scheme) : this._httpClient._findCredentials(this._httpRequest.uri,scheme);
        };
        var removeCredentials : (cr : _Credentials) => void = (cr : _Credentials) : void =>  {
            if (proxyAuth) {
                this._httpClient._removeProxyCredentials(cr);
            }else {
                this._httpClient._removeCredentials(cr);
            }
        };
        var requestAuthentication : (scheme : _AuthenticationScheme,realm : string) => async.Future<any> = (scheme : _AuthenticationScheme,realm : string) : async.Future<any> =>  {
            if (proxyAuth) {
                if (this._httpClient._authenticateProxy == null) {
                    return new async.Future.value(false);
                }
                let proxy = this._httpRequest._proxy;
                return this._httpClient._authenticateProxy(proxy.host,proxy.port,scheme.toString(),realm);
            }else {
                if (this._httpClient._authenticate == null) {
                    return new async.Future.value(false);
                }
                return this._httpClient._authenticate(this._httpRequest.uri,scheme.toString(),realm);
            }
        };
        let challenge : core.DartList<string> = authChallenge();
        /* TODO (AssertStatementImpl) : assert (challenge != null || challenge.length == 1); */;
        let header : _HeaderValue = _HeaderValue.parse(challenge[0],{
            parameterSeparator : ","});
        let scheme : _AuthenticationScheme = new _AuthenticationScheme.fromString(header.value);
        let realm : string = header.parameters.get("realm");
        let cr : _Credentials = findCredentials(scheme);
        if (cr != null) {
            if (op(Op.EQUALS,cr.scheme,_AuthenticationScheme.BASIC) && !cr.used) {
                return retry();
            }
            if (op(Op.EQUALS,cr.scheme,_AuthenticationScheme.DIGEST) && (header.parameters.get("algorithm") == null || new core.DartString(header.parameters.get("algorithm")).toLowerCase() == "md5")) {
                if (cr.nonce == null || cr.nonce == header.parameters.get("nonce")) {
                    if (cr.nonce == null) {
                        ((_) : _Credentials =>  {
                            {
                                _.nonce = header.parameters.get("nonce");
                                _.algorithm = "MD5";
                                _.qop = header.parameters.get("qop");
                                _.nonceCount = 0;
                                return _;
                            }
                        })(cr);
                    }
                    return retry();
                }else if (header.parameters.get("stale") != null && new core.DartString(header.parameters.get("stale")).toLowerCase() == "true") {
                    cr.nonce = header.parameters.get("nonce");
                    return retry();
                }
            }
        }
        if (cr != null) {
            removeCredentials(cr);
            cr = null;
        }
        return requestAuthentication(scheme,realm).then((credsAvailable : any) =>  {
            if (credsAvailable) {
                cr = this._httpClient._findCredentials(this._httpRequest.uri,scheme);
                return retry();
            }else {
                return this;
            }
        });
    }
}

export namespace _HttpRequest {
    export type Constructors = _HttpInboundMessage.Constructors | '_HttpRequest';
    export type Interface = Omit<_HttpRequest, Constructors>;
}
@DartClass
@Implements(HttpRequest)
export class _HttpRequest extends _HttpInboundMessage implements HttpRequest.Interface {
    response : HttpResponse;

    _httpServer : _HttpServer;

    _httpConnection : _HttpConnection;

    _session : _HttpSession;

    _requestedUri : lib5.Uri;

    constructor(response : HttpResponse,_incoming : _HttpIncoming,_httpServer : _HttpServer,_httpConnection : _HttpConnection) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _HttpRequest(response : HttpResponse,_incoming : _HttpIncoming,_httpServer : _HttpServer,_httpConnection : _HttpConnection) {
        super._HttpInboundMessage(_incoming);
        this.response = response;
        this._httpServer = _httpServer;
        this._httpConnection = _httpConnection;
        if (this.headers.protocolVersion == "1.1") {
            ((_) : HttpHeaders =>  {
                {
                    _.chunkedTransferEncoding = true;
                    _.persistentConnection = this.headers.persistentConnection;
                    return _;
                }
            })(this.response.headers);
        }
        if (this._httpServer._sessionManagerInstance != null) {
            let sessionIds = this.cookies.where((cookie : any) =>  {
                return new core.DartString(cookie.name).toUpperCase() == properties._DART_SESSION_ID;
            }).map((cookie : any) =>  {
                return cookie.value;
            });
            for(let sessionId of sessionIds) {
                this._session = this._httpServer._sessionManager.getSession(sessionId);
                if (this._session != null) {
                    this._session._markSeen();
                    break;
                }
            }
        }
    }
    listen(onData : (event : core.DartList<number>) => void,_namedArguments? : {onError? : Function,onDone? : () => void,cancelOnError? : boolean}) : async.DartStreamSubscription<core.DartList<number>> {
        let {onError,onDone,cancelOnError} = Object.assign({
        }, _namedArguments );
        return this._incoming.listen(onData,{
            onError : onError,onDone : onDone,cancelOnError : cancelOnError});
    }
    get uri() : lib5.Uri {
        return this._incoming.uri;
    }
    get requestedUri() : lib5.Uri {
        if (op(Op.EQUALS,this._requestedUri,null)) {
            let proto = op(Op.INDEX,this.headers,'x-forwarded-proto');
            let scheme = proto != null ? proto.first : is(this._httpConnection._socket, SecureSocket) ? "https" : "http";
            let hostList = op(Op.INDEX,this.headers,'x-forwarded-host');
            let host : string;
            if (hostList != null) {
                host = hostList.first;
            }else {
                hostList = op(Op.INDEX,this.headers,'host');
                if (hostList != null) {
                    host = hostList.first;
                }else {
                    host = `${this._httpServer.address.host}:${this._httpServer.port}`;
                }
            }
            this._requestedUri = lib5.Uri.parse(`${scheme}://${host}${this.uri}`);
        }
        return this._requestedUri;
    }
    get method() : string {
        return this._incoming.method;
    }
    get session() : HttpSession {
        if (this._session != null) {
            if (this._session._destroyed) {
                this._session = null;
                return this.session;
            }
            return this._session;
        }
        return this._session = this._httpServer._sessionManager.createSession();
    }
    get connectionInfo() : HttpConnectionInfo {
        return this._httpConnection.connectionInfo;
    }
    get certificate() : X509Certificate {
        let socket = this._httpConnection._socket;
        if (is(socket, SecureSocket)) return socket.peerCertificate;
        return null;
    }
}

export namespace HttpClientDigestCredentials {
    export type Constructors = HttpClientCredentials.Constructors | never;
    export type Interface = Omit<HttpClientDigestCredentials, Constructors>;
}
@DartClass
export class HttpClientDigestCredentials extends HttpClientCredentials {
    constructor(username : string,password : string) {
        // @ts-ignore
        super();
    }
    @defaultFactory
    static $HttpClientDigestCredentials(username : string,password : string) : HttpClientDigestCredentials {
        return new _HttpClientDigestCredentials(username,password);
    }
}

export namespace HttpClientBasicCredentials {
    export type Constructors = HttpClientCredentials.Constructors | never;
    export type Interface = Omit<HttpClientBasicCredentials, Constructors>;
}
@DartClass
export class HttpClientBasicCredentials extends HttpClientCredentials {
    constructor(username : string,password : string) {
        // @ts-ignore
        super();
    }
    @defaultFactory
    static $HttpClientBasicCredentials(username : string,password : string) : HttpClientBasicCredentials {
        return new _HttpClientBasicCredentials(username,password);
    }
}

export namespace FileSystemMoveEvent {
    export type Constructors = FileSystemEvent.Constructors | '_';
    export type Interface = Omit<FileSystemMoveEvent, Constructors>;
}
@DartClass
export class FileSystemMoveEvent extends FileSystemEvent {
    destination : string;

    @namedConstructor
    _(path : any,isDirectory : any,destination : string) {
        super._(FileSystemEvent.MOVE,path,isDirectory);
        this.destination = destination;
    }
    static _ : new(path : any,isDirectory : any,destination : string) => FileSystemMoveEvent;

    toString() : string {
        let buffer = new core.DartStringBuffer();
        buffer.write(`FileSystemMoveEvent('${this.path}'`);
        if (this.destination != null) buffer.write(`, '${this.destination}'`);
        buffer.write(')');
        return buffer.toString();
    }
}

export namespace FileSystemDeleteEvent {
    export type Constructors = FileSystemEvent.Constructors | '_';
    export type Interface = Omit<FileSystemDeleteEvent, Constructors>;
}
@DartClass
export class FileSystemDeleteEvent extends FileSystemEvent {
    @namedConstructor
    _(path : any,isDirectory : any) {
        super._(FileSystemEvent.DELETE,path,isDirectory);
    }
    static _ : new(path : any,isDirectory : any) => FileSystemDeleteEvent;

    toString() : string {
        return `FileSystemDeleteEvent('${this.path}')`;
    }
}

export namespace FileSystemModifyEvent {
    export type Constructors = FileSystemEvent.Constructors | '_';
    export type Interface = Omit<FileSystemModifyEvent, Constructors>;
}
@DartClass
export class FileSystemModifyEvent extends FileSystemEvent {
    contentChanged : boolean;

    @namedConstructor
    _(path : any,isDirectory : any,contentChanged : boolean) {
        super._(FileSystemEvent.MODIFY,path,isDirectory);
        this.contentChanged = contentChanged;
    }
    static _ : new(path : any,isDirectory : any,contentChanged : boolean) => FileSystemModifyEvent;

    toString() : string {
        return `FileSystemModifyEvent('${this.path}', contentChanged=${this.contentChanged})`;
    }
}

export namespace FileSystemCreateEvent {
    export type Constructors = FileSystemEvent.Constructors | '_';
    export type Interface = Omit<FileSystemCreateEvent, Constructors>;
}
@DartClass
export class FileSystemCreateEvent extends FileSystemEvent {
    @namedConstructor
    _(path : any,isDirectory : any) {
        super._(FileSystemEvent.CREATE,path,isDirectory);
    }
    static _ : new(path : any,isDirectory : any) => FileSystemCreateEvent;

    toString() : string {
        return `FileSystemCreateEvent('${this.path}')`;
    }
}

export namespace _File {
    export type Constructors = FileSystemEntity.Constructors | '_File';
    export type Interface = Omit<_File, Constructors>;
}
@DartClass
@Implements(File)
export class _File extends FileSystemEntity implements File.Interface {
    path : string;

    constructor(path : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _File(path : string) {
        this.path = path;
        if (isNot(this.path, "string")) {
            throw new core.ArgumentError(`${core.DartError.safeToString(this.path)} ` + 'is not a String');
        }
    }
    exists() : async.Future<boolean> {
        return _IOService._dispatch(properties._FILE_EXISTS,new core.DartList.literal(this.path)).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,"Cannot check existence",this.path);
            }
            return response;
        });
    }
    static _exists(path : string) {
    }
    existsSync() : boolean {
        let result = _File._exists(this.path);
        _File.throwIfError(result,"Cannot check existence of file",this.path);
        return result;
    }
    get absolute() : File {
        return new File(this._absolutePath);
    }
    create(_namedArguments? : {recursive? : boolean}) : async.Future<File> {
        let {recursive} = Object.assign({
            "recursive" : false}, _namedArguments );
        let result = recursive ? this.parent.create({
            recursive : true}) : new async.Future.value(null);
        return result.then((_ : any) =>  {
            return _IOService._dispatch(properties._FILE_CREATE,new core.DartList.literal(this.path));
        }).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,"Cannot create file",this.path);
            }
            return this;
        });
    }
    static _create(path : string) {
    }
    static _createLink(path : string,target : string) {
    }
    static _linkTarget(path : string) {
    }
    createSync(_namedArguments? : {recursive? : boolean}) : void {
        let {recursive} = Object.assign({
            "recursive" : false}, _namedArguments );
        if (recursive) {
            this.parent.createSync({
                recursive : true});
        }
        let result = _File._create(this.path);
        _File.throwIfError(result,"Cannot create file",this.path);
    }
    _delete(_namedArguments? : {recursive? : boolean}) : async.Future<File> {
        let {recursive} = Object.assign({
            "recursive" : false}, _namedArguments );
        if (recursive) {
            return new Directory(this.path).delete({
                recursive : true}).then((_ : any) =>  {
                return this;
            });
        }
        return _IOService._dispatch(properties._FILE_DELETE,new core.DartList.literal(this.path)).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,"Cannot delete file",this.path);
            }
            return this;
        });
    }
    static _deleteNative(path : string) {
    }
    static _deleteLinkNative(path : string) {
    }
    _deleteSync(_namedArguments? : {recursive? : boolean}) : void {
        let {recursive} = Object.assign({
            "recursive" : false}, _namedArguments );
        if (recursive) {
            return new Directory(this.path).deleteSync({
                recursive : true});
        }
        let result = _File._deleteNative(this.path);
        _File.throwIfError(result,"Cannot delete file",this.path);
    }
    rename(newPath : string) : async.Future<File> {
        return _IOService._dispatch(properties._FILE_RENAME,new core.DartList.literal(this.path,newPath)).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,`Cannot rename file to '${newPath}'`,this.path);
            }
            return new File(newPath);
        });
    }
    static _rename(oldPath : string,newPath : string) {
    }
    static _renameLink(oldPath : string,newPath : string) {
    }
    renameSync(newPath : string) : File {
        let result = _File._rename(this.path,newPath);
        _File.throwIfError(result,`Cannot rename file to '${newPath}'`,this.path);
        return new File(newPath);
    }
    copy(newPath : string) : async.Future<File> {
        return _IOService._dispatch(properties._FILE_COPY,new core.DartList.literal(this.path,newPath)).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,`Cannot copy file to '${newPath}'`,this.path);
            }
            return new File(newPath);
        });
    }
    static _copy(oldPath : string,newPath : string) {
    }
    copySync(newPath : string) : File {
        let result = _File._copy(this.path,newPath);
        _File.throwIfError(result,`Cannot copy file to '${newPath}'`,this.path);
        return new File(newPath);
    }
    open(_namedArguments? : {mode? : FileMode}) : async.Future<RandomAccessFile> {
        let {mode} = Object.assign({
            "mode" : FileMode.READ}, _namedArguments );
        if (mode != FileMode.READ && mode != FileMode.WRITE && mode != FileMode.APPEND && mode != FileMode.WRITE_ONLY && mode != FileMode.WRITE_ONLY_APPEND) {
            return new async.Future.error(new core.ArgumentError('Invalid file mode for this operation'));
        }
        return _IOService._dispatch(properties._FILE_OPEN,new core.DartList.literal(this.path,mode._mode)).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,"Cannot open file",this.path);
            }
            return new _RandomAccessFile(response,this.path);
        });
    }
    length() : async.Future<number> {
        return _IOService._dispatch(properties._FILE_LENGTH_FROM_PATH,new core.DartList.literal(this.path)).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,"Cannot retrieve length of file",this.path);
            }
            return response;
        });
    }
    static _lengthFromPath(path : string) {
    }
    lengthSync() : number {
        let result = _File._lengthFromPath(this.path);
        _File.throwIfError(result,"Cannot retrieve length of file",this.path);
        return result;
    }
    lastAccessed() : async.Future<core.DartDateTime> {
        return _IOService._dispatch(properties._FILE_LAST_ACCESSED,new core.DartList.literal(this.path)).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,"Cannot retrieve access time",this.path);
            }
            return new core.DartDateTime.fromMillisecondsSinceEpoch(response);
        });
    }
    static _lastAccessed(path : string) {
    }
    lastAccessedSync() : core.DartDateTime {
        let ms = _File._lastAccessed(this.path);
        _File.throwIfError(ms,"Cannot retrieve access time",this.path);
        return new core.DartDateTime.fromMillisecondsSinceEpoch(ms);
    }
    setLastAccessed(time : core.DartDateTime) : async.Future<any> {
        let millis : number = time.millisecondsSinceEpoch;
        return _IOService._dispatch(properties._FILE_SET_LAST_ACCESSED,new core.DartList.literal(this.path,millis)).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,"Cannot set access time",this.path);
            }
            return null;
        });
    }
    static _setLastAccessed(path : string,millis : number) {
    }
    setLastAccessedSync(time : core.DartDateTime) : void {
        let millis : number = time.millisecondsSinceEpoch;
        let result = _File._setLastAccessed(this.path,millis);
        if (is(result, OSError)) {
            throw new FileSystemException("Failed to set file access time",this.path,result);
        }
    }
    lastModified() : async.Future<core.DartDateTime> {
        return _IOService._dispatch(properties._FILE_LAST_MODIFIED,new core.DartList.literal(this.path)).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,"Cannot retrieve modification time",this.path);
            }
            return new core.DartDateTime.fromMillisecondsSinceEpoch(response);
        });
    }
    static _lastModified(path : string) {
    }
    lastModifiedSync() : core.DartDateTime {
        let ms = _File._lastModified(this.path);
        _File.throwIfError(ms,"Cannot retrieve modification time",this.path);
        return new core.DartDateTime.fromMillisecondsSinceEpoch(ms);
    }
    setLastModified(time : core.DartDateTime) : async.Future<any> {
        let millis : number = time.millisecondsSinceEpoch;
        return _IOService._dispatch(properties._FILE_SET_LAST_MODIFIED,new core.DartList.literal(this.path,millis)).then((response : any) =>  {
            if (_isErrorResponse(response)) {
                throw _exceptionFromResponse(response,"Cannot set modification time",this.path);
            }
            return null;
        });
    }
    static _setLastModified(path : string,millis : number) {
    }
    setLastModifiedSync(time : core.DartDateTime) : void {
        let millis : number = time.millisecondsSinceEpoch;
        let result = _File._setLastModified(this.path,millis);
        if (is(result, OSError)) {
            throw new FileSystemException("Failed to set file modification time",this.path,result);
        }
    }
    static _open(path : string,mode : number) {
    }
    openSync(_namedArguments? : {mode? : FileMode}) : RandomAccessFile {
        let {mode} = Object.assign({
            "mode" : FileMode.READ}, _namedArguments );
        if (mode != FileMode.READ && mode != FileMode.WRITE && mode != FileMode.APPEND && mode != FileMode.WRITE_ONLY && mode != FileMode.WRITE_ONLY_APPEND) {
            throw new core.ArgumentError('Invalid file mode for this operation');
        }
        let id = _File._open(this.path,mode._mode);
        _File.throwIfError(id,"Cannot open file",this.path);
        return new _RandomAccessFile(id,this.path);
    }
    static _openStdio(fd : number) : number {
    }
    static _openStdioSync(fd : number) : RandomAccessFile {
        let id = _File._openStdio(fd);
        if (id == 0) {
            throw new FileSystemException(`Cannot open stdio file for: ${fd}`);
        }
        return new _RandomAccessFile(id,"");
    }
    openRead(start? : number,end? : number) : async.DartStream<core.DartList<number>> {
        return new _FileStream(this.path,start,end);
    }
    openWrite(_namedArguments? : {mode? : FileMode,encoding? : convert.Encoding}) : IOSink {
        let {mode,encoding} = Object.assign({
            "mode" : FileMode.WRITE,
            "encoding" : convert.properties.UTF8}, _namedArguments );
        if (mode != FileMode.WRITE && mode != FileMode.APPEND && mode != FileMode.WRITE_ONLY && mode != FileMode.WRITE_ONLY_APPEND) {
            throw new core.ArgumentError('Invalid file mode for this operation');
        }
        let consumer = new _FileStreamConsumer(this,mode);
        return new IOSink(consumer,{
            encoding : encoding});
    }
    readAsBytes() : async.Future<core.DartList<number>> {
        var readDataChunked : (file : RandomAccessFile) => async.Future<core.DartList<number>> = (file : RandomAccessFile) : async.Future<core.DartList<number>> =>  {
            let builder = new BytesBuilder({
                copy : false});
            let completer = new async.DartCompleter<core.DartList<number>>();
            var read : () => void = () : void =>  {
                file.read(properties._BLOCK_SIZE).then((data : any) =>  {
                    if (data.length > 0) {
                        builder.add(data);
                        read();
                    }else {
                        completer.complete(builder.takeBytes());
                    }
                },{
                    onError : completer.completeError.bind(completer)});
            };
            read();
            return completer.future;
        };
        return this.open().then((file : any) =>  {
            return file.length().then((length : any) =>  {
                if (length == 0) {
                    return readDataChunked(file);
                }
                return file.read(length);
            }).whenComplete(file.close.bind(file));
        });
    }
    readAsBytesSync() : core.DartList<number> {
        let opened = this.openSync();
        try {
            let data : core.DartList<number>;
            let length = opened.lengthSync();
            if (length == 0) {
                let builder = new BytesBuilder({
                    copy : false});
                do{
                    data = opened.readSync(properties._BLOCK_SIZE);
                    if (data.length > 0) builder.add(data);
                } while (data.length > 0);
                data = builder.takeBytes();
            }else {
                data = opened.readSync(length);
            }
            return data;
        } finally {
            opened.closeSync();
        }
    }
    _tryDecode(bytes : core.DartList<number>,encoding : convert.Encoding) : string {
        try {
            return encoding.decode(bytes);
        } catch (__error__) {

            {
                let _ = __error__;
                throw new FileSystemException(`Failed to decode data using encoding '${encoding.name}'`,this.path);
            }
        }
    }
    readAsString(_namedArguments? : {encoding? : convert.Encoding}) : async.Future<string> {
        let {encoding} = Object.assign({
            "encoding" : convert.properties.UTF8}, _namedArguments );
        return this.readAsBytes().then((bytes : any) =>  {
            return this._tryDecode(bytes,encoding);
        });
    }
    readAsStringSync(_namedArguments? : {encoding? : convert.Encoding}) : string {
        let {encoding} = Object.assign({
            "encoding" : convert.properties.UTF8}, _namedArguments );
        return this._tryDecode(this.readAsBytesSync(),encoding);
    }
    readAsLines(_namedArguments? : {encoding? : convert.Encoding}) : async.Future<core.DartList<string>> {
        let {encoding} = Object.assign({
            "encoding" : convert.properties.UTF8}, _namedArguments );
        return this.readAsString({
            encoding : encoding}).then(new convert.LineSplitter().convert.bind(new convert.LineSplitter()));
    }
    readAsLinesSync(_namedArguments? : {encoding? : convert.Encoding}) : core.DartList<string> {
        let {encoding} = Object.assign({
            "encoding" : convert.properties.UTF8}, _namedArguments );
        return new convert.LineSplitter().convert(this.readAsStringSync({
            encoding : encoding}));
    }
    writeAsBytes(bytes : core.DartList<number>,_namedArguments? : {mode? : FileMode,flush? : boolean}) : async.Future<File> {
        let {mode,flush} = Object.assign({
            "mode" : FileMode.WRITE,
            "flush" : false}, _namedArguments );
        return this.open({
            mode : mode}).then((file : any) =>  {
            return file.writeFrom(bytes,0,bytes.length).then((_ : any) =>  {
                if (flush) return file.flush().then((_ : any) =>  {
                    return this;
                });
                return this;
            }).whenComplete(file.close.bind(file));
        });
    }
    writeAsBytesSync(bytes : core.DartList<number>,_namedArguments? : {mode? : FileMode,flush? : boolean}) : void {
        let {mode,flush} = Object.assign({
            "mode" : FileMode.WRITE,
            "flush" : false}, _namedArguments );
        let opened : RandomAccessFile = this.openSync({
            mode : mode});
        try {
            opened.writeFromSync(bytes,0,bytes.length);
            if (flush) opened.flushSync();
        } finally {
            opened.closeSync();
        }
    }
    writeAsString(contents : string,_namedArguments? : {mode? : FileMode,encoding? : convert.Encoding,flush? : boolean}) : async.Future<File> {
        let {mode,encoding,flush} = Object.assign({
            "mode" : FileMode.WRITE,
            "encoding" : convert.properties.UTF8,
            "flush" : false}, _namedArguments );
        try {
            return this.writeAsBytes(encoding.encode(contents),{
                mode : mode,flush : flush});
        } catch (__error__) {

            {
                let e = __error__;
                return new async.Future.error(e);
            }
        }
    }
    writeAsStringSync(contents : string,_namedArguments? : {mode? : FileMode,encoding? : convert.Encoding,flush? : boolean}) : void {
        let {mode,encoding,flush} = Object.assign({
            "mode" : FileMode.WRITE,
            "encoding" : convert.properties.UTF8,
            "flush" : false}, _namedArguments );
        this.writeAsBytesSync(encoding.encode(contents),{
            mode : mode,flush : flush});
    }
    toString() : string {
        return `File: '${this.path}'`;
    }
    static throwIfError(result : core.DartObject,msg : string,path : string) {
        if (is(result, OSError)) {
            throw new FileSystemException(msg,path,result);
        }
    }
}

export namespace _Directory {
    export type Constructors = FileSystemEntity.Constructors | '_Directory';
    export type Interface = Omit<_Directory, Constructors>;
}
@DartClass
@Implements(Directory)
export class _Directory extends FileSystemEntity implements Directory.Interface {
    path : string;

    constructor(path : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _Directory(path : string) {
        this.path = path;
        if (isNot(this.path, "string")) {
            throw new core.ArgumentError(`${core.DartError.safeToString(this.path)} ` + 'is not a String');
        }
    }
    static _current() {
    }
    static _setCurrent(path : any) {
    }
    static _createTemp(path : string) {
    }
    static _systemTemp() : string {
    }
    static _exists(path : string) {
    }
    static _create(path : string) {
    }
    static _deleteNative(path : string,recursive : boolean) {
    }
    static _rename(path : string,newPath : string) {
    }
    static _fillWithDirectoryListing(list : core.DartList<FileSystemEntity>,path : string,recursive : boolean,followLinks : boolean) : void {
    }
    static get current() : Directory {
        let result = _Directory._current();
        if (is(result, OSError)) {
            throw new FileSystemException("Getting current working directory failed","",result);
        }
        return new _Directory(result);
    }
    static set current(path : any) {
        if (is(path, Directory)) path = path.path;
        let result = _Directory._setCurrent(path);
        if (is(result, core.ArgumentError)) throw result;
        if (is(result, OSError)) {
            throw new FileSystemException("Setting current working directory failed",path,result);
        }
    }
    get uri() : lib5.Uri {
        return new lib5.Uri.directory(this.path);
    }
    exists() : async.Future<boolean> {
        return _IOService._dispatch(properties._DIRECTORY_EXISTS,new core.DartList.literal(this.path)).then((response : any) =>  {
            if (this._isErrorResponse(response)) {
                throw this._exceptionOrErrorFromResponse(response,"Exists failed");
            }
            return op(Op.EQUALS,response,1);
        });
    }
    existsSync() : boolean {
        let result = _Directory._exists(this.path);
        if (is(result, OSError)) {
            throw new FileSystemException("Exists failed",this.path,result);
        }
        return (op(Op.EQUALS,result,1));
    }
    get absolute() : Directory {
        return new Directory(this._absolutePath);
    }
    create(_namedArguments? : {recursive? : boolean}) : async.Future<Directory> {
        let {recursive} = Object.assign({
            "recursive" : false}, _namedArguments );
        if (recursive) {
            return this.exists().then((exists : any) =>  {
                if (exists) return this;
                if (this.path != this.parent.path) {
                    return this.parent.create({
                        recursive : true}).then((_ : any) =>  {
                        return this.create();
                    });
                }else {
                    return this.create();
                }
            });
        }else {
            return _IOService._dispatch(properties._DIRECTORY_CREATE,new core.DartList.literal(this.path)).then((response : any) =>  {
                if (this._isErrorResponse(response)) {
                    throw this._exceptionOrErrorFromResponse(response,"Creation failed");
                }
                return this;
            });
        }
    }
    createSync(_namedArguments? : {recursive? : boolean}) : void {
        let {recursive} = Object.assign({
            "recursive" : false}, _namedArguments );
        if (recursive) {
            if (this.existsSync()) return;
            if (this.path != this.parent.path) {
                this.parent.createSync({
                    recursive : true});
            }
        }
        let result = _Directory._create(this.path);
        if (is(result, OSError)) {
            throw new FileSystemException("Creation failed",this.path,result);
        }
    }
    static get systemTemp() : Directory {
        return new Directory(_Directory._systemTemp());
    }
    createTemp(prefix? : string) : async.Future<Directory> {
        if (prefix == null) prefix = '';
        if (this.path == '') {
            throw new core.ArgumentError("Directory.createTemp called with an empty path. " + "To use the system temp directory, use Directory.systemTemp");
        }
        let fullPrefix : string;
        if (new core.DartString(this.path).endsWith('/') || (Platform.isWindows && new core.DartString(this.path).endsWith('\'))) {
            fullPrefix = `${this.path}${prefix}`;
        }else {
            fullPrefix = `${this.path}${Platform.pathSeparator}${prefix}`;
        }
        return _IOService._dispatch(properties._DIRECTORY_CREATE_TEMP,new core.DartList.literal(fullPrefix)).then((response : any) =>  {
            if (this._isErrorResponse(response)) {
                throw this._exceptionOrErrorFromResponse(response,"Creation of temporary directory failed");
            }
            return new Directory(response);
        });
    }
    createTempSync(prefix? : string) : Directory {
        if (prefix == null) prefix = '';
        if (this.path == '') {
            throw new core.ArgumentError("Directory.createTemp called with an empty path. " + "To use the system temp directory, use Directory.systemTemp");
        }
        let fullPrefix : string;
        if (new core.DartString(this.path).endsWith('/') || (Platform.isWindows && new core.DartString(this.path).endsWith('\'))) {
            fullPrefix = `${this.path}${prefix}`;
        }else {
            fullPrefix = `${this.path}${Platform.pathSeparator}${prefix}`;
        }
        let result = _Directory._createTemp(fullPrefix);
        if (is(result, OSError)) {
            throw new FileSystemException("Creation of temporary directory failed",fullPrefix,result);
        }
        return new Directory(result);
    }
    _delete(_namedArguments? : {recursive? : boolean}) : async.Future<Directory> {
        let {recursive} = Object.assign({
            "recursive" : false}, _namedArguments );
        return _IOService._dispatch(properties._DIRECTORY_DELETE,new core.DartList.literal(this.path,recursive)).then((response : any) =>  {
            if (this._isErrorResponse(response)) {
                throw this._exceptionOrErrorFromResponse(response,"Deletion failed");
            }
            return this;
        });
    }
    _deleteSync(_namedArguments? : {recursive? : boolean}) : void {
        let {recursive} = Object.assign({
            "recursive" : false}, _namedArguments );
        let result = _Directory._deleteNative(this.path,recursive);
        if (is(result, OSError)) {
            throw new FileSystemException("Deletion failed",this.path,result);
        }
    }
    rename(newPath : string) : async.Future<Directory> {
        return _IOService._dispatch(properties._DIRECTORY_RENAME,new core.DartList.literal(this.path,newPath)).then((response : any) =>  {
            if (this._isErrorResponse(response)) {
                throw this._exceptionOrErrorFromResponse(response,"Rename failed");
            }
            return new Directory(newPath);
        });
    }
    renameSync(newPath : string) : Directory {
        if (isNot(newPath, "string")) {
            throw new core.ArgumentError();
        }
        let result = _Directory._rename(this.path,newPath);
        if (is(result, OSError)) {
            throw new FileSystemException("Rename failed",this.path,result);
        }
        return new Directory(newPath);
    }
    list(_namedArguments? : {recursive? : boolean,followLinks? : boolean}) : async.DartStream<FileSystemEntity> {
        let {recursive,followLinks} = Object.assign({
            "recursive" : false,
            "followLinks" : true}, _namedArguments );
        return new _AsyncDirectoryLister(FileSystemEntity._ensureTrailingPathSeparators(this.path),recursive,followLinks).stream;
    }
    listSync(_namedArguments? : {recursive? : boolean,followLinks? : boolean}) : core.DartList<FileSystemEntity> {
        let {recursive,followLinks} = Object.assign({
            "recursive" : false,
            "followLinks" : true}, _namedArguments );
        if (isNot(recursive, "boolean") || isNot(followLinks, "boolean")) {
            throw new core.ArgumentError();
        }
        let result = new core.DartList.literal<FileSystemEntity>();
        _Directory._fillWithDirectoryListing(result,FileSystemEntity._ensureTrailingPathSeparators(this.path),recursive,followLinks);
        return result;
    }
    toString() : string {
        return `Directory: '${this.path}'`;
    }
    _isErrorResponse(response : any) : boolean {
        return is(response, core.DartList<any>) && response[0] != properties._SUCCESS_RESPONSE;
    }
    _exceptionOrErrorFromResponse(response : any,message : string) {
        /* TODO (AssertStatementImpl) : assert (_isErrorResponse(response)); */;
        switch (op(Op.INDEX,response,properties._ERROR_RESPONSE_ERROR_TYPE)) {
            case properties._ILLEGAL_ARGUMENT_RESPONSE:
                return new core.ArgumentError();
            case properties._OSERROR_RESPONSE:
                let err = new OSError(op(Op.INDEX,response,properties._OSERROR_RESPONSE_MESSAGE),op(Op.INDEX,response,properties._OSERROR_RESPONSE_ERROR_CODE));
                return new FileSystemException(message,this.path,err);
            default:
                return new core.Exception("Unknown error");
        }
    }
}

export namespace _ZLibDecoderSink {
    export type Constructors = _FilterSink.Constructors | '_ZLibDecoderSink';
    export type Interface = Omit<_ZLibDecoderSink, Constructors>;
}
@DartClass
export class _ZLibDecoderSink extends _FilterSink {
    constructor(sink : convert.ByteConversionSink,windowBits : number,dictionary : core.DartList<number>,raw : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ZLibDecoderSink(sink : convert.ByteConversionSink,windowBits : number,dictionary : core.DartList<number>,raw : boolean) {
        super._FilterSink(sink,_Filter._newZLibInflateFilter(windowBits,dictionary,raw));
    }
}

export namespace _ZLibEncoderSink {
    export type Constructors = _FilterSink.Constructors | '_ZLibEncoderSink';
    export type Interface = Omit<_ZLibEncoderSink, Constructors>;
}
@DartClass
export class _ZLibEncoderSink extends _FilterSink {
    constructor(sink : convert.ByteConversionSink,gzip : boolean,level : number,windowBits : number,memLevel : number,strategy : number,dictionary : core.DartList<number>,raw : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ZLibEncoderSink(sink : convert.ByteConversionSink,gzip : boolean,level : number,windowBits : number,memLevel : number,strategy : number,dictionary : core.DartList<number>,raw : boolean) {
        super._FilterSink(sink,_Filter._newZLibDeflateFilter(gzip,level,windowBits,memLevel,strategy,dictionary,raw));
    }
}

export namespace _SHA1 {
    export type Constructors = _HashBase.Constructors | '_SHA1';
    export type Interface = Omit<_SHA1, Constructors>;
}
@DartClass
export class _SHA1 extends _HashBase {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SHA1() {
        this._w = new core.DartList<any>(80);
        super._HashBase(16,5,true);
        this._h[0] = 1732584193;
        this._h[1] = 4023233417;
        this._h[2] = 2562383102;
        this._h[3] = 271733878;
        this._h[4] = 3285377520;
    }
    newInstance() : _SHA1 {
        return new _SHA1();
    }
    _updateHash(m : core.DartList<number>) : void {
        /* TODO (AssertStatementImpl) : assert (m.length == 16); */;
        let a = this._h[0];
        let b = this._h[1];
        let c = this._h[2];
        let d = this._h[3];
        let e = this._h[4];
        for(let i = 0; i < 80; i++){
            if (i < 16) {
                this._w[i] = m[i];
            }else {
                let n = this._w[i - 3] ^ this._w[i - 8] ^ this._w[i - 14] ^ this._w[i - 16];
                this._w[i] = this._rotl32(n,1);
            }
            let t = this._add32(this._add32(this._rotl32(a,5),e),this._w[i]);
            if (i < 20) {
                t = this._add32(this._add32(t,(b & c) | (~b & d)),1518500249);
            }else if (i < 40) {
                t = this._add32(this._add32(t,(b ^ c ^ d)),1859775393);
            }else if (i < 60) {
                t = this._add32(this._add32(t,(b & c) | (b & d) | (c & d)),2400959708);
            }else {
                t = this._add32(this._add32(t,b ^ c ^ d),3395469782);
            }
            e = d;
            d = c;
            c = this._rotl32(b,30);
            b = a;
            a = op(Op.BITAND,t,properties._MASK_32);
        }
        this._h[0] = this._add32(a,this._h[0]);
        this._h[1] = this._add32(b,this._h[1]);
        this._h[2] = this._add32(c,this._h[2]);
        this._h[3] = this._add32(d,this._h[3]);
        this._h[4] = this._add32(e,this._h[4]);
    }
    _w : core.DartList<number>;

}

export namespace _MD5 {
    export type Constructors = _HashBase.Constructors | '_MD5';
    export type Interface = Omit<_MD5, Constructors>;
}
@DartClass
export class _MD5 extends _HashBase {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MD5() {
        super._HashBase(16,4,false);
        this._h[0] = 1732584193;
        this._h[1] = 4023233417;
        this._h[2] = 2562383102;
        this._h[3] = 271733878;
    }
    newInstance() : _MD5 {
        return new _MD5();
    }
    private static __$_k;
    static get _k() { 
        if (this.__$_k===undefined) {
            this.__$_k = new core.DartList.literal(3614090360,3905402710,606105819,3250441966,4118548399,1200080426,2821735955,4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,2399980690,4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745);
        }
        return this.__$_k;
    }

    private static __$_r;
    static get _r() { 
        if (this.__$_r===undefined) {
            this.__$_r = new core.DartList.literal(7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21);
        }
        return this.__$_r;
    }

    _updateHash(m : core.DartList<number>) : void {
        /* TODO (AssertStatementImpl) : assert (m.length == 16); */;
        let a = this._h[0];
        let b = this._h[1];
        let c = this._h[2];
        let d = this._h[3];
        let t0;
        let t1;
        for(let i = 0; i < 64; i++){
            if (i < 16) {
                t0 = (b & c) | ((~b & properties._MASK_32) & d);
                t1 = i;
            }else if (i < 32) {
                t0 = (d & b) | ((~d & properties._MASK_32) & c);
                t1 = ((5 * i) + 1) % 16;
            }else if (i < 48) {
                t0 = b ^ c ^ d;
                t1 = ((3 * i) + 5) % 16;
            }else {
                t0 = c ^ (b | (~d & properties._MASK_32));
                t1 = (7 * i) % 16;
            }
            let temp = d;
            d = c;
            c = b;
            b = this._add32(b,this._rotl32(this._add32(this._add32(a,t0),this._add32(op(Op.INDEX,_MD5._k,i),m[t1])),op(Op.INDEX,_MD5._r,i)));
            a = temp;
        }
        this._h[0] = this._add32(a,this._h[0]);
        this._h[1] = this._add32(b,this._h[1]);
        this._h[2] = this._add32(c,this._h[2]);
        this._h[3] = this._add32(d,this._h[3]);
    }
}

export namespace Stdout {
    export type Constructors = _StdSink.Constructors | '_';
    export type Interface = Omit<Stdout, Constructors>;
}
@DartClass
@Implements(IOSink)
export class Stdout extends _StdSink implements IOSink.Interface {
    _fd : number;

    _nonBlocking : IOSink;

    @namedConstructor
    _(sink : IOSink,_fd : number) {
        super._StdSink(sink);
        this._fd = _fd;
    }
    static _ : new(sink : IOSink,_fd : number) => Stdout;

    get hasTerminal() : boolean {
        return this._hasTerminal(this._fd);
    }
    get terminalColumns() : number {
        return this._terminalColumns(this._fd);
    }
    get terminalLines() : number {
        return this._terminalLines(this._fd);
    }
    get supportsAnsiEscapes() : boolean {
        return Stdout._supportsAnsiEscapes(this._fd);
    }
    _hasTerminal(fd : number) : boolean {
    }
    _terminalColumns(fd : number) : number {
    }
    _terminalLines(fd : number) : number {
    }
    static _supportsAnsiEscapes(fd : number) : boolean {
    }
    get nonBlocking() : IOSink {
        if (op(Op.EQUALS,this._nonBlocking,null)) {
            this._nonBlocking = new IOSink(new _FileStreamConsumer.fromStdio(this._fd));
        }
        return this._nonBlocking;
    }
}

export namespace _SocketResourceInfo {
    export type Constructors = _ReadWriteResourceInfo.Constructors | '_SocketResourceInfo';
    export type Interface = Omit<_SocketResourceInfo, Constructors>;
}
@DartClass
export class _SocketResourceInfo extends _ReadWriteResourceInfo {
    private static __$TCP_STRING : string;
    static get TCP_STRING() : string { 
        if (this.__$TCP_STRING===undefined) {
            this.__$TCP_STRING = 'TCP';
        }
        return this.__$TCP_STRING;
    }

    private static __$UDP_STRING : string;
    static get UDP_STRING() : string { 
        if (this.__$UDP_STRING===undefined) {
            this.__$UDP_STRING = 'UDP';
        }
        return this.__$UDP_STRING;
    }

    private static __$TYPE : string;
    static get TYPE() : string { 
        if (this.__$TYPE===undefined) {
            this.__$TYPE = '_socket';
        }
        return this.__$TYPE;
    }

    socket;

    private static __$openSockets : core.DartMap<number,_SocketResourceInfo>;
    static get openSockets() : core.DartMap<number,_SocketResourceInfo> { 
        if (this.__$openSockets===undefined) {
            this.__$openSockets = new core.DartMap<number,_SocketResourceInfo>();
        }
        return this.__$openSockets;
    }
    static set openSockets(__$value : core.DartMap<number,_SocketResourceInfo>)  { 
        this.__$openSockets = __$value;
    }

    constructor(socket : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SocketResourceInfo(socket : any) {
        super._ReadWriteResourceInfo(_SocketResourceInfo.TYPE);
        this.socket = socket;
        _SocketResourceInfo.SocketOpened(this);
    }
    get name() : string {
        if (this.socket.isListening) {
            return `listening:${this.socket.address.host}:${this.socket.port}`;
        }
        let remote = '';
        try {
            let remoteHost = this.socket.remoteAddress.host;
            let remotePort = this.socket.remotePort;
            remote = ` -> ${remoteHost}:${remotePort}`;
        } catch (__error__) {

            {
                let e = __error__;
            }
        }
        return `${this.socket.address.host}:${this.socket.port}${remote}`;
    }
    static getOpenSocketsList() : core.DartIterable<core.DartMap<string,string>> {
        return new core.DartList.from(_SocketResourceInfo.openSockets.values.map((e : any) =>  {
            return e.referenceValueMap;
        }));
    }
    getSocketInfoMap() : core.DartMap<string,any> {
        let result = this.fullValueMap;
        result.set('socketType',this.socket.isTcp ? _SocketResourceInfo.TCP_STRING : _SocketResourceInfo.UDP_STRING);
        result.set('listening',this.socket.isListening);
        result.set('host',this.socket.address.host);
        result.set('port',this.socket.port);
        if (!this.socket.isListening) {
            try {
                result.set('remoteHost',this.socket.remoteAddress.host);
                result.set('remotePort',this.socket.remotePort);
            } catch (__error__) {

                {
                    let e = __error__;
                    result.set('remotePort','NA');
                    result.set('remoteHost','NA');
                }
            }
        }else {
            result.set('remotePort','NA');
            result.set('remoteHost','NA');
        }
        result.set('addressType',this.socket.address.type.name);
        return result;
    }
    static getSocketInfoMapByID(function : string,params : core.DartMap<string,string>) : async.Future<developer.ServiceExtensionResponse> {
        /* TODO (AssertStatementImpl) : assert (params.containsKey('id')); */;
        let id = core.DartInt.parse(params.get('id'));
        let result = _SocketResourceInfo.openSockets.containsKey(id) ? _SocketResourceInfo.openSockets.get(id).getSocketInfoMap() : new core.DartMap.literal([
        ]);
        let json = convert.properties.JSON.encode(result);
        return new async.Future.value(new developer.ServiceExtensionResponse.result(json));
    }
    static getOpenSockets(function : any,params : any) : async.Future<developer.ServiceExtensionResponse> {
        /* TODO (AssertStatementImpl) : assert (function == 'ext.dart.io.getOpenSockets'); */;
        let data = new core.DartMap.literal([
            ['type','_opensockets'],
            ['data',_SocketResourceInfo.getOpenSocketsList()]]);
        let json = convert.properties.JSON.encode(data);
        return new async.Future.value(new developer.ServiceExtensionResponse.result(json));
    }
    static SocketOpened(info : _SocketResourceInfo) {
        /* TODO (AssertStatementImpl) : assert (!openSockets.containsKey(info.id)); */;
        _SocketResourceInfo.openSockets.set(info.id,info);
    }
    static SocketClosed(info : _SocketResourceInfo) {
        /* TODO (AssertStatementImpl) : assert (openSockets.containsKey(info.id)); */;
        _SocketResourceInfo.openSockets.remove(info.id);
    }
}

export namespace _FileResourceInfo {
    export type Constructors = _ReadWriteResourceInfo.Constructors | '_FileResourceInfo';
    export type Interface = Omit<_FileResourceInfo, Constructors>;
}
@DartClass
export class _FileResourceInfo extends _ReadWriteResourceInfo {
    private static __$TYPE : string;
    static get TYPE() : string { 
        if (this.__$TYPE===undefined) {
            this.__$TYPE = '_file';
        }
        return this.__$TYPE;
    }

    file;

    private static __$openFiles : core.DartMap<number,_FileResourceInfo>;
    static get openFiles() : core.DartMap<number,_FileResourceInfo> { 
        if (this.__$openFiles===undefined) {
            this.__$openFiles = new core.DartMap<number,_FileResourceInfo>();
        }
        return this.__$openFiles;
    }
    static set openFiles(__$value : core.DartMap<number,_FileResourceInfo>)  { 
        this.__$openFiles = __$value;
    }

    constructor(file : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _FileResourceInfo(file : any) {
        super._ReadWriteResourceInfo(_FileResourceInfo.TYPE);
        this.file = file;
        _FileResourceInfo.FileOpened(this);
    }
    static FileOpened(info : _FileResourceInfo) {
        /* TODO (AssertStatementImpl) : assert (!openFiles.containsKey(info.id)); */;
        _FileResourceInfo.openFiles.set(info.id,info);
    }
    static FileClosed(info : _FileResourceInfo) {
        /* TODO (AssertStatementImpl) : assert (openFiles.containsKey(info.id)); */;
        _FileResourceInfo.openFiles.remove(info.id);
    }
    static getOpenFilesList() : core.DartIterable<core.DartMap<string,string>> {
        return new core.DartList.from(_FileResourceInfo.openFiles.values.map((e : any) =>  {
            return e.referenceValueMap;
        }));
    }
    static getOpenFiles(function : any,params : any) : async.Future<developer.ServiceExtensionResponse> {
        /* TODO (AssertStatementImpl) : assert (function == 'ext.dart.io.getOpenFiles'); */;
        let data = new core.DartMap.literal([
            ['type','_openfiles'],
            ['data',_FileResourceInfo.getOpenFilesList()]]);
        let json = convert.properties.JSON.encode(data);
        return new async.Future.value(new developer.ServiceExtensionResponse.result(json));
    }
    getFileInfoMap() : core.DartMap<string,any> {
        return this.fullValueMap;
    }
    static getFileInfoMapByID(function : any,params : any) : async.Future<developer.ServiceExtensionResponse> {
        /* TODO (AssertStatementImpl) : assert (params.containsKey('id')); */;
        let id = core.DartInt.parse(op(Op.INDEX,params,'id'));
        let result = _FileResourceInfo.openFiles.containsKey(id) ? _FileResourceInfo.openFiles.get(id).getFileInfoMap() : new core.DartMap.literal([
        ]);
        let json = convert.properties.JSON.encode(result);
        return new async.Future.value(new developer.ServiceExtensionResponse.result(json));
    }
    get name() : string {
        return `${this.file.path}`;
    }
}

export namespace _HttpOutboundMessage {
    export type Constructors = _IOSinkImpl.Constructors | '_HttpOutboundMessage';
    export type Interface<T> = Omit<_HttpOutboundMessage<T>, Constructors>;
}
@DartClass
export class _HttpOutboundMessage<T> extends _IOSinkImpl {
    _encodingSet : boolean;

    _bufferOutput : boolean;

    _uri : lib5.Uri;

    _outgoing : _HttpOutgoing;

    headers : _HttpHeaders;

    constructor(uri : lib5.Uri,protocolVersion : string,outgoing : _HttpOutgoing,_namedArguments? : {initialHeaders? : _HttpHeaders}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _HttpOutboundMessage(uri : lib5.Uri,protocolVersion : string,outgoing : _HttpOutgoing,_namedArguments? : {initialHeaders? : _HttpHeaders}) {
        let {initialHeaders} = Object.assign({
        }, _namedArguments );
        this._encodingSet = false;
        this._bufferOutput = true;
        this._uri = uri;
        this.headers = new _HttpHeaders(protocolVersion,{
            defaultPortForScheme : uri.scheme == 'https' ? HttpClient.DEFAULT_HTTPS_PORT : HttpClient.DEFAULT_HTTP_PORT,initialHeaders : initialHeaders});
        this._outgoing = outgoing;
        super._IOSinkImpl(outgoing,null);
        this._outgoing.outbound = this;
        this._encodingMutable = false;
    }
    get contentLength() : number {
        return this.headers.contentLength;
    }
    set contentLength(contentLength : number) {
        this.headers.contentLength = contentLength;
    }
    get persistentConnection() : boolean {
        return this.headers.persistentConnection;
    }
    set persistentConnection(p : boolean) {
        this.headers.persistentConnection = p;
    }
    get bufferOutput() : boolean {
        return this._bufferOutput;
    }
    set bufferOutput(bufferOutput : boolean) {
        if (this._outgoing.headersWritten) throw new core.StateError("Header already sent");
        this._bufferOutput = bufferOutput;
    }
    get encoding() : convert.Encoding {
        if (this._encodingSet && this._outgoing.headersWritten) {
            return this._encoding;
        }
        let charset;
        if (this.headers.contentType != null && this.headers.contentType.charset != null) {
            charset = this.headers.contentType.charset;
        }else {
            charset = "iso-8859-1";
        }
        return convert.Encoding.getByName(charset);
    }
    add(data : core.DartList<number>) : void {
        if (data.length == 0) return;
        super.add(data);
    }
    write(obj : core.DartObject) : void {
        if (!this._encodingSet) {
            this._encoding = this.encoding;
            this._encodingSet = true;
        }
        super.write(obj);
    }
    @Abstract
    _writeHeader() : void{ throw 'abstract'}
    get _isConnectionClosed() : boolean {
        return false;
    }
}

export namespace _HttpClientRequest {
    export type Constructors = _HttpOutboundMessage.Constructors | '_HttpClientRequest';
    export type Interface = Omit<_HttpClientRequest, Constructors>;
}
@DartClass
@Implements(HttpClientRequest)
export class _HttpClientRequest extends _HttpOutboundMessage<HttpClientResponse> implements HttpClientRequest.Interface {
    method : string;

    uri : lib5.Uri;

    cookies : core.DartList<Cookie>;

    _httpClient : _HttpClient;

    _httpClientConnection : _HttpClientConnection;

    _responseCompleter : async.DartCompleter<HttpClientResponse>;

    _proxy : _Proxy;

    _response : async.Future<HttpClientResponse>;

    _followRedirects : boolean;

    _maxRedirects : number;

    _responseRedirects : core.DartList<RedirectInfo>;

    constructor(outgoing : _HttpOutgoing,uri : lib5.Uri,method : string,_proxy : _Proxy,_httpClient : _HttpClient,_httpClientConnection : _HttpClientConnection) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _HttpClientRequest(outgoing : _HttpOutgoing,uri : lib5.Uri,method : string,_proxy : _Proxy,_httpClient : _HttpClient,_httpClientConnection : _HttpClientConnection) {
        this.cookies = new core.DartList<Cookie>();
        this._responseCompleter = new async.DartCompleter<HttpClientResponse>();
        this._followRedirects = true;
        this._maxRedirects = 5;
        this._responseRedirects = new core.DartList.literal();
        this.uri = uri;
        super._HttpOutboundMessage(uri,"1.1",outgoing);
        this.method = method;
        this._proxy = _proxy;
        this._httpClient = _httpClient;
        this._httpClientConnection = _httpClientConnection;
        if (this.method == "GET" || this.method == "HEAD") {
            this.contentLength = 0;
        }else {
            this.headers.chunkedTransferEncoding = true;
        }
    }
    get done() : async.Future<HttpClientResponse> {
        if (op(Op.EQUALS,this._response,null)) {
            this._response = async.Future.wait(new core.DartList.literal(this._responseCompleter.future,super.done),{
                eagerError : true}).then((list : any) =>  {
                return list[0];
            });
        }
        return this._response;
    }
    close() : async.Future<HttpClientResponse> {
        super.close();
        return this.done;
    }
    get maxRedirects() : number {
        return this._maxRedirects;
    }
    set maxRedirects(maxRedirects : number) {
        if (this._outgoing.headersWritten) throw new core.StateError("Request already sent");
        this._maxRedirects = maxRedirects;
    }
    get followRedirects() : boolean {
        return this._followRedirects;
    }
    set followRedirects(followRedirects : boolean) {
        if (this._outgoing.headersWritten) throw new core.StateError("Request already sent");
        this._followRedirects = followRedirects;
    }
    get connectionInfo() : HttpConnectionInfo {
        return this._httpClientConnection.connectionInfo;
    }
    _onIncoming(incoming : _HttpIncoming) : void {
        let response = new _HttpClientResponse(incoming,this,this._httpClient);
        let future : async.Future<HttpClientResponse>;
        if (this.followRedirects && response.isRedirect) {
            if (response.redirects.length < this.maxRedirects) {
                future = response.drain().then((_ : any) =>  {
                    return response.redirect();
                });
            }else {
                future = response.drain().then((_ : any) =>  {
                    return new async.Future.error(new RedirectException("Redirect limit exceeded",response.redirects));
                });
            }
        }else if (response._shouldAuthenticateProxy) {
            future = response._authenticate(true);
        }else if (response._shouldAuthenticate) {
            future = response._authenticate(false);
        }else {
            future = new async.Future.value(response);
        }
        future.then((v : any) =>  {
            return this._responseCompleter.complete(v);
        },{
            onError : this._responseCompleter.completeError.bind(this._responseCompleter)});
    }
    _onError(error : any,stackTrace : core.DartStackTrace) : void {
        this._responseCompleter.completeError(error,stackTrace);
    }
    _requestUri() : string {
        var uriStartingFromPath : () => string = () : string =>  {
            let result : string = this.uri.path;
            if (new core.DartString(result).isEmpty) result = "/";
            if (this.uri.hasQuery) {
                result = `${result}?${this.uri.query}`;
            }
            return result;
        };
        if (this._proxy.isDirect) {
            return uriStartingFromPath();
        }else {
            if (this.method == "CONNECT") {
                return `${this.uri.host}:${this.uri.port}`;
            }else {
                if (this._httpClientConnection._proxyTunnel) {
                    return uriStartingFromPath();
                }else {
                    return this.uri.removeFragment().toString();
                }
            }
        }
    }
    _writeHeader() : void {
        let buffer : BytesBuilder = new _CopyingBytesBuilder(properties._OUTGOING_BUFFER_SIZE);
        buffer.add(new core.DartString(this.method).codeUnits);
        buffer.addByte(_CharCode.SP);
        buffer.add(new core.DartString(this._requestUri()).codeUnits);
        buffer.addByte(_CharCode.SP);
        buffer.add(_Const.HTTP11);
        buffer.addByte(_CharCode.CR);
        buffer.addByte(_CharCode.LF);
        if (!this.cookies.isEmpty) {
            let sb : core.DartStringBuffer = new core.DartStringBuffer();
            for(let i : number = 0; i < this.cookies.length; i++){
                if (i > 0) sb.write("; ");
                ((_) : core.DartStringBuffer =>  {
                    {
                        _.write(this.cookies[i].name);
                        _.write("=");
                        _.write(this.cookies[i].value);
                        return _;
                    }
                })(sb);
            }
            this.headers.add(HttpHeaders.COOKIE,sb.toString());
        }
        this.headers._finalize();
        this.headers._build(buffer);
        buffer.addByte(_CharCode.CR);
        buffer.addByte(_CharCode.LF);
        let headerBytes : typed_data.Uint8List = buffer.takeBytes();
        this._outgoing.setHeader(headerBytes,headerBytes.length);
    }
}

export namespace _HttpResponse {
    export type Constructors = _HttpOutboundMessage.Constructors | '_HttpResponse';
    export type Interface = Omit<_HttpResponse, Constructors>;
}
@DartClass
@Implements(HttpResponse)
export class _HttpResponse extends _HttpOutboundMessage<HttpResponse> implements HttpResponse.Interface {
    _statusCode : number;

    _reasonPhrase : string;

    _cookies : core.DartList<Cookie>;

    _httpRequest : _HttpRequest;

    _deadline : core.DartDuration;

    _deadlineTimer : async.DartTimer;

    constructor(uri : lib5.Uri,protocolVersion : string,outgoing : _HttpOutgoing,defaultHeaders : HttpHeaders,serverHeader : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _HttpResponse(uri : lib5.Uri,protocolVersion : string,outgoing : _HttpOutgoing,defaultHeaders : HttpHeaders,serverHeader : string) {
        this._statusCode = 200;
        super._HttpOutboundMessage(uri,protocolVersion,outgoing,{
            initialHeaders : defaultHeaders});
        if (serverHeader != null) this.headers.set('server',serverHeader);
    }
    get _isConnectionClosed() : boolean {
        return this._httpRequest._httpConnection._isClosing;
    }
    get cookies() : core.DartList<Cookie> {
        if (this._cookies == null) this._cookies = new core.DartList<Cookie>();
        return this._cookies;
    }
    get statusCode() : number {
        return this._statusCode;
    }
    set statusCode(statusCode : number) {
        if (this._outgoing.headersWritten) throw new core.StateError("Header already sent");
        this._statusCode = statusCode;
    }
    get reasonPhrase() : string {
        return this._findReasonPhrase(this.statusCode);
    }
    set reasonPhrase(reasonPhrase : string) {
        if (this._outgoing.headersWritten) throw new core.StateError("Header already sent");
        this._reasonPhrase = reasonPhrase;
    }
    redirect(location : lib5.Uri,_namedArguments? : {status? : number}) : async.Future<any> {
        let {status} = Object.assign({
            "status" : HttpStatus.MOVED_TEMPORARILY}, _namedArguments );
        if (this._outgoing.headersWritten) throw new core.StateError("Header already sent");
        this.statusCode = status;
        this.headers.set("location",location.toString());
        return this.close();
    }
    detachSocket(_namedArguments? : {writeHeaders? : boolean}) : async.Future<Socket> {
        let {writeHeaders} = Object.assign({
            "writeHeaders" : true}, _namedArguments );
        if (this._outgoing.headersWritten) throw new core.StateError("Headers already sent");
        this.deadline = null;
        let future = this._httpRequest._httpConnection.detachSocket();
        if (writeHeaders) {
            let headersFuture = this._outgoing.writeHeaders({
                drainRequest : false,setOutgoing : false});
            /* TODO (AssertStatementImpl) : assert (headersFuture == null); */;
        }else {
            this._outgoing.headersWritten = true;
        }
        this.close();
        this.done.catchError((_ : any) =>  {
        });
        return future;
    }
    get connectionInfo() : HttpConnectionInfo {
        return this._httpRequest.connectionInfo;
    }
    get deadline() : core.DartDuration {
        return this._deadline;
    }
    set deadline(d : core.DartDuration) {
        if (this._deadlineTimer != null) this._deadlineTimer.cancel();
        this._deadline = d;
        if (op(Op.EQUALS,this._deadline,null)) return;
        this._deadlineTimer = new async.DartTimer(this._deadline,() =>  {
            this._httpRequest._httpConnection.destroy();
        });
    }
    _writeHeader() : void {
        let buffer : BytesBuilder = new _CopyingBytesBuilder(properties._OUTGOING_BUFFER_SIZE);
        if (this.headers.protocolVersion == "1.1") {
            buffer.add(_Const.HTTP11);
        }else {
            buffer.add(_Const.HTTP10);
        }
        buffer.addByte(_CharCode.SP);
        buffer.add(new core.DartString(new core.DartInt(this.statusCode).toString()).codeUnits);
        buffer.addByte(_CharCode.SP);
        buffer.add(new core.DartString(this.reasonPhrase).codeUnits);
        buffer.addByte(_CharCode.CR);
        buffer.addByte(_CharCode.LF);
        let session = this._httpRequest._session;
        if (session != null && !session._destroyed) {
            session._isNew = false;
            let found : boolean = false;
            for(let i : number = 0; i < this.cookies.length; i++){
                if (new core.DartString(this.cookies[i].name).toUpperCase() == properties._DART_SESSION_ID) {
                    ((_) : Cookie =>  {
                        {
                            _.value = session.id;
                            _.httpOnly = true;
                            _.path = "/";
                            return _;
                        }
                    })(this.cookies[i]);
                    found = true;
                }
            }
            if (!found) {
                let cookie = new Cookie(properties._DART_SESSION_ID,session.id);
                this.cookies.add(((_) : Cookie =>  {
                    {
                        _.httpOnly = true;
                        _.path = "/";
                        return _;
                    }
                })(cookie));
            }
        }
        if (this._cookies != null) {
            this._cookies.forEach((cookie : any) =>  {
                this.headers.add(HttpHeaders.SET_COOKIE,cookie);
            });
        }
        this.headers._finalize();
        this.headers._build(buffer);
        buffer.addByte(_CharCode.CR);
        buffer.addByte(_CharCode.LF);
        let headerBytes : typed_data.Uint8List = buffer.takeBytes();
        this._outgoing.setHeader(headerBytes,headerBytes.length);
    }
    _findReasonPhrase(statusCode : number) : string {
        if (this._reasonPhrase != null) {
            return this._reasonPhrase;
        }
        switch (statusCode) {
            case HttpStatus.CONTINUE:
                return "Continue";
            case HttpStatus.SWITCHING_PROTOCOLS:
                return "Switching Protocols";
            case HttpStatus.OK:
                return "OK";
            case HttpStatus.CREATED:
                return "Created";
            case HttpStatus.ACCEPTED:
                return "Accepted";
            case HttpStatus.NON_AUTHORITATIVE_INFORMATION:
                return "Non-Authoritative Information";
            case HttpStatus.NO_CONTENT:
                return "No Content";
            case HttpStatus.RESET_CONTENT:
                return "Reset Content";
            case HttpStatus.PARTIAL_CONTENT:
                return "Partial Content";
            case HttpStatus.MULTIPLE_CHOICES:
                return "Multiple Choices";
            case HttpStatus.MOVED_PERMANENTLY:
                return "Moved Permanently";
            case HttpStatus.FOUND:
                return "Found";
            case HttpStatus.SEE_OTHER:
                return "See Other";
            case HttpStatus.NOT_MODIFIED:
                return "Not Modified";
            case HttpStatus.USE_PROXY:
                return "Use Proxy";
            case HttpStatus.TEMPORARY_REDIRECT:
                return "Temporary Redirect";
            case HttpStatus.BAD_REQUEST:
                return "Bad Request";
            case HttpStatus.UNAUTHORIZED:
                return "Unauthorized";
            case HttpStatus.PAYMENT_REQUIRED:
                return "Payment Required";
            case HttpStatus.FORBIDDEN:
                return "Forbidden";
            case HttpStatus.NOT_FOUND:
                return "Not Found";
            case HttpStatus.METHOD_NOT_ALLOWED:
                return "Method Not Allowed";
            case HttpStatus.NOT_ACCEPTABLE:
                return "Not Acceptable";
            case HttpStatus.PROXY_AUTHENTICATION_REQUIRED:
                return "Proxy Authentication Required";
            case HttpStatus.REQUEST_TIMEOUT:
                return "Request Time-out";
            case HttpStatus.CONFLICT:
                return "Conflict";
            case HttpStatus.GONE:
                return "Gone";
            case HttpStatus.LENGTH_REQUIRED:
                return "Length Required";
            case HttpStatus.PRECONDITION_FAILED:
                return "Precondition Failed";
            case HttpStatus.REQUEST_ENTITY_TOO_LARGE:
                return "Request Entity Too Large";
            case HttpStatus.REQUEST_URI_TOO_LONG:
                return "Request-URI Too Large";
            case HttpStatus.UNSUPPORTED_MEDIA_TYPE:
                return "Unsupported Media Type";
            case HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE:
                return "Requested range not satisfiable";
            case HttpStatus.EXPECTATION_FAILED:
                return "Expectation Failed";
            case HttpStatus.INTERNAL_SERVER_ERROR:
                return "Internal Server Error";
            case HttpStatus.NOT_IMPLEMENTED:
                return "Not Implemented";
            case HttpStatus.BAD_GATEWAY:
                return "Bad Gateway";
            case HttpStatus.SERVICE_UNAVAILABLE:
                return "Service Unavailable";
            case HttpStatus.GATEWAY_TIMEOUT:
                return "Gateway Time-out";
            case HttpStatus.HTTP_VERSION_NOT_SUPPORTED:
                return "Http Version not supported";
            default:
                return `Status ${statusCode}`;
        }
    }
}

export class properties {
    private static __$_STDIO_HANDLE_TYPE_FILE : number;
    static get _STDIO_HANDLE_TYPE_FILE() : number { 
        if (this.__$_STDIO_HANDLE_TYPE_FILE===undefined) {
            this.__$_STDIO_HANDLE_TYPE_FILE = 2;
        }
        return this.__$_STDIO_HANDLE_TYPE_FILE;
    }
    static set _STDIO_HANDLE_TYPE_FILE(__$value : number)  { 
        this.__$_STDIO_HANDLE_TYPE_FILE = __$value;
    }

    private static __$_SUCCESS_RESPONSE : number;
    static get _SUCCESS_RESPONSE() : number { 
        if (this.__$_SUCCESS_RESPONSE===undefined) {
            this.__$_SUCCESS_RESPONSE = 0;
        }
        return this.__$_SUCCESS_RESPONSE;
    }
    static set _SUCCESS_RESPONSE(__$value : number)  { 
        this.__$_SUCCESS_RESPONSE = __$value;
    }

    private static __$_ILLEGAL_ARGUMENT_RESPONSE : number;
    static get _ILLEGAL_ARGUMENT_RESPONSE() : number { 
        if (this.__$_ILLEGAL_ARGUMENT_RESPONSE===undefined) {
            this.__$_ILLEGAL_ARGUMENT_RESPONSE = 1;
        }
        return this.__$_ILLEGAL_ARGUMENT_RESPONSE;
    }
    static set _ILLEGAL_ARGUMENT_RESPONSE(__$value : number)  { 
        this.__$_ILLEGAL_ARGUMENT_RESPONSE = __$value;
    }

    private static __$_OSERROR_RESPONSE : number;
    static get _OSERROR_RESPONSE() : number { 
        if (this.__$_OSERROR_RESPONSE===undefined) {
            this.__$_OSERROR_RESPONSE = 2;
        }
        return this.__$_OSERROR_RESPONSE;
    }
    static set _OSERROR_RESPONSE(__$value : number)  { 
        this.__$_OSERROR_RESPONSE = __$value;
    }

    private static __$_FILE_CLOSED_RESPONSE : number;
    static get _FILE_CLOSED_RESPONSE() : number { 
        if (this.__$_FILE_CLOSED_RESPONSE===undefined) {
            this.__$_FILE_CLOSED_RESPONSE = 3;
        }
        return this.__$_FILE_CLOSED_RESPONSE;
    }
    static set _FILE_CLOSED_RESPONSE(__$value : number)  { 
        this.__$_FILE_CLOSED_RESPONSE = __$value;
    }

    private static __$_ERROR_RESPONSE_ERROR_TYPE : number;
    static get _ERROR_RESPONSE_ERROR_TYPE() : number { 
        if (this.__$_ERROR_RESPONSE_ERROR_TYPE===undefined) {
            this.__$_ERROR_RESPONSE_ERROR_TYPE = 0;
        }
        return this.__$_ERROR_RESPONSE_ERROR_TYPE;
    }
    static set _ERROR_RESPONSE_ERROR_TYPE(__$value : number)  { 
        this.__$_ERROR_RESPONSE_ERROR_TYPE = __$value;
    }

    private static __$_OSERROR_RESPONSE_ERROR_CODE : number;
    static get _OSERROR_RESPONSE_ERROR_CODE() : number { 
        if (this.__$_OSERROR_RESPONSE_ERROR_CODE===undefined) {
            this.__$_OSERROR_RESPONSE_ERROR_CODE = 1;
        }
        return this.__$_OSERROR_RESPONSE_ERROR_CODE;
    }
    static set _OSERROR_RESPONSE_ERROR_CODE(__$value : number)  { 
        this.__$_OSERROR_RESPONSE_ERROR_CODE = __$value;
    }

    private static __$_OSERROR_RESPONSE_MESSAGE : number;
    static get _OSERROR_RESPONSE_MESSAGE() : number { 
        if (this.__$_OSERROR_RESPONSE_MESSAGE===undefined) {
            this.__$_OSERROR_RESPONSE_MESSAGE = 2;
        }
        return this.__$_OSERROR_RESPONSE_MESSAGE;
    }
    static set _OSERROR_RESPONSE_MESSAGE(__$value : number)  { 
        this.__$_OSERROR_RESPONSE_MESSAGE = __$value;
    }

    private static __$_MASK_8;
    static get _MASK_8() { 
        if (this.__$_MASK_8===undefined) {
            this.__$_MASK_8 = 255;
        }
        return this.__$_MASK_8;
    }
    static set _MASK_8(__$value : any)  { 
        this.__$_MASK_8 = __$value;
    }

    private static __$_MASK_32;
    static get _MASK_32() { 
        if (this.__$_MASK_32===undefined) {
            this.__$_MASK_32 = 4294967295;
        }
        return this.__$_MASK_32;
    }
    static set _MASK_32(__$value : any)  { 
        this.__$_MASK_32 = __$value;
    }

    private static __$_BITS_PER_BYTE;
    static get _BITS_PER_BYTE() { 
        if (this.__$_BITS_PER_BYTE===undefined) {
            this.__$_BITS_PER_BYTE = 8;
        }
        return this.__$_BITS_PER_BYTE;
    }
    static set _BITS_PER_BYTE(__$value : any)  { 
        this.__$_BITS_PER_BYTE = __$value;
    }

    private static __$_BYTES_PER_WORD;
    static get _BYTES_PER_WORD() { 
        if (this.__$_BYTES_PER_WORD===undefined) {
            this.__$_BYTES_PER_WORD = 4;
        }
        return this.__$_BYTES_PER_WORD;
    }
    static set _BYTES_PER_WORD(__$value : any)  { 
        this.__$_BYTES_PER_WORD = __$value;
    }

    private static __$ZLIB : ZLibCodec;
    static get ZLIB() : ZLibCodec { 
        if (this.__$ZLIB===undefined) {
            this.__$ZLIB = new ZLibCodec._default();
        }
        return this.__$ZLIB;
    }
    static set ZLIB(__$value : ZLibCodec)  { 
        this.__$ZLIB = __$value;
    }

    private static __$GZIP : GZipCodec;
    static get GZIP() : GZipCodec { 
        if (this.__$GZIP===undefined) {
            this.__$GZIP = new GZipCodec._default();
        }
        return this.__$GZIP;
    }
    static set GZIP(__$value : GZipCodec)  { 
        this.__$GZIP = __$value;
    }

    private static __$READ;
    static get READ() { 
        if (this.__$READ===undefined) {
            this.__$READ = FileMode.READ;
        }
        return this.__$READ;
    }
    static set READ(__$value : any)  { 
        this.__$READ = __$value;
    }

    private static __$WRITE;
    static get WRITE() { 
        if (this.__$WRITE===undefined) {
            this.__$WRITE = FileMode.WRITE;
        }
        return this.__$WRITE;
    }
    static set WRITE(__$value : any)  { 
        this.__$WRITE = __$value;
    }

    private static __$APPEND;
    static get APPEND() { 
        if (this.__$APPEND===undefined) {
            this.__$APPEND = FileMode.APPEND;
        }
        return this.__$APPEND;
    }
    static set APPEND(__$value : any)  { 
        this.__$APPEND = __$value;
    }

    private static __$WRITE_ONLY;
    static get WRITE_ONLY() { 
        if (this.__$WRITE_ONLY===undefined) {
            this.__$WRITE_ONLY = FileMode.WRITE_ONLY;
        }
        return this.__$WRITE_ONLY;
    }
    static set WRITE_ONLY(__$value : any)  { 
        this.__$WRITE_ONLY = __$value;
    }

    private static __$WRITE_ONLY_APPEND;
    static get WRITE_ONLY_APPEND() { 
        if (this.__$WRITE_ONLY_APPEND===undefined) {
            this.__$WRITE_ONLY_APPEND = FileMode.WRITE_ONLY_APPEND;
        }
        return this.__$WRITE_ONLY_APPEND;
    }
    static set WRITE_ONLY_APPEND(__$value : any)  { 
        this.__$WRITE_ONLY_APPEND = __$value;
    }

    private static __$_BLOCK_SIZE : number;
    static get _BLOCK_SIZE() : number { 
        if (this.__$_BLOCK_SIZE===undefined) {
            this.__$_BLOCK_SIZE = 64 * 1024;
        }
        return this.__$_BLOCK_SIZE;
    }
    static set _BLOCK_SIZE(__$value : number)  { 
        this.__$_BLOCK_SIZE = __$value;
    }

    private static __$_serverMaxWindowBits : string;
    static get _serverMaxWindowBits() : string { 
        if (this.__$_serverMaxWindowBits===undefined) {
            this.__$_serverMaxWindowBits = "server_max_window_bits";
        }
        return this.__$_serverMaxWindowBits;
    }
    static set _serverMaxWindowBits(__$value : string)  { 
        this.__$_serverMaxWindowBits = __$value;
    }

    private static __$_STDIO_HANDLE_TYPE_PIPE : number;
    static get _STDIO_HANDLE_TYPE_PIPE() : number { 
        if (this.__$_STDIO_HANDLE_TYPE_PIPE===undefined) {
            this.__$_STDIO_HANDLE_TYPE_PIPE = 1;
        }
        return this.__$_STDIO_HANDLE_TYPE_PIPE;
    }
    static set _STDIO_HANDLE_TYPE_PIPE(__$value : number)  { 
        this.__$_STDIO_HANDLE_TYPE_PIPE = __$value;
    }

    private static __$SYSTEM_ENCODING : SystemEncoding;
    static get SYSTEM_ENCODING() : SystemEncoding { 
        if (this.__$SYSTEM_ENCODING===undefined) {
            this.__$SYSTEM_ENCODING = new SystemEncoding();
        }
        return this.__$SYSTEM_ENCODING;
    }
    static set SYSTEM_ENCODING(__$value : SystemEncoding)  { 
        this.__$SYSTEM_ENCODING = __$value;
    }

    static get pid() : number {
        return _ProcessUtils._pid(null);
    }
    static get exitCode() : number {
        return _ProcessUtils._getExitCode();
    }
    static set exitCode(code : number) {
        if (isNot(code, "number")) {
            throw new core.ArgumentError("Integer value for exit code expected");
        }
        _ProcessUtils._setExitCode(code);
    }
    private static __$_SSL_PROCESS_FILTER : number;
    static get _SSL_PROCESS_FILTER() : number { 
        if (this.__$_SSL_PROCESS_FILTER===undefined) {
            this.__$_SSL_PROCESS_FILTER = 42;
        }
        return this.__$_SSL_PROCESS_FILTER;
    }
    static set _SSL_PROCESS_FILTER(__$value : number)  { 
        this.__$_SSL_PROCESS_FILTER = __$value;
    }

    private static __$_DIRECTORY_RENAME : number;
    static get _DIRECTORY_RENAME() : number { 
        if (this.__$_DIRECTORY_RENAME===undefined) {
            this.__$_DIRECTORY_RENAME = 41;
        }
        return this.__$_DIRECTORY_RENAME;
    }
    static set _DIRECTORY_RENAME(__$value : number)  { 
        this.__$_DIRECTORY_RENAME = __$value;
    }

    private static __$_STDIO_HANDLE_TYPE_OTHER : number;
    static get _STDIO_HANDLE_TYPE_OTHER() : number { 
        if (this.__$_STDIO_HANDLE_TYPE_OTHER===undefined) {
            this.__$_STDIO_HANDLE_TYPE_OTHER = 4;
        }
        return this.__$_STDIO_HANDLE_TYPE_OTHER;
    }
    static set _STDIO_HANDLE_TYPE_OTHER(__$value : number)  { 
        this.__$_STDIO_HANDLE_TYPE_OTHER = __$value;
    }

    static get stdin() : Stdin {
        if (op(Op.EQUALS,properties._stdin,null)) {
            properties._stdin = _StdIOUtils._getStdioInputStream();
        }
        return properties._stdin;
    }
    private static __$_stdout : Stdout;
    static get _stdout() : Stdout { 
        return this.__$_stdout;
    }
    static set _stdout(__$value : Stdout)  { 
        this.__$_stdout = __$value;
    }

    private static __$_stdin : Stdin;
    static get _stdin() : Stdin { 
        return this.__$_stdin;
    }
    static set _stdin(__$value : Stdin)  { 
        this.__$_stdin = __$value;
    }

    private static __$_DIRECTORY_LIST_STOP : number;
    static get _DIRECTORY_LIST_STOP() : number { 
        if (this.__$_DIRECTORY_LIST_STOP===undefined) {
            this.__$_DIRECTORY_LIST_STOP = 40;
        }
        return this.__$_DIRECTORY_LIST_STOP;
    }
    static set _DIRECTORY_LIST_STOP(__$value : number)  { 
        this.__$_DIRECTORY_LIST_STOP = __$value;
    }

    private static __$_DIRECTORY_LIST_NEXT : number;
    static get _DIRECTORY_LIST_NEXT() : number { 
        if (this.__$_DIRECTORY_LIST_NEXT===undefined) {
            this.__$_DIRECTORY_LIST_NEXT = 39;
        }
        return this.__$_DIRECTORY_LIST_NEXT;
    }
    static set _DIRECTORY_LIST_NEXT(__$value : number)  { 
        this.__$_DIRECTORY_LIST_NEXT = __$value;
    }

    private static __$_DIRECTORY_LIST_START : number;
    static get _DIRECTORY_LIST_START() : number { 
        if (this.__$_DIRECTORY_LIST_START===undefined) {
            this.__$_DIRECTORY_LIST_START = 38;
        }
        return this.__$_DIRECTORY_LIST_START;
    }
    static set _DIRECTORY_LIST_START(__$value : number)  { 
        this.__$_DIRECTORY_LIST_START = __$value;
    }

    private static __$_DIRECTORY_CREATE_TEMP : number;
    static get _DIRECTORY_CREATE_TEMP() : number { 
        if (this.__$_DIRECTORY_CREATE_TEMP===undefined) {
            this.__$_DIRECTORY_CREATE_TEMP = 37;
        }
        return this.__$_DIRECTORY_CREATE_TEMP;
    }
    static set _DIRECTORY_CREATE_TEMP(__$value : number)  { 
        this.__$_DIRECTORY_CREATE_TEMP = __$value;
    }

    private static __$_DIRECTORY_EXISTS : number;
    static get _DIRECTORY_EXISTS() : number { 
        if (this.__$_DIRECTORY_EXISTS===undefined) {
            this.__$_DIRECTORY_EXISTS = 36;
        }
        return this.__$_DIRECTORY_EXISTS;
    }
    static set _DIRECTORY_EXISTS(__$value : number)  { 
        this.__$_DIRECTORY_EXISTS = __$value;
    }

    private static __$_DIRECTORY_DELETE : number;
    static get _DIRECTORY_DELETE() : number { 
        if (this.__$_DIRECTORY_DELETE===undefined) {
            this.__$_DIRECTORY_DELETE = 35;
        }
        return this.__$_DIRECTORY_DELETE;
    }
    static set _DIRECTORY_DELETE(__$value : number)  { 
        this.__$_DIRECTORY_DELETE = __$value;
    }

    static get stdout() : Stdout {
        if (op(Op.EQUALS,properties._stdout,null)) {
            properties._stdout = _StdIOUtils._getStdioOutputStream(1);
        }
        return properties._stdout;
    }
    private static __$_STDIO_HANDLE_TYPE_SOCKET : number;
    static get _STDIO_HANDLE_TYPE_SOCKET() : number { 
        if (this.__$_STDIO_HANDLE_TYPE_SOCKET===undefined) {
            this.__$_STDIO_HANDLE_TYPE_SOCKET = 3;
        }
        return this.__$_STDIO_HANDLE_TYPE_SOCKET;
    }
    static set _STDIO_HANDLE_TYPE_SOCKET(__$value : number)  { 
        this.__$_STDIO_HANDLE_TYPE_SOCKET = __$value;
    }

    static get stderr() : Stdout {
        if (op(Op.EQUALS,properties._stderr,null)) {
            properties._stderr = _StdIOUtils._getStdioOutputStream(2);
        }
        return properties._stderr;
    }
    private static __$_STDIO_HANDLE_TYPE_TERMINAL : number;
    static get _STDIO_HANDLE_TYPE_TERMINAL() : number { 
        if (this.__$_STDIO_HANDLE_TYPE_TERMINAL===undefined) {
            this.__$_STDIO_HANDLE_TYPE_TERMINAL = 0;
        }
        return this.__$_STDIO_HANDLE_TYPE_TERMINAL;
    }
    static set _STDIO_HANDLE_TYPE_TERMINAL(__$value : number)  { 
        this.__$_STDIO_HANDLE_TYPE_TERMINAL = __$value;
    }

    private static __$_DIRECTORY_CREATE : number;
    static get _DIRECTORY_CREATE() : number { 
        if (this.__$_DIRECTORY_CREATE===undefined) {
            this.__$_DIRECTORY_CREATE = 34;
        }
        return this.__$_DIRECTORY_CREATE;
    }
    static set _DIRECTORY_CREATE(__$value : number)  { 
        this.__$_DIRECTORY_CREATE = __$value;
    }

    private static __$_SOCKET_REVERSE_LOOKUP : number;
    static get _SOCKET_REVERSE_LOOKUP() : number { 
        if (this.__$_SOCKET_REVERSE_LOOKUP===undefined) {
            this.__$_SOCKET_REVERSE_LOOKUP = 33;
        }
        return this.__$_SOCKET_REVERSE_LOOKUP;
    }
    static set _SOCKET_REVERSE_LOOKUP(__$value : number)  { 
        this.__$_SOCKET_REVERSE_LOOKUP = __$value;
    }

    private static __$_SOCKET_LIST_INTERFACES : number;
    static get _SOCKET_LIST_INTERFACES() : number { 
        if (this.__$_SOCKET_LIST_INTERFACES===undefined) {
            this.__$_SOCKET_LIST_INTERFACES = 32;
        }
        return this.__$_SOCKET_LIST_INTERFACES;
    }
    static set _SOCKET_LIST_INTERFACES(__$value : number)  { 
        this.__$_SOCKET_LIST_INTERFACES = __$value;
    }

    private static __$_SOCKET_LOOKUP : number;
    static get _SOCKET_LOOKUP() : number { 
        if (this.__$_SOCKET_LOOKUP===undefined) {
            this.__$_SOCKET_LOOKUP = 31;
        }
        return this.__$_SOCKET_LOOKUP;
    }
    static set _SOCKET_LOOKUP(__$value : number)  { 
        this.__$_SOCKET_LOOKUP = __$value;
    }

    private static __$_stderr : Stdout;
    static get _stderr() : Stdout { 
        return this.__$_stderr;
    }
    static set _stderr(__$value : Stdout)  { 
        this.__$_stderr = __$value;
    }

    private static __$_FILE_LOCK : number;
    static get _FILE_LOCK() : number { 
        if (this.__$_FILE_LOCK===undefined) {
            this.__$_FILE_LOCK = 30;
        }
        return this.__$_FILE_LOCK;
    }
    static set _FILE_LOCK(__$value : number)  { 
        this.__$_FILE_LOCK = __$value;
    }

    private static __$_FILE_STAT : number;
    static get _FILE_STAT() : number { 
        if (this.__$_FILE_STAT===undefined) {
            this.__$_FILE_STAT = 29;
        }
        return this.__$_FILE_STAT;
    }
    static set _FILE_STAT(__$value : number)  { 
        this.__$_FILE_STAT = __$value;
    }

    private static __$_FILE_IDENTICAL : number;
    static get _FILE_IDENTICAL() : number { 
        if (this.__$_FILE_IDENTICAL===undefined) {
            this.__$_FILE_IDENTICAL = 28;
        }
        return this.__$_FILE_IDENTICAL;
    }
    static set _FILE_IDENTICAL(__$value : number)  { 
        this.__$_FILE_IDENTICAL = __$value;
    }

    private static __$_FILE_TYPE : number;
    static get _FILE_TYPE() : number { 
        if (this.__$_FILE_TYPE===undefined) {
            this.__$_FILE_TYPE = 27;
        }
        return this.__$_FILE_TYPE;
    }
    static set _FILE_TYPE(__$value : number)  { 
        this.__$_FILE_TYPE = __$value;
    }

    private static __$_FILE_LINK_TARGET : number;
    static get _FILE_LINK_TARGET() : number { 
        if (this.__$_FILE_LINK_TARGET===undefined) {
            this.__$_FILE_LINK_TARGET = 26;
        }
        return this.__$_FILE_LINK_TARGET;
    }
    static set _FILE_LINK_TARGET(__$value : number)  { 
        this.__$_FILE_LINK_TARGET = __$value;
    }

    private static __$_FILE_RENAME_LINK : number;
    static get _FILE_RENAME_LINK() : number { 
        if (this.__$_FILE_RENAME_LINK===undefined) {
            this.__$_FILE_RENAME_LINK = 25;
        }
        return this.__$_FILE_RENAME_LINK;
    }
    static set _FILE_RENAME_LINK(__$value : number)  { 
        this.__$_FILE_RENAME_LINK = __$value;
    }

    private static __$_FILE_DELETE_LINK : number;
    static get _FILE_DELETE_LINK() : number { 
        if (this.__$_FILE_DELETE_LINK===undefined) {
            this.__$_FILE_DELETE_LINK = 24;
        }
        return this.__$_FILE_DELETE_LINK;
    }
    static set _FILE_DELETE_LINK(__$value : number)  { 
        this.__$_FILE_DELETE_LINK = __$value;
    }

    private static __$_FILE_CREATE_LINK : number;
    static get _FILE_CREATE_LINK() : number { 
        if (this.__$_FILE_CREATE_LINK===undefined) {
            this.__$_FILE_CREATE_LINK = 23;
        }
        return this.__$_FILE_CREATE_LINK;
    }
    static set _FILE_CREATE_LINK(__$value : number)  { 
        this.__$_FILE_CREATE_LINK = __$value;
    }

    private static __$_FILE_WRITE_FROM : number;
    static get _FILE_WRITE_FROM() : number { 
        if (this.__$_FILE_WRITE_FROM===undefined) {
            this.__$_FILE_WRITE_FROM = 22;
        }
        return this.__$_FILE_WRITE_FROM;
    }
    static set _FILE_WRITE_FROM(__$value : number)  { 
        this.__$_FILE_WRITE_FROM = __$value;
    }

    private static __$_FILE_READ_INTO : number;
    static get _FILE_READ_INTO() : number { 
        if (this.__$_FILE_READ_INTO===undefined) {
            this.__$_FILE_READ_INTO = 21;
        }
        return this.__$_FILE_READ_INTO;
    }
    static set _FILE_READ_INTO(__$value : number)  { 
        this.__$_FILE_READ_INTO = __$value;
    }

    private static __$_FILE_READ : number;
    static get _FILE_READ() : number { 
        if (this.__$_FILE_READ===undefined) {
            this.__$_FILE_READ = 20;
        }
        return this.__$_FILE_READ;
    }
    static set _FILE_READ(__$value : number)  { 
        this.__$_FILE_READ = __$value;
    }

    private static __$_FILE_WRITE_BYTE : number;
    static get _FILE_WRITE_BYTE() : number { 
        if (this.__$_FILE_WRITE_BYTE===undefined) {
            this.__$_FILE_WRITE_BYTE = 19;
        }
        return this.__$_FILE_WRITE_BYTE;
    }
    static set _FILE_WRITE_BYTE(__$value : number)  { 
        this.__$_FILE_WRITE_BYTE = __$value;
    }

    private static __$_FILE_READ_BYTE : number;
    static get _FILE_READ_BYTE() : number { 
        if (this.__$_FILE_READ_BYTE===undefined) {
            this.__$_FILE_READ_BYTE = 18;
        }
        return this.__$_FILE_READ_BYTE;
    }
    static set _FILE_READ_BYTE(__$value : number)  { 
        this.__$_FILE_READ_BYTE = __$value;
    }

    private static __$_FILE_FLUSH : number;
    static get _FILE_FLUSH() : number { 
        if (this.__$_FILE_FLUSH===undefined) {
            this.__$_FILE_FLUSH = 17;
        }
        return this.__$_FILE_FLUSH;
    }
    static set _FILE_FLUSH(__$value : number)  { 
        this.__$_FILE_FLUSH = __$value;
    }

    private static __$_FILE_SET_LAST_MODIFIED : number;
    static get _FILE_SET_LAST_MODIFIED() : number { 
        if (this.__$_FILE_SET_LAST_MODIFIED===undefined) {
            this.__$_FILE_SET_LAST_MODIFIED = 16;
        }
        return this.__$_FILE_SET_LAST_MODIFIED;
    }
    static set _FILE_SET_LAST_MODIFIED(__$value : number)  { 
        this.__$_FILE_SET_LAST_MODIFIED = __$value;
    }

    private static __$_OUTGOING_BUFFER_SIZE : number;
    static get _OUTGOING_BUFFER_SIZE() : number { 
        if (this.__$_OUTGOING_BUFFER_SIZE===undefined) {
            this.__$_OUTGOING_BUFFER_SIZE = 8 * 1024;
        }
        return this.__$_OUTGOING_BUFFER_SIZE;
    }
    static set _OUTGOING_BUFFER_SIZE(__$value : number)  { 
        this.__$_OUTGOING_BUFFER_SIZE = __$value;
    }

    private static __$_FILE_SET_LAST_ACCESSED : number;
    static get _FILE_SET_LAST_ACCESSED() : number { 
        if (this.__$_FILE_SET_LAST_ACCESSED===undefined) {
            this.__$_FILE_SET_LAST_ACCESSED = 14;
        }
        return this.__$_FILE_SET_LAST_ACCESSED;
    }
    static set _FILE_SET_LAST_ACCESSED(__$value : number)  { 
        this.__$_FILE_SET_LAST_ACCESSED = __$value;
    }

    private static __$_FILE_LAST_ACCESSED : number;
    static get _FILE_LAST_ACCESSED() : number { 
        if (this.__$_FILE_LAST_ACCESSED===undefined) {
            this.__$_FILE_LAST_ACCESSED = 13;
        }
        return this.__$_FILE_LAST_ACCESSED;
    }
    static set _FILE_LAST_ACCESSED(__$value : number)  { 
        this.__$_FILE_LAST_ACCESSED = __$value;
    }

    private static __$_FILE_LENGTH_FROM_PATH : number;
    static get _FILE_LENGTH_FROM_PATH() : number { 
        if (this.__$_FILE_LENGTH_FROM_PATH===undefined) {
            this.__$_FILE_LENGTH_FROM_PATH = 12;
        }
        return this.__$_FILE_LENGTH_FROM_PATH;
    }
    static set _FILE_LENGTH_FROM_PATH(__$value : number)  { 
        this.__$_FILE_LENGTH_FROM_PATH = __$value;
    }

    private static __$_FILE_LENGTH : number;
    static get _FILE_LENGTH() : number { 
        if (this.__$_FILE_LENGTH===undefined) {
            this.__$_FILE_LENGTH = 11;
        }
        return this.__$_FILE_LENGTH;
    }
    static set _FILE_LENGTH(__$value : number)  { 
        this.__$_FILE_LENGTH = __$value;
    }

    private static __$_FILE_TRUNCATE : number;
    static get _FILE_TRUNCATE() : number { 
        if (this.__$_FILE_TRUNCATE===undefined) {
            this.__$_FILE_TRUNCATE = 10;
        }
        return this.__$_FILE_TRUNCATE;
    }
    static set _FILE_TRUNCATE(__$value : number)  { 
        this.__$_FILE_TRUNCATE = __$value;
    }

    private static __$_FILE_SET_POSITION : number;
    static get _FILE_SET_POSITION() : number { 
        if (this.__$_FILE_SET_POSITION===undefined) {
            this.__$_FILE_SET_POSITION = 9;
        }
        return this.__$_FILE_SET_POSITION;
    }
    static set _FILE_SET_POSITION(__$value : number)  { 
        this.__$_FILE_SET_POSITION = __$value;
    }

    private static __$_FILE_POSITION : number;
    static get _FILE_POSITION() : number { 
        if (this.__$_FILE_POSITION===undefined) {
            this.__$_FILE_POSITION = 8;
        }
        return this.__$_FILE_POSITION;
    }
    static set _FILE_POSITION(__$value : number)  { 
        this.__$_FILE_POSITION = __$value;
    }

    private static __$_FILE_CLOSE : number;
    static get _FILE_CLOSE() : number { 
        if (this.__$_FILE_CLOSE===undefined) {
            this.__$_FILE_CLOSE = 7;
        }
        return this.__$_FILE_CLOSE;
    }
    static set _FILE_CLOSE(__$value : number)  { 
        this.__$_FILE_CLOSE = __$value;
    }

    private static __$_FILE_RESOLVE_SYMBOLIC_LINKS : number;
    static get _FILE_RESOLVE_SYMBOLIC_LINKS() : number { 
        if (this.__$_FILE_RESOLVE_SYMBOLIC_LINKS===undefined) {
            this.__$_FILE_RESOLVE_SYMBOLIC_LINKS = 6;
        }
        return this.__$_FILE_RESOLVE_SYMBOLIC_LINKS;
    }
    static set _FILE_RESOLVE_SYMBOLIC_LINKS(__$value : number)  { 
        this.__$_FILE_RESOLVE_SYMBOLIC_LINKS = __$value;
    }

    private static __$_FILE_OPEN : number;
    static get _FILE_OPEN() : number { 
        if (this.__$_FILE_OPEN===undefined) {
            this.__$_FILE_OPEN = 5;
        }
        return this.__$_FILE_OPEN;
    }
    static set _FILE_OPEN(__$value : number)  { 
        this.__$_FILE_OPEN = __$value;
    }

    private static __$_FILE_COPY : number;
    static get _FILE_COPY() : number { 
        if (this.__$_FILE_COPY===undefined) {
            this.__$_FILE_COPY = 4;
        }
        return this.__$_FILE_COPY;
    }
    static set _FILE_COPY(__$value : number)  { 
        this.__$_FILE_COPY = __$value;
    }

    private static __$_FILE_RENAME : number;
    static get _FILE_RENAME() : number { 
        if (this.__$_FILE_RENAME===undefined) {
            this.__$_FILE_RENAME = 3;
        }
        return this.__$_FILE_RENAME;
    }
    static set _FILE_RENAME(__$value : number)  { 
        this.__$_FILE_RENAME = __$value;
    }

    private static __$_FILE_DELETE : number;
    static get _FILE_DELETE() : number { 
        if (this.__$_FILE_DELETE===undefined) {
            this.__$_FILE_DELETE = 2;
        }
        return this.__$_FILE_DELETE;
    }
    static set _FILE_DELETE(__$value : number)  { 
        this.__$_FILE_DELETE = __$value;
    }

    private static __$_nextServiceId : number;
    static get _nextServiceId() : number { 
        if (this.__$_nextServiceId===undefined) {
            this.__$_nextServiceId = 1;
        }
        return this.__$_nextServiceId;
    }
    static set _nextServiceId(__$value : number)  { 
        this.__$_nextServiceId = __$value;
    }

    private static __$_FILE_CREATE : number;
    static get _FILE_CREATE() : number { 
        if (this.__$_FILE_CREATE===undefined) {
            this.__$_FILE_CREATE = 1;
        }
        return this.__$_FILE_CREATE;
    }
    static set _FILE_CREATE(__$value : number)  { 
        this.__$_FILE_CREATE = __$value;
    }

    private static __$_FILE_EXISTS : number;
    static get _FILE_EXISTS() : number { 
        if (this.__$_FILE_EXISTS===undefined) {
            this.__$_FILE_EXISTS = 0;
        }
        return this.__$_FILE_EXISTS;
    }
    static set _FILE_EXISTS(__$value : number)  { 
        this.__$_FILE_EXISTS = __$value;
    }

    private static __$_DART_SESSION_ID : string;
    static get _DART_SESSION_ID() : string { 
        if (this.__$_DART_SESSION_ID===undefined) {
            this.__$_DART_SESSION_ID = "DARTSESSID";
        }
        return this.__$_DART_SESSION_ID;
    }
    static set _DART_SESSION_ID(__$value : string)  { 
        this.__$_DART_SESSION_ID = __$value;
    }

    private static __$_webSocketGUID : string;
    static get _webSocketGUID() : string { 
        if (this.__$_webSocketGUID===undefined) {
            this.__$_webSocketGUID = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
        }
        return this.__$_webSocketGUID;
    }
    static set _webSocketGUID(__$value : string)  { 
        this.__$_webSocketGUID = __$value;
    }

    private static __$_clientNoContextTakeover : string;
    static get _clientNoContextTakeover() : string { 
        if (this.__$_clientNoContextTakeover===undefined) {
            this.__$_clientNoContextTakeover = "client_no_context_takeover";
        }
        return this.__$_clientNoContextTakeover;
    }
    static set _clientNoContextTakeover(__$value : string)  { 
        this.__$_clientNoContextTakeover = __$value;
    }

    private static __$_serverNoContextTakeover : string;
    static get _serverNoContextTakeover() : string { 
        if (this.__$_serverNoContextTakeover===undefined) {
            this.__$_serverNoContextTakeover = "server_no_context_takeover";
        }
        return this.__$_serverNoContextTakeover;
    }
    static set _serverNoContextTakeover(__$value : string)  { 
        this.__$_serverNoContextTakeover = __$value;
    }

    private static __$_clientMaxWindowBits : string;
    static get _clientMaxWindowBits() : string { 
        if (this.__$_clientMaxWindowBits===undefined) {
            this.__$_clientMaxWindowBits = "client_max_window_bits";
        }
        return this.__$_clientMaxWindowBits;
    }
    static set _clientMaxWindowBits(__$value : string)  { 
        this.__$_clientMaxWindowBits = __$value;
    }

    private static __$_FILE_LAST_MODIFIED : number;
    static get _FILE_LAST_MODIFIED() : number { 
        if (this.__$_FILE_LAST_MODIFIED===undefined) {
            this.__$_FILE_LAST_MODIFIED = 15;
        }
        return this.__$_FILE_LAST_MODIFIED;
    }
    static set _FILE_LAST_MODIFIED(__$value : number)  { 
        this.__$_FILE_LAST_MODIFIED = __$value;
    }

}
