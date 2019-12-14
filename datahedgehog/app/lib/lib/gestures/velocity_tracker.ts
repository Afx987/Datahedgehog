/** Library asset:datahedgehog_monitor/lib/lib/gestures/velocity_tracker.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./lsq_solver";

export namespace Velocity {
    export type Constructors = 'Velocity';
    export type Interface = Omit<Velocity, Constructors>;
}
@DartClass
export class Velocity {
    constructor(_namedArguments? : {pixelsPerSecond? : any}) {
    }
    @defaultConstructor
    Velocity(_namedArguments? : {pixelsPerSecond? : any}) {
        let {pixelsPerSecond} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.pixelsPerSecond = pixelsPerSecond;
    }
     : any;

    private static __$zero : Velocity;
    static get zero() : Velocity { 
        if (this.__$zero===undefined) {
            this.__$zero = Velocity({
                pixelsPerSecond : Offset.zero});
        }
        return this.__$zero;
    }

    pixelsPerSecond : any;

    [OperatorMethods.NEGATE]() : Velocity {
        return Velocity({
            pixelsPerSecond : op(Op.NEG,this.pixelsPerSecond)});
    }
    [OperatorMethods.MINUS](other : Velocity) : Velocity {
        return Velocity({
            pixelsPerSecond : op(Op.MINUS,this.pixelsPerSecond,other.pixelsPerSecond)});
    }
    [OperatorMethods.PLUS](other : Velocity) : Velocity {
        return Velocity({
            pixelsPerSecond : op(Op.PLUS,this.pixelsPerSecond,other.pixelsPerSecond)});
    }
    clampMagnitude(minValue : double,maxValue : double) : Velocity {
        /* TODO (AssertStatementImpl) : assert (minValue != null && minValue >= 0.0); */;
        /* TODO (AssertStatementImpl) : assert (maxValue != null && maxValue >= 0.0 && maxValue >= minValue); */;
        let valueSquared : double = this.pixelsPerSecond.distanceSquared;
        if (valueSquared > maxValue * maxValue) return Velocity({
            pixelsPerSecond : op(Op.TIMES,(op(Op.DIVIDE,this.pixelsPerSecond,this.pixelsPerSecond.distance)),maxValue)});
        if (valueSquared < minValue * minValue) return Velocity({
            pixelsPerSecond : op(Op.TIMES,(op(Op.DIVIDE,this.pixelsPerSecond,this.pixelsPerSecond.distance)),minValue)});
        return this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (isNot(other, Velocity)) return false;
        let typedOther : Velocity = other;
        return op(Op.EQUALS,this.pixelsPerSecond,typedOther.pixelsPerSecond);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return this.pixelsPerSecond.hashCode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `Velocity(${this.pixelsPerSecond.dx.toStringAsFixed(1)}, ${this.pixelsPerSecond.dy.toStringAsFixed(1)})`;
    }
}

export namespace VelocityEstimate {
    export type Constructors = 'VelocityEstimate';
    export type Interface = Omit<VelocityEstimate, Constructors>;
}
@DartClass
export class VelocityEstimate {
    constructor(_namedArguments? : {pixelsPerSecond? : any,confidence? : double,duration? : core.DartDuration,offset? : any}) {
    }
    @defaultConstructor
    VelocityEstimate(_namedArguments? : {pixelsPerSecond? : any,confidence? : double,duration? : core.DartDuration,offset? : any}) {
        let {pixelsPerSecond,confidence,duration,offset} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.pixelsPerSecond = pixelsPerSecond;
        this.confidence = confidence;
        this.duration = duration;
        this.offset = offset;
    }
     : any;

     : any;

     : any;

     : any;

    pixelsPerSecond : any;

    confidence : double;

    duration : core.DartDuration;

    offset : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `VelocityEstimate(${this.pixelsPerSecond.dx.toStringAsFixed(1)}, ${this.pixelsPerSecond.dy.toStringAsFixed(1)}; offset: ${this.offset}, duration: ${this.duration}, confidence: ${new core.DartDouble(this.confidence).toStringAsFixed(1)})`;
    }
}

export namespace _PointAtTime {
    export type Constructors = '_PointAtTime';
    export type Interface = Omit<_PointAtTime, Constructors>;
}
@DartClass
export class _PointAtTime {
    constructor(point : any,time : core.DartDuration) {
    }
    @defaultConstructor
    _PointAtTime(point : any,time : core.DartDuration) {
        this.assert = assert;
        this.point = point;
        this.time = time;
    }
     : any;

     : any;

    time : core.DartDuration;

    point : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `_PointAtTime(${this.point} at ${this.time})`;
    }
}

export namespace VelocityTracker {
    export type Constructors = 'VelocityTracker';
    export type Interface = Omit<VelocityTracker, Constructors>;
}
@DartClass
export class VelocityTracker {
    private static __$_assumePointerMoveStoppedMilliseconds : number;
    static get _assumePointerMoveStoppedMilliseconds() : number { 
        if (this.__$_assumePointerMoveStoppedMilliseconds===undefined) {
            this.__$_assumePointerMoveStoppedMilliseconds = 40;
        }
        return this.__$_assumePointerMoveStoppedMilliseconds;
    }

    private static __$_historySize : number;
    static get _historySize() : number { 
        if (this.__$_historySize===undefined) {
            this.__$_historySize = 20;
        }
        return this.__$_historySize;
    }

    private static __$_horizonMilliseconds : number;
    static get _horizonMilliseconds() : number { 
        if (this.__$_horizonMilliseconds===undefined) {
            this.__$_horizonMilliseconds = 100;
        }
        return this.__$_horizonMilliseconds;
    }

    private static __$_minSampleSize : number;
    static get _minSampleSize() : number { 
        if (this.__$_minSampleSize===undefined) {
            this.__$_minSampleSize = 3;
        }
        return this.__$_minSampleSize;
    }

    _samples : core.DartList<_PointAtTime>;

    _index : number;

    addPosition(time : core.DartDuration,position : any) : any {
        this._index += 1;
        if (this._index == VelocityTracker._historySize) this._index = 0;
        this._samples[this._index] = _PointAtTime(position,time);
    }
    getVelocityEstimate() : VelocityEstimate {
        let x : core.DartList<double> = new core.DartList.literal<double>();
        let y : core.DartList<double> = new core.DartList.literal<double>();
        let w : core.DartList<double> = new core.DartList.literal<double>();
        let time : core.DartList<double> = new core.DartList.literal<double>();
        let sampleCount : number = 0;
        let index : number = this._index;
        let newestSample : _PointAtTime = this._samples[index];
        if (op(Op.EQUALS,newestSample,null)) return null;
        let previousSample : _PointAtTime = newestSample;
        let oldestSample : _PointAtTime = newestSample;
        do{
            let sample : _PointAtTime = this._samples[index];
            if (op(Op.EQUALS,sample,null)) break;
            let age : double = new core.DartInt((op(Op.MINUS,newestSample.time,sample.time)).inMilliseconds).toDouble();
            let delta : double = new core.DartInt(new core.DartInt((op(Op.MINUS,sample.time,previousSample.time)).inMilliseconds).abs()).toDouble();
            previousSample = sample;
            if (age > VelocityTracker._horizonMilliseconds || delta > VelocityTracker._assumePointerMoveStoppedMilliseconds) break;
            oldestSample = sample;
            let position : any = sample.point;
            x.add(position.dx);
            y.add(position.dy);
            w.add(1.0);
            time.add(-age);
            index = (index == 0 ? VelocityTracker._historySize : index) - 1;
            sampleCount += 1;
        } while (sampleCount < VelocityTracker._historySize);
        if (sampleCount >= VelocityTracker._minSampleSize) {
            let xSolver : lib3.LeastSquaresSolver = lib3.LeastSquaresSolver(time,x,w);
            let xFit : lib3.PolynomialFit = xSolver.solve(2);
            if (xFit != null) {
                let ySolver : lib3.LeastSquaresSolver = lib3.LeastSquaresSolver(time,y,w);
                let yFit : lib3.PolynomialFit = ySolver.solve(2);
                if (yFit != null) {
                    return VelocityEstimate({
                        pixelsPerSecond : Offset(xFit.coefficients[1] * 1000,yFit.coefficients[1] * 1000),confidence : xFit.confidence * yFit.confidence,duration : op(Op.MINUS,newestSample.time,oldestSample.time),offset : op(Op.MINUS,newestSample.point,oldestSample.point)});
                }
            }
        }
        return VelocityEstimate({
            pixelsPerSecond : Offset.zero,confidence : 1.0,duration : op(Op.MINUS,newestSample.time,oldestSample.time),offset : op(Op.MINUS,newestSample.point,oldestSample.point)});
    }
    getVelocity() : Velocity {
        let estimate : VelocityEstimate = this.getVelocityEstimate();
        if (op(Op.EQUALS,estimate,null) || op(Op.EQUALS,estimate.pixelsPerSecond,Offset.zero)) return Velocity.zero;
        return Velocity({
            pixelsPerSecond : estimate.pixelsPerSecond});
    }
    constructor() {
    }
    @defaultConstructor
    VelocityTracker() {
        this._samples = core.DartList(VelocityTracker._historySize);
        this._index = 0;
    }
}

export class properties {
}
