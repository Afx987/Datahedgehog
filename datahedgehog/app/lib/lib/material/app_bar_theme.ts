/** Library asset:datahedgehog_monitor/lib/lib/material/app_bar_theme.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme_data";
import * as lib5 from "./text_theme";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib7 from "./theme";

export namespace AppBarTheme {
    export type Constructors = lib3.Diagnosticable.Constructors | 'AppBarTheme';
    export type Interface = Omit<AppBarTheme, Constructors>;
}
@DartClass
export class AppBarTheme extends lib3.Diagnosticable {
    constructor(_namedArguments? : {brightness? : any,color? : any,elevation? : double,iconTheme? : lib4.IconThemeData,textTheme? : lib5.TextTheme}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AppBarTheme(_namedArguments? : {brightness? : any,color? : any,elevation? : double,iconTheme? : lib4.IconThemeData,textTheme? : lib5.TextTheme}) {
        let {brightness,color,elevation,iconTheme,textTheme} = Object.assign({
        }, _namedArguments );
        this.brightness = brightness;
        this.color = color;
        this.elevation = elevation;
        this.iconTheme = iconTheme;
        this.textTheme = textTheme;
    }
    brightness : any;

    color : any;

    elevation : double;

    iconTheme : lib4.IconThemeData;

    textTheme : lib5.TextTheme;

    copyWith(_namedArguments? : {brightness? : any,color? : any,elevation? : double,iconTheme? : lib4.IconThemeData,textTheme? : lib5.TextTheme}) : AppBarTheme {
        let {brightness,color,elevation,iconTheme,textTheme} = Object.assign({
        }, _namedArguments );
        return AppBarTheme({
            brightness : (brightness || this.brightness),color : (color || this.color),elevation : (elevation || this.elevation),iconTheme : (iconTheme || this.iconTheme),textTheme : (textTheme || this.textTheme)});
    }
    static of(context : lib6.BuildContext) : AppBarTheme {
        return lib7.Theme.of(context).appBarTheme;
    }
    static lerp(a : AppBarTheme,b : AppBarTheme,t : double) : AppBarTheme {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        return AppBarTheme({
            brightness : t < 0.5 ? ((t)=>(!!t)?t.brightness:null)(a) : ((t)=>(!!t)?t.brightness:null)(b),color : Color.lerp(((t)=>(!!t)?t.color:null)(a),((t)=>(!!t)?t.color:null)(b),t),elevation : lerpDouble(((t)=>(!!t)?t.elevation:null)(a),((t)=>(!!t)?t.elevation:null)(b),t),iconTheme : lib4.IconThemeData.lerp(((t)=>(!!t)?t.iconTheme:null)(a),((t)=>(!!t)?t.iconTheme:null)(b),t),textTheme : lib5.TextTheme.lerp(((t)=>(!!t)?t.textTheme:null)(a),((t)=>(!!t)?t.textTheme:null)(b),t)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.brightness,this.color,this.elevation,this.iconTheme,this.textTheme);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : AppBarTheme = other;
        return op(Op.EQUALS,typedOther.brightness,this.brightness) && op(Op.EQUALS,typedOther.color,this.color) && typedOther.elevation == this.elevation && op(Op.EQUALS,typedOther.iconTheme,this.iconTheme) && op(Op.EQUALS,typedOther.textTheme,this.textTheme);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib3.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib3.DiagnosticsProperty('brightness',this.brightness,{
            defaultValue : null}));
        properties.add(lib3.DiagnosticsProperty('color',this.color,{
            defaultValue : null}));
        properties.add(lib3.DiagnosticsProperty('elevation',this.elevation,{
            defaultValue : null}));
        properties.add(lib3.DiagnosticsProperty('iconTheme',this.iconTheme,{
            defaultValue : null}));
        properties.add(lib3.DiagnosticsProperty('textTheme',this.textTheme,{
            defaultValue : null}));
    }
}

export class properties {
}
