/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/closures/closure_in_initializer_closure.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    core.print(0);
    let c = new C.foo((x : any) =>  {
        return core.print(x);
    });
    core.print(2);
    (c.t())('fisk');
    core.print(3);
};
export namespace C {
    export type Constructors = 'foo';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C {
    t;

    @namedConstructor
    foo(f : any) {
        this.t = (() =>  {
            let prefix;
            let g = (x : any) =>  {
                f(`${prefix}${x}`);
            };
            prefix = 'hest';
            return g;
        });
        core.print(1);
    }
    static foo : new(f : any) => C;

}

export class properties {
}
