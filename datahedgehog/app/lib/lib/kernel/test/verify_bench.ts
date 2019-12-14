/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/verify_bench.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";

export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) =>  {
    if (args.length != 1) {
        core.print(properties.usage);
        io.exit(1);
    }
    let program = loadProgramFromBinary(args[0]);
    let watch = ((_) : core.DartStopwatch =>  {
        {
            _.start();
            return _;
        }
    })(new core.DartStopwatch());
    verifyProgram(program);
    core.print(`Cold: ${watch.elapsedMilliseconds} ms`);
    let warmUpTrials : number = 20;
    for(let i : number = 0; i < warmUpTrials; ++i){
        verifyProgram(program);
    }
    watch.reset();
    let numberOfTrials : number = 100;
    for(let i : number = 0; i < numberOfTrials; ++i){
        verifyProgram(program);
    }
    let millisecondsPerRun : double = watch.elapsedMilliseconds / numberOfTrials;
    core.print(`Hot:  ${millisecondsPerRun} ms`);
};
export class properties {
    private static __$usage : string;
    static get usage() : string { 
        if (this.__$usage===undefined) {
            this.__$usage = 'Usage: verify_bench FILE.dill\n\nMeasures the time it takes to run kernel verifier on the given program.\n';
        }
        return this.__$usage;
    }
    static set usage(__$value : string)  { 
        this.__$usage = __$value;
    }

}
