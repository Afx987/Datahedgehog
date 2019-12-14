/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/kernel_generator.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "./compiler_options";
import * as lib5 from "./src/simple_error";
import * as lib6 from "./src/fasta/translate_uri";
import * as lib7 from "./src/fasta/ticker";
import * as lib8 from "./src/fasta/dill/dill_target";
import * as lib9 from "./src/fasta/kernel/kernel_target";
import * as lib10 from "./src/fasta/errors";

export var kernelForProgram : (source : lib3.Uri,options : lib4.CompilerOptions) => async.Future<any> = (source : lib3.Uri,options : lib4.CompilerOptions) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let fs = options.fileSystem;
    var report : (msg : string) => any = (msg : string) =>  {
        options.onError(new lib5.SimpleError(msg));
        return null;
    };
    if (!await fs.entityForUri(source).exists()) {
        return report(`Entry-point file not found: ${source}`);
    }
    let pOptions = new bare.createInstance(any,null,options);
    if (!await pOptions.validateOptions()) return null;
    try {
        let uriTranslator : lib6.TranslateUri = await pOptions.getUriTranslator();
        let dillTarget = new lib8.DillTarget(new lib7.Ticker({
            isVerbose : false}),uriTranslator,"vm");
        let summary = await pOptions.sdkSummaryProgram;
        if (summary != null) {
            dillTarget.loader.appendLibraries(summary);
        }
        let kernelTarget = new lib9.KernelTarget(options.fileSystem,dillTarget,uriTranslator,options.strongMode);
        kernelTarget.read(source);
        await dillTarget.buildOutlines();
        await kernelTarget.buildOutlines();
        let program : any = await kernelTarget.buildProgram({
            trimDependencies : true});
        if (kernelTarget.errors.isNotEmpty) {
            kernelTarget.errors.forEach(report);
            return null;
        }
        if (op(Op.EQUALS,program.mainMethod,null)) {
            return report("No 'main' method found.");
        }
        if (!options.compileSdk) {
        }
        return program;
    } catch (__error__) {

        if (is(__error__,lib10.InputError)){
            let e : lib10.InputError = __error__;
            options.onError(new lib5.SimpleError(e.format()));
            return null;
        }
    }
})());
export var kernelForBuildUnit : (sources : core.DartList<lib3.Uri>,options : lib4.CompilerOptions) => async.Future<any> = (sources : core.DartList<lib3.Uri>,options : lib4.CompilerOptions) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let fs = options.fileSystem;
    var report : (msg : string) => any = (msg : string) =>  {
        options.onError(new lib5.SimpleError(msg));
        return null;
    };
    if (!options.chaseDependencies) {
        report("hermetic mode (chaseDependencies = false) is not implemented");
        return null;
    }
    for(let source of sources) {
        if (!await fs.entityForUri(source).exists()) {
            return report(`Entry-point file not found: ${source}`);
        }
    }
    let pOptions = new bare.createInstance(any,null,options);
    if (!await pOptions.validateOptions()) return null;
    try {
        let uriTranslator : lib6.TranslateUri = await pOptions.getUriTranslator();
        let dillTarget = new lib8.DillTarget(new lib7.Ticker({
            isVerbose : false}),uriTranslator,"vm");
        let summary = await pOptions.sdkSummaryProgram;
        if (summary != null) {
            dillTarget.loader.appendLibraries(summary);
        }
        for(let inputSummary of await pOptions.inputSummariesPrograms) {
            dillTarget.loader.appendLibraries(inputSummary);
        }
        await dillTarget.buildOutlines();
        let kernelTarget = new lib9.KernelTarget(options.fileSystem,dillTarget,uriTranslator,options.strongMode);
        sources.forEach(kernelTarget.read.bind(kernelTarget));
        await kernelTarget.buildOutlines();
        let program : any = await kernelTarget.buildProgram({
            trimDependencies : true});
        if (kernelTarget.errors.isNotEmpty) {
            kernelTarget.errors.forEach(report);
            return null;
        }
        return program;
    } catch (__error__) {

        if (is(__error__,lib10.InputError)){
            let e : lib10.InputError = __error__;
            options.onError(new lib5.SimpleError(e.format()));
            return null;
        }
    }
})());
export class properties {
}
