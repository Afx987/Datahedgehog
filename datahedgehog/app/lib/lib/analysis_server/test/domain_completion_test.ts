/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/domain_completion_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./domain_completion_util";
import * as lib4 from "./mocks";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(CompletionDomainHandlerTest);
    });
};
export namespace CompletionDomainHandlerTest {
    export type Constructors = lib3.AbstractCompletionDomainTest.Constructors | 'CompletionDomainHandlerTest';
    export type Interface = Omit<CompletionDomainHandlerTest, Constructors>;
}
@DartClass
export class CompletionDomainHandlerTest extends lib3.AbstractCompletionDomainTest {
    test_ArgumentList_constructor_named_param_label() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() { new A(^);}' + 'class A { A({one, two}) {} }');
            await this.getSuggestions();
            this.assertHasResult(CompletionSuggestionKind.NAMED_ARGUMENT,'one: ',{
                relevance : DART_RELEVANCE_NAMED_PARAMETER});
            this.assertHasResult(CompletionSuggestionKind.NAMED_ARGUMENT,'two: ',{
                relevance : DART_RELEVANCE_NAMED_PARAMETER});
            expect(this.suggestions,hasLength(2));
        } )());
    }

    test_ArgumentList_factory_named_param_label() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() { new A(^);}' + 'class A { factory A({one, two}) => null; }');
            await this.getSuggestions();
            this.assertHasResult(CompletionSuggestionKind.NAMED_ARGUMENT,'one: ',{
                relevance : DART_RELEVANCE_NAMED_PARAMETER});
            this.assertHasResult(CompletionSuggestionKind.NAMED_ARGUMENT,'two: ',{
                relevance : DART_RELEVANCE_NAMED_PARAMETER});
            expect(this.suggestions,hasLength(2));
        } )());
    }

    test_ArgumentList_imported_function_named_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() { int.parse("16", ^);}');
            await this.getSuggestions();
            this.assertHasResult(CompletionSuggestionKind.NAMED_ARGUMENT,'radix: ',{
                relevance : DART_RELEVANCE_NAMED_PARAMETER});
            this.assertHasResult(CompletionSuggestionKind.NAMED_ARGUMENT,'onError: ',{
                relevance : DART_RELEVANCE_NAMED_PARAMETER});
            expect(this.suggestions,hasLength(2));
        } )());
    }

    test_ArgumentList_imported_function_named_param1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() { foo(o^);} foo({one, two}) {}');
            await this.getSuggestions();
            this.assertHasResult(CompletionSuggestionKind.NAMED_ARGUMENT,'one: ',{
                relevance : DART_RELEVANCE_NAMED_PARAMETER});
            this.assertHasResult(CompletionSuggestionKind.NAMED_ARGUMENT,'two: ',{
                relevance : DART_RELEVANCE_NAMED_PARAMETER});
            expect(this.suggestions,hasLength(2));
        } )());
    }

    test_ArgumentList_imported_function_named_param2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('mainx() {A a = new A(); a.foo(one: 7, ^);}' + 'class A { foo({one, two}) {} }');
            await this.getSuggestions();
            this.assertHasResult(CompletionSuggestionKind.NAMED_ARGUMENT,'two: ',{
                relevance : DART_RELEVANCE_NAMED_PARAMETER});
            expect(this.suggestions,hasLength(1));
        } )());
    }

    test_ArgumentList_imported_function_named_param_label1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() { int.parse("16", r^: 16);}');
            await this.getSuggestions();
            this.assertHasResult(CompletionSuggestionKind.NAMED_ARGUMENT,'radix',{
                relevance : DART_RELEVANCE_NAMED_PARAMETER});
            this.assertHasResult(CompletionSuggestionKind.NAMED_ARGUMENT,'onError',{
                relevance : DART_RELEVANCE_NAMED_PARAMETER});
            expect(this.suggestions,hasLength(2));
        } )());
    }

    test_ArgumentList_imported_function_named_param_label3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() { int.parse("16", ^: 16);}');
            await this.getSuggestions();
            this.assertHasResult(CompletionSuggestionKind.NAMED_ARGUMENT,'radix: ',{
                relevance : DART_RELEVANCE_NAMED_PARAMETER});
            this.assertHasResult(CompletionSuggestionKind.NAMED_ARGUMENT,'onError: ',{
                relevance : DART_RELEVANCE_NAMED_PARAMETER});
            expect(this.suggestions,hasLength(2));
        } )());
    }

    test_catch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {try {} ^}');
            await this.getSuggestions();
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'on',{
                relevance : DART_RELEVANCE_KEYWORD});
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'catch',{
                relevance : DART_RELEVANCE_KEYWORD});
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'finally',{
                relevance : DART_RELEVANCE_KEYWORD});
            expect(this.suggestions,hasLength(3));
        } )());
    }

    test_catch2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {try {} on Foo {} ^}');
            await this.getSuggestions();
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'on',{
                relevance : DART_RELEVANCE_KEYWORD});
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'catch',{
                relevance : DART_RELEVANCE_KEYWORD});
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'finally',{
                relevance : DART_RELEVANCE_KEYWORD});
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'for',{
                relevance : DART_RELEVANCE_KEYWORD});
            this.suggestions.firstWhere((suggestion : any) =>  {
                return suggestion.kind != CompletionSuggestionKind.KEYWORD;
            },{
                orElse : () =>  {
                    fail('Expected suggestions other than keyword suggestions');
                }});
        } )());
    }

    test_catch3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {try {} catch (e) {} finally {} ^}');
            await this.getSuggestions();
            this.assertNoResult('on');
            this.assertNoResult('catch');
            this.assertNoResult('finally');
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'for',{
                relevance : DART_RELEVANCE_KEYWORD});
            this.suggestions.firstWhere((suggestion : any) =>  {
                return suggestion.kind != CompletionSuggestionKind.KEYWORD;
            },{
                orElse : () =>  {
                    fail('Expected suggestions other than keyword suggestions');
                }});
        } )());
    }

    test_catch4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {try {} finally {} ^}');
            await this.getSuggestions();
            this.assertNoResult('on');
            this.assertNoResult('catch');
            this.assertNoResult('finally');
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'for',{
                relevance : DART_RELEVANCE_KEYWORD});
            this.suggestions.firstWhere((suggestion : any) =>  {
                return suggestion.kind != CompletionSuggestionKind.KEYWORD;
            },{
                orElse : () =>  {
                    fail('Expected suggestions other than keyword suggestions');
                }});
        } )());
    }

    test_catch5() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {try {} ^ finally {}}');
            await this.getSuggestions();
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'on',{
                relevance : DART_RELEVANCE_KEYWORD});
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'catch',{
                relevance : DART_RELEVANCE_KEYWORD});
            expect(this.suggestions,hasLength(2));
        } )());
    }

    test_constructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {bool foo; A() : ^;}');
            await this.getSuggestions();
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'super',{
                relevance : DART_RELEVANCE_KEYWORD});
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'foo',{
                relevance : DART_RELEVANCE_LOCAL_FIELD});
        } )());
    }

    test_constructor2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {bool foo; A() : s^;}');
            await this.getSuggestions();
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'super',{
                relevance : DART_RELEVANCE_KEYWORD});
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'foo',{
                relevance : DART_RELEVANCE_LOCAL_FIELD});
        } )());
    }

    test_constructor3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {bool foo; A() : a=7,^;}');
            await this.getSuggestions();
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'super',{
                relevance : DART_RELEVANCE_KEYWORD});
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'foo',{
                relevance : DART_RELEVANCE_LOCAL_FIELD});
        } )());
    }

    test_constructor4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {bool foo; A() : a=7,s^;}');
            await this.getSuggestions();
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'super',{
                relevance : DART_RELEVANCE_KEYWORD});
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'foo',{
                relevance : DART_RELEVANCE_LOCAL_FIELD});
        } )());
    }

    test_constructor5() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {bool foo; A() : a=7,s^}');
            await this.getSuggestions();
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'super',{
                relevance : DART_RELEVANCE_KEYWORD});
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'foo',{
                relevance : DART_RELEVANCE_LOCAL_FIELD});
        } )());
    }

    test_constructor6() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {bool foo; A() : a=7,^ void bar() {}}');
            await this.getSuggestions();
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'super',{
                relevance : DART_RELEVANCE_KEYWORD});
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'foo',{
                relevance : DART_RELEVANCE_LOCAL_FIELD});
        } )());
    }

    test_html() {
        this.testFile = '/project/web/test.html';
        this.addTestFile('      <html>^</html>\n    ');
        return this.getSuggestions().then((_ : any) =>  {
            expect(this.replacementOffset,equals(this.completionOffset));
            expect(this.replacementLength,equals(0));
            expect(this.suggestions,hasLength(0));
        });
    }
    test_import_uri_with_trailing() {
        this.addFile('/project/bin/testA.dart','library libA;');
        this.addTestFile('      import \'/project/bin/t^.dart\';\n      main() {}');
        return this.getSuggestions().then((_ : any) =>  {
            expect(this.replacementOffset,equals(this.completionOffset - 14));
            expect(this.replacementLength,equals(5 + 14));
            this.assertHasResult(CompletionSuggestionKind.IMPORT,'/project/bin/testA.dart');
            this.assertNoResult('test');
        });
    }
    test_imports() {
        this.addTestFile('      import \'dart:html\';\n      main() {^}\n    ');
        return this.getSuggestions().then((_ : any) =>  {
            expect(this.replacementOffset,equals(this.completionOffset));
            expect(this.replacementLength,equals(0));
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'Object');
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'HtmlElement');
            this.assertNoResult('test');
        });
    }
    test_imports_aborted_new_request() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('        class foo { }\n        c^');
            let request1 : any = new bare.createInstance(any,null,this.testFile,this.completionOffset).toRequest('7');
            let responseFuture1 : async.Future<any> = this.waitResponse(request1);
            let request2 : any = new bare.createInstance(any,null,this.testFile,this.completionOffset).toRequest('8');
            let responseFuture2 : async.Future<any> = this.waitResponse(request2);
            let response1 : any = await responseFuture1;
            let result1 = new bare.createInstance(any,null,response1);
            this.assertValidId(result1.id);
            let response2 : any = await responseFuture2;
            let result2 = new bare.createInstance(any,null,response2);
            this.assertValidId(result2.id);
            await this.analysisHandler.server.analysisDriverScheduler.waitForIdle();
            await lib4.pumpEventQueue();
            expect(this.allSuggestions.get(result1.id),hasLength(0));
            expect(this.allSuggestions.get(result2.id),same(this.suggestions));
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'class',{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_imports_aborted_source_changed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('        class foo { }\n        c^');
            let request : any = new bare.createInstance(any,null,this.testFile,this.completionOffset).toRequest('0');
            let responseFuture : async.Future<any> = this.waitResponse(request);
            this.server.updateContent('uc1',new core.DartMap.literal([
                [this.testFile,new bare.createInstance(any,null,this.testCode)]]));
            this.server.updateContent('uc2',new core.DartMap.literal([
                [this.testFile,new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this.completionOffset - 1,1,'')))]]));
            let response : any = await responseFuture;
            this.completionId = response.id;
            this.assertValidId(this.completionId);
            await this.analysisHandler.server.analysisDriverScheduler.waitForIdle();
            await lib4.pumpEventQueue();
            expect(this.suggestionsDone,isTrue);
            expect(this.suggestions,hasLength(0));
        } )());
    }

    test_imports_incremental() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library foo;\n      e^\n      import "dart:async";\n      import "package:foo/foo.dart";\n      class foo { }');
            await this.waitForTasksFinished();
            this.server.updateContent('uc1',new core.DartMap.literal([
                [this.testFile,new bare.createInstance(any,null,this.testCode)]]));
            this.server.updateContent('uc2',new core.DartMap.literal([
                [this.testFile,new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this.completionOffset,0,'xp')))]]));
            this.completionOffset += 2;
            await this.getSuggestions();
            expect(this.replacementOffset,this.completionOffset - 3);
            expect(this.replacementLength,3);
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'export \'\';',{
                selectionOffset : 8,relevance : DART_RELEVANCE_HIGH});
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'import \'\';',{
                selectionOffset : 8,relevance : DART_RELEVANCE_HIGH});
            this.assertNoResult('extends');
            this.assertNoResult('library');
        } )());
    }

    test_imports_partial() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('^\n      import "package:foo/foo.dart";\n      import "package:bar/bar.dart";\n      class Baz { }');
            await this.waitForTasksFinished();
            let revisedContent : string = new core.DartString(this.testCode).substring(0,this.completionOffset) + 'i' + new core.DartString(this.testCode).substring(this.completionOffset);
            ++this.completionOffset;
            this.server.handleRequest(new bare.createInstance(any,null,new core.DartMap.literal([
                [this.testFile,new bare.createInstance(any,null,revisedContent)]])).toRequest('add1'));
            let response : any = await this.waitResponse(new bare.createInstance(any,null,this.testFile,this.completionOffset).toRequest('0'));
            this.completionId = response.id;
            this.assertValidId(this.completionId);
            await this.waitForTasksFinished();
            while (this.replacementOffset == null){
                await new async.Future.delayed(new core.DartDuration({
                    milliseconds : 5}));
            }
            expect(this.replacementOffset,this.completionOffset - 1);
            expect(this.replacementLength,1);
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'library',{
                relevance : DART_RELEVANCE_HIGH});
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'import \'\';',{
                selectionOffset : 8,relevance : DART_RELEVANCE_HIGH});
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'export \'\';',{
                selectionOffset : 8,relevance : DART_RELEVANCE_HIGH});
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'part \'\';',{
                selectionOffset : 6,relevance : DART_RELEVANCE_HIGH});
            this.assertNoResult('extends');
        } )());
    }

    test_imports_prefixed() {
        this.addTestFile('      import \'dart:html\' as foo;\n      main() {^}\n    ');
        return this.getSuggestions().then((_ : any) =>  {
            expect(this.replacementOffset,equals(this.completionOffset));
            expect(this.replacementLength,equals(0));
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'Object');
            this.assertHasResult(CompletionSuggestionKind.IDENTIFIER,'foo');
            this.assertNoResult('HtmlElement');
            this.assertNoResult('test');
        });
    }
    test_imports_prefixed2() {
        this.addTestFile('      import \'dart:html\' as foo;\n      main() {foo.^}\n    ');
        return this.getSuggestions().then((_ : any) =>  {
            expect(this.replacementOffset,equals(this.completionOffset));
            expect(this.replacementLength,equals(0));
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'HtmlElement');
            this.assertNoResult('test');
        });
    }
    test_inComment_block_beforeNode() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('  main(aaa, bbb) {\n    /* text ^ */\n    print(42);\n  }\n  ');
            await this.getSuggestions();
            expect(this.suggestions,isEmpty);
        } )());
    }

    test_inComment_endOfLine_beforeNode() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('  main(aaa, bbb) {\n    // text ^\n    print(42);\n  }\n  ');
            await this.getSuggestions();
            expect(this.suggestions,isEmpty);
        } )());
    }

    test_inComment_endOfLine_beforeToken() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('  main(aaa, bbb) {\n    // text ^\n  }\n  ');
            await this.getSuggestions();
            expect(this.suggestions,isEmpty);
        } )());
    }

    test_inDartDoc1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('  /// ^\n  main(aaa, bbb) {}\n  ');
            await this.getSuggestions();
            expect(this.suggestions,isEmpty);
        } )());
    }

    test_inDartDoc2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('  /// Some text^\n  main(aaa, bbb) {}\n  ');
            await this.getSuggestions();
            expect(this.suggestions,isEmpty);
        } )());
    }

    test_inDartDoc_reference1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('/testA.dart','  part of libA;\n  foo(bar) => 0;');
            this.addTestFile('  library libA;\n  part "/testA.dart";\n  import "dart:math";\n  /// The [^]\n  main(aaa, bbb) {}\n  ');
            await this.getSuggestions();
            this.assertHasResult(CompletionSuggestionKind.IDENTIFIER,'main',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertHasResult(CompletionSuggestionKind.IDENTIFIER,'foo',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
            this.assertHasResult(CompletionSuggestionKind.IDENTIFIER,'min');
        } )());
    }

    test_inDartDoc_reference2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('  /// The [m^]\n  main(aaa, bbb) {}\n  ');
            await this.getSuggestions();
            this.assertHasResult(CompletionSuggestionKind.IDENTIFIER,'main',{
                relevance : DART_RELEVANCE_LOCAL_FUNCTION});
        } )());
    }

    test_inherited() {
        this.addFile('/libA.dart','class A {m() {}}');
        this.addTestFile('import \'/libA.dart\';\nclass B extends A {\n  x() {^}\n}\n');
        return this.getSuggestions().then((_ : any) =>  {
            expect(this.replacementOffset,equals(this.completionOffset));
            expect(this.replacementLength,equals(0));
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'m');
        });
    }
    test_invocation() {
        this.addTestFile('class A {b() {}} main() {A a; a.^}');
        return this.getSuggestions().then((_ : any) =>  {
            expect(this.replacementOffset,equals(this.completionOffset));
            expect(this.replacementLength,equals(0));
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'b');
        });
    }
    test_invocation_sdk_relevancy_off() {
        let originalSorter = DartCompletionManager.contributionSorter;
        let mockSorter = new MockRelevancySorter();
        DartCompletionManager.contributionSorter = mockSorter;
        this.addTestFile('main() {Map m; m.^}');
        return this.getSuggestions().then((_ : any) =>  {
            expect(this.suggestions.any((s : any) =>  {
                return op(Op.EQUALS,s.relevance,DART_RELEVANCE_COMMON_USAGE);
            }),isFalse);
            DartCompletionManager.contributionSorter = originalSorter;
            mockSorter.enabled = false;
        });
    }
    test_invocation_sdk_relevancy_on() {
        this.addTestFile('main() {Map m; m.^}');
        return this.getSuggestions().then((_ : any) =>  {
            expect(this.suggestions.any((s : any) =>  {
                return op(Op.EQUALS,s.relevance,DART_RELEVANCE_COMMON_USAGE);
            }),isTrue);
        });
    }
    test_invocation_withTrailingStmt() {
        this.addTestFile('class A {b() {}} main() {A a; a.^ int x = 7;}');
        return this.getSuggestions().then((_ : any) =>  {
            expect(this.replacementOffset,equals(this.completionOffset));
            expect(this.replacementLength,equals(0));
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'b');
        });
    }
    test_keyword() {
        this.addTestFile('library A; cl^');
        return this.getSuggestions().then((_ : any) =>  {
            expect(this.replacementOffset,equals(this.completionOffset - 2));
            expect(this.replacementLength,equals(2));
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'export \'\';',{
                selectionOffset : 8,relevance : DART_RELEVANCE_HIGH});
            this.assertHasResult(CompletionSuggestionKind.KEYWORD,'class',{
                relevance : DART_RELEVANCE_HIGH});
        });
    }
    test_local_named_constructor() {
        this.addTestFile('class A {A.c(); x() {new A.^}}');
        return this.getSuggestions().then((_ : any) =>  {
            expect(this.replacementOffset,equals(this.completionOffset));
            expect(this.replacementLength,equals(0));
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'c');
            this.assertNoResult('A');
        });
    }
    test_local_override() {
        this.addFile('/libA.dart','class A {m() {}}');
        this.addTestFile('import \'/libA.dart\';\nclass B extends A {\n  m() {}\n  x() {^}\n}\n');
        return this.getSuggestions().then((_ : any) =>  {
            expect(this.replacementOffset,equals(this.completionOffset));
            expect(this.replacementLength,equals(0));
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'m',{
                relevance : DART_RELEVANCE_LOCAL_METHOD});
        });
    }
    test_locals() {
        this.addTestFile('class A {var a; x() {var b;^}} class DateTime { }');
        return this.getSuggestions().then((_ : any) =>  {
            expect(this.replacementOffset,equals(this.completionOffset));
            expect(this.replacementLength,equals(0));
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'A');
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'a',{
                relevance : DART_RELEVANCE_LOCAL_FIELD});
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'b',{
                relevance : DART_RELEVANCE_LOCAL_VARIABLE});
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'x',{
                relevance : DART_RELEVANCE_LOCAL_METHOD});
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'DateTime');
        });
    }
    test_offset_past_eof() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() { }',{
                offset : 300});
            let request : any = new bare.createInstance(any,null,this.testFile,this.completionOffset).toRequest('0');
            let response : any = await this.waitResponse(request);
            expect(response.id,'0');
            expect(response.error.code,RequestErrorCode.INVALID_PARAMETER);
        } )());
    }

    test_overrides() {
        this.addFile('/libA.dart','class A {m() {}}');
        this.addTestFile('import \'/libA.dart\';\nclass B extends A {m() {^}}\n');
        return this.getSuggestions().then((_ : any) =>  {
            expect(this.replacementOffset,equals(this.completionOffset));
            expect(this.replacementLength,equals(0));
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'m',{
                relevance : DART_RELEVANCE_LOCAL_METHOD});
        });
    }
    test_partFile() {
        this.addFile('/project/bin/testA.dart',`      library libA;\n      part "${this.testFile}";\n      import 'dart:html';\n      class A { }\n    `);
        this.addTestFile('      part of libA;\n      main() {^}');
        return this.getSuggestions().then((_ : any) =>  {
            expect(this.replacementOffset,equals(this.completionOffset));
            expect(this.replacementLength,equals(0));
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'Object');
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'HtmlElement');
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'A');
            this.assertNoResult('test');
        });
    }
    test_partFile2() {
        this.addFile('/testA.dart','      part of libA;\n      class A { }');
        this.addTestFile('      library libA;\n      part "/testA.dart";\n      import \'dart:html\';\n      main() {^}\n    ');
        return this.getSuggestions().then((_ : any) =>  {
            expect(this.replacementOffset,equals(this.completionOffset));
            expect(this.replacementLength,equals(0));
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'Object');
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'HtmlElement');
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'A');
            this.assertNoResult('test');
        });
    }
    test_sentToPlugins() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('      void main() {\n        ^\n      }\n    ');
            let info : any = new bare.createInstance(any,null,'a','b','c',null,null);
            let result : any = new bare.createInstance(any,null,1,2,new core.DartList.literal<any>(new bare.createInstance(any,null,CompletionSuggestionKind.IDENTIFIER,DART_RELEVANCE_DEFAULT,'plugin completion',3,0,false,false)));
            this.pluginManager.broadcastResults = new core.DartMap.literal([
                [info,new async.Future.value(result.toResponse('-',1))]]);
            await this.getSuggestions();
            this.assertHasResult(CompletionSuggestionKind.IDENTIFIER,'plugin completion',{
                selectionOffset : 3});
        } )());
    }

    test_simple() {
        this.addTestFile('      void main() {\n        ^\n      }\n    ');
        return this.getSuggestions().then((_ : any) =>  {
            expect(this.replacementOffset,equals(this.completionOffset));
            expect(this.replacementLength,equals(0));
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'Object');
            this.assertNoResult('HtmlElement');
            this.assertNoResult('test');
        });
    }
    test_static() {
        this.addTestFile('class A {static b() {} c() {}} main() {A.^}');
        return this.getSuggestions().then((_ : any) =>  {
            expect(this.replacementOffset,equals(this.completionOffset));
            expect(this.replacementLength,equals(0));
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'b');
            this.assertNoResult('c');
        });
    }
    test_topLevel() {
        this.addTestFile('      typedef foo();\n      var test = \'\';\n      main() {tes^t}\n    ');
        return this.getSuggestions().then((_ : any) =>  {
            expect(this.replacementOffset,equals(this.completionOffset - 3));
            expect(this.replacementLength,equals(4));
            this.assertHasResult(CompletionSuggestionKind.INVOCATION,'test',{
                relevance : DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE});
            this.assertNoResult('HtmlElement');
        });
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CompletionDomainHandlerTest() {
    }
}

export namespace MockRelevancySorter {
    export type Constructors = 'MockRelevancySorter';
    export type Interface = Omit<MockRelevancySorter, Constructors>;
}
@DartClass
@Implements(any)
export class MockRelevancySorter implements any.Interface {
    enabled : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    sort(request : any,suggestions : core.DartIterable<any>) : async.Future<any> {
        if (!this.enabled) {
            throw 'unexpected sort';
        }
        return new async.Future.value();
    }
    constructor() {
    }
    @defaultConstructor
    MockRelevancySorter() {
        this.enabled = true;
    }
}

export class properties {
}
