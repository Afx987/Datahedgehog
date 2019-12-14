/** Library asset:datahedgehog_monitor/lib/lib/material/bottom_app_bar_theme.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/notched_shapes";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib6 from "./theme";

export namespace BottomAppBarTheme {
    export type Constructors = lib3.Diagnosticable.Constructors | 'BottomAppBarTheme';
    export type Interface = Omit<BottomAppBarTheme, Constructors>;
}
@DartClass
export class BottomAppBarTheme extends lib3.Diagnosticable {
    constructor(_namedArguments? : {color? : any,elevation? : double,shape? : lib4.NotchedShape}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BottomAppBarTheme(_namedArguments? : {color? : any,elevation? : double,shape? : lib4.NotchedShape}) {
        let {color,elevation,shape} = Object.assign({
        }, _namedArguments );
        this.color = color;
        this.elevation = elevation;
        this.shape = shape;
    }
    color : any;

    elevation : double;

    shape : lib4.NotchedShape;

    copyWith(_namedArguments? : {color? : any,elevation? : double,shape? : lib4.NotchedShape}) : BottomAppBarTheme {
        let {color,elevation,shape} = Object.assign({
        }, _namedArguments );
        return BottomAppBarTheme({
            color : (color || this.color),elevation : (elevation || this.elevation),shape : (shape || this.shape)});
    }
    static of(context : lib5.BuildContext) : BottomAppBarTheme {
        return lib6.Theme.of(context).bottomAppBarTheme;
    }
    static lerp(a : BottomAppBarTheme,b : BottomAppBarTheme,t : double) : BottomAppBarTheme {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        return BottomAppBarTheme({
            color : Color.lerp(((t)=>(!!t)?t.color:null)(a),((t)=>(!!t)?t.color:null)(b),t),elevation : lerpDouble(((t)=>(!!t)?t.elevation:null)(a),((t)=>(!!t)?t.elevation:null)(b),t),shape : t < 0.5 ? ((t)=>(!!t)?t.shape:null)(a) : ((t)=>(!!t)?t.shape:null)(b)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.color,this.elevation,this.shape);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : BottomAppBarTheme = other;
        return op(Op.EQUALS,typedOther.color,this.color) && typedOther.elevation == this.elevation && op(Op.EQUALS,typedOther.shape,this.shape);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib3.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib3.DiagnosticsProperty('color',this.color,{
            defaultValue : null}));
        properties.add(lib3.DiagnosticsProperty('elevation',this.elevation,{
            defaultValue : null}));
        properties.add(lib3.DiagnosticsProperty('shape',this.shape,{
            defaultValue : null}));
    }
}

export class properties {
}
