/** Library asset:datahedgehog_monitor/lib/lib/material/color_scheme.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib4 from "./colors";
import * as lib5 from "./theme_data";

export namespace ColorScheme {
    export type Constructors = lib3.Diagnosticable.Constructors | 'ColorScheme' | 'light' | 'dark';
    export type Interface = Omit<ColorScheme, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class ColorScheme extends lib3.Diagnosticable {
    constructor(_namedArguments? : {primary? : any,primaryVariant? : any,secondary? : any,secondaryVariant? : any,surface? : any,background? : any,error? : any,onPrimary? : any,onSecondary? : any,onSurface? : any,onBackground? : any,onError? : any,brightness? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ColorScheme(_namedArguments? : {primary? : any,primaryVariant? : any,secondary? : any,secondaryVariant? : any,surface? : any,background? : any,error? : any,onPrimary? : any,onSecondary? : any,onSurface? : any,onBackground? : any,onError? : any,brightness? : any}) {
        let {primary,primaryVariant,secondary,secondaryVariant,surface,background,error,onPrimary,onSecondary,onSurface,onBackground,onError,brightness} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.primary = primary;
        this.primaryVariant = primaryVariant;
        this.secondary = secondary;
        this.secondaryVariant = secondaryVariant;
        this.surface = surface;
        this.background = background;
        this.error = error;
        this.onPrimary = onPrimary;
        this.onSecondary = onSecondary;
        this.onSurface = onSurface;
        this.onBackground = onBackground;
        this.onError = onError;
        this.brightness = brightness;
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

    @namedConstructor
    light(_namedArguments? : {primary? : any,primaryVariant? : any,secondary? : any,secondaryVariant? : any,surface? : any,background? : any,error? : any,onPrimary? : any,onSecondary? : any,onSurface? : any,onBackground? : any,onError? : any,brightness? : any}) {
        let {primary,primaryVariant,secondary,secondaryVariant,surface,background,error,onPrimary,onSecondary,onSurface,onBackground,onError,brightness} = Object.assign({
            "primary" : new bare.createInstance(any,null,4284612846),
            "primaryVariant" : new bare.createInstance(any,null,4281794739),
            "secondary" : new bare.createInstance(any,null,4278442694),
            "secondaryVariant" : new bare.createInstance(any,null,4278290310),
            "surface" : lib4.Colors.white,
            "background" : lib4.Colors.white,
            "error" : new bare.createInstance(any,null,4289724448),
            "onPrimary" : lib4.Colors.white,
            "onSecondary" : lib4.Colors.black,
            "onSurface" : lib4.Colors.black,
            "onBackground" : lib4.Colors.black,
            "onError" : lib4.Colors.white,
            "brightness" : Brightness.light}, _namedArguments );
        this.assert = assert;
        this.primary = primary;
        this.primaryVariant = primaryVariant;
        this.secondary = secondary;
        this.secondaryVariant = secondaryVariant;
        this.surface = surface;
        this.background = background;
        this.error = error;
        this.onPrimary = onPrimary;
        this.onSecondary = onSecondary;
        this.onSurface = onSurface;
        this.onBackground = onBackground;
        this.onError = onError;
        this.brightness = brightness;
    }
    static light : new(_namedArguments? : {primary? : any,primaryVariant? : any,secondary? : any,secondaryVariant? : any,surface? : any,background? : any,error? : any,onPrimary? : any,onSecondary? : any,onSurface? : any,onBackground? : any,onError? : any,brightness? : any}) => ColorScheme;

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

    @namedConstructor
    dark(_namedArguments? : {primary? : any,primaryVariant? : any,secondary? : any,secondaryVariant? : any,surface? : any,background? : any,error? : any,onPrimary? : any,onSecondary? : any,onSurface? : any,onBackground? : any,onError? : any,brightness? : any}) {
        let {primary,primaryVariant,secondary,secondaryVariant,surface,background,error,onPrimary,onSecondary,onSurface,onBackground,onError,brightness} = Object.assign({
            "primary" : new bare.createInstance(any,null,4290479868),
            "primaryVariant" : new bare.createInstance(any,null,4283105744),
            "secondary" : new bare.createInstance(any,null,4278442694),
            "secondaryVariant" : new bare.createInstance(any,null,4278442694),
            "surface" : lib4.Colors.black,
            "background" : lib4.Colors.black,
            "error" : new bare.createInstance(any,null,4289724448),
            "onPrimary" : lib4.Colors.black,
            "onSecondary" : lib4.Colors.black,
            "onSurface" : lib4.Colors.white,
            "onBackground" : lib4.Colors.white,
            "onError" : lib4.Colors.black,
            "brightness" : Brightness.dark}, _namedArguments );
        this.assert = assert;
        this.primary = primary;
        this.primaryVariant = primaryVariant;
        this.secondary = secondary;
        this.secondaryVariant = secondaryVariant;
        this.surface = surface;
        this.background = background;
        this.error = error;
        this.onPrimary = onPrimary;
        this.onSecondary = onSecondary;
        this.onSurface = onSurface;
        this.onBackground = onBackground;
        this.onError = onError;
        this.brightness = brightness;
    }
    static dark : new(_namedArguments? : {primary? : any,primaryVariant? : any,secondary? : any,secondaryVariant? : any,surface? : any,background? : any,error? : any,onPrimary? : any,onSecondary? : any,onSurface? : any,onBackground? : any,onError? : any,brightness? : any}) => ColorScheme;

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

    @namedFactory
    static $fromSwatch(_namedArguments? : {primarySwatch? : lib4.MaterialColor,primaryColorDark? : any,accentColor? : any,cardColor? : any,backgroundColor? : any,errorColor? : any,brightness? : any}) : ColorScheme {
        let {primarySwatch,primaryColorDark,accentColor,cardColor,backgroundColor,errorColor,brightness} = Object.assign({
            "primarySwatch" : lib4.Colors.blue,
            "brightness" : Brightness.light}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (primarySwatch != null); */;
        /* TODO (AssertStatementImpl) : assert (brightness != null); */;
        let isDark : boolean = op(Op.EQUALS,brightness,Brightness.dark);
        let primaryIsDark : boolean = op(Op.EQUALS,ColorScheme._brightnessFor(primarySwatch),Brightness.dark);
        let secondary : any = (accentColor || (isDark ? op(Op.INDEX,lib4.Colors.tealAccent,200) : primarySwatch));
        let secondaryIsDark : boolean = op(Op.EQUALS,ColorScheme._brightnessFor(secondary),Brightness.dark);
        return ColorScheme({
            primary : primarySwatch,primaryVariant : (primaryColorDark || (isDark ? lib4.Colors.black : op(Op.INDEX,primarySwatch,700))),secondary : secondary,secondaryVariant : isDark ? op(Op.INDEX,lib4.Colors.tealAccent,700) : op(Op.INDEX,primarySwatch,700),surface : (cardColor || (isDark ? op(Op.INDEX,lib4.Colors.grey,800) : lib4.Colors.white)),background : (backgroundColor || (isDark ? op(Op.INDEX,lib4.Colors.grey,700) : op(Op.INDEX,primarySwatch,200))),error : (errorColor || op(Op.INDEX,lib4.Colors.red,700)),onPrimary : primaryIsDark ? lib4.Colors.white : lib4.Colors.black,onSecondary : secondaryIsDark ? lib4.Colors.white : lib4.Colors.black,onSurface : isDark ? lib4.Colors.white : lib4.Colors.black,onBackground : primaryIsDark ? lib4.Colors.white : lib4.Colors.black,onError : isDark ? lib4.Colors.black : lib4.Colors.white,brightness : brightness});
    }
    static fromSwatch : new(_namedArguments? : {primarySwatch? : lib4.MaterialColor,primaryColorDark? : any,accentColor? : any,cardColor? : any,backgroundColor? : any,errorColor? : any,brightness? : any}) => ColorScheme;

    static _brightnessFor(color : any) : any {
        return lib5.ThemeData.estimateBrightnessForColor(color);
    }
    primary : any;

    primaryVariant : any;

    secondary : any;

    secondaryVariant : any;

    surface : any;

    background : any;

    error : any;

    onPrimary : any;

    onSecondary : any;

    onSurface : any;

    onBackground : any;

    onError : any;

    brightness : any;

    copyWith(_namedArguments? : {primary? : any,primaryVariant? : any,secondary? : any,secondaryVariant? : any,surface? : any,background? : any,error? : any,onPrimary? : any,onSecondary? : any,onSurface? : any,onBackground? : any,onError? : any,brightness? : any}) : ColorScheme {
        let {primary,primaryVariant,secondary,secondaryVariant,surface,background,error,onPrimary,onSecondary,onSurface,onBackground,onError,brightness} = Object.assign({
        }, _namedArguments );
        return ColorScheme({
            primary : (primary || this.primary),primaryVariant : (primaryVariant || this.primaryVariant),secondary : (secondary || this.secondary),secondaryVariant : (secondaryVariant || this.secondaryVariant),surface : (surface || this.surface),background : (background || this.background),error : (error || this.error),onPrimary : (onPrimary || this.onPrimary),onSecondary : (onSecondary || this.onSecondary),onSurface : (onSurface || this.onSurface),onBackground : (onBackground || this.onBackground),onError : (onError || this.onError),brightness : (brightness || this.brightness)});
    }
    static lerp(a : ColorScheme,b : ColorScheme,t : double) : ColorScheme {
        return ColorScheme({
            primary : Color.lerp(a.primary,b.primary,t),primaryVariant : Color.lerp(a.primaryVariant,b.primaryVariant,t),secondary : Color.lerp(a.secondary,b.secondary,t),secondaryVariant : Color.lerp(a.secondaryVariant,b.secondaryVariant,t),surface : Color.lerp(a.surface,b.surface,t),background : Color.lerp(a.background,b.background,t),error : Color.lerp(a.error,b.error,t),onPrimary : Color.lerp(a.onPrimary,b.onPrimary,t),onSecondary : Color.lerp(a.onSecondary,b.onSecondary,t),onSurface : Color.lerp(a.onSurface,b.onSurface,t),onBackground : Color.lerp(a.onBackground,b.onBackground,t),onError : Color.lerp(a.onError,b.onError,t),brightness : t < 0.5 ? a.brightness : b.brightness});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        if (core.identical(this,other)) return true;
        if (other.runtimeType != this.runtimeType) return false;
        let otherScheme : ColorScheme = other;
        return op(Op.EQUALS,otherScheme.primary,this.primary) && op(Op.EQUALS,otherScheme.primaryVariant,this.primaryVariant) && op(Op.EQUALS,otherScheme.secondary,this.secondary) && op(Op.EQUALS,otherScheme.secondaryVariant,this.secondaryVariant) && op(Op.EQUALS,otherScheme.surface,this.surface) && op(Op.EQUALS,otherScheme.background,this.background) && op(Op.EQUALS,otherScheme.error,this.error) && op(Op.EQUALS,otherScheme.onPrimary,this.onPrimary) && op(Op.EQUALS,otherScheme.onSecondary,this.onSecondary) && op(Op.EQUALS,otherScheme.onSurface,this.onSurface) && op(Op.EQUALS,otherScheme.onBackground,this.onBackground) && op(Op.EQUALS,otherScheme.onError,this.onError) && op(Op.EQUALS,otherScheme.brightness,this.brightness);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.primary,this.primaryVariant,this.secondary,this.secondaryVariant,this.surface,this.background,this.error,this.onPrimary,this.onSecondary,this.onSurface,this.onBackground,this.onError,this.brightness);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib3.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        let defaultScheme : ColorScheme = ColorScheme.light();
        properties.add(lib3.DiagnosticsProperty('primary',this.primary,{
            defaultValue : defaultScheme.primary}));
        properties.add(lib3.DiagnosticsProperty('primaryVariant',this.primaryVariant,{
            defaultValue : defaultScheme.primaryVariant}));
        properties.add(lib3.DiagnosticsProperty('secondary',this.secondary,{
            defaultValue : defaultScheme.secondary}));
        properties.add(lib3.DiagnosticsProperty('secondaryVariant',this.secondaryVariant,{
            defaultValue : defaultScheme.secondaryVariant}));
        properties.add(lib3.DiagnosticsProperty('surface',this.surface,{
            defaultValue : defaultScheme.surface}));
        properties.add(lib3.DiagnosticsProperty('background',this.background,{
            defaultValue : defaultScheme.background}));
        properties.add(lib3.DiagnosticsProperty('error',this.error,{
            defaultValue : defaultScheme.error}));
        properties.add(lib3.DiagnosticsProperty('onPrimary',this.onPrimary,{
            defaultValue : defaultScheme.onPrimary}));
        properties.add(lib3.DiagnosticsProperty('onSecondary',this.onSecondary,{
            defaultValue : defaultScheme.onSecondary}));
        properties.add(lib3.DiagnosticsProperty('onSurface',this.onSurface,{
            defaultValue : defaultScheme.onSurface}));
        properties.add(lib3.DiagnosticsProperty('onBackground',this.onBackground,{
            defaultValue : defaultScheme.onBackground}));
        properties.add(lib3.DiagnosticsProperty('onError',this.onError,{
            defaultValue : defaultScheme.onError}));
        properties.add(lib3.DiagnosticsProperty('brightness',this.brightness,{
            defaultValue : defaultScheme.brightness}));
    }
}

export class properties {
}
