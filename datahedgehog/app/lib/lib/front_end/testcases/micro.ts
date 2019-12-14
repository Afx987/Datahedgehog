/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/micro.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var staticMethod : () => any = () =>  {
    return "sdfg";
};
export var externalStatic : () => boolean = () : boolean =>  {
};
export var createBar : () => Bar = () : Bar =>  {
};
export var stringArgument : (x : any) => any = (x : any) =>  {
};
export var intArgument : (x : any) => any = (x : any) =>  {
};
export var makeDynamicCall : (receiver : any) => void = (receiver : any) : void =>  {
    receiver.dynamicallyCalled("sdfg");
};
export var main : () => any = () =>  {
    let x = staticMethod();
    let y = new Foo().instanceMethod();
    let z = externalStatic();
    let w = createBar().externalInstanceMethod();
    stringArgument("sdfg");
    intArgument(42);
    let box = new Box();
    box.field = "sdfg";
    let a = box.field;
    let finalBox = new FinalBox("dfg");
    let b = finalBox.finalField;
    let subBox = new SubFinalBox("dfg");
    let c = subBox.finalField;
    makeDynamicCall(new DynamicReceiver1());
    makeDynamicCall(new DynamicReceiver2());
    let list = new core.DartList.literal("string");
    let d = list[0];
};
export namespace Foo {
    export type Constructors = 'Foo';
    export type Interface = Omit<Foo, Constructors>;
}
@DartClass
export class Foo {
    instanceMethod() {
        return 123;
    }
    constructor() {
    }
    @defaultConstructor
    Foo() {
    }
}

export namespace ExternalValue {
    export type Constructors = 'ExternalValue';
    export type Interface = Omit<ExternalValue, Constructors>;
}
@DartClass
export class ExternalValue {
    constructor() {
    }
    @defaultConstructor
    ExternalValue() {
    }
}

export namespace Bar {
    export type Constructors = 'Bar';
    export type Interface = Omit<Bar, Constructors>;
}
@DartClass
export class Bar {
    @Abstract
    externalInstanceMethod() : ExternalValue{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Bar() {
    }
}

export namespace Box {
    export type Constructors = 'Box';
    export type Interface = Omit<Box, Constructors>;
}
@DartClass
export class Box {
    field;

    constructor() {
    }
    @defaultConstructor
    Box() {
    }
}

export namespace FinalBox {
    export type Constructors = 'FinalBox';
    export type Interface = Omit<FinalBox, Constructors>;
}
@DartClass
export class FinalBox {
    finalField;

    constructor(finalField : any) {
    }
    @defaultConstructor
    FinalBox(finalField : any) {
        this.finalField = finalField;
    }
}

export namespace DynamicReceiver1 {
    export type Constructors = 'DynamicReceiver1';
    export type Interface = Omit<DynamicReceiver1, Constructors>;
}
@DartClass
export class DynamicReceiver1 {
    dynamicallyCalled(x : any) {
    }
    constructor() {
    }
    @defaultConstructor
    DynamicReceiver1() {
    }
}

export namespace DynamicReceiver2 {
    export type Constructors = 'DynamicReceiver2';
    export type Interface = Omit<DynamicReceiver2, Constructors>;
}
@DartClass
export class DynamicReceiver2 {
    dynamicallyCalled(x : any) {
    }
    constructor() {
    }
    @defaultConstructor
    DynamicReceiver2() {
    }
}

export namespace SubFinalBox {
    export type Constructors = FinalBox.Constructors | 'SubFinalBox';
    export type Interface = Omit<SubFinalBox, Constructors>;
}
@DartClass
export class SubFinalBox extends FinalBox {
    constructor(value : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SubFinalBox(value : any) {
        super.FinalBox(value);
    }
}

export class properties {
}
