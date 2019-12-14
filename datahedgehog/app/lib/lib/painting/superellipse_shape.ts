/** Library asset:datahedgehog_monitor/lib/lib/painting/superellipse_shape.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./borders";
import * as lib4 from "./border_radius";
import * as lib5 from "./edge_insets";
import * as math from "@dart2ts/dart/math";

export namespace SuperellipseShape {
    export type Constructors = lib3.ShapeBorder.Constructors | 'SuperellipseShape';
    export type Interface = Omit<SuperellipseShape, Constructors>;
}
@DartClass
export class SuperellipseShape extends lib3.ShapeBorder {
    constructor(_namedArguments? : {side? : lib3.BorderSide,borderRadius? : lib4.BorderRadiusGeometry}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SuperellipseShape(_namedArguments? : {side? : lib3.BorderSide,borderRadius? : lib4.BorderRadiusGeometry}) {
        let {side,borderRadius} = Object.assign({
            "side" : lib3.BorderSide.none,
            "borderRadius" : lib4.BorderRadius.zero}, _namedArguments );
        this.assert = assert;
        this.side = side;
        this.borderRadius = borderRadius;
    }
     : any;

     : any;

    borderRadius : lib4.BorderRadiusGeometry;

    side : lib3.BorderSide;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dimensions() : lib5.EdgeInsetsGeometry {
        return lib5.EdgeInsets.all(this.side.width);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scale(t : double) : lib3.ShapeBorder {
        return SuperellipseShape({
            side : this.side.scale(t),borderRadius : op(Op.TIMES,this.borderRadius,t)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpFrom(a : lib3.ShapeBorder,t : double) : lib3.ShapeBorder {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (is(a, SuperellipseShape)) {
            return SuperellipseShape({
                side : lib3.BorderSide.lerp(a.side,this.side,t),borderRadius : lib4.BorderRadiusGeometry.lerp(a.borderRadius,this.borderRadius,t)});
        }
        return super.lerpFrom(a,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpTo(b : lib3.ShapeBorder,t : double) : lib3.ShapeBorder {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (is(b, SuperellipseShape)) {
            return SuperellipseShape({
                side : lib3.BorderSide.lerp(this.side,b.side,t),borderRadius : lib4.BorderRadiusGeometry.lerp(this.borderRadius,b.borderRadius,t)});
        }
        return super.lerpTo(b,t);
    }
    _clampToShortest(rrect : any,value : double) : double {
        return value > rrect.shortestSide ? rrect.shortestSide : value;
    }
    _getPath(rrect : any) : any {
        let left : double = rrect.left;
        let right : double = rrect.right;
        let top : double = rrect.top;
        let bottom : double = rrect.bottom;
        let tlRadiusX : double = math.max(0.0,this._clampToShortest(rrect,rrect.tlRadiusX));
        let tlRadiusY : double = math.max(0.0,this._clampToShortest(rrect,rrect.tlRadiusY));
        let trRadiusX : double = math.max(0.0,this._clampToShortest(rrect,rrect.trRadiusX));
        let trRadiusY : double = math.max(0.0,this._clampToShortest(rrect,rrect.trRadiusY));
        let blRadiusX : double = math.max(0.0,this._clampToShortest(rrect,rrect.blRadiusX));
        let blRadiusY : double = math.max(0.0,this._clampToShortest(rrect,rrect.blRadiusY));
        let brRadiusX : double = math.max(0.0,this._clampToShortest(rrect,rrect.brRadiusX));
        let brRadiusY : double = math.max(0.0,this._clampToShortest(rrect,rrect.brRadiusY));
        return ((_) : any =>  {
            {
                moveTo(left,top + tlRadiusX);
                cubicTo(left,top,left,top,left + tlRadiusY,top);
                lineTo(right - trRadiusX,top);
                cubicTo(right,top,right,top,right,top + trRadiusY);
                lineTo(right,bottom - blRadiusX);
                cubicTo(right,bottom,right,bottom,right - blRadiusY,bottom);
                lineTo(left + brRadiusX,bottom);
                cubicTo(left,bottom,left,bottom,left,bottom - brRadiusY);
                close();
                return _;
            }
        })(Path());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getInnerPath(rect : any,_namedArguments? : {textDirection? : any}) : any {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        return this._getPath(this.borderRadius.resolve(textDirection).toRRect(rect).deflate(this.side.width));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getOuterPath(rect : any,_namedArguments? : {textDirection? : any}) : any {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        return this._getPath(this.borderRadius.resolve(textDirection).toRRect(rect));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,rect : any,_namedArguments? : {textDirection? : any}) : void {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        if (rect.isEmpty) return;
        switch (this.side.style) {
            case lib3.BorderStyle.none:
                break;
            case lib3.BorderStyle.solid:
                let path : any = this.getOuterPath(rect,{
                    textDirection : textDirection});
                let paint : any = this.side.toPaint();
                canvas.drawPath(path,paint);
                break;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (this.runtimeType != other.runtimeType) return false;
        let typedOther : SuperellipseShape = other;
        return op(Op.EQUALS,this.side,typedOther.side) && op(Op.EQUALS,this.borderRadius,typedOther.borderRadius);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.side,this.borderRadius);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.side}, ${this.borderRadius})`;
    }
}

export class properties {
}
