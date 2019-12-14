/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/sdk/sdk.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as lib4 from "@dart2ts/dart/uri";
import * as io from "@dart2ts/dart/io";
import * as lib6 from "@dart2ts.packages/path/lib/src/context";
import * as lib7 from "@dart2ts.packages/path/lib/path";
import * as convert from "@dart2ts/dart/convert";

export namespace AbstractDartSdk {
    export type Constructors = 'AbstractDartSdk';
    export type Interface = Omit<AbstractDartSdk, Constructors>;
}
@DartClass
@Implements(any)
export class AbstractDartSdk implements any.Interface {
    resourceProvider : any;

    libraryMap : any;

    _analysisOptions : any;

    _useSummary : boolean;

    _analysisContext : any;

    _uriToSourceMap : core.DartMap<string,any>;

    _sdkBundle : any;

    get analysisOptions() : any {
        return this._analysisOptions;
    }
    set analysisOptions(options : any) {
        if (this._analysisContext != null) {
            throw new core.StateError('Analysis options cannot be changed after context creation.');
        }
        this._analysisOptions = options;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get context() : any {
        if (op(Op.EQUALS,this._analysisContext,null)) {
            this._analysisContext = new bare.createInstance(any,null,this._analysisOptions);
            let factory : any = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this)));
            this._analysisContext.sourceFactory = factory;
            if (this._useSummary) {
                let sdkBundle : any = this.getLinkedBundle();
                if (sdkBundle != null) {
                    let dataStore : any = new bare.createInstance(any,null,new core.DartList.literal(),{
                        resourceProvider : this.resourceProvider});
                    dataStore.addBundle(null,sdkBundle);
                    this._analysisContext.resultProvider = new bare.createInstance(any,null,this._analysisContext,dataStore);
                }
            }
        }
        return this._analysisContext;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sdkLibraries() : core.DartList<any> {
        return this.libraryMap.sdkLibraries;
    }
    get separator() : string {
        return this.resourceProvider.pathContext.separator;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uris() : core.DartList<string> {
        return this.libraryMap.uris;
    }
    get useSummary() : boolean {
        return this._useSummary;
    }
    set useSummary(use : boolean) {
        if (this._analysisContext != null) {
            throw new core.StateError('The "useSummary" flag cannot be changed after context creation.');
        }
        this._useSummary = use;
    }
    addExtensions(extensions : core.DartMap<string,string>) : void {
        extensions.forEach((uri : string,path : string) =>  {
            let library : any = new bare.createInstance(any,null,uri);
            library.path = path;
            this.libraryMap.setLibrary(uri,library);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    fromFileUri(uri : lib4.Uri) : any {
        let file : any = this.resourceProvider.getFile(this.resourceProvider.pathContext.fromUri(uri));
        let path : string = this._getPath(file);
        if (path == null) {
            return null;
        }
        try {
            return file.createSource(lib4.Uri.parse(path));
        } catch (__error__) {

            if (is(__error__,core.FormatException)){
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception : core.FormatException = __error__;
                AnalysisEngine.instance.logger.logInformation(`Failed to create URI: ${path}`,new bare.createInstance(any,null,exception,stackTrace));
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLinkedBundle() : any {
        if (this._useSummary) {
            let strongMode : boolean = (((t)=>(!!t)?t.strongMode:null)(this._analysisOptions) || false);
            this._sdkBundle = ( this._sdkBundle ) || ( this.getSummarySdkBundle(strongMode) );
            return this._sdkBundle;
        }
        return null;
    }
    @Abstract
    getRelativePathFromFile(file : any) : string{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getSdkLibrary(dartUri : string) : any {
        return this.libraryMap.getLibrary(dartUri);
    }
    @Abstract
    getSummarySdkBundle(strongMode : boolean) : any{ throw 'abstract'}
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
        let library : any = this.getSdkLibrary(libraryName);
        if (op(Op.EQUALS,library,null)) {
            return null;
        }
        let srcPath : string;
        if (new core.DartString(relativePath).isEmpty) {
            srcPath = library.path;
        }else {
            let libraryPath : string = library.path;
            let index : number = new core.DartString(libraryPath).lastIndexOf(this.separator);
            if (index == -1) {
                index = new core.DartString(libraryPath).lastIndexOf('/');
                if (index == -1) {
                    return null;
                }
            }
            let prefix : string = new core.DartString(libraryPath).substring(0,index + 1);
            srcPath = `${prefix}${relativePath}`;
        }
        let filePath : string = new core.DartString(srcPath).replaceAll('/',this.separator);
        try {
            let file : any = this.resourceProvider.getFile(filePath);
            return file.createSource(lib4.Uri.parse(dartUri));
        } catch (__error__) {

            if (is(__error__,core.FormatException)){
                return null;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mapDartUri(dartUri : string) : any {
        let source : any = this._uriToSourceMap.get(dartUri);
        if (op(Op.EQUALS,source,null)) {
            source = this.internalMapDartUri(dartUri);
            this._uriToSourceMap.set(dartUri,source);
        }
        return source;
    }
    _getPath(file : any) : string {
        let libraries : core.DartList<any> = this.libraryMap.sdkLibraries;
        let length : number = libraries.length;
        let paths : core.DartList<string> = new core.DartList<any>(length);
        let filePath : string = this.getRelativePathFromFile(file);
        if (filePath == null) {
            return null;
        }
        for(let i : number = 0; i < length; i++){
            let library : any = libraries[i];
            let libraryPath : string = library.path.replaceAll('/',this.separator);
            if (filePath == libraryPath) {
                return library.shortName;
            }
            paths[i] = libraryPath;
        }
        for(let i : number = 0; i < length; i++){
            let library : any = libraries[i];
            let libraryPath : string = paths[i];
            let index : number = new core.DartString(libraryPath).lastIndexOf(this.separator);
            if (index >= 0) {
                let prefix : string = new core.DartString(libraryPath).substring(0,index + 1);
                if (new core.DartString(filePath).startsWith(prefix)) {
                    let relPath : string = new core.DartString(new core.DartString(filePath).substring(new core.DartString(prefix).length)).replaceAll(this.separator,'/');
                    return `${library.shortName}/${relPath}`;
                }
            }
        }
        return null;
    }
    constructor() {
    }
    @defaultConstructor
    AbstractDartSdk() {
        this.libraryMap = new bare.createInstance(any,null);
        this._useSummary = false;
        this._uriToSourceMap = new core.DartHashMap<string,any>();
    }
}

export namespace SdkExtensionFinder {
    export type Constructors = 'SdkExtensionFinder';
    export type Interface = Omit<SdkExtensionFinder, Constructors>;
}
@DartClass
export class SdkExtensionFinder {
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
    SdkExtensionFinder(packageMap : core.DartMap<string,core.DartList<any>>) {
        this._urlMappings = new core.DartMap.literal([
        ]);
        this.extensionFilePaths = new core.DartList.literal<string>();
        if (packageMap == null) {
            return;
        }
        packageMap.forEach(this._processPackage.bind(this));
    }
    get urlMappings() : core.DartMap<string,string> {
        return new core.DartMap.from(this._urlMappings);
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
            if (is(k, "string") && is(v, "string") && this._processSdkExtension(libDir,k,v)) {
                contributed = true;
            }
        });
        if (contributed) {
            this.extensionFilePaths.add(libDir.getChild(SdkExtensionFinder.SDK_EXT_NAME).path);
        }
    }
    _processSdkExtension(libDir : any,name : string,file : string) : boolean {
        if (!new core.DartString(name).startsWith(SdkExtensionFinder.DART_COLON_PREFIX)) {
            return false;
        }
        this._urlMappings.set(name,libDir.canonicalizePath(file));
        return true;
    }
    _readDotSdkExt(libDir : any) : string {
        let file : any = libDir.getChild(SdkExtensionFinder.SDK_EXT_NAME);
        try {
            return file.readAsStringSync();
        } catch (__error__) {

            if (is(__error__,any)){
                return null;
            }
        }
    }
}

export namespace SdkLibrariesReader {
    export type Constructors = 'SdkLibrariesReader';
    export type Interface = Omit<SdkLibrariesReader, Constructors>;
}
@DartClass
export class SdkLibrariesReader {
    _useDart2jsPaths : boolean;

    constructor(_useDart2jsPaths : boolean) {
    }
    @defaultConstructor
    SdkLibrariesReader(_useDart2jsPaths : boolean) {
        this._useDart2jsPaths = _useDart2jsPaths;
    }
    readFromFile(file : any,libraryFileContents : string) : any {
        return this.readFromSource(file.createSource(),libraryFileContents);
    }
    readFromSource(source : any,libraryFileContents : string) : any {
        let errorListener : any = new bare.createInstance(any,null);
        let scanner : any = new bare.createInstance(any,null,source,new bare.createInstance(any,null,libraryFileContents),errorListener);
        let parser : any = new bare.createInstance(any,null,source,errorListener);
        let unit : any = parser.parseCompilationUnit(scanner.tokenize());
        let libraryBuilder : any = new bare.createInstance(any,null,this._useDart2jsPaths);
        if (!errorListener.errorReported) {
            unit.accept(libraryBuilder);
        }
        return libraryBuilder.librariesMap;
    }
}

export namespace EmbedderSdk {
    export type Constructors = AbstractDartSdk.Constructors | 'EmbedderSdk';
    export type Interface = Omit<EmbedderSdk, Constructors>;
}
@DartClass
export class EmbedderSdk extends AbstractDartSdk {
    private static __$_DART_COLON_PREFIX : string;
    static get _DART_COLON_PREFIX() : string { 
        if (this.__$_DART_COLON_PREFIX===undefined) {
            this.__$_DART_COLON_PREFIX = 'dart:';
        }
        return this.__$_DART_COLON_PREFIX;
    }

    private static __$_EMBEDDED_LIB_MAP_KEY : string;
    static get _EMBEDDED_LIB_MAP_KEY() : string { 
        if (this.__$_EMBEDDED_LIB_MAP_KEY===undefined) {
            this.__$_EMBEDDED_LIB_MAP_KEY = 'embedded_libs';
        }
        return this.__$_EMBEDDED_LIB_MAP_KEY;
    }

    _urlMappings : core.DartMap<string,string>;

    _embedderYamlLibFolder : any;

    constructor(resourceProvider : any,embedderYamls : core.DartMap<any,any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    EmbedderSdk(resourceProvider : any,embedderYamls : core.DartMap<any,any>) {
        this._urlMappings = new core.DartHashMap<string,string>();
        this.resourceProvider = resourceProvider;
        ((_250_)=>(!!_250_)?_250_.forEach(this._processEmbedderYaml.bind(this)):null)(embedderYamls);
        if (((t)=>(!!t)?t.length:null)(embedderYamls) == 1) {
            this._embedderYamlLibFolder = embedderYamls.keys.first;
        }
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
    getRelativePathFromFile(file : any) : string {
        return file.path;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getSummarySdkBundle(strongMode : boolean) : any {
        let name : string = strongMode ? 'strong.sum' : 'spec.sum';
        let file : any = this._embedderYamlLibFolder.parent.getChildAssumingFile(name);
        try {
            if (file.exists) {
                let bytes : core.DartList<number> = file.readAsBytesSync();
                return new bare.createInstance(any,null,bytes);
            }
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                AnalysisEngine.instance.logger.logError(`Failed to load SDK analysis summary from ${file}`,new bare.createInstance(any,null,exception,stackTrace));
            }
        }
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
        let library : any = this.getSdkLibrary(libraryName);
        if (op(Op.EQUALS,library,null)) {
            return null;
        }
        let srcPath : string;
        if (new core.DartString(relativePath).isEmpty) {
            srcPath = library.path;
        }else {
            let libraryPath : string = library.path;
            let index : number = new core.DartString(libraryPath).lastIndexOf(this.separator);
            if (index == -1) {
                index = new core.DartString(libraryPath).lastIndexOf('/');
                if (index == -1) {
                    return null;
                }
            }
            let prefix : string = new core.DartString(libraryPath).substring(0,index + 1);
            srcPath = `${prefix}${relativePath}`;
        }
        let filePath : string = new core.DartString(srcPath).replaceAll('/',this.separator);
        try {
            let file : any = this.resourceProvider.getFile(filePath);
            return file.createSource(lib4.Uri.parse(dartUri));
        } catch (__error__) {

            if (is(__error__,core.FormatException)){
                return null;
            }
        }
    }
    _processEmbeddedLibs(name : string,file : string,libDir : any) : void {
        if (!new core.DartString(name).startsWith(EmbedderSdk._DART_COLON_PREFIX)) {
            return;
        }
        let libPath : string = libDir.canonicalizePath(file);
        this._urlMappings.set(name,libPath);
        let library : any = new bare.createInstance(any,null,name);
        library.path = libPath;
        this.libraryMap.setLibrary(name,library);
    }
    _processEmbedderYaml(libDir : any,map : any) : void {
        let embedded_libs : any = op(Op.INDEX,map,EmbedderSdk._EMBEDDED_LIB_MAP_KEY);
        if (is(embedded_libs, any)) {
            embedded_libs.forEach((k : any,v : any) =>  {
                return this._processEmbeddedLibs(k,v,libDir);
            });
        }
    }
}

export namespace FolderBasedDartSdk {
    export type Constructors = AbstractDartSdk.Constructors | 'FolderBasedDartSdk';
    export type Interface = Omit<FolderBasedDartSdk, Constructors>;
}
@DartClass
export class FolderBasedDartSdk extends AbstractDartSdk {
    private static __$_BIN_DIRECTORY_NAME : string;
    static get _BIN_DIRECTORY_NAME() : string { 
        if (this.__$_BIN_DIRECTORY_NAME===undefined) {
            this.__$_BIN_DIRECTORY_NAME = "bin";
        }
        return this.__$_BIN_DIRECTORY_NAME;
    }
    static set _BIN_DIRECTORY_NAME(__$value : string)  { 
        this.__$_BIN_DIRECTORY_NAME = __$value;
    }

    private static __$_DOCS_DIRECTORY_NAME : string;
    static get _DOCS_DIRECTORY_NAME() : string { 
        if (this.__$_DOCS_DIRECTORY_NAME===undefined) {
            this.__$_DOCS_DIRECTORY_NAME = "docs";
        }
        return this.__$_DOCS_DIRECTORY_NAME;
    }
    static set _DOCS_DIRECTORY_NAME(__$value : string)  { 
        this.__$_DOCS_DIRECTORY_NAME = __$value;
    }

    private static __$_INTERNAL_DIR : string;
    static get _INTERNAL_DIR() : string { 
        if (this.__$_INTERNAL_DIR===undefined) {
            this.__$_INTERNAL_DIR = "_internal";
        }
        return this.__$_INTERNAL_DIR;
    }
    static set _INTERNAL_DIR(__$value : string)  { 
        this.__$_INTERNAL_DIR = __$value;
    }

    private static __$_SDK_LIBRARY_METADATA_DIR : string;
    static get _SDK_LIBRARY_METADATA_DIR() : string { 
        if (this.__$_SDK_LIBRARY_METADATA_DIR===undefined) {
            this.__$_SDK_LIBRARY_METADATA_DIR = "sdk_library_metadata";
        }
        return this.__$_SDK_LIBRARY_METADATA_DIR;
    }
    static set _SDK_LIBRARY_METADATA_DIR(__$value : string)  { 
        this.__$_SDK_LIBRARY_METADATA_DIR = __$value;
    }

    private static __$_SDK_LIBRARY_METADATA_LIB_DIR : string;
    static get _SDK_LIBRARY_METADATA_LIB_DIR() : string { 
        if (this.__$_SDK_LIBRARY_METADATA_LIB_DIR===undefined) {
            this.__$_SDK_LIBRARY_METADATA_LIB_DIR = "lib";
        }
        return this.__$_SDK_LIBRARY_METADATA_LIB_DIR;
    }
    static set _SDK_LIBRARY_METADATA_LIB_DIR(__$value : string)  { 
        this.__$_SDK_LIBRARY_METADATA_LIB_DIR = __$value;
    }

    private static __$_LIB_DIRECTORY_NAME : string;
    static get _LIB_DIRECTORY_NAME() : string { 
        if (this.__$_LIB_DIRECTORY_NAME===undefined) {
            this.__$_LIB_DIRECTORY_NAME = "lib";
        }
        return this.__$_LIB_DIRECTORY_NAME;
    }
    static set _LIB_DIRECTORY_NAME(__$value : string)  { 
        this.__$_LIB_DIRECTORY_NAME = __$value;
    }

    private static __$_LIBRARIES_FILE : string;
    static get _LIBRARIES_FILE() : string { 
        if (this.__$_LIBRARIES_FILE===undefined) {
            this.__$_LIBRARIES_FILE = "libraries.dart";
        }
        return this.__$_LIBRARIES_FILE;
    }
    static set _LIBRARIES_FILE(__$value : string)  { 
        this.__$_LIBRARIES_FILE = __$value;
    }

    private static __$_PUB_EXECUTABLE_NAME_WIN : string;
    static get _PUB_EXECUTABLE_NAME_WIN() : string { 
        if (this.__$_PUB_EXECUTABLE_NAME_WIN===undefined) {
            this.__$_PUB_EXECUTABLE_NAME_WIN = "pub.bat";
        }
        return this.__$_PUB_EXECUTABLE_NAME_WIN;
    }
    static set _PUB_EXECUTABLE_NAME_WIN(__$value : string)  { 
        this.__$_PUB_EXECUTABLE_NAME_WIN = __$value;
    }

    private static __$_PUB_EXECUTABLE_NAME : string;
    static get _PUB_EXECUTABLE_NAME() : string { 
        if (this.__$_PUB_EXECUTABLE_NAME===undefined) {
            this.__$_PUB_EXECUTABLE_NAME = "pub";
        }
        return this.__$_PUB_EXECUTABLE_NAME;
    }
    static set _PUB_EXECUTABLE_NAME(__$value : string)  { 
        this.__$_PUB_EXECUTABLE_NAME = __$value;
    }

    private static __$_VERSION_FILE_NAME : string;
    static get _VERSION_FILE_NAME() : string { 
        if (this.__$_VERSION_FILE_NAME===undefined) {
            this.__$_VERSION_FILE_NAME = "version";
        }
        return this.__$_VERSION_FILE_NAME;
    }
    static set _VERSION_FILE_NAME(__$value : string)  { 
        this.__$_VERSION_FILE_NAME = __$value;
    }

    _sdkDirectory : any;

    _libraryDirectory : any;

    _sdkVersion : string;

    _pubExecutable : any;

    constructor(resourceProvider : any,_sdkDirectory : any,useDart2jsPaths? : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FolderBasedDartSdk(resourceProvider : any,_sdkDirectory : any,useDart2jsPaths? : boolean) {
        useDart2jsPaths = useDart2jsPaths || false;
        this._sdkDirectory = _sdkDirectory;
        this.resourceProvider = resourceProvider;
        this.libraryMap = this.initialLibraryMap(useDart2jsPaths);
    }
    get directory() : any {
        return this._sdkDirectory;
    }
    get docDirectory() : any {
        return this._sdkDirectory.getChildAssumingFolder(FolderBasedDartSdk._DOCS_DIRECTORY_NAME);
    }
    get libraryDirectory() : any {
        if (op(Op.EQUALS,this._libraryDirectory,null)) {
            this._libraryDirectory = this._sdkDirectory.getChildAssumingFolder(FolderBasedDartSdk._LIB_DIRECTORY_NAME);
        }
        return this._libraryDirectory;
    }
    get pubExecutable() : any {
        if (op(Op.EQUALS,this._pubExecutable,null)) {
            this._pubExecutable = this._sdkDirectory.getChildAssumingFolder(FolderBasedDartSdk._BIN_DIRECTORY_NAME).getChildAssumingFile(OSUtilities.isWindows() ? FolderBasedDartSdk._PUB_EXECUTABLE_NAME_WIN : FolderBasedDartSdk._PUB_EXECUTABLE_NAME);
        }
        return this._pubExecutable;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sdkVersion() : string {
        if (this._sdkVersion == null) {
            this._sdkVersion = DartSdk.DEFAULT_VERSION;
            let revisionFile : any = this._sdkDirectory.getChildAssumingFile(FolderBasedDartSdk._VERSION_FILE_NAME);
            try {
                let revision : string = revisionFile.readAsStringSync();
                if (revision != null) {
                    this._sdkVersion = new core.DartString(revision).trim();
                }
            } catch (__error__) {

                if (is(__error__,any)){
                }
            }
        }
        return this._sdkVersion;
    }
    get _libraryMapLocations() : core.DartIterable<any> { 
        return core.iter<any>(()=>(function*()  {
            yield this.libraryDirectory.getChildAssumingFolder(FolderBasedDartSdk._INTERNAL_DIR).getChildAssumingFolder(FolderBasedDartSdk._SDK_LIBRARY_METADATA_DIR).getChildAssumingFolder(FolderBasedDartSdk._SDK_LIBRARY_METADATA_LIB_DIR).getChildAssumingFile(FolderBasedDartSdk._LIBRARIES_FILE);
            yield this.libraryDirectory.getChildAssumingFolder(FolderBasedDartSdk._INTERNAL_DIR).getChildAssumingFile(FolderBasedDartSdk._LIBRARIES_FILE);
        }).call(this));
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getRelativePathFromFile(file : any) : string {
        let filePath : string = file.path;
        let libPath : string = this.libraryDirectory.path;
        if (!new core.DartString(filePath).startsWith(`${libPath}${this.separator}`)) {
            return null;
        }
        return new core.DartString(filePath).substring(new core.DartString(libPath).length + 1);
    }
    getSummarySdkBundle(strongMode : boolean) : any {
        let rootPath : string = this.directory.path;
        let name : string = strongMode ? 'strong.sum' : 'spec.sum';
        let path : string = this.resourceProvider.pathContext.join(rootPath,'lib','_internal',name);
        try {
            let file : any = this.resourceProvider.getFile(path);
            if (file.exists) {
                let bytes : core.DartList<number> = file.readAsBytesSync();
                return new bare.createInstance(any,null,bytes);
            }
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                AnalysisEngine.instance.logger.logError(`Failed to load SDK analysis summary from ${path}`,new bare.createInstance(any,null,exception,stackTrace));
            }
        }
        return null;
    }
    initialLibraryMap(useDart2jsPaths : boolean) : any {
        let searchedPaths : core.DartList<string> = new core.DartList.literal<string>();
        let lastStackTrace = null;
        let lastException = null;
        for(let librariesFile of this._libraryMapLocations) {
            try {
                let contents : string = librariesFile.readAsStringSync();
                return new SdkLibrariesReader(useDart2jsPaths).readFromFile(librariesFile,contents);
            } catch (__error__) {

                {
                    let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let exception = __error__;
                    searchedPaths.add(librariesFile.path);
                    lastException = exception;
                    lastStackTrace = stackTrace;
                }
            }
        }
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.writeln(`Could not initialize the library map from ${searchedPaths}`);
        if (is(this.resourceProvider, any)) {
            (this.resourceProvider as any).writeOn(buffer);
        }
        AnalysisEngine.instance.logger.logError(buffer.toString(),new bare.createInstance(any,null,lastException,lastStackTrace));
        return new bare.createInstance(any,null);
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
        let library : any = this.getSdkLibrary(libraryName);
        if (op(Op.EQUALS,library,null)) {
            return null;
        }
        try {
            let file : any = this.libraryDirectory.getChildAssumingFile(library.path);
            if (!new core.DartString(relativePath).isEmpty) {
                file = file.parent.getChildAssumingFile(relativePath);
            }
            return file.createSource(lib4.Uri.parse(dartUri));
        } catch (__error__) {

            if (is(__error__,core.FormatException)){
                return null;
            }
        }
    }
    static defaultSdkDirectory(resourceProvider : any) : any {
        let sdkProperty : string = FolderBasedDartSdk.getSdkProperty(resourceProvider);
        if (sdkProperty == null) {
            return null;
        }
        let sdkDirectory : any = resourceProvider.getFolder(sdkProperty);
        if (!sdkDirectory.exists) {
            return null;
        }
        return sdkDirectory;
    }
    static getSdkProperty(resourceProvider : any) : string {
        let exec : string = io.Platform.resolvedExecutable;
        if (new core.DartString(exec).length == 0) {
            return null;
        }
        let pathContext : lib6.Context = resourceProvider.pathContext;
        if (pathContext.style != lib7.properties.context.style) {
            if (new core.DartString(exec).startsWith(new core.DartRegExp('[a-zA-Z]:'))) {
                exec = new core.DartString(exec).substring(2);
            }else if (is(resourceProvider, any)) {
                exec = resourceProvider.convertPath(exec);
            }
            exec = pathContext.fromUri(lib7.properties.context.toUri(exec));
        }
        let outDir : string = pathContext.dirname(pathContext.dirname(exec));
        let sdkPath : string = pathContext.join(pathContext.dirname(outDir),"sdk");
        if (resourceProvider.getFolder(sdkPath).exists) {
            let builtSdkPath : string = pathContext.join(pathContext.dirname(exec),'dart-sdk');
            if (resourceProvider.getFolder(builtSdkPath).exists) {
                return builtSdkPath;
            }else {
                return sdkPath;
            }
        }
        return pathContext.dirname(pathContext.dirname(exec));
    }
}

export class properties {
}
