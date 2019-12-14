/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/file_system/file_system.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "@dart2ts.packages/path/lib/src/context";

export namespace File {
    export type Constructors = 'File';
    export type Interface = Omit<File, Constructors>;
}
@DartClass
@Implements(Resource)
export class File implements Resource.Interface {
    @AbstractProperty
    get changes() : async.DartStream<any>{ throw 'abstract'}
    @AbstractProperty
    get lengthSync() : number{ throw 'abstract'}
    @AbstractProperty
    get modificationStamp() : number{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    copyTo(parentFolder : Folder) : File{ throw 'abstract'}
    @Abstract
    createSource(uri? : lib3.Uri) : any{ throw 'abstract'}
    @Abstract
    readAsBytesSync() : core.DartList<number>{ throw 'abstract'}
    @Abstract
    readAsStringSync() : string{ throw 'abstract'}
    @Abstract
    renameSync(newPath : string) : File{ throw 'abstract'}
    @Abstract
    writeAsBytesSync(bytes : core.DartList<number>) : void{ throw 'abstract'}
    @Abstract
    writeAsStringSync(content : string) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    File() {
    }
}

export namespace FileSystemException {
    export type Constructors = 'FileSystemException';
    export type Interface = Omit<FileSystemException, Constructors>;
}
@DartClass
@Implements(core.Exception)
export class FileSystemException implements core.Exception.Interface {
    path : string;

    message : string;

    constructor(path : string,message : string) {
    }
    @defaultConstructor
    FileSystemException(path : string,message : string) {
        this.path = path;
        this.message = message;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `FileSystemException(path=${this.path}; message=${this.message})`;
    }
}

export namespace Folder {
    export type Constructors = 'Folder';
    export type Interface = Omit<Folder, Constructors>;
}
@DartClass
@Implements(Resource)
export class Folder implements Resource.Interface {
    @AbstractProperty
    get changes() : async.DartStream<any>{ throw 'abstract'}
    @Abstract
    canonicalizePath(path : string) : string{ throw 'abstract'}
    @Abstract
    contains(path : string) : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    copyTo(parentFolder : Folder) : Folder{ throw 'abstract'}
    @Abstract
    create() : void{ throw 'abstract'}
    @Abstract
    getChild(relPath : string) : Resource{ throw 'abstract'}
    @Abstract
    getChildAssumingFile(relPath : string) : File{ throw 'abstract'}
    @Abstract
    getChildAssumingFolder(relPath : string) : Folder{ throw 'abstract'}
    @Abstract
    getChildren() : core.DartList<Resource>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Folder() {
    }
}

export namespace Resource {
    export type Constructors = 'Resource';
    export type Interface = Omit<Resource, Constructors>;
}
@DartClass
export class Resource {
    @AbstractProperty
    get exists() : boolean{ throw 'abstract'}
    @AbstractProperty
    get parent() : Folder{ throw 'abstract'}
    @AbstractProperty
    get path() : string{ throw 'abstract'}
    @AbstractProperty
    get shortName() : string{ throw 'abstract'}
    @Abstract
    copyTo(parentFolder : Folder) : Resource{ throw 'abstract'}
    @Abstract
    delete() : void{ throw 'abstract'}
    @Abstract
    isOrContains(path : string) : boolean{ throw 'abstract'}
    @Abstract
    resolveSymbolicLinksSync() : Resource{ throw 'abstract'}
    @Abstract
    toUri() : lib3.Uri{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Resource() {
    }
}

export namespace ResourceProvider {
    export type Constructors = 'ResourceProvider';
    export type Interface = Omit<ResourceProvider, Constructors>;
}
@DartClass
export class ResourceProvider {
    @AbstractProperty
    get absolutePathContext() : any{ throw 'abstract'}
    @AbstractProperty
    get pathContext() : lib4.Context{ throw 'abstract'}
    @Abstract
    getFile(path : string) : File{ throw 'abstract'}
    @Abstract
    getFolder(path : string) : Folder{ throw 'abstract'}
    @Abstract
    getModificationTimes(sources : core.DartList<any>) : async.Future<core.DartList<number>>{ throw 'abstract'}
    @Abstract
    getResource(path : string) : Resource{ throw 'abstract'}
    @Abstract
    getStateLocation(pluginId : string) : Folder{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ResourceProvider() {
    }
}

export namespace ResourceUriResolver {
    export type Constructors = 'ResourceUriResolver';
    export type Interface = Omit<ResourceUriResolver, Constructors>;
}
@DartClass
export class ResourceUriResolver extends any {
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

    _provider : ResourceProvider;

    constructor(_provider : ResourceProvider) {
    }
    @defaultConstructor
    ResourceUriResolver(_provider : ResourceProvider) {
        this._provider = _provider;
    }
    get provider() : ResourceProvider {
        return this._provider;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveAbsolute(uri : lib3.Uri,actualUri? : lib3.Uri) : any {
        if (!ResourceUriResolver.isFileUri(uri)) {
            return null;
        }
        let path : string = this._provider.pathContext.fromUri(uri);
        let resource : Resource = this._provider.getResource(path);
        if (is(resource, File)) {
            return resource.createSource((actualUri || uri));
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    restoreAbsolute(source : any) : lib3.Uri {
        return this._provider.pathContext.toUri(source.fullName);
    }
    static isFileUri(uri : lib3.Uri) : boolean {
        return uri.scheme == ResourceUriResolver.FILE_SCHEME;
    }
}

export class properties {
}
