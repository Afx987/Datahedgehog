/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/flags.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace TransformerFlag {
    export type Constructors = 'TransformerFlag';
    export type Interface = Omit<TransformerFlag, Constructors>;
}
@DartClass
export class TransformerFlag {
    private static __$superCalls : number;
    static get superCalls() : number { 
        if (this.__$superCalls===undefined) {
            this.__$superCalls = 1 << 0;
        }
        return this.__$superCalls;
    }

    private static __$seenByVerifier : number;
    static get seenByVerifier() : number { 
        if (this.__$seenByVerifier===undefined) {
            this.__$seenByVerifier = 1 << 1;
        }
        return this.__$seenByVerifier;
    }

    constructor() {
    }
    @defaultConstructor
    TransformerFlag() {
    }
}

export class properties {
}
