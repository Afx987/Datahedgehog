/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/imported_reference_contributor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var hiddenNamesIn : (importElem : any) => core.DartList<string> = (importElem : any) : core.DartList<string> =>  {
    for(let combinator of importElem.combinators) {
        if (is(combinator, any)) {
            return combinator.hiddenNames;
        }
    }
    return null;
};
export var showNamesIn : (importElem : any) => core.DartList<string> = (importElem : any) : core.DartList<string> =>  {
    for(let combinator of importElem.combinators) {
        if (is(combinator, any)) {
            return combinator.shownNames;
        }
    }
    return null;
};
export namespace ImportedReferenceContributor {
    export type Constructors = 'ImportedReferenceContributor';
    export type Interface = Omit<ImportedReferenceContributor, Constructors>;
}
@DartClass
export class ImportedReferenceContributor extends any {
    request : any;

    optype : any;

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
            this.request = request;
            this.optype = (request as any).opType;
            let suggestions : core.DartList<any> = new core.DartList.literal<any>();
            for(let importElem of imports) {
                let libElem : any = ((t)=>(!!t)?t.importedLibrary:null)(importElem);
                if (libElem != null) {
                    suggestions.addAll(this._buildSuggestions(libElem.exportNamespace,{
                        prefix : ((t)=>(!!t)?t.name:null)(importElem.prefix),showNames : showNamesIn(importElem),hiddenNames : hiddenNamesIn(importElem)}));
                }
            }
            return suggestions;
        } )());
    }

    _buildSuggestions(namespace : any,_namedArguments? : {prefix? : string,showNames? : core.DartList<string>,hiddenNames? : core.DartList<string>}) : core.DartList<any> {
        let {prefix,showNames,hiddenNames} = Object.assign({
        }, _namedArguments );
        let visitor : any = new bare.createInstance(any,null,this.request,this.optype,prefix);
        for(let elem of namespace.definedNames.values) {
            if (showNames != null && !showNames.contains(elem.name)) {
                continue;
            }
            if (hiddenNames != null && hiddenNames.contains(elem.name)) {
                continue;
            }
            elem.accept(visitor);
        }
        return visitor.suggestions;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ImportedReferenceContributor() {
    }
}

export class properties {
}
