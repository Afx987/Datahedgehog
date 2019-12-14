/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/library_member_contributor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace LibraryMemberContributor {
    export type Constructors = 'LibraryMemberContributor';
    export type Interface = Omit<LibraryMemberContributor, Constructors>;
}
@DartClass
export class LibraryMemberContributor extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeSuggestions(request : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let targetId : any = request.dotTarget;
            if (is(targetId, any) && !request.target.isCascade) {
                let elem : any = targetId.bestElement;
                if (is(elem, any) && !elem.isSynthetic) {
                    let containingLibrary : any = request.libraryElement;
                    if (containingLibrary != null) {
                        let imports : core.DartList<any> = containingLibrary.imports;
                        if (imports != null) {
                            return this._buildSuggestions(request,elem,containingLibrary,imports);
                        }
                    }
                }
            }
            return EMPTY_LIST;
        } )());
    }

    _buildSuggestions(request : any,elem : any,containingLibrary : any,imports : core.DartList<any>) : core.DartList<any> {
        let suggestions : core.DartList<any> = new core.DartList.literal<any>();
        for(let importElem of imports) {
            if (op(Op.EQUALS,((t)=>(!!t)?t.name:null)(importElem.prefix),elem.name)) {
                let library : any = importElem.importedLibrary;
                if (library != null) {
                    let parent : any = request.target.containingNode.parent;
                    let isConstructor : boolean = is(parent.parent, any);
                    let typesOnly : boolean = is(parent, any);
                    let instCreation : boolean = typesOnly && isConstructor;
                    let builder : any = new bare.createInstance(any,null,containingLibrary,CompletionSuggestionKind.INVOCATION,typesOnly,instCreation,request.ideOptions);
                    library.visitChildren(builder);
                    suggestions.addAll(builder.suggestions);
                    if (importElem.isDeferred) {
                        let loadLibFunct : any = library.loadLibraryFunction;
                        suggestions.add(createSuggestion(loadLibFunct,request.ideOptions));
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
    LibraryMemberContributor() {
    }
}

export class properties {
}
