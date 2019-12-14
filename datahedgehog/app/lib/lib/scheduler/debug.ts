/** Library asset:datahedgehog_monitor/lib/lib/scheduler/debug.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var debugAssertAllSchedulerVarsUnset : (reason : string) => boolean = (reason : string) : boolean =>  {
    /* TODO (AssertStatementImpl) : assert (() {if (debugPrintBeginFrameBanner || debugPrintEndFrameBanner) {throw FlutterError(reason);} return true;}()); */;
    return true;
};
export class properties {
    private static __$debugPrintBeginFrameBanner : boolean;
    static get debugPrintBeginFrameBanner() : boolean { 
        if (this.__$debugPrintBeginFrameBanner===undefined) {
            this.__$debugPrintBeginFrameBanner = false;
        }
        return this.__$debugPrintBeginFrameBanner;
    }
    static set debugPrintBeginFrameBanner(__$value : boolean)  { 
        this.__$debugPrintBeginFrameBanner = __$value;
    }

    private static __$debugPrintEndFrameBanner : boolean;
    static get debugPrintEndFrameBanner() : boolean { 
        if (this.__$debugPrintEndFrameBanner===undefined) {
            this.__$debugPrintEndFrameBanner = false;
        }
        return this.__$debugPrintEndFrameBanner;
    }
    static set debugPrintEndFrameBanner(__$value : boolean)  { 
        this.__$debugPrintEndFrameBanner = __$value;
    }

    private static __$debugPrintScheduleFrameStacks : boolean;
    static get debugPrintScheduleFrameStacks() : boolean { 
        if (this.__$debugPrintScheduleFrameStacks===undefined) {
            this.__$debugPrintScheduleFrameStacks = false;
        }
        return this.__$debugPrintScheduleFrameStacks;
    }
    static set debugPrintScheduleFrameStacks(__$value : boolean)  { 
        this.__$debugPrintScheduleFrameStacks = __$value;
    }

}
