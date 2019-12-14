/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/library_prefix_contributor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace LibraryPrefixContributor {
    export type Constructors = 'LibraryPrefixContributor';
    export type Interface = Omit<LibraryPrefixContributor, Constructors>;
}
@DartClass
export class LibraryPrefixContributor extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeSuggestions(request : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!request.includeIdentifiers) {
                return EMPTY_LIST;
            }
            let imports : core.DartList<any> = request.libraryElement.imports;
            if (imports == null) {
                return EMPTY_LIST;
            }
            let suggestions : core.DartList<any> = new core.DartList.literal<any>();
            for(let element of imports) {
                let completion : string = ((t)=>(!!t)?t.name:null)(element.prefix);
                if (completion != null && new core.DartString(completion).length > 0) {
                    let libElem : any = element.importedLibrary;
                    if (libElem != null) {
                        let suggestion : any = createSuggestion(libElem,request.ideOptions,{
                            completion : completion,kind : CompletionSuggestionKind.IDENTIFIER});
                        if (suggestion != null) {
                            suggestions.add(suggestion);
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
    LibraryPrefixContributor() {
    }
}

export class properties {
}
