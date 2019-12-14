/** Library asset:datahedgehog_monitor/lib/lib/rendering/layer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/node";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib5 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/matrix_utils";
import * as collection from "@dart2ts/dart/core";

export namespace Layer {
    export type Constructors = lib3.AbstractNode.Constructors | 'Layer';
    export type Interface = Omit<Layer, Constructors>;
}
@DartClass
@With(any)
export class Layer extends lib3.AbstractNode implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parent() : ContainerLayer {
        return super.parent;
    }
    _needsAddToScene : boolean;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'visibleForTesting',value : {
            arguments : [],namedArguments : {
            }}})
    markNeedsAddToScene() : any {
        this._needsAddToScene = true;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'visibleForTesting',value : {
            arguments : [],namedArguments : {
            }}})
    debugMarkClean() : any {
        /* TODO (AssertStatementImpl) : assert (() {_needsAddToScene = false; return true;}()); */;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    get alwaysNeedsAddToScene() : boolean {
        return false;
    }
    _subtreeNeedsAddToScene : boolean;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'visibleForTesting',value : {
            arguments : [],namedArguments : {
            }}})
    get debugSubtreeNeedsAddToScene() : boolean {
        let result : boolean;
        /* TODO (AssertStatementImpl) : assert (() {result = _subtreeNeedsAddToScene; return true;}()); */;
        return result;
    }
    _engineLayer : any;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'visibleForTesting',value : {
            arguments : [],namedArguments : {
            }}})
    updateSubtreeNeedsAddToScene() : any {
        this._subtreeNeedsAddToScene = this._needsAddToScene || this.alwaysNeedsAddToScene;
    }
    get nextSibling() : Layer {
        return this._nextSibling;
    }
    _nextSibling : Layer;

    get previousSibling() : Layer {
        return this._previousSibling;
    }
    _previousSibling : Layer;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dropChild(child : lib3.AbstractNode) : any {
        this.markNeedsAddToScene();
        super.dropChild(child);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    adoptChild(child : lib3.AbstractNode) : any {
        this.markNeedsAddToScene();
        super.adoptChild(child);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    remove() : any {
        ((_830_)=>(!!_830_)?_830_._removeChild(this):null)(this.parent);
    }
    replaceWith(newLayer : Layer) : any {
        /* TODO (AssertStatementImpl) : assert (parent != null); */;
        /* TODO (AssertStatementImpl) : assert (attached == parent.attached); */;
        /* TODO (AssertStatementImpl) : assert (newLayer.parent == null); */;
        /* TODO (AssertStatementImpl) : assert (newLayer._nextSibling == null); */;
        /* TODO (AssertStatementImpl) : assert (newLayer._previousSibling == null); */;
        /* TODO (AssertStatementImpl) : assert (!newLayer.attached); */;
        newLayer._nextSibling = this.nextSibling;
        if (this._nextSibling != null) this._nextSibling._previousSibling = newLayer;
        newLayer._previousSibling = this.previousSibling;
        if (this._previousSibling != null) this._previousSibling._nextSibling = newLayer;
        /* TODO (AssertStatementImpl) : assert (() {Layer node = this; while (node.parent != null) node = node.parent; assert (node != newLayer); return true;}()); */;
        this.parent.adoptChild(newLayer);
        /* TODO (AssertStatementImpl) : assert (newLayer.attached == parent.attached); */;
        if (op(Op.EQUALS,this.parent.firstChild,this)) this.parent._firstChild = newLayer;
        if (op(Op.EQUALS,this.parent.lastChild,this)) this.parent._lastChild = newLayer;
        this._nextSibling = null;
        this._previousSibling = null;
        this.parent.dropChild(this);
        /* TODO (AssertStatementImpl) : assert (!attached); */;
    }
    @Abstract
    find<S>(regionOffset : any) : S{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    addToScene(builder : any,layerOffset? : any) : any{ throw 'abstract'}
    _addToSceneWithRetainedRendering(builder : any) : any {
        if (!this._subtreeNeedsAddToScene && this._engineLayer != null) {
            builder.addRetained(this._engineLayer);
            return;
        }
        this._engineLayer = this.addToScene(builder);
        this._needsAddToScene = false;
    }
    debugCreator : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toStringShort() : string {
        return `${super.toStringShort()}${op(Op.EQUALS,this.owner,null) ? " DETACHED" : ""}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib4.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib4.DiagnosticsProperty('owner',this.owner,{
            level : this.parent != null ? lib4.DiagnosticLevel.hidden : lib4.DiagnosticLevel.info,defaultValue : null}));
        properties.add(lib4.DiagnosticsProperty('creator',this.debugCreator,{
            defaultValue : null,level : lib4.DiagnosticLevel.debug}));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Layer() {
        this._needsAddToScene = true;
    }
}

export namespace LayerLink {
    export type Constructors = 'LayerLink';
    export type Interface = Omit<LayerLink, Constructors>;
}
@DartClass
export class LayerLink {
    get leader() : LeaderLayer {
        return this._leader;
    }
    _leader : LeaderLayer;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${lib4.describeIdentity(this)}(${this._leader != null ? "<linked>" : "<dangling>"})`;
    }
    constructor() {
    }
    @defaultConstructor
    LayerLink() {
    }
}

export namespace PictureLayer {
    export type Constructors = Layer.Constructors | 'PictureLayer';
    export type Interface = Omit<PictureLayer, Constructors>;
}
@DartClass
export class PictureLayer extends Layer {
    constructor(canvasBounds : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PictureLayer(canvasBounds : any) {
        this._isComplexHint = false;
        this._willChangeHint = false;
        this.canvasBounds = canvasBounds;
    }
    canvasBounds : any;

    get picture() : any {
        return this._picture;
    }
    _picture : any;

    set picture(picture : any) {
        this._needsAddToScene = true;
        this._picture = picture;
    }
    get isComplexHint() : boolean {
        return this._isComplexHint;
    }
    _isComplexHint : boolean;

    set isComplexHint(value : boolean) {
        if (value != this._isComplexHint) {
            this._isComplexHint = value;
            this.markNeedsAddToScene();
        }
    }
    get willChangeHint() : boolean {
        return this._willChangeHint;
    }
    _willChangeHint : boolean;

    set willChangeHint(value : boolean) {
        if (value != this._willChangeHint) {
            this._willChangeHint = value;
            this.markNeedsAddToScene();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addToScene(builder : any,layerOffset? : any) : any {
        layerOffset = layerOffset || Offset.zero;
        builder.addPicture(layerOffset,this.picture,{
            isComplexHint : this.isComplexHint,willChangeHint : this.willChangeHint});
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib4.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib4.DiagnosticsProperty('paint bounds',this.canvasBounds));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    find<S>(regionOffset : any) : S {
        return null;
    }
}

export namespace TextureLayer {
    export type Constructors = Layer.Constructors | 'TextureLayer';
    export type Interface = Omit<TextureLayer, Constructors>;
}
@DartClass
export class TextureLayer extends Layer {
    constructor(_namedArguments? : {rect? : any,textureId? : number,freeze? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TextureLayer(_namedArguments? : {rect? : any,textureId? : number,freeze? : boolean}) {
        let {rect,textureId,freeze} = Object.assign({
            "freeze" : false}, _namedArguments );
        this.assert = assert;
        this.rect = rect;
        this.textureId = textureId;
        this.freeze = freeze;
    }
     : any;

     : any;

    rect : any;

    textureId : number;

    freeze : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addToScene(builder : any,layerOffset? : any) : any {
        layerOffset = layerOffset || Offset.zero;
        let shiftedRect : any = this.rect.shift(layerOffset);
        builder.addTexture(this.textureId,{
            offset : shiftedRect.topLeft,width : shiftedRect.width,height : shiftedRect.height,freeze : this.freeze});
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    find<S>(regionOffset : any) : S {
        return null;
    }
}

export namespace PlatformViewLayer {
    export type Constructors = Layer.Constructors | 'PlatformViewLayer';
    export type Interface = Omit<PlatformViewLayer, Constructors>;
}
@DartClass
export class PlatformViewLayer extends Layer {
    constructor(_namedArguments? : {rect? : any,viewId? : number}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PlatformViewLayer(_namedArguments? : {rect? : any,viewId? : number}) {
        let {rect,viewId} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.rect = rect;
        this.viewId = viewId;
    }
     : any;

     : any;

    rect : any;

    viewId : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addToScene(builder : any,layerOffset? : any) : any {
        layerOffset = layerOffset || Offset.zero;
        let shiftedRect : any = this.rect.shift(layerOffset);
        builder.addPlatformView(this.viewId,{
            offset : shiftedRect.topLeft,width : shiftedRect.width,height : shiftedRect.height});
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    find<S>(regionOffset : any) : S {
        return null;
    }
}

export namespace PerformanceOverlayLayer {
    export type Constructors = Layer.Constructors | 'PerformanceOverlayLayer';
    export type Interface = Omit<PerformanceOverlayLayer, Constructors>;
}
@DartClass
export class PerformanceOverlayLayer extends Layer {
    constructor(_namedArguments? : {overlayRect? : any,optionsMask? : number,rasterizerThreshold? : number,checkerboardRasterCacheImages? : boolean,checkerboardOffscreenLayers? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PerformanceOverlayLayer(_namedArguments? : {overlayRect? : any,optionsMask? : number,rasterizerThreshold? : number,checkerboardRasterCacheImages? : boolean,checkerboardOffscreenLayers? : boolean}) {
        let {overlayRect,optionsMask,rasterizerThreshold,checkerboardRasterCacheImages,checkerboardOffscreenLayers} = Object.assign({
        }, _namedArguments );
        this._overlayRect = overlayRect;
        this.optionsMask = optionsMask;
        this.rasterizerThreshold = rasterizerThreshold;
        this.checkerboardRasterCacheImages = checkerboardRasterCacheImages;
        this.checkerboardOffscreenLayers = checkerboardOffscreenLayers;
    }
    get overlayRect() : any {
        return this._overlayRect;
    }
    _overlayRect : any;

    set overlayRect(value : any) {
        if (value != this._overlayRect) {
            this._overlayRect = value;
            this.markNeedsAddToScene();
        }
    }
    optionsMask : number;

    rasterizerThreshold : number;

    checkerboardRasterCacheImages : boolean;

    checkerboardOffscreenLayers : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addToScene(builder : any,layerOffset? : any) : any {
        layerOffset = layerOffset || Offset.zero;
        /* TODO (AssertStatementImpl) : assert (optionsMask != null); */;
        builder.addPerformanceOverlay(this.optionsMask,this.overlayRect.shift(layerOffset));
        builder.setRasterizerTracingThreshold(this.rasterizerThreshold);
        builder.setCheckerboardRasterCacheImages(this.checkerboardRasterCacheImages);
        builder.setCheckerboardOffscreenLayers(this.checkerboardOffscreenLayers);
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    find<S>(regionOffset : any) : S {
        return null;
    }
}

export namespace ContainerLayer {
    export type Constructors = Layer.Constructors | 'ContainerLayer';
    export type Interface = Omit<ContainerLayer, Constructors>;
}
@DartClass
export class ContainerLayer extends Layer {
    get firstChild() : Layer {
        return this._firstChild;
    }
    _firstChild : Layer;

    get lastChild() : Layer {
        return this._lastChild;
    }
    _lastChild : Layer;

    _debugUltimatePreviousSiblingOf(child : Layer,_namedArguments? : {equals? : Layer}) : boolean {
        let {equals} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (child.attached == attached); */;
        while (child.previousSibling != null){
            /* TODO (AssertStatementImpl) : assert (child.previousSibling != child); */;
            child = child.previousSibling;
            /* TODO (AssertStatementImpl) : assert (child.attached == attached); */;
        }
        return op(Op.EQUALS,child,equals);
    }
    _debugUltimateNextSiblingOf(child : Layer,_namedArguments? : {equals? : Layer}) : boolean {
        let {equals} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (child.attached == attached); */;
        while (child._nextSibling != null){
            /* TODO (AssertStatementImpl) : assert (child._nextSibling != child); */;
            child = child._nextSibling;
            /* TODO (AssertStatementImpl) : assert (child.attached == attached); */;
        }
        return op(Op.EQUALS,child,equals);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateSubtreeNeedsAddToScene() : any {
        super.updateSubtreeNeedsAddToScene();
        let child : Layer = this.firstChild;
        while (child != null){
            child.updateSubtreeNeedsAddToScene();
            this._subtreeNeedsAddToScene = this._subtreeNeedsAddToScene || child._subtreeNeedsAddToScene;
            child = child.nextSibling;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    find<S>(regionOffset : any) : S {
        let current : Layer = this.lastChild;
        while (current != null){
            let value : core.DartObject = current.find(regionOffset);
            if (value != null) {
                return value;
            }
            current = current.previousSibling;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    attach(owner : core.DartObject) : any {
        super.attach(owner);
        let child : Layer = this.firstChild;
        while (child != null){
            child.attach(owner);
            child = child.nextSibling;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    detach() : any {
        super.detach();
        let child : Layer = this.firstChild;
        while (child != null){
            child.detach();
            child = child.nextSibling;
        }
    }
    append(child : Layer) : any {
        /* TODO (AssertStatementImpl) : assert (child != this); */;
        /* TODO (AssertStatementImpl) : assert (child != firstChild); */;
        /* TODO (AssertStatementImpl) : assert (child != lastChild); */;
        /* TODO (AssertStatementImpl) : assert (child.parent == null); */;
        /* TODO (AssertStatementImpl) : assert (!child.attached); */;
        /* TODO (AssertStatementImpl) : assert (child.nextSibling == null); */;
        /* TODO (AssertStatementImpl) : assert (child.previousSibling == null); */;
        /* TODO (AssertStatementImpl) : assert (() {Layer node = this; while (node.parent != null) node = node.parent; assert (node != child); return true;}()); */;
        this.adoptChild(child);
        child._previousSibling = this.lastChild;
        if (this.lastChild != null) this.lastChild._nextSibling = child;
        this._lastChild = child;
        this._firstChild = ( this._firstChild ) || ( child );
        /* TODO (AssertStatementImpl) : assert (child.attached == attached); */;
    }
    _removeChild(child : Layer) : any {
        /* TODO (AssertStatementImpl) : assert (child.parent == this); */;
        /* TODO (AssertStatementImpl) : assert (child.attached == attached); */;
        /* TODO (AssertStatementImpl) : assert (_debugUltimatePreviousSiblingOf(child, equals: firstChild)); */;
        /* TODO (AssertStatementImpl) : assert (_debugUltimateNextSiblingOf(child, equals: lastChild)); */;
        if (op(Op.EQUALS,child._previousSibling,null)) {
            /* TODO (AssertStatementImpl) : assert (_firstChild == child); */;
            this._firstChild = child._nextSibling;
        }else {
            child._previousSibling._nextSibling = child.nextSibling;
        }
        if (op(Op.EQUALS,child._nextSibling,null)) {
            /* TODO (AssertStatementImpl) : assert (lastChild == child); */;
            this._lastChild = child.previousSibling;
        }else {
            child.nextSibling._previousSibling = child.previousSibling;
        }
        /* TODO (AssertStatementImpl) : assert ((firstChild == null) == (lastChild == null)); */;
        /* TODO (AssertStatementImpl) : assert (firstChild == null || firstChild.attached == attached); */;
        /* TODO (AssertStatementImpl) : assert (lastChild == null || lastChild.attached == attached); */;
        /* TODO (AssertStatementImpl) : assert (firstChild == null || _debugUltimateNextSiblingOf(firstChild, equals: lastChild)); */;
        /* TODO (AssertStatementImpl) : assert (lastChild == null || _debugUltimatePreviousSiblingOf(lastChild, equals: firstChild)); */;
        child._previousSibling = null;
        child._nextSibling = null;
        this.dropChild(child);
        /* TODO (AssertStatementImpl) : assert (!child.attached); */;
    }
    removeAllChildren() : any {
        let child : Layer = this.firstChild;
        while (child != null){
            let next : Layer = child.nextSibling;
            child._previousSibling = null;
            child._nextSibling = null;
            /* TODO (AssertStatementImpl) : assert (child.attached == attached); */;
            this.dropChild(child);
            child = next;
        }
        this._firstChild = null;
        this._lastChild = null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addToScene(builder : any,layerOffset? : any) : any {
        layerOffset = layerOffset || Offset.zero;
        this.addChildrenToScene(builder,layerOffset);
        return null;
    }
    addChildrenToScene(builder : any,childOffset? : any) : any {
        childOffset = childOffset || Offset.zero;
        let child : Layer = this.firstChild;
        while (child != null){
            if (op(Op.EQUALS,childOffset,Offset.zero)) {
                child._addToSceneWithRetainedRendering(builder);
            }else {
                child.addToScene(builder,childOffset);
            }
            child = child.nextSibling;
        }
    }
    applyTransform(child : Layer,transform : lib5.Matrix4) : any {
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        /* TODO (AssertStatementImpl) : assert (transform != null); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugDescribeChildren() : core.DartList<lib4.DiagnosticsNode> {
        let children : core.DartList<lib4.DiagnosticsNode> = new core.DartList.literal<lib4.DiagnosticsNode>();
        if (op(Op.EQUALS,this.firstChild,null)) return children;
        let child : Layer = this.firstChild;
        let count : number = 1;
        while (true){
            children.add(child.toDiagnosticsNode({
                name : `child ${count}`}));
            if (op(Op.EQUALS,child,this.lastChild)) break;
            count += 1;
            child = child.nextSibling;
        }
        return children;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ContainerLayer() {
    }
}

export namespace OffsetLayer {
    export type Constructors = ContainerLayer.Constructors | 'OffsetLayer';
    export type Interface = Omit<OffsetLayer, Constructors>;
}
@DartClass
export class OffsetLayer extends ContainerLayer {
    constructor(_namedArguments? : {offset? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OffsetLayer(_namedArguments? : {offset? : any}) {
        let {offset} = Object.assign({
            "offset" : Offset.zero}, _namedArguments );
        this._offset = offset;
    }
    get offset() : any {
        return this._offset;
    }
    _offset : any;

    set offset(value : any) {
        if (value != this._offset) {
            this.markNeedsAddToScene();
        }
        this._offset = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    find<S>(regionOffset : any) : S {
        return super.find(op(Op.MINUS,regionOffset,this.offset));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyTransform(child : Layer,transform : lib5.Matrix4) : any {
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        /* TODO (AssertStatementImpl) : assert (transform != null); */;
        transform.multiply(lib5.Matrix4.translationValues(this.offset.dx,this.offset.dy,0.0));
    }
    buildScene(builder : any) : any {
        this.updateSubtreeNeedsAddToScene();
        this.addToScene(builder);
        return builder.build();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addToScene(builder : any,layerOffset? : any) : any {
        layerOffset = layerOffset || Offset.zero;
        let engineLayer : any = builder.pushOffset(op(Op.PLUS,layerOffset.dx,this.offset.dx),op(Op.PLUS,layerOffset.dy,this.offset.dy));
        this.addChildrenToScene(builder);
        builder.pop();
        return engineLayer;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib4.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib4.DiagnosticsProperty('offset',this.offset));
    }
    toImage(bounds : any,_namedArguments? : {pixelRatio? : double}) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let {pixelRatio} = Object.assign({
                "pixelRatio" : 1.0}, _namedArguments );
            /* TODO (AssertStatementImpl) : assert (bounds != null); */;
            /* TODO (AssertStatementImpl) : assert (pixelRatio != null); */;
            let builder : any = ui.SceneBuilder();
            let transform : lib5.Matrix4 = lib5.Matrix4.translationValues(op(Op.TIMES,(op(Op.MINUS,op(Op.NEG,bounds.left),this.offset.dx)),pixelRatio),op(Op.TIMES,(op(Op.MINUS,op(Op.NEG,bounds.top),this.offset.dy)),pixelRatio),0.0);
            transform.scale(pixelRatio,pixelRatio);
            builder.pushTransform(transform.storage);
            let scene : any = this.buildScene(builder);
            try {
                return await scene.toImage(new core.DartDouble((pixelRatio * bounds.width)).ceil(),new core.DartDouble((pixelRatio * bounds.height)).ceil());
            } finally {
                scene.dispose();
            }
        } )());
    }

}

export namespace ClipRectLayer {
    export type Constructors = ContainerLayer.Constructors | 'ClipRectLayer';
    export type Interface = Omit<ClipRectLayer, Constructors>;
}
@DartClass
export class ClipRectLayer extends ContainerLayer {
    constructor(_namedArguments? : {clipRect? : any,clipBehavior? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClipRectLayer(_namedArguments? : {clipRect? : any,clipBehavior? : any}) {
        let {clipRect,clipBehavior} = Object.assign({
            "clipBehavior" : Clip.hardEdge}, _namedArguments );
        this._clipRect = clipRect;
        this._clipBehavior = clipBehavior;
        this.assert = assert;
    }
     : any;

     : any;

     : any;

    get clipRect() : any {
        return this._clipRect;
    }
    _clipRect : any;

    set clipRect(value : any) {
        if (value != this._clipRect) {
            this._clipRect = value;
            this.markNeedsAddToScene();
        }
    }
    get clipBehavior() : any {
        return this._clipBehavior;
    }
    _clipBehavior : any;

    set clipBehavior(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        /* TODO (AssertStatementImpl) : assert (value != Clip.none); */;
        if (value != this._clipBehavior) {
            this._clipBehavior = value;
            this.markNeedsAddToScene();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    find<S>(regionOffset : any) : S {
        if (!this.clipRect.contains(regionOffset)) return null;
        return super.find(regionOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addToScene(builder : any,layerOffset? : any) : any {
        layerOffset = layerOffset || Offset.zero;
        let enabled : boolean = true;
        /* TODO (AssertStatementImpl) : assert (() {enabled = !debugDisableClipLayers; return true;}()); */;
        if (enabled) builder.pushClipRect(this.clipRect.shift(layerOffset),{
            clipBehavior : this.clipBehavior});
        this.addChildrenToScene(builder,layerOffset);
        if (enabled) builder.pop();
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib4.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib4.DiagnosticsProperty('clipRect',this.clipRect));
    }
}

export namespace ClipRRectLayer {
    export type Constructors = ContainerLayer.Constructors | 'ClipRRectLayer';
    export type Interface = Omit<ClipRRectLayer, Constructors>;
}
@DartClass
export class ClipRRectLayer extends ContainerLayer {
    constructor(_namedArguments? : {clipRRect? : any,clipBehavior? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClipRRectLayer(_namedArguments? : {clipRRect? : any,clipBehavior? : any}) {
        let {clipRRect,clipBehavior} = Object.assign({
            "clipBehavior" : Clip.antiAlias}, _namedArguments );
        this._clipRRect = clipRRect;
        this._clipBehavior = clipBehavior;
        this.assert = assert;
    }
     : any;

     : any;

     : any;

    get clipRRect() : any {
        return this._clipRRect;
    }
    _clipRRect : any;

    set clipRRect(value : any) {
        if (value != this._clipRRect) {
            this._clipRRect = value;
            this.markNeedsAddToScene();
        }
    }
    get clipBehavior() : any {
        return this._clipBehavior;
    }
    _clipBehavior : any;

    set clipBehavior(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        /* TODO (AssertStatementImpl) : assert (value != Clip.none); */;
        if (value != this._clipBehavior) {
            this._clipBehavior = value;
            this.markNeedsAddToScene();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    find<S>(regionOffset : any) : S {
        if (!this.clipRRect.contains(regionOffset)) return null;
        return super.find(regionOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addToScene(builder : any,layerOffset? : any) : any {
        layerOffset = layerOffset || Offset.zero;
        let enabled : boolean = true;
        /* TODO (AssertStatementImpl) : assert (() {enabled = !debugDisableClipLayers; return true;}()); */;
        if (enabled) builder.pushClipRRect(this.clipRRect.shift(layerOffset),{
            clipBehavior : this.clipBehavior});
        this.addChildrenToScene(builder,layerOffset);
        if (enabled) builder.pop();
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib4.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib4.DiagnosticsProperty('clipRRect',this.clipRRect));
    }
}

export namespace ClipPathLayer {
    export type Constructors = ContainerLayer.Constructors | 'ClipPathLayer';
    export type Interface = Omit<ClipPathLayer, Constructors>;
}
@DartClass
export class ClipPathLayer extends ContainerLayer {
    constructor(_namedArguments? : {clipPath? : any,clipBehavior? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClipPathLayer(_namedArguments? : {clipPath? : any,clipBehavior? : any}) {
        let {clipPath,clipBehavior} = Object.assign({
            "clipBehavior" : Clip.antiAlias}, _namedArguments );
        this._clipPath = clipPath;
        this._clipBehavior = clipBehavior;
        this.assert = assert;
    }
     : any;

     : any;

     : any;

    get clipPath() : any {
        return this._clipPath;
    }
    _clipPath : any;

    set clipPath(value : any) {
        if (value != this._clipPath) {
            this._clipPath = value;
            this.markNeedsAddToScene();
        }
    }
    get clipBehavior() : any {
        return this._clipBehavior;
    }
    _clipBehavior : any;

    set clipBehavior(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        /* TODO (AssertStatementImpl) : assert (value != Clip.none); */;
        if (value != this._clipBehavior) {
            this._clipBehavior = value;
            this.markNeedsAddToScene();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    find<S>(regionOffset : any) : S {
        if (!this.clipPath.contains(regionOffset)) return null;
        return super.find(regionOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addToScene(builder : any,layerOffset? : any) : any {
        layerOffset = layerOffset || Offset.zero;
        let enabled : boolean = true;
        /* TODO (AssertStatementImpl) : assert (() {enabled = !debugDisableClipLayers; return true;}()); */;
        if (enabled) builder.pushClipPath(this.clipPath.shift(layerOffset),{
            clipBehavior : this.clipBehavior});
        this.addChildrenToScene(builder,layerOffset);
        if (enabled) builder.pop();
        return null;
    }
}

export namespace OpacityLayer {
    export type Constructors = ContainerLayer.Constructors | 'OpacityLayer';
    export type Interface = Omit<OpacityLayer, Constructors>;
}
@DartClass
export class OpacityLayer extends ContainerLayer {
    constructor(_namedArguments? : {alpha? : number,offset? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OpacityLayer(_namedArguments? : {alpha? : number,offset? : any}) {
        let {alpha,offset} = Object.assign({
            "offset" : Offset.zero}, _namedArguments );
        this._alpha = alpha;
        this._offset = offset;
    }
    get alpha() : number {
        return this._alpha;
    }
    _alpha : number;

    set alpha(value : number) {
        if (value != this._alpha) {
            this._alpha = value;
            this.markNeedsAddToScene();
        }
    }
    get offset() : any {
        return this._offset;
    }
    _offset : any;

    set offset(value : any) {
        if (value != this._offset) {
            this._offset = value;
            this.markNeedsAddToScene();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addToScene(builder : any,layerOffset? : any) : any {
        layerOffset = layerOffset || Offset.zero;
        let enabled : boolean = true;
        /* TODO (AssertStatementImpl) : assert (() {enabled = !debugDisableOpacityLayers; return true;}()); */;
        if (enabled) builder.pushOpacity(this.alpha,{
            offset : op(Op.PLUS,this.offset,layerOffset)});
        this.addChildrenToScene(builder);
        if (enabled) builder.pop();
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib4.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib4.IntProperty('alpha',this.alpha));
        properties.add(lib4.DiagnosticsProperty('offset',this.offset));
    }
}

export namespace ShaderMaskLayer {
    export type Constructors = ContainerLayer.Constructors | 'ShaderMaskLayer';
    export type Interface = Omit<ShaderMaskLayer, Constructors>;
}
@DartClass
export class ShaderMaskLayer extends ContainerLayer {
    constructor(_namedArguments? : {shader? : any,maskRect? : any,blendMode? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ShaderMaskLayer(_namedArguments? : {shader? : any,maskRect? : any,blendMode? : any}) {
        let {shader,maskRect,blendMode} = Object.assign({
        }, _namedArguments );
        this._shader = shader;
        this._maskRect = maskRect;
        this._blendMode = blendMode;
    }
    get shader() : any {
        return this._shader;
    }
    _shader : any;

    set shader(value : any) {
        if (value != this._shader) {
            this._shader = value;
            this.markNeedsAddToScene();
        }
    }
    get maskRect() : any {
        return this._maskRect;
    }
    _maskRect : any;

    set maskRect(value : any) {
        if (value != this._maskRect) {
            this._maskRect = value;
            this.markNeedsAddToScene();
        }
    }
    get blendMode() : any {
        return this._blendMode;
    }
    _blendMode : any;

    set blendMode(value : any) {
        if (value != this._blendMode) {
            this._blendMode = value;
            this.markNeedsAddToScene();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addToScene(builder : any,layerOffset? : any) : any {
        layerOffset = layerOffset || Offset.zero;
        builder.pushShaderMask(this.shader,this.maskRect.shift(layerOffset),this.blendMode);
        this.addChildrenToScene(builder,layerOffset);
        builder.pop();
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib4.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib4.DiagnosticsProperty('shader',this.shader));
        properties.add(lib4.DiagnosticsProperty('maskRect',this.maskRect));
        properties.add(lib4.DiagnosticsProperty('blendMode',this.blendMode));
    }
}

export namespace BackdropFilterLayer {
    export type Constructors = ContainerLayer.Constructors | 'BackdropFilterLayer';
    export type Interface = Omit<BackdropFilterLayer, Constructors>;
}
@DartClass
export class BackdropFilterLayer extends ContainerLayer {
    constructor(_namedArguments? : {filter? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BackdropFilterLayer(_namedArguments? : {filter? : any}) {
        let {filter} = Object.assign({
        }, _namedArguments );
        this._filter = filter;
    }
    get filter() : any {
        return this._filter;
    }
    _filter : any;

    set filter(value : any) {
        if (value != this._filter) {
            this._filter = value;
            this.markNeedsAddToScene();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addToScene(builder : any,layerOffset? : any) : any {
        layerOffset = layerOffset || Offset.zero;
        builder.pushBackdropFilter(this.filter);
        this.addChildrenToScene(builder,layerOffset);
        builder.pop();
        return null;
    }
}

export namespace PhysicalModelLayer {
    export type Constructors = ContainerLayer.Constructors | 'PhysicalModelLayer';
    export type Interface = Omit<PhysicalModelLayer, Constructors>;
}
@DartClass
export class PhysicalModelLayer extends ContainerLayer {
    constructor(_namedArguments? : {clipPath? : any,clipBehavior? : any,elevation? : double,color? : any,shadowColor? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PhysicalModelLayer(_namedArguments? : {clipPath? : any,clipBehavior? : any,elevation? : double,color? : any,shadowColor? : any}) {
        let {clipPath,clipBehavior,elevation,color,shadowColor} = Object.assign({
            "clipBehavior" : Clip.none}, _namedArguments );
        this._clipPath = this.clipPath;
        this._clipBehavior = this.clipBehavior;
        this._elevation = this.elevation;
        this._color = this.color;
        this._shadowColor = this.shadowColor;
        this.assert = assert;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    _clipPath;
    _clipBehavior;
    _elevation;
    _color;
    _shadowColor;

    get clipPath() : any {
        return this._clipPath;
    }
    _clipPath : any;

    set clipPath(value : any) {
        if (value != this._clipPath) {
            this._clipPath = value;
            this.markNeedsAddToScene();
        }
    }
    get clipBehavior() : any {
        return this._clipBehavior;
    }
    _clipBehavior : any;

    set clipBehavior(value : any) {
        if (value != this._clipBehavior) {
            this._clipBehavior = value;
            this.markNeedsAddToScene();
        }
    }
    get elevation() : double {
        return this._elevation;
    }
    _elevation : double;

    set elevation(value : double) {
        if (value != this._elevation) {
            this._elevation = value;
            this.markNeedsAddToScene();
        }
    }
    get color() : any {
        return this._color;
    }
    _color : any;

    set color(value : any) {
        if (value != this._color) {
            this._color = value;
            this.markNeedsAddToScene();
        }
    }
    get shadowColor() : any {
        return this._shadowColor;
    }
    _shadowColor : any;

    set shadowColor(value : any) {
        if (value != this._shadowColor) {
            this._shadowColor = value;
            this.markNeedsAddToScene();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    find<S>(regionOffset : any) : S {
        if (!this.clipPath.contains(regionOffset)) return null;
        return super.find(regionOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addToScene(builder : any,layerOffset? : any) : any {
        layerOffset = layerOffset || Offset.zero;
        let engineLayer : any;
        let enabled : boolean = true;
        /* TODO (AssertStatementImpl) : assert (() {enabled = !debugDisablePhysicalShapeLayers; return true;}()); */;
        if (enabled) {
            engineLayer = builder.pushPhysicalShape({
                path : this.clipPath.shift(layerOffset),elevation : this.elevation,color : this.color,shadowColor : this.shadowColor,clipBehavior : this.clipBehavior});
        }
        this.addChildrenToScene(builder,layerOffset);
        if (enabled) builder.pop();
        return engineLayer;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib4.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib4.DoubleProperty('elevation',this.elevation));
        properties.add(lib4.DiagnosticsProperty('color',this.color));
    }
}

export namespace LeaderLayer {
    export type Constructors = ContainerLayer.Constructors | 'LeaderLayer';
    export type Interface = Omit<LeaderLayer, Constructors>;
}
@DartClass
export class LeaderLayer extends ContainerLayer {
    constructor(_namedArguments? : {link? : LayerLink,offset? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LeaderLayer(_namedArguments? : {link? : LayerLink,offset? : any}) {
        let {link,offset} = Object.assign({
            "offset" : Offset.zero}, _namedArguments );
        this.assert = assert;
        this.link = link;
        this.offset = offset;
    }
     : any;

    link : LayerLink;

    offset : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get alwaysNeedsAddToScene() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    attach(owner : core.DartObject) : any {
        super.attach(owner);
        /* TODO (AssertStatementImpl) : assert (link.leader == null); */;
        this._lastOffset = null;
        this.link._leader = this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    detach() : any {
        /* TODO (AssertStatementImpl) : assert (link.leader == this); */;
        this.link._leader = null;
        this._lastOffset = null;
        super.detach();
    }
    _lastOffset : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    find<S>(regionOffset : any) : S {
        return super.find(op(Op.MINUS,regionOffset,this.offset));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addToScene(builder : any,layerOffset? : any) : any {
        layerOffset = layerOffset || Offset.zero;
        /* TODO (AssertStatementImpl) : assert (offset != null); */;
        this._lastOffset = op(Op.PLUS,this.offset,layerOffset);
        if (this._lastOffset != Offset.zero) builder.pushTransform(lib5.Matrix4.translationValues(this._lastOffset.dx,this._lastOffset.dy,0.0).storage);
        this.addChildrenToScene(builder);
        if (this._lastOffset != Offset.zero) builder.pop();
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyTransform(child : Layer,transform : lib5.Matrix4) : any {
        /* TODO (AssertStatementImpl) : assert (_lastOffset != null); */;
        if (this._lastOffset != Offset.zero) transform.translate(this._lastOffset.dx,this._lastOffset.dy);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib4.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib4.DiagnosticsProperty('offset',this.offset));
        properties.add(lib4.DiagnosticsProperty('link',this.link));
    }
}

export namespace FollowerLayer {
    export type Constructors = ContainerLayer.Constructors | 'FollowerLayer';
    export type Interface = Omit<FollowerLayer, Constructors>;
}
@DartClass
export class FollowerLayer extends ContainerLayer {
    constructor(_namedArguments? : {link? : LayerLink,showWhenUnlinked? : boolean,unlinkedOffset? : any,linkedOffset? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FollowerLayer(_namedArguments? : {link? : LayerLink,showWhenUnlinked? : boolean,unlinkedOffset? : any,linkedOffset? : any}) {
        let {link,showWhenUnlinked,unlinkedOffset,linkedOffset} = Object.assign({
            "showWhenUnlinked" : true,
            "unlinkedOffset" : Offset.zero,
            "linkedOffset" : Offset.zero}, _namedArguments );
        this._inverseDirty = true;
        this.assert = assert;
        this.link = link;
        this.showWhenUnlinked = showWhenUnlinked;
        this.unlinkedOffset = unlinkedOffset;
        this.linkedOffset = linkedOffset;
    }
     : any;

    link : LayerLink;

    showWhenUnlinked : boolean;

    unlinkedOffset : any;

    linkedOffset : any;

    _lastOffset : any;

    _lastTransform : lib5.Matrix4;

    _invertedTransform : lib5.Matrix4;

    _inverseDirty : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    find<S>(regionOffset : any) : S {
        if (op(Op.EQUALS,this.link.leader,null)) {
            return this.showWhenUnlinked ? super.find(op(Op.MINUS,regionOffset,this.unlinkedOffset)) : null;
        }
        if (this._inverseDirty) {
            this._invertedTransform = lib5.Matrix4.tryInvert(this.getLastTransform());
            this._inverseDirty = false;
        }
        if (op(Op.EQUALS,this._invertedTransform,null)) return null;
        let vector : lib5.Vector4 = lib5.Vector4(regionOffset.dx,regionOffset.dy,0.0,1.0);
        let result : lib5.Vector4 = this._invertedTransform.transform(vector);
        return super.find(Offset(op(Op.INDEX,result,0) - this.linkedOffset.dx,op(Op.INDEX,result,1) - this.linkedOffset.dy));
    }
    getLastTransform() : lib5.Matrix4 {
        if (op(Op.EQUALS,this._lastTransform,null)) return null;
        let result : lib5.Matrix4 = lib5.Matrix4.translationValues(op(Op.NEG,this._lastOffset.dx),op(Op.NEG,this._lastOffset.dy),0.0);
        result.multiply(this._lastTransform);
        return result;
    }
    _collectTransformForLayerChain(layers : core.DartList<ContainerLayer>) : lib5.Matrix4 {
        let result : lib5.Matrix4 = lib5.Matrix4.identity();
        for(let index : number = layers.length - 1; index > 0; index -= 1)layers[index].applyTransform(layers[index - 1],result);
        return result;
    }
    _establishTransform() : any {
        /* TODO (AssertStatementImpl) : assert (link != null); */;
        this._lastTransform = null;
        if (op(Op.EQUALS,this.link.leader,null)) return;
        /* TODO (AssertStatementImpl) : assert (link.leader.owner == owner, 'Linked LeaderLayer anchor is not in the same layer tree as the FollowerLayer.'); */;
        /* TODO (AssertStatementImpl) : assert (link.leader._lastOffset != null, 'LeaderLayer anchor must come before FollowerLayer in paint order, but the reverse was true.'); */;
        let ancestors : core.DartSet<Layer> = core.DartHashSet();
        let ancestor : Layer = this.parent;
        while (ancestor != null){
            ancestors.add(ancestor);
            ancestor = ancestor.parent;
        }
        let layer : ContainerLayer = this.link.leader;
        let forwardLayers : core.DartList<ContainerLayer> = new core.DartList.literal<ContainerLayer>(null,layer);
        do{
            layer = layer.parent;
            forwardLayers.add(layer);
        } while (!ancestors.contains(layer));
        ancestor = layer;
        layer = this;
        let inverseLayers : core.DartList<ContainerLayer> = new core.DartList.literal<ContainerLayer>(layer);
        do{
            layer = layer.parent;
            inverseLayers.add(layer);
        } while (layer != ancestor);
        let forwardTransform : lib5.Matrix4 = this._collectTransformForLayerChain(forwardLayers);
        let inverseTransform : lib5.Matrix4 = this._collectTransformForLayerChain(inverseLayers);
        if (inverseTransform.invert() == 0.0) {
            return;
        }
        inverseTransform.multiply(forwardTransform);
        inverseTransform.translate(this.linkedOffset.dx,this.linkedOffset.dy);
        this._lastTransform = inverseTransform;
        this._inverseDirty = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get alwaysNeedsAddToScene() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addToScene(builder : any,layerOffset? : any) : any {
        layerOffset = layerOffset || Offset.zero;
        /* TODO (AssertStatementImpl) : assert (link != null); */;
        /* TODO (AssertStatementImpl) : assert (showWhenUnlinked != null); */;
        if (op(Op.EQUALS,this.link.leader,null) && !this.showWhenUnlinked) {
            this._lastTransform = null;
            this._lastOffset = null;
            this._inverseDirty = true;
            return null;
        }
        this._establishTransform();
        if (this._lastTransform != null) {
            builder.pushTransform(this._lastTransform.storage);
            this.addChildrenToScene(builder);
            builder.pop();
            this._lastOffset = op(Op.PLUS,this.unlinkedOffset,layerOffset);
        }else {
            this._lastOffset = null;
            let matrix : lib5.Matrix4 = lib5.Matrix4.translationValues(this.unlinkedOffset.dx,this.unlinkedOffset.dy,0.0);
            builder.pushTransform(matrix.storage);
            this.addChildrenToScene(builder);
            builder.pop();
        }
        this._inverseDirty = true;
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyTransform(child : Layer,transform : lib5.Matrix4) : any {
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        /* TODO (AssertStatementImpl) : assert (transform != null); */;
        if (this._lastTransform != null) {
            transform.multiply(this._lastTransform);
        }else {
            transform.multiply(lib5.Matrix4.translationValues(this.unlinkedOffset.dx,this.unlinkedOffset.dy,0.0));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib4.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib4.DiagnosticsProperty('link',this.link));
        properties.add(lib6.TransformProperty('transform',this.getLastTransform(),{
            defaultValue : null}));
    }
}

export namespace AnnotatedRegionLayer {
    export type Constructors = ContainerLayer.Constructors | 'AnnotatedRegionLayer';
    export type Interface<T> = Omit<AnnotatedRegionLayer<T>, Constructors>;
}
@DartClass
export class AnnotatedRegionLayer<T> extends ContainerLayer {
    constructor(value : T,_namedArguments? : {size? : any,offset? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnnotatedRegionLayer(value : T,_namedArguments? : {size? : any,offset? : any}) {
        let {size,offset} = Object.assign({
        }, _namedArguments );
        this.offset = (offset || Offset.zero);
        this.assert = assert;
        this.value = value;
        this.size = size;
    }
     : any;

    value : T;

    size : any;

    offset : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    find<S>(regionOffset : any) : S {
        let result : S = super.find(regionOffset);
        if (result != null) return result;
        if (this.size != null && !(op(Op.BITAND,this.offset,this.size)).contains(regionOffset)) return null;
        if (op(Op.EQUALS,T,S)) {
            let untypedResult : core.DartObject = this.value;
            let typedResult : S = untypedResult;
            return typedResult;
        }
        return super.find(regionOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib4.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib4.DiagnosticsProperty('value',this.value));
        properties.add(lib4.DiagnosticsProperty('size',this.size,{
            defaultValue : null}));
        properties.add(lib4.DiagnosticsProperty('offset',this.offset,{
            defaultValue : null}));
    }
}

export namespace TransformLayer {
    export type Constructors = OffsetLayer.Constructors | 'TransformLayer';
    export type Interface = Omit<TransformLayer, Constructors>;
}
@DartClass
export class TransformLayer extends OffsetLayer {
    constructor(_namedArguments? : {transform? : lib5.Matrix4,offset? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TransformLayer(_namedArguments? : {transform? : lib5.Matrix4,offset? : any}) {
        let {transform,offset} = Object.assign({
            "offset" : Offset.zero}, _namedArguments );
        this._inverseDirty = true;
        this._transform = transform;
        super.OffsetLayer({
            offset : offset});
    }
    get transform() : lib5.Matrix4 {
        return this._transform;
    }
    _transform : lib5.Matrix4;

    set transform(value : lib5.Matrix4) {
        if (op(Op.EQUALS,value,this._transform)) return;
        this._transform = value;
        this._inverseDirty = true;
    }
    _lastEffectiveTransform : lib5.Matrix4;

    _invertedTransform : lib5.Matrix4;

    _inverseDirty : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addToScene(builder : any,layerOffset? : any) : any {
        layerOffset = layerOffset || Offset.zero;
        this._lastEffectiveTransform = this.transform;
        let totalOffset : any = op(Op.PLUS,this.offset,layerOffset);
        if (totalOffset != Offset.zero) {
            this._lastEffectiveTransform = ((_) : any =>  {
                {
                    multiply(this._lastEffectiveTransform);
                    return _;
                }
            })(lib5.Matrix4.translationValues(totalOffset.dx,totalOffset.dy,0.0));
        }
        builder.pushTransform(this._lastEffectiveTransform.storage);
        this.addChildrenToScene(builder);
        builder.pop();
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    find<S>(regionOffset : any) : S {
        if (this._inverseDirty) {
            this._invertedTransform = lib5.Matrix4.tryInvert(this.transform);
            this._inverseDirty = false;
        }
        if (op(Op.EQUALS,this._invertedTransform,null)) return null;
        let vector : lib5.Vector4 = lib5.Vector4(regionOffset.dx,regionOffset.dy,0.0,1.0);
        let result : lib5.Vector4 = this._invertedTransform.transform(vector);
        return super.find(Offset(op(Op.INDEX,result,0),op(Op.INDEX,result,1)));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyTransform(child : Layer,transform : lib5.Matrix4) : any {
        /* TODO (AssertStatementImpl) : assert (child != null); */;
        /* TODO (AssertStatementImpl) : assert (transform != null); */;
        transform.multiply(this._lastEffectiveTransform);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib4.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib6.TransformProperty('transform',this.transform));
    }
}

export class properties {
}
