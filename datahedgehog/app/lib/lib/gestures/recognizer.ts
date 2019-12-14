/** Library asset:datahedgehog_monitor/lib/lib/gestures/recognizer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./arena";
import * as lib4 from "./events";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/assertions";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as collection from "@dart2ts/dart/core";
import * as lib8 from "./binding";
import * as lib9 from "./team";
import * as lib10 from "./constants";

export enum DragStartBehavior {
    down,
    start
}

export namespace GestureRecognizer {
    export type Constructors = lib3.GestureArenaMember.Constructors | 'GestureRecognizer';
    export type Interface = Omit<GestureRecognizer, Constructors>;
}
@DartClass
@With(any)
export class GestureRecognizer extends lib3.GestureArenaMember implements any.Interface {
    constructor(_namedArguments? : {debugOwner? : core.DartObject}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GestureRecognizer(_namedArguments? : {debugOwner? : core.DartObject}) {
        let {debugOwner} = Object.assign({
        }, _namedArguments );
        this.debugOwner = debugOwner;
    }
    debugOwner : core.DartObject;

    @Abstract
    addPointer(event : lib4.PointerDownEvent) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
    }
    @AbstractProperty
    get debugDescription() : string{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    invokeCallback<T>(name : string,callback : <T>() => T,_namedArguments? : {debugReport? : <T>() => string}) : T {
        let {debugReport} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (callback != null); */;
        let result : T;
        try {
            /* TODO (AssertStatementImpl) : assert (() {if (debugPrintRecognizerCallbacksTrace) {final String report = debugReport != null ? debugReport() : null; final String prefix = debugPrintGestureArenaDiagnostics ? ' ' * 19 + '❙ ' : ''; debugPrint('$prefix$this calling $name callback.${report?.isNotEmpty == true ? " $report" : ""}');} return true;}()); */;
            result = callback();
        } catch (__error__) {

            {
                let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                lib5.FlutterError.reportError(lib5.FlutterErrorDetails({
                    exception : exception,stack : stack,library : 'gesture',context : 'while handling a gesture',informationCollector : (information : core.DartStringBuffer) =>  {
                        information.writeln(`Handler: ${name}`);
                        information.writeln('Recognizer:');
                        information.writeln(`  ${this}`);
                    }}));
            }
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib6.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib6.DiagnosticsProperty('debugOwner',this.debugOwner,{
            defaultValue : null}));
    }
}

export enum GestureRecognizerState {
    ready,
    possible,
    accepted,
    defunct
}

export namespace OneSequenceGestureRecognizer {
    export type Constructors = GestureRecognizer.Constructors | 'OneSequenceGestureRecognizer';
    export type Interface = Omit<OneSequenceGestureRecognizer, Constructors>;
}
@DartClass
export class OneSequenceGestureRecognizer extends GestureRecognizer {
    constructor(_namedArguments? : {debugOwner? : core.DartObject}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OneSequenceGestureRecognizer(_namedArguments? : {debugOwner? : core.DartObject}) {
        let {debugOwner} = Object.assign({
        }, _namedArguments );
        this._entries = new core.DartMap.literal([
        ]);
        this._trackedPointers = core.DartHashSet();
        super.GestureRecognizer({
            debugOwner : debugOwner});
    }
    _entries : core.DartMap<number,lib3.GestureArenaEntry>;

    _trackedPointers : core.DartSet<number>;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    handleEvent(event : lib4.PointerEvent) : any{ throw 'abstract'}
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
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    didStopTrackingLastPointer(pointer : number) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    resolve(disposition : lib3.GestureDisposition) : any {
        let localEntries : core.DartList<lib3.GestureArenaEntry> = op(Op.LT,core.DartList<E>,lib3.GestureArenaEntry);
        op(Op.GT,,.from(this._entries.values));
        this._entries.clear();
        for(let entry of localEntries) entry.resolve(disposition);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this.resolve(lib3.GestureDisposition.rejected);
        for(let pointer of this._trackedPointers) lib8.properties.GestureBinding.instance.pointerRouter.removeRoute(pointer,this.handleEvent.bind(this));
        this._trackedPointers.clear();
        /* TODO (AssertStatementImpl) : assert (_entries.isEmpty); */;
        super.dispose();
    }
    get team() : lib9.GestureArenaTeam {
        return this._team;
    }
    _team : lib9.GestureArenaTeam;

    set team(value : lib9.GestureArenaTeam) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        /* TODO (AssertStatementImpl) : assert (_entries.isEmpty); */;
        /* TODO (AssertStatementImpl) : assert (_trackedPointers.isEmpty); */;
        /* TODO (AssertStatementImpl) : assert (_team == null); */;
        this._team = value;
    }
    _addPointerToArena(pointer : number) : lib3.GestureArenaEntry {
        if (this._team != null) return this._team.add(pointer,this);
        return lib8.properties.GestureBinding.instance.gestureArena.add(pointer,this);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    startTrackingPointer(pointer : number) : any {
        lib8.properties.GestureBinding.instance.pointerRouter.addRoute(pointer,this.handleEvent.bind(this));
        this._trackedPointers.add(pointer);
        /* TODO (AssertStatementImpl) : assert (!_entries.containsValue(pointer)); */;
        this._entries.set(pointer,this._addPointerToArena(pointer));
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    stopTrackingPointer(pointer : number) : any {
        if (this._trackedPointers.contains(pointer)) {
            lib8.properties.GestureBinding.instance.pointerRouter.removeRoute(pointer,this.handleEvent.bind(this));
            this._trackedPointers.remove(pointer);
            if (this._trackedPointers.isEmpty) this.didStopTrackingLastPointer(pointer);
        }
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    stopTrackingIfPointerNoLongerDown(event : lib4.PointerEvent) : any {
        if (is(event, lib4.PointerUpEvent) || is(event, lib4.PointerCancelEvent)) this.stopTrackingPointer(event.pointer);
    }
}

export namespace PrimaryPointerGestureRecognizer {
    export type Constructors = OneSequenceGestureRecognizer.Constructors | 'PrimaryPointerGestureRecognizer';
    export type Interface = Omit<PrimaryPointerGestureRecognizer, Constructors>;
}
@DartClass
export class PrimaryPointerGestureRecognizer extends OneSequenceGestureRecognizer {
    constructor(_namedArguments? : {deadline? : core.DartDuration,preAcceptSlopTolerance? : double,postAcceptSlopTolerance? : double,debugOwner? : core.DartObject}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PrimaryPointerGestureRecognizer(_namedArguments? : {deadline? : core.DartDuration,preAcceptSlopTolerance? : double,postAcceptSlopTolerance? : double,debugOwner? : core.DartObject}) {
        let {deadline,preAcceptSlopTolerance,postAcceptSlopTolerance,debugOwner} = Object.assign({
            "preAcceptSlopTolerance" : lib10.properties.kTouchSlop,
            "postAcceptSlopTolerance" : lib10.properties.kTouchSlop}, _namedArguments );
        this.state = GestureRecognizerState.ready;
        this.assert = assert;
        this.deadline = deadline;
        this.preAcceptSlopTolerance = preAcceptSlopTolerance;
        this.postAcceptSlopTolerance = postAcceptSlopTolerance;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    deadline : core.DartDuration;

    preAcceptSlopTolerance : double;

    postAcceptSlopTolerance : double;

    state : GestureRecognizerState;

    primaryPointer : number;

    initialPosition : any;

    _timer : async.DartTimer;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addPointer(event : lib4.PointerDownEvent) : any {
        this.startTrackingPointer(event.pointer);
        if (op(Op.EQUALS,this.state,GestureRecognizerState.ready)) {
            this.state = GestureRecognizerState.possible;
            this.primaryPointer = event.pointer;
            this.initialPosition = event.position;
            if (this.deadline != null) this._timer = async.DartTimer(this.deadline,this.didExceedDeadline.bind(this));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleEvent(event : lib4.PointerEvent) : any {
        /* TODO (AssertStatementImpl) : assert (state != GestureRecognizerState.ready); */;
        if (event.pointer == this.primaryPointer) {
            let isPreAcceptSlopPastTolerance : boolean = op(Op.EQUALS,this.state,GestureRecognizerState.possible) && this.preAcceptSlopTolerance != null && this._getDistance(event) > this.preAcceptSlopTolerance;
            let isPostAcceptSlopPastTolerance : boolean = op(Op.EQUALS,this.state,GestureRecognizerState.accepted) && this.postAcceptSlopTolerance != null && this._getDistance(event) > this.postAcceptSlopTolerance;
            if (is(event, lib4.PointerMoveEvent) && (isPreAcceptSlopPastTolerance || isPostAcceptSlopPastTolerance)) {
                this.resolve(lib3.GestureDisposition.rejected);
                this.stopTrackingPointer(this.primaryPointer);
            }else {
                this.handlePrimaryPointer(event);
            }
        }
        this.stopTrackingIfPointerNoLongerDown(event);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    handlePrimaryPointer(event : lib4.PointerEvent) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    didExceedDeadline() : any {
        /* TODO (AssertStatementImpl) : assert (deadline == null); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    acceptGesture(pointer : number) : any {
        if (pointer == this.primaryPointer && op(Op.EQUALS,this.state,GestureRecognizerState.possible)) {
            this.state = GestureRecognizerState.accepted;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rejectGesture(pointer : number) : any {
        if (pointer == this.primaryPointer && (op(Op.EQUALS,this.state,GestureRecognizerState.possible) || op(Op.EQUALS,this.state,GestureRecognizerState.accepted))) {
            this._stopTimer();
            this.state = GestureRecognizerState.defunct;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didStopTrackingLastPointer(pointer : number) : any {
        /* TODO (AssertStatementImpl) : assert (state != GestureRecognizerState.ready); */;
        this._stopTimer();
        this.state = GestureRecognizerState.ready;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._stopTimer();
        super.dispose();
    }
    _stopTimer() : any {
        if (this._timer != null) {
            this._timer.cancel();
            this._timer = null;
        }
    }
    _getDistance(event : lib4.PointerEvent) : double {
        let offset : any = op(Op.MINUS,event.position,this.initialPosition);
        return offset.distance;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib6.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib6.EnumProperty('state',this.state));
    }
}

export class properties {
}
