/** Library asset:datahedgehog_monitor/lib/lib/gestures/converter.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./events";

export namespace _PointerState {
    export type Constructors = '_PointerState';
    export type Interface = Omit<_PointerState, Constructors>;
}
@DartClass
export class _PointerState {
    constructor(lastPosition : any) {
    }
    @defaultConstructor
    _PointerState(lastPosition : any) {
        this._down = false;
        this.lastPosition = lastPosition;
    }
    get pointer() : number {
        return this._pointer;
    }
    _pointer : number;

    private static __$_pointerCount : number;
    static get _pointerCount() : number { 
        if (this.__$_pointerCount===undefined) {
            this.__$_pointerCount = 0;
        }
        return this.__$_pointerCount;
    }
    static set _pointerCount(__$value : number)  { 
        this.__$_pointerCount = __$value;
    }

    startNewPointer() : void {
        _PointerState._pointerCount += 1;
        this._pointer = _PointerState._pointerCount;
    }
    get down() : boolean {
        return this._down;
    }
    _down : boolean;

    setDown() : void {
        /* TODO (AssertStatementImpl) : assert (!_down); */;
        this._down = true;
    }
    setUp() : void {
        /* TODO (AssertStatementImpl) : assert (_down); */;
        this._down = false;
    }
    lastPosition : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `_PointerState(pointer: ${this.pointer}, down: ${this.down}, lastPosition: ${this.lastPosition})`;
    }
}

export namespace PointerEventConverter {
    export type Constructors = '_';
    export type Interface = Omit<PointerEventConverter, Constructors>;
}
@DartClass
export class PointerEventConverter {
    @namedConstructor
    _() {
    }
    static _ : new() => PointerEventConverter;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'visibleForTesting',value : {
            arguments : [],namedArguments : {
            }}})
    static clearPointers() : void {
        return PointerEventConverter._pointers.clear();
    }
    private static __$_pointers : core.DartMap<number,_PointerState>;
    static get _pointers() : core.DartMap<number,_PointerState> { 
        if (this.__$_pointers===undefined) {
            this.__$_pointers = new core.DartMap.literal([
            ]);
        }
        return this.__$_pointers;
    }
    static set _pointers(__$value : core.DartMap<number,_PointerState>)  { 
        this.__$_pointers = __$value;
    }

    static _ensureStateForPointer(datum : any,position : any) : _PointerState {
        return PointerEventConverter._pointers.putIfAbsent(datum.device,() =>  {
            return _PointerState(position);
        });
    }
    static expand(data : core.DartIterable<any>,devicePixelRatio : double) : core.DartIterable<lib3.PointerEvent> { 
        return core.iter<lib3.PointerEvent>(()=>(function*()  {
            for(let datum of data) {
                let position : any = op(Op.DIVIDE,Offset(datum.physicalX,datum.physicalY),devicePixelRatio);
                let radiusMinor : double = PointerEventConverter._toLogicalPixels(datum.radiusMinor,devicePixelRatio);
                let radiusMajor : double = PointerEventConverter._toLogicalPixels(datum.radiusMajor,devicePixelRatio);
                let radiusMin : double = PointerEventConverter._toLogicalPixels(datum.radiusMin,devicePixelRatio);
                let radiusMax : double = PointerEventConverter._toLogicalPixels(datum.radiusMax,devicePixelRatio);
                let timeStamp : core.DartDuration = datum.timeStamp;
                let kind : any = datum.kind;
                /* TODO (AssertStatementImpl) : assert (datum.change != null); */;
                switch (datum.change) {
                    case ui.PointerChange.add:
                        /* TODO (AssertStatementImpl) : assert (!_pointers.containsKey(datum.device)); */;
                        let state : _PointerState = PointerEventConverter._ensureStateForPointer(datum,position);
                        /* TODO (AssertStatementImpl) : assert (state.lastPosition == position); */;
                        yield lib3.PointerAddedEvent({
                            timeStamp : timeStamp,kind : kind,device : datum.device,position : position,obscured : datum.obscured,pressureMin : datum.pressureMin,pressureMax : datum.pressureMax,distance : datum.distance,distanceMax : datum.distanceMax,radiusMin : radiusMin,radiusMax : radiusMax,orientation : datum.orientation,tilt : datum.tilt});
                        break;
                    case ui.PointerChange.hover:
                        let alreadyAdded : boolean = PointerEventConverter._pointers.containsKey(datum.device);
                        let state : _PointerState = PointerEventConverter._ensureStateForPointer(datum,position);
                        /* TODO (AssertStatementImpl) : assert (!state.down); */;
                        if (!alreadyAdded) {
                            /* TODO (AssertStatementImpl) : assert (state.lastPosition == position); */;
                            yield lib3.PointerAddedEvent({
                                timeStamp : timeStamp,kind : kind,device : datum.device,position : position,obscured : datum.obscured,pressureMin : datum.pressureMin,pressureMax : datum.pressureMax,distance : datum.distance,distanceMax : datum.distanceMax,radiusMin : radiusMin,radiusMax : radiusMax,orientation : datum.orientation,tilt : datum.tilt});
                        }
                        let offset : any = op(Op.MINUS,position,state.lastPosition);
                        state.lastPosition = position;
                        yield lib3.PointerHoverEvent({
                            timeStamp : timeStamp,kind : kind,device : datum.device,position : position,delta : offset,buttons : datum.buttons,obscured : datum.obscured,pressureMin : datum.pressureMin,pressureMax : datum.pressureMax,distance : datum.distance,distanceMax : datum.distanceMax,size : datum.size,radiusMajor : radiusMajor,radiusMinor : radiusMinor,radiusMin : radiusMin,radiusMax : radiusMax,orientation : datum.orientation,tilt : datum.tilt});
                        state.lastPosition = position;
                        break;
                    case ui.PointerChange.down:
                        let alreadyAdded : boolean = PointerEventConverter._pointers.containsKey(datum.device);
                        let state : _PointerState = PointerEventConverter._ensureStateForPointer(datum,position);
                        /* TODO (AssertStatementImpl) : assert (!state.down); */;
                        if (!alreadyAdded) {
                            /* TODO (AssertStatementImpl) : assert (state.lastPosition == position); */;
                            yield lib3.PointerAddedEvent({
                                timeStamp : timeStamp,kind : kind,device : datum.device,position : position,obscured : datum.obscured,pressureMin : datum.pressureMin,pressureMax : datum.pressureMax,distance : datum.distance,distanceMax : datum.distanceMax,radiusMin : radiusMin,radiusMax : radiusMax,orientation : datum.orientation,tilt : datum.tilt});
                        }
                        if (state.lastPosition != position) {
                            let offset : any = op(Op.MINUS,position,state.lastPosition);
                            state.lastPosition = position;
                            yield lib3.PointerHoverEvent({
                                timeStamp : timeStamp,kind : kind,device : datum.device,position : position,delta : offset,buttons : datum.buttons,obscured : datum.obscured,pressureMin : datum.pressureMin,pressureMax : datum.pressureMax,distance : datum.distance,distanceMax : datum.distanceMax,size : datum.size,radiusMajor : radiusMajor,radiusMinor : radiusMinor,radiusMin : radiusMin,radiusMax : radiusMax,orientation : datum.orientation,tilt : datum.tilt,synthesized : true});
                            state.lastPosition = position;
                        }
                        state.startNewPointer();
                        state.setDown();
                        yield lib3.PointerDownEvent({
                            timeStamp : timeStamp,pointer : state.pointer,kind : kind,device : datum.device,position : position,buttons : datum.buttons,obscured : datum.obscured,pressure : datum.pressure,pressureMin : datum.pressureMin,pressureMax : datum.pressureMax,distanceMax : datum.distanceMax,size : datum.size,radiusMajor : radiusMajor,radiusMinor : radiusMinor,radiusMin : radiusMin,radiusMax : radiusMax,orientation : datum.orientation,tilt : datum.tilt});
                        break;
                    case ui.PointerChange.move:
                        /* TODO (AssertStatementImpl) : assert (_pointers.containsKey(datum.device)); */;
                        let state : _PointerState = PointerEventConverter._pointers.get(datum.device);
                        /* TODO (AssertStatementImpl) : assert (state.down); */;
                        let offset : any = op(Op.MINUS,position,state.lastPosition);
                        state.lastPosition = position;
                        yield lib3.PointerMoveEvent({
                            timeStamp : timeStamp,pointer : state.pointer,kind : kind,device : datum.device,position : position,delta : offset,buttons : datum.buttons,obscured : datum.obscured,pressure : datum.pressure,pressureMin : datum.pressureMin,pressureMax : datum.pressureMax,distanceMax : datum.distanceMax,size : datum.size,radiusMajor : radiusMajor,radiusMinor : radiusMinor,radiusMin : radiusMin,radiusMax : radiusMax,orientation : datum.orientation,tilt : datum.tilt,platformData : datum.platformData});
                        break;
                    case ui.PointerChange.up:
                    case ui.PointerChange.cancel:
                        /* TODO (AssertStatementImpl) : assert (_pointers.containsKey(datum.device)); */;
                        let state : _PointerState = PointerEventConverter._pointers.get(datum.device);
                        /* TODO (AssertStatementImpl) : assert (state.down); */;
                        if (position != state.lastPosition) {
                            let offset : any = op(Op.MINUS,position,state.lastPosition);
                            state.lastPosition = position;
                            yield lib3.PointerMoveEvent({
                                timeStamp : timeStamp,pointer : state.pointer,kind : kind,device : datum.device,position : position,delta : offset,buttons : datum.buttons,obscured : datum.obscured,pressure : datum.pressure,pressureMin : datum.pressureMin,pressureMax : datum.pressureMax,distanceMax : datum.distanceMax,size : datum.size,radiusMajor : radiusMajor,radiusMinor : radiusMinor,radiusMin : radiusMin,radiusMax : radiusMax,orientation : datum.orientation,tilt : datum.tilt,synthesized : true});
                            state.lastPosition = position;
                        }
                        /* TODO (AssertStatementImpl) : assert (position == state.lastPosition); */;
                        state.setUp();
                        if (op(Op.EQUALS,datum.change,ui.PointerChange.up)) {
                            yield lib3.PointerUpEvent({
                                timeStamp : timeStamp,pointer : state.pointer,kind : kind,device : datum.device,position : position,buttons : datum.buttons,obscured : datum.obscured,pressure : datum.pressure,pressureMin : datum.pressureMin,pressureMax : datum.pressureMax,distance : datum.distance,distanceMax : datum.distanceMax,size : datum.size,radiusMajor : radiusMajor,radiusMinor : radiusMinor,radiusMin : radiusMin,radiusMax : radiusMax,orientation : datum.orientation,tilt : datum.tilt});
                        }else {
                            yield lib3.PointerCancelEvent({
                                timeStamp : timeStamp,pointer : state.pointer,kind : kind,device : datum.device,position : position,buttons : datum.buttons,obscured : datum.obscured,pressureMin : datum.pressureMin,pressureMax : datum.pressureMax,distance : datum.distance,distanceMax : datum.distanceMax,size : datum.size,radiusMajor : radiusMajor,radiusMinor : radiusMinor,radiusMin : radiusMin,radiusMax : radiusMax,orientation : datum.orientation,tilt : datum.tilt});
                        }
                        break;
                    case ui.PointerChange.remove:
                        /* TODO (AssertStatementImpl) : assert (_pointers.containsKey(datum.device)); */;
                        let state : _PointerState = PointerEventConverter._pointers.get(datum.device);
                        if (state.down) {
                            yield lib3.PointerCancelEvent({
                                timeStamp : timeStamp,pointer : state.pointer,kind : kind,device : datum.device,position : position,buttons : datum.buttons,obscured : datum.obscured,pressureMin : datum.pressureMin,pressureMax : datum.pressureMax,distance : datum.distance,distanceMax : datum.distanceMax,size : datum.size,radiusMajor : radiusMajor,radiusMinor : radiusMinor,radiusMin : radiusMin,radiusMax : radiusMax,orientation : datum.orientation,tilt : datum.tilt});
                        }
                        PointerEventConverter._pointers.remove(datum.device);
                        yield lib3.PointerRemovedEvent({
                            timeStamp : timeStamp,kind : kind,device : datum.device,obscured : datum.obscured,pressureMin : datum.pressureMin,pressureMax : datum.pressureMax,distanceMax : datum.distanceMax,radiusMin : radiusMin,radiusMax : radiusMax});
                        break;
                }
            }
        }).call(this));
    }

    static _toLogicalPixels(physicalPixels : double,devicePixelRatio : double) : double {
        return physicalPixels == null ? null : physicalPixels / devicePixelRatio;
    }
}

export class properties {
}
