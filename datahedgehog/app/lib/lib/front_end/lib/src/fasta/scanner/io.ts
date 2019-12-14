/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/scanner/io.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as io from "@dart2ts/dart/io";
import * as typed_data from "@dart2ts/dart/typed_data";

export var readBytesFromFileSync : (uri : lib3.Uri) => core.DartList<number> = (uri : lib3.Uri) : core.DartList<number> =>  {
    let file : io.RandomAccessFile = new io.File.fromUri(uri).openSync();
    let list : typed_data.Uint8List;
    try {
        let length : number = file.lengthSync();
        list = new typed_data.Uint8List(length + 1);
        file.readIntoSync(list,0,length);
    } finally {
        file.closeSync();
    }
    return list;
};
export var readBytesFromFile : (uri : lib3.Uri,_namedArguments? : {ensureZeroTermination? : boolean}) => async.Future<core.DartList<number>> = (uri : lib3.Uri,_namedArguments? : {ensureZeroTermination? : boolean}) => new async.Future.fromPromise(( async () : Promise<core.DartList<number>> =>  {
    let {ensureZeroTermination} = Object.assign({
        "ensureZeroTermination" : true}, _namedArguments );
    let file : io.RandomAccessFile = await new io.File.fromUri(uri).open();
    let list : typed_data.Uint8List;
    try {
        let length : number = await file.length();
        list = new typed_data.Uint8List(ensureZeroTermination ? length + 1 : length);
        let read : number = await file.readInto(list);
        if (read != length) {
            throw `Error reading file: ${uri}`;
        }
    } finally {
        await file.close();
    }
    return list;
})());
export class properties {
}
