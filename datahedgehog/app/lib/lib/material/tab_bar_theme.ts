/** Library asset:datahedgehog_monitor/lib/lib/material/tab_bar_theme.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/decoration";
import * as lib5 from "./tabs";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib8 from "./theme";

export namespace TabBarTheme {
    export type Constructors = lib3.Diagnosticable.Constructors | 'TabBarTheme';
    export type Interface = Omit<TabBarTheme, Constructors>;
}
@DartClass
export class TabBarTheme extends lib3.Diagnosticable {
    constructor(_namedArguments? : {indicator? : lib4.Decoration,indicatorSize? : lib5.TabBarIndicatorSize,labelColor? : any,labelStyle? : lib6.TextStyle,unselectedLabelColor? : any,unselectedLabelStyle? : lib6.TextStyle}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TabBarTheme(_namedArguments? : {indicator? : lib4.Decoration,indicatorSize? : lib5.TabBarIndicatorSize,labelColor? : any,labelStyle? : lib6.TextStyle,unselectedLabelColor? : any,unselectedLabelStyle? : lib6.TextStyle}) {
        let {indicator,indicatorSize,labelColor,labelStyle,unselectedLabelColor,unselectedLabelStyle} = Object.assign({
        }, _namedArguments );
        this.indicator = indicator;
        this.indicatorSize = indicatorSize;
        this.labelColor = labelColor;
        this.labelStyle = labelStyle;
        this.unselectedLabelColor = unselectedLabelColor;
        this.unselectedLabelStyle = unselectedLabelStyle;
    }
    indicator : lib4.Decoration;

    indicatorSize : lib5.TabBarIndicatorSize;

    labelColor : any;

    labelStyle : lib6.TextStyle;

    unselectedLabelColor : any;

    unselectedLabelStyle : lib6.TextStyle;

    copyWith(_namedArguments? : {indicator? : lib4.Decoration,indicatorSize? : lib5.TabBarIndicatorSize,labelColor? : any,labelStyle? : lib6.TextStyle,unselectedLabelColor? : any,unselectedLabelStyle? : lib6.TextStyle}) : TabBarTheme {
        let {indicator,indicatorSize,labelColor,labelStyle,unselectedLabelColor,unselectedLabelStyle} = Object.assign({
        }, _namedArguments );
        return TabBarTheme({
            indicator : (indicator || this.indicator),indicatorSize : (indicatorSize || this.indicatorSize),labelColor : (labelColor || this.labelColor),labelStyle : (labelStyle || this.labelStyle),unselectedLabelColor : (unselectedLabelColor || this.unselectedLabelColor),unselectedLabelStyle : (unselectedLabelStyle || this.unselectedLabelStyle)});
    }
    static of(context : lib7.BuildContext) : TabBarTheme {
        return lib8.Theme.of(context).tabBarTheme;
    }
    static lerp(a : TabBarTheme,b : TabBarTheme,t : double) : TabBarTheme {
        /* TODO (AssertStatementImpl) : assert (a != null); */;
        /* TODO (AssertStatementImpl) : assert (b != null); */;
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        return TabBarTheme({
            indicator : lib4.Decoration.lerp(a.indicator,b.indicator,t),indicatorSize : t < 0.5 ? a.indicatorSize : b.indicatorSize,labelColor : Color.lerp(a.labelColor,b.labelColor,t),labelStyle : lib6.TextStyle.lerp(a.labelStyle,b.labelStyle,t),unselectedLabelColor : Color.lerp(a.unselectedLabelColor,b.unselectedLabelColor,t),unselectedLabelStyle : lib6.TextStyle.lerp(a.unselectedLabelStyle,b.unselectedLabelStyle,t)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.indicator,this.indicatorSize,this.labelColor,this.labelStyle,this.unselectedLabelColor,this.unselectedLabelStyle);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : TabBarTheme = other;
        return op(Op.EQUALS,typedOther.indicator,this.indicator) && op(Op.EQUALS,typedOther.indicatorSize,this.indicatorSize) && op(Op.EQUALS,typedOther.labelColor,this.labelColor) && op(Op.EQUALS,typedOther.labelStyle,this.labelStyle) && op(Op.EQUALS,typedOther.unselectedLabelColor,this.unselectedLabelColor) && op(Op.EQUALS,typedOther.unselectedLabelStyle,this.unselectedLabelStyle);
    }
}

export class properties {
}
