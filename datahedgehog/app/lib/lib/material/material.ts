/** Library asset:datahedgehog_monitor/lib/lib/material/material.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/painting/border_radius";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib8 from "./constants";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib10 from "./theme";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/implicit_animations";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/widgets/notification_listener";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/painting/box_border";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/rendering/proxy_box";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/painting/rounded_rectangle_border";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/painting/circle_border";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/rendering/object";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/rendering/view";
import * as lib21 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/widgets/drag_target";
import * as lib24 from "@dart2ts.packages/flutter/lib/src/rendering/custom_paint";

export enum MaterialType {
    canvas,
    card,
    circle,
    button,
    transparency
}

export namespace MaterialInkController {
    export type Constructors = 'MaterialInkController';
    export type Interface = Omit<MaterialInkController, Constructors>;
}
@DartClass
export class MaterialInkController {
    @AbstractProperty
    get color() : any{ throw 'abstract'}
    @AbstractProperty
    get vsync() : any{ throw 'abstract'}
    @Abstract
    addInkFeature(feature : InkFeature) : any{ throw 'abstract'}
    @Abstract
    markNeedsPaint() : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    MaterialInkController() {
    }
}

export namespace Material {
    export type Constructors = lib4.StatefulWidget.Constructors | 'Material';
    export type Interface = Omit<Material, Constructors>;
}
@DartClass
export class Material extends lib4.StatefulWidget {
    constructor(_namedArguments? : {key? : lib5.Key,type? : MaterialType,elevation? : double,color? : any,shadowColor? : any,textStyle? : lib6.TextStyle,borderRadius? : lib3.BorderRadiusGeometry,shape? : lib7.ShapeBorder,borderOnForeground? : boolean,clipBehavior? : any,animationDuration? : core.DartDuration,child? : lib4.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Material(_namedArguments? : {key? : lib5.Key,type? : MaterialType,elevation? : double,color? : any,shadowColor? : any,textStyle? : lib6.TextStyle,borderRadius? : lib3.BorderRadiusGeometry,shape? : lib7.ShapeBorder,borderOnForeground? : boolean,clipBehavior? : any,animationDuration? : core.DartDuration,child? : lib4.Widget}) {
        let {key,type,elevation,color,shadowColor,textStyle,borderRadius,shape,borderOnForeground,clipBehavior,animationDuration,child} = Object.assign({
            "type" : MaterialType.canvas,
            "elevation" : 0.0,
            "shadowColor" : new bare.createInstance(any,null,4278190080),
            "borderOnForeground" : true,
            "clipBehavior" : Clip.none,
            "animationDuration" : lib8.properties.kThemeChangeDuration}, _namedArguments );
        this.assert = assert;
        this.type = type;
        this.elevation = elevation;
        this.color = color;
        this.shadowColor = shadowColor;
        this.textStyle = textStyle;
        this.borderRadius = borderRadius;
        this.shape = shape;
        this.borderOnForeground = borderOnForeground;
        this.clipBehavior = clipBehavior;
        this.animationDuration = animationDuration;
        this.child = child;
    }
     : any;

     : any;

     : any;

     : any;

    [null](shape : any, : any) {
    }
     : any;

     : any;

    [null](identical : (type : any, : any) => any, : any) {
    }
    [null](borderRadius : any, : any) {
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    child : lib4.Widget;

    type : MaterialType;

    elevation : double;

    color : any;

    shadowColor : any;

    textStyle : lib6.TextStyle;

    shape : lib7.ShapeBorder;

    borderOnForeground : boolean;

    clipBehavior : any;

    animationDuration : core.DartDuration;

    borderRadius : lib3.BorderRadiusGeometry;

    static of(context : lib4.BuildContext) : MaterialInkController {
        let result : _RenderInkFeatures = context.ancestorRenderObjectOfType(new lib4.TypeMatcher<_RenderInkFeatures>());
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _MaterialState {
        return _MaterialState();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib9.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib9.EnumProperty('type',this.type));
        properties.add(lib9.DoubleProperty('elevation',this.elevation,{
            defaultValue : 0.0}));
        properties.add(lib9.DiagnosticsProperty('color',this.color,{
            defaultValue : null}));
        properties.add(lib9.DiagnosticsProperty('shadowColor',this.shadowColor,{
            defaultValue : new bare.createInstance(any,null,4278190080)}));
        ((_744_)=>(!!_744_)?_744_.debugFillProperties(properties,{
            prefix : 'textStyle.'}):null)(this.textStyle);
        properties.add(lib9.DiagnosticsProperty('shape',this.shape,{
            defaultValue : null}));
        properties.add(lib9.DiagnosticsProperty('borderOnForeground',this.borderOnForeground,{
            defaultValue : true}));
        properties.add(lib9.DiagnosticsProperty('borderRadius',this.borderRadius,{
            defaultValue : null}));
    }
    private static __$defaultSplashRadius : double;
    static get defaultSplashRadius() : double { 
        if (this.__$defaultSplashRadius===undefined) {
            this.__$defaultSplashRadius = 35.0;
        }
        return this.__$defaultSplashRadius;
    }

}

export namespace _MaterialState {
    export type Constructors = '_MaterialState';
    export type Interface = Omit<_MaterialState, Constructors>;
}
@DartClass
@With(any)
export class _MaterialState extends any implements any.Interface {
    _inkFeatureRenderer : lib4.GlobalKey<any>;

    _getBackgroundColor(context : lib4.BuildContext) : any {
        if (widget.color != null) return widget.color;
        switch (widget.type) {
            case MaterialType.canvas:
                return lib10.Theme.of(context).canvasColor;
            case MaterialType.card:
                return lib10.Theme.of(context).cardColor;
            default:
                return null;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib4.BuildContext) : lib4.Widget {
        let backgroundColor : any = this._getBackgroundColor(context);
        /* TODO (AssertStatementImpl) : assert (backgroundColor != null || widget.type == MaterialType.transparency); */;
        let contents : lib4.Widget = widget.child;
        if (contents != null) {
            contents = lib11.AnimatedDefaultTextStyle({
                style : (widget.textStyle || lib10.Theme.of(context).textTheme.body1),duration : widget.animationDuration,child : contents});
        }
        contents = lib12.NotificationListener({
            onNotification : (notification : lib12.LayoutChangedNotification) =>  {
                let renderer : _RenderInkFeatures = this._inkFeatureRenderer.currentContext.findRenderObject();
                renderer._didChangeLayout();
                return true;
            },child : _InkFeatures({
                key : this._inkFeatureRenderer,color : backgroundColor,child : contents,vsync : this})});
        if (op(Op.EQUALS,widget.type,MaterialType.canvas) && op(Op.EQUALS,widget.shape,null) && op(Op.EQUALS,widget.borderRadius,null)) {
            return lib11.AnimatedPhysicalModel({
                curve : lib13.Curves.fastOutSlowIn,duration : widget.animationDuration,shape : lib14.BoxShape.rectangle,clipBehavior : widget.clipBehavior,borderRadius : lib3.BorderRadius.zero,elevation : widget.elevation,color : backgroundColor,shadowColor : widget.shadowColor,animateColor : false,child : contents});
        }
        let shape : lib7.ShapeBorder = this._getShape();
        if (op(Op.EQUALS,widget.type,MaterialType.transparency)) {
            return _MaterialState._transparentInterior({
                context : context,shape : shape,clipBehavior : widget.clipBehavior,contents : contents});
        }
        return _MaterialInterior({
            curve : lib13.Curves.fastOutSlowIn,duration : widget.animationDuration,shape : shape,borderOnForeground : widget.borderOnForeground,clipBehavior : widget.clipBehavior,elevation : widget.elevation,color : backgroundColor,shadowColor : widget.shadowColor,child : contents});
    }
    static _transparentInterior(_namedArguments? : {context? : lib4.BuildContext,shape? : lib7.ShapeBorder,clipBehavior? : any,contents? : lib4.Widget}) : lib4.Widget {
        let {context,shape,clipBehavior,contents} = Object.assign({
        }, _namedArguments );
        let child : _ShapeBorderPaint = _ShapeBorderPaint({
            child : contents,shape : shape});
        if (op(Op.EQUALS,clipBehavior,Clip.none)) {
            return child;
        }
        return lib15.ClipPath({
            child : child,clipper : lib16.ShapeBorderClipper({
                shape : shape,textDirection : lib15.Directionality.of(context)}),clipBehavior : clipBehavior});
    }
    _getShape() : lib7.ShapeBorder {
        if (widget.shape != null) return widget.shape;
        if (widget.borderRadius != null) return lib17.RoundedRectangleBorder({
            borderRadius : widget.borderRadius});
        switch (widget.type) {
            case MaterialType.canvas:
            case MaterialType.transparency:
                return new lib17.RoundedRectangleBorder();
            case MaterialType.card:
            case MaterialType.button:
                return lib17.RoundedRectangleBorder({
                    borderRadius : (widget.borderRadius || properties.kMaterialEdges.get(widget.type))});
            case MaterialType.circle:
                return new lib18.CircleBorder();
        }
        return new lib17.RoundedRectangleBorder();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MaterialState() {
        this._inkFeatureRenderer = lib4.GlobalKey({
            debugLabel : 'ink renderer'});
    }
}

export namespace _RenderInkFeatures {
    export type Constructors = lib16.RenderProxyBox.Constructors | '_RenderInkFeatures';
    export type Interface = Omit<_RenderInkFeatures, Constructors>;
}
@DartClass
@Implements(MaterialInkController)
export class _RenderInkFeatures extends lib16.RenderProxyBox implements MaterialInkController.Interface {
    constructor(_namedArguments? : {child? : any,vsync? : any,color? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RenderInkFeatures(_namedArguments? : {child? : any,vsync? : any,color? : any}) {
        let {child,vsync,color} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.vsync = vsync;
        this.color = color;
    }
     : any;

     : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    vsync : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    color : any;

    _inkFeatures : core.DartList<InkFeature>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addInkFeature(feature : InkFeature) : any {
        /* TODO (AssertStatementImpl) : assert (!feature._debugDisposed); */;
        /* TODO (AssertStatementImpl) : assert (feature._controller == this); */;
        this._inkFeatures = ( this._inkFeatures ) || ( new core.DartList.literal<InkFeature>() );
        /* TODO (AssertStatementImpl) : assert (!_inkFeatures.contains(feature)); */;
        this._inkFeatures.add(feature);
        this.markNeedsPaint();
    }
    _removeFeature(feature : InkFeature) : any {
        /* TODO (AssertStatementImpl) : assert (_inkFeatures != null); */;
        this._inkFeatures.remove(feature);
        this.markNeedsPaint();
    }
    _didChangeLayout() : any {
        if (this._inkFeatures != null && this._inkFeatures.isNotEmpty) this.markNeedsPaint();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestSelf(position : any) : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib19.PaintingContext,offset : any) : any {
        if (this._inkFeatures != null && this._inkFeatures.isNotEmpty) {
            let canvas : any = context.canvas;
            canvas.save();
            canvas.translate(offset.dx,offset.dy);
            canvas.clipRect(op(Op.BITAND,Offset.zero,lib20.properties.size));
            for(let inkFeature of this._inkFeatures) inkFeature._paint(canvas);
            canvas.restore();
        }
        super.paint(context,offset);
    }
}

export namespace _InkFeatures {
    export type Constructors = lib4.SingleChildRenderObjectWidget.Constructors | '_InkFeatures';
    export type Interface = Omit<_InkFeatures, Constructors>;
}
@DartClass
export class _InkFeatures extends lib4.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib5.Key,color? : any,vsync? : any,child? : lib4.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _InkFeatures(_namedArguments? : {key? : lib5.Key,color? : any,vsync? : any,child? : lib4.Widget}) {
        let {key,color,vsync,child} = Object.assign({
        }, _namedArguments );
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
        this.color = color;
        this.vsync = vsync;
    }
    color : any;

    vsync : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib4.BuildContext) : _RenderInkFeatures {
        return _RenderInkFeatures({
            color : this.color,vsync : this.vsync});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib4.BuildContext,renderObject : _RenderInkFeatures) : any {
        renderObject.color = this.color;
        /* TODO (AssertStatementImpl) : assert (vsync == renderObject.vsync); */;
    }
}

export namespace InkFeature {
    export type Constructors = 'InkFeature';
    export type Interface = Omit<InkFeature, Constructors>;
}
@DartClass
export class InkFeature {
    constructor(_namedArguments? : {controller? : MaterialInkController,referenceBox? : any,onRemoved? : any}) {
    }
    @defaultConstructor
    InkFeature(_namedArguments? : {controller? : MaterialInkController,referenceBox? : any,onRemoved? : any}) {
        let {controller,referenceBox,onRemoved} = Object.assign({
        }, _namedArguments );
        this._controller = this.controller;
        this._debugDisposed = false;
        this.assert = assert;
        this.referenceBox = referenceBox;
        this.onRemoved = onRemoved;
    }
     : any;

     : any;

    _controller;

    get controller() : MaterialInkController {
        return this._controller;
    }
    _controller : _RenderInkFeatures;

    referenceBox : any;

    onRemoved : any;

    _debugDisposed : boolean;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        /* TODO (AssertStatementImpl) : assert (!_debugDisposed); */;
        /* TODO (AssertStatementImpl) : assert (() {_debugDisposed = true; return true;}()); */;
        this._controller._removeFeature(this);
        if (this.onRemoved != null) this.onRemoved();
    }
    _paint(canvas : any) : any {
        /* TODO (AssertStatementImpl) : assert (referenceBox.attached); */;
        /* TODO (AssertStatementImpl) : assert (!_debugDisposed); */;
        let descendants : core.DartList<lib19.RenderObject> = new core.DartList.literal<lib19.RenderObject>(this.referenceBox);
        let node : lib19.RenderObject = this.referenceBox;
        while (node != this._controller){
            node = node.parent;
            /* TODO (AssertStatementImpl) : assert (node != null); */;
            descendants.add(node);
        }
        let transform : lib21.Matrix4 = lib21.Matrix4.identity();
        /* TODO (AssertStatementImpl) : assert (descendants.length >= 2); */;
        for(let index : number = descendants.length - 1; index > 0; index -= 1)descendants[index].applyPaintTransform(descendants[index - 1],transform);
        this.paintFeature(canvas,transform);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    paintFeature(canvas : any,transform : lib21.Matrix4) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return lib9.describeIdentity(this);
    }
}

export namespace ShapeBorderTween {
    export type Constructors = lib22.Tween.Constructors | 'ShapeBorderTween';
    export type Interface = Omit<ShapeBorderTween, Constructors>;
}
@DartClass
export class ShapeBorderTween extends lib22.Tween<lib7.ShapeBorder> {
    constructor(_namedArguments? : {begin? : lib7.ShapeBorder,end? : lib7.ShapeBorder}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ShapeBorderTween(_namedArguments? : {begin? : lib7.ShapeBorder,end? : lib7.ShapeBorder}) {
        let {begin,end} = Object.assign({
        }, _namedArguments );
        super.Tween({
            begin : begin,end : end});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : lib7.ShapeBorder {
        return lib7.ShapeBorder.lerp(this.begin,lib23.end,t);
    }
}

export namespace _MaterialInterior {
    export type Constructors = lib11.ImplicitlyAnimatedWidget.Constructors | '_MaterialInterior';
    export type Interface = Omit<_MaterialInterior, Constructors>;
}
@DartClass
export class _MaterialInterior extends lib11.ImplicitlyAnimatedWidget {
    constructor(_namedArguments? : {key? : lib5.Key,child? : lib4.Widget,shape? : lib7.ShapeBorder,borderOnForeground? : boolean,clipBehavior? : any,elevation? : double,color? : any,shadowColor? : any,curve? : lib13.Curve,duration? : core.DartDuration}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MaterialInterior(_namedArguments? : {key? : lib5.Key,child? : lib4.Widget,shape? : lib7.ShapeBorder,borderOnForeground? : boolean,clipBehavior? : any,elevation? : double,color? : any,shadowColor? : any,curve? : lib13.Curve,duration? : core.DartDuration}) {
        let {key,child,shape,borderOnForeground,clipBehavior,elevation,color,shadowColor,curve,duration} = Object.assign({
            "borderOnForeground" : true,
            "clipBehavior" : Clip.none,
            "curve" : lib13.Curves.linear}, _namedArguments );
        this.assert = assert;
        this.child = child;
        this.shape = shape;
        this.borderOnForeground = borderOnForeground;
        this.clipBehavior = clipBehavior;
        this.elevation = elevation;
        this.color = color;
        this.shadowColor = shadowColor;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    key;
    curve;

    curve;
    duration;

     : any;

    child : lib4.Widget;

    shape : lib7.ShapeBorder;

    borderOnForeground : boolean;

    clipBehavior : any;

    elevation : double;

    color : any;

    shadowColor : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _MaterialInteriorState {
        return _MaterialInteriorState();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(description : lib9.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(description);
        description.add(lib9.DiagnosticsProperty('shape',this.shape));
        description.add(lib9.DoubleProperty('elevation',this.elevation));
        description.add(lib9.DiagnosticsProperty('color',this.color));
        description.add(lib9.DiagnosticsProperty('shadowColor',this.shadowColor));
    }
}

export namespace _MaterialInteriorState {
    export type Constructors = lib11.AnimatedWidgetBaseState.Constructors | '_MaterialInteriorState';
    export type Interface = Omit<_MaterialInteriorState, Constructors>;
}
@DartClass
export class _MaterialInteriorState extends lib11.AnimatedWidgetBaseState<_MaterialInterior> {
    _elevation : lib22.Tween<double>;

    _shadowColor : lib22.ColorTween;

    _border : ShapeBorderTween;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forEachTween(visitor : <T>(tween : lib22.Tween<any>,targetValue : any,constructor : <T>(targetValue : any) => lib22.Tween<any>) => lib22.Tween<any>) : any {
        this._elevation = visitor(this._elevation,widget.elevation,(value : any) =>  {
            return lib22.Tween({
                begin : value});
        });
        this._shadowColor = visitor(this._shadowColor,widget.shadowColor,(value : any) =>  {
            return lib22.ColorTween({
                begin : value});
        });
        this._border = visitor(this._border,widget.shape,(value : any) =>  {
            return ShapeBorderTween({
                begin : value});
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib4.BuildContext) : lib4.Widget {
        let shape : lib7.ShapeBorder = this._border.evaluate(this.animation);
        return lib15.PhysicalShape({
            child : _ShapeBorderPaint({
                child : widget.child,shape : shape,borderOnForeground : widget.borderOnForeground}),clipper : lib16.ShapeBorderClipper({
                shape : shape,textDirection : lib15.Directionality.of(context)}),clipBehavior : widget.clipBehavior,elevation : this._elevation.evaluate(this.animation),color : widget.color,shadowColor : this._shadowColor.evaluate(this.animation)});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MaterialInteriorState() {
    }
}

export namespace _ShapeBorderPaint {
    export type Constructors = lib4.StatelessWidget.Constructors | '_ShapeBorderPaint';
    export type Interface = Omit<_ShapeBorderPaint, Constructors>;
}
@DartClass
export class _ShapeBorderPaint extends lib4.StatelessWidget {
    constructor(_namedArguments? : {child? : lib4.Widget,shape? : lib7.ShapeBorder,borderOnForeground? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ShapeBorderPaint(_namedArguments? : {child? : lib4.Widget,shape? : lib7.ShapeBorder,borderOnForeground? : boolean}) {
        let {child,shape,borderOnForeground} = Object.assign({
            "borderOnForeground" : true}, _namedArguments );
        this.child = child;
        this.shape = shape;
        this.borderOnForeground = borderOnForeground;
    }
    child : lib4.Widget;

    shape : lib7.ShapeBorder;

    borderOnForeground : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib4.BuildContext) : lib4.Widget {
        return lib15.CustomPaint({
            child : this.child,painter : this.borderOnForeground ? null : _ShapeBorderPainter(this.shape,lib15.Directionality.of(context)),foregroundPainter : this.borderOnForeground ? _ShapeBorderPainter(this.shape,lib15.Directionality.of(context)) : null});
    }
}

export namespace _ShapeBorderPainter {
    export type Constructors = lib24.CustomPainter.Constructors | '_ShapeBorderPainter';
    export type Interface = Omit<_ShapeBorderPainter, Constructors>;
}
@DartClass
export class _ShapeBorderPainter extends lib24.CustomPainter {
    constructor(border : lib7.ShapeBorder,textDirection : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ShapeBorderPainter(border : lib7.ShapeBorder,textDirection : any) {
        this.border = border;
        this.textDirection = textDirection;
    }
    border : lib7.ShapeBorder;

    textDirection : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,size : any) : any {
        this.border.paint(canvas,op(Op.BITAND,Offset.zero,size),{
            textDirection : this.textDirection});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRepaint(oldDelegate : _ShapeBorderPainter) : boolean {
        return oldDelegate.border != this.border;
    }
}

export class properties {
    private static __$kMaterialEdges : core.DartMap<MaterialType,lib3.BorderRadius>;
    static get kMaterialEdges() : core.DartMap<MaterialType,lib3.BorderRadius> { 
        if (this.__$kMaterialEdges===undefined) {
            this.__$kMaterialEdges = new core.DartMap.literal([
                [MaterialType.canvas,null],
                [MaterialType.card,lib3.BorderRadius.circular(2.0)],
                [MaterialType.circle,null],
                [MaterialType.button,lib3.BorderRadius.circular(2.0)],
                [MaterialType.transparency,null]]);
        }
        return this.__$kMaterialEdges;
    }
    static set kMaterialEdges(__$value : core.DartMap<MaterialType,lib3.BorderRadius>)  { 
        this.__$kMaterialEdges = __$value;
    }

}
