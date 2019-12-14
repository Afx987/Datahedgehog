/** Library asset:datahedgehog_monitor/lib/lib/painting/box_decoration.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./decoration";
import * as lib4 from "./decoration_image";
import * as lib5 from "./box_border";
import * as lib6 from "./border_radius";
import * as lib7 from "./box_shadow";
import * as lib8 from "./gradient";
import * as lib9 from "./edge_insets";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as math from "@dart2ts/dart/math";
import * as lib12 from "./image_provider";

export namespace BoxDecoration {
    export type Constructors = lib3.Decoration.Constructors | 'BoxDecoration';
    export type Interface = Omit<BoxDecoration, Constructors>;
}
@DartClass
export class BoxDecoration extends lib3.Decoration {
    constructor(_namedArguments? : {color? : any,image? : lib4.DecorationImage,border? : lib5.BoxBorder,borderRadius? : lib6.BorderRadiusGeometry,boxShadow? : core.DartList<lib7.BoxShadow>,gradient? : lib8.Gradient,backgroundBlendMode? : any,shape? : lib5.BoxShape}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BoxDecoration(_namedArguments? : {color? : any,image? : lib4.DecorationImage,border? : lib5.BoxBorder,borderRadius? : lib6.BorderRadiusGeometry,boxShadow? : core.DartList<lib7.BoxShadow>,gradient? : lib8.Gradient,backgroundBlendMode? : any,shape? : lib5.BoxShape}) {
        let {color,image,border,borderRadius,boxShadow,gradient,backgroundBlendMode,shape} = Object.assign({
            "shape" : lib5.BoxShape.rectangle}, _namedArguments );
        this.assert = assert;
        this.color = color;
        this.image = image;
        this.border = border;
        this.borderRadius = borderRadius;
        this.boxShadow = boxShadow;
        this.gradient = gradient;
        this.backgroundBlendMode = backgroundBlendMode;
        this.shape = shape;
    }
     : any;

     : any;

     : any;

     : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugAssertIsValid() : boolean {
        /* TODO (AssertStatementImpl) : assert (shape != BoxShape.circle || borderRadius == null); */;
        return super.debugAssertIsValid();
    }
    color : any;

    image : lib4.DecorationImage;

    border : lib5.BoxBorder;

    borderRadius : lib6.BorderRadiusGeometry;

    boxShadow : core.DartList<lib7.BoxShadow>;

    gradient : lib8.Gradient;

    backgroundBlendMode : any;

    shape : lib5.BoxShape;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get padding() : lib9.EdgeInsetsGeometry {
        return ((t)=>(!!t)?t.dimensions:null)(this.border);
    }
    scale(factor : double) : BoxDecoration {
        return BoxDecoration({
            color : Color.lerp(null,this.color,factor),image : this.image,border : lib5.BoxBorder.lerp(null,this.border,factor),borderRadius : lib6.BorderRadiusGeometry.lerp(null,this.borderRadius,factor),boxShadow : lib7.BoxShadow.lerpList(null,this.boxShadow,factor),gradient : ((_797_)=>(!!_797_)?_797_.scale(factor):null)(this.gradient),shape : this.shape});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isComplex() : boolean {
        return this.boxShadow != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpFrom(a : lib3.Decoration,t : double) : BoxDecoration {
        if (op(Op.EQUALS,a,null)) return this.scale(t);
        if (is(a, BoxDecoration)) return BoxDecoration.lerp(a,this,t);
        return super.lerpFrom(a,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpTo(b : lib3.Decoration,t : double) : BoxDecoration {
        if (op(Op.EQUALS,b,null)) return this.scale(1.0 - t);
        if (is(b, BoxDecoration)) return BoxDecoration.lerp(this,b,t);
        return super.lerpTo(b,t);
    }
    static lerp(a : BoxDecoration,b : BoxDecoration,t : double) : BoxDecoration {
        /* TODO (AssertStatementImpl) : assert (t != null); */;
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) return null;
        if (op(Op.EQUALS,a,null)) return b.scale(t);
        if (op(Op.EQUALS,b,null)) return a.scale(1.0 - t);
        if (t == 0.0) return a;
        if (t == 1.0) return b;
        return BoxDecoration({
            color : Color.lerp(a.color,b.color,t),image : t < 0.5 ? a.image : b.image,border : lib5.BoxBorder.lerp(a.border,b.border,t),borderRadius : lib6.BorderRadiusGeometry.lerp(a.borderRadius,b.borderRadius,t),boxShadow : lib7.BoxShadow.lerpList(a.boxShadow,b.boxShadow,t),gradient : lib8.Gradient.lerp(a.gradient,b.gradient,t),shape : t < 0.5 ? a.shape : b.shape});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (this.runtimeType != other.runtimeType) return false;
        let typedOther : BoxDecoration = other;
        return op(Op.EQUALS,this.color,typedOther.color) && op(Op.EQUALS,this.image,typedOther.image) && op(Op.EQUALS,this.border,typedOther.border) && op(Op.EQUALS,this.borderRadius,typedOther.borderRadius) && this.boxShadow == typedOther.boxShadow && op(Op.EQUALS,this.gradient,typedOther.gradient) && op(Op.EQUALS,this.shape,typedOther.shape);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.color,this.image,this.border,this.borderRadius,this.boxShadow,this.gradient,this.shape);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib10.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        ((_) : lib10.DiagnosticPropertiesBuilder =>  {
            {
                _.defaultDiagnosticsTreeStyle = lib10.DiagnosticsTreeStyle.whitespace;
                _.emptyBodyDescription = '<no decorations specified>';
                return _;
            }
        })(properties);
        properties.add(lib10.DiagnosticsProperty('color',this.color,{
            defaultValue : null}));
        properties.add(lib10.DiagnosticsProperty('image',this.image,{
            defaultValue : null}));
        properties.add(lib10.DiagnosticsProperty('border',this.border,{
            defaultValue : null}));
        properties.add(lib10.DiagnosticsProperty('borderRadius',this.borderRadius,{
            defaultValue : null}));
        properties.add(lib10.IterableProperty('boxShadow',this.boxShadow,{
            defaultValue : null,style : lib10.DiagnosticsTreeStyle.whitespace}));
        properties.add(lib10.DiagnosticsProperty('gradient',this.gradient,{
            defaultValue : null}));
        properties.add(lib10.EnumProperty('shape',this.shape,{
            defaultValue : lib5.BoxShape.rectangle}));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTest(size : any,position : any,_namedArguments? : {textDirection? : any}) : boolean {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (shape != null); */;
        /* TODO (AssertStatementImpl) : assert ((Offset.zero & size).contains(position)); */;
        switch (this.shape) {
            case lib5.BoxShape.rectangle:
                if (this.borderRadius != null) {
                    let bounds : any = this.borderRadius.resolve(textDirection).toRRect(op(Op.BITAND,Offset.zero,size));
                    return bounds.contains(position);
                }
                return true;
            case lib5.BoxShape.circle:
                let center : any = size.center(Offset.zero);
                let distance : double = (op(Op.MINUS,position,center)).distance;
                return distance <= op(Op.DIVIDE,math.min(size.width,size.height),2.0);
        }
        /* TODO (AssertStatementImpl) : assert (shape != null); */;
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createBoxPainter(onChanged? : any) : _BoxDecorationPainter {
        /* TODO (AssertStatementImpl) : assert (onChanged != null || image == null); */;
        return _BoxDecorationPainter(this,onChanged);
    }
}

export namespace _BoxDecorationPainter {
    export type Constructors = lib3.BoxPainter.Constructors | '_BoxDecorationPainter';
    export type Interface = Omit<_BoxDecorationPainter, Constructors>;
}
@DartClass
export class _BoxDecorationPainter extends lib3.BoxPainter {
    constructor(_decoration : BoxDecoration,onChanged : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _BoxDecorationPainter(_decoration : BoxDecoration,onChanged : any) {
        this.assert = assert;
        this._decoration = _decoration;
    }
     : any;

     : any;

    _decoration : BoxDecoration;

    _cachedBackgroundPaint : any;

    _rectForCachedBackgroundPaint : any;

    _getBackgroundPaint(rect : any,textDirection : any) : any {
        /* TODO (AssertStatementImpl) : assert (rect != null); */;
        /* TODO (AssertStatementImpl) : assert (_decoration.gradient != null || _rectForCachedBackgroundPaint == null); */;
        if (op(Op.EQUALS,this._cachedBackgroundPaint,null) || (this._decoration.gradient != null && this._rectForCachedBackgroundPaint != rect)) {
            let paint : any = Paint();
            if (this._decoration.backgroundBlendMode != null) paint.blendMode = this._decoration.backgroundBlendMode;
            if (this._decoration.color != null) paint.color = this._decoration.color;
            if (this._decoration.gradient != null) {
                paint.shader = this._decoration.gradient.createShader(rect,{
                    textDirection : textDirection});
                this._rectForCachedBackgroundPaint = rect;
            }
            this._cachedBackgroundPaint = paint;
        }
        return this._cachedBackgroundPaint;
    }
    _paintBox(canvas : any,rect : any,paint : any,textDirection : any) : any {
        switch (this._decoration.shape) {
            case lib5.BoxShape.circle:
                /* TODO (AssertStatementImpl) : assert (_decoration.borderRadius == null); */;
                let center : any = rect.center;
                let radius : double = op(Op.DIVIDE,rect.shortestSide,2.0);
                canvas.drawCircle(center,radius,paint);
                break;
            case lib5.BoxShape.rectangle:
                if (op(Op.EQUALS,this._decoration.borderRadius,null)) {
                    canvas.drawRect(rect,paint);
                }else {
                    canvas.drawRRect(this._decoration.borderRadius.resolve(textDirection).toRRect(rect),paint);
                }
                break;
        }
    }
    _paintShadows(canvas : any,rect : any,textDirection : any) : any {
        if (this._decoration.boxShadow == null) return;
        for(let boxShadow of this._decoration.boxShadow) {
            let paint : any = boxShadow.toPaint();
            let bounds : any = rect.shift(boxShadow.offset).inflate(boxShadow.spreadRadius);
            this._paintBox(canvas,bounds,paint,textDirection);
        }
    }
    _paintBackgroundColor(canvas : any,rect : any,textDirection : any) : any {
        if (this._decoration.color != null || this._decoration.gradient != null) this._paintBox(canvas,rect,this._getBackgroundPaint(rect,textDirection),textDirection);
    }
    _imagePainter : lib4.DecorationImagePainter;

    _paintBackgroundImage(canvas : any,rect : any,configuration : lib12.ImageConfiguration) : any {
        if (op(Op.EQUALS,this._decoration.image,null)) return;
        this._imagePainter = ( this._imagePainter ) || ( this._decoration.image.createPainter(this.onChanged) );
        let clipPath : any;
        switch (this._decoration.shape) {
            case lib5.BoxShape.circle:
                clipPath = ((_) : any =>  {
                    {
                        addOval(rect);
                        return _;
                    }
                })(Path());
                break;
            case lib5.BoxShape.rectangle:
                if (this._decoration.borderRadius != null) clipPath = ((_) : any =>  {
                    {
                        addRRect(this._decoration.borderRadius.resolve(configuration.textDirection).toRRect(rect));
                        return _;
                    }
                })(Path());
                break;
        }
        this._imagePainter.paint(canvas,rect,clipPath,configuration);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        ((_798_)=>(!!_798_)?_798_.dispose():null)(this._imagePainter);
        super.dispose();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,offset : any,configuration : lib12.ImageConfiguration) : any {
        /* TODO (AssertStatementImpl) : assert (configuration != null); */;
        /* TODO (AssertStatementImpl) : assert (configuration.size != null); */;
        let rect : any = op(Op.BITAND,offset,configuration.size);
        let textDirection : any = configuration.textDirection;
        this._paintShadows(canvas,rect,textDirection);
        this._paintBackgroundColor(canvas,rect,textDirection);
        this._paintBackgroundImage(canvas,rect,configuration);
        ((_799_)=>(!!_799_)?_799_.paint(canvas,rect,{
            shape : this._decoration.shape,borderRadius : this._decoration.borderRadius,textDirection : configuration.textDirection}):null)(this._decoration.border);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `BoxPainter for ${this._decoration}`;
    }
}

export class properties {
}
