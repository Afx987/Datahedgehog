/** Library asset:datahedgehog_monitor/lib/lib/physics/gravity_simulation.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./simulation";

export namespace GravitySimulation {
    export type Constructors = lib3.Simulation.Constructors | 'GravitySimulation';
    export type Interface = Omit<GravitySimulation, Constructors>;
}
@DartClass
export class GravitySimulation extends lib3.Simulation {
    constructor(acceleration : double,distance : double,endDistance : double,velocity : double) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GravitySimulation(acceleration : double,distance : double,endDistance : double,velocity : double) {
        this._a = acceleration;
        this._x = distance;
        this._v = velocity;
        this._end = endDistance;
        this.assert = assert;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    _a;
    _x;
    _v;
    _end;

    _x : double;

    _v : double;

    _a : double;

    _end : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    x(time : double) : double {
        return op(Op.PLUS,op(Op.PLUS,this._x,op(Op.TIMES,this._v,time)),0.5 * this._a * time * time);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dx(time : double) : double {
        return op(Op.PLUS,this._v,time * this._a);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isDone(time : double) : boolean {
        return new core.DartDouble(this.x(time)).abs() >= this._end;
    }
}

export class properties {
}
