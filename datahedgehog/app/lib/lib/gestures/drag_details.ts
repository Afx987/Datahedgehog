/** Library asset:datahedgehog_monitor/lib/lib/gestures/drag_details.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./velocity_tracker";

export namespace DragDownDetails {
    export type Constructors = 'DragDownDetails';
    export type Interface = Omit<DragDownDetails, Constructors>;
}
@DartClass
export class DragDownDetails {
    constructor(_namedArguments? : {globalPosition? : any}) {
    }
    @defaultConstructor
    DragDownDetails(_namedArguments? : {globalPosition? : any}) {
        let {globalPosition} = Object.assign({
            "globalPosition" : Offset.zero}, _namedArguments );
        this.assert = assert;
        this.globalPosition = globalPosition;
    }
     : any;

    globalPosition : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.globalPosition})`;
    }
}

export namespace DragStartDetails {
    export type Constructors = 'DragStartDetails';
    export type Interface = Omit<DragStartDetails, Constructors>;
}
@DartClass
export class DragStartDetails {
    constructor(_namedArguments? : {sourceTimeStamp? : core.DartDuration,globalPosition? : any}) {
    }
    @defaultConstructor
    DragStartDetails(_namedArguments? : {sourceTimeStamp? : core.DartDuration,globalPosition? : any}) {
        let {sourceTimeStamp,globalPosition} = Object.assign({
            "globalPosition" : Offset.zero}, _namedArguments );
        this.assert = assert;
        this.sourceTimeStamp = sourceTimeStamp;
        this.globalPosition = globalPosition;
    }
     : any;

    sourceTimeStamp : core.DartDuration;

    globalPosition : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.globalPosition})`;
    }
}

export namespace DragUpdateDetails {
    export type Constructors = 'DragUpdateDetails';
    export type Interface = Omit<DragUpdateDetails, Constructors>;
}
@DartClass
export class DragUpdateDetails {
    constructor(_namedArguments? : {sourceTimeStamp? : core.DartDuration,delta? : any,primaryDelta? : double,globalPosition? : any}) {
    }
    @defaultConstructor
    DragUpdateDetails(_namedArguments? : {sourceTimeStamp? : core.DartDuration,delta? : any,primaryDelta? : double,globalPosition? : any}) {
        let {sourceTimeStamp,delta,primaryDelta,globalPosition} = Object.assign({
            "delta" : Offset.zero}, _namedArguments );
        this.assert = assert;
        this.sourceTimeStamp = sourceTimeStamp;
        this.delta = delta;
        this.primaryDelta = primaryDelta;
        this.globalPosition = globalPosition;
    }
     : any;

     : any;

    [null](primaryDelta : any, : any) {
    }
     : any;

     : any;

    [null](primaryDelta : any, : any) {
    }
     : any;

     : any;

    sourceTimeStamp : core.DartDuration;

    delta : any;

    primaryDelta : double;

    globalPosition : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.delta})`;
    }
}

export namespace DragEndDetails {
    export type Constructors = 'DragEndDetails';
    export type Interface = Omit<DragEndDetails, Constructors>;
}
@DartClass
export class DragEndDetails {
    constructor(_namedArguments? : {velocity? : lib3.Velocity,primaryVelocity? : double}) {
    }
    @defaultConstructor
    DragEndDetails(_namedArguments? : {velocity? : lib3.Velocity,primaryVelocity? : double}) {
        let {velocity,primaryVelocity} = Object.assign({
            "velocity" : lib3.Velocity.zero}, _namedArguments );
        this.assert = assert;
        this.velocity = velocity;
        this.primaryVelocity = primaryVelocity;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    velocity : lib3.Velocity;

    primaryVelocity : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.velocity})`;
    }
}

export class properties {
}
