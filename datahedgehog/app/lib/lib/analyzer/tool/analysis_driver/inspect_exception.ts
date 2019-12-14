/** Library asset:datahedgehog_monitor/lib/lib/analyzer/tool/analysis_driver/inspect_exception.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";

export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) =>  {
    let argParser : any = ((_) : any =>  {
        {
            addFlag('raw');
            return _;
        }
    })(new bare.createInstance(any,null));
    let argResults : any = argParser.parse(args);
    if (argResults.rest.length != 1) {
        core.print(argParser.usage);
        io.properties.exitCode = 1;
        return;
    }
    let path : string = op(Op.INDEX,argResults.rest,0);
    let bytes : core.DartList<number> = new io.File(path).readAsBytesSync();
    let context : any = new bare.createInstance(any,null,bytes);
    core.print(context.path);
    core.print('');
    core.print('');
    core.print('');
    core.print(context.exception);
    core.print('');
    core.print('');
    core.print('');
    core.print(context.stackTrace);
    core.print('');
    core.print('');
    core.print('');
    context.files.forEach((file : any) =>  {
        core.print(op(Op.TIMES,"=",40));
        core.print(`${file.path}`);
        core.print(op(Op.TIMES,"-",40));
        core.print(`${file.content}`);
        core.print('');
        core.print('');
        core.print('');
    });
};
export class properties {
}
