/** Library asset:datahedgehog_monitor/lib/lib/material/ink_well.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./material";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/border_radius";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/gestures/tap";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/painting/box_border";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib11 from "./ink_highlight";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib13 from "./theme";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as collection from "@dart2ts/dart/core";
import * as lib16 from "./feedback";
import * as lib17 from "./theme_data";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/widgets/gesture_detector";

export namespace InteractiveInkFeature {
    export type Constructors = lib3.InkFeature.Constructors | 'InteractiveInkFeature';
    export type Interface = Omit<InteractiveInkFeature, Constructors>;
}
@DartClass
export class InteractiveInkFeature extends lib3.InkFeature {
    constructor(_namedArguments? : {controller? : lib3.MaterialInkController,referenceBox? : any,color? : any,onRemoved? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InteractiveInkFeature(_namedArguments? : {controller? : lib3.MaterialInkController,referenceBox? : any,color? : any,onRemoved? : any}) {
        let {controller,referenceBox,color,onRemoved} = Object.assign({
        }, _namedArguments );
        this._color = this.color;
        this.assert = assert;
    }
     : any;

     : any;

    _color;
    super;

     : any;

    controller;
    referenceBox;

    referenceBox;
    onRemoved;

     : any;

    confirm() : any {
    }
    cancel() : any {
    }
    get color() : any {
        return this._color;
    }
    _color : any;

    set color(value : any) {
        if (op(Op.EQUALS,value,this._color)) return;
        this._color = value;
        this.controller.markNeedsPaint();
    }
}

export namespace InteractiveInkFeatureFactory {
    export type Constructors = 'InteractiveInkFeatureFactory';
    export type Interface = Omit<InteractiveInkFeatureFactory, Constructors>;
}
@DartClass
export class InteractiveInkFeatureFactory {
    constructor() {
    }
    @defaultConstructor
    InteractiveInkFeatureFactory() {
    }
    @Abstract
    create(_namedArguments? : {controller? : lib3.MaterialInkController,referenceBox? : any,position? : any,color? : any,textDirection? : any,containedInkWell? : boolean,rectCallback? : () => any,borderRadius? : lib4.BorderRadius,customBorder? : lib5.ShapeBorder,radius? : double,onRemoved? : any}) : InteractiveInkFeature{ throw 'abstract'}
}

export namespace InkResponse {
    export type Constructors = lib6.StatefulWidget.Constructors | 'InkResponse';
    export type Interface = Omit<InkResponse, Constructors>;
}
@DartClass
export class InkResponse extends lib6.StatefulWidget {
    constructor(_namedArguments? : {key? : lib7.Key,child? : lib6.Widget,onTap? : () => any,onTapDown? : (details : lib8.TapDownDetails) => any,onTapCancel? : () => any,onDoubleTap? : () => any,onLongPress? : () => void,onHighlightChanged? : <T>(value : boolean) => void,containedInkWell? : boolean,highlightShape? : lib9.BoxShape,radius? : double,borderRadius? : lib4.BorderRadius,customBorder? : lib5.ShapeBorder,highlightColor? : any,splashColor? : any,splashFactory? : InteractiveInkFeatureFactory,enableFeedback? : boolean,excludeFromSemantics? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InkResponse(_namedArguments? : {key? : lib7.Key,child? : lib6.Widget,onTap? : () => any,onTapDown? : (details : lib8.TapDownDetails) => any,onTapCancel? : () => any,onDoubleTap? : () => any,onLongPress? : () => void,onHighlightChanged? : <T>(value : boolean) => void,containedInkWell? : boolean,highlightShape? : lib9.BoxShape,radius? : double,borderRadius? : lib4.BorderRadius,customBorder? : lib5.ShapeBorder,highlightColor? : any,splashColor? : any,splashFactory? : InteractiveInkFeatureFactory,enableFeedback? : boolean,excludeFromSemantics? : boolean}) {
        let {key,child,onTap,onTapDown,onTapCancel,onDoubleTap,onLongPress,onHighlightChanged,containedInkWell,highlightShape,radius,borderRadius,customBorder,highlightColor,splashColor,splashFactory,enableFeedback,excludeFromSemantics} = Object.assign({
            "containedInkWell" : false,
            "highlightShape" : lib9.BoxShape.circle,
            "enableFeedback" : true,
            "excludeFromSemantics" : false}, _namedArguments );
        this.assert = assert;
        this.child = child;
        this.onTap = onTap;
        this.onTapDown = onTapDown;
        this.onTapCancel = onTapCancel;
        this.onDoubleTap = onDoubleTap;
        this.onLongPress = onLongPress;
        this.onHighlightChanged = onHighlightChanged;
        this.containedInkWell = containedInkWell;
        this.highlightShape = highlightShape;
        this.radius = radius;
        this.borderRadius = borderRadius;
        this.customBorder = customBorder;
        this.highlightColor = highlightColor;
        this.splashColor = splashColor;
        this.splashFactory = splashFactory;
        this.enableFeedback = enableFeedback;
        this.excludeFromSemantics = excludeFromSemantics;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    child : lib6.Widget;

    onTap : () => any;

    onTapDown : (details : lib8.TapDownDetails) => any;

    onTapCancel : () => any;

    onDoubleTap : () => any;

    onLongPress : () => void;

    onHighlightChanged : <T>(value : boolean) => void;

    containedInkWell : boolean;

    highlightShape : lib9.BoxShape;

    radius : double;

    borderRadius : lib4.BorderRadius;

    customBorder : lib5.ShapeBorder;

    highlightColor : any;

    splashColor : any;

    splashFactory : InteractiveInkFeatureFactory;

    enableFeedback : boolean;

    excludeFromSemantics : boolean;

    getRectCallback(referenceBox : any) : () => any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    debugCheckContext(context : lib6.BuildContext) : boolean {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterial(context)); */;
        /* TODO (AssertStatementImpl) : assert (debugCheckHasDirectionality(context)); */;
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _InkResponseState<InkResponse> {
        return _InkResponseState();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib10.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        let gestures : core.DartList<string> = new core.DartList.literal<string>();
        if (this.onTap != null) gestures.add('tap');
        if (this.onDoubleTap != null) gestures.add('double tap');
        if (this.onLongPress != null) gestures.add('long press');
        if (this.onTapDown != null) gestures.add('tap down');
        if (this.onTapCancel != null) gestures.add('tap cancel');
        properties.add(lib10.IterableProperty('gestures',gestures,{
            ifEmpty : '<none>'}));
        properties.add(lib10.DiagnosticsProperty('containedInkWell',this.containedInkWell,{
            level : lib10.DiagnosticLevel.fine}));
        properties.add(lib10.DiagnosticsProperty('highlightShape',this.highlightShape,{
            description : `${this.containedInkWell ? "clipped to " : ""}${this.highlightShape}`,showName : false}));
    }
}

export namespace _InkResponseState {
    export type Constructors = '_InkResponseState';
    export type Interface<T extends InkResponse> = Omit<_InkResponseState<T extends InkResponse>, Constructors>;
}
@DartClass
@With(any)
export class _InkResponseState<T extends InkResponse> extends any implements any.Interface {
    _splashes : core.DartSet<InteractiveInkFeature>;

    _currentSplash : InteractiveInkFeature;

    _lastHighlight : lib11.InkHighlight;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get wantKeepAlive() : boolean {
        return this._lastHighlight != null || (this._splashes != null && this._splashes.isNotEmpty);
    }
    updateHighlight(value : boolean) : any {
        if (value == (this._lastHighlight != null && this._lastHighlight.active)) return;
        if (value) {
            if (op(Op.EQUALS,this._lastHighlight,null)) {
                let referenceBox : any = lib12.properties.context.findRenderObject();
                this._lastHighlight = lib11.InkHighlight({
                    controller : lib3.Material.of(lib12.properties.context),referenceBox : referenceBox,color : (widget.highlightColor || lib13.Theme.of(lib12.properties.context).highlightColor),shape : widget.highlightShape,borderRadius : widget.borderRadius,customBorder : widget.customBorder,rectCallback : widget.getRectCallback(referenceBox),onRemoved : this._handleInkHighlightRemoval.bind(this),textDirection : lib14.Directionality.of(lib12.properties.context)});
                updateKeepAlive();
            }else {
                this._lastHighlight.activate();
            }
        }else {
            this._lastHighlight.deactivate();
        }
        /* TODO (AssertStatementImpl) : assert (value == (_lastHighlight != null && _lastHighlight.active)); */;
        if (widget.onHighlightChanged != null) widget.onHighlightChanged(value);
    }
    _handleInkHighlightRemoval() : any {
        /* TODO (AssertStatementImpl) : assert (_lastHighlight != null); */;
        this._lastHighlight = null;
        updateKeepAlive();
    }
    _createInkFeature(details : lib8.TapDownDetails) : InteractiveInkFeature {
        let inkController : lib3.MaterialInkController = lib3.Material.of(lib12.properties.context);
        let referenceBox : any = lib12.properties.context.findRenderObject();
        let position : any = referenceBox.globalToLocal(details.globalPosition);
        let color : any = (widget.splashColor || lib13.Theme.of(lib12.properties.context).splashColor);
        let rectCallback : () => any = widget.containedInkWell ? widget.getRectCallback(referenceBox) : null;
        let borderRadius : lib4.BorderRadius = widget.borderRadius;
        let customBorder : lib5.ShapeBorder = widget.customBorder;
        let splash : InteractiveInkFeature;
        var onRemoved : () => any = () : any =>  {
            if (this._splashes != null) {
                /* TODO (AssertStatementImpl) : assert (_splashes.contains(splash)); */;
                this._splashes.remove(splash);
                if (op(Op.EQUALS,this._currentSplash,splash)) this._currentSplash = null;
                updateKeepAlive();
            }
        };
        splash = ((widget.splashFactory || lib13.Theme.of(lib12.properties.context).splashFactory)).create({
            controller : inkController,referenceBox : referenceBox,position : position,color : color,containedInkWell : widget.containedInkWell,rectCallback : rectCallback,radius : widget.radius,borderRadius : borderRadius,customBorder : customBorder,onRemoved : onRemoved,textDirection : lib14.Directionality.of(lib12.properties.context)});
        return splash;
    }
    _handleTapDown(details : lib8.TapDownDetails) : any {
        let splash : InteractiveInkFeature = this._createInkFeature(details);
        this._splashes = ( this._splashes ) || ( core.DartHashSet() );
        this._splashes.add(splash);
        this._currentSplash = splash;
        if (widget.onTapDown != null) {
            widget.onTapDown(details);
        }
        updateKeepAlive();
        this.updateHighlight(true);
    }
    _handleTap(context : lib6.BuildContext) : any {
        ((_735_)=>(!!_735_)?_735_.confirm():null)(this._currentSplash);
        this._currentSplash = null;
        this.updateHighlight(false);
        if (widget.onTap != null) {
            if (widget.enableFeedback) lib16.Feedback.forTap(context);
            widget.onTap();
        }
    }
    _handleTapCancel() : any {
        ((_736_)=>(!!_736_)?_736_.cancel():null)(this._currentSplash);
        this._currentSplash = null;
        if (widget.onTapCancel != null) {
            widget.onTapCancel();
        }
        this.updateHighlight(false);
    }
    _handleDoubleTap() : any {
        ((_737_)=>(!!_737_)?_737_.confirm():null)(this._currentSplash);
        this._currentSplash = null;
        if (widget.onDoubleTap != null) widget.onDoubleTap();
    }
    _handleLongPress(context : lib6.BuildContext) : any {
        ((_738_)=>(!!_738_)?_738_.confirm():null)(this._currentSplash);
        this._currentSplash = null;
        if (widget.onLongPress != null) {
            if (widget.enableFeedback) lib16.Feedback.forLongPress(context);
            widget.onLongPress();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    deactivate() : any {
        if (this._splashes != null) {
            let splashes : core.DartSet<InteractiveInkFeature> = this._splashes;
            this._splashes = null;
            for(let splash of splashes) splash.dispose();
            this._currentSplash = null;
        }
        /* TODO (AssertStatementImpl) : assert (_currentSplash == null); */;
        ((_739_)=>(!!_739_)?_739_.dispose():null)(this._lastHighlight);
        this._lastHighlight = null;
        super.deactivate();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib6.BuildContext) : lib6.Widget {
        /* TODO (AssertStatementImpl) : assert (widget.debugCheckContext(context)); */;
        super.build(context);
        let themeData : lib17.ThemeData = lib13.Theme.of(context);
        ((t)=>(!!t)?t.color:null)(this._lastHighlight) = (widget.highlightColor || themeData.highlightColor);
        ((t)=>(!!t)?t.color:null)(this._currentSplash) = (widget.splashColor || themeData.splashColor);
        let enabled : boolean = widget.onTap != null || widget.onDoubleTap != null || widget.onLongPress != null;
        return lib18.GestureDetector({
            onTapDown : enabled ? this._handleTapDown.bind(this) : null,onTap : enabled ? () =>  {
                return this._handleTap(context);
            } : null,onTapCancel : enabled ? this._handleTapCancel.bind(this) : null,onDoubleTap : widget.onDoubleTap != null ? this._handleDoubleTap.bind(this) : null,onLongPress : widget.onLongPress != null ? () =>  {
                return this._handleLongPress(context);
            } : null,behavior : HitTestBehavior.opaque,child : widget.child,excludeFromSemantics : widget.excludeFromSemantics});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _InkResponseState() {
    }
}

export namespace InkWell {
    export type Constructors = InkResponse.Constructors | 'InkWell';
    export type Interface = Omit<InkWell, Constructors>;
}
@DartClass
export class InkWell extends InkResponse {
    constructor(_namedArguments? : {key? : lib7.Key,child? : lib6.Widget,onTap? : () => any,onDoubleTap? : () => any,onLongPress? : () => void,onTapDown? : (details : lib8.TapDownDetails) => any,onTapCancel? : () => any,onHighlightChanged? : <T>(value : boolean) => void,highlightColor? : any,splashColor? : any,splashFactory? : InteractiveInkFeatureFactory,radius? : double,borderRadius? : lib4.BorderRadius,customBorder? : lib5.ShapeBorder,enableFeedback? : boolean,excludeFromSemantics? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InkWell(_namedArguments? : {key? : lib7.Key,child? : lib6.Widget,onTap? : () => any,onDoubleTap? : () => any,onLongPress? : () => void,onTapDown? : (details : lib8.TapDownDetails) => any,onTapCancel? : () => any,onHighlightChanged? : <T>(value : boolean) => void,highlightColor? : any,splashColor? : any,splashFactory? : InteractiveInkFeatureFactory,radius? : double,borderRadius? : lib4.BorderRadius,customBorder? : lib5.ShapeBorder,enableFeedback? : boolean,excludeFromSemantics? : boolean}) {
        let {key,child,onTap,onDoubleTap,onLongPress,onTapDown,onTapCancel,onHighlightChanged,highlightColor,splashColor,splashFactory,radius,borderRadius,customBorder,enableFeedback,excludeFromSemantics} = Object.assign({
            "enableFeedback" : true,
            "excludeFromSemantics" : false}, _namedArguments );
        super.InkResponse({
            key : key,child : child,onTap : onTap,onDoubleTap : onDoubleTap,onLongPress : onLongPress,onTapDown : onTapDown,onTapCancel : onTapCancel,onHighlightChanged : onHighlightChanged,containedInkWell : true,highlightShape : lib9.BoxShape.rectangle,highlightColor : highlightColor,splashColor : splashColor,splashFactory : splashFactory,radius : radius,borderRadius : borderRadius,customBorder : customBorder,enableFeedback : enableFeedback,excludeFromSemantics : excludeFromSemantics});
    }
}

export class properties {
}
