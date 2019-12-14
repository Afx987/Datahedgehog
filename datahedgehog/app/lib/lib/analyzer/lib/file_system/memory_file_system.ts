/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/file_system/memory_file_system.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as lib4 from "@dart2ts.packages/path/lib/src/context";
import * as lib5 from "@dart2ts.packages/path/lib/path";
import * as convert from "@dart2ts/dart/convert";
import * as lib7 from "@dart2ts/dart/uri";

export namespace MemoryResourceProvider {
    export type Constructors = 'MemoryResourceProvider';
    export type Interface = Omit<MemoryResourceProvider, Constructors>;
}
@DartClass
@Implements(any)
export class MemoryResourceProvider implements any.Interface {
    _pathToResource : core.DartMap<string,_MemoryResource>;

    _pathToBytes : core.DartMap<string,core.DartList<number>>;

    _pathToTimestamp : core.DartMap<string,number>;

    _pathToWatchers : core.DartMap<string,core.DartList<async.DartStreamController<any>>>;

    nextStamp : number;

    _pathContext : lib4.Context;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    absolutePathContext : any;

    constructor(_namedArguments? : {context? : lib4.Context,isWindows? : boolean}) {
    }
    @defaultConstructor
    MemoryResourceProvider(_namedArguments? : {context? : lib4.Context,isWindows? : boolean}) {
        let {context,isWindows} = Object.assign({
            "isWindows" : false}, _namedArguments );
        this._pathToResource = new core.DartHashMap<string,_MemoryResource>();
        this._pathToBytes = new core.DartHashMap<string,core.DartList<number>>();
        this._pathToTimestamp = new core.DartHashMap<string,number>();
        this._pathToWatchers = new core.DartHashMap<string,core.DartList<async.DartStreamController<any>>>();
        this.nextStamp = 0;
        this._pathContext = (context = ( context ) || ( op(Op.EQUALS,lib5.properties.style,lib5.Style.windows) ? new lib4.Context({
            current : 'C:\'}) : lib5.properties.context ));
        this.absolutePathContext = new bare.createInstance(any,null,op(Op.EQUALS,context.style,lib5.Style.windows));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get pathContext() : lib4.Context {
        return this._pathContext;
    }
    convertPath(path : string) : string {
        if (op(Op.EQUALS,this.pathContext.style,lib5.properties.windows.style)) {
            if (new core.DartString(path).startsWith(lib5.properties.posix.separator)) {
                path = 'C:' + path;
            }
            path = new core.DartString(path).replaceAll(lib5.properties.posix.separator,lib5.properties.windows.separator);
        }
        return path;
    }
    deleteFile(path : string) : void {
        this._checkFileAtPath(path);
        this._pathToResource.remove(path);
        this._pathToBytes.remove(path);
        this._pathToTimestamp.remove(path);
        this._notifyWatchers(path,ChangeType.REMOVE);
    }
    deleteFolder(path : string) : void {
        this._checkFolderAtPath(path);
        let folder : _MemoryFolder = this._pathToResource.get(path);
        for(let child of folder.getChildren()) {
            if (is(child, any)) {
                this.deleteFile(child.path);
            }else if (is(child, any)) {
                this.deleteFolder(child.path);
            }else {
                throw `failed to delete resource: ${child}`;
            }
        }
        this._pathToResource.remove(path);
        this._pathToBytes.remove(path);
        this._pathToTimestamp.remove(path);
        this._notifyWatchers(path,ChangeType.REMOVE);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getFile(path : string) : any {
        return new _MemoryFile(this,path);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getFolder(path : string) : any {
        path = this.pathContext.normalize(path);
        if (!this.pathContext.isAbsolute(path)) {
            throw new core.ArgumentError(`Path must be absolute : ${path}`);
        }
        return new _MemoryFolder(this,path);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getModificationTimes(sources : core.DartList<any>) : async.Future<core.DartList<number>> { 
        return new async.Future.fromPromise(( async () =>  {
            return sources.map((source : any) =>  {
                let path : string = source.fullName;
                return (this._pathToTimestamp.get(path) || -1);
            }).toList();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getResource(path : string) : any {
        path = this.pathContext.normalize(path);
        let resource : any = this._pathToResource.get(path);
        if (op(Op.EQUALS,resource,null)) {
            resource = new _MemoryFile(this,path);
        }
        return resource;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getStateLocation(pluginId : string) : any {
        return this.newFolder(`/user/home/${pluginId}`);
    }
    modifyFile(path : string,content : string) : void {
        this._checkFileAtPath(path);
        this._pathToBytes.set(path,convert.properties.UTF8.encode(content));
        this._pathToTimestamp.set(path,this.nextStamp++);
        this._notifyWatchers(path,ChangeType.MODIFY);
    }
    newDummyLink(path : string) : any {
        path = this.pathContext.normalize(path);
        this.newFolder(this.pathContext.dirname(path));
        let link : _MemoryDummyLink = new _MemoryDummyLink(this,path);
        this._pathToResource.set(path,link);
        this._pathToTimestamp.set(path,this.nextStamp++);
        this._notifyWatchers(path,ChangeType.ADD);
        return link;
    }
    newFile(path : string,content : string,stamp? : number) : any {
        path = this.pathContext.normalize(path);
        let file : _MemoryFile = this._newFile(path);
        this._pathToBytes.set(path,convert.properties.UTF8.encode(content));
        this._pathToTimestamp.set(path,(stamp || this.nextStamp++));
        this._notifyWatchers(path,ChangeType.ADD);
        return file;
    }
    newFileWithBytes(path : string,bytes : core.DartList<number>,stamp? : number) : any {
        path = this.pathContext.normalize(path);
        let file : _MemoryFile = this._newFile(path);
        this._pathToBytes.set(path,bytes);
        this._pathToTimestamp.set(path,(stamp || this.nextStamp++));
        this._notifyWatchers(path,ChangeType.ADD);
        return file;
    }
    newFolder(path : string) : any {
        path = this.pathContext.normalize(path);
        if (!this.pathContext.isAbsolute(path)) {
            throw new core.ArgumentError(`Path must be absolute : ${path}`);
        }
        let resource : _MemoryResource = this._pathToResource.get(path);
        if (op(Op.EQUALS,resource,null)) {
            let parentPath : string = this.pathContext.dirname(path);
            if (parentPath != path) {
                this.newFolder(parentPath);
            }
            let folder : _MemoryFolder = new _MemoryFolder(this,path);
            this._pathToResource.set(path,folder);
            this._pathToTimestamp.set(path,this.nextStamp++);
            this._notifyWatchers(path,ChangeType.ADD);
            return folder;
        }else if (is(resource, _MemoryFolder)) {
            this._notifyWatchers(path,ChangeType.ADD);
            return resource;
        }else {
            let message : string = 'Folder expected at ' + `'${path}'` + `but ${resource.runtimeType} found`;
            throw new core.ArgumentError(message);
        }
    }
    renameFileSync(file : _MemoryFile,newPath : string) : _MemoryFile {
        let path : string = file.path;
        if (newPath == path) {
            return file;
        }
        let existingNewResource : _MemoryResource = this._pathToResource.get(newPath);
        if (is(existingNewResource, _MemoryFolder)) {
            throw new bare.createInstance(any,null,path,`Could not be renamed: ${newPath} is a folder.`);
        }
        let newFile : _MemoryFile = this._newFile(newPath);
        this._pathToResource.remove(path);
        this._pathToBytes.set(newPath,this._pathToBytes.remove(path));
        this._pathToTimestamp.set(newPath,this._pathToTimestamp.remove(path));
        if (existingNewResource != null) {
            this._notifyWatchers(newPath,ChangeType.REMOVE);
        }
        this._notifyWatchers(path,ChangeType.REMOVE);
        this._notifyWatchers(newPath,ChangeType.ADD);
        return newFile;
    }
    updateFile(path : string,content : string,stamp? : number) : any {
        path = this.pathContext.normalize(path);
        this.newFolder(this.pathContext.dirname(path));
        let file : _MemoryFile = new _MemoryFile(this,path);
        this._pathToResource.set(path,file);
        this._pathToBytes.set(path,convert.properties.UTF8.encode(content));
        this._pathToTimestamp.set(path,(stamp || this.nextStamp++));
        this._notifyWatchers(path,ChangeType.MODIFY);
        return file;
    }
    writeOn(sink : core.DartStringSink) : void {
        let paths : core.DartList<string> = this._pathToResource.keys.toList();
        paths.sort();
        paths.forEach(sink.writeln.bind(sink));
    }
    _checkFileAtPath(path : string) : void {
        let resource : _MemoryResource = this._pathToResource.get(path);
        if (isNot(resource, _MemoryFile)) {
            if (op(Op.EQUALS,resource,null)) {
                throw new core.ArgumentError(`File expected at "${path}" but does not exist`);
            }
            throw new core.ArgumentError(`File expected at "${path}" but ${resource.runtimeType} found`);
        }
    }
    _checkFolderAtPath(path : string) : void {
        let resource : _MemoryResource = this._pathToResource.get(path);
        if (isNot(resource, _MemoryFolder)) {
            throw new core.ArgumentError(`Folder expected at "${path}" but ${resource.runtimeType} found`);
        }
    }
    _newFile(path : string) : _MemoryFile {
        let folderPath : string = this.pathContext.dirname(path);
        let folder : _MemoryResource = this._pathToResource.get(folderPath);
        if (op(Op.EQUALS,folder,null)) {
            this.newFolder(folderPath);
        }else if (isNot(folder, any)) {
            throw new core.ArgumentError(`Cannot create file (${path}) as child of file`);
        }
        let file : _MemoryFile = new _MemoryFile(this,path);
        this._pathToResource.set(path,file);
        return file;
    }
    _notifyWatchers(path : string,changeType : any) : void {
        this._pathToWatchers.forEach((watcherPath : string,streamControllers : core.DartList<async.DartStreamController<any>>) =>  {
            if (watcherPath == path || this.pathContext.isWithin(watcherPath,path)) {
                for(let streamController of streamControllers) {
                    streamController.add(new bare.createInstance(any,null,changeType,path));
                }
            }
        });
    }
    _setFileContent(file : _MemoryFile,bytes : core.DartList<number>) : void {
        let path : string = file.path;
        this._pathToResource.set(path,file);
        this._pathToBytes.set(path,bytes);
        this._pathToTimestamp.set(path,this.nextStamp++);
        this._notifyWatchers(path,ChangeType.MODIFY);
    }
}

export namespace _MemoryResource {
    export type Constructors = '_MemoryResource';
    export type Interface = Omit<_MemoryResource, Constructors>;
}
@DartClass
@Implements(any)
export class _MemoryResource implements any.Interface {
    _provider : MemoryResourceProvider;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    path : string;

    constructor(_provider : MemoryResourceProvider,path : string) {
    }
    @defaultConstructor
    _MemoryResource(_provider : MemoryResourceProvider,path : string) {
        this._provider = _provider;
        this.path = path;
    }
    get changes() : async.DartStream<any> {
        let streamController : async.DartStreamController<any> = new async.DartStreamController<any>();
        if (!this._provider._pathToWatchers.containsKey(this.path)) {
            this._provider._pathToWatchers.set(this.path,new core.DartList.literal<async.DartStreamController<any>>());
        }
        this._provider._pathToWatchers.get(this.path).add(streamController);
        streamController.done.then((_ : any) =>  {
            this._provider._pathToWatchers.get(this.path).remove(streamController);
            if (this._provider._pathToWatchers.get(this.path).isEmpty) {
                this._provider._pathToWatchers.remove(this.path);
            }
        });
        return streamController.stream;
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
        let parentPath : string = this._provider.pathContext.dirname(this.path);
        if (parentPath == this.path) {
            return null;
        }
        return this._provider.getFolder(parentPath);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get shortName() : string {
        return this._provider.pathContext.basename(this.path);
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
    toString() : string {
        return this.path;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toUri() : lib7.Uri {
        return this._provider.pathContext.toUri(this.path);
    }
}

export namespace _MemoryDummyLink {
    export type Constructors = _MemoryResource.Constructors | '_MemoryDummyLink';
    export type Interface = Omit<_MemoryDummyLink, Constructors>;
}
@DartClass
@Implements(any)
export class _MemoryDummyLink extends _MemoryResource implements any.Interface {
    constructor(provider : MemoryResourceProvider,path : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MemoryDummyLink(provider : MemoryResourceProvider,path : string) {
        super._MemoryResource(provider,path);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get changes() : async.DartStream<any> {
        throw new bare.createInstance(any,null,this.path,"File does not exist");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get exists() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get lengthSync() : number {
        throw new bare.createInstance(any,null,this.path,'File could not be read');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get modificationStamp() : number {
        let stamp : number = this._provider._pathToTimestamp.get(this.path);
        if (stamp == null) {
            throw new bare.createInstance(any,null,this.path,"File does not exist");
        }
        return stamp;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copyTo(parentFolder : any) : any {
        throw new bare.createInstance(any,null,this.path,'File could not be copied');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createSource(uri? : lib7.Uri) : any {
        throw new bare.createInstance(any,null,this.path,'File could not be read');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    delete() : void {
        throw new bare.createInstance(any,null,this.path,'File could not be deleted');
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
        throw new bare.createInstance(any,null,this.path,'File could not be read');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    readAsStringSync() : string {
        throw new bare.createInstance(any,null,this.path,'File could not be read');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    renameSync(newPath : string) : any {
        throw new bare.createInstance(any,null,this.path,'File could not be renamed');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveSymbolicLinksSync() : any {
        return throw new bare.createInstance(any,null,this.path,"File does not exist");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    writeAsBytesSync(bytes : core.DartList<number>) : void {
        throw new bare.createInstance(any,null,this.path,'File could not be written');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    writeAsStringSync(content : string) : void {
        throw new bare.createInstance(any,null,this.path,'File could not be written');
    }
}

export namespace _MemoryFile {
    export type Constructors = _MemoryResource.Constructors | '_MemoryFile';
    export type Interface = Omit<_MemoryFile, Constructors>;
}
@DartClass
@Implements(any)
export class _MemoryFile extends _MemoryResource implements any.Interface {
    constructor(provider : MemoryResourceProvider,path : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MemoryFile(provider : MemoryResourceProvider,path : string) {
        super._MemoryResource(provider,path);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get exists() : boolean {
        return is(this._provider._pathToResource.get(this.path), _MemoryFile);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get lengthSync() : number {
        return this.readAsBytesSync().length;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get modificationStamp() : number {
        let stamp : number = this._provider._pathToTimestamp.get(this.path);
        if (stamp == null) {
            throw new bare.createInstance(any,null,this.path,`File "${this.path}" does not exist.`);
        }
        return stamp;
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
    createSource(uri? : lib7.Uri) : any {
        uri = ( uri ) || ( this._provider.pathContext.toUri(this.path) );
        return new bare.createInstance(any,null,this,uri);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    delete() : void {
        this._provider.deleteFile(this.path);
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
        let content : core.DartList<number> = this._provider._pathToBytes.get(this.path);
        if (content == null) {
            throw new bare.createInstance(any,null,this.path,`File "${this.path}" does not exist.`);
        }
        return content;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    readAsStringSync() : string {
        let content : core.DartList<number> = this._provider._pathToBytes.get(this.path);
        if (content == null) {
            throw new bare.createInstance(any,null,this.path,`File "${this.path}" does not exist.`);
        }
        return convert.properties.UTF8.decode(content);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    renameSync(newPath : string) : any {
        return this._provider.renameFileSync(this,newPath);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveSymbolicLinksSync() : any {
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    writeAsBytesSync(bytes : core.DartList<number>) : void {
        this._provider._setFileContent(this,bytes);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    writeAsStringSync(content : string) : void {
        this._provider._setFileContent(this,convert.properties.UTF8.encode(content));
    }
}

export namespace _MemoryFolder {
    export type Constructors = _MemoryResource.Constructors | '_MemoryFolder';
    export type Interface = Omit<_MemoryFolder, Constructors>;
}
@DartClass
@Implements(any)
export class _MemoryFolder extends _MemoryResource implements any.Interface {
    constructor(provider : MemoryResourceProvider,path : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MemoryFolder(provider : MemoryResourceProvider,path : string) {
        super._MemoryResource(provider,path);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get exists() : boolean {
        return is(this._provider._pathToResource.get(this.path), _MemoryFolder);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    canonicalizePath(relPath : string) : string {
        relPath = this._provider.pathContext.normalize(relPath);
        let childPath : string = this._provider.pathContext.join(this.path,relPath);
        childPath = this._provider.pathContext.normalize(childPath);
        return childPath;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    contains(path : string) : boolean {
        return this._provider.pathContext.isWithin(this.path,path);
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
        this._provider.newFolder(this.path);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    delete() : void {
        this._provider.deleteFolder(this.path);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getChild(relPath : string) : any {
        let childPath : string = this.canonicalizePath(relPath);
        let resource : _MemoryResource = this._provider._pathToResource.get(childPath);
        if (op(Op.EQUALS,resource,null)) {
            resource = new _MemoryFile(this._provider,childPath);
        }
        return resource;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getChildAssumingFile(relPath : string) : _MemoryFile {
        let childPath : string = this.canonicalizePath(relPath);
        let resource : _MemoryResource = this._provider._pathToResource.get(childPath);
        if (is(resource, _MemoryFile)) {
            return resource;
        }
        return new _MemoryFile(this._provider,childPath);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getChildAssumingFolder(relPath : string) : _MemoryFolder {
        let childPath : string = this.canonicalizePath(relPath);
        let resource : _MemoryResource = this._provider._pathToResource.get(childPath);
        if (is(resource, _MemoryFolder)) {
            return resource;
        }
        return new _MemoryFolder(this._provider,childPath);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getChildren() : core.DartList<any> {
        if (!this.exists) {
            throw new bare.createInstance(any,null,this.path,'Folder does not exist.');
        }
        let children : core.DartList<any> = new core.DartList.literal<any>();
        this._provider._pathToResource.forEach((resourcePath : any,resource : any) =>  {
            if (this._provider.pathContext.dirname(resourcePath) == this.path) {
                children.add(resource);
            }
        });
        return children;
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
        return this;
    }
}

export class properties {
}
