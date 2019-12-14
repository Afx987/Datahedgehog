/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/plugin/analysis/occurrences/occurrences_core.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace OccurrencesCollector {
    export type Constructors = 'OccurrencesCollector';
    export type Interface = Omit<OccurrencesCollector, Constructors>;
}
@DartClass
export class OccurrencesCollector {
    @Abstract
    addOccurrences(occurrences : any) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    OccurrencesCollector() {
    }
}

export namespace OccurrencesContributor {
    export type Constructors = 'OccurrencesContributor';
    export type Interface = Omit<OccurrencesContributor, Constructors>;
}
@DartClass
export class OccurrencesContributor {
    @Abstract
    computeOccurrences(collector : OccurrencesCollector,context : any,source : any) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    OccurrencesContributor() {
    }
}

export class properties {
}
