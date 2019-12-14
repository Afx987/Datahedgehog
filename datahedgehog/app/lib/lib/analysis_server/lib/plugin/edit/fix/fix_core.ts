/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/plugin/edit/fix/fix_core.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Fix {
    export type Constructors = 'Fix';
    export type Interface = Omit<Fix, Constructors>;
}
@DartClass
export class Fix {
    private static __$EMPTY_LIST : core.DartList<Fix>;
    static get EMPTY_LIST() : core.DartList<Fix> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<Fix>();
        }
        return this.__$EMPTY_LIST;
    }

    private static __$SORT_BY_RELEVANCE : <T>(a : Fix,b : Fix) => number;
    static get SORT_BY_RELEVANCE() : <T>(a : Fix,b : Fix) => number { 
        if (this.__$SORT_BY_RELEVANCE===undefined) {
            this.__$SORT_BY_RELEVANCE = (firstFix : Fix,secondFix : Fix) =>  {
                return firstFix.kind.relevance - secondFix.kind.relevance;
            };
        }
        return this.__$SORT_BY_RELEVANCE;
    }
    static set SORT_BY_RELEVANCE(__$value : <T>(a : Fix,b : Fix) => number)  { 
        this.__$SORT_BY_RELEVANCE = __$value;
    }

    kind : FixKind;

    change : any;

    constructor(kind : FixKind,change : any) {
    }
    @defaultConstructor
    Fix(kind : FixKind,change : any) {
        this.kind = kind;
        this.change = change;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `Fix(kind=${this.kind}, change=${this.change})`;
    }
}

export namespace FixContext {
    export type Constructors = 'FixContext';
    export type Interface = Omit<FixContext, Constructors>;
}
@DartClass
export class FixContext {
    @AbstractProperty
    get analysisDriver() : any{ throw 'abstract'}
    @AbstractProperty
    get error() : any{ throw 'abstract'}
    @AbstractProperty
    get resourceProvider() : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    FixContext() {
    }
}

export namespace FixContributor {
    export type Constructors = 'FixContributor';
    export type Interface = Omit<FixContributor, Constructors>;
}
@DartClass
export class FixContributor {
    @Abstract
    computeFixes(context : FixContext) : async.Future<core.DartList<Fix>>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    FixContributor() {
    }
}

export namespace FixKind {
    export type Constructors = 'FixKind';
    export type Interface = Omit<FixKind, Constructors>;
}
@DartClass
export class FixKind {
    name : string;

    relevance : number;

    message : string;

    constructor(name : string,relevance : number,message : string) {
    }
    @defaultConstructor
    FixKind(name : string,relevance : number,message : string) {
        this.name = name;
        this.relevance = relevance;
        this.message = message;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.name;
    }
}

export class properties {
}
