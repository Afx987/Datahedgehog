/** Library asset:datahedgehog_monitor/lib/lib/rendering/stack.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";
import * as lib4 from "./box";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";
import * as lib7 from "./object";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export var debugFillProperties : (properties : lib8.DiagnosticPropertiesBuilder) => any = (properties : lib8.DiagnosticPropertiesBuilder) : any =>  {
    super.debugFillProperties(properties);
    properties.add(lib8.DiagnosticsProperty('alignment',properties.alignment));
    properties.add(lib8.EnumProperty('textDirection',properties.textDirection));
    properties.add(lib8.EnumProperty('fit',properties.fit));
    properties.add(lib8.EnumProperty('overflow',properties.overflow));
};
export var describeApproximatePaintClip : (child : lib7.RenderObject) => any = (child : lib7.RenderObject) : any =>  {
    return properties._hasVisualOverflow ? op(Op.BITAND,Offset.zero,size) : null;
};
export var paint : (context : lib7.PaintingContext,offset : any) => any = (context : lib7.PaintingContext,offset : any) : any =>  {
    if (op(Op.EQUALS,properties._overflow,Overflow.clip) && properties._hasVisualOverflow) {
        context.pushClipRect(needsCompositing,offset,op(Op.BITAND,Offset.zero,size),paintStack);
    }else {
        paintStack(context,offset);
    }
};
export var paintStack : (context : lib7.PaintingContext,offset : any) => any = (context : lib7.PaintingContext,offset : any) : any =>  {
    defaultPaint(context,offset);
};
export var setupParentData : (child : lib4.RenderBox) => any = (child : lib4.RenderBox) : any =>  {
    if (isNot(child.parentData, StackParentData)) child.parentData = StackParentData();
};
export var _resolve : () => any = () : any =>  {
    if (properties._resolvedAlignment != null) return;
    properties._resolvedAlignment = properties.alignment.resolve(properties.textDirection);
};
export var _markNeedResolution : () => any = () : any =>  {
    properties._resolvedAlignment = null;
    markNeedsLayout();
};
export var hitTestChildren : (result : lib6.HitTestResult,_namedArguments? : {position? : any}) => boolean = (result : lib6.HitTestResult,_namedArguments? : {position? : any}) : boolean =>  {
    let {position} = Object.assign({
    }, _namedArguments );
    return defaultHitTestChildren(result,{
        position : position});
};
export var performLayout : () => any = () : any =>  {
    _resolve();
    /* TODO (AssertStatementImpl) : assert (_resolvedAlignment != null); */;
    properties._hasVisualOverflow = false;
    let hasNonPositionedChildren : boolean = false;
    if (op(Op.EQUALS,childCount,0)) {
        size = constraints.biggest;
        /* TODO (AssertStatementImpl) : assert (size.isFinite); */;
        return;
    }
    let width : double = constraints.minWidth;
    let height : double = constraints.minHeight;
    let nonPositionedConstraints : lib4.BoxConstraints;
    /* TODO (AssertStatementImpl) : assert (fit != null); */;
    switch (properties.fit) {
        case StackFit.loose:
            nonPositionedConstraints = constraints.loosen();
            break;
        case StackFit.expand:
            nonPositionedConstraints = lib4.BoxConstraints.tight(constraints.biggest);
            break;
        case StackFit.passthrough:
            nonPositionedConstraints = constraints;
            break;
    }
    /* TODO (AssertStatementImpl) : assert (nonPositionedConstraints != null); */;
    let child : lib4.RenderBox = firstChild;
    while (child != null){
        let childParentData : StackParentData = child.parentData;
        if (!childParentData.isPositioned) {
            hasNonPositionedChildren = true;
            child.layout(nonPositionedConstraints,{
                parentUsesSize : true});
            let childSize : any = child.size;
            width = math.max(width,childSize.width);
            height = math.max(height,childSize.height);
        }
        child = childParentData.nextSibling;
    }
    if (hasNonPositionedChildren) {
        size = Size(width,height);
        /* TODO (AssertStatementImpl) : assert (size.width == constraints.constrainWidth(width)); */;
        /* TODO (AssertStatementImpl) : assert (size.height == constraints.constrainHeight(height)); */;
    }else {
        size = constraints.biggest;
    }
    /* TODO (AssertStatementImpl) : assert (size.isFinite); */;
    child = firstChild;
    while (child != null){
        let childParentData : StackParentData = child.parentData;
        if (!childParentData.isPositioned) {
            childParentData.offset = properties._resolvedAlignment.alongOffset(op(Op.MINUS,size,child.size));
        }else {
            let childConstraints : lib4.BoxConstraints = new lib4.BoxConstraints();
            if (childParentData.left != null && childParentData.right != null) childConstraints = childConstraints.tighten({
                width : op(Op.MINUS,op(Op.MINUS,size.width,childParentData.right),childParentData.left)});else if (childParentData.width != null) childConstraints = childConstraints.tighten({
                width : childParentData.width});
            if (childParentData.top != null && childParentData.bottom != null) childConstraints = childConstraints.tighten({
                height : op(Op.MINUS,op(Op.MINUS,size.height,childParentData.bottom),childParentData.top)});else if (childParentData.height != null) childConstraints = childConstraints.tighten({
                height : childParentData.height});
            child.layout(childConstraints,{
                parentUsesSize : true});
            let x : double;
            if (childParentData.left != null) {
                x = childParentData.left;
            }else if (childParentData.right != null) {
                x = op(Op.MINUS,op(Op.MINUS,size.width,childParentData.right),child.size.width);
            }else {
                x = properties._resolvedAlignment.alongOffset(op(Op.MINUS,size,child.size)).dx;
            }
            if (x < 0.0 || x + child.size.width > size.width) properties._hasVisualOverflow = true;
            let y : double;
            if (childParentData.top != null) {
                y = childParentData.top;
            }else if (childParentData.bottom != null) {
                y = op(Op.MINUS,op(Op.MINUS,size.height,childParentData.bottom),child.size.height);
            }else {
                y = properties._resolvedAlignment.alongOffset(op(Op.MINUS,size,child.size)).dy;
            }
            if (y < 0.0 || y + child.size.height > size.height) properties._hasVisualOverflow = true;
            childParentData.offset = Offset(x,y);
        }
        /* TODO (AssertStatementImpl) : assert (child.parentData == childParentData); */;
        child = childParentData.nextSibling;
    }
};
export var computeMinIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    return _getIntrinsicDimension((child : lib4.RenderBox) =>  {
        return child.getMinIntrinsicWidth(height);
    });
};
export var computeMaxIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    return _getIntrinsicDimension((child : lib4.RenderBox) =>  {
        return child.getMaxIntrinsicWidth(height);
    });
};
export var computeMinIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    return _getIntrinsicDimension((child : lib4.RenderBox) =>  {
        return child.getMinIntrinsicHeight(width);
    });
};
export var computeMaxIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    return _getIntrinsicDimension((child : lib4.RenderBox) =>  {
        return child.getMaxIntrinsicHeight(width);
    });
};
export var computeDistanceToActualBaseline : (baseline : any) => double = (baseline : any) : double =>  {
    return defaultComputeDistanceToHighestActualBaseline(baseline);
};
export var _getIntrinsicDimension : (mainChildSizeGetter : (child : lib4.RenderBox) => double) => double = (mainChildSizeGetter : (child : lib4.RenderBox) => double) : double =>  {
    let extent : double = 0.0;
    let child : lib4.RenderBox = firstChild;
    while (child != null){
        let childParentData : StackParentData = child.parentData;
        if (!childParentData.isPositioned) extent = math.max(extent,mainChildSizeGetter(child));
        /* TODO (AssertStatementImpl) : assert (child.parentData == childParentData); */;
        child = childParentData.nextSibling;
    }
    return extent;
};
export namespace RelativeRect {
    export type Constructors = 'fromLTRB';
    export type Interface = Omit<RelativeRect, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class RelativeRect {
    @namedConstructor
    fromLTRB(left : double,top : double,right : double,bottom : double) {
        this.assert = assert;
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
    static fromLTRB : new(left : double,top : double,right : double,bottom : double) => RelativeRect;

     : any;

     : any;

     : any;

     : any;

    @namedFactory
    static $fromSize(rect : any,container : any) : RelativeRect {
        return RelativeRect.fromLTRB(rect.left,rect.top,op(Op.MINUS,container.width,rect.right),op(Op.MINUS,container.height,rect.bottom));
    }
    static fromSize : new(rect : any,container : any) => RelativeRect;

    @namedFactory
    static $fromRect(rect : any,container : any) : RelativeRect {
        return RelativeRect.fromLTRB(op(Op.MINUS,rect.left,container.left),op(Op.MINUS,rect.top,container.top),op(Op.MINUS,container.right,rect.right),op(Op.MINUS,container.bottom,rect.bottom));
    }
    static fromRect : new(rect : any,container : any) => RelativeRect;

    private static __$fill : RelativeRect;
    static get fill() : RelativeRect { 
        if (this.__$fill===undefined) {
            this.__$fill = RelativeRect.fromLTRB(0.0,0.0,0.0,0.0);
        }
        return this.__$fill;
    }

    left : double;

    top : double;

    right : double;

    bottom : double;

    get hasInsets() : boolean {
        return this.left > 0.0 || this.top > 0.0 || this.right > 0.0 || this.bottom > 0.0;
    }
    shift(offset : any) : RelativeRect {
        return RelativeRect.fromLTRB(this.left + offset.dx,this.top + offset.dy,this.right - offset.dx,this.bottom - offset.dy);
    }
    inflate(delta : double) : RelativeRect {
        return RelativeRect.fromLTRB(this.left - delta,this.top - delta,this.right - delta,this.bottom - delta);
    }
    deflate(delta : double) : RelativeRect {
        return this.inflate(-delta);
    }
    intersect(other : RelativeRect) : RelativeRect {
        return RelativeRect.fromLTRB(math.max(this.left,other.left),math.max(this.top,other.top),math.max(this.right,other.right),math.max(this.bottom,other.bottom));
    }
    toRect(container : any) : any {
        return Rect.fromLTRB(this.left,this.top,op(Op.MINUS,container.width,this.right),op(Op.MINUS,container.height,this.bottom));
    }
    toSize(container : any) : any {
        return Size(op(Op.MINUS,op(Op.MINUS,container.width,this.left),this.right),op(Op.MINUS,op(Op.MINUS,container.height,this.top),this.bottom));
    }
    static lerp(a : RelativeRect,b : RelativeRect,t : double) : RelativeRect {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        if (op(Op.EQUALS,a,null)) return RelativeRect.fromLTRB(b.left * t,b.top * t,b.right * t,b.bottom * t);
        if (op(Op.EQUALS,b,null)) {
            let k : double = 1.0 - t;
            return RelativeRect.fromLTRB(b.left * k,b.top * k,b.right * k,b.bottom * k);
        }
        return RelativeRect.fromLTRB(lerpDouble(a.left,b.left,t),lerpDouble(a.top,b.top,t),lerpDouble(a.right,b.right,t),lerpDouble(a.bottom,b.bottom,t));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (isNot(other, RelativeRect)) return false;
        let typedOther : RelativeRect = other;
        return this.left == typedOther.left && this.top == typedOther.top && this.right == typedOther.right && this.bottom == typedOther.bottom;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.left,this.top,this.right,this.bottom);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `RelativeRect.fromLTRB(${((_859_)=>(!!_859_)?new core.DartDouble(_859_).toStringAsFixed(1):null)(this.left)}, ${((_860_)=>(!!_860_)?new core.DartDouble(_860_).toStringAsFixed(1):null)(this.top)}, ${((_861_)=>(!!_861_)?new core.DartDouble(_861_).toStringAsFixed(1):null)(this.right)}, ${((_862_)=>(!!_862_)?new core.DartDouble(_862_).toStringAsFixed(1):null)(this.bottom)})`;
    }
}

export namespace RenderStack {
    export type Constructors = lib4.RenderBox.Constructors | 'RenderStack';
    export type Interface = Omit<RenderStack, Constructors>;
}
@DartClass
@With(any,any)
export class RenderStack extends lib4.RenderBox implements any.Interface,any.Interface {
    constructor(_namedArguments? : {children? : core.DartList<lib4.RenderBox>,alignment? : lib5.AlignmentGeometry,textDirection? : any,fit? : StackFit,overflow? : Overflow}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderStack(_namedArguments? : {children? : core.DartList<lib4.RenderBox>,alignment? : lib5.AlignmentGeometry,textDirection? : any,fit? : StackFit,overflow? : Overflow}) {
        let {children,alignment,textDirection,fit,overflow} = Object.assign({
            "alignment" : lib5.AlignmentDirectional.topStart,
            "fit" : StackFit.loose,
            "overflow" : Overflow.clip}, _namedArguments );
        this._alignment = properties.alignment;
        this._textDirection = properties.textDirection;
        this._fit = properties.fit;
        this._overflow = properties.overflow;
        this.assert = assert;
    }
     : any;

     : any;

     : any;

    _alignment;
    _textDirection;
    _fit;
    _overflow;

    @Abstract
    addAll(children : any){ throw 'abstract'}
}

export enum Overflow {
    visible,
    clip
}

export enum StackFit {
    loose,
    expand,
    passthrough
}

export namespace StackParentData {
    export type Constructors = lib4.ContainerBoxParentData.Constructors | 'StackParentData';
    export type Interface = Omit<StackParentData, Constructors>;
}
@DartClass
export class StackParentData extends lib4.ContainerBoxParentData<lib4.RenderBox> {
    top : double;

    right : double;

    bottom : double;

    left : double;

    width : double;

    height : double;

    get rect() : RelativeRect {
        return RelativeRect.fromLTRB(this.left,this.top,this.right,this.bottom);
    }
    set rect(value : RelativeRect) {
        this.top = value.top;
        this.right = value.right;
        this.bottom = value.bottom;
        this.left = value.left;
    }
    get isPositioned() : boolean {
        return this.top != null || this.right != null || this.bottom != null || this.left != null || this.width != null || this.height != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let values : core.DartList<string> = new core.DartList.literal<string>();
        if (this.top != null) values.add(`top=${this.top}`);
        if (this.right != null) values.add(`right=${this.right}`);
        if (this.bottom != null) values.add(`bottom=${this.bottom}`);
        if (this.left != null) values.add(`left=${this.left}`);
        if (this.width != null) values.add(`width=${this.width}`);
        if (this.height != null) values.add(`height=${this.height}`);
        if (values.isEmpty) values.add('not positioned');
        values.add(super.toString());
        return values.join('; ');
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StackParentData() {
    }
}

export namespace RenderIndexedStack {
    export type Constructors = RenderStack.Constructors | 'RenderIndexedStack';
    export type Interface = Omit<RenderIndexedStack, Constructors>;
}
@DartClass
export class RenderIndexedStack extends RenderStack {
    constructor(_namedArguments? : {children? : core.DartList<lib4.RenderBox>,alignment? : lib5.AlignmentGeometry,textDirection? : any,index? : number}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderIndexedStack(_namedArguments? : {children? : core.DartList<lib4.RenderBox>,alignment? : lib5.AlignmentGeometry,textDirection? : any,index? : number}) {
        let {children,alignment,textDirection,index} = Object.assign({
            "alignment" : lib5.AlignmentDirectional.topStart,
            "index" : 0}, _namedArguments );
        this._index = index;
        super.RenderStack({
            children : children,alignment : alignment,textDirection : textDirection});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildrenForSemantics(visitor : (child : any) => any) : any {
        if (this.index != null) visitor(this._childAtIndex());
    }
    get index() : number {
        return this._index;
    }
    _index : number;

    set index(value : number) {
        if (this._index != value) {
            this._index = value;
            this.markNeedsLayout();
        }
    }
    _childAtIndex() : lib4.RenderBox {
        /* TODO (AssertStatementImpl) : assert (index != null); */;
        let child : lib4.RenderBox = firstChild;
        let i : number = 0;
        while (child != null && i < this.index){
            let childParentData : StackParentData = child.parentData;
            child = childParentData.nextSibling;
            i += 1;
        }
        /* TODO (AssertStatementImpl) : assert (i == index); */;
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        return child;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestChildren(result : lib6.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        if (op(Op.EQUALS,firstChild,null) || this.index == null) return false;
        /* TODO (AssertStatementImpl) : assert (position != null); */;
        let child : lib4.RenderBox = this._childAtIndex();
        let childParentData : StackParentData = child.parentData;
        return child.hitTest(result,{
            position : op(Op.MINUS,position,childParentData.offset)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paintStack(context : lib7.PaintingContext,offset : any) : any {
        if (op(Op.EQUALS,firstChild,null) || this.index == null) return;
        let child : lib4.RenderBox = this._childAtIndex();
        let childParentData : StackParentData = child.parentData;
        context.paintChild(child,op(Op.PLUS,childParentData.offset,offset));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib8.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib8.IntProperty('index',this.index));
    }
}

export class properties {
    static set alignment(value : lib5.AlignmentGeometry) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,properties._alignment,value)) return;
        properties._alignment = value;
        _markNeedResolution();
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

    private static __$_resolvedAlignment : lib5.Alignment;
    static get _resolvedAlignment() : lib5.Alignment { 
        return this.__$_resolvedAlignment;
    }
    static set _resolvedAlignment(__$value : lib5.Alignment)  { 
        this.__$_resolvedAlignment = __$value;
    }

    static get alignment() : lib5.AlignmentGeometry {
        return properties._alignment;
    }
    private static __$_alignment : lib5.AlignmentGeometry;
    static get _alignment() : lib5.AlignmentGeometry { 
        return this.__$_alignment;
    }
    static set _alignment(__$value : lib5.AlignmentGeometry)  { 
        this.__$_alignment = __$value;
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
    static get fit() : StackFit {
        return properties._fit;
    }
    private static __$_fit : StackFit;
    static get _fit() : StackFit { 
        return this.__$_fit;
    }
    static set _fit(__$value : StackFit)  { 
        this.__$_fit = __$value;
    }

    static set fit(value : StackFit) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (properties._fit != value) {
            properties._fit = value;
            markNeedsLayout();
        }
    }
    static get overflow() : Overflow {
        return properties._overflow;
    }
    private static __$_overflow : Overflow;
    static get _overflow() : Overflow { 
        return this.__$_overflow;
    }
    static set _overflow(__$value : Overflow)  { 
        this.__$_overflow = __$value;
    }

    static set overflow(value : Overflow) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (properties._overflow != value) {
            properties._overflow = value;
            markNeedsPaint();
        }
    }
}
