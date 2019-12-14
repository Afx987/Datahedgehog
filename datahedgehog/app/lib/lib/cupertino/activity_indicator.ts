/** Library asset:datahedgehog_monitor/lib/lib/cupertino/activity_indicator.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as math from "@dart2ts/dart/math";
import * as lib8 from "./colors";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/rendering/custom_paint";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/animation/animation";

export namespace CupertinoActivityIndicator {
    export type Constructors = lib3.StatefulWidget.Constructors | 'CupertinoActivityIndicator';
    export type Interface = Omit<CupertinoActivityIndicator, Constructors>;
}
@DartClass
export class CupertinoActivityIndicator extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,animating? : boolean,radius? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoActivityIndicator(_namedArguments? : {key? : lib4.Key,animating? : boolean,radius? : double}) {
        let {key,animating,radius} = Object.assign({
            "animating" : true,
            "radius" : properties._kDefaultIndicatorRadius}, _namedArguments );
        this.assert = assert;
        this.animating = animating;
        this.radius = radius;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    animating : boolean;

    radius : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _CupertinoActivityIndicatorState {
        return _CupertinoActivityIndicatorState();
    }
}

export namespace _CupertinoActivityIndicatorState {
    export type Constructors = '_CupertinoActivityIndicatorState';
    export type Interface = Omit<_CupertinoActivityIndicatorState, Constructors>;
}
@DartClass
@With(any)
export class _CupertinoActivityIndicatorState extends any implements any.Interface {
    _controller : lib5.AnimationController;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._controller = lib5.AnimationController({
            duration : new core.DartDuration({
                seconds : 1}),vsync : this});
        if (widget.animating) this._controller.repeat();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : CupertinoActivityIndicator) : any {
        super.didUpdateWidget(oldWidget);
        if (widget.animating != oldWidget.animating) {
            if (widget.animating) this._controller.repeat();else this._controller.stop();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._controller.dispose();
        super.dispose();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return lib6.SizedBox({
            height : op(Op.TIMES,widget.radius,2),width : op(Op.TIMES,widget.radius,2),child : lib6.CustomPaint({
                painter : _CupertinoActivityIndicatorPainter({
                    position : this._controller,radius : widget.radius})})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoActivityIndicatorState() {
    }
}

export namespace _CupertinoActivityIndicatorPainter {
    export type Constructors = lib9.CustomPainter.Constructors | '_CupertinoActivityIndicatorPainter';
    export type Interface = Omit<_CupertinoActivityIndicatorPainter, Constructors>;
}
@DartClass
export class _CupertinoActivityIndicatorPainter extends lib9.CustomPainter {
    constructor(_namedArguments? : {position? : lib10.Animation<double>,radius? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoActivityIndicatorPainter(_namedArguments? : {position? : lib10.Animation<double>,radius? : double}) {
        let {position,radius} = Object.assign({
        }, _namedArguments );
        this.tickFundamentalRRect = RRect.fromLTRBXY(-radius,1.0 * radius / properties._kDefaultIndicatorRadius,-radius / 2.0,-1.0 * radius / properties._kDefaultIndicatorRadius,1.0,1.0);
        super.CustomPainter({
            repaint : position});
        this.position = position;
    }
    position : lib10.Animation<double>;

    tickFundamentalRRect : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    paint(canvas : any,size : any) : any {
        let paint : any = Paint();
        canvas.save();
        canvas.translate(op(Op.DIVIDE,size.width,2.0),op(Op.DIVIDE,size.height,2.0));
        let activeTick : number = new core.DartDouble((properties._kTickCount * this.position.value)).floor();
        for(let i : number = 0; i < properties._kTickCount; ++i){
            let t : double = new core.DartDouble((((i + activeTick) % properties._kTickCount) / properties._kHalfTickCount)).clamp(0.0,1.0);
            paint.color = Color.lerp(properties._kActiveTickColor,properties._kTickColor,t);
            canvas.drawRRect(this.tickFundamentalRRect,paint);
            canvas.rotate(-properties._kTwoPI / properties._kTickCount);
        }
        canvas.restore();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRepaint(oldPainter : _CupertinoActivityIndicatorPainter) : boolean {
        return oldPainter.position != this.position;
    }
}

export class properties {
    private static __$_kDefaultIndicatorRadius : double;
    static get _kDefaultIndicatorRadius() : double { 
        if (this.__$_kDefaultIndicatorRadius===undefined) {
            this.__$_kDefaultIndicatorRadius = 10.0;
        }
        return this.__$_kDefaultIndicatorRadius;
    }
    static set _kDefaultIndicatorRadius(__$value : double)  { 
        this.__$_kDefaultIndicatorRadius = __$value;
    }

    private static __$_kTwoPI : double;
    static get _kTwoPI() : double { 
        if (this.__$_kTwoPI===undefined) {
            this.__$_kTwoPI = op(Op.TIMES,math.pi,2.0);
        }
        return this.__$_kTwoPI;
    }
    static set _kTwoPI(__$value : double)  { 
        this.__$_kTwoPI = __$value;
    }

    private static __$_kTickCount : number;
    static get _kTickCount() : number { 
        if (this.__$_kTickCount===undefined) {
            this.__$_kTickCount = 12;
        }
        return this.__$_kTickCount;
    }
    static set _kTickCount(__$value : number)  { 
        this.__$_kTickCount = __$value;
    }

    private static __$_kHalfTickCount : number;
    static get _kHalfTickCount() : number { 
        if (this.__$_kHalfTickCount===undefined) {
            this.__$_kHalfTickCount = op(Op.QUOTIENT,properties._kTickCount,2);
        }
        return this.__$_kHalfTickCount;
    }
    static set _kHalfTickCount(__$value : number)  { 
        this.__$_kHalfTickCount = __$value;
    }

    private static __$_kTickColor : any;
    static get _kTickColor() : any { 
        if (this.__$_kTickColor===undefined) {
            this.__$_kTickColor = lib8.CupertinoColors.lightBackgroundGray;
        }
        return this.__$_kTickColor;
    }
    static set _kTickColor(__$value : any)  { 
        this.__$_kTickColor = __$value;
    }

    private static __$_kActiveTickColor : any;
    static get _kActiveTickColor() : any { 
        if (this.__$_kActiveTickColor===undefined) {
            this.__$_kActiveTickColor = Color(4288519581);
        }
        return this.__$_kActiveTickColor;
    }
    static set _kActiveTickColor(__$value : any)  { 
        this.__$_kActiveTickColor = __$value;
    }

}
