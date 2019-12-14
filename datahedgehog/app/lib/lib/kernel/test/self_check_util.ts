/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/self_check_util.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../bin/batch_util";

export var runSelfCheck : (args : core.DartList<string>,runTest : (filename : string) => async.Future<any>) => any = (args : core.DartList<string>,runTest : (filename : string) => async.Future<any>) =>  {
    var batchMain : (arguments : core.DartList<string>) => async.Future<lib3.CompilerOutcome> = (arguments : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<lib3.CompilerOutcome> =>  {
        if (arguments.length != 1) {
            throw 'Exactly one argument expected';
        }
        let filename : string = arguments[0];
        if (!new core.DartString(filename).endsWith('.dill')) {
            throw `File does not have expected .dill extension: ${filename}`;
        }
        await runTest(filename);
        return lib3.CompilerOutcome.Ok;
    })());
    if (args.length == 1 && args[0] == '--batch') {
        lib3.runBatch(batchMain);
    }else {
        batchMain(args);
    }
};
export class properties {
}
