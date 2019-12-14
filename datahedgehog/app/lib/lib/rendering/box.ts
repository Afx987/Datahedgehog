/** Library asset:datahedgehog_monitor/lib/lib/rendering/box.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./object";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as math from "@dart2ts/dart/math";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib8 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/painting/matrix_utils";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/gestures/events";

export var RenderBoxContainerDefaultsMixin : <ChildType extends RenderBox,ParentDataType extends ContainerBoxParentData<ChildType>>() => any = <ChildType extends RenderBox,ParentDataType extends ContainerBoxParentData<ChildType>>() : any =>  {
};
export var ContainerRenderObjectMixin : <ChildType,ParentDataType>() => any = <ChildType,ParentDataType>() : any =>  {
    var defaultComputeDistanceToFirstActualBaseline : (baseline : any) => double = (baseline : any) : double =>  {
        /* TODO (AssertStatementImpl) : assert (!debugNeedsLayout); */;
        let child : ChildType = firstChild;
        while (child != null){
            let childParentData : ParentDataType = child.parentData;
            let result : double = child.getDistanceToActualBaseline(baseline);
            if (result != null) return result + childParentData.offset.dy;
            child = childParentData.nextSibling;
        }
        return null;
    };
    var defaultComputeDistanceToHighestActualBaseline : (baseline : any) => double = (baseline : any) : double =>  {
        /* TODO (AssertStatementImpl) : assert (!debugNeedsLayout); */;
        let result : double;
        let child : ChildType = firstChild;
        while (child != null){
            let childParentData : ParentDataType = child.parentData;
            let candidate : double = child.getDistanceToActualBaseline(baseline);
            if (candidate != null) {
                candidate += childParentData.offset.dy;
                if (result != null) result = math.min(result,candidate);else result = candidate;
            }
            child = childParentData.nextSibling;
        }
        return result;
    };
    var defaultHitTestChildren : (result : lib6.HitTestResult,_namedArguments? : {position? : any}) => boolean = (result : lib6.HitTestResult,_namedArguments? : {position? : any}) : boolean =>  {
        let {position} = Object.assign({
        }, _namedArguments );
        let child : ChildType = lastChild;
        while (child != null){
            let childParentData : ParentDataType = child.parentData;
            if (child.hitTest(result,{
                position : op(Op.MINUS,position,childParentData.offset)})) return true;
            child = childParentData.previousSibling;
        }
        return false;
    };
    var defaultPaint : (context : lib3.PaintingContext,offset : any) => any = (context : lib3.PaintingContext,offset : any) : any =>  {
        let child : ChildType = firstChild;
        while (child != null){
            let childParentData : ParentDataType = child.parentData;
            context.paintChild(child,op(Op.PLUS,childParentData.offset,offset));
            child = childParentData.nextSibling;
        }
    };
    var getChildrenAsList : () => core.DartList<ChildType> = () : core.DartList<ChildType> =>  {
        let result : core.DartList<ChildType> = new core.DartList.literal<ChildType>();
        let child : RenderBox = firstChild;
        while (child != null){
            let childParentData : ParentDataType = child.parentData;
            result.add(child);
            child = childParentData.nextSibling;
        }
        return result;
    };
};
export namespace _DebugSize {
    export type Constructors = '_DebugSize';
    export type Interface = Omit<_DebugSize, Constructors>;
}
@DartClass
export class _DebugSize extends any {
    constructor(source : any,_owner : RenderBox,_canBeUsedByParent : boolean) {
    }
    @defaultConstructor
    _DebugSize(source : any,_owner : RenderBox,_canBeUsedByParent : boolean) {
        super.copy(source);
        this._owner = _owner;
        this._canBeUsedByParent = _canBeUsedByParent;
    }
    _owner : RenderBox;

    _canBeUsedByParent : boolean;

}

export namespace BoxConstraints {
    export type Constructors = lib3.Constraints.Constructors | 'BoxConstraints' | 'tight' | 'tightFor' | 'tightForFinite' | 'loose' | 'expand';
    export type Interface = Omit<BoxConstraints, Constructors>;
}
@DartClass
export class BoxConstraints extends lib3.Constraints {
    constructor(_namedArguments? : {minWidth? : double,maxWidth? : double,minHeight? : double,maxHeight? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BoxConstraints(_namedArguments? : {minWidth? : double,maxWidth? : double,minHeight? : double,maxHeight? : double}) {
        let {minWidth,maxWidth,minHeight,maxHeight} = Object.assign({
            "minWidth" : 0.0,
            "maxWidth" : new core.DartDouble(double).infinity,
            "minHeight" : 0.0,
            "maxHeight" : new core.DartDouble(double).infinity}, _namedArguments );
        this.minWidth = minWidth;
        this.maxWidth = maxWidth;
        this.minHeight = minHeight;
        this.maxHeight = maxHeight;
    }
    @namedConstructor
    tight(size : any) {
        this.minWidth = size.width;
        this.maxWidth = size.width;
        this.minHeight = size.height;
        this.maxHeight = size.height;
    }
    static tight : new(size : any) => BoxConstraints;

    @namedConstructor
    tightFor(_namedArguments? : {width? : double,height? : double}) {
        let {width,height} = Object.assign({
        }, _namedArguments );
        this.minWidth = width != null ? width : 0.0;
        this.maxWidth = width != null ? width : new core.DartDouble(double).infinity;
        this.minHeight = height != null ? height : 0.0;
        this.maxHeight = height != null ? height : new core.DartDouble(double).infinity;
    }
    static tightFor : new(_namedArguments? : {width? : double,height? : double}) => BoxConstraints;

    @namedConstructor
    tightForFinite(_namedArguments? : {width? : double,height? : double}) {
        let {width,height} = Object.assign({
            "width" : new core.DartDouble(double).infinity,
            "height" : new core.DartDouble(double).infinity}, _namedArguments );
        this.minWidth = width != new core.DartDouble(double).infinity ? width : 0.0;
        this.maxWidth = width != new core.DartDouble(double).infinity ? width : new core.DartDouble(double).infinity;
        this.minHeight = height != new core.DartDouble(double).infinity ? height : 0.0;
        this.maxHeight = height != new core.DartDouble(double).infinity ? height : new core.DartDouble(double).infinity;
    }
    static tightForFinite : new(_namedArguments? : {width? : double,height? : double}) => BoxConstraints;

    @namedConstructor
    loose(size : any) {
        this.minWidth = 0.0;
        this.maxWidth = size.width;
        this.minHeight = 0.0;
        this.maxHeight = size.height;
    }
    static loose : new(size : any) => BoxConstraints;

    @namedConstructor
    expand(_namedArguments? : {width? : double,height? : double}) {
        let {width,height} = Object.assign({
        }, _namedArguments );
        this.minWidth = width != null ? width : new core.DartDouble(double).infinity;
        this.maxWidth = width != null ? width : new core.DartDouble(double).infinity;
        this.minHeight = height != null ? height : new core.DartDouble(double).infinity;
        this.maxHeight = height != null ? height : new core.DartDouble(double).infinity;
    }
    static expand : new(_namedArguments? : {width? : double,height? : double}) => BoxConstraints;

    minWidth : double;

    maxWidth : double;

    minHeight : double;

    maxHeight : double;

    copyWith(_namedArguments? : {minWidth? : double,maxWidth? : double,minHeight? : double,maxHeight? : double}) : BoxConstraints {
        let {minWidth,maxWidth,minHeight,maxHeight} = Object.assign({
        }, _namedArguments );
        return BoxConstraints({
            minWidth : (minWidth || this.minWidth),maxWidth : (maxWidth || this.maxWidth),minHeight : (minHeight || this.minHeight),maxHeight : (maxHeight || this.maxHeight)});
    }
    deflate(edges : lib4.EdgeInsets) : BoxConstraints {
        /* TODO (AssertStatementImpl) : assert (edges != null); */;
        /* TODO (AssertStatementImpl) : assert (debugAssertIsValid()); */;
        let horizontal : double = edges.horizontal;
        let vertical : double = edges.vertical;
        let deflatedMinWidth : double = math.max(0.0,this.minWidth - horizontal);
        let deflatedMinHeight : double = math.max(0.0,this.minHeight - vertical);
        return BoxConstraints({
            minWidth : deflatedMinWidth,maxWidth : math.max(deflatedMinWidth,this.maxWidth - horizontal),minHeight : deflatedMinHeight,maxHeight : math.max(deflatedMinHeight,this.maxHeight - vertical)});
    }
    loosen() : BoxConstraints {
        /* TODO (AssertStatementImpl) : assert (debugAssertIsValid()); */;
        return BoxConstraints({
            minWidth : 0.0,maxWidth : this.maxWidth,minHeight : 0.0,maxHeight : this.maxHeight});
    }
    enforce(constraints : BoxConstraints) : BoxConstraints {
        return BoxConstraints({
            minWidth : new core.DartDouble(this.minWidth).clamp(constraints.minWidth,constraints.maxWidth),maxWidth : new core.DartDouble(this.maxWidth).clamp(constraints.minWidth,constraints.maxWidth),minHeight : new core.DartDouble(this.minHeight).clamp(constraints.minHeight,constraints.maxHeight),maxHeight : new core.DartDouble(this.maxHeight).clamp(constraints.minHeight,constraints.maxHeight)});
    }
    tighten(_namedArguments? : {width? : double,height? : double}) : BoxConstraints {
        let {width,height} = Object.assign({
        }, _namedArguments );
        return BoxConstraints({
            minWidth : width == null ? this.minWidth : new core.DartDouble(width).clamp(this.minWidth,this.maxWidth),maxWidth : width == null ? this.maxWidth : new core.DartDouble(width).clamp(this.minWidth,this.maxWidth),minHeight : height == null ? this.minHeight : new core.DartDouble(height).clamp(this.minHeight,this.maxHeight),maxHeight : height == null ? this.maxHeight : new core.DartDouble(height).clamp(this.minHeight,this.maxHeight)});
    }
    get flipped() : BoxConstraints {
        return BoxConstraints({
            minWidth : this.minHeight,maxWidth : this.maxHeight,minHeight : this.minWidth,maxHeight : this.maxWidth});
    }
    widthConstraints() : BoxConstraints {
        return BoxConstraints({
            minWidth : this.minWidth,maxWidth : this.maxWidth});
    }
    heightConstraints() : BoxConstraints {
        return BoxConstraints({
            minHeight : this.minHeight,maxHeight : this.maxHeight});
    }
    constrainWidth(width? : double) : double {
        width = width || new core.DartDouble(double).infinity;
        /* TODO (AssertStatementImpl) : assert (debugAssertIsValid()); */;
        return new core.DartDouble(width).clamp(this.minWidth,this.maxWidth);
    }
    constrainHeight(height? : double) : double {
        height = height || new core.DartDouble(double).infinity;
        /* TODO (AssertStatementImpl) : assert (debugAssertIsValid()); */;
        return new core.DartDouble(height).clamp(this.minHeight,this.maxHeight);
    }
    _debugPropagateDebugSize(size : any,result : any) : any {
        /* TODO (AssertStatementImpl) : assert (() {if (size is _DebugSize) result = _DebugSize(result, size._owner, size._canBeUsedByParent); return true;}()); */;
        return result;
    }
    constrain(size : any) : any {
        let result : any = Size(this.constrainWidth(size.width),this.constrainHeight(size.height));
        /* TODO (AssertStatementImpl) : assert (() {result = _debugPropagateDebugSize(size, result); return true;}()); */;
        return result;
    }
    constrainDimensions(width : double,height : double) : any {
        return Size(this.constrainWidth(width),this.constrainHeight(height));
    }
    constrainSizeAndAttemptToPreserveAspectRatio(size : any) : any {
        if (this.isTight) {
            let result : any = this.smallest;
            /* TODO (AssertStatementImpl) : assert (() {result = _debugPropagateDebugSize(size, result); return true;}()); */;
            return result;
        }
        let width : double = size.width;
        let height : double = size.height;
        /* TODO (AssertStatementImpl) : assert (width > 0.0); */;
        /* TODO (AssertStatementImpl) : assert (height > 0.0); */;
        let aspectRatio : double = width / height;
        if (width > this.maxWidth) {
            width = this.maxWidth;
            height = width / aspectRatio;
        }
        if (height > this.maxHeight) {
            height = this.maxHeight;
            width = height * aspectRatio;
        }
        if (width < this.minWidth) {
            width = this.minWidth;
            height = width / aspectRatio;
        }
        if (height < this.minHeight) {
            height = this.minHeight;
            width = height * aspectRatio;
        }
        let result : any = Size(this.constrainWidth(width),this.constrainHeight(height));
        /* TODO (AssertStatementImpl) : assert (() {result = _debugPropagateDebugSize(size, result); return true;}()); */;
        return result;
    }
    get biggest() : any {
        return Size(this.constrainWidth(),this.constrainHeight());
    }
    get smallest() : any {
        return Size(this.constrainWidth(0.0),this.constrainHeight(0.0));
    }
    get hasTightWidth() : boolean {
        return this.minWidth >= this.maxWidth;
    }
    get hasTightHeight() : boolean {
        return this.minHeight >= this.maxHeight;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isTight() : boolean {
        return this.hasTightWidth && this.hasTightHeight;
    }
    get hasBoundedWidth() : boolean {
        return this.maxWidth < new core.DartDouble(double).infinity;
    }
    get hasBoundedHeight() : boolean {
        return this.maxHeight < new core.DartDouble(double).infinity;
    }
    get hasInfiniteWidth() : boolean {
        return this.minWidth >= new core.DartDouble(double).infinity;
    }
    get hasInfiniteHeight() : boolean {
        return this.minHeight >= new core.DartDouble(double).infinity;
    }
    isSatisfiedBy(size : any) : boolean {
        /* TODO (AssertStatementImpl) : assert (debugAssertIsValid()); */;
        return (this.minWidth <= size.width) && (op(Op.LEQ,size.width,this.maxWidth)) && (this.minHeight <= size.height) && (op(Op.LEQ,size.height,this.maxHeight));
    }
    [OperatorMethods.MULTIPLY](factor : double) : BoxConstraints {
        return BoxConstraints({
            minWidth : this.minWidth * factor,maxWidth : this.maxWidth * factor,minHeight : this.minHeight * factor,maxHeight : this.maxHeight * factor});
    }
    [OperatorMethods.DIVIDE](factor : double) : BoxConstraints {
        return BoxConstraints({
            minWidth : this.minWidth / factor,maxWidth : this.maxWidth / factor,minHeight : this.minHeight / factor,maxHeight : this.maxHeight / factor});
    }
    [OperatorMethods.QUOTIENT](factor : double) : BoxConstraints {
        return BoxConstraints({
            minWidth : new core.DartInt((op(Op.QUOTIENT,this.minWidth,factor))).toDouble(),maxWidth : new core.DartInt((op(Op.QUOTIENT,this.maxWidth,factor))).toDouble(),minHeight : new core.DartInt((op(Op.QUOTIENT,this.minHeight,factor))).toDouble(),maxHeight : new core.DartInt((op(Op.QUOTIENT,this.maxHeight,factor))).toDouble()});
    }
    [OperatorMethods.MODULE](value : double) : BoxConstraints {
        return BoxConstraints({
            minWidth : this.minWidth % value,maxWidth : this.maxWidth % value,minHeight : this.minHeight % value,maxHeight : this.maxHeight % value});
    }
    static lerp(a : BoxConstraints,b : BoxConstraints,t : double) : BoxConstraints {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        if (op(Op.EQUALS,a,null)) return op(Op.TIMES,b,t);
        if (op(Op.EQUALS,b,null)) return op(Op.TIMES,a,(1.0 - t));
        /* TODO (AssertStatementImpl) : assert (a.debugAssertIsValid()); */;
        /* TODO (AssertStatementImpl) : assert (b.debugAssertIsValid()); */;
        /* TODO (AssertStatementImpl) : assert ((a.minWidth.isFinite && b.minWidth.isFinite) || (a.minWidth == double.infinity && b.minWidth == double.infinity), 'Cannot interpolate between finite constraints and unbounded constraints.'); */;
        /* TODO (AssertStatementImpl) : assert ((a.maxWidth.isFinite && b.maxWidth.isFinite) || (a.maxWidth == double.infinity && b.maxWidth == double.infinity), 'Cannot interpolate between finite constraints and unbounded constraints.'); */;
        /* TODO (AssertStatementImpl) : assert ((a.minHeight.isFinite && b.minHeight.isFinite) || (a.minHeight == double.infinity && b.minHeight == double.infinity), 'Cannot interpolate between finite constraints and unbounded constraints.'); */;
        /* TODO (AssertStatementImpl) : assert ((a.maxHeight.isFinite && b.maxHeight.isFinite) || (a.maxHeight == double.infinity && b.maxHeight == double.infinity), 'Cannot interpolate between finite constraints and unbounded constraints.'); */;
        return BoxConstraints({
            minWidth : new core.DartDouble(a.minWidth).isFinite ? ui.lerpDouble(a.minWidth,b.minWidth,t) : new core.DartDouble(double).infinity,maxWidth : new core.DartDouble(a.maxWidth).isFinite ? ui.lerpDouble(a.maxWidth,b.maxWidth,t) : new core.DartDouble(double).infinity,minHeight : new core.DartDouble(a.minHeight).isFinite ? ui.lerpDouble(a.minHeight,b.minHeight,t) : new core.DartDouble(double).infinity,maxHeight : new core.DartDouble(a.maxHeight).isFinite ? ui.lerpDouble(a.maxHeight,b.maxHeight,t) : new core.DartDouble(double).infinity});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isNormalized() : boolean {
        return this.minWidth >= 0.0 && this.minWidth <= this.maxWidth && this.minHeight >= 0.0 && this.minHeight <= this.maxHeight;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugAssertIsValid(_namedArguments? : {isAppliedConstraint? : boolean,informationCollector? : (information : core.DartStringBuffer) => any}) : boolean {
        let {isAppliedConstraint,informationCollector} = Object.assign({
            "isAppliedConstraint" : false}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (() {void throwError(String message) {final StringBuffer information = StringBuffer(); if (informationCollector != null) informationCollector(information); throw FlutterError('$message\n${information}The offending constraints were:\n  $this');} if (minWidth.isNaN || maxWidth.isNaN || minHeight.isNaN || maxHeight.isNaN) {final List<String> affectedFieldsList = <String> []; if (minWidth.isNaN) affectedFieldsList.add('minWidth'); if (maxWidth.isNaN) affectedFieldsList.add('maxWidth'); if (minHeight.isNaN) affectedFieldsList.add('minHeight'); if (maxHeight.isNaN) affectedFieldsList.add('maxHeight'); assert (affectedFieldsList.isNotEmpty); if (affectedFieldsList.length > 1) affectedFieldsList.add('and ${affectedFieldsList.removeLast()}'); String whichFields = ''; if (affectedFieldsList.length > 2) {whichFields = affectedFieldsList.join(', ');} else if (affectedFieldsList.length == 2) {whichFields = affectedFieldsList.join(' ');} else {whichFields = affectedFieldsList.single;} throwError('BoxConstraints has ${affectedFieldsList.length == 1 ? 'a NaN value' : 'NaN values'} in $whichFields.');} if (minWidth < 0.0 && minHeight < 0.0) throwError('BoxConstraints has both a negative minimum width and a negative minimum height.'); if (minWidth < 0.0) throwError('BoxConstraints has a negative minimum width.'); if (minHeight < 0.0) throwError('BoxConstraints has a negative minimum height.'); if (maxWidth < minWidth && maxHeight < minHeight) throwError('BoxConstraints has both width and height constraints non-normalized.'); if (maxWidth < minWidth) throwError('BoxConstraints has non-normalized width constraints.'); if (maxHeight < minHeight) throwError('BoxConstraints has non-normalized height constraints.'); if (isAppliedConstraint) {if (minWidth.isInfinite && minHeight.isInfinite) throwError('BoxConstraints forces an infinite width and infinite height.'); if (minWidth.isInfinite) throwError('BoxConstraints forces an infinite width.'); if (minHeight.isInfinite) throwError('BoxConstraints forces an infinite height.');} assert (isNormalized); return true;}()); */;
        return this.isNormalized;
    }
    normalize() : BoxConstraints {
        if (this.isNormalized) return this;
        let minWidth : double = this.minWidth >= 0.0 ? this.minWidth : 0.0;
        let minHeight : double = this.minHeight >= 0.0 ? this.minHeight : 0.0;
        return BoxConstraints({
            minWidth : minWidth,maxWidth : minWidth > this.maxWidth ? minWidth : this.maxWidth,minHeight : minHeight,maxHeight : minHeight > this.maxHeight ? minHeight : this.maxHeight});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        /* TODO (AssertStatementImpl) : assert (debugAssertIsValid()); */;
        if (core.identical(this,other)) return true;
        if (isNot(other, BoxConstraints)) return false;
        let typedOther : BoxConstraints = other;
        /* TODO (AssertStatementImpl) : assert (typedOther.debugAssertIsValid()); */;
        return this.minWidth == typedOther.minWidth && this.maxWidth == typedOther.maxWidth && this.minHeight == typedOther.minHeight && this.maxHeight == typedOther.maxHeight;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        /* TODO (AssertStatementImpl) : assert (debugAssertIsValid()); */;
        return hashValues(this.minWidth,this.maxWidth,this.minHeight,this.maxHeight);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let annotation : string = this.isNormalized ? '' : '; NOT NORMALIZED';
        if (this.minWidth == new core.DartDouble(double).infinity && this.minHeight == new core.DartDouble(double).infinity) return `BoxConstraints(biggest${annotation})`;
        if (this.minWidth == 0 && this.maxWidth == new core.DartDouble(double).infinity && this.minHeight == 0 && this.maxHeight == new core.DartDouble(double).infinity) return `BoxConstraints(unconstrained${annotation})`;
        var describe : (min : double,max : double,dim : string) => string = (min : double,max : double,dim : string) : string =>  {
            if (min == max) return `${dim}=${new core.DartDouble(min).toStringAsFixed(1)}`;
            return `${new core.DartDouble(min).toStringAsFixed(1)}<=${dim}<=${new core.DartDouble(max).toStringAsFixed(1)}`;
        };
        let width : string = describe(this.minWidth,this.maxWidth,'w');
        let height : string = describe(this.minHeight,this.maxHeight,'h');
        return `BoxConstraints(${width}, ${height}${annotation})`;
    }
}

export namespace BoxHitTestEntry {
    export type Constructors = lib6.HitTestEntry.Constructors | 'BoxHitTestEntry';
    export type Interface = Omit<BoxHitTestEntry, Constructors>;
}
@DartClass
export class BoxHitTestEntry extends lib6.HitTestEntry {
    constructor(target : RenderBox,localPosition : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BoxHitTestEntry(target : RenderBox,localPosition : any) {
        this.assert = assert;
        this.localPosition = localPosition;
    }
     : any;

     : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get target() : RenderBox {
        return super.target;
    }
    localPosition : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${lib7.describeIdentity(this.target)}@${this.localPosition}`;
    }
}

export namespace BoxParentData {
    export type Constructors = lib3.ParentData.Constructors | 'BoxParentData';
    export type Interface = Omit<BoxParentData, Constructors>;
}
@DartClass
export class BoxParentData extends lib3.ParentData {
    offset : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `offset=${this.offset}`;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BoxParentData() {
        this.offset = Offset.zero;
    }
}

export enum _IntrinsicDimension {
    minWidth,
    maxWidth,
    minHeight,
    maxHeight
}

export namespace _IntrinsicDimensionsCacheEntry {
    export type Constructors = '_IntrinsicDimensionsCacheEntry';
    export type Interface = Omit<_IntrinsicDimensionsCacheEntry, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class _IntrinsicDimensionsCacheEntry {
    constructor(dimension : _IntrinsicDimension,argument : double) {
    }
    @defaultConstructor
    _IntrinsicDimensionsCacheEntry(dimension : _IntrinsicDimension,argument : double) {
        this.dimension = dimension;
        this.argument = argument;
    }
    dimension : _IntrinsicDimension;

    argument : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (isNot(other, _IntrinsicDimensionsCacheEntry)) return false;
        let typedOther : _IntrinsicDimensionsCacheEntry = other;
        return op(Op.EQUALS,this.dimension,typedOther.dimension) && this.argument == typedOther.argument;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.dimension,this.argument);
    }
}

export namespace RenderBox {
    export type Constructors = lib3.RenderObject.Constructors | 'RenderBox';
    export type Interface = Omit<RenderBox, Constructors>;
}
@DartClass
export class RenderBox extends lib3.RenderObject {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setupParentData(child : lib3.RenderObject) : any {
        if (isNot(child.parentData, BoxParentData)) child.parentData = BoxParentData();
    }
    _cachedIntrinsicDimensions : core.DartMap<_IntrinsicDimensionsCacheEntry,double>;

    _computeIntrinsicDimension(dimension : _IntrinsicDimension,argument : double,computer : (argument : double) => double) : double {
        /* TODO (AssertStatementImpl) : assert (RenderObject.debugCheckingIntrinsics || !debugDoingThisResize); */;
        let shouldCache : boolean = true;
        /* TODO (AssertStatementImpl) : assert (() {if (RenderObject.debugCheckingIntrinsics) shouldCache = false; return true;}()); */;
        if (shouldCache) {
            this._cachedIntrinsicDimensions = ( this._cachedIntrinsicDimensions ) || ( new core.DartMap.literal([
            ]) );
            return this._cachedIntrinsicDimensions.putIfAbsent(_IntrinsicDimensionsCacheEntry(dimension,argument),() =>  {
                return computer(argument);
            });
        }
        return computer(argument);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    getMinIntrinsicWidth(height : double) : double {
        /* TODO (AssertStatementImpl) : assert (() {if (height == null) {throw FlutterError('The height argument to getMinIntrinsicWidth was null.\n' 'The argument to getMinIntrinsicWidth must not be negative or null. ' 'If you do not have a specific height in mind, then pass double.infinity instead.');} if (height < 0.0) {throw FlutterError('The height argument to getMinIntrinsicWidth was negative.\n' 'The argument to getMinIntrinsicWidth must not be negative or null. ' 'If you perform computations on another height before passing it to ' 'getMinIntrinsicWidth, consider using math.max() or double.clamp() ' 'to force the value into the valid range.');} return true;}()); */;
        return this._computeIntrinsicDimension(_IntrinsicDimension.minWidth,height,this.computeMinIntrinsicWidth.bind(this));
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicWidth(height : double) : double {
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    getMaxIntrinsicWidth(height : double) : double {
        /* TODO (AssertStatementImpl) : assert (() {if (height == null) {throw FlutterError('The height argument to getMaxIntrinsicWidth was null.\n' 'The argument to getMaxIntrinsicWidth must not be negative or null. ' 'If you do not have a specific height in mind, then pass double.infinity instead.');} if (height < 0.0) {throw FlutterError('The height argument to getMaxIntrinsicWidth was negative.\n' 'The argument to getMaxIntrinsicWidth must not be negative or null. ' 'If you perform computations on another height before passing it to ' 'getMaxIntrinsicWidth, consider using math.max() or double.clamp() ' 'to force the value into the valid range.');} return true;}()); */;
        return this._computeIntrinsicDimension(_IntrinsicDimension.maxWidth,height,this.computeMaxIntrinsicWidth.bind(this));
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicWidth(height : double) : double {
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    getMinIntrinsicHeight(width : double) : double {
        /* TODO (AssertStatementImpl) : assert (() {if (width == null) {throw FlutterError('The width argument to getMinIntrinsicHeight was null.\n' 'The argument to getMinIntrinsicHeight must not be negative or null. ' 'If you do not have a specific width in mind, then pass double.infinity instead.');} if (width < 0.0) {throw FlutterError('The width argument to getMinIntrinsicHeight was negative.\n' 'The argument to getMinIntrinsicHeight must not be negative or null. ' 'If you perform computations on another width before passing it to ' 'getMinIntrinsicHeight, consider using math.max() or double.clamp() ' 'to force the value into the valid range.');} return true;}()); */;
        return this._computeIntrinsicDimension(_IntrinsicDimension.minHeight,width,this.computeMinIntrinsicHeight.bind(this));
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    computeMinIntrinsicHeight(width : double) : double {
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    getMaxIntrinsicHeight(width : double) : double {
        /* TODO (AssertStatementImpl) : assert (() {if (width == null) {throw FlutterError('The width argument to getMaxIntrinsicHeight was null.\n' 'The argument to getMaxIntrinsicHeight must not be negative or null. ' 'If you do not have a specific width in mind, then pass double.infinity instead.');} if (width < 0.0) {throw FlutterError('The width argument to getMaxIntrinsicHeight was negative.\n' 'The argument to getMaxIntrinsicHeight must not be negative or null. ' 'If you perform computations on another width before passing it to ' 'getMaxIntrinsicHeight, consider using math.max() or double.clamp() ' 'to force the value into the valid range.');} return true;}()); */;
        return this._computeIntrinsicDimension(_IntrinsicDimension.maxHeight,width,this.computeMaxIntrinsicHeight.bind(this));
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    computeMaxIntrinsicHeight(width : double) : double {
        return 0.0;
    }
    get hasSize() : boolean {
        return this._size != null;
    }
    get size() : any {
        /* TODO (AssertStatementImpl) : assert (hasSize, 'RenderBox was not laid out: ${toString()}'); */;
        /* TODO (AssertStatementImpl) : assert (() {if (_size is _DebugSize) {final _DebugSize _size = this._size; assert (_size._owner == this); if (RenderObject.debugActiveLayout != null) {assert (debugDoingThisResize || debugDoingThisLayout || (RenderObject.debugActiveLayout == parent && _size._canBeUsedByParent));} assert (_size == this._size);} return true;}()); */;
        return this._size;
    }
    _size : any;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    set size(value : any) {
        /* TODO (AssertStatementImpl) : assert (!(debugDoingThisResize && debugDoingThisLayout)); */;
        /* TODO (AssertStatementImpl) : assert (sizedByParent || !debugDoingThisResize); */;
        /* TODO (AssertStatementImpl) : assert (() {if ((sizedByParent && debugDoingThisResize) || (!sizedByParent && debugDoingThisLayout)) return true; assert (!debugDoingThisResize); String contract, violation, hint; if (debugDoingThisLayout) {assert (sizedByParent); violation = 'It appears that the size setter was called from performLayout().'; hint = '';} else {violation = 'The size setter was called from outside layout (neither performResize() nor performLayout() were being run for this object).'; if (owner != null && owner.debugDoingLayout) hint = 'Only the object itself can set its size. It is a contract violation for other objects to set it.';} if (sizedByParent) contract = 'Because this RenderBox has sizedByParent set to true, it must set its size in performResize().'; else contract = 'Because this RenderBox has sizedByParent set to false, it must set its size in performLayout().'; throw FlutterError('RenderBox size setter called incorrectly.\n' '$violation\n' '$hint\n' '$contract\n' 'The RenderBox in question is:\n' '  $this');}()); */;
        /* TODO (AssertStatementImpl) : assert (() {value = debugAdoptSize(value); return true;}()); */;
        this._size = value;
        /* TODO (AssertStatementImpl) : assert (() {debugAssertDoesMeetConstraints(); return true;}()); */;
    }
    debugAdoptSize(value : any) : any {
        let result : any = value;
        /* TODO (AssertStatementImpl) : assert (() {if (value is _DebugSize) {if (value._owner != this) {if (value._owner.parent != this) {throw FlutterError('The size property was assigned a size inappropriately.\n' 'The following render object:\n' '  $this\n' '...was assigned a size obtained from:\n' '  ${value._owner}\n' 'However, this second render object is not, or is no longer, a ' 'child of the first, and it is therefore a violation of the ' 'RenderBox layout protocol to use that size in the layout of the ' 'first render object.\n' 'If the size was obtained at a time where it was valid to read ' 'the size (because the second render object above was a child ' 'of the first at the time), then it should be adopted using ' 'debugAdoptSize at that time.\n' 'If the size comes from a grandchild or a render object from an ' 'entirely different part of the render tree, then there is no ' 'way to be notified when the size changes and therefore attempts ' 'to read that size are almost certainly a source of bugs. A different ' 'approach should be used.');} if (!value._canBeUsedByParent) {throw FlutterError('A child\'s size was used without setting parentUsesSize.\n' 'The following render object:\n' '  $this\n' '...was assigned a size obtained from its child:\n' '  ${value._owner}\n' 'However, when the child was laid out, the parentUsesSize argument ' 'was not set or set to false. Subsequently this transpired to be ' 'inaccurate: the size was nonetheless used by the parent.\n' 'It is important to tell the framework if the size will be used or not ' 'as several important performance optimizations can be made if the ' 'size will not be used by the parent.');}}} result = _DebugSize(value, this, debugCanParentUseSize); return true;}()); */;
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get semanticBounds() : any {
        return op(Op.BITAND,Offset.zero,this.size);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugResetSize() : any {
        this.size = this.size;
    }
    _cachedBaselines : core.DartMap<any,double>;

    private static __$_debugDoingBaseline : boolean;
    static get _debugDoingBaseline() : boolean { 
        if (this.__$_debugDoingBaseline===undefined) {
            this.__$_debugDoingBaseline = false;
        }
        return this.__$_debugDoingBaseline;
    }
    static set _debugDoingBaseline(__$value : boolean)  { 
        this.__$_debugDoingBaseline = __$value;
    }

    static _debugSetDoingBaseline(value : boolean) : boolean {
        RenderBox._debugDoingBaseline = value;
        return true;
    }
    getDistanceToBaseline(baseline : any,_namedArguments? : {onlyReal? : boolean}) : double {
        let {onlyReal} = Object.assign({
            "onlyReal" : false}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (!_debugDoingBaseline, 'Please see the documentation for computeDistanceToActualBaseline for the required calling conventions of this method.'); */;
        /* TODO (AssertStatementImpl) : assert (!debugNeedsLayout); */;
        /* TODO (AssertStatementImpl) : assert (() {final RenderObject parent = this.parent; if (owner.debugDoingLayout) return (RenderObject.debugActiveLayout == parent) && parent.debugDoingThisLayout; if (owner.debugDoingPaint) return ((RenderObject.debugActivePaint == parent) && parent.debugDoingThisPaint) || ((RenderObject.debugActivePaint == this) && debugDoingThisPaint); assert (parent == this.parent); return false;}()); */;
        /* TODO (AssertStatementImpl) : assert (_debugSetDoingBaseline(true)); */;
        let result : double = this.getDistanceToActualBaseline(baseline);
        /* TODO (AssertStatementImpl) : assert (_debugSetDoingBaseline(false)); */;
        if (result == null && !onlyReal) return this.size.height;
        return result;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    getDistanceToActualBaseline(baseline : any) : double {
        /* TODO (AssertStatementImpl) : assert (_debugDoingBaseline, 'Please see the documentation for computeDistanceToActualBaseline for the required calling conventions of this method.'); */;
        this._cachedBaselines = ( this._cachedBaselines ) || ( new core.DartMap.literal([
        ]) );
        this._cachedBaselines.putIfAbsent(baseline,() =>  {
            return this.computeDistanceToActualBaseline(baseline);
        });
        return this._cachedBaselines.get(baseline);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    computeDistanceToActualBaseline(baseline : any) : double {
        /* TODO (AssertStatementImpl) : assert (_debugDoingBaseline, 'Please see the documentation for computeDistanceToActualBaseline for the required calling conventions of this method.'); */;
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get constraints() : BoxConstraints {
        return super.constraints;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugAssertDoesMeetConstraints() : any {
        /* TODO (AssertStatementImpl) : assert (constraints != null); */;
        /* TODO (AssertStatementImpl) : assert (() {if (!hasSize) {assert (!debugNeedsLayout); String contract; if (sizedByParent) contract = 'Because this RenderBox has sizedByParent set to true, it must set its size in performResize().\n'; else contract = 'Because this RenderBox has sizedByParent set to false, it must set its size in performLayout().\n'; throw FlutterError('RenderBox did not set its size during layout.\n' '$contract' 'It appears that this did not happen; layout completed, but the size property is still null.\n' 'The RenderBox in question is:\n' '  $this');} if (!_size.isFinite) {final StringBuffer information = StringBuffer(); if (!constraints.hasBoundedWidth) {RenderBox node = this; while (!node.constraints.hasBoundedWidth && node.parent is RenderBox) node = node.parent; information.writeln('The nearest ancestor providing an unbounded width constraint is:'); information.write('  '); information.writeln(node.toStringShallow(joiner: '\n  '));} if (!constraints.hasBoundedHeight) {RenderBox node = this; while (!node.constraints.hasBoundedHeight && node.parent is RenderBox) node = node.parent; information.writeln('The nearest ancestor providing an unbounded height constraint is:'); information.write('  '); information.writeln(node.toStringShallow(joiner: '\n  '));} throw FlutterError('$runtimeType object was given an infinite size during layout.\n' 'This probably means that it is a render object that tries to be ' 'as big as possible, but it was put inside another render object ' 'that allows its children to pick their own size.\n' '$information' 'The constraints that applied to the $runtimeType were:\n' '  $constraints\n' 'The exact size it was given was:\n' '  $_size\n' 'See https://flutter.io/layout/ for more information.');} if (!constraints.isSatisfiedBy(_size)) {throw FlutterError('$runtimeType does not meet its constraints.\n' 'Constraints: $constraints\n' 'Size: $_size\n' 'If you are not writing your own RenderBox subclass, then this is not ' 'your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=BUG.md');} if (debugCheckIntrinsicSizes) {assert (!RenderObject.debugCheckingIntrinsics); RenderObject.debugCheckingIntrinsics = true; final StringBuffer failures = StringBuffer(); int failureCount = 0; double testIntrinsic(double function(double extent), String name, double constraint) {final double result = function(constraint); if (result < 0) {failures.writeln(' * $name($constraint) returned a negative value: $result'); failureCount += 1;} if (!result.isFinite) {failures.writeln(' * $name($constraint) returned a non-finite value: $result'); failureCount += 1;} return result;} void testIntrinsicsForValues(double getMin(double extent), double getMax(double extent), String name, double constraint) {final double min = testIntrinsic(getMin, 'getMinIntrinsic$name', constraint); final double max = testIntrinsic(getMax, 'getMaxIntrinsic$name', constraint); if (min > max) {failures.writeln(' * getMinIntrinsic$name($constraint) returned a larger value ($min) than getMaxIntrinsic$name($constraint) ($max)'); failureCount += 1;}} testIntrinsicsForValues(getMinIntrinsicWidth, getMaxIntrinsicWidth, 'Width', double.infinity); testIntrinsicsForValues(getMinIntrinsicHeight, getMaxIntrinsicHeight, 'Height', double.infinity); if (constraints.hasBoundedWidth) testIntrinsicsForValues(getMinIntrinsicWidth, getMaxIntrinsicWidth, 'Width', constraints.maxWidth); if (constraints.hasBoundedHeight) testIntrinsicsForValues(getMinIntrinsicHeight, getMaxIntrinsicHeight, 'Height', constraints.maxHeight); RenderObject.debugCheckingIntrinsics = false; if (failures.isNotEmpty) {assert (failureCount > 0); throw FlutterError('The intrinsic dimension methods of the $runtimeType class returned values that violate the intrinsic protocol contract.\n' 'The following ${failureCount > 1 ? "failures" : "failure"} was detected:\n' '$failures' 'If you are not writing your own RenderBox subclass, then this is not\n' 'your fault. Contact support: https://github.com/flutter/flutter/issues/new?template=BUG.md');}} return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    markNeedsLayout() : any {
        if ((this._cachedBaselines != null && this._cachedBaselines.isNotEmpty) || (this._cachedIntrinsicDimensions != null && this._cachedIntrinsicDimensions.isNotEmpty)) {
            ((_815_)=>(!!_815_)?_815_.clear():null)(this._cachedBaselines);
            ((_816_)=>(!!_816_)?_816_.clear():null)(this._cachedIntrinsicDimensions);
            if (is(this.parent, lib3.RenderObject)) {
                this.markParentNeedsLayout();
                return;
            }
        }
        super.markNeedsLayout();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performResize() : any {
        this.size = this.constraints.smallest;
        /* TODO (AssertStatementImpl) : assert (size.isFinite); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout() : any {
        /* TODO (AssertStatementImpl) : assert (() {if (!sizedByParent) {throw FlutterError('$runtimeType did not implement performLayout().\n' 'RenderBox subclasses need to either override performLayout() to ' 'set a size and lay out any children, or, set sizedByParent to true ' 'so that performResize() sizes the render object.');} return true;}()); */;
    }
    hitTest(result : lib6.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (() {if (!hasSize) {if (debugNeedsLayout) {throw FlutterError('Cannot hit test a render box that has never been laid out.\n' 'The hitTest() method was called on this RenderBox:\n' '  $this\n' 'Unfortunately, this object\'s geometry is not known at this time, ' 'probably because it has never been laid out. ' 'This means it cannot be accurately hit-tested. If you are trying ' 'to perform a hit test during the layout phase itself, make sure ' 'you only hit test nodes that have completed layout (e.g. the node\'s ' 'children, after their layout() method has been called).');} throw FlutterError('Cannot hit test a render box with no size.\n' 'The hitTest() method was called on this RenderBox:\n' '  $this\n' 'Although this node is not marked as needing layout, ' 'its size is not set. A RenderBox object must have an ' 'explicit size before it can be hit-tested. Make sure ' 'that the RenderBox in question sets its size during layout.');} return true;}()); */;
        if (this._size.contains(position)) {
            if (this.hitTestChildren(result,{
                position : position}) || this.hitTestSelf(position)) {
                result.add(BoxHitTestEntry(this,position));
                return true;
            }
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestSelf(position : any) : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestChildren(result : lib6.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyPaintTransform(child : lib3.RenderObject,transform : lib8.Matrix4) : any {
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        /* TODO (AssertStatementImpl) : assert (child.parent == this); */;
        /* TODO (AssertStatementImpl) : assert (() {if (child.parentData is! BoxParentData) {throw FlutterError('$runtimeType does not implement applyPaintTransform.\n' 'The following $runtimeType object:\n' '  ${toStringShallow()}\n' '...did not use a BoxParentData class for the parentData field of the following child:\n' '  ${child.toStringShallow()}\n' 'The $runtimeType class inherits from RenderBox. ' 'The default applyPaintTransform implementation provided by RenderBox assumes that the ' 'children all use BoxParentData objects for their parentData field. ' 'Since $runtimeType does not in fact use that ParentData class for its children, it must ' 'provide an implementation of applyPaintTransform that supports the specific ParentData ' 'subclass used by its children (which apparently is ${child.parentData.runtimeType}).');} return true;}()); */;
        let childParentData : BoxParentData = child.parentData;
        let offset : any = childParentData.offset;
        transform.translate(offset.dx,offset.dy);
    }
    globalToLocal(point : any,_namedArguments? : {ancestor? : lib3.RenderObject}) : any {
        let {ancestor} = Object.assign({
        }, _namedArguments );
        let transform : lib8.Matrix4 = this.getTransformTo(ancestor);
        let det : double = transform.invert();
        if (det == 0.0) return Offset.zero;
        let n : lib8.Vector3 = lib8.Vector3(0.0,0.0,1.0);
        let i : lib8.Vector3 = transform.perspectiveTransform(lib8.Vector3(0.0,0.0,0.0));
        let d : lib8.Vector3 = op(Op.MINUS,transform.perspectiveTransform(lib8.Vector3(0.0,0.0,1.0)),i);
        let s : lib8.Vector3 = transform.perspectiveTransform(lib8.Vector3(point.dx,point.dy,0.0));
        let p : lib8.Vector3 = op(Op.MINUS,s,op(Op.TIMES,d,(n.dot(s) / n.dot(d))));
        return Offset(p.x,p.y);
    }
    localToGlobal(point : any,_namedArguments? : {ancestor? : lib3.RenderObject}) : any {
        let {ancestor} = Object.assign({
        }, _namedArguments );
        return lib9.MatrixUtils.transformPoint(this.getTransformTo(ancestor),point);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get paintBounds() : any {
        return op(Op.BITAND,Offset.zero,this.size);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleEvent(event : lib10.PointerEvent,entry : BoxHitTestEntry) : any {
        super.handleEvent(event,entry);
    }
    _debugActivePointers : number;

    debugHandleEvent(event : lib10.PointerEvent,entry : lib6.HitTestEntry) : boolean {
        /* TODO (AssertStatementImpl) : assert (() {if (debugPaintPointersEnabled) {if (event is PointerDownEvent) {_debugActivePointers += 1;} else if (event is PointerUpEvent || event is PointerCancelEvent) {_debugActivePointers -= 1;} markNeedsPaint();} return true;}()); */;
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugPaint(context : lib3.PaintingContext,offset : any) : any {
        /* TODO (AssertStatementImpl) : assert (() {if (debugPaintSizeEnabled) debugPaintSize(context, offset); if (debugPaintBaselinesEnabled) debugPaintBaselines(context, offset); if (debugPaintPointersEnabled) debugPaintPointers(context, offset); return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    debugPaintSize(context : lib3.PaintingContext,offset : any) : any {
        /* TODO (AssertStatementImpl) : assert (() {final Paint paint = Paint()..style = PaintingStyle.stroke..strokeWidth = 1.0..color = const Color(0xFF00FFFF); context.canvas.drawRect((offset & size).deflate(0.5), paint); return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    debugPaintBaselines(context : lib3.PaintingContext,offset : any) : any {
        /* TODO (AssertStatementImpl) : assert (() {final Paint paint = Paint()..style = PaintingStyle.stroke..strokeWidth = 0.25; Path path; final double baselineI = getDistanceToBaseline(TextBaseline.ideographic, onlyReal: true); if (baselineI != null) {paint.color = const Color(0xFFFFD000); path = Path(); path.moveTo(offset.dx, offset.dy + baselineI); path.lineTo(offset.dx + size.width, offset.dy + baselineI); context.canvas.drawPath(path, paint);} final double baselineA = getDistanceToBaseline(TextBaseline.alphabetic, onlyReal: true); if (baselineA != null) {paint.color = const Color(0xFF00FF00); path = Path(); path.moveTo(offset.dx, offset.dy + baselineA); path.lineTo(offset.dx + size.width, offset.dy + baselineA); context.canvas.drawPath(path, paint);} return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    debugPaintPointers(context : lib3.PaintingContext,offset : any) : any {
        /* TODO (AssertStatementImpl) : assert (() {if (_debugActivePointers > 0) {final Paint paint = Paint()..color = Color(0x00BBBB | ((0x04000000 * depth) & 0xFF000000)); context.canvas.drawRect(offset & size, paint);} return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib7.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib7.DiagnosticsProperty('size',this._size,{
            missingIfNull : true}));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderBox() {
        this._debugActivePointers = 0;
    }
}

export namespace ContainerBoxParentData {
    export type Constructors = BoxParentData.Constructors | 'ContainerBoxParentData';
    export type Interface<ChildType extends lib3.RenderObject> = Omit<ContainerBoxParentData<ChildType extends lib3.RenderObject>, Constructors>;
}
@DartClass
@With(any)
export class ContainerBoxParentData<ChildType extends lib3.RenderObject> extends BoxParentData implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ContainerBoxParentData() {
    }
}

export class properties {
}
