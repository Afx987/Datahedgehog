/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/plugin/request_converter.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace RequestConverter {
    export type Constructors = 'RequestConverter';
    export type Interface = Omit<RequestConverter, Constructors>;
}
@DartClass
export class RequestConverter {
    convertAnalysisReanalyzeParams(params : any) : any {
        return new bare.createInstance(any,null,{
            roots : params.roots});
    }
    convertAnalysisService(service : any) : any {
        return new bare.createInstance(any,null,service.name);
    }
    convertAnalysisSetPriorityFilesParams(params : any) : any {
        return new bare.createInstance(any,null,params.files);
    }
    convertAnalysisSetSubscriptionsParams(params : any) : any {
        let serverSubscriptions : core.DartMap<any,core.DartList<string>> = params.subscriptions;
        let pluginSubscriptions : core.DartMap<any,core.DartList<string>> = new core.DartMap.literal([
        ]);
        for(let service of serverSubscriptions.keys) {
            try {
                pluginSubscriptions.set(this.convertAnalysisService(service),serverSubscriptions.get(service));
            } catch (__error__) {

                {
                    let exception = __error__;
                }
            }
        }
        return new bare.createInstance(any,null,pluginSubscriptions);
    }
    convertAnalysisUpdateContentParams(params : any) : any {
        return new bare.createInstance(any,null,params.files);
    }
    constructor() {
    }
    @defaultConstructor
    RequestConverter() {
    }
}

export class properties {
}
