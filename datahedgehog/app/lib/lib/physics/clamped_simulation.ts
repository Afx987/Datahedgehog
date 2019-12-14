/** Library asset:datahedgehog_monitor/lib/lib/physics/clamped_simulation.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./simulation";

export namespace ClampedSimulation {
    export type Constructors = lib3.Simulation.Constructors | 'ClampedSimulation';
    export type Interface = Omit<ClampedSimulation, Constructors>;
}
@DartClass
export class ClampedSimulation extends lib3.Simulation {
    constructor(simulation : lib3.Simulation,_namedArguments? : {xMin? : double,xMax? : double,dxMin? : double,dxMax? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClampedSimulation(simulation : lib3.Simulation,_namedArguments? : {xMin? : double,xMax? : double,dxMin? : double,dxMax? : double}) {
        let {xMin,xMax,dxMin,dxMax} = Object.assign({
            "xMin" : new core.DartDouble(double).negativeInfinity,
            "xMax" : new core.DartDouble(double).infinity,
            "dxMin" : new core.DartDouble(double).negativeInfinity,
            "dxMax" : new core.DartDouble(double).infinity}, _namedArguments );
        this.assert = assert;
        this.simulation = simulation;
        this.xMin = xMin;
        this.xMax = xMax;
        this.dxMin = dxMin;
        this.dxMax = dxMax;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    simulation : lib3.Simulation;

    xMin : double;

    xMax : double;

    dxMin : double;

    dxMax : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    x(time : double) : double {
        return new core.DartDouble(this.simulation.x(time)).clamp(this.xMin,this.xMax);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dx(time : double) : double {
        return new core.DartDouble(this.simulation.dx(time)).clamp(this.dxMin,this.dxMax);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isDone(time : double) : boolean {
        return this.simulation.isDone(time);
    }
}

export class properties {
}
