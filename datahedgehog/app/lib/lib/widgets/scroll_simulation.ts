/** Library asset:datahedgehog_monitor/lib/lib/widgets/scroll_simulation.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/physics/simulation";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/physics/tolerance";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/physics/friction_simulation";
import * as math from "@dart2ts/dart/math";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/physics/spring_simulation";

export var dx : (time : double) => double = (time : double) : double =>  {
    let t : double = new core.DartDouble((time / properties._duration)).clamp(0.0,1.0);
    return properties._distance * _flingVelocityPenetration(t) * new core.DartDouble(properties.velocity).sign / properties._duration;
};
export var _underscrollSimulation : (x : double,dx : double) => lib3.Simulation = (x : double,dx : double) : lib3.Simulation =>  {
    return lib7.ScrollSpringSimulation(properties.spring,x,properties.leadingExtent,dx);
};
export var _overscrollSimulation : (x : double,dx : double) => lib3.Simulation = (x : double,dx : double) : lib3.Simulation =>  {
    return lib7.ScrollSpringSimulation(properties.spring,x,properties.trailingExtent,dx);
};
export var _simulation : (time : double) => lib3.Simulation = (time : double) : lib3.Simulation =>  {
    let simulation : lib3.Simulation;
    if (time > properties._springTime) {
        properties._timeOffset = properties._springTime.isFinite ? properties._springTime : 0.0;
        simulation = properties._springSimulation;
    }else {
        properties._timeOffset = 0.0;
        simulation = properties._frictionSimulation;
    }
    return ((_) : lib3.Simulation =>  {
        {
            _.tolerance = tolerance;
            return _;
        }
    })(simulation);
};
export var x : (time : double) => double = (time : double) : double =>  {
    return _simulation(time).x(time - properties._timeOffset);
};
export var dx : (time : double) => double = (time : double) : double =>  {
    return _simulation(time).dx(time - properties._timeOffset);
};
export var isDone : (time : double) => boolean = (time : double) : boolean =>  {
    return time >= properties._duration;
};
export var toString : () => string = () : string =>  {
    return `${runtimeType}(leadingExtent: ${properties.leadingExtent}, trailingExtent: ${properties.trailingExtent})`;
};
export var x : (time : double) => double = (time : double) : double =>  {
    let t : double = new core.DartDouble((time / properties._duration)).clamp(0.0,1.0);
    return properties.position + properties._distance * _flingDistancePenetration(t) * new core.DartDouble(properties.velocity).sign;
};
export var _decelerationForFriction : (friction : double) => double = (friction : double) : double =>  {
    return friction * 61774.04968;
};
export var _flingDuration : (velocity : double) => double = (velocity : double) : double =>  {
    let scaledFriction : double = properties.friction * _decelerationForFriction(0.84);
    let deceleration : double = math.log(0.35 * new core.DartDouble(velocity).abs() / scaledFriction);
    return math.exp(deceleration / (properties._kDecelerationRate - 1.0));
};
export var _flingDistancePenetration : (t : double) => double = (t : double) : double =>  {
    return (1.2 * t * t * t) - (3.27 * t * t) + (properties._initialVelocityPenetration * t);
};
export var _flingVelocityPenetration : (t : double) => double = (t : double) : double =>  {
    return (3.6 * t * t) - (6.54 * t) + properties._initialVelocityPenetration;
};
export var isDone : (time : double) => boolean = (time : double) : boolean =>  {
    return _simulation(time).isDone(time - properties._timeOffset);
};
export namespace BouncingScrollSimulation {
    export type Constructors = lib3.Simulation.Constructors | 'BouncingScrollSimulation';
    export type Interface = Omit<BouncingScrollSimulation, Constructors>;
}
@DartClass
export class BouncingScrollSimulation extends lib3.Simulation {
    constructor(_namedArguments? : {position? : double,velocity? : double,leadingExtent? : any,trailingExtent? : any,spring? : any,tolerance? : lib4.Tolerance}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BouncingScrollSimulation(_namedArguments? : {position? : double,velocity? : double,leadingExtent? : any,trailingExtent? : any,spring? : any,tolerance? : lib4.Tolerance}) {
        let {position,velocity,leadingExtent,trailingExtent,spring,tolerance} = Object.assign({
            "tolerance" : lib4.Tolerance.defaultTolerance}, _namedArguments );
        this._springSimulation = _underscrollSimulation(properties.position,properties.velocity);
        this._springTime = new core.DartDouble(double).negativeInfinity;
        this.assert = assert;
        this.leadingExtent = leadingExtent;
        this.trailingExtent = trailingExtent;
        this.spring = spring;
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

    _springSimulation;

    _springTime;

}

export namespace ClampingScrollSimulation {
    export type Constructors = lib3.Simulation.Constructors | 'ClampingScrollSimulation';
    export type Interface = Omit<ClampingScrollSimulation, Constructors>;
}
@DartClass
export class ClampingScrollSimulation extends lib3.Simulation {
    constructor(_namedArguments? : {position? : any,velocity? : any,friction? : any,tolerance? : lib4.Tolerance}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClampingScrollSimulation(_namedArguments? : {position? : any,velocity? : any,friction? : any,tolerance? : lib4.Tolerance}) {
        let {position,velocity,friction,tolerance} = Object.assign({
            "friction" : 0.015,
            "tolerance" : lib4.Tolerance.defaultTolerance}, _namedArguments );
        this._duration = _flingDuration(properties.velocity);
        this._distance = new core.DartDouble((properties.velocity * this._duration / properties._initialVelocityPenetration)).abs();
        this.assert = assert;
        this.position = position;
        this.velocity = velocity;
        this.friction = friction;
    }
    _flingVelocityPenetration( : any) {
    }
     : any;

     : any;

     : any;

    _duration;

    _distance;

}

export class properties {
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

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$_springSimulation;
    static get _springSimulation() { 
        if (this.__$_springSimulation===undefined) {
            this.__$_springSimulation = _overscrollSimulation(properties.position,properties.velocity);
        }
        return this.__$_springSimulation;
    }
    static set _springSimulation(__$value : any)  { 
        this.__$_springSimulation = __$value;
    }

    private static __$_springTime;
    static get _springTime() { 
        if (this.__$_springTime===undefined) {
            this.__$_springTime = new core.DartDouble(double).negativeInfinity;
        }
        return this.__$_springTime;
    }
    static set _springTime(__$value : any)  { 
        this.__$_springTime = __$value;
    }

    private static __$_frictionSimulation;
    static get _frictionSimulation() { 
        if (this.__$_frictionSimulation===undefined) {
            this.__$_frictionSimulation = lib5.FrictionSimulation(0.135,properties.position,properties.velocity);
        }
        return this.__$_frictionSimulation;
    }
    static set _frictionSimulation(__$value : any)  { 
        this.__$_frictionSimulation = __$value;
    }

    private static __$finalX : double;
    static get finalX() : double { 
        if (this.__$finalX===undefined) {
            this.__$finalX = properties._frictionSimulation.finalX;
        }
        return this.__$finalX;
    }
    static set finalX(__$value : double)  { 
        this.__$finalX = __$value;
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

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$_springTime;
    static get _springTime() { 
        if (this.__$_springTime===undefined) {
            this.__$_springTime = properties._frictionSimulation.timeAtX(properties.trailingExtent);
        }
        return this.__$_springTime;
    }
    static set _springTime(__$value : any)  { 
        this.__$_springTime = __$value;
    }

    private static __$_springSimulation;
    static get _springSimulation() { 
        if (this.__$_springSimulation===undefined) {
            this.__$_springSimulation = _overscrollSimulation(properties.trailingExtent,math.min(properties._frictionSimulation.dx(properties._springTime),properties.maxSpringTransferVelocity));
        }
        return this.__$_springSimulation;
    }
    static set _springSimulation(__$value : any)  { 
        this.__$_springSimulation = __$value;
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

    private static __$_springTime;
    static get _springTime() { 
        if (this.__$_springTime===undefined) {
            this.__$_springTime = properties._frictionSimulation.timeAtX(properties.leadingExtent);
        }
        return this.__$_springTime;
    }
    static set _springTime(__$value : any)  { 
        this.__$_springTime = __$value;
    }

    private static __$_springSimulation;
    static get _springSimulation() { 
        if (this.__$_springSimulation===undefined) {
            this.__$_springSimulation = _underscrollSimulation(properties.leadingExtent,math.min(properties._frictionSimulation.dx(properties._springTime),properties.maxSpringTransferVelocity));
        }
        return this.__$_springSimulation;
    }
    static set _springSimulation(__$value : any)  { 
        this.__$_springSimulation = __$value;
    }

    private static __$_springTime;
    static get _springTime() { 
        if (this.__$_springTime===undefined) {
            this.__$_springTime = new core.DartDouble(double).infinity;
        }
        return this.__$_springTime;
    }
    static set _springTime(__$value : any)  { 
        this.__$_springTime = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$maxSpringTransferVelocity : double;
    static get maxSpringTransferVelocity() : double { 
        if (this.__$maxSpringTransferVelocity===undefined) {
            this.__$maxSpringTransferVelocity = 5000.0;
        }
        return this.__$maxSpringTransferVelocity;
    }
    static set maxSpringTransferVelocity(__$value : double)  { 
        this.__$maxSpringTransferVelocity = __$value;
    }

    private static __$leadingExtent : double;
    static get leadingExtent() : double { 
        return this.__$leadingExtent;
    }
    static set leadingExtent(__$value : double)  { 
        this.__$leadingExtent = __$value;
    }

    private static __$trailingExtent : double;
    static get trailingExtent() : double { 
        return this.__$trailingExtent;
    }
    static set trailingExtent(__$value : double)  { 
        this.__$trailingExtent = __$value;
    }

    private static __$spring : lib7.SpringDescription;
    static get spring() : lib7.SpringDescription { 
        return this.__$spring;
    }
    static set spring(__$value : lib7.SpringDescription)  { 
        this.__$spring = __$value;
    }

    private static __$_frictionSimulation : lib5.FrictionSimulation;
    static get _frictionSimulation() : lib5.FrictionSimulation { 
        return this.__$_frictionSimulation;
    }
    static set _frictionSimulation(__$value : lib5.FrictionSimulation)  { 
        this.__$_frictionSimulation = __$value;
    }

    private static __$_springSimulation : lib3.Simulation;
    static get _springSimulation() : lib3.Simulation { 
        return this.__$_springSimulation;
    }
    static set _springSimulation(__$value : lib3.Simulation)  { 
        this.__$_springSimulation = __$value;
    }

    private static __$_springTime : double;
    static get _springTime() : double { 
        return this.__$_springTime;
    }
    static set _springTime(__$value : double)  { 
        this.__$_springTime = __$value;
    }

    private static __$_timeOffset : double;
    static get _timeOffset() : double { 
        if (this.__$_timeOffset===undefined) {
            this.__$_timeOffset = 0.0;
        }
        return this.__$_timeOffset;
    }
    static set _timeOffset(__$value : double)  { 
        this.__$_timeOffset = __$value;
    }

    private static __$position : double;
    static get position() : double { 
        return this.__$position;
    }
    static set position(__$value : double)  { 
        this.__$position = __$value;
    }

    private static __$velocity : double;
    static get velocity() : double { 
        return this.__$velocity;
    }
    static set velocity(__$value : double)  { 
        this.__$velocity = __$value;
    }

    private static __$friction : double;
    static get friction() : double { 
        return this.__$friction;
    }
    static set friction(__$value : double)  { 
        this.__$friction = __$value;
    }

    private static __$_duration : double;
    static get _duration() : double { 
        return this.__$_duration;
    }
    static set _duration(__$value : double)  { 
        this.__$_duration = __$value;
    }

    private static __$_distance : double;
    static get _distance() : double { 
        return this.__$_distance;
    }
    static set _distance(__$value : double)  { 
        this.__$_distance = __$value;
    }

    private static __$_kDecelerationRate : double;
    static get _kDecelerationRate() : double { 
        if (this.__$_kDecelerationRate===undefined) {
            this.__$_kDecelerationRate = math.log(0.78) / math.log(0.9);
        }
        return this.__$_kDecelerationRate;
    }
    static set _kDecelerationRate(__$value : double)  { 
        this.__$_kDecelerationRate = __$value;
    }

    private static __$_initialVelocityPenetration : double;
    static get _initialVelocityPenetration() : double { 
        if (this.__$_initialVelocityPenetration===undefined) {
            this.__$_initialVelocityPenetration = 3.065;
        }
        return this.__$_initialVelocityPenetration;
    }
    static set _initialVelocityPenetration(__$value : double)  { 
        this.__$_initialVelocityPenetration = __$value;
    }

}
