/** Library asset:datahedgehog_monitor/lib/lib/rendering/platform_view.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/basic_types";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/collections";
import * as lib5 from "./box";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/services/platform_views";
import * as lib7 from "./object";
import * as lib8 from "./layer";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/gestures/events";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/gestures/recognizer";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/gestures/team";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/gestures/arena";

export var detach : () => any = () : any =>  {
    properties._gestureRecognizer.reset();
    super.detach();
};
export var _factoryTypesSetEquals : <T>(a : core.DartSet<lib3.Factory<T>>,b : core.DartSet<lib3.Factory<T>>) => boolean = <T>(a : core.DartSet<lib3.Factory<T>>,b : core.DartSet<lib3.Factory<T>>) : boolean =>  {
    if (op(Op.EQUALS,a,b)) {
        return true;
    }
    if (op(Op.EQUALS,a,null) || op(Op.EQUALS,b,null)) {
        return false;
    }
    return lib4.setEquals(_factoriesTypeSet(a),_factoriesTypeSet(b));
};
export var _factoriesTypeSet : <T>(factories : core.DartSet<lib3.Factory<T>>) => core.DartSet<core.Type> = <T>(factories : core.DartSet<lib3.Factory<T>>) : core.DartSet<core.Type> =>  {
    return factories.map((factory : lib3.Factory<T>) =>  {
        return factory.type;
    }).toSet();
};
export var handleEvent : (event : lib10.PointerEvent,entry : lib9.HitTestEntry) => any = (event : lib10.PointerEvent,entry : lib9.HitTestEntry) : any =>  {
    if (is(event, lib10.PointerDownEvent)) {
        properties._gestureRecognizer.addPointer(event);
    }
};
export var updateGestureRecognizers : (gestureRecognizers : core.DartSet<lib3.Factory<lib11.OneSequenceGestureRecognizer>>) => any = (gestureRecognizers : core.DartSet<lib3.Factory<lib11.OneSequenceGestureRecognizer>>) : any =>  {
    /* TODO (AssertStatementImpl) : assert (gestureRecognizers != null); */;
    /* TODO (AssertStatementImpl) : assert (_factoriesTypeSet(gestureRecognizers).length == gestureRecognizers.length, 'There were multiple gesture recognizer factories for the same type, there must only be a single ' 'gesture recognizer factory for each gesture recognizer type.'); */;
    ;
    if (_factoryTypesSetEquals(gestureRecognizers,((t)=>(!!t)?t.gestureRecognizerFactories:null)(properties._gestureRecognizer))) {
        return;
    }
    ((_835_)=>(!!_835_)?_835_.dispose():null)(properties._gestureRecognizer);
    properties._gestureRecognizer = _AndroidViewGestureRecognizer(properties._motionEventsDispatcher,gestureRecognizers);
};
export var hitTestSelf : (position : any) => boolean = (position : any) : boolean =>  {
    return properties.hitTestBehavior != PlatformViewHitTestBehavior.transparent;
};
export var performResize : () => any = () : any =>  {
    size = constraints.biggest;
    _sizePlatformView();
};
export var _sizePlatformView : () => any = () => new async.Future.fromPromise(( async () : Promise<any> =>  {
    if (op(Op.EQUALS,properties._state,_PlatformViewState.resizing) || size.isEmpty) {
        return;
    }
    properties._state = _PlatformViewState.resizing;
    markNeedsPaint();
    let targetSize : any;
    do{
        targetSize = size;
        await properties._viewController.setSize(targetSize);
        properties._currentAndroidViewSize = targetSize;
    } while (size != targetSize);
    properties._state = _PlatformViewState.ready;
    markNeedsPaint();
})());
export var paint : (context : lib7.PaintingContext,offset : any) => any = (context : lib7.PaintingContext,offset : any) : any =>  {
    if (properties._viewController.textureId == null) return;
    if (op(Op.LT,size.width,properties._currentAndroidViewSize.width) || op(Op.LT,size.height,properties._currentAndroidViewSize.height)) {
        context.pushClipRect(true,offset,op(Op.BITAND,offset,size),_paintTexture);
        return;
    }
    _paintTexture(context,offset);
};
export var _paintTexture : (context : lib7.PaintingContext,offset : any) => any = (context : lib7.PaintingContext,offset : any) : any =>  {
    context.addLayer(lib8.TextureLayer({
        rect : op(Op.BITAND,offset,properties._currentAndroidViewSize),textureId : properties._viewController.textureId,freeze : op(Op.EQUALS,properties._state,_PlatformViewState.resizing)}));
};
export var hitTest : (result : lib9.HitTestResult,_namedArguments? : {position? : any}) => boolean = (result : lib9.HitTestResult,_namedArguments? : {position? : any}) : boolean =>  {
    let {position} = Object.assign({
    }, _namedArguments );
    if (op(Op.EQUALS,properties.hitTestBehavior,PlatformViewHitTestBehavior.transparent) || !size.contains(position)) return false;
    result.add(lib5.BoxHitTestEntry(this,position));
    return op(Op.EQUALS,properties.hitTestBehavior,PlatformViewHitTestBehavior.opaque);
};
export var hitTestSelf : (position : any) => boolean = (position : any) : boolean =>  {
    return properties.hitTestBehavior != PlatformViewHitTestBehavior.transparent;
};
export var handleEvent : (event : lib10.PointerEvent,entry : lib9.HitTestEntry) => any = (event : lib10.PointerEvent,entry : lib9.HitTestEntry) : any =>  {
    if (is(event, lib10.PointerDownEvent)) {
        properties._gestureRecognizer.addPointer(event);
    }
};
export var detach : () => any = () : any =>  {
    properties._gestureRecognizer.reset();
    super.detach();
};
export var hitTest : (result : lib9.HitTestResult,_namedArguments? : {position? : any}) => boolean = (result : lib9.HitTestResult,_namedArguments? : {position? : any}) : boolean =>  {
    let {position} = Object.assign({
    }, _namedArguments );
    if (op(Op.EQUALS,properties.hitTestBehavior,PlatformViewHitTestBehavior.transparent) || !size.contains(position)) return false;
    result.add(lib5.BoxHitTestEntry(this,position));
    return op(Op.EQUALS,properties.hitTestBehavior,PlatformViewHitTestBehavior.opaque);
};
export var paint : (context : lib7.PaintingContext,offset : any) => any = (context : lib7.PaintingContext,offset : any) : any =>  {
    context.addLayer(lib8.PlatformViewLayer({
        rect : op(Op.BITAND,offset,size),viewId : properties._viewController.id}));
};
export var updateGestureRecognizers : (gestureRecognizers : core.DartSet<lib3.Factory<lib11.OneSequenceGestureRecognizer>>) => any = (gestureRecognizers : core.DartSet<lib3.Factory<lib11.OneSequenceGestureRecognizer>>) : any =>  {
    /* TODO (AssertStatementImpl) : assert (gestureRecognizers != null); */;
    /* TODO (AssertStatementImpl) : assert (_factoriesTypeSet(gestureRecognizers).length == gestureRecognizers.length, 'There were multiple gesture recognizer factories for the same type, there must only be a single ' 'gesture recognizer factory for each gesture recognizer type.'); */;
    ;
    if (_factoryTypesSetEquals(gestureRecognizers,((t)=>(!!t)?t.gestureRecognizerFactories:null)(properties._gestureRecognizer))) {
        return;
    }
    ((_836_)=>(!!_836_)?_836_.dispose():null)(properties._gestureRecognizer);
    properties._gestureRecognizer = _UiKitViewGestureRecognizer(properties.viewController,gestureRecognizers);
};
export var performResize : () => any = () : any =>  {
    size = constraints.biggest;
};
export namespace RenderUiKitView {
    export type Constructors = lib5.RenderBox.Constructors | 'RenderUiKitView';
    export type Interface = Omit<RenderUiKitView, Constructors>;
}
@DartClass
export class RenderUiKitView extends lib5.RenderBox {
    constructor(_namedArguments? : {viewController? : lib6.UiKitViewController,hitTestBehavior? : any,gestureRecognizers? : core.DartSet<lib3.Factory<lib11.OneSequenceGestureRecognizer>>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderUiKitView(_namedArguments? : {viewController? : lib6.UiKitViewController,hitTestBehavior? : any,gestureRecognizers? : core.DartSet<lib3.Factory<lib11.OneSequenceGestureRecognizer>>}) {
        let {viewController,hitTestBehavior,gestureRecognizers} = Object.assign({
        }, _namedArguments );
        this._viewController = properties.viewController;
        this.assert = assert;
        this.hitTestBehavior = hitTestBehavior;
    }
     : any;

     : any;

     : any;

    _viewController;

    @Abstract
    updateGestureRecognizers(gestureRecognizers : any){ throw 'abstract'}
}

export enum PlatformViewHitTestBehavior {
    opaque,
    translucent,
    transparent
}

export namespace RenderAndroidView {
    export type Constructors = lib5.RenderBox.Constructors | 'RenderAndroidView';
    export type Interface = Omit<RenderAndroidView, Constructors>;
}
@DartClass
export class RenderAndroidView extends lib5.RenderBox {
    constructor(_namedArguments? : {viewController? : lib6.AndroidViewController,hitTestBehavior? : any,gestureRecognizers? : core.DartSet<lib3.Factory<lib11.OneSequenceGestureRecognizer>>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderAndroidView(_namedArguments? : {viewController? : lib6.AndroidViewController,hitTestBehavior? : any,gestureRecognizers? : core.DartSet<lib3.Factory<lib11.OneSequenceGestureRecognizer>>}) {
        let {viewController,hitTestBehavior,gestureRecognizers} = Object.assign({
        }, _namedArguments );
        this._viewController = properties.viewController;
        this._motionEventsDispatcher = _MotionEventsDispatcher(this.globalToLocal.bind(this),properties.viewController);
        this.assert = assert;
        this.hitTestBehavior = hitTestBehavior;
    }
     : any;

     : any;

     : any;

    _viewController;

    _motionEventsDispatcher;

    @Abstract
    updateGestureRecognizers(gestureRecognizers : any){ throw 'abstract'}
}

export enum _PlatformViewState {
    uninitialized,
    resizing,
    ready
}

export namespace _UiKitViewGestureRecognizer {
    export type Constructors = lib11.OneSequenceGestureRecognizer.Constructors | '_UiKitViewGestureRecognizer';
    export type Interface = Omit<_UiKitViewGestureRecognizer, Constructors>;
}
@DartClass
export class _UiKitViewGestureRecognizer extends lib11.OneSequenceGestureRecognizer {
    constructor(controller : lib6.UiKitViewController,gestureRecognizerFactories : core.DartSet<lib3.Factory<lib11.OneSequenceGestureRecognizer>>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _UiKitViewGestureRecognizer(controller : lib6.UiKitViewController,gestureRecognizerFactories : core.DartSet<lib3.Factory<lib11.OneSequenceGestureRecognizer>>) {
        this.controller = controller;
        this.gestureRecognizerFactories = gestureRecognizerFactories;
        this.team = lib12.GestureArenaTeam();
        this.team.captain = this;
        this._gestureRecognizers = this.gestureRecognizerFactories.map((recognizerFactory : lib3.Factory<lib11.OneSequenceGestureRecognizer>) =>  {
            return ((_) : lib11.OneSequenceGestureRecognizer =>  {
                {
                    _.team = this.team;
                    return _;
                }
            })(recognizerFactory.constructor());
        }).toSet();
    }
    gestureRecognizerFactories : core.DartSet<lib3.Factory<lib11.OneSequenceGestureRecognizer>>;

    _gestureRecognizers : core.DartSet<lib11.OneSequenceGestureRecognizer>;

    controller : lib6.UiKitViewController;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addPointer(event : lib10.PointerDownEvent) : any {
        this.startTrackingPointer(event.pointer);
        for(let recognizer of this._gestureRecognizers) {
            recognizer.addPointer(event);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get debugDescription() : string {
        return 'UIKit view';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didStopTrackingLastPointer(pointer : number) : any {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleEvent(event : lib10.PointerEvent) : any {
        this.stopTrackingIfPointerNoLongerDown(event);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    acceptGesture(pointer : number) : any {
        this.controller.acceptGesture();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rejectGesture(pointer : number) : any {
        this.controller.rejectGesture();
    }
    reset() : any {
        this.resolve(lib13.GestureDisposition.rejected);
    }
}

export namespace _AndroidViewGestureRecognizer {
    export type Constructors = lib11.OneSequenceGestureRecognizer.Constructors | '_AndroidViewGestureRecognizer';
    export type Interface = Omit<_AndroidViewGestureRecognizer, Constructors>;
}
@DartClass
export class _AndroidViewGestureRecognizer extends lib11.OneSequenceGestureRecognizer {
    constructor(dispatcher : _MotionEventsDispatcher,gestureRecognizerFactories : core.DartSet<lib3.Factory<lib11.OneSequenceGestureRecognizer>>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AndroidViewGestureRecognizer(dispatcher : _MotionEventsDispatcher,gestureRecognizerFactories : core.DartSet<lib3.Factory<lib11.OneSequenceGestureRecognizer>>) {
        this.cachedEvents = new core.DartMap.literal([
        ]);
        this.forwardedPointers = core.DartSet();
        this.dispatcher = dispatcher;
        this.gestureRecognizerFactories = gestureRecognizerFactories;
        this.team = lib12.GestureArenaTeam();
        this.team.captain = this;
        this._gestureRecognizers = this.gestureRecognizerFactories.map((recognizerFactory : lib3.Factory<lib11.OneSequenceGestureRecognizer>) =>  {
            return ((_) : lib11.OneSequenceGestureRecognizer =>  {
                {
                    _.team = this.team;
                    return _;
                }
            })(recognizerFactory.constructor());
        }).toSet();
    }
    dispatcher : _MotionEventsDispatcher;

    cachedEvents : core.DartMap<number,core.DartList<lib10.PointerEvent>>;

    forwardedPointers : core.DartSet<number>;

    gestureRecognizerFactories : core.DartSet<lib3.Factory<lib11.OneSequenceGestureRecognizer>>;

    _gestureRecognizers : core.DartSet<lib11.OneSequenceGestureRecognizer>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addPointer(event : lib10.PointerDownEvent) : any {
        this.startTrackingPointer(event.pointer);
        for(let recognizer of this._gestureRecognizers) {
            recognizer.addPointer(event);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get debugDescription() : string {
        return 'Android view';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didStopTrackingLastPointer(pointer : number) : any {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleEvent(event : lib10.PointerEvent) : any {
        if (!this.forwardedPointers.contains(event.pointer)) {
            this.cacheEvent(event);
        }else {
            this.dispatcher.handlePointerEvent(event);
        }
        this.stopTrackingIfPointerNoLongerDown(event);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    acceptGesture(pointer : number) : any {
        this.flushPointerCache(pointer);
        this.forwardedPointers.add(pointer);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rejectGesture(pointer : number) : any {
        this.stopTrackingPointer(pointer);
        this.cachedEvents.remove(pointer);
    }
    cacheEvent(event : lib10.PointerEvent) : any {
        if (!this.cachedEvents.containsKey(event.pointer)) {
            this.cachedEvents.set(event.pointer,new core.DartList.literal<lib10.PointerEvent>());
        }
        this.cachedEvents.get(event.pointer).add(event);
    }
    flushPointerCache(pointer : number) : any {
        ((_837_)=>(!!_837_)?_837_.forEach(this.dispatcher.handlePointerEvent.bind(this.dispatcher)):null)(this.cachedEvents.remove(pointer));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    stopTrackingPointer(pointer : number) : any {
        super.stopTrackingPointer(pointer);
        this.forwardedPointers.remove(pointer);
    }
    reset() : any {
        this.forwardedPointers.forEach(super.stopTrackingPointer.bind(super));
        this.forwardedPointers.clear();
        this.cachedEvents.keys.forEach(super.stopTrackingPointer.bind(super));
        this.cachedEvents.clear();
        this.resolve(lib13.GestureDisposition.rejected);
    }
}

export namespace _MotionEventsDispatcher {
    export type Constructors = '_MotionEventsDispatcher';
    export type Interface = Omit<_MotionEventsDispatcher, Constructors>;
}
@DartClass
export class _MotionEventsDispatcher {
    constructor(globalToLocal : (point : any) => any,viewController : lib6.AndroidViewController) {
    }
    @defaultConstructor
    _MotionEventsDispatcher(globalToLocal : (point : any) => any,viewController : lib6.AndroidViewController) {
        this.pointerPositions = new core.DartMap.literal([
        ]);
        this.pointerProperties = new core.DartMap.literal([
        ]);
        this.nextPointerId = 0;
        this.globalToLocal = globalToLocal;
        this.viewController = viewController;
    }
    pointerPositions : core.DartMap<number,lib6.AndroidPointerCoords>;

    pointerProperties : core.DartMap<number,lib6.AndroidPointerProperties>;

    globalToLocal : (point : any) => any;

    viewController : lib6.AndroidViewController;

    nextPointerId : number;

    downTimeMillis : number;

    handlePointerEvent(event : lib10.PointerEvent) : any {
        if (is(event, lib10.PointerDownEvent)) {
            if (this.nextPointerId == 0) this.downTimeMillis = event.timeStamp.inMilliseconds;
            this.pointerProperties.set(event.pointer,this.propertiesFor(event,this.nextPointerId++));
        }
        this.pointerPositions.set(event.pointer,this.coordsFor(event));
        this.dispatchPointerEvent(event);
        if (is(event, lib10.PointerUpEvent)) {
            this.pointerPositions.remove(event.pointer);
            this.pointerProperties.remove(event.pointer);
            if (this.pointerProperties.isEmpty) {
                this.nextPointerId = 0;
                this.downTimeMillis = null;
            }
        }
        if (is(event, lib10.PointerCancelEvent)) {
            this.pointerPositions.clear();
            this.pointerProperties.clear();
            this.nextPointerId = 0;
            this.downTimeMillis = null;
        }
    }
    dispatchPointerEvent(event : lib10.PointerEvent) : any {
        let pointers : core.DartList<number> = this.pointerPositions.keys.toList();
        let pointerIdx : number = pointers.indexOf(event.pointer);
        let numPointers : number = pointers.length;
        let kPointerDataFlagBatched : number = 1;
        if (event.platformData == kPointerDataFlagBatched || (this.isSinglePointerAction(event) && pointerIdx < numPointers - 1)) return;
        let action : number;
        switch (event.runtimeType) {
            case lib10.PointerDownEvent:
                action = numPointers == 1 ? lib6.AndroidViewController.kActionDown : lib6.AndroidViewController.pointerAction(pointerIdx,lib6.AndroidViewController.kActionPointerDown);
                break;
            case lib10.PointerUpEvent:
                action = numPointers == 1 ? lib6.AndroidViewController.kActionUp : lib6.AndroidViewController.pointerAction(pointerIdx,lib6.AndroidViewController.kActionPointerUp);
                break;
            case lib10.PointerMoveEvent:
                action = lib6.AndroidViewController.kActionMove;
                break;
            case lib10.PointerCancelEvent:
                action = lib6.AndroidViewController.kActionCancel;
                break;
            default:
                return;
        }
        let androidMotionEvent : lib6.AndroidMotionEvent = lib6.AndroidMotionEvent({
            downTime : this.downTimeMillis,eventTime : event.timeStamp.inMilliseconds,action : action,pointerCount : this.pointerPositions.length,pointerProperties : pointers.map((i : number) =>  {
                return this.pointerProperties.get(i);
            }).toList(),pointerCoords : pointers.map((i : number) =>  {
                return this.pointerPositions.get(i);
            }).toList(),metaState : 0,buttonState : 0,xPrecision : 1.0,yPrecision : 1.0,deviceId : 0,edgeFlags : 0,source : 0,flags : 0});
        this.viewController.sendMotionEvent(androidMotionEvent);
    }
    coordsFor(event : lib10.PointerEvent) : lib6.AndroidPointerCoords {
        let position : any = this.globalToLocal(event.position);
        return lib6.AndroidPointerCoords({
            orientation : event.orientation,pressure : event.pressure,size : event.size,toolMajor : event.radiusMajor,toolMinor : event.radiusMinor,touchMajor : event.radiusMajor,touchMinor : event.radiusMinor,x : position.dx,y : position.dy});
    }
    propertiesFor(event : lib10.PointerEvent,pointerId : number) : lib6.AndroidPointerProperties {
        let toolType : number = lib6.AndroidPointerProperties.kToolTypeUnknown;
        switch (event.kind) {
            case PointerDeviceKind.touch:
                toolType = lib6.AndroidPointerProperties.kToolTypeFinger;
                break;
            case PointerDeviceKind.mouse:
                toolType = lib6.AndroidPointerProperties.kToolTypeMouse;
                break;
            case PointerDeviceKind.stylus:
                toolType = lib6.AndroidPointerProperties.kToolTypeStylus;
                break;
            case PointerDeviceKind.invertedStylus:
                toolType = lib6.AndroidPointerProperties.kToolTypeEraser;
                break;
            case PointerDeviceKind.unknown:
                toolType = lib6.AndroidPointerProperties.kToolTypeUnknown;
                break;
        }
        return lib6.AndroidPointerProperties({
            id : pointerId,toolType : toolType});
    }
    isSinglePointerAction(event : lib10.PointerEvent) : boolean {
        return !(is(event, lib10.PointerDownEvent)) && !(is(event, lib10.PointerUpEvent));
    }
}

export class properties {
    private static __$_gestureRecognizer : _AndroidViewGestureRecognizer;
    static get _gestureRecognizer() : _AndroidViewGestureRecognizer { 
        return this.__$_gestureRecognizer;
    }
    static set _gestureRecognizer(__$value : _AndroidViewGestureRecognizer)  { 
        this.__$_gestureRecognizer = __$value;
    }

    private static __$_state : _PlatformViewState;
    static get _state() : _PlatformViewState { 
        if (this.__$_state===undefined) {
            this.__$_state = _PlatformViewState.uninitialized;
        }
        return this.__$_state;
    }
    static set _state(__$value : _PlatformViewState)  { 
        this.__$_state = __$value;
    }

    static get viewcontroller() : lib6.AndroidViewController {
        return properties._viewController;
    }
    private static __$_viewController : lib6.AndroidViewController;
    static get _viewController() : lib6.AndroidViewController { 
        return this.__$_viewController;
    }
    static set _viewController(__$value : lib6.AndroidViewController)  { 
        this.__$_viewController = __$value;
    }

    static set viewController(viewController : lib6.AndroidViewController) {
        /* TODO (AssertStatementImpl) : assert (_viewController != null); */;
        if (op(Op.EQUALS,properties._viewController,viewController)) return;
        properties._viewController = viewController;
        _sizePlatformView();
    }
    private static __$hitTestBehavior : PlatformViewHitTestBehavior;
    static get hitTestBehavior() : PlatformViewHitTestBehavior { 
        return this.__$hitTestBehavior;
    }
    static set hitTestBehavior(__$value : PlatformViewHitTestBehavior)  { 
        this.__$hitTestBehavior = __$value;
    }

    static get sizedByParent() : boolean {
        return true;
    }
    static get alwaysNeedsCompositing() : boolean {
        return true;
    }
    static get isRepaintBoundary() : boolean {
        return true;
    }
    private static __$_motionEventsDispatcher : _MotionEventsDispatcher;
    static get _motionEventsDispatcher() : _MotionEventsDispatcher { 
        return this.__$_motionEventsDispatcher;
    }
    static set _motionEventsDispatcher(__$value : _MotionEventsDispatcher)  { 
        this.__$_motionEventsDispatcher = __$value;
    }

    private static __$_currentAndroidViewSize : any;
    static get _currentAndroidViewSize() : any { 
        return this.__$_currentAndroidViewSize;
    }
    static set _currentAndroidViewSize(__$value : any)  { 
        this.__$_currentAndroidViewSize = __$value;
    }

    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

    static get viewController() : lib6.UiKitViewController {
        return properties._viewController;
    }
    private static __$_viewController : lib6.UiKitViewController;
    static get _viewController() : lib6.UiKitViewController { 
        return this.__$_viewController;
    }
    static set _viewController(__$value : lib6.UiKitViewController)  { 
        this.__$_viewController = __$value;
    }

    private static __$hitTestBehavior : PlatformViewHitTestBehavior;
    static get hitTestBehavior() : PlatformViewHitTestBehavior { 
        return this.__$hitTestBehavior;
    }
    static set hitTestBehavior(__$value : PlatformViewHitTestBehavior)  { 
        this.__$hitTestBehavior = __$value;
    }

    static get sizedByParent() : boolean {
        return true;
    }
    static get alwaysNeedsCompositing() : boolean {
        return true;
    }
    static get isRepaintBoundary() : boolean {
        return true;
    }
    private static __$_gestureRecognizer : _UiKitViewGestureRecognizer;
    static get _gestureRecognizer() : _UiKitViewGestureRecognizer { 
        return this.__$_gestureRecognizer;
    }
    static set _gestureRecognizer(__$value : _UiKitViewGestureRecognizer)  { 
        this.__$_gestureRecognizer = __$value;
    }

    static set viewController(viewId : lib6.UiKitViewController) {
        /* TODO (AssertStatementImpl) : assert (viewId != null); */;
        properties._viewController = viewId;
        markNeedsPaint();
    }
}
