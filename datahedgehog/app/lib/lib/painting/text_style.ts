/** Library asset:datahedgehog_monitor/lib/lib/painting/text_style.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib4 from "./strut_style";
import * as lib5 from "./basic_types";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/foundation/collections";

export namespace TextStyle {
    export type Constructors = lib3.Diagnosticable.Constructors | 'TextStyle';
    export type Interface = Omit<TextStyle, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class TextStyle extends lib3.Diagnosticable {
    constructor(_namedArguments? : {inherit? : boolean,color? : any,fontSize? : double,fontWeight? : any,fontStyle? : any,letterSpacing? : double,wordSpacing? : double,textBaseline? : any,height? : double,locale? : any,foreground? : any,background? : any,shadows? : core.DartList<any>,decoration? : any,decorationColor? : any,decorationStyle? : any,debugLabel? : string,fontFamily? : string,fontFamilyFallback? : core.DartList<string>,package? : string}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TextStyle(_namedArguments? : {inherit? : boolean,color? : any,fontSize? : double,fontWeight? : any,fontStyle? : any,letterSpacing? : double,wordSpacing? : double,textBaseline? : any,height? : double,locale? : any,foreground? : any,background? : any,shadows? : core.DartList<any>,decoration? : any,decorationColor? : any,decorationStyle? : any,debugLabel? : string,fontFamily? : string,fontFamilyFallback? : core.DartList<string>,package? : string}) {
        let {inherit,color,fontSize,fontWeight,fontStyle,letterSpacing,wordSpacing,textBaseline,height,locale,foreground,background,shadows,decoration,decorationColor,decorationStyle,debugLabel,fontFamily,fontFamilyFallback,package} = Object.assign({
            "inherit" : true}, _namedArguments );
        this.fontFamily = package == null ? fontFamily : `packages/${package}/${fontFamily}`;
        this._fontFamilyFallback = fontFamilyFallback;
        this._package = package;
        this.assert = assert;
        this.inherit = inherit;
        this.color = color;
        this.fontSize = fontSize;
        this.fontWeight = fontWeight;
        this.fontStyle = fontStyle;
        this.letterSpacing = letterSpacing;
        this.wordSpacing = wordSpacing;
        this.textBaseline = textBaseline;
        this.height = height;
        this.locale = locale;
        this.foreground = foreground;
        this.background = background;
        this.shadows = shadows;
        this.decoration = decoration;
        this.decorationColor = decorationColor;
        this.decorationStyle = decorationStyle;
        this.debugLabel = debugLabel;
    }
     : any;

     : any;

     : any;

     : any;

    inherit : boolean;

    color : any;

    fontFamily : string;

    get fontFamilyFallback() : core.DartList<string> {
        return this._package != null && this._fontFamilyFallback != null ? this._fontFamilyFallback.map((str : string) =>  {
            return `packages/${this._package}/${str}`;
        }).toList() : this._fontFamilyFallback;
    }
    _fontFamilyFallback : core.DartList<string>;

    _package : string;

    fontSize : double;

    private static __$_defaultFontSize : double;
    static get _defaultFontSize() : double { 
        if (this.__$_defaultFontSize===undefined) {
            this.__$_defaultFontSize = 14.0;
        }
        return this.__$_defaultFontSize;
    }

    fontWeight : any;

    fontStyle : any;

    letterSpacing : double;

    wordSpacing : double;

    textBaseline : any;

    height : double;

    locale : any;

    foreground : any;

    background : any;

    decoration : any;

    decorationColor : any;

    decorationStyle : any;

    debugLabel : string;

    shadows : core.DartList<any>;

    copyWith(_namedArguments? : {color? : any,fontFamily? : string,fontFamilyFallback? : core.DartList<string>,fontSize? : double,fontWeight? : any,fontStyle? : any,letterSpacing? : double,wordSpacing? : double,textBaseline? : any,height? : double,locale? : any,foreground? : any,background? : any,shadows? : core.DartList<any>,decoration? : any,decorationColor? : any,decorationStyle? : any,debugLabel? : string}) : TextStyle {
        let {color,fontFamily,fontFamilyFallback,fontSize,fontWeight,fontStyle,letterSpacing,wordSpacing,textBaseline,height,locale,foreground,background,shadows,decoration,decorationColor,decorationStyle,debugLabel} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (color == null || foreground == null, _kColorForegroundWarning); */;
        let newDebugLabel : string;
        /* TODO (AssertStatementImpl) : assert (() {if (this.debugLabel != null) newDebugLabel = debugLabel ?? '(${this.debugLabel}).copyWith'; return true;}()); */;
        return TextStyle({
            inherit : this.inherit,color : op(Op.EQUALS,this.foreground,null) && op(Op.EQUALS,foreground,null) ? (color || this.color) : null,fontFamily : (fontFamily || this.fontFamily),fontFamilyFallback : (fontFamilyFallback || this.fontFamilyFallback),fontSize : (fontSize || this.fontSize),fontWeight : (fontWeight || this.fontWeight),fontStyle : (fontStyle || this.fontStyle),letterSpacing : (letterSpacing || this.letterSpacing),wordSpacing : (wordSpacing || this.wordSpacing),textBaseline : (textBaseline || this.textBaseline),height : (height || this.height),locale : (locale || this.locale),foreground : (foreground || this.foreground),background : (background || this.background),shadows : (shadows || this.shadows),decoration : (decoration || this.decoration),decorationColor : (decorationColor || this.decorationColor),decorationStyle : (decorationStyle || this.decorationStyle),debugLabel : newDebugLabel});
    }
    apply(_namedArguments? : {color? : any,decoration? : any,decorationColor? : any,decorationStyle? : any,fontFamily? : string,fontFamilyFallback? : core.DartList<string>,fontSizeFactor? : double,fontSizeDelta? : double,fontWeightDelta? : number,letterSpacingFactor? : double,letterSpacingDelta? : double,wordSpacingFactor? : double,wordSpacingDelta? : double,heightFactor? : double,heightDelta? : double}) : TextStyle {
        let {color,decoration,decorationColor,decorationStyle,fontFamily,fontFamilyFallback,fontSizeFactor,fontSizeDelta,fontWeightDelta,letterSpacingFactor,letterSpacingDelta,wordSpacingFactor,wordSpacingDelta,heightFactor,heightDelta} = Object.assign({
            "fontSizeFactor" : 1.0,
            "fontSizeDelta" : 0.0,
            "fontWeightDelta" : 0,
            "letterSpacingFactor" : 1.0,
            "letterSpacingDelta" : 0.0,
            "wordSpacingFactor" : 1.0,
            "wordSpacingDelta" : 0.0,
            "heightFactor" : 1.0,
            "heightDelta" : 0.0}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (fontSizeFactor != null); */;
        /* TODO (AssertStatementImpl) : assert (fontSizeDelta != null); */;
        /* TODO (AssertStatementImpl) : assert (fontSize != null || (fontSizeFactor == 1.0 && fontSizeDelta == 0.0)); */;
        /* TODO (AssertStatementImpl) : assert (fontWeightDelta != null); */;
        /* TODO (AssertStatementImpl) : assert (fontWeight != null || fontWeightDelta == 0.0); */;
        /* TODO (AssertStatementImpl) : assert (letterSpacingFactor != null); */;
        /* TODO (AssertStatementImpl) : assert (letterSpacingDelta != null); */;
        /* TODO (AssertStatementImpl) : assert (letterSpacing != null || (letterSpacingFactor == 1.0 && letterSpacingDelta == 0.0)); */;
        /* TODO (AssertStatementImpl) : assert (wordSpacingFactor != null); */;
        /* TODO (AssertStatementImpl) : assert (wordSpacingDelta != null); */;
        /* TODO (AssertStatementImpl) : assert (wordSpacing != null || (wordSpacingFactor == 1.0 && wordSpacingDelta == 0.0)); */;
        /* TODO (AssertStatementImpl) : assert (heightFactor != null); */;
        /* TODO (AssertStatementImpl) : assert (heightDelta != null); */;
        /* TODO (AssertStatementImpl) : assert (heightFactor != null || (heightFactor == 1.0 && heightDelta == 0.0)); */;
        let modifiedDebugLabel : string;
        /* TODO (AssertStatementImpl) : assert (() {if (debugLabel != null) modifiedDebugLabel = '($debugLabel).apply'; return true;}()); */;
        return TextStyle({
            inherit : this.inherit,color : op(Op.EQUALS,this.foreground,null) ? (color || this.color) : null,fontFamily : (fontFamily || this.fontFamily),fontFamilyFallback : (fontFamilyFallback || this.fontFamilyFallback),fontSize : this.fontSize == null ? null : this.fontSize * fontSizeFactor + fontSizeDelta,fontWeight : op(Op.EQUALS,this.fontWeight,null) ? null : op(Op.INDEX,FontWeight.values,(op(Op.PLUS,this.fontWeight.index,fontWeightDelta)).clamp(0,op(Op.MINUS,FontWeight.values.length,1))),fontStyle : this.fontStyle,letterSpacing : this.letterSpacing == null ? null : this.letterSpacing * letterSpacingFactor + letterSpacingDelta,wordSpacing : this.wordSpacing == null ? null : this.wordSpacing * wordSpacingFactor + wordSpacingDelta,textBaseline : this.textBaseline,height : this.height == null ? null : this.height * heightFactor + heightDelta,locale : this.locale,foreground : this.foreground != null ? this.foreground : null,background : this.background,shadows : this.shadows,decoration : (decoration || this.decoration),decorationColor : (decorationColor || this.decorationColor),decorationStyle : (decorationStyle || this.decorationStyle),debugLabel : modifiedDebugLabel});
    }
    merge(other : TextStyle) : TextStyle {
        if (op(Op.EQUALS,other,null)) return this;
        if (!other.inherit) return other;
        let mergedDebugLabel : string;
        /* TODO (AssertStatementImpl) : assert (() {if (other.debugLabel != null || debugLabel != null) mergedDebugLabel = '(${debugLabel ?? _kDefaultDebugLabel}).merge(${other.debugLabel ?? _kDefaultDebugLabel})'; return true;}()); */;
        return this.copyWith({
            color : other.color,fontFamily : other.fontFamily,fontFamilyFallback : other.fontFamilyFallback,fontSize : other.fontSize,fontWeight : other.fontWeight,fontStyle : other.fontStyle,letterSpacing : other.letterSpacing,wordSpacing : other.wordSpacing,textBaseline : other.textBaseline,height : other.height,locale : other.locale,foreground : other.foreground,background : other.background,shadows : other.shadows,decoration : other.decoration,decorationColor : other.decorationColor,decorationStyle : other.decorationStyle,debugLabel : mergedDebugLabel});
    }
    static lerp(a : TextStyle,b : TextStyle,t : double) : TextStyle {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        /* TODO (AssertStatementImpl) : assert (a == null || b == null || a.inherit == b.inherit); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) {
            return null;
        }
        let lerpDebugLabel : string;
        /* TODO (AssertStatementImpl) : assert (() {lerpDebugLabel = 'lerp(${a?.debugLabel ?? _kDefaultDebugLabel} ⎯${t.toStringAsFixed(1)}→ ${b?.debugLabel ?? _kDefaultDebugLabel})'; return true;}()); */;
        if (op(Op.EQUALS,a,null)) {
            return TextStyle({
                inherit : b.inherit,color : Color.lerp(null,b.color,t),fontFamily : t < 0.5 ? null : b.fontFamily,fontFamilyFallback : t < 0.5 ? null : b.fontFamilyFallback,fontSize : t < 0.5 ? null : b.fontSize,fontWeight : FontWeight.lerp(null,b.fontWeight,t),fontStyle : t < 0.5 ? null : b.fontStyle,letterSpacing : t < 0.5 ? null : b.letterSpacing,wordSpacing : t < 0.5 ? null : b.wordSpacing,textBaseline : t < 0.5 ? null : b.textBaseline,height : t < 0.5 ? null : b.height,locale : t < 0.5 ? null : b.locale,foreground : t < 0.5 ? null : b.foreground,background : t < 0.5 ? null : b.background,decoration : t < 0.5 ? null : b.decoration,shadows : t < 0.5 ? null : b.shadows,decorationColor : Color.lerp(null,b.decorationColor,t),decorationStyle : t < 0.5 ? null : b.decorationStyle,debugLabel : lerpDebugLabel});
        }
        if (op(Op.EQUALS,b,null)) {
            return TextStyle({
                inherit : a.inherit,color : Color.lerp(a.color,null,t),fontFamily : t < 0.5 ? a.fontFamily : null,fontFamilyFallback : t < 0.5 ? a.fontFamilyFallback : null,fontSize : t < 0.5 ? a.fontSize : null,fontWeight : FontWeight.lerp(a.fontWeight,null,t),fontStyle : t < 0.5 ? a.fontStyle : null,letterSpacing : t < 0.5 ? a.letterSpacing : null,wordSpacing : t < 0.5 ? a.wordSpacing : null,textBaseline : t < 0.5 ? a.textBaseline : null,height : t < 0.5 ? a.height : null,locale : t < 0.5 ? a.locale : null,foreground : t < 0.5 ? a.foreground : null,background : t < 0.5 ? a.background : null,shadows : t < 0.5 ? a.shadows : null,decoration : t < 0.5 ? a.decoration : null,decorationColor : Color.lerp(a.decorationColor,null,t),decorationStyle : t < 0.5 ? a.decorationStyle : null,debugLabel : lerpDebugLabel});
        }
        return TextStyle({
            inherit : b.inherit,color : op(Op.EQUALS,a.foreground,null) && op(Op.EQUALS,b.foreground,null) ? Color.lerp(a.color,b.color,t) : null,fontFamily : t < 0.5 ? a.fontFamily : b.fontFamily,fontFamilyFallback : t < 0.5 ? a.fontFamilyFallback : b.fontFamilyFallback,fontSize : ui.lerpDouble((a.fontSize || b.fontSize),(b.fontSize || a.fontSize),t),fontWeight : FontWeight.lerp(a.fontWeight,b.fontWeight,t),fontStyle : t < 0.5 ? a.fontStyle : b.fontStyle,letterSpacing : ui.lerpDouble((a.letterSpacing || b.letterSpacing),(b.letterSpacing || a.letterSpacing),t),wordSpacing : ui.lerpDouble((a.wordSpacing || b.wordSpacing),(b.wordSpacing || a.wordSpacing),t),textBaseline : t < 0.5 ? a.textBaseline : b.textBaseline,height : ui.lerpDouble((a.height || b.height),(b.height || a.height),t),locale : t < 0.5 ? a.locale : b.locale,foreground : (a.foreground != null || b.foreground != null) ? t < 0.5 ? (a.foreground || (((_) : any =>  {
                {
                    _.color = a.color;
                    return _;
                }
            })(Paint()))) : (b.foreground || (((_) : any =>  {
                {
                    _.color = b.color;
                    return _;
                }
            })(Paint()))) : null,background : t < 0.5 ? a.background : b.background,shadows : t < 0.5 ? a.shadows : b.shadows,decoration : t < 0.5 ? a.decoration : b.decoration,decorationColor : Color.lerp(a.decorationColor,b.decorationColor,t),decorationStyle : t < 0.5 ? a.decorationStyle : b.decorationStyle,debugLabel : lerpDebugLabel});
    }
    getTextStyle(_namedArguments? : {textScaleFactor? : double}) : any {
        let {textScaleFactor} = Object.assign({
            "textScaleFactor" : 1.0}, _namedArguments );
        return ui.TextStyle({
            color : this.color,decoration : this.decoration,decorationColor : this.decorationColor,decorationStyle : this.decorationStyle,fontWeight : this.fontWeight,fontStyle : this.fontStyle,textBaseline : this.textBaseline,fontFamily : this.fontFamily,fontFamilyFallback : this.fontFamilyFallback,fontSize : this.fontSize == null ? null : this.fontSize * textScaleFactor,letterSpacing : this.letterSpacing,wordSpacing : this.wordSpacing,height : this.height,locale : this.locale,foreground : this.foreground,background : this.background,shadows : this.shadows});
    }
    getParagraphStyle(_namedArguments? : {textAlign? : any,textDirection? : any,textScaleFactor? : double,ellipsis? : string,maxLines? : number,locale? : any,fontFamily? : string,fontSize? : double,fontWeight? : any,fontStyle? : any,height? : double,strutStyle? : lib4.StrutStyle}) : any {
        let {textAlign,textDirection,textScaleFactor,ellipsis,maxLines,locale,fontFamily,fontSize,fontWeight,fontStyle,height,strutStyle} = Object.assign({
            "textScaleFactor" : 1.0}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (textScaleFactor != null); */;
        /* TODO (AssertStatementImpl) : assert (maxLines == null || maxLines > 0); */;
        return ui.ParagraphStyle({
            textAlign : textAlign,textDirection : textDirection,fontWeight : (fontWeight || this.fontWeight),fontStyle : (fontStyle || this.fontStyle),fontFamily : (fontFamily || this.fontFamily),fontSize : (((fontSize || this.fontSize) || TextStyle._defaultFontSize)) * textScaleFactor,height : (height || this.height),strutStyle : op(Op.EQUALS,strutStyle,null) ? null : ui.StrutStyle({
                fontFamily : strutStyle.fontFamily,fontFamilyFallback : strutStyle.fontFamilyFallback,fontSize : strutStyle.fontSize,height : strutStyle.height,leading : strutStyle.leading,fontWeight : strutStyle.fontWeight,fontStyle : strutStyle.fontStyle,forceStrutHeight : strutStyle.forceStrutHeight}),maxLines : maxLines,ellipsis : ellipsis,locale : locale});
    }
    compareTo(other : TextStyle) : lib5.RenderComparison {
        if (core.identical(this,other)) return lib5.RenderComparison.identical;
        if (this.inherit != other.inherit || this.fontFamily != other.fontFamily || this.fontSize != other.fontSize || this.fontWeight != other.fontWeight || this.fontStyle != other.fontStyle || this.letterSpacing != other.letterSpacing || this.wordSpacing != other.wordSpacing || this.textBaseline != other.textBaseline || this.height != other.height || this.locale != other.locale || this.foreground != other.foreground || this.background != other.background || !lib6.listEquals(this.shadows,other.shadows) || !lib6.listEquals(this.fontFamilyFallback,other.fontFamilyFallback)) return lib5.RenderComparison.layout;
        if (this.color != other.color || this.decoration != other.decoration || this.decorationColor != other.decorationColor || this.decorationStyle != other.decorationStyle) return lib5.RenderComparison.paint;
        return lib5.RenderComparison.identical;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : TextStyle = other;
        return this.inherit == typedOther.inherit && op(Op.EQUALS,this.color,typedOther.color) && this.fontFamily == typedOther.fontFamily && this.fontSize == typedOther.fontSize && op(Op.EQUALS,this.fontWeight,typedOther.fontWeight) && op(Op.EQUALS,this.fontStyle,typedOther.fontStyle) && this.letterSpacing == typedOther.letterSpacing && this.wordSpacing == typedOther.wordSpacing && op(Op.EQUALS,this.textBaseline,typedOther.textBaseline) && this.height == typedOther.height && op(Op.EQUALS,this.locale,typedOther.locale) && op(Op.EQUALS,this.foreground,typedOther.foreground) && op(Op.EQUALS,this.background,typedOther.background) && op(Op.EQUALS,this.decoration,typedOther.decoration) && op(Op.EQUALS,this.decorationColor,typedOther.decorationColor) && op(Op.EQUALS,this.decorationStyle,typedOther.decorationStyle) && lib6.listEquals(this.shadows,typedOther.shadows) && lib6.listEquals(this.fontFamilyFallback,typedOther.fontFamilyFallback);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.inherit,this.color,this.fontFamily,this.fontFamilyFallback,this.fontSize,this.fontWeight,this.fontStyle,this.letterSpacing,this.wordSpacing,this.textBaseline,this.height,this.locale,this.foreground,this.background,this.decoration,this.decorationColor,this.decorationStyle,this.shadows);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toStringShort() : string {
        return `${this.runtimeType}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib3.DiagnosticPropertiesBuilder,_namedArguments? : {prefix? : string}) : any {
        let {prefix} = Object.assign({
            "prefix" : ''}, _namedArguments );
        super.debugFillProperties(properties);
        if (this.debugLabel != null) properties.add(lib3.MessageProperty(`${prefix}debugLabel`,this.debugLabel));
        let styles : core.DartList<lib3.DiagnosticsNode> = new core.DartList.literal<lib3.DiagnosticsNode>();
        styles.add(lib3.DiagnosticsProperty(`${prefix}color`,this.color,{
            defaultValue : null}));
        styles.add(lib3.StringProperty(`${prefix}family`,this.fontFamily,{
            defaultValue : null,quoted : false}));
        styles.add(lib3.IterableProperty(`${prefix}familyFallback`,this.fontFamilyFallback,{
            defaultValue : null}));
        styles.add(lib3.DoubleProperty(`${prefix}size`,this.fontSize,{
            defaultValue : null}));
        let weightDescription : string;
        if (this.fontWeight != null) {
            weightDescription = `${op(Op.PLUS,this.fontWeight.index,1)}00`;
        }
        styles.add(lib3.DiagnosticsProperty(`${prefix}weight`,this.fontWeight,{
            description : weightDescription,defaultValue : null}));
        styles.add(lib3.EnumProperty(`${prefix}style`,this.fontStyle,{
            defaultValue : null}));
        styles.add(lib3.DoubleProperty(`${prefix}letterSpacing`,this.letterSpacing,{
            defaultValue : null}));
        styles.add(lib3.DoubleProperty(`${prefix}wordSpacing`,this.wordSpacing,{
            defaultValue : null}));
        styles.add(lib3.EnumProperty(`${prefix}baseline`,this.textBaseline,{
            defaultValue : null}));
        styles.add(lib3.DoubleProperty(`${prefix}height`,this.height,{
            unit : 'x',defaultValue : null}));
        styles.add(lib3.DiagnosticsProperty(`${prefix}locale`,this.locale,{
            defaultValue : null}));
        styles.add(lib3.DiagnosticsProperty(`${prefix}foreground`,this.foreground,{
            defaultValue : null}));
        styles.add(lib3.DiagnosticsProperty(`${prefix}background`,this.background,{
            defaultValue : null}));
        if (this.decoration != null || this.decorationColor != null || this.decorationStyle != null) {
            let decorationDescription : core.DartList<string> = new core.DartList.literal<string>();
            if (this.decorationStyle != null) decorationDescription.add(lib3.describeEnum(this.decorationStyle));
            styles.add(lib3.DiagnosticsProperty(`${prefix}decorationColor`,this.decorationColor,{
                defaultValue : null,level : lib3.DiagnosticLevel.fine}));
            if (this.decorationColor != null) decorationDescription.add(`${this.decorationColor}`);
            styles.add(lib3.DiagnosticsProperty(`${prefix}decoration`,this.decoration,{
                defaultValue : null,level : lib3.DiagnosticLevel.hidden}));
            if (this.decoration != null) decorationDescription.add(`${this.decoration}`);
            /* TODO (AssertStatementImpl) : assert (decorationDescription.isNotEmpty); */;
            styles.add(lib3.MessageProperty(`${prefix}decoration`,decorationDescription.join(' ')));
        }
        let styleSpecified : boolean = styles.any((n : lib3.DiagnosticsNode) =>  {
            return !n.isFiltered(lib3.DiagnosticLevel.info);
        });
        properties.add(lib3.DiagnosticsProperty(`${prefix}inherit`,this.inherit,{
            level : (!styleSpecified && this.inherit) ? lib3.DiagnosticLevel.fine : lib3.DiagnosticLevel.info}));
        styles.forEach(properties.add.bind(properties));
        if (!styleSpecified) properties.add(lib3.FlagProperty('inherit',{
            value : this.inherit,ifTrue : `${prefix}<all styles inherited>`,ifFalse : `${prefix}<no style specified>`}));
    }
}

export class properties {
    private static __$_kDefaultDebugLabel : string;
    static get _kDefaultDebugLabel() : string { 
        if (this.__$_kDefaultDebugLabel===undefined) {
            this.__$_kDefaultDebugLabel = 'unknown';
        }
        return this.__$_kDefaultDebugLabel;
    }
    static set _kDefaultDebugLabel(__$value : string)  { 
        this.__$_kDefaultDebugLabel = __$value;
    }

    private static __$_kColorForegroundWarning : string;
    static get _kColorForegroundWarning() : string { 
        if (this.__$_kColorForegroundWarning===undefined) {
            this.__$_kColorForegroundWarning = 'Cannot provide both a color and a foreground\n' + 'The color argument is just a shorthand for "foreground: new Paint()..color = color".';
        }
        return this.__$_kColorForegroundWarning;
    }
    static set _kColorForegroundWarning(__$value : string)  { 
        this.__$_kColorForegroundWarning = __$value;
    }

}
