/** Library asset:datahedgehog_monitor/lib/lib/front_end/tool/perf_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "./perf";

export var main : () => any = () => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let benchIds = new core.DartList.literal('scan','parse','kernel_gen_e2e','kernel_gen_e2e_sum','linked_summarize');
    let inputFile = io.Platform.script.resolve('../lib/file_system.dart').path;
    for(let id of benchIds) {
        await lib4.main(new core.DartList.literal(id,inputFile));
    }
})());
export class properties {
}
