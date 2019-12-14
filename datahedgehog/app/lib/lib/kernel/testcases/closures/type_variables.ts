/** Library asset:datahedgehog_monitor/lib/lib/kernel/testcases/closures/type_variables.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : (arguments : any) => any = (arguments : any) =>  {
    core.print((new C<string,string>().foo(null))(arguments.first));
    let c : any = ((new C<number,number>().baz())())();
    if (isNot(c, C<number,number>)) throw `${c} fails type test 'is C<int, int>'`;
    if (is(c, C<string,string>)) {
        throw `${c} passes type test 'is C<String, String>'`;
    }
    core.print(c);
};
export namespace C {
    export type Constructors = 'internal';
    export type Interface<T,S> = Omit<C<T,S>, Constructors>;
}
@DartClass
export class C<T,S> {
    foo(s : S) {
        return (x : T) =>  {
            let y : T = x;
            let z : core.DartObject = y;
            let self : C<T,S> = this;
            return z as T;
        };
    }
    bar() {
        let self : C<T,S> = this;
    }
    baz() {
        return () =>  {
            return () =>  {
                return new C<T,S>();
            };
        };
    }
    constructor() {
    }
    @defaultFactory
    static $C<T,S>() : C<T,S> {
        var local : () => any = () =>  {
            let self : C<T,S> = new C.internal();
            return self;
        };
        return local();
    }
    @namedConstructor
    internal() {
    }
    static internal : new<T,S>() => C<T,S>;

}

export class properties {
}
