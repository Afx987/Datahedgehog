/** Library asset:datahedgehog_monitor/lib/lib/rendering/custom_paint.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/change_notifier";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/semantics/semantics";
import * as lib7 from "@dart2ts.packages/vector_math/lib/vector_math_64";
import * as lib8 from "./proxy_box";
import * as lib9 from "./object";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";

export namespace CustomPainter {
    export type Constructors = lib3.Listenable.Constructors | 'CustomPainter';
    export type Interface = Omit<CustomPainter, Constructors>;
}
@DartClass
export class CustomPainter extends lib3.Listenable {
    constructor(_namedArguments? : {repaint? : lib3.Listenable}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CustomPainter(_namedArguments? : {repaint? : lib3.Listenable}) {
        let {repaint} = Object.assign({
        }, _namedArguments );
        this._repaint = repaint;
    }
    _repaint : lib3.Listenable;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addListener(listener : any) : any {
        return ((_817_)=>(!!_817_)?_817_.addListener(listener):null)(this._repaint);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeListener(listener : any) : any {
        return ((_818_)=>(!!_818_)?_818_.removeListener(listener):null)(this._repaint);
    }
    @Abstract
    paint(canvas : any,size : any) : any{ throw 'abstract'}
    get semanticsBuilder() : (size : any) => core.DartList<CustomPainterSemantics> {
        return null;
    }
    shouldRebuildSemantics(oldDelegate : CustomPainter) : boolean {
        return this.shouldRepaint(oldDelegate);
    }
    @Abstract
    shouldRepaint(oldDelegate : CustomPainter) : boolean{ throw 'abstract'}
    hitTest(position : any) : boolean {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${lib4.describeIdentity(this)}(${(((_819_)=>(!!_819_)?_819_.toString():null)(this._repaint) || "")})`;
    }
}

export namespace CustomPainterSemantics {
    export type Constructors = 'CustomPainterSemantics';
    export type Interface = Omit<CustomPainterSemantics, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class CustomPainterSemantics {
    constructor(_namedArguments? : {key? : lib5.Key,rect? : any,properties? : lib6.SemanticsProperties,transform? : lib7.Matrix4,tags? : core.DartSet<lib6.SemanticsTag>}) {
    }
    @defaultConstructor
    CustomPainterSemantics(_namedArguments? : {key? : lib5.Key,rect? : any,properties? : lib6.SemanticsProperties,transform? : lib7.Matrix4,tags? : core.DartSet<lib6.SemanticsTag>}) {
        let {key,rect,properties,transform,tags} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.key = key;
        this.rect = rect;
        this.properties = properties;
        this.transform = transform;
        this.tags = tags;
    }
     : any;

     : any;

    key : lib5.Key;

    rect : any;

    transform : lib7.Matrix4;

    properties : lib6.SemanticsProperties;

    tags : core.DartSet<lib6.SemanticsTag>;

}

export namespace RenderCustomPaint {
    export type Constructors = lib8.RenderProxyBox.Constructors | 'RenderCustomPaint';
    export type Interface = Omit<RenderCustomPaint, Constructors>;
}
@DartClass
export class RenderCustomPaint extends lib8.RenderProxyBox {
    constructor(_namedArguments? : {painter? : CustomPainter,foregroundPainter? : CustomPainter,preferredSize? : any,isComplex? : boolean,willChange? : boolean,child? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderCustomPaint(_namedArguments? : {painter? : CustomPainter,foregroundPainter? : CustomPainter,preferredSize? : any,isComplex? : boolean,willChange? : boolean,child? : any}) {
        let {painter,foregroundPainter,preferredSize,isComplex,willChange,child} = Object.assign({
            "preferredSize" : Size.zero,
            "isComplex" : false,
            "willChange" : false}, _namedArguments );
        this._painter = this.painter;
        this._foregroundPainter = this.foregroundPainter;
        this._preferredSize = this.preferredSize;
        this.assert = assert;
        this.isComplex = isComplex;
        this.willChange = willChange;
    }
     : any;

    _painter;
    _foregroundPainter;
    _preferredSize;
    super;

     : any;

    get painter() : CustomPainter {
        return this._painter;
    }
    _painter : CustomPainter;

    set painter(value : CustomPainter) {
        if (op(Op.EQUALS,this._painter,value)) return;
        let oldPainter : CustomPainter = this._painter;
        this._painter = value;
        this._didUpdatePainter(this._painter,oldPainter);
    }
    get foregroundPainter() : CustomPainter {
        return this._foregroundPainter;
    }
    _foregroundPainter : CustomPainter;

    set foregroundPainter(value : CustomPainter) {
        if (op(Op.EQUALS,this._foregroundPainter,value)) return;
        let oldPainter : CustomPainter = this._foregroundPainter;
        this._foregroundPainter = value;
        this._didUpdatePainter(this._foregroundPainter,oldPainter);
    }
    _didUpdatePainter(newPainter : CustomPainter,oldPainter : CustomPainter) : any {
        if (op(Op.EQUALS,newPainter,null)) {
            /* TODO (AssertStatementImpl) : assert (oldPainter != null); */;
            markNeedsPaint();
        }else if (op(Op.EQUALS,oldPainter,null) || newPainter.runtimeType != oldPainter.runtimeType || newPainter.shouldRepaint(oldPainter)) {
            markNeedsPaint();
        }
        if (attached) {
            ((_820_)=>(!!_820_)?_820_.removeListener(markNeedsPaint):null)(oldPainter);
            ((_821_)=>(!!_821_)?_821_.addListener(markNeedsPaint):null)(newPainter);
        }
        if (op(Op.EQUALS,newPainter,null)) {
            /* TODO (AssertStatementImpl) : assert (oldPainter != null); */;
            if (attached) markNeedsSemanticsUpdate();
        }else if (op(Op.EQUALS,oldPainter,null) || newPainter.runtimeType != oldPainter.runtimeType || newPainter.shouldRebuildSemantics(oldPainter)) {
            markNeedsSemanticsUpdate();
        }
    }
    get preferredSize() : any {
        return this._preferredSize;
    }
    _preferredSize : any;

    set preferredSize(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,this.preferredSize,value)) return;
        this._preferredSize = value;
        markNeedsLayout();
    }
    isComplex : boolean;

    willChange : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    attach(owner : lib9.PipelineOwner) : any {
        super.attach(owner);
        ((_822_)=>(!!_822_)?_822_.addListener(markNeedsPaint):null)(this._painter);
        ((_823_)=>(!!_823_)?_823_.addListener(markNeedsPaint):null)(this._foregroundPainter);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    detach() : any {
        ((_824_)=>(!!_824_)?_824_.removeListener(markNeedsPaint):null)(this._painter);
        ((_825_)=>(!!_825_)?_825_.removeListener(markNeedsPaint):null)(this._foregroundPainter);
        super.detach();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestChildren(result : lib10.HitTestResult,_namedArguments? : {position? : any}) : boolean {
        let {position} = Object.assign({
        }, _namedArguments );
        if (this._foregroundPainter != null && ((this._foregroundPainter.hitTest(position) || false))) return true;
        return super.hitTestChildren(result,{
            position : position});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestSelf(position : any) : boolean {
        return this._painter != null && ((this._painter.hitTest(position) || true));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performResize() : any {
        size = constraints.constrain(this.preferredSize);
        markNeedsSemanticsUpdate();
    }
    _paintWithPainter(canvas : any,offset : any,painter : CustomPainter) : any {
        let debugPreviousCanvasSaveCount : number;
        canvas.save();
        /* TODO (AssertStatementImpl) : assert (() {debugPreviousCanvasSaveCount = canvas.getSaveCount(); return true;}()); */;
        if (offset != Offset.zero) canvas.translate(offset.dx,offset.dy);
        painter.paint(canvas,size);
        /* TODO (AssertStatementImpl) : assert (() {final int debugNewCanvasSaveCount = canvas.getSaveCount(); if (debugNewCanvasSaveCount > debugPreviousCanvasSaveCount) {throw FlutterError('The $painter custom painter called canvas.save() or canvas.saveLayer() at least ' '${debugNewCanvasSaveCount - debugPreviousCanvasSaveCount} more ' 'time${debugNewCanvasSaveCount - debugPreviousCanvasSaveCount == 1 ? '' : 's'} ' 'than it called canvas.restore().\n' 'This leaves the canvas in an inconsistent state and will probably result in a broken display.\n' 'You must pair each call to save()/saveLayer() with a later matching call to restore().');} if (debugNewCanvasSaveCount < debugPreviousCanvasSaveCount) {throw FlutterError('The $painter custom painter called canvas.restore() ' '${debugPreviousCanvasSaveCount - debugNewCanvasSaveCount} more ' 'time${debugPreviousCanvasSaveCount - debugNewCanvasSaveCount == 1 ? '' : 's'} ' 'than it called canvas.save() or canvas.saveLayer().\n' 'This leaves the canvas in an inconsistent state and will result in a broken display.\n' 'You should only call restore() if you first called save() or saveLayer().');} return debugNewCanvasSaveCount == debugPreviousCanvasSaveCount;}()); */;
        canvas.restore();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib9.PaintingContext,offset : any) : any {
        if (this._painter != null) {
            this._paintWithPainter(context.canvas,offset,this._painter);
            this._setRasterCacheHints(context);
        }
        super.paint(context,offset);
        if (this._foregroundPainter != null) {
            this._paintWithPainter(context.canvas,offset,this._foregroundPainter);
            this._setRasterCacheHints(context);
        }
    }
    _setRasterCacheHints(context : lib9.PaintingContext) : any {
        if (this.isComplex) context.setIsComplexHint();
        if (this.willChange) context.setWillChangeHint();
    }
    _backgroundSemanticsBuilder : (size : any) => core.DartList<CustomPainterSemantics>;

    _foregroundSemanticsBuilder : (size : any) => core.DartList<CustomPainterSemantics>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    describeSemanticsConfiguration(config : lib6.SemanticsConfiguration) : any {
        super.describeSemanticsConfiguration(config);
        this._backgroundSemanticsBuilder = ((t)=>(!!t)?t.semanticsBuilder:null)(this.painter);
        this._foregroundSemanticsBuilder = ((t)=>(!!t)?t.semanticsBuilder:null)(this.foregroundPainter);
        config.isSemanticBoundary = this._backgroundSemanticsBuilder != null || this._foregroundSemanticsBuilder != null;
    }
    _backgroundSemanticsNodes : core.DartList<lib6.SemanticsNode>;

    _foregroundSemanticsNodes : core.DartList<lib6.SemanticsNode>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    assembleSemanticsNode(node : lib6.SemanticsNode,config : lib6.SemanticsConfiguration,children : core.DartIterable<lib6.SemanticsNode>) : any {
        /* TODO (AssertStatementImpl) : assert (() {if (child == null && children.isNotEmpty) {throw FlutterError('$runtimeType does not have a child widget but received a non-empty list of child SemanticsNode:\n' '${children.join('\n')}');} return true;}()); */;
        let backgroundSemantics : core.DartList<CustomPainterSemantics> = this._backgroundSemanticsBuilder != null ? this._backgroundSemanticsBuilder(size) : new core.DartList.literal<CustomPainterSemantics>();
        this._backgroundSemanticsNodes = RenderCustomPaint._updateSemanticsChildren(this._backgroundSemanticsNodes,backgroundSemantics);
        let foregroundSemantics : core.DartList<CustomPainterSemantics> = this._foregroundSemanticsBuilder != null ? this._foregroundSemanticsBuilder(size) : new core.DartList.literal<CustomPainterSemantics>();
        this._foregroundSemanticsNodes = RenderCustomPaint._updateSemanticsChildren(this._foregroundSemanticsNodes,foregroundSemantics);
        let hasBackgroundSemantics : boolean = this._backgroundSemanticsNodes != null && this._backgroundSemanticsNodes.isNotEmpty;
        let hasForegroundSemantics : boolean = this._foregroundSemanticsNodes != null && this._foregroundSemanticsNodes.isNotEmpty;
        let finalChildren : core.DartList<lib6.SemanticsNode> = new core.DartList.literal<lib6.SemanticsNode>();
        if (hasBackgroundSemantics) finalChildren.addAll(this._backgroundSemanticsNodes);
        finalChildren.addAll(children);
        if (hasForegroundSemantics) finalChildren.addAll(this._foregroundSemanticsNodes);
        super.assembleSemanticsNode(node,config,finalChildren);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    clearSemantics() : any {
        super.clearSemantics();
        this._backgroundSemanticsNodes = null;
        this._foregroundSemanticsNodes = null;
    }
    static _updateSemanticsChildren(oldSemantics : core.DartList<lib6.SemanticsNode>,newChildSemantics : core.DartList<CustomPainterSemantics>) : core.DartList<lib6.SemanticsNode> {
        oldSemantics = (oldSemantics || new core.DartList.literal<lib6.SemanticsNode>());
        newChildSemantics = (newChildSemantics || new core.DartList.literal<CustomPainterSemantics>());
        /* TODO (AssertStatementImpl) : assert (() {final Map<Key, int> keys = HashMap<Key, int>(); final StringBuffer errors = StringBuffer(); for (int i = 0; i < newChildSemantics.length; i += 1) {final CustomPainterSemantics child = newChildSemantics[i]; if (child.key != null) {if (keys.containsKey(child.key)) {errors.writeln('- duplicate key ${child.key} found at position $i');} keys[child.key] = i;}} if (errors.isNotEmpty) {throw FlutterError('Failed to update the list of CustomPainterSemantics:\n' '$errors');} return true;}()); */;
        let newChildrenTop : number = 0;
        let oldChildrenTop : number = 0;
        let newChildrenBottom : number = newChildSemantics.length - 1;
        let oldChildrenBottom : number = oldSemantics.length - 1;
        let newChildren : core.DartList<lib6.SemanticsNode> = core.DartList(newChildSemantics.length);
        while ((oldChildrenTop <= oldChildrenBottom) && (newChildrenTop <= newChildrenBottom)){
            let oldChild : lib6.SemanticsNode = oldSemantics[oldChildrenTop];
            let newSemantics : CustomPainterSemantics = newChildSemantics[newChildrenTop];
            if (!RenderCustomPaint._canUpdateSemanticsChild(oldChild,newSemantics)) break;
            let newChild : lib6.SemanticsNode = RenderCustomPaint._updateSemanticsChild(oldChild,newSemantics);
            newChildren[newChildrenTop] = newChild;
            newChildrenTop += 1;
            oldChildrenTop += 1;
        }
        while ((oldChildrenTop <= oldChildrenBottom) && (newChildrenTop <= newChildrenBottom)){
            let oldChild : lib6.SemanticsNode = oldSemantics[oldChildrenBottom];
            let newChild : CustomPainterSemantics = newChildSemantics[newChildrenBottom];
            if (!RenderCustomPaint._canUpdateSemanticsChild(oldChild,newChild)) break;
            oldChildrenBottom -= 1;
            newChildrenBottom -= 1;
        }
        let haveOldChildren : boolean = oldChildrenTop <= oldChildrenBottom;
        let oldKeyedChildren : core.DartMap<lib5.Key,lib6.SemanticsNode>;
        if (haveOldChildren) {
            oldKeyedChildren = new core.DartMap.literal([
            ]);
            while (oldChildrenTop <= oldChildrenBottom){
                let oldChild : lib6.SemanticsNode = oldSemantics[oldChildrenTop];
                if (oldChild.key != null) oldKeyedChildren.set(oldChild.key,oldChild);
                oldChildrenTop += 1;
            }
        }
        while (newChildrenTop <= newChildrenBottom){
            let oldChild : lib6.SemanticsNode;
            let newSemantics : CustomPainterSemantics = newChildSemantics[newChildrenTop];
            if (haveOldChildren) {
                let key : lib5.Key = newSemantics.key;
                if (key != null) {
                    oldChild = oldKeyedChildren.get(key);
                    if (oldChild != null) {
                        if (RenderCustomPaint._canUpdateSemanticsChild(oldChild,newSemantics)) {
                            oldKeyedChildren.remove(key);
                        }else {
                            oldChild = null;
                        }
                    }
                }
            }
            /* TODO (AssertStatementImpl) : assert (oldChild == null || _canUpdateSemanticsChild(oldChild, newSemantics)); */;
            let newChild : lib6.SemanticsNode = RenderCustomPaint._updateSemanticsChild(oldChild,newSemantics);
            /* TODO (AssertStatementImpl) : assert (oldChild == newChild || oldChild == null); */;
            newChildren[newChildrenTop] = newChild;
            newChildrenTop += 1;
        }
        /* TODO (AssertStatementImpl) : assert (oldChildrenTop == oldChildrenBottom + 1); */;
        /* TODO (AssertStatementImpl) : assert (newChildrenTop == newChildrenBottom + 1); */;
        /* TODO (AssertStatementImpl) : assert (newChildSemantics.length - newChildrenTop == oldSemantics.length - oldChildrenTop); */;
        newChildrenBottom = newChildSemantics.length - 1;
        oldChildrenBottom = oldSemantics.length - 1;
        while ((oldChildrenTop <= oldChildrenBottom) && (newChildrenTop <= newChildrenBottom)){
            let oldChild : lib6.SemanticsNode = oldSemantics[oldChildrenTop];
            let newSemantics : CustomPainterSemantics = newChildSemantics[newChildrenTop];
            /* TODO (AssertStatementImpl) : assert (_canUpdateSemanticsChild(oldChild, newSemantics)); */;
            let newChild : lib6.SemanticsNode = RenderCustomPaint._updateSemanticsChild(oldChild,newSemantics);
            /* TODO (AssertStatementImpl) : assert (oldChild == newChild); */;
            newChildren[newChildrenTop] = newChild;
            newChildrenTop += 1;
            oldChildrenTop += 1;
        }
        /* TODO (AssertStatementImpl) : assert (() {for (SemanticsNode node in newChildren) {assert (node != null);} return true;}()); */;
        return newChildren;
    }
    static _canUpdateSemanticsChild(oldChild : lib6.SemanticsNode,newSemantics : CustomPainterSemantics) : boolean {
        return op(Op.EQUALS,oldChild.key,newSemantics.key);
    }
    static _updateSemanticsChild(oldChild : lib6.SemanticsNode,newSemantics : CustomPainterSemantics) : lib6.SemanticsNode {
        /* TODO (AssertStatementImpl) : assert (oldChild == null || _canUpdateSemanticsChild(oldChild, newSemantics)); */;
        let newChild : lib6.SemanticsNode = (oldChild || lib6.SemanticsNode({
            key : newSemantics.key}));
        let properties : lib6.SemanticsProperties = newSemantics.properties;
        let config : lib6.SemanticsConfiguration = lib6.SemanticsConfiguration();
        if (properties.sortKey != null) {
            config.sortKey = properties.sortKey;
        }
        if (properties.checked != null) {
            config.isChecked = properties.checked;
        }
        if (properties.selected != null) {
            config.isSelected = properties.selected;
        }
        if (properties.button != null) {
            config.isButton = properties.button;
        }
        if (properties.textField != null) {
            config.isTextField = properties.textField;
        }
        if (properties.focused != null) {
            config.isFocused = properties.focused;
        }
        if (properties.enabled != null) {
            config.isEnabled = properties.enabled;
        }
        if (properties.inMutuallyExclusiveGroup != null) {
            config.isInMutuallyExclusiveGroup = properties.inMutuallyExclusiveGroup;
        }
        if (properties.obscured != null) {
            config.isObscured = properties.obscured;
        }
        if (properties.hidden != null) {
            config.isHidden = properties.hidden;
        }
        if (properties.header != null) {
            config.isHeader = properties.header;
        }
        if (properties.scopesRoute != null) {
            config.scopesRoute = properties.scopesRoute;
        }
        if (properties.namesRoute != null) {
            config.namesRoute = properties.namesRoute;
        }
        if (properties.liveRegion != null) {
            config.liveRegion = properties.liveRegion;
        }
        if (properties.toggled != null) {
            config.isToggled = properties.toggled;
        }
        if (properties.image != null) {
            config.isImage = properties.image;
        }
        if (properties.label != null) {
            config.label = properties.label;
        }
        if (properties.value != null) {
            config.value = properties.value;
        }
        if (properties.increasedValue != null) {
            config.increasedValue = properties.increasedValue;
        }
        if (properties.decreasedValue != null) {
            config.decreasedValue = properties.decreasedValue;
        }
        if (properties.hint != null) {
            config.hint = properties.hint;
        }
        if (properties.textDirection != null) {
            config.textDirection = properties.textDirection;
        }
        if (properties.onTap != null) {
            config.onTap = properties.onTap;
        }
        if (properties.onLongPress != null) {
            config.onLongPress = properties.onLongPress;
        }
        if (properties.onScrollLeft != null) {
            config.onScrollLeft = properties.onScrollLeft;
        }
        if (properties.onScrollRight != null) {
            config.onScrollRight = properties.onScrollRight;
        }
        if (properties.onScrollUp != null) {
            config.onScrollUp = properties.onScrollUp;
        }
        if (properties.onScrollDown != null) {
            config.onScrollDown = properties.onScrollDown;
        }
        if (properties.onIncrease != null) {
            config.onIncrease = properties.onIncrease;
        }
        if (properties.onDecrease != null) {
            config.onDecrease = properties.onDecrease;
        }
        if (properties.onCopy != null) {
            config.onCopy = properties.onCopy;
        }
        if (properties.onCut != null) {
            config.onCut = properties.onCut;
        }
        if (properties.onPaste != null) {
            config.onPaste = properties.onPaste;
        }
        if (properties.onMoveCursorForwardByCharacter != null) {
            config.onMoveCursorForwardByCharacter = properties.onMoveCursorForwardByCharacter;
        }
        if (properties.onMoveCursorBackwardByCharacter != null) {
            config.onMoveCursorBackwardByCharacter = properties.onMoveCursorBackwardByCharacter;
        }
        if (properties.onSetSelection != null) {
            config.onSetSelection = properties.onSetSelection;
        }
        if (properties.onDidGainAccessibilityFocus != null) {
            config.onDidGainAccessibilityFocus = properties.onDidGainAccessibilityFocus;
        }
        if (properties.onDidLoseAccessibilityFocus != null) {
            config.onDidLoseAccessibilityFocus = properties.onDidLoseAccessibilityFocus;
        }
        if (properties.onDismiss != null) {
            config.onDismiss = properties.onDismiss;
        }
        newChild.updateWith({
            config : config,childrenInInversePaintOrder : new core.DartList.literal<lib6.SemanticsNode>()});
        ((_) : lib6.SemanticsNode =>  {
            {
                _.rect = newSemantics.rect;
                _.transform = newSemantics.transform;
                _.tags = newSemantics.tags;
                return _;
            }
        })(newChild);
        return newChild;
    }
}

export class properties {
}
