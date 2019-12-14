/** Library asset:datahedgehog_monitor/lib/lib/foundation/debug.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./print";

export var debugAssertAllFoundationVarsUnset : (reason : string,_namedArguments? : {debugPrintOverride? : (message : string,_namedArguments : {wrapWidth? : number?}) => any}) => boolean = (reason : string,_namedArguments? : {debugPrintOverride? : (message : string,_namedArguments : {wrapWidth? : number?}) => any}) : boolean =>  {
    let {debugPrintOverride} = Object.assign({
        "debugPrintOverride" : lib3.debugPrintThrottled}, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (() {if (debugPrint != debugPrintOverride || debugDefaultTargetPlatformOverride != null) throw FlutterError(reason); return true;}()); */;
    return true;
};
export var debugInstrumentAction : <T>(description : string,action : <T>() => async.Future<T>) => async.Future<T> = <T>(description : string,action : <T>() => async.Future<T>) : async.Future<T> =>  {
    let instrument : boolean = false;
    /* TODO (AssertStatementImpl) : assert (() {instrument = debugInstrumentationEnabled; return true;}()); */;
    if (instrument) {
        let stopwatch : core.DartStopwatch = ((_) : any =>  {
            {
                start();
                return _;
            }
        })(core.DartStopwatch());
        return action().whenComplete(() =>  {
            stopwatch.stop();
            lib3.properties.debugPrint(`Action "${description}" took ${stopwatch.elapsed}`);
        });
    }else {
        return action();
    }
};
export class properties {
    private static __$debugInstrumentationEnabled : boolean;
    static get debugInstrumentationEnabled() : boolean { 
        if (this.__$debugInstrumentationEnabled===undefined) {
            this.__$debugInstrumentationEnabled = false;
        }
        return this.__$debugInstrumentationEnabled;
    }
    static set debugInstrumentationEnabled(__$value : boolean)  { 
        this.__$debugInstrumentationEnabled = __$value;
    }

    private static __$timelineWhitelistArguments : core.DartMap<string,string>;
    static get timelineWhitelistArguments() : core.DartMap<string,string> { 
        if (this.__$timelineWhitelistArguments===undefined) {
            this.__$timelineWhitelistArguments = new core.DartMap.literal([
                ['mode','basic']]);
        }
        return this.__$timelineWhitelistArguments;
    }
    static set timelineWhitelistArguments(__$value : core.DartMap<string,string>)  { 
        this.__$timelineWhitelistArguments = __$value;
    }

}
