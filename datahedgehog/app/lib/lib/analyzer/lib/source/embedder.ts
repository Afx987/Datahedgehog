/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/source/embedder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as io from "@dart2ts/dart/io";
import * as lib5 from "@dart2ts/dart/uri";

export var definesEmbeddedLibs : (map : core.DartMap<any,any>) => boolean = (map : core.DartMap<any,any>) : boolean =>  {
    return map.get(properties._EMBEDDED_LIB_MAP_KEY) != null;
};
export namespace EmbedderSdk {
    export type Constructors = 'EmbedderSdk';
    export type Interface = Omit<EmbedderSdk, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:core',type : 'deprecated',value : {
        arguments : [],namedArguments : {
        }}})
export class EmbedderSdk extends any {
    _urlMappings : core.DartMap<string,string>;

    constructor(embedderYamls? : core.DartMap<any,any>) {
    }
    @defaultConstructor
    EmbedderSdk(embedderYamls? : core.DartMap<any,any>) {
        this._urlMappings = new core.DartHashMap<string,string>();
        ((_52_)=>(!!_52_)?_52_.forEach(this._processEmbedderYaml.bind(this)):null)(embedderYamls);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sdkVersion() : string {
        return '0';
    }
    get urlMappings() : core.DartMap<string,string> {
        return this._urlMappings;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLinkedBundle() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getRelativePathFromFile(file : any) : string {
        return file.getAbsolutePath();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getSummarySdkBundle(strongMode : boolean) : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalMapDartUri(dartUri : string) : any {
        let libraryName : string;
        let relativePath : string;
        let index : number = new core.DartString(dartUri).indexOf('/');
        if (index >= 0) {
            libraryName = new core.DartString(dartUri).substring(0,index);
            relativePath = new core.DartString(dartUri).substring(index + 1);
        }else {
            libraryName = dartUri;
            relativePath = "";
        }
        let library : any = getSdkLibrary(libraryName);
        if (op(Op.EQUALS,library,null)) {
            return null;
        }
        let srcPath : string;
        if (new core.DartString(relativePath).isEmpty) {
            srcPath = library.path;
        }else {
            let libraryPath : string = library.path;
            let index : number = new core.DartString(libraryPath).lastIndexOf(io.Platform.pathSeparator);
            if (index == -1) {
                index = new core.DartString(libraryPath).lastIndexOf('/');
                if (index == -1) {
                    return null;
                }
            }
            let prefix : string = new core.DartString(libraryPath).substring(0,index + 1);
            srcPath = `${prefix}${relativePath}`;
        }
        let filePath : string = new core.DartString(srcPath).replaceAll('/',io.Platform.pathSeparator);
        try {
            let file : any = new bare.createInstance(any,null,filePath);
            return new bare.createInstance(any,null,file,lib5.Uri.parse(dartUri));
        } catch (__error__) {

            if (is(__error__,core.FormatException)){
                return null;
            }
        }
    }
    _processEmbeddedLibs(name : string,file : string,libDir : any) : void {
        if (!new core.DartString(name).startsWith(properties._DART_COLON_PREFIX)) {
            return;
        }
        let libPath : string = libDir.canonicalizePath(file);
        this._urlMappings.set(name,libPath);
        let library : any = new bare.createInstance(any,null,name);
        library.path = libPath;
        libraryMap.setLibrary(name,library);
    }
    _processEmbedderYaml(libDir : any,map : any) : void {
        let embedded_libs : any = op(Op.INDEX,map,properties._EMBEDDED_LIB_MAP_KEY);
        if (is(embedded_libs, any)) {
            embedded_libs.forEach((k : any,v : any) =>  {
                return this._processEmbeddedLibs(k,v,libDir);
            });
        }
    }
}

export namespace EmbedderUriResolver {
    export type Constructors = 'EmbedderUriResolver' | '_forSdk';
    export type Interface = Omit<EmbedderUriResolver, Constructors>;
}
@DartClass
@Implements(any)
@DartClassAnnotation({
    library : 'dart:core',type : 'deprecated',value : {
        arguments : [],namedArguments : {
        }}})
export class EmbedderUriResolver implements any.Interface {
    _embedderSdk : EmbedderSdk;

    _dartUriResolver : any;

    constructor(embedderMap : core.DartMap<any,any>) {
    }
    @defaultConstructor
    EmbedderUriResolver(embedderMap : core.DartMap<any,any>) {
        this._forSdk(new EmbedderSdk(embedderMap));
    }
    @namedConstructor
    _forSdk(_embedderSdk : EmbedderSdk) {
        this._embedderSdk = _embedderSdk;
        this._dartUriResolver = new bare.createInstance(any,null,this._embedderSdk);
    }
    static _forSdk : new(_embedderSdk : EmbedderSdk) => EmbedderUriResolver;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dartSdk() : any {
        return this._embedderSdk;
    }
    get length() : number {
        return (((t)=>(!!t)?t.length:null)(((t)=>(!!t)?t.urlMappings:null)(this._embedderSdk)) || 0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveAbsolute(uri : lib5.Uri,actualUri? : lib5.Uri) : any {
        return this._dartUriResolver.resolveAbsolute(uri,actualUri);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    restoreAbsolute(source : any) : lib5.Uri {
        let path : string = source.fullName;
        if (new core.DartString(path).length > 3 && path[1] == ':' && path[2] == '\') {
            path = `/${path[0]}:${new core.DartString(new core.DartString(path).substring(2)).replaceAll('\','/')}`;
        }
        let sdkSource : any = this.dartSdk.fromFileUri(lib5.Uri.parse(`file://${path}`));
        return ((t)=>(!!t)?t.uri:null)(sdkSource);
    }
}

export class properties {
    private static __$_DART_COLON_PREFIX : string;
    static get _DART_COLON_PREFIX() : string { 
        if (this.__$_DART_COLON_PREFIX===undefined) {
            this.__$_DART_COLON_PREFIX = 'dart:';
        }
        return this.__$_DART_COLON_PREFIX;
    }
    static set _DART_COLON_PREFIX(__$value : string)  { 
        this.__$_DART_COLON_PREFIX = __$value;
    }

    private static __$_EMBEDDED_LIB_MAP_KEY : string;
    static get _EMBEDDED_LIB_MAP_KEY() : string { 
        if (this.__$_EMBEDDED_LIB_MAP_KEY===undefined) {
            this.__$_EMBEDDED_LIB_MAP_KEY = 'embedded_libs';
        }
        return this.__$_EMBEDDED_LIB_MAP_KEY;
    }
    static set _EMBEDDED_LIB_MAP_KEY(__$value : string)  { 
        this.__$_EMBEDDED_LIB_MAP_KEY = __$value;
    }

}
