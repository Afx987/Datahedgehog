/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/compile_time_error_code_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./resolver_test_case";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(CompileTimeErrorCodeTest);
    });
};
export namespace CompileTimeErrorCodeTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'CompileTimeErrorCodeTest';
    export type Interface = Omit<CompileTimeErrorCodeTest, Constructors>;
}
@DartClass
export class CompileTimeErrorCodeTest extends lib3.ResolverTestCase {
    fail_awaitInWrongContext_sync() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(x) {\n  return await x;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.AWAIT_IN_WRONG_CONTEXT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    fail_awaitInWrongContext_syncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(x) sync* {\n  yield await x;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.AWAIT_IN_WRONG_CONTEXT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    fail_constEvalThrowsException() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {\n  const C();\n}\nf() { return const C(); }');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_CONSTRUCTOR_THROWS_EXCEPTION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    fail_invalidIdentifierInAsync_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m() async {\n    int async;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_IDENTIFIER_IN_ASYNC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    fail_invalidIdentifierInAsync_await() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m() async {\n    int await;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_IDENTIFIER_IN_ASYNC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    fail_invalidIdentifierInAsync_yield() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m() async {\n    int yield;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_IDENTIFIER_IN_ASYNC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    fail_mixinDeclaresConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() {}\n}\nclass B extends Object mixin A {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_DECLARES_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    fail_mixinOfNonClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('var A;\nclass B extends Object mixin A {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_OF_NON_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    fail_objectCannotExtendAnotherClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.OBJECT_CANNOT_EXTEND_ANOTHER_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    fail_superInitializerInObject() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.SUPER_INITIALIZER_IN_OBJECT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    fail_yieldEachInNonGenerator_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() async {\n  yield* 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.YIELD_EACH_IN_NON_GENERATOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    fail_yieldEachInNonGenerator_sync() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  yield* 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.YIELD_IN_NON_GENERATOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    fail_yieldInNonGenerator_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() async {\n  yield 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.YIELD_IN_NON_GENERATOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    fail_yieldInNonGenerator_sync() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  yield 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.YIELD_EACH_IN_NON_GENERATOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_accessPrivateEnumField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('enum E { ONE }\nString name(E e) {\n  return e._name;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.ACCESS_PRIVATE_ENUM_FIELD));
        } )());
    }

    test_ambiguousExport() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nexport \'lib1.dart\';\nexport \'lib2.dart\';');
            this.addNamedSource("/lib1.dart",'library lib1;\nclass N {}');
            this.addNamedSource("/lib2.dart",'library lib2;\nclass N {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.AMBIGUOUS_EXPORT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_annotationWithNotClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class Property {\n  final int value;\n  const Property(this.value);\n}\n\nconst Property property = const Property(42);\n\n@property(123)\nmain() {\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.ANNOTATION_WITH_NON_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_annotationWithNotClass_prefixed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/annotations.dart",'class Property {\n  final int value;\n  const Property(this.value);\n}\n\nconst Property property = const Property(42);\n');
            let source : any = this.addSource('import \'annotations.dart\' as pref;\n@pref.property(123)\nmain() {\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.ANNOTATION_WITH_NON_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_used_as_identifier_in_annotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const int async = 0;\nf() async {\n  g(@async x) {}\n  g(0);\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_used_as_identifier_in_argument_label() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('@proxy\nclass C {}\nf() async {\n  new C().g(async: 0);\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
        } )());
    }

    test_async_used_as_identifier_in_async_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() async {\n  var async = 1;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_used_as_identifier_in_async_star_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() async* {\n  var async = 1;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_used_as_identifier_in_break_statement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() async {\n  while (true) {\n    break async;\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER,CompileTimeErrorCode.LABEL_UNDEFINED));
        } )());
    }

    test_async_used_as_identifier_in_cascaded_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {\n  int async() => 1;\n}\nf() async {\n  return new C()..async();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_used_as_identifier_in_cascaded_setter_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {\n  void set async(int i) {}\n}\nf() async {\n  return new C()..async = 1;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_used_as_identifier_in_catch_exception_argument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('g() {}\nf() async {\n  try {\n    g();\n  } catch (async) { }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_used_as_identifier_in_catch_stacktrace_argument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('g() {}\nf() async {\n  try {\n    g();\n  } catch (e, async) { }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_used_as_identifier_in_continue_statement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() async {\n  while (true) {\n    continue async;\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER,CompileTimeErrorCode.LABEL_UNDEFINED));
        } )());
    }

    test_async_used_as_identifier_in_for_statement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('var async;\nf() async {\n  for (async in []) {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_used_as_identifier_in_formal_parameter_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() async {\n  g(int async) {}\n  g(0);\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_used_as_identifier_in_getter_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {\n  int get async => 1;\n}\nf() async {\n  return new C().async;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_used_as_identifier_in_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {\n  int async() => 1;\n}\nf() async {\n  return new C().async();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_used_as_identifier_in_local_function_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() async {\n  int async() => null;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_used_as_identifier_in_prefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\' as async;\nf() async {\n  return new async.Future.value(0);\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_used_as_identifier_in_setter_name() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {\n  void set async(int i) {}\n}\nf() async {\n  new C().async = 1;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_used_as_identifier_in_statement_label() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() async {\n  async: g();\n}\ng() {}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_used_as_identifier_in_string_interpolation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int async = 1;\nf() async {\n  return "$async";\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_used_as_identifier_in_suffix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib1.dart",'library lib1;\nint async;\n');
            let source : any = this.addSource('import \'lib1.dart\' as l;\nf() async {\n  return l.async;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_used_as_identifier_in_switch_label() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() async {\n  switch (0) {\n    async: case 0: break;\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_used_as_identifier_in_sync_star_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() sync* {\n  var async = 1;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_asyncForInWrongContext() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(list) {\n  await for (var e in list) {\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.ASYNC_FOR_IN_WRONG_CONTEXT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_await_used_as_identifier_in_async_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() async {\n  var await = 1;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_await_used_as_identifier_in_async_star_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() async* {\n  var await = 1;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_await_used_as_identifier_in_sync_star_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() sync* {\n  var await = 1;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_bug_23176() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A([x]);\n}\nclass B {\n  dynamic @A(const A()) x;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.EXPECTED_CLASS_MEMBER,ParserErrorCode.MISSING_CONST_FINAL_VAR_OR_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_builtInIdentifierAsMixinName_classTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B {}\nclass as = A with B;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.BUILT_IN_IDENTIFIER_AS_TYPEDEF_NAME));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_builtInIdentifierAsPrefixName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("import 'dart:async' as abstract;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.BUILT_IN_IDENTIFIER_AS_PREFIX_NAME,HintCode.UNUSED_IMPORT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_builtInIdentifierAsType_formalParameter_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var x;\n  A(static this.x);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.BUILT_IN_IDENTIFIER_AS_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_builtInIdentifierAsType_formalParameter_simple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(static x) {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.BUILT_IN_IDENTIFIER_AS_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_builtInIdentifierAsType_variableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  typedef x;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.BUILT_IN_IDENTIFIER_AS_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_builtInIdentifierAsTypedefName_functionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("typedef bool as();");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.BUILT_IN_IDENTIFIER_AS_TYPEDEF_NAME));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_builtInIdentifierAsTypeName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class as {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.BUILT_IN_IDENTIFIER_AS_TYPE_NAME));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_builtInIdentifierAsTypeParameterName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A<as> {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.BUILT_IN_IDENTIFIER_AS_TYPE_PARAMETER_NAME));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_caseExpressionTypeImplementsEquals() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class IntWrapper {\n  final int value;\n  const IntWrapper(this.value);\n  bool operator ==(IntWrapper x) {\n    return value == x.value;\n  }\n  get hashCode => value;\n}\n\nf(var a) {\n  switch(a) {\n    case(const IntWrapper(1)) : return 1;\n    default: return 0;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CASE_EXPRESSION_TYPE_IMPLEMENTS_EQUALS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingConstructorNameAndMember_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int x;\n  A.x() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONFLICTING_CONSTRUCTOR_NAME_AND_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingConstructorNameAndMember_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int get x => 42;\n  A.x() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONFLICTING_CONSTRUCTOR_NAME_AND_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingConstructorNameAndMember_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A.x();\n  void x() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONFLICTING_CONSTRUCTOR_NAME_AND_METHOD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingGetterAndMethod_field_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final int m = 0;\n}\nclass B extends A {\n  m() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONFLICTING_GETTER_AND_METHOD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingGetterAndMethod_getter_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  get m => 0;\n}\nclass B extends A {\n  m() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONFLICTING_GETTER_AND_METHOD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingGetterAndMethod_method_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m() {}\n}\nclass B extends A {\n  int m;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONFLICTING_METHOD_AND_GETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingGetterAndMethod_method_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m() {}\n}\nclass B extends A {\n  get m => 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONFLICTING_METHOD_AND_GETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingTypeVariableAndClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class T<T> {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONFLICTING_TYPE_VARIABLE_AND_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingTypeVariableAndMember_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<T> {\n  var T;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONFLICTING_TYPE_VARIABLE_AND_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingTypeVariableAndMember_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<T> {\n  get T => null;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONFLICTING_TYPE_VARIABLE_AND_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingTypeVariableAndMember_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<T> {\n  T() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONFLICTING_TYPE_VARIABLE_AND_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingTypeVariableAndMember_method_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<T> {\n  static T() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONFLICTING_TYPE_VARIABLE_AND_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingTypeVariableAndMember_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<T> {\n  set T(x) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONFLICTING_TYPE_VARIABLE_AND_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_consistentCaseExpressionTypes_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static const S = \'A.S\';\n}\n\nconst S = \'S\';\n\nfoo(var p) {\n  switch (p) {\n    case S:\n      break;\n    case A.S:\n      break;\n    case \'abc\':\n      break;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constConstructor_redirect_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<T> {\n  const A(T value) : this._(value);\n  const A._(T value) : value = value;\n  final T value;\n}\n\nvoid main(){\n  const A<int>(1);\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constConstructorWithFieldInitializedByNonConst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final int i = f();\n  const A();\n}\nint f() {\n  return 3;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_CONSTRUCTOR_WITH_FIELD_INITIALIZED_BY_NON_CONST,CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constConstructorWithFieldInitializedByNonConst_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static final int i = f();\n  const A();\n}\nint f() {\n  return 3;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constConstructorWithMixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {\n}\nclass A extends Object with M {\n  const A();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_CONSTRUCTOR_WITH_MIXIN));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constConstructorWithNonConstSuper_explicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A();\n}\nclass B extends A {\n  const B(): super();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_CONSTRUCTOR_WITH_NON_CONST_SUPER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constConstructorWithNonConstSuper_implicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A();\n}\nclass B extends A {\n  const B();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_CONSTRUCTOR_WITH_NON_CONST_SUPER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constConstructorWithNonFinalField_mixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var a;\n}\nclass B extends Object with A {\n  const B();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_CONSTRUCTOR_WITH_MIXIN,CompileTimeErrorCode.CONST_CONSTRUCTOR_WITH_NON_FINAL_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constConstructorWithNonFinalField_super() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var a;\n}\nclass B extends A {\n  const B();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_CONSTRUCTOR_WITH_NON_FINAL_FIELD,CompileTimeErrorCode.CONST_CONSTRUCTOR_WITH_NON_CONST_SUPER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constConstructorWithNonFinalField_this() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int x;\n  const A();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_CONSTRUCTOR_WITH_NON_FINAL_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constDeferredClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nclass A {\n  const A();\n}','library root;\nimport \'lib1.dart\' deferred as a;\nmain() {\n  const a.A();\n}'),new core.DartList.literal<any>(CompileTimeErrorCode.CONST_DEFERRED_CLASS));
        } )());
    }

    test_constDeferredClass_namedConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nclass A {\n  const A.b();\n}','library root;\nimport \'lib1.dart\' deferred as a;\nmain() {\n  const a.A.b();\n}'),new core.DartList.literal<any>(CompileTimeErrorCode.CONST_DEFERRED_CLASS));
        } )());
    }

    test_constEval_newInstance_constConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A();\n}\nconst a = new A();');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constEval_newInstance_externalFactoryConstConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  external factory const A();\n}\nconst x = const A();');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constEval_nonStaticField_inGenericClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C<T> {\n  const C();\n  T get t => null;\n}\n\nconst x = const C().t;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constEval_propertyExtraction_targetNotConst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A();\n  m() {}\n}\nfinal a = const A();\nconst C = a.m;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constEvalThrowsException_binaryMinus_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._check_constEvalThrowsException_binary_null("null - 5",false);
            await this._check_constEvalThrowsException_binary_null("5 - null",true);
        } )());
    }

    test_constEvalThrowsException_binaryPlus_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._check_constEvalThrowsException_binary_null("null + 5",false);
            await this._check_constEvalThrowsException_binary_null("5 + null",true);
        } )());
    }

    test_constEvalThrowsException_divisionByZero() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("const C = 1 ~/ 0;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_EVAL_THROWS_IDBZE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constEvalThrowsException_finalAlreadySet_initializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {\n  final x = 1;\n  const C() : x = 2;\n}\nvar x = const C();\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION,StaticWarningCode.FIELD_INITIALIZED_IN_INITIALIZER_AND_DECLARATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constEvalThrowsException_finalAlreadySet_initializing_formal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {\n  final x = 1;\n  const C(this.x);\n}\nvar x = const C(2);\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION,StaticWarningCode.FINAL_INITIALIZED_IN_DECLARATION_AND_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constEvalThrowsException_unaryBitNot_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("const C = ~null;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION));
        } )());
    }

    test_constEvalThrowsException_unaryNegated_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("const C = -null;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION));
        } )());
    }

    test_constEvalThrowsException_unaryNot_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("const C = !null;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constEvalTypeBool_binary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._check_constEvalTypeBool_withParameter_binary("p && ''");
            await this._check_constEvalTypeBool_withParameter_binary("p || ''");
        } )());
    }

    test_constEvalTypeBool_binary_leftTrue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("const C = (true || 0);");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_EVAL_TYPE_BOOL,StaticTypeWarningCode.NON_BOOL_OPERAND,HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constEvalTypeBoolNumString_equal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A();\n}\nclass B {\n  final a;\n  const B(num p) : a = p == const A();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_EVAL_TYPE_BOOL_NUM_STRING));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constEvalTypeBoolNumString_notEqual() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A();\n}\nclass B {\n  final a;\n  const B(String p) : a = p != const A();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_EVAL_TYPE_BOOL_NUM_STRING));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constEvalTypeInt_binary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._check_constEvalTypeInt_withParameter_binary("p ^ ''");
            await this._check_constEvalTypeInt_withParameter_binary("p & ''");
            await this._check_constEvalTypeInt_withParameter_binary("p | ''");
            await this._check_constEvalTypeInt_withParameter_binary("p >> ''");
            await this._check_constEvalTypeInt_withParameter_binary("p << ''");
        } )());
    }

    test_constEvalTypeNum_binary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._check_constEvalTypeNum_withParameter_binary("p + ''");
            await this._check_constEvalTypeNum_withParameter_binary("p - ''");
            await this._check_constEvalTypeNum_withParameter_binary("p * ''");
            await this._check_constEvalTypeNum_withParameter_binary("p / ''");
            await this._check_constEvalTypeNum_withParameter_binary("p ~/ ''");
            await this._check_constEvalTypeNum_withParameter_binary("p > ''");
            await this._check_constEvalTypeNum_withParameter_binary("p < ''");
            await this._check_constEvalTypeNum_withParameter_binary("p >= ''");
            await this._check_constEvalTypeNum_withParameter_binary("p <= ''");
            await this._check_constEvalTypeNum_withParameter_binary("p % ''");
        } )());
    }

    test_constFormalParameter_fieldFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var x;\n  A(const this.x) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_FORMAL_PARAMETER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constFormalParameter_simpleFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("f(const x) {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_FORMAL_PARAMETER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constInitializedWithNonConstValue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(p) {\n  const C = p;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constInitializedWithNonConstValue_finalField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class Foo {\n  final field = [];\n  foo([int x = field]) {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NON_CONSTANT_DEFAULT_VALUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constInitializedWithNonConstValue_missingConstInListLiteral() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("const List L = [0];");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constInitializedWithNonConstValue_missingConstInMapLiteral() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("const Map M = {'a' : 0};");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constInitializedWithNonConstValueFromDeferredClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nconst V = 1;','library root;\nimport \'lib1.dart\' deferred as a;\nconst B = a.V;'),new core.DartList.literal<any>(CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE_FROM_DEFERRED_LIBRARY));
        } )());
    }

    test_constInitializedWithNonConstValueFromDeferredClass_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nconst V = 1;','library root;\nimport \'lib1.dart\' deferred as a;\nconst B = a.V + 1;'),new core.DartList.literal<any>(CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE_FROM_DEFERRED_LIBRARY));
        } )());
    }

    test_constInstanceField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {\n  const int f = 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_INSTANCE_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constMapKeyTypeImplementsEquals_direct() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A();\n  operator ==(other) => false;\n}\nmain() {\n  const {const A() : 0};\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_MAP_KEY_EXPRESSION_TYPE_IMPLEMENTS_EQUALS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constMapKeyTypeImplementsEquals_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A();\n  operator ==(other) => false;\n}\nclass B {\n  static const a = const A();\n}\nmain() {\n  const {B.a : 0};\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_MAP_KEY_EXPRESSION_TYPE_IMPLEMENTS_EQUALS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constMapKeyTypeImplementsEquals_factory() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A { const factory A() = B; }\n\nclass B implements A {\n  const B();\n\n  operator ==(o) => true;\n}\n\nmain() {\n  var m = const { const A(): 42 };\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_MAP_KEY_EXPRESSION_TYPE_IMPLEMENTS_EQUALS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constMapKeyTypeImplementsEquals_super() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A();\n  operator ==(other) => false;\n}\nclass B extends A {\n  const B();\n}\nmain() {\n  const {const B() : 0};\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_MAP_KEY_EXPRESSION_TYPE_IMPLEMENTS_EQUALS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constWithInvalidTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A();\n}\nf() { return const A<A>(); }');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_WITH_INVALID_TYPE_PARAMETERS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constWithInvalidTypeParameters_tooFew() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass C<K, V> {\n  const C();\n}\nf(p) {\n  return const C<A>();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_WITH_INVALID_TYPE_PARAMETERS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constWithInvalidTypeParameters_tooMany() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass C<E> {\n  const C();\n}\nf(p) {\n  return const C<A, A>();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_WITH_INVALID_TYPE_PARAMETERS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constWithNonConst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class T {\n  T(a, b, {c, d}) {}\n}\nf() { return const T(0, 1, c: 2, d: 3); }');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_WITH_NON_CONST));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constWithNonConst_with() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B {\n  const B();\n}\nclass C = B with M;\nclass M {}\nconst x = const C();\nmain() {\n  print(x);\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_WITH_NON_CONST));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constWithNonConstantArgument_annotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(int p);\n}\nvar v = 42;\n@A(v)\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_WITH_NON_CONSTANT_ARGUMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constWithNonConstantArgument_instanceCreation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(a);\n}\nf(p) { return const A(p); }');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_WITH_NON_CONSTANT_ARGUMENT,CompileTimeErrorCode.INVALID_CONSTANT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constWithNonType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int A;\nf() {\n  return const A();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_WITH_NON_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constWithNonType_fromLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source1 : any = this.addNamedSource("/lib.dart","");
            let source2 : any = this.addNamedSource("/lib2.dart",'import \'lib.dart\' as lib;\nvoid f() {\n  const lib.A();\n}');
            await this.computeAnalysisResult(source1);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source2,new core.DartList.literal(CompileTimeErrorCode.CONST_WITH_NON_TYPE));
            this.verify(new core.DartList.literal(source1));
        } )());
    }

    test_constWithTypeParameters_direct() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<T> {\n  static const V = const A<T>();\n  const A();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_WITH_TYPE_PARAMETERS,StaticWarningCode.TYPE_PARAMETER_REFERENCED_BY_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constWithTypeParameters_indirect() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<T> {\n  static const V = const A<List<T>>();\n  const A();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_WITH_TYPE_PARAMETERS,StaticWarningCode.TYPE_PARAMETER_REFERENCED_BY_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constWithUndefinedConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A();\n}\nf() {\n  return const A.noSuchConstructor();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_WITH_UNDEFINED_CONSTRUCTOR));
        } )());
    }

    test_constWithUndefinedConstructorDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A.name();\n}\nf() {\n  return const A();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_WITH_UNDEFINED_CONSTRUCTOR_DEFAULT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_defaultValueInFunctionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("typedef F([x = 0]);");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DEFAULT_VALUE_IN_FUNCTION_TYPE_ALIAS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_defaultValueInFunctionTypedParameter_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("f(g({p: null})) {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DEFAULT_VALUE_IN_FUNCTION_TYPED_PARAMETER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_defaultValueInFunctionTypedParameter_optional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("f(g([p = null])) {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DEFAULT_VALUE_IN_FUNCTION_TYPED_PARAMETER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_defaultValueInRedirectingFactoryConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  factory A([int x = 0]) = B;\n}\n\nclass B implements A {\n  B([int x = 1]) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DEFAULT_VALUE_IN_REDIRECTING_FACTORY_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateConstructorName_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A.a() {}\n  A.a() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_CONSTRUCTOR_NAME,CompileTimeErrorCode.DUPLICATE_CONSTRUCTOR_NAME));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateConstructorName_unnamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() {}\n  A() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_CONSTRUCTOR_DEFAULT,CompileTimeErrorCode.DUPLICATE_CONSTRUCTOR_DEFAULT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateDefinition_acrossLibraries() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let librarySource : any = this.addNamedSource("/lib.dart",'library lib;\n\npart \'a.dart\';\npart \'b.dart\';');
            let sourceA : any = this.addNamedSource("/a.dart",'part of lib;\n\nclass A {}');
            let sourceB : any = this.addNamedSource("/b.dart",'part of lib;\n\nclass A {}');
            await this.computeAnalysisResult(librarySource);
            await this.computeAnalysisResult(sourceA);
            await this.computeAnalysisResult(sourceB);
            this.assertNoErrors(librarySource);
            this.assertErrors(sourceB,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_DEFINITION));
            this.verify(new core.DartList.literal(librarySource,sourceA,sourceB));
        } )());
    }

    test_duplicateDefinition_catch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {\n  try {} catch (e, e) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_DEFINITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateDefinition_classMembers_fields() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int a;\n  int a;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_DEFINITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateDefinition_classMembers_fields_oneStatic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int x;\n  static int x;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_DEFINITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateDefinition_classMembers_methods() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m() {}\n  m() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_DEFINITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateDefinition_inPart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let librarySource : any = this.addNamedSource("/lib.dart",'library test;\npart \'a.dart\';\nclass A {}');
            let sourceA : any = this.addNamedSource("/a.dart",'part of test;\nclass A {}');
            await this.computeAnalysisResult(librarySource);
            await this.computeAnalysisResult(sourceA);
            this.assertNoErrors(librarySource);
            this.assertErrors(sourceA,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_DEFINITION));
            this.verify(new core.DartList.literal(librarySource,sourceA));
        } )());
    }

    test_duplicateDefinition_locals_inCase() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {\n  switch(1) {\n    case 1:\n      var a;\n      var a;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_DEFINITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateDefinition_locals_inFunctionBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {\n  int m = 0;\n  m(a) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_DEFINITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateDefinition_locals_inIf() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main(int p) {\n  if (p != 0) {\n    var a;\n    var a;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_DEFINITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateDefinition_locals_inMethodBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m() {\n    int a;\n    int a;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_DEFINITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateDefinition_parameters_inConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int a;\n  A(int a, this.a);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_DEFINITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateDefinition_parameters_inFunctionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef F(int a, double a);\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_DEFINITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateDefinition_parameters_inLocalFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {\n  f(int a, double a) {\n  };\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_DEFINITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateDefinition_parameters_inMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m(int a, double a) {\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_DEFINITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateDefinition_parameters_inTopLevelFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(int a, double a) {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_DEFINITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateDefinition_typeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<T, T> {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_DEFINITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateDefinitionInheritance_instanceGetter_staticGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int get x => 0;\n}\nclass B extends A {\n  static int get x => 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_DEFINITION_INHERITANCE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateDefinitionInheritance_instanceGetterAbstract_staticGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  int get x;\n}\nclass B extends A {\n  static int get x => 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_DEFINITION_INHERITANCE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateDefinitionInheritance_instanceMethod_staticMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  x() {}\n}\nclass B extends A {\n  static x() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_DEFINITION_INHERITANCE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateDefinitionInheritance_instanceMethodAbstract_staticMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  x();\n}\nabstract class B extends A {\n  static x() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_DEFINITION_INHERITANCE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateDefinitionInheritance_instanceSetter_staticSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  set x(value) {}\n}\nclass B extends A {\n  static set x(value) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_DEFINITION_INHERITANCE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateDefinitionInheritance_instanceSetterAbstract_staticSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  set x(value);\n}\nclass B extends A {\n  static set x(value) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_DEFINITION_INHERITANCE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateNamedArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f({a, b}) {}\nmain() {\n  f(a: 1, a: 2);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_NAMED_ARGUMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicatePart_sameSource() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/part.dart','part of lib;');
            let source : any = this.addSource('library lib;\npart \'part.dart\';\npart \'foo/../part.dart\';\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_PART));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicatePart_sameUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/part.dart','part of lib;');
            let source : any = this.addSource('library lib;\npart \'part.dart\';\npart \'part.dart\';\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_PART));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_exportInternalLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("export 'dart:_interceptors';");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.EXPORT_INTERNAL_LIBRARY));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_exportOfNonLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nexport \'lib1.dart\';');
            this.addNamedSource("/lib1.dart","part of lib;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.EXPORT_OF_NON_LIBRARY));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extendsDeferredClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nclass A {}','library root;\nimport \'lib1.dart\' deferred as a;\nclass B extends a.A {}'),new core.DartList.literal<any>(CompileTimeErrorCode.EXTENDS_DEFERRED_CLASS));
        } )());
    }

    test_extendsDeferredClass_classTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nclass A {}','library root;\nimport \'lib1.dart\' deferred as a;\nclass M {}\nclass C = a.A with M;'),new core.DartList.literal<any>(CompileTimeErrorCode.EXTENDS_DEFERRED_CLASS));
        } )());
    }

    test_extendsDisallowedClass_class_bool() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A extends bool {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.EXTENDS_DISALLOWED_CLASS,CompileTimeErrorCode.NO_DEFAULT_SUPER_CONSTRUCTOR_IMPLICIT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extendsDisallowedClass_class_double() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A extends double {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.EXTENDS_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extendsDisallowedClass_class_int() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A extends int {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.EXTENDS_DISALLOWED_CLASS,CompileTimeErrorCode.NO_DEFAULT_SUPER_CONSTRUCTOR_IMPLICIT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extendsDisallowedClass_class_Null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A extends Null {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.EXTENDS_DISALLOWED_CLASS,CompileTimeErrorCode.NO_DEFAULT_SUPER_CONSTRUCTOR_IMPLICIT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extendsDisallowedClass_class_num() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A extends num {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.EXTENDS_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extendsDisallowedClass_class_String() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A extends String {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.EXTENDS_DISALLOWED_CLASS,CompileTimeErrorCode.NO_DEFAULT_SUPER_CONSTRUCTOR_IMPLICIT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extendsDisallowedClass_classTypeAlias_bool() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {}\nclass C = bool with M;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.EXTENDS_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extendsDisallowedClass_classTypeAlias_double() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {}\nclass C = double with M;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.EXTENDS_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extendsDisallowedClass_classTypeAlias_int() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {}\nclass C = int with M;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.EXTENDS_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extendsDisallowedClass_classTypeAlias_Null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {}\nclass C = Null with M;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.EXTENDS_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extendsDisallowedClass_classTypeAlias_num() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {}\nclass C = num with M;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.EXTENDS_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extendsDisallowedClass_classTypeAlias_String() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {}\nclass C = String with M;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.EXTENDS_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extendsEnum() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('enum E { ONE }\nclass A extends E {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.EXTENDS_ENUM));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extendsNonClass_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int A;\nclass B extends A {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.EXTENDS_NON_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extendsNonClass_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class B extends dynamic {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.EXTENDS_NON_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extraPositionalArguments_const() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A();\n}\nmain() {\n  const A(0);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.EXTRA_POSITIONAL_ARGUMENTS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extraPositionalArguments_const_super() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A();\n}\nclass B extends A {\n  const B() : super(0);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.EXTRA_POSITIONAL_ARGUMENTS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extraPositionalArgumentsCouldBeNamed_const() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A({int x});\n}\nmain() {\n  const A(0);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.EXTRA_POSITIONAL_ARGUMENTS_COULD_BE_NAMED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extraPositionalArgumentsCouldBeNamed_const_super() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A({int x});\n}\nclass B extends A {\n  const B() : super(0);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.EXTRA_POSITIONAL_ARGUMENTS_COULD_BE_NAMED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldFormalParameter_assignedInInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int x;\n  A(this.x) : x = 3 {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.FIELD_INITIALIZED_IN_PARAMETER_AND_INITIALIZER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldInitializedByMultipleInitializers() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int x;\n  A() : x = 0, x = 1 {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.FIELD_INITIALIZED_BY_MULTIPLE_INITIALIZERS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldInitializedByMultipleInitializers_multipleInits() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int x;\n  A() : x = 0, x = 1, x = 2 {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.FIELD_INITIALIZED_BY_MULTIPLE_INITIALIZERS,CompileTimeErrorCode.FIELD_INITIALIZED_BY_MULTIPLE_INITIALIZERS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldInitializedByMultipleInitializers_multipleNames() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int x;\n  int y;\n  A() : x = 0, x = 1, y = 0, y = 1 {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.FIELD_INITIALIZED_BY_MULTIPLE_INITIALIZERS,CompileTimeErrorCode.FIELD_INITIALIZED_BY_MULTIPLE_INITIALIZERS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldInitializedInParameterAndInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int x;\n  A(this.x) : x = 1 {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.FIELD_INITIALIZED_IN_PARAMETER_AND_INITIALIZER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldInitializerFactoryConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int x;\n  factory A(this.x) => null;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.FIELD_INITIALIZER_FACTORY_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldInitializerOutsideConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int x;\n  m(this.x) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.FIELD_INITIALIZER_OUTSIDE_CONSTRUCTOR,CompileTimeErrorCode.FIELD_INITIALIZER_OUTSIDE_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldInitializerOutsideConstructor_defaultParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int x;\n  m([this.x]) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.FIELD_INITIALIZER_OUTSIDE_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldInitializerOutsideConstructor_inFunctionTypeParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int x;\n  A(int p(this.x));\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.FIELD_INITIALIZER_OUTSIDE_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldInitializerRedirectingConstructor_afterRedirection() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int x;\n  A.named() {}\n  A() : this.named(), x = 42;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.FIELD_INITIALIZER_REDIRECTING_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldInitializerRedirectingConstructor_beforeRedirection() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int x;\n  A.named() {}\n  A() : x = 42, this.named();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.FIELD_INITIALIZER_REDIRECTING_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldInitializingFormalRedirectingConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int x;\n  A.named() {}\n  A(this.x) : this.named();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.FIELD_INITIALIZER_REDIRECTING_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalInitializedMultipleTimes_initializers() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final x;\n  A() : x = 0, x = 0 {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.FIELD_INITIALIZED_BY_MULTIPLE_INITIALIZERS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalInitializedMultipleTimes_initializingFormal_initializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final x;\n  A(this.x) : x = 0 {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.FIELD_INITIALIZED_IN_PARAMETER_AND_INITIALIZER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalInitializedMultipleTimes_initializingFormals() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final x;\n  A(this.x, this.x) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.DUPLICATE_DEFINITION,CompileTimeErrorCode.FINAL_INITIALIZED_MULTIPLE_TIMES));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalNotInitialized_instanceField_const_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static const F;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_NOT_INITIALIZED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalNotInitialized_library_const() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("const F;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_NOT_INITIALIZED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalNotInitialized_local_const() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  const int x;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_NOT_INITIALIZED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fromEnvironment_bool_badArgs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('var b1 = const bool.fromEnvironment(1);\nvar b2 = const bool.fromEnvironment(\'x\', defaultValue: 1);');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION,StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE,CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION,StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fromEnvironment_bool_badDefault_whenDefined() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this.enableNewAnalysisDriver) {
                this.driver.declaredVariables.define("x","true");
            }else {
                this.analysisContext2.declaredVariables.define("x","true");
            }
            let source : any = this.addSource("var b = const bool.fromEnvironment('x', defaultValue: 1);");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION,StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_genericFunctionTypedParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('void g(T f<T>(T x)) {}');
            await this.computeAnalysisResult(source);
            let expectedErrorCodes = new core.DartList.literal<any>(CompileTimeErrorCode.GENERIC_FUNCTION_TYPED_PARAM_UNSUPPORTED);
            if (this.enableNewAnalysisDriver) {
                expectedErrorCodes.addAll(new core.DartList.literal(StaticWarningCode.UNDEFINED_CLASS,StaticWarningCode.UNDEFINED_CLASS));
            }
            this.assertErrors(source,expectedErrorCodes);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_genericFunctionTypedParameter_commentSyntax() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.strongMode = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            let source : any = this.addSource('void g(/*=T*/ f/*<T>*/(/*=T*/ x)) {}');
            await this.computeAnalysisResult(source);
            let expectedErrorCodes = new core.DartList.literal<any>(CompileTimeErrorCode.GENERIC_FUNCTION_TYPED_PARAM_UNSUPPORTED);
            if (this.enableNewAnalysisDriver) {
                expectedErrorCodes.addAll(new core.DartList.literal(StaticWarningCode.UNDEFINED_CLASS,StaticWarningCode.UNDEFINED_CLASS));
            }
            this.assertErrors(source,expectedErrorCodes);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_getterAndMethodWithSameName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  x(y) {}\n  get x => 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.GETTER_AND_METHOD_WITH_SAME_NAME));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implementsDeferredClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nclass A {}','library root;\nimport \'lib1.dart\' deferred as a;\nclass B implements a.A {}'),new core.DartList.literal<any>(CompileTimeErrorCode.IMPLEMENTS_DEFERRED_CLASS));
        } )());
    }

    test_implementsDeferredClass_classTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nclass A {}','library root;\nimport \'lib1.dart\' deferred as a;\nclass B {}\nclass M {}\nclass C = B with M implements a.A;'),new core.DartList.literal<any>(CompileTimeErrorCode.IMPLEMENTS_DEFERRED_CLASS));
        } )());
    }

    test_implementsDisallowedClass_class_bool() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A implements bool {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLEMENTS_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implementsDisallowedClass_class_double() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A implements double {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLEMENTS_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implementsDisallowedClass_class_int() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A implements int {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLEMENTS_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implementsDisallowedClass_class_Null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A implements Null {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLEMENTS_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implementsDisallowedClass_class_num() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A implements num {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLEMENTS_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implementsDisallowedClass_class_String() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A implements String {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLEMENTS_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implementsDisallowedClass_class_String_num() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A implements String, num {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLEMENTS_DISALLOWED_CLASS,CompileTimeErrorCode.IMPLEMENTS_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implementsDisallowedClass_classTypeAlias_bool() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass M {}\nclass C = A with M implements bool;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLEMENTS_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implementsDisallowedClass_classTypeAlias_double() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass M {}\nclass C = A with M implements double;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLEMENTS_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implementsDisallowedClass_classTypeAlias_int() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass M {}\nclass C = A with M implements int;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLEMENTS_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implementsDisallowedClass_classTypeAlias_Null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass M {}\nclass C = A with M implements Null;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLEMENTS_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implementsDisallowedClass_classTypeAlias_num() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass M {}\nclass C = A with M implements num;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLEMENTS_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implementsDisallowedClass_classTypeAlias_String() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass M {}\nclass C = A with M implements String;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLEMENTS_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implementsDisallowedClass_classTypeAlias_String_num() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass M {}\nclass C = A with M implements String, num;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLEMENTS_DISALLOWED_CLASS,CompileTimeErrorCode.IMPLEMENTS_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implementsDynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A implements dynamic {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLEMENTS_DYNAMIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implementsEnum() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('enum E { ONE }\nclass A implements E {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLEMENTS_ENUM));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implementsNonClass_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int A;\nclass B implements A {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLEMENTS_NON_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implementsNonClass_typeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass M {}\nint B;\nclass C = A with M implements B;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLEMENTS_NON_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implementsRepeated() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B implements A, A {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLEMENTS_REPEATED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implementsRepeated_3times() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {} class C{}\nclass B implements A, A, A, A {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLEMENTS_REPEATED,CompileTimeErrorCode.IMPLEMENTS_REPEATED,CompileTimeErrorCode.IMPLEMENTS_REPEATED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implementsSuperClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A implements A {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLEMENTS_SUPER_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implementsSuperClass_Object() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A implements Object {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLEMENTS_SUPER_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implementsSuperClass_typeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass M {}\nclass B = A with M implements A;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLEMENTS_SUPER_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implementsSuperClass_Object_typeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {}\nclass A = Object with M implements Object;\n    ');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLEMENTS_SUPER_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implicitThisReferenceInInitializer_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var v;\n  A() : v = f;\n  var f;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLICIT_THIS_REFERENCE_IN_INITIALIZER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implicitThisReferenceInInitializer_field2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final x = 0;\n  final y = x;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLICIT_THIS_REFERENCE_IN_INITIALIZER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implicitThisReferenceInInitializer_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var v;\n  A() : v = f();\n  f() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLICIT_THIS_REFERENCE_IN_INITIALIZER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implicitThisReferenceInInitializer_invocationInStatic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static var F = m();\n  m() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLICIT_THIS_REFERENCE_IN_INITIALIZER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implicitThisReferenceInInitializer_redirectingConstructorInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A(p) {}\n  A.named() : this(f);\n  var f;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLICIT_THIS_REFERENCE_IN_INITIALIZER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implicitThisReferenceInInitializer_superConstructorInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A(p) {}\n}\nclass B extends A {\n  B() : super(f);\n  var f;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLICIT_THIS_REFERENCE_IN_INITIALIZER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_importInternalLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("import 'dart:_interceptors';");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPORT_INTERNAL_LIBRARY,HintCode.UNUSED_IMPORT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_importOfNonLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library lib;\nimport \'part.dart\';\nA a;');
            this.addNamedSource("/part.dart",'part of lib;\nclass A{}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPORT_OF_NON_LIBRARY));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_inconsistentCaseExpressionTypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(var p) {\n  switch (p) {\n    case 1:\n      break;\n    case \'a\':\n      break;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INCONSISTENT_CASE_EXPRESSION_TYPES));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_inconsistentCaseExpressionTypes_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static const S = \'A.S\';\n}\n\nconst S = \'S\';\n\nfoo(var p) {\n  switch (p) {\n    case 3:\n      break;\n    case S:\n      break;\n    case A.S:\n      break;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INCONSISTENT_CASE_EXPRESSION_TYPES,CompileTimeErrorCode.INCONSISTENT_CASE_EXPRESSION_TYPES));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_inconsistentCaseExpressionTypes_repeated() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(var p) {\n  switch (p) {\n    case 1:\n      break;\n    case \'a\':\n      break;\n    case \'b\':\n      break;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INCONSISTENT_CASE_EXPRESSION_TYPES,CompileTimeErrorCode.INCONSISTENT_CASE_EXPRESSION_TYPES));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_initializerForNonExistent_const() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A() : x = \'foo\';\n}\nA a = const A();');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INITIALIZER_FOR_NON_EXISTENT_FIELD));
        } )());
    }

    test_initializerForNonExistent_initializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() : x = 0 {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INITIALIZER_FOR_NON_EXISTENT_FIELD));
        } )());
    }

    test_initializerForStaticField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static int x;\n  A() : x = 0 {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INITIALIZER_FOR_STATIC_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_initializingFormalForNonExistentField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A(this.x) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INITIALIZING_FORMAL_FOR_NON_EXISTENT_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_initializingFormalForNonExistentField_notInEnclosingClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\nint x;\n}\nclass B extends A {\n  B(this.x) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INITIALIZING_FORMAL_FOR_NON_EXISTENT_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_initializingFormalForNonExistentField_optional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A([this.x]) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INITIALIZING_FORMAL_FOR_NON_EXISTENT_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_initializingFormalForNonExistentField_synthetic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int get x => 1;\n  A(this.x) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INITIALIZING_FORMAL_FOR_NON_EXISTENT_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_initializingFormalForStaticField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static int x;\n  A([this.x]) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INITIALIZING_FORMAL_FOR_STATIC_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMemberAccessFromFactory_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m() {}\n  A();\n  factory A.make() {\n    m();\n    return new A();\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INSTANCE_MEMBER_ACCESS_FROM_FACTORY));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMemberAccessFromFactory_unnamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m() {}\n  A._();\n  factory A() {\n    m();\n    return new A._();\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INSTANCE_MEMBER_ACCESS_FROM_FACTORY));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMemberAccessFromStatic_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int f;\n  static foo() {\n    f;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INSTANCE_MEMBER_ACCESS_FROM_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMemberAccessFromStatic_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  get g => null;\n  static foo() {\n    g;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INSTANCE_MEMBER_ACCESS_FROM_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMemberAccessFromStatic_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m() {}\n  static foo() {\n    m();\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INSTANCE_MEMBER_ACCESS_FROM_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instantiateEnum_const() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('enum E { ONE }\nE e(String name) {\n  return const E();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INSTANTIATE_ENUM));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instantiateEnum_new() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('enum E { ONE }\nE e(String name) {\n  return new E();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INSTANTIATE_ENUM));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAnnotation_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('get V => 0;\n@V\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_ANNOTATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAnnotation_importWithPrefix_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.dart",'library lib;\nget V => 0;');
            let source : any = this.addSource('import \'lib.dart\' as p;\n@p.V\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_ANNOTATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAnnotation_importWithPrefix_notConstantVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.dart",'library lib;\nfinal V = 0;');
            let source : any = this.addSource('import \'lib.dart\' as p;\n@p.V\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_ANNOTATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAnnotation_importWithPrefix_notVariableOrConstructorInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.dart",'library lib;\ntypedef V();');
            let source : any = this.addSource('import \'lib.dart\' as p;\n@p.V\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_ANNOTATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAnnotation_notConstantVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('final V = 0;\n@V\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_ANNOTATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAnnotation_notVariableOrConstructorInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef V();\n@V\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_ANNOTATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAnnotation_staticMethodReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static f() {}\n}\n@A.f\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_ANNOTATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAnnotation_unresolved_identifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('@unresolved\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_ANNOTATION));
        } )());
    }

    test_invalidAnnotation_unresolved_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('@Unresolved()\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_ANNOTATION));
        } )());
    }

    test_invalidAnnotation_unresolved_prefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:math\' as p;\n@p.unresolved\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_ANNOTATION));
        } )());
    }

    test_invalidAnnotation_useLibraryScope() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('@foo\nclass A {\n  static const foo = null;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_ANNOTATION));
        } )());
    }

    test_invalidAnnotationFromDeferredLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nclass V { const V(); }\nconst v = const V();','library root;\nimport \'lib1.dart\' deferred as a;\n@a.v main () {}'),new core.DartList.literal<any>(CompileTimeErrorCode.INVALID_ANNOTATION_FROM_DEFERRED_LIBRARY));
        } )());
    }

    test_invalidAnnotationFromDeferredLibrary_constructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nclass C { const C(); }','library root;\nimport \'lib1.dart\' deferred as a;\n@a.C() main () {}'),new core.DartList.literal<any>(CompileTimeErrorCode.INVALID_ANNOTATION_FROM_DEFERRED_LIBRARY));
        } )());
    }

    test_invalidAnnotationFromDeferredLibrary_namedConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nclass C { const C.name(); }','library root;\nimport \'lib1.dart\' deferred as a;\n@a.C.name() main () {}'),new core.DartList.literal<any>(CompileTimeErrorCode.INVALID_ANNOTATION_FROM_DEFERRED_LIBRARY));
        } )());
    }

    test_invalidConstructorName_notEnclosingClassName_defined() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  B() : super();\n}\nclass B {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_CONSTRUCTOR_NAME));
        } )());
    }

    test_invalidConstructorName_notEnclosingClassName_undefined() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  B() : super();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_CONSTRUCTOR_NAME));
        } )());
    }

    test_invalidFactoryNameNotAClass_notClassName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int B;\nclass A {\n  factory B() => null;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_FACTORY_NAME_NOT_A_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidFactoryNameNotAClass_notEnclosingClassName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  factory B() => null;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_FACTORY_NAME_NOT_A_CLASS));
        } )());
    }

    test_invalidModifierOnConstructor_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() async {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_MODIFIER_ON_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidModifierOnConstructor_asyncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() async* {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_MODIFIER_ON_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidModifierOnConstructor_syncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() sync* {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_MODIFIER_ON_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidModifierOnSetter_member_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  set x(v) async {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_MODIFIER_ON_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidModifierOnSetter_member_asyncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  set x(v) async* {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_MODIFIER_ON_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidModifierOnSetter_member_syncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  set x(v) sync* {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_MODIFIER_ON_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidModifierOnSetter_topLevel_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("set x(v) async {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_MODIFIER_ON_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidModifierOnSetter_topLevel_asyncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("set x(v) async* {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_MODIFIER_ON_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidModifierOnSetter_topLevel_syncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("set x(v) sync* {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_MODIFIER_ON_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidReferenceToThis_factoryConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  factory A() { return this; }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_REFERENCE_TO_THIS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidReferenceToThis_instanceVariableInitializer_inConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var f;\n  A() : f = this;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_REFERENCE_TO_THIS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidReferenceToThis_instanceVariableInitializer_inDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var f = this;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_REFERENCE_TO_THIS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidReferenceToThis_staticMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static m() { return this; }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_REFERENCE_TO_THIS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidReferenceToThis_staticVariableInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static A f = this;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_REFERENCE_TO_THIS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidReferenceToThis_superInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A(var x) {}\n}\nclass B extends A {\n  B() : super(this);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_REFERENCE_TO_THIS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidReferenceToThis_topLevelFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("f() { return this; }");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_REFERENCE_TO_THIS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidReferenceToThis_variableInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("int x = this;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_REFERENCE_TO_THIS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidTypeArgumentInConstList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<E> {\n  m() {\n    return const <E>[];\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_TYPE_ARGUMENT_IN_CONST_LIST));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidTypeArgumentInConstMap() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<E> {\n  m() {\n    return const <String, E>{};\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_TYPE_ARGUMENT_IN_CONST_MAP));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUri_export() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("export 'ht:';");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_URI));
        } )());
    }

    test_invalidUri_import() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("import 'ht:';");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_URI));
        } )());
    }

    test_invalidUri_part() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library lib;\npart \'ht:\';');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.INVALID_URI));
        } )());
    }

    test_isInConstInstanceCreation_restored() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class Foo<T extends num> {\n  const Foo(x, y);\n}\nconst x = const Foo<int>(const Foo<int>(0, 1),\n    const <Foo<String>>[]); // (1)\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_isInInstanceVariableInitializer_restored() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class Foo {\n  var bar;\n  Map foo = {\n    \'bar\': () {\n        var _bar;\n    },\n    \'bop\': _foo // (1)\n  };\n  _foo() {\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.IMPLICIT_THIS_REFERENCE_IN_INITIALIZER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_labelInOuterScope() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void m(int i) {\n    l: while (i > 0) {\n      void f() {\n        break l;\n      };\n    }\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.LABEL_IN_OUTER_SCOPE));
        } )());
    }

    test_labelUndefined_break() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  x: while (true) {\n    break y;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.LABEL_UNDEFINED));
        } )());
    }

    test_labelUndefined_continue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  x: while (true) {\n    continue y;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.LABEL_UNDEFINED));
        } )());
    }

    test_length_of_erroneous_constant() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("const int i = (1 ? 'alpha' : 'beta').length;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_INITIALIZED_WITH_NON_CONSTANT_VALUE,CompileTimeErrorCode.CONST_EVAL_TYPE_BOOL,StaticTypeWarningCode.NON_BOOL_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_memberWithClassName_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int A = 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MEMBER_WITH_CLASS_NAME));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_memberWithClassName_field2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int z, A, b = 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MEMBER_WITH_CLASS_NAME));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_memberWithClassName_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  get A => 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MEMBER_WITH_CLASS_NAME));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_memberWithClassName_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
        } )());
    }

    test_methodAndGetterWithSameName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  get x => 0;\n  x(y) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.METHOD_AND_GETTER_WITH_SAME_NAME));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinDeclaresConstructor_classDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() {}\n}\nclass B extends Object with A {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_DECLARES_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinDeclaresConstructor_typeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() {}\n}\nclass B = Object with A;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_DECLARES_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinDeferredClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nclass A {}','library root;\nimport \'lib1.dart\' deferred as a;\nclass B extends Object with a.A {}'),new core.DartList.literal<any>(CompileTimeErrorCode.MIXIN_DEFERRED_CLASS));
        } )());
    }

    test_mixinDeferredClass_classTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nclass A {}','library root;\nimport \'lib1.dart\' deferred as a;\nclass B {}\nclass C = B with a.A;'),new core.DartList.literal<any>(CompileTimeErrorCode.MIXIN_DEFERRED_CLASS));
        } )());
    }

    test_mixinHasNoConstructors_mixinApp() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B {\n  B({x});\n}\nclass M {}\nclass C = B with M;\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_HAS_NO_CONSTRUCTORS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinHasNoConstructors_mixinClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B {\n  B({x});\n}\nclass M {}\nclass C extends B with M {}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_HAS_NO_CONSTRUCTORS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinHasNoConstructors_mixinClass_explicitSuperCall() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B {\n  B({x});\n}\nclass M {}\nclass C extends B with M {\n  C() : super();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_HAS_NO_CONSTRUCTORS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinHasNoConstructors_mixinClass_implicitSuperCall() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B {\n  B({x});\n}\nclass M {}\nclass C extends B with M {\n  C();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_HAS_NO_CONSTRUCTORS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinHasNoConstructors_mixinClass_namedSuperCall() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B {\n  B.named({x});\n}\nclass M {}\nclass C extends B with M {\n  C() : super.named();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_HAS_NO_CONSTRUCTORS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinInheritsFromNotObject_classDeclaration_extends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {}\nclass C extends Object with B {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_INHERITS_FROM_NOT_OBJECT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinInheritsFromNotObject_classDeclaration_with() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends Object with A {}\nclass C extends Object with B {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_INHERITS_FROM_NOT_OBJECT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinInheritsFromNotObject_typeAlias_extends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {}\nclass C = Object with B;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_INHERITS_FROM_NOT_OBJECT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinInheritsFromNotObject_typeAlias_with() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends Object with A {}\nclass C = Object with B;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_INHERITS_FROM_NOT_OBJECT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinOfDisallowedClass_class_bool() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A extends Object with bool {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_OF_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinOfDisallowedClass_class_double() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A extends Object with double {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_OF_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinOfDisallowedClass_class_int() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A extends Object with int {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_OF_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinOfDisallowedClass_class_Null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A extends Object with Null {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_OF_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinOfDisallowedClass_class_num() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A extends Object with num {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_OF_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinOfDisallowedClass_class_String() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A extends Object with String {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_OF_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinOfDisallowedClass_classTypeAlias_bool() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass C = A with bool;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_OF_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinOfDisallowedClass_classTypeAlias_double() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass C = A with double;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_OF_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinOfDisallowedClass_classTypeAlias_int() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass C = A with int;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_OF_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinOfDisallowedClass_classTypeAlias_Null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass C = A with Null;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_OF_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinOfDisallowedClass_classTypeAlias_num() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass C = A with num;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_OF_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinOfDisallowedClass_classTypeAlias_String() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass C = A with String;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_OF_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinOfDisallowedClass_classTypeAlias_String_num() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass C = A with String, num;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_OF_DISALLOWED_CLASS,CompileTimeErrorCode.MIXIN_OF_DISALLOWED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinOfEnum() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('enum E { ONE }\nclass A extends Object with E {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_OF_ENUM));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinOfNonClass_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int A;\nclass B extends Object with A {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_OF_NON_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinOfNonClass_typeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nint B;\nclass C = A with B;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_OF_NON_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinReferencesSuper() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  toString() => super.toString();\n}\nclass B extends Object with A {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_REFERENCES_SUPER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinWithNonClassSuperclass_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int A;\nclass B {}\nclass C extends A with B {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_WITH_NON_CLASS_SUPERCLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinWithNonClassSuperclass_typeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int A;\nclass B {}\nclass C = A with B;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MIXIN_WITH_NON_CLASS_SUPERCLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_multipleRedirectingConstructorInvocations() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() : this.a(), this.b();\n  A.a() {}\n  A.b() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MULTIPLE_REDIRECTING_CONSTRUCTOR_INVOCATIONS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_multipleSuperInitializers() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {\n  B() : super(), super() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.MULTIPLE_SUPER_INITIALIZERS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nativeClauseInNonSDKCode() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A native 'string' {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.NATIVE_CLAUSE_IN_NON_SDK_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nativeFunctionBodyInNonSDKCode_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("int m(a) native 'string';");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.NATIVE_FUNCTION_BODY_IN_NON_SDK_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nativeFunctionBodyInNonSDKCode_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A{\n  static int m(a) native \'string\';\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.NATIVE_FUNCTION_BODY_IN_NON_SDK_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_noAnnotationConstructorArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A();\n}\n@A\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NO_ANNOTATION_CONSTRUCTOR_ARGUMENTS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_noDefaultSuperConstructorExplicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A(p);\n}\nclass B extends A {\n  B() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NO_DEFAULT_SUPER_CONSTRUCTOR_EXPLICIT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_noDefaultSuperConstructorExplicit_MixinAppWithDirectSuperCall() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {}\nclass B {\n  B({x});\n  B.named(); // To avoid MIXIN_HAS_NO_CONSTRUCTORS\n}\nclass Mixed = B with M;\nclass C extends Mixed {\n  C(x) : super();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.UNDEFINED_CONSTRUCTOR_IN_INITIALIZER_DEFAULT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_noDefaultSuperConstructorExplicit_mixinAppWithNamedParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {}\nclass B {\n  B({x});\n  B.named(); // To avoid MIXIN_HAS_NO_CONSTRUCTORS\n}\nclass Mixed = B with M;\nclass C extends Mixed {\n  C();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.UNDEFINED_CONSTRUCTOR_IN_INITIALIZER_DEFAULT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_noDefaultSuperConstructorExplicit_MixinAppWithNamedSuperCall() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {}\nclass B {\n  B.named({x});\n  B.named2(); // To avoid MIXIN_HAS_NO_CONSTRUCTORS\n}\nclass Mixed = B with M;\nclass C extends Mixed {\n  C(x) : super.named();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.UNDEFINED_CONSTRUCTOR_IN_INITIALIZER));
        } )());
    }

    test_noDefaultSuperConstructorExplicit_mixinAppWithOptionalParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {}\nclass B {\n  B([x]);\n  B.named(); // To avoid MIXIN_HAS_NO_CONSTRUCTORS\n}\nclass Mixed = B with M;\nclass C extends Mixed {\n  C();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.UNDEFINED_CONSTRUCTOR_IN_INITIALIZER_DEFAULT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_noDefaultSuperConstructorExplicit_MixinWithDirectSuperCall() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {}\nclass B {\n  B({x});\n  B.other();\n}\nclass C extends B with M {\n  C(x) : super();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.UNDEFINED_CONSTRUCTOR_IN_INITIALIZER_DEFAULT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_noDefaultSuperConstructorExplicit_mixinWithNamedParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {}\nclass B {\n  B({x});\n  B.named();\n}\nclass C extends B with M {\n  C();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NO_DEFAULT_SUPER_CONSTRUCTOR_EXPLICIT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_noDefaultSuperConstructorExplicit_MixinWithNamedSuperCall() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {}\nclass B {\n  B.named({x});\n  B.other();\n}\nclass C extends B with M {\n  C(x) : super.named();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.UNDEFINED_CONSTRUCTOR_IN_INITIALIZER));
        } )());
    }

    test_noDefaultSuperConstructorExplicit_mixinWithOptionalParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {}\nclass B {\n  B([x]);\n  B.other();\n}\nclass C extends B with M {\n  C();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NO_DEFAULT_SUPER_CONSTRUCTOR_EXPLICIT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_noDefaultSuperConstructorImplicit_mixinAppWithNamedParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {}\nclass B {\n  B({x});\n  B.named(); // To avoid MIXIN_HAS_NO_CONSTRUCTORS\n}\nclass Mixed = B with M;\nclass C extends Mixed {}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NO_DEFAULT_SUPER_CONSTRUCTOR_IMPLICIT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_noDefaultSuperConstructorImplicit_mixinAppWithOptionalParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {}\nclass B {\n  B([x]);\n  B.named(); // To avoid MIXIN_HAS_NO_CONSTRUCTORS\n}\nclass Mixed = B with M;\nclass C extends Mixed {}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NO_DEFAULT_SUPER_CONSTRUCTOR_IMPLICIT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_noDefaultSuperConstructorImplicit_mixinWithNamedParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {}\nclass B {\n  B({x});\n  B.other();\n}\nclass C extends B with M {}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NO_DEFAULT_SUPER_CONSTRUCTOR_IMPLICIT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_noDefaultSuperConstructorImplicit_mixinWithOptionalParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {}\nclass B {\n  B([x]);\n  B.other();\n}\nclass C extends B with M {}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NO_DEFAULT_SUPER_CONSTRUCTOR_IMPLICIT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_noDefaultSuperConstructorImplicit_superHasParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A(p);\n}\nclass B extends A {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NO_DEFAULT_SUPER_CONSTRUCTOR_IMPLICIT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_noDefaultSuperConstructorImplicit_superOnlyNamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A { A.named() {} }\nclass B extends A {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NO_DEFAULT_SUPER_CONSTRUCTOR_IMPLICIT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstantAnnotationConstructor_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A.fromInt() {}\n}\n@A.fromInt()\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NON_CONSTANT_ANNOTATION_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstantAnnotationConstructor_unnamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() {}\n}\n@A()\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NON_CONSTANT_ANNOTATION_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstantDefaultValue_function_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int y;\nf({x : y}) {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NON_CONSTANT_DEFAULT_VALUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstantDefaultValue_function_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int y;\nf([x = y]) {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NON_CONSTANT_DEFAULT_VALUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstantDefaultValue_inConstructor_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int y;\n  A({x : y}) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NON_CONSTANT_DEFAULT_VALUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstantDefaultValue_inConstructor_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int y;\n  A([x = y]) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NON_CONSTANT_DEFAULT_VALUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstantDefaultValue_method_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int y;\n  m({x : y}) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NON_CONSTANT_DEFAULT_VALUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstantDefaultValue_method_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int y;\n  m([x = y]) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NON_CONSTANT_DEFAULT_VALUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstantDefaultValueFromDeferredLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nconst V = 1;','library root;\nimport \'lib1.dart\' deferred as a;\nf({x : a.V}) {}'),new core.DartList.literal<any>(CompileTimeErrorCode.NON_CONSTANT_DEFAULT_VALUE_FROM_DEFERRED_LIBRARY));
        } )());
    }

    test_nonConstantDefaultValueFromDeferredLibrary_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nconst V = 1;','library root;\nimport \'lib1.dart\' deferred as a;\nf({x : a.V + 1}) {}'),new core.DartList.literal<any>(CompileTimeErrorCode.NON_CONSTANT_DEFAULT_VALUE_FROM_DEFERRED_LIBRARY));
        } )());
    }

    test_nonConstCaseExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(int p, int q) {\n  switch (p) {\n    case 3 + q:\n      break;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NON_CONSTANT_CASE_EXPRESSION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstCaseExpressionFromDeferredLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nconst int c = 1;','library root;\nimport \'lib1.dart\' deferred as a;\nmain (int p) {\n  switch (p) {\n    case a.c:\n      break;\n  }\n}'),new core.DartList.literal<any>(CompileTimeErrorCode.NON_CONSTANT_CASE_EXPRESSION_FROM_DEFERRED_LIBRARY));
        } )());
    }

    test_nonConstCaseExpressionFromDeferredLibrary_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nconst int c = 1;','library root;\nimport \'lib1.dart\' deferred as a;\nmain (int p) {\n  switch (p) {\n    case a.c + 1:\n      break;\n  }\n}'),new core.DartList.literal<any>(CompileTimeErrorCode.NON_CONSTANT_CASE_EXPRESSION_FROM_DEFERRED_LIBRARY));
        } )());
    }

    test_nonConstListElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(a) {\n  return const [a];\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NON_CONSTANT_LIST_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstListElementFromDeferredLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nconst int c = 1;','library root;\nimport \'lib1.dart\' deferred as a;\nf() {\n  return const [a.c];\n}'),new core.DartList.literal<any>(CompileTimeErrorCode.NON_CONSTANT_LIST_ELEMENT_FROM_DEFERRED_LIBRARY));
        } )());
    }

    test_nonConstListElementFromDeferredLibrary_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nconst int c = 1;','library root;\nimport \'lib1.dart\' deferred as a;\nf() {\n  return const [a.c + 1];\n}'),new core.DartList.literal<any>(CompileTimeErrorCode.NON_CONSTANT_LIST_ELEMENT_FROM_DEFERRED_LIBRARY));
        } )());
    }

    test_nonConstMapAsExpressionStatement_begin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  {\'a\' : 0, \'b\' : 1}.length;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NON_CONST_MAP_AS_EXPRESSION_STATEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstMapAsExpressionStatement_only() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  {\'a\' : 0, \'b\' : 1};\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NON_CONST_MAP_AS_EXPRESSION_STATEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstMapKey() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(a) {\n  return const {a : 0};\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NON_CONSTANT_MAP_KEY));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstMapKeyFromDeferredLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nconst int c = 1;','library root;\nimport \'lib1.dart\' deferred as a;\nf() {\n  return const {a.c : 0};\n}'),new core.DartList.literal<any>(CompileTimeErrorCode.NON_CONSTANT_MAP_KEY_FROM_DEFERRED_LIBRARY));
        } )());
    }

    test_nonConstMapKeyFromDeferredLibrary_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nconst int c = 1;','library root;\nimport \'lib1.dart\' deferred as a;\nf() {\n  return const {a.c + 1 : 0};\n}'),new core.DartList.literal<any>(CompileTimeErrorCode.NON_CONSTANT_MAP_KEY_FROM_DEFERRED_LIBRARY));
        } )());
    }

    test_nonConstMapValue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(a) {\n  return const {\'a\' : a};\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NON_CONSTANT_MAP_VALUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstMapValueFromDeferredLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nconst int c = 1;','library root;\nimport \'lib1.dart\' deferred as a;\nf() {\n  return const {\'a\' : a.c};\n}'),new core.DartList.literal<any>(CompileTimeErrorCode.NON_CONSTANT_MAP_VALUE_FROM_DEFERRED_LIBRARY));
        } )());
    }

    test_nonConstMapValueFromDeferredLibrary_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nconst int c = 1;','library root;\nimport \'lib1.dart\' deferred as a;\nf() {\n  return const {\'a\' : a.c + 1};\n}'),new core.DartList.literal<any>(CompileTimeErrorCode.NON_CONSTANT_MAP_VALUE_FROM_DEFERRED_LIBRARY));
        } )());
    }

    test_nonConstValueInInitializer_assert_condition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.enableAssertInitializer = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            let source : any = this.addSource('class A {\n  const A(int i) : assert(i.isNegative);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NON_CONSTANT_VALUE_IN_INITIALIZER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstValueInInitializer_assert_message() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.enableAssertInitializer = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            let source : any = this.addSource('class A {\n  const A(int i) : assert(i < 0, \'isNegative = ${i.isNegative}\');\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NON_CONSTANT_VALUE_IN_INITIALIZER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstValueInInitializer_binary_notBool_left() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final bool a;\n  const A(String p) : a = p && true;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_EVAL_TYPE_BOOL,StaticTypeWarningCode.NON_BOOL_OPERAND));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstValueInInitializer_binary_notBool_right() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final bool a;\n  const A(String p) : a = true && p;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_EVAL_TYPE_BOOL,StaticTypeWarningCode.NON_BOOL_OPERAND));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstValueInInitializer_binary_notInt() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final int a;\n  const A(String p) : a = 5 & p;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_EVAL_TYPE_INT,StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstValueInInitializer_binary_notNum() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final int a;\n  const A(String p) : a = 5 + p;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_EVAL_TYPE_NUM,StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstValueInInitializer_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static int C;\n  final int a;\n  const A() : a = C;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NON_CONSTANT_VALUE_IN_INITIALIZER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstValueInInitializer_instanceCreation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A();\n}\nclass B {\n  const B() : a = new A();\n  final a;\n}\nvar b = const B();');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NON_CONSTANT_VALUE_IN_INITIALIZER,CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstValueInInitializer_instanceCreation_inDifferentFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.strongMode = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            let source : any = this.addNamedSource('/a.dart','import \'b.dart\';\nconst v = const MyClass();\n');
            this.addNamedSource('/b.dart','class MyClass {\n  const MyClass([p = foo]);\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION));
        } )());
    }

    test_nonConstValueInInitializer_redirecting() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static var C;\n  const A.named(p);\n  const A() : this.named(C);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NON_CONSTANT_VALUE_IN_INITIALIZER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstValueInInitializer_super() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(p);\n}\nclass B extends A {\n  static var C;\n  const B() : super(C);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NON_CONSTANT_VALUE_IN_INITIALIZER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstValueInInitializerFromDeferredLibrary_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nconst int c = 1;','library root;\nimport \'lib1.dart\' deferred as a;\nclass A {\n  final int x;\n  const A() : x = a.c;\n}'),new core.DartList.literal<any>(CompileTimeErrorCode.NON_CONSTANT_VALUE_IN_INITIALIZER_FROM_DEFERRED_LIBRARY));
        } )());
    }

    test_nonConstValueInInitializerFromDeferredLibrary_field_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nconst int c = 1;','library root;\nimport \'lib1.dart\' deferred as a;\nclass A {\n  final int x;\n  const A() : x = a.c + 1;\n}'),new core.DartList.literal<any>(CompileTimeErrorCode.NON_CONSTANT_VALUE_IN_INITIALIZER_FROM_DEFERRED_LIBRARY));
        } )());
    }

    test_nonConstValueInInitializerFromDeferredLibrary_redirecting() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nconst int c = 1;','library root;\nimport \'lib1.dart\' deferred as a;\nclass A {\n  const A.named(p);\n  const A() : this.named(a.c);\n}'),new core.DartList.literal<any>(CompileTimeErrorCode.NON_CONSTANT_VALUE_IN_INITIALIZER_FROM_DEFERRED_LIBRARY));
        } )());
    }

    test_nonConstValueInInitializerFromDeferredLibrary_super() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nconst int c = 1;','library root;\nimport \'lib1.dart\' deferred as a;\nclass A {\n  const A(p);\n}\nclass B extends A {\n  const B() : super(a.c);\n}'),new core.DartList.literal<any>(CompileTimeErrorCode.NON_CONSTANT_VALUE_IN_INITIALIZER_FROM_DEFERRED_LIBRARY));
        } )());
    }

    test_nonGenerativeConstructor_explicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  factory A.named() => null;\n}\nclass B extends A {\n  B() : super.named();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NON_GENERATIVE_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonGenerativeConstructor_implicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  factory A() => null;\n}\nclass B extends A {\n  B();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NON_GENERATIVE_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonGenerativeConstructor_implicit2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  factory A() => null;\n}\nclass B extends A {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NON_GENERATIVE_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_notEnoughRequiredArguments_const() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(int p);\n}\nmain() {\n  const A();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NOT_ENOUGH_REQUIRED_ARGUMENTS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_notEnoughRequiredArguments_const_super() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(int p);\n}\nclass B extends A {\n  const B() : super();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.NOT_ENOUGH_REQUIRED_ARGUMENTS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_optionalParameterInOperator_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  operator +({p}) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.OPTIONAL_PARAMETER_IN_OPERATOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_optionalParameterInOperator_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  operator +([p]) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.OPTIONAL_PARAMETER_IN_OPERATOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_partOfNonPart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library l1;\npart \'l2.dart\';');
            this.addNamedSource("/l2.dart","library l2;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.PART_OF_NON_PART));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_partOfNonPart_self() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library lib;\npart \'test.dart\';');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.PART_OF_NON_PART));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_prefix_assignment_compound_in_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/lib.dart','library lib;');
            let source : any = this.addSource('import \'lib.dart\' as p;\nclass C {\n  f() {\n    p += 1;\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_prefix_assignment_compound_not_in_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/lib.dart','library lib;');
            let source : any = this.addSource('import \'lib.dart\' as p;\nf() {\n  p += 1;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_prefix_assignment_in_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/lib.dart','library lib;');
            let source : any = this.addSource('import \'lib.dart\' as p;\nclass C {\n  f() {\n    p = 1;\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_prefix_assignment_not_in_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/lib.dart','library lib;');
            let source : any = this.addSource('import \'lib.dart\' as p;\nf() {\n  p = 1;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_prefix_conditionalPropertyAccess_call() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/lib.dart','library lib;\ng() {}\n');
            let source : any = this.addSource('import \'lib.dart\' as p;\nf() {\n  p?.g();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_prefix_conditionalPropertyAccess_call_loadLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/lib.dart','library lib;\n');
            let source : any = this.addSource('import \'lib.dart\' deferred as p;\nf() {\n  p?.loadLibrary();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_prefix_conditionalPropertyAccess_get() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/lib.dart','library lib;\nvar x;\n');
            let source : any = this.addSource('import \'lib.dart\' as p;\nf() {\n  return p?.x;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_prefix_conditionalPropertyAccess_get_loadLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/lib.dart','library lib;\n');
            let source : any = this.addSource('import \'lib.dart\' deferred as p;\nf() {\n  return p?.loadLibrary;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_prefix_conditionalPropertyAccess_set() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/lib.dart','library lib;\nvar x;\n');
            let source : any = this.addSource('import \'lib.dart\' as p;\nf() {\n  p?.x = null;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_prefix_conditionalPropertyAccess_set_loadLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/lib.dart','library lib;\n');
            let source : any = this.addSource('import \'lib.dart\' deferred as p;\nf() {\n  p?.loadLibrary = null;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_prefix_unqualified_invocation_in_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/lib.dart','librarylib;');
            let source : any = this.addSource('import \'lib.dart\' as p;\nclass C {\n  f() {\n    p();\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_prefix_unqualified_invocation_not_in_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/lib.dart','librarylib;');
            let source : any = this.addSource('import \'lib.dart\' as p;\nf() {\n  p();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_prefixCollidesWithTopLevelMembers_functionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.dart",'library lib;\nclass A{}');
            let source : any = this.addSource('import \'lib.dart\' as p;\ntypedef p();\np.A a;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.PREFIX_COLLIDES_WITH_TOP_LEVEL_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_prefixCollidesWithTopLevelMembers_topLevelFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.dart",'library lib;\nclass A{}');
            let source : any = this.addSource('import \'lib.dart\' as p;\np() {}\np.A a;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.PREFIX_COLLIDES_WITH_TOP_LEVEL_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_prefixCollidesWithTopLevelMembers_topLevelVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.dart",'library lib;\nclass A{}');
            let source : any = this.addSource('import \'lib.dart\' as p;\nvar p = null;\np.A a;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.PREFIX_COLLIDES_WITH_TOP_LEVEL_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_prefixCollidesWithTopLevelMembers_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.dart",'library lib;\nclass A{}');
            let source : any = this.addSource('import \'lib.dart\' as p;\nclass p {}\np.A a;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.PREFIX_COLLIDES_WITH_TOP_LEVEL_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_prefixNotFollowedByDot() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/lib.dart','library lib;');
            let source : any = this.addSource('import \'lib.dart\' as p;\nf() {\n  return p;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_prefixNotFollowedByDot_compoundAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/lib.dart','library lib;');
            let source : any = this.addSource('import \'lib.dart\' as p;\nf() {\n  p += 1;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_prefixNotFollowedByDot_conditionalMethodInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/lib.dart','library lib;\ng() {}\n');
            let source : any = this.addSource('import \'lib.dart\' as p;\nf() {\n  p?.g();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_privateCollisionInMixinApplication_mixinAndMixin() {
        return this._privateCollisionInMixinApplicationTest('import \'lib1.dart\';\nclass C extends Object with A, B {}\n');
    }
    test_privateCollisionInMixinApplication_mixinAndMixin_indirect() {
        return this._privateCollisionInMixinApplicationTest('import \'lib1.dart\';\nclass C extends Object with A {}\nclass D extends C with B {}\n');
    }
    test_privateCollisionInMixinApplication_superclassAndMixin() {
        return this._privateCollisionInMixinApplicationTest('import \'lib1.dart\';\nclass C extends A with B {}\n');
    }
    test_privateCollisionInMixinApplication_superclassAndMixin_same() {
        return this._privateCollisionInMixinApplicationTest('import \'lib1.dart\';\nclass C extends A with A {}\n');
    }
    test_privateCollisionInClassTypeAlias_mixinAndMixin() {
        return this._privateCollisionInMixinApplicationTest('import \'lib1.dart\';\nclass C = Object with A, B;\n');
    }
    test_privateCollisionInClassTypeAlias_mixinAndMixin_indirect() {
        return this._privateCollisionInMixinApplicationTest('import \'lib1.dart\';\nclass C = Object with A;\nclass D = C with B;\n');
    }
    test_privateCollisionInClassTypeAlias_superclassAndMixin() {
        return this._privateCollisionInMixinApplicationTest('import \'lib1.dart\';\nclass C = A with B;\n');
    }
    test_privateCollisionInClassTypeAlias_superclassAndMixin_same() {
        return this._privateCollisionInMixinApplicationTest('import \'lib1.dart\';\nclass C = A with A;\n');
    }
    test_privateOptionalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("f({var _p}) {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.PRIVATE_OPTIONAL_PARAMETER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_privateOptionalParameter_fieldFormal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var _p;\n  A({this._p: 0});\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.PRIVATE_OPTIONAL_PARAMETER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_privateOptionalParameter_withDefaultValue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("f({_p : 0}) {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.PRIVATE_OPTIONAL_PARAMETER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveCompileTimeConstant() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A();\n  final m = const A();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RECURSIVE_COMPILE_TIME_CONSTANT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveCompileTimeConstant_cycle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const x = y + 1;\nconst y = x + 1;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RECURSIVE_COMPILE_TIME_CONSTANT,CompileTimeErrorCode.RECURSIVE_COMPILE_TIME_CONSTANT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveCompileTimeConstant_initializer_after_toplevel_var() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const y = const C();\nclass C {\n  const C() : x = y;\n  final x;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RECURSIVE_COMPILE_TIME_CONSTANT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveCompileTimeConstant_singleVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const x = x;\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RECURSIVE_COMPILE_TIME_CONSTANT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveConstructorRedirect() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A.a() : this.b();\n  A.b() : this.a();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RECURSIVE_CONSTRUCTOR_REDIRECT,CompileTimeErrorCode.RECURSIVE_CONSTRUCTOR_REDIRECT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveConstructorRedirect_directSelfReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() : this();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RECURSIVE_CONSTRUCTOR_REDIRECT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveFactoryRedirect() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A implements B {\n  factory A() = C;\n}\nclass B implements C {\n  factory B() = A;\n}\nclass C implements A {\n  factory C() = B;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RECURSIVE_FACTORY_REDIRECT,CompileTimeErrorCode.RECURSIVE_FACTORY_REDIRECT,CompileTimeErrorCode.RECURSIVE_FACTORY_REDIRECT,CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE,CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE,CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveFactoryRedirect_directSelfReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  factory A() = A;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RECURSIVE_FACTORY_REDIRECT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveFactoryRedirect_diverging() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C<T> {\n  const factory C() = C<C<T>>;\n}\nmain() {\n  const C<int>();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RECURSIVE_FACTORY_REDIRECT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveFactoryRedirect_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<T> implements B<T> {\n  factory A() = C;\n}\nclass B<T> implements C<T> {\n  factory B() = A;\n}\nclass C<T> implements A<T> {\n  factory C() = B;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RECURSIVE_FACTORY_REDIRECT,CompileTimeErrorCode.RECURSIVE_FACTORY_REDIRECT,CompileTimeErrorCode.RECURSIVE_FACTORY_REDIRECT,CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE,CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE,CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveFactoryRedirect_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A implements B {\n  factory A.nameA() = C.nameC;\n}\nclass B implements C {\n  factory B.nameB() = A.nameA;\n}\nclass C implements A {\n  factory C.nameC() = B.nameB;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RECURSIVE_FACTORY_REDIRECT,CompileTimeErrorCode.RECURSIVE_FACTORY_REDIRECT,CompileTimeErrorCode.RECURSIVE_FACTORY_REDIRECT,CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE,CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE,CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveFactoryRedirect_outsideCycle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  factory A() = C;\n}\nclass B implements C {\n  factory B() = C;\n}\nclass C implements A, B {\n  factory C() = B;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RECURSIVE_FACTORY_REDIRECT,CompileTimeErrorCode.RECURSIVE_FACTORY_REDIRECT,CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE,CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveInterfaceInheritance_extends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A extends B {}\nclass B extends A {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE,CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveInterfaceInheritance_extends_implements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A extends B {}\nclass B implements A {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE,CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveInterfaceInheritance_implements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A implements B {}\nclass B implements A {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE,CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveInterfaceInheritance_mixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M1 = Object with M2;\nclass M2 = Object with M1;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE,CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveInterfaceInheritance_mixin_superclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C = D with M;\nclass D = C with M;\nclass M {}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE,CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveInterfaceInheritance_tail() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A implements A {}\nclass B implements A {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_IMPLEMENTS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveInterfaceInheritance_tail2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A implements B {}\nabstract class B implements A {}\nclass C implements A {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE,CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveInterfaceInheritance_tail3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A implements B {}\nabstract class B implements C {}\nabstract class C implements A {}\nclass D implements A {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE,CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE,CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveInterfaceInheritanceBaseCaseExtends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A extends A {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_EXTENDS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveInterfaceInheritanceBaseCaseExtends_abstract() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C extends C {\n  var bar = 0;\n  m();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_EXTENDS,StaticWarningCode.CONCRETE_CLASS_WITH_ABSTRACT_MEMBER,StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveInterfaceInheritanceBaseCaseImplements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A implements A {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_IMPLEMENTS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveInterfaceInheritanceBaseCaseImplements_typeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass M {}\nclass B = A with M implements B;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_IMPLEMENTS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveInterfaceInheritanceBaseCaseWith() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class M = Object with M;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RECURSIVE_INTERFACE_INHERITANCE_BASE_CASE_WITH));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_redirectGenerativeToMissingConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() : this.noSuchConstructor();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.REDIRECT_GENERATIVE_TO_MISSING_CONSTRUCTOR));
        } )());
    }

    test_redirectGenerativeToNonGenerativeConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() : this.x();\n  factory A.x() => null;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.REDIRECT_GENERATIVE_TO_NON_GENERATIVE_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_redirectToMissingConstructor_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A implements B{\n  A() {}\n}\nclass B {\n  const factory B() = A.name;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.REDIRECT_TO_MISSING_CONSTRUCTOR));
        } )());
    }

    test_redirectToMissingConstructor_unnamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A implements B{\n  A.name() {}\n}\nclass B {\n  const factory B() = A;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.REDIRECT_TO_MISSING_CONSTRUCTOR));
        } )());
    }

    test_redirectToNonClass_notAType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int A;\nclass B {\n  const factory B() = A;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.REDIRECT_TO_NON_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_redirectToNonClass_undefinedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B {\n  const factory B() = A;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.REDIRECT_TO_NON_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_redirectToNonConstConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A.a() {}\n  const factory A.b() = A.a;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.REDIRECT_TO_NON_CONST_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_referencedBeforeDeclaration_hideInBlock_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('var v = 1;\nmain() {\n  print(v);\n  v() {}\n}\nprint(x) {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.REFERENCED_BEFORE_DECLARATION));
        } )());
    }

    test_referencedBeforeDeclaration_hideInBlock_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('var v = 1;\nmain() {\n  print(v);\n  var v = 2;\n}\nprint(x) {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.REFERENCED_BEFORE_DECLARATION));
        } )());
    }

    test_referencedBeforeDeclaration_hideInBlock_subBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('var v = 1;\nmain() {\n  {\n    print(v);\n  }\n  var v = 2;\n}\nprint(x) {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.REFERENCED_BEFORE_DECLARATION));
        } )());
    }

    test_referencedBeforeDeclaration_inInitializer_closure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {\n  var v = () => v;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.REFERENCED_BEFORE_DECLARATION));
        } )());
    }

    test_referencedBeforeDeclaration_inInitializer_directly() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {\n  var v = v;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.REFERENCED_BEFORE_DECLARATION));
        } )());
    }

    test_referencedBeforeDeclaration_type_localFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('void testTypeRef() {\n  String s = \'\';\n  int String(int x) => x + 1;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.REFERENCED_BEFORE_DECLARATION));
        } )());
    }

    test_referencedBeforeDeclaration_type_localVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('void testTypeRef() {\n  String s = \'\';\n  var String = \'\';\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.REFERENCED_BEFORE_DECLARATION));
        } )());
    }

    test_rethrowOutsideCatch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  rethrow;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RETHROW_OUTSIDE_CATCH));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnInGenerativeConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() { return 0; }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RETURN_IN_GENERATIVE_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnInGenerativeConstructor_expressionFunctionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() => null;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RETURN_IN_GENERATIVE_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnInGenerator_asyncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() async* {\n  return 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RETURN_IN_GENERATOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnInGenerator_syncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() sync* {\n  return 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.RETURN_IN_GENERATOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_sharedDeferredPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nf1() {}','library lib2;\nf2() {}','library root;\nimport \'lib1.dart\' deferred as lib;\nimport \'lib2.dart\' as lib;\nmain() { lib.f1(); lib.f2(); }'),new core.DartList.literal<any>(CompileTimeErrorCode.SHARED_DEFERRED_PREFIX));
        } )());
    }

    test_superInInvalidContext_binaryExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("var v = super + 0;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.SUPER_IN_INVALID_CONTEXT));
        } )());
    }

    test_superInInvalidContext_constructorFieldInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m() {}\n}\nclass B extends A {\n  var f;\n  B() : f = super.m();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.SUPER_IN_INVALID_CONTEXT));
        } )());
    }

    test_superInInvalidContext_factoryConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m() {}\n}\nclass B extends A {\n  factory B() {\n    super.m();\n    return null;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.SUPER_IN_INVALID_CONTEXT));
        } )());
    }

    test_superInInvalidContext_instanceVariableInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var a;\n}\nclass B extends A {\n var b = super.a;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.SUPER_IN_INVALID_CONTEXT));
        } )());
    }

    test_superInInvalidContext_staticMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static m() {}\n}\nclass B extends A {\n  static n() { return super.m(); }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.SUPER_IN_INVALID_CONTEXT));
        } )());
    }

    test_superInInvalidContext_staticVariableInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static int a = 0;\n}\nclass B extends A {\n  static int b = super.a;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.SUPER_IN_INVALID_CONTEXT));
        } )());
    }

    test_superInInvalidContext_topLevelFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  super.f();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.SUPER_IN_INVALID_CONTEXT));
        } )());
    }

    test_superInInvalidContext_topLevelVariableInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("var v = super.y;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.SUPER_IN_INVALID_CONTEXT));
        } )());
    }

    test_superInRedirectingConstructor_redirectionSuper() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B {\n  B() : this.name(), super();\n  B.name() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.SUPER_IN_REDIRECTING_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_superInRedirectingConstructor_superRedirection() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B {\n  B() : super(), this.name();\n  B.name() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.SUPER_IN_REDIRECTING_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_symbol_constructor_badArgs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('var s1 = const Symbol(\'3\');\nvar s2 = const Symbol(3);\nvar s3 = const Symbol();\nvar s4 = const Symbol(\'x\', \'y\');\nvar s5 = const Symbol(\'x\', foo: \'x\');');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION,CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION,StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE,CompileTimeErrorCode.NOT_ENOUGH_REQUIRED_ARGUMENTS,CompileTimeErrorCode.EXTRA_POSITIONAL_ARGUMENTS,CompileTimeErrorCode.UNDEFINED_NAMED_PARAMETER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeAliasCannotReferenceItself_11987() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef void F(List<G> l);\ntypedef void G(List<F> l);\nmain() {\n  F foo(G g) => g;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.TYPE_ALIAS_CANNOT_REFERENCE_ITSELF,CompileTimeErrorCode.TYPE_ALIAS_CANNOT_REFERENCE_ITSELF));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeAliasCannotReferenceItself_19459() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<B, C> {}\nabstract class D {\n  f(E e);\n}\nabstract class E extends A<dynamic, F> {}\ntypedef D F();\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeAliasCannotReferenceItself_parameterType_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("typedef A({A a});");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.TYPE_ALIAS_CANNOT_REFERENCE_ITSELF));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeAliasCannotReferenceItself_parameterType_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("typedef A([A a]);");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.TYPE_ALIAS_CANNOT_REFERENCE_ITSELF));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeAliasCannotReferenceItself_parameterType_required() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("typedef A(A a);");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.TYPE_ALIAS_CANNOT_REFERENCE_ITSELF));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeAliasCannotReferenceItself_parameterType_typeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("typedef A(List<A> a);");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.TYPE_ALIAS_CANNOT_REFERENCE_ITSELF));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeAliasCannotReferenceItself_returnClass_withTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef C A();\ntypedef A B();\nclass C {\n  B a;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeAliasCannotReferenceItself_returnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("typedef A A();");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.TYPE_ALIAS_CANNOT_REFERENCE_ITSELF));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeAliasCannotReferenceItself_returnType_indirect() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef B A();\ntypedef A B();');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.TYPE_ALIAS_CANNOT_REFERENCE_ITSELF,CompileTimeErrorCode.TYPE_ALIAS_CANNOT_REFERENCE_ITSELF));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeAliasCannotReferenceItself_typeVariableBounds() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("typedef A<T extends A>();");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.TYPE_ALIAS_CANNOT_REFERENCE_ITSELF));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeArgumentNotMatchingBounds_const() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B {}\nclass G<E extends A> {\n  const G();\n}\nf() { return const G<B>(); }');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.TYPE_ARGUMENT_NOT_MATCHING_BOUNDS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedClass_const() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  return const A();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.UNDEFINED_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedConstructorInInitializer_explicit_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {\n  B() : super.named();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.UNDEFINED_CONSTRUCTOR_IN_INITIALIZER));
        } )());
    }

    test_undefinedConstructorInInitializer_explicit_unnamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A.named() {}\n}\nclass B extends A {\n  B() : super();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.UNDEFINED_CONSTRUCTOR_IN_INITIALIZER_DEFAULT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedConstructorInInitializer_implicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A.named() {}\n}\nclass B extends A {\n  B();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.UNDEFINED_CONSTRUCTOR_IN_INITIALIZER_DEFAULT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedNamedParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A();\n}\nmain() {\n  const A(p: 0);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.UNDEFINED_NAMED_PARAMETER));
        } )());
    }

    test_uriDoesNotExist_export() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("export 'unknown.dart';");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.URI_DOES_NOT_EXIST));
        } )());
    }

    test_uriDoesNotExist_import() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("import 'unknown.dart';");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.URI_DOES_NOT_EXIST));
        } )());
    }

    test_uriDoesNotExist_import_appears_after_deleting_target() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let test : any = this.addSource("import 'target.dart';");
            let target : any = this.addNamedSource("/target.dart","");
            await this.computeAnalysisResult(test);
            this.assertErrors(test,new core.DartList.literal(HintCode.UNUSED_IMPORT));
            this.resourceProvider.deleteFile(target.fullName);
            if (this.enableNewAnalysisDriver) {
                this.driver.removeFile(target.fullName);
            }else {
                this.analysisContext2.setContents(target,null);
                let changeSet : any = ((_) : any =>  {
                    {
                        removedSource(target);
                        return _;
                    }
                })(new bare.createInstance(any,null));
                this.analysisContext2.applyChanges(changeSet);
            }
            await this.computeAnalysisResult(test);
            this.assertErrors(test,new core.DartList.literal(CompileTimeErrorCode.URI_DOES_NOT_EXIST));
        } )());
    }

    test_uriDoesNotExist_import_disappears_when_fixed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("import 'target.dart';");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.URI_DOES_NOT_EXIST));
            let targetPath : string = this.resourceProvider.convertPath('/target.dart');
            if (this.enableNewAnalysisDriver) {
                op(Op.INDEX_ASSIGN,this.fileContentOverlay,targetPath,'');
                this.driver.changeFile(targetPath);
            }else {
                let target : any = this.analysisContext2.getSourcesWithFullName(targetPath).first;
                expect(this.analysisContext2.getModificationStamp(target),-1);
                ((_) : any =>  {
                    {
                        setContents(target,"");
                        handleContentsChanged(target,null,"",true);
                        return _;
                    }
                })(this.analysisContext2);
            }
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_IMPORT));
        } )());
    }

    test_uriDoesNotExist_part() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library lib;\npart \'unknown.dart\';');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.URI_DOES_NOT_EXIST));
        } )());
    }

    test_uriWithInterpolation_constant() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("import 'stuff_$platform.dart';");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.URI_WITH_INTERPOLATION,StaticWarningCode.UNDEFINED_IDENTIFIER));
        } )());
    }

    test_uriWithInterpolation_nonConstant() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library lib;\npart \'${\'a\'}.dart\';');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.URI_WITH_INTERPOLATION));
        } )());
    }

    test_wrongNumberOfParametersForOperator1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._check_wrongNumberOfParametersForOperator1("<");
            await this._check_wrongNumberOfParametersForOperator1(">");
            await this._check_wrongNumberOfParametersForOperator1("<=");
            await this._check_wrongNumberOfParametersForOperator1(">=");
            await this._check_wrongNumberOfParametersForOperator1("+");
            await this._check_wrongNumberOfParametersForOperator1("/");
            await this._check_wrongNumberOfParametersForOperator1("~/");
            await this._check_wrongNumberOfParametersForOperator1("*");
            await this._check_wrongNumberOfParametersForOperator1("%");
            await this._check_wrongNumberOfParametersForOperator1("|");
            await this._check_wrongNumberOfParametersForOperator1("^");
            await this._check_wrongNumberOfParametersForOperator1("&");
            await this._check_wrongNumberOfParametersForOperator1("<<");
            await this._check_wrongNumberOfParametersForOperator1(">>");
            await this._check_wrongNumberOfParametersForOperator1("[]");
        } )());
    }

    test_wrongNumberOfParametersForOperator_minus() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  operator -(a, b) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.WRONG_NUMBER_OF_PARAMETERS_FOR_OPERATOR_MINUS));
            this.verify(new core.DartList.literal(source));
            this.reset();
        } )());
    }

    test_wrongNumberOfParametersForOperator_tilde() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._check_wrongNumberOfParametersForOperator("~","a");
            await this._check_wrongNumberOfParametersForOperator("~","a, b");
        } )());
    }

    test_wrongNumberOfParametersForSetter_function_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("set x({p}) {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.WRONG_NUMBER_OF_PARAMETERS_FOR_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_wrongNumberOfParametersForSetter_function_optional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("set x([p]) {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.WRONG_NUMBER_OF_PARAMETERS_FOR_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_wrongNumberOfParametersForSetter_function_tooFew() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("set x() {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.WRONG_NUMBER_OF_PARAMETERS_FOR_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_wrongNumberOfParametersForSetter_function_tooMany() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("set x(a, b) {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.WRONG_NUMBER_OF_PARAMETERS_FOR_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_wrongNumberOfParametersForSetter_method_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  set x({p}) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.WRONG_NUMBER_OF_PARAMETERS_FOR_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_wrongNumberOfParametersForSetter_method_optional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  set x([p]) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.WRONG_NUMBER_OF_PARAMETERS_FOR_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_wrongNumberOfParametersForSetter_method_tooFew() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  set x() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.WRONG_NUMBER_OF_PARAMETERS_FOR_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_wrongNumberOfParametersForSetter_method_tooMany() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  set x(a, b) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.WRONG_NUMBER_OF_PARAMETERS_FOR_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_yield_used_as_identifier_in_async_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() async {\n  var yield = 1;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_yield_used_as_identifier_in_async_star_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() async* {\n  var yield = 1;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_yield_used_as_identifier_in_sync_star_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() sync* {\n  var yield = 1;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.ASYNC_KEYWORD_USED_AS_IDENTIFIER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    _check_constEvalThrowsException_binary_null(expr : string,resolved : boolean) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource(`const C = ${expr};`);
            if (resolved) {
                await this.computeAnalysisResult(source);
                this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION));
                this.verify(new core.DartList.literal(source));
            }else {
                await this.computeAnalysisResult(source);
                this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_EVAL_THROWS_EXCEPTION));
            }
            this.reset();
        } )());
    }

    _check_constEvalTypeBool_withParameter_binary(expr : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource(`class A {\n  final a;\n  const A(bool p) : a = ${expr};\n}`);
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_EVAL_TYPE_BOOL,StaticTypeWarningCode.NON_BOOL_OPERAND));
            this.verify(new core.DartList.literal(source));
            this.reset();
        } )());
    }

    _check_constEvalTypeInt_withParameter_binary(expr : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource(`class A {\n  final a;\n  const A(int p) : a = ${expr};\n}`);
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_EVAL_TYPE_INT,StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
            this.reset();
        } )());
    }

    _check_constEvalTypeNum_withParameter_binary(expr : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource(`class A {\n  final a;\n  const A(num p) : a = ${expr};\n}`);
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_EVAL_TYPE_NUM,StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
            this.reset();
        } )());
    }

    _check_wrongNumberOfParametersForOperator(name : string,parameters : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource(`class A {\n  operator ${name}(${parameters}) {}\n}`);
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.WRONG_NUMBER_OF_PARAMETERS_FOR_OPERATOR));
            this.verify(new core.DartList.literal(source));
            this.reset();
        } )());
    }

    _check_wrongNumberOfParametersForOperator1(name : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._check_wrongNumberOfParametersForOperator(name,"");
            await this._check_wrongNumberOfParametersForOperator(name,"a, b");
        } )());
    }

    _privateCollisionInMixinApplicationTest(testCode : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.strongMode = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            this.addNamedSource('/lib1.dart','class A {\n  int _x;\n}\n\nclass B {\n  int _x;\n}\n');
            let source : any = this.addSource(testCode);
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.PRIVATE_COLLISION_IN_MIXIN_APPLICATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CompileTimeErrorCodeTest() {
    }
}

export class properties {
}
