/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/server/http_server.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";

export namespace HttpAnalysisServer {
    export type Constructors = 'HttpAnalysisServer';
    export type Interface = Omit<HttpAnalysisServer, Constructors>;
}
@DartClass
export class HttpAnalysisServer {
    private static __$MAX_PRINT_BUFFER_LENGTH : number;
    static get MAX_PRINT_BUFFER_LENGTH() : number { 
        if (this.__$MAX_PRINT_BUFFER_LENGTH===undefined) {
            this.__$MAX_PRINT_BUFFER_LENGTH = 1000;
        }
        return this.__$MAX_PRINT_BUFFER_LENGTH;
    }

    socketServer : any;

    getHandler : any;

    _server : async.Future<io.HttpServer>;

    _printBuffer : core.DartList<string>;

    constructor(socketServer : any) {
    }
    @defaultConstructor
    HttpAnalysisServer(socketServer : any) {
        this._printBuffer = new core.DartList.literal<string>();
        this.socketServer = socketServer;
    }
    get boundPort() : async.Future<number> { 
        return new async.Future.fromPromise(( async () =>  {
            return ((t)=>(!!t)?t.port:null)((await this._server));
        } )());
    }

    close() : void {
        this._server.then((server : io.HttpServer) =>  {
            server.close();
        });
    }
    recordPrint(line : string) : void {
        this._printBuffer.add(line);
        if (this._printBuffer.length > HttpAnalysisServer.MAX_PRINT_BUFFER_LENGTH) {
            this._printBuffer.removeRange(0,this._printBuffer.length - HttpAnalysisServer.MAX_PRINT_BUFFER_LENGTH);
        }
    }
    serveHttp(initialPort? : number) : async.Future<number> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this._server != null) {
                return this.boundPort;
            }
            try {
                this._server = io.HttpServer.bind(io.InternetAddress.LOOPBACK_IP_V4,(initialPort || 0));
                let server : io.HttpServer = await this._server;
                this._handleServer(server);
                return server.port;
            } catch (__error__) {

                {
                    let ignore = __error__;
                    return null;
                }
            }
        } )());
    }

    _handleGetRequest(request : io.HttpRequest) : void {
        if (op(Op.EQUALS,this.getHandler,null)) {
            if (this.socketServer.analysisServer.options.enableNewAnalysisDriver) {
                this.getHandler = new bare.createInstance(any,null,this.socketServer,this._printBuffer);
            }else {
                this.getHandler = new bare.createInstance(any,null,this.socketServer,this._printBuffer);
            }
        }
        this.getHandler.handleGetRequest(request);
    }
    _handleServer(httpServer : io.HttpServer) : void {
        httpServer.listen((request : io.HttpRequest) =>  {
            let updateValues : core.DartList<string> = op(Op.INDEX,request.headers,io.HttpHeaders.UPGRADE);
            if (updateValues != null && updateValues.indexOf('websocket') >= 0) {
                io.WebSocketTransformer.upgrade(request).then((websocket : io.WebSocket) =>  {
                    this._handleWebSocket(websocket);
                });
            }else if (request.method == 'GET') {
                this._handleGetRequest(request);
            }else {
                this._returnUnknownRequest(request);
            }
        });
    }
    _handleWebSocket(socket : io.WebSocket) : void {
        this.socketServer.createAnalysisServer(new bare.createInstance(any,null,socket,this.socketServer.instrumentationService));
    }
    _returnUnknownRequest(request : io.HttpRequest) : void {
        let response : io.HttpResponse = request.response;
        response.statusCode = io.HttpStatus.NOT_FOUND;
        response.headers.contentType = new io.ContentType("text","plain",{
            charset : "utf-8"});
        response.write('Not found');
        response.close();
    }
}

export class properties {
}
