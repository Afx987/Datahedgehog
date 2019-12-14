/** Library asset:datahedgehog_monitor/lib/lib/services/platform_messages.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/assertions";

export namespace BinaryMessages {
    export type Constructors = '_';
    export type Interface = Omit<BinaryMessages, Constructors>;
}
@DartClass
export class BinaryMessages {
    @namedConstructor
    _() {
    }
    static _ : new() => BinaryMessages;

    private static __$_handlers : core.DartMap<string,(message : typed_data.ByteData) => async.Future<typed_data.ByteData>>;
    static get _handlers() : core.DartMap<string,(message : typed_data.ByteData) => async.Future<typed_data.ByteData>> { 
        if (this.__$_handlers===undefined) {
            this.__$_handlers = new core.DartMap.literal([
            ]);
        }
        return this.__$_handlers;
    }
    static set _handlers(__$value : core.DartMap<string,(message : typed_data.ByteData) => async.Future<typed_data.ByteData>>)  { 
        this.__$_handlers = __$value;
    }

    private static __$_mockHandlers : core.DartMap<string,(message : typed_data.ByteData) => async.Future<typed_data.ByteData>>;
    static get _mockHandlers() : core.DartMap<string,(message : typed_data.ByteData) => async.Future<typed_data.ByteData>> { 
        if (this.__$_mockHandlers===undefined) {
            this.__$_mockHandlers = new core.DartMap.literal([
            ]);
        }
        return this.__$_mockHandlers;
    }
    static set _mockHandlers(__$value : core.DartMap<string,(message : typed_data.ByteData) => async.Future<typed_data.ByteData>>)  { 
        this.__$_mockHandlers = __$value;
    }

    static _sendPlatformMessage(channel : string,message : typed_data.ByteData) : async.Future<typed_data.ByteData> {
        let completer : async.DartCompleter<typed_data.ByteData> = async.DartCompleter();
        ui.window.sendPlatformMessage(channel,message,(reply : typed_data.ByteData) =>  {
            try {
                completer.complete(reply);
            } catch (__error__) {

                {
                    let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let exception = __error__;
                    lib4.FlutterError.reportError(lib4.FlutterErrorDetails({
                        exception : exception,stack : stack,library : 'services library',context : 'during a platform message response callback'}));
                }
            }
        });
        return completer.future;
    }
    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

    handlePlatformMessage(channel : string,data : typed_data.ByteData,callback : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let response : typed_data.ByteData;
            try {
                let handler : (message : typed_data.ByteData) => async.Future<typed_data.ByteData> = BinaryMessages._handlers.get(channel);
                if (handler != null) response = await handler(data);
            } catch (__error__) {

                {
                    let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let exception = __error__;
                    lib4.FlutterError.reportError(lib4.FlutterErrorDetails({
                        exception : exception,stack : stack,library : 'services library',context : 'during a platform message callback'}));
                }
            } finally {
                callback(response);
            }
        } )());
    }

    static send(channel : string,message : typed_data.ByteData) : async.Future<typed_data.ByteData> {
        let handler : (message : typed_data.ByteData) => async.Future<typed_data.ByteData> = BinaryMessages._mockHandlers.get(channel);
        if (handler != null) return handler(message);
        return BinaryMessages._sendPlatformMessage(channel,message);
    }
    static setMessageHandler(channel : string,handler : (message : typed_data.ByteData) => async.Future<typed_data.ByteData>) : any {
        if (op(Op.EQUALS,handler,null)) BinaryMessages._handlers.remove(channel);else BinaryMessages._handlers.set(channel,handler);
    }
    static setMockMessageHandler(channel : string,handler : (message : typed_data.ByteData) => async.Future<typed_data.ByteData>) : any {
        if (op(Op.EQUALS,handler,null)) BinaryMessages._mockHandlers.remove(channel);else BinaryMessages._mockHandlers.set(channel,handler);
    }
}

export class properties {
}
