/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/completion/dart/common_usage_sorter_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../../domain_completion_util";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(CommonUsageSorterTest);
    });
};
export namespace CommonUsageSorterTest {
    export type Constructors = lib3.AbstractCompletionDomainTest.Constructors | 'CommonUsageSorterTest';
    export type Interface = Omit<CommonUsageSorterTest, Constructors>;
}
@DartClass
export class CommonUsageSorterTest extends lib3.AbstractCompletionDomainTest {
    getSuggestionsWith(selectorRelevance : core.DartMap<string,core.DartList<string>>) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let originalSorter = DartCompletionManager.contributionSorter;
            DartCompletionManager.contributionSorter = new bare.createInstance(any,null,selectorRelevance);
            try {
                return await this.getSuggestions();
            } finally {
                DartCompletionManager.contributionSorter = originalSorter;
            }
        } )());
    }

    test_ConstructorName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('import "dart:async"; class A {x() {new Future.^}}');
            await this.getSuggestionsWith(new core.DartMap.literal([
                ['dart.async.Future',new core.DartList.literal('value','wait')]]));
            expect(this.replacementOffset,equals(this.completionOffset));
            expect(this.replacementLength,equals(0));
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'delayed');
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'value',{
                relevance : DART_RELEVANCE_COMMON_USAGE});
            this.assertNoResult('Future');
            this.assertNoResult('Object');
            this.assertNoResult('A');
        } )());
    }

    test_PrefixedIdentifier_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {static int s1; static int s2; x() {A.^}}');
            await this.getSuggestionsWith(new core.DartMap.literal([
                ['.A',new core.DartList.literal('s2')]]));
            expect(this.replacementOffset,equals(this.completionOffset));
            expect(this.replacementLength,equals(0));
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'s1');
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'s2',{
                relevance : DART_RELEVANCE_COMMON_USAGE});
            this.assertNoResult('Future');
            this.assertNoResult('Object');
            this.assertNoResult('A');
        } )());
    }

    test_PrefixedIdentifier_field_inPart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('/project/bin/myLib.dart',`library L; part "${this.testFile}"; class A {static int s2;}`);
            this.addTestFile('part of L; foo() {A.^}');
            await this.getSuggestionsWith(new core.DartMap.literal([
                ['L.A',new core.DartList.literal('s2')]]));
            expect(this.replacementOffset,equals(this.completionOffset));
            expect(this.replacementLength,equals(0));
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'s2',{
                relevance : DART_RELEVANCE_COMMON_USAGE});
            this.assertNoResult('Future');
            this.assertNoResult('Object');
            this.assertNoResult('A');
        } )());
    }

    test_PrefixedIdentifier_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {int get g1 => 1; int get g2 => 2; x() {new A().^}}');
            await this.getSuggestionsWith(new core.DartMap.literal([
                ['.A',new core.DartList.literal('g2')]]));
            expect(this.replacementOffset,equals(this.completionOffset));
            expect(this.replacementLength,equals(0));
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'g1');
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'g2',{
                relevance : DART_RELEVANCE_COMMON_USAGE});
            this.assertNoResult('Future');
            this.assertNoResult('Object');
            this.assertNoResult('A');
        } )());
    }

    test_PrefixedIdentifier_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {set s1(v) {}; set s2(v) {}; x() {new A().^}}');
            await this.getSuggestionsWith(new core.DartMap.literal([
                ['.A',new core.DartList.literal('s2')]]));
            expect(this.replacementOffset,equals(this.completionOffset));
            expect(this.replacementLength,equals(0));
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'s1');
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'s2',{
                relevance : DART_RELEVANCE_COMMON_USAGE});
            this.assertNoResult('Future');
            this.assertNoResult('Object');
            this.assertNoResult('A');
        } )());
    }

    test_PrefixedIdentifier_static_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('import "dart:async"; class A {x() {Future.^}}');
            await this.getSuggestionsWith(new core.DartMap.literal([
                ['dart.async.Future',new core.DartList.literal('value','wait')]]));
            expect(this.replacementOffset,equals(this.completionOffset));
            expect(this.replacementLength,equals(0));
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'wait',{
                relevance : op(Op.MINUS,DART_RELEVANCE_COMMON_USAGE,1)});
            this.assertNoResult('Future');
            this.assertNoResult('Object');
            this.assertNoResult('A');
        } )());
    }

    test_PropertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('import "dart:math"; class A {x() {new Random().^}}');
            await this.getSuggestionsWith(new core.DartMap.literal([
                ['dart.math.Random',new core.DartList.literal('nextInt','nextDouble')]]));
            expect(this.replacementOffset,equals(this.completionOffset));
            expect(this.replacementLength,equals(0));
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'nextBool');
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'nextDouble',{
                relevance : op(Op.MINUS,DART_RELEVANCE_COMMON_USAGE,1)});
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'nextInt',{
                relevance : DART_RELEVANCE_COMMON_USAGE});
            this.assertNoResult('Random');
            this.assertNoResult('Object');
            this.assertNoResult('A');
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CommonUsageSorterTest() {
    }
}

export class properties {
}
