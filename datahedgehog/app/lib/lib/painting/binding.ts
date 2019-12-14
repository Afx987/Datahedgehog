/** Library asset:datahedgehog_monitor/lib/lib/painting/binding.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./image_cache";
import * as typed_data from "@dart2ts/dart/typed_data";

export var initInstances : () => any = () : any =>  {
    super.initInstances();
    properties._instance = this;
    properties._imageCache = createImageCache();
};
export var createImageCache : () => lib3.ImageCache = () : lib3.ImageCache =>  {
    return lib3.ImageCache();
};
export var instantiateImageCodec : (list : typed_data.Uint8List) => any = (list : typed_data.Uint8List) : any =>  {
    return ui.instantiateImageCodec(list,{
        decodedCacheRatioCap : properties.decodedCacheRatioCap});
};
export var evict : (asset : string) => any = (asset : string) : any =>  {
    super.evict(asset);
    properties.imageCache.clear();
};
export class properties {
    private static __$_kDefaultDecodedCacheRatioCap : double;
    static get _kDefaultDecodedCacheRatioCap() : double { 
        if (this.__$_kDefaultDecodedCacheRatioCap===undefined) {
            this.__$_kDefaultDecodedCacheRatioCap = 0.0;
        }
        return this.__$_kDefaultDecodedCacheRatioCap;
    }
    static set _kDefaultDecodedCacheRatioCap(__$value : double)  { 
        this.__$_kDefaultDecodedCacheRatioCap = __$value;
    }

    private static __$PaintingBinding : any;
    static get PaintingBinding() : any { 
        return this.__$PaintingBinding;
    }
    static set PaintingBinding(__$value : any)  { 
        this.__$PaintingBinding = __$value;
    }

    private static __$BindingBase : any;
    static get BindingBase() : any { 
        return this.__$BindingBase;
    }
    static set BindingBase(__$value : any)  { 
        this.__$BindingBase = __$value;
    }
    ,private static __$ServicesBinding : any;
    static get ServicesBinding() : any { 
        return this.__$ServicesBinding;
    }
    static set ServicesBinding(__$value : any)  { 
        this.__$ServicesBinding = __$value;
    }

    private static __$void : any;
    static get void() : any { 
        return this.__$void;
    }
    static set void(__$value : any)  { 
        this.__$void = __$value;
    }

    static get instance() : any {
        return properties._instance;
    }
    private static __$_instance : any;
    static get _instance() : any { 
        return this.__$_instance;
    }
    static set _instance(__$value : any)  { 
        this.__$_instance = __$value;
    }

    static get imageCache() : lib3.ImageCache {
        return properties._imageCache;
    }
    private static __$_imageCache : lib3.ImageCache;
    static get _imageCache() : lib3.ImageCache { 
        return this.__$_imageCache;
    }
    static set _imageCache(__$value : lib3.ImageCache)  { 
        this.__$_imageCache = __$value;
    }

    static get decodedCacheRatioCap() : double {
        return properties._kDecodedCacheRatioCap;
    }
    private static __$_kDecodedCacheRatioCap : double;
    static get _kDecodedCacheRatioCap() : double { 
        if (this.__$_kDecodedCacheRatioCap===undefined) {
            this.__$_kDecodedCacheRatioCap = properties._kDefaultDecodedCacheRatioCap;
        }
        return this.__$_kDecodedCacheRatioCap;
    }
    static set _kDecodedCacheRatioCap(__$value : double)  { 
        this.__$_kDecodedCacheRatioCap = __$value;
    }

    static set decodedCacheRatioCap(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        /* TODO (AssertStatementImpl) : assert (value >= 0.0); */;
        properties._kDecodedCacheRatioCap = value;
    }
    static get imageCache() : lib3.ImageCache {
        return properties.PaintingBinding.instance.imageCache;
    }
}
