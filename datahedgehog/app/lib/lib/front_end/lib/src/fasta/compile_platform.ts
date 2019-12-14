/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/compile_platform.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./errors";
import * as io from "@dart2ts/dart/io";
import * as lib5 from "./ticker";
import * as lib6 from "./compiler_context";
import * as lib7 from "@dart2ts/dart/uri";
import * as lib8 from "./compiler_command_line";
import * as lib9 from "./translate_uri";
import * as lib10 from "./dill/dill_target";
import * as lib11 from "./kernel/kernel_target";
import * as lib12 from "./kernel/utils";

export var mainEntryPoint : (arguments : core.DartList<string>) => async.Future<any> = (arguments : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    for(let i : number = 0; i < properties.iterations; i++){
        if (i > 0) {
            core.print("\n");
        }
        try {
            await compilePlatform(arguments);
        } catch (__error__) {

            if (is(__error__,lib3.InputError)){
                let e : lib3.InputError = __error__;
                io.properties.exitCode = 1;
                core.print(e.format());
                return null;
            }
        }
    }
})());
export var compilePlatform : (arguments : core.DartList<string>) => async.Future<any> = (arguments : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let ticker : lib5.Ticker = new lib5.Ticker();
    await lib8.CompilerCommandLine.withGlobalOptions("compile_platform",arguments,(c : lib6.CompilerContext) =>  {
        let patchedSdk : lib7.Uri = lib7.Uri.base.resolveUri(new lib7.Uri.file(c.options.arguments[0]));
        let fullOutput : lib7.Uri = lib7.Uri.base.resolveUri(new lib7.Uri.file(c.options.arguments[1]));
        let outlineOutput : lib7.Uri = lib7.Uri.base.resolveUri(new lib7.Uri.file(c.options.arguments[2]));
        return compilePlatformInternal(c,ticker,patchedSdk,fullOutput,outlineOutput);
    });
})());
export var compilePlatformInternal : (c : lib6.CompilerContext,ticker : lib5.Ticker,patchedSdk : lib7.Uri,fullOutput : lib7.Uri,outlineOutput : lib7.Uri) => async.Future<any> = (c : lib6.CompilerContext,ticker : lib5.Ticker,patchedSdk : lib7.Uri,fullOutput : lib7.Uri,outlineOutput : lib7.Uri) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    if (c.options.strongMode) {
        core.print("Note: strong mode support is preliminary and may not work.");
    }
    ticker.isVerbose = c.options.verbose;
    let deps : lib7.Uri = lib7.Uri.base.resolveUri(new lib7.Uri.file(`${fullOutput.toFilePath()}.d`));
    ticker.logMs("Parsed arguments");
    if (ticker.isVerbose) {
        core.print(`Generating outline of ${patchedSdk} into ${outlineOutput}`);
        core.print(`Compiling ${patchedSdk} to ${fullOutput}`);
    }
    let uriTranslator : lib9.TranslateUri = await lib9.TranslateUri.parse(c.fileSystem,patchedSdk,c.options.packages);
    ticker.logMs("Read packages file");
    let dillTarget : lib10.DillTarget = new lib10.DillTarget(ticker,uriTranslator,c.options.target);
    let kernelTarget : lib11.KernelTarget = new lib11.KernelTarget(c.fileSystem,dillTarget,uriTranslator,c.options.strongMode,c.uriToSource);
    kernelTarget.read(lib7.Uri.parse("dart:core"));
    await dillTarget.buildOutlines();
    let outline = await kernelTarget.buildOutlines();
    await lib12.writeProgramToFile(outline,outlineOutput);
    ticker.logMs(`Wrote outline to ${outlineOutput.toFilePath()}`);
    if (io.properties.exitCode != 0) return null;
    let program = await kernelTarget.buildProgram({
        verify : c.options.verify});
    if (c.options.dumpIr) lib12.printProgramText(program);
    await lib12.writeProgramToFile(program,fullOutput);
    ticker.logMs(`Wrote program to ${fullOutput.toFilePath()}`);
    await kernelTarget.writeDepsFile(fullOutput,deps);
})());
export class properties {
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
