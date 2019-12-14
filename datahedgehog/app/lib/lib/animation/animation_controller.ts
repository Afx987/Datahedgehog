/** Library asset:datahedgehog_monitor/lib/lib/animation/animation_controller.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/physics/spring_simulation";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/physics/tolerance";
import * as lib5 from "./animation";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/scheduler/ticker";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/physics/simulation";
import * as lib8 from "./curves";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/semantics/binding";

export var toStringDetails : () => string = () : string =>  {
    let paused : string = properties.isAnimating ? '' : '; paused';
    let ticker : string = op(Op.EQUALS,properties._ticker,null) ? '; DISPOSED' : (properties._ticker.muted ? '; silenced' : '');
    let label : string = op(Op.EQUALS,properties.debugLabel,null) ? '' : `; for ${properties.debugLabel}`;
    let more : string = `${super.toStringDetails()} ${new core.DartDouble(properties.value).toStringAsFixed(3)}`;
    return `${more}${paused}${ticker}${label}`;
};
export var _tick : (elapsed : core.DartDuration) => any = (elapsed : core.DartDuration) : any =>  {
    properties._lastElapsedDuration = elapsed;
    let elapsedInSeconds : double = new core.DartInt(elapsed.inMicroseconds).toDouble() / core.DartDuration.microsecondsPerSecond;
    /* TODO (AssertStatementImpl) : assert (elapsedInSeconds >= 0.0); */;
    properties._value = new core.DartDouble(properties._simulation.x(elapsedInSeconds)).clamp(properties.lowerBound,properties.upperBound);
    if (properties._simulation.isDone(elapsedInSeconds)) {
        properties._status = (op(Op.EQUALS,properties._direction,_AnimationDirection.forward)) ? lib5.AnimationStatus.completed : lib5.AnimationStatus.dismissed;
        stop({
            canceled : false});
    }
    notifyListeners();
    _checkStatusChanged();
};
export var _internalSetValue : (value : any) => any = (value : any) =>  {
};
export var _checkStatusChanged : () => any = () : any =>  {
    let newStatus : lib5.AnimationStatus = properties.status;
    if (properties._lastReportedStatus != newStatus) {
        properties._lastReportedStatus = newStatus;
        notifyStatusListeners(newStatus);
    }
};
export var resync : (vsync : lib6.TickerProvider) => any = (vsync : lib6.TickerProvider) : any =>  {
    let oldTicker : lib6.Ticker = properties._ticker;
    properties._ticker = vsync.createTicker(_tick);
    properties._ticker.absorbTicker(oldTicker);
};
export var reset : () => any = () : any =>  {
    properties.value = properties.lowerBound;
};
export var _internalSetValue : (newValue : double) => any = (newValue : double) : any =>  {
    properties._value = new core.DartDouble(newValue).clamp(properties.lowerBound,properties.upperBound);
    if (properties._value == properties.lowerBound) {
        properties._status = lib5.AnimationStatus.dismissed;
    }else if (properties._value == properties.upperBound) {
        properties._status = lib5.AnimationStatus.completed;
    }else {
        properties._status = (op(Op.EQUALS,properties._direction,_AnimationDirection.forward)) ? lib5.AnimationStatus.forward : lib5.AnimationStatus.reverse;
    }
};
export var forward : (_namedArguments? : {from? : double}) => lib6.TickerFuture = (_namedArguments? : {from? : double}) : lib6.TickerFuture =>  {
    let {from} = Object.assign({
    }, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (() {if (duration == null) {throw FlutterError('AnimationController.forward() called with no default Duration.\n' 'The "duration" property should be set, either in the constructor or later, before ' 'calling the forward() function.');} return true;}()); */;
    /* TODO (AssertStatementImpl) : assert (_ticker != null, 'AnimationController.forward() called after AnimationController.dispose()\n' 'AnimationController methods should not be used after calling dispose.'); */;
    properties._direction = _AnimationDirection.forward;
    if (from != null) properties.value = from;
    return _animateToInternal(properties.upperBound);
};
export var reverse : (_namedArguments? : {from? : double}) => lib6.TickerFuture = (_namedArguments? : {from? : double}) : lib6.TickerFuture =>  {
    let {from} = Object.assign({
    }, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (() {if (duration == null) {throw FlutterError('AnimationController.reverse() called with no default Duration.\n' 'The "duration" property should be set, either in the constructor or later, before ' 'calling the reverse() function.');} return true;}()); */;
    /* TODO (AssertStatementImpl) : assert (_ticker != null, 'AnimationController.reverse() called after AnimationController.dispose()\n' 'AnimationController methods should not be used after calling dispose.'); */;
    properties._direction = _AnimationDirection.reverse;
    if (from != null) properties.value = from;
    return _animateToInternal(properties.lowerBound);
};
export var animateTo : (target : double,_namedArguments? : {duration? : core.DartDuration,curve? : lib8.Curve}) => lib6.TickerFuture = (target : double,_namedArguments? : {duration? : core.DartDuration,curve? : lib8.Curve}) : lib6.TickerFuture =>  {
    let {duration,curve} = Object.assign({
        "curve" : lib8.Curves.linear}, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (_ticker != null, 'AnimationController.animateTo() called after AnimationController.dispose()\n' 'AnimationController methods should not be used after calling dispose.'); */;
    properties._direction = _AnimationDirection.forward;
    return _animateToInternal(target,{
        duration : duration,curve : curve});
};
export var animateBack : (target : double,_namedArguments? : {duration? : core.DartDuration,curve? : lib8.Curve}) => lib6.TickerFuture = (target : double,_namedArguments? : {duration? : core.DartDuration,curve? : lib8.Curve}) : lib6.TickerFuture =>  {
    let {duration,curve} = Object.assign({
        "curve" : lib8.Curves.linear}, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (_ticker != null, 'AnimationController.animateBack() called after AnimationController.dispose()\n' 'AnimationController methods should not be used after calling dispose.'); */;
    properties._direction = _AnimationDirection.reverse;
    return _animateToInternal(target,{
        duration : duration,curve : curve});
};
export var _animateToInternal : (target : double,_namedArguments? : {duration? : core.DartDuration,curve? : lib8.Curve,animationBehavior? : AnimationBehavior}) => lib6.TickerFuture = (target : double,_namedArguments? : {duration? : core.DartDuration,curve? : lib8.Curve,animationBehavior? : AnimationBehavior}) : lib6.TickerFuture =>  {
    let {duration,curve,animationBehavior} = Object.assign({
        "curve" : lib8.Curves.linear}, _namedArguments );
    let behavior : AnimationBehavior = (animationBehavior || this.animationBehavior);
    let scale : double = 1.0;
    if (lib9.properties.SemanticsBinding.instance.disableAnimations) {
        switch (behavior) {
            case AnimationBehavior.normal:
                scale = 0.05;
                break;
            case AnimationBehavior.preserve:
                break;
        }
    }
    let simulationDuration : core.DartDuration = duration;
    if (op(Op.EQUALS,simulationDuration,null)) {
        /* TODO (AssertStatementImpl) : assert (() {if (this.duration == null) {throw FlutterError('AnimationController.animateTo() called with no explicit Duration and no default Duration.\n' 'Either the "duration" argument to the animateTo() method should be provided, or the ' '"duration" property should be set, either in the constructor or later, before ' 'calling the animateTo() function.');} return true;}()); */;
        let range : double = op(Op.MINUS,properties.upperBound,properties.lowerBound);
        let remainingFraction : double = new core.DartDouble(range).isFinite ? new core.DartDouble((target - properties._value)).abs() / range : 1.0;
        simulationDuration = op(Op.TIMES,this.duration,remainingFraction);
    }else if (target == properties.value) {
        simulationDuration = core.DartDuration.zero;
    }
    stop();
    if (op(Op.EQUALS,simulationDuration,core.DartDuration.zero)) {
        if (properties.value != target) {
            properties._value = new core.DartDouble(target).clamp(properties.lowerBound,properties.upperBound);
            notifyListeners();
        }
        properties._status = (op(Op.EQUALS,properties._direction,_AnimationDirection.forward)) ? lib5.AnimationStatus.completed : lib5.AnimationStatus.dismissed;
        _checkStatusChanged();
        return lib6.TickerFuture.complete();
    }
    /* TODO (AssertStatementImpl) : assert (simulationDuration > Duration.zero); */;
    /* TODO (AssertStatementImpl) : assert (!isAnimating); */;
    return _startSimulation(_InterpolationSimulation(properties._value,target,simulationDuration,curve,scale));
};
export var repeat : (_namedArguments? : {min? : double,max? : double,reverse? : boolean,period? : core.DartDuration}) => lib6.TickerFuture = (_namedArguments? : {min? : double,max? : double,reverse? : boolean,period? : core.DartDuration}) : lib6.TickerFuture =>  {
    let {min,max,reverse,period} = Object.assign({
        "reverse" : false}, _namedArguments );
    min = ( min ) || ( properties.lowerBound );
    max = ( max ) || ( properties.upperBound );
    period = ( period ) || ( properties.duration );
    /* TODO (AssertStatementImpl) : assert (() {if (period == null) {throw FlutterError('AnimationController.repeat() called without an explicit period and with no default Duration.\n' 'Either the "period" argument to the repeat() method should be provided, or the ' '"duration" property should be set, either in the constructor or later, before ' 'calling the repeat() function.');} return true;}()); */;
    /* TODO (AssertStatementImpl) : assert (max >= min); */;
    /* TODO (AssertStatementImpl) : assert (max <= upperBound && min >= lowerBound); */;
    /* TODO (AssertStatementImpl) : assert (reverse != null); */;
    return animateWith(_RepeatingSimulation(properties._value,min,max,reverse,period));
};
export var fling : (_namedArguments? : {velocity? : double,animationBehavior? : AnimationBehavior}) => lib6.TickerFuture = (_namedArguments? : {velocity? : double,animationBehavior? : AnimationBehavior}) : lib6.TickerFuture =>  {
    let {velocity,animationBehavior} = Object.assign({
        "velocity" : 1.0}, _namedArguments );
    properties._direction = velocity < 0.0 ? _AnimationDirection.reverse : _AnimationDirection.forward;
    let target : double = velocity < 0.0 ? op(Op.MINUS,properties.lowerBound,properties._kFlingTolerance.distance) : op(Op.PLUS,properties.upperBound,properties._kFlingTolerance.distance);
    let scale : double = 1.0;
    let behavior : AnimationBehavior = (animationBehavior || this.animationBehavior);
    if (lib9.properties.SemanticsBinding.instance.disableAnimations) {
        switch (behavior) {
            case AnimationBehavior.normal:
                scale = 200.0;
                break;
            case AnimationBehavior.preserve:
                break;
        }
    }
    let simulation : lib7.Simulation = ((_) : any =>  {
        {
            _.tolerance = properties._kFlingTolerance;
            return _;
        }
    })(lib3.SpringSimulation(properties._kFlingSpringDescription,properties.value,target,velocity * scale));
    return animateWith(simulation);
};
export var animateWith : (simulation : lib7.Simulation) => lib6.TickerFuture = (simulation : lib7.Simulation) : lib6.TickerFuture =>  {
    /* TODO (AssertStatementImpl) : assert (_ticker != null, 'AnimationController.animateWith() called after AnimationController.dispose()\n' 'AnimationController methods should not be used after calling dispose.'); */;
    stop();
    return _startSimulation(simulation);
};
export var _startSimulation : (simulation : lib7.Simulation) => lib6.TickerFuture = (simulation : lib7.Simulation) : lib6.TickerFuture =>  {
    /* TODO (AssertStatementImpl) : assert (simulation != null); */;
    /* TODO (AssertStatementImpl) : assert (!isAnimating); */;
    properties._simulation = simulation;
    properties._lastElapsedDuration = core.DartDuration.zero;
    properties._value = new core.DartDouble(simulation.x(0.0)).clamp(properties.lowerBound,properties.upperBound);
    let result : lib6.TickerFuture = properties._ticker.start();
    properties._status = (op(Op.EQUALS,properties._direction,_AnimationDirection.forward)) ? lib5.AnimationStatus.forward : lib5.AnimationStatus.reverse;
    _checkStatusChanged();
    return result;
};
export var stop : (_namedArguments? : {canceled? : boolean}) => any = (_namedArguments? : {canceled? : boolean}) : any =>  {
    let {canceled} = Object.assign({
        "canceled" : true}, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (_ticker != null, 'AnimationController.stop() called after AnimationController.dispose()\n' 'AnimationController methods should not be used after calling dispose.'); */;
    properties._simulation = null;
    properties._lastElapsedDuration = null;
    properties._ticker.stop({
        canceled : canceled});
};
export var dispose : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (() {if (_ticker == null) {throw FlutterError('AnimationController.dispose() called more than once.\n' 'A given $runtimeType cannot be disposed more than once.\n' 'The following $runtimeType object was disposed multiple times:\n' '  $this');} return true;}()); */;
    properties._ticker.dispose();
    properties._ticker = null;
    super.dispose();
};
export enum _AnimationDirection {
    forward,
    reverse
}

export namespace AnimationController {
    export type Constructors = lib5.Animation.Constructors | 'AnimationController';
    export type Interface = Omit<AnimationController, Constructors>;
}
@DartClass
@With(any,any,any)
export class AnimationController extends lib5.Animation<double> implements any.Interface,any.Interface,any.Interface {
    constructor(_namedArguments? : {value? : double,duration? : any,debugLabel? : any,lowerBound? : any,upperBound? : any,animationBehavior? : any,vsync? : lib6.TickerProvider}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnimationController(_namedArguments? : {value? : double,duration? : any,debugLabel? : any,lowerBound? : any,upperBound? : any,animationBehavior? : any,vsync? : lib6.TickerProvider}) {
        let {value,duration,debugLabel,lowerBound,upperBound,animationBehavior,vsync} = Object.assign({
            "lowerBound" : 0.0,
            "upperBound" : 1.0,
            "animationBehavior" : AnimationBehavior.normal}, _namedArguments );
        this._direction = _AnimationDirection.forward;
        this._ticker = properties.vsync.createTicker(_tick);
        this.assert = assert;
        this.duration = duration;
        this.debugLabel = debugLabel;
        this.lowerBound = lowerBound;
        this.upperBound = upperBound;
        this.animationBehavior = animationBehavior;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    _direction;

    _ticker;

    _internalSetValue(value : any, : any) {
    }
     : any;

}

export enum AnimationBehavior {
    normal,
    preserve
}

export namespace _InterpolationSimulation {
    export type Constructors = lib7.Simulation.Constructors | '_InterpolationSimulation';
    export type Interface = Omit<_InterpolationSimulation, Constructors>;
}
@DartClass
export class _InterpolationSimulation extends lib7.Simulation {
    constructor(_begin : double,_end : double,duration : core.DartDuration,_curve : lib8.Curve,scale : double) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _InterpolationSimulation(_begin : double,_end : double,duration : core.DartDuration,_curve : lib8.Curve,scale : double) {
        this._durationInSeconds = op(Op.DIVIDE,(op(Op.TIMES,properties.duration.inMicroseconds,scale)),core.DartDuration.microsecondsPerSecond);
        this.assert = assert;
        this._begin = _begin;
        this._end = _end;
        this._curve = _curve;
    }
     : any;

     : any;

     : any;

     : any;

    _durationInSeconds;

    _durationInSeconds : double;

    _begin : double;

    _end : double;

    _curve : lib8.Curve;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    x(timeInSeconds : double) : double {
        let t : double = new core.DartDouble((timeInSeconds / this._durationInSeconds)).clamp(0.0,1.0);
        if (t == 0.0) return this._begin;else if (t == 1.0) return this._end;else return this._begin + (this._end - this._begin) * this._curve.transform(t);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dx(timeInSeconds : double) : double {
        let epsilon : double = this.tolerance.time;
        return (this.x(timeInSeconds + epsilon) - this.x(timeInSeconds - epsilon)) / (2 * epsilon);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isDone(timeInSeconds : double) : boolean {
        return timeInSeconds > this._durationInSeconds;
    }
}

export namespace _RepeatingSimulation {
    export type Constructors = lib7.Simulation.Constructors | '_RepeatingSimulation';
    export type Interface = Omit<_RepeatingSimulation, Constructors>;
}
@DartClass
export class _RepeatingSimulation extends lib7.Simulation {
    constructor(initialValue : double,min : double,max : double,reverse : boolean,period : core.DartDuration) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RepeatingSimulation(initialValue : double,min : double,max : double,reverse : boolean,period : core.DartDuration) {
        this._periodInSeconds = period.inMicroseconds / core.DartDuration.microsecondsPerSecond;
        this._initialT = (max == min) ? 0.0 : (initialValue / (max - min)) * (period.inMicroseconds / core.DartDuration.microsecondsPerSecond);
        this.min = min;
        this.max = max;
        this.reverse = reverse;
        /* TODO (AssertStatementImpl) : assert (_periodInSeconds > 0.0); */;
        /* TODO (AssertStatementImpl) : assert (_initialT >= 0.0); */;
    }
    min : double;

    max : double;

    reverse : boolean;

    _periodInSeconds : double;

    _initialT : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    x(timeInSeconds : double) : double {
        /* TODO (AssertStatementImpl) : assert (timeInSeconds >= 0.0); */;
        let totalTimeInSeconds : double = timeInSeconds + this._initialT;
        let t : double = (totalTimeInSeconds / this._periodInSeconds) % 1.0;
        let _isPlayingReverse : boolean = (op(Op.QUOTIENT,totalTimeInSeconds,this._periodInSeconds)) % 2 == 1;
        if (this.reverse && _isPlayingReverse) {
            return ui.lerpDouble(this.max,this.min,t);
        }else {
            return ui.lerpDouble(this.min,this.max,t);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dx(timeInSeconds : double) : double {
        return (this.max - this.min) / this._periodInSeconds;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isDone(timeInSeconds : double) : boolean {
        return false;
    }
}

export class properties {
    private static __$upperBound : double;
    static get upperBound() : double { 
        return this.__$upperBound;
    }
    static set upperBound(__$value : double)  { 
        this.__$upperBound = __$value;
    }

    private static __$_kFlingSpringDescription : lib3.SpringDescription;
    static get _kFlingSpringDescription() : lib3.SpringDescription { 
        if (this.__$_kFlingSpringDescription===undefined) {
            this.__$_kFlingSpringDescription = lib3.SpringDescription.withDampingRatio({
                mass : 1.0,stiffness : 500.0,ratio : 1.0});
        }
        return this.__$_kFlingSpringDescription;
    }
    static set _kFlingSpringDescription(__$value : lib3.SpringDescription)  { 
        this.__$_kFlingSpringDescription = __$value;
    }

    private static __$_kFlingTolerance : lib4.Tolerance;
    static get _kFlingTolerance() : lib4.Tolerance { 
        if (this.__$_kFlingTolerance===undefined) {
            this.__$_kFlingTolerance = lib4.Tolerance({
                velocity : new core.DartDouble(double).infinity,distance : 0.01});
        }
        return this.__$_kFlingTolerance;
    }
    static set _kFlingTolerance(__$value : lib4.Tolerance)  { 
        this.__$_kFlingTolerance = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$value : double;
    static get value() : double { 
        if (this.__$value===undefined) {
            this.__$value = 0.0;
        }
        return this.__$value;
    }
    static set value(__$value : double)  { 
        this.__$value = __$value;
    }
    ,private static __$this : double;
    static get this() : double { 
        return this.__$this;
    }
    static set this(__$value : double)  { 
        this.__$this = __$value;
    }

    private static __$duration;
    static get duration() { 
        return this.__$duration;
    }
    static set duration(__$value : any)  { 
        this.__$duration = __$value;
    }
    ,private static __$this;
    static get this() { 
        return this.__$this;
    }
    static set this(__$value : any)  { 
        this.__$this = __$value;
    }

    private static __$debugLabel;
    static get debugLabel() { 
        return this.__$debugLabel;
    }
    static set debugLabel(__$value : any)  { 
        this.__$debugLabel = __$value;
    }
    ,private static __$;
    static get () { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$vsync : lib6.TickerProvider;
    static get vsync() : lib6.TickerProvider { 
        return this.__$vsync;
    }
    static set vsync(__$value : lib6.TickerProvider)  { 
        this.__$vsync = __$value;
    }
    ,private static __$this : lib6.TickerProvider;
    static get this() : lib6.TickerProvider { 
        return this.__$this;
    }
    static set this(__$value : lib6.TickerProvider)  { 
        this.__$this = __$value;
    }

    private static __$animationBehavior;
    static get animationBehavior() { 
        if (this.__$animationBehavior===undefined) {
            this.__$animationBehavior = AnimationBehavior.preserve;
        }
        return this.__$animationBehavior;
    }
    static set animationBehavior(__$value : any)  { 
        this.__$animationBehavior = __$value;
    }
    ,private static __$;
    static get () { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$lowerBound;
    static get lowerBound() { 
        if (this.__$lowerBound===undefined) {
            this.__$lowerBound = new core.DartDouble(double).negativeInfinity;
        }
        return this.__$lowerBound;
    }
    static set lowerBound(__$value : any)  { 
        this.__$lowerBound = __$value;
    }
    ,private static __$upperBound;
    static get upperBound() { 
        if (this.__$upperBound===undefined) {
            this.__$upperBound = new core.DartDouble(double).infinity;
        }
        return this.__$upperBound;
    }
    static set upperBound(__$value : any)  { 
        this.__$upperBound = __$value;
    }
    ,private static __$_direction;
    static get _direction() { 
        if (this.__$_direction===undefined) {
            this.__$_direction = _AnimationDirection.forward;
        }
        return this.__$_direction;
    }
    static set _direction(__$value : any)  { 
        this.__$_direction = __$value;
    }

    private static __$_ticker;
    static get _ticker() { 
        if (this.__$_ticker===undefined) {
            this.__$_ticker = properties.vsync.createTicker(_tick);
        }
        return this.__$_ticker;
    }
    static set _ticker(__$value : any)  { 
        this.__$_ticker = __$value;
    }

    private static __$lowerBound : double;
    static get lowerBound() : double { 
        return this.__$lowerBound;
    }
    static set lowerBound(__$value : double)  { 
        this.__$lowerBound = __$value;
    }

    private static __$debugLabel : string;
    static get debugLabel() : string { 
        return this.__$debugLabel;
    }
    static set debugLabel(__$value : string)  { 
        this.__$debugLabel = __$value;
    }

    private static __$animationBehavior : AnimationBehavior;
    static get animationBehavior() : AnimationBehavior { 
        return this.__$animationBehavior;
    }
    static set animationBehavior(__$value : AnimationBehavior)  { 
        this.__$animationBehavior = __$value;
    }

    static get view() : lib5.Animation<double> {
        return this;
    }
    private static __$duration : core.DartDuration;
    static get duration() : core.DartDuration { 
        return this.__$duration;
    }
    static set duration(__$value : core.DartDuration)  { 
        this.__$duration = __$value;
    }

    private static __$_ticker : lib6.Ticker;
    static get _ticker() : lib6.Ticker { 
        return this.__$_ticker;
    }
    static set _ticker(__$value : lib6.Ticker)  { 
        this.__$_ticker = __$value;
    }

    private static __$_simulation : lib7.Simulation;
    static get _simulation() : lib7.Simulation { 
        return this.__$_simulation;
    }
    static set _simulation(__$value : lib7.Simulation)  { 
        this.__$_simulation = __$value;
    }

    static get value() : double {
        return properties._value;
    }
    private static __$_value : double;
    static get _value() : double { 
        return this.__$_value;
    }
    static set _value(__$value : double)  { 
        this.__$_value = __$value;
    }

    static set value(newValue : double) {
        /* TODO (AssertStatementImpl) : assert (newValue != null); */;
        stop();
        _internalSetValue(newValue);
        notifyListeners();
        _checkStatusChanged();
    }
    static get velocity() : double {
        if (!properties.isAnimating) return 0.0;
        return properties._simulation.dx(new core.DartInt(properties.lastElapsedDuration.inMicroseconds).toDouble() / core.DartDuration.microsecondsPerSecond);
    }
    static get lastElapsedDuration() : core.DartDuration {
        return properties._lastElapsedDuration;
    }
    private static __$_lastElapsedDuration : core.DartDuration;
    static get _lastElapsedDuration() : core.DartDuration { 
        return this.__$_lastElapsedDuration;
    }
    static set _lastElapsedDuration(__$value : core.DartDuration)  { 
        this.__$_lastElapsedDuration = __$value;
    }

    static get isAnimating() : boolean {
        return properties._ticker != null && properties._ticker.isActive;
    }
    private static __$_direction : _AnimationDirection;
    static get _direction() : _AnimationDirection { 
        return this.__$_direction;
    }
    static set _direction(__$value : _AnimationDirection)  { 
        this.__$_direction = __$value;
    }

    private static __$_lastReportedStatus : lib5.AnimationStatus;
    static get _lastReportedStatus() : lib5.AnimationStatus { 
        if (this.__$_lastReportedStatus===undefined) {
            this.__$_lastReportedStatus = lib5.AnimationStatus.dismissed;
        }
        return this.__$_lastReportedStatus;
    }
    static set _lastReportedStatus(__$value : lib5.AnimationStatus)  { 
        this.__$_lastReportedStatus = __$value;
    }

    private static __$_status : lib5.AnimationStatus;
    static get _status() : lib5.AnimationStatus { 
        return this.__$_status;
    }
    static set _status(__$value : lib5.AnimationStatus)  { 
        this.__$_status = __$value;
    }

    static get status() : lib5.AnimationStatus {
        return properties._status;
    }
}
