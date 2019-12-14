/** Library asset:datahedgehog_monitor/lib/lib/rendering/object.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/painting/clip";
import * as lib4 from "./layer";
import * as lib5 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/matrix_utils";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/foundation/node";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/foundation/debug";
import * as developer from "@dart2ts/dart/developer";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/foundation/profile";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/semantics/semantics";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/foundation/assertions";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/semantics/semantics_event";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/gestures/events";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/animation/curves";

export var dispose : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (() {if (_owner == null) {throw FlutterError('SemanticsHandle has already been disposed.\n' 'Each SemanticsHandle should be disposed exactly once.');} return true;}()); */;
    if (properties._owner != null) {
        if (properties.listener != null) properties._owner.semanticsOwner.removeListener(properties.listener);
        properties._owner._didDisposeSemanticsHandle();
        properties._owner = null;
    }
};
export var RenderObjectWithChildMixin : <ChildType extends any>() => any = <ChildType extends any>() : any =>  {
};
export var RenderObject : () => any = () : any =>  {
    var debugValidateChild : (child : any) => boolean = (child : any) : boolean =>  {
        /* TODO (AssertStatementImpl) : assert (() {if (child is! ChildType) {throw FlutterError('A $runtimeType expected a child of type $ChildType but received a ' 'child of type ${child.runtimeType}.\n' 'RenderObjects expect specific types of children because they ' 'coordinate with their children during layout and paint. For ' 'example, a RenderSliver cannot be the child of a RenderBox because ' 'a RenderSliver does not understand the RenderBox layout protocol.\n' '\n' 'The $runtimeType that expected a $ChildType child was created by:\n' '  $debugCreator\n' '\n' 'The ${child.runtimeType} that did not match the expected child type ' 'was created by:\n' '  ${child.debugCreator}\n');} return true;}()); */;
        return true;
    };
    let _child : any;
    var child : () => any = () : any =>  {
        return _child;
    };
    var child : (value : any) => any = (value : any) =>  {
        if (_child != null) dropChild(_child);
        _child = value;
        if (_child != null) adoptChild(_child);
    };
    var attach : (owner : PipelineOwner) => any = (owner : PipelineOwner) : any =>  {
        super.attach(owner);
        if (_child != null) _child.attach(owner);
    };
    var detach : () => any = () : any =>  {
        super.detach();
        if (_child != null) _child.detach();
    };
    var redepthChildren : () => any = () : any =>  {
        if (_child != null) redepthChild(_child);
    };
    var visitChildren : (visitor : (child : any) => any) => any = (visitor : (child : any) => any) : any =>  {
        if (_child != null) visitor(_child);
    };
    var debugDescribeChildren : () => core.DartList<lib17.DiagnosticsNode> = () : core.DartList<lib17.DiagnosticsNode> =>  {
        return child != null ? new core.DartList.literal<lib17.DiagnosticsNode>(child.toDiagnosticsNode({
            name : 'child'})) : new core.DartList.literal<lib17.DiagnosticsNode>();
    };
};
export var ContainerParentDataMixin : <ChildType extends any>() => any = <ChildType extends any>() : any =>  {
};
export var ParentData : () => any = () : any =>  {
    let previousSibling : any;
    let nextSibling : any;
    var detach : () => any = () : any =>  {
        super.detach();
        if (previousSibling != null) {
            let previousSiblingParentData : any = previousSibling.parentData;
            /* TODO (AssertStatementImpl) : assert (previousSibling != this); */;
            /* TODO (AssertStatementImpl) : assert (previousSiblingParentData.nextSibling == this); */;
            previousSiblingParentData.nextSibling = nextSibling;
        }
        if (nextSibling != null) {
            let nextSiblingParentData : any = nextSibling.parentData;
            /* TODO (AssertStatementImpl) : assert (nextSibling != this); */;
            /* TODO (AssertStatementImpl) : assert (nextSiblingParentData.previousSibling == this); */;
            nextSiblingParentData.previousSibling = previousSibling;
        }
        previousSibling = null;
        nextSibling = null;
    };
};
export var ContainerRenderObjectMixin : <ChildType extends any,ParentDataType extends any>() => any = <ChildType extends any,ParentDataType extends any>() : any =>  {
};
export var RenderObject : () => any = () : any =>  {
    var _debugUltimatePreviousSiblingOf : (child : any,_namedArguments? : {equals? : any}) => boolean = (child : any,_namedArguments? : {equals? : any}) : boolean =>  {
        let {equals} = Object.assign({
        }, _namedArguments );
        let childParentData : any = child.parentData;
        while (childParentData.previousSibling != null){
            /* TODO (AssertStatementImpl) : assert (childParentData.previousSibling != child); */;
            child = childParentData.previousSibling;
            childParentData = child.parentData;
        }
        return op(Op.EQUALS,child,equals);
    };
    var _debugUltimateNextSiblingOf : (child : any,_namedArguments? : {equals? : any}) => boolean = (child : any,_namedArguments? : {equals? : any}) : boolean =>  {
        let {equals} = Object.assign({
        }, _namedArguments );
        let childParentData : any = child.parentData;
        while (childParentData.nextSibling != null){
            /* TODO (AssertStatementImpl) : assert (childParentData.nextSibling != child); */;
            child = childParentData.nextSibling;
            childParentData = child.parentData;
        }
        return op(Op.EQUALS,child,equals);
    };
    let _childCount : number = 0;
    var childCount : () => number = () : number =>  {
        return _childCount;
    };
    var debugValidateChild : (child : any) => boolean = (child : any) : boolean =>  {
        /* TODO (AssertStatementImpl) : assert (() {if (child is! ChildType) {throw FlutterError('A $runtimeType expected a child of type $ChildType but received a ' 'child of type ${child.runtimeType}.\n' 'RenderObjects expect specific types of children because they ' 'coordinate with their children during layout and paint. For ' 'example, a RenderSliver cannot be the child of a RenderBox because ' 'a RenderSliver does not understand the RenderBox layout protocol.\n' '\n' 'The $runtimeType that expected a $ChildType child was created by:\n' '  $debugCreator\n' '\n' 'The ${child.runtimeType} that did not match the expected child type ' 'was created by:\n' '  ${child.debugCreator}\n');} return true;}()); */;
        return true;
    };
    let _firstChild : any;
    let _lastChild : any;
    var _insertIntoChildList : (child : any,_namedArguments? : {after? : any}) => any = (child : any,_namedArguments? : {after? : any}) : any =>  {
        let {after} = Object.assign({
        }, _namedArguments );
        let childParentData : any = child.parentData;
        /* TODO (AssertStatementImpl) : assert (childParentData.nextSibling == null); */;
        /* TODO (AssertStatementImpl) : assert (childParentData.previousSibling == null); */;
        _childCount += 1;
        /* TODO (AssertStatementImpl) : assert (_childCount > 0); */;
        if (op(Op.EQUALS,after,null)) {
            childParentData.nextSibling = _firstChild;
            if (_firstChild != null) {
                let _firstChildParentData : any = _firstChild.parentData;
                _firstChildParentData.previousSibling = child;
            }
            _firstChild = child;
            _lastChild = ( _lastChild ) || ( child );
        }else {
            /* TODO (AssertStatementImpl) : assert (_firstChild != null); */;
            /* TODO (AssertStatementImpl) : assert (_lastChild != null); */;
            /* TODO (AssertStatementImpl) : assert (_debugUltimatePreviousSiblingOf(after, equals: _firstChild)); */;
            /* TODO (AssertStatementImpl) : assert (_debugUltimateNextSiblingOf(after, equals: _lastChild)); */;
            let afterParentData : any = after.parentData;
            if (op(Op.EQUALS,afterParentData.nextSibling,null)) {
                /* TODO (AssertStatementImpl) : assert (after == _lastChild); */;
                childParentData.previousSibling = after;
                afterParentData.nextSibling = child;
                _lastChild = child;
            }else {
                childParentData.nextSibling = afterParentData.nextSibling;
                childParentData.previousSibling = after;
                let childPreviousSiblingParentData : any = childParentData.previousSibling.parentData;
                let childNextSiblingParentData : any = childParentData.nextSibling.parentData;
                childPreviousSiblingParentData.nextSibling = child;
                childNextSiblingParentData.previousSibling = child;
                /* TODO (AssertStatementImpl) : assert (afterParentData.nextSibling == child); */;
            }
        }
    };
    var insert : (child : any,_namedArguments? : {after? : any}) => any = (child : any,_namedArguments? : {after? : any}) : any =>  {
        let {after} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (child != this, 'A RenderObject cannot be inserted into itself.'); */;
        /* TODO (AssertStatementImpl) : assert (after != this, 'A RenderObject cannot simultaneously be both the parent and the sibling of another RenderObject.'); */;
        /* TODO (AssertStatementImpl) : assert (child != after, 'A RenderObject cannot be inserted after itself.'); */;
        /* TODO (AssertStatementImpl) : assert (child != _firstChild); */;
        /* TODO (AssertStatementImpl) : assert (child != _lastChild); */;
        adoptChild(child);
        _insertIntoChildList(child,{
            after : after});
    };
    var add : (child : any) => any = (child : any) : any =>  {
        insert(child,{
            after : _lastChild});
    };
    var addAll : (children : core.DartList<any>) => any = (children : core.DartList<any>) : any =>  {
        ((_833_)=>(!!_833_)?_833_.forEach(add):null)(children);
    };
    var _removeFromChildList : (child : any) => any = (child : any) : any =>  {
        let childParentData : any = child.parentData;
        /* TODO (AssertStatementImpl) : assert (_debugUltimatePreviousSiblingOf(child, equals: _firstChild)); */;
        /* TODO (AssertStatementImpl) : assert (_debugUltimateNextSiblingOf(child, equals: _lastChild)); */;
        /* TODO (AssertStatementImpl) : assert (_childCount >= 0); */;
        if (op(Op.EQUALS,childParentData.previousSibling,null)) {
            /* TODO (AssertStatementImpl) : assert (_firstChild == child); */;
            _firstChild = childParentData.nextSibling;
        }else {
            let childPreviousSiblingParentData : any = childParentData.previousSibling.parentData;
            childPreviousSiblingParentData.nextSibling = childParentData.nextSibling;
        }
        if (op(Op.EQUALS,childParentData.nextSibling,null)) {
            /* TODO (AssertStatementImpl) : assert (_lastChild == child); */;
            _lastChild = childParentData.previousSibling;
        }else {
            let childNextSiblingParentData : any = childParentData.nextSibling.parentData;
            childNextSiblingParentData.previousSibling = childParentData.previousSibling;
        }
        childParentData.previousSibling = null;
        childParentData.nextSibling = null;
        _childCount -= 1;
    };
    var remove : (child : any) => any = (child : any) : any =>  {
        _removeFromChildList(child);
        dropChild(child);
    };
    var removeAll : () => any = () : any =>  {
        let child : any = _firstChild;
        while (child != null){
            let childParentData : any = child.parentData;
            let next : any = childParentData.nextSibling;
            childParentData.previousSibling = null;
            childParentData.nextSibling = null;
            dropChild(child);
            child = next;
        }
        _firstChild = null;
        _lastChild = null;
        _childCount = 0;
    };
    var move : (child : any,_namedArguments? : {after? : any}) => any = (child : any,_namedArguments? : {after? : any}) : any =>  {
        let {after} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (child != this); */;
        /* TODO (AssertStatementImpl) : assert (after != this); */;
        /* TODO (AssertStatementImpl) : assert (child != after); */;
        /* TODO (AssertStatementImpl) : assert (child.parent == this); */;
        let childParentData : any = child.parentData;
        if (op(Op.EQUALS,childParentData.previousSibling,after)) return;
        _removeFromChildList(child);
        _insertIntoChildList(child,{
            after : after});
        markNeedsLayout();
    };
    var attach : (owner : PipelineOwner) => any = (owner : PipelineOwner) : any =>  {
        super.attach(owner);
        let child : any = _firstChild;
        while (child != null){
            child.attach(owner);
            let childParentData : any = child.parentData;
            child = childParentData.nextSibling;
        }
    };
    var detach : () => any = () : any =>  {
        super.detach();
        let child : any = _firstChild;
        while (child != null){
            child.detach();
            let childParentData : any = child.parentData;
            child = childParentData.nextSibling;
        }
    };
    var redepthChildren : () => any = () : any =>  {
        let child : any = _firstChild;
        while (child != null){
            redepthChild(child);
            let childParentData : any = child.parentData;
            child = childParentData.nextSibling;
        }
    };
    var visitChildren : (visitor : (child : any) => any) => any = (visitor : (child : any) => any) : any =>  {
        let child : any = _firstChild;
        while (child != null){
            visitor(child);
            let childParentData : any = child.parentData;
            child = childParentData.nextSibling;
        }
    };
    var firstChild : () => any = () : any =>  {
        return _firstChild;
    };
    var lastChild : () => any = () : any =>  {
        return _lastChild;
    };
    var childBefore : (child : any) => any = (child : any) : any =>  {
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        /* TODO (AssertStatementImpl) : assert (child.parent == this); */;
        let childParentData : any = child.parentData;
        return childParentData.previousSibling;
    };
    var childAfter : (child : any) => any = (child : any) : any =>  {
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        /* TODO (AssertStatementImpl) : assert (child.parent == this); */;
        let childParentData : any = child.parentData;
        return childParentData.nextSibling;
    };
    var debugDescribeChildren : () => core.DartList<lib17.DiagnosticsNode> = () : core.DartList<lib17.DiagnosticsNode> =>  {
        let children : core.DartList<lib17.DiagnosticsNode> = new core.DartList.literal<lib17.DiagnosticsNode>();
        if (firstChild != null) {
            let child : any = firstChild;
            let count : number = 1;
            while (true){
                children.add(child.toDiagnosticsNode({
                    name : `child ${count}`}));
                if (op(Op.EQUALS,child,lastChild)) break;
                count += 1;
                let childParentData : any = child.parentData;
                child = childParentData.nextSibling;
            }
        }
        return children;
    };
};
export namespace ParentData {
    export type Constructors = 'ParentData';
    export type Interface = Omit<ParentData, Constructors>;
}
@DartClass
export class ParentData {
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    detach() : any {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return '<none>';
    }
    constructor() {
    }
    @defaultConstructor
    ParentData() {
    }
}

export namespace PaintingContext {
    export type Constructors = lib3.ClipContext.Constructors | 'PaintingContext';
    export type Interface = Omit<PaintingContext, Constructors>;
}
@DartClass
export class PaintingContext extends lib3.ClipContext {
    constructor(_containerLayer : lib4.ContainerLayer,estimatedBounds : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PaintingContext(_containerLayer : lib4.ContainerLayer,estimatedBounds : any) {
        this.assert = assert;
        this._containerLayer = _containerLayer;
        this.estimatedBounds = estimatedBounds;
    }
     : any;

     : any;

    _containerLayer : lib4.ContainerLayer;

    estimatedBounds : any;

    static repaintCompositedChild(child : any,_namedArguments? : {debugAlsoPaintedParent? : boolean}) : any {
        let {debugAlsoPaintedParent} = Object.assign({
            "debugAlsoPaintedParent" : false}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (child._needsPaint); */;
        PaintingContext._repaintCompositedChild(child,{
            debugAlsoPaintedParent : debugAlsoPaintedParent});
    }
    static _repaintCompositedChild(child : any,_namedArguments? : {debugAlsoPaintedParent? : boolean,childContext? : PaintingContext}) : any {
        let {debugAlsoPaintedParent,childContext} = Object.assign({
            "debugAlsoPaintedParent" : false}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (child.isRepaintBoundary); */;
        /* TODO (AssertStatementImpl) : assert (() {child.debugRegisterRepaintBoundaryPaint(includedParent: debugAlsoPaintedParent, includedChild: true); return true;}()); */;
        if (op(Op.EQUALS,child._layer,null)) {
            /* TODO (AssertStatementImpl) : assert (debugAlsoPaintedParent); */;
            child._layer = lib4.OffsetLayer();
        }else {
            /* TODO (AssertStatementImpl) : assert (debugAlsoPaintedParent || child._layer.attached); */;
            child._layer.removeAllChildren();
        }
        /* TODO (AssertStatementImpl) : assert (() {child._layer.debugCreator = child.debugCreator ?? child.runtimeType; return true;}()); */;
        childContext = ( childContext ) || ( PaintingContext(child._layer,child.paintBounds) );
        child._paintWithContext(childContext,Offset.zero);
        childContext.stopRecordingIfNeeded();
    }
    static debugInstrumentRepaintCompositedChild(child : any,_namedArguments? : {debugAlsoPaintedParent? : boolean,customContext? : PaintingContext}) : any {
        let {debugAlsoPaintedParent,customContext} = Object.assign({
            "debugAlsoPaintedParent" : false}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (() {_repaintCompositedChild(child, debugAlsoPaintedParent: debugAlsoPaintedParent, childContext: customContext); return true;}()); */;
    }
    paintChild(child : any,offset : any) : any {
        /* TODO (AssertStatementImpl) : assert (() {if (debugProfilePaintsEnabled) Timeline.startSync('${child.runtimeType}', arguments: timelineWhitelistArguments); if (debugOnProfilePaint != null) debugOnProfilePaint(child); return true;}()); */;
        if (child.isRepaintBoundary) {
            this.stopRecordingIfNeeded();
            this._compositeChild(child,offset);
        }else {
            child._paintWithContext(this,offset);
        }
        /* TODO (AssertStatementImpl) : assert (() {if (debugProfilePaintsEnabled) Timeline.finishSync(); return true;}()); */;
    }
    _compositeChild(child : any,offset : any) : any {
        /* TODO (AssertStatementImpl) : assert (!_isRecording); */;
        /* TODO (AssertStatementImpl) : assert (child.isRepaintBoundary); */;
        /* TODO (AssertStatementImpl) : assert (_canvas == null || _canvas.getSaveCount() == 1); */;
        if (child._needsPaint) {
            PaintingContext.repaintCompositedChild(child,{
                debugAlsoPaintedParent : true});
        }else {
            /* TODO (AssertStatementImpl) : assert (child._layer != null); */;
            /* TODO (AssertStatementImpl) : assert (() {child.debugRegisterRepaintBoundaryPaint(includedParent: true, includedChild: false); child._layer.debugCreator = child.debugCreator ?? child; return true;}()); */;
        }
        /* TODO (AssertStatementImpl) : assert (child._layer != null); */;
        child._layer.offset = offset;
        this.appendLayer(child._layer);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    appendLayer(layer : lib4.Layer) : any {
        /* TODO (AssertStatementImpl) : assert (!_isRecording); */;
        layer.remove();
        this._containerLayer.append(layer);
    }
    get _isRecording() : boolean {
        let hasCanvas : boolean = this._canvas != null;
        /* TODO (AssertStatementImpl) : assert (() {if (hasCanvas) {assert (_currentLayer != null); assert (_recorder != null); assert (_canvas != null);} else {assert (_currentLayer == null); assert (_recorder == null); assert (_canvas == null);} return true;}()); */;
        return hasCanvas;
    }
    _currentLayer : lib4.PictureLayer;

    _recorder : any;

    _canvas : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get canvas() : any {
        if (op(Op.EQUALS,this._canvas,null)) this._startRecording();
        return this._canvas;
    }
    _startRecording() : any {
        /* TODO (AssertStatementImpl) : assert (!_isRecording); */;
        this._currentLayer = lib4.PictureLayer(this.estimatedBounds);
        this._recorder = ui.PictureRecorder();
        this._canvas = Canvas(this._recorder);
        this._containerLayer.append(this._currentLayer);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    stopRecordingIfNeeded() : any {
        if (!this._isRecording) return;
        /* TODO (AssertStatementImpl) : assert (() {if (debugRepaintRainbowEnabled) {final Paint paint = Paint()..style = PaintingStyle.stroke..strokeWidth = 6.0..color = debugCurrentRepaintColor.toColor(); canvas.drawRect(estimatedBounds.deflate(3.0), paint);} if (debugPaintLayerBordersEnabled) {final Paint paint = Paint()..style = PaintingStyle.stroke..strokeWidth = 1.0..color = const Color(0xFFFF9800); canvas.drawRect(estimatedBounds, paint);} return true;}()); */;
        this._currentLayer.picture = this._recorder.endRecording();
        this._currentLayer = null;
        this._recorder = null;
        this._canvas = null;
    }
    setIsComplexHint() : any {
        ((t)=>(!!t)?t.isComplexHint:null)(this._currentLayer) = true;
    }
    setWillChangeHint() : any {
        ((t)=>(!!t)?t.willChangeHint:null)(this._currentLayer) = true;
    }
    addLayer(layer : lib4.Layer) : any {
        this.stopRecordingIfNeeded();
        this.appendLayer(layer);
    }
    pushLayer(childLayer : lib4.ContainerLayer,painter : (context : PaintingContext,offset : any) => any,offset : any,_namedArguments? : {childPaintBounds? : any}) : any {
        let {childPaintBounds} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (!childLayer.attached); */;
        /* TODO (AssertStatementImpl) : assert (childLayer.parent == null); */;
        /* TODO (AssertStatementImpl) : assert (painter != null); */;
        this.stopRecordingIfNeeded();
        this.appendLayer(childLayer);
        let childContext : PaintingContext = this.createChildContext(childLayer,(childPaintBounds || this.estimatedBounds));
        painter(childContext,offset);
        childContext.stopRecordingIfNeeded();
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    createChildContext(childLayer : lib4.ContainerLayer,bounds : any) : PaintingContext {
        return PaintingContext(childLayer,bounds);
    }
    pushClipRect(needsCompositing : boolean,offset : any,clipRect : any,painter : (context : PaintingContext,offset : any) => any,_namedArguments? : {clipBehavior? : any}) : any {
        let {clipBehavior} = Object.assign({
            "clipBehavior" : Clip.hardEdge}, _namedArguments );
        let offsetClipRect : any = clipRect.shift(offset);
        if (needsCompositing) {
            this.pushLayer(lib4.ClipRectLayer({
                clipRect : offsetClipRect,clipBehavior : clipBehavior}),painter,offset,{
                childPaintBounds : offsetClipRect});
        }else {
            this.clipRectAndPaint(offsetClipRect,clipBehavior,offsetClipRect,() =>  {
                return painter(this,offset);
            });
        }
    }
    pushClipRRect(needsCompositing : boolean,offset : any,bounds : any,clipRRect : any,painter : (context : PaintingContext,offset : any) => any,_namedArguments? : {clipBehavior? : any}) : any {
        let {clipBehavior} = Object.assign({
            "clipBehavior" : Clip.antiAlias}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (clipBehavior != null); */;
        let offsetBounds : any = bounds.shift(offset);
        let offsetClipRRect : any = clipRRect.shift(offset);
        if (needsCompositing) {
            this.pushLayer(lib4.ClipRRectLayer({
                clipRRect : offsetClipRRect,clipBehavior : clipBehavior}),painter,offset,{
                childPaintBounds : offsetBounds});
        }else {
            this.clipRRectAndPaint(offsetClipRRect,clipBehavior,offsetBounds,() =>  {
                return painter(this,offset);
            });
        }
    }
    pushClipPath(needsCompositing : boolean,offset : any,bounds : any,clipPath : any,painter : (context : PaintingContext,offset : any) => any,_namedArguments? : {clipBehavior? : any}) : any {
        let {clipBehavior} = Object.assign({
            "clipBehavior" : Clip.antiAlias}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (clipBehavior != null); */;
        let offsetBounds : any = bounds.shift(offset);
        let offsetClipPath : any = clipPath.shift(offset);
        if (needsCompositing) {
            this.pushLayer(lib4.ClipPathLayer({
                clipPath : offsetClipPath,clipBehavior : clipBehavior}),painter,offset,{
                childPaintBounds : offsetBounds});
        }else {
            this.clipPathAndPaint(offsetClipPath,clipBehavior,offsetBounds,() =>  {
                return painter(this,offset);
            });
        }
    }
    pushTransform(needsCompositing : boolean,offset : any,transform : lib5.Matrix4,painter : (context : PaintingContext,offset : any) => any) : any {
        let effectiveTransform : lib5.Matrix4 = ((_) : any =>  {
            {
                multiply(transform);
                translate(op(Op.NEG,offset.dx),op(Op.NEG,offset.dy));
                return _;
            }
        })(lib5.Matrix4.translationValues(offset.dx,offset.dy,0.0));
        if (needsCompositing) {
            this.pushLayer(lib4.TransformLayer({
                transform : effectiveTransform}),painter,offset,{
                childPaintBounds : lib6.MatrixUtils.inverseTransformRect(effectiveTransform,this.estimatedBounds)});
        }else {
            ((_) : any =>  {
                {
                    save();
                    transform(effectiveTransform.storage);
                    return _;
                }
            })(this.canvas);
            painter(this,offset);
            ((_) : any =>  {
                {
                    restore();
                    return _;
                }
            })(this.canvas);
        }
    }
    pushOpacity(offset : any,alpha : number,painter : (context : PaintingContext,offset : any) => any) : any {
        this.pushLayer(lib4.OpacityLayer({
            alpha : alpha,offset : offset}),painter,Offset.zero);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}#${this.hashCode}(layer: ${this._containerLayer}, canvas bounds: ${this.estimatedBounds})`;
    }
}

export namespace Constraints {
    export type Constructors = 'Constraints';
    export type Interface = Omit<Constraints, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class Constraints {
    constructor() {
    }
    @defaultConstructor
    Constraints() {
    }
    @AbstractProperty
    get isTight() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isNormalized() : boolean{ throw 'abstract'}
    debugAssertIsValid(_namedArguments? : {isAppliedConstraint? : boolean,informationCollector? : (information : core.DartStringBuffer) => any}) : boolean {
        let {isAppliedConstraint,informationCollector} = Object.assign({
            "isAppliedConstraint" : false}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (isNormalized); */;
        return this.isNormalized;
    }
}

export namespace SemanticsHandle {
    export type Constructors = '_';
    export type Interface = Omit<SemanticsHandle, Constructors>;
}
@DartClass
export class SemanticsHandle {
    @namedConstructor
    _(_owner : any,listener : any) {
        this.assert = assert;
        this._owner = _owner;
        this.listener = listener;
    }
    static _ : new(_owner : any,listener : any) => SemanticsHandle;

     : any;

     : any;

     : any;

    @Abstract
    addListener(listener : any){ throw 'abstract'}
}

export namespace PipelineOwner {
    export type Constructors = 'PipelineOwner';
    export type Interface = Omit<PipelineOwner, Constructors>;
}
@DartClass
export class PipelineOwner {
    constructor(_namedArguments? : {onNeedVisualUpdate? : any,onSemanticsOwnerCreated? : any,onSemanticsOwnerDisposed? : any}) {
    }
    @defaultConstructor
    PipelineOwner(_namedArguments? : {onNeedVisualUpdate? : any,onSemanticsOwnerCreated? : any,onSemanticsOwnerDisposed? : any}) {
        let {onNeedVisualUpdate,onSemanticsOwnerCreated,onSemanticsOwnerDisposed} = Object.assign({
        }, _namedArguments );
        this._nodesNeedingLayout = new core.DartList.literal<any>();
        this._debugDoingLayout = false;
        this._debugAllowMutationsToDirtySubtrees = false;
        this._nodesNeedingCompositingBitsUpdate = new core.DartList.literal<any>();
        this._nodesNeedingPaint = new core.DartList.literal<any>();
        this._debugDoingPaint = false;
        this._outstandingSemanticsHandles = 0;
        this._debugDoingSemantics = false;
        this._nodesNeedingSemantics = core.DartSet();
        this.onNeedVisualUpdate = onNeedVisualUpdate;
        this.onSemanticsOwnerCreated = onSemanticsOwnerCreated;
        this.onSemanticsOwnerDisposed = onSemanticsOwnerDisposed;
    }
    onNeedVisualUpdate : any;

    onSemanticsOwnerCreated : any;

    onSemanticsOwnerDisposed : any;

    requestVisualUpdate() : any {
        if (this.onNeedVisualUpdate != null) this.onNeedVisualUpdate();
    }
    get rootNode() : lib7.AbstractNode {
        return this._rootNode;
    }
    _rootNode : lib7.AbstractNode;

    set rootNode(value : lib7.AbstractNode) {
        if (op(Op.EQUALS,this._rootNode,value)) return;
        ((_831_)=>(!!_831_)?_831_.detach():null)(this._rootNode);
        this._rootNode = value;
        ((_832_)=>(!!_832_)?_832_.attach(this):null)(this._rootNode);
    }
    _nodesNeedingLayout : core.DartList<any>;

    get debugDoingLayout() : boolean {
        return this._debugDoingLayout;
    }
    _debugDoingLayout : boolean;

    flushLayout() : any {
        lib10.profile(() =>  {
            developer.Timeline.startSync('Layout',{
                arguments : lib8.properties.timelineWhitelistArguments});
        });
        /* TODO (AssertStatementImpl) : assert (() {_debugDoingLayout = true; return true;}()); */;
        try {
            while (this._nodesNeedingLayout.isNotEmpty){
                let dirtyNodes : core.DartList<any> = this._nodesNeedingLayout;
                this._nodesNeedingLayout = new core.DartList.literal<any>();
                for(let node of ((_) : core.DartList<any> =>  {
                    {
                        _.sort((a : any,b : any) =>  {
                            return op(Op.MINUS,a.depth,b.depth);
                        });
                        return _;
                    }
                })(dirtyNodes)) {
                    if (node._needsLayout && op(Op.EQUALS,node.owner,this)) node._layoutWithoutResize();
                }
            }
        } finally {
            /* TODO (AssertStatementImpl) : assert (() {_debugDoingLayout = false; return true;}()); */;
            lib10.profile(() =>  {
                developer.Timeline.finishSync();
            });
        }
    }
    _debugAllowMutationsToDirtySubtrees : boolean;

    _enableMutationsToDirtySubtrees(callback : any) : any {
        /* TODO (AssertStatementImpl) : assert (_debugDoingLayout); */;
        let oldState : boolean;
        /* TODO (AssertStatementImpl) : assert (() {oldState = _debugAllowMutationsToDirtySubtrees; _debugAllowMutationsToDirtySubtrees = true; return true;}()); */;
        try {
            callback();
        } finally {
            /* TODO (AssertStatementImpl) : assert (() {_debugAllowMutationsToDirtySubtrees = oldState; return true;}()); */;
        }
    }
    _nodesNeedingCompositingBitsUpdate : core.DartList<any>;

    flushCompositingBits() : any {
        lib10.profile(() =>  {
            developer.Timeline.startSync('Compositing bits');
        });
        this._nodesNeedingCompositingBitsUpdate.sort((a : any,b : any) =>  {
            return op(Op.MINUS,a.depth,b.depth);
        });
        for(let node of this._nodesNeedingCompositingBitsUpdate) {
            if (node._needsCompositingBitsUpdate && op(Op.EQUALS,node.owner,this)) node._updateCompositingBits();
        }
        this._nodesNeedingCompositingBitsUpdate.clear();
        lib10.profile(() =>  {
            developer.Timeline.finishSync();
        });
    }
    _nodesNeedingPaint : core.DartList<any>;

    get debugDoingPaint() : boolean {
        return this._debugDoingPaint;
    }
    _debugDoingPaint : boolean;

    flushPaint() : any {
        lib10.profile(() =>  {
            developer.Timeline.startSync('Paint',{
                arguments : lib8.properties.timelineWhitelistArguments});
        });
        /* TODO (AssertStatementImpl) : assert (() {_debugDoingPaint = true; return true;}()); */;
        try {
            let dirtyNodes : core.DartList<any> = this._nodesNeedingPaint;
            this._nodesNeedingPaint = new core.DartList.literal<any>();
            for(let node of ((_) : core.DartList<any> =>  {
                {
                    _.sort((a : any,b : any) =>  {
                        return op(Op.MINUS,b.depth,a.depth);
                    });
                    return _;
                }
            })(dirtyNodes)) {
                /* TODO (AssertStatementImpl) : assert (node._layer != null); */;
                if (node._needsPaint && op(Op.EQUALS,node.owner,this)) {
                    if (node._layer.attached) {
                        PaintingContext.repaintCompositedChild(node);
                    }else {
                        node._skippedPaintingOnLayer();
                    }
                }
            }
            /* TODO (AssertStatementImpl) : assert (_nodesNeedingPaint.isEmpty); */;
        } finally {
            /* TODO (AssertStatementImpl) : assert (() {_debugDoingPaint = false; return true;}()); */;
            lib10.profile(() =>  {
                developer.Timeline.finishSync();
            });
        }
    }
    get semanticsOwner() : lib11.SemanticsOwner {
        return this._semanticsOwner;
    }
    _semanticsOwner : lib11.SemanticsOwner;

    get debugOutstandingSemanticsHandles() : number {
        return this._outstandingSemanticsHandles;
    }
    _outstandingSemanticsHandles : number;

    ensureSemantics(_namedArguments? : {listener? : any}) : SemanticsHandle {
        let {listener} = Object.assign({
        }, _namedArguments );
        this._outstandingSemanticsHandles += 1;
        if (this._outstandingSemanticsHandles == 1) {
            /* TODO (AssertStatementImpl) : assert (_semanticsOwner == null); */;
            this._semanticsOwner = lib11.SemanticsOwner();
            if (this.onSemanticsOwnerCreated != null) this.onSemanticsOwnerCreated();
        }
        return SemanticsHandle._(this,listener);
    }
    _didDisposeSemanticsHandle() : any {
        /* TODO (AssertStatementImpl) : assert (_semanticsOwner != null); */;
        this._outstandingSemanticsHandles -= 1;
        if (this._outstandingSemanticsHandles == 0) {
            this._semanticsOwner.dispose();
            this._semanticsOwner = null;
            if (this.onSemanticsOwnerDisposed != null) this.onSemanticsOwnerDisposed();
        }
    }
    _debugDoingSemantics : boolean;

    _nodesNeedingSemantics : core.DartSet<any>;

    flushSemantics() : any {
        if (op(Op.EQUALS,this._semanticsOwner,null)) return;
        lib10.profile(() =>  {
            developer.Timeline.startSync('Semantics');
        });
        /* TODO (AssertStatementImpl) : assert (_semanticsOwner != null); */;
        /* TODO (AssertStatementImpl) : assert (() {_debugDoingSemantics = true; return true;}()); */;
        try {
            let nodesToProcess : core.DartList<any> = ((_) : core.DartList<any> =>  {
                {
                    _.sort((a : any,b : any) =>  {
                        return op(Op.MINUS,a.depth,b.depth);
                    });
                    return _;
                }
            })(this._nodesNeedingSemantics.toList());
            this._nodesNeedingSemantics.clear();
            for(let node of nodesToProcess) {
                if (node._needsSemanticsUpdate && op(Op.EQUALS,node.owner,this)) node._updateSemantics();
            }
            this._semanticsOwner.sendSemanticsUpdate();
        } finally {
            /* TODO (AssertStatementImpl) : assert (_nodesNeedingSemantics.isEmpty); */;
            /* TODO (AssertStatementImpl) : assert (() {_debugDoingSemantics = false; return true;}()); */;
            lib10.profile(() =>  {
                developer.Timeline.finishSync();
            });
        }
    }
}

export namespace RenderObject {
    export type Constructors = lib7.AbstractNode.Constructors | 'RenderObject';
    export type Interface = Omit<RenderObject, Constructors>;
}
@DartClass
@Implements(lib12.HitTestTarget)
@With(any)
export class RenderObject extends lib7.AbstractNode implements lib12.HitTestTarget.Interface,any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderObject() {
        this._debugDoingThisResize = false;
        this._debugDoingThisLayout = false;
        this._debugMutationsLocked = false;
        this._needsLayout = true;
        this._doingThisLayoutWithCallback = false;
        this._debugDoingThisPaint = false;
        this._needsCompositingBitsUpdate = false;
        this._needsPaint = true;
        this._needsSemanticsUpdate = true;
        this._needsCompositing = this.isRepaintBoundary || this.alwaysNeedsCompositing;
    }
    reassemble() : any {
        this.markNeedsLayout();
        this.markNeedsCompositingBitsUpdate();
        this.markNeedsPaint();
        this.markNeedsSemanticsUpdate();
        this.visitChildren((child : any) =>  {
            child.reassemble();
        });
    }
    parentData : any;

    setupParentData(child : any) : any {
        /* TODO (AssertStatementImpl) : assert (_debugCanPerformMutations); */;
        if (isNot(child.parentData, any)) child.parentData = ParentData();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    adoptChild(child : any) : any {
        /* TODO (AssertStatementImpl) : assert (_debugCanPerformMutations); */;
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        this.setupParentData(child);
        this.markNeedsLayout();
        this.markNeedsCompositingBitsUpdate();
        this.markNeedsSemanticsUpdate();
        super.adoptChild(child);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dropChild(child : any) : any {
        /* TODO (AssertStatementImpl) : assert (_debugCanPerformMutations); */;
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        /* TODO (AssertStatementImpl) : assert (child.parentData != null); */;
        child._cleanRelayoutBoundary();
        child.parentData.detach();
        child.parentData = null;
        super.dropChild(child);
        this.markNeedsLayout();
        this.markNeedsCompositingBitsUpdate();
        this.markNeedsSemanticsUpdate();
    }
    visitChildren(visitor : (child : any) => any) : any {
    }
    debugCreator : any;

    _debugReportException(method : string,exception : any,stack : core.DartStackTrace) : any {
        lib13.FlutterError.reportError(FlutterErrorDetailsForRendering({
            exception : exception,stack : stack,library : 'rendering library',context : `during ${method}()`,renderObject : this,informationCollector : (information : core.DartStringBuffer) =>  {
                information.writeln('The following RenderObject was being processed when the exception was fired:');
                information.writeln(`  ${this.toStringShallow({
                    joiner : '\n  '})}`);
                let descendants : core.DartList<string> = new core.DartList.literal<string>();
                let maxDepth : number = 5;
                let depth : number = 0;
                let maxLines : number = 25;
                let lines : number = 0;
                var visitor : (child : any) => any = (child : any) : any =>  {
                    if (lines < maxLines) {
                        depth += 1;
                        descendants.add(`${op(Op.TIMES,"  ",depth)}${child}`);
                        if (depth < maxDepth) child.visitChildren(visitor);
                        depth -= 1;
                    }else if (lines == maxLines) {
                        descendants.add(`  ...(descendants list truncated after ${lines} lines)`);
                    }
                    lines += 1;
                };
                this.visitChildren(visitor);
                if (lines > 1) {
                    information.writeln(`This RenderObject had the following descendants (showing up to depth ${maxDepth}):`);
                }else if (descendants.length == 1) {
                    information.writeln('This RenderObject had the following child:');
                }else {
                    information.writeln('This RenderObject has no descendants.');
                }
                information.writeAll(descendants,'\n');
            }}));
    }
    get debugDoingThisResize() : boolean {
        return this._debugDoingThisResize;
    }
    _debugDoingThisResize : boolean;

    get debugDoingThisLayout() : boolean {
        return this._debugDoingThisLayout;
    }
    _debugDoingThisLayout : boolean;

    static get debugActiveLayout() : any {
        return RenderObject._debugActiveLayout;
    }
    private static __$_debugActiveLayout : any;
    static get _debugActiveLayout() : any { 
        return this.__$_debugActiveLayout;
    }
    static set _debugActiveLayout(__$value : any)  { 
        this.__$_debugActiveLayout = __$value;
    }

    get debugCanParentUseSize() : boolean {
        return this._debugCanParentUseSize;
    }
    _debugCanParentUseSize : boolean;

    _debugMutationsLocked : boolean;

    get _debugCanPerformMutations() : boolean {
        let result : boolean;
        /* TODO (AssertStatementImpl) : assert (() {RenderObject node = this; while (true) {if (node._doingThisLayoutWithCallback) {result = true; break;} if (owner != null && owner._debugAllowMutationsToDirtySubtrees && node._needsLayout) {result = true; break;} if (node._debugMutationsLocked) {result = false; break;} if (node.parent is! RenderObject) {result = true; break;} node = node.parent;} return true;}()); */;
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get owner() : PipelineOwner {
        return super.owner;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    attach(owner : PipelineOwner) : any {
        super.attach(owner);
        if (this._needsLayout && this._relayoutBoundary != null) {
            this._needsLayout = false;
            this.markNeedsLayout();
        }
        if (this._needsCompositingBitsUpdate) {
            this._needsCompositingBitsUpdate = false;
            this.markNeedsCompositingBitsUpdate();
        }
        if (this._needsPaint && this._layer != null) {
            this._needsPaint = false;
            this.markNeedsPaint();
        }
        if (this._needsSemanticsUpdate && this._semanticsConfiguration.isSemanticBoundary) {
            this._needsSemanticsUpdate = false;
            this.markNeedsSemanticsUpdate();
        }
    }
    get debugNeedsLayout() : boolean {
        let result : boolean;
        /* TODO (AssertStatementImpl) : assert (() {result = _needsLayout; return true;}()); */;
        return result;
    }
    _needsLayout : boolean;

    _relayoutBoundary : any;

    _doingThisLayoutWithCallback : boolean;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    get constraints() : Constraints {
        return this._constraints;
    }
    _constraints : Constraints;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    debugAssertDoesMeetConstraints() : any{ throw 'abstract'}
    private static __$debugCheckingIntrinsics : boolean;
    static get debugCheckingIntrinsics() : boolean { 
        if (this.__$debugCheckingIntrinsics===undefined) {
            this.__$debugCheckingIntrinsics = false;
        }
        return this.__$debugCheckingIntrinsics;
    }
    static set debugCheckingIntrinsics(__$value : boolean)  { 
        this.__$debugCheckingIntrinsics = __$value;
    }

    _debugSubtreeRelayoutRootAlreadyMarkedNeedsLayout() : boolean {
        if (op(Op.EQUALS,this._relayoutBoundary,null)) return true;
        let node : any = this;
        while (node != this._relayoutBoundary){
            /* TODO (AssertStatementImpl) : assert (node._relayoutBoundary == _relayoutBoundary); */;
            /* TODO (AssertStatementImpl) : assert (node.parent != null); */;
            node = node.parent;
            if ((!node._needsLayout) && (!node._debugDoingThisLayout)) return false;
        }
        /* TODO (AssertStatementImpl) : assert (node._relayoutBoundary == node); */;
        return true;
    }
    markNeedsLayout() : any {
        /* TODO (AssertStatementImpl) : assert (_debugCanPerformMutations); */;
        if (this._needsLayout) {
            /* TODO (AssertStatementImpl) : assert (_debugSubtreeRelayoutRootAlreadyMarkedNeedsLayout()); */;
            return;
        }
        /* TODO (AssertStatementImpl) : assert (_relayoutBoundary != null); */;
        if (this._relayoutBoundary != this) {
            this.markParentNeedsLayout();
        }else {
            this._needsLayout = true;
            if (this.owner != null) {
                /* TODO (AssertStatementImpl) : assert (() {if (debugPrintMarkNeedsLayoutStacks) debugPrintStack(label: 'markNeedsLayout() called for $this'); return true;}()); */;
                this.owner._nodesNeedingLayout.add(this);
                this.owner.requestVisualUpdate();
            }
        }
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    markParentNeedsLayout() : any {
        this._needsLayout = true;
        let parent : any = this.parent;
        if (!this._doingThisLayoutWithCallback) {
            parent.markNeedsLayout();
        }else {
            /* TODO (AssertStatementImpl) : assert (parent._debugDoingThisLayout); */;
        }
        /* TODO (AssertStatementImpl) : assert (parent == this.parent); */;
    }
    markNeedsLayoutForSizedByParentChange() : any {
        this.markNeedsLayout();
        this.markParentNeedsLayout();
    }
    _cleanRelayoutBoundary() : any {
        if (this._relayoutBoundary != this) {
            this._relayoutBoundary = null;
            this._needsLayout = true;
            this.visitChildren((child : any) =>  {
                child._cleanRelayoutBoundary();
            });
        }
    }
    scheduleInitialLayout() : any {
        /* TODO (AssertStatementImpl) : assert (attached); */;
        /* TODO (AssertStatementImpl) : assert (parent is! RenderObject); */;
        /* TODO (AssertStatementImpl) : assert (!owner._debugDoingLayout); */;
        /* TODO (AssertStatementImpl) : assert (_relayoutBoundary == null); */;
        this._relayoutBoundary = this;
        /* TODO (AssertStatementImpl) : assert (() {_debugCanParentUseSize = false; return true;}()); */;
        this.owner._nodesNeedingLayout.add(this);
    }
    _layoutWithoutResize() : any {
        /* TODO (AssertStatementImpl) : assert (_relayoutBoundary == this); */;
        let debugPreviousActiveLayout : any;
        /* TODO (AssertStatementImpl) : assert (!_debugMutationsLocked); */;
        /* TODO (AssertStatementImpl) : assert (!_doingThisLayoutWithCallback); */;
        /* TODO (AssertStatementImpl) : assert (_debugCanParentUseSize != null); */;
        /* TODO (AssertStatementImpl) : assert (() {_debugMutationsLocked = true; _debugDoingThisLayout = true; debugPreviousActiveLayout = _debugActiveLayout; _debugActiveLayout = this; if (debugPrintLayouts) debugPrint('Laying out (without resize) $this'); return true;}()); */;
        try {
            this.performLayout();
            this.markNeedsSemanticsUpdate();
        } catch (__error__) {

            {
                let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                this._debugReportException('performLayout',e,stack);
            }
        }
        /* TODO (AssertStatementImpl) : assert (() {_debugActiveLayout = debugPreviousActiveLayout; _debugDoingThisLayout = false; _debugMutationsLocked = false; return true;}()); */;
        this._needsLayout = false;
        this.markNeedsPaint();
    }
    layout(constraints : Constraints,_namedArguments? : {parentUsesSize? : boolean}) : any {
        let {parentUsesSize} = Object.assign({
            "parentUsesSize" : false}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (constraints != null); */;
        /* TODO (AssertStatementImpl) : assert (constraints.debugAssertIsValid(isAppliedConstraint: true, informationCollector: (StringBuffer information) {final List<String> stack = StackTrace.current.toString().split('\n'); int targetFrame; final Pattern layoutFramePattern = RegExp(r'^#[0-9]+ +RenderObject.layout \('); for (int i = 0; i < stack.length; i += 1) {if (layoutFramePattern.matchAsPrefix(stack[i]) != null) {targetFrame = i + 1; break;}} if (targetFrame != null && targetFrame < stack.length) {information.writeln('These invalid constraints were provided to $runtimeType\'s layout() ' 'function by the following function, which probably computed the ' 'invalid constraints in question:'); final Pattern targetFramePattern = RegExp(r'^#[0-9]+ +(.+)$'); final Match targetFrameMatch = targetFramePattern.matchAsPrefix(stack[targetFrame]); if (targetFrameMatch != null && targetFrameMatch.groupCount > 0) {information.writeln('  ${targetFrameMatch.group(1)}');} else {information.writeln(stack[targetFrame]);}}})); */;
        /* TODO (AssertStatementImpl) : assert (!_debugDoingThisResize); */;
        /* TODO (AssertStatementImpl) : assert (!_debugDoingThisLayout); */;
        let relayoutBoundary : any;
        if (!parentUsesSize || this.sizedByParent || constraints.isTight || isNot(lib14.properties.parent, any)) {
            relayoutBoundary = this;
        }else {
            let parent : any = this.parent;
            relayoutBoundary = parent._relayoutBoundary;
        }
        /* TODO (AssertStatementImpl) : assert (() {_debugCanParentUseSize = parentUsesSize; return true;}()); */;
        if (!this._needsLayout && op(Op.EQUALS,constraints,this._constraints) && op(Op.EQUALS,relayoutBoundary,this._relayoutBoundary)) {
            /* TODO (AssertStatementImpl) : assert (() {_debugDoingThisResize = sizedByParent; _debugDoingThisLayout = !sizedByParent; final RenderObject debugPreviousActiveLayout = _debugActiveLayout; _debugActiveLayout = this; debugResetSize(); _debugActiveLayout = debugPreviousActiveLayout; _debugDoingThisLayout = false; _debugDoingThisResize = false; return true;}()); */;
            return;
        }
        this._constraints = constraints;
        this._relayoutBoundary = relayoutBoundary;
        /* TODO (AssertStatementImpl) : assert (!_debugMutationsLocked); */;
        /* TODO (AssertStatementImpl) : assert (!_doingThisLayoutWithCallback); */;
        /* TODO (AssertStatementImpl) : assert (() {_debugMutationsLocked = true; if (debugPrintLayouts) debugPrint('Laying out (${sizedByParent ? "with separate resize" : "with resize allowed"}) $this'); return true;}()); */;
        if (this.sizedByParent) {
            /* TODO (AssertStatementImpl) : assert (() {_debugDoingThisResize = true; return true;}()); */;
            try {
                this.performResize();
                /* TODO (AssertStatementImpl) : assert (() {debugAssertDoesMeetConstraints(); return true;}()); */;
            } catch (__error__) {

                {
                    let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let e = __error__;
                    this._debugReportException('performResize',e,stack);
                }
            }
            /* TODO (AssertStatementImpl) : assert (() {_debugDoingThisResize = false; return true;}()); */;
        }
        let debugPreviousActiveLayout : any;
        /* TODO (AssertStatementImpl) : assert (() {_debugDoingThisLayout = true; debugPreviousActiveLayout = _debugActiveLayout; _debugActiveLayout = this; return true;}()); */;
        try {
            this.performLayout();
            this.markNeedsSemanticsUpdate();
            /* TODO (AssertStatementImpl) : assert (() {debugAssertDoesMeetConstraints(); return true;}()); */;
        } catch (__error__) {

            {
                let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                this._debugReportException('performLayout',e,stack);
            }
        }
        /* TODO (AssertStatementImpl) : assert (() {_debugActiveLayout = debugPreviousActiveLayout; _debugDoingThisLayout = false; _debugMutationsLocked = false; return true;}()); */;
        this._needsLayout = false;
        this.markNeedsPaint();
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    debugResetSize() : any {
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    get sizedByParent() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    performResize() : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    performLayout() : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    invokeLayoutCallback<T extends Constraints>(callback : <T extends Constraints>(constraints : T) => any) : any {
        /* TODO (AssertStatementImpl) : assert (_debugMutationsLocked); */;
        /* TODO (AssertStatementImpl) : assert (_debugDoingThisLayout); */;
        /* TODO (AssertStatementImpl) : assert (!_doingThisLayoutWithCallback); */;
        this._doingThisLayoutWithCallback = true;
        try {
            this.owner._enableMutationsToDirtySubtrees(() =>  {
                callback(this.constraints);
            });
        } finally {
            this._doingThisLayoutWithCallback = false;
        }
    }
    rotate(_namedArguments? : {oldAngle? : number,newAngle? : number,time? : core.DartDuration}) : any {
        let {oldAngle,newAngle,time} = Object.assign({
        }, _namedArguments );
    }
    get debugDoingThisPaint() : boolean {
        return this._debugDoingThisPaint;
    }
    _debugDoingThisPaint : boolean;

    static get debugActivePaint() : any {
        return RenderObject._debugActivePaint;
    }
    private static __$_debugActivePaint : any;
    static get _debugActivePaint() : any { 
        return this.__$_debugActivePaint;
    }
    static set _debugActivePaint(__$value : any)  { 
        this.__$_debugActivePaint = __$value;
    }

    get isRepaintBoundary() : boolean {
        return false;
    }
    debugRegisterRepaintBoundaryPaint(_namedArguments? : {includedParent? : boolean,includedChild? : boolean}) : any {
        let {includedParent,includedChild} = Object.assign({
            "includedParent" : true,
            "includedChild" : false}, _namedArguments );
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    get alwaysNeedsCompositing() : boolean {
        return false;
    }
    _layer : lib4.OffsetLayer;

    get layer() : lib4.OffsetLayer {
        /* TODO (AssertStatementImpl) : assert (isRepaintBoundary, 'You can only access RenderObject.layer for render objects that are repaint boundaries.'); */;
        /* TODO (AssertStatementImpl) : assert (!_needsPaint); */;
        return this._layer;
    }
    get debugLayer() : lib4.OffsetLayer {
        let result : lib4.OffsetLayer;
        /* TODO (AssertStatementImpl) : assert (() {result = _layer; return true;}()); */;
        return result;
    }
    _needsCompositingBitsUpdate : boolean;

    markNeedsCompositingBitsUpdate() : any {
        if (this._needsCompositingBitsUpdate) return;
        this._needsCompositingBitsUpdate = true;
        if (is(lib14.properties.parent, any)) {
            let parent : any = this.parent;
            if (parent._needsCompositingBitsUpdate) return;
            if (!this.isRepaintBoundary && !parent.isRepaintBoundary) {
                parent.markNeedsCompositingBitsUpdate();
                return;
            }
        }
        /* TODO (AssertStatementImpl) : assert (() {final AbstractNode parent = this.parent; if (parent is RenderObject) return parent._needsCompositing; return true;}()); */;
        if (this.owner != null) this.owner._nodesNeedingCompositingBitsUpdate.add(this);
    }
    _needsCompositing : boolean;

    get needsCompositing() : boolean {
        /* TODO (AssertStatementImpl) : assert (!_needsCompositingBitsUpdate); */;
        return this._needsCompositing;
    }
    _updateCompositingBits() : any {
        if (!this._needsCompositingBitsUpdate) return;
        let oldNeedsCompositing : boolean = this._needsCompositing;
        this._needsCompositing = false;
        this.visitChildren((child : any) =>  {
            child._updateCompositingBits();
            if (child.needsCompositing) this._needsCompositing = true;
        });
        if (this.isRepaintBoundary || this.alwaysNeedsCompositing) this._needsCompositing = true;
        if (oldNeedsCompositing != this._needsCompositing) this.markNeedsPaint();
        this._needsCompositingBitsUpdate = false;
    }
    get debugNeedsPaint() : boolean {
        let result : boolean;
        /* TODO (AssertStatementImpl) : assert (() {result = _needsPaint; return true;}()); */;
        return result;
    }
    _needsPaint : boolean;

    markNeedsPaint() : any {
        /* TODO (AssertStatementImpl) : assert (owner == null || !owner.debugDoingPaint); */;
        if (this._needsPaint) return;
        this._needsPaint = true;
        if (this.isRepaintBoundary) {
            /* TODO (AssertStatementImpl) : assert (() {if (debugPrintMarkNeedsPaintStacks) debugPrintStack(label: 'markNeedsPaint() called for $this'); return true;}()); */;
            /* TODO (AssertStatementImpl) : assert (_layer != null); */;
            if (this.owner != null) {
                this.owner._nodesNeedingPaint.add(this);
                this.owner.requestVisualUpdate();
            }
        }else if (is(lib14.properties.parent, any)) {
            /* TODO (AssertStatementImpl) : assert (_layer == null); */;
            let parent : any = this.parent;
            parent.markNeedsPaint();
            /* TODO (AssertStatementImpl) : assert (parent == this.parent); */;
        }else {
            /* TODO (AssertStatementImpl) : assert (() {if (debugPrintMarkNeedsPaintStacks) debugPrintStack(label: 'markNeedsPaint() called for $this (root of render tree)'); return true;}()); */;
            if (this.owner != null) this.owner.requestVisualUpdate();
        }
    }
    _skippedPaintingOnLayer() : any {
        /* TODO (AssertStatementImpl) : assert (attached); */;
        /* TODO (AssertStatementImpl) : assert (isRepaintBoundary); */;
        /* TODO (AssertStatementImpl) : assert (_needsPaint); */;
        /* TODO (AssertStatementImpl) : assert (_layer != null); */;
        /* TODO (AssertStatementImpl) : assert (!_layer.attached); */;
        let ancestor : lib7.AbstractNode = lib14.properties.parent;
        while (is(ancestor, any)){
            let node : any = ancestor;
            if (node.isRepaintBoundary) {
                if (op(Op.EQUALS,node._layer,null)) break;
                if (node._layer.attached) break;
                node._needsPaint = true;
            }
            ancestor = node.parent;
        }
    }
    scheduleInitialPaint(rootLayer : lib4.ContainerLayer) : any {
        /* TODO (AssertStatementImpl) : assert (rootLayer.attached); */;
        /* TODO (AssertStatementImpl) : assert (attached); */;
        /* TODO (AssertStatementImpl) : assert (parent is! RenderObject); */;
        /* TODO (AssertStatementImpl) : assert (!owner._debugDoingPaint); */;
        /* TODO (AssertStatementImpl) : assert (isRepaintBoundary); */;
        /* TODO (AssertStatementImpl) : assert (_layer == null); */;
        this._layer = rootLayer;
        /* TODO (AssertStatementImpl) : assert (_needsPaint); */;
        this.owner._nodesNeedingPaint.add(this);
    }
    replaceRootLayer(rootLayer : lib4.OffsetLayer) : any {
        /* TODO (AssertStatementImpl) : assert (rootLayer.attached); */;
        /* TODO (AssertStatementImpl) : assert (attached); */;
        /* TODO (AssertStatementImpl) : assert (parent is! RenderObject); */;
        /* TODO (AssertStatementImpl) : assert (!owner._debugDoingPaint); */;
        /* TODO (AssertStatementImpl) : assert (isRepaintBoundary); */;
        /* TODO (AssertStatementImpl) : assert (_layer != null); */;
        this._layer.detach();
        this._layer = rootLayer;
        this.markNeedsPaint();
    }
    _paintWithContext(context : PaintingContext,offset : any) : any {
        /* TODO (AssertStatementImpl) : assert (() {if (_debugDoingThisPaint) {throw FlutterError('Tried to paint a RenderObject reentrantly.\n' 'The following RenderObject was already being painted when it was ' 'painted again:\n' '  ${toStringShallow(joiner: "\n    ")}\n' 'Since this typically indicates an infinite recursion, it is ' 'disallowed.');} return true;}()); */;
        if (this._needsLayout) return;
        /* TODO (AssertStatementImpl) : assert (() {if (_needsCompositingBitsUpdate) {throw FlutterError('Tried to paint a RenderObject before its compositing bits were ' 'updated.\n' 'The following RenderObject was marked as having dirty compositing ' 'bits at the time that it was painted:\n' '  ${toStringShallow(joiner: "\n    ")}\n' 'A RenderObject that still has dirty compositing bits cannot be ' 'painted because this indicates that the tree has not yet been ' 'properly configured for creating the layer tree.\n' 'This usually indicates an error in the Flutter framework itself.');} return true;}()); */;
        let debugLastActivePaint : any;
        /* TODO (AssertStatementImpl) : assert (() {_debugDoingThisPaint = true; debugLastActivePaint = _debugActivePaint; _debugActivePaint = this; assert (!isRepaintBoundary || _layer != null); return true;}()); */;
        this._needsPaint = false;
        try {
            this.paint(context,offset);
            /* TODO (AssertStatementImpl) : assert (!_needsLayout); */;
            /* TODO (AssertStatementImpl) : assert (!_needsPaint); */;
        } catch (__error__) {

            {
                let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                this._debugReportException('paint',e,stack);
            }
        }
        /* TODO (AssertStatementImpl) : assert (() {debugPaint(context, offset); _debugActivePaint = debugLastActivePaint; _debugDoingThisPaint = false; return true;}()); */;
    }
    @AbstractProperty
    get paintBounds() : any{ throw 'abstract'}
    debugPaint(context : PaintingContext,offset : any) : any {
    }
    paint(context : PaintingContext,offset : any) : any {
    }
    applyPaintTransform(child : any,transform : lib5.Matrix4) : any {
        /* TODO (AssertStatementImpl) : assert (child.parent == this); */;
    }
    getTransformTo(ancestor : any) : lib5.Matrix4 {
        /* TODO (AssertStatementImpl) : assert (attached); */;
        if (op(Op.EQUALS,ancestor,null)) {
            let rootNode : lib7.AbstractNode = this.owner.rootNode;
            if (is(rootNode, any)) ancestor = rootNode;
        }
        let renderers : core.DartList<any> = new core.DartList.literal<any>();
        for(let renderer : any = this; renderer != ancestor; renderer = renderer.parent){
            /* TODO (AssertStatementImpl) : assert (renderer != null); */;
            renderers.add(renderer);
        }
        let transform : lib5.Matrix4 = lib5.Matrix4.identity();
        for(let index : number = renderers.length - 1; index > 0; index -= 1)renderers[index].applyPaintTransform(renderers[index - 1],transform);
        return transform;
    }
    describeApproximatePaintClip(child : any) : any {
        return null;
    }
    describeSemanticsClip(child : any) : any {
        return null;
    }
    scheduleInitialSemantics() : any {
        /* TODO (AssertStatementImpl) : assert (attached); */;
        /* TODO (AssertStatementImpl) : assert (parent is! RenderObject); */;
        /* TODO (AssertStatementImpl) : assert (!owner._debugDoingSemantics); */;
        /* TODO (AssertStatementImpl) : assert (_semantics == null); */;
        /* TODO (AssertStatementImpl) : assert (_needsSemanticsUpdate); */;
        /* TODO (AssertStatementImpl) : assert (owner._semanticsOwner != null); */;
        this.owner._nodesNeedingSemantics.add(this);
        this.owner.requestVisualUpdate();
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    describeSemanticsConfiguration(config : lib11.SemanticsConfiguration) : any {
    }
    sendSemanticsEvent(semanticsEvent : lib15.SemanticsEvent) : any {
        if (op(Op.EQUALS,this.owner.semanticsOwner,null)) return;
        if (this._semantics != null && !this._semantics.isMergedIntoParent) {
            this._semantics.sendEvent(semanticsEvent);
        }else if (lib14.properties.parent != null) {
            let renderParent : any = lib14.properties.parent;
            renderParent.sendSemanticsEvent(semanticsEvent);
        }
    }
    _cachedSemanticsConfiguration : lib11.SemanticsConfiguration;

    get _semanticsConfiguration() : lib11.SemanticsConfiguration {
        if (op(Op.EQUALS,this._cachedSemanticsConfiguration,null)) {
            this._cachedSemanticsConfiguration = lib11.SemanticsConfiguration();
            this.describeSemanticsConfiguration(this._cachedSemanticsConfiguration);
        }
        return this._cachedSemanticsConfiguration;
    }
    @AbstractProperty
    get semanticBounds() : any{ throw 'abstract'}
    _needsSemanticsUpdate : boolean;

    _semantics : lib11.SemanticsNode;

    get debugSemantics() : lib11.SemanticsNode {
        let result : lib11.SemanticsNode;
        /* TODO (AssertStatementImpl) : assert (() {result = _semantics; return true;}()); */;
        return result;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    clearSemantics() : any {
        this._needsSemanticsUpdate = true;
        this._semantics = null;
        this.visitChildren((child : any) =>  {
            child.clearSemantics();
        });
    }
    markNeedsSemanticsUpdate() : any {
        /* TODO (AssertStatementImpl) : assert (!attached || !owner._debugDoingSemantics); */;
        if (!this.attached || op(Op.EQUALS,this.owner._semanticsOwner,null)) {
            this._cachedSemanticsConfiguration = null;
            return;
        }
        let wasSemanticsBoundary : boolean = this._semantics != null && ((t)=>(!!t)?t.isSemanticBoundary:null)(this._cachedSemanticsConfiguration) == true;
        this._cachedSemanticsConfiguration = null;
        let isEffectiveSemanticsBoundary : boolean = this._semanticsConfiguration.isSemanticBoundary && wasSemanticsBoundary;
        let node : any = this;
        while (!isEffectiveSemanticsBoundary && is(node.parent, any)){
            if (node != this && node._needsSemanticsUpdate) break;
            node._needsSemanticsUpdate = true;
            node = node.parent;
            isEffectiveSemanticsBoundary = node._semanticsConfiguration.isSemanticBoundary;
            if (isEffectiveSemanticsBoundary && op(Op.EQUALS,node._semantics,null)) {
                return;
            }
        }
        if (node != this && this._semantics != null && this._needsSemanticsUpdate) {
            this.owner._nodesNeedingSemantics.remove(this);
        }
        if (!node._needsSemanticsUpdate) {
            node._needsSemanticsUpdate = true;
            if (this.owner != null) {
                /* TODO (AssertStatementImpl) : assert (node._semanticsConfiguration.isSemanticBoundary || node.parent is! RenderObject); */;
                this.owner._nodesNeedingSemantics.add(node);
                this.owner.requestVisualUpdate();
            }
        }
    }
    _updateSemantics() : any {
        /* TODO (AssertStatementImpl) : assert (_semanticsConfiguration.isSemanticBoundary || parent is! RenderObject); */;
        if (this._needsLayout) {
            return;
        }
        let fragment : _SemanticsFragment = this._getSemanticsForParent({
            mergeIntoParent : (((t)=>(!!t)?t.isPartOfNodeMerging:null)(((t)=>(!!t)?t.parent:null)(this._semantics)) || false)});
        /* TODO (AssertStatementImpl) : assert (fragment is _InterestingSemanticsFragment); */;
        let interestingFragment : _InterestingSemanticsFragment = fragment;
        let node : lib11.SemanticsNode = interestingFragment.compileChildren({
            parentSemanticsClipRect : ((t)=>(!!t)?t.parentSemanticsClipRect:null)(this._semantics),parentPaintClipRect : ((t)=>(!!t)?t.parentPaintClipRect:null)(this._semantics),elevationAdjustment : (((t)=>(!!t)?t.elevationAdjustment:null)(this._semantics) || 0.0)}).single;
        /* TODO (AssertStatementImpl) : assert (interestingFragment.config == null && node == _semantics); */;
    }
    _getSemanticsForParent(_namedArguments? : {mergeIntoParent? : boolean}) : _SemanticsFragment {
        let {mergeIntoParent} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (mergeIntoParent != null); */;
        /* TODO (AssertStatementImpl) : assert (!_needsLayout, 'Updated layout information required for $this to calculate semantics.'); */;
        let config : lib11.SemanticsConfiguration = this._semanticsConfiguration;
        let dropSemanticsOfPreviousSiblings : boolean = config.isBlockingSemanticsOfPreviouslyPaintedNodes;
        let producesForkingFragment : boolean = !config.hasBeenAnnotated && !config.isSemanticBoundary;
        let fragments : core.DartList<_InterestingSemanticsFragment> = new core.DartList.literal<_InterestingSemanticsFragment>();
        let toBeMarkedExplicit : core.DartSet<_InterestingSemanticsFragment> = core.DartSet();
        let childrenMergeIntoParent : boolean = mergeIntoParent || config.isMergingSemanticsOfDescendants;
        let abortWalk : boolean = false;
        this.visitChildrenForSemantics((renderChild : any) =>  {
            if (abortWalk || this._needsLayout) {
                abortWalk = true;
                return;
            }
            let parentFragment : _SemanticsFragment = renderChild._getSemanticsForParent({
                mergeIntoParent : childrenMergeIntoParent});
            if (parentFragment.abortsWalk) {
                abortWalk = true;
                return;
            }
            if (parentFragment.dropsSemanticsOfPreviousSiblings) {
                fragments.clear();
                toBeMarkedExplicit.clear();
                if (!config.isSemanticBoundary) dropSemanticsOfPreviousSiblings = true;
            }
            for(let fragment of parentFragment.interestingFragments) {
                fragments.add(fragment);
                fragment.addAncestor(this);
                fragment.addTags(config.tagsForChildren);
                if (config.explicitChildNodes || isNot(lib14.properties.parent, any)) {
                    fragment.markAsExplicit();
                    continue;
                }
                if (!fragment.hasConfigForParent || producesForkingFragment) continue;
                if (!config.isCompatibleWith(fragment.config)) toBeMarkedExplicit.add(fragment);
                for(let siblingFragment of fragments.sublist(0,fragments.length - 1)) {
                    if (!fragment.config.isCompatibleWith(siblingFragment.config)) {
                        toBeMarkedExplicit.add(fragment);
                        toBeMarkedExplicit.add(siblingFragment);
                    }
                }
            }
        });
        if (abortWalk) {
            return _AbortingSemanticsFragment({
                owner : this});
        }
        for(let fragment of toBeMarkedExplicit) fragment.markAsExplicit();
        this._needsSemanticsUpdate = false;
        let result : _SemanticsFragment;
        if (isNot(lib14.properties.parent, any)) {
            /* TODO (AssertStatementImpl) : assert (!config.hasBeenAnnotated); */;
            /* TODO (AssertStatementImpl) : assert (!mergeIntoParent); */;
            result = _RootSemanticsFragment({
                owner : this,dropsSemanticsOfPreviousSiblings : dropSemanticsOfPreviousSiblings});
        }else if (producesForkingFragment) {
            result = _ContainerSemanticsFragment({
                dropsSemanticsOfPreviousSiblings : dropSemanticsOfPreviousSiblings});
        }else {
            result = _SwitchableSemanticsFragment({
                config : config,mergeIntoParent : mergeIntoParent,owner : this,dropsSemanticsOfPreviousSiblings : dropSemanticsOfPreviousSiblings});
            if (config.isSemanticBoundary) {
                let fragment : _SwitchableSemanticsFragment = result;
                fragment.markAsExplicit();
            }
        }
        result.addAll(fragments);
        return result;
    }
    visitChildrenForSemantics(visitor : (child : any) => any) : any {
        this.visitChildren(visitor);
    }
    assembleSemanticsNode(node : lib11.SemanticsNode,config : lib11.SemanticsConfiguration,children : core.DartIterable<lib11.SemanticsNode>) : any {
        /* TODO (AssertStatementImpl) : assert (node == _semantics); */;
        node.updateWith({
            config : config,childrenInInversePaintOrder : children});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleEvent(event : lib16.PointerEvent,entry : lib12.HitTestEntry) : any {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toStringShort() : string {
        let header : string = lib17.describeIdentity(this);
        if (this._relayoutBoundary != null && this._relayoutBoundary != this) {
            let count : number = 1;
            let target : any = lib14.properties.parent;
            while (target != null && target != this._relayoutBoundary){
                target = target.parent;
                count += 1;
            }
            header += ` relayoutBoundary=up${count}`;
        }
        if (this._needsLayout) header += ' NEEDS-LAYOUT';
        if (this._needsPaint) header += ' NEEDS-PAINT';
        if (!this.attached) header += ' DETACHED';
        return header;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString(_namedArguments? : {minLevel? : lib17.DiagnosticLevel}) : string {
        let {minLevel} = Object.assign({
            "minLevel" : lib17.DiagnosticLevel.debug}, _namedArguments );
        return this.toStringShort();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toStringDeep(_namedArguments? : {prefixLineOne? : string,prefixOtherLines? : string,minLevel? : lib17.DiagnosticLevel}) : string {
        let {prefixLineOne,prefixOtherLines,minLevel} = Object.assign({
            "prefixLineOne" : '',
            "prefixOtherLines" : '',
            "minLevel" : lib17.DiagnosticLevel.debug}, _namedArguments );
        let debugPreviousActiveLayout : any;
        /* TODO (AssertStatementImpl) : assert (() {debugPreviousActiveLayout = _debugActiveLayout; _debugActiveLayout = null; return true;}()); */;
        let result : string = super.toStringDeep({
            prefixLineOne : prefixLineOne,prefixOtherLines : prefixOtherLines,minLevel : minLevel});
        /* TODO (AssertStatementImpl) : assert (() {_debugActiveLayout = debugPreviousActiveLayout; return true;}()); */;
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toStringShallow(_namedArguments? : {joiner? : string,minLevel? : lib17.DiagnosticLevel}) : string {
        let {joiner,minLevel} = Object.assign({
            "joiner" : ', ',
            "minLevel" : lib17.DiagnosticLevel.debug}, _namedArguments );
        let debugPreviousActiveLayout : any;
        /* TODO (AssertStatementImpl) : assert (() {debugPreviousActiveLayout = _debugActiveLayout; _debugActiveLayout = null; return true;}()); */;
        let result : string = super.toStringShallow({
            joiner : joiner,minLevel : minLevel});
        /* TODO (AssertStatementImpl) : assert (() {_debugActiveLayout = debugPreviousActiveLayout; return true;}()); */;
        return result;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib17.DiagnosticPropertiesBuilder) : any {
        properties.add(lib17.DiagnosticsProperty('creator',this.debugCreator,{
            defaultValue : null,level : lib17.DiagnosticLevel.debug}));
        properties.add(lib17.DiagnosticsProperty('parentData',this.parentData,{
            tooltip : this._debugCanParentUseSize == true ? 'can use size' : null,missingIfNull : true}));
        properties.add(lib17.DiagnosticsProperty('constraints',this.constraints,{
            missingIfNull : true}));
        properties.add(lib17.DiagnosticsProperty('layer',this._layer,{
            defaultValue : null}));
        properties.add(lib17.DiagnosticsProperty('semantics node',this._semantics,{
            defaultValue : null}));
        properties.add(lib17.FlagProperty('isBlockingSemanticsOfPreviouslyPaintedNodes',{
            value : this._semanticsConfiguration.isBlockingSemanticsOfPreviouslyPaintedNodes,ifTrue : 'blocks semantics of earlier render objects below the common boundary'}));
        properties.add(lib17.FlagProperty('isSemanticBoundary',{
            value : this._semanticsConfiguration.isSemanticBoundary,ifTrue : 'semantic boundary'}));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugDescribeChildren() : core.DartList<lib17.DiagnosticsNode> {
        return new core.DartList.literal<lib17.DiagnosticsNode>();
    }
    showOnScreen(_namedArguments? : {descendant? : any,rect? : any,duration? : core.DartDuration,curve? : lib18.Curve}) : any {
        let {descendant,rect,duration,curve} = Object.assign({
            "duration" : core.DartDuration.zero,
            "curve" : lib18.Curves.ease}, _namedArguments );
        if (is(lib14.properties.parent, any)) {
            let renderParent : any = lib14.properties.parent;
            renderParent.showOnScreen({
                descendant : (descendant || this),rect : rect,duration : duration,curve : curve});
        }
    }
}

export namespace FlutterErrorDetailsForRendering {
    export type Constructors = lib13.FlutterErrorDetails.Constructors | 'FlutterErrorDetailsForRendering';
    export type Interface = Omit<FlutterErrorDetailsForRendering, Constructors>;
}
@DartClass
export class FlutterErrorDetailsForRendering extends lib13.FlutterErrorDetails {
    constructor(_namedArguments? : {exception? : any,stack? : core.DartStackTrace,library? : string,context? : string,renderObject? : any,informationCollector? : (information : core.DartStringBuffer) => any,silent? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FlutterErrorDetailsForRendering(_namedArguments? : {exception? : any,stack? : core.DartStackTrace,library? : string,context? : string,renderObject? : any,informationCollector? : (information : core.DartStringBuffer) => any,silent? : boolean}) {
        let {exception,stack,library,context,renderObject,informationCollector,silent} = Object.assign({
            "silent" : false}, _namedArguments );
        super.FlutterErrorDetails({
            exception : exception,stack : stack,library : library,context : context,informationCollector : informationCollector,silent : silent});
        this.renderObject = renderObject;
    }
    renderObject : any;

}

export namespace _SemanticsFragment {
    export type Constructors = '_SemanticsFragment';
    export type Interface = Omit<_SemanticsFragment, Constructors>;
}
@DartClass
export class _SemanticsFragment {
    constructor(_namedArguments? : {dropsSemanticsOfPreviousSiblings? : boolean}) {
    }
    @defaultConstructor
    _SemanticsFragment(_namedArguments? : {dropsSemanticsOfPreviousSiblings? : boolean}) {
        let {dropsSemanticsOfPreviousSiblings} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.dropsSemanticsOfPreviousSiblings = dropsSemanticsOfPreviousSiblings;
    }
     : any;

    @Abstract
    addAll(fragments : core.DartIterable<_InterestingSemanticsFragment>) : any{ throw 'abstract'}
    dropsSemanticsOfPreviousSiblings : boolean;

    @AbstractProperty
    get interestingFragments() : core.DartIterable<_InterestingSemanticsFragment>{ throw 'abstract'}
    get abortsWalk() : boolean {
        return false;
    }
}

export namespace _SemanticsGeometry {
    export type Constructors = '_SemanticsGeometry';
    export type Interface = Omit<_SemanticsGeometry, Constructors>;
}
@DartClass
export class _SemanticsGeometry {
    constructor(_namedArguments? : {parentSemanticsClipRect? : any,parentPaintClipRect? : any,ancestors? : core.DartList<any>}) {
    }
    @defaultConstructor
    _SemanticsGeometry(_namedArguments? : {parentSemanticsClipRect? : any,parentPaintClipRect? : any,ancestors? : core.DartList<any>}) {
        let {parentSemanticsClipRect,parentPaintClipRect,ancestors} = Object.assign({
        }, _namedArguments );
        this._markAsHidden = false;
        this._computeValues(parentSemanticsClipRect,parentPaintClipRect,ancestors);
    }
    _paintClipRect : any;

    _semanticsClipRect : any;

    _transform : lib5.Matrix4;

    _rect : any;

    get transform() : lib5.Matrix4 {
        return this._transform;
    }
    get semanticsClipRect() : any {
        return this._semanticsClipRect;
    }
    get paintClipRect() : any {
        return this._paintClipRect;
    }
    get rect() : any {
        return this._rect;
    }
    _computeValues(parentSemanticsClipRect : any,parentPaintClipRect : any,ancestors : core.DartList<any>) : any {
        /* TODO (AssertStatementImpl) : assert (ancestors.length > 1); */;
        this._transform = lib5.Matrix4.identity();
        this._semanticsClipRect = parentSemanticsClipRect;
        this._paintClipRect = parentPaintClipRect;
        for(let index : number = ancestors.length - 1; index > 0; index -= 1){
            let parent : any = ancestors[index];
            let child : any = ancestors[index - 1];
            let parentSemanticsClipRect : any = parent.describeSemanticsClip(child);
            if (parentSemanticsClipRect != null) {
                this._semanticsClipRect = parentSemanticsClipRect;
                this._paintClipRect = _SemanticsGeometry._intersectRects(this._paintClipRect,parent.describeApproximatePaintClip(child));
            }else {
                this._semanticsClipRect = _SemanticsGeometry._intersectRects(this._semanticsClipRect,parent.describeApproximatePaintClip(child));
            }
            this._semanticsClipRect = _SemanticsGeometry._transformRect(this._semanticsClipRect,parent,child);
            this._paintClipRect = _SemanticsGeometry._transformRect(this._paintClipRect,parent,child);
            parent.applyPaintTransform(child,this._transform);
        }
        let owner : any = ancestors.first;
        this._rect = op(Op.EQUALS,this._semanticsClipRect,null) ? owner.semanticBounds : this._semanticsClipRect.intersect(owner.semanticBounds);
        if (this._paintClipRect != null) {
            let paintRect : any = this._paintClipRect.intersect(this._rect);
            this._markAsHidden = paintRect.isEmpty && !this._rect.isEmpty;
            if (!this._markAsHidden) this._rect = paintRect;
        }
    }
    static _transformRect(rect : any,parent : any,child : any) : any {
        if (op(Op.EQUALS,rect,null)) return null;
        if (rect.isEmpty) return Rect.zero;
        let transform : lib5.Matrix4 = lib5.Matrix4.identity();
        parent.applyPaintTransform(child,transform);
        return lib6.MatrixUtils.inverseTransformRect(transform,rect);
    }
    static _intersectRects(a : any,b : any) : any {
        if (op(Op.EQUALS,a,null)) return b;
        if (op(Op.EQUALS,b,null)) return a;
        return a.intersect(b);
    }
    get dropFromTree() : boolean {
        return this._rect.isEmpty;
    }
    get markAsHidden() : boolean {
        return this._markAsHidden;
    }
    _markAsHidden : boolean;

}

export namespace _ContainerSemanticsFragment {
    export type Constructors = _SemanticsFragment.Constructors | '_ContainerSemanticsFragment';
    export type Interface = Omit<_ContainerSemanticsFragment, Constructors>;
}
@DartClass
export class _ContainerSemanticsFragment extends _SemanticsFragment {
    constructor(_namedArguments? : {dropsSemanticsOfPreviousSiblings? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ContainerSemanticsFragment(_namedArguments? : {dropsSemanticsOfPreviousSiblings? : boolean}) {
        let {dropsSemanticsOfPreviousSiblings} = Object.assign({
        }, _namedArguments );
        this.interestingFragments = new core.DartList.literal<_InterestingSemanticsFragment>();
        super._SemanticsFragment({
            dropsSemanticsOfPreviousSiblings : dropsSemanticsOfPreviousSiblings});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addAll(fragments : core.DartIterable<_InterestingSemanticsFragment>) : any {
        this.interestingFragments.addAll(fragments);
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    interestingFragments : core.DartList<_InterestingSemanticsFragment>;

}

export namespace _InterestingSemanticsFragment {
    export type Constructors = _SemanticsFragment.Constructors | '_InterestingSemanticsFragment';
    export type Interface = Omit<_InterestingSemanticsFragment, Constructors>;
}
@DartClass
export class _InterestingSemanticsFragment extends _SemanticsFragment {
    constructor(_namedArguments? : {owner? : any,dropsSemanticsOfPreviousSiblings? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _InterestingSemanticsFragment(_namedArguments? : {owner? : any,dropsSemanticsOfPreviousSiblings? : boolean}) {
        let {owner,dropsSemanticsOfPreviousSiblings} = Object.assign({
        }, _namedArguments );
        this._ancestorChain = new core.DartList.literal<any>(this.owner);
        this.assert = assert;
    }
     : any;

    _ancestorChain;
    super;

     : any;

     : any;

    get owner() : any {
        return this._ancestorChain.first;
    }
    _ancestorChain : core.DartList<any>;

    @Abstract
    compileChildren(_namedArguments? : {parentSemanticsClipRect? : any,parentPaintClipRect? : any,elevationAdjustment? : double}) : core.DartIterable<lib11.SemanticsNode>{ throw 'abstract'}
    @AbstractProperty
    get config() : lib11.SemanticsConfiguration{ throw 'abstract'}
    @Abstract
    markAsExplicit() : any{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    addAll(fragments : core.DartIterable<_InterestingSemanticsFragment>) : any{ throw 'abstract'}
    get hasConfigForParent() : boolean {
        return this.config != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get interestingFragments() : core.DartIterable<_InterestingSemanticsFragment> { 
        return core.iter<_InterestingSemanticsFragment>(()=>(function*()  {
            yield this;
        }).call(this));
    }

    _tagsForChildren : core.DartSet<lib11.SemanticsTag>;

    addTags(tags : core.DartIterable<lib11.SemanticsTag>) : any {
        if (tags == null || tags.isEmpty) return;
        this._tagsForChildren = ( this._tagsForChildren ) || ( core.DartSet() );
        this._tagsForChildren.addAll(tags);
    }
    addAncestor(ancestor : any) : any {
        this._ancestorChain.add(ancestor);
    }
}

export namespace _RootSemanticsFragment {
    export type Constructors = _InterestingSemanticsFragment.Constructors | '_RootSemanticsFragment';
    export type Interface = Omit<_RootSemanticsFragment, Constructors>;
}
@DartClass
export class _RootSemanticsFragment extends _InterestingSemanticsFragment {
    constructor(_namedArguments? : {owner? : any,dropsSemanticsOfPreviousSiblings? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RootSemanticsFragment(_namedArguments? : {owner? : any,dropsSemanticsOfPreviousSiblings? : boolean}) {
        let {owner,dropsSemanticsOfPreviousSiblings} = Object.assign({
        }, _namedArguments );
        this._children = new core.DartList.literal<_InterestingSemanticsFragment>();
        super._InterestingSemanticsFragment({
            owner : owner,dropsSemanticsOfPreviousSiblings : dropsSemanticsOfPreviousSiblings});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    compileChildren(_namedArguments? : {parentSemanticsClipRect? : any,parentPaintClipRect? : any,elevationAdjustment? : double}) : core.DartIterable<lib11.SemanticsNode> { 
        return core.iter<lib11.SemanticsNode>(()=>(function*()  {
            let {parentSemanticsClipRect,parentPaintClipRect,elevationAdjustment} = Object.assign({
            }, _namedArguments );
            /* TODO (AssertStatementImpl) : assert (_tagsForChildren == null || _tagsForChildren.isEmpty); */;
            /* TODO (AssertStatementImpl) : assert (parentSemanticsClipRect == null); */;
            /* TODO (AssertStatementImpl) : assert (parentPaintClipRect == null); */;
            /* TODO (AssertStatementImpl) : assert (_ancestorChain.length == 1); */;
            /* TODO (AssertStatementImpl) : assert (elevationAdjustment == 0.0); */;
            this.owner._semantics = ( this.owner._semantics ) || ( lib11.SemanticsNode.root({
                showOnScreen : this.owner.showOnScreen,owner : this.owner.owner.semanticsOwner}) );
            let node : lib11.SemanticsNode = this.owner._semantics;
            /* TODO (AssertStatementImpl) : assert (MatrixUtils.matrixEquals(node.transform, Matrix4.identity())); */;
            /* TODO (AssertStatementImpl) : assert (node.parentSemanticsClipRect == null); */;
            /* TODO (AssertStatementImpl) : assert (node.parentPaintClipRect == null); */;
            node.rect = this.owner.semanticBounds;
            let children : core.DartList<lib11.SemanticsNode> = new core.DartList.literal<lib11.SemanticsNode>();
            for(let fragment of this._children) {
                /* TODO (AssertStatementImpl) : assert (fragment.config == null); */;
                children.addAll(fragment.compileChildren({
                    parentSemanticsClipRect : parentSemanticsClipRect,parentPaintClipRect : parentPaintClipRect,elevationAdjustment : 0.0}));
            }
            node.updateWith({
                config : null,childrenInInversePaintOrder : children});
            /* TODO (AssertStatementImpl) : assert (!node.isInvisible || children.isEmpty); */;
            yield node;
        }).call(this));
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get config() : lib11.SemanticsConfiguration {
        return null;
    }
    _children : core.DartList<_InterestingSemanticsFragment>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    markAsExplicit() : any {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addAll(fragments : core.DartIterable<_InterestingSemanticsFragment>) : any {
        this._children.addAll(fragments);
    }
}

export namespace _SwitchableSemanticsFragment {
    export type Constructors = _InterestingSemanticsFragment.Constructors | '_SwitchableSemanticsFragment';
    export type Interface = Omit<_SwitchableSemanticsFragment, Constructors>;
}
@DartClass
export class _SwitchableSemanticsFragment extends _InterestingSemanticsFragment {
    constructor(_namedArguments? : {mergeIntoParent? : boolean,config? : lib11.SemanticsConfiguration,owner? : any,dropsSemanticsOfPreviousSiblings? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SwitchableSemanticsFragment(_namedArguments? : {mergeIntoParent? : boolean,config? : lib11.SemanticsConfiguration,owner? : any,dropsSemanticsOfPreviousSiblings? : boolean}) {
        let {mergeIntoParent,config,owner,dropsSemanticsOfPreviousSiblings} = Object.assign({
        }, _namedArguments );
        this._isConfigWritable = false;
        this._children = new core.DartList.literal<_InterestingSemanticsFragment>();
        this._isExplicit = false;
        this._mergeIntoParent = mergeIntoParent;
        this._config = config;
        this.assert = assert;
    }
     : any;

     : any;

     : any;

    owner;
    dropsSemanticsOfPreviousSiblings;

     : any;

    _mergeIntoParent : boolean;

    _config : lib11.SemanticsConfiguration;

    _isConfigWritable : boolean;

    _children : core.DartList<_InterestingSemanticsFragment>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    compileChildren(_namedArguments? : {parentSemanticsClipRect? : any,parentPaintClipRect? : any,elevationAdjustment? : double}) : core.DartIterable<lib11.SemanticsNode> { 
        return core.iter<lib11.SemanticsNode>(()=>(function*()  {
            let {parentSemanticsClipRect,parentPaintClipRect,elevationAdjustment} = Object.assign({
            }, _namedArguments );
            if (!this._isExplicit) {
                this.owner._semantics = null;
                for(let fragment of this._children) {
                    /* TODO (AssertStatementImpl) : assert (_ancestorChain.first == fragment._ancestorChain.last); */;
                    fragment._ancestorChain.addAll(this._ancestorChain.sublist(1));
                    yield* fragment.compileChildren({
                        parentSemanticsClipRect : parentSemanticsClipRect,parentPaintClipRect : parentPaintClipRect,elevationAdjustment : elevationAdjustment + this._config.elevation});
                }
                return;
            }
            let geometry : _SemanticsGeometry = this._needsGeometryUpdate ? _SemanticsGeometry({
                parentSemanticsClipRect : parentSemanticsClipRect,parentPaintClipRect : parentPaintClipRect,ancestors : this._ancestorChain}) : null;
            if (!this._mergeIntoParent && (((t)=>(!!t)?t.dropFromTree:null)(geometry) == true)) return;
            this.owner._semantics = ( this.owner._semantics ) || ( lib11.SemanticsNode({
                showOnScreen : this.owner.showOnScreen}) );
            let node : lib11.SemanticsNode = ((_) : any =>  {
                {
                    _.isMergedIntoParent = this._mergeIntoParent;
                    _.tags = this._tagsForChildren;
                    return _;
                }
            })(this.owner._semantics);
            node.elevationAdjustment = elevationAdjustment;
            if (elevationAdjustment != 0.0) {
                this._ensureConfigIsWritable();
                this._config.elevation += elevationAdjustment;
            }
            if (geometry != null) {
                /* TODO (AssertStatementImpl) : assert (_needsGeometryUpdate); */;
                ((_) : lib11.SemanticsNode =>  {
                    {
                        _.rect = geometry.rect;
                        _.transform = geometry.transform;
                        _.parentSemanticsClipRect = geometry.semanticsClipRect;
                        _.parentPaintClipRect = geometry.paintClipRect;
                        return _;
                    }
                })(node);
                if (!this._mergeIntoParent && geometry.markAsHidden) {
                    this._ensureConfigIsWritable();
                    this._config.isHidden = true;
                }
            }
            let children : core.DartList<lib11.SemanticsNode> = new core.DartList.literal<lib11.SemanticsNode>();
            for(let fragment of this._children) {
                children.addAll(fragment.compileChildren({
                    parentSemanticsClipRect : node.parentSemanticsClipRect,parentPaintClipRect : node.parentPaintClipRect,elevationAdjustment : 0.0}));
            }
            if (this._config.isSemanticBoundary) {
                this.owner.assembleSemanticsNode(node,this._config,children);
            }else {
                node.updateWith({
                    config : this._config,childrenInInversePaintOrder : children});
            }
            yield node;
        }).call(this));
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get config() : lib11.SemanticsConfiguration {
        return this._isExplicit ? null : this._config;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addAll(fragments : core.DartIterable<_InterestingSemanticsFragment>) : any {
        for(let fragment of fragments) {
            this._children.add(fragment);
            if (op(Op.EQUALS,fragment.config,null)) continue;
            this._ensureConfigIsWritable();
            this._config.absorb(fragment.config);
        }
    }
    _ensureConfigIsWritable() : any {
        if (!this._isConfigWritable) {
            this._config = this._config.copy();
            this._isConfigWritable = true;
        }
    }
    _isExplicit : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    markAsExplicit() : any {
        this._isExplicit = true;
    }
    get _needsGeometryUpdate() : boolean {
        return op(Op.GT,this._ancestorChain.length,1);
    }
}

export namespace _AbortingSemanticsFragment {
    export type Constructors = _InterestingSemanticsFragment.Constructors | '_AbortingSemanticsFragment';
    export type Interface = Omit<_AbortingSemanticsFragment, Constructors>;
}
@DartClass
export class _AbortingSemanticsFragment extends _InterestingSemanticsFragment {
    constructor(_namedArguments? : {owner? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AbortingSemanticsFragment(_namedArguments? : {owner? : any}) {
        let {owner} = Object.assign({
        }, _namedArguments );
        super._InterestingSemanticsFragment({
            owner : owner,dropsSemanticsOfPreviousSiblings : false});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get abortsWalk() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get config() : lib11.SemanticsConfiguration {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addAll(fragments : core.DartIterable<_InterestingSemanticsFragment>) : any {
        /* TODO (AssertStatementImpl) : assert (false); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    compileChildren(_namedArguments? : {parentSemanticsClipRect? : any,parentPaintClipRect? : any,elevationAdjustment? : double}) : core.DartIterable<lib11.SemanticsNode> { 
        return core.iter<lib11.SemanticsNode>(()=>(function*()  {
            let {parentSemanticsClipRect,parentPaintClipRect,elevationAdjustment} = Object.assign({
            }, _namedArguments );
            yield this.owner._semantics;
        }).call(this));
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    markAsExplicit() : any {
    }
}

export class properties {
    private static __$_owner : PipelineOwner;
    static get _owner() : PipelineOwner { 
        return this.__$_owner;
    }
    static set _owner(__$value : PipelineOwner)  { 
        this.__$_owner = __$value;
    }

    private static __$listener : any;
    static get listener() : any { 
        return this.__$listener;
    }
    static set listener(__$value : any)  { 
        this.__$listener = __$value;
    }

}
