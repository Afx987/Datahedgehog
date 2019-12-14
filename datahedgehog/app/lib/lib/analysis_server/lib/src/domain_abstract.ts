/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/domain_abstract.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";
import * as convert from "@dart2ts/dart/convert";

export namespace AbstractRequestHandler {
    export type Constructors = 'AbstractRequestHandler';
    export type Interface = Omit<AbstractRequestHandler, Constructors>;
}
@DartClass
@Implements(any)
export class AbstractRequestHandler implements any.Interface {
    server : any;

    constructor(server : any) {
    }
    @defaultConstructor
    AbstractRequestHandler(server : any) {
        this.server = server;
    }
    waitForResponses(futures : core.DartMap<any,async.Future<any>>,_namedArguments? : {requestParameters? : any,timeout? : number}) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let {requestParameters,timeout} = Object.assign({
                "timeout" : 500}, _namedArguments );
            let endTime : number = new core.DartDateTime.now().millisecondsSinceEpoch + timeout;
            let responses : core.DartList<any> = new core.DartList.literal<any>();
            for(let pluginInfo of futures.keys) {
                let future : async.Future<any> = futures.get(pluginInfo);
                try {
                    let startTime : number = new core.DartDateTime.now().millisecondsSinceEpoch;
                    let response : any = await future.timeout(new core.DartDuration({
                        milliseconds : math.max(endTime - startTime,0)}));
                    if (response.error != null) {
                        this.server.instrumentationService.logPluginError(pluginInfo.data,response.error.code.name,response.error.message,response.error.stackTrace);
                    }else {
                        responses.add(response);
                    }
                } catch (__error__) {

                    if (is(__error__,async.TimeoutException)){
                        this.server.instrumentationService.logPluginTimeout(pluginInfo.data,new convert.JsonEncoder().convert((((_17_)=>(!!_17_)?_17_.toJson():null)(((_18_)=>(!!_18_)?_18_.toRequest('-'):null)(requestParameters)) || new core.DartMap.literal([
                        ]))));
                    }


                    {
                        let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let exception = __error__;
                        this.server.instrumentationService.logPluginException(pluginInfo.data,exception,stackTrace);
                    }
                }
            }
            return responses;
        } )());
    }

}

export class properties {
}
