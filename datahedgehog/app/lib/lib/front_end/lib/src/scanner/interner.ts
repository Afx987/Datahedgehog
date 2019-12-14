/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/scanner/interner.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Interner {
    export type Constructors = 'Interner';
    export type Interface = Omit<Interner, Constructors>;
}
@DartClass
export class Interner {
    @Abstract
    intern(string : string) : string{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Interner() {
    }
}

export namespace NullInterner {
    export type Constructors = 'NullInterner';
    export type Interface = Omit<NullInterner, Constructors>;
}
@DartClass
@Implements(Interner)
export class NullInterner implements Interner.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    intern(string : string) : string {
        return string;
    }
    constructor() {
    }
    @defaultConstructor
    NullInterner() {
    }
}

export class properties {
}
