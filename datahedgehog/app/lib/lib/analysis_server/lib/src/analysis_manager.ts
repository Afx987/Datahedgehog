/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/analysis_manager.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as convert from "@dart2ts/dart/convert";

export namespace AnalysisManager {
    export type Constructors = 'AnalysisManager';
    export type Interface = Omit<AnalysisManager, Constructors>;
}
@DartClass
export class AnalysisManager {
    private static __$PORT : number;
    static get PORT() : number { 
        if (this.__$PORT===undefined) {
            this.__$PORT = 3333;
        }
        return this.__$PORT;
    }

    process : io.Process;

    channel : any;

    stop() : async.Future<boolean> { 
        return new async.Future.fromPromise(( async () =>  {
            if (op(Op.EQUALS,this.process,null)) {
                await this.channel.close();
                return false;
            }
            let result : number = await this.channel.sendRequest(new bare.createInstance(any,null).toRequest('0')).timeout(new core.DartDuration({
                seconds : 2}),{
                onTimeout : () =>  {
                    core.print('Expected shutdown response');
                }}).then((response : any) =>  {
                return this.channel.close().then((_ : any) =>  {
                    return this.process.exitCode;
                });
            }).timeout(new core.DartDuration({
                seconds : 2}),{
                onTimeout : () =>  {
                    core.print('Expected server to shutdown');
                    this.process.kill();
                }});
            if (result != null && result != 0) {
                io.properties.exitCode = result;
            }
            return true;
        } )());
    }

    _launchServer(pathToServer : string) : async.Future<AnalysisManager> { 
        return new async.Future.fromPromise(( async () =>  {
            try {
                let serverArgs : core.DartList<string> = new core.DartList.literal(pathToServer,'--port',new core.DartInt(AnalysisManager.PORT).toString());
                let process : io.Process = await io.Process.start(io.Platform.executable,serverArgs);
                return this._listenForPort(process);
            } catch (__error__) {

                {
                    let error = __error__;
                    io.properties.exitCode = 1;
                    throw `Failed to launch analysis server: ${error}`;
                }
            }
        } )());
    }

    _listenForPort(process : io.Process) : async.Future<AnalysisManager> { 
        return new async.Future.fromPromise(( async () =>  {
            this.process = process;
            let out : async.DartStream<any> = process.stdout.transform(convert.properties.UTF8.decoder).asBroadcastStream();
            out.listen((line : any) =>  {
                return core.print(line);
            });
            process.stderr.pipe(io.properties.stderr);
            let pattern : string = 'Listening on port ';
            try {
                let line : string = await out.firstWhere((line : string) =>  {
                    return new core.DartString(line).startsWith(pattern);
                }).timeout(new core.DartDuration({
                    seconds : 10}));
                let port : string = new core.DartString(new core.DartString(line).substring(new core.DartString(pattern).length)).trim();
                let url : string = `ws://${io.InternetAddress.LOOPBACK_IP_V4.address}:${port}/`;
                return this._openConnection(url);
            } catch (__error__) {

                {
                    let error = __error__;
                    io.properties.exitCode = 1;
                    process.kill();
                    throw 'Expected port from analysis server';
                }
            }
        } )());
    }

    _openConnection(serverUrl : string) : async.Future<AnalysisManager> { 
        return new async.Future.fromPromise(( async () =>  {
            let onError : Function = (error : any) =>  {
                io.properties.exitCode = 1;
                if (this.process != null) {
                    this.process.kill();
                }
                throw `Failed to connect to analysis server at ${serverUrl}\n  ${error}`;
            };
            try {
                let socket : io.WebSocket = await io.WebSocket.connect(serverUrl).catchError(onError);
                this.channel = new bare.createInstance(any,null,socket);
                return this;
            } catch (__error__) {

                {
                    let error = __error__;
                    onError(error);
                }
            }
            return null;
        } )());
    }

    static connect(serverUrl : string) : async.Future<AnalysisManager> {
        return new AnalysisManager()._openConnection(serverUrl);
    }
    static start(serverPath : string) : async.Future<AnalysisManager> {
        return new AnalysisManager()._launchServer(serverPath);
    }
    constructor() {
    }
    @defaultConstructor
    AnalysisManager() {
    }
}

export class properties {
}
