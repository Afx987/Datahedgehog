/** Library asset:datahedgehog_monitor/lib/lib/widgets/animated_cross_fade.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/rendering/stack";
import * as lib8 from "./basic";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib13 from "./transitions";
import * as lib14 from "./ticker_provider";
import * as lib15 from "./animated_size";

export enum CrossFadeState {
    showFirst,
    showSecond
}

export namespace AnimatedCrossFade {
    export type Constructors = lib3.StatefulWidget.Constructors | 'AnimatedCrossFade';
    export type Interface = Omit<AnimatedCrossFade, Constructors>;
}
@DartClass
export class AnimatedCrossFade extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,firstChild? : lib3.Widget,secondChild? : lib3.Widget,firstCurve? : lib5.Curve,secondCurve? : lib5.Curve,sizeCurve? : lib5.Curve,alignment? : lib6.AlignmentGeometry,crossFadeState? : CrossFadeState,duration? : core.DartDuration,layoutBuilder? : (topChild : lib3.Widget,topChildKey : lib4.Key,bottomChild : lib3.Widget,bottomChildKey : lib4.Key) => lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnimatedCrossFade(_namedArguments? : {key? : lib4.Key,firstChild? : lib3.Widget,secondChild? : lib3.Widget,firstCurve? : lib5.Curve,secondCurve? : lib5.Curve,sizeCurve? : lib5.Curve,alignment? : lib6.AlignmentGeometry,crossFadeState? : CrossFadeState,duration? : core.DartDuration,layoutBuilder? : (topChild : lib3.Widget,topChildKey : lib4.Key,bottomChild : lib3.Widget,bottomChildKey : lib4.Key) => lib3.Widget}) {
        let {key,firstChild,secondChild,firstCurve,secondCurve,sizeCurve,alignment,crossFadeState,duration,layoutBuilder} = Object.assign({
            "firstCurve" : lib5.Curves.linear,
            "secondCurve" : lib5.Curves.linear,
            "sizeCurve" : lib5.Curves.linear,
            "alignment" : lib6.Alignment.topCenter,
            "layoutBuilder" : AnimatedCrossFade.defaultLayoutBuilder.bind(this)}, _namedArguments );
        this.assert = assert;
        this.firstChild = firstChild;
        this.secondChild = secondChild;
        this.firstCurve = firstCurve;
        this.secondCurve = secondCurve;
        this.sizeCurve = sizeCurve;
        this.alignment = alignment;
        this.crossFadeState = crossFadeState;
        this.duration = duration;
        this.layoutBuilder = layoutBuilder;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    firstChild : lib3.Widget;

    secondChild : lib3.Widget;

    crossFadeState : CrossFadeState;

    duration : core.DartDuration;

    firstCurve : lib5.Curve;

    secondCurve : lib5.Curve;

    sizeCurve : lib5.Curve;

    alignment : lib6.AlignmentGeometry;

    layoutBuilder : (topChild : lib3.Widget,topChildKey : lib4.Key,bottomChild : lib3.Widget,bottomChildKey : lib4.Key) => lib3.Widget;

    static defaultLayoutBuilder(topChild : lib3.Widget,topChildKey : lib4.Key,bottomChild : lib3.Widget,bottomChildKey : lib4.Key) : lib3.Widget {
        return lib8.Stack({
            overflow : lib7.Overflow.visible,children : new core.DartList.literal<lib3.Widget>(lib8.Positioned({
                key : bottomChildKey,left : 0.0,top : 0.0,right : 0.0,child : bottomChild}),lib8.Positioned({
                key : topChildKey,child : topChild}))});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _AnimatedCrossFadeState {
        return _AnimatedCrossFadeState();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib9.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib9.EnumProperty('crossFadeState',this.crossFadeState));
        properties.add(lib9.DiagnosticsProperty('alignment',this.alignment,{
            defaultValue : lib6.Alignment.topCenter}));
    }
}

export namespace _AnimatedCrossFadeState {
    export type Constructors = '_AnimatedCrossFadeState';
    export type Interface = Omit<_AnimatedCrossFadeState, Constructors>;
}
@DartClass
@With(any)
export class _AnimatedCrossFadeState extends any implements any.Interface {
    _controller : lib10.AnimationController;

    _firstAnimation : lib11.Animation<double>;

    _secondAnimation : lib11.Animation<double>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._controller = lib10.AnimationController({
            duration : widget.duration,vsync : this});
        if (op(Op.EQUALS,widget.crossFadeState,CrossFadeState.showSecond)) this._controller.value = 1.0;
        this._firstAnimation = this._initAnimation(widget.firstCurve,true);
        this._secondAnimation = this._initAnimation(widget.secondCurve,false);
        this._controller.addStatusListener((status : lib11.AnimationStatus) =>  {
            setState(() =>  {
            });
        });
    }
    _initAnimation(curve : lib5.Curve,inverted : boolean) : lib11.Animation<double> {
        let result : lib11.Animation<double> = this._controller.drive(lib12.CurveTween({
            curve : curve}));
        if (inverted) result = result.drive(lib12.Tween({
            begin : 1.0,end : 0.0}));
        return result;
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
    didUpdateWidget(oldWidget : AnimatedCrossFade) : any {
        super.didUpdateWidget(oldWidget);
        if (widget.duration != oldWidget.duration) this._controller.duration = widget.duration;
        if (widget.firstCurve != oldWidget.firstCurve) this._firstAnimation = this._initAnimation(widget.firstCurve,true);
        if (widget.secondCurve != oldWidget.secondCurve) this._secondAnimation = this._initAnimation(widget.secondCurve,false);
        if (widget.crossFadeState != oldWidget.crossFadeState) {
            switch (widget.crossFadeState) {
                case CrossFadeState.showFirst:
                    this._controller.reverse();
                    break;
                case CrossFadeState.showSecond:
                    this._controller.forward();
                    break;
            }
        }
    }
    get _isTransitioning() : boolean {
        return op(Op.EQUALS,this._controller.status,lib11.AnimationStatus.forward) || op(Op.EQUALS,this._controller.status,lib11.AnimationStatus.reverse);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let kFirstChildKey : lib4.Key = lib4.ValueKey(CrossFadeState.showFirst);
        let kSecondChildKey : lib4.Key = lib4.ValueKey(CrossFadeState.showSecond);
        let transitioningForwards : boolean = op(Op.EQUALS,this._controller.status,lib11.AnimationStatus.completed) || op(Op.EQUALS,this._controller.status,lib11.AnimationStatus.forward);
        let topKey : lib4.Key;
        let topChild : lib3.Widget;
        let topAnimation : lib11.Animation<double>;
        let bottomKey : lib4.Key;
        let bottomChild : lib3.Widget;
        let bottomAnimation : lib11.Animation<double>;
        if (transitioningForwards) {
            topKey = kSecondChildKey;
            topChild = widget.secondChild;
            topAnimation = this._secondAnimation;
            bottomKey = kFirstChildKey;
            bottomChild = widget.firstChild;
            bottomAnimation = this._firstAnimation;
        }else {
            topKey = kFirstChildKey;
            topChild = widget.firstChild;
            topAnimation = this._firstAnimation;
            bottomKey = kSecondChildKey;
            bottomChild = widget.secondChild;
            bottomAnimation = this._secondAnimation;
        }
        bottomChild = lib14.TickerMode({
            key : bottomKey,enabled : this._isTransitioning,child : lib8.ExcludeSemantics({
                excluding : true,child : lib13.FadeTransition({
                    opacity : bottomAnimation,child : bottomChild})})});
        topChild = lib14.TickerMode({
            key : topKey,enabled : true,child : lib8.ExcludeSemantics({
                excluding : false,child : lib13.FadeTransition({
                    opacity : topAnimation,child : topChild})})});
        return lib8.ClipRect({
            child : lib15.AnimatedSize({
                alignment : widget.alignment,duration : widget.duration,curve : widget.sizeCurve,vsync : this,child : widget.layoutBuilder(topChild,topKey,bottomChild,bottomKey)})});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(description : lib9.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(description);
        description.add(lib9.EnumProperty('crossFadeState',widget.crossFadeState));
        description.add(lib9.DiagnosticsProperty('controller',this._controller,{
            showName : false}));
        description.add(lib9.DiagnosticsProperty('alignment',widget.alignment,{
            defaultValue : lib6.Alignment.topCenter}));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AnimatedCrossFadeState() {
    }
}

export class properties {
}
