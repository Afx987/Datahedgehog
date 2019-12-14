/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/variable_name_contributor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var _createNameSuggestion : (name : string) => any = (name : string) : any =>  {
    if (name == null || new core.DartString(name).isEmpty) {
        return null;
    }
    return new bare.createInstance(any,null,CompletionSuggestionKind.IDENTIFIER,DART_RELEVANCE_DEFAULT,name,new core.DartString(name).length,0,false,false);
};
export var _getStringName : (id : any) => string = (id : any) : string =>  {
    if (op(Op.EQUALS,id,null)) {
        return null;
    }
    if (is(id, any)) {
        return id.name;
    }else if (is(id, any)) {
        return id.identifier.name;
    }
    return id.name;
};
export namespace VariableNameContributor {
    export type Constructors = 'VariableNameContributor';
    export type Interface = Omit<VariableNameContributor, Constructors>;
}
@DartClass
export class VariableNameContributor extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeSuggestions(request : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let optype : any = (request as any).opType;
            if (optype.includeVarNameSuggestions) {
                let node : any = request.target.containingNode;
                let strName : string = null;
                if (is(node, any)) {
                    if (is(node.expression, any)) {
                        strName = _getStringName(node.expression as any);
                    }
                }else if (is(node, any)) {
                    let typeAnnotation : any = node.type;
                    if (is(typeAnnotation, any)) {
                        strName = _getStringName(typeAnnotation.name);
                    }
                }else if (is(node, any)) {
                    let varDeclarationList : any = node.variables;
                    let typeAnnotation : any = varDeclarationList.type;
                    if (typeAnnotation != null) {
                        if (is(typeAnnotation, any)) {
                            strName = _getStringName(typeAnnotation.name);
                        }
                    }else {
                        let varDeclarations : any = varDeclarationList.variables;
                        if (op(Op.EQUALS,varDeclarations.length,1)) {
                            let varDeclaration : any = varDeclarations.first;
                            strName = _getStringName(varDeclaration.name);
                        }
                    }
                }
                if (strName == null) {
                    return EMPTY_LIST;
                }
                let variableNameSuggestions : core.DartList<string> = getCamelWordCombinations(strName);
                variableNameSuggestions.remove(strName);
                let suggestions : core.DartList<any> = new core.DartList.literal<any>();
                for(let varName of variableNameSuggestions) {
                    let suggestion : any = _createNameSuggestion(varName);
                    if (suggestion != null) {
                        suggestions.add(suggestion);
                    }
                }
                return suggestions;
            }
            return EMPTY_LIST;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VariableNameContributor() {
    }
}

export class properties {
}
