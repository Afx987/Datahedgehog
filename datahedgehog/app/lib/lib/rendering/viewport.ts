/** Library asset:datahedgehog_monitor/lib/lib/rendering/viewport.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./object";
import * as lib4 from "./box";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib6 from "./viewport_offset";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/semantics/semantics";
import * as lib8 from "./sliver";
import * as math from "@dart2ts/dart/math";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";
import * as lib11 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/painting/matrix_utils";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/animation/curves";

export var debugFillProperties : (properties : lib13.DiagnosticPropertiesBuilder) => any = (properties : lib13.DiagnosticPropertiesBuilder) : any =>  {
    super.debugFillProperties(properties);
    properties.add(lib13.DoubleProperty('anchor',properties.anchor));
};
export var setupParentData : (child : lib3.RenderObject) => any = (child : lib3.RenderObject) : any =>  {
    if (isNot(child.parentData, lib8.SliverPhysicalContainerParentData)) child.parentData = lib8.SliverPhysicalContainerParentData();
};
export var labelForChild : (index : number) => string = (index : number) : string =>  {
    if (index == 0) return 'center child';
    return `child ${index}`;
};
export var performResize : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (() {if (!constraints.hasBoundedHeight || !constraints.hasBoundedWidth) {switch (axis) {case Axis.vertical: if (!constraints.hasBoundedHeight) {throw FlutterError('Vertical viewport was given unbounded height.\n' 'Viewports expand in the scrolling direction to fill their container.' 'In this case, a vertical viewport was given an unlimited amount of ' 'vertical space in which to expand. This situation typically happens ' 'when a scrollable widget is nested inside another scrollable widget.\n' 'If this widget is always nested in a scrollable widget there ' 'is no need to use a viewport because there will always be enough ' 'vertical space for the children. In this case, consider using a ' 'Column instead. Otherwise, consider using the "shrinkWrap" property ' '(or a ShrinkWrappingViewport) to size the height of the viewport ' 'to the sum of the heights of its children.');} if (!constraints.hasBoundedWidth) {throw FlutterError('Vertical viewport was given unbounded width.\n' 'Viewports expand in the cross axis to fill their container and ' 'constrain their children to match their extent in the cross axis. ' 'In this case, a vertical viewport was given an unlimited amount of ' 'horizontal space in which to expand.');} break; case Axis.horizontal: if (!constraints.hasBoundedWidth) {throw FlutterError('Horizontal viewport was given unbounded width.\n' 'Viewports expand in the scrolling direction to fill their container.' 'In this case, a horizontal viewport was given an unlimited amount of ' 'horizontal space in which to expand. This situation typically happens ' 'when a scrollable widget is nested inside another scrollable widget.\n' 'If this widget is always nested in a scrollable widget there ' 'is no need to use a viewport because there will always be enough ' 'horizontal space for the children. In this case, consider using a ' 'Row instead. Otherwise, consider using the "shrinkWrap" property ' '(or a ShrinkWrappingViewport) to size the width of the viewport ' 'to the sum of the widths of its children.');} if (!constraints.hasBoundedHeight) {throw FlutterError('Horizontal viewport was given unbounded height.\n' 'Viewports expand in the cross axis to fill their container and ' 'constrain their children to match their extent in the cross axis. ' 'In this case, a horizontal viewport was given an unlimited amount of ' 'vertical space in which to expand.');} break;}} return true;}()); */;
    size = constraints.biggest;
    switch (axis) {
        case lib5.Axis.vertical:
            offset.applyViewportDimension(size.height);
            break;
        case lib5.Axis.horizontal:
            offset.applyViewportDimension(size.width);
            break;
    }
};
export var performLayout : () => any = () : any =>  {
    if (op(Op.EQUALS,properties.center,null)) {
        /* TODO (AssertStatementImpl) : assert (firstChild == null); */;
        properties._minScrollExtent = 0.0;
        properties._maxScrollExtent = 0.0;
        properties._hasVisualOverflow = false;
        offset.applyContentDimensions(0.0,0.0);
        return;
    }
    /* TODO (AssertStatementImpl) : assert (center.parent == this); */;
    let mainAxisExtent : double;
    let crossAxisExtent : double;
    switch (axis) {
        case lib5.Axis.vertical:
            mainAxisExtent = size.height;
            crossAxisExtent = size.width;
            break;
        case lib5.Axis.horizontal:
            mainAxisExtent = size.width;
            crossAxisExtent = size.height;
            break;
    }
    let centerOffsetAdjustment : double = properties.center.centerOffsetAdjustment;
    let correction : double;
    let count : number = 0;
    do{
        /* TODO (AssertStatementImpl) : assert (offset.pixels != null); */;
        correction = _attemptLayout(mainAxisExtent,crossAxisExtent,op(Op.PLUS,offset.pixels,centerOffsetAdjustment));
        if (correction != 0.0) {
            offset.correctBy(correction);
        }else {
            if (offset.applyContentDimensions(math.min(0.0,properties._minScrollExtent + mainAxisExtent * properties.anchor),math.max(0.0,properties._maxScrollExtent - mainAxisExtent * (1.0 - properties.anchor)))) break;
        }
        count += 1;
    } while (count < properties._maxLayoutCycles);
    /* TODO (AssertStatementImpl) : assert (() {if (count >= _maxLayoutCycles) {assert (count != 1); throw FlutterError('A RenderViewport exceeded its maximum number of layout cycles.\n' 'RenderViewport render objects, during layout, can retry if either their ' 'slivers or their ViewportOffset decide that the offset should be corrected ' 'to take into account information collected during that layout.\n' 'In the case of this RenderViewport object, however, this happened $count ' 'times and still there was no consensus on the scroll offset. This usually ' 'indicates a bug. Specifically, it means that one of the following three ' 'problems is being experienced by the RenderViewport object:\n' ' * One of the RenderSliver children or the ViewportOffset have a bug such' ' that they always think that they need to correct the offset regardless.\n' ' * Some combination of the RenderSliver children and the ViewportOffset' ' have a bad interaction such that one applies a correction then another' ' applies a reverse correction, leading to an infinite loop of corrections.\n' ' * There is a pathological case that would eventually resolve, but it is' ' so complicated that it cannot be resolved in any reasonable number of' ' layout passes.');} return true;}()); */;
};
export var _attemptLayout : (mainAxisExtent : double,crossAxisExtent : double,correctedOffset : double) => double = (mainAxisExtent : double,crossAxisExtent : double,correctedOffset : double) : double =>  {
    /* TODO (AssertStatementImpl) : assert (!mainAxisExtent.isNaN); */;
    /* TODO (AssertStatementImpl) : assert (mainAxisExtent >= 0.0); */;
    /* TODO (AssertStatementImpl) : assert (crossAxisExtent.isFinite); */;
    /* TODO (AssertStatementImpl) : assert (crossAxisExtent >= 0.0); */;
    /* TODO (AssertStatementImpl) : assert (correctedOffset.isFinite); */;
    properties._minScrollExtent = 0.0;
    properties._maxScrollExtent = 0.0;
    properties._hasVisualOverflow = false;
    let centerOffset : double = mainAxisExtent * properties.anchor - correctedOffset;
    let reverseDirectionRemainingPaintExtent : double = new core.DartDouble(centerOffset).clamp(0.0,mainAxisExtent);
    let forwardDirectionRemainingPaintExtent : double = new core.DartDouble((mainAxisExtent - centerOffset)).clamp(0.0,mainAxisExtent);
    let fullCacheExtent : double = mainAxisExtent + 2 * cacheExtent;
    let centerCacheOffset : double = centerOffset + cacheExtent;
    let reverseDirectionRemainingCacheExtent : double = new core.DartDouble(centerCacheOffset).clamp(0.0,fullCacheExtent);
    let forwardDirectionRemainingCacheExtent : double = new core.DartDouble((fullCacheExtent - centerCacheOffset)).clamp(0.0,fullCacheExtent);
    let leadingNegativeChild : lib8.RenderSliver = childBefore(properties.center);
    if (leadingNegativeChild != null) {
        let result : double = layoutChildSequence({
            child : leadingNegativeChild,scrollOffset : op(Op.MINUS,math.max(mainAxisExtent,centerOffset),mainAxisExtent),overlap : 0.0,layoutOffset : forwardDirectionRemainingPaintExtent,remainingPaintExtent : reverseDirectionRemainingPaintExtent,mainAxisExtent : mainAxisExtent,crossAxisExtent : crossAxisExtent,growthDirection : lib8.GrowthDirection.reverse,advance : childBefore,remainingCacheExtent : reverseDirectionRemainingCacheExtent,cacheOrigin : new core.DartDouble((mainAxisExtent - centerOffset)).clamp(op(Op.NEG,cacheExtent),0.0)});
        if (result != 0.0) return -result;
    }
    return layoutChildSequence({
        child : properties.center,scrollOffset : math.max(0.0,-centerOffset),overlap : op(Op.EQUALS,leadingNegativeChild,null) ? math.min(0.0,-centerOffset) : 0.0,layoutOffset : centerOffset >= mainAxisExtent ? centerOffset : reverseDirectionRemainingPaintExtent,remainingPaintExtent : forwardDirectionRemainingPaintExtent,mainAxisExtent : mainAxisExtent,crossAxisExtent : crossAxisExtent,growthDirection : lib8.GrowthDirection.forward,advance : childAfter,remainingCacheExtent : forwardDirectionRemainingCacheExtent,cacheOrigin : new core.DartDouble(centerOffset).clamp(op(Op.NEG,cacheExtent),0.0)});
};
export var updateChildLayoutOffset : (child : lib8.RenderSliver,layoutOffset : double,growthDirection : lib8.GrowthDirection) => any = (child : lib8.RenderSliver,layoutOffset : double,growthDirection : lib8.GrowthDirection) : any =>  {
    let childParentData : lib8.SliverPhysicalParentData = child.parentData;
    childParentData.paintOffset = computeAbsolutePaintOffset(child,layoutOffset,growthDirection);
};
export var paintOffsetOf : (child : lib8.RenderSliver) => any = (child : lib8.RenderSliver) : any =>  {
    let childParentData : lib8.SliverPhysicalParentData = child.parentData;
    return childParentData.paintOffset;
};
export var scrollOffsetOf : (child : lib8.RenderSliver,scrollOffsetWithinChild : double) => double = (child : lib8.RenderSliver,scrollOffsetWithinChild : double) : double =>  {
    /* TODO (AssertStatementImpl) : assert (child.parent == this); */;
    let growthDirection : lib8.GrowthDirection = child.constraints.growthDirection;
    /* TODO (AssertStatementImpl) : assert (growthDirection != null); */;
    switch (growthDirection) {
        case lib8.GrowthDirection.forward:
            let scrollOffsetToChild : double = 0.0;
            let current : lib8.RenderSliver = properties.center;
            while (current != child){
                scrollOffsetToChild += current.geometry.scrollExtent;
                current = childAfter(current);
            }
            return scrollOffsetToChild + scrollOffsetWithinChild;
        case lib8.GrowthDirection.reverse:
            let scrollOffsetToChild : double = 0.0;
            let current : lib8.RenderSliver = childBefore(properties.center);
            while (current != child){
                scrollOffsetToChild -= current.geometry.scrollExtent;
                current = childBefore(current);
            }
            return scrollOffsetToChild - scrollOffsetWithinChild;
    }
    return null;
};
export var maxScrollObstructionExtentBefore : (child : lib8.RenderSliver) => double = (child : lib8.RenderSliver) : double =>  {
    /* TODO (AssertStatementImpl) : assert (child.parent == this); */;
    let growthDirection : lib8.GrowthDirection = child.constraints.growthDirection;
    /* TODO (AssertStatementImpl) : assert (growthDirection != null); */;
    switch (growthDirection) {
        case lib8.GrowthDirection.forward:
            let pinnedExtent : double = 0.0;
            let current : lib8.RenderSliver = properties.center;
            while (current != child){
                pinnedExtent += current.geometry.maxScrollObstructionExtent;
                current = childAfter(current);
            }
            return pinnedExtent;
        case lib8.GrowthDirection.reverse:
            let pinnedExtent : double = 0.0;
            let current : lib8.RenderSliver = childBefore(properties.center);
            while (current != child){
                pinnedExtent += current.geometry.maxScrollObstructionExtent;
                current = childBefore(current);
            }
            return pinnedExtent;
    }
    return null;
};
export var applyPaintTransform : (child : lib3.RenderObject,transform : lib11.Matrix4) => any = (child : lib3.RenderObject,transform : lib11.Matrix4) : any =>  {
    /* TODO (AssertStatementImpl) : assert (child != null); */;
    let childParentData : lib8.SliverPhysicalParentData = child.parentData;
    childParentData.applyPaintTransform(transform);
};
export var computeChildMainAxisPosition : (child : lib8.RenderSliver,parentMainAxisPosition : double) => double = (child : lib8.RenderSliver,parentMainAxisPosition : double) : double =>  {
    /* TODO (AssertStatementImpl) : assert (child != null); */;
    /* TODO (AssertStatementImpl) : assert (child.constraints != null); */;
    let childParentData : lib8.SliverPhysicalParentData = child.parentData;
    switch (lib8.applyGrowthDirectionToAxisDirection(child.constraints.axisDirection,child.constraints.growthDirection)) {
        case lib5.AxisDirection.down:
            return parentMainAxisPosition - childParentData.paintOffset.dy;
        case lib5.AxisDirection.right:
            return parentMainAxisPosition - childParentData.paintOffset.dx;
        case lib5.AxisDirection.up:
            return child.geometry.paintExtent - (parentMainAxisPosition - childParentData.paintOffset.dy);
        case lib5.AxisDirection.left:
            return child.geometry.paintExtent - (parentMainAxisPosition - childParentData.paintOffset.dx);
    }
    return 0.0;
};
export var updateOutOfBandData : (growthDirection : lib8.GrowthDirection,childLayoutGeometry : lib8.SliverGeometry) => any = (growthDirection : lib8.GrowthDirection,childLayoutGeometry : lib8.SliverGeometry) : any =>  {
    switch (growthDirection) {
        case lib8.GrowthDirection.forward:
            properties._maxScrollExtent += childLayoutGeometry.scrollExtent;
            break;
        case lib8.GrowthDirection.reverse:
            properties._minScrollExtent -= childLayoutGeometry.scrollExtent;
            break;
    }
    if (childLayoutGeometry.hasVisualOverflow) properties._hasVisualOverflow = true;
};
export namespace RenderAbstractViewport {
    export type Constructors = lib3.RenderObject.Constructors | never;
    export type Interface = Omit<RenderAbstractViewport, Constructors>;
}
@DartClass
export class RenderAbstractViewport extends lib3.RenderObject {
    @namedFactory
    static $_() : RenderAbstractViewport {
        return null;
    }
    static _ : new() => RenderAbstractViewport;

    static of(object : lib3.RenderObject) : RenderAbstractViewport {
        while (object != null){
            if (is(object, RenderAbstractViewport)) return object;
            object = object.parent;
        }
        return null;
    }
    @Abstract
    getOffsetToReveal(target : lib3.RenderObject,alignment : double,_namedArguments? : {rect? : any}) : RevealedOffset{ throw 'abstract'}
    @DartPropertyAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    private static __$defaultCacheExtent : double;
    static get defaultCacheExtent() : double { 
        if (this.__$defaultCacheExtent===undefined) {
            this.__$defaultCacheExtent = 250.0;
        }
        return this.__$defaultCacheExtent;
    }

}

export namespace RenderViewportBase {
    export type Constructors = lib4.RenderBox.Constructors | 'RenderViewportBase';
    export type Interface<ParentDataClass extends any> = Omit<RenderViewportBase<ParentDataClass extends any>, Constructors>;
}
@DartClass
@Implements(RenderAbstractViewport)
@With(any)
export class RenderViewportBase<ParentDataClass extends any> extends lib4.RenderBox implements RenderAbstractViewport.Interface,any.Interface {
    constructor(_namedArguments? : {axisDirection? : lib5.AxisDirection,crossAxisDirection? : lib5.AxisDirection,offset? : lib6.ViewportOffset,cacheExtent? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderViewportBase(_namedArguments? : {axisDirection? : lib5.AxisDirection,crossAxisDirection? : lib5.AxisDirection,offset? : lib6.ViewportOffset,cacheExtent? : double}) {
        let {axisDirection,crossAxisDirection,offset,cacheExtent} = Object.assign({
            "axisDirection" : lib5.AxisDirection.down}, _namedArguments );
        this._axisDirection = this.axisDirection;
        this._crossAxisDirection = this.crossAxisDirection;
        this._offset = this.offset;
        this._cacheExtent = (this.cacheExtent || RenderAbstractViewport.defaultCacheExtent);
        this.assert = assert;
    }
     : any;

     : any;

     : any;

    axisDirectionToAxis(axisDirection : any) {
    }
    axisDirectionToAxis(crossAxisDirection : any) {
    }
    _axisDirection;
    _crossAxisDirection;
    _offset;
    _cacheExtent;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describeSemanticsConfiguration(config : lib7.SemanticsConfiguration) : any {
        super.describeSemanticsConfiguration(config);
        config.addTagForChildren(RenderViewport.useTwoPaneSemantics);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildrenForSemantics(visitor : (child : any) => any) : any {
        this.childrenInPaintOrder.where((sliver : lib8.RenderSliver) =>  {
            return sliver.geometry.visible || op(Op.GT,sliver.geometry.cacheExtent,0.0);
        }).forEach(visitor);
    }
    get axisDirection() : lib5.AxisDirection {
        return this._axisDirection;
    }
    _axisDirection : lib5.AxisDirection;

    set axisDirection(value : lib5.AxisDirection) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,value,this._axisDirection)) return;
        this._axisDirection = value;
        this.markNeedsLayout();
    }
    get crossAxisDirection() : lib5.AxisDirection {
        return this._crossAxisDirection;
    }
    _crossAxisDirection : lib5.AxisDirection;

    set crossAxisDirection(value : lib5.AxisDirection) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,value,this._crossAxisDirection)) return;
        this._crossAxisDirection = value;
        this.markNeedsLayout();
    }
    get axis() : lib5.Axis {
        return this.axisDirectionToAxis(this.axisDirection);
    }
    get offset() : lib6.ViewportOffset {
        return this._offset;
    }
    _offset : lib6.ViewportOffset;

    set offset(value : lib6.ViewportOffset) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,value,this._offset)) return;
        if (this.attached) this._offset.removeListener(this.markNeedsLayout.bind(this));
        this._offset = value;
        if (this.attached) this._offset.addListener(this.markNeedsLayout.bind(this));
        this.markNeedsLayout();
    }
    get cacheExtent() : double {
        return this._cacheExtent;
    }
    _cacheExtent : double;

    set cacheExtent(value : double) {
        value = (value || RenderAbstractViewport.defaultCacheExtent);
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (value == this._cacheExtent) return;
        this._cacheExtent = value;
        this.markNeedsLayout();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    attach(owner : lib3.PipelineOwner) : any {
        super.attach(owner);
        this._offset.addListener(this.markNeedsLayout.bind(this));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    detach() : any {
        this._offset.removeListener(this.markNeedsLayout.bind(this));
        super.detach();
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    debugThrowIfNotCheckingIntrinsics() : boolean {
        /* TODO (AssertStatementImpl) : assert (() {if (!RenderObject.debugCheckingIntrinsics) {assert (this is! RenderShrinkWrappingViewport); throw FlutterError('$runtimeType does not support returning intrinsic dimensions.\n' 'Calculating the intrinsic dimensions would require instantiating every child of ' 'the viewport, which defeats the point of viewports being lazy.\n' 'If you are merely trying to shrink-wrap the viewport in the main axis direction, ' 'consider a RenderShrinkWrappingViewport render object (ShrinkWrappingViewport widget), ' 'which achieves that effect without implementing the intrinsic dimension API.');} return true;}()); */;
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicWidth(height : double) : double {
        /* TODO (AssertStatementImpl) : assert (debugThrowIfNotCheckingIntrinsics()); */;
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicWidth(height : double) : double {
        /* TODO (AssertStatementImpl) : assert (debugThrowIfNotCheckingIntrinsics()); */;
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicHeight(width : double) : double {
        /* TODO (AssertStatementImpl) : assert (debugThrowIfNotCheckingIntrinsics()); */;
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicHeight(width : double) : double {
        /* TODO (AssertStatementImpl) : assert (debugThrowIfNotCheckingIntrinsics()); */;
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isRepaintBoundary() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    layoutChildSequence(_namedArguments? : {child? : lib8.RenderSliver,scrollOffset? : double,overlap? : double,layoutOffset? : double,remainingPaintExtent? : double,mainAxisExtent? : double,crossAxisExtent? : double,growthDirection? : lib8.GrowthDirection,advance? : <ParentDataClass extends any>(child : lib8.RenderSliver) => lib8.RenderSliver,remainingCacheExtent? : double,cacheOrigin? : double}) : double {
        let {child,scrollOffset,overlap,layoutOffset,remainingPaintExtent,mainAxisExtent,crossAxisExtent,growthDirection,advance,remainingCacheExtent,cacheOrigin} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (scrollOffset.isFinite); */;
        /* TODO (AssertStatementImpl) : assert (scrollOffset >= 0.0); */;
        let initialLayoutOffset : double = layoutOffset;
        let adjustedUserScrollDirection : lib6.ScrollDirection = lib8.applyGrowthDirectionToScrollDirection(this.offset.userScrollDirection,growthDirection);
        /* TODO (AssertStatementImpl) : assert (adjustedUserScrollDirection != null); */;
        let maxPaintOffset : double = layoutOffset + overlap;
        let precedingScrollExtent : double = 0.0;
        while (child != null){
            let sliverScrollOffset : double = scrollOffset <= 0.0 ? 0.0 : scrollOffset;
            let correctedCacheOrigin : double = math.max(cacheOrigin,-sliverScrollOffset);
            let cacheExtentCorrection : double = cacheOrigin - correctedCacheOrigin;
            /* TODO (AssertStatementImpl) : assert (sliverScrollOffset >= correctedCacheOrigin.abs()); */;
            /* TODO (AssertStatementImpl) : assert (correctedCacheOrigin <= 0.0); */;
            /* TODO (AssertStatementImpl) : assert (sliverScrollOffset >= 0.0); */;
            /* TODO (AssertStatementImpl) : assert (cacheExtentCorrection <= 0.0); */;
            child.layout(lib8.SliverConstraints({
                axisDirection : this.axisDirection,growthDirection : growthDirection,userScrollDirection : adjustedUserScrollDirection,scrollOffset : sliverScrollOffset,precedingScrollExtent : precedingScrollExtent,overlap : maxPaintOffset - layoutOffset,remainingPaintExtent : math.max(0.0,remainingPaintExtent - layoutOffset + initialLayoutOffset),crossAxisExtent : crossAxisExtent,crossAxisDirection : this.crossAxisDirection,viewportMainAxisExtent : mainAxisExtent,remainingCacheExtent : math.max(0.0,remainingCacheExtent + cacheExtentCorrection),cacheOrigin : correctedCacheOrigin}),{
                parentUsesSize : true});
            let childLayoutGeometry : lib8.SliverGeometry = child.geometry;
            /* TODO (AssertStatementImpl) : assert (childLayoutGeometry.debugAssertIsValid()); */;
            if (childLayoutGeometry.scrollOffsetCorrection != null) return childLayoutGeometry.scrollOffsetCorrection;
            let effectiveLayoutOffset : double = layoutOffset + childLayoutGeometry.paintOrigin;
            if (childLayoutGeometry.visible || scrollOffset > 0) {
                this.updateChildLayoutOffset(child,effectiveLayoutOffset,growthDirection);
            }else {
                this.updateChildLayoutOffset(child,-scrollOffset + initialLayoutOffset,growthDirection);
            }
            maxPaintOffset = math.max(effectiveLayoutOffset + childLayoutGeometry.paintExtent,maxPaintOffset);
            scrollOffset -= childLayoutGeometry.scrollExtent;
            precedingScrollExtent += childLayoutGeometry.scrollExtent;
            layoutOffset += childLayoutGeometry.layoutExtent;
            if (childLayoutGeometry.cacheExtent != 0.0) {
                remainingCacheExtent -= op(Op.MINUS,childLayoutGeometry.cacheExtent,cacheExtentCorrection);
                cacheOrigin = math.min(correctedCacheOrigin + childLayoutGeometry.cacheExtent,0.0);
            }
            this.updateOutOfBandData(growthDirection,childLayoutGeometry);
            child = advance(child);
        }
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describeApproximatePaintClip(child : lib8.RenderSliver) : any {
        let viewportClip : any = op(Op.BITAND,Offset.zero,this.size);
        if (child.constraints.overlap == 0) {
            return viewportClip;
        }
        let left : double = viewportClip.left;
        let right : double = viewportClip.right;
        let top : double = viewportClip.top;
        let bottom : double = viewportClip.bottom;
        let startOfOverlap : double = child.constraints.viewportMainAxisExtent - child.constraints.remainingPaintExtent;
        let overlapCorrection : double = startOfOverlap + child.constraints.overlap;
        switch (lib8.applyGrowthDirectionToAxisDirection(this.axisDirection,child.constraints.growthDirection)) {
            case lib5.AxisDirection.down:
                top += overlapCorrection;
                break;
            case lib5.AxisDirection.up:
                bottom -= overlapCorrection;
                break;
            case lib5.AxisDirection.right:
                left += overlapCorrection;
                break;
            case lib5.AxisDirection.left:
                right -= overlapCorrection;
                break;
        }
        return Rect.fromLTRB(left,top,right,bottom);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describeSemanticsClip(child : lib8.RenderSliver) : any {
        /* TODO (AssertStatementImpl) : assert (axis != null); */;
        switch (this.axis) {
            case lib5.Axis.vertical:
                return Rect.fromLTRB(this.semanticBounds.left,op(Op.MINUS,this.semanticBounds.top,this.cacheExtent),this.semanticBounds.right,op(Op.PLUS,this.semanticBounds.bottom,this.cacheExtent));
            case lib5.Axis.horizontal:
                return Rect.fromLTRB(op(Op.MINUS,this.semanticBounds.left,this.cacheExtent),this.semanticBounds.top,op(Op.PLUS,this.semanticBounds.right,this.cacheExtent),this.semanticBounds.bottom);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib3.PaintingContext,offset : any) : any {
        if (op(Op.EQUALS,firstChild,null)) return;
        if (this.hasVisualOverflow) {
            context.pushClipRect(this.needsCompositing,offset,op(Op.BITAND,Offset.zero,this.size),this._paintContents.bind(this));
        }else {
            this._paintContents(context,offset);
        }
    }
    _paintContents(context : lib3.PaintingContext,offset : any) : any {
        for(let child of this.childrenInPaintOrder) {
            if (child.geometry.visible) context.paintChild(child,op(Op.PLUS,offset,this.paintOffsetOf(child)));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugPaintSize(context : lib3.PaintingContext,offset : any) : any {
        /* TODO (AssertStatementImpl) : assert (() {super.debugPaintSize(context, offset); final Paint paint = Paint()..style = PaintingStyle.stroke..strokeWidth = 1.0..color = const Color(0xFF00FF00); final Canvas canvas = context.canvas; RenderSliver child = firstChild; while (child != null) {Size size; switch (axis) {case Axis.vertical: size = Size(child.constraints.crossAxisExtent, child.geometry.layoutExtent); break; case Axis.horizontal: size = Size(child.geometry.layoutExtent, child.constraints.crossAxisExtent); break;} assert (size != null); canvas.drawRect(((offset + paintOffsetOf(child)) & size).deflate(0.5), paint); child = childAfter(child);} return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestChildren(result : lib10.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        let mainAxisPosition : double, crossAxisPosition : double;
        switch (this.axis) {
            case lib5.Axis.vertical:
                mainAxisPosition = position.dy;
                crossAxisPosition = position.dx;
                break;
            case lib5.Axis.horizontal:
                mainAxisPosition = position.dx;
                crossAxisPosition = position.dy;
                break;
        }
        /* TODO (AssertStatementImpl) : assert (mainAxisPosition != null); */;
        /* TODO (AssertStatementImpl) : assert (crossAxisPosition != null); */;
        for(let child of this.childrenInHitTestOrder) {
            if (child.geometry.visible && child.hitTest(result,{
                mainAxisPosition : this.computeChildMainAxisPosition(child,mainAxisPosition),crossAxisPosition : crossAxisPosition})) {
                return true;
            }
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getOffsetToReveal(target : lib3.RenderObject,alignment : double,_namedArguments? : {rect? : any}) : RevealedOffset {
        let {rect} = Object.assign({
        }, _namedArguments );
        let leadingScrollOffset : double = 0.0;
        let targetMainAxisExtent : double;
        rect = ( rect ) || ( target.paintBounds );
        let child : lib3.RenderObject = target;
        let pivot : lib4.RenderBox;
        let onlySlivers : boolean = is(target, lib8.RenderSliver);
        while (child.parent != this){
            /* TODO (AssertStatementImpl) : assert (child.parent != null, '$target must be a descendant of $this'); */;
            if (is(child, lib4.RenderBox)) {
                pivot = child;
            }
            if (is(child.parent, lib8.RenderSliver)) {
                let parent : lib8.RenderSliver = child.parent;
                leadingScrollOffset += parent.childScrollOffset(child);
            }else {
                onlySlivers = false;
                leadingScrollOffset = 0.0;
            }
            child = child.parent;
        }
        if (pivot != null) {
            /* TODO (AssertStatementImpl) : assert (pivot.parent != null); */;
            /* TODO (AssertStatementImpl) : assert (pivot.parent != this); */;
            /* TODO (AssertStatementImpl) : assert (pivot != this); */;
            /* TODO (AssertStatementImpl) : assert (pivot.parent is RenderSliver); */;
            let pivotParent : lib8.RenderSliver = pivot.parent;
            let transform : lib11.Matrix4 = target.getTransformTo(pivot);
            let bounds : any = lib12.MatrixUtils.transformRect(transform,rect);
            let growthDirection : lib8.GrowthDirection = pivotParent.constraints.growthDirection;
            switch (lib8.applyGrowthDirectionToAxisDirection(this.axisDirection,growthDirection)) {
                case lib5.AxisDirection.up:
                    let offset : double;
                    switch (growthDirection) {
                        case lib8.GrowthDirection.forward:
                            offset = bounds.bottom;
                            break;
                        case lib8.GrowthDirection.reverse:
                            offset = bounds.top;
                            break;
                    }
                    leadingScrollOffset += op(Op.MINUS,pivot.size.height,offset);
                    targetMainAxisExtent = bounds.height;
                    break;
                case lib5.AxisDirection.right:
                    leadingScrollOffset += bounds.left;
                    targetMainAxisExtent = bounds.width;
                    break;
                case lib5.AxisDirection.down:
                    leadingScrollOffset += bounds.top;
                    targetMainAxisExtent = bounds.height;
                    break;
                case lib5.AxisDirection.left:
                    let offset : double;
                    switch (growthDirection) {
                        case lib8.GrowthDirection.forward:
                            offset = bounds.right;
                            break;
                        case lib8.GrowthDirection.reverse:
                            offset = bounds.left;
                            break;
                    }
                    leadingScrollOffset += op(Op.MINUS,pivot.size.width,offset);
                    targetMainAxisExtent = bounds.width;
                    break;
            }
        }else if (onlySlivers) {
            let targetSliver : lib8.RenderSliver = target;
            targetMainAxisExtent = targetSliver.geometry.scrollExtent;
        }else {
            return RevealedOffset({
                offset : this.offset.pixels,rect : rect});
        }
        /* TODO (AssertStatementImpl) : assert (child.parent == this); */;
        /* TODO (AssertStatementImpl) : assert (child is RenderSliver); */;
        let sliver : lib8.RenderSliver = child;
        let extentOfPinnedSlivers : double = this.maxScrollObstructionExtentBefore(sliver);
        leadingScrollOffset = this.scrollOffsetOf(sliver,leadingScrollOffset);
        switch (sliver.constraints.growthDirection) {
            case lib8.GrowthDirection.forward:
                leadingScrollOffset -= extentOfPinnedSlivers;
                break;
            case lib8.GrowthDirection.reverse:
                break;
        }
        let mainAxisExtent : double;
        switch (this.axis) {
            case lib5.Axis.horizontal:
                mainAxisExtent = op(Op.MINUS,this.size.width,extentOfPinnedSlivers);
                break;
            case lib5.Axis.vertical:
                mainAxisExtent = op(Op.MINUS,this.size.height,extentOfPinnedSlivers);
                break;
        }
        let targetOffset : double = leadingScrollOffset - (mainAxisExtent - targetMainAxisExtent) * alignment;
        let offsetDifference : double = this.offset.pixels - targetOffset;
        let transform : lib11.Matrix4 = target.getTransformTo(this);
        applyPaintTransform(child,transform);
        let targetRect : any = lib12.MatrixUtils.transformRect(transform,rect);
        switch (this.axisDirection) {
            case lib5.AxisDirection.down:
                targetRect = targetRect.translate(0.0,offsetDifference);
                break;
            case lib5.AxisDirection.right:
                targetRect = targetRect.translate(offsetDifference,0.0);
                break;
            case lib5.AxisDirection.up:
                targetRect = targetRect.translate(0.0,-offsetDifference);
                break;
            case lib5.AxisDirection.left:
                targetRect = targetRect.translate(-offsetDifference,0.0);
                break;
        }
        return RevealedOffset({
            offset : targetOffset,rect : targetRect});
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    computeAbsolutePaintOffset(child : lib8.RenderSliver,layoutOffset : double,growthDirection : lib8.GrowthDirection) : any {
        /* TODO (AssertStatementImpl) : assert (hasSize); */;
        /* TODO (AssertStatementImpl) : assert (axisDirection != null); */;
        /* TODO (AssertStatementImpl) : assert (growthDirection != null); */;
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        /* TODO (AssertStatementImpl) : assert (child.geometry != null); */;
        switch (lib8.applyGrowthDirectionToAxisDirection(this.axisDirection,growthDirection)) {
            case lib5.AxisDirection.up:
                return Offset(0.0,op(Op.MINUS,this.size.height,(layoutOffset + child.geometry.paintExtent)));
            case lib5.AxisDirection.right:
                return Offset(layoutOffset,0.0);
            case lib5.AxisDirection.down:
                return Offset(0.0,layoutOffset);
            case lib5.AxisDirection.left:
                return Offset(op(Op.MINUS,this.size.width,(layoutOffset + child.geometry.paintExtent)),0.0);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib13.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib13.EnumProperty('axisDirection',this.axisDirection));
        properties.add(lib13.EnumProperty('crossAxisDirection',this.crossAxisDirection));
        properties.add(lib13.DiagnosticsProperty('offset',this.offset));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugDescribeChildren() : core.DartList<lib13.DiagnosticsNode> {
        let children : core.DartList<lib13.DiagnosticsNode> = new core.DartList.literal<lib13.DiagnosticsNode>();
        let child : lib8.RenderSliver = firstChild;
        if (op(Op.EQUALS,child,null)) return children;
        let count : number = this.indexOfFirstChild;
        while (true){
            children.add(child.toDiagnosticsNode({
                name : this.labelForChild(count)}));
            if (op(Op.EQUALS,child,lastChild)) break;
            count += 1;
            child = childAfter(child);
        }
        return children;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get hasVisualOverflow() : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    updateOutOfBandData(growthDirection : lib8.GrowthDirection,childLayoutGeometry : lib8.SliverGeometry) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    updateChildLayoutOffset(child : lib8.RenderSliver,layoutOffset : double,growthDirection : lib8.GrowthDirection) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    paintOffsetOf(child : lib8.RenderSliver) : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    scrollOffsetOf(child : lib8.RenderSliver,scrollOffsetWithinChild : double) : double{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    maxScrollObstructionExtentBefore(child : lib8.RenderSliver) : double{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    computeChildMainAxisPosition(child : lib8.RenderSliver,parentMainAxisPosition : double) : double{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get indexOfFirstChild() : number{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    labelForChild(index : number) : string{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get childrenInPaintOrder() : core.DartIterable<lib8.RenderSliver>{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @AbstractProperty
    get childrenInHitTestOrder() : core.DartIterable<lib8.RenderSliver>{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    showOnScreen(_namedArguments? : {descendant? : lib3.RenderObject,rect? : any,duration? : core.DartDuration,curve? : lib14.Curve}) : any {
        let {descendant,rect,duration,curve} = Object.assign({
            "duration" : core.DartDuration.zero,
            "curve" : lib14.Curves.ease}, _namedArguments );
        if (!this.offset.allowImplicitScrolling) {
            return super.showOnScreen({
                descendant : descendant,rect : rect,duration : duration,curve : curve});
        }
        let newRect : any = RenderViewportBase.showInViewport({
            descendant : descendant,viewport : this,offset : this.offset,rect : rect,duration : duration,curve : curve});
        super.showOnScreen({
            rect : newRect,duration : duration,curve : curve});
    }
    static showInViewport(_namedArguments? : {descendant? : lib3.RenderObject,rect? : any,viewport? : RenderAbstractViewport,offset? : lib6.ViewportOffset,duration? : core.DartDuration,curve? : lib14.Curve}) : any {
        let {descendant,rect,viewport,offset,duration,curve} = Object.assign({
            "duration" : core.DartDuration.zero,
            "curve" : lib14.Curves.ease}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (viewport != null); */;
        /* TODO (AssertStatementImpl) : assert (offset != null); */;
        if (op(Op.EQUALS,descendant,null)) {
            return rect;
        }
        let leadingEdgeOffset : RevealedOffset = viewport.getOffsetToReveal(descendant,0.0,{
            rect : rect});
        let trailingEdgeOffset : RevealedOffset = viewport.getOffsetToReveal(descendant,1.0,{
            rect : rect});
        let currentOffset : double = offset.pixels;
        let targetOffset : RevealedOffset;
        if (leadingEdgeOffset.offset < trailingEdgeOffset.offset) {
            let leadingEdgeDiff : double = new core.DartDouble((offset.pixels - leadingEdgeOffset.offset)).abs();
            let trailingEdgeDiff : double = new core.DartDouble((offset.pixels - trailingEdgeOffset.offset)).abs();
            targetOffset = leadingEdgeDiff < trailingEdgeDiff ? leadingEdgeOffset : trailingEdgeOffset;
        }else if (currentOffset > leadingEdgeOffset.offset) {
            targetOffset = leadingEdgeOffset;
        }else if (currentOffset < trailingEdgeOffset.offset) {
            targetOffset = trailingEdgeOffset;
        }else {
            let transform : lib11.Matrix4 = descendant.getTransformTo(viewport.parent);
            return lib12.MatrixUtils.transformRect(transform,(rect || descendant.paintBounds));
        }
        /* TODO (AssertStatementImpl) : assert (targetOffset != null); */;
        offset.moveTo(targetOffset.offset,{
            duration : duration,curve : curve});
        return targetOffset.rect;
    }
}

export namespace RevealedOffset {
    export type Constructors = 'RevealedOffset';
    export type Interface = Omit<RevealedOffset, Constructors>;
}
@DartClass
export class RevealedOffset {
    constructor(_namedArguments? : {offset? : double,rect? : any}) {
    }
    @defaultConstructor
    RevealedOffset(_namedArguments? : {offset? : double,rect? : any}) {
        let {offset,rect} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.offset = offset;
        this.rect = rect;
    }
     : any;

     : any;

    offset : double;

    rect : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(offset: ${this.offset}, rect: ${this.rect})`;
    }
}

export namespace RenderViewport {
    export type Constructors = RenderViewportBase.Constructors | 'RenderViewport';
    export type Interface = Omit<RenderViewport, Constructors>;
}
@DartClass
export class RenderViewport extends RenderViewportBase<lib8.SliverPhysicalContainerParentData> {
    constructor(_namedArguments? : {axisDirection? : lib5.AxisDirection,crossAxisDirection? : lib5.AxisDirection,offset? : lib6.ViewportOffset,anchor? : double,children? : core.DartList<lib8.RenderSliver>,center? : lib8.RenderSliver,cacheExtent? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderViewport(_namedArguments? : {axisDirection? : lib5.AxisDirection,crossAxisDirection? : lib5.AxisDirection,offset? : lib6.ViewportOffset,anchor? : double,children? : core.DartList<lib8.RenderSliver>,center? : lib8.RenderSliver,cacheExtent? : double}) {
        let {axisDirection,crossAxisDirection,offset,anchor,children,center,cacheExtent} = Object.assign({
            "axisDirection" : lib5.AxisDirection.down,
            "anchor" : 0.0}, _namedArguments );
        this._anchor = properties.anchor;
        this._center = properties.center;
        this._center = firstChild;
        this.assert = assert;
    }
     : any;

     : any;

     : any;

    _anchor;
    _center;
    super;

     : any;

    axisDirection;
    crossAxisDirection;

    crossAxisDirection;
    offset;

    offset;
    cacheExtent;

     : any;

    @Abstract
    addAll(children : any){ throw 'abstract'}
     : any;

     : any;

    _center;

}

export namespace RenderShrinkWrappingViewport {
    export type Constructors = RenderViewportBase.Constructors | 'RenderShrinkWrappingViewport';
    export type Interface = Omit<RenderShrinkWrappingViewport, Constructors>;
}
@DartClass
export class RenderShrinkWrappingViewport extends RenderViewportBase<lib8.SliverLogicalContainerParentData> {
    constructor(_namedArguments? : {axisDirection? : lib5.AxisDirection,crossAxisDirection? : lib5.AxisDirection,offset? : lib6.ViewportOffset,children? : core.DartList<lib8.RenderSliver>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderShrinkWrappingViewport(_namedArguments? : {axisDirection? : lib5.AxisDirection,crossAxisDirection? : lib5.AxisDirection,offset? : lib6.ViewportOffset,children? : core.DartList<lib8.RenderSliver>}) {
        let {axisDirection,crossAxisDirection,offset,children} = Object.assign({
            "axisDirection" : lib5.AxisDirection.down}, _namedArguments );
        this._hasVisualOverflow = false;
        super.RenderViewportBase({
            axisDirection : axisDirection,crossAxisDirection : crossAxisDirection,offset : offset});
        addAll(children);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setupParentData(child : lib3.RenderObject) : any {
        if (isNot(child.parentData, lib8.SliverLogicalContainerParentData)) child.parentData = lib8.SliverLogicalContainerParentData();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugThrowIfNotCheckingIntrinsics() : boolean {
        /* TODO (AssertStatementImpl) : assert (() {if (!RenderObject.debugCheckingIntrinsics) {throw FlutterError('$runtimeType does not support returning intrinsic dimensions.\n' 'Calculating the intrinsic dimensions would require instantiating every child of ' 'the viewport, which defeats the point of viewports being lazy.\n' 'If you are merely trying to shrink-wrap the viewport in the main axis direction, ' 'you should be able to achieve that effect by just giving the viewport loose ' 'constraints, without needing to measure its intrinsic dimensions.');} return true;}()); */;
        return true;
    }
    _maxScrollExtent : double;

    _shrinkWrapExtent : double;

    _hasVisualOverflow : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        if (op(Op.EQUALS,firstChild,null)) {
            switch (this.axis) {
                case lib5.Axis.vertical:
                    /* TODO (AssertStatementImpl) : assert (constraints.hasBoundedWidth); */;
                    this.size = Size(this.constraints.maxWidth,this.constraints.minHeight);
                    break;
                case lib5.Axis.horizontal:
                    /* TODO (AssertStatementImpl) : assert (constraints.hasBoundedHeight); */;
                    this.size = Size(this.constraints.minWidth,this.constraints.maxHeight);
                    break;
            }
            this.offset.applyViewportDimension(0.0);
            this._maxScrollExtent = 0.0;
            this._shrinkWrapExtent = 0.0;
            this._hasVisualOverflow = false;
            this.offset.applyContentDimensions(0.0,0.0);
            return;
        }
        let mainAxisExtent : double;
        let crossAxisExtent : double;
        switch (this.axis) {
            case lib5.Axis.vertical:
                /* TODO (AssertStatementImpl) : assert (constraints.hasBoundedWidth); */;
                mainAxisExtent = this.constraints.maxHeight;
                crossAxisExtent = this.constraints.maxWidth;
                break;
            case lib5.Axis.horizontal:
                /* TODO (AssertStatementImpl) : assert (constraints.hasBoundedHeight); */;
                mainAxisExtent = this.constraints.maxWidth;
                crossAxisExtent = this.constraints.maxHeight;
                break;
        }
        let correction : double;
        let effectiveExtent : double;
        do{
            /* TODO (AssertStatementImpl) : assert (offset.pixels != null); */;
            correction = this._attemptLayout(mainAxisExtent,crossAxisExtent,this.offset.pixels);
            if (correction != 0.0) {
                this.offset.correctBy(correction);
            }else {
                switch (this.axis) {
                    case lib5.Axis.vertical:
                        effectiveExtent = this.constraints.constrainHeight(this._shrinkWrapExtent);
                        break;
                    case lib5.Axis.horizontal:
                        effectiveExtent = this.constraints.constrainWidth(this._shrinkWrapExtent);
                        break;
                }
                let didAcceptViewportDimension : boolean = this.offset.applyViewportDimension(effectiveExtent);
                let didAcceptContentDimension : boolean = this.offset.applyContentDimensions(0.0,math.max(0.0,this._maxScrollExtent - effectiveExtent));
                if (didAcceptViewportDimension && didAcceptContentDimension) break;
            }
        } while (true);
        switch (this.axis) {
            case lib5.Axis.vertical:
                this.size = this.constraints.constrainDimensions(crossAxisExtent,effectiveExtent);
                break;
            case lib5.Axis.horizontal:
                this.size = this.constraints.constrainDimensions(effectiveExtent,crossAxisExtent);
                break;
        }
    }
    _attemptLayout(mainAxisExtent : double,crossAxisExtent : double,correctedOffset : double) : double {
        /* TODO (AssertStatementImpl) : assert (!mainAxisExtent.isNaN); */;
        /* TODO (AssertStatementImpl) : assert (mainAxisExtent >= 0.0); */;
        /* TODO (AssertStatementImpl) : assert (crossAxisExtent.isFinite); */;
        /* TODO (AssertStatementImpl) : assert (crossAxisExtent >= 0.0); */;
        /* TODO (AssertStatementImpl) : assert (correctedOffset.isFinite); */;
        this._maxScrollExtent = 0.0;
        this._shrinkWrapExtent = 0.0;
        this._hasVisualOverflow = false;
        return this.layoutChildSequence({
            child : firstChild,scrollOffset : math.max(0.0,correctedOffset),overlap : math.min(0.0,correctedOffset),layoutOffset : 0.0,remainingPaintExtent : mainAxisExtent,mainAxisExtent : mainAxisExtent,crossAxisExtent : crossAxisExtent,growthDirection : lib8.GrowthDirection.forward,advance : childAfter,remainingCacheExtent : mainAxisExtent + 2 * this.cacheExtent,cacheOrigin : -this.cacheExtent});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasVisualOverflow() : boolean {
        return this._hasVisualOverflow;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateOutOfBandData(growthDirection : lib8.GrowthDirection,childLayoutGeometry : lib8.SliverGeometry) : any {
        /* TODO (AssertStatementImpl) : assert (growthDirection == GrowthDirection.forward); */;
        this._maxScrollExtent += childLayoutGeometry.scrollExtent;
        if (childLayoutGeometry.hasVisualOverflow) this._hasVisualOverflow = true;
        this._shrinkWrapExtent += childLayoutGeometry.maxPaintExtent;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateChildLayoutOffset(child : lib8.RenderSliver,layoutOffset : double,growthDirection : lib8.GrowthDirection) : any {
        /* TODO (AssertStatementImpl) : assert (growthDirection == GrowthDirection.forward); */;
        let childParentData : lib8.SliverLogicalParentData = child.parentData;
        childParentData.layoutOffset = layoutOffset;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paintOffsetOf(child : lib8.RenderSliver) : any {
        let childParentData : lib8.SliverLogicalParentData = child.parentData;
        return this.computeAbsolutePaintOffset(child,childParentData.layoutOffset,lib8.GrowthDirection.forward);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scrollOffsetOf(child : lib8.RenderSliver,scrollOffsetWithinChild : double) : double {
        /* TODO (AssertStatementImpl) : assert (child.parent == this); */;
        /* TODO (AssertStatementImpl) : assert (child.constraints.growthDirection == GrowthDirection.forward); */;
        let scrollOffsetToChild : double = 0.0;
        let current : lib8.RenderSliver = firstChild;
        while (current != child){
            scrollOffsetToChild += current.geometry.scrollExtent;
            current = childAfter(current);
        }
        return scrollOffsetToChild + scrollOffsetWithinChild;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    maxScrollObstructionExtentBefore(child : lib8.RenderSliver) : double {
        /* TODO (AssertStatementImpl) : assert (child.parent == this); */;
        /* TODO (AssertStatementImpl) : assert (child.constraints.growthDirection == GrowthDirection.forward); */;
        let pinnedExtent : double = 0.0;
        let current : lib8.RenderSliver = firstChild;
        while (current != child){
            pinnedExtent += current.geometry.maxScrollObstructionExtent;
            current = childAfter(current);
        }
        return pinnedExtent;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyPaintTransform(child : lib3.RenderObject,transform : lib11.Matrix4) : any {
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        let offset : any = this.paintOffsetOf(child);
        transform.translate(offset.dx,offset.dy);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeChildMainAxisPosition(child : lib8.RenderSliver,parentMainAxisPosition : double) : double {
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        /* TODO (AssertStatementImpl) : assert (child.constraints != null); */;
        /* TODO (AssertStatementImpl) : assert (hasSize); */;
        let childParentData : lib8.SliverLogicalParentData = child.parentData;
        switch (lib8.applyGrowthDirectionToAxisDirection(child.constraints.axisDirection,child.constraints.growthDirection)) {
            case lib5.AxisDirection.down:
            case lib5.AxisDirection.right:
                return parentMainAxisPosition - childParentData.layoutOffset;
            case lib5.AxisDirection.up:
                return op(Op.MINUS,(op(Op.MINUS,this.size.height,parentMainAxisPosition)),childParentData.layoutOffset);
            case lib5.AxisDirection.left:
                return op(Op.MINUS,(op(Op.MINUS,this.size.width,parentMainAxisPosition)),childParentData.layoutOffset);
        }
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get indexOfFirstChild() : number {
        return 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    labelForChild(index : number) : string {
        return `child ${index}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childrenInPaintOrder() : core.DartIterable<lib8.RenderSliver> { 
        return core.iter<lib8.RenderSliver>(()=>(function*()  {
            let child : lib8.RenderSliver = firstChild;
            while (child != null){
                yield child;
                child = childAfter(child);
            }
        }).call(this));
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get childrenInHitTestOrder() : core.DartIterable<lib8.RenderSliver> { 
        return core.iter<lib8.RenderSliver>(()=>(function*()  {
            let child : lib8.RenderSliver = lastChild;
            while (child != null){
                yield child;
                child = childBefore(child);
            }
        }).call(this));
    }

}

export class properties {
    static set center(value : lib8.RenderSliver) {
        if (op(Op.EQUALS,value,properties._center)) return;
        properties._center = value;
        markNeedsLayout();
    }
    static get childrenInHitTestOrder() : core.DartIterable<lib8.RenderSliver> { 
        return core.iter<lib8.RenderSliver>(()=>(function*()  {
            if (op(Op.EQUALS,firstChild,null)) return;
            let child : lib8.RenderSliver = properties.center;
            while (child != null){
                yield child;
                child = childAfter(child);
            }
            child = childBefore(properties.center);
            while (child != null){
                yield child;
                child = childBefore(child);
            }
        }).call(this));
    }

    static get childrenInPaintOrder() : core.DartIterable<lib8.RenderSliver> { 
        return core.iter<lib8.RenderSliver>(()=>(function*()  {
            if (op(Op.EQUALS,firstChild,null)) return;
            let child : lib8.RenderSliver = firstChild;
            while (child != properties.center){
                yield child;
                child = childAfter(child);
            }
            child = lastChild;
            while (true){
                yield child;
                if (op(Op.EQUALS,child,properties.center)) return;
                child = childBefore(child);
            }
        }).call(this));
    }

    private static __$useTwoPaneSemantics : lib7.SemanticsTag;
    static get useTwoPaneSemantics() : lib7.SemanticsTag { 
        if (this.__$useTwoPaneSemantics===undefined) {
            this.__$useTwoPaneSemantics = lib7.SemanticsTag('RenderViewport.twoPane');
        }
        return this.__$useTwoPaneSemantics;
    }
    static set useTwoPaneSemantics(__$value : lib7.SemanticsTag)  { 
        this.__$useTwoPaneSemantics = __$value;
    }

    private static __$excludeFromScrolling : lib7.SemanticsTag;
    static get excludeFromScrolling() : lib7.SemanticsTag { 
        if (this.__$excludeFromScrolling===undefined) {
            this.__$excludeFromScrolling = lib7.SemanticsTag('RenderViewport.excludeFromScrolling');
        }
        return this.__$excludeFromScrolling;
    }
    static set excludeFromScrolling(__$value : lib7.SemanticsTag)  { 
        this.__$excludeFromScrolling = __$value;
    }

    static get anchor() : double {
        return properties._anchor;
    }
    private static __$_anchor : double;
    static get _anchor() : double { 
        return this.__$_anchor;
    }
    static set _anchor(__$value : double)  { 
        this.__$_anchor = __$value;
    }

    static set anchor(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        /* TODO (AssertStatementImpl) : assert (value >= 0.0 && value <= 1.0); */;
        if (value == properties._anchor) return;
        properties._anchor = value;
        markNeedsLayout();
    }
    static get center() : lib8.RenderSliver {
        return properties._center;
    }
    private static __$_center : lib8.RenderSliver;
    static get _center() : lib8.RenderSliver { 
        return this.__$_center;
    }
    static set _center(__$value : lib8.RenderSliver)  { 
        this.__$_center = __$value;
    }

    static get sizedByParent() : boolean {
        return true;
    }
    private static __$_maxLayoutCycles : number;
    static get _maxLayoutCycles() : number { 
        if (this.__$_maxLayoutCycles===undefined) {
            this.__$_maxLayoutCycles = 10;
        }
        return this.__$_maxLayoutCycles;
    }
    static set _maxLayoutCycles(__$value : number)  { 
        this.__$_maxLayoutCycles = __$value;
    }

    private static __$_minScrollExtent : double;
    static get _minScrollExtent() : double { 
        return this.__$_minScrollExtent;
    }
    static set _minScrollExtent(__$value : double)  { 
        this.__$_minScrollExtent = __$value;
    }

    private static __$_maxScrollExtent : double;
    static get _maxScrollExtent() : double { 
        return this.__$_maxScrollExtent;
    }
    static set _maxScrollExtent(__$value : double)  { 
        this.__$_maxScrollExtent = __$value;
    }

    private static __$_hasVisualOverflow : boolean;
    static get _hasVisualOverflow() : boolean { 
        if (this.__$_hasVisualOverflow===undefined) {
            this.__$_hasVisualOverflow = false;
        }
        return this.__$_hasVisualOverflow;
    }
    static set _hasVisualOverflow(__$value : boolean)  { 
        this.__$_hasVisualOverflow = __$value;
    }

    static get hasVisualOverflow() : boolean {
        return properties._hasVisualOverflow;
    }
    static get indexOfFirstChild() : number {
        /* TODO (AssertStatementImpl) : assert (center != null); */;
        /* TODO (AssertStatementImpl) : assert (center.parent == this); */;
        /* TODO (AssertStatementImpl) : assert (firstChild != null); */;
        let count : number = 0;
        let child : lib8.RenderSliver = properties.center;
        while (child != firstChild){
            count -= 1;
            child = childBefore(child);
        }
        return count;
    }
}
