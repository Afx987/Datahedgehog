/** Library asset:datahedgehog_monitor/lib/lib/services/platform_views.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./message_codec";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as lib5 from "./system_channels";

export namespace PlatformViewsRegistry {
    export type Constructors = '_instance';
    export type Interface = Omit<PlatformViewsRegistry, Constructors>;
}
@DartClass
export class PlatformViewsRegistry {
    @namedConstructor
    _instance() {
        this._nextPlatformViewId = 0;
    }
    static _instance : new() => PlatformViewsRegistry;

    _nextPlatformViewId : number;

    getNextPlatformViewId() : number {
        return this._nextPlatformViewId++;
    }
}

export namespace PlatformViewsService {
    export type Constructors = '_';
    export type Interface = Omit<PlatformViewsService, Constructors>;
}
@DartClass
export class PlatformViewsService {
    @namedConstructor
    _() {
    }
    static _ : new() => PlatformViewsService;

    static initAndroidView(_namedArguments? : {id? : number,viewType? : string,layoutDirection? : any,creationParams? : any,creationParamsCodec? : lib3.MessageCodec<any>,onPlatformViewCreated? : (id : number) => any}) : AndroidViewController {
        let {id,viewType,layoutDirection,creationParams,creationParamsCodec,onPlatformViewCreated} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (id != null); */;
        /* TODO (AssertStatementImpl) : assert (viewType != null); */;
        /* TODO (AssertStatementImpl) : assert (layoutDirection != null); */;
        /* TODO (AssertStatementImpl) : assert (creationParams == null || creationParamsCodec != null); */;
        return AndroidViewController._(id,viewType,creationParams,creationParamsCodec,layoutDirection,onPlatformViewCreated);
    }
    static initUiKitView(_namedArguments? : {id? : number,viewType? : string,layoutDirection? : any,creationParams? : any,creationParamsCodec? : lib3.MessageCodec<any>}) : async.Future<UiKitViewController> { 
        return new async.Future.fromPromise(( async () =>  {
            let {id,viewType,layoutDirection,creationParams,creationParamsCodec} = Object.assign({
            }, _namedArguments );
            /* TODO (AssertStatementImpl) : assert (id != null); */;
            /* TODO (AssertStatementImpl) : assert (viewType != null); */;
            /* TODO (AssertStatementImpl) : assert (layoutDirection != null); */;
            /* TODO (AssertStatementImpl) : assert (creationParams == null || creationParamsCodec != null); */;
            let args : core.DartMap<string,any> = new core.DartMap.literal([
                ['id',id],
                ['viewType',viewType]]);
            if (creationParams != null) {
                let paramsByteData : typed_data.ByteData = creationParamsCodec.encodeMessage(creationParams);
                args.set('params',typed_data.Uint8List.view(paramsByteData.buffer,0,paramsByteData.lengthInBytes));
            }
            op(Op.LT,await lib5.SystemChannels.platform_views.invokeMethod.bind(lib5.SystemChannels.platform_views),);
            op(Op.GT,,('create'));
            args;
            return UiKitViewController._(id,layoutDirection);
        } )());
    }

}

export namespace AndroidPointerProperties {
    export type Constructors = 'AndroidPointerProperties';
    export type Interface = Omit<AndroidPointerProperties, Constructors>;
}
@DartClass
export class AndroidPointerProperties {
    constructor(_namedArguments? : {id? : number,toolType? : number}) {
    }
    @defaultConstructor
    AndroidPointerProperties(_namedArguments? : {id? : number,toolType? : number}) {
        let {id,toolType} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.id = id;
        this.toolType = toolType;
    }
     : any;

     : any;

    id : number;

    toolType : number;

    private static __$kToolTypeUnknown : number;
    static get kToolTypeUnknown() : number { 
        if (this.__$kToolTypeUnknown===undefined) {
            this.__$kToolTypeUnknown = 0;
        }
        return this.__$kToolTypeUnknown;
    }

    private static __$kToolTypeFinger : number;
    static get kToolTypeFinger() : number { 
        if (this.__$kToolTypeFinger===undefined) {
            this.__$kToolTypeFinger = 1;
        }
        return this.__$kToolTypeFinger;
    }

    private static __$kToolTypeStylus : number;
    static get kToolTypeStylus() : number { 
        if (this.__$kToolTypeStylus===undefined) {
            this.__$kToolTypeStylus = 2;
        }
        return this.__$kToolTypeStylus;
    }

    private static __$kToolTypeMouse : number;
    static get kToolTypeMouse() : number { 
        if (this.__$kToolTypeMouse===undefined) {
            this.__$kToolTypeMouse = 3;
        }
        return this.__$kToolTypeMouse;
    }

    private static __$kToolTypeEraser : number;
    static get kToolTypeEraser() : number { 
        if (this.__$kToolTypeEraser===undefined) {
            this.__$kToolTypeEraser = 4;
        }
        return this.__$kToolTypeEraser;
    }

    _asList() : core.DartList<number> {
        return new core.DartList.literal<number>(this.id,this.toolType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `AndroidPointerProperties(id: ${this.id}, toolType: ${this.toolType})`;
    }
}

export namespace AndroidPointerCoords {
    export type Constructors = 'AndroidPointerCoords';
    export type Interface = Omit<AndroidPointerCoords, Constructors>;
}
@DartClass
export class AndroidPointerCoords {
    constructor(_namedArguments? : {orientation? : double,pressure? : double,size? : double,toolMajor? : double,toolMinor? : double,touchMajor? : double,touchMinor? : double,x? : double,y? : double}) {
    }
    @defaultConstructor
    AndroidPointerCoords(_namedArguments? : {orientation? : double,pressure? : double,size? : double,toolMajor? : double,toolMinor? : double,touchMajor? : double,touchMinor? : double,x? : double,y? : double}) {
        let {orientation,pressure,size,toolMajor,toolMinor,touchMajor,touchMinor,x,y} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.orientation = orientation;
        this.pressure = pressure;
        this.size = size;
        this.toolMajor = toolMajor;
        this.toolMinor = toolMinor;
        this.touchMajor = touchMajor;
        this.touchMinor = touchMinor;
        this.x = x;
        this.y = y;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    orientation : double;

    pressure : double;

    size : double;

    toolMajor : double;

    toolMinor : double;

    touchMajor : double;

    touchMinor : double;

    x : double;

    y : double;

    _asList() : core.DartList<double> {
        return new core.DartList.literal<double>(this.orientation,this.pressure,this.size,this.toolMajor,this.toolMinor,this.touchMajor,this.touchMinor,this.x,this.y);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `AndroidPointerCoords(orientation: ${this.orientation}, pressure: ${this.pressure}, size: ${this.size}, toolMajor: ${this.toolMajor}, toolMinor: ${this.toolMinor}, touchMajor: ${this.touchMajor}, touchMinor: ${this.touchMinor}, x: ${this.x}, y: ${this.y})`;
    }
}

export namespace AndroidMotionEvent {
    export type Constructors = 'AndroidMotionEvent';
    export type Interface = Omit<AndroidMotionEvent, Constructors>;
}
@DartClass
export class AndroidMotionEvent {
    constructor(_namedArguments? : {downTime? : number,eventTime? : number,action? : number,pointerCount? : number,pointerProperties? : core.DartList<AndroidPointerProperties>,pointerCoords? : core.DartList<AndroidPointerCoords>,metaState? : number,buttonState? : number,xPrecision? : double,yPrecision? : double,deviceId? : number,edgeFlags? : number,source? : number,flags? : number}) {
    }
    @defaultConstructor
    AndroidMotionEvent(_namedArguments? : {downTime? : number,eventTime? : number,action? : number,pointerCount? : number,pointerProperties? : core.DartList<AndroidPointerProperties>,pointerCoords? : core.DartList<AndroidPointerCoords>,metaState? : number,buttonState? : number,xPrecision? : double,yPrecision? : double,deviceId? : number,edgeFlags? : number,source? : number,flags? : number}) {
        let {downTime,eventTime,action,pointerCount,pointerProperties,pointerCoords,metaState,buttonState,xPrecision,yPrecision,deviceId,edgeFlags,source,flags} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.downTime = downTime;
        this.eventTime = eventTime;
        this.action = action;
        this.pointerCount = pointerCount;
        this.pointerProperties = pointerProperties;
        this.pointerCoords = pointerCoords;
        this.metaState = metaState;
        this.buttonState = buttonState;
        this.xPrecision = xPrecision;
        this.yPrecision = yPrecision;
        this.deviceId = deviceId;
        this.edgeFlags = edgeFlags;
        this.source = source;
        this.flags = flags;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    downTime : number;

    eventTime : number;

    action : number;

    pointerCount : number;

    pointerProperties : core.DartList<AndroidPointerProperties>;

    pointerCoords : core.DartList<AndroidPointerCoords>;

    metaState : number;

    buttonState : number;

    xPrecision : double;

    yPrecision : double;

    deviceId : number;

    edgeFlags : number;

    source : number;

    flags : number;

    _asList(viewId : number) : core.DartList<any> {
        return new core.DartList.literal<any>(viewId,this.downTime,this.eventTime,this.action,this.pointerCount,this.pointerProperties.map((p : AndroidPointerProperties) =>  {
            return p._asList();
        }).toList(),this.pointerCoords.map((p : AndroidPointerCoords) =>  {
            return p._asList();
        }).toList(),this.metaState,this.buttonState,this.xPrecision,this.yPrecision,this.deviceId,this.edgeFlags,this.source,this.flags);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `AndroidPointerEvent(downTime: ${this.downTime}, eventTime: ${this.eventTime}, action: ${this.action}, pointerCount: ${this.pointerCount}, pointerProperties: ${this.pointerProperties}, pointerCoords: ${this.pointerCoords}, metaState: ${this.metaState}, buttonState: ${this.buttonState}, xPrecision: ${this.xPrecision}, yPrecision: ${this.yPrecision}, deviceId: ${this.deviceId}, edgeFlags: ${this.edgeFlags}, source: ${this.source}, flags: ${this.flags})`;
    }
}

export enum _AndroidViewState {
    waitingForSize,
    creating,
    created,
    createFailed,
    disposed
}

export namespace AndroidViewController {
    export type Constructors = '_';
    export type Interface = Omit<AndroidViewController, Constructors>;
}
@DartClass
export class AndroidViewController {
    @namedConstructor
    _(id : number,viewType : string,creationParams : any,creationParamsCodec : lib3.MessageCodec<any>,layoutDirection : any,onPlatformViewCreated : (id : number) => any) {
        this._viewType = viewType;
        this._creationParams = creationParams;
        this._creationParamsCodec = creationParamsCodec;
        this._layoutDirection = layoutDirection;
        this._onPlatformViewCreated = onPlatformViewCreated;
        this._state = _AndroidViewState.waitingForSize;
        this.assert = assert;
        this.id = id;
    }
    static _ : new(id : number,viewType : string,creationParams : any,creationParamsCodec : lib3.MessageCodec<any>,layoutDirection : any,onPlatformViewCreated : (id : number) => any) => AndroidViewController;

     : any;

     : any;

     : any;

     : any;

     : any;

    _viewType;
    _creationParams;
    _creationParamsCodec;
    _layoutDirection;
    _onPlatformViewCreated;
    _state;

    private static __$kActionDown : number;
    static get kActionDown() : number { 
        if (this.__$kActionDown===undefined) {
            this.__$kActionDown = 0;
        }
        return this.__$kActionDown;
    }

    private static __$kActionUp : number;
    static get kActionUp() : number { 
        if (this.__$kActionUp===undefined) {
            this.__$kActionUp = 1;
        }
        return this.__$kActionUp;
    }

    private static __$kActionMove : number;
    static get kActionMove() : number { 
        if (this.__$kActionMove===undefined) {
            this.__$kActionMove = 2;
        }
        return this.__$kActionMove;
    }

    private static __$kActionCancel : number;
    static get kActionCancel() : number { 
        if (this.__$kActionCancel===undefined) {
            this.__$kActionCancel = 3;
        }
        return this.__$kActionCancel;
    }

    private static __$kActionPointerDown : number;
    static get kActionPointerDown() : number { 
        if (this.__$kActionPointerDown===undefined) {
            this.__$kActionPointerDown = 5;
        }
        return this.__$kActionPointerDown;
    }

    private static __$kActionPointerUp : number;
    static get kActionPointerUp() : number { 
        if (this.__$kActionPointerUp===undefined) {
            this.__$kActionPointerUp = 6;
        }
        return this.__$kActionPointerUp;
    }

    private static __$kAndroidLayoutDirectionLtr : number;
    static get kAndroidLayoutDirectionLtr() : number { 
        if (this.__$kAndroidLayoutDirectionLtr===undefined) {
            this.__$kAndroidLayoutDirectionLtr = 0;
        }
        return this.__$kAndroidLayoutDirectionLtr;
    }

    private static __$kAndroidLayoutDirectionRtl : number;
    static get kAndroidLayoutDirectionRtl() : number { 
        if (this.__$kAndroidLayoutDirectionRtl===undefined) {
            this.__$kAndroidLayoutDirectionRtl = 1;
        }
        return this.__$kAndroidLayoutDirectionRtl;
    }

    id : number;

    _viewType : string;

    _onPlatformViewCreated : (id : number) => any;

    _textureId : number;

    get textureId() : number {
        return this._textureId;
    }
    _layoutDirection : any;

    _state : _AndroidViewState;

    _creationParams : any;

    _creationParamsCodec : lib3.MessageCodec<any>;

    void : async.Future<any>;

    dispose() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (op(Op.EQUALS,this._state,_AndroidViewState.creating) || op(Op.EQUALS,this._state,_AndroidViewState.created)) op(Op.LT,await lib5.SystemChannels.platform_views.invokeMethod.bind(lib5.SystemChannels.platform_views),);
            op(Op.GT,,('dispose'));
            this.id;
            this._state = _AndroidViewState.disposed;
        } )());
    }

    void : async.Future<any>;

    setSize(size : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            /* TODO (AssertStatementImpl) : assert (_state != _AndroidViewState.disposed, 'trying to size a disposed Android View. View id: $id'); */;
            /* TODO (AssertStatementImpl) : assert (size != null); */;
            /* TODO (AssertStatementImpl) : assert (!size.isEmpty); */;
            if (op(Op.EQUALS,this._state,_AndroidViewState.waitingForSize)) return this._create(size);
            op(Op.LT,await lib5.SystemChannels.platform_views.invokeMethod.bind(lib5.SystemChannels.platform_views),);
            op(Op.GT,,('resize'));
            new core.DartMap.literal([
                ['id',this.id],
                ['width',size.width],
                ['height',size.height]]);
        } )());
    }

    void : async.Future<any>;

    setLayoutDirection(layoutDirection : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            /* TODO (AssertStatementImpl) : assert (_state != _AndroidViewState.disposed, 'trying to set a layout direction for a disposed UIView. View id: $id'); */;
            if (op(Op.EQUALS,layoutDirection,this._layoutDirection)) return;
            /* TODO (AssertStatementImpl) : assert (layoutDirection != null); */;
            this._layoutDirection = layoutDirection;
            if (op(Op.EQUALS,this._state,_AndroidViewState.waitingForSize)) return;
            op(Op.LT,await lib5.SystemChannels.platform_views.invokeMethod.bind(lib5.SystemChannels.platform_views),);
            op(Op.GT,,('setDirection'));
            new core.DartMap.literal([
                ['id',this.id],
                ['direction',AndroidViewController._getAndroidDirection(layoutDirection)]]);
        } )());
    }

    static _getAndroidDirection(direction : any) : number {
        /* TODO (AssertStatementImpl) : assert (direction != null); */;
        switch (direction) {
            case TextDirection.ltr:
                return AndroidViewController.kAndroidLayoutDirectionLtr;
            case TextDirection.rtl:
                return AndroidViewController.kAndroidLayoutDirectionRtl;
        }
        return null;
    }
    void : async.Future<any>;

    sendMotionEvent(event : AndroidMotionEvent) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await lib5.SystemChannels.platform_views.invokeMethod('touch',event._asList(this.id));
        } )());
    }

    static pointerAction(pointerId : number,action : number) : number {
        return ((pointerId << 8) & 65280) | (action & 255);
    }
    void : async.Future<any>;

    _create(size : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let args : core.DartMap<string,any> = new core.DartMap.literal([
                ['id',this.id],
                ['viewType',this._viewType],
                ['width',size.width],
                ['height',size.height],
                ['direction',AndroidViewController._getAndroidDirection(this._layoutDirection)]]);
            if (this._creationParams != null) {
                let paramsByteData : typed_data.ByteData = this._creationParamsCodec.encodeMessage(this._creationParams);
                args.set('params',typed_data.Uint8List.view(paramsByteData.buffer,0,paramsByteData.lengthInBytes));
            }
            this._textureId = await lib5.SystemChannels.platform_views.invokeMethod('create',args);
            if (this._onPlatformViewCreated != null) this._onPlatformViewCreated(this.id);
            this._state = _AndroidViewState.created;
        } )());
    }

}

export namespace UiKitViewController {
    export type Constructors = '_';
    export type Interface = Omit<UiKitViewController, Constructors>;
}
@DartClass
export class UiKitViewController {
    @namedConstructor
    _(id : number,layoutDirection : any) {
        this._layoutDirection = layoutDirection;
        this._debugDisposed = false;
        this.assert = assert;
        this.id = id;
    }
    static _ : new(id : number,layoutDirection : any) => UiKitViewController;

     : any;

     : any;

    _layoutDirection;

    id : number;

    _debugDisposed : boolean;

    _layoutDirection : any;

    void : async.Future<any>;

    setLayoutDirection(layoutDirection : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            /* TODO (AssertStatementImpl) : assert (!_debugDisposed, 'trying to set a layout direction for a disposed Android View. View id: $id'); */;
            if (op(Op.EQUALS,layoutDirection,this._layoutDirection)) return;
            /* TODO (AssertStatementImpl) : assert (layoutDirection != null); */;
            this._layoutDirection = layoutDirection;
        } )());
    }

    void : async.Future<any>;

    acceptGesture() {
        let args : core.DartMap<string,any> = new core.DartMap.literal([
            ['id',this.id]]);
        return lib5.SystemChannels.platform_views.invokeMethod('acceptGesture',args);
    }
    void : async.Future<any>;

    rejectGesture() {
        let args : core.DartMap<string,any> = new core.DartMap.literal([
            ['id',this.id]]);
        return lib5.SystemChannels.platform_views.invokeMethod('rejectGesture',args);
    }
    void : async.Future<any>;

    dispose() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._debugDisposed = true;
            op(Op.LT,await lib5.SystemChannels.platform_views.invokeMethod.bind(lib5.SystemChannels.platform_views),);
            op(Op.GT,,('dispose'));
            this.id;
        } )());
    }

}

export class properties {
    private static __$platformViewsRegistry : PlatformViewsRegistry;
    static get platformViewsRegistry() : PlatformViewsRegistry { 
        if (this.__$platformViewsRegistry===undefined) {
            this.__$platformViewsRegistry = PlatformViewsRegistry._instance();
        }
        return this.__$platformViewsRegistry;
    }
    static set platformViewsRegistry(__$value : PlatformViewsRegistry)  { 
        this.__$platformViewsRegistry = __$value;
    }

}
