/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/null_aware.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let foo : Foo = new Foo();
    ((t)=>(!!t)?t.field:null)(foo) = 5;
    ((t)=>(!!t)?t.staticField:null)(Foo) = 5;
    foo.field = ( foo.field ) || ( 5 );
    Foo.staticField = ( Foo.staticField ) || ( 5 );
    ((t)=>(!!t)?t.field:null)(foo) = ( ((t)=>(!!t)?t.field:null)(foo) ) || ( 5 );
    ((t)=>(!!t)?t.staticField:null)(Foo) = ( ((t)=>(!!t)?t.staticField:null)(Foo) ) || ( 5 );
    let intValue : number = (foo.field || 6);
    let numValue : number = (foo.field || 4.5);
};
export namespace Foo {
    export type Constructors = 'Foo';
    export type Interface = Omit<Foo, Constructors>;
}
@DartClass
export class Foo {
    field : number;

    private static __$staticField : number;
    static get staticField() : number { 
        return this.__$staticField;
    }
    static set staticField(__$value : number)  { 
        this.__$staticField = __$value;
    }

    constructor() {
    }
    @defaultConstructor
    Foo() {
    }
}

export class properties {
}
