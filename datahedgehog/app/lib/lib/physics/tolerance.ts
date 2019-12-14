/** Library asset:datahedgehog_monitor/lib/lib/physics/tolerance.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Tolerance {
    export type Constructors = 'Tolerance';
    export type Interface = Omit<Tolerance, Constructors>;
}
@DartClass
export class Tolerance {
    constructor(_namedArguments? : {distance? : double,time? : double,velocity? : double}) {
    }
    @defaultConstructor
    Tolerance(_namedArguments? : {distance? : double,time? : double,velocity? : double}) {
        let {distance,time,velocity} = Object.assign({
            "distance" : Tolerance._epsilonDefault,
            "time" : Tolerance._epsilonDefault,
            "velocity" : Tolerance._epsilonDefault}, _namedArguments );
        this.distance = distance;
        this.time = time;
        this.velocity = velocity;
    }
    private static __$_epsilonDefault : double;
    static get _epsilonDefault() : double { 
        if (this.__$_epsilonDefault===undefined) {
            this.__$_epsilonDefault = 0.001;
        }
        return this.__$_epsilonDefault;
    }

    private static __$defaultTolerance : Tolerance;
    static get defaultTolerance() : Tolerance { 
        if (this.__$defaultTolerance===undefined) {
            this.__$defaultTolerance = Tolerance();
        }
        return this.__$defaultTolerance;
    }

    distance : double;

    time : double;

    velocity : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `Tolerance(distance: ±${this.distance}, time: ±${this.time}, velocity: ±${this.velocity})`;
    }
}

export class properties {
}
