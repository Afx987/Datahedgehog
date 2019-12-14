/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/cancelable_future.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace CancelableCompleter {
    export type Constructors = 'CancelableCompleter';
    export type Interface<T> = Omit<CancelableCompleter<T>, Constructors>;
}
@DartClass
@Implements(async.DartCompleter)
export class CancelableCompleter<T> implements async.DartCompleter.Interface<T> {
    _innerCompleter : async.DartCompleter<T>;

    _outerCompleter : async.DartCompleter<T>;

    _onCancel : () => void;

    _future : _CancelableCompleterFuture<T>;

    constructor(_onCancel : () => void) {
    }
    @defaultConstructor
    CancelableCompleter(_onCancel : () => void) {
        this._innerCompleter = new async.DartCompleter.sync();
        this._outerCompleter = new async.DartCompleter<T>();
        this._onCancel = _onCancel;
        this._future = new _CancelableCompleterFuture<T>(this);
        this._innerCompleter.future.then((value : T) =>  {
            if (!this._outerCompleter.isCompleted) {
                this._outerCompleter.complete(value);
            }
        },{
            onError : (error : core.DartObject,stackTrace : core.DartStackTrace) =>  {
                if (!this._outerCompleter.isCompleted) {
                    this._outerCompleter.completeError(error,stackTrace);
                }
            }});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get future() : CancelableFuture<T> {
        return this._future;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isCompleted() : boolean {
        return this._innerCompleter.isCompleted;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    complete(value? : any) : void {
        this._innerCompleter.complete(value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    completeError(error : core.DartObject,stackTrace? : core.DartStackTrace) : void {
        this._innerCompleter.completeError(error,stackTrace);
    }
    _cancel() : void {
        if (!this._outerCompleter.isCompleted) {
            this._outerCompleter.completeError(new FutureCanceledError());
            this._onCancel();
        }
    }
}

export namespace CancelableFuture {
    export type Constructors = never;
    export type Interface<T> = Omit<CancelableFuture<T>, Constructors>;
}
@DartClass
@Implements(async.Future)
export class CancelableFuture<T> implements async.Future.Interface<T> {
    constructor(computation : <T>() => any) {
    }
    @defaultFactory
    static $CancelableFuture<T>(computation : <T>() => any) : CancelableFuture<T> {
        return new _WrappedFuture<T>(new async.Future<T>(computation));
    }
    @namedFactory
    static $delayed<T>(duration : core.DartDuration,computation? : <T>() => any) : CancelableFuture<T> {
        return new _WrappedFuture<T>(new async.Future.delayed(duration,computation));
    }
    static delayed : new<T>(duration : core.DartDuration,computation : <T>() => any) => CancelableFuture<T>;

    @namedFactory
    static $error<T>(error : core.DartObject,stackTrace? : core.DartStackTrace) : CancelableFuture<T> {
        return new _WrappedFuture<T>(new async.Future.error(error,stackTrace));
    }
    static error : new<T>(error : core.DartObject,stackTrace : core.DartStackTrace) => CancelableFuture<T>;

    @namedFactory
    static $microtask<T>(computation : <T>() => any) : CancelableFuture<T> {
        return new _WrappedFuture<T>(new async.Future.microtask(computation));
    }
    static microtask : new<T>(computation : <T>() => any) => CancelableFuture<T>;

    @namedFactory
    static $sync<T>(computation : <T>() => any) : CancelableFuture<T> {
        return new _WrappedFuture<T>(new async.Future.sync(computation));
    }
    static sync : new<T>(computation : <T>() => any) => CancelableFuture<T>;

    @namedFactory
    static $value<T>(value? : any) : CancelableFuture<T> {
        return new _WrappedFuture<T>(new async.Future.value(value));
    }
    static value : new<T>(value : any) => CancelableFuture<T>;

    @Abstract
    cancel() : void{ throw 'abstract'}
}

export namespace FutureCanceledError {
    export type Constructors = 'FutureCanceledError';
    export type Interface = Omit<FutureCanceledError, Constructors>;
}
@DartClass
export class FutureCanceledError {
    constructor() {
    }
    @defaultConstructor
    FutureCanceledError() {
    }
}

export namespace _CancelableCompleterFuture {
    export type Constructors = '_CancelableCompleterFuture';
    export type Interface<T> = Omit<_CancelableCompleterFuture<T>, Constructors>;
}
@DartClass
@Implements(CancelableFuture)
export class _CancelableCompleterFuture<T> implements CancelableFuture.Interface<T> {
    _completer : CancelableCompleter<T>;

    constructor(_completer : CancelableCompleter<T>) {
    }
    @defaultConstructor
    _CancelableCompleterFuture(_completer : CancelableCompleter<T>) {
        this._completer = _completer;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    asStream() : async.DartStream<T> {
        return this._completer._outerCompleter.future.asStream();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    cancel() : void {
        this._completer._cancel();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    catchError(onError : Function,_namedArguments? : {test? : <T>(error : core.DartObject) => boolean}) : async.Future<T> {
        let {test} = Object.assign({
        }, _namedArguments );
        return this._completer._outerCompleter.future.catchError(onError,{
            test : test});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    then(onValue : <T>(value : T) => any,_namedArguments? : {onError? : Function}) : async.Future<any> {
        let {onError} = Object.assign({
        }, _namedArguments );
        return this._completer._outerCompleter.future.then(onValue,{
            onError : onError});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    timeout(timeLimit : core.DartDuration,_namedArguments? : {onTimeout? : <T>() => any}) : async.Future<T> {
        let {onTimeout} = Object.assign({
        }, _namedArguments );
        return this._completer._outerCompleter.future.timeout(timeLimit,{
            onTimeout : onTimeout});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    whenComplete(action : <T>() => any) : async.Future<T> {
        return this._completer._outerCompleter.future.whenComplete(action);
    }
}

export namespace _WrappedFuture {
    export type Constructors = '_WrappedFuture';
    export type Interface<T> = Omit<_WrappedFuture<T>, Constructors>;
}
@DartClass
@Implements(CancelableFuture)
export class _WrappedFuture<T> implements CancelableFuture.Interface<T> {
    _future : async.Future<T>;

    constructor(_future : async.Future<T>) {
    }
    @defaultConstructor
    _WrappedFuture(_future : async.Future<T>) {
        this._future = _future;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    asStream() : async.DartStream<T> {
        return this._future.asStream();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    cancel() : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    catchError(onError : Function,_namedArguments? : {test? : <T>(error : core.DartObject) => boolean}) : async.Future<T> {
        let {test} = Object.assign({
        }, _namedArguments );
        return this._future.catchError(onError,{
            test : test});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    then(onValue : <T>(value : T) => any,_namedArguments? : {onError? : Function}) : async.Future<any> {
        let {onError} = Object.assign({
        }, _namedArguments );
        return this._future.then(onValue,{
            onError : onError});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    timeout(timeLimit : core.DartDuration,_namedArguments? : {onTimeout? : <T>() => any}) : async.Future<T> {
        let {onTimeout} = Object.assign({
        }, _namedArguments );
        return this._future.timeout(timeLimit,{
            onTimeout : onTimeout});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    whenComplete(action : <T>() => any) : async.Future<T> {
        return this._future.whenComplete(action);
    }
}

export class properties {
}
