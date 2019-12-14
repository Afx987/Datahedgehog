/** Library asset:datahedgehog_monitor/lib/lib/material/feedback.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/semantics/semantics_event";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/services/system_sound";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/services/haptic_feedback";
import * as lib8 from "./theme";

export namespace Feedback {
    export type Constructors = '_';
    export type Interface = Omit<Feedback, Constructors>;
}
@DartClass
export class Feedback {
    @namedConstructor
    _() {
    }
    static _ : new() => Feedback;

    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

    forTap(context : lib3.BuildContext) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            context.findRenderObject().sendSemanticsEvent(new lib4.TapSemanticEvent());
            switch (Feedback._platform(context)) {
                case lib5.TargetPlatform.android:
                case lib5.TargetPlatform.fuchsia:
                    return lib6.SystemSound.play(lib6.SystemSoundType.click);
                default:
                    return op(Op.LT,async.Future<T>,);
                    op(Op.GT,,.value());
            }
        } )());
    }

    static wrapForTap(callback : () => any,context : lib3.BuildContext) : () => any {
        if (op(Op.EQUALS,callback,null)) return null;
        return () =>  {
            Feedback.forTap(context);
            callback();
        };
    }
    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

    forLongPress(context : lib3.BuildContext) {
        context.findRenderObject().sendSemanticsEvent(new lib4.LongPressSemanticsEvent());
        switch (Feedback._platform(context)) {
            case lib5.TargetPlatform.android:
            case lib5.TargetPlatform.fuchsia:
                return lib7.HapticFeedback.vibrate();
            default:
                return op(Op.LT,async.Future<T>,);
                op(Op.GT,,.value());
        }
    }
    static wrapForLongPress(callback : () => void,context : lib3.BuildContext) : () => void {
        if (op(Op.EQUALS,callback,null)) return null;
        return () =>  {
            Feedback.forLongPress(context);
            callback();
        };
    }
    static _platform(context : lib3.BuildContext) : lib5.TargetPlatform {
        return lib8.Theme.of(context).platform;
    }
}

export class properties {
}
