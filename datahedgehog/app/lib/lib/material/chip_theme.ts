/** Library asset:datahedgehog_monitor/lib/lib/material/chip_theme.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "./theme";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib10 from "./theme_data";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/painting/stadium_border";
import * as lib12 from "./colors";

export namespace ChipTheme {
    export type Constructors = lib3.InheritedWidget.Constructors | 'ChipTheme';
    export type Interface = Omit<ChipTheme, Constructors>;
}
@DartClass
export class ChipTheme extends lib3.InheritedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,data? : ChipThemeData,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ChipTheme(_namedArguments? : {key? : lib4.Key,data? : ChipThemeData,child? : lib3.Widget}) {
        let {key,data,child} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.data = data;
    }
     : any;

     : any;

     : any;

    key;
    child;

     : any;

    data : ChipThemeData;

    static of(context : lib3.BuildContext) : ChipThemeData {
        let inheritedTheme : ChipTheme = context.inheritFromWidgetOfExactType(ChipTheme);
        return (((t)=>(!!t)?t.data:null)(inheritedTheme) || lib5.Theme.of(context).chipTheme);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateShouldNotify(oldWidget : ChipTheme) : boolean {
        return this.data != oldWidget.data;
    }
}

export namespace ChipThemeData {
    export type Constructors = lib6.Diagnosticable.Constructors | 'ChipThemeData';
    export type Interface = Omit<ChipThemeData, Constructors>;
}
@DartClass
export class ChipThemeData extends lib6.Diagnosticable {
    constructor(_namedArguments? : {backgroundColor? : any,deleteIconColor? : any,disabledColor? : any,selectedColor? : any,secondarySelectedColor? : any,labelPadding? : lib7.EdgeInsetsGeometry,padding? : lib7.EdgeInsetsGeometry,shape? : lib8.ShapeBorder,labelStyle? : lib9.TextStyle,secondaryLabelStyle? : lib9.TextStyle,brightness? : any,elevation? : double,pressElevation? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ChipThemeData(_namedArguments? : {backgroundColor? : any,deleteIconColor? : any,disabledColor? : any,selectedColor? : any,secondarySelectedColor? : any,labelPadding? : lib7.EdgeInsetsGeometry,padding? : lib7.EdgeInsetsGeometry,shape? : lib8.ShapeBorder,labelStyle? : lib9.TextStyle,secondaryLabelStyle? : lib9.TextStyle,brightness? : any,elevation? : double,pressElevation? : double}) {
        let {backgroundColor,deleteIconColor,disabledColor,selectedColor,secondarySelectedColor,labelPadding,padding,shape,labelStyle,secondaryLabelStyle,brightness,elevation,pressElevation} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.backgroundColor = backgroundColor;
        this.deleteIconColor = deleteIconColor;
        this.disabledColor = disabledColor;
        this.selectedColor = selectedColor;
        this.secondarySelectedColor = secondarySelectedColor;
        this.labelPadding = labelPadding;
        this.padding = padding;
        this.shape = shape;
        this.labelStyle = labelStyle;
        this.secondaryLabelStyle = secondaryLabelStyle;
        this.brightness = brightness;
        this.elevation = elevation;
        this.pressElevation = pressElevation;
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

    @namedFactory
    static $fromDefaults(_namedArguments? : {brightness? : any,primaryColor? : any,secondaryColor? : any,labelStyle? : lib9.TextStyle}) : ChipThemeData {
        let {brightness,primaryColor,secondaryColor,labelStyle} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (primaryColor != null || brightness != null, 'One of primaryColor or brightness must be specified'); */;
        /* TODO (AssertStatementImpl) : assert (primaryColor == null || brightness == null, 'Only one of primaryColor or brightness may be specified'); */;
        /* TODO (AssertStatementImpl) : assert (secondaryColor != null); */;
        /* TODO (AssertStatementImpl) : assert (labelStyle != null); */;
        if (primaryColor != null) {
            brightness = lib10.ThemeData.estimateBrightnessForColor(primaryColor);
        }
        let backgroundAlpha : number = 31;
        let deleteIconAlpha : number = 222;
        let disabledAlpha : number = 12;
        let selectAlpha : number = 61;
        let textLabelAlpha : number = 222;
        let shape : lib8.ShapeBorder = lib11.StadiumBorder();
        let labelPadding : lib7.EdgeInsetsGeometry = lib7.EdgeInsets.symmetric({
            horizontal : 8.0});
        let padding : lib7.EdgeInsetsGeometry = lib7.EdgeInsets.all(4.0);
        primaryColor = (primaryColor || (op(Op.EQUALS,brightness,Brightness.light) ? lib12.Colors.black : lib12.Colors.white));
        let backgroundColor : any = primaryColor.withAlpha(backgroundAlpha);
        let deleteIconColor : any = primaryColor.withAlpha(deleteIconAlpha);
        let disabledColor : any = primaryColor.withAlpha(disabledAlpha);
        let selectedColor : any = primaryColor.withAlpha(selectAlpha);
        let secondarySelectedColor : any = secondaryColor.withAlpha(selectAlpha);
        let secondaryLabelStyle : lib9.TextStyle = labelStyle.copyWith({
            color : secondaryColor.withAlpha(textLabelAlpha)});
        labelStyle = labelStyle.copyWith({
            color : primaryColor.withAlpha(textLabelAlpha)});
        return ChipThemeData({
            backgroundColor : backgroundColor,deleteIconColor : deleteIconColor,disabledColor : disabledColor,selectedColor : selectedColor,secondarySelectedColor : secondarySelectedColor,labelPadding : labelPadding,padding : padding,shape : shape,labelStyle : labelStyle,secondaryLabelStyle : secondaryLabelStyle,brightness : brightness});
    }
    static fromDefaults : new(_namedArguments? : {brightness? : any,primaryColor? : any,secondaryColor? : any,labelStyle? : lib9.TextStyle}) => ChipThemeData;

    backgroundColor : any;

    deleteIconColor : any;

    disabledColor : any;

    selectedColor : any;

    secondarySelectedColor : any;

    labelPadding : lib7.EdgeInsetsGeometry;

    padding : lib7.EdgeInsetsGeometry;

    shape : lib8.ShapeBorder;

    labelStyle : lib9.TextStyle;

    secondaryLabelStyle : lib9.TextStyle;

    brightness : any;

    elevation : double;

    pressElevation : double;

    copyWith(_namedArguments? : {backgroundColor? : any,deleteIconColor? : any,disabledColor? : any,selectedColor? : any,secondarySelectedColor? : any,labelPadding? : lib7.EdgeInsetsGeometry,padding? : lib7.EdgeInsetsGeometry,shape? : lib8.ShapeBorder,labelStyle? : lib9.TextStyle,secondaryLabelStyle? : lib9.TextStyle,brightness? : any,elevation? : double,pressElevation? : double}) : ChipThemeData {
        let {backgroundColor,deleteIconColor,disabledColor,selectedColor,secondarySelectedColor,labelPadding,padding,shape,labelStyle,secondaryLabelStyle,brightness,elevation,pressElevation} = Object.assign({
        }, _namedArguments );
        return ChipThemeData({
            backgroundColor : (backgroundColor || this.backgroundColor),deleteIconColor : (deleteIconColor || this.deleteIconColor),disabledColor : (disabledColor || this.disabledColor),selectedColor : (selectedColor || this.selectedColor),secondarySelectedColor : (secondarySelectedColor || this.secondarySelectedColor),labelPadding : (labelPadding || this.labelPadding),padding : (padding || this.padding),shape : (shape || this.shape),labelStyle : (labelStyle || this.labelStyle),secondaryLabelStyle : (secondaryLabelStyle || this.secondaryLabelStyle),brightness : (brightness || this.brightness),elevation : (elevation || this.elevation),pressElevation : (pressElevation || this.pressElevation)});
    }
    static lerp(a : ChipThemeData,b : ChipThemeData,t : double) : ChipThemeData {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        return ChipThemeData({
            backgroundColor : Color.lerp(((t)=>(!!t)?t.backgroundColor:null)(a),((t)=>(!!t)?t.backgroundColor:null)(b),t),deleteIconColor : Color.lerp(((t)=>(!!t)?t.deleteIconColor:null)(a),((t)=>(!!t)?t.deleteIconColor:null)(b),t),disabledColor : Color.lerp(((t)=>(!!t)?t.disabledColor:null)(a),((t)=>(!!t)?t.disabledColor:null)(b),t),selectedColor : Color.lerp(((t)=>(!!t)?t.selectedColor:null)(a),((t)=>(!!t)?t.selectedColor:null)(b),t),secondarySelectedColor : Color.lerp(((t)=>(!!t)?t.secondarySelectedColor:null)(a),((t)=>(!!t)?t.secondarySelectedColor:null)(b),t),labelPadding : lib7.EdgeInsetsGeometry.lerp(((t)=>(!!t)?t.labelPadding:null)(a),((t)=>(!!t)?t.labelPadding:null)(b),t),padding : lib7.EdgeInsetsGeometry.lerp(((t)=>(!!t)?t.padding:null)(a),((t)=>(!!t)?t.padding:null)(b),t),shape : lib8.ShapeBorder.lerp(((t)=>(!!t)?t.shape:null)(a),((t)=>(!!t)?t.shape:null)(b),t),labelStyle : lib9.TextStyle.lerp(((t)=>(!!t)?t.labelStyle:null)(a),((t)=>(!!t)?t.labelStyle:null)(b),t),secondaryLabelStyle : lib9.TextStyle.lerp(((t)=>(!!t)?t.secondaryLabelStyle:null)(a),((t)=>(!!t)?t.secondaryLabelStyle:null)(b),t),brightness : t < 0.5 ? (((t)=>(!!t)?t.brightness:null)(a) || Brightness.light) : (((t)=>(!!t)?t.brightness:null)(b) || Brightness.light),elevation : lerpDouble(((t)=>(!!t)?t.elevation:null)(a),((t)=>(!!t)?t.elevation:null)(b),t),pressElevation : lerpDouble(((t)=>(!!t)?t.pressElevation:null)(a),((t)=>(!!t)?t.pressElevation:null)(b),t)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.backgroundColor,this.deleteIconColor,this.disabledColor,this.selectedColor,this.secondarySelectedColor,this.labelPadding,this.padding,this.shape,this.labelStyle,this.secondaryLabelStyle,this.brightness,this.elevation,this.pressElevation);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        if (core.identical(this,other)) {
            return true;
        }
        if (other.runtimeType != this.runtimeType) {
            return false;
        }
        let otherData : ChipThemeData = other;
        return op(Op.EQUALS,otherData.backgroundColor,this.backgroundColor) && op(Op.EQUALS,otherData.deleteIconColor,this.deleteIconColor) && op(Op.EQUALS,otherData.disabledColor,this.disabledColor) && op(Op.EQUALS,otherData.selectedColor,this.selectedColor) && op(Op.EQUALS,otherData.secondarySelectedColor,this.secondarySelectedColor) && op(Op.EQUALS,otherData.labelPadding,this.labelPadding) && op(Op.EQUALS,otherData.padding,this.padding) && op(Op.EQUALS,otherData.shape,this.shape) && op(Op.EQUALS,otherData.labelStyle,this.labelStyle) && op(Op.EQUALS,otherData.secondaryLabelStyle,this.secondaryLabelStyle) && op(Op.EQUALS,otherData.brightness,this.brightness) && otherData.elevation == this.elevation && otherData.pressElevation == this.pressElevation;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib6.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        let defaultTheme : lib10.ThemeData = lib10.ThemeData.fallback();
        let defaultData : ChipThemeData = ChipThemeData.fromDefaults({
            secondaryColor : defaultTheme.primaryColor,brightness : defaultTheme.brightness,labelStyle : defaultTheme.textTheme.body2});
        properties.add(lib6.DiagnosticsProperty('backgroundColor',this.backgroundColor,{
            defaultValue : defaultData.backgroundColor}));
        properties.add(lib6.DiagnosticsProperty('deleteIconColor',this.deleteIconColor,{
            defaultValue : defaultData.deleteIconColor}));
        properties.add(lib6.DiagnosticsProperty('disabledColor',this.disabledColor,{
            defaultValue : defaultData.disabledColor}));
        properties.add(lib6.DiagnosticsProperty('selectedColor',this.selectedColor,{
            defaultValue : defaultData.selectedColor}));
        properties.add(lib6.DiagnosticsProperty('secondarySelectedColor',this.secondarySelectedColor,{
            defaultValue : defaultData.secondarySelectedColor}));
        properties.add(lib6.DiagnosticsProperty('labelPadding',this.labelPadding,{
            defaultValue : defaultData.labelPadding}));
        properties.add(lib6.DiagnosticsProperty('padding',this.padding,{
            defaultValue : defaultData.padding}));
        properties.add(lib6.DiagnosticsProperty('shape',this.shape,{
            defaultValue : defaultData.shape}));
        properties.add(lib6.DiagnosticsProperty('labelStyle',this.labelStyle,{
            defaultValue : defaultData.labelStyle}));
        properties.add(lib6.DiagnosticsProperty('secondaryLabelStyle',this.secondaryLabelStyle,{
            defaultValue : defaultData.secondaryLabelStyle}));
        properties.add(lib6.EnumProperty('brightness',this.brightness,{
            defaultValue : defaultData.brightness}));
        properties.add(lib6.DoubleProperty('elevation',this.elevation,{
            defaultValue : defaultData.elevation}));
        properties.add(lib6.DoubleProperty('pressElevation',this.pressElevation,{
            defaultValue : defaultData.pressElevation}));
    }
}

export class properties {
}
