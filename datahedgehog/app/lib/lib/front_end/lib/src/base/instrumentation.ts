/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/base/instrumentation.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export namespace Instrumentation {
    export type Constructors = 'Instrumentation';
    export type Interface = Omit<Instrumentation, Constructors>;
}
@DartClass
export class Instrumentation {
    @Abstract
    record(uri : lib3.Uri,offset : number,property : string,value : InstrumentationValue) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Instrumentation() {
    }
}

export namespace InstrumentationValue {
    export type Constructors = 'InstrumentationValue';
    export type Interface = Omit<InstrumentationValue, Constructors>;
}
@DartClass
export class InstrumentationValue {
    constructor() {
    }
    @defaultConstructor
    InstrumentationValue() {
    }
    matches(description : string) : boolean {
        return description == this.toString();
    }
}

export namespace InstrumentationValueForProcedure {
    export type Constructors = InstrumentationValue.Constructors | 'InstrumentationValueForProcedure';
    export type Interface = Omit<InstrumentationValueForProcedure, Constructors>;
}
@DartClass
export class InstrumentationValueForProcedure extends InstrumentationValue {
    procedure : any;

    constructor(procedure : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InstrumentationValueForProcedure(procedure : any) {
        this.procedure = procedure;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return new core.DartString(new core.DartString(new core.DartString(this.procedure.toString()).replaceAll('dart.core::','')).replaceAll('dart.async::','')).replaceAll('test::','');
    }
}

export namespace InstrumentationValueForType {
    export type Constructors = InstrumentationValue.Constructors | 'InstrumentationValueForType';
    export type Interface = Omit<InstrumentationValueForType, Constructors>;
}
@DartClass
export class InstrumentationValueForType extends InstrumentationValue {
    type : any;

    constructor(type : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InstrumentationValueForType(type : any) {
        this.type = type;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return new core.DartString(new core.DartString(new core.DartString(new core.DartString(this.type.toString()).replaceAll('→','->')).replaceAll('dart.core::','')).replaceAll('dart.async::','')).replaceAll('test::','');
    }
}

export namespace InstrumentationValueForTypeArgs {
    export type Constructors = InstrumentationValue.Constructors | 'InstrumentationValueForTypeArgs';
    export type Interface = Omit<InstrumentationValueForTypeArgs, Constructors>;
}
@DartClass
export class InstrumentationValueForTypeArgs extends InstrumentationValue {
    types : core.DartList<any>;

    constructor(types : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InstrumentationValueForTypeArgs(types : core.DartList<any>) {
        this.types = types;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.types.map((type : any) =>  {
            return new InstrumentationValueForType(type).toString();
        }).join(', ');
    }
}

export namespace InstrumentationValueLiteral {
    export type Constructors = InstrumentationValue.Constructors | 'InstrumentationValueLiteral';
    export type Interface = Omit<InstrumentationValueLiteral, Constructors>;
}
@DartClass
export class InstrumentationValueLiteral extends InstrumentationValue {
    value : string;

    constructor(value : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InstrumentationValueLiteral(value : string) {
        this.value = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.value;
    }
}

export class properties {
}
