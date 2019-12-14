/** Library asset:datahedgehog_monitor/lib/lib/material/outline_button.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./material_button";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "./button_theme";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as lib16 from "./colors";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib18 from "./theme";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib20 from "./raised_button";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/widgets/transitions";

export namespace OutlineButton {
    export type Constructors = lib3.MaterialButton.Constructors | 'OutlineButton';
    export type Interface = Omit<OutlineButton, Constructors>;
}
@DartClass
export class OutlineButton extends lib3.MaterialButton {
    constructor(_namedArguments? : {key? : lib4.Key,onPressed? : any,textTheme? : lib5.ButtonTextTheme,textColor? : any,disabledTextColor? : any,color? : any,highlightColor? : any,splashColor? : any,highlightElevation? : double,borderSide? : lib6.BorderSide,disabledBorderColor? : any,highlightedBorderColor? : any,padding? : lib7.EdgeInsetsGeometry,shape? : lib6.ShapeBorder,clipBehavior? : any,child? : lib8.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OutlineButton(_namedArguments? : {key? : lib4.Key,onPressed? : any,textTheme? : lib5.ButtonTextTheme,textColor? : any,disabledTextColor? : any,color? : any,highlightColor? : any,splashColor? : any,highlightElevation? : double,borderSide? : lib6.BorderSide,disabledBorderColor? : any,highlightedBorderColor? : any,padding? : lib7.EdgeInsetsGeometry,shape? : lib6.ShapeBorder,clipBehavior? : any,child? : lib8.Widget}) {
        let {key,onPressed,textTheme,textColor,disabledTextColor,color,highlightColor,splashColor,highlightElevation,borderSide,disabledBorderColor,highlightedBorderColor,padding,shape,clipBehavior,child} = Object.assign({
            "clipBehavior" : Clip.none}, _namedArguments );
        this.assert = assert;
        this.borderSide = borderSide;
        this.disabledBorderColor = disabledBorderColor;
        this.highlightedBorderColor = highlightedBorderColor;
    }
     : any;

     : any;

     : any;

    key;
    onPressed;

    onPressed;
    textTheme;

    textTheme;
    textColor;

    textColor;
    disabledTextColor;

    disabledTextColor;
    color;

    color;
    highlightColor;

    highlightColor;
    splashColor;

    splashColor;
    highlightElevation;

    highlightElevation;
    padding;

    padding;
    shape;

    shape;
    clipBehavior;

    clipBehavior;
    child;

    child;
    ;

    @namedFactory
    static $icon(_namedArguments? : {key? : lib4.Key,onPressed? : any,textTheme? : lib5.ButtonTextTheme,textColor? : any,disabledTextColor? : any,color? : any,highlightColor? : any,splashColor? : any,highlightElevation? : double,highlightedBorderColor? : any,disabledBorderColor? : any,borderSide? : lib6.BorderSide,padding? : lib7.EdgeInsetsGeometry,shape? : lib6.ShapeBorder,clipBehavior? : any,icon? : lib8.Widget,label? : lib8.Widget}) : OutlineButton {
        let {key,onPressed,textTheme,textColor,disabledTextColor,color,highlightColor,splashColor,highlightElevation,highlightedBorderColor,disabledBorderColor,borderSide,padding,shape,clipBehavior,icon,label} = Object.assign({
        }, _namedArguments );
        return new _OutlineButtonWithIcon({
            key : key,onPressed : onPressed,textTheme : textTheme,textColor : textColor,disabledTextColor : disabledTextColor,color : color,highlightColor : highlightColor,splashColor : splashColor,highlightElevation : highlightElevation,highlightedBorderColor : highlightedBorderColor,disabledBorderColor : disabledBorderColor,borderSide : borderSide,padding : padding,shape : shape,clipBehavior : clipBehavior,icon : icon,label : label});
    }
    static icon : new(_namedArguments? : {key? : lib4.Key,onPressed? : any,textTheme? : lib5.ButtonTextTheme,textColor? : any,disabledTextColor? : any,color? : any,highlightColor? : any,splashColor? : any,highlightElevation? : double,highlightedBorderColor? : any,disabledBorderColor? : any,borderSide? : lib6.BorderSide,padding? : lib7.EdgeInsetsGeometry,shape? : lib6.ShapeBorder,clipBehavior? : any,icon? : lib8.Widget,label? : lib8.Widget}) => OutlineButton;

    highlightedBorderColor : any;

    disabledBorderColor : any;

    borderSide : lib6.BorderSide;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib8.BuildContext) : lib8.Widget {
        let buttonTheme : lib5.ButtonThemeData = lib5.ButtonTheme.of(context);
        return _OutlineButton({
            onPressed : this.onPressed,brightness : buttonTheme.getBrightness(this),textTheme : this.textTheme,textColor : buttonTheme.getTextColor(this),disabledTextColor : buttonTheme.getDisabledTextColor(this),color : this.color,highlightColor : buttonTheme.getHighlightColor(this),splashColor : buttonTheme.getSplashColor(this),highlightElevation : buttonTheme.getHighlightElevation(this),borderSide : this.borderSide,disabledBorderColor : this.disabledBorderColor,highlightedBorderColor : (this.highlightedBorderColor || buttonTheme.colorScheme.primary),padding : buttonTheme.getPadding(this),shape : buttonTheme.getShape(this),clipBehavior : this.clipBehavior,child : this.child});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib9.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib9.ObjectFlagProperty('onPressed',this.onPressed,{
            ifNull : 'disabled'}));
        properties.add(lib9.DiagnosticsProperty('textTheme',this.textTheme,{
            defaultValue : null}));
        properties.add(lib9.DiagnosticsProperty('textColor',this.textColor,{
            defaultValue : null}));
        properties.add(lib9.DiagnosticsProperty('disabledTextColor',this.disabledTextColor,{
            defaultValue : null}));
        properties.add(lib9.DiagnosticsProperty('color',this.color,{
            defaultValue : null}));
        properties.add(lib9.DiagnosticsProperty('highlightColor',this.highlightColor,{
            defaultValue : null}));
        properties.add(lib9.DiagnosticsProperty('splashColor',this.splashColor,{
            defaultValue : null}));
        properties.add(lib9.DiagnosticsProperty('highlightElevation',this.highlightElevation,{
            defaultValue : null}));
        properties.add(lib9.DiagnosticsProperty('borderSide',this.borderSide,{
            defaultValue : null}));
        properties.add(lib9.DiagnosticsProperty('disabledBorderColor',this.disabledBorderColor,{
            defaultValue : null}));
        properties.add(lib9.DiagnosticsProperty('highlightedBorderColor',this.highlightedBorderColor,{
            defaultValue : null}));
        properties.add(lib9.DiagnosticsProperty('padding',this.padding,{
            defaultValue : null}));
        properties.add(lib9.DiagnosticsProperty('shape',this.shape,{
            defaultValue : null}));
    }
}

export namespace _OutlineButton {
    export type Constructors = lib8.StatefulWidget.Constructors | '_OutlineButton';
    export type Interface = Omit<_OutlineButton, Constructors>;
}
@DartClass
export class _OutlineButton extends lib8.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,onPressed? : any,brightness? : any,textTheme? : lib5.ButtonTextTheme,textColor? : any,disabledTextColor? : any,color? : any,highlightColor? : any,splashColor? : any,highlightElevation? : double,borderSide? : lib6.BorderSide,disabledBorderColor? : any,highlightedBorderColor? : any,padding? : lib7.EdgeInsetsGeometry,shape? : lib6.ShapeBorder,clipBehavior? : any,child? : lib8.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _OutlineButton(_namedArguments? : {key? : lib4.Key,onPressed? : any,brightness? : any,textTheme? : lib5.ButtonTextTheme,textColor? : any,disabledTextColor? : any,color? : any,highlightColor? : any,splashColor? : any,highlightElevation? : double,borderSide? : lib6.BorderSide,disabledBorderColor? : any,highlightedBorderColor? : any,padding? : lib7.EdgeInsetsGeometry,shape? : lib6.ShapeBorder,clipBehavior? : any,child? : lib8.Widget}) {
        let {key,onPressed,brightness,textTheme,textColor,disabledTextColor,color,highlightColor,splashColor,highlightElevation,borderSide,disabledBorderColor,highlightedBorderColor,padding,shape,clipBehavior,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.onPressed = onPressed;
        this.brightness = brightness;
        this.textTheme = textTheme;
        this.textColor = textColor;
        this.disabledTextColor = disabledTextColor;
        this.color = color;
        this.highlightColor = highlightColor;
        this.splashColor = splashColor;
        this.highlightElevation = highlightElevation;
        this.borderSide = borderSide;
        this.disabledBorderColor = disabledBorderColor;
        this.highlightedBorderColor = highlightedBorderColor;
        this.padding = padding;
        this.shape = shape;
        this.clipBehavior = clipBehavior;
        this.child = child;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    onPressed : any;

    brightness : any;

    textTheme : lib5.ButtonTextTheme;

    textColor : any;

    disabledTextColor : any;

    color : any;

    splashColor : any;

    highlightColor : any;

    highlightElevation : double;

    borderSide : lib6.BorderSide;

    disabledBorderColor : any;

    highlightedBorderColor : any;

    padding : lib7.EdgeInsetsGeometry;

    shape : lib6.ShapeBorder;

    clipBehavior : any;

    child : lib8.Widget;

    get enabled() : boolean {
        return this.onPressed != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _OutlineButtonState {
        return _OutlineButtonState();
    }
}

export namespace _OutlineButtonState {
    export type Constructors = '_OutlineButtonState';
    export type Interface = Omit<_OutlineButtonState, Constructors>;
}
@DartClass
@With(any)
export class _OutlineButtonState extends any implements any.Interface {
    _controller : lib12.AnimationController;

    _fillAnimation : lib13.Animation<double>;

    _elevationAnimation : lib13.Animation<double>;

    _pressed : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._controller = lib12.AnimationController({
            duration : properties._kPressDuration,vsync : this});
        this._fillAnimation = lib15.CurvedAnimation({
            parent : this._controller,curve : new lib14.Interval(0.0,0.5,{
                curve : lib14.Curves.fastOutSlowIn})});
        this._elevationAnimation = lib15.CurvedAnimation({
            parent : this._controller,curve : new lib14.Interval(0.5,0.5),reverseCurve : new lib14.Interval(1.0,1.0)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : _OutlineButton) : any {
        super.didUpdateWidget(oldWidget);
        if (this._pressed && !widget.enabled) {
            this._pressed = false;
            this._controller.reverse();
        }
    }
    _handleHighlightChanged(value : boolean) : any {
        if (this._pressed == value) return;
        setState(() =>  {
            this._pressed = value;
            if (value) this._controller.forward();else this._controller.reverse();
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._controller.dispose();
        super.dispose();
    }
    _getFillColor() : any {
        if (op(Op.EQUALS,widget.highlightElevation,null) || op(Op.EQUALS,widget.highlightElevation,0.0)) return lib16.Colors.transparent;
        let color : any = (widget.color || lib18.Theme.of(lib17.properties.context).canvasColor);
        let colorTween : lib19.Tween<any> = lib19.ColorTween({
            begin : color.withAlpha(0),end : color.withAlpha(255)});
        return colorTween.evaluate(this._fillAnimation);
    }
    _getOutline() : lib6.BorderSide {
        if (op(Op.EQUALS,((t)=>(!!t)?t.style:null)(widget.borderSide),lib6.BorderStyle.none)) return widget.borderSide;
        let specifiedColor : any = widget.enabled ? ((this._pressed ? widget.highlightedBorderColor : null) || ((t)=>(!!t)?t.color:null)(widget.borderSide)) : widget.disabledBorderColor;
        let themeColor : any = lib18.Theme.of(lib17.properties.context).colorScheme.onSurface.withOpacity(0.12);
        return lib6.BorderSide({
            color : (specifiedColor || themeColor),width : (((t)=>(!!t)?t.width:null)(widget.borderSide) || 1.0)});
    }
    _getHighlightElevation() : double {
        if (op(Op.EQUALS,widget.highlightElevation,null) || op(Op.EQUALS,widget.highlightElevation,0.0)) return 0.0;
        return lib19.Tween({
            begin : 0.0,end : widget.highlightElevation}).evaluate(this._elevationAnimation);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib8.BuildContext) : lib8.Widget {
        return lib21.AnimatedBuilder({
            animation : this._controller,builder : (context : lib8.BuildContext,child : lib8.Widget) =>  {
                return lib20.RaisedButton({
                    textColor : widget.textColor,disabledTextColor : widget.disabledTextColor,color : this._getFillColor(),splashColor : widget.splashColor,highlightColor : widget.highlightColor,disabledColor : lib16.Colors.transparent,onPressed : widget.onPressed,elevation : 0.0,disabledElevation : 0.0,highlightElevation : this._getHighlightElevation(),onHighlightChanged : this._handleHighlightChanged.bind(this),padding : widget.padding,shape : _OutlineBorder({
                        shape : widget.shape,side : this._getOutline()}),clipBehavior : widget.clipBehavior,animationDuration : properties._kElevationDuration,child : widget.child});
            }});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _OutlineButtonState() {
        this._pressed = false;
    }
}

export namespace _OutlineBorder {
    export type Constructors = lib6.ShapeBorder.Constructors | '_OutlineBorder';
    export type Interface = Omit<_OutlineBorder, Constructors>;
}
@DartClass
export class _OutlineBorder extends lib6.ShapeBorder {
    constructor(_namedArguments? : {shape? : lib6.ShapeBorder,side? : lib6.BorderSide}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _OutlineBorder(_namedArguments? : {shape? : lib6.ShapeBorder,side? : lib6.BorderSide}) {
        let {shape,side} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.shape = shape;
        this.side = side;
    }
     : any;

     : any;

    shape : lib6.ShapeBorder;

    side : lib6.BorderSide;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dimensions() : lib7.EdgeInsetsGeometry {
        return lib7.EdgeInsets.all(this.side.width);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scale(t : double) : lib6.ShapeBorder {
        return _OutlineBorder({
            shape : this.shape.scale(t),side : this.side.scale(t)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpFrom(a : lib6.ShapeBorder,t : double) : lib6.ShapeBorder {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (is(a, _OutlineBorder)) {
            return _OutlineBorder({
                side : lib6.BorderSide.lerp(a.side,this.side,t),shape : lib6.ShapeBorder.lerp(a.shape,this.shape,t)});
        }
        return super.lerpFrom(a,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpTo(b : lib6.ShapeBorder,t : double) : lib6.ShapeBorder {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (is(b, _OutlineBorder)) {
            return _OutlineBorder({
                side : lib6.BorderSide.lerp(this.side,b.side,t),shape : lib6.ShapeBorder.lerp(this.shape,b.shape,t)});
        }
        return super.lerpTo(b,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getInnerPath(rect : any,_namedArguments? : {textDirection? : any}) : any {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        return this.shape.getInnerPath(rect.deflate(this.side.width),{
            textDirection : textDirection});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getOuterPath(rect : any,_namedArguments? : {textDirection? : any}) : any {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        return this.shape.getOuterPath(rect,{
            textDirection : textDirection});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,rect : any,_namedArguments? : {textDirection? : any}) : any {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        switch (this.side.style) {
            case lib6.BorderStyle.none:
                break;
            case lib6.BorderStyle.solid:
                canvas.drawPath(this.shape.getOuterPath(rect,{
                    textDirection : textDirection}),this.side.toPaint());
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (this.runtimeType != other.runtimeType) return false;
        let typedOther : _OutlineBorder = other;
        return op(Op.EQUALS,this.side,typedOther.side) && op(Op.EQUALS,this.shape,typedOther.shape);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.side,this.shape);
    }
}

export namespace _OutlineButtonWithIcon {
    export type Constructors = OutlineButton.Constructors | '_OutlineButtonWithIcon';
    export type Interface = Omit<_OutlineButtonWithIcon, Constructors>;
}
@DartClass
@With(any)
export class _OutlineButtonWithIcon extends OutlineButton implements any.Interface {
    constructor(_namedArguments? : {key? : lib4.Key,onPressed? : any,textTheme? : lib5.ButtonTextTheme,textColor? : any,disabledTextColor? : any,color? : any,highlightColor? : any,splashColor? : any,highlightElevation? : double,highlightedBorderColor? : any,disabledBorderColor? : any,borderSide? : lib6.BorderSide,padding? : lib7.EdgeInsetsGeometry,shape? : lib6.ShapeBorder,clipBehavior? : any,icon? : lib8.Widget,label? : lib8.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _OutlineButtonWithIcon(_namedArguments? : {key? : lib4.Key,onPressed? : any,textTheme? : lib5.ButtonTextTheme,textColor? : any,disabledTextColor? : any,color? : any,highlightColor? : any,splashColor? : any,highlightElevation? : double,highlightedBorderColor? : any,disabledBorderColor? : any,borderSide? : lib6.BorderSide,padding? : lib7.EdgeInsetsGeometry,shape? : lib6.ShapeBorder,clipBehavior? : any,icon? : lib8.Widget,label? : lib8.Widget}) {
        let {key,onPressed,textTheme,textColor,disabledTextColor,color,highlightColor,splashColor,highlightElevation,highlightedBorderColor,disabledBorderColor,borderSide,padding,shape,clipBehavior,icon,label} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    key;
    onPressed;

    onPressed;
    textTheme;

    textTheme;
    textColor;

    textColor;
    disabledTextColor;

    disabledTextColor;
    color;

    color;
    highlightColor;

    highlightColor;
    splashColor;

    splashColor;
    highlightElevation;

    highlightElevation;
    disabledBorderColor;

    disabledBorderColor;
    highlightedBorderColor;

    highlightedBorderColor;
    borderSide;

    borderSide;
    padding;

    padding;
    shape;

    shape;
    clipBehavior;

    clipBehavior;
    child;

    Row(_namedArguments? : {mainAxisSize? : any,children? : any}) {
        let {mainAxisSize,children} = Object.assign({
            "mainAxisSize" : lib10.MainAxisSize.min,
            "children" : new core.DartList.literal<lib8.Widget>(icon,new lib11.SizedBox({
                width : 8.0}),label)}, _namedArguments );
    }
}

export class properties {
    private static __$_kPressDuration : core.DartDuration;
    static get _kPressDuration() : core.DartDuration { 
        if (this.__$_kPressDuration===undefined) {
            this.__$_kPressDuration = core.DartDuration({
                milliseconds : 150});
        }
        return this.__$_kPressDuration;
    }
    static set _kPressDuration(__$value : core.DartDuration)  { 
        this.__$_kPressDuration = __$value;
    }

    private static __$_kElevationDuration : core.DartDuration;
    static get _kElevationDuration() : core.DartDuration { 
        if (this.__$_kElevationDuration===undefined) {
            this.__$_kElevationDuration = core.DartDuration({
                milliseconds : 75});
        }
        return this.__$_kElevationDuration;
    }
    static set _kElevationDuration(__$value : core.DartDuration)  { 
        this.__$_kElevationDuration = __$value;
    }

}
