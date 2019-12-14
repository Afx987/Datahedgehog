/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/field_formal_contributor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace FieldFormalContributor {
    export type Constructors = 'FieldFormalContributor';
    export type Interface = Omit<FieldFormalContributor, Constructors>;
}
@DartClass
export class FieldFormalContributor extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeSuggestions(request : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let node : any = request.target.containingNode;
            if (isNot(node, any)) {
                return EMPTY_LIST;
            }
            let constructorDecl : any = node.getAncestor((p : any) =>  {
                return is(p, any);
            });
            if (op(Op.EQUALS,constructorDecl,null)) {
                return EMPTY_LIST;
            }
            let referencedFields : core.DartList<string> = new core.DartList<string>();
            for(let param of constructorDecl.parameters.parameters) {
                if (is(param, any) && is(param.parameter, any)) {
                    param = (param as any).parameter;
                }
                if (is(param, any)) {
                    let fieldId : any = param.identifier;
                    if (fieldId != null && fieldId != request.target.entity) {
                        let fieldName : string = fieldId.name;
                        if (fieldName != null && new core.DartString(fieldName).length > 0) {
                            referencedFields.add(fieldName);
                        }
                    }
                }
            }
            let classDecl : any = constructorDecl.getAncestor((p : any) =>  {
                return is(p, any);
            });
            let suggestions : core.DartList<any> = new core.DartList.literal<any>();
            for(let member of classDecl.members) {
                if (is(member, any) && !member.isStatic) {
                    for(let varDecl of member.fields.variables) {
                        let fieldId : any = varDecl.name;
                        if (fieldId != null) {
                            let fieldName : string = fieldId.name;
                            if (fieldName != null && new core.DartString(fieldName).length > 0) {
                                if (!referencedFields.contains(fieldName)) {
                                    let suggestion : any = createSuggestion(fieldId.bestElement,request.ideOptions,{
                                        relevance : DART_RELEVANCE_LOCAL_FIELD});
                                    if (suggestion != null) {
                                        suggestions.add(suggestion);
                                    }
                                }
                            }
                        }
                    }
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
    FieldFormalContributor() {
    }
}

export class properties {
}
