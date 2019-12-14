/** Library asset:datahedgehog_monitor/lib/lib/rendering/animated_size.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./shifted_box";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/scheduler/ticker";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib7 from "./box";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/animation/tween";
import * as lib11 from "./object";

export var detach : () => any = () : any =>  {
    properties._controller.stop();
    super.detach();
};
export var performLayout : () => any = () : any =>  {
    properties._lastValue = properties._controller.value;
    properties._hasVisualOverflow = false;
    if (op(Op.EQUALS,child,null) || constraints.isTight) {
        properties._controller.stop();
        size = properties._sizeTween.begin = properties._sizeTween.end = constraints.smallest;
        properties._state = RenderAnimatedSizeState.start;
        ((_808_)=>(!!_808_)?_808_.layout(constraints):null)(child);
        return;
    }
    child.layout(constraints,{
        parentUsesSize : true});
    /* TODO (AssertStatementImpl) : assert (_state != null); */;
    switch (properties._state) {
        case RenderAnimatedSizeState.start:
            _layoutStart();
            break;
        case RenderAnimatedSizeState.stable:
            _layoutStable();
            break;
        case RenderAnimatedSizeState.changed:
            _layoutChanged();
            break;
        case RenderAnimatedSizeState.unstable:
            _layoutUnstable();
            break;
    }
    size = constraints.constrain(properties._animatedSize);
    alignChild();
    if (op(Op.LT,size.width,properties._sizeTween.end.width) || op(Op.LT,size.height,properties._sizeTween.end.height)) properties._hasVisualOverflow = true;
};
export var _restartAnimation : () => any = () : any =>  {
    properties._lastValue = 0.0;
    properties._controller.forward({
        from : 0.0});
};
export var _layoutStart : () => any = () : any =>  {
    properties._sizeTween.begin = properties._sizeTween.end = debugAdoptSize(child.size);
    properties._state = RenderAnimatedSizeState.stable;
};
export var _layoutStable : () => any = () : any =>  {
    if (properties._sizeTween.end != child.size) {
        properties._sizeTween.begin = size;
        properties._sizeTween.end = debugAdoptSize(child.size);
        _restartAnimation();
        properties._state = RenderAnimatedSizeState.changed;
    }else if (properties._controller.value == properties._controller.upperBound) {
        properties._sizeTween.begin = properties._sizeTween.end = debugAdoptSize(child.size);
    }else if (!properties._controller.isAnimating) {
        properties._controller.forward();
    }
};
export var _layoutChanged : () => any = () : any =>  {
    if (properties._sizeTween.end != child.size) {
        properties._sizeTween.begin = properties._sizeTween.end = debugAdoptSize(child.size);
        _restartAnimation();
        properties._state = RenderAnimatedSizeState.unstable;
    }else {
        properties._state = RenderAnimatedSizeState.stable;
        if (!properties._controller.isAnimating) properties._controller.forward();
    }
};
export var _layoutUnstable : () => any = () : any =>  {
    if (properties._sizeTween.end != child.size) {
        properties._sizeTween.begin = properties._sizeTween.end = debugAdoptSize(child.size);
        _restartAnimation();
    }else {
        properties._controller.stop();
        properties._state = RenderAnimatedSizeState.stable;
    }
};
export var paint : (context : lib11.PaintingContext,offset : any) => any = (context : lib11.PaintingContext,offset : any) : any =>  {
    if (child != null && properties._hasVisualOverflow) {
        let rect : any = op(Op.BITAND,Offset.zero,size);
        context.pushClipRect(needsCompositing,offset,rect,super.paint);
    }else {
        super.paint(context,offset);
    }
};
export enum RenderAnimatedSizeState {
    start,
    stable,
    changed,
    unstable
}

export namespace RenderAnimatedSize {
    export type Constructors = lib3.RenderAligningShiftedBox.Constructors | 'RenderAnimatedSize';
    export type Interface = Omit<RenderAnimatedSize, Constructors>;
}
@DartClass
export class RenderAnimatedSize extends lib3.RenderAligningShiftedBox {
    constructor(_namedArguments? : {vsync? : lib4.TickerProvider,duration? : core.DartDuration,curve? : lib5.Curve,alignment? : lib6.AlignmentGeometry,textDirection? : any,child? : lib7.RenderBox}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderAnimatedSize(_namedArguments? : {vsync? : lib4.TickerProvider,duration? : core.DartDuration,curve? : lib5.Curve,alignment? : lib6.AlignmentGeometry,textDirection? : any,child? : lib7.RenderBox}) {
        let {vsync,duration,curve,alignment,textDirection,child} = Object.assign({
            "curve" : lib5.Curves.linear,
            "alignment" : lib6.Alignment.center}, _namedArguments );
        this._vsync = properties.vsync;
        this._controller = ((_) : any =>  {
            {
                addListener(() =>  {
                    if (this._controller.value != properties._lastValue) this.markNeedsLayout();
                });
                return _;
            }
        })(lib8.AnimationController({
            vsync : properties.vsync,duration : properties.duration}));
        this._animation = lib9.CurvedAnimation({
            parent : this._controller,curve : properties.curve});
        this.assert = assert;
    }
     : any;

     : any;

     : any;

    _vsync;
    super;

     : any;

    child;
    alignment;

    alignment;
    textDirection;

     : any;

    _controller;

    _animation;

}

export class properties {
    private static __$_controller : lib8.AnimationController;
    static get _controller() : lib8.AnimationController { 
        return this.__$_controller;
    }
    static set _controller(__$value : lib8.AnimationController)  { 
        this.__$_controller = __$value;
    }

    private static __$_animation : lib9.CurvedAnimation;
    static get _animation() : lib9.CurvedAnimation { 
        return this.__$_animation;
    }
    static set _animation(__$value : lib9.CurvedAnimation)  { 
        this.__$_animation = __$value;
    }

    private static __$_sizeTween : lib10.SizeTween;
    static get _sizeTween() : lib10.SizeTween { 
        if (this.__$_sizeTween===undefined) {
            this.__$_sizeTween = lib10.SizeTween();
        }
        return this.__$_sizeTween;
    }
    static set _sizeTween(__$value : lib10.SizeTween)  { 
        this.__$_sizeTween = __$value;
    }

    private static __$_hasVisualOverflow : boolean;
    static get _hasVisualOverflow() : boolean { 
        return this.__$_hasVisualOverflow;
    }
    static set _hasVisualOverflow(__$value : boolean)  { 
        this.__$_hasVisualOverflow = __$value;
    }

    private static __$_lastValue : double;
    static get _lastValue() : double { 
        return this.__$_lastValue;
    }
    static set _lastValue(__$value : double)  { 
        this.__$_lastValue = __$value;
    }

    static get state() : RenderAnimatedSizeState {
        return properties._state;
    }
    private static __$_state : RenderAnimatedSizeState;
    static get _state() : RenderAnimatedSizeState { 
        if (this.__$_state===undefined) {
            this.__$_state = RenderAnimatedSizeState.start;
        }
        return this.__$_state;
    }
    static set _state(__$value : RenderAnimatedSizeState)  { 
        this.__$_state = __$value;
    }

    static get duration() : core.DartDuration {
        return properties._controller.duration;
    }
    static set duration(value : core.DartDuration) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,value,properties._controller.duration)) return;
        properties._controller.duration = value;
    }
    static get curve() : lib5.Curve {
        return properties._animation.curve;
    }
    static set curve(value : lib5.Curve) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,value,properties._animation.curve)) return;
        properties._animation.curve = value;
    }
    static get isAnimating() : boolean {
        return properties._controller.isAnimating;
    }
    static get vsync() : lib4.TickerProvider {
        return properties._vsync;
    }
    private static __$_vsync : lib4.TickerProvider;
    static get _vsync() : lib4.TickerProvider { 
        return this.__$_vsync;
    }
    static set _vsync(__$value : lib4.TickerProvider)  { 
        this.__$_vsync = __$value;
    }

    static set vsync(value : lib4.TickerProvider) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,value,properties._vsync)) return;
        properties._vsync = value;
        properties._controller.resync(properties.vsync);
    }
    static get _animatedSize() : any {
        return properties._sizeTween.evaluate(properties._animation);
    }
}
