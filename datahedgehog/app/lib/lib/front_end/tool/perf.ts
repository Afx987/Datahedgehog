/** Library asset:datahedgehog_monitor/lib/lib/front_end/tool/perf.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts/dart/uri";
import * as lib5 from "@dart2ts.packages/source_span/lib/src/span";
import * as lib6 from "@dart2ts.packages/path/lib/path";

export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    if (args.length < 2) {
        core.print('usage: perf.dart <bench-id> <entry.dart>');
        io.exit(1);
    }
    let bench = args[0];
    let entryUri = lib4.Uri.base.resolve(args[1]);
    await setup(entryUri);
    let files : core.DartSet<any> = scanReachableFiles(entryUri);
    let handlers = new core.DartMap.literal([
        ['scan',() => new async.Future.fromPromise(( async () : Promise<any> =>  {
            return scanFiles(files);
        })())],
        ['parse',() => new async.Future.fromPromise(( async () : Promise<any> =>  {
            return parseFiles(files);
        })())],
        ['kernel_gen_e2e',() => new async.Future.fromPromise(( async () : Promise<any> =>  {
            await generateKernel(entryUri,{
                useSdkSummary : false});
        })())],
        ['kernel_gen_e2e_sum',() => new async.Future.fromPromise(( async () : Promise<any> =>  {
            await generateKernel(entryUri,{
                useSdkSummary : true,compileSdk : false});
        })())],
        ['unlinked_summarize',() => new async.Future.fromPromise(( async () : Promise<any> =>  {
            return summarize(files);
        })())],
        ['unlinked_summarize_from_sources',() => new async.Future.fromPromise(( async () : Promise<any> =>  {
            return summarize(files);
        })())],
        ['prelinked_summarize',() => new async.Future.fromPromise(( async () : Promise<any> =>  {
            return summarize(files,{
                prelink : true});
        })())],
        ['linked_summarize',() => new async.Future.fromPromise(( async () : Promise<any> =>  {
            return summarize(files,{
                link : true});
        })())]]);
    let handler = handlers.get(bench);
    if (op(Op.EQUALS,handler,null)) {
        core.print(`unsupported bench-id: ${bench}. Please specify one of the following: ` + `${handlers.keys.join(", ")}`);
        io.exit(1);
    }
    let iterations : number = new core.DartString(bench).contains('kernel_gen') ? 2 : 10;
    for(let i : number = 0; i < iterations; i++){
        let totalTimer = ((_) : core.DartStopwatch =>  {
            {
                _.start();
                return _;
            }
        })(new core.DartStopwatch());
        core.print(`== iteration ${i}`);
        await handler();
        totalTimer.stop();
        report('total',totalTimer.elapsedMicroseconds);
    }
})());
export var collectSources : (start : any,files : core.DartSet<any>) => void = (start : any,files : core.DartSet<any>) : void =>  {
    if (!files.add(start)) return;
    let unit = parseDirectives(start);
    for(let directive of unit.directives) {
        if (is(directive, any)) {
            let next = properties.sources.resolveUri(start,directive.uri.stringValue);
            collectSources(next,files);
        }
    }
};
export var generateKernel : (entryUri : lib4.Uri,_namedArguments? : {useSdkSummary? : boolean,compileSdk? : boolean}) => async.Future<any> = (entryUri : lib4.Uri,_namedArguments? : {useSdkSummary? : boolean,compileSdk? : boolean}) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let {useSdkSummary,compileSdk} = Object.assign({
        "useSdkSummary" : false,
        "compileSdk" : true}, _namedArguments );
    scanReachableFiles(entryUri);
    let dartkTimer = ((_) : core.DartStopwatch =>  {
        {
            _.start();
            return _;
        }
    })(new core.DartStopwatch());
    let options = ((_) : any =>  {
        {
            _.strongMode = false;
            _.compileSdk = compileSdk;
            _.packagesFileUri = properties._repoUri.resolve('.packages');
            _.onError = ((e : any) =>  {
                return core.print(`${e.message}`);
            });
            return _;
        }
    })(new bare.createInstance(any,null));
    if (useSdkSummary) {
        options.sdkSummary = properties._sdkUri.resolve('lib/_internal/spec.sum');
    }else {
        options.sdkRoot = properties._sdkUri;
    }
    let program : any = await _kernelForProgramViaDartk(entryUri,options);
    dartkTimer.stop();
    let suffix = useSdkSummary ? '_sum' : '';
    report(`kernel_gen_e2e${suffix}`,dartkTimer.elapsedMicroseconds);
    return program;
})());
export var _kernelForProgramViaDartk : (source : lib4.Uri,options : any) => any = (source : lib4.Uri,options : any) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let loader = await _createLoader(options,{
        entry : source});
    if (options.compileSdk) {
        options.additionalLibraries.forEach(loader.loadLibrary);
    }
    loader.loadProgram(source,{
        compileSdk : options.compileSdk});
    _reportErrors(loader.errors,options.onError);
    return loader.program;
})());
export var _createLoader : (options : any,_namedArguments? : {program? : any,entry? : lib4.Uri}) => async.Future<any> = (options : any,_namedArguments? : {program? : any,entry? : lib4.Uri}) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let {program,entry} = Object.assign({
    }, _namedArguments );
    let kernelOptions = _convertOptions(options);
    let packages = await createPackages(_uriToPath(options.packagesFileUri),{
        discoveryPath : ((t)=>(!!t)?t.path:null)(entry)});
    let loader = new bare.createInstance(any,null,(program || new bare.createInstance(any,null)),kernelOptions,packages);
    let patchPaths = new core.DartMap.literal([
    ]);
    var resolve : (patch : lib4.Uri) => string = (patch : lib4.Uri) : string =>  {
        return _uriToPath(options.sdkRoot.resolveUri(patch));
    };
    options.targetPatches.forEach((uri : any,patches : any) =>  {
        patchPaths.set(`${uri}`,patches.map(resolve).toList());
    });
    let analysisOptions : any = loader.context.analysisOptions;
    analysisOptions.patchPaths = patchPaths;
    return loader;
})());
export var _convertOptions : (options : any) => any = (options : any) : any =>  {
    return new bare.createInstance(any,null,{
        strongMode : options.strongMode,sdk : _uriToPath(options.sdkRoot),sdkSummary : options.compileSdk ? null : _uriToPath(options.sdkSummary),packagePath : _uriToPath(options.packagesFileUri),customUriMappings : options.uriOverride,declaredVariables : options.declaredVariables});
};
export var _uriToPath : (uri : lib4.Uri) => string = (uri : lib4.Uri) : string =>  {
    if (op(Op.EQUALS,uri,null)) return null;
    if (uri.scheme != 'file') {
        throw new core.StateError(`Only file URIs are supported: ${uri}`);
    }
    return uri.toFilePath();
};
export var _reportErrors : (errors : core.DartList<any>,onError : any) => void = (errors : core.DartList<any>,onError : any) : void =>  {
    if (op(Op.EQUALS,onError,null)) return;
    for(let error of errors) {
        onError(new _DartkError(error));
    }
};
export var generateUnlinkedSummaries : (files : core.DartSet<any>) => _UnlinkedSummaries = (files : core.DartSet<any>) : _UnlinkedSummaries =>  {
    let unlinkedSummaries = new _UnlinkedSummaries();
    for(let source of files) {
        op(Op.INDEX_ASSIGN,unlinkedSummaries.summariesByUri,source.uri.toString(),unlinkedSummarize(source));
    }
    return unlinkedSummaries;
};
export var summarize : (files : core.DartSet<any>,_namedArguments? : {prelink? : boolean,link? : boolean}) => void = (files : core.DartSet<any>,_namedArguments? : {prelink? : boolean,link? : boolean}) : void =>  {
    let {prelink,link} = Object.assign({
        "prelink" : false,
        "link" : false}, _namedArguments );
    properties.scanTimer = new core.DartStopwatch();
    properties.parseTimer = new core.DartStopwatch();
    properties.unlinkedSummarizeTimer = new core.DartStopwatch();
    let unlinkedSummaries = generateUnlinkedSummaries(files);
    report('scan',properties.scanTimer.elapsedMicroseconds);
    report('parse',properties.parseTimer.elapsedMicroseconds);
    report('unlinked_summarize',properties.unlinkedSummarizeTimer.elapsedMicroseconds);
    report('unlinked_summarize_from_sources',properties.unlinkedSummarizeTimer.elapsedMicroseconds + properties.parseTimer.elapsedMicroseconds + properties.scanTimer.elapsedMicroseconds);
    if (prelink || link) {
        let prelinkTimer = ((_) : core.DartStopwatch =>  {
            {
                _.start();
                return _;
            }
        })(new core.DartStopwatch());
        let prelinkedLibraries = prelinkSummaries(files,unlinkedSummaries);
        prelinkTimer.stop();
        report('prelinked_summarize',prelinkTimer.elapsedMicroseconds);
        if (link) {
            let linkTimer = ((_) : core.DartStopwatch =>  {
                {
                    _.start();
                    return _;
                }
            })(new core.DartStopwatch());
            var getDependency : (uri : string) => any = (uri : string) : any =>  {
                core.print(`Warning: getDependency called for: ${uri}`);
                return null;
            };
            relink(prelinkedLibraries,getDependency,unlinkedSummaries.getUnit.bind(unlinkedSummaries),true);
            linkTimer.stop();
            report('linked_summarize',linkTimer.elapsedMicroseconds);
        }
    }
};
export var parseDirectives : (source : any) => any = (source : any) : any =>  {
    let token = tokenize(source);
    let parser = new bare.createInstance(any,null,source,AnalysisErrorListener.NULL_LISTENER);
    return parser.parseDirectives(token);
};
export var parseFiles : (files : core.DartSet<any>) => void = (files : core.DartSet<any>) : void =>  {
    properties.scanTimer = new core.DartStopwatch();
    properties.parseTimer = new core.DartStopwatch();
    for(let source of files) {
        parseFull(source);
    }
    report('scan',properties.scanTimer.elapsedMicroseconds);
    report('parse',properties.parseTimer.elapsedMicroseconds);
};
export var parseFull : (source : any) => any = (source : any) : any =>  {
    let token = tokenize(source);
    properties.parseTimer.start();
    let parser = new bare.createInstance(any,null,source,AnalysisErrorListener.NULL_LISTENER);
    let unit = parser.parseCompilationUnit(token);
    properties.parseTimer.stop();
    return unit;
};
export var prelinkSummaries : (files : core.DartSet<any>,unlinkedSummaries : _UnlinkedSummaries) => core.DartMap<string,any> = (files : core.DartSet<any>,unlinkedSummaries : _UnlinkedSummaries) : core.DartMap<string,any> =>  {
    let libraryUris : core.DartSet<string> = files.map((source : any) =>  {
        return `${source.uri}`;
    }).toSet();
    var getDeclaredVariable : (s : string) => string = (s : string) : string =>  {
        return null;
    };
    let prelinkedLibraries = setupForLink(libraryUris,unlinkedSummaries.getUnit.bind(unlinkedSummaries),getDeclaredVariable);
    return prelinkedLibraries;
};
export var report : (name : string,time : number) => void = (name : string,time : number) : void =>  {
    let sb = new core.DartStringBuffer();
    let padding = op(Op.TIMES,' ',(20 - new core.DartString(name).length));
    sb.write(`${name}:${padding} ${time} us, ${op(Op.QUOTIENT,time,1000)} ms`);
    let invSpeed = new core.DartDouble((time * 1000 / properties.inputSize)).toStringAsFixed(2);
    sb.write(`, ${invSpeed} ns/char`);
    core.print(`${sb}`);
};
export var scanFiles : (files : core.DartSet<any>) => void = (files : core.DartSet<any>) : void =>  {
    properties.scanTimer = new core.DartStopwatch();
    for(let source of files) {
        tokenize(source);
    }
    report('scan',properties.scanTimer.elapsedMicroseconds);
};
export var scanReachableFiles : (entryUri : lib4.Uri) => core.DartSet<any> = (entryUri : lib4.Uri) : core.DartSet<any> =>  {
    let files = new core.DartSet<any>();
    let loadTimer = ((_) : core.DartStopwatch =>  {
        {
            _.start();
            return _;
        }
    })(new core.DartStopwatch());
    properties.scanTimer = new core.DartStopwatch();
    collectSources(properties.sources.forUri2(entryUri),files);
    let libs = new core.DartList.literal('dart:async','dart:collection','dart:convert','dart:core','dart:developer','dart:_internal','dart:isolate','dart:math','dart:mirrors','dart:typed_data','dart:io');
    for(let lib of libs) {
        collectSources(properties.sources.forUri(lib),files);
    }
    loadTimer.stop();
    properties.inputSize = 0;
    for(let s of files) properties.inputSize += s.contents.data.length;
    core.print(`input size: ${properties.inputSize} chars`);
    let loadTime = loadTimer.elapsedMicroseconds - properties.scanTimer.elapsedMicroseconds;
    report('load',loadTime);
    report('scan',properties.scanTimer.elapsedMicroseconds);
    return files;
};
export var setup : (entryUri : lib4.Uri) => async.Future<any> = (entryUri : lib4.Uri) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let provider = PhysicalResourceProvider.INSTANCE;
    let packageMap = new bare.createInstance(any,null,provider,null,null).convertPackagesToMap(await findPackages(entryUri));
    properties.sources = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,provider),new bare.createInstance(any,null,provider,packageMap),new bare.createInstance(any,null,new bare.createInstance(any,null,provider,provider.getFolder(properties._sdkPath)))));
})());
export var tokenize : (source : any) => any = (source : any) : any =>  {
    properties.scanTimer.start();
    let scanner = new _Scanner(source.contents.data);
    let token = scanner.tokenize();
    properties.scanTimer.stop();
    return token;
};
export var unlinkedSummarize : (source : any) => any = (source : any) : any =>  {
    let unit = parseFull(source);
    properties.unlinkedSummarizeTimer.start();
    let unlinkedUnit = serializeAstUnlinked(unit);
    properties.unlinkedSummarizeTimer.stop();
    return unlinkedUnit;
};
export var _findSdkPath : () => string = () : string =>  {
    let executable = io.Platform.resolvedExecutable;
    let executableDir = lib6.dirname(executable);
    for(let candidate of new core.DartList.literal(lib6.dirname(executableDir),lib6.join(executableDir,'dart-sdk'))) {
        if (new io.File(lib6.join(candidate,'lib','dart_server.platform')).existsSync()) {
            return candidate;
        }
    }
    return new io.Directory('sdk').absolute.path;
};
export namespace _DartkError {
    export type Constructors = '_DartkError';
    export type Interface = Omit<_DartkError, Constructors>;
}
@DartClass
@Implements(any)
export class _DartkError implements any.Interface {
    get correction() : string {
        return null;
    }
    get span() : lib5.SourceSpan {
        return null;
    }
    message : string;

    constructor(message : string) {
    }
    @defaultConstructor
    _DartkError(message : string) {
        this.message = message;
    }
}

export namespace _UnlinkedSummaries {
    export type Constructors = '_UnlinkedSummaries';
    export type Interface = Omit<_UnlinkedSummaries, Constructors>;
}
@DartClass
export class _UnlinkedSummaries {
    summariesByUri;

    getUnit(uri : string) : any {
        let result = op(Op.INDEX,this.summariesByUri,uri);
        if (op(Op.EQUALS,result,null)) {
            core.print(`Warning: no summary found for: ${uri}`);
        }
        return result;
    }
    constructor() {
    }
    @defaultConstructor
    _UnlinkedSummaries() {
        this.summariesByUri = new core.DartMap.literal([
        ]);
    }
}

export namespace _Scanner {
    export type Constructors = '_Scanner';
    export type Interface = Omit<_Scanner, Constructors>;
}
@DartClass
export class _Scanner extends any {
    constructor(contents : string) {
    }
    @defaultConstructor
    _Scanner(contents : string) {
        super.create(new bare.createInstance(any,null,contents));
        preserveComments = false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    reportError(errorCode : any,offset : number,arguments : core.DartList<core.DartObject>) : void {
    }
}

export class properties {
    private static __$parseTimer : core.DartStopwatch;
    static get parseTimer() : core.DartStopwatch { 
        if (this.__$parseTimer===undefined) {
            this.__$parseTimer = new core.DartStopwatch();
        }
        return this.__$parseTimer;
    }
    static set parseTimer(__$value : core.DartStopwatch)  { 
        this.__$parseTimer = __$value;
    }

    private static __$unlinkedSummarizeTimer : core.DartStopwatch;
    static get unlinkedSummarizeTimer() : core.DartStopwatch { 
        if (this.__$unlinkedSummarizeTimer===undefined) {
            this.__$unlinkedSummarizeTimer = new core.DartStopwatch();
        }
        return this.__$unlinkedSummarizeTimer;
    }
    static set unlinkedSummarizeTimer(__$value : core.DartStopwatch)  { 
        this.__$unlinkedSummarizeTimer = __$value;
    }

    private static __$scanTimer : core.DartStopwatch;
    static get scanTimer() : core.DartStopwatch { 
        if (this.__$scanTimer===undefined) {
            this.__$scanTimer = new core.DartStopwatch();
        }
        return this.__$scanTimer;
    }
    static set scanTimer(__$value : core.DartStopwatch)  { 
        this.__$scanTimer = __$value;
    }

    private static __$inputSize : number;
    static get inputSize() : number { 
        if (this.__$inputSize===undefined) {
            this.__$inputSize = 0;
        }
        return this.__$inputSize;
    }
    static set inputSize(__$value : number)  { 
        this.__$inputSize = __$value;
    }

    private static __$sources : any;
    static get sources() : any { 
        return this.__$sources;
    }
    static set sources(__$value : any)  { 
        this.__$sources = __$value;
    }

    private static __$_repoUri;
    static get _repoUri() { 
        if (this.__$_repoUri===undefined) {
            this.__$_repoUri = io.Platform.script.resolve('../../../');
        }
        return this.__$_repoUri;
    }
    static set _repoUri(__$value : any)  { 
        this.__$_repoUri = __$value;
    }

    private static __$_sdkPath;
    static get _sdkPath() { 
        if (this.__$_sdkPath===undefined) {
            this.__$_sdkPath = _findSdkPath();
        }
        return this.__$_sdkPath;
    }
    static set _sdkPath(__$value : any)  { 
        this.__$_sdkPath = __$value;
    }

    private static __$_sdkUri;
    static get _sdkUri() { 
        if (this.__$_sdkUri===undefined) {
            this.__$_sdkUri = new lib4.Uri.directory(properties._sdkPath);
        }
        return this.__$_sdkUri;
    }
    static set _sdkUri(__$value : any)  { 
        this.__$_sdkUri = __$value;
    }

}
