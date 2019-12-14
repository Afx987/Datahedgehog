/** Library asset:datahedgehog_monitor/lib/lib/rendering/view.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as lib4 from "./object";
import * as lib5 from "./box";
import * as lib6 from "./layer";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/foundation/debug";
import * as developer from "@dart2ts/dart/developer";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/services/system_chrome";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/painting/matrix_utils";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export var scheduleInitialFrame : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (owner != null); */;
    /* TODO (AssertStatementImpl) : assert (_rootTransform == null); */;
    scheduleInitialLayout();
    scheduleInitialPaint(_updateMatricesAndCreateNewRootLayer());
    /* TODO (AssertStatementImpl) : assert (_rootTransform != null); */;
    owner.requestVisualUpdate();
};
export var _updateMatricesAndCreateNewRootLayer : () => lib6.Layer = () : lib6.Layer =>  {
    properties._rootTransform = properties.configuration.toMatrix();
    let rootLayer : lib6.ContainerLayer = lib6.TransformLayer({
        transform : properties._rootTransform});
    rootLayer.attach(this);
    /* TODO (AssertStatementImpl) : assert (_rootTransform != null); */;
    return rootLayer;
};
export var debugAssertDoesMeetConstraints : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (false); */;
};
export var performResize : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (false); */;
};
export var performLayout : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (_rootTransform != null); */;
    properties._size = properties.configuration.size;
    /* TODO (AssertStatementImpl) : assert (_size.isFinite); */;
    if (child != null) child.layout(lib5.BoxConstraints.tight(properties._size));
};
export var rotate : (_namedArguments? : {oldAngle? : number,newAngle? : number,time? : core.DartDuration}) => any = (_namedArguments? : {oldAngle? : number,newAngle? : number,time? : core.DartDuration}) : any =>  {
    let {oldAngle,newAngle,time} = Object.assign({
    }, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (false); */;
};
export var hitTest : (result : lib7.HitTestResult,_namedArguments? : {position? : any}) => boolean = (result : lib7.HitTestResult,_namedArguments? : {position? : any}) : boolean =>  {
    let {position} = Object.assign({
    }, _namedArguments );
    if (child != null) child.hitTest(result,{
        position : position});
    result.add(lib7.HitTestEntry(this));
    return true;
};
export var paint : (context : lib4.PaintingContext,offset : any) => any = (context : lib4.PaintingContext,offset : any) : any =>  {
    if (child != null) context.paintChild(child,offset);
};
export var applyPaintTransform : (child : lib5.RenderBox,transform : lib3.Matrix4) => any = (child : lib5.RenderBox,transform : lib3.Matrix4) : any =>  {
    /* TODO (AssertStatementImpl) : assert (_rootTransform != null); */;
    transform.multiply(properties._rootTransform);
    super.applyPaintTransform(child,transform);
};
export var compositeFrame : () => any = () : any =>  {
    developer.Timeline.startSync('Compositing',{
        arguments : lib8.properties.timelineWhitelistArguments});
    try {
        let builder : any = ui.SceneBuilder();
        let scene : any = layer.buildScene(builder);
        if (properties.automaticSystemUiAdjustment) _updateSystemChrome();
        properties._window.render(scene);
        scene.dispose();
        /* TODO (AssertStatementImpl) : assert (() {if (debugRepaintRainbowEnabled || debugRepaintTextRainbowEnabled) debugCurrentRepaintColor = debugCurrentRepaintColor.withHue((debugCurrentRepaintColor.hue + 2.0) % 360.0); return true;}()); */;
    } finally {
        developer.Timeline.finishSync();
    }
};
export var _updateSystemChrome : () => any = () : any =>  {
    let bounds : any = properties.paintBounds;
    let top : any = Offset(bounds.center.dx,op(Op.DIVIDE,properties._window.padding.top,properties._window.devicePixelRatio));
    let bottom : any = Offset(bounds.center.dx,op(Op.MINUS,bounds.center.dy,op(Op.DIVIDE,properties._window.padding.bottom,properties._window.devicePixelRatio)));
    let upperOverlayStyle : lib10.SystemUiOverlayStyle = layer.find(top);
    let lowerOverlayStyle : lib10.SystemUiOverlayStyle;
    switch (lib11.properties.defaultTargetPlatform) {
        case lib11.TargetPlatform.android:
            lowerOverlayStyle = layer.find(bottom);
            break;
        case lib11.TargetPlatform.iOS:
        case lib11.TargetPlatform.fuchsia:
            break;
    }
    if (upperOverlayStyle != null || lowerOverlayStyle != null) {
        let overlayStyle : lib10.SystemUiOverlayStyle = lib10.SystemUiOverlayStyle({
            statusBarBrightness : ((t)=>(!!t)?t.statusBarBrightness:null)(upperOverlayStyle),statusBarIconBrightness : ((t)=>(!!t)?t.statusBarIconBrightness:null)(upperOverlayStyle),statusBarColor : ((t)=>(!!t)?t.statusBarColor:null)(upperOverlayStyle),systemNavigationBarColor : ((t)=>(!!t)?t.systemNavigationBarColor:null)(lowerOverlayStyle),systemNavigationBarDividerColor : ((t)=>(!!t)?t.systemNavigationBarDividerColor:null)(lowerOverlayStyle),systemNavigationBarIconBrightness : ((t)=>(!!t)?t.systemNavigationBarIconBrightness:null)(lowerOverlayStyle)});
        lib10.SystemChrome.setSystemUIOverlayStyle(overlayStyle);
    }
};
export var debugFillProperties : (properties : lib13.DiagnosticPropertiesBuilder) => any = (properties : lib13.DiagnosticPropertiesBuilder) : any =>  {
    /* TODO (AssertStatementImpl) : assert (() {properties.add(DiagnosticsNode.message('debug mode enabled - ${Platform.operatingSystem}')); return true;}()); */;
    properties.add(lib13.DiagnosticsProperty('window size',properties._window.physicalSize,{
        tooltip : 'in physical pixels'}));
    properties.add(lib13.DoubleProperty('device pixel ratio',properties._window.devicePixelRatio,{
        tooltip : 'physical pixels per logical pixel'}));
    properties.add(lib13.DiagnosticsProperty('configuration',properties.configuration,{
        tooltip : 'in logical pixels'}));
    if (properties._window.semanticsEnabled) properties.add(lib13.DiagnosticsNode.message('semantics enabled'));
};
export namespace ViewConfiguration {
    export type Constructors = 'ViewConfiguration';
    export type Interface = Omit<ViewConfiguration, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class ViewConfiguration {
    constructor(_namedArguments? : {size? : any,devicePixelRatio? : double}) {
    }
    @defaultConstructor
    ViewConfiguration(_namedArguments? : {size? : any,devicePixelRatio? : double}) {
        let {size,devicePixelRatio} = Object.assign({
            "size" : Size.zero,
            "devicePixelRatio" : 1.0}, _namedArguments );
        this.size = size;
        this.devicePixelRatio = devicePixelRatio;
    }
    size : any;

    devicePixelRatio : double;

    toMatrix() : lib3.Matrix4 {
        return lib3.Matrix4.diagonal3Values(this.devicePixelRatio,this.devicePixelRatio,1.0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.size} at ${this.devicePixelRatio}x`;
    }
}

export namespace RenderView {
    export type Constructors = lib4.RenderObject.Constructors | 'RenderView';
    export type Interface = Omit<RenderView, Constructors>;
}
@DartClass
@With(any)
export class RenderView extends lib4.RenderObject implements any.Interface {
    constructor(_namedArguments? : {child? : lib5.RenderBox,configuration? : ViewConfiguration,window? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderView(_namedArguments? : {child? : lib5.RenderBox,configuration? : ViewConfiguration,window? : any}) {
        let {child,configuration,window} = Object.assign({
        }, _namedArguments );
        this._configuration = properties.configuration;
        this._window = window;
        this.child = this.child;
        this.assert = assert;
    }
     : any;

    _configuration;
    _window;

    child;

}

export class properties {
    static get size() : any {
        return properties._size;
    }
    private static __$_size : any;
    static get _size() : any { 
        if (this.__$_size===undefined) {
            this.__$_size = Size.zero;
        }
        return this.__$_size;
    }
    static set _size(__$value : any)  { 
        this.__$_size = __$value;
    }

    static get configuration() : ViewConfiguration {
        return properties._configuration;
    }
    private static __$_configuration : ViewConfiguration;
    static get _configuration() : ViewConfiguration { 
        return this.__$_configuration;
    }
    static set _configuration(__$value : ViewConfiguration)  { 
        this.__$_configuration = __$value;
    }

    static set configuration(value : ViewConfiguration) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,properties.configuration,value)) return;
        properties._configuration = value;
        replaceRootLayer(_updateMatricesAndCreateNewRootLayer());
        /* TODO (AssertStatementImpl) : assert (_rootTransform != null); */;
        markNeedsLayout();
    }
    private static __$_window : any;
    static get _window() : any { 
        return this.__$_window;
    }
    static set _window(__$value : any)  { 
        this.__$_window = __$value;
    }

    private static __$automaticSystemUiAdjustment : boolean;
    static get automaticSystemUiAdjustment() : boolean { 
        if (this.__$automaticSystemUiAdjustment===undefined) {
            this.__$automaticSystemUiAdjustment = true;
        }
        return this.__$automaticSystemUiAdjustment;
    }
    static set automaticSystemUiAdjustment(__$value : boolean)  { 
        this.__$automaticSystemUiAdjustment = __$value;
    }

    private static __$_rootTransform : lib3.Matrix4;
    static get _rootTransform() : lib3.Matrix4 { 
        return this.__$_rootTransform;
    }
    static set _rootTransform(__$value : lib3.Matrix4)  { 
        this.__$_rootTransform = __$value;
    }

    static get isRepaintBoundary() : boolean {
        return true;
    }
    static get paintBounds() : any {
        return op(Op.BITAND,Offset.zero,(op(Op.TIMES,properties.size,properties.configuration.devicePixelRatio)));
    }
    static get semanticBounds() : any {
        /* TODO (AssertStatementImpl) : assert (_rootTransform != null); */;
        return lib12.MatrixUtils.transformRect(properties._rootTransform,op(Op.BITAND,Offset.zero,properties.size));
    }
}
