/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/source/sdk_ext.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as convert from "@dart2ts/dart/convert";
import * as lib5 from "@dart2ts.packages/path/lib/path";

export namespace SdkExtUriResolver {
    export type Constructors = 'SdkExtUriResolver';
    export type Interface = Omit<SdkExtUriResolver, Constructors>;
}
@DartClass
export class SdkExtUriResolver extends any {
    private static __$SDK_EXT_NAME : string;
    static get SDK_EXT_NAME() : string { 
        if (this.__$SDK_EXT_NAME===undefined) {
            this.__$SDK_EXT_NAME = '_sdkext';
        }
        return this.__$SDK_EXT_NAME;
    }

    private static __$DART_COLON_PREFIX : string;
    static get DART_COLON_PREFIX() : string { 
        if (this.__$DART_COLON_PREFIX===undefined) {
            this.__$DART_COLON_PREFIX = 'dart:';
        }
        return this.__$DART_COLON_PREFIX;
    }

    _urlMappings : core.DartMap<string,string>;

    extensionFilePaths : core.DartList<string>;

    constructor(packageMap : core.DartMap<string,core.DartList<any>>) {
    }
    @defaultConstructor
    SdkExtUriResolver(packageMap : core.DartMap<string,core.DartList<any>>) {
        this._urlMappings = new core.DartMap.literal([
        ]);
        this.extensionFilePaths = new core.DartList.literal<string>();
        if (packageMap == null) {
            return;
        }
        packageMap.forEach(this._processPackage.bind(this));
    }
    get length() : number {
        return this._urlMappings.length;
    }
    get urlMappings() : core.DartMap<string,string> {
        return new core.DartMap.from(this._urlMappings);
    }
    [OperatorMethods.INDEX](libName : string) : string {
        return this._urlMappings.get(libName);
    }
    addSdkExt(sdkExtJSON : string,libDir : any) : void {
        this._processSdkExt(sdkExtJSON,libDir);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveAbsolute(importUri : lib3.Uri,actualUri? : lib3.Uri) : any {
        let libraryName : string = this._libraryName(importUri);
        let partPath : string = this._partPath(importUri);
        let mapping : string = this._urlMappings.get(libraryName);
        if (mapping == null) {
            return null;
        }
        let libraryEntry : lib3.Uri = new lib3.Uri.file(mapping);
        if (!libraryEntry.isAbsolute) {
            return null;
        }
        if (partPath != null) {
            return this._resolvePart(libraryEntry,partPath,importUri);
        }else {
            return this._resolveEntry(libraryEntry,importUri);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    restoreAbsolute(source : any) : lib3.Uri {
        let extensionName : string = this._findExtensionNameFor(source.fullName);
        if (extensionName != null) {
            return lib3.Uri.parse(extensionName);
        }
        return null;
    }
    _findExtensionNameFor(fullName : string) : string {
        let result;
        this._urlMappings.forEach((extensionName : any,pathMapping : any) =>  {
            if (pathMapping == fullName) {
                result = extensionName;
            }
        });
        return result;
    }
    _libraryName(importUri : lib3.Uri) : string {
        let uri = importUri.toString();
        let index : number = new core.DartString(uri).indexOf('/');
        if (index >= 0) {
            return new core.DartString(uri).substring(0,index);
        }
        return uri;
    }
    _partPath(importUri : lib3.Uri) : string {
        let uri = importUri.toString();
        let index : number = new core.DartString(uri).indexOf('/');
        if (index >= 0) {
            return new core.DartString(uri).substring(index + 1);
        }
        return null;
    }
    _processPackage(name : string,libDirs : core.DartList<any>) : void {
        for(let libDir of libDirs) {
            let sdkExt = this._readDotSdkExt(libDir);
            if (sdkExt != null) {
                this._processSdkExt(sdkExt,libDir);
            }
        }
    }
    _processSdkExt(sdkExtJSON : string,libDir : any) : void {
        let sdkExt;
        try {
            sdkExt = convert.properties.JSON.decode(sdkExtJSON);
        } catch (__error__) {

            {
                let e = __error__;
                return;
            }
        }
        if ((op(Op.EQUALS,sdkExt,null)) || (isNot(sdkExt, core.DartMap<any,any>))) {
            return;
        }
        let contributed : boolean = false;
        sdkExt.forEach((k : any,v : any) =>  {
            if (this._processSdkExtension(k,v,libDir)) {
                contributed = true;
            }
        });
        if (contributed) {
            this.extensionFilePaths.add(libDir.getChild(SdkExtUriResolver.SDK_EXT_NAME).path);
        }
    }
    _processSdkExtension(name : string,file : string,libDir : any) : boolean {
        if (!new core.DartString(name).startsWith(SdkExtUriResolver.DART_COLON_PREFIX)) {
            return false;
        }
        let key = name;
        let value = libDir.canonicalizePath(file);
        this._urlMappings.set(key,value);
        return true;
    }
    _readDotSdkExt(libDir : any) : string {
        let file : any = libDir.getChild(SdkExtUriResolver.SDK_EXT_NAME);
        try {
            return file.readAsStringSync();
        } catch (__error__) {

            if (is(__error__,any)){
                return null;
            }
        }
    }
    _resolveEntry(libraryEntry : lib3.Uri,importUri : lib3.Uri) : any {
        let javaFile : any = new bare.createInstance(any,null,libraryEntry);
        return new bare.createInstance(any,null,javaFile,importUri);
    }
    _resolvePart(libraryEntry : lib3.Uri,partPath : string,importUri : lib3.Uri) : any {
        let directory = lib5.dirname(libraryEntry.path);
        let partUri = new lib3.Uri.file(lib5.join(directory,partPath));
        /* TODO (AssertStatementImpl) : assert (partUri.isAbsolute); */;
        let javaFile : any = new bare.createInstance(any,null,partUri);
        return new bare.createInstance(any,null,javaFile,importUri);
    }
}

export class properties {
}
