/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/simple_error.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/source_span/lib/src/span";

export namespace SimpleError {
    export type Constructors = 'SimpleError';
    export type Interface = Omit<SimpleError, Constructors>;
}
@DartClass
@Implements(any)
export class SimpleError implements any.Interface {
    get correction() : string {
        return null;
    }
    get span() : lib3.SourceSpan {
        return null;
    }
    message : string;

    constructor(message : string) {
    }
    @defaultConstructor
    SimpleError(message : string) {
        this.message = message;
    }
}

export class properties {
}
