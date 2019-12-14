/** Library asset:datahedgehog_monitor/lib/lib/painting/image_cache.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./image_stream";

export namespace ImageCache {
    export type Constructors = 'ImageCache';
    export type Interface = Omit<ImageCache, Constructors>;
}
@DartClass
export class ImageCache {
    _pendingImages : core.DartMap<core.DartObject,_PendingImage>;

    _cache : core.DartMap<core.DartObject,_CachedImage>;

    get maximumSize() : number {
        return this._maximumSize;
    }
    _maximumSize : number;

    set maximumSize(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        /* TODO (AssertStatementImpl) : assert (value >= 0); */;
        if (value == this.maximumSize) return;
        this._maximumSize = value;
        if (this.maximumSize == 0) {
            this.clear();
        }else {
            this._checkCacheSize();
        }
    }
    get currentSize() : number {
        return this._cache.length;
    }
    get maximumSizeBytes() : number {
        return this._maximumSizeBytes;
    }
    _maximumSizeBytes : number;

    set maximumSizeBytes(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        /* TODO (AssertStatementImpl) : assert (value >= 0); */;
        if (value == this._maximumSizeBytes) return;
        this._maximumSizeBytes = value;
        if (this._maximumSizeBytes == 0) {
            this.clear();
        }else {
            this._checkCacheSize();
        }
    }
    get currentSizeBytes() : number {
        return this._currentSizeBytes;
    }
    _currentSizeBytes : number;

    clear() : any {
        this._cache.clear();
        this._pendingImages.clear();
        this._currentSizeBytes = 0;
    }
    evict(key : core.DartObject) : boolean {
        let pendingImage : _PendingImage = this._pendingImages.remove(key);
        if (pendingImage != null) {
            pendingImage.removeListener();
            return true;
        }
        let image : _CachedImage = this._cache.remove(key);
        if (image != null) {
            this._currentSizeBytes -= image.sizeBytes;
            return true;
        }
        return false;
    }
    putIfAbsent(key : core.DartObject,loader : () => lib3.ImageStreamCompleter,_namedArguments? : {onError? : (exception : any,stackTrace : core.DartStackTrace) => any}) : lib3.ImageStreamCompleter {
        let {onError} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (key != null); */;
        /* TODO (AssertStatementImpl) : assert (loader != null); */;
        let result : lib3.ImageStreamCompleter = ((t)=>(!!t)?t.completer:null)(this._pendingImages.get(key));
        if (result != null) return result;
        let image : _CachedImage = this._cache.remove(key);
        if (image != null) {
            this._cache.set(key,image);
            return image.completer;
        }
        try {
            result = loader();
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let error = __error__;
                if (onError != null) {
                    onError(error,stackTrace);
                    return null;
                }else {
                    /* TODO (RethrowExpressionImpl): rethrow */;
                }
            }
        }
        var listener : (info : lib3.ImageInfo,syncCall : boolean) => any = (info : lib3.ImageInfo,syncCall : boolean) : any =>  {
            let imageSize : number = op(Op.EQUALS,((t)=>(!!t)?t.image:null)(info),null) ? 0 : op(Op.TIMES,op(Op.TIMES,info.image.height,info.image.width),4);
            let image : _CachedImage = _CachedImage(result,imageSize);
            if (this.maximumSizeBytes > 0 && imageSize > this.maximumSizeBytes) {
                this._maximumSizeBytes = imageSize + 1000;
            }
            this._currentSizeBytes += imageSize;
            let pendingImage : _PendingImage = this._pendingImages.remove(key);
            if (pendingImage != null) {
                pendingImage.removeListener();
            }
            this._cache.set(key,image);
            this._checkCacheSize();
        };
        if (this.maximumSize > 0 && this.maximumSizeBytes > 0) {
            this._pendingImages.set(key,_PendingImage(result,listener));
            result.addListener(listener);
        }
        return result;
    }
    _checkCacheSize() : any {
        while (this._currentSizeBytes > this._maximumSizeBytes || this._cache.length > this._maximumSize){
            let key : core.DartObject = this._cache.keys.first;
            let image : _CachedImage = this._cache.get(key);
            this._currentSizeBytes -= image.sizeBytes;
            this._cache.remove(key);
        }
        /* TODO (AssertStatementImpl) : assert (_currentSizeBytes >= 0); */;
        /* TODO (AssertStatementImpl) : assert (_cache.length <= maximumSize); */;
        /* TODO (AssertStatementImpl) : assert (_currentSizeBytes <= maximumSizeBytes); */;
    }
    constructor() {
    }
    @defaultConstructor
    ImageCache() {
        this._pendingImages = new core.DartMap.literal([
        ]);
        this._cache = new core.DartMap.literal([
        ]);
        this._maximumSize = properties._kDefaultSize;
        this._maximumSizeBytes = properties._kDefaultSizeBytes;
        this._currentSizeBytes = 0;
    }
}

export namespace _CachedImage {
    export type Constructors = '_CachedImage';
    export type Interface = Omit<_CachedImage, Constructors>;
}
@DartClass
export class _CachedImage {
    constructor(completer : lib3.ImageStreamCompleter,sizeBytes : number) {
    }
    @defaultConstructor
    _CachedImage(completer : lib3.ImageStreamCompleter,sizeBytes : number) {
        this.completer = completer;
        this.sizeBytes = sizeBytes;
    }
    completer : lib3.ImageStreamCompleter;

    sizeBytes : number;

}

export namespace _PendingImage {
    export type Constructors = '_PendingImage';
    export type Interface = Omit<_PendingImage, Constructors>;
}
@DartClass
export class _PendingImage {
    constructor(completer : lib3.ImageStreamCompleter,listener : (image : lib3.ImageInfo,synchronousCall : boolean) => any) {
    }
    @defaultConstructor
    _PendingImage(completer : lib3.ImageStreamCompleter,listener : (image : lib3.ImageInfo,synchronousCall : boolean) => any) {
        this.completer = completer;
        this.listener = listener;
    }
    completer : lib3.ImageStreamCompleter;

    listener : (image : lib3.ImageInfo,synchronousCall : boolean) => any;

    removeListener() : any {
        this.completer.removeListener(this.listener);
    }
}

export class properties {
    private static __$_kDefaultSize : number;
    static get _kDefaultSize() : number { 
        if (this.__$_kDefaultSize===undefined) {
            this.__$_kDefaultSize = 1000;
        }
        return this.__$_kDefaultSize;
    }
    static set _kDefaultSize(__$value : number)  { 
        this.__$_kDefaultSize = __$value;
    }

    private static __$_kDefaultSizeBytes : number;
    static get _kDefaultSizeBytes() : number { 
        if (this.__$_kDefaultSizeBytes===undefined) {
            this.__$_kDefaultSizeBytes = 100 << 20;
        }
        return this.__$_kDefaultSizeBytes;
    }
    static set _kDefaultSizeBytes(__$value : number)  { 
        this.__$_kDefaultSizeBytes = __$value;
    }

}
