/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/downward_inference_miscellaneous.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => void = () : void =>  {
    {
        let x = "hello";
        let y = 3;
        var f : (l : core.DartList<core.DartMap<number,string>>) => void = (l : core.DartList<core.DartMap<number,string>>) : void =>  {
        };
        /* TODO (EmptyStatementImpl) : ; */;
        f(new core.DartList.literal(new core.DartMap.literal([
            [y,x]])));
    }
    {
        var f : (x : number) => number = (x : number) : number =>  {
            return 0;
        };
        let a : A<number> = new A<any>(f);
    }
};
export namespace A {
    export type Constructors = 'A';
    export type Interface<T> = Omit<A<T>, Constructors>;
}
@DartClass
export class A<T> {
    x : <S,T>(x : T) => T;

    constructor(x : <S,T>(x : T) => T) {
    }
    @defaultConstructor
    A(x : <S,T>(x : T) => T) {
        this.x = x;
    }
}

export class properties {
}
