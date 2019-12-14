/** Library asset:datahedgehog_monitor/lib/lib/rendering/flow.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/change_notifier";
import * as lib5 from "./box";
import * as lib6 from "./object";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/painting/matrix_utils";

export var _getAlphaFromOpacity : (opacity : double) => number = (opacity : double) : number =>  {
    return new core.DartDouble((opacity * 255)).round();
};
export var setupParentData : (child : lib5.RenderBox) => any = (child : lib5.RenderBox) : any =>  {
    let childParentData : lib6.ParentData = child.parentData;
    if (is(childParentData, FlowParentData)) childParentData._transform = null;else child.parentData = FlowParentData();
};
export var attach : (owner : lib6.PipelineOwner) => any = (owner : lib6.PipelineOwner) : any =>  {
    super.attach(owner);
    ((_828_)=>(!!_828_)?_828_.addListener(markNeedsPaint):null)(properties._delegate._repaint);
};
export var detach : () => any = () : any =>  {
    ((_829_)=>(!!_829_)?_829_.removeListener(markNeedsPaint):null)(properties._delegate._repaint);
    super.detach();
};
export var _getSize : (constraints : lib5.BoxConstraints) => any = (constraints : lib5.BoxConstraints) : any =>  {
    /* TODO (AssertStatementImpl) : assert (constraints.debugAssertIsValid()); */;
    return constraints.constrain(properties._delegate.getSize(constraints));
};
export var computeMinIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    let width : double = _getSize(lib5.BoxConstraints.tightForFinite({
        height : height})).width;
    if (new core.DartDouble(width).isFinite) return width;
    return 0.0;
};
export var computeMaxIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    let width : double = _getSize(lib5.BoxConstraints.tightForFinite({
        height : height})).width;
    if (new core.DartDouble(width).isFinite) return width;
    return 0.0;
};
export var computeMinIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    let height : double = _getSize(lib5.BoxConstraints.tightForFinite({
        width : width})).height;
    if (new core.DartDouble(height).isFinite) return height;
    return 0.0;
};
export var computeMaxIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    let height : double = _getSize(lib5.BoxConstraints.tightForFinite({
        width : width})).height;
    if (new core.DartDouble(height).isFinite) return height;
    return 0.0;
};
export var performLayout : () => any = () : any =>  {
    size = _getSize(constraints);
    let i : number = 0;
    properties._randomAccessChildren.clear();
    let child : lib5.RenderBox = firstChild;
    while (child != null){
        properties._randomAccessChildren.add(child);
        let innerConstraints : lib5.BoxConstraints = properties._delegate.getConstraintsForChild(i,constraints);
        child.layout(innerConstraints,{
            parentUsesSize : true});
        let childParentData : FlowParentData = child.parentData;
        childParentData.offset = Offset.zero;
        child = childParentData.nextSibling;
        i += 1;
    }
};
export var getChildSize : (i : number) => any = (i : number) : any =>  {
    if (i < 0 || i >= properties._randomAccessChildren.length) return null;
    return properties._randomAccessChildren[i].size;
};
export var paintChild : (i : number,_namedArguments? : {transform? : lib3.Matrix4,opacity? : double}) => any = (i : number,_namedArguments? : {transform? : lib3.Matrix4,opacity? : double}) : any =>  {
    let {transform,opacity} = Object.assign({
        "opacity" : 1.0}, _namedArguments );
    transform = ( transform ) || ( lib3.Matrix4.identity() );
    let child : lib5.RenderBox = properties._randomAccessChildren[i];
    let childParentData : FlowParentData = child.parentData;
    /* TODO (AssertStatementImpl) : assert (() {if (childParentData._transform != null) {throw FlutterError('Cannot call paintChild twice for the same child.\n' 'The flow delegate of type ${_delegate.runtimeType} attempted to ' 'paint child $i multiple times, which is not permitted.');} return true;}()); */;
    properties._lastPaintOrder.add(i);
    childParentData._transform = transform;
    if (opacity == 0.0) return;
    var painter : (context : lib6.PaintingContext,offset : any) => any = (context : lib6.PaintingContext,offset : any) : any =>  {
        context.paintChild(child,offset);
    };
    if (opacity == 1.0) {
        properties._paintingContext.pushTransform(needsCompositing,properties._paintingOffset,transform,painter);
    }else {
        properties._paintingContext.pushOpacity(properties._paintingOffset,_getAlphaFromOpacity(opacity),(context : lib6.PaintingContext,offset : any) =>  {
            context.pushTransform(needsCompositing,offset,transform,painter);
        });
    }
};
export var _paintWithDelegate : (context : lib6.PaintingContext,offset : any) => any = (context : lib6.PaintingContext,offset : any) : any =>  {
    properties._lastPaintOrder.clear();
    properties._paintingContext = context;
    properties._paintingOffset = offset;
    for(let child of properties._randomAccessChildren) {
        let childParentData : FlowParentData = child.parentData;
        childParentData._transform = null;
    }
    try {
        properties._delegate.paintChildren(this);
    } finally {
        properties._paintingContext = null;
        properties._paintingOffset = null;
    }
};
export var paint : (context : lib6.PaintingContext,offset : any) => any = (context : lib6.PaintingContext,offset : any) : any =>  {
    context.pushClipRect(needsCompositing,offset,op(Op.BITAND,Offset.zero,size),_paintWithDelegate);
};
export var hitTestChildren : (result : lib7.HitTestResult,_namedArguments? : {position? : any}) => boolean = (result : lib7.HitTestResult,_namedArguments? : {position? : any}) : boolean =>  {
    let {position} = Object.assign({
    }, _namedArguments );
    let children : core.DartList<lib5.RenderBox> = getChildrenAsList();
    for(let i : number = properties._lastPaintOrder.length - 1; i >= 0; --i){
        let childIndex : number = properties._lastPaintOrder[i];
        if (childIndex >= children.length) continue;
        let child : lib5.RenderBox = children[childIndex];
        let childParentData : FlowParentData = child.parentData;
        let transform : lib3.Matrix4 = childParentData._transform;
        if (op(Op.EQUALS,transform,null)) continue;
        let inverse : lib3.Matrix4 = lib3.Matrix4.zero();
        let determinate : double = inverse.copyInverse(transform);
        if (determinate == 0.0) {
            continue;
        }
        let childPosition : any = lib8.MatrixUtils.transformPoint(inverse,position);
        if (child.hitTest(result,{
            position : childPosition})) return true;
    }
    return false;
};
export var applyPaintTransform : (child : lib5.RenderBox,transform : lib3.Matrix4) => any = (child : lib5.RenderBox,transform : lib3.Matrix4) : any =>  {
    let childParentData : FlowParentData = child.parentData;
    if (childParentData._transform != null) transform.multiply(childParentData._transform);
    super.applyPaintTransform(child,transform);
};
export namespace FlowPaintingContext {
    export type Constructors = 'FlowPaintingContext';
    export type Interface = Omit<FlowPaintingContext, Constructors>;
}
@DartClass
export class FlowPaintingContext {
    @AbstractProperty
    get size() : any{ throw 'abstract'}
    @AbstractProperty
    get childCount() : number{ throw 'abstract'}
    @Abstract
    getChildSize(i : number) : any{ throw 'abstract'}
    @Abstract
    paintChild(i : number,_namedArguments? : {transform? : lib3.Matrix4,opacity? : double}) : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    FlowPaintingContext() {
    }
}

export namespace FlowDelegate {
    export type Constructors = 'FlowDelegate';
    export type Interface = Omit<FlowDelegate, Constructors>;
}
@DartClass
export class FlowDelegate {
    constructor(_namedArguments? : {repaint? : lib4.Listenable}) {
    }
    @defaultConstructor
    FlowDelegate(_namedArguments? : {repaint? : lib4.Listenable}) {
        let {repaint} = Object.assign({
        }, _namedArguments );
        this._repaint = repaint;
    }
    _repaint : lib4.Listenable;

    getSize(constraints : lib5.BoxConstraints) : any {
        return constraints.biggest;
    }
    getConstraintsForChild(i : number,constraints : lib5.BoxConstraints) : lib5.BoxConstraints {
        return constraints;
    }
    @Abstract
    paintChildren(context : FlowPaintingContext) : any{ throw 'abstract'}
    shouldRelayout(oldDelegate : FlowDelegate) : boolean {
        return false;
    }
    @Abstract
    shouldRepaint(oldDelegate : FlowDelegate) : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}`;
    }
}

export namespace FlowParentData {
    export type Constructors = lib5.ContainerBoxParentData.Constructors | 'FlowParentData';
    export type Interface = Omit<FlowParentData, Constructors>;
}
@DartClass
export class FlowParentData extends lib5.ContainerBoxParentData<lib5.RenderBox> {
    _transform : lib3.Matrix4;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FlowParentData() {
    }
}

export namespace RenderFlow {
    export type Constructors = lib5.RenderBox.Constructors | 'RenderFlow';
    export type Interface = Omit<RenderFlow, Constructors>;
}
@DartClass
@Implements(FlowPaintingContext)
@With(any,any)
export class RenderFlow extends lib5.RenderBox implements FlowPaintingContext.Interface,any.Interface,any.Interface {
    constructor(_namedArguments? : {children? : core.DartList<lib5.RenderBox>,delegate? : FlowDelegate}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderFlow(_namedArguments? : {children? : core.DartList<lib5.RenderBox>,delegate? : FlowDelegate}) {
        let {children,delegate} = Object.assign({
        }, _namedArguments );
        this._delegate = properties.delegate;
        this.assert = assert;
    }
     : any;

    _delegate;

    @Abstract
    addAll(children : any){ throw 'abstract'}
}

export class properties {
    static get delegate() : FlowDelegate {
        return properties._delegate;
    }
    private static __$_delegate : FlowDelegate;
    static get _delegate() : FlowDelegate { 
        return this.__$_delegate;
    }
    static set _delegate(__$value : FlowDelegate)  { 
        this.__$_delegate = __$value;
    }

    static set delegate(newDelegate : FlowDelegate) {
        /* TODO (AssertStatementImpl) : assert (newDelegate != null); */;
        if (op(Op.EQUALS,properties._delegate,newDelegate)) return;
        let oldDelegate : FlowDelegate = properties._delegate;
        properties._delegate = newDelegate;
        if (newDelegate.runtimeType != oldDelegate.runtimeType || newDelegate.shouldRelayout(oldDelegate)) markNeedsLayout();else if (newDelegate.shouldRepaint(oldDelegate)) markNeedsPaint();
        if (attached) {
            ((_826_)=>(!!_826_)?_826_.removeListener(markNeedsPaint):null)(oldDelegate._repaint);
            ((_827_)=>(!!_827_)?_827_.addListener(markNeedsPaint):null)(newDelegate._repaint);
        }
    }
    static get isRepaintBoundary() : boolean {
        return true;
    }
    private static __$_randomAccessChildren : core.DartList<lib5.RenderBox>;
    static get _randomAccessChildren() : core.DartList<lib5.RenderBox> { 
        if (this.__$_randomAccessChildren===undefined) {
            this.__$_randomAccessChildren = new core.DartList.literal<lib5.RenderBox>();
        }
        return this.__$_randomAccessChildren;
    }
    static set _randomAccessChildren(__$value : core.DartList<lib5.RenderBox>)  { 
        this.__$_randomAccessChildren = __$value;
    }

    private static __$_lastPaintOrder : core.DartList<number>;
    static get _lastPaintOrder() : core.DartList<number> { 
        if (this.__$_lastPaintOrder===undefined) {
            this.__$_lastPaintOrder = new core.DartList.literal<number>();
        }
        return this.__$_lastPaintOrder;
    }
    static set _lastPaintOrder(__$value : core.DartList<number>)  { 
        this.__$_lastPaintOrder = __$value;
    }

    private static __$_paintingContext : lib6.PaintingContext;
    static get _paintingContext() : lib6.PaintingContext { 
        return this.__$_paintingContext;
    }
    static set _paintingContext(__$value : lib6.PaintingContext)  { 
        this.__$_paintingContext = __$value;
    }

    private static __$_paintingOffset : any;
    static get _paintingOffset() : any { 
        return this.__$_paintingOffset;
    }
    static set _paintingOffset(__$value : any)  { 
        this.__$_paintingOffset = __$value;
    }

}
