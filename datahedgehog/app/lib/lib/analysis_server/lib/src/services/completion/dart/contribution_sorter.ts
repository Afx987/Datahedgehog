/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/contribution_sorter.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace DartContributionSorter {
    export type Constructors = 'DartContributionSorter';
    export type Interface = Omit<DartContributionSorter, Constructors>;
}
@DartClass
export class DartContributionSorter {
    @Abstract
    sort(request : any,suggestions : core.DartIterable<any>) : async.Future<any>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    DartContributionSorter() {
    }
}

export class properties {
}
