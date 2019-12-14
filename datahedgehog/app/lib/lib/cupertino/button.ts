/** Library asset:datahedgehog_monitor/lib/lib/cupertino/button.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/border_radius";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/gestures/tap";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/scheduler/ticker";
import * as lib13 from "./theme";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme_data";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/widgets/transitions";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/widgets/gesture_detector";

export namespace CupertinoButton {
    export type Constructors = lib4.StatefulWidget.Constructors | 'CupertinoButton' | 'filled';
    export type Interface = Omit<CupertinoButton, Constructors>;
}
@DartClass
export class CupertinoButton extends lib4.StatefulWidget {
    constructor(_namedArguments? : {child? : lib4.Widget,padding? : lib3.EdgeInsetsGeometry,color? : any,disabledColor? : any,minSize? : double,pressedOpacity? : double,borderRadius? : lib5.BorderRadius,onPressed? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoButton(_namedArguments? : {child? : lib4.Widget,padding? : lib3.EdgeInsetsGeometry,color? : any,disabledColor? : any,minSize? : double,pressedOpacity? : double,borderRadius? : lib5.BorderRadius,onPressed? : any}) {
        let {child,padding,color,disabledColor,minSize,pressedOpacity,borderRadius,onPressed} = Object.assign({
            "minSize" : 44.0,
            "pressedOpacity" : 0.1,
            "borderRadius" : new lib5.BorderRadius.all(Radius.circular(8.0))}, _namedArguments );
        this._filled = false;
        this.color = null;
        this._filled = true;
        this.assert = assert;
        this.child = child;
        this.padding = padding;
        this.color = color;
        this.disabledColor = disabledColor;
        this.minSize = minSize;
        this.pressedOpacity = pressedOpacity;
        this.borderRadius = borderRadius;
        this.onPressed = onPressed;
    }
     : any;

    [null](pressedOpacity : any, : any) {
    }
     : any;

    _filled;

    @namedConstructor
    filled(_namedArguments? : {child? : lib4.Widget,padding? : lib3.EdgeInsetsGeometry,disabledColor? : any,minSize? : double,pressedOpacity? : double,borderRadius? : lib5.BorderRadius,onPressed? : any}) {
        let {child,padding,disabledColor,minSize,pressedOpacity,borderRadius,onPressed} = Object.assign({
            "minSize" : 44.0,
            "pressedOpacity" : 0.1,
            "borderRadius" : new lib5.BorderRadius.all(Radius.circular(8.0))}, _namedArguments );
        this._filled = false;
        this.color = null;
        this._filled = true;
        this.assert = assert;
        this.child = child;
        this.padding = padding;
        this.disabledColor = disabledColor;
        this.minSize = minSize;
        this.pressedOpacity = pressedOpacity;
        this.borderRadius = borderRadius;
        this.onPressed = onPressed;
    }
    static filled : new(_namedArguments? : {child? : lib4.Widget,padding? : lib3.EdgeInsetsGeometry,disabledColor? : any,minSize? : double,pressedOpacity? : double,borderRadius? : lib5.BorderRadius,onPressed? : any}) => CupertinoButton;

     : any;

    [null](pressedOpacity : any, : any) {
    }
     : any;

    color;
    _filled;

    child : lib4.Widget;

    padding : lib3.EdgeInsetsGeometry;

    color : any;

    disabledColor : any;

    onPressed : any;

    minSize : double;

    pressedOpacity : double;

    borderRadius : lib5.BorderRadius;

    _filled : boolean;

    get enabled() : boolean {
        return this.onPressed != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _CupertinoButtonState {
        return _CupertinoButtonState();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib6.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib6.FlagProperty('enabled',{
            value : this.enabled,ifFalse : 'disabled'}));
    }
}

export namespace _CupertinoButtonState {
    export type Constructors = '_CupertinoButtonState';
    export type Interface = Omit<_CupertinoButtonState, Constructors>;
}
@DartClass
@With(any)
export class _CupertinoButtonState extends any implements any.Interface {
    private static __$kFadeOutDuration : core.DartDuration;
    static get kFadeOutDuration() : core.DartDuration { 
        if (this.__$kFadeOutDuration===undefined) {
            this.__$kFadeOutDuration = core.DartDuration({
                milliseconds : 10});
        }
        return this.__$kFadeOutDuration;
    }

    private static __$kFadeInDuration : core.DartDuration;
    static get kFadeInDuration() : core.DartDuration { 
        if (this.__$kFadeInDuration===undefined) {
            this.__$kFadeInDuration = core.DartDuration({
                milliseconds : 100});
        }
        return this.__$kFadeInDuration;
    }

    _opacityTween : lib7.Tween<double>;

    _animationController : lib8.AnimationController;

    _opacityAnimation : lib9.Animation<double>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._animationController = lib8.AnimationController({
            duration : new core.DartDuration({
                milliseconds : 200}),value : 0.0,vsync : this});
        this._opacityAnimation = this._animationController.drive(lib7.CurveTween({
            curve : lib10.Curves.decelerate})).drive(this._opacityTween);
        this._setTween();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(old : CupertinoButton) : any {
        super.didUpdateWidget(old);
        this._setTween();
    }
    _setTween() : any {
        this._opacityTween.end = (widget.pressedOpacity || 1.0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._animationController.dispose();
        this._animationController = null;
        super.dispose();
    }
    _buttonHeldDown : boolean;

    _handleTapDown(event : lib11.TapDownDetails) : any {
        if (!this._buttonHeldDown) {
            this._buttonHeldDown = true;
            this._animate();
        }
    }
    _handleTapUp(event : lib11.TapUpDetails) : any {
        if (this._buttonHeldDown) {
            this._buttonHeldDown = false;
            this._animate();
        }
    }
    _handleTapCancel() : any {
        if (this._buttonHeldDown) {
            this._buttonHeldDown = false;
            this._animate();
        }
    }
    _animate() : any {
        if (this._animationController.isAnimating) return;
        let wasHeldDown : boolean = this._buttonHeldDown;
        let ticker : lib12.TickerFuture = this._buttonHeldDown ? this._animationController.animateTo(1.0,{
            duration : _CupertinoButtonState.kFadeOutDuration}) : this._animationController.animateTo(0.0,{
            duration : _CupertinoButtonState.kFadeInDuration});
        op(Op.LT,ticker.then.bind(ticker),);
        op(Op.GT,,((value : any) =>  {
            if (mounted && wasHeldDown != this._buttonHeldDown) this._animate();
        }));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib4.BuildContext) : lib4.Widget {
        let enabled : boolean = widget.enabled;
        let primaryColor : any = lib13.CupertinoTheme.of(context).primaryColor;
        let backgroundColor : any = (widget.color || (widget._filled ? primaryColor : null));
        let foregroundColor : any = backgroundColor != null ? lib13.CupertinoTheme.of(context).primaryContrastingColor : enabled ? primaryColor : properties._kDisabledForeground;
        let textStyle : lib14.TextStyle = lib13.CupertinoTheme.of(context).textTheme.textStyle.copyWith({
            color : foregroundColor});
        return lib23.GestureDetector({
            behavior : HitTestBehavior.opaque,onTapDown : enabled ? this._handleTapDown.bind(this) : null,onTapUp : enabled ? this._handleTapUp.bind(this) : null,onTapCancel : enabled ? this._handleTapCancel.bind(this) : null,onTap : widget.onPressed,child : lib20.Semantics({
                button : true,child : lib20.ConstrainedBox({
                    constraints : op(Op.EQUALS,widget.minSize,null) ? new lib15.BoxConstraints() : lib15.BoxConstraints({
                        minWidth : widget.minSize,minHeight : widget.minSize}),child : lib22.FadeTransition({
                        opacity : this._opacityAnimation,child : lib21.DecoratedBox({
                            decoration : lib16.BoxDecoration({
                                borderRadius : widget.borderRadius,color : backgroundColor != null && !enabled ? (widget.disabledColor || properties._kDisabledBackground) : backgroundColor}),child : lib20.Padding({
                                padding : (widget.padding || (backgroundColor != null ? properties._kBackgroundButtonPadding : properties._kButtonPadding)),child : lib20.Center({
                                    widthFactor : 1.0,heightFactor : 1.0,child : lib19.DefaultTextStyle({
                                        style : textStyle,child : lib18.IconTheme({
                                            data : lib17.IconThemeData({
                                                color : foregroundColor}),child : widget.child})})})})})})})})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoButtonState() {
        this._opacityTween = lib7.Tween({
            begin : 1.0});
        this._buttonHeldDown = false;
    }
}

export class properties {
    private static __$_kDisabledBackground : any;
    static get _kDisabledBackground() : any { 
        if (this.__$_kDisabledBackground===undefined) {
            this.__$_kDisabledBackground = Color(4289309097);
        }
        return this.__$_kDisabledBackground;
    }
    static set _kDisabledBackground(__$value : any)  { 
        this.__$_kDisabledBackground = __$value;
    }

    private static __$_kDisabledForeground : any;
    static get _kDisabledForeground() : any { 
        if (this.__$_kDisabledForeground===undefined) {
            this.__$_kDisabledForeground = Color(4291940817);
        }
        return this.__$_kDisabledForeground;
    }
    static set _kDisabledForeground(__$value : any)  { 
        this.__$_kDisabledForeground = __$value;
    }

    private static __$_kButtonPadding : lib3.EdgeInsets;
    static get _kButtonPadding() : lib3.EdgeInsets { 
        if (this.__$_kButtonPadding===undefined) {
            this.__$_kButtonPadding = lib3.EdgeInsets.all(16.0);
        }
        return this.__$_kButtonPadding;
    }
    static set _kButtonPadding(__$value : lib3.EdgeInsets)  { 
        this.__$_kButtonPadding = __$value;
    }

    private static __$_kBackgroundButtonPadding : lib3.EdgeInsets;
    static get _kBackgroundButtonPadding() : lib3.EdgeInsets { 
        if (this.__$_kBackgroundButtonPadding===undefined) {
            this.__$_kBackgroundButtonPadding = lib3.EdgeInsets.symmetric({
                vertical : 14.0,horizontal : 64.0});
        }
        return this.__$_kBackgroundButtonPadding;
    }
    static set _kBackgroundButtonPadding(__$value : lib3.EdgeInsets)  { 
        this.__$_kBackgroundButtonPadding = __$value;
    }

}
