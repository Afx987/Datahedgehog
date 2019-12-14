/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/search/search_result_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(SearchResultKindTest);
    });
};
export namespace SearchResultKindTest {
    export type Constructors = 'SearchResultKindTest';
    export type Interface = Omit<SearchResultKindTest, Constructors>;
}
@DartClass
export class SearchResultKindTest {
    test_fromEngine() : void {
        expect(newSearchResultKind_fromEngine(MatchKind.DECLARATION),SearchResultKind.DECLARATION);
        expect(newSearchResultKind_fromEngine(MatchKind.READ),SearchResultKind.READ);
        expect(newSearchResultKind_fromEngine(MatchKind.READ_WRITE),SearchResultKind.READ_WRITE);
        expect(newSearchResultKind_fromEngine(MatchKind.WRITE),SearchResultKind.WRITE);
        expect(newSearchResultKind_fromEngine(MatchKind.REFERENCE),SearchResultKind.REFERENCE);
        expect(newSearchResultKind_fromEngine(MatchKind.INVOCATION),SearchResultKind.INVOCATION);
        expect(newSearchResultKind_fromEngine(null),SearchResultKind.UNKNOWN);
    }
    test_fromName() : void {
        expect(new bare.createInstance(any,null,SearchResultKind.DECLARATION.name),SearchResultKind.DECLARATION);
        expect(new bare.createInstance(any,null,SearchResultKind.READ.name),SearchResultKind.READ);
        expect(new bare.createInstance(any,null,SearchResultKind.READ_WRITE.name),SearchResultKind.READ_WRITE);
        expect(new bare.createInstance(any,null,SearchResultKind.WRITE.name),SearchResultKind.WRITE);
        expect(new bare.createInstance(any,null,SearchResultKind.REFERENCE.name),SearchResultKind.REFERENCE);
        expect(new bare.createInstance(any,null,SearchResultKind.INVOCATION.name),SearchResultKind.INVOCATION);
        expect(new bare.createInstance(any,null,SearchResultKind.UNKNOWN.name),SearchResultKind.UNKNOWN);
    }
    test_toString() : void {
        expect(SearchResultKind.DECLARATION.toString(),'SearchResultKind.DECLARATION');
    }
    constructor() {
    }
    @defaultConstructor
    SearchResultKindTest() {
    }
}

export class properties {
}
