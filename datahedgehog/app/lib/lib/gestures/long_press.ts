/** Library asset:datahedgehog_monitor/lib/lib/gestures/long_press.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./recognizer";
import * as lib4 from "./constants";
import * as lib5 from "./arena";
import * as lib6 from "./events";

export namespace GestureLongPressDragStartDetails {
    export type Constructors = 'GestureLongPressDragStartDetails';
    export type Interface = Omit<GestureLongPressDragStartDetails, Constructors>;
}
@DartClass
export class GestureLongPressDragStartDetails {
    constructor(_namedArguments? : {sourceTimeStamp? : core.DartDuration,globalPosition? : any}) {
    }
    @defaultConstructor
    GestureLongPressDragStartDetails(_namedArguments? : {sourceTimeStamp? : core.DartDuration,globalPosition? : any}) {
        let {sourceTimeStamp,globalPosition} = Object.assign({
            "globalPosition" : Offset.zero}, _namedArguments );
        this.assert = assert;
        this.sourceTimeStamp = sourceTimeStamp;
        this.globalPosition = globalPosition;
    }
     : any;

    sourceTimeStamp : core.DartDuration;

    globalPosition : any;

}

export namespace GestureLongPressDragUpdateDetails {
    export type Constructors = 'GestureLongPressDragUpdateDetails';
    export type Interface = Omit<GestureLongPressDragUpdateDetails, Constructors>;
}
@DartClass
export class GestureLongPressDragUpdateDetails {
    constructor(_namedArguments? : {sourceTimeStamp? : core.DartDuration,globalPosition? : any,offsetFromOrigin? : any}) {
    }
    @defaultConstructor
    GestureLongPressDragUpdateDetails(_namedArguments? : {sourceTimeStamp? : core.DartDuration,globalPosition? : any,offsetFromOrigin? : any}) {
        let {sourceTimeStamp,globalPosition,offsetFromOrigin} = Object.assign({
            "globalPosition" : Offset.zero,
            "offsetFromOrigin" : Offset.zero}, _namedArguments );
        this.assert = assert;
        this.sourceTimeStamp = sourceTimeStamp;
        this.globalPosition = globalPosition;
        this.offsetFromOrigin = offsetFromOrigin;
    }
     : any;

     : any;

    sourceTimeStamp : core.DartDuration;

    globalPosition : any;

    offsetFromOrigin : any;

}

export namespace GestureLongPressDragUpDetails {
    export type Constructors = 'GestureLongPressDragUpDetails';
    export type Interface = Omit<GestureLongPressDragUpDetails, Constructors>;
}
@DartClass
export class GestureLongPressDragUpDetails {
    constructor(_namedArguments? : {sourceTimeStamp? : core.DartDuration,globalPosition? : any}) {
    }
    @defaultConstructor
    GestureLongPressDragUpDetails(_namedArguments? : {sourceTimeStamp? : core.DartDuration,globalPosition? : any}) {
        let {sourceTimeStamp,globalPosition} = Object.assign({
            "globalPosition" : Offset.zero}, _namedArguments );
        this.assert = assert;
        this.sourceTimeStamp = sourceTimeStamp;
        this.globalPosition = globalPosition;
    }
     : any;

    sourceTimeStamp : core.DartDuration;

    globalPosition : any;

}

export namespace LongPressGestureRecognizer {
    export type Constructors = lib3.PrimaryPointerGestureRecognizer.Constructors | 'LongPressGestureRecognizer';
    export type Interface = Omit<LongPressGestureRecognizer, Constructors>;
}
@DartClass
export class LongPressGestureRecognizer extends lib3.PrimaryPointerGestureRecognizer {
    constructor(_namedArguments? : {debugOwner? : core.DartObject}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LongPressGestureRecognizer(_namedArguments? : {debugOwner? : core.DartObject}) {
        let {debugOwner} = Object.assign({
        }, _namedArguments );
        this._longPressAccepted = false;
        super.PrimaryPointerGestureRecognizer({
            deadline : lib4.properties.kLongPressTimeout,debugOwner : debugOwner});
    }
    _longPressAccepted : boolean;

    onLongPress : () => void;

    onLongPressUp : () => void;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didExceedDeadline() : void {
        this.resolve(lib5.GestureDisposition.accepted);
        this._longPressAccepted = true;
        if (this.onLongPress != null) {
            op(Op.LT,this.invokeCallback.bind(this),);
            op(Op.GT,,('onLongPress'));
            this.onLongPress;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handlePrimaryPointer(event : lib6.PointerEvent) : void {
        if (is(event, lib6.PointerUpEvent)) {
            if (this._longPressAccepted == true && this.onLongPressUp != null) {
                this._longPressAccepted = false;
                op(Op.LT,this.invokeCallback.bind(this),);
                op(Op.GT,,('onLongPressUp'));
                this.onLongPressUp;
            }else {
                this.resolve(lib5.GestureDisposition.rejected);
            }
        }else if (is(event, lib6.PointerDownEvent) || is(event, lib6.PointerCancelEvent)) {
            this._longPressAccepted = false;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get debugDescription() : string {
        return 'long press';
    }
}

export namespace LongPressDragGestureRecognizer {
    export type Constructors = lib3.PrimaryPointerGestureRecognizer.Constructors | 'LongPressDragGestureRecognizer';
    export type Interface = Omit<LongPressDragGestureRecognizer, Constructors>;
}
@DartClass
export class LongPressDragGestureRecognizer extends lib3.PrimaryPointerGestureRecognizer {
    constructor(_namedArguments? : {debugOwner? : core.DartObject}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LongPressDragGestureRecognizer(_namedArguments? : {debugOwner? : core.DartObject}) {
        let {debugOwner} = Object.assign({
        }, _namedArguments );
        this._longPressAccepted = false;
        super.PrimaryPointerGestureRecognizer({
            deadline : lib4.properties.kLongPressTimeout,postAcceptSlopTolerance : null,debugOwner : debugOwner});
    }
    _longPressAccepted : boolean;

    _longPressOrigin : any;

    _longPressStartTimestamp : core.DartDuration;

    onLongPressStart : (details : GestureLongPressDragStartDetails) => void;

    onLongPressDragUpdate : (details : GestureLongPressDragUpdateDetails) => void;

    onLongPressUp : (details : GestureLongPressDragUpDetails) => void;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didExceedDeadline() : void {
        this.resolve(lib5.GestureDisposition.accepted);
        this._longPressAccepted = true;
        super.acceptGesture(this.primaryPointer);
        if (this.onLongPressStart != null) {
            op(Op.LT,this.invokeCallback.bind(this),);
            op(Op.GT,,('onLongPressStart'));
            () =>  {
                this.onLongPressStart(GestureLongPressDragStartDetails({
                    sourceTimeStamp : this._longPressStartTimestamp,globalPosition : this._longPressOrigin}));
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handlePrimaryPointer(event : lib6.PointerEvent) : void {
        if (is(event, lib6.PointerUpEvent)) {
            if (this._longPressAccepted == true && this.onLongPressUp != null) {
                this._longPressAccepted = false;
                op(Op.LT,this.invokeCallback.bind(this),);
                op(Op.GT,,('onLongPressUp'));
                () =>  {
                    this.onLongPressUp(GestureLongPressDragUpDetails({
                        sourceTimeStamp : event.timeStamp,globalPosition : event.position}));
                }
            }else {
                this.resolve(lib5.GestureDisposition.rejected);
            }
        }else if (is(event, lib6.PointerDownEvent)) {
            this._longPressAccepted = false;
            this._longPressStartTimestamp = event.timeStamp;
            this._longPressOrigin = event.position;
        }else if (is(event, lib6.PointerMoveEvent) && this._longPressAccepted && this.onLongPressDragUpdate != null) {
            op(Op.LT,this.invokeCallback.bind(this),);
            op(Op.GT,,('onLongPressDrag'));
            () =>  {
                this.onLongPressDragUpdate(GestureLongPressDragUpdateDetails({
                    sourceTimeStamp : event.timeStamp,globalPosition : event.position,offsetFromOrigin : op(Op.MINUS,event.position,this._longPressOrigin)}));
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    acceptGesture(pointer : number) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didStopTrackingLastPointer(pointer : number) : void {
        this._longPressAccepted = false;
        this._longPressOrigin = null;
        this._longPressStartTimestamp = null;
        super.didStopTrackingLastPointer(pointer);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get debugDescription() : string {
        return 'long press drag';
    }
}

export class properties {
}
