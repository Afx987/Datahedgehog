/** Library asset:datahedgehog_monitor/lib/lib/foundation/consolidate_response.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as typed_data from "@dart2ts/dart/typed_data";

export var consolidateHttpClientResponseBytes : (response : io.HttpClientResponse) => async.Future<typed_data.Uint8List> = (response : io.HttpClientResponse) : async.Future<typed_data.Uint8List> =>  {
    let completer : async.DartCompleter<typed_data.Uint8List> = op(Op.LT,async.DartCompleter<T>,typed_data.Uint8List);
    op(Op.GT,,.sync());
    let chunks : core.DartList<core.DartList<number>> = new core.DartList.literal<core.DartList<number>>();
    let contentLength : number = 0;
    response.listen((chunk : core.DartList<number>) =>  {
        chunks.add(chunk);
        contentLength += chunk.length;
    },{
        onDone : () =>  {
            let bytes : typed_data.Uint8List = typed_data.Uint8List(contentLength);
            let offset : number = 0;
            for(let chunk of chunks) {
                bytes.setRange(offset,offset + chunk.length,chunk);
                offset += chunk.length;
            }
            completer.complete(bytes);
        },onError : completer.completeError.bind(completer),cancelOnError : true});
    return completer.future;
};
export class properties {
}
