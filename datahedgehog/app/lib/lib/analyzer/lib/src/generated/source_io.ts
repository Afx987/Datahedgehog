/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/source_io.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as collection from "@dart2ts/dart/core";
import * as lib5 from "@dart2ts.packages/path/lib/path";

export namespace DirectoryBasedSourceContainer {
    export type Constructors = 'con1' | 'con2';
    export type Interface = Omit<DirectoryBasedSourceContainer, Constructors>;
}
@DartClass
@Implements(any)
@DartClassAnnotation({
    library : 'dart:core',type : 'deprecated',value : {
        arguments : [],namedArguments : {
        }}})
export class DirectoryBasedSourceContainer implements any.Interface {
    _path : string;

    @namedConstructor
    con1(directory : any) {
        this.con2(directory.getPath());
    }
    static con1 : new(directory : any) => DirectoryBasedSourceContainer;

    @namedConstructor
    con2(path : string) {
        this._path = DirectoryBasedSourceContainer._appendFileSeparator(path);
    }
    static con2 : new(path : string) => DirectoryBasedSourceContainer;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return new core.DartString(this._path).hashCode;
    }
    get path() : string {
        return this._path;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](obj : core.DartObject) : boolean {
        return (is(obj, DirectoryBasedSourceContainer)) && obj.path == this.path;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    contains(source : any) : boolean {
        return source.fullName.startsWith(this._path);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `SourceContainer[${this._path}]`;
    }
    static _appendFileSeparator(path : string) : string {
        if (path == null || new core.DartString(path).length <= 0 || new core.DartString(path).codeUnitAt(new core.DartString(path).length - 1) == JavaFile.separatorChar) {
            return path;
        }
        return `${path}${JavaFile.separator}`;
    }
}

export namespace ExplicitSourceResolver {
    export type Constructors = 'ExplicitSourceResolver';
    export type Interface = Omit<ExplicitSourceResolver, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:core',type : 'deprecated',value : {
        arguments : [],namedArguments : {
        }}})
export class ExplicitSourceResolver extends any {
    uriToFileMap : core.DartMap<lib3.Uri,any>;

    pathToUriMap : core.DartMap<string,lib3.Uri>;

    constructor(uriToFileMap : core.DartMap<lib3.Uri,any>) {
    }
    @defaultConstructor
    ExplicitSourceResolver(uriToFileMap : core.DartMap<lib3.Uri,any>) {
        this.uriToFileMap = uriToFileMap;
        this.pathToUriMap = ExplicitSourceResolver._computePathToUriMap(uriToFileMap);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveAbsolute(uri : lib3.Uri,actualUri? : lib3.Uri) : any {
        let file : any = this.uriToFileMap.get(uri);
        actualUri = ( actualUri ) || ( uri );
        if (op(Op.EQUALS,file,null)) {
            return new bare.createInstance(any,null,uri.toString(),actualUri,UriKind.fromScheme(actualUri.scheme));
        }else {
            return new FileBasedSource(file,actualUri);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    restoreAbsolute(source : any) : lib3.Uri {
        return this.pathToUriMap.get(source.fullName);
    }
    static _computePathToUriMap(uriToSourceMap : core.DartMap<lib3.Uri,any>) : core.DartMap<string,lib3.Uri> {
        let pathToUriMap : core.DartMap<string,lib3.Uri> = new core.DartMap.literal([
        ]);
        uriToSourceMap.forEach((uri : lib3.Uri,file : any) =>  {
            pathToUriMap.set(file.getAbsolutePath(),uri);
        });
        return pathToUriMap;
    }
}

export namespace FileBasedSource {
    export type Constructors = 'FileBasedSource';
    export type Interface = Omit<FileBasedSource, Constructors>;
}
@DartClass
export class FileBasedSource extends any {
    private static __$fileReadMode : Function;
    static get fileReadMode() : Function { 
        if (this.__$fileReadMode===undefined) {
            this.__$fileReadMode = (s : string) =>  {
                return s;
            };
        }
        return this.__$fileReadMode;
    }
    static set fileReadMode(__$value : Function)  { 
        this.__$fileReadMode = __$value;
    }

    private static __$_idTable : core.DartMap<string,number>;
    static get _idTable() : core.DartMap<string,number> { 
        if (this.__$_idTable===undefined) {
            this.__$_idTable = new core.DartHashMap<string,number>();
        }
        return this.__$_idTable;
    }
    static set _idTable(__$value : core.DartMap<string,number>)  { 
        this.__$_idTable = __$value;
    }

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    uri : lib3.Uri;

    id : number;

    file : any;

    _absolutePath : string;

    _encoding : string;

    constructor(file : any,uri? : lib3.Uri) {
    }
    @defaultConstructor
    FileBasedSource(file : any,uri? : lib3.Uri) {
        this.uri = (uri || file.toURI());
        this.file = file;
        this.id = FileBasedSource._idTable.putIfAbsent(`${(uri || file.toURI())}@${file.getPath()}`,() =>  {
            return FileBasedSource._idTable.length;
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get contents() : any {
        return PerformanceStatistics.io.makeCurrentWhile(() =>  {
            return this.contentsFromFile;
        });
    }
    get contentsFromFile() : any {
        return new bare.createInstance(any,null,this.file.lastModified(),FileBasedSource.fileReadMode(this.file.readAsStringSync()));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get encoding() : string {
        if (this._encoding == null) {
            this._encoding = this.uri.toString();
        }
        return this._encoding;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fullName() : string {
        if (this._absolutePath == null) {
            this._absolutePath = this.file.getAbsolutePath();
        }
        return this._absolutePath;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.uri.hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isInSystemLibrary() : boolean {
        return this.uri.scheme == DartUriResolver.DART_SCHEME;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get modificationStamp() : number {
        return this.file.lastModified();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get shortName() : string {
        return this.file.getName();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriKind() : any {
        let scheme : string = this.uri.scheme;
        return UriKind.fromScheme(scheme);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](object : core.DartObject) : boolean {
        if (is(object, FileBasedSource)) {
            return this.id == object.id;
        }else if (is(object, any)) {
            return op(Op.EQUALS,this.uri,object.uri);
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    exists() : boolean {
        return this.file.isFile();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        if (op(Op.EQUALS,this.file,null)) {
            return "<unknown source>";
        }
        return this.file.getAbsolutePath();
    }
}

export namespace FileUriResolver {
    export type Constructors = 'FileUriResolver';
    export type Interface = Omit<FileUriResolver, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:core',type : 'deprecated',value : {
        arguments : [],namedArguments : {
        }}})
export class FileUriResolver extends any {
    private static __$FILE_SCHEME : string;
    static get FILE_SCHEME() : string { 
        if (this.__$FILE_SCHEME===undefined) {
            this.__$FILE_SCHEME = "file";
        }
        return this.__$FILE_SCHEME;
    }
    static set FILE_SCHEME(__$value : string)  { 
        this.__$FILE_SCHEME = __$value;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveAbsolute(uri : lib3.Uri,actualUri? : lib3.Uri) : any {
        if (!FileUriResolver.isFileUri(uri)) {
            return null;
        }
        return new FileBasedSource(new bare.createInstance(any,null,uri),(actualUri || uri));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    restoreAbsolute(source : any) : lib3.Uri {
        return new lib3.Uri.file(source.fullName);
    }
    static isFileUri(uri : lib3.Uri) : boolean {
        return uri.scheme == FileUriResolver.FILE_SCHEME;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FileUriResolver() {
    }
}

export namespace LocalSourcePredicate {
    export type Constructors = 'LocalSourcePredicate';
    export type Interface = Omit<LocalSourcePredicate, Constructors>;
}
@DartClass
export class LocalSourcePredicate {
    private static __$FALSE : LocalSourcePredicate;
    static get FALSE() : LocalSourcePredicate { 
        if (this.__$FALSE===undefined) {
            this.__$FALSE = new LocalSourcePredicate_FALSE();
        }
        return this.__$FALSE;
    }
    static set FALSE(__$value : LocalSourcePredicate)  { 
        this.__$FALSE = __$value;
    }

    private static __$TRUE : LocalSourcePredicate;
    static get TRUE() : LocalSourcePredicate { 
        if (this.__$TRUE===undefined) {
            this.__$TRUE = new LocalSourcePredicate_TRUE();
        }
        return this.__$TRUE;
    }
    static set TRUE(__$value : LocalSourcePredicate)  { 
        this.__$TRUE = __$value;
    }

    private static __$NOT_SDK : LocalSourcePredicate;
    static get NOT_SDK() : LocalSourcePredicate { 
        if (this.__$NOT_SDK===undefined) {
            this.__$NOT_SDK = new LocalSourcePredicate_NOT_SDK();
        }
        return this.__$NOT_SDK;
    }
    static set NOT_SDK(__$value : LocalSourcePredicate)  { 
        this.__$NOT_SDK = __$value;
    }

    @Abstract
    isLocal(source : any) : boolean{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    LocalSourcePredicate() {
    }
}

export namespace LocalSourcePredicate_FALSE {
    export type Constructors = 'LocalSourcePredicate_FALSE';
    export type Interface = Omit<LocalSourcePredicate_FALSE, Constructors>;
}
@DartClass
@Implements(LocalSourcePredicate)
export class LocalSourcePredicate_FALSE implements LocalSourcePredicate.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isLocal(source : any) : boolean {
        return false;
    }
    constructor() {
    }
    @defaultConstructor
    LocalSourcePredicate_FALSE() {
    }
}

export namespace LocalSourcePredicate_NOT_SDK {
    export type Constructors = 'LocalSourcePredicate_NOT_SDK';
    export type Interface = Omit<LocalSourcePredicate_NOT_SDK, Constructors>;
}
@DartClass
@Implements(LocalSourcePredicate)
export class LocalSourcePredicate_NOT_SDK implements LocalSourcePredicate.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isLocal(source : any) : boolean {
        return source.uriKind != UriKind.DART_URI;
    }
    constructor() {
    }
    @defaultConstructor
    LocalSourcePredicate_NOT_SDK() {
    }
}

export namespace LocalSourcePredicate_TRUE {
    export type Constructors = 'LocalSourcePredicate_TRUE';
    export type Interface = Omit<LocalSourcePredicate_TRUE, Constructors>;
}
@DartClass
@Implements(LocalSourcePredicate)
export class LocalSourcePredicate_TRUE implements LocalSourcePredicate.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isLocal(source : any) : boolean {
        return true;
    }
    constructor() {
    }
    @defaultConstructor
    LocalSourcePredicate_TRUE() {
    }
}

export namespace PackageUriResolver {
    export type Constructors = 'PackageUriResolver';
    export type Interface = Omit<PackageUriResolver, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:core',type : 'deprecated',value : {
        arguments : [],namedArguments : {
        }}})
export class PackageUriResolver extends any {
    private static __$PACKAGE_SCHEME : string;
    static get PACKAGE_SCHEME() : string { 
        if (this.__$PACKAGE_SCHEME===undefined) {
            this.__$PACKAGE_SCHEME = "package";
        }
        return this.__$PACKAGE_SCHEME;
    }
    static set PACKAGE_SCHEME(__$value : string)  { 
        this.__$PACKAGE_SCHEME = __$value;
    }

    private static __$_CanLogRequiredKeyIoException : boolean;
    static get _CanLogRequiredKeyIoException() : boolean { 
        if (this.__$_CanLogRequiredKeyIoException===undefined) {
            this.__$_CanLogRequiredKeyIoException = true;
        }
        return this.__$_CanLogRequiredKeyIoException;
    }
    static set _CanLogRequiredKeyIoException(__$value : boolean)  { 
        this.__$_CanLogRequiredKeyIoException = __$value;
    }

    _packagesDirectories : core.DartList<any>;

    constructor(_packagesDirectories : core.DartList<any>) {
    }
    @defaultConstructor
    PackageUriResolver(_packagesDirectories : core.DartList<any>) {
        this._packagesDirectories = _packagesDirectories;
        if (this._packagesDirectories.length < 1) {
            throw new core.ArgumentError("At least one package directory must be provided");
        }
    }
    get packagesDirectory_forTesting() : string {
        let length : number = this._packagesDirectories.length;
        if (length != 1) {
            throw new core.Exception(`Expected 1 package directory, found ${length}`);
        }
        return this._packagesDirectories[0].getPath();
    }
    getCanonicalFile(packagesDirectory : any,pkgName : string,relPath : string) : any {
        let pkgDir : any = new bare.createInstance(any,null,packagesDirectory,pkgName);
        try {
            pkgDir = pkgDir.getCanonicalFile();
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                if (!new core.DartString(exception.toString()).contains("Required key not available")) {
                    AnalysisEngine.instance.logger.logError(`Canonical failed: ${pkgDir}`,new bare.createInstance(any,null,exception,stackTrace));
                }else if (PackageUriResolver._CanLogRequiredKeyIoException) {
                    PackageUriResolver._CanLogRequiredKeyIoException = false;
                    AnalysisEngine.instance.logger.logError(`Canonical failed: ${pkgDir}`,new bare.createInstance(any,null,exception,stackTrace));
                }
            }
        }
        return new bare.createInstance(any,null,pkgDir,new core.DartString(relPath).replaceAll('/',new core.DartString.fromCharCode(JavaFile.separatorChar).valueOf()));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveAbsolute(uri : lib3.Uri,actualUri? : lib3.Uri) : any {
        if (!PackageUriResolver.isPackageUri(uri)) {
            return null;
        }
        let path : string = uri.path;
        if (path == null) {
            path = uri.path;
            if (path == null) {
                return null;
            }
        }
        let pkgName : string;
        let relPath : string;
        let index : number = new core.DartString(path).indexOf('/');
        if (index == -1) {
            pkgName = path;
            relPath = "";
        }else if (index == 0) {
            return null;
        }else {
            pkgName = new core.DartString(path).substring(0,index);
            relPath = new core.DartString(path).substring(index + 1);
        }
        for(let packagesDirectory of this._packagesDirectories) {
            let resolvedFile : any = new bare.createInstance(any,null,packagesDirectory,path);
            if (resolvedFile.exists()) {
                let canonicalFile : any = this.getCanonicalFile(packagesDirectory,pkgName,relPath);
                if (actualUri != null) {
                    return new FileBasedSource(canonicalFile,actualUri);
                }
                if (this._isSelfReference(packagesDirectory,canonicalFile)) {
                    uri = canonicalFile.toURI();
                }
                return new FileBasedSource(canonicalFile,uri);
            }
        }
        return new FileBasedSource(this.getCanonicalFile(this._packagesDirectories[0],pkgName,relPath),(actualUri || uri));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    restoreAbsolute(source : any) : lib3.Uri {
        let sourceUri : string = this._toFileUri(source.fullName);
        for(let packagesDirectory of this._packagesDirectories) {
            let pkgFolders : core.DartList<any> = packagesDirectory.listFiles();
            if (pkgFolders != null) {
                for(let pkgFolder of pkgFolders) {
                    try {
                        let pkgCanonicalUri : string = this._toFileUri(pkgFolder.getCanonicalPath());
                        if (new core.DartString(sourceUri).startsWith(pkgCanonicalUri)) {
                            let relPath : string = new core.DartString(sourceUri).substring(new core.DartString(pkgCanonicalUri).length);
                            return lib3.Uri.parse(`${PackageUriResolver.PACKAGE_SCHEME}:${pkgFolder.getName()}${relPath}`);
                        }
                    } catch (__error__) {

                        {
                            let e = __error__;
                        }
                    }
                }
            }
        }
        return null;
    }
    _isSelfReference(packagesDir : any,file : any) : boolean {
        let rootDir : any = packagesDir.getParentFile();
        if (op(Op.EQUALS,rootDir,null)) {
            return false;
        }
        let rootPath : string = rootDir.getAbsolutePath();
        let filePath : string = file.getAbsolutePath();
        return new core.DartString(filePath).startsWith(`${rootPath}/lib`);
    }
    _toFileUri(filePath : string) : string {
        return lib5.properties.context.toUri(filePath).toString();
    }
    static isPackageUri(uri : lib3.Uri) : boolean {
        return PackageUriResolver.PACKAGE_SCHEME == uri.scheme;
    }
}

export namespace RelativeFileUriResolver {
    export type Constructors = 'RelativeFileUriResolver';
    export type Interface = Omit<RelativeFileUriResolver, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:core',type : 'deprecated',value : {
        arguments : [],namedArguments : {
        }}})
export class RelativeFileUriResolver extends any {
    private static __$FILE_SCHEME : string;
    static get FILE_SCHEME() : string { 
        if (this.__$FILE_SCHEME===undefined) {
            this.__$FILE_SCHEME = "file";
        }
        return this.__$FILE_SCHEME;
    }
    static set FILE_SCHEME(__$value : string)  { 
        this.__$FILE_SCHEME = __$value;
    }

    _relativeDirectories : core.DartList<any>;

    _rootDirectory : any;

    constructor(_rootDirectory : any,_relativeDirectories : core.DartList<any>) {
    }
    @defaultConstructor
    RelativeFileUriResolver(_rootDirectory : any,_relativeDirectories : core.DartList<any>) {
        super.DartObject();
        this._rootDirectory = _rootDirectory;
        this._relativeDirectories = _relativeDirectories;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveAbsolute(uri : lib3.Uri,actualUri? : lib3.Uri) : any {
        let rootPath : string = this._rootDirectory.toURI().path;
        let uriPath : string = uri.path;
        if (uriPath != null && new core.DartString(uriPath).startsWith(rootPath)) {
            let filePath : string = new core.DartString(uri.path).substring(new core.DartString(rootPath).length);
            for(let dir of this._relativeDirectories) {
                let file : any = new bare.createInstance(any,null,dir,filePath);
                if (file.exists()) {
                    return new FileBasedSource(file,(actualUri || uri));
                }
            }
        }
        return null;
    }
    static isFileUri(uri : lib3.Uri) : boolean {
        return uri.scheme == RelativeFileUriResolver.FILE_SCHEME;
    }
}

export class properties {
}
