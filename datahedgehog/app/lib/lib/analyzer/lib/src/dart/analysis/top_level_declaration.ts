/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/analysis/top_level_declaration.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace TopLevelDeclaration {
    export type Constructors = 'TopLevelDeclaration';
    export type Interface = Omit<TopLevelDeclaration, Constructors>;
}
@DartClass
export class TopLevelDeclaration {
    kind : TopLevelDeclarationKind;

    name : string;

    constructor(kind : TopLevelDeclarationKind,name : string) {
    }
    @defaultConstructor
    TopLevelDeclaration(kind : TopLevelDeclarationKind,name : string) {
        this.kind = kind;
        this.name = name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `(${this.kind}, ${this.name})`;
    }
}

export namespace TopLevelDeclarationInSource {
    export type Constructors = 'TopLevelDeclarationInSource';
    export type Interface = Omit<TopLevelDeclarationInSource, Constructors>;
}
@DartClass
export class TopLevelDeclarationInSource {
    source : any;

    declaration : TopLevelDeclaration;

    isExported : boolean;

    constructor(source : any,declaration : TopLevelDeclaration,isExported : boolean) {
    }
    @defaultConstructor
    TopLevelDeclarationInSource(source : any,declaration : TopLevelDeclaration,isExported : boolean) {
        this.source = source;
        this.declaration = declaration;
        this.isExported = isExported;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `(${this.source}, ${this.declaration}, ${this.isExported})`;
    }
}

export enum TopLevelDeclarationKind {
    type,
    function,
    variable
}

export class properties {
}
