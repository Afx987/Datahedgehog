/** Library asset:datahedgehog_monitor/lib/lib/_common/lib/util.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Util {
    export type Constructors = 'Util';
    export type Interface = Omit<Util, Constructors>;
}
@DartClass
export class Util {
    get isInDebugMode() : boolean {
        let inDebugMode : boolean = false;
        /* TODO (AssertStatementImpl) : assert (inDebugMode = true); */;
        return inDebugMode;
    }
    constructor() {
    }
    @defaultConstructor
    Util() {
    }
}

export class properties {
}
