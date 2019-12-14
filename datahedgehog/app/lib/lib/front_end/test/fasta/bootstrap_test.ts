/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/fasta/bootstrap_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as io from "@dart2ts/dart/io";

export var main : () => async.Future<any> = () => new async.Future.fromPromise(( async () : Promise<any> =>  {
    asyncStart();
    let sourceCompiler : lib3.Uri = lib3.Uri.base.resolve("pkg/front_end/tool/_fasta/compile.dart");
    let outline : lib3.Uri = lib3.Uri.base.resolve("pkg/front_end/tool/_fasta/outline.dart");
    let tmp : io.Directory = await io.Directory.systemTemp.createTemp("fasta_bootstrap");
    let compiledOnceOutput : lib3.Uri = tmp.uri.resolve("fasta1.dill");
    let compiledTwiceOutput : lib3.Uri = tmp.uri.resolve("fasta2.dill");
    let outlineOutput : lib3.Uri = tmp.uri.resolve("outline.dill");
    try {
        await runCompiler(sourceCompiler,sourceCompiler,compiledOnceOutput);
        await runCompiler(compiledOnceOutput,sourceCompiler,compiledTwiceOutput);
        await compare(compiledOnceOutput,compiledTwiceOutput);
        await runCompiler(compiledTwiceOutput,outline,outlineOutput);
        try {
            await compare(compiledOnceOutput,outlineOutput,{
                silent : true});
            throw "Expected an error.";
        } catch (__error__) {

            if (is(__error__,ComparisonFailed)){
            }
        }
    } finally {
        await tmp.delete({
            recursive : true});
    }
    asyncEnd();
})());
export var runCompiler : (compiler : lib3.Uri,input : lib3.Uri,output : lib3.Uri) => async.Future<any> = (compiler : lib3.Uri,input : lib3.Uri,output : lib3.Uri) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let patchedSdk : lib3.Uri = await computePatchedSdk();
    let dartVm : lib3.Uri = lib3.Uri.base.resolve(io.Platform.resolvedExecutable);
    let result : any = await StdioProcess.run(dartVm.toFilePath(),new core.DartList.literal<string>("-c",compiler.toFilePath(),`--compile-sdk=${patchedSdk.toFilePath()}`,`--output=${output.toFilePath()}`,"--verify",input.toFilePath()));
    if (result.output.isNotEmpty) {
        core.print(result.output);
    }
    if (result.exitCode != 0) {
        throw "Compilation failed.";
    }
})());
export var compare : (a : lib3.Uri,b : lib3.Uri,_namedArguments? : {silent? : boolean}) => async.Future<any> = (a : lib3.Uri,b : lib3.Uri,_namedArguments? : {silent? : boolean}) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let {silent} = Object.assign({
        "silent" : false}, _namedArguments );
    let bytesA : core.DartList<number> = await new io.File.fromUri(a).readAsBytes();
    let bytesB : core.DartList<number> = await new io.File.fromUri(b).readAsBytes();
    if (bytesA.length == bytesB.length) {
        let same : boolean = true;
        for(let i : number = 0; i < bytesA.length; i++){
            if (bytesA[i] != bytesB[i]) {
                same = false;
                break;
            }
        }
        if (same) return;
    }
    if (!silent) {
        core.print(`${a} is different from ${b}`);
    }
    let programA : any = new bare.createInstance(any,null);
    let programB : any = new bare.createInstance(any,null);
    new bare.createInstance(any,null,bytesA,a.toFilePath()).readProgram(programA);
    new bare.createInstance(any,null,bytesB,b.toFilePath()).readProgram(programB);
    let splitLines : core.DartRegExp = new core.DartRegExp('^',{
        multiLine : true});
    let linesA : core.DartList<string> = programToString(programA).split(splitLines);
    let linesB : core.DartList<string> = programToString(programB).split(splitLines);
    for(let i : number = 0; i < linesA.length && i < linesB.length; i++){
        let lineA : string = new core.DartString(linesA[i]).trimRight();
        let lineB : string = new core.DartString(linesB[i]).trimRight();
        if (lineA != lineB) {
            let diffHunk : string = `${i}c${i}\n>${lineA}\n---\n<${lineB}`;
            if (!silent) {
                core.print(diffHunk);
            }
        }
    }
    throw new ComparisonFailed(a,b);
})());
export namespace ComparisonFailed {
    export type Constructors = 'ComparisonFailed';
    export type Interface = Omit<ComparisonFailed, Constructors>;
}
@DartClass
export class ComparisonFailed {
    a : lib3.Uri;

    b : lib3.Uri;

    constructor(a : lib3.Uri,b : lib3.Uri) {
    }
    @defaultConstructor
    ComparisonFailed(a : lib3.Uri,b : lib3.Uri) {
        this.a = a;
        this.b = b;
    }
    toString() {
        return `Error: ${this.a} is different from ${this.b}`;
    }
}

export class properties {
}
