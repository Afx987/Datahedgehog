/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/analysis/ast_provider_context.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace AstProviderForContext {
    export type Constructors = 'AstProviderForContext';
    export type Interface = Omit<AstProviderForContext, Constructors>;
}
@DartClass
export class AstProviderForContext extends any {
    context : any;

    constructor(context : any) {
    }
    @defaultConstructor
    AstProviderForContext(context : any) {
        this.context = context;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getParsedUnitForElement(element : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            return this.context.parseCompilationUnit(element.source);
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getResolvedUnitForElement(element : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            return this.context.getResolvedCompilationUnit2(element.source,element.librarySource);
        } )());
    }

}

export class properties {
}
