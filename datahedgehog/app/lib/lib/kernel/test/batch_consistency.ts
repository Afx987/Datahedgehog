/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/batch_consistency.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "./../tool/dartk";
import * as lib5 from "@dart2ts.packages/path/lib/path";
import * as lib6 from "./../bin/batch_util";

export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let separator : number = args.indexOf('--');
    if (separator == -1) {
        core.print(properties.usage);
        io.exit(1);
    }
    let options : core.DartList<string> = args.sublist(0,separator);
    let files : core.DartList<string> = args.sublist(separator + 1);
    await new io.Directory(properties.outputDir).create({
        recursive : true});
    testBatchModeConsistency(options,files);
})());
export var areFilesEqual : (first : string,second : string) => async.Future<boolean> = (first : string,second : string) => new async.Future.fromPromise(( async () : Promise<boolean> =>  {
    let bytes : core.DartList<core.DartList<number>> = await async.Future.wait(new core.DartList.literal(new io.File(first).readAsBytes(),new io.File(second).readAsBytes()));
    if (bytes[0].length != bytes[1].length) return false;
    for(let i : number = 0; i < bytes[0].length; ++i){
        if (bytes[0][i] != bytes[1][i]) return false;
    }
    return true;
})());
export var testBatchModeConsistency : (options : core.DartList<string>,files : core.DartList<string>) => any = (options : core.DartList<string>,files : core.DartList<string>) =>  {
    let sharedState = new lib4.BatchModeState();
    for(let file of files) {
        test(file,() => new async.Future.fromPromise(( async () : Promise<any> =>  {
            let name = lib5.basename(file);
            let outputFiles : core.DartList<string> = new core.DartList.literal<string>(`${properties.outputDir}/${name}.batch.dill`,`${properties.outputDir}/${name}.unbatch.dill`);
            let results : core.DartList<any> = new core.DartList.literal(null,null);
            let failed : boolean = false;
            for(let i : number = 0; i < 2; ++i){
                let args = ((_) : core.DartList<string> =>  {
                    {
                        _.addAll(options);
                        _.addAll(new core.DartList.literal('--out',outputFiles[i],file));
                        return _;
                    }
                })(new core.DartList.literal<string>());
                let state = (i == 0) ? sharedState : new lib4.BatchModeState();
                try {
                    results[i] = await lib4.batchMain(args,state);
                } catch (__error__) {

                    {
                        let e = __error__;
                        results[i] = `${e}`;
                        failed = true;
                    }
                }
            }
            if (results[0] != results[1]) {
                fail(`Batch mode returned ${results[0]}, expected ${results[1]}`);
                return;
            }
            if (op(Op.EQUALS,results[0],lib6.CompilerOutcome.Fail)) {
                failed = true;
            }
            if (!failed && !await areFilesEqual(outputFiles[0],outputFiles[1])) {
                fail(`Batch mode output differs for ${file}`);
            }
        })()));
    }
};
export class properties {
    private static __$usage : string;
    static get usage() : string { 
        if (this.__$usage===undefined) {
            this.__$usage = "Usage: batch_consistency [options] -- files...\n\nRun dartk on the given files, both separately and in a batch, and check that\nthe output is identical for the two modes.\n";
        }
        return this.__$usage;
    }
    static set usage(__$value : string)  { 
        this.__$usage = __$value;
    }

    private static __$outputDir : string;
    static get outputDir() : string { 
        if (this.__$outputDir===undefined) {
            this.__$outputDir = 'out/batch-consistency';
        }
        return this.__$outputDir;
    }
    static set outputDir(__$value : string)  { 
        this.__$outputDir = __$value;
    }

}
