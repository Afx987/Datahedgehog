/** Library asset:datahedgehog_monitor/lib/lib/gestures/multidrag.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./velocity_tracker";
import * as lib4 from "./drag";
import * as lib5 from "./arena";
import * as lib6 from "./events";
import * as lib7 from "./drag_details";
import * as lib8 from "./recognizer";
import * as lib9 from "./binding";
import * as lib10 from "./constants";

export var _delayPassed : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (_timer != null); */;
    /* TODO (AssertStatementImpl) : assert (pendingDelta != null); */;
    /* TODO (AssertStatementImpl) : assert (pendingDelta.distance <= kTouchSlop); */;
    properties._timer = null;
    if (properties._starter != null) {
        properties._starter(initialPosition);
        properties._starter = null;
    }else {
        resolve(lib5.GestureDisposition.accepted);
    }
    /* TODO (AssertStatementImpl) : assert (_starter == null); */;
};
export var _ensureTimerStopped : () => any = () : any =>  {
    ((_572_)=>(!!_572_)?_572_.cancel():null)(properties._timer);
    properties._timer = null;
};
export var accepted : (starter : (position : any) => lib4.Drag) => any = (starter : (position : any) => lib4.Drag) : any =>  {
    /* TODO (AssertStatementImpl) : assert (_starter == null); */;
    if (op(Op.EQUALS,properties._timer,null)) starter(initialPosition);else properties._starter = starter;
};
export var checkForResolutionAfterMove : () => any = () : any =>  {
    if (op(Op.EQUALS,properties._timer,null)) {
        /* TODO (AssertStatementImpl) : assert (_starter != null); */;
        return;
    }
    /* TODO (AssertStatementImpl) : assert (pendingDelta != null); */;
    if (op(Op.GT,pendingDelta.distance,lib10.properties.kTouchSlop)) {
        resolve(lib5.GestureDisposition.rejected);
        _ensureTimerStopped();
    }
};
export var dispose : () => any = () : any =>  {
    _ensureTimerStopped();
    super.dispose();
};
export namespace MultiDragPointerState {
    export type Constructors = 'MultiDragPointerState';
    export type Interface = Omit<MultiDragPointerState, Constructors>;
}
@DartClass
export class MultiDragPointerState {
    constructor(initialPosition : any) {
    }
    @defaultConstructor
    MultiDragPointerState(initialPosition : any) {
        this._velocityTracker = lib3.VelocityTracker();
        this._pendingDelta = Offset.zero;
        this.assert = assert;
        this.initialPosition = initialPosition;
    }
     : any;

    initialPosition : any;

    _velocityTracker : lib3.VelocityTracker;

    _client : lib4.Drag;

    get pendingDelta() : any {
        return this._pendingDelta;
    }
    _pendingDelta : any;

    _lastPendingEventTimestamp : core.DartDuration;

    _arenaEntry : lib5.GestureArenaEntry;

    _setArenaEntry(entry : lib5.GestureArenaEntry) : any {
        /* TODO (AssertStatementImpl) : assert (_arenaEntry == null); */;
        /* TODO (AssertStatementImpl) : assert (pendingDelta != null); */;
        /* TODO (AssertStatementImpl) : assert (_client == null); */;
        this._arenaEntry = entry;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    resolve(disposition : lib5.GestureDisposition) : any {
        this._arenaEntry.resolve(disposition);
    }
    _move(event : lib6.PointerMoveEvent) : any {
        /* TODO (AssertStatementImpl) : assert (_arenaEntry != null); */;
        if (!event.synthesized) this._velocityTracker.addPosition(event.timeStamp,event.position);
        if (this._client != null) {
            /* TODO (AssertStatementImpl) : assert (pendingDelta == null); */;
            this._client.update(lib7.DragUpdateDetails({
                sourceTimeStamp : event.timeStamp,delta : event.delta,globalPosition : event.position}));
        }else {
            /* TODO (AssertStatementImpl) : assert (pendingDelta != null); */;
            this._pendingDelta += event.delta;
            this._lastPendingEventTimestamp = event.timeStamp;
            this.checkForResolutionAfterMove();
        }
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    checkForResolutionAfterMove() : any {
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    accepted(starter : (position : any) => lib4.Drag) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    rejected() : any {
        /* TODO (AssertStatementImpl) : assert (_arenaEntry != null); */;
        /* TODO (AssertStatementImpl) : assert (_client == null); */;
        /* TODO (AssertStatementImpl) : assert (pendingDelta != null); */;
        this._pendingDelta = null;
        this._lastPendingEventTimestamp = null;
        this._arenaEntry = null;
    }
    _startDrag(client : lib4.Drag) : any {
        /* TODO (AssertStatementImpl) : assert (_arenaEntry != null); */;
        /* TODO (AssertStatementImpl) : assert (_client == null); */;
        /* TODO (AssertStatementImpl) : assert (client != null); */;
        /* TODO (AssertStatementImpl) : assert (pendingDelta != null); */;
        this._client = client;
        let details : lib7.DragUpdateDetails = lib7.DragUpdateDetails({
            sourceTimeStamp : this._lastPendingEventTimestamp,delta : this.pendingDelta,globalPosition : this.initialPosition});
        this._pendingDelta = null;
        this._lastPendingEventTimestamp = null;
        this._client.update(details);
    }
    _up() : any {
        /* TODO (AssertStatementImpl) : assert (_arenaEntry != null); */;
        if (this._client != null) {
            /* TODO (AssertStatementImpl) : assert (pendingDelta == null); */;
            let details : lib7.DragEndDetails = lib7.DragEndDetails({
                velocity : this._velocityTracker.getVelocity()});
            let client : lib4.Drag = this._client;
            this._client = null;
            client.end(details);
        }else {
            /* TODO (AssertStatementImpl) : assert (pendingDelta != null); */;
            this._pendingDelta = null;
            this._lastPendingEventTimestamp = null;
        }
    }
    _cancel() : any {
        /* TODO (AssertStatementImpl) : assert (_arenaEntry != null); */;
        if (this._client != null) {
            /* TODO (AssertStatementImpl) : assert (pendingDelta == null); */;
            let client : lib4.Drag = this._client;
            this._client = null;
            client.cancel();
        }else {
            /* TODO (AssertStatementImpl) : assert (pendingDelta != null); */;
            this._pendingDelta = null;
            this._lastPendingEventTimestamp = null;
        }
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        ((_571_)=>(!!_571_)?_571_.resolve(lib5.GestureDisposition.rejected):null)(this._arenaEntry);
        this._arenaEntry = null;
        /* TODO (AssertStatementImpl) : assert (() {_pendingDelta = null; return true;}()); */;
    }
}

export namespace MultiDragGestureRecognizer {
    export type Constructors = lib8.GestureRecognizer.Constructors | 'MultiDragGestureRecognizer';
    export type Interface<T extends MultiDragPointerState> = Omit<MultiDragGestureRecognizer<T extends MultiDragPointerState>, Constructors>;
}
@DartClass
export class MultiDragGestureRecognizer<T extends MultiDragPointerState> extends lib8.GestureRecognizer {
    constructor(_namedArguments? : {debugOwner? : core.DartObject}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MultiDragGestureRecognizer(_namedArguments? : {debugOwner? : core.DartObject}) {
        let {debugOwner} = Object.assign({
        }, _namedArguments );
        this._pointers = new core.DartMap.literal([
        ]);
        super.GestureRecognizer({
            debugOwner : debugOwner});
    }
    onStart : (position : any) => lib4.Drag;

    _pointers : core.DartMap<number,T>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addPointer(event : lib6.PointerDownEvent) : any {
        /* TODO (AssertStatementImpl) : assert (_pointers != null); */;
        /* TODO (AssertStatementImpl) : assert (event.pointer != null); */;
        /* TODO (AssertStatementImpl) : assert (event.position != null); */;
        /* TODO (AssertStatementImpl) : assert (!_pointers.containsKey(event.pointer)); */;
        let state : T = this.createNewPointerState(event);
        this._pointers.set(event.pointer,state);
        lib9.properties.GestureBinding.instance.pointerRouter.addRoute(event.pointer,this._handleEvent.bind(this));
        state._setArenaEntry(lib9.properties.GestureBinding.instance.gestureArena.add(event.pointer,this));
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    createNewPointerState(event : lib6.PointerDownEvent) : T{ throw 'abstract'}
    _handleEvent(event : lib6.PointerEvent) : any {
        /* TODO (AssertStatementImpl) : assert (_pointers != null); */;
        /* TODO (AssertStatementImpl) : assert (event.pointer != null); */;
        /* TODO (AssertStatementImpl) : assert (event.timeStamp != null); */;
        /* TODO (AssertStatementImpl) : assert (event.position != null); */;
        /* TODO (AssertStatementImpl) : assert (_pointers.containsKey(event.pointer)); */;
        let state : T = this._pointers.get(event.pointer);
        if (is(event, lib6.PointerMoveEvent)) {
            state._move(event);
        }else if (is(event, lib6.PointerUpEvent)) {
            /* TODO (AssertStatementImpl) : assert (event.delta == Offset.zero); */;
            state._up();
            this._removeState(event.pointer);
        }else if (is(event, lib6.PointerCancelEvent)) {
            /* TODO (AssertStatementImpl) : assert (event.delta == Offset.zero); */;
            state._cancel();
            this._removeState(event.pointer);
        }else if (isNot(event, lib6.PointerDownEvent)) {
            /* TODO (AssertStatementImpl) : assert (false); */;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    acceptGesture(pointer : number) : any {
        /* TODO (AssertStatementImpl) : assert (_pointers != null); */;
        let state : T = this._pointers.get(pointer);
        if (op(Op.EQUALS,state,null)) return;
        state.accepted((initialPosition : any) =>  {
            return this._startDrag(initialPosition,pointer);
        });
    }
    _startDrag(initialPosition : any,pointer : number) : lib4.Drag {
        /* TODO (AssertStatementImpl) : assert (_pointers != null); */;
        let state : T = this._pointers.get(pointer);
        /* TODO (AssertStatementImpl) : assert (state != null); */;
        /* TODO (AssertStatementImpl) : assert (state._pendingDelta != null); */;
        let drag : lib4.Drag;
        if (this.onStart != null) drag = this.invokeCallback('onStart',() =>  {
            return this.onStart(initialPosition);
        });
        if (drag != null) {
            state._startDrag(drag);
        }else {
            this._removeState(pointer);
        }
        return drag;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rejectGesture(pointer : number) : any {
        /* TODO (AssertStatementImpl) : assert (_pointers != null); */;
        if (this._pointers.containsKey(pointer)) {
            let state : T = this._pointers.get(pointer);
            /* TODO (AssertStatementImpl) : assert (state != null); */;
            state.rejected();
            this._removeState(pointer);
        }
    }
    _removeState(pointer : number) : any {
        if (this._pointers == null) {
            return;
        }
        /* TODO (AssertStatementImpl) : assert (_pointers.containsKey(pointer)); */;
        lib9.properties.GestureBinding.instance.pointerRouter.removeRoute(pointer,this._handleEvent.bind(this));
        this._pointers.remove(pointer).dispose();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._pointers.keys.toList().forEach(this._removeState.bind(this));
        /* TODO (AssertStatementImpl) : assert (_pointers.isEmpty); */;
        this._pointers = null;
        super.dispose();
    }
}

export namespace _ImmediatePointerState {
    export type Constructors = MultiDragPointerState.Constructors | '_ImmediatePointerState';
    export type Interface = Omit<_ImmediatePointerState, Constructors>;
}
@DartClass
export class _ImmediatePointerState extends MultiDragPointerState {
    constructor(initialPosition : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ImmediatePointerState(initialPosition : any) {
        super.MultiDragPointerState(initialPosition);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkForResolutionAfterMove() : any {
        /* TODO (AssertStatementImpl) : assert (pendingDelta != null); */;
        if (op(Op.GT,this.pendingDelta.distance,lib10.properties.kTouchSlop)) this.resolve(lib5.GestureDisposition.accepted);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accepted(starter : (position : any) => lib4.Drag) : any {
        starter(this.initialPosition);
    }
}

export namespace ImmediateMultiDragGestureRecognizer {
    export type Constructors = MultiDragGestureRecognizer.Constructors | 'ImmediateMultiDragGestureRecognizer';
    export type Interface = Omit<ImmediateMultiDragGestureRecognizer, Constructors>;
}
@DartClass
export class ImmediateMultiDragGestureRecognizer extends MultiDragGestureRecognizer<_ImmediatePointerState> {
    constructor(_namedArguments? : {debugOwner? : core.DartObject}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ImmediateMultiDragGestureRecognizer(_namedArguments? : {debugOwner? : core.DartObject}) {
        let {debugOwner} = Object.assign({
        }, _namedArguments );
        super.MultiDragGestureRecognizer({
            debugOwner : debugOwner});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createNewPointerState(event : lib6.PointerDownEvent) : _ImmediatePointerState {
        return _ImmediatePointerState(event.position);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get debugDescription() : string {
        return 'multidrag';
    }
}

export namespace _HorizontalPointerState {
    export type Constructors = MultiDragPointerState.Constructors | '_HorizontalPointerState';
    export type Interface = Omit<_HorizontalPointerState, Constructors>;
}
@DartClass
export class _HorizontalPointerState extends MultiDragPointerState {
    constructor(initialPosition : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _HorizontalPointerState(initialPosition : any) {
        super.MultiDragPointerState(initialPosition);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkForResolutionAfterMove() : any {
        /* TODO (AssertStatementImpl) : assert (pendingDelta != null); */;
        if (op(Op.GT,this.pendingDelta.dx.abs(),lib10.properties.kTouchSlop)) this.resolve(lib5.GestureDisposition.accepted);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accepted(starter : (position : any) => lib4.Drag) : any {
        starter(this.initialPosition);
    }
}

export namespace HorizontalMultiDragGestureRecognizer {
    export type Constructors = MultiDragGestureRecognizer.Constructors | 'HorizontalMultiDragGestureRecognizer';
    export type Interface = Omit<HorizontalMultiDragGestureRecognizer, Constructors>;
}
@DartClass
export class HorizontalMultiDragGestureRecognizer extends MultiDragGestureRecognizer<_HorizontalPointerState> {
    constructor(_namedArguments? : {debugOwner? : core.DartObject}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    HorizontalMultiDragGestureRecognizer(_namedArguments? : {debugOwner? : core.DartObject}) {
        let {debugOwner} = Object.assign({
        }, _namedArguments );
        super.MultiDragGestureRecognizer({
            debugOwner : debugOwner});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createNewPointerState(event : lib6.PointerDownEvent) : _HorizontalPointerState {
        return _HorizontalPointerState(event.position);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get debugDescription() : string {
        return 'horizontal multidrag';
    }
}

export namespace _VerticalPointerState {
    export type Constructors = MultiDragPointerState.Constructors | '_VerticalPointerState';
    export type Interface = Omit<_VerticalPointerState, Constructors>;
}
@DartClass
export class _VerticalPointerState extends MultiDragPointerState {
    constructor(initialPosition : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _VerticalPointerState(initialPosition : any) {
        super.MultiDragPointerState(initialPosition);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkForResolutionAfterMove() : any {
        /* TODO (AssertStatementImpl) : assert (pendingDelta != null); */;
        if (op(Op.GT,this.pendingDelta.dy.abs(),lib10.properties.kTouchSlop)) this.resolve(lib5.GestureDisposition.accepted);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accepted(starter : (position : any) => lib4.Drag) : any {
        starter(this.initialPosition);
    }
}

export namespace VerticalMultiDragGestureRecognizer {
    export type Constructors = MultiDragGestureRecognizer.Constructors | 'VerticalMultiDragGestureRecognizer';
    export type Interface = Omit<VerticalMultiDragGestureRecognizer, Constructors>;
}
@DartClass
export class VerticalMultiDragGestureRecognizer extends MultiDragGestureRecognizer<_VerticalPointerState> {
    constructor(_namedArguments? : {debugOwner? : core.DartObject}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VerticalMultiDragGestureRecognizer(_namedArguments? : {debugOwner? : core.DartObject}) {
        let {debugOwner} = Object.assign({
        }, _namedArguments );
        super.MultiDragGestureRecognizer({
            debugOwner : debugOwner});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createNewPointerState(event : lib6.PointerDownEvent) : _VerticalPointerState {
        return _VerticalPointerState(event.position);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get debugDescription() : string {
        return 'vertical multidrag';
    }
}

export namespace _DelayedPointerState {
    export type Constructors = MultiDragPointerState.Constructors | '_DelayedPointerState';
    export type Interface = Omit<_DelayedPointerState, Constructors>;
}
@DartClass
export class _DelayedPointerState extends MultiDragPointerState {
    constructor(initialPosition : any,delay : core.DartDuration) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DelayedPointerState(initialPosition : any,delay : core.DartDuration) {
        this._timer = async.DartTimer(delay,_delayPassed);
        this.assert = assert;
    }
     : any;

     : any;

    _timer;

}

export namespace DelayedMultiDragGestureRecognizer {
    export type Constructors = MultiDragGestureRecognizer.Constructors | 'DelayedMultiDragGestureRecognizer';
    export type Interface = Omit<DelayedMultiDragGestureRecognizer, Constructors>;
}
@DartClass
export class DelayedMultiDragGestureRecognizer extends MultiDragGestureRecognizer<_DelayedPointerState> {
    constructor(_namedArguments? : {delay? : core.DartDuration,debugOwner? : core.DartObject}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DelayedMultiDragGestureRecognizer(_namedArguments? : {delay? : core.DartDuration,debugOwner? : core.DartObject}) {
        let {delay,debugOwner} = Object.assign({
            "delay" : lib10.properties.kLongPressTimeout}, _namedArguments );
        this.assert = assert;
        this.delay = delay;
    }
     : any;

     : any;

     : any;

    delay : core.DartDuration;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createNewPointerState(event : lib6.PointerDownEvent) : _DelayedPointerState {
        return _DelayedPointerState(event.position,this.delay);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get debugDescription() : string {
        return 'long multidrag';
    }
}

export class properties {
    private static __$_timer : async.DartTimer;
    static get _timer() : async.DartTimer { 
        return this.__$_timer;
    }
    static set _timer(__$value : async.DartTimer)  { 
        this.__$_timer = __$value;
    }

    private static __$_starter : (position : any) => lib4.Drag;
    static get _starter() : (position : any) => lib4.Drag { 
        return this.__$_starter;
    }
    static set _starter(__$value : (position : any) => lib4.Drag)  { 
        this.__$_starter = __$value;
    }

}
