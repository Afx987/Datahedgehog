/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/sdk_io.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as lib4 from "@dart2ts/dart/uri";
import * as io from "@dart2ts/dart/io";
import * as lib6 from "@dart2ts.packages/path/lib/path";

export namespace AbstractDartSdk {
    export type Constructors = 'AbstractDartSdk';
    export type Interface = Omit<AbstractDartSdk, Constructors>;
}
@DartClass
@Implements(any)
@DartClassAnnotation({
    library : 'dart:core',type : 'deprecated',value : {
        arguments : [],namedArguments : {
        }}})
export class AbstractDartSdk implements any.Interface {
    libraryMap : any;

    _analysisOptions : any;

    _useSummary : boolean;

    _analysisContext : any;

    _uriToSourceMap : core.DartMap<string,any>;

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
                let strongMode : boolean = (((t)=>(!!t)?t.strongMode:null)(this._analysisOptions) || false);
                let sdkBundle : any = this.getSummarySdkBundle(strongMode);
                if (sdkBundle != null) {
                    let dataStore : any = new bare.createInstance(any,null,new core.DartList.literal());
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
            let shortName : string = new core.DartString(uri).substring(new core.DartString(uri).indexOf(':') + 1);
            let library : any = new bare.createInstance(any,null,shortName);
            library.path = path;
            this.libraryMap.setLibrary(uri,library);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    fromFileUri(uri : lib4.Uri) : any {
        let file : any = new bare.createInstance(any,null,uri);
        let path : string = this._getPath(file);
        if (path == null) {
            return null;
        }
        try {
            return new bare.createInstance(any,null,file,lib4.Uri.parse(path));
        } catch (__error__) {

            if (is(__error__,core.FormatException)){
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception : core.FormatException = __error__;
                AnalysisEngine.instance.logger.logInformation(`Failed to create URI: ${path}`,new bare.createInstance(any,null,exception,stackTrace));
            }
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
            let index : number = new core.DartString(libraryPath).lastIndexOf(JavaFile.separator);
            if (index == -1) {
                index = new core.DartString(libraryPath).lastIndexOf('/');
                if (index == -1) {
                    return null;
                }
            }
            let prefix : string = new core.DartString(libraryPath).substring(0,index + 1);
            srcPath = `${prefix}${relativePath}`;
        }
        let filePath : string = new core.DartString(srcPath).replaceAll('/',JavaFile.separator);
        try {
            let file : any = new bare.createInstance(any,null,filePath);
            return new bare.createInstance(any,null,file,lib4.Uri.parse(dartUri));
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
            let libraryPath : string = library.path.replaceAll('/',JavaFile.separator);
            if (filePath == libraryPath) {
                return library.shortName;
            }
            paths[i] = libraryPath;
        }
        for(let i : number = 0; i < length; i++){
            let library : any = libraries[i];
            let libraryPath : string = paths[i];
            let index : number = new core.DartString(libraryPath).lastIndexOf(JavaFile.separator);
            if (index >= 0) {
                let prefix : string = new core.DartString(libraryPath).substring(0,index + 1);
                if (new core.DartString(filePath).startsWith(prefix)) {
                    let relPath : string = new core.DartString(new core.DartString(filePath).substring(new core.DartString(prefix).length)).replaceAll(JavaFile.separator,'/');
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

export namespace SdkLibrariesReader {
    export type Constructors = 'SdkLibrariesReader';
    export type Interface = Omit<SdkLibrariesReader, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:core',type : 'deprecated',value : {
        arguments : [],namedArguments : {
        }}})
export class SdkLibrariesReader {
    _useDart2jsPaths : boolean;

    constructor(_useDart2jsPaths : boolean) {
    }
    @defaultConstructor
    SdkLibrariesReader(_useDart2jsPaths : boolean) {
        this._useDart2jsPaths = _useDart2jsPaths;
    }
    readFromFile(file : any,libraryFileContents : string) : any {
        return this.readFromSource(new bare.createInstance(any,null,file),libraryFileContents);
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

export namespace DirectoryBasedDartSdk {
    export type Constructors = AbstractDartSdk.Constructors | 'DirectoryBasedDartSdk';
    export type Interface = Omit<DirectoryBasedDartSdk, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:core',type : 'deprecated',value : {
        arguments : [],namedArguments : {
        }}})
export class DirectoryBasedDartSdk extends AbstractDartSdk {
    private static __$_DEFAULT_SDK : DirectoryBasedDartSdk;
    static get _DEFAULT_SDK() : DirectoryBasedDartSdk { 
        return this.__$_DEFAULT_SDK;
    }
    static set _DEFAULT_SDK(__$value : DirectoryBasedDartSdk)  { 
        this.__$_DEFAULT_SDK = __$value;
    }

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

    private static __$_DARTIUM_DIRECTORY_NAME : string;
    static get _DARTIUM_DIRECTORY_NAME() : string { 
        if (this.__$_DARTIUM_DIRECTORY_NAME===undefined) {
            this.__$_DARTIUM_DIRECTORY_NAME = "chromium";
        }
        return this.__$_DARTIUM_DIRECTORY_NAME;
    }
    static set _DARTIUM_DIRECTORY_NAME(__$value : string)  { 
        this.__$_DARTIUM_DIRECTORY_NAME = __$value;
    }

    private static __$_DART2JS_EXECUTABLE_NAME : string;
    static get _DART2JS_EXECUTABLE_NAME() : string { 
        if (this.__$_DART2JS_EXECUTABLE_NAME===undefined) {
            this.__$_DART2JS_EXECUTABLE_NAME = "dart2js";
        }
        return this.__$_DART2JS_EXECUTABLE_NAME;
    }
    static set _DART2JS_EXECUTABLE_NAME(__$value : string)  { 
        this.__$_DART2JS_EXECUTABLE_NAME = __$value;
    }

    private static __$_DART2JS_EXECUTABLE_NAME_WIN : string;
    static get _DART2JS_EXECUTABLE_NAME_WIN() : string { 
        if (this.__$_DART2JS_EXECUTABLE_NAME_WIN===undefined) {
            this.__$_DART2JS_EXECUTABLE_NAME_WIN = "dart2js.bat";
        }
        return this.__$_DART2JS_EXECUTABLE_NAME_WIN;
    }
    static set _DART2JS_EXECUTABLE_NAME_WIN(__$value : string)  { 
        this.__$_DART2JS_EXECUTABLE_NAME_WIN = __$value;
    }

    private static __$_DARTIUM_EXECUTABLE_NAME_LINUX : string;
    static get _DARTIUM_EXECUTABLE_NAME_LINUX() : string { 
        if (this.__$_DARTIUM_EXECUTABLE_NAME_LINUX===undefined) {
            this.__$_DARTIUM_EXECUTABLE_NAME_LINUX = "chrome";
        }
        return this.__$_DARTIUM_EXECUTABLE_NAME_LINUX;
    }
    static set _DARTIUM_EXECUTABLE_NAME_LINUX(__$value : string)  { 
        this.__$_DARTIUM_EXECUTABLE_NAME_LINUX = __$value;
    }

    private static __$_DARTIUM_EXECUTABLE_NAME_MAC : string;
    static get _DARTIUM_EXECUTABLE_NAME_MAC() : string { 
        if (this.__$_DARTIUM_EXECUTABLE_NAME_MAC===undefined) {
            this.__$_DARTIUM_EXECUTABLE_NAME_MAC = "Chromium.app/Contents/MacOS/Chromium";
        }
        return this.__$_DARTIUM_EXECUTABLE_NAME_MAC;
    }
    static set _DARTIUM_EXECUTABLE_NAME_MAC(__$value : string)  { 
        this.__$_DARTIUM_EXECUTABLE_NAME_MAC = __$value;
    }

    private static __$_DARTIUM_EXECUTABLE_NAME_WIN : string;
    static get _DARTIUM_EXECUTABLE_NAME_WIN() : string { 
        if (this.__$_DARTIUM_EXECUTABLE_NAME_WIN===undefined) {
            this.__$_DARTIUM_EXECUTABLE_NAME_WIN = "Chrome.exe";
        }
        return this.__$_DARTIUM_EXECUTABLE_NAME_WIN;
    }
    static set _DARTIUM_EXECUTABLE_NAME_WIN(__$value : string)  { 
        this.__$_DARTIUM_EXECUTABLE_NAME_WIN = __$value;
    }

    private static __$_DEFAULT_DIRECTORY_PROPERTY_NAME : string;
    static get _DEFAULT_DIRECTORY_PROPERTY_NAME() : string { 
        if (this.__$_DEFAULT_DIRECTORY_PROPERTY_NAME===undefined) {
            this.__$_DEFAULT_DIRECTORY_PROPERTY_NAME = "com.google.dart.sdk";
        }
        return this.__$_DEFAULT_DIRECTORY_PROPERTY_NAME;
    }
    static set _DEFAULT_DIRECTORY_PROPERTY_NAME(__$value : string)  { 
        this.__$_DEFAULT_DIRECTORY_PROPERTY_NAME = __$value;
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

    private static __$_DOC_FILE_SUFFIX : string;
    static get _DOC_FILE_SUFFIX() : string { 
        if (this.__$_DOC_FILE_SUFFIX===undefined) {
            this.__$_DOC_FILE_SUFFIX = "_api.json";
        }
        return this.__$_DOC_FILE_SUFFIX;
    }
    static set _DOC_FILE_SUFFIX(__$value : string)  { 
        this.__$_DOC_FILE_SUFFIX = __$value;
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

    private static __$_VM_EXECUTABLE_NAME_WIN : string;
    static get _VM_EXECUTABLE_NAME_WIN() : string { 
        if (this.__$_VM_EXECUTABLE_NAME_WIN===undefined) {
            this.__$_VM_EXECUTABLE_NAME_WIN = "dart.exe";
        }
        return this.__$_VM_EXECUTABLE_NAME_WIN;
    }
    static set _VM_EXECUTABLE_NAME_WIN(__$value : string)  { 
        this.__$_VM_EXECUTABLE_NAME_WIN = __$value;
    }

    private static __$_VM_EXECUTABLE_NAME : string;
    static get _VM_EXECUTABLE_NAME() : string { 
        if (this.__$_VM_EXECUTABLE_NAME===undefined) {
            this.__$_VM_EXECUTABLE_NAME = "dart";
        }
        return this.__$_VM_EXECUTABLE_NAME;
    }
    static set _VM_EXECUTABLE_NAME(__$value : string)  { 
        this.__$_VM_EXECUTABLE_NAME = __$value;
    }

    static get defaultSdk() : DirectoryBasedDartSdk {
        if (op(Op.EQUALS,DirectoryBasedDartSdk._DEFAULT_SDK,null)) {
            let sdkDirectory : any = DirectoryBasedDartSdk.defaultSdkDirectory;
            if (op(Op.EQUALS,sdkDirectory,null)) {
                return null;
            }
            DirectoryBasedDartSdk._DEFAULT_SDK = new DirectoryBasedDartSdk(sdkDirectory);
        }
        return DirectoryBasedDartSdk._DEFAULT_SDK;
    }
    static get defaultSdkDirectory() : any {
        let sdkProperty : string = JavaSystemIO.getProperty(DirectoryBasedDartSdk._DEFAULT_DIRECTORY_PROPERTY_NAME);
        if (sdkProperty == null) {
            return null;
        }
        let sdkDirectory : any = new bare.createInstance(any,null,sdkProperty);
        if (!sdkDirectory.exists()) {
            return null;
        }
        return sdkDirectory;
    }
    _sdkDirectory : any;

    _libraryDirectory : any;

    _sdkVersion : string;

    _dart2jsExecutable : any;

    _dartiumExecutable : any;

    _pubExecutable : any;

    _vmExecutable : any;

    constructor(sdkDirectory : any,useDart2jsPaths? : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DirectoryBasedDartSdk(sdkDirectory : any,useDart2jsPaths? : boolean) {
        useDart2jsPaths = useDart2jsPaths || false;
        this._sdkDirectory = sdkDirectory.getAbsoluteFile();
        this.libraryMap = this.initialLibraryMap(useDart2jsPaths);
    }
    get dart2JsExecutable() : any {
        if (op(Op.EQUALS,this._dart2jsExecutable,null)) {
            this._dart2jsExecutable = this._verifyExecutable(new bare.createInstance(any,null,new bare.createInstance(any,null,this._sdkDirectory,DirectoryBasedDartSdk._BIN_DIRECTORY_NAME),OSUtilities.isWindows() ? DirectoryBasedDartSdk._DART2JS_EXECUTABLE_NAME_WIN : DirectoryBasedDartSdk._DART2JS_EXECUTABLE_NAME));
        }
        return this._dart2jsExecutable;
    }
    get dartiumBinaryName() : string {
        if (OSUtilities.isWindows()) {
            return DirectoryBasedDartSdk._DARTIUM_EXECUTABLE_NAME_WIN;
        }else if (OSUtilities.isMac()) {
            return DirectoryBasedDartSdk._DARTIUM_EXECUTABLE_NAME_MAC;
        }else {
            return DirectoryBasedDartSdk._DARTIUM_EXECUTABLE_NAME_LINUX;
        }
    }
    get dartiumExecutable() : any {
        if (op(Op.EQUALS,this._dartiumExecutable,null)) {
            this._dartiumExecutable = this._verifyExecutable(new bare.createInstance(any,null,this.dartiumWorkingDirectory,this.dartiumBinaryName));
        }
        return this._dartiumExecutable;
    }
    get dartiumWorkingDirectory() : any {
        return this.getDartiumWorkingDirectory(this._sdkDirectory.getParentFile());
    }
    get directory() : any {
        return this._sdkDirectory;
    }
    get docDirectory() : any {
        return new bare.createInstance(any,null,this._sdkDirectory,DirectoryBasedDartSdk._DOCS_DIRECTORY_NAME);
    }
    get hasDocumentation() : boolean {
        return this.docDirectory.exists();
    }
    get isDartiumInstalled() : boolean {
        return this.dartiumExecutable != null;
    }
    get libraryDirectory() : any {
        if (op(Op.EQUALS,this._libraryDirectory,null)) {
            this._libraryDirectory = new bare.createInstance(any,null,this._sdkDirectory,DirectoryBasedDartSdk._LIB_DIRECTORY_NAME);
        }
        return this._libraryDirectory;
    }
    get pubExecutable() : any {
        if (op(Op.EQUALS,this._pubExecutable,null)) {
            this._pubExecutable = this._verifyExecutable(new bare.createInstance(any,null,new bare.createInstance(any,null,this._sdkDirectory,DirectoryBasedDartSdk._BIN_DIRECTORY_NAME),OSUtilities.isWindows() ? DirectoryBasedDartSdk._PUB_EXECUTABLE_NAME_WIN : DirectoryBasedDartSdk._PUB_EXECUTABLE_NAME));
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
            let revisionFile : any = new bare.createInstance(any,null,this._sdkDirectory,DirectoryBasedDartSdk._VERSION_FILE_NAME);
            try {
                let revision : string = revisionFile.readAsStringSync();
                if (revision != null) {
                    this._sdkVersion = new core.DartString(revision).trim();
                }
            } catch (__error__) {

                if (is(__error__,io.FileSystemException)){
                }
            }
        }
        return this._sdkVersion;
    }
    get vmBinaryName() : string {
        if (OSUtilities.isWindows()) {
            return DirectoryBasedDartSdk._VM_EXECUTABLE_NAME_WIN;
        }else {
            return DirectoryBasedDartSdk._VM_EXECUTABLE_NAME;
        }
    }
    get vmExecutable() : any {
        if (op(Op.EQUALS,this._vmExecutable,null)) {
            this._vmExecutable = this._verifyExecutable(new bare.createInstance(any,null,new bare.createInstance(any,null,this._sdkDirectory,DirectoryBasedDartSdk._BIN_DIRECTORY_NAME),this.vmBinaryName));
        }
        return this._vmExecutable;
    }
    get _libraryMapLocations() : core.DartIterable<any> { 
        return core.iter<any>(()=>(function*()  {
            yield new bare.createInstance(any,null,new bare.createInstance(any,null,new bare.createInstance(any,null,new bare.createInstance(any,null,this.libraryDirectory,DirectoryBasedDartSdk._INTERNAL_DIR),DirectoryBasedDartSdk._SDK_LIBRARY_METADATA_DIR),DirectoryBasedDartSdk._SDK_LIBRARY_METADATA_LIB_DIR),DirectoryBasedDartSdk._LIBRARIES_FILE);
            yield new bare.createInstance(any,null,new bare.createInstance(any,null,this.libraryDirectory,DirectoryBasedDartSdk._INTERNAL_DIR),DirectoryBasedDartSdk._LIBRARIES_FILE);
        }).call(this));
    }

    getDartiumWorkingDirectory(installDir : any) : any {
        return new bare.createInstance(any,null,installDir,DirectoryBasedDartSdk._DARTIUM_DIRECTORY_NAME);
    }
    getDocFileFor(libraryName : string) : any {
        let dir : any = this.docDirectory;
        if (!dir.exists()) {
            return null;
        }
        let libDir : any = new bare.createInstance(any,null,dir,libraryName);
        let docFile : any = new bare.createInstance(any,null,libDir,`${libraryName}${DirectoryBasedDartSdk._DOC_FILE_SUFFIX}`);
        if (docFile.exists()) {
            return docFile;
        }
        return null;
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
        let filePath : string = file.getAbsolutePath();
        let libPath : string = this.libraryDirectory.getAbsolutePath();
        if (!new core.DartString(filePath).startsWith(`${libPath}${JavaFile.separator}`)) {
            return null;
        }
        return new core.DartString(filePath).substring(new core.DartString(libPath).length + 1);
    }
    getSummarySdkBundle(strongMode : boolean) : any {
        let rootPath : string = this.directory.getAbsolutePath();
        let name : string = strongMode ? 'strong.sum' : 'spec.sum';
        let path : string = lib6.join(rootPath,'lib','_internal',name);
        try {
            let file : io.File = new io.File(path);
            if (file.existsSync()) {
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
                    searchedPaths.add(librariesFile.getAbsolutePath());
                    lastException = exception;
                    lastStackTrace = stackTrace;
                }
            }
        }
        AnalysisEngine.instance.logger.logError(`Could not initialize the library map from ${searchedPaths}`,new bare.createInstance(any,null,lastException,lastStackTrace));
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
            let file : any = new bare.createInstance(any,null,this.libraryDirectory,library.path);
            if (!new core.DartString(relativePath).isEmpty) {
                file = file.getParentFile();
                file = new bare.createInstance(any,null,file,relativePath);
            }
            return new bare.createInstance(any,null,file,lib4.Uri.parse(dartUri));
        } catch (__error__) {

            if (is(__error__,core.FormatException)){
                return null;
            }
        }
    }
    _verifyExecutable(file : any) : any {
        return file.isExecutable() ? file : null;
    }
}

export class properties {
}
