/** Library asset:datahedgehog_monitor/lib/lib/gestures/multitap.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./events";
import * as lib4 from "./arena";
import * as lib5 from "./binding";
import * as lib6 from "./recognizer";
import * as lib7 from "./constants";
import * as lib8 from "./tap";

export namespace _TapTracker {
    export type Constructors = '_TapTracker';
    export type Interface = Omit<_TapTracker, Constructors>;
}
@DartClass
export class _TapTracker {
    constructor(_namedArguments? : {event? : lib3.PointerDownEvent,entry? : lib4.GestureArenaEntry}) {
    }
    @defaultConstructor
    _TapTracker(_namedArguments? : {event? : lib3.PointerDownEvent,entry? : lib4.GestureArenaEntry}) {
        let {event,entry} = Object.assign({
        }, _namedArguments );
        this._isTrackingPointer = false;
        this.pointer = event.pointer;
        this._initialPosition = event.position;
        this.entry = entry;
    }
    pointer : number;

    entry : lib4.GestureArenaEntry;

    _initialPosition : any;

    _isTrackingPointer : boolean;

    startTrackingPointer(route : (event : lib3.PointerEvent) => any) : any {
        if (!this._isTrackingPointer) {
            this._isTrackingPointer = true;
            lib5.properties.GestureBinding.instance.pointerRouter.addRoute(this.pointer,route);
        }
    }
    stopTrackingPointer(route : (event : lib3.PointerEvent) => any) : any {
        if (this._isTrackingPointer) {
            this._isTrackingPointer = false;
            lib5.properties.GestureBinding.instance.pointerRouter.removeRoute(this.pointer,route);
        }
    }
    isWithinTolerance(event : lib3.PointerEvent,tolerance : double) : boolean {
        let offset : any = op(Op.MINUS,event.position,this._initialPosition);
        return op(Op.LEQ,offset.distance,tolerance);
    }
}

export namespace DoubleTapGestureRecognizer {
    export type Constructors = lib6.GestureRecognizer.Constructors | 'DoubleTapGestureRecognizer';
    export type Interface = Omit<DoubleTapGestureRecognizer, Constructors>;
}
@DartClass
export class DoubleTapGestureRecognizer extends lib6.GestureRecognizer {
    constructor(_namedArguments? : {debugOwner? : core.DartObject}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DoubleTapGestureRecognizer(_namedArguments? : {debugOwner? : core.DartObject}) {
        let {debugOwner} = Object.assign({
        }, _namedArguments );
        this._trackers = new core.DartMap.literal([
        ]);
        super.GestureRecognizer({
            debugOwner : debugOwner});
    }
    onDoubleTap : () => any;

    _doubleTapTimer : async.DartTimer;

    _firstTap : _TapTracker;

    _trackers : core.DartMap<number,_TapTracker>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addPointer(event : lib3.PointerEvent) : any {
        if (this._firstTap != null && !this._firstTap.isWithinTolerance(event,lib7.properties.kDoubleTapSlop)) return;
        this._stopDoubleTapTimer();
        let tracker : _TapTracker = _TapTracker({
            event : event,entry : lib5.properties.GestureBinding.instance.gestureArena.add(event.pointer,this)});
        this._trackers.set(event.pointer,tracker);
        tracker.startTrackingPointer(this._handleEvent.bind(this));
    }
    _handleEvent(event : lib3.PointerEvent) : any {
        let tracker : _TapTracker = this._trackers.get(event.pointer);
        /* TODO (AssertStatementImpl) : assert (tracker != null); */;
        if (is(event, lib3.PointerUpEvent)) {
            if (op(Op.EQUALS,this._firstTap,null)) this._registerFirstTap(tracker);else this._registerSecondTap(tracker);
        }else if (is(event, lib3.PointerMoveEvent)) {
            if (!tracker.isWithinTolerance(event,lib7.properties.kDoubleTapTouchSlop)) this._reject(tracker);
        }else if (is(event, lib3.PointerCancelEvent)) {
            this._reject(tracker);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    acceptGesture(pointer : number) : any {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rejectGesture(pointer : number) : any {
        let tracker : _TapTracker = this._trackers.get(pointer);
        if (op(Op.EQUALS,tracker,null) && this._firstTap != null && this._firstTap.pointer == pointer) tracker = this._firstTap;
        if (tracker != null) this._reject(tracker);
    }
    _reject(tracker : _TapTracker) : any {
        this._trackers.remove(tracker.pointer);
        tracker.entry.resolve(lib4.GestureDisposition.rejected);
        this._freezeTracker(tracker);
        if (this._firstTap != null && (this._trackers.isEmpty || op(Op.EQUALS,tracker,this._firstTap))) this._reset();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._reset();
        super.dispose();
    }
    _reset() : any {
        this._stopDoubleTapTimer();
        if (this._firstTap != null) {
            let tracker : _TapTracker = this._firstTap;
            this._firstTap = null;
            this._reject(tracker);
            lib5.properties.GestureBinding.instance.gestureArena.release(tracker.pointer);
        }
        this._clearTrackers();
    }
    _registerFirstTap(tracker : _TapTracker) : any {
        this._startDoubleTapTimer();
        lib5.properties.GestureBinding.instance.gestureArena.hold(tracker.pointer);
        this._freezeTracker(tracker);
        this._trackers.remove(tracker.pointer);
        this._clearTrackers();
        this._firstTap = tracker;
    }
    _registerSecondTap(tracker : _TapTracker) : any {
        this._firstTap.entry.resolve(lib4.GestureDisposition.accepted);
        tracker.entry.resolve(lib4.GestureDisposition.accepted);
        this._freezeTracker(tracker);
        this._trackers.remove(tracker.pointer);
        if (this.onDoubleTap != null) op(Op.LT,this.invokeCallback.bind(this),);
        op(Op.GT,,('onDoubleTap'));
        this.onDoubleTap;
        this._reset();
    }
    _clearTrackers() : any {
        this._trackers.values.toList().forEach(this._reject.bind(this));
        /* TODO (AssertStatementImpl) : assert (_trackers.isEmpty); */;
    }
    _freezeTracker(tracker : _TapTracker) : any {
        tracker.stopTrackingPointer(this._handleEvent.bind(this));
    }
    _startDoubleTapTimer() : any {
        this._doubleTapTimer = ( this._doubleTapTimer ) || ( async.DartTimer(lib7.properties.kDoubleTapTimeout,this._reset.bind(this)) );
    }
    _stopDoubleTapTimer() : any {
        if (this._doubleTapTimer != null) {
            this._doubleTapTimer.cancel();
            this._doubleTapTimer = null;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get debugDescription() : string {
        return 'double tap';
    }
}

export namespace MultiTapGestureRecognizer {
    export type Constructors = lib6.GestureRecognizer.Constructors | 'MultiTapGestureRecognizer';
    export type Interface = Omit<MultiTapGestureRecognizer, Constructors>;
}
@DartClass
export class MultiTapGestureRecognizer extends lib6.GestureRecognizer {
    constructor(_namedArguments? : {longTapDelay? : core.DartDuration,debugOwner? : core.DartObject}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MultiTapGestureRecognizer(_namedArguments? : {longTapDelay? : core.DartDuration,debugOwner? : core.DartObject}) {
        let {longTapDelay,debugOwner} = Object.assign({
            "longTapDelay" : core.DartDuration.zero}, _namedArguments );
        this._gestureMap = new core.DartMap.literal([
        ]);
        super.GestureRecognizer({
            debugOwner : debugOwner});
        this.longTapDelay = longTapDelay;
    }
    onTapDown : (pointer : number,details : lib8.TapDownDetails) => any;

    onTapUp : (pointer : number,details : lib8.TapUpDetails) => any;

    onTap : (pointer : number) => any;

    onTapCancel : (pointer : number) => any;

    longTapDelay : core.DartDuration;

    onLongTapDown : (pointer : number,details : lib8.TapDownDetails) => any;

    _gestureMap : core.DartMap<number,_TapGesture>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addPointer(event : lib3.PointerEvent) : any {
        /* TODO (AssertStatementImpl) : assert (!_gestureMap.containsKey(event.pointer)); */;
        this._gestureMap.set(event.pointer,_TapGesture({
            gestureRecognizer : this,event : event,longTapDelay : this.longTapDelay}));
        if (this.onTapDown != null) op(Op.LT,this.invokeCallback.bind(this),);
        op(Op.GT,,('onTapDown'));
        () =>  {
            return this.onTapDown(event.pointer,lib8.TapDownDetails({
                globalPosition : event.position}));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    acceptGesture(pointer : number) : any {
        /* TODO (AssertStatementImpl) : assert (_gestureMap.containsKey(pointer)); */;
        this._gestureMap.get(pointer).accept();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rejectGesture(pointer : number) : any {
        /* TODO (AssertStatementImpl) : assert (_gestureMap.containsKey(pointer)); */;
        this._gestureMap.get(pointer).reject();
        /* TODO (AssertStatementImpl) : assert (!_gestureMap.containsKey(pointer)); */;
    }
    _dispatchCancel(pointer : number) : any {
        /* TODO (AssertStatementImpl) : assert (_gestureMap.containsKey(pointer)); */;
        this._gestureMap.remove(pointer);
        if (this.onTapCancel != null) op(Op.LT,this.invokeCallback.bind(this),);
        op(Op.GT,,('onTapCancel'));
        () =>  {
            return this.onTapCancel(pointer);
        }
    }
    _dispatchTap(pointer : number,globalPosition : any) : any {
        /* TODO (AssertStatementImpl) : assert (_gestureMap.containsKey(pointer)); */;
        this._gestureMap.remove(pointer);
        if (this.onTapUp != null) op(Op.LT,this.invokeCallback.bind(this),);
        op(Op.GT,,('onTapUp'));
        () =>  {
            return this.onTapUp(pointer,lib8.TapUpDetails({
                globalPosition : globalPosition}));
        }
        if (this.onTap != null) op(Op.LT,this.invokeCallback.bind(this),);
        op(Op.GT,,('onTap'));
        () =>  {
            return this.onTap(pointer);
        }
    }
    _dispatchLongTap(pointer : number,lastPosition : any) : any {
        /* TODO (AssertStatementImpl) : assert (_gestureMap.containsKey(pointer)); */;
        if (this.onLongTapDown != null) op(Op.LT,this.invokeCallback.bind(this),);
        op(Op.GT,,('onLongTapDown'));
        () =>  {
            return this.onLongTapDown(pointer,lib8.TapDownDetails({
                globalPosition : lastPosition}));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        let localGestures : core.DartList<_TapGesture> = op(Op.LT,core.DartList<E>,_TapGesture);
        op(Op.GT,,.from(this._gestureMap.values));
        for(let gesture of localGestures) gesture.cancel();
        /* TODO (AssertStatementImpl) : assert (_gestureMap.isEmpty); */;
        super.dispose();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get debugDescription() : string {
        return 'multitap';
    }
}

export namespace _TapGesture {
    export type Constructors = _TapTracker.Constructors | '_TapGesture';
    export type Interface = Omit<_TapGesture, Constructors>;
}
@DartClass
export class _TapGesture extends _TapTracker {
    constructor(_namedArguments? : {gestureRecognizer? : MultiTapGestureRecognizer,event? : lib3.PointerEvent,longTapDelay? : core.DartDuration}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TapGesture(_namedArguments? : {gestureRecognizer? : MultiTapGestureRecognizer,event? : lib3.PointerEvent,longTapDelay? : core.DartDuration}) {
        let {gestureRecognizer,event,longTapDelay} = Object.assign({
        }, _namedArguments );
        this._wonArena = false;
        this._lastPosition = event.position;
        super._TapTracker({
            event : event,entry : lib5.properties.GestureBinding.instance.gestureArena.add(event.pointer,gestureRecognizer)});
        this.gestureRecognizer = gestureRecognizer;
        this.startTrackingPointer(this.handleEvent.bind(this));
        if (op(Op.GT,longTapDelay,core.DartDuration.zero)) {
            this._timer = async.DartTimer(longTapDelay,() =>  {
                this._timer = null;
                this.gestureRecognizer._dispatchLongTap(event.pointer,this._lastPosition);
            });
        }
    }
    gestureRecognizer : MultiTapGestureRecognizer;

    _wonArena : boolean;

    _timer : async.DartTimer;

    _lastPosition : any;

    _finalPosition : any;

    handleEvent(event : lib3.PointerEvent) : any {
        /* TODO (AssertStatementImpl) : assert (event.pointer == pointer); */;
        if (is(event, lib3.PointerMoveEvent)) {
            if (!this.isWithinTolerance(event,lib7.properties.kTouchSlop)) this.cancel();else this._lastPosition = event.position;
        }else if (is(event, lib3.PointerCancelEvent)) {
            this.cancel();
        }else if (is(event, lib3.PointerUpEvent)) {
            this.stopTrackingPointer(this.handleEvent.bind(this));
            this._finalPosition = event.position;
            this._check();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    stopTrackingPointer(route : (event : lib3.PointerEvent) => any) : any {
        ((_573_)=>(!!_573_)?_573_.cancel():null)(this._timer);
        this._timer = null;
        super.stopTrackingPointer(route);
    }
    accept() : any {
        this._wonArena = true;
        this._check();
    }
    reject() : any {
        this.stopTrackingPointer(this.handleEvent.bind(this));
        this.gestureRecognizer._dispatchCancel(this.pointer);
    }
    cancel() : any {
        if (this._wonArena) this.reject();else this.entry.resolve(lib4.GestureDisposition.rejected);
    }
    _check() : any {
        if (this._wonArena && this._finalPosition != null) this.gestureRecognizer._dispatchTap(this.pointer,this._finalPosition);
    }
}

export class properties {
}
