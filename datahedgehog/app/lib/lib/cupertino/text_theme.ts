/** Library asset:datahedgehog_monitor/lib/lib/cupertino/text_theme.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./colors";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export namespace CupertinoTextThemeData {
    export type Constructors = lib5.Diagnosticable.Constructors | 'CupertinoTextThemeData';
    export type Interface = Omit<CupertinoTextThemeData, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class CupertinoTextThemeData extends lib5.Diagnosticable {
    constructor(_namedArguments? : {primaryColor? : any,brightness? : any,textStyle? : lib4.TextStyle,actionTextStyle? : lib4.TextStyle,tabLabelTextStyle? : lib4.TextStyle,navTitleTextStyle? : lib4.TextStyle,navLargeTitleTextStyle? : lib4.TextStyle,navActionTextStyle? : lib4.TextStyle}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoTextThemeData(_namedArguments? : {primaryColor? : any,brightness? : any,textStyle? : lib4.TextStyle,actionTextStyle? : lib4.TextStyle,tabLabelTextStyle? : lib4.TextStyle,navTitleTextStyle? : lib4.TextStyle,navLargeTitleTextStyle? : lib4.TextStyle,navActionTextStyle? : lib4.TextStyle}) {
        let {primaryColor,brightness,textStyle,actionTextStyle,tabLabelTextStyle,navTitleTextStyle,navLargeTitleTextStyle,navActionTextStyle} = Object.assign({
        }, _namedArguments );
        this._primaryColor = (primaryColor || lib3.CupertinoColors.activeBlue);
        this._brightness = brightness;
        this._textStyle = textStyle;
        this._actionTextStyle = actionTextStyle;
        this._tabLabelTextStyle = tabLabelTextStyle;
        this._navTitleTextStyle = navTitleTextStyle;
        this._navLargeTitleTextStyle = navLargeTitleTextStyle;
        this._navActionTextStyle = navActionTextStyle;
    }
    _primaryColor : any;

    _brightness : any;

    get _isLight() : boolean {
        return this._brightness != Brightness.dark;
    }
    _textStyle : lib4.TextStyle;

    get textStyle() : lib4.TextStyle {
        return (this._textStyle || (this._isLight ? properties._kDefaultLightTextStyle : properties._kDefaultDarkTextStyle));
    }
    _actionTextStyle : lib4.TextStyle;

    get actionTextStyle() : lib4.TextStyle {
        return (this._actionTextStyle || properties._kDefaultActionTextStyle.copyWith({
            color : this._primaryColor}));
    }
    _tabLabelTextStyle : lib4.TextStyle;

    get tabLabelTextStyle() : lib4.TextStyle {
        return (this._tabLabelTextStyle || properties._kDefaultTabLabelTextStyle);
    }
    _navTitleTextStyle : lib4.TextStyle;

    get navTitleTextStyle() : lib4.TextStyle {
        return (this._navTitleTextStyle || (this._isLight ? properties._kDefaultMiddleTitleLightTextStyle : properties._kDefaultMiddleTitleDarkTextStyle));
    }
    _navLargeTitleTextStyle : lib4.TextStyle;

    get navLargeTitleTextStyle() : lib4.TextStyle {
        return (this._navLargeTitleTextStyle || (this._isLight ? properties._kDefaultLargeTitleLightTextStyle : properties._kDefaultLargeTitleDarkTextStyle));
    }
    _navActionTextStyle : lib4.TextStyle;

    get navActionTextStyle() : lib4.TextStyle {
        return (this._navActionTextStyle || properties._kDefaultActionTextStyle.copyWith({
            color : this._primaryColor}));
    }
    copyWith(_namedArguments? : {primaryColor? : any,brightness? : any,textStyle? : lib4.TextStyle,actionTextStyle? : lib4.TextStyle,tabLabelTextStyle? : lib4.TextStyle,navTitleTextStyle? : lib4.TextStyle,navLargeTitleTextStyle? : lib4.TextStyle,navActionTextStyle? : lib4.TextStyle}) : CupertinoTextThemeData {
        let {primaryColor,brightness,textStyle,actionTextStyle,tabLabelTextStyle,navTitleTextStyle,navLargeTitleTextStyle,navActionTextStyle} = Object.assign({
        }, _namedArguments );
        return CupertinoTextThemeData({
            primaryColor : (primaryColor || this._primaryColor),brightness : (brightness || this._brightness),textStyle : (textStyle || this._textStyle),actionTextStyle : (actionTextStyle || this._actionTextStyle),tabLabelTextStyle : (tabLabelTextStyle || this._tabLabelTextStyle),navTitleTextStyle : (navTitleTextStyle || this._navTitleTextStyle),navLargeTitleTextStyle : (navLargeTitleTextStyle || this._navLargeTitleTextStyle),navActionTextStyle : (navActionTextStyle || this._navActionTextStyle)});
    }
}

export class properties {
    private static __$_kDefaultLightTextStyle : lib4.TextStyle;
    static get _kDefaultLightTextStyle() : lib4.TextStyle { 
        if (this.__$_kDefaultLightTextStyle===undefined) {
            this.__$_kDefaultLightTextStyle = lib4.TextStyle({
                inherit : false,fontFamily : '.SF Pro Text',fontSize : 17.0,letterSpacing : -0.41,color : lib3.CupertinoColors.black,decoration : TextDecoration.none});
        }
        return this.__$_kDefaultLightTextStyle;
    }
    static set _kDefaultLightTextStyle(__$value : lib4.TextStyle)  { 
        this.__$_kDefaultLightTextStyle = __$value;
    }

    private static __$_kDefaultDarkTextStyle : lib4.TextStyle;
    static get _kDefaultDarkTextStyle() : lib4.TextStyle { 
        if (this.__$_kDefaultDarkTextStyle===undefined) {
            this.__$_kDefaultDarkTextStyle = lib4.TextStyle({
                inherit : false,fontFamily : '.SF Pro Text',fontSize : 17.0,letterSpacing : -0.41,color : lib3.CupertinoColors.white,decoration : TextDecoration.none});
        }
        return this.__$_kDefaultDarkTextStyle;
    }
    static set _kDefaultDarkTextStyle(__$value : lib4.TextStyle)  { 
        this.__$_kDefaultDarkTextStyle = __$value;
    }

    private static __$_kDefaultActionTextStyle : lib4.TextStyle;
    static get _kDefaultActionTextStyle() : lib4.TextStyle { 
        if (this.__$_kDefaultActionTextStyle===undefined) {
            this.__$_kDefaultActionTextStyle = lib4.TextStyle({
                inherit : false,fontFamily : '.SF Pro Text',fontSize : 17.0,letterSpacing : -0.41,color : lib3.CupertinoColors.activeBlue,decoration : TextDecoration.none});
        }
        return this.__$_kDefaultActionTextStyle;
    }
    static set _kDefaultActionTextStyle(__$value : lib4.TextStyle)  { 
        this.__$_kDefaultActionTextStyle = __$value;
    }

    private static __$_kDefaultTabLabelTextStyle : lib4.TextStyle;
    static get _kDefaultTabLabelTextStyle() : lib4.TextStyle { 
        if (this.__$_kDefaultTabLabelTextStyle===undefined) {
            this.__$_kDefaultTabLabelTextStyle = lib4.TextStyle({
                inherit : false,fontFamily : '.SF Pro Text',fontSize : 10.0,letterSpacing : -0.24,color : lib3.CupertinoColors.inactiveGray});
        }
        return this.__$_kDefaultTabLabelTextStyle;
    }
    static set _kDefaultTabLabelTextStyle(__$value : lib4.TextStyle)  { 
        this.__$_kDefaultTabLabelTextStyle = __$value;
    }

    private static __$_kDefaultMiddleTitleLightTextStyle : lib4.TextStyle;
    static get _kDefaultMiddleTitleLightTextStyle() : lib4.TextStyle { 
        if (this.__$_kDefaultMiddleTitleLightTextStyle===undefined) {
            this.__$_kDefaultMiddleTitleLightTextStyle = lib4.TextStyle({
                inherit : false,fontFamily : '.SF Pro Text',fontSize : 17.0,fontWeight : FontWeight.w600,letterSpacing : -0.41,color : lib3.CupertinoColors.black});
        }
        return this.__$_kDefaultMiddleTitleLightTextStyle;
    }
    static set _kDefaultMiddleTitleLightTextStyle(__$value : lib4.TextStyle)  { 
        this.__$_kDefaultMiddleTitleLightTextStyle = __$value;
    }

    private static __$_kDefaultMiddleTitleDarkTextStyle : lib4.TextStyle;
    static get _kDefaultMiddleTitleDarkTextStyle() : lib4.TextStyle { 
        if (this.__$_kDefaultMiddleTitleDarkTextStyle===undefined) {
            this.__$_kDefaultMiddleTitleDarkTextStyle = lib4.TextStyle({
                inherit : false,fontFamily : '.SF Pro Text',fontSize : 17.0,fontWeight : FontWeight.w600,letterSpacing : -0.41,color : lib3.CupertinoColors.white});
        }
        return this.__$_kDefaultMiddleTitleDarkTextStyle;
    }
    static set _kDefaultMiddleTitleDarkTextStyle(__$value : lib4.TextStyle)  { 
        this.__$_kDefaultMiddleTitleDarkTextStyle = __$value;
    }

    private static __$_kDefaultLargeTitleLightTextStyle : lib4.TextStyle;
    static get _kDefaultLargeTitleLightTextStyle() : lib4.TextStyle { 
        if (this.__$_kDefaultLargeTitleLightTextStyle===undefined) {
            this.__$_kDefaultLargeTitleLightTextStyle = lib4.TextStyle({
                inherit : false,fontFamily : '.SF Pro Display',fontSize : 34.0,fontWeight : FontWeight.w700,letterSpacing : 0.41,color : lib3.CupertinoColors.black});
        }
        return this.__$_kDefaultLargeTitleLightTextStyle;
    }
    static set _kDefaultLargeTitleLightTextStyle(__$value : lib4.TextStyle)  { 
        this.__$_kDefaultLargeTitleLightTextStyle = __$value;
    }

    private static __$_kDefaultLargeTitleDarkTextStyle : lib4.TextStyle;
    static get _kDefaultLargeTitleDarkTextStyle() : lib4.TextStyle { 
        if (this.__$_kDefaultLargeTitleDarkTextStyle===undefined) {
            this.__$_kDefaultLargeTitleDarkTextStyle = lib4.TextStyle({
                inherit : false,fontFamily : '.SF Pro Display',fontSize : 34.0,fontWeight : FontWeight.w700,letterSpacing : 0.41,color : lib3.CupertinoColors.white});
        }
        return this.__$_kDefaultLargeTitleDarkTextStyle;
    }
    static set _kDefaultLargeTitleDarkTextStyle(__$value : lib4.TextStyle)  { 
        this.__$_kDefaultLargeTitleDarkTextStyle = __$value;
    }

}
