/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/plugin/analysis/analysis_domain.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace AnalysisDomain {
    export type Constructors = 'AnalysisDomain';
    export type Interface = Omit<AnalysisDomain, Constructors>;
}
@DartClass
export class AnalysisDomain {
    @Abstract
    onResultChanged(result : any) : async.DartStream<any>{ throw 'abstract'}
    @Abstract
    scheduleNotification(context : any,source : any,service : any) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    AnalysisDomain() {
    }
}

export class properties {
    private static __$SET_ANALYSIS_DOMAIN_EXTENSION_POINT_ID : string;
    static get SET_ANALYSIS_DOMAIN_EXTENSION_POINT_ID() : string { 
        if (this.__$SET_ANALYSIS_DOMAIN_EXTENSION_POINT_ID===undefined) {
            this.__$SET_ANALYSIS_DOMAIN_EXTENSION_POINT_ID = Plugin.join(ServerPlugin.UNIQUE_IDENTIFIER,ServerPlugin.SET_ANALISYS_DOMAIN_EXTENSION_POINT);
        }
        return this.__$SET_ANALYSIS_DOMAIN_EXTENSION_POINT_ID;
    }
    static set SET_ANALYSIS_DOMAIN_EXTENSION_POINT_ID(__$value : string)  { 
        this.__$SET_ANALYSIS_DOMAIN_EXTENSION_POINT_ID = __$value;
    }

}
