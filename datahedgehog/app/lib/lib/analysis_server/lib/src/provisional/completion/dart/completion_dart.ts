/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/provisional/completion/dart/completion_dart.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace DartCompletionContributor {
    export type Constructors = 'DartCompletionContributor';
    export type Interface = Omit<DartCompletionContributor, Constructors>;
}
@DartClass
export class DartCompletionContributor {
    @Abstract
    computeSuggestions(request : DartCompletionRequest) : async.Future<core.DartList<any>>{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    DartCompletionContributor() {
    }
}

export namespace DartCompletionRequest {
    export type Constructors = 'DartCompletionRequest';
    export type Interface = Omit<DartCompletionRequest, Constructors>;
}
@DartClass
export class DartCompletionRequest extends any {
    @AbstractProperty
    get coreLib() : any{ throw 'abstract'}
    @AbstractProperty
    get dotTarget() : any{ throw 'abstract'}
    @AbstractProperty
    get includeIdentifiers() : boolean{ throw 'abstract'}
    @AbstractProperty
    get libraryElement() : any{ throw 'abstract'}
    @AbstractProperty
    get librarySource() : any{ throw 'abstract'}
    @AbstractProperty
    get objectType() : any{ throw 'abstract'}
    @AbstractProperty
    get opType() : any{ throw 'abstract'}
    @AbstractProperty
    get sourceFactory() : any{ throw 'abstract'}
    @AbstractProperty
    get target() : any{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DartCompletionRequest() {
    }
}

export class properties {
    private static __$DART_RELEVANCE_COMMON_USAGE : number;
    static get DART_RELEVANCE_COMMON_USAGE() : number { 
        if (this.__$DART_RELEVANCE_COMMON_USAGE===undefined) {
            this.__$DART_RELEVANCE_COMMON_USAGE = 1200;
        }
        return this.__$DART_RELEVANCE_COMMON_USAGE;
    }
    static set DART_RELEVANCE_COMMON_USAGE(__$value : number)  { 
        this.__$DART_RELEVANCE_COMMON_USAGE = __$value;
    }

    private static __$DART_RELEVANCE_DEFAULT : number;
    static get DART_RELEVANCE_DEFAULT() : number { 
        if (this.__$DART_RELEVANCE_DEFAULT===undefined) {
            this.__$DART_RELEVANCE_DEFAULT = 1000;
        }
        return this.__$DART_RELEVANCE_DEFAULT;
    }
    static set DART_RELEVANCE_DEFAULT(__$value : number)  { 
        this.__$DART_RELEVANCE_DEFAULT = __$value;
    }

    private static __$DART_RELEVANCE_HIGH : number;
    static get DART_RELEVANCE_HIGH() : number { 
        if (this.__$DART_RELEVANCE_HIGH===undefined) {
            this.__$DART_RELEVANCE_HIGH = 2000;
        }
        return this.__$DART_RELEVANCE_HIGH;
    }
    static set DART_RELEVANCE_HIGH(__$value : number)  { 
        this.__$DART_RELEVANCE_HIGH = __$value;
    }

    private static __$DART_RELEVANCE_INCREMENT : number;
    static get DART_RELEVANCE_INCREMENT() : number { 
        if (this.__$DART_RELEVANCE_INCREMENT===undefined) {
            this.__$DART_RELEVANCE_INCREMENT = 100;
        }
        return this.__$DART_RELEVANCE_INCREMENT;
    }
    static set DART_RELEVANCE_INCREMENT(__$value : number)  { 
        this.__$DART_RELEVANCE_INCREMENT = __$value;
    }

    private static __$DART_RELEVANCE_INHERITED_ACCESSOR : number;
    static get DART_RELEVANCE_INHERITED_ACCESSOR() : number { 
        if (this.__$DART_RELEVANCE_INHERITED_ACCESSOR===undefined) {
            this.__$DART_RELEVANCE_INHERITED_ACCESSOR = 1057;
        }
        return this.__$DART_RELEVANCE_INHERITED_ACCESSOR;
    }
    static set DART_RELEVANCE_INHERITED_ACCESSOR(__$value : number)  { 
        this.__$DART_RELEVANCE_INHERITED_ACCESSOR = __$value;
    }

    private static __$DART_RELEVANCE_INHERITED_FIELD : number;
    static get DART_RELEVANCE_INHERITED_FIELD() : number { 
        if (this.__$DART_RELEVANCE_INHERITED_FIELD===undefined) {
            this.__$DART_RELEVANCE_INHERITED_FIELD = 1058;
        }
        return this.__$DART_RELEVANCE_INHERITED_FIELD;
    }
    static set DART_RELEVANCE_INHERITED_FIELD(__$value : number)  { 
        this.__$DART_RELEVANCE_INHERITED_FIELD = __$value;
    }

    private static __$DART_RELEVANCE_INHERITED_METHOD : number;
    static get DART_RELEVANCE_INHERITED_METHOD() : number { 
        if (this.__$DART_RELEVANCE_INHERITED_METHOD===undefined) {
            this.__$DART_RELEVANCE_INHERITED_METHOD = 1057;
        }
        return this.__$DART_RELEVANCE_INHERITED_METHOD;
    }
    static set DART_RELEVANCE_INHERITED_METHOD(__$value : number)  { 
        this.__$DART_RELEVANCE_INHERITED_METHOD = __$value;
    }

    private static __$DART_RELEVANCE_KEYWORD : number;
    static get DART_RELEVANCE_KEYWORD() : number { 
        if (this.__$DART_RELEVANCE_KEYWORD===undefined) {
            this.__$DART_RELEVANCE_KEYWORD = 1055;
        }
        return this.__$DART_RELEVANCE_KEYWORD;
    }
    static set DART_RELEVANCE_KEYWORD(__$value : number)  { 
        this.__$DART_RELEVANCE_KEYWORD = __$value;
    }

    private static __$DART_RELEVANCE_LOCAL_ACCESSOR : number;
    static get DART_RELEVANCE_LOCAL_ACCESSOR() : number { 
        if (this.__$DART_RELEVANCE_LOCAL_ACCESSOR===undefined) {
            this.__$DART_RELEVANCE_LOCAL_ACCESSOR = 1057;
        }
        return this.__$DART_RELEVANCE_LOCAL_ACCESSOR;
    }
    static set DART_RELEVANCE_LOCAL_ACCESSOR(__$value : number)  { 
        this.__$DART_RELEVANCE_LOCAL_ACCESSOR = __$value;
    }

    private static __$DART_RELEVANCE_LOCAL_FIELD : number;
    static get DART_RELEVANCE_LOCAL_FIELD() : number { 
        if (this.__$DART_RELEVANCE_LOCAL_FIELD===undefined) {
            this.__$DART_RELEVANCE_LOCAL_FIELD = 1058;
        }
        return this.__$DART_RELEVANCE_LOCAL_FIELD;
    }
    static set DART_RELEVANCE_LOCAL_FIELD(__$value : number)  { 
        this.__$DART_RELEVANCE_LOCAL_FIELD = __$value;
    }

    private static __$DART_RELEVANCE_LOCAL_FUNCTION : number;
    static get DART_RELEVANCE_LOCAL_FUNCTION() : number { 
        if (this.__$DART_RELEVANCE_LOCAL_FUNCTION===undefined) {
            this.__$DART_RELEVANCE_LOCAL_FUNCTION = 1056;
        }
        return this.__$DART_RELEVANCE_LOCAL_FUNCTION;
    }
    static set DART_RELEVANCE_LOCAL_FUNCTION(__$value : number)  { 
        this.__$DART_RELEVANCE_LOCAL_FUNCTION = __$value;
    }

    private static __$DART_RELEVANCE_LOCAL_METHOD : number;
    static get DART_RELEVANCE_LOCAL_METHOD() : number { 
        if (this.__$DART_RELEVANCE_LOCAL_METHOD===undefined) {
            this.__$DART_RELEVANCE_LOCAL_METHOD = 1057;
        }
        return this.__$DART_RELEVANCE_LOCAL_METHOD;
    }
    static set DART_RELEVANCE_LOCAL_METHOD(__$value : number)  { 
        this.__$DART_RELEVANCE_LOCAL_METHOD = __$value;
    }

    private static __$DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE : number;
    static get DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE() : number { 
        if (this.__$DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE===undefined) {
            this.__$DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE = 1056;
        }
        return this.__$DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE;
    }
    static set DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE(__$value : number)  { 
        this.__$DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE = __$value;
    }

    private static __$DART_RELEVANCE_LOCAL_VARIABLE : number;
    static get DART_RELEVANCE_LOCAL_VARIABLE() : number { 
        if (this.__$DART_RELEVANCE_LOCAL_VARIABLE===undefined) {
            this.__$DART_RELEVANCE_LOCAL_VARIABLE = 1059;
        }
        return this.__$DART_RELEVANCE_LOCAL_VARIABLE;
    }
    static set DART_RELEVANCE_LOCAL_VARIABLE(__$value : number)  { 
        this.__$DART_RELEVANCE_LOCAL_VARIABLE = __$value;
    }

    private static __$DART_RELEVANCE_LOW : number;
    static get DART_RELEVANCE_LOW() : number { 
        if (this.__$DART_RELEVANCE_LOW===undefined) {
            this.__$DART_RELEVANCE_LOW = 500;
        }
        return this.__$DART_RELEVANCE_LOW;
    }
    static set DART_RELEVANCE_LOW(__$value : number)  { 
        this.__$DART_RELEVANCE_LOW = __$value;
    }

    private static __$DART_RELEVANCE_NAMED_PARAMETER : number;
    static get DART_RELEVANCE_NAMED_PARAMETER() : number { 
        if (this.__$DART_RELEVANCE_NAMED_PARAMETER===undefined) {
            this.__$DART_RELEVANCE_NAMED_PARAMETER = 1060;
        }
        return this.__$DART_RELEVANCE_NAMED_PARAMETER;
    }
    static set DART_RELEVANCE_NAMED_PARAMETER(__$value : number)  { 
        this.__$DART_RELEVANCE_NAMED_PARAMETER = __$value;
    }

    private static __$DART_RELEVANCE_PARAMETER : number;
    static get DART_RELEVANCE_PARAMETER() : number { 
        if (this.__$DART_RELEVANCE_PARAMETER===undefined) {
            this.__$DART_RELEVANCE_PARAMETER = 1059;
        }
        return this.__$DART_RELEVANCE_PARAMETER;
    }
    static set DART_RELEVANCE_PARAMETER(__$value : number)  { 
        this.__$DART_RELEVANCE_PARAMETER = __$value;
    }

}
