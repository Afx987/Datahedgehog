/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/testing/scanner_chain.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../scanner/io";
import * as lib4 from "./../scanner";

export namespace Read {
    export type Constructors = 'Read';
    export type Interface = Omit<Read, Constructors>;
}
@DartClass
export class Read extends any {
    constructor() {
    }
    @defaultConstructor
    Read() {
    }
    get name() : string {
        return "read";
    }
    run(input : any,context : any) : any { 
        return new async.Future.fromPromise(( async () =>  {
            return pass(await lib3.readBytesFromFile(input.uri));
        } )());
    }

}

export namespace Scan {
    export type Constructors = 'Scan';
    export type Interface = Omit<Scan, Constructors>;
}
@DartClass
export class Scan extends any {
    constructor() {
    }
    @defaultConstructor
    Scan() {
    }
    get name() : string {
        return "scan";
    }
    run(bytes : core.DartList<number>,context : any) : any { 
        return new async.Future.fromPromise(( async () =>  {
            return pass(lib4.scan(bytes));
        } )());
    }

}

export class properties {
}
