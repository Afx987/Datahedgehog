/** Library asset:datahedgehog_monitor/lib/lib/rendering/flex.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./box";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as math from "@dart2ts/dart/math";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";
import * as lib7 from "./object";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export var toStringShort : () => string = () : string =>  {
    let header : string = super.toStringShort();
    if (is(properties._overflow, "double") && properties._overflow > 0.0) header += ' OVERFLOWING';
    return header;
};
export var describeApproximatePaintClip : (child : any) => any = (child : any) : any =>  {
    return properties._overflow > 0.0 ? op(Op.BITAND,Offset.zero,size) : null;
};
export var paint : (context : lib7.PaintingContext,offset : any) => any = (context : lib7.PaintingContext,offset : any) : any =>  {
    if (properties._overflow <= 0.0) {
        defaultPaint(context,offset);
        return;
    }
    if (size.isEmpty) return;
    context.pushClipRect(needsCompositing,offset,op(Op.BITAND,Offset.zero,size),defaultPaint);
    /* TODO (AssertStatementImpl) : assert (() {final String debugOverflowHints = 'The overflowing $runtimeType has an orientation of $_direction.\n' 'The edge of the $runtimeType that is overflowing has been marked ' 'in the rendering with a yellow and black striped pattern. This is ' 'usually caused by the contents being too big for the $runtimeType. ' 'Consider applying a flex factor (e.g. using an Expanded widget) to ' 'force the children of the $runtimeType to fit within the available ' 'space instead of being sized to their natural size.\n' 'This is considered an error condition because it indicates that there ' 'is content that cannot be seen. If the content is legitimately bigger ' 'than the available space, consider clipping it with a ClipRect widget ' 'before putting it in the flex, or using a scrollable container rather ' 'than a Flex, like a ListView.'; Rect overflowChildRect; switch (_direction) {case Axis.horizontal: overflowChildRect = Rect.fromLTWH(0.0, 0.0, size.width + _overflow, 0.0); break; case Axis.vertical: overflowChildRect = Rect.fromLTWH(0.0, 0.0, 0.0, size.height + _overflow); break;} paintOverflowIndicator(context, offset, Offset.zero & size, overflowChildRect, overflowHints: debugOverflowHints); return true;}()); */;
};
export var hitTestChildren : (result : lib6.HitTestResult,_namedArguments? : {position? : any}) => boolean = (result : lib6.HitTestResult,_namedArguments? : {position? : any}) : boolean =>  {
    let {position} = Object.assign({
    }, _namedArguments );
    return defaultHitTestChildren(result,{
        position : position});
};
export var _startIsTopLeft : (direction : lib4.Axis,textDirection : any,verticalDirection : lib4.VerticalDirection) => boolean = (direction : lib4.Axis,textDirection : any,verticalDirection : lib4.VerticalDirection) : boolean =>  {
    /* TODO (AssertStatementImpl) : assert (direction != null); */;
    switch (direction) {
        case lib4.Axis.horizontal:
            switch (textDirection) {
                case TextDirection.ltr:
                    return true;
                case TextDirection.rtl:
                    return false;
            }
            break;
        case lib4.Axis.vertical:
            switch (verticalDirection) {
                case lib4.VerticalDirection.down:
                    return true;
                case lib4.VerticalDirection.up:
                    return false;
            }
            break;
    }
    return null;
};
export var performLayout : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (_debugHasNecessaryDirections); */;
    let totalFlex : number = 0;
    let totalChildren : number = 0;
    /* TODO (AssertStatementImpl) : assert (constraints != null); */;
    let maxMainSize : double = op(Op.EQUALS,properties._direction,lib4.Axis.horizontal) ? constraints.maxWidth : constraints.maxHeight;
    let canFlex : boolean = maxMainSize < new core.DartDouble(double).infinity;
    let crossSize : double = 0.0;
    let allocatedSize : double = 0.0;
    let child : lib3.RenderBox = firstChild;
    let lastFlexChild : lib3.RenderBox;
    while (child != null){
        let childParentData : FlexParentData = child.parentData;
        totalChildren++;
        let flex : number = _getFlex(child);
        if (flex > 0) {
            /* TODO (AssertStatementImpl) : assert (() {final String identity = _direction == Axis.horizontal ? 'row' : 'column'; final String axis = _direction == Axis.horizontal ? 'horizontal' : 'vertical'; final String dimension = _direction == Axis.horizontal ? 'width' : 'height'; String error, message; String addendum = ''; if (!canFlex && (mainAxisSize == MainAxisSize.max || _getFit(child) == FlexFit.tight)) {error = 'RenderFlex children have non-zero flex but incoming $dimension constraints are unbounded.'; message = 'When a $identity is in a parent that does not provide a finite $dimension constraint, for example ' 'if it is in a $axis scrollable, it will try to shrink-wrap its children along the $axis ' 'axis. Setting a flex on a child (e.g. using Expanded) indicates that the child is to ' 'expand to fill the remaining space in the $axis direction.'; final StringBuffer information = StringBuffer(); RenderBox node = this; switch (_direction) {case Axis.horizontal: while (!node.constraints.hasBoundedWidth && node.parent is RenderBox) node = node.parent; if (!node.constraints.hasBoundedWidth) node = null; break; case Axis.vertical: while (!node.constraints.hasBoundedHeight && node.parent is RenderBox) node = node.parent; if (!node.constraints.hasBoundedHeight) node = null; break;} if (node != null) {information.writeln('The nearest ancestor providing an unbounded width constraint is:'); information.write('  '); information.writeln(node.toStringShallow(joiner: '\n  '));} information.writeln('See also: https://flutter.io/layout/'); addendum = information.toString();} else {return true;} throw FlutterError('$error\n' '$message\n' 'These two directives are mutually exclusive. If a parent is to shrink-wrap its child, the child ' 'cannot simultaneously expand to fit its parent.\n' 'Consider setting mainAxisSize to MainAxisSize.min and using FlexFit.loose fits for the flexible ' 'children (using Flexible rather than Expanded). This will allow the flexible children ' 'to size themselves to less than the infinite remaining space they would otherwise be ' 'forced to take, and then will cause the RenderFlex to shrink-wrap the children ' 'rather than expanding to fit the maximum constraints provided by the parent.\n' 'The affected RenderFlex is:\n' '  $this\n' 'The creator information is set to:\n' '  $debugCreator\n' '$addendum' 'If this message did not help you determine the problem, consider using debugDumpRenderTree():\n' '  https://flutter.io/debugging/#rendering-layer\n' '  http://docs.flutter.io/flutter/rendering/debugDumpRenderTree.html\n' 'If none of the above helps enough to fix this problem, please don\'t hesitate to file a bug:\n' '  https://github.com/flutter/flutter/issues/new?template=BUG.md');}()); */;
            totalFlex += childParentData.flex;
            lastFlexChild = child;
        }else {
            let innerConstraints : lib3.BoxConstraints;
            if (op(Op.EQUALS,properties.crossAxisAlignment,CrossAxisAlignment.stretch)) {
                switch (properties._direction) {
                    case lib4.Axis.horizontal:
                        innerConstraints = lib3.BoxConstraints({
                            minHeight : constraints.maxHeight,maxHeight : constraints.maxHeight});
                        break;
                    case lib4.Axis.vertical:
                        innerConstraints = lib3.BoxConstraints({
                            minWidth : constraints.maxWidth,maxWidth : constraints.maxWidth});
                        break;
                }
            }else {
                switch (properties._direction) {
                    case lib4.Axis.horizontal:
                        innerConstraints = lib3.BoxConstraints({
                            maxHeight : constraints.maxHeight});
                        break;
                    case lib4.Axis.vertical:
                        innerConstraints = lib3.BoxConstraints({
                            maxWidth : constraints.maxWidth});
                        break;
                }
            }
            child.layout(innerConstraints,{
                parentUsesSize : true});
            allocatedSize += _getMainSize(child);
            crossSize = math.max(crossSize,_getCrossSize(child));
        }
        /* TODO (AssertStatementImpl) : assert (child.parentData == childParentData); */;
        child = childParentData.nextSibling;
    }
    let freeSpace : double = math.max(0.0,(canFlex ? maxMainSize : 0.0) - allocatedSize);
    let allocatedFlexSpace : double = 0.0;
    let maxBaselineDistance : double = 0.0;
    if (totalFlex > 0 || op(Op.EQUALS,properties.crossAxisAlignment,CrossAxisAlignment.baseline)) {
        let spacePerFlex : double = canFlex && totalFlex > 0 ? (freeSpace / totalFlex) : new core.DartDouble(double).nan;
        child = firstChild;
        while (child != null){
            let flex : number = _getFlex(child);
            if (flex > 0) {
                let maxChildExtent : double = canFlex ? (op(Op.EQUALS,child,lastFlexChild) ? (freeSpace - allocatedFlexSpace) : spacePerFlex * flex) : new core.DartDouble(double).infinity;
                let minChildExtent : double;
                switch (_getFit(child)) {
                    case FlexFit.tight:
                        /* TODO (AssertStatementImpl) : assert (maxChildExtent < double.infinity); */;
                        minChildExtent = maxChildExtent;
                        break;
                    case FlexFit.loose:
                        minChildExtent = 0.0;
                        break;
                }
                /* TODO (AssertStatementImpl) : assert (minChildExtent != null); */;
                let innerConstraints : lib3.BoxConstraints;
                if (op(Op.EQUALS,properties.crossAxisAlignment,CrossAxisAlignment.stretch)) {
                    switch (properties._direction) {
                        case lib4.Axis.horizontal:
                            innerConstraints = lib3.BoxConstraints({
                                minWidth : minChildExtent,maxWidth : maxChildExtent,minHeight : constraints.maxHeight,maxHeight : constraints.maxHeight});
                            break;
                        case lib4.Axis.vertical:
                            innerConstraints = lib3.BoxConstraints({
                                minWidth : constraints.maxWidth,maxWidth : constraints.maxWidth,minHeight : minChildExtent,maxHeight : maxChildExtent});
                            break;
                    }
                }else {
                    switch (properties._direction) {
                        case lib4.Axis.horizontal:
                            innerConstraints = lib3.BoxConstraints({
                                minWidth : minChildExtent,maxWidth : maxChildExtent,maxHeight : constraints.maxHeight});
                            break;
                        case lib4.Axis.vertical:
                            innerConstraints = lib3.BoxConstraints({
                                maxWidth : constraints.maxWidth,minHeight : minChildExtent,maxHeight : maxChildExtent});
                            break;
                    }
                }
                child.layout(innerConstraints,{
                    parentUsesSize : true});
                let childSize : double = _getMainSize(child);
                /* TODO (AssertStatementImpl) : assert (childSize <= maxChildExtent); */;
                allocatedSize += childSize;
                allocatedFlexSpace += maxChildExtent;
                crossSize = math.max(crossSize,_getCrossSize(child));
            }
            if (op(Op.EQUALS,properties.crossAxisAlignment,CrossAxisAlignment.baseline)) {
                /* TODO (AssertStatementImpl) : assert (() {if (textBaseline == null) throw FlutterError('To use FlexAlignItems.baseline, you must also specify which baseline to use using the "baseline" argument.'); return true;}()); */;
                let distance : double = child.getDistanceToBaseline(properties.textBaseline,{
                    onlyReal : true});
                if (distance != null) maxBaselineDistance = math.max(maxBaselineDistance,distance);
            }
            let childParentData : FlexParentData = child.parentData;
            child = childParentData.nextSibling;
        }
    }
    let idealSize : double = canFlex && op(Op.EQUALS,properties.mainAxisSize,MainAxisSize.max) ? maxMainSize : allocatedSize;
    let actualSize : double;
    let actualSizeDelta : double;
    switch (properties._direction) {
        case lib4.Axis.horizontal:
            size = constraints.constrain(Size(idealSize,crossSize));
            actualSize = size.width;
            crossSize = size.height;
            break;
        case lib4.Axis.vertical:
            size = constraints.constrain(Size(crossSize,idealSize));
            actualSize = size.height;
            crossSize = size.width;
            break;
    }
    actualSizeDelta = actualSize - allocatedSize;
    properties._overflow = math.max(0.0,-actualSizeDelta);
    let remainingSpace : double = math.max(0.0,actualSizeDelta);
    let leadingSpace : double;
    let betweenSpace : double;
    let flipMainAxis : boolean = !((_startIsTopLeft(properties.direction,properties.textDirection,properties.verticalDirection) || true));
    switch (properties._mainAxisAlignment) {
        case MainAxisAlignment.start:
            leadingSpace = 0.0;
            betweenSpace = 0.0;
            break;
        case MainAxisAlignment.end:
            leadingSpace = remainingSpace;
            betweenSpace = 0.0;
            break;
        case MainAxisAlignment.center:
            leadingSpace = remainingSpace / 2.0;
            betweenSpace = 0.0;
            break;
        case MainAxisAlignment.spaceBetween:
            leadingSpace = 0.0;
            betweenSpace = totalChildren > 1 ? remainingSpace / (totalChildren - 1) : 0.0;
            break;
        case MainAxisAlignment.spaceAround:
            betweenSpace = totalChildren > 0 ? remainingSpace / totalChildren : 0.0;
            leadingSpace = betweenSpace / 2.0;
            break;
        case MainAxisAlignment.spaceEvenly:
            betweenSpace = totalChildren > 0 ? remainingSpace / (totalChildren + 1) : 0.0;
            leadingSpace = betweenSpace;
            break;
    }
    let childMainPosition : double = flipMainAxis ? actualSize - leadingSpace : leadingSpace;
    child = firstChild;
    while (child != null){
        let childParentData : FlexParentData = child.parentData;
        let childCrossPosition : double;
        switch (properties._crossAxisAlignment) {
            case CrossAxisAlignment.start:
            case CrossAxisAlignment.end:
                childCrossPosition = _startIsTopLeft(lib4.flipAxis(properties.direction),properties.textDirection,properties.verticalDirection) == (op(Op.EQUALS,properties._crossAxisAlignment,CrossAxisAlignment.start)) ? 0.0 : crossSize - _getCrossSize(child);
                break;
            case CrossAxisAlignment.center:
                childCrossPosition = crossSize / 2.0 - _getCrossSize(child) / 2.0;
                break;
            case CrossAxisAlignment.stretch:
                childCrossPosition = 0.0;
                break;
            case CrossAxisAlignment.baseline:
                childCrossPosition = 0.0;
                if (op(Op.EQUALS,properties._direction,lib4.Axis.horizontal)) {
                    /* TODO (AssertStatementImpl) : assert (textBaseline != null); */;
                    let distance : double = child.getDistanceToBaseline(properties.textBaseline,{
                        onlyReal : true});
                    if (distance != null) childCrossPosition = maxBaselineDistance - distance;
                }
                break;
        }
        if (flipMainAxis) childMainPosition -= _getMainSize(child);
        switch (properties._direction) {
            case lib4.Axis.horizontal:
                childParentData.offset = Offset(childMainPosition,childCrossPosition);
                break;
            case lib4.Axis.vertical:
                childParentData.offset = Offset(childCrossPosition,childMainPosition);
                break;
        }
        if (flipMainAxis) {
            childMainPosition -= betweenSpace;
        }else {
            childMainPosition += _getMainSize(child) + betweenSpace;
        }
        child = childParentData.nextSibling;
    }
};
export var _getMainSize : (child : lib3.RenderBox) => double = (child : lib3.RenderBox) : double =>  {
    switch (properties._direction) {
        case lib4.Axis.horizontal:
            return child.size.width;
        case lib4.Axis.vertical:
            return child.size.height;
    }
    return null;
};
export var debugFillProperties : (properties : lib8.DiagnosticPropertiesBuilder) => any = (properties : lib8.DiagnosticPropertiesBuilder) : any =>  {
    super.debugFillProperties(properties);
    properties.add(lib8.EnumProperty('direction',properties.direction));
    properties.add(lib8.EnumProperty('mainAxisAlignment',properties.mainAxisAlignment));
    properties.add(lib8.EnumProperty('mainAxisSize',properties.mainAxisSize));
    properties.add(lib8.EnumProperty('crossAxisAlignment',properties.crossAxisAlignment));
    properties.add(lib8.EnumProperty('textDirection',properties.textDirection,{
        defaultValue : null}));
    properties.add(lib8.EnumProperty('verticalDirection',properties.verticalDirection,{
        defaultValue : null}));
    properties.add(lib8.EnumProperty('textBaseline',properties.textBaseline,{
        defaultValue : null}));
};
export var _getIntrinsicSize : (_namedArguments? : {sizingDirection? : lib4.Axis,extent? : double,childSize? : (child : lib3.RenderBox,extent : double) => double}) => double = (_namedArguments? : {sizingDirection? : lib4.Axis,extent? : double,childSize? : (child : lib3.RenderBox,extent : double) => double}) : double =>  {
    let {sizingDirection,extent,childSize} = Object.assign({
    }, _namedArguments );
    if (op(Op.EQUALS,properties._direction,sizingDirection)) {
        let totalFlex : double = 0.0;
        let inflexibleSpace : double = 0.0;
        let maxFlexFractionSoFar : double = 0.0;
        let child : lib3.RenderBox = firstChild;
        while (child != null){
            let flex : number = _getFlex(child);
            totalFlex += flex;
            if (flex > 0) {
                let flexFraction : double = childSize(child,extent) / _getFlex(child);
                maxFlexFractionSoFar = math.max(maxFlexFractionSoFar,flexFraction);
            }else {
                inflexibleSpace += childSize(child,extent);
            }
            let childParentData : FlexParentData = child.parentData;
            child = childParentData.nextSibling;
        }
        return maxFlexFractionSoFar * totalFlex + inflexibleSpace;
    }else {
        let availableMainSpace : double = extent;
        let totalFlex : number = 0;
        let inflexibleSpace : double = 0.0;
        let maxCrossSize : double = 0.0;
        let child : lib3.RenderBox = firstChild;
        while (child != null){
            let flex : number = _getFlex(child);
            totalFlex += flex;
            let mainSize : double;
            let crossSize : double;
            if (flex == 0) {
                switch (properties._direction) {
                    case lib4.Axis.horizontal:
                        mainSize = child.getMaxIntrinsicWidth(new core.DartDouble(double).infinity);
                        crossSize = childSize(child,mainSize);
                        break;
                    case lib4.Axis.vertical:
                        mainSize = child.getMaxIntrinsicHeight(new core.DartDouble(double).infinity);
                        crossSize = childSize(child,mainSize);
                        break;
                }
                inflexibleSpace += mainSize;
                maxCrossSize = math.max(maxCrossSize,crossSize);
            }
            let childParentData : FlexParentData = child.parentData;
            child = childParentData.nextSibling;
        }
        let spacePerFlex : double = math.max(0.0,(availableMainSpace - inflexibleSpace) / totalFlex);
        child = firstChild;
        while (child != null){
            let flex : number = _getFlex(child);
            if (flex > 0) maxCrossSize = math.max(maxCrossSize,childSize(child,spacePerFlex * flex));
            let childParentData : FlexParentData = child.parentData;
            child = childParentData.nextSibling;
        }
        return maxCrossSize;
    }
};
export var computeMinIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    return _getIntrinsicSize({
        sizingDirection : lib4.Axis.horizontal,extent : height,childSize : (child : lib3.RenderBox,extent : double) =>  {
            return child.getMinIntrinsicWidth(extent);
        }});
};
export var computeMaxIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    return _getIntrinsicSize({
        sizingDirection : lib4.Axis.horizontal,extent : height,childSize : (child : lib3.RenderBox,extent : double) =>  {
            return child.getMaxIntrinsicWidth(extent);
        }});
};
export var computeMinIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    return _getIntrinsicSize({
        sizingDirection : lib4.Axis.vertical,extent : width,childSize : (child : lib3.RenderBox,extent : double) =>  {
            return child.getMinIntrinsicHeight(extent);
        }});
};
export var computeMaxIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    return _getIntrinsicSize({
        sizingDirection : lib4.Axis.vertical,extent : width,childSize : (child : lib3.RenderBox,extent : double) =>  {
            return child.getMaxIntrinsicHeight(extent);
        }});
};
export var computeDistanceToActualBaseline : (baseline : any) => double = (baseline : any) : double =>  {
    if (op(Op.EQUALS,properties._direction,lib4.Axis.horizontal)) return defaultComputeDistanceToHighestActualBaseline(baseline);
    return defaultComputeDistanceToFirstActualBaseline(baseline);
};
export var _getFlex : (child : lib3.RenderBox) => number = (child : lib3.RenderBox) : number =>  {
    let childParentData : FlexParentData = child.parentData;
    return (childParentData.flex || 0);
};
export var _getFit : (child : lib3.RenderBox) => FlexFit = (child : lib3.RenderBox) : FlexFit =>  {
    let childParentData : FlexParentData = child.parentData;
    return (childParentData.fit || FlexFit.tight);
};
export var _getCrossSize : (child : lib3.RenderBox) => double = (child : lib3.RenderBox) : double =>  {
    switch (properties._direction) {
        case lib4.Axis.horizontal:
            return child.size.height;
        case lib4.Axis.vertical:
            return child.size.width;
    }
    return null;
};
export var setupParentData : (child : lib3.RenderBox) => any = (child : lib3.RenderBox) : any =>  {
    if (isNot(child.parentData, FlexParentData)) child.parentData = FlexParentData();
};
export namespace RenderFlex {
    export type Constructors = lib3.RenderBox.Constructors | 'RenderFlex';
    export type Interface = Omit<RenderFlex, Constructors>;
}
@DartClass
@With(any,any,any)
export class RenderFlex extends lib3.RenderBox implements any.Interface,any.Interface,any.Interface {
    constructor(_namedArguments? : {children? : core.DartList<lib3.RenderBox>,direction? : lib4.Axis,mainAxisSize? : MainAxisSize,mainAxisAlignment? : MainAxisAlignment,crossAxisAlignment? : CrossAxisAlignment,textDirection? : any,verticalDirection? : lib4.VerticalDirection,textBaseline? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderFlex(_namedArguments? : {children? : core.DartList<lib3.RenderBox>,direction? : lib4.Axis,mainAxisSize? : MainAxisSize,mainAxisAlignment? : MainAxisAlignment,crossAxisAlignment? : CrossAxisAlignment,textDirection? : any,verticalDirection? : lib4.VerticalDirection,textBaseline? : any}) {
        let {children,direction,mainAxisSize,mainAxisAlignment,crossAxisAlignment,textDirection,verticalDirection,textBaseline} = Object.assign({
            "direction" : lib4.Axis.horizontal,
            "mainAxisSize" : MainAxisSize.max,
            "mainAxisAlignment" : MainAxisAlignment.start,
            "crossAxisAlignment" : CrossAxisAlignment.center,
            "verticalDirection" : lib4.VerticalDirection.down}, _namedArguments );
        this._direction = properties.direction;
        this._mainAxisAlignment = properties.mainAxisAlignment;
        this._mainAxisSize = properties.mainAxisSize;
        this._crossAxisAlignment = properties.crossAxisAlignment;
        this._textDirection = properties.textDirection;
        this._verticalDirection = properties.verticalDirection;
        this._textBaseline = properties.textBaseline;
        this.assert = assert;
    }
     : any;

     : any;

     : any;

     : any;

    _direction;
    _mainAxisAlignment;
    _mainAxisSize;
    _crossAxisAlignment;
    _textDirection;
    _verticalDirection;
    _textBaseline;

    @Abstract
    addAll(children : any){ throw 'abstract'}
}

export enum CrossAxisAlignment {
    start,
    end,
    center,
    stretch,
    baseline
}

export enum MainAxisAlignment {
    start,
    end,
    center,
    spaceBetween,
    spaceAround,
    spaceEvenly
}

export enum MainAxisSize {
    min,
    max
}

export namespace FlexParentData {
    export type Constructors = lib3.ContainerBoxParentData.Constructors | 'FlexParentData';
    export type Interface = Omit<FlexParentData, Constructors>;
}
@DartClass
export class FlexParentData extends lib3.ContainerBoxParentData<lib3.RenderBox> {
    flex : number;

    fit : FlexFit;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${super.toString()}; flex=${this.flex}; fit=${this.fit}`;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FlexParentData() {
    }
}

export enum FlexFit {
    tight,
    loose
}

export class properties {
    static get crossAxisAlignment() : CrossAxisAlignment {
        return properties._crossAxisAlignment;
    }
    static get direction() : lib4.Axis {
        return properties._direction;
    }
    private static __$_direction : lib4.Axis;
    static get _direction() : lib4.Axis { 
        return this.__$_direction;
    }
    static set _direction(__$value : lib4.Axis)  { 
        this.__$_direction = __$value;
    }

    static set direction(value : lib4.Axis) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (properties._direction != value) {
            properties._direction = value;
            markNeedsLayout();
        }
    }
    static get mainAxisAlignment() : MainAxisAlignment {
        return properties._mainAxisAlignment;
    }
    private static __$_mainAxisAlignment : MainAxisAlignment;
    static get _mainAxisAlignment() : MainAxisAlignment { 
        return this.__$_mainAxisAlignment;
    }
    static set _mainAxisAlignment(__$value : MainAxisAlignment)  { 
        this.__$_mainAxisAlignment = __$value;
    }

    static set mainAxisAlignment(value : MainAxisAlignment) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (properties._mainAxisAlignment != value) {
            properties._mainAxisAlignment = value;
            markNeedsLayout();
        }
    }
    static get mainAxisSize() : MainAxisSize {
        return properties._mainAxisSize;
    }
    private static __$_mainAxisSize : MainAxisSize;
    static get _mainAxisSize() : MainAxisSize { 
        return this.__$_mainAxisSize;
    }
    static set _mainAxisSize(__$value : MainAxisSize)  { 
        this.__$_mainAxisSize = __$value;
    }

    static set mainAxisSize(value : MainAxisSize) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (properties._mainAxisSize != value) {
            properties._mainAxisSize = value;
            markNeedsLayout();
        }
    }
    private static __$_crossAxisAlignment : CrossAxisAlignment;
    static get _crossAxisAlignment() : CrossAxisAlignment { 
        return this.__$_crossAxisAlignment;
    }
    static set _crossAxisAlignment(__$value : CrossAxisAlignment)  { 
        this.__$_crossAxisAlignment = __$value;
    }

    static set crossAxisAlignment(value : CrossAxisAlignment) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (properties._crossAxisAlignment != value) {
            properties._crossAxisAlignment = value;
            markNeedsLayout();
        }
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
        if (properties._textDirection != value) {
            properties._textDirection = value;
            markNeedsLayout();
        }
    }
    static get verticalDirection() : lib4.VerticalDirection {
        return properties._verticalDirection;
    }
    private static __$_verticalDirection : lib4.VerticalDirection;
    static get _verticalDirection() : lib4.VerticalDirection { 
        return this.__$_verticalDirection;
    }
    static set _verticalDirection(__$value : lib4.VerticalDirection)  { 
        this.__$_verticalDirection = __$value;
    }

    static set verticalDirection(value : lib4.VerticalDirection) {
        if (properties._verticalDirection != value) {
            properties._verticalDirection = value;
            markNeedsLayout();
        }
    }
    static get textBaseline() : any {
        return properties._textBaseline;
    }
    private static __$_textBaseline : any;
    static get _textBaseline() : any { 
        return this.__$_textBaseline;
    }
    static set _textBaseline(__$value : any)  { 
        this.__$_textBaseline = __$value;
    }

    static set textBaseline(value : any) {
        /* TODO (AssertStatementImpl) : assert (_crossAxisAlignment != CrossAxisAlignment.baseline || value != null); */;
        if (properties._textBaseline != value) {
            properties._textBaseline = value;
            markNeedsLayout();
        }
    }
    static get _debugHasNecessaryDirections() : boolean {
        /* TODO (AssertStatementImpl) : assert (direction != null); */;
        /* TODO (AssertStatementImpl) : assert (crossAxisAlignment != null); */;
        if (firstChild != null && lastChild != firstChild) {
            switch (properties.direction) {
                case lib4.Axis.horizontal:
                    /* TODO (AssertStatementImpl) : assert (textDirection != null, 'Horizontal $runtimeType with multiple children has a null textDirection, so the layout order is undefined.'); */;
                    break;
                case lib4.Axis.vertical:
                    /* TODO (AssertStatementImpl) : assert (verticalDirection != null, 'Vertical $runtimeType with multiple children has a null verticalDirection, so the layout order is undefined.'); */;
                    break;
            }
        }
        if (op(Op.EQUALS,properties.mainAxisAlignment,MainAxisAlignment.start) || op(Op.EQUALS,properties.mainAxisAlignment,MainAxisAlignment.end)) {
            switch (properties.direction) {
                case lib4.Axis.horizontal:
                    /* TODO (AssertStatementImpl) : assert (textDirection != null, 'Horizontal $runtimeType with $mainAxisAlignment has a null textDirection, so the alignment cannot be resolved.'); */;
                    break;
                case lib4.Axis.vertical:
                    /* TODO (AssertStatementImpl) : assert (verticalDirection != null, 'Vertical $runtimeType with $mainAxisAlignment has a null verticalDirection, so the alignment cannot be resolved.'); */;
                    break;
            }
        }
        if (op(Op.EQUALS,properties.crossAxisAlignment,CrossAxisAlignment.start) || op(Op.EQUALS,properties.crossAxisAlignment,CrossAxisAlignment.end)) {
            switch (properties.direction) {
                case lib4.Axis.horizontal:
                    /* TODO (AssertStatementImpl) : assert (verticalDirection != null, 'Horizontal $runtimeType with $crossAxisAlignment has a null verticalDirection, so the alignment cannot be resolved.'); */;
                    break;
                case lib4.Axis.vertical:
                    /* TODO (AssertStatementImpl) : assert (textDirection != null, 'Vertical $runtimeType with $crossAxisAlignment has a null textDirection, so the alignment cannot be resolved.'); */;
                    break;
            }
        }
        return true;
    }
    private static __$_overflow : double;
    static get _overflow() : double { 
        return this.__$_overflow;
    }
    static set _overflow(__$value : double)  { 
        this.__$_overflow = __$value;
    }

}
