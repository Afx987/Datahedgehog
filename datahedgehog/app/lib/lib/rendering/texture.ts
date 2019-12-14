/** Library asset:datahedgehog_monitor/lib/lib/rendering/texture.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./box";
import * as lib4 from "./object";
import * as lib5 from "./layer";

export namespace TextureBox {
    export type Constructors = lib3.RenderBox.Constructors | 'TextureBox';
    export type Interface = Omit<TextureBox, Constructors>;
}
@DartClass
export class TextureBox extends lib3.RenderBox {
    constructor(_namedArguments? : {textureId? : number}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TextureBox(_namedArguments? : {textureId? : number}) {
        let {textureId} = Object.assign({
        }, _namedArguments );
        this._textureId = this.textureId;
        this.assert = assert;
    }
     : any;

    _textureId;

    get textureId() : number {
        return this._textureId;
    }
    _textureId : number;

    set textureId(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (value != this._textureId) {
            this._textureId = value;
            this.markNeedsPaint();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sizedByParent() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get alwaysNeedsCompositing() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isRepaintBoundary() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performResize() : any {
        this.size = this.constraints.biggest;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hitTestSelf(position : any) : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(context : lib4.PaintingContext,offset : any) : any {
        if (op(Op.EQUALS,this._textureId,null)) return;
        context.addLayer(lib5.TextureLayer({
            rect : Rect.fromLTWH(offset.dx,offset.dy,this.size.width,this.size.height),textureId : this._textureId}));
    }
}

export class properties {
}
