/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/plugin/analysis/navigation/navigation_core.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace NavigationCollector {
    export type Constructors = 'NavigationCollector';
    export type Interface = Omit<NavigationCollector, Constructors>;
}
@DartClass
export class NavigationCollector {
    @Abstract
    addRegion(offset : number,length : number,targetKind : any,targetLocation : any) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    NavigationCollector() {
    }
}

export namespace NavigationContributor {
    export type Constructors = 'NavigationContributor';
    export type Interface = Omit<NavigationContributor, Constructors>;
}
@DartClass
export class NavigationContributor {
    @Abstract
    computeNavigation(collector : NavigationCollector,context : any,source : any,offset : number,length : number) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    NavigationContributor() {
    }
}

export class properties {
}
