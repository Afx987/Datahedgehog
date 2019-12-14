/** Library asset:datahedgehog_monitor/lib/lib/foundation/synchronous_future.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace SynchronousFuture {
    export type Constructors = 'SynchronousFuture';
    export type Interface<T> = Omit<SynchronousFuture<T>, Constructors>;
}
@DartClass
@Implements(async.Future)
export class SynchronousFuture<T> implements async.Future.Interface<T> {
    constructor(_value : T) {
    }
    @defaultConstructor
    SynchronousFuture(_value : T) {
        this._value = _value;
    }
    _value : T;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    asStream() : async.DartStream<T> {
        let controller : async.DartStreamController<T> = async.DartStreamController();
        controller.add(this._value);
        controller.close();
        return controller.stream;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    catchError(onError : Function,_namedArguments? : {test? : <T>(error : any) => boolean}) : async.Future<T> {
        let {test} = Object.assign({
        }, _namedArguments );
        return async.DartCompleter().future;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    then<E>(f : <E,T>(value : T) => any,_namedArguments? : {onError? : Function}) : async.Future<E> {
        let {onError} = Object.assign({
        }, _namedArguments );
        let result : any = f(this._value);
        if (is(result, async.Future<E>)) return result;
        return SynchronousFuture(result);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    timeout(timeLimit : core.DartDuration,_namedArguments? : {onTimeout? : <T>() => any}) : async.Future<T> {
        let {onTimeout} = Object.assign({
        }, _namedArguments );
        return op(Op.LT,async.Future<T>,T);
        op(Op.GT,,.value(this._value).timeout(timeLimit,{
            onTimeout : onTimeout}));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    whenComplete(action : <T>() => any) : async.Future<T> {
        try {
            let result : any = action();
            if (is(result, async.Future<any>)) return result.then((value : any) =>  {
                return this._value;
            });
            return this;
        } catch (__error__) {

            {
                let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let e = __error__;
                return op(Op.LT,async.Future<T>,T);
                op(Op.GT,,.error(e,stack));
            }
        }
    }
}

export class properties {
}
