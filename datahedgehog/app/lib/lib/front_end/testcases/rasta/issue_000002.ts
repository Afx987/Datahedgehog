/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/issue_000002.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as typed_data from "@dart2ts/dart/typed_data";

export var main : () => any = () =>  {
    Expect.isTrue(op(Op.INDEX,new typed_data.Uint8List.fromList(properties.list),1) == 2);
    Expect.isTrue(op(Op.EQUALS,new Foo.fac(10).value,10));
};
export namespace Foo {
    export type Constructors = 'Foo';
    export type Interface = Omit<Foo, Constructors>;
}
@DartClass
export class Foo {
    value;

    constructor(value : any) {
    }
    @defaultConstructor
    Foo(value : any) {
        this.value = value;
    }
    @namedFactory
    static $fac(value : any) : Foo {
        return new Foo(value);
    }
    static fac : new(value : any) => Foo;

}

export class properties {
    private static __$list;
    static get list() { 
        if (this.__$list===undefined) {
            this.__$list = new core.DartList.literal(1,2,3);
        }
        return this.__$list;
    }
    static set list(__$value : any)  { 
        this.__$list = __$value;
    }

}
