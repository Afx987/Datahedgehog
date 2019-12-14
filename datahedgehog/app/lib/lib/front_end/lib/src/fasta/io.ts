/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/io.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "./scanner/io";
import * as io from "@dart2ts/dart/io";
import * as lib6 from "./errors";

export var readBytesFromFile : (uri : lib3.Uri,_namedArguments? : {ensureZeroTermination? : boolean}) => async.Future<core.DartList<number>> = (uri : lib3.Uri,_namedArguments? : {ensureZeroTermination? : boolean}) => new async.Future.fromPromise(( async () : Promise<core.DartList<number>> =>  {
    let {ensureZeroTermination} = Object.assign({
        "ensureZeroTermination" : true}, _namedArguments );
    try {
        return await lib4.readBytesFromFile(uri,{
            ensureZeroTermination : ensureZeroTermination});
    } catch (__error__) {

        if (is(__error__,io.FileSystemException)){
            let e : io.FileSystemException = __error__;
            let message : string = e.message;
            let osMessage : string = ((t)=>(!!t)?t.message:null)(e.osError);
            if (osMessage != null && new core.DartString(osMessage).isNotEmpty) {
                message = osMessage;
            }
            return lib6.inputError(uri,-1,message);
        }
    }
})());
export class properties {
}
