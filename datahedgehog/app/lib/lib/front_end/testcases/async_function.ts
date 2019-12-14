/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/async_function.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var asyncString : () => async.Future<string> = () => new async.Future.fromPromise(( async () : Promise<string> =>  {
    return "foo";
})());
export var asyncString2 : () => async.Future<string> = () => new async.Future.fromPromise(( async () : Promise<string> =>  {
    return asyncString();
})());
export var syncStarString : () => core.DartIterable<string> = () : core.DartIterable<string> => core.iter<string>(()=>(function*()  {
    yield "foo";
    yield* syncStarString2();
    yield* properties.stringList;
}).call(this));
export var syncStarString2 : () => core.DartIterable<string> = () : core.DartIterable<string> => core.iter<string>(()=>(function*()  {
    yield "foo";
}).call(this));
export var asyncStarString : () => async.DartStream<string> = () : async.DartStream<string> => async.stream<string>(()=>(async function*()  {
    yield "foo";
    yield* asyncStarString2();
    yield await asyncString();
}).call(this));
export var asyncStarString2 : () => async.DartStream<string> = () : async.DartStream<string> => async.stream<string>(()=>(async function*()  {
    yield "bar";
}).call(this));
export var main : () => any = () => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let str : string = await asyncString();
})());
export class properties {
    private static __$stringList : core.DartList<string>;
    static get stringList() : core.DartList<string> { 
        if (this.__$stringList===undefined) {
            this.__$stringList = new core.DartList.literal("bar");
        }
        return this.__$stringList;
    }
    static set stringList(__$value : core.DartList<string>)  { 
        this.__$stringList = __$value;
    }

}
