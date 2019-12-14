/** Library asset:datahedgehog_monitor/lib/lib/front_end/tool/_fasta/standard_deviation.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";

export var average : (elapsedTimes : core.DartList<double>) => double = (elapsedTimes : core.DartList<double>) : double =>  {
    return elapsedTimes.reduce((v : any,e : any) =>  {
        return v + e;
    }) / elapsedTimes.length;
};
export var standardDeviation : (mean : double,elapsedTimes : core.DartList<double>) => double = (mean : double,elapsedTimes : core.DartList<double>) : double =>  {
    let numerator : double = 0.0;
    for(let elapseTime of elapsedTimes) {
        numerator += (elapseTime - mean) * (elapseTime - mean);
    }
    let stdDev : double = math.sqrt(numerator / (elapsedTimes.length - 1));
    return stdDev;
};
export var standardDeviationOfTheMean : (elapsedTimes : core.DartList<double>,stdDev : double) => double = (elapsedTimes : core.DartList<double>,stdDev : double) : double =>  {
    return stdDev / math.sqrt(elapsedTimes.length);
};
export class properties {
}
