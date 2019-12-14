/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/override_contributor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace OverrideContributor {
    export type Constructors = 'OverrideContributor';
    export type Interface = Omit<OverrideContributor, Constructors>;
}
@DartClass
@Implements(any)
export class OverrideContributor implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeSuggestions(request : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let targetId : any = this._getTargetId(request.target);
            if (op(Op.EQUALS,targetId,null)) {
                return EMPTY_LIST;
            }
            let classDecl : any = targetId.getAncestor((p : any) =>  {
                return is(p, any);
            });
            if (op(Op.EQUALS,classDecl,null)) {
                return EMPTY_LIST;
            }
            let classElem : any = classDecl.element;
            let manager : any = new bare.createInstance(any,null,classElem.library);
            let map : core.DartMap<string,any> = manager.getMembersInheritedFromInterfaces(classElem);
            let memberNames : core.DartList<string> = this._computeMemberNames(map,classElem);
            let suggestions : core.DartList<any> = new core.DartList.literal<any>();
            for(let memberName of memberNames) {
                let element : any = map.get(memberName);
                if (element.returnType != null) {
                    let suggestion : any = this._buildSuggestion(request,targetId,element);
                    if (suggestion != null) {
                        suggestions.add(suggestion);
                    }
                }
            }
            return suggestions;
        } )());
    }

    _buildRepacementText(source : any,targetId : any,unit : any,element : any) : string {
        return '';
    }
    _buildSuggestion(request : any,targetId : any,element : any) : any {
        let completion : string = this._buildRepacementText(request.source,targetId,request.target.unit,element);
        if (completion == null || new core.DartString(completion).length == 0) {
            return null;
        }
        let suggestion : any = new bare.createInstance(any,null,CompletionSuggestionKind.IDENTIFIER,DART_RELEVANCE_HIGH,completion,targetId.offset,0,element.isDeprecated,false);
        suggestion.element = null /*topLevl*/.convertElement(element);
        return suggestion;
    }
    _computeMemberNames(map : core.DartMap<string,any>,element : any) : core.DartList<string> {
        let memberNames : core.DartList<string> = new core.DartList.literal<string>();
        for(let memberName of map.keys) {
            if (!this._hasMember(element,memberName)) {
                memberNames.add(memberName);
            }
        }
        return memberNames;
    }
    _getTargetId(target : any) : any {
        let node : any = target.containingNode;
        if (is(node, any)) {
            let entity : core.DartObject = target.entity;
            if (is(entity, any)) {
                let variables : any = entity.fields.variables;
                if (op(Op.EQUALS,variables.length,1)) {
                    let targetId : any = op(Op.INDEX,variables,0).name;
                    if (targetId.name.isEmpty) {
                        return targetId;
                    }
                }
            }
        }
        return null;
    }
    _hasMember(classElement : any,memberName : string) : boolean {
        return classElement.getField(memberName) != null || classElement.getGetter(memberName) != null || classElement.getMethod(memberName) != null || classElement.getSetter(memberName) != null;
    }
    constructor() {
    }
    @defaultConstructor
    OverrideContributor() {
    }
}

export class properties {
}
