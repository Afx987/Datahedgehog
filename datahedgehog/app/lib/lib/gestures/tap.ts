/** Library asset:datahedgehog_monitor/lib/lib/gestures/tap.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./recognizer";
import * as lib4 from "./constants";
import * as lib5 from "./events";
import * as lib6 from "./arena";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export namespace TapDownDetails {
    export type Constructors = 'TapDownDetails';
    export type Interface = Omit<TapDownDetails, Constructors>;
}
@DartClass
export class TapDownDetails {
    constructor(_namedArguments? : {globalPosition? : any}) {
    }
    @defaultConstructor
    TapDownDetails(_namedArguments? : {globalPosition? : any}) {
        let {globalPosition} = Object.assign({
            "globalPosition" : Offset.zero}, _namedArguments );
        this.assert = assert;
        this.globalPosition = globalPosition;
    }
     : any;

    globalPosition : any;

}

export namespace TapUpDetails {
    export type Constructors = 'TapUpDetails';
    export type Interface = Omit<TapUpDetails, Constructors>;
}
@DartClass
export class TapUpDetails {
    constructor(_namedArguments? : {globalPosition? : any}) {
    }
    @defaultConstructor
    TapUpDetails(_namedArguments? : {globalPosition? : any}) {
        let {globalPosition} = Object.assign({
            "globalPosition" : Offset.zero}, _namedArguments );
        this.assert = assert;
        this.globalPosition = globalPosition;
    }
     : any;

    globalPosition : any;

}

export namespace TapGestureRecognizer {
    export type Constructors = lib3.PrimaryPointerGestureRecognizer.Constructors | 'TapGestureRecognizer';
    export type Interface = Omit<TapGestureRecognizer, Constructors>;
}
@DartClass
export class TapGestureRecognizer extends lib3.PrimaryPointerGestureRecognizer {
    constructor(_namedArguments? : {debugOwner? : core.DartObject}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TapGestureRecognizer(_namedArguments? : {debugOwner? : core.DartObject}) {
        let {debugOwner} = Object.assign({
        }, _namedArguments );
        this._sentTapDown = false;
        this._wonArenaForPrimaryPointer = false;
        super.PrimaryPointerGestureRecognizer({
            deadline : lib4.properties.kPressTimeout,debugOwner : debugOwner});
    }
    onTapDown : (details : TapDownDetails) => any;

    onTapUp : (details : TapUpDetails) => any;

    onTap : () => any;

    onTapCancel : () => any;

    _sentTapDown : boolean;

    _wonArenaForPrimaryPointer : boolean;

    _finalPosition : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handlePrimaryPointer(event : lib5.PointerEvent) : any {
        if (is(event, lib5.PointerUpEvent)) {
            this._finalPosition = event.position;
            this._checkUp();
        }else if (is(event, lib5.PointerCancelEvent)) {
            this._reset();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolve(disposition : lib6.GestureDisposition) : any {
        if (this._wonArenaForPrimaryPointer && op(Op.EQUALS,disposition,lib6.GestureDisposition.rejected)) {
            if (this.onTapCancel != null) op(Op.LT,this.invokeCallback.bind(this),);
            op(Op.GT,,('spontaneous onTapCancel'));
            this.onTapCancel;
            this._reset();
        }
        super.resolve(disposition);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didExceedDeadline() : any {
        this._checkDown();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    acceptGesture(pointer : number) : any {
        super.acceptGesture(pointer);
        if (pointer == this.primaryPointer) {
            this._checkDown();
            this._wonArenaForPrimaryPointer = true;
            this._checkUp();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rejectGesture(pointer : number) : any {
        super.rejectGesture(pointer);
        if (pointer == this.primaryPointer) {
            /* TODO (AssertStatementImpl) : assert (state != GestureRecognizerState.possible); */;
            if (this.onTapCancel != null) op(Op.LT,this.invokeCallback.bind(this),);
            op(Op.GT,,('forced onTapCancel'));
            this.onTapCancel;
            this._reset();
        }
    }
    _checkDown() : any {
        if (!this._sentTapDown) {
            if (this.onTapDown != null) op(Op.LT,this.invokeCallback.bind(this),);
            op(Op.GT,,('onTapDown'));
            () =>  {
                this.onTapDown(TapDownDetails({
                    globalPosition : this.initialPosition}));
            }
            this._sentTapDown = true;
        }
    }
    _checkUp() : any {
        if (this._wonArenaForPrimaryPointer && this._finalPosition != null) {
            this.resolve(lib6.GestureDisposition.accepted);
            if (!this._wonArenaForPrimaryPointer || op(Op.EQUALS,this._finalPosition,null)) {
                return;
            }
            if (this.onTapUp != null) op(Op.LT,this.invokeCallback.bind(this),);
            op(Op.GT,,('onTapUp'));
            () =>  {
                this.onTapUp(TapUpDetails({
                    globalPosition : this._finalPosition}));
            }
            if (this.onTap != null) op(Op.LT,this.invokeCallback.bind(this),);
            op(Op.GT,,('onTap'));
            this.onTap;
            this._reset();
        }
    }
    _reset() : any {
        this._sentTapDown = false;
        this._wonArenaForPrimaryPointer = false;
        this._finalPosition = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get debugDescription() : string {
        return 'tap';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib7.FlagProperty('wonArenaForPrimaryPointer',{
            value : this._wonArenaForPrimaryPointer,ifTrue : 'won arena'}));
        properties.add(lib7.DiagnosticsProperty('finalPosition',this._finalPosition,{
            defaultValue : null}));
        properties.add(lib7.FlagProperty('sentTapDown',{
            value : this._sentTapDown,ifTrue : 'sent tap down'}));
    }
}

export class properties {
}
