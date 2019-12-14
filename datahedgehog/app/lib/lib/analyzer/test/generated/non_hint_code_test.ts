/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/non_hint_code_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./resolver_test_case";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(NonHintCodeTest);
    });
};
export namespace NonHintCodeTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'NonHintCodeTest';
    export type Interface = Omit<NonHintCodeTest, Constructors>;
}
@DartClass
export class NonHintCodeTest extends lib3.ResolverTestCase {
    test_async_future_object_without_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nFuture<Object> f() async {}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_afterTryCatch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {\n  try {\n    return f();\n  } catch (e) {\n    print(e);\n  }\n  print(\'not dead\');\n}\nf() {\n  throw \'foo\';\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_conditionalElse_debugConst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const bool DEBUG = true;\nf() {\n  DEBUG ? 1 : 2;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_conditionalIf_debugConst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const bool DEBUG = false;\nf() {\n  DEBUG ? 1 : 2;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_else() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const bool DEBUG = true;\nf() {\n  if(DEBUG) {} else {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_if_debugConst_prefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static const bool DEBUG = false;\n}\nf() {\n  if(A.DEBUG) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_if_debugConst_prefixedIdentifier2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib2.dart\';\nf() {\n  if(A.DEBUG) {}\n}');
            this.addNamedSource("/lib2.dart",'library lib2;\nclass A {\n  static const bool DEBUG = false;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_if_debugConst_propertyAccessor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib2.dart\' as LIB;\nf() {\n  if(LIB.A.DEBUG) {}\n}');
            this.addNamedSource("/lib2.dart",'library lib2;\nclass A {\n  static const bool DEBUG = false;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_if_debugConst_simpleIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const bool DEBUG = false;\nf() {\n  if(DEBUG) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_while_debugConst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const bool DEBUG = false;\nf() {\n  while(DEBUG) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadCatch_onCatchSubtype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {}\nf() {\n  try {} on B catch (e) {} on A catch (e) {} catch (e) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadFinalBreakInCase() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  switch (true) {\n  case true:\n    try {\n      int a = 1;\n    } finally {\n      return;\n    }\n    break;\n  default:\n    break;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadOperandLHS_and_debugConst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const bool DEBUG = false;\nf() {\n  bool b = DEBUG && false;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadOperandLHS_or_debugConst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const bool DEBUG = true;\nf() {\n  bool b = DEBUG || true;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterIfWithoutElse() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  if (1 < 0) {\n    return;\n  }\n  int a = 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedMemberUse_inDeprecatedClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('@deprecated\nf() {}\n\n@deprecated\nclass C {\n  m() {\n    f();\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedMemberUse_inDeprecatedFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('@deprecated\nf() {}\n\n@deprecated\ng() {\n  f();\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedMemberUse_inDeprecatedLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('@deprecated\nlibrary lib;\n\n@deprecated\nf() {}\n\nclass C {\n  m() {\n    f();\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedMemberUse_inDeprecatedMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('@deprecated\nf() {}\n\nclass C {\n  @deprecated\n  m() {\n    f();\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedMemberUse_inDeprecatedMethod_inDeprecatedClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('@deprecated\nf() {}\n\n@deprecated\nclass C {\n  @deprecated\n  m() {\n    f();\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_divisionOptimization() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(int x, int y) {\n  var v = x / y.toInt();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_divisionOptimization_supressIfDivisionNotDefinedInCore() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(x, y) {\n  var v = (x / y).toInt();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_divisionOptimization_supressIfDivisionOverridden() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  num operator /(x) { return x; }\n}\nf(A x, A y) {\n  var v = (x / y).toInt();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateImport_as() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib1.dart\';\nimport \'lib1.dart\' as one;\nA a;\none.A a2;');
            this.addNamedSource("/lib1.dart",'library lib1;\nclass A {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateImport_hide() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib1.dart\';\nimport \'lib1.dart\' hide A;\nA a;\nB b;');
            this.addNamedSource("/lib1.dart",'library lib1;\nclass A {}\nclass B {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateImport_show() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib1.dart\';\nimport \'lib1.dart\' show A;\nA a;\nB b;');
            this.addNamedSource("/lib1.dart",'library lib1;\nclass A {}\nclass B {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_importDeferredLibraryWithLoadFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nf() {}','library root;\nimport \'lib1.dart\' deferred as lib1;\nmain() { lib1.f(); }'),new core.DartList.literal<any>());
        } )());
    }

    test_issue20904BuggyTypePromotionAtIfJoin_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(var message, var dynamic_) {\n  if (message is Function) {\n    message = dynamic_;\n  }\n  int s = message;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_issue20904BuggyTypePromotionAtIfJoin_3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(var message) {\n  var dynamic_;\n  if (message is Function) {\n    message = dynamic_;\n  } else {\n    return;\n  }\n  int s = message;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_issue20904BuggyTypePromotionAtIfJoin_4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(var message) {\n  if (message is Function) {\n    message = \'\';\n  } else {\n    return;\n  }\n  String s = message;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingReturn_emptyFunctionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  int m();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingReturn_expressionFunctionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("int f() => 0;");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingReturn_noReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("f() {}");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingReturn_voidReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("void f() {}");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_for_noCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {\n  for (var v = x; ; v++) {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_if_notTopLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {\n  if (x?.y == null) {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideEqualsButNotHashCode() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  bool operator ==(x) { return x; }\n  get hashCode => 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingField_inInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int get a => 0;\n  void set b(_) {}\n  int c;\n}\nclass B implements A {\n  @override\n  final int a = 1;\n  @override\n  int b;\n  @override\n  int c;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingField_inSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int get a => 0;\n  void set b(_) {}\n  int c;\n}\nclass B extends A {\n  @override\n  final int a = 1;\n  @override\n  int b;\n  @override\n  int c;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingGetter_inInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int get m => 0;\n}\nclass B implements A {\n  @override\n  int get m => 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingGetter_inSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int get m => 0;\n}\nclass B extends A {\n  @override\n  int get m => 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingMethod_inInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int m() => 0;\n}\nclass B implements A {\n  @override\n  int m() => 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingMethod_inSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int m() => 0;\n}\nclass B extends A {\n  @override\n  int m() => 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingMethod_inSuperclass_abstract() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  int m();\n}\nclass B extends A {\n  @override\n  int m() => 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingSetter_inInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  set m(int x) {}\n}\nclass B implements A {\n  @override\n  set m(int x) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingSetter_inSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  set m(int x) {}\n}\nclass B extends A {\n  @override\n  set m(int x) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_propagatedFieldType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A { }\nclass X<T> {\n  final x = new List<T>();\n}\nclass Z {\n  final X<A> y = new X<A>();\n  foo() {\n    y.x.add(new A());\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_proxy_annotation_prefixed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\n@proxy\nclass A {}\nf(var a) {\n  a = new A();\n  a.m();\n  var x = a.g;\n  a.s = 1;\n  var y = a + a;\n  a++;\n  ++a;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_proxy_annotation_prefixed2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\n@proxy\nclass A {}\nclass B {\n  f(var a) {\n    a = new A();\n    a.m();\n    var x = a.g;\n    a.s = 1;\n    var y = a + a;\n    a++;\n    ++a;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_proxy_annotation_prefixed3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nclass B {\n  f(var a) {\n    a = new A();\n    a.m();\n    var x = a.g;\n    a.s = 1;\n    var y = a + a;\n    a++;\n    ++a;\n  }\n}\n@proxy\nclass A {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedGetter_inSubtype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {\n  get b => 0;\n}\nf(var a) {\n  if(a is A) {\n    return a.b;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedMethod_assignmentExpression_inSubtype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {\n  operator +(B b) {return new B();}\n}\nf(var a, var a2) {\n  a = new A();\n  a2 = new A();\n  a += a2;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedMethod_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class D<T extends dynamic> {\n  fieldAccess(T t) => t.abc;\n  methodAccess(T t) => t.xyz(1, 2, \'three\');\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedMethod_inSubtype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {\n  b() {}\n}\nf() {\n  var a = new A();\n  a.b();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedMethod_unionType_all() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int m(int x) => 0;\n}\nclass B {\n  String m() => \'0\';\n}\nf(A a, B b) {\n  var ab;\n  if (0 < 1) {\n    ab = a;\n  } else {\n    ab = b;\n  }\n  ab.m();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedMethod_unionType_some() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int m(int x) => 0;\n}\nclass B {}\nf(A a, B b) {\n  var ab;\n  if (0 < 1) {\n    ab = a;\n  } else {\n    ab = b;\n  }\n  ab.m(0);\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedOperator_binaryExpression_inSubtype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {\n  operator +(B b) {}\n}\nf(var a) {\n  if(a is A) {\n    a + 1;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedOperator_indexBoth_inSubtype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {\n  operator [](int index) {}\n}\nf(var a) {\n  if(a is A) {\n    a[0]++;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedOperator_indexGetter_inSubtype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {\n  operator [](int index) {}\n}\nf(var a) {\n  if(a is A) {\n    a[0];\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedOperator_indexSetter_inSubtype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {\n  operator []=(i, v) {}\n}\nf(var a) {\n  if(a is A) {\n    a[0] = 1;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedOperator_postfixExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {\n  operator +(B b) {return new B();}\n}\nf(var a) {\n  if(a is A) {\n    a++;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedOperator_prefixExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {\n  operator +(B b) {return new B();}\n}\nf(var a) {\n  if(a is A) {\n    ++a;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_undefinedSetter_inSubtype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass B extends A {\n  set b(x) {}\n}\nf(var a) {\n  if(a is A) {\n    a.b = 0;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_unnecessaryCast_13855_parameter_A() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A{\n  a() {}\n}\nclass B<E> {\n  E e;\n  m() {\n    (e as A).a();\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryCast_conditionalExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class I {}\nclass A implements I {}\nclass B implements I {}\nI m(A a, B b) {\n  return a == null ? b as I : a as I;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryCast_dynamic_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(v) {\n  var b = v as Object;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryCast_generics() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nFuture<int> f() => new Future.value(0);\nvoid g(bool c) {\n  (c ? f(): new Future.value(0) as Future<int>).then((int value) {});\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryCast_type_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(v) {\n  var b = Object as dynamic;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryNoSuchMethod_blockBody_notReturnStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  noSuchMethod(x) => super.noSuchMethod(x);\n}\nclass B extends A {\n  mmm();\n  noSuchMethod(y) {\n    print(y);\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryNoSuchMethod_blockBody_notSingleStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  noSuchMethod(x) => super.noSuchMethod(x);\n}\nclass B extends A {\n  mmm();\n  noSuchMethod(y) {\n    print(y);\n    return super.noSuchMethod(y);\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryNoSuchMethod_expressionBody_notNoSuchMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  noSuchMethod(x) => super.noSuchMethod(x);\n}\nclass B extends A {\n  mmm();\n  noSuchMethod(y) => super.hashCode;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryNoSuchMethod_expressionBody_notSuper() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  noSuchMethod(x) => super.noSuchMethod(x);\n}\nclass B extends A {\n  mmm();\n  noSuchMethod(y) => 42;\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedImport_annotationOnDirective() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\n@A()\nimport \'lib1.dart\';');
            let source2 : any = this.addNamedSource("/lib1.dart",'library lib1;\nclass A {\n  const A() {}\n}');
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_unusedImport_as_equalPrefixes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib1.dart\' as one;\nimport \'lib2.dart\' as one;\none.A a;\none.B b;');
            let source2 : any = this.addNamedSource("/lib1.dart",'library lib1;\nclass A {}');
            let source3 : any = this.addNamedSource("/lib2.dart",'library lib2;\nclass B {}');
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            await this.computeAnalysisResult(source3);
            this.assertErrors(source);
            this.assertNoErrors(source2);
            this.assertNoErrors(source3);
            this.verify(new core.DartList.literal(source,source2,source3));
        } )());
    }

    test_unusedImport_core_library() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'dart:core\';');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedImport_export() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib1.dart\';\nTwo two;');
            this.addNamedSource("/lib1.dart",'library lib1;\nexport \'lib2.dart\';\nclass One {}');
            this.addNamedSource("/lib2.dart",'library lib2;\nclass Two {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedImport_export2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib1.dart\';\nThree three;');
            this.addNamedSource("/lib1.dart",'library lib1;\nexport \'lib2.dart\';\nclass One {}');
            this.addNamedSource("/lib2.dart",'library lib2;\nexport \'lib3.dart\';\nclass Two {}');
            this.addNamedSource("/lib3.dart",'library lib3;\nclass Three {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedImport_export_infiniteLoop() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib1.dart\';\nTwo two;');
            this.addNamedSource("/lib1.dart",'library lib1;\nexport \'lib2.dart\';\nclass One {}');
            this.addNamedSource("/lib2.dart",'library lib2;\nexport \'lib3.dart\';\nclass Two {}');
            this.addNamedSource("/lib3.dart",'library lib3;\nexport \'lib2.dart\';\nclass Three {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedImport_metadata() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\n@A(x)\nimport \'lib1.dart\';\nclass A {\n  final int value;\n  const A(this.value);\n}');
            this.addNamedSource("/lib1.dart",'library lib1;\nconst x = 0;');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedImport_prefix_topLevelFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib1.dart\' hide topLevelFunction;\nimport \'lib1.dart\' as one show topLevelFunction;\nclass A {\n  static void x() {\n    One o;\n    one.topLevelFunction();\n  }\n}');
            this.addNamedSource("/lib1.dart",'library lib1;\nclass One {}\ntopLevelFunction() {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedImport_prefix_topLevelFunction2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib1.dart\' hide topLevelFunction;\nimport \'lib1.dart\' as one show topLevelFunction;\nimport \'lib1.dart\' as two show topLevelFunction;\nclass A {\n  static void x() {\n    One o;\n    one.topLevelFunction();\n    two.topLevelFunction();\n  }\n}');
            this.addNamedSource("/lib1.dart",'library lib1;\nclass One {}\ntopLevelFunction() {}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_useOfVoidResult_implicitReturnValue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {}\nclass A {\n  n() {\n    var a = f();\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_useOfVoidResult_nonVoidReturnValue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int f() => 1;\ng() {\n  var a = f();\n}');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_withSuperMixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.enableSuperMixins = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            let source : any = this.addSource('abstract class A {\n  void test();\n}\nclass B extends A {\n  void test() {\n    super.test;\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NonHintCodeTest() {
    }
}

export namespace PubSuggestionCodeTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'PubSuggestionCodeTest';
    export type Interface = Omit<PubSuggestionCodeTest, Constructors>;
}
@DartClass
export class PubSuggestionCodeTest extends lib3.ResolverTestCase {
    test_import_package() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("import 'package:somepackage/other.dart';");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.URI_DOES_NOT_EXIST));
        } )());
    }

    test_import_packageWithDotDot() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("import 'package:somepackage/../other.dart';");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.URI_DOES_NOT_EXIST,HintCode.PACKAGE_IMPORT_CONTAINS_DOT_DOT));
        } )());
    }

    test_import_packageWithLeadingDotDot() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("import 'package:../other.dart';");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(CompileTimeErrorCode.URI_DOES_NOT_EXIST,HintCode.PACKAGE_IMPORT_CONTAINS_DOT_DOT));
        } )());
    }

    test_import_referenceIntoLibDirectory() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/myproj/pubspec.yaml","");
            this.addNamedSource("/myproj/lib/other.dart","");
            let source : any = this.addNamedSource("/myproj/web/test.dart","import '../lib/other.dart';");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.FILE_IMPORT_OUTSIDE_LIB_REFERENCES_FILE_INSIDE));
        } )());
    }

    test_import_referenceIntoLibDirectory_no_pubspec() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/myproj/lib/other.dart","");
            let source : any = this.addNamedSource("/myproj/web/test.dart","import '../lib/other.dart';");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_import_referenceOutOfLibDirectory() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/myproj/pubspec.yaml","");
            this.addNamedSource("/myproj/web/other.dart","");
            let source : any = this.addNamedSource("/myproj/lib/test.dart","import '../web/other.dart';");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.FILE_IMPORT_INSIDE_LIB_REFERENCES_FILE_OUTSIDE));
        } )());
    }

    test_import_referenceOutOfLibDirectory_no_pubspec() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/myproj/web/other.dart","");
            let source : any = this.addNamedSource("/myproj/lib/test.dart","import '../web/other.dart';");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_import_valid_inside_lib1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/myproj/pubspec.yaml","");
            this.addNamedSource("/myproj/lib/other.dart","");
            let source : any = this.addNamedSource("/myproj/lib/test.dart","import 'other.dart';");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_import_valid_inside_lib2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/myproj/pubspec.yaml","");
            this.addNamedSource("/myproj/lib/bar/other.dart","");
            let source : any = this.addNamedSource("/myproj/lib/foo/test.dart","import '../bar/other.dart';");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_import_valid_outside_lib() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/myproj/pubspec.yaml","");
            this.addNamedSource("/myproj/web/other.dart","");
            let source : any = this.addNamedSource("/myproj/lib2/test.dart","import '../web/other.dart';");
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PubSuggestionCodeTest() {
    }
}

export class properties {
}
