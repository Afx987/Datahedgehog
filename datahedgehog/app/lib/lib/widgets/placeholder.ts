/** Library asset:datahedgehog_monitor/lib/lib/widgets/placeholder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/rendering/custom_paint";
import * as lib4 from "./framework";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib6 from "./basic";

export namespace _PlaceholderPainter {
    export type Constructors = lib3.CustomPainter.Constructors | '_PlaceholderPainter';
    export type Interface = Omit<_PlaceholderPainter, Constructors>;
}
@DartClass
export class _PlaceholderPainter extends lib3.CustomPainter {
    constructor(_namedArguments? : {color? : any,strokeWidth? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _PlaceholderPainter(_namedArguments? : {color? : any,strokeWidth? : double}) {
        let {color,strokeWidth} = Object.assign({
        }, _namedArguments );
        this.color = color;
        this.strokeWidth = strokeWidth;
    }
    color : any;

    strokeWidth : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,size : any) : any {
        let paint : any = ((_) : any =>  {
            {
                _.color = this.color;
                _.style = PaintingStyle.stroke;
                _.strokeWidth = this.strokeWidth;
                return _;
            }
        })(Paint());
        let rect : any = op(Op.BITAND,Offset.zero,size);
        let path : any = ((_) : any =>  {
            {
                addRect(rect);
                addPolygon(new core.DartList.literal<any>(rect.topRight,rect.bottomLeft),false);
                addPolygon(new core.DartList.literal<any>(rect.topLeft,rect.bottomRight),false);
                return _;
            }
        })(Path());
        canvas.drawPath(path,paint);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRepaint(oldPainter : _PlaceholderPainter) : boolean {
        return oldPainter.color != this.color || oldPainter.strokeWidth != this.strokeWidth;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTest(position : any) : boolean {
        return false;
    }
}

export namespace Placeholder {
    export type Constructors = lib4.StatelessWidget.Constructors | 'Placeholder';
    export type Interface = Omit<Placeholder, Constructors>;
}
@DartClass
export class Placeholder extends lib4.StatelessWidget {
    constructor(_namedArguments? : {key? : lib5.Key,color? : any,strokeWidth? : double,fallbackWidth? : double,fallbackHeight? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Placeholder(_namedArguments? : {key? : lib5.Key,color? : any,strokeWidth? : double,fallbackWidth? : double,fallbackHeight? : double}) {
        let {key,color,strokeWidth,fallbackWidth,fallbackHeight} = Object.assign({
            "color" : new bare.createInstance(any,null,4282735204),
            "strokeWidth" : 2.0,
            "fallbackWidth" : 400.0,
            "fallbackHeight" : 400.0}, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.color = color;
        this.strokeWidth = strokeWidth;
        this.fallbackWidth = fallbackWidth;
        this.fallbackHeight = fallbackHeight;
    }
    color : any;

    strokeWidth : double;

    fallbackWidth : double;

    fallbackHeight : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib4.BuildContext) : lib4.Widget {
        return lib6.LimitedBox({
            maxWidth : this.fallbackWidth,maxHeight : this.fallbackHeight,child : lib6.CustomPaint({
                size : Size.infinite,foregroundPainter : _PlaceholderPainter({
                    color : this.color,strokeWidth : this.strokeWidth})})});
    }
}

export class properties {
}
