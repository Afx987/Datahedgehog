/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/physical_file_system.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./file_system";
import * as lib4 from "@dart2ts/dart/uri";
import * as io from "@dart2ts/dart/io";

export namespace PhysicalFileSystem {
    export type Constructors = '_';
    export type Interface = Omit<PhysicalFileSystem, Constructors>;
}
@DartClass
@Implements(lib3.FileSystem)
export class PhysicalFileSystem implements lib3.FileSystem.Interface {
    private static __$instance : PhysicalFileSystem;
    static get instance() : PhysicalFileSystem { 
        if (this.__$instance===undefined) {
            this.__$instance = new PhysicalFileSystem._();
        }
        return this.__$instance;
    }
    static set instance(__$value : PhysicalFileSystem)  { 
        this.__$instance = __$value;
    }

    @namedConstructor
    _() {
    }
    static _ : new() => PhysicalFileSystem;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    entityForUri(uri : lib4.Uri) : lib3.FileSystemEntity {
        if (uri.scheme != 'file' && uri.scheme != '') {
            throw new core.ArgumentError('File URI expected');
        }
        return new _PhysicalFileSystemEntity(lib4.Uri.base.resolveUri(uri));
    }
}

export namespace _PhysicalFileSystemEntity {
    export type Constructors = '_PhysicalFileSystemEntity';
    export type Interface = Omit<_PhysicalFileSystemEntity, Constructors>;
}
@DartClass
@Implements(lib3.FileSystemEntity)
export class _PhysicalFileSystemEntity implements lib3.FileSystemEntity.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    uri : lib4.Uri;

    constructor(uri : lib4.Uri) {
    }
    @defaultConstructor
    _PhysicalFileSystemEntity(uri : lib4.Uri) {
        this.uri = uri;
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
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        return is(other, _PhysicalFileSystemEntity) && op(Op.EQUALS,other.uri,this.uri);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    exists() : async.Future<boolean> { 
        return new async.Future.fromPromise(( async () =>  {
            if (await io.FileSystemEntity.isFile(this.uri.toFilePath())) {
                return new io.File.fromUri(this.uri).exists();
            }else {
                return new io.Directory.fromUri(this.uri).exists();
            }
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lastModified() : async.Future<core.DartDateTime> { 
        return new async.Future.fromPromise(( async () =>  {
            try {
                return await new io.File.fromUri(this.uri).lastModified();
            } catch (__error__) {

                if (is(__error__,io.FileSystemException)){
                    let exception : io.FileSystemException = __error__;
                    throw this._toFileSystemException(exception);
                }
            }
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    readAsBytes() : async.Future<core.DartList<number>> { 
        return new async.Future.fromPromise(( async () =>  {
            try {
                return await new io.File.fromUri(this.uri).readAsBytes();
            } catch (__error__) {

                if (is(__error__,io.FileSystemException)){
                    let exception : io.FileSystemException = __error__;
                    throw this._toFileSystemException(exception);
                }
            }
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    readAsString() : async.Future<string> { 
        return new async.Future.fromPromise(( async () =>  {
            try {
                return await new io.File.fromUri(this.uri).readAsString();
            } catch (__error__) {

                if (is(__error__,io.FileSystemException)){
                    let exception : io.FileSystemException = __error__;
                    throw this._toFileSystemException(exception);
                }
            }
        } )());
    }

    _toFileSystemException(exception : io.FileSystemException) : lib3.FileSystemException {
        let message : string = exception.message;
        let osMessage : string = ((t)=>(!!t)?t.message:null)(exception.osError);
        if (osMessage != null && new core.DartString(osMessage).isNotEmpty) {
            message = osMessage;
        }
        return new lib3.FileSystemException(this.uri,message);
    }
}

export class properties {
}
