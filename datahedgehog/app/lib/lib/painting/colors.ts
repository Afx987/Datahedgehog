/** Library asset:datahedgehog_monitor/lib/lib/painting/colors.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/print";

export var _getHue : (red : double,green : double,blue : double,max : double,delta : double) => double = (red : double,green : double,blue : double,max : double,delta : double) : double =>  {
    let hue : double;
    if (max == 0.0) {
        hue = 0.0;
    }else if (max == red) {
        hue = 60.0 * (((green - blue) / delta) % 6);
    }else if (max == green) {
        hue = 60.0 * (((blue - red) / delta) + 2);
    }else if (max == blue) {
        hue = 60.0 * (((red - green) / delta) + 4);
    }
    hue = new core.DartDouble(hue).isNaN ? 0.0 : hue;
    return hue;
};
export var _colorFromHue : (alpha : double,hue : double,chroma : double,secondary : double,match : double) => any = (alpha : double,hue : double,chroma : double,secondary : double,match : double) : any =>  {
    let red : double;
    let green : double;
    let blue : double;
    if (hue < 60.0) {
        red = chroma;
        green = secondary;
        blue = 0.0;
    }else if (hue < 120.0) {
        red = secondary;
        green = chroma;
        blue = 0.0;
    }else if (hue < 180.0) {
        red = 0.0;
        green = chroma;
        blue = secondary;
    }else if (hue < 240.0) {
        red = 0.0;
        green = secondary;
        blue = chroma;
    }else if (hue < 300.0) {
        red = secondary;
        green = 0.0;
        blue = chroma;
    }else {
        red = chroma;
        green = 0.0;
        blue = secondary;
    }
    return Color.fromARGB(new core.DartDouble((alpha * 255)).round(),new core.DartDouble(((red + match) * 255)).round(),new core.DartDouble(((green + match) * 255)).round(),new core.DartDouble(((blue + match) * 255)).round());
};
export namespace HSVColor {
    export type Constructors = 'fromAHSV';
    export type Interface = Omit<HSVColor, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class HSVColor {
    @namedConstructor
    fromAHSV(alpha : double,hue : double,saturation : double,value : double) {
        this.assert = assert;
        this.alpha = alpha;
        this.hue = hue;
        this.saturation = saturation;
        this.value = value;
    }
    static fromAHSV : new(alpha : double,hue : double,saturation : double,value : double) => HSVColor;

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
    static $fromColor(color : any) : HSVColor {
        let red : double = op(Op.DIVIDE,color.red,255);
        let green : double = op(Op.DIVIDE,color.green,255);
        let blue : double = op(Op.DIVIDE,color.blue,255);
        let max : double = math.max(red,math.max(green,blue));
        let min : double = math.min(red,math.min(green,blue));
        let delta : double = max - min;
        let alpha : double = op(Op.DIVIDE,color.alpha,255);
        let hue : double = _getHue(red,green,blue,max,delta);
        let saturation : double = max == 0.0 ? 0.0 : delta / max;
        return HSVColor.fromAHSV(alpha,hue,saturation,max);
    }
    static fromColor : new(color : any) => HSVColor;

    alpha : double;

    hue : double;

    saturation : double;

    value : double;

    withAlpha(alpha : double) : HSVColor {
        return HSVColor.fromAHSV(alpha,this.hue,this.saturation,this.value);
    }
    withHue(hue : double) : HSVColor {
        return HSVColor.fromAHSV(this.alpha,hue,this.saturation,this.value);
    }
    withSaturation(saturation : double) : HSVColor {
        return HSVColor.fromAHSV(this.alpha,this.hue,saturation,this.value);
    }
    withValue(value : double) : HSVColor {
        return HSVColor.fromAHSV(this.alpha,this.hue,this.saturation,value);
    }
    toColor() : any {
        let chroma : double = this.saturation * this.value;
        let secondary : double = chroma * (1.0 - new core.DartDouble((((this.hue / 60.0) % 2.0) - 1.0)).abs());
        let match : double = this.value - chroma;
        return _colorFromHue(this.alpha,this.hue,chroma,secondary,match);
    }
    _scaleAlpha(factor : double) : HSVColor {
        return this.withAlpha(this.alpha * factor);
    }
    static lerp(a : HSVColor,b : HSVColor,t : double) : HSVColor {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        if (op(Op.EQUALS,a,null)) return b._scaleAlpha(t);
        if (op(Op.EQUALS,b,null)) return a._scaleAlpha(1.0 - t);
        return HSVColor.fromAHSV(lerpDouble(a.alpha,b.alpha,t).clamp(0.0,1.0),op(Op.MODULE,lerpDouble(a.hue,b.hue,t),360.0),lerpDouble(a.saturation,b.saturation,t).clamp(0.0,1.0),lerpDouble(a.value,b.value,t).clamp(0.0,1.0));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (isNot(other, HSVColor)) return false;
        let typedOther : HSVColor = other;
        return typedOther.alpha == this.alpha && typedOther.hue == this.hue && typedOther.saturation == this.saturation && typedOther.value == this.value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.alpha,this.hue,this.saturation,this.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.alpha}, ${this.hue}, ${this.saturation}, ${this.value})`;
    }
}

export namespace HSLColor {
    export type Constructors = 'fromAHSL';
    export type Interface = Omit<HSLColor, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class HSLColor {
    @namedConstructor
    fromAHSL(alpha : double,hue : double,saturation : double,lightness : double) {
        this.assert = assert;
        this.alpha = alpha;
        this.hue = hue;
        this.saturation = saturation;
        this.lightness = lightness;
    }
    static fromAHSL : new(alpha : double,hue : double,saturation : double,lightness : double) => HSLColor;

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
    static $fromColor(color : any) : HSLColor {
        let red : double = op(Op.DIVIDE,color.red,255);
        let green : double = op(Op.DIVIDE,color.green,255);
        let blue : double = op(Op.DIVIDE,color.blue,255);
        let max : double = math.max(red,math.max(green,blue));
        let min : double = math.min(red,math.min(green,blue));
        let delta : double = max - min;
        let alpha : double = op(Op.DIVIDE,color.alpha,255);
        let hue : double = _getHue(red,green,blue,max,delta);
        let lightness : double = (max + min) / 2.0;
        let saturation : double = lightness == 1.0 ? 0.0 : new core.DartDouble((delta / (1.0 - new core.DartDouble((2.0 * lightness - 1.0)).abs()))).clamp(0.0,1.0);
        return HSLColor.fromAHSL(alpha,hue,saturation,lightness);
    }
    static fromColor : new(color : any) => HSLColor;

    alpha : double;

    hue : double;

    saturation : double;

    lightness : double;

    withAlpha(alpha : double) : HSLColor {
        return HSLColor.fromAHSL(alpha,this.hue,this.saturation,this.lightness);
    }
    withHue(hue : double) : HSLColor {
        return HSLColor.fromAHSL(this.alpha,hue,this.saturation,this.lightness);
    }
    withSaturation(saturation : double) : HSLColor {
        return HSLColor.fromAHSL(this.alpha,this.hue,saturation,this.lightness);
    }
    withLightness(lightness : double) : HSLColor {
        return HSLColor.fromAHSL(this.alpha,this.hue,this.saturation,lightness);
    }
    toColor() : any {
        let chroma : double = (1.0 - new core.DartDouble((2.0 * this.lightness - 1.0)).abs()) * this.saturation;
        let secondary : double = chroma * (1.0 - new core.DartDouble((((this.hue / 60.0) % 2.0) - 1.0)).abs());
        let match : double = this.lightness - chroma / 2.0;
        return _colorFromHue(this.alpha,this.hue,chroma,secondary,match);
    }
    _scaleAlpha(factor : double) : HSLColor {
        return this.withAlpha(this.alpha * factor);
    }
    static lerp(a : HSLColor,b : HSLColor,t : double) : HSLColor {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        if (op(Op.EQUALS,a,null)) return b._scaleAlpha(t);
        if (op(Op.EQUALS,b,null)) return a._scaleAlpha(1.0 - t);
        return HSLColor.fromAHSL(lerpDouble(a.alpha,b.alpha,t).clamp(0.0,1.0),op(Op.MODULE,lerpDouble(a.hue,b.hue,t),360.0),lerpDouble(a.saturation,b.saturation,t).clamp(0.0,1.0),lerpDouble(a.lightness,b.lightness,t).clamp(0.0,1.0));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (isNot(other, HSLColor)) return false;
        let typedOther : HSLColor = other;
        return typedOther.alpha == this.alpha && typedOther.hue == this.hue && typedOther.saturation == this.saturation && typedOther.lightness == this.lightness;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.alpha,this.hue,this.saturation,this.lightness);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.alpha}, ${this.hue}, ${this.saturation}, ${this.lightness})`;
    }
}

export namespace ColorSwatch {
    export type Constructors = 'ColorSwatch';
    export type Interface<T> = Omit<ColorSwatch<T>, Constructors>;
}
@DartClass
export class ColorSwatch<T> extends any {
    constructor(primary : number,_swatch : core.DartMap<T,any>) {
    }
    @defaultConstructor
    ColorSwatch(primary : number,_swatch : core.DartMap<T,any>) {
        super.DartObject(primary);
        this._swatch = _swatch;
    }
    @DartPropertyAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    _swatch : core.DartMap<T,any>;

    [OperatorMethods.INDEX](index : T) : any {
        return this._swatch.get(index);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : ColorSwatch<T> = other;
        return op(Op.EQUALS,super,other) && this._swatch == typedOther._swatch;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.runtimeType,lib4.value,this._swatch);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(primary value: ${super.toString()})`;
    }
}

export class properties {
}
