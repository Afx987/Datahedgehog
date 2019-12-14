/** Library asset:datahedgehog_monitor/lib/lib/rendering/wrap.dart */
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

export var paint : (context : lib7.PaintingContext,offset : any) => any = (context : lib7.PaintingContext,offset : any) : any =>  {
    if (properties._hasVisualOverflow) context.pushClipRect(needsCompositing,offset,op(Op.BITAND,Offset.zero,size),defaultPaint);else defaultPaint(context,offset);
};
export var hitTestChildren : (result : lib6.HitTestResult,_namedArguments? : {position? : any}) => boolean = (result : lib6.HitTestResult,_namedArguments? : {position? : any}) : boolean =>  {
    let {position} = Object.assign({
    }, _namedArguments );
    return defaultHitTestChildren(result,{
        position : position});
};
export var performLayout : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (_debugHasNecessaryDirections); */;
    properties._hasVisualOverflow = false;
    let child : lib3.RenderBox = firstChild;
    if (op(Op.EQUALS,child,null)) {
        size = constraints.smallest;
        return;
    }
    let childConstraints : lib3.BoxConstraints;
    let mainAxisLimit : double = 0.0;
    let flipMainAxis : boolean = false;
    let flipCrossAxis : boolean = false;
    switch (properties.direction) {
        case lib4.Axis.horizontal:
            childConstraints = lib3.BoxConstraints({
                maxWidth : constraints.maxWidth});
            mainAxisLimit = constraints.maxWidth;
            if (op(Op.EQUALS,properties.textDirection,TextDirection.rtl)) flipMainAxis = true;
            if (op(Op.EQUALS,properties.verticalDirection,lib4.VerticalDirection.up)) flipCrossAxis = true;
            break;
        case lib4.Axis.vertical:
            childConstraints = lib3.BoxConstraints({
                maxHeight : constraints.maxHeight});
            mainAxisLimit = constraints.maxHeight;
            if (op(Op.EQUALS,properties.verticalDirection,lib4.VerticalDirection.up)) flipMainAxis = true;
            if (op(Op.EQUALS,properties.textDirection,TextDirection.rtl)) flipCrossAxis = true;
            break;
    }
    /* TODO (AssertStatementImpl) : assert (childConstraints != null); */;
    /* TODO (AssertStatementImpl) : assert (mainAxisLimit != null); */;
    let spacing : double = this.spacing;
    let runSpacing : double = this.runSpacing;
    let runMetrics : core.DartList<_RunMetrics> = new core.DartList.literal<_RunMetrics>();
    let mainAxisExtent : double = 0.0;
    let crossAxisExtent : double = 0.0;
    let runMainAxisExtent : double = 0.0;
    let runCrossAxisExtent : double = 0.0;
    let childCount : number = 0;
    while (child != null){
        child.layout(childConstraints,{
            parentUsesSize : true});
        let childMainAxisExtent : double = _getMainAxisExtent(child);
        let childCrossAxisExtent : double = _getCrossAxisExtent(child);
        if (childCount > 0 && runMainAxisExtent + spacing + childMainAxisExtent > mainAxisLimit) {
            mainAxisExtent = math.max(mainAxisExtent,runMainAxisExtent);
            crossAxisExtent += runCrossAxisExtent;
            if (runMetrics.isNotEmpty) crossAxisExtent += runSpacing;
            runMetrics.add(_RunMetrics(runMainAxisExtent,runCrossAxisExtent,childCount));
            runMainAxisExtent = 0.0;
            runCrossAxisExtent = 0.0;
            childCount = 0;
        }
        runMainAxisExtent += childMainAxisExtent;
        if (childCount > 0) runMainAxisExtent += spacing;
        runCrossAxisExtent = math.max(runCrossAxisExtent,childCrossAxisExtent);
        childCount += 1;
        let childParentData : WrapParentData = child.parentData;
        childParentData._runIndex = runMetrics.length;
        child = childParentData.nextSibling;
    }
    if (childCount > 0) {
        mainAxisExtent = math.max(mainAxisExtent,runMainAxisExtent);
        crossAxisExtent += runCrossAxisExtent;
        if (runMetrics.isNotEmpty) crossAxisExtent += runSpacing;
        runMetrics.add(_RunMetrics(runMainAxisExtent,runCrossAxisExtent,childCount));
    }
    let runCount : number = runMetrics.length;
    /* TODO (AssertStatementImpl) : assert (runCount > 0); */;
    let containerMainAxisExtent : double = 0.0;
    let containerCrossAxisExtent : double = 0.0;
    switch (properties.direction) {
        case lib4.Axis.horizontal:
            size = constraints.constrain(Size(mainAxisExtent,crossAxisExtent));
            containerMainAxisExtent = size.width;
            containerCrossAxisExtent = size.height;
            break;
        case lib4.Axis.vertical:
            size = constraints.constrain(Size(crossAxisExtent,mainAxisExtent));
            containerMainAxisExtent = size.height;
            containerCrossAxisExtent = size.width;
            break;
    }
    properties._hasVisualOverflow = containerMainAxisExtent < mainAxisExtent || containerCrossAxisExtent < crossAxisExtent;
    let crossAxisFreeSpace : double = math.max(0.0,containerCrossAxisExtent - crossAxisExtent);
    let runLeadingSpace : double = 0.0;
    let runBetweenSpace : double = 0.0;
    switch (properties.runAlignment) {
        case WrapAlignment.start:
            break;
        case WrapAlignment.end:
            runLeadingSpace = crossAxisFreeSpace;
            break;
        case WrapAlignment.center:
            runLeadingSpace = crossAxisFreeSpace / 2.0;
            break;
        case WrapAlignment.spaceBetween:
            runBetweenSpace = runCount > 1 ? crossAxisFreeSpace / (runCount - 1) : 0.0;
            break;
        case WrapAlignment.spaceAround:
            runBetweenSpace = crossAxisFreeSpace / runCount;
            runLeadingSpace = runBetweenSpace / 2.0;
            break;
        case WrapAlignment.spaceEvenly:
            runBetweenSpace = crossAxisFreeSpace / (runCount + 1);
            runLeadingSpace = runBetweenSpace;
            break;
    }
    runBetweenSpace += runSpacing;
    let crossAxisOffset : double = flipCrossAxis ? containerCrossAxisExtent - runLeadingSpace : runLeadingSpace;
    child = firstChild;
    for(let i : number = 0; i < runCount; ++i){
        let metrics : _RunMetrics = runMetrics[i];
        let runMainAxisExtent : double = metrics.mainAxisExtent;
        let runCrossAxisExtent : double = metrics.crossAxisExtent;
        let childCount : number = metrics.childCount;
        let mainAxisFreeSpace : double = math.max(0.0,containerMainAxisExtent - runMainAxisExtent);
        let childLeadingSpace : double = 0.0;
        let childBetweenSpace : double = 0.0;
        switch (properties.alignment) {
            case WrapAlignment.start:
                break;
            case WrapAlignment.end:
                childLeadingSpace = mainAxisFreeSpace;
                break;
            case WrapAlignment.center:
                childLeadingSpace = mainAxisFreeSpace / 2.0;
                break;
            case WrapAlignment.spaceBetween:
                childBetweenSpace = childCount > 1 ? mainAxisFreeSpace / (childCount - 1) : 0.0;
                break;
            case WrapAlignment.spaceAround:
                childBetweenSpace = mainAxisFreeSpace / childCount;
                childLeadingSpace = childBetweenSpace / 2.0;
                break;
            case WrapAlignment.spaceEvenly:
                childBetweenSpace = mainAxisFreeSpace / (childCount + 1);
                childLeadingSpace = childBetweenSpace;
                break;
        }
        childBetweenSpace += spacing;
        let childMainPosition : double = flipMainAxis ? containerMainAxisExtent - childLeadingSpace : childLeadingSpace;
        if (flipCrossAxis) crossAxisOffset -= runCrossAxisExtent;
        while (child != null){
            let childParentData : WrapParentData = child.parentData;
            if (childParentData._runIndex != i) break;
            let childMainAxisExtent : double = _getMainAxisExtent(child);
            let childCrossAxisExtent : double = _getCrossAxisExtent(child);
            let childCrossAxisOffset : double = _getChildCrossAxisOffset(flipCrossAxis,runCrossAxisExtent,childCrossAxisExtent);
            if (flipMainAxis) childMainPosition -= childMainAxisExtent;
            childParentData.offset = _getOffset(childMainPosition,crossAxisOffset + childCrossAxisOffset);
            if (flipMainAxis) childMainPosition -= childBetweenSpace;else childMainPosition += childMainAxisExtent + childBetweenSpace;
            child = childParentData.nextSibling;
        }
        if (flipCrossAxis) crossAxisOffset -= runBetweenSpace;else crossAxisOffset += runCrossAxisExtent + runBetweenSpace;
    }
};
export var _getChildCrossAxisOffset : (flipCrossAxis : boolean,runCrossAxisExtent : double,childCrossAxisExtent : double) => double = (flipCrossAxis : boolean,runCrossAxisExtent : double,childCrossAxisExtent : double) : double =>  {
    let freeSpace : double = runCrossAxisExtent - childCrossAxisExtent;
    switch (properties.crossAxisAlignment) {
        case WrapCrossAlignment.start:
            return flipCrossAxis ? freeSpace : 0.0;
        case WrapCrossAlignment.end:
            return flipCrossAxis ? 0.0 : freeSpace;
        case WrapCrossAlignment.center:
            return freeSpace / 2.0;
    }
    return 0.0;
};
export var debugFillProperties : (properties : lib8.DiagnosticPropertiesBuilder) => any = (properties : lib8.DiagnosticPropertiesBuilder) : any =>  {
    super.debugFillProperties(properties);
    properties.add(lib8.EnumProperty('direction',properties.direction));
    properties.add(lib8.EnumProperty('alignment',properties.alignment));
    properties.add(lib8.DoubleProperty('spacing',properties.spacing));
    properties.add(lib8.EnumProperty('runAlignment',properties.runAlignment));
    properties.add(lib8.DoubleProperty('runSpacing',properties.runSpacing));
    properties.add(lib8.DoubleProperty('crossAxisAlignment',properties.runSpacing));
    properties.add(lib8.EnumProperty('textDirection',properties.textDirection,{
        defaultValue : null}));
    properties.add(lib8.EnumProperty('verticalDirection',properties.verticalDirection,{
        defaultValue : lib4.VerticalDirection.down}));
};
export var _computeIntrinsicHeightForWidth : (width : double) => double = (width : double) : double =>  {
    /* TODO (AssertStatementImpl) : assert (direction == Axis.horizontal); */;
    let runCount : number = 0;
    let height : double = 0.0;
    let runWidth : double = 0.0;
    let runHeight : double = 0.0;
    let childCount : number = 0;
    let child : lib3.RenderBox = firstChild;
    while (child != null){
        let childWidth : double = child.getMaxIntrinsicWidth(new core.DartDouble(double).infinity);
        let childHeight : double = child.getMaxIntrinsicHeight(childWidth);
        if (runWidth + childWidth > width) {
            height += runHeight;
            if (runCount > 0) height += properties.runSpacing;
            runCount += 1;
            runWidth = 0.0;
            runHeight = 0.0;
            childCount = 0;
        }
        runWidth += childWidth;
        runHeight = math.max(runHeight,childHeight);
        if (childCount > 0) runWidth += properties.spacing;
        childCount += 1;
        child = childAfter(child);
    }
    if (childCount > 0) height += runHeight + properties.runSpacing;
    return height;
};
export var _computeIntrinsicWidthForHeight : (height : double) => double = (height : double) : double =>  {
    /* TODO (AssertStatementImpl) : assert (direction == Axis.vertical); */;
    let runCount : number = 0;
    let width : double = 0.0;
    let runHeight : double = 0.0;
    let runWidth : double = 0.0;
    let childCount : number = 0;
    let child : lib3.RenderBox = firstChild;
    while (child != null){
        let childHeight : double = child.getMaxIntrinsicHeight(new core.DartDouble(double).infinity);
        let childWidth : double = child.getMaxIntrinsicWidth(childHeight);
        if (runHeight + childHeight > height) {
            width += runWidth;
            if (runCount > 0) width += properties.runSpacing;
            runCount += 1;
            runHeight = 0.0;
            runWidth = 0.0;
            childCount = 0;
        }
        runHeight += childHeight;
        runWidth = math.max(runWidth,childWidth);
        if (childCount > 0) runHeight += properties.spacing;
        childCount += 1;
        child = childAfter(child);
    }
    if (childCount > 0) width += runWidth + properties.runSpacing;
    return width;
};
export var computeMinIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    switch (properties.direction) {
        case lib4.Axis.horizontal:
            let width : double = 0.0;
            let child : lib3.RenderBox = firstChild;
            while (child != null){
                width = math.max(width,child.getMinIntrinsicWidth(new core.DartDouble(double).infinity));
                child = childAfter(child);
            }
            return width;
        case lib4.Axis.vertical:
            return _computeIntrinsicWidthForHeight(height);
    }
    return null;
};
export var computeMaxIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    switch (properties.direction) {
        case lib4.Axis.horizontal:
            let width : double = 0.0;
            let child : lib3.RenderBox = firstChild;
            while (child != null){
                width += child.getMaxIntrinsicWidth(new core.DartDouble(double).infinity);
                child = childAfter(child);
            }
            return width;
        case lib4.Axis.vertical:
            return _computeIntrinsicWidthForHeight(height);
    }
    return null;
};
export var computeMinIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    switch (properties.direction) {
        case lib4.Axis.horizontal:
            return _computeIntrinsicHeightForWidth(width);
        case lib4.Axis.vertical:
            let height : double = 0.0;
            let child : lib3.RenderBox = firstChild;
            while (child != null){
                height = math.max(height,child.getMinIntrinsicHeight(new core.DartDouble(double).infinity));
                child = childAfter(child);
            }
            return height;
    }
    return null;
};
export var computeMaxIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    switch (properties.direction) {
        case lib4.Axis.horizontal:
            return _computeIntrinsicHeightForWidth(width);
        case lib4.Axis.vertical:
            let height : double = 0.0;
            let child : lib3.RenderBox = firstChild;
            while (child != null){
                height += child.getMaxIntrinsicHeight(new core.DartDouble(double).infinity);
                child = childAfter(child);
            }
            return height;
    }
    return null;
};
export var computeDistanceToActualBaseline : (baseline : any) => double = (baseline : any) : double =>  {
    return defaultComputeDistanceToHighestActualBaseline(baseline);
};
export var _getMainAxisExtent : (child : lib3.RenderBox) => double = (child : lib3.RenderBox) : double =>  {
    switch (properties.direction) {
        case lib4.Axis.horizontal:
            return child.size.width;
        case lib4.Axis.vertical:
            return child.size.height;
    }
    return 0.0;
};
export var _getCrossAxisExtent : (child : lib3.RenderBox) => double = (child : lib3.RenderBox) : double =>  {
    switch (properties.direction) {
        case lib4.Axis.horizontal:
            return child.size.height;
        case lib4.Axis.vertical:
            return child.size.width;
    }
    return 0.0;
};
export var _getOffset : (mainAxisOffset : double,crossAxisOffset : double) => any = (mainAxisOffset : double,crossAxisOffset : double) : any =>  {
    switch (properties.direction) {
        case lib4.Axis.horizontal:
            return Offset(mainAxisOffset,crossAxisOffset);
        case lib4.Axis.vertical:
            return Offset(crossAxisOffset,mainAxisOffset);
    }
    return Offset.zero;
};
export var setupParentData : (child : lib3.RenderBox) => any = (child : lib3.RenderBox) : any =>  {
    if (isNot(child.parentData, WrapParentData)) child.parentData = WrapParentData();
};
export namespace RenderWrap {
    export type Constructors = lib3.RenderBox.Constructors | 'RenderWrap';
    export type Interface = Omit<RenderWrap, Constructors>;
}
@DartClass
@With(any,any)
export class RenderWrap extends lib3.RenderBox implements any.Interface,any.Interface {
    constructor(_namedArguments? : {children? : core.DartList<lib3.RenderBox>,direction? : lib4.Axis,alignment? : WrapAlignment,spacing? : double,runAlignment? : WrapAlignment,runSpacing? : double,crossAxisAlignment? : WrapCrossAlignment,textDirection? : any,verticalDirection? : lib4.VerticalDirection}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderWrap(_namedArguments? : {children? : core.DartList<lib3.RenderBox>,direction? : lib4.Axis,alignment? : WrapAlignment,spacing? : double,runAlignment? : WrapAlignment,runSpacing? : double,crossAxisAlignment? : WrapCrossAlignment,textDirection? : any,verticalDirection? : lib4.VerticalDirection}) {
        let {children,direction,alignment,spacing,runAlignment,runSpacing,crossAxisAlignment,textDirection,verticalDirection} = Object.assign({
            "direction" : lib4.Axis.horizontal,
            "alignment" : WrapAlignment.start,
            "spacing" : 0.0,
            "runAlignment" : WrapAlignment.start,
            "runSpacing" : 0.0,
            "crossAxisAlignment" : WrapCrossAlignment.start,
            "verticalDirection" : lib4.VerticalDirection.down}, _namedArguments );
        this._direction = properties.direction;
        this._alignment = properties.alignment;
        this._spacing = properties.spacing;
        this._runAlignment = properties.runAlignment;
        this._runSpacing = properties.runSpacing;
        this._crossAxisAlignment = properties.crossAxisAlignment;
        this._textDirection = properties.textDirection;
        this._verticalDirection = properties.verticalDirection;
        this.assert = assert;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    _direction;
    _alignment;
    _spacing;
    _runAlignment;
    _runSpacing;
    _crossAxisAlignment;
    _textDirection;
    _verticalDirection;

    @Abstract
    addAll(children : any){ throw 'abstract'}
}

export namespace WrapParentData {
    export type Constructors = lib3.ContainerBoxParentData.Constructors | 'WrapParentData';
    export type Interface = Omit<WrapParentData, Constructors>;
}
@DartClass
export class WrapParentData extends lib3.ContainerBoxParentData<lib3.RenderBox> {
    _runIndex : number;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    WrapParentData() {
        this._runIndex = 0;
    }
}

export namespace _RunMetrics {
    export type Constructors = '_RunMetrics';
    export type Interface = Omit<_RunMetrics, Constructors>;
}
@DartClass
export class _RunMetrics {
    constructor(mainAxisExtent : double,crossAxisExtent : double,childCount : number) {
    }
    @defaultConstructor
    _RunMetrics(mainAxisExtent : double,crossAxisExtent : double,childCount : number) {
        this.mainAxisExtent = mainAxisExtent;
        this.crossAxisExtent = crossAxisExtent;
        this.childCount = childCount;
    }
    mainAxisExtent : double;

    crossAxisExtent : double;

    childCount : number;

}

export enum WrapCrossAlignment {
    start,
    end,
    center
}

export enum WrapAlignment {
    start,
    end,
    center,
    spaceBetween,
    spaceAround,
    spaceEvenly
}

export class properties {
    static set runAlignment(value : WrapAlignment) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,properties._runAlignment,value)) return;
        properties._runAlignment = value;
        markNeedsLayout();
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
        if (op(Op.EQUALS,properties._direction,value)) return;
        properties._direction = value;
        markNeedsLayout();
    }
    static get alignment() : WrapAlignment {
        return properties._alignment;
    }
    private static __$_alignment : WrapAlignment;
    static get _alignment() : WrapAlignment { 
        return this.__$_alignment;
    }
    static set _alignment(__$value : WrapAlignment)  { 
        this.__$_alignment = __$value;
    }

    static set alignment(value : WrapAlignment) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,properties._alignment,value)) return;
        properties._alignment = value;
        markNeedsLayout();
    }
    static get spacing() : double {
        return properties._spacing;
    }
    private static __$_spacing : double;
    static get _spacing() : double { 
        return this.__$_spacing;
    }
    static set _spacing(__$value : double)  { 
        this.__$_spacing = __$value;
    }

    static set spacing(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (properties._spacing == value) return;
        properties._spacing = value;
        markNeedsLayout();
    }
    static get runAlignment() : WrapAlignment {
        return properties._runAlignment;
    }
    private static __$_runAlignment : WrapAlignment;
    static get _runAlignment() : WrapAlignment { 
        return this.__$_runAlignment;
    }
    static set _runAlignment(__$value : WrapAlignment)  { 
        this.__$_runAlignment = __$value;
    }

    static get runSpacing() : double {
        return properties._runSpacing;
    }
    private static __$_runSpacing : double;
    static get _runSpacing() : double { 
        return this.__$_runSpacing;
    }
    static set _runSpacing(__$value : double)  { 
        this.__$_runSpacing = __$value;
    }

    static set runSpacing(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (properties._runSpacing == value) return;
        properties._runSpacing = value;
        markNeedsLayout();
    }
    static get crossAxisAlignment() : WrapCrossAlignment {
        return properties._crossAxisAlignment;
    }
    private static __$_crossAxisAlignment : WrapCrossAlignment;
    static get _crossAxisAlignment() : WrapCrossAlignment { 
        return this.__$_crossAxisAlignment;
    }
    static set _crossAxisAlignment(__$value : WrapCrossAlignment)  { 
        this.__$_crossAxisAlignment = __$value;
    }

    static set crossAxisAlignment(value : WrapCrossAlignment) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,properties._crossAxisAlignment,value)) return;
        properties._crossAxisAlignment = value;
        markNeedsLayout();
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
    static get _debugHasNecessaryDirections() : boolean {
        /* TODO (AssertStatementImpl) : assert (direction != null); */;
        /* TODO (AssertStatementImpl) : assert (alignment != null); */;
        /* TODO (AssertStatementImpl) : assert (runAlignment != null); */;
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
        if (op(Op.EQUALS,properties.alignment,WrapAlignment.start) || op(Op.EQUALS,properties.alignment,WrapAlignment.end)) {
            switch (properties.direction) {
                case lib4.Axis.horizontal:
                    /* TODO (AssertStatementImpl) : assert (textDirection != null, 'Horizontal $runtimeType with alignment $alignment has a null textDirection, so the alignment cannot be resolved.'); */;
                    break;
                case lib4.Axis.vertical:
                    /* TODO (AssertStatementImpl) : assert (verticalDirection != null, 'Vertical $runtimeType with alignment $alignment has a null verticalDirection, so the alignment cannot be resolved.'); */;
                    break;
            }
        }
        if (op(Op.EQUALS,properties.runAlignment,WrapAlignment.start) || op(Op.EQUALS,properties.runAlignment,WrapAlignment.end)) {
            switch (properties.direction) {
                case lib4.Axis.horizontal:
                    /* TODO (AssertStatementImpl) : assert (verticalDirection != null, 'Horizontal $runtimeType with runAlignment $runAlignment has a null verticalDirection, so the alignment cannot be resolved.'); */;
                    break;
                case lib4.Axis.vertical:
                    /* TODO (AssertStatementImpl) : assert (textDirection != null, 'Vertical $runtimeType with runAlignment $runAlignment has a null textDirection, so the alignment cannot be resolved.'); */;
                    break;
            }
        }
        if (op(Op.EQUALS,properties.crossAxisAlignment,WrapCrossAlignment.start) || op(Op.EQUALS,properties.crossAxisAlignment,WrapCrossAlignment.end)) {
            switch (properties.direction) {
                case lib4.Axis.horizontal:
                    /* TODO (AssertStatementImpl) : assert (verticalDirection != null, 'Horizontal $runtimeType with crossAxisAlignment $crossAxisAlignment has a null verticalDirection, so the alignment cannot be resolved.'); */;
                    break;
                case lib4.Axis.vertical:
                    /* TODO (AssertStatementImpl) : assert (textDirection != null, 'Vertical $runtimeType with crossAxisAlignment $crossAxisAlignment has a null textDirection, so the alignment cannot be resolved.'); */;
                    break;
            }
        }
        return true;
    }
}
