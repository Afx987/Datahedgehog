/** Library asset:datahedgehog_monitor/lib/lib/physics/simulation.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./tolerance";

export namespace Simulation {
    export type Constructors = 'Simulation';
    export type Interface = Omit<Simulation, Constructors>;
}
@DartClass
export class Simulation {
    constructor(_namedArguments? : {tolerance? : lib3.Tolerance}) {
    }
    @defaultConstructor
    Simulation(_namedArguments? : {tolerance? : lib3.Tolerance}) {
        let {tolerance} = Object.assign({
            "tolerance" : lib3.Tolerance.defaultTolerance}, _namedArguments );
        this.tolerance = tolerance;
    }
    @Abstract
    x(time : double) : double{ throw 'abstract'}
    @Abstract
    dx(time : double) : double{ throw 'abstract'}
    @Abstract
    isDone(time : double) : boolean{ throw 'abstract'}
    tolerance : lib3.Tolerance;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}`;
    }
}

export class properties {
}
