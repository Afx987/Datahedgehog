/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/search/element_references.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace ElementReferencesComputer {
    export type Constructors = 'ElementReferencesComputer';
    export type Interface = Omit<ElementReferencesComputer, Constructors>;
}
@DartClass
export class ElementReferencesComputer {
    searchEngine : any;

    constructor(searchEngine : any) {
    }
    @defaultConstructor
    ElementReferencesComputer(searchEngine : any) {
        this.searchEngine = searchEngine;
    }
    compute(element : any,withPotential : boolean) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let results : core.DartList<any> = new core.DartList.literal<any>();
            results.addAll(await this._findElementsReferences(element));
            if (withPotential && ElementReferencesComputer._isMemberElement(element)) {
                let name : string = element.displayName;
                let matches : core.DartList<any> = await this.searchEngine.searchMemberReferences(name);
                matches = SearchMatch.withNotNullElement(matches);
                results.addAll(matches.where((match : any) =>  {
                    return !match.isResolved;
                }).map(ElementReferencesComputer.toResult.bind(this)));
            }
            return results;
        } )());
    }

    _findElementsReferences(element : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let allResults : core.DartList<any> = new core.DartList.literal<any>();
            let refElements : core.DartIterable<any> = await this._getRefElements(element);
            for(let refElement of refElements) {
                let elementResults : core.DartList<any> = await this._findSingleElementReferences(refElement);
                allResults.addAll(elementResults);
            }
            return allResults;
        } )());
    }

    _findSingleElementReferences(element : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let matches : core.DartList<any> = await this.searchEngine.searchReferences(element);
            matches = SearchMatch.withNotNullElement(matches);
            return matches.map(ElementReferencesComputer.toResult.bind(this)).toList();
        } )());
    }

    _getRefElements(element : any) : async.Future<core.DartIterable<any>> {
        if (is(element, any)) {
            return getHierarchyMembers(this.searchEngine,element);
        }
        return new async.Future.value(new core.DartList.literal(element));
    }
    static toResult(match : any) : any {
        return newSearchResult_fromMatch(match);
    }
    static _isMemberElement(element : any) : boolean {
        if (is(element, any)) {
            return false;
        }
        return is(element.enclosingElement, any);
    }
}

export class properties {
}
