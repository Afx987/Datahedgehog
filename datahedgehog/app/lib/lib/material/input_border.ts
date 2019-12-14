/** Library asset:datahedgehog_monitor/lib/lib/material/input_border.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/border_radius";
import * as math from "@dart2ts/dart/math";

export namespace InputBorder {
    export type Constructors = lib3.ShapeBorder.Constructors | 'InputBorder';
    export type Interface = Omit<InputBorder, Constructors>;
}
@DartClass
export class InputBorder extends lib3.ShapeBorder {
    constructor(_namedArguments? : {borderSide? : lib3.BorderSide}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InputBorder(_namedArguments? : {borderSide? : lib3.BorderSide}) {
        let {borderSide} = Object.assign({
            "borderSide" : lib3.BorderSide.none}, _namedArguments );
        this.assert = assert;
        this.borderSide = borderSide;
    }
     : any;

    private static __$none : InputBorder;
    static get none() : InputBorder { 
        if (this.__$none===undefined) {
            this.__$none = _NoInputBorder();
        }
        return this.__$none;
    }

    borderSide : lib3.BorderSide;

    @Abstract
    copyWith(_namedArguments? : {borderSide? : lib3.BorderSide}) : InputBorder{ throw 'abstract'}
    @AbstractProperty
    get isOutline() : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    paint(canvas : any,rect : any,_namedArguments? : {gapStart? : double,gapExtent? : double,gapPercentage? : double,textDirection? : any}) : any{ throw 'abstract'}
}

export namespace _NoInputBorder {
    export type Constructors = InputBorder.Constructors | '_NoInputBorder';
    export type Interface = Omit<_NoInputBorder, Constructors>;
}
@DartClass
export class _NoInputBorder extends InputBorder {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _NoInputBorder() {
        super.InputBorder({
            borderSide : lib3.BorderSide.none});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copyWith(_namedArguments? : {borderSide? : lib3.BorderSide}) : _NoInputBorder {
        let {borderSide} = Object.assign({
        }, _namedArguments );
        return new _NoInputBorder();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isOutline() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dimensions() : lib4.EdgeInsetsGeometry {
        return lib4.EdgeInsets.zero;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scale(t : double) : _NoInputBorder {
        return new _NoInputBorder();
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
                addRect(rect);
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
                addRect(rect);
                return _;
            }
        })(Path());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,rect : any,_namedArguments? : {gapStart? : double,gapExtent? : double,gapPercentage? : double,textDirection? : any}) : any {
        let {gapStart,gapExtent,gapPercentage,textDirection} = Object.assign({
            "gapExtent" : 0.0,
            "gapPercentage" : 0.0}, _namedArguments );
    }
}

export namespace UnderlineInputBorder {
    export type Constructors = InputBorder.Constructors | 'UnderlineInputBorder';
    export type Interface = Omit<UnderlineInputBorder, Constructors>;
}
@DartClass
export class UnderlineInputBorder extends InputBorder {
    constructor(_namedArguments? : {borderSide? : lib3.BorderSide,borderRadius? : lib5.BorderRadius}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UnderlineInputBorder(_namedArguments? : {borderSide? : lib3.BorderSide,borderRadius? : lib5.BorderRadius}) {
        let {borderSide,borderRadius} = Object.assign({
            "borderSide" : new lib3.BorderSide(),
            "borderRadius" : new lib5.BorderRadius.only({
                topLeft : Radius.circular(4.0),topRight : Radius.circular(4.0)})}, _namedArguments );
        this.assert = assert;
        this.borderRadius = borderRadius;
    }
     : any;

     : any;

     : any;

    borderRadius : lib5.BorderRadius;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isOutline() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copyWith(_namedArguments? : {borderSide? : lib3.BorderSide,borderRadius? : lib5.BorderRadius}) : UnderlineInputBorder {
        let {borderSide,borderRadius} = Object.assign({
        }, _namedArguments );
        return UnderlineInputBorder({
            borderSide : (borderSide || this.borderSide),borderRadius : (borderRadius || this.borderRadius)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dimensions() : lib4.EdgeInsetsGeometry {
        return lib4.EdgeInsets.only({
            bottom : this.borderSide.width});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scale(t : double) : UnderlineInputBorder {
        return UnderlineInputBorder({
            borderSide : this.borderSide.scale(t)});
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
                addRect(Rect.fromLTWH(rect.left,rect.top,rect.width,math.max(0.0,op(Op.MINUS,rect.height,this.borderSide.width))));
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
                addRRect(this.borderRadius.resolve(textDirection).toRRect(rect));
                return _;
            }
        })(Path());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpFrom(a : lib3.ShapeBorder,t : double) : lib3.ShapeBorder {
        if (is(a, UnderlineInputBorder)) {
            return UnderlineInputBorder({
                borderSide : lib3.BorderSide.lerp(a.borderSide,this.borderSide,t),borderRadius : lib5.BorderRadius.lerp(a.borderRadius,this.borderRadius,t)});
        }
        return super.lerpFrom(a,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpTo(b : lib3.ShapeBorder,t : double) : lib3.ShapeBorder {
        if (is(b, UnderlineInputBorder)) {
            return UnderlineInputBorder({
                borderSide : lib3.BorderSide.lerp(this.borderSide,b.borderSide,t),borderRadius : lib5.BorderRadius.lerp(this.borderRadius,b.borderRadius,t)});
        }
        return super.lerpTo(b,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,rect : any,_namedArguments? : {gapStart? : double,gapExtent? : double,gapPercentage? : double,textDirection? : any}) : any {
        let {gapStart,gapExtent,gapPercentage,textDirection} = Object.assign({
            "gapExtent" : 0.0,
            "gapPercentage" : 0.0}, _namedArguments );
        if (this.borderRadius.bottomLeft != Radius.zero || this.borderRadius.bottomRight != Radius.zero) canvas.clipPath(this.getOuterPath(rect,{
            textDirection : textDirection}));
        canvas.drawLine(rect.bottomLeft,rect.bottomRight,this.borderSide.toPaint());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (this.runtimeType != other.runtimeType) return false;
        let typedOther : InputBorder = other;
        return op(Op.EQUALS,typedOther.borderSide,this.borderSide);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.borderSide.hashCode;
    }
}

export namespace OutlineInputBorder {
    export type Constructors = InputBorder.Constructors | 'OutlineInputBorder';
    export type Interface = Omit<OutlineInputBorder, Constructors>;
}
@DartClass
export class OutlineInputBorder extends InputBorder {
    constructor(_namedArguments? : {borderSide? : lib3.BorderSide,borderRadius? : lib5.BorderRadius,gapPadding? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OutlineInputBorder(_namedArguments? : {borderSide? : lib3.BorderSide,borderRadius? : lib5.BorderRadius,gapPadding? : double}) {
        let {borderSide,borderRadius,gapPadding} = Object.assign({
            "borderSide" : new lib3.BorderSide(),
            "borderRadius" : new lib5.BorderRadius.all(Radius.circular(4.0)),
            "gapPadding" : 4.0}, _namedArguments );
        this.assert = assert;
        this.borderRadius = borderRadius;
        this.gapPadding = gapPadding;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    static _cornersAreCircular(borderRadius : lib5.BorderRadius) : boolean {
        return op(Op.EQUALS,borderRadius.topLeft.x,borderRadius.topLeft.y) && op(Op.EQUALS,borderRadius.bottomLeft.x,borderRadius.bottomLeft.y) && op(Op.EQUALS,borderRadius.topRight.x,borderRadius.topRight.y) && op(Op.EQUALS,borderRadius.bottomRight.x,borderRadius.bottomRight.y);
    }
    gapPadding : double;

    borderRadius : lib5.BorderRadius;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isOutline() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copyWith(_namedArguments? : {borderSide? : lib3.BorderSide,borderRadius? : lib5.BorderRadius,gapPadding? : double}) : OutlineInputBorder {
        let {borderSide,borderRadius,gapPadding} = Object.assign({
        }, _namedArguments );
        return OutlineInputBorder({
            borderSide : (borderSide || this.borderSide),borderRadius : (borderRadius || this.borderRadius),gapPadding : (gapPadding || this.gapPadding)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dimensions() : lib4.EdgeInsetsGeometry {
        return lib4.EdgeInsets.all(this.borderSide.width);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scale(t : double) : OutlineInputBorder {
        return OutlineInputBorder({
            borderSide : this.borderSide.scale(t),borderRadius : op(Op.TIMES,this.borderRadius,t),gapPadding : this.gapPadding * t});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpFrom(a : lib3.ShapeBorder,t : double) : lib3.ShapeBorder {
        if (is(a, OutlineInputBorder)) {
            let outline : OutlineInputBorder = a;
            return OutlineInputBorder({
                borderRadius : lib5.BorderRadius.lerp(outline.borderRadius,this.borderRadius,t),borderSide : lib3.BorderSide.lerp(outline.borderSide,this.borderSide,t),gapPadding : outline.gapPadding});
        }
        return super.lerpFrom(a,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpTo(b : lib3.ShapeBorder,t : double) : lib3.ShapeBorder {
        if (is(b, OutlineInputBorder)) {
            let outline : OutlineInputBorder = b;
            return OutlineInputBorder({
                borderRadius : lib5.BorderRadius.lerp(this.borderRadius,outline.borderRadius,t),borderSide : lib3.BorderSide.lerp(this.borderSide,outline.borderSide,t),gapPadding : outline.gapPadding});
        }
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
                addRRect(this.borderRadius.resolve(textDirection).toRRect(rect).deflate(this.borderSide.width));
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
                addRRect(this.borderRadius.resolve(textDirection).toRRect(rect));
                return _;
            }
        })(Path());
    }
    _gapBorderPath(canvas : any,center : any,start : double,extent : double) : any {
        let tlCorner : any = Rect.fromLTWH(center.left,center.top,op(Op.TIMES,center.tlRadiusX,2.0),op(Op.TIMES,center.tlRadiusY,2.0));
        let trCorner : any = Rect.fromLTWH(op(Op.MINUS,center.right,op(Op.TIMES,center.trRadiusX,2.0)),center.top,op(Op.TIMES,center.trRadiusX,2.0),op(Op.TIMES,center.trRadiusY,2.0));
        let brCorner : any = Rect.fromLTWH(op(Op.MINUS,center.right,op(Op.TIMES,center.brRadiusX,2.0)),op(Op.MINUS,center.bottom,op(Op.TIMES,center.brRadiusY,2.0)),op(Op.TIMES,center.brRadiusX,2.0),op(Op.TIMES,center.brRadiusY,2.0));
        let blCorner : any = Rect.fromLTWH(center.left,op(Op.MINUS,center.bottom,op(Op.TIMES,center.brRadiusY,2.0)),op(Op.TIMES,center.blRadiusX,2.0),op(Op.TIMES,center.blRadiusY,2.0));
        let cornerArcSweep : double = op(Op.DIVIDE,math.pi,2.0);
        let tlCornerArcSweep : double = start < center.tlRadiusX ? math.asin(start / center.tlRadiusX) : op(Op.DIVIDE,math.pi,2.0);
        let path : any = ((_) : any =>  {
            {
                addArc(tlCorner,math.pi,tlCornerArcSweep);
                moveTo(op(Op.PLUS,center.left,center.tlRadiusX),center.top);
                return _;
            }
        })(Path());
        if (start > center.tlRadiusX) path.lineTo(op(Op.PLUS,center.left,start),center.top);
        let trCornerArcStart : double = (3 * math.pi) / 2.0;
        let trCornerArcSweep : double = cornerArcSweep;
        if (start + extent < op(Op.MINUS,center.width,center.trRadiusX)) {
            ((_) : any =>  {
                {
                    relativeMoveTo(extent,0.0);
                    lineTo(op(Op.MINUS,center.right,center.trRadiusX),center.top);
                    addArc(trCorner,trCornerArcStart,trCornerArcSweep);
                    return _;
                }
            })(path);
        }else if (start + extent < center.width) {
            let dx : double = op(Op.MINUS,center.width,(start + extent));
            let sweep : double = math.acos(dx / center.trRadiusX);
            path.addArc(trCorner,trCornerArcStart + sweep,trCornerArcSweep - sweep);
        }
        return ((_) : any =>  {
            {
                moveTo(center.right,op(Op.PLUS,center.top,center.trRadiusY));
                lineTo(center.right,op(Op.MINUS,center.bottom,center.brRadiusY));
                addArc(brCorner,0.0,cornerArcSweep);
                lineTo(op(Op.PLUS,center.left,center.blRadiusX),center.bottom);
                addArc(blCorner,op(Op.DIVIDE,math.pi,2.0),cornerArcSweep);
                lineTo(center.left,op(Op.PLUS,center.top,center.trRadiusY));
                return _;
            }
        })(path);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,rect : any,_namedArguments? : {gapStart? : double,gapExtent? : double,gapPercentage? : double,textDirection? : any}) : any {
        let {gapStart,gapExtent,gapPercentage,textDirection} = Object.assign({
            "gapExtent" : 0.0,
            "gapPercentage" : 0.0}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (gapExtent != null); */;
        /* TODO (AssertStatementImpl) : assert (gapPercentage >= 0.0 && gapPercentage <= 1.0); */;
        /* TODO (AssertStatementImpl) : assert (_cornersAreCircular(borderRadius)); */;
        let paint : any = this.borderSide.toPaint();
        let outer : any = this.borderRadius.toRRect(rect);
        let center : any = outer.deflate(this.borderSide.width / 2.0);
        if (gapStart == null || gapExtent <= 0.0 || gapPercentage == 0.0) {
            canvas.drawRRect(center,paint);
        }else {
            let extent : double = lerpDouble(0.0,gapExtent + this.gapPadding * 2.0,gapPercentage);
            switch (textDirection) {
                case TextDirection.rtl:
                    {
                        let path : any = this._gapBorderPath(canvas,center,gapStart + this.gapPadding - extent,extent);
                        canvas.drawPath(path,paint);
                        break;
                    }
                case TextDirection.ltr:
                    {
                        let path : any = this._gapBorderPath(canvas,center,gapStart - this.gapPadding,extent);
                        canvas.drawPath(path,paint);
                        break;
                    }
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (this.runtimeType != other.runtimeType) return false;
        let typedOther : OutlineInputBorder = other;
        return op(Op.EQUALS,typedOther.borderSide,this.borderSide) && op(Op.EQUALS,typedOther.borderRadius,this.borderRadius) && typedOther.gapPadding == this.gapPadding;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.borderSide,this.borderRadius,this.gapPadding);
    }
}

export class properties {
}
