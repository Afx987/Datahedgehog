/** Library asset:datahedgehog_monitor/lib/lib/kernel/bin/eval.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";

export var fail : (message : string) => any = (message : string) =>  {
    io.properties.stderr.writeln(message);
    io.exit(1);
};
export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) =>  {
    if (args.length == 1 && new core.DartString(args[0]).endsWith('.dill')) {
        let program = loadProgramFromBinary(args[0]);
        new bare.createInstance(any,null,program).run();
    }else {
        return fail('One input binary file should be specified.');
    }
};
export class properties {
}
