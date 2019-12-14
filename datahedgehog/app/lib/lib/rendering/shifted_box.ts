/** Library asset:datahedgehog_monitor/lib/lib/rendering/shifted_box.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./box";
import * as lib4 from "./object";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as math from "@dart2ts/dart/math";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib11 from "./stack";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/foundation/change_notifier";

export namespace RenderShiftedBox {
    export type Constructors = lib3.RenderBox.Constructors | 'RenderShiftedBox';
    export type Interface = Omit<RenderShiftedBox, Constructors>;
}
@DartClass
@With(any)
export class RenderShiftedBox extends lib3.RenderBox implements any.Interface {
    constructor(child : lib3.RenderBox) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderShiftedBox(child : lib3.RenderBox) {
        this.child = child;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicWidth(height : double) : double {
        if (child != null) return child.getMinIntrinsicWidth(height);
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicWidth(height : double) : double {
        if (child != null) return child.getMaxIntrinsicWidth(height);
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicHeight(width : double) : double {
        if (child != null) return child.getMinIntrinsicHeight(width);
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicHeight(width : double) : double {
        if (child != null) return child.getMaxIntrinsicHeight(width);
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeDistanceToActualBaseline(baseline : any) : double {
        let result : double;
        if (child != null) {
            /* TODO (AssertStatementImpl) : assert (!debugNeedsLayout); */;
            result = child.getDistanceToActualBaseline(baseline);
            let childParentData : lib3.BoxParentData = child.parentData;
            if (result != null) result += childParentData.offset.dy;
        }else {
            result = super.computeDistanceToActualBaseline(baseline);
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib4.PaintingContext,offset : any) : any {
        if (child != null) {
            let childParentData : lib3.BoxParentData = child.parentData;
            context.paintChild(child,op(Op.PLUS,childParentData.offset,offset));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestChildren(result : lib5.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        if (child != null) {
            let childParentData : lib3.BoxParentData = child.parentData;
            return child.hitTest(result,{
                position : op(Op.MINUS,position,childParentData.offset)});
        }
        return false;
    }
}

export namespace SingleChildLayoutDelegate {
    export type Constructors = 'SingleChildLayoutDelegate';
    export type Interface = Omit<SingleChildLayoutDelegate, Constructors>;
}
@DartClass
export class SingleChildLayoutDelegate {
    constructor(_namedArguments? : {relayout? : lib12.Listenable}) {
    }
    @defaultConstructor
    SingleChildLayoutDelegate(_namedArguments? : {relayout? : lib12.Listenable}) {
        let {relayout} = Object.assign({
        }, _namedArguments );
        this._relayout = relayout;
    }
    _relayout : lib12.Listenable;

    getSize(constraints : lib3.BoxConstraints) : any {
        return constraints.biggest;
    }
    getConstraintsForChild(constraints : lib3.BoxConstraints) : lib3.BoxConstraints {
        return constraints;
    }
    getPositionForChild(size : any,childSize : any) : any {
        return Offset.zero;
    }
    @Abstract
    shouldRelayout(oldDelegate : SingleChildLayoutDelegate) : boolean{ throw 'abstract'}
}

export namespace RenderPadding {
    export type Constructors = RenderShiftedBox.Constructors | 'RenderPadding';
    export type Interface = Omit<RenderPadding, Constructors>;
}
@DartClass
export class RenderPadding extends RenderShiftedBox {
    constructor(_namedArguments? : {padding? : lib6.EdgeInsetsGeometry,textDirection? : any,child? : lib3.RenderBox}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderPadding(_namedArguments? : {padding? : lib6.EdgeInsetsGeometry,textDirection? : any,child? : lib3.RenderBox}) {
        let {padding,textDirection,child} = Object.assign({
        }, _namedArguments );
        this._textDirection = this.textDirection;
        this._padding = this.padding;
        this.assert = assert;
    }
     : any;

     : any;

    _textDirection;
    _padding;
    super;

     : any;

    _resolvedPadding : lib6.EdgeInsets;

    _resolve() : any {
        if (this._resolvedPadding != null) return;
        this._resolvedPadding = this.padding.resolve(this.textDirection);
        /* TODO (AssertStatementImpl) : assert (_resolvedPadding.isNonNegative); */;
    }
    _markNeedResolution() : any {
        this._resolvedPadding = null;
        this.markNeedsLayout();
    }
    get padding() : lib6.EdgeInsetsGeometry {
        return this._padding;
    }
    _padding : lib6.EdgeInsetsGeometry;

    set padding(value : lib6.EdgeInsetsGeometry) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        /* TODO (AssertStatementImpl) : assert (value.isNonNegative); */;
        if (op(Op.EQUALS,this._padding,value)) return;
        this._padding = value;
        this._markNeedResolution();
    }
    get textDirection() : any {
        return this._textDirection;
    }
    _textDirection : any;

    set textDirection(value : any) {
        if (op(Op.EQUALS,this._textDirection,value)) return;
        this._textDirection = value;
        this._markNeedResolution();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicWidth(height : double) : double {
        this._resolve();
        let totalHorizontalPadding : double = this._resolvedPadding.left + this._resolvedPadding.right;
        let totalVerticalPadding : double = this._resolvedPadding.top + this._resolvedPadding.bottom;
        if (child != null) return op(Op.PLUS,child.getMinIntrinsicWidth(math.max(0.0,height - totalVerticalPadding)),totalHorizontalPadding);
        return totalHorizontalPadding;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicWidth(height : double) : double {
        this._resolve();
        let totalHorizontalPadding : double = this._resolvedPadding.left + this._resolvedPadding.right;
        let totalVerticalPadding : double = this._resolvedPadding.top + this._resolvedPadding.bottom;
        if (child != null) return op(Op.PLUS,child.getMaxIntrinsicWidth(math.max(0.0,height - totalVerticalPadding)),totalHorizontalPadding);
        return totalHorizontalPadding;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicHeight(width : double) : double {
        this._resolve();
        let totalHorizontalPadding : double = this._resolvedPadding.left + this._resolvedPadding.right;
        let totalVerticalPadding : double = this._resolvedPadding.top + this._resolvedPadding.bottom;
        if (child != null) return op(Op.PLUS,child.getMinIntrinsicHeight(math.max(0.0,width - totalHorizontalPadding)),totalVerticalPadding);
        return totalVerticalPadding;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicHeight(width : double) : double {
        this._resolve();
        let totalHorizontalPadding : double = this._resolvedPadding.left + this._resolvedPadding.right;
        let totalVerticalPadding : double = this._resolvedPadding.top + this._resolvedPadding.bottom;
        if (child != null) return op(Op.PLUS,child.getMaxIntrinsicHeight(math.max(0.0,width - totalHorizontalPadding)),totalVerticalPadding);
        return totalVerticalPadding;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        this._resolve();
        /* TODO (AssertStatementImpl) : assert (_resolvedPadding != null); */;
        if (op(Op.EQUALS,child,null)) {
            this.size = this.constraints.constrain(Size(this._resolvedPadding.left + this._resolvedPadding.right,this._resolvedPadding.top + this._resolvedPadding.bottom));
            return;
        }
        let innerConstraints : lib3.BoxConstraints = this.constraints.deflate(this._resolvedPadding);
        child.layout(innerConstraints,{
            parentUsesSize : true});
        let childParentData : lib3.BoxParentData = child.parentData;
        childParentData.offset = Offset(this._resolvedPadding.left,this._resolvedPadding.top);
        this.size = this.constraints.constrain(Size(this._resolvedPadding.left + child.size.width + this._resolvedPadding.right,this._resolvedPadding.top + child.size.height + this._resolvedPadding.bottom));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugPaintSize(context : lib4.PaintingContext,offset : any) : any {
        super.debugPaintSize(context,offset);
        /* TODO (AssertStatementImpl) : assert (() {final Rect outerRect = offset & size; debugPaintPadding(context.canvas, outerRect, child != null ? _resolvedPadding.deflateRect(outerRect) : null); return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib8.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib8.DiagnosticsProperty('padding',this.padding));
        properties.add(lib8.EnumProperty('textDirection',this.textDirection,{
            defaultValue : null}));
    }
}

export namespace RenderAligningShiftedBox {
    export type Constructors = RenderShiftedBox.Constructors | 'RenderAligningShiftedBox' | 'mixin';
    export type Interface = Omit<RenderAligningShiftedBox, Constructors>;
}
@DartClass
export class RenderAligningShiftedBox extends RenderShiftedBox {
    constructor(_namedArguments? : {alignment? : lib9.AlignmentGeometry,textDirection? : any,child? : lib3.RenderBox}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderAligningShiftedBox(_namedArguments? : {alignment? : lib9.AlignmentGeometry,textDirection? : any,child? : lib3.RenderBox}) {
        let {alignment,textDirection,child} = Object.assign({
            "alignment" : lib9.Alignment.center}, _namedArguments );
        this._alignment = this.alignment;
        this._textDirection = this.textDirection;
        this.assert = assert;
    }
     : any;

    _alignment;
    _textDirection;
    super;

     : any;

    @namedConstructor
    mixin(alignment : lib9.AlignmentGeometry,textDirection : any,child : lib3.RenderBox) {
        this._alignment = this.alignment;
        this._textDirection = this.textDirection;
        this.RenderAligningShiftedBox({
            alignment : alignment,textDirection : textDirection,child : child});
    }
    static mixin : new(alignment : lib9.AlignmentGeometry,textDirection : any,child : lib3.RenderBox) => RenderAligningShiftedBox;

    _resolvedAlignment : lib9.Alignment;

    _resolve() : any {
        if (this._resolvedAlignment != null) return;
        this._resolvedAlignment = this.alignment.resolve(this.textDirection);
    }
    _markNeedResolution() : any {
        this._resolvedAlignment = null;
        this.markNeedsLayout();
    }
    get alignment() : lib9.AlignmentGeometry {
        return this._alignment;
    }
    _alignment : lib9.AlignmentGeometry;

    set alignment(value : lib9.AlignmentGeometry) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._alignment,value)) return;
        this._alignment = value;
        this._markNeedResolution();
    }
    get textDirection() : any {
        return this._textDirection;
    }
    _textDirection : any;

    set textDirection(value : any) {
        if (op(Op.EQUALS,this._textDirection,value)) return;
        this._textDirection = value;
        this._markNeedResolution();
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    alignChild() : any {
        this._resolve();
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        /* TODO (AssertStatementImpl) : assert (!child.debugNeedsLayout); */;
        /* TODO (AssertStatementImpl) : assert (child.hasSize); */;
        /* TODO (AssertStatementImpl) : assert (hasSize); */;
        /* TODO (AssertStatementImpl) : assert (_resolvedAlignment != null); */;
        let childParentData : lib3.BoxParentData = child.parentData;
        childParentData.offset = this._resolvedAlignment.alongOffset(op(Op.MINUS,this.size,child.size));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib8.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib8.DiagnosticsProperty('alignment',this.alignment));
        properties.add(lib8.EnumProperty('textDirection',this.textDirection,{
            defaultValue : null}));
    }
}

export namespace RenderCustomSingleChildLayoutBox {
    export type Constructors = RenderShiftedBox.Constructors | 'RenderCustomSingleChildLayoutBox';
    export type Interface = Omit<RenderCustomSingleChildLayoutBox, Constructors>;
}
@DartClass
export class RenderCustomSingleChildLayoutBox extends RenderShiftedBox {
    constructor(_namedArguments? : {child? : lib3.RenderBox,delegate? : SingleChildLayoutDelegate}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderCustomSingleChildLayoutBox(_namedArguments? : {child? : lib3.RenderBox,delegate? : SingleChildLayoutDelegate}) {
        let {child,delegate} = Object.assign({
        }, _namedArguments );
        this._delegate = this.delegate;
        this.assert = assert;
    }
     : any;

    _delegate;
    super;

     : any;

    get delegate() : SingleChildLayoutDelegate {
        return this._delegate;
    }
    _delegate : SingleChildLayoutDelegate;

    set delegate(newDelegate : SingleChildLayoutDelegate) {
        /* TODO (AssertStatementImpl) : assert (newDelegate != null); */;
        if (op(Op.EQUALS,this._delegate,newDelegate)) return;
        let oldDelegate : SingleChildLayoutDelegate = this._delegate;
        if (newDelegate.runtimeType != oldDelegate.runtimeType || newDelegate.shouldRelayout(oldDelegate)) this.markNeedsLayout();
        this._delegate = newDelegate;
        if (this.attached) {
            ((_850_)=>(!!_850_)?_850_.removeListener(this.markNeedsLayout.bind(this)):null)(((t)=>(!!t)?t._relayout:null)(oldDelegate));
            ((_851_)=>(!!_851_)?_851_.addListener(this.markNeedsLayout.bind(this)):null)(((t)=>(!!t)?t._relayout:null)(newDelegate));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    attach(owner : lib4.PipelineOwner) : any {
        super.attach(owner);
        ((_852_)=>(!!_852_)?_852_.addListener(this.markNeedsLayout.bind(this)):null)(((t)=>(!!t)?t._relayout:null)(this._delegate));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    detach() : any {
        ((_853_)=>(!!_853_)?_853_.removeListener(this.markNeedsLayout.bind(this)):null)(((t)=>(!!t)?t._relayout:null)(this._delegate));
        super.detach();
    }
    _getSize(constraints : lib3.BoxConstraints) : any {
        return constraints.constrain(this._delegate.getSize(constraints));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicWidth(height : double) : double {
        let width : double = this._getSize(lib3.BoxConstraints.tightForFinite({
            height : height})).width;
        if (new core.DartDouble(width).isFinite) return width;
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicWidth(height : double) : double {
        let width : double = this._getSize(lib3.BoxConstraints.tightForFinite({
            height : height})).width;
        if (new core.DartDouble(width).isFinite) return width;
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicHeight(width : double) : double {
        let height : double = this._getSize(lib3.BoxConstraints.tightForFinite({
            width : width})).height;
        if (new core.DartDouble(height).isFinite) return height;
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicHeight(width : double) : double {
        let height : double = this._getSize(lib3.BoxConstraints.tightForFinite({
            width : width})).height;
        if (new core.DartDouble(height).isFinite) return height;
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        this.size = this._getSize(this.constraints);
        if (child != null) {
            let childConstraints : lib3.BoxConstraints = this.delegate.getConstraintsForChild(this.constraints);
            /* TODO (AssertStatementImpl) : assert (childConstraints.debugAssertIsValid(isAppliedConstraint: true)); */;
            child.layout(childConstraints,{
                parentUsesSize : !childConstraints.isTight});
            let childParentData : lib3.BoxParentData = child.parentData;
            childParentData.offset = this.delegate.getPositionForChild(this.size,childConstraints.isTight ? childConstraints.smallest : child.size);
        }
    }
}

export namespace RenderBaseline {
    export type Constructors = RenderShiftedBox.Constructors | 'RenderBaseline';
    export type Interface = Omit<RenderBaseline, Constructors>;
}
@DartClass
export class RenderBaseline extends RenderShiftedBox {
    constructor(_namedArguments? : {child? : lib3.RenderBox,baseline? : double,baselineType? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderBaseline(_namedArguments? : {child? : lib3.RenderBox,baseline? : double,baselineType? : any}) {
        let {child,baseline,baselineType} = Object.assign({
        }, _namedArguments );
        this._baseline = this.baseline;
        this._baselineType = this.baselineType;
        this.assert = assert;
    }
     : any;

     : any;

    _baseline;
    _baselineType;
    super;

     : any;

    get baseline() : double {
        return this._baseline;
    }
    _baseline : double;

    set baseline(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._baseline,value)) return;
        this._baseline = value;
        this.markNeedsLayout();
    }
    get baselineType() : any {
        return this._baselineType;
    }
    _baselineType : any;

    set baselineType(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._baselineType,value)) return;
        this._baselineType = value;
        this.markNeedsLayout();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        if (child != null) {
            child.layout(this.constraints.loosen(),{
                parentUsesSize : true});
            let childBaseline : double = child.getDistanceToBaseline(this.baselineType);
            let actualBaseline : double = this.baseline;
            let top : double = actualBaseline - childBaseline;
            let childParentData : lib3.BoxParentData = child.parentData;
            childParentData.offset = Offset(0.0,top);
            let childSize : any = child.size;
            this.size = this.constraints.constrain(Size(childSize.width,top + childSize.height));
        }else {
            this.performResize();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib8.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib8.DoubleProperty('baseline',this.baseline));
        properties.add(lib8.EnumProperty('baselineType',this.baselineType));
    }
}

export namespace RenderPositionedBox {
    export type Constructors = RenderAligningShiftedBox.Constructors | 'RenderPositionedBox';
    export type Interface = Omit<RenderPositionedBox, Constructors>;
}
@DartClass
export class RenderPositionedBox extends RenderAligningShiftedBox {
    constructor(_namedArguments? : {child? : lib3.RenderBox,widthFactor? : double,heightFactor? : double,alignment? : lib9.AlignmentGeometry,textDirection? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderPositionedBox(_namedArguments? : {child? : lib3.RenderBox,widthFactor? : double,heightFactor? : double,alignment? : lib9.AlignmentGeometry,textDirection? : any}) {
        let {child,widthFactor,heightFactor,alignment,textDirection} = Object.assign({
            "alignment" : lib9.Alignment.center}, _namedArguments );
        this._widthFactor = this.widthFactor;
        this._heightFactor = this.heightFactor;
        this.assert = assert;
    }
     : any;

     : any;

     : any;

     : any;

    _widthFactor;
    _heightFactor;
    super;

     : any;

    child;
    alignment;

    alignment;
    textDirection;

     : any;

    get widthFactor() : double {
        return this._widthFactor;
    }
    _widthFactor : double;

    set widthFactor(value : double) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0.0); */;
        if (op(Op.EQUALS,this._widthFactor,value)) return;
        this._widthFactor = value;
        this.markNeedsLayout();
    }
    get heightFactor() : double {
        return this._heightFactor;
    }
    _heightFactor : double;

    set heightFactor(value : double) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0.0); */;
        if (op(Op.EQUALS,this._heightFactor,value)) return;
        this._heightFactor = value;
        this.markNeedsLayout();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        let shrinkWrapWidth : boolean = this._widthFactor != null || this.constraints.maxWidth == new core.DartDouble(double).infinity;
        let shrinkWrapHeight : boolean = this._heightFactor != null || this.constraints.maxHeight == new core.DartDouble(double).infinity;
        if (this.child != null) {
            this.child.layout(this.constraints.loosen(),{
                parentUsesSize : true});
            this.size = this.constraints.constrain(Size(shrinkWrapWidth ? op(Op.TIMES,this.child.size.width,((this._widthFactor || 1.0))) : new core.DartDouble(double).infinity,shrinkWrapHeight ? op(Op.TIMES,this.child.size.height,((this._heightFactor || 1.0))) : new core.DartDouble(double).infinity));
            this.alignChild();
        }else {
            this.size = this.constraints.constrain(Size(shrinkWrapWidth ? 0.0 : new core.DartDouble(double).infinity,shrinkWrapHeight ? 0.0 : new core.DartDouble(double).infinity));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugPaintSize(context : lib4.PaintingContext,offset : any) : any {
        super.debugPaintSize(context,offset);
        /* TODO (AssertStatementImpl) : assert (() {Paint paint; if (child != null && !child.size.isEmpty) {Path path; paint = Paint()..style = PaintingStyle.stroke..strokeWidth = 1.0..color = const Color(0xFFFFFF00); path = Path(); final BoxParentData childParentData = child.parentData; if (childParentData.offset.dy > 0.0) {final double headSize = math.min(childParentData.offset.dy * 0.2, 10.0); path..moveTo(offset.dx + size.width / 2.0, offset.dy)..relativeLineTo(0.0, childParentData.offset.dy - headSize)..relativeLineTo(headSize, 0.0)..relativeLineTo(-headSize, headSize)..relativeLineTo(-headSize, -headSize)..relativeLineTo(headSize, 0.0)..moveTo(offset.dx + size.width / 2.0, offset.dy + size.height)..relativeLineTo(0.0, -childParentData.offset.dy + headSize)..relativeLineTo(headSize, 0.0)..relativeLineTo(-headSize, -headSize)..relativeLineTo(-headSize, headSize)..relativeLineTo(headSize, 0.0); context.canvas.drawPath(path, paint);} if (childParentData.offset.dx > 0.0) {final double headSize = math.min(childParentData.offset.dx * 0.2, 10.0); path..moveTo(offset.dx, offset.dy + size.height / 2.0)..relativeLineTo(childParentData.offset.dx - headSize, 0.0)..relativeLineTo(0.0, headSize)..relativeLineTo(headSize, -headSize)..relativeLineTo(-headSize, -headSize)..relativeLineTo(0.0, headSize)..moveTo(offset.dx + size.width, offset.dy + size.height / 2.0)..relativeLineTo(-childParentData.offset.dx + headSize, 0.0)..relativeLineTo(0.0, headSize)..relativeLineTo(-headSize, -headSize)..relativeLineTo(headSize, -headSize)..relativeLineTo(0.0, headSize); context.canvas.drawPath(path, paint);}} else {paint = Paint()..color = const Color(0x90909090); context.canvas.drawRect(offset & size, paint);} return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib8.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib8.DoubleProperty('widthFactor',this._widthFactor,{
            ifNull : 'expand'}));
        properties.add(lib8.DoubleProperty('heightFactor',this._heightFactor,{
            ifNull : 'expand'}));
    }
}

export namespace RenderConstrainedOverflowBox {
    export type Constructors = RenderAligningShiftedBox.Constructors | 'RenderConstrainedOverflowBox';
    export type Interface = Omit<RenderConstrainedOverflowBox, Constructors>;
}
@DartClass
export class RenderConstrainedOverflowBox extends RenderAligningShiftedBox {
    constructor(_namedArguments? : {child? : lib3.RenderBox,minWidth? : double,maxWidth? : double,minHeight? : double,maxHeight? : double,alignment? : lib9.AlignmentGeometry,textDirection? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderConstrainedOverflowBox(_namedArguments? : {child? : lib3.RenderBox,minWidth? : double,maxWidth? : double,minHeight? : double,maxHeight? : double,alignment? : lib9.AlignmentGeometry,textDirection? : any}) {
        let {child,minWidth,maxWidth,minHeight,maxHeight,alignment,textDirection} = Object.assign({
            "alignment" : lib9.Alignment.center}, _namedArguments );
        this._minWidth = minWidth;
        this._maxWidth = maxWidth;
        this._minHeight = minHeight;
        this._maxHeight = maxHeight;
        super.RenderAligningShiftedBox({
            child : child,alignment : alignment,textDirection : textDirection});
    }
    get minWidth() : double {
        return this._minWidth;
    }
    _minWidth : double;

    set minWidth(value : double) {
        if (this._minWidth == value) return;
        this._minWidth = value;
        this.markNeedsLayout();
    }
    get maxWidth() : double {
        return this._maxWidth;
    }
    _maxWidth : double;

    set maxWidth(value : double) {
        if (this._maxWidth == value) return;
        this._maxWidth = value;
        this.markNeedsLayout();
    }
    get minHeight() : double {
        return this._minHeight;
    }
    _minHeight : double;

    set minHeight(value : double) {
        if (this._minHeight == value) return;
        this._minHeight = value;
        this.markNeedsLayout();
    }
    get maxHeight() : double {
        return this._maxHeight;
    }
    _maxHeight : double;

    set maxHeight(value : double) {
        if (this._maxHeight == value) return;
        this._maxHeight = value;
        this.markNeedsLayout();
    }
    _getInnerConstraints(constraints : lib3.BoxConstraints) : lib3.BoxConstraints {
        return lib3.BoxConstraints({
            minWidth : (this._minWidth || constraints.minWidth),maxWidth : (this._maxWidth || constraints.maxWidth),minHeight : (this._minHeight || constraints.minHeight),maxHeight : (this._maxHeight || constraints.maxHeight)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sizedByParent() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performResize() : any {
        this.size = this.constraints.biggest;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        if (child != null) {
            child.layout(this._getInnerConstraints(this.constraints),{
                parentUsesSize : true});
            this.alignChild();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib8.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib8.DoubleProperty('minWidth',this.minWidth,{
            ifNull : 'use parent minWidth constraint'}));
        properties.add(lib8.DoubleProperty('maxWidth',this.maxWidth,{
            ifNull : 'use parent maxWidth constraint'}));
        properties.add(lib8.DoubleProperty('minHeight',this.minHeight,{
            ifNull : 'use parent minHeight constraint'}));
        properties.add(lib8.DoubleProperty('maxHeight',this.maxHeight,{
            ifNull : 'use parent maxHeight constraint'}));
    }
}

export namespace RenderUnconstrainedBox {
    export type Constructors = RenderAligningShiftedBox.Constructors | 'RenderUnconstrainedBox';
    export type Interface = Omit<RenderUnconstrainedBox, Constructors>;
}
@DartClass
@With(any)
export class RenderUnconstrainedBox extends RenderAligningShiftedBox implements any.Interface {
    constructor(_namedArguments? : {alignment? : lib9.AlignmentGeometry,textDirection? : any,constrainedAxis? : lib10.Axis,child? : lib3.RenderBox}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderUnconstrainedBox(_namedArguments? : {alignment? : lib9.AlignmentGeometry,textDirection? : any,constrainedAxis? : lib10.Axis,child? : lib3.RenderBox}) {
        let {alignment,textDirection,constrainedAxis,child} = Object.assign({
        }, _namedArguments );
        this._constrainedAxis = this.constrainedAxis;
        this._overflowContainerRect = Rect.zero;
        this._overflowChildRect = Rect.zero;
        this._isOverflowing = false;
        this.assert = assert;
    }
     : any;

    _constrainedAxis;
    super;

    @Abstract
    mixin(alignment : any,textDirection : any,child : any){ throw 'abstract'}
    get constrainedAxis() : lib10.Axis {
        return this._constrainedAxis;
    }
    _constrainedAxis : lib10.Axis;

    set constrainedAxis(value : lib10.Axis) {
        if (op(Op.EQUALS,this._constrainedAxis,value)) return;
        this._constrainedAxis = value;
        this.markNeedsLayout();
    }
    _overflowContainerRect : any;

    _overflowChildRect : any;

    _isOverflowing : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        if (child != null) {
            let childConstraints : lib3.BoxConstraints;
            if (this.constrainedAxis != null) {
                switch (this.constrainedAxis) {
                    case lib10.Axis.horizontal:
                        childConstraints = lib3.BoxConstraints({
                            maxWidth : this.constraints.maxWidth,minWidth : this.constraints.minWidth});
                        break;
                    case lib10.Axis.vertical:
                        childConstraints = lib3.BoxConstraints({
                            maxHeight : this.constraints.maxHeight,minHeight : this.constraints.minHeight});
                        break;
                }
            }else {
                childConstraints = new lib3.BoxConstraints();
            }
            child.layout(childConstraints,{
                parentUsesSize : true});
            this.size = this.constraints.constrain(child.size);
            this.alignChild();
            let childParentData : lib3.BoxParentData = child.parentData;
            this._overflowContainerRect = op(Op.BITAND,Offset.zero,this.size);
            this._overflowChildRect = op(Op.BITAND,childParentData.offset,child.size);
        }else {
            this.size = this.constraints.smallest;
            this._overflowContainerRect = Rect.zero;
            this._overflowChildRect = Rect.zero;
        }
        this._isOverflowing = lib11.RelativeRect.fromRect(this._overflowContainerRect,this._overflowChildRect).hasInsets;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib4.PaintingContext,offset : any) : any {
        if (op(Op.EQUALS,child,null) || this.size.isEmpty) return;
        if (!this._isOverflowing) {
            super.paint(context,offset);
            return;
        }
        context.pushClipRect(this.needsCompositing,offset,op(Op.BITAND,Offset.zero,this.size),super.paint.bind(super));
        /* TODO (AssertStatementImpl) : assert (() {paintOverflowIndicator(context, offset, _overflowContainerRect, _overflowChildRect); return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describeApproximatePaintClip(child : any) : any {
        return this._isOverflowing ? op(Op.BITAND,Offset.zero,this.size) : null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toStringShort() : string {
        let header : string = super.toStringShort();
        if (this._isOverflowing) header += ' OVERFLOWING';
        return header;
    }
}

export namespace RenderSizedOverflowBox {
    export type Constructors = RenderAligningShiftedBox.Constructors | 'RenderSizedOverflowBox';
    export type Interface = Omit<RenderSizedOverflowBox, Constructors>;
}
@DartClass
export class RenderSizedOverflowBox extends RenderAligningShiftedBox {
    constructor(_namedArguments? : {child? : lib3.RenderBox,requestedSize? : any,alignment? : lib9.AlignmentGeometry,textDirection? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderSizedOverflowBox(_namedArguments? : {child? : lib3.RenderBox,requestedSize? : any,alignment? : lib9.AlignmentGeometry,textDirection? : any}) {
        let {child,requestedSize,alignment,textDirection} = Object.assign({
            "alignment" : lib9.Alignment.center}, _namedArguments );
        this._requestedSize = this.requestedSize;
        this.assert = assert;
    }
     : any;

    _requestedSize;
    super;

     : any;

    child;
    alignment;

    alignment;
    textDirection;

     : any;

    get requestedSize() : any {
        return this._requestedSize;
    }
    _requestedSize : any;

    set requestedSize(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this._requestedSize,value)) return;
        this._requestedSize = value;
        this.markNeedsLayout();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicWidth(height : double) : double {
        return this._requestedSize.width;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicWidth(height : double) : double {
        return this._requestedSize.width;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicHeight(width : double) : double {
        return this._requestedSize.height;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicHeight(width : double) : double {
        return this._requestedSize.height;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeDistanceToActualBaseline(baseline : any) : double {
        if (this.child != null) return this.child.getDistanceToActualBaseline(baseline);
        return super.computeDistanceToActualBaseline(baseline);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        this.size = this.constraints.constrain(this._requestedSize);
        if (this.child != null) {
            this.child.layout(this.constraints,{
                parentUsesSize : true});
            this.alignChild();
        }
    }
}

export namespace RenderFractionallySizedOverflowBox {
    export type Constructors = RenderAligningShiftedBox.Constructors | 'RenderFractionallySizedOverflowBox';
    export type Interface = Omit<RenderFractionallySizedOverflowBox, Constructors>;
}
@DartClass
export class RenderFractionallySizedOverflowBox extends RenderAligningShiftedBox {
    constructor(_namedArguments? : {child? : lib3.RenderBox,widthFactor? : double,heightFactor? : double,alignment? : lib9.AlignmentGeometry,textDirection? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderFractionallySizedOverflowBox(_namedArguments? : {child? : lib3.RenderBox,widthFactor? : double,heightFactor? : double,alignment? : lib9.AlignmentGeometry,textDirection? : any}) {
        let {child,widthFactor,heightFactor,alignment,textDirection} = Object.assign({
            "alignment" : lib9.Alignment.center}, _namedArguments );
        this._widthFactor = widthFactor;
        this._heightFactor = heightFactor;
        super.RenderAligningShiftedBox({
            child : child,alignment : alignment,textDirection : textDirection});
        /* TODO (AssertStatementImpl) : assert (_widthFactor == null || _widthFactor >= 0.0); */;
        /* TODO (AssertStatementImpl) : assert (_heightFactor == null || _heightFactor >= 0.0); */;
    }
    get widthFactor() : double {
        return this._widthFactor;
    }
    _widthFactor : double;

    set widthFactor(value : double) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0.0); */;
        if (this._widthFactor == value) return;
        this._widthFactor = value;
        this.markNeedsLayout();
    }
    get heightFactor() : double {
        return this._heightFactor;
    }
    _heightFactor : double;

    set heightFactor(value : double) {
        /* TODO (AssertStatementImpl) : assert (value == null || value >= 0.0); */;
        if (this._heightFactor == value) return;
        this._heightFactor = value;
        this.markNeedsLayout();
    }
    _getInnerConstraints(constraints : lib3.BoxConstraints) : lib3.BoxConstraints {
        let minWidth : double = constraints.minWidth;
        let maxWidth : double = constraints.maxWidth;
        if (this._widthFactor != null) {
            let width : double = maxWidth * this._widthFactor;
            minWidth = width;
            maxWidth = width;
        }
        let minHeight : double = constraints.minHeight;
        let maxHeight : double = constraints.maxHeight;
        if (this._heightFactor != null) {
            let height : double = maxHeight * this._heightFactor;
            minHeight = height;
            maxHeight = height;
        }
        return lib3.BoxConstraints({
            minWidth : minWidth,maxWidth : maxWidth,minHeight : minHeight,maxHeight : maxHeight});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicWidth(height : double) : double {
        let result : double;
        if (op(Op.EQUALS,child,null)) {
            result = super.computeMinIntrinsicWidth(height);
        }else {
            result = child.getMinIntrinsicWidth(height * ((this._heightFactor || 1.0)));
        }
        /* TODO (AssertStatementImpl) : assert (result.isFinite); */;
        return result / ((this._widthFactor || 1.0));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicWidth(height : double) : double {
        let result : double;
        if (op(Op.EQUALS,child,null)) {
            result = super.computeMaxIntrinsicWidth(height);
        }else {
            result = child.getMaxIntrinsicWidth(height * ((this._heightFactor || 1.0)));
        }
        /* TODO (AssertStatementImpl) : assert (result.isFinite); */;
        return result / ((this._widthFactor || 1.0));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicHeight(width : double) : double {
        let result : double;
        if (op(Op.EQUALS,child,null)) {
            result = super.computeMinIntrinsicHeight(width);
        }else {
            result = child.getMinIntrinsicHeight(width * ((this._widthFactor || 1.0)));
        }
        /* TODO (AssertStatementImpl) : assert (result.isFinite); */;
        return result / ((this._heightFactor || 1.0));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicHeight(width : double) : double {
        let result : double;
        if (op(Op.EQUALS,child,null)) {
            result = super.computeMaxIntrinsicHeight(width);
        }else {
            result = child.getMaxIntrinsicHeight(width * ((this._widthFactor || 1.0)));
        }
        /* TODO (AssertStatementImpl) : assert (result.isFinite); */;
        return result / ((this._heightFactor || 1.0));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        if (child != null) {
            child.layout(this._getInnerConstraints(this.constraints),{
                parentUsesSize : true});
            this.size = this.constraints.constrain(child.size);
            this.alignChild();
        }else {
            this.size = this.constraints.constrain(this._getInnerConstraints(this.constraints).constrain(Size.zero));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib8.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib8.DoubleProperty('widthFactor',this._widthFactor,{
            ifNull : 'pass-through'}));
        properties.add(lib8.DoubleProperty('heightFactor',this._heightFactor,{
            ifNull : 'pass-through'}));
    }
}

export class properties {
}
