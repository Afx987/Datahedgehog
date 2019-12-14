/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/element/ast_provider.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace AstProvider {
    export type Constructors = 'AstProvider';
    export type Interface = Omit<AstProvider, Constructors>;
}
@DartClass
export class AstProvider {
    @Abstract
    getParsedNameForElement(element : any) : async.Future<any>{ throw 'abstract'}
    @Abstract
    getParsedUnitForElement(element : any) : async.Future<any>{ throw 'abstract'}
    @Abstract
    getResolvedNameForElement(element : any) : async.Future<any>{ throw 'abstract'}
    @Abstract
    getResolvedUnitForElement(element : any) : async.Future<any>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    AstProvider() {
    }
}

export class properties {
}
