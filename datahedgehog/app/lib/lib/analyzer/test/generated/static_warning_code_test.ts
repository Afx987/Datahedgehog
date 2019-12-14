/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/static_warning_code_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./resolver_test_case";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(StaticWarningCodeTest);
    });
};
export namespace StaticWarningCodeTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'StaticWarningCodeTest';
    export type Interface = Omit<StaticWarningCodeTest, Constructors>;
}
@DartClass
export class StaticWarningCodeTest extends lib3.ResolverTestCase {
    fail_argumentTypeNotAssignable_tearOff_required() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {\n  Object/*=T*/ f/*<T>*/(Object/*=T*/ x) => x;\n}\ng(C c) {\n  var h = c.f/*<int>*/;\n  print(h(\'s\'));\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    fail_undefinedGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_GETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    fail_undefinedIdentifier_commentReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('/** [m] xxx [new B.c] */\nclass A {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_IDENTIFIER,StaticWarningCode.UNDEFINED_IDENTIFIER));
        } )());
    }

    fail_undefinedSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {}\nf(var p) {\n  C.m = 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_ambiguousImport_as() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib1.dart\';\nimport \'lib2.dart\';\nf(p) {p as N;}');
            this.addNamedSource("/lib1.dart",'library lib1;\nclass N {}');
            this.addNamedSource("/lib2.dart",'library lib2;\nclass N {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT));
        } )());
    }

    test_ambiguousImport_extends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib1.dart\';\nimport \'lib2.dart\';\nclass A extends N {}');
            this.addNamedSource("/lib1.dart",'library lib1;\nclass N {}');
            this.addNamedSource("/lib2.dart",'library lib2;\nclass N {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT,CompileTimeErrorCode.EXTENDS_NON_CLASS));
        } )());
    }

    test_ambiguousImport_implements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib1.dart\';\nimport \'lib2.dart\';\nclass A implements N {}');
            this.addNamedSource("/lib1.dart",'library lib1;\nclass N {}');
            this.addNamedSource("/lib2.dart",'library lib2;\nclass N {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT,CompileTimeErrorCode.IMPLEMENTS_NON_CLASS));
        } )());
    }

    test_ambiguousImport_inPart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library lib;\nimport \'lib1.dart\';\nimport \'lib2.dart\';\npart \'part.dart\';');
            this.addNamedSource("/lib1.dart",'library lib1;\nclass N {}');
            this.addNamedSource("/lib2.dart",'library lib2;\nclass N {}');
            let partSource : any = this.addNamedSource("/part.dart",'part of lib;\nclass A extends N {}');
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(partSource);
            this.assertNoErrors(source);
            this.assertErrors(partSource,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT,CompileTimeErrorCode.EXTENDS_NON_CLASS));
        } )());
    }

    test_ambiguousImport_instanceCreation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;\nimport \'lib1.dart\';\nimport \'lib2.dart\';\nf() {new N();}');
            this.addNamedSource("/lib1.dart",'library lib1;\nclass N {}');
            this.addNamedSource("/lib2.dart",'library lib2;\nclass N {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT));
        } )());
    }

    test_ambiguousImport_is() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib1.dart\';\nimport \'lib2.dart\';\nf(p) {p is N;}');
            this.addNamedSource("/lib1.dart",'library lib1;\nclass N {}');
            this.addNamedSource("/lib2.dart",'library lib2;\nclass N {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT));
        } )());
    }

    test_ambiguousImport_qualifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib1.dart\';\nimport \'lib2.dart\';\ng() { N.FOO; }');
            this.addNamedSource("/lib1.dart",'library lib1;\nclass N {}');
            this.addNamedSource("/lib2.dart",'library lib2;\nclass N {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT));
        } )());
    }

    test_ambiguousImport_typeAnnotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib1.dart\';\nimport \'lib2.dart\';\ntypedef N FT(N p);\nN f(N p) {\n  N v;\n  return null;\n}\nclass A {\n  N m() { return null; }\n}\nclass B<T extends N> {}');
            this.addNamedSource("/lib1.dart",'library lib1;\nclass N {}');
            this.addNamedSource("/lib2.dart",'library lib2;\nclass N {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT,StaticWarningCode.AMBIGUOUS_IMPORT,StaticWarningCode.AMBIGUOUS_IMPORT,StaticWarningCode.AMBIGUOUS_IMPORT,StaticWarningCode.AMBIGUOUS_IMPORT,StaticWarningCode.AMBIGUOUS_IMPORT,StaticWarningCode.AMBIGUOUS_IMPORT));
        } )());
    }

    test_ambiguousImport_typeArgument_annotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib1.dart\';\nimport \'lib2.dart\';\nclass A<T> {}\nA<N> f() { return null; }');
            this.addNamedSource("/lib1.dart",'library lib1;\nclass N {}');
            this.addNamedSource("/lib2.dart",'library lib2;\nclass N {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT));
        } )());
    }

    test_ambiguousImport_typeArgument_instanceCreation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib1.dart\';\nimport \'lib2.dart\';\nclass A<T> {}\nf() {new A<N>();}');
            this.addNamedSource("/lib1.dart",'library lib1;\nclass N {}');
            this.addNamedSource("/lib2.dart",'library lib2;\nclass N {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT));
        } )());
    }

    test_ambiguousImport_varRead() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib1.dart\';\nimport \'lib2.dart\';\nf() { g(v); }\ng(p) {}');
            this.addNamedSource("/lib1.dart",'library lib1;\nvar v;');
            this.addNamedSource("/lib2.dart",'library lib2;\nvar v;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT));
        } )());
    }

    test_ambiguousImport_varWrite() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib1.dart\';\nimport \'lib2.dart\';\nf() { v = 0; }');
            this.addNamedSource("/lib1.dart",'library lib1;\nvar v;');
            this.addNamedSource("/lib2.dart",'library lib2;\nvar v;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT));
        } )());
    }

    test_ambiguousImport_withPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library test;\nimport \'lib1.dart\' as p;\nimport \'lib2.dart\' as p;\nmain() {\n  p.f();\n}');
            this.addNamedSource("/lib1.dart",'library lib1;\nf() {}');
            this.addNamedSource("/lib2.dart",'library lib2;\nf() {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT));
        } )());
    }

    test_argumentTypeNotAssignable_ambiguousClassName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource("/lib1.dart",'library lib1;\nimport \'lib2.dart\';\nclass _A {}\nf() {\n  g((_A a) {});\n}');
            this.addNamedSource("/lib2.dart",'library lib2;\nclass _A {}\ng(h(_A a)) {}');
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            let errors : core.DartList<any> = analysisResult.errors;
            expect(errors,hasLength(1));
            let error : any = errors[0];
            expect(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE,error.errorCode);
            let message : string = error.message;
            expect(new core.DartString(message).indexOf("_A") != -1,isTrue);
            expect(new core.DartString(message).indexOf("lib1.dart") != -1,isTrue);
            expect(new core.DartString(message).indexOf("lib2.dart") != -1,isTrue);
        } )());
    }

    test_argumentTypeNotAssignable_annotation_namedConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A.fromInt(int p);\n}\n@A.fromInt(\'0\')\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_annotation_unnamedConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(int p);\n}\n@A(\'0\')\nmain() {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_binary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  operator +(int p) {}\n}\nf(A a) {\n  a + \'0\';\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_cascadeSecond() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('// filler filler filler filler filler filler filler filler filler filler\nclass A {\n  B ma() { return new B(); }\n}\nclass B {\n  mb(String p) {}\n}\n\nmain() {\n  A a = new A();\n  a..  ma().mb(0);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_const() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(String p);\n}\nmain() {\n  const A(42);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE,CheckedModeCompileTimeErrorCode.CONST_CONSTRUCTOR_PARAM_TYPE_MISMATCH));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_const_super() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  const A(String p);\n}\nclass B extends A {\n  const B() : super(42);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_functionExpressionInvocation_required() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {\n  (int x) {} (\'\');\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_index() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  operator [](int index) {}\n}\nf(A a) {\n  a[\'0\'];\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_callParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  call(int p) {}\n}\nf(A a) {\n  a(\'0\');\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_callVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  call(int p) {}\n}\nmain() {\n  A a = new A();\n  a(\'0\');\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_functionParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('a(b(int p)) {\n  b(\'0\');\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_functionParameter_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<K, V> {\n  m(f(K k), V v) {\n    f(v);\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_functionTypes_optional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('void acceptFunNumOptBool(void funNumOptBool([bool b])) {}\nvoid funNumBool(bool b) {}\nmain() {\n  acceptFunNumOptBool(funNumBool);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<T> {\n  m(T t) {}\n}\nf(A<String> a) {\n  a.m(1);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f({String p}) {}\nmain() {\n  f(p: 42);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_optional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f([String p]) {}\nmain() {\n  f(42);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_required() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(String p) {}\nmain() {\n  f(42);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_typedef_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef A<T>(T p);\nf(A<int> a) {\n  a(\'1\');\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_typedef_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef A(int p);\nA getA() => null;\nmain() {\n  A a = getA();\n  a(\'1\');\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_invocation_typedef_parameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef A(int p);\nf(A a) {\n  a(\'1\');\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_new_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<T> {\n  A(T p) {}\n}\nmain() {\n  new A<String>(42);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_new_optional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A([String p]) {}\n}\nmain() {\n  new A(42);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_new_required() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A(String p) {}\n}\nmain() {\n  new A(42);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {}\nmain() {\n  C = null;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_TYPE));
        } )());
    }

    test_assignmentToConst_instanceVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static const v = 0;\n}\nf() {\n  A.v = 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_CONST));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToConst_instanceVariable_plusEq() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static const v = 0;\n}\nf() {\n  A.v += 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_CONST));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToConst_localVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  const x = 0;\n  x = 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_CONST));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToConst_localVariable_plusEq() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  const x = 0;\n  x += 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_CONST));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToEnumType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('enum E { e }\nmain() {\n  E = null;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_TYPE));
        } )());
    }

    test_assignmentToFinal_instanceVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final v = 0;\n}\nf() {\n  A a = new A();\n  a.v = 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinal_instanceVariable_plusEq() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final v = 0;\n}\nf() {\n  A a = new A();\n  a.v += 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinal_localVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  final x = 0;\n  x = 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinal_localVariable_plusEq() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  final x = 0;\n  x += 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinal_parameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(final x) {\n  x = 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinal_postfixMinusMinus() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  final x = 0;\n  x--;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinal_postfixPlusPlus() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  final x = 0;\n  x++;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinal_prefixMinusMinus() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  final x = 0;\n  --x;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinal_prefixPlusPlus() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  final x = 0;\n  ++x;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinal_suffixMinusMinus() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  final x = 0;\n  x--;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinal_suffixPlusPlus() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  final x = 0;\n  x++;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinal_topLevelVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('final x = 0;\nf() { x = 1; }');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinalNoSetter_prefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int get x => 0;\n}\nmain() {\n  A a = new A();\n  a.x = 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL_NO_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFinalNoSetter_propertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int get x => 0;\n}\nclass B {\n  static A a;\n}\nmain() {\n  B.a.x = 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FINAL_NO_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {}\nmain() {\n  f = null;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_FUNCTION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m() {}\n}\nf(A a) {\n  a.m = () {};\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_METHOD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_assignmentToTypedef() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef void F();\nmain() {\n  F = null;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_TYPE));
        } )());
    }

    test_assignmentToTypeParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C<T> {\n  f() {\n    T = null;\n  }\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ASSIGNMENT_TO_TYPE));
        } )());
    }

    test_caseBlockNotTerminated() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(int p) {\n  switch (p) {\n    case 0:\n      f(p);\n    case 1:\n      break;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CASE_BLOCK_NOT_TERMINATED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_castToNonType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('var A = 0;\nf(String s) { var x = s as A; }');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CAST_TO_NON_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_concreteClassWithAbstractMember() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONCRETE_CLASS_WITH_ABSTRACT_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_concreteClassWithAbstractMember_noSuchMethod_interface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class I {\n  noSuchMethod(v) => \'\';\n}\nclass A implements I {\n  m();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONCRETE_CLASS_WITH_ABSTRACT_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingDartImport() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib.dart\';\nimport \'dart:async\';\nFuture f = null;\nStream s;');
            this.addNamedSource("/lib.dart",'library lib;\nclass Future {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_DART_IMPORT));
        } )());
    }

    test_conflictingInstanceGetterAndSuperclassMember_declField_direct_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static set v(x) {}\n}\nclass B extends A {\n  var v;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_INSTANCE_GETTER_AND_SUPERCLASS_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingInstanceGetterAndSuperclassMember_declGetter_direct_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static get v => 0;\n}\nclass B extends A {\n  get v => 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_INSTANCE_GETTER_AND_SUPERCLASS_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingInstanceGetterAndSuperclassMember_declGetter_direct_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static v() {}\n}\nclass B extends A {\n  get v => 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_INSTANCE_GETTER_AND_SUPERCLASS_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingInstanceGetterAndSuperclassMember_declGetter_direct_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static set v(x) {}\n}\nclass B extends A {\n  get v => 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_INSTANCE_GETTER_AND_SUPERCLASS_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingInstanceGetterAndSuperclassMember_declGetter_indirect() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static int v;\n}\nclass B extends A {}\nclass C extends B {\n  get v => 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_INSTANCE_GETTER_AND_SUPERCLASS_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingInstanceGetterAndSuperclassMember_declGetter_mixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {\n  static int v;\n}\nclass B extends Object with M {\n  get v => 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_INSTANCE_GETTER_AND_SUPERCLASS_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingInstanceGetterAndSuperclassMember_direct_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static int v;\n}\nclass B extends A {\n  get v => 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_INSTANCE_GETTER_AND_SUPERCLASS_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingInstanceMethodSetter2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  foo() {}\n  set foo(a) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_INSTANCE_METHOD_SETTER2));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingInstanceMethodSetter_sameClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  set foo(a) {}\n  foo() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_INSTANCE_METHOD_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingInstanceMethodSetter_setterInInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  set foo(a);\n}\nabstract class B implements A {\n  foo() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_INSTANCE_METHOD_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingInstanceMethodSetter_setterInSuper() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  set foo(a) {}\n}\nclass B extends A {\n  foo() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_INSTANCE_METHOD_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingInstanceSetterAndSuperclassMember() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static int v;\n}\nclass B extends A {\n  set v(x) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_INSTANCE_SETTER_AND_SUPERCLASS_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingStaticGetterAndInstanceSetter_mixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  set x(int p) {}\n}\nclass B extends Object with A {\n  static get x => 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_STATIC_GETTER_AND_INSTANCE_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingStaticGetterAndInstanceSetter_superClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  set x(int p) {}\n}\nclass B extends A {\n  static get x => 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_STATIC_GETTER_AND_INSTANCE_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingStaticGetterAndInstanceSetter_thisClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static get x => 0;\n  set x(int p) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_STATIC_GETTER_AND_INSTANCE_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingStaticSetterAndInstanceMember_thisClass_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  get x => 0;\n  static set x(int p) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_STATIC_SETTER_AND_INSTANCE_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_conflictingStaticSetterAndInstanceMember_thisClass_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  x() {}\n  static set x(int p) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONFLICTING_STATIC_SETTER_AND_INSTANCE_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_constWithAbstractClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  const A();\n}\nvoid f() {\n  A a = const A();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.CONST_WITH_ABSTRACT_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_equalKeysInMap() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("var m = {'a' : 0, 'b' : 1, 'a' : 2};");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.EQUAL_KEYS_IN_MAP));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_equalKeysInMap_withEqualTypeParams() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<T> {\n  const A();\n}\nvar m = {const A<int>(): 0, const A<int>(): 1};');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.EQUAL_KEYS_IN_MAP));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_equalKeysInMap_withUnequalTypeParams() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<T> {\n  const A();\n}\nvar m = {const A<int>(): 0, const A<num>(): 1};');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_exportDuplicatedLibraryNamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library test;\nexport \'lib1.dart\';\nexport \'lib2.dart\';');
            this.addNamedSource("/lib1.dart","library lib;");
            this.addNamedSource("/lib2.dart","library lib;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.EXPORT_DUPLICATED_LIBRARY_NAMED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extraPositionalArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {}\nmain() {\n  f(0, 1, \'2\');\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.EXTRA_POSITIONAL_ARGUMENTS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extraPositionalArguments_functionExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {\n  (int x) {} (0, 1);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.EXTRA_POSITIONAL_ARGUMENTS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extraPositionalArgumentsCouldBeNamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f({x, y}) {}\nmain() {\n  f(0, 1, \'2\');\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.EXTRA_POSITIONAL_ARGUMENTS_COULD_BE_NAMED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_extraPositionalArgumentsCouldBeNamed_functionExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {\n  (int x, {int y}) {} (0, 1);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.EXTRA_POSITIONAL_ARGUMENTS_COULD_BE_NAMED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldInitializedInInitializerAndDeclaration_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final int x = 0;\n  A() : x = 1 {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FIELD_INITIALIZED_IN_INITIALIZER_AND_DECLARATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldInitializerNotAssignable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int x;\n  A() : x = \'\';\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FIELD_INITIALIZER_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_fieldInitializingFormalNotAssignable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int x;\n  A(String this.x) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FIELD_INITIALIZING_FORMAL_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalInitializedInDeclarationAndConstructor_initializers() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final x = 0;\n  A() : x = 0 {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FIELD_INITIALIZED_IN_INITIALIZER_AND_DECLARATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalInitializedInDeclarationAndConstructor_initializingFormal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final x = 0;\n  A(this.x) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FINAL_INITIALIZED_IN_DECLARATION_AND_CONSTRUCTOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalNotInitialized_inConstructor_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final int x;\n  A() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FINAL_NOT_INITIALIZED_CONSTRUCTOR_1));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalNotInitialized_inConstructor_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final int a;\n  final int b;\n  A() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FINAL_NOT_INITIALIZED_CONSTRUCTOR_2));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalNotInitialized_inConstructor_3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final int a;\n  final int b;\n  final int c;\n  A() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FINAL_NOT_INITIALIZED_CONSTRUCTOR_3_PLUS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalNotInitialized_instanceField_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  final F;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FINAL_NOT_INITIALIZED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalNotInitialized_instanceField_final_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static final F;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FINAL_NOT_INITIALIZED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalNotInitialized_library_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("final F;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FINAL_NOT_INITIALIZED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_finalNotInitialized_local_final() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  final int x;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FINAL_NOT_INITIALIZED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionWithoutCall_direct() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A implements Function {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FUNCTION_WITHOUT_CALL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionWithoutCall_indirect_extends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A implements Function {\n}\nclass B extends A {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FUNCTION_WITHOUT_CALL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionWithoutCall_indirect_implements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A implements Function {\n}\nclass B implements A {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FUNCTION_WITHOUT_CALL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionWithoutCall_mixin_implements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A implements Function {}\nclass B extends Object with A {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FUNCTION_WITHOUT_CALL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionWithoutCall_direct_typeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {}\nclass A = Object with M implements Function;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FUNCTION_WITHOUT_CALL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionWithoutCall_indirect_extends_typeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A implements Function {}\nclass M {}\nclass B = A with M;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FUNCTION_WITHOUT_CALL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionWithoutCall_indirect_implements_typeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A implements Function {}\nclass M {}\nclass B = Object with M implements A;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FUNCTION_WITHOUT_CALL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_functionWithoutCall_mixin_implements_typeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A implements Function {}\nclass B = Object with A;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.FUNCTION_WITHOUT_CALL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_importDuplicatedLibraryNamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library test;\nimport \'lib1.dart\';\nimport \'lib2.dart\';');
            this.addNamedSource("/lib1.dart","library lib;");
            this.addNamedSource("/lib2.dart","library lib;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.IMPORT_DUPLICATED_LIBRARY_NAMED,HintCode.UNUSED_IMPORT,HintCode.UNUSED_IMPORT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_importOfNonLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('part of lib;\nclass A {}','library lib;\nimport \'lib1.dart\' deferred as p;\nvar a = new p.A();'),new core.DartList.literal<any>(StaticWarningCode.IMPORT_OF_NON_LIBRARY));
        } )());
    }

    test_inconsistentMethodInheritanceGetterAndMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  int x();\n}\nabstract class B {\n  int get x;\n}\nclass C implements A, B {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INCONSISTENT_METHOD_INHERITANCE_GETTER_AND_METHOD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMethodNameCollidesWithSuperclassStatic_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static var n;\n}\nclass B extends A {\n  void n() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMethodNameCollidesWithSuperclassStatic_field2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static var n;\n}\nclass B extends A {\n}\nclass C extends B {\n  void n() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMethodNameCollidesWithSuperclassStatic_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static get n {return 0;}\n}\nclass B extends A {\n  void n() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMethodNameCollidesWithSuperclassStatic_getter2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static get n {return 0;}\n}\nclass B extends A {\n}\nclass C extends B {\n  void n() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMethodNameCollidesWithSuperclassStatic_interface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class Base {\n  static foo() {}\n}\nabstract class Ifc {\n  foo();\n}\nclass C extends Base implements Ifc {\n  foo() {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMethodNameCollidesWithSuperclassStatic_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static n () {}\n}\nclass B extends A {\n  void n() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMethodNameCollidesWithSuperclassStatic_method2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static n () {}\n}\nclass B extends A {\n}\nclass C extends B {\n  void n() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMethodNameCollidesWithSuperclassStatic_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static set n(int x) {}\n}\nclass B extends A {\n  void n() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_instanceMethodNameCollidesWithSuperclassStatic_setter2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  static set n(int x) {}\n}\nclass B extends A {\n}\nclass C extends B {\n  void n() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INSTANCE_METHOD_NAME_COLLIDES_WITH_SUPERCLASS_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidGetterOverrideReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int get g { return 0; }\n}\nclass B extends A {\n  String get g { return \'a\'; }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_GETTER_OVERRIDE_RETURN_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidGetterOverrideReturnType_implicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  String f;\n}\nclass B extends A {\n  int f;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_GETTER_OVERRIDE_RETURN_TYPE,StaticWarningCode.INVALID_SETTER_OVERRIDE_NORMAL_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidGetterOverrideReturnType_twoInterfaces() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class I {\n  int get getter => null;\n}\nabstract class J {\n  num get getter => null;\n}\nabstract class A implements I, J {}\nclass B extends A {\n  String get getter => null;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_GETTER_OVERRIDE_RETURN_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidGetterOverrideReturnType_twoInterfaces_conflicting() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class I<U> {\n  U get g => null;\n}\nabstract class J<V> {\n  V get g => null;\n}\nclass B implements I<int>, J<String> {\n  double get g => null;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_GETTER_OVERRIDE_RETURN_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideNamedParamType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m({int a}) {}\n}\nclass B implements A {\n  m({String a}) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_NAMED_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideNormalParamType_interface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m(int a) {}\n}\nclass B implements A {\n  m(String a) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_NORMAL_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideNormalParamType_superclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m(int a) {}\n}\nclass B extends A {\n  m(String a) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_NORMAL_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideNormalParamType_superclass_interface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class I<U> {\n  m(U u) => null;\n}\nabstract class J<V> {\n  m(V v) => null;\n}\nclass B extends I<int> implements J<String> {\n  m(double d) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_NORMAL_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideNormalParamType_twoInterfaces() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class I {\n  m(int n);\n}\nabstract class J {\n  m(num n);\n}\nabstract class A implements I, J {}\nclass B extends A {\n  m(String n) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_NORMAL_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideNormalParamType_twoInterfaces_conflicting() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class I<U> {\n  m(U u) => null;\n}\nabstract class J<V> {\n  m(V v) => null;\n}\nclass B implements I<int>, J<String> {\n  m(double d) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_NORMAL_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideOptionalParamType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m([int a]) {}\n}\nclass B implements A {\n  m([String a]) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_OPTIONAL_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideOptionalParamType_twoInterfaces() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class I {\n  m([int n]);\n}\nabstract class J {\n  m([num n]);\n}\nabstract class A implements I, J {}\nclass B extends A {\n  m([String n]) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_OPTIONAL_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideReturnType_interface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int m() { return 0; }\n}\nclass B implements A {\n  String m() { return \'a\'; }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_RETURN_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideReturnType_interface_grandparent() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  int m();\n}\nabstract class B implements A {\n}\nclass C implements B {\n  String m() { return \'a\'; }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_RETURN_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideReturnType_mixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int m() { return 0; }\n}\nclass B extends Object with A {\n  String m() { return \'a\'; }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_RETURN_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideReturnType_superclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int m() { return 0; }\n}\nclass B extends A {\n  String m() { return \'a\'; }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_RETURN_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideReturnType_superclass_grandparent() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int m() { return 0; }\n}\nclass B extends A {\n}\nclass C extends B {\n  String m() { return \'a\'; }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_RETURN_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideReturnType_twoInterfaces() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class I {\n  int m();\n}\nabstract class J {\n  num m();\n}\nabstract class A implements I, J {}\nclass B extends A {\n  String m() => \'\';\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_RETURN_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidMethodOverrideReturnType_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int m() { return 0; }\n}\nclass B extends A {\n  void m() {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_METHOD_OVERRIDE_RETURN_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverride_defaultOverridesNonDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  foo([x = 1]) {}\n}\nclass B extends A {\n  foo([x]) {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_OVERRIDE_DIFFERENT_DEFAULT_VALUES_POSITIONAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverride_defaultOverridesNonDefault_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  foo({x: 1}) {}\n}\nclass B extends A {\n  foo({x}) {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_OVERRIDE_DIFFERENT_DEFAULT_VALUES_NAMED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverride_defaultOverridesNonDefaultNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  foo([x = null]) {}\n}\nclass B extends A {\n  foo([x]) {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverride_defaultOverridesNonDefaultNull_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  foo({x: null}) {}\n}\nclass B extends A {\n  foo({x}) {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverride_nonDefaultOverridesDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  foo([x]) {}\n}\nclass B extends A {\n  foo([x = 1]) {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverride_nonDefaultOverridesDefault_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  foo({x}) {}\n}\nclass B extends A {\n  foo({x: 1}) {}\n}\n');
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideDifferentDefaultValues_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m({int p : 0}) {}\n}\nclass B extends A {\n  m({int p : 1}) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_OVERRIDE_DIFFERENT_DEFAULT_VALUES_NAMED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideDifferentDefaultValues_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m([int p = 0]) {}\n}\nclass B extends A {\n  m([int p = 1]) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_OVERRIDE_DIFFERENT_DEFAULT_VALUES_POSITIONAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideNamed_fewerNamedParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m({a, b}) {}\n}\nclass B extends A {\n  m({a}) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_OVERRIDE_NAMED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideNamed_missingNamedParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m({a, b}) {}\n}\nclass B extends A {\n  m({a, c}) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_OVERRIDE_NAMED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverridePositional_optional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m([a, b]) {}\n}\nclass B extends A {\n  m([a]) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_OVERRIDE_POSITIONAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverridePositional_optionalAndRequired() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m(a, b, [c, d]) {}\n}\nclass B extends A {\n  m(a, b, [c]) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_OVERRIDE_POSITIONAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverridePositional_optionalAndRequired2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m(a, b, [c, d]) {}\n}\nclass B extends A {\n  m(a, [c, d]) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_OVERRIDE_POSITIONAL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidOverrideRequired() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m(a) {}\n}\nclass B extends A {\n  m(a, b) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_OVERRIDE_REQUIRED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidSetterOverrideNormalParamType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void set s(int v) {}\n}\nclass B extends A {\n  void set s(String v) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_SETTER_OVERRIDE_NORMAL_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidSetterOverrideNormalParamType_superclass_interface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class I {\n  set setter14(int _) => null;\n}\nabstract class J {\n  set setter14(num _) => null;\n}\nabstract class A extends I implements J {}\nclass B extends A {\n  set setter14(String _) => null;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_SETTER_OVERRIDE_NORMAL_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidSetterOverrideNormalParamType_twoInterfaces() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class I {\n  set setter14(int _) => null;\n}\nabstract class J {\n  set setter14(num _) => null;\n}\nabstract class A implements I, J {}\nclass B extends A {\n  set setter14(String _) => null;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_SETTER_OVERRIDE_NORMAL_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidSetterOverrideNormalParamType_twoInterfaces_conflicting() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class I<U> {\n  set s(U u) {}\n}\nabstract class J<V> {\n  set s(V v) {}\n}\nclass B implements I<int>, J<String> {\n  set s(double d) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.INVALID_SETTER_OVERRIDE_NORMAL_PARAM_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_listElementTypeNotAssignable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("var v = <String> [42];");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.LIST_ELEMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mapKeyTypeNotAssignable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("var v = <String, int > {1 : 2};");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.MAP_KEY_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mapValueTypeNotAssignable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("var v = <String, String> {'a' : 2};");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.MAP_VALUE_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mismatchedAccessorTypes_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int get g { return 0; }\n  set g(String v) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.MISMATCHED_GETTER_AND_SETTER_TYPES));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mismatchedAccessorTypes_getterAndSuperSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int get g { return 0; }\n}\nclass B extends A {\n  set g(String v) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.MISMATCHED_GETTER_AND_SETTER_TYPES_FROM_SUPERTYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mismatchedAccessorTypes_setterAndSuperGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  set g(int v) {}\n}\nclass B extends A {\n  String get g { return \'\'; }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.MISMATCHED_GETTER_AND_SETTER_TYPES_FROM_SUPERTYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mismatchedAccessorTypes_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int get g { return 0; }\nset g(String v) {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.MISMATCHED_GETTER_AND_SETTER_TYPES));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingEnumConstantInSwitch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('enum E { ONE, TWO, THREE, FOUR }\nbool odd(E e) {\n  switch (e) {\n    case E.ONE:\n    case E.THREE: return true;\n  }\n  return false;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.MISSING_ENUM_CONSTANT_IN_SWITCH,StaticWarningCode.MISSING_ENUM_CONSTANT_IN_SWITCH));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixedReturnTypes_localFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {\n  m(int x) {\n    return (int y) {\n      if (y < 0) {\n        return;\n      }\n      return 0;\n    };\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.MIXED_RETURN_TYPES,StaticWarningCode.MIXED_RETURN_TYPES));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixedReturnTypes_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {\n  m(int x) {\n    if (x < 0) {\n      return;\n    }\n    return 0;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.MIXED_RETURN_TYPES,StaticWarningCode.MIXED_RETURN_TYPES));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mixedReturnTypes_topLevelFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(int x) {\n  if (x < 0) {\n    return;\n  }\n  return 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.MIXED_RETURN_TYPES,StaticWarningCode.MIXED_RETURN_TYPES));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_newWithAbstractClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {}\nvoid f() {\n  A a = new A();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NEW_WITH_ABSTRACT_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_newWithInvalidTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nf() { return new A<A>(); }');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NEW_WITH_INVALID_TYPE_PARAMETERS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_newWithInvalidTypeParameters_tooFew() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass C<K, V> {}\nf(p) {\n  return new C<A>();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NEW_WITH_INVALID_TYPE_PARAMETERS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_newWithInvalidTypeParameters_tooMany() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}\nclass C<E> {}\nf(p) {\n  return new C<A, A>();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NEW_WITH_INVALID_TYPE_PARAMETERS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_newWithNonType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('var A = 0;\nvoid f() {\n  var a = new A();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NEW_WITH_NON_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_newWithNonType_fromLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source1 : any = this.addNamedSource("/lib.dart","class B {}");
            let source2 : any = this.addNamedSource("/lib2.dart",'import \'lib.dart\' as lib;\nvoid f() {\n  var a = new lib.A();\n}\nlib.B b;');
            await this.computeAnalysisResult(source1);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source2,new core.DartList.literal(StaticWarningCode.NEW_WITH_NON_TYPE));
            this.verify(new core.DartList.literal(source1));
        } )());
    }

    test_newWithUndefinedConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() {}\n}\nf() {\n  new A.name();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NEW_WITH_UNDEFINED_CONSTRUCTOR));
        } )());
    }

    test_newWithUndefinedConstructorDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A.name() {}\n}\nf() {\n  new A();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NEW_WITH_UNDEFINED_CONSTRUCTOR_DEFAULT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberFivePlus() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  m();\n  n();\n  o();\n  p();\n  q();\n}\nclass C extends A {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FIVE_PLUS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberFour() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  m();\n  n();\n  o();\n  p();\n}\nclass C extends A {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_FOUR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_classTypeAlias_interface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class M {}\nabstract class A {}\nabstract class I {\n  m();\n}\nclass B = A with M implements I;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_classTypeAlias_mixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class M {\n  m();\n}\nabstract class A {}\nclass B = A with M;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_classTypeAlias_superclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class M {}\nabstract class A {\n  m();\n}\nclass B = A with M;');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_ensureCorrectFunctionSubtypeIsUsedInImplementation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {\n  foo(int x) => x;\n}\nabstract class D {\n  foo(x, [y]);\n}\nclass E extends C implements D {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_getter_fromInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class I {\n  int get g {return 1;}\n}\nclass C implements I {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_getter_fromSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  int get g;\n}\nclass C extends A {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_method_fromInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class I {\n  m(p) {}\n}\nclass C implements I {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_method_fromSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  m(p);\n}\nclass C extends A {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_method_optionalParamCount() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  int x(int a);\n}\nabstract class B {\n  int x(int a, [int b]);\n}\nclass C implements A, B {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_mixinInherits_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A { get g1; get g2; }\nabstract class B implements A { get g1 => 1; }\nclass C extends Object with B {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_mixinInherits_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A { m1(); m2(); }\nabstract class B implements A { m1() => 1; }\nclass C extends Object with B {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_mixinInherits_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A { set s1(v); set s2(v); }\nabstract class B implements A { set s1(v) {} }\nclass C extends Object with B {}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_noSuchMethod_interface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class I {\n  noSuchMethod(v) => \'\';\n}\nabstract class A {\n  m();\n}\nclass B extends A implements I {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_setter_and_implicitSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  set field(_);\n}\nabstract class I {\n  var field;\n}\nclass B extends A implements I {\n  get field => 0;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_setter_fromInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class I {\n  set s(int i) {}\n}\nclass C implements I {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_setter_fromSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  set s(int i);\n}\nclass C extends A {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_superclasses_interface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  get a => \'a\';\n}\nabstract class B implements A {\n  get b => \'b\';\n}\nclass C extends B {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_variable_fromInterface_missingGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class I {\n  var v;\n}\nclass C implements I {\n  set v(_) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberOne_variable_fromInterface_missingSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class I {\n  var v;\n}\nclass C implements I {\n  get v => 1;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_ONE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberThree() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  m();\n  n();\n  o();\n}\nclass C extends A {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_THREE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberTwo() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {\n  m();\n  n();\n}\nclass C extends A {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_TWO));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberTwo_variable_fromInterface_missingBoth() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class I {\n  var v;\n}\nclass C implements I {\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_TWO));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonAbstractClassInheritsAbstractMemberTwo_variable_fromMixin_missingBoth() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.enableSuperMixins = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            let source : any = this.addSource('class A {\n  int f;\n}\nclass B extends A {}\nclass C extends Object with B {}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_ABSTRACT_CLASS_INHERITS_ABSTRACT_MEMBER_TWO));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonTypeInCatchClause_noElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {\n  try {\n  } on T catch (e) {\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_TYPE_IN_CATCH_CLAUSE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonTypeInCatchClause_notType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('var T = 0;\nf() {\n  try {\n  } on T catch (e) {\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_TYPE_IN_CATCH_CLAUSE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonVoidReturnForOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int operator []=(a, b) { return a; }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_VOID_RETURN_FOR_OPERATOR));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonVoidReturnForSetter_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int set x(int v) {\n  return 42;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_VOID_RETURN_FOR_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nonVoidReturnForSetter_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  int set x(int v) {\n    return 42;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NON_VOID_RETURN_FOR_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_notAType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {}\nmain() {\n  f v = null;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NOT_A_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_notEnoughRequiredArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(int a, String b) {}\nmain() {\n  f();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NOT_ENOUGH_REQUIRED_ARGUMENTS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_notEnoughRequiredArguments_functionExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('main() {\n  (int x) {} ();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NOT_ENOUGH_REQUIRED_ARGUMENTS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_notEnoughRequiredArguments_getterReturningFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef Getter(self);\nGetter getter = (x) => x;\nmain() {\n  getter();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.NOT_ENOUGH_REQUIRED_ARGUMENTS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_partOfDifferentLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library lib;\npart \'part.dart\';');
            this.addNamedSource("/part.dart","part of lub;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.PART_OF_DIFFERENT_LIBRARY));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_redirectToInvalidFunctionType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A implements B {\n  A(int p) {}\n}\nclass B {\n  factory B() = A;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.REDIRECT_TO_INVALID_FUNCTION_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_redirectToInvalidReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  A() {}\n}\nclass B {\n  factory B() = A;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.REDIRECT_TO_INVALID_RETURN_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_redirectToMissingConstructor_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A implements B{\n  A() {}\n}\nclass B {\n  factory B() = A.name;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.REDIRECT_TO_MISSING_CONSTRUCTOR));
        } )());
    }

    test_redirectToMissingConstructor_unnamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A implements B{\n  A.name() {}\n}\nclass B {\n  factory B() = A;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.REDIRECT_TO_MISSING_CONSTRUCTOR));
        } )());
    }

    test_redirectToNonClass_notAType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B {\n  int A;\n  factory B() = A;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.REDIRECT_TO_NON_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_redirectToNonClass_undefinedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class B {\n  factory B() = A;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.REDIRECT_TO_NON_CLASS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnWithoutValue_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';\nFuture<int> f() async {\n  return;\n}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.RETURN_WITHOUT_VALUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnWithoutValue_factoryConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A { factory A() { return; } }");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.RETURN_WITHOUT_VALUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnWithoutValue_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("int f() { return; }");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.RETURN_WITHOUT_VALUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnWithoutValue_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("class A { int m() { return; } }");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.RETURN_WITHOUT_VALUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnWithoutValue_mixedReturnTypes_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('int f(int x) {\n  if (x < 0) {\n    return 1;\n  }\n  return;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.RETURN_WITHOUT_VALUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_returnWithoutValue_Null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('Null f() {return;}\n');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.RETURN_WITHOUT_VALUE));
        } )());
    }

    test_staticAccessToInstanceMember_method_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m() {}\n}\nmain() {\n  A.m();\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.STATIC_ACCESS_TO_INSTANCE_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_staticAccessToInstanceMember_method_reference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  m() {}\n}\nmain() {\n  A.m;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.STATIC_ACCESS_TO_INSTANCE_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_staticAccessToInstanceMember_propertyAccess_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  var f;\n}\nmain() {\n  A.f;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.STATIC_ACCESS_TO_INSTANCE_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_staticAccessToInstanceMember_propertyAccess_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  get f => 42;\n}\nmain() {\n  A.f;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.STATIC_ACCESS_TO_INSTANCE_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_staticAccessToInstanceMember_propertyAccess_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  set f(x) {}\n}\nmain() {\n  A.f = 42;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.STATIC_ACCESS_TO_INSTANCE_MEMBER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_switchExpressionNotAssignable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(int p) {\n  switch (p) {\n    case \'a\': break;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.SWITCH_EXPRESSION_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeAnnotationDeferredClass_asExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nclass A {}','library root;\nimport \'lib1.dart\' deferred as a;\nf(var v) {\n  v as a.A;\n}'),new core.DartList.literal<any>(StaticWarningCode.TYPE_ANNOTATION_DEFERRED_CLASS));
        } )());
    }

    test_typeAnnotationDeferredClass_catchClause() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nclass A {}','library root;\nimport \'lib1.dart\' deferred as a;\nf(var v) {\n  try {\n  } on a.A {\n  }\n}'),new core.DartList.literal<any>(StaticWarningCode.TYPE_ANNOTATION_DEFERRED_CLASS));
        } )());
    }

    test_typeAnnotationDeferredClass_fieldFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nclass A {}','library root;\nimport \'lib1.dart\' deferred as a;\nclass C {\n  var v;\n  C(a.A this.v);\n}'),new core.DartList.literal<any>(StaticWarningCode.TYPE_ANNOTATION_DEFERRED_CLASS));
        } )());
    }

    test_typeAnnotationDeferredClass_functionDeclaration_returnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nclass A {}','library root;\nimport \'lib1.dart\' deferred as a;\na.A f() { return null; }'),new core.DartList.literal<any>(StaticWarningCode.TYPE_ANNOTATION_DEFERRED_CLASS));
        } )());
    }

    test_typeAnnotationDeferredClass_functionTypedFormalParameter_returnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nclass A {}','library root;\nimport \'lib1.dart\' deferred as a;\nf(a.A g()) {}'),new core.DartList.literal<any>(StaticWarningCode.TYPE_ANNOTATION_DEFERRED_CLASS));
        } )());
    }

    test_typeAnnotationDeferredClass_isExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nclass A {}','library root;\nimport \'lib1.dart\' deferred as a;\nf(var v) {\n  bool b = v is a.A;\n}'),new core.DartList.literal<any>(StaticWarningCode.TYPE_ANNOTATION_DEFERRED_CLASS));
        } )());
    }

    test_typeAnnotationDeferredClass_methodDeclaration_returnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nclass A {}','library root;\nimport \'lib1.dart\' deferred as a;\nclass C {\n  a.A m() { return null; }\n}'),new core.DartList.literal<any>(StaticWarningCode.TYPE_ANNOTATION_DEFERRED_CLASS));
        } )());
    }

    test_typeAnnotationDeferredClass_simpleFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nclass A {}','library root;\nimport \'lib1.dart\' deferred as a;\nf(a.A v) {}'),new core.DartList.literal<any>(StaticWarningCode.TYPE_ANNOTATION_DEFERRED_CLASS));
        } )());
    }

    test_typeAnnotationDeferredClass_typeArgumentList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nclass A {}','library root;\nimport \'lib1.dart\' deferred as a;\nclass C<E> {}\nC<a.A> c;'),new core.DartList.literal<any>(StaticWarningCode.TYPE_ANNOTATION_DEFERRED_CLASS));
        } )());
    }

    test_typeAnnotationDeferredClass_typeArgumentList2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nclass A {}','library root;\nimport \'lib1.dart\' deferred as a;\nclass C<E, F> {}\nC<a.A, a.A> c;'),new core.DartList.literal<any>(StaticWarningCode.TYPE_ANNOTATION_DEFERRED_CLASS,StaticWarningCode.TYPE_ANNOTATION_DEFERRED_CLASS));
        } )());
    }

    test_typeAnnotationDeferredClass_typeParameter_bound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nclass A {}','library root;\nimport \'lib1.dart\' deferred as a;\nclass C<E extends a.A> {}'),new core.DartList.literal<any>(StaticWarningCode.TYPE_ANNOTATION_DEFERRED_CLASS));
        } )());
    }

    test_typeAnnotationDeferredClass_variableDeclarationList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;\nclass A {}','library root;\nimport \'lib1.dart\' deferred as a;\na.A v;'),new core.DartList.literal<any>(StaticWarningCode.TYPE_ANNOTATION_DEFERRED_CLASS));
        } )());
    }

    test_typeAnnotationGenericFunctionParameter_localFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  void method() {\n    T local<T>(Object t) {\n      return (t is T) ? t : null;\n    }\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.TYPE_ANNOTATION_GENERIC_FUNCTION_PARAMETER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeAnnotationGenericFunctionParameter_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {\n  T method<T>(Object t) {\n    return (t is T) ? t : null;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.TYPE_ANNOTATION_GENERIC_FUNCTION_PARAMETER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeAnnotationGenericFunctionParameter_topLevelFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('T function<T>(Object t) {\n  return (t is T) ? t : null;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.TYPE_ANNOTATION_GENERIC_FUNCTION_PARAMETER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeParameterReferencedByStatic_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<K> {\n  static K k;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.TYPE_PARAMETER_REFERENCED_BY_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeParameterReferencedByStatic_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<K> {\n  static K get k => null;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.TYPE_PARAMETER_REFERENCED_BY_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeParameterReferencedByStatic_methodBodyReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<K> {\n  static m() {\n    K k;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.TYPE_PARAMETER_REFERENCED_BY_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeParameterReferencedByStatic_methodParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<K> {\n  static m(K k) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.TYPE_PARAMETER_REFERENCED_BY_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeParameterReferencedByStatic_methodReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<K> {\n  static K m() { return null; }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.TYPE_PARAMETER_REFERENCED_BY_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeParameterReferencedByStatic_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A<K> {\n  static set s(K k) {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.TYPE_PARAMETER_REFERENCED_BY_STATIC));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typePromotion_functionType_arg_InterToDyn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('typedef FuncDyn(x);\ntypedef FuncA(A a);\nclass A {}\nclass B {}\nmain(FuncA f) {\n  if (f is FuncDyn) {\n    f(new B());\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
        } )());
    }

    test_typeTestNonType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('var A = 0;\nf(var p) {\n  if (p is A) {\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.TYPE_TEST_WITH_NON_TYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeTestWithUndefinedName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(var p) {\n  if (p is A) {\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.TYPE_TEST_WITH_UNDEFINED_NAME));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedClass_instanceCreation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("f() { new C(); }");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_CLASS));
        } )());
    }

    test_undefinedClass_variableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("f() { C c; }");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_CLASS));
        } )());
    }

    test_undefinedClassBoolean_variableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("f() { boolean v; }");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_CLASS_BOOLEAN));
        } )());
    }

    test_undefinedGetter_fromLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source1 : any = this.addNamedSource("/lib.dart","");
            let source2 : any = this.addNamedSource("/lib2.dart",'import \'lib.dart\' as lib;\nvoid f() {\n  var g = lib.gg;\n}');
            await this.computeAnalysisResult(source1);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source2,new core.DartList.literal(StaticWarningCode.UNDEFINED_GETTER));
            this.verify(new core.DartList.literal(source1));
        } )());
    }

    test_undefinedIdentifier_for() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(var l) {\n  for (e in l) {\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_IDENTIFIER));
        } )());
    }

    test_undefinedIdentifier_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("int a() => b;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_IDENTIFIER));
        } )());
    }

    test_undefinedIdentifier_importCore_withShow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:core\' show List;\nmain() {\n  List;\n  String;\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_IDENTIFIER));
        } )());
    }

    test_undefinedIdentifier_initializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("var a = b;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_IDENTIFIER));
        } )());
    }

    test_undefinedIdentifier_methodInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("f() { C.m(); }");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_IDENTIFIER));
        } )());
    }

    test_undefinedIdentifier_private_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.dart",'library lib;\nclass A {\n  var _foo;\n}');
            let source : any = this.addSource('import \'lib.dart\';\nclass B extends A {\n  test() {\n    var v = _foo;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_IDENTIFIER));
        } )());
    }

    test_undefinedIdentifier_private_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.dart",'library lib;\nclass A {\n  var _foo;\n}');
            let source : any = this.addSource('import \'lib.dart\';\nclass B extends A {\n  test() {\n    _foo = 42;\n  }\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_IDENTIFIER));
        } )());
    }

    test_undefinedIdentifierAwait_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("void a() { await; }");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_IDENTIFIER_AWAIT));
        } )());
    }

    test_undefinedNamedParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f({a, b}) {}\nmain() {\n  f(c: 1);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.UNDEFINED_NAMED_PARAMETER));
        } )());
    }

    test_undefinedSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.dart","");
            let source2 : any = this.addNamedSource("/lib2.dart",'import \'lib.dart\' as lib;\nvoid f() {\n  lib.gg = null;\n}');
            await this.computeAnalysisResult(source2);
            this.assertErrors(source2,new core.DartList.literal(StaticWarningCode.UNDEFINED_SETTER));
        } )());
    }

    test_undefinedStaticMethodOrGetter_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {}\nf(var p) {\n  f(C.m);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_undefinedStaticMethodOrGetter_getter_inSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class S {\n  static int get g => 0;\n}\nclass C extends S {}\nf(var p) {\n  f(C.g);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_GETTER));
        } )());
    }

    test_undefinedStaticMethodOrGetter_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class C {}\nf(var p) {\n  f(C.m());\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_METHOD));
        } )());
    }

    test_undefinedStaticMethodOrGetter_method_inSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class S {\n  static m() {}\n}\nclass C extends S {}\nf(var p) {\n  f(C.m());\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_METHOD));
        } )());
    }

    test_undefinedStaticMethodOrGetter_setter_inSuperclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class S {\n  static set s(int i) {}\n}\nclass C extends S {}\nf(var p) {\n  f(C.s = 1);\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_SETTER));
        } )());
    }

    test_voidReturnForGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class S {\n  void get value {}\n}');
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.VOID_RETURN_FOR_GETTER));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StaticWarningCodeTest() {
    }
}

export class properties {
}
