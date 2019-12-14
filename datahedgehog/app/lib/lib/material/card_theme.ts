/** Library asset:datahedgehog_monitor/lib/lib/material/card_theme.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib7 from "./theme";

export namespace CardTheme {
    export type Constructors = lib3.Diagnosticable.Constructors | 'CardTheme';
    export type Interface = Omit<CardTheme, Constructors>;
}
@DartClass
export class CardTheme extends lib3.Diagnosticable {
    constructor(_namedArguments? : {clipBehavior? : any,color? : any,elevation? : double,margin? : lib4.EdgeInsetsGeometry,shape? : lib5.ShapeBorder}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CardTheme(_namedArguments? : {clipBehavior? : any,color? : any,elevation? : double,margin? : lib4.EdgeInsetsGeometry,shape? : lib5.ShapeBorder}) {
        let {clipBehavior,color,elevation,margin,shape} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.clipBehavior = clipBehavior;
        this.color = color;
        this.elevation = elevation;
        this.margin = margin;
        this.shape = shape;
    }
     : any;

     : any;

    clipBehavior : any;

    color : any;

    elevation : double;

    margin : lib4.EdgeInsetsGeometry;

    shape : lib5.ShapeBorder;

    copyWith(_namedArguments? : {clipBehavior? : any,color? : any,elevation? : double,margin? : lib4.EdgeInsetsGeometry,shape? : lib5.ShapeBorder}) : CardTheme {
        let {clipBehavior,color,elevation,margin,shape} = Object.assign({
        }, _namedArguments );
        return CardTheme({
            clipBehavior : (clipBehavior || this.clipBehavior),color : (color || this.color),elevation : (elevation || this.elevation),margin : (margin || this.margin),shape : (shape || this.shape)});
    }
    static of(context : lib6.BuildContext) : CardTheme {
        return lib7.Theme.of(context).cardTheme;
    }
    static lerp(a : CardTheme,b : CardTheme,t : double) : CardTheme {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        return CardTheme({
            clipBehavior : t < 0.5 ? ((t)=>(!!t)?t.clipBehavior:null)(a) : ((t)=>(!!t)?t.clipBehavior:null)(b),color : Color.lerp(((t)=>(!!t)?t.color:null)(a),((t)=>(!!t)?t.color:null)(b),t),elevation : lerpDouble(((t)=>(!!t)?t.elevation:null)(a),((t)=>(!!t)?t.elevation:null)(b),t),margin : lib4.EdgeInsetsGeometry.lerp(((t)=>(!!t)?t.margin:null)(a),((t)=>(!!t)?t.margin:null)(b),t),shape : lib5.ShapeBorder.lerp(((t)=>(!!t)?t.shape:null)(a),((t)=>(!!t)?t.shape:null)(b),t)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.clipBehavior,this.color,this.elevation,this.margin,this.shape);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : CardTheme = other;
        return op(Op.EQUALS,typedOther.clipBehavior,this.clipBehavior) && op(Op.EQUALS,typedOther.color,this.color) && typedOther.elevation == this.elevation && op(Op.EQUALS,typedOther.margin,this.margin) && op(Op.EQUALS,typedOther.shape,this.shape);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib3.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib3.DiagnosticsProperty('clipBehavior',this.clipBehavior,{
            defaultValue : null}));
        properties.add(lib3.DiagnosticsProperty('color',this.color,{
            defaultValue : null}));
        properties.add(lib3.DiagnosticsProperty('elevation',this.elevation,{
            defaultValue : null}));
        properties.add(lib3.DiagnosticsProperty('margin',this.margin,{
            defaultValue : null}));
        properties.add(lib3.DiagnosticsProperty('shape',this.shape,{
            defaultValue : null}));
    }
}

export class properties {
}
