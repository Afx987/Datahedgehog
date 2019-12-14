/** Library asset:datahedgehog_monitor/lib/lib/physics/friction_simulation.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./simulation";
import * as lib4 from "./tolerance";
import * as math from "@dart2ts/dart/math";

export namespace FrictionSimulation {
    export type Constructors = lib3.Simulation.Constructors | 'FrictionSimulation';
    export type Interface = Omit<FrictionSimulation, Constructors>;
}
@DartClass
export class FrictionSimulation extends lib3.Simulation {
    constructor(drag : double,position : double,velocity : double,_namedArguments? : {tolerance? : lib4.Tolerance}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FrictionSimulation(drag : double,position : double,velocity : double,_namedArguments? : {tolerance? : lib4.Tolerance}) {
        let {tolerance} = Object.assign({
            "tolerance" : lib4.Tolerance.defaultTolerance}, _namedArguments );
        this._drag = drag;
        this._dragLog = math.log(drag);
        this._x = position;
        this._v = velocity;
        super.Simulation({
            tolerance : tolerance});
    }
    @namedFactory
    static $through(startPosition : double,endPosition : double,startVelocity : double,endVelocity : double) : FrictionSimulation {
        /* TODO (AssertStatementImpl) : assert (startVelocity == 0.0 || endVelocity == 0.0 || startVelocity.sign == endVelocity.sign); */;
        /* TODO (AssertStatementImpl) : assert (startVelocity.abs() >= endVelocity.abs()); */;
        /* TODO (AssertStatementImpl) : assert ((endPosition - startPosition).sign == startVelocity.sign); */;
        return FrictionSimulation(FrictionSimulation._dragFor(startPosition,endPosition,startVelocity,endVelocity),startPosition,startVelocity,{
            tolerance : lib4.Tolerance({
                velocity : new core.DartDouble(endVelocity).abs()})});
    }
    static through : new(startPosition : double,endPosition : double,startVelocity : double,endVelocity : double) => FrictionSimulation;

    _drag : double;

    _dragLog : double;

    _x : double;

    _v : double;

    static _dragFor(startPosition : double,endPosition : double,startVelocity : double,endVelocity : double) : double {
        return math.pow(math.e,(startVelocity - endVelocity) / (startPosition - endPosition));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    x(time : double) : double {
        return this._x + this._v * math.pow(this._drag,time) / this._dragLog - this._v / this._dragLog;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dx(time : double) : double {
        return this._v * math.pow(this._drag,time);
    }
    get finalX() : double {
        return this._x - this._v / this._dragLog;
    }
    timeAtX(x : double) : double {
        if (x == this._x) return 0.0;
        if (this._v == 0.0 || (this._v > 0 ? (x < this._x || x > this.finalX) : (x > this._x || x < this.finalX))) return new core.DartDouble(double).infinity;
        return math.log(this._dragLog * (x - this._x) / this._v + 1.0) / this._dragLog;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isDone(time : double) : boolean {
        return new core.DartDouble(this.dx(time)).abs() < this.tolerance.velocity;
    }
}

export namespace BoundedFrictionSimulation {
    export type Constructors = FrictionSimulation.Constructors | 'BoundedFrictionSimulation' | 'clamp';
    export type Interface = Omit<BoundedFrictionSimulation, Constructors>;
}
@DartClass
export class BoundedFrictionSimulation extends FrictionSimulation {
    constructor(drag : double,position : double,velocity : double,_minX : double,_maxX : double) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BoundedFrictionSimulation(drag : double,position : double,velocity : double,_minX : double,_maxX : double) {
        this.assert = assert;
        this._minX = _minX;
        this._maxX = _maxX;
    }
    @namedConstructor
    clamp(_minX : any,_maxX : any) {
    }
    static clamp : new(_minX : any,_maxX : any) => BoundedFrictionSimulation;

     : any;

    drag;
    position;
    velocity;

    _minX : double;

    _maxX : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    x(time : double) : double {
        return new core.DartDouble(super.x(time)).clamp(this._minX,this._maxX);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isDone(time : double) : boolean {
        return super.isDone(time) || new core.DartDouble((this.x(time) - this._minX)).abs() < this.tolerance.distance || new core.DartDouble((this.x(time) - this._maxX)).abs() < this.tolerance.distance;
    }
}

export class properties {
}
