/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/uninitialized_fields.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
};
export namespace Uninitialized {
    export type Constructors = 'Uninitialized';
    export type Interface = Omit<Uninitialized, Constructors>;
}
@DartClass
export class Uninitialized {
    x : number;

    constructor() {
    }
    @defaultConstructor
    Uninitialized() {
    }
}

export namespace PartiallyInitialized {
    export type Constructors = 'PartiallyInitialized' | 'noInitializer';
    export type Interface = Omit<PartiallyInitialized, Constructors>;
}
@DartClass
export class PartiallyInitialized {
    x : number;

    constructor(x : number) {
    }
    @defaultConstructor
    PartiallyInitialized(x : number) {
        this.x = x;
    }
    @namedConstructor
    noInitializer() {
    }
    static noInitializer : new() => PartiallyInitialized;

}

export namespace Initialized {
    export type Constructors = 'Initialized';
    export type Interface = Omit<Initialized, Constructors>;
}
@DartClass
export class Initialized {
    x : number;

    constructor(x : number) {
    }
    @defaultConstructor
    Initialized(x : number) {
        this.x = x;
    }
}

export namespace Forwarding {
    export type Constructors = 'initialize' | 'Forwarding';
    export type Interface = Omit<Forwarding, Constructors>;
}
@DartClass
export class Forwarding {
    x : number;

    @namedConstructor
    initialize(x : number) {
        this.x = x;
    }
    static initialize : new(x : number) => Forwarding;

    constructor(arg : number) {
    }
    @defaultConstructor
    Forwarding(arg : number) {
        this.initialize(arg);
    }
}

export class properties {
    private static __$uninitializedTopLevel : number;
    static get uninitializedTopLevel() : number { 
        return this.__$uninitializedTopLevel;
    }
    static set uninitializedTopLevel(__$value : number)  { 
        this.__$uninitializedTopLevel = __$value;
    }

    private static __$initializedTopLevel : number;
    static get initializedTopLevel() : number { 
        if (this.__$initializedTopLevel===undefined) {
            this.__$initializedTopLevel = 4;
        }
        return this.__$initializedTopLevel;
    }
    static set initializedTopLevel(__$value : number)  { 
        this.__$initializedTopLevel = __$value;
    }

}
