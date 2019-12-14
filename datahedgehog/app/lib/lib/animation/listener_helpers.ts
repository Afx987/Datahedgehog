/** Library asset:datahedgehog_monitor/lib/lib/animation/listener_helpers.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/observer_list";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/assertions";
import * as lib5 from "./animation";

export var AnimationLazyListenerMixin : () => any = () : any =>  {
    let _listenerCounter : number = 0;
    var didRegisterListener : () => any = () : any =>  {
        /* TODO (AssertStatementImpl) : assert (_listenerCounter >= 0); */;
        if (_listenerCounter == 0) didStartListening();
        _listenerCounter += 1;
    };
    var didUnregisterListener : () => any = () : any =>  {
        /* TODO (AssertStatementImpl) : assert (_listenerCounter >= 1); */;
        _listenerCounter -= 1;
        if (_listenerCounter == 0) didStopListening();
    };
    var didStartListening : () => any = () : any =>  {
    };
    var didStopListening : () => any = () : any =>  {
    };
    var isListening : () => boolean = () : boolean =>  {
        return _listenerCounter > 0;
    };
};
export var AnimationEagerListenerMixin : () => any = () : any =>  {
    var didRegisterListener : () => any = () : any =>  {
    };
    var didUnregisterListener : () => any = () : any =>  {
    };
    var dispose : () => any = () : any =>  {
    };
};
export var AnimationLocalListenersMixin : () => any = () : any =>  {
    let _listeners : lib3.ObserverList<any> = lib3.ObserverList();
    var didRegisterListener : () => any = () : any =>  {
    };
    var didUnregisterListener : () => any = () : any =>  {
    };
    var addListener : (listener : any) => any = (listener : any) : any =>  {
        didRegisterListener();
        _listeners.add(listener);
    };
    var removeListener : (listener : any) => any = (listener : any) : any =>  {
        let removed : boolean = _listeners.remove(listener);
        if (removed) {
            didUnregisterListener();
        }
    };
    var notifyListeners : () => any = () : any =>  {
        let localListeners : core.DartList<any> = op(Op.LT,core.DartList<E>,VoidCallback);
        op(Op.GT,,.from(_listeners));
        for(let listener of localListeners) {
            try {
                if (_listeners.contains(listener)) listener();
            } catch (__error__) {

                {
                    let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let exception = __error__;
                    lib4.FlutterError.reportError(lib4.FlutterErrorDetails({
                        exception : exception,stack : stack,library : 'animation library',context : `while notifying listeners for ${runtimeType}`,informationCollector : (information : core.DartStringBuffer) =>  {
                            information.writeln(`The ${runtimeType} notifying listeners was:`);
                            information.write(`  ${this}`);
                        }}));
                }
            }
        }
    };
};
export var AnimationLocalStatusListenersMixin : () => any = () : any =>  {
    let _statusListeners : lib3.ObserverList<(status : lib5.AnimationStatus) => any> = lib3.ObserverList();
    var didRegisterListener : () => any = () : any =>  {
    };
    var didUnregisterListener : () => any = () : any =>  {
    };
    var addStatusListener : (listener : (status : lib5.AnimationStatus) => any) => any = (listener : (status : lib5.AnimationStatus) => any) : any =>  {
        didRegisterListener();
        _statusListeners.add(listener);
    };
    var removeStatusListener : (listener : (status : lib5.AnimationStatus) => any) => any = (listener : (status : lib5.AnimationStatus) => any) : any =>  {
        let removed : boolean = _statusListeners.remove(listener);
        if (removed) {
            didUnregisterListener();
        }
    };
    var notifyStatusListeners : (status : lib5.AnimationStatus) => any = (status : lib5.AnimationStatus) : any =>  {
        let localListeners : core.DartList<(status : lib5.AnimationStatus) => any> = op(Op.LT,core.DartList<E>,lib5.AnimationStatusListener);
        op(Op.GT,,.from(_statusListeners));
        for(let listener of localListeners) {
            try {
                if (_statusListeners.contains(listener)) listener(status);
            } catch (__error__) {

                {
                    let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let exception = __error__;
                    lib4.FlutterError.reportError(lib4.FlutterErrorDetails({
                        exception : exception,stack : stack,library : 'animation library',context : `while notifying status listeners for ${runtimeType}`,informationCollector : (information : core.DartStringBuffer) =>  {
                            information.writeln(`The ${runtimeType} notifying status listeners was:`);
                            information.write(`  ${this}`);
                        }}));
                }
            }
        }
    };
};
export class properties {
}
