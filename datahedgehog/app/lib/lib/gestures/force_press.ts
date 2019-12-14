/** Library asset:datahedgehog_monitor/lib/lib/gestures/force_press.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./recognizer";
import * as lib4 from "./events";
import * as lib5 from "./arena";
import * as lib6 from "./constants";

export enum _ForceState {
    ready,
    possible,
    accepted,
    started,
    peaked
}

export namespace ForcePressDetails {
    export type Constructors = 'ForcePressDetails';
    export type Interface = Omit<ForcePressDetails, Constructors>;
}
@DartClass
export class ForcePressDetails {
    constructor(_namedArguments? : {globalPosition? : any,pressure? : double}) {
    }
    @defaultConstructor
    ForcePressDetails(_namedArguments? : {globalPosition? : any,pressure? : double}) {
        let {globalPosition,pressure} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.globalPosition = globalPosition;
        this.pressure = pressure;
    }
     : any;

     : any;

    globalPosition : any;

    pressure : double;

}

export namespace ForcePressGestureRecognizer {
    export type Constructors = lib3.OneSequenceGestureRecognizer.Constructors | 'ForcePressGestureRecognizer';
    export type Interface = Omit<ForcePressGestureRecognizer, Constructors>;
}
@DartClass
export class ForcePressGestureRecognizer extends lib3.OneSequenceGestureRecognizer {
    constructor(_namedArguments? : {startPressure? : double,peakPressure? : double,interpolation? : (pressureMin : double,pressureMax : double,pressure : double) => double,debugOwner? : core.DartObject}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ForcePressGestureRecognizer(_namedArguments? : {startPressure? : double,peakPressure? : double,interpolation? : (pressureMin : double,pressureMax : double,pressure : double) => double,debugOwner? : core.DartObject}) {
        let {startPressure,peakPressure,interpolation,debugOwner} = Object.assign({
            "startPressure" : 0.4,
            "peakPressure" : 0.85,
            "interpolation" : ForcePressGestureRecognizer._inverseLerp.bind(this)}, _namedArguments );
        this._state = _ForceState.ready;
        this.assert = assert;
        this.startPressure = startPressure;
        this.peakPressure = peakPressure;
        this.interpolation = interpolation;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    onStart : (details : ForcePressDetails) => any;

    onUpdate : (details : ForcePressDetails) => any;

    onPeak : (details : ForcePressDetails) => any;

    onEnd : (details : ForcePressDetails) => any;

    startPressure : double;

    peakPressure : double;

    interpolation : (pressureMin : double,pressureMax : double,pressure : double) => double;

    _lastPosition : any;

    _lastPressure : double;

    _state : _ForceState;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addPointer(event : lib4.PointerEvent) : any {
        this.startTrackingPointer(event.pointer);
        if (op(Op.EQUALS,this._state,_ForceState.ready)) {
            this._state = _ForceState.possible;
            this._lastPosition = event.position;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleEvent(event : lib4.PointerEvent) : any {
        /* TODO (AssertStatementImpl) : assert (_state != _ForceState.ready); */;
        if (is(event, lib4.PointerMoveEvent) || is(event, lib4.PointerDownEvent)) {
            let pressure : double = this.interpolation(event.pressureMin,event.pressureMax,event.pressure);
            /* TODO (AssertStatementImpl) : assert (event.pressure < event.pressureMin || event.pressure > event.pressureMax || pressure.isNaN || (pressure <= 1.0 && pressure >= 0.0)); */;
            this._lastPosition = event.position;
            this._lastPressure = pressure;
            if (op(Op.EQUALS,this._state,_ForceState.possible)) {
                if (pressure > this.startPressure) {
                    this._state = _ForceState.started;
                    this.resolve(lib5.GestureDisposition.accepted);
                }else if (op(Op.GT,event.delta.distanceSquared,lib6.properties.kTouchSlop)) {
                    this.resolve(lib5.GestureDisposition.rejected);
                }
            }
            if (pressure > this.startPressure && op(Op.EQUALS,this._state,_ForceState.accepted)) {
                this._state = _ForceState.started;
                if (this.onStart != null) {
                    op(Op.LT,this.invokeCallback.bind(this),);
                    op(Op.GT,,('onStart'));
                    () =>  {
                        return this.onStart(ForcePressDetails({
                            pressure : pressure,globalPosition : this._lastPosition}));
                    }
                }
            }
            if (this.onPeak != null && pressure > this.peakPressure && (op(Op.EQUALS,this._state,_ForceState.started))) {
                this._state = _ForceState.peaked;
                if (this.onPeak != null) {
                    op(Op.LT,this.invokeCallback.bind(this),);
                    op(Op.GT,,('onPeak'));
                    () =>  {
                        return this.onPeak(ForcePressDetails({
                            pressure : pressure,globalPosition : event.position}));
                    }
                }
            }
            if (this.onUpdate != null && (op(Op.EQUALS,this._state,_ForceState.started) || op(Op.EQUALS,this._state,_ForceState.peaked))) {
                if (this.onUpdate != null) {
                    op(Op.LT,this.invokeCallback.bind(this),);
                    op(Op.GT,,('onUpdate'));
                    () =>  {
                        return this.onUpdate(ForcePressDetails({
                            pressure : pressure,globalPosition : event.position}));
                    }
                }
            }
        }
        this.stopTrackingIfPointerNoLongerDown(event);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    acceptGesture(pointer : number) : any {
        if (op(Op.EQUALS,this._state,_ForceState.possible)) this._state = _ForceState.accepted;
        if (this.onStart != null && op(Op.EQUALS,this._state,_ForceState.started)) {
            op(Op.LT,this.invokeCallback.bind(this),);
            op(Op.GT,,('onStart'));
            () =>  {
                return this.onStart(ForcePressDetails({
                    pressure : this._lastPressure,globalPosition : this._lastPosition}));
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didStopTrackingLastPointer(pointer : number) : any {
        let wasAccepted : boolean = op(Op.EQUALS,this._state,_ForceState.started) || op(Op.EQUALS,this._state,_ForceState.peaked);
        if (op(Op.EQUALS,this._state,_ForceState.possible)) {
            this.resolve(lib5.GestureDisposition.rejected);
            return;
        }
        if (wasAccepted && this.onEnd != null) {
            if (this.onEnd != null) {
                op(Op.LT,this.invokeCallback.bind(this),);
                op(Op.GT,,('onEnd'));
                () =>  {
                    return this.onEnd(ForcePressDetails({
                        pressure : 0.0,globalPosition : this._lastPosition}));
                }
            }
        }
        this._state = _ForceState.ready;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rejectGesture(pointer : number) : any {
        this.stopTrackingPointer(pointer);
        this.didStopTrackingLastPointer(pointer);
    }
    static _inverseLerp(min : double,max : double,t : double) : double {
        /* TODO (AssertStatementImpl) : assert (min <= max); */;
        return (t - min) / (max - min);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get debugDescription() : string {
        return 'force press';
    }
}

export class properties {
}
