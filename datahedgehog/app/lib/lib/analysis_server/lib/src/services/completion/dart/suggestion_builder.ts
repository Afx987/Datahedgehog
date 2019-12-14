/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/suggestion_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/path";
import * as lib4 from "@dart2ts.packages/analysis_server/lib/src/protocol_server";

export var createSuggestion : (element : any,options : any,_namedArguments? : {completion? : string,kind? : any,relevance? : number,importForSource? : any}) => any = (element : any,options : any,_namedArguments? : {completion? : string,kind? : any,relevance? : number,importForSource? : any}) : any =>  {
    let {completion,kind,relevance,importForSource} = Object.assign({
        "kind" : CompletionSuggestionKind.INVOCATION,
        "relevance" : DART_RELEVANCE_DEFAULT}, _namedArguments );
    if (op(Op.EQUALS,element,null)) {
        return null;
    }
    if (is(element, any) && element.isOperator) {
        return null;
    }
    if (completion == null) {
        completion = element.displayName;
    }
    let isDeprecated : boolean = element.isDeprecated;
    let suggestion : any = new bare.createInstance(any,null,kind,isDeprecated ? DART_RELEVANCE_LOW : relevance,completion,new core.DartString(completion).length,0,isDeprecated,false);
    let doc : string = removeDartDocDelimiters(element.documentationComment);
    suggestion.docComplete = doc;
    suggestion.docSummary = getDartDocSummary(doc);
    suggestion.element = null /*topLevl*/.convertElement(element);
    let enclosingElement : any = element.enclosingElement;
    if (is(enclosingElement, any)) {
        suggestion.declaringType = enclosingElement.displayName;
    }
    suggestion.returnType = getReturnTypeString(element);
    if (is(element, any) && isNot(element, any)) {
        suggestion.parameterNames = element.parameters.map((parameter : any) =>  {
            return parameter.name;
        }).toList();
        suggestion.parameterTypes = element.parameters.map((parameter : any) =>  {
            let paramType : any = parameter.type;
            return paramType != null ? paramType.displayName : 'var';
        }).toList();
        let requiredParameters : core.DartIterable<any> = element.parameters.where((param : any) =>  {
            return op(Op.EQUALS,param.parameterKind,ParameterKind.REQUIRED);
        });
        suggestion.requiredParameterCount = requiredParameters.length;
        let namedParameters : core.DartIterable<any> = element.parameters.where((param : any) =>  {
            return op(Op.EQUALS,param.parameterKind,ParameterKind.NAMED);
        });
        suggestion.hasNamedParameters = namedParameters.isNotEmpty;
        addDefaultArgDetails(suggestion,element,requiredParameters,namedParameters,options);
    }
    if (importForSource != null) {
        let srcPath : string = lib3.dirname(importForSource.fullName);
        let libElem : any = element.library;
        if (libElem != null) {
            let libSource : any = libElem.source;
            if (libSource != null) {
                let uriKind : any = libSource.uriKind;
                if (op(Op.EQUALS,uriKind,UriKind.DART_URI)) {
                    suggestion.importUri = libSource.uri.toString();
                }else if (op(Op.EQUALS,uriKind,UriKind.PACKAGE_URI)) {
                    suggestion.importUri = libSource.uri.toString();
                }else if (op(Op.EQUALS,uriKind,UriKind.FILE_URI) && op(Op.EQUALS,element.source.uriKind,UriKind.FILE_URI)) {
                    try {
                        suggestion.importUri = lib3.relative(libSource.fullName,{
                            from : srcPath});
                    } catch (__error__) {

                        {
                            let _ = __error__;
                        }
                    }
                }
            }
        }
        if (op(Op.EQUALS,suggestion.importUri,null)) {
            return null;
        }
    }
    return suggestion;
};
export namespace ElementSuggestionBuilder {
    export type Constructors = 'ElementSuggestionBuilder';
    export type Interface = Omit<ElementSuggestionBuilder, Constructors>;
}
@DartClass
export class ElementSuggestionBuilder {
    suggestions : core.DartList<any>;

    _completions : core.DartSet<string>;

    _syntheticMap : core.DartMap<string,any>;

    @AbstractProperty
    get containingLibrary() : any{ throw 'abstract'}
    @AbstractProperty
    get kind() : any{ throw 'abstract'}
    addSuggestion(element : any,ideOptions : any,_namedArguments? : {prefix? : string,relevance? : number}) : void {
        let {prefix,relevance} = Object.assign({
            "relevance" : DART_RELEVANCE_DEFAULT}, _namedArguments );
        if (element.isPrivate) {
            if (element.library != this.containingLibrary) {
                return;
            }
        }
        let completion : string = element.displayName;
        if (prefix != null && new core.DartString(prefix).length > 0) {
            if (completion == null || new core.DartString(completion).length <= 0) {
                completion = prefix;
            }else {
                completion = `${prefix}.${completion}`;
            }
        }
        if (completion == null || new core.DartString(completion).length <= 0) {
            return;
        }
        let suggestion : any = createSuggestion(element,ideOptions,{
            completion : completion,kind : this.kind,relevance : relevance});
        if (suggestion != null) {
            if (element.isSynthetic && is(element, any)) {
                let cacheKey : string;
                if (element.isGetter) {
                    cacheKey = element.name;
                }
                if (element.isSetter) {
                    cacheKey = element.name;
                    cacheKey = new core.DartString(cacheKey).substring(0,new core.DartString(cacheKey).length - 1);
                }
                if (cacheKey != null) {
                    let existingSuggestion : any = this._syntheticMap.get(cacheKey);
                    if (existingSuggestion != null) {
                        let getter : any = element.isGetter ? suggestion : existingSuggestion;
                        let elemKind : any = is(element.enclosingElement, any) ? lib4.ElementKind.FIELD : lib4.ElementKind.TOP_LEVEL_VARIABLE;
                        existingSuggestion.element = new bare.createInstance(any,null,elemKind,existingSuggestion.element.name,existingSuggestion.element.flags,{
                            location : getter.element.location,typeParameters : getter.element.typeParameters,parameters : null,returnType : getter.returnType});
                        return;
                    }
                    this._syntheticMap.set(cacheKey,suggestion);
                }
            }
            if (this._completions.add(suggestion.completion)) {
                this.suggestions.add(suggestion);
            }
        }
    }
    constructor() {
    }
    @defaultConstructor
    ElementSuggestionBuilder() {
        this.suggestions = new core.DartList.literal<any>();
        this._completions = new core.DartSet<string>();
        this._syntheticMap = new core.DartMap.literal([
        ]);
    }
}

export namespace LibraryElementSuggestionBuilder {
    export type Constructors = 'LibraryElementSuggestionBuilder';
    export type Interface = Omit<LibraryElementSuggestionBuilder, Constructors>;
}
@DartClass
@With(ElementSuggestionBuilder)
export class LibraryElementSuggestionBuilder extends any implements ElementSuggestionBuilder.Interface {
    @Abstract
    addSuggestion(element : any,ideOptions : any,_namedArguments? : {prefix? : string,relevance? : number}) : void {
        let {prefix,relevance} = Object.assign({
            "relevance" : DART_RELEVANCE_DEFAULT}, _namedArguments );
        throw 'from mixin';
    }
    containingLibrary : any;

    kind : any;

    typesOnly : boolean;

    instCreation : boolean;

    options : any;

    constructor(containingLibrary : any,kind : any,typesOnly : boolean,instCreation : boolean,options : any) {
    }
    @defaultConstructor
    LibraryElementSuggestionBuilder(containingLibrary : any,kind : any,typesOnly : boolean,instCreation : boolean,options : any) {
        this.containingLibrary = containingLibrary;
        this.kind = kind;
        this.typesOnly = typesOnly;
        this.instCreation = instCreation;
        this.options = options;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassElement(element : any) {
        if (this.instCreation) {
            element.visitChildren(this);
        }else {
            this.addSuggestion(element,this.options);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCompilationUnitElement(element : any) {
        element.visitChildren(this);
        let containingLibrary : any = element.library;
        if (containingLibrary != null) {
            for(let lib of containingLibrary.exportedLibraries) {
                lib.visitChildren(this);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorElement(element : any) {
        if (this.instCreation) {
            let classElem : any = element.enclosingElement;
            if (classElem != null) {
                let prefix : string = classElem.name;
                if (prefix != null && new core.DartString(prefix).length > 0) {
                    this.addSuggestion(element,this.options,{
                        prefix : prefix});
                }
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitElement(element : any) {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionElement(element : any) {
        if (!this.typesOnly) {
            let relevance : number = op(Op.EQUALS,element.library,this.containingLibrary) ? DART_RELEVANCE_LOCAL_FUNCTION : DART_RELEVANCE_DEFAULT;
            this.addSuggestion(element,this.options,{
                relevance : relevance});
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypeAliasElement(element : any) {
        if (!this.instCreation) {
            this.addSuggestion(element,this.options);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTopLevelVariableElement(element : any) {
        if (!this.typesOnly) {
            let relevance : number = op(Op.EQUALS,element.library,this.containingLibrary) ? DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE : DART_RELEVANCE_DEFAULT;
            this.addSuggestion(element,this.options,{
                relevance : relevance});
        }
    }
}

export class properties {
    private static __$DYNAMIC : string;
    static get DYNAMIC() : string { 
        if (this.__$DYNAMIC===undefined) {
            this.__$DYNAMIC = 'dynamic';
        }
        return this.__$DYNAMIC;
    }
    static set DYNAMIC(__$value : string)  { 
        this.__$DYNAMIC = __$value;
    }

}
