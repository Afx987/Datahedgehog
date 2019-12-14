/** Library asset:datahedgehog_monitor/lib/lib/kernel/bin/batch_util.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as convert from "@dart2ts/dart/convert";
import * as io from "@dart2ts/dart/io";

export var runBatch : (callback : (arguments : core.DartList<string>) => async.Future<CompilerOutcome>) => async.Future<any> = (callback : (arguments : core.DartList<string>) => async.Future<CompilerOutcome>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let totalTests : number = 0;
    let testsFailed : number = 0;
    let watch = ((_) : core.DartStopwatch =>  {
        {
            _.start();
            return _;
        }
    })(new core.DartStopwatch());
    core.print('>>> BATCH START');
    let input : async.DartStream<any> = io.properties.stdin.transform(convert.properties.UTF8.decoder).transform(new convert.LineSplitter());
    for await(let line of input) {
        if (new core.DartString(line).isEmpty) {
            let time : number = watch.elapsedMilliseconds;
            core.print('>>> BATCH END ' + `(${totalTests - testsFailed})/${totalTests} ${time}ms`);
            break;
        }
        ++totalTests;
        let arguments = new core.DartString(line).split(new core.DartRegExp('\s+'));
        try {
            let outcome = await callback(arguments);
            io.properties.stderr.writeln('>>> EOF STDERR');
            if (op(Op.EQUALS,outcome,CompilerOutcome.Ok)) {
                core.print(`>>> TEST PASS ${watch.elapsedMilliseconds}ms`);
            }else {
                core.print(`>>> TEST FAIL ${watch.elapsedMilliseconds}ms`);
            }
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                io.properties.stderr.writeln(e);
                io.properties.stderr.writeln(stackTrace);
                io.properties.stderr.writeln('>>> EOF STDERR');
                core.print('>>> TEST CRASH');
            }
        }
    }
})());
export enum CompilerOutcome {
    Ok,
    Fail
}

export class properties {
}
