/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/fasta.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as convert from "@dart2ts/dart/convert";
import * as lib4 from "./compiler_context";
import * as lib5 from "./ticker";
import * as lib6 from "./compiler_command_line";
import * as lib7 from "./errors";
import * as io from "@dart2ts/dart/io";
import * as lib9 from "./kernel/kernel_target";
import * as lib10 from "@dart2ts/dart/uri";
import * as lib11 from "./translate_uri";
import * as lib12 from "./dill/dill_target";
import * as lib13 from "./vm";
import * as lib14 from "./compile_platform";

export var compileEntryPoint : (arguments : core.DartList<string>) => any = (arguments : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let elapsedTimes : core.DartList<double> = new core.DartList.literal<double>();
    for(let i : number = 0; i < properties.iterations; i++){
        if (i > 0) {
            core.print(`\n\n=== Iteration ${i + 1} of ${properties.iterations}`);
        }
        let stopwatch = ((_) : core.DartStopwatch =>  {
            {
                _.start();
                return _;
            }
        })(new core.DartStopwatch());
        await compile(arguments);
        stopwatch.stop();
        elapsedTimes.add(new core.DartInt(stopwatch.elapsedMilliseconds).toDouble());
    }
    if (properties.summary) {
        let json = convert.properties.JSON.encode(new core.DartMap.literal([
            ['elapsedTimes',elapsedTimes]]));
        core.print(`\nSummary: ${json}`);
    }
})());
export var outlineEntryPoint : (arguments : core.DartList<string>) => any = (arguments : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    for(let i : number = 0; i < properties.iterations; i++){
        if (i > 0) {
            core.print("\n");
        }
        await outline(arguments);
    }
})());
export var outline : (arguments : core.DartList<string>) => async.Future<lib9.KernelTarget> = (arguments : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<lib9.KernelTarget> =>  {
    try {
        return await lib6.CompilerCommandLine.withGlobalOptions("outline",arguments,(c : lib4.CompilerContext) => new async.Future.fromPromise(( async () : Promise<any> =>  {
            if (c.options.verbose) {
                core.print(`Building outlines for ${arguments.join(' ')}`);
            }
            let task : CompileTask = new CompileTask(c,new lib5.Ticker({
                isVerbose : c.options.verbose}));
            return await task.buildOutline(c.options.output);
        })()));
    } catch (__error__) {

        if (is(__error__,lib7.InputError)){
            let e : lib7.InputError = __error__;
            io.properties.exitCode = 1;
            core.print(e.format());
            return null;
        }
    }
})());
export var compile : (arguments : core.DartList<string>) => async.Future<lib10.Uri> = (arguments : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<lib10.Uri> =>  {
    try {
        return await lib6.CompilerCommandLine.withGlobalOptions("compile",arguments,(c : lib4.CompilerContext) => new async.Future.fromPromise(( async () : Promise<any> =>  {
            if (c.options.verbose) {
                core.print(`Compiling directly to Kernel: ${arguments.join(' ')}`);
            }
            let task : CompileTask = new CompileTask(c,new lib5.Ticker({
                isVerbose : c.options.verbose}));
            return await task.compile();
        })()));
    } catch (__error__) {

        if (is(__error__,lib7.InputError)){
            let e : lib7.InputError = __error__;
            io.properties.exitCode = 1;
            core.print(e.format());
            return null;
        }
    }
})());
export var parseScript : (fileName : lib10.Uri,packages : lib10.Uri,patchedSdk : lib10.Uri,_namedArguments? : {verbose? : boolean,strongMode? : boolean}) => async.Future<lib13.CompilationResult> = (fileName : lib10.Uri,packages : lib10.Uri,patchedSdk : lib10.Uri,_namedArguments? : {verbose? : boolean,strongMode? : boolean}) => new async.Future.fromPromise(( async () : Promise<lib13.CompilationResult> =>  {
    let {verbose,strongMode} = Object.assign({
        "verbose" : false,
        "strongMode" : false}, _namedArguments );
    return parseScriptInFileSystem(fileName,PhysicalFileSystem.instance,packages,patchedSdk,{
        verbose : verbose,strongMode : strongMode});
})());
export var parseScriptInFileSystem : (fileName : lib10.Uri,fileSystem : any,packages : lib10.Uri,patchedSdk : lib10.Uri,_namedArguments? : {verbose? : boolean,strongMode? : boolean,backendTarget? : string}) => async.Future<lib13.CompilationResult> = (fileName : lib10.Uri,fileSystem : any,packages : lib10.Uri,patchedSdk : lib10.Uri,_namedArguments? : {verbose? : boolean,strongMode? : boolean,backendTarget? : string}) => new async.Future.fromPromise(( async () : Promise<lib13.CompilationResult> =>  {
    let {verbose,strongMode,backendTarget} = Object.assign({
        "verbose" : false,
        "strongMode" : false}, _namedArguments );
    backendTarget = ( backendTarget ) || ( "vm" );
    try {
        if (!await fileSystem.entityForUri(fileName).exists()) {
            return new lib13.CompilationResult.error(lib7.formatUnexpected(fileName,-1,"No such file."));
        }
        if (!await new io.Directory.fromUri(patchedSdk).exists()) {
            return new lib13.CompilationResult.error(lib7.formatUnexpected(patchedSdk,-1,"Patched sdk directory not found."));
        }
        let program : any;
        try {
            let uriTranslator : lib11.TranslateUri = await lib11.TranslateUri.parse(fileSystem,null,packages);
            let ticker : lib5.Ticker = new lib5.Ticker({
                isVerbose : verbose});
            let dillTarget : lib12.DillTarget = new lib12.DillTarget(ticker,uriTranslator,backendTarget);
            _appendDillForUri(dillTarget,patchedSdk.resolve('platform.dill'));
            let kernelTarget : lib9.KernelTarget = new lib9.KernelTarget(fileSystem,dillTarget,uriTranslator,strongMode);
            kernelTarget.read(fileName);
            await dillTarget.buildOutlines();
            await kernelTarget.buildOutlines();
            program = await kernelTarget.buildProgram();
            if (kernelTarget.errors.isNotEmpty) {
                return new lib13.CompilationResult.errors(kernelTarget.errors);
            }
        } catch (__error__) {

            if (is(__error__,lib7.InputError)){
                let e : lib7.InputError = __error__;
                return new lib13.CompilationResult.error(e.format());
            }
        }
        if (op(Op.EQUALS,program.mainMethod,null)) {
            return new lib13.CompilationResult.error("No 'main' method found.");
        }
        let target : any = getTarget("vm",new bare.createInstance(any,null,{
            strongMode : false}));
        target.performModularTransformations(program);
        target.performGlobalTransformations(program);
        let sink = new ByteSink();
        var predicate : (library : any) => boolean = (library : any) : boolean =>  {
            return !library.importUri.isScheme('dart');
        };
        new bare.createInstance(any,null,sink,predicate).writeProgramFile(program);
        return new lib13.CompilationResult.ok(sink.builder.takeBytes());
    } catch (__error__) {

        {
            let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
            let e = __error__;
            return lib7.reportCrash(e,s,fileName);
        }
    }
})());
export var compilePlatform : (patchedSdk : lib10.Uri,fullOutput : lib10.Uri,_namedArguments? : {outlineOutput? : lib10.Uri,packages? : lib10.Uri,verbose? : boolean}) => async.Future<any> = (patchedSdk : lib10.Uri,fullOutput : lib10.Uri,_namedArguments? : {outlineOutput? : lib10.Uri,packages? : lib10.Uri,verbose? : boolean}) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let {outlineOutput,packages,verbose} = Object.assign({
        "verbose" : false}, _namedArguments );
    let ticker : lib5.Ticker = new lib5.Ticker({
        isVerbose : verbose});
    await lib6.CompilerCommandLine.withGlobalOptions("",new core.DartList.literal(""),(c : lib4.CompilerContext) =>  {
        c.options.options.set("--packages",packages);
        if (verbose) {
            c.options.options.set("--verbose",true);
        }
        return lib14.compilePlatformInternal(c,ticker,patchedSdk,fullOutput,outlineOutput);
    });
})());
export var writeDepsFile : (script : lib10.Uri,depsFile : lib10.Uri,output : lib10.Uri,_namedArguments? : {packages? : lib10.Uri,platform? : lib10.Uri,extraDependencies? : core.DartIterable<lib10.Uri>,verbose? : boolean,backendTarget? : string}) => async.Future<any> = (script : lib10.Uri,depsFile : lib10.Uri,output : lib10.Uri,_namedArguments? : {packages? : lib10.Uri,platform? : lib10.Uri,extraDependencies? : core.DartIterable<lib10.Uri>,verbose? : boolean,backendTarget? : string}) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let {packages,platform,extraDependencies,verbose,backendTarget} = Object.assign({
        "verbose" : false}, _namedArguments );
    backendTarget = ( backendTarget ) || ( "vm" );
    let ticker : lib5.Ticker = new lib5.Ticker({
        isVerbose : verbose});
    await lib6.CompilerCommandLine.withGlobalOptions("",new core.DartList.literal(""),(c : lib4.CompilerContext) => new async.Future.fromPromise(( async () : Promise<any> =>  {
        c.options.options.set("--packages",packages);
        if (verbose) {
            c.options.options.set("--verbose",true);
        }
        let uriTranslator : lib11.TranslateUri = await lib11.TranslateUri.parse(c.fileSystem,c.options.sdk,c.options.packages);
        ticker.logMs("Read packages file");
        let dillTarget : lib12.DillTarget = new lib12.DillTarget(ticker,uriTranslator,backendTarget);
        _appendDillForUri(dillTarget,platform);
        let kernelTarget : lib9.KernelTarget = new lib9.KernelTarget(PhysicalFileSystem.instance,dillTarget,uriTranslator,false,c.uriToSource);
        kernelTarget.read(script);
        await dillTarget.buildOutlines();
        await kernelTarget.loader.buildOutlines();
        await kernelTarget.writeDepsFile(output,depsFile,{
            extraDependencies : extraDependencies});
    })()));
})());
export var _appendDillForUri : (dillTarget : lib12.DillTarget,uri : lib10.Uri) => void = (dillTarget : lib12.DillTarget,uri : lib10.Uri) : void =>  {
    let bytes = new io.File.fromUri(uri).readAsBytesSync();
    let platformProgram = loadProgramFromBytes(bytes);
    platformProgram.unbindCanonicalNames();
    dillTarget.loader.appendLibraries(platformProgram);
};
export namespace CompileTask {
    export type Constructors = 'CompileTask';
    export type Interface = Omit<CompileTask, Constructors>;
}
@DartClass
export class CompileTask {
    c : lib4.CompilerContext;

    ticker : lib5.Ticker;

    constructor(c : lib4.CompilerContext,ticker : lib5.Ticker) {
    }
    @defaultConstructor
    CompileTask(c : lib4.CompilerContext,ticker : lib5.Ticker) {
        this.c = c;
        this.ticker = ticker;
    }
    createDillTarget(uriTranslator : lib11.TranslateUri) : lib12.DillTarget {
        return new lib12.DillTarget(this.ticker,uriTranslator,this.c.options.target);
    }
    createKernelTarget(dillTarget : lib12.DillTarget,uriTranslator : lib11.TranslateUri,strongMode : boolean) : lib9.KernelTarget {
        return new lib9.KernelTarget(this.c.fileSystem,dillTarget,uriTranslator,strongMode,this.c.uriToSource);
    }
    buildOutline(output? : lib10.Uri) : async.Future<lib9.KernelTarget> { 
        return new async.Future.fromPromise(( async () =>  {
            let uriTranslator : lib11.TranslateUri = await lib11.TranslateUri.parse(this.c.fileSystem,this.c.options.sdk,this.c.options.packages);
            this.ticker.logMs("Read packages file");
            let dillTarget : lib12.DillTarget = this.createDillTarget(uriTranslator);
            let kernelTarget : lib9.KernelTarget = this.createKernelTarget(dillTarget,uriTranslator,this.c.options.strongMode);
            if (this.c.options.strongMode) {
                core.print("Note: strong mode support is preliminary and may not work.");
            }
            let platform : lib10.Uri = this.c.options.platform;
            if (platform != null) {
                _appendDillForUri(dillTarget,platform);
            }
            let argument : string = this.c.options.arguments.first;
            let uri : lib10.Uri = lib10.Uri.base.resolve(argument);
            let path : string = (((t)=>(!!t)?t.path:null)(uriTranslator.translate(uri)) || argument);
            if (new core.DartString(path).endsWith(".dart")) {
                kernelTarget.read(uri);
            }else {
                lib7.inputError(uri,-1,`Unexpected input: ${uri}`);
            }
            await dillTarget.buildOutlines();
            let outline = await kernelTarget.buildOutlines();
            if (this.c.options.dumpIr && output != null) {
                printProgramText(outline,{
                    libraryFilter : kernelTarget.isSourceLibrary.bind(kernelTarget)});
            }
            if (output != null) {
                await writeProgramToFile(outline,output);
                this.ticker.logMs(`Wrote outline to ${output.toFilePath()}`);
            }
            return kernelTarget;
        } )());
    }

    compile() : async.Future<lib10.Uri> { 
        return new async.Future.fromPromise(( async () =>  {
            let kernelTarget : lib9.KernelTarget = await this.buildOutline();
            if (io.properties.exitCode != 0) return null;
            let uri : lib10.Uri = this.c.options.output;
            let program = await kernelTarget.buildProgram({
                verify : this.c.options.verify});
            if (this.c.options.dumpIr) {
                printProgramText(program,{
                    libraryFilter : kernelTarget.isSourceLibrary.bind(kernelTarget)});
            }
            await writeProgramToFile(program,uri);
            this.ticker.logMs(`Wrote program to ${uri.toFilePath()}`);
            return uri;
        } )());
    }

}

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

export class properties {
    private static __$summary : boolean;
    static get summary() : boolean { 
        if (this.__$summary===undefined) {
            this.__$summary = new boolean.fromEnvironment("summary",{
                defaultValue : false});
        }
        return this.__$summary;
    }
    static set summary(__$value : boolean)  { 
        this.__$summary = __$value;
    }

    private static __$iterations : number;
    static get iterations() : number { 
        if (this.__$iterations===undefined) {
            this.__$iterations = new core.DartInt.fromEnvironment("iterations",{
                defaultValue : 1}).valueOf();
        }
        return this.__$iterations;
    }
    static set iterations(__$value : number)  { 
        this.__$iterations = __$value;
    }

}
