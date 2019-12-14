/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/summary/base.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Id {
    export type Constructors = 'Id';
    export type Interface = Omit<Id, Constructors>;
}
@DartClass
export class Id {
    value : number;

    constructor(value : number) {
    }
    @defaultConstructor
    Id(value : number) {
        this.value = value;
    }
}

export namespace SummaryClass {
    export type Constructors = 'SummaryClass';
    export type Interface = Omit<SummaryClass, Constructors>;
}
@DartClass
export class SummaryClass {
    @Abstract
    toJson() : core.DartMap<string,core.DartObject>{ throw 'abstract'}
    @Abstract
    toMap() : core.DartMap<string,core.DartObject>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    SummaryClass() {
    }
}

export namespace TopLevel {
    export type Constructors = 'TopLevel';
    export type Interface = Omit<TopLevel, Constructors>;
}
@DartClass
export class TopLevel {
    fileIdentifier : string;

    constructor(fileIdentifier? : string) {
    }
    @defaultConstructor
    TopLevel(fileIdentifier? : string) {
        this.fileIdentifier = fileIdentifier;
    }
}

export class properties {
}
