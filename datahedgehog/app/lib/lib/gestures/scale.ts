/** Library asset:datahedgehog_monitor/lib/lib/gestures/scale.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./velocity_tracker";
import * as lib4 from "./constants";
import * as lib5 from "./recognizer";
import * as math from "@dart2ts/dart/math";
import * as lib7 from "./events";
import * as lib8 from "./arena";

export var _isFlingGesture : (velocity : lib3.Velocity) => boolean = (velocity : lib3.Velocity) : boolean =>  {
    /* TODO (AssertStatementImpl) : assert (velocity != null); */;
    let speedSquared : double = velocity.pixelsPerSecond.distanceSquared;
    return speedSquared > lib4.properties.kMinFlingVelocity * lib4.properties.kMinFlingVelocity;
};
export enum _ScaleState {
    ready,
    possible,
    accepted,
    started
}

export namespace ScaleStartDetails {
    export type Constructors = 'ScaleStartDetails';
    export type Interface = Omit<ScaleStartDetails, Constructors>;
}
@DartClass
export class ScaleStartDetails {
    constructor(_namedArguments? : {focalPoint? : any}) {
    }
    @defaultConstructor
    ScaleStartDetails(_namedArguments? : {focalPoint? : any}) {
        let {focalPoint} = Object.assign({
            "focalPoint" : Offset.zero}, _namedArguments );
        this.assert = assert;
        this.focalPoint = focalPoint;
    }
     : any;

    focalPoint : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `ScaleStartDetails(focalPoint: ${this.focalPoint})`;
    }
}

export namespace ScaleUpdateDetails {
    export type Constructors = 'ScaleUpdateDetails';
    export type Interface = Omit<ScaleUpdateDetails, Constructors>;
}
@DartClass
export class ScaleUpdateDetails {
    constructor(_namedArguments? : {focalPoint? : any,scale? : double,horizontalScale? : double,verticalScale? : double,rotation? : double}) {
    }
    @defaultConstructor
    ScaleUpdateDetails(_namedArguments? : {focalPoint? : any,scale? : double,horizontalScale? : double,verticalScale? : double,rotation? : double}) {
        let {focalPoint,scale,horizontalScale,verticalScale,rotation} = Object.assign({
            "focalPoint" : Offset.zero,
            "scale" : 1.0,
            "horizontalScale" : 1.0,
            "verticalScale" : 1.0,
            "rotation" : 0.0}, _namedArguments );
        this.assert = assert;
        this.focalPoint = focalPoint;
        this.scale = scale;
        this.horizontalScale = horizontalScale;
        this.verticalScale = verticalScale;
        this.rotation = rotation;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    focalPoint : any;

    scale : double;

    horizontalScale : double;

    verticalScale : double;

    rotation : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `ScaleUpdateDetails(focalPoint: ${this.focalPoint}, scale: ${this.scale}, horizontalScale: ${this.horizontalScale}, verticalScale: ${this.verticalScale}, rotation: ${this.rotation})`;
    }
}

export namespace ScaleEndDetails {
    export type Constructors = 'ScaleEndDetails';
    export type Interface = Omit<ScaleEndDetails, Constructors>;
}
@DartClass
export class ScaleEndDetails {
    constructor(_namedArguments? : {velocity? : lib3.Velocity}) {
    }
    @defaultConstructor
    ScaleEndDetails(_namedArguments? : {velocity? : lib3.Velocity}) {
        let {velocity} = Object.assign({
            "velocity" : lib3.Velocity.zero}, _namedArguments );
        this.assert = assert;
        this.velocity = velocity;
    }
     : any;

    velocity : lib3.Velocity;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `ScaleEndDetails(velocity: ${this.velocity})`;
    }
}

export namespace _LineBetweenPointers {
    export type Constructors = '_LineBetweenPointers';
    export type Interface = Omit<_LineBetweenPointers, Constructors>;
}
@DartClass
export class _LineBetweenPointers {
    constructor(_namedArguments? : {pointerStartLocation? : any,pointerStartId? : number,pointerEndLocation? : any,pointerEndId? : number}) {
    }
    @defaultConstructor
    _LineBetweenPointers(_namedArguments? : {pointerStartLocation? : any,pointerStartId? : number,pointerEndLocation? : any,pointerEndId? : number}) {
        let {pointerStartLocation,pointerStartId,pointerEndLocation,pointerEndId} = Object.assign({
            "pointerStartLocation" : Offset.zero,
            "pointerStartId" : 0,
            "pointerEndLocation" : Offset.zero,
            "pointerEndId" : 1}, _namedArguments );
        this.assert = assert;
        this.pointerStartLocation = pointerStartLocation;
        this.pointerStartId = pointerStartId;
        this.pointerEndLocation = pointerEndLocation;
        this.pointerEndId = pointerEndId;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    pointerStartLocation : any;

    pointerStartId : number;

    pointerEndLocation : any;

    pointerEndId : number;

}

export namespace ScaleGestureRecognizer {
    export type Constructors = lib5.OneSequenceGestureRecognizer.Constructors | 'ScaleGestureRecognizer';
    export type Interface = Omit<ScaleGestureRecognizer, Constructors>;
}
@DartClass
export class ScaleGestureRecognizer extends lib5.OneSequenceGestureRecognizer {
    constructor(_namedArguments? : {debugOwner? : core.DartObject}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScaleGestureRecognizer(_namedArguments? : {debugOwner? : core.DartObject}) {
        let {debugOwner} = Object.assign({
        }, _namedArguments );
        this._state = _ScaleState.ready;
        this._velocityTrackers = new core.DartMap.literal([
        ]);
        super.OneSequenceGestureRecognizer({
            debugOwner : debugOwner});
    }
    onStart : (details : ScaleStartDetails) => void;

    onUpdate : (details : ScaleUpdateDetails) => void;

    onEnd : (details : ScaleEndDetails) => void;

    _state : _ScaleState;

    _initialFocalPoint : any;

    _currentFocalPoint : any;

    _initialSpan : double;

    _currentSpan : double;

    _initialHorizontalSpan : double;

    _currentHorizontalSpan : double;

    _initialVerticalSpan : double;

    _currentVerticalSpan : double;

    _initialLine : _LineBetweenPointers;

    _currentLine : _LineBetweenPointers;

    _pointerLocations : core.DartMap<number,any>;

    _pointerQueue : core.DartList<number>;

    _velocityTrackers : core.DartMap<number,lib3.VelocityTracker>;

    get _scaleFactor() : double {
        return this._initialSpan > 0.0 ? this._currentSpan / this._initialSpan : 1.0;
    }
    get _horizontalScaleFactor() : double {
        return this._initialHorizontalSpan > 0.0 ? this._currentHorizontalSpan / this._initialHorizontalSpan : 1.0;
    }
    get _verticalScaleFactor() : double {
        return this._initialVerticalSpan > 0.0 ? this._currentVerticalSpan / this._initialVerticalSpan : 1.0;
    }
    _computeRotationFactor() : double {
        if (op(Op.EQUALS,this._initialLine,null) || op(Op.EQUALS,this._currentLine,null)) {
            return 0.0;
        }
        let fx : double = this._initialLine.pointerStartLocation.dx;
        let fy : double = this._initialLine.pointerStartLocation.dy;
        let sx : double = this._initialLine.pointerEndLocation.dx;
        let sy : double = this._initialLine.pointerEndLocation.dy;
        let nfx : double = this._currentLine.pointerStartLocation.dx;
        let nfy : double = this._currentLine.pointerStartLocation.dy;
        let nsx : double = this._currentLine.pointerEndLocation.dx;
        let nsy : double = this._currentLine.pointerEndLocation.dy;
        let angle1 : double = math.atan2(fy - sy,fx - sx);
        let angle2 : double = math.atan2(nfy - nsy,nfx - nsx);
        return angle2 - angle1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addPointer(event : lib7.PointerEvent) : void {
        this.startTrackingPointer(event.pointer);
        this._velocityTrackers.set(event.pointer,lib3.VelocityTracker());
        if (op(Op.EQUALS,this._state,_ScaleState.ready)) {
            this._state = _ScaleState.possible;
            this._initialSpan = 0.0;
            this._currentSpan = 0.0;
            this._initialHorizontalSpan = 0.0;
            this._currentHorizontalSpan = 0.0;
            this._initialVerticalSpan = 0.0;
            this._currentVerticalSpan = 0.0;
            this._pointerLocations = new core.DartMap.literal([
            ]);
            this._pointerQueue = new core.DartList.literal<number>();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleEvent(event : lib7.PointerEvent) : void {
        /* TODO (AssertStatementImpl) : assert (_state != _ScaleState.ready); */;
        let didChangeConfiguration : boolean = false;
        let shouldStartIfAccepted : boolean = false;
        if (is(event, lib7.PointerMoveEvent)) {
            let tracker : lib3.VelocityTracker = this._velocityTrackers.get(event.pointer);
            /* TODO (AssertStatementImpl) : assert (tracker != null); */;
            if (!event.synthesized) tracker.addPosition(event.timeStamp,event.position);
            this._pointerLocations.set(event.pointer,event.position);
            shouldStartIfAccepted = true;
        }else if (is(event, lib7.PointerDownEvent)) {
            this._pointerLocations.set(event.pointer,event.position);
            this._pointerQueue.add(event.pointer);
            didChangeConfiguration = true;
            shouldStartIfAccepted = true;
        }else if (is(event, lib7.PointerUpEvent) || is(event, lib7.PointerCancelEvent)) {
            this._pointerLocations.remove(event.pointer);
            this._pointerQueue.remove(event.pointer);
            didChangeConfiguration = true;
        }
        this._updateLines();
        this._update();
        if (!didChangeConfiguration || this._reconfigure(event.pointer)) this._advanceStateMachine(shouldStartIfAccepted);
        this.stopTrackingIfPointerNoLongerDown(event);
    }
    _update() : void {
        let count : number = this._pointerLocations.keys.length;
        let focalPoint : any = Offset.zero;
        for(let pointer of this._pointerLocations.keys) focalPoint += this._pointerLocations.get(pointer);
        this._currentFocalPoint = count > 0 ? op(Op.DIVIDE,focalPoint,new core.DartInt(count).toDouble()) : Offset.zero;
        let totalDeviation : double = 0.0;
        let totalHorizontalDeviation : double = 0.0;
        let totalVerticalDeviation : double = 0.0;
        for(let pointer of this._pointerLocations.keys) {
            totalDeviation += (op(Op.MINUS,this._currentFocalPoint,this._pointerLocations.get(pointer))).distance;
            totalHorizontalDeviation += (op(Op.MINUS,this._currentFocalPoint.dx,this._pointerLocations.get(pointer).dx)).abs();
            totalVerticalDeviation += (op(Op.MINUS,this._currentFocalPoint.dy,this._pointerLocations.get(pointer).dy)).abs();
        }
        this._currentSpan = count > 0 ? totalDeviation / count : 0.0;
        this._currentHorizontalSpan = count > 0 ? totalHorizontalDeviation / count : 0.0;
        this._currentVerticalSpan = count > 0 ? totalVerticalDeviation / count : 0.0;
    }
    _updateLines() : void {
        let count : number = this._pointerLocations.keys.length;
        /* TODO (AssertStatementImpl) : assert (_pointerQueue.length >= count); */;
        if (count < 2) {
            this._initialLine = this._currentLine;
        }else if (this._initialLine != null && this._initialLine.pointerStartId == this._pointerQueue[0] && this._initialLine.pointerEndId == this._pointerQueue[1]) {
            this._currentLine = _LineBetweenPointers({
                pointerStartId : this._pointerQueue[0],pointerStartLocation : this._pointerLocations.get(this._pointerQueue[0]),pointerEndId : this._pointerQueue[1],pointerEndLocation : this._pointerLocations.get(this._pointerQueue[1])});
        }else {
            this._initialLine = _LineBetweenPointers({
                pointerStartId : this._pointerQueue[0],pointerStartLocation : this._pointerLocations.get(this._pointerQueue[0]),pointerEndId : this._pointerQueue[1],pointerEndLocation : this._pointerLocations.get(this._pointerQueue[1])});
            this._currentLine = null;
        }
    }
    _reconfigure(pointer : number) : boolean {
        this._initialFocalPoint = this._currentFocalPoint;
        this._initialSpan = this._currentSpan;
        this._initialLine = this._currentLine;
        this._initialHorizontalSpan = this._currentHorizontalSpan;
        this._initialVerticalSpan = this._currentVerticalSpan;
        if (op(Op.EQUALS,this._state,_ScaleState.started)) {
            if (this.onEnd != null) {
                let tracker : lib3.VelocityTracker = this._velocityTrackers.get(pointer);
                /* TODO (AssertStatementImpl) : assert (tracker != null); */;
                let velocity : lib3.Velocity = tracker.getVelocity();
                if (_isFlingGesture(velocity)) {
                    let pixelsPerSecond : any = velocity.pixelsPerSecond;
                    if (op(Op.GT,pixelsPerSecond.distanceSquared,lib4.properties.kMaxFlingVelocity * lib4.properties.kMaxFlingVelocity)) velocity = lib3.Velocity({
                        pixelsPerSecond : op(Op.TIMES,(op(Op.DIVIDE,pixelsPerSecond,pixelsPerSecond.distance)),lib4.properties.kMaxFlingVelocity)});
                    op(Op.LT,this.invokeCallback.bind(this),);
                    op(Op.GT,,('onEnd'));
                    () =>  {
                        return this.onEnd(ScaleEndDetails({
                            velocity : velocity}));
                    }
                }else {
                    op(Op.LT,this.invokeCallback.bind(this),);
                    op(Op.GT,,('onEnd'));
                    () =>  {
                        return this.onEnd(ScaleEndDetails({
                            velocity : lib3.Velocity.zero}));
                    }
                }
            }
            this._state = _ScaleState.accepted;
            return false;
        }
        return true;
    }
    _advanceStateMachine(shouldStartIfAccepted : boolean) : void {
        if (op(Op.EQUALS,this._state,_ScaleState.ready)) this._state = _ScaleState.possible;
        if (op(Op.EQUALS,this._state,_ScaleState.possible)) {
            let spanDelta : double = new core.DartDouble((this._currentSpan - this._initialSpan)).abs();
            let focalPointDelta : double = (op(Op.MINUS,this._currentFocalPoint,this._initialFocalPoint)).distance;
            if (spanDelta > lib4.properties.kScaleSlop || focalPointDelta > lib4.properties.kPanSlop) this.resolve(lib8.GestureDisposition.accepted);
        }else if (this._state.index >= _ScaleState.accepted.index) {
            this.resolve(lib8.GestureDisposition.accepted);
        }
        if (op(Op.EQUALS,this._state,_ScaleState.accepted) && shouldStartIfAccepted) {
            this._state = _ScaleState.started;
            this._dispatchOnStartCallbackIfNeeded();
        }
        if (op(Op.EQUALS,this._state,_ScaleState.started) && this.onUpdate != null) op(Op.LT,this.invokeCallback.bind(this),);
        op(Op.GT,,('onUpdate'));
        () =>  {
            this.onUpdate(ScaleUpdateDetails({
                scale : this._scaleFactor,horizontalScale : this._horizontalScaleFactor,verticalScale : this._verticalScaleFactor,focalPoint : this._currentFocalPoint,rotation : this._computeRotationFactor()}));
        }
    }
    _dispatchOnStartCallbackIfNeeded() : void {
        /* TODO (AssertStatementImpl) : assert (_state == _ScaleState.started); */;
        if (this.onStart != null) op(Op.LT,this.invokeCallback.bind(this),);
        op(Op.GT,,('onStart'));
        () =>  {
            return this.onStart(ScaleStartDetails({
                focalPoint : this._currentFocalPoint}));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    acceptGesture(pointer : number) : void {
        if (op(Op.EQUALS,this._state,_ScaleState.possible)) {
            this._state = _ScaleState.started;
            this._dispatchOnStartCallbackIfNeeded();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rejectGesture(pointer : number) : void {
        this.stopTrackingPointer(pointer);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didStopTrackingLastPointer(pointer : number) : void {
        switch (this._state) {
            case _ScaleState.possible:
                this.resolve(lib8.GestureDisposition.rejected);
                break;
            case _ScaleState.ready:
                /* TODO (AssertStatementImpl) : assert (false); */;
                break;
            case _ScaleState.accepted:
                break;
            case _ScaleState.started:
                /* TODO (AssertStatementImpl) : assert (false); */;
                break;
        }
        this._state = _ScaleState.ready;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : void {
        this._velocityTrackers.clear();
        super.dispose();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get debugDescription() : string {
        return 'scale';
    }
}

export class properties {
}
