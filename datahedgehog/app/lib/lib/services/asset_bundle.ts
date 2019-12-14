/** Library asset:datahedgehog_monitor/lib/lib/services/asset_bundle.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/assertions";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/isolates";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib7 from "@dart2ts/dart/uri";
import * as io from "@dart2ts/dart/io";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/foundation/consolidate_response";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/foundation/synchronous_future";
import * as lib11 from "./platform_messages";

export var _initRootBundle : () => AssetBundle = () : AssetBundle =>  {
    return PlatformAssetBundle();
};
export namespace AssetBundle {
    export type Constructors = 'AssetBundle';
    export type Interface = Omit<AssetBundle, Constructors>;
}
@DartClass
export class AssetBundle {
    @Abstract
    load(key : string) : async.Future<typed_data.ByteData>{ throw 'abstract'}
    loadString(key : string,_namedArguments? : {cache? : boolean}) : async.Future<string> { 
        return new async.Future.fromPromise(( async () =>  {
            let {cache} = Object.assign({
                "cache" : true}, _namedArguments );
            let data : typed_data.ByteData = await this.load(key);
            if (op(Op.EQUALS,data,null)) throw lib4.FlutterError(`Unable to load asset: ${key}`);
            if (data.lengthInBytes < 10 * 1024) {
                return utf8.decode(data.buffer.asUint8List());
            }
            return lib5.compute(AssetBundle._utf8decode.bind(this),data,{
                debugLabel : `UTF8 decode for "${key}"`});
        } )());
    }

    static _utf8decode(data : typed_data.ByteData) : string {
        return utf8.decode(data.buffer.asUint8List());
    }
    @Abstract
    loadStructuredData<T>(key : string,parser : <T>(value : string) => async.Future<T>) : async.Future<T>{ throw 'abstract'}
    evict(key : string) : any {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${lib6.describeIdentity(this)}()`;
    }
    constructor() {
    }
    @defaultConstructor
    AssetBundle() {
    }
}

export namespace NetworkAssetBundle {
    export type Constructors = AssetBundle.Constructors | 'NetworkAssetBundle';
    export type Interface = Omit<NetworkAssetBundle, Constructors>;
}
@DartClass
export class NetworkAssetBundle extends AssetBundle {
    constructor(baseUrl : lib7.Uri) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NetworkAssetBundle(baseUrl : lib7.Uri) {
        this._baseUrl = baseUrl;
        this._httpClient = io.HttpClient();
    }
    _baseUrl : lib7.Uri;

    _httpClient : io.HttpClient;

    _urlFromKey(key : string) : lib7.Uri {
        return this._baseUrl.resolve(key);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    load(key : string) : async.Future<typed_data.ByteData> { 
        return new async.Future.fromPromise(( async () =>  {
            let request : io.HttpClientRequest = await this._httpClient.getUrl(this._urlFromKey(key));
            let response : io.HttpClientResponse = await request.close();
            if (response.statusCode != io.HttpStatus.ok) throw lib4.FlutterError(`Unable to load asset: ${key}\n` + `HTTP status code: ${response.statusCode}`);
            let bytes : typed_data.Uint8List = await lib9.consolidateHttpClientResponseBytes(response);
            return bytes.buffer.asByteData();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    loadStructuredData<T>(key : string,parser : <T>(value : string) => async.Future<T>) : async.Future<T> { 
        return new async.Future.fromPromise(( async () =>  {
            /* TODO (AssertStatementImpl) : assert (key != null); */;
            /* TODO (AssertStatementImpl) : assert (parser != null); */;
            return parser(await this.loadString(key));
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${lib6.describeIdentity(this)}(${this._baseUrl})`;
    }
}

export namespace CachingAssetBundle {
    export type Constructors = AssetBundle.Constructors | 'CachingAssetBundle';
    export type Interface = Omit<CachingAssetBundle, Constructors>;
}
@DartClass
export class CachingAssetBundle extends AssetBundle {
    _stringCache : core.DartMap<string,async.Future<string>>;

    _structuredDataCache : core.DartMap<string,async.Future<any>>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    loadString(key : string,_namedArguments? : {cache? : boolean}) : async.Future<string> {
        let {cache} = Object.assign({
            "cache" : true}, _namedArguments );
        if (cache) return this._stringCache.putIfAbsent(key,() =>  {
            return super.loadString(key);
        });
        return super.loadString(key);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    loadStructuredData<T>(key : string,parser : <T>(value : string) => async.Future<T>) : async.Future<T> {
        /* TODO (AssertStatementImpl) : assert (key != null); */;
        /* TODO (AssertStatementImpl) : assert (parser != null); */;
        if (this._structuredDataCache.containsKey(key)) return this._structuredDataCache.get(key);
        let completer : async.DartCompleter<T>;
        let result : async.Future<T>;
        op(Op.LT,this.loadString(key,{
            cache : false}).then(parser).then.bind(this.loadString(key,{
            cache : false}).then(parser)),);
        op(Op.GT,,((value : T) =>  {
            result = lib10.SynchronousFuture(value);
            this._structuredDataCache.set(key,result);
            if (completer != null) {
                completer.complete(value);
            }
        }));
        if (result != null) {
            return result;
        }
        completer = async.DartCompleter();
        this._structuredDataCache.set(key,completer.future);
        return completer.future;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    evict(key : string) : any {
        this._stringCache.remove(key);
        this._structuredDataCache.remove(key);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CachingAssetBundle() {
        this._stringCache = new core.DartMap.literal([
        ]);
        this._structuredDataCache = new core.DartMap.literal([
        ]);
    }
}

export namespace PlatformAssetBundle {
    export type Constructors = CachingAssetBundle.Constructors | 'PlatformAssetBundle';
    export type Interface = Omit<PlatformAssetBundle, Constructors>;
}
@DartClass
export class PlatformAssetBundle extends CachingAssetBundle {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    load(key : string) : async.Future<typed_data.ByteData> { 
        return new async.Future.fromPromise(( async () =>  {
            let encoded : typed_data.Uint8List = utf8.encoder.convert(lib7.Uri({
                path : lib7.Uri.encodeFull(key)}).path);
            let asset : typed_data.ByteData = await lib11.BinaryMessages.send('flutter/assets',encoded.buffer.asByteData());
            if (op(Op.EQUALS,asset,null)) throw lib4.FlutterError(`Unable to load asset: ${key}`);
            return asset;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PlatformAssetBundle() {
    }
}

export class properties {
    private static __$rootBundle : AssetBundle;
    static get rootBundle() : AssetBundle { 
        if (this.__$rootBundle===undefined) {
            this.__$rootBundle = _initRootBundle();
        }
        return this.__$rootBundle;
    }
    static set rootBundle(__$value : AssetBundle)  { 
        this.__$rootBundle = __$value;
    }

}
