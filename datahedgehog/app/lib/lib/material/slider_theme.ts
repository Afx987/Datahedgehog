/** Library asset:datahedgehog_monitor/lib/lib/material/slider_theme.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "./theme";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib8 from "./theme_data";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/rendering/object";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/painting/text_painter";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as math from "@dart2ts/dart/math";

export namespace SliderTheme {
    export type Constructors = lib3.InheritedWidget.Constructors | 'SliderTheme';
    export type Interface = Omit<SliderTheme, Constructors>;
}
@DartClass
export class SliderTheme extends lib3.InheritedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,data? : SliderThemeData,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliderTheme(_namedArguments? : {key? : lib4.Key,data? : SliderThemeData,child? : lib3.Widget}) {
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

    data : SliderThemeData;

    static of(context : lib3.BuildContext) : SliderThemeData {
        let inheritedTheme : SliderTheme = context.inheritFromWidgetOfExactType(SliderTheme);
        return inheritedTheme != null ? inheritedTheme.data : lib5.Theme.of(context).sliderTheme;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateShouldNotify(oldWidget : SliderTheme) : boolean {
        return this.data != oldWidget.data;
    }
}

export enum ShowValueIndicator {
    onlyForDiscrete,
    onlyForContinuous,
    always,
    never
}

export namespace SliderThemeData {
    export type Constructors = lib6.Diagnosticable.Constructors | 'SliderThemeData';
    export type Interface = Omit<SliderThemeData, Constructors>;
}
@DartClass
export class SliderThemeData extends lib6.Diagnosticable {
    constructor(_namedArguments? : {trackHeight? : double,activeTrackColor? : any,inactiveTrackColor? : any,disabledActiveTrackColor? : any,disabledInactiveTrackColor? : any,activeTickMarkColor? : any,inactiveTickMarkColor? : any,disabledActiveTickMarkColor? : any,disabledInactiveTickMarkColor? : any,thumbColor? : any,disabledThumbColor? : any,overlayColor? : any,valueIndicatorColor? : any,trackShape? : SliderTrackShape,tickMarkShape? : SliderTickMarkShape,thumbShape? : SliderComponentShape,overlayShape? : SliderComponentShape,valueIndicatorShape? : SliderComponentShape,showValueIndicator? : ShowValueIndicator,valueIndicatorTextStyle? : lib7.TextStyle}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SliderThemeData(_namedArguments? : {trackHeight? : double,activeTrackColor? : any,inactiveTrackColor? : any,disabledActiveTrackColor? : any,disabledInactiveTrackColor? : any,activeTickMarkColor? : any,inactiveTickMarkColor? : any,disabledActiveTickMarkColor? : any,disabledInactiveTickMarkColor? : any,thumbColor? : any,disabledThumbColor? : any,overlayColor? : any,valueIndicatorColor? : any,trackShape? : SliderTrackShape,tickMarkShape? : SliderTickMarkShape,thumbShape? : SliderComponentShape,overlayShape? : SliderComponentShape,valueIndicatorShape? : SliderComponentShape,showValueIndicator? : ShowValueIndicator,valueIndicatorTextStyle? : lib7.TextStyle}) {
        let {trackHeight,activeTrackColor,inactiveTrackColor,disabledActiveTrackColor,disabledInactiveTrackColor,activeTickMarkColor,inactiveTickMarkColor,disabledActiveTickMarkColor,disabledInactiveTickMarkColor,thumbColor,disabledThumbColor,overlayColor,valueIndicatorColor,trackShape,tickMarkShape,thumbShape,overlayShape,valueIndicatorShape,showValueIndicator,valueIndicatorTextStyle} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.trackHeight = trackHeight;
        this.activeTrackColor = activeTrackColor;
        this.inactiveTrackColor = inactiveTrackColor;
        this.disabledActiveTrackColor = disabledActiveTrackColor;
        this.disabledInactiveTrackColor = disabledInactiveTrackColor;
        this.activeTickMarkColor = activeTickMarkColor;
        this.inactiveTickMarkColor = inactiveTickMarkColor;
        this.disabledActiveTickMarkColor = disabledActiveTickMarkColor;
        this.disabledInactiveTickMarkColor = disabledInactiveTickMarkColor;
        this.thumbColor = thumbColor;
        this.disabledThumbColor = disabledThumbColor;
        this.overlayColor = overlayColor;
        this.valueIndicatorColor = valueIndicatorColor;
        this.trackShape = trackShape;
        this.tickMarkShape = tickMarkShape;
        this.thumbShape = thumbShape;
        this.overlayShape = overlayShape;
        this.valueIndicatorShape = valueIndicatorShape;
        this.showValueIndicator = showValueIndicator;
        this.valueIndicatorTextStyle = valueIndicatorTextStyle;
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

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    @namedFactory
    static $fromPrimaryColors(_namedArguments? : {primaryColor? : any,primaryColorDark? : any,primaryColorLight? : any,valueIndicatorTextStyle? : lib7.TextStyle}) : SliderThemeData {
        let {primaryColor,primaryColorDark,primaryColorLight,valueIndicatorTextStyle} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (primaryColor != null); */;
        /* TODO (AssertStatementImpl) : assert (primaryColorDark != null); */;
        /* TODO (AssertStatementImpl) : assert (primaryColorLight != null); */;
        /* TODO (AssertStatementImpl) : assert (valueIndicatorTextStyle != null); */;
        let activeTrackAlpha : number = 255;
        let inactiveTrackAlpha : number = 61;
        let disabledActiveTrackAlpha : number = 82;
        let disabledInactiveTrackAlpha : number = 31;
        let activeTickMarkAlpha : number = 138;
        let inactiveTickMarkAlpha : number = 138;
        let disabledActiveTickMarkAlpha : number = 31;
        let disabledInactiveTickMarkAlpha : number = 31;
        let thumbAlpha : number = 255;
        let disabledThumbAlpha : number = 82;
        let valueIndicatorAlpha : number = 255;
        let overlayLightAlpha : number = 41;
        return SliderThemeData({
            trackHeight : 2.0,activeTrackColor : primaryColor.withAlpha(activeTrackAlpha),inactiveTrackColor : primaryColor.withAlpha(inactiveTrackAlpha),disabledActiveTrackColor : primaryColorDark.withAlpha(disabledActiveTrackAlpha),disabledInactiveTrackColor : primaryColorDark.withAlpha(disabledInactiveTrackAlpha),activeTickMarkColor : primaryColorLight.withAlpha(activeTickMarkAlpha),inactiveTickMarkColor : primaryColor.withAlpha(inactiveTickMarkAlpha),disabledActiveTickMarkColor : primaryColorLight.withAlpha(disabledActiveTickMarkAlpha),disabledInactiveTickMarkColor : primaryColorDark.withAlpha(disabledInactiveTickMarkAlpha),thumbColor : primaryColor.withAlpha(thumbAlpha),disabledThumbColor : primaryColorDark.withAlpha(disabledThumbAlpha),overlayColor : primaryColor.withAlpha(overlayLightAlpha),valueIndicatorColor : primaryColor.withAlpha(valueIndicatorAlpha),trackShape : new RectangularSliderTrackShape(),tickMarkShape : new RoundSliderTickMarkShape(),thumbShape : new RoundSliderThumbShape(),overlayShape : new RoundSliderOverlayShape(),valueIndicatorShape : new PaddleSliderValueIndicatorShape(),valueIndicatorTextStyle : valueIndicatorTextStyle,showValueIndicator : ShowValueIndicator.onlyForDiscrete});
    }
    static fromPrimaryColors : new(_namedArguments? : {primaryColor? : any,primaryColorDark? : any,primaryColorLight? : any,valueIndicatorTextStyle? : lib7.TextStyle}) => SliderThemeData;

    trackHeight : double;

    activeTrackColor : any;

    inactiveTrackColor : any;

    disabledActiveTrackColor : any;

    disabledInactiveTrackColor : any;

    activeTickMarkColor : any;

    inactiveTickMarkColor : any;

    disabledActiveTickMarkColor : any;

    disabledInactiveTickMarkColor : any;

    thumbColor : any;

    disabledThumbColor : any;

    overlayColor : any;

    valueIndicatorColor : any;

    trackShape : SliderTrackShape;

    tickMarkShape : SliderTickMarkShape;

    overlayShape : SliderComponentShape;

    thumbShape : SliderComponentShape;

    valueIndicatorShape : SliderComponentShape;

    showValueIndicator : ShowValueIndicator;

    valueIndicatorTextStyle : lib7.TextStyle;

    copyWith(_namedArguments? : {trackHeight? : double,activeTrackColor? : any,inactiveTrackColor? : any,disabledActiveTrackColor? : any,disabledInactiveTrackColor? : any,activeTickMarkColor? : any,inactiveTickMarkColor? : any,disabledActiveTickMarkColor? : any,disabledInactiveTickMarkColor? : any,thumbColor? : any,disabledThumbColor? : any,overlayColor? : any,valueIndicatorColor? : any,trackShape? : SliderTrackShape,tickMarkShape? : SliderTickMarkShape,thumbShape? : SliderComponentShape,overlayShape? : SliderComponentShape,valueIndicatorShape? : SliderComponentShape,showValueIndicator? : ShowValueIndicator,valueIndicatorTextStyle? : lib7.TextStyle}) : SliderThemeData {
        let {trackHeight,activeTrackColor,inactiveTrackColor,disabledActiveTrackColor,disabledInactiveTrackColor,activeTickMarkColor,inactiveTickMarkColor,disabledActiveTickMarkColor,disabledInactiveTickMarkColor,thumbColor,disabledThumbColor,overlayColor,valueIndicatorColor,trackShape,tickMarkShape,thumbShape,overlayShape,valueIndicatorShape,showValueIndicator,valueIndicatorTextStyle} = Object.assign({
        }, _namedArguments );
        return SliderThemeData({
            trackHeight : (trackHeight || this.trackHeight),activeTrackColor : (activeTrackColor || this.activeTrackColor),inactiveTrackColor : (inactiveTrackColor || this.inactiveTrackColor),disabledActiveTrackColor : (disabledActiveTrackColor || this.disabledActiveTrackColor),disabledInactiveTrackColor : (disabledInactiveTrackColor || this.disabledInactiveTrackColor),activeTickMarkColor : (activeTickMarkColor || this.activeTickMarkColor),inactiveTickMarkColor : (inactiveTickMarkColor || this.inactiveTickMarkColor),disabledActiveTickMarkColor : (disabledActiveTickMarkColor || this.disabledActiveTickMarkColor),disabledInactiveTickMarkColor : (disabledInactiveTickMarkColor || this.disabledInactiveTickMarkColor),thumbColor : (thumbColor || this.thumbColor),disabledThumbColor : (disabledThumbColor || this.disabledThumbColor),overlayColor : (overlayColor || this.overlayColor),valueIndicatorColor : (valueIndicatorColor || this.valueIndicatorColor),trackShape : (trackShape || this.trackShape),tickMarkShape : (tickMarkShape || this.tickMarkShape),thumbShape : (thumbShape || this.thumbShape),overlayShape : (overlayShape || this.overlayShape),valueIndicatorShape : (valueIndicatorShape || this.valueIndicatorShape),showValueIndicator : (showValueIndicator || this.showValueIndicator),valueIndicatorTextStyle : (valueIndicatorTextStyle || this.valueIndicatorTextStyle)});
    }
    static lerp(a : SliderThemeData,b : SliderThemeData,t : double) : SliderThemeData {
        /* TODO (AssertStatementImpl) : assert (a != null); */;
        /* TODO (AssertStatementImpl) : assert (b != null); */;
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        return SliderThemeData({
            trackHeight : lerpDouble(a.trackHeight,b.trackHeight,t),activeTrackColor : Color.lerp(a.activeTrackColor,b.activeTrackColor,t),inactiveTrackColor : Color.lerp(a.inactiveTrackColor,b.inactiveTrackColor,t),disabledActiveTrackColor : Color.lerp(a.disabledActiveTrackColor,b.disabledActiveTrackColor,t),disabledInactiveTrackColor : Color.lerp(a.disabledInactiveTrackColor,b.disabledInactiveTrackColor,t),activeTickMarkColor : Color.lerp(a.activeTickMarkColor,b.activeTickMarkColor,t),inactiveTickMarkColor : Color.lerp(a.inactiveTickMarkColor,b.inactiveTickMarkColor,t),disabledActiveTickMarkColor : Color.lerp(a.disabledActiveTickMarkColor,b.disabledActiveTickMarkColor,t),disabledInactiveTickMarkColor : Color.lerp(a.disabledInactiveTickMarkColor,b.disabledInactiveTickMarkColor,t),thumbColor : Color.lerp(a.thumbColor,b.thumbColor,t),disabledThumbColor : Color.lerp(a.disabledThumbColor,b.disabledThumbColor,t),overlayColor : Color.lerp(a.overlayColor,b.overlayColor,t),valueIndicatorColor : Color.lerp(a.valueIndicatorColor,b.valueIndicatorColor,t),trackShape : t < 0.5 ? a.trackShape : b.trackShape,tickMarkShape : t < 0.5 ? a.tickMarkShape : b.tickMarkShape,thumbShape : t < 0.5 ? a.thumbShape : b.thumbShape,overlayShape : t < 0.5 ? a.overlayShape : b.overlayShape,valueIndicatorShape : t < 0.5 ? a.valueIndicatorShape : b.valueIndicatorShape,showValueIndicator : t < 0.5 ? a.showValueIndicator : b.showValueIndicator,valueIndicatorTextStyle : lib7.TextStyle.lerp(a.valueIndicatorTextStyle,b.valueIndicatorTextStyle,t)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.trackHeight,this.activeTrackColor,this.inactiveTrackColor,this.disabledActiveTrackColor,this.disabledInactiveTrackColor,this.activeTickMarkColor,this.inactiveTickMarkColor,this.disabledActiveTickMarkColor,this.disabledInactiveTickMarkColor,this.thumbColor,this.disabledThumbColor,this.overlayColor,this.valueIndicatorColor,this.trackShape,this.tickMarkShape,this.thumbShape,this.overlayShape,this.valueIndicatorShape,this.showValueIndicator,this.valueIndicatorTextStyle);
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
        let otherData : SliderThemeData = other;
        return otherData.trackHeight == this.trackHeight && op(Op.EQUALS,otherData.activeTrackColor,this.activeTrackColor) && op(Op.EQUALS,otherData.inactiveTrackColor,this.inactiveTrackColor) && op(Op.EQUALS,otherData.disabledActiveTrackColor,this.disabledActiveTrackColor) && op(Op.EQUALS,otherData.disabledInactiveTrackColor,this.disabledInactiveTrackColor) && op(Op.EQUALS,otherData.activeTickMarkColor,this.activeTickMarkColor) && op(Op.EQUALS,otherData.inactiveTickMarkColor,this.inactiveTickMarkColor) && op(Op.EQUALS,otherData.disabledActiveTickMarkColor,this.disabledActiveTickMarkColor) && op(Op.EQUALS,otherData.disabledInactiveTickMarkColor,this.disabledInactiveTickMarkColor) && op(Op.EQUALS,otherData.thumbColor,this.thumbColor) && op(Op.EQUALS,otherData.disabledThumbColor,this.disabledThumbColor) && op(Op.EQUALS,otherData.overlayColor,this.overlayColor) && op(Op.EQUALS,otherData.valueIndicatorColor,this.valueIndicatorColor) && op(Op.EQUALS,otherData.trackShape,this.trackShape) && op(Op.EQUALS,otherData.tickMarkShape,this.tickMarkShape) && op(Op.EQUALS,otherData.thumbShape,this.thumbShape) && op(Op.EQUALS,otherData.overlayShape,this.overlayShape) && op(Op.EQUALS,otherData.valueIndicatorShape,this.valueIndicatorShape) && op(Op.EQUALS,otherData.showValueIndicator,this.showValueIndicator) && op(Op.EQUALS,otherData.valueIndicatorTextStyle,this.valueIndicatorTextStyle);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib6.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        let defaultTheme : lib8.ThemeData = lib8.ThemeData.fallback();
        let defaultData : SliderThemeData = SliderThemeData.fromPrimaryColors({
            primaryColor : defaultTheme.primaryColor,primaryColorDark : defaultTheme.primaryColorDark,primaryColorLight : defaultTheme.primaryColorLight,valueIndicatorTextStyle : defaultTheme.accentTextTheme.body2});
        properties.add(lib6.DiagnosticsProperty('activeTrackColor',this.activeTrackColor,{
            defaultValue : defaultData.activeTrackColor}));
        properties.add(lib6.DiagnosticsProperty('activeTrackColor',this.activeTrackColor,{
            defaultValue : defaultData.activeTrackColor}));
        properties.add(lib6.DiagnosticsProperty('inactiveTrackColor',this.inactiveTrackColor,{
            defaultValue : defaultData.inactiveTrackColor}));
        properties.add(lib6.DiagnosticsProperty('disabledActiveTrackColor',this.disabledActiveTrackColor,{
            defaultValue : defaultData.disabledActiveTrackColor,level : lib6.DiagnosticLevel.debug}));
        properties.add(lib6.DiagnosticsProperty('disabledInactiveTrackColor',this.disabledInactiveTrackColor,{
            defaultValue : defaultData.disabledInactiveTrackColor,level : lib6.DiagnosticLevel.debug}));
        properties.add(lib6.DiagnosticsProperty('activeTickMarkColor',this.activeTickMarkColor,{
            defaultValue : defaultData.activeTickMarkColor,level : lib6.DiagnosticLevel.debug}));
        properties.add(lib6.DiagnosticsProperty('inactiveTickMarkColor',this.inactiveTickMarkColor,{
            defaultValue : defaultData.inactiveTickMarkColor,level : lib6.DiagnosticLevel.debug}));
        properties.add(lib6.DiagnosticsProperty('disabledActiveTickMarkColor',this.disabledActiveTickMarkColor,{
            defaultValue : defaultData.disabledActiveTickMarkColor,level : lib6.DiagnosticLevel.debug}));
        properties.add(lib6.DiagnosticsProperty('disabledInactiveTickMarkColor',this.disabledInactiveTickMarkColor,{
            defaultValue : defaultData.disabledInactiveTickMarkColor,level : lib6.DiagnosticLevel.debug}));
        properties.add(lib6.DiagnosticsProperty('thumbColor',this.thumbColor,{
            defaultValue : defaultData.thumbColor}));
        properties.add(lib6.DiagnosticsProperty('disabledThumbColor',this.disabledThumbColor,{
            defaultValue : defaultData.disabledThumbColor,level : lib6.DiagnosticLevel.debug}));
        properties.add(lib6.DiagnosticsProperty('overlayColor',this.overlayColor,{
            defaultValue : defaultData.overlayColor,level : lib6.DiagnosticLevel.debug}));
        properties.add(lib6.DiagnosticsProperty('valueIndicatorColor',this.valueIndicatorColor,{
            defaultValue : defaultData.valueIndicatorColor}));
        properties.add(lib6.DiagnosticsProperty('trackShape',this.trackShape,{
            defaultValue : defaultData.trackShape,level : lib6.DiagnosticLevel.debug}));
        properties.add(lib6.DiagnosticsProperty('tickMarkShape',this.tickMarkShape,{
            defaultValue : defaultData.tickMarkShape,level : lib6.DiagnosticLevel.debug}));
        properties.add(lib6.DiagnosticsProperty('thumbShape',this.thumbShape,{
            defaultValue : defaultData.thumbShape,level : lib6.DiagnosticLevel.debug}));
        properties.add(lib6.DiagnosticsProperty('overlayShape',this.overlayShape,{
            defaultValue : defaultData.overlayShape,level : lib6.DiagnosticLevel.debug}));
        properties.add(lib6.DiagnosticsProperty('valueIndicatorShape',this.valueIndicatorShape,{
            defaultValue : defaultData.valueIndicatorShape,level : lib6.DiagnosticLevel.debug}));
        properties.add(lib6.EnumProperty('showValueIndicator',this.showValueIndicator,{
            defaultValue : defaultData.showValueIndicator}));
        properties.add(lib6.DiagnosticsProperty('valueIndicatorTextStyle',this.valueIndicatorTextStyle,{
            defaultValue : defaultData.valueIndicatorTextStyle}));
    }
}

export namespace SliderTrackShape {
    export type Constructors = 'SliderTrackShape';
    export type Interface = Omit<SliderTrackShape, Constructors>;
}
@DartClass
export class SliderTrackShape {
    constructor() {
    }
    @defaultConstructor
    SliderTrackShape() {
    }
    @Abstract
    getPreferredRect(_namedArguments? : {parentBox? : any,offset? : any,sliderTheme? : SliderThemeData,isEnabled? : boolean,isDiscrete? : boolean}) : any{ throw 'abstract'}
    @Abstract
    paint(context : lib9.PaintingContext,offset : any,_namedArguments? : {parentBox? : any,sliderTheme? : SliderThemeData,enableAnimation? : lib10.Animation<double>,thumbCenter? : any,isEnabled? : boolean,isDiscrete? : boolean,textDirection? : any}) : any{ throw 'abstract'}
}

export namespace SliderTickMarkShape {
    export type Constructors = 'SliderTickMarkShape';
    export type Interface = Omit<SliderTickMarkShape, Constructors>;
}
@DartClass
export class SliderTickMarkShape {
    constructor() {
    }
    @defaultConstructor
    SliderTickMarkShape() {
    }
    @Abstract
    getPreferredSize(_namedArguments? : {sliderTheme? : SliderThemeData,isEnabled? : boolean}) : any{ throw 'abstract'}
    @Abstract
    paint(context : lib9.PaintingContext,center : any,_namedArguments? : {parentBox? : any,sliderTheme? : SliderThemeData,enableAnimation? : lib10.Animation<double>,thumbCenter? : any,isEnabled? : boolean,textDirection? : any}) : any{ throw 'abstract'}
    private static __$noTickMark : SliderTickMarkShape;
    static get noTickMark() : SliderTickMarkShape { 
        if (this.__$noTickMark===undefined) {
            this.__$noTickMark = _EmptySliderTickMarkShape();
        }
        return this.__$noTickMark;
    }
    static set noTickMark(__$value : SliderTickMarkShape)  { 
        this.__$noTickMark = __$value;
    }

}

export namespace SliderComponentShape {
    export type Constructors = 'SliderComponentShape';
    export type Interface = Omit<SliderComponentShape, Constructors>;
}
@DartClass
export class SliderComponentShape {
    constructor() {
    }
    @defaultConstructor
    SliderComponentShape() {
    }
    @Abstract
    getPreferredSize(isEnabled : boolean,isDiscrete : boolean) : any{ throw 'abstract'}
    @Abstract
    paint(context : lib9.PaintingContext,center : any,_namedArguments? : {activationAnimation? : lib10.Animation<double>,enableAnimation? : lib10.Animation<double>,isDiscrete? : boolean,labelPainter? : lib11.TextPainter,parentBox? : any,sliderTheme? : SliderThemeData,textDirection? : any,value? : double}) : any{ throw 'abstract'}
    private static __$noThumb : SliderComponentShape;
    static get noThumb() : SliderComponentShape { 
        if (this.__$noThumb===undefined) {
            this.__$noThumb = _EmptySliderComponentShape();
        }
        return this.__$noThumb;
    }
    static set noThumb(__$value : SliderComponentShape)  { 
        this.__$noThumb = __$value;
    }

    private static __$noOverlay : SliderComponentShape;
    static get noOverlay() : SliderComponentShape { 
        if (this.__$noOverlay===undefined) {
            this.__$noOverlay = _EmptySliderComponentShape();
        }
        return this.__$noOverlay;
    }
    static set noOverlay(__$value : SliderComponentShape)  { 
        this.__$noOverlay = __$value;
    }

}

export namespace _EmptySliderTickMarkShape {
    export type Constructors = SliderTickMarkShape.Constructors | '_EmptySliderTickMarkShape';
    export type Interface = Omit<_EmptySliderTickMarkShape, Constructors>;
}
@DartClass
export class _EmptySliderTickMarkShape extends SliderTickMarkShape {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getPreferredSize(_namedArguments? : {sliderTheme? : SliderThemeData,isEnabled? : boolean}) : any {
        let {sliderTheme,isEnabled} = Object.assign({
        }, _namedArguments );
        return Size.zero;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib9.PaintingContext,center : any,_namedArguments? : {parentBox? : any,sliderTheme? : SliderThemeData,enableAnimation? : lib10.Animation<double>,thumbCenter? : any,isEnabled? : boolean,textDirection? : any}) : any {
        let {parentBox,sliderTheme,enableAnimation,thumbCenter,isEnabled,textDirection} = Object.assign({
        }, _namedArguments );
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _EmptySliderTickMarkShape() {
    }
}

export namespace _EmptySliderComponentShape {
    export type Constructors = SliderComponentShape.Constructors | '_EmptySliderComponentShape';
    export type Interface = Omit<_EmptySliderComponentShape, Constructors>;
}
@DartClass
export class _EmptySliderComponentShape extends SliderComponentShape {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getPreferredSize(isEnabled : boolean,isDiscrete : boolean) : any {
        return Size.zero;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib9.PaintingContext,center : any,_namedArguments? : {activationAnimation? : lib10.Animation<double>,enableAnimation? : lib10.Animation<double>,isDiscrete? : boolean,labelPainter? : lib11.TextPainter,parentBox? : any,sliderTheme? : SliderThemeData,textDirection? : any,value? : double}) : any {
        let {activationAnimation,enableAnimation,isDiscrete,labelPainter,parentBox,sliderTheme,textDirection,value} = Object.assign({
        }, _namedArguments );
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _EmptySliderComponentShape() {
    }
}

export namespace RectangularSliderTrackShape {
    export type Constructors = SliderTrackShape.Constructors | 'RectangularSliderTrackShape';
    export type Interface = Omit<RectangularSliderTrackShape, Constructors>;
}
@DartClass
export class RectangularSliderTrackShape extends SliderTrackShape {
    constructor(_namedArguments? : {disabledThumbGapWidth? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RectangularSliderTrackShape(_namedArguments? : {disabledThumbGapWidth? : double}) {
        let {disabledThumbGapWidth} = Object.assign({
            "disabledThumbGapWidth" : 2.0}, _namedArguments );
        this.disabledThumbGapWidth = disabledThumbGapWidth;
    }
    disabledThumbGapWidth : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getPreferredRect(_namedArguments? : {parentBox? : any,offset? : any,sliderTheme? : SliderThemeData,isEnabled? : boolean,isDiscrete? : boolean}) : any {
        let {parentBox,offset,sliderTheme,isEnabled,isDiscrete} = Object.assign({
            "offset" : Offset.zero}, _namedArguments );
        let overlayWidth : double = sliderTheme.overlayShape.getPreferredSize(isEnabled,isDiscrete).width;
        let trackHeight : double = sliderTheme.trackHeight;
        /* TODO (AssertStatementImpl) : assert (overlayWidth >= 0); */;
        /* TODO (AssertStatementImpl) : assert (trackHeight >= 0); */;
        /* TODO (AssertStatementImpl) : assert (parentBox.size.width >= overlayWidth); */;
        /* TODO (AssertStatementImpl) : assert (parentBox.size.height >= trackHeight); */;
        let trackLeft : double = op(Op.PLUS,offset.dx,overlayWidth / 2);
        let trackTop : double = op(Op.PLUS,offset.dy,op(Op.DIVIDE,(op(Op.MINUS,parentBox.size.height,trackHeight)),2));
        let trackWidth : double = op(Op.MINUS,parentBox.size.width,overlayWidth);
        return Rect.fromLTWH(trackLeft,trackTop,trackWidth,trackHeight);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib9.PaintingContext,offset : any,_namedArguments? : {parentBox? : any,sliderTheme? : SliderThemeData,enableAnimation? : lib10.Animation<double>,textDirection? : any,thumbCenter? : any,isDiscrete? : boolean,isEnabled? : boolean}) : any {
        let {parentBox,sliderTheme,enableAnimation,textDirection,thumbCenter,isDiscrete,isEnabled} = Object.assign({
        }, _namedArguments );
        if (sliderTheme.trackHeight == 0) {
            return;
        }
        let activeTrackColorTween : lib12.ColorTween = lib12.ColorTween({
            begin : sliderTheme.disabledActiveTrackColor,end : sliderTheme.activeTrackColor});
        let inactiveTrackColorTween : lib12.ColorTween = lib12.ColorTween({
            begin : sliderTheme.disabledInactiveTrackColor,end : sliderTheme.inactiveTrackColor});
        let activePaint : any = ((_) : any =>  {
            {
                _.color = activeTrackColorTween.evaluate(enableAnimation);
                return _;
            }
        })(Paint());
        let inactivePaint : any = ((_) : any =>  {
            {
                _.color = inactiveTrackColorTween.evaluate(enableAnimation);
                return _;
            }
        })(Paint());
        let leftTrackPaint : any;
        let rightTrackPaint : any;
        switch (textDirection) {
            case TextDirection.ltr:
                leftTrackPaint = activePaint;
                rightTrackPaint = inactivePaint;
                break;
            case TextDirection.rtl:
                leftTrackPaint = inactivePaint;
                rightTrackPaint = activePaint;
                break;
        }
        let horizontalAdjustment : double = 0.0;
        if (!isEnabled) {
            let disabledThumbRadius : double = op(Op.DIVIDE,sliderTheme.thumbShape.getPreferredSize(false,isDiscrete).width,2.0);
            let gap : double = this.disabledThumbGapWidth * (1.0 - enableAnimation.value);
            horizontalAdjustment = disabledThumbRadius + gap;
        }
        let trackRect : any = this.getPreferredRect({
            parentBox : parentBox,offset : offset,sliderTheme : sliderTheme,isEnabled : isEnabled,isDiscrete : isDiscrete});
        let leftTrackSegment : any = Rect.fromLTRB(trackRect.left,trackRect.top,op(Op.MINUS,thumbCenter.dx,horizontalAdjustment),trackRect.bottom);
        context.canvas.drawRect(leftTrackSegment,leftTrackPaint);
        let rightTrackSegment : any = Rect.fromLTRB(op(Op.PLUS,thumbCenter.dx,horizontalAdjustment),trackRect.top,trackRect.right,trackRect.bottom);
        context.canvas.drawRect(rightTrackSegment,rightTrackPaint);
    }
}

export namespace RoundSliderTickMarkShape {
    export type Constructors = SliderTickMarkShape.Constructors | 'RoundSliderTickMarkShape';
    export type Interface = Omit<RoundSliderTickMarkShape, Constructors>;
}
@DartClass
export class RoundSliderTickMarkShape extends SliderTickMarkShape {
    constructor(_namedArguments? : {tickMarkRadius? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RoundSliderTickMarkShape(_namedArguments? : {tickMarkRadius? : double}) {
        let {tickMarkRadius} = Object.assign({
        }, _namedArguments );
        this.tickMarkRadius = tickMarkRadius;
    }
    tickMarkRadius : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getPreferredSize(_namedArguments? : {isEnabled? : boolean,sliderTheme? : SliderThemeData}) : any {
        let {isEnabled,sliderTheme} = Object.assign({
        }, _namedArguments );
        return Size.fromRadius((this.tickMarkRadius || sliderTheme.trackHeight / 2));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib9.PaintingContext,center : any,_namedArguments? : {parentBox? : any,sliderTheme? : SliderThemeData,enableAnimation? : lib10.Animation<double>,textDirection? : any,thumbCenter? : any,isEnabled? : boolean}) : any {
        let {parentBox,sliderTheme,enableAnimation,textDirection,thumbCenter,isEnabled} = Object.assign({
        }, _namedArguments );
        let begin : any;
        let end : any;
        switch (textDirection) {
            case TextDirection.ltr:
                let isTickMarkRightOfThumb : boolean = op(Op.GT,center.dx,thumbCenter.dx);
                begin = isTickMarkRightOfThumb ? sliderTheme.disabledInactiveTickMarkColor : sliderTheme.disabledActiveTickMarkColor;
                end = isTickMarkRightOfThumb ? sliderTheme.inactiveTickMarkColor : sliderTheme.activeTickMarkColor;
                break;
            case TextDirection.rtl:
                let isTickMarkLeftOfThumb : boolean = op(Op.LT,center.dx,thumbCenter.dx);
                begin = isTickMarkLeftOfThumb ? sliderTheme.disabledInactiveTickMarkColor : sliderTheme.disabledActiveTickMarkColor;
                end = isTickMarkLeftOfThumb ? sliderTheme.inactiveTickMarkColor : sliderTheme.activeTickMarkColor;
                break;
        }
        let paint : any = ((_) : any =>  {
            {
                _.color = lib12.ColorTween({
                    begin : begin,end : end}).evaluate(enableAnimation);
                return _;
            }
        })(Paint());
        let tickMarkRadius : double = op(Op.DIVIDE,this.getPreferredSize({
            isEnabled : isEnabled,sliderTheme : sliderTheme}).width,2);
        context.canvas.drawCircle(center,tickMarkRadius,paint);
    }
}

export namespace RoundSliderThumbShape {
    export type Constructors = SliderComponentShape.Constructors | 'RoundSliderThumbShape';
    export type Interface = Omit<RoundSliderThumbShape, Constructors>;
}
@DartClass
export class RoundSliderThumbShape extends SliderComponentShape {
    constructor(_namedArguments? : {enabledThumbRadius? : double,disabledThumbRadius? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RoundSliderThumbShape(_namedArguments? : {enabledThumbRadius? : double,disabledThumbRadius? : double}) {
        let {enabledThumbRadius,disabledThumbRadius} = Object.assign({
            "enabledThumbRadius" : 6.0}, _namedArguments );
        this.enabledThumbRadius = enabledThumbRadius;
        this.disabledThumbRadius = disabledThumbRadius;
    }
    enabledThumbRadius : double;

    disabledThumbRadius : double;

    get _disabledThumbRadius() : double {
        return (this.disabledThumbRadius || this.enabledThumbRadius * 2 / 3);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getPreferredSize(isEnabled : boolean,isDiscrete : boolean) : any {
        return Size.fromRadius(isEnabled ? this.enabledThumbRadius : this._disabledThumbRadius);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib9.PaintingContext,center : any,_namedArguments? : {activationAnimation? : lib10.Animation<double>,enableAnimation? : lib10.Animation<double>,isDiscrete? : boolean,labelPainter? : lib11.TextPainter,parentBox? : any,sliderTheme? : SliderThemeData,textDirection? : any,value? : double}) : any {
        let {activationAnimation,enableAnimation,isDiscrete,labelPainter,parentBox,sliderTheme,textDirection,value} = Object.assign({
        }, _namedArguments );
        let canvas : any = context.canvas;
        let radiusTween : lib12.Tween<double> = lib12.Tween({
            begin : this._disabledThumbRadius,end : this.enabledThumbRadius});
        let colorTween : lib12.ColorTween = lib12.ColorTween({
            begin : sliderTheme.disabledThumbColor,end : sliderTheme.thumbColor});
        canvas.drawCircle(center,radiusTween.evaluate(enableAnimation),((_) : any =>  {
            {
                _.color = colorTween.evaluate(enableAnimation);
                return _;
            }
        })(Paint()));
    }
}

export namespace RoundSliderOverlayShape {
    export type Constructors = SliderComponentShape.Constructors | 'RoundSliderOverlayShape';
    export type Interface = Omit<RoundSliderOverlayShape, Constructors>;
}
@DartClass
export class RoundSliderOverlayShape extends SliderComponentShape {
    constructor(_namedArguments? : {overlayRadius? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RoundSliderOverlayShape(_namedArguments? : {overlayRadius? : double}) {
        let {overlayRadius} = Object.assign({
            "overlayRadius" : 16.0}, _namedArguments );
        this.overlayRadius = overlayRadius;
    }
    overlayRadius : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getPreferredSize(isEnabled : boolean,isDiscrete : boolean) : any {
        return Size.fromRadius(this.overlayRadius);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib9.PaintingContext,center : any,_namedArguments? : {activationAnimation? : lib10.Animation<double>,enableAnimation? : lib10.Animation<double>,isDiscrete? : boolean,labelPainter? : lib11.TextPainter,parentBox? : any,sliderTheme? : SliderThemeData,textDirection? : any,value? : double}) : any {
        let {activationAnimation,enableAnimation,isDiscrete,labelPainter,parentBox,sliderTheme,textDirection,value} = Object.assign({
        }, _namedArguments );
        let canvas : any = context.canvas;
        let radiusTween : lib12.Tween<double> = lib12.Tween({
            begin : 0.0,end : this.overlayRadius});
        canvas.drawCircle(center,radiusTween.evaluate(activationAnimation),((_) : any =>  {
            {
                _.color = sliderTheme.overlayColor;
                return _;
            }
        })(Paint()));
    }
}

export namespace PaddleSliderValueIndicatorShape {
    export type Constructors = SliderComponentShape.Constructors | 'PaddleSliderValueIndicatorShape';
    export type Interface = Omit<PaddleSliderValueIndicatorShape, Constructors>;
}
@DartClass
export class PaddleSliderValueIndicatorShape extends SliderComponentShape {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PaddleSliderValueIndicatorShape() {
    }
    private static __$_topLobeRadius : double;
    static get _topLobeRadius() : double { 
        if (this.__$_topLobeRadius===undefined) {
            this.__$_topLobeRadius = 16.0;
        }
        return this.__$_topLobeRadius;
    }

    private static __$_labelTextDesignSize : double;
    static get _labelTextDesignSize() : double { 
        if (this.__$_labelTextDesignSize===undefined) {
            this.__$_labelTextDesignSize = 14.0;
        }
        return this.__$_labelTextDesignSize;
    }

    private static __$_bottomLobeRadius : double;
    static get _bottomLobeRadius() : double { 
        if (this.__$_bottomLobeRadius===undefined) {
            this.__$_bottomLobeRadius = 6.0;
        }
        return this.__$_bottomLobeRadius;
    }

    private static __$_bottomLobeStartAngle : double;
    static get _bottomLobeStartAngle() : double { 
        if (this.__$_bottomLobeStartAngle===undefined) {
            this.__$_bottomLobeStartAngle = -1.1 * math.pi / 4.0;
        }
        return this.__$_bottomLobeStartAngle;
    }

    private static __$_bottomLobeEndAngle : double;
    static get _bottomLobeEndAngle() : double { 
        if (this.__$_bottomLobeEndAngle===undefined) {
            this.__$_bottomLobeEndAngle = 1.1 * 5 * math.pi / 4.0;
        }
        return this.__$_bottomLobeEndAngle;
    }

    private static __$_labelPadding : double;
    static get _labelPadding() : double { 
        if (this.__$_labelPadding===undefined) {
            this.__$_labelPadding = 8.0;
        }
        return this.__$_labelPadding;
    }

    private static __$_distanceBetweenTopBottomCenters : double;
    static get _distanceBetweenTopBottomCenters() : double { 
        if (this.__$_distanceBetweenTopBottomCenters===undefined) {
            this.__$_distanceBetweenTopBottomCenters = 40.0;
        }
        return this.__$_distanceBetweenTopBottomCenters;
    }

    private static __$_topLobeCenter : any;
    static get _topLobeCenter() : any { 
        if (this.__$_topLobeCenter===undefined) {
            this.__$_topLobeCenter = Offset(0.0,-PaddleSliderValueIndicatorShape._distanceBetweenTopBottomCenters);
        }
        return this.__$_topLobeCenter;
    }

    private static __$_topNeckRadius : double;
    static get _topNeckRadius() : double { 
        if (this.__$_topNeckRadius===undefined) {
            this.__$_topNeckRadius = 14.0;
        }
        return this.__$_topNeckRadius;
    }

    private static __$_neckTriangleHypotenuse : double;
    static get _neckTriangleHypotenuse() : double { 
        if (this.__$_neckTriangleHypotenuse===undefined) {
            this.__$_neckTriangleHypotenuse = PaddleSliderValueIndicatorShape._topLobeRadius + PaddleSliderValueIndicatorShape._topNeckRadius;
        }
        return this.__$_neckTriangleHypotenuse;
    }

    private static __$_twoSeventyDegrees : double;
    static get _twoSeventyDegrees() : double { 
        if (this.__$_twoSeventyDegrees===undefined) {
            this.__$_twoSeventyDegrees = 3.0 * math.pi / 2.0;
        }
        return this.__$_twoSeventyDegrees;
    }

    private static __$_ninetyDegrees : double;
    static get _ninetyDegrees() : double { 
        if (this.__$_ninetyDegrees===undefined) {
            this.__$_ninetyDegrees = op(Op.DIVIDE,math.pi,2.0);
        }
        return this.__$_ninetyDegrees;
    }

    private static __$_thirtyDegrees : double;
    static get _thirtyDegrees() : double { 
        if (this.__$_thirtyDegrees===undefined) {
            this.__$_thirtyDegrees = op(Op.DIVIDE,math.pi,6.0);
        }
        return this.__$_thirtyDegrees;
    }

    private static __$_preferredSize : any;
    static get _preferredSize() : any { 
        if (this.__$_preferredSize===undefined) {
            this.__$_preferredSize = Size.fromHeight(PaddleSliderValueIndicatorShape._distanceBetweenTopBottomCenters + PaddleSliderValueIndicatorShape._topLobeRadius + PaddleSliderValueIndicatorShape._bottomLobeRadius);
        }
        return this.__$_preferredSize;
    }

    private static __$_debuggingLabelLocation : boolean;
    static get _debuggingLabelLocation() : boolean { 
        if (this.__$_debuggingLabelLocation===undefined) {
            this.__$_debuggingLabelLocation = false;
        }
        return this.__$_debuggingLabelLocation;
    }

    private static __$_bottomLobePath : any;
    static get _bottomLobePath() : any { 
        return this.__$_bottomLobePath;
    }
    static set _bottomLobePath(__$value : any)  { 
        this.__$_bottomLobePath = __$value;
    }

    private static __$_bottomLobeEnd : any;
    static get _bottomLobeEnd() : any { 
        return this.__$_bottomLobeEnd;
    }
    static set _bottomLobeEnd(__$value : any)  { 
        this.__$_bottomLobeEnd = __$value;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getPreferredSize(isEnabled : boolean,isDiscrete : boolean) : any {
        return PaddleSliderValueIndicatorShape._preferredSize;
    }
    static _addArc(path : any,center : any,radius : double,startAngle : double,endAngle : double) : any {
        let arcRect : any = Rect.fromCircle({
            center : center,radius : radius});
        path.arcTo(arcRect,startAngle,endAngle - startAngle,false);
    }
    static _generateBottomLobe() : any {
        let bottomNeckRadius : double = 4.5;
        let bottomNeckStartAngle : double = PaddleSliderValueIndicatorShape._bottomLobeEndAngle - math.pi;
        let bottomNeckEndAngle : double = 0.0;
        let path : any = Path();
        let bottomKnobStart : any = Offset(PaddleSliderValueIndicatorShape._bottomLobeRadius * math.cos(PaddleSliderValueIndicatorShape._bottomLobeStartAngle),PaddleSliderValueIndicatorShape._bottomLobeRadius * math.sin(PaddleSliderValueIndicatorShape._bottomLobeStartAngle));
        let bottomNeckRightCenter : any = op(Op.PLUS,bottomKnobStart,Offset(bottomNeckRadius * math.cos(bottomNeckStartAngle),-bottomNeckRadius * math.sin(bottomNeckStartAngle)));
        let bottomNeckLeftCenter : any = Offset(op(Op.NEG,bottomNeckRightCenter.dx),bottomNeckRightCenter.dy);
        let bottomNeckStartRight : any = Offset(op(Op.MINUS,bottomNeckRightCenter.dx,bottomNeckRadius),bottomNeckRightCenter.dy);
        path.moveTo(bottomNeckStartRight.dx,bottomNeckStartRight.dy);
        PaddleSliderValueIndicatorShape._addArc(path,bottomNeckRightCenter,bottomNeckRadius,op(Op.MINUS,math.pi,bottomNeckEndAngle),op(Op.MINUS,math.pi,bottomNeckStartAngle));
        PaddleSliderValueIndicatorShape._addArc(path,Offset.zero,PaddleSliderValueIndicatorShape._bottomLobeRadius,PaddleSliderValueIndicatorShape._bottomLobeStartAngle,PaddleSliderValueIndicatorShape._bottomLobeEndAngle);
        PaddleSliderValueIndicatorShape._addArc(path,bottomNeckLeftCenter,bottomNeckRadius,bottomNeckStartAngle,bottomNeckEndAngle);
        PaddleSliderValueIndicatorShape._bottomLobeEnd = Offset(op(Op.NEG,bottomNeckStartRight.dx),bottomNeckStartRight.dy);
        PaddleSliderValueIndicatorShape._bottomLobePath = path;
    }
    _addBottomLobe(path : any) : any {
        if (op(Op.EQUALS,PaddleSliderValueIndicatorShape._bottomLobePath,null) || op(Op.EQUALS,PaddleSliderValueIndicatorShape._bottomLobeEnd,null)) {
            PaddleSliderValueIndicatorShape._generateBottomLobe();
        }
        path.extendWithPath(PaddleSliderValueIndicatorShape._bottomLobePath,Offset.zero);
        return PaddleSliderValueIndicatorShape._bottomLobeEnd;
    }
    _getIdealOffset(parentBox : any,halfWidthNeeded : double,scale : double,center : any) : double {
        let edgeMargin : double = 4.0;
        let topLobeRect : any = Rect.fromLTWH(-PaddleSliderValueIndicatorShape._topLobeRadius - halfWidthNeeded,-PaddleSliderValueIndicatorShape._topLobeRadius - PaddleSliderValueIndicatorShape._distanceBetweenTopBottomCenters,2.0 * (PaddleSliderValueIndicatorShape._topLobeRadius + halfWidthNeeded),2.0 * PaddleSliderValueIndicatorShape._topLobeRadius);
        let topLeft : any = op(Op.PLUS,(op(Op.TIMES,topLobeRect.topLeft,scale)),center);
        let bottomRight : any = op(Op.PLUS,(op(Op.TIMES,topLobeRect.bottomRight,scale)),center);
        let shift : double = 0.0;
        if (op(Op.LT,topLeft.dx,edgeMargin)) {
            shift = edgeMargin - topLeft.dx;
        }
        if (op(Op.GT,bottomRight.dx,op(Op.MINUS,parentBox.size.width,edgeMargin))) {
            shift = op(Op.MINUS,op(Op.MINUS,parentBox.size.width,bottomRight.dx),edgeMargin);
        }
        shift = scale == 0.0 ? 0.0 : shift / scale;
        return shift;
    }
    _drawValueIndicator(parentBox : any,canvas : any,center : any,paint : any,scale : double,labelPainter : lib11.TextPainter) : any {
        canvas.save();
        canvas.translate(center.dx,center.dy);
        let textScaleFactor : double = labelPainter.height / PaddleSliderValueIndicatorShape._labelTextDesignSize;
        let overallScale : double = scale * textScaleFactor;
        canvas.scale(overallScale,overallScale);
        let inverseTextScale : double = textScaleFactor != 0 ? 1.0 / textScaleFactor : 0.0;
        let labelHalfWidth : double = labelPainter.width / 2.0;
        let halfWidthNeeded : double = math.max(0.0,inverseTextScale * labelHalfWidth - (PaddleSliderValueIndicatorShape._topLobeRadius - PaddleSliderValueIndicatorShape._labelPadding));
        let shift : double = this._getIdealOffset(parentBox,halfWidthNeeded,overallScale,center);
        let leftWidthNeeded : double;
        let rightWidthNeeded : double;
        if (shift < 0.0) {
            shift = math.max(shift,-halfWidthNeeded);
        }else {
            shift = math.min(shift,halfWidthNeeded);
        }
        rightWidthNeeded = halfWidthNeeded + shift;
        leftWidthNeeded = halfWidthNeeded - shift;
        let path : any = Path();
        let bottomLobeEnd : any = this._addBottomLobe(path);
        let neckTriangleBase : double = PaddleSliderValueIndicatorShape._topNeckRadius - bottomLobeEnd.dx;
        let leftAmount : double = math.max(0.0,math.min(1.0,leftWidthNeeded / neckTriangleBase));
        let rightAmount : double = math.max(0.0,math.min(1.0,rightWidthNeeded / neckTriangleBase));
        let leftTheta : double = (1.0 - leftAmount) * PaddleSliderValueIndicatorShape._thirtyDegrees;
        let rightTheta : double = (1.0 - rightAmount) * PaddleSliderValueIndicatorShape._thirtyDegrees;
        let neckLeftCenter : any = Offset(-neckTriangleBase,op(Op.PLUS,PaddleSliderValueIndicatorShape._topLobeCenter.dy,math.cos(leftTheta) * PaddleSliderValueIndicatorShape._neckTriangleHypotenuse));
        let neckRightCenter : any = Offset(neckTriangleBase,op(Op.PLUS,PaddleSliderValueIndicatorShape._topLobeCenter.dy,math.cos(rightTheta) * PaddleSliderValueIndicatorShape._neckTriangleHypotenuse));
        let leftNeckArcAngle : double = PaddleSliderValueIndicatorShape._ninetyDegrees - leftTheta;
        let rightNeckArcAngle : double = op(Op.MINUS,op(Op.PLUS,math.pi,PaddleSliderValueIndicatorShape._ninetyDegrees),rightTheta);
        let neckStretchBaseline : double = op(Op.MINUS,bottomLobeEnd.dy,math.max(neckLeftCenter.dy,neckRightCenter.dy));
        let t : double = math.pow(inverseTextScale,3.0);
        let stretch : double = new core.DartDouble((neckStretchBaseline * t)).clamp(0.0,10.0 * neckStretchBaseline);
        let neckStretch : any = Offset(0.0,neckStretchBaseline - stretch);
        /* TODO (AssertStatementImpl) : assert (!_debuggingLabelLocation || () {final Offset leftCenter = _topLobeCenter - Offset(leftWidthNeeded, 0.0) + neckStretch; final Offset rightCenter = _topLobeCenter + Offset(rightWidthNeeded, 0.0) + neckStretch; final Rect valueRect = Rect.fromLTRB(leftCenter.dx - _topLobeRadius, leftCenter.dy - _topLobeRadius, rightCenter.dx + _topLobeRadius, rightCenter.dy + _topLobeRadius); final Paint outlinePaint = Paint()..color = const Color(0xffff0000)..style = PaintingStyle.stroke..strokeWidth = 1.0; canvas.drawRect(valueRect, outlinePaint); return true;}()); */;
        PaddleSliderValueIndicatorShape._addArc(path,op(Op.PLUS,neckLeftCenter,neckStretch),PaddleSliderValueIndicatorShape._topNeckRadius,0.0,-leftNeckArcAngle);
        PaddleSliderValueIndicatorShape._addArc(path,op(Op.PLUS,op(Op.MINUS,PaddleSliderValueIndicatorShape._topLobeCenter,Offset(leftWidthNeeded,0.0)),neckStretch),PaddleSliderValueIndicatorShape._topLobeRadius,PaddleSliderValueIndicatorShape._ninetyDegrees + leftTheta,PaddleSliderValueIndicatorShape._twoSeventyDegrees);
        PaddleSliderValueIndicatorShape._addArc(path,op(Op.PLUS,op(Op.PLUS,PaddleSliderValueIndicatorShape._topLobeCenter,Offset(rightWidthNeeded,0.0)),neckStretch),PaddleSliderValueIndicatorShape._topLobeRadius,PaddleSliderValueIndicatorShape._twoSeventyDegrees,PaddleSliderValueIndicatorShape._twoSeventyDegrees + math.pi - rightTheta);
        PaddleSliderValueIndicatorShape._addArc(path,op(Op.PLUS,neckRightCenter,neckStretch),PaddleSliderValueIndicatorShape._topNeckRadius,rightNeckArcAngle,math.pi);
        canvas.drawPath(path,paint);
        canvas.save();
        canvas.translate(shift,-PaddleSliderValueIndicatorShape._distanceBetweenTopBottomCenters + neckStretch.dy);
        canvas.scale(inverseTextScale,inverseTextScale);
        labelPainter.paint(canvas,op(Op.MINUS,Offset.zero,Offset(labelHalfWidth,labelPainter.height / 2.0)));
        canvas.restore();
        canvas.restore();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib9.PaintingContext,center : any,_namedArguments? : {activationAnimation? : lib10.Animation<double>,enableAnimation? : lib10.Animation<double>,isDiscrete? : boolean,labelPainter? : lib11.TextPainter,parentBox? : any,sliderTheme? : SliderThemeData,textDirection? : any,value? : double}) : any {
        let {activationAnimation,enableAnimation,isDiscrete,labelPainter,parentBox,sliderTheme,textDirection,value} = Object.assign({
        }, _namedArguments );
        let enableColor : lib12.ColorTween = lib12.ColorTween({
            begin : sliderTheme.disabledThumbColor,end : sliderTheme.valueIndicatorColor});
        this._drawValueIndicator(parentBox,context.canvas,center,((_) : any =>  {
            {
                _.color = enableColor.evaluate(enableAnimation);
                return _;
            }
        })(Paint()),activationAnimation.value,labelPainter);
    }
}

export class properties {
}
