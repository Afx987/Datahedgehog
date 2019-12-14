/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/provisional/refactoring/refactoring_core.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Refactoring {
    export type Constructors = 'Refactoring';
    export type Interface = Omit<Refactoring, Constructors>;
}
@DartClass
export class Refactoring {
    @AbstractProperty
    get potentialEditIds() : core.DartList<string>{ throw 'abstract'}
    @AbstractProperty
    get refactoringName() : string{ throw 'abstract'}
    @Abstract
    checkAllConditions() : async.Future<RefactoringStatus>{ throw 'abstract'}
    @Abstract
    checkFinalConditions() : async.Future<RefactoringStatus>{ throw 'abstract'}
    @Abstract
    checkInitialConditions() : async.Future<RefactoringStatus>{ throw 'abstract'}
    @Abstract
    createChange() : async.Future<any>{ throw 'abstract'}
    @Abstract
    requiresPreview() : boolean{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Refactoring() {
    }
}

export namespace RefactoringContributor {
    export type Constructors = 'RefactoringContributor';
    export type Interface = Omit<RefactoringContributor, Constructors>;
}
@DartClass
export class RefactoringContributor {
    @Abstract
    createRefactoring(context : any,kind : RefactoringKind,source : any,offset : number,length : number) : Refactoring{ throw 'abstract'}
    @Abstract
    getAvailableRefactorings(context : any,source : any,offset : number,length : number) : core.DartList<RefactoringKind>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    RefactoringContributor() {
    }
}

export namespace RefactoringKind {
    export type Constructors = never;
    export type Interface = Omit<RefactoringKind, Constructors>;
}
@DartClass
export class RefactoringKind {
    constructor(name : string,requiresOptions : boolean) {
    }
    @defaultFactory
    static $RefactoringKind(name : string,requiresOptions : boolean) : RefactoringKind {
        return null;
    }
    @AbstractProperty
    get requiresOptions() : boolean{ throw 'abstract'}
}

export namespace RefactoringStatus {
    export type Constructors = 'RefactoringStatus';
    export type Interface = Omit<RefactoringStatus, Constructors>;
}
@DartClass
export class RefactoringStatus {
    constructor() {
    }
    @defaultConstructor
    RefactoringStatus() {
    }
}

export class properties {
}
