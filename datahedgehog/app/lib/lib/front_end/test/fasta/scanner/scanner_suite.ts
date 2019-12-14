/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/fasta/scanner/scanner_suite.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var createContext : (suite : any,environment : core.DartMap<string,string>) => any = (suite : any,environment : core.DartMap<string,string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    return new ScannerContext();
})());
export var main : (arguments : core.DartList<string>) => any = (arguments : core.DartList<string>) =>  {
    return runMe(arguments,createContext,"../testing.json");
};
export namespace ScannerContext {
    export type Constructors = 'ScannerContext';
    export type Interface = Omit<ScannerContext, Constructors>;
}
@DartClass
export class ScannerContext extends any {
    steps : core.DartList<any>;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScannerContext() {
        this.steps = new core.DartList.literal<any>(new bare.createInstance(any,null),new bare.createInstance(any,null));
    }
}

export class properties {
}
