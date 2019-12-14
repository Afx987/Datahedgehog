/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/named_constructor_contributor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace NamedConstructorContributor {
    export type Constructors = 'NamedConstructorContributor';
    export type Interface = Omit<NamedConstructorContributor, Constructors>;
}
@DartClass
export class NamedConstructorContributor extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeSuggestions(request : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let node : any = request.target.containingNode;
            let libElem : any = request.libraryElement;
            if (op(Op.EQUALS,libElem,null)) {
                return EMPTY_LIST;
            }
            if (is(node, any)) {
                let typeName : any = node.type;
                if (typeName != null) {
                    let type : any = typeName.type;
                    if (type != null) {
                        let classElem : any = type.element;
                        if (is(classElem, any)) {
                            return this._buildSuggestions(libElem,classElem,request.ideOptions);
                        }
                    }
                }
            }
            return EMPTY_LIST;
        } )());
    }

    _buildSuggestions(libElem : any,classElem : any,options : any) : core.DartList<any> {
        let isLocalClassDecl : boolean = op(Op.EQUALS,classElem.library,libElem);
        let suggestions : core.DartList<any> = new core.DartList.literal<any>();
        for(let elem of classElem.constructors) {
            if (isLocalClassDecl || !elem.isPrivate) {
                let name : string = elem.name;
                if (name != null) {
                    let s : any = createSuggestion(elem,options,{
                        completion : name});
                    if (s != null) {
                        suggestions.add(s);
                    }
                }
            }
        }
        return suggestions;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NamedConstructorContributor() {
    }
}

export class properties {
}
