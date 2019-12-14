/** Library asset:datahedgehog_monitor/lib/lib/painting/shape_decoration.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./decoration";
import * as lib4 from "./decoration_image";
import * as lib5 from "./gradient";
import * as lib6 from "./box_shadow";
import * as lib7 from "./borders";
import * as lib8 from "./box_decoration";
import * as lib9 from "./box_border";
import * as lib10 from "./circle_border";
import * as lib11 from "./rounded_rectangle_border";
import * as lib12 from "./edge_insets";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib14 from "./image_provider";

export namespace ShapeDecoration {
    export type Constructors = lib3.Decoration.Constructors | 'ShapeDecoration';
    export type Interface = Omit<ShapeDecoration, Constructors>;
}
@DartClass
export class ShapeDecoration extends lib3.Decoration {
    constructor(_namedArguments? : {color? : any,image? : lib4.DecorationImage,gradient? : lib5.Gradient,shadows? : core.DartList<lib6.BoxShadow>,shape? : lib7.ShapeBorder}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ShapeDecoration(_namedArguments? : {color? : any,image? : lib4.DecorationImage,gradient? : lib5.Gradient,shadows? : core.DartList<lib6.BoxShadow>,shape? : lib7.ShapeBorder}) {
        let {color,image,gradient,shadows,shape} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.color = color;
        this.image = image;
        this.gradient = gradient;
        this.shadows = shadows;
        this.shape = shape;
    }
    [null](color : any, : any) {
    }
     : any;

     : any;

    @namedFactory
    static $fromBoxDecoration(source : lib8.BoxDecoration) : ShapeDecoration {
        let shape : lib7.ShapeBorder;
        /* TODO (AssertStatementImpl) : assert (source.shape != null); */;
        switch (source.shape) {
            case lib9.BoxShape.circle:
                if (source.border != null) {
                    /* TODO (AssertStatementImpl) : assert (source.border.isUniform); */;
                    shape = lib10.CircleBorder({
                        side : source.border.top});
                }else {
                    shape = new lib10.CircleBorder();
                }
                break;
            case lib9.BoxShape.rectangle:
                if (source.borderRadius != null) {
                    /* TODO (AssertStatementImpl) : assert (source.border == null || source.border.isUniform); */;
                    shape = lib11.RoundedRectangleBorder({
                        side : (((t)=>(!!t)?t.top:null)(source.border) || lib7.BorderSide.none),borderRadius : source.borderRadius});
                }else {
                    shape = (source.border || new lib9.Border());
                }
                break;
        }
        return ShapeDecoration({
            color : source.color,image : source.image,gradient : source.gradient,shadows : source.boxShadow,shape : shape});
    }
    static fromBoxDecoration : new(source : lib8.BoxDecoration) => ShapeDecoration;

    color : any;

    gradient : lib5.Gradient;

    image : lib4.DecorationImage;

    shadows : core.DartList<lib6.BoxShadow>;

    shape : lib7.ShapeBorder;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get padding() : lib12.EdgeInsets {
        return this.shape.dimensions;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isComplex() : boolean {
        return this.shadows != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpFrom(a : lib3.Decoration,t : double) : ShapeDecoration {
        if (is(a, lib8.BoxDecoration)) {
            return ShapeDecoration.lerp(ShapeDecoration.fromBoxDecoration(a),this,t);
        }else if (op(Op.EQUALS,a,null) || is(a, ShapeDecoration)) {
            return ShapeDecoration.lerp(a,this,t);
        }
        return super.lerpFrom(a,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpTo(b : lib3.Decoration,t : double) : ShapeDecoration {
        if (is(b, lib8.BoxDecoration)) {
            return ShapeDecoration.lerp(this,ShapeDecoration.fromBoxDecoration(b),t);
        }else if (op(Op.EQUALS,b,null) || is(b, ShapeDecoration)) {
            return ShapeDecoration.lerp(this,b,t);
        }
        return super.lerpTo(b,t);
    }
    static lerp(a : ShapeDecoration,b : ShapeDecoration,t : double) : ShapeDecoration {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        if (a != null && b != null) {
            if (t == 0.0) return a;
            if (t == 1.0) return b;
        }
        return ShapeDecoration({
            color : Color.lerp(((t)=>(!!t)?t.color:null)(a),((t)=>(!!t)?t.color:null)(b),t),gradient : lib5.Gradient.lerp(((t)=>(!!t)?t.gradient:null)(a),((t)=>(!!t)?t.gradient:null)(b),t),image : t < 0.5 ? a.image : b.image,shadows : lib6.BoxShadow.lerpList(((t)=>(!!t)?t.shadows:null)(a),((t)=>(!!t)?t.shadows:null)(b),t),shape : lib7.ShapeBorder.lerp(((t)=>(!!t)?t.shape:null)(a),((t)=>(!!t)?t.shape:null)(b),t)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (this.runtimeType != other.runtimeType) return false;
        let typedOther : ShapeDecoration = other;
        return op(Op.EQUALS,this.color,typedOther.color) && op(Op.EQUALS,this.gradient,typedOther.gradient) && op(Op.EQUALS,this.image,typedOther.image) && this.shadows == typedOther.shadows && op(Op.EQUALS,this.shape,typedOther.shape);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.color,this.gradient,this.image,this.shape,this.shadows);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib13.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.defaultDiagnosticsTreeStyle = lib13.DiagnosticsTreeStyle.whitespace;
        properties.add(lib13.DiagnosticsProperty('color',this.color,{
            defaultValue : null}));
        properties.add(lib13.DiagnosticsProperty('gradient',this.gradient,{
            defaultValue : null}));
        properties.add(lib13.DiagnosticsProperty('image',this.image,{
            defaultValue : null}));
        properties.add(lib13.IterableProperty('shadows',this.shadows,{
            defaultValue : null,style : lib13.DiagnosticsTreeStyle.whitespace}));
        properties.add(lib13.DiagnosticsProperty('shape',this.shape));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTest(size : any,position : any,_namedArguments? : {textDirection? : any}) : boolean {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        return this.shape.getOuterPath(op(Op.BITAND,Offset.zero,size),{
            textDirection : textDirection}).contains(position);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createBoxPainter(onChanged? : any) : _ShapeDecorationPainter {
        /* TODO (AssertStatementImpl) : assert (onChanged != null || image == null); */;
        return _ShapeDecorationPainter(this,onChanged);
    }
}

export namespace _ShapeDecorationPainter {
    export type Constructors = lib3.BoxPainter.Constructors | '_ShapeDecorationPainter';
    export type Interface = Omit<_ShapeDecorationPainter, Constructors>;
}
@DartClass
export class _ShapeDecorationPainter extends lib3.BoxPainter {
    constructor(_decoration : ShapeDecoration,onChanged : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ShapeDecorationPainter(_decoration : ShapeDecoration,onChanged : any) {
        this.assert = assert;
        this._decoration = _decoration;
    }
     : any;

     : any;

    _decoration : ShapeDecoration;

    _lastRect : any;

    _lastTextDirection : any;

    _outerPath : any;

    _innerPath : any;

    _interiorPaint : any;

    _shadowCount : number;

    _shadowPaths : core.DartList<any>;

    _shadowPaints : core.DartList<any>;

    _precache(rect : any,textDirection : any) : any {
        /* TODO (AssertStatementImpl) : assert (rect != null); */;
        if (op(Op.EQUALS,rect,this._lastRect) && op(Op.EQUALS,textDirection,this._lastTextDirection)) return;
        if (op(Op.EQUALS,this._interiorPaint,null) && (this._decoration.color != null || this._decoration.gradient != null)) {
            this._interiorPaint = Paint();
            if (this._decoration.color != null) this._interiorPaint.color = this._decoration.color;
        }
        if (this._decoration.gradient != null) this._interiorPaint.shader = this._decoration.gradient.createShader(rect);
        if (this._decoration.shadows != null) {
            if (this._shadowCount == null) {
                this._shadowCount = this._decoration.shadows.length;
                this._shadowPaths = core.DartList(this._shadowCount);
                this._shadowPaints = core.DartList(this._shadowCount);
                for(let index : number = 0; index < this._shadowCount; index += 1)this._shadowPaints[index] = this._decoration.shadows[index].toPaint();
            }
            for(let index : number = 0; index < this._shadowCount; index += 1){
                let shadow : lib6.BoxShadow = this._decoration.shadows[index];
                this._shadowPaths[index] = this._decoration.shape.getOuterPath(rect.shift(shadow.offset).inflate(shadow.spreadRadius),{
                    textDirection : textDirection});
            }
        }
        if (this._interiorPaint != null || this._shadowCount != null) this._outerPath = this._decoration.shape.getOuterPath(rect,{
            textDirection : textDirection});
        if (this._decoration.image != null) this._innerPath = this._decoration.shape.getInnerPath(rect,{
            textDirection : textDirection});
        this._lastRect = rect;
        this._lastTextDirection = textDirection;
    }
    _paintShadows(canvas : any) : any {
        if (this._shadowCount != null) {
            for(let index : number = 0; index < this._shadowCount; index += 1)canvas.drawPath(this._shadowPaths[index],this._shadowPaints[index]);
        }
    }
    _paintInterior(canvas : any) : any {
        if (this._interiorPaint != null) canvas.drawPath(this._outerPath,this._interiorPaint);
    }
    _imagePainter : lib4.DecorationImagePainter;

    _paintImage(canvas : any,configuration : lib14.ImageConfiguration) : any {
        if (op(Op.EQUALS,this._decoration.image,null)) return;
        this._imagePainter = ( this._imagePainter ) || ( this._decoration.image.createPainter(this.onChanged) );
        this._imagePainter.paint(canvas,this._lastRect,this._innerPath,configuration);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        ((_805_)=>(!!_805_)?_805_.dispose():null)(this._imagePainter);
        super.dispose();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,offset : any,configuration : lib14.ImageConfiguration) : any {
        /* TODO (AssertStatementImpl) : assert (configuration != null); */;
        /* TODO (AssertStatementImpl) : assert (configuration.size != null); */;
        let rect : any = op(Op.BITAND,offset,configuration.size);
        let textDirection : any = configuration.textDirection;
        this._precache(rect,textDirection);
        this._paintShadows(canvas);
        this._paintInterior(canvas);
        this._paintImage(canvas,configuration);
        this._decoration.shape.paint(canvas,rect,{
            textDirection : textDirection});
    }
}

export class properties {
}
