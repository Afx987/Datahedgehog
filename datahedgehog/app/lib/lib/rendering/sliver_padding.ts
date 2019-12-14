/** Library asset:datahedgehog_monitor/lib/lib/rendering/sliver_padding.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./sliver";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib6 from "./object";
import * as math from "@dart2ts/dart/math";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";
import * as lib9 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export var _resolve : () => any = () : any =>  {
    if (properties._resolvedPadding != null) return;
    properties._resolvedPadding = properties.padding.resolve(properties.textDirection);
    /* TODO (AssertStatementImpl) : assert (_resolvedPadding.isNonNegative); */;
};
export var _markNeedResolution : () => any = () : any =>  {
    properties._resolvedPadding = null;
    markNeedsLayout();
};
export var setupParentData : (child : lib6.RenderObject) => any = (child : lib6.RenderObject) : any =>  {
    if (isNot(child.parentData, lib3.SliverPhysicalParentData)) child.parentData = lib3.SliverPhysicalParentData();
};
export var performLayout : () => any = () : any =>  {
    _resolve();
    /* TODO (AssertStatementImpl) : assert (_resolvedPadding != null); */;
    let beforePadding : double = this.beforePadding;
    let afterPadding : double = this.afterPadding;
    let mainAxisPadding : double = this.mainAxisPadding;
    let crossAxisPadding : double = this.crossAxisPadding;
    if (op(Op.EQUALS,child,null)) {
        geometry = lib3.SliverGeometry({
            scrollExtent : mainAxisPadding,paintExtent : math.min(mainAxisPadding,constraints.remainingPaintExtent),maxPaintExtent : mainAxisPadding});
        return;
    }
    child.layout(constraints.copyWith({
        scrollOffset : math.max(0.0,op(Op.MINUS,constraints.scrollOffset,beforePadding)),cacheOrigin : math.min(0.0,op(Op.PLUS,constraints.cacheOrigin,beforePadding)),overlap : 0.0,remainingPaintExtent : op(Op.MINUS,constraints.remainingPaintExtent,calculatePaintOffset(constraints,{
            from : 0.0,to : beforePadding})),remainingCacheExtent : op(Op.MINUS,constraints.remainingCacheExtent,calculateCacheOffset(constraints,{
            from : 0.0,to : beforePadding})),crossAxisExtent : math.max(0.0,op(Op.MINUS,constraints.crossAxisExtent,crossAxisPadding))}),{
        parentUsesSize : true});
    let childLayoutGeometry : lib3.SliverGeometry = child.geometry;
    if (childLayoutGeometry.scrollOffsetCorrection != null) {
        geometry = lib3.SliverGeometry({
            scrollOffsetCorrection : childLayoutGeometry.scrollOffsetCorrection});
        return;
    }
    let beforePaddingPaintExtent : double = calculatePaintOffset(constraints,{
        from : 0.0,to : beforePadding});
    let afterPaddingPaintExtent : double = calculatePaintOffset(constraints,{
        from : beforePadding + childLayoutGeometry.scrollExtent,to : mainAxisPadding + childLayoutGeometry.scrollExtent});
    let mainAxisPaddingPaintExtent : double = beforePaddingPaintExtent + afterPaddingPaintExtent;
    let beforePaddingCacheExtent : double = calculateCacheOffset(constraints,{
        from : 0.0,to : beforePadding});
    let afterPaddingCacheExtent : double = calculateCacheOffset(constraints,{
        from : beforePadding + childLayoutGeometry.scrollExtent,to : mainAxisPadding + childLayoutGeometry.scrollExtent});
    let mainAxisPaddingCacheExtent : double = afterPaddingCacheExtent + beforePaddingCacheExtent;
    let paintExtent : double = math.min(beforePaddingPaintExtent + math.max(childLayoutGeometry.paintExtent,op(Op.PLUS,childLayoutGeometry.layoutExtent,afterPaddingPaintExtent)),constraints.remainingPaintExtent);
    geometry = lib3.SliverGeometry({
        scrollExtent : mainAxisPadding + childLayoutGeometry.scrollExtent,paintExtent : paintExtent,layoutExtent : math.min(mainAxisPaddingPaintExtent + childLayoutGeometry.layoutExtent,paintExtent),cacheExtent : math.min(mainAxisPaddingCacheExtent + childLayoutGeometry.cacheExtent,constraints.remainingCacheExtent),maxPaintExtent : mainAxisPadding + childLayoutGeometry.maxPaintExtent,hitTestExtent : math.max(mainAxisPaddingPaintExtent + childLayoutGeometry.paintExtent,beforePaddingPaintExtent + childLayoutGeometry.hitTestExtent),hasVisualOverflow : childLayoutGeometry.hasVisualOverflow});
    let childParentData : lib3.SliverPhysicalParentData = child.parentData;
    /* TODO (AssertStatementImpl) : assert (constraints.axisDirection != null); */;
    /* TODO (AssertStatementImpl) : assert (constraints.growthDirection != null); */;
    switch (lib3.applyGrowthDirectionToAxisDirection(constraints.axisDirection,constraints.growthDirection)) {
        case lib5.AxisDirection.up:
            childParentData.paintOffset = Offset(properties._resolvedPadding.left,calculatePaintOffset(constraints,{
                from : properties._resolvedPadding.bottom + childLayoutGeometry.scrollExtent,to : properties._resolvedPadding.bottom + childLayoutGeometry.scrollExtent + properties._resolvedPadding.top}));
            break;
        case lib5.AxisDirection.right:
            childParentData.paintOffset = Offset(calculatePaintOffset(constraints,{
                from : 0.0,to : properties._resolvedPadding.left}),properties._resolvedPadding.top);
            break;
        case lib5.AxisDirection.down:
            childParentData.paintOffset = Offset(properties._resolvedPadding.left,calculatePaintOffset(constraints,{
                from : 0.0,to : properties._resolvedPadding.top}));
            break;
        case lib5.AxisDirection.left:
            childParentData.paintOffset = Offset(calculatePaintOffset(constraints,{
                from : properties._resolvedPadding.right + childLayoutGeometry.scrollExtent,to : properties._resolvedPadding.right + childLayoutGeometry.scrollExtent + properties._resolvedPadding.left}),properties._resolvedPadding.top);
            break;
    }
    /* TODO (AssertStatementImpl) : assert (childParentData.paintOffset != null); */;
    /* TODO (AssertStatementImpl) : assert (beforePadding == this.beforePadding); */;
    /* TODO (AssertStatementImpl) : assert (afterPadding == this.afterPadding); */;
    /* TODO (AssertStatementImpl) : assert (mainAxisPadding == this.mainAxisPadding); */;
    /* TODO (AssertStatementImpl) : assert (crossAxisPadding == this.crossAxisPadding); */;
};
export var hitTestChildren : (result : lib8.HitTestResult,_namedArguments? : {mainAxisPosition? : double,crossAxisPosition? : double}) => boolean = (result : lib8.HitTestResult,_namedArguments? : {mainAxisPosition? : double,crossAxisPosition? : double}) : boolean =>  {
    let {mainAxisPosition,crossAxisPosition} = Object.assign({
    }, _namedArguments );
    if (child != null && op(Op.GT,child.geometry.hitTestExtent,0.0)) return child.hitTest(result,{
        mainAxisPosition : mainAxisPosition - childMainAxisPosition(child),crossAxisPosition : crossAxisPosition - childCrossAxisPosition(child)});
    return false;
};
export var childMainAxisPosition : (child : lib3.RenderSliver) => double = (child : lib3.RenderSliver) : double =>  {
    /* TODO (AssertStatementImpl) : assert (child != null); */;
    /* TODO (AssertStatementImpl) : assert (child == this.child); */;
    return calculatePaintOffset(constraints,{
        from : 0.0,to : properties.beforePadding});
};
export var childCrossAxisPosition : (child : lib3.RenderSliver) => double = (child : lib3.RenderSliver) : double =>  {
    /* TODO (AssertStatementImpl) : assert (child != null); */;
    /* TODO (AssertStatementImpl) : assert (child == this.child); */;
    /* TODO (AssertStatementImpl) : assert (constraints != null); */;
    /* TODO (AssertStatementImpl) : assert (constraints.axisDirection != null); */;
    /* TODO (AssertStatementImpl) : assert (constraints.growthDirection != null); */;
    /* TODO (AssertStatementImpl) : assert (_resolvedPadding != null); */;
    switch (lib3.applyGrowthDirectionToAxisDirection(constraints.axisDirection,constraints.growthDirection)) {
        case lib5.AxisDirection.up:
        case lib5.AxisDirection.down:
            return properties._resolvedPadding.left;
        case lib5.AxisDirection.left:
        case lib5.AxisDirection.right:
            return properties._resolvedPadding.top;
    }
    return null;
};
export var childScrollOffset : (child : lib6.RenderObject) => double = (child : lib6.RenderObject) : double =>  {
    /* TODO (AssertStatementImpl) : assert (child.parent == this); */;
    return properties.beforePadding;
};
export var applyPaintTransform : (child : lib6.RenderObject,transform : lib9.Matrix4) => any = (child : lib6.RenderObject,transform : lib9.Matrix4) : any =>  {
    /* TODO (AssertStatementImpl) : assert (child != null); */;
    /* TODO (AssertStatementImpl) : assert (child == this.child); */;
    let childParentData : lib3.SliverPhysicalParentData = child.parentData;
    childParentData.applyPaintTransform(transform);
};
export var paint : (context : lib6.PaintingContext,offset : any) => any = (context : lib6.PaintingContext,offset : any) : any =>  {
    if (child != null && child.geometry.visible) {
        let childParentData : lib3.SliverPhysicalParentData = child.parentData;
        context.paintChild(child,op(Op.PLUS,offset,childParentData.paintOffset));
    }
};
export var debugPaint : (context : lib6.PaintingContext,offset : any) => any = (context : lib6.PaintingContext,offset : any) : any =>  {
    super.debugPaint(context,offset);
    /* TODO (AssertStatementImpl) : assert (() {if (debugPaintSizeEnabled) {final Size parentSize = getAbsoluteSizeRelativeToOrigin(); final Rect outerRect = offset & parentSize; Size childSize; Rect innerRect; if (child != null) {childSize = child.getAbsoluteSizeRelativeToOrigin(); final SliverPhysicalParentData childParentData = child.parentData; innerRect = (offset + childParentData.paintOffset) & childSize; assert (innerRect.top >= outerRect.top); assert (innerRect.left >= outerRect.left); assert (innerRect.right <= outerRect.right); assert (innerRect.bottom <= outerRect.bottom);} debugPaintPadding(context.canvas, outerRect, innerRect);} return true;}()); */;
};
export var debugFillProperties : (properties : lib10.DiagnosticPropertiesBuilder) => any = (properties : lib10.DiagnosticPropertiesBuilder) : any =>  {
    super.debugFillProperties(properties);
    properties.add(lib10.DiagnosticsProperty('padding',properties.padding));
    properties.add(lib10.EnumProperty('textDirection',properties.textDirection,{
        defaultValue : null}));
};
export namespace RenderSliverPadding {
    export type Constructors = lib3.RenderSliver.Constructors | 'RenderSliverPadding';
    export type Interface = Omit<RenderSliverPadding, Constructors>;
}
@DartClass
@With(any)
export class RenderSliverPadding extends lib3.RenderSliver implements any.Interface {
    constructor(_namedArguments? : {padding? : lib4.EdgeInsetsGeometry,textDirection? : any,child? : lib3.RenderSliver}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderSliverPadding(_namedArguments? : {padding? : lib4.EdgeInsetsGeometry,textDirection? : any,child? : lib3.RenderSliver}) {
        let {padding,textDirection,child} = Object.assign({
        }, _namedArguments );
        this._padding = properties.padding;
        this._textDirection = properties.textDirection;
        this.child = this.child;
        this.assert = assert;
    }
     : any;

     : any;

    _padding;
    _textDirection;

    child;

}

export class properties {
    private static __$_resolvedPadding : lib4.EdgeInsets;
    static get _resolvedPadding() : lib4.EdgeInsets { 
        return this.__$_resolvedPadding;
    }
    static set _resolvedPadding(__$value : lib4.EdgeInsets)  { 
        this.__$_resolvedPadding = __$value;
    }

    static get padding() : lib4.EdgeInsetsGeometry {
        return properties._padding;
    }
    private static __$_padding : lib4.EdgeInsetsGeometry;
    static get _padding() : lib4.EdgeInsetsGeometry { 
        return this.__$_padding;
    }
    static set _padding(__$value : lib4.EdgeInsetsGeometry)  { 
        this.__$_padding = __$value;
    }

    static set padding(value : lib4.EdgeInsetsGeometry) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        /* TODO (AssertStatementImpl) : assert (padding.isNonNegative); */;
        if (op(Op.EQUALS,properties._padding,value)) return;
        properties._padding = value;
        _markNeedResolution();
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
        _markNeedResolution();
    }
    static get beforePadding() : double {
        /* TODO (AssertStatementImpl) : assert (constraints != null); */;
        /* TODO (AssertStatementImpl) : assert (constraints.axisDirection != null); */;
        /* TODO (AssertStatementImpl) : assert (constraints.growthDirection != null); */;
        /* TODO (AssertStatementImpl) : assert (_resolvedPadding != null); */;
        switch (lib3.applyGrowthDirectionToAxisDirection(constraints.axisDirection,constraints.growthDirection)) {
            case lib5.AxisDirection.up:
                return properties._resolvedPadding.bottom;
            case lib5.AxisDirection.right:
                return properties._resolvedPadding.left;
            case lib5.AxisDirection.down:
                return properties._resolvedPadding.top;
            case lib5.AxisDirection.left:
                return properties._resolvedPadding.right;
        }
        return null;
    }
    static get afterPadding() : double {
        /* TODO (AssertStatementImpl) : assert (constraints != null); */;
        /* TODO (AssertStatementImpl) : assert (constraints.axisDirection != null); */;
        /* TODO (AssertStatementImpl) : assert (constraints.growthDirection != null); */;
        /* TODO (AssertStatementImpl) : assert (_resolvedPadding != null); */;
        switch (lib3.applyGrowthDirectionToAxisDirection(constraints.axisDirection,constraints.growthDirection)) {
            case lib5.AxisDirection.up:
                return properties._resolvedPadding.top;
            case lib5.AxisDirection.right:
                return properties._resolvedPadding.right;
            case lib5.AxisDirection.down:
                return properties._resolvedPadding.bottom;
            case lib5.AxisDirection.left:
                return properties._resolvedPadding.left;
        }
        return null;
    }
    static get mainAxisPadding() : double {
        /* TODO (AssertStatementImpl) : assert (constraints != null); */;
        /* TODO (AssertStatementImpl) : assert (constraints.axis != null); */;
        /* TODO (AssertStatementImpl) : assert (_resolvedPadding != null); */;
        return properties._resolvedPadding.along(constraints.axis);
    }
    static get crossAxisPadding() : double {
        /* TODO (AssertStatementImpl) : assert (constraints != null); */;
        /* TODO (AssertStatementImpl) : assert (constraints.axis != null); */;
        /* TODO (AssertStatementImpl) : assert (_resolvedPadding != null); */;
        switch (constraints.axis) {
            case lib5.Axis.horizontal:
                return properties._resolvedPadding.vertical;
            case lib5.Axis.vertical:
                return properties._resolvedPadding.horizontal;
        }
        return null;
    }
}
