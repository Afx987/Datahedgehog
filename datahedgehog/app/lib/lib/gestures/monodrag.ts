/** Library asset:datahedgehog_monitor/lib/lib/gestures/monodrag.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./recognizer";
import * as lib4 from "./drag_details";
import * as lib5 from "./velocity_tracker";
import * as lib6 from "./events";
import * as lib7 from "./arena";
import * as lib8 from "./constants";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export enum _DragState {
    ready,
    possible,
    accepted
}

export namespace DragGestureRecognizer {
    export type Constructors = lib3.OneSequenceGestureRecognizer.Constructors | 'DragGestureRecognizer';
    export type Interface = Omit<DragGestureRecognizer, Constructors>;
}
@DartClass
export class DragGestureRecognizer extends lib3.OneSequenceGestureRecognizer {
    constructor(_namedArguments? : {debugOwner? : core.DartObject,dragStartBehavior? : lib3.DragStartBehavior}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DragGestureRecognizer(_namedArguments? : {debugOwner? : core.DartObject,dragStartBehavior? : lib3.DragStartBehavior}) {
        let {debugOwner,dragStartBehavior} = Object.assign({
            "dragStartBehavior" : lib3.DragStartBehavior.down}, _namedArguments );
        this._state = _DragState.ready;
        this._velocityTrackers = new core.DartMap.literal([
        ]);
        this.assert = assert;
        this.dragStartBehavior = dragStartBehavior;
    }
     : any;

     : any;

     : any;

    dragStartBehavior : lib3.DragStartBehavior;

    onDown : (details : lib4.DragDownDetails) => any;

    onStart : (details : lib4.DragStartDetails) => any;

    onUpdate : (details : lib4.DragUpdateDetails) => any;

    onEnd : (details : lib4.DragEndDetails) => any;

    onCancel : () => any;

    minFlingDistance : double;

    minFlingVelocity : double;

    maxFlingVelocity : double;

    _state : _DragState;

    _initialPosition : any;

    _pendingDragOffset : any;

    _lastPendingEventTimestamp : core.DartDuration;

    @Abstract
    _isFlingGesture(estimate : lib5.VelocityEstimate) : boolean{ throw 'abstract'}
    @Abstract
    _getDeltaForDetails(delta : any) : any{ throw 'abstract'}
    @Abstract
    _getPrimaryValueFromOffset(value : any) : double{ throw 'abstract'}
    @AbstractProperty
    get _hasSufficientPendingDragDeltaToAccept() : boolean{ throw 'abstract'}
    _velocityTrackers : core.DartMap<number,lib5.VelocityTracker>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addPointer(event : lib6.PointerEvent) : any {
        this.startTrackingPointer(event.pointer);
        this._velocityTrackers.set(event.pointer,lib5.VelocityTracker());
        if (op(Op.EQUALS,this._state,_DragState.ready)) {
            this._state = _DragState.possible;
            this._initialPosition = event.position;
            this._pendingDragOffset = Offset.zero;
            this._lastPendingEventTimestamp = event.timeStamp;
            if (this.onDown != null) op(Op.LT,this.invokeCallback.bind(this),);
            op(Op.GT,,('onDown'));
            () =>  {
                return this.onDown(lib4.DragDownDetails({
                    globalPosition : this._initialPosition}));
            }
        }else if (op(Op.EQUALS,this._state,_DragState.accepted)) {
            this.resolve(lib7.GestureDisposition.accepted);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleEvent(event : lib6.PointerEvent) : any {
        /* TODO (AssertStatementImpl) : assert (_state != _DragState.ready); */;
        if (!event.synthesized && (is(event, lib6.PointerDownEvent) || is(event, lib6.PointerMoveEvent))) {
            let tracker : lib5.VelocityTracker = this._velocityTrackers.get(event.pointer);
            /* TODO (AssertStatementImpl) : assert (tracker != null); */;
            tracker.addPosition(event.timeStamp,event.position);
        }
        if (is(event, lib6.PointerMoveEvent)) {
            let delta : any = event.delta;
            if (op(Op.EQUALS,this._state,_DragState.accepted)) {
                if (this.onUpdate != null) {
                    op(Op.LT,this.invokeCallback.bind(this),);
                    op(Op.GT,,('onUpdate'));
                    () =>  {
                        return this.onUpdate(lib4.DragUpdateDetails({
                            sourceTimeStamp : event.timeStamp,delta : this._getDeltaForDetails(delta),primaryDelta : this._getPrimaryValueFromOffset(delta),globalPosition : event.position}));
                    }
                }
            }else {
                this._pendingDragOffset += delta;
                this._lastPendingEventTimestamp = event.timeStamp;
                if (this._hasSufficientPendingDragDeltaToAccept) this.resolve(lib7.GestureDisposition.accepted);
            }
        }
        this.stopTrackingIfPointerNoLongerDown(event);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    acceptGesture(pointer : number) : any {
        if (this._state != _DragState.accepted) {
            this._state = _DragState.accepted;
            let delta : any = this._pendingDragOffset;
            let timestamp : core.DartDuration = this._lastPendingEventTimestamp;
            let updateDelta : any;
            switch (this.dragStartBehavior) {
                case lib3.DragStartBehavior.start:
                    this._initialPosition = op(Op.PLUS,this._initialPosition,delta);
                    updateDelta = Offset.zero;
                    break;
                case lib3.DragStartBehavior.down:
                    updateDelta = this._getDeltaForDetails(delta);
                    break;
            }
            this._pendingDragOffset = Offset.zero;
            this._lastPendingEventTimestamp = null;
            if (this.onStart != null) {
                op(Op.LT,this.invokeCallback.bind(this),);
                op(Op.GT,,('onStart'));
                () =>  {
                    return this.onStart(lib4.DragStartDetails({
                        sourceTimeStamp : timestamp,globalPosition : this._initialPosition}));
                }
            }
            if (updateDelta != Offset.zero && this.onUpdate != null) {
                op(Op.LT,this.invokeCallback.bind(this),);
                op(Op.GT,,('onUpdate'));
                () =>  {
                    return this.onUpdate(lib4.DragUpdateDetails({
                        sourceTimeStamp : timestamp,delta : updateDelta,primaryDelta : this._getPrimaryValueFromOffset(updateDelta),globalPosition : op(Op.PLUS,this._initialPosition,updateDelta)}));
                }
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rejectGesture(pointer : number) : any {
        this.stopTrackingPointer(pointer);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didStopTrackingLastPointer(pointer : number) : any {
        if (op(Op.EQUALS,this._state,_DragState.possible)) {
            this.resolve(lib7.GestureDisposition.rejected);
            this._state = _DragState.ready;
            if (this.onCancel != null) op(Op.LT,this.invokeCallback.bind(this),);
            op(Op.GT,,('onCancel'));
            this.onCancel;
            return;
        }
        let wasAccepted : boolean = op(Op.EQUALS,this._state,_DragState.accepted);
        this._state = _DragState.ready;
        if (wasAccepted && this.onEnd != null) {
            let tracker : lib5.VelocityTracker = this._velocityTrackers.get(pointer);
            /* TODO (AssertStatementImpl) : assert (tracker != null); */;
            let estimate : lib5.VelocityEstimate = tracker.getVelocityEstimate();
            if (estimate != null && this._isFlingGesture(estimate)) {
                let velocity : lib5.Velocity = lib5.Velocity({
                    pixelsPerSecond : estimate.pixelsPerSecond}).clampMagnitude((this.minFlingVelocity || lib8.properties.kMinFlingVelocity),(this.maxFlingVelocity || lib8.properties.kMaxFlingVelocity));
                op(Op.LT,this.invokeCallback.bind(this),);
                op(Op.GT,,('onEnd'));
                () =>  {
                    return this.onEnd(lib4.DragEndDetails({
                        velocity : velocity,primaryVelocity : this._getPrimaryValueFromOffset(velocity.pixelsPerSecond)}));
                }
                debugReport:
                    () =>  {
                        return `${estimate}; fling at ${velocity}.`;
                    };
            }else {
                op(Op.LT,this.invokeCallback.bind(this),);
                op(Op.GT,,('onEnd'));
                () =>  {
                    return this.onEnd(lib4.DragEndDetails({
                        velocity : lib5.Velocity.zero,primaryVelocity : 0.0}));
                }
                debugReport:
                    () =>  {
                        if (op(Op.EQUALS,estimate,null)) return 'Could not estimate velocity.';
                        return `${estimate}; judged to not be a fling.`;
                    };
            }
        }
        this._velocityTrackers.clear();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._velocityTrackers.clear();
        super.dispose();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib9.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib9.EnumProperty('start behavior',this.dragStartBehavior));
    }
}

export namespace VerticalDragGestureRecognizer {
    export type Constructors = DragGestureRecognizer.Constructors | 'VerticalDragGestureRecognizer';
    export type Interface = Omit<VerticalDragGestureRecognizer, Constructors>;
}
@DartClass
export class VerticalDragGestureRecognizer extends DragGestureRecognizer {
    constructor(_namedArguments? : {debugOwner? : core.DartObject}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VerticalDragGestureRecognizer(_namedArguments? : {debugOwner? : core.DartObject}) {
        let {debugOwner} = Object.assign({
        }, _namedArguments );
        super.DragGestureRecognizer({
            debugOwner : debugOwner});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _isFlingGesture(estimate : lib5.VelocityEstimate) : boolean {
        let minVelocity : double = (this.minFlingVelocity || lib8.properties.kMinFlingVelocity);
        let minDistance : double = (this.minFlingDistance || lib8.properties.kTouchSlop);
        return op(Op.GT,estimate.pixelsPerSecond.dy.abs(),minVelocity) && op(Op.GT,estimate.offset.dy.abs(),minDistance);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _hasSufficientPendingDragDeltaToAccept() : boolean {
        return op(Op.GT,this._pendingDragOffset.dy.abs(),lib8.properties.kTouchSlop);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _getDeltaForDetails(delta : any) : any {
        return Offset(0.0,delta.dy);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _getPrimaryValueFromOffset(value : any) : double {
        return value.dy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get debugDescription() : string {
        return 'vertical drag';
    }
}

export namespace HorizontalDragGestureRecognizer {
    export type Constructors = DragGestureRecognizer.Constructors | 'HorizontalDragGestureRecognizer';
    export type Interface = Omit<HorizontalDragGestureRecognizer, Constructors>;
}
@DartClass
export class HorizontalDragGestureRecognizer extends DragGestureRecognizer {
    constructor(_namedArguments? : {debugOwner? : core.DartObject}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    HorizontalDragGestureRecognizer(_namedArguments? : {debugOwner? : core.DartObject}) {
        let {debugOwner} = Object.assign({
        }, _namedArguments );
        super.DragGestureRecognizer({
            debugOwner : debugOwner});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _isFlingGesture(estimate : lib5.VelocityEstimate) : boolean {
        let minVelocity : double = (this.minFlingVelocity || lib8.properties.kMinFlingVelocity);
        let minDistance : double = (this.minFlingDistance || lib8.properties.kTouchSlop);
        return op(Op.GT,estimate.pixelsPerSecond.dx.abs(),minVelocity) && op(Op.GT,estimate.offset.dx.abs(),minDistance);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _hasSufficientPendingDragDeltaToAccept() : boolean {
        return op(Op.GT,this._pendingDragOffset.dx.abs(),lib8.properties.kTouchSlop);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _getDeltaForDetails(delta : any) : any {
        return Offset(delta.dx,0.0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _getPrimaryValueFromOffset(value : any) : double {
        return value.dx;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get debugDescription() : string {
        return 'horizontal drag';
    }
}

export namespace PanGestureRecognizer {
    export type Constructors = DragGestureRecognizer.Constructors | 'PanGestureRecognizer';
    export type Interface = Omit<PanGestureRecognizer, Constructors>;
}
@DartClass
export class PanGestureRecognizer extends DragGestureRecognizer {
    constructor(_namedArguments? : {debugOwner? : core.DartObject}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PanGestureRecognizer(_namedArguments? : {debugOwner? : core.DartObject}) {
        let {debugOwner} = Object.assign({
        }, _namedArguments );
        super.DragGestureRecognizer({
            debugOwner : debugOwner});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _isFlingGesture(estimate : lib5.VelocityEstimate) : boolean {
        let minVelocity : double = (this.minFlingVelocity || lib8.properties.kMinFlingVelocity);
        let minDistance : double = (this.minFlingDistance || lib8.properties.kTouchSlop);
        return op(Op.GT,estimate.pixelsPerSecond.distanceSquared,minVelocity * minVelocity) && op(Op.GT,estimate.offset.distanceSquared,minDistance * minDistance);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _hasSufficientPendingDragDeltaToAccept() : boolean {
        return op(Op.GT,this._pendingDragOffset.distance,lib8.properties.kPanSlop);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _getDeltaForDetails(delta : any) : any {
        return delta;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _getPrimaryValueFromOffset(value : any) : double {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get debugDescription() : string {
        return 'pan';
    }
}

export class properties {
}
