/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/optional.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var createExternal : () => External = () : External =>  {
};
export var main : () => any = () =>  {
    let foo = new Foo();
    let string1 = foo.method(1);
    let string2 = foo.method(1,2);
    let string3 = foo.method(1,2,3);
    let extern = createExternal();
    let string4 = extern.externalMethod(1);
    let string5 = extern.externalMethod(1,2);
    let string6 = extern.externalMethod(1,2,3);
    extern.listen(new TestListener());
    extern.listen(new ExtendedListener());
    extern.listen(new InvalidListener());
    let nothing1 = foo.method();
    let nothing2 = foo.method(1,2,3,4);
    let nothing3 = extern.externalMethod();
    let nothing4 = extern.externalMethod(1,2,3,4);
};
export namespace Foo {
    export type Constructors = 'Foo';
    export type Interface = Omit<Foo, Constructors>;
}
@DartClass
export class Foo {
    method(x : any,y? : any,z? : any) {
        return "string";
    }
    constructor() {
    }
    @defaultConstructor
    Foo() {
    }
}

export namespace External {
    export type Constructors = 'External';
    export type Interface = Omit<External, Constructors>;
}
@DartClass
export class External {
    @Abstract
    externalMethod(x : number,y? : number,z? : number) : string{ throw 'abstract'}
    @Abstract
    listen(listener : Listener) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    External() {
    }
}

export namespace Listener {
    export type Constructors = 'Listener';
    export type Interface = Omit<Listener, Constructors>;
}
@DartClass
export class Listener {
    @Abstract
    event(input : string,x? : number,y? : number) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Listener() {
    }
}

export namespace InvalidListener {
    export type Constructors = 'InvalidListener';
    export type Interface = Omit<InvalidListener, Constructors>;
}
@DartClass
export class InvalidListener {
    event(input : any,x? : any) : void {
    }
    constructor() {
    }
    @defaultConstructor
    InvalidListener() {
    }
}

export namespace TestListener {
    export type Constructors = Listener.Constructors | 'TestListener';
    export type Interface = Omit<TestListener, Constructors>;
}
@DartClass
export class TestListener extends Listener {
    event(input : any,x? : any,y? : any) : void {
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TestListener() {
    }
}

export namespace ExtendedListener {
    export type Constructors = Listener.Constructors | 'ExtendedListener';
    export type Interface = Omit<ExtendedListener, Constructors>;
}
@DartClass
export class ExtendedListener extends Listener {
    event(input : any,x? : any,y? : any,z? : any) : void {
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExtendedListener() {
    }
}

export class properties {
}
