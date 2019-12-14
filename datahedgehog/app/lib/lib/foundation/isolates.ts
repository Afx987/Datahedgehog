/** Library asset:datahedgehog_monitor/lib/lib/foundation/isolates.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./profile";
import * as developer from "@dart2ts/dart/developer";
import * as isolate from "@dart2ts/dart/isolate";

export var compute : <Q,R>(callback : <Q,R>(message : Q) => R,message : Q,_namedArguments? : {debugLabel? : string}) => async.Future<R> = <Q,R>(callback : <Q,R>(message : Q) => R,message : Q,_namedArguments? : {debugLabel? : string}) => new async.Future.fromPromise(( async () : Promise<R> =>  {
    let {debugLabel} = Object.assign({
    }, _namedArguments );
    lib3.profile(() =>  {
        debugLabel = ( debugLabel ) || ( callback.toString() );
    });
    let flow : any = Flow.begin();
    developer.Timeline.startSync(`${debugLabel}: start`,{
        flow : flow});
    let resultPort : isolate.ReceivePort = isolate.ReceivePort();
    let errorPort : isolate.ReceivePort = isolate.ReceivePort();
    developer.Timeline.finishSync();
    let isolate : isolate.Isolate = await isolate.Isolate.spawn(_spawn,_IsolateConfiguration(callback,message,resultPort.sendPort,debugLabel,flow.id),{
        errorsAreFatal : true,onExit : resultPort.sendPort,onError : errorPort.sendPort});
    let result : async.DartCompleter<R> = async.DartCompleter();
    errorPort.listen((errorData : any) =>  {
        /* TODO (AssertStatementImpl) : assert (errorData is List<dynamic>); */;
        /* TODO (AssertStatementImpl) : assert (errorData.length == 2); */;
        let exception : core.Exception = core.Exception(errorData[0]);
        let stack : core.DartStackTrace = core.DartStackTrace.fromString(errorData[1]);
        if (result.isCompleted) {
            async.DartZone.current.handleUncaughtError(exception,stack);
        }else {
            result.completeError(exception,stack);
        }
    });
    resultPort.listen((resultData : any) =>  {
        /* TODO (AssertStatementImpl) : assert (resultData == null || resultData is R); */;
        if (!result.isCompleted) result.complete(resultData);
    });
    await result.future;
    developer.Timeline.startSync(`${debugLabel}: end`,{
        flow : Flow.end(flow.id)});
    resultPort.close();
    errorPort.close();
    isolate.kill();
    developer.Timeline.finishSync();
    return result.future;
})());
export var _spawn : <Q,R>(configuration : _IsolateConfiguration<Q,R>) => void = <Q,R>(configuration : _IsolateConfiguration<Q,R>) : void =>  {
    let result : R;
    developer.Timeline.timeSync(`${configuration.debugLabel}`,() =>  {
        result = configuration.apply();
    },{
        flow : Flow.step(configuration.flowId)});
    developer.Timeline.timeSync(`${configuration.debugLabel}: returning result`,() =>  {
        configuration.resultPort.send(result);
    },{
        flow : Flow.step(configuration.flowId)});
};
export namespace _IsolateConfiguration {
    export type Constructors = '_IsolateConfiguration';
    export type Interface<Q,R> = Omit<_IsolateConfiguration<Q,R>, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class _IsolateConfiguration<Q,R> {
    constructor(callback : <Q,R>(message : Q) => R,message : Q,resultPort : isolate.SendPort,debugLabel : string,flowId : number) {
    }
    @defaultConstructor
    _IsolateConfiguration(callback : <Q,R>(message : Q) => R,message : Q,resultPort : isolate.SendPort,debugLabel : string,flowId : number) {
        this.callback = callback;
        this.message = message;
        this.resultPort = resultPort;
        this.debugLabel = debugLabel;
        this.flowId = flowId;
    }
    callback : <Q,R>(message : Q) => R;

    message : Q;

    resultPort : isolate.SendPort;

    debugLabel : string;

    flowId : number;

    apply() : R {
        return this.callback(this.message);
    }
}

export class properties {
}
