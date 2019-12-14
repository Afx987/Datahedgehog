/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/resolved_ast_generator.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "./compiler_options";

export var resolvedAstsFor : (sources : core.DartList<lib3.Uri>,options : lib4.CompilerOptions) => async.Future<ResolvedAsts> = (sources : core.DartList<lib3.Uri>,options : lib4.CompilerOptions) : async.Future<ResolvedAsts> =>  {
    return throw new core.UnimplementedError();
};
export namespace ResolvedAsts {
    export type Constructors = 'ResolvedAsts';
    export type Interface = Omit<ResolvedAsts, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:core',type : 'deprecated',value : {
        arguments : [],namedArguments : {
        }}})
export class ResolvedAsts {
    @AbstractProperty
    get compilationUnits() : core.DartList<core.DartList<any>>{ throw 'abstract'}
    @Abstract
    getOriginatingSummary(element : any) : string{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ResolvedAsts() {
    }
}

export class properties {
}
