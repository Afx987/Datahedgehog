/** Library asset:datahedgehog_monitor/lib/lib/painting/circle_border.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./borders";
import * as lib4 from "./edge_insets";
import * as math from "@dart2ts/dart/math";

export namespace CircleBorder {
    export type Constructors = lib3.ShapeBorder.Constructors | 'CircleBorder';
    export type Interface = Omit<CircleBorder, Constructors>;
}
@DartClass
export class CircleBorder extends lib3.ShapeBorder {
    constructor(_namedArguments? : {side? : lib3.BorderSide}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CircleBorder(_namedArguments? : {side? : lib3.BorderSide}) {
        let {side} = Object.assign({
            "side" : lib3.BorderSide.none}, _namedArguments );
        this.assert = assert;
        this.side = side;
    }
     : any;

    side : lib3.BorderSide;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dimensions() : lib4.EdgeInsetsGeometry {
        return lib4.EdgeInsets.all(this.side.width);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scale(t : double) : lib3.ShapeBorder {
        return CircleBorder({
            side : this.side.scale(t)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpFrom(a : lib3.ShapeBorder,t : double) : lib3.ShapeBorder {
        if (is(a, CircleBorder)) return CircleBorder({
            side : lib3.BorderSide.lerp(a.side,this.side,t)});
        return super.lerpFrom(a,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpTo(b : lib3.ShapeBorder,t : double) : lib3.ShapeBorder {
        if (is(b, CircleBorder)) return CircleBorder({
            side : lib3.BorderSide.lerp(this.side,b.side,t)});
        return super.lerpTo(b,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getInnerPath(rect : any,_namedArguments? : {textDirection? : any}) : any {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        return ((_) : any =>  {
            {
                addOval(Rect.fromCircle({
                    center : rect.center,radius : math.max(0.0,op(Op.MINUS,op(Op.DIVIDE,rect.shortestSide,2.0),this.side.width))}));
                return _;
            }
        })(Path());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getOuterPath(rect : any,_namedArguments? : {textDirection? : any}) : any {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        return ((_) : any =>  {
            {
                addOval(Rect.fromCircle({
                    center : rect.center,radius : op(Op.DIVIDE,rect.shortestSide,2.0)}));
                return _;
            }
        })(Path());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,rect : any,_namedArguments? : {textDirection? : any}) : void {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        switch (this.side.style) {
            case lib3.BorderStyle.none:
                break;
            case lib3.BorderStyle.solid:
                canvas.drawCircle(rect.center,op(Op.DIVIDE,(op(Op.MINUS,rect.shortestSide,this.side.width)),2.0),this.side.toPaint());
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (this.runtimeType != other.runtimeType) return false;
        let typedOther : CircleBorder = other;
        return op(Op.EQUALS,this.side,typedOther.side);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.side.hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.side})`;
    }
}

export class properties {
}
