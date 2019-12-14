/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/inference/generic_methods_infer_generic_instantiation.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";

export var main : () => any = () =>  {
    takeIII(math.max);
    takeDDD(math.max);
    takeNNN(math.max);
    takeIDN(math.max);
    takeDIN(math.max);
    takeIIN(math.max);
    takeDDN(math.max);
    takeIIO(math.max);
    takeDDO(math.max);
    takeOOI(math.max);
    takeIDI(math.max);
    takeDID(math.max);
    takeOON(math.max);
    takeOOO(math.max);
    takeIII(math.min);
    takeDDD(math.min);
    takeNNN(math.min);
    takeIDN(math.min);
    takeDIN(math.min);
    takeIIN(math.min);
    takeDDN(math.min);
    takeIIO(math.min);
    takeDDO(math.min);
    takeOOI(math.min);
    takeIDI(math.min);
    takeDID(math.min);
    takeOON(math.min);
    takeOOO(math.min);
    takeIII(new C().m.bind(new C()));
    takeDDD(new C().m.bind(new C()));
    takeNNN(new C().m.bind(new C()));
    takeIDN(new C().m.bind(new C()));
    takeDIN(new C().m.bind(new C()));
    takeIIN(new C().m.bind(new C()));
    takeDDN(new C().m.bind(new C()));
    takeIIO(new C().m.bind(new C()));
    takeDDO(new C().m.bind(new C()));
    takeOON(new C().m.bind(new C()));
    takeOOO(new C().m.bind(new C()));
    takeOOI(new C().m.bind(new C()));
    takeIDI(new C().m.bind(new C()));
    takeDID(new C().m.bind(new C()));
};
export var takeIII : (fn : (a : number,b : number) => number) => void = (fn : (a : number,b : number) => number) : void =>  {
};
export var takeDDD : (fn : (a : double,b : double) => double) => void = (fn : (a : double,b : double) => double) : void =>  {
};
export var takeIDI : (fn : (a : double,b : number) => number) => void = (fn : (a : double,b : number) => number) : void =>  {
};
export var takeDID : (fn : (a : number,b : double) => double) => void = (fn : (a : number,b : double) => double) : void =>  {
};
export var takeIDN : (fn : (a : double,b : number) => number) => void = (fn : (a : double,b : number) => number) : void =>  {
};
export var takeDIN : (fn : (a : number,b : double) => number) => void = (fn : (a : number,b : double) => number) : void =>  {
};
export var takeIIN : (fn : (a : number,b : number) => number) => void = (fn : (a : number,b : number) => number) : void =>  {
};
export var takeDDN : (fn : (a : double,b : double) => number) => void = (fn : (a : double,b : double) => number) : void =>  {
};
export var takeNNN : (fn : (a : number,b : number) => number) => void = (fn : (a : number,b : number) => number) : void =>  {
};
export var takeOON : (fn : (a : core.DartObject,b : core.DartObject) => number) => void = (fn : (a : core.DartObject,b : core.DartObject) => number) : void =>  {
};
export var takeOOO : (fn : (a : core.DartObject,b : core.DartObject) => number) => void = (fn : (a : core.DartObject,b : core.DartObject) => number) : void =>  {
};
export var takeOOI : (fn : (a : core.DartObject,b : core.DartObject) => number) => void = (fn : (a : core.DartObject,b : core.DartObject) => number) : void =>  {
};
export var takeIIO : (fn : (a : number,b : number) => core.DartObject) => void = (fn : (a : number,b : number) => core.DartObject) : void =>  {
};
export var takeDDO : (fn : (a : double,b : double) => core.DartObject) => void = (fn : (a : double,b : double) => core.DartObject) : void =>  {
};
export namespace C {
    export type Constructors = 'C';
    export type Interface = Omit<C, Constructors>;
}
@DartClass
export class C {
    m<T extends number>(x : T,y : T) : T {
        return null;
    }
    constructor() {
    }
    @defaultConstructor
    C() {
    }
}

export class properties {
}
