/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/unused_methods.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var baseClassCall : (object : UsedAsBaseClass) => void = (object : UsedAsBaseClass) : void =>  {
    object.usedInSubclass();
};
export var interfaceCall : (object : UsedAsInterface) => void = (object : UsedAsInterface) : void =>  {
    object.usedInSubclass();
};
export var exactCallA : (object : ClassA) => void = (object : ClassA) : void =>  {
    object.usedInSubclass();
};
export var exactCallB : (object : ClassB) => void = (object : ClassB) : void =>  {
    object.usedInSubclass();
};
export var unusedTopLevel : () => any = () =>  {
    core.print('Unused');
};
export var usedTopLevel : () => any = () =>  {
};
export var main : () => any = () =>  {
    usedTopLevel();
    let a : ClassA = new ClassA();
    exactCallA(a);
    baseClassCall(a);
    interfaceCall(a);
    let b : ClassB = new ClassB();
    exactCallB(b);
    baseClassCall(b);
    interfaceCall(b);
    new InstantiatedButMethodsUnused();
};
export namespace UnusedClass {
    export type Constructors = 'UnusedClass';
    export type Interface = Omit<UnusedClass, Constructors>;
}
@DartClass
export class UnusedClass {
    constructor() {
    }
    @defaultConstructor
    UnusedClass() {
        core.print('Unused');
    }
}

export namespace UsedAsBaseClass {
    export type Constructors = 'UsedAsBaseClass';
    export type Interface = Omit<UsedAsBaseClass, Constructors>;
}
@DartClass
export class UsedAsBaseClass {
    usedInSubclass() : void {
        core.print('Unused');
    }
    calledFromB() : void {
        this.calledFromSubclass();
    }
    calledFromSubclass() : void {
        core.print('Unused');
    }
    constructor() {
    }
    @defaultConstructor
    UsedAsBaseClass() {
    }
}

export namespace UsedAsInterface {
    export type Constructors = 'UsedAsInterface';
    export type Interface = Omit<UsedAsInterface, Constructors>;
}
@DartClass
export class UsedAsInterface {
    usedInSubclass() : void {
        core.print('Unused');
    }
    constructor() {
    }
    @defaultConstructor
    UsedAsInterface() {
    }
}

export namespace InstantiatedButMethodsUnused {
    export type Constructors = 'InstantiatedButMethodsUnused';
    export type Interface = Omit<InstantiatedButMethodsUnused, Constructors>;
}
@DartClass
export class InstantiatedButMethodsUnused {
    usedInSubclass() : void {
        core.print('Unused');
    }
    constructor() {
    }
    @defaultConstructor
    InstantiatedButMethodsUnused() {
    }
}

export namespace ClassA {
    export type Constructors = UsedAsBaseClass.Constructors | 'ClassA';
    export type Interface = Omit<ClassA, Constructors>;
}
@DartClass
@Implements(UsedAsInterface,InstantiatedButMethodsUnused)
export class ClassA extends UsedAsBaseClass implements UsedAsInterface.Interface,InstantiatedButMethodsUnused.Interface {
    usedInSubclass() : void {
        core.print('A');
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClassA() {
    }
}

export namespace ClassB {
    export type Constructors = UsedAsBaseClass.Constructors | 'ClassB';
    export type Interface = Omit<ClassB, Constructors>;
}
@DartClass
@Implements(UsedAsInterface,InstantiatedButMethodsUnused)
export class ClassB extends UsedAsBaseClass implements UsedAsInterface.Interface,InstantiatedButMethodsUnused.Interface {
    usedInSubclass() : void {
        core.print('B');
        this.calledFromB();
    }
    calledFromSubclass() : void {
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClassB() {
    }
}

export class properties {
}
