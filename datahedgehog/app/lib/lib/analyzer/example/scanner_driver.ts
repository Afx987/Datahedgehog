/** Library asset:datahedgehog_monitor/lib/lib/analyzer/example/scanner_driver.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";

export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) =>  {
    core.print(`working dir ${new io.File('.').resolveSymbolicLinksSync()}`);
    if (args.length == 0) {
        core.print('Usage: scanner_driver [files_to_scan]');
        io.exit(0);
    }
    for(let arg of args) {
        _scan(new io.File(arg));
    }
};
export var _scan : (file : io.File) => any = (file : io.File) =>  {
    let src = file.readAsStringSync();
    let reader = new bare.createInstance(any,null,src);
    let scanner = new bare.createInstance(any,null,null,reader,null);
    let token = scanner.tokenize();
    while (token.type != TokenType.EOF){
        core.print(token);
        token = token.next;
    }
};
export class properties {
}
