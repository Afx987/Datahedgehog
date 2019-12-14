/** Library asset:datahedgehog_monitor/lib/lib/rendering/list_wheel_viewport.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./box";
import * as lib4 from "./viewport";
import * as lib5 from "./viewport_offset";
import * as lib6 from "./object";
import * as math from "@dart2ts/dart/math";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/painting/matrix_utils";
import * as lib9 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/animation/curves";

export var getOffsetToReveal : (target : lib6.RenderObject,alignment : double,_namedArguments? : {rect? : any}) => lib4.RevealedOffset = (target : lib6.RenderObject,alignment : double,_namedArguments? : {rect? : any}) : lib4.RevealedOffset =>  {
    let {rect} = Object.assign({
    }, _namedArguments );
    rect = ( rect ) || ( target.paintBounds );
    let child : lib6.RenderObject = target;
    while (child.parent != this)child = child.parent;
    let parentData : ListWheelParentData = child.parentData;
    let targetOffset : double = parentData.offset.dy;
    let transform : lib9.Matrix4 = target.getTransformTo(this);
    let bounds : any = lib8.MatrixUtils.transformRect(transform,rect);
    let targetRect : any = bounds.translate(0.0,op(Op.DIVIDE,(op(Op.MINUS,size.height,properties.itemExtent)),2));
    return lib4.RevealedOffset({
        offset : targetOffset,rect : targetRect});
};
export var hitTestChildren : (result : lib11.HitTestResult,_namedArguments? : {position? : any}) => boolean = (result : lib11.HitTestResult,_namedArguments? : {position? : any}) : boolean =>  {
    let {position} = Object.assign({
    }, _namedArguments );
    return false;
};
export var describeApproximatePaintClip : (child : lib6.RenderObject) => any = (child : lib6.RenderObject) : any =>  {
    if (child != null && _shouldClipAtCurrentOffset()) {
        return op(Op.BITAND,Offset.zero,size);
    }
    return null;
};
export var _hasScrolled : () => any = () : any =>  {
    markNeedsLayout();
    markNeedsSemanticsUpdate();
};
export var setupParentData : (child : lib6.RenderObject) => any = (child : lib6.RenderObject) : any =>  {
    if (isNot(child.parentData, ListWheelParentData)) child.parentData = ListWheelParentData();
};
export var attach : (owner : lib6.PipelineOwner) => any = (owner : lib6.PipelineOwner) : any =>  {
    super.attach(owner);
    properties._offset.addListener(_hasScrolled);
};
export var detach : () => any = () : any =>  {
    properties._offset.removeListener(_hasScrolled);
    super.detach();
};
export var _getUntransformedPaintingCoordinateY : (layoutCoordinateY : double) => double = (layoutCoordinateY : double) : double =>  {
    return layoutCoordinateY - properties._topScrollMarginExtent - properties.offset.pixels;
};
export var _getIntrinsicCrossAxis : (childSize : (child : lib3.RenderBox) => double) => double = (childSize : (child : lib3.RenderBox) => double) : double =>  {
    let extent : double = 0.0;
    let child : lib3.RenderBox = firstChild;
    while (child != null){
        extent = math.max(extent,childSize(child));
        child = childAfter(child);
    }
    return extent;
};
export var showOnScreen : (_namedArguments? : {descendant? : lib6.RenderObject,rect? : any,duration? : core.DartDuration,curve? : lib12.Curve}) => any = (_namedArguments? : {descendant? : lib6.RenderObject,rect? : any,duration? : core.DartDuration,curve? : lib12.Curve}) : any =>  {
    let {descendant,rect,duration,curve} = Object.assign({
        "duration" : core.DartDuration.zero,
        "curve" : lib12.Curves.ease}, _namedArguments );
    if (descendant != null) {
        let revealedOffset : lib4.RevealedOffset = getOffsetToReveal(descendant,0.5,{
            rect : rect});
        if (op(Op.EQUALS,duration,core.DartDuration.zero)) {
            properties.offset.jumpTo(revealedOffset.offset);
        }else {
            properties.offset.animateTo(revealedOffset.offset,{
                duration : duration,curve : curve});
        }
        rect = revealedOffset.rect;
    }
    super.showOnScreen({
        rect : rect,duration : duration,curve : curve});
};
export var computeMaxIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    return _getIntrinsicCrossAxis((child : lib3.RenderBox) =>  {
        return child.getMaxIntrinsicWidth(height);
    });
};
export var computeMinIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    if (properties.childManager.childCount == null) return 0.0;
    return properties.childManager.childCount * properties._itemExtent;
};
export var computeMaxIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    if (properties.childManager.childCount == null) return 0.0;
    return properties.childManager.childCount * properties._itemExtent;
};
export var performResize : () => any = () : any =>  {
    size = constraints.biggest;
};
export var indexOf : (child : lib3.RenderBox) => number = (child : lib3.RenderBox) : number =>  {
    /* TODO (AssertStatementImpl) : assert (child != null); */;
    let childParentData : ListWheelParentData = child.parentData;
    /* TODO (AssertStatementImpl) : assert (childParentData.index != null); */;
    return childParentData.index;
};
export var scrollOffsetToIndex : (scrollOffset : double) => number = (scrollOffset : double) : number =>  {
    return new core.DartDouble((scrollOffset / properties.itemExtent)).floor();
};
export var indexToScrollOffset : (index : number) => double = (index : number) : double =>  {
    return index * properties.itemExtent;
};
export var _createChild : (index : number,_namedArguments? : {after? : lib3.RenderBox}) => any = (index : number,_namedArguments? : {after? : lib3.RenderBox}) : any =>  {
    let {after} = Object.assign({
    }, _namedArguments );
    invokeLayoutCallback((constraints : lib3.BoxConstraints) =>  {
        /* TODO (AssertStatementImpl) : assert (constraints == this.constraints); */;
        properties.childManager.createChild(index,{
            after : after});
    });
};
export var _destroyChild : (child : lib3.RenderBox) => any = (child : lib3.RenderBox) : any =>  {
    invokeLayoutCallback((constraints : lib3.BoxConstraints) =>  {
        /* TODO (AssertStatementImpl) : assert (constraints == this.constraints); */;
        properties.childManager.removeChild(child);
    });
};
export var _layoutChild : (child : lib3.RenderBox,constraints : lib3.BoxConstraints,index : number) => any = (child : lib3.RenderBox,constraints : lib3.BoxConstraints,index : number) : any =>  {
    child.layout(constraints,{
        parentUsesSize : true});
    let childParentData : ListWheelParentData = child.parentData;
    let crossPosition : double = op(Op.MINUS,op(Op.DIVIDE,size.width,2.0),op(Op.DIVIDE,child.size.width,2.0));
    childParentData.offset = Offset(crossPosition,indexToScrollOffset(index));
};
export var performLayout : () => any = () : any =>  {
    let childConstraints : lib3.BoxConstraints = constraints.copyWith({
        minHeight : properties._itemExtent,maxHeight : properties._itemExtent,minWidth : 0.0});
    let visibleHeight : double = size.height;
    if (properties.renderChildrenOutsideViewport) visibleHeight *= 2;
    let firstVisibleOffset : double = properties.offset.pixels + properties._itemExtent / 2 - visibleHeight / 2;
    let lastVisibleOffset : double = firstVisibleOffset + visibleHeight;
    let targetFirstIndex : number = scrollOffsetToIndex(firstVisibleOffset);
    let targetLastIndex : number = scrollOffsetToIndex(lastVisibleOffset);
    if (targetLastIndex * properties._itemExtent == lastVisibleOffset) targetLastIndex--;
    while (!properties.childManager.childExistsAt(targetFirstIndex) && targetFirstIndex <= targetLastIndex)targetFirstIndex++;
    while (!properties.childManager.childExistsAt(targetLastIndex) && targetFirstIndex <= targetLastIndex)targetLastIndex--;
    if (targetFirstIndex > targetLastIndex) {
        while (firstChild != null)_destroyChild(firstChild);
        return;
    }
    if (op(Op.GT,childCount,0) && (indexOf(firstChild) > targetLastIndex || indexOf(lastChild) < targetFirstIndex)) {
        while (firstChild != null)_destroyChild(firstChild);
    }
    if (op(Op.EQUALS,childCount,0)) {
        _createChild(targetFirstIndex);
        _layoutChild(firstChild,childConstraints,targetFirstIndex);
    }
    let currentFirstIndex : number = indexOf(firstChild);
    let currentLastIndex : number = indexOf(lastChild);
    while (currentFirstIndex < targetFirstIndex){
        _destroyChild(firstChild);
        currentFirstIndex++;
    }
    while (currentLastIndex > targetLastIndex){
        _destroyChild(lastChild);
        currentLastIndex--;
    }
    let child : lib3.RenderBox = firstChild;
    while (child != null){
        child.layout(childConstraints,{
            parentUsesSize : true});
        child = childAfter(child);
    }
    while (currentFirstIndex > targetFirstIndex){
        _createChild(currentFirstIndex - 1);
        _layoutChild(firstChild,childConstraints,--currentFirstIndex);
    }
    while (currentLastIndex < targetLastIndex){
        _createChild(currentLastIndex + 1,{
            after : lastChild});
        _layoutChild(lastChild,childConstraints,++currentLastIndex);
    }
    properties.offset.applyViewportDimension(properties._viewportExtent);
    let minScrollExtent : double = properties.childManager.childExistsAt(targetFirstIndex - 1) ? properties._minEstimatedScrollExtent : indexToScrollOffset(targetFirstIndex);
    let maxScrollExtent : double = properties.childManager.childExistsAt(targetLastIndex + 1) ? properties._maxEstimatedScrollExtent : indexToScrollOffset(targetLastIndex);
    properties.offset.applyContentDimensions(minScrollExtent,maxScrollExtent);
};
export var _shouldClipAtCurrentOffset : () => boolean = () : boolean =>  {
    let highestUntransformedPaintY : double = _getUntransformedPaintingCoordinateY(0.0);
    return highestUntransformedPaintY < 0.0 || op(Op.LT,size.height,highestUntransformedPaintY + properties._maxEstimatedScrollExtent + properties._itemExtent);
};
export var paint : (context : lib6.PaintingContext,offset : any) => any = (context : lib6.PaintingContext,offset : any) : any =>  {
    if (op(Op.GT,childCount,0)) {
        if (properties._clipToSize && _shouldClipAtCurrentOffset()) {
            context.pushClipRect(needsCompositing,offset,op(Op.BITAND,Offset.zero,size),_paintVisibleChildren);
        }else {
            _paintVisibleChildren(context,offset);
        }
    }
};
export var _paintVisibleChildren : (context : lib6.PaintingContext,offset : any) => any = (context : lib6.PaintingContext,offset : any) : any =>  {
    let childToPaint : lib3.RenderBox = firstChild;
    let childParentData : ListWheelParentData = ((t)=>(!!t)?t.parentData:null)(childToPaint);
    while (childParentData != null){
        _paintTransformedChild(childToPaint,context,offset,childParentData.offset);
        childToPaint = childAfter(childToPaint);
        childParentData = ((t)=>(!!t)?t.parentData:null)(childToPaint);
    }
};
export var _paintTransformedChild : (child : lib3.RenderBox,context : lib6.PaintingContext,offset : any,layoutOffset : any) => any = (child : lib3.RenderBox,context : lib6.PaintingContext,offset : any,layoutOffset : any) : any =>  {
    let untransformedPaintingCoordinates : any = op(Op.PLUS,offset,Offset(layoutOffset.dx,_getUntransformedPaintingCoordinateY(layoutOffset.dy)));
    let fractionalY : double = op(Op.DIVIDE,(op(Op.PLUS,untransformedPaintingCoordinates.dy,properties._itemExtent / 2.0)),size.height);
    let angle : double = -(fractionalY - 0.5) * 2.0 * properties._maxVisibleRadian;
    if (angle > op(Op.DIVIDE,math.pi,2.0) || angle < op(Op.DIVIDE,op(Op.NEG,math.pi),2.0)) return;
    let transform : lib9.Matrix4 = lib8.MatrixUtils.createCylindricalProjectionTransform({
        radius : op(Op.DIVIDE,op(Op.TIMES,size.height,properties._diameterRatio),2.0),angle : angle,perspective : properties._perspective});
    let offsetToCenter : any = Offset(untransformedPaintingCoordinates.dx,-properties._topScrollMarginExtent);
    if (!properties.useMagnifier) _paintChildCylindrically(context,offset,child,transform,offsetToCenter);else _paintChildWithMagnifier(context,offset,child,transform,offsetToCenter,untransformedPaintingCoordinates);
};
export var _paintChildWithMagnifier : (context : lib6.PaintingContext,offset : any,child : lib3.RenderBox,cylindricalTransform : lib9.Matrix4,offsetToCenter : any,untransformedPaintingCoordinates : any) => any = (context : lib6.PaintingContext,offset : any,child : lib3.RenderBox,cylindricalTransform : lib9.Matrix4,offsetToCenter : any,untransformedPaintingCoordinates : any) : any =>  {
    let magnifierTopLinePosition : double = op(Op.MINUS,op(Op.DIVIDE,size.height,2),properties._itemExtent * properties._magnification / 2);
    let magnifierBottomLinePosition : double = op(Op.PLUS,op(Op.DIVIDE,size.height,2),properties._itemExtent * properties._magnification / 2);
    let isAfterMagnifierTopLine : boolean = op(Op.GEQ,untransformedPaintingCoordinates.dy,magnifierTopLinePosition - properties._itemExtent * properties._magnification);
    let isBeforeMagnifierBottomLine : boolean = op(Op.LEQ,untransformedPaintingCoordinates.dy,magnifierBottomLinePosition);
    if (isAfterMagnifierTopLine && isBeforeMagnifierBottomLine) {
        let centerRect : any = Rect.fromLTWH(0.0,magnifierTopLinePosition,size.width,properties._itemExtent * properties._magnification);
        let topHalfRect : any = Rect.fromLTWH(0.0,0.0,size.width,magnifierTopLinePosition);
        let bottomHalfRect : any = Rect.fromLTWH(0.0,magnifierBottomLinePosition,size.width,magnifierTopLinePosition);
        context.pushClipRect(false,offset,centerRect,(context : lib6.PaintingContext,offset : any) =>  {
            context.pushTransform(false,offset,_magnifyTransform(),(context : lib6.PaintingContext,offset : any) =>  {
                context.paintChild(child,op(Op.PLUS,offset,untransformedPaintingCoordinates));
            });
        });
        context.pushClipRect(false,offset,op(Op.LEQ,untransformedPaintingCoordinates.dy,magnifierTopLinePosition) ? topHalfRect : bottomHalfRect,(context : lib6.PaintingContext,offset : any) =>  {
            _paintChildCylindrically(context,offset,child,cylindricalTransform,offsetToCenter);
        });
    }else {
        _paintChildCylindrically(context,offset,child,cylindricalTransform,offsetToCenter);
    }
};
export var _paintChildCylindrically : (context : lib6.PaintingContext,offset : any,child : lib3.RenderBox,cylindricalTransform : lib9.Matrix4,offsetToCenter : any) => any = (context : lib6.PaintingContext,offset : any,child : lib3.RenderBox,cylindricalTransform : lib9.Matrix4,offsetToCenter : any) : any =>  {
    context.pushTransform(false,offset,_centerOriginTransform(cylindricalTransform),(context : lib6.PaintingContext,offset : any) =>  {
        context.paintChild(child,op(Op.PLUS,offset,offsetToCenter));
    });
};
export var _magnifyTransform : () => lib9.Matrix4 = () : lib9.Matrix4 =>  {
    let magnify : lib9.Matrix4 = lib9.Matrix4.identity();
    magnify.translate(op(Op.TIMES,size.width,(-properties._offAxisFraction + 0.5)),op(Op.DIVIDE,size.height,2));
    magnify.scale(properties._magnification,properties._magnification,properties._magnification);
    magnify.translate(op(Op.TIMES,op(Op.NEG,size.width),(-properties._offAxisFraction + 0.5)),op(Op.DIVIDE,op(Op.NEG,size.height),2));
    return magnify;
};
export var _centerOriginTransform : (originalMatrix : lib9.Matrix4) => lib9.Matrix4 = (originalMatrix : lib9.Matrix4) : lib9.Matrix4 =>  {
    let result : lib9.Matrix4 = lib9.Matrix4.identity();
    let centerOriginTranslation : any = lib10.Alignment.center.alongSize(size);
    result.translate(op(Op.TIMES,centerOriginTranslation.dx,(-properties._offAxisFraction * 2 + 1)),centerOriginTranslation.dy);
    result.multiply(originalMatrix);
    result.translate(op(Op.TIMES,op(Op.NEG,centerOriginTranslation.dx),(-properties._offAxisFraction * 2 + 1)),op(Op.NEG,centerOriginTranslation.dy));
    return result;
};
export var applyPaintTransform : (child : lib3.RenderBox,transform : lib9.Matrix4) => any = (child : lib3.RenderBox,transform : lib9.Matrix4) : any =>  {
    let parentData : ListWheelParentData = ((t)=>(!!t)?t.parentData:null)(child);
    transform.translate(0.0,_getUntransformedPaintingCoordinateY(parentData.offset.dy));
};
export var computeMinIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    return _getIntrinsicCrossAxis((child : lib3.RenderBox) =>  {
        return child.getMinIntrinsicWidth(height);
    });
};
export namespace RenderListWheelViewport {
    export type Constructors = lib3.RenderBox.Constructors | 'RenderListWheelViewport';
    export type Interface = Omit<RenderListWheelViewport, Constructors>;
}
@DartClass
@Implements(lib4.RenderAbstractViewport)
@With(any)
export class RenderListWheelViewport extends lib3.RenderBox implements lib4.RenderAbstractViewport.Interface,any.Interface {
    constructor(_namedArguments? : {childManager? : any,offset? : lib5.ViewportOffset,diameterRatio? : double,perspective? : double,offAxisFraction? : double,useMagnifier? : boolean,magnification? : double,itemExtent? : double,clipToSize? : boolean,renderChildrenOutsideViewport? : boolean,children? : core.DartList<lib3.RenderBox>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderListWheelViewport(_namedArguments? : {childManager? : any,offset? : lib5.ViewportOffset,diameterRatio? : double,perspective? : double,offAxisFraction? : double,useMagnifier? : boolean,magnification? : double,itemExtent? : double,clipToSize? : boolean,renderChildrenOutsideViewport? : boolean,children? : core.DartList<lib3.RenderBox>}) {
        let {childManager,offset,diameterRatio,perspective,offAxisFraction,useMagnifier,magnification,itemExtent,clipToSize,renderChildrenOutsideViewport,children} = Object.assign({
            "diameterRatio" : properties.defaultDiameterRatio,
            "perspective" : properties.defaultPerspective,
            "offAxisFraction" : 0.0,
            "useMagnifier" : false,
            "magnification" : 1.0,
            "clipToSize" : true,
            "renderChildrenOutsideViewport" : false}, _namedArguments );
        this._offset = properties.offset;
        this._diameterRatio = properties.diameterRatio;
        this._perspective = properties.perspective;
        this._offAxisFraction = properties.offAxisFraction;
        this._useMagnifier = properties.useMagnifier;
        this._magnification = properties.magnification;
        this._itemExtent = properties.itemExtent;
        this._clipToSize = this.clipToSize;
        this._renderChildrenOutsideViewport = properties.renderChildrenOutsideViewport;
        this.assert = assert;
        this.childManager = childManager;
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

    clipToSize;
    clipToSizeAndRenderChildrenOutsideViewportConflict;
    ;

    _offset;
    _diameterRatio;
    _perspective;
    _offAxisFraction;
    _useMagnifier;
    _magnification;
    _itemExtent;
    _clipToSize;
    _renderChildrenOutsideViewport;

    @Abstract
    addAll(children : any){ throw 'abstract'}
}

export namespace ListWheelParentData {
    export type Constructors = lib3.ContainerBoxParentData.Constructors | 'ListWheelParentData';
    export type Interface = Omit<ListWheelParentData, Constructors>;
}
@DartClass
export class ListWheelParentData extends lib3.ContainerBoxParentData<lib3.RenderBox> {
    index : number;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListWheelParentData() {
    }
}

export namespace ListWheelChildManager {
    export type Constructors = 'ListWheelChildManager';
    export type Interface = Omit<ListWheelChildManager, Constructors>;
}
@DartClass
export class ListWheelChildManager {
    @AbstractProperty
    get childCount() : number{ throw 'abstract'}
    @Abstract
    childExistsAt(index : number) : boolean{ throw 'abstract'}
    @Abstract
    createChild(index : number,_namedArguments? : {after? : lib3.RenderBox}) : any{ throw 'abstract'}
    @Abstract
    removeChild(child : lib3.RenderBox) : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ListWheelChildManager() {
    }
}

export class properties {
    static get magnification() : double {
        return properties._magnification;
    }
    private static __$defaultDiameterRatio : double;
    static get defaultDiameterRatio() : double { 
        if (this.__$defaultDiameterRatio===undefined) {
            this.__$defaultDiameterRatio = 2.0;
        }
        return this.__$defaultDiameterRatio;
    }
    static set defaultDiameterRatio(__$value : double)  { 
        this.__$defaultDiameterRatio = __$value;
    }

    private static __$defaultPerspective : double;
    static get defaultPerspective() : double { 
        if (this.__$defaultPerspective===undefined) {
            this.__$defaultPerspective = 0.003;
        }
        return this.__$defaultPerspective;
    }
    static set defaultPerspective(__$value : double)  { 
        this.__$defaultPerspective = __$value;
    }

    private static __$diameterRatioZeroMessage : string;
    static get diameterRatioZeroMessage() : string { 
        if (this.__$diameterRatioZeroMessage===undefined) {
            this.__$diameterRatioZeroMessage = "You can't set a diameterRatio " + 'of 0 or of a negative number. It would imply a cylinder of 0 in diameter ' + 'in which case nothing will be drawn.';
        }
        return this.__$diameterRatioZeroMessage;
    }
    static set diameterRatioZeroMessage(__$value : string)  { 
        this.__$diameterRatioZeroMessage = __$value;
    }

    private static __$perspectiveTooHighMessage : string;
    static get perspectiveTooHighMessage() : string { 
        if (this.__$perspectiveTooHighMessage===undefined) {
            this.__$perspectiveTooHighMessage = 'A perspective too high will ' + 'be clipped in the z-axis and therefore not renderable. Value must be ' + 'between 0 and 0.01.';
        }
        return this.__$perspectiveTooHighMessage;
    }
    static set perspectiveTooHighMessage(__$value : string)  { 
        this.__$perspectiveTooHighMessage = __$value;
    }

    private static __$clipToSizeAndRenderChildrenOutsideViewportConflict : string;
    static get clipToSizeAndRenderChildrenOutsideViewportConflict() : string { 
        if (this.__$clipToSizeAndRenderChildrenOutsideViewportConflict===undefined) {
            this.__$clipToSizeAndRenderChildrenOutsideViewportConflict = 'Cannot renderChildrenOutsideViewport and clipToSize since children ' + 'rendered outside will be clipped anyway.';
        }
        return this.__$clipToSizeAndRenderChildrenOutsideViewportConflict;
    }
    static set clipToSizeAndRenderChildrenOutsideViewportConflict(__$value : string)  { 
        this.__$clipToSizeAndRenderChildrenOutsideViewportConflict = __$value;
    }

    private static __$childManager : ListWheelChildManager;
    static get childManager() : ListWheelChildManager { 
        return this.__$childManager;
    }
    static set childManager(__$value : ListWheelChildManager)  { 
        this.__$childManager = __$value;
    }

    static get offset() : lib5.ViewportOffset {
        return properties._offset;
    }
    private static __$_offset : lib5.ViewportOffset;
    static get _offset() : lib5.ViewportOffset { 
        return this.__$_offset;
    }
    static set _offset(__$value : lib5.ViewportOffset)  { 
        this.__$_offset = __$value;
    }

    static set offset(value : lib5.ViewportOffset) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,value,properties._offset)) return;
        if (attached) properties._offset.removeListener(_hasScrolled);
        properties._offset = value;
        if (attached) properties._offset.addListener(_hasScrolled);
        markNeedsLayout();
    }
    static get diameterRatio() : double {
        return properties._diameterRatio;
    }
    private static __$_diameterRatio : double;
    static get _diameterRatio() : double { 
        return this.__$_diameterRatio;
    }
    static set _diameterRatio(__$value : double)  { 
        this.__$_diameterRatio = __$value;
    }

    static set diameterRatio(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        /* TODO (AssertStatementImpl) : assert (value > 0, diameterRatioZeroMessage); */;
        ;
        if (value == properties._diameterRatio) return;
        properties._diameterRatio = value;
        markNeedsPaint();
        markNeedsSemanticsUpdate();
    }
    static get perspective() : double {
        return properties._perspective;
    }
    private static __$_perspective : double;
    static get _perspective() : double { 
        return this.__$_perspective;
    }
    static set _perspective(__$value : double)  { 
        this.__$_perspective = __$value;
    }

    static set perspective(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        /* TODO (AssertStatementImpl) : assert (value > 0); */;
        /* TODO (AssertStatementImpl) : assert (value <= 0.01, perspectiveTooHighMessage); */;
        ;
        if (value == properties._perspective) return;
        properties._perspective = value;
        markNeedsPaint();
        markNeedsSemanticsUpdate();
    }
    static get offAxisFraction() : double {
        return properties._offAxisFraction;
    }
    private static __$_offAxisFraction : double;
    static get _offAxisFraction() : double { 
        if (this.__$_offAxisFraction===undefined) {
            this.__$_offAxisFraction = 0.0;
        }
        return this.__$_offAxisFraction;
    }
    static set _offAxisFraction(__$value : double)  { 
        this.__$_offAxisFraction = __$value;
    }

    static set offAxisFraction(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (value == properties._offAxisFraction) return;
        properties._offAxisFraction = value;
        markNeedsPaint();
    }
    static get useMagnifier() : boolean {
        return properties._useMagnifier;
    }
    private static __$_useMagnifier : boolean;
    static get _useMagnifier() : boolean { 
        if (this.__$_useMagnifier===undefined) {
            this.__$_useMagnifier = false;
        }
        return this.__$_useMagnifier;
    }
    static set _useMagnifier(__$value : boolean)  { 
        this.__$_useMagnifier = __$value;
    }

    static set useMagnifier(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (value == properties._useMagnifier) return;
        properties._useMagnifier = value;
        markNeedsPaint();
    }
    private static __$_magnification : double;
    static get _magnification() : double { 
        if (this.__$_magnification===undefined) {
            this.__$_magnification = 1.0;
        }
        return this.__$_magnification;
    }
    static set _magnification(__$value : double)  { 
        this.__$_magnification = __$value;
    }

    static set magnification(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        /* TODO (AssertStatementImpl) : assert (value > 0); */;
        if (value == properties._magnification) return;
        properties._magnification = value;
        markNeedsPaint();
    }
    static get itemExtent() : double {
        return properties._itemExtent;
    }
    private static __$_itemExtent : double;
    static get _itemExtent() : double { 
        return this.__$_itemExtent;
    }
    static set _itemExtent(__$value : double)  { 
        this.__$_itemExtent = __$value;
    }

    static set itemExtent(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        /* TODO (AssertStatementImpl) : assert (value > 0); */;
        if (value == properties._itemExtent) return;
        properties._itemExtent = value;
        markNeedsLayout();
    }
    static get clipToSize() : boolean {
        return properties._clipToSize;
    }
    private static __$_clipToSize : boolean;
    static get _clipToSize() : boolean { 
        return this.__$_clipToSize;
    }
    static set _clipToSize(__$value : boolean)  { 
        this.__$_clipToSize = __$value;
    }

    static set clipToSize(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        /* TODO (AssertStatementImpl) : assert (!renderChildrenOutsideViewport || !clipToSize, clipToSizeAndRenderChildrenOutsideViewportConflict); */;
        ;
        if (value == properties._clipToSize) return;
        properties._clipToSize = value;
        markNeedsPaint();
        markNeedsSemanticsUpdate();
    }
    static get renderChildrenOutsideViewport() : boolean {
        return properties._renderChildrenOutsideViewport;
    }
    private static __$_renderChildrenOutsideViewport : boolean;
    static get _renderChildrenOutsideViewport() : boolean { 
        return this.__$_renderChildrenOutsideViewport;
    }
    static set _renderChildrenOutsideViewport(__$value : boolean)  { 
        this.__$_renderChildrenOutsideViewport = __$value;
    }

    static set renderChildrenOutsideViewport(value : boolean) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        /* TODO (AssertStatementImpl) : assert (!renderChildrenOutsideViewport || !clipToSize, clipToSizeAndRenderChildrenOutsideViewportConflict); */;
        ;
        if (value == properties._renderChildrenOutsideViewport) return;
        properties._renderChildrenOutsideViewport = value;
        markNeedsLayout();
        markNeedsSemanticsUpdate();
    }
    static get isRepaintBoundary() : boolean {
        return true;
    }
    static get _viewportExtent() : double {
        /* TODO (AssertStatementImpl) : assert (hasSize); */;
        return size.height;
    }
    static get _minEstimatedScrollExtent() : double {
        /* TODO (AssertStatementImpl) : assert (hasSize); */;
        if (properties.childManager.childCount == null) return new core.DartDouble(double).negativeInfinity;
        return 0.0;
    }
    static get _maxEstimatedScrollExtent() : double {
        /* TODO (AssertStatementImpl) : assert (hasSize); */;
        if (properties.childManager.childCount == null) return new core.DartDouble(double).infinity;
        return math.max(0.0,(properties.childManager.childCount - 1) * properties._itemExtent);
    }
    static get _topScrollMarginExtent() : double {
        /* TODO (AssertStatementImpl) : assert (hasSize); */;
        return op(Op.PLUS,op(Op.DIVIDE,op(Op.NEG,size.height),2.0),properties._itemExtent / 2.0);
    }
    static get _maxVisibleRadian() : double {
        if (properties._diameterRatio < 1.0) return op(Op.DIVIDE,math.pi,2.0);
        return math.asin(1.0 / properties._diameterRatio);
    }
    static get sizedByParent() : boolean {
        return true;
    }
}
