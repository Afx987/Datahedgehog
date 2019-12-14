/** Library asset:datahedgehog_monitor/lib/lib/painting/box_border.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./borders";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/assertions";
import * as lib5 from "./border_radius";
import * as lib6 from "./edge_insets";

export enum BoxShape {
    rectangle,
    circle
}

export namespace BoxBorder {
    export type Constructors = lib3.ShapeBorder.Constructors | 'BoxBorder';
    export type Interface = Omit<BoxBorder, Constructors>;
}
@DartClass
export class BoxBorder extends lib3.ShapeBorder {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BoxBorder() {
    }
    @AbstractProperty
    get top() : lib3.BorderSide{ throw 'abstract'}
    @AbstractProperty
    get bottom() : lib3.BorderSide{ throw 'abstract'}
    @AbstractProperty
    get isUniform() : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    add(other : lib3.ShapeBorder,_namedArguments? : {reversed? : boolean}) : BoxBorder {
        let {reversed} = Object.assign({
            "reversed" : false}, _namedArguments );
        return null;
    }
    static lerp(a : BoxBorder,b : BoxBorder,t : double) : BoxBorder {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if ((is(a, Border) || op(Op.EQUALS,a,null)) && (is(b, Border) || op(Op.EQUALS,b,null))) return Border.lerp(a,b,t);
        if ((is(a, BorderDirectional) || op(Op.EQUALS,a,null)) && (is(b, BorderDirectional) || op(Op.EQUALS,b,null))) return BorderDirectional.lerp(a,b,t);
        if (is(b, Border) && is(a, BorderDirectional)) {
            let c : BoxBorder = b;
            b = a;
            a = c;
            t = 1.0 - t;
        }
        if (is(a, Border) && is(b, BorderDirectional)) {
            if (op(Op.EQUALS,b.start,lib3.BorderSide.none) && op(Op.EQUALS,b.end,lib3.BorderSide.none)) {
                return Border({
                    top : lib3.BorderSide.lerp(a.top,b.top,t),right : lib3.BorderSide.lerp(a.right,lib3.BorderSide.none,t),bottom : lib3.BorderSide.lerp(a.bottom,b.bottom,t),left : lib3.BorderSide.lerp(a.left,lib3.BorderSide.none,t)});
            }
            if (op(Op.EQUALS,a.left,lib3.BorderSide.none) && op(Op.EQUALS,a.right,lib3.BorderSide.none)) {
                return BorderDirectional({
                    top : lib3.BorderSide.lerp(a.top,b.top,t),start : lib3.BorderSide.lerp(lib3.BorderSide.none,b.start,t),end : lib3.BorderSide.lerp(lib3.BorderSide.none,b.end,t),bottom : lib3.BorderSide.lerp(a.bottom,b.bottom,t)});
            }
            if (t < 0.5) {
                return Border({
                    top : lib3.BorderSide.lerp(a.top,b.top,t),right : lib3.BorderSide.lerp(a.right,lib3.BorderSide.none,t * 2.0),bottom : lib3.BorderSide.lerp(a.bottom,b.bottom,t),left : lib3.BorderSide.lerp(a.left,lib3.BorderSide.none,t * 2.0)});
            }
            return BorderDirectional({
                top : lib3.BorderSide.lerp(a.top,b.top,t),start : lib3.BorderSide.lerp(lib3.BorderSide.none,b.start,(t - 0.5) * 2.0),end : lib3.BorderSide.lerp(lib3.BorderSide.none,b.end,(t - 0.5) * 2.0),bottom : lib3.BorderSide.lerp(a.bottom,b.bottom,t)});
        }
        throw lib4.FlutterError('BoxBorder.lerp can only interpolate Border and BorderDirectional classes.\n' + `BoxBorder.lerp() was called with two objects of type ${a.runtimeType} and ${b.runtimeType}:\n` + `  ${a}\n` + `  ${b}\n` + 'However, only Border and BorderDirectional classes are supported by this method. ' + 'For a more general interpolation method, consider using ShapeBorder.lerp instead.');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getInnerPath(rect : any,_namedArguments? : {textDirection? : any}) : any {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (textDirection != null, 'The textDirection argument to $runtimeType.getInnerPath must not be null.'); */;
        return ((_) : any =>  {
            {
                addRect(this.dimensions.resolve(textDirection).deflateRect(rect));
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
        /* TODO (AssertStatementImpl) : assert (textDirection != null, 'The textDirection argument to $runtimeType.getOuterPath must not be null.'); */;
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
    @Abstract
    paint(canvas : any,rect : any,_namedArguments? : {textDirection? : any,shape? : BoxShape,borderRadius? : lib5.BorderRadius}) : any{ throw 'abstract'}
    static _paintUniformBorderWithRadius(canvas : any,rect : any,side : lib3.BorderSide,borderRadius : lib5.BorderRadius) : any {
        /* TODO (AssertStatementImpl) : assert (side.style != BorderStyle.none); */;
        let paint : any = ((_) : any =>  {
            {
                _.color = side.color;
                return _;
            }
        })(Paint());
        let outer : any = borderRadius.toRRect(rect);
        let width : double = side.width;
        if (width == 0.0) {
            ((_) : any =>  {
                {
                    _.style = PaintingStyle.stroke;
                    _.strokeWidth = 0.0;
                    return _;
                }
            })(paint);
            canvas.drawRRect(outer,paint);
        }else {
            let inner : any = outer.deflate(width);
            canvas.drawDRRect(outer,inner,paint);
        }
    }
    static _paintUniformBorderWithCircle(canvas : any,rect : any,side : lib3.BorderSide) : any {
        /* TODO (AssertStatementImpl) : assert (side.style != BorderStyle.none); */;
        let width : double = side.width;
        let paint : any = side.toPaint();
        let radius : double = op(Op.DIVIDE,(op(Op.MINUS,rect.shortestSide,width)),2.0);
        canvas.drawCircle(rect.center,radius,paint);
    }
    static _paintUniformBorderWithRectangle(canvas : any,rect : any,side : lib3.BorderSide) : any {
        /* TODO (AssertStatementImpl) : assert (side.style != BorderStyle.none); */;
        let width : double = side.width;
        let paint : any = side.toPaint();
        canvas.drawRect(rect.deflate(width / 2.0),paint);
    }
}

export namespace Border {
    export type Constructors = BoxBorder.Constructors | 'Border';
    export type Interface = Omit<Border, Constructors>;
}
@DartClass
export class Border extends BoxBorder {
    constructor(_namedArguments? : {top? : lib3.BorderSide,right? : lib3.BorderSide,bottom? : lib3.BorderSide,left? : lib3.BorderSide}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Border(_namedArguments? : {top? : lib3.BorderSide,right? : lib3.BorderSide,bottom? : lib3.BorderSide,left? : lib3.BorderSide}) {
        let {top,right,bottom,left} = Object.assign({
            "top" : lib3.BorderSide.none,
            "right" : lib3.BorderSide.none,
            "bottom" : lib3.BorderSide.none,
            "left" : lib3.BorderSide.none}, _namedArguments );
        this.assert = assert;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }
     : any;

     : any;

     : any;

     : any;

    @namedFactory
    static $all(_namedArguments? : {color? : any,width? : double,style? : lib3.BorderStyle}) : Border {
        let {color,width,style} = Object.assign({
            "color" : new bare.createInstance(any,null,4278190080),
            "width" : 1.0,
            "style" : lib3.BorderStyle.solid}, _namedArguments );
        let side : lib3.BorderSide = lib3.BorderSide({
            color : color,width : width,style : style});
        return Border({
            top : side,right : side,bottom : side,left : side});
    }
    static all : new(_namedArguments? : {color? : any,width? : double,style? : lib3.BorderStyle}) => Border;

    static merge(a : Border,b : Border) : Border {
        /* TODO (AssertStatementImpl) : assert (a != null); */;
        /* TODO (AssertStatementImpl) : assert (b != null); */;
        /* TODO (AssertStatementImpl) : assert (BorderSide.canMerge(a.top, b.top)); */;
        /* TODO (AssertStatementImpl) : assert (BorderSide.canMerge(a.right, b.right)); */;
        /* TODO (AssertStatementImpl) : assert (BorderSide.canMerge(a.bottom, b.bottom)); */;
        /* TODO (AssertStatementImpl) : assert (BorderSide.canMerge(a.left, b.left)); */;
        return Border({
            top : lib3.BorderSide.merge(a.top,b.top),right : lib3.BorderSide.merge(a.right,b.right),bottom : lib3.BorderSide.merge(a.bottom,b.bottom),left : lib3.BorderSide.merge(a.left,b.left)});
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    top : lib3.BorderSide;

    right : lib3.BorderSide;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    bottom : lib3.BorderSide;

    left : lib3.BorderSide;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dimensions() : lib6.EdgeInsetsGeometry {
        return lib6.EdgeInsets.fromLTRB(this.left.width,this.top.width,this.right.width,this.bottom.width);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isUniform() : boolean {
        let topColor : any = this.top.color;
        if (this.right.color != topColor || this.bottom.color != topColor || this.left.color != topColor) return false;
        let topWidth : double = this.top.width;
        if (this.right.width != topWidth || this.bottom.width != topWidth || this.left.width != topWidth) return false;
        let topStyle : lib3.BorderStyle = this.top.style;
        if (this.right.style != topStyle || this.bottom.style != topStyle || this.left.style != topStyle) return false;
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    add(other : lib3.ShapeBorder,_namedArguments? : {reversed? : boolean}) : Border {
        let {reversed} = Object.assign({
            "reversed" : false}, _namedArguments );
        if (isNot(other, Border)) return null;
        let typedOther : Border = other;
        if (lib3.BorderSide.canMerge(this.top,typedOther.top) && lib3.BorderSide.canMerge(this.right,typedOther.right) && lib3.BorderSide.canMerge(this.bottom,typedOther.bottom) && lib3.BorderSide.canMerge(this.left,typedOther.left)) {
            return Border.merge(this,typedOther);
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scale(t : double) : Border {
        return Border({
            top : this.top.scale(t),right : this.right.scale(t),bottom : this.bottom.scale(t),left : this.left.scale(t)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpFrom(a : lib3.ShapeBorder,t : double) : lib3.ShapeBorder {
        if (is(a, Border)) return Border.lerp(a,this,t);
        return super.lerpFrom(a,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpTo(b : lib3.ShapeBorder,t : double) : lib3.ShapeBorder {
        if (is(b, Border)) return Border.lerp(this,b,t);
        return super.lerpTo(b,t);
    }
    static lerp(a : Border,b : Border,t : double) : Border {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        if (op(Op.EQUALS,a,null)) return b.scale(t);
        if (op(Op.EQUALS,b,null)) return a.scale(1.0 - t);
        return Border({
            top : lib3.BorderSide.lerp(a.top,b.top,t),right : lib3.BorderSide.lerp(a.right,b.right,t),bottom : lib3.BorderSide.lerp(a.bottom,b.bottom,t),left : lib3.BorderSide.lerp(a.left,b.left,t)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,rect : any,_namedArguments? : {textDirection? : any,shape? : BoxShape,borderRadius? : lib5.BorderRadius}) : any {
        let {textDirection,shape,borderRadius} = Object.assign({
            "shape" : BoxShape.rectangle}, _namedArguments );
        if (this.isUniform) {
            switch (this.top.style) {
                case lib3.BorderStyle.none:
                    return;
                case lib3.BorderStyle.solid:
                    switch (shape) {
                        case BoxShape.circle:
                            /* TODO (AssertStatementImpl) : assert (borderRadius == null, 'A borderRadius can only be given for rectangular boxes.'); */;
                            BoxBorder._paintUniformBorderWithCircle(canvas,rect,this.top);
                            break;
                        case BoxShape.rectangle:
                            if (borderRadius != null) {
                                BoxBorder._paintUniformBorderWithRadius(canvas,rect,this.top,borderRadius);
                                return;
                            }
                            BoxBorder._paintUniformBorderWithRectangle(canvas,rect,this.top);
                            break;
                    }
                    return;
            }
        }
        /* TODO (AssertStatementImpl) : assert (borderRadius == null, 'A borderRadius can only be given for uniform borders.'); */;
        /* TODO (AssertStatementImpl) : assert (shape == BoxShape.rectangle, 'A border can only be drawn as a circle if it is uniform.'); */;
        lib3.paintBorder(canvas,rect,{
            top : this.top,right : this.right,bottom : this.bottom,left : this.left});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (this.runtimeType != other.runtimeType) return false;
        let typedOther : Border = other;
        return op(Op.EQUALS,this.top,typedOther.top) && op(Op.EQUALS,this.right,typedOther.right) && op(Op.EQUALS,this.bottom,typedOther.bottom) && op(Op.EQUALS,this.left,typedOther.left);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.top,this.right,this.bottom,this.left);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        if (this.isUniform) return `${this.runtimeType}.all(${this.top})`;
        let arguments : core.DartList<string> = new core.DartList.literal<string>();
        if (this.top != lib3.BorderSide.none) arguments.add(`top: ${this.top}`);
        if (this.right != lib3.BorderSide.none) arguments.add(`right: ${this.right}`);
        if (this.bottom != lib3.BorderSide.none) arguments.add(`bottom: ${this.bottom}`);
        if (this.left != lib3.BorderSide.none) arguments.add(`left: ${this.left}`);
        return `${this.runtimeType}(${arguments.join(", ")})`;
    }
}

export namespace BorderDirectional {
    export type Constructors = BoxBorder.Constructors | 'BorderDirectional';
    export type Interface = Omit<BorderDirectional, Constructors>;
}
@DartClass
export class BorderDirectional extends BoxBorder {
    constructor(_namedArguments? : {top? : lib3.BorderSide,start? : lib3.BorderSide,end? : lib3.BorderSide,bottom? : lib3.BorderSide}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BorderDirectional(_namedArguments? : {top? : lib3.BorderSide,start? : lib3.BorderSide,end? : lib3.BorderSide,bottom? : lib3.BorderSide}) {
        let {top,start,end,bottom} = Object.assign({
            "top" : lib3.BorderSide.none,
            "start" : lib3.BorderSide.none,
            "end" : lib3.BorderSide.none,
            "bottom" : lib3.BorderSide.none}, _namedArguments );
        this.assert = assert;
        this.top = top;
        this.start = start;
        this.end = end;
        this.bottom = bottom;
    }
     : any;

     : any;

     : any;

     : any;

    static merge(a : BorderDirectional,b : BorderDirectional) : BorderDirectional {
        /* TODO (AssertStatementImpl) : assert (a != null); */;
        /* TODO (AssertStatementImpl) : assert (b != null); */;
        /* TODO (AssertStatementImpl) : assert (BorderSide.canMerge(a.top, b.top)); */;
        /* TODO (AssertStatementImpl) : assert (BorderSide.canMerge(a.start, b.start)); */;
        /* TODO (AssertStatementImpl) : assert (BorderSide.canMerge(a.end, b.end)); */;
        /* TODO (AssertStatementImpl) : assert (BorderSide.canMerge(a.bottom, b.bottom)); */;
        return BorderDirectional({
            top : lib3.BorderSide.merge(a.top,b.top),start : lib3.BorderSide.merge(a.start,b.start),end : lib3.BorderSide.merge(a.end,b.end),bottom : lib3.BorderSide.merge(a.bottom,b.bottom)});
    }
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    top : lib3.BorderSide;

    start : lib3.BorderSide;

    end : lib3.BorderSide;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    bottom : lib3.BorderSide;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dimensions() : lib6.EdgeInsetsGeometry {
        return lib6.EdgeInsetsDirectional.fromSTEB(this.start.width,this.top.width,this.end.width,this.bottom.width);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isUniform() : boolean {
        let topColor : any = this.top.color;
        if (this.start.color != topColor || this.end.color != topColor || this.bottom.color != topColor) return false;
        let topWidth : double = this.top.width;
        if (this.start.width != topWidth || this.end.width != topWidth || this.bottom.width != topWidth) return false;
        let topStyle : lib3.BorderStyle = this.top.style;
        if (this.start.style != topStyle || this.end.style != topStyle || this.bottom.style != topStyle) return false;
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    add(other : lib3.ShapeBorder,_namedArguments? : {reversed? : boolean}) : BoxBorder {
        let {reversed} = Object.assign({
            "reversed" : false}, _namedArguments );
        if (is(other, BorderDirectional)) {
            let typedOther : BorderDirectional = other;
            if (lib3.BorderSide.canMerge(this.top,typedOther.top) && lib3.BorderSide.canMerge(this.start,typedOther.start) && lib3.BorderSide.canMerge(this.end,typedOther.end) && lib3.BorderSide.canMerge(this.bottom,typedOther.bottom)) {
                return BorderDirectional.merge(this,typedOther);
            }
            return null;
        }
        if (is(other, Border)) {
            let typedOther : Border = other;
            if (!lib3.BorderSide.canMerge(typedOther.top,this.top) || !lib3.BorderSide.canMerge(typedOther.bottom,this.bottom)) return null;
            if (this.start != lib3.BorderSide.none || this.end != lib3.BorderSide.none) {
                if (typedOther.left != lib3.BorderSide.none || typedOther.right != lib3.BorderSide.none) return null;
                /* TODO (AssertStatementImpl) : assert (typedOther.left == BorderSide.none); */;
                /* TODO (AssertStatementImpl) : assert (typedOther.right == BorderSide.none); */;
                return BorderDirectional({
                    top : lib3.BorderSide.merge(typedOther.top,this.top),start : this.start,end : this.end,bottom : lib3.BorderSide.merge(typedOther.bottom,this.bottom)});
            }
            /* TODO (AssertStatementImpl) : assert (start == BorderSide.none); */;
            /* TODO (AssertStatementImpl) : assert (end == BorderSide.none); */;
            return Border({
                top : lib3.BorderSide.merge(typedOther.top,this.top),right : typedOther.right,bottom : lib3.BorderSide.merge(typedOther.bottom,this.bottom),left : typedOther.left});
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scale(t : double) : BorderDirectional {
        return BorderDirectional({
            top : this.top.scale(t),start : this.start.scale(t),end : this.end.scale(t),bottom : this.bottom.scale(t)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpFrom(a : lib3.ShapeBorder,t : double) : lib3.ShapeBorder {
        if (is(a, BorderDirectional)) return BorderDirectional.lerp(a,this,t);
        return super.lerpFrom(a,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpTo(b : lib3.ShapeBorder,t : double) : lib3.ShapeBorder {
        if (is(b, BorderDirectional)) return BorderDirectional.lerp(this,b,t);
        return super.lerpTo(b,t);
    }
    static lerp(a : BorderDirectional,b : BorderDirectional,t : double) : BorderDirectional {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        if (op(Op.EQUALS,a,null)) return b.scale(t);
        if (op(Op.EQUALS,b,null)) return a.scale(1.0 - t);
        return BorderDirectional({
            top : lib3.BorderSide.lerp(a.top,b.top,t),end : lib3.BorderSide.lerp(a.end,b.end,t),bottom : lib3.BorderSide.lerp(a.bottom,b.bottom,t),start : lib3.BorderSide.lerp(a.start,b.start,t)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,rect : any,_namedArguments? : {textDirection? : any,shape? : BoxShape,borderRadius? : lib5.BorderRadius}) : any {
        let {textDirection,shape,borderRadius} = Object.assign({
            "shape" : BoxShape.rectangle}, _namedArguments );
        if (this.isUniform) {
            switch (this.top.style) {
                case lib3.BorderStyle.none:
                    return;
                case lib3.BorderStyle.solid:
                    switch (shape) {
                        case BoxShape.circle:
                            /* TODO (AssertStatementImpl) : assert (borderRadius == null, 'A borderRadius can only be given for rectangular boxes.'); */;
                            BoxBorder._paintUniformBorderWithCircle(canvas,rect,this.top);
                            break;
                        case BoxShape.rectangle:
                            if (borderRadius != null) {
                                BoxBorder._paintUniformBorderWithRadius(canvas,rect,this.top,borderRadius);
                                return;
                            }
                            BoxBorder._paintUniformBorderWithRectangle(canvas,rect,this.top);
                            break;
                    }
                    return;
            }
        }
        /* TODO (AssertStatementImpl) : assert (borderRadius == null, 'A borderRadius can only be given for uniform borders.'); */;
        /* TODO (AssertStatementImpl) : assert (shape == BoxShape.rectangle, 'A border can only be drawn as a circle if it is uniform.'); */;
        let left : lib3.BorderSide, right : lib3.BorderSide;
        /* TODO (AssertStatementImpl) : assert (textDirection != null, 'Non-uniform BorderDirectional objects require a TextDirection when painting.'); */;
        switch (textDirection) {
            case TextDirection.rtl:
                left = this.end;
                right = this.start;
                break;
            case TextDirection.ltr:
                left = this.start;
                right = this.end;
                break;
        }
        lib3.paintBorder(canvas,rect,{
            top : this.top,left : left,bottom : this.bottom,right : right});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (this.runtimeType != other.runtimeType) return false;
        let typedOther : BorderDirectional = other;
        return op(Op.EQUALS,this.top,typedOther.top) && op(Op.EQUALS,this.start,typedOther.start) && op(Op.EQUALS,this.end,typedOther.end) && op(Op.EQUALS,this.bottom,typedOther.bottom);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.top,this.start,this.end,this.bottom);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let arguments : core.DartList<string> = new core.DartList.literal<string>();
        if (this.top != lib3.BorderSide.none) arguments.add(`top: ${this.top}`);
        if (this.start != lib3.BorderSide.none) arguments.add(`start: ${this.start}`);
        if (this.end != lib3.BorderSide.none) arguments.add(`end: ${this.end}`);
        if (this.bottom != lib3.BorderSide.none) arguments.add(`bottom: ${this.bottom}`);
        return `${this.runtimeType}(${arguments.join(", ")})`;
    }
}

export class properties {
}
