/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/vm.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as lib4 from "@dart2ts/dart/uri";
import * as io from "@dart2ts/dart/io";
import * as lib6 from "./fasta";

export var parseScript : (script : lib4.Uri,_namedArguments? : {verbose? : boolean,strongMode? : boolean}) => async.Future<CompilationResult> = (script : lib4.Uri,_namedArguments? : {verbose? : boolean,strongMode? : boolean}) => new async.Future.fromPromise(( async () : Promise<CompilationResult> =>  {
    let {verbose,strongMode} = Object.assign({
        "verbose" : false,
        "strongMode" : false}, _namedArguments );
    return parseScriptInFileSystem(script,PhysicalFileSystem.instance,{
        verbose : verbose,strongMode : strongMode});
})());
export var parseScriptInFileSystem : (script : lib4.Uri,fileSystem : any,_namedArguments? : {verbose? : boolean,strongMode? : boolean}) => async.Future<CompilationResult> = (script : lib4.Uri,fileSystem : any,_namedArguments? : {verbose? : boolean,strongMode? : boolean}) => new async.Future.fromPromise(( async () : Promise<CompilationResult> =>  {
    let {verbose,strongMode} = Object.assign({
        "verbose" : false,
        "strongMode" : false}, _namedArguments );
    let packagesUri : lib4.Uri = (io.Platform.packageConfig != null) ? lib4.Uri.parse(io.Platform.packageConfig) : await _findPackagesFile(fileSystem,script);
    if (op(Op.EQUALS,packagesUri,null)) {
        throw "Could not find .packages";
    }
    let patchedSdk : lib4.Uri = lib4.Uri.base.resolveUri(new lib4.Uri.file(io.Platform.resolvedExecutable)).resolveUri(new lib4.Uri.directory("patched_sdk"));
    if (verbose) {
        core.print(`DFE: Requesting compilation {\n  scriptUri: ${script}\n  packagesUri: ${packagesUri}\n  patchedSdk: ${patchedSdk}\n}`);
    }
    try {
        return await lib6.parseScriptInFileSystem(script,fileSystem,packagesUri,patchedSdk,{
            verbose : verbose,strongMode : strongMode});
    } catch (__error__) {

        {
            let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
            let err = __error__;
            return new CompilationResult.crash(err,stack);
        }
    }
})());
export var _findPackagesFile : (fileSystem : any,base : lib4.Uri) => async.Future<lib4.Uri> = (fileSystem : any,base : lib4.Uri) => new async.Future.fromPromise(( async () : Promise<lib4.Uri> =>  {
    let dir = new io.File.fromUri(base).parent;
    while (true){
        let packagesFile = dir.uri.resolve(".packages");
        if (await fileSystem.entityForUri(packagesFile).exists()) {
            return packagesFile;
        }
        if (dir.parent.path == dir.path) {
            break;
        }
        dir = dir.parent;
    }
    return null;
})());
export enum Status {
    ok,
    error,
    crash
}

export namespace CompilationResult {
    export type Constructors = '_';
    export type Interface = Omit<CompilationResult, Constructors>;
}
@DartClass
export class CompilationResult {
    @namedConstructor
    _() {
    }
    static _ : new() => CompilationResult;

    @namedFactory
    static $ok(bytes : typed_data.Uint8List) : CompilationResult {
        return new _CompilationOk(bytes);
    }
    static ok : new(bytes : typed_data.Uint8List) => CompilationResult;

    @namedFactory
    static $errors(errors : core.DartList<string>) : CompilationResult {
        return new _CompilationError(errors);
    }
    static errors : new(errors : core.DartList<string>) => CompilationResult;

    @namedFactory
    static $error(error : string) : CompilationResult {
        return new _CompilationError(new core.DartList.literal<string>(error));
    }
    static error : new(error : string) => CompilationResult;

    @namedFactory
    static $crash(exception : core.DartObject,stack : core.DartStackTrace) : CompilationResult {
        return new _CompilationCrash(exception,stack);
    }
    static crash : new(exception : core.DartObject,stack : core.DartStackTrace) => CompilationResult;

    @AbstractProperty
    get status() : Status{ throw 'abstract'}
    @AbstractProperty
    get payload(){ throw 'abstract'}
    toResponse() : core.DartList<any> {
        return new core.DartList.literal(this.status.index,this.payload);
    }
}

export namespace _CompilationOk {
    export type Constructors = CompilationResult.Constructors | '_CompilationOk';
    export type Interface = Omit<_CompilationOk, Constructors>;
}
@DartClass
export class _CompilationOk extends CompilationResult {
    bytes : typed_data.Uint8List;

    constructor(bytes : typed_data.Uint8List) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CompilationOk(bytes : typed_data.Uint8List) {
        super._();
        this.bytes = bytes;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get status() : Status {
        return Status.ok;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get payload() {
        return this.bytes;
    }
    toString() : string {
        return `_CompilationOk(${this.bytes.length} bytes)`;
    }
}

export namespace _CompilationFail {
    export type Constructors = CompilationResult.Constructors | '_CompilationFail';
    export type Interface = Omit<_CompilationFail, Constructors>;
}
@DartClass
export class _CompilationFail extends CompilationResult {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CompilationFail() {
        super._();
    }
    @AbstractProperty
    get errorString() : string{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get payload() {
        return this.errorString;
    }
}

export namespace _CompilationError {
    export type Constructors = _CompilationFail.Constructors | '_CompilationError';
    export type Interface = Omit<_CompilationError, Constructors>;
}
@DartClass
export class _CompilationError extends _CompilationFail {
    errors : core.DartList<string>;

    constructor(errors : core.DartList<string>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CompilationError(errors : core.DartList<string>) {
        this.errors = errors;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get status() : Status {
        return Status.error;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get errorString() : string {
        return this.errors.take(10).join('\n');
    }
    toString() : string {
        return `_CompilationError(${this.errorString})`;
    }
}

export namespace _CompilationCrash {
    export type Constructors = _CompilationFail.Constructors | '_CompilationCrash';
    export type Interface = Omit<_CompilationCrash, Constructors>;
}
@DartClass
export class _CompilationCrash extends _CompilationFail {
    exception : core.DartObject;

    stack : core.DartStackTrace;

    constructor(exception : core.DartObject,stack : core.DartStackTrace) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CompilationCrash(exception : core.DartObject,stack : core.DartStackTrace) {
        this.exception = exception;
        this.stack = stack;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get status() : Status {
        return Status.crash;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get errorString() : string {
        return `${this.exception}\n${this.stack}`;
    }
    toString() : string {
        return `_CompilationCrash(${this.errorString})`;
    }
}

export class properties {
}
