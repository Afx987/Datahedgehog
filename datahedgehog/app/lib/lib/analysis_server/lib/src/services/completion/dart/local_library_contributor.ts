/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/local_library_contributor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace LibraryElementSuggestionBuilder {
    export type Constructors = 'LibraryElementSuggestionBuilder';
    export type Interface = Omit<LibraryElementSuggestionBuilder, Constructors>;
}
@DartClass
@With(any)
export class LibraryElementSuggestionBuilder extends any implements any.Interface {
    request : any;

    optype : any;

    kind : any;

    prefix : string;

    showNames : core.DartList<string>;

    hiddenNames : core.DartList<string>;

    constructor(request : any,optype : any,prefix? : string) {
    }
    @defaultConstructor
    LibraryElementSuggestionBuilder(request : any,optype : any,prefix? : string) {
        this.request = request;
        this.optype = optype;
        this.prefix = prefix;
        this.kind = this.request.target.isFunctionalArgument() ? CompletionSuggestionKind.IDENTIFIER : this.optype.suggestKind;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get containingLibrary() : any {
        return this.request.libraryElement;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassElement(element : any) : void {
        if (this.optype.includeTypeNameSuggestions) {
            let relevance : number = this.optype.typeNameSuggestionsFilter(element.type,DART_RELEVANCE_DEFAULT);
            if (relevance != null) {
                addSuggestion(element,this.request.ideOptions,{
                    prefix : this.prefix,relevance : relevance});
            }
        }
        if (this.optype.includeConstructorSuggestions) {
            let relevance : number = this.optype.constructorSuggestionsFilter(element.type,DART_RELEVANCE_DEFAULT);
            if (relevance != null) {
                this._addConstructorSuggestions(element,relevance);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitCompilationUnitElement(element : any) : void {
        element.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitElement(element : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionElement(element : any) : void {
        if (element.isOperator) {
            return;
        }
        if (isNot(element.enclosingElement, any)) {
            return;
        }
        let relevance : number = op(Op.EQUALS,element.library,this.containingLibrary) ? DART_RELEVANCE_LOCAL_FUNCTION : DART_RELEVANCE_DEFAULT;
        let returnType : any = element.returnType;
        if (returnType != null && returnType.isVoid) {
            if (this.optype.includeVoidReturnSuggestions) {
                addSuggestion(element,this.request.ideOptions,{
                    prefix : this.prefix,relevance : relevance});
            }
        }else {
            if (this.optype.includeReturnValueSuggestions) {
                addSuggestion(element,this.request.ideOptions,{
                    prefix : this.prefix,relevance : relevance});
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionTypeAliasElement(element : any) : void {
        if (this.optype.includeTypeNameSuggestions) {
            let relevance : number = op(Op.EQUALS,element.library,this.containingLibrary) ? DART_RELEVANCE_LOCAL_FUNCTION : DART_RELEVANCE_DEFAULT;
            addSuggestion(element,this.request.ideOptions,{
                prefix : this.prefix,relevance : relevance});
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitLibraryElement(element : any) : void {
        element.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyAccessorElement(element : any) : void {
        if (this.optype.includeReturnValueSuggestions) {
            let relevance : number;
            if (op(Op.EQUALS,element.library,this.containingLibrary)) {
                if (is(element.enclosingElement, any)) {
                    relevance = DART_RELEVANCE_LOCAL_FIELD;
                }else {
                    relevance = DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE;
                }
            }else {
                relevance = DART_RELEVANCE_DEFAULT;
            }
            addSuggestion(element,this.request.ideOptions,{
                prefix : this.prefix,relevance : relevance});
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTopLevelVariableElement(element : any) : void {
        if (this.optype.includeReturnValueSuggestions) {
            let relevance : number = op(Op.EQUALS,element.library,this.containingLibrary) ? DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE : DART_RELEVANCE_DEFAULT;
            addSuggestion(element,this.request.ideOptions,{
                prefix : this.prefix,relevance : relevance});
        }
    }
    _addConstructorSuggestions(classElem : any,relevance : number) : void {
        let className : string = classElem.name;
        for(let constructor of classElem.constructors) {
            if (!constructor.isPrivate) {
                let suggestion : any = createSuggestion(constructor,this.request.ideOptions,{
                    relevance : relevance});
                if (suggestion != null) {
                    let name : string = suggestion.completion;
                    name = new core.DartString(name).length > 0 ? `${className}.${name}` : className;
                    if (this.prefix != null && new core.DartString(this.prefix).length > 0) {
                        name = `${this.prefix}.${name}`;
                    }
                    suggestion.completion = name;
                    suggestion.selectionOffset = suggestion.completion.length;
                    suggestions.add(suggestion);
                }
            }
        }
    }
}

export namespace LocalLibraryContributor {
    export type Constructors = 'LocalLibraryContributor';
    export type Interface = Omit<LocalLibraryContributor, Constructors>;
}
@DartClass
export class LocalLibraryContributor extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeSuggestions(request : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!request.includeIdentifiers) {
                return EMPTY_LIST;
            }
            let libraryUnits : core.DartList<any> = request.result.unit.element.library.units;
            if (libraryUnits == null) {
                return EMPTY_LIST;
            }
            let optype : any = (request as any).opType;
            let visitor : LibraryElementSuggestionBuilder = new LibraryElementSuggestionBuilder(request,optype);
            for(let unit of libraryUnits) {
                if (unit != null && unit.source != request.source) {
                    unit.accept(visitor);
                }
            }
            return visitor.suggestions;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LocalLibraryContributor() {
    }
}

export class properties {
}
