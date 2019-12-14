/** Library asset:datahedgehog_monitor/lib/lib/gestures/events.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/basic_types";

export var nthMouseButton : (number : number) => number = (number : number) : number =>  {
    return (properties.kPrimaryMouseButton << (number - 1)) & lib3.properties.kMaxUnsignedSMI;
};
export var nthStylusButton : (number : number) => number = (number : number) : number =>  {
    return (properties.kPrimaryStylusButton << (number - 1)) & lib3.properties.kMaxUnsignedSMI;
};
export namespace PointerEvent {
    export type Constructors = 'PointerEvent';
    export type Interface = Omit<PointerEvent, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class PointerEvent {
    constructor(_namedArguments? : {timeStamp? : core.DartDuration,pointer? : number,kind? : any,device? : number,position? : any,delta? : any,buttons? : number,down? : boolean,obscured? : boolean,pressure? : double,pressureMin? : double,pressureMax? : double,distance? : double,distanceMax? : double,size? : double,radiusMajor? : double,radiusMinor? : double,radiusMin? : double,radiusMax? : double,orientation? : double,tilt? : double,platformData? : number,synthesized? : boolean}) {
    }
    @defaultConstructor
    PointerEvent(_namedArguments? : {timeStamp? : core.DartDuration,pointer? : number,kind? : any,device? : number,position? : any,delta? : any,buttons? : number,down? : boolean,obscured? : boolean,pressure? : double,pressureMin? : double,pressureMax? : double,distance? : double,distanceMax? : double,size? : double,radiusMajor? : double,radiusMinor? : double,radiusMin? : double,radiusMax? : double,orientation? : double,tilt? : double,platformData? : number,synthesized? : boolean}) {
        let {timeStamp,pointer,kind,device,position,delta,buttons,down,obscured,pressure,pressureMin,pressureMax,distance,distanceMax,size,radiusMajor,radiusMinor,radiusMin,radiusMax,orientation,tilt,platformData,synthesized} = Object.assign({
            "timeStamp" : core.DartDuration.zero,
            "pointer" : 0,
            "kind" : PointerDeviceKind.touch,
            "device" : 0,
            "position" : Offset.zero,
            "delta" : Offset.zero,
            "buttons" : 0,
            "down" : false,
            "obscured" : false,
            "pressure" : 1.0,
            "pressureMin" : 1.0,
            "pressureMax" : 1.0,
            "distance" : 0.0,
            "distanceMax" : 0.0,
            "size" : 0.0,
            "radiusMajor" : 0.0,
            "radiusMinor" : 0.0,
            "radiusMin" : 0.0,
            "radiusMax" : 0.0,
            "orientation" : 0.0,
            "tilt" : 0.0,
            "platformData" : 0,
            "synthesized" : false}, _namedArguments );
        this.timeStamp = timeStamp;
        this.pointer = pointer;
        this.kind = kind;
        this.device = device;
        this.position = position;
        this.delta = delta;
        this.buttons = buttons;
        this.down = down;
        this.obscured = obscured;
        this.pressure = pressure;
        this.pressureMin = pressureMin;
        this.pressureMax = pressureMax;
        this.distance = distance;
        this.distanceMax = distanceMax;
        this.size = size;
        this.radiusMajor = radiusMajor;
        this.radiusMinor = radiusMinor;
        this.radiusMin = radiusMin;
        this.radiusMax = radiusMax;
        this.orientation = orientation;
        this.tilt = tilt;
        this.platformData = platformData;
        this.synthesized = synthesized;
    }
    timeStamp : core.DartDuration;

    pointer : number;

    kind : any;

    device : number;

    position : any;

    delta : any;

    buttons : number;

    down : boolean;

    obscured : boolean;

    pressure : double;

    pressureMin : double;

    pressureMax : double;

    distance : double;

    get distanceMin() : double {
        return 0.0;
    }
    distanceMax : double;

    size : double;

    radiusMajor : double;

    radiusMinor : double;

    radiusMin : double;

    radiusMax : double;

    orientation : double;

    tilt : double;

    platformData : number;

    synthesized : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.position})`;
    }
    toStringFull() : string {
        return `${this.runtimeType}(` + `timeStamp: ${this.timeStamp}, ` + `pointer: ${this.pointer}, ` + `kind: ${this.kind}, ` + `device: ${this.device}, ` + `position: ${this.position}, ` + `delta: ${this.delta}, ` + `buttons: ${this.buttons}, ` + `down: ${this.down}, ` + `obscured: ${this.obscured}, ` + `pressure: ${this.pressure}, ` + `pressureMin: ${this.pressureMin}, ` + `pressureMax: ${this.pressureMax}, ` + `distance: ${this.distance}, ` + `distanceMin: ${this.distanceMin}, ` + `distanceMax: ${this.distanceMax}, ` + `size: ${this.size}, ` + `radiusMajor: ${this.radiusMajor}, ` + `radiusMinor: ${this.radiusMinor}, ` + `radiusMin: ${this.radiusMin}, ` + `radiusMax: ${this.radiusMax}, ` + `orientation: ${this.orientation}, ` + `tilt: ${this.tilt}, ` + `platformData: ${this.platformData}, ` + `synthesized: ${this.synthesized}` + ')';
    }
}

export namespace PointerAddedEvent {
    export type Constructors = PointerEvent.Constructors | 'PointerAddedEvent';
    export type Interface = Omit<PointerAddedEvent, Constructors>;
}
@DartClass
export class PointerAddedEvent extends PointerEvent {
    constructor(_namedArguments? : {timeStamp? : core.DartDuration,kind? : any,device? : number,position? : any,obscured? : boolean,pressure? : double,pressureMin? : double,pressureMax? : double,distance? : double,distanceMax? : double,radiusMin? : double,radiusMax? : double,orientation? : double,tilt? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PointerAddedEvent(_namedArguments? : {timeStamp? : core.DartDuration,kind? : any,device? : number,position? : any,obscured? : boolean,pressure? : double,pressureMin? : double,pressureMax? : double,distance? : double,distanceMax? : double,radiusMin? : double,radiusMax? : double,orientation? : double,tilt? : double}) {
        let {timeStamp,kind,device,position,obscured,pressure,pressureMin,pressureMax,distance,distanceMax,radiusMin,radiusMax,orientation,tilt} = Object.assign({
            "timeStamp" : core.DartDuration.zero,
            "kind" : PointerDeviceKind.touch,
            "device" : 0,
            "position" : Offset.zero,
            "obscured" : false,
            "pressure" : 0.0,
            "pressureMin" : 1.0,
            "pressureMax" : 1.0,
            "distance" : 0.0,
            "distanceMax" : 0.0,
            "radiusMin" : 0.0,
            "radiusMax" : 0.0,
            "orientation" : 0.0,
            "tilt" : 0.0}, _namedArguments );
        super.PointerEvent({
            timeStamp : timeStamp,kind : kind,device : device,position : position,obscured : obscured,pressure : pressure,pressureMin : pressureMin,pressureMax : pressureMax,distance : distance,distanceMax : distanceMax,radiusMin : radiusMin,radiusMax : radiusMax,orientation : orientation,tilt : tilt});
    }
}

export namespace PointerRemovedEvent {
    export type Constructors = PointerEvent.Constructors | 'PointerRemovedEvent';
    export type Interface = Omit<PointerRemovedEvent, Constructors>;
}
@DartClass
export class PointerRemovedEvent extends PointerEvent {
    constructor(_namedArguments? : {timeStamp? : core.DartDuration,kind? : any,device? : number,obscured? : boolean,pressure? : double,pressureMin? : double,pressureMax? : double,distanceMax? : double,radiusMin? : double,radiusMax? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PointerRemovedEvent(_namedArguments? : {timeStamp? : core.DartDuration,kind? : any,device? : number,obscured? : boolean,pressure? : double,pressureMin? : double,pressureMax? : double,distanceMax? : double,radiusMin? : double,radiusMax? : double}) {
        let {timeStamp,kind,device,obscured,pressure,pressureMin,pressureMax,distanceMax,radiusMin,radiusMax} = Object.assign({
            "timeStamp" : core.DartDuration.zero,
            "kind" : PointerDeviceKind.touch,
            "device" : 0,
            "obscured" : false,
            "pressure" : 0.0,
            "pressureMin" : 1.0,
            "pressureMax" : 1.0,
            "distanceMax" : 0.0,
            "radiusMin" : 0.0,
            "radiusMax" : 0.0}, _namedArguments );
        super.PointerEvent({
            timeStamp : timeStamp,kind : kind,device : device,position : null,obscured : obscured,pressure : pressure,pressureMin : pressureMin,pressureMax : pressureMax,distanceMax : distanceMax,radiusMin : radiusMin,radiusMax : radiusMax});
    }
}

export namespace PointerHoverEvent {
    export type Constructors = PointerEvent.Constructors | 'PointerHoverEvent';
    export type Interface = Omit<PointerHoverEvent, Constructors>;
}
@DartClass
export class PointerHoverEvent extends PointerEvent {
    constructor(_namedArguments? : {timeStamp? : core.DartDuration,kind? : any,device? : number,position? : any,delta? : any,buttons? : number,obscured? : boolean,pressure? : double,pressureMin? : double,pressureMax? : double,distance? : double,distanceMax? : double,size? : double,radiusMajor? : double,radiusMinor? : double,radiusMin? : double,radiusMax? : double,orientation? : double,tilt? : double,synthesized? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PointerHoverEvent(_namedArguments? : {timeStamp? : core.DartDuration,kind? : any,device? : number,position? : any,delta? : any,buttons? : number,obscured? : boolean,pressure? : double,pressureMin? : double,pressureMax? : double,distance? : double,distanceMax? : double,size? : double,radiusMajor? : double,radiusMinor? : double,radiusMin? : double,radiusMax? : double,orientation? : double,tilt? : double,synthesized? : boolean}) {
        let {timeStamp,kind,device,position,delta,buttons,obscured,pressure,pressureMin,pressureMax,distance,distanceMax,size,radiusMajor,radiusMinor,radiusMin,radiusMax,orientation,tilt,synthesized} = Object.assign({
            "timeStamp" : core.DartDuration.zero,
            "kind" : PointerDeviceKind.touch,
            "device" : 0,
            "position" : Offset.zero,
            "delta" : Offset.zero,
            "buttons" : 0,
            "obscured" : false,
            "pressure" : 0.0,
            "pressureMin" : 1.0,
            "pressureMax" : 1.0,
            "distance" : 0.0,
            "distanceMax" : 0.0,
            "size" : 0.0,
            "radiusMajor" : 0.0,
            "radiusMinor" : 0.0,
            "radiusMin" : 0.0,
            "radiusMax" : 0.0,
            "orientation" : 0.0,
            "tilt" : 0.0,
            "synthesized" : false}, _namedArguments );
        super.PointerEvent({
            timeStamp : timeStamp,kind : kind,device : device,position : position,delta : delta,buttons : buttons,down : false,obscured : obscured,pressure : pressure,pressureMin : pressureMin,pressureMax : pressureMax,distance : distance,distanceMax : distanceMax,size : size,radiusMajor : radiusMajor,radiusMinor : radiusMinor,radiusMin : radiusMin,radiusMax : radiusMax,orientation : orientation,tilt : tilt,synthesized : synthesized});
    }
}

export namespace PointerEnterEvent {
    export type Constructors = PointerEvent.Constructors | 'PointerEnterEvent' | 'fromHoverEvent';
    export type Interface = Omit<PointerEnterEvent, Constructors>;
}
@DartClass
export class PointerEnterEvent extends PointerEvent {
    constructor(_namedArguments? : {timeStamp? : core.DartDuration,kind? : any,device? : number,position? : any,delta? : any,buttons? : number,obscured? : boolean,pressure? : double,pressureMin? : double,pressureMax? : double,distance? : double,distanceMax? : double,size? : double,radiusMajor? : double,radiusMinor? : double,radiusMin? : double,radiusMax? : double,orientation? : double,tilt? : double,synthesized? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PointerEnterEvent(_namedArguments? : {timeStamp? : core.DartDuration,kind? : any,device? : number,position? : any,delta? : any,buttons? : number,obscured? : boolean,pressure? : double,pressureMin? : double,pressureMax? : double,distance? : double,distanceMax? : double,size? : double,radiusMajor? : double,radiusMinor? : double,radiusMin? : double,radiusMax? : double,orientation? : double,tilt? : double,synthesized? : boolean}) {
        let {timeStamp,kind,device,position,delta,buttons,obscured,pressure,pressureMin,pressureMax,distance,distanceMax,size,radiusMajor,radiusMinor,radiusMin,radiusMax,orientation,tilt,synthesized} = Object.assign({
            "timeStamp" : core.DartDuration.zero,
            "kind" : PointerDeviceKind.touch,
            "device" : 0,
            "position" : Offset.zero,
            "delta" : Offset.zero,
            "buttons" : 0,
            "obscured" : false,
            "pressure" : 0.0,
            "pressureMin" : 1.0,
            "pressureMax" : 1.0,
            "distance" : 0.0,
            "distanceMax" : 0.0,
            "size" : 0.0,
            "radiusMajor" : 0.0,
            "radiusMinor" : 0.0,
            "radiusMin" : 0.0,
            "radiusMax" : 0.0,
            "orientation" : 0.0,
            "tilt" : 0.0,
            "synthesized" : false}, _namedArguments );
        super.PointerEvent({
            timeStamp : timeStamp,kind : kind,device : device,position : position,delta : delta,buttons : buttons,down : false,obscured : obscured,pressure : pressure,pressureMin : pressureMin,pressureMax : pressureMax,distance : distance,distanceMax : distanceMax,size : size,radiusMajor : radiusMajor,radiusMinor : radiusMinor,radiusMin : radiusMin,radiusMax : radiusMax,orientation : orientation,tilt : tilt,synthesized : synthesized});
    }
    @namedConstructor
    fromHoverEvent(hover : PointerHoverEvent) {
        super.PointerEvent({
            timeStamp : ((t)=>(!!t)?t.timeStamp:null)(hover),kind : ((t)=>(!!t)?t.kind:null)(hover),device : ((t)=>(!!t)?t.device:null)(hover),position : ((t)=>(!!t)?t.position:null)(hover),delta : ((t)=>(!!t)?t.delta:null)(hover),buttons : ((t)=>(!!t)?t.buttons:null)(hover),down : ((t)=>(!!t)?t.down:null)(hover),obscured : ((t)=>(!!t)?t.obscured:null)(hover),pressure : ((t)=>(!!t)?t.pressure:null)(hover),pressureMin : ((t)=>(!!t)?t.pressureMin:null)(hover),pressureMax : ((t)=>(!!t)?t.pressureMax:null)(hover),distance : ((t)=>(!!t)?t.distance:null)(hover),distanceMax : ((t)=>(!!t)?t.distanceMax:null)(hover),size : ((t)=>(!!t)?t.size:null)(hover),radiusMajor : ((t)=>(!!t)?t.radiusMajor:null)(hover),radiusMinor : ((t)=>(!!t)?t.radiusMinor:null)(hover),radiusMin : ((t)=>(!!t)?t.radiusMin:null)(hover),radiusMax : ((t)=>(!!t)?t.radiusMax:null)(hover),orientation : ((t)=>(!!t)?t.orientation:null)(hover),tilt : ((t)=>(!!t)?t.tilt:null)(hover),synthesized : ((t)=>(!!t)?t.synthesized:null)(hover)});
    }
    static fromHoverEvent : new(hover : PointerHoverEvent) => PointerEnterEvent;

}

export namespace PointerExitEvent {
    export type Constructors = PointerEvent.Constructors | 'PointerExitEvent' | 'fromHoverEvent';
    export type Interface = Omit<PointerExitEvent, Constructors>;
}
@DartClass
export class PointerExitEvent extends PointerEvent {
    constructor(_namedArguments? : {timeStamp? : core.DartDuration,kind? : any,device? : number,position? : any,delta? : any,buttons? : number,obscured? : boolean,pressure? : double,pressureMin? : double,pressureMax? : double,distance? : double,distanceMax? : double,size? : double,radiusMajor? : double,radiusMinor? : double,radiusMin? : double,radiusMax? : double,orientation? : double,tilt? : double,synthesized? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PointerExitEvent(_namedArguments? : {timeStamp? : core.DartDuration,kind? : any,device? : number,position? : any,delta? : any,buttons? : number,obscured? : boolean,pressure? : double,pressureMin? : double,pressureMax? : double,distance? : double,distanceMax? : double,size? : double,radiusMajor? : double,radiusMinor? : double,radiusMin? : double,radiusMax? : double,orientation? : double,tilt? : double,synthesized? : boolean}) {
        let {timeStamp,kind,device,position,delta,buttons,obscured,pressure,pressureMin,pressureMax,distance,distanceMax,size,radiusMajor,radiusMinor,radiusMin,radiusMax,orientation,tilt,synthesized} = Object.assign({
            "timeStamp" : core.DartDuration.zero,
            "kind" : PointerDeviceKind.touch,
            "device" : 0,
            "position" : Offset.zero,
            "delta" : Offset.zero,
            "buttons" : 0,
            "obscured" : false,
            "pressure" : 0.0,
            "pressureMin" : 1.0,
            "pressureMax" : 1.0,
            "distance" : 0.0,
            "distanceMax" : 0.0,
            "size" : 0.0,
            "radiusMajor" : 0.0,
            "radiusMinor" : 0.0,
            "radiusMin" : 0.0,
            "radiusMax" : 0.0,
            "orientation" : 0.0,
            "tilt" : 0.0,
            "synthesized" : false}, _namedArguments );
        super.PointerEvent({
            timeStamp : timeStamp,kind : kind,device : device,position : position,delta : delta,buttons : buttons,down : false,obscured : obscured,pressure : pressure,pressureMin : pressureMin,pressureMax : pressureMax,distance : distance,distanceMax : distanceMax,size : size,radiusMajor : radiusMajor,radiusMinor : radiusMinor,radiusMin : radiusMin,radiusMax : radiusMax,orientation : orientation,tilt : tilt,synthesized : synthesized});
    }
    @namedConstructor
    fromHoverEvent(hover : PointerHoverEvent) {
        super.PointerEvent({
            timeStamp : ((t)=>(!!t)?t.timeStamp:null)(hover),kind : ((t)=>(!!t)?t.kind:null)(hover),device : ((t)=>(!!t)?t.device:null)(hover),position : ((t)=>(!!t)?t.position:null)(hover),delta : ((t)=>(!!t)?t.delta:null)(hover),buttons : ((t)=>(!!t)?t.buttons:null)(hover),down : ((t)=>(!!t)?t.down:null)(hover),obscured : ((t)=>(!!t)?t.obscured:null)(hover),pressure : ((t)=>(!!t)?t.pressure:null)(hover),pressureMin : ((t)=>(!!t)?t.pressureMin:null)(hover),pressureMax : ((t)=>(!!t)?t.pressureMax:null)(hover),distance : ((t)=>(!!t)?t.distance:null)(hover),distanceMax : ((t)=>(!!t)?t.distanceMax:null)(hover),size : ((t)=>(!!t)?t.size:null)(hover),radiusMajor : ((t)=>(!!t)?t.radiusMajor:null)(hover),radiusMinor : ((t)=>(!!t)?t.radiusMinor:null)(hover),radiusMin : ((t)=>(!!t)?t.radiusMin:null)(hover),radiusMax : ((t)=>(!!t)?t.radiusMax:null)(hover),orientation : ((t)=>(!!t)?t.orientation:null)(hover),tilt : ((t)=>(!!t)?t.tilt:null)(hover),synthesized : ((t)=>(!!t)?t.synthesized:null)(hover)});
    }
    static fromHoverEvent : new(hover : PointerHoverEvent) => PointerExitEvent;

}

export namespace PointerDownEvent {
    export type Constructors = PointerEvent.Constructors | 'PointerDownEvent';
    export type Interface = Omit<PointerDownEvent, Constructors>;
}
@DartClass
export class PointerDownEvent extends PointerEvent {
    constructor(_namedArguments? : {timeStamp? : core.DartDuration,pointer? : number,kind? : any,device? : number,position? : any,buttons? : number,obscured? : boolean,pressure? : double,pressureMin? : double,pressureMax? : double,distanceMax? : double,size? : double,radiusMajor? : double,radiusMinor? : double,radiusMin? : double,radiusMax? : double,orientation? : double,tilt? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PointerDownEvent(_namedArguments? : {timeStamp? : core.DartDuration,pointer? : number,kind? : any,device? : number,position? : any,buttons? : number,obscured? : boolean,pressure? : double,pressureMin? : double,pressureMax? : double,distanceMax? : double,size? : double,radiusMajor? : double,radiusMinor? : double,radiusMin? : double,radiusMax? : double,orientation? : double,tilt? : double}) {
        let {timeStamp,pointer,kind,device,position,buttons,obscured,pressure,pressureMin,pressureMax,distanceMax,size,radiusMajor,radiusMinor,radiusMin,radiusMax,orientation,tilt} = Object.assign({
            "timeStamp" : core.DartDuration.zero,
            "pointer" : 0,
            "kind" : PointerDeviceKind.touch,
            "device" : 0,
            "position" : Offset.zero,
            "buttons" : 0,
            "obscured" : false,
            "pressure" : 1.0,
            "pressureMin" : 1.0,
            "pressureMax" : 1.0,
            "distanceMax" : 0.0,
            "size" : 0.0,
            "radiusMajor" : 0.0,
            "radiusMinor" : 0.0,
            "radiusMin" : 0.0,
            "radiusMax" : 0.0,
            "orientation" : 0.0,
            "tilt" : 0.0}, _namedArguments );
        super.PointerEvent({
            timeStamp : timeStamp,pointer : pointer,kind : kind,device : device,position : position,buttons : buttons,down : true,obscured : obscured,pressure : pressure,pressureMin : pressureMin,pressureMax : pressureMax,distance : 0.0,distanceMax : distanceMax,size : size,radiusMajor : radiusMajor,radiusMinor : radiusMinor,radiusMin : radiusMin,radiusMax : radiusMax,orientation : orientation,tilt : tilt});
    }
}

export namespace PointerMoveEvent {
    export type Constructors = PointerEvent.Constructors | 'PointerMoveEvent';
    export type Interface = Omit<PointerMoveEvent, Constructors>;
}
@DartClass
export class PointerMoveEvent extends PointerEvent {
    constructor(_namedArguments? : {timeStamp? : core.DartDuration,pointer? : number,kind? : any,device? : number,position? : any,delta? : any,buttons? : number,obscured? : boolean,pressure? : double,pressureMin? : double,pressureMax? : double,distanceMax? : double,size? : double,radiusMajor? : double,radiusMinor? : double,radiusMin? : double,radiusMax? : double,orientation? : double,tilt? : double,platformData? : number,synthesized? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PointerMoveEvent(_namedArguments? : {timeStamp? : core.DartDuration,pointer? : number,kind? : any,device? : number,position? : any,delta? : any,buttons? : number,obscured? : boolean,pressure? : double,pressureMin? : double,pressureMax? : double,distanceMax? : double,size? : double,radiusMajor? : double,radiusMinor? : double,radiusMin? : double,radiusMax? : double,orientation? : double,tilt? : double,platformData? : number,synthesized? : boolean}) {
        let {timeStamp,pointer,kind,device,position,delta,buttons,obscured,pressure,pressureMin,pressureMax,distanceMax,size,radiusMajor,radiusMinor,radiusMin,radiusMax,orientation,tilt,platformData,synthesized} = Object.assign({
            "timeStamp" : core.DartDuration.zero,
            "pointer" : 0,
            "kind" : PointerDeviceKind.touch,
            "device" : 0,
            "position" : Offset.zero,
            "delta" : Offset.zero,
            "buttons" : 0,
            "obscured" : false,
            "pressure" : 1.0,
            "pressureMin" : 1.0,
            "pressureMax" : 1.0,
            "distanceMax" : 0.0,
            "size" : 0.0,
            "radiusMajor" : 0.0,
            "radiusMinor" : 0.0,
            "radiusMin" : 0.0,
            "radiusMax" : 0.0,
            "orientation" : 0.0,
            "tilt" : 0.0,
            "platformData" : 0,
            "synthesized" : false}, _namedArguments );
        super.PointerEvent({
            timeStamp : timeStamp,pointer : pointer,kind : kind,device : device,position : position,delta : delta,buttons : buttons,down : true,obscured : obscured,pressure : pressure,pressureMin : pressureMin,pressureMax : pressureMax,distance : 0.0,distanceMax : distanceMax,size : size,radiusMajor : radiusMajor,radiusMinor : radiusMinor,radiusMin : radiusMin,radiusMax : radiusMax,orientation : orientation,tilt : tilt,platformData : platformData,synthesized : synthesized});
    }
}

export namespace PointerUpEvent {
    export type Constructors = PointerEvent.Constructors | 'PointerUpEvent';
    export type Interface = Omit<PointerUpEvent, Constructors>;
}
@DartClass
export class PointerUpEvent extends PointerEvent {
    constructor(_namedArguments? : {timeStamp? : core.DartDuration,pointer? : number,kind? : any,device? : number,position? : any,buttons? : number,obscured? : boolean,pressure? : double,pressureMin? : double,pressureMax? : double,distance? : double,distanceMax? : double,size? : double,radiusMajor? : double,radiusMinor? : double,radiusMin? : double,radiusMax? : double,orientation? : double,tilt? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PointerUpEvent(_namedArguments? : {timeStamp? : core.DartDuration,pointer? : number,kind? : any,device? : number,position? : any,buttons? : number,obscured? : boolean,pressure? : double,pressureMin? : double,pressureMax? : double,distance? : double,distanceMax? : double,size? : double,radiusMajor? : double,radiusMinor? : double,radiusMin? : double,radiusMax? : double,orientation? : double,tilt? : double}) {
        let {timeStamp,pointer,kind,device,position,buttons,obscured,pressure,pressureMin,pressureMax,distance,distanceMax,size,radiusMajor,radiusMinor,radiusMin,radiusMax,orientation,tilt} = Object.assign({
            "timeStamp" : core.DartDuration.zero,
            "pointer" : 0,
            "kind" : PointerDeviceKind.touch,
            "device" : 0,
            "position" : Offset.zero,
            "buttons" : 0,
            "obscured" : false,
            "pressure" : 0.0,
            "pressureMin" : 1.0,
            "pressureMax" : 1.0,
            "distance" : 0.0,
            "distanceMax" : 0.0,
            "size" : 0.0,
            "radiusMajor" : 0.0,
            "radiusMinor" : 0.0,
            "radiusMin" : 0.0,
            "radiusMax" : 0.0,
            "orientation" : 0.0,
            "tilt" : 0.0}, _namedArguments );
        super.PointerEvent({
            timeStamp : timeStamp,pointer : pointer,kind : kind,device : device,position : position,buttons : buttons,down : false,obscured : obscured,pressure : pressure,pressureMin : pressureMin,pressureMax : pressureMax,distance : distance,distanceMax : distanceMax,size : size,radiusMajor : radiusMajor,radiusMinor : radiusMinor,radiusMin : radiusMin,radiusMax : radiusMax,orientation : orientation,tilt : tilt});
    }
}

export namespace PointerCancelEvent {
    export type Constructors = PointerEvent.Constructors | 'PointerCancelEvent';
    export type Interface = Omit<PointerCancelEvent, Constructors>;
}
@DartClass
export class PointerCancelEvent extends PointerEvent {
    constructor(_namedArguments? : {timeStamp? : core.DartDuration,pointer? : number,kind? : any,device? : number,position? : any,buttons? : number,obscured? : boolean,pressure? : double,pressureMin? : double,pressureMax? : double,distance? : double,distanceMax? : double,size? : double,radiusMajor? : double,radiusMinor? : double,radiusMin? : double,radiusMax? : double,orientation? : double,tilt? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PointerCancelEvent(_namedArguments? : {timeStamp? : core.DartDuration,pointer? : number,kind? : any,device? : number,position? : any,buttons? : number,obscured? : boolean,pressure? : double,pressureMin? : double,pressureMax? : double,distance? : double,distanceMax? : double,size? : double,radiusMajor? : double,radiusMinor? : double,radiusMin? : double,radiusMax? : double,orientation? : double,tilt? : double}) {
        let {timeStamp,pointer,kind,device,position,buttons,obscured,pressure,pressureMin,pressureMax,distance,distanceMax,size,radiusMajor,radiusMinor,radiusMin,radiusMax,orientation,tilt} = Object.assign({
            "timeStamp" : core.DartDuration.zero,
            "pointer" : 0,
            "kind" : PointerDeviceKind.touch,
            "device" : 0,
            "position" : Offset.zero,
            "buttons" : 0,
            "obscured" : false,
            "pressure" : 0.0,
            "pressureMin" : 1.0,
            "pressureMax" : 1.0,
            "distance" : 0.0,
            "distanceMax" : 0.0,
            "size" : 0.0,
            "radiusMajor" : 0.0,
            "radiusMinor" : 0.0,
            "radiusMin" : 0.0,
            "radiusMax" : 0.0,
            "orientation" : 0.0,
            "tilt" : 0.0}, _namedArguments );
        super.PointerEvent({
            timeStamp : timeStamp,pointer : pointer,kind : kind,device : device,position : position,buttons : buttons,down : false,obscured : obscured,pressure : pressure,pressureMin : pressureMin,pressureMax : pressureMax,distance : distance,distanceMax : distanceMax,size : size,radiusMajor : radiusMajor,radiusMinor : radiusMinor,radiusMin : radiusMin,radiusMax : radiusMax,orientation : orientation,tilt : tilt});
    }
}

export class properties {
    private static __$kPrimaryMouseButton : number;
    static get kPrimaryMouseButton() : number { 
        if (this.__$kPrimaryMouseButton===undefined) {
            this.__$kPrimaryMouseButton = 1;
        }
        return this.__$kPrimaryMouseButton;
    }
    static set kPrimaryMouseButton(__$value : number)  { 
        this.__$kPrimaryMouseButton = __$value;
    }

    private static __$kSecondaryMouseButton : number;
    static get kSecondaryMouseButton() : number { 
        if (this.__$kSecondaryMouseButton===undefined) {
            this.__$kSecondaryMouseButton = 2;
        }
        return this.__$kSecondaryMouseButton;
    }
    static set kSecondaryMouseButton(__$value : number)  { 
        this.__$kSecondaryMouseButton = __$value;
    }

    private static __$kPrimaryStylusButton : number;
    static get kPrimaryStylusButton() : number { 
        if (this.__$kPrimaryStylusButton===undefined) {
            this.__$kPrimaryStylusButton = 2;
        }
        return this.__$kPrimaryStylusButton;
    }
    static set kPrimaryStylusButton(__$value : number)  { 
        this.__$kPrimaryStylusButton = __$value;
    }

    private static __$kMiddleMouseButton : number;
    static get kMiddleMouseButton() : number { 
        if (this.__$kMiddleMouseButton===undefined) {
            this.__$kMiddleMouseButton = 4;
        }
        return this.__$kMiddleMouseButton;
    }
    static set kMiddleMouseButton(__$value : number)  { 
        this.__$kMiddleMouseButton = __$value;
    }

    private static __$kSecondaryStylusButton : number;
    static get kSecondaryStylusButton() : number { 
        if (this.__$kSecondaryStylusButton===undefined) {
            this.__$kSecondaryStylusButton = 4;
        }
        return this.__$kSecondaryStylusButton;
    }
    static set kSecondaryStylusButton(__$value : number)  { 
        this.__$kSecondaryStylusButton = __$value;
    }

    private static __$kBackMouseButton : number;
    static get kBackMouseButton() : number { 
        if (this.__$kBackMouseButton===undefined) {
            this.__$kBackMouseButton = 8;
        }
        return this.__$kBackMouseButton;
    }
    static set kBackMouseButton(__$value : number)  { 
        this.__$kBackMouseButton = __$value;
    }

    private static __$kForwardMouseButton : number;
    static get kForwardMouseButton() : number { 
        if (this.__$kForwardMouseButton===undefined) {
            this.__$kForwardMouseButton = 16;
        }
        return this.__$kForwardMouseButton;
    }
    static set kForwardMouseButton(__$value : number)  { 
        this.__$kForwardMouseButton = __$value;
    }

}
