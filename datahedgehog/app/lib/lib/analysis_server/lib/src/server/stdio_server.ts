/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/server/stdio_server.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";

export namespace StdioAnalysisServer {
    export type Constructors = 'StdioAnalysisServer';
    export type Interface = Omit<StdioAnalysisServer, Constructors>;
}
@DartClass
export class StdioAnalysisServer {
    socketServer : any;

    constructor(socketServer : any) {
    }
    @defaultConstructor
    StdioAnalysisServer(socketServer : any) {
        this.socketServer = socketServer;
    }
    serveStdio() : async.Future<any> {
        let serverChannel : any = new bare.createInstance(any,null,io.properties.stdin,io.properties.stdout,this.socketServer.instrumentationService);
        this.socketServer.createAnalysisServer(serverChannel);
        return serverChannel.closed;
    }
}

export class properties {
}
