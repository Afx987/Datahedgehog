/** Library asset:datahedgehog_monitor/lib/lib/front_end/tool/example.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var dumpToSink : (program : any,sink : async.DartStreamSink<core.DartList<number>>) => async.Future<any> = (program : any,sink : async.DartStreamSink<core.DartList<number>>) : async.Future<any> =>  {
    new bare.createInstance(any,null,sink).writeProgramFile(program);
    return sink.close();
};
export var kernelToSink : (entry : lib3.Uri,sink : async.DartStreamSink<core.DartList<number>>) => async.Future<any> = (entry : lib3.Uri,sink : async.DartStreamSink<core.DartList<number>>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let program = await kernelForProgram(entry,((_) : any =>  {
        {
            _.sdkRoot = new lib3.Uri.file('sdk');
            _.packagesFileUri = new lib3.Uri.file('.packages');
            _.onError = (e : any) =>  {
                return core.print(e.message);
            };
            return _;
        }
    })(new bare.createInstance(any,null)));
    await dumpToSink(program,sink);
})());
export var main : (args : any) => any = (args : any) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    kernelToSink(lib3.Uri.base.resolve(op(Op.INDEX,args,0)),new async.DartStreamController.broadcast().sink);
})());
export class properties {
}
