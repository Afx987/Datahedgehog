/** Library asset:datahedgehog_monitor/lib/lib/gestures/debug.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var debugAssertAllGesturesVarsUnset : (reason : string) => boolean = (reason : string) : boolean =>  {
    /* TODO (AssertStatementImpl) : assert (() {if (debugPrintHitTestResults || debugPrintGestureArenaDiagnostics || debugPrintRecognizerCallbacksTrace) throw FlutterError(reason); return true;}()); */;
    return true;
};
export class properties {
    private static __$debugPrintHitTestResults : boolean;
    static get debugPrintHitTestResults() : boolean { 
        if (this.__$debugPrintHitTestResults===undefined) {
            this.__$debugPrintHitTestResults = false;
        }
        return this.__$debugPrintHitTestResults;
    }
    static set debugPrintHitTestResults(__$value : boolean)  { 
        this.__$debugPrintHitTestResults = __$value;
    }

    private static __$debugPrintMouseHoverEvents : boolean;
    static get debugPrintMouseHoverEvents() : boolean { 
        if (this.__$debugPrintMouseHoverEvents===undefined) {
            this.__$debugPrintMouseHoverEvents = false;
        }
        return this.__$debugPrintMouseHoverEvents;
    }
    static set debugPrintMouseHoverEvents(__$value : boolean)  { 
        this.__$debugPrintMouseHoverEvents = __$value;
    }

    private static __$debugPrintGestureArenaDiagnostics : boolean;
    static get debugPrintGestureArenaDiagnostics() : boolean { 
        if (this.__$debugPrintGestureArenaDiagnostics===undefined) {
            this.__$debugPrintGestureArenaDiagnostics = false;
        }
        return this.__$debugPrintGestureArenaDiagnostics;
    }
    static set debugPrintGestureArenaDiagnostics(__$value : boolean)  { 
        this.__$debugPrintGestureArenaDiagnostics = __$value;
    }

    private static __$debugPrintRecognizerCallbacksTrace : boolean;
    static get debugPrintRecognizerCallbacksTrace() : boolean { 
        if (this.__$debugPrintRecognizerCallbacksTrace===undefined) {
            this.__$debugPrintRecognizerCallbacksTrace = false;
        }
        return this.__$debugPrintRecognizerCallbacksTrace;
    }
    static set debugPrintRecognizerCallbacksTrace(__$value : boolean)  { 
        this.__$debugPrintRecognizerCallbacksTrace = __$value;
    }

}
