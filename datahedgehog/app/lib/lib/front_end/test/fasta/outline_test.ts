/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/fasta/outline_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./testing/suite";

export var createContext : (suite : any,environment : core.DartMap<string,string>) => async.Future<lib3.FastaContext> = (suite : any,environment : core.DartMap<string,string>) : async.Future<lib3.FastaContext> =>  {
    return lib3.FastaContext.create(suite,environment);
};
export var main : (arguments : core.DartList<string>) => any = (arguments : core.DartList<string>) =>  {
    return runMe(arguments,createContext,"testing.json");
};
export class properties {
}
