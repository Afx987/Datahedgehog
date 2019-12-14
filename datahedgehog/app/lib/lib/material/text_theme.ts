/** Library asset:datahedgehog_monitor/lib/lib/material/text_theme.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib6 from "./typography";

export namespace TextTheme {
    export type Constructors = lib3.Diagnosticable.Constructors | 'TextTheme';
    export type Interface = Omit<TextTheme, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class TextTheme extends lib3.Diagnosticable {
    constructor(_namedArguments? : {display4? : lib4.TextStyle,display3? : lib4.TextStyle,display2? : lib4.TextStyle,display1? : lib4.TextStyle,headline? : lib4.TextStyle,title? : lib4.TextStyle,subhead? : lib4.TextStyle,body2? : lib4.TextStyle,body1? : lib4.TextStyle,caption? : lib4.TextStyle,button? : lib4.TextStyle,subtitle? : lib4.TextStyle,overline? : lib4.TextStyle}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TextTheme(_namedArguments? : {display4? : lib4.TextStyle,display3? : lib4.TextStyle,display2? : lib4.TextStyle,display1? : lib4.TextStyle,headline? : lib4.TextStyle,title? : lib4.TextStyle,subhead? : lib4.TextStyle,body2? : lib4.TextStyle,body1? : lib4.TextStyle,caption? : lib4.TextStyle,button? : lib4.TextStyle,subtitle? : lib4.TextStyle,overline? : lib4.TextStyle}) {
        let {display4,display3,display2,display1,headline,title,subhead,body2,body1,caption,button,subtitle,overline} = Object.assign({
        }, _namedArguments );
        this.display4 = display4;
        this.display3 = display3;
        this.display2 = display2;
        this.display1 = display1;
        this.headline = headline;
        this.title = title;
        this.subhead = subhead;
        this.body2 = body2;
        this.body1 = body1;
        this.caption = caption;
        this.button = button;
        this.subtitle = subtitle;
        this.overline = overline;
    }
    display4 : lib4.TextStyle;

    display3 : lib4.TextStyle;

    display2 : lib4.TextStyle;

    display1 : lib4.TextStyle;

    headline : lib4.TextStyle;

    title : lib4.TextStyle;

    subhead : lib4.TextStyle;

    body2 : lib4.TextStyle;

    body1 : lib4.TextStyle;

    caption : lib4.TextStyle;

    button : lib4.TextStyle;

    subtitle : lib4.TextStyle;

    overline : lib4.TextStyle;

    copyWith(_namedArguments? : {display4? : lib4.TextStyle,display3? : lib4.TextStyle,display2? : lib4.TextStyle,display1? : lib4.TextStyle,headline? : lib4.TextStyle,title? : lib4.TextStyle,subhead? : lib4.TextStyle,body2? : lib4.TextStyle,body1? : lib4.TextStyle,caption? : lib4.TextStyle,button? : lib4.TextStyle,subtitle? : lib4.TextStyle,overline? : lib4.TextStyle}) : TextTheme {
        let {display4,display3,display2,display1,headline,title,subhead,body2,body1,caption,button,subtitle,overline} = Object.assign({
        }, _namedArguments );
        return TextTheme({
            display4 : (display4 || this.display4),display3 : (display3 || this.display3),display2 : (display2 || this.display2),display1 : (display1 || this.display1),headline : (headline || this.headline),title : (title || this.title),subhead : (subhead || this.subhead),body2 : (body2 || this.body2),body1 : (body1 || this.body1),caption : (caption || this.caption),button : (button || this.button),subtitle : (subtitle || this.subtitle),overline : (overline || this.overline)});
    }
    merge(other : TextTheme) : TextTheme {
        if (op(Op.EQUALS,other,null)) return this;
        return this.copyWith({
            display4 : (((_765_)=>(!!_765_)?_765_.merge(other.display4):null)(this.display4) || other.display4),display3 : (((_766_)=>(!!_766_)?_766_.merge(other.display3):null)(this.display3) || other.display3),display2 : (((_767_)=>(!!_767_)?_767_.merge(other.display2):null)(this.display2) || other.display2),display1 : (((_768_)=>(!!_768_)?_768_.merge(other.display1):null)(this.display1) || other.display1),headline : (((_769_)=>(!!_769_)?_769_.merge(other.headline):null)(this.headline) || other.headline),title : (((_770_)=>(!!_770_)?_770_.merge(other.title):null)(this.title) || other.title),subhead : (((_771_)=>(!!_771_)?_771_.merge(other.subhead):null)(this.subhead) || other.subhead),body2 : (((_772_)=>(!!_772_)?_772_.merge(other.body2):null)(this.body2) || other.body2),body1 : (((_773_)=>(!!_773_)?_773_.merge(other.body1):null)(this.body1) || other.body1),caption : (((_774_)=>(!!_774_)?_774_.merge(other.caption):null)(this.caption) || other.caption),button : (((_775_)=>(!!_775_)?_775_.merge(other.button):null)(this.button) || other.button),subtitle : (((_776_)=>(!!_776_)?_776_.merge(other.subtitle):null)(this.subtitle) || other.subtitle),overline : (((_777_)=>(!!_777_)?_777_.merge(other.overline):null)(this.overline) || other.overline)});
    }
    apply(_namedArguments? : {fontFamily? : string,fontSizeFactor? : double,fontSizeDelta? : double,displayColor? : any,bodyColor? : any,decoration? : any,decorationColor? : any,decorationStyle? : any}) : TextTheme {
        let {fontFamily,fontSizeFactor,fontSizeDelta,displayColor,bodyColor,decoration,decorationColor,decorationStyle} = Object.assign({
            "fontSizeFactor" : 1.0,
            "fontSizeDelta" : 0.0}, _namedArguments );
        return TextTheme({
            display4 : ((_778_)=>(!!_778_)?_778_.apply({
                color : displayColor,decoration : decoration,decorationColor : decorationColor,decorationStyle : decorationStyle,fontFamily : fontFamily,fontSizeFactor : fontSizeFactor,fontSizeDelta : fontSizeDelta}):null)(this.display4),display3 : ((_779_)=>(!!_779_)?_779_.apply({
                color : displayColor,decoration : decoration,decorationColor : decorationColor,decorationStyle : decorationStyle,fontFamily : fontFamily,fontSizeFactor : fontSizeFactor,fontSizeDelta : fontSizeDelta}):null)(this.display3),display2 : ((_780_)=>(!!_780_)?_780_.apply({
                color : displayColor,decoration : decoration,decorationColor : decorationColor,decorationStyle : decorationStyle,fontFamily : fontFamily,fontSizeFactor : fontSizeFactor,fontSizeDelta : fontSizeDelta}):null)(this.display2),display1 : ((_781_)=>(!!_781_)?_781_.apply({
                color : displayColor,decoration : decoration,decorationColor : decorationColor,decorationStyle : decorationStyle,fontFamily : fontFamily,fontSizeFactor : fontSizeFactor,fontSizeDelta : fontSizeDelta}):null)(this.display1),headline : ((_782_)=>(!!_782_)?_782_.apply({
                color : bodyColor,decoration : decoration,decorationColor : decorationColor,decorationStyle : decorationStyle,fontFamily : fontFamily,fontSizeFactor : fontSizeFactor,fontSizeDelta : fontSizeDelta}):null)(this.headline),title : ((_783_)=>(!!_783_)?_783_.apply({
                color : bodyColor,decoration : decoration,decorationColor : decorationColor,decorationStyle : decorationStyle,fontFamily : fontFamily,fontSizeFactor : fontSizeFactor,fontSizeDelta : fontSizeDelta}):null)(this.title),subhead : ((_784_)=>(!!_784_)?_784_.apply({
                color : bodyColor,decoration : decoration,decorationColor : decorationColor,decorationStyle : decorationStyle,fontFamily : fontFamily,fontSizeFactor : fontSizeFactor,fontSizeDelta : fontSizeDelta}):null)(this.subhead),body2 : ((_785_)=>(!!_785_)?_785_.apply({
                color : bodyColor,decoration : decoration,decorationColor : decorationColor,decorationStyle : decorationStyle,fontFamily : fontFamily,fontSizeFactor : fontSizeFactor,fontSizeDelta : fontSizeDelta}):null)(this.body2),body1 : ((_786_)=>(!!_786_)?_786_.apply({
                color : bodyColor,decoration : decoration,decorationColor : decorationColor,decorationStyle : decorationStyle,fontFamily : fontFamily,fontSizeFactor : fontSizeFactor,fontSizeDelta : fontSizeDelta}):null)(this.body1),caption : ((_787_)=>(!!_787_)?_787_.apply({
                color : displayColor,decoration : decoration,decorationColor : decorationColor,decorationStyle : decorationStyle,fontFamily : fontFamily,fontSizeFactor : fontSizeFactor,fontSizeDelta : fontSizeDelta}):null)(this.caption),button : ((_788_)=>(!!_788_)?_788_.apply({
                color : bodyColor,decoration : decoration,decorationColor : decorationColor,decorationStyle : decorationStyle,fontFamily : fontFamily,fontSizeFactor : fontSizeFactor,fontSizeDelta : fontSizeDelta}):null)(this.button),subtitle : ((_789_)=>(!!_789_)?_789_.apply({
                color : bodyColor,decoration : decoration,decorationColor : decorationColor,decorationStyle : decorationStyle,fontFamily : fontFamily,fontSizeFactor : fontSizeFactor,fontSizeDelta : fontSizeDelta}):null)(this.subtitle),overline : ((_790_)=>(!!_790_)?_790_.apply({
                color : bodyColor,decoration : decoration,decorationColor : decorationColor,decorationStyle : decorationStyle,fontFamily : fontFamily,fontSizeFactor : fontSizeFactor,fontSizeDelta : fontSizeDelta}):null)(this.overline)});
    }
    static lerp(a : TextTheme,b : TextTheme,t : double) : TextTheme {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        return TextTheme({
            display4 : lib4.TextStyle.lerp(((t)=>(!!t)?t.display4:null)(a),((t)=>(!!t)?t.display4:null)(b),t),display3 : lib4.TextStyle.lerp(((t)=>(!!t)?t.display3:null)(a),((t)=>(!!t)?t.display3:null)(b),t),display2 : lib4.TextStyle.lerp(((t)=>(!!t)?t.display2:null)(a),((t)=>(!!t)?t.display2:null)(b),t),display1 : lib4.TextStyle.lerp(((t)=>(!!t)?t.display1:null)(a),((t)=>(!!t)?t.display1:null)(b),t),headline : lib4.TextStyle.lerp(((t)=>(!!t)?t.headline:null)(a),((t)=>(!!t)?t.headline:null)(b),t),title : lib4.TextStyle.lerp(((t)=>(!!t)?t.title:null)(a),((t)=>(!!t)?t.title:null)(b),t),subhead : lib4.TextStyle.lerp(((t)=>(!!t)?t.subhead:null)(a),((t)=>(!!t)?t.subhead:null)(b),t),body2 : lib4.TextStyle.lerp(((t)=>(!!t)?t.body2:null)(a),((t)=>(!!t)?t.body2:null)(b),t),body1 : lib4.TextStyle.lerp(((t)=>(!!t)?t.body1:null)(a),((t)=>(!!t)?t.body1:null)(b),t),caption : lib4.TextStyle.lerp(((t)=>(!!t)?t.caption:null)(a),((t)=>(!!t)?t.caption:null)(b),t),button : lib4.TextStyle.lerp(((t)=>(!!t)?t.button:null)(a),((t)=>(!!t)?t.button:null)(b),t),subtitle : lib4.TextStyle.lerp(((t)=>(!!t)?t.subtitle:null)(a),((t)=>(!!t)?t.subtitle:null)(b),t),overline : lib4.TextStyle.lerp(((t)=>(!!t)?t.overline:null)(a),((t)=>(!!t)?t.overline:null)(b),t)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : TextTheme = other;
        return op(Op.EQUALS,this.display4,typedOther.display4) && op(Op.EQUALS,this.display3,typedOther.display3) && op(Op.EQUALS,this.display2,typedOther.display2) && op(Op.EQUALS,this.display1,typedOther.display1) && op(Op.EQUALS,this.headline,typedOther.headline) && op(Op.EQUALS,this.title,typedOther.title) && op(Op.EQUALS,this.subhead,typedOther.subhead) && op(Op.EQUALS,this.body2,typedOther.body2) && op(Op.EQUALS,this.body1,typedOther.body1) && op(Op.EQUALS,this.caption,typedOther.caption) && op(Op.EQUALS,this.button,typedOther.button) && op(Op.EQUALS,this.subtitle,typedOther.subtitle) && op(Op.EQUALS,this.overline,typedOther.overline);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.display4,this.display3,this.display2,this.display1,this.headline,this.title,this.subhead,this.body2,this.body1,this.caption,this.button,this.subtitle,this.overline);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib3.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        let defaultTheme : TextTheme = lib6.Typography({
            platform : lib5.properties.defaultTargetPlatform}).black;
        properties.add(lib3.DiagnosticsProperty('display4',this.display4,{
            defaultValue : defaultTheme.display4}));
        properties.add(lib3.DiagnosticsProperty('display3',this.display3,{
            defaultValue : defaultTheme.display3}));
        properties.add(lib3.DiagnosticsProperty('display2',this.display2,{
            defaultValue : defaultTheme.display2}));
        properties.add(lib3.DiagnosticsProperty('display1',this.display1,{
            defaultValue : defaultTheme.display1}));
        properties.add(lib3.DiagnosticsProperty('headline',this.headline,{
            defaultValue : defaultTheme.headline}));
        properties.add(lib3.DiagnosticsProperty('title',this.title,{
            defaultValue : defaultTheme.title}));
        properties.add(lib3.DiagnosticsProperty('subhead',this.subhead,{
            defaultValue : defaultTheme.subhead}));
        properties.add(lib3.DiagnosticsProperty('body2',this.body2,{
            defaultValue : defaultTheme.body2}));
        properties.add(lib3.DiagnosticsProperty('body1',this.body1,{
            defaultValue : defaultTheme.body1}));
        properties.add(lib3.DiagnosticsProperty('caption',this.caption,{
            defaultValue : defaultTheme.caption}));
        properties.add(lib3.DiagnosticsProperty('button',this.button,{
            defaultValue : defaultTheme.button}));
        properties.add(lib3.DiagnosticsProperty('subtitle)',this.subtitle,{
            defaultValue : defaultTheme.subtitle}));
        properties.add(lib3.DiagnosticsProperty('overline',this.overline,{
            defaultValue : defaultTheme.overline}));
    }
}

export class properties {
}
