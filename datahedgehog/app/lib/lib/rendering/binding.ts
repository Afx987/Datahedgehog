/** Library asset:datahedgehog_monitor/lib/lib/rendering/binding.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/scheduler/binding";
import * as lib4 from "./object";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/constants";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/foundation/print";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/foundation/binding";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/semantics/semantics";
import * as lib9 from "./view";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/gestures/mouse_tracking";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/gestures/binding";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/services/message_codecs";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/foundation/debug";
import * as developer from "@dart2ts/dart/developer";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";
import * as lib17 from "./box";

export var initInstances : () => any = () : any =>  {
    super.initInstances();
    properties._instance = this;
    properties._pipelineOwner = lib4.PipelineOwner({
        onNeedVisualUpdate : lib3.ensureVisualUpdate,onSemanticsOwnerCreated : _handleSemanticsOwnerCreated,onSemanticsOwnerDisposed : _handleSemanticsOwnerDisposed});
    ((_) : any =>  {
        {
            _.onMetricsChanged = handleMetricsChanged;
            _.onTextScaleFactorChanged = handleTextScaleFactorChanged;
            _.onPlatformBrightnessChanged = handlePlatformBrightnessChanged;
            _.onSemanticsEnabledChanged = _handleSemanticsEnabledChanged;
            _.onSemanticsAction = _handleSemanticsAction;
            return _;
        }
    })(window);
    initRenderView();
    _handleSemanticsEnabledChanged();
    /* TODO (AssertStatementImpl) : assert (renderView != null); */;
    lib3.addPersistentFrameCallback(_handlePersistentFrameCallback);
    properties._mouseTracker = _createMouseTracker();
};
export var initServiceExtensions : () => any = () : any =>  {
    super.initServiceExtensions();
    /* TODO (AssertStatementImpl) : assert (() {registerBoolServiceExtension(name: 'debugPaint', getter: () async => debugPaintSizeEnabled, setter: (bool value) {if (debugPaintSizeEnabled == value) return Future < ;  > .value(); debugPaintSizeEnabled = value; return _forceRepaint();}); registerBoolServiceExtension(name: 'debugPaintBaselinesEnabled', getter: () async => debugPaintBaselinesEnabled, setter: (bool value) {if (debugPaintBaselinesEnabled == value) return Future < ;  > .value(); debugPaintBaselinesEnabled = value; return _forceRepaint();}); registerBoolServiceExtension(name: 'repaintRainbow', getter: () async => debugRepaintRainbowEnabled, setter: (bool value) {final bool repaint = debugRepaintRainbowEnabled && !value; debugRepaintRainbowEnabled = value; if (repaint) return _forceRepaint(); return Future < ;  > .value();}); registerSignalServiceExtension(name: 'debugDumpLayerTree', callback: () {debugDumpLayerTree(); return debugPrintDone;}); return true;}()); */;
    if (!lib5.properties.kReleaseMode) {
        lib7.registerSignalServiceExtension({
            name : 'debugDumpRenderTree',callback : () =>  {
                debugDumpRenderTree();
                return lib6.properties.debugPrintDone;
            }});
        lib7.registerSignalServiceExtension({
            name : 'debugDumpSemanticsTreeInTraversalOrder',callback : () =>  {
                debugDumpSemanticsTree(lib8.DebugSemanticsDumpOrder.traversalOrder);
                return lib6.properties.debugPrintDone;
            }});
        lib7.registerSignalServiceExtension({
            name : 'debugDumpSemanticsTreeInInverseHitTestOrder',callback : () =>  {
                debugDumpSemanticsTree(lib8.DebugSemanticsDumpOrder.inverseHitTest);
                return lib6.properties.debugPrintDone;
            }});
    }
};
export var initRenderView : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (renderView == null); */;
    properties.renderView = lib9.RenderView({
        configuration : createViewConfiguration(),window : window});
    properties.renderView.scheduleInitialFrame();
};
export var handleMetricsChanged : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (renderView != null); */;
    properties.renderView.configuration = createViewConfiguration();
    lib3.scheduleForcedFrame();
};
export var handleTextScaleFactorChanged : () => any = () : any =>  {
};
export var handlePlatformBrightnessChanged : () => any = () : any =>  {
};
export var createViewConfiguration : () => lib9.ViewConfiguration = () : lib9.ViewConfiguration =>  {
    let devicePixelRatio : double = window.devicePixelRatio;
    return lib9.ViewConfiguration({
        size : op(Op.DIVIDE,window.physicalSize,devicePixelRatio),devicePixelRatio : devicePixelRatio});
};
export var _createMouseTracker : () => lib10.MouseTracker = () : lib10.MouseTracker =>  {
    return lib10.MouseTracker(lib11.properties.pointerRouter,(offset : any) =>  {
        return properties.renderView.layer.find(op(Op.TIMES,offset,window.devicePixelRatio));
    });
};
export var _handleSemanticsEnabledChanged : () => any = () : any =>  {
    setSemanticsEnabled(window.semanticsEnabled);
};
export var setSemanticsEnabled : (enabled : boolean) => any = (enabled : boolean) : any =>  {
    if (enabled) {
        properties._semanticsHandle = ( properties._semanticsHandle ) || ( properties._pipelineOwner.ensureSemantics() );
    }else {
        ((_809_)=>(!!_809_)?_809_.dispose():null)(properties._semanticsHandle);
        properties._semanticsHandle = null;
    }
};
export var _handleSemanticsAction : (id : number,action : any,args : typed_data.ByteData) => any = (id : number,action : any,args : typed_data.ByteData) : any =>  {
    ((_810_)=>(!!_810_)?_810_.performAction(id,action,args != null ? new lib13.StandardMessageCodec().decodeMessage(args) : null):null)(properties._pipelineOwner.semanticsOwner);
};
export var debugDumpSemanticsTree : (childOrder : lib8.DebugSemanticsDumpOrder) => any = (childOrder : lib8.DebugSemanticsDumpOrder) : any =>  {
    lib6.properties.debugPrint((((_814_)=>(!!_814_)?_814_.toStringDeep({
        childOrder : childOrder}):null)(((t)=>(!!t)?t.debugSemantics:null)(((t)=>(!!t)?t.renderView:null)(properties.RendererBinding.instance))) || 'Semantics not collected.'));
};
export var _handleSemanticsOwnerDisposed : () => any = () : any =>  {
    properties.renderView.clearSemantics();
};
export var _handlePersistentFrameCallback : (timeStamp : core.DartDuration) => any = (timeStamp : core.DartDuration) : any =>  {
    drawFrame();
};
export var drawFrame : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (renderView != null); */;
    properties.pipelineOwner.flushLayout();
    properties.pipelineOwner.flushCompositingBits();
    properties.pipelineOwner.flushPaint();
    properties.renderView.compositeFrame();
    properties.pipelineOwner.flushSemantics();
};
export var performReassemble : () => any = () => new async.Future.fromPromise(( async () : Promise<any> =>  {
    await super.performReassemble();
    developer.Timeline.startSync('Dirty Render Tree',{
        arguments : lib14.properties.timelineWhitelistArguments});
    try {
        properties.renderView.reassemble();
    } finally {
        developer.Timeline.finishSync();
    }
    lib3.scheduleWarmUpFrame();
    await lib3.properties.endOfFrame;
})());
export var hitTest : (result : lib16.HitTestResult,position : any) => any = (result : lib16.HitTestResult,position : any) : any =>  {
    /* TODO (AssertStatementImpl) : assert (renderView != null); */;
    properties.renderView.hitTest(result,{
        position : position});
    super.hitTest(result,position);
};
export var _forceRepaint : () => any = () =>  {
    let visitor : (child : any) => any;
    visitor = (child : lib4.RenderObject) =>  {
        child.markNeedsPaint();
        child.visitChildren(visitor);
    };
    ((_811_)=>(!!_811_)?_811_.visitChildren(visitor):null)(((t)=>(!!t)?t.renderView:null)(properties.instance));
    return lib3.properties.endOfFrame;
};
export var debugDumpRenderTree : () => any = () : any =>  {
    lib6.properties.debugPrint((((_812_)=>(!!_812_)?_812_.toStringDeep():null)(((t)=>(!!t)?t.renderView:null)(properties.RendererBinding.instance)) || 'Render tree unavailable.'));
};
export var debugDumpLayerTree : () => any = () : any =>  {
    lib6.properties.debugPrint((((_813_)=>(!!_813_)?_813_.toStringDeep():null)(((t)=>(!!t)?t.debugLayer:null)(((t)=>(!!t)?t.renderView:null)(properties.RendererBinding.instance))) || 'Layer tree unavailable.'));
};
export var _handleSemanticsOwnerCreated : () => any = () : any =>  {
    properties.renderView.scheduleInitialSemantics();
};
export namespace RenderingFlutterBinding {
    export type Constructors = 'RenderingFlutterBinding';
    export type Interface = Omit<RenderingFlutterBinding, Constructors>;
}
@DartClass
@With(any,any,any,any,any)
export class RenderingFlutterBinding extends any implements any.Interface,any.Interface,any.Interface,any.Interface,any.Interface {
    constructor(_namedArguments? : {root? : lib17.RenderBox}) {
    }
    @defaultConstructor
    RenderingFlutterBinding(_namedArguments? : {root? : lib17.RenderBox}) {
        let {root} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (renderView != null); */;
        properties.renderView.child = root;
    }
}

export class properties {
    private static __$_pipelineOwner : lib4.PipelineOwner;
    static get _pipelineOwner() : lib4.PipelineOwner { 
        return this.__$_pipelineOwner;
    }
    static set _pipelineOwner(__$value : lib4.PipelineOwner)  { 
        this.__$_pipelineOwner = __$value;
    }

    private static __$BindingBase : any;
    static get BindingBase() : any { 
        return this.__$BindingBase;
    }
    static set BindingBase(__$value : any)  { 
        this.__$BindingBase = __$value;
    }
    ,private static __$ServicesBinding : any;
    static get ServicesBinding() : any { 
        return this.__$ServicesBinding;
    }
    static set ServicesBinding(__$value : any)  { 
        this.__$ServicesBinding = __$value;
    }
    ,private static __$SchedulerBinding : any;
    static get SchedulerBinding() : any { 
        return this.__$SchedulerBinding;
    }
    static set SchedulerBinding(__$value : any)  { 
        this.__$SchedulerBinding = __$value;
    }
    ,private static __$GestureBinding : any;
    static get GestureBinding() : any { 
        return this.__$GestureBinding;
    }
    static set GestureBinding(__$value : any)  { 
        this.__$GestureBinding = __$value;
    }
    ,private static __$SemanticsBinding : any;
    static get SemanticsBinding() : any { 
        return this.__$SemanticsBinding;
    }
    static set SemanticsBinding(__$value : any)  { 
        this.__$SemanticsBinding = __$value;
    }
    ,private static __$HitTestable : any;
    static get HitTestable() : any { 
        return this.__$HitTestable;
    }
    static set HitTestable(__$value : any)  { 
        this.__$HitTestable = __$value;
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

    static get mouseTracker() : lib10.MouseTracker {
        return properties._mouseTracker;
    }
    private static __$_mouseTracker : lib10.MouseTracker;
    static get _mouseTracker() : lib10.MouseTracker { 
        return this.__$_mouseTracker;
    }
    static set _mouseTracker(__$value : lib10.MouseTracker)  { 
        this.__$_mouseTracker = __$value;
    }

    static get pipelineOwner() : lib4.PipelineOwner {
        return properties._pipelineOwner;
    }
    private static __$RendererBinding : any;
    static get RendererBinding() : any { 
        return this.__$RendererBinding;
    }
    static set RendererBinding(__$value : any)  { 
        this.__$RendererBinding = __$value;
    }

    static get renderView() : lib9.RenderView {
        return properties._pipelineOwner.rootNode;
    }
    static set renderView(value : lib9.RenderView) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        properties._pipelineOwner.rootNode = value;
    }
    private static __$_semanticsHandle : lib4.SemanticsHandle;
    static get _semanticsHandle() : lib4.SemanticsHandle { 
        return this.__$_semanticsHandle;
    }
    static set _semanticsHandle(__$value : lib4.SemanticsHandle)  { 
        this.__$_semanticsHandle = __$value;
    }

    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

}
