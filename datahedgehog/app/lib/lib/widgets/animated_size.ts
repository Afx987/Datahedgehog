/** Library asset:datahedgehog_monitor/lib/lib/widgets/animated_size.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/scheduler/ticker";
import * as lib8 from "./basic";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/rendering/animated_size";

export namespace AnimatedSize {
    export type Constructors = lib3.SingleChildRenderObjectWidget.Constructors | 'AnimatedSize';
    export type Interface = Omit<AnimatedSize, Constructors>;
}
@DartClass
export class AnimatedSize extends lib3.SingleChildRenderObjectWidget {
    constructor(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,alignment? : lib5.AlignmentGeometry,curve? : lib6.Curve,duration? : core.DartDuration,vsync? : lib7.TickerProvider}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnimatedSize(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,alignment? : lib5.AlignmentGeometry,curve? : lib6.Curve,duration? : core.DartDuration,vsync? : lib7.TickerProvider}) {
        let {key,child,alignment,curve,duration,vsync} = Object.assign({
            "alignment" : lib5.Alignment.center,
            "curve" : lib6.Curves.linear}, _namedArguments );
        super.SingleChildRenderObjectWidget({
            key : key,child : child});
        this.alignment = alignment;
        this.curve = curve;
        this.duration = duration;
        this.vsync = vsync;
    }
    alignment : lib5.AlignmentGeometry;

    curve : lib6.Curve;

    duration : core.DartDuration;

    vsync : lib7.TickerProvider;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createRenderObject(context : lib3.BuildContext) : lib9.RenderAnimatedSize {
        return lib9.RenderAnimatedSize({
            alignment : this.alignment,duration : this.duration,curve : this.curve,vsync : this.vsync,textDirection : lib8.Directionality.of(context)});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateRenderObject(context : lib3.BuildContext,renderObject : lib9.RenderAnimatedSize) : any {
        ((_) : lib9.RenderAnimatedSize =>  {
            {
                _.alignment = this.alignment;
                _.duration = this.duration;
                _.curve = this.curve;
                _.vsync = this.vsync;
                _.textDirection = lib8.Directionality.of(context);
                return _;
            }
        })(renderObject);
    }
}

export class properties {
}
