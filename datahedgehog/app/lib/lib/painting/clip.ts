/** Library asset:datahedgehog_monitor/lib/lib/painting/clip.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace ClipContext {
    export type Constructors = 'ClipContext';
    export type Interface = Omit<ClipContext, Constructors>;
}
@DartClass
export class ClipContext {
    @AbstractProperty
    get canvas() : any{ throw 'abstract'}
    _clipAndPaint(canvasClipCall : (doAntiAlias : boolean) => void,clipBehavior : any,bounds : any,painter : () => void) : void {
        /* TODO (AssertStatementImpl) : assert (canvasClipCall != null); */;
        this.canvas.save();
        switch (clipBehavior) {
            case Clip.none:
                break;
            case Clip.hardEdge:
                canvasClipCall(false);
                break;
            case Clip.antiAlias:
                canvasClipCall(true);
                break;
            case Clip.antiAliasWithSaveLayer:
                canvasClipCall(true);
                this.canvas.saveLayer(bounds,Paint());
                break;
        }
        painter();
        if (op(Op.EQUALS,clipBehavior,Clip.antiAliasWithSaveLayer)) {
            this.canvas.restore();
        }
        this.canvas.restore();
    }
    clipPathAndPaint(path : any,clipBehavior : any,bounds : any,painter : () => void) : void {
        this._clipAndPaint((doAntiAias : boolean) =>  {
            return this.canvas.clipPath(path,{
                doAntiAlias : doAntiAias});
        },clipBehavior,bounds,painter);
    }
    clipRRectAndPaint(rrect : any,clipBehavior : any,bounds : any,painter : () => void) : void {
        this._clipAndPaint((doAntiAias : boolean) =>  {
            return this.canvas.clipRRect(rrect,{
                doAntiAlias : doAntiAias});
        },clipBehavior,bounds,painter);
    }
    clipRectAndPaint(rect : any,clipBehavior : any,bounds : any,painter : () => void) : void {
        this._clipAndPaint((doAntiAias : boolean) =>  {
            return this.canvas.clipRect(rect,{
                doAntiAlias : doAntiAias});
        },clipBehavior,bounds,painter);
    }
    constructor() {
    }
    @defaultConstructor
    ClipContext() {
    }
}

export class properties {
}
