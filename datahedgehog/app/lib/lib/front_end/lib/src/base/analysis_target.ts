/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/base/analysis_target.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace AnalysisTarget {
    export type Constructors = 'AnalysisTarget';
    export type Interface = Omit<AnalysisTarget, Constructors>;
}
@DartClass
export class AnalysisTarget {
    @AbstractProperty
    get librarySource() : any{ throw 'abstract'}
    @AbstractProperty
    get source() : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    AnalysisTarget() {
    }
}

export class properties {
}
