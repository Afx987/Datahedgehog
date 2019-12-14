/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/util/utilities_timing.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace CountedStopwatch {
    export type Constructors = core.DartStopwatch.Constructors | 'CountedStopwatch';
    export type Interface = Omit<CountedStopwatch, Constructors>;
}
@DartClass
export class CountedStopwatch extends core.DartStopwatch {
    stopCount : number;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CountedStopwatch() {
        this.stopCount = 0;
    }
    get averageMilliseconds() : number {
        return op(Op.QUOTIENT,this.elapsedMilliseconds,this.stopCount);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    reset() : void {
        super.reset();
        this.stopCount = 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    stop() : void {
        super.stop();
        this.stopCount++;
    }
}

export class properties {
}
