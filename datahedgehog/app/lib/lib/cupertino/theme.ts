/** Library asset:datahedgehog_monitor/lib/lib/cupertino/theme.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib6 from "./text_theme";
import * as lib7 from "./colors";

export namespace CupertinoTheme {
    export type Constructors = lib3.InheritedWidget.Constructors | 'CupertinoTheme';
    export type Interface = Omit<CupertinoTheme, Constructors>;
}
@DartClass
export class CupertinoTheme extends lib3.InheritedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,data? : CupertinoThemeData,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoTheme(_namedArguments? : {key? : lib4.Key,data? : CupertinoThemeData,child? : lib3.Widget}) {
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

    data : CupertinoThemeData;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateShouldNotify(oldWidget : CupertinoTheme) : boolean {
        return this.data != oldWidget.data;
    }
    static of(context : lib3.BuildContext) : CupertinoThemeData {
        let theme : CupertinoTheme = context.inheritFromWidgetOfExactType(CupertinoTheme);
        return (((t)=>(!!t)?t.data:null)(theme) || new CupertinoThemeData());
    }
}

export namespace CupertinoThemeData {
    export type Constructors = lib5.Diagnosticable.Constructors | 'CupertinoThemeData' | 'raw';
    export type Interface = Omit<CupertinoThemeData, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class CupertinoThemeData extends lib5.Diagnosticable {
    constructor(_namedArguments? : {brightness? : any,primaryColor? : any,primaryContrastingColor? : any,textTheme? : lib6.CupertinoTextThemeData,barBackgroundColor? : any,scaffoldBackgroundColor? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoThemeData(_namedArguments? : {brightness? : any,primaryColor? : any,primaryContrastingColor? : any,textTheme? : lib6.CupertinoTextThemeData,barBackgroundColor? : any,scaffoldBackgroundColor? : any}) {
        let {brightness,primaryColor,primaryContrastingColor,textTheme,barBackgroundColor,scaffoldBackgroundColor} = Object.assign({
        }, _namedArguments );
        this.raw(brightness,primaryColor,primaryContrastingColor,textTheme,barBackgroundColor,scaffoldBackgroundColor);
    }
    @namedConstructor
    raw(_brightness : any,_primaryColor : any,_primaryContrastingColor : any,_textTheme : lib6.CupertinoTextThemeData,_barBackgroundColor : any,_scaffoldBackgroundColor : any) {
        this._brightness = _brightness;
        this._primaryColor = _primaryColor;
        this._primaryContrastingColor = _primaryContrastingColor;
        this._textTheme = _textTheme;
        this._barBackgroundColor = _barBackgroundColor;
        this._scaffoldBackgroundColor = _scaffoldBackgroundColor;
    }
    static raw : new(_brightness : any,_primaryColor : any,_primaryContrastingColor : any,_textTheme : lib6.CupertinoTextThemeData,_barBackgroundColor : any,_scaffoldBackgroundColor : any) => CupertinoThemeData;

    get _isLight() : boolean {
        return op(Op.EQUALS,this.brightness,Brightness.light);
    }
    get brightness() : any {
        return (this._brightness || Brightness.light);
    }
    _brightness : any;

    get primaryColor() : any {
        return (this._primaryColor || (this._isLight ? lib7.CupertinoColors.activeBlue : lib7.CupertinoColors.activeOrange));
    }
    _primaryColor : any;

    get primaryContrastingColor() : any {
        return (this._primaryContrastingColor || (this._isLight ? lib7.CupertinoColors.white : lib7.CupertinoColors.black));
    }
    _primaryContrastingColor : any;

    get textTheme() : lib6.CupertinoTextThemeData {
        return (this._textTheme || lib6.CupertinoTextThemeData({
            brightness : this.brightness,primaryColor : this.primaryColor}));
    }
    _textTheme : lib6.CupertinoTextThemeData;

    get barBackgroundColor() : any {
        return (this._barBackgroundColor || (this._isLight ? properties._kDefaultBarLightBackgroundColor : properties._kDefaultBarDarkBackgroundColor));
    }
    _barBackgroundColor : any;

    get scaffoldBackgroundColor() : any {
        return (this._scaffoldBackgroundColor || (this._isLight ? lib7.CupertinoColors.white : lib7.CupertinoColors.black));
    }
    _scaffoldBackgroundColor : any;

    noDefault() : CupertinoThemeData {
        return _NoDefaultCupertinoThemeData(this._brightness,this._primaryColor,this._primaryContrastingColor,this._textTheme,this._barBackgroundColor,this._scaffoldBackgroundColor);
    }
    copyWith(_namedArguments? : {brightness? : any,primaryColor? : any,primaryContrastingColor? : any,textTheme? : lib6.CupertinoTextThemeData,barBackgroundColor? : any,scaffoldBackgroundColor? : any}) : CupertinoThemeData {
        let {brightness,primaryColor,primaryContrastingColor,textTheme,barBackgroundColor,scaffoldBackgroundColor} = Object.assign({
        }, _namedArguments );
        return CupertinoThemeData({
            brightness : (brightness || this._brightness),primaryColor : (primaryColor || this._primaryColor),primaryContrastingColor : (primaryContrastingColor || this._primaryContrastingColor),textTheme : (textTheme || this._textTheme),barBackgroundColor : (barBackgroundColor || this._barBackgroundColor),scaffoldBackgroundColor : (scaffoldBackgroundColor || this._scaffoldBackgroundColor)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib5.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        let defaultData : CupertinoThemeData = CupertinoThemeData();
        properties.add(lib5.EnumProperty('brightness',this.brightness,{
            defaultValue : defaultData.brightness}));
        properties.add(lib5.DiagnosticsProperty('primaryColor',this.primaryColor,{
            defaultValue : defaultData.primaryColor}));
        properties.add(lib5.DiagnosticsProperty('primaryContrastingColor',this.primaryContrastingColor,{
            defaultValue : defaultData.primaryContrastingColor}));
        properties.add(lib5.DiagnosticsProperty('textTheme',this.textTheme,{
            defaultValue : defaultData.textTheme}));
        properties.add(lib5.DiagnosticsProperty('barBackgroundColor',this.barBackgroundColor,{
            defaultValue : defaultData.barBackgroundColor}));
        properties.add(lib5.DiagnosticsProperty('scaffoldBackgroundColor',this.scaffoldBackgroundColor,{
            defaultValue : defaultData.scaffoldBackgroundColor}));
    }
}

export namespace _NoDefaultCupertinoThemeData {
    export type Constructors = CupertinoThemeData.Constructors | '_NoDefaultCupertinoThemeData';
    export type Interface = Omit<_NoDefaultCupertinoThemeData, Constructors>;
}
@DartClass
export class _NoDefaultCupertinoThemeData extends CupertinoThemeData {
    constructor(brightness : any,primaryColor : any,primaryContrastingColor : any,textTheme : lib6.CupertinoTextThemeData,barBackgroundColor : any,scaffoldBackgroundColor : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _NoDefaultCupertinoThemeData(brightness : any,primaryColor : any,primaryContrastingColor : any,textTheme : lib6.CupertinoTextThemeData,barBackgroundColor : any,scaffoldBackgroundColor : any) {
        super.raw(brightness,primaryColor,primaryContrastingColor,textTheme,barBackgroundColor,scaffoldBackgroundColor);
        this.brightness = brightness;
        this.primaryColor = primaryColor;
        this.primaryContrastingColor = primaryContrastingColor;
        this.textTheme = textTheme;
        this.barBackgroundColor = barBackgroundColor;
        this.scaffoldBackgroundColor = scaffoldBackgroundColor;
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    brightness : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    primaryColor : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    primaryContrastingColor : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    textTheme : lib6.CupertinoTextThemeData;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    barBackgroundColor : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scaffoldBackgroundColor : any;

}

export class properties {
    private static __$_kDefaultBarLightBackgroundColor : any;
    static get _kDefaultBarLightBackgroundColor() : any { 
        if (this.__$_kDefaultBarLightBackgroundColor===undefined) {
            this.__$_kDefaultBarLightBackgroundColor = Color(3438868728);
        }
        return this.__$_kDefaultBarLightBackgroundColor;
    }
    static set _kDefaultBarLightBackgroundColor(__$value : any)  { 
        this.__$_kDefaultBarLightBackgroundColor = __$value;
    }

    private static __$_kDefaultBarDarkBackgroundColor : any;
    static get _kDefaultBarDarkBackgroundColor() : any { 
        if (this.__$_kDefaultBarDarkBackgroundColor===undefined) {
            this.__$_kDefaultBarDarkBackgroundColor = Color(3072401697);
        }
        return this.__$_kDefaultBarDarkBackgroundColor;
    }
    static set _kDefaultBarDarkBackgroundColor(__$value : any)  { 
        this.__$_kDefaultBarDarkBackgroundColor = __$value;
    }

}
