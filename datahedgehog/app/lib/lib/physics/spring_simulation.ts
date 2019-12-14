/** Library asset:datahedgehog_monitor/lib/lib/physics/spring_simulation.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";
import * as lib4 from "./simulation";
import * as lib5 from "./tolerance";
import * as lib6 from "./utils";

export namespace SpringDescription {
    export type Constructors = 'SpringDescription' | 'withDampingRatio';
    export type Interface = Omit<SpringDescription, Constructors>;
}
@DartClass
export class SpringDescription {
    constructor(_namedArguments? : {mass? : double,stiffness? : double,damping? : double}) {
    }
    @defaultConstructor
    SpringDescription(_namedArguments? : {mass? : double,stiffness? : double,damping? : double}) {
        let {mass,stiffness,damping} = Object.assign({
        }, _namedArguments );
        this.mass = mass;
        this.stiffness = stiffness;
        this.damping = damping;
    }
    @namedConstructor
    withDampingRatio(_namedArguments? : {mass? : double,stiffness? : double,ratio? : double}) {
        let {mass,stiffness,ratio} = Object.assign({
            "ratio" : 1.0}, _namedArguments );
        this.damping = ratio * 2.0 * math.sqrt(mass * stiffness);
        this.mass = mass;
        this.stiffness = stiffness;
    }
    static withDampingRatio : new(_namedArguments? : {mass? : double,stiffness? : double,ratio? : double}) => SpringDescription;

    mass : double;

    stiffness : double;

    damping : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(mass: ${new core.DartDouble(this.mass).toStringAsFixed(1)}, stiffness: ${new core.DartDouble(this.stiffness).toStringAsFixed(1)}, damping: ${new core.DartDouble(this.damping).toStringAsFixed(1)})`;
    }
}

export enum SpringType {
    criticallyDamped,
    underDamped,
    overDamped
}

export namespace SpringSimulation {
    export type Constructors = lib4.Simulation.Constructors | 'SpringSimulation';
    export type Interface = Omit<SpringSimulation, Constructors>;
}
@DartClass
export class SpringSimulation extends lib4.Simulation {
    constructor(spring : SpringDescription,start : double,end : double,velocity : double,_namedArguments? : {tolerance? : lib5.Tolerance}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SpringSimulation(spring : SpringDescription,start : double,end : double,velocity : double,_namedArguments? : {tolerance? : lib5.Tolerance}) {
        let {tolerance} = Object.assign({
            "tolerance" : lib5.Tolerance.defaultTolerance}, _namedArguments );
        this._endPosition = end;
        this._solution = _SpringSolution(spring,start - end,velocity);
        super.Simulation({
            tolerance : tolerance});
    }
    _endPosition : double;

    _solution : _SpringSolution;

    get type() : SpringType {
        return this._solution.type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    x(time : double) : double {
        return this._endPosition + this._solution.x(time);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dx(time : double) : double {
        return this._solution.dx(time);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isDone(time : double) : boolean {
        return lib6.nearZero(this._solution.x(time),this.tolerance.distance) && lib6.nearZero(this._solution.dx(time),this.tolerance.velocity);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(end: ${this._endPosition}, ${this.type})`;
    }
}

export namespace _SpringSolution {
    export type Constructors = never;
    export type Interface = Omit<_SpringSolution, Constructors>;
}
@DartClass
export class _SpringSolution {
    constructor(spring : SpringDescription,initialPosition : double,initialVelocity : double) {
    }
    @defaultFactory
    static $_SpringSolution(spring : SpringDescription,initialPosition : double,initialVelocity : double) : _SpringSolution {
        /* TODO (AssertStatementImpl) : assert (spring != null); */;
        /* TODO (AssertStatementImpl) : assert (spring.mass != null); */;
        /* TODO (AssertStatementImpl) : assert (spring.stiffness != null); */;
        /* TODO (AssertStatementImpl) : assert (spring.damping != null); */;
        /* TODO (AssertStatementImpl) : assert (initialPosition != null); */;
        /* TODO (AssertStatementImpl) : assert (initialVelocity != null); */;
        let cmk : double = spring.damping * spring.damping - 4 * spring.mass * spring.stiffness;
        if (cmk == 0.0) return _CriticalSolution(spring,initialPosition,initialVelocity);
        if (cmk > 0.0) return _OverdampedSolution(spring,initialPosition,initialVelocity);
        return _UnderdampedSolution(spring,initialPosition,initialVelocity);
    }
    @Abstract
    x(time : double) : double{ throw 'abstract'}
    @Abstract
    dx(time : double) : double{ throw 'abstract'}
    @AbstractProperty
    get type() : SpringType{ throw 'abstract'}
}

export namespace _CriticalSolution {
    export type Constructors = 'withArgs';
    export type Interface = Omit<_CriticalSolution, Constructors>;
}
@DartClass
@Implements(_SpringSolution)
export class _CriticalSolution implements _SpringSolution.Interface {
    constructor(spring : SpringDescription,distance : double,velocity : double) {
    }
    @defaultFactory
    static $_CriticalSolution(spring : SpringDescription,distance : double,velocity : double) : _CriticalSolution {
        let r : double = -spring.damping / (2.0 * spring.mass);
        let c1 : double = distance;
        let c2 : double = velocity / (r * distance);
        return _CriticalSolution.withArgs(r,c1,c2);
    }
    @namedConstructor
    withArgs(r : double,c1 : double,c2 : double) {
        this._r = r;
        this._c1 = c1;
        this._c2 = c2;
    }
    static withArgs : new(r : double,c1 : double,c2 : double) => _CriticalSolution;

    _r : double;
    _c1 : double;
    _c2 : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    x(time : double) : double {
        return (this._c1 + this._c2 * time) * math.pow(math.e,this._r * time);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dx(time : double) : double {
        let power : double = math.pow(math.e,this._r * time);
        return this._r * (this._c1 + this._c2 * time) * power + this._c2 * power;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : SpringType {
        return SpringType.criticallyDamped;
    }
}

export namespace _OverdampedSolution {
    export type Constructors = 'withArgs';
    export type Interface = Omit<_OverdampedSolution, Constructors>;
}
@DartClass
@Implements(_SpringSolution)
export class _OverdampedSolution implements _SpringSolution.Interface {
    constructor(spring : SpringDescription,distance : double,velocity : double) {
    }
    @defaultFactory
    static $_OverdampedSolution(spring : SpringDescription,distance : double,velocity : double) : _OverdampedSolution {
        let cmk : double = spring.damping * spring.damping - 4 * spring.mass * spring.stiffness;
        let r1 : double = (-spring.damping - math.sqrt(cmk)) / (2.0 * spring.mass);
        let r2 : double = (-spring.damping + math.sqrt(cmk)) / (2.0 * spring.mass);
        let c2 : double = (velocity - r1 * distance) / (r2 - r1);
        let c1 : double = distance - c2;
        return _OverdampedSolution.withArgs(r1,r2,c1,c2);
    }
    @namedConstructor
    withArgs(r1 : double,r2 : double,c1 : double,c2 : double) {
        this._r1 = r1;
        this._r2 = r2;
        this._c1 = c1;
        this._c2 = c2;
    }
    static withArgs : new(r1 : double,r2 : double,c1 : double,c2 : double) => _OverdampedSolution;

    _r1 : double;
    _r2 : double;
    _c1 : double;
    _c2 : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    x(time : double) : double {
        return this._c1 * math.pow(math.e,this._r1 * time) + this._c2 * math.pow(math.e,this._r2 * time);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dx(time : double) : double {
        return this._c1 * this._r1 * math.pow(math.e,this._r1 * time) + this._c2 * this._r2 * math.pow(math.e,this._r2 * time);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : SpringType {
        return SpringType.overDamped;
    }
}

export namespace _UnderdampedSolution {
    export type Constructors = 'withArgs';
    export type Interface = Omit<_UnderdampedSolution, Constructors>;
}
@DartClass
@Implements(_SpringSolution)
export class _UnderdampedSolution implements _SpringSolution.Interface {
    constructor(spring : SpringDescription,distance : double,velocity : double) {
    }
    @defaultFactory
    static $_UnderdampedSolution(spring : SpringDescription,distance : double,velocity : double) : _UnderdampedSolution {
        let w : double = math.sqrt(4.0 * spring.mass * spring.stiffness - spring.damping * spring.damping) / (2.0 * spring.mass);
        let r : double = -(spring.damping / 2.0 * spring.mass);
        let c1 : double = distance;
        let c2 : double = (velocity - r * distance) / w;
        return _UnderdampedSolution.withArgs(w,r,c1,c2);
    }
    @namedConstructor
    withArgs(w : double,r : double,c1 : double,c2 : double) {
        this._w = w;
        this._r = r;
        this._c1 = c1;
        this._c2 = c2;
    }
    static withArgs : new(w : double,r : double,c1 : double,c2 : double) => _UnderdampedSolution;

    _w : double;
    _r : double;
    _c1 : double;
    _c2 : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    x(time : double) : double {
        return math.pow(math.e,this._r * time) * (this._c1 * math.cos(this._w * time) + this._c2 * math.sin(this._w * time));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dx(time : double) : double {
        let power : double = math.pow(math.e,this._r * time);
        let cosine : double = math.cos(this._w * time);
        let sine : double = math.sin(this._w * time);
        return power * (this._c2 * this._w * cosine - this._c1 * this._w * sine) + this._r * power * (this._c2 * sine + this._c1 * cosine);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get type() : SpringType {
        return SpringType.underDamped;
    }
}

export namespace ScrollSpringSimulation {
    export type Constructors = SpringSimulation.Constructors | 'ScrollSpringSimulation';
    export type Interface = Omit<ScrollSpringSimulation, Constructors>;
}
@DartClass
export class ScrollSpringSimulation extends SpringSimulation {
    constructor(spring : SpringDescription,start : double,end : double,velocity : double,_namedArguments? : {tolerance? : lib5.Tolerance}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScrollSpringSimulation(spring : SpringDescription,start : double,end : double,velocity : double,_namedArguments? : {tolerance? : lib5.Tolerance}) {
        let {tolerance} = Object.assign({
            "tolerance" : lib5.Tolerance.defaultTolerance}, _namedArguments );
        super.SpringSimulation(spring,start,end,velocity,{
            tolerance : tolerance});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    x(time : double) : double {
        return this.isDone(time) ? this._endPosition : super.x(time);
    }
}

export class properties {
}
