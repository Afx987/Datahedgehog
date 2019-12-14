/** Library asset:datahedgehog_monitor/lib/lib/painting/box_shadow.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";

export namespace BoxShadow {
    export type Constructors = 'BoxShadow';
    export type Interface = Omit<BoxShadow, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class BoxShadow extends any {
    constructor(_namedArguments? : {color? : any,offset? : any,blurRadius? : double,spreadRadius? : double}) {
    }
    @defaultConstructor
    BoxShadow(_namedArguments? : {color? : any,offset? : any,blurRadius? : double,spreadRadius? : double}) {
        let {color,offset,blurRadius,spreadRadius} = Object.assign({
            "color" : new bare.createInstance(any,null,4278190080),
            "offset" : Offset.zero,
            "blurRadius" : 0.0,
            "spreadRadius" : 0.0}, _namedArguments );
        super.DartObject({
            color : color,offset : offset,blurRadius : blurRadius});
        this.spreadRadius = spreadRadius;
    }
    spreadRadius : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toPaint() : any {
        let result : any = ((_) : any =>  {
            {
                _.color = color;
                _.maskFilter = MaskFilter.blur(BlurStyle.normal,blurSigma);
                return _;
            }
        })(Paint());
        /* TODO (AssertStatementImpl) : assert (() {if (debugDisableShadows) result.maskFilter = null; return true;}()); */;
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scale(factor : double) : BoxShadow {
        return BoxShadow({
            color : color,offset : op(Op.TIMES,offset,factor),blurRadius : op(Op.TIMES,blurRadius,factor),spreadRadius : this.spreadRadius * factor});
    }
    static lerp(a : BoxShadow,b : BoxShadow,t : double) : BoxShadow {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        if (op(Op.EQUALS,a,null)) return b.scale(t);
        if (op(Op.EQUALS,b,null)) return a.scale(1.0 - t);
        return BoxShadow({
            color : Color.lerp(a.color,b.color,t),offset : Offset.lerp(a.offset,b.offset,t),blurRadius : ui.lerpDouble(a.blurRadius,b.blurRadius,t),spreadRadius : ui.lerpDouble(a.spreadRadius,b.spreadRadius,t)});
    }
    static lerpList(a : core.DartList<BoxShadow>,b : core.DartList<BoxShadow>,t : double) : core.DartList<BoxShadow> {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (a == null && b == null) return null;
        a = ( a ) || ( new core.DartList.literal<BoxShadow>() );
        b = ( b ) || ( new core.DartList.literal<BoxShadow>() );
        let result : core.DartList<BoxShadow> = new core.DartList.literal<BoxShadow>();
        let commonLength : number = math.min(a.length,b.length);
        for(let i : number = 0; i < commonLength; i += 1)result.add(BoxShadow.lerp(a[i],b[i],t));
        for(let i : number = commonLength; i < a.length; i += 1)result.add(a[i].scale(1.0 - t));
        for(let i : number = commonLength; i < b.length; i += 1)result.add(b[i].scale(t));
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (this.runtimeType != other.runtimeType) return false;
        let typedOther : BoxShadow = other;
        return op(Op.EQUALS,color,typedOther.color) && op(Op.EQUALS,offset,typedOther.offset) && op(Op.EQUALS,blurRadius,typedOther.blurRadius) && this.spreadRadius == typedOther.spreadRadius;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(color,offset,blurRadius,this.spreadRadius);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `BoxShadow(${color}, ${offset}, ${blurRadius}, ${this.spreadRadius})`;
    }
}

export class properties {
}
