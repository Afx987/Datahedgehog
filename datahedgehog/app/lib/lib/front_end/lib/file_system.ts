/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/file_system.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export namespace FileSystem {
    export type Constructors = 'FileSystem';
    export type Interface = Omit<FileSystem, Constructors>;
}
@DartClass
export class FileSystem {
    @Abstract
    entityForUri(uri : lib3.Uri) : FileSystemEntity{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    FileSystem() {
    }
}

export namespace FileSystemEntity {
    export type Constructors = 'FileSystemEntity';
    export type Interface = Omit<FileSystemEntity, Constructors>;
}
@DartClass
export class FileSystemEntity {
    @AbstractProperty
    get uri() : lib3.Uri{ throw 'abstract'}
    @Abstract
    exists() : async.Future<boolean>{ throw 'abstract'}
    @Abstract
    lastModified() : async.Future<core.DartDateTime>{ throw 'abstract'}
    @Abstract
    readAsBytes() : async.Future<core.DartList<number>>{ throw 'abstract'}
    @Abstract
    readAsString() : async.Future<string>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    FileSystemEntity() {
    }
}

export namespace FileSystemException {
    export type Constructors = 'FileSystemException';
    export type Interface = Omit<FileSystemException, Constructors>;
}
@DartClass
@Implements(core.Exception)
export class FileSystemException implements core.Exception.Interface {
    uri : lib3.Uri;

    message : string;

    constructor(uri : lib3.Uri,message : string) {
    }
    @defaultConstructor
    FileSystemException(uri : lib3.Uri,message : string) {
        this.uri = uri;
        this.message = message;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `FileSystemException(uri=${this.uri}; message=${this.message})`;
    }
}

export class properties {
}
