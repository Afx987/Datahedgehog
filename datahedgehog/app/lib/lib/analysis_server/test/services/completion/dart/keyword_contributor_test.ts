/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/completion/dart/keyword_contributor_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./completion_contributor_util";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(KeywordContributorTest);
    });
};
export namespace KeywordContributorTest {
    export type Constructors = lib3.DartCompletionContributorTest.Constructors | 'KeywordContributorTest';
    export type Interface = Omit<KeywordContributorTest, Constructors>;
}
@DartClass
export class KeywordContributorTest extends lib3.DartCompletionContributorTest {
    private static __$CLASS_BODY_KEYWORDS : core.DartList<any>;
    static get CLASS_BODY_KEYWORDS() : core.DartList<any> { 
        if (this.__$CLASS_BODY_KEYWORDS===undefined) {
            this.__$CLASS_BODY_KEYWORDS = new core.DartList.literal(Keyword.CONST,Keyword.DYNAMIC,Keyword.FACTORY,Keyword.FINAL,Keyword.GET,Keyword.OPERATOR,Keyword.SET,Keyword.STATIC,Keyword.VAR,Keyword.VOID);
        }
        return this.__$CLASS_BODY_KEYWORDS;
    }

    private static __$DECLARATION_KEYWORDS : core.DartList<any>;
    static get DECLARATION_KEYWORDS() : core.DartList<any> { 
        if (this.__$DECLARATION_KEYWORDS===undefined) {
            this.__$DECLARATION_KEYWORDS = new core.DartList.literal(Keyword.ABSTRACT,Keyword.CLASS,Keyword.CONST,Keyword.DYNAMIC,Keyword.FINAL,Keyword.TYPEDEF,Keyword.VAR,Keyword.VOID);
        }
        return this.__$DECLARATION_KEYWORDS;
    }

    private static __$DIRECTIVE_AND_DECLARATION_KEYWORDS : core.DartList<any>;
    static get DIRECTIVE_AND_DECLARATION_KEYWORDS() : core.DartList<any> { 
        if (this.__$DIRECTIVE_AND_DECLARATION_KEYWORDS===undefined) {
            this.__$DIRECTIVE_AND_DECLARATION_KEYWORDS = new core.DartList.literal(Keyword.ABSTRACT,Keyword.CLASS,Keyword.CONST,Keyword.DYNAMIC,Keyword.EXPORT,Keyword.FINAL,Keyword.IMPORT,Keyword.PART,Keyword.TYPEDEF,Keyword.VAR,Keyword.VOID);
        }
        return this.__$DIRECTIVE_AND_DECLARATION_KEYWORDS;
    }

    private static __$DIRECTIVE_DECLARATION_AND_LIBRARY_KEYWORDS : core.DartList<any>;
    static get DIRECTIVE_DECLARATION_AND_LIBRARY_KEYWORDS() : core.DartList<any> { 
        if (this.__$DIRECTIVE_DECLARATION_AND_LIBRARY_KEYWORDS===undefined) {
            this.__$DIRECTIVE_DECLARATION_AND_LIBRARY_KEYWORDS = new core.DartList.literal(Keyword.ABSTRACT,Keyword.CLASS,Keyword.CONST,Keyword.DYNAMIC,Keyword.EXPORT,Keyword.FINAL,Keyword.IMPORT,Keyword.LIBRARY,Keyword.PART,Keyword.TYPEDEF,Keyword.VAR,Keyword.VOID);
        }
        return this.__$DIRECTIVE_DECLARATION_AND_LIBRARY_KEYWORDS;
    }

    private static __$NO_PSEUDO_KEYWORDS : core.DartList<string>;
    static get NO_PSEUDO_KEYWORDS() : core.DartList<string> { 
        if (this.__$NO_PSEUDO_KEYWORDS===undefined) {
            this.__$NO_PSEUDO_KEYWORDS = new core.DartList.literal();
        }
        return this.__$NO_PSEUDO_KEYWORDS;
    }

    private static __$STMT_START_IN_CLASS : core.DartList<any>;
    static get STMT_START_IN_CLASS() : core.DartList<any> { 
        if (this.__$STMT_START_IN_CLASS===undefined) {
            this.__$STMT_START_IN_CLASS = new core.DartList.literal(Keyword.ASSERT,Keyword.CONST,Keyword.DO,Keyword.FINAL,Keyword.FOR,Keyword.IF,Keyword.NEW,Keyword.RETURN,Keyword.SUPER,Keyword.SWITCH,Keyword.THIS,Keyword.THROW,Keyword.TRY,Keyword.VAR,Keyword.VOID,Keyword.WHILE);
        }
        return this.__$STMT_START_IN_CLASS;
    }

    private static __$STMT_START_IN_LOOP_IN_CLASS : core.DartList<any>;
    static get STMT_START_IN_LOOP_IN_CLASS() : core.DartList<any> { 
        if (this.__$STMT_START_IN_LOOP_IN_CLASS===undefined) {
            this.__$STMT_START_IN_LOOP_IN_CLASS = new core.DartList.literal(Keyword.ASSERT,Keyword.BREAK,Keyword.CONST,Keyword.CONTINUE,Keyword.DO,Keyword.FINAL,Keyword.FOR,Keyword.IF,Keyword.NEW,Keyword.RETURN,Keyword.SUPER,Keyword.SWITCH,Keyword.THIS,Keyword.THROW,Keyword.TRY,Keyword.VAR,Keyword.VOID,Keyword.WHILE);
        }
        return this.__$STMT_START_IN_LOOP_IN_CLASS;
    }

    private static __$STMT_START_IN_SWITCH_IN_CLASS : core.DartList<any>;
    static get STMT_START_IN_SWITCH_IN_CLASS() : core.DartList<any> { 
        if (this.__$STMT_START_IN_SWITCH_IN_CLASS===undefined) {
            this.__$STMT_START_IN_SWITCH_IN_CLASS = new core.DartList.literal(Keyword.ASSERT,Keyword.BREAK,Keyword.CASE,Keyword.CONST,Keyword.DEFAULT,Keyword.DO,Keyword.FINAL,Keyword.FOR,Keyword.IF,Keyword.NEW,Keyword.RETURN,Keyword.SUPER,Keyword.SWITCH,Keyword.THIS,Keyword.THROW,Keyword.TRY,Keyword.VAR,Keyword.VOID,Keyword.WHILE);
        }
        return this.__$STMT_START_IN_SWITCH_IN_CLASS;
    }

    private static __$STMT_START_IN_SWITCH_OUTSIDE_CLASS : core.DartList<any>;
    static get STMT_START_IN_SWITCH_OUTSIDE_CLASS() : core.DartList<any> { 
        if (this.__$STMT_START_IN_SWITCH_OUTSIDE_CLASS===undefined) {
            this.__$STMT_START_IN_SWITCH_OUTSIDE_CLASS = new core.DartList.literal(Keyword.ASSERT,Keyword.BREAK,Keyword.CASE,Keyword.CONST,Keyword.DEFAULT,Keyword.DO,Keyword.FINAL,Keyword.FOR,Keyword.IF,Keyword.NEW,Keyword.RETURN,Keyword.SWITCH,Keyword.THROW,Keyword.TRY,Keyword.VAR,Keyword.VOID,Keyword.WHILE);
        }
        return this.__$STMT_START_IN_SWITCH_OUTSIDE_CLASS;
    }

    private static __$STMT_START_OUTSIDE_CLASS : core.DartList<any>;
    static get STMT_START_OUTSIDE_CLASS() : core.DartList<any> { 
        if (this.__$STMT_START_OUTSIDE_CLASS===undefined) {
            this.__$STMT_START_OUTSIDE_CLASS = new core.DartList.literal(Keyword.ASSERT,Keyword.CONST,Keyword.DO,Keyword.FINAL,Keyword.FOR,Keyword.IF,Keyword.NEW,Keyword.RETURN,Keyword.SWITCH,Keyword.THROW,Keyword.TRY,Keyword.VAR,Keyword.VOID,Keyword.WHILE);
        }
        return this.__$STMT_START_OUTSIDE_CLASS;
    }

    private static __$STMT_START_IN_LOOP_OUTSIDE_CLASS : core.DartList<any>;
    static get STMT_START_IN_LOOP_OUTSIDE_CLASS() : core.DartList<any> { 
        if (this.__$STMT_START_IN_LOOP_OUTSIDE_CLASS===undefined) {
            this.__$STMT_START_IN_LOOP_OUTSIDE_CLASS = new core.DartList.literal(Keyword.ASSERT,Keyword.BREAK,Keyword.CONST,Keyword.CONTINUE,Keyword.DO,Keyword.FINAL,Keyword.FOR,Keyword.IF,Keyword.NEW,Keyword.RETURN,Keyword.SWITCH,Keyword.THROW,Keyword.TRY,Keyword.VAR,Keyword.VOID,Keyword.WHILE);
        }
        return this.__$STMT_START_IN_LOOP_OUTSIDE_CLASS;
    }

    private static __$EXPRESSION_START_INSTANCE : core.DartList<any>;
    static get EXPRESSION_START_INSTANCE() : core.DartList<any> { 
        if (this.__$EXPRESSION_START_INSTANCE===undefined) {
            this.__$EXPRESSION_START_INSTANCE = new core.DartList.literal(Keyword.CONST,Keyword.FALSE,Keyword.NEW,Keyword.NULL,Keyword.SUPER,Keyword.THIS,Keyword.TRUE);
        }
        return this.__$EXPRESSION_START_INSTANCE;
    }

    private static __$EXPRESSION_START_NO_INSTANCE : core.DartList<any>;
    static get EXPRESSION_START_NO_INSTANCE() : core.DartList<any> { 
        if (this.__$EXPRESSION_START_NO_INSTANCE===undefined) {
            this.__$EXPRESSION_START_NO_INSTANCE = new core.DartList.literal(Keyword.CONST,Keyword.FALSE,Keyword.NEW,Keyword.NULL,Keyword.TRUE);
        }
        return this.__$EXPRESSION_START_NO_INSTANCE;
    }

    assertSuggestKeywords(expectedKeywords : core.DartIterable<any>,_namedArguments? : {pseudoKeywords? : core.DartList<string>,relevance? : number}) : void {
        let {pseudoKeywords,relevance} = Object.assign({
            "pseudoKeywords" : KeywordContributorTest.NO_PSEUDO_KEYWORDS,
            "relevance" : DART_RELEVANCE_KEYWORD}, _namedArguments );
        let expectedCompletions : core.DartSet<string> = new core.DartSet<string>();
        let expectedOffsets : core.DartMap<string,number> = new core.DartMap.literal([
        ]);
        let actualCompletions : core.DartSet<string> = new core.DartSet<string>();
        expectedCompletions.addAll(expectedKeywords.map((k : any) =>  {
            return k.lexeme;
        }));
        new core.DartList.literal('import','export','part').forEach((s : any) =>  {
            if (expectedCompletions.contains(s)) {
                expectedCompletions.remove(s);
                expectedCompletions.add(`${s} '';`);
            }
        });
        expectedCompletions.addAll(pseudoKeywords);
        for(let s of this.suggestions) {
            if (op(Op.EQUALS,s.kind,CompletionSuggestionKind.KEYWORD)) {
                let k : any = op(Op.INDEX,Keyword.keywords,s.completion);
                if (op(Op.EQUALS,k,null) && !expectedCompletions.contains(s.completion)) {
                    fail(`Invalid keyword suggested: ${s.completion}`);
                }else {
                    if (!actualCompletions.add(s.completion)) {
                        fail(`Duplicate keyword suggested: ${s.completion}`);
                    }
                }
            }
        }
        if (!this._equalSets(expectedCompletions,actualCompletions)) {
            let msg : core.DartStringBuffer = new core.DartStringBuffer();
            msg.writeln('Expected:');
            this._appendCompletions(msg,expectedCompletions,actualCompletions);
            msg.writeln('but found:');
            this._appendCompletions(msg,actualCompletions,expectedCompletions);
            fail(msg.toString());
        }
        for(let s of this.suggestions) {
            if (op(Op.EQUALS,s.kind,CompletionSuggestionKind.KEYWORD)) {
                if (s.completion.startsWith(Keyword.IMPORT.lexeme)) {
                    let importRelevance : number = relevance;
                    expect(s.relevance,equals(importRelevance),{
                        reason : s.completion});
                }else {
                    if (op(Op.EQUALS,s.completion,Keyword.RETHROW.lexeme)) {
                        expect(s.relevance,equals(relevance - 1),{
                            reason : s.completion});
                    }else {
                        expect(s.relevance,equals(relevance),{
                            reason : s.completion});
                    }
                }
                let expectedOffset : number = expectedOffsets.get(s.completion);
                if (expectedOffset == null) {
                    expectedOffset = s.completion.length;
                }
                expect(s.selectionOffset,equals(s.completion.endsWith('\'\';') ? expectedOffset - 2 : expectedOffset));
                expect(s.selectionLength,equals(0));
                expect(s.isDeprecated,equals(false));
                expect(s.isPotential,equals(false));
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createContributor() : any {
        return new bare.createInstance(any,null);
    }
    fail_import_partial() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('imp^ import "package:foo/foo.dart"; import "bar.dart";');
            await this.computeSuggestions();
            this.assertNotSuggested('class');
        } )());
    }

    fail_import_partial4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('^ imp import "package:foo/foo.dart";');
            await this.computeSuggestions();
            this.assertNotSuggested('class');
        } )());
    }

    fail_import_partial5() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('library libA; imp^ import "package:foo/foo.dart";');
            await this.computeSuggestions();
            this.assertNotSuggested('class');
        } )());
    }

    fail_import_partial6() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('library bar; import "zoo.dart"; imp^ import "package:foo/foo.dart";');
            await this.computeSuggestions();
            this.assertNotSuggested('class');
        } )());
    }

    test_after_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} ^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.DECLARATION_KEYWORDS,{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_after_class2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {} c^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.DECLARATION_KEYWORDS,{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_after_import() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "foo"; ^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.DIRECTIVE_AND_DECLARATION_KEYWORDS,{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_after_import2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "foo"; c^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.DIRECTIVE_AND_DECLARATION_KEYWORDS,{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_anonymous_function_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {foo(() ^ {}}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(),{
                pseudoKeywords : new core.DartList.literal('async','async*','sync*'),relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_anonymous_function_async2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {foo(() a^ {}}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_OUTSIDE_CLASS,{
                pseudoKeywords : new core.DartList.literal('async','async*','sync*')});
        } )());
    }

    test_anonymous_function_async3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {foo(() async ^ {}}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal());
        } )());
    }

    test_anonymous_function_async4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {foo(() ^ => 2}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(),{
                pseudoKeywords : new core.DartList.literal('async'),relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_anonymous_function_async5() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {foo(() ^}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_NO_INSTANCE,{
                pseudoKeywords : new core.DartList.literal('async','async*','sync*')});
        } )());
    }

    test_anonymous_function_async6() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {foo("bar", () as^{}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(),{
                pseudoKeywords : new core.DartList.literal('async','async*','sync*'),relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_anonymous_function_async7() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {foo("bar", () as^ => null');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(),{
                pseudoKeywords : new core.DartList.literal('async','async*','sync*'),relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_argument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {foo(^);}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_NO_INSTANCE);
        } )());
    }

    test_argument2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {foo(n^);}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_NO_INSTANCE);
        } )());
    }

    test_argument_literal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {foo("^");}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal());
        } )());
    }

    test_argument_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {foo(bar: ^);}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_NO_INSTANCE);
        } )());
    }

    test_argument_named2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {foo(bar: n^);}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_NO_INSTANCE);
        } )());
    }

    test_argument_named_literal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {foo(bar: "^");}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal());
        } )());
    }

    test_assignment_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {var foo = ^}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_NO_INSTANCE);
        } )());
    }

    test_assignment_field2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {var foo = n^}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_NO_INSTANCE);
        } )());
    }

    test_assignment_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {var foo = ^}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_NO_INSTANCE);
        } )());
    }

    test_assignment_local2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {var foo = n^}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_NO_INSTANCE);
        } )());
    }

    test_assignment_local2_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() async {var foo = n^}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_NO_INSTANCE,{
                pseudoKeywords : new core.DartList.literal('await')});
        } )());
    }

    test_assignment_local_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() async {var foo = ^}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_NO_INSTANCE,{
                pseudoKeywords : new core.DartList.literal('await')});
        } )());
    }

    test_before_import() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('^ import foo;');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.EXPORT,Keyword.IMPORT,Keyword.LIBRARY,Keyword.PART),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_catch_1a() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} ^}');
            await this.computeSuggestions();
            let keywords = new core.DartList.literal<any>();
            keywords.add(Keyword.CATCH);
            keywords.add(Keyword.FINALLY);
            this.assertSuggestKeywords(keywords,{
                pseudoKeywords : new core.DartList.literal('on')});
        } )());
    }

    test_catch_1b() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} c^}');
            await this.computeSuggestions();
            let keywords = new core.DartList.literal<any>();
            keywords.add(Keyword.CATCH);
            keywords.add(Keyword.FINALLY);
            this.assertSuggestKeywords(keywords,{
                pseudoKeywords : new core.DartList.literal('on')});
        } )());
    }

    test_catch_1c() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} ^;}');
            await this.computeSuggestions();
            let keywords = new core.DartList.literal<any>();
            keywords.add(Keyword.CATCH);
            keywords.add(Keyword.FINALLY);
            this.assertSuggestKeywords(keywords,{
                pseudoKeywords : new core.DartList.literal('on')});
        } )());
    }

    test_catch_1d() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} ^ Foo foo;}');
            await this.computeSuggestions();
            let keywords = new core.DartList.literal<any>();
            keywords.add(Keyword.CATCH);
            keywords.add(Keyword.FINALLY);
            this.assertSuggestKeywords(keywords,{
                pseudoKeywords : new core.DartList.literal('on')});
        } )());
    }

    test_catch_2a() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} on SomeException {} ^}');
            await this.computeSuggestions();
            let keywords = new core.DartList.literal<any>();
            keywords.add(Keyword.CATCH);
            keywords.add(Keyword.FINALLY);
            keywords.addAll(KeywordContributorTest.STMT_START_OUTSIDE_CLASS);
            this.assertSuggestKeywords(keywords,{
                pseudoKeywords : new core.DartList.literal('on')});
        } )());
    }

    test_catch_2b() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} on SomeException {} c^}');
            await this.computeSuggestions();
            let keywords = new core.DartList.literal<any>();
            keywords.add(Keyword.CATCH);
            keywords.add(Keyword.FINALLY);
            keywords.addAll(KeywordContributorTest.STMT_START_OUTSIDE_CLASS);
            this.assertSuggestKeywords(keywords,{
                pseudoKeywords : new core.DartList.literal('on')});
        } )());
    }

    test_catch_2c() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} on SomeException {} ^;}');
            await this.computeSuggestions();
            let keywords = new core.DartList.literal<any>();
            keywords.add(Keyword.CATCH);
            keywords.add(Keyword.FINALLY);
            keywords.addAll(KeywordContributorTest.STMT_START_OUTSIDE_CLASS);
            this.assertSuggestKeywords(keywords,{
                pseudoKeywords : new core.DartList.literal('on')});
        } )());
    }

    test_catch_2d() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} on SomeException {} ^ Foo foo;}');
            await this.computeSuggestions();
            let keywords = new core.DartList.literal<any>();
            keywords.add(Keyword.CATCH);
            keywords.add(Keyword.FINALLY);
            keywords.addAll(KeywordContributorTest.STMT_START_OUTSIDE_CLASS);
            this.assertSuggestKeywords(keywords,{
                pseudoKeywords : new core.DartList.literal('on')});
        } )());
    }

    test_catch_3a() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} catch (e) {} ^}');
            await this.computeSuggestions();
            let keywords = new core.DartList.literal<any>();
            keywords.add(Keyword.CATCH);
            keywords.add(Keyword.FINALLY);
            keywords.addAll(KeywordContributorTest.STMT_START_OUTSIDE_CLASS);
            this.assertSuggestKeywords(keywords,{
                pseudoKeywords : new core.DartList.literal('on')});
        } )());
    }

    test_catch_3b() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} catch (e) {} c^}');
            await this.computeSuggestions();
            let keywords = new core.DartList.literal<any>();
            keywords.add(Keyword.CATCH);
            keywords.add(Keyword.FINALLY);
            keywords.addAll(KeywordContributorTest.STMT_START_OUTSIDE_CLASS);
            this.assertSuggestKeywords(keywords,{
                pseudoKeywords : new core.DartList.literal('on')});
        } )());
    }

    test_catch_3c() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} catch (e) {} ^;}');
            await this.computeSuggestions();
            let keywords = new core.DartList.literal<any>();
            keywords.add(Keyword.CATCH);
            keywords.add(Keyword.FINALLY);
            keywords.addAll(KeywordContributorTest.STMT_START_OUTSIDE_CLASS);
            this.assertSuggestKeywords(keywords,{
                pseudoKeywords : new core.DartList.literal('on')});
        } )());
    }

    test_catch_3d() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} catch (e) {} ^ Foo foo;}');
            await this.computeSuggestions();
            let keywords = new core.DartList.literal<any>();
            keywords.add(Keyword.CATCH);
            keywords.add(Keyword.FINALLY);
            keywords.addAll(KeywordContributorTest.STMT_START_OUTSIDE_CLASS);
            this.assertSuggestKeywords(keywords,{
                pseudoKeywords : new core.DartList.literal('on')});
        } )());
    }

    test_catch_4a1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} ^ on SomeException {}}');
            await this.computeSuggestions();
            let keywords = new core.DartList.literal<any>();
            keywords.add(Keyword.CATCH);
            this.assertSuggestKeywords(keywords,{
                pseudoKeywords : new core.DartList.literal('on')});
        } )());
    }

    test_catch_4a2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} c^ on SomeException {}}');
            await this.computeSuggestions();
            let keywords = new core.DartList.literal<any>();
            keywords.add(Keyword.CATCH);
            keywords.add(Keyword.FINALLY);
            this.assertSuggestKeywords(keywords,{
                pseudoKeywords : new core.DartList.literal('on')});
        } )());
    }

    test_catch_4b1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} ^ catch (e) {}}');
            await this.computeSuggestions();
            let keywords = new core.DartList.literal<any>();
            keywords.add(Keyword.CATCH);
            this.assertSuggestKeywords(keywords,{
                pseudoKeywords : new core.DartList.literal('on')});
        } )());
    }

    test_catch_4b2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} c^ catch (e) {}}');
            await this.computeSuggestions();
            let keywords = new core.DartList.literal<any>();
            keywords.add(Keyword.CATCH);
            keywords.add(Keyword.FINALLY);
            this.assertSuggestKeywords(keywords,{
                pseudoKeywords : new core.DartList.literal('on')});
        } )());
    }

    test_catch_4c1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} ^ finally {}}');
            await this.computeSuggestions();
            let keywords = new core.DartList.literal<any>();
            keywords.add(Keyword.CATCH);
            this.assertSuggestKeywords(keywords,{
                pseudoKeywords : new core.DartList.literal('on')});
        } )());
    }

    test_catch_4c2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} c^ finally {}}');
            await this.computeSuggestions();
            let keywords = new core.DartList.literal<any>();
            keywords.add(Keyword.CATCH);
            keywords.add(Keyword.FINALLY);
            this.assertSuggestKeywords(keywords,{
                pseudoKeywords : new core.DartList.literal('on')});
        } )());
    }

    test_catch_block() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {try {} catch (e) {^}}}');
            await this.computeSuggestions();
            let keywords = new core.DartList.literal<any>();
            keywords.addAll(KeywordContributorTest.STMT_START_OUTSIDE_CLASS);
            keywords.add(Keyword.RETHROW);
            this.assertSuggestKeywords(keywords);
        } )());
    }

    test_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A e^ { }');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.EXTENDS,Keyword.IMPLEMENTS),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_class_body() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {^}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.CLASS_BODY_KEYWORDS);
        } )());
    }

    test_class_body_beginning() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {^ var foo;}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.CLASS_BODY_KEYWORDS);
        } )());
    }

    test_class_body_between() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {var bar; ^ var foo;}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.CLASS_BODY_KEYWORDS);
        } )());
    }

    test_class_body_end() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {var foo; ^}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.CLASS_BODY_KEYWORDS);
        } )());
    }

    test_class_extends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A extends foo ^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.IMPLEMENTS,Keyword.WITH),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_class_extends2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A extends foo i^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.IMPLEMENTS,Keyword.WITH),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_class_extends3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A extends foo i^ { }');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.IMPLEMENTS,Keyword.WITH),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_class_extends_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A extends ^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal());
        } )());
    }

    test_class_implements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A ^ implements foo');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.EXTENDS),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_class_implements2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A e^ implements foo');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.EXTENDS,Keyword.IMPLEMENTS),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_class_implements3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A e^ implements foo { }');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.EXTENDS,Keyword.IMPLEMENTS),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_class_implements_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A implements ^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal());
        } )());
    }

    test_class_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class ^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal());
        } )());
    }

    test_class_noBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A ^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.EXTENDS,Keyword.IMPLEMENTS),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_class_noBody2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A e^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.EXTENDS,Keyword.IMPLEMENTS),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_class_noBody3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A e^ String foo;');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.EXTENDS,Keyword.IMPLEMENTS),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_class_with() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A extends foo with bar ^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.IMPLEMENTS),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_class_with2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A extends foo with bar i^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.IMPLEMENTS),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_class_with3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A extends foo with bar i^ { }');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.IMPLEMENTS),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_class_with_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A extends foo with ^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal());
        } )());
    }

    test_constructor_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { A(^) {});}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.THIS));
        } )());
    }

    test_constructor_param2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { A(t^) {});}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.THIS));
        } )());
    }

    test_do_break_continue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {do {^} while (true);}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_IN_LOOP_OUTSIDE_CLASS,{
                relevance : DART_RELEVANCE_KEYWORD});
        } )());
    }

    test_do_break_continue2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {foo() {do {^} while (true);}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_IN_LOOP_IN_CLASS,{
                relevance : DART_RELEVANCE_KEYWORD});
        } )());
    }

    test_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.DIRECTIVE_DECLARATION_AND_LIBRARY_KEYWORDS,{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_for_break_continue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {for (int x in myList) {^}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_IN_LOOP_OUTSIDE_CLASS,{
                relevance : DART_RELEVANCE_KEYWORD});
        } )());
    }

    test_for_break_continue2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {foo() {for (int x in myList) {^}}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_IN_LOOP_IN_CLASS,{
                relevance : DART_RELEVANCE_KEYWORD});
        } )());
    }

    test_for_expression_in() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {for (int x i^)}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.IN),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_for_expression_in2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {for (int x in^)}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.IN),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_for_expression_in_inInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {for (int i^)}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal());
        } )());
    }

    test_for_expression_init() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {for (int x = i^)}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_NO_INSTANCE);
        } )());
    }

    test_for_expression_init2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {for (int x = in^)}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_NO_INSTANCE);
        } )());
    }

    test_for_initialization_var() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {for (^)}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.VAR),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_function_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main()^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.DECLARATION_KEYWORDS,{
                pseudoKeywords : new core.DartList.literal('async','async*','sync*'),relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_function_async2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main()^{}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(),{
                pseudoKeywords : new core.DartList.literal('async','async*','sync*'),relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_function_async3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main()a^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.DECLARATION_KEYWORDS,{
                pseudoKeywords : new core.DartList.literal('async','async*','sync*'),relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_function_async4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main()a^{}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.DECLARATION_KEYWORDS,{
                pseudoKeywords : new core.DartList.literal('async','async*','sync*'),relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_function_async5() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main()a^ Foo foo;');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.DECLARATION_KEYWORDS,{
                pseudoKeywords : new core.DartList.literal('async','async*','sync*'),relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_function_body_inClass_constructorInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('foo(p) {}\nclass A {\n  final f;\n  A() : f = foo(() {^});\n}\n');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_OUTSIDE_CLASS);
        } )());
    }

    test_function_body_inClass_constructorInitializer_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('foo(p) {}\nclass A {\n  final f;\n  A() : f = foo(() async {^});\n}\n');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_OUTSIDE_CLASS,{
                pseudoKeywords : new core.DartList.literal('await')});
        } )());
    }

    test_function_body_inClass_constructorInitializer_async_star() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('  foo(p) {}\n  class A {\n    final f;\n    A() : f = foo(() async* {^});\n  }\n  ');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_OUTSIDE_CLASS,{
                pseudoKeywords : new core.DartList.literal('await','yield','yield*')});
        } )());
    }

    test_function_body_inClass_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {\n  var f = () {^};\n}\n');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_OUTSIDE_CLASS);
        } )());
    }

    test_function_body_inClass_methodBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {\n  m() {\n    f() {^};\n  }\n}\n');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_IN_CLASS);
        } )());
    }

    test_function_body_inClass_methodBody_inFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {\n  m() {\n    f() {\n      f2() {^};\n    };\n  }\n}\n');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_IN_CLASS);
        } )());
    }

    test_function_body_inClass_methodBody_inFunction_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {\n  m() {\n    f() {\n      f2() async {^};\n    };\n  }\n}\n');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_IN_CLASS,{
                pseudoKeywords : new core.DartList.literal('await')});
        } )());
    }

    test_function_body_inClass_methodBody_inFunction_async_star() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('  class A {\n    m() {\n      f() {\n        f2() async* {^};\n      };\n    }\n  }\n  ');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_IN_CLASS,{
                pseudoKeywords : new core.DartList.literal('await','yield','yield*')});
        } )());
    }

    test_function_body_inUnit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {^}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_OUTSIDE_CLASS);
        } )());
    }

    test_function_body_inUnit_afterBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {{}^}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_OUTSIDE_CLASS);
        } )());
    }

    test_function_body_inUnit_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() async {^}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_OUTSIDE_CLASS,{
                pseudoKeywords : new core.DartList.literal('await')});
        } )());
    }

    test_function_body_inUnit_async_star() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() async* {n^}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_OUTSIDE_CLASS,{
                pseudoKeywords : new core.DartList.literal('await','yield','yield*')});
        } )());
    }

    test_function_body_inUnit_async_star2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() async* {n^ foo}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_OUTSIDE_CLASS,{
                pseudoKeywords : new core.DartList.literal('await','yield','yield*')});
        } )());
    }

    test_function_body_inUnit_sync_star() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() sync* {n^}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_OUTSIDE_CLASS,{
                pseudoKeywords : new core.DartList.literal('await','yield','yield*')});
        } )());
    }

    test_function_body_inUnit_sync_star2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() sync* {n^ foo}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_OUTSIDE_CLASS,{
                pseudoKeywords : new core.DartList.literal('await','yield','yield*')});
        } )());
    }

    test_if_after_else() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { if (true) {} else ^ }');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_OUTSIDE_CLASS,{
                relevance : DART_RELEVANCE_KEYWORD});
        } )());
    }

    test_if_afterThen_nextCloseCurlyBrace0() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { if (true) {} ^ }');
            await this.computeSuggestions();
            this.assertSuggestKeywords(((_) : core.DartList<any> =>  {
                {
                    _.add(Keyword.ELSE);
                    return _;
                }
            })(KeywordContributorTest.STMT_START_OUTSIDE_CLASS.toList()),{
                relevance : DART_RELEVANCE_KEYWORD});
        } )());
    }

    test_if_afterThen_nextCloseCurlyBrace1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { if (true) {} e^ }');
            await this.computeSuggestions();
            this.assertSuggestKeywords(((_) : core.DartList<any> =>  {
                {
                    _.add(Keyword.ELSE);
                    return _;
                }
            })(KeywordContributorTest.STMT_START_OUTSIDE_CLASS.toList()),{
                relevance : DART_RELEVANCE_KEYWORD});
        } )());
    }

    test_if_afterThen_nextStatement0() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { if (true) {} ^ print(0); }');
            await this.computeSuggestions();
            this.assertSuggestKeywords(((_) : core.DartList<any> =>  {
                {
                    _.add(Keyword.ELSE);
                    return _;
                }
            })(KeywordContributorTest.STMT_START_OUTSIDE_CLASS.toList()),{
                relevance : DART_RELEVANCE_KEYWORD});
        } )());
    }

    test_if_condition_isKeyword() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { if (v i^) {} }');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.IS),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_if_condition_isKeyword2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() { if (v i^ && false) {} }');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.IS),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_if_expression_in_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {foo() {if (^) }}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_INSTANCE);
        } )());
    }

    test_if_expression_in_class2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {foo() {if (n^) }}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_INSTANCE);
        } )());
    }

    test_if_expression_in_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('foo() {if (^) }');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_NO_INSTANCE);
        } )());
    }

    test_if_expression_in_function2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('foo() {if (n^) }');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_NO_INSTANCE);
        } )());
    }

    test_if_in_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {foo() {if (true) ^}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_IN_CLASS);
        } )());
    }

    test_if_in_class2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {foo() {if (true) ^;}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_IN_CLASS);
        } )());
    }

    test_if_in_class3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {foo() {if (true) r^;}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_IN_CLASS);
        } )());
    }

    test_if_in_class4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {foo() {if (true) ^ go();}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_IN_CLASS);
        } )());
    }

    test_if_outside_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('foo() {if (true) ^}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_OUTSIDE_CLASS);
        } )());
    }

    test_if_outside_class2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('foo() {if (true) ^;}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_OUTSIDE_CLASS);
        } )());
    }

    test_if_outside_class3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('foo() {if (true) r^;}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_OUTSIDE_CLASS);
        } )());
    }

    test_if_outside_class4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('foo() {if (true) ^ go();}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_OUTSIDE_CLASS);
        } )());
    }

    test_import() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "foo" deferred as foo ^;');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(),{
                pseudoKeywords : new core.DartList.literal('show','hide'),relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_import_as() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "foo" deferred ^;');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.AS),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_import_as2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "foo" deferred a^;');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.AS),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_import_as3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "foo" deferred a^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.AS),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_import_deferred() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "foo" ^ as foo;');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.DEFERRED),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_import_deferred2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "foo" d^ as foo;');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.DEFERRED),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_import_deferred3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "foo" d^ show foo;');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.AS),{
                pseudoKeywords : new core.DartList.literal('deferred as'),relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_import_deferred4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "foo" d^ hide foo;');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.AS),{
                pseudoKeywords : new core.DartList.literal('deferred as'),relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_import_deferred5() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "foo" d^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.AS),{
                pseudoKeywords : new core.DartList.literal('deferred as','show','hide'),relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_import_deferred6() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "foo" d^ import');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.AS),{
                pseudoKeywords : new core.DartList.literal('deferred as','show','hide'),relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_import_deferred_as() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "foo" ^;');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.AS),{
                pseudoKeywords : new core.DartList.literal('deferred as','show','hide'),relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_import_deferred_as2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "foo" d^;');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.AS),{
                pseudoKeywords : new core.DartList.literal('deferred as','show','hide'),relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_import_deferred_as3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "foo" ^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.AS),{
                pseudoKeywords : new core.DartList.literal('deferred as','show','hide'),relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_import_deferred_as4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "foo" d^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.AS),{
                pseudoKeywords : new core.DartList.literal('deferred as','show','hide'),relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_import_deferred_as5() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "foo" sh^ import "bar"; import "baz";');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.AS),{
                pseudoKeywords : new core.DartList.literal('deferred as','show','hide'),relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_import_deferred_not() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "foo" as foo ^;');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(),{
                pseudoKeywords : new core.DartList.literal('show','hide'),relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_import_deferred_partial() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "package:foo/foo.dart" def^ as foo;');
            await this.computeSuggestions();
            expect(this.replacementOffset,30);
            expect(this.replacementLength,3);
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.DEFERRED),{
                relevance : DART_RELEVANCE_HIGH});
            expect(this.suggestions[0].selectionOffset,8);
            expect(this.suggestions[0].selectionLength,0);
        } )());
    }

    test_import_incomplete() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "^"');
            await this.computeSuggestions();
            expect(this.suggestions,isEmpty);
        } )());
    }

    test_import_partial() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('imp^ import "package:foo/foo.dart"; import "bar.dart";');
            await this.computeSuggestions();
            expect(this.replacementOffset,0);
            expect(this.replacementLength,3);
            this.assertSuggestKeywords(KeywordContributorTest.DIRECTIVE_DECLARATION_AND_LIBRARY_KEYWORDS,{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_import_partial2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('^imp import "package:foo/foo.dart";');
            await this.computeSuggestions();
            expect(this.replacementOffset,0);
            expect(this.replacementLength,3);
            this.assertSuggestKeywords(KeywordContributorTest.DIRECTIVE_DECLARATION_AND_LIBRARY_KEYWORDS,{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_import_partial3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource(' ^imp import "package:foo/foo.dart"; import "bar.dart";');
            await this.computeSuggestions();
            expect(this.replacementOffset,1);
            expect(this.replacementLength,3);
            this.assertSuggestKeywords(KeywordContributorTest.DIRECTIVE_DECLARATION_AND_LIBRARY_KEYWORDS,{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_import_partial4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('^ imp import "package:foo/foo.dart";');
            await this.computeSuggestions();
            expect(this.replacementOffset,0);
            expect(this.replacementLength,0);
            this.assertSuggestKeywords(KeywordContributorTest.DIRECTIVE_DECLARATION_AND_LIBRARY_KEYWORDS,{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_import_partial5() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('library libA; imp^ import "package:foo/foo.dart";');
            await this.computeSuggestions();
            expect(this.replacementOffset,14);
            expect(this.replacementLength,3);
            this.assertSuggestKeywords(KeywordContributorTest.DIRECTIVE_AND_DECLARATION_KEYWORDS,{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_import_partial6() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('library bar; import "zoo.dart"; imp^ import "package:foo/foo.dart";');
            await this.computeSuggestions();
            expect(this.replacementOffset,32);
            expect(this.replacementLength,3);
            this.assertSuggestKeywords(KeywordContributorTest.DIRECTIVE_AND_DECLARATION_KEYWORDS,{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_is_expression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {if (x is^)}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.IS),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_is_expression_partial() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {if (x i^)}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.IS),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_library() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('library foo;^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.DIRECTIVE_AND_DECLARATION_KEYWORDS,{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_library_declaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('library ^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal());
        } )());
    }

    test_library_declaration2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('library a^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal());
        } )());
    }

    test_library_declaration3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('library a.^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal());
        } )());
    }

    test_library_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('library ^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal());
        } )());
    }

    test_method_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() ^}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.CLASS_BODY_KEYWORDS,{
                pseudoKeywords : new core.DartList.literal('async','async*','sync*')});
        } )());
    }

    test_method_async2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() ^{}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(),{
                pseudoKeywords : new core.DartList.literal('async','async*','sync*'),relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_method_async3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() a^}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.CLASS_BODY_KEYWORDS,{
                pseudoKeywords : new core.DartList.literal('async','async*','sync*')});
        } )());
    }

    test_method_async4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() a^{}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.CLASS_BODY_KEYWORDS,{
                pseudoKeywords : new core.DartList.literal('async','async*','sync*')});
        } )());
    }

    test_method_async5() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() ^ Foo foo;}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.CLASS_BODY_KEYWORDS,{
                pseudoKeywords : new core.DartList.literal('async','async*','sync*')});
        } )());
    }

    test_method_async6() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() a^ Foo foo;}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.CLASS_BODY_KEYWORDS,{
                pseudoKeywords : new core.DartList.literal('async','async*','sync*')});
        } )());
    }

    test_method_async7() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() ^ => Foo foo;}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(),{
                pseudoKeywords : new core.DartList.literal('async'),relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_method_async8() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() a^ Foo foo;}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.CLASS_BODY_KEYWORDS,{
                pseudoKeywords : new core.DartList.literal('async','async*','sync*')});
        } )());
    }

    test_method_body() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() {^}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_IN_CLASS);
        } )());
    }

    test_method_body2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() => ^}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_INSTANCE);
        } )());
    }

    test_method_body3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() => ^ Foo foo;}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_INSTANCE);
        } )());
    }

    test_method_body4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() => ^;}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_INSTANCE);
        } )());
    }

    test_method_body_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() async {^}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_IN_CLASS,{
                pseudoKeywords : new core.DartList.literal('await')});
        } )());
    }

    test_method_body_async2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() async => ^}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_INSTANCE,{
                pseudoKeywords : new core.DartList.literal('await')});
        } )());
    }

    test_method_body_async3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() async => ^ Foo foo;}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_INSTANCE,{
                pseudoKeywords : new core.DartList.literal('await')});
        } )());
    }

    test_method_body_async4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() async => ^;}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_INSTANCE,{
                pseudoKeywords : new core.DartList.literal('await')});
        } )());
    }

    test_method_body_async_star() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() async* {^}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_IN_CLASS,{
                pseudoKeywords : new core.DartList.literal('await','yield','yield*')});
        } )());
    }

    test_method_body_expression1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() {return b == true ? ^}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_INSTANCE);
        } )());
    }

    test_method_body_expression2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() {return b == true ? 1 : ^}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_INSTANCE);
        } )());
    }

    test_method_body_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() {return ^}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_INSTANCE);
        } )());
    }

    test_method_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() {bar.^}}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_method_invocation2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() {bar.as^}}');
            await this.computeSuggestions();
            this.assertNoSuggestions();
        } )());
    }

    test_method_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo(^) {});}');
            await this.computeSuggestions();
            expect(this.suggestions,isEmpty);
        } )());
    }

    test_method_param2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo(t^) {});}');
            await this.computeSuggestions();
            expect(this.suggestions,isEmpty);
        } )());
    }

    test_method_param_named_init() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo({bool bar: ^}) {}}');
            await this.computeSuggestions();
            expect(this.suggestions,isNotEmpty);
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_NO_INSTANCE);
        } )());
    }

    test_method_param_named_init2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo({bool bar: f^}) {}}');
            await this.computeSuggestions();
            expect(this.suggestions,isNotEmpty);
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_NO_INSTANCE);
        } )());
    }

    test_method_param_positional_init() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo([bool bar = ^]) {}}');
            await this.computeSuggestions();
            expect(this.suggestions,isNotEmpty);
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_NO_INSTANCE);
        } )());
    }

    test_method_param_positional_init2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo([bool bar = f^]) {}}');
            await this.computeSuggestions();
            expect(this.suggestions,isNotEmpty);
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_NO_INSTANCE);
        } )());
    }

    test_named_constructor_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('void main() {new Future.^}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal());
        } )());
    }

    test_newInstance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() {new ^}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal());
        } )());
    }

    test_newInstance2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() {new ^ print("foo");}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal());
        } )());
    }

    test_newInstance_prefixed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() {new A.^}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal());
        } )());
    }

    test_newInstance_prefixed2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() {new A.^ print("foo");}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal());
        } )());
    }

    test_part_of() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('part of foo;^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.DIRECTIVE_AND_DECLARATION_KEYWORDS,{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_partial_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('cl^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.DIRECTIVE_DECLARATION_AND_LIBRARY_KEYWORDS,{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_partial_class2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('library a; cl^');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.DIRECTIVE_AND_DECLARATION_KEYWORDS,{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_prefixed_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { int x; foo() {x.^}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal());
        } )());
    }

    test_prefixed_field2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { int x; foo() {x.^ print("foo");}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal());
        } )());
    }

    test_prefixed_library() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('import "b" as b; class A { foo() {b.^}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal());
        } )());
    }

    test_prefixed_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() {int x; x.^}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal());
        } )());
    }

    test_prefixed_local2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { foo() {int x; x.^ print("foo");}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal());
        } )());
    }

    test_property_access() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A { get x => 7; foo() {new A().^}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal());
        } )());
    }

    test_switch_expression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {switch(^) {}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_NO_INSTANCE);
        } )());
    }

    test_switch_expression2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {switch(n^) {}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_NO_INSTANCE);
        } )());
    }

    test_switch_expression3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {switch(n^)}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.EXPRESSION_START_NO_INSTANCE);
        } )());
    }

    test_switch_start() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {switch(1) {^}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.CASE,Keyword.DEFAULT),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_switch_start2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {switch(1) {^ case 1:}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.CASE,Keyword.DEFAULT),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_switch_start3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {switch(1) {^default:}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.CASE,Keyword.DEFAULT),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_switch_start4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {switch(1) {^ default:}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.CASE,Keyword.DEFAULT),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_switch_start5() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {switch(1) {c^ default:}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,19);
            expect(this.replacementLength,1);
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.CASE,Keyword.DEFAULT),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_switch_start6() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {switch(1) {c^}}');
            await this.computeSuggestions();
            expect(this.replacementOffset,19);
            expect(this.replacementLength,1);
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.CASE,Keyword.DEFAULT),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_switch_start7() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {switch(1) { c^ }}');
            await this.computeSuggestions();
            expect(this.replacementOffset,20);
            expect(this.replacementLength,1);
            this.assertSuggestKeywords(new core.DartList.literal(Keyword.CASE,Keyword.DEFAULT),{
                relevance : DART_RELEVANCE_HIGH});
        } )());
    }

    test_switch_statement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {switch(1) {case 1:^}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_IN_SWITCH_OUTSIDE_CLASS);
        } )());
    }

    test_switch_statement2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A{foo() {switch(1) {case 1:^}}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_IN_SWITCH_IN_CLASS);
        } )());
    }

    test_while_break_continue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('main() {while (true) {^}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_IN_LOOP_OUTSIDE_CLASS,{
                relevance : DART_RELEVANCE_KEYWORD});
        } )());
    }

    test_while_break_continue2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource('class A {foo() {while (true) {^}}}');
            await this.computeSuggestions();
            this.assertSuggestKeywords(KeywordContributorTest.STMT_START_IN_LOOP_IN_CLASS,{
                relevance : DART_RELEVANCE_KEYWORD});
        } )());
    }

    _appendCompletions(msg : core.DartStringBuffer,completions : core.DartIterable<string>,other : core.DartIterable<string>) : void {
        let sorted : core.DartList<string> = completions.toList();
        sorted.sort((c1 : any,c2 : any) =>  {
            return new core.DartString(c1).compareTo(c2);
        });
        sorted.forEach((c : any) =>  {
            return msg.writeln(`  ${c}, ${other.contains(c) ? '' : '<<<<<<<<<<<'}`);
        });
    }
    _equalSets(iter1 : core.DartIterable<string>,iter2 : core.DartIterable<string>) : boolean {
        if (iter1.length != iter2.length) return false;
        if (iter1.any((c : any) =>  {
            return !iter2.contains(c);
        })) return false;
        if (iter2.any((c : any) =>  {
            return !iter1.contains(c);
        })) return false;
        return true;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    KeywordContributorTest() {
    }
}

export class properties {
}
