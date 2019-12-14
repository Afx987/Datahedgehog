/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/ast_membench.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";

export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) =>  {
    if (args.length == 0) {
        core.print('USAGE: ast_membench FILE.dill NUM_COPIES');
        io.exit(1);
    }
    let filename : string = args[0];
    let defaultCopyCount : number = 10;
    let copyCount : number = args.length == 2 ? core.DartInt.parse(args[1]) : defaultCopyCount;
    let keepAlive : core.DartList<any> = new core.DartList.literal<any>();
    for(let i : number = 0; i < copyCount; ++i){
        keepAlive.add(loadProgramFromBinary(filename));
    }
    core.print(`${copyCount} copies built`);
    if (args.contains('-v')) {
        let size : number = 0;
        for(let program of keepAlive) {
            size += program.libraries.length;
        }
        core.print(size);
    }
};
export class properties {
}
