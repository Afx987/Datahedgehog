/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/inherited_reference_contributor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var _enclosingClass : (target : any) => any = (target : any) : any =>  {
    let node : any = target.containingNode;
    while (node != null){
        if (is(node, any)) {
            return node;
        }
        if (is(node, any)) {
            if (node.isStatic) {
                return null;
            }
        }
        if (is(node, any)) {
            if (node.isStatic) {
                return null;
            }
        }
        node = node.parent;
    }
    return null;
};
export namespace InheritedReferenceContributor {
    export type Constructors = 'InheritedReferenceContributor';
    export type Interface = Omit<InheritedReferenceContributor, Constructors>;
}
@DartClass
@With(any)
export class InheritedReferenceContributor extends any implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    containingLibrary : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    kind : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeSuggestions(request : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!request.includeIdentifiers) {
                return EMPTY_LIST;
            }
            let classDecl : any = _enclosingClass(request.target);
            if (op(Op.EQUALS,classDecl,null) || op(Op.EQUALS,classDecl.element,null)) {
                return EMPTY_LIST;
            }
            this.containingLibrary = request.libraryElement;
            return this._computeSuggestionsForClass2(resolutionMap.elementDeclaredByClassDeclaration(classDecl),request);
        } )());
    }

    computeSuggestionsForClass(classElement : any,request : any,_namedArguments? : {skipChildClass? : boolean}) : core.DartList<any> {
        let {skipChildClass} = Object.assign({
            "skipChildClass" : true}, _namedArguments );
        if (!request.includeIdentifiers) {
            return EMPTY_LIST;
        }
        this.containingLibrary = request.libraryElement;
        return this._computeSuggestionsForClass2(classElement,request,{
            skipChildClass : skipChildClass});
    }
    _addSuggestionsForType(type : any,optype : any,ideOptions : any,_namedArguments? : {isFunctionalArgument? : boolean}) {
        let {isFunctionalArgument} = Object.assign({
            "isFunctionalArgument" : false}, _namedArguments );
        if (!isFunctionalArgument) {
            for(let elem of type.accessors) {
                if (elem.isGetter) {
                    if (optype.includeReturnValueSuggestions) {
                        addSuggestion(elem,ideOptions);
                    }
                }else {
                    if (optype.includeVoidReturnSuggestions) {
                        addSuggestion(elem,ideOptions);
                    }
                }
            }
        }
        for(let elem of type.methods) {
            if (op(Op.EQUALS,elem.returnType,null)) {
                addSuggestion(elem,ideOptions);
            }else if (!elem.returnType.isVoid) {
                if (optype.includeReturnValueSuggestions) {
                    addSuggestion(elem,ideOptions);
                }
            }else {
                if (optype.includeVoidReturnSuggestions) {
                    addSuggestion(elem,ideOptions);
                }
            }
        }
    }
    _computeSuggestionsForClass2(classElement : any,request : any,_namedArguments? : {skipChildClass? : boolean}) : core.DartList<any> {
        let {skipChildClass} = Object.assign({
            "skipChildClass" : true}, _namedArguments );
        let isFunctionalArgument : boolean = request.target.isFunctionalArgument();
        this.kind = isFunctionalArgument ? CompletionSuggestionKind.IDENTIFIER : CompletionSuggestionKind.INVOCATION;
        let optype : any = request.opType;
        if (!skipChildClass) {
            this._addSuggestionsForType(classElement.type,optype,request.ideOptions,{
                isFunctionalArgument : isFunctionalArgument});
        }
        for(let type of classElement.allSupertypes) {
            this._addSuggestionsForType(type,optype,request.ideOptions,{
                isFunctionalArgument : isFunctionalArgument});
        }
        return suggestions;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InheritedReferenceContributor() {
    }
}

export class properties {
}
