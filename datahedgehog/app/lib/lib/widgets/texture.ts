/** Library asset:datahedgehog_monitor/lib/lib/widgets/texture.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/rendering/texture";

export namespace Texture {
    export type Constructors = lib3.LeafRenderObjectWidget.Constructors | 'Texture';
    export type Interface = Omit<Texture, Constructors>;
}
@DartClass
export class Texture extends lib3.LeafRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,textureId? : number}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Texture(_namedArguments? : {key? : lib4.Key,textureId? : number}) {
        let {key,textureId} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.textureId = textureId;
    }
     : any;

     : any;

     : any;

    textureId : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib5.TextureBox {
        return lib5.TextureBox({
            textureId : this.textureId});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib5.TextureBox) : any {
        renderObject.textureId = this.textureId;
    }
}

export class properties {
}
