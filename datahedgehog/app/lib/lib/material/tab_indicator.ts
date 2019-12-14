/** Library asset:datahedgehog_monitor/lib/lib/material/tab_indicator.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/painting/decoration";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/borders";
import * as lib5 from "./colors";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/image_provider";

export namespace UnderlineTabIndicator {
    export type Constructors = lib3.Decoration.Constructors | 'UnderlineTabIndicator';
    export type Interface = Omit<UnderlineTabIndicator, Constructors>;
}
@DartClass
export class UnderlineTabIndicator extends lib3.Decoration {
    constructor(_namedArguments? : {borderSide? : lib4.BorderSide,insets? : lib6.EdgeInsetsGeometry}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UnderlineTabIndicator(_namedArguments? : {borderSide? : lib4.BorderSide,insets? : lib6.EdgeInsetsGeometry}) {
        let {borderSide,insets} = Object.assign({
            "borderSide" : new lib4.BorderSide({
                width : 2.0,color : lib5.Colors.white}),
            "insets" : lib6.EdgeInsets.zero}, _namedArguments );
        this.assert = assert;
        this.borderSide = borderSide;
        this.insets = insets;
    }
     : any;

     : any;

    borderSide : lib4.BorderSide;

    insets : lib6.EdgeInsetsGeometry;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpFrom(a : lib3.Decoration,t : double) : lib3.Decoration {
        if (is(a, UnderlineTabIndicator)) {
            return UnderlineTabIndicator({
                borderSide : lib4.BorderSide.lerp(a.borderSide,this.borderSide,t),insets : lib6.EdgeInsetsGeometry.lerp(a.insets,this.insets,t)});
        }
        return super.lerpFrom(a,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerpTo(b : lib3.Decoration,t : double) : lib3.Decoration {
        if (is(b, UnderlineTabIndicator)) {
            return UnderlineTabIndicator({
                borderSide : lib4.BorderSide.lerp(this.borderSide,b.borderSide,t),insets : lib6.EdgeInsetsGeometry.lerp(this.insets,b.insets,t)});
        }
        return super.lerpTo(b,t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createBoxPainter(onChanged? : any) : _UnderlinePainter {
        return _UnderlinePainter(this,onChanged);
    }
}

export namespace _UnderlinePainter {
    export type Constructors = lib3.BoxPainter.Constructors | '_UnderlinePainter';
    export type Interface = Omit<_UnderlinePainter, Constructors>;
}
@DartClass
export class _UnderlinePainter extends lib3.BoxPainter {
    constructor(decoration : UnderlineTabIndicator,onChanged : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _UnderlinePainter(decoration : UnderlineTabIndicator,onChanged : any) {
        this.assert = assert;
        this.decoration = decoration;
    }
     : any;

     : any;

    decoration : UnderlineTabIndicator;

    get borderSide() : lib4.BorderSide {
        return this.decoration.borderSide;
    }
    get insets() : lib6.EdgeInsetsGeometry {
        return this.decoration.insets;
    }
    _indicatorRectFor(rect : any,textDirection : any) : any {
        /* TODO (AssertStatementImpl) : assert (rect != null); */;
        /* TODO (AssertStatementImpl) : assert (textDirection != null); */;
        let indicator : any = this.insets.resolve(textDirection).deflateRect(rect);
        return Rect.fromLTWH(indicator.left,op(Op.MINUS,indicator.bottom,this.borderSide.width),indicator.width,this.borderSide.width);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,offset : any,configuration : lib7.ImageConfiguration) : any {
        /* TODO (AssertStatementImpl) : assert (configuration != null); */;
        /* TODO (AssertStatementImpl) : assert (configuration.size != null); */;
        let rect : any = op(Op.BITAND,offset,configuration.size);
        let textDirection : any = configuration.textDirection;
        let indicator : any = this._indicatorRectFor(rect,textDirection).deflate(this.borderSide.width / 2.0);
        let paint : any = ((_) : any =>  {
            {
                _.strokeCap = StrokeCap.square;
                return _;
            }
        })(this.borderSide.toPaint());
        canvas.drawLine(indicator.bottomLeft,indicator.bottomRight,paint);
    }
}

export class properties {
}
