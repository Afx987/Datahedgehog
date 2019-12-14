/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/local_constructor_contributor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/analyzer_plugin/lib/protocol/protocol_common";

export namespace LocalConstructorContributor {
    export type Constructors = 'LocalConstructorContributor';
    export type Interface = Omit<LocalConstructorContributor, Constructors>;
}
@DartClass
export class LocalConstructorContributor extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeSuggestions(request : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let optype : any = (request as any).opType;
            let suggestions : core.DartList<any> = new core.DartList.literal<any>();
            if (!optype.isPrefixed) {
                if (optype.includeConstructorSuggestions) {
                    new _Visitor(request,suggestions,optype).visit(request.target.containingNode);
                }
            }
            return suggestions;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LocalConstructorContributor() {
    }
}

export namespace _Visitor {
    export type Constructors = '_Visitor';
    export type Interface = Omit<_Visitor, Constructors>;
}
@DartClass
export class _Visitor extends any {
    request : any;

    optype : any;

    suggestions : core.DartList<any>;

    constructor(request : any,suggestions : core.DartList<any>,optype : any) {
    }
    @defaultConstructor
    _Visitor(request : any,suggestions : core.DartList<any>,optype : any) {
        this.request = request;
        super.DartObject(request.offset);
        this.suggestions = suggestions;
        this.optype = optype;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredClass(declaration : any) : void {
        let found : boolean = false;
        for(let member of declaration.members) {
            if (is(member, any)) {
                found = true;
                this._addSuggestion(declaration,member);
            }
        }
        if (!found) {
            this._addSuggestion(declaration,null);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredClassTypeAlias(declaration : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredField(fieldDecl : any,varDecl : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredFunction(declaration : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredFunctionTypeAlias(declaration : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredLabel(label : any,isCaseLabel : boolean) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredLocalVar(name : any,type : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredMethod(declaration : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredParam(name : any,type : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredTopLevelVar(varList : any,varDecl : any) : void {
    }
    _addSuggestion(classDecl : any,constructorDecl : any) : void {
        let completion : string = classDecl.name.name;
        let elemId : any;
        let classElement : any = resolutionMap.elementDeclaredByClassDeclaration(classDecl);
        let relevance : number = this.optype.constructorSuggestionsFilter(((t)=>(!!t)?t.type:null)(classElement),DART_RELEVANCE_DEFAULT);
        if (relevance == null) {
            return;
        }
        if (constructorDecl != null) {
            elemId = constructorDecl.name;
            let elem : any = constructorDecl.element;
            if (elemId != null) {
                let name : string = elemId.name;
                if (name != null && new core.DartString(name).length > 0) {
                    completion = `${completion}.${name}`;
                }
            }
            if (elem != null) {
                let suggestion : any = createSuggestion(elem,this.request.ideOptions,{
                    completion : completion,relevance : relevance});
                if (suggestion != null) {
                    this.suggestions.add(suggestion);
                }
            }
        }else {
            let element : any = createLocalElement(this.request.source,lib3.ElementKind.CONSTRUCTOR,elemId,{
                parameters : '()'});
            element.returnType = classDecl.name.name;
            let suggestion : any = new bare.createInstance(any,null,CompletionSuggestionKind.INVOCATION,relevance,completion,new core.DartString(completion).length,0,false,false,{
                declaringType : classDecl.name.name,element : element,parameterNames : new core.DartList.literal(),parameterTypes : new core.DartList.literal(),requiredParameterCount : 0,hasNamedParameters : false});
            this.suggestions.add(suggestion);
        }
    }
}

export class properties {
}
