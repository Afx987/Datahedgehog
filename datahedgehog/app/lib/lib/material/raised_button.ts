/** Library asset:datahedgehog_monitor/lib/lib/material/raised_button.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./material_button";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "./button_theme";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib8 from "./theme_data";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib10 from "./theme";
import * as lib11 from "./button";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/basic";

export namespace RaisedButton {
    export type Constructors = lib3.MaterialButton.Constructors | 'RaisedButton';
    export type Interface = Omit<RaisedButton, Constructors>;
}
@DartClass
export class RaisedButton extends lib3.MaterialButton {
    constructor(_namedArguments? : {key? : lib4.Key,onPressed? : any,onHighlightChanged? : <T>(value : boolean) => void,textTheme? : lib5.ButtonTextTheme,textColor? : any,disabledTextColor? : any,color? : any,disabledColor? : any,highlightColor? : any,splashColor? : any,colorBrightness? : any,elevation? : double,highlightElevation? : double,disabledElevation? : double,padding? : lib6.EdgeInsetsGeometry,shape? : lib7.ShapeBorder,clipBehavior? : any,materialTapTargetSize? : lib8.MaterialTapTargetSize,animationDuration? : core.DartDuration,child? : lib9.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RaisedButton(_namedArguments? : {key? : lib4.Key,onPressed? : any,onHighlightChanged? : <T>(value : boolean) => void,textTheme? : lib5.ButtonTextTheme,textColor? : any,disabledTextColor? : any,color? : any,disabledColor? : any,highlightColor? : any,splashColor? : any,colorBrightness? : any,elevation? : double,highlightElevation? : double,disabledElevation? : double,padding? : lib6.EdgeInsetsGeometry,shape? : lib7.ShapeBorder,clipBehavior? : any,materialTapTargetSize? : lib8.MaterialTapTargetSize,animationDuration? : core.DartDuration,child? : lib9.Widget}) {
        let {key,onPressed,onHighlightChanged,textTheme,textColor,disabledTextColor,color,disabledColor,highlightColor,splashColor,colorBrightness,elevation,highlightElevation,disabledElevation,padding,shape,clipBehavior,materialTapTargetSize,animationDuration,child} = Object.assign({
            "clipBehavior" : Clip.none}, _namedArguments );
        this.assert = assert;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    key;
    onPressed;

    onPressed;
    onHighlightChanged;

    onHighlightChanged;
    textTheme;

    textTheme;
    textColor;

    textColor;
    disabledTextColor;

    disabledTextColor;
    color;

    color;
    disabledColor;

    disabledColor;
    highlightColor;

    highlightColor;
    splashColor;

    splashColor;
    colorBrightness;

    colorBrightness;
    elevation;

    elevation;
    highlightElevation;

    highlightElevation;
    disabledElevation;

    disabledElevation;
    padding;

    padding;
    shape;

    shape;
    clipBehavior;

    clipBehavior;
    materialTapTargetSize;

    materialTapTargetSize;
    animationDuration;

    animationDuration;
    child;

    child;
    ;

    @namedFactory
    static $icon(_namedArguments? : {key? : lib4.Key,onPressed? : any,onHighlightChanged? : <T>(value : boolean) => void,textTheme? : lib5.ButtonTextTheme,textColor? : any,disabledTextColor? : any,color? : any,disabledColor? : any,highlightColor? : any,splashColor? : any,colorBrightness? : any,elevation? : double,highlightElevation? : double,disabledElevation? : double,shape? : lib7.ShapeBorder,clipBehavior? : any,materialTapTargetSize? : lib8.MaterialTapTargetSize,animationDuration? : core.DartDuration,icon? : lib9.Widget,label? : lib9.Widget}) : RaisedButton {
        let {key,onPressed,onHighlightChanged,textTheme,textColor,disabledTextColor,color,disabledColor,highlightColor,splashColor,colorBrightness,elevation,highlightElevation,disabledElevation,shape,clipBehavior,materialTapTargetSize,animationDuration,icon,label} = Object.assign({
        }, _namedArguments );
        return new _RaisedButtonWithIcon({
            key : key,onPressed : onPressed,onHighlightChanged : onHighlightChanged,textTheme : textTheme,textColor : textColor,disabledTextColor : disabledTextColor,color : color,disabledColor : disabledColor,highlightColor : highlightColor,splashColor : splashColor,colorBrightness : colorBrightness,elevation : elevation,highlightElevation : highlightElevation,disabledElevation : disabledElevation,shape : shape,clipBehavior : clipBehavior,materialTapTargetSize : materialTapTargetSize,animationDuration : animationDuration,icon : icon,label : label});
    }
    static icon : new(_namedArguments? : {key? : lib4.Key,onPressed? : any,onHighlightChanged? : <T>(value : boolean) => void,textTheme? : lib5.ButtonTextTheme,textColor? : any,disabledTextColor? : any,color? : any,disabledColor? : any,highlightColor? : any,splashColor? : any,colorBrightness? : any,elevation? : double,highlightElevation? : double,disabledElevation? : double,shape? : lib7.ShapeBorder,clipBehavior? : any,materialTapTargetSize? : lib8.MaterialTapTargetSize,animationDuration? : core.DartDuration,icon? : lib9.Widget,label? : lib9.Widget}) => RaisedButton;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib9.BuildContext) : lib9.Widget {
        let theme : lib8.ThemeData = lib10.Theme.of(context);
        let buttonTheme : lib5.ButtonThemeData = lib5.ButtonTheme.of(context);
        return lib11.RawMaterialButton({
            onPressed : this.onPressed,onHighlightChanged : this.onHighlightChanged,clipBehavior : (this.clipBehavior || Clip.none),fillColor : buttonTheme.getFillColor(this),textStyle : theme.textTheme.button.copyWith({
                color : buttonTheme.getTextColor(this)}),highlightColor : buttonTheme.getHighlightColor(this),splashColor : buttonTheme.getSplashColor(this),elevation : buttonTheme.getElevation(this),highlightElevation : buttonTheme.getHighlightElevation(this),disabledElevation : buttonTheme.getDisabledElevation(this),padding : buttonTheme.getPadding(this),constraints : buttonTheme.getConstraints(this),shape : buttonTheme.getShape(this),animationDuration : buttonTheme.getAnimationDuration(this),materialTapTargetSize : buttonTheme.getMaterialTapTargetSize(this),child : this.child});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib12.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib12.ObjectFlagProperty('onPressed',this.onPressed,{
            ifNull : 'disabled'}));
        properties.add(lib12.DiagnosticsProperty('textColor',this.textColor,{
            defaultValue : null}));
        properties.add(lib12.DiagnosticsProperty('disabledTextColor',this.disabledTextColor,{
            defaultValue : null}));
        properties.add(lib12.DiagnosticsProperty('color',this.color,{
            defaultValue : null}));
        properties.add(lib12.DiagnosticsProperty('disabledColor',this.disabledColor,{
            defaultValue : null}));
        properties.add(lib12.DiagnosticsProperty('highlightColor',this.highlightColor,{
            defaultValue : null}));
        properties.add(lib12.DiagnosticsProperty('splashColor',this.splashColor,{
            defaultValue : null}));
        properties.add(lib12.DiagnosticsProperty('colorBrightness',this.colorBrightness,{
            defaultValue : null}));
        properties.add(lib12.DiagnosticsProperty('elevation',this.elevation,{
            defaultValue : null}));
        properties.add(lib12.DiagnosticsProperty('highlightElevation',this.highlightElevation,{
            defaultValue : null}));
        properties.add(lib12.DiagnosticsProperty('disabledElevation',this.disabledElevation,{
            defaultValue : null}));
        properties.add(lib12.DiagnosticsProperty('padding',this.padding,{
            defaultValue : null}));
        properties.add(lib12.DiagnosticsProperty('shape',this.shape,{
            defaultValue : null}));
    }
}

export namespace _RaisedButtonWithIcon {
    export type Constructors = RaisedButton.Constructors | '_RaisedButtonWithIcon';
    export type Interface = Omit<_RaisedButtonWithIcon, Constructors>;
}
@DartClass
@With(any)
export class _RaisedButtonWithIcon extends RaisedButton implements any.Interface {
    constructor(_namedArguments? : {key? : lib4.Key,onPressed? : any,onHighlightChanged? : <T>(value : boolean) => void,textTheme? : lib5.ButtonTextTheme,textColor? : any,disabledTextColor? : any,color? : any,disabledColor? : any,highlightColor? : any,splashColor? : any,colorBrightness? : any,elevation? : double,highlightElevation? : double,disabledElevation? : double,shape? : lib7.ShapeBorder,clipBehavior? : any,materialTapTargetSize? : lib8.MaterialTapTargetSize,animationDuration? : core.DartDuration,icon? : lib9.Widget,label? : lib9.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RaisedButtonWithIcon(_namedArguments? : {key? : lib4.Key,onPressed? : any,onHighlightChanged? : <T>(value : boolean) => void,textTheme? : lib5.ButtonTextTheme,textColor? : any,disabledTextColor? : any,color? : any,disabledColor? : any,highlightColor? : any,splashColor? : any,colorBrightness? : any,elevation? : double,highlightElevation? : double,disabledElevation? : double,shape? : lib7.ShapeBorder,clipBehavior? : any,materialTapTargetSize? : lib8.MaterialTapTargetSize,animationDuration? : core.DartDuration,icon? : lib9.Widget,label? : lib9.Widget}) {
        let {key,onPressed,onHighlightChanged,textTheme,textColor,disabledTextColor,color,disabledColor,highlightColor,splashColor,colorBrightness,elevation,highlightElevation,disabledElevation,shape,clipBehavior,materialTapTargetSize,animationDuration,icon,label} = Object.assign({
            "clipBehavior" : Clip.none}, _namedArguments );
        this.assert = assert;
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

    key;
    onPressed;

    onPressed;
    onHighlightChanged;

    onHighlightChanged;
    textTheme;

    textTheme;
    textColor;

    textColor;
    disabledTextColor;

    disabledTextColor;
    color;

    color;
    disabledColor;

    disabledColor;
    highlightColor;

    highlightColor;
    splashColor;

    splashColor;
    colorBrightness;

    colorBrightness;
    elevation;

    elevation;
    highlightElevation;

    highlightElevation;
    disabledElevation;

    disabledElevation;
    shape;

    shape;
    clipBehavior;

    clipBehavior;
    materialTapTargetSize;

    materialTapTargetSize;
    animationDuration;

    animationDuration;
    child;

    Row(_namedArguments? : {mainAxisSize? : any,children? : any}) {
        let {mainAxisSize,children} = Object.assign({
            "mainAxisSize" : lib13.MainAxisSize.min,
            "children" : new core.DartList.literal<lib9.Widget>(icon,new lib14.SizedBox({
                width : 8.0}),label)}, _namedArguments );
    }
}

export class properties {
}
