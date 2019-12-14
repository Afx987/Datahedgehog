/** Library asset:datahedgehog_monitor/lib/lib/front_end/tool/_fasta/analyzer_compile.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts/dart/uri";

export var compile : (arguments : core.DartList<string>) => async.Future<lib4.Uri> = (arguments : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<lib4.Uri> =>  {
    try {
        return await CompilerCommandLine.withGlobalOptions("kompile",arguments,(c : any) => new async.Future.fromPromise(( async () : Promise<any> =>  {
            if (c.options.verbose) {
                core.print(`Compiling via analyzer: ${arguments.join(' ')}`);
            }
            let task : AnalyzerCompileTask = new AnalyzerCompileTask(c,new bare.createInstance(any,null,{
                isVerbose : c.options.verbose}));
            return await task.compile();
        })()));
    } catch (__error__) {

        if (is(__error__,any)){
            let e : any = __error__;
            io.properties.exitCode = 1;
            core.print(e.format());
            return null;
        }
    }
})());
export var main : (arguments : core.DartList<string>) => any = (arguments : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    for(let i : number = 0; i < properties.iterations; i++){
        if (i > 0) {
            core.print("\n");
        }
        await compile(arguments);
    }
})());
export namespace AnalyzerCompileTask {
    export type Constructors = 'AnalyzerCompileTask';
    export type Interface = Omit<AnalyzerCompileTask, Constructors>;
}
@DartClass
export class AnalyzerCompileTask extends any {
    constructor(c : any,ticker : any) {
    }
    @defaultConstructor
    AnalyzerCompileTask(c : any,ticker : any) {
        super.DartObject(c,ticker);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createKernelTarget(dillTarget : any,uriTranslator : any,strongMode : boolean) : any {
        return new bare.createInstance(any,null,dillTarget,uriTranslator,strongMode,c.uriToSource);
    }
}

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
