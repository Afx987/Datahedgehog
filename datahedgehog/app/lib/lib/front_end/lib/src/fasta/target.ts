/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/target.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./ticker";
import * as lib4 from "@dart2ts/dart/uri";

export namespace Target {
    export type Constructors = 'Target';
    export type Interface = Omit<Target, Constructors>;
}
@DartClass
export class Target {
    ticker : lib3.Ticker;

    constructor(ticker : lib3.Ticker) {
    }
    @defaultConstructor
    Target(ticker : lib3.Ticker) {
        this.ticker = ticker;
    }
    @Abstract
    read(uri : lib4.Uri) : void{ throw 'abstract'}
    @Abstract
    buildOutlines() : async.Future<any>{ throw 'abstract'}
    @Abstract
    buildProgram() : async.Future<any>{ throw 'abstract'}
}

export class properties {
}
