/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/plugin/edit/assist/assist_core.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Assist {
    export type Constructors = 'Assist';
    export type Interface = Omit<Assist, Constructors>;
}
@DartClass
export class Assist {
    private static __$EMPTY_LIST : core.DartList<Assist>;
    static get EMPTY_LIST() : core.DartList<Assist> { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<Assist>();
        }
        return this.__$EMPTY_LIST;
    }

    private static __$SORT_BY_RELEVANCE : <T>(a : Assist,b : Assist) => number;
    static get SORT_BY_RELEVANCE() : <T>(a : Assist,b : Assist) => number { 
        if (this.__$SORT_BY_RELEVANCE===undefined) {
            this.__$SORT_BY_RELEVANCE = (firstAssist : Assist,secondAssist : Assist) =>  {
                return firstAssist.kind.relevance - secondAssist.kind.relevance;
            };
        }
        return this.__$SORT_BY_RELEVANCE;
    }
    static set SORT_BY_RELEVANCE(__$value : <T>(a : Assist,b : Assist) => number)  { 
        this.__$SORT_BY_RELEVANCE = __$value;
    }

    kind : AssistKind;

    change : any;

    constructor(kind : AssistKind,change : any) {
    }
    @defaultConstructor
    Assist(kind : AssistKind,change : any) {
        this.kind = kind;
        this.change = change;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `Assist(kind=${this.kind}, change=${this.change})`;
    }
}

export namespace AssistContext {
    export type Constructors = 'AssistContext';
    export type Interface = Omit<AssistContext, Constructors>;
}
@DartClass
export class AssistContext {
    @AbstractProperty
    get analysisDriver() : any{ throw 'abstract'}
    @AbstractProperty
    get selectionLength() : number{ throw 'abstract'}
    @AbstractProperty
    get selectionOffset() : number{ throw 'abstract'}
    @AbstractProperty
    get source() : any{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    AssistContext() {
    }
}

export namespace AssistContributor {
    export type Constructors = 'AssistContributor';
    export type Interface = Omit<AssistContributor, Constructors>;
}
@DartClass
export class AssistContributor {
    @Abstract
    computeAssists(context : AssistContext) : async.Future<core.DartList<Assist>>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    AssistContributor() {
    }
}

export namespace AssistKind {
    export type Constructors = 'AssistKind';
    export type Interface = Omit<AssistKind, Constructors>;
}
@DartClass
export class AssistKind {
    name : string;

    relevance : number;

    message : string;

    constructor(name : string,relevance : number,message : string) {
    }
    @defaultConstructor
    AssistKind(name : string,relevance : number,message : string) {
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
