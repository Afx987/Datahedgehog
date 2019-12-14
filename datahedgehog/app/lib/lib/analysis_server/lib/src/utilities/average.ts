/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/utilities/average.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Average {
    export type Constructors = 'Average';
    export type Interface = Omit<Average, Constructors>;
}
@DartClass
export class Average {
    _val : number;

    _sampleCount : number;

    constructor(_sampleCount? : number) {
    }
    @defaultConstructor
    Average(_sampleCount? : number) {
        _sampleCount = _sampleCount || 20;
        this._sampleCount = _sampleCount;
    }
    get value() : number {
        return (this._val || 0);
    }
    addSample(sample : number) : void {
        if (this._val == null) {
            this._val = sample;
        }else {
            this._val = this._val * ((this._sampleCount - 1) / this._sampleCount) + sample * (1 / this._sampleCount);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `average: ${this.value}`;
    }
}

export class properties {
}
