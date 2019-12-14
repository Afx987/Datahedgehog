/** Library asset:datahedgehog_monitor/lib/lib/_internal/pub/asset/dart/serialize.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/source_span/lib/src/span";
import * as lib4 from "@dart2ts.packages/source_span/lib/src/location";
import * as isolate from "@dart2ts/dart/isolate";
import * as lib6 from "./serialize/exception";
import * as lib7 from "@dart2ts.packages/async/lib/src/lazy_stream";

export var serializeId : (id : any) => core.DartMap<any,any> = (id : any) : core.DartMap<any,any> =>  {
    return new core.DartMap.literal([
        ['package',id.package],
        ['path',id.path]]);
};
export var deserializeId : (id : core.DartMap<any,any>) => any = (id : core.DartMap<any,any>) : any =>  {
    return new bare.createInstance(any,null,id.get('package'),id.get('path'));
};
export var serializeSpan : (span : any) => core.DartMap<any,any> = (span : any) : core.DartMap<any,any> =>  {
    return new core.DartMap.literal([
        ['sourceUrl',span.sourceUrl.toString()],
        ['start',serializeLocation(span.start)],
        ['end',serializeLocation(span.end)],
        ['text',span.text]]);
};
export var deserializeSpan : (span : core.DartMap<any,any>) => lib3.SourceSpan = (span : core.DartMap<any,any>) : lib3.SourceSpan =>  {
    return new lib3.SourceSpan(deserializeLocation(span.get('start')),deserializeLocation(span.get('end')),span.get('text'));
};
export var serializeLocation : (location : any) => core.DartMap<any,any> = (location : any) : core.DartMap<any,any> =>  {
    if (is(location, lib4.SourceLocation)) {
        return new core.DartMap.literal([
            ['sourceUrl',location.sourceUrl.toString()],
            ['offset',location.offset],
            ['line',location.line],
            ['column',location.column]]);
    }
    throw new core.ArgumentError(`Unknown type ${location.runtimeType} for location.`);
};
export var deserializeLocation : (location : core.DartMap<any,any>) => lib4.SourceLocation = (location : core.DartMap<any,any>) : lib4.SourceLocation =>  {
    return new lib4.SourceLocation(location.get('offset'),{
        sourceUrl : location.get('sourceUrl'),line : location.get('line'),column : location.get('column')});
};
export var serializeStream : (stream : async.DartStream<any>,serializeEvent : (event : any) => any) => core.DartMap<any,any> = (stream : async.DartStream<any>,serializeEvent : (event : any) => any) : core.DartMap<any,any> =>  {
    let receivePort = new isolate.ReceivePort();
    let map = new core.DartMap.literal([
        ['replyTo',receivePort.sendPort]]);
    receivePort.first.then((message : any) =>  {
        let sendPort = op(Op.INDEX,message,'replyTo');
        stream.listen((event : any) =>  {
            sendPort.send(new core.DartMap.literal([
                ['type','event'],
                ['value',serializeEvent(event)]]));
        },{
            onError : (error : any,stackTrace : any) =>  {
                sendPort.send(new core.DartMap.literal([
                    ['type','error'],
                    ['error',lib6.serializeException(error,stackTrace)]]));
            },onDone : () =>  {
                return sendPort.send(new core.DartMap.literal([
                    ['type','done']]));
            }});
    });
    return map;
};
export var deserializeStream : (stream : core.DartMap<any,any>,deserializeEvent : (event : any) => any) => async.DartStream<any> = (stream : core.DartMap<any,any>,deserializeEvent : (event : any) => any) : async.DartStream<any> =>  {
    return new lib7.LazyStream<any>(() =>  {
        let receivePort = new isolate.ReceivePort();
        stream.get('replyTo').send(new core.DartMap.literal([
            ['replyTo',receivePort.sendPort]]));
        let controller = new async.DartStreamController<any>({
            sync : true});
        receivePort.listen((event : any) =>  {
            switch (op(Op.INDEX,event,'type')) {
                case 'event':
                    controller.add(deserializeEvent(op(Op.INDEX,event,'value')));
                    break;
                case 'error':
                    let exception = lib6.deserializeException(op(Op.INDEX,event,'error'));
                    controller.addError(exception,exception.stackTrace);
                    break;
                case 'done':
                    controller.close();
                    receivePort.close();
                    break;
            }
        });
        return controller.stream;
    });
};
export var call : (port : isolate.SendPort,message : any) => async.Future<any> = (port : isolate.SendPort,message : any) : async.Future<any> =>  {
    let receivePort = new isolate.ReceivePort();
    port.send(new core.DartMap.literal([
        ['message',message],
        ['replyTo',receivePort.sendPort]]));
    return new async.Future.sync(() => new async.Future.fromPromise(( async () : Promise<any> =>  {
        let response = await receivePort.first;
        if (op(Op.EQUALS,op(Op.INDEX,response,'type'),'success')) {
            return op(Op.INDEX,response,'value') as any;
        }
        /* TODO (AssertStatementImpl) : assert (response['type'] == 'error'); */;
        let exception = lib6.deserializeException(op(Op.INDEX,response,'error'));
        return new async.Future.error(exception,exception.stackTrace);
    })()));
};
export var respond : (wrappedMessage : any,callback : (message : any) => any) => void = (wrappedMessage : any,callback : (message : any) => any) : void =>  {
    let replyTo = op(Op.INDEX,wrappedMessage,'replyTo');
    new async.Future.sync(() =>  {
        return callback(op(Op.INDEX,wrappedMessage,'message'));
    }).then((result : any) =>  {
        return replyTo.send(new core.DartMap.literal([
            ['type','success'],
            ['value',result]]));
    }).catchError((error : any,stackTrace : any) =>  {
        replyTo.send(new core.DartMap.literal([
            ['type','error'],
            ['error',lib6.serializeException(error,stackTrace)]]));
    });
};
export class properties {
}
