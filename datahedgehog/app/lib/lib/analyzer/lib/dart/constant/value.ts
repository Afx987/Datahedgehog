/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/dart/constant/value.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace DartObject {
    export type Constructors = 'DartObject';
    export type Interface = Omit<DartObject, Constructors>;
}
@DartClass
export class DartObject {
    @AbstractProperty
    get hasKnownValue() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isNull() : boolean{ throw 'abstract'}
    @AbstractProperty
    get type() : any{ throw 'abstract'}
    @Abstract
    getField(name : string) : DartObject{ throw 'abstract'}
    @Abstract
    toBoolValue() : boolean{ throw 'abstract'}
    @Abstract
    toDoubleValue() : double{ throw 'abstract'}
    @Abstract
    toIntValue() : number{ throw 'abstract'}
    @Abstract
    toListValue() : core.DartList<DartObject>{ throw 'abstract'}
    @Abstract
    toMapValue() : core.DartMap<DartObject,DartObject>{ throw 'abstract'}
    @Abstract
    toStringValue() : string{ throw 'abstract'}
    @Abstract
    toSymbolValue() : string{ throw 'abstract'}
    @Abstract
    toTypeValue() : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    DartObject() {
    }
}

export class properties {
}
