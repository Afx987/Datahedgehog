/** Library asset:datahedgehog_monitor/lib/lib/cupertino/thumb_painter.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./colors";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/box_shadow";

export namespace CupertinoThumbPainter {
    export type Constructors = 'CupertinoThumbPainter';
    export type Interface = Omit<CupertinoThumbPainter, Constructors>;
}
@DartClass
export class CupertinoThumbPainter {
    constructor(_namedArguments? : {color? : any,shadowColor? : any}) {
    }
    @defaultConstructor
    CupertinoThumbPainter(_namedArguments? : {color? : any,shadowColor? : any}) {
        let {color,shadowColor} = Object.assign({
            "color" : lib3.CupertinoColors.white,
            "shadowColor" : new bare.createInstance(any,null,738197504)}, _namedArguments );
        this._shadowPaint = lib4.BoxShadow({
            color : shadowColor,blurRadius : 1.0}).toPaint();
        this.color = color;
        this.shadowColor = shadowColor;
    }
    color : any;

    shadowColor : any;

    _shadowPaint : any;

    private static __$radius : double;
    static get radius() : double { 
        if (this.__$radius===undefined) {
            this.__$radius = 14.0;
        }
        return this.__$radius;
    }

    private static __$extension : double;
    static get extension() : double { 
        if (this.__$extension===undefined) {
            this.__$extension = 7.0;
        }
        return this.__$extension;
    }

    paint(canvas : any,rect : any) : any {
        let rrect : any = RRect.fromRectAndRadius(rect,Radius.circular(op(Op.DIVIDE,rect.shortestSide,2.0)));
        canvas.drawRRect(rrect,this._shadowPaint);
        canvas.drawRRect(rrect.shift(new bare.createInstance(any,null,0.0,3.0)),this._shadowPaint);
        canvas.drawRRect(rrect,((_) : any =>  {
            {
                _.color = this.color;
                return _;
            }
        })(Paint()));
    }
}

export class properties {
}
