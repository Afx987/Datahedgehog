/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/compilation_error.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/source_span/lib/src/span";

export namespace CompilationError {
    export type Constructors = 'CompilationError';
    export type Interface = Omit<CompilationError, Constructors>;
}
@DartClass
export class CompilationError {
    @AbstractProperty
    get correction() : string{ throw 'abstract'}
    @AbstractProperty
    get span() : lib3.SourceSpan{ throw 'abstract'}
    @AbstractProperty
    get message() : string{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    CompilationError() {
    }
}

export class properties {
}
