/** Library asset:datahedgehog_monitor/lib/lib/widgets/single_child_scroll_view.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib7 from "./scroll_physics";
import * as lib8 from "./scroll_controller";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/gestures/recognizer";
import * as lib10 from "./basic";
import * as lib11 from "./primary_scroll_controller";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/rendering/viewport_offset";
import * as lib13 from "./scrollable";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/rendering/viewport";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/rendering/object";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/rendering/sliver_multi_box_adaptor";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/rendering/view";
import * as math from "@dart2ts/dart/math";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib20 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/painting/matrix_utils";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/animation/curves";

export var showOnScreen : (_namedArguments? : {descendant? : lib15.RenderObject,rect? : any,duration? : core.DartDuration,curve? : lib23.Curve}) => any = (_namedArguments? : {descendant? : lib15.RenderObject,rect? : any,duration? : core.DartDuration,curve? : lib23.Curve}) : any =>  {
    let {descendant,rect,duration,curve} = Object.assign({
        "duration" : core.DartDuration.zero,
        "curve" : lib23.Curves.ease}, _namedArguments );
    if (!properties.offset.allowImplicitScrolling) {
        return super.showOnScreen({
            descendant : descendant,rect : rect,duration : duration,curve : curve});
    }
    let newRect : any = lib14.RenderViewportBase.showInViewport({
        descendant : descendant,viewport : this,offset : properties.offset,rect : rect,duration : duration,curve : curve});
    super.showOnScreen({
        rect : newRect,duration : duration,curve : curve});
};
export var getOffsetToReveal : (target : lib15.RenderObject,alignment : double,_namedArguments? : {rect? : any}) => lib14.RevealedOffset = (target : lib15.RenderObject,alignment : double,_namedArguments? : {rect? : any}) : lib14.RevealedOffset =>  {
    let {rect} = Object.assign({
    }, _namedArguments );
    rect = ( rect ) || ( target.paintBounds );
    if (isNot(target, any)) return lib14.RevealedOffset({
        offset : properties.offset.pixels,rect : rect});
    let targetBox : any = target;
    let transform : lib20.Matrix4 = targetBox.getTransformTo(this);
    let bounds : any = lib22.MatrixUtils.transformRect(transform,rect);
    let contentSize : any = child.size;
    let leadingScrollOffset : double;
    let targetMainAxisExtent : double;
    let mainAxisExtent : double;
    /* TODO (AssertStatementImpl) : assert (axisDirection != null); */;
    switch (properties.axisDirection) {
        case lib5.AxisDirection.up:
            mainAxisExtent = lib17.properties.size.height;
            leadingScrollOffset = op(Op.MINUS,contentSize.height,bounds.bottom);
            targetMainAxisExtent = bounds.height;
            break;
        case lib5.AxisDirection.right:
            mainAxisExtent = lib17.properties.size.width;
            leadingScrollOffset = bounds.left;
            targetMainAxisExtent = bounds.width;
            break;
        case lib5.AxisDirection.down:
            mainAxisExtent = lib17.properties.size.height;
            leadingScrollOffset = bounds.top;
            targetMainAxisExtent = bounds.height;
            break;
        case lib5.AxisDirection.left:
            mainAxisExtent = lib17.properties.size.width;
            leadingScrollOffset = op(Op.MINUS,contentSize.width,bounds.right);
            targetMainAxisExtent = bounds.width;
            break;
    }
    let targetOffset : double = leadingScrollOffset - (mainAxisExtent - targetMainAxisExtent) * alignment;
    let targetRect : any = bounds.shift(_paintOffsetForPosition(targetOffset));
    return lib14.RevealedOffset({
        offset : targetOffset,rect : targetRect});
};
export var hitTestChildren : (result : lib21.HitTestResult,_namedArguments? : {position? : any}) => boolean = (result : lib21.HitTestResult,_namedArguments? : {position? : any}) : boolean =>  {
    let {position} = Object.assign({
    }, _namedArguments );
    if (child != null) {
        let transformed : any = op(Op.PLUS,position,op(Op.NEG,properties._paintOffset));
        return child.hitTest(result,{
            position : transformed});
    }
    return false;
};
export var _hasScrolled : () => any = () : any =>  {
    markNeedsPaint();
    markNeedsSemanticsUpdate();
};
export var setupParentData : (child : lib15.RenderObject) => any = (child : lib15.RenderObject) : any =>  {
    if (isNot(child.parentData, any)) child.parentData = lib16.ParentData();
};
export var attach : (owner : lib15.PipelineOwner) => any = (owner : lib15.PipelineOwner) : any =>  {
    super.attach(owner);
    properties._offset.addListener(_hasScrolled);
};
export var detach : () => any = () : any =>  {
    properties._offset.removeListener(_hasScrolled);
    super.detach();
};
export var _getInnerConstraints : (constraints : lib19.BoxConstraints) => lib19.BoxConstraints = (constraints : lib19.BoxConstraints) : lib19.BoxConstraints =>  {
    switch (properties.axis) {
        case lib5.Axis.horizontal:
            return constraints.heightConstraints();
        case lib5.Axis.vertical:
            return constraints.widthConstraints();
    }
    return null;
};
export var computeMinIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    if (child != null) return child.getMinIntrinsicWidth(height);
    return 0.0;
};
export var computeMaxIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    if (child != null) return child.getMaxIntrinsicWidth(height);
    return 0.0;
};
export var describeSemanticsClip : (child : lib15.RenderObject) => any = (child : lib15.RenderObject) : any =>  {
    /* TODO (AssertStatementImpl) : assert (axis != null); */;
    switch (properties.axis) {
        case lib5.Axis.vertical:
            return Rect.fromLTRB(lib17.properties.semanticBounds.left,op(Op.MINUS,lib17.properties.semanticBounds.top,properties.cacheExtent),lib17.properties.semanticBounds.right,op(Op.PLUS,lib17.properties.semanticBounds.bottom,properties.cacheExtent));
        case lib5.Axis.horizontal:
            return Rect.fromLTRB(op(Op.MINUS,lib17.properties.semanticBounds.left,properties.cacheExtent),lib17.properties.semanticBounds.top,op(Op.PLUS,lib17.properties.semanticBounds.right,properties.cacheExtent),lib17.properties.semanticBounds.bottom);
    }
    return null;
};
export var computeMaxIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    if (child != null) return child.getMaxIntrinsicHeight(width);
    return 0.0;
};
export var performLayout : () => any = () : any =>  {
    if (op(Op.EQUALS,child,null)) {
        lib17.properties.size = constraints.smallest;
    }else {
        child.layout(_getInnerConstraints(constraints),{
            parentUsesSize : true});
        lib17.properties.size = constraints.constrain(child.size);
    }
    properties.offset.applyViewportDimension(properties._viewportExtent);
    properties.offset.applyContentDimensions(properties._minScrollExtent,properties._maxScrollExtent);
};
export var _paintOffsetForPosition : (position : double) => any = (position : double) : any =>  {
    /* TODO (AssertStatementImpl) : assert (axisDirection != null); */;
    switch (properties.axisDirection) {
        case lib5.AxisDirection.up:
            return Offset(0.0,position - child.size.height + lib17.properties.size.height);
        case lib5.AxisDirection.down:
            return Offset(0.0,-position);
        case lib5.AxisDirection.left:
            return Offset(position - child.size.width + lib17.properties.size.width,0.0);
        case lib5.AxisDirection.right:
            return Offset(-position,0.0);
    }
    return null;
};
export var _shouldClipAtPaintOffset : (paintOffset : any) => boolean = (paintOffset : any) : boolean =>  {
    /* TODO (AssertStatementImpl) : assert (child != null); */;
    return op(Op.LT,paintOffset,Offset.zero) || !(op(Op.BITAND,Offset.zero,lib17.properties.size)).contains((op(Op.BITAND,paintOffset,child.size)).bottomRight);
};
export var paint : (context : lib15.PaintingContext,offset : any) => any = (context : lib15.PaintingContext,offset : any) : any =>  {
    if (child != null) {
        let paintOffset : any = properties._paintOffset;
        var paintContents : (context : lib15.PaintingContext,offset : any) => any = (context : lib15.PaintingContext,offset : any) : any =>  {
            context.paintChild(child,op(Op.PLUS,offset,paintOffset));
        };
        if (_shouldClipAtPaintOffset(paintOffset)) {
            context.pushClipRect(needsCompositing,offset,op(Op.BITAND,Offset.zero,lib17.properties.size),paintContents);
        }else {
            paintContents(context,offset);
        }
    }
};
export var applyPaintTransform : (child : any,transform : lib20.Matrix4) => any = (child : any,transform : lib20.Matrix4) : any =>  {
    let paintOffset : any = properties._paintOffset;
    transform.translate(paintOffset.dx,paintOffset.dy);
};
export var describeApproximatePaintClip : (child : lib15.RenderObject) => any = (child : lib15.RenderObject) : any =>  {
    if (child != null && _shouldClipAtPaintOffset(properties._paintOffset)) return op(Op.BITAND,Offset.zero,lib17.properties.size);
    return null;
};
export var computeMinIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    if (child != null) return child.getMinIntrinsicHeight(width);
    return 0.0;
};
export namespace _RenderSingleChildViewport {
    export type Constructors = '_RenderSingleChildViewport';
    export type Interface = Omit<_RenderSingleChildViewport, Constructors>;
}
@DartClass
@Implements(lib14.RenderAbstractViewport)
@With(any)
export class _RenderSingleChildViewport extends any implements lib14.RenderAbstractViewport.Interface,any.Interface {
    constructor(_namedArguments? : {axisDirection? : lib5.AxisDirection,offset? : lib12.ViewportOffset,cacheExtent? : double,child? : any}) {
    }
    @defaultConstructor
    _RenderSingleChildViewport(_namedArguments? : {axisDirection? : lib5.AxisDirection,offset? : lib12.ViewportOffset,cacheExtent? : double,child? : any}) {
        let {axisDirection,offset,cacheExtent,child} = Object.assign({
            "axisDirection" : lib5.AxisDirection.down,
            "cacheExtent" : lib14.RenderAbstractViewport.defaultCacheExtent}, _namedArguments );
        this._axisDirection = properties.axisDirection;
        this._offset = properties.offset;
        this._cacheExtent = properties.cacheExtent;
        this.child = this.child;
        this.assert = assert;
    }
     : any;

     : any;

     : any;

    _axisDirection;
    _offset;
    _cacheExtent;

    child;

}

export namespace _SingleChildViewport {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | '_SingleChildViewport';
    export type Interface = Omit<_SingleChildViewport, Constructors>;
}
@DartClass
export class _SingleChildViewport extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,axisDirection? : lib5.AxisDirection,offset? : lib12.ViewportOffset,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SingleChildViewport(_namedArguments? : {key? : lib4.Key,axisDirection? : lib5.AxisDirection,offset? : lib12.ViewportOffset,child? : lib3.Widget}) {
        let {key,axisDirection,offset,child} = Object.assign({
            "axisDirection" : lib5.AxisDirection.down}, _namedArguments );
        this.assert = assert;
        this.axisDirection = axisDirection;
        this.offset = offset;
    }
     : any;

     : any;

    key;
    child;

     : any;

    axisDirection : lib5.AxisDirection;

    offset : lib12.ViewportOffset;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : _RenderSingleChildViewport {
        return _RenderSingleChildViewport({
            axisDirection : this.axisDirection,offset : this.offset});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : _RenderSingleChildViewport) : any {
        ((_) : _RenderSingleChildViewport =>  {
            {
                _.axisDirection = this.axisDirection;
                _.offset = this.offset;
                return _;
            }
        })(renderObject);
    }
}

export namespace SingleChildScrollView {
    export type Constructors = lib3.StatelessWidget.Constructors | 'SingleChildScrollView';
    export type Interface = Omit<SingleChildScrollView, Constructors>;
}
@DartClass
export class SingleChildScrollView extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,padding? : lib6.EdgeInsetsGeometry,primary? : boolean,physics? : lib7.ScrollPhysics,controller? : lib8.ScrollController,child? : lib3.Widget,dragStartBehavior? : lib9.DragStartBehavior}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SingleChildScrollView(_namedArguments? : {key? : lib4.Key,scrollDirection? : lib5.Axis,reverse? : boolean,padding? : lib6.EdgeInsetsGeometry,primary? : boolean,physics? : lib7.ScrollPhysics,controller? : lib8.ScrollController,child? : lib3.Widget,dragStartBehavior? : lib9.DragStartBehavior}) {
        let {key,scrollDirection,reverse,padding,primary,physics,controller,child,dragStartBehavior} = Object.assign({
            "scrollDirection" : lib5.Axis.vertical,
            "reverse" : false,
            "dragStartBehavior" : lib9.DragStartBehavior.down}, _namedArguments );
        this.primary = (this.primary || op(Op.EQUALS,this.controller,null) && core.identical(this.scrollDirection,lib5.Axis.vertical));
        this.assert = assert;
        this.scrollDirection = scrollDirection;
        this.reverse = reverse;
        this.padding = padding;
        this.physics = physics;
        this.controller = controller;
        this.child = child;
        this.dragStartBehavior = dragStartBehavior;
    }
     : any;

     : any;

    [null](controller : any, : any) {
    }
     : any;

    primary;
    super;

     : any;

     : any;

    scrollDirection : lib5.Axis;

    reverse : boolean;

    padding : lib6.EdgeInsetsGeometry;

    controller : lib8.ScrollController;

    primary : boolean;

    physics : lib7.ScrollPhysics;

    child : lib3.Widget;

    dragStartBehavior : lib9.DragStartBehavior;

    _getDirection(context : lib3.BuildContext) : lib5.AxisDirection {
        return lib10.getAxisDirectionFromAxisReverseAndDirectionality(context,this.scrollDirection,this.reverse);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let axisDirection : lib5.AxisDirection = this._getDirection(context);
        let contents : lib3.Widget = this.child;
        if (this.padding != null) contents = lib10.Padding({
            padding : this.padding,child : contents});
        let scrollController : lib8.ScrollController = this.primary ? lib11.PrimaryScrollController.of(context) : this.controller;
        let scrollable : lib13.Scrollable = lib13.Scrollable({
            dragStartBehavior : this.dragStartBehavior,axisDirection : axisDirection,controller : scrollController,physics : this.physics,viewportBuilder : (context : lib3.BuildContext,offset : lib12.ViewportOffset) =>  {
                return _SingleChildViewport({
                    axisDirection : axisDirection,offset : offset,child : contents});
            }});
        return this.primary && scrollController != null ? lib11.PrimaryScrollController.none({
            child : scrollable}) : scrollable;
    }
}

export class properties {
    static set cacheExtent(value : double) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (value == properties._cacheExtent) return;
        properties._cacheExtent = value;
        markNeedsLayout();
    }
    static get axisDirection() : lib5.AxisDirection {
        return properties._axisDirection;
    }
    private static __$_axisDirection : lib5.AxisDirection;
    static get _axisDirection() : lib5.AxisDirection { 
        return this.__$_axisDirection;
    }
    static set _axisDirection(__$value : lib5.AxisDirection)  { 
        this.__$_axisDirection = __$value;
    }

    static set axisDirection(value : lib5.AxisDirection) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,value,properties._axisDirection)) return;
        properties._axisDirection = value;
        markNeedsLayout();
    }
    static get axis() : lib5.Axis {
        return lib5.axisDirectionToAxis(properties.axisDirection);
    }
    static get offset() : lib12.ViewportOffset {
        return properties._offset;
    }
    private static __$_offset : lib12.ViewportOffset;
    static get _offset() : lib12.ViewportOffset { 
        return this.__$_offset;
    }
    static set _offset(__$value : lib12.ViewportOffset)  { 
        this.__$_offset = __$value;
    }

    static set offset(value : lib12.ViewportOffset) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,value,properties._offset)) return;
        if (attached) properties._offset.removeListener(_hasScrolled);
        properties._offset = value;
        if (attached) properties._offset.addListener(_hasScrolled);
        markNeedsLayout();
    }
    static get cacheExtent() : double {
        return properties._cacheExtent;
    }
    private static __$_cacheExtent : double;
    static get _cacheExtent() : double { 
        return this.__$_cacheExtent;
    }
    static set _cacheExtent(__$value : double)  { 
        this.__$_cacheExtent = __$value;
    }

    static get isRepaintBoundary() : boolean {
        return true;
    }
    static get _viewportExtent() : double {
        /* TODO (AssertStatementImpl) : assert (hasSize); */;
        switch (properties.axis) {
            case lib5.Axis.horizontal:
                return lib17.properties.size.width;
            case lib5.Axis.vertical:
                return lib17.properties.size.height;
        }
        return null;
    }
    static get _minScrollExtent() : double {
        /* TODO (AssertStatementImpl) : assert (hasSize); */;
        return 0.0;
    }
    static get _maxScrollExtent() : double {
        /* TODO (AssertStatementImpl) : assert (hasSize); */;
        if (op(Op.EQUALS,child,null)) return 0.0;
        switch (properties.axis) {
            case lib5.Axis.horizontal:
                return math.max(0.0,op(Op.MINUS,child.size.width,lib17.properties.size.width));
            case lib5.Axis.vertical:
                return math.max(0.0,op(Op.MINUS,child.size.height,lib17.properties.size.height));
        }
        return null;
    }
    static get _paintOffset() : any {
        return _paintOffsetForPosition(properties.offset.pixels);
    }
}
