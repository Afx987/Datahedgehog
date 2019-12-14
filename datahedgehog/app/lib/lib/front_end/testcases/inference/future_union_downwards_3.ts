/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/future_union_downwards_3.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var g2 : () => async.Future<core.DartList<number>> = () => new async.Future.fromPromise(( async () : Promise<core.DartList<number>> =>  {
    return new core.DartList.literal(3);
})());
export var g3 : () => async.Future<core.DartList<number>> = () => new async.Future.fromPromise(( async () : Promise<core.DartList<number>> =>  {
    return new async.Future.value(new core.DartList.literal(3));
})());
export namespace MyFuture {
    export type Constructors = 'MyFuture' | 'value';
    export type Interface<T> = Omit<MyFuture<T>, Constructors>;
}
@DartClass
@Implements(async.Future)
export class MyFuture<T> implements async.Future.Interface<T> {
    constructor() {
    }
    @defaultConstructor
    MyFuture() {
    }
    @namedConstructor
    value(x? : any) {
    }
    static value : new<T>(x : any) => MyFuture<T>;

    @Abstract
    noSuchMethod(invocation : any) : any{ throw 'abstract'}
    then<S>(f : <S,T>(x : T) => any,_namedArguments? : {onError? : Function}) : MyFuture<S> {
        let {onError} = Object.assign({
        }, _namedArguments );
        return null;
    }
}

export class properties {
    private static __$f : async.Future<any>;
    static get f() : async.Future<any> { 
        return this.__$f;
    }
    static set f(__$value : async.Future<any>)  { 
        this.__$f = __$value;
    }

    private static __$t1 : async.Future<number>;
    static get t1() : async.Future<number> { 
        if (this.__$t1===undefined) {
            this.__$t1 = properties.f.then((_ : any) =>  {
                return new async.Future.value('hi');
            });
        }
        return this.__$t1;
    }
    static set t1(__$value : async.Future<number>)  { 
        this.__$t1 = __$value;
    }

    private static __$t2 : async.Future<core.DartList<number>>;
    static get t2() : async.Future<core.DartList<number>> { 
        if (this.__$t2===undefined) {
            this.__$t2 = properties.f.then((_ : any) =>  {
                return new core.DartList.literal(3);
            });
        }
        return this.__$t2;
    }
    static set t2(__$value : async.Future<core.DartList<number>>)  { 
        this.__$t2 = __$value;
    }

}
