/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/provisional/completion/completion_core.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace AbortCompletion {
    export type Constructors = 'AbortCompletion';
    export type Interface = Omit<AbortCompletion, Constructors>;
}
@DartClass
export class AbortCompletion {
    constructor() {
    }
    @defaultConstructor
    AbortCompletion() {
    }
}

export namespace CompletionContributor {
    export type Constructors = 'CompletionContributor';
    export type Interface = Omit<CompletionContributor, Constructors>;
}
@DartClass
export class CompletionContributor {
    @Abstract
    computeSuggestions(request : CompletionRequest) : async.Future<core.DartList<any>>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    CompletionContributor() {
    }
}

export namespace CompletionRequest {
    export type Constructors = 'CompletionRequest';
    export type Interface = Omit<CompletionRequest, Constructors>;
}
@DartClass
export class CompletionRequest {
    @AbstractProperty
    get ideOptions() : any{ throw 'abstract'}
    @AbstractProperty
    get offset() : number{ throw 'abstract'}
    @AbstractProperty
    get resourceProvider() : any{ throw 'abstract'}
    @AbstractProperty
    get result() : any{ throw 'abstract'}
    @AbstractProperty
    get source() : any{ throw 'abstract'}
    @AbstractProperty
    get sourceContents() : string{ throw 'abstract'}
    @Abstract
    checkAborted() : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    CompletionRequest() {
    }
}

export class properties {
    private static __$EMPTY_LIST;
    static get EMPTY_LIST() { 
        if (this.__$EMPTY_LIST===undefined) {
            this.__$EMPTY_LIST = new core.DartList.literal<any>();
        }
        return this.__$EMPTY_LIST;
    }
    static set EMPTY_LIST(__$value : any)  { 
        this.__$EMPTY_LIST = __$value;
    }

}
