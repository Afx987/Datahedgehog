/** Library asset:datahedgehog_monitor/lib/lib/gestures/binding.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as lib4 from "./converter";
import * as lib5 from "./events";
import * as lib6 from "./pointer_router";
import * as lib7 from "./arena";
import * as lib8 from "./hit_test";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/foundation/assertions";

export var initInstances : () => any = () : any =>  {
    super.initInstances();
    properties._instance = this;
    window.onPointerDataPacket = _handlePointerDataPacket;
};
export var unlocked : () => any = () : any =>  {
    super.unlocked();
    _flushPointerEventQueue();
};
export var _handlePointerDataPacket : (packet : any) => any = (packet : any) : any =>  {
    properties._pendingPointerEvents.addAll(lib4.PointerEventConverter.expand(packet.data,window.devicePixelRatio));
    if (!locked) _flushPointerEventQueue();
};
export var cancelPointer : (pointer : number) => any = (pointer : number) : any =>  {
    if (properties._pendingPointerEvents.isEmpty && !locked) async.scheduleMicrotask(_flushPointerEventQueue);
    properties._pendingPointerEvents.addFirst(lib5.PointerCancelEvent({
        pointer : pointer}));
};
export var _flushPointerEventQueue : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (!locked); */;
    while (properties._pendingPointerEvents.isNotEmpty)_handlePointerEvent(properties._pendingPointerEvents.removeFirst());
};
export var _handlePointerEvent : (event : lib5.PointerEvent) => any = (event : lib5.PointerEvent) : any =>  {
    /* TODO (AssertStatementImpl) : assert (!locked); */;
    let hitTestResult : lib8.HitTestResult;
    if (is(event, lib5.PointerDownEvent)) {
        /* TODO (AssertStatementImpl) : assert (!_hitTests.containsKey(event.pointer)); */;
        hitTestResult = lib8.HitTestResult();
        hitTest(hitTestResult,event.position);
        properties._hitTests.set(event.pointer,hitTestResult);
        /* TODO (AssertStatementImpl) : assert (() {if (debugPrintHitTestResults) debugPrint('$event: $hitTestResult'); return true;}()); */;
    }else if (is(event, lib5.PointerUpEvent) || is(event, lib5.PointerCancelEvent)) {
        hitTestResult = properties._hitTests.remove(event.pointer);
    }else if (event.down) {
        hitTestResult = properties._hitTests.get(event.pointer);
    }
    /* TODO (AssertStatementImpl) : assert (() {if (debugPrintMouseHoverEvents && event is PointerHoverEvent) debugPrint('$event'); return true;}()); */;
    if (hitTestResult != null || is(event, lib5.PointerHoverEvent) || is(event, lib5.PointerAddedEvent) || is(event, lib5.PointerRemovedEvent)) {
        dispatchEvent(event,hitTestResult);
    }
};
export var hitTest : (result : lib8.HitTestResult,position : any) => any = (result : lib8.HitTestResult,position : any) : any =>  {
    result.add(lib8.HitTestEntry(this));
};
export var dispatchEvent : (event : lib5.PointerEvent,hitTestResult : lib8.HitTestResult) => any = (event : lib5.PointerEvent,hitTestResult : lib8.HitTestResult) : any =>  {
    /* TODO (AssertStatementImpl) : assert (!locked); */;
    if (op(Op.EQUALS,hitTestResult,null)) {
        /* TODO (AssertStatementImpl) : assert (event is PointerHoverEvent || event is PointerAddedEvent || event is PointerRemovedEvent); */;
        try {
            properties.pointerRouter.route(event);
        } catch (__error__) {

            {
                let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                lib9.FlutterError.reportError(FlutterErrorDetailsForPointerEventDispatcher({
                    exception : exception,stack : stack,library : 'gesture library',context : 'while dispatching a non-hit-tested pointer event',event : event,hitTestEntry : null,informationCollector : (information : core.DartStringBuffer) =>  {
                        information.writeln('Event:');
                        information.writeln(`  ${event}`);
                    }}));
            }
        }
        return;
    }
    for(let entry of hitTestResult.path) {
        try {
            entry.target.handleEvent(event,entry);
        } catch (__error__) {

            {
                let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                lib9.FlutterError.reportError(FlutterErrorDetailsForPointerEventDispatcher({
                    exception : exception,stack : stack,library : 'gesture library',context : 'while dispatching a pointer event',event : event,hitTestEntry : entry,informationCollector : (information : core.DartStringBuffer) =>  {
                        information.writeln('Event:');
                        information.writeln(`  ${event}`);
                        information.writeln('Target:');
                        information.write(`  ${entry.target}`);
                    }}));
            }
        }
    }
};
export var handleEvent : (event : lib5.PointerEvent,entry : lib8.HitTestEntry) => any = (event : lib5.PointerEvent,entry : lib8.HitTestEntry) : any =>  {
    properties.pointerRouter.route(event);
    if (is(event, lib5.PointerDownEvent)) {
        properties.gestureArena.close(event.pointer);
    }else if (is(event, lib5.PointerUpEvent)) {
        properties.gestureArena.sweep(event.pointer);
    }
};
export namespace FlutterErrorDetailsForPointerEventDispatcher {
    export type Constructors = lib9.FlutterErrorDetails.Constructors | 'FlutterErrorDetailsForPointerEventDispatcher';
    export type Interface = Omit<FlutterErrorDetailsForPointerEventDispatcher, Constructors>;
}
@DartClass
export class FlutterErrorDetailsForPointerEventDispatcher extends lib9.FlutterErrorDetails {
    constructor(_namedArguments? : {exception? : any,stack? : core.DartStackTrace,library? : string,context? : string,event? : lib5.PointerEvent,hitTestEntry? : lib8.HitTestEntry,informationCollector? : (information : core.DartStringBuffer) => any,silent? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FlutterErrorDetailsForPointerEventDispatcher(_namedArguments? : {exception? : any,stack? : core.DartStackTrace,library? : string,context? : string,event? : lib5.PointerEvent,hitTestEntry? : lib8.HitTestEntry,informationCollector? : (information : core.DartStringBuffer) => any,silent? : boolean}) {
        let {exception,stack,library,context,event,hitTestEntry,informationCollector,silent} = Object.assign({
            "silent" : false}, _namedArguments );
        super.FlutterErrorDetails({
            exception : exception,stack : stack,library : library,context : context,informationCollector : informationCollector,silent : silent});
        this.event = event;
        this.hitTestEntry = hitTestEntry;
    }
    event : lib5.PointerEvent;

    hitTestEntry : lib8.HitTestEntry;

}

export class properties {
    private static __$GestureBinding : any;
    static get GestureBinding() : any { 
        return this.__$GestureBinding;
    }
    static set GestureBinding(__$value : any)  { 
        this.__$GestureBinding = __$value;
    }

    private static __$BindingBase : any;
    static get BindingBase() : any { 
        return this.__$BindingBase;
    }
    static set BindingBase(__$value : any)  { 
        this.__$BindingBase = __$value;
    }

    private static __$HitTestable : any;
    static get HitTestable() : any { 
        return this.__$HitTestable;
    }
    static set HitTestable(__$value : any)  { 
        this.__$HitTestable = __$value;
    }
    ,private static __$HitTestDispatcher : any;
    static get HitTestDispatcher() : any { 
        return this.__$HitTestDispatcher;
    }
    static set HitTestDispatcher(__$value : any)  { 
        this.__$HitTestDispatcher = __$value;
    }
    ,private static __$HitTestTarget : any;
    static get HitTestTarget() : any { 
        return this.__$HitTestTarget;
    }
    static set HitTestTarget(__$value : any)  { 
        this.__$HitTestTarget = __$value;
    }

    private static __$void : any;
    static get void() : any { 
        return this.__$void;
    }
    static set void(__$value : any)  { 
        this.__$void = __$value;
    }

    static get instance() : any {
        return properties._instance;
    }
    private static __$_instance : any;
    static get _instance() : any { 
        return this.__$_instance;
    }
    static set _instance(__$value : any)  { 
        this.__$_instance = __$value;
    }

    private static __$_pendingPointerEvents : collection.Queue<lib5.PointerEvent>;
    static get _pendingPointerEvents() : collection.Queue<lib5.PointerEvent> { 
        if (this.__$_pendingPointerEvents===undefined) {
            this.__$_pendingPointerEvents = collection.Queue();
        }
        return this.__$_pendingPointerEvents;
    }
    static set _pendingPointerEvents(__$value : collection.Queue<lib5.PointerEvent>)  { 
        this.__$_pendingPointerEvents = __$value;
    }

    private static __$pointerRouter : lib6.PointerRouter;
    static get pointerRouter() : lib6.PointerRouter { 
        if (this.__$pointerRouter===undefined) {
            this.__$pointerRouter = lib6.PointerRouter();
        }
        return this.__$pointerRouter;
    }
    static set pointerRouter(__$value : lib6.PointerRouter)  { 
        this.__$pointerRouter = __$value;
    }

    private static __$gestureArena : lib7.GestureArenaManager;
    static get gestureArena() : lib7.GestureArenaManager { 
        if (this.__$gestureArena===undefined) {
            this.__$gestureArena = lib7.GestureArenaManager();
        }
        return this.__$gestureArena;
    }
    static set gestureArena(__$value : lib7.GestureArenaManager)  { 
        this.__$gestureArena = __$value;
    }

    private static __$_hitTests : core.DartMap<number,lib8.HitTestResult>;
    static get _hitTests() : core.DartMap<number,lib8.HitTestResult> { 
        if (this.__$_hitTests===undefined) {
            this.__$_hitTests = new core.DartMap.literal([
            ]);
        }
        return this.__$_hitTests;
    }
    static set _hitTests(__$value : core.DartMap<number,lib8.HitTestResult>)  { 
        this.__$_hitTests = __$value;
    }

}
