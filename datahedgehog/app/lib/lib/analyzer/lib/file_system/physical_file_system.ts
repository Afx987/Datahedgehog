/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/file_system/physical_file_system.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts.packages/path/lib/path";
import * as lib5 from "@dart2ts.packages/path/lib/src/context";
import * as lib6 from "@dart2ts/dart/uri";

export var _pathsToTimes : (paths : core.DartList<string>) => core.DartList<number> = (paths : core.DartList<string>) : core.DartList<number> =>  {
    return paths.map((path : any) =>  {
        if (path != null) {
            try {
                let file : io.File = new io.File(path);
                return file.lastModifiedSync().millisecondsSinceEpoch;
            } catch (__error__) {

                {
                    let _ = __error__;
                    return -1;
                }
            }
        }else {
            return null;
        }
    }).toList();
};
export namespace PhysicalResourceProvider {
    export type Constructors = 'PhysicalResourceProvider';
    export type Interface = Omit<PhysicalResourceProvider, Constructors>;
}
@DartClass
@Implements(any)
export class PhysicalResourceProvider implements any.Interface {
    private static __$NORMALIZE_EOL_ALWAYS : any;
    static get NORMALIZE_EOL_ALWAYS() : any { 
        if (this.__$NORMALIZE_EOL_ALWAYS===undefined) {
            this.__$NORMALIZE_EOL_ALWAYS = (string : string) =>  {
                return new core.DartString(string).replaceAll(new core.DartRegExp('\n?'),'\n');
            };
        }
        return this.__$NORMALIZE_EOL_ALWAYS;
    }
    static set NORMALIZE_EOL_ALWAYS(__$value : any)  { 
        this.__$NORMALIZE_EOL_ALWAYS = __$value;
    }

    private static __$INSTANCE : PhysicalResourceProvider;
    static get INSTANCE() : PhysicalResourceProvider { 
        if (this.__$INSTANCE===undefined) {
            this.__$INSTANCE = new PhysicalResourceProvider(null);
        }
        return this.__$INSTANCE;
    }
    static set INSTANCE(__$value : PhysicalResourceProvider)  { 
        this.__$INSTANCE = __$value;
    }

    private static __$SERVER_DIR : string;
    static get SERVER_DIR() : string { 
        if (this.__$SERVER_DIR===undefined) {
            this.__$SERVER_DIR = ".dartServer";
        }
        return this.__$SERVER_DIR;
    }
    static set SERVER_DIR(__$value : string)  { 
        this.__$SERVER_DIR = __$value;
    }

    private static __$pathsToTimesIsolateProvider : _SingleIsolateRunnerProvider;
    static get pathsToTimesIsolateProvider() : _SingleIsolateRunnerProvider { 
        if (this.__$pathsToTimesIsolateProvider===undefined) {
            this.__$pathsToTimesIsolateProvider = new _SingleIsolateRunnerProvider();
        }
        return this.__$pathsToTimesIsolateProvider;
    }
    static set pathsToTimesIsolateProvider(__$value : _SingleIsolateRunnerProvider)  { 
        this.__$pathsToTimesIsolateProvider = __$value;
    }

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    absolutePathContext : any;

    constructor(fileReadMode : any) {
    }
    @defaultConstructor
    PhysicalResourceProvider(fileReadMode : any) {
        this.absolutePathContext = new bare.createInstance(any,null,io.Platform.isWindows);
        if (fileReadMode != null) {
            FileBasedSource.fileReadMode = fileReadMode;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get pathContext() : lib5.Context {
        return io.Platform.isWindows ? lib4.properties.windows : lib4.properties.posix;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getFile(path : string) : any {
        path = lib4.normalize(path);
        return new _PhysicalFile(new io.File(path));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getFolder(path : string) : any {
        path = lib4.normalize(path);
        return new _PhysicalFolder(new io.Directory(path));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getModificationTimes(sources : core.DartList<any>) : async.Future<core.DartList<number>> { 
        return new async.Future.fromPromise(( async () =>  {
            let paths : core.DartList<string> = sources.map((source : any) =>  {
                return source.fullName;
            }).toList();
            let runner : any = await PhysicalResourceProvider.pathsToTimesIsolateProvider.get();
            return runner.run(_pathsToTimes,paths);
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getResource(path : string) : any {
        if (io.FileSystemEntity.isDirectorySync(path)) {
            return this.getFolder(path);
        }else {
            return this.getFile(path);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getStateLocation(pluginId : string) : any {
        let home : string;
        if (io.Platform.isWindows) {
            home = io.Platform.environment.get('LOCALAPPDATA');
        }else {
            home = io.Platform.environment.get('HOME');
        }
        if (home != null && io.FileSystemEntity.isDirectorySync(home)) {
            let directory : io.Directory = new io.Directory(lib4.join(home,PhysicalResourceProvider.SERVER_DIR,pluginId));
            directory.createSync({
                recursive : true});
            return new _PhysicalFolder(directory);
        }
        return null;
    }
}

export namespace _PhysicalResource {
    export type Constructors = '_PhysicalResource';
    export type Interface = Omit<_PhysicalResource, Constructors>;
}
@DartClass
@Implements(any)
export class _PhysicalResource implements any.Interface {
    _entry : io.FileSystemEntity;

    constructor(_entry : io.FileSystemEntity) {
    }
    @defaultConstructor
    _PhysicalResource(_entry : io.FileSystemEntity) {
        this._entry = _entry;
    }
    get absolutePathContext() : any {
        return PhysicalResourceProvider.INSTANCE.absolutePathContext;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get exists() : boolean {
        return this._entry.existsSync();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() {
        return new core.DartString(this.path).hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parent() : any {
        let parentPath : string = this.absolutePathContext.dirname(this.path);
        if (parentPath == this.path) {
            return null;
        }
        return new _PhysicalFolder(new io.Directory(parentPath));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get path() : string {
        return this._entry.absolute.path;
    }
    get pathContext() : lib5.Context {
        return io.Platform.isWindows ? lib4.properties.windows : lib4.properties.posix;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get shortName() : string {
        return this.absolutePathContext.basename(this.path);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (this.runtimeType != other.runtimeType) {
            return false;
        }
        return this.path == other.path;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    delete() : void {
        try {
            this._entry.deleteSync({
                recursive : true});
        } catch (__error__) {

            if (is(__error__,io.FileSystemException)){
                let exception : io.FileSystemException = __error__;
                throw new bare.createInstance(any,null,exception.path,exception.message);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.path;
    }
    _throwIfWindowsDeviceDriver() : void {
        if (io.Platform.isWindows) {
            let shortName : string = new core.DartString(this.shortName).toUpperCase();
            if (shortName == 'CON' || shortName == 'PRN' || shortName == 'AUX' || shortName == 'CLOCK$' || shortName == 'NUL' || shortName == 'COM1' || shortName == 'LPT1' || shortName == 'LPT2' || shortName == 'LPT3' || shortName == 'COM2' || shortName == 'COM3' || shortName == 'COM4') {
                throw new bare.createInstance(any,null,this.path,'Windows device drivers cannot be read.');
            }
        }
    }
}

export namespace _SingleIsolateRunnerProvider {
    export type Constructors = '_SingleIsolateRunnerProvider';
    export type Interface = Omit<_SingleIsolateRunnerProvider, Constructors>;
}
@DartClass
export class _SingleIsolateRunnerProvider {
    _isSpawning : boolean;

    _runner : any;

    get() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this._runner != null) {
                return this._runner;
            }
            if (this._isSpawning) {
                let completer : async.DartCompleter<any> = new async.DartCompleter<any>();
                new async.DartTimer.periodic(new core.DartDuration({
                    milliseconds : 10}),(timer : async.DartTimer) =>  {
                    if (this._runner != null) {
                        completer.complete(this._runner);
                        timer.cancel();
                    }
                });
                return completer.future;
            }
            this._isSpawning = true;
            this._runner = await IsolateRunner.spawn();
            return this._runner;
        } )());
    }

    constructor() {
    }
    @defaultConstructor
    _SingleIsolateRunnerProvider() {
        this._isSpawning = false;
    }
}

export namespace _PhysicalFile {
    export type Constructors = _PhysicalResource.Constructors | '_PhysicalFile';
    export type Interface = Omit<_PhysicalFile, Constructors>;
}
@DartClass
@Implements(any)
export class _PhysicalFile extends _PhysicalResource implements any.Interface {
    constructor(file : io.File) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _PhysicalFile(file : io.File) {
        super._PhysicalResource(file);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get changes() : async.DartStream<any> {
        return new bare.createInstance(any,null,this._entry.path).events;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get lengthSync() : number {
        try {
            return this._file.lengthSync();
        } catch (__error__) {

            if (is(__error__,io.FileSystemException)){
                let exception : io.FileSystemException = __error__;
                throw new bare.createInstance(any,null,exception.path,exception.message);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get modificationStamp() : number {
        try {
            return this._file.lastModifiedSync().millisecondsSinceEpoch;
        } catch (__error__) {

            if (is(__error__,io.FileSystemException)){
                let exception : io.FileSystemException = __error__;
                throw new bare.createInstance(any,null,exception.path,exception.message);
            }
        }
    }
    get _file() : io.File {
        return this._entry as io.File;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copyTo(parentFolder : any) : any {
        parentFolder.create();
        let destination : any = parentFolder.getChildAssumingFile(this.shortName);
        destination.writeAsBytesSync(this.readAsBytesSync());
        return destination;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createSource(uri? : lib6.Uri) : any {
        return new bare.createInstance(any,null,this,(uri || this.pathContext.toUri(this.path)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isOrContains(path : string) : boolean {
        return path == this.path;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    readAsBytesSync() : core.DartList<number> {
        this._throwIfWindowsDeviceDriver();
        try {
            return this._file.readAsBytesSync();
        } catch (__error__) {

            if (is(__error__,io.FileSystemException)){
                let exception : io.FileSystemException = __error__;
                throw new bare.createInstance(any,null,exception.path,exception.message);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    readAsStringSync() : string {
        this._throwIfWindowsDeviceDriver();
        try {
            return FileBasedSource.fileReadMode(this._file.readAsStringSync());
        } catch (__error__) {

            if (is(__error__,io.FileSystemException)){
                let exception : io.FileSystemException = __error__;
                throw new bare.createInstance(any,null,exception.path,exception.message);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    renameSync(newPath : string) : any {
        try {
            return new _PhysicalFile(this._file.renameSync(newPath));
        } catch (__error__) {

            if (is(__error__,io.FileSystemException)){
                let exception : io.FileSystemException = __error__;
                throw new bare.createInstance(any,null,exception.path,exception.message);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveSymbolicLinksSync() : any {
        try {
            return new _PhysicalFile(new io.File(this._file.resolveSymbolicLinksSync()));
        } catch (__error__) {

            if (is(__error__,io.FileSystemException)){
                let exception : io.FileSystemException = __error__;
                throw new bare.createInstance(any,null,exception.path,exception.message);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toUri() : lib6.Uri {
        return new lib6.Uri.file(this.path);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    writeAsBytesSync(bytes : core.DartList<number>) : void {
        try {
            this._file.writeAsBytesSync(bytes);
        } catch (__error__) {

            if (is(__error__,io.FileSystemException)){
                let exception : io.FileSystemException = __error__;
                throw new bare.createInstance(any,null,exception.path,exception.message);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    writeAsStringSync(content : string) : void {
        try {
            this._file.writeAsStringSync(content);
        } catch (__error__) {

            if (is(__error__,io.FileSystemException)){
                let exception : io.FileSystemException = __error__;
                throw new bare.createInstance(any,null,exception.path,exception.message);
            }
        }
    }
}

export namespace _PhysicalFolder {
    export type Constructors = _PhysicalResource.Constructors | '_PhysicalFolder';
    export type Interface = Omit<_PhysicalFolder, Constructors>;
}
@DartClass
@Implements(any)
export class _PhysicalFolder extends _PhysicalResource implements any.Interface {
    constructor(directory : io.Directory) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _PhysicalFolder(directory : io.Directory) {
        super._PhysicalResource(directory);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get changes() : async.DartStream<any> {
        return new bare.createInstance(any,null,this._entry.path).events.handleError((error : any) =>  {
        },{
            test : (error : any) =>  {
                return is(error, io.FileSystemException);
            }});
    }
    get _directory() : io.Directory {
        return this._entry as io.Directory;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    canonicalizePath(relPath : string) : string {
        return lib4.normalize(lib4.join(this.path,relPath));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    contains(path : string) : boolean {
        return this.absolutePathContext.isWithin(this.path,path);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copyTo(parentFolder : any) : any {
        let destination : any = parentFolder.getChildAssumingFolder(this.shortName);
        destination.create();
        for(let child of this.getChildren()) {
            child.copyTo(destination);
        }
        return destination;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    create() : void {
        this._directory.createSync({
            recursive : true});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getChild(relPath : string) : any {
        let canonicalPath : string = this.canonicalizePath(relPath);
        return PhysicalResourceProvider.INSTANCE.getResource(canonicalPath);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getChildAssumingFile(relPath : string) : _PhysicalFile {
        let canonicalPath : string = this.canonicalizePath(relPath);
        let file : io.File = new io.File(canonicalPath);
        return new _PhysicalFile(file);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getChildAssumingFolder(relPath : string) : _PhysicalFolder {
        let canonicalPath : string = this.canonicalizePath(relPath);
        let directory : io.Directory = new io.Directory(canonicalPath);
        return new _PhysicalFolder(directory);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getChildren() : core.DartList<any> {
        try {
            let children : core.DartList<any> = new core.DartList.literal<any>();
            let directory : io.Directory = this._entry as io.Directory;
            let entries : core.DartList<io.FileSystemEntity> = directory.listSync({
                recursive : false});
            let numEntries : number = entries.length;
            for(let i : number = 0; i < numEntries; i++){
                let entity : io.FileSystemEntity = entries[i];
                if (is(entity, io.Directory)) {
                    children.add(new _PhysicalFolder(entity));
                }else if (is(entity, io.File)) {
                    children.add(new _PhysicalFile(entity));
                }
            }
            return children;
        } catch (__error__) {

            if (is(__error__,io.FileSystemException)){
                let exception : io.FileSystemException = __error__;
                throw new bare.createInstance(any,null,exception.path,exception.message);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isOrContains(path : string) : boolean {
        if (path == this.path) {
            return true;
        }
        return this.contains(path);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveSymbolicLinksSync() : any {
        try {
            return new _PhysicalFolder(new io.Directory(this._directory.resolveSymbolicLinksSync()));
        } catch (__error__) {

            if (is(__error__,io.FileSystemException)){
                let exception : io.FileSystemException = __error__;
                throw new bare.createInstance(any,null,exception.path,exception.message);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toUri() : lib6.Uri {
        return new lib6.Uri.directory(this.path);
    }
}

export class properties {
}
