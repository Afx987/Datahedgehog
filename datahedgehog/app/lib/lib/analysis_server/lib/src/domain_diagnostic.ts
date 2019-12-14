/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/domain_diagnostic.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export var _workItemCount : (context : any) => number = (context : any) : number =>  {
    let driver : any = context.driver;
    let items : core.DartList<any> = ((t)=>(!!t)?t.workItems:null)(driver.currentWorkOrder);
    return (((t)=>(!!t)?t.length:null)(items) || 0);
};
export namespace DiagnosticDomainHandler {
    export type Constructors = 'DiagnosticDomainHandler';
    export type Interface = Omit<DiagnosticDomainHandler, Constructors>;
}
@DartClass
@Implements(any)
export class DiagnosticDomainHandler implements any.Interface {
    server : any;

    constructor(server : any) {
    }
    @defaultConstructor
    DiagnosticDomainHandler(server : any) {
        this.server = server;
    }
    computeDiagnostics(request : any) : any {
        let contexts : core.DartList<any> = new core.DartList.literal<any>();
        if (this.server.options.enableNewAnalysisDriver) {
            contexts = this.server.driverMap.values.map(this.extractDataFromDriver.bind(this)).toList();
        }else {
            for(let context of this.server.analysisContexts) {
                contexts.add(this.extractDataFromContext(context));
            }
        }
        return new bare.createInstance(any,null,contexts).toResponse(request.id);
    }
    extractDataFromContext(context : any) : any {
        let explicitFiles : number = 0;
        let implicitFiles : number = 0;
        let workItems : number = 0;
        let exceptions : core.DartSet<string> = new core.DartHashSet<string>();
        if (is(context, any)) {
            workItems = _workItemCount(context);
            let cache = context.analysisCache;
            if (is(cache, any)) {
                let countedTargets : core.DartSet<any> = new core.DartHashSet<any>();
                let iterator : any = cache.iterator();
                while (iterator.moveNext()){
                    let target : any = iterator.key;
                    if (countedTargets.add(target)) {
                        let cacheEntry : any = iterator.value;
                        if (op(Op.EQUALS,cacheEntry,null)) {
                            throw new core.StateError(`mutated cache key detected: ${target} (${target.runtimeType})`);
                        }
                        if (is(target, any)) {
                            if (cacheEntry.explicitlyAdded) {
                                explicitFiles++;
                            }else {
                                implicitFiles++;
                            }
                        }
                        if (cacheEntry.exception != null) {
                            exceptions.add(cacheEntry.exception.toString());
                        }
                    }
                }
            }
        }
        return new bare.createInstance(any,null,context.name,explicitFiles,implicitFiles,workItems,exceptions.toList());
    }
    extractDataFromDriver(driver : any) : any {
        let explicitFileCount : number = driver.addedFiles.length;
        let knownFileCount : number = driver.knownFiles.length;
        return new bare.createInstance(any,null,driver.name,explicitFileCount,knownFileCount - explicitFileCount,driver.numberOfFilesToAnalyze,new core.DartList.literal());
    }
    handleGetServerPort(request : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            try {
                let port : number = await this.server.diagnosticServer.getServerPort();
                this.server.sendResponse(new bare.createInstance(any,null,port).toResponse(request.id));
            } catch (__error__) {

                {
                    let error = __error__;
                    this.server.sendResponse(new bare.createInstance(any,null,request,error));
                }
            }
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleRequest(request : any) : any {
        try {
            let requestName : string = request.method;
            if (requestName == DIAGNOSTIC_GET_DIAGNOSTICS) {
                return this.computeDiagnostics(request);
            }else if (requestName == DIAGNOSTIC_GET_SERVER_PORT) {
                this.handleGetServerPort(request);
                return Response.DELAYED_RESPONSE;
            }
        } catch (__error__) {

            if (is(__error__,any)){
                let exception : any = __error__;
                return exception.response;
            }
        }
        return null;
    }
}

export class properties {
}
