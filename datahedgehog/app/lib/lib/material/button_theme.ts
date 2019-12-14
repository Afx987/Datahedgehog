/** Library asset:datahedgehog_monitor/lib/lib/material/button_theme.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib7 from "./color_scheme";
import * as lib8 from "./theme_data";
import * as lib9 from "./theme";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/painting/border_radius";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/painting/rounded_rectangle_border";
import * as lib14 from "./material_button";
import * as lib15 from "./flat_button";
import * as lib16 from "./outline_button";
import * as lib17 from "./raised_button";
import * as lib18 from "./colors";
import * as lib19 from "./constants";

export enum ButtonTextTheme {
    normal,
    accent,
    primary
}

export enum ButtonBarLayoutBehavior {
    constrained,
    padded
}

export namespace ButtonTheme {
    export type Constructors = lib3.InheritedWidget.Constructors | 'ButtonTheme' | 'fromButtonThemeData' | 'bar';
    export type Interface = Omit<ButtonTheme, Constructors>;
}
@DartClass
export class ButtonTheme extends lib3.InheritedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,textTheme? : ButtonTextTheme,layoutBehavior? : ButtonBarLayoutBehavior,minWidth? : double,height? : double,padding? : lib5.EdgeInsetsGeometry,shape? : lib6.ShapeBorder,alignedDropdown? : boolean,buttonColor? : any,disabledColor? : any,highlightColor? : any,splashColor? : any,colorScheme? : lib7.ColorScheme,materialTapTargetSize? : lib8.MaterialTapTargetSize,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ButtonTheme(_namedArguments? : {key? : lib4.Key,textTheme? : ButtonTextTheme,layoutBehavior? : ButtonBarLayoutBehavior,minWidth? : double,height? : double,padding? : lib5.EdgeInsetsGeometry,shape? : lib6.ShapeBorder,alignedDropdown? : boolean,buttonColor? : any,disabledColor? : any,highlightColor? : any,splashColor? : any,colorScheme? : lib7.ColorScheme,materialTapTargetSize? : lib8.MaterialTapTargetSize,child? : lib3.Widget}) {
        let {key,textTheme,layoutBehavior,minWidth,height,padding,shape,alignedDropdown,buttonColor,disabledColor,highlightColor,splashColor,colorScheme,materialTapTargetSize,child} = Object.assign({
            "textTheme" : ButtonTextTheme.normal,
            "layoutBehavior" : ButtonBarLayoutBehavior.padded,
            "minWidth" : 88.0,
            "height" : 36.0,
            "alignedDropdown" : false}, _namedArguments );
        this.data = ButtonThemeData({
            textTheme : textTheme,minWidth : minWidth,height : height,padding : padding,shape : shape,alignedDropdown : alignedDropdown,layoutBehavior : layoutBehavior,buttonColor : buttonColor,disabledColor : disabledColor,highlightColor : highlightColor,splashColor : splashColor,colorScheme : colorScheme,materialTapTargetSize : materialTapTargetSize});
        this.data = ButtonThemeData({
            textTheme : textTheme,minWidth : minWidth,height : height,padding : padding,shape : shape,alignedDropdown : alignedDropdown,layoutBehavior : layoutBehavior,buttonColor : buttonColor,disabledColor : disabledColor,highlightColor : highlightColor,splashColor : splashColor,colorScheme : colorScheme});
        this.assert = assert;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    data;
    super;

     : any;

    key;
    child;

     : any;

    @namedConstructor
    fromButtonThemeData(_namedArguments? : {key? : lib4.Key,data? : any,child? : lib3.Widget}) {
        let {key,data,child} = Object.assign({
        }, _namedArguments );
        this.data = ButtonThemeData({
            textTheme : textTheme,minWidth : minWidth,height : height,padding : padding,shape : shape,alignedDropdown : alignedDropdown,layoutBehavior : layoutBehavior,buttonColor : buttonColor,disabledColor : disabledColor,highlightColor : highlightColor,splashColor : splashColor,colorScheme : colorScheme,materialTapTargetSize : materialTapTargetSize});
        this.data = ButtonThemeData({
            textTheme : textTheme,minWidth : minWidth,height : height,padding : padding,shape : shape,alignedDropdown : alignedDropdown,layoutBehavior : layoutBehavior,buttonColor : buttonColor,disabledColor : disabledColor,highlightColor : highlightColor,splashColor : splashColor,colorScheme : colorScheme});
        this.assert = assert;
        this.data = data;
    }
    static fromButtonThemeData : new(_namedArguments? : {key? : lib4.Key,data? : any,child? : lib3.Widget}) => ButtonTheme;

     : any;

     : any;

    key;
    child;

     : any;

    @namedConstructor
    bar(_namedArguments? : {key? : lib4.Key,textTheme? : ButtonTextTheme,minWidth? : double,height? : double,padding? : lib5.EdgeInsetsGeometry,shape? : lib6.ShapeBorder,alignedDropdown? : boolean,buttonColor? : any,disabledColor? : any,highlightColor? : any,splashColor? : any,colorScheme? : lib7.ColorScheme,child? : lib3.Widget,layoutBehavior? : ButtonBarLayoutBehavior}) {
        let {key,textTheme,minWidth,height,padding,shape,alignedDropdown,buttonColor,disabledColor,highlightColor,splashColor,colorScheme,child,layoutBehavior} = Object.assign({
            "textTheme" : ButtonTextTheme.accent,
            "minWidth" : 64.0,
            "height" : 36.0,
            "padding" : new lib5.EdgeInsets.symmetric({
                horizontal : 8.0}),
            "alignedDropdown" : false,
            "layoutBehavior" : ButtonBarLayoutBehavior.padded}, _namedArguments );
        this.data = ButtonThemeData({
            textTheme : textTheme,minWidth : minWidth,height : height,padding : padding,shape : shape,alignedDropdown : alignedDropdown,layoutBehavior : layoutBehavior,buttonColor : buttonColor,disabledColor : disabledColor,highlightColor : highlightColor,splashColor : splashColor,colorScheme : colorScheme,materialTapTargetSize : materialTapTargetSize});
        this.data = ButtonThemeData({
            textTheme : textTheme,minWidth : minWidth,height : height,padding : padding,shape : shape,alignedDropdown : alignedDropdown,layoutBehavior : layoutBehavior,buttonColor : buttonColor,disabledColor : disabledColor,highlightColor : highlightColor,splashColor : splashColor,colorScheme : colorScheme});
        this.assert = assert;
    }
    static bar : new(_namedArguments? : {key? : lib4.Key,textTheme? : ButtonTextTheme,minWidth? : double,height? : double,padding? : lib5.EdgeInsetsGeometry,shape? : lib6.ShapeBorder,alignedDropdown? : boolean,buttonColor? : any,disabledColor? : any,highlightColor? : any,splashColor? : any,colorScheme? : lib7.ColorScheme,child? : lib3.Widget,layoutBehavior? : ButtonBarLayoutBehavior}) => ButtonTheme;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    data;
    super;

     : any;

    key;
    child;

     : any;

    data : ButtonThemeData;

    static of(context : lib3.BuildContext) : ButtonThemeData {
        let inheritedButtonTheme : ButtonTheme = context.inheritFromWidgetOfExactType(ButtonTheme);
        let buttonTheme : ButtonThemeData = ((t)=>(!!t)?t.data:null)(inheritedButtonTheme);
        if (op(Op.EQUALS,((t)=>(!!t)?t.colorScheme:null)(buttonTheme),null)) {
            let theme : lib8.ThemeData = lib9.Theme.of(context);
            buttonTheme = ( buttonTheme ) || ( theme.buttonTheme );
            if (op(Op.EQUALS,buttonTheme.colorScheme,null)) {
                buttonTheme = buttonTheme.copyWith({
                    colorScheme : (theme.buttonTheme.colorScheme || theme.colorScheme)});
                /* TODO (AssertStatementImpl) : assert (buttonTheme.colorScheme != null); */;
            }
        }
        return buttonTheme;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateShouldNotify(oldWidget : ButtonTheme) : boolean {
        return this.data != oldWidget.data;
    }
}

export namespace ButtonThemeData {
    export type Constructors = lib10.Diagnosticable.Constructors | 'ButtonThemeData';
    export type Interface = Omit<ButtonThemeData, Constructors>;
}
@DartClass
export class ButtonThemeData extends lib10.Diagnosticable {
    constructor(_namedArguments? : {textTheme? : ButtonTextTheme,minWidth? : double,height? : double,padding? : lib5.EdgeInsetsGeometry,shape? : lib6.ShapeBorder,layoutBehavior? : ButtonBarLayoutBehavior,alignedDropdown? : boolean,buttonColor? : any,disabledColor? : any,highlightColor? : any,splashColor? : any,colorScheme? : lib7.ColorScheme,materialTapTargetSize? : lib8.MaterialTapTargetSize}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ButtonThemeData(_namedArguments? : {textTheme? : ButtonTextTheme,minWidth? : double,height? : double,padding? : lib5.EdgeInsetsGeometry,shape? : lib6.ShapeBorder,layoutBehavior? : ButtonBarLayoutBehavior,alignedDropdown? : boolean,buttonColor? : any,disabledColor? : any,highlightColor? : any,splashColor? : any,colorScheme? : lib7.ColorScheme,materialTapTargetSize? : lib8.MaterialTapTargetSize}) {
        let {textTheme,minWidth,height,padding,shape,layoutBehavior,alignedDropdown,buttonColor,disabledColor,highlightColor,splashColor,colorScheme,materialTapTargetSize} = Object.assign({
            "textTheme" : ButtonTextTheme.normal,
            "minWidth" : 88.0,
            "height" : 36.0,
            "layoutBehavior" : ButtonBarLayoutBehavior.padded,
            "alignedDropdown" : false}, _namedArguments );
        this._buttonColor = buttonColor;
        this._disabledColor = disabledColor;
        this._highlightColor = highlightColor;
        this._splashColor = splashColor;
        this._padding = this.padding;
        this._shape = this.shape;
        this._materialTapTargetSize = materialTapTargetSize;
        this.assert = assert;
        this.textTheme = textTheme;
        this.minWidth = minWidth;
        this.height = height;
        this.layoutBehavior = layoutBehavior;
        this.alignedDropdown = alignedDropdown;
        this.colorScheme = colorScheme;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    _buttonColor;
    _disabledColor;
    _highlightColor;
    _splashColor;
    _padding;
    _shape;
    _materialTapTargetSize;

    minWidth : double;

    height : double;

    textTheme : ButtonTextTheme;

    layoutBehavior : ButtonBarLayoutBehavior;

    get constraints() : lib11.BoxConstraints {
        return lib11.BoxConstraints({
            minWidth : this.minWidth,minHeight : this.height});
    }
    get padding() : lib5.EdgeInsetsGeometry {
        if (this._padding != null) return this._padding;
        switch (this.textTheme) {
            case ButtonTextTheme.normal:
            case ButtonTextTheme.accent:
                return new lib5.EdgeInsets.symmetric({
                    horizontal : 16.0});
            case ButtonTextTheme.primary:
                return new lib5.EdgeInsets.symmetric({
                    horizontal : 24.0});
        }
        /* TODO (AssertStatementImpl) : assert (false); */;
        return lib5.EdgeInsets.zero;
    }
    _padding : lib5.EdgeInsetsGeometry;

    get shape() : lib6.ShapeBorder {
        if (this._shape != null) return this._shape;
        switch (this.textTheme) {
            case ButtonTextTheme.normal:
            case ButtonTextTheme.accent:
                return new lib13.RoundedRectangleBorder({
                    borderRadius : lib12.BorderRadius.all(Radius.circular(2.0))});
            case ButtonTextTheme.primary:
                return new lib13.RoundedRectangleBorder({
                    borderRadius : lib12.BorderRadius.all(Radius.circular(4.0))});
        }
        return new lib13.RoundedRectangleBorder();
    }
    _shape : lib6.ShapeBorder;

    alignedDropdown : boolean;

    _buttonColor : any;

    _disabledColor : any;

    _highlightColor : any;

    _splashColor : any;

    colorScheme : lib7.ColorScheme;

    _materialTapTargetSize : lib8.MaterialTapTargetSize;

    getBrightness(button : lib14.MaterialButton) : any {
        return (button.colorBrightness || this.colorScheme.brightness);
    }
    getTextTheme(button : lib14.MaterialButton) : ButtonTextTheme {
        return (button.textTheme || this.textTheme);
    }
    _getDisabledColor(button : lib14.MaterialButton) : any {
        return op(Op.EQUALS,this.getBrightness(button),Brightness.dark) ? this.colorScheme.onSurface.withOpacity(0.3) : this.colorScheme.onSurface.withOpacity(0.38);
    }
    getDisabledTextColor(button : lib14.MaterialButton) : any {
        if (button.disabledTextColor != null) return button.disabledTextColor;
        return this._getDisabledColor(button);
    }
    getDisabledFillColor(button : lib14.MaterialButton) : any {
        if (button.disabledColor != null) return button.disabledColor;
        if (this._disabledColor != null) return this._disabledColor;
        return this._getDisabledColor(button);
    }
    getFillColor(button : lib14.MaterialButton) : any {
        let fillColor : any = button.enabled ? button.color : button.disabledColor;
        if (fillColor != null) return fillColor;
        if (is(button, lib15.FlatButton) || is(button, lib16.OutlineButton)) return null;
        if (button.enabled && is(button, lib17.RaisedButton) && this._buttonColor != null) return this._buttonColor;
        switch (this.getTextTheme(button)) {
            case ButtonTextTheme.normal:
            case ButtonTextTheme.accent:
                return button.enabled ? this.colorScheme.primary : this.getDisabledFillColor(button);
            case ButtonTextTheme.primary:
                return button.enabled ? (this._buttonColor || this.colorScheme.primary) : this.colorScheme.onSurface.withOpacity(0.12);
        }
        /* TODO (AssertStatementImpl) : assert (false); */;
        return null;
    }
    getTextColor(button : lib14.MaterialButton) : any {
        if (!button.enabled) return this.getDisabledTextColor(button);
        if (button.textColor != null) return button.textColor;
        switch (this.getTextTheme(button)) {
            case ButtonTextTheme.normal:
                return op(Op.EQUALS,this.getBrightness(button),Brightness.dark) ? lib18.Colors.white : lib18.Colors.black87;
            case ButtonTextTheme.accent:
                return this.colorScheme.secondary;
            case ButtonTextTheme.primary:
                {
                    let fillColor : any = this.getFillColor(button);
                    let fillIsDark : boolean = fillColor != null ? op(Op.EQUALS,lib8.ThemeData.estimateBrightnessForColor(fillColor),Brightness.dark) : op(Op.EQUALS,this.getBrightness(button),Brightness.dark);
                    if (fillIsDark) return lib18.Colors.white;
                    if (is(button, lib15.FlatButton) || is(button, lib16.OutlineButton)) return this.colorScheme.primary;
                    return lib18.Colors.black;
                }
        }
        /* TODO (AssertStatementImpl) : assert (false); */;
        return null;
    }
    getSplashColor(button : lib14.MaterialButton) : any {
        if (button.splashColor != null) return button.splashColor;
        if (this._splashColor != null && (is(button, lib17.RaisedButton) || is(button, lib16.OutlineButton))) return this._splashColor;
        if (this._splashColor != null && is(button, lib15.FlatButton)) {
            switch (this.getTextTheme(button)) {
                case ButtonTextTheme.normal:
                case ButtonTextTheme.accent:
                    return this._splashColor;
                case ButtonTextTheme.primary:
                    break;
            }
        }
        return this.getTextColor(button).withOpacity(0.12);
    }
    getHighlightColor(button : lib14.MaterialButton) : any {
        if (button.highlightColor != null) return button.highlightColor;
        switch (this.getTextTheme(button)) {
            case ButtonTextTheme.normal:
            case ButtonTextTheme.accent:
                return (this._highlightColor || this.getTextColor(button).withOpacity(0.16));
            case ButtonTextTheme.primary:
                return lib18.Colors.transparent;
        }
        /* TODO (AssertStatementImpl) : assert (false); */;
        return lib18.Colors.transparent;
    }
    getElevation(button : lib14.MaterialButton) : double {
        if (button.elevation != null) return button.elevation;
        if (is(button, lib15.FlatButton)) return 0.0;
        return 2.0;
    }
    getHighlightElevation(button : lib14.MaterialButton) : double {
        if (button.highlightElevation != null) return button.highlightElevation;
        if (is(button, lib15.FlatButton)) return 0.0;
        if (is(button, lib16.OutlineButton)) return 0.0;
        return 8.0;
    }
    getDisabledElevation(button : lib14.MaterialButton) : double {
        if (button.disabledElevation != null) return button.disabledElevation;
        return 0.0;
    }
    getPadding(button : lib14.MaterialButton) : lib5.EdgeInsetsGeometry {
        if (button.padding != null) return button.padding;
        if (is(button, any)) return new lib5.EdgeInsetsDirectional.only({
            start : 12.0,end : 16.0});
        if (this._padding != null) return this._padding;
        switch (this.getTextTheme(button)) {
            case ButtonTextTheme.normal:
            case ButtonTextTheme.accent:
                return new lib5.EdgeInsets.symmetric({
                    horizontal : 16.0});
            case ButtonTextTheme.primary:
                return new lib5.EdgeInsets.symmetric({
                    horizontal : 24.0});
        }
        /* TODO (AssertStatementImpl) : assert (false); */;
        return lib5.EdgeInsets.zero;
    }
    getShape(button : lib14.MaterialButton) : lib6.ShapeBorder {
        return (button.shape || this.shape);
    }
    getAnimationDuration(button : lib14.MaterialButton) : core.DartDuration {
        return (button.animationDuration || lib19.properties.kThemeChangeDuration);
    }
    getConstraints(button : lib14.MaterialButton) : lib11.BoxConstraints {
        return this.constraints;
    }
    getMaterialTapTargetSize(button : lib14.MaterialButton) : lib8.MaterialTapTargetSize {
        return ((button.materialTapTargetSize || this._materialTapTargetSize) || lib8.MaterialTapTargetSize.padded);
    }
    copyWith(_namedArguments? : {textTheme? : ButtonTextTheme,layoutBehavior? : ButtonBarLayoutBehavior,minWidth? : double,height? : double,padding? : lib5.EdgeInsetsGeometry,shape? : lib6.ShapeBorder,alignedDropdown? : boolean,buttonColor? : any,disabledColor? : any,highlightColor? : any,splashColor? : any,colorScheme? : lib7.ColorScheme,materialTapTargetSize? : lib8.MaterialTapTargetSize}) : ButtonThemeData {
        let {textTheme,layoutBehavior,minWidth,height,padding,shape,alignedDropdown,buttonColor,disabledColor,highlightColor,splashColor,colorScheme,materialTapTargetSize} = Object.assign({
        }, _namedArguments );
        return ButtonThemeData({
            textTheme : (textTheme || this.textTheme),layoutBehavior : (layoutBehavior || this.layoutBehavior),minWidth : (minWidth || this.minWidth),height : (height || this.height),padding : (padding || this.padding),shape : (shape || this.shape),alignedDropdown : (alignedDropdown || this.alignedDropdown),buttonColor : (buttonColor || this._buttonColor),disabledColor : (disabledColor || this._disabledColor),highlightColor : (highlightColor || this._highlightColor),splashColor : (splashColor || this._splashColor),colorScheme : (colorScheme || this.colorScheme),materialTapTargetSize : (materialTapTargetSize || this._materialTapTargetSize)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : ButtonThemeData = other;
        return op(Op.EQUALS,this.textTheme,typedOther.textTheme) && this.minWidth == typedOther.minWidth && this.height == typedOther.height && op(Op.EQUALS,this.padding,typedOther.padding) && op(Op.EQUALS,this.shape,typedOther.shape) && this.alignedDropdown == typedOther.alignedDropdown && op(Op.EQUALS,this._buttonColor,typedOther._buttonColor) && op(Op.EQUALS,this._disabledColor,typedOther._disabledColor) && op(Op.EQUALS,this._highlightColor,typedOther._highlightColor) && op(Op.EQUALS,this._splashColor,typedOther._splashColor) && op(Op.EQUALS,this.colorScheme,typedOther.colorScheme) && op(Op.EQUALS,this._materialTapTargetSize,typedOther._materialTapTargetSize);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.textTheme,this.minWidth,this.height,this.padding,this.shape,this.alignedDropdown,this._buttonColor,this._disabledColor,this._highlightColor,this._splashColor,this.colorScheme,this._materialTapTargetSize);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib10.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        let defaultTheme : ButtonThemeData = ButtonThemeData();
        properties.add(lib10.EnumProperty('textTheme',this.textTheme,{
            defaultValue : defaultTheme.textTheme}));
        properties.add(lib10.DoubleProperty('minWidth',this.minWidth,{
            defaultValue : defaultTheme.minWidth}));
        properties.add(lib10.DoubleProperty('height',this.height,{
            defaultValue : defaultTheme.height}));
        properties.add(lib10.DiagnosticsProperty('padding',this.padding,{
            defaultValue : defaultTheme.padding}));
        properties.add(lib10.DiagnosticsProperty('shape',this.shape,{
            defaultValue : defaultTheme.shape}));
        properties.add(lib10.FlagProperty('alignedDropdown',{
            value : this.alignedDropdown,defaultValue : defaultTheme.alignedDropdown,ifTrue : 'dropdown width matches button'}));
        properties.add(lib10.DiagnosticsProperty('buttonColor',this._buttonColor,{
            defaultValue : null}));
        properties.add(lib10.DiagnosticsProperty('disabledColor',this._disabledColor,{
            defaultValue : null}));
        properties.add(lib10.DiagnosticsProperty('highlightColor',this._highlightColor,{
            defaultValue : null}));
        properties.add(lib10.DiagnosticsProperty('splashColor',this._splashColor,{
            defaultValue : null}));
        properties.add(lib10.DiagnosticsProperty('colorScheme',this.colorScheme,{
            defaultValue : defaultTheme.colorScheme}));
        properties.add(lib10.DiagnosticsProperty('materialTapTargetSize',this._materialTapTargetSize,{
            defaultValue : null}));
    }
}

export class properties {
}
