/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/incremental_kernel_generator_impl.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts/dart/uri";

export var unimplemented : () => any = () : any =>  {
    throw new core.UnimplementedError();
};
export namespace ByteSink {
    export type Constructors = 'ByteSink';
    export type Interface = Omit<ByteSink, Constructors>;
}
@DartClass
@Implements(core.DartSink)
export class ByteSink implements core.DartSink.Interface<core.DartList<number>> {
    builder : io.BytesBuilder;

    add(data : core.DartList<number>) : void {
        this.builder.add(data);
    }
    close() : void {
    }
    constructor() {
    }
    @defaultConstructor
    ByteSink() {
        this.builder = new io.BytesBuilder();
    }
}

export namespace IncrementalKernelGeneratorImpl {
    export type Constructors = 'IncrementalKernelGeneratorImpl';
    export type Interface = Omit<IncrementalKernelGeneratorImpl, Constructors>;
}
@DartClass
@Implements(any)
export class IncrementalKernelGeneratorImpl implements any.Interface {
    private static __$DATA_VERSION : number;
    static get DATA_VERSION() : number { 
        if (this.__$DATA_VERSION===undefined) {
            this.__$DATA_VERSION = 1;
        }
        return this.__$DATA_VERSION;
    }

    _options : any;

    _uriTranslator : any;

    _logger : any;

    _fsState : any;

    _byteStore : any;

    _entryPoint : lib4.Uri;

    _salt : core.DartList<number>;

    _latestSignature : core.DartMap<lib4.Uri,string>;

    _invalidatedFiles : core.DartSet<lib4.Uri>;

    constructor(_options : any,_uriTranslator : any,_entryPoint : lib4.Uri) {
    }
    @defaultConstructor
    IncrementalKernelGeneratorImpl(_options : any,_uriTranslator : any,_entryPoint : lib4.Uri) {
        this._latestSignature = new core.DartMap.literal([
        ]);
        this._invalidatedFiles = new core.DartSet<lib4.Uri>();
        this._logger = _options.logger;
        this._fsState = new bare.createInstance(any,null,_options.fileSystem,_uriTranslator);
        this._byteStore = _options.byteStore;
        this._options = _options;
        this._uriTranslator = _uriTranslator;
        this._entryPoint = _entryPoint;
        this._computeSalt();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeDelta(_namedArguments? : {watch? : (uri : lib4.Uri,used : boolean) => async.Future<core.Null>}) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let {watch} = Object.assign({
            }, _namedArguments );
            return await this._logger.runAsync('Compute delta',() => new async.Future.fromPromise(( async () : Promise<any> =>  {
                await this._refreshInvalidatedFiles();
                let entryLibrary : any = await this._fsState.getFile(this._entryPoint);
                let cycles : core.DartList<any> = this._logger.run('Compute library cycles',() =>  {
                    let cycles : core.DartList<any> = entryLibrary.topologicalOrder;
                    this._logger.writeln(`Computed ${cycles.length} cycles.`);
                    return cycles;
                });
                let nameRoot : any = new bare.createInstance(any,null);
                let dillTarget : any = new bare.createInstance(any,null,new bare.createInstance(any,null,{
                    isVerbose : false}),this._uriTranslator,"vm");
                let results : core.DartList<_LibraryCycleResult> = new core.DartList.literal();
                await this._logger.runAsync('Compute results for cycles',() => new async.Future.fromPromise(( async () : Promise<any> =>  {
                    for(let cycle of cycles) {
                        let result : _LibraryCycleResult = await this._compileCycle(nameRoot,dillTarget,cycle);
                        results.add(result);
                    }
                })()));
                let program : any = new bare.createInstance(any,null,{
                    nameRoot : nameRoot});
                for(let result of results) {
                    for(let library of result.kernelLibraries) {
                        let uri : lib4.Uri = library.importUri;
                        if (this._latestSignature.get(uri) != result.signature) {
                            this._latestSignature.set(uri,result.signature);
                            program.libraries.add(library);
                        }
                    }
                }
                return new bare.createInstance(any,null,program);
            })()));
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    invalidate(uri : lib4.Uri) : void {
        this._invalidatedFiles.add(uri);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    invalidateAll() : void {
        return unimplemented();
    }
    _compileCycle(nameRoot : any,dillTarget : any,cycle : any) : async.Future<_LibraryCycleResult> { 
        return new async.Future.fromPromise(( async () =>  {
            return this._logger.runAsync(`Compile cycle ${cycle}`,() => new async.Future.fromPromise(( async () : Promise<any> =>  {
                let signature : string;
                {
                    let signatureBuilder = new bare.createInstance(any,null);
                    signatureBuilder.addBytes(this._salt);
                    let transitiveFiles : core.DartSet<any> = cycle.libraries.map((library : any) =>  {
                        return library.transitiveFiles;
                    }).expand((files : any) =>  {
                        return files;
                    }).toSet();
                    signatureBuilder.addInt(transitiveFiles.length);
                    for(let file of transitiveFiles) {
                        signatureBuilder.addString(file.uri.toString());
                        signatureBuilder.addBytes(file.contentHash);
                    }
                    signature = signatureBuilder.toHex();
                }
                this._logger.writeln(`Signature: ${signature}.`);
                let kernelKey = `${signature}.kernel`;
                let libraryUris = new core.DartSet<lib4.Uri>();
                let libraryUriToFile = new core.DartMap.literal([
                ]);
                for(let library of cycle.libraries) {
                    let uri : lib4.Uri = library.uri;
                    libraryUris.add(uri);
                    libraryUriToFile.set(uri,library);
                }
                var appendNewDillLibraries : (program : any) => async.Future<core.Null> = (program : any) => new async.Future.fromPromise(( async () : Promise<core.Null> =>  {
                    let libraryBuilders : core.DartList<any> = dillTarget.loader.appendLibraries(program,(uri : any) =>  {
                        return libraryUris.contains(uri);
                    });
                    await dillTarget.buildOutlines();
                    this._computeExportScopes(dillTarget,libraryUriToFile,libraryBuilders);
                })());
                let bytes : core.DartList<number> = this._byteStore.get(kernelKey);
                if (bytes != null) {
                    return this._logger.runAsync('Read serialized libraries',() => new async.Future.fromPromise(( async () : Promise<any> =>  {
                        let program = new bare.createInstance(any,null,{
                            nameRoot : nameRoot});
                        let reader = new bare.createInstance(any,null,bytes);
                        reader.readProgram(program);
                        await appendNewDillLibraries(program);
                        return new _LibraryCycleResult(cycle,signature,program.libraries);
                    })()));
                }
                let kernelTarget : any = new bare.createInstance(any,null,this._fsState.fileSystemView,dillTarget,this._uriTranslator,this._options.strongMode);
                for(let library of cycle.libraries) {
                    kernelTarget.read(library.uri);
                }
                let program : any = await this._logger.runAsync(`Compile ${cycle.libraries.length} libraries`,() => new async.Future.fromPromise(( async () : Promise<any> =>  {
                    await kernelTarget.buildOutlines({
                        nameRoot : nameRoot});
                    return await kernelTarget.buildProgram();
                })()));
                await appendNewDillLibraries(program);
                let kernelLibraries : core.DartList<any> = program.libraries.where((library : any) =>  {
                    return libraryUris.contains(library.importUri);
                }).toList();
                this._logger.run(`Serialize ${kernelLibraries.length} libraries`,() =>  {
                    program.unbindCanonicalNames();
                    let bytes : core.DartList<number> = this._writeProgramBytes(program,kernelLibraries.contains.bind(kernelLibraries));
                    this._byteStore.put(kernelKey,bytes);
                    this._logger.writeln(`Stored ${bytes.length} bytes.`);
                });
                return new _LibraryCycleResult(cycle,signature,kernelLibraries);
            })()));
        } )());
    }

    _computeExportScopes(dillTarget : any,uriToFile : core.DartMap<lib4.Uri,any>,libraries : core.DartList<any>) : void {
        let wasChanged : boolean = false;
        do{
            wasChanged = false;
            for(let library of libraries) {
                let file : any = uriToFile.get(library.uri);
                for(let export of file.exports) {
                    let exportedLibrary : any = dillTarget.loader.read(export.library.uri);
                    if (exportedLibrary != null) {
                        exportedLibrary.exports.forEach((name : any,member : any) =>  {
                            if (export.isExposed(name) && library.addToExportScope(name,member)) {
                                wasChanged = true;
                            }
                        });
                    }else {
                    }
                }
            }
        } while (wasChanged);
    }
    _computeSalt() : void {
        let saltBuilder = new bare.createInstance(any,null);
        saltBuilder.addInt(IncrementalKernelGeneratorImpl.DATA_VERSION);
        saltBuilder.addBool(this._options.strongMode);
        saltBuilder.addString(this._entryPoint.toString());
        this._salt = saltBuilder.toByteList();
    }
    _refreshInvalidatedFiles() : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._logger.runAsync('Refresh invalidated files',() => new async.Future.fromPromise(( async () : Promise<any> =>  {
                for(let fileUri of this._invalidatedFiles) {
                    let file = await this._fsState.getFile(fileUri);
                    await file.refresh();
                }
                this._invalidatedFiles.clear();
            })()));
        } )());
    }

    _writeProgramBytes(program : any,filter : (library : any) => boolean) : core.DartList<number> {
        let byteSink : ByteSink = new ByteSink();
        new bare.createInstance(any,null,byteSink,filter).writeProgramFile(program);
        return byteSink.builder.takeBytes();
    }
}

export namespace _LibraryCycleResult {
    export type Constructors = '_LibraryCycleResult';
    export type Interface = Omit<_LibraryCycleResult, Constructors>;
}
@DartClass
export class _LibraryCycleResult {
    cycle : any;

    signature : string;

    kernelLibraries : core.DartList<any>;

    constructor(cycle : any,signature : string,kernelLibraries : core.DartList<any>) {
    }
    @defaultConstructor
    _LibraryCycleResult(cycle : any,signature : string,kernelLibraries : core.DartList<any>) {
        this.cycle = cycle;
        this.signature = signature;
        this.kernelLibraries = kernelLibraries;
    }
}

export class properties {
}
