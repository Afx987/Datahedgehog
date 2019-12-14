/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/memory_file_system.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./file_system";
import * as lib4 from "@dart2ts/dart/uri";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as convert from "@dart2ts/dart/convert";

export namespace MemoryFileSystem {
    export type Constructors = 'MemoryFileSystem';
    export type Interface = Omit<MemoryFileSystem, Constructors>;
}
@DartClass
@Implements(lib3.FileSystem)
export class MemoryFileSystem implements lib3.FileSystem.Interface {
    _files : core.DartMap<lib4.Uri,typed_data.Uint8List>;

    _lastModified : core.DartMap<lib4.Uri,core.DartDateTime>;

    _lastUpdate : number;

    currentDirectory : lib4.Uri;

    constructor(currentDirectory : lib4.Uri) {
    }
    @defaultConstructor
    MemoryFileSystem(currentDirectory : lib4.Uri) {
        this._files = new core.DartMap.literal([
        ]);
        this._lastModified = new core.DartMap.literal([
        ]);
        this._lastUpdate = 0;
        this.currentDirectory = MemoryFileSystem._addTrailingSlash(currentDirectory);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    entityForUri(uri : lib4.Uri) : MemoryFileSystemEntity {
        return new MemoryFileSystemEntity._(this,this.currentDirectory.resolveUri(uri).normalizePath());
    }
    static _addTrailingSlash(uri : lib4.Uri) : lib4.Uri {
        if (!new core.DartString(uri.path).endsWith('/')) {
            uri = uri.replace({
                path : uri.path + '/'});
        }
        return uri;
    }
}

export namespace MemoryFileSystemEntity {
    export type Constructors = '_';
    export type Interface = Omit<MemoryFileSystemEntity, Constructors>;
}
@DartClass
@Implements(lib3.FileSystemEntity)
export class MemoryFileSystemEntity implements lib3.FileSystemEntity.Interface {
    _fileSystem : MemoryFileSystem;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    uri : lib4.Uri;

    @namedConstructor
    _(_fileSystem : MemoryFileSystem,uri : lib4.Uri) {
        this._fileSystem = _fileSystem;
        this.uri = uri;
    }
    static _ : new(_fileSystem : MemoryFileSystem,uri : lib4.Uri) => MemoryFileSystemEntity;

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
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        return is(other, MemoryFileSystemEntity) && op(Op.EQUALS,other.uri,this.uri) && core.identical(other._fileSystem,this._fileSystem);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    exists() : async.Future<boolean> { 
        return new async.Future.fromPromise(( async () =>  {
            return this._fileSystem._files.get(this.uri) != null;
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lastModified() : async.Future<core.DartDateTime> { 
        return new async.Future.fromPromise(( async () =>  {
            let lastModified = this._fileSystem._lastModified.get(this.uri);
            if (op(Op.EQUALS,lastModified,null)) {
                throw new lib3.FileSystemException(this.uri,`File ${this.uri} does not exist.`);
            }
            return lastModified;
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    readAsBytes() : async.Future<core.DartList<number>> { 
        return new async.Future.fromPromise(( async () =>  {
            let contents : core.DartList<number> = this._fileSystem._files.get(this.uri);
            if (op(Op.EQUALS,contents,null)) {
                throw new lib3.FileSystemException(this.uri,`File ${this.uri} does not exist.`);
            }
            return contents.toList();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    readAsString() : async.Future<string> { 
        return new async.Future.fromPromise(( async () =>  {
            let bytes : core.DartList<number> = await this.readAsBytes();
            try {
                return convert.properties.UTF8.decode(bytes);
            } catch (__error__) {

                if (is(__error__,core.FormatException)){
                    let e : core.FormatException = __error__;
                    throw new lib3.FileSystemException(this.uri,e.message);
                }
            }
        } )());
    }

    writeAsBytesSync(bytes : core.DartList<number>) : void {
        this._update(this.uri,new typed_data.Uint8List.fromList(bytes));
    }
    writeAsStringSync(s : string) : void {
        this._update(this.uri,convert.properties.UTF8.encode(s) as typed_data.Uint8List);
    }
    _update(uri : lib4.Uri,data : typed_data.Uint8List) : void {
        this._fileSystem._files.set(uri,data);
        this._fileSystem._lastModified.set(uri,new core.DartDateTime.fromMicrosecondsSinceEpoch(++this._fileSystem._lastUpdate));
    }
}

export class properties {
}
