/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/base/syntactic_entity.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace SyntacticEntity {
    export type Constructors = 'SyntacticEntity';
    export type Interface = Omit<SyntacticEntity, Constructors>;
}
@DartClass
export class SyntacticEntity {
    @AbstractProperty
    get end() : number{ throw 'abstract'}
    @AbstractProperty
    get length() : number{ throw 'abstract'}
    @AbstractProperty
    get offset() : number{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    SyntacticEntity() {
    }
}

export class properties {
}
