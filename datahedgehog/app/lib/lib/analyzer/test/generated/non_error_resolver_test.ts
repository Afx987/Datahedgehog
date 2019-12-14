/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/non_error_resolver_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./resolver_test_case";
import * as lib4 from "./test_support";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(NonErrorResolverTest);
    });
};
export namespace NonErrorResolverTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'NonErrorResolverTest';
    export type Interface = Omit<NonErrorResolverTest, Constructors>;
}
@DartClass
export class NonErrorResolverTest extends lib3.ResolverTestCase {
    fail_undefinedEnumConstant() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('enum E { ONE }\nE e() {\n  return E.TWO;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_abstractSuperMemberReference_superHasConcrete_mixinHasAbstract_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void method() {}\n}\n\nabstract class B {\n  void method();\n}\n\nclass C extends A with B {\n  void method() {\n    super.method();\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_abstractSuperMemberReference_superHasNoSuchMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  int m();\n  noSuchMethod(_) => 42;\n}\n\nclass B extends A {\n  int m() => super.m();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_abstractSuperMemberReference_superSuperHasConcrete_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  int get m => 0;\n}\n\nabstract class B extends A {\n  int get m;\n}\n\nclass C extends B {\n  int get m => super.m;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_abstractSuperMemberReference_superSuperHasConcrete_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('void main() {\n  print(new C().m());\n}\n\nabstract class A {\n  int m() => 0;\n}\n\nabstract class B extends A {\n  int m();\n}\n\nclass C extends B {\n  int m() => super.m();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_abstractSuperMemberReference_superSuperHasConcrete_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  void set m(int v) {}\n}\n\nabstract class B extends A {\n  void set m(int v);\n}\n\nclass C extends B {\n  void set m(int v) {\n    super.m = 0;\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_ambiguousExport() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nexport \'lib1.dart\';\nexport \'lib2.dart\';');
            this.addNamedSource("/lib1.dart",'library lib1;\nclass M {}');
            this.addNamedSource("/lib2.dart",'library lib2;\nclass N {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_ambiguousExport_combinators_hide() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nexport \'lib1.dart\';\nexport \'lib2.dart\' hide B;');
            this.addNamedSource("/lib1.dart",'library L1;\nclass A {}\nclass B {}');
            this.addNamedSource("/lib2.dart",'library L2;\nclass B {}\nclass C {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_ambiguousExport_combinators_show() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nexport \'lib1.dart\';\nexport \'lib2.dart\' show C;');
            this.addNamedSource("/lib1.dart",'library L1;\nclass A {}\nclass B {}');
            this.addNamedSource("/lib2.dart",'library L2;\nclass B {}\nclass C {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_ambiguousExport_sameDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nexport \'lib.dart\';\nexport \'lib.dart\';');
            this.addNamedSource("/lib.dart",'library lib;\nclass N {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_ambiguousImport_hideCombinator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib1.dart\';\nimport \'lib2.dart\';\nimport \'lib3.dart\' hide N;\nmain() {\n  new N1();\n  new N2();\n  new N3();\n}');
            this.addNamedSource("/lib1.dart",'library lib1;\nclass N {}\nclass N1 {}');
            this.addNamedSource("/lib2.dart",'library lib2;\nclass N {}\nclass N2 {}');
            this.addNamedSource("/lib3.dart",'library lib3;\nclass N {}\nclass N3 {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_ambiguousImport_showCombinator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib1.dart\';\nimport \'lib2.dart\' show N, N2;\nmain() {\n  new N1();\n  new N2();\n}');
            this.addNamedSource("/lib1.dart",'library lib1;\nclass N {}\nclass N1 {}');
            this.addNamedSource("/lib2.dart",'library lib2;\nclass N {}\nclass N2 {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_SHOWN_NAME));
        } )());
    }

    test_annotated_partOfDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L; part "part.dart";');
            this.addNamedSource('/part.dart','@deprecated part of L;');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_classWithCall_Function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('  caller(Function callee) {\n    callee();\n  }\n\n  class CallMeBack {\n    call() => 0;\n  }\n\n  main() {\n    caller(new CallMeBack());\n  }');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_fieldFormalParameterElement_member() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class ObjectSink<T> {\n  void sink(T object) {\n    new TimestampedObject<T>(object);\n  }\n}\nclass TimestampedObject<E> {\n  E object2;\n  TimestampedObject(this.object2);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_functionParameter_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<K> {\n  m(f(K k), K v) {\n    f(v);\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_typedef_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef A<T>(T p);\nf(A<int> a) {\n  a(1);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_Object_Function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {\n  process(() {});\n}\nprocess(Object x) {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_typedef_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef A(int p1, String p2);\nA getA() => null;\nf() {\n  A a = getA();\n  a(1, \'2\');\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_typedef_parameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef A(int p1, String p2);\nf(A a) {\n  a(1, \'2\');\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assert_with_message_await() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nf() async {\n  assert(false, await g());\n}\nFuture<String> g() => null;\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assert_with_message_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  assert(false, g());\n}\ng() => null;\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assert_with_message_non_string() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  assert(false, 3);\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assert_with_message_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  assert(false, null);\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assert_with_message_string() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  assert(false, \'message\');\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assert_with_message_suppresses_unused_var_hint() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  String message = \'msg\';\n  assert(true, message);\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignability_function_expr_rettype_from_typedef_cls() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {}\ntypedef C F();\nF f;\nmain() {\n  F f2 = (() => f());\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignability_function_expr_rettype_from_typedef_typedef() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef G F();\ntypedef G();\nF f;\nmain() {\n  F f2 = (() => f());\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinal_prefixNegate() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  final x = 0;\n  -x;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinalNoSetter_prefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int get x => 0;\n  set x(v) {}\n}\nmain() {\n  A a = new A();\n  a.x = 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinalNoSetter_propertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int get x => 0;\n  set x(v) {}\n}\nclass B {\n  static A a;\n}\nmain() {\n  B.a.x = 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinals_importWithPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library lib;\nimport \'lib1.dart\' as foo;\nmain() {\n  foo.x = true;\n}');
            this.addNamedSource("/lib1.dart",'library lib1;\nbool x = false;');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_dynamic_with_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('dynamic f() async {\n  return;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_dynamic_with_return_value() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('dynamic f() async {\n  return 5;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_dynamic_without_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('dynamic f() async {}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_expression_function_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\ntypedef Future<int> F(int i);\nmain() {\n  F f = (int i) async => i;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_flattened() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\ntypedef Future<int> CreatesFutureInt();\nmain() {\n  CreatesFutureInt createFutureInt = () async => f();\n  Future<int> futureInt = createFutureInt();\n  futureInt.then((int i) => print(i));\n}\nFuture<int> f() => null;\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_future_dynamic_with_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nFuture<dynamic> f() async {\n  return;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_future_dynamic_with_return_value() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nFuture<dynamic> f() async {\n  return 5;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_future_dynamic_without_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nFuture<dynamic> f() async {}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_future_int_with_return_future_int() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nFuture<int> f() async {\n  return new Future<int>.value(5);\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_future_int_with_return_value() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nFuture<int> f() async {\n  return 5;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_future_null_with_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nFuture<Null> f() async {\n  return;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_future_null_without_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nFuture<Null> f() async {}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_future_object_with_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nFuture<Object> f() async {\n  return;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_future_object_with_return_value() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nFuture<Object> f() async {\n  return 5;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_future_with_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nFuture f() async {\n  return;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_future_with_return_value() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nFuture f() async {\n  return 5;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_future_without_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nFuture f() async {}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_return_flattens_futures() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nFuture<int> f() async {\n  return g();\n}\nFuture<Future<int>> g() => null;\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_with_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() async {\n  return;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_with_return_value() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() async {\n  return 5;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_async_without_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() async {}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_asyncForInWrongContext_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(list) async {\n  await for (var e in list) {\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_asyncForInWrongContext_asyncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(list) async* {\n  await for (var e in list) {\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_await_flattened() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nFuture<Future<int>> ffi() => null;\nf() async {\n  int b = await ffi();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_await_simple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nFuture<int> fi() => null;\nf() async {\n  int a = await fi();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_awaitInWrongContext_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(x, y) async {\n  return await x + await y;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_awaitInWrongContext_asyncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(x, y) async* {\n  yield await x + await y;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_breakWithoutLabelInSwitch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void m(int i) {\n    switch (i) {\n      case 0:\n        break;\n    }\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_bug_24539_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C<T> {\n  List<Foo> get x => null;\n}\n\ntypedef Foo(param);\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_bug_24539_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C<T> {\n  void set x(List<Foo> value) {}\n}\n\ntypedef Foo(param);\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_builtInIdentifierAsType_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  dynamic x;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_caseBlockNotTerminated() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(int p) {\n  for (int i = 0; i < 10; i++) {\n    switch (p) {\n      case 0:\n        break;\n      case 1:\n        continue;\n      case 2:\n        return;\n      case 3:\n        throw new Object();\n      case 4:\n      case 5:\n        return;\n      case 6:\n      default:\n        return;\n    }\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_caseBlockNotTerminated_lastCase() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(int p) {\n  switch (p) {\n    case 0:\n      p = p + 1;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_caseExpressionTypeImplementsEquals() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('print(p) {}\n\nabstract class B {\n  final id;\n  const B(this.id);\n  String toString() => \'C($id)\';\n  /** Equality is identity equality, the id isn\'t used. */\n  bool operator==(Object other);\n  }\n\nclass C extends B {\n  const C(id) : super(id);\n}\n\nvoid doSwitch(c) {\n  switch (c) {\n  case const C(0): print(\'Switch: 0\'); break;\n  case const C(1): print(\'Switch: 1\'); break;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_caseExpressionTypeImplementsEquals_int() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(int i) {\n  switch(i) {\n    case(1) : return 1;\n    default: return 0;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_caseExpressionTypeImplementsEquals_Object() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class IntWrapper {\n  final int value;\n  const IntWrapper(this.value);\n}\n\nf(IntWrapper intWrapper) {\n  switch(intWrapper) {\n    case(const IntWrapper(1)) : return 1;\n    default: return 0;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_caseExpressionTypeImplementsEquals_String() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(String s) {\n  switch(s) {\n    case(\'1\') : return 1;\n    default: return 0;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_class_type_alias_documentationComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('/**\n * Documentation\n */\nclass C = D with E;\n\nclass D {}\nclass E {}');
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            let classC : any = resolutionMap.elementDeclaredByCompilationUnit(unit).getType('C');
            expect(classC.documentationComment,isNotNull);
        } )());
    }

    test_commentReference_beforeConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'abstract class A {\n  /// [p]\n  A(int p) {}\n}';
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            {
                let ref : any = lib4.EngineTestCase.findSimpleIdentifier(unit,code,"p]");
                expect(ref.staticElement,new bare.createInstance(any,null));
            }
        } )());
    }

    test_commentReference_beforeEnum() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '/// This is the [Samurai] kind.\nenum Samurai {\n  /// Use [int].\n  WITH_SWORD,\n  /// Like [WITH_SWORD], but only without one.\n  WITHOUT_SWORD\n}';
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            {
                let ref : any = lib4.EngineTestCase.findSimpleIdentifier(unit,code,'Samurai]');
                let refElement : any = ref.staticElement;
                expect(refElement,isNotNull);
                expect(refElement.name,'Samurai');
            }
            {
                let ref : any = lib4.EngineTestCase.findSimpleIdentifier(unit,code,'int]');
                let refElement : any = ref.staticElement;
                expect(refElement,isNotNull);
                expect(refElement.name,'int');
            }
            {
                let ref : any = lib4.EngineTestCase.findSimpleIdentifier(unit,code,'WITH_SWORD]');
                let refElement : any = ref.staticElement;
                expect(refElement,isNotNull);
                expect(refElement.name,'WITH_SWORD');
            }
        } )());
    }

    test_commentReference_beforeFunction_blockBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '/// [p]\nfoo(int p) {\n}';
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            let ref : any = lib4.EngineTestCase.findSimpleIdentifier(unit,code,'p]');
            expect(ref.staticElement,new bare.createInstance(any,null));
        } )());
    }

    test_commentReference_beforeFunction_expressionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '/// [p]\nfoo(int p) => null;';
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            let ref : any = lib4.EngineTestCase.findSimpleIdentifier(unit,code,'p]');
            expect(ref.staticElement,new bare.createInstance(any,null));
        } )());
    }

    test_commentReference_beforeFunctionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '/// [p]\ntypedef Foo(int p);\n';
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            let ref : any = lib4.EngineTestCase.findSimpleIdentifier(unit,code,'p]');
            expect(ref.staticElement,new bare.createInstance(any,null));
        } )());
    }

    test_commentReference_beforeGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'abstract class A {\n  /// [int]\n  get g => null;\n}';
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            {
                let ref : any = lib4.EngineTestCase.findSimpleIdentifier(unit,code,'int]');
                expect(ref.staticElement,isNotNull);
            }
        } )());
    }

    test_commentReference_beforeMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'abstract class A {\n  /// [p1]\n  ma(int p1) {}\n  /// [p2]\n  mb(int p2);\n  /// [p3] and [p4]\n  mc(int p3, p4());\n  /// [p5]\n  md(int p5, {int p6});\n}';
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            var assertIsParameter : (search : string) => any = (search : string) =>  {
                let ref : any = lib4.EngineTestCase.findSimpleIdentifier(unit,code,search);
                expect(ref.staticElement,new bare.createInstance(any,null));
            };
            assertIsParameter('p1');
            assertIsParameter('p2');
            assertIsParameter('p3');
            assertIsParameter('p4');
            assertIsParameter('p5');
            assertIsParameter('p6');
        } )());
    }

    test_commentReference_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = '/// [foo]\nclass A {\n  foo() {}\n}';
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            let ref : any = lib4.EngineTestCase.findSimpleIdentifier(unit,code,'foo]');
            expect(ref.staticElement,new bare.createInstance(any,null));
        } )());
    }

    test_commentReference_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code : string = 'class A {\n  /// [x] in A\n  mA() {}\n  set x(value) {}\n}\nclass B extends A {\n  /// [x] in B\n  mB() {}\n}\n';
            let source : any = this.addSource(code);
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            let unit : any = analysisResult.unit;
            {
                let ref : any = lib4.EngineTestCase.findSimpleIdentifier(unit,code,"x] in A");
                expect(ref.staticElement,new bare.createInstance(any,null));
            }
            {
                let ref : any = lib4.EngineTestCase.findSimpleIdentifier(unit,code,'x] in B');
                expect(ref.staticElement,new bare.createInstance(any,null));
            }
        } )());
    }

    test_concreteClassWithAbstractMember() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  m();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_concreteClassWithAbstractMember_inherited() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m() {}\n}\nclass B extends A {\n  m();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingConstructorNameAndMember_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\nA.x() {}\nset x(_) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingInstanceGetterAndSuperclassMember_instance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  get v => 0;\n}\nclass B extends A {\n  get v => 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingStaticGetterAndInstanceSetter_thisClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static get x => 0;\n  static set x(int p) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingStaticSetterAndInstanceMember_thisClass_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static x() {}\n  static set x(int p) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_const_constructor_with_named_generic_parameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C<T> {\n  const C({T t});\n}\nconst c = const C(t: 1);\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_const_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const Type d = dynamic;\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_const_imported_defaultParameterValue_withImportPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.strongMode = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            let source : any = this.addNamedSource("/a.dart",'import \'b.dart\';\nconst b = const B();\n');
            this.addNamedSource("/b.dart",'import \'c.dart\' as ccc;\nclass B {\n  const B([p = ccc.value]);\n}\n');
            this.addNamedSource("/c.dart",'const int value = 12345;\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constConstructorWithNonConstSuper_explicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A();\n}\nclass B extends A {\n  const B(): super();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constConstructorWithNonConstSuper_redirectingFactory() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A();\n}\nclass B implements C {\n  const B();\n}\nclass C extends A {\n  const factory C() = B;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constConstructorWithNonConstSuper_unresolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A.a();\n}\nclass B extends A {\n  const B(): super();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.UNDEFINED_CONSTRUCTOR_IN_INITIALIZER_DEFAULT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constConstructorWithNonFinalField_finalInstanceVar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final int x = 0;\n  const A();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constConstructorWithNonFinalField_mixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  a() {}\n}\nclass B extends Object with A {\n  const B();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_CONSTRUCTOR_WITH_MIXIN));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constConstructorWithNonFinalField_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static int x;\n  const A();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constConstructorWithNonFinalField_syntheticField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A();\n  set x(value) {}\n  get x {return 0;}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constDeferredClass_new() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nclass A {\n  const A.b();\n}','library root;\nimport \'lib1.dart\' deferred as a;\nmain() {\n  new a.A.b();\n}'),new core.DartList.literal<any>());
        } )());
    }

    test_constEval_functionTypeLiteral() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef F();\nconst C = F;');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constEval_propertyExtraction_fieldStatic_targetType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/math.dart",'library math;\nconst PI = 3.14;');
            let source : any = this.addSource('import \'math.dart\' as math;\nconst C = math.PI;');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constEval_propertyExtraction_methodStatic_targetType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A();\n  static m() {}\n}\nconst C = A.m;');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constEval_symbol() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/math.dart",'library math;\nconst PI = 3.14;');
            let source : any = this.addSource('const C = #foo;\nfoo() {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constEvalTypeBoolNumString_equal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A();\n}\nclass B {\n  final v;\n  const B.a1(bool p) : v = p == true;\n  const B.a2(bool p) : v = p == false;\n  const B.a3(bool p) : v = p == 0;\n  const B.a4(bool p) : v = p == 0.0;\n  const B.a5(bool p) : v = p == \'\';\n  const B.b1(int p) : v = p == true;\n  const B.b2(int p) : v = p == false;\n  const B.b3(int p) : v = p == 0;\n  const B.b4(int p) : v = p == 0.0;\n  const B.b5(int p) : v = p == \'\';\n  const B.c1(String p) : v = p == true;\n  const B.c2(String p) : v = p == false;\n  const B.c3(String p) : v = p == 0;\n  const B.c4(String p) : v = p == 0.0;\n  const B.c5(String p) : v = p == \'\';\n  const B.n1(num p) : v = p == null;\n  const B.n2(num p) : v = null == p;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_constEvalTypeBoolNumString_notEqual() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A();\n}\nclass B {\n  final v;\n  const B.a1(bool p) : v = p != true;\n  const B.a2(bool p) : v = p != false;\n  const B.a3(bool p) : v = p != 0;\n  const B.a4(bool p) : v = p != 0.0;\n  const B.a5(bool p) : v = p != \'\';\n  const B.b1(int p) : v = p != true;\n  const B.b2(int p) : v = p != false;\n  const B.b3(int p) : v = p != 0;\n  const B.b4(int p) : v = p != 0.0;\n  const B.b5(int p) : v = p != \'\';\n  const B.c1(String p) : v = p != true;\n  const B.c2(String p) : v = p != false;\n  const B.c3(String p) : v = p != 0;\n  const B.c4(String p) : v = p != 0.0;\n  const B.c5(String p) : v = p != \'\';\n  const B.n1(num p) : v = p != null;\n  const B.n2(num p) : v = null != p;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constEvelTypeNum_String() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const String A = \'a\';\nconst String B = A + \'b\';\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constMapKeyExpressionTypeImplementsEquals_abstract() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class B {\n  final id;\n  const B(this.id);\n  String toString() => \'C($id)\';\n  /** Equality is identity equality, the id isn\'t used. */\n  bool operator==(Object other);\n  }\n\nclass C extends B {\n  const C(id) : super(id);\n}\n\nMap getMap() {\n  return const { const C(0): \'Map: 0\' };\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constNotInitialized_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static const int x = 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constNotInitialized_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {\n  const int x = 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constRedirectSkipsSupertype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B {\n  final x;\n  const B() : x = y;\n  const B.named() : x = null;\n}\nclass C extends B {\n  const C() : this.named();\n  const C.named() : super.named();\n}\nconst y = const C();\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constructorDeclaration_scope_signature() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const app = 0;\nclass A {\n  A(@app int app) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constWithNonConstantArgument_constField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(x);\n}\nmain() {\n  const A(double.INFINITY);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constWithNonConstantArgument_literals() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(a, b, c, d);\n}\nf() { return const A(true, 0, 1.0, \'2\'); }');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constWithTypeParameters_direct() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<T> {\n  static const V = const A<int>();\n  const A();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constWithUndefinedConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A.name();\n}\nf() {\n  return const A.name();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constWithUndefinedConstructorDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A();\n}\nf() {\n  return const A();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_defaultValueInFunctionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("typedef F([x]);");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_defaultValueInFunctionTypedParameter_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("f(g({p})) {}");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_defaultValueInFunctionTypedParameter_optional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("f(g([p])) {}");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedMemberUse_hide() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library lib;\nimport \'lib1.dart\' hide B;\nA a = new A();');
            this.addNamedSource("/lib1.dart",'library lib1;\nclass A {}\n@deprecated\nclass B {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateDefinition_emptyName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('Map _globalMap = {\n  \'a\' : () {},\n  \'b\' : () {}\n};');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateDefinition_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("bool get a => true;");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicatePart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/part1.dart','part of lib;');
            this.addNamedSource('/part2.dart','part of lib;');
            let source : any = this.addSource('library lib;\npart \'part1.dart\';\npart \'part2.dart\';\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_dynamicIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {\n  var v = dynamic;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_empty_generator_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nStream<int> f() async* {\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_empty_generator_sync() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('Iterable<int> f() sync* {\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_expectedOneListTypeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {\n  <int> [];\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_expectedTwoMapTypeArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {\n  <int, int> {};\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_exportDuplicatedLibraryUnnamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library test;\nexport \'lib1.dart\';\nexport \'lib2.dart\';');
            this.addNamedSource("/lib1.dart","");
            this.addNamedSource("/lib2.dart","");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_exportOfNonLibrary_libraryDeclared() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nexport \'lib1.dart\';');
            this.addNamedSource("/lib1.dart","library lib1;");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_exportOfNonLibrary_libraryNotDeclared() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nexport \'lib1.dart\';');
            this.addNamedSource("/lib1.dart","");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extraPositionalArguments_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(p1, p2) {}\nmain() {\n  f(1, 2);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extraPositionalArguments_Function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(Function a) {\n  a(1, 2);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extraPositionalArguments_implicitConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<E extends num> {\n  A(E x, E y);\n}\nclass M {}\nclass B<E extends num> = A<E> with M;\nvoid main() {\n   B<int> x = new B<int>(0,0);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extraPositionalArguments_typedef_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef A(p1, p2);\nA getA() => null;\nf() {\n  A a = getA();\n  a(1, 2);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extraPositionalArguments_typedef_parameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef A(p1, p2);\nf(A a) {\n  a(1, 2);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldInitializedByMultipleInitializers() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int x;\n  int y;\n  A() : x = 0, y = 0 {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldInitializedInInitializerAndDeclaration_fieldNotFinal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int x = 0;\n  A() : x = 1 {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldInitializedInInitializerAndDeclaration_finalFieldNotSet() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final int x;\n  A() : x = 1 {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldInitializerOutsideConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int x;\n  A(this.x) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldInitializerOutsideConstructor_defaultParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int x;\n  A([this.x]) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldInitializerRedirectingConstructor_super() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() {}\n}\nclass B extends A {\n  int x;\n  B(this.x) : super();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalInitializedInDeclarationAndConstructor_initializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final x;\n  A() : x = 1 {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalInitializedInDeclarationAndConstructor_initializingFormal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final x;\n  A(this.x) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalNotInitialized_atDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final int x = 0;\n  A() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalNotInitialized_fieldFormal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final int x = 0;\n  A() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalNotInitialized_functionTypedFieldFormal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final Function x;\n  A(int this.x(int p)) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalNotInitialized_hasNativeClause_hasConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A native \'something\' {\n  final int x;\n  A() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.NATIVE_CLAUSE_IN_NON_SDK_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalNotInitialized_hasNativeClause_noConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A native \'something\' {\n  final int x;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.NATIVE_CLAUSE_IN_NON_SDK_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalNotInitialized_initializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final int x;\n  A() : x = 0 {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalNotInitialized_redirectingConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final int x;\n  A(this.x);\n  A.named() : this (42);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionDeclaration_scope_returnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("int f(int) { return 0; }");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionDeclaration_scope_signature() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const app = 0;\nf(@app int app) {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionTypeAlias_scope_returnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("typedef int f(int);");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionTypeAlias_scope_signature() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const app = 0;\ntypedef int f(@app int app);');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionWithoutCall() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A implements Function {\n}\nclass B implements A {\n  void call() {}\n}\nclass C extends A {\n  void call() {}\n}\nclass D extends C {\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionWithoutCall_doesNotImplementFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A {}");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionWithoutCall_staticCallMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A { }\nclass B extends A {\n  static call() { }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionWithoutCall_withNoSuchMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A implements Function {\n  noSuchMethod(inv) {\n    return 42;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionWithoutCall_withNoSuchMethod_mixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  noSuchMethod(inv) {}\n}\nclass B extends Object with A implements Function {\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionWithoutCall_withNoSuchMethod_superclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  noSuchMethod(inv) {}\n}\nclass B extends A implements Function {\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_genericTypeAlias_castsAndTypeChecks_hasTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef Foo<S> = S Function<T>(T x);\n\nmain(Object p) {\n  (p as Foo)<int>(3);\n  if (p is Foo) {\n    p<int>(3);\n  }\n  (p as Foo<String>)<int>(3);\n  if (p is Foo<String>) {\n    p<int>(3);\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_genericTypeAlias_castsAndTypeChecks_noTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef Foo = T Function<T>(T x);\n\nmain(Object p) {\n  (p as Foo)<int>(3);\n  if (p is Foo) {\n    p<int>(3);\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_genericTypeAlias_fieldAndReturnType_noTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef Foo = int Function<T>(T x);\nint foo<T>(T x) => 3;\nFoo bar() => foo;\nvoid test1() {\n  bar()<String>("hello");\n}\n\nclass A {\n  Foo f;\n  void test() {\n    f<String>("hello");\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_genericTypeAlias_fieldAndReturnType_typeParameters_arguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef Foo<S> = S Function<T>(T x);\nint foo<T>(T x) => 3;\nFoo<int> bar() => foo;\nvoid test1() {\n  bar()<String>("hello");\n}\n\nclass A {\n  Foo<int> f;\n  void test() {\n    f<String>("hello");\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_genericTypeAlias_fieldAndReturnType_typeParameters_noArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef Foo<S> = S Function<T>(T x);\nint foo<T>(T x) => 3;\nFoo bar() => foo;\nvoid test1() {\n  bar()<String>("hello");\n}\n\nclass A {\n  Foo f;\n  void test() {\n    f<String>("hello");\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_genericTypeAlias_invalidGenericFunctionType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef F = int;\nmain(p) {\n  p is F;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.INVALID_GENERIC_FUNCTION_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_genericTypeAlias_noTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef Foo = int Function<T>(T x);\nint foo<T>(T x) => 3;\nvoid test1() {\n  Foo y = foo;\n  // These two should be equivalent\n  foo<String>("hello");\n  y<String>("hello");\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_genericTypeAlias_typeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef Foo<S> = S Function<T>(T x);\nint foo<T>(T x) => 3;\nvoid test1() {\n  Foo<int> y = foo;\n  // These two should be equivalent\n  foo<String>("hello");\n  y<String>("hello");\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implicitConstructorDependencies() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B {\n  B(int i);\n}\nclass M1 {}\nclass M2 {}\n\nclass C2 = C1 with M2;\nclass C1 = B with M1;\n\nmain() {\n  new C2(5);\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implicitThisReferenceInInitializer_constructorName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A.named() {}\n}\nclass B {\n  var v;\n  B() : v = new A.named();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implicitThisReferenceInInitializer_prefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var f;\n}\nclass B {\n  var v;\n  B(A a) : v = a.f;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implicitThisReferenceInInitializer_qualifiedMethodInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  f() {}\n}\nclass B {\n  var v;\n  B() : v = new A().f();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implicitThisReferenceInInitializer_qualifiedPropertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var f;\n}\nclass B {\n  var v;\n  B() : v = new A().f;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implicitThisReferenceInInitializer_staticField_thisClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var v;\n  A() : v = f;\n  static var f;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implicitThisReferenceInInitializer_staticGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var v;\n  A() : v = f;\n  static get f => 42;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implicitThisReferenceInInitializer_staticMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var v;\n  A() : v = f();\n  static f() => 42;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implicitThisReferenceInInitializer_topLevelField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var v;\n  A() : v = f;\n}\nvar f = 42;');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implicitThisReferenceInInitializer_topLevelFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var v;\n  A() : v = f();\n}\nf() => 42;');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implicitThisReferenceInInitializer_topLevelGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var v;\n  A() : v = f;\n}\nget f => 42;');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_implicitThisReferenceInInitializer_typeParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<T> {\n  var v;\n  A(p) : v = (p is T);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_importDuplicatedLibraryName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library test;\nimport \'lib.dart\';\nimport \'lib.dart\';');
            this.addNamedSource("/lib.dart","library lib;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_IMPORT,HintCode.UNUSED_IMPORT,HintCode.DUPLICATE_IMPORT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_importDuplicatedLibraryUnnamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library test;\nimport \'lib1.dart\';\nimport \'lib2.dart\';');
            this.addNamedSource("/lib1.dart","");
            this.addNamedSource("/lib2.dart","");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_IMPORT,HintCode.UNUSED_IMPORT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_importOfNonLibrary_libraryDeclared() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library lib;\nimport \'part.dart\';\nA a;');
            this.addNamedSource("/part.dart",'library lib1;\nclass A {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_importOfNonLibrary_libraryNotDeclared() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library lib;\nimport \'part.dart\';\nA a;');
            this.addNamedSource("/part.dart","class A {}");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_importPrefixes_withFirstLetterDifference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib1.dart\' as math;\nimport \'lib2.dart\' as path;\nmain() {\n  math.test1();\n  path.test2();\n}');
            this.addNamedSource("/lib1.dart",'library lib1;\ntest1() {}');
            this.addNamedSource("/lib2.dart",'library lib2;\ntest2() {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_inconsistentCaseExpressionTypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(var p) {\n  switch (p) {\n    case 1:\n      break;\n    case 2:\n      break;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_inconsistentMethodInheritance_accessors_typeParameter2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A<E> {\n  E get x {return null;}\n}\nclass B<E> {\n  E get x {return null;}\n}\nclass C<E> extends A<E> implements B<E> {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_inconsistentMethodInheritance_accessors_typeParameters1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A<E> {\n  E get x;\n}\nabstract class B<E> {\n  E get x;\n}\nclass C<E> implements A<E>, B<E> {\n  E get x => null;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_inconsistentMethodInheritance_accessors_typeParameters_diamond() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class F<E> extends B<E> {}\nclass D<E> extends F<E> {\n  external E get g;\n}\nabstract class C<E> {\n  E get g;\n}\nabstract class B<E> implements C<E> {\n  E get g { return null; }\n}\nclass A<E> extends B<E> implements D<E> {\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_inconsistentMethodInheritance_methods_typeParameter2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<E> {\n  x(E e) {}\n}\nclass B<E> {\n  x(E e) {}\n}\nclass C<E> extends A<E> implements B<E> {\n  x(E e) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_inconsistentMethodInheritance_methods_typeParameters1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<E> {\n  x(E e) {}\n}\nclass B<E> {\n  x(E e) {}\n}\nclass C<E> implements A<E>, B<E> {\n  x(E e) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_inconsistentMethodInheritance_overrideTrumpsInherits_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B<S> {\n  S get g => null;\n}\nabstract class I<U> {\n  U get g => null;\n}\nclass C extends B<double> implements I<int> {\n  num get g => null;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_inconsistentMethodInheritance_overrideTrumpsInherits_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B<S> {\n  m(S s) => null;\n}\nabstract class I<U> {\n  m(U u) => null;\n}\nclass C extends B<double> implements I<int> {\n  m(num n) => null;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_inconsistentMethodInheritance_overrideTrumpsInherits_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B<S> {\n  set t(S s) {}\n}\nabstract class I<U> {\n  set t(U u) {}\n}\nclass C extends B<double> implements I<int> {\n  set t(num n) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_inconsistentMethodInheritance_simple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  x();\n}\nabstract class B {\n  x();\n}\nclass C implements A, B {\n  x() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_initializingFormalForNonExistentField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int x;\n  A(this.x) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instance_creation_inside_annotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {\n  const C();\n}\nclass D {\n  final C c;\n  const D(this.c);\n}\n@D(const C())\nf() {}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceAccessToStaticMember_fromComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static m() {}\n}\n/// [A.m]\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceAccessToStaticMember_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m() {}\nmain() {\n  m();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMemberAccessFromStatic_fromComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m() {}\n  /// [m]\n  static foo() {\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMethodNameCollidesWithSuperclassStatic_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib.dart\';\nclass B extends A {\n  _m() {}\n}');
            this.addNamedSource("/lib.dart",'library L;\nclass A {\n  static var _m;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMethodNameCollidesWithSuperclassStatic_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib.dart\';\nclass B extends A {\n  _m() {}\n}');
            this.addNamedSource("/lib.dart",'library L;\nclass A {\n  static _m() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAnnotation_constantVariable_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('@A.C\nclass A {\n  static const C = 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAnnotation_constantVariable_field_importWithPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.dart",'library lib;\nclass A {\n  static const C = 0;\n}');
            let source : any = this.addSource('import \'lib.dart\' as p;\n@p.A.C\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAnnotation_constantVariable_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const C = 0;\n@C\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAnnotation_constantVariable_topLevel_importWithPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.dart",'library lib;\nconst C = 0;');
            let source : any = this.addSource('import \'lib.dart\' as p;\n@p.C\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAnnotation_constConstructor_importWithPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.dart",'library lib;\nclass A {\n  const A(int p);\n}');
            let source : any = this.addSource('import \'lib.dart\' as p;\n@p.A(42)\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAnnotation_constConstructor_named_importWithPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.dart",'library lib;\nclass A {\n  const A.named(int p);\n}');
            let source : any = this.addSource('import \'lib.dart\' as p;\n@p.A.named(42)\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  var x;\n  var y;\n  x = y;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAssignment_compoundAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class byte {\n  int _value;\n  byte(this._value);\n  byte operator +(int val) { return this; }\n}\n\nvoid main() {\n  byte b = new byte(52);\n  b += 3;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAssignment_defaultValue_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f({String x: \'0\'}) {\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAssignment_defaultValue_optional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f([String x = \'0\']) {\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAssignment_ifNullAssignment_compatibleType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('void f(int i) {\n  num n;\n  n ??= i;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAssignment_ifNullAssignment_sameType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('void f(int i) {\n  int j;\n  j ??= i;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAssignment_implicitlyImplementFunctionViaCall_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class I {\n  int call(int x) => 0;\n}\nclass C implements I {\n  noSuchMethod(_) => null;\n}\ntypedef int IntToInt(int x);\nIntToInt f = new I();');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAssignment_implicitlyImplementFunctionViaCall_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class I {\n  int call(int x) => 0;\n}\nclass C implements I {\n  noSuchMethod(_) => null;\n}\ntypedef int IntToInt(int x);\nIntToInt f = new C();');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAssignment_implicitlyImplementFunctionViaCall_3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class I {\n  int call(int x) => 0;\n}\nclass C implements I {\n  noSuchMethod(_) => null;\n}\ntypedef int IntToInt(int x);\nFunction f = new C();');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAssignment_implicitlyImplementFunctionViaCall_4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class I {\n  int call([int x]) => 0;\n}\nclass C implements I {\n  noSuchMethod(_) => null;\n}\ntypedef int VoidToInt();\nVoidToInt f = new C();');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAssignment_toDynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  var g;\n  g = () => 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidFactoryNameNotAClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  factory A() => null;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidIdentifierInAsync() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m() {\n    int async;\n    int await;\n    int yield;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideNamedParamType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m({int a}) {}\n}\nclass B implements A {\n  m({int a, int b}) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideDifferentDefaultValues_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m({int p : 0}) {}\n}\nclass B extends A {\n  m({int p : 0}) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideDifferentDefaultValues_named_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('nothing() => \'nothing\';\nclass A {\n  thing(String a, {orElse : nothing}) {}\n}\nclass B extends A {\n  thing(String a, {orElse : nothing}) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideDifferentDefaultValues_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m([int p = 0]) {}\n}\nclass B extends A {\n  m([int p = 0]) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideDifferentDefaultValues_positional_changedOrder() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m([int a = 0, String b = \'0\']) {}\n}\nclass B extends A {\n  m([int b = 0, String a = \'0\']) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideDifferentDefaultValues_positional_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('nothing() => \'nothing\';\nclass A {\n  thing(String a, [orElse = nothing]) {}\n}\nclass B extends A {\n  thing(String a, [orElse = nothing]) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideNamed_unorderedNamedParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m({a, b}) {}\n}\nclass B extends A {\n  m({b, a}) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideRequired_less() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m(a, b) {}\n}\nclass B extends A {\n  m(a, [b]) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideRequired_same() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m(a) {}\n}\nclass B extends A {\n  m(a) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideReturnType_returnType_interface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource("/test.dart",'abstract class A {\n  num m();\n}\nclass B implements A {\n  int m() { return 1; }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideReturnType_returnType_interface2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource("/test.dart",'abstract class A {\n  num m();\n}\nabstract class B implements A {\n}\nclass C implements B {\n  int m() { return 1; }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideReturnType_returnType_mixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource("/test.dart",'class A {\n  num m() { return 0; }\n}\nclass B extends Object with A {\n  int m() { return 1; }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideReturnType_returnType_parameterizedTypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A<E> {\n  List<E> m();\n}\nclass B extends A<dynamic> {\n  List<dynamic> m() { return new List<dynamic>(); }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideReturnType_returnType_sameType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource("/test.dart",'class A {\n  int m() { return 0; }\n}\nclass B extends A {\n  int m() { return 1; }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideReturnType_returnType_superclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource("/test.dart",'class A {\n  num m() { return 0; }\n}\nclass B extends A {\n  int m() { return 1; }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideReturnType_returnType_superclass2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource("/test.dart",'class A {\n  num m() { return 0; }\n}\nclass B extends A {\n}\nclass C extends B {\n  int m() { return 1; }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideReturnType_returnType_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void m() {}\n}\nclass B extends A {\n  int m() { return 0; }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidReferenceToThis_constructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() {\n    var v = this;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidReferenceToThis_instanceMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m() {\n    var v = this;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidTypeArgumentForKey() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m() {\n    return const <int, int>{};\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidTypeArgumentInConstList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<E> {\n  m() {\n    return <E>[];\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidTypeArgumentInConstMap() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<E> {\n  m() {\n    return <String, E>{};\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invocationOfNonFunction_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var f;\n}\nclass B extends A {\n  g() {\n    f();\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invocationOfNonFunction_functionTypeTypeParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef void Action<T>(T x);\nclass C<T, U extends Action<T>> {\n  T value;\n  U action;\n  C(this.value, [this.action]);\n  void act() {\n    action(value);\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invocationOfNonFunction_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var g;\n}\nf() {\n  A a;\n  a.g();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invocationOfNonFunction_localVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  var g;\n  g();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invocationOfNonFunction_localVariable_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {}\nmain() {\n  var v = f;\n  v();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invocationOfNonFunction_localVariable_dynamic2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {}\nmain() {\n  var v = f;\n  v = 1;\n  v();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invocationOfNonFunction_Object() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {\n  Object v = null;\n  v();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invocationOfNonFunction_proxyOnFunctionClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('@proxy\nclass Functor implements Function {\n  noSuchMethod(inv) {\n    return 42;\n  }\n}\nmain() {\n  Functor f = new Functor();\n  f();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_issue_24191() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\n\nabstract class S extends Stream {}\nf(S s) async {\n  await for (var v in s) {\n    print(v);\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_listElementTypeNotAssignable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('var v1 = <int> [42];\nvar v2 = const <int> [42];');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_loadLibraryDefined() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nfoo() => 22;','import \'lib1.dart\' deferred as other;\nmain() {\n  other.loadLibrary().then((_) => other.foo());\n}'),new core.DartList.literal<any>());
        } )());
    }

    test_local_generator_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  return () async* { yield 0; };\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_local_generator_sync() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  return () sync* { yield 0; };\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mapKeyTypeNotAssignable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("var v = <String, int > {'a' : 1};");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_memberWithClassName_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  set A(v) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_methodDeclaration_scope_signature() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const app = 0;\nclass A {\n  foo(@app int app) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_misMatchedGetterAndSetterTypes_instance_sameTypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {\n  int get x => 0;\n  set x(int v) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_misMatchedGetterAndSetterTypes_instance_unspecifiedGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {\n  get x => 0;\n  set x(String v) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_misMatchedGetterAndSetterTypes_instance_unspecifiedSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {\n  int get x => 0;\n  set x(v) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_misMatchedGetterAndSetterTypes_topLevel_sameTypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int get x => 0;\nset x(int v) {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_misMatchedGetterAndSetterTypes_topLevel_unspecifiedGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('get x => 0;\nset x(String v) {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_misMatchedGetterAndSetterTypes_topLevel_unspecifiedSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int get x => 0;\nset x(v) {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingEnumConstantInSwitch_all() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('enum E { A, B, C }\n\nf(E e) {\n  switch (e) {\n    case E.A: break;\n    case E.B: break;\n    case E.C: break;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingEnumConstantInSwitch_default() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('enum E { A, B, C }\n\nf(E e) {\n  switch (e) {\n    case E.B: break;\n    default: break;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixedReturnTypes_differentScopes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {\n  m(int x) {\n    f(int y) {\n      return;\n    }\n    f(x);\n    return 0;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixedReturnTypes_ignoreImplicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(bool p) {\n  if (p) return 42;\n  // implicit \'return;\' is ignored\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixedReturnTypes_ignoreImplicit2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(bool p) {\n  if (p) {\n    return 42;\n  } else {\n    return 42;\n  }\n  // implicit \'return;\' is ignored\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixedReturnTypes_sameKind() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {\n  m(int x) {\n    if (x < 0) {\n      return 1;\n    }\n    return 0;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinDeclaresConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m() {}\n}\nclass B extends Object with A {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinDeclaresConstructor_factory() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  factory A() => null;\n}\nclass B extends Object with A {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinInheritsFromNotObject_classDeclaration_extends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            options.enableSuperMixins = true;
            this.resetWith({
                options : options});
            let source : any = this.addSource('class A {}\nclass B extends A {}\nclass C extends Object with B {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinInheritsFromNotObject_classDeclaration_mixTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B = Object with A;\nclass C extends Object with B {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinInheritsFromNotObject_classDeclaration_with() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            options.enableSuperMixins = true;
            this.resetWith({
                options : options});
            let source : any = this.addSource('class A {}\nclass B extends Object with A {}\nclass C extends Object with B {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinInheritsFromNotObject_typeAlias_extends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            options.enableSuperMixins = true;
            this.resetWith({
                options : options});
            let source : any = this.addSource('class A {}\nclass B extends A {}\nclass C = Object with B;');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinInheritsFromNotObject_typeAlias_with() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            options.enableSuperMixins = true;
            this.resetWith({
                options : options});
            let source : any = this.addSource('class A {}\nclass B extends Object with A {}\nclass C = Object with B;');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinInheritsFromNotObject_typedef_mixTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B = Object with A;\nclass C = Object with B;');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixinReferencesSuper() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            options.enableSuperMixins = true;
            this.resetWith({
                options : options});
            let source : any = this.addSource('class A {\n  toString() => super.toString();\n}\nclass B extends Object with A {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_multipleSuperInitializers_no() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {\n  B() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_multipleSuperInitializers_single() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {\n  B() : super() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nativeConstConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart-ext:x\';\nclass Foo {\n  const Foo() native \'Foo_Foo\';\n  const factory Foo.foo() native \'Foo_Foo_foo\';\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_nativeFunctionBodyInNonSDKCode_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart-ext:x\';\nint m(a) native \'string\';');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_newWithAbstractClass_factory() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  factory A() { return new B(); }\n}\nclass B implements A {\n  B() {}\n}\nA f() {\n  return new A();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_newWithUndefinedConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A.name() {}\n}\nf() {\n  new A.name();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_newWithUndefinedConstructorDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() {}\n}\nf() {\n  new A();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_abstractsDontOverrideConcretes_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int get g => 0;\n}\nabstract class B extends A {\n  int get g;\n}\nclass C extends B {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_abstractsDontOverrideConcretes_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m(p) {}\n}\nabstract class B extends A {\n  m(p);\n}\nclass C extends B {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_abstractsDontOverrideConcretes_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  set s(v) {}\n}\nabstract class B extends A {\n  set s(v);\n}\nclass C extends B {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_classTypeAlias_interface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class M {}\nabstract class A {}\nabstract class I {\n  m();\n}\nabstract class B = A with M implements I;');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_classTypeAlias_mixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class M {\n  m();\n}\nabstract class A {}\nabstract class B = A with M;');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_classTypeAlias_superclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {}\nabstract class A {\n  m();\n}\nabstract class B = A with M;');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_mixin_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var a;\n}\nabstract class M {\n  get a;\n}\nclass B extends A with M {}\nclass C extends B {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_mixin_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m() {}\n}\nabstract class M {\n  m();\n}\nclass B extends A with M {}\nclass C extends B {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_mixin_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var a;\n}\nabstract class M {\n  set a(dynamic v);\n}\nclass B extends A with M {}\nclass C extends B {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_noSuchMethod_accessor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  int get g;\n}\nclass B extends A {\n  noSuchMethod(v) => \'\';\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_noSuchMethod_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  m(p);\n}\nclass B extends A {\n  noSuchMethod(v) => \'\';\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_noSuchMethod_mixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  noSuchMethod(v) => \'\';\n}\nclass B extends Object with A {\n  m(p);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_noSuchMethod_superclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  noSuchMethod(v) => \'\';\n}\nclass B extends A {\n  m(p);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_overridesMethodInObject() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  String toString([String prefix = \'\']) => \'${prefix}Hello\';\n}\nclass C {}\nclass B extends A with C {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonBoolExpression_functionType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('bool makeAssertion() => true;\nf() {\n  assert(makeAssertion);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonBoolExpression_interfaceType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  assert(true);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonBoolNegationExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(bool pb, pd) {\n  !true;\n  !false;\n  !pb;\n  !pd;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonBoolNegationExpression_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f1(bool dynamic) {\n  !dynamic;\n}\nf2() {\n  bool dynamic = true;\n  !dynamic;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonBoolOperand_and_bool() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('bool f(bool left, bool right) {\n  return left && right;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonBoolOperand_and_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('bool f(left, dynamic right) {\n  return left && right;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonBoolOperand_or_bool() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('bool f(bool left, bool right) {\n  return left || right;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonBoolOperand_or_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('bool f(dynamic left, right) {\n  return left || right;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstantDefaultValue_constField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f([a = double.INFINITY]) {\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstantDefaultValue_function_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("f({x : 2 + 3}) {}");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstantDefaultValue_function_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("f([x = 2 + 3]) {}");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstantDefaultValue_inConstructor_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A({x : 2 + 3}) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstantDefaultValue_inConstructor_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A([x = 2 + 3]) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstantDefaultValue_method_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m({x : 2 + 3}) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstantDefaultValue_method_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m([x = 2 + 3]) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstantDefaultValue_typedConstList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m([p111 = const <String>[]]) {}\n}\nclass B extends A {\n  m([p222 = const <String>[]]) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstantValueInInitializer_namedArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final a;\n  const A({this.a});\n}\nclass B extends A {\n  const B({b}) : super(a: b);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstCaseExpression_constField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(double p) {\n  switch (p) {\n    case double.INFINITY:\n      return true;\n    default:\n      return false;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CASE_EXPRESSION_TYPE_IMPLEMENTS_EQUALS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstCaseExpression_typeLiteral() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(Type t) {\n  switch (t) {\n    case bool:\n    case int:\n      return true;\n    default:\n      return false;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstListElement_constField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {\n  const [double.INFINITY];\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstMapAsExpressionStatement_const() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  const {\'a\' : 0, \'b\' : 1};\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstMapAsExpressionStatement_notExpressionStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  var m = {\'a\' : 0, \'b\' : 1};\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstMapAsExpressionStatement_typeArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  <String, int> {\'a\' : 0, \'b\' : 1};\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstMapKey_constField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {\n  const {double.INFINITY: 0};\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.CONST_MAP_KEY_EXPRESSION_TYPE_IMPLEMENTS_EQUALS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstMapValue_constField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {\n  const {0: double.INFINITY};\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstValueInInitializer_binary_bool() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final v;\n  const A.a1(bool p) : v = p && true;\n  const A.a2(bool p) : v = true && p;\n  const A.b1(bool p) : v = p || true;\n  const A.b2(bool p) : v = true || p;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstValueInInitializer_binary_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final v;\n  const A.a1(p) : v = p + 5;\n  const A.a2(p) : v = 5 + p;\n  const A.b1(p) : v = p - 5;\n  const A.b2(p) : v = 5 - p;\n  const A.c1(p) : v = p * 5;\n  const A.c2(p) : v = 5 * p;\n  const A.d1(p) : v = p / 5;\n  const A.d2(p) : v = 5 / p;\n  const A.e1(p) : v = p ~/ 5;\n  const A.e2(p) : v = 5 ~/ p;\n  const A.f1(p) : v = p > 5;\n  const A.f2(p) : v = 5 > p;\n  const A.g1(p) : v = p < 5;\n  const A.g2(p) : v = 5 < p;\n  const A.h1(p) : v = p >= 5;\n  const A.h2(p) : v = 5 >= p;\n  const A.i1(p) : v = p <= 5;\n  const A.i2(p) : v = 5 <= p;\n  const A.j1(p) : v = p % 5;\n  const A.j2(p) : v = 5 % p;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_nonConstValueInInitializer_binary_int() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final v;\n  const A.a1(int p) : v = p ^ 5;\n  const A.a2(int p) : v = 5 ^ p;\n  const A.b1(int p) : v = p & 5;\n  const A.b2(int p) : v = 5 & p;\n  const A.c1(int p) : v = p | 5;\n  const A.c2(int p) : v = 5 | p;\n  const A.d1(int p) : v = p >> 5;\n  const A.d2(int p) : v = 5 >> p;\n  const A.e1(int p) : v = p << 5;\n  const A.e2(int p) : v = 5 << p;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstValueInInitializer_binary_num() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final v;\n  const A.a1(num p) : v = p + 5;\n  const A.a2(num p) : v = 5 + p;\n  const A.b1(num p) : v = p - 5;\n  const A.b2(num p) : v = 5 - p;\n  const A.c1(num p) : v = p * 5;\n  const A.c2(num p) : v = 5 * p;\n  const A.d1(num p) : v = p / 5;\n  const A.d2(num p) : v = 5 / p;\n  const A.e1(num p) : v = p ~/ 5;\n  const A.e2(num p) : v = 5 ~/ p;\n  const A.f1(num p) : v = p > 5;\n  const A.f2(num p) : v = 5 > p;\n  const A.g1(num p) : v = p < 5;\n  const A.g2(num p) : v = 5 < p;\n  const A.h1(num p) : v = p >= 5;\n  const A.h2(num p) : v = 5 >= p;\n  const A.i1(num p) : v = p <= 5;\n  const A.i2(num p) : v = 5 <= p;\n  const A.j1(num p) : v = p % 5;\n  const A.j2(num p) : v = 5 % p;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstValueInInitializer_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final int a;\n  const A() : a = 5;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstValueInInitializer_redirecting() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A.named(p);\n  const A() : this.named(42);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstValueInInitializer_super() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(p);\n}\nclass B extends A {\n  const B() : super(42);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonConstValueInInitializer_unary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final v;\n  const A.a(bool p) : v = !p;\n  const A.b(int p) : v = ~p;\n  const A.c(num p) : v = -p;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonGenerativeConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A.named() {}\n  factory A() => null;\n}\nclass B extends A {\n  B() : super.named();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonTypeInCatchClause_isClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  try {\n  } on String catch (e) {\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonTypeInCatchClause_isFunctionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef F();\nf() {\n  try {\n  } on F catch (e) {\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonTypeInCatchClause_isTypeParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<T> {\n  f() {\n    try {\n    } on T catch (e) {\n    }\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonTypeInCatchClause_noType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  try {\n  } catch (e) {\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonVoidReturnForOperator_no() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  operator []=(a, b) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonVoidReturnForOperator_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void operator []=(a, b) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonVoidReturnForSetter_function_no() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("set x(v) {}");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonVoidReturnForSetter_function_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("void set x(v) {}");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonVoidReturnForSetter_method_no() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  set x(v) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonVoidReturnForSetter_method_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void set x(v) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_null_callMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {\n  null.m();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_null_callOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {\n  null + 5;\n  null == 5;\n  null[0];\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_optionalParameterInOperator_required() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  operator +(p) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_parameterDefaultDoesNotReferToParameterName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('void f([void f([x]) = f]) {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_parameterScope_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  g(g) {\n    h(g);\n  }\n}\nh(x) {}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_parameterScope_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {\n  g(g) {\n    h(g);\n  }\n}\nh(x) {}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_parameterScope_toplevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('g(g) {\n  h(g);\n}\nh(x) {}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_prefixCollidesWithTopLevelMembers() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.dart",'library lib;\nclass A {}');
            let source : any = this.addSource('import \'lib.dart\' as p;\ntypedef P();\np2() {}\nvar p3;\nclass p4 {}\np.A a;');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_propagateTypeArgs_intoBounds() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A<E> {}\nabstract class B<F> implements A<F>{}\nabstract class C<G, H extends A<G>> {}\nclass D<I> extends C<I, B<I>> {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_propagateTypeArgs_intoSupertype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<T> {\n  A(T p);\n  A.named(T p);\n}\nclass B<S> extends A<S> {\n  B(S p) : super(p);\n  B.named(S p) : super.named(p);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_proxy_annotation_prefixed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\n@proxy\nclass A {}\nf(A a) {\n  a.m();\n  var x = a.g;\n  a.s = 1;\n  var y = a + a;\n  a++;\n  ++a;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_proxy_annotation_prefixed2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\n@proxy\nclass A {}\nclass B {\n  f(A a) {\n    a.m();\n    var x = a.g;\n    a.s = 1;\n    var y = a + a;\n    a++;\n    ++a;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_proxy_annotation_prefixed3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nclass B {\n  f(A a) {\n    a.m();\n    var x = a.g;\n    a.s = 1;\n    var y = a + a;\n    a++;\n    ++a;\n  }\n}\n@proxy\nclass A {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_proxy_annotation_proxyHasPrefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'dart:core\' as core;\n@core.proxy class PrefixProxy {}\nmain() {\n  new PrefixProxy().foo;\n  new PrefixProxy().foo();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_proxy_annotation_simple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\n@proxy\nclass B {\n  m() {\n    n();\n    var x = g;\n    s = 1;\n    var y = this + this;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_proxy_annotation_superclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nclass B extends A {\n  m() {\n    n();\n    var x = g;\n    s = 1;\n    var y = this + this;\n  }\n}\n@proxy\nclass A {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_proxy_annotation_superclass_mixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nclass B extends Object with A {\n  m() {\n    n();\n    var x = g;\n    s = 1;\n    var y = this + this;\n  }\n}\n@proxy\nclass A {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_proxy_annotation_superinterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nclass B implements A {\n  m() {\n    n();\n    var x = g;\n    s = 1;\n    var y = this + this;\n  }\n}\n@proxy\nclass A {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_proxy_annotation_superinterface_infiniteLoop() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('library L;\nclass C implements A {\n  m() {\n    n();\n    var x = g;\n    s = 1;\n    var y = this + this;\n  }\n}\nclass B implements A{}\nclass A implements B{}');
        } )());
    }

    test_recursiveConstructorRedirect() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A.a() : this.b();\n  A.b() : this.c();\n  A.c() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_recursiveFactoryRedirect() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  factory A() = B;\n}\nclass B implements A {\n  factory B() = C;\n}\nclass C implements B {\n  factory C() => null;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_redirectToInvalidFunctionType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A implements B {\n  A(int p) {}\n}\nclass B {\n  factory B(int p) = A;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_redirectToInvalidReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() {}\n}\nclass B extends A {\n  factory B() = A;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_redirectToNonConstConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A.a();\n  const factory A.b() = A.a;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_referencedBeforeDeclaration_cascade() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('testRequestHandler() {}\n\nmain() {\n  var s1 = null;\n  testRequestHandler()\n    ..stream(s1);\n  var stream = 123;\n  print(stream);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_referenceToDeclaredVariableInInitializer_constructorName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A.x() {}\n}\nf() {\n  var x = new A.x();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_referenceToDeclaredVariableInInitializer_methodName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  x() {}\n}\nf(A a) {\n  var x = a.x();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_referenceToDeclaredVariableInInitializer_propertyName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var x;\n}\nf(A a) {\n  var x = a.x;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_rethrowOutsideCatch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void m() {\n    try {} catch (e) {rethrow;}\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_return_in_generator_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nStream<int> f() async* {\n  return;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_return_in_generator_sync() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('Iterable<int> f() sync* {\n  return;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnInGenerativeConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() { return; }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnInGenerator_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() async {\n  return 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnInGenerator_sync() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  return 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnOfInvalidType_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nclass A {\n  Future<int> m() async {\n    return 0;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnOfInvalidType_async_future_int_mismatches_future_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nFuture<Null> f() async {\n  return 5;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnOfInvalidType_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class TypeError {}\nclass A {\n  static void testLogicalOp() {\n    testOr(a, b, onTypeError) {\n      try {\n        return a || b;\n      } on TypeError catch (t) {\n        return onTypeError;\n      }\n    }\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnOfInvalidType_dynamicAsTypeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class I<T> {\n  factory I() => new A<T>();\n}\nclass A<T> implements I {\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnOfInvalidType_subtype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {}\nA f(B b) { return b; }');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnOfInvalidType_supertype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {}\nB f(A a) { return a; }');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnOfInvalidType_typeParameter_18468() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class Foo<T> {\n  Type get t => T;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnOfInvalidType_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('void f1() {}\nvoid f2() { return; }\nvoid f3() { return null; }\nvoid f4() { return g1(); }\nvoid f5() { return g2(); }\nvoid f6() => throw 42;\ng1() {}\nvoid g2() {}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnWithoutValue_noReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("f() { return; }");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnWithoutValue_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("void f() { return; }");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_reversedTypeArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class Codec<S1, T1> {\n  Codec<T1, S1> get inverted => new _InvertedCodec<T1, S1>(this);\n}\nclass _InvertedCodec<T2, S2> extends Codec<T2, S2> {\n  _InvertedCodec(Codec<S2, T2> codec);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_sharedDeferredPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nf1() {}','library lib2;\nf2() {}','library lib3;\nf3() {}','library root;\nimport \'lib1.dart\' deferred as lib1;\nimport \'lib2.dart\' as lib;\nimport \'lib3.dart\' as lib;\nmain() { lib1.f1(); lib.f2(); lib.f3(); }'),new core.DartList.literal<any>());
        } )());
    }

    test_staticAccessToInstanceMember_annotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A.name();\n}\n@A.name()\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_staticAccessToInstanceMember_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static m() {}\n}\nmain() {\n  A.m;\n  A.m();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_staticAccessToInstanceMember_propertyAccess_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static var f;\n}\nmain() {\n  A.f;\n  A.f = 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_staticAccessToInstanceMember_propertyAccess_propertyAccessor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static get f => 42;\n  static set f(x) {}\n}\nmain() {\n  A.f;\n  A.f = 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_superInInvalidContext() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m() {}\n}\nclass B extends A {\n  B() {\n    var v = super.m();\n  }\n  n() {\n    var v = super.m();\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeAliasCannotReferenceItself_returnClass_withTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef B A();\nclass B {\n  A a;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeArgumentNotMatchingBounds_const() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {}\nclass G<E extends A> {\n  const G();\n}\nf() { return const G<B>(); }');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeArgumentNotMatchingBounds_new() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {}\nclass G<E extends A> {}\nf() { return new G<B>(); }');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeArgumentNotMatchingBounds_ofFunctionTypeAlias_hasBound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {}\ntypedef F<T extends A>();\nF<A> fa;\nF<B> fb;\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeArgumentNotMatchingBounds_ofFunctionTypeAlias_hasBound2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class MyClass<T> {}\ntypedef MyFunction<T, P extends MyClass<T>>();\nclass A<T, P extends MyClass<T>> {\n  MyFunction<T, P> f;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeArgumentNotMatchingBounds_ofFunctionTypeAlias_noBound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef F<T>();\nF<int> f1;\nF<String> f2;\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeArgumentNotMatchingBounds_typeArgumentList_0() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("abstract class A<T extends A>{}");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeArgumentNotMatchingBounds_typeArgumentList_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("abstract class A<T extends A<A>>{}");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeArgumentNotMatchingBounds_typeArgumentList_20() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("abstract class A<T extends A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<A>>>>>>>>>>>>>>>>>>>>>{}");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typePromotion_booleanAnd_useInRight() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main(Object p) {\n  p is String && p.length != 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typePromotion_booleanAnd_useInRight_accessedInClosureRight_noAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('callMe(f()) { f(); }\nmain(Object p) {\n  (p is String) && callMe(() { p.length; });\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typePromotion_conditional_issue14655() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {}\nclass C extends B {\n  mc() {}\n}\nprint(_) {}\nmain(A p) {\n  (p is C) && (print(() => p) && (p is B)) ? p.mc() : p = null;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typePromotion_conditional_useInThen() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main(Object p) {\n  p is String ? p.length : 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typePromotion_conditional_useInThen_accessedInClosure_noAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('callMe(f()) { f(); }\nmain(Object p) {\n  p is String ? callMe(() { p.length; }) : 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typePromotion_functionType_arg_ignoreIfNotMoreSpecific() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef FuncB(B b);\ntypedef FuncA(A a);\nclass A {}\nclass B {}\nmain(FuncA f) {\n  if (f is FuncB) {\n    f(new A());\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typePromotion_functionType_return_ignoreIfNotMoreSpecific() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\ntypedef FuncAtoDyn(A a);\ntypedef FuncDynToDyn(x);\nmain(FuncAtoDyn f) {\n  if (f is FuncDynToDyn) {\n    A a = f(new A());\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typePromotion_functionType_return_voidToDynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef FuncDynToDyn(x);\ntypedef void FuncDynToVoid(x);\nclass A {}\nmain(FuncDynToVoid f) {\n  if (f is FuncDynToDyn) {\n    A a = f(null);\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typePromotion_if_accessedInClosure_noAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('callMe(f()) { f(); }\nmain(Object p) {\n  if (p is String) {\n    callMe(() {\n      p.length;\n    });\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typePromotion_if_extends_moreSpecific() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class V {}\nclass VP extends V {}\nclass A<T> {}\nclass B<S> extends A<S> {\n  var b;\n}\n\nmain(A<V> p) {\n  if (p is B<VP>) {\n    p.b;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typePromotion_if_hasAssignment_outsideAfter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main(Object p) {\n  if (p is String) {\n    p.length;\n  }\n  p = 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typePromotion_if_hasAssignment_outsideBefore() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main(Object p, Object p2) {\n  p = p2;\n  if (p is String) {\n    p.length;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typePromotion_if_implements_moreSpecific() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class V {}\nclass VP extends V {}\nclass A<T> {}\nclass B<S> implements A<S> {\n  var b;\n}\n\nmain(A<V> p) {\n  if (p is B<VP>) {\n    p.b;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typePromotion_if_inClosure_assignedAfter_inSameFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {\n  f(Object p) {\n    if (p is String) {\n      p.length;\n    }\n    p = 0;\n  };\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typePromotion_if_is_and_left() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('bool tt() => true;\nmain(Object p) {\n  if (p is String && tt()) {\n    p.length;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typePromotion_if_is_and_right() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('bool tt() => true;\nmain(Object p) {\n  if (tt() && p is String) {\n    p.length;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typePromotion_if_is_and_subThenSuper() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var a;\n}\nclass B extends A {\n  var b;\n}\nmain(Object p) {\n  if (p is B && p is A) {\n    p.a;\n    p.b;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typePromotion_if_is_parenthesized() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main(Object p) {\n  if ((p is String)) {\n    p.length;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typePromotion_if_is_single() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main(Object p) {\n  if (p is String) {\n    p.length;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typePromotion_parentheses() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main(Object p) {\n  (p is String) ? p.length : 0;\n  (p) is String ? p.length : 0;\n  ((p)) is String ? p.length : 0;\n  ((p) is String) ? p.length : 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeType_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {}\nf(Type t) {}\nmain() {\n  f(C);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeType_class_prefixed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.dart",'library lib;\nclass C {}');
            let source : any = this.addSource('import \'lib.dart\' as p;\nf(Type t) {}\nmain() {\n  f(p.C);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeType_functionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef F();\nf(Type t) {}\nmain() {\n  f(F);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeType_functionTypeAlias_prefixed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.dart",'library lib;\ntypedef F();');
            let source : any = this.addSource('import \'lib.dart\' as p;\nf(Type t) {}\nmain() {\n  f(p.F);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedConstructorInInitializer_explicit_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A.named() {}\n}\nclass B extends A {\n  B() : super.named();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedConstructorInInitializer_explicit_unnamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() {}\n}\nclass B extends A {\n  B() : super();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedConstructorInInitializer_hasOptionalParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A([p]) {}\n}\nclass B extends A {\n  B();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedConstructorInInitializer_implicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() {}\n}\nclass B extends A {\n  B();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedConstructorInInitializer_implicit_typeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {}\nclass A = Object with M;\nclass B extends A {\n  B();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedConstructorInInitializer_redirecting() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class Foo {\n  Foo.ctor();\n}\nclass Bar extends Foo {\n  Bar() : this.ctor();\n  Bar.ctor() : super.ctor();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedGetter_static_conditionalAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static var x;\n}\nvar a = A?.x;\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedGetter_typeSubstitution() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<E> {\n  E element;\n}\nclass B extends A<List> {\n  m() {\n    element.last;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedIdentifier_synthetic_whenExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('print(x) {}\nmain() {\n  print(is String);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        } )());
    }

    test_undefinedIdentifier_synthetic_whenMethodName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('print(x) {}\nmain(int p) {\n  p.();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.MISSING_IDENTIFIER));
        } )());
    }

    test_undefinedMethod_functionExpression_callMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {\n  (() => null).call();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedMethod_functionExpression_directCall() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {\n  (() => null)();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedMethod_static_conditionalAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static void m() {}\n}\nf() { A?.m(); }\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedOperator_index() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  operator [](a) {}\n  operator []=(a, b) {}\n}\nf(A a) {\n  a[0];\n  a[0] = 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedOperator_tilde() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const A = 3;\nconst B = ~((1 << A) - 1);');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedSetter_importWithPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.dart",'library lib;\nset y(int value) {}');
            let source : any = this.addSource('import \'lib.dart\' as x;\nmain() {\n  x.y = 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedSetter_static_conditionalAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static var x;\n}\nf() { A?.x = 1; }\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedSuperMethod_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var m;\n}\nclass B extends A {\n  f() {\n    super.m();\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedSuperMethod_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m() {}\n}\nclass B extends A {\n  f() {\n    super.m();\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unqualifiedReferenceToNonLocalStaticMember_fromComment_new() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() {}\n  A.named() {}\n}\n/// [new A] or [new A.named]\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedShownName_unresolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:math\' show max, FooBar;\nmain() {\n  print(max(1, 2));\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNDEFINED_SHOWN_NAME));
        } )());
    }

    test_uriDoesNotExist_dll() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.dll","");
            let source : any = this.addSource("import 'dart-ext:lib';");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_uriDoesNotExist_dylib() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.dylib","");
            let source : any = this.addSource("import 'dart-ext:lib';");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_uriDoesNotExist_so() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.so","");
            let source : any = this.addSource("import 'dart-ext:lib';");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
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

    test_wrongNumberOfParametersForOperator_index() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  operator []=(a, b) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_wrongNumberOfParametersForOperator_minus() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._check_wrongNumberOfParametersForOperator("-","");
            await this._check_wrongNumberOfParametersForOperator("-","a");
        } )());
    }

    test_wrongNumberOfParametersForSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  set x(a) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_yield_async_to_dynamic_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('dynamic f() async* {\n  yield 3;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_yield_async_to_generic_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nStream f() async* {\n  yield 3;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_yield_async_to_parameterized_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nStream<int> f() async* {\n  yield 3;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_yield_async_to_untyped() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() async* {\n  yield 3;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_yield_each_async_dynamic_to_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() async* {\n  yield* g();\n}\ng() => null;\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_yield_each_async_dynamic_to_stream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nStream f() async* {\n  yield* g();\n}\ng() => null;\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_yield_each_async_dynamic_to_typed_stream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nStream<int> f() async* {\n  yield* g();\n}\ng() => null;\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_yield_each_async_stream_to_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nf() async* {\n  yield* g();\n}\nStream g() => null;\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_yield_each_async_typed_stream_to_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nf() async* {\n  yield* g();\n}\nStream<int> g() => null;\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_yield_each_async_typed_stream_to_typed_stream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nStream<int> f() async* {\n  yield* g();\n}\nStream<int> g() => null;\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_yield_each_sync_dynamic_to_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() sync* {\n  yield* g();\n}\ng() => null;\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_yield_each_sync_dynamic_to_iterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('Iterable f() sync* {\n  yield* g();\n}\ng() => null;\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_yield_each_sync_dynamic_to_typed_iterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('Iterable<int> f() sync* {\n  yield* g();\n}\ng() => null;\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_yield_each_sync_iterable_to_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() sync* {\n  yield* g();\n}\nIterable g() => null;\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_yield_each_sync_typed_iterable_to_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() sync* {\n  yield* g();\n}\nIterable<int> g() => null;\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_yield_each_sync_typed_iterable_to_typed_iterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('Iterable<int> f() sync* {\n  yield* g();\n}\nIterable<int> g() => null;\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_yield_sync_to_dynamic_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('dynamic f() sync* {\n  yield 3;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_yield_sync_to_generic_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('Iterable f() sync* {\n  yield 3;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_yield_sync_to_parameterized_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('Iterable<int> f() sync* {\n  yield 3;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_yield_sync_to_untyped() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() sync* {\n  yield 3;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_yieldInNonGenerator_asyncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() async* {\n  yield 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_yieldInNonGenerator_syncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() sync* {\n  yield 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    _check_wrongNumberOfParametersForOperator(name : string,parameters : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource(`class A {\n  operator ${name}(${parameters}) {}\n}`);
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
            this.reset();
        } )());
    }

    _check_wrongNumberOfParametersForOperator1(name : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._check_wrongNumberOfParametersForOperator(name,"a");
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NonErrorResolverTest() {
    }
}

export class properties {
}
