/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/downwards_inference_on_generic_function_expressions.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => void = () : void =>  {
    {
        var f : <S>(x : number) => string = <S>(x : number) : string =>  {
            return null;
        };
        let v = f;
        v = <T>(x : number) =>  {
            return null;
        };
        v = <T>(x : number) =>  {
            return "hello";
        };
        v = <T>(x : string) =>  {
            return "hello";
        };
        v = <T>(x : number) =>  {
            return 3;
        };
        v = <T>(x : number) =>  {
            return 3;
        };
    }
    {
        var f : <S>(x : number) => string = <S>(x : number) : string =>  {
            return null;
        };
        let v = f;
        v = <T>(x : any) =>  {
            return null;
        };
        v = <T>(x : any) =>  {
            return "hello";
        };
        v = <T>(x : any) =>  {
            return 3;
        };
        v = <T>(x : any) =>  {
            return 3;
        };
        v = <T>(x : any) =>  {
            return x;
        };
    }
    {
        var f : <S>(x : number) => core.DartList<string> = <S>(x : number) : core.DartList<string> =>  {
            return null;
        };
        let v = f;
        v = <T>(x : number) =>  {
            return null;
        };
        v = <T>(x : number) =>  {
            return new core.DartList.literal("hello");
        };
        v = <T>(x : string) =>  {
            return new core.DartList.literal("hello");
        };
        v = <T>(x : number) =>  {
            return new core.DartList.literal(3);
        };
        v = <T>(x : number) =>  {
            return new core.DartList.literal(3);
        };
    }
    {
        var int2int : <S>(x : number) => number = <S>(x : number) : number =>  {
            return null;
        };
        var int2String : <T>(x : number) => string = <T>(x : number) : string =>  {
            return null;
        };
        var string2String : <T>(x : string) => string = <T>(x : string) : string =>  {
            return null;
        };
        let x = int2int;
        x = <T>(x : any) =>  {
            return x;
        };
        x = <T>(x : any) =>  {
            return op(Op.PLUS,x,1);
        };
        let y = int2String;
        y = <T>(x : any) =>  {
            return x;
        };
        y = <T>(x : any) =>  {
            return x.substring(3);
        };
        let z = string2String;
        z = <T>(x : any) =>  {
            return x.substring(3);
        };
    }
};
export class properties {
}
