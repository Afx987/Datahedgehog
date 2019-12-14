/** Library asset:datahedgehog_monitor/lib/lib/material/dialog_theme.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib7 from "./theme";

export namespace DialogTheme {
    export type Constructors = lib3.Diagnosticable.Constructors | 'DialogTheme';
    export type Interface = Omit<DialogTheme, Constructors>;
}
@DartClass
export class DialogTheme extends lib3.Diagnosticable {
    constructor(_namedArguments? : {backgroundColor? : any,elevation? : double,shape? : lib4.ShapeBorder,titleTextStyle? : lib5.TextStyle,contentTextStyle? : lib5.TextStyle}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DialogTheme(_namedArguments? : {backgroundColor? : any,elevation? : double,shape? : lib4.ShapeBorder,titleTextStyle? : lib5.TextStyle,contentTextStyle? : lib5.TextStyle}) {
        let {backgroundColor,elevation,shape,titleTextStyle,contentTextStyle} = Object.assign({
        }, _namedArguments );
        this.backgroundColor = backgroundColor;
        this.elevation = elevation;
        this.shape = shape;
        this.titleTextStyle = titleTextStyle;
        this.contentTextStyle = contentTextStyle;
    }
    backgroundColor : any;

    elevation : double;

    shape : lib4.ShapeBorder;

    titleTextStyle : lib5.TextStyle;

    contentTextStyle : lib5.TextStyle;

    copyWith(_namedArguments? : {backgroundColor? : any,elevation? : double,shape? : lib4.ShapeBorder,titleTextStyle? : lib5.TextStyle,contentTextStyle? : lib5.TextStyle}) : DialogTheme {
        let {backgroundColor,elevation,shape,titleTextStyle,contentTextStyle} = Object.assign({
        }, _namedArguments );
        return DialogTheme({
            backgroundColor : (backgroundColor || this.backgroundColor),elevation : (elevation || this.elevation),shape : (shape || this.shape),titleTextStyle : (titleTextStyle || this.titleTextStyle),contentTextStyle : (contentTextStyle || this.contentTextStyle)});
    }
    static of(context : lib6.BuildContext) : DialogTheme {
        return lib7.Theme.of(context).dialogTheme;
    }
    static lerp(a : DialogTheme,b : DialogTheme,t : double) : DialogTheme {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        return DialogTheme({
            backgroundColor : Color.lerp(((t)=>(!!t)?t.backgroundColor:null)(a),((t)=>(!!t)?t.backgroundColor:null)(b),t),elevation : lerpDouble(((t)=>(!!t)?t.elevation:null)(a),((t)=>(!!t)?t.elevation:null)(b),t),shape : lib4.ShapeBorder.lerp(((t)=>(!!t)?t.shape:null)(a),((t)=>(!!t)?t.shape:null)(b),t),titleTextStyle : lib5.TextStyle.lerp(((t)=>(!!t)?t.titleTextStyle:null)(a),((t)=>(!!t)?t.titleTextStyle:null)(b),t),contentTextStyle : lib5.TextStyle.lerp(((t)=>(!!t)?t.contentTextStyle:null)(a),((t)=>(!!t)?t.contentTextStyle:null)(b),t)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.shape.hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : DialogTheme = other;
        return op(Op.EQUALS,typedOther.backgroundColor,this.backgroundColor) && typedOther.elevation == this.elevation && op(Op.EQUALS,typedOther.shape,this.shape) && op(Op.EQUALS,typedOther.titleTextStyle,this.titleTextStyle) && op(Op.EQUALS,typedOther.contentTextStyle,this.contentTextStyle);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib3.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib3.DiagnosticsProperty('backgroundColor',this.backgroundColor));
        properties.add(lib3.DiagnosticsProperty('shape',this.shape,{
            defaultValue : null}));
        properties.add(lib3.DiagnosticsProperty('elevation',this.elevation));
        properties.add(lib3.DiagnosticsProperty('titleTextStyle',this.titleTextStyle,{
            defaultValue : null}));
        properties.add(lib3.DiagnosticsProperty('contentTextStyle',this.contentTextStyle,{
            defaultValue : null}));
    }
}

export class properties {
}
