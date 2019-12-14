/** Library asset:datahedgehog_monitor/lib/lib/painting/image_resolution.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./image_provider";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/services/asset_bundle";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/synchronous_future";
import * as collection from "@dart2ts/dart/core";
import * as io from "@dart2ts/dart/io";

export namespace AssetImage {
    export type Constructors = lib3.AssetBundleImageProvider.Constructors | 'AssetImage';
    export type Interface = Omit<AssetImage, Constructors>;
}
@DartClass
export class AssetImage extends lib3.AssetBundleImageProvider {
    constructor(assetName : string,_namedArguments? : {bundle? : lib4.AssetBundle,package? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AssetImage(assetName : string,_namedArguments? : {bundle? : lib4.AssetBundle,package? : string}) {
        let {bundle,package} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.assetName = assetName;
        this.bundle = bundle;
        this.package = package;
    }
     : any;

    assetName : string;

    get keyName() : string {
        return this.package == null ? this.assetName : `packages/${this.package}/${this.assetName}`;
    }
    bundle : lib4.AssetBundle;

    package : string;

    private static __$_naturalResolution : double;
    static get _naturalResolution() : double { 
        if (this.__$_naturalResolution===undefined) {
            this.__$_naturalResolution = 1.0;
        }
        return this.__$_naturalResolution;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    obtainKey(configuration : lib3.ImageConfiguration) : async.Future<lib3.AssetBundleImageKey> {
        let chosenBundle : lib4.AssetBundle = ((this.bundle || configuration.bundle) || lib4.properties.rootBundle);
        let completer : async.DartCompleter<lib3.AssetBundleImageKey>;
        let result : async.Future<lib3.AssetBundleImageKey>;
        op(Op.LT,chosenBundle.loadStructuredData(properties._kAssetManifestFileName,AssetImage._manifestParser.bind(this)).then.bind(chosenBundle.loadStructuredData(properties._kAssetManifestFileName,AssetImage._manifestParser.bind(this))),);
        op(Op.GT,,((manifest : core.DartMap<string,core.DartList<string>>) =>  {
            let chosenName : string = this._chooseVariant(this.keyName,configuration,manifest == null ? null : manifest.get(this.keyName));
            let chosenScale : double = this._parseScale(chosenName);
            let key : lib3.AssetBundleImageKey = lib3.AssetBundleImageKey({
                bundle : chosenBundle,name : chosenName,scale : chosenScale});
            if (completer != null) {
                completer.complete(key);
            }else {
                result = lib5.SynchronousFuture(key);
            }
        }).catchError((error : any,stack : core.DartStackTrace) =>  {
            /* TODO (AssertStatementImpl) : assert (completer != null); */;
            /* TODO (AssertStatementImpl) : assert (result == null); */;
            completer.completeError(error,stack);
        }));
        if (result != null) {
            return result;
        }
        completer = async.DartCompleter();
        return completer.future;
    }
    static _manifestParser(jsonData : string) : async.Future<core.DartMap<string,core.DartList<string>>> {
        if (jsonData == null) return lib5.SynchronousFuture(null);
        let parsedJson : core.DartMap<string,any> = json.decode(jsonData);
        let keys : core.DartIterable<string> = parsedJson.keys;
        let parsedManifest : core.DartMap<string,any> = op(Op.LT,core.DartMap<K,V>,string), List : core.DartMap<string,any>;
        new core.DartList.literal<string>() > .fromIterables(keys,keys.map(op(Op.GT,(key : string) =>  {
            return List < string;
        },.from(parsedJson.get(key)))));
        return lib5.SynchronousFuture(parsedManifest);
    }
    _chooseVariant(main : string,config : lib3.ImageConfiguration,candidates : core.DartList<string>) : string {
        if (config.devicePixelRatio == null || candidates == null || candidates.isEmpty) return main;
        let mapping : collection.SplayTreeMap<double,string> = collection.SplayTreeMap();
        for(let candidate of candidates) op(Op.INDEX_ASSIGN,mapping,this._parseScale(candidate),candidate);
        return this._findNearest(mapping,config.devicePixelRatio);
    }
    _findNearest(candidates : collection.SplayTreeMap<double,string>,value : double) : string {
        if (candidates.containsKey(value)) return op(Op.INDEX,candidates,value);
        let lower : double = candidates.lastKeyBefore(value);
        let upper : double = candidates.firstKeyAfter(value);
        if (lower == null) return op(Op.INDEX,candidates,upper);
        if (upper == null) return op(Op.INDEX,candidates,lower);
        if (value > (lower + upper) / 2) return op(Op.INDEX,candidates,upper);else return op(Op.INDEX,candidates,lower);
    }
    private static __$_extractRatioRegExp : core.DartRegExp;
    static get _extractRatioRegExp() : core.DartRegExp { 
        if (this.__$_extractRatioRegExp===undefined) {
            this.__$_extractRatioRegExp = core.DartRegExp('/?(\d+(\.\d*)?)x$');
        }
        return this.__$_extractRatioRegExp;
    }
    static set _extractRatioRegExp(__$value : core.DartRegExp)  { 
        this.__$_extractRatioRegExp = __$value;
    }

    _parseScale(key : string) : double {
        if (key == this.assetName) {
            return AssetImage._naturalResolution;
        }
        let assetPath : io.File = io.File(key);
        let assetDir : io.Directory = assetPath.parent;
        let match : core.DartMatch = AssetImage._extractRatioRegExp.firstMatch(assetDir.path);
        if (match != null && match.groupCount > 0) return core.DartDouble.parse(match.group(1));
        return AssetImage._naturalResolution;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : AssetImage = other;
        return this.keyName == typedOther.keyName && op(Op.EQUALS,this.bundle,typedOther.bundle);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.keyName,this.bundle);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(bundle: ${this.bundle}, name: "${this.keyName}")`;
    }
}

export class properties {
    private static __$_kAssetManifestFileName : string;
    static get _kAssetManifestFileName() : string { 
        if (this.__$_kAssetManifestFileName===undefined) {
            this.__$_kAssetManifestFileName = 'AssetManifest.json';
        }
        return this.__$_kAssetManifestFileName;
    }
    static set _kAssetManifestFileName(__$value : string)  { 
        this.__$_kAssetManifestFileName = __$value;
    }

}
