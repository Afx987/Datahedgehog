/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/domain_server.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace ServerDomainHandler {
    export type Constructors = 'ServerDomainHandler';
    export type Interface = Omit<ServerDomainHandler, Constructors>;
}
@DartClass
@Implements(any)
export class ServerDomainHandler implements any.Interface {
    server : any;

    constructor(server : any) {
    }
    @defaultConstructor
    ServerDomainHandler(server : any) {
        this.server = server;
    }
    getVersion(request : any) : any {
        return new bare.createInstance(any,null,AnalysisServer.VERSION).toResponse(request.id);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleRequest(request : any) : any {
        try {
            let requestName : string = request.method;
            if (requestName == SERVER_GET_VERSION) {
                return this.getVersion(request);
            }else if (requestName == SERVER_SET_SUBSCRIPTIONS) {
                return this.setSubscriptions(request);
            }else if (requestName == SERVER_SHUTDOWN) {
                return this.shutdown(request);
            }
        } catch (__error__) {

            if (is(__error__,any)){
                let exception : any = __error__;
                return exception.response;
            }
        }
        return null;
    }
    setSubscriptions(request : any) : any {
        this.server.serverServices = new bare.createInstance(any,null,request).subscriptions.toSet();
        return new bare.createInstance(any,null).toResponse(request.id);
    }
    shutdown(request : any) : any {
        this.server.shutdown();
        let response : any = new bare.createInstance(any,null).toResponse(request.id);
        return response;
    }
}

export class properties {
}
