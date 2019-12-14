/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/reify/reify_transformer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./transformation/binding";
import * as lib4 from "./analysis/program_analysis";
import * as lib5 from "./transformation/builder";
import * as lib6 from "./transformation/transformer";
import * as lib7 from "./transformation/remove_generics";
import * as lib8 from "@dart2ts/dart/uri";
import * as io from "@dart2ts/dart/io";

export var findRuntimeTypeLibrary : (p : any) => lib3.RuntimeLibrary = (p : any) : lib3.RuntimeLibrary =>  {
    var findLibraryEndingWith : (postfix : string) => any = (postfix : string) : any =>  {
        let candidates : core.DartIterable<any> = p.libraries.where((l : any) =>  {
            return new core.DartString(l.importUri.toString()).endsWith(postfix);
        });
        if (candidates.length != 1) {
            let howMany : string = candidates.isEmpty ? "No" : "Multiple";
            throw new core.Exception(`${howMany} candidates for runtime support library found.`);
        }
        return candidates.single;
    };
    let types : any = findLibraryEndingWith("reify/types.dart");
    let declarations : any = findLibraryEndingWith("reify/declarations.dart");
    let interceptors : any = findLibraryEndingWith("reify/interceptors.dart");
    return new lib3.RuntimeLibrary(types,declarations,interceptors);
};
export var transformProgramUsingLibraries : (program : any,runtimeLibrary : lib3.RuntimeLibrary,libraryToTransform? : any) => any = (program : any,runtimeLibrary : lib3.RuntimeLibrary,libraryToTransform? : any) : any =>  {
    let filter : (library : any) => boolean = libraryToTransform != null ? (library : any) =>  {
        return op(Op.EQUALS,library,libraryToTransform);
    } : (_ : any) =>  {
        return true;
    };
    let knowledge : lib4.ProgramKnowledge = lib4.analyze(program,{
        analyzeLibrary : filter});
    let mainLibrary : any = program.mainMethod.parent;
    let builder : lib5.RuntimeTypeSupportBuilder = new lib5.RuntimeTypeSupportBuilder(runtimeLibrary,new bare.createInstance(any,null,program),mainLibrary);
    let transformer : lib6.ReifyVisitor = new lib6.ReifyVisitor(runtimeLibrary,builder,knowledge,libraryToTransform);
    program = program.accept(transformer);
    if (!filter(runtimeLibrary.interceptorsLibrary)) {
        runtimeLibrary.interceptorFunction.accept(transformer);
    }
    builder.createDeclarations();
    program = program.accept(new lib7.Erasure(transformer));
    verifyProgram(program);
    return program;
};
export var transformProgram : (program : any) => any = (program : any) : any =>  {
    let runtimeLibrary : lib3.RuntimeLibrary = findRuntimeTypeLibrary(program);
    let mainLibrary : any = program.mainMethod.enclosingLibrary;
    return transformProgramUsingLibraries(program,runtimeLibrary,mainLibrary);
};
export var main : (arguments : core.DartList<string>) => any = (arguments : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let path : string = arguments.first;
    let output : lib8.Uri;
    if (arguments.length > 1) {
        output = lib8.Uri.base.resolve(arguments[1]);
    }
    let uri : lib8.Uri = lib8.Uri.base.resolve(path);
    let program : any = loadProgramFromBinary(uri.toFilePath());
    let runtimeLibrary : lib3.RuntimeLibrary = findRuntimeTypeLibrary(program);
    let mainLibrary : any = program.mainMethod.enclosingLibrary;
    program = transformProgramUsingLibraries(program,runtimeLibrary,mainLibrary);
    if (op(Op.EQUALS,output,null)) {
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        let printer : any = new bare.createInstance(any,null,sb);
        printer.writeLibraryFile(mainLibrary);
        core.print(`${sb}`);
    }else {
        let sink : io.IOSink = new io.File.fromUri(output).openWrite();
        try {
            new bare.createInstance(any,null,sink).writeProgramFile(program);
        } finally {
            await sink.close();
        }
        try {
            loadProgramFromBinary(output.toFilePath());
        } catch (__error__) {

            {
                let e = __error__;
                core.print(`Error when attempting to read ${output}.`);
                /* TODO (RethrowExpressionImpl): rethrow */;
            }
        }
    }
})());
export class properties {
}
