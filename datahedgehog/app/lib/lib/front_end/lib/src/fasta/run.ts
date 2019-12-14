/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/run.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "./compiler_context";
import * as lib5 from "./ticker";
import * as lib6 from "./fasta";
import * as lib7 from "./errors";
import * as io from "@dart2ts/dart/io";
import * as lib9 from "./compiler_command_line";
import * as lib10 from "./testing/patched_sdk_location";

export var mainEntryPoint : (arguments : core.DartList<string>) => any = (arguments : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let uri : lib3.Uri;
    for(let i : number = 0; i < properties.iterations; i++){
        await lib9.CompilerCommandLine.withGlobalOptions("run",arguments,(c : lib4.CompilerContext) => new async.Future.fromPromise(( async () : Promise<any> =>  {
            if (i > 0) {
                core.print("\n");
            }
            try {
                let task : lib6.CompileTask = new lib6.CompileTask(c,new lib5.Ticker({
                    isVerbose : c.options.verbose}));
                uri = await task.compile();
            } catch (__error__) {

                if (is(__error__,lib7.InputError)){
                    let e : lib7.InputError = __error__;
                    core.print(e.format());
                    io.exit(1);
                }
            }
            if (io.properties.exitCode != 0) io.exit(io.properties.exitCode);
            if (i + 1 == properties.iterations) {
                io.exit(await run(uri,c));
            }
        })()));
    }
})());
export var run : (uri : lib3.Uri,c : lib4.CompilerContext) => async.Future<number> = (uri : lib3.Uri,c : lib4.CompilerContext) => new async.Future.fromPromise(( async () : Promise<number> =>  {
    let sdk : lib3.Uri = await lib10.computePatchedSdk();
    let dartVm : lib3.Uri = lib10.computeDartVm(sdk);
    let arguments : core.DartList<string> = ((_) : core.DartList<string> =>  {
        {
            _.addAll(c.options.arguments.skip(1));
            return _;
        }
    })(new core.DartList.literal<string>(`${uri.toFilePath()}`));
    if (c.options.verbose) {
        core.print(`Running ${dartVm.toFilePath()} ${arguments.join(' ')}`);
    }
    let result : any = await StdioProcess.run(dartVm.toFilePath(),arguments);
    io.properties.stdout.write(result.output);
    return result.exitCode;
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
