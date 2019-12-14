/** Library asset:datahedgehog_monitor/lib/lib/widgets/icon_theme_data.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export namespace IconThemeData {
    export type Constructors = lib3.Diagnosticable.Constructors | 'IconThemeData' | 'fallback';
    export type Interface = Omit<IconThemeData, Constructors>;
}
@DartClass
export class IconThemeData extends lib3.Diagnosticable {
    constructor(_namedArguments? : {color? : any,opacity? : double,size? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IconThemeData(_namedArguments? : {color? : any,opacity? : double,size? : double}) {
        let {color,opacity,size} = Object.assign({
        }, _namedArguments );
        this._opacity = opacity;
        this.color = color;
        this.size = size;
    }
    @namedConstructor
    fallback() {
        this.color = new bare.createInstance(any,null,4278190080);
        this._opacity = 1.0;
        this.size = 24.0;
    }
    static fallback : new() => IconThemeData;

    copyWith(_namedArguments? : {color? : any,opacity? : double,size? : double}) : IconThemeData {
        let {color,opacity,size} = Object.assign({
        }, _namedArguments );
        return IconThemeData({
            color : (color || this.color),opacity : (opacity || this.opacity),size : (size || this.size)});
    }
    merge(other : IconThemeData) : IconThemeData {
        if (op(Op.EQUALS,other,null)) return this;
        return this.copyWith({
            color : other.color,opacity : other.opacity,size : other.size});
    }
    get isConcrete() : boolean {
        return this.color != null && this.opacity != null && this.size != null;
    }
    color : any;

    get opacity() : double {
        return ((_900_)=>(!!_900_)?new core.DartDouble(_900_).clamp(0.0,1.0):null)(this._opacity);
    }
    _opacity : double;

    size : double;

    static lerp(a : IconThemeData,b : IconThemeData,t : double) : IconThemeData {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        return IconThemeData({
            color : Color.lerp(((t)=>(!!t)?t.color:null)(a),((t)=>(!!t)?t.color:null)(b),t),opacity : ui.lerpDouble(((t)=>(!!t)?t.opacity:null)(a),((t)=>(!!t)?t.opacity:null)(b),t),size : ui.lerpDouble(((t)=>(!!t)?t.size:null)(a),((t)=>(!!t)?t.size:null)(b),t)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : IconThemeData = other;
        return op(Op.EQUALS,this.color,typedOther.color) && this.opacity == typedOther.opacity && this.size == typedOther.size;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.color,this.opacity,this.size);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib3.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib3.DiagnosticsProperty('color',this.color,{
            defaultValue : null}));
        properties.add(lib3.DoubleProperty('opacity',this.opacity,{
            defaultValue : null}));
        properties.add(lib3.DoubleProperty('size',this.size,{
            defaultValue : null}));
    }
}

export class properties {
}
