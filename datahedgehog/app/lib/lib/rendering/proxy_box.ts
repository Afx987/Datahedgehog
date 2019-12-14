/** Library asset:datahedgehog_monitor/lib/lib/rendering/proxy_box.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./object";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";
import * as lib5 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as lib6 from "./box";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib9 from "./layer";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/foundation/change_notifier";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/painting/text_painter";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/painting/border_radius";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/semantics/semantics";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/painting/box_border";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/painting/decoration";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/painting/image_provider";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/painting/matrix_utils";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/painting/box_fit";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/gestures/events";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/gestures/mouse_tracking";
import * as lib24 from "./binding";
import * as lib25 from "@dart2ts.packages/flutter/lib/src/gestures/drag_details";
import * as lib26 from "@dart2ts.packages/flutter/lib/src/foundation/collections";
import * as lib27 from "@dart2ts.packages/flutter/lib/src/services/text_editing";

export var paint : (context : lib3.PaintingContext,offset : any) => any = (context : lib3.PaintingContext,offset : any) : any =>  {
    context.pushLayer(lib9.LeaderLayer({
        link : properties.link,offset : offset}),super.paint,Offset.zero);
};
export var RenderProxyBoxMixin : <T extends any>() => any = <T extends any>() : any =>  {
};
export var setupParentData : (child : lib3.RenderObject) => any = (child : lib3.RenderObject) : any =>  {
    if (isNot(child.parentData, lib3.ParentData)) child.parentData = lib3.ParentData();
};
export var computeMinIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    if (child != null) return child.getMinIntrinsicWidth(height);
    return 0.0;
};
export var computeMaxIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    if (child != null) return child.getMaxIntrinsicWidth(height);
    return 0.0;
};
export var computeMinIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    if (child != null) return child.getMinIntrinsicHeight(width);
    return 0.0;
};
export var computeMaxIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    if (child != null) return child.getMaxIntrinsicHeight(width);
    return 0.0;
};
export var computeDistanceToActualBaseline : (baseline : any) => double = (baseline : any) : double =>  {
    if (child != null) return child.getDistanceToActualBaseline(baseline);
    return super.computeDistanceToActualBaseline(baseline);
};
export var performLayout : () => any = () : any =>  {
    if (child != null) {
        child.layout(constraints,{
            parentUsesSize : true});
        size = child.size;
    }else {
        performResize();
    }
};
export var hitTestChildren : (result : lib4.HitTestResult,_namedArguments? : {position? : any}) => boolean = (result : lib4.HitTestResult,_namedArguments? : {position? : any}) : boolean =>  {
    let {position} = Object.assign({
    }, _namedArguments );
    return (((_838_)=>(!!_838_)?_838_.hitTest(result,{
        position : position}):null)(child) || false);
};
export var applyPaintTransform : (child : lib3.RenderObject,transform : lib5.Matrix4) => any = (child : lib3.RenderObject,transform : lib5.Matrix4) : any =>  {
};
export var paint : (context : lib3.PaintingContext,offset : any) => any = (context : lib3.PaintingContext,offset : any) : any =>  {
    if (child != null) context.paintChild(child,offset);
};
export var _getAlphaFromOpacity : (opacity : double) => number = (opacity : double) : number =>  {
    return new core.DartDouble((opacity * 255)).round();
};
export var attach : (owner : lib3.PipelineOwner) => any = (owner : lib3.PipelineOwner) : any =>  {
    super.attach(owner);
    properties._opacity.addListener(_updateOpacity);
    _updateOpacity();
};
export var detach : () => any = () : any =>  {
    properties._opacity.removeListener(_updateOpacity);
    super.detach();
};
export var _updateOpacity : () => any = () : any =>  {
    let oldAlpha : number = properties._alpha;
    properties._alpha = _getAlphaFromOpacity(new core.DartDouble(properties._opacity.value).clamp(0.0,1.0));
    if (oldAlpha != properties._alpha) {
        let didNeedCompositing : boolean = properties._currentlyNeedsCompositing;
        properties._currentlyNeedsCompositing = properties._alpha > 0 && properties._alpha < 255;
        if (child != null && didNeedCompositing != properties._currentlyNeedsCompositing) markNeedsCompositingBitsUpdate();
        markNeedsPaint();
        if (oldAlpha == 0 || properties._alpha == 0) markNeedsSemanticsUpdate();
    }
};
export var paint : (context : lib3.PaintingContext,offset : any) => any = (context : lib3.PaintingContext,offset : any) : any =>  {
    if (child != null) {
        if (properties._alpha == 0) return;
        if (properties._alpha == 255) {
            context.paintChild(child,offset);
            return;
        }
        /* TODO (AssertStatementImpl) : assert (needsCompositing); */;
        context.pushOpacity(offset,properties._alpha,super.paint);
    }
};
export var visitChildrenForSemantics : (visitor : (child : any) => any) => any = (visitor : (child : any) => any) : any =>  {
    if (child != null && (properties._alpha != 0 || properties.alwaysIncludeSemantics)) visitor(child);
};
export var debugFillProperties : (properties : lib7.DiagnosticPropertiesBuilder) => any = (properties : lib7.DiagnosticPropertiesBuilder) : any =>  {
    super.debugFillProperties(properties);
    properties.add(lib7.DiagnosticsProperty('opacity',properties.opacity));
    properties.add(lib7.FlagProperty('alwaysIncludeSemantics',{
        value : properties.alwaysIncludeSemantics,ifTrue : 'alwaysIncludeSemantics'}));
};
export var debugFillProperties : (properties : lib7.DiagnosticPropertiesBuilder) => any = (properties : lib7.DiagnosticPropertiesBuilder) : any =>  {
    super.debugFillProperties(properties);
    properties.add(lib7.DiagnosticsProperty('link',properties.link));
    properties.add(lib7.DiagnosticsProperty('showWhenUnlinked',properties.showWhenUnlinked));
    properties.add(lib7.DiagnosticsProperty('offset',properties.offset));
    properties.add(lib20.TransformProperty('current transform matrix',getCurrentTransform()));
};
export var applyPaintTransform : (child : any,transform : lib5.Matrix4) => any = (child : any,transform : lib5.Matrix4) : any =>  {
    transform.multiply(getCurrentTransform());
};
export var hitTest : (result : lib4.HitTestResult,_namedArguments? : {position? : any}) => boolean = (result : lib4.HitTestResult,_namedArguments? : {position? : any}) : boolean =>  {
    let {position} = Object.assign({
    }, _namedArguments );
    if (_clipper != null) {
        _updateClip();
        /* TODO (AssertStatementImpl) : assert (_clip != null); */;
        if (!_clip.contains(position)) return false;
    }
    return super.hitTest(result,{
        position : position});
};
export var paint : (context : lib3.PaintingContext,offset : any) => any = (context : lib3.PaintingContext,offset : any) : any =>  {
    if (child != null) {
        _updateClip();
        context.pushClipRRect(needsCompositing,offset,_clip.outerRect,_clip,super.paint,{
            clipBehavior : clipBehavior});
    }
};
export var debugPaintSize : (context : lib3.PaintingContext,offset : any) => any = (context : lib3.PaintingContext,offset : any) : any =>  {
    /* TODO (AssertStatementImpl) : assert (() {if (child != null) {super.debugPaintSize(context, offset); context.canvas.drawRRect(_clip.shift(offset), _debugPaint); _debugText.paint(context.canvas, offset + Offset(_clip.tlRadiusX, -_debugText.text.style.fontSize * 1.1));} return true;}()); */;
};
export var paint : (context : lib3.PaintingContext,offset : any) => any = (context : lib3.PaintingContext,offset : any) : any =>  {
    /* TODO (AssertStatementImpl) : assert (showWhenUnlinked != null); */;
    properties._layer = lib9.FollowerLayer({
        link : properties.link,showWhenUnlinked : properties.showWhenUnlinked,linkedOffset : this.offset,unlinkedOffset : offset});
    context.pushLayer(properties._layer,super.paint,Offset.zero,{
        childPaintBounds : Rect.fromLTRB(new core.DartDouble(double).negativeInfinity,new core.DartDouble(double).negativeInfinity,new core.DartDouble(double).infinity,new core.DartDouble(double).infinity)});
};
export var hitTestChildren : (result : lib4.HitTestResult,_namedArguments? : {position? : any}) => boolean = (result : lib4.HitTestResult,_namedArguments? : {position? : any}) : boolean =>  {
    let {position} = Object.assign({
    }, _namedArguments );
    let inverse : lib5.Matrix4 = lib5.Matrix4.tryInvert(getCurrentTransform());
    if (op(Op.EQUALS,inverse,null)) {
        return false;
    }
    position = lib20.MatrixUtils.transformPoint(inverse,position);
    return super.hitTestChildren(result,{
        position : position});
};
export var hitTest : (result : lib4.HitTestResult,_namedArguments? : {position? : any}) => boolean = (result : lib4.HitTestResult,_namedArguments? : {position? : any}) : boolean =>  {
    let {position} = Object.assign({
    }, _namedArguments );
    return hitTestChildren(result,{
        position : position});
};
export var getCurrentTransform : () => lib5.Matrix4 = () : lib5.Matrix4 =>  {
    return (((_849_)=>(!!_849_)?_849_.getLastTransform():null)(properties._layer) || lib5.Matrix4.identity());
};
export var paint : (context : lib3.PaintingContext,offset : any) => any = (context : lib3.PaintingContext,offset : any) : any =>  {
    if (child != null) {
        let transform : lib5.Matrix4 = properties._effectiveTransform;
        let childOffset : any = lib20.MatrixUtils.getAsTranslation(transform);
        if (op(Op.EQUALS,childOffset,null)) context.pushTransform(needsCompositing,offset,transform,super.paint);else super.paint(context,op(Op.PLUS,offset,childOffset));
    }
};
export var setIdentity : () => any = () : any =>  {
    properties._transform.setIdentity();
    markNeedsPaint();
    markNeedsSemanticsUpdate();
};
export var rotateX : (radians : double) => any = (radians : double) : any =>  {
    properties._transform.rotateX(radians);
    markNeedsPaint();
    markNeedsSemanticsUpdate();
};
export var rotateY : (radians : double) => any = (radians : double) : any =>  {
    properties._transform.rotateY(radians);
    markNeedsPaint();
    markNeedsSemanticsUpdate();
};
export var rotateZ : (radians : double) => any = (radians : double) : any =>  {
    properties._transform.rotateZ(radians);
    markNeedsPaint();
    markNeedsSemanticsUpdate();
};
export var translate : (x : double,y? : double,z? : double) => any = (x : double,y? : double,z? : double) : any =>  {
    y = y || 0.0;
    z = z || 0.0;
    properties._transform.translate(x,y,z);
    markNeedsPaint();
    markNeedsSemanticsUpdate();
};
export var scale : (x : double,y? : double,z? : double) => any = (x : double,y? : double,z? : double) : any =>  {
    properties._transform.scale(x,y,z);
    markNeedsPaint();
    markNeedsSemanticsUpdate();
};
export var hitTest : (result : lib4.HitTestResult,_namedArguments? : {position? : any}) => boolean = (result : lib4.HitTestResult,_namedArguments? : {position? : any}) : boolean =>  {
    let {position} = Object.assign({
    }, _namedArguments );
    return hitTestChildren(result,{
        position : position});
};
export var hitTestChildren : (result : lib4.HitTestResult,_namedArguments? : {position? : any}) => boolean = (result : lib4.HitTestResult,_namedArguments? : {position? : any}) : boolean =>  {
    let {position} = Object.assign({
    }, _namedArguments );
    if (properties.transformHitTests) {
        let inverse : lib5.Matrix4 = lib5.Matrix4.tryInvert(properties._effectiveTransform);
        if (op(Op.EQUALS,inverse,null)) {
            return false;
        }
        position = lib20.MatrixUtils.transformPoint(inverse,position);
    }
    return super.hitTestChildren(result,{
        position : position});
};
export var applyPaintTransform : (child : any,transform : lib5.Matrix4) => any = (child : any,transform : lib5.Matrix4) : any =>  {
    transform.multiply(properties._effectiveTransform);
};
export var debugFillProperties : (properties : lib7.DiagnosticPropertiesBuilder) => any = (properties : lib7.DiagnosticPropertiesBuilder) : any =>  {
    super.debugFillProperties(properties);
    properties.add(lib20.TransformProperty('transform matrix',properties._transform));
    properties.add(lib7.DiagnosticsProperty('origin',properties.origin));
    properties.add(lib7.DiagnosticsProperty('alignment',properties.alignment));
    properties.add(lib7.EnumProperty('textDirection',properties.textDirection,{
        defaultValue : null}));
    properties.add(lib7.DiagnosticsProperty('transformHitTests',properties.transformHitTests));
};
export var debugFillProperties : (properties : lib7.DiagnosticPropertiesBuilder) => any = (properties : lib7.DiagnosticPropertiesBuilder) : any =>  {
    super.debugFillProperties(properties);
    properties.add(lib7.DiagnosticsProperty('link',properties.link));
};
export var detach : () => any = () : any =>  {
    properties._layer = null;
    super.detach();
};
export enum DecorationPosition {
    background,
    foreground
}

export namespace RenderProxyBox {
    export type Constructors = 'RenderProxyBox';
    export type Interface = Omit<RenderProxyBox, Constructors>;
}
@DartClass
@With(any,any)
export class RenderProxyBox extends any implements any.Interface,any.Interface {
    constructor(child? : any) {
    }
    @defaultConstructor
    RenderProxyBox(child? : any) {
        this.child = child;
    }
}

export namespace CustomClipper {
    export type Constructors = 'CustomClipper';
    export type Interface<T> = Omit<CustomClipper<T>, Constructors>;
}
@DartClass
export class CustomClipper<T> {
    constructor(_namedArguments? : {reclip? : lib10.Listenable}) {
    }
    @defaultConstructor
    CustomClipper(_namedArguments? : {reclip? : lib10.Listenable}) {
        let {reclip} = Object.assign({
        }, _namedArguments );
        this._reclip = reclip;
    }
    _reclip : lib10.Listenable;

    @Abstract
    getClip(size : any) : T{ throw 'abstract'}
    getApproximateClipRect(size : any) : any {
        return op(Op.BITAND,Offset.zero,size);
    }
    @Abstract
    shouldReclip(oldClipper : CustomClipper<T>) : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}`;
    }
}

export namespace RenderRepaintBoundary {
    export type Constructors = RenderProxyBox.Constructors | 'RenderRepaintBoundary';
    export type Interface = Omit<RenderRepaintBoundary, Constructors>;
}
@DartClass
export class RenderRepaintBoundary extends RenderProxyBox {
    constructor(_namedArguments? : {child? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderRepaintBoundary(_namedArguments? : {child? : any}) {
        let {child} = Object.assign({
        }, _namedArguments );
        this._debugSymmetricPaintCount = 0;
        this._debugAsymmetricPaintCount = 0;
        super.RenderProxyBox(child);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isRepaintBoundary() : boolean {
        return true;
    }
    toImage(_namedArguments? : {pixelRatio? : double}) : async.Future<any> {
        let {pixelRatio} = Object.assign({
            "pixelRatio" : 1.0}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (!debugNeedsPaint); */;
        return layer.toImage(op(Op.BITAND,Offset.zero,size),{
            pixelRatio : pixelRatio});
    }
    get debugSymmetricPaintCount() : number {
        return this._debugSymmetricPaintCount;
    }
    _debugSymmetricPaintCount : number;

    get debugAsymmetricPaintCount() : number {
        return this._debugAsymmetricPaintCount;
    }
    _debugAsymmetricPaintCount : number;

    debugResetMetrics() : any {
        /* TODO (AssertStatementImpl) : assert (() {_debugSymmetricPaintCount = 0; _debugAsymmetricPaintCount = 0; return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugRegisterRepaintBoundaryPaint(_namedArguments? : {includedParent? : boolean,includedChild? : boolean}) : any {
        let {includedParent,includedChild} = Object.assign({
            "includedParent" : true,
            "includedChild" : false}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (() {if (includedParent && includedChild) _debugSymmetricPaintCount += 1; else _debugAsymmetricPaintCount += 1; return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        let inReleaseMode : boolean = true;
        /* TODO (AssertStatementImpl) : assert (() {inReleaseMode = false; if (debugSymmetricPaintCount + debugAsymmetricPaintCount == 0) {properties.add(MessageProperty('usefulness ratio', 'no metrics collected yet (never painted)'));} else {final double fraction = debugAsymmetricPaintCount / (debugSymmetricPaintCount + debugAsymmetricPaintCount); String diagnosis; if (debugSymmetricPaintCount + debugAsymmetricPaintCount < 5) {diagnosis = 'insufficient data to draw conclusion (less than five repaints)';} else if (fraction > 0.9) {diagnosis = 'this is an outstandingly useful repaint boundary and should definitely be kept';} else if (fraction > 0.5) {diagnosis = 'this is a useful repaint boundary and should be kept';} else if (fraction > 0.30) {diagnosis = 'this repaint boundary is probably useful, but maybe it would be more useful in tandem with adding more repaint boundaries elsewhere';} else if (fraction > 0.1) {diagnosis = 'this repaint boundary does sometimes show value, though currently not that often';} else if (debugAsymmetricPaintCount == 0) {diagnosis = 'this repaint boundary is astoundingly ineffectual and should be removed';} else {diagnosis = 'this repaint boundary is not very effective and should probably be removed';} properties.add(PercentProperty('metrics', fraction, unit: 'useful', tooltip: '$debugSymmetricPaintCount bad vs $debugAsymmetricPaintCount good')); properties.add(MessageProperty('diagnosis', diagnosis));} return true;}()); */;
        if (inReleaseMode) properties.add(lib7.DiagnosticsNode.message('(run in checked mode to collect repaint boundary statistics)'));
    }
}

export namespace RenderIgnorePointer {
    export type Constructors = RenderProxyBox.Constructors | 'RenderIgnorePointer';
    export type Interface = Omit<RenderIgnorePointer, Constructors>;
}
@DartClass
export class RenderIgnorePointer extends RenderProxyBox {
    constructor(_namedArguments? : {child? : any,ignoring? : boolean,ignoringSemantics? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderIgnorePointer(_namedArguments? : {child? : any,ignoring? : boolean,ignoringSemantics? : boolean}) {
        let {child,ignoring,ignoringSemantics} = Object.assign({
            "ignoring" : true}, _namedArguments );
        this._ignoring = ignoring;
        this._ignoringSemantics = ignoringSemantics;
        super.RenderProxyBox(child);
        /* TODO (AssertStatementImpl) : assert (_ignoring != null); */;
    }
    get ignoring() : boolean {
        return this._ignoring;
    }
    _ignoring : boolean;

    set ignoring(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (value == this._ignoring) return;
        this._ignoring = value;
        if (this.ignoringSemantics == null) markNeedsSemanticsUpdate();
    }
    get ignoringSemantics() : boolean {
        return this._ignoringSemantics;
    }
    _ignoringSemantics : boolean;

    set ignoringSemantics(value : boolean) {
        if (value == this._ignoringSemantics) return;
        let oldEffectiveValue : boolean = this._effectiveIgnoringSemantics;
        this._ignoringSemantics = value;
        if (oldEffectiveValue != this._effectiveIgnoringSemantics) markNeedsSemanticsUpdate();
    }
    get _effectiveIgnoringSemantics() : boolean {
        return this.ignoringSemantics == null ? this.ignoring : this.ignoringSemantics;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTest(result : lib4.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        return this.ignoring ? false : super.hitTest(result,{
            position : position});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildrenForSemantics(visitor : (child : any) => any) : any {
        if (child != null && !this._effectiveIgnoringSemantics) visitor(child);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib7.DiagnosticsProperty('ignoring',this.ignoring));
        properties.add(lib7.DiagnosticsProperty('ignoringSemantics',this._effectiveIgnoringSemantics,{
            description : this.ignoringSemantics == null ? `implicitly ${this._effectiveIgnoringSemantics}` : null}));
    }
}

export namespace RenderOffstage {
    export type Constructors = RenderProxyBox.Constructors | 'RenderOffstage';
    export type Interface = Omit<RenderOffstage, Constructors>;
}
@DartClass
export class RenderOffstage extends RenderProxyBox {
    constructor(_namedArguments? : {offstage? : boolean,child? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderOffstage(_namedArguments? : {offstage? : boolean,child? : any}) {
        let {offstage,child} = Object.assign({
            "offstage" : true}, _namedArguments );
        this._offstage = this.offstage;
        this.assert = assert;
    }
     : any;

    _offstage;
    super;

     : any;

    get offstage() : boolean {
        return this._offstage;
    }
    _offstage : boolean;

    set offstage(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (value == this._offstage) return;
        this._offstage = value;
        markNeedsLayoutForSizedByParentChange();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicWidth(height : double) : double {
        if (this.offstage) return 0.0;
        return super.computeMinIntrinsicWidth(height);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicWidth(height : double) : double {
        if (this.offstage) return 0.0;
        return super.computeMaxIntrinsicWidth(height);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicHeight(width : double) : double {
        if (this.offstage) return 0.0;
        return super.computeMinIntrinsicHeight(width);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicHeight(width : double) : double {
        if (this.offstage) return 0.0;
        return super.computeMaxIntrinsicHeight(width);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeDistanceToActualBaseline(baseline : any) : double {
        if (this.offstage) return null;
        return super.computeDistanceToActualBaseline(baseline);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sizedByParent() : boolean {
        return this.offstage;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performResize() : any {
        /* TODO (AssertStatementImpl) : assert (offstage); */;
        size = constraints.smallest;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        if (this.offstage) {
            ((_848_)=>(!!_848_)?_848_.layout(constraints):null)(child);
        }else {
            super.performLayout();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTest(result : lib4.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        return !this.offstage && super.hitTest(result,{
            position : position});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib3.PaintingContext,offset : any) : any {
        if (this.offstage) return;
        super.paint(context,offset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildrenForSemantics(visitor : (child : any) => any) : any {
        if (this.offstage) return;
        super.visitChildrenForSemantics(visitor);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib7.DiagnosticsProperty('offstage',this.offstage));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugDescribeChildren() : core.DartList<lib7.DiagnosticsNode> {
        if (op(Op.EQUALS,child,null)) return new core.DartList.literal<lib7.DiagnosticsNode>();
        return new core.DartList.literal<lib7.DiagnosticsNode>(child.toDiagnosticsNode({
            name : 'child',style : this.offstage ? lib7.DiagnosticsTreeStyle.offstage : lib7.DiagnosticsTreeStyle.sparse}));
    }
}

export namespace RenderAbsorbPointer {
    export type Constructors = RenderProxyBox.Constructors | 'RenderAbsorbPointer';
    export type Interface = Omit<RenderAbsorbPointer, Constructors>;
}
@DartClass
export class RenderAbsorbPointer extends RenderProxyBox {
    constructor(_namedArguments? : {child? : any,absorbing? : boolean,ignoringSemantics? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderAbsorbPointer(_namedArguments? : {child? : any,absorbing? : boolean,ignoringSemantics? : boolean}) {
        let {child,absorbing,ignoringSemantics} = Object.assign({
            "absorbing" : true}, _namedArguments );
        this._absorbing = this.absorbing;
        this._ignoringSemantics = this.ignoringSemantics;
        this.assert = assert;
    }
     : any;

    _absorbing;
    _ignoringSemantics;
    super;

     : any;

    get absorbing() : boolean {
        return this._absorbing;
    }
    _absorbing : boolean;

    set absorbing(value : boolean) {
        if (op(Op.EQUALS,this._absorbing,value)) return;
        this._absorbing = value;
        if (this.ignoringSemantics == null) markNeedsSemanticsUpdate();
    }
    get ignoringSemantics() : boolean {
        return this._ignoringSemantics;
    }
    _ignoringSemantics : boolean;

    set ignoringSemantics(value : boolean) {
        if (value == this._ignoringSemantics) return;
        let oldEffectiveValue : boolean = this._effectiveIgnoringSemantics;
        this._ignoringSemantics = value;
        if (oldEffectiveValue != this._effectiveIgnoringSemantics) markNeedsSemanticsUpdate();
    }
    get _effectiveIgnoringSemantics() : boolean {
        return this.ignoringSemantics == null ? this.absorbing : this.ignoringSemantics;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTest(result : lib4.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        return this.absorbing ? size.contains(position) : super.hitTest(result,{
            position : position});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildrenForSemantics(visitor : (child : any) => any) : any {
        if (child != null && !this._effectiveIgnoringSemantics) visitor(child);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib7.DiagnosticsProperty('absorbing',this.absorbing));
        properties.add(lib7.DiagnosticsProperty('ignoringSemantics',this._effectiveIgnoringSemantics,{
            description : this.ignoringSemantics == null ? `implicitly ${this._effectiveIgnoringSemantics}` : null}));
    }
}

export namespace RenderFractionalTranslation {
    export type Constructors = RenderProxyBox.Constructors | 'RenderFractionalTranslation';
    export type Interface = Omit<RenderFractionalTranslation, Constructors>;
}
@DartClass
export class RenderFractionalTranslation extends RenderProxyBox {
    constructor(_namedArguments? : {translation? : any,transformHitTests? : boolean,child? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderFractionalTranslation(_namedArguments? : {translation? : any,transformHitTests? : boolean,child? : any}) {
        let {translation,transformHitTests,child} = Object.assign({
            "transformHitTests" : true}, _namedArguments );
        this._translation = this.translation;
        this.assert = assert;
        this.transformHitTests = transformHitTests;
    }
     : any;

    _translation;
    super;

     : any;

    get translation() : any {
        return this._translation;
    }
    _translation : any;

    set translation(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._translation,value)) return;
        this._translation = value;
        markNeedsPaint();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTest(result : lib4.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        return this.hitTestChildren(result,{
            position : position});
    }
    transformHitTests : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestChildren(result : lib4.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (!debugNeedsLayout); */;
        if (this.transformHitTests) {
            position = Offset(op(Op.MINUS,position.dx,op(Op.TIMES,this.translation.dx,size.width)),op(Op.MINUS,position.dy,op(Op.TIMES,this.translation.dy,size.height)));
        }
        return super.hitTestChildren(result,{
            position : position});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib3.PaintingContext,offset : any) : any {
        /* TODO (AssertStatementImpl) : assert (!debugNeedsLayout); */;
        if (child != null) {
            super.paint(context,Offset(op(Op.PLUS,offset.dx,op(Op.TIMES,this.translation.dx,size.width)),op(Op.PLUS,offset.dy,op(Op.TIMES,this.translation.dy,size.height))));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyPaintTransform(child : any,transform : lib5.Matrix4) : any {
        transform.translate(op(Op.TIMES,this.translation.dx,size.width),op(Op.TIMES,this.translation.dy,size.height));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib7.DiagnosticsProperty('translation',this.translation));
        properties.add(lib7.DiagnosticsProperty('transformHitTests',this.transformHitTests));
    }
}

export namespace RenderSemanticsGestureHandler {
    export type Constructors = RenderProxyBox.Constructors | 'RenderSemanticsGestureHandler';
    export type Interface = Omit<RenderSemanticsGestureHandler, Constructors>;
}
@DartClass
export class RenderSemanticsGestureHandler extends RenderProxyBox {
    constructor(_namedArguments? : {child? : any,onTap? : () => any,onLongPress? : () => void,onHorizontalDragUpdate? : (details : lib25.DragUpdateDetails) => any,onVerticalDragUpdate? : (details : lib25.DragUpdateDetails) => any,scrollFactor? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderSemanticsGestureHandler(_namedArguments? : {child? : any,onTap? : () => any,onLongPress? : () => void,onHorizontalDragUpdate? : (details : lib25.DragUpdateDetails) => any,onVerticalDragUpdate? : (details : lib25.DragUpdateDetails) => any,scrollFactor? : double}) {
        let {child,onTap,onLongPress,onHorizontalDragUpdate,onVerticalDragUpdate,scrollFactor} = Object.assign({
            "scrollFactor" : 0.8}, _namedArguments );
        this._onTap = this.onTap;
        this._onLongPress = this.onLongPress;
        this._onHorizontalDragUpdate = this.onHorizontalDragUpdate;
        this._onVerticalDragUpdate = this.onVerticalDragUpdate;
        this.assert = assert;
        this.scrollFactor = scrollFactor;
    }
     : any;

    _onTap;
    _onLongPress;
    _onHorizontalDragUpdate;
    _onVerticalDragUpdate;
    super;

     : any;

    get validActions() : core.DartSet<any> {
        return this._validActions;
    }
    _validActions : core.DartSet<any>;

    set validActions(value : core.DartSet<any>) {
        if (lib26.setEquals(value,this._validActions)) return;
        this._validActions = value;
        markNeedsSemanticsUpdate();
    }
    get onTap() : () => any {
        return this._onTap;
    }
    _onTap : () => any;

    set onTap(value : () => any) {
        if (op(Op.EQUALS,this._onTap,value)) return;
        let hadHandler : boolean = this._onTap != null;
        this._onTap = value;
        if ((value != null) != hadHandler) markNeedsSemanticsUpdate();
    }
    get onLongPress() : () => void {
        return this._onLongPress;
    }
    _onLongPress : () => void;

    set onLongPress(value : () => void) {
        if (op(Op.EQUALS,this._onLongPress,value)) return;
        let hadHandler : boolean = this._onLongPress != null;
        this._onLongPress = value;
        if ((value != null) != hadHandler) markNeedsSemanticsUpdate();
    }
    get onHorizontalDragUpdate() : (details : lib25.DragUpdateDetails) => any {
        return this._onHorizontalDragUpdate;
    }
    _onHorizontalDragUpdate : (details : lib25.DragUpdateDetails) => any;

    set onHorizontalDragUpdate(value : (details : lib25.DragUpdateDetails) => any) {
        if (op(Op.EQUALS,this._onHorizontalDragUpdate,value)) return;
        let hadHandler : boolean = this._onHorizontalDragUpdate != null;
        this._onHorizontalDragUpdate = value;
        if ((value != null) != hadHandler) markNeedsSemanticsUpdate();
    }
    get onVerticalDragUpdate() : (details : lib25.DragUpdateDetails) => any {
        return this._onVerticalDragUpdate;
    }
    _onVerticalDragUpdate : (details : lib25.DragUpdateDetails) => any;

    set onVerticalDragUpdate(value : (details : lib25.DragUpdateDetails) => any) {
        if (op(Op.EQUALS,this._onVerticalDragUpdate,value)) return;
        let hadHandler : boolean = this._onVerticalDragUpdate != null;
        this._onVerticalDragUpdate = value;
        if ((value != null) != hadHandler) markNeedsSemanticsUpdate();
    }
    scrollFactor : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describeSemanticsConfiguration(config : lib15.SemanticsConfiguration) : any {
        super.describeSemanticsConfiguration(config);
        if (this.onTap != null && this._isValidAction(SemanticsAction.tap)) config.onTap = this.onTap;
        if (this.onLongPress != null && this._isValidAction(SemanticsAction.longPress)) config.onLongPress = this.onLongPress;
        if (this.onHorizontalDragUpdate != null) {
            if (this._isValidAction(SemanticsAction.scrollRight)) config.onScrollRight = this._performSemanticScrollRight.bind(this);
            if (this._isValidAction(SemanticsAction.scrollLeft)) config.onScrollLeft = this._performSemanticScrollLeft.bind(this);
        }
        if (this.onVerticalDragUpdate != null) {
            if (this._isValidAction(SemanticsAction.scrollUp)) config.onScrollUp = this._performSemanticScrollUp.bind(this);
            if (this._isValidAction(SemanticsAction.scrollDown)) config.onScrollDown = this._performSemanticScrollDown.bind(this);
        }
    }
    _isValidAction(action : any) : boolean {
        return op(Op.EQUALS,this.validActions,null) || this.validActions.contains(action);
    }
    _performSemanticScrollLeft() : any {
        if (this.onHorizontalDragUpdate != null) {
            let primaryDelta : double = op(Op.TIMES,size.width,-this.scrollFactor);
            this.onHorizontalDragUpdate(lib25.DragUpdateDetails({
                delta : Offset(primaryDelta,0.0),primaryDelta : primaryDelta,globalPosition : localToGlobal(size.center(Offset.zero))}));
        }
    }
    _performSemanticScrollRight() : any {
        if (this.onHorizontalDragUpdate != null) {
            let primaryDelta : double = op(Op.TIMES,size.width,this.scrollFactor);
            this.onHorizontalDragUpdate(lib25.DragUpdateDetails({
                delta : Offset(primaryDelta,0.0),primaryDelta : primaryDelta,globalPosition : localToGlobal(size.center(Offset.zero))}));
        }
    }
    _performSemanticScrollUp() : any {
        if (this.onVerticalDragUpdate != null) {
            let primaryDelta : double = op(Op.TIMES,size.height,-this.scrollFactor);
            this.onVerticalDragUpdate(lib25.DragUpdateDetails({
                delta : Offset(0.0,primaryDelta),primaryDelta : primaryDelta,globalPosition : localToGlobal(size.center(Offset.zero))}));
        }
    }
    _performSemanticScrollDown() : any {
        if (this.onVerticalDragUpdate != null) {
            let primaryDelta : double = op(Op.TIMES,size.height,this.scrollFactor);
            this.onVerticalDragUpdate(lib25.DragUpdateDetails({
                delta : Offset(0.0,primaryDelta),primaryDelta : primaryDelta,globalPosition : localToGlobal(size.center(Offset.zero))}));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        let gestures : core.DartList<string> = new core.DartList.literal<string>();
        if (this.onTap != null) gestures.add('tap');
        if (this.onLongPress != null) gestures.add('long press');
        if (this.onHorizontalDragUpdate != null) gestures.add('horizontal scroll');
        if (this.onVerticalDragUpdate != null) gestures.add('vertical scroll');
        if (gestures.isEmpty) gestures.add('<none>');
        properties.add(lib7.IterableProperty('gestures',gestures));
    }
}

export namespace RenderSemanticsAnnotations {
    export type Constructors = RenderProxyBox.Constructors | 'RenderSemanticsAnnotations';
    export type Interface = Omit<RenderSemanticsAnnotations, Constructors>;
}
@DartClass
export class RenderSemanticsAnnotations extends RenderProxyBox {
    constructor(_namedArguments? : {child? : any,container? : boolean,explicitChildNodes? : boolean,excludeSemantics? : boolean,enabled? : boolean,checked? : boolean,toggled? : boolean,selected? : boolean,button? : boolean,header? : boolean,textField? : boolean,focused? : boolean,inMutuallyExclusiveGroup? : boolean,obscured? : boolean,scopesRoute? : boolean,namesRoute? : boolean,hidden? : boolean,image? : boolean,liveRegion? : boolean,label? : string,value? : string,increasedValue? : string,decreasedValue? : string,hint? : string,hintOverrides? : lib15.SemanticsHintOverrides,textDirection? : any,sortKey? : lib15.SemanticsSortKey,onTap? : any,onDismiss? : any,onLongPress? : any,onScrollLeft? : any,onScrollRight? : any,onScrollUp? : any,onScrollDown? : any,onIncrease? : any,onDecrease? : any,onCopy? : any,onCut? : any,onPaste? : any,onMoveCursorForwardByCharacter? : (extendSelection : boolean) => any,onMoveCursorBackwardByCharacter? : (extendSelection : boolean) => any,onMoveCursorForwardByWord? : (extendSelection : boolean) => any,onMoveCursorBackwardByWord? : (extendSelection : boolean) => any,onSetSelection? : (selection : lib27.TextSelection) => any,onDidGainAccessibilityFocus? : any,onDidLoseAccessibilityFocus? : any,customSemanticsActions? : core.DartMap<lib15.CustomSemanticsAction,any>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderSemanticsAnnotations(_namedArguments? : {child? : any,container? : boolean,explicitChildNodes? : boolean,excludeSemantics? : boolean,enabled? : boolean,checked? : boolean,toggled? : boolean,selected? : boolean,button? : boolean,header? : boolean,textField? : boolean,focused? : boolean,inMutuallyExclusiveGroup? : boolean,obscured? : boolean,scopesRoute? : boolean,namesRoute? : boolean,hidden? : boolean,image? : boolean,liveRegion? : boolean,label? : string,value? : string,increasedValue? : string,decreasedValue? : string,hint? : string,hintOverrides? : lib15.SemanticsHintOverrides,textDirection? : any,sortKey? : lib15.SemanticsSortKey,onTap? : any,onDismiss? : any,onLongPress? : any,onScrollLeft? : any,onScrollRight? : any,onScrollUp? : any,onScrollDown? : any,onIncrease? : any,onDecrease? : any,onCopy? : any,onCut? : any,onPaste? : any,onMoveCursorForwardByCharacter? : (extendSelection : boolean) => any,onMoveCursorBackwardByCharacter? : (extendSelection : boolean) => any,onMoveCursorForwardByWord? : (extendSelection : boolean) => any,onMoveCursorBackwardByWord? : (extendSelection : boolean) => any,onSetSelection? : (selection : lib27.TextSelection) => any,onDidGainAccessibilityFocus? : any,onDidLoseAccessibilityFocus? : any,customSemanticsActions? : core.DartMap<lib15.CustomSemanticsAction,any>}) {
        let {child,container,explicitChildNodes,excludeSemantics,enabled,checked,toggled,selected,button,header,textField,focused,inMutuallyExclusiveGroup,obscured,scopesRoute,namesRoute,hidden,image,liveRegion,label,value,increasedValue,decreasedValue,hint,hintOverrides,textDirection,sortKey,onTap,onDismiss,onLongPress,onScrollLeft,onScrollRight,onScrollUp,onScrollDown,onIncrease,onDecrease,onCopy,onCut,onPaste,onMoveCursorForwardByCharacter,onMoveCursorBackwardByCharacter,onMoveCursorForwardByWord,onMoveCursorBackwardByWord,onSetSelection,onDidGainAccessibilityFocus,onDidLoseAccessibilityFocus,customSemanticsActions} = Object.assign({
            "container" : false,
            "excludeSemantics" : false}, _namedArguments );
        this._container = this.container;
        this._explicitChildNodes = this.explicitChildNodes;
        this._excludeSemantics = this.excludeSemantics;
        this._enabled = this.enabled;
        this._checked = this.checked;
        this._toggled = this.toggled;
        this._selected = this.selected;
        this._button = this.button;
        this._header = this.header;
        this._textField = this.textField;
        this._focused = this.focused;
        this._inMutuallyExclusiveGroup = this.inMutuallyExclusiveGroup;
        this._obscured = this.obscured;
        this._scopesRoute = this.scopesRoute;
        this._namesRoute = this.namesRoute;
        this._liveRegion = this.liveRegion;
        this._hidden = this.hidden;
        this._image = this.image;
        this._onDismiss = this.onDismiss;
        this._label = this.label;
        this._value = this.value;
        this._increasedValue = this.increasedValue;
        this._decreasedValue = this.decreasedValue;
        this._hint = this.hint;
        this._hintOverrides = this.hintOverrides;
        this._textDirection = this.textDirection;
        this._sortKey = this.sortKey;
        this._onTap = this.onTap;
        this._onLongPress = this.onLongPress;
        this._onScrollLeft = this.onScrollLeft;
        this._onScrollRight = this.onScrollRight;
        this._onScrollUp = this.onScrollUp;
        this._onScrollDown = this.onScrollDown;
        this._onIncrease = this.onIncrease;
        this._onDecrease = this.onDecrease;
        this._onCopy = this.onCopy;
        this._onCut = this.onCut;
        this._onPaste = this.onPaste;
        this._onMoveCursorForwardByCharacter = this.onMoveCursorForwardByCharacter;
        this._onMoveCursorBackwardByCharacter = this.onMoveCursorBackwardByCharacter;
        this._onMoveCursorForwardByWord = this.onMoveCursorForwardByWord;
        this._onMoveCursorBackwardByWord = this.onMoveCursorBackwardByWord;
        this._onSetSelection = this.onSetSelection;
        this._onDidGainAccessibilityFocus = this.onDidGainAccessibilityFocus;
        this._onDidLoseAccessibilityFocus = this.onDidLoseAccessibilityFocus;
        this._customSemanticsActions = this.customSemanticsActions;
        this.assert = assert;
    }
     : any;

    _container;
    _explicitChildNodes;
    _excludeSemantics;
    _enabled;
    _checked;
    _toggled;
    _selected;
    _button;
    _header;
    _textField;
    _focused;
    _inMutuallyExclusiveGroup;
    _obscured;
    _scopesRoute;
    _namesRoute;
    _liveRegion;
    _hidden;
    _image;
    _onDismiss;
    _label;
    _value;
    _increasedValue;
    _decreasedValue;
    _hint;
    _hintOverrides;
    _textDirection;
    _sortKey;
    _onTap;
    _onLongPress;
    _onScrollLeft;
    _onScrollRight;
    _onScrollUp;
    _onScrollDown;
    _onIncrease;
    _onDecrease;
    _onCopy;
    _onCut;
    _onPaste;
    _onMoveCursorForwardByCharacter;
    _onMoveCursorBackwardByCharacter;
    _onMoveCursorForwardByWord;
    _onMoveCursorBackwardByWord;
    _onSetSelection;
    _onDidGainAccessibilityFocus;
    _onDidLoseAccessibilityFocus;
    _customSemanticsActions;
    super;

     : any;

    get container() : boolean {
        return this._container;
    }
    _container : boolean;

    set container(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (this.container == value) return;
        this._container = value;
        markNeedsSemanticsUpdate();
    }
    get explicitChildNodes() : boolean {
        return this._explicitChildNodes;
    }
    _explicitChildNodes : boolean;

    set explicitChildNodes(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._explicitChildNodes,value)) return;
        this._explicitChildNodes = value;
        markNeedsSemanticsUpdate();
    }
    get excludeSemantics() : boolean {
        return this._excludeSemantics;
    }
    _excludeSemantics : boolean;

    set excludeSemantics(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._excludeSemantics,value)) return;
        this._excludeSemantics = value;
        markNeedsSemanticsUpdate();
    }
    get checked() : boolean {
        return this._checked;
    }
    _checked : boolean;

    set checked(value : boolean) {
        if (this.checked == value) return;
        this._checked = value;
        markNeedsSemanticsUpdate();
    }
    get enabled() : boolean {
        return this._enabled;
    }
    _enabled : boolean;

    set enabled(value : boolean) {
        if (this.enabled == value) return;
        this._enabled = value;
        markNeedsSemanticsUpdate();
    }
    get selected() : boolean {
        return this._selected;
    }
    _selected : boolean;

    set selected(value : boolean) {
        if (this.selected == value) return;
        this._selected = value;
        markNeedsSemanticsUpdate();
    }
    get button() : boolean {
        return this._button;
    }
    _button : boolean;

    set button(value : boolean) {
        if (this.button == value) return;
        this._button = value;
        markNeedsSemanticsUpdate();
    }
    get header() : boolean {
        return this._header;
    }
    _header : boolean;

    set header(value : boolean) {
        if (this.header == value) return;
        this._header = value;
        markNeedsSemanticsUpdate();
    }
    get textField() : boolean {
        return this._textField;
    }
    _textField : boolean;

    set textField(value : boolean) {
        if (this.textField == value) return;
        this._textField = value;
        markNeedsSemanticsUpdate();
    }
    get focused() : boolean {
        return this._focused;
    }
    _focused : boolean;

    set focused(value : boolean) {
        if (this.focused == value) return;
        this._focused = value;
        markNeedsSemanticsUpdate();
    }
    get inMutuallyExclusiveGroup() : boolean {
        return this._inMutuallyExclusiveGroup;
    }
    _inMutuallyExclusiveGroup : boolean;

    set inMutuallyExclusiveGroup(value : boolean) {
        if (this.inMutuallyExclusiveGroup == value) return;
        this._inMutuallyExclusiveGroup = value;
        markNeedsSemanticsUpdate();
    }
    get obscured() : boolean {
        return this._obscured;
    }
    _obscured : boolean;

    set obscured(value : boolean) {
        if (this.obscured == value) return;
        this._obscured = value;
        markNeedsSemanticsUpdate();
    }
    get scopesRoute() : boolean {
        return this._scopesRoute;
    }
    _scopesRoute : boolean;

    set scopesRoute(value : boolean) {
        if (this.scopesRoute == value) return;
        this._scopesRoute = value;
        markNeedsSemanticsUpdate();
    }
    get namesRoute() : boolean {
        return this._namesRoute;
    }
    _namesRoute : boolean;

    set namesRoute(value : boolean) {
        if (op(Op.EQUALS,this._namesRoute,value)) return;
        this._namesRoute = value;
        markNeedsSemanticsUpdate();
    }
    get hidden() : boolean {
        return this._hidden;
    }
    _hidden : boolean;

    set hidden(value : boolean) {
        if (this.hidden == value) return;
        this._hidden = value;
        markNeedsSemanticsUpdate();
    }
    get image() : boolean {
        return this._image;
    }
    _image : boolean;

    set image(value : boolean) {
        if (op(Op.EQUALS,this._image,value)) return;
        this._image = value;
    }
    get liveRegion() : boolean {
        return this._liveRegion;
    }
    _liveRegion : boolean;

    set liveRegion(value : boolean) {
        if (op(Op.EQUALS,this._liveRegion,value)) return;
        this._liveRegion = value;
        markNeedsSemanticsUpdate();
    }
    get toggled() : boolean {
        return this._toggled;
    }
    _toggled : boolean;

    set toggled(value : boolean) {
        if (op(Op.EQUALS,this._toggled,value)) return;
        this._toggled = value;
        markNeedsSemanticsUpdate();
    }
    get label() : string {
        return this._label;
    }
    _label : string;

    set label(value : string) {
        if (op(Op.EQUALS,this._label,value)) return;
        this._label = value;
        markNeedsSemanticsUpdate();
    }
    get value() : string {
        return this._value;
    }
    _value : string;

    set value(value : string) {
        if (op(Op.EQUALS,this._value,value)) return;
        this._value = value;
        markNeedsSemanticsUpdate();
    }
    get increasedValue() : string {
        return this._increasedValue;
    }
    _increasedValue : string;

    set increasedValue(value : string) {
        if (op(Op.EQUALS,this._increasedValue,value)) return;
        this._increasedValue = value;
        markNeedsSemanticsUpdate();
    }
    get decreasedValue() : string {
        return this._decreasedValue;
    }
    _decreasedValue : string;

    set decreasedValue(value : string) {
        if (op(Op.EQUALS,this._decreasedValue,value)) return;
        this._decreasedValue = value;
        markNeedsSemanticsUpdate();
    }
    get hint() : string {
        return this._hint;
    }
    _hint : string;

    set hint(value : string) {
        if (op(Op.EQUALS,this._hint,value)) return;
        this._hint = value;
        markNeedsSemanticsUpdate();
    }
    get hintOverrides() : lib15.SemanticsHintOverrides {
        return this._hintOverrides;
    }
    _hintOverrides : lib15.SemanticsHintOverrides;

    set hintOverrides(value : lib15.SemanticsHintOverrides) {
        if (op(Op.EQUALS,this._hintOverrides,value)) return;
        this._hintOverrides = value;
        markNeedsSemanticsUpdate();
    }
    get textDirection() : any {
        return this._textDirection;
    }
    _textDirection : any;

    set textDirection(value : any) {
        if (op(Op.EQUALS,this.textDirection,value)) return;
        this._textDirection = value;
        markNeedsSemanticsUpdate();
    }
    get sortKey() : lib15.SemanticsSortKey {
        return this._sortKey;
    }
    _sortKey : lib15.SemanticsSortKey;

    set sortKey(value : lib15.SemanticsSortKey) {
        if (op(Op.EQUALS,this.sortKey,value)) return;
        this._sortKey = value;
        markNeedsSemanticsUpdate();
    }
    get onTap() : any {
        return this._onTap;
    }
    _onTap : any;

    set onTap(handler : any) {
        if (op(Op.EQUALS,this._onTap,handler)) return;
        let hadValue : boolean = this._onTap != null;
        this._onTap = handler;
        if ((handler != null) == hadValue) markNeedsSemanticsUpdate();
    }
    get onDismiss() : any {
        return this._onDismiss;
    }
    _onDismiss : any;

    set onDismiss(handler : any) {
        if (op(Op.EQUALS,this._onDismiss,handler)) return;
        let hadValue : boolean = this._onDismiss != null;
        this._onDismiss = handler;
        if ((handler != null) == hadValue) markNeedsSemanticsUpdate();
    }
    get onLongPress() : any {
        return this._onLongPress;
    }
    _onLongPress : any;

    set onLongPress(handler : any) {
        if (op(Op.EQUALS,this._onLongPress,handler)) return;
        let hadValue : boolean = this._onLongPress != null;
        this._onLongPress = handler;
        if ((handler != null) != hadValue) markNeedsSemanticsUpdate();
    }
    get onScrollLeft() : any {
        return this._onScrollLeft;
    }
    _onScrollLeft : any;

    set onScrollLeft(handler : any) {
        if (op(Op.EQUALS,this._onScrollLeft,handler)) return;
        let hadValue : boolean = this._onScrollLeft != null;
        this._onScrollLeft = handler;
        if ((handler != null) != hadValue) markNeedsSemanticsUpdate();
    }
    get onScrollRight() : any {
        return this._onScrollRight;
    }
    _onScrollRight : any;

    set onScrollRight(handler : any) {
        if (op(Op.EQUALS,this._onScrollRight,handler)) return;
        let hadValue : boolean = this._onScrollRight != null;
        this._onScrollRight = handler;
        if ((handler != null) != hadValue) markNeedsSemanticsUpdate();
    }
    get onScrollUp() : any {
        return this._onScrollUp;
    }
    _onScrollUp : any;

    set onScrollUp(handler : any) {
        if (op(Op.EQUALS,this._onScrollUp,handler)) return;
        let hadValue : boolean = this._onScrollUp != null;
        this._onScrollUp = handler;
        if ((handler != null) != hadValue) markNeedsSemanticsUpdate();
    }
    get onScrollDown() : any {
        return this._onScrollDown;
    }
    _onScrollDown : any;

    set onScrollDown(handler : any) {
        if (op(Op.EQUALS,this._onScrollDown,handler)) return;
        let hadValue : boolean = this._onScrollDown != null;
        this._onScrollDown = handler;
        if ((handler != null) != hadValue) markNeedsSemanticsUpdate();
    }
    get onIncrease() : any {
        return this._onIncrease;
    }
    _onIncrease : any;

    set onIncrease(handler : any) {
        if (op(Op.EQUALS,this._onIncrease,handler)) return;
        let hadValue : boolean = this._onIncrease != null;
        this._onIncrease = handler;
        if ((handler != null) != hadValue) markNeedsSemanticsUpdate();
    }
    get onDecrease() : any {
        return this._onDecrease;
    }
    _onDecrease : any;

    set onDecrease(handler : any) {
        if (op(Op.EQUALS,this._onDecrease,handler)) return;
        let hadValue : boolean = this._onDecrease != null;
        this._onDecrease = handler;
        if ((handler != null) != hadValue) markNeedsSemanticsUpdate();
    }
    get onCopy() : any {
        return this._onCopy;
    }
    _onCopy : any;

    set onCopy(handler : any) {
        if (op(Op.EQUALS,this._onCopy,handler)) return;
        let hadValue : boolean = this._onCopy != null;
        this._onCopy = handler;
        if ((handler != null) != hadValue) markNeedsSemanticsUpdate();
    }
    get onCut() : any {
        return this._onCut;
    }
    _onCut : any;

    set onCut(handler : any) {
        if (op(Op.EQUALS,this._onCut,handler)) return;
        let hadValue : boolean = this._onCut != null;
        this._onCut = handler;
        if ((handler != null) != hadValue) markNeedsSemanticsUpdate();
    }
    get onPaste() : any {
        return this._onPaste;
    }
    _onPaste : any;

    set onPaste(handler : any) {
        if (op(Op.EQUALS,this._onPaste,handler)) return;
        let hadValue : boolean = this._onPaste != null;
        this._onPaste = handler;
        if ((handler != null) != hadValue) markNeedsSemanticsUpdate();
    }
    get onMoveCursorForwardByCharacter() : (extendSelection : boolean) => any {
        return this._onMoveCursorForwardByCharacter;
    }
    _onMoveCursorForwardByCharacter : (extendSelection : boolean) => any;

    set onMoveCursorForwardByCharacter(handler : (extendSelection : boolean) => any) {
        if (op(Op.EQUALS,this._onMoveCursorForwardByCharacter,handler)) return;
        let hadValue : boolean = this._onMoveCursorForwardByCharacter != null;
        this._onMoveCursorForwardByCharacter = handler;
        if ((handler != null) != hadValue) markNeedsSemanticsUpdate();
    }
    get onMoveCursorBackwardByCharacter() : (extendSelection : boolean) => any {
        return this._onMoveCursorBackwardByCharacter;
    }
    _onMoveCursorBackwardByCharacter : (extendSelection : boolean) => any;

    set onMoveCursorBackwardByCharacter(handler : (extendSelection : boolean) => any) {
        if (op(Op.EQUALS,this._onMoveCursorBackwardByCharacter,handler)) return;
        let hadValue : boolean = this._onMoveCursorBackwardByCharacter != null;
        this._onMoveCursorBackwardByCharacter = handler;
        if ((handler != null) != hadValue) markNeedsSemanticsUpdate();
    }
    get onMoveCursorForwardByWord() : (extendSelection : boolean) => any {
        return this._onMoveCursorForwardByWord;
    }
    _onMoveCursorForwardByWord : (extendSelection : boolean) => any;

    set onMoveCursorForwardByWord(handler : (extendSelection : boolean) => any) {
        if (op(Op.EQUALS,this._onMoveCursorForwardByWord,handler)) return;
        let hadValue : boolean = this._onMoveCursorForwardByWord != null;
        this._onMoveCursorForwardByWord = handler;
        if ((handler != null) != hadValue) markNeedsSemanticsUpdate();
    }
    get onMoveCursorBackwardByWord() : (extendSelection : boolean) => any {
        return this._onMoveCursorBackwardByWord;
    }
    _onMoveCursorBackwardByWord : (extendSelection : boolean) => any;

    set onMoveCursorBackwardByWord(handler : (extendSelection : boolean) => any) {
        if (op(Op.EQUALS,this._onMoveCursorBackwardByWord,handler)) return;
        let hadValue : boolean = this._onMoveCursorBackwardByWord != null;
        this._onMoveCursorBackwardByWord = handler;
        if ((handler != null) != hadValue) markNeedsSemanticsUpdate();
    }
    get onSetSelection() : (selection : lib27.TextSelection) => any {
        return this._onSetSelection;
    }
    _onSetSelection : (selection : lib27.TextSelection) => any;

    set onSetSelection(handler : (selection : lib27.TextSelection) => any) {
        if (op(Op.EQUALS,this._onSetSelection,handler)) return;
        let hadValue : boolean = this._onSetSelection != null;
        this._onSetSelection = handler;
        if ((handler != null) != hadValue) markNeedsSemanticsUpdate();
    }
    get onDidGainAccessibilityFocus() : any {
        return this._onDidGainAccessibilityFocus;
    }
    _onDidGainAccessibilityFocus : any;

    set onDidGainAccessibilityFocus(handler : any) {
        if (op(Op.EQUALS,this._onDidGainAccessibilityFocus,handler)) return;
        let hadValue : boolean = this._onDidGainAccessibilityFocus != null;
        this._onDidGainAccessibilityFocus = handler;
        if ((handler != null) != hadValue) markNeedsSemanticsUpdate();
    }
    get onDidLoseAccessibilityFocus() : any {
        return this._onDidLoseAccessibilityFocus;
    }
    _onDidLoseAccessibilityFocus : any;

    set onDidLoseAccessibilityFocus(handler : any) {
        if (op(Op.EQUALS,this._onDidLoseAccessibilityFocus,handler)) return;
        let hadValue : boolean = this._onDidLoseAccessibilityFocus != null;
        this._onDidLoseAccessibilityFocus = handler;
        if ((handler != null) != hadValue) markNeedsSemanticsUpdate();
    }
    get customSemanticsActions() : core.DartMap<lib15.CustomSemanticsAction,any> {
        return this._customSemanticsActions;
    }
    _customSemanticsActions : core.DartMap<lib15.CustomSemanticsAction,any>;

    set customSemanticsActions(value : core.DartMap<lib15.CustomSemanticsAction,any>) {
        if (op(Op.EQUALS,this._customSemanticsActions,value)) return;
        this._customSemanticsActions = value;
        markNeedsSemanticsUpdate();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildrenForSemantics(visitor : (child : any) => any) : any {
        if (this.excludeSemantics) return;
        super.visitChildrenForSemantics(visitor);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describeSemanticsConfiguration(config : lib15.SemanticsConfiguration) : any {
        super.describeSemanticsConfiguration(config);
        config.isSemanticBoundary = this.container;
        config.explicitChildNodes = this.explicitChildNodes;
        /* TODO (AssertStatementImpl) : assert ((scopesRoute == true && explicitChildNodes == true) || scopesRoute != true, 'explicitChildNodes must be set to true if scopes route is true'); */;
        /* TODO (AssertStatementImpl) : assert (!(toggled == true && checked == true), 'A semantics node cannot be toggled and checked at the same time'); */;
        if (this.enabled != null) config.isEnabled = this.enabled;
        if (this.checked != null) config.isChecked = this.checked;
        if (this.toggled != null) config.isToggled = this.toggled;
        if (this.selected != null) config.isSelected = this.selected;
        if (this.button != null) config.isButton = this.button;
        if (this.header != null) config.isHeader = this.header;
        if (this.textField != null) config.isTextField = this.textField;
        if (this.focused != null) config.isFocused = this.focused;
        if (this.inMutuallyExclusiveGroup != null) config.isInMutuallyExclusiveGroup = this.inMutuallyExclusiveGroup;
        if (this.obscured != null) config.isObscured = this.obscured;
        if (this.hidden != null) config.isHidden = this.hidden;
        if (this.image != null) config.isImage = this.image;
        if (this.label != null) config.label = this.label;
        if (this.value != null) config.value = this.value;
        if (this.increasedValue != null) config.increasedValue = this.increasedValue;
        if (this.decreasedValue != null) config.decreasedValue = this.decreasedValue;
        if (this.hint != null) config.hint = this.hint;
        if (this.hintOverrides != null && this.hintOverrides.isNotEmpty) config.hintOverrides = this.hintOverrides;
        if (this.scopesRoute != null) config.scopesRoute = this.scopesRoute;
        if (this.namesRoute != null) config.namesRoute = this.namesRoute;
        if (this.liveRegion != null) config.liveRegion = this.liveRegion;
        if (this.textDirection != null) config.textDirection = this.textDirection;
        if (this.sortKey != null) config.sortKey = this.sortKey;
        if (this.onTap != null) config.onTap = this._performTap.bind(this);
        if (this.onLongPress != null) config.onLongPress = this._performLongPress.bind(this);
        if (this.onDismiss != null) config.onDismiss = this._performDismiss.bind(this);
        if (this.onScrollLeft != null) config.onScrollLeft = this._performScrollLeft.bind(this);
        if (this.onScrollRight != null) config.onScrollRight = this._performScrollRight.bind(this);
        if (this.onScrollUp != null) config.onScrollUp = this._performScrollUp.bind(this);
        if (this.onScrollDown != null) config.onScrollDown = this._performScrollDown.bind(this);
        if (this.onIncrease != null) config.onIncrease = this._performIncrease.bind(this);
        if (this.onDecrease != null) config.onDecrease = this._performDecrease.bind(this);
        if (this.onCopy != null) config.onCopy = this._performCopy.bind(this);
        if (this.onCut != null) config.onCut = this._performCut.bind(this);
        if (this.onPaste != null) config.onPaste = this._performPaste.bind(this);
        if (this.onMoveCursorForwardByCharacter != null) config.onMoveCursorForwardByCharacter = this._performMoveCursorForwardByCharacter.bind(this);
        if (this.onMoveCursorBackwardByCharacter != null) config.onMoveCursorBackwardByCharacter = this._performMoveCursorBackwardByCharacter.bind(this);
        if (this.onMoveCursorForwardByWord != null) config.onMoveCursorForwardByWord = this._performMoveCursorForwardByWord.bind(this);
        if (this.onMoveCursorBackwardByWord != null) config.onMoveCursorBackwardByWord = this._performMoveCursorBackwardByWord.bind(this);
        if (this.onSetSelection != null) config.onSetSelection = this._performSetSelection.bind(this);
        if (this.onDidGainAccessibilityFocus != null) config.onDidGainAccessibilityFocus = this._performDidGainAccessibilityFocus.bind(this);
        if (this.onDidLoseAccessibilityFocus != null) config.onDidLoseAccessibilityFocus = this._performDidLoseAccessibilityFocus.bind(this);
        if (this.customSemanticsActions != null) config.customSemanticsActions = this._customSemanticsActions;
    }
    _performTap() : any {
        if (this.onTap != null) this.onTap();
    }
    _performLongPress() : any {
        if (this.onLongPress != null) this.onLongPress();
    }
    _performDismiss() : any {
        if (this.onDismiss != null) this.onDismiss();
    }
    _performScrollLeft() : any {
        if (this.onScrollLeft != null) this.onScrollLeft();
    }
    _performScrollRight() : any {
        if (this.onScrollRight != null) this.onScrollRight();
    }
    _performScrollUp() : any {
        if (this.onScrollUp != null) this.onScrollUp();
    }
    _performScrollDown() : any {
        if (this.onScrollDown != null) this.onScrollDown();
    }
    _performIncrease() : any {
        if (this.onIncrease != null) this.onIncrease();
    }
    _performDecrease() : any {
        if (this.onDecrease != null) this.onDecrease();
    }
    _performCopy() : any {
        if (this.onCopy != null) this.onCopy();
    }
    _performCut() : any {
        if (this.onCut != null) this.onCut();
    }
    _performPaste() : any {
        if (this.onPaste != null) this.onPaste();
    }
    _performMoveCursorForwardByCharacter(extendSelection : boolean) : any {
        if (this.onMoveCursorForwardByCharacter != null) this.onMoveCursorForwardByCharacter(extendSelection);
    }
    _performMoveCursorBackwardByCharacter(extendSelection : boolean) : any {
        if (this.onMoveCursorBackwardByCharacter != null) this.onMoveCursorBackwardByCharacter(extendSelection);
    }
    _performMoveCursorForwardByWord(extendSelection : boolean) : any {
        if (this.onMoveCursorForwardByWord != null) this.onMoveCursorForwardByWord(extendSelection);
    }
    _performMoveCursorBackwardByWord(extendSelection : boolean) : any {
        if (this.onMoveCursorBackwardByWord != null) this.onMoveCursorBackwardByWord(extendSelection);
    }
    _performSetSelection(selection : lib27.TextSelection) : any {
        if (this.onSetSelection != null) this.onSetSelection(selection);
    }
    _performDidGainAccessibilityFocus() : any {
        if (this.onDidGainAccessibilityFocus != null) this.onDidGainAccessibilityFocus();
    }
    _performDidLoseAccessibilityFocus() : any {
        if (this.onDidLoseAccessibilityFocus != null) this.onDidLoseAccessibilityFocus();
    }
}

export namespace RenderBlockSemantics {
    export type Constructors = RenderProxyBox.Constructors | 'RenderBlockSemantics';
    export type Interface = Omit<RenderBlockSemantics, Constructors>;
}
@DartClass
export class RenderBlockSemantics extends RenderProxyBox {
    constructor(_namedArguments? : {child? : any,blocking? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderBlockSemantics(_namedArguments? : {child? : any,blocking? : boolean}) {
        let {child,blocking} = Object.assign({
            "blocking" : true}, _namedArguments );
        this._blocking = blocking;
        super.RenderProxyBox(child);
    }
    get blocking() : boolean {
        return this._blocking;
    }
    _blocking : boolean;

    set blocking(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (value == this._blocking) return;
        this._blocking = value;
        markNeedsSemanticsUpdate();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describeSemanticsConfiguration(config : lib15.SemanticsConfiguration) : any {
        super.describeSemanticsConfiguration(config);
        config.isBlockingSemanticsOfPreviouslyPaintedNodes = this.blocking;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib7.DiagnosticsProperty('blocking',this.blocking));
    }
}

export namespace RenderMergeSemantics {
    export type Constructors = RenderProxyBox.Constructors | 'RenderMergeSemantics';
    export type Interface = Omit<RenderMergeSemantics, Constructors>;
}
@DartClass
export class RenderMergeSemantics extends RenderProxyBox {
    constructor(_namedArguments? : {child? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderMergeSemantics(_namedArguments? : {child? : any}) {
        let {child} = Object.assign({
        }, _namedArguments );
        super.RenderProxyBox(child);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describeSemanticsConfiguration(config : lib15.SemanticsConfiguration) : any {
        super.describeSemanticsConfiguration(config);
        ((_) : lib15.SemanticsConfiguration =>  {
            {
                _.isSemanticBoundary = true;
                _.isMergingSemanticsOfDescendants = true;
                return _;
            }
        })(config);
    }
}

export namespace RenderExcludeSemantics {
    export type Constructors = RenderProxyBox.Constructors | 'RenderExcludeSemantics';
    export type Interface = Omit<RenderExcludeSemantics, Constructors>;
}
@DartClass
export class RenderExcludeSemantics extends RenderProxyBox {
    constructor(_namedArguments? : {child? : any,excluding? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderExcludeSemantics(_namedArguments? : {child? : any,excluding? : boolean}) {
        let {child,excluding} = Object.assign({
            "excluding" : true}, _namedArguments );
        this._excluding = excluding;
        super.RenderProxyBox(child);
        /* TODO (AssertStatementImpl) : assert (_excluding != null); */;
    }
    get excluding() : boolean {
        return this._excluding;
    }
    _excluding : boolean;

    set excluding(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (value == this._excluding) return;
        this._excluding = value;
        markNeedsSemanticsUpdate();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildrenForSemantics(visitor : (child : any) => any) : any {
        if (this.excluding) return;
        super.visitChildrenForSemantics(visitor);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib7.DiagnosticsProperty('excluding',this.excluding));
    }
}

export namespace RenderIndexedSemantics {
    export type Constructors = RenderProxyBox.Constructors | 'RenderIndexedSemantics';
    export type Interface = Omit<RenderIndexedSemantics, Constructors>;
}
@DartClass
export class RenderIndexedSemantics extends RenderProxyBox {
    constructor(_namedArguments? : {child? : any,index? : number}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderIndexedSemantics(_namedArguments? : {child? : any,index? : number}) {
        let {child,index} = Object.assign({
        }, _namedArguments );
        this._index = this.index;
        this.assert = assert;
    }
     : any;

    _index;
    super;

     : any;

    get index() : number {
        return this._index;
    }
    _index : number;

    set index(value : number) {
        if (value == this.index) return;
        this._index = value;
        markNeedsSemanticsUpdate();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describeSemanticsConfiguration(config : lib15.SemanticsConfiguration) : any {
        super.describeSemanticsConfiguration(config);
        config.isSemanticBoundary = true;
        config.indexInParent = this.index;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib7.DiagnosticsProperty('index',this.index));
    }
}

export namespace RenderLeaderLayer {
    export type Constructors = RenderProxyBox.Constructors | 'RenderLeaderLayer';
    export type Interface = Omit<RenderLeaderLayer, Constructors>;
}
@DartClass
export class RenderLeaderLayer extends RenderProxyBox {
    constructor(_namedArguments? : {link? : lib9.LayerLink,child? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderLeaderLayer(_namedArguments? : {link? : lib9.LayerLink,child? : any}) {
        let {link,child} = Object.assign({
        }, _namedArguments );
        this.link = this.link;
        this.assert = assert;
    }
     : any;

     : any;

    link;

}

export namespace RenderFittedBox {
    export type Constructors = RenderProxyBox.Constructors | 'RenderFittedBox';
    export type Interface = Omit<RenderFittedBox, Constructors>;
}
@DartClass
export class RenderFittedBox extends RenderProxyBox {
    constructor(_namedArguments? : {fit? : lib21.BoxFit,alignment? : lib19.AlignmentGeometry,textDirection? : any,child? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderFittedBox(_namedArguments? : {fit? : lib21.BoxFit,alignment? : lib19.AlignmentGeometry,textDirection? : any,child? : any}) {
        let {fit,alignment,textDirection,child} = Object.assign({
            "fit" : lib21.BoxFit.contain,
            "alignment" : lib19.Alignment.center}, _namedArguments );
        this._fit = this.fit;
        this._alignment = this.alignment;
        this._textDirection = this.textDirection;
        this.assert = assert;
    }
     : any;

     : any;

    _fit;
    _alignment;
    _textDirection;
    super;

     : any;

    _resolvedAlignment : lib19.Alignment;

    _resolve() : any {
        if (this._resolvedAlignment != null) return;
        this._resolvedAlignment = this.alignment.resolve(this.textDirection);
    }
    _markNeedResolution() : any {
        this._resolvedAlignment = null;
        markNeedsPaint();
    }
    get fit() : lib21.BoxFit {
        return this._fit;
    }
    _fit : lib21.BoxFit;

    set fit(value : lib21.BoxFit) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._fit,value)) return;
        this._fit = value;
        this._clearPaintData();
        markNeedsPaint();
    }
    get alignment() : lib19.AlignmentGeometry {
        return this._alignment;
    }
    _alignment : lib19.AlignmentGeometry;

    set alignment(value : lib19.AlignmentGeometry) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._alignment,value)) return;
        this._alignment = value;
        this._clearPaintData();
        this._markNeedResolution();
    }
    get textDirection() : any {
        return this._textDirection;
    }
    _textDirection : any;

    set textDirection(value : any) {
        if (op(Op.EQUALS,this._textDirection,value)) return;
        this._textDirection = value;
        this._clearPaintData();
        this._markNeedResolution();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        if (child != null) {
            child.layout(new lib6.BoxConstraints(),{
                parentUsesSize : true});
            size = constraints.constrainSizeAndAttemptToPreserveAspectRatio(child.size);
            this._clearPaintData();
        }else {
            size = constraints.smallest;
        }
    }
    _hasVisualOverflow : boolean;

    _transform : lib5.Matrix4;

    _clearPaintData() : any {
        this._hasVisualOverflow = null;
        this._transform = null;
    }
    _updatePaintData() : any {
        if (this._transform != null) return;
        if (op(Op.EQUALS,child,null)) {
            this._hasVisualOverflow = false;
            this._transform = lib5.Matrix4.identity();
        }else {
            this._resolve();
            let childSize : any = child.size;
            let sizes : lib21.FittedSizes = lib21.applyBoxFit(this._fit,childSize,size);
            let scaleX : double = op(Op.DIVIDE,sizes.destination.width,sizes.source.width);
            let scaleY : double = op(Op.DIVIDE,sizes.destination.height,sizes.source.height);
            let sourceRect : any = this._resolvedAlignment.inscribe(sizes.source,op(Op.BITAND,Offset.zero,childSize));
            let destinationRect : any = this._resolvedAlignment.inscribe(sizes.destination,op(Op.BITAND,Offset.zero,size));
            this._hasVisualOverflow = op(Op.LT,sourceRect.width,childSize.width) || op(Op.LT,sourceRect.height,childSize.height);
            this._transform = ((_) : any =>  {
                {
                    scale(scaleX,scaleY,1.0);
                    translate(op(Op.NEG,sourceRect.left),op(Op.NEG,sourceRect.top));
                    return _;
                }
            })(lib5.Matrix4.translationValues(destinationRect.left,destinationRect.top,0.0));
        }
    }
    _paintChildWithTransform(context : lib3.PaintingContext,offset : any) : any {
        let childOffset : any = lib20.MatrixUtils.getAsTranslation(this._transform);
        if (op(Op.EQUALS,childOffset,null)) context.pushTransform(needsCompositing,offset,this._transform,super.paint);else super.paint(context,op(Op.PLUS,offset,childOffset));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib3.PaintingContext,offset : any) : any {
        if (size.isEmpty) return;
        this._updatePaintData();
        if (child != null) {
            if (this._hasVisualOverflow) context.pushClipRect(needsCompositing,offset,op(Op.BITAND,Offset.zero,size),this._paintChildWithTransform.bind(this));else this._paintChildWithTransform(context,offset);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestChildren(result : lib4.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        if (size.isEmpty) return false;
        this._updatePaintData();
        let inverse : lib5.Matrix4 = lib5.Matrix4.tryInvert(this._transform);
        if (op(Op.EQUALS,inverse,null)) {
            return false;
        }
        position = lib20.MatrixUtils.transformPoint(inverse,position);
        return super.hitTestChildren(result,{
            position : position});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyPaintTransform(child : any,transform : lib5.Matrix4) : any {
        if (size.isEmpty) {
            transform.setZero();
        }else {
            this._updatePaintData();
            transform.multiply(this._transform);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib7.EnumProperty('fit',this.fit));
        properties.add(lib7.DiagnosticsProperty('alignment',this.alignment));
        properties.add(lib7.EnumProperty('textDirection',this.textDirection,{
            defaultValue : null}));
    }
}

export namespace RenderAnnotatedRegion {
    export type Constructors = RenderProxyBox.Constructors | 'RenderAnnotatedRegion';
    export type Interface<T> = Omit<RenderAnnotatedRegion<T>, Constructors>;
}
@DartClass
export class RenderAnnotatedRegion<T> extends RenderProxyBox {
    constructor(_namedArguments? : {value? : T,sized? : boolean,child? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderAnnotatedRegion(_namedArguments? : {value? : T,sized? : boolean,child? : any}) {
        let {value,sized,child} = Object.assign({
        }, _namedArguments );
        this._value = this.value;
        this._sized = this.sized;
        this.alwaysNeedsCompositing = true;
        this.assert = assert;
    }
     : any;

     : any;

    _value;
    _sized;
    super;

     : any;

    get value() : T {
        return this._value;
    }
    _value : T;

    set value(newValue : T) {
        if (op(Op.EQUALS,this._value,newValue)) return;
        this._value = newValue;
        markNeedsPaint();
    }
    get sized() : boolean {
        return this._sized;
    }
    _sized : boolean;

    set sized(value : boolean) {
        if (op(Op.EQUALS,this._sized,value)) return;
        this._sized = value;
        markNeedsPaint();
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    alwaysNeedsCompositing : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib3.PaintingContext,offset : any) : any {
        let layer : lib9.AnnotatedRegionLayer<T> = lib9.AnnotatedRegionLayer(this.value,{
            size : this.sized ? size : null,offset : this.sized ? offset : null});
        context.pushLayer(layer,super.paint,offset);
    }
}

export namespace RenderTransform {
    export type Constructors = RenderProxyBox.Constructors | 'RenderTransform';
    export type Interface = Omit<RenderTransform, Constructors>;
}
@DartClass
export class RenderTransform extends RenderProxyBox {
    constructor(_namedArguments? : {transform? : lib5.Matrix4,origin? : any,alignment? : lib19.AlignmentGeometry,textDirection? : any,transformHitTests? : any,child? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderTransform(_namedArguments? : {transform? : lib5.Matrix4,origin? : any,alignment? : lib19.AlignmentGeometry,textDirection? : any,transformHitTests? : any,child? : any}) {
        let {transform,origin,alignment,textDirection,transformHitTests,child} = Object.assign({
            "transformHitTests" : true}, _namedArguments );
        this.transform = this.transform;
        this.alignment = this.alignment;
        this.textDirection = this.textDirection;
        this.origin = this.origin;
        this.assert = assert;
        this.transformHitTests = transformHitTests;
    }
     : any;

     : any;

    transform;

    alignment;

    textDirection;

    origin;

}

export namespace RenderDecoratedBox {
    export type Constructors = RenderProxyBox.Constructors | 'RenderDecoratedBox';
    export type Interface = Omit<RenderDecoratedBox, Constructors>;
}
@DartClass
export class RenderDecoratedBox extends RenderProxyBox {
    constructor(_namedArguments? : {decoration? : lib17.Decoration,position? : DecorationPosition,configuration? : lib18.ImageConfiguration,child? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderDecoratedBox(_namedArguments? : {decoration? : lib17.Decoration,position? : DecorationPosition,configuration? : lib18.ImageConfiguration,child? : any}) {
        let {decoration,position,configuration,child} = Object.assign({
            "position" : DecorationPosition.background,
            "configuration" : lib18.ImageConfiguration.empty}, _namedArguments );
        this._decoration = this.decoration;
        this._position = this.position;
        this._configuration = this.configuration;
        this.assert = assert;
    }
     : any;

     : any;

     : any;

    _decoration;
    _position;
    _configuration;
    super;

     : any;

    _painter : lib17.BoxPainter;

    get decoration() : lib17.Decoration {
        return this._decoration;
    }
    _decoration : lib17.Decoration;

    set decoration(value : lib17.Decoration) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,value,this._decoration)) return;
        ((_845_)=>(!!_845_)?_845_.dispose():null)(this._painter);
        this._painter = null;
        this._decoration = value;
        markNeedsPaint();
    }
    get position() : DecorationPosition {
        return this._position;
    }
    _position : DecorationPosition;

    set position(value : DecorationPosition) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,value,this._position)) return;
        this._position = value;
        markNeedsPaint();
    }
    get configuration() : lib18.ImageConfiguration {
        return this._configuration;
    }
    _configuration : lib18.ImageConfiguration;

    set configuration(value : lib18.ImageConfiguration) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,value,this._configuration)) return;
        this._configuration = value;
        markNeedsPaint();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    detach() : any {
        ((_846_)=>(!!_846_)?_846_.dispose():null)(this._painter);
        this._painter = null;
        super.detach();
        markNeedsPaint();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestSelf(position : any) : boolean {
        return this._decoration.hitTest(size,position,{
            textDirection : this.configuration.textDirection});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib3.PaintingContext,offset : any) : any {
        /* TODO (AssertStatementImpl) : assert (size.width != null); */;
        /* TODO (AssertStatementImpl) : assert (size.height != null); */;
        this._painter = ( this._painter ) || ( this._decoration.createBoxPainter(markNeedsPaint) );
        let filledConfiguration : lib18.ImageConfiguration = this.configuration.copyWith({
            size : size});
        if (op(Op.EQUALS,this.position,DecorationPosition.background)) {
            let debugSaveCount : number;
            /* TODO (AssertStatementImpl) : assert (() {debugSaveCount = context.canvas.getSaveCount(); return true;}()); */;
            this._painter.paint(context.canvas,offset,filledConfiguration);
            /* TODO (AssertStatementImpl) : assert (() {if (debugSaveCount != context.canvas.getSaveCount()) {throw FlutterError('${_decoration.runtimeType} painter had mismatching save and restore calls.\n' 'Before painting the decoration, the canvas save count was $debugSaveCount. ' 'After painting it, the canvas save count was ${context.canvas.getSaveCount()}. ' 'Every call to save() or saveLayer() must be matched by a call to restore().\n' 'The decoration was:\n' '  $decoration\n' 'The painter was:\n' '  $_painter');} return true;}()); */;
            if (this.decoration.isComplex) context.setIsComplexHint();
        }
        super.paint(context,offset);
        if (op(Op.EQUALS,this.position,DecorationPosition.foreground)) {
            this._painter.paint(context.canvas,offset,filledConfiguration);
            if (this.decoration.isComplex) context.setIsComplexHint();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(this._decoration.toDiagnosticsNode({
            name : 'decoration'}));
        properties.add(lib7.DiagnosticsProperty('configuration',this.configuration));
    }
}

export namespace RenderBackdropFilter {
    export type Constructors = RenderProxyBox.Constructors | 'RenderBackdropFilter';
    export type Interface = Omit<RenderBackdropFilter, Constructors>;
}
@DartClass
export class RenderBackdropFilter extends RenderProxyBox {
    constructor(_namedArguments? : {child? : any,filter? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderBackdropFilter(_namedArguments? : {child? : any,filter? : any}) {
        let {child,filter} = Object.assign({
        }, _namedArguments );
        this._filter = this.filter;
        this.assert = assert;
    }
     : any;

    _filter;
    super;

     : any;

    get filter() : any {
        return this._filter;
    }
    _filter : any;

    set filter(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._filter,value)) return;
        this._filter = value;
        markNeedsPaint();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get alwaysNeedsCompositing() : boolean {
        return child != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib3.PaintingContext,offset : any) : any {
        if (child != null) {
            /* TODO (AssertStatementImpl) : assert (needsCompositing); */;
            context.pushLayer(lib9.BackdropFilterLayer({
                filter : this._filter}),super.paint,offset);
        }
    }
}

export namespace _RenderCustomClip {
    export type Constructors = RenderProxyBox.Constructors | '_RenderCustomClip';
    export type Interface<T> = Omit<_RenderCustomClip<T>, Constructors>;
}
@DartClass
export class _RenderCustomClip<T> extends RenderProxyBox {
    constructor(_namedArguments? : {child? : any,clipper? : CustomClipper<T>,clipBehavior? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RenderCustomClip(_namedArguments? : {child? : any,clipper? : CustomClipper<T>,clipBehavior? : any}) {
        let {child,clipper,clipBehavior} = Object.assign({
            "clipBehavior" : Clip.antiAlias}, _namedArguments );
        this._clipper = clipper;
        this.assert = assert;
        this.clipBehavior = clipBehavior;
    }
     : any;

     : any;

    get clipper() : CustomClipper<T> {
        return this._clipper;
    }
    _clipper : CustomClipper<T>;

    set clipper(newClipper : CustomClipper<T>) {
        if (op(Op.EQUALS,this._clipper,newClipper)) return;
        let oldClipper : CustomClipper<T> = this._clipper;
        this._clipper = newClipper;
        /* TODO (AssertStatementImpl) : assert (newClipper != null || oldClipper != null); */;
        if (op(Op.EQUALS,newClipper,null) || op(Op.EQUALS,oldClipper,null) || newClipper.runtimeType != oldClipper.runtimeType || newClipper.shouldReclip(oldClipper)) {
            this._markNeedsClip();
        }
        if (attached) {
            ((_839_)=>(!!_839_)?_839_.removeListener(this._markNeedsClip.bind(this)):null)(((t)=>(!!t)?t._reclip:null)(oldClipper));
            ((_840_)=>(!!_840_)?_840_.addListener(this._markNeedsClip.bind(this)):null)(((t)=>(!!t)?t._reclip:null)(newClipper));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    attach(owner : lib3.PipelineOwner) : any {
        super.attach(owner);
        ((_841_)=>(!!_841_)?_841_.addListener(this._markNeedsClip.bind(this)):null)(((t)=>(!!t)?t._reclip:null)(this._clipper));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    detach() : any {
        ((_842_)=>(!!_842_)?_842_.removeListener(this._markNeedsClip.bind(this)):null)(((t)=>(!!t)?t._reclip:null)(this._clipper));
        super.detach();
    }
    _markNeedsClip() : any {
        this._clip = null;
        markNeedsPaint();
        markNeedsSemanticsUpdate();
    }
    @AbstractProperty
    get _defaultClip() : T{ throw 'abstract'}
    _clip : T;

    clipBehavior : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        let oldSize : any = hasSize ? size : null;
        super.performLayout();
        if (oldSize != size) this._clip = null;
    }
    _updateClip() : any {
        this._clip = ( this._clip ) || ( (((_843_)=>(!!_843_)?_843_.getClip(size):null)(this._clipper) || this._defaultClip) );
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describeApproximatePaintClip(child : lib3.RenderObject) : any {
        return (((_844_)=>(!!_844_)?_844_.getApproximateClipRect(size):null)(this._clipper) || op(Op.BITAND,Offset.zero,size));
    }
    _debugPaint : any;

    _debugText : lib12.TextPainter;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugPaintSize(context : lib3.PaintingContext,offset : any) : any {
        /* TODO (AssertStatementImpl) : assert (() {_debugPaint ??= Paint()..shader = ui.Gradient.linear(const Offset(0.0, 0.0), const Offset(10.0, 10.0), <Color> [const Color(0x00000000), const Color(0xFFFF00FF), const Color(0xFFFF00FF), const Color(0x00000000)], <double> [0.25, 0.25, 0.75, 0.75], TileMode.repeated)..strokeWidth = 2.0..style = PaintingStyle.stroke; _debugText ??= TextPainter(text: const TextSpan(text: '✂', style: TextStyle(color: Color(0xFFFF00FF), fontSize: 14.0)), textDirection: TextDirection.rtl)..layout(); return true;}()); */;
    }
}

export namespace RenderFollowerLayer {
    export type Constructors = RenderProxyBox.Constructors | 'RenderFollowerLayer';
    export type Interface = Omit<RenderFollowerLayer, Constructors>;
}
@DartClass
export class RenderFollowerLayer extends RenderProxyBox {
    constructor(_namedArguments? : {link? : lib9.LayerLink,showWhenUnlinked? : boolean,offset? : any,child? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderFollowerLayer(_namedArguments? : {link? : lib9.LayerLink,showWhenUnlinked? : boolean,offset? : any,child? : any}) {
        let {link,showWhenUnlinked,offset,child} = Object.assign({
            "showWhenUnlinked" : true,
            "offset" : Offset.zero}, _namedArguments );
        this.link = this.link;
        this.showWhenUnlinked = this.showWhenUnlinked;
        this.offset = this.offset;
        this.assert = assert;
    }
     : any;

     : any;

     : any;

     : any;

    link;

    showWhenUnlinked;

    offset;

}

export namespace ShapeBorderClipper {
    export type Constructors = CustomClipper.Constructors | 'ShapeBorderClipper';
    export type Interface = Omit<ShapeBorderClipper, Constructors>;
}
@DartClass
export class ShapeBorderClipper extends CustomClipper<any> {
    constructor(_namedArguments? : {shape? : lib11.ShapeBorder,textDirection? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ShapeBorderClipper(_namedArguments? : {shape? : lib11.ShapeBorder,textDirection? : any}) {
        let {shape,textDirection} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.shape = shape;
        this.textDirection = textDirection;
    }
     : any;

    shape : lib11.ShapeBorder;

    textDirection : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getClip(size : any) : any {
        return this.shape.getOuterPath(op(Op.BITAND,Offset.zero,size),{
            textDirection : this.textDirection});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldReclip(oldClipper : CustomClipper<any>) : boolean {
        if (oldClipper.runtimeType != ShapeBorderClipper) return true;
        let typedOldClipper : ShapeBorderClipper = oldClipper;
        return typedOldClipper.shape != this.shape || typedOldClipper.textDirection != this.textDirection;
    }
}

export namespace RenderShaderMask {
    export type Constructors = RenderProxyBox.Constructors | 'RenderShaderMask';
    export type Interface = Omit<RenderShaderMask, Constructors>;
}
@DartClass
export class RenderShaderMask extends RenderProxyBox {
    constructor(_namedArguments? : {child? : any,shaderCallback? : (bounds : any) => any,blendMode? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderShaderMask(_namedArguments? : {child? : any,shaderCallback? : (bounds : any) => any,blendMode? : any}) {
        let {child,shaderCallback,blendMode} = Object.assign({
            "blendMode" : BlendMode.modulate}, _namedArguments );
        this._shaderCallback = this.shaderCallback;
        this._blendMode = this.blendMode;
        this.assert = assert;
    }
     : any;

     : any;

    _shaderCallback;
    _blendMode;
    super;

     : any;

    get shaderCallback() : (bounds : any) => any {
        return this._shaderCallback;
    }
    _shaderCallback : (bounds : any) => any;

    set shaderCallback(value : (bounds : any) => any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._shaderCallback,value)) return;
        this._shaderCallback = value;
        markNeedsPaint();
    }
    get blendMode() : any {
        return this._blendMode;
    }
    _blendMode : any;

    set blendMode(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._blendMode,value)) return;
        this._blendMode = value;
        markNeedsPaint();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get alwaysNeedsCompositing() : boolean {
        return child != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib3.PaintingContext,offset : any) : any {
        if (child != null) {
            /* TODO (AssertStatementImpl) : assert (needsCompositing); */;
            context.pushLayer(lib9.ShaderMaskLayer({
                shader : this._shaderCallback(op(Op.BITAND,offset,size)),maskRect : op(Op.BITAND,offset,size),blendMode : this._blendMode}),super.paint,offset);
        }
    }
}

export namespace RenderAnimatedOpacity {
    export type Constructors = RenderProxyBox.Constructors | 'RenderAnimatedOpacity';
    export type Interface = Omit<RenderAnimatedOpacity, Constructors>;
}
@DartClass
export class RenderAnimatedOpacity extends RenderProxyBox {
    constructor(_namedArguments? : {opacity? : lib8.Animation<double>,alwaysIncludeSemantics? : boolean,child? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderAnimatedOpacity(_namedArguments? : {opacity? : lib8.Animation<double>,alwaysIncludeSemantics? : boolean,child? : any}) {
        let {opacity,alwaysIncludeSemantics,child} = Object.assign({
            "alwaysIncludeSemantics" : false}, _namedArguments );
        this._alwaysIncludeSemantics = properties.alwaysIncludeSemantics;
        this.opacity = this.opacity;
        this.assert = assert;
    }
     : any;

     : any;

    _alwaysIncludeSemantics;
    super;

     : any;

    opacity;

}

export namespace RenderOpacity {
    export type Constructors = RenderProxyBox.Constructors | 'RenderOpacity';
    export type Interface = Omit<RenderOpacity, Constructors>;
}
@DartClass
export class RenderOpacity extends RenderProxyBox {
    constructor(_namedArguments? : {opacity? : double,alwaysIncludeSemantics? : boolean,child? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderOpacity(_namedArguments? : {opacity? : double,alwaysIncludeSemantics? : boolean,child? : any}) {
        let {opacity,alwaysIncludeSemantics,child} = Object.assign({
            "opacity" : 1.0,
            "alwaysIncludeSemantics" : false}, _namedArguments );
        this._opacity = this.opacity;
        this._alwaysIncludeSemantics = this.alwaysIncludeSemantics;
        this._alpha = _getAlphaFromOpacity(this.opacity);
        this.assert = assert;
    }
     : any;

     : any;

     : any;

     : any;

    _opacity;
    _alwaysIncludeSemantics;
    _alpha;
    super;

     : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get alwaysNeedsCompositing() : boolean {
        return child != null && (this._alpha != 0 && this._alpha != 255);
    }
    _alpha : number;

    get opacity() : double {
        return this._opacity;
    }
    _opacity : double;

    set opacity(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        /* TODO (AssertStatementImpl) : assert (value >= 0.0 && value <= 1.0); */;
        if (op(Op.EQUALS,this._opacity,value)) return;
        let didNeedCompositing : boolean = this.alwaysNeedsCompositing;
        let wasVisible : boolean = this._alpha != 0;
        this._opacity = value;
        this._alpha = _getAlphaFromOpacity(this._opacity);
        if (didNeedCompositing != this.alwaysNeedsCompositing) markNeedsCompositingBitsUpdate();
        markNeedsPaint();
        if (wasVisible != (this._alpha != 0)) markNeedsSemanticsUpdate();
    }
    get alwaysIncludeSemantics() : boolean {
        return this._alwaysIncludeSemantics;
    }
    _alwaysIncludeSemantics : boolean;

    set alwaysIncludeSemantics(value : boolean) {
        if (value == this._alwaysIncludeSemantics) return;
        this._alwaysIncludeSemantics = value;
        markNeedsSemanticsUpdate();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib3.PaintingContext,offset : any) : any {
        if (child != null) {
            if (op(Op.EQUALS,this._alpha,0)) {
                return;
            }
            if (op(Op.EQUALS,this._alpha,255)) {
                context.paintChild(child,offset);
                return;
            }
            /* TODO (AssertStatementImpl) : assert (needsCompositing); */;
            context.pushOpacity(offset,this._alpha,super.paint);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildrenForSemantics(visitor : (child : any) => any) : any {
        if (child != null && (this._alpha != 0 || this.alwaysIncludeSemantics)) visitor(child);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib7.DoubleProperty('opacity',this.opacity));
        properties.add(lib7.FlagProperty('alwaysIncludeSemantics',{
            value : this.alwaysIncludeSemantics,ifTrue : 'alwaysIncludeSemantics'}));
    }
}

export namespace RenderIntrinsicHeight {
    export type Constructors = RenderProxyBox.Constructors | 'RenderIntrinsicHeight';
    export type Interface = Omit<RenderIntrinsicHeight, Constructors>;
}
@DartClass
export class RenderIntrinsicHeight extends RenderProxyBox {
    constructor(_namedArguments? : {child? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderIntrinsicHeight(_namedArguments? : {child? : any}) {
        let {child} = Object.assign({
        }, _namedArguments );
        super.RenderProxyBox(child);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicWidth(height : double) : double {
        if (op(Op.EQUALS,child,null)) return 0.0;
        if (!new core.DartDouble(height).isFinite) height = child.getMaxIntrinsicHeight(new core.DartDouble(double).infinity);
        /* TODO (AssertStatementImpl) : assert (height.isFinite); */;
        return child.getMinIntrinsicWidth(height);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicWidth(height : double) : double {
        if (op(Op.EQUALS,child,null)) return 0.0;
        if (!new core.DartDouble(height).isFinite) height = child.getMaxIntrinsicHeight(new core.DartDouble(double).infinity);
        /* TODO (AssertStatementImpl) : assert (height.isFinite); */;
        return child.getMaxIntrinsicWidth(height);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicHeight(width : double) : double {
        return computeMaxIntrinsicHeight(width);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        if (child != null) {
            let childConstraints : lib6.BoxConstraints = constraints;
            if (!childConstraints.hasTightHeight) {
                let height : double = child.getMaxIntrinsicHeight(childConstraints.maxWidth);
                /* TODO (AssertStatementImpl) : assert (height.isFinite); */;
                childConstraints = childConstraints.tighten({
                    height : height});
            }
            child.layout(childConstraints,{
                parentUsesSize : true});
            size = child.size;
        }else {
            performResize();
        }
    }
}

export namespace RenderAspectRatio {
    export type Constructors = RenderProxyBox.Constructors | 'RenderAspectRatio';
    export type Interface = Omit<RenderAspectRatio, Constructors>;
}
@DartClass
export class RenderAspectRatio extends RenderProxyBox {
    constructor(_namedArguments? : {child? : any,aspectRatio? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderAspectRatio(_namedArguments? : {child? : any,aspectRatio? : double}) {
        let {child,aspectRatio} = Object.assign({
        }, _namedArguments );
        this._aspectRatio = this.aspectRatio;
        this.assert = assert;
    }
     : any;

     : any;

     : any;

    _aspectRatio;
    super;

     : any;

    get aspectRatio() : double {
        return this._aspectRatio;
    }
    _aspectRatio : double;

    set aspectRatio(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        /* TODO (AssertStatementImpl) : assert (value > 0.0); */;
        /* TODO (AssertStatementImpl) : assert (value.isFinite); */;
        if (op(Op.EQUALS,this._aspectRatio,value)) return;
        this._aspectRatio = value;
        markNeedsLayout();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicWidth(height : double) : double {
        if (new core.DartDouble(height).isFinite) return height * this._aspectRatio;
        if (child != null) return child.getMinIntrinsicWidth(height);
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicWidth(height : double) : double {
        if (new core.DartDouble(height).isFinite) return height * this._aspectRatio;
        if (child != null) return child.getMaxIntrinsicWidth(height);
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicHeight(width : double) : double {
        if (new core.DartDouble(width).isFinite) return width / this._aspectRatio;
        if (child != null) return child.getMinIntrinsicHeight(width);
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicHeight(width : double) : double {
        if (new core.DartDouble(width).isFinite) return width / this._aspectRatio;
        if (child != null) return child.getMaxIntrinsicHeight(width);
        return 0.0;
    }
    _applyAspectRatio(constraints : lib6.BoxConstraints) : any {
        /* TODO (AssertStatementImpl) : assert (constraints.debugAssertIsValid()); */;
        /* TODO (AssertStatementImpl) : assert (() {if (!constraints.hasBoundedWidth && !constraints.hasBoundedHeight) {throw FlutterError('$runtimeType has unbounded constraints.\n' 'This $runtimeType was given an aspect ratio of $aspectRatio but was given ' 'both unbounded width and unbounded height constraints. Because both ' 'constraints were unbounded, this render object doesn\'t know how much ' 'size to consume.');} return true;}()); */;
        if (constraints.isTight) return constraints.smallest;
        let width : double = constraints.maxWidth;
        let height : double;
        if (new core.DartDouble(width).isFinite) {
            height = width / this._aspectRatio;
        }else {
            height = constraints.maxHeight;
            width = height * this._aspectRatio;
        }
        if (width > constraints.maxWidth) {
            width = constraints.maxWidth;
            height = width / this._aspectRatio;
        }
        if (height > constraints.maxHeight) {
            height = constraints.maxHeight;
            width = height * this._aspectRatio;
        }
        if (width < constraints.minWidth) {
            width = constraints.minWidth;
            height = width / this._aspectRatio;
        }
        if (height < constraints.minHeight) {
            height = constraints.minHeight;
            width = height * this._aspectRatio;
        }
        return constraints.constrain(Size(width,height));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        size = this._applyAspectRatio(constraints);
        if (child != null) child.layout(lib6.BoxConstraints.tight(size));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib7.DoubleProperty('aspectRatio',this.aspectRatio));
    }
}

export namespace RenderLimitedBox {
    export type Constructors = RenderProxyBox.Constructors | 'RenderLimitedBox';
    export type Interface = Omit<RenderLimitedBox, Constructors>;
}
@DartClass
export class RenderLimitedBox extends RenderProxyBox {
    constructor(_namedArguments? : {child? : any,maxWidth? : double,maxHeight? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderLimitedBox(_namedArguments? : {child? : any,maxWidth? : double,maxHeight? : double}) {
        let {child,maxWidth,maxHeight} = Object.assign({
            "maxWidth" : new core.DartDouble(double).infinity,
            "maxHeight" : new core.DartDouble(double).infinity}, _namedArguments );
        this._maxWidth = this.maxWidth;
        this._maxHeight = this.maxHeight;
        this.assert = assert;
    }
     : any;

     : any;

     : any;

     : any;

    _maxWidth;
    _maxHeight;
    super;

     : any;

    get maxWidth() : double {
        return this._maxWidth;
    }
    _maxWidth : double;

    set maxWidth(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null && value >= 0.0); */;
        if (op(Op.EQUALS,this._maxWidth,value)) return;
        this._maxWidth = value;
        markNeedsLayout();
    }
    get maxHeight() : double {
        return this._maxHeight;
    }
    _maxHeight : double;

    set maxHeight(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null && value >= 0.0); */;
        if (op(Op.EQUALS,this._maxHeight,value)) return;
        this._maxHeight = value;
        markNeedsLayout();
    }
    _limitConstraints(constraints : lib6.BoxConstraints) : lib6.BoxConstraints {
        return lib6.BoxConstraints({
            minWidth : constraints.minWidth,maxWidth : constraints.hasBoundedWidth ? constraints.maxWidth : constraints.constrainWidth(this.maxWidth),minHeight : constraints.minHeight,maxHeight : constraints.hasBoundedHeight ? constraints.maxHeight : constraints.constrainHeight(this.maxHeight)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        if (child != null) {
            child.layout(this._limitConstraints(constraints),{
                parentUsesSize : true});
            size = constraints.constrain(child.size);
        }else {
            size = this._limitConstraints(constraints).constrain(Size.zero);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib7.DoubleProperty('maxWidth',this.maxWidth,{
            defaultValue : new core.DartDouble(double).infinity}));
        properties.add(lib7.DoubleProperty('maxHeight',this.maxHeight,{
            defaultValue : new core.DartDouble(double).infinity}));
    }
}

export namespace RenderConstrainedBox {
    export type Constructors = RenderProxyBox.Constructors | 'RenderConstrainedBox' | 'debugAssertIsValid';
    export type Interface = Omit<RenderConstrainedBox, Constructors>;
}
@DartClass
export class RenderConstrainedBox extends RenderProxyBox {
    constructor(_namedArguments? : {child? : any,additionalConstraints? : lib6.BoxConstraints}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderConstrainedBox(_namedArguments? : {child? : any,additionalConstraints? : lib6.BoxConstraints}) {
        let {child,additionalConstraints} = Object.assign({
        }, _namedArguments );
        this._additionalConstraints = this.additionalConstraints;
        this.assert = assert;
    }
     : any;

    @namedConstructor
    debugAssertIsValid() {
        this._additionalConstraints = this.additionalConstraints;
    }
    static debugAssertIsValid : new() => RenderConstrainedBox;

    _additionalConstraints;
    super;

     : any;

    get additionalConstraints() : lib6.BoxConstraints {
        return this._additionalConstraints;
    }
    _additionalConstraints : lib6.BoxConstraints;

    set additionalConstraints(value : lib6.BoxConstraints) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        /* TODO (AssertStatementImpl) : assert (value.debugAssertIsValid()); */;
        if (op(Op.EQUALS,this._additionalConstraints,value)) return;
        this._additionalConstraints = value;
        markNeedsLayout();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicWidth(height : double) : double {
        if (this._additionalConstraints.hasBoundedWidth && this._additionalConstraints.hasTightWidth) return this._additionalConstraints.minWidth;
        let width : double = super.computeMinIntrinsicWidth(height);
        /* TODO (AssertStatementImpl) : assert (width.isFinite); */;
        if (!this._additionalConstraints.hasInfiniteWidth) return this._additionalConstraints.constrainWidth(width);
        return width;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicWidth(height : double) : double {
        if (this._additionalConstraints.hasBoundedWidth && this._additionalConstraints.hasTightWidth) return this._additionalConstraints.minWidth;
        let width : double = super.computeMaxIntrinsicWidth(height);
        /* TODO (AssertStatementImpl) : assert (width.isFinite); */;
        if (!this._additionalConstraints.hasInfiniteWidth) return this._additionalConstraints.constrainWidth(width);
        return width;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicHeight(width : double) : double {
        if (this._additionalConstraints.hasBoundedHeight && this._additionalConstraints.hasTightHeight) return this._additionalConstraints.minHeight;
        let height : double = super.computeMinIntrinsicHeight(width);
        /* TODO (AssertStatementImpl) : assert (height.isFinite); */;
        if (!this._additionalConstraints.hasInfiniteHeight) return this._additionalConstraints.constrainHeight(height);
        return height;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicHeight(width : double) : double {
        if (this._additionalConstraints.hasBoundedHeight && this._additionalConstraints.hasTightHeight) return this._additionalConstraints.minHeight;
        let height : double = super.computeMaxIntrinsicHeight(width);
        /* TODO (AssertStatementImpl) : assert (height.isFinite); */;
        if (!this._additionalConstraints.hasInfiniteHeight) return this._additionalConstraints.constrainHeight(height);
        return height;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        if (child != null) {
            child.layout(this._additionalConstraints.enforce(constraints),{
                parentUsesSize : true});
            size = child.size;
        }else {
            size = this._additionalConstraints.enforce(constraints).constrain(Size.zero);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugPaintSize(context : lib3.PaintingContext,offset : any) : any {
        super.debugPaintSize(context,offset);
        /* TODO (AssertStatementImpl) : assert (() {Paint paint; if (child == null || child.size.isEmpty) {paint = Paint()..color = const Color(0x90909090); context.canvas.drawRect(offset & size, paint);} return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib7.DiagnosticsProperty('additionalConstraints',this.additionalConstraints));
    }
}

export namespace RenderProxyBoxWithHitTestBehavior {
    export type Constructors = RenderProxyBox.Constructors | 'RenderProxyBoxWithHitTestBehavior';
    export type Interface = Omit<RenderProxyBoxWithHitTestBehavior, Constructors>;
}
@DartClass
export class RenderProxyBoxWithHitTestBehavior extends RenderProxyBox {
    constructor(_namedArguments? : {behavior? : any,child? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderProxyBoxWithHitTestBehavior(_namedArguments? : {behavior? : any,child? : any}) {
        let {behavior,child} = Object.assign({
            "behavior" : HitTestBehavior.deferToChild}, _namedArguments );
        super.RenderProxyBox(child);
        this.behavior = behavior;
    }
    behavior : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTest(result : lib4.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        let hitTarget : boolean = false;
        if (size.contains(position)) {
            hitTarget = hitTestChildren(result,{
                position : position}) || this.hitTestSelf(position);
            if (hitTarget || op(Op.EQUALS,this.behavior,HitTestBehavior.translucent)) result.add(lib6.BoxHitTestEntry(this,position));
        }
        return hitTarget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestSelf(position : any) : boolean {
        return op(Op.EQUALS,this.behavior,HitTestBehavior.opaque);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib7.EnumProperty('behavior',this.behavior,{
            defaultValue : null}));
    }
}

export namespace RenderIntrinsicWidth {
    export type Constructors = RenderProxyBox.Constructors | 'RenderIntrinsicWidth';
    export type Interface = Omit<RenderIntrinsicWidth, Constructors>;
}
@DartClass
export class RenderIntrinsicWidth extends RenderProxyBox {
    constructor(_namedArguments? : {stepWidth? : double,stepHeight? : double,child? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderIntrinsicWidth(_namedArguments? : {stepWidth? : double,stepHeight? : double,child? : any}) {
        let {stepWidth,stepHeight,child} = Object.assign({
        }, _namedArguments );
        this._stepWidth = this.stepWidth;
        this._stepHeight = this.stepHeight;
        this.assert = assert;
    }
     : any;

     : any;

     : any;

     : any;

    _stepWidth;
    _stepHeight;
    super;

     : any;

    get stepWidth() : double {
        return this._stepWidth;
    }
    _stepWidth : double;

    set stepWidth(value : double) {
        /* TODO (AssertStatementImpl) : assert (value == null || value > 0.0); */;
        if (value == this._stepWidth) return;
        this._stepWidth = value;
        markNeedsLayout();
    }
    get stepHeight() : double {
        return this._stepHeight;
    }
    _stepHeight : double;

    set stepHeight(value : double) {
        /* TODO (AssertStatementImpl) : assert (value == null || value > 0.0); */;
        if (value == this._stepHeight) return;
        this._stepHeight = value;
        markNeedsLayout();
    }
    static _applyStep(input : double,step : double) : double {
        /* TODO (AssertStatementImpl) : assert (input.isFinite); */;
        if (step == null) return input;
        return new core.DartDouble((input / step)).ceil() * step;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicWidth(height : double) : double {
        return this.computeMaxIntrinsicWidth(height);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicWidth(height : double) : double {
        if (op(Op.EQUALS,child,null)) return 0.0;
        let width : double = child.getMaxIntrinsicWidth(height);
        return RenderIntrinsicWidth._applyStep(width,this._stepWidth);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicHeight(width : double) : double {
        if (op(Op.EQUALS,child,null)) return 0.0;
        if (!new core.DartDouble(width).isFinite) width = this.computeMaxIntrinsicWidth(new core.DartDouble(double).infinity);
        /* TODO (AssertStatementImpl) : assert (width.isFinite); */;
        let height : double = child.getMinIntrinsicHeight(width);
        return RenderIntrinsicWidth._applyStep(height,this._stepHeight);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicHeight(width : double) : double {
        if (op(Op.EQUALS,child,null)) return 0.0;
        if (!new core.DartDouble(width).isFinite) width = this.computeMaxIntrinsicWidth(new core.DartDouble(double).infinity);
        /* TODO (AssertStatementImpl) : assert (width.isFinite); */;
        let height : double = child.getMaxIntrinsicHeight(width);
        return RenderIntrinsicWidth._applyStep(height,this._stepHeight);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        if (child != null) {
            let childConstraints : lib6.BoxConstraints = constraints;
            if (!childConstraints.hasTightWidth) {
                let width : double = child.getMaxIntrinsicWidth(childConstraints.maxHeight);
                /* TODO (AssertStatementImpl) : assert (width.isFinite); */;
                childConstraints = childConstraints.tighten({
                    width : RenderIntrinsicWidth._applyStep(width,this._stepWidth)});
            }
            if (this._stepHeight != null) {
                let height : double = child.getMaxIntrinsicHeight(childConstraints.maxWidth);
                /* TODO (AssertStatementImpl) : assert (height.isFinite); */;
                childConstraints = childConstraints.tighten({
                    height : RenderIntrinsicWidth._applyStep(height,this._stepHeight)});
            }
            child.layout(childConstraints,{
                parentUsesSize : true});
            size = child.size;
        }else {
            performResize();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib7.DoubleProperty('stepWidth',this.stepWidth));
        properties.add(lib7.DoubleProperty('stepHeight',this.stepHeight));
    }
}

export namespace RenderPointerListener {
    export type Constructors = RenderProxyBoxWithHitTestBehavior.Constructors | 'RenderPointerListener';
    export type Interface = Omit<RenderPointerListener, Constructors>;
}
@DartClass
export class RenderPointerListener extends RenderProxyBoxWithHitTestBehavior {
    constructor(_namedArguments? : {onPointerDown? : (event : lib22.PointerDownEvent) => any,onPointerMove? : (event : lib22.PointerMoveEvent) => any,onPointerEnter? : (event : lib22.PointerEnterEvent) => any,onPointerHover? : (event : lib22.PointerHoverEvent) => any,onPointerExit? : (event : lib22.PointerExitEvent) => any,onPointerUp? : (event : lib22.PointerUpEvent) => any,onPointerCancel? : (event : lib22.PointerCancelEvent) => any,behavior? : any,child? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderPointerListener(_namedArguments? : {onPointerDown? : (event : lib22.PointerDownEvent) => any,onPointerMove? : (event : lib22.PointerMoveEvent) => any,onPointerEnter? : (event : lib22.PointerEnterEvent) => any,onPointerHover? : (event : lib22.PointerHoverEvent) => any,onPointerExit? : (event : lib22.PointerExitEvent) => any,onPointerUp? : (event : lib22.PointerUpEvent) => any,onPointerCancel? : (event : lib22.PointerCancelEvent) => any,behavior? : any,child? : any}) {
        let {onPointerDown,onPointerMove,onPointerEnter,onPointerHover,onPointerExit,onPointerUp,onPointerCancel,behavior,child} = Object.assign({
            "behavior" : HitTestBehavior.deferToChild}, _namedArguments );
        this._onPointerEnter = onPointerEnter;
        this._onPointerHover = onPointerHover;
        this._onPointerExit = onPointerExit;
        super.RenderProxyBoxWithHitTestBehavior({
            behavior : behavior,child : child});
        this.onPointerDown = onPointerDown;
        this.onPointerMove = onPointerMove;
        this.onPointerUp = onPointerUp;
        this.onPointerCancel = onPointerCancel;
        if (this._onPointerEnter != null || this._onPointerHover != null || this._onPointerExit != null) {
            this._hoverAnnotation = lib23.MouseTrackerAnnotation({
                onEnter : this._onPointerEnter,onHover : this._onPointerHover,onExit : this._onPointerExit});
        }
    }
    onPointerDown : (event : lib22.PointerDownEvent) => any;

    onPointerMove : (event : lib22.PointerMoveEvent) => any;

    get onPointerEnter() : (event : lib22.PointerEnterEvent) => any {
        return this._onPointerEnter;
    }
    set onPointerEnter(value : (event : lib22.PointerEnterEvent) => any) {
        if (this._onPointerEnter != value) {
            this._onPointerEnter = value;
            this._updateAnnotations();
        }
    }
    _onPointerEnter : (event : lib22.PointerEnterEvent) => any;

    get onPointerHover() : (event : lib22.PointerHoverEvent) => any {
        return this._onPointerHover;
    }
    set onPointerHover(value : (event : lib22.PointerHoverEvent) => any) {
        if (this._onPointerHover != value) {
            this._onPointerHover = value;
            this._updateAnnotations();
        }
    }
    _onPointerHover : (event : lib22.PointerHoverEvent) => any;

    get onPointerExit() : (event : lib22.PointerExitEvent) => any {
        return this._onPointerExit;
    }
    set onPointerExit(value : (event : lib22.PointerExitEvent) => any) {
        if (this._onPointerExit != value) {
            this._onPointerExit = value;
            this._updateAnnotations();
        }
    }
    _onPointerExit : (event : lib22.PointerExitEvent) => any;

    onPointerUp : (event : lib22.PointerUpEvent) => any;

    onPointerCancel : (event : lib22.PointerCancelEvent) => any;

    _hoverAnnotation : lib23.MouseTrackerAnnotation;

    _updateAnnotations() : any {
        if (this._hoverAnnotation != null && attached) {
            lib24.properties.RendererBinding.instance.mouseTracker.detachAnnotation(this._hoverAnnotation);
        }
        if (this._onPointerEnter != null || this._onPointerHover != null || this._onPointerExit != null) {
            this._hoverAnnotation = lib23.MouseTrackerAnnotation({
                onEnter : this._onPointerEnter,onHover : this._onPointerHover,onExit : this._onPointerExit});
            if (attached) {
                lib24.properties.RendererBinding.instance.mouseTracker.attachAnnotation(this._hoverAnnotation);
            }
        }else {
            this._hoverAnnotation = null;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    attach(owner : lib3.PipelineOwner) : any {
        super.attach(owner);
        if (this._hoverAnnotation != null) {
            lib24.properties.RendererBinding.instance.mouseTracker.attachAnnotation(this._hoverAnnotation);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    detach() : any {
        if (this._hoverAnnotation != null) {
            lib24.properties.RendererBinding.instance.mouseTracker.detachAnnotation(this._hoverAnnotation);
        }
        super.detach();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib3.PaintingContext,offset : any) : any {
        if (this._hoverAnnotation != null) {
            let layer : lib9.AnnotatedRegionLayer<lib23.MouseTrackerAnnotation> = lib9.AnnotatedRegionLayer(this._hoverAnnotation,{
                size : size,offset : offset});
            context.pushLayer(layer,super.paint,offset);
        }
        super.paint(context,offset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performResize() : any {
        size = constraints.biggest;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleEvent(event : lib22.PointerEvent,entry : lib4.HitTestEntry) : any {
        /* TODO (AssertStatementImpl) : assert (debugHandleEvent(event, entry)); */;
        if (this.onPointerDown != null && is(event, lib22.PointerDownEvent)) return this.onPointerDown(event);
        if (this.onPointerMove != null && is(event, lib22.PointerMoveEvent)) return this.onPointerMove(event);
        if (this.onPointerUp != null && is(event, lib22.PointerUpEvent)) return this.onPointerUp(event);
        if (this.onPointerCancel != null && is(event, lib22.PointerCancelEvent)) return this.onPointerCancel(event);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        let listeners : core.DartList<string> = new core.DartList.literal<string>();
        if (this.onPointerDown != null) listeners.add('down');
        if (this.onPointerMove != null) listeners.add('move');
        if (this.onPointerEnter != null) listeners.add('enter');
        if (this.onPointerHover != null) listeners.add('hover');
        if (this.onPointerExit != null) listeners.add('exit');
        if (this.onPointerUp != null) listeners.add('up');
        if (this.onPointerCancel != null) listeners.add('cancel');
        if (listeners.isEmpty) listeners.add('<none>');
        properties.add(lib7.IterableProperty('listeners',listeners));
    }
}

export namespace _RenderPhysicalModelBase {
    export type Constructors = _RenderCustomClip.Constructors | '_RenderPhysicalModelBase';
    export type Interface<T> = Omit<_RenderPhysicalModelBase<T>, Constructors>;
}
@DartClass
export class _RenderPhysicalModelBase<T> extends _RenderCustomClip<T> {
    constructor(_namedArguments? : {child? : any,elevation? : double,color? : any,shadowColor? : any,clipBehavior? : any,clipper? : CustomClipper<T>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RenderPhysicalModelBase(_namedArguments? : {child? : any,elevation? : double,color? : any,shadowColor? : any,clipBehavior? : any,clipper? : CustomClipper<T>}) {
        let {child,elevation,color,shadowColor,clipBehavior,clipper} = Object.assign({
            "clipBehavior" : Clip.none}, _namedArguments );
        this._elevation = this.elevation;
        this._color = this.color;
        this._shadowColor = this.shadowColor;
        this.assert = assert;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    _elevation;
    _color;
    _shadowColor;
    super;

     : any;

    child;
    clipBehavior;

    clipBehavior;
    clipper;

     : any;

    get elevation() : double {
        return this._elevation;
    }
    _elevation : double;

    set elevation(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null && value >= 0.0); */;
        if (this.elevation == value) return;
        let didNeedCompositing : boolean = this.alwaysNeedsCompositing;
        this._elevation = value;
        if (didNeedCompositing != this.alwaysNeedsCompositing) markNeedsCompositingBitsUpdate();
        markNeedsPaint();
    }
    get shadowColor() : any {
        return this._shadowColor;
    }
    _shadowColor : any;

    set shadowColor(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this.shadowColor,value)) return;
        this._shadowColor = value;
        markNeedsPaint();
    }
    get color() : any {
        return this._color;
    }
    _color : any;

    set color(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this.color,value)) return;
        this._color = value;
        markNeedsPaint();
    }
    private static __$_transparentPaint : any;
    static get _transparentPaint() : any { 
        if (this.__$_transparentPaint===undefined) {
            this.__$_transparentPaint = ((_) : any =>  {
                {
                    _.color = new bare.createInstance(any,null,0);
                    return _;
                }
            })(Paint());
        }
        return this.__$_transparentPaint;
    }
    static set _transparentPaint(__$value : any)  { 
        this.__$_transparentPaint = __$value;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get alwaysNeedsCompositing() : boolean {
        return this._elevation != 0.0 && op(Op.EQUALS,lib14.properties.defaultTargetPlatform,lib14.TargetPlatform.fuchsia);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describeSemanticsConfiguration(config : lib15.SemanticsConfiguration) : any {
        super.describeSemanticsConfiguration(config);
        config.elevation = this.elevation;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(description : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(description);
        description.add(lib7.DoubleProperty('elevation',this.elevation));
        description.add(lib7.DiagnosticsProperty('color',this.color));
        description.add(lib7.DiagnosticsProperty('shadowColor',this.color));
    }
}

export namespace RenderClipPath {
    export type Constructors = _RenderCustomClip.Constructors | 'RenderClipPath';
    export type Interface = Omit<RenderClipPath, Constructors>;
}
@DartClass
export class RenderClipPath extends _RenderCustomClip<any> {
    constructor(_namedArguments? : {child? : any,clipper? : CustomClipper<any>,clipBehavior? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderClipPath(_namedArguments? : {child? : any,clipper? : CustomClipper<any>,clipBehavior? : any}) {
        let {child,clipper,clipBehavior} = Object.assign({
            "clipBehavior" : Clip.antiAlias}, _namedArguments );
        this.assert = assert;
    }
     : any;

     : any;

     : any;

    child;
    clipper;

    clipper;
    clipBehavior;

     : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _defaultClip() : any {
        return ((_) : any =>  {
            {
                addRect(op(Op.BITAND,Offset.zero,size));
                return _;
            }
        })(Path());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTest(result : lib4.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        if (this._clipper != null) {
            this._updateClip();
            /* TODO (AssertStatementImpl) : assert (_clip != null); */;
            if (!this._clip.contains(position)) return false;
        }
        return super.hitTest(result,{
            position : position});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib3.PaintingContext,offset : any) : any {
        if (this.child != null) {
            this._updateClip();
            context.pushClipPath(needsCompositing,offset,op(Op.BITAND,Offset.zero,size),this._clip,super.paint,{
                clipBehavior : this.clipBehavior});
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugPaintSize(context : lib3.PaintingContext,offset : any) : any {
        /* TODO (AssertStatementImpl) : assert (() {if (child != null) {super.debugPaintSize(context, offset); context.canvas.drawPath(_clip.shift(offset), _debugPaint); _debugText.paint(context.canvas, offset);} return true;}()); */;
    }
}

export namespace RenderClipOval {
    export type Constructors = _RenderCustomClip.Constructors | 'RenderClipOval';
    export type Interface = Omit<RenderClipOval, Constructors>;
}
@DartClass
export class RenderClipOval extends _RenderCustomClip<any> {
    constructor(_namedArguments? : {child? : any,clipper? : CustomClipper<any>,clipBehavior? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderClipOval(_namedArguments? : {child? : any,clipper? : CustomClipper<any>,clipBehavior? : any}) {
        let {child,clipper,clipBehavior} = Object.assign({
            "clipBehavior" : Clip.antiAlias}, _namedArguments );
        this.assert = assert;
    }
     : any;

     : any;

     : any;

    child;
    clipper;

    clipper;
    clipBehavior;

     : any;

    _cachedRect : any;

    _cachedPath : any;

    _getClipPath(rect : any) : any {
        if (rect != this._cachedRect) {
            this._cachedRect = rect;
            this._cachedPath = ((_) : any =>  {
                {
                    addOval(this._cachedRect);
                    return _;
                }
            })(Path());
        }
        return this._cachedPath;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _defaultClip() : any {
        return op(Op.BITAND,Offset.zero,size);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTest(result : lib4.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        this._updateClip();
        /* TODO (AssertStatementImpl) : assert (_clip != null); */;
        let center : any = this._clip.center;
        let offset : any = Offset(op(Op.DIVIDE,(op(Op.MINUS,position.dx,center.dx)),this._clip.width),op(Op.DIVIDE,(op(Op.MINUS,position.dy,center.dy)),this._clip.height));
        if (op(Op.GT,offset.distanceSquared,0.25)) return false;
        return super.hitTest(result,{
            position : position});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib3.PaintingContext,offset : any) : any {
        if (this.child != null) {
            this._updateClip();
            context.pushClipPath(needsCompositing,offset,this._clip,this._getClipPath(this._clip),super.paint,{
                clipBehavior : this.clipBehavior});
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugPaintSize(context : lib3.PaintingContext,offset : any) : any {
        /* TODO (AssertStatementImpl) : assert (() {if (child != null) {super.debugPaintSize(context, offset); context.canvas.drawPath(_getClipPath(_clip).shift(offset), _debugPaint); _debugText.paint(context.canvas, offset + Offset((_clip.width - _debugText.width) / 2.0, -_debugText.text.style.fontSize * 1.1));} return true;}()); */;
    }
}

export namespace RenderClipRRect {
    export type Constructors = _RenderCustomClip.Constructors | 'RenderClipRRect';
    export type Interface = Omit<RenderClipRRect, Constructors>;
}
@DartClass
export class RenderClipRRect extends _RenderCustomClip<any> {
    constructor(_namedArguments? : {child? : any,borderRadius? : lib13.BorderRadius,clipper? : CustomClipper<any>,clipBehavior? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderClipRRect(_namedArguments? : {child? : any,borderRadius? : lib13.BorderRadius,clipper? : CustomClipper<any>,clipBehavior? : any}) {
        let {child,borderRadius,clipper,clipBehavior} = Object.assign({
            "borderRadius" : lib13.BorderRadius.zero,
            "clipBehavior" : Clip.antiAlias}, _namedArguments );
        this._borderRadius = properties.borderRadius;
        this.assert = assert;
    }
     : any;

     : any;

    _borderRadius;
    super;

     : any;

    child;
    clipper;

    clipper;
    clipBehavior;

     : any;

     : any;

     : any;

}

export namespace RenderClipRect {
    export type Constructors = _RenderCustomClip.Constructors | 'RenderClipRect';
    export type Interface = Omit<RenderClipRect, Constructors>;
}
@DartClass
export class RenderClipRect extends _RenderCustomClip<any> {
    constructor(_namedArguments? : {child? : any,clipper? : CustomClipper<any>,clipBehavior? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderClipRect(_namedArguments? : {child? : any,clipper? : CustomClipper<any>,clipBehavior? : any}) {
        let {child,clipper,clipBehavior} = Object.assign({
            "clipBehavior" : Clip.antiAlias}, _namedArguments );
        super._RenderCustomClip({
            child : child,clipper : clipper,clipBehavior : clipBehavior});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _defaultClip() : any {
        return op(Op.BITAND,Offset.zero,size);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTest(result : lib4.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        if (this._clipper != null) {
            this._updateClip();
            /* TODO (AssertStatementImpl) : assert (_clip != null); */;
            if (!this._clip.contains(position)) return false;
        }
        return super.hitTest(result,{
            position : position});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib3.PaintingContext,offset : any) : any {
        if (child != null) {
            this._updateClip();
            context.pushClipRect(needsCompositing,offset,this._clip,super.paint,{
                clipBehavior : this.clipBehavior});
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugPaintSize(context : lib3.PaintingContext,offset : any) : any {
        /* TODO (AssertStatementImpl) : assert (() {if (child != null) {super.debugPaintSize(context, offset); context.canvas.drawRect(_clip.shift(offset), _debugPaint); _debugText.paint(context.canvas, offset + Offset(_clip.width / 8.0, -_debugText.text.style.fontSize * 1.1));} return true;}()); */;
    }
}

export namespace RenderMetaData {
    export type Constructors = RenderProxyBoxWithHitTestBehavior.Constructors | 'RenderMetaData';
    export type Interface = Omit<RenderMetaData, Constructors>;
}
@DartClass
export class RenderMetaData extends RenderProxyBoxWithHitTestBehavior {
    constructor(_namedArguments? : {metaData? : any,behavior? : any,child? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderMetaData(_namedArguments? : {metaData? : any,behavior? : any,child? : any}) {
        let {metaData,behavior,child} = Object.assign({
            "behavior" : HitTestBehavior.deferToChild}, _namedArguments );
        super.RenderProxyBoxWithHitTestBehavior({
            behavior : behavior,child : child});
        this.metaData = metaData;
    }
    metaData : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib7.DiagnosticsProperty('metaData',this.metaData));
    }
}

export namespace RenderPhysicalShape {
    export type Constructors = _RenderPhysicalModelBase.Constructors | 'RenderPhysicalShape';
    export type Interface = Omit<RenderPhysicalShape, Constructors>;
}
@DartClass
export class RenderPhysicalShape extends _RenderPhysicalModelBase<any> {
    constructor(_namedArguments? : {child? : any,clipper? : CustomClipper<any>,clipBehavior? : any,elevation? : double,color? : any,shadowColor? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderPhysicalShape(_namedArguments? : {child? : any,clipper? : CustomClipper<any>,clipBehavior? : any,elevation? : double,color? : any,shadowColor? : any}) {
        let {child,clipper,clipBehavior,elevation,color,shadowColor} = Object.assign({
            "clipBehavior" : Clip.none,
            "elevation" : 0.0,
            "shadowColor" : new bare.createInstance(any,null,4278190080)}, _namedArguments );
        this.assert = assert;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    child;
    elevation;

    elevation;
    color;

    color;
    shadowColor;

    shadowColor;
    clipper;

    clipper;
    clipBehavior;

     : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _defaultClip() : any {
        return ((_) : any =>  {
            {
                addRect(op(Op.BITAND,Offset.zero,size));
                return _;
            }
        })(Path());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTest(result : lib4.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        if (this._clipper != null) {
            this._updateClip();
            /* TODO (AssertStatementImpl) : assert (_clip != null); */;
            if (!this._clip.contains(position)) return false;
        }
        return super.hitTest(result,{
            position : position});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib3.PaintingContext,offset : any) : any {
        if (this.child != null) {
            this._updateClip();
            let offsetBounds : any = op(Op.BITAND,offset,size);
            let offsetPath : any = this._clip.shift(offset);
            let paintShadows : boolean = true;
            /* TODO (AssertStatementImpl) : assert (() {if (debugDisableShadows) {if (elevation > 0.0) {context.canvas.drawPath(offsetPath, Paint()..color = shadowColor..style = PaintingStyle.stroke..strokeWidth = elevation * 2.0);} paintShadows = false;} return true;}()); */;
            if (needsCompositing) {
                let physicalModel : lib9.PhysicalModelLayer = lib9.PhysicalModelLayer({
                    clipPath : offsetPath,clipBehavior : this.clipBehavior,elevation : paintShadows ? this.elevation : 0.0,color : this.color,shadowColor : this.shadowColor});
                context.pushLayer(physicalModel,super.paint,offset,{
                    childPaintBounds : offsetBounds});
            }else {
                let canvas : any = context.canvas;
                if (this.elevation != 0.0 && paintShadows) {
                    canvas.drawRect(offsetBounds.inflate(20.0),_RenderPhysicalModelBase._transparentPaint);
                    canvas.drawShadow(offsetPath,this.shadowColor,this.elevation,this.color.alpha != 255);
                }
                canvas.drawPath(offsetPath,((_) : any =>  {
                    {
                        _.color = this.color;
                        _.style = PaintingStyle.fill;
                        return _;
                    }
                })(Paint()));
                context.clipPathAndPaint(offsetPath,this.clipBehavior,offsetBounds,() =>  {
                    return super.paint(context,offset);
                });
                /* TODO (AssertStatementImpl) : assert (context.canvas == canvas, 'canvas changed even though needsCompositing was false'); */;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(description : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(description);
        description.add(lib7.DiagnosticsProperty('clipper',this.clipper));
    }
}

export namespace RenderPhysicalModel {
    export type Constructors = _RenderPhysicalModelBase.Constructors | 'RenderPhysicalModel';
    export type Interface = Omit<RenderPhysicalModel, Constructors>;
}
@DartClass
export class RenderPhysicalModel extends _RenderPhysicalModelBase<any> {
    constructor(_namedArguments? : {child? : any,shape? : lib16.BoxShape,clipBehavior? : any,borderRadius? : lib13.BorderRadius,elevation? : double,color? : any,shadowColor? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderPhysicalModel(_namedArguments? : {child? : any,shape? : lib16.BoxShape,clipBehavior? : any,borderRadius? : lib13.BorderRadius,elevation? : double,color? : any,shadowColor? : any}) {
        let {child,shape,clipBehavior,borderRadius,elevation,color,shadowColor} = Object.assign({
            "shape" : lib16.BoxShape.rectangle,
            "clipBehavior" : Clip.none,
            "elevation" : 0.0,
            "shadowColor" : new bare.createInstance(any,null,4278190080)}, _namedArguments );
        this._shape = this.shape;
        this._borderRadius = this.borderRadius;
        this.assert = assert;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    _shape;
    _borderRadius;
    super;

     : any;

    clipBehavior;
    child;

    child;
    elevation;

    elevation;
    color;

    color;
    shadowColor;

     : any;

    get shape() : lib16.BoxShape {
        return this._shape;
    }
    _shape : lib16.BoxShape;

    set shape(value : lib16.BoxShape) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this.shape,value)) return;
        this._shape = value;
        this._markNeedsClip();
    }
    get borderRadius() : lib13.BorderRadius {
        return this._borderRadius;
    }
    _borderRadius : lib13.BorderRadius;

    set borderRadius(value : lib13.BorderRadius) {
        if (op(Op.EQUALS,this.borderRadius,value)) return;
        this._borderRadius = value;
        this._markNeedsClip();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get _defaultClip() : any {
        /* TODO (AssertStatementImpl) : assert (hasSize); */;
        /* TODO (AssertStatementImpl) : assert (_shape != null); */;
        switch (this._shape) {
            case lib16.BoxShape.rectangle:
                return ((this.borderRadius || lib13.BorderRadius.zero)).toRRect(op(Op.BITAND,Offset.zero,size));
            case lib16.BoxShape.circle:
                let rect : any = op(Op.BITAND,Offset.zero,size);
                return RRect.fromRectXY(rect,op(Op.DIVIDE,rect.width,2),op(Op.DIVIDE,rect.height,2));
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTest(result : lib4.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        if (this._clipper != null) {
            this._updateClip();
            /* TODO (AssertStatementImpl) : assert (_clip != null); */;
            if (!this._clip.contains(position)) return false;
        }
        return super.hitTest(result,{
            position : position});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib3.PaintingContext,offset : any) : any {
        if (this.child != null) {
            this._updateClip();
            let offsetRRect : any = this._clip.shift(offset);
            let offsetBounds : any = offsetRRect.outerRect;
            let offsetRRectAsPath : any = ((_) : any =>  {
                {
                    addRRect(offsetRRect);
                    return _;
                }
            })(Path());
            let paintShadows : boolean = true;
            /* TODO (AssertStatementImpl) : assert (() {if (debugDisableShadows) {if (elevation > 0.0) {context.canvas.drawRRect(offsetRRect, Paint()..color = shadowColor..style = PaintingStyle.stroke..strokeWidth = elevation * 2.0);} paintShadows = false;} return true;}()); */;
            if (needsCompositing) {
                let physicalModel : lib9.PhysicalModelLayer = lib9.PhysicalModelLayer({
                    clipPath : offsetRRectAsPath,clipBehavior : this.clipBehavior,elevation : paintShadows ? this.elevation : 0.0,color : this.color,shadowColor : this.shadowColor});
                context.pushLayer(physicalModel,super.paint,offset,{
                    childPaintBounds : offsetBounds});
            }else {
                let canvas : any = context.canvas;
                if (this.elevation != 0.0 && paintShadows) {
                    canvas.drawRect(offsetBounds.inflate(20.0),_RenderPhysicalModelBase._transparentPaint);
                    canvas.drawShadow(offsetRRectAsPath,this.shadowColor,this.elevation,this.color.alpha != 255);
                }
                canvas.drawRRect(offsetRRect,((_) : any =>  {
                    {
                        _.color = this.color;
                        return _;
                    }
                })(Paint()));
                context.clipRRectAndPaint(offsetRRect,this.clipBehavior,offsetBounds,() =>  {
                    return super.paint(context,offset);
                });
                /* TODO (AssertStatementImpl) : assert (context.canvas == canvas, 'canvas changed even though needsCompositing was false'); */;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(description : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(description);
        description.add(lib7.DiagnosticsProperty('shape',this.shape));
        description.add(lib7.DiagnosticsProperty('borderRadius',this.borderRadius));
    }
}

export class properties {
    private static __$RenderBox : any;
    static get RenderBox() : any { 
        return this.__$RenderBox;
    }
    static set RenderBox(__$value : any)  { 
        this.__$RenderBox = __$value;
    }
    ,private static __$RenderObjectWithChildMixin : any;
    static get RenderObjectWithChildMixin() : any { 
        return this.__$RenderObjectWithChildMixin;
    }
    static set RenderObjectWithChildMixin(__$value : any)  { 
        this.__$RenderObjectWithChildMixin = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$void : any;
    static get void() : any { 
        return this.__$void;
    }
    static set void(__$value : any)  { 
        this.__$void = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$deferToChild;
    static get deferToChild() { 
        return this.__$deferToChild;
    }
    static set deferToChild(__$value : any)  { 
        this.__$deferToChild = __$value;
    }
    ,private static __$opaque;
    static get opaque() { 
        return this.__$opaque;
    }
    static set opaque(__$value : any)  { 
        this.__$opaque = __$value;
    }
    ,private static __$translucent;
    static get translucent() { 
        return this.__$translucent;
    }
    static set translucent(__$value : any)  { 
        this.__$translucent = __$value;
    }
    ,private static __$;
    static get () { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    static get origin() : any {
        return properties._origin;
    }
    private static __$_alpha : number;
    static get _alpha() : number { 
        return this.__$_alpha;
    }
    static set _alpha(__$value : number)  { 
        this.__$_alpha = __$value;
    }

    static get alwaysNeedsCompositing() : boolean {
        return child != null && properties._currentlyNeedsCompositing;
    }
    private static __$_currentlyNeedsCompositing : boolean;
    static get _currentlyNeedsCompositing() : boolean { 
        return this.__$_currentlyNeedsCompositing;
    }
    static set _currentlyNeedsCompositing(__$value : boolean)  { 
        this.__$_currentlyNeedsCompositing = __$value;
    }

    static get opacity() : lib8.Animation<double> {
        return properties._opacity;
    }
    private static __$_opacity : lib8.Animation<double>;
    static get _opacity() : lib8.Animation<double> { 
        return this.__$_opacity;
    }
    static set _opacity(__$value : lib8.Animation<double>)  { 
        this.__$_opacity = __$value;
    }

    static set opacity(value : lib8.Animation<double>) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,properties._opacity,value)) return;
        if (attached && properties._opacity != null) properties._opacity.removeListener(_updateOpacity);
        properties._opacity = value;
        if (attached) properties._opacity.addListener(_updateOpacity);
        _updateOpacity();
    }
    static get alwaysIncludeSemantics() : boolean {
        return properties._alwaysIncludeSemantics;
    }
    private static __$_alwaysIncludeSemantics : boolean;
    static get _alwaysIncludeSemantics() : boolean { 
        return this.__$_alwaysIncludeSemantics;
    }
    static set _alwaysIncludeSemantics(__$value : boolean)  { 
        this.__$_alwaysIncludeSemantics = __$value;
    }

    static set alwaysIncludeSemantics(value : boolean) {
        if (value == properties._alwaysIncludeSemantics) return;
        properties._alwaysIncludeSemantics = value;
        markNeedsSemanticsUpdate();
    }
    static get borderRadius() : lib13.BorderRadius {
        return properties._borderRadius;
    }
    private static __$_borderRadius : lib13.BorderRadius;
    static get _borderRadius() : lib13.BorderRadius { 
        return this.__$_borderRadius;
    }
    static set _borderRadius(__$value : lib13.BorderRadius)  { 
        this.__$_borderRadius = __$value;
    }

    static set borderRadius(value : lib13.BorderRadius) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,properties._borderRadius,value)) return;
        properties._borderRadius = value;
        _markNeedsClip();
    }
    static get _defaultClip() : any {
        return properties._borderRadius.toRRect(op(Op.BITAND,Offset.zero,size));
    }
    private static __$_layer : lib9.FollowerLayer;
    static get _layer() : lib9.FollowerLayer { 
        return this.__$_layer;
    }
    static set _layer(__$value : lib9.FollowerLayer)  { 
        this.__$_layer = __$value;
    }

    private static __$_origin : any;
    static get _origin() : any { 
        return this.__$_origin;
    }
    static set _origin(__$value : any)  { 
        this.__$_origin = __$value;
    }

    static set origin(value : any) {
        if (op(Op.EQUALS,properties._origin,value)) return;
        properties._origin = value;
        markNeedsPaint();
        markNeedsSemanticsUpdate();
    }
    static get alignment() : lib19.AlignmentGeometry {
        return properties._alignment;
    }
    private static __$_alignment : lib19.AlignmentGeometry;
    static get _alignment() : lib19.AlignmentGeometry { 
        return this.__$_alignment;
    }
    static set _alignment(__$value : lib19.AlignmentGeometry)  { 
        this.__$_alignment = __$value;
    }

    static set alignment(value : lib19.AlignmentGeometry) {
        if (op(Op.EQUALS,properties._alignment,value)) return;
        properties._alignment = value;
        markNeedsPaint();
        markNeedsSemanticsUpdate();
    }
    static get textDirection() : any {
        return properties._textDirection;
    }
    private static __$_textDirection : any;
    static get _textDirection() : any { 
        return this.__$_textDirection;
    }
    static set _textDirection(__$value : any)  { 
        this.__$_textDirection = __$value;
    }

    static set textDirection(value : any) {
        if (op(Op.EQUALS,properties._textDirection,value)) return;
        properties._textDirection = value;
        markNeedsPaint();
        markNeedsSemanticsUpdate();
    }
    private static __$transformHitTests : boolean;
    static get transformHitTests() : boolean { 
        return this.__$transformHitTests;
    }
    static set transformHitTests(__$value : boolean)  { 
        this.__$transformHitTests = __$value;
    }

    private static __$_transform : lib5.Matrix4;
    static get _transform() : lib5.Matrix4 { 
        return this.__$_transform;
    }
    static set _transform(__$value : lib5.Matrix4)  { 
        this.__$_transform = __$value;
    }

    static set transform(value : lib5.Matrix4) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,properties._transform,value)) return;
        properties._transform = lib5.Matrix4.copy(value);
        markNeedsPaint();
        markNeedsSemanticsUpdate();
    }
    static get _effectiveTransform() : lib5.Matrix4 {
        let resolvedAlignment : lib19.Alignment = ((_847_)=>(!!_847_)?_847_.resolve(properties.textDirection):null)(properties.alignment);
        if (op(Op.EQUALS,properties._origin,null) && op(Op.EQUALS,resolvedAlignment,null)) return properties._transform;
        let result : lib5.Matrix4 = lib5.Matrix4.identity();
        if (properties._origin != null) result.translate(properties._origin.dx,properties._origin.dy);
        let translation : any;
        if (resolvedAlignment != null) {
            translation = resolvedAlignment.alongSize(size);
            result.translate(translation.dx,translation.dy);
        }
        result.multiply(properties._transform);
        if (resolvedAlignment != null) result.translate(op(Op.NEG,translation.dx),op(Op.NEG,translation.dy));
        if (properties._origin != null) result.translate(op(Op.NEG,properties._origin.dx),op(Op.NEG,properties._origin.dy));
        return result;
    }
    static get alwaysNeedsCompositing() : boolean {
        return true;
    }
    static set showWhenUnlinked(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (properties._showWhenUnlinked == value) return;
        properties._showWhenUnlinked = value;
        markNeedsPaint();
    }
    static set offset(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,properties._offset,value)) return;
        properties._offset = value;
        markNeedsPaint();
    }
    static get alwaysNeedsCompositing() : boolean {
        return true;
    }
    static set link(value : lib9.LayerLink) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,properties._link,value)) return;
        properties._link = value;
        markNeedsPaint();
    }
    private static __$_showWhenUnlinked : boolean;
    static get _showWhenUnlinked() : boolean { 
        return this.__$_showWhenUnlinked;
    }
    static set _showWhenUnlinked(__$value : boolean)  { 
        this.__$_showWhenUnlinked = __$value;
    }

    private static __$_offset : any;
    static get _offset() : any { 
        return this.__$_offset;
    }
    static set _offset(__$value : any)  { 
        this.__$_offset = __$value;
    }

    static get showWhenUnlinked() : boolean {
        return properties._showWhenUnlinked;
    }
    static set link(value : lib9.LayerLink) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,properties._link,value)) return;
        properties._link = value;
        markNeedsPaint();
    }
    static get offset() : any {
        return properties._offset;
    }
    private static __$_link : lib9.LayerLink;
    static get _link() : lib9.LayerLink { 
        return this.__$_link;
    }
    static set _link(__$value : lib9.LayerLink)  { 
        this.__$_link = __$value;
    }

    private static __$_link : lib9.LayerLink;
    static get _link() : lib9.LayerLink { 
        return this.__$_link;
    }
    static set _link(__$value : lib9.LayerLink)  { 
        this.__$_link = __$value;
    }

    static get link() : lib9.LayerLink {
        return properties._link;
    }
    static get link() : lib9.LayerLink {
        return properties._link;
    }
}
