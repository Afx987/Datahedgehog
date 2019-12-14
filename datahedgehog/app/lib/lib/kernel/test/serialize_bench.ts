/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/serialize_bench.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";

export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    if (args.length != 2) {
        core.print(properties.usage);
        io.exit(1);
    }
    let program : any = loadProgramFromBinary(args[0]);
    let destination : string = args[1];
    let watch = ((_) : core.DartStopwatch =>  {
        {
            _.start();
            return _;
        }
    })(new core.DartStopwatch());
    await writeProgramToBinary(program,destination);
    let coldTime : number = watch.elapsedMilliseconds;
    watch.reset();
    let numTrials : number = 10;
    for(let i : number = 0; i < numTrials; ++i){
        await writeProgramToBinary(program,destination);
    }
    let hotTime : double = watch.elapsedMilliseconds / numTrials;
    core.print(`Cold time: ${coldTime} ms`);
    core.print(`Hot time:  ${hotTime} ms`);
})());
export class properties {
    private static __$usage : string;
    static get usage() : string { 
        if (this.__$usage===undefined) {
            this.__$usage = 'Usage: serialize_bench INPUT.dill OUTPUT.dill\n\nDeserialize INPUT and write it back to OUTPUT several times, measuring\nthe time it takes, including I/O time.\n';
        }
        return this.__$usage;
    }
    static set usage(__$value : string)  { 
        this.__$usage = __$value;
    }

}
