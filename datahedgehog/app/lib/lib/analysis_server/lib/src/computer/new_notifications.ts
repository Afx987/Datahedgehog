/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/computer/new_notifications.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var new_sendDartNotificationNavigation : (analysisServer : any,result : any) => void = (analysisServer : any,result : any) : void =>  {
    let unit = result.unit;
    if (unit != null) {
        let collector : any = new bare.createInstance(any,null);
        computeDartNavigation(collector,unit,null,null);
        collector.createRegions();
        let params = new bare.createInstance(any,null,result.path,collector.regions,collector.targets,collector.files);
        analysisServer.sendNotification(params.toNotification());
    }
};
export var new_sendDartNotificationOccurrences : (analysisServer : any,result : any) => void = (analysisServer : any,result : any) : void =>  {
    let unit = result.unit;
    if (unit != null) {
        let collector : any = new bare.createInstance(any,null);
        addDartOccurrences(collector,unit);
        let params = new bare.createInstance(any,null,result.path,collector.allOccurrences);
        analysisServer.sendNotification(params.toNotification());
    }
};
export var new_sendErrorNotification : (analysisServer : any,result : any) => void = (analysisServer : any,result : any) : void =>  {
    let serverErrors = null /*topLevl*/.doAnalysisError_listFromEngine(result.driver.analysisOptions,result.lineInfo,result.errors);
    let params = new bare.createInstance(any,null,result.path,serverErrors);
    analysisServer.sendNotification(params.toNotification());
};
export class properties {
}
