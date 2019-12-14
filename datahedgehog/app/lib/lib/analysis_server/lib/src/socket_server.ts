/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/socket_server.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace SocketServer {
    export type Constructors = 'SocketServer';
    export type Interface = Omit<SocketServer, Constructors>;
}
@DartClass
export class SocketServer {
    analysisServerOptions : any;

    sdkManager : any;

    defaultSdk : any;

    instrumentationService : any;

    diagnosticServer : any;

    serverPlugin : any;

    fileResolverProvider : any;

    packageResolverProvider : any;

    useSingleContextManager : boolean;

    analysisServer : any;

    userDefinedPlugins : core.DartList<any>;

    constructor(analysisServerOptions : any,sdkManager : any,defaultSdk : any,instrumentationService : any,diagnosticServer : any,serverPlugin : any,fileResolverProvider : any,packageResolverProvider : any,useSingleContextManager : boolean) {
    }
    @defaultConstructor
    SocketServer(analysisServerOptions : any,sdkManager : any,defaultSdk : any,instrumentationService : any,diagnosticServer : any,serverPlugin : any,fileResolverProvider : any,packageResolverProvider : any,useSingleContextManager : boolean) {
        this.analysisServerOptions = analysisServerOptions;
        this.sdkManager = sdkManager;
        this.defaultSdk = defaultSdk;
        this.instrumentationService = instrumentationService;
        this.diagnosticServer = diagnosticServer;
        this.serverPlugin = serverPlugin;
        this.fileResolverProvider = fileResolverProvider;
        this.packageResolverProvider = packageResolverProvider;
        this.useSingleContextManager = useSingleContextManager;
    }
    createAnalysisServer(serverChannel : any) : void {
        if (this.analysisServer != null) {
            let error : any = new bare.createInstance(any,null,RequestErrorCode.SERVER_ALREADY_STARTED,"Server already started");
            serverChannel.sendResponse(new bare.createInstance(any,null,'',{
                error : error}));
            serverChannel.listen((request : any) =>  {
                serverChannel.sendResponse(new bare.createInstance(any,null,request.id,{
                    error : error}));
            });
            return;
        }
        let resourceProvider : any;
        if (op(Op.EQUALS,this.analysisServerOptions.fileReadMode,'as-is')) {
            resourceProvider = PhysicalResourceProvider.INSTANCE;
        }else if (op(Op.EQUALS,this.analysisServerOptions.fileReadMode,'normalize-eol-always')) {
            resourceProvider = new bare.createInstance(any,null,PhysicalResourceProvider.NORMALIZE_EOL_ALWAYS);
        }else {
            throw new core.Exception(`File read mode was set to the unknown mode: ${this.analysisServerOptions}.fileReadMode`);
        }
        this.analysisServer = new bare.createInstance(any,null,serverChannel,resourceProvider,new bare.createInstance(any,null,resourceProvider,this.defaultSdk),createMemoryIndex(),this.serverPlugin,this.analysisServerOptions,this.sdkManager,this.instrumentationService,{
            diagnosticServer : this.diagnosticServer,fileResolverProvider : this.fileResolverProvider,packageResolverProvider : this.packageResolverProvider,useSingleContextManager : this.useSingleContextManager,rethrowExceptions : false});
        this.analysisServer.userDefinedPlugins = this.userDefinedPlugins;
    }
}

export class properties {
}
