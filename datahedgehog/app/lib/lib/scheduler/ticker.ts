/** Library asset:datahedgehog_monitor/lib/lib/scheduler/ticker.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./binding";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export var _complete : () => any = () =>  {
};
export var _complete : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (_completed == null); */;
    properties._completed = true;
    properties._primaryCompleter.complete(null);
    ((_870_)=>(!!_870_)?_870_.complete(null):null)(properties._secondaryCompleter);
};
export var _cancel : (ticker : Ticker) => any = (ticker : Ticker) : any =>  {
    /* TODO (AssertStatementImpl) : assert (_completed == null); */;
    properties._completed = false;
    ((_871_)=>(!!_871_)?_871_.completeError(TickerCanceled(ticker)):null)(properties._secondaryCompleter);
};
export var whenCompleteOrCancel : (callback : any) => any = (callback : any) : any =>  {
    var thunk : (value : any) => any = (value : any) : any =>  {
        callback();
    };
    op(Op.LT,properties.orCancel.then,);
    op(Op.GT,,(thunk));
    onError:
        thunk;
};
export var asStream : () => any = () =>  {
    return properties._primaryCompleter.future.asStream();
};
export var catchError : (onError : Function,_namedArguments? : {test? : (error : any) => boolean}) => any = (onError : Function,_namedArguments? : {test? : (error : any) => boolean}) =>  {
    let {test} = Object.assign({
    }, _namedArguments );
    return properties._primaryCompleter.future.catchError(onError,{
        test : test});
};
export var then : <E>(f : <E>(value : any) => any,_namedArguments? : {onError? : Function}) => async.Future<E> = <E>(f : <E>(value : any) => any,_namedArguments? : {onError? : Function}) : async.Future<E> =>  {
    let {onError} = Object.assign({
    }, _namedArguments );
    return properties._primaryCompleter.future.then(f,{
        onError : onError});
};
export var timeout : (timeLimit : core.DartDuration,_namedArguments? : {onTimeout? : () => any}) => any = (timeLimit : core.DartDuration,_namedArguments? : {onTimeout? : () => any}) =>  {
    let {onTimeout} = Object.assign({
    }, _namedArguments );
    return properties._primaryCompleter.future.timeout(timeLimit,{
        onTimeout : onTimeout});
};
export var whenComplete : (action : () => any) => any = (action : () => any) =>  {
    return properties._primaryCompleter.future.whenComplete(action);
};
export var toString : () => string = () : string =>  {
    return `${lib4.describeIdentity(this)}(${properties._completed == null ? "active" : properties._completed ? "complete" : "canceled"})`;
};
export namespace TickerProvider {
    export type Constructors = 'TickerProvider';
    export type Interface = Omit<TickerProvider, Constructors>;
}
@DartClass
export class TickerProvider {
    constructor() {
    }
    @defaultConstructor
    TickerProvider() {
    }
    @Abstract
    createTicker(onTick : (elapsed : core.DartDuration) => any) : Ticker{ throw 'abstract'}
}

export namespace Ticker {
    export type Constructors = 'Ticker';
    export type Interface = Omit<Ticker, Constructors>;
}
@DartClass
export class Ticker {
    constructor(_onTick : (elapsed : core.DartDuration) => any,_namedArguments? : {debugLabel? : string}) {
    }
    @defaultConstructor
    Ticker(_onTick : (elapsed : core.DartDuration) => any,_namedArguments? : {debugLabel? : string}) {
        let {debugLabel} = Object.assign({
        }, _namedArguments );
        this._muted = false;
        this._onTick = _onTick;
        this.debugLabel = debugLabel;
        /* TODO (AssertStatementImpl) : assert (() {_debugCreationStack = StackTrace.current; return true;}()); */;
    }
    _future : TickerFuture;

    get muted() : boolean {
        return this._muted;
    }
    _muted : boolean;

    set muted(value : boolean) {
        if (value == this.muted) return;
        this._muted = value;
        if (value) {
            this.unscheduleTick();
        }else if (this.shouldScheduleTick) {
            this.scheduleTick();
        }
    }
    get isTicking() : boolean {
        if (op(Op.EQUALS,this._future,null)) return false;
        if (this.muted) return false;
        if (lib3.properties.SchedulerBinding.instance.framesEnabled) return true;
        if (lib3.properties.SchedulerBinding.instance.schedulerPhase != lib3.SchedulerPhase.idle) return true;
        return false;
    }
    get isActive() : boolean {
        return this._future != null;
    }
    _startTime : core.DartDuration;

    start() : TickerFuture {
        /* TODO (AssertStatementImpl) : assert (() {if (isActive) {throw FlutterError('A ticker was started twice.\n' 'A ticker that is already active cannot be started again without first stopping it.\n' 'The affected ticker was: ${toString(debugIncludeStack: true)}');} return true;}()); */;
        /* TODO (AssertStatementImpl) : assert (_startTime == null); */;
        this._future = TickerFuture._();
        if (this.shouldScheduleTick) {
            this.scheduleTick();
        }
        if (op(Op.GT,lib3.properties.SchedulerBinding.instance.schedulerPhase.index,lib3.SchedulerPhase.idle.index) && op(Op.LT,lib3.properties.SchedulerBinding.instance.schedulerPhase.index,lib3.SchedulerPhase.postFrameCallbacks.index)) this._startTime = lib3.properties.SchedulerBinding.instance.currentFrameTimeStamp;
        return this._future;
    }
    stop(_namedArguments? : {canceled? : boolean}) : any {
        let {canceled} = Object.assign({
            "canceled" : false}, _namedArguments );
        if (!this.isActive) return;
        let localFuture : TickerFuture = this._future;
        this._future = null;
        this._startTime = null;
        /* TODO (AssertStatementImpl) : assert (!isActive); */;
        this.unscheduleTick();
        if (canceled) {
            localFuture._cancel(this);
        }else {
            localFuture._complete();
        }
    }
    _onTick : (elapsed : core.DartDuration) => any;

    _animationId : number;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    get scheduled() : boolean {
        return this._animationId != null;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    get shouldScheduleTick() : boolean {
        return !this.muted && this.isActive && !this.scheduled;
    }
    _tick(timeStamp : core.DartDuration) : any {
        /* TODO (AssertStatementImpl) : assert (isTicking); */;
        /* TODO (AssertStatementImpl) : assert (scheduled); */;
        this._animationId = null;
        this._startTime = ( this._startTime ) || ( timeStamp );
        this._onTick(op(Op.MINUS,timeStamp,this._startTime));
        if (this.shouldScheduleTick) this.scheduleTick({
            rescheduling : true});
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    scheduleTick(_namedArguments? : {rescheduling? : boolean}) : any {
        let {rescheduling} = Object.assign({
            "rescheduling" : false}, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (!scheduled); */;
        /* TODO (AssertStatementImpl) : assert (shouldScheduleTick); */;
        this._animationId = lib3.properties.SchedulerBinding.instance.scheduleFrameCallback(this._tick.bind(this),{
            rescheduling : rescheduling});
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    unscheduleTick() : any {
        if (this.scheduled) {
            lib3.properties.SchedulerBinding.instance.cancelFrameCallbackWithId(this._animationId);
            this._animationId = null;
        }
        /* TODO (AssertStatementImpl) : assert (!shouldScheduleTick); */;
    }
    absorbTicker(originalTicker : Ticker) : any {
        /* TODO (AssertStatementImpl) : assert (!isActive); */;
        /* TODO (AssertStatementImpl) : assert (_future == null); */;
        /* TODO (AssertStatementImpl) : assert (_startTime == null); */;
        /* TODO (AssertStatementImpl) : assert (_animationId == null); */;
        /* TODO (AssertStatementImpl) : assert ((originalTicker._future == null) == (originalTicker._startTime == null), 'Cannot absorb Ticker after it has been disposed.'); */;
        if (originalTicker._future != null) {
            this._future = originalTicker._future;
            this._startTime = originalTicker._startTime;
            if (this.shouldScheduleTick) this.scheduleTick();
            originalTicker._future = null;
            originalTicker.unscheduleTick();
        }
        originalTicker.dispose();
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        if (this._future != null) {
            let localFuture : TickerFuture = this._future;
            this._future = null;
            /* TODO (AssertStatementImpl) : assert (!isActive); */;
            this.unscheduleTick();
            localFuture._cancel(this);
        }
        /* TODO (AssertStatementImpl) : assert (() {_startTime = Duration.zero; return true;}()); */;
    }
    debugLabel : string;

    _debugCreationStack : core.DartStackTrace;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString(_namedArguments? : {debugIncludeStack? : boolean}) : string {
        let {debugIncludeStack} = Object.assign({
            "debugIncludeStack" : false}, _namedArguments );
        let buffer : core.DartStringBuffer = core.DartStringBuffer();
        buffer.write(`${this.runtimeType}(`);
        /* TODO (AssertStatementImpl) : assert (() {buffer.write(debugLabel ?? ''); return true;}()); */;
        buffer.write(')');
        /* TODO (AssertStatementImpl) : assert (() {if (debugIncludeStack) {buffer.writeln(); buffer.writeln('The stack trace when the $runtimeType was actually created was:'); FlutterError.defaultStackFilter(_debugCreationStack.toString().trimRight().split('\n')).forEach(buffer.writeln);} return true;}()); */;
        return buffer.toString();
    }
}

export namespace TickerFuture {
    export type Constructors = 'TickerFuture';
    export type Interface = Omit<TickerFuture, Constructors>;
}
@DartClass
@Implements(async.Future)
export class TickerFuture implements async.Future.Interface<any> {
    constructor() {
    }
    @defaultConstructor
    TickerFuture() {
    }
}

export namespace TickerCanceled {
    export type Constructors = 'TickerCanceled';
    export type Interface = Omit<TickerCanceled, Constructors>;
}
@DartClass
@Implements(core.Exception)
export class TickerCanceled implements core.Exception.Interface {
    constructor(ticker? : Ticker) {
    }
    @defaultConstructor
    TickerCanceled(ticker? : Ticker) {
        this.ticker = ticker;
    }
    ticker : Ticker;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        if (this.ticker != null) return `This ticker was canceled: ${this.ticker}`;
        return 'The ticker was canceled before the "orCancel" property was first used.';
    }
}

export class properties {
    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$_primaryCompleter;
    static get _primaryCompleter() { 
        if (this.__$_primaryCompleter===undefined) {
            this.__$_primaryCompleter = op(Op.LT,async.DartCompleter<T>,);
        }
        return this.__$_primaryCompleter;
    }
    static set _primaryCompleter(__$value : any)  { 
        this.__$_primaryCompleter = __$value;
    }

    private static __$_secondaryCompleter;
    static get _secondaryCompleter() { 
        return this.__$_secondaryCompleter;
    }
    static set _secondaryCompleter(__$value : any)  { 
        this.__$_secondaryCompleter = __$value;
    }

    private static __$_completed : boolean;
    static get _completed() : boolean { 
        return this.__$_completed;
    }
    static set _completed(__$value : boolean)  { 
        this.__$_completed = __$value;
    }

    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

    static get orCancel() {
        if (op(Op.EQUALS,properties._secondaryCompleter,null)) {
            properties._secondaryCompleter = op(Op.LT,async.DartCompleter<T>,);
            op(Op.GT,,());
            if (properties._completed != null) {
                if (properties._completed) {
                    properties._secondaryCompleter.complete();
                }else {
                    properties._secondaryCompleter.completeError(new TickerCanceled());
                }
            }
        }
        return properties._secondaryCompleter.future;
    }
    private static __$void : async.DartStream<any>;
    static get void() : async.DartStream<any> { 
        return this.__$void;
    }
    static set void(__$value : async.DartStream<any>)  { 
        this.__$void = __$value;
    }

    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

}
