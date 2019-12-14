/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/downwards_inference_on_function_of_t_using_the_t.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => void = () : void =>  {
    {
        var f : <T>(x : T) => T = <T>(x : T) : T =>  {
            return null;
        };
        let v1 = f;
        v1 = <S>(x : any) =>  {
            return x;
        };
    }
    {
        var f : <T>(x : T) => core.DartList<T> = <T>(x : T) : core.DartList<T> =>  {
            return null;
        };
        let v2 = f;
        v2 = <S>(x : any) =>  {
            return new core.DartList.literal(x);
        };
        let r : core.DartIterable<number> = v2(42);
        let s : core.DartIterable<string> = v2('hello');
        let t : core.DartIterable<core.DartList<number>> = v2(new core.DartList.literal<number>());
        let u : core.DartIterable<number> = v2(42);
        let v : core.DartIterable<number> = v2(42);
    }
};
export class properties {
}
