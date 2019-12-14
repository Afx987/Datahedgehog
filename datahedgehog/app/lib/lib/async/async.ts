/** Library asset:datahedgehog_monitor/lib/lib/async/async.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as _internal from "@dart2ts/dart/_internal";
import * as collection from "@dart2ts/dart/core";

export var _startMicrotaskLoop : () => void = () : void =>  {
    properties._isInCallbackLoop = true;
    try {
        _microtaskLoop();
    } finally {
        properties._lastPriorityCallback = null;
        properties._isInCallbackLoop = false;
        if (properties._nextCallback != null) {
            _AsyncRun._scheduleImmediate(_startMicrotaskLoop);
        }
    }
};
export var _registerErrorHandler : <R>(errorHandler : Function,zone : Zone) => Function = <R>(errorHandler : Function,zone : Zone) : Function =>  {
    if (is(errorHandler, <R,T1,T2>(arg1 : core.Null,arg2 : core.Null) => any)) {
        return zone.registerBinaryCallback(errorHandler as any);
    }else {
        return zone.registerUnaryCallback(errorHandler as any);
    }
};
export var _rootFork : (self : Zone,parent : ZoneDelegate,zone : Zone,specification : ZoneSpecification,zoneValues : core.DartMap<any,any>) => Zone = (self : Zone,parent : ZoneDelegate,zone : Zone,specification : ZoneSpecification,zoneValues : core.DartMap<any,any>) : Zone =>  {
    _internal.properties.printToZone = _printToZone;
    if (op(Op.EQUALS,specification,null)) {
        specification = new ZoneSpecification();
    }else if (isNot(specification, _ZoneSpecification)) {
        throw new core.ArgumentError("ZoneSpecifications must be instantiated" + " with the provided constructor.");
    }
    let valueMap : core.DartMap<any,any>;
    if (zoneValues == null) {
        if (is(zone, _Zone)) {
            valueMap = zone._map;
        }else {
            valueMap = new core.DartHashMap<any,any>();
        }
    }else {
        valueMap = new core.DartHashMap.from(zoneValues);
    }
    return new _CustomZone(zone,specification,valueMap);
};
export var _completeWithErrorCallback : (result : _Future<any>,error : any,stackTrace : any) => void = (result : _Future<any>,error : any,stackTrace : any) : void =>  {
    let replacement : AsyncError = Zone.current.errorCallback(error,stackTrace);
    if (replacement != null) {
        error = _nonNullError(replacement.error);
        stackTrace = replacement.stackTrace;
    }
    result._completeError(error,stackTrace);
};
export var _asyncCompleteWithErrorCallback : (result : _Future<any>,error : any,stackTrace : any) => void = (result : _Future<any>,error : any,stackTrace : any) : void =>  {
    let replacement : AsyncError = Zone.current.errorCallback(error,stackTrace);
    if (replacement != null) {
        error = _nonNullError(replacement.error);
        stackTrace = replacement.stackTrace;
    }
    result._asyncCompleteError(error,stackTrace);
};
export var _nonNullError : (error : core.DartObject) => core.DartObject = (error : core.DartObject) : core.DartObject =>  {
    return (error || new core.NullThrownError());
};
export var _parentDelegate : (zone : _Zone) => ZoneDelegate = (zone : _Zone) : ZoneDelegate =>  {
    if (op(Op.EQUALS,zone.parent,null)) return null;
    return zone.parent._delegate;
};
export var _microtaskLoop : () => void = () : void =>  {
    while (properties._nextCallback != null){
        properties._lastPriorityCallback = null;
        let entry : _AsyncCallbackEntry = properties._nextCallback;
        properties._nextCallback = entry.next;
        if (op(Op.EQUALS,properties._nextCallback,null)) properties._lastCallback = null;
        ((entry.callback))();
    }
};
export var _rethrow : (error : core.DartObject,stackTrace : core.DartStackTrace) => void = (error : core.DartObject,stackTrace : core.DartStackTrace) : void =>  {
};
export var _scheduleAsyncCallback : (callback : () => void) => void = (callback : () => void) : void =>  {
    let newEntry : _AsyncCallbackEntry = new _AsyncCallbackEntry(callback);
    if (op(Op.EQUALS,properties._nextCallback,null)) {
        properties._nextCallback = properties._lastCallback = newEntry;
        if (!properties._isInCallbackLoop) {
            _AsyncRun._scheduleImmediate(_startMicrotaskLoop);
        }
    }else {
        properties._lastCallback.next = newEntry;
        properties._lastCallback = newEntry;
    }
};
export var _schedulePriorityAsyncCallback : (callback : () => void) => void = (callback : () => void) : void =>  {
    if (op(Op.EQUALS,properties._nextCallback,null)) {
        _scheduleAsyncCallback(callback);
        properties._lastPriorityCallback = properties._lastCallback;
        return;
    }
    let entry : _AsyncCallbackEntry = new _AsyncCallbackEntry(callback);
    if (op(Op.EQUALS,properties._lastPriorityCallback,null)) {
        entry.next = properties._nextCallback;
        properties._nextCallback = properties._lastPriorityCallback = entry;
    }else {
        entry.next = properties._lastPriorityCallback.next;
        properties._lastPriorityCallback.next = entry;
        properties._lastPriorityCallback = entry;
        if (op(Op.EQUALS,entry.next,null)) {
            properties._lastCallback = entry;
        }
    }
};
export var scheduleMicrotask : (callback : () => void) => void = (callback : () => void) : void =>  {
    let currentZone : _Zone = Zone.current;
    if (core.identical(properties._ROOT_ZONE,currentZone)) {
        _rootScheduleMicrotask(null,null,properties._ROOT_ZONE,callback);
        return;
    }
    let implementation : _ZoneFunction<any> = currentZone._scheduleMicrotask;
    if (core.identical(properties._ROOT_ZONE,implementation.zone) && properties._ROOT_ZONE.inSameErrorZone(currentZone)) {
        _rootScheduleMicrotask(null,null,currentZone,currentZone.registerCallback(callback));
        return;
    }
    Zone.current.scheduleMicrotask(Zone.current.bindCallback(callback,{
        runGuarded : true}));
};
export var _invokeErrorHandler : (errorHandler : Function,error : core.DartObject,stackTrace : core.DartStackTrace) => any = (errorHandler : Function,error : core.DartObject,stackTrace : core.DartStackTrace) =>  {
    if (is(errorHandler, <R,T1,T2>(arg1 : core.Null,arg2 : core.Null) => any)) {
        return ((errorHandler as any))(error,stackTrace);
    }else {
        let unaryErrorHandler : <R,T>(arg : any) => any = errorHandler;
        return unaryErrorHandler(error);
    }
};
export var _runGuarded : (notificationHandler : () => any) => void = (notificationHandler : () => any) : void =>  {
    if (op(Op.EQUALS,notificationHandler,null)) return;
    try {
        notificationHandler();
    } catch (__error__) {

        {
            let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
            let e = __error__;
            Zone.current.handleUncaughtError(e,s);
        }
    }
};
export var _printToZone : (line : string) => void = (line : string) : void =>  {
    Zone.current.print(line);
};
export var _rootPrint : (self : Zone,parent : ZoneDelegate,zone : Zone,line : string) => void = (self : Zone,parent : ZoneDelegate,zone : Zone,line : string) : void =>  {
    _internal.printToConsole(line);
};
export var _nullDataHandler : (value : core.DartObject) => void = (value : core.DartObject) : void =>  {
};
export var _nullErrorHandler : (error : core.DartObject,stackTrace? : core.DartStackTrace) => void = (error : core.DartObject,stackTrace? : core.DartStackTrace) : void =>  {
    Zone.current.handleUncaughtError(error,stackTrace);
};
export var _nullDoneHandler : () => void = () : void =>  {
};
export var _runUserCode : <T>(userCode : <T>() => T,onSuccess : <T>(value : T) => any,onError : <T>(error : any,stackTrace : core.DartStackTrace) => any) => any = <T>(userCode : <T>() => T,onSuccess : <T>(value : T) => any,onError : <T>(error : any,stackTrace : core.DartStackTrace) => any) =>  {
    try {
        onSuccess(userCode());
    } catch (__error__) {

        {
            let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
            let e = __error__;
            let replacement : AsyncError = Zone.current.errorCallback(e,s);
            if (op(Op.EQUALS,replacement,null)) {
                onError(e,s);
            }else {
                let error = _nonNullError(replacement.error);
                let stackTrace = replacement.stackTrace;
                onError(error,stackTrace);
            }
        }
    }
};
export var _cancelAndError : (subscription : StreamSubscription<any>,future : _Future<any>,error : any,stackTrace : core.DartStackTrace) => void = (subscription : StreamSubscription<any>,future : _Future<any>,error : any,stackTrace : core.DartStackTrace) : void =>  {
    let cancelFuture = subscription.cancel();
    if (is(cancelFuture, Future<any>) && !core.identical(cancelFuture,Future._nullFuture)) {
        cancelFuture.whenComplete(() =>  {
            return future._completeError(error,stackTrace);
        });
    }else {
        future._completeError(error,stackTrace);
    }
};
export var _cancelAndErrorWithReplacement : (subscription : StreamSubscription<any>,future : _Future<any>,error : any,stackTrace : core.DartStackTrace) => void = (subscription : StreamSubscription<any>,future : _Future<any>,error : any,stackTrace : core.DartStackTrace) : void =>  {
    let replacement : AsyncError = Zone.current.errorCallback(error,stackTrace);
    if (replacement != null) {
        error = _nonNullError(replacement.error);
        stackTrace = replacement.stackTrace;
    }
    _cancelAndError(subscription,future,error,stackTrace);
};
export var _rootHandleUncaughtError : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,error : any,stackTrace : core.DartStackTrace) => R = <R>(self : Zone,parent : ZoneDelegate,zone : Zone,error : any,stackTrace : core.DartStackTrace) : R =>  {
    _schedulePriorityAsyncCallback(() =>  {
        if (op(Op.EQUALS,error,null)) error = new core.NullThrownError();
        if (op(Op.EQUALS,stackTrace,null)) throw error;
        _rethrow(error,stackTrace);
    });
};
export var _cancelAndValue : (subscription : StreamSubscription<any>,future : _Future<any>,value : any) => void = (subscription : StreamSubscription<any>,future : _Future<any>,value : any) : void =>  {
    let cancelFuture = subscription.cancel();
    if (is(cancelFuture, Future<any>) && !core.identical(cancelFuture,Future._nullFuture)) {
        cancelFuture.whenComplete(() =>  {
            return future._complete(value);
        });
    }else {
        future._complete(value);
    }
};
export var _addErrorWithReplacement : (sink : _EventSink<any>,error : any,stackTrace : any) => void = (sink : _EventSink<any>,error : any,stackTrace : any) : void =>  {
    let replacement : AsyncError = Zone.current.errorCallback(error,stackTrace);
    if (replacement != null) {
        error = _nonNullError(replacement.error);
        stackTrace = replacement.stackTrace;
    }
    sink._addError(error,stackTrace);
};
export var _rootCreatePeriodicTimer : (self : Zone,parent : ZoneDelegate,zone : Zone,duration : core.DartDuration,callback : (timer : Timer) => void) => Timer = (self : Zone,parent : ZoneDelegate,zone : Zone,duration : core.DartDuration,callback : (timer : Timer) => void) : Timer =>  {
    if (!core.identical(properties._ROOT_ZONE,zone)) {
        callback = zone.bindUnaryCallback(callback);
    }
    return Timer._createPeriodicTimer(duration,callback);
};
export var _rootCreateTimer : (self : Zone,parent : ZoneDelegate,zone : Zone,duration : core.DartDuration,callback : () => void) => Timer = (self : Zone,parent : ZoneDelegate,zone : Zone,duration : core.DartDuration,callback : () => void) : Timer =>  {
    if (!core.identical(properties._ROOT_ZONE,zone)) {
        callback = zone.bindCallback(callback);
    }
    return Timer._createTimer(duration,callback);
};
export var _rootScheduleMicrotask : (self : Zone,parent : ZoneDelegate,zone : Zone,f : () => any) => void = (self : Zone,parent : ZoneDelegate,zone : Zone,f : () => any) : void =>  {
    if (!core.identical(properties._ROOT_ZONE,zone)) {
        let hasErrorHandler : boolean = !properties._ROOT_ZONE.inSameErrorZone(zone);
        f = zone.bindCallback(f,{
            runGuarded : hasErrorHandler});
        zone = properties._ROOT_ZONE;
    }
    _scheduleAsyncCallback(f);
};
export var runZoned : <R>(body : <R>() => R,_namedArguments? : {zoneValues? : core.DartMap<any,any>,zoneSpecification? : ZoneSpecification,onError? : Function}) => R = <R>(body : <R>() => R,_namedArguments? : {zoneValues? : core.DartMap<any,any>,zoneSpecification? : ZoneSpecification,onError? : Function}) : R =>  {
    let {zoneValues,zoneSpecification,onError} = Object.assign({
    }, _namedArguments );
    let errorHandler : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,error : any,stackTrace : core.DartStackTrace) => any;
    if (onError != null) {
        errorHandler = (self : Zone,parent : ZoneDelegate,zone : Zone,error : any,stackTrace : core.DartStackTrace) =>  {
            try {
                if (is(onError, <R,T1,T2>(arg1 : core.DartObject,arg2 : core.DartStackTrace) => any)) {
                    return self.parent.runBinary(onError,error,stackTrace);
                }
                return self.parent.runUnary(onError,error);
            } catch (__error__) {

                {
                    let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let e = __error__;
                    if (core.identical(e,error)) {
                        return parent.handleUncaughtError(zone,error,stackTrace);
                    }else {
                        return parent.handleUncaughtError(zone,e,s);
                    }
                }
            }
        };
    }
    if (op(Op.EQUALS,zoneSpecification,null)) {
        zoneSpecification = new ZoneSpecification({
            handleUncaughtError : errorHandler});
    }else if (errorHandler != null) {
        zoneSpecification = new ZoneSpecification.from(zoneSpecification,{
            handleUncaughtError : errorHandler});
    }
    let zone : Zone = Zone.current.fork({
        specification : zoneSpecification,zoneValues : zoneValues});
    if (onError != null) {
        return zone.runGuarded(body);
    }else {
        return zone.run(body);
    }
};
export var _rootErrorCallback : (self : Zone,parent : ZoneDelegate,zone : Zone,error : core.DartObject,stackTrace : core.DartStackTrace) => AsyncError = (self : Zone,parent : ZoneDelegate,zone : Zone,error : core.DartObject,stackTrace : core.DartStackTrace) : AsyncError =>  {
    return null;
};
export var _rootRegisterBinaryCallback : <R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : T1,arg2 : T2) => R) => <R,T1,T2>(arg1 : T1,arg2 : T2) => R = <R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : T1,arg2 : T2) => R) : <R,T1,T2>(arg1 : T1,arg2 : T2) => R =>  {
    return f;
};
export var _rootRegisterUnaryCallback : <R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : T) => R) => <R,T>(arg : T) => R = <R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : T) => R) : <R,T>(arg : T) => R =>  {
    return f;
};
export var _rootRegisterCallback : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => R) => <R>() => R = <R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => R) : <R>() => R =>  {
    return f;
};
export var _rootRunBinary : <R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : T1,arg2 : T2) => R,arg1 : T1,arg2 : T2) => R = <R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : T1,arg2 : T2) => R,arg1 : T1,arg2 : T2) : R =>  {
    if (op(Op.EQUALS,Zone._current,zone)) return f(arg1,arg2);
    let old : Zone = Zone._enter(zone);
    try {
        return f(arg1,arg2);
    } finally {
        Zone._leave(old);
    }
};
export var _rootRunUnary : <R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : T) => R,arg : T) => R = <R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : T) => R,arg : T) : R =>  {
    if (op(Op.EQUALS,Zone._current,zone)) return f(arg);
    let old : Zone = Zone._enter(zone);
    try {
        return f(arg);
    } finally {
        Zone._leave(old);
    }
};
export var _rootRun : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => R) => R = <R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => R) : R =>  {
    if (op(Op.EQUALS,Zone._current,zone)) return f();
    let old : Zone = Zone._enter(zone);
    try {
        return f();
    } finally {
        Zone._leave(old);
    }
};
export var _cancelAndErrorClosure : (subscription : StreamSubscription<any>,future : _Future<any>) => (error : any,stackTrace : core.DartStackTrace) => void = (subscription : StreamSubscription<any>,future : _Future<any>) : (error : any,stackTrace : core.DartStackTrace) => void =>  {
    return (error : any,stackTrace : core.DartStackTrace) =>  {
        _cancelAndError(subscription,future,error,stackTrace);
    };
};
export namespace SynchronousStreamController {
    export type Constructors = 'SynchronousStreamController';
    export type Interface<T> = Omit<SynchronousStreamController<T>, Constructors>;
}
@DartClass
@Implements(StreamController)
export class SynchronousStreamController<T> implements StreamController.Interface<T> {
    @Abstract
    add(data : T) : void{ throw 'abstract'}
    @Abstract
    addError(error : core.DartObject,stackTrace? : core.DartStackTrace) : void{ throw 'abstract'}
    @Abstract
    close() : Future<any>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    SynchronousStreamController() {
    }
}

export namespace _DelayedDone {
    export type Constructors = '_DelayedDone';
    export type Interface = Omit<_DelayedDone, Constructors>;
}
@DartClass
@Implements(_DelayedEvent)
export class _DelayedDone implements _DelayedEvent.Interface<any> {
    constructor() {
    }
    @defaultConstructor
    _DelayedDone() {
    }
    perform(dispatch : _EventDispatch<any>) : void {
        dispatch._sendDone();
    }
    get next() : _DelayedEvent<any> {
        return null;
    }
    set next(_ : _DelayedEvent<any>) {
        throw new core.StateError("No events after a done.");
    }
}

export namespace _StreamControllerLifecycle {
    export type Constructors = '_StreamControllerLifecycle';
    export type Interface<T> = Omit<_StreamControllerLifecycle<T>, Constructors>;
}
@DartClass
export class _StreamControllerLifecycle<T> {
    @Abstract
    _subscribe(onData : <T>(data : T) => void,onError : Function,onDone : <T>() => void,cancelOnError : boolean) : StreamSubscription<T>{ throw 'abstract'}
    _recordPause(subscription : StreamSubscription<T>) : void {
    }
    _recordResume(subscription : StreamSubscription<T>) : void {
    }
    _recordCancel(subscription : StreamSubscription<T>) : Future<any> {
        return null;
    }
    constructor() {
    }
    @defaultConstructor
    _StreamControllerLifecycle() {
    }
}

export namespace _StreamController {
    export type Constructors = '_StreamController';
    export type Interface<T> = Omit<_StreamController<T>, Constructors>;
}
@DartClass
@Implements(StreamController,_StreamControllerLifecycle,_EventSink,_EventDispatch)
export class _StreamController<T> implements StreamController.Interface<T>,_StreamControllerLifecycle.Interface<T>,_EventSink.Interface<T>,_EventDispatch.Interface<T> {
    private static __$_STATE_INITIAL : number;
    static get _STATE_INITIAL() : number { 
        if (this.__$_STATE_INITIAL===undefined) {
            this.__$_STATE_INITIAL = 0;
        }
        return this.__$_STATE_INITIAL;
    }

    private static __$_STATE_SUBSCRIBED : number;
    static get _STATE_SUBSCRIBED() : number { 
        if (this.__$_STATE_SUBSCRIBED===undefined) {
            this.__$_STATE_SUBSCRIBED = 1;
        }
        return this.__$_STATE_SUBSCRIBED;
    }

    private static __$_STATE_CANCELED : number;
    static get _STATE_CANCELED() : number { 
        if (this.__$_STATE_CANCELED===undefined) {
            this.__$_STATE_CANCELED = 2;
        }
        return this.__$_STATE_CANCELED;
    }

    private static __$_STATE_SUBSCRIPTION_MASK : number;
    static get _STATE_SUBSCRIPTION_MASK() : number { 
        if (this.__$_STATE_SUBSCRIPTION_MASK===undefined) {
            this.__$_STATE_SUBSCRIPTION_MASK = 3;
        }
        return this.__$_STATE_SUBSCRIPTION_MASK;
    }

    private static __$_STATE_CLOSED : number;
    static get _STATE_CLOSED() : number { 
        if (this.__$_STATE_CLOSED===undefined) {
            this.__$_STATE_CLOSED = 4;
        }
        return this.__$_STATE_CLOSED;
    }

    private static __$_STATE_ADDSTREAM : number;
    static get _STATE_ADDSTREAM() : number { 
        if (this.__$_STATE_ADDSTREAM===undefined) {
            this.__$_STATE_ADDSTREAM = 8;
        }
        return this.__$_STATE_ADDSTREAM;
    }

    _varData;

    _state : number;

    _doneFuture : _Future<any>;

    onListen : () => void;

    onPause : () => void;

    onResume : () => void;

    onCancel : () => any;

    constructor(onListen : () => void,onPause : () => void,onResume : () => void,onCancel : () => any) {
    }
    @defaultConstructor
    _StreamController(onListen : () => void,onPause : () => void,onResume : () => void,onCancel : () => any) {
        this._state = _StreamController._STATE_INITIAL;
        this.onListen = onListen;
        this.onPause = onPause;
        this.onResume = onResume;
        this.onCancel = onCancel;
    }
    get stream() : Stream<T> {
        return new _ControllerStream<T>(this);
    }
    get sink() : StreamSink<T> {
        return new _StreamSinkWrapper<T>(this);
    }
    get _isCanceled() : boolean {
        return (this._state & _StreamController._STATE_CANCELED) != 0;
    }
    get hasListener() : boolean {
        return (this._state & _StreamController._STATE_SUBSCRIBED) != 0;
    }
    get _isInitialState() : boolean {
        return (this._state & _StreamController._STATE_SUBSCRIPTION_MASK) == _StreamController._STATE_INITIAL;
    }
    get isClosed() : boolean {
        return (this._state & _StreamController._STATE_CLOSED) != 0;
    }
    get isPaused() : boolean {
        return this.hasListener ? this._subscription._isInputPaused : !this._isCanceled;
    }
    get _isAddingStream() : boolean {
        return (this._state & _StreamController._STATE_ADDSTREAM) != 0;
    }
    get _mayAddEvent() : boolean {
        return (this._state < _StreamController._STATE_CLOSED);
    }
    get _pendingEvents() : _PendingEvents<T> {
        /* TODO (AssertStatementImpl) : assert (_isInitialState); */;
        if (!this._isAddingStream) {
            return this._varData as core.DartObject;
        }
        let state : _StreamControllerAddStreamState<T> = this._varData as core.DartObject;
        return state.varData as core.DartObject;
    }
    _ensurePendingEvents() : _StreamImplEvents<T> {
        /* TODO (AssertStatementImpl) : assert (_isInitialState); */;
        if (!this._isAddingStream) {
            if (op(Op.EQUALS,this._varData,null)) this._varData = new _StreamImplEvents<T>();
            return this._varData as core.DartObject;
        }
        let state : _StreamControllerAddStreamState<T> = this._varData as core.DartObject;
        if (op(Op.EQUALS,state.varData,null)) state.varData = new _StreamImplEvents<T>();
        return state.varData as core.DartObject;
    }
    get _subscription() : _ControllerSubscription<T> {
        /* TODO (AssertStatementImpl) : assert (hasListener); */;
        if (this._isAddingStream) {
            let addState : _StreamControllerAddStreamState<T> = this._varData as core.DartObject;
            return addState.varData as core.DartObject;
        }
        return this._varData as core.DartObject;
    }
    _badEventState() : core.DartError {
        if (this.isClosed) {
            return new core.StateError("Cannot add event after closing");
        }
        /* TODO (AssertStatementImpl) : assert (_isAddingStream); */;
        return new core.StateError("Cannot add event while adding a stream");
    }
    addStream(source : Stream<T>,_namedArguments? : {cancelOnError? : boolean}) : Future<any> {
        let {cancelOnError} = Object.assign({
            "cancelOnError" : true}, _namedArguments );
        if (!this._mayAddEvent) throw this._badEventState();
        if (this._isCanceled) return new _Future.immediate(null);
        let addState : _StreamControllerAddStreamState<T> = new _StreamControllerAddStreamState<T>(this,this._varData,source,cancelOnError);
        this._varData = addState;
        this._state |= _StreamController._STATE_ADDSTREAM;
        return addState.addStreamFuture;
    }
    get done() : Future<any> {
        return this._ensureDoneFuture();
    }
    _ensureDoneFuture() : Future<any> {
        if (op(Op.EQUALS,this._doneFuture,null)) {
            this._doneFuture = this._isCanceled ? Future._nullFuture : new _Future<any>();
        }
        return this._doneFuture;
    }
    add(value : T) : void {
        if (!this._mayAddEvent) throw this._badEventState();
        this._add(value);
    }
    addError(error : core.DartObject,stackTrace? : core.DartStackTrace) : void {
        if (!this._mayAddEvent) throw this._badEventState();
        error = _nonNullError(error);
        let replacement : AsyncError = Zone.current.errorCallback(error,stackTrace);
        if (replacement != null) {
            error = _nonNullError(replacement.error);
            stackTrace = replacement.stackTrace;
        }
        this._addError(error,stackTrace);
    }
    close() : Future<any> {
        if (this.isClosed) {
            return this._ensureDoneFuture();
        }
        if (!this._mayAddEvent) throw this._badEventState();
        this._closeUnchecked();
        return this._ensureDoneFuture();
    }
    _closeUnchecked() : void {
        this._state |= _StreamController._STATE_CLOSED;
        if (this.hasListener) {
            this._sendDone();
        }else if (this._isInitialState) {
            this._ensurePendingEvents().add(new _DelayedDone());
        }
    }
    _add(value : T) : void {
        if (this.hasListener) {
            this._sendData(value);
        }else if (this._isInitialState) {
            this._ensurePendingEvents().add(new _DelayedData<T>(value));
        }
    }
    _addError(error : core.DartObject,stackTrace : core.DartStackTrace) : void {
        if (this.hasListener) {
            this._sendError(error,stackTrace);
        }else if (this._isInitialState) {
            this._ensurePendingEvents().add(new _DelayedError(error,stackTrace));
        }
    }
    _close() : void {
        /* TODO (AssertStatementImpl) : assert (_isAddingStream); */;
        let addState : _StreamControllerAddStreamState<T> = this._varData as core.DartObject;
        this._varData = addState.varData;
        this._state &= ~_StreamController._STATE_ADDSTREAM;
        addState.complete();
    }
    _subscribe(onData : <T>(data : T) => void,onError : Function,onDone : <T>() => void,cancelOnError : boolean) : StreamSubscription<T> {
        if (!this._isInitialState) {
            throw new core.StateError("Stream has already been listened to.");
        }
        let subscription : _ControllerSubscription<T> = new _ControllerSubscription<T>(this,onData,onError,onDone,cancelOnError);
        let pendingEvents : _PendingEvents<T> = this._pendingEvents;
        this._state |= _StreamController._STATE_SUBSCRIBED;
        if (this._isAddingStream) {
            let addState : _StreamControllerAddStreamState<T> = this._varData as core.DartObject;
            addState.varData = subscription;
            addState.resume();
        }else {
            this._varData = subscription;
        }
        subscription._setPendingEvents(pendingEvents);
        subscription._guardCallback(() =>  {
            _runGuarded(this.onListen);
        });
        return subscription;
    }
    _recordCancel(subscription : StreamSubscription<T>) : Future<any> {
        let result : Future<any>;
        if (this._isAddingStream) {
            let addState : _StreamControllerAddStreamState<T> = this._varData as core.DartObject;
            result = addState.cancel();
        }
        this._varData = null;
        this._state = (this._state & ~(_StreamController._STATE_SUBSCRIBED | _StreamController._STATE_ADDSTREAM)) | _StreamController._STATE_CANCELED;
        if (this.onCancel != null) {
            if (op(Op.EQUALS,result,null)) {
                try {
                    result = this.onCancel();
                } catch (__error__) {

                    {
                        let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let e = __error__;
                        result = ((_) : _Future<any> =>  {
                            {
                                _._asyncCompleteError(e,s);
                                return _;
                            }
                        })(new _Future<any>());
                    }
                }
            }else {
                result = result.whenComplete(this.onCancel);
            }
        }
        var complete : () => void = () : void =>  {
            if (this._doneFuture != null && this._doneFuture._mayComplete) {
                this._doneFuture._asyncComplete(null);
            }
        };
        if (result != null) {
            result = result.whenComplete(complete);
        }else {
            complete();
        }
        return result;
    }
    _recordPause(subscription : StreamSubscription<T>) : void {
        if (this._isAddingStream) {
            let addState : _StreamControllerAddStreamState<T> = this._varData as core.DartObject;
            addState.pause();
        }
        _runGuarded(this.onPause);
    }
    _recordResume(subscription : StreamSubscription<T>) : void {
        if (this._isAddingStream) {
            let addState : _StreamControllerAddStreamState<T> = this._varData as core.DartObject;
            addState.resume();
        }
        _runGuarded(this.onResume);
    }
}

export namespace _SyncStreamControllerDispatch {
    export type Constructors = '_SyncStreamControllerDispatch';
    export type Interface<T> = Omit<_SyncStreamControllerDispatch<T>, Constructors>;
}
@DartClass
@Implements(_StreamController,SynchronousStreamController)
export class _SyncStreamControllerDispatch<T> implements _StreamController.Interface<T>,SynchronousStreamController.Interface<T> {
    @AbstractProperty
    get _state() : number{ throw 'abstract'}
    set _state(state : number){ throw 'abstract'}
    _sendData(data : T) : void {
        this._subscription._add(data);
    }
    _sendError(error : core.DartObject,stackTrace : core.DartStackTrace) : void {
        this._subscription._addError(error,stackTrace);
    }
    _sendDone() : void {
        this._subscription._close();
    }
    constructor() {
    }
    @defaultConstructor
    _SyncStreamControllerDispatch() {
    }
}

export namespace _AsyncStreamControllerDispatch {
    export type Constructors = '_AsyncStreamControllerDispatch';
    export type Interface<T> = Omit<_AsyncStreamControllerDispatch<T>, Constructors>;
}
@DartClass
@Implements(_StreamController)
export class _AsyncStreamControllerDispatch<T> implements _StreamController.Interface<T> {
    _sendData(data : T) : void {
        this._subscription._addPending(new _DelayedData<T>(data));
    }
    _sendError(error : core.DartObject,stackTrace : core.DartStackTrace) : void {
        this._subscription._addPending(new _DelayedError(error,stackTrace));
    }
    _sendDone() : void {
        this._subscription._addPending(new _DelayedDone());
    }
    constructor() {
    }
    @defaultConstructor
    _AsyncStreamControllerDispatch() {
    }
}

export namespace _ControllerEventSinkWrapper {
    export type Constructors = '_ControllerEventSinkWrapper';
    export type Interface<T> = Omit<_ControllerEventSinkWrapper<T>, Constructors>;
}
@DartClass
@Implements(EventSink)
export class _ControllerEventSinkWrapper<T> implements EventSink.Interface<T> {
    _sink : EventSink<any>;

    constructor(_sink : EventSink<any>) {
    }
    @defaultConstructor
    _ControllerEventSinkWrapper(_sink : EventSink<any>) {
        this._sink = _sink;
    }
    add(data : T) : void {
        this._sink.add(data);
    }
    addError(error : any,stackTrace? : core.DartStackTrace) : void {
        this._sink.addError(error,stackTrace);
    }
    close() : void {
        this._sink.close();
    }
}

export namespace _Zone {
    export type Constructors = '_Zone';
    export type Interface = Omit<_Zone, Constructors>;
}
@DartClass
@Implements(Zone)
export class _Zone implements Zone.Interface {
    constructor() {
    }
    @defaultConstructor
    _Zone() {
    }
    @AbstractProperty
    get _run() : _ZoneFunction<<R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => any>{ throw 'abstract'}
    @AbstractProperty
    get _runUnary() : _ZoneFunction<<R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any,arg : any) => any>{ throw 'abstract'}
    @AbstractProperty
    get _runBinary() : _ZoneFunction<<R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any,arg1 : any,arg2 : any) => any>{ throw 'abstract'}
    @AbstractProperty
    get _registerCallback() : _ZoneFunction<<R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => <R>() => any>{ throw 'abstract'}
    @AbstractProperty
    get _registerUnaryCallback() : _ZoneFunction<<R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any) => <R,T>(arg : any) => any>{ throw 'abstract'}
    @AbstractProperty
    get _registerBinaryCallback() : _ZoneFunction<<R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any) => <R,T1,T2>(arg1 : any,arg2 : any) => any>{ throw 'abstract'}
    @AbstractProperty
    get _errorCallback() : _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,error : core.DartObject,stackTrace : core.DartStackTrace) => AsyncError>{ throw 'abstract'}
    @AbstractProperty
    get _scheduleMicrotask() : _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,f : () => void) => void>{ throw 'abstract'}
    @AbstractProperty
    get _createTimer() : _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,duration : core.DartDuration,f : () => void) => Timer>{ throw 'abstract'}
    @AbstractProperty
    get _createPeriodicTimer() : _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,period : core.DartDuration,f : (timer : Timer) => void) => Timer>{ throw 'abstract'}
    @AbstractProperty
    get _print() : _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,line : string) => void>{ throw 'abstract'}
    @AbstractProperty
    get _fork() : _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,specification : ZoneSpecification,zoneValues : core.DartMap<any,any>) => Zone>{ throw 'abstract'}
    @AbstractProperty
    get _handleUncaughtError() : _ZoneFunction<<R>(self : Zone,parent : ZoneDelegate,zone : Zone,error : any,stackTrace : core.DartStackTrace) => any>{ throw 'abstract'}
    @AbstractProperty
    get parent() : _Zone{ throw 'abstract'}
    @AbstractProperty
    get _delegate() : ZoneDelegate{ throw 'abstract'}
    @AbstractProperty
    get _map() : core.DartMap<any,any>{ throw 'abstract'}
    inSameErrorZone(otherZone : Zone) : boolean {
        return core.identical(this,otherZone) || core.identical(this.errorZone,otherZone.errorZone);
    }
}

export namespace _ZoneDelegate {
    export type Constructors = '_ZoneDelegate';
    export type Interface = Omit<_ZoneDelegate, Constructors>;
}
@DartClass
@Implements(ZoneDelegate)
export class _ZoneDelegate implements ZoneDelegate.Interface {
    _delegationTarget : _Zone;

    constructor(_delegationTarget : _Zone) {
    }
    @defaultConstructor
    _ZoneDelegate(_delegationTarget : _Zone) {
        this._delegationTarget = _delegationTarget;
    }
    handleUncaughtError<R>(zone : Zone,error : any,stackTrace : core.DartStackTrace) : R {
        let implementation = this._delegationTarget._handleUncaughtError;
        let implZone : _Zone = implementation.zone;
        let handler : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,error : any,stackTrace : core.DartStackTrace) => any = implementation.function;
        return handler(implZone,_parentDelegate(implZone),zone,error,stackTrace) as core.DartObject;
    }
    run<R>(zone : Zone,f : <R>() => R) : R {
        let implementation = this._delegationTarget._run;
        let implZone : _Zone = implementation.zone;
        let handler : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => any = implementation.function;
        return handler(implZone,_parentDelegate(implZone),zone,f) as core.DartObject;
    }
    runUnary<R,T>(zone : Zone,f : <R,T>(arg : T) => R,arg : T) : R {
        let implementation = this._delegationTarget._runUnary;
        let implZone : _Zone = implementation.zone;
        let handler : <R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any,arg : any) => any = implementation.function;
        return handler(implZone,_parentDelegate(implZone),zone,f,arg) as core.DartObject;
    }
    runBinary<R,T1,T2>(zone : Zone,f : <R,T1,T2>(arg1 : T1,arg2 : T2) => R,arg1 : T1,arg2 : T2) : R {
        let implementation = this._delegationTarget._runBinary;
        let implZone : _Zone = implementation.zone;
        let handler : <R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any,arg1 : any,arg2 : any) => any = implementation.function;
        return handler(implZone,_parentDelegate(implZone),zone,f,arg1,arg2) as core.DartObject;
    }
    registerCallback<R>(zone : Zone,f : <R>() => R) : <R>() => R {
        let implementation = this._delegationTarget._registerCallback;
        let implZone : _Zone = implementation.zone;
        let handler : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => <R>() => any = implementation.function;
        return handler(implZone,_parentDelegate(implZone),zone,f) as core.DartObject;
    }
    registerUnaryCallback<R,T>(zone : Zone,f : <R,T>(arg : T) => R) : <R,T>(arg : T) => R {
        let implementation = this._delegationTarget._registerUnaryCallback;
        let implZone : _Zone = implementation.zone;
        let handler : <R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any) => <R,T>(arg : any) => any = implementation.function;
        return handler(implZone,_parentDelegate(implZone),zone,f) as core.DartObject;
    }
    registerBinaryCallback<R,T1,T2>(zone : Zone,f : <R,T1,T2>(arg1 : T1,arg2 : T2) => R) : <R,T1,T2>(arg1 : T1,arg2 : T2) => R {
        let implementation = this._delegationTarget._registerBinaryCallback;
        let implZone : _Zone = implementation.zone;
        let handler : <R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any) => <R,T1,T2>(arg1 : any,arg2 : any) => any = implementation.function;
        return handler(implZone,_parentDelegate(implZone),zone,f) as core.DartObject;
    }
    errorCallback(zone : Zone,error : core.DartObject,stackTrace : core.DartStackTrace) : AsyncError {
        let implementation = this._delegationTarget._errorCallback;
        let implZone : _Zone = implementation.zone;
        if (core.identical(implZone,properties._ROOT_ZONE)) return null;
        let handler : (self : Zone,parent : ZoneDelegate,zone : Zone,error : core.DartObject,stackTrace : core.DartStackTrace) => AsyncError = implementation.function;
        return handler(implZone,_parentDelegate(implZone),zone,error,stackTrace);
    }
    scheduleMicrotask(zone : Zone,f : () => any) : void {
        let implementation = this._delegationTarget._scheduleMicrotask;
        let implZone : _Zone = implementation.zone;
        let handler : (self : Zone,parent : ZoneDelegate,zone : Zone,f : () => void) => void = implementation.function;
        handler(implZone,_parentDelegate(implZone),zone,f);
    }
    createTimer(zone : Zone,duration : core.DartDuration,f : () => void) : Timer {
        let implementation = this._delegationTarget._createTimer;
        let implZone : _Zone = implementation.zone;
        let handler : (self : Zone,parent : ZoneDelegate,zone : Zone,duration : core.DartDuration,f : () => void) => Timer = implementation.function;
        return handler(implZone,_parentDelegate(implZone),zone,duration,f);
    }
    createPeriodicTimer(zone : Zone,period : core.DartDuration,f : (timer : Timer) => void) : Timer {
        let implementation = this._delegationTarget._createPeriodicTimer;
        let implZone : _Zone = implementation.zone;
        let handler : (self : Zone,parent : ZoneDelegate,zone : Zone,period : core.DartDuration,f : (timer : Timer) => void) => Timer = implementation.function;
        return handler(implZone,_parentDelegate(implZone),zone,period,f);
    }
    print(zone : Zone,line : string) : void {
        let implementation = this._delegationTarget._print;
        let implZone : _Zone = implementation.zone;
        let handler : (self : Zone,parent : ZoneDelegate,zone : Zone,line : string) => void = implementation.function;
        handler(implZone,_parentDelegate(implZone),zone,line);
    }
    fork(zone : Zone,specification : ZoneSpecification,zoneValues : core.DartMap<any,any>) : Zone {
        let implementation = this._delegationTarget._fork;
        let implZone : _Zone = implementation.zone;
        let handler : (self : Zone,parent : ZoneDelegate,zone : Zone,specification : ZoneSpecification,zoneValues : core.DartMap<any,any>) => Zone = implementation.function;
        return handler(implZone,_parentDelegate(implZone),zone,specification,zoneValues);
    }
}

export namespace _StreamSinkWrapper {
    export type Constructors = '_StreamSinkWrapper';
    export type Interface<T> = Omit<_StreamSinkWrapper<T>, Constructors>;
}
@DartClass
@Implements(StreamSink)
export class _StreamSinkWrapper<T> implements StreamSink.Interface<T> {
    _target : StreamController<any>;

    constructor(_target : StreamController<any>) {
    }
    @defaultConstructor
    _StreamSinkWrapper(_target : StreamController<any>) {
        this._target = _target;
    }
    add(data : T) : void {
        this._target.add(data);
    }
    addError(error : core.DartObject,stackTrace? : core.DartStackTrace) : void {
        this._target.addError(error,stackTrace);
    }
    close() : Future<any> {
        return this._target.close();
    }
    addStream(source : Stream<T>,_namedArguments? : {cancelOnError? : boolean}) : Future<any> {
        let {cancelOnError} = Object.assign({
            "cancelOnError" : true}, _namedArguments );
        return this._target.addStream(source,{
            cancelOnError : cancelOnError});
    }
    get done() : Future<any> {
        return this._target.done;
    }
}

export namespace _AddStreamState {
    export type Constructors = '_AddStreamState';
    export type Interface<T> = Omit<_AddStreamState<T>, Constructors>;
}
@DartClass
export class _AddStreamState<T> {
    addStreamFuture : _Future<any>;

    addSubscription : StreamSubscription<any>;

    constructor(controller : _EventSink<T>,source : Stream<any>,cancelOnError : boolean) {
    }
    @defaultConstructor
    _AddStreamState(controller : _EventSink<T>,source : Stream<any>,cancelOnError : boolean) {
        this.addStreamFuture = new _Future<any>();
        this.addSubscription = source.listen(controller._add.bind(controller),{
            onError : cancelOnError ? _AddStreamState.makeErrorHandler(controller) : controller._addError.bind(controller),onDone : controller._close.bind(controller),cancelOnError : cancelOnError});
    }
    static makeErrorHandler(controller : _EventSink<any>) {
        return (e : any,s : core.DartStackTrace) =>  {
            controller._addError(e,s);
            controller._close();
        };
    }
    pause() : void {
        this.addSubscription.pause();
    }
    resume() : void {
        this.addSubscription.resume();
    }
    cancel() : Future<any> {
        let cancel = this.addSubscription.cancel();
        if (op(Op.EQUALS,cancel,null)) {
            this.addStreamFuture._asyncComplete(null);
            return null;
        }
        return cancel.whenComplete(() =>  {
            this.addStreamFuture._asyncComplete(null);
        });
    }
    complete() : void {
        this.addStreamFuture._asyncComplete(null);
    }
}

export namespace StreamIterator {
    export type Constructors = never;
    export type Interface<T> = Omit<StreamIterator<T>, Constructors>;
}
@DartClass
export class StreamIterator<T> {
    constructor(stream : Stream<T>) {
    }
    @defaultFactory
    static $StreamIterator<T>(stream : Stream<T>) : StreamIterator<T> {
        return new _StreamIterator<T>(stream);
    }
    @Abstract
    moveNext() : Future<boolean>{ throw 'abstract'}
    @AbstractProperty
    get current() : T{ throw 'abstract'}
    @Abstract
    cancel() : Future<any>{ throw 'abstract'}
}

export namespace _EventSink {
    export type Constructors = '_EventSink';
    export type Interface<T> = Omit<_EventSink<T>, Constructors>;
}
@DartClass
export class _EventSink<T> {
    @Abstract
    _add(data : T) : void{ throw 'abstract'}
    @Abstract
    _addError(error : core.DartObject,stackTrace : core.DartStackTrace) : void{ throw 'abstract'}
    @Abstract
    _close() : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    _EventSink() {
    }
}

export namespace _EventDispatch {
    export type Constructors = '_EventDispatch';
    export type Interface<T> = Omit<_EventDispatch<T>, Constructors>;
}
@DartClass
export class _EventDispatch<T> {
    @Abstract
    _sendData(data : T) : void{ throw 'abstract'}
    @Abstract
    _sendError(error : core.DartObject,stackTrace : core.DartStackTrace) : void{ throw 'abstract'}
    @Abstract
    _sendDone() : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    _EventDispatch() {
    }
}

export namespace _BufferingStreamSubscription {
    export type Constructors = '_BufferingStreamSubscription';
    export type Interface<T> = Omit<_BufferingStreamSubscription<T>, Constructors>;
}
@DartClass
@Implements(StreamSubscription,_EventSink,_EventDispatch)
export class _BufferingStreamSubscription<T> implements StreamSubscription.Interface<T>,_EventSink.Interface<T>,_EventDispatch.Interface<T> {
    private static __$_STATE_CANCEL_ON_ERROR : number;
    static get _STATE_CANCEL_ON_ERROR() : number { 
        if (this.__$_STATE_CANCEL_ON_ERROR===undefined) {
            this.__$_STATE_CANCEL_ON_ERROR = 1;
        }
        return this.__$_STATE_CANCEL_ON_ERROR;
    }

    private static __$_STATE_CLOSED : number;
    static get _STATE_CLOSED() : number { 
        if (this.__$_STATE_CLOSED===undefined) {
            this.__$_STATE_CLOSED = 2;
        }
        return this.__$_STATE_CLOSED;
    }

    private static __$_STATE_INPUT_PAUSED : number;
    static get _STATE_INPUT_PAUSED() : number { 
        if (this.__$_STATE_INPUT_PAUSED===undefined) {
            this.__$_STATE_INPUT_PAUSED = 4;
        }
        return this.__$_STATE_INPUT_PAUSED;
    }

    private static __$_STATE_CANCELED : number;
    static get _STATE_CANCELED() : number { 
        if (this.__$_STATE_CANCELED===undefined) {
            this.__$_STATE_CANCELED = 8;
        }
        return this.__$_STATE_CANCELED;
    }

    private static __$_STATE_WAIT_FOR_CANCEL : number;
    static get _STATE_WAIT_FOR_CANCEL() : number { 
        if (this.__$_STATE_WAIT_FOR_CANCEL===undefined) {
            this.__$_STATE_WAIT_FOR_CANCEL = 16;
        }
        return this.__$_STATE_WAIT_FOR_CANCEL;
    }

    private static __$_STATE_IN_CALLBACK : number;
    static get _STATE_IN_CALLBACK() : number { 
        if (this.__$_STATE_IN_CALLBACK===undefined) {
            this.__$_STATE_IN_CALLBACK = 32;
        }
        return this.__$_STATE_IN_CALLBACK;
    }

    private static __$_STATE_HAS_PENDING : number;
    static get _STATE_HAS_PENDING() : number { 
        if (this.__$_STATE_HAS_PENDING===undefined) {
            this.__$_STATE_HAS_PENDING = 64;
        }
        return this.__$_STATE_HAS_PENDING;
    }

    private static __$_STATE_PAUSE_COUNT : number;
    static get _STATE_PAUSE_COUNT() : number { 
        if (this.__$_STATE_PAUSE_COUNT===undefined) {
            this.__$_STATE_PAUSE_COUNT = 128;
        }
        return this.__$_STATE_PAUSE_COUNT;
    }

    _onData : <T>(value : T) => void;

    _onError : Function;

    _onDone : () => void;

    _zone : Zone;

    _state : number;

    _cancelFuture : Future<any>;

    _pending : _PendingEvents<T>;

    constructor(onData : <T>(data : T) => void,onError : Function,onDone : <T>() => void,cancelOnError : boolean) {
    }
    @defaultConstructor
    _BufferingStreamSubscription(onData : <T>(data : T) => void,onError : Function,onDone : <T>() => void,cancelOnError : boolean) {
        this._zone = Zone.current;
        this._state = (cancelOnError ? _BufferingStreamSubscription._STATE_CANCEL_ON_ERROR : 0);
        this.onData(onData);
        this.onError(onError);
        this.onDone(onDone);
    }
    _setPendingEvents(pendingEvents : _PendingEvents<T>) : void {
        /* TODO (AssertStatementImpl) : assert (_pending == null); */;
        if (op(Op.EQUALS,pendingEvents,null)) return;
        this._pending = pendingEvents;
        if (!pendingEvents.isEmpty) {
            this._state |= _BufferingStreamSubscription._STATE_HAS_PENDING;
            this._pending.schedule(this);
        }
    }
    onData(handleData : <T>(event : T) => void) : void {
        if (op(Op.EQUALS,handleData,null)) handleData = _nullDataHandler;
        this._onData = this._zone.registerUnaryCallback(handleData);
    }
    onError(handleError : Function) : void {
        if (handleError == null) handleError = _nullErrorHandler;
        this._onError = _registerErrorHandler(handleError,this._zone);
    }
    onDone(handleDone : <T>() => void) : void {
        if (op(Op.EQUALS,handleDone,null)) handleDone = _nullDoneHandler;
        this._onDone = this._zone.registerCallback(handleDone);
    }
    pause(resumeSignal? : Future<any>) : void {
        if (this._isCanceled) return;
        let wasPaused : boolean = this._isPaused;
        let wasInputPaused : boolean = this._isInputPaused;
        this._state = (this._state + _BufferingStreamSubscription._STATE_PAUSE_COUNT) | _BufferingStreamSubscription._STATE_INPUT_PAUSED;
        if (resumeSignal != null) resumeSignal.whenComplete(this.resume.bind(this));
        if (!wasPaused && this._pending != null) this._pending.cancelSchedule();
        if (!wasInputPaused && !this._inCallback) this._guardCallback(this._onPause.bind(this));
    }
    resume() : void {
        if (this._isCanceled) return;
        if (this._isPaused) {
            this._decrementPauseCount();
            if (!this._isPaused) {
                if (this._hasPending && !this._pending.isEmpty) {
                    this._pending.schedule(this);
                }else {
                    /* TODO (AssertStatementImpl) : assert (_mayResumeInput); */;
                    this._state &= ~_BufferingStreamSubscription._STATE_INPUT_PAUSED;
                    if (!this._inCallback) this._guardCallback(this._onResume.bind(this));
                }
            }
        }
    }
    cancel() : Future<any> {
        this._state &= ~_BufferingStreamSubscription._STATE_WAIT_FOR_CANCEL;
        if (!this._isCanceled) {
            this._cancel();
        }
        return (this._cancelFuture || Future._nullFuture);
    }
    asFuture<E>(futureValue? : E) : Future<E> {
        let result : _Future<E> = new _Future<E>();
        this._onDone = () =>  {
            result._complete(futureValue);
        };
        this._onError = (error : any,stackTrace : any) =>  {
            let cancelFuture : Future<any> = this.cancel();
            if (!core.identical(cancelFuture,Future._nullFuture)) {
                cancelFuture.whenComplete(() =>  {
                    result._completeError(error,stackTrace);
                });
            }else {
                result._completeError(error,stackTrace);
            }
        };
        return result;
    }
    get _isInputPaused() : boolean {
        return (this._state & _BufferingStreamSubscription._STATE_INPUT_PAUSED) != 0;
    }
    get _isClosed() : boolean {
        return (this._state & _BufferingStreamSubscription._STATE_CLOSED) != 0;
    }
    get _isCanceled() : boolean {
        return (this._state & _BufferingStreamSubscription._STATE_CANCELED) != 0;
    }
    get _waitsForCancel() : boolean {
        return (this._state & _BufferingStreamSubscription._STATE_WAIT_FOR_CANCEL) != 0;
    }
    get _inCallback() : boolean {
        return (this._state & _BufferingStreamSubscription._STATE_IN_CALLBACK) != 0;
    }
    get _hasPending() : boolean {
        return (this._state & _BufferingStreamSubscription._STATE_HAS_PENDING) != 0;
    }
    get _isPaused() : boolean {
        return this._state >= _BufferingStreamSubscription._STATE_PAUSE_COUNT;
    }
    get _canFire() : boolean {
        return this._state < _BufferingStreamSubscription._STATE_IN_CALLBACK;
    }
    get _mayResumeInput() : boolean {
        return !this._isPaused && (op(Op.EQUALS,this._pending,null) || this._pending.isEmpty);
    }
    get _cancelOnError() : boolean {
        return (this._state & _BufferingStreamSubscription._STATE_CANCEL_ON_ERROR) != 0;
    }
    get isPaused() : boolean {
        return this._isPaused;
    }
    _cancel() : void {
        this._state |= _BufferingStreamSubscription._STATE_CANCELED;
        if (this._hasPending) {
            this._pending.cancelSchedule();
        }
        if (!this._inCallback) this._pending = null;
        this._cancelFuture = this._onCancel();
    }
    _decrementPauseCount() : void {
        /* TODO (AssertStatementImpl) : assert (_isPaused); */;
        this._state -= _BufferingStreamSubscription._STATE_PAUSE_COUNT;
    }
    _add(data : T) : void {
        /* TODO (AssertStatementImpl) : assert (!_isClosed); */;
        if (this._isCanceled) return;
        if (this._canFire) {
            this._sendData(data);
        }else {
            this._addPending(new _DelayedData<T>(data));
        }
    }
    _addError(error : core.DartObject,stackTrace : core.DartStackTrace) : void {
        if (this._isCanceled) return;
        if (this._canFire) {
            this._sendError(error,stackTrace);
        }else {
            this._addPending(new _DelayedError(error,stackTrace));
        }
    }
    _close() : void {
        /* TODO (AssertStatementImpl) : assert (!_isClosed); */;
        if (this._isCanceled) return;
        this._state |= _BufferingStreamSubscription._STATE_CLOSED;
        if (this._canFire) {
            this._sendDone();
        }else {
            this._addPending(new _DelayedDone());
        }
    }
    _onPause() : void {
        /* TODO (AssertStatementImpl) : assert (_isInputPaused); */;
    }
    _onResume() : void {
        /* TODO (AssertStatementImpl) : assert (!_isInputPaused); */;
    }
    _onCancel() : Future<any> {
        /* TODO (AssertStatementImpl) : assert (_isCanceled); */;
        return null;
    }
    _addPending(event : _DelayedEvent<any>) : void {
        let pending : _StreamImplEvents<T> = this._pending;
        if (op(Op.EQUALS,this._pending,null)) {
            pending = this._pending = new _StreamImplEvents<T>();
        }
        pending.add(event);
        if (!this._hasPending) {
            this._state |= _BufferingStreamSubscription._STATE_HAS_PENDING;
            if (!this._isPaused) {
                this._pending.schedule(this);
            }
        }
    }
    _sendData(data : T) : void {
        /* TODO (AssertStatementImpl) : assert (!_isCanceled); */;
        /* TODO (AssertStatementImpl) : assert (!_isPaused); */;
        /* TODO (AssertStatementImpl) : assert (!_inCallback); */;
        let wasInputPaused : boolean = this._isInputPaused;
        this._state |= _BufferingStreamSubscription._STATE_IN_CALLBACK;
        this._zone.runUnaryGuarded(this._onData,data);
        this._state &= ~_BufferingStreamSubscription._STATE_IN_CALLBACK;
        this._checkState(wasInputPaused);
    }
    _sendError(error : any,stackTrace : core.DartStackTrace) : void {
        /* TODO (AssertStatementImpl) : assert (!_isCanceled); */;
        /* TODO (AssertStatementImpl) : assert (!_isPaused); */;
        /* TODO (AssertStatementImpl) : assert (!_inCallback); */;
        let wasInputPaused : boolean = this._isInputPaused;
        var sendError : () => void = () : void =>  {
            if (this._isCanceled && !this._waitsForCancel) return;
            this._state |= _BufferingStreamSubscription._STATE_IN_CALLBACK;
            if (is(this._onError, <R,T1,T2>(arg1 : core.DartObject,arg2 : core.DartStackTrace) => any)) {
                let errorCallback : <R,T1,T2>(arg1 : core.DartObject,arg2 : core.DartStackTrace) => any = this._onError as core.DartObject;
                this._zone.runBinaryGuarded(errorCallback,error,stackTrace);
            }else {
                this._zone.runUnaryGuarded(this._onError as core.DartObject,error);
            }
            this._state &= ~_BufferingStreamSubscription._STATE_IN_CALLBACK;
        };
        if (this._cancelOnError) {
            this._state |= _BufferingStreamSubscription._STATE_WAIT_FOR_CANCEL;
            this._cancel();
            if (is(this._cancelFuture, Future<any>) && !core.identical(this._cancelFuture,Future._nullFuture)) {
                this._cancelFuture.whenComplete(sendError);
            }else {
                sendError();
            }
        }else {
            sendError();
            this._checkState(wasInputPaused);
        }
    }
    _sendDone() : void {
        /* TODO (AssertStatementImpl) : assert (!_isCanceled); */;
        /* TODO (AssertStatementImpl) : assert (!_isPaused); */;
        /* TODO (AssertStatementImpl) : assert (!_inCallback); */;
        var sendDone : () => void = () : void =>  {
            if (!this._waitsForCancel) return;
            this._state |= (_BufferingStreamSubscription._STATE_CANCELED | _BufferingStreamSubscription._STATE_CLOSED | _BufferingStreamSubscription._STATE_IN_CALLBACK);
            this._zone.runGuarded(this._onDone);
            this._state &= ~_BufferingStreamSubscription._STATE_IN_CALLBACK;
        };
        this._cancel();
        this._state |= _BufferingStreamSubscription._STATE_WAIT_FOR_CANCEL;
        if (is(this._cancelFuture, Future<any>) && !core.identical(this._cancelFuture,Future._nullFuture)) {
            this._cancelFuture.whenComplete(sendDone);
        }else {
            sendDone();
        }
    }
    _guardCallback(callback : <T>() => void) : void {
        /* TODO (AssertStatementImpl) : assert (!_inCallback); */;
        let wasInputPaused : boolean = this._isInputPaused;
        this._state |= _BufferingStreamSubscription._STATE_IN_CALLBACK;
        callback();
        this._state &= ~_BufferingStreamSubscription._STATE_IN_CALLBACK;
        this._checkState(wasInputPaused);
    }
    _checkState(wasInputPaused : boolean) : void {
        /* TODO (AssertStatementImpl) : assert (!_inCallback); */;
        if (this._hasPending && this._pending.isEmpty) {
            this._state &= ~_BufferingStreamSubscription._STATE_HAS_PENDING;
            if (this._isInputPaused && this._mayResumeInput) {
                this._state &= ~_BufferingStreamSubscription._STATE_INPUT_PAUSED;
            }
        }
        while (true){
            if (this._isCanceled) {
                this._pending = null;
                return;
            }
            let isInputPaused : boolean = this._isInputPaused;
            if (wasInputPaused == isInputPaused) break;
            this._state ^= _BufferingStreamSubscription._STATE_IN_CALLBACK;
            if (isInputPaused) {
                this._onPause();
            }else {
                this._onResume();
            }
            this._state &= ~_BufferingStreamSubscription._STATE_IN_CALLBACK;
            wasInputPaused = isInputPaused;
        }
        if (this._hasPending && !this._isPaused) {
            this._pending.schedule(this);
        }
    }
}

export namespace Zone {
    export type Constructors = '_';
    export type Interface = Omit<Zone, Constructors>;
}
@DartClass
export class Zone {
    @namedConstructor
    _() {
    }
    static _ : new() => Zone;

    private static __$ROOT : Zone;
    static get ROOT() : Zone { 
        if (this.__$ROOT===undefined) {
            this.__$ROOT = properties._ROOT_ZONE;
        }
        return this.__$ROOT;
    }

    private static __$_current : Zone;
    static get _current() : Zone { 
        if (this.__$_current===undefined) {
            this.__$_current = properties._ROOT_ZONE;
        }
        return this.__$_current;
    }
    static set _current(__$value : Zone)  { 
        this.__$_current = __$value;
    }

    static get current() : Zone {
        return Zone._current;
    }
    @Abstract
    handleUncaughtError<R>(error : any,stackTrace : core.DartStackTrace) : R{ throw 'abstract'}
    @AbstractProperty
    get parent() : Zone{ throw 'abstract'}
    @AbstractProperty
    get errorZone() : Zone{ throw 'abstract'}
    @Abstract
    inSameErrorZone(otherZone : Zone) : boolean{ throw 'abstract'}
    @Abstract
    fork(_namedArguments? : {specification? : ZoneSpecification,zoneValues? : core.DartMap<any,any>}) : Zone{ throw 'abstract'}
    @Abstract
    run<R>(action : <R>() => R) : R{ throw 'abstract'}
    @Abstract
    runUnary<R,T>(action : <R,T>(argument : T) => R,argument : T) : R{ throw 'abstract'}
    @Abstract
    runBinary<R,T1,T2>(action : <R,T1,T2>(argument1 : T1,argument2 : T2) => R,argument1 : T1,argument2 : T2) : R{ throw 'abstract'}
    @Abstract
    runGuarded<R>(action : <R>() => R) : R{ throw 'abstract'}
    @Abstract
    runUnaryGuarded<R,T>(action : <R,T>(argument : T) => R,argument : T) : R{ throw 'abstract'}
    @Abstract
    runBinaryGuarded<R,T1,T2>(action : <R,T1,T2>(argument1 : T1,argument2 : T2) => R,argument1 : T1,argument2 : T2) : R{ throw 'abstract'}
    @Abstract
    registerCallback<R>(callback : <R>() => R) : <R>() => R{ throw 'abstract'}
    @Abstract
    registerUnaryCallback<R,T>(callback : <R,T>(arg : T) => R) : <R,T>(arg : T) => R{ throw 'abstract'}
    @Abstract
    registerBinaryCallback<R,T1,T2>(callback : <R,T1,T2>(arg1 : T1,arg2 : T2) => R) : <R,T1,T2>(arg1 : T1,arg2 : T2) => R{ throw 'abstract'}
    @Abstract
    bindCallback<R>(action : <R>() => R,_namedArguments? : {runGuarded? : boolean}) : <R>() => R{ throw 'abstract'}
    @Abstract
    bindUnaryCallback<R,T>(action : <R,T>(argument : T) => R,_namedArguments? : {runGuarded? : boolean}) : <R,T>(arg : T) => R{ throw 'abstract'}
    @Abstract
    bindBinaryCallback<R,T1,T2>(action : <R,T1,T2>(argument1 : T1,argument2 : T2) => R,_namedArguments? : {runGuarded? : boolean}) : <R,T1,T2>(arg1 : T1,arg2 : T2) => R{ throw 'abstract'}
    @Abstract
    errorCallback(error : core.DartObject,stackTrace : core.DartStackTrace) : AsyncError{ throw 'abstract'}
    @Abstract
    scheduleMicrotask(action : () => void) : void{ throw 'abstract'}
    @Abstract
    createTimer(duration : core.DartDuration,callback : () => void) : Timer{ throw 'abstract'}
    @Abstract
    createPeriodicTimer(period : core.DartDuration,callback : (timer : Timer) => void) : Timer{ throw 'abstract'}
    @Abstract
    print(line : string) : void{ throw 'abstract'}
    static _enter(zone : Zone) : Zone {
        /* TODO (AssertStatementImpl) : assert (zone != null); */;
        /* TODO (AssertStatementImpl) : assert (!identical(zone, _current)); */;
        let previous : Zone = Zone._current;
        Zone._current = zone;
        return previous;
    }
    static _leave(previous : Zone) : void {
        /* TODO (AssertStatementImpl) : assert (previous != null); */;
        Zone._current = previous;
    }
    @Abstract
    [OperatorMethods.INDEX](key : core.DartObject){ throw 'abstract'}
}

export namespace _FutureListener {
    export type Constructors = 'then' | 'catchError' | 'whenComplete';
    export type Interface<S,T> = Omit<_FutureListener<S,T>, Constructors>;
}
@DartClass
export class _FutureListener<S,T> {
    private static __$MASK_VALUE : number;
    static get MASK_VALUE() : number { 
        if (this.__$MASK_VALUE===undefined) {
            this.__$MASK_VALUE = 1;
        }
        return this.__$MASK_VALUE;
    }

    private static __$MASK_ERROR : number;
    static get MASK_ERROR() : number { 
        if (this.__$MASK_ERROR===undefined) {
            this.__$MASK_ERROR = 2;
        }
        return this.__$MASK_ERROR;
    }

    private static __$MASK_TEST_ERROR : number;
    static get MASK_TEST_ERROR() : number { 
        if (this.__$MASK_TEST_ERROR===undefined) {
            this.__$MASK_TEST_ERROR = 4;
        }
        return this.__$MASK_TEST_ERROR;
    }

    private static __$MASK_WHENCOMPLETE : number;
    static get MASK_WHENCOMPLETE() : number { 
        if (this.__$MASK_WHENCOMPLETE===undefined) {
            this.__$MASK_WHENCOMPLETE = 8;
        }
        return this.__$MASK_WHENCOMPLETE;
    }

    private static __$STATE_CHAIN : number;
    static get STATE_CHAIN() : number { 
        if (this.__$STATE_CHAIN===undefined) {
            this.__$STATE_CHAIN = 0;
        }
        return this.__$STATE_CHAIN;
    }

    private static __$STATE_THEN : number;
    static get STATE_THEN() : number { 
        if (this.__$STATE_THEN===undefined) {
            this.__$STATE_THEN = _FutureListener.MASK_VALUE;
        }
        return this.__$STATE_THEN;
    }

    private static __$STATE_THEN_ONERROR : number;
    static get STATE_THEN_ONERROR() : number { 
        if (this.__$STATE_THEN_ONERROR===undefined) {
            this.__$STATE_THEN_ONERROR = _FutureListener.MASK_VALUE | _FutureListener.MASK_ERROR;
        }
        return this.__$STATE_THEN_ONERROR;
    }

    private static __$STATE_CATCHERROR : number;
    static get STATE_CATCHERROR() : number { 
        if (this.__$STATE_CATCHERROR===undefined) {
            this.__$STATE_CATCHERROR = _FutureListener.MASK_ERROR;
        }
        return this.__$STATE_CATCHERROR;
    }

    private static __$STATE_CATCHERROR_TEST : number;
    static get STATE_CATCHERROR_TEST() : number { 
        if (this.__$STATE_CATCHERROR_TEST===undefined) {
            this.__$STATE_CATCHERROR_TEST = _FutureListener.MASK_ERROR | _FutureListener.MASK_TEST_ERROR;
        }
        return this.__$STATE_CATCHERROR_TEST;
    }

    private static __$STATE_WHENCOMPLETE : number;
    static get STATE_WHENCOMPLETE() : number { 
        if (this.__$STATE_WHENCOMPLETE===undefined) {
            this.__$STATE_WHENCOMPLETE = _FutureListener.MASK_WHENCOMPLETE;
        }
        return this.__$STATE_WHENCOMPLETE;
    }

    _nextListener : _FutureListener<any,any>;

    result : _Future<T>;

    state : number;

    callback : Function;

    errorCallback : Function;

    @namedConstructor
    then(result : _Future<T>,onValue : <S,T>(value : S) => any,errorCallback : Function) {
        this._nextListener = null;
        this.callback = onValue;
        this.errorCallback = errorCallback;
        this.state = (errorCallback == null) ? _FutureListener.STATE_THEN : _FutureListener.STATE_THEN_ONERROR;
        this.result = result;
    }
    static then : new<S,T>(result : _Future<T>,onValue : <S,T>(value : S) => any,errorCallback : Function) => _FutureListener<S,T>;

    @namedConstructor
    catchError(result : _Future<T>,errorCallback : Function,test : (error : core.DartObject) => boolean) {
        this._nextListener = null;
        this.callback = test;
        this.state = (op(Op.EQUALS,test,null)) ? _FutureListener.STATE_CATCHERROR : _FutureListener.STATE_CATCHERROR_TEST;
        this.result = result;
        this.errorCallback = errorCallback;
    }
    static catchError : new<S,T>(result : _Future<T>,errorCallback : Function,test : (error : core.DartObject) => boolean) => _FutureListener<S,T>;

    @namedConstructor
    whenComplete(result : _Future<T>,onComplete : () => any) {
        this._nextListener = null;
        this.callback = onComplete;
        this.errorCallback = null;
        this.state = _FutureListener.STATE_WHENCOMPLETE;
        this.result = result;
    }
    static whenComplete : new<S,T>(result : _Future<T>,onComplete : () => any) => _FutureListener<S,T>;

    get _zone() : Zone {
        return this.result._zone;
    }
    get handlesValue() : boolean {
        return (this.state & _FutureListener.MASK_VALUE != 0);
    }
    get handlesError() : boolean {
        return (this.state & _FutureListener.MASK_ERROR != 0);
    }
    get hasErrorTest() : boolean {
        return (this.state == _FutureListener.STATE_CATCHERROR_TEST);
    }
    get handlesComplete() : boolean {
        return (this.state == _FutureListener.STATE_WHENCOMPLETE);
    }
    get _onValue() : <S,T>(value : S) => any {
        /* TODO (AssertStatementImpl) : assert (handlesValue); */;
        return this.callback as core.DartObject;
    }
    get _onError() : Function {
        return this.errorCallback;
    }
    get _errorTest() : (error : core.DartObject) => boolean {
        /* TODO (AssertStatementImpl) : assert (hasErrorTest); */;
        return this.callback as core.DartObject;
    }
    get _whenCompleteAction() : () => any {
        /* TODO (AssertStatementImpl) : assert (handlesComplete); */;
        return this.callback as core.DartObject;
    }
    get hasErrorCallback() : boolean {
        /* TODO (AssertStatementImpl) : assert (handlesError); */;
        return this._onError != null;
    }
    handleValue(sourceResult : S) : any {
        return this._zone.runUnary(this._onValue,sourceResult);
    }
    matchesErrorTest(asyncError : AsyncError) : boolean {
        if (!this.hasErrorTest) return true;
        return this._zone.runUnary(this._errorTest,asyncError.error);
    }
    handleError(asyncError : AsyncError) : any {
        /* TODO (AssertStatementImpl) : assert (handlesError && hasErrorCallback); */;
        if (is(this.errorCallback, <R,T1,T2>(arg1 : any,arg2 : any) => any)) {
            let typedErrorCallback = this.errorCallback as core.DartObject;
            return this._zone.runBinary(typedErrorCallback,asyncError.error,asyncError.stackTrace);
        }else {
            return this._zone.runUnary(this.errorCallback,asyncError.error);
        }
    }
    handleWhenComplete() : any {
        /* TODO (AssertStatementImpl) : assert (!handlesError); */;
        return this._zone.run(this._whenCompleteAction);
    }
}

export namespace ZoneDelegate {
    export type Constructors = 'ZoneDelegate';
    export type Interface = Omit<ZoneDelegate, Constructors>;
}
@DartClass
export class ZoneDelegate {
    @Abstract
    handleUncaughtError<R>(zone : Zone,error : any,stackTrace : core.DartStackTrace) : R{ throw 'abstract'}
    @Abstract
    run<R>(zone : Zone,f : <R>() => R) : R{ throw 'abstract'}
    @Abstract
    runUnary<R,T>(zone : Zone,f : <R,T>(arg : T) => R,arg : T) : R{ throw 'abstract'}
    @Abstract
    runBinary<R,T1,T2>(zone : Zone,f : <R,T1,T2>(arg1 : T1,arg2 : T2) => R,arg1 : T1,arg2 : T2) : R{ throw 'abstract'}
    @Abstract
    registerCallback<R>(zone : Zone,f : <R>() => R) : <R>() => R{ throw 'abstract'}
    @Abstract
    registerUnaryCallback<R,T>(zone : Zone,f : <R,T>(arg : T) => R) : <R,T>(arg : T) => R{ throw 'abstract'}
    @Abstract
    registerBinaryCallback<R,T1,T2>(zone : Zone,f : <R,T1,T2>(arg1 : T1,arg2 : T2) => R) : <R,T1,T2>(arg1 : T1,arg2 : T2) => R{ throw 'abstract'}
    @Abstract
    errorCallback(zone : Zone,error : core.DartObject,stackTrace : core.DartStackTrace) : AsyncError{ throw 'abstract'}
    @Abstract
    scheduleMicrotask(zone : Zone,f : () => void) : void{ throw 'abstract'}
    @Abstract
    createTimer(zone : Zone,duration : core.DartDuration,f : () => void) : Timer{ throw 'abstract'}
    @Abstract
    createPeriodicTimer(zone : Zone,period : core.DartDuration,f : (timer : Timer) => void) : Timer{ throw 'abstract'}
    @Abstract
    print(zone : Zone,line : string) : void{ throw 'abstract'}
    @Abstract
    fork(zone : Zone,specification : ZoneSpecification,zoneValues : core.DartMap<any,any>) : Zone{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ZoneDelegate() {
    }
}

export namespace _ZoneSpecification {
    export type Constructors = '_ZoneSpecification';
    export type Interface = Omit<_ZoneSpecification, Constructors>;
}
@DartClass
@Implements(ZoneSpecification)
export class _ZoneSpecification implements ZoneSpecification.Interface {
    constructor(_namedArguments? : {handleUncaughtError? : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,error : any,stackTrace : core.DartStackTrace) => any,run? : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => any,runUnary? : <R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any,arg : any) => any,runBinary? : <R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any,arg1 : any,arg2 : any) => any,registerCallback? : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => <R>() => any,registerUnaryCallback? : <R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any) => <R,T>(arg : any) => any,registerBinaryCallback? : <R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any) => <R,T1,T2>(arg1 : any,arg2 : any) => any,errorCallback? : (self : Zone,parent : ZoneDelegate,zone : Zone,error : core.DartObject,stackTrace : core.DartStackTrace) => AsyncError,scheduleMicrotask? : (self : Zone,parent : ZoneDelegate,zone : Zone,f : () => void) => void,createTimer? : (self : Zone,parent : ZoneDelegate,zone : Zone,duration : core.DartDuration,f : () => void) => Timer,createPeriodicTimer? : (self : Zone,parent : ZoneDelegate,zone : Zone,period : core.DartDuration,f : (timer : Timer) => void) => Timer,print? : (self : Zone,parent : ZoneDelegate,zone : Zone,line : string) => void,fork? : (self : Zone,parent : ZoneDelegate,zone : Zone,specification : ZoneSpecification,zoneValues : core.DartMap<any,any>) => Zone}) {
    }
    @defaultConstructor
    _ZoneSpecification(_namedArguments? : {handleUncaughtError? : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,error : any,stackTrace : core.DartStackTrace) => any,run? : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => any,runUnary? : <R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any,arg : any) => any,runBinary? : <R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any,arg1 : any,arg2 : any) => any,registerCallback? : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => <R>() => any,registerUnaryCallback? : <R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any) => <R,T>(arg : any) => any,registerBinaryCallback? : <R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any) => <R,T1,T2>(arg1 : any,arg2 : any) => any,errorCallback? : (self : Zone,parent : ZoneDelegate,zone : Zone,error : core.DartObject,stackTrace : core.DartStackTrace) => AsyncError,scheduleMicrotask? : (self : Zone,parent : ZoneDelegate,zone : Zone,f : () => void) => void,createTimer? : (self : Zone,parent : ZoneDelegate,zone : Zone,duration : core.DartDuration,f : () => void) => Timer,createPeriodicTimer? : (self : Zone,parent : ZoneDelegate,zone : Zone,period : core.DartDuration,f : (timer : Timer) => void) => Timer,print? : (self : Zone,parent : ZoneDelegate,zone : Zone,line : string) => void,fork? : (self : Zone,parent : ZoneDelegate,zone : Zone,specification : ZoneSpecification,zoneValues : core.DartMap<any,any>) => Zone}) {
        let {handleUncaughtError,run,runUnary,runBinary,registerCallback,registerUnaryCallback,registerBinaryCallback,errorCallback,scheduleMicrotask,createTimer,createPeriodicTimer,print,fork} = Object.assign({
            "handleUncaughtError" : null,
            "run" : null,
            "runUnary" : null,
            "runBinary" : null,
            "registerCallback" : null,
            "registerUnaryCallback" : null,
            "registerBinaryCallback" : null,
            "errorCallback" : null,
            "scheduleMicrotask" : null,
            "createTimer" : null,
            "createPeriodicTimer" : null,
            "print" : null,
            "fork" : null}, _namedArguments );
        this.handleUncaughtError = handleUncaughtError;
        this.run = run;
        this.runUnary = runUnary;
        this.runBinary = runBinary;
        this.registerCallback = registerCallback;
        this.registerUnaryCallback = registerUnaryCallback;
        this.registerBinaryCallback = registerBinaryCallback;
        this.errorCallback = errorCallback;
        this.scheduleMicrotask = scheduleMicrotask;
        this.createTimer = createTimer;
        this.createPeriodicTimer = createPeriodicTimer;
        this.print = print;
        this.fork = fork;
    }
    handleUncaughtError : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,error : any,stackTrace : core.DartStackTrace) => any;

    run : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => any;

    runUnary : <R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any,arg : any) => any;

    runBinary : <R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any,arg1 : any,arg2 : any) => any;

    registerCallback : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => <R>() => any;

    registerUnaryCallback : <R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any) => <R,T>(arg : any) => any;

    registerBinaryCallback : <R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any) => <R,T1,T2>(arg1 : any,arg2 : any) => any;

    errorCallback : (self : Zone,parent : ZoneDelegate,zone : Zone,error : core.DartObject,stackTrace : core.DartStackTrace) => AsyncError;

    scheduleMicrotask : (self : Zone,parent : ZoneDelegate,zone : Zone,f : () => void) => void;

    createTimer : (self : Zone,parent : ZoneDelegate,zone : Zone,duration : core.DartDuration,f : () => void) => Timer;

    createPeriodicTimer : (self : Zone,parent : ZoneDelegate,zone : Zone,period : core.DartDuration,f : (timer : Timer) => void) => Timer;

    print : (self : Zone,parent : ZoneDelegate,zone : Zone,line : string) => void;

    fork : (self : Zone,parent : ZoneDelegate,zone : Zone,specification : ZoneSpecification,zoneValues : core.DartMap<any,any>) => Zone;

}

export namespace _AsyncCallbackEntry {
    export type Constructors = '_AsyncCallbackEntry';
    export type Interface = Omit<_AsyncCallbackEntry, Constructors>;
}
@DartClass
export class _AsyncCallbackEntry {
    callback : () => void;

    next : _AsyncCallbackEntry;

    constructor(callback : () => void) {
    }
    @defaultConstructor
    _AsyncCallbackEntry(callback : () => void) {
        this.callback = callback;
    }
}

export namespace DeferredLibrary {
    export type Constructors = 'DeferredLibrary';
    export type Interface = Omit<DeferredLibrary, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:core',type : 'Deprecated',value : {
        arguments : ["Dart sdk v. 1.8"],namedArguments : {
        }}})
export class DeferredLibrary {
    libraryName : string;

    uri : string;

    constructor(libraryName : string,_namedArguments? : {uri? : string}) {
    }
    @defaultConstructor
    DeferredLibrary(libraryName : string,_namedArguments? : {uri? : string}) {
        let {uri} = Object.assign({
        }, _namedArguments );
        this.libraryName = libraryName;
        this.uri = uri;
    }
    load() : Future<core.Null> {
    }
}

export namespace _DelayedEvent {
    export type Constructors = '_DelayedEvent';
    export type Interface<T> = Omit<_DelayedEvent<T>, Constructors>;
}
@DartClass
export class _DelayedEvent<T> {
    next : _DelayedEvent<any>;

    @Abstract
    perform(dispatch : _EventDispatch<T>) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    _DelayedEvent() {
    }
}

export namespace _Future {
    export type Constructors = '_Future' | 'immediate' | 'immediateError' | 'value';
    export type Interface<T> = Omit<_Future<T>, Constructors>;
}
@DartClass
@Implements(Future)
export class _Future<T> implements Future.Interface<T> {
    private static __$_INCOMPLETE : number;
    static get _INCOMPLETE() : number { 
        if (this.__$_INCOMPLETE===undefined) {
            this.__$_INCOMPLETE = 0;
        }
        return this.__$_INCOMPLETE;
    }

    private static __$_PENDING_COMPLETE : number;
    static get _PENDING_COMPLETE() : number { 
        if (this.__$_PENDING_COMPLETE===undefined) {
            this.__$_PENDING_COMPLETE = 1;
        }
        return this.__$_PENDING_COMPLETE;
    }

    private static __$_CHAINED : number;
    static get _CHAINED() : number { 
        if (this.__$_CHAINED===undefined) {
            this.__$_CHAINED = 2;
        }
        return this.__$_CHAINED;
    }

    private static __$_VALUE : number;
    static get _VALUE() : number { 
        if (this.__$_VALUE===undefined) {
            this.__$_VALUE = 4;
        }
        return this.__$_VALUE;
    }

    private static __$_ERROR : number;
    static get _ERROR() : number { 
        if (this.__$_ERROR===undefined) {
            this.__$_ERROR = 8;
        }
        return this.__$_ERROR;
    }

    _state : number;

    _zone : Zone;

    _resultOrListeners;

    constructor() {
    }
    @defaultConstructor
    _Future() {
        this._state = _Future._INCOMPLETE;
        this._zone = Zone.current;
    }
    @namedConstructor
    immediate(result : any) {
        this._state = _Future._INCOMPLETE;
        this._zone = Zone.current;
        this._asyncComplete(result);
    }
    static immediate : new<T>(result : any) => _Future<T>;

    @namedConstructor
    immediateError(error : any,stackTrace? : core.DartStackTrace) {
        this._state = _Future._INCOMPLETE;
        this._zone = Zone.current;
        this._asyncCompleteError(error,stackTrace);
    }
    static immediateError : new<T>(error : any,stackTrace : core.DartStackTrace) => _Future<T>;

    @namedConstructor
    value(value : T) {
        this._state = _Future._INCOMPLETE;
        this._zone = Zone.current;
        this._setValue(value);
    }
    static value : new<T>(value : T) => _Future<T>;

    get _mayComplete() : boolean {
        return this._state == _Future._INCOMPLETE;
    }
    get _isPendingComplete() : boolean {
        return this._state == _Future._PENDING_COMPLETE;
    }
    get _mayAddListener() : boolean {
        return this._state <= _Future._PENDING_COMPLETE;
    }
    get _isChained() : boolean {
        return this._state == _Future._CHAINED;
    }
    get _isComplete() : boolean {
        return this._state >= _Future._VALUE;
    }
    get _hasError() : boolean {
        return this._state == _Future._ERROR;
    }
    _setChained(source : _Future<any>) : void {
        /* TODO (AssertStatementImpl) : assert (_mayAddListener); */;
        this._state = _Future._CHAINED;
        this._resultOrListeners = source;
    }
    then<E>(f : <E,T>(value : T) => any,_namedArguments? : {onError? : Function}) : Future<E> {
        let {onError} = Object.assign({
        }, _namedArguments );
        let currentZone : Zone = Zone.current;
        if (!core.identical(currentZone,properties._ROOT_ZONE)) {
            f = currentZone.registerUnaryCallback(f);
            if (onError != null) {
                onError = _registerErrorHandler(onError,currentZone);
            }
        }
        return this._thenNoZoneRegistration(f,onError);
    }
    _thenNoZoneRegistration<E>(f : <E,T>(value : T) => any,onError : Function) : Future<E> {
        let result : _Future<E> = new _Future<E>();
        this._addListener(new _FutureListener.then(result,f,onError));
        return result;
    }
    catchError(onError : Function,_namedArguments? : {test? : <T>(error : any) => boolean}) : Future<T> {
        let {test} = Object.assign({
        }, _namedArguments );
        let result : _Future<T> = new _Future<T>();
        if (!core.identical(result._zone,properties._ROOT_ZONE)) {
            onError = _registerErrorHandler(onError,result._zone);
            if (test != null) test = result._zone.registerUnaryCallback(test);
        }
        this._addListener(new _FutureListener.catchError(result,onError,test));
        return result;
    }
    whenComplete(action : <T>() => any) : Future<T> {
        let result : _Future<T> = new _Future<T>();
        if (!core.identical(result._zone,properties._ROOT_ZONE)) {
            action = result._zone.registerCallback(action);
        }
        this._addListener(new _FutureListener.whenComplete(result,action));
        return result;
    }
    asStream() : Stream<T> {
        return new Stream.fromFuture(this);
    }
    _setPendingComplete() : void {
        /* TODO (AssertStatementImpl) : assert (_mayComplete); */;
        this._state = _Future._PENDING_COMPLETE;
    }
    _clearPendingComplete() : void {
        /* TODO (AssertStatementImpl) : assert (_isPendingComplete); */;
        this._state = _Future._INCOMPLETE;
    }
    get _error() : AsyncError {
        /* TODO (AssertStatementImpl) : assert (_hasError); */;
        return this._resultOrListeners;
    }
    get _chainSource() : _Future<any> {
        /* TODO (AssertStatementImpl) : assert (_isChained); */;
        return this._resultOrListeners;
    }
    _setValue(value : T) : void {
        /* TODO (AssertStatementImpl) : assert (!_isComplete); */;
        this._state = _Future._VALUE;
        this._resultOrListeners = value;
    }
    _setErrorObject(error : AsyncError) : void {
        /* TODO (AssertStatementImpl) : assert (!_isComplete); */;
        this._state = _Future._ERROR;
        this._resultOrListeners = error;
    }
    _setError(error : core.DartObject,stackTrace : core.DartStackTrace) : void {
        this._setErrorObject(new AsyncError(error,stackTrace));
    }
    _cloneResult(source : _Future<any>) : void {
        /* TODO (AssertStatementImpl) : assert (!_isComplete); */;
        /* TODO (AssertStatementImpl) : assert (source._isComplete); */;
        this._state = source._state;
        this._resultOrListeners = source._resultOrListeners;
    }
    _addListener(listener : _FutureListener<any,any>) : void {
        /* TODO (AssertStatementImpl) : assert (listener._nextListener == null); */;
        if (this._mayAddListener) {
            listener._nextListener = this._resultOrListeners;
            this._resultOrListeners = listener;
        }else {
            if (this._isChained) {
                let source : _Future<any> = this._chainSource;
                if (!source._isComplete) {
                    source._addListener(listener);
                    return;
                }
                this._cloneResult(source);
            }
            /* TODO (AssertStatementImpl) : assert (_isComplete); */;
            this._zone.scheduleMicrotask(() =>  {
                _Future._propagateToListeners(this,listener);
            });
        }
    }
    _prependListeners(listeners : _FutureListener<any,any>) : void {
        if (op(Op.EQUALS,listeners,null)) return;
        if (this._mayAddListener) {
            let existingListeners : _FutureListener<any,any> = this._resultOrListeners;
            this._resultOrListeners = listeners;
            if (existingListeners != null) {
                let cursor : _FutureListener<any,any> = listeners;
                while (cursor._nextListener != null){
                    cursor = cursor._nextListener;
                }
                cursor._nextListener = existingListeners;
            }
        }else {
            if (this._isChained) {
                let source : _Future<any> = this._chainSource;
                if (!source._isComplete) {
                    source._prependListeners(listeners);
                    return;
                }
                this._cloneResult(source);
            }
            /* TODO (AssertStatementImpl) : assert (_isComplete); */;
            listeners = this._reverseListeners(listeners);
            this._zone.scheduleMicrotask(() =>  {
                _Future._propagateToListeners(this,listeners);
            });
        }
    }
    _removeListeners() : _FutureListener<any,any> {
        /* TODO (AssertStatementImpl) : assert (!_isComplete); */;
        let current : _FutureListener<any,any> = this._resultOrListeners;
        this._resultOrListeners = null;
        return this._reverseListeners(current);
    }
    _reverseListeners(listeners : _FutureListener<any,any>) : _FutureListener<any,any> {
        let prev : _FutureListener<any,any> = null;
        let current : _FutureListener<any,any> = listeners;
        while (current != null){
            let next : _FutureListener<any,any> = current._nextListener;
            current._nextListener = prev;
            prev = current;
            current = next;
        }
        return prev;
    }
    static _chainForeignFuture(source : Future<any>,target : _Future<any>) : void {
        /* TODO (AssertStatementImpl) : assert (!target._isComplete); */;
        /* TODO (AssertStatementImpl) : assert (source is! _Future); */;
        target._setPendingComplete();
        try {
            source.then((value : any) =>  {
                /* TODO (AssertStatementImpl) : assert (target._isPendingComplete); */;
                target._clearPendingComplete();
                target._complete(value);
            },{
                onError : (error : any,stackTrace? : any) =>  {
                    /* TODO (AssertStatementImpl) : assert (target._isPendingComplete); */;
                    target._completeError(error,stackTrace);
                }});
        } catch (__error__) {

            {
                let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                scheduleMicrotask(() =>  {
                    target._completeError(e,s);
                });
            }
        }
    }
    static _chainCoreFuture(source : _Future<any>,target : _Future<any>) : void {
        /* TODO (AssertStatementImpl) : assert (target._mayAddListener); */;
        while (source._isChained){
            source = source._chainSource;
        }
        if (source._isComplete) {
            let listeners : _FutureListener<any,any> = target._removeListeners();
            target._cloneResult(source);
            _Future._propagateToListeners(target,listeners);
        }else {
            let listeners : _FutureListener<any,any> = target._resultOrListeners;
            target._setChained(source);
            source._prependListeners(listeners);
        }
    }
    _complete(value : any) : void {
        /* TODO (AssertStatementImpl) : assert (!_isComplete); */;
        if (is(value, Future<T>)) {
            if (is(value, _Future<T>)) {
                _Future._chainCoreFuture(value,this);
            }else {
                _Future._chainForeignFuture(value,this);
            }
        }else {
            let listeners : _FutureListener<any,any> = this._removeListeners();
            this._setValue(value as core.DartObject);
            _Future._propagateToListeners(this,listeners);
        }
    }
    _completeWithValue(value : T) : void {
        /* TODO (AssertStatementImpl) : assert (!_isComplete); */;
        /* TODO (AssertStatementImpl) : assert (value is! Future); */;
        let listeners : _FutureListener<any,any> = this._removeListeners();
        this._setValue(value);
        _Future._propagateToListeners(this,listeners);
    }
    _completeError(error : core.DartObject,stackTrace? : core.DartStackTrace) : void {
        /* TODO (AssertStatementImpl) : assert (!_isComplete); */;
        let listeners : _FutureListener<any,any> = this._removeListeners();
        this._setError(error,stackTrace);
        _Future._propagateToListeners(this,listeners);
    }
    _asyncComplete(value : any) : void {
        /* TODO (AssertStatementImpl) : assert (!_isComplete); */;
        if (is(value, Future<T>)) {
            this._chainFuture(value);
            return;
        }
        let typedValue : T = value as core.DartObject;
        this._setPendingComplete();
        this._zone.scheduleMicrotask(() =>  {
            this._completeWithValue(typedValue);
        });
    }
    _chainFuture(value : Future<T>) : void {
        if (is(value, _Future<T>)) {
            if (value._hasError) {
                this._setPendingComplete();
                this._zone.scheduleMicrotask(() =>  {
                    _Future._chainCoreFuture(value,this);
                });
            }else {
                _Future._chainCoreFuture(value,this);
            }
            return;
        }
        _Future._chainForeignFuture(value,this);
    }
    _asyncCompleteError(error : any,stackTrace : core.DartStackTrace) : void {
        /* TODO (AssertStatementImpl) : assert (!_isComplete); */;
        this._setPendingComplete();
        this._zone.scheduleMicrotask(() =>  {
            this._completeError(error,stackTrace);
        });
    }
    static _propagateToListeners(source : _Future<any>,listeners : _FutureListener<any,any>) : void {
        while (true){
            /* TODO (AssertStatementImpl) : assert (source._isComplete); */;
            let hasError : boolean = source._hasError;
            if (op(Op.EQUALS,listeners,null)) {
                if (hasError) {
                    let asyncError : AsyncError = source._error;
                    source._zone.handleUncaughtError(asyncError.error,asyncError.stackTrace);
                }
                return;
            }
            while (listeners._nextListener != null){
                let listener : _FutureListener<any,any> = listeners;
                listeners = listener._nextListener;
                listener._nextListener = null;
                _Future._propagateToListeners(source,listener);
            }
            let listener : _FutureListener<any,any> = listeners;
            let sourceResult = source._resultOrListeners;
            let listenerHasError : boolean = hasError;
            let listenerValueOrError = sourceResult;
            if (hasError || listener.handlesValue || listener.handlesComplete) {
                let zone : Zone = listener._zone;
                if (hasError && !source._zone.inSameErrorZone(zone)) {
                    let asyncError : AsyncError = source._error;
                    source._zone.handleUncaughtError(asyncError.error,asyncError.stackTrace);
                    return;
                }
                let oldZone : Zone;
                if (!core.identical(Zone.current,zone)) {
                    oldZone = Zone._enter(zone);
                }
                var handleWhenCompleteCallback : () => void = () : void =>  {
                    /* TODO (AssertStatementImpl) : assert (!listener.handlesValue); */;
                    /* TODO (AssertStatementImpl) : assert (!listener.handlesError); */;
                    let completeResult;
                    try {
                        completeResult = listener.handleWhenComplete();
                    } catch (__error__) {

                        {
                            let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                            let e = __error__;
                            if (hasError && core.identical(source._error.error,e)) {
                                listenerValueOrError = source._error;
                            }else {
                                listenerValueOrError = new AsyncError(e,s);
                            }
                            listenerHasError = true;
                            return;
                        }
                    }
                    if (is(completeResult, Future<any>)) {
                        if (is(completeResult, _Future<any>) && completeResult._isComplete) {
                            if (completeResult._hasError) {
                                listenerValueOrError = completeResult._error;
                                listenerHasError = true;
                            }
                            return;
                        }
                        let originalSource = source;
                        listenerValueOrError = completeResult.then((_ : any) =>  {
                            return originalSource;
                        });
                        listenerHasError = false;
                    }
                };
                var handleValueCallback : () => void = () : void =>  {
                    try {
                        listenerValueOrError = listener.handleValue(sourceResult);
                    } catch (__error__) {

                        {
                            let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                            let e = __error__;
                            listenerValueOrError = new AsyncError(e,s);
                            listenerHasError = true;
                        }
                    }
                };
                var handleError : () => void = () : void =>  {
                    try {
                        let asyncError : AsyncError = source._error;
                        if (listener.matchesErrorTest(asyncError) && listener.hasErrorCallback) {
                            listenerValueOrError = listener.handleError(asyncError);
                            listenerHasError = false;
                        }
                    } catch (__error__) {

                        {
                            let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                            let e = __error__;
                            if (core.identical(source._error.error,e)) {
                                listenerValueOrError = source._error;
                            }else {
                                listenerValueOrError = new AsyncError(e,s);
                            }
                            listenerHasError = true;
                        }
                    }
                };
                if (listener.handlesComplete) {
                    handleWhenCompleteCallback();
                }else if (!hasError) {
                    if (listener.handlesValue) {
                        handleValueCallback();
                    }
                }else {
                    if (listener.handlesError) {
                        handleError();
                    }
                }
                if (oldZone != null) Zone._leave(oldZone);
                if (is(listenerValueOrError, Future<any>)) {
                    let chainSource : Future<any> = listenerValueOrError;
                    let result : _Future<any> = listener.result;
                    if (is(chainSource, _Future<any>)) {
                        if (chainSource._isComplete) {
                            listeners = result._removeListeners();
                            result._cloneResult(chainSource);
                            source = chainSource;
                            continue;
                        }else {
                            _Future._chainCoreFuture(chainSource,result);
                        }
                    }else {
                        _Future._chainForeignFuture(chainSource,result);
                    }
                    return;
                }
            }
            let result : _Future<any> = listener.result;
            listeners = result._removeListeners();
            if (!listenerHasError) {
                result._setValue(listenerValueOrError);
            }else {
                let asyncError : AsyncError = listenerValueOrError;
                result._setErrorObject(asyncError);
            }
            source = result;
        }
    }
    timeout(timeLimit : core.DartDuration,_namedArguments? : {onTimeout? : <T>() => any}) : Future<T> {
        let {onTimeout} = Object.assign({
        }, _namedArguments );
        if (this._isComplete) return new _Future.immediate(this);
        let result : _Future<T> = new _Future<T>();
        let timer : Timer;
        if (op(Op.EQUALS,onTimeout,null)) {
            timer = new Timer(timeLimit,() =>  {
                result._completeError(new TimeoutException("Future not completed",timeLimit));
            });
        }else {
            let zone : Zone = Zone.current;
            onTimeout = zone.registerCallback(onTimeout);
            timer = new Timer(timeLimit,() =>  {
                try {
                    result._complete(zone.run(onTimeout));
                } catch (__error__) {

                    {
                        let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let e = __error__;
                        result._completeError(e,s);
                    }
                }
            });
        }
        this.then((v : T) =>  {
            if (timer.isActive) {
                timer.cancel();
                result._completeWithValue(v);
            }
        },{
            onError : (e : any,s : any) =>  {
                if (timer.isActive) {
                    timer.cancel();
                    result._completeError(e,s);
                }
            }});
        return result;
    }
}

export namespace ZoneSpecification {
    export type Constructors = never;
    export type Interface = Omit<ZoneSpecification, Constructors>;
}
@DartClass
export class ZoneSpecification {
    constructor(_namedArguments? : {handleUncaughtError? : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,error : any,stackTrace : core.DartStackTrace) => any,run? : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => any,runUnary? : <R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any,arg : any) => any,runBinary? : <R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any,arg1 : any,arg2 : any) => any,registerCallback? : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => <R>() => any,registerUnaryCallback? : <R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any) => <R,T>(arg : any) => any,registerBinaryCallback? : <R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any) => <R,T1,T2>(arg1 : any,arg2 : any) => any,errorCallback? : (self : Zone,parent : ZoneDelegate,zone : Zone,error : core.DartObject,stackTrace : core.DartStackTrace) => AsyncError,scheduleMicrotask? : (self : Zone,parent : ZoneDelegate,zone : Zone,f : () => void) => void,createTimer? : (self : Zone,parent : ZoneDelegate,zone : Zone,duration : core.DartDuration,f : () => void) => Timer,createPeriodicTimer? : (self : Zone,parent : ZoneDelegate,zone : Zone,period : core.DartDuration,f : (timer : Timer) => void) => Timer,print? : (self : Zone,parent : ZoneDelegate,zone : Zone,line : string) => void,fork? : (self : Zone,parent : ZoneDelegate,zone : Zone,specification : ZoneSpecification,zoneValues : core.DartMap<any,any>) => Zone}) {
    }
    @defaultFactory
    static $ZoneSpecification(_namedArguments? : {handleUncaughtError? : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,error : any,stackTrace : core.DartStackTrace) => any,run? : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => any,runUnary? : <R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any,arg : any) => any,runBinary? : <R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any,arg1 : any,arg2 : any) => any,registerCallback? : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => <R>() => any,registerUnaryCallback? : <R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any) => <R,T>(arg : any) => any,registerBinaryCallback? : <R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any) => <R,T1,T2>(arg1 : any,arg2 : any) => any,errorCallback? : (self : Zone,parent : ZoneDelegate,zone : Zone,error : core.DartObject,stackTrace : core.DartStackTrace) => AsyncError,scheduleMicrotask? : (self : Zone,parent : ZoneDelegate,zone : Zone,f : () => void) => void,createTimer? : (self : Zone,parent : ZoneDelegate,zone : Zone,duration : core.DartDuration,f : () => void) => Timer,createPeriodicTimer? : (self : Zone,parent : ZoneDelegate,zone : Zone,period : core.DartDuration,f : (timer : Timer) => void) => Timer,print? : (self : Zone,parent : ZoneDelegate,zone : Zone,line : string) => void,fork? : (self : Zone,parent : ZoneDelegate,zone : Zone,specification : ZoneSpecification,zoneValues : core.DartMap<any,any>) => Zone}) : ZoneSpecification {
        let {handleUncaughtError,run,runUnary,runBinary,registerCallback,registerUnaryCallback,registerBinaryCallback,errorCallback,scheduleMicrotask,createTimer,createPeriodicTimer,print,fork} = Object.assign({
        }, _namedArguments );
        return new _ZoneSpecification({
            handleUncaughtError : handleUncaughtError,run : run,runUnary : runUnary,runBinary : runBinary,registerCallback : registerCallback,registerUnaryCallback : registerUnaryCallback,registerBinaryCallback : registerBinaryCallback,errorCallback : errorCallback,scheduleMicrotask : scheduleMicrotask,createTimer : createTimer,createPeriodicTimer : createPeriodicTimer,print : print,fork : fork});
    }
    @namedFactory
    static $from(other : ZoneSpecification,_namedArguments? : {handleUncaughtError? : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,error : any,stackTrace : core.DartStackTrace) => any,run? : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => any,runUnary? : <R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any,arg : any) => any,runBinary? : <R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any,arg1 : any,arg2 : any) => any,registerCallback? : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => <R>() => any,registerUnaryCallback? : <R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any) => <R,T>(arg : any) => any,registerBinaryCallback? : <R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any) => <R,T1,T2>(arg1 : any,arg2 : any) => any,errorCallback? : (self : Zone,parent : ZoneDelegate,zone : Zone,error : core.DartObject,stackTrace : core.DartStackTrace) => AsyncError,scheduleMicrotask? : (self : Zone,parent : ZoneDelegate,zone : Zone,f : () => void) => void,createTimer? : (self : Zone,parent : ZoneDelegate,zone : Zone,duration : core.DartDuration,f : () => void) => Timer,createPeriodicTimer? : (self : Zone,parent : ZoneDelegate,zone : Zone,period : core.DartDuration,f : (timer : Timer) => void) => Timer,print? : (self : Zone,parent : ZoneDelegate,zone : Zone,line : string) => void,fork? : (self : Zone,parent : ZoneDelegate,zone : Zone,specification : ZoneSpecification,zoneValues : core.DartMap<any,any>) => Zone}) : ZoneSpecification {
        let {handleUncaughtError,run,runUnary,runBinary,registerCallback,registerUnaryCallback,registerBinaryCallback,errorCallback,scheduleMicrotask,createTimer,createPeriodicTimer,print,fork} = Object.assign({
            "handleUncaughtError" : null,
            "run" : null,
            "runUnary" : null,
            "runBinary" : null,
            "registerCallback" : null,
            "registerUnaryCallback" : null,
            "registerBinaryCallback" : null,
            "errorCallback" : null,
            "scheduleMicrotask" : null,
            "createTimer" : null,
            "createPeriodicTimer" : null,
            "print" : null,
            "fork" : null}, _namedArguments );
        return new ZoneSpecification({
            handleUncaughtError : (handleUncaughtError || other.handleUncaughtError),run : (run || other.run),runUnary : (runUnary || other.runUnary),runBinary : (runBinary || other.runBinary),registerCallback : (registerCallback || other.registerCallback),registerUnaryCallback : (registerUnaryCallback || other.registerUnaryCallback),registerBinaryCallback : (registerBinaryCallback || other.registerBinaryCallback),errorCallback : (errorCallback || other.errorCallback),scheduleMicrotask : (scheduleMicrotask || other.scheduleMicrotask),createTimer : (createTimer || other.createTimer),createPeriodicTimer : (createPeriodicTimer || other.createPeriodicTimer),print : (print || other.print),fork : (fork || other.fork)});
    }
    static from : new(other : ZoneSpecification,_namedArguments? : {handleUncaughtError? : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,error : any,stackTrace : core.DartStackTrace) => any,run? : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => any,runUnary? : <R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any,arg : any) => any,runBinary? : <R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any,arg1 : any,arg2 : any) => any,registerCallback? : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => <R>() => any,registerUnaryCallback? : <R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any) => <R,T>(arg : any) => any,registerBinaryCallback? : <R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any) => <R,T1,T2>(arg1 : any,arg2 : any) => any,errorCallback? : (self : Zone,parent : ZoneDelegate,zone : Zone,error : core.DartObject,stackTrace : core.DartStackTrace) => AsyncError,scheduleMicrotask? : (self : Zone,parent : ZoneDelegate,zone : Zone,f : () => void) => void,createTimer? : (self : Zone,parent : ZoneDelegate,zone : Zone,duration : core.DartDuration,f : () => void) => Timer,createPeriodicTimer? : (self : Zone,parent : ZoneDelegate,zone : Zone,period : core.DartDuration,f : (timer : Timer) => void) => Timer,print? : (self : Zone,parent : ZoneDelegate,zone : Zone,line : string) => void,fork? : (self : Zone,parent : ZoneDelegate,zone : Zone,specification : ZoneSpecification,zoneValues : core.DartMap<any,any>) => Zone}) => ZoneSpecification;

    @AbstractProperty
    get handleUncaughtError() : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,error : any,stackTrace : core.DartStackTrace) => any{ throw 'abstract'}
    @AbstractProperty
    get run() : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => any{ throw 'abstract'}
    @AbstractProperty
    get runUnary() : <R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any,arg : any) => any{ throw 'abstract'}
    @AbstractProperty
    get runBinary() : <R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any,arg1 : any,arg2 : any) => any{ throw 'abstract'}
    @AbstractProperty
    get registerCallback() : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => <R>() => any{ throw 'abstract'}
    @AbstractProperty
    get registerUnaryCallback() : <R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any) => <R,T>(arg : any) => any{ throw 'abstract'}
    @AbstractProperty
    get registerBinaryCallback() : <R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any) => <R,T1,T2>(arg1 : any,arg2 : any) => any{ throw 'abstract'}
    @AbstractProperty
    get errorCallback() : (self : Zone,parent : ZoneDelegate,zone : Zone,error : core.DartObject,stackTrace : core.DartStackTrace) => AsyncError{ throw 'abstract'}
    @AbstractProperty
    get scheduleMicrotask() : (self : Zone,parent : ZoneDelegate,zone : Zone,f : () => void) => void{ throw 'abstract'}
    @AbstractProperty
    get createTimer() : (self : Zone,parent : ZoneDelegate,zone : Zone,duration : core.DartDuration,f : () => void) => Timer{ throw 'abstract'}
    @AbstractProperty
    get createPeriodicTimer() : (self : Zone,parent : ZoneDelegate,zone : Zone,period : core.DartDuration,f : (timer : Timer) => void) => Timer{ throw 'abstract'}
    @AbstractProperty
    get print() : (self : Zone,parent : ZoneDelegate,zone : Zone,line : string) => void{ throw 'abstract'}
    @AbstractProperty
    get fork() : (self : Zone,parent : ZoneDelegate,zone : Zone,specification : ZoneSpecification,zoneValues : core.DartMap<any,any>) => Zone{ throw 'abstract'}
}

export namespace _Completer {
    export type Constructors = '_Completer';
    export type Interface<T> = Omit<_Completer<T>, Constructors>;
}
@DartClass
@Implements(Completer)
export class _Completer<T> implements Completer.Interface<T> {
    future : _Future<T>;

    @Abstract
    complete(value? : any) : void{ throw 'abstract'}
    completeError(error : core.DartObject,stackTrace? : core.DartStackTrace) : void {
        error = _nonNullError(error);
        if (!this.future._mayComplete) throw new core.StateError("Future already completed");
        let replacement : AsyncError = Zone.current.errorCallback(error,stackTrace);
        if (replacement != null) {
            error = _nonNullError(replacement.error);
            stackTrace = replacement.stackTrace;
        }
        this._completeError(error,stackTrace);
    }
    @Abstract
    _completeError(error : core.DartObject,stackTrace : core.DartStackTrace) : void{ throw 'abstract'}
    get isCompleted() : boolean {
        return !this.future._mayComplete;
    }
    constructor() {
    }
    @defaultConstructor
    _Completer() {
        this.future = new _Future<T>();
    }
}

export namespace _PendingEvents {
    export type Constructors = '_PendingEvents';
    export type Interface<T> = Omit<_PendingEvents<T>, Constructors>;
}
@DartClass
export class _PendingEvents<T> {
    private static __$_STATE_UNSCHEDULED : number;
    static get _STATE_UNSCHEDULED() : number { 
        if (this.__$_STATE_UNSCHEDULED===undefined) {
            this.__$_STATE_UNSCHEDULED = 0;
        }
        return this.__$_STATE_UNSCHEDULED;
    }

    private static __$_STATE_SCHEDULED : number;
    static get _STATE_SCHEDULED() : number { 
        if (this.__$_STATE_SCHEDULED===undefined) {
            this.__$_STATE_SCHEDULED = 1;
        }
        return this.__$_STATE_SCHEDULED;
    }

    private static __$_STATE_CANCELED : number;
    static get _STATE_CANCELED() : number { 
        if (this.__$_STATE_CANCELED===undefined) {
            this.__$_STATE_CANCELED = 3;
        }
        return this.__$_STATE_CANCELED;
    }

    _state : number;

    @AbstractProperty
    get isEmpty() : boolean{ throw 'abstract'}
    get isScheduled() : boolean {
        return this._state == _PendingEvents._STATE_SCHEDULED;
    }
    get _eventScheduled() : boolean {
        return this._state >= _PendingEvents._STATE_SCHEDULED;
    }
    schedule(dispatch : _EventDispatch<T>) : void {
        if (this.isScheduled) return;
        /* TODO (AssertStatementImpl) : assert (!isEmpty); */;
        if (this._eventScheduled) {
            /* TODO (AssertStatementImpl) : assert (_state == _STATE_CANCELED); */;
            this._state = _PendingEvents._STATE_SCHEDULED;
            return;
        }
        scheduleMicrotask(() =>  {
            let oldState : number = this._state;
            this._state = _PendingEvents._STATE_UNSCHEDULED;
            if (oldState == _PendingEvents._STATE_CANCELED) return;
            this.handleNext(dispatch);
        });
        this._state = _PendingEvents._STATE_SCHEDULED;
    }
    cancelSchedule() : void {
        if (this.isScheduled) this._state = _PendingEvents._STATE_CANCELED;
    }
    @Abstract
    handleNext(dispatch : _EventDispatch<T>) : void{ throw 'abstract'}
    @Abstract
    clear() : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    _PendingEvents() {
        this._state = _PendingEvents._STATE_UNSCHEDULED;
    }
}

export namespace _ZoneFunction {
    export type Constructors = '_ZoneFunction';
    export type Interface<T extends Function> = Omit<_ZoneFunction<T extends Function>, Constructors>;
}
@DartClass
export class _ZoneFunction<T extends Function> {
    zone : _Zone;

    function : T;

    constructor(zone : _Zone,function : T) {
    }
    @defaultConstructor
    _ZoneFunction(zone : _Zone,function : T) {
        this.zone = zone;
        this.function = function;
    }
}

export namespace _DoneStreamSubscription {
    export type Constructors = '_DoneStreamSubscription';
    export type Interface<T> = Omit<_DoneStreamSubscription<T>, Constructors>;
}
@DartClass
@Implements(StreamSubscription)
export class _DoneStreamSubscription<T> implements StreamSubscription.Interface<T> {
    private static __$_DONE_SENT : number;
    static get _DONE_SENT() : number { 
        if (this.__$_DONE_SENT===undefined) {
            this.__$_DONE_SENT = 1;
        }
        return this.__$_DONE_SENT;
    }

    private static __$_SCHEDULED : number;
    static get _SCHEDULED() : number { 
        if (this.__$_SCHEDULED===undefined) {
            this.__$_SCHEDULED = 2;
        }
        return this.__$_SCHEDULED;
    }

    private static __$_PAUSED : number;
    static get _PAUSED() : number { 
        if (this.__$_PAUSED===undefined) {
            this.__$_PAUSED = 4;
        }
        return this.__$_PAUSED;
    }

    _zone : Zone;

    _state : number;

    _onDone : () => void;

    constructor(_onDone : () => void) {
    }
    @defaultConstructor
    _DoneStreamSubscription(_onDone : () => void) {
        this._state = 0;
        this._zone = Zone.current;
        this._onDone = _onDone;
        this._schedule();
    }
    get _isSent() : boolean {
        return (this._state & _DoneStreamSubscription._DONE_SENT) != 0;
    }
    get _isScheduled() : boolean {
        return (this._state & _DoneStreamSubscription._SCHEDULED) != 0;
    }
    get isPaused() : boolean {
        return this._state >= _DoneStreamSubscription._PAUSED;
    }
    _schedule() : void {
        if (this._isScheduled) return;
        this._zone.scheduleMicrotask(this._sendDone.bind(this));
        this._state |= _DoneStreamSubscription._SCHEDULED;
    }
    onData(handleData : <T>(data : T) => void) : void {
    }
    onError(handleError : Function) : void {
    }
    onDone(handleDone : <T>() => void) : void {
        this._onDone = handleDone;
    }
    pause(resumeSignal? : Future<any>) : void {
        this._state += _DoneStreamSubscription._PAUSED;
        if (resumeSignal != null) resumeSignal.whenComplete(this.resume.bind(this));
    }
    resume() : void {
        if (this.isPaused) {
            this._state -= _DoneStreamSubscription._PAUSED;
            if (!this.isPaused && !this._isSent) {
                this._schedule();
            }
        }
    }
    cancel() : Future<any> {
        return Future._nullFuture;
    }
    asFuture<E>(futureValue? : E) : Future<E> {
        let result : _Future<E> = new _Future<E>();
        this._onDone = () =>  {
            result._completeWithValue(null);
        };
        return result;
    }
    _sendDone() : void {
        this._state &= ~_DoneStreamSubscription._SCHEDULED;
        if (this.isPaused) return;
        this._state |= _DoneStreamSubscription._DONE_SENT;
        if (this._onDone != null) this._zone.runGuarded(this._onDone);
    }
}

export namespace Timer {
    export type Constructors = never;
    export type Interface = Omit<Timer, Constructors>;
}
@DartClass
export class Timer {
    constructor(duration : core.DartDuration,callback : () => void) {
    }
    @defaultFactory
    static $Timer(duration : core.DartDuration,callback : () => void) : Timer {
        if (op(Op.EQUALS,Zone.current,Zone.ROOT)) {
            return Zone.current.createTimer(duration,callback);
        }
        return Zone.current.createTimer(duration,Zone.current.bindCallback(callback,{
            runGuarded : true}));
    }
    @namedFactory
    static $periodic(duration : core.DartDuration,callback : (timer : Timer) => void) : Timer {
        if (op(Op.EQUALS,Zone.current,Zone.ROOT)) {
            return Zone.current.createPeriodicTimer(duration,callback);
        }
        let boundCallback = Zone.current.bindUnaryCallback(callback,{
            runGuarded : true});
        return Zone.current.createPeriodicTimer(duration,boundCallback);
    }
    static periodic : new(duration : core.DartDuration,callback : (timer : Timer) => void) => Timer;

    static run(callback : () => void) : void {
        new Timer(core.DartDuration.ZERO,callback);
    }
    @Abstract
    cancel() : void{ throw 'abstract'}
    @AbstractProperty
    get isActive() : boolean{ throw 'abstract'}
    static _createTimer(duration : core.DartDuration,callback : () => void) : Timer {
    }
    static _createPeriodicTimer(duration : core.DartDuration,callback : (timer : Timer) => void) : Timer {
    }
}

export namespace _BroadcastSubscriptionWrapper {
    export type Constructors = '_BroadcastSubscriptionWrapper';
    export type Interface<T> = Omit<_BroadcastSubscriptionWrapper<T>, Constructors>;
}
@DartClass
@Implements(StreamSubscription)
export class _BroadcastSubscriptionWrapper<T> implements StreamSubscription.Interface<T> {
    _stream : _AsBroadcastStream<any>;

    constructor(_stream : _AsBroadcastStream<any>) {
    }
    @defaultConstructor
    _BroadcastSubscriptionWrapper(_stream : _AsBroadcastStream<any>) {
        this._stream = _stream;
    }
    onData(handleData : <T>(data : T) => void) : void {
        throw new core.UnsupportedError("Cannot change handlers of asBroadcastStream source subscription.");
    }
    onError(handleError : Function) : void {
        throw new core.UnsupportedError("Cannot change handlers of asBroadcastStream source subscription.");
    }
    onDone(handleDone : <T>() => void) : void {
        throw new core.UnsupportedError("Cannot change handlers of asBroadcastStream source subscription.");
    }
    pause(resumeSignal? : Future<any>) : void {
        this._stream._pauseSubscription(resumeSignal);
    }
    resume() : void {
        this._stream._resumeSubscription();
    }
    cancel() : Future<any> {
        this._stream._cancelSubscription();
        return Future._nullFuture;
    }
    get isPaused() : boolean {
        return this._stream._isSubscriptionPaused;
    }
    asFuture<E>(futureValue? : E) : Future<E> {
        throw new core.UnsupportedError("Cannot change handlers of asBroadcastStream source subscription.");
    }
}

export namespace _StreamIterator {
    export type Constructors = '_StreamIterator';
    export type Interface<T> = Omit<_StreamIterator<T>, Constructors>;
}
@DartClass
@Implements(StreamIterator)
export class _StreamIterator<T> implements StreamIterator.Interface<T> {
    _subscription : StreamSubscription<any>;

    _stateData : core.DartObject;

    _isPaused : boolean;

    constructor(stream : Stream<T>) {
    }
    @defaultConstructor
    _StreamIterator(stream : Stream<T>) {
        this._isPaused = false;
        this._stateData = stream;
    }
    get current() : T {
        if (this._subscription != null && this._isPaused) {
            return this._stateData as core.DartObject;
        }
        return null;
    }
    moveNext() : Future<boolean> {
        if (this._subscription != null) {
            if (this._isPaused) {
                let future = new _Future<boolean>();
                this._stateData = future;
                this._isPaused = false;
                this._subscription.resume();
                return future;
            }
            throw new core.StateError("Already waiting for next.");
        }
        return this._initializeOrDone();
    }
    _initializeOrDone() : Future<boolean> {
        /* TODO (AssertStatementImpl) : assert (_subscription == null); */;
        let stateData = this._stateData;
        if (stateData != null) {
            let stream : Stream<T> = stateData as core.DartObject;
            this._subscription = stream.listen(this._onData.bind(this),{
                onError : this._onError.bind(this),onDone : this._onDone.bind(this),cancelOnError : true});
            let future = new _Future<boolean>();
            this._stateData = future;
            return future;
        }
        return new _Future.immediate(false);
    }
    cancel() : Future<any> {
        let subscription : StreamSubscription<T> = this._subscription;
        let stateData : core.DartObject = this._stateData;
        this._stateData = null;
        if (subscription != null) {
            this._subscription = null;
            if (!this._isPaused) {
                let future : _Future<boolean> = stateData as core.DartObject;
                future._asyncComplete(false);
            }
            return subscription.cancel();
        }
        return Future._nullFuture;
    }
    _onData(data : T) : void {
        /* TODO (AssertStatementImpl) : assert (_subscription != null && !_isPaused); */;
        let moveNextFuture : _Future<boolean> = this._stateData as core.DartObject;
        this._stateData = data;
        this._isPaused = true;
        moveNextFuture._complete(true);
        if (this._subscription != null && this._isPaused) this._subscription.pause();
    }
    _onError(error : core.DartObject,stackTrace? : core.DartStackTrace) : void {
        /* TODO (AssertStatementImpl) : assert (_subscription != null && !_isPaused); */;
        let moveNextFuture : _Future<boolean> = this._stateData as core.DartObject;
        this._subscription = null;
        this._stateData = null;
        moveNextFuture._completeError(error,stackTrace);
    }
    _onDone() : void {
        /* TODO (AssertStatementImpl) : assert (_subscription != null && !_isPaused); */;
        let moveNextFuture : _Future<boolean> = this._stateData as core.DartObject;
        this._subscription = null;
        this._stateData = null;
        moveNextFuture._complete(false);
    }
}

export namespace _StreamSubscriptionTransformer {
    export type Constructors = '_StreamSubscriptionTransformer';
    export type Interface<S,T> = Omit<_StreamSubscriptionTransformer<S,T>, Constructors>;
}
@DartClass
@Implements(StreamTransformer)
export class _StreamSubscriptionTransformer<S,T> implements StreamTransformer.Interface<S,T> {
    _onListen : <S,T>(stream : Stream<S>,cancelOnError : boolean) => StreamSubscription<T>;

    constructor(_onListen : <S,T>(stream : Stream<S>,cancelOnError : boolean) => StreamSubscription<T>) {
    }
    @defaultConstructor
    _StreamSubscriptionTransformer(_onListen : <S,T>(stream : Stream<S>,cancelOnError : boolean) => StreamSubscription<T>) {
        this._onListen = _onListen;
    }
    bind(stream : Stream<S>) : Stream<T> {
        return new _BoundSubscriptionStream<S,T>(stream,this._onListen);
    }
}

export namespace DeferredLoadException {
    export type Constructors = 'DeferredLoadException';
    export type Interface = Omit<DeferredLoadException, Constructors>;
}
@DartClass
@Implements(core.Exception)
export class DeferredLoadException implements core.Exception.Interface {
    constructor(_s : string) {
    }
    @defaultConstructor
    DeferredLoadException(_s : string) {
        this._s = _s;
    }
    toString() : string {
        return `DeferredLoadException: '${this._s}'`;
    }
    _s : string;

}

export namespace FutureOr {
    export type Constructors = '_';
    export type Interface<T> = Omit<FutureOr<T>, Constructors>;
}
@DartClass
export class FutureOr<T> {
    @namedConstructor
    _() {
        throw new core.UnsupportedError("FutureOr can't be instantiated");
    }
    static _ : new<T>() => FutureOr<T>;

}

export namespace Future {
    export type Constructors = never;
    export type Interface<T> = Omit<Future<T>, Constructors>;
}
@DartClass
export class Future<T> {
    private static __$_nullFuture : _Future<core.Null>;
    static get _nullFuture() : _Future<core.Null> { 
        if (this.__$_nullFuture===undefined) {
            this.__$_nullFuture = new _Future.value(null);
        }
        return this.__$_nullFuture;
    }
    static set _nullFuture(__$value : _Future<core.Null>)  { 
        this.__$_nullFuture = __$value;
    }

    constructor(computation : <T>() => any) {
    }
    @defaultFactory
    static $Future<T>(computation : <T>() => any) : Future<T> {
        let result : _Future<T> = new _Future<T>();
        Timer.run(() =>  {
            try {
                result._complete(computation());
            } catch (__error__) {

                {
                    let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let e = __error__;
                    _completeWithErrorCallback(result,e,s);
                }
            }
        });
        return result;
    }
    @namedFactory
    static $microtask<T>(computation : <T>() => any) : Future<T> {
        let result : _Future<T> = new _Future<T>();
        scheduleMicrotask(() =>  {
            try {
                result._complete(computation());
            } catch (__error__) {

                {
                    let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let e = __error__;
                    _completeWithErrorCallback(result,e,s);
                }
            }
        });
        return result;
    }
    static microtask : new<T>(computation : <T>() => any) => Future<T>;

    @namedFactory
    static $sync<T>(computation : <T>() => any) : Future<T> {
        try {
            let result = computation();
            if (is(result, Future<T>)) {
                return result;
            }else if (is(result, Future<any>)) {
                return new _Future.immediate(result);
            }else {
                return new _Future.value(result);
            }
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let error = __error__;
                let future = new _Future<T>();
                let replacement : AsyncError = Zone.current.errorCallback(error,stackTrace);
                if (replacement != null) {
                    future._asyncCompleteError(_nonNullError(replacement.error),replacement.stackTrace);
                }else {
                    future._asyncCompleteError(error,stackTrace);
                }
                return future;
            }
        }
    }
    static sync : new<T>(computation : <T>() => any) => Future<T>;

    @namedFactory
    static $value<T>(result? : any) : Future<T> {
        return new _Future.immediate(result);
    }
    static value : new<T>(result : any) => Future<T>;

    @namedFactory
    static $error<T>(error : core.DartObject,stackTrace? : core.DartStackTrace) : Future<T> {
        error = _nonNullError(error);
        if (!core.identical(Zone.current,properties._ROOT_ZONE)) {
            let replacement : AsyncError = Zone.current.errorCallback(error,stackTrace);
            if (replacement != null) {
                error = _nonNullError(replacement.error);
                stackTrace = replacement.stackTrace;
            }
        }
        return new _Future.immediateError(error,stackTrace);
    }
    static error : new<T>(error : core.DartObject,stackTrace : core.DartStackTrace) => Future<T>;

    @namedFactory
    static $delayed<T>(duration : core.DartDuration,computation? : <T>() => any) : Future<T> {
        let result : _Future<T> = new _Future<T>();
        new Timer(duration,() =>  {
            try {
                result._complete(((_517_)=>(!!_517_)?_517_.call():null)(computation));
            } catch (__error__) {

                {
                    let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let e = __error__;
                    _completeWithErrorCallback(result,e,s);
                }
            }
        });
        return result;
    }
    static delayed : new<T>(duration : core.DartDuration,computation : <T>() => any) => Future<T>;

    static wait<T>(futures : core.DartIterable<Future<T>>,_namedArguments? : {eagerError? : boolean,cleanUp? : <T>(successValue : T) => void}) : Future<core.DartList<T>> {
        let {eagerError,cleanUp} = Object.assign({
            "eagerError" : false}, _namedArguments );
        let result : _Future<core.DartList<T>> = new _Future<core.DartList<T>>();
        let values : core.DartList<T>;
        let remaining : number = 0;
        let error;
        let stackTrace : core.DartStackTrace;
        var handleError : (theError : any,theStackTrace : any) => any = (theError : any,theStackTrace : any) =>  {
            remaining--;
            if (values != null) {
                if (cleanUp != null) {
                    for(let value of values) {
                        if (value != null) {
                            new Future.sync(() =>  {
                                cleanUp(value);
                            });
                        }
                    }
                }
                values = null;
                if (remaining == 0 || eagerError) {
                    result._completeError(theError,theStackTrace);
                }else {
                    error = theError;
                    stackTrace = theStackTrace;
                }
            }else if (remaining == 0 && !eagerError) {
                result._completeError(error,stackTrace);
            }
        };
        try {
            for(let future of futures) {
                let pos : number = remaining;
                future.then((value : T) =>  {
                    remaining--;
                    if (values != null) {
                        values[pos] = value;
                        if (remaining == 0) {
                            result._completeWithValue(values);
                        }
                    }else {
                        if (cleanUp != null && value != null) {
                            new Future.sync(() =>  {
                                cleanUp(value);
                            });
                        }
                        if (remaining == 0 && !eagerError) {
                            result._completeError(error,stackTrace);
                        }
                    }
                },{
                    onError : handleError});
                remaining++;
            }
            if (remaining == 0) {
                return new Future.value(new core.DartList.literal());
            }
            values = new core.DartList<T>(remaining);
        } catch (__error__) {

            {
                let st : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                if (remaining == 0 || eagerError) {
                    return new Future.error(e,st);
                }else {
                    error = e;
                    stackTrace = st;
                }
            }
        }
        return result;
    }
    static any<T>(futures : core.DartIterable<Future<T>>) : Future<T> {
        let completer = new Completer.sync();
        let onValue = (value : T) =>  {
            if (!completer.isCompleted) completer.complete(value);
        };
        let onError = (error : any,stack : any) =>  {
            if (!completer.isCompleted) completer.completeError(error,stack);
        };
        for(let future of futures) {
            future.then(onValue,{
                onError : onError});
        }
        return completer.future;
    }
    static forEach<T>(input : core.DartIterable<T>,f : <T>(element : T) => any) : Future<any> {
        let iterator = input.iterator;
        return Future.doWhile(() =>  {
            if (!iterator.moveNext()) return false;
            let result = f(iterator.current);
            if (is(result, Future<any>)) return result.then(Future._kTrue.bind(this));
            return true;
        });
    }
    static _kTrue(_ : any) : boolean {
        return true;
    }
    static doWhile(f : () => any) : Future<any> {
        let doneSignal : _Future<any> = new _Future<any>();
        let nextIteration;
        nextIteration = Zone.current.bindUnaryCallback((keepGoing : boolean) =>  {
            while (keepGoing){
                let result : any;
                try {
                    result = f();
                } catch (__error__) {

                    {
                        let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let error = __error__;
                        _asyncCompleteWithErrorCallback(doneSignal,error,stackTrace);
                        return;
                    }
                }
                if (is(result, Future<boolean>)) {
                    result.then(nextIteration,{
                        onError : doneSignal._completeError.bind(doneSignal)});
                    return;
                }
                keepGoing = result;
            }
            doneSignal._complete(null);
        },{
            runGuarded : true});
        nextIteration(true);
        return doneSignal;
    }
    @Abstract
    then<S>(onValue : <S,T>(value : T) => any,_namedArguments? : {onError? : Function}) : Future<S>{ throw 'abstract'}
    @Abstract
    catchError(onError : Function,_namedArguments? : {test? : <T>(error : core.DartObject) => boolean}) : Future<T>{ throw 'abstract'}
    @Abstract
    whenComplete(action : <T>() => any) : Future<T>{ throw 'abstract'}
    @Abstract
    asStream() : Stream<T>{ throw 'abstract'}
    @Abstract
    timeout(timeLimit : core.DartDuration,_namedArguments? : {onTimeout? : <T>() => any}) : Future<T>{ throw 'abstract'}
}

export namespace TimeoutException {
    export type Constructors = 'TimeoutException';
    export type Interface = Omit<TimeoutException, Constructors>;
}
@DartClass
@Implements(core.Exception)
export class TimeoutException implements core.Exception.Interface {
    message : string;

    duration : core.DartDuration;

    constructor(message : string,duration? : core.DartDuration) {
    }
    @defaultConstructor
    TimeoutException(message : string,duration? : core.DartDuration) {
        this.message = message;
        this.duration = duration;
    }
    toString() : string {
        let result : string = "TimeoutException";
        if (this.duration != null) result = `TimeoutException after ${this.duration}`;
        if (this.message != null) result = `${result}: ${this.message}`;
        return result;
    }
}

export namespace Completer {
    export type Constructors = never;
    export type Interface<T> = Omit<Completer<T>, Constructors>;
}
@DartClass
export class Completer<T> {
    constructor() {
    }
    @defaultFactory
    static $Completer<T>() : Completer<T> {
        return new _AsyncCompleter<T>();
    }
    @namedFactory
    static $sync<T>() : Completer<T> {
        return new _SyncCompleter<T>();
    }
    static sync : new<T>() => Completer<T>;

    @AbstractProperty
    get future() : Future<T>{ throw 'abstract'}
    @Abstract
    complete(value? : any) : void{ throw 'abstract'}
    @Abstract
    completeError(error : core.DartObject,stackTrace? : core.DartStackTrace) : void{ throw 'abstract'}
    @AbstractProperty
    get isCompleted() : boolean{ throw 'abstract'}
}

export namespace _HandlerEventSink {
    export type Constructors = '_HandlerEventSink';
    export type Interface<S,T> = Omit<_HandlerEventSink<S,T>, Constructors>;
}
@DartClass
@Implements(EventSink)
export class _HandlerEventSink<S,T> implements EventSink.Interface<S> {
    _handleData : <S,T>(data : S,sink : EventSink<T>) => void;

    _handleError : <T>(error : core.DartObject,stackTrace : core.DartStackTrace,sink : EventSink<T>) => void;

    _handleDone : <T>(sink : EventSink<T>) => void;

    _sink : EventSink<T>;

    constructor(_handleData : <S,T>(data : S,sink : EventSink<T>) => void,_handleError : <T>(error : core.DartObject,stackTrace : core.DartStackTrace,sink : EventSink<T>) => void,_handleDone : <T>(sink : EventSink<T>) => void,_sink : EventSink<T>) {
    }
    @defaultConstructor
    _HandlerEventSink(_handleData : <S,T>(data : S,sink : EventSink<T>) => void,_handleError : <T>(error : core.DartObject,stackTrace : core.DartStackTrace,sink : EventSink<T>) => void,_handleDone : <T>(sink : EventSink<T>) => void,_sink : EventSink<T>) {
        this._handleData = _handleData;
        this._handleError = _handleError;
        this._handleDone = _handleDone;
        this._sink = _sink;
        if (op(Op.EQUALS,this._sink,null)) {
            throw new core.ArgumentError("The provided sink must not be null.");
        }
    }
    get _isClosed() : boolean {
        return op(Op.EQUALS,this._sink,null);
    }
    _reportClosedSink() {
        ((_) : Zone =>  {
            {
                _.print("Sink is closed and adding to it is an error.");
                _.print("  See http://dartbug.com/29554.");
                _.print(core.DartStackTrace.current.toString());
                return _;
            }
        })(Zone.ROOT);
    }
    add(data : S) : void {
        if (this._isClosed) {
            this._reportClosedSink();
        }
        if (this._handleData != null) {
            this._handleData(data,this._sink);
        }else {
            this._sink.add(data as T);
        }
    }
    addError(error : core.DartObject,stackTrace? : core.DartStackTrace) : void {
        if (this._isClosed) {
            this._reportClosedSink();
        }
        if (this._handleError != null) {
            this._handleError(error,stackTrace,this._sink);
        }else {
            this._sink.addError(error,stackTrace);
        }
    }
    close() : void {
        if (this._isClosed) return;
        let sink = this._sink;
        this._sink = null;
        if (this._handleDone != null) {
            this._handleDone(sink);
        }else {
            sink.close();
        }
    }
}

export namespace _StreamSinkTransformer {
    export type Constructors = '_StreamSinkTransformer';
    export type Interface<S,T> = Omit<_StreamSinkTransformer<S,T>, Constructors>;
}
@DartClass
@Implements(StreamTransformer)
export class _StreamSinkTransformer<S,T> implements StreamTransformer.Interface<S,T> {
    _sinkMapper : <S,T>(output : EventSink<T>) => EventSink<S>;

    constructor(_sinkMapper : <S,T>(output : EventSink<T>) => EventSink<S>) {
    }
    @defaultConstructor
    _StreamSinkTransformer(_sinkMapper : <S,T>(output : EventSink<T>) => EventSink<S>) {
        this._sinkMapper = _sinkMapper;
    }
    bind(stream : Stream<S>) : Stream<T> {
        return new _BoundSinkStream<S,T>(stream,this._sinkMapper);
    }
}

export namespace _BroadcastStreamController {
    export type Constructors = '_BroadcastStreamController';
    export type Interface<T> = Omit<_BroadcastStreamController<T>, Constructors>;
}
@DartClass
@Implements(StreamController,_StreamControllerLifecycle,_EventSink,_EventDispatch)
export class _BroadcastStreamController<T> implements StreamController.Interface<T>,_StreamControllerLifecycle.Interface<T>,_EventSink.Interface<T>,_EventDispatch.Interface<T> {
    private static __$_STATE_INITIAL : number;
    static get _STATE_INITIAL() : number { 
        if (this.__$_STATE_INITIAL===undefined) {
            this.__$_STATE_INITIAL = 0;
        }
        return this.__$_STATE_INITIAL;
    }

    private static __$_STATE_EVENT_ID : number;
    static get _STATE_EVENT_ID() : number { 
        if (this.__$_STATE_EVENT_ID===undefined) {
            this.__$_STATE_EVENT_ID = 1;
        }
        return this.__$_STATE_EVENT_ID;
    }

    private static __$_STATE_FIRING : number;
    static get _STATE_FIRING() : number { 
        if (this.__$_STATE_FIRING===undefined) {
            this.__$_STATE_FIRING = 2;
        }
        return this.__$_STATE_FIRING;
    }

    private static __$_STATE_CLOSED : number;
    static get _STATE_CLOSED() : number { 
        if (this.__$_STATE_CLOSED===undefined) {
            this.__$_STATE_CLOSED = 4;
        }
        return this.__$_STATE_CLOSED;
    }

    private static __$_STATE_ADDSTREAM : number;
    static get _STATE_ADDSTREAM() : number { 
        if (this.__$_STATE_ADDSTREAM===undefined) {
            this.__$_STATE_ADDSTREAM = 8;
        }
        return this.__$_STATE_ADDSTREAM;
    }

    onListen : () => void;

    onCancel : () => any;

    _state : number;

    _firstSubscription : _BroadcastSubscription<T>;

    _lastSubscription : _BroadcastSubscription<T>;

    _addStreamState : _AddStreamState<T>;

    _doneFuture : _Future<any>;

    constructor(onListen : () => void,onCancel : () => any) {
    }
    @defaultConstructor
    _BroadcastStreamController(onListen : () => void,onCancel : () => any) {
        this._state = _BroadcastStreamController._STATE_INITIAL;
        this.onListen = onListen;
        this.onCancel = onCancel;
    }
    get onPause() : () => void {
        throw new core.UnsupportedError("Broadcast stream controllers do not support pause callbacks");
    }
    set onPause(onPauseHandler : <T>() => void) {
        throw new core.UnsupportedError("Broadcast stream controllers do not support pause callbacks");
    }
    get onResume() : () => void {
        throw new core.UnsupportedError("Broadcast stream controllers do not support pause callbacks");
    }
    set onResume(onResumeHandler : <T>() => void) {
        throw new core.UnsupportedError("Broadcast stream controllers do not support pause callbacks");
    }
    get stream() : Stream<T> {
        return new _BroadcastStream<T>(this);
    }
    get sink() : StreamSink<T> {
        return new _StreamSinkWrapper<T>(this);
    }
    get isClosed() : boolean {
        return (this._state & _BroadcastStreamController._STATE_CLOSED) != 0;
    }
    get isPaused() : boolean {
        return false;
    }
    get hasListener() : boolean {
        return !this._isEmpty;
    }
    get _hasOneListener() : boolean {
        /* TODO (AssertStatementImpl) : assert (!_isEmpty); */;
        return core.identical(this._firstSubscription,this._lastSubscription);
    }
    get _isFiring() : boolean {
        return (this._state & _BroadcastStreamController._STATE_FIRING) != 0;
    }
    get _isAddingStream() : boolean {
        return (this._state & _BroadcastStreamController._STATE_ADDSTREAM) != 0;
    }
    get _mayAddEvent() : boolean {
        return (this._state < _BroadcastStreamController._STATE_CLOSED);
    }
    _ensureDoneFuture() : _Future<any> {
        if (this._doneFuture != null) return this._doneFuture;
        return this._doneFuture = new _Future<any>();
    }
    get _isEmpty() : boolean {
        return op(Op.EQUALS,this._firstSubscription,null);
    }
    _addListener(subscription : _BroadcastSubscription<T>) : void {
        /* TODO (AssertStatementImpl) : assert (identical(subscription._next, subscription)); */;
        subscription._eventState = (this._state & _BroadcastStreamController._STATE_EVENT_ID);
        let oldLast : _BroadcastSubscription<T> = this._lastSubscription;
        this._lastSubscription = subscription;
        subscription._next = null;
        subscription._previous = oldLast;
        if (op(Op.EQUALS,oldLast,null)) {
            this._firstSubscription = subscription;
        }else {
            oldLast._next = subscription;
        }
    }
    _removeListener(subscription : _BroadcastSubscription<T>) : void {
        /* TODO (AssertStatementImpl) : assert (identical(subscription._controller, this)); */;
        /* TODO (AssertStatementImpl) : assert (!identical(subscription._next, subscription)); */;
        let previous : _BroadcastSubscription<T> = subscription._previous;
        let next : _BroadcastSubscription<T> = subscription._next;
        if (op(Op.EQUALS,previous,null)) {
            this._firstSubscription = next;
        }else {
            previous._next = next;
        }
        if (op(Op.EQUALS,next,null)) {
            this._lastSubscription = previous;
        }else {
            next._previous = previous;
        }
        subscription._next = subscription._previous = subscription;
    }
    _subscribe(onData : <T>(data : T) => void,onError : Function,onDone : <T>() => void,cancelOnError : boolean) : StreamSubscription<T> {
        if (this.isClosed) {
            if (op(Op.EQUALS,onDone,null)) onDone = _nullDoneHandler;
            return new _DoneStreamSubscription<T>(onDone);
        }
        let subscription : StreamSubscription<T> = new _BroadcastSubscription<T>(this,onData,onError,onDone,cancelOnError);
        this._addListener(subscription);
        if (core.identical(this._firstSubscription,this._lastSubscription)) {
            _runGuarded(this.onListen);
        }
        return subscription;
    }
    _recordCancel(sub : StreamSubscription<T>) : Future<any> {
        let subscription : _BroadcastSubscription<T> = sub;
        if (core.identical(subscription._next,subscription)) return null;
        if (subscription._isFiring) {
            subscription._setRemoveAfterFiring();
        }else {
            this._removeListener(subscription);
            if (!this._isFiring && this._isEmpty) {
                this._callOnCancel();
            }
        }
        return null;
    }
    _recordPause(subscription : StreamSubscription<T>) : void {
    }
    _recordResume(subscription : StreamSubscription<T>) : void {
    }
    _addEventError() : core.DartError {
        if (this.isClosed) {
            return new core.StateError("Cannot add new events after calling close");
        }
        /* TODO (AssertStatementImpl) : assert (_isAddingStream); */;
        return new core.StateError("Cannot add new events while doing an addStream");
    }
    add(data : T) : void {
        if (!this._mayAddEvent) throw this._addEventError();
        this._sendData(data);
    }
    addError(error : core.DartObject,stackTrace? : core.DartStackTrace) : void {
        error = _nonNullError(error);
        if (!this._mayAddEvent) throw this._addEventError();
        let replacement : AsyncError = Zone.current.errorCallback(error,stackTrace);
        if (replacement != null) {
            error = _nonNullError(replacement.error);
            stackTrace = replacement.stackTrace;
        }
        this._sendError(error,stackTrace);
    }
    close() : Future<any> {
        if (this.isClosed) {
            /* TODO (AssertStatementImpl) : assert (_doneFuture != null); */;
            return this._doneFuture;
        }
        if (!this._mayAddEvent) throw this._addEventError();
        this._state |= _BroadcastStreamController._STATE_CLOSED;
        let doneFuture : Future<any> = this._ensureDoneFuture();
        this._sendDone();
        return doneFuture;
    }
    get done() : Future<any> {
        return this._ensureDoneFuture();
    }
    addStream(stream : Stream<T>,_namedArguments? : {cancelOnError? : boolean}) : Future<any> {
        let {cancelOnError} = Object.assign({
            "cancelOnError" : true}, _namedArguments );
        if (!this._mayAddEvent) throw this._addEventError();
        this._state |= _BroadcastStreamController._STATE_ADDSTREAM;
        this._addStreamState = new _AddStreamState<any>(this,stream,cancelOnError);
        return this._addStreamState.addStreamFuture;
    }
    _add(data : T) : void {
        this._sendData(data);
    }
    _addError(error : core.DartObject,stackTrace : core.DartStackTrace) : void {
        this._sendError(error,stackTrace);
    }
    _close() : void {
        /* TODO (AssertStatementImpl) : assert (_isAddingStream); */;
        let addState : _AddStreamState<any> = this._addStreamState;
        this._addStreamState = null;
        this._state &= ~_BroadcastStreamController._STATE_ADDSTREAM;
        addState.complete();
    }
    _forEachListener(action : <T>(subscription : _BufferingStreamSubscription<T>) => void) : void {
        if (this._isFiring) {
            throw new core.StateError("Cannot fire new event. Controller is already firing an event");
        }
        if (this._isEmpty) return;
        let id : number = (this._state & _BroadcastStreamController._STATE_EVENT_ID);
        this._state ^= _BroadcastStreamController._STATE_EVENT_ID | _BroadcastStreamController._STATE_FIRING;
        let subscription : _BroadcastSubscription<T> = this._firstSubscription;
        while (subscription != null){
            if (subscription._expectsEvent(id)) {
                subscription._eventState |= _BroadcastSubscription._STATE_FIRING;
                action(subscription);
                subscription._toggleEventId();
                let next : _BroadcastSubscription<T> = subscription._next;
                if (subscription._removeAfterFiring) {
                    this._removeListener(subscription);
                }
                subscription._eventState &= ~_BroadcastSubscription._STATE_FIRING;
                subscription = next;
            }else {
                subscription = subscription._next;
            }
        }
        this._state &= ~_BroadcastStreamController._STATE_FIRING;
        if (this._isEmpty) {
            this._callOnCancel();
        }
    }
    _callOnCancel() : void {
        /* TODO (AssertStatementImpl) : assert (_isEmpty); */;
        if (this.isClosed && this._doneFuture._mayComplete) {
            this._doneFuture._asyncComplete(null);
        }
        _runGuarded(this.onCancel);
    }
}

export namespace _EventSinkWrapper {
    export type Constructors = '_EventSinkWrapper';
    export type Interface<T> = Omit<_EventSinkWrapper<T>, Constructors>;
}
@DartClass
@Implements(EventSink)
export class _EventSinkWrapper<T> implements EventSink.Interface<T> {
    _sink : _EventSink<any>;

    constructor(_sink : _EventSink<any>) {
    }
    @defaultConstructor
    _EventSinkWrapper(_sink : _EventSink<any>) {
        this._sink = _sink;
    }
    add(data : T) : void {
        this._sink._add(data);
    }
    addError(error : any,stackTrace? : core.DartStackTrace) : void {
        this._sink._addError(error,stackTrace);
    }
    close() : void {
        this._sink._close();
    }
}

export namespace StreamTransformer {
    export type Constructors = never;
    export type Interface<S,T> = Omit<StreamTransformer<S,T>, Constructors>;
}
@DartClass
export class StreamTransformer<S,T> {
    constructor(onListen : <S,T>(stream : Stream<S>,cancelOnError : boolean) => StreamSubscription<T>) {
    }
    @defaultFactory
    static $StreamTransformer<S,T>(onListen : <S,T>(stream : Stream<S>,cancelOnError : boolean) => StreamSubscription<T>) : StreamTransformer<S,T> {
        return new _StreamSubscriptionTransformer<S,T>(onListen);
    }
    @namedFactory
    static $fromHandlers<S,T>(_namedArguments? : {handleData? : <S,T>(data : S,sink : EventSink<T>) => void,handleError? : <S,T>(error : core.DartObject,stackTrace : core.DartStackTrace,sink : EventSink<T>) => void,handleDone? : <S,T>(sink : EventSink<T>) => void}) : StreamTransformer<S,T> {
        let {handleData,handleError,handleDone} = Object.assign({
        }, _namedArguments );
        return new _StreamHandlerTransformer<S,T>({
            handleData : handleData,handleError : handleError,handleDone : handleDone});
    }
    static fromHandlers : new<S,T>(_namedArguments? : {handleData? : <S,T>(data : S,sink : EventSink<T>) => void,handleError? : <S,T>(error : core.DartObject,stackTrace : core.DartStackTrace,sink : EventSink<T>) => void,handleDone? : <S,T>(sink : EventSink<T>) => void}) => StreamTransformer<S,T>;

    @Abstract
    bind(stream : Stream<S>) : Stream<T>{ throw 'abstract'}
}

export namespace _AsyncRun {
    export type Constructors = '_AsyncRun';
    export type Interface = Omit<_AsyncRun, Constructors>;
}
@DartClass
export class _AsyncRun {
    static _scheduleImmediate(callback : () => void) : void {
    }
    constructor() {
    }
    @defaultConstructor
    _AsyncRun() {
    }
}

export namespace Stream {
    export type Constructors = 'Stream' | '_internal';
    export type Interface<T> = Omit<Stream<T>, Constructors>;
}
@DartClass
export class Stream<T> {
    constructor() {
    }
    @defaultConstructor
    Stream() {
    }
    @namedConstructor
    _internal() {
    }
    static _internal : new<T>() => Stream<T>;

    @namedFactory
    static $empty<T>() : Stream<T> {
        return new _EmptyStream<T>();
    }
    static empty : new<T>() => Stream<T>;

    @namedFactory
    static $fromFuture<T>(future : Future<T>) : Stream<T> {
        let controller : _StreamController<T> = new StreamController<T>({
            sync : true});
        future.then((value : any) =>  {
            controller._add(value);
            controller._closeUnchecked();
        },{
            onError : (error : any,stackTrace : any) =>  {
                controller._addError(error,stackTrace);
                controller._closeUnchecked();
            }});
        return controller.stream;
    }
    static fromFuture : new<T>(future : Future<T>) => Stream<T>;

    @namedFactory
    static $fromFutures<T>(futures : core.DartIterable<Future<T>>) : Stream<T> {
        let controller : _StreamController<T> = new StreamController<T>({
            sync : true});
        let count : number = 0;
        let onValue = (value : T) =>  {
            if (!controller.isClosed) {
                controller._add(value);
                if (--count == 0) controller._closeUnchecked();
            }
        };
        let onError = (error : any,stack : any) =>  {
            if (!controller.isClosed) {
                controller._addError(error,stack);
                if (--count == 0) controller._closeUnchecked();
            }
        };
        for(let future of futures) {
            count++;
            future.then(onValue,{
                onError : onError});
        }
        if (count == 0) scheduleMicrotask(controller.close.bind(controller));
        return controller.stream;
    }
    static fromFutures : new<T>(futures : core.DartIterable<Future<T>>) => Stream<T>;

    @namedFactory
    static $fromIterable<T>(data : core.DartIterable<T>) : Stream<T> {
        return new _GeneratedStreamImpl<T>(() =>  {
            return new _IterablePendingEvents<T>(data);
        });
    }
    static fromIterable : new<T>(data : core.DartIterable<T>) => Stream<T>;

    @namedFactory
    static $periodic<T>(period : core.DartDuration,computation? : <T>(computationCount : number) => T) : Stream<T> {
        let timer : Timer;
        let computationCount : number = 0;
        let controller : StreamController<T>;
        let watch : core.DartStopwatch = new core.DartStopwatch();
        var sendEvent : () => void = () : void =>  {
            watch.reset();
            let data : T;
            if (computation != null) {
                try {
                    data = computation(computationCount++);
                } catch (__error__) {

                    {
                        let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let e = __error__;
                        controller.addError(e,s);
                        return;
                    }
                }
            }
            controller.add(data);
        };
        var startPeriodicTimer : () => void = () : void =>  {
            /* TODO (AssertStatementImpl) : assert (timer == null); */;
            timer = new Timer.periodic(period,(timer : Timer) =>  {
                sendEvent();
            });
        };
        controller = new StreamController<T>({
            sync : true,onListen : () =>  {
                watch.start();
                startPeriodicTimer();
            },onPause : () =>  {
                timer.cancel();
                timer = null;
                watch.stop();
            },onResume : () =>  {
                /* TODO (AssertStatementImpl) : assert (timer == null); */;
                let elapsed : core.DartDuration = watch.elapsed;
                watch.start();
                timer = new Timer(op(Op.MINUS,period,elapsed),() =>  {
                    timer = null;
                    startPeriodicTimer();
                    sendEvent();
                });
            },onCancel : () =>  {
                if (timer != null) timer.cancel();
                timer = null;
                return Future._nullFuture;
            }});
        return controller.stream;
    }
    static periodic : new<T>(period : core.DartDuration,computation : <T>(computationCount : number) => T) => Stream<T>;

    @namedFactory
    static $eventTransformed<T>(source : Stream<any>,mapSink : <T>(sink : EventSink<T>) => EventSink<any>) : Stream<T> {
        return new _BoundSinkStream<any,any>(source,mapSink);
    }
    static eventTransformed : new<T>(source : Stream<any>,mapSink : <T>(sink : EventSink<T>) => EventSink<any>) => Stream<T>;

    get isBroadcast() : boolean {
        return false;
    }
    asBroadcastStream(_namedArguments? : {onListen? : <T>(subscription : StreamSubscription<T>) => void,onCancel? : <T>(subscription : StreamSubscription<T>) => void}) : Stream<T> {
        let {onListen,onCancel} = Object.assign({
        }, _namedArguments );
        return new _AsBroadcastStream<T>(this,onListen,onCancel);
    }
    @Abstract
    listen(onData : <T>(event : T) => void,_namedArguments? : {onError? : Function,onDone? : <T>() => void,cancelOnError? : boolean}) : StreamSubscription<T>{ throw 'abstract'}
    where(test : <T>(event : T) => boolean) : Stream<T> {
        return new _WhereStream<T>(this,test);
    }
    map<S>(convert : <S,T>(event : T) => S) : Stream<S> {
        return new _MapStream<T,S>(this,convert);
    }
    asyncMap<E>(convert : <E,T>(event : T) => any) : Stream<E> {
        let controller : StreamController<E>;
        let subscription : StreamSubscription<T>;
        var onListen : () => void = () : void =>  {
            let add = controller.add.bind(controller);
            /* TODO (AssertStatementImpl) : assert (controller is _StreamController || controller is _BroadcastStreamController); */;
            let eventSink : _EventSink<E> = controller as core.DartObject;
            let addError = eventSink._addError.bind(eventSink);
            subscription = this.listen((event : T) =>  {
                let newValue : any;
                try {
                    newValue = convert(event);
                } catch (__error__) {

                    {
                        let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let e = __error__;
                        controller.addError(e,s);
                        return;
                    }
                }
                if (is(newValue, Future<E>)) {
                    subscription.pause();
                    newValue.then(add,{
                        onError : addError}).whenComplete(subscription.resume.bind(subscription));
                }else {
                    controller.add(newValue as core.DartObject);
                }
            },{
                onError : addError,onDone : controller.close.bind(controller)});
        };
        if (this.isBroadcast) {
            controller = new StreamController.broadcast({
                onListen : onListen,onCancel : () =>  {
                    subscription.cancel();
                },sync : true});
        }else {
            controller = new StreamController<E>({
                onListen : onListen,onPause : () =>  {
                    subscription.pause();
                },onResume : () =>  {
                    subscription.resume();
                },onCancel : () =>  {
                    return subscription.cancel();
                },sync : true});
        }
        return controller.stream;
    }
    asyncExpand<E>(convert : <E,T>(event : T) => Stream<E>) : Stream<E> {
        let controller : StreamController<E>;
        let subscription : StreamSubscription<T>;
        var onListen : () => void = () : void =>  {
            /* TODO (AssertStatementImpl) : assert (controller is _StreamController || controller is _BroadcastStreamController); */;
            let eventSink : _EventSink<E> = controller as core.DartObject;
            subscription = this.listen((event : T) =>  {
                let newStream : Stream<E>;
                try {
                    newStream = convert(event);
                } catch (__error__) {

                    {
                        let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let e = __error__;
                        controller.addError(e,s);
                        return;
                    }
                }
                if (newStream != null) {
                    subscription.pause();
                    controller.addStream(newStream).whenComplete(subscription.resume.bind(subscription));
                }
            },{
                onError : eventSink._addError.bind(eventSink),onDone : controller.close.bind(controller)});
        };
        if (this.isBroadcast) {
            controller = new StreamController.broadcast({
                onListen : onListen,onCancel : () =>  {
                    subscription.cancel();
                },sync : true});
        }else {
            controller = new StreamController<E>({
                onListen : onListen,onPause : () =>  {
                    subscription.pause();
                },onResume : () =>  {
                    subscription.resume();
                },onCancel : () =>  {
                    return subscription.cancel();
                },sync : true});
        }
        return controller.stream;
    }
    handleError(onError : Function,_namedArguments? : {test? : <T>(error : any) => boolean}) : Stream<T> {
        let {test} = Object.assign({
        }, _namedArguments );
        return new _HandleErrorStream<T>(this,onError,test);
    }
    expand<S>(convert : <S,T>(value : T) => core.DartIterable<S>) : Stream<S> {
        return new _ExpandStream<T,S>(this,convert);
    }
    pipe(streamConsumer : StreamConsumer<T>) : Future<any> {
        return streamConsumer.addStream(this).then((_ : any) =>  {
            return streamConsumer.close();
        });
    }
    transform<S>(streamTransformer : StreamTransformer<T,S>) : Stream<S> {
        return streamTransformer.bind(this);
    }
    reduce(combine : <T>(previous : T,element : T) => T) : Future<T> {
        let result : _Future<T> = new _Future<T>();
        let seenFirst : boolean = false;
        let value : T;
        let subscription : StreamSubscription<any>;
        subscription = this.listen((element : T) =>  {
            if (seenFirst) {
                _runUserCode(() =>  {
                    return combine(value,element);
                },(newValue : T) =>  {
                    value = newValue;
                },_cancelAndErrorClosure(subscription,result));
            }else {
                value = element;
                seenFirst = true;
            }
        },{
            onError : result._completeError.bind(result),onDone : () =>  {
                if (!seenFirst) {
                    try {
                        throw _internal.IterableElementError.noElement();
                    } catch (__error__) {

                        {
                            let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                            let e = __error__;
                            _completeWithErrorCallback(result,e,s);
                        }
                    }
                }else {
                    result._complete(value);
                }
            },cancelOnError : true});
        return result;
    }
    fold<S>(initialValue : S,combine : <S,T>(previous : S,element : T) => S) : Future<S> {
        let result : _Future<S> = new _Future<S>();
        let value : S = initialValue;
        let subscription : StreamSubscription<any>;
        subscription = this.listen((element : T) =>  {
            _runUserCode(() =>  {
                return combine(value,element);
            },(newValue : S) =>  {
                value = newValue;
            },_cancelAndErrorClosure(subscription,result));
        },{
            onError : (e : any,st : any) =>  {
                result._completeError(e,st);
            },onDone : () =>  {
                result._complete(value);
            },cancelOnError : true});
        return result;
    }
    join(separator? : string) : Future<string> {
        separator = separator || "";
        let result : _Future<string> = new _Future<string>();
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        let subscription : StreamSubscription<any>;
        let first : boolean = true;
        subscription = this.listen((element : T) =>  {
            if (!first) {
                buffer.write(separator);
            }
            first = false;
            try {
                buffer.write(element);
            } catch (__error__) {

                {
                    let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let e = __error__;
                    _cancelAndErrorWithReplacement(subscription,result,e,s);
                }
            }
        },{
            onError : (e : any) =>  {
                result._completeError(e);
            },onDone : () =>  {
                result._complete(buffer.toString());
            },cancelOnError : true});
        return result;
    }
    contains(needle : core.DartObject) : Future<boolean> {
        let future : _Future<boolean> = new _Future<boolean>();
        let subscription : StreamSubscription<any>;
        subscription = this.listen((element : T) =>  {
            _runUserCode(() =>  {
                return (op(Op.EQUALS,element,needle));
            },(isMatch : boolean) =>  {
                if (isMatch) {
                    _cancelAndValue(subscription,future,true);
                }
            },_cancelAndErrorClosure(subscription,future));
        },{
            onError : future._completeError.bind(future),onDone : () =>  {
                future._complete(false);
            },cancelOnError : true});
        return future;
    }
    forEach(action : <T>(element : T) => void) : Future<any> {
        let future : _Future<any> = new _Future<any>();
        let subscription : StreamSubscription<any>;
        subscription = this.listen((element : T) =>  {
            _runUserCode(() =>  {
                return action(element);
            },(_ : any) =>  {
            },_cancelAndErrorClosure(subscription,future));
        },{
            onError : future._completeError.bind(future),onDone : () =>  {
                future._complete(null);
            },cancelOnError : true});
        return future;
    }
    every(test : <T>(element : T) => boolean) : Future<boolean> {
        let future : _Future<boolean> = new _Future<boolean>();
        let subscription : StreamSubscription<any>;
        subscription = this.listen((element : T) =>  {
            _runUserCode(() =>  {
                return test(element);
            },(isMatch : boolean) =>  {
                if (!isMatch) {
                    _cancelAndValue(subscription,future,false);
                }
            },_cancelAndErrorClosure(subscription,future));
        },{
            onError : future._completeError.bind(future),onDone : () =>  {
                future._complete(true);
            },cancelOnError : true});
        return future;
    }
    any(test : <T>(element : T) => boolean) : Future<boolean> {
        let future : _Future<boolean> = new _Future<boolean>();
        let subscription : StreamSubscription<any>;
        subscription = this.listen((element : T) =>  {
            _runUserCode(() =>  {
                return test(element);
            },(isMatch : boolean) =>  {
                if (isMatch) {
                    _cancelAndValue(subscription,future,true);
                }
            },_cancelAndErrorClosure(subscription,future));
        },{
            onError : future._completeError.bind(future),onDone : () =>  {
                future._complete(false);
            },cancelOnError : true});
        return future;
    }
    get length() : Future<number> {
        let future : _Future<number> = new _Future<number>();
        let count : number = 0;
        this.listen((_ : any) =>  {
            count++;
        },{
            onError : future._completeError.bind(future),onDone : () =>  {
                future._complete(count);
            },cancelOnError : true});
        return future;
    }
    get isEmpty() : Future<boolean> {
        let future : _Future<boolean> = new _Future<boolean>();
        let subscription : StreamSubscription<any>;
        subscription = this.listen((_ : any) =>  {
            _cancelAndValue(subscription,future,false);
        },{
            onError : future._completeError.bind(future),onDone : () =>  {
                future._complete(true);
            },cancelOnError : true});
        return future;
    }
    toList() : Future<core.DartList<T>> {
        let result : core.DartList<T> = new core.DartList.literal<T>();
        let future : _Future<core.DartList<T>> = new _Future<core.DartList<T>>();
        this.listen((data : T) =>  {
            result.add(data);
        },{
            onError : future._completeError.bind(future),onDone : () =>  {
                future._complete(result);
            },cancelOnError : true});
        return future;
    }
    toSet() : Future<core.DartSet<T>> {
        let result : core.DartSet<T> = new core.DartSet<T>();
        let future : _Future<core.DartSet<T>> = new _Future<core.DartSet<T>>();
        this.listen((data : T) =>  {
            result.add(data);
        },{
            onError : future._completeError.bind(future),onDone : () =>  {
                future._complete(result);
            },cancelOnError : true});
        return future;
    }
    drain<E>(futureValue? : E) : Future<E> {
        return this.listen(null,{
            cancelOnError : true}).asFuture(futureValue);
    }
    take(count : number) : Stream<T> {
        return new _TakeStream<T>(this,count);
    }
    takeWhile(test : <T>(element : T) => boolean) : Stream<T> {
        return new _TakeWhileStream<T>(this,test);
    }
    skip(count : number) : Stream<T> {
        return new _SkipStream<T>(this,count);
    }
    skipWhile(test : <T>(element : T) => boolean) : Stream<T> {
        return new _SkipWhileStream<T>(this,test);
    }
    distinct(equals? : <T>(previous : T,next : T) => boolean) : Stream<T> {
        return new _DistinctStream<T>(this,equals);
    }
    get first() : Future<T> {
        let future : _Future<T> = new _Future<T>();
        let subscription : StreamSubscription<any>;
        subscription = this.listen((value : T) =>  {
            _cancelAndValue(subscription,future,value);
        },{
            onError : future._completeError.bind(future),onDone : () =>  {
                try {
                    throw _internal.IterableElementError.noElement();
                } catch (__error__) {

                    {
                        let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let e = __error__;
                        _completeWithErrorCallback(future,e,s);
                    }
                }
            },cancelOnError : true});
        return future;
    }
    get last() : Future<T> {
        let future : _Future<T> = new _Future<T>();
        let result : T = null;
        let foundResult : boolean = false;
        this.listen((value : T) =>  {
            foundResult = true;
            result = value;
        },{
            onError : future._completeError.bind(future),onDone : () =>  {
                if (foundResult) {
                    future._complete(result);
                    return;
                }
                try {
                    throw _internal.IterableElementError.noElement();
                } catch (__error__) {

                    {
                        let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let e = __error__;
                        _completeWithErrorCallback(future,e,s);
                    }
                }
            },cancelOnError : true});
        return future;
    }
    get single() : Future<T> {
        let future : _Future<T> = new _Future<T>();
        let result : T = null;
        let foundResult : boolean = false;
        let subscription : StreamSubscription<any>;
        subscription = this.listen((value : T) =>  {
            if (foundResult) {
                try {
                    throw _internal.IterableElementError.tooMany();
                } catch (__error__) {

                    {
                        let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let e = __error__;
                        _cancelAndErrorWithReplacement(subscription,future,e,s);
                    }
                }
                return;
            }
            foundResult = true;
            result = value;
        },{
            onError : future._completeError.bind(future),onDone : () =>  {
                if (foundResult) {
                    future._complete(result);
                    return;
                }
                try {
                    throw _internal.IterableElementError.noElement();
                } catch (__error__) {

                    {
                        let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let e = __error__;
                        _completeWithErrorCallback(future,e,s);
                    }
                }
            },cancelOnError : true});
        return future;
    }
    firstWhere(test : <T>(element : T) => boolean,_namedArguments? : {defaultValue? : <T>() => core.DartObject}) : Future<any> {
        let {defaultValue} = Object.assign({
        }, _namedArguments );
        let future : _Future<any> = new _Future<any>();
        let subscription : StreamSubscription<any>;
        subscription = this.listen((value : T) =>  {
            _runUserCode(() =>  {
                return test(value);
            },(isMatch : boolean) =>  {
                if (isMatch) {
                    _cancelAndValue(subscription,future,value);
                }
            },_cancelAndErrorClosure(subscription,future));
        },{
            onError : future._completeError.bind(future),onDone : () =>  {
                if (defaultValue != null) {
                    _runUserCode(defaultValue,future._complete.bind(future),future._completeError.bind(future));
                    return;
                }
                try {
                    throw _internal.IterableElementError.noElement();
                } catch (__error__) {

                    {
                        let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let e = __error__;
                        _completeWithErrorCallback(future,e,s);
                    }
                }
            },cancelOnError : true});
        return future;
    }
    lastWhere(test : <T>(element : T) => boolean,_namedArguments? : {defaultValue? : <T>() => core.DartObject}) : Future<any> {
        let {defaultValue} = Object.assign({
        }, _namedArguments );
        let future : _Future<any> = new _Future<any>();
        let result : T = null;
        let foundResult : boolean = false;
        let subscription : StreamSubscription<any>;
        subscription = this.listen((value : T) =>  {
            _runUserCode(() =>  {
                return true == test(value);
            },(isMatch : boolean) =>  {
                if (isMatch) {
                    foundResult = true;
                    result = value;
                }
            },_cancelAndErrorClosure(subscription,future));
        },{
            onError : future._completeError.bind(future),onDone : () =>  {
                if (foundResult) {
                    future._complete(result);
                    return;
                }
                if (defaultValue != null) {
                    _runUserCode(defaultValue,future._complete.bind(future),future._completeError.bind(future));
                    return;
                }
                try {
                    throw _internal.IterableElementError.noElement();
                } catch (__error__) {

                    {
                        let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let e = __error__;
                        _completeWithErrorCallback(future,e,s);
                    }
                }
            },cancelOnError : true});
        return future;
    }
    singleWhere(test : <T>(element : T) => boolean) : Future<T> {
        let future : _Future<T> = new _Future<T>();
        let result : T = null;
        let foundResult : boolean = false;
        let subscription : StreamSubscription<any>;
        subscription = this.listen((value : T) =>  {
            _runUserCode(() =>  {
                return true == test(value);
            },(isMatch : boolean) =>  {
                if (isMatch) {
                    if (foundResult) {
                        try {
                            throw _internal.IterableElementError.tooMany();
                        } catch (__error__) {

                            {
                                let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                                let e = __error__;
                                _cancelAndErrorWithReplacement(subscription,future,e,s);
                            }
                        }
                        return;
                    }
                    foundResult = true;
                    result = value;
                }
            },_cancelAndErrorClosure(subscription,future));
        },{
            onError : future._completeError.bind(future),onDone : () =>  {
                if (foundResult) {
                    future._complete(result);
                    return;
                }
                try {
                    throw _internal.IterableElementError.noElement();
                } catch (__error__) {

                    {
                        let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let e = __error__;
                        _completeWithErrorCallback(future,e,s);
                    }
                }
            },cancelOnError : true});
        return future;
    }
    elementAt(index : number) : Future<T> {
        if (isNot(index, "number") || index < 0) throw new core.ArgumentError(index);
        let future : _Future<T> = new _Future<T>();
        let subscription : StreamSubscription<any>;
        let elementIndex : number = 0;
        subscription = this.listen((value : T) =>  {
            if (index == elementIndex) {
                _cancelAndValue(subscription,future,value);
                return;
            }
            elementIndex += 1;
        },{
            onError : future._completeError.bind(future),onDone : () =>  {
                future._completeError(new core.RangeError.index(index,this,"index",null,elementIndex));
            },cancelOnError : true});
        return future;
    }
    timeout(timeLimit : core.DartDuration,_namedArguments? : {onTimeout? : <T>(sink : EventSink<T>) => void}) : Stream<T> {
        let {onTimeout} = Object.assign({
        }, _namedArguments );
        let controller : StreamController<T>;
        let subscription : StreamSubscription<T>;
        let timer : Timer;
        let zone : Zone;
        let timeout : () => void;
        var onData : (event : T) => void = (event : T) : void =>  {
            timer.cancel();
            controller.add(event);
            timer = zone.createTimer(timeLimit,timeout);
        };
        var onError : (error : any,stackTrace : core.DartStackTrace) => void = (error : any,stackTrace : core.DartStackTrace) : void =>  {
            timer.cancel();
            /* TODO (AssertStatementImpl) : assert (controller is _StreamController || controller is _BroadcastStreamController); */;
            let eventSink : any = controller;
            eventSink._addError(error,stackTrace);
            timer = zone.createTimer(timeLimit,timeout);
        };
        var onDone : () => void = () : void =>  {
            timer.cancel();
            controller.close();
        };
        var onListen : () => void = () : void =>  {
            zone = Zone.current;
            if (op(Op.EQUALS,onTimeout,null)) {
                timeout = () =>  {
                    controller.addError(new TimeoutException("No stream event",timeLimit),null);
                };
            }else {
                let registeredOnTimeout = zone.registerUnaryCallback(onTimeout);
                let wrapper = new _ControllerEventSinkWrapper<T>(null);
                timeout = () =>  {
                    wrapper._sink = controller;
                    zone.runUnaryGuarded(registeredOnTimeout,wrapper);
                    wrapper._sink = null;
                };
            }
            subscription = this.listen(onData,{
                onError : onError,onDone : onDone});
            timer = zone.createTimer(timeLimit,timeout);
        };
        var onCancel : () => Future<any> = () : Future<any> =>  {
            timer.cancel();
            let result : Future<any> = subscription.cancel();
            subscription = null;
            return result;
        };
        controller = this.isBroadcast ? new _SyncBroadcastStreamController<T>(onListen,onCancel) : new _SyncStreamController<T>(onListen,() =>  {
            timer.cancel();
            subscription.pause();
        },() =>  {
            subscription.resume();
            timer = zone.createTimer(timeLimit,timeout);
        },onCancel);
        return controller.stream;
    }
}

export namespace StreamSubscription {
    export type Constructors = 'StreamSubscription';
    export type Interface<T> = Omit<StreamSubscription<T>, Constructors>;
}
@DartClass
export class StreamSubscription<T> {
    @Abstract
    cancel() : Future<any>{ throw 'abstract'}
    @Abstract
    onData(handleData : <T>(data : T) => void) : void{ throw 'abstract'}
    @Abstract
    onError(handleError : Function) : void{ throw 'abstract'}
    @Abstract
    onDone(handleDone : <T>() => void) : void{ throw 'abstract'}
    @Abstract
    pause(resumeSignal? : Future<any>) : void{ throw 'abstract'}
    @Abstract
    resume() : void{ throw 'abstract'}
    @AbstractProperty
    get isPaused() : boolean{ throw 'abstract'}
    @Abstract
    asFuture<E>(futureValue? : E) : Future<E>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    StreamSubscription() {
    }
}

export namespace EventSink {
    export type Constructors = 'EventSink';
    export type Interface<T> = Omit<EventSink<T>, Constructors>;
}
@DartClass
@Implements(core.DartSink)
export class EventSink<T> implements core.DartSink.Interface<T> {
    @Abstract
    add(event : T) : void{ throw 'abstract'}
    @Abstract
    addError(error : core.DartObject,stackTrace? : core.DartStackTrace) : void{ throw 'abstract'}
    @Abstract
    close() : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    EventSink() {
    }
}

export namespace StreamController {
    export type Constructors = never;
    export type Interface<T> = Omit<StreamController<T>, Constructors>;
}
@DartClass
@Implements(StreamSink)
export class StreamController<T> implements StreamSink.Interface<T> {
    @AbstractProperty
    get stream() : Stream<T>{ throw 'abstract'}
    constructor(_namedArguments? : {onListen? : <T>() => void,onPause? : <T>() => void,onResume? : <T>() => void,onCancel? : <T>() => any,sync? : boolean}) {
    }
    @defaultFactory
    static $StreamController<T>(_namedArguments? : {onListen? : <T>() => void,onPause? : <T>() => void,onResume? : <T>() => void,onCancel? : <T>() => any,sync? : boolean}) : StreamController<T> {
        let {onListen,onPause,onResume,onCancel,sync} = Object.assign({
            "sync" : false}, _namedArguments );
        return sync ? new _SyncStreamController<T>(onListen,onPause,onResume,onCancel) : new _AsyncStreamController<T>(onListen,onPause,onResume,onCancel);
    }
    @namedFactory
    static $broadcast<T>(_namedArguments? : {onListen? : <T>() => void,onCancel? : <T>() => void,sync? : boolean}) : StreamController<T> {
        let {onListen,onCancel,sync} = Object.assign({
            "sync" : false}, _namedArguments );
        return sync ? new _SyncBroadcastStreamController<T>(onListen,onCancel) : new _AsyncBroadcastStreamController<T>(onListen,onCancel);
    }
    static broadcast : new<T>(_namedArguments? : {onListen? : <T>() => void,onCancel? : <T>() => void,sync? : boolean}) => StreamController<T>;

    @AbstractProperty
    get onListen() : () => void{ throw 'abstract'}
    set onListen(onListenHandler : <T>() => void){ throw 'abstract'}
    @AbstractProperty
    get onPause() : () => void{ throw 'abstract'}
    set onPause(onPauseHandler : <T>() => void){ throw 'abstract'}
    @AbstractProperty
    get onResume() : () => void{ throw 'abstract'}
    set onResume(onResumeHandler : <T>() => void){ throw 'abstract'}
    @AbstractProperty
    get onCancel() : () => any{ throw 'abstract'}
    set onCancel(onCancelHandler : <T>() => any){ throw 'abstract'}
    @AbstractProperty
    get sink() : StreamSink<T>{ throw 'abstract'}
    @AbstractProperty
    get isClosed() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isPaused() : boolean{ throw 'abstract'}
    @AbstractProperty
    get hasListener() : boolean{ throw 'abstract'}
    @Abstract
    add(event : T) : void{ throw 'abstract'}
    @Abstract
    addError(error : core.DartObject,stackTrace? : core.DartStackTrace) : void{ throw 'abstract'}
    @Abstract
    close() : Future<any>{ throw 'abstract'}
    @Abstract
    addStream(source : Stream<T>,_namedArguments? : {cancelOnError? : boolean}) : Future<any>{ throw 'abstract'}
}

export namespace StreamConsumer {
    export type Constructors = 'StreamConsumer';
    export type Interface<S> = Omit<StreamConsumer<S>, Constructors>;
}
@DartClass
export class StreamConsumer<S> {
    @Abstract
    addStream(stream : Stream<S>) : Future<any>{ throw 'abstract'}
    @Abstract
    close() : Future<any>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    StreamConsumer() {
    }
}

export namespace StreamSink {
    export type Constructors = 'StreamSink';
    export type Interface<S> = Omit<StreamSink<S>, Constructors>;
}
@DartClass
@Implements(EventSink,StreamConsumer)
export class StreamSink<S> implements EventSink.Interface<S>,StreamConsumer.Interface<S> {
    @Abstract
    close() : Future<any>{ throw 'abstract'}
    @AbstractProperty
    get done() : Future<any>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    StreamSink() {
    }
}

export namespace AsyncError {
    export type Constructors = 'AsyncError';
    export type Interface = Omit<AsyncError, Constructors>;
}
@DartClass
@Implements(core.DartError)
export class AsyncError implements core.DartError.Interface {
    error : core.DartObject;

    stackTrace : core.DartStackTrace;

    constructor(error : core.DartObject,stackTrace : core.DartStackTrace) {
    }
    @defaultConstructor
    AsyncError(error : core.DartObject,stackTrace : core.DartStackTrace) {
        this.error = error;
        this.stackTrace = stackTrace;
    }
    toString() : string {
        return `${this.error}`;
    }
}

export namespace _SyncBroadcastStreamController {
    export type Constructors = _BroadcastStreamController.Constructors | '_SyncBroadcastStreamController';
    export type Interface<T> = Omit<_SyncBroadcastStreamController<T>, Constructors>;
}
@DartClass
@Implements(SynchronousStreamController)
export class _SyncBroadcastStreamController<T> extends _BroadcastStreamController<T> implements SynchronousStreamController.Interface<T> {
    constructor(onListen : <T>() => void,onCancel : <T>() => void) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SyncBroadcastStreamController(onListen : <T>() => void,onCancel : <T>() => void) {
        super._BroadcastStreamController(onListen,onCancel);
    }
    get _mayAddEvent() : boolean {
        return super._mayAddEvent && !this._isFiring;
    }
    _addEventError() {
        if (this._isFiring) {
            return new core.StateError("Cannot fire new event. Controller is already firing an event");
        }
        return super._addEventError();
    }
    _sendData(data : T) : void {
        if (this._isEmpty) return;
        if (this._hasOneListener) {
            this._state |= _BroadcastStreamController._STATE_FIRING;
            let subscription : _BroadcastSubscription<T> = this._firstSubscription;
            subscription._add(data);
            this._state &= ~_BroadcastStreamController._STATE_FIRING;
            if (this._isEmpty) {
                this._callOnCancel();
            }
            return;
        }
        this._forEachListener((subscription : _BufferingStreamSubscription<T>) =>  {
            subscription._add(data);
        });
    }
    _sendError(error : core.DartObject,stackTrace : core.DartStackTrace) : void {
        if (this._isEmpty) return;
        this._forEachListener((subscription : _BufferingStreamSubscription<T>) =>  {
            subscription._addError(error,stackTrace);
        });
    }
    _sendDone() : void {
        if (!this._isEmpty) {
            this._forEachListener((subscription : _BufferingStreamSubscription<T>) =>  {
                subscription._close();
            });
        }else {
            /* TODO (AssertStatementImpl) : assert (_doneFuture != null); */;
            /* TODO (AssertStatementImpl) : assert (_doneFuture._mayComplete); */;
            this._doneFuture._asyncComplete(null);
        }
    }
}

export namespace _SinkTransformerStreamSubscription {
    export type Constructors = _BufferingStreamSubscription.Constructors | '_SinkTransformerStreamSubscription';
    export type Interface<S,T> = Omit<_SinkTransformerStreamSubscription<S,T>, Constructors>;
}
@DartClass
export class _SinkTransformerStreamSubscription<S,T> extends _BufferingStreamSubscription<T> {
    _transformerSink : EventSink<S>;

    _subscription : StreamSubscription<S>;

    constructor(source : Stream<S>,mapper : <S,T>(output : EventSink<T>) => EventSink<S>,onData : <S,T>(data : T) => void,onError : Function,onDone : <S,T>() => void,cancelOnError : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SinkTransformerStreamSubscription(source : Stream<S>,mapper : <S,T>(output : EventSink<T>) => EventSink<S>,onData : <S,T>(data : T) => void,onError : Function,onDone : <S,T>() => void,cancelOnError : boolean) {
        super._BufferingStreamSubscription(onData,onError,onDone,cancelOnError);
        let eventSink : _EventSinkWrapper<T> = new _EventSinkWrapper<T>(this);
        this._transformerSink = mapper(eventSink);
        this._subscription = source.listen(this._handleData.bind(this),{
            onError : this._handleError.bind(this),onDone : this._handleDone.bind(this)});
    }
    get _isSubscribed() : boolean {
        return this._subscription != null;
    }
    _add(data : T) : void {
        if (this._isClosed) {
            throw new core.StateError("Stream is already closed");
        }
        super._add(data);
    }
    _addError(error : core.DartObject,stackTrace : core.DartStackTrace) : void {
        if (this._isClosed) {
            throw new core.StateError("Stream is already closed");
        }
        super._addError(error,stackTrace);
    }
    _close() : void {
        if (this._isClosed) {
            throw new core.StateError("Stream is already closed");
        }
        super._close();
    }
    _onPause() : void {
        if (this._isSubscribed) this._subscription.pause();
    }
    _onResume() : void {
        if (this._isSubscribed) this._subscription.resume();
    }
    _onCancel() : Future<any> {
        if (this._isSubscribed) {
            let subscription : StreamSubscription<any> = this._subscription;
            this._subscription = null;
            return subscription.cancel();
        }
        return null;
    }
    _handleData(data : S) : void {
        try {
            this._transformerSink.add(data);
        } catch (__error__) {

            {
                let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                this._addError(e,s);
            }
        }
    }
    _handleError(error : any,stackTrace? : any) : void {
        try {
            this._transformerSink.addError(error,stackTrace);
        } catch (__error__) {

            {
                let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                if (core.identical(e,error)) {
                    this._addError(error,stackTrace);
                }else {
                    this._addError(e,s);
                }
            }
        }
    }
    _handleDone() : void {
        try {
            this._subscription = null;
            this._transformerSink.close();
        } catch (__error__) {

            {
                let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                this._addError(e,s);
            }
        }
    }
}

export namespace _ForwardingStreamSubscription {
    export type Constructors = _BufferingStreamSubscription.Constructors | '_ForwardingStreamSubscription';
    export type Interface<S,T> = Omit<_ForwardingStreamSubscription<S,T>, Constructors>;
}
@DartClass
export class _ForwardingStreamSubscription<S,T> extends _BufferingStreamSubscription<T> {
    _stream : _ForwardingStream<S,T>;

    _subscription : StreamSubscription<S>;

    constructor(_stream : _ForwardingStream<S,T>,onData : <S,T>(data : T) => void,onError : Function,onDone : <S,T>() => void,cancelOnError : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ForwardingStreamSubscription(_stream : _ForwardingStream<S,T>,onData : <S,T>(data : T) => void,onError : Function,onDone : <S,T>() => void,cancelOnError : boolean) {
        super._BufferingStreamSubscription(onData,onError,onDone,cancelOnError);
        this._stream = _stream;
        this._subscription = this._stream._source.listen(this._handleData.bind(this),{
            onError : this._handleError.bind(this),onDone : this._handleDone.bind(this)});
    }
    _add(data : T) : void {
        if (this._isClosed) return;
        super._add(data);
    }
    _addError(error : core.DartObject,stackTrace : core.DartStackTrace) : void {
        if (this._isClosed) return;
        super._addError(error,stackTrace);
    }
    _onPause() : void {
        if (op(Op.EQUALS,this._subscription,null)) return;
        this._subscription.pause();
    }
    _onResume() : void {
        if (op(Op.EQUALS,this._subscription,null)) return;
        this._subscription.resume();
    }
    _onCancel() : Future<any> {
        if (this._subscription != null) {
            let subscription : StreamSubscription<any> = this._subscription;
            this._subscription = null;
            return subscription.cancel();
        }
        return null;
    }
    _handleData(data : S) : void {
        this._stream._handleData(data,this);
    }
    _handleError(error : any,stackTrace : core.DartStackTrace) : void {
        this._stream._handleError(error,stackTrace,this);
    }
    _handleDone() : void {
        this._stream._handleDone(this);
    }
}

export namespace _BoundSinkStream {
    export type Constructors = Stream.Constructors | '_BoundSinkStream';
    export type Interface<S,T> = Omit<_BoundSinkStream<S,T>, Constructors>;
}
@DartClass
export class _BoundSinkStream<S,T> extends Stream<T> {
    _sinkMapper : <S,T>(output : EventSink<T>) => EventSink<S>;

    _stream : Stream<S>;

    get isBroadcast() : boolean {
        return this._stream.isBroadcast;
    }
    constructor(_stream : Stream<S>,_sinkMapper : <S,T>(output : EventSink<T>) => EventSink<S>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _BoundSinkStream(_stream : Stream<S>,_sinkMapper : <S,T>(output : EventSink<T>) => EventSink<S>) {
        this._stream = _stream;
        this._sinkMapper = _sinkMapper;
    }
    listen(onData : <S,T>(event : T) => void,_namedArguments? : {onError? : Function,onDone? : <S,T>() => void,cancelOnError? : boolean}) : StreamSubscription<T> {
        let {onError,onDone,cancelOnError} = Object.assign({
        }, _namedArguments );
        cancelOnError = core.identical(true,cancelOnError);
        let subscription : StreamSubscription<T> = new _SinkTransformerStreamSubscription<S,T>(this._stream,this._sinkMapper,onData,onError,onDone,cancelOnError);
        return subscription;
    }
}

export namespace _ForwardingStream {
    export type Constructors = Stream.Constructors | '_ForwardingStream';
    export type Interface<S,T> = Omit<_ForwardingStream<S,T>, Constructors>;
}
@DartClass
export class _ForwardingStream<S,T> extends Stream<T> {
    _source : Stream<S>;

    constructor(_source : Stream<S>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ForwardingStream(_source : Stream<S>) {
        this._source = _source;
    }
    get isBroadcast() : boolean {
        return this._source.isBroadcast;
    }
    listen(onData : <S,T>(value : T) => void,_namedArguments? : {onError? : Function,onDone? : <S,T>() => void,cancelOnError? : boolean}) : StreamSubscription<T> {
        let {onError,onDone,cancelOnError} = Object.assign({
        }, _namedArguments );
        cancelOnError = core.identical(true,cancelOnError);
        return this._createSubscription(onData,onError,onDone,cancelOnError);
    }
    _createSubscription(onData : <S,T>(data : T) => void,onError : Function,onDone : <S,T>() => void,cancelOnError : boolean) : StreamSubscription<T> {
        return new _ForwardingStreamSubscription<S,T>(this,onData,onError,onDone,cancelOnError);
    }
    _handleData(data : S,sink : _EventSink<T>) : void {
        sink._add(data as core.DartObject);
    }
    _handleError(error : any,stackTrace : core.DartStackTrace,sink : _EventSink<T>) : void {
        sink._addError(error,stackTrace);
    }
    _handleDone(sink : _EventSink<T>) : void {
        sink._close();
    }
}

export namespace _StreamHandlerTransformer {
    export type Constructors = _StreamSinkTransformer.Constructors | '_StreamHandlerTransformer';
    export type Interface<S,T> = Omit<_StreamHandlerTransformer<S,T>, Constructors>;
}
@DartClass
export class _StreamHandlerTransformer<S,T> extends _StreamSinkTransformer<S,T> {
    constructor(_namedArguments? : {handleData? : <S,T>(data : S,sink : EventSink<T>) => void,handleError? : <S,T>(error : core.DartObject,stackTrace : core.DartStackTrace,sink : EventSink<T>) => void,handleDone? : <S,T>(sink : EventSink<T>) => void}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _StreamHandlerTransformer(_namedArguments? : {handleData? : <S,T>(data : S,sink : EventSink<T>) => void,handleError? : <S,T>(error : core.DartObject,stackTrace : core.DartStackTrace,sink : EventSink<T>) => void,handleDone? : <S,T>(sink : EventSink<T>) => void}) {
        let {handleData,handleError,handleDone} = Object.assign({
        }, _namedArguments );
        super._StreamSinkTransformer((outputSink : EventSink<T>) =>  {
            return new _HandlerEventSink<S,T>(handleData,handleError,handleDone,outputSink);
        });
    }
    bind(stream : Stream<S>) : Stream<T> {
        return super.bind(stream);
    }
}

export namespace _EmptyStream {
    export type Constructors = Stream.Constructors | '_EmptyStream';
    export type Interface<T> = Omit<_EmptyStream<T>, Constructors>;
}
@DartClass
export class _EmptyStream<T> extends Stream<T> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _EmptyStream() {
        super._internal();
    }
    get isBroadcast() : boolean {
        return true;
    }
    listen(onData : <T>(data : T) => void,_namedArguments? : {onError? : Function,onDone? : <T>() => void,cancelOnError? : boolean}) : StreamSubscription<T> {
        let {onError,onDone,cancelOnError} = Object.assign({
        }, _namedArguments );
        return new _DoneStreamSubscription<T>(onDone);
    }
}

export namespace _BoundSubscriptionStream {
    export type Constructors = Stream.Constructors | '_BoundSubscriptionStream';
    export type Interface<S,T> = Omit<_BoundSubscriptionStream<S,T>, Constructors>;
}
@DartClass
export class _BoundSubscriptionStream<S,T> extends Stream<T> {
    _onListen : <S,T>(stream : Stream<S>,cancelOnError : boolean) => StreamSubscription<T>;

    _stream : Stream<S>;

    constructor(_stream : Stream<S>,_onListen : <S,T>(stream : Stream<S>,cancelOnError : boolean) => StreamSubscription<T>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _BoundSubscriptionStream(_stream : Stream<S>,_onListen : <S,T>(stream : Stream<S>,cancelOnError : boolean) => StreamSubscription<T>) {
        this._stream = _stream;
        this._onListen = _onListen;
    }
    listen(onData : <S,T>(event : T) => void,_namedArguments? : {onError? : Function,onDone? : <S,T>() => void,cancelOnError? : boolean}) : StreamSubscription<T> {
        let {onError,onDone,cancelOnError} = Object.assign({
        }, _namedArguments );
        cancelOnError = core.identical(true,cancelOnError);
        let result : StreamSubscription<T> = this._onListen(this._stream,cancelOnError);
        result.onData(onData);
        result.onError(onError);
        result.onDone(onDone);
        return result;
    }
}

export namespace _AsBroadcastStream {
    export type Constructors = Stream.Constructors | '_AsBroadcastStream';
    export type Interface<T> = Omit<_AsBroadcastStream<T>, Constructors>;
}
@DartClass
export class _AsBroadcastStream<T> extends Stream<T> {
    _source : Stream<T>;

    _onListenHandler : <T>(subscription : StreamSubscription<T>) => void;

    _onCancelHandler : <T>(subscription : StreamSubscription<T>) => void;

    _zone : Zone;

    _controller : _AsBroadcastStreamController<T>;

    _subscription : StreamSubscription<T>;

    constructor(_source : Stream<T>,onListenHandler : <T>(subscription : StreamSubscription<T>) => void,onCancelHandler : <T>(subscription : StreamSubscription<T>) => void) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AsBroadcastStream(_source : Stream<T>,onListenHandler : <T>(subscription : StreamSubscription<T>) => void,onCancelHandler : <T>(subscription : StreamSubscription<T>) => void) {
        this._onListenHandler = Zone.current.registerUnaryCallback(onListenHandler);
        this._onCancelHandler = Zone.current.registerUnaryCallback(onCancelHandler);
        this._zone = Zone.current;
        this._source = _source;
        this._controller = new _AsBroadcastStreamController<T>(this._onListen.bind(this),this._onCancel.bind(this));
    }
    get isBroadcast() : boolean {
        return true;
    }
    listen(onData : <T>(data : T) => void,_namedArguments? : {onError? : Function,onDone? : <T>() => void,cancelOnError? : boolean}) : StreamSubscription<T> {
        let {onError,onDone,cancelOnError} = Object.assign({
        }, _namedArguments );
        if (op(Op.EQUALS,this._controller,null) || this._controller.isClosed) {
            return new _DoneStreamSubscription<T>(onDone);
        }
        if (op(Op.EQUALS,this._subscription,null)) {
            this._subscription = this._source.listen(this._controller.add.bind(this._controller),{
                onError : this._controller.addError.bind(this._controller),onDone : this._controller.close.bind(this._controller)});
        }
        cancelOnError = core.identical(true,cancelOnError);
        return this._controller._subscribe(onData,onError,onDone,cancelOnError);
    }
    _onCancel() : void {
        let shutdown : boolean = (op(Op.EQUALS,this._controller,null)) || this._controller.isClosed;
        if (this._onCancelHandler != null) {
            this._zone.runUnary(this._onCancelHandler,new _BroadcastSubscriptionWrapper<T>(this));
        }
        if (shutdown) {
            if (this._subscription != null) {
                this._subscription.cancel();
                this._subscription = null;
            }
        }
    }
    _onListen() : void {
        if (this._onListenHandler != null) {
            this._zone.runUnary(this._onListenHandler,new _BroadcastSubscriptionWrapper<T>(this));
        }
    }
    _cancelSubscription() : void {
        if (op(Op.EQUALS,this._subscription,null)) return;
        let subscription : StreamSubscription<any> = this._subscription;
        this._subscription = null;
        this._controller = null;
        subscription.cancel();
    }
    _pauseSubscription(resumeSignal : Future<any>) : void {
        if (op(Op.EQUALS,this._subscription,null)) return;
        this._subscription.pause(resumeSignal);
    }
    _resumeSubscription() : void {
        if (op(Op.EQUALS,this._subscription,null)) return;
        this._subscription.resume();
    }
    get _isSubscriptionPaused() : boolean {
        if (op(Op.EQUALS,this._subscription,null)) return false;
        return this._subscription.isPaused;
    }
}

export namespace StreamView {
    export type Constructors = Stream.Constructors | 'StreamView';
    export type Interface<T> = Omit<StreamView<T>, Constructors>;
}
@DartClass
export class StreamView<T> extends Stream<T> {
    _stream : Stream<T>;

    constructor(stream : Stream<T>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StreamView(stream : Stream<T>) {
        this._stream = stream;
        super._internal();
    }
    get isBroadcast() : boolean {
        return this._stream.isBroadcast;
    }
    asBroadcastStream(_namedArguments? : {onListen? : <T>(subscription : StreamSubscription<T>) => void,onCancel? : <T>(subscription : StreamSubscription<T>) => void}) : Stream<T> {
        let {onListen,onCancel} = Object.assign({
        }, _namedArguments );
        return this._stream.asBroadcastStream({
            onListen : onListen,onCancel : onCancel});
    }
    listen(onData : <T>(value : T) => void,_namedArguments? : {onError? : Function,onDone? : <T>() => void,cancelOnError? : boolean}) : StreamSubscription<T> {
        let {onError,onDone,cancelOnError} = Object.assign({
        }, _namedArguments );
        return this._stream.listen(onData,{
            onError : onError,onDone : onDone,cancelOnError : cancelOnError});
    }
}

export namespace _StreamImplEvents {
    export type Constructors = _PendingEvents.Constructors | '_StreamImplEvents';
    export type Interface<T> = Omit<_StreamImplEvents<T>, Constructors>;
}
@DartClass
export class _StreamImplEvents<T> extends _PendingEvents<T> {
    firstPendingEvent : _DelayedEvent<any>;

    lastPendingEvent : _DelayedEvent<any>;

    get isEmpty() : boolean {
        return op(Op.EQUALS,this.lastPendingEvent,null);
    }
    add(event : _DelayedEvent<any>) : void {
        if (op(Op.EQUALS,this.lastPendingEvent,null)) {
            this.firstPendingEvent = this.lastPendingEvent = event;
        }else {
            this.lastPendingEvent = this.lastPendingEvent.next = event;
        }
    }
    handleNext(dispatch : _EventDispatch<T>) : void {
        /* TODO (AssertStatementImpl) : assert (!isScheduled); */;
        let event : _DelayedEvent<any> = this.firstPendingEvent;
        this.firstPendingEvent = event.next;
        if (op(Op.EQUALS,this.firstPendingEvent,null)) {
            this.lastPendingEvent = null;
        }
        event.perform(dispatch);
    }
    clear() : void {
        if (this.isScheduled) this.cancelSchedule();
        this.firstPendingEvent = this.lastPendingEvent = null;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _StreamImplEvents() {
        this.firstPendingEvent = null;
        this.lastPendingEvent = null;
    }
}

export namespace _DelayedError {
    export type Constructors = _DelayedEvent.Constructors | '_DelayedError';
    export type Interface = Omit<_DelayedError, Constructors>;
}
@DartClass
export class _DelayedError extends _DelayedEvent<any> {
    error;

    stackTrace : core.DartStackTrace;

    constructor(error : any,stackTrace : core.DartStackTrace) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DelayedError(error : any,stackTrace : core.DartStackTrace) {
        this.error = error;
        this.stackTrace = stackTrace;
    }
    perform(dispatch : _EventDispatch<any>) : void {
        dispatch._sendError(this.error,this.stackTrace);
    }
}

export namespace _RootZone {
    export type Constructors = _Zone.Constructors | '_RootZone';
    export type Interface = Omit<_RootZone, Constructors>;
}
@DartClass
export class _RootZone extends _Zone {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RootZone() {
    }
    get _run() : _ZoneFunction<<R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => any> {
        return new _ZoneFunction<<R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => any>(properties._ROOT_ZONE,_rootRun);
    }
    get _runUnary() : _ZoneFunction<<R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any,arg : any) => any> {
        return new _ZoneFunction<<R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any,arg : any) => any>(properties._ROOT_ZONE,_rootRunUnary);
    }
    get _runBinary() : _ZoneFunction<<R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any,arg1 : any,arg2 : any) => any> {
        return new _ZoneFunction<<R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any,arg1 : any,arg2 : any) => any>(properties._ROOT_ZONE,_rootRunBinary);
    }
    get _registerCallback() : _ZoneFunction<<R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => <R>() => any> {
        return new _ZoneFunction<<R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => <R>() => any>(properties._ROOT_ZONE,_rootRegisterCallback);
    }
    get _registerUnaryCallback() : _ZoneFunction<<R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any) => <R,T>(arg : any) => any> {
        return new _ZoneFunction<<R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any) => <R,T>(arg : any) => any>(properties._ROOT_ZONE,_rootRegisterUnaryCallback);
    }
    get _registerBinaryCallback() : _ZoneFunction<<R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any) => <R,T1,T2>(arg1 : any,arg2 : any) => any> {
        return new _ZoneFunction<<R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any) => <R,T1,T2>(arg1 : any,arg2 : any) => any>(properties._ROOT_ZONE,_rootRegisterBinaryCallback);
    }
    get _errorCallback() : _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,error : core.DartObject,stackTrace : core.DartStackTrace) => AsyncError> {
        return new _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,error : core.DartObject,stackTrace : core.DartStackTrace) => AsyncError>(properties._ROOT_ZONE,_rootErrorCallback);
    }
    get _scheduleMicrotask() : _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,f : () => void) => void> {
        return new _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,f : () => void) => void>(properties._ROOT_ZONE,_rootScheduleMicrotask);
    }
    get _createTimer() : _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,duration : core.DartDuration,f : () => void) => Timer> {
        return new _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,duration : core.DartDuration,f : () => void) => Timer>(properties._ROOT_ZONE,_rootCreateTimer);
    }
    get _createPeriodicTimer() : _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,period : core.DartDuration,f : (timer : Timer) => void) => Timer> {
        return new _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,period : core.DartDuration,f : (timer : Timer) => void) => Timer>(properties._ROOT_ZONE,_rootCreatePeriodicTimer);
    }
    get _print() : _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,line : string) => void> {
        return new _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,line : string) => void>(properties._ROOT_ZONE,_rootPrint);
    }
    get _fork() : _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,specification : ZoneSpecification,zoneValues : core.DartMap<any,any>) => Zone> {
        return new _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,specification : ZoneSpecification,zoneValues : core.DartMap<any,any>) => Zone>(properties._ROOT_ZONE,_rootFork);
    }
    get _handleUncaughtError() : _ZoneFunction<<R>(self : Zone,parent : ZoneDelegate,zone : Zone,error : any,stackTrace : core.DartStackTrace) => any> {
        return new _ZoneFunction<<R>(self : Zone,parent : ZoneDelegate,zone : Zone,error : any,stackTrace : core.DartStackTrace) => any>(properties._ROOT_ZONE,_rootHandleUncaughtError);
    }
    get parent() : _Zone {
        return null;
    }
    get _map() : core.DartMap<any,any> {
        return _RootZone._rootMap;
    }
    private static __$_rootMap : core.DartMap<any,any>;
    static get _rootMap() : core.DartMap<any,any> { 
        if (this.__$_rootMap===undefined) {
            this.__$_rootMap = new core.DartHashMap<any,any>();
        }
        return this.__$_rootMap;
    }
    static set _rootMap(__$value : core.DartMap<any,any>)  { 
        this.__$_rootMap = __$value;
    }

    private static __$_rootDelegate : ZoneDelegate;
    static get _rootDelegate() : ZoneDelegate { 
        return this.__$_rootDelegate;
    }
    static set _rootDelegate(__$value : ZoneDelegate)  { 
        this.__$_rootDelegate = __$value;
    }

    get _delegate() : ZoneDelegate {
        if (_RootZone._rootDelegate != null) return _RootZone._rootDelegate;
        return _RootZone._rootDelegate = new _ZoneDelegate(this);
    }
    get errorZone() : Zone {
        return this;
    }
    runGuarded<R>(f : <R>() => R) : R {
        try {
            if (core.identical(properties._ROOT_ZONE,Zone._current)) {
                return f();
            }
            return _rootRun(null,null,this,f);
        } catch (__error__) {

            {
                let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                return this.handleUncaughtError(e,s);
            }
        }
    }
    runUnaryGuarded<R,T>(f : <R,T>(arg : T) => R,arg : T) : R {
        try {
            if (core.identical(properties._ROOT_ZONE,Zone._current)) {
                return f(arg);
            }
            return _rootRunUnary(null,null,this,f,arg);
        } catch (__error__) {

            {
                let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                return this.handleUncaughtError(e,s);
            }
        }
    }
    runBinaryGuarded<R,T1,T2>(f : <R,T1,T2>(arg1 : T1,arg2 : T2) => R,arg1 : T1,arg2 : T2) : R {
        try {
            if (core.identical(properties._ROOT_ZONE,Zone._current)) {
                return f(arg1,arg2);
            }
            return _rootRunBinary(null,null,this,f,arg1,arg2);
        } catch (__error__) {

            {
                let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                return this.handleUncaughtError(e,s);
            }
        }
    }
    bindCallback<R>(f : <R>() => R,_namedArguments? : {runGuarded? : boolean}) : <R>() => R {
        let {runGuarded} = Object.assign({
            "runGuarded" : true}, _namedArguments );
        if (runGuarded) {
            return () =>  {
                return this.runGuarded(f);
            };
        }else {
            return () =>  {
                return this.run(f);
            };
        }
    }
    bindUnaryCallback<R,T>(f : <R,T>(arg : T) => R,_namedArguments? : {runGuarded? : boolean}) : <R,T>(arg : T) => R {
        let {runGuarded} = Object.assign({
            "runGuarded" : true}, _namedArguments );
        if (runGuarded) {
            return (arg : any) =>  {
                return this.runUnaryGuarded(f,arg);
            };
        }else {
            return (arg : any) =>  {
                return this.runUnary(f,arg);
            };
        }
    }
    bindBinaryCallback<R,T1,T2>(f : <R,T1,T2>(arg1 : T1,arg2 : T2) => R,_namedArguments? : {runGuarded? : boolean}) : <R,T1,T2>(arg1 : T1,arg2 : T2) => R {
        let {runGuarded} = Object.assign({
            "runGuarded" : true}, _namedArguments );
        if (runGuarded) {
            return (arg1 : any,arg2 : any) =>  {
                return this.runBinaryGuarded(f,arg1,arg2);
            };
        }else {
            return (arg1 : any,arg2 : any) =>  {
                return this.runBinary(f,arg1,arg2);
            };
        }
    }
    [OperatorMethods.INDEX](key : core.DartObject) {
        return null;
    }
    handleUncaughtError<R>(error : any,stackTrace : core.DartStackTrace) : R {
        return _rootHandleUncaughtError(null,null,this,error,stackTrace);
    }
    fork(_namedArguments? : {specification? : ZoneSpecification,zoneValues? : core.DartMap<any,any>}) : Zone {
        let {specification,zoneValues} = Object.assign({
        }, _namedArguments );
        return _rootFork(null,null,this,specification,zoneValues);
    }
    run<R>(f : <R>() => R) : R {
        if (core.identical(Zone._current,properties._ROOT_ZONE)) return f();
        return _rootRun(null,null,this,f);
    }
    runUnary<R,T>(f : <R,T>(arg : T) => R,arg : T) : R {
        if (core.identical(Zone._current,properties._ROOT_ZONE)) return f(arg);
        return _rootRunUnary(null,null,this,f,arg);
    }
    runBinary<R,T1,T2>(f : <R,T1,T2>(arg1 : T1,arg2 : T2) => R,arg1 : T1,arg2 : T2) : R {
        if (core.identical(Zone._current,properties._ROOT_ZONE)) return f(arg1,arg2);
        return _rootRunBinary(null,null,this,f,arg1,arg2);
    }
    registerCallback<R>(f : <R>() => R) : <R>() => R {
        return f;
    }
    registerUnaryCallback<R,T>(f : <R,T>(arg : T) => R) : <R,T>(arg : T) => R {
        return f;
    }
    registerBinaryCallback<R,T1,T2>(f : <R,T1,T2>(arg1 : T1,arg2 : T2) => R) : <R,T1,T2>(arg1 : T1,arg2 : T2) => R {
        return f;
    }
    errorCallback(error : core.DartObject,stackTrace : core.DartStackTrace) : AsyncError {
        return null;
    }
    scheduleMicrotask(f : () => void) : void {
        _rootScheduleMicrotask(null,null,this,f);
    }
    createTimer(duration : core.DartDuration,f : () => void) : Timer {
        return Timer._createTimer(duration,f);
    }
    createPeriodicTimer(duration : core.DartDuration,f : (timer : Timer) => void) : Timer {
        return Timer._createPeriodicTimer(duration,f);
    }
    print(line : string) : void {
        _internal.printToConsole(line);
    }
}

export namespace _IterablePendingEvents {
    export type Constructors = _PendingEvents.Constructors | '_IterablePendingEvents';
    export type Interface<T> = Omit<_IterablePendingEvents<T>, Constructors>;
}
@DartClass
export class _IterablePendingEvents<T> extends _PendingEvents<T> {
    _iterator : core.DartIterator<T>;

    constructor(data : core.DartIterable<T>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _IterablePendingEvents(data : core.DartIterable<T>) {
        this._iterator = data.iterator;
    }
    get isEmpty() : boolean {
        return this._iterator == null;
    }
    handleNext(dispatch : _EventDispatch<T>) : void {
        if (this._iterator == null) {
            throw new core.StateError("No events pending.");
        }
        let isDone : boolean;
        try {
            isDone = !this._iterator.moveNext();
        } catch (__error__) {

            {
                let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                this._iterator = null;
                dispatch._sendError(e,s);
                return;
            }
        }
        if (!isDone) {
            dispatch._sendData(this._iterator.current);
        }else {
            this._iterator = null;
            dispatch._sendDone();
        }
    }
    clear() : void {
        if (this.isScheduled) this.cancelSchedule();
        this._iterator = null;
    }
}

export namespace _StreamImpl {
    export type Constructors = Stream.Constructors | '_StreamImpl';
    export type Interface<T> = Omit<_StreamImpl<T>, Constructors>;
}
@DartClass
export class _StreamImpl<T> extends Stream<T> {
    listen(onData : <T>(data : T) => void,_namedArguments? : {onError? : Function,onDone? : <T>() => void,cancelOnError? : boolean}) : StreamSubscription<T> {
        let {onError,onDone,cancelOnError} = Object.assign({
        }, _namedArguments );
        cancelOnError = core.identical(true,cancelOnError);
        let subscription : StreamSubscription<T> = this._createSubscription(onData,onError,onDone,cancelOnError);
        this._onListen(subscription);
        return subscription;
    }
    _createSubscription(onData : <T>(data : T) => void,onError : Function,onDone : <T>() => void,cancelOnError : boolean) : StreamSubscription<T> {
        return new _BufferingStreamSubscription<T>(onData,onError,onDone,cancelOnError);
    }
    _onListen(subscription : StreamSubscription<any>) : void {
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _StreamImpl() {
    }
}

export namespace _StreamControllerAddStreamState {
    export type Constructors = _AddStreamState.Constructors | '_StreamControllerAddStreamState';
    export type Interface<T> = Omit<_StreamControllerAddStreamState<T>, Constructors>;
}
@DartClass
export class _StreamControllerAddStreamState<T> extends _AddStreamState<T> {
    varData;

    constructor(controller : _StreamController<T>,varData : any,source : Stream<any>,cancelOnError : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _StreamControllerAddStreamState(controller : _StreamController<T>,varData : any,source : Stream<any>,cancelOnError : boolean) {
        super._AddStreamState(controller,source,cancelOnError);
        this.varData = varData;
        if (controller.isPaused) {
            this.addSubscription.pause();
        }
    }
}

export namespace _ControllerSubscription {
    export type Constructors = _BufferingStreamSubscription.Constructors | '_ControllerSubscription';
    export type Interface<T> = Omit<_ControllerSubscription<T>, Constructors>;
}
@DartClass
export class _ControllerSubscription<T> extends _BufferingStreamSubscription<T> {
    _controller : _StreamControllerLifecycle<T>;

    constructor(_controller : _StreamControllerLifecycle<T>,onData : <T>(data : T) => void,onError : Function,onDone : <T>() => void,cancelOnError : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ControllerSubscription(_controller : _StreamControllerLifecycle<T>,onData : <T>(data : T) => void,onError : Function,onDone : <T>() => void,cancelOnError : boolean) {
        super._BufferingStreamSubscription(onData,onError,onDone,cancelOnError);
        this._controller = _controller;
    }
    _onCancel() : Future<any> {
        return this._controller._recordCancel(this);
    }
    _onPause() : void {
        this._controller._recordPause(this);
    }
    _onResume() : void {
        this._controller._recordResume(this);
    }
}

export namespace _SyncCompleter {
    export type Constructors = _Completer.Constructors | '_SyncCompleter';
    export type Interface<T> = Omit<_SyncCompleter<T>, Constructors>;
}
@DartClass
export class _SyncCompleter<T> extends _Completer<T> {
    complete(value? : any) : void {
        if (!this.future._mayComplete) throw new core.StateError("Future already completed");
        this.future._complete(value);
    }
    _completeError(error : core.DartObject,stackTrace : core.DartStackTrace) : void {
        this.future._completeError(error,stackTrace);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SyncCompleter() {
    }
}

export namespace _CustomZone {
    export type Constructors = _Zone.Constructors | '_CustomZone';
    export type Interface = Omit<_CustomZone, Constructors>;
}
@DartClass
export class _CustomZone extends _Zone {
    _run : _ZoneFunction<<R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => any>;

    _runUnary : _ZoneFunction<<R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any,arg : any) => any>;

    _runBinary : _ZoneFunction<<R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any,arg1 : any,arg2 : any) => any>;

    _registerCallback : _ZoneFunction<<R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => <R>() => any>;

    _registerUnaryCallback : _ZoneFunction<<R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any) => <R,T>(arg : any) => any>;

    _registerBinaryCallback : _ZoneFunction<<R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any) => <R,T1,T2>(arg1 : any,arg2 : any) => any>;

    _errorCallback : _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,error : core.DartObject,stackTrace : core.DartStackTrace) => AsyncError>;

    _scheduleMicrotask : _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,f : () => void) => void>;

    _createTimer : _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,duration : core.DartDuration,f : () => void) => Timer>;

    _createPeriodicTimer : _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,period : core.DartDuration,f : (timer : Timer) => void) => Timer>;

    _print : _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,line : string) => void>;

    _fork : _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,specification : ZoneSpecification,zoneValues : core.DartMap<any,any>) => Zone>;

    _handleUncaughtError : _ZoneFunction<<R>(self : Zone,parent : ZoneDelegate,zone : Zone,error : any,stackTrace : core.DartStackTrace) => any>;

    _delegateCache : ZoneDelegate;

    parent : _Zone;

    _map : core.DartMap<any,any>;

    get _delegate() : ZoneDelegate {
        if (this._delegateCache != null) return this._delegateCache;
        this._delegateCache = new _ZoneDelegate(this);
        return this._delegateCache;
    }
    constructor(parent : _Zone,specification : ZoneSpecification,_map : core.DartMap<any,any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CustomZone(parent : _Zone,specification : ZoneSpecification,_map : core.DartMap<any,any>) {
        this.parent = parent;
        this._map = _map;
        this._run = (specification.run != null) ? new _ZoneFunction<<R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => any>(this,specification.run) : this.parent._run;
        this._runUnary = (specification.runUnary != null) ? new _ZoneFunction<<R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any,arg : any) => any>(this,specification.runUnary) : this.parent._runUnary;
        this._runBinary = (specification.runBinary != null) ? new _ZoneFunction<<R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any,arg1 : any,arg2 : any) => any>(this,specification.runBinary) : this.parent._runBinary;
        this._registerCallback = (specification.registerCallback != null) ? new _ZoneFunction<<R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => <R>() => any>(this,specification.registerCallback) : this.parent._registerCallback;
        this._registerUnaryCallback = (specification.registerUnaryCallback != null) ? new _ZoneFunction<<R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any) => <R,T>(arg : any) => any>(this,specification.registerUnaryCallback) : this.parent._registerUnaryCallback;
        this._registerBinaryCallback = (specification.registerBinaryCallback != null) ? new _ZoneFunction<<R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any) => <R,T1,T2>(arg1 : any,arg2 : any) => any>(this,specification.registerBinaryCallback) : this.parent._registerBinaryCallback;
        this._errorCallback = (specification.errorCallback != null) ? new _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,error : core.DartObject,stackTrace : core.DartStackTrace) => AsyncError>(this,specification.errorCallback) : this.parent._errorCallback;
        this._scheduleMicrotask = (specification.scheduleMicrotask != null) ? new _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,f : () => void) => void>(this,specification.scheduleMicrotask) : this.parent._scheduleMicrotask;
        this._createTimer = (specification.createTimer != null) ? new _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,duration : core.DartDuration,f : () => void) => Timer>(this,specification.createTimer) : this.parent._createTimer;
        this._createPeriodicTimer = (specification.createPeriodicTimer != null) ? new _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,period : core.DartDuration,f : (timer : Timer) => void) => Timer>(this,specification.createPeriodicTimer) : this.parent._createPeriodicTimer;
        this._print = (specification.print != null) ? new _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,line : string) => void>(this,specification.print) : this.parent._print;
        this._fork = (specification.fork != null) ? new _ZoneFunction<(self : Zone,parent : ZoneDelegate,zone : Zone,specification : ZoneSpecification,zoneValues : core.DartMap<any,any>) => Zone>(this,specification.fork) : this.parent._fork;
        this._handleUncaughtError = (specification.handleUncaughtError != null) ? new _ZoneFunction<<R>(self : Zone,parent : ZoneDelegate,zone : Zone,error : any,stackTrace : core.DartStackTrace) => any>(this,specification.handleUncaughtError) : this.parent._handleUncaughtError;
    }
    get errorZone() : Zone {
        return this._handleUncaughtError.zone;
    }
    runGuarded<R>(f : <R>() => R) : R {
        try {
            return this.run(f);
        } catch (__error__) {

            {
                let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                return this.handleUncaughtError(e,s);
            }
        }
    }
    runUnaryGuarded<R,T>(f : <R,T>(arg : T) => R,arg : T) : R {
        try {
            return this.runUnary(f,arg);
        } catch (__error__) {

            {
                let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                return this.handleUncaughtError(e,s);
            }
        }
    }
    runBinaryGuarded<R,T1,T2>(f : <R,T1,T2>(arg1 : T1,arg2 : T2) => R,arg1 : T1,arg2 : T2) : R {
        try {
            return this.runBinary(f,arg1,arg2);
        } catch (__error__) {

            {
                let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                return this.handleUncaughtError(e,s);
            }
        }
    }
    bindCallback<R>(f : <R>() => R,_namedArguments? : {runGuarded? : boolean}) : <R>() => R {
        let {runGuarded} = Object.assign({
            "runGuarded" : true}, _namedArguments );
        let registered = this.registerCallback(f);
        if (runGuarded) {
            return () =>  {
                return this.runGuarded(registered);
            };
        }else {
            return () =>  {
                return this.run(registered);
            };
        }
    }
    bindUnaryCallback<R,T>(f : <R,T>(arg : T) => R,_namedArguments? : {runGuarded? : boolean}) : <R,T>(arg : T) => R {
        let {runGuarded} = Object.assign({
            "runGuarded" : true}, _namedArguments );
        let registered = this.registerUnaryCallback(f);
        if (runGuarded) {
            return (arg : any) =>  {
                return this.runUnaryGuarded(registered,arg);
            };
        }else {
            return (arg : any) =>  {
                return this.runUnary(registered,arg);
            };
        }
    }
    bindBinaryCallback<R,T1,T2>(f : <R,T1,T2>(arg1 : T1,arg2 : T2) => R,_namedArguments? : {runGuarded? : boolean}) : <R,T1,T2>(arg1 : T1,arg2 : T2) => R {
        let {runGuarded} = Object.assign({
            "runGuarded" : true}, _namedArguments );
        let registered = this.registerBinaryCallback(f);
        if (runGuarded) {
            return (arg1 : any,arg2 : any) =>  {
                return this.runBinaryGuarded(registered,arg1,arg2);
            };
        }else {
            return (arg1 : any,arg2 : any) =>  {
                return this.runBinary(registered,arg1,arg2);
            };
        }
    }
    [OperatorMethods.INDEX](key : core.DartObject) {
        let result = this._map.get(key);
        if (result != null || this._map.containsKey(key)) return result;
        if (this.parent != null) {
            let value = op(Op.INDEX,this.parent,key);
            if (value != null) {
                this._map.set(key,value);
            }
            return value;
        }
        /* TODO (AssertStatementImpl) : assert (this == _ROOT_ZONE); */;
        return null;
    }
    handleUncaughtError<R>(error : any,stackTrace : core.DartStackTrace) : R {
        let implementation = this._handleUncaughtError;
        /* TODO (AssertStatementImpl) : assert (implementation != null); */;
        let parentDelegate : ZoneDelegate = _parentDelegate(implementation.zone);
        let handler : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,error : any,stackTrace : core.DartStackTrace) => any = implementation.function;
        return handler(implementation.zone,parentDelegate,this,error,stackTrace) as core.DartObject;
    }
    fork(_namedArguments? : {specification? : ZoneSpecification,zoneValues? : core.DartMap<any,any>}) : Zone {
        let {specification,zoneValues} = Object.assign({
        }, _namedArguments );
        let implementation = this._fork;
        /* TODO (AssertStatementImpl) : assert (implementation != null); */;
        let parentDelegate : ZoneDelegate = _parentDelegate(implementation.zone);
        let handler : (self : Zone,parent : ZoneDelegate,zone : Zone,specification : ZoneSpecification,zoneValues : core.DartMap<any,any>) => Zone = implementation.function;
        return handler(implementation.zone,parentDelegate,this,specification,zoneValues);
    }
    run<R>(f : <R>() => R) : R {
        let implementation = this._run;
        /* TODO (AssertStatementImpl) : assert (implementation != null); */;
        let parentDelegate : ZoneDelegate = _parentDelegate(implementation.zone);
        let handler : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => any = implementation.function;
        return handler(implementation.zone,parentDelegate,this,f) as core.DartObject;
    }
    runUnary<R,T>(f : <R,T>(arg : T) => R,arg : T) : R {
        let implementation = this._runUnary;
        /* TODO (AssertStatementImpl) : assert (implementation != null); */;
        let parentDelegate : ZoneDelegate = _parentDelegate(implementation.zone);
        let handler : <R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any,arg : any) => any = implementation.function;
        return handler(implementation.zone,parentDelegate,this,f,arg) as core.DartObject;
    }
    runBinary<R,T1,T2>(f : <R,T1,T2>(arg1 : T1,arg2 : T2) => R,arg1 : T1,arg2 : T2) : R {
        let implementation = this._runBinary;
        /* TODO (AssertStatementImpl) : assert (implementation != null); */;
        let parentDelegate : ZoneDelegate = _parentDelegate(implementation.zone);
        let handler : <R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any,arg1 : any,arg2 : any) => any = implementation.function;
        return handler(implementation.zone,parentDelegate,this,f,arg1,arg2) as core.DartObject;
    }
    registerCallback<R>(callback : <R>() => R) : <R>() => R {
        let implementation = this._registerCallback;
        /* TODO (AssertStatementImpl) : assert (implementation != null); */;
        let parentDelegate : ZoneDelegate = _parentDelegate(implementation.zone);
        let handler : <R>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R>() => any) => <R>() => any = implementation.function;
        return handler(implementation.zone,parentDelegate,this,callback) as core.DartObject;
    }
    registerUnaryCallback<R,T>(callback : <R,T>(arg : T) => R) : <R,T>(arg : T) => R {
        let implementation = this._registerUnaryCallback;
        /* TODO (AssertStatementImpl) : assert (implementation != null); */;
        let parentDelegate : ZoneDelegate = _parentDelegate(implementation.zone);
        let handler : <R,T>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T>(arg : any) => any) => <R,T>(arg : any) => any = implementation.function;
        return handler(implementation.zone,parentDelegate,this,callback) as core.DartObject;
    }
    registerBinaryCallback<R,T1,T2>(callback : <R,T1,T2>(arg1 : T1,arg2 : T2) => R) : <R,T1,T2>(arg1 : T1,arg2 : T2) => R {
        let implementation = this._registerBinaryCallback;
        /* TODO (AssertStatementImpl) : assert (implementation != null); */;
        let parentDelegate : ZoneDelegate = _parentDelegate(implementation.zone);
        let handler : <R,T1,T2>(self : Zone,parent : ZoneDelegate,zone : Zone,f : <R,T1,T2>(arg1 : any,arg2 : any) => any) => <R,T1,T2>(arg1 : any,arg2 : any) => any = implementation.function;
        return handler(implementation.zone,parentDelegate,this,callback) as core.DartObject;
    }
    errorCallback(error : core.DartObject,stackTrace : core.DartStackTrace) : AsyncError {
        let implementation = this._errorCallback;
        /* TODO (AssertStatementImpl) : assert (implementation != null); */;
        let implementationZone : Zone = implementation.zone;
        if (core.identical(implementationZone,properties._ROOT_ZONE)) return null;
        let parentDelegate : ZoneDelegate = _parentDelegate(implementationZone);
        let handler : (self : Zone,parent : ZoneDelegate,zone : Zone,error : core.DartObject,stackTrace : core.DartStackTrace) => AsyncError = implementation.function;
        return handler(implementationZone,parentDelegate,this,error,stackTrace);
    }
    scheduleMicrotask(f : () => void) : void {
        let implementation = this._scheduleMicrotask;
        /* TODO (AssertStatementImpl) : assert (implementation != null); */;
        let parentDelegate : ZoneDelegate = _parentDelegate(implementation.zone);
        let handler : (self : Zone,parent : ZoneDelegate,zone : Zone,f : () => void) => void = implementation.function;
        return handler(implementation.zone,parentDelegate,this,f);
    }
    createTimer(duration : core.DartDuration,f : () => void) : Timer {
        let implementation = this._createTimer;
        /* TODO (AssertStatementImpl) : assert (implementation != null); */;
        let parentDelegate : ZoneDelegate = _parentDelegate(implementation.zone);
        let handler : (self : Zone,parent : ZoneDelegate,zone : Zone,duration : core.DartDuration,f : () => void) => Timer = implementation.function;
        return handler(implementation.zone,parentDelegate,this,duration,f);
    }
    createPeriodicTimer(duration : core.DartDuration,f : (timer : Timer) => void) : Timer {
        let implementation = this._createPeriodicTimer;
        /* TODO (AssertStatementImpl) : assert (implementation != null); */;
        let parentDelegate : ZoneDelegate = _parentDelegate(implementation.zone);
        let handler : (self : Zone,parent : ZoneDelegate,zone : Zone,period : core.DartDuration,f : (timer : Timer) => void) => Timer = implementation.function;
        return handler(implementation.zone,parentDelegate,this,duration,f);
    }
    print(line : string) : void {
        let implementation = this._print;
        /* TODO (AssertStatementImpl) : assert (implementation != null); */;
        let parentDelegate : ZoneDelegate = _parentDelegate(implementation.zone);
        let handler : (self : Zone,parent : ZoneDelegate,zone : Zone,line : string) => void = implementation.function;
        return handler(implementation.zone,parentDelegate,this,line);
    }
}

export namespace _AsyncCompleter {
    export type Constructors = _Completer.Constructors | '_AsyncCompleter';
    export type Interface<T> = Omit<_AsyncCompleter<T>, Constructors>;
}
@DartClass
export class _AsyncCompleter<T> extends _Completer<T> {
    complete(value? : any) : void {
        if (!this.future._mayComplete) throw new core.StateError("Future already completed");
        this.future._asyncComplete(value);
    }
    _completeError(error : core.DartObject,stackTrace : core.DartStackTrace) : void {
        this.future._asyncCompleteError(error,stackTrace);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AsyncCompleter() {
    }
}

export namespace _AsyncBroadcastStreamController {
    export type Constructors = _BroadcastStreamController.Constructors | '_AsyncBroadcastStreamController';
    export type Interface<T> = Omit<_AsyncBroadcastStreamController<T>, Constructors>;
}
@DartClass
export class _AsyncBroadcastStreamController<T> extends _BroadcastStreamController<T> {
    constructor(onListen : <T>() => void,onCancel : <T>() => void) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AsyncBroadcastStreamController(onListen : <T>() => void,onCancel : <T>() => void) {
        super._BroadcastStreamController(onListen,onCancel);
    }
    _sendData(data : T) : void {
        for(let subscription : _BroadcastSubscription<T> = this._firstSubscription; subscription != null; subscription = subscription._next){
            subscription._addPending(new _DelayedData<T>(data));
        }
    }
    _sendError(error : core.DartObject,stackTrace : core.DartStackTrace) : void {
        for(let subscription : _BroadcastSubscription<T> = this._firstSubscription; subscription != null; subscription = subscription._next){
            subscription._addPending(new _DelayedError(error,stackTrace));
        }
    }
    _sendDone() : void {
        if (!this._isEmpty) {
            for(let subscription : _BroadcastSubscription<T> = this._firstSubscription; subscription != null; subscription = subscription._next){
                subscription._addPending(new _DelayedDone());
            }
        }else {
            /* TODO (AssertStatementImpl) : assert (_doneFuture != null); */;
            /* TODO (AssertStatementImpl) : assert (_doneFuture._mayComplete); */;
            this._doneFuture._asyncComplete(null);
        }
    }
}

export namespace _DelayedData {
    export type Constructors = _DelayedEvent.Constructors | '_DelayedData';
    export type Interface<T> = Omit<_DelayedData<T>, Constructors>;
}
@DartClass
export class _DelayedData<T> extends _DelayedEvent<T> {
    value : T;

    constructor(value : T) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DelayedData(value : T) {
        this.value = value;
    }
    perform(dispatch : _EventDispatch<T>) : void {
        dispatch._sendData(this.value);
    }
}

export namespace _DistinctStream {
    export type Constructors = _ForwardingStream.Constructors | '_DistinctStream';
    export type Interface<T> = Omit<_DistinctStream<T>, Constructors>;
}
@DartClass
export class _DistinctStream<T> extends _ForwardingStream<T,T> {
    private static __$_SENTINEL;
    static get _SENTINEL() { 
        if (this.__$_SENTINEL===undefined) {
            this.__$_SENTINEL = new core.DartObject();
        }
        return this.__$_SENTINEL;
    }
    static set _SENTINEL(__$value : any)  { 
        this.__$_SENTINEL = __$value;
    }

    _equals : <T>(a : T,b : T) => boolean;

    constructor(source : Stream<T>,equals : <T>(a : T,b : T) => boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DistinctStream(source : Stream<T>,equals : <T>(a : T,b : T) => boolean) {
        this._equals = equals;
        super._ForwardingStream(source);
    }
    _createSubscription(onData : <T>(data : T) => void,onError : Function,onDone : <T>() => void,cancelOnError : boolean) : StreamSubscription<T> {
        return new _StateStreamSubscription<T>(this,onData,onError,onDone,cancelOnError,_DistinctStream._SENTINEL);
    }
    _handleData(inputEvent : T,sink : _EventSink<T>) : void {
        let subscription : _StateStreamSubscription<T> = sink;
        let previous = subscription._value;
        if (core.identical(previous,_DistinctStream._SENTINEL)) {
            subscription._value = inputEvent;
            sink._add(inputEvent);
        }else {
            let previousEvent : T = previous;
            let isEqual : boolean;
            try {
                if (op(Op.EQUALS,this._equals,null)) {
                    isEqual = (op(Op.EQUALS,previousEvent,inputEvent));
                }else {
                    isEqual = this._equals(previousEvent,inputEvent);
                }
            } catch (__error__) {

                {
                    let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let e = __error__;
                    _addErrorWithReplacement(sink,e,s);
                    return;
                }
            }
            if (!isEqual) {
                sink._add(inputEvent);
                subscription._value = inputEvent;
            }
        }
    }
}

export namespace _SkipWhileStream {
    export type Constructors = _ForwardingStream.Constructors | '_SkipWhileStream';
    export type Interface<T> = Omit<_SkipWhileStream<T>, Constructors>;
}
@DartClass
export class _SkipWhileStream<T> extends _ForwardingStream<T,T> {
    _test : <T>(value : T) => boolean;

    constructor(source : Stream<T>,test : <T>(value : T) => boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SkipWhileStream(source : Stream<T>,test : <T>(value : T) => boolean) {
        this._test = test;
        super._ForwardingStream(source);
    }
    _createSubscription(onData : <T>(data : T) => void,onError : Function,onDone : <T>() => void,cancelOnError : boolean) : StreamSubscription<T> {
        return new _StateStreamSubscription<T>(this,onData,onError,onDone,cancelOnError,false);
    }
    _handleData(inputEvent : T,sink : _EventSink<T>) : void {
        let subscription : _StateStreamSubscription<T> = sink;
        let hasFailed : boolean = subscription._flag;
        if (hasFailed) {
            sink._add(inputEvent);
            return;
        }
        let satisfies : boolean;
        try {
            satisfies = this._test(inputEvent);
        } catch (__error__) {

            {
                let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                _addErrorWithReplacement(sink,e,s);
                subscription._flag = true;
                return;
            }
        }
        if (!satisfies) {
            subscription._flag = true;
            sink._add(inputEvent);
        }
    }
}

export namespace _SkipStream {
    export type Constructors = _ForwardingStream.Constructors | '_SkipStream';
    export type Interface<T> = Omit<_SkipStream<T>, Constructors>;
}
@DartClass
export class _SkipStream<T> extends _ForwardingStream<T,T> {
    _count : number;

    constructor(source : Stream<T>,count : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SkipStream(source : Stream<T>,count : number) {
        this._count = count;
        super._ForwardingStream(source);
        if (isNot(count, "number") || count < 0) throw new core.ArgumentError(count);
    }
    _createSubscription(onData : <T>(data : T) => void,onError : Function,onDone : <T>() => void,cancelOnError : boolean) : StreamSubscription<T> {
        return new _StateStreamSubscription<T>(this,onData,onError,onDone,cancelOnError,this._count);
    }
    _handleData(inputEvent : T,sink : _EventSink<T>) : void {
        let subscription : _StateStreamSubscription<T> = sink;
        let count : number = subscription._count;
        if (count > 0) {
            subscription._count = count - 1;
            return;
        }
        sink._add(inputEvent);
    }
}

export namespace _TakeWhileStream {
    export type Constructors = _ForwardingStream.Constructors | '_TakeWhileStream';
    export type Interface<T> = Omit<_TakeWhileStream<T>, Constructors>;
}
@DartClass
export class _TakeWhileStream<T> extends _ForwardingStream<T,T> {
    _test : <T>(value : T) => boolean;

    constructor(source : Stream<T>,test : <T>(value : T) => boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TakeWhileStream(source : Stream<T>,test : <T>(value : T) => boolean) {
        this._test = test;
        super._ForwardingStream(source);
    }
    _handleData(inputEvent : T,sink : _EventSink<T>) : void {
        let satisfies : boolean;
        try {
            satisfies = this._test(inputEvent);
        } catch (__error__) {

            {
                let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                _addErrorWithReplacement(sink,e,s);
                sink._close();
                return;
            }
        }
        if (satisfies) {
            sink._add(inputEvent);
        }else {
            sink._close();
        }
    }
}

export namespace _StateStreamSubscription {
    export type Constructors = _ForwardingStreamSubscription.Constructors | '_StateStreamSubscription';
    export type Interface<T> = Omit<_StateStreamSubscription<T>, Constructors>;
}
@DartClass
export class _StateStreamSubscription<T> extends _ForwardingStreamSubscription<T,T> {
    _sharedState;

    constructor(stream : _ForwardingStream<T,T>,onData : <T>(data : T) => void,onError : Function,onDone : <T>() => void,cancelOnError : boolean,_sharedState : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _StateStreamSubscription(stream : _ForwardingStream<T,T>,onData : <T>(data : T) => void,onError : Function,onDone : <T>() => void,cancelOnError : boolean,_sharedState : any) {
        super._ForwardingStreamSubscription(stream,onData,onError,onDone,cancelOnError);
        this._sharedState = _sharedState;
    }
    get _flag() : boolean {
        return this._sharedState;
    }
    set _flag(flag : boolean) {
        this._sharedState = flag;
    }
    get _count() : number {
        return this._sharedState;
    }
    set _count(count : number) {
        this._sharedState = count;
    }
    get _value() : core.DartObject {
        return this._sharedState;
    }
    set _value(value : core.DartObject) {
        this._sharedState = value;
    }
}

export namespace _TakeStream {
    export type Constructors = _ForwardingStream.Constructors | '_TakeStream';
    export type Interface<T> = Omit<_TakeStream<T>, Constructors>;
}
@DartClass
export class _TakeStream<T> extends _ForwardingStream<T,T> {
    _count : number;

    constructor(source : Stream<T>,count : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TakeStream(source : Stream<T>,count : number) {
        this._count = count;
        super._ForwardingStream(source);
        if (isNot(count, "number")) throw new core.ArgumentError(count);
    }
    _createSubscription(onData : <T>(data : T) => void,onError : Function,onDone : <T>() => void,cancelOnError : boolean) : StreamSubscription<T> {
        if (this._count == 0) {
            this._source.listen(null).cancel();
            return new _DoneStreamSubscription<T>(onDone);
        }
        return new _StateStreamSubscription<T>(this,onData,onError,onDone,cancelOnError,this._count);
    }
    _handleData(inputEvent : T,sink : _EventSink<T>) : void {
        let subscription : _StateStreamSubscription<T> = sink;
        let count : number = subscription._count;
        if (count > 0) {
            sink._add(inputEvent);
            count -= 1;
            subscription._count = count;
            if (count == 0) {
                sink._close();
            }
        }
    }
}

export namespace _ExpandStream {
    export type Constructors = _ForwardingStream.Constructors | '_ExpandStream';
    export type Interface<S,T> = Omit<_ExpandStream<S,T>, Constructors>;
}
@DartClass
export class _ExpandStream<S,T> extends _ForwardingStream<S,T> {
    _expand : <S,T>(value : S) => core.DartIterable<T>;

    constructor(source : Stream<S>,expand : <S,T>(event : S) => core.DartIterable<T>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ExpandStream(source : Stream<S>,expand : <S,T>(event : S) => core.DartIterable<T>) {
        this._expand = expand;
        super._ForwardingStream(source);
    }
    _handleData(inputEvent : S,sink : _EventSink<T>) : void {
        try {
            for(let value of this._expand(inputEvent)) {
                sink._add(value);
            }
        } catch (__error__) {

            {
                let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                _addErrorWithReplacement(sink,e,s);
            }
        }
    }
}

export namespace _MapStream {
    export type Constructors = _ForwardingStream.Constructors | '_MapStream';
    export type Interface<S,T> = Omit<_MapStream<S,T>, Constructors>;
}
@DartClass
export class _MapStream<S,T> extends _ForwardingStream<S,T> {
    _transform : <S,T>(value : S) => T;

    constructor(source : Stream<S>,transform : <S,T>(event : S) => T) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MapStream(source : Stream<S>,transform : <S,T>(event : S) => T) {
        this._transform = transform;
        super._ForwardingStream(source);
    }
    _handleData(inputEvent : S,sink : _EventSink<T>) : void {
        let outputEvent : T;
        try {
            outputEvent = this._transform(inputEvent);
        } catch (__error__) {

            {
                let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                _addErrorWithReplacement(sink,e,s);
                return;
            }
        }
        sink._add(outputEvent);
    }
}

export namespace _WhereStream {
    export type Constructors = _ForwardingStream.Constructors | '_WhereStream';
    export type Interface<T> = Omit<_WhereStream<T>, Constructors>;
}
@DartClass
export class _WhereStream<T> extends _ForwardingStream<T,T> {
    _test : <T>(value : T) => boolean;

    constructor(source : Stream<T>,test : <T>(value : T) => boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _WhereStream(source : Stream<T>,test : <T>(value : T) => boolean) {
        this._test = test;
        super._ForwardingStream(source);
    }
    _handleData(inputEvent : T,sink : _EventSink<T>) : void {
        let satisfies : boolean;
        try {
            satisfies = this._test(inputEvent);
        } catch (__error__) {

            {
                let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                _addErrorWithReplacement(sink,e,s);
                return;
            }
        }
        if (satisfies) {
            sink._add(inputEvent);
        }
    }
}

export namespace _GeneratedStreamImpl {
    export type Constructors = _StreamImpl.Constructors | '_GeneratedStreamImpl';
    export type Interface<T> = Omit<_GeneratedStreamImpl<T>, Constructors>;
}
@DartClass
export class _GeneratedStreamImpl<T> extends _StreamImpl<T> {
    _pending : <T>() => _PendingEvents<T>;

    _isUsed : boolean;

    constructor(_pending : <T>() => _PendingEvents<T>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _GeneratedStreamImpl(_pending : <T>() => _PendingEvents<T>) {
        this._isUsed = false;
        this._pending = _pending;
    }
    _createSubscription(onData : <T>(data : T) => void,onError : Function,onDone : <T>() => void,cancelOnError : boolean) : StreamSubscription<T> {
        if (this._isUsed) throw new core.StateError("Stream has already been listened to.");
        this._isUsed = true;
        return ((_) : _BufferingStreamSubscription<T> =>  {
            {
                _._setPendingEvents(this._pending());
                return _;
            }
        })(new _BufferingStreamSubscription<T>(onData,onError,onDone,cancelOnError));
    }
}

export namespace _ControllerStream {
    export type Constructors = _StreamImpl.Constructors | '_ControllerStream';
    export type Interface<T> = Omit<_ControllerStream<T>, Constructors>;
}
@DartClass
export class _ControllerStream<T> extends _StreamImpl<T> {
    _controller : _StreamControllerLifecycle<T>;

    constructor(_controller : _StreamControllerLifecycle<T>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ControllerStream(_controller : _StreamControllerLifecycle<T>) {
        this._controller = _controller;
    }
    _createSubscription(onData : <T>(data : T) => void,onError : Function,onDone : <T>() => void,cancelOnError : boolean) : StreamSubscription<T> {
        return this._controller._subscribe(onData,onError,onDone,cancelOnError);
    }
    get hashCode() : number {
        return this._controller.hashCode ^ 892482866;
    }
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        if (core.identical(this,other)) return true;
        if (isNot(other, _ControllerStream<any>)) return false;
        let otherStream : _ControllerStream<any> = other;
        return core.identical(otherStream._controller,this._controller);
    }
}

export namespace _AsBroadcastStreamController {
    export type Constructors = _SyncBroadcastStreamController.Constructors | '_AsBroadcastStreamController';
    export type Interface<T> = Omit<_AsBroadcastStreamController<T>, Constructors>;
}
@DartClass
@Implements(_EventDispatch)
export class _AsBroadcastStreamController<T> extends _SyncBroadcastStreamController<T> implements _EventDispatch.Interface<T> {
    _pending : _StreamImplEvents<T>;

    constructor(onListen : <T>() => void,onCancel : <T>() => void) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AsBroadcastStreamController(onListen : <T>() => void,onCancel : <T>() => void) {
        super._SyncBroadcastStreamController(onListen,onCancel);
    }
    get _hasPending() : boolean {
        return this._pending != null && !this._pending.isEmpty;
    }
    _addPendingEvent(event : _DelayedEvent<any>) : void {
        if (op(Op.EQUALS,this._pending,null)) {
            this._pending = new _StreamImplEvents<T>();
        }
        this._pending.add(event);
    }
    add(data : T) : void {
        if (!this.isClosed && this._isFiring) {
            this._addPendingEvent(new _DelayedData<T>(data));
            return;
        }
        super.add(data);
        while (this._hasPending){
            this._pending.handleNext(this);
        }
    }
    addError(error : core.DartObject,stackTrace? : core.DartStackTrace) : void {
        if (!this.isClosed && this._isFiring) {
            this._addPendingEvent(new _DelayedError(error,stackTrace));
            return;
        }
        if (!this._mayAddEvent) throw this._addEventError();
        this._sendError(error,stackTrace);
        while (this._hasPending){
            this._pending.handleNext(this);
        }
    }
    close() : Future<any> {
        if (!this.isClosed && this._isFiring) {
            this._addPendingEvent(new _DelayedDone());
            this._state |= _BroadcastStreamController._STATE_CLOSED;
            return super.done;
        }
        let result : Future<any> = super.close();
        /* TODO (AssertStatementImpl) : assert (!_hasPending); */;
        return result;
    }
    _callOnCancel() : void {
        if (this._hasPending) {
            this._pending.clear();
            this._pending = null;
        }
        super._callOnCancel();
    }
}

export namespace _BroadcastSubscription {
    export type Constructors = _ControllerSubscription.Constructors | '_BroadcastSubscription';
    export type Interface<T> = Omit<_BroadcastSubscription<T>, Constructors>;
}
@DartClass
export class _BroadcastSubscription<T> extends _ControllerSubscription<T> {
    private static __$_STATE_EVENT_ID : number;
    static get _STATE_EVENT_ID() : number { 
        if (this.__$_STATE_EVENT_ID===undefined) {
            this.__$_STATE_EVENT_ID = 1;
        }
        return this.__$_STATE_EVENT_ID;
    }

    private static __$_STATE_FIRING : number;
    static get _STATE_FIRING() : number { 
        if (this.__$_STATE_FIRING===undefined) {
            this.__$_STATE_FIRING = 2;
        }
        return this.__$_STATE_FIRING;
    }

    private static __$_STATE_REMOVE_AFTER_FIRING : number;
    static get _STATE_REMOVE_AFTER_FIRING() : number { 
        if (this.__$_STATE_REMOVE_AFTER_FIRING===undefined) {
            this.__$_STATE_REMOVE_AFTER_FIRING = 4;
        }
        return this.__$_STATE_REMOVE_AFTER_FIRING;
    }

    _eventState : number;

    _next : _BroadcastSubscription<T>;

    _previous : _BroadcastSubscription<T>;

    constructor(controller : _StreamControllerLifecycle<T>,onData : <T>(data : T) => void,onError : Function,onDone : <T>() => void,cancelOnError : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _BroadcastSubscription(controller : _StreamControllerLifecycle<T>,onData : <T>(data : T) => void,onError : Function,onDone : <T>() => void,cancelOnError : boolean) {
        this._eventState = 0;
        super._ControllerSubscription(controller,onData,onError,onDone,cancelOnError);
        this._next = this._previous = this;
    }
    _expectsEvent(eventId : number) : boolean {
        return (this._eventState & _BroadcastSubscription._STATE_EVENT_ID) == eventId;
    }
    _toggleEventId() : void {
        this._eventState ^= _BroadcastSubscription._STATE_EVENT_ID;
    }
    get _isFiring() : boolean {
        return (this._eventState & _BroadcastSubscription._STATE_FIRING) != 0;
    }
    _setRemoveAfterFiring() : void {
        /* TODO (AssertStatementImpl) : assert (_isFiring); */;
        this._eventState |= _BroadcastSubscription._STATE_REMOVE_AFTER_FIRING;
    }
    get _removeAfterFiring() : boolean {
        return (this._eventState & _BroadcastSubscription._STATE_REMOVE_AFTER_FIRING) != 0;
    }
    _onPause() : void {
    }
    _onResume() : void {
    }
}

export namespace _HandleErrorStream {
    export type Constructors = _ForwardingStream.Constructors | '_HandleErrorStream';
    export type Interface<T> = Omit<_HandleErrorStream<T>, Constructors>;
}
@DartClass
export class _HandleErrorStream<T> extends _ForwardingStream<T,T> {
    _transform : Function;

    _test : (error : any) => boolean;

    constructor(source : Stream<T>,onError : Function,test : <T>(error : any) => boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _HandleErrorStream(source : Stream<T>,onError : Function,test : <T>(error : any) => boolean) {
        this._transform = onError;
        this._test = test;
        super._ForwardingStream(source);
    }
    _handleError(error : core.DartObject,stackTrace : core.DartStackTrace,sink : _EventSink<T>) : void {
        let matches : boolean = true;
        if (this._test != null) {
            try {
                matches = this._test(error);
            } catch (__error__) {

                {
                    let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let e = __error__;
                    _addErrorWithReplacement(sink,e,s);
                    return;
                }
            }
        }
        if (matches) {
            try {
                _invokeErrorHandler(this._transform,error,stackTrace);
            } catch (__error__) {

                {
                    let s : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let e = __error__;
                    if (core.identical(e,error)) {
                        sink._addError(error,stackTrace);
                    }else {
                        _addErrorWithReplacement(sink,e,s);
                    }
                    return;
                }
            }
        }else {
            sink._addError(error,stackTrace);
        }
    }
}

export namespace _BroadcastStream {
    export type Constructors = _ControllerStream.Constructors | '_BroadcastStream';
    export type Interface<T> = Omit<_BroadcastStream<T>, Constructors>;
}
@DartClass
export class _BroadcastStream<T> extends _ControllerStream<T> {
    constructor(controller : _StreamControllerLifecycle<T>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _BroadcastStream(controller : _StreamControllerLifecycle<T>) {
        super._ControllerStream(controller);
    }
    get isBroadcast() : boolean {
        return true;
    }
}

export class properties {
    private static __$_ROOT_ZONE;
    static get _ROOT_ZONE() { 
        if (this.__$_ROOT_ZONE===undefined) {
            this.__$_ROOT_ZONE = new _RootZone();
        }
        return this.__$_ROOT_ZONE;
    }
    static set _ROOT_ZONE(__$value : any)  { 
        this.__$_ROOT_ZONE = __$value;
    }

    private static __$_nextCallback : _AsyncCallbackEntry;
    static get _nextCallback() : _AsyncCallbackEntry { 
        return this.__$_nextCallback;
    }
    static set _nextCallback(__$value : _AsyncCallbackEntry)  { 
        this.__$_nextCallback = __$value;
    }

    private static __$_lastCallback : _AsyncCallbackEntry;
    static get _lastCallback() : _AsyncCallbackEntry { 
        return this.__$_lastCallback;
    }
    static set _lastCallback(__$value : _AsyncCallbackEntry)  { 
        this.__$_lastCallback = __$value;
    }

    private static __$_lastPriorityCallback : _AsyncCallbackEntry;
    static get _lastPriorityCallback() : _AsyncCallbackEntry { 
        return this.__$_lastPriorityCallback;
    }
    static set _lastPriorityCallback(__$value : _AsyncCallbackEntry)  { 
        this.__$_lastPriorityCallback = __$value;
    }

    private static __$_isInCallbackLoop : boolean;
    static get _isInCallbackLoop() : boolean { 
        if (this.__$_isInCallbackLoop===undefined) {
            this.__$_isInCallbackLoop = false;
        }
        return this.__$_isInCallbackLoop;
    }
    static set _isInCallbackLoop(__$value : boolean)  { 
        this.__$_isInCallbackLoop = __$value;
    }

}
