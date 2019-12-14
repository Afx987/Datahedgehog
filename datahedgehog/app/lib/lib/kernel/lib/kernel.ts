/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/kernel.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./ast";
import * as io from "@dart2ts/dart/io";
import * as lib5 from "./binary/ast_from_binary";
import * as lib6 from "./binary/ast_to_binary";
import * as lib7 from "./text/ast_to_text";

export var loadProgramFromBinary : (path : string,program? : lib3.Program) => lib3.Program = (path : string,program? : lib3.Program) : lib3.Program =>  {
    let bytes : core.DartList<number> = new io.File(path).readAsBytesSync();
    return loadProgramFromBytes(bytes,program);
};
export var loadProgramFromBytes : (bytes : core.DartList<number>,program? : lib3.Program) => lib3.Program = (bytes : core.DartList<number>,program? : lib3.Program) : lib3.Program =>  {
    program = ( program ) || ( new lib3.Program() );
    new lib5.BinaryBuilder(bytes).readProgram(program);
    return program;
};
export var writeProgramToBinary : (program : lib3.Program,path : string) => async.Future<any> = (program : lib3.Program,path : string) : async.Future<any> =>  {
    let sink;
    if (path == 'null' || path == 'stdout') {
        sink = io.properties.stdout.nonBlocking;
    }else {
        sink = new io.File(path).openWrite();
    }
    let future;
    try {
        new lib6.BinaryPrinter(sink).writeProgramFile(program);
    } finally {
        if (op(Op.EQUALS,sink,io.properties.stdout.nonBlocking)) {
            future = sink.flush();
        }else {
            future = sink.close();
        }
    }
    return future;
};
export var writeLibraryToText : (library : lib3.Library,_namedArguments? : {path? : string}) => void = (library : lib3.Library,_namedArguments? : {path? : string}) : void =>  {
    let {path} = Object.assign({
    }, _namedArguments );
    let buffer : core.DartStringBuffer = new core.DartStringBuffer();
    new lib7.Printer(buffer).writeLibraryFile(library);
    if (path == null) {
        core.print(buffer);
    }else {
        new io.File(path).writeAsStringSync(`${buffer}`);
    }
};
export var writeProgramToText : (program : lib3.Program,_namedArguments? : {path? : string,showExternal? : boolean,showOffsets? : boolean}) => void = (program : lib3.Program,_namedArguments? : {path? : string,showExternal? : boolean,showOffsets? : boolean}) : void =>  {
    let {path,showExternal,showOffsets} = Object.assign({
        "showExternal" : false,
        "showOffsets" : false}, _namedArguments );
    let buffer : core.DartStringBuffer = new core.DartStringBuffer();
    new lib7.Printer(buffer,{
        showExternal : showExternal,showOffsets : showOffsets}).writeProgramFile(program);
    if (path == null) {
        core.print(buffer);
    }else {
        new io.File(path).writeAsStringSync(`${buffer}`);
    }
};
export class properties {
}
