/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/implicit_scope_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    ImplicitScopeTest.testMain();
};
export namespace ImplicitScopeTest {
    export type Constructors = 'ImplicitScopeTest';
    export type Interface = Omit<ImplicitScopeTest, Constructors>;
}
@DartClass
export class ImplicitScopeTest {
    static alwaysTrue() : boolean {
        return 1 + 1 == 2;
    }
    static testMain() {
        let a = "foo";
        let b;
        if (ImplicitScopeTest.alwaysTrue()) let a = "bar";else let b = a;
        Expect.equals("foo",a);
        Expect.equals(null,b);
        while (!ImplicitScopeTest.alwaysTrue())let a = "bar", b = "baz";
        Expect.equals("foo",a);
        Expect.equals(null,b);
        for(let i : number = 0; i < 10; i++)let a = "bar", b = "baz";
        Expect.equals("foo",a);
        Expect.equals(null,b);
        dolet a = "bar", b = "baz" while ("black" == "white");
        Expect.equals("foo",a);
        Expect.equals(null,b);
    }
    constructor() {
    }
    @defaultConstructor
    ImplicitScopeTest() {
    }
}

export class properties {
}
