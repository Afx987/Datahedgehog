/** Library asset:datahedgehog_monitor/lib/lib/isolate/isolate.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export namespace IsolateSpawnException {
    export type Constructors = 'IsolateSpawnException';
    export type Interface = Omit<IsolateSpawnException, Constructors>;
}
@DartClass
@Implements(core.Exception)
export class IsolateSpawnException implements core.Exception.Interface {
    message : string;

    constructor(message : string) {
    }
    @defaultConstructor
    IsolateSpawnException(message : string) {
        this.message = message;
    }
    toString() : string {
        return `IsolateSpawnException: ${this.message}`;
    }
}

export namespace Isolate {
    export type Constructors = 'Isolate';
    export type Interface = Omit<Isolate, Constructors>;
}
@DartClass
export class Isolate {
    private static __$IMMEDIATE : number;
    static get IMMEDIATE() : number { 
        if (this.__$IMMEDIATE===undefined) {
            this.__$IMMEDIATE = 0;
        }
        return this.__$IMMEDIATE;
    }

    private static __$BEFORE_NEXT_EVENT : number;
    static get BEFORE_NEXT_EVENT() : number { 
        if (this.__$BEFORE_NEXT_EVENT===undefined) {
            this.__$BEFORE_NEXT_EVENT = 1;
        }
        return this.__$BEFORE_NEXT_EVENT;
    }

    controlPort : SendPort;

    pauseCapability : Capability;

    terminateCapability : Capability;

    constructor(controlPort : SendPort,_namedArguments? : {pauseCapability? : Capability,terminateCapability? : Capability}) {
    }
    @defaultConstructor
    Isolate(controlPort : SendPort,_namedArguments? : {pauseCapability? : Capability,terminateCapability? : Capability}) {
        let {pauseCapability,terminateCapability} = Object.assign({
        }, _namedArguments );
        this.controlPort = controlPort;
        this.pauseCapability = pauseCapability;
        this.terminateCapability = terminateCapability;
    }
    static get current() : Isolate {
    }
    static get packageRoot() : async.Future<lib3.Uri> {
    }
    static get packageConfig() : async.Future<lib3.Uri> {
    }
    static resolvePackageUri(packageUri : lib3.Uri) : async.Future<lib3.Uri> {
    }
    static spawn(entryPoint : (message : any) => void,message : any,_namedArguments? : {paused? : boolean,errorsAreFatal? : boolean,onExit? : SendPort,onError? : SendPort}) : async.Future<Isolate> {
        let {paused,errorsAreFatal,onExit,onError} = Object.assign({
            "paused" : false}, _namedArguments );
    }
    static spawnUri(uri : lib3.Uri,args : core.DartList<string>,message : any,_namedArguments? : {paused? : boolean,onExit? : SendPort,onError? : SendPort,errorsAreFatal? : boolean,checked? : boolean,environment? : core.DartMap<string,string>,packageRoot? : lib3.Uri,packageConfig? : lib3.Uri,automaticPackageResolution? : boolean}) : async.Future<Isolate> {
        let {paused,onExit,onError,errorsAreFatal,checked,environment,packageRoot,packageConfig,automaticPackageResolution} = Object.assign({
            "paused" : false,
            "automaticPackageResolution" : false}, _namedArguments );
    }
    pause(resumeCapability? : Capability) : Capability {
        resumeCapability = ( resumeCapability ) || ( new Capability() );
        this._pause(resumeCapability);
        return resumeCapability;
    }
    _pause(resumeCapability : Capability) : void {
    }
    resume(resumeCapability : Capability) : void {
    }
    addOnExitListener(responsePort : SendPort,_namedArguments? : {response? : core.DartObject}) : void {
        let {response} = Object.assign({
        }, _namedArguments );
    }
    removeOnExitListener(responsePort : SendPort) : void {
    }
    setErrorsFatal(errorsAreFatal : boolean) : void {
    }
    kill(_namedArguments? : {priority? : number}) : void {
        let {priority} = Object.assign({
            "priority" : Isolate.BEFORE_NEXT_EVENT}, _namedArguments );
    }
    ping(responsePort : SendPort,_namedArguments? : {response? : core.DartObject,priority? : number}) : void {
        let {response,priority} = Object.assign({
            "priority" : Isolate.IMMEDIATE}, _namedArguments );
    }
    addErrorListener(port : SendPort) : void {
    }
    removeErrorListener(port : SendPort) : void {
    }
    get errors() : async.DartStream<any> {
        let controller : async.DartStreamController<any>;
        let port : RawReceivePort;
        var handleError : (message : any) => void = (message : any) : void =>  {
            let errorDescription : string = op(Op.INDEX,message,0);
            let stackDescription : string = op(Op.INDEX,message,1);
            let error = new RemoteError(errorDescription,stackDescription);
            controller.addError(error,error.stackTrace);
        };
        controller = new async.DartStreamController.broadcast({
            sync : true,onListen : () =>  {
                port = new RawReceivePort(handleError);
                this.addErrorListener(port.sendPort);
            },onCancel : () =>  {
                this.removeErrorListener(port.sendPort);
                port.close();
                port = null;
            }});
        return controller.stream;
    }
}

export namespace SendPort {
    export type Constructors = 'SendPort';
    export type Interface = Omit<SendPort, Constructors>;
}
@DartClass
@Implements(Capability)
export class SendPort implements Capability.Interface {
    @Abstract
    send(message : any) : void{ throw 'abstract'}
    @Abstract
    [OperatorMethods.EQUALS](other : any) : boolean{ throw 'abstract'}
    @AbstractProperty
    get hashCode() : number{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    SendPort() {
    }
}

export namespace ReceivePort {
    export type Constructors = never;
    export type Interface = Omit<ReceivePort, Constructors>;
}
@DartClass
@Implements(async.DartStream)
export class ReceivePort implements async.DartStream.Interface<any> {
    constructor() {
    }
    @defaultFactory
    static $ReceivePort() : ReceivePort {
    }
    @namedFactory
    static $fromRawReceivePort(rawPort : RawReceivePort) : ReceivePort {
    }
    static fromRawReceivePort : new(rawPort : RawReceivePort) => ReceivePort;

    @Abstract
    listen(onData : (message : any) => void,_namedArguments? : {onError? : Function,onDone? : () => void,cancelOnError? : boolean}) : async.DartStreamSubscription<any>{ throw 'abstract'}
    @Abstract
    close() : void{ throw 'abstract'}
    @AbstractProperty
    get sendPort() : SendPort{ throw 'abstract'}
}

export namespace RawReceivePort {
    export type Constructors = never;
    export type Interface = Omit<RawReceivePort, Constructors>;
}
@DartClass
export class RawReceivePort {
    constructor(handler? : (event : any) => void) {
    }
    @defaultFactory
    static $RawReceivePort(handler? : (event : any) => void) : RawReceivePort {
    }
    set handler(newHandler : Function){ throw 'abstract'}
    @Abstract
    close() : void{ throw 'abstract'}
    @AbstractProperty
    get sendPort() : SendPort{ throw 'abstract'}
}

export namespace RemoteError {
    export type Constructors = 'RemoteError';
    export type Interface = Omit<RemoteError, Constructors>;
}
@DartClass
@Implements(core.DartError)
export class RemoteError implements core.DartError.Interface {
    _description : string;

    stackTrace : core.DartStackTrace;

    constructor(description : string,stackDescription : string) {
    }
    @defaultConstructor
    RemoteError(description : string,stackDescription : string) {
        this._description = description;
        this.stackTrace = new core.DartStackTrace.fromString(stackDescription);
    }
    toString() : string {
        return this._description;
    }
}

export namespace Capability {
    export type Constructors = never;
    export type Interface = Omit<Capability, Constructors>;
}
@DartClass
export class Capability {
    constructor() {
    }
    @defaultFactory
    static $Capability() : Capability {
    }
}

export class properties {
}
