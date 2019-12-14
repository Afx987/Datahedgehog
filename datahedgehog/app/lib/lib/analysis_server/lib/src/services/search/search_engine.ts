/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/search/search_engine.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace MatchKind {
    export type Constructors = 'MatchKind';
    export type Interface = Omit<MatchKind, Constructors>;
}
@DartClass
export class MatchKind {
    private static __$DECLARATION : MatchKind;
    static get DECLARATION() : MatchKind { 
        if (this.__$DECLARATION===undefined) {
            this.__$DECLARATION = new MatchKind('DECLARATION');
        }
        return this.__$DECLARATION;
    }

    private static __$READ : MatchKind;
    static get READ() : MatchKind { 
        if (this.__$READ===undefined) {
            this.__$READ = new MatchKind('READ');
        }
        return this.__$READ;
    }

    private static __$READ_WRITE : MatchKind;
    static get READ_WRITE() : MatchKind { 
        if (this.__$READ_WRITE===undefined) {
            this.__$READ_WRITE = new MatchKind('READ_WRITE');
        }
        return this.__$READ_WRITE;
    }

    private static __$WRITE : MatchKind;
    static get WRITE() : MatchKind { 
        if (this.__$WRITE===undefined) {
            this.__$WRITE = new MatchKind('WRITE');
        }
        return this.__$WRITE;
    }

    private static __$INVOCATION : MatchKind;
    static get INVOCATION() : MatchKind { 
        if (this.__$INVOCATION===undefined) {
            this.__$INVOCATION = new MatchKind('INVOCATION');
        }
        return this.__$INVOCATION;
    }

    private static __$REFERENCE : MatchKind;
    static get REFERENCE() : MatchKind { 
        if (this.__$REFERENCE===undefined) {
            this.__$REFERENCE = new MatchKind('REFERENCE');
        }
        return this.__$REFERENCE;
    }

    name : string;

    constructor(name : string) {
    }
    @defaultConstructor
    MatchKind(name : string) {
        this.name = name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.name;
    }
}

export namespace SearchEngine {
    export type Constructors = 'SearchEngine';
    export type Interface = Omit<SearchEngine, Constructors>;
}
@DartClass
export class SearchEngine {
    @Abstract
    searchAllSubtypes(type : any) : async.Future<core.DartSet<any>>{ throw 'abstract'}
    @Abstract
    searchMemberDeclarations(name : string) : async.Future<core.DartList<SearchMatch>>{ throw 'abstract'}
    @Abstract
    searchMemberReferences(name : string) : async.Future<core.DartList<SearchMatch>>{ throw 'abstract'}
    @Abstract
    searchReferences(element : any) : async.Future<core.DartList<SearchMatch>>{ throw 'abstract'}
    @Abstract
    searchSubtypes(type : any) : async.Future<core.DartList<SearchMatch>>{ throw 'abstract'}
    @Abstract
    searchTopLevelDeclarations(pattern : string) : async.Future<core.DartList<SearchMatch>>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    SearchEngine() {
    }
}

export namespace SearchMatch {
    export type Constructors = 'SearchMatch';
    export type Interface = Omit<SearchMatch, Constructors>;
}
@DartClass
export class SearchMatch {
    @AbstractProperty
    get element() : any{ throw 'abstract'}
    @AbstractProperty
    get file() : string{ throw 'abstract'}
    @AbstractProperty
    get isQualified() : boolean{ throw 'abstract'}
    @AbstractProperty
    get isResolved() : boolean{ throw 'abstract'}
    @AbstractProperty
    get kind() : MatchKind{ throw 'abstract'}
    @AbstractProperty
    get libraryElement() : any{ throw 'abstract'}
    @AbstractProperty
    get librarySource() : any{ throw 'abstract'}
    @AbstractProperty
    get sourceRange() : any{ throw 'abstract'}
    @AbstractProperty
    get unitSource() : any{ throw 'abstract'}
    static withNotNullElement(matches : core.DartList<SearchMatch>) : core.DartList<SearchMatch> {
        return matches.where((match : any) =>  {
            return match.element != null;
        }).toList();
    }
    constructor() {
    }
    @defaultConstructor
    SearchMatch() {
    }
}

export class properties {
}
