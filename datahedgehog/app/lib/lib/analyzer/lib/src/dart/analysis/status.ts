/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/analysis/status.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace AnalysisStatus {
    export type Constructors = '_';
    export type Interface = Omit<AnalysisStatus, Constructors>;
}
@DartClass
export class AnalysisStatus {
    private static __$IDLE;
    static get IDLE() { 
        if (this.__$IDLE===undefined) {
            this.__$IDLE = new AnalysisStatus._(false);
        }
        return this.__$IDLE;
    }

    private static __$ANALYZING;
    static get ANALYZING() { 
        if (this.__$ANALYZING===undefined) {
            this.__$ANALYZING = new AnalysisStatus._(true);
        }
        return this.__$ANALYZING;
    }

    _analyzing : boolean;

    @namedConstructor
    _(_analyzing : boolean) {
        this._analyzing = _analyzing;
    }
    static _ : new(_analyzing : boolean) => AnalysisStatus;

    get isAnalyzing() : boolean {
        return this._analyzing;
    }
    get isIdle() : boolean {
        return !this._analyzing;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this._analyzing ? 'analyzing' : 'idle';
    }
}

export namespace Monitor {
    export type Constructors = 'Monitor';
    export type Interface = Omit<Monitor, Constructors>;
}
@DartClass
export class Monitor {
    _completer : async.DartCompleter<core.Null>;

    get signal() : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._completer.future;
            this._completer = new async.DartCompleter<core.Null>();
        } )());
    }

    notify() : void {
        if (!this._completer.isCompleted) {
            this._completer.complete(null);
        }
    }
    constructor() {
    }
    @defaultConstructor
    Monitor() {
        this._completer = new async.DartCompleter<core.Null>();
    }
}

export namespace StatusSupport {
    export type Constructors = 'StatusSupport';
    export type Interface = Omit<StatusSupport, Constructors>;
}
@DartClass
export class StatusSupport {
    _statusController;

    _currentStatus : AnalysisStatus;

    _idleCompleter : async.DartCompleter<core.Null>;

    get currentStatus() : AnalysisStatus {
        return this._currentStatus;
    }
    get stream() : async.DartStream<AnalysisStatus> {
        return this._statusController.stream;
    }
    preTransitionToAnalyzing() : void {
        this._idleCompleter = ( this._idleCompleter ) || ( new async.DartCompleter<core.Null>() );
    }
    transitionToAnalyzing() : void {
        if (this._currentStatus != AnalysisStatus.ANALYZING) {
            this.preTransitionToAnalyzing();
            this._currentStatus = AnalysisStatus.ANALYZING;
            this._statusController.add(AnalysisStatus.ANALYZING);
        }
    }
    transitionToIdle() : void {
        if (this._currentStatus != AnalysisStatus.IDLE) {
            this._currentStatus = AnalysisStatus.IDLE;
            this._statusController.add(AnalysisStatus.IDLE);
        }
        ((_67_)=>(!!_67_)?_67_.complete():null)(this._idleCompleter);
        this._idleCompleter = null;
    }
    waitForIdle() : async.Future<core.Null> {
        return (((t)=>(!!t)?t.future:null)(this._idleCompleter) || new async.Future.value());
    }
    constructor() {
    }
    @defaultConstructor
    StatusSupport() {
        this._statusController = new async.DartStreamController<AnalysisStatus>();
        this._currentStatus = AnalysisStatus.IDLE;
    }
}

export class properties {
}
