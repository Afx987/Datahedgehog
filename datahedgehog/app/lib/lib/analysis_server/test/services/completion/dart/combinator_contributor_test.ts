/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/completion/dart/combinator_contributor_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./completion_contributor_util";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(CombinatorContributorTest);
    });
};
export namespace CombinatorContributorTest {
    export type Constructors = lib3.DartCompletionContributorTest.Constructors | 'CombinatorContributorTest';
    export type Interface = Omit<CombinatorContributorTest, Constructors>;
}
@DartClass
export class CombinatorContributorTest extends lib3.DartCompletionContributorTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createContributor() : any {
        return new bare.createInstance(any,null);
    }
    test_Block_inherited_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('      class F { var f1; f2() { } }\n      class E extends F { var e1; e2() { } }\n      class I { int i1; i2() { } }\n      class M { var m1; int m2() { } }\n      class A extends E implements I with M {a() {^}}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_Combinator_hide() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','      library libAB;\n      part \'/partAB.dart\';\n      class A { }\n      class B { }');
            this.addSource('/partAB.dart','      part of libAB;\n      var T1;\n      PB F1() => new PB();\n      class PB { }');
            this.addSource('/testCD.dart','      class C { }\n      class D { }');
            this.addTestSource('      import "/testAB.dart" hide ^;\n      import "/testCD.dart";\n      class X {}');
            await this.computeSuggestions();
            this.assertSuggestClass('A',{
                relevance : DART_RELEVANCE_DEFAULT,kind : CompletionSuggestionKind.IDENTIFIER});
            this.assertSuggestClass('B',{
                relevance : DART_RELEVANCE_DEFAULT,kind : CompletionSuggestionKind.IDENTIFIER});
            this.assertSuggestClass('PB',{
                relevance : DART_RELEVANCE_DEFAULT,kind : CompletionSuggestionKind.IDENTIFIER});
            this.assertSuggestTopLevelVar('T1',null,{
                kind : CompletionSuggestionKind.IDENTIFIER});
            this.assertSuggestFunction('F1','PB',{
                kind : CompletionSuggestionKind.IDENTIFIER});
            this.assertNotSuggested('C');
            this.assertNotSuggested('D');
            this.assertNotSuggested('X');
            this.assertNotSuggested('Object');
        } )());
    }

    test_Combinator_show() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/testAB.dart','      library libAB;\n      part \'/partAB.dart\';\n      class A { }\n      class B { }\n      class _AB');
            this.addSource('/partAB.dart','      part of libAB;\n      var T1;\n      PB F1() => new PB();\n      typedef PB2 F2(int blat);\n      class Clz = Object with Object;\n      class PB { }');
            this.addSource('/testCD.dart','      class C { }\n      class D { }');
            this.addTestSource('      import "/testAB.dart" show ^;\n      import "/testCD.dart";\n      class X {}');
            await this.computeSuggestions();
            this.assertSuggestClass('A',{
                relevance : DART_RELEVANCE_DEFAULT,kind : CompletionSuggestionKind.IDENTIFIER});
            this.assertSuggestClass('B',{
                relevance : DART_RELEVANCE_DEFAULT,kind : CompletionSuggestionKind.IDENTIFIER});
            this.assertNotSuggested('_AB');
            this.assertSuggestClass('PB',{
                relevance : DART_RELEVANCE_DEFAULT,kind : CompletionSuggestionKind.IDENTIFIER});
            this.assertSuggestTopLevelVar('T1',null,{
                kind : CompletionSuggestionKind.IDENTIFIER});
            this.assertSuggestFunction('F1','PB',{
                kind : CompletionSuggestionKind.IDENTIFIER});
            this.assertSuggestClass('Clz',{
                relevance : DART_RELEVANCE_DEFAULT,kind : CompletionSuggestionKind.IDENTIFIER});
            this.assertSuggestFunctionTypeAlias('F2',null,{
                kind : CompletionSuggestionKind.IDENTIFIER});
            this.assertNotSuggested('C');
            this.assertNotSuggested('D');
            this.assertNotSuggested('X');
            this.assertNotSuggested('Object');
        } )());
    }

    test_Combinator_show_PI() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "dart:math" show ^;');
            await this.computeSuggestions();
            this.assertSuggestTopLevelVar('PI','double',{
                kind : CompletionSuggestionKind.IDENTIFIER});
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CombinatorContributorTest() {
    }
}

export class properties {
}
