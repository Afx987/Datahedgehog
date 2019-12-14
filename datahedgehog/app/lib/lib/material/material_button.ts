/** Library asset:datahedgehog_monitor/lib/lib/material/material_button.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "./button_theme";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib8 from "./theme_data";
import * as lib9 from "./theme";
import * as lib10 from "./button";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export var MaterialButtonWithIconMixin : () => any = () : any =>  {
};
export namespace MaterialButton {
    export type Constructors = lib3.StatelessWidget.Constructors | 'MaterialButton';
    export type Interface = Omit<MaterialButton, Constructors>;
}
@DartClass
export class MaterialButton extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,onPressed? : any,onHighlightChanged? : <T>(value : boolean) => void,textTheme? : lib5.ButtonTextTheme,textColor? : any,disabledTextColor? : any,color? : any,disabledColor? : any,highlightColor? : any,splashColor? : any,colorBrightness? : any,elevation? : double,highlightElevation? : double,disabledElevation? : double,padding? : lib6.EdgeInsetsGeometry,shape? : lib7.ShapeBorder,clipBehavior? : any,materialTapTargetSize? : lib8.MaterialTapTargetSize,animationDuration? : core.DartDuration,minWidth? : double,height? : double,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MaterialButton(_namedArguments? : {key? : lib4.Key,onPressed? : any,onHighlightChanged? : <T>(value : boolean) => void,textTheme? : lib5.ButtonTextTheme,textColor? : any,disabledTextColor? : any,color? : any,disabledColor? : any,highlightColor? : any,splashColor? : any,colorBrightness? : any,elevation? : double,highlightElevation? : double,disabledElevation? : double,padding? : lib6.EdgeInsetsGeometry,shape? : lib7.ShapeBorder,clipBehavior? : any,materialTapTargetSize? : lib8.MaterialTapTargetSize,animationDuration? : core.DartDuration,minWidth? : double,height? : double,child? : lib3.Widget}) {
        let {key,onPressed,onHighlightChanged,textTheme,textColor,disabledTextColor,color,disabledColor,highlightColor,splashColor,colorBrightness,elevation,highlightElevation,disabledElevation,padding,shape,clipBehavior,materialTapTargetSize,animationDuration,minWidth,height,child} = Object.assign({
            "clipBehavior" : Clip.none}, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.onPressed = onPressed;
        this.onHighlightChanged = onHighlightChanged;
        this.textTheme = textTheme;
        this.textColor = textColor;
        this.disabledTextColor = disabledTextColor;
        this.color = color;
        this.disabledColor = disabledColor;
        this.highlightColor = highlightColor;
        this.splashColor = splashColor;
        this.colorBrightness = colorBrightness;
        this.elevation = elevation;
        this.highlightElevation = highlightElevation;
        this.disabledElevation = disabledElevation;
        this.padding = padding;
        this.shape = shape;
        this.clipBehavior = clipBehavior;
        this.materialTapTargetSize = materialTapTargetSize;
        this.animationDuration = animationDuration;
        this.minWidth = minWidth;
        this.height = height;
        this.child = child;
    }
    onPressed : any;

    onHighlightChanged : <T>(value : boolean) => void;

    textTheme : lib5.ButtonTextTheme;

    textColor : any;

    disabledTextColor : any;

    color : any;

    disabledColor : any;

    splashColor : any;

    highlightColor : any;

    elevation : double;

    highlightElevation : double;

    disabledElevation : double;

    colorBrightness : any;

    child : lib3.Widget;

    get enabled() : boolean {
        return this.onPressed != null;
    }
    padding : lib6.EdgeInsetsGeometry;

    shape : lib7.ShapeBorder;

    clipBehavior : any;

    animationDuration : core.DartDuration;

    materialTapTargetSize : lib8.MaterialTapTargetSize;

    minWidth : double;

    height : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let theme : lib8.ThemeData = lib9.Theme.of(context);
        let buttonTheme : lib5.ButtonThemeData = lib5.ButtonTheme.of(context);
        return lib10.RawMaterialButton({
            onPressed : this.onPressed,onHighlightChanged : this.onHighlightChanged,fillColor : this.color,textStyle : theme.textTheme.button.copyWith({
                color : buttonTheme.getTextColor(this)}),highlightColor : (this.highlightColor || theme.highlightColor),splashColor : (this.splashColor || theme.splashColor),elevation : buttonTheme.getElevation(this),highlightElevation : buttonTheme.getHighlightElevation(this),padding : buttonTheme.getPadding(this),constraints : buttonTheme.getConstraints(this).copyWith({
                minWidth : this.minWidth,minHeight : this.height}),shape : buttonTheme.shape,clipBehavior : (this.clipBehavior || Clip.none),animationDuration : buttonTheme.getAnimationDuration(this),child : this.child,materialTapTargetSize : (this.materialTapTargetSize || theme.materialTapTargetSize)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib11.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib11.FlagProperty('enabled',{
            value : this.enabled,ifFalse : 'disabled'}));
    }
}

export class properties {
}
