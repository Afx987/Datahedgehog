/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/search/search_engine_internal2.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace SearchEngineImpl2 {
    export type Constructors = 'SearchEngineImpl2';
    export type Interface = Omit<SearchEngineImpl2, Constructors>;
}
@DartClass
@Implements(any)
export class SearchEngineImpl2 implements any.Interface {
    _drivers : core.DartIterable<any>;

    constructor(_drivers : core.DartIterable<any>) {
    }
    @defaultConstructor
    SearchEngineImpl2(_drivers : core.DartIterable<any>) {
        this._drivers = _drivers;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    searchAllSubtypes(type : any) : async.Future<core.DartSet<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let allSubtypes : core.DartSet<any> = new core.DartSet<any>();
            var addSubtypes : (type : any) => async.Future<core.Null> = (type : any) => new async.Future.fromPromise(( async () : Promise<core.Null> =>  {
                let directResults : core.DartList<any> = await this._searchDirectSubtypes(type);
                for(let directResult of directResults) {
                    let directSubtype = directResult.enclosingElement as any;
                    if (allSubtypes.add(directSubtype)) {
                        await addSubtypes(directSubtype);
                    }
                }
            })());
            await addSubtypes(type);
            return allSubtypes;
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    searchMemberDeclarations(name : string) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let allDeclarations : core.DartList<any> = new core.DartList.literal();
            let drivers : core.DartList<any> = this._drivers.toList();
            for(let driver of drivers) {
                let elements : core.DartList<any> = await driver.search.classMembers(name);
                allDeclarations.addAll(elements.map(_SearchMatch.forElement.bind(_SearchMatch)));
            }
            return allDeclarations;
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    searchMemberReferences(name : string) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let allResults : core.DartList<any> = new core.DartList.literal();
            let drivers : core.DartList<any> = this._drivers.toList();
            for(let driver of drivers) {
                let results : core.DartList<any> = await driver.search.unresolvedMemberReferences(name);
                allResults.addAll(results);
            }
            return allResults.map(_SearchMatch.forSearchResult.bind(_SearchMatch)).toList();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    searchReferences(element : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let allResults : core.DartList<any> = new core.DartList.literal();
            let drivers : core.DartList<any> = this._drivers.toList();
            for(let driver of drivers) {
                let results : core.DartList<any> = await driver.search.references(element);
                allResults.addAll(results);
            }
            return allResults.map(_SearchMatch.forSearchResult.bind(_SearchMatch)).toList();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    searchSubtypes(type : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let results : core.DartList<any> = await this._searchDirectSubtypes(type);
            return results.map(_SearchMatch.forSearchResult.bind(_SearchMatch)).toList();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    searchTopLevelDeclarations(pattern : string) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let allDeclarations : core.DartList<any> = new core.DartList.literal();
            let regExp : core.DartRegExp = new core.DartRegExp(pattern);
            let drivers : core.DartList<any> = this._drivers.toList();
            for(let driver of drivers) {
                let elements : core.DartList<any> = await driver.search.topLevelElements(regExp);
                allDeclarations.addAll(elements.map(_SearchMatch.forElement.bind(_SearchMatch)));
            }
            return allDeclarations;
        } )());
    }

    _searchDirectSubtypes(type : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let allResults : core.DartList<any> = new core.DartList.literal();
            let drivers : core.DartList<any> = this._drivers.toList();
            for(let driver of drivers) {
                let results : core.DartList<any> = await driver.search.subTypes(type);
                allResults.addAll(results);
            }
            return allResults;
        } )());
    }

}

export namespace _SearchMatch {
    export type Constructors = '_SearchMatch';
    export type Interface = Omit<_SearchMatch, Constructors>;
}
@DartClass
@Implements(any)
export class _SearchMatch implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    file : string;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    librarySource : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    unitSource : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    libraryElement : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    element : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isResolved : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isQualified : boolean;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    kind : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    sourceRange : any;

    constructor(file : string,librarySource : any,unitSource : any,libraryElement : any,element : any,isResolved : boolean,isQualified : boolean,kind : any,sourceRange : any) {
    }
    @defaultConstructor
    _SearchMatch(file : string,librarySource : any,unitSource : any,libraryElement : any,element : any,isResolved : boolean,isQualified : boolean,kind : any,sourceRange : any) {
        this.file = file;
        this.librarySource = librarySource;
        this.unitSource = unitSource;
        this.libraryElement = libraryElement;
        this.element = element;
        this.isResolved = isResolved;
        this.isQualified = isQualified;
        this.kind = kind;
        this.sourceRange = sourceRange;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.write("SearchMatch(kind=");
        buffer.write(this.kind);
        buffer.write(", libraryUri=");
        buffer.write(this.librarySource.uri);
        buffer.write(", unitUri=");
        buffer.write(this.unitSource.uri);
        buffer.write(", range=");
        buffer.write(this.sourceRange);
        buffer.write(", isResolved=");
        buffer.write(this.isResolved);
        buffer.write(", isQualified=");
        buffer.write(this.isQualified);
        buffer.write(")");
        return buffer.toString();
    }
    static forElement(element : any) : _SearchMatch {
        return new _SearchMatch(element.source.fullName,element.librarySource,element.source,element.library,element,true,true,MatchKind.DECLARATION,new bare.createInstance(any,null,element.nameOffset,element.nameLength));
    }
    static forSearchResult(result : any) : _SearchMatch {
        let enclosingElement : any = result.enclosingElement;
        return new _SearchMatch(enclosingElement.source.fullName,enclosingElement.librarySource,enclosingElement.source,enclosingElement.library,enclosingElement,result.isResolved,result.isQualified,_SearchMatch.toMatchKind(result.kind),new bare.createInstance(any,null,result.offset,result.length));
    }
    static toMatchKind(kind : any) : any {
        if (op(Op.EQUALS,kind,SearchResultKind.READ)) {
            return MatchKind.READ;
        }
        if (op(Op.EQUALS,kind,SearchResultKind.READ_WRITE)) {
            return MatchKind.READ_WRITE;
        }
        if (op(Op.EQUALS,kind,SearchResultKind.WRITE)) {
            return MatchKind.WRITE;
        }
        if (op(Op.EQUALS,kind,SearchResultKind.INVOCATION)) {
            return MatchKind.INVOCATION;
        }
        return MatchKind.REFERENCE;
    }
}

export class properties {
}
