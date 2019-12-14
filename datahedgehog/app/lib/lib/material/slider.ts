/** Library asset:datahedgehog_monitor/lib/lib/material/slider.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib7 from "./constants";
import * as lib8 from "./slider_theme";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";
import * as lib10 from "./theme";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib12 from "./theme_data";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/rendering/animated_size";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/gestures/team";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/gestures/monodrag";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/gestures/tap";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as math from "@dart2ts/dart/math";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/painting/text_painter";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/painting/text_span";
import * as lib24 from "@dart2ts.packages/flutter/lib/src/rendering/object";
import * as lib25 from "@dart2ts.packages/flutter/lib/src/scheduler/binding";
import * as lib26 from "@dart2ts.packages/flutter/lib/src/gestures/drag_details";
import * as lib27 from "@dart2ts.packages/flutter/lib/src/gestures/events";
import * as lib28 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib29 from "@dart2ts.packages/flutter/lib/src/rendering/view";
import * as lib30 from "@dart2ts.packages/flutter/lib/src/semantics/semantics";

export var _increaseAction : () => any = () : any =>  {
    if (properties.isInteractive) {
        properties.onChanged(new core.DartDouble((properties.value + properties._semanticActionUnit)).clamp(0.0,1.0));
    }
};
export var describeSemanticsConfiguration : (config : lib30.SemanticsConfiguration) => any = (config : lib30.SemanticsConfiguration) : any =>  {
    super.describeSemanticsConfiguration(config);
    config.isSemanticBoundary = properties.isInteractive;
    if (properties.isInteractive) {
        config.textDirection = properties.textDirection;
        config.onIncrease = _increaseAction;
        config.onDecrease = _decreaseAction;
        if (properties.semanticFormatterCallback != null) {
            config.value = properties.semanticFormatterCallback(properties._state._lerp(properties.value));
            config.increasedValue = properties.semanticFormatterCallback(properties._state._lerp(new core.DartDouble((properties.value + properties._semanticActionUnit)).clamp(0.0,1.0)));
            config.decreasedValue = properties.semanticFormatterCallback(properties._state._lerp(new core.DartDouble((properties.value - properties._semanticActionUnit)).clamp(0.0,1.0)));
        }else {
            config.value = `${new core.DartDouble((properties.value * 100)).round()}%`;
            config.increasedValue = `${new core.DartNumber((new core.DartDouble((properties.value + properties._semanticActionUnit)).clamp(0.0,1.0) * 100)).round()}%`;
            config.decreasedValue = `${new core.DartNumber((new core.DartDouble((properties.value - properties._semanticActionUnit)).clamp(0.0,1.0) * 100)).round()}%`;
        }
    }
};
export var paint : (context : lib24.PaintingContext,offset : any) => any = (context : lib24.PaintingContext,offset : any) : any =>  {
    let value : double = properties._state.positionController.value;
    let visualPosition : double;
    switch (properties.textDirection) {
        case TextDirection.rtl:
            visualPosition = 1.0 - value;
            break;
        case TextDirection.ltr:
            visualPosition = value;
            break;
    }
    let trackRect : any = properties._sliderTheme.trackShape.getPreferredRect({
        parentBox : this,offset : offset,sliderTheme : properties._sliderTheme,isDiscrete : properties.isDiscrete});
    let thumbCenter : any = Offset(op(Op.PLUS,trackRect.left,visualPosition * trackRect.width),trackRect.center.dy);
    properties._sliderTheme.trackShape.paint(context,offset,{
        parentBox : this,sliderTheme : properties._sliderTheme,enableAnimation : properties._enableAnimation,textDirection : properties._textDirection,thumbCenter : thumbCenter,isDiscrete : properties.isDiscrete,isEnabled : properties.isInteractive});
    if (!properties._overlayAnimation.isDismissed) {
        properties._sliderTheme.overlayShape.paint(context,thumbCenter,{
            activationAnimation : properties._overlayAnimation,enableAnimation : properties._enableAnimation,isDiscrete : properties.isDiscrete,labelPainter : properties._labelPainter,parentBox : this,sliderTheme : properties._sliderTheme,textDirection : properties._textDirection,value : properties._value});
    }
    if (properties.isDiscrete) {
        let tickMarkWidth : double = properties._sliderTheme.tickMarkShape.getPreferredSize({
            isEnabled : properties.isInteractive,sliderTheme : properties._sliderTheme}).width;
        if (op(Op.GEQ,op(Op.DIVIDE,(op(Op.MINUS,trackRect.width,tickMarkWidth)),properties.divisions),3.0 * tickMarkWidth)) {
            for(let i : number = 0; i <= properties.divisions; i++){
                let tickValue : double = i / properties.divisions;
                let tickX : double = op(Op.PLUS,op(Op.PLUS,trackRect.left,tickValue * (op(Op.MINUS,trackRect.width,tickMarkWidth))),tickMarkWidth / 2);
                let tickY : double = trackRect.center.dy;
                let tickMarkOffset : any = Offset(tickX,tickY);
                properties._sliderTheme.tickMarkShape.paint(context,tickMarkOffset,{
                    parentBox : this,sliderTheme : properties._sliderTheme,enableAnimation : properties._enableAnimation,textDirection : properties._textDirection,thumbCenter : thumbCenter,isEnabled : properties.isInteractive});
            }
        }
    }
    if (properties.isInteractive && properties.label != null && !properties._valueIndicatorAnimation.isDismissed) {
        if (properties.showValueIndicator) {
            properties._sliderTheme.valueIndicatorShape.paint(context,thumbCenter,{
                activationAnimation : properties._valueIndicatorAnimation,enableAnimation : properties._enableAnimation,isDiscrete : properties.isDiscrete,labelPainter : properties._labelPainter,parentBox : this,sliderTheme : properties._sliderTheme,textDirection : properties._textDirection,value : properties._value});
        }
    }
    properties._sliderTheme.thumbShape.paint(context,thumbCenter,{
        activationAnimation : properties._valueIndicatorAnimation,enableAnimation : properties._enableAnimation,isDiscrete : properties.isDiscrete,labelPainter : properties._labelPainter,parentBox : this,sliderTheme : properties._sliderTheme,textDirection : properties._textDirection,value : properties._value});
};
export var _decreaseAction : () => any = () : any =>  {
    if (properties.isInteractive) {
        properties.onChanged(new core.DartDouble((properties.value - properties._semanticActionUnit)).clamp(0.0,1.0));
    }
};
export var _updateLabelPainter : () => any = () : any =>  {
    if (properties.label != null) {
        ((_) : lib22.TextPainter =>  {
            {
                _.text = lib23.TextSpan({
                    style : properties._sliderTheme.valueIndicatorTextStyle,text : properties.label});
                _.textDirection = properties.textDirection;
                _.textScaleFactor = properties._mediaQueryData.textScaleFactor;
                _.layout();
                return _;
            }
        })(properties._labelPainter);
    }else {
        properties._labelPainter.text = null;
    }
    markNeedsLayout();
};
export var attach : (owner : lib24.PipelineOwner) => any = (owner : lib24.PipelineOwner) : any =>  {
    super.attach(owner);
    properties._overlayAnimation.addListener(markNeedsPaint);
    properties._valueIndicatorAnimation.addListener(markNeedsPaint);
    properties._enableAnimation.addListener(markNeedsPaint);
    properties._state.positionController.addListener(markNeedsPaint);
};
export var detach : () => any = () : any =>  {
    properties._overlayAnimation.removeListener(markNeedsPaint);
    properties._valueIndicatorAnimation.removeListener(markNeedsPaint);
    properties._enableAnimation.removeListener(markNeedsPaint);
    properties._state.positionController.removeListener(markNeedsPaint);
    super.detach();
};
export var _getValueFromVisualPosition : (visualPosition : double) => double = (visualPosition : double) : double =>  {
    switch (properties.textDirection) {
        case TextDirection.rtl:
            return 1.0 - visualPosition;
        case TextDirection.ltr:
            return visualPosition;
    }
    return null;
};
export var _getValueFromGlobalPosition : (globalPosition : any) => double = (globalPosition : any) : double =>  {
    let visualPosition : double = op(Op.DIVIDE,(op(Op.MINUS,globalToLocal(globalPosition).dx,properties._trackRect.left)),properties._trackRect.width);
    return _getValueFromVisualPosition(visualPosition);
};
export var _discretize : (value : double) => double = (value : double) : double =>  {
    let result : double = new core.DartDouble(value).clamp(0.0,1.0);
    if (properties.isDiscrete) {
        result = new core.DartDouble((result * properties.divisions)).round() / properties.divisions;
    }
    return result;
};
export var _startInteraction : (globalPosition : any) => any = (globalPosition : any) : any =>  {
    if (properties.isInteractive) {
        properties._active = true;
        if (properties.onChangeStart != null) {
            properties.onChangeStart(_discretize(properties.value));
        }
        properties._currentDragValue = _getValueFromGlobalPosition(globalPosition);
        properties.onChanged(_discretize(properties._currentDragValue));
        properties._state.overlayController.forward();
        if (properties.showValueIndicator) {
            properties._state.valueIndicatorController.forward();
            ((_752_)=>(!!_752_)?_752_.cancel():null)(properties._state.interactionTimer);
            properties._state.interactionTimer = async.DartTimer(op(Op.TIMES,properties._minimumInteractionTime,lib25.properties.timeDilation),() =>  {
                properties._state.interactionTimer = null;
                if (!properties._active && op(Op.EQUALS,properties._state.valueIndicatorController.status,lib21.AnimationStatus.completed)) {
                    properties._state.valueIndicatorController.reverse();
                }
            });
        }
    }
};
export var _endInteraction : () => any = () : any =>  {
    if (properties._active && properties._state.mounted) {
        if (properties.onChangeEnd != null) {
            properties.onChangeEnd(_discretize(properties._currentDragValue));
        }
        properties._active = false;
        properties._currentDragValue = 0.0;
        properties._state.overlayController.reverse();
        if (properties.showValueIndicator && op(Op.EQUALS,properties._state.interactionTimer,null)) {
            properties._state.valueIndicatorController.reverse();
        }
    }
};
export var _handleDragStart : (details : lib26.DragStartDetails) => any = (details : lib26.DragStartDetails) : any =>  {
    return _startInteraction(details.globalPosition);
};
export var _handleDragUpdate : (details : lib26.DragUpdateDetails) => any = (details : lib26.DragUpdateDetails) : any =>  {
    if (properties.isInteractive) {
        let valueDelta : double = details.primaryDelta / properties._trackRect.width;
        switch (properties.textDirection) {
            case TextDirection.rtl:
                properties._currentDragValue -= valueDelta;
                break;
            case TextDirection.ltr:
                properties._currentDragValue += valueDelta;
                break;
        }
        properties.onChanged(_discretize(properties._currentDragValue));
    }
};
export var _handleDragEnd : (details : lib26.DragEndDetails) => any = (details : lib26.DragEndDetails) : any =>  {
    return _endInteraction();
};
export var _handleTapDown : (details : lib17.TapDownDetails) => any = (details : lib17.TapDownDetails) : any =>  {
    return _startInteraction(details.globalPosition);
};
export var _handleTapUp : (details : lib17.TapUpDetails) => any = (details : lib17.TapUpDetails) : any =>  {
    return _endInteraction();
};
export var hitTestSelf : (position : any) => boolean = (position : any) : boolean =>  {
    return true;
};
export var handleEvent : (event : lib27.PointerEvent,entry : lib28.BoxHitTestEntry) => any = (event : lib27.PointerEvent,entry : lib28.BoxHitTestEntry) : any =>  {
    /* TODO (AssertStatementImpl) : assert (debugHandleEvent(event, entry)); */;
    if (is(event, lib27.PointerDownEvent) && properties.isInteractive) {
        properties._drag.addPointer(event);
        properties._tap.addPointer(event);
    }
};
export var computeMinIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    return properties._minPreferredTrackWidth + properties._maxSliderPartWidth;
};
export var computeMaxIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    return properties._minPreferredTrackWidth + properties._maxSliderPartWidth;
};
export var computeMinIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    return math.max(properties._minPreferredTrackHeight,properties._maxSliderPartHeight);
};
export var computeMaxIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    return math.max(properties._minPreferredTrackHeight,properties._maxSliderPartHeight);
};
export var performResize : () => any = () : any =>  {
    lib29.properties.size = Size(constraints.hasBoundedWidth ? constraints.maxWidth : properties._minPreferredTrackWidth + properties._maxSliderPartWidth,constraints.hasBoundedHeight ? constraints.maxHeight : math.max(properties._minPreferredTrackHeight,properties._maxSliderPartHeight));
};
export namespace _RenderSlider {
    export type Constructors = '_RenderSlider';
    export type Interface = Omit<_RenderSlider, Constructors>;
}
@DartClass
export class _RenderSlider extends any {
    constructor(_namedArguments? : {value? : double,divisions? : number,label? : string,sliderTheme? : lib8.SliderThemeData,theme? : lib12.ThemeData,mediaQueryData? : lib9.MediaQueryData,platform? : lib13.TargetPlatform,onChanged? : <T>(value : double) => void,semanticFormatterCallback? : (value : double) => string,onChangeStart? : any,onChangeEnd? : any,state? : _SliderState,textDirection? : any}) {
    }
    @defaultConstructor
    _RenderSlider(_namedArguments? : {value? : double,divisions? : number,label? : string,sliderTheme? : lib8.SliderThemeData,theme? : lib12.ThemeData,mediaQueryData? : lib9.MediaQueryData,platform? : lib13.TargetPlatform,onChanged? : <T>(value : double) => void,semanticFormatterCallback? : (value : double) => string,onChangeStart? : any,onChangeEnd? : any,state? : _SliderState,textDirection? : any}) {
        let {value,divisions,label,sliderTheme,theme,mediaQueryData,platform,onChanged,semanticFormatterCallback,onChangeStart,onChangeEnd,state,textDirection} = Object.assign({
        }, _namedArguments );
        this._platform = properties.platform;
        this._semanticFormatterCallback = properties.semanticFormatterCallback;
        this._label = properties.label;
        this._value = properties.value;
        this._divisions = properties.divisions;
        this._sliderTheme = properties.sliderTheme;
        this._theme = properties.theme;
        this._mediaQueryData = properties.mediaQueryData;
        this._onChanged = properties.onChanged;
        this._state = lib14.properties.state;
        this._textDirection = properties.textDirection;
        this.team = lib15.GestureArenaTeam();
        this._drag = ((_) : any =>  {
            {
                _.team = this.team;
                _.onStart = _handleDragStart;
                _.onUpdate = _handleDragUpdate;
                _.onEnd = _handleDragEnd;
                _.onCancel = _endInteraction;
                return _;
            }
        })(lib16.HorizontalDragGestureRecognizer());
        this._tap = ((_) : any =>  {
            {
                _.team = this.team;
                _.onTapDown = _handleTapDown;
                _.onTapUp = _handleTapUp;
                _.onTapCancel = _endInteraction;
                return _;
            }
        })(lib17.TapGestureRecognizer());
        this._overlayAnimation = lib19.CurvedAnimation({
            parent : this._state.overlayController,curve : lib18.Curves.fastOutSlowIn});
        this._valueIndicatorAnimation = lib19.CurvedAnimation({
            parent : this._state.valueIndicatorController,curve : lib18.Curves.fastOutSlowIn});
        this._enableAnimation = lib19.CurvedAnimation({
            parent : this._state.enableController,curve : lib18.Curves.easeInOut});
        this.assert = assert;
        this.onChangeStart = onChangeStart;
        this.onChangeEnd = onChangeEnd;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    _platform;
    _semanticFormatterCallback;
    _label;
    _value;
    _divisions;
    _sliderTheme;
    _theme;
    _mediaQueryData;
    _onChanged;
    _state;
    _textDirection;

    @Abstract
    _updateLabelPainter(){ throw 'abstract'}
    team : lib15.GestureArenaTeam;

    _drag;

    _tap;

    _overlayAnimation;

    _valueIndicatorAnimation;

    _enableAnimation;

}

export namespace _SliderRenderObjectWidget {
    export type Constructors = lib3.LeafRenderObjectWidget.Constructors | '_SliderRenderObjectWidget';
    export type Interface = Omit<_SliderRenderObjectWidget, Constructors>;
}
@DartClass
export class _SliderRenderObjectWidget extends lib3.LeafRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,value? : double,divisions? : number,label? : string,sliderTheme? : lib8.SliderThemeData,mediaQueryData? : lib9.MediaQueryData,onChanged? : <T>(value : double) => void,onChangeStart? : <T>(value : double) => void,onChangeEnd? : <T>(value : double) => void,state? : _SliderState,semanticFormatterCallback? : (value : double) => string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SliderRenderObjectWidget(_namedArguments? : {key? : lib4.Key,value? : double,divisions? : number,label? : string,sliderTheme? : lib8.SliderThemeData,mediaQueryData? : lib9.MediaQueryData,onChanged? : <T>(value : double) => void,onChangeStart? : <T>(value : double) => void,onChangeEnd? : <T>(value : double) => void,state? : _SliderState,semanticFormatterCallback? : (value : double) => string}) {
        let {key,value,divisions,label,sliderTheme,mediaQueryData,onChanged,onChangeStart,onChangeEnd,state,semanticFormatterCallback} = Object.assign({
        }, _namedArguments );
        super.LeafRenderObjectWidget({
            key : key});
        this.value = value;
        this.divisions = divisions;
        this.label = label;
        this.sliderTheme = sliderTheme;
        this.mediaQueryData = mediaQueryData;
        this.onChanged = onChanged;
        this.onChangeStart = onChangeStart;
        this.onChangeEnd = onChangeEnd;
        this.state = state;
        this.semanticFormatterCallback = semanticFormatterCallback;
    }
    value : double;

    divisions : number;

    label : string;

    sliderTheme : lib8.SliderThemeData;

    mediaQueryData : lib9.MediaQueryData;

    onChanged : <T>(value : double) => void;

    onChangeStart : <T>(value : double) => void;

    onChangeEnd : <T>(value : double) => void;

    semanticFormatterCallback : (value : double) => string;

    state : _SliderState;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : _RenderSlider {
        return _RenderSlider({
            value : this.value,divisions : this.divisions,label : this.label,sliderTheme : this.sliderTheme,theme : lib10.Theme.of(context),mediaQueryData : this.mediaQueryData,onChanged : this.onChanged,onChangeStart : this.onChangeStart,onChangeEnd : this.onChangeEnd,state : this.state,textDirection : lib11.Directionality.of(context),semanticFormatterCallback : this.semanticFormatterCallback,platform : lib10.Theme.of(context).platform});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : _RenderSlider) : any {
        ((_) : _RenderSlider =>  {
            {
                _.value = this.value;
                _.divisions = this.divisions;
                _.label = this.label;
                _.sliderTheme = this.sliderTheme;
                _.theme = lib10.Theme.of(context);
                _.mediaQueryData = this.mediaQueryData;
                _.onChanged = this.onChanged;
                _.onChangeStart = this.onChangeStart;
                _.onChangeEnd = this.onChangeEnd;
                _.textDirection = lib11.Directionality.of(context);
                _.semanticFormatterCallback = this.semanticFormatterCallback;
                _.platform = lib10.Theme.of(context).platform;
                return _;
            }
        })(renderObject);
    }
}

export namespace _SliderState {
    export type Constructors = '_SliderState';
    export type Interface = Omit<_SliderState, Constructors>;
}
@DartClass
@With(any)
export class _SliderState extends any implements any.Interface {
    private static __$enableAnimationDuration : core.DartDuration;
    static get enableAnimationDuration() : core.DartDuration { 
        if (this.__$enableAnimationDuration===undefined) {
            this.__$enableAnimationDuration = core.DartDuration({
                milliseconds : 75});
        }
        return this.__$enableAnimationDuration;
    }

    private static __$valueIndicatorAnimationDuration : core.DartDuration;
    static get valueIndicatorAnimationDuration() : core.DartDuration { 
        if (this.__$valueIndicatorAnimationDuration===undefined) {
            this.__$valueIndicatorAnimationDuration = core.DartDuration({
                milliseconds : 100});
        }
        return this.__$valueIndicatorAnimationDuration;
    }

    overlayController : lib6.AnimationController;

    valueIndicatorController : lib6.AnimationController;

    enableController : lib6.AnimationController;

    positionController : lib6.AnimationController;

    interactionTimer : async.DartTimer;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this.overlayController = lib6.AnimationController({
            duration : lib7.properties.kRadialReactionDuration,vsync : this});
        this.valueIndicatorController = lib6.AnimationController({
            duration : _SliderState.valueIndicatorAnimationDuration,vsync : this});
        this.enableController = lib6.AnimationController({
            duration : _SliderState.enableAnimationDuration,vsync : this});
        this.positionController = lib6.AnimationController({
            duration : core.DartDuration.zero,vsync : this});
        this.enableController.value = widget.onChanged != null ? 1.0 : 0.0;
        this.positionController.value = this._unlerp(widget.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        ((_750_)=>(!!_750_)?_750_.cancel():null)(this.interactionTimer);
        this.overlayController.dispose();
        this.valueIndicatorController.dispose();
        this.enableController.dispose();
        this.positionController.dispose();
        super.dispose();
    }
    _handleChanged(value : double) : any {
        /* TODO (AssertStatementImpl) : assert (widget.onChanged != null); */;
        let lerpValue : double = this._lerp(value);
        if (lerpValue != widget.value) {
            widget.onChanged(lerpValue);
        }
    }
    _handleDragStart(value : double) : any {
        /* TODO (AssertStatementImpl) : assert (widget.onChangeStart != null); */;
        widget.onChangeStart(this._lerp(value));
    }
    _handleDragEnd(value : double) : any {
        /* TODO (AssertStatementImpl) : assert (widget.onChangeEnd != null); */;
        widget.onChangeEnd(this._lerp(value));
    }
    _lerp(value : double) : double {
        /* TODO (AssertStatementImpl) : assert (value >= 0.0); */;
        /* TODO (AssertStatementImpl) : assert (value <= 1.0); */;
        return value * (op(Op.MINUS,widget.max,widget.min)) + widget.min;
    }
    _unlerp(value : double) : double {
        /* TODO (AssertStatementImpl) : assert (value <= widget.max); */;
        /* TODO (AssertStatementImpl) : assert (value >= widget.min); */;
        return op(Op.GT,widget.max,widget.min) ? (value - widget.min) / (op(Op.MINUS,widget.max,widget.min)) : 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterial(context)); */;
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMediaQuery(context)); */;
        let sliderTheme : lib8.SliderThemeData = lib8.SliderTheme.of(context);
        if (widget.activeColor != null || widget.inactiveColor != null) {
            sliderTheme = sliderTheme.copyWith({
                activeTrackColor : widget.activeColor,inactiveTrackColor : widget.inactiveColor,activeTickMarkColor : widget.inactiveColor,inactiveTickMarkColor : widget.activeColor,thumbColor : widget.activeColor,valueIndicatorColor : widget.activeColor,overlayColor : ((_751_)=>(!!_751_)?_751_.withAlpha(41):null)(widget.activeColor)});
        }
        return _SliderRenderObjectWidget({
            value : this._unlerp(widget.value),divisions : widget.divisions,label : widget.label,sliderTheme : sliderTheme,mediaQueryData : lib9.MediaQuery.of(context),onChanged : (widget.onChanged != null) && (op(Op.GT,widget.max,widget.min)) ? this._handleChanged.bind(this) : null,onChangeStart : widget.onChangeStart != null ? this._handleDragStart.bind(this) : null,onChangeEnd : widget.onChangeEnd != null ? this._handleDragEnd.bind(this) : null,state : this,semanticFormatterCallback : widget.semanticFormatterCallback});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SliderState() {
    }
}

export namespace Slider {
    export type Constructors = lib3.StatefulWidget.Constructors | 'Slider';
    export type Interface = Omit<Slider, Constructors>;
}
@DartClass
export class Slider extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,value? : double,onChanged? : <T>(value : double) => void,onChangeStart? : <T>(value : double) => void,onChangeEnd? : <T>(value : double) => void,min? : double,max? : double,divisions? : number,label? : string,activeColor? : any,inactiveColor? : any,semanticFormatterCallback? : (value : double) => string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Slider(_namedArguments? : {key? : lib4.Key,value? : double,onChanged? : <T>(value : double) => void,onChangeStart? : <T>(value : double) => void,onChangeEnd? : <T>(value : double) => void,min? : double,max? : double,divisions? : number,label? : string,activeColor? : any,inactiveColor? : any,semanticFormatterCallback? : (value : double) => string}) {
        let {key,value,onChanged,onChangeStart,onChangeEnd,min,max,divisions,label,activeColor,inactiveColor,semanticFormatterCallback} = Object.assign({
            "min" : 0.0,
            "max" : 1.0}, _namedArguments );
        this.assert = assert;
        this.value = value;
        this.onChanged = onChanged;
        this.onChangeStart = onChangeStart;
        this.onChangeEnd = onChangeEnd;
        this.min = min;
        this.max = max;
        this.divisions = divisions;
        this.label = label;
        this.activeColor = activeColor;
        this.inactiveColor = inactiveColor;
        this.semanticFormatterCallback = semanticFormatterCallback;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    value : double;

    onChanged : <T>(value : double) => void;

    onChangeStart : <T>(value : double) => void;

    onChangeEnd : <T>(value : double) => void;

    min : double;

    max : double;

    divisions : number;

    label : string;

    activeColor : any;

    inactiveColor : any;

    semanticFormatterCallback : (value : double) => string;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _SliderState {
        return _SliderState();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib5.DoubleProperty('value',this.value));
        properties.add(lib5.DoubleProperty('min',this.min));
        properties.add(lib5.DoubleProperty('max',this.max));
    }
}

export class properties {
    static set platform(value : lib13.TargetPlatform) {
        if (op(Op.EQUALS,properties._platform,value)) return;
        properties._platform = value;
        markNeedsSemanticsUpdate();
    }
    static get _semanticActionUnit() : double {
        return properties.divisions != null ? 1.0 / properties.divisions : properties._adjustmentUnit;
    }
    private static __$_positionAnimationDuration : core.DartDuration;
    static get _positionAnimationDuration() : core.DartDuration { 
        if (this.__$_positionAnimationDuration===undefined) {
            this.__$_positionAnimationDuration = core.DartDuration({
                milliseconds : 75});
        }
        return this.__$_positionAnimationDuration;
    }
    static set _positionAnimationDuration(__$value : core.DartDuration)  { 
        this.__$_positionAnimationDuration = __$value;
    }

    private static __$_minimumInteractionTime : core.DartDuration;
    static get _minimumInteractionTime() : core.DartDuration { 
        if (this.__$_minimumInteractionTime===undefined) {
            this.__$_minimumInteractionTime = core.DartDuration({
                milliseconds : 500});
        }
        return this.__$_minimumInteractionTime;
    }
    static set _minimumInteractionTime(__$value : core.DartDuration)  { 
        this.__$_minimumInteractionTime = __$value;
    }

    private static __$_minPreferredTrackWidth : double;
    static get _minPreferredTrackWidth() : double { 
        if (this.__$_minPreferredTrackWidth===undefined) {
            this.__$_minPreferredTrackWidth = 144.0;
        }
        return this.__$_minPreferredTrackWidth;
    }
    static set _minPreferredTrackWidth(__$value : double)  { 
        this.__$_minPreferredTrackWidth = __$value;
    }

    static get _maxSliderPartWidth() : double {
        return properties._sliderPartSizes.map((size : any) =>  {
            return size.width;
        }).reduce(math.max);
    }
    static get _maxSliderPartHeight() : double {
        return properties._sliderPartSizes.map((size : any) =>  {
            return size.width;
        }).reduce(math.max);
    }
    static get _sliderPartSizes() : core.DartList<any> {
        return new core.DartList.literal<any>(properties._sliderTheme.overlayShape.getPreferredSize(properties.isInteractive,properties.isDiscrete),properties._sliderTheme.thumbShape.getPreferredSize(properties.isInteractive,properties.isDiscrete),properties._sliderTheme.tickMarkShape.getPreferredSize({
            isEnabled : properties.isInteractive,sliderTheme : properties.sliderTheme}));
    }
    static get _minPreferredTrackHeight() : double {
        return properties._sliderTheme.trackHeight;
    }
    private static __$_state : _SliderState;
    static get _state() : _SliderState { 
        return this.__$_state;
    }
    static set _state(__$value : _SliderState)  { 
        this.__$_state = __$value;
    }

    private static __$_overlayAnimation : lib21.Animation<double>;
    static get _overlayAnimation() : lib21.Animation<double> { 
        return this.__$_overlayAnimation;
    }
    static set _overlayAnimation(__$value : lib21.Animation<double>)  { 
        this.__$_overlayAnimation = __$value;
    }

    private static __$_valueIndicatorAnimation : lib21.Animation<double>;
    static get _valueIndicatorAnimation() : lib21.Animation<double> { 
        return this.__$_valueIndicatorAnimation;
    }
    static set _valueIndicatorAnimation(__$value : lib21.Animation<double>)  { 
        this.__$_valueIndicatorAnimation = __$value;
    }

    private static __$_enableAnimation : lib21.Animation<double>;
    static get _enableAnimation() : lib21.Animation<double> { 
        return this.__$_enableAnimation;
    }
    static set _enableAnimation(__$value : lib21.Animation<double>)  { 
        this.__$_enableAnimation = __$value;
    }

    private static __$_labelPainter : lib22.TextPainter;
    static get _labelPainter() : lib22.TextPainter { 
        if (this.__$_labelPainter===undefined) {
            this.__$_labelPainter = lib22.TextPainter();
        }
        return this.__$_labelPainter;
    }
    static set _labelPainter(__$value : lib22.TextPainter)  { 
        this.__$_labelPainter = __$value;
    }

    private static __$_drag : lib16.HorizontalDragGestureRecognizer;
    static get _drag() : lib16.HorizontalDragGestureRecognizer { 
        return this.__$_drag;
    }
    static set _drag(__$value : lib16.HorizontalDragGestureRecognizer)  { 
        this.__$_drag = __$value;
    }

    private static __$_tap : lib17.TapGestureRecognizer;
    static get _tap() : lib17.TapGestureRecognizer { 
        return this.__$_tap;
    }
    static set _tap(__$value : lib17.TapGestureRecognizer)  { 
        this.__$_tap = __$value;
    }

    private static __$_active : boolean;
    static get _active() : boolean { 
        if (this.__$_active===undefined) {
            this.__$_active = false;
        }
        return this.__$_active;
    }
    static set _active(__$value : boolean)  { 
        this.__$_active = __$value;
    }

    private static __$_currentDragValue : double;
    static get _currentDragValue() : double { 
        if (this.__$_currentDragValue===undefined) {
            this.__$_currentDragValue = 0.0;
        }
        return this.__$_currentDragValue;
    }
    static set _currentDragValue(__$value : double)  { 
        this.__$_currentDragValue = __$value;
    }

    static get _trackRect() : any {
        return properties._sliderTheme.trackShape.getPreferredRect({
            parentBox : this,offset : Offset.zero,sliderTheme : properties._sliderTheme,isDiscrete : false});
    }
    static get isInteractive() : boolean {
        return properties.onChanged != null;
    }
    static get isDiscrete() : boolean {
        return properties.divisions != null && properties.divisions > 0;
    }
    static get value() : double {
        return properties._value;
    }
    private static __$_value : double;
    static get _value() : double { 
        return this.__$_value;
    }
    static set _value(__$value : double)  { 
        this.__$_value = __$value;
    }

    static set value(newValue : double) {
        /* TODO (AssertStatementImpl) : assert (newValue != null && newValue >= 0.0 && newValue <= 1.0); */;
        let convertedValue : double = properties.isDiscrete ? _discretize(newValue) : newValue;
        if (convertedValue == properties._value) {
            return;
        }
        properties._value = convertedValue;
        if (properties.isDiscrete) {
            let distance : double = new core.DartDouble((properties._value - properties._state.positionController.value)).abs();
            properties._state.positionController.duration = distance != 0.0 ? op(Op.TIMES,properties._positionAnimationDuration,(1.0 / distance)) : core.DartDuration.zero;
            properties._state.positionController.animateTo(convertedValue,{
                curve : lib18.Curves.easeInOut});
        }else {
            properties._state.positionController.value = convertedValue;
        }
        markNeedsSemanticsUpdate();
    }
    private static __$_platform : lib13.TargetPlatform;
    static get _platform() : lib13.TargetPlatform { 
        return this.__$_platform;
    }
    static set _platform(__$value : lib13.TargetPlatform)  { 
        this.__$_platform = __$value;
    }

    static get platform() : lib13.TargetPlatform {
        return properties._platform;
    }
    private static __$_semanticFormatterCallback : (value : double) => string;
    static get _semanticFormatterCallback() : (value : double) => string { 
        return this.__$_semanticFormatterCallback;
    }
    static set _semanticFormatterCallback(__$value : (value : double) => string)  { 
        this.__$_semanticFormatterCallback = __$value;
    }

    static get semanticFormatterCallback() : (value : double) => string {
        return properties._semanticFormatterCallback;
    }
    static set semanticFormatterCallback(value : (value : double) => string) {
        if (op(Op.EQUALS,properties._semanticFormatterCallback,value)) return;
        properties._semanticFormatterCallback = value;
        markNeedsSemanticsUpdate();
    }
    static get divisions() : number {
        return properties._divisions;
    }
    private static __$_divisions : number;
    static get _divisions() : number { 
        return this.__$_divisions;
    }
    static set _divisions(__$value : number)  { 
        this.__$_divisions = __$value;
    }

    static set divisions(value : number) {
        if (value == properties._divisions) {
            return;
        }
        properties._divisions = value;
        markNeedsPaint();
    }
    static get label() : string {
        return properties._label;
    }
    private static __$_label : string;
    static get _label() : string { 
        return this.__$_label;
    }
    static set _label(__$value : string)  { 
        this.__$_label = __$value;
    }

    static set label(value : string) {
        if (value == properties._label) {
            return;
        }
        properties._label = value;
        _updateLabelPainter();
    }
    static get sliderTheme() : lib8.SliderThemeData {
        return properties._sliderTheme;
    }
    private static __$_sliderTheme : lib8.SliderThemeData;
    static get _sliderTheme() : lib8.SliderThemeData { 
        return this.__$_sliderTheme;
    }
    static set _sliderTheme(__$value : lib8.SliderThemeData)  { 
        this.__$_sliderTheme = __$value;
    }

    static set sliderTheme(value : lib8.SliderThemeData) {
        if (op(Op.EQUALS,value,properties._sliderTheme)) {
            return;
        }
        properties._sliderTheme = value;
        markNeedsPaint();
    }
    static get theme() : lib12.ThemeData {
        return properties._theme;
    }
    private static __$_theme : lib12.ThemeData;
    static get _theme() : lib12.ThemeData { 
        return this.__$_theme;
    }
    static set _theme(__$value : lib12.ThemeData)  { 
        this.__$_theme = __$value;
    }

    static set theme(value : lib12.ThemeData) {
        if (op(Op.EQUALS,value,properties._theme)) {
            return;
        }
        properties._theme = value;
        markNeedsPaint();
    }
    static get mediaQueryData() : lib9.MediaQueryData {
        return properties._mediaQueryData;
    }
    private static __$_mediaQueryData : lib9.MediaQueryData;
    static get _mediaQueryData() : lib9.MediaQueryData { 
        return this.__$_mediaQueryData;
    }
    static set _mediaQueryData(__$value : lib9.MediaQueryData)  { 
        this.__$_mediaQueryData = __$value;
    }

    static set mediaQueryData(value : lib9.MediaQueryData) {
        if (op(Op.EQUALS,value,properties._mediaQueryData)) {
            return;
        }
        properties._mediaQueryData = value;
        _updateLabelPainter();
    }
    static get onChanged() : <T>(value : double) => void {
        return properties._onChanged;
    }
    private static __$_onChanged : <T>(value : double) => void;
    static get _onChanged() : <T>(value : double) => void { 
        return this.__$_onChanged;
    }
    static set _onChanged(__$value : <T>(value : double) => void)  { 
        this.__$_onChanged = __$value;
    }

    static set onChanged(value : <T>(value : double) => void) {
        if (op(Op.EQUALS,value,properties._onChanged)) {
            return;
        }
        let wasInteractive : boolean = properties.isInteractive;
        properties._onChanged = value;
        if (wasInteractive != properties.isInteractive) {
            if (properties.isInteractive) {
                properties._state.enableController.forward();
            }else {
                properties._state.enableController.reverse();
            }
            markNeedsPaint();
            markNeedsSemanticsUpdate();
        }
    }
    private static __$onChangeStart : <T>(value : double) => void;
    static get onChangeStart() : <T>(value : double) => void { 
        return this.__$onChangeStart;
    }
    static set onChangeStart(__$value : <T>(value : double) => void)  { 
        this.__$onChangeStart = __$value;
    }

    private static __$onChangeEnd : <T>(value : double) => void;
    static get onChangeEnd() : <T>(value : double) => void { 
        return this.__$onChangeEnd;
    }
    static set onChangeEnd(__$value : <T>(value : double) => void)  { 
        this.__$onChangeEnd = __$value;
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

    static get showValueIndicator() : boolean {
        let showValueIndicator : boolean;
        switch (properties._sliderTheme.showValueIndicator) {
            case lib8.ShowValueIndicator.onlyForDiscrete:
                showValueIndicator = properties.isDiscrete;
                break;
            case lib8.ShowValueIndicator.onlyForContinuous:
                showValueIndicator = !properties.isDiscrete;
                break;
            case lib8.ShowValueIndicator.always:
                showValueIndicator = true;
                break;
            case lib8.ShowValueIndicator.never:
                showValueIndicator = false;
                break;
        }
        return showValueIndicator;
    }
    static get _adjustmentUnit() : double {
        switch (properties._platform) {
            case lib13.TargetPlatform.iOS:
                return 0.1;
            case lib13.TargetPlatform.android:
            case lib13.TargetPlatform.fuchsia:
            default:
                return 0.05;
        }
    }
    static get sizedByParent() : boolean {
        return true;
    }
    static set textDirection(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,value,properties._textDirection)) {
            return;
        }
        properties._textDirection = value;
        _updateLabelPainter();
    }
}
