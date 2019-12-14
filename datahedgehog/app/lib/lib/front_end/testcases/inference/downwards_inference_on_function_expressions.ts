/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/downwards_inference_on_function_expressions.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => void = () : void =>  {
    {
        let l0 : <S,T>(x : number) => string = (x : number) =>  {
            return null;
        };
        let l1 : <S,T>(x : number) => string = (x : number) =>  {
            return "hello";
        };
        let l2 : <S,T>(x : number) => string = (x : string) =>  {
            return "hello";
        };
        let l3 : <S,T>(x : number) => string = (x : number) =>  {
            return 3;
        };
        let l4 : <S,T>(x : number) => string = (x : number) =>  {
            return 3;
        };
    }
    {
        let l0 : <S,T>(x : number) => string = (x : any) =>  {
            return null;
        };
        let l1 : <S,T>(x : number) => string = (x : any) =>  {
            return "hello";
        };
        let l2 : <S,T>(x : number) => string = (x : any) =>  {
            return 3;
        };
        let l3 : <S,T>(x : number) => string = (x : any) =>  {
            return 3;
        };
        let l4 : <S,T>(x : number) => string = (x : any) =>  {
            return x;
        };
    }
    {
        let l0 : <S,T>(x : number) => core.DartList<string> = (x : number) =>  {
            return null;
        };
        let l1 : <S,T>(x : number) => core.DartList<string> = (x : number) =>  {
            return new core.DartList.literal("hello");
        };
        let l2 : <S,T>(x : number) => core.DartList<string> = (x : string) =>  {
            return new core.DartList.literal("hello");
        };
        let l3 : <S,T>(x : number) => core.DartList<string> = (x : number) =>  {
            return new core.DartList.literal(3);
        };
        let l4 : <S,T>(x : number) => core.DartList<string> = (x : number) =>  {
            return new core.DartList.literal(3);
        };
    }
    {
        let l0 : <S,T>(x : number) => number = (x : any) =>  {
            return x;
        };
        let l1 : <S,T>(x : number) => number = (x : any) =>  {
            return op(Op.PLUS,x,1);
        };
        let l2 : <S,T>(x : number) => string = (x : any) =>  {
            return x;
        };
        let l3 : <S,T>(x : number) => string = (x : any) =>  {
            return x.substring(3);
        };
        let l4 : <S,T>(x : string) => string = (x : any) =>  {
            return x.substring(3);
        };
    }
};
export class properties {
}
