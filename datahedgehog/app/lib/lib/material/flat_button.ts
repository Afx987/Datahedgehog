/** Library asset:datahedgehog_monitor/lib/lib/material/flat_button.dart */
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
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/gesture_detector";
import * as lib12 from "./button";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/scrollbar";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/widgets/basic";

export namespace FlatButton {
    export type Constructors = lib3.MaterialButton.Constructors | 'FlatButton';
    export type Interface = Omit<FlatButton, Constructors>;
}
@DartClass
export class FlatButton extends lib3.MaterialButton {
    constructor(_namedArguments? : {key? : lib4.Key,onPressed? : any,onHighlightChanged? : <T>(value : boolean) => void,textTheme? : lib5.ButtonTextTheme,textColor? : any,disabledTextColor? : any,color? : any,disabledColor? : any,highlightColor? : any,splashColor? : any,colorBrightness? : any,padding? : lib6.EdgeInsetsGeometry,shape? : lib7.ShapeBorder,clipBehavior? : any,materialTapTargetSize? : lib8.MaterialTapTargetSize,child? : lib9.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FlatButton(_namedArguments? : {key? : lib4.Key,onPressed? : any,onHighlightChanged? : <T>(value : boolean) => void,textTheme? : lib5.ButtonTextTheme,textColor? : any,disabledTextColor? : any,color? : any,disabledColor? : any,highlightColor? : any,splashColor? : any,colorBrightness? : any,padding? : lib6.EdgeInsetsGeometry,shape? : lib7.ShapeBorder,clipBehavior? : any,materialTapTargetSize? : lib8.MaterialTapTargetSize,child? : lib9.Widget}) {
        let {key,onPressed,onHighlightChanged,textTheme,textColor,disabledTextColor,color,disabledColor,highlightColor,splashColor,colorBrightness,padding,shape,clipBehavior,materialTapTargetSize,child} = Object.assign({
            "clipBehavior" : Clip.none}, _namedArguments );
        super.MaterialButton({
            key : key,onPressed : onPressed,onHighlightChanged : onHighlightChanged,textTheme : textTheme,textColor : textColor,disabledTextColor : disabledTextColor,color : color,disabledColor : disabledColor,highlightColor : highlightColor,splashColor : splashColor,colorBrightness : colorBrightness,padding : padding,shape : shape,clipBehavior : clipBehavior,materialTapTargetSize : materialTapTargetSize,child : child});
    }
    @namedFactory
    static $icon(_namedArguments? : {key? : lib4.Key,onPressed? : any,onHighlightChanged? : <T>(value : boolean) => void,textTheme? : lib5.ButtonTextTheme,textColor? : any,disabledTextColor? : any,color? : any,disabledColor? : any,highlightColor? : any,splashColor? : any,colorBrightness? : any,padding? : lib6.EdgeInsetsGeometry,shape? : lib7.ShapeBorder,clipBehavior? : any,materialTapTargetSize? : lib8.MaterialTapTargetSize,icon? : lib9.Widget,label? : lib9.Widget}) : FlatButton {
        let {key,onPressed,onHighlightChanged,textTheme,textColor,disabledTextColor,color,disabledColor,highlightColor,splashColor,colorBrightness,padding,shape,clipBehavior,materialTapTargetSize,icon,label} = Object.assign({
        }, _namedArguments );
        return new _FlatButtonWithIcon({
            key : key,onPressed : onPressed,onHighlightChanged : onHighlightChanged,textTheme : textTheme,textColor : textColor,disabledTextColor : disabledTextColor,color : color,disabledColor : disabledColor,highlightColor : highlightColor,splashColor : splashColor,colorBrightness : colorBrightness,padding : padding,shape : shape,clipBehavior : clipBehavior,materialTapTargetSize : materialTapTargetSize,icon : icon,label : label});
    }
    static icon : new(_namedArguments? : {key? : lib4.Key,onPressed? : any,onHighlightChanged? : <T>(value : boolean) => void,textTheme? : lib5.ButtonTextTheme,textColor? : any,disabledTextColor? : any,color? : any,disabledColor? : any,highlightColor? : any,splashColor? : any,colorBrightness? : any,padding? : lib6.EdgeInsetsGeometry,shape? : lib7.ShapeBorder,clipBehavior? : any,materialTapTargetSize? : lib8.MaterialTapTargetSize,icon? : lib9.Widget,label? : lib9.Widget}) => FlatButton;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib9.BuildContext) : lib9.Widget {
        let theme : lib8.ThemeData = lib10.Theme.of(context);
        let buttonTheme : lib5.ButtonThemeData = lib5.ButtonTheme.of(context);
        return lib12.RawMaterialButton({
            onPressed : this.onPressed,onHighlightChanged : this.onHighlightChanged,clipBehavior : (this.clipBehavior || Clip.none),fillColor : buttonTheme.getFillColor(this),textStyle : theme.textTheme.button.copyWith({
                color : buttonTheme.getTextColor(this)}),highlightColor : buttonTheme.getHighlightColor(this),splashColor : buttonTheme.getSplashColor(this),elevation : buttonTheme.getElevation(this),highlightElevation : buttonTheme.getHighlightElevation(this),disabledElevation : buttonTheme.getDisabledElevation(this),padding : buttonTheme.getPadding(this),constraints : buttonTheme.getConstraints(this),shape : buttonTheme.getShape(this),animationDuration : buttonTheme.getAnimationDuration(this),materialTapTargetSize : buttonTheme.getMaterialTapTargetSize(this),child : lib11.properties.child});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib13.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib13.ObjectFlagProperty('onPressed',this.onPressed,{
            ifNull : 'disabled'}));
        properties.add(lib13.DiagnosticsProperty('textTheme',this.textTheme,{
            defaultValue : null}));
        properties.add(lib13.DiagnosticsProperty('textColor',this.textColor,{
            defaultValue : null}));
        properties.add(lib13.DiagnosticsProperty('disabledTextColor',this.disabledTextColor,{
            defaultValue : null}));
        properties.add(lib13.DiagnosticsProperty('color',lib14.properties.color,{
            defaultValue : null}));
        properties.add(lib13.DiagnosticsProperty('disabledColor',this.disabledColor,{
            defaultValue : null}));
        properties.add(lib13.DiagnosticsProperty('highlightColor',this.highlightColor,{
            defaultValue : null}));
        properties.add(lib13.DiagnosticsProperty('splashColor',this.splashColor,{
            defaultValue : null}));
        properties.add(lib13.DiagnosticsProperty('colorBrightness',this.colorBrightness,{
            defaultValue : null}));
        properties.add(lib13.DiagnosticsProperty('padding',this.padding,{
            defaultValue : null}));
        properties.add(lib13.DiagnosticsProperty('shape',this.shape,{
            defaultValue : null}));
        properties.add(lib13.DiagnosticsProperty('materialTapTargetSize',this.materialTapTargetSize,{
            defaultValue : null}));
    }
}

export namespace _FlatButtonWithIcon {
    export type Constructors = FlatButton.Constructors | '_FlatButtonWithIcon';
    export type Interface = Omit<_FlatButtonWithIcon, Constructors>;
}
@DartClass
@With(any)
export class _FlatButtonWithIcon extends FlatButton implements any.Interface {
    constructor(_namedArguments? : {key? : lib4.Key,onPressed? : any,onHighlightChanged? : <T>(value : boolean) => void,textTheme? : lib5.ButtonTextTheme,textColor? : any,disabledTextColor? : any,color? : any,disabledColor? : any,highlightColor? : any,splashColor? : any,colorBrightness? : any,padding? : lib6.EdgeInsetsGeometry,shape? : lib7.ShapeBorder,clipBehavior? : any,materialTapTargetSize? : lib8.MaterialTapTargetSize,icon? : lib9.Widget,label? : lib9.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _FlatButtonWithIcon(_namedArguments? : {key? : lib4.Key,onPressed? : any,onHighlightChanged? : <T>(value : boolean) => void,textTheme? : lib5.ButtonTextTheme,textColor? : any,disabledTextColor? : any,color? : any,disabledColor? : any,highlightColor? : any,splashColor? : any,colorBrightness? : any,padding? : lib6.EdgeInsetsGeometry,shape? : lib7.ShapeBorder,clipBehavior? : any,materialTapTargetSize? : lib8.MaterialTapTargetSize,icon? : lib9.Widget,label? : lib9.Widget}) {
        let {key,onPressed,onHighlightChanged,textTheme,textColor,disabledTextColor,color,disabledColor,highlightColor,splashColor,colorBrightness,padding,shape,clipBehavior,materialTapTargetSize,icon,label} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
    }
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
    padding;

    padding;
    shape;

    shape;
    clipBehavior;

    clipBehavior;
    materialTapTargetSize;

    materialTapTargetSize;
    child;

    Row(_namedArguments? : {mainAxisSize? : any,children? : any}) {
        let {mainAxisSize,children} = Object.assign({
            "mainAxisSize" : lib15.MainAxisSize.min,
            "children" : new core.DartList.literal<lib9.Widget>(icon,new lib16.SizedBox({
                width : 8.0}),label)}, _namedArguments );
    }
}

export class properties {
}
