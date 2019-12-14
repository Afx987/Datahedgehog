/** Library asset:datahedgehog_monitor/lib/lib/gestures/mouse_tracking.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./events";
import * as lib4 from "./pointer_router";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/scheduler/binding";

export var attachAnnotation : (annotation : MouseTrackerAnnotation) => any = (annotation : MouseTrackerAnnotation) : any =>  {
    properties._trackedAnnotations.set(annotation,_TrackedAnnotation(annotation));
    _scheduleMousePositionCheck();
};
export var detachAnnotation : (annotation : MouseTrackerAnnotation) => any = (annotation : MouseTrackerAnnotation) : any =>  {
    let trackedAnnotation : _TrackedAnnotation = _findAnnotation(annotation);
    /* TODO (AssertStatementImpl) : assert (trackedAnnotation != null, "Tried to detach an annotation that wasn't attached: $annotation"); */;
    for(let deviceId of trackedAnnotation.activeDevices) {
        annotation.onExit(lib3.PointerExitEvent.fromHoverEvent(properties._lastMouseEvent.get(deviceId)));
    }
    properties._trackedAnnotations.remove(trackedAnnotation);
};
export var _scheduleMousePositionCheck : () => any = () : any =>  {
    lib5.properties.SchedulerBinding.instance.addPostFrameCallback((_ : core.DartDuration) =>  {
        return collectMousePositions();
    });
    lib5.properties.SchedulerBinding.instance.scheduleFrame();
};
export var _handleEvent : (event : lib3.PointerEvent) => any = (event : lib3.PointerEvent) : any =>  {
    if (event.kind != PointerDeviceKind.mouse) {
        return;
    }
    let deviceId : number = event.device;
    if (properties._trackedAnnotations.isEmpty) {
        properties._lastMouseEvent.remove(deviceId);
        return;
    }
    if (is(event, lib3.PointerRemovedEvent)) {
        properties._lastMouseEvent.remove(deviceId);
        _scheduleMousePositionCheck();
    }else {
        if (is(event, lib3.PointerMoveEvent) || is(event, lib3.PointerHoverEvent) || is(event, lib3.PointerDownEvent)) {
            if (!properties._lastMouseEvent.containsKey(deviceId) || properties._lastMouseEvent.get(deviceId).position != event.position) {
                _scheduleMousePositionCheck();
            }
            properties._lastMouseEvent.set(deviceId,event);
        }
    }
};
export var _findAnnotation : (annotation : MouseTrackerAnnotation) => _TrackedAnnotation = (annotation : MouseTrackerAnnotation) : _TrackedAnnotation =>  {
    let trackedAnnotation : _TrackedAnnotation = properties._trackedAnnotations.get(annotation);
    /* TODO (AssertStatementImpl) : assert (trackedAnnotation != null, 'Unable to find annotation $annotation in tracked annotations. ' 'Check that attachAnnotation has been called for all annotated layers.'); */;
    return trackedAnnotation;
};
export var collectMousePositions : () => any = () : any =>  {
    var exitAnnotation : (trackedAnnotation : _TrackedAnnotation,deviceId : number) => any = (trackedAnnotation : _TrackedAnnotation,deviceId : number) : any =>  {
        if (((t)=>(!!t)?t.onExit:null)(trackedAnnotation.annotation) != null && trackedAnnotation.activeDevices.contains(deviceId)) {
            trackedAnnotation.annotation.onExit(lib3.PointerExitEvent.fromHoverEvent(properties._lastMouseEvent.get(deviceId)));
            trackedAnnotation.activeDevices.remove(deviceId);
        }
    };
    var exitAllDevices : (trackedAnnotation : _TrackedAnnotation) => any = (trackedAnnotation : _TrackedAnnotation) : any =>  {
        if (trackedAnnotation.activeDevices.isNotEmpty) {
            let deviceIds : core.DartSet<number> = trackedAnnotation.activeDevices.toSet();
            for(let deviceId of deviceIds) {
                exitAnnotation(trackedAnnotation,deviceId);
            }
        }
    };
    if (!properties.mouseIsConnected) {
        properties._trackedAnnotations.values.forEach(exitAllDevices);
        return;
    }
    for(let deviceId of properties._lastMouseEvent.keys) {
        let lastEvent : lib3.PointerEvent = properties._lastMouseEvent.get(deviceId);
        let hit : MouseTrackerAnnotation = properties.annotationFinder(lastEvent.position);
        if (op(Op.EQUALS,hit,null)) {
            for(let trackedAnnotation of properties._trackedAnnotations.values) {
                exitAnnotation(trackedAnnotation,deviceId);
            }
            return;
        }
        let hitAnnotation : _TrackedAnnotation = _findAnnotation(hit);
        if (!hitAnnotation.activeDevices.contains(deviceId)) {
            hitAnnotation.activeDevices.add(deviceId);
            if (((t)=>(!!t)?t.onEnter:null)(hitAnnotation.annotation) != null) {
                hitAnnotation.annotation.onEnter(lib3.PointerEnterEvent.fromHoverEvent(lastEvent));
            }
        }
        if (((t)=>(!!t)?t.onHover:null)(hitAnnotation.annotation) != null) {
            hitAnnotation.annotation.onHover(lastEvent);
        }
        for(let trackedAnnotation of properties._trackedAnnotations.values) {
            if (op(Op.EQUALS,hitAnnotation,trackedAnnotation)) {
                continue;
            }
            if (trackedAnnotation.activeDevices.contains(deviceId)) {
                if (((t)=>(!!t)?t.onExit:null)(trackedAnnotation.annotation) != null) {
                    trackedAnnotation.annotation.onExit(lib3.PointerExitEvent.fromHoverEvent(lastEvent));
                }
                trackedAnnotation.activeDevices.remove(deviceId);
            }
        }
    }
};
export namespace MouseTrackerAnnotation {
    export type Constructors = 'MouseTrackerAnnotation';
    export type Interface = Omit<MouseTrackerAnnotation, Constructors>;
}
@DartClass
export class MouseTrackerAnnotation {
    constructor(_namedArguments? : {onEnter? : (event : lib3.PointerEnterEvent) => any,onHover? : (event : lib3.PointerHoverEvent) => any,onExit? : (event : lib3.PointerExitEvent) => any}) {
    }
    @defaultConstructor
    MouseTrackerAnnotation(_namedArguments? : {onEnter? : (event : lib3.PointerEnterEvent) => any,onHover? : (event : lib3.PointerHoverEvent) => any,onExit? : (event : lib3.PointerExitEvent) => any}) {
        let {onEnter,onHover,onExit} = Object.assign({
        }, _namedArguments );
        this.onEnter = onEnter;
        this.onHover = onHover;
        this.onExit = onExit;
    }
    onEnter : (event : lib3.PointerEnterEvent) => any;

    onHover : (event : lib3.PointerHoverEvent) => any;

    onExit : (event : lib3.PointerExitEvent) => any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let none : string = (op(Op.EQUALS,this.onEnter,null) && op(Op.EQUALS,this.onExit,null) && op(Op.EQUALS,this.onHover,null)) ? ' <none>' : '';
        return `[${this.runtimeType}${new core.DartInt(this.hashCode).toRadixString(16)}${none}` + `${op(Op.EQUALS,this.onEnter,null) ? '' : ' onEnter'}` + `${op(Op.EQUALS,this.onHover,null) ? '' : ' onHover'}` + `${op(Op.EQUALS,this.onExit,null) ? '' : ' onExit'}]`;
    }
}

export namespace _TrackedAnnotation {
    export type Constructors = '_TrackedAnnotation';
    export type Interface = Omit<_TrackedAnnotation, Constructors>;
}
@DartClass
export class _TrackedAnnotation {
    constructor(annotation : MouseTrackerAnnotation) {
    }
    @defaultConstructor
    _TrackedAnnotation(annotation : MouseTrackerAnnotation) {
        this.activeDevices = core.DartSet();
        this.annotation = annotation;
    }
    annotation : MouseTrackerAnnotation;

    activeDevices : core.DartSet<number>;

}

export namespace MouseTracker {
    export type Constructors = 'MouseTracker' | 'addGlobalRoute';
    export type Interface = Omit<MouseTracker, Constructors>;
}
@DartClass
export class MouseTracker {
    constructor(router : lib4.PointerRouter,annotationFinder : any) {
    }
    @defaultConstructor
    MouseTracker(router : lib4.PointerRouter,annotationFinder : any) {
        this.assert = assert;
        this.annotationFinder = annotationFinder;
    }
     : any;

     : any;

    @namedConstructor
    addGlobalRoute(_handleEvent : any) {
    }
    static addGlobalRoute : new(_handleEvent : any) => MouseTracker;

}

export class properties {
    private static __$annotationFinder : (offset : any) => MouseTrackerAnnotation;
    static get annotationFinder() : (offset : any) => MouseTrackerAnnotation { 
        return this.__$annotationFinder;
    }
    static set annotationFinder(__$value : (offset : any) => MouseTrackerAnnotation)  { 
        this.__$annotationFinder = __$value;
    }

    private static __$_trackedAnnotations : core.DartMap<MouseTrackerAnnotation,_TrackedAnnotation>;
    static get _trackedAnnotations() : core.DartMap<MouseTrackerAnnotation,_TrackedAnnotation> { 
        if (this.__$_trackedAnnotations===undefined) {
            this.__$_trackedAnnotations = new core.DartMap.literal([
            ]);
        }
        return this.__$_trackedAnnotations;
    }
    static set _trackedAnnotations(__$value : core.DartMap<MouseTrackerAnnotation,_TrackedAnnotation>)  { 
        this.__$_trackedAnnotations = __$value;
    }

    private static __$_lastMouseEvent : core.DartMap<number,lib3.PointerEvent>;
    static get _lastMouseEvent() : core.DartMap<number,lib3.PointerEvent> { 
        if (this.__$_lastMouseEvent===undefined) {
            this.__$_lastMouseEvent = new core.DartMap.literal([
            ]);
        }
        return this.__$_lastMouseEvent;
    }
    static set _lastMouseEvent(__$value : core.DartMap<number,lib3.PointerEvent>)  { 
        this.__$_lastMouseEvent = __$value;
    }

    static get mouseIsConnected() : boolean {
        return properties._lastMouseEvent.isNotEmpty;
    }
}
