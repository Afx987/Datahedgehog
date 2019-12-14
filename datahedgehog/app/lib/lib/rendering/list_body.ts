/** Library asset:datahedgehog_monitor/lib/lib/rendering/list_body.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./box";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as math from "@dart2ts/dart/math";
import * as lib7 from "./object";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";

export var setupParentData : (child : lib3.RenderBox) => any = (child : lib3.RenderBox) : any =>  {
    if (isNot(child.parentData, ListBodyParentData)) child.parentData = ListBodyParentData();
};
export var performLayout : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (() {switch (mainAxis) {case Axis.horizontal: if (!constraints.hasBoundedWidth) return true; break; case Axis.vertical: if (!constraints.hasBoundedHeight) return true; break;} throw FlutterError('RenderListBody must have unlimited space along its main axis.\n' 'RenderListBody does not clip or resize its children, so it must be ' 'placed in a parent that does not constrain the main ' 'axis. You probably want to put the RenderListBody inside a ' 'RenderViewport with a matching main axis.');}()); */;
    /* TODO (AssertStatementImpl) : assert (() {switch (mainAxis) {case Axis.horizontal: if (constraints.hasBoundedHeight) return true; break; case Axis.vertical: if (constraints.hasBoundedWidth) return true; break;} throw FlutterError('RenderListBody must have a bounded constraint for its cross axis.\n' 'RenderListBody forces its children to expand to fit the RenderListBody\'s container, ' 'so it must be placed in a parent that constrains the cross ' 'axis to a finite dimension. If you are attempting to nest a RenderListBody with ' 'one direction inside one of another direction, you will want to ' 'wrap the inner one inside a box that fixes the dimension in that direction, ' 'for example, a RenderIntrinsicWidth or RenderIntrinsicHeight object. ' 'This is relatively expensive, however.');}()); */;
    let mainAxisExtent : double = 0.0;
    let child : lib3.RenderBox = firstChild;
    switch (properties.axisDirection) {
        case lib4.AxisDirection.right:
            let innerConstraints : lib3.BoxConstraints = lib3.BoxConstraints.tightFor({
                height : constraints.maxHeight});
            while (child != null){
                child.layout(innerConstraints,{
                    parentUsesSize : true});
                let childParentData : ListBodyParentData = child.parentData;
                childParentData.offset = Offset(mainAxisExtent,0.0);
                mainAxisExtent += child.size.width;
                /* TODO (AssertStatementImpl) : assert (child.parentData == childParentData); */;
                child = childParentData.nextSibling;
            }
            size = constraints.constrain(Size(mainAxisExtent,constraints.maxHeight));
            break;
        case lib4.AxisDirection.left:
            let innerConstraints : lib3.BoxConstraints = lib3.BoxConstraints.tightFor({
                height : constraints.maxHeight});
            while (child != null){
                child.layout(innerConstraints,{
                    parentUsesSize : true});
                let childParentData : ListBodyParentData = child.parentData;
                mainAxisExtent += child.size.width;
                /* TODO (AssertStatementImpl) : assert (child.parentData == childParentData); */;
                child = childParentData.nextSibling;
            }
            let position : double = 0.0;
            child = firstChild;
            while (child != null){
                let childParentData : ListBodyParentData = child.parentData;
                position += child.size.width;
                childParentData.offset = Offset(mainAxisExtent - position,0.0);
                /* TODO (AssertStatementImpl) : assert (child.parentData == childParentData); */;
                child = childParentData.nextSibling;
            }
            size = constraints.constrain(Size(mainAxisExtent,constraints.maxHeight));
            break;
        case lib4.AxisDirection.down:
            let innerConstraints : lib3.BoxConstraints = lib3.BoxConstraints.tightFor({
                width : constraints.maxWidth});
            while (child != null){
                child.layout(innerConstraints,{
                    parentUsesSize : true});
                let childParentData : ListBodyParentData = child.parentData;
                childParentData.offset = Offset(0.0,mainAxisExtent);
                mainAxisExtent += child.size.height;
                /* TODO (AssertStatementImpl) : assert (child.parentData == childParentData); */;
                child = childParentData.nextSibling;
            }
            size = constraints.constrain(Size(constraints.maxWidth,mainAxisExtent));
            break;
        case lib4.AxisDirection.up:
            let innerConstraints : lib3.BoxConstraints = lib3.BoxConstraints.tightFor({
                width : constraints.maxWidth});
            while (child != null){
                child.layout(innerConstraints,{
                    parentUsesSize : true});
                let childParentData : ListBodyParentData = child.parentData;
                mainAxisExtent += child.size.height;
                /* TODO (AssertStatementImpl) : assert (child.parentData == childParentData); */;
                child = childParentData.nextSibling;
            }
            let position : double = 0.0;
            child = firstChild;
            while (child != null){
                let childParentData : ListBodyParentData = child.parentData;
                position += child.size.height;
                childParentData.offset = Offset(0.0,mainAxisExtent - position);
                /* TODO (AssertStatementImpl) : assert (child.parentData == childParentData); */;
                child = childParentData.nextSibling;
            }
            size = constraints.constrain(Size(constraints.maxWidth,mainAxisExtent));
            break;
    }
    /* TODO (AssertStatementImpl) : assert (size.isFinite); */;
};
export var debugFillProperties : (properties : lib5.DiagnosticPropertiesBuilder) => any = (properties : lib5.DiagnosticPropertiesBuilder) : any =>  {
    super.debugFillProperties(properties);
    properties.add(lib5.EnumProperty('axisDirection',properties.axisDirection));
};
export var _getIntrinsicCrossAxis : (childSize : (child : lib3.RenderBox) => double) => double = (childSize : (child : lib3.RenderBox) => double) : double =>  {
    let extent : double = 0.0;
    let child : lib3.RenderBox = firstChild;
    while (child != null){
        extent = math.max(extent,childSize(child));
        let childParentData : ListBodyParentData = child.parentData;
        child = childParentData.nextSibling;
    }
    return extent;
};
export var _getIntrinsicMainAxis : (childSize : (child : lib3.RenderBox) => double) => double = (childSize : (child : lib3.RenderBox) => double) : double =>  {
    let extent : double = 0.0;
    let child : lib3.RenderBox = firstChild;
    while (child != null){
        extent += childSize(child);
        let childParentData : ListBodyParentData = child.parentData;
        child = childParentData.nextSibling;
    }
    return extent;
};
export var computeMinIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    /* TODO (AssertStatementImpl) : assert (mainAxis != null); */;
    switch (properties.mainAxis) {
        case lib4.Axis.horizontal:
            return _getIntrinsicMainAxis((child : lib3.RenderBox) =>  {
                return child.getMinIntrinsicWidth(height);
            });
        case lib4.Axis.vertical:
            return _getIntrinsicCrossAxis((child : lib3.RenderBox) =>  {
                return child.getMinIntrinsicWidth(height);
            });
    }
    return null;
};
export var computeMaxIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    /* TODO (AssertStatementImpl) : assert (mainAxis != null); */;
    switch (properties.mainAxis) {
        case lib4.Axis.horizontal:
            return _getIntrinsicMainAxis((child : lib3.RenderBox) =>  {
                return child.getMaxIntrinsicWidth(height);
            });
        case lib4.Axis.vertical:
            return _getIntrinsicCrossAxis((child : lib3.RenderBox) =>  {
                return child.getMaxIntrinsicWidth(height);
            });
    }
    return null;
};
export var computeMinIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    /* TODO (AssertStatementImpl) : assert (mainAxis != null); */;
    switch (properties.mainAxis) {
        case lib4.Axis.horizontal:
            return _getIntrinsicMainAxis((child : lib3.RenderBox) =>  {
                return child.getMinIntrinsicHeight(width);
            });
        case lib4.Axis.vertical:
            return _getIntrinsicCrossAxis((child : lib3.RenderBox) =>  {
                return child.getMinIntrinsicHeight(width);
            });
    }
    return null;
};
export var computeMaxIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    /* TODO (AssertStatementImpl) : assert (mainAxis != null); */;
    switch (properties.mainAxis) {
        case lib4.Axis.horizontal:
            return _getIntrinsicMainAxis((child : lib3.RenderBox) =>  {
                return child.getMaxIntrinsicHeight(width);
            });
        case lib4.Axis.vertical:
            return _getIntrinsicCrossAxis((child : lib3.RenderBox) =>  {
                return child.getMaxIntrinsicHeight(width);
            });
    }
    return null;
};
export var computeDistanceToActualBaseline : (baseline : any) => double = (baseline : any) : double =>  {
    return defaultComputeDistanceToFirstActualBaseline(baseline);
};
export var paint : (context : lib7.PaintingContext,offset : any) => any = (context : lib7.PaintingContext,offset : any) : any =>  {
    defaultPaint(context,offset);
};
export var hitTestChildren : (result : lib8.HitTestResult,_namedArguments? : {position? : any}) => boolean = (result : lib8.HitTestResult,_namedArguments? : {position? : any}) : boolean =>  {
    let {position} = Object.assign({
    }, _namedArguments );
    return defaultHitTestChildren(result,{
        position : position});
};
export namespace ListBodyParentData {
    export type Constructors = lib3.ContainerBoxParentData.Constructors | 'ListBodyParentData';
    export type Interface = Omit<ListBodyParentData, Constructors>;
}
@DartClass
export class ListBodyParentData extends lib3.ContainerBoxParentData<lib3.RenderBox> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ListBodyParentData() {
    }
}

export namespace RenderListBody {
    export type Constructors = lib3.RenderBox.Constructors | 'RenderListBody';
    export type Interface = Omit<RenderListBody, Constructors>;
}
@DartClass
@With(any,any)
export class RenderListBody extends lib3.RenderBox implements any.Interface,any.Interface {
    constructor(_namedArguments? : {children? : core.DartList<lib3.RenderBox>,axisDirection? : lib4.AxisDirection}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderListBody(_namedArguments? : {children? : core.DartList<lib3.RenderBox>,axisDirection? : lib4.AxisDirection}) {
        let {children,axisDirection} = Object.assign({
            "axisDirection" : lib4.AxisDirection.down}, _namedArguments );
        this._axisDirection = properties.axisDirection;
        this.assert = assert;
    }
     : any;

    _axisDirection;

    @Abstract
    addAll(children : any){ throw 'abstract'}
}

export class properties {
    static get axisDirection() : lib4.AxisDirection {
        return properties._axisDirection;
    }
    private static __$_axisDirection : lib4.AxisDirection;
    static get _axisDirection() : lib4.AxisDirection { 
        return this.__$_axisDirection;
    }
    static set _axisDirection(__$value : lib4.AxisDirection)  { 
        this.__$_axisDirection = __$value;
    }

    static set axisDirection(value : lib4.AxisDirection) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,properties._axisDirection,value)) return;
        properties._axisDirection = value;
        markNeedsLayout();
    }
    static get mainAxis() : lib4.Axis {
        return lib4.axisDirectionToAxis(properties.axisDirection);
    }
}
