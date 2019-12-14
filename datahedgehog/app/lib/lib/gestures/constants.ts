/** Library asset:datahedgehog_monitor/lib/lib/gestures/constants.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export class properties {
    private static __$kPressTimeout : core.DartDuration;
    static get kPressTimeout() : core.DartDuration { 
        if (this.__$kPressTimeout===undefined) {
            this.__$kPressTimeout = core.DartDuration({
                milliseconds : 100});
        }
        return this.__$kPressTimeout;
    }
    static set kPressTimeout(__$value : core.DartDuration)  { 
        this.__$kPressTimeout = __$value;
    }

    private static __$kHoverTapTimeout : core.DartDuration;
    static get kHoverTapTimeout() : core.DartDuration { 
        if (this.__$kHoverTapTimeout===undefined) {
            this.__$kHoverTapTimeout = core.DartDuration({
                milliseconds : 150});
        }
        return this.__$kHoverTapTimeout;
    }
    static set kHoverTapTimeout(__$value : core.DartDuration)  { 
        this.__$kHoverTapTimeout = __$value;
    }

    private static __$kHoverTapSlop : double;
    static get kHoverTapSlop() : double { 
        if (this.__$kHoverTapSlop===undefined) {
            this.__$kHoverTapSlop = 20.0;
        }
        return this.__$kHoverTapSlop;
    }
    static set kHoverTapSlop(__$value : double)  { 
        this.__$kHoverTapSlop = __$value;
    }

    private static __$kLongPressTimeout : core.DartDuration;
    static get kLongPressTimeout() : core.DartDuration { 
        if (this.__$kLongPressTimeout===undefined) {
            this.__$kLongPressTimeout = core.DartDuration({
                milliseconds : 500});
        }
        return this.__$kLongPressTimeout;
    }
    static set kLongPressTimeout(__$value : core.DartDuration)  { 
        this.__$kLongPressTimeout = __$value;
    }

    private static __$kDoubleTapTimeout : core.DartDuration;
    static get kDoubleTapTimeout() : core.DartDuration { 
        if (this.__$kDoubleTapTimeout===undefined) {
            this.__$kDoubleTapTimeout = core.DartDuration({
                milliseconds : 300});
        }
        return this.__$kDoubleTapTimeout;
    }
    static set kDoubleTapTimeout(__$value : core.DartDuration)  { 
        this.__$kDoubleTapTimeout = __$value;
    }

    private static __$kDoubleTapMinTime : core.DartDuration;
    static get kDoubleTapMinTime() : core.DartDuration { 
        if (this.__$kDoubleTapMinTime===undefined) {
            this.__$kDoubleTapMinTime = core.DartDuration({
                milliseconds : 40});
        }
        return this.__$kDoubleTapMinTime;
    }
    static set kDoubleTapMinTime(__$value : core.DartDuration)  { 
        this.__$kDoubleTapMinTime = __$value;
    }

    private static __$kDoubleTapTouchSlop : double;
    static get kDoubleTapTouchSlop() : double { 
        if (this.__$kDoubleTapTouchSlop===undefined) {
            this.__$kDoubleTapTouchSlop = properties.kTouchSlop;
        }
        return this.__$kDoubleTapTouchSlop;
    }
    static set kDoubleTapTouchSlop(__$value : double)  { 
        this.__$kDoubleTapTouchSlop = __$value;
    }

    private static __$kDoubleTapSlop : double;
    static get kDoubleTapSlop() : double { 
        if (this.__$kDoubleTapSlop===undefined) {
            this.__$kDoubleTapSlop = 100.0;
        }
        return this.__$kDoubleTapSlop;
    }
    static set kDoubleTapSlop(__$value : double)  { 
        this.__$kDoubleTapSlop = __$value;
    }

    private static __$kZoomControlsTimeout : core.DartDuration;
    static get kZoomControlsTimeout() : core.DartDuration { 
        if (this.__$kZoomControlsTimeout===undefined) {
            this.__$kZoomControlsTimeout = core.DartDuration({
                milliseconds : 3000});
        }
        return this.__$kZoomControlsTimeout;
    }
    static set kZoomControlsTimeout(__$value : core.DartDuration)  { 
        this.__$kZoomControlsTimeout = __$value;
    }

    private static __$kTouchSlop : double;
    static get kTouchSlop() : double { 
        if (this.__$kTouchSlop===undefined) {
            this.__$kTouchSlop = 18.0;
        }
        return this.__$kTouchSlop;
    }
    static set kTouchSlop(__$value : double)  { 
        this.__$kTouchSlop = __$value;
    }

    private static __$kPagingTouchSlop : double;
    static get kPagingTouchSlop() : double { 
        if (this.__$kPagingTouchSlop===undefined) {
            this.__$kPagingTouchSlop = properties.kTouchSlop * 2.0;
        }
        return this.__$kPagingTouchSlop;
    }
    static set kPagingTouchSlop(__$value : double)  { 
        this.__$kPagingTouchSlop = __$value;
    }

    private static __$kPanSlop : double;
    static get kPanSlop() : double { 
        if (this.__$kPanSlop===undefined) {
            this.__$kPanSlop = properties.kTouchSlop * 2.0;
        }
        return this.__$kPanSlop;
    }
    static set kPanSlop(__$value : double)  { 
        this.__$kPanSlop = __$value;
    }

    private static __$kScaleSlop : double;
    static get kScaleSlop() : double { 
        if (this.__$kScaleSlop===undefined) {
            this.__$kScaleSlop = properties.kTouchSlop;
        }
        return this.__$kScaleSlop;
    }
    static set kScaleSlop(__$value : double)  { 
        this.__$kScaleSlop = __$value;
    }

    private static __$kWindowTouchSlop : double;
    static get kWindowTouchSlop() : double { 
        if (this.__$kWindowTouchSlop===undefined) {
            this.__$kWindowTouchSlop = 16.0;
        }
        return this.__$kWindowTouchSlop;
    }
    static set kWindowTouchSlop(__$value : double)  { 
        this.__$kWindowTouchSlop = __$value;
    }

    private static __$kMinFlingVelocity : double;
    static get kMinFlingVelocity() : double { 
        if (this.__$kMinFlingVelocity===undefined) {
            this.__$kMinFlingVelocity = 50.0;
        }
        return this.__$kMinFlingVelocity;
    }
    static set kMinFlingVelocity(__$value : double)  { 
        this.__$kMinFlingVelocity = __$value;
    }

    private static __$kMaxFlingVelocity : double;
    static get kMaxFlingVelocity() : double { 
        if (this.__$kMaxFlingVelocity===undefined) {
            this.__$kMaxFlingVelocity = 8000.0;
        }
        return this.__$kMaxFlingVelocity;
    }
    static set kMaxFlingVelocity(__$value : double)  { 
        this.__$kMaxFlingVelocity = __$value;
    }

    private static __$kJumpTapTimeout : core.DartDuration;
    static get kJumpTapTimeout() : core.DartDuration { 
        if (this.__$kJumpTapTimeout===undefined) {
            this.__$kJumpTapTimeout = core.DartDuration({
                milliseconds : 500});
        }
        return this.__$kJumpTapTimeout;
    }
    static set kJumpTapTimeout(__$value : core.DartDuration)  { 
        this.__$kJumpTapTimeout = __$value;
    }

}
