/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/kernel/utils.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as io from "@dart2ts/dart/io";

export var offsetForToken : (token : any) => number = (token : any) : number =>  {
    return op(Op.EQUALS,token,null) ? TreeNode.noOffset : token.offset;
};
export var printProgramText : (program : any,_namedArguments? : {libraryFilter? : (library : any) => boolean}) => void = (program : any,_namedArguments? : {libraryFilter? : (library : any) => boolean}) : void =>  {
    let {libraryFilter} = Object.assign({
    }, _namedArguments );
    if (op(Op.EQUALS,program,null)) return;
    let sb : core.DartStringBuffer = new core.DartStringBuffer();
    for(let library of program.libraries) {
        if (libraryFilter != null && !libraryFilter(library)) continue;
        let printer : any = new bare.createInstance(any,null,sb);
        printer.writeLibraryFile(library);
    }
    core.print(sb);
};
export var writeProgramToFile : (program : any,uri : lib3.Uri) => async.Future<core.Null> = (program : any,uri : lib3.Uri) => new async.Future.fromPromise(( async () : Promise<core.Null> =>  {
    let output : io.File = new io.File.fromUri(uri);
    let sink : io.IOSink = output.openWrite();
    try {
        new bare.createInstance(any,null,sink).writeProgramFile(program);
        program.unbindCanonicalNames();
    } finally {
        await sink.close();
    }
})());
export class properties {
}
