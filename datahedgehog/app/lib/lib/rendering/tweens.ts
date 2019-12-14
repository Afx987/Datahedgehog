/** Library asset:datahedgehog_monitor/lib/lib/rendering/tweens.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/fractional_offset";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/alignment";

export namespace FractionalOffsetTween {
    export type Constructors = lib3.Tween.Constructors | 'FractionalOffsetTween';
    export type Interface = Omit<FractionalOffsetTween, Constructors>;
}
@DartClass
export class FractionalOffsetTween extends lib3.Tween<lib4.FractionalOffset> {
    constructor(_namedArguments? : {begin? : lib4.FractionalOffset,end? : lib4.FractionalOffset}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FractionalOffsetTween(_namedArguments? : {begin? : lib4.FractionalOffset,end? : lib4.FractionalOffset}) {
        let {begin,end} = Object.assign({
        }, _namedArguments );
        super.Tween({
            begin : begin,end : end});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : lib4.FractionalOffset {
        return lib4.FractionalOffset.lerp(this.begin,this.end,t);
    }
}

export namespace AlignmentTween {
    export type Constructors = lib3.Tween.Constructors | 'AlignmentTween';
    export type Interface = Omit<AlignmentTween, Constructors>;
}
@DartClass
export class AlignmentTween extends lib3.Tween<lib5.Alignment> {
    constructor(_namedArguments? : {begin? : lib5.Alignment,end? : lib5.Alignment}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AlignmentTween(_namedArguments? : {begin? : lib5.Alignment,end? : lib5.Alignment}) {
        let {begin,end} = Object.assign({
        }, _namedArguments );
        super.Tween({
            begin : begin,end : end});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : lib5.Alignment {
        return lib5.Alignment.lerp(this.begin,this.end,t);
    }
}

export namespace AlignmentGeometryTween {
    export type Constructors = lib3.Tween.Constructors | 'AlignmentGeometryTween';
    export type Interface = Omit<AlignmentGeometryTween, Constructors>;
}
@DartClass
export class AlignmentGeometryTween extends lib3.Tween<lib5.AlignmentGeometry> {
    constructor(_namedArguments? : {begin? : lib5.AlignmentGeometry,end? : lib5.AlignmentGeometry}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AlignmentGeometryTween(_namedArguments? : {begin? : lib5.AlignmentGeometry,end? : lib5.AlignmentGeometry}) {
        let {begin,end} = Object.assign({
        }, _namedArguments );
        super.Tween({
            begin : begin,end : end});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lerp(t : double) : lib5.AlignmentGeometry {
        return lib5.AlignmentGeometry.lerp(this.begin,this.end,t);
    }
}

export class properties {
}
